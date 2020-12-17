import * as grpc from "@grpc/grpc-js";
import { watch } from "chokidar";
import { EventEmitter } from "events";
import * as fs from "fs";
import * as ini from "ini";
import * as path from "path";
import * as process from "process";
import { Emulator } from "./emulator";
import * as emu from "./proto/emulator_controller_grpc_pb";

/**
 * This class can discover all running emulators.
 *
 * It will scan all available emulators upon creation, and start watching
 * for emulators that are shutting down or are coming into existence.
 * You likely want to register the "add" and "delete" events. You will
 * now get a pid which can be used to retrieve an emulator object.
 *
 * @remarks
 * The .ini files are written during startup of the emulator and are
 * deleted during clean shutdown. Lingering .ini files will be cleaned up
 * on the next emulator launch.
 *
 * @example
 * ```
 *  const discovery = new EmulatorDiscovery();
 *  const pid = discovery!.pids().next();
 *  if (!pid.done) {
 *    const emulator = discovery!.getEmulator(pid.value)!;
 *   // Do your thing with the first existing emulator.
 *  } else {
 *   discovery!.on("add", (pid) => {
 *     const emulator = discovery!.getEmulator(pid)!;
 *     // Do your thing with the new emulator.
 *  });
 *  }
 * ```
 *
 */
export class EmulatorDiscovery {
  private discoveryDir: string;
  private discovered: Map<number, any>;
  private watcher: fs.FSWatcher;
  private emitter: EventEmitter;

  constructor() {
    this.discoveryDir = this.getDiscoveryDir();
    this.watcher = watch(this.discoveryDir, {
      ignored: /^\./,
      persistent: true,
      awaitWriteFinish: true,
      depth: 1,
    });
    this.discovered = new Map<number, any>();
    this.emitter = new EventEmitter();
    this.discover();
    this.watch();
  }

  /** Iterator over all available emulator pids.
   *
   * @returns All discovered emulator process ids.
   */
  pids(): IterableIterator<number> {
    return this.discovered.keys();
  }

  /**
   * Gets an emulator connection to the given pid.
   *
   * @param pid The process id of the discovered emulator.
   */
  getEmulator(pid: number): Emulator {
    const cfg = this.discovered.get(pid);
    const metadata: grpc.Metadata = new grpc.Metadata();
    if (cfg["grpc.token"]) {
      metadata.add("authorization", `Bearer ${cfg["grpc.token"]}`);
    }

    return new Emulator({
      pid: pid,
      client: new emu.EmulatorControllerClient(
        `localhost:${cfg["grpc.port"]}`,
        grpc.credentials.createInsecure()
      ),
      metadata: metadata,
    });
  }

  /** You can register "add" and "delete" events.
   *
   * @param type The event type, can be "add" or "delete"
   * @param listener Callback when the event occurs.
   *
   * @returns The discovery object.
   */
  on(type: string, listener: (pid: number) => void) {
    this.emitter.on(type, listener);
  }

  /** Disconnects the watcher, you will no longer receive "add" or "delete" events. */
  close() {
    this.watcher.close();
    this.emitter.removeAllListeners();
  }

  private getUserDir() {
    // See ConfigDirs::getUserDirectory() in emulator source code.

    let ANDROID_SUBDIR: string = ".android";
    if (process.env.ANDROID_EMULATOR_HOME) {
      return process.env.ANDROID_EMULATOR_HOME;
    }

    if (process.env.ANDROID_SDK_HOME) {
      return path.join(process.env.ANDROID_SDK_HOME, ANDROID_SUBDIR);
    }

    return path.join(process.env.HOME!, ANDROID_SUBDIR);
  }

  private getDiscoveryDir() {
    let dir = "";
    if (process.platform === "win32" && process.env.LOCALAPPADATA) {
      dir = path.join(process.env.LOCALAPPDATA!, "Temp");
    }
    if (process.platform === "linux") {
      if (
        !process.env.XDG_RUNTIME_DIR ||
        !fs.existsSync(process.env.XDG_RUNTIME_DIR)
      ) {
        dir = path.join("run", "user", process.getuid().toString());
      } else {
        dir = process.env.XDG_RUNTIME_DIR;
      }
    }
    if (process.platform === "darwin" && process.env.HOME) {
      dir = path.join(process.env.HOME, "Library", "Caches", "TemporaryItems");
    }
    if (!fs.existsSync(dir)) {
      dir = this.getUserDir();
    }
    return path.join(dir, "avd", "running");
  }

  /** True if the process is still alive. */
  private isRunning(pid: number) {
    try {
      return process.kill(pid, 0);
    } catch (e) {
      return e.code === "EPERM";
    }
  }

  private watch() {
    const self = this;
    this.watcher
      .on("add", (filename: string) => {
        console.log("File", filename, "has been added (emulator started)");
        const { pid, config } = self.loadDiscoveryFile(
          path.dirname(filename),
          path.basename(filename)
        );
        if (pid && this.isRunning(+pid)) {
          self.discovered.set(+pid, config);
          this.emitter.emit("add", +pid);
        }
      })
      .on("unlink", (filename: string) => {
        console.log("File", filename, "has been removed (emulator stopped?)");
        const match = filename.match(".*pid_(\\d+).ini");
        if (match) {
          self.discovered.delete(+match[1]);
          this.emitter.emit("delete", +match[1]);
        }
      })
      .on("error", (error) => {
        console.error("Error happened", error);
      });
  }

  private loadDiscoveryFile(dir: string, fname: string) {
    // Discovery files look lile `pid_12345.ini` and are
    // simple .ini files. The are written on emulator launch.
    const match = fname.match("pid_(\\d+).ini");
    if (match && this.isRunning(+match[1])) {
      const pid: number = +match[1];
      try {
        const contents = fs.readFileSync(path.join(dir, fname), {
          encoding: "utf8",
        });
        var config = ini.parse(contents);
        config["pid"] = pid;
        return { pid: pid, config: config };
      } catch (e: any) {
        console.log("Failed to parse config file" + e);
      }
    }
    return { pid: undefined, config: undefined };
  }

  private discover() {
    // Scan's the discovery directory for pid files.
    if (!fs.existsSync(this.discoveryDir)) {
      return;
    }

    fs.readdirSync(this.discoveryDir).forEach((file) => {
      const { pid, config } = this.loadDiscoveryFile(this.discoveryDir, file);
      if (pid) {
        this.discovered.set(pid, config);
      }
    });
  }
}

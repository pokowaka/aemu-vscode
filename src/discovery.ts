import * as fs from "fs";
import * as process from "process";
import * as path from "path";
import * as ini from "ini";
import * as grpc from "@grpc/grpc-js";
import * as emu from "./proto/emulator_controller_grpc_pb";
import { Emulator } from "./emulator";
import { watch } from "chokidar";

export class EmulatorDiscovery {
  discoveryDir: string;
  discovered: Map<string, any>;

  constructor() {
    this.discoveryDir = this.getDiscoveryDir();
    this.discovered = new Map<string, any>();
    this.discover();
  }

  size() {
    return this.discovered.size;
  }

  first() {
    for (let key of this.discovered.keys()) {
      return key;
    }
    return "";
  }

  getFirstClient() {
    return this.getClient(this.first());
  }

  getClient(pid: string) {
    const cfg = this.discovered.get(pid);
    const metadata: grpc.Metadata = new grpc.Metadata();
    if (cfg["grpc.token"]) {
      metadata.add("authorization", `Bearer ${cfg["grpc.token"]}`);
    }

    return {
      pid: pid,
      client: new emu.EmulatorControllerClient(
        `localhost:${cfg["grpc.port"]}`,
        grpc.credentials.createInsecure()
      ),
      metadata: metadata,
    };
  }

  getUserDir() {
    let ANDROID_SUBDIR: string = ".android";
    // See ConfigDirs::getUserDirectory()
    if (process.env.ANDROID_EMULATOR_HOME) {
      return process.env.ANDROID_EMULATOR_HOME;
    }

    if (process.env.ANDROID_SDK_HOME) {
      return path.join(process.env.ANDROID_SDK_HOME, ANDROID_SUBDIR);
    }

    return path.join(process.env.HOME!, ANDROID_SUBDIR);
  }

  getDiscoveryDir() {
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

  watch(emulator: Emulator) {
    const self = this;
    var watcher = watch(this.discoveryDir, {
      ignored: /^\./,
      persistent: true,
      awaitWriteFinish: true,
      depth: 1,
    });

    watcher
      .on("add", (fpath: string) => {
        console.log("File", fpath, "has been added (emulator started)");
        const { pid, config } = self.loadfile(
          path.dirname(fpath),
          path.basename(fpath)
        );
        if (pid) {
          self.discovered.set(pid, config);
          emulator.connect(self.getClient(pid));
        }
      })
      .on("unlink", (fpath: string) => {
        console.log("File", fpath, "has been removed (emulator stopped?)");
        const match = fpath.match(".*pid_(\\d+).ini");
        if (match) {
          if (emulator && emulator.pid === match[1]) {
            emulator.close();
          }
          self.discovered.delete(match[1]);
        }
      })
      .on("error", (error) => {
        console.error("Error happened", error);
      });
  }

  loadfile(dir: string, fname: string) {
    const match = fname.match("pid_(\\d+).ini");
    if (match) {
      const pid = match[1];
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

  discover() {
    if (!fs.existsSync(this.discoveryDir)) {
      return;
    }

    fs.readdirSync(this.discoveryDir).forEach((file) => {
      const { pid, config } = this.loadfile(this.discoveryDir, file);
      if (pid) {
        this.discovered.set(pid, config);
      }
    });
  }
}

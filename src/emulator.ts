import * as grpc from "@grpc/grpc-js";
import { EventEmitter } from "events";
import * as fs from "fs";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as os from "os";
import * as path from "path";
import * as url from "url";
import * as emu from "./proto/emulator_controller_grpc_pb";
import {
  Image,
  ImageFormat,
  ImageTransport,
  KeyboardEvent,
  MouseEvent as MouseEvt,
  VmRunState
} from "./proto/emulator_controller_pb";

export enum EmulatorKeyEvent {
  keydown = "keydown",
  keyup = "keyup",
  keypress = "keypress",
}

export enum EmulatorEvent {
  frame = "frame",
  close = "close",
}

/**
 * A connection to a remote (running) emulator. You can send mouse & keyboard
 * events to the emulator. You can register to receive "frame" events to be
 * notified when a new frame can be rendered.
 *
 * The emulator will start receiving frames as soon as a listener for frames
 * is registered.
 *
 * @example
 * const canvas = document.getElementById("emulator");
 * const context = canvas.getContext("2d");
 * const imagedata = context.createImageData(canvas.width, canvas.height);
 * emulator.on("frame", (img: Image) => {
 *      const format = img.getFormat()!;
 *      const handle = format.getTransport()?.getHandle()!;
 *      const contents = fs.readFileSync(fileURLToPath(handle))
 *      for (var i = 0; i < message.width * message.height * 3; i += 3) {
 *          imagedata.data[j++] = contents[i];
 *          imagedata.data[j++] = contents[i + 1];
 *          imagedata.data[j++] = contents[i + 2];
 *          imagedata.data[j++] = 0xff;
 *      }
 *		  context.putImageData(imagedata, 0, 0);
 * });
 *
 * @remarks
 * You will need to call the `resize` method when your view is changing size
 * to make sure you optimize transfer.
 *
 * @see {@link EmulatorDiscovery} to obtain an emulator object.
 */
export class Emulator {
  // Emulator connection information.
  private client: emu.EmulatorControllerClient;

  // pid of the emulator process.
  private pid: number;

  // Metadata that *must* be passed to the gRPC call (likely has token)
  private metadata: grpc.Metadata;

  // Width & Height of the canvas, this is the rendered emulator frame.
  private width: number;
  private height: number;

  // Width & Height of the avd.
  private deviceWidth: number;
  private deviceHeight: number;

  // True if we need to reset the stream for a resize.
  private wantsResize: boolean;

  // Active image stream.
  private stream: grpc.ClientReadableStream<Image> | undefined;
  private emitter: EventEmitter;

  // Directory used for marshalling RGB888 img, defaults to tmpdir.
  private transportDir: string;

  /**
   * Creates an instance of Emulator.
   *
   * You usually do not want to use this directly. Instead obtain an emulator
   * object by using the discovery service.
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
   */
  constructor(
    runningEmulator: {
      pid: number;
      client: emu.EmulatorControllerClient;
      metadata: grpc.Metadata;
    },
    transportDirectory: string = os.tmpdir()
  ) {
    this.deviceHeight = 1920;
    this.deviceWidth = 1080;
    this.width = 1080 / 3;
    this.height = 1920 / 3;
    this.stream = undefined;
    this.wantsResize = false;
    this.transportDir = transportDirectory;
    this.emitter = new EventEmitter();
    this.pid = runningEmulator.pid;
    this.client = runningEmulator.client;
    this.metadata = runningEmulator.metadata;

    this.deviceStatus();
  }

  /** Registers the given event type. */
  on(type: EmulatorEvent, listener: (data: any) => void) {
    this.emitter.on(type, listener);
    if (type === EmulatorEvent.frame) {
      this.streamScreenshot();
    }
    return this;
  }

  /** True if the emulator process is still alive. */
  isRunning(pid: number) {
    try {
      return process.kill(pid, 0);
    } catch (e) {
      return e.code === "EPERM";
    }
  }

  /**
   * Sends the given key event to the emulator.
   *
   * @param eventType Type of event, keyup, keydown or keypress.
   * @param key Javascript keycode. @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values}
   */
  sendKey(eventType: EmulatorKeyEvent, key: string) {
    var request = new KeyboardEvent();
    request.setEventtype(
      eventType === EmulatorKeyEvent.keydown
        ? KeyboardEvent.KeyEventType.KEYDOWN
        : eventType === EmulatorKeyEvent.keyup
        ? KeyboardEvent.KeyEventType.KEYUP
        : KeyboardEvent.KeyEventType.KEYPRESS
    );
    request.setKey(key);
    this.client!.sendKey(request, this.metadata!, (err) => {
      if (err) {
        console.log(
          "Failed to deliver " +
            request.toString() +
            ", err: " +
            JSON.stringify(err)
        );
      }
    });
  }

  /**
   * Sends the given mouse event to the emulator.
   *
   * The x, y coordinates will be normalized and should be within
   * the width and height that are set by the resize function.
   * button: 0 no button, 1: left button, 2: right button.
   *
   * @example:
    	this.canvas.addEventListener("mousedown", e => {
      const mouse = {
        x: e.clientX,
        y: e.clientY,
        // In browser's MouseEvent.button property,
        // 0 stands for left button and 2 stands for right button.
        button: e.button === 0 ? 1 : e.button === 2 ? 2 : 0
      };
      emulator.sendMouse(mouse);
    });
   *
   * @param mouse The mouse event to send
   */
  sendMouse(mouse: { x: number; y: number; button: number }) {
    let scaleX = this.deviceWidth / this.width;
    let scaleY = this.deviceHeight / this.height;

    let x = Math.round(mouse.x * scaleX);
    let y = Math.round(mouse.y * scaleY);
    var request = new MouseEvt();
    request.setX(x);
    request.setY(y);
    request.setButtons(mouse.button);

    this.client!.sendMouse(request, this.metadata!, (err) => {
      if (err) {
        console.log(
          "Failed to deliver " +
            request.toString() +
            ", err: " +
            JSON.stringify(err)
        );
      }
    });
  }

  /** Resizes the requested image stream. You should call this if your rendering surfaces changes in size. */
  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.wantsResize = true;
    this.stream?.cancel();
  }

  /** Closes down the emulator connection. This will *NOT* stop the emulator from running. */
  close() {
    this.client?.close();
    this.emitter.emit("close", this.pid);
    this.emitter.removeAllListeners();
  }

  /** Clean shutdown of the emulator. */
  shutdown() {
    let state = new VmRunState();
    state.setState(VmRunState.RunState.SHUTDOWN);
    this.client.setVmState(state, (err, response) => {
      if (err) {
        console.log("Emulator shutdown failed", JSON.stringify(err));
      }
    });
  }

  private streamScreenshot() {
    // File where the emulator writes the RGB888 file. mmap on the emulator side
    const tmpfile = path.join(
      this.transportDir,
      `emu-${this.width}x${this.height}.rgb888`
    );

    fs.openSync(tmpfile, "w");
    fs.truncateSync(tmpfile, this.height * this.width * 3);

    let transport = new ImageTransport();
    transport.setChannel(ImageTransport.TransportChannel.MMAP);
    transport.setHandle(url.pathToFileURL(tmpfile).toString());

    let fmt = new ImageFormat();
    fmt.setHeight(this.height);
    fmt.setWidth(this.width);
    fmt.setFormat(ImageFormat.ImgFormat.RGB888);
    fmt.setTransport(transport);

    this.stream = this.client!.streamScreenshot(fmt, this.metadata!);
    this.stream.on("data", (img: Image) => {
      // Make sure we properly translate mouse clicks.
      const format = img.getFormat()!;
      this.width = format.getWidth();
      this.height = format.getHeight();
      this.emitter.emit("frame", img);
    });

    this.stream.on("error", (err: any) => {
      // We cancel the stream on resize, so lets restart it!
      console.log("Error from screenshot: " + err.message);
      switch (err.code) {
        case 1:
          if (this.wantsResize) {
            this.wantsResize = false;
            this.streamScreenshot();
          }
          break;
        case 13:
          this.close();
          break;
        default:
          console.log("Error from screenshot: " + JSON.stringify(err));
      }

      // Remove our transport file.
      fs.unlinkSync(tmpfile);
    });
  }

  // Retrieves the device status, we use this to get the device width & height.
  private deviceStatus() {
    this.client!.getStatus(new Empty(), this.metadata!, (err, response) => {
      var hwConfig = new Map<string, string>();
      const entryList = response.getHardwareconfig()!.getEntryList();
      for (var i = 0; i < entryList.length; i++) {
        const key = entryList[i].getKey();
        const val = entryList[i].getValue();
        hwConfig.set(key, val);
      }

      this.deviceWidth = +hwConfig.get("hw.lcd.width")!;
      this.deviceHeight = +hwConfig.get("hw.lcd.height")!;
    });
  }
}

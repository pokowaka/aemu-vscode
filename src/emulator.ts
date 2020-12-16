import * as grpc from "@grpc/grpc-js";
import { config } from "./config";
import * as vscode from "vscode";
import * as fs from "fs";
import * as emu from "./proto/emulator_controller_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import {
  ImageFormat,
  Image,
  ImageTransport,
  KeyboardEvent,
  MouseEvent as MouseEvt,
} from "./proto/emulator_controller_pb";
import * as path from "path";
import * as cp from "child_process";
import { EmulatorDiscovery } from "./discovery";

function exec(
  command: string,
  options: cp.ExecOptions = {}
): Promise<{ stdout: string; stderr: string }> {
  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    cp.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      }
      resolve({ stdout, stderr });
    });
  });
}

// A visible embedded emulator. This component interacts with a running emulator over gRPC.
// It will register to retrieve screenshots that are delivered over a file side channel.
// Every frame will be written to a file and the emulator will notify this object that
// a new frame is available.
//
// Frames are marshalled across the security boundary by encoding them to base64 and sending
// a json message to the Webview. The webview is repsonsible for posting a message after rendering
// to notify this object that it can render another frame. Frames that are delivered in the meantime will be dropped.
//
// Emulators are discovered by looking for an emulator discovery file. If none exists the plugin will wait until
// one becomes available.
export class Emulator {
  // Emulator connection information.
  client: emu.EmulatorControllerClient | undefined;

  // pid of the emulator process.
  pid: string | undefined;

  // Metadata that *must* be passed to the gRPC call (likely has token)
  metadata: grpc.Metadata | undefined;

  // Current mouse state.
  mouse: { x: number; y: number; mousedown: boolean; button: number };

  // Width & Height of the canvas, this is the rendered emulator frame.
  width: number;
  height: number;

  // Width & Height of the avd.
  deviceWidth: number;
  deviceHeight: number;

  // File where the emulator writes the RGB888 file. mmap on the emulator side
  tmpfile: vscode.Uri;

  // Webview that renders and provides mouse/keyboard events.
  panel: vscode.WebviewPanel;

  context: vscode.ExtensionContext;

  // True if the hosted webview can handle another frame
  wantsFrame: boolean;
  wantsResize: boolean;

  stream: grpc.ClientReadableStream<Image> | null;
  discovery: EmulatorDiscovery;

  constructor(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
    // TODO(jansene): Make variable.

    this.deviceHeight = 1920;
    this.deviceWidth = 1080;
    this.width = 1080 / 3;
    this.height = 1920 / 3;
    this.mouse = { x: 0, y: 0, mousedown: false, button: 0 };
    this.panel = panel;
    this.context = context;
    this.panel.webview.html = this.getWebviewContent();
    this.tmpfile = vscode.Uri.file(
      path.join(this.context.extensionPath, "media", "emu.png")
    );
    this.stream = null;
    this.wantsFrame = true;
    this.wantsResize = false;
    this.discovery = new EmulatorDiscovery();
    this.addListeners();

    if (this.discovery.size() > 0) {
      this.connect(this.discovery.getFirstClient()!);
    } else {
      vscode.window.showInformationMessage("Waiting for emulator.");
      this.discovery.watch(this);
    }
  }

  // Connect to a running emulator with the given pid and client.
  connect(emulator: {
    pid: string;
    client: emu.EmulatorControllerClient;
    metadata: grpc.Metadata;
  }) {
    this.pid = emulator.pid;
    this.client = emulator.client;
    this.metadata = emulator.metadata;

    vscode.window.showInformationMessage(
      `Connecting to emulator with pid: ${this.pid}`
    );
    this.deviceStatus();
    this.streamScreenshot();
    this.reveal();
  }

  // Activates the window.
  reveal() {
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    this.panel.reveal(columnToShowIn);
  }

  getWebviewContent() {
    const scriptPath = this.panel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(this.context.extensionPath, "media", "emulator.js")
      )
    );
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Android Emulator</title>
      </head>
      <body>
        <div
          id="container"
          style="width: 100%; height: 100vh;"
        >
          <canvas id="emulator"></canvas>
          <script src="${scriptPath}"></script>
        </div>
      </body>
    </html>
    `;
  }

  // Sends mouse event to the emulator.
  sendMouse() {
    let scaleX = this.deviceWidth / this.width;
    let scaleY = this.deviceHeight / this.height;

    let x = Math.round(this.mouse.x * scaleX);
    let y = Math.round(this.mouse.y * scaleY);
    var request = new MouseEvt();
    request.setX(x);
    request.setY(y);
    request.setButtons(this.mouse.mousedown ? this.mouse.button : 0);

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

  async launch(avd: string) {
    return exec(
      `${config.emulatorPath} -avd ${avd} -netdelay none -netspeed full -qt-hide-window -grpc-use-token -idle-grpc-timeout 300 &`
    );
  }

  sendKey(eventType: string, key: string) {
    var request = new KeyboardEvent();
    request.setEventtype(
      eventType === "keydown"
        ? KeyboardEvent.KeyEventType.KEYDOWN
        : eventType === "keyup"
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
  // Retrieves the device status, we use this to get the device width & height.
  deviceStatus() {
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

  // Setup the listeners for the webview.
  addListeners() {
    this.panel.webview.onDidReceiveMessage(
      (message: any) => {
        switch (message.command) {
          case "frame":
            // The webpanel can render another frame.
            this.wantsFrame = true;
            break;
          case "resize":
            //  Request a new stream with the given width and height.
            this.width = message.w;
            this.height = message.h;
            this.wantsResize = true;
            this.stream?.cancel();
            break;
          case "key":
            this.sendKey(message.eventType, message.key);
            break;
          case "mousedown":
            this.mouse = {
              x: message.x,
              y: message.y,
              mousedown: true,
              // In browser's MouseEvent.button property,
              // 0 stands for left button and 2 stands for right button.
              button: message.button === 0 ? 1 : message.button === 2 ? 2 : 0,
            };
            this.sendMouse();
            break;

          case "mouseup":
            this.mouse = {
              x: message.x,
              y: message.y,
              mousedown: false,
              button: 0,
            };
            this.sendMouse();
            break;
          case "mousemove":
            this.mouse = {
              x: message.x,
              y: message.y,
              mousedown: this.mouse.mousedown,
              button: this.mouse.button,
            };
            this.sendMouse();
            break;
        }
      },
      undefined,
      this.context.subscriptions
    );
  }

  streamScreenshot() {
    this.panel.webview.postMessage({ command: "enable" });
    let transport = new ImageTransport();
    transport.setChannel(ImageTransport.TransportChannel.MMAP);
    transport.setHandle(this.tmpfile.toString());

    let fmt = new ImageFormat();
    fmt.setHeight(this.height);
    fmt.setWidth(this.width);
    fmt.setFormat(ImageFormat.ImgFormat.RGB888);
    fmt.setTransport(transport);

    // Clear out the file.
    fs.openSync(this.tmpfile.fsPath, "w");
    fs.truncateSync(this.tmpfile.fsPath, this.height * this.width * 3);

    this.stream = this.client!.streamScreenshot(fmt, this.metadata!);
    this.stream.on("data", (img: Image) => {
      const format = img.getFormat()!;
      // Make sure we properly translate mouse clicks.
      this.width = format.getWidth();
      this.height = format.getHeight();

      if (this.wantsFrame) {
        this.wantsFrame = false;
        const contents = fs.readFileSync(this.tmpfile.fsPath, {
          encoding: "base64",
        });
        let data = {
          command: "frame",
          img: contents,
          width: format.getWidth(),
          height: format.getHeight(),
        };
        this.panel.webview.postMessage(data);
      }
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
    });
  }

  close() {
    vscode.window.showInformationMessage(
      `Emulator connection to ${this.pid} closed.`
    );
    this.client?.close();
    this.client?.getChannel().close();
    let data = {
      command: "frame",
      img: "",
      width: 0,
      height: 0,
    };
    this.panel.webview.postMessage(data);
  }
}

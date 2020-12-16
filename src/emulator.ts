import * as grpc from "@grpc/grpc-js";
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

export class Emulator {
  client: emu.EmulatorControllerClient;

  // Current mouse state.
  mouse: { x: number; y: number; mousedown: boolean; button: number };

  // Width & Height of the canvas.
  width: number;
  height: number;

  // Width & Height of the device.
  deviceWidth: number;
  deviceHeight: number;

  // File where the emulator writes the RGB888 file. mmap on the emulator side
  tmpfile: vscode.Uri;
  panel: vscode.WebviewPanel;
  context: vscode.ExtensionContext;

  // True if the hosted webview can handle another frame
  wantsFrame: boolean;
  wantsResize: boolean;

  stream: grpc.ClientReadableStream<Image> | null;

  constructor(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
    this.client = new emu.EmulatorControllerClient(
      "localhost:8554",
      grpc.credentials.createInsecure()
    );
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

    this.addListeners();
    this.deviceStatus();
    this.streamScreenshot();
  }

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

    this.client.sendMouse(request, (err) => {
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
    this.client.sendKey(request, (err) => {
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
    this.client.getStatus(new Empty(), (err, response) => {
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
    let transport = new ImageTransport();
    transport.setChannel(ImageTransport.TransportChannel.MMAP);
    transport.setHandle(this.tmpfile.toString());

    let fmt = new ImageFormat();
    fmt.setHeight(this.height);
    fmt.setWidth(this.width);
    fmt.setFormat(ImageFormat.ImgFormat.RGB888);
    fmt.setTransport(transport);

    // Clear out the file.
    fs.truncateSync(this.tmpfile.fsPath, this.height * this.width * 3);

    this.stream = this.client.streamScreenshot(fmt);
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
          img: contents,
          width: format.getWidth(),
          height: format.getHeight(),
        };
        this.panel.webview.postMessage(data);
      }
    });

    this.stream.on("error", (err: Error) => {
      // We cancel the stream on resize, so lets restart it!
      console.log("Error from screenshot: " + err.message);
      if (this.wantsResize) {
        this.wantsResize = false;
        this.streamScreenshot();
      } else {
        console.log("Error from screenshot: " + JSON.stringify(err));
      }
    });
  }

  close() {
    this.client.close();
    this.client.getChannel().close();
  }
}

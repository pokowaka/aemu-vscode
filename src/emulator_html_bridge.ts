import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as vscode from "vscode";
import { Emulator, EmulatorEvent } from "./emulator";
import { Image } from "./proto/emulator_controller_pb";

export class EmulatorBridge {
  private context: vscode.ExtensionContext;
  private panel: vscode.WebviewPanel;
  private emulator: Emulator;

  // True if the panel can render a framee.
  private acceptsFrame: boolean;

  // Current mouse state.
  button: number;

  constructor(
    panel: vscode.WebviewPanel,
    context: vscode.ExtensionContext,
    emulator: Emulator
  ) {
    this.context = context;
    this.panel = panel;
    this.panel.webview.html = this.getWebviewContent();
    this.emulator = emulator;
    this.acceptsFrame = true;
    this.button = 0;
    this.addListeners();
    this.emulator
      .on(EmulatorEvent.frame, (img: Image) => {
        this.renderFrame(img);
      })
      .on(EmulatorEvent.close, (pid: string) => {
        this.renderEmulatorClosed();
      });
  }

  private renderEmulatorClosed() {
    // TODO(jansene): Show something nice here.
    let data = {
      command: "frame",
      img: "",
      width: 0,
      height: 0,
    };
    this.panel.webview.postMessage(data);
  }

  private renderFrame(img: Image) {
    if (this.acceptsFrame) {
      this.acceptsFrame = false;

      // TODO(pokowaka): Use mmap module?
      const format = img.getFormat()!;
      const handle = format.getTransport()?.getHandle()!;
      const contents = fs.readFileSync(fileURLToPath(handle), {
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
  }

  // Activates the window.
  reveal() {
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    this.panel.reveal(columnToShowIn);
  }

  // Close up shop.
  close() {
    this.emulator.close();
  }

  // Setup the listeners for the webview.
  private addListeners() {
    this.panel.webview.onDidReceiveMessage(
      (message: any) => {
        switch (message.command) {
          case "frame":
            // The webpanel can render another frame.
            this.acceptsFrame = true;
            break;
          case "resize":
            this.emulator.resize(message.w, message.h);
            break;
          case "key":
            this.emulator.sendKey(message.eventType, message.key);
            break;
          case "mousedown":
            {
              this.button =
                message.button === 0 ? 1 : message.button === 2 ? 2 : 0;
              const mouse = {
                x: message.x,
                y: message.y,
                // In browser's MouseEvent.button property,
                // 0 stands for left button and 2 stands for right button.
                button: this.button,
              };
              this.emulator.sendMouse(mouse);
            }
            break;
          case "mouseup":
            {
              this.button = 0;
              const mouse = {
                x: message.x,
                y: message.y,
                button: 0,
              };
              this.emulator.sendMouse(mouse);
            }
            break;
          case "mousemove":
            {
              const mouse = {
                x: message.x,
                y: message.y,
                button: this.button,
              };
              if (this.button !== 0) {
                this.emulator.sendMouse(mouse);
              }
            }
            break;
        }
      },
      undefined,
      this.context.subscriptions
    );
  }

  private getWebviewContent() {
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
}

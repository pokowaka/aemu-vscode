// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as grpc from "@grpc/grpc-js";
import * as fs from "fs";
import * as emu from "./proto/emulator_controller_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import {
  ImageFormat,
  Image,
  ImageTransport,
  MouseEvent,
} from "./proto/emulator_controller_pb";
import * as path from "path";
import { getMaxListeners } from "process";

function getSlowWebviewContent(w: number, h: number, script: string) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Android Emulator</title>
  </head>
  <body>
    <canvas id="viewport" width="${w}" height="${h}" />
    <script src="${script}" />
	</body>
  </html>`;
}

var client: emu.EmulatorControllerClient;


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "aemu" is now active!');

  client = new emu.EmulatorControllerClient(
    "localhost:8554",
    grpc.credentials.createInsecure()
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("aemu.helloWorld", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World from aemu!");

    const panel = vscode.window.createWebviewPanel(
      "catCoding",
      "Android Emulator",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        // Only allow the webview to access resources in our extension's media directory
        localResourceRoots: [
          vscode.Uri.file(path.join(context.extensionPath, "media")),
        ],
      }
    );

    // Get path to resources on disk
    const onDiskPath = vscode.Uri.file(
      path.join(context.extensionPath, "media", "emu.png")
    );

    const scriptPath = panel.webview.asWebviewUri(
      vscode.Uri.file(path.join(context.extensionPath, "media", "emulator.js"))
    );

    let transport = new ImageTransport();
    transport.setChannel(ImageTransport.TransportChannel.MMAP);
    transport.setHandle(onDiskPath.toString());

    // TODO(jansene): The size must match what the emulator is delivering, otherwise you'll get a garbled image.
    let fmt = new ImageFormat();
    fmt.setHeight(1920 / 3);
    fmt.setWidth(1080 / 3);
    fmt.setFormat(ImageFormat.ImgFormat.RGBA8888);
    fmt.setTransport(transport);
    panel.webview.html = getSlowWebviewContent(
      fmt.getWidth(),
      fmt.getHeight(),
      scriptPath.toString()
    );

    let deviceWidth = 1080;
    let deviceHeight = 1920;
    let scaleX = deviceWidth / fmt.getWidth();
    let scaleY = deviceHeight / fmt.getHeight();

    const stream = client.streamScreenshot(fmt);
    stream.on("data", (img: Image) => {
      // This seems to work..
      const contents = fs.readFileSync(onDiskPath.fsPath, {
        encoding: "base64",
      });
      let data = { img: contents };
      panel.webview.postMessage(data);
    });

    panel.onDidDispose(
      () => {
        console.log("Closing down..");
        client.close();
        client.getChannel().close();
      },
      null,
      context.subscriptions
    );

    var mouse = {
      xp: 0,
      yp: 0,
      mouseDown: false, // Current state of mouse
      // Current button pressed.
      // In proto, 0 is "no button", 1 is left, and 2 is right.
      mouseButton: 0,
    };

    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case "mousedown":
            mouse = {
              xp: message.x,
              yp: message.y,
              mouseDown: true,
              // In browser's MouseEvent.button property,
              // 0 stands for left button and 2 stands for right button.
              mouseButton:
                message.button === 0 ? 1 : message.button === 2 ? 2 : 0,
            };
            break;

          case "mouseup":
            mouse = {
              xp: message.x,
              yp: message.y,
              mouseDown: false,
              mouseButton: 0,
            };
            break;
          case "mousemove":
            mouse = {
              xp: message.x,
              yp: message.y,
              mouseDown: mouse.mouseDown,
              mouseButton: mouse.mouseButton,
            };
            break;
        }

        let x = Math.round(mouse.xp * scaleX);
        let y = Math.round(mouse.yp * scaleY);
        var request = new MouseEvent();
        request.setX(x);
        request.setY(y);
        request.setButtons(mouse.mouseDown ? mouse.mouseButton : 0);
        client.sendMouse(request, (err) => {
          if (err) {
            console.log("Failed to deliver mouse: " + err);
          }
        });
      },
      undefined,
      context.subscriptions
    );
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
  client.close();
  client.getChannel().close();
}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from "path";
import * as vscode from "vscode";
import { EmulatorDiscovery } from "./discovery";
import { EmulatorBridge } from "./emulator_html_bridge";

var bridge: EmulatorBridge | undefined = undefined;
var discovery: EmulatorDiscovery | undefined = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "aemu" is now active!');
  discovery = new EmulatorDiscovery();
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("aemu.connect", () => {
    if (bridge) {
      bridge.reveal();
      return;
    }

    const panel = createWebPanel(context);
    const pid = discovery!.pids().next();

    if (!pid.done) {
      const emulator = discovery!.getEmulator(pid.value)!;
      bridge = new EmulatorBridge(panel, context, emulator);
    } else {
      vscode.window.showInformationMessage("Waiting for emulator.");
      discovery!.on("add", (pid) => {
        const emulator = discovery!.getEmulator(pid)!;
        bridge = new EmulatorBridge(panel, context, emulator);
      });
    }
  });

  context.subscriptions.push(disposable);
}

function createWebPanel(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    "aemu",
    "Android bridge",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      // Only allow the webview to access resources in our extension's media directory
      localResourceRoots: [
        vscode.Uri.file(path.join(context.extensionPath, "media")),
      ],
    }
  );

  // Reset when the current panel is closed
  panel.onDidDispose(
    () => {
      console.log("Disposing aemu panel");
      bridge?.close();
      bridge = undefined;
    },
    null,
    context.subscriptions
  );
  return panel;
}

// this method is called when your extension is deactivated
export function deactivate() {}

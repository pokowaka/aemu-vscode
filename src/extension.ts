// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Emulator } from "./emulator";
import * as path from "path";

var emulator: Emulator | undefined = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "aemu" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("aemu.launch", () => {

    if (emulator) {
      emulator.reveal();
    }

    const panel = vscode.window.createWebviewPanel(
      "aemu",
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
    // Reset when the current panel is closed
    panel.onDidDispose(
      () => {
        emulator?.close();
        emulator = undefined;
      },
      null,
      context.subscriptions
    );
    emulator = new Emulator(panel, context);
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
  emulator?.close();
}

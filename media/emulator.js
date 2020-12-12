//const { window } = require("vscode");
const vscode = acquireVsCodeApi();
var canvas = document.getElementById("viewport");
var context = canvas.getContext("2d");

// Define the image dimensions
var width = canvas.width;
var height = canvas.height;

// Create an ImageData object
var imagedata = context.createImageData(width, height);
var offset = 0;

function _base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

// Handle the message inside the webview
window.addEventListener("message", (event) => {
  const message = event.data; // The JSON data our extension sent
  var decodedData = _base64ToArrayBuffer(message.img);
  for (var i = 0; i < width * height * 4; i++) {
    imagedata.data[i] = decodedData[i];
  }

  context.putImageData(imagedata, 0, 0);
});

var mousedown = false;
// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener("mousedown", (e) => {
  mousedown = true;
  vscode.postMessage({
    command: "mousedown",
    x: e.offsetX,
    y: e.offsetY,
    button: e.button,
  });
});

canvas.addEventListener("mousemove", (e) => {
  if (mousedown) {
    vscode.postMessage({
      command: "mousemove",
      x: e.offsetX,
      y: e.offsetY,
    });
  }
});

document.addEventListener("mouseup", (e) => {
  mousedown = false;
  vscode.postMessage({
    command: "mouseup",
    x: e.offsetX,
    y: e.offsetY,
  });
});

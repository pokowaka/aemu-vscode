//const { window } = require("vscode");
const vscode = acquireVsCodeApi();
var container = document.getElementById("container");
var canvas = document.getElementById("emulator");
var context = canvas.getContext("2d");

// Define the image dimensions
// Create an ImageData object
var imagedata = context.createImageData(canvas.width, canvas.height);

function _base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

function reportWindowSize() {
  height = container.clientHeight;
  width = container.clientWidth;
  vscode.postMessage({
    command: "resize",
    w: width,
    h: height,
  });
}

window.onresize = reportWindowSize;

// Handle the message inside the webview
window.addEventListener("message", (event) => {
  const message = event.data; // The JSON data our extension sent
  if (message.width != canvas.width || message.height != canvas.height) {
    canvas.width = message.width;
    canvas.height = message.height;
    imagedata = context.createImageData(canvas.width, canvas.height);
    console.log("Canvas: " + canvas.width + "x" + canvas.height);
  }

  var decodedData = _base64ToArrayBuffer(message.img);

  // TODO(pokowaka): Use RGB888?
  var j = 0;
  for (var i = 0; i < message.width * message.height * 3; i += 3) {
    imagedata.data[j++] = decodedData[i];
    imagedata.data[j++] = decodedData[i + 1];
    imagedata.data[j++] = decodedData[i + 2];
    imagedata.data[j++] = 0xff;
  }

  context.putImageData(imagedata, 0, 0);
  vscode.postMessage({
    command: "frame",
  });
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

document.addEventListener("keydown", (e) => {
  mousedown = false;
  vscode.postMessage({
    command: "key",
    eventType: "keydown",
    key: e.key,
  });
});

document.addEventListener("keyup", (e) => {
  mousedown = false;
  vscode.postMessage({
    command: "key",
    eventType: "keyup",
    key: e.key,
  });
});

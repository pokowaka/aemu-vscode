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
  return bytes.buffer;
}

// Handle the message inside the webview
window.addEventListener("message", (event) => {
  offset = offset + 1;

  const message = event.data; // The JSON data our extension sent
  console.log(JSON.stringify(message).substr(0, 100));
  var decodedData = _base64ToArrayBuffer(message.img);
  for (var j = 0; j < 10; j++) {
    console.log(decodedData[j]);
  }
  for (var i = 0; i < width * height * 4; i++) {
    imagedata.data[i] = decodedData[i];
  }
  context.putImageData(imagedata, 0, 0);
});

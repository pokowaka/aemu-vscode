// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (C) 2018 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Note that if you add/remove methods in this file you must update
// the metrics sql as well ./android/scripts/gen-grpc-sql.py
//
// Please group deleted methods in a block including the date (MM/DD/YY)
// it was removed. This enables us to easily keep metrics around after removal
//
// List of deleted methods
// rpc iWasDeleted (03/12/12)
// ...
'use strict';
var grpc = require('@grpc/grpc-js');
var emulator_controller_pb = require('./emulator_controller_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_android_emulation_control_AudioFormat(arg) {
  if (!(arg instanceof emulator_controller_pb.AudioFormat)) {
    throw new Error('Expected argument of type android.emulation.control.AudioFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_AudioFormat(buffer_arg) {
  return emulator_controller_pb.AudioFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_AudioPacket(arg) {
  if (!(arg instanceof emulator_controller_pb.AudioPacket)) {
    throw new Error('Expected argument of type android.emulation.control.AudioPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_AudioPacket(buffer_arg) {
  return emulator_controller_pb.AudioPacket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_BatteryState(arg) {
  if (!(arg instanceof emulator_controller_pb.BatteryState)) {
    throw new Error('Expected argument of type android.emulation.control.BatteryState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_BatteryState(buffer_arg) {
  return emulator_controller_pb.BatteryState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_ClipData(arg) {
  if (!(arg instanceof emulator_controller_pb.ClipData)) {
    throw new Error('Expected argument of type android.emulation.control.ClipData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_ClipData(buffer_arg) {
  return emulator_controller_pb.ClipData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_EmulatorStatus(arg) {
  if (!(arg instanceof emulator_controller_pb.EmulatorStatus)) {
    throw new Error('Expected argument of type android.emulation.control.EmulatorStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_EmulatorStatus(buffer_arg) {
  return emulator_controller_pb.EmulatorStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Fingerprint(arg) {
  if (!(arg instanceof emulator_controller_pb.Fingerprint)) {
    throw new Error('Expected argument of type android.emulation.control.Fingerprint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Fingerprint(buffer_arg) {
  return emulator_controller_pb.Fingerprint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_GpsState(arg) {
  if (!(arg instanceof emulator_controller_pb.GpsState)) {
    throw new Error('Expected argument of type android.emulation.control.GpsState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_GpsState(buffer_arg) {
  return emulator_controller_pb.GpsState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Image(arg) {
  if (!(arg instanceof emulator_controller_pb.Image)) {
    throw new Error('Expected argument of type android.emulation.control.Image');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Image(buffer_arg) {
  return emulator_controller_pb.Image.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_ImageFormat(arg) {
  if (!(arg instanceof emulator_controller_pb.ImageFormat)) {
    throw new Error('Expected argument of type android.emulation.control.ImageFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_ImageFormat(buffer_arg) {
  return emulator_controller_pb.ImageFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_KeyboardEvent(arg) {
  if (!(arg instanceof emulator_controller_pb.KeyboardEvent)) {
    throw new Error('Expected argument of type android.emulation.control.KeyboardEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_KeyboardEvent(buffer_arg) {
  return emulator_controller_pb.KeyboardEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_LogMessage(arg) {
  if (!(arg instanceof emulator_controller_pb.LogMessage)) {
    throw new Error('Expected argument of type android.emulation.control.LogMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_LogMessage(buffer_arg) {
  return emulator_controller_pb.LogMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_MouseEvent(arg) {
  if (!(arg instanceof emulator_controller_pb.MouseEvent)) {
    throw new Error('Expected argument of type android.emulation.control.MouseEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_MouseEvent(buffer_arg) {
  return emulator_controller_pb.MouseEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhoneCall(arg) {
  if (!(arg instanceof emulator_controller_pb.PhoneCall)) {
    throw new Error('Expected argument of type android.emulation.control.PhoneCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhoneCall(buffer_arg) {
  return emulator_controller_pb.PhoneCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhoneResponse(arg) {
  if (!(arg instanceof emulator_controller_pb.PhoneResponse)) {
    throw new Error('Expected argument of type android.emulation.control.PhoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhoneResponse(buffer_arg) {
  return emulator_controller_pb.PhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhysicalModelValue(arg) {
  if (!(arg instanceof emulator_controller_pb.PhysicalModelValue)) {
    throw new Error('Expected argument of type android.emulation.control.PhysicalModelValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhysicalModelValue(buffer_arg) {
  return emulator_controller_pb.PhysicalModelValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_SensorValue(arg) {
  if (!(arg instanceof emulator_controller_pb.SensorValue)) {
    throw new Error('Expected argument of type android.emulation.control.SensorValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_SensorValue(buffer_arg) {
  return emulator_controller_pb.SensorValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_SmsMessage(arg) {
  if (!(arg instanceof emulator_controller_pb.SmsMessage)) {
    throw new Error('Expected argument of type android.emulation.control.SmsMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_SmsMessage(buffer_arg) {
  return emulator_controller_pb.SmsMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_TouchEvent(arg) {
  if (!(arg instanceof emulator_controller_pb.TouchEvent)) {
    throw new Error('Expected argument of type android.emulation.control.TouchEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_TouchEvent(buffer_arg) {
  return emulator_controller_pb.TouchEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_VmRunState(arg) {
  if (!(arg instanceof emulator_controller_pb.VmRunState)) {
    throw new Error('Expected argument of type android.emulation.control.VmRunState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_VmRunState(buffer_arg) {
  return emulator_controller_pb.VmRunState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// An EmulatorController service lets you control the emulator.
// Note that this is currently an experimental feature, and that the
// service definition might change without notice. Use at your own risk!
//
// We use the following rough conventions:
//
// streamXXX --> streams values XXX (usually for emulator lifetime). Values
//               are updated as soon as they become available.
// getXXX    --> gets a single value XXX
// setXXX    --> sets a single value XXX, does not returning state, these
//               usually have an observable lasting side effect.
// sendXXX   --> send a single event XXX, possibly returning state information.
//               android usually responds to these events.
var EmulatorControllerService = exports.EmulatorControllerService = {
  // set/get/stream the sensor data
streamSensor: {
    path: '/android.emulation.control.EmulatorController/streamSensor',
    requestStream: false,
    responseStream: true,
    requestType: emulator_controller_pb.SensorValue,
    responseType: emulator_controller_pb.SensorValue,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_android_emulation_control_SensorValue,
    responseDeserialize: deserialize_android_emulation_control_SensorValue,
  },
  getSensor: {
    path: '/android.emulation.control.EmulatorController/getSensor',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.SensorValue,
    responseType: emulator_controller_pb.SensorValue,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_android_emulation_control_SensorValue,
    responseDeserialize: deserialize_android_emulation_control_SensorValue,
  },
  setSensor: {
    path: '/android.emulation.control.EmulatorController/setSensor',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.SensorValue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // set/get/stream the physical model, this is likely the one you are
// looking for when you wish to modify the device state.
setPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/setPhysicalModel',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.PhysicalModelValue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/getPhysicalModel',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.PhysicalModelValue,
    responseType: emulator_controller_pb.PhysicalModelValue,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_android_emulation_control_PhysicalModelValue,
    responseDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
  },
  streamPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/streamPhysicalModel',
    requestStream: false,
    responseStream: true,
    requestType: emulator_controller_pb.PhysicalModelValue,
    responseType: emulator_controller_pb.PhysicalModelValue,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_android_emulation_control_PhysicalModelValue,
    responseDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
  },
  // Atomically set/get the current primary clipboard data.
setClipboard: {
    path: '/android.emulation.control.EmulatorController/setClipboard',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.ClipData,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_ClipData,
    requestDeserialize: deserialize_android_emulation_control_ClipData,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getClipboard: {
    path: '/android.emulation.control.EmulatorController/getClipboard',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.ClipData,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_ClipData,
    responseDeserialize: deserialize_android_emulation_control_ClipData,
  },
  // Streams the current data on the clipboard. This will immediately produce
// a result with the current state of the clipboard after which the stream
// will block and wait until a new clip event is available from the guest.
// Calling the setClipboard method above will not result in generating a clip
// event. It is possible to lose clipboard events if the clipboard updates
// very rapidly.
streamClipboard: {
    path: '/android.emulation.control.EmulatorController/streamClipboard',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.ClipData,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_ClipData,
    responseDeserialize: deserialize_android_emulation_control_ClipData,
  },
  // Set/get the battery to the given state.
setBattery: {
    path: '/android.emulation.control.EmulatorController/setBattery',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.BatteryState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_BatteryState,
    requestDeserialize: deserialize_android_emulation_control_BatteryState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getBattery: {
    path: '/android.emulation.control.EmulatorController/getBattery',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.BatteryState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_BatteryState,
    responseDeserialize: deserialize_android_emulation_control_BatteryState,
  },
  // Set the state of the gps, gps support will only work
// properly if:
//
// - no location ui is active. That is the emulator
//   is launched in headless mode (-no-window) or the location
//   ui is disabled (-no-location-ui).
// - the passiveUpdate is set to false. Setting this to false
//   will disable/break the LocationUI.
//
// Keep in mind that android usually only samples the gps at 1 hz.
setGps: {
    path: '/android.emulation.control.EmulatorController/setGps',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.GpsState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_GpsState,
    requestDeserialize: deserialize_android_emulation_control_GpsState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the latest gps state as delivered by the setGps call, or location ui
// if active.
//
// Note: this is not necessarily the actual gps coordinate visible at the
// time, due to gps sample frequency (usually 1hz).
getGps: {
    path: '/android.emulation.control.EmulatorController/getGps',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.GpsState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_GpsState,
    responseDeserialize: deserialize_android_emulation_control_GpsState,
  },
  // Simulate a touch event on the finger print sensor.
sendFingerprint: {
    path: '/android.emulation.control.EmulatorController/sendFingerprint',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.Fingerprint,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_Fingerprint,
    requestDeserialize: deserialize_android_emulation_control_Fingerprint,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Send a keyboard event. Translating the event.
sendKey: {
    path: '/android.emulation.control.EmulatorController/sendKey',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.KeyboardEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_KeyboardEvent,
    requestDeserialize: deserialize_android_emulation_control_KeyboardEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Send touch/mouse events. Note that mouse events can be simulated
// by touch events.
sendTouch: {
    path: '/android.emulation.control.EmulatorController/sendTouch',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.TouchEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_TouchEvent,
    requestDeserialize: deserialize_android_emulation_control_TouchEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendMouse: {
    path: '/android.emulation.control.EmulatorController/sendMouse',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.MouseEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_MouseEvent,
    requestDeserialize: deserialize_android_emulation_control_MouseEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Make a phone call.
sendPhone: {
    path: '/android.emulation.control.EmulatorController/sendPhone',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.PhoneCall,
    responseType: emulator_controller_pb.PhoneResponse,
    requestSerialize: serialize_android_emulation_control_PhoneCall,
    requestDeserialize: deserialize_android_emulation_control_PhoneCall,
    responseSerialize: serialize_android_emulation_control_PhoneResponse,
    responseDeserialize: deserialize_android_emulation_control_PhoneResponse,
  },
  // Sends an sms message to the emulator.
sendSms: {
    path: '/android.emulation.control.EmulatorController/sendSms',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.SmsMessage,
    responseType: emulator_controller_pb.PhoneResponse,
    requestSerialize: serialize_android_emulation_control_SmsMessage,
    requestDeserialize: deserialize_android_emulation_control_SmsMessage,
    responseSerialize: serialize_android_emulation_control_PhoneResponse,
    responseDeserialize: deserialize_android_emulation_control_PhoneResponse,
  },
  // Retrieve the status of the emulator. This will contain general
// hardware information, and whether the device has booted or not.
getStatus: {
    path: '/android.emulation.control.EmulatorController/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.EmulatorStatus,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_EmulatorStatus,
    responseDeserialize: deserialize_android_emulation_control_EmulatorStatus,
  },
  // Gets an individual screenshot in the desired format.
//
// The image will be scaled to the desired ImageFormat, while maintaining
// the aspect ratio. The returned image will never exceed the provided width
// and height. Not setting the width or height (i.e. they are 0) will result
// in using the device width and height.
//
// The resulting image will be properly oriented and can be displayed
// directly without post processing. For example, if the device has a
// 1080x1920 screen and is in landscape mode and called with no width or
// height parameter, it will return an 1920x1080 image.
//
// This method will return an empty image if the display is not visible.
getScreenshot: {
    path: '/android.emulation.control.EmulatorController/getScreenshot',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.ImageFormat,
    responseType: emulator_controller_pb.Image,
    requestSerialize: serialize_android_emulation_control_ImageFormat,
    requestDeserialize: deserialize_android_emulation_control_ImageFormat,
    responseSerialize: serialize_android_emulation_control_Image,
    responseDeserialize: deserialize_android_emulation_control_Image,
  },
  // Streams a series of screenshots in the desired format.
// A new frame will be delivered whenever the device produces a new frame.
// (Beware that this can produce a significant amount of data, and that
// certain translations are (png transform) can be costly).
//
// If the requested display is not visible it will send a single empty image
// and wait start producing images once the display becomes active, again
// producing a single empty image when the display becomes inactive.
streamScreenshot: {
    path: '/android.emulation.control.EmulatorController/streamScreenshot',
    requestStream: false,
    responseStream: true,
    requestType: emulator_controller_pb.ImageFormat,
    responseType: emulator_controller_pb.Image,
    requestSerialize: serialize_android_emulation_control_ImageFormat,
    requestDeserialize: deserialize_android_emulation_control_ImageFormat,
    responseSerialize: serialize_android_emulation_control_Image,
    responseDeserialize: deserialize_android_emulation_control_Image,
  },
  // Streams a series of audio packets in the desired format.
// A new frame will be delivered whenever the emulated device
// produces a new audio frame.
streamAudio: {
    path: '/android.emulation.control.EmulatorController/streamAudio',
    requestStream: false,
    responseStream: true,
    requestType: emulator_controller_pb.AudioFormat,
    responseType: emulator_controller_pb.AudioPacket,
    requestSerialize: serialize_android_emulation_control_AudioFormat,
    requestDeserialize: deserialize_android_emulation_control_AudioFormat,
    responseSerialize: serialize_android_emulation_control_AudioPacket,
    responseDeserialize: deserialize_android_emulation_control_AudioPacket,
  },
  // Returns the last 128Kb of logcat output from the emulator
// Note that parsed logcat messages are only available after L (Api >23).
// it is possible that the logcat buffer gets overwritten, or falls behind.
getLogcat: {
    path: '/android.emulation.control.EmulatorController/getLogcat',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.LogMessage,
    responseType: emulator_controller_pb.LogMessage,
    requestSerialize: serialize_android_emulation_control_LogMessage,
    requestDeserialize: deserialize_android_emulation_control_LogMessage,
    responseSerialize: serialize_android_emulation_control_LogMessage,
    responseDeserialize: deserialize_android_emulation_control_LogMessage,
  },
  // Streams the logcat output from the emulator. The first call
// can retrieve up to 128Kb. This call will not return.
// Note that parsed logcat messages are only available after L (Api >23)
// it is possible that the logcat buffer gets overwritten, or falls behind.
streamLogcat: {
    path: '/android.emulation.control.EmulatorController/streamLogcat',
    requestStream: false,
    responseStream: true,
    requestType: emulator_controller_pb.LogMessage,
    responseType: emulator_controller_pb.LogMessage,
    requestSerialize: serialize_android_emulation_control_LogMessage,
    requestDeserialize: deserialize_android_emulation_control_LogMessage,
    responseSerialize: serialize_android_emulation_control_LogMessage,
    responseDeserialize: deserialize_android_emulation_control_LogMessage,
  },
  // Transition the virtual machine to the desired state. Note that
// some states are only observable. For example you cannot transition
// to the error state.
setVmState: {
    path: '/android.emulation.control.EmulatorController/setVmState',
    requestStream: false,
    responseStream: false,
    requestType: emulator_controller_pb.VmRunState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_VmRunState,
    requestDeserialize: deserialize_android_emulation_control_VmRunState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the state of the virtual machine.
getVmState: {
    path: '/android.emulation.control.EmulatorController/getVmState',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: emulator_controller_pb.VmRunState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_VmRunState,
    responseDeserialize: deserialize_android_emulation_control_VmRunState,
  },
};

exports.EmulatorControllerClient = grpc.makeGenericClientConstructor(EmulatorControllerService);

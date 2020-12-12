// package: android.emulation.control
// file: emulator_controller.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as emulator_controller_pb from "./emulator_controller_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import { BaseFilter } from "@grpc/grpc-js/build/src/filter";


interface IEmulatorControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamSensor: IEmulatorControllerService_IstreamSensor;
    getSensor: IEmulatorControllerService_IgetSensor;
    setSensor: IEmulatorControllerService_IsetSensor;
    setPhysicalModel: IEmulatorControllerService_IsetPhysicalModel;
    getPhysicalModel: IEmulatorControllerService_IgetPhysicalModel;
    streamPhysicalModel: IEmulatorControllerService_IstreamPhysicalModel;
    setClipboard: IEmulatorControllerService_IsetClipboard;
    getClipboard: IEmulatorControllerService_IgetClipboard;
    streamClipboard: IEmulatorControllerService_IstreamClipboard;
    setBattery: IEmulatorControllerService_IsetBattery;
    getBattery: IEmulatorControllerService_IgetBattery;
    setGps: IEmulatorControllerService_IsetGps;
    getGps: IEmulatorControllerService_IgetGps;
    sendFingerprint: IEmulatorControllerService_IsendFingerprint;
    sendKey: IEmulatorControllerService_IsendKey;
    sendTouch: IEmulatorControllerService_IsendTouch;
    sendMouse: IEmulatorControllerService_IsendMouse;
    sendPhone: IEmulatorControllerService_IsendPhone;
    sendSms: IEmulatorControllerService_IsendSms;
    getStatus: IEmulatorControllerService_IgetStatus;
    getScreenshot: IEmulatorControllerService_IgetScreenshot;
    streamScreenshot: IEmulatorControllerService_IstreamScreenshot;
    streamAudio: IEmulatorControllerService_IstreamAudio;
    getLogcat: IEmulatorControllerService_IgetLogcat;
    streamLogcat: IEmulatorControllerService_IstreamLogcat;
    setVmState: IEmulatorControllerService_IsetVmState;
    getVmState: IEmulatorControllerService_IgetVmState;
}

interface IEmulatorControllerService_IstreamSensor extends grpc.MethodDefinition<emulator_controller_pb.SensorValue, emulator_controller_pb.SensorValue> {
    path: "/android.emulation.control.EmulatorController/streamSensor";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<emulator_controller_pb.SensorValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.SensorValue>;
    responseSerialize: grpc.serialize<emulator_controller_pb.SensorValue>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.SensorValue>;
}
interface IEmulatorControllerService_IgetSensor extends grpc.MethodDefinition<emulator_controller_pb.SensorValue, emulator_controller_pb.SensorValue> {
    path: "/android.emulation.control.EmulatorController/getSensor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.SensorValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.SensorValue>;
    responseSerialize: grpc.serialize<emulator_controller_pb.SensorValue>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.SensorValue>;
}
interface IEmulatorControllerService_IsetSensor extends grpc.MethodDefinition<emulator_controller_pb.SensorValue, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setSensor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.SensorValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.SensorValue>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IsetPhysicalModel extends grpc.MethodDefinition<emulator_controller_pb.PhysicalModelValue, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setPhysicalModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.PhysicalModelValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.PhysicalModelValue>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IgetPhysicalModel extends grpc.MethodDefinition<emulator_controller_pb.PhysicalModelValue, emulator_controller_pb.PhysicalModelValue> {
    path: "/android.emulation.control.EmulatorController/getPhysicalModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.PhysicalModelValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.PhysicalModelValue>;
    responseSerialize: grpc.serialize<emulator_controller_pb.PhysicalModelValue>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.PhysicalModelValue>;
}
interface IEmulatorControllerService_IstreamPhysicalModel extends grpc.MethodDefinition<emulator_controller_pb.PhysicalModelValue, emulator_controller_pb.PhysicalModelValue> {
    path: "/android.emulation.control.EmulatorController/streamPhysicalModel";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<emulator_controller_pb.PhysicalModelValue>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.PhysicalModelValue>;
    responseSerialize: grpc.serialize<emulator_controller_pb.PhysicalModelValue>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.PhysicalModelValue>;
}
interface IEmulatorControllerService_IsetClipboard extends grpc.MethodDefinition<emulator_controller_pb.ClipData, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setClipboard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.ClipData>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.ClipData>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IgetClipboard extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.ClipData> {
    path: "/android.emulation.control.EmulatorController/getClipboard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.ClipData>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.ClipData>;
}
interface IEmulatorControllerService_IstreamClipboard extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.ClipData> {
    path: "/android.emulation.control.EmulatorController/streamClipboard";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.ClipData>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.ClipData>;
}
interface IEmulatorControllerService_IsetBattery extends grpc.MethodDefinition<emulator_controller_pb.BatteryState, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setBattery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.BatteryState>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.BatteryState>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IgetBattery extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.BatteryState> {
    path: "/android.emulation.control.EmulatorController/getBattery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.BatteryState>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.BatteryState>;
}
interface IEmulatorControllerService_IsetGps extends grpc.MethodDefinition<emulator_controller_pb.GpsState, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setGps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.GpsState>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.GpsState>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IgetGps extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.GpsState> {
    path: "/android.emulation.control.EmulatorController/getGps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.GpsState>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.GpsState>;
}
interface IEmulatorControllerService_IsendFingerprint extends grpc.MethodDefinition<emulator_controller_pb.Fingerprint, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/sendFingerprint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.Fingerprint>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.Fingerprint>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IsendKey extends grpc.MethodDefinition<emulator_controller_pb.KeyboardEvent, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/sendKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.KeyboardEvent>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.KeyboardEvent>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IsendTouch extends grpc.MethodDefinition<emulator_controller_pb.TouchEvent, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/sendTouch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.TouchEvent>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.TouchEvent>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IsendMouse extends grpc.MethodDefinition<emulator_controller_pb.MouseEvent, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/sendMouse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.MouseEvent>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.MouseEvent>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IsendPhone extends grpc.MethodDefinition<emulator_controller_pb.PhoneCall, emulator_controller_pb.PhoneResponse> {
    path: "/android.emulation.control.EmulatorController/sendPhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.PhoneCall>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.PhoneCall>;
    responseSerialize: grpc.serialize<emulator_controller_pb.PhoneResponse>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.PhoneResponse>;
}
interface IEmulatorControllerService_IsendSms extends grpc.MethodDefinition<emulator_controller_pb.SmsMessage, emulator_controller_pb.PhoneResponse> {
    path: "/android.emulation.control.EmulatorController/sendSms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.SmsMessage>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.SmsMessage>;
    responseSerialize: grpc.serialize<emulator_controller_pb.PhoneResponse>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.PhoneResponse>;
}
interface IEmulatorControllerService_IgetStatus extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.EmulatorStatus> {
    path: "/android.emulation.control.EmulatorController/getStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.EmulatorStatus>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.EmulatorStatus>;
}
interface IEmulatorControllerService_IgetScreenshot extends grpc.MethodDefinition<emulator_controller_pb.ImageFormat, emulator_controller_pb.Image> {
    path: "/android.emulation.control.EmulatorController/getScreenshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.ImageFormat>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.ImageFormat>;
    responseSerialize: grpc.serialize<emulator_controller_pb.Image>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.Image>;
}
interface IEmulatorControllerService_IstreamScreenshot extends grpc.MethodDefinition<emulator_controller_pb.ImageFormat, emulator_controller_pb.Image> {
    path: "/android.emulation.control.EmulatorController/streamScreenshot";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<emulator_controller_pb.ImageFormat>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.ImageFormat>;
    responseSerialize: grpc.serialize<emulator_controller_pb.Image>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.Image>;
}
interface IEmulatorControllerService_IstreamAudio extends grpc.MethodDefinition<emulator_controller_pb.AudioFormat, emulator_controller_pb.AudioPacket> {
    path: "/android.emulation.control.EmulatorController/streamAudio";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<emulator_controller_pb.AudioFormat>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.AudioFormat>;
    responseSerialize: grpc.serialize<emulator_controller_pb.AudioPacket>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.AudioPacket>;
}
interface IEmulatorControllerService_IgetLogcat extends grpc.MethodDefinition<emulator_controller_pb.LogMessage, emulator_controller_pb.LogMessage> {
    path: "/android.emulation.control.EmulatorController/getLogcat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.LogMessage>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.LogMessage>;
    responseSerialize: grpc.serialize<emulator_controller_pb.LogMessage>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.LogMessage>;
}
interface IEmulatorControllerService_IstreamLogcat extends grpc.MethodDefinition<emulator_controller_pb.LogMessage, emulator_controller_pb.LogMessage> {
    path: "/android.emulation.control.EmulatorController/streamLogcat";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<emulator_controller_pb.LogMessage>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.LogMessage>;
    responseSerialize: grpc.serialize<emulator_controller_pb.LogMessage>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.LogMessage>;
}
interface IEmulatorControllerService_IsetVmState extends grpc.MethodDefinition<emulator_controller_pb.VmRunState, google_protobuf_empty_pb.Empty> {
    path: "/android.emulation.control.EmulatorController/setVmState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<emulator_controller_pb.VmRunState>;
    requestDeserialize: grpc.deserialize<emulator_controller_pb.VmRunState>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEmulatorControllerService_IgetVmState extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, emulator_controller_pb.VmRunState> {
    path: "/android.emulation.control.EmulatorController/getVmState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<emulator_controller_pb.VmRunState>;
    responseDeserialize: grpc.deserialize<emulator_controller_pb.VmRunState>;
}

export const EmulatorControllerService: IEmulatorControllerService;

export interface IEmulatorControllerServer {
    streamSensor: grpc.handleServerStreamingCall<emulator_controller_pb.SensorValue, emulator_controller_pb.SensorValue>;
    getSensor: grpc.handleUnaryCall<emulator_controller_pb.SensorValue, emulator_controller_pb.SensorValue>;
    setSensor: grpc.handleUnaryCall<emulator_controller_pb.SensorValue, google_protobuf_empty_pb.Empty>;
    setPhysicalModel: grpc.handleUnaryCall<emulator_controller_pb.PhysicalModelValue, google_protobuf_empty_pb.Empty>;
    getPhysicalModel: grpc.handleUnaryCall<emulator_controller_pb.PhysicalModelValue, emulator_controller_pb.PhysicalModelValue>;
    streamPhysicalModel: grpc.handleServerStreamingCall<emulator_controller_pb.PhysicalModelValue, emulator_controller_pb.PhysicalModelValue>;
    setClipboard: grpc.handleUnaryCall<emulator_controller_pb.ClipData, google_protobuf_empty_pb.Empty>;
    getClipboard: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.ClipData>;
    streamClipboard: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.ClipData>;
    setBattery: grpc.handleUnaryCall<emulator_controller_pb.BatteryState, google_protobuf_empty_pb.Empty>;
    getBattery: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.BatteryState>;
    setGps: grpc.handleUnaryCall<emulator_controller_pb.GpsState, google_protobuf_empty_pb.Empty>;
    getGps: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.GpsState>;
    sendFingerprint: grpc.handleUnaryCall<emulator_controller_pb.Fingerprint, google_protobuf_empty_pb.Empty>;
    sendKey: grpc.handleUnaryCall<emulator_controller_pb.KeyboardEvent, google_protobuf_empty_pb.Empty>;
    sendTouch: grpc.handleUnaryCall<emulator_controller_pb.TouchEvent, google_protobuf_empty_pb.Empty>;
    sendMouse: grpc.handleUnaryCall<emulator_controller_pb.MouseEvent, google_protobuf_empty_pb.Empty>;
    sendPhone: grpc.handleUnaryCall<emulator_controller_pb.PhoneCall, emulator_controller_pb.PhoneResponse>;
    sendSms: grpc.handleUnaryCall<emulator_controller_pb.SmsMessage, emulator_controller_pb.PhoneResponse>;
    getStatus: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.EmulatorStatus>;
    getScreenshot: grpc.handleUnaryCall<emulator_controller_pb.ImageFormat, emulator_controller_pb.Image>;
    streamScreenshot: grpc.handleServerStreamingCall<emulator_controller_pb.ImageFormat, emulator_controller_pb.Image>;
    streamAudio: grpc.handleServerStreamingCall<emulator_controller_pb.AudioFormat, emulator_controller_pb.AudioPacket>;
    getLogcat: grpc.handleUnaryCall<emulator_controller_pb.LogMessage, emulator_controller_pb.LogMessage>;
    streamLogcat: grpc.handleServerStreamingCall<emulator_controller_pb.LogMessage, emulator_controller_pb.LogMessage>;
    setVmState: grpc.handleUnaryCall<emulator_controller_pb.VmRunState, google_protobuf_empty_pb.Empty>;
    getVmState: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, emulator_controller_pb.VmRunState>;
}

export interface IEmulatorControllerClient {
    streamSensor(request: emulator_controller_pb.SensorValue, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.SensorValue>;
    streamSensor(request: emulator_controller_pb.SensorValue, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.SensorValue>;
    getSensor(request: emulator_controller_pb.SensorValue, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    getSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    getSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    setSensor(request: emulator_controller_pb.SensorValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    streamPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.PhysicalModelValue>;
    streamPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.PhysicalModelValue>;
    setClipboard(request: emulator_controller_pb.ClipData, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setClipboard(request: emulator_controller_pb.ClipData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setClipboard(request: emulator_controller_pb.ClipData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getClipboard(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    getClipboard(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    getClipboard(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    streamClipboard(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.ClipData>;
    streamClipboard(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.ClipData>;
    setBattery(request: emulator_controller_pb.BatteryState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setBattery(request: emulator_controller_pb.BatteryState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setBattery(request: emulator_controller_pb.BatteryState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getBattery(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    getBattery(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    getBattery(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    setGps(request: emulator_controller_pb.GpsState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setGps(request: emulator_controller_pb.GpsState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setGps(request: emulator_controller_pb.GpsState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getGps(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    getGps(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    getGps(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    sendFingerprint(request: emulator_controller_pb.Fingerprint, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendFingerprint(request: emulator_controller_pb.Fingerprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendFingerprint(request: emulator_controller_pb.Fingerprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendKey(request: emulator_controller_pb.KeyboardEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendKey(request: emulator_controller_pb.KeyboardEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendKey(request: emulator_controller_pb.KeyboardEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTouch(request: emulator_controller_pb.TouchEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTouch(request: emulator_controller_pb.TouchEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTouch(request: emulator_controller_pb.TouchEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMouse(request: emulator_controller_pb.MouseEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMouse(request: emulator_controller_pb.MouseEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMouse(request: emulator_controller_pb.MouseEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendPhone(request: emulator_controller_pb.PhoneCall, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    sendPhone(request: emulator_controller_pb.PhoneCall, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    sendPhone(request: emulator_controller_pb.PhoneCall, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    sendSms(request: emulator_controller_pb.SmsMessage, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    sendSms(request: emulator_controller_pb.SmsMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    sendSms(request: emulator_controller_pb.SmsMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    getStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    getStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    getStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    getScreenshot(request: emulator_controller_pb.ImageFormat, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    getScreenshot(request: emulator_controller_pb.ImageFormat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    getScreenshot(request: emulator_controller_pb.ImageFormat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    streamScreenshot(request: emulator_controller_pb.ImageFormat, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.Image>;
    streamScreenshot(request: emulator_controller_pb.ImageFormat, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.Image>;
    streamAudio(request: emulator_controller_pb.AudioFormat, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.AudioPacket>;
    streamAudio(request: emulator_controller_pb.AudioFormat, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.AudioPacket>;
    getLogcat(request: emulator_controller_pb.LogMessage, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    getLogcat(request: emulator_controller_pb.LogMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    getLogcat(request: emulator_controller_pb.LogMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    streamLogcat(request: emulator_controller_pb.LogMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.LogMessage>;
    streamLogcat(request: emulator_controller_pb.LogMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.LogMessage>;
    setVmState(request: emulator_controller_pb.VmRunState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setVmState(request: emulator_controller_pb.VmRunState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setVmState(request: emulator_controller_pb.VmRunState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getVmState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
    getVmState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
    getVmState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
}

export class EmulatorControllerClient extends grpc.Client implements IEmulatorControllerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamSensor(request: emulator_controller_pb.SensorValue, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.SensorValue>;
    public streamSensor(request: emulator_controller_pb.SensorValue, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.SensorValue>;
    public getSensor(request: emulator_controller_pb.SensorValue, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    public getSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    public getSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.SensorValue) => void): grpc.ClientUnaryCall;
    public setSensor(request: emulator_controller_pb.SensorValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setSensor(request: emulator_controller_pb.SensorValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    public getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    public getPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhysicalModelValue) => void): grpc.ClientUnaryCall;
    public streamPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.PhysicalModelValue>;
    public streamPhysicalModel(request: emulator_controller_pb.PhysicalModelValue, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.PhysicalModelValue>;
    public setClipboard(request: emulator_controller_pb.ClipData, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setClipboard(request: emulator_controller_pb.ClipData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setClipboard(request: emulator_controller_pb.ClipData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getClipboard(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    public getClipboard(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    public getClipboard(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.ClipData) => void): grpc.ClientUnaryCall;
    public streamClipboard(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.ClipData>;
    public streamClipboard(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.ClipData>;
    public setBattery(request: emulator_controller_pb.BatteryState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setBattery(request: emulator_controller_pb.BatteryState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setBattery(request: emulator_controller_pb.BatteryState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getBattery(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    public getBattery(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    public getBattery(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.BatteryState) => void): grpc.ClientUnaryCall;
    public setGps(request: emulator_controller_pb.GpsState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setGps(request: emulator_controller_pb.GpsState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setGps(request: emulator_controller_pb.GpsState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getGps(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    public getGps(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    public getGps(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.GpsState) => void): grpc.ClientUnaryCall;
    public sendFingerprint(request: emulator_controller_pb.Fingerprint, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendFingerprint(request: emulator_controller_pb.Fingerprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendFingerprint(request: emulator_controller_pb.Fingerprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendKey(request: emulator_controller_pb.KeyboardEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendKey(request: emulator_controller_pb.KeyboardEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendKey(request: emulator_controller_pb.KeyboardEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTouch(request: emulator_controller_pb.TouchEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTouch(request: emulator_controller_pb.TouchEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTouch(request: emulator_controller_pb.TouchEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMouse(request: emulator_controller_pb.MouseEvent, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMouse(request: emulator_controller_pb.MouseEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMouse(request: emulator_controller_pb.MouseEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendPhone(request: emulator_controller_pb.PhoneCall, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public sendPhone(request: emulator_controller_pb.PhoneCall, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public sendPhone(request: emulator_controller_pb.PhoneCall, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public sendSms(request: emulator_controller_pb.SmsMessage, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public sendSms(request: emulator_controller_pb.SmsMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public sendSms(request: emulator_controller_pb.SmsMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.PhoneResponse) => void): grpc.ClientUnaryCall;
    public getStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    public getStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    public getStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.EmulatorStatus) => void): grpc.ClientUnaryCall;
    public getScreenshot(request: emulator_controller_pb.ImageFormat, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    public getScreenshot(request: emulator_controller_pb.ImageFormat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    public getScreenshot(request: emulator_controller_pb.ImageFormat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.Image) => void): grpc.ClientUnaryCall;
    public streamScreenshot(request: emulator_controller_pb.ImageFormat, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.Image>;
    public streamScreenshot(request: emulator_controller_pb.ImageFormat, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.Image>;
    public streamAudio(request: emulator_controller_pb.AudioFormat, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.AudioPacket>;
    public streamAudio(request: emulator_controller_pb.AudioFormat, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.AudioPacket>;
    public getLogcat(request: emulator_controller_pb.LogMessage, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    public getLogcat(request: emulator_controller_pb.LogMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    public getLogcat(request: emulator_controller_pb.LogMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.LogMessage) => void): grpc.ClientUnaryCall;
    public streamLogcat(request: emulator_controller_pb.LogMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.LogMessage>;
    public streamLogcat(request: emulator_controller_pb.LogMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<emulator_controller_pb.LogMessage>;
    public setVmState(request: emulator_controller_pb.VmRunState, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setVmState(request: emulator_controller_pb.VmRunState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setVmState(request: emulator_controller_pb.VmRunState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getVmState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
    public getVmState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
    public getVmState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: emulator_controller_pb.VmRunState) => void): grpc.ClientUnaryCall;
}

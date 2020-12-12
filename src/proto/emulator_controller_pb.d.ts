// package: android.emulation.control
// file: emulator_controller.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class VmRunState extends jspb.Message { 
    getState(): VmRunState.RunState;
    setState(value: VmRunState.RunState): VmRunState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VmRunState.AsObject;
    static toObject(includeInstance: boolean, msg: VmRunState): VmRunState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VmRunState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VmRunState;
    static deserializeBinaryFromReader(message: VmRunState, reader: jspb.BinaryReader): VmRunState;
}

export namespace VmRunState {
    export type AsObject = {
        state: VmRunState.RunState,
    }

    export enum RunState {
    UNKNOWN = 0,
    RUNNING = 1,
    RESTORE_VM = 2,
    PAUSED = 3,
    SAVE_VM = 4,
    SHUTDOWN = 5,
    TERMINATE = 7,
    RESET = 9,
    INTERNAL_ERROR = 10,
    }

}

export class ParameterValue extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<number>;
    setDataList(value: Array<number>): ParameterValue;
    addData(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParameterValue.AsObject;
    static toObject(includeInstance: boolean, msg: ParameterValue): ParameterValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParameterValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParameterValue;
    static deserializeBinaryFromReader(message: ParameterValue, reader: jspb.BinaryReader): ParameterValue;
}

export namespace ParameterValue {
    export type AsObject = {
        dataList: Array<number>,
    }
}

export class PhysicalModelValue extends jspb.Message { 
    getTarget(): PhysicalModelValue.PhysicalType;
    setTarget(value: PhysicalModelValue.PhysicalType): PhysicalModelValue;

    getStatus(): PhysicalModelValue.State;
    setStatus(value: PhysicalModelValue.State): PhysicalModelValue;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): ParameterValue | undefined;
    setValue(value?: ParameterValue): PhysicalModelValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhysicalModelValue.AsObject;
    static toObject(includeInstance: boolean, msg: PhysicalModelValue): PhysicalModelValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhysicalModelValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhysicalModelValue;
    static deserializeBinaryFromReader(message: PhysicalModelValue, reader: jspb.BinaryReader): PhysicalModelValue;
}

export namespace PhysicalModelValue {
    export type AsObject = {
        target: PhysicalModelValue.PhysicalType,
        status: PhysicalModelValue.State,
        value?: ParameterValue.AsObject,
    }

    export enum State {
    OK = 0,
    NO_SERVICE = -3,
    DISABLED = -2,
    UNKNOWN = -1,
    }

    export enum PhysicalType {
    POSITION = 0,
    ROTATION = 1,
    MAGNETIC_FIELD = 2,
    TEMPERATURE = 3,
    PROXIMITY = 4,
    LIGHT = 5,
    PRESSURE = 6,
    HUMIDITY = 7,
    VELOCITY = 8,
    AMBIENT_MOTION = 9,
    }

}

export class SensorValue extends jspb.Message { 
    getTarget(): SensorValue.SensorType;
    setTarget(value: SensorValue.SensorType): SensorValue;

    getStatus(): SensorValue.State;
    setStatus(value: SensorValue.State): SensorValue;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): ParameterValue | undefined;
    setValue(value?: ParameterValue): SensorValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SensorValue.AsObject;
    static toObject(includeInstance: boolean, msg: SensorValue): SensorValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SensorValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SensorValue;
    static deserializeBinaryFromReader(message: SensorValue, reader: jspb.BinaryReader): SensorValue;
}

export namespace SensorValue {
    export type AsObject = {
        target: SensorValue.SensorType,
        status: SensorValue.State,
        value?: ParameterValue.AsObject,
    }

    export enum State {
    OK = 0,
    NO_SERVICE = -3,
    DISABLED = -2,
    UNKNOWN = -1,
    }

    export enum SensorType {
    ACCELERATION = 0,
    GYROSCOPE = 1,
    MAGNETIC_FIELD = 2,
    ORIENTATION = 3,
    TEMPERATURE = 4,
    PROXIMITY = 5,
    LIGHT = 6,
    PRESSURE = 7,
    HUMIDITY = 8,
    MAGNETIC_FIELD_UNCALIBRATED = 9,
    GYROSCOPE_UNCALIBRATED = 10,
    }

}

export class LogMessage extends jspb.Message { 
    getContents(): string;
    setContents(value: string): LogMessage;

    getStart(): number;
    setStart(value: number): LogMessage;

    getNext(): number;
    setNext(value: number): LogMessage;

    getSort(): LogMessage.LogType;
    setSort(value: LogMessage.LogType): LogMessage;

    clearEntriesList(): void;
    getEntriesList(): Array<LogcatEntry>;
    setEntriesList(value: Array<LogcatEntry>): LogMessage;
    addEntries(value?: LogcatEntry, index?: number): LogcatEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogMessage.AsObject;
    static toObject(includeInstance: boolean, msg: LogMessage): LogMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogMessage;
    static deserializeBinaryFromReader(message: LogMessage, reader: jspb.BinaryReader): LogMessage;
}

export namespace LogMessage {
    export type AsObject = {
        contents: string,
        start: number,
        next: number,
        sort: LogMessage.LogType,
        entriesList: Array<LogcatEntry.AsObject>,
    }

    export enum LogType {
    TEXT = 0,
    PARSED = 1,
    }

}

export class LogcatEntry extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): LogcatEntry;

    getPid(): number;
    setPid(value: number): LogcatEntry;

    getTid(): number;
    setTid(value: number): LogcatEntry;

    getLevel(): LogcatEntry.LogLevel;
    setLevel(value: LogcatEntry.LogLevel): LogcatEntry;

    getTag(): string;
    setTag(value: string): LogcatEntry;

    getMsg(): string;
    setMsg(value: string): LogcatEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogcatEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LogcatEntry): LogcatEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogcatEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogcatEntry;
    static deserializeBinaryFromReader(message: LogcatEntry, reader: jspb.BinaryReader): LogcatEntry;
}

export namespace LogcatEntry {
    export type AsObject = {
        timestamp: number,
        pid: number,
        tid: number,
        level: LogcatEntry.LogLevel,
        tag: string,
        msg: string,
    }

    export enum LogLevel {
    UNKNOWN = 0,
    DEFAULT = 1,
    VERBOSE = 2,
    DEBUG = 3,
    INFO = 4,
    WARN = 5,
    ERR = 6,
    FATAL = 7,
    SILENT = 8,
    }

}

export class VmConfiguration extends jspb.Message { 
    getHypervisortype(): VmConfiguration.VmHypervisorType;
    setHypervisortype(value: VmConfiguration.VmHypervisorType): VmConfiguration;

    getNumberofcpucores(): number;
    setNumberofcpucores(value: number): VmConfiguration;

    getRamsizebytes(): number;
    setRamsizebytes(value: number): VmConfiguration;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VmConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: VmConfiguration): VmConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VmConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VmConfiguration;
    static deserializeBinaryFromReader(message: VmConfiguration, reader: jspb.BinaryReader): VmConfiguration;
}

export namespace VmConfiguration {
    export type AsObject = {
        hypervisortype: VmConfiguration.VmHypervisorType,
        numberofcpucores: number,
        ramsizebytes: number,
    }

    export enum VmHypervisorType {
    UNKNOWN = 0,
    NONE = 1,
    KVM = 2,
    HAXM = 3,
    HVF = 4,
    WHPX = 5,
    GVM = 6,
    }

}

export class ClipData extends jspb.Message { 
    getText(): string;
    setText(value: string): ClipData;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClipData.AsObject;
    static toObject(includeInstance: boolean, msg: ClipData): ClipData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClipData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClipData;
    static deserializeBinaryFromReader(message: ClipData, reader: jspb.BinaryReader): ClipData;
}

export namespace ClipData {
    export type AsObject = {
        text: string,
    }
}

export class Touch extends jspb.Message { 
    getX(): number;
    setX(value: number): Touch;

    getY(): number;
    setY(value: number): Touch;

    getIdentifier(): number;
    setIdentifier(value: number): Touch;

    getPressure(): number;
    setPressure(value: number): Touch;

    getTouchMajor(): number;
    setTouchMajor(value: number): Touch;

    getTouchMinor(): number;
    setTouchMinor(value: number): Touch;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Touch.AsObject;
    static toObject(includeInstance: boolean, msg: Touch): Touch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Touch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Touch;
    static deserializeBinaryFromReader(message: Touch, reader: jspb.BinaryReader): Touch;
}

export namespace Touch {
    export type AsObject = {
        x: number,
        y: number,
        identifier: number,
        pressure: number,
        touchMajor: number,
        touchMinor: number,
    }
}

export class TouchEvent extends jspb.Message { 
    clearTouchesList(): void;
    getTouchesList(): Array<Touch>;
    setTouchesList(value: Array<Touch>): TouchEvent;
    addTouches(value?: Touch, index?: number): Touch;

    getDevice(): number;
    setDevice(value: number): TouchEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TouchEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TouchEvent): TouchEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TouchEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TouchEvent;
    static deserializeBinaryFromReader(message: TouchEvent, reader: jspb.BinaryReader): TouchEvent;
}

export namespace TouchEvent {
    export type AsObject = {
        touchesList: Array<Touch.AsObject>,
        device: number,
    }
}

export class MouseEvent extends jspb.Message { 
    getX(): number;
    setX(value: number): MouseEvent;

    getY(): number;
    setY(value: number): MouseEvent;

    getButtons(): number;
    setButtons(value: number): MouseEvent;

    getDevice(): number;
    setDevice(value: number): MouseEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MouseEvent.AsObject;
    static toObject(includeInstance: boolean, msg: MouseEvent): MouseEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MouseEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MouseEvent;
    static deserializeBinaryFromReader(message: MouseEvent, reader: jspb.BinaryReader): MouseEvent;
}

export namespace MouseEvent {
    export type AsObject = {
        x: number,
        y: number,
        buttons: number,
        device: number,
    }
}

export class KeyboardEvent extends jspb.Message { 
    getCodetype(): KeyboardEvent.KeyCodeType;
    setCodetype(value: KeyboardEvent.KeyCodeType): KeyboardEvent;

    getEventtype(): KeyboardEvent.KeyEventType;
    setEventtype(value: KeyboardEvent.KeyEventType): KeyboardEvent;

    getKeycode(): number;
    setKeycode(value: number): KeyboardEvent;

    getKey(): string;
    setKey(value: string): KeyboardEvent;

    getText(): string;
    setText(value: string): KeyboardEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardEvent.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardEvent): KeyboardEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardEvent;
    static deserializeBinaryFromReader(message: KeyboardEvent, reader: jspb.BinaryReader): KeyboardEvent;
}

export namespace KeyboardEvent {
    export type AsObject = {
        codetype: KeyboardEvent.KeyCodeType,
        eventtype: KeyboardEvent.KeyEventType,
        keycode: number,
        key: string,
        text: string,
    }

    export enum KeyCodeType {
    USB = 0,
    EVDEV = 1,
    XKB = 2,
    WIN = 3,
    MAC = 4,
    }

    export enum KeyEventType {
    KEYDOWN = 0,
    KEYUP = 1,
    KEYPRESS = 2,
    }

}

export class Fingerprint extends jspb.Message { 
    getIstouching(): boolean;
    setIstouching(value: boolean): Fingerprint;

    getTouchid(): number;
    setTouchid(value: number): Fingerprint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fingerprint.AsObject;
    static toObject(includeInstance: boolean, msg: Fingerprint): Fingerprint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fingerprint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fingerprint;
    static deserializeBinaryFromReader(message: Fingerprint, reader: jspb.BinaryReader): Fingerprint;
}

export namespace Fingerprint {
    export type AsObject = {
        istouching: boolean,
        touchid: number,
    }
}

export class GpsState extends jspb.Message { 
    getPassiveupdate(): boolean;
    setPassiveupdate(value: boolean): GpsState;

    getLatitude(): number;
    setLatitude(value: number): GpsState;

    getLongitude(): number;
    setLongitude(value: number): GpsState;

    getSpeed(): number;
    setSpeed(value: number): GpsState;

    getBearing(): number;
    setBearing(value: number): GpsState;

    getAltitude(): number;
    setAltitude(value: number): GpsState;

    getSatellites(): number;
    setSatellites(value: number): GpsState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsState.AsObject;
    static toObject(includeInstance: boolean, msg: GpsState): GpsState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsState;
    static deserializeBinaryFromReader(message: GpsState, reader: jspb.BinaryReader): GpsState;
}

export namespace GpsState {
    export type AsObject = {
        passiveupdate: boolean,
        latitude: number,
        longitude: number,
        speed: number,
        bearing: number,
        altitude: number,
        satellites: number,
    }
}

export class BatteryState extends jspb.Message { 
    getHasbattery(): boolean;
    setHasbattery(value: boolean): BatteryState;

    getIspresent(): boolean;
    setIspresent(value: boolean): BatteryState;

    getCharger(): BatteryState.BatteryCharger;
    setCharger(value: BatteryState.BatteryCharger): BatteryState;

    getChargelevel(): number;
    setChargelevel(value: number): BatteryState;

    getHealth(): BatteryState.BatteryHealth;
    setHealth(value: BatteryState.BatteryHealth): BatteryState;

    getStatus(): BatteryState.BatteryStatus;
    setStatus(value: BatteryState.BatteryStatus): BatteryState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryState.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryState): BatteryState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryState;
    static deserializeBinaryFromReader(message: BatteryState, reader: jspb.BinaryReader): BatteryState;
}

export namespace BatteryState {
    export type AsObject = {
        hasbattery: boolean,
        ispresent: boolean,
        charger: BatteryState.BatteryCharger,
        chargelevel: number,
        health: BatteryState.BatteryHealth,
        status: BatteryState.BatteryStatus,
    }

    export enum BatteryStatus {
    UNKNOWN = 0,
    CHARGING = 1,
    DISCHARGING = 2,
    NOT_CHARGING = 3,
    FULL = 4,
    }

    export enum BatteryCharger {
    NONE = 0,
    AC = 1,
    USB = 2,
    WIRELESS = 3,
    }

    export enum BatteryHealth {
    GOOD = 0,
    FAILED = 1,
    DEAD = 2,
    OVERVOLTAGE = 3,
    OVERHEATED = 4,
    }

}

export class ImageTransport extends jspb.Message { 
    getChannel(): ImageTransport.TransportChannel;
    setChannel(value: ImageTransport.TransportChannel): ImageTransport;

    getHandle(): string;
    setHandle(value: string): ImageTransport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageTransport.AsObject;
    static toObject(includeInstance: boolean, msg: ImageTransport): ImageTransport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageTransport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageTransport;
    static deserializeBinaryFromReader(message: ImageTransport, reader: jspb.BinaryReader): ImageTransport;
}

export namespace ImageTransport {
    export type AsObject = {
        channel: ImageTransport.TransportChannel,
        handle: string,
    }

    export enum TransportChannel {
    TRANSPORT_CHANNEL_UNSPECIFIED = 0,
    MMAP = 1,
    }

}

export class ImageFormat extends jspb.Message { 
    getFormat(): ImageFormat.ImgFormat;
    setFormat(value: ImageFormat.ImgFormat): ImageFormat;


    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): Rotation | undefined;
    setRotation(value?: Rotation): ImageFormat;

    getWidth(): number;
    setWidth(value: number): ImageFormat;

    getHeight(): number;
    setHeight(value: number): ImageFormat;

    getDisplay(): number;
    setDisplay(value: number): ImageFormat;


    hasTransport(): boolean;
    clearTransport(): void;
    getTransport(): ImageTransport | undefined;
    setTransport(value?: ImageTransport): ImageFormat;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageFormat.AsObject;
    static toObject(includeInstance: boolean, msg: ImageFormat): ImageFormat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageFormat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageFormat;
    static deserializeBinaryFromReader(message: ImageFormat, reader: jspb.BinaryReader): ImageFormat;
}

export namespace ImageFormat {
    export type AsObject = {
        format: ImageFormat.ImgFormat,
        rotation?: Rotation.AsObject,
        width: number,
        height: number,
        display: number,
        transport?: ImageTransport.AsObject,
    }

    export enum ImgFormat {
    PNG = 0,
    RGBA8888 = 1,
    RGB888 = 2,
    }

}

export class Image extends jspb.Message { 

    hasFormat(): boolean;
    clearFormat(): void;
    getFormat(): ImageFormat | undefined;
    setFormat(value?: ImageFormat): Image;

    getWidth(): number;
    setWidth(value: number): Image;

    getHeight(): number;
    setHeight(value: number): Image;

    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): Image;

    getSeq(): number;
    setSeq(value: number): Image;

    getTimestampus(): number;
    setTimestampus(value: number): Image;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        format?: ImageFormat.AsObject,
        width: number,
        height: number,
        image: Uint8Array | string,
        seq: number,
        timestampus: number,
    }
}

export class Rotation extends jspb.Message { 
    getRotation(): Rotation.SkinRotation;
    setRotation(value: Rotation.SkinRotation): Rotation;

    getXaxis(): number;
    setXaxis(value: number): Rotation;

    getYaxis(): number;
    setYaxis(value: number): Rotation;

    getZaxis(): number;
    setZaxis(value: number): Rotation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rotation.AsObject;
    static toObject(includeInstance: boolean, msg: Rotation): Rotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rotation;
    static deserializeBinaryFromReader(message: Rotation, reader: jspb.BinaryReader): Rotation;
}

export namespace Rotation {
    export type AsObject = {
        rotation: Rotation.SkinRotation,
        xaxis: number,
        yaxis: number,
        zaxis: number,
    }

    export enum SkinRotation {
    PORTRAIT = 0,
    LANDSCAPE = 1,
    REVERSE_PORTRAIT = 2,
    REVERSE_LANDSCAPE = 3,
    }

}

export class PhoneCall extends jspb.Message { 
    getOperation(): PhoneCall.Operation;
    setOperation(value: PhoneCall.Operation): PhoneCall;

    getNumber(): string;
    setNumber(value: string): PhoneCall;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneCall.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneCall): PhoneCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneCall;
    static deserializeBinaryFromReader(message: PhoneCall, reader: jspb.BinaryReader): PhoneCall;
}

export namespace PhoneCall {
    export type AsObject = {
        operation: PhoneCall.Operation,
        number: string,
    }

    export enum Operation {
    INITCALL = 0,
    ACCEPTCALL = 1,
    REJECTCALLEXPLICIT = 2,
    REJECTCALLBUSY = 3,
    DISCONNECTCALL = 4,
    PLACECALLONHOLD = 5,
    TAKECALLOFFHOLD = 6,
    }

}

export class PhoneResponse extends jspb.Message { 
    getResponse(): PhoneResponse.Response;
    setResponse(value: PhoneResponse.Response): PhoneResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneResponse): PhoneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneResponse;
    static deserializeBinaryFromReader(message: PhoneResponse, reader: jspb.BinaryReader): PhoneResponse;
}

export namespace PhoneResponse {
    export type AsObject = {
        response: PhoneResponse.Response,
    }

    export enum Response {
    OK = 0,
    BADOPERATION = 1,
    BADNUMBER = 2,
    INVALIDACTION = 3,
    ACTIONFAILED = 4,
    RADIOOFF = 5,
    }

}

export class Entry extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Entry;

    getValue(): string;
    setValue(value: string): Entry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class EntryList extends jspb.Message { 
    clearEntryList(): void;
    getEntryList(): Array<Entry>;
    setEntryList(value: Array<Entry>): EntryList;
    addEntry(value?: Entry, index?: number): Entry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntryList.AsObject;
    static toObject(includeInstance: boolean, msg: EntryList): EntryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntryList;
    static deserializeBinaryFromReader(message: EntryList, reader: jspb.BinaryReader): EntryList;
}

export namespace EntryList {
    export type AsObject = {
        entryList: Array<Entry.AsObject>,
    }
}

export class EmulatorStatus extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): EmulatorStatus;

    getUptime(): number;
    setUptime(value: number): EmulatorStatus;

    getBooted(): boolean;
    setBooted(value: boolean): EmulatorStatus;


    hasVmconfig(): boolean;
    clearVmconfig(): void;
    getVmconfig(): VmConfiguration | undefined;
    setVmconfig(value?: VmConfiguration): EmulatorStatus;


    hasHardwareconfig(): boolean;
    clearHardwareconfig(): void;
    getHardwareconfig(): EntryList | undefined;
    setHardwareconfig(value?: EntryList): EmulatorStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmulatorStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EmulatorStatus): EmulatorStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmulatorStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmulatorStatus;
    static deserializeBinaryFromReader(message: EmulatorStatus, reader: jspb.BinaryReader): EmulatorStatus;
}

export namespace EmulatorStatus {
    export type AsObject = {
        version: string,
        uptime: number,
        booted: boolean,
        vmconfig?: VmConfiguration.AsObject,
        hardwareconfig?: EntryList.AsObject,
    }
}

export class AudioFormat extends jspb.Message { 
    getSamplingrate(): number;
    setSamplingrate(value: number): AudioFormat;

    getChannels(): AudioFormat.Channels;
    setChannels(value: AudioFormat.Channels): AudioFormat;

    getFormat(): AudioFormat.SampleFormat;
    setFormat(value: AudioFormat.SampleFormat): AudioFormat;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioFormat.AsObject;
    static toObject(includeInstance: boolean, msg: AudioFormat): AudioFormat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioFormat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioFormat;
    static deserializeBinaryFromReader(message: AudioFormat, reader: jspb.BinaryReader): AudioFormat;
}

export namespace AudioFormat {
    export type AsObject = {
        samplingrate: number,
        channels: AudioFormat.Channels,
        format: AudioFormat.SampleFormat,
    }

    export enum SampleFormat {
    AUD_FMT_U8 = 0,
    AUD_FMT_S16 = 1,
    }

    export enum Channels {
    MONO = 0,
    STEREO = 1,
    }

}

export class AudioPacket extends jspb.Message { 

    hasFormat(): boolean;
    clearFormat(): void;
    getFormat(): AudioFormat | undefined;
    setFormat(value?: AudioFormat): AudioPacket;

    getTimestamp(): number;
    setTimestamp(value: number): AudioPacket;

    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): AudioPacket;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioPacket.AsObject;
    static toObject(includeInstance: boolean, msg: AudioPacket): AudioPacket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioPacket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioPacket;
    static deserializeBinaryFromReader(message: AudioPacket, reader: jspb.BinaryReader): AudioPacket;
}

export namespace AudioPacket {
    export type AsObject = {
        format?: AudioFormat.AsObject,
        timestamp: number,
        audio: Uint8Array | string,
    }
}

export class SmsMessage extends jspb.Message { 
    getSrcaddress(): string;
    setSrcaddress(value: string): SmsMessage;

    getText(): string;
    setText(value: string): SmsMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SmsMessage): SmsMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsMessage;
    static deserializeBinaryFromReader(message: SmsMessage, reader: jspb.BinaryReader): SmsMessage;
}

export namespace SmsMessage {
    export type AsObject = {
        srcaddress: string,
        text: string,
    }
}

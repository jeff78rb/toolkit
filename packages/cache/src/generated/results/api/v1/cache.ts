// @generated by protobuf-ts 2.9.1 with parameter long_type_string,client_none,generate_dependencies
// @generated from protobuf file "results/api/v1/cache.proto" (package "github.actions.results.api.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CacheMetadata } from "../../entities/v1/cachemetadata";
/**
 * @generated from protobuf message github.actions.results.api.v1.CreateCacheEntryRequest
 */
export interface CreateCacheEntryRequest {
    /**
     * Scope and other metadata for the cache entry
     *
     * @generated from protobuf field: github.actions.results.entities.v1.CacheMetadata metadata = 1;
     */
    metadata?: CacheMetadata;
    /**
     * An explicit key for a cache entry
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
    /**
     * Hash of the compression tool, runner OS and paths cached
     *
     * @generated from protobuf field: string version = 3;
     */
    version: string;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.CreateCacheEntryResponse
 */
export interface CreateCacheEntryResponse {
    /**
     * @generated from protobuf field: bool ok = 1;
     */
    ok: boolean;
    /**
     * SAS URL to upload the cache archive
     *
     * @generated from protobuf field: string signed_upload_url = 2;
     */
    signedUploadUrl: string;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadRequest
 */
export interface FinalizeCacheEntryUploadRequest {
    /**
     * Scope and other metadata for the cache entry
     *
     * @generated from protobuf field: github.actions.results.entities.v1.CacheMetadata metadata = 1;
     */
    metadata?: CacheMetadata;
    /**
     * An explicit key for a cache entry
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
    /**
     * Size of the cache archive in Bytes
     *
     * @generated from protobuf field: int64 size_bytes = 3;
     */
    sizeBytes: string;
    /**
     * Hash of the compression tool, runner OS and paths cached
     *
     * @generated from protobuf field: string version = 4;
     */
    version: string;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadResponse
 */
export interface FinalizeCacheEntryUploadResponse {
    /**
     * @generated from protobuf field: bool ok = 1;
     */
    ok: boolean;
    /**
     * Cache entry database ID
     *
     * @generated from protobuf field: int64 entry_id = 2;
     */
    entryId: string;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLRequest
 */
export interface GetCacheEntryDownloadURLRequest {
    /**
     * Scope and other metadata for the cache entry
     *
     * @generated from protobuf field: github.actions.results.entities.v1.CacheMetadata metadata = 1;
     */
    metadata?: CacheMetadata;
    /**
     * An explicit key for a cache entry
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
    /**
     * Restore keys used for prefix searching
     *
     * @generated from protobuf field: repeated string restore_keys = 3;
     */
    restoreKeys: string[];
    /**
     * Hash of the compression tool, runner OS and paths cached
     *
     * @generated from protobuf field: string version = 4;
     */
    version: string;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLResponse
 */
export interface GetCacheEntryDownloadURLResponse {
    /**
     * @generated from protobuf field: bool ok = 1;
     */
    ok: boolean;
    /**
     * SAS URL to download the cache archive
     *
     * @generated from protobuf field: string signed_download_url = 2;
     */
    signedDownloadUrl: string;
    /**
     * Key or restore key that matches the lookup
     *
     * @generated from protobuf field: string matched_key = 3;
     */
    matchedKey: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateCacheEntryRequest$Type extends MessageType<CreateCacheEntryRequest> {
    constructor() {
        super("github.actions.results.api.v1.CreateCacheEntryRequest", [
            { no: 1, name: "metadata", kind: "message", T: () => CacheMetadata },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateCacheEntryRequest>): CreateCacheEntryRequest {
        const message = { key: "", version: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateCacheEntryRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCacheEntryRequest): CreateCacheEntryRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* string version */ 3:
                    message.version = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateCacheEntryRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */
        if (message.metadata)
            CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        /* string version = 3; */
        if (message.version !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.CreateCacheEntryRequest
 */
export const CreateCacheEntryRequest = new CreateCacheEntryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateCacheEntryResponse$Type extends MessageType<CreateCacheEntryResponse> {
    constructor() {
        super("github.actions.results.api.v1.CreateCacheEntryResponse", [
            { no: 1, name: "ok", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "signed_upload_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateCacheEntryResponse>): CreateCacheEntryResponse {
        const message = { ok: false, signedUploadUrl: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateCacheEntryResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCacheEntryResponse): CreateCacheEntryResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* string signed_upload_url */ 2:
                    message.signedUploadUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateCacheEntryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool ok = 1; */
        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        /* string signed_upload_url = 2; */
        if (message.signedUploadUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.signedUploadUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.CreateCacheEntryResponse
 */
export const CreateCacheEntryResponse = new CreateCacheEntryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinalizeCacheEntryUploadRequest$Type extends MessageType<FinalizeCacheEntryUploadRequest> {
    constructor() {
        super("github.actions.results.api.v1.FinalizeCacheEntryUploadRequest", [
            { no: 1, name: "metadata", kind: "message", T: () => CacheMetadata },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "size_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FinalizeCacheEntryUploadRequest>): FinalizeCacheEntryUploadRequest {
        const message = { key: "", sizeBytes: "0", version: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FinalizeCacheEntryUploadRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FinalizeCacheEntryUploadRequest): FinalizeCacheEntryUploadRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* int64 size_bytes */ 3:
                    message.sizeBytes = reader.int64().toString();
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FinalizeCacheEntryUploadRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */
        if (message.metadata)
            CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        /* int64 size_bytes = 3; */
        if (message.sizeBytes !== "0")
            writer.tag(3, WireType.Varint).int64(message.sizeBytes);
        /* string version = 4; */
        if (message.version !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadRequest
 */
export const FinalizeCacheEntryUploadRequest = new FinalizeCacheEntryUploadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinalizeCacheEntryUploadResponse$Type extends MessageType<FinalizeCacheEntryUploadResponse> {
    constructor() {
        super("github.actions.results.api.v1.FinalizeCacheEntryUploadResponse", [
            { no: 1, name: "ok", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "entry_id", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<FinalizeCacheEntryUploadResponse>): FinalizeCacheEntryUploadResponse {
        const message = { ok: false, entryId: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FinalizeCacheEntryUploadResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FinalizeCacheEntryUploadResponse): FinalizeCacheEntryUploadResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* int64 entry_id */ 2:
                    message.entryId = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FinalizeCacheEntryUploadResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool ok = 1; */
        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        /* int64 entry_id = 2; */
        if (message.entryId !== "0")
            writer.tag(2, WireType.Varint).int64(message.entryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadResponse
 */
export const FinalizeCacheEntryUploadResponse = new FinalizeCacheEntryUploadResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCacheEntryDownloadURLRequest$Type extends MessageType<GetCacheEntryDownloadURLRequest> {
    constructor() {
        super("github.actions.results.api.v1.GetCacheEntryDownloadURLRequest", [
            { no: 1, name: "metadata", kind: "message", T: () => CacheMetadata },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "restore_keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCacheEntryDownloadURLRequest>): GetCacheEntryDownloadURLRequest {
        const message = { key: "", restoreKeys: [], version: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCacheEntryDownloadURLRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCacheEntryDownloadURLRequest): GetCacheEntryDownloadURLRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* repeated string restore_keys */ 3:
                    message.restoreKeys.push(reader.string());
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCacheEntryDownloadURLRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */
        if (message.metadata)
            CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        /* repeated string restore_keys = 3; */
        for (let i = 0; i < message.restoreKeys.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.restoreKeys[i]);
        /* string version = 4; */
        if (message.version !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLRequest
 */
export const GetCacheEntryDownloadURLRequest = new GetCacheEntryDownloadURLRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCacheEntryDownloadURLResponse$Type extends MessageType<GetCacheEntryDownloadURLResponse> {
    constructor() {
        super("github.actions.results.api.v1.GetCacheEntryDownloadURLResponse", [
            { no: 1, name: "ok", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "signed_download_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "matched_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCacheEntryDownloadURLResponse>): GetCacheEntryDownloadURLResponse {
        const message = { ok: false, signedDownloadUrl: "", matchedKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCacheEntryDownloadURLResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCacheEntryDownloadURLResponse): GetCacheEntryDownloadURLResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* string signed_download_url */ 2:
                    message.signedDownloadUrl = reader.string();
                    break;
                case /* string matched_key */ 3:
                    message.matchedKey = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCacheEntryDownloadURLResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool ok = 1; */
        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        /* string signed_download_url = 2; */
        if (message.signedDownloadUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.signedDownloadUrl);
        /* string matched_key = 3; */
        if (message.matchedKey !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.matchedKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLResponse
 */
export const GetCacheEntryDownloadURLResponse = new GetCacheEntryDownloadURLResponse$Type();
/**
 * @generated ServiceType for protobuf service github.actions.results.api.v1.CacheService
 */
export const CacheService = new ServiceType("github.actions.results.api.v1.CacheService", [
    { name: "CreateCacheEntry", options: {}, I: CreateCacheEntryRequest, O: CreateCacheEntryResponse },
    { name: "FinalizeCacheEntryUpload", options: {}, I: FinalizeCacheEntryUploadRequest, O: FinalizeCacheEntryUploadResponse },
    { name: "GetCacheEntryDownloadURL", options: {}, I: GetCacheEntryDownloadURLRequest, O: GetCacheEntryDownloadURLResponse }
]);

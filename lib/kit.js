"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ByteBufferKit = /** @class */ (function () {
    function ByteBufferKit() {
    }
    ByteBufferKit.readUB2WithBigEdian = function (buffer) {
        var ret = (buffer.readByte() & 0xff) << 8;
        ret |= buffer.readByte() & 0xff;
        return ret;
    };
    ByteBufferKit.readBytes = function (buffer, length) {
        return new Uint8Array(buffer.readBytes(length).toArrayBuffer());
    };
    return ByteBufferKit;
}());
exports.ByteBufferKit = ByteBufferKit;
//# sourceMappingURL=kit.js.map
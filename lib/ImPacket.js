"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var bytebuffer_1 = __importDefault(require("bytebuffer"));
var kit_1 = require("./kit");
var Opcode;
(function (Opcode) {
    Opcode[Opcode["TEXT"] = 1] = "TEXT";
    Opcode[Opcode["BINARY"] = 2] = "BINARY";
    Opcode[Opcode["CLOSE"] = 8] = "CLOSE";
    Opcode[Opcode["PING"] = 9] = "PING";
    Opcode[Opcode["PONG"] = 10] = "PONG";
})(Opcode || (Opcode = {}));
var ImPacket = /** @class */ (function () {
    function ImPacket() {
        this.command = Command_1.Command.UNRECOGNIZED;
        this.body = bytebuffer_1.default.wrap('');
        this.wsEof = false;
        this.wsOpcode = Opcode.BINARY;
        this.wsHasMask = false;
        this.wsBodyLength = 0;
        this.wsMask = new Uint8Array();
        this.wsBody = new Uint8Array();
    }
    ImPacket.prototype.encode = function () {
        var imBody = this.body.toArrayBuffer();
        var wsBodyLength = 1; // fixed 1 byte for command code
        var command = this.command;
        // not command or heartbeat request
        if (!command || command === Command_1.Command.COMMAND_HEARTBEAT_REQ) {
            wsBodyLength = 0;
        }
        if (imBody) {
            wsBodyLength += imBody.byteLength;
        }
        var header0 = (0x8f & (this.wsOpcode | 0xf0));
        throw 'TODO';
    };
    ImPacket.fromEvent = function (e) {
        var raw = e.data;
        var buf = bytebuffer_1.default.wrap(raw, 'binary');
        return ImPacket.decode(buf);
    };
    ImPacket.decode = function (buf) {
        // resolving step 1
        var initPosition = buf.offset;
        var readableLength = buf.limit - initPosition;
        var headLength = ImPacket.MINIMUM_HEADER_LENGTH;
        if (readableLength < headLength)
            throw 'readableLength < headLength';
        var first = buf.readByte();
        var fin = (first & 0x80) > 0;
        var rsv = (first & 0x70) >>> 4;
        var opCodeByte = first & 0x0f;
        // const opcode = Opcode[opCodeByte];
        if (opCodeByte === Opcode.CLOSE) {
            throw 'CLOSE';
        }
        if (!fin) {
            throw 'not fin';
        }
        var second = buf.readByte();
        var hasMask = (second & 0xff) >> 7 == 1; // 用于标识PayloadData是否经过掩码处理。如果是1，Masking-key域的数据即是掩码密钥，用于解码PayloadData。客户端发出的数据帧需要进行掩码处理，所以此位是1。
        // Client data must be masked
        if (!hasMask) {
            // 第9位为mask,必须为1
            throw 'websocket client data must be masked';
        }
        else {
            headLength += 4;
        }
        var payloadLength = second & 0x7f;
        var mask = new Uint8Array();
        if (payloadLength === 126) {
            headLength += 2;
            if (readableLength < headLength)
                throw 'readableLength < headLength';
            payloadLength = kit_1.ByteBufferKit.readUB2WithBigEdian(buf);
        }
        else if (payloadLength === 127) {
            headLength += 8;
            if (readableLength < headLength)
                throw 'readableLength < headLength';
            payloadLength = buf.readInt64().toNumber();
        }
        if (payloadLength < 0 || payloadLength > ImPacket.MAX_BODY_LENGTH) {
            throw 'body length(' + payloadLength + ') is not right';
        }
        if (readableLength < headLength + payloadLength) {
            throw 'readableLength < headLength + payloadLength';
        }
        if (hasMask) {
            mask = kit_1.ByteBufferKit.readBytes(buf, 4);
        }
        // resolving step 2
        var packet = new ImPacket();
        packet.wsEof = fin;
        packet.wsHasMask = hasMask;
        packet.wsMask = mask;
        packet.wsOpcode = opCodeByte;
        packet.wsBodyLength = payloadLength;
        if (payloadLength === 0)
            return packet;
        var array = kit_1.ByteBufferKit.readBytes(buf, payloadLength);
        if (hasMask) {
            for (var i = 0; i < array.length; i++) {
                array[i] = array[i] ^ mask[i % 4];
            }
        }
        if (!fin)
            return packet;
        else {
        }
        packet.wsBody = array;
        if (opCodeByte === Opcode.TEXT) {
            packet.wsBodyText = bytebuffer_1.default.wrap(array).toUTF8();
        }
        return packet;
    };
    /// static members
    ImPacket.MINIMUM_HEADER_LENGTH = 2;
    ImPacket.MAX_BODY_LENGTH = 1024 * 512;
    ImPacket.CHARSET_NAME = 'UTF-8';
    return ImPacket;
}());
exports.ImPacket = ImPacket;
//# sourceMappingURL=ImPacket.js.map
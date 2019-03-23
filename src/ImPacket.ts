import { Command } from './Command';
import ByteBuffer from 'bytebuffer';
import { ByteBufferKit } from './kit';

enum Opcode {
  TEXT = 1,
  BINARY = 2,
  CLOSE = 8,
  PING = 9,
  PONG = 10
}

export class ImPacket {
  private command: Command = Command.UNRECOGNIZED;
  private body: ByteBuffer = ByteBuffer.wrap('');

  private wsEof: boolean = false;
  private wsOpcode = Opcode.BINARY;
  private wsHasMask: boolean = false;
  private wsBodyLength: number = 0;
  private wsMask: Uint8Array = new Uint8Array();
  private wsBody: Uint8Array = new Uint8Array();
  private wsBodyText?: string; // when wsOpcode === Opcode.TEXT

  private constructor() {}

  encode(): ArrayBuffer {
    const imBody = this.body.toArrayBuffer(); 
    let  wsBodyLength = 1; // fixed 1 byte for command code
    const command = this.command; 
    // not command or heartbeat request
    if(!command||command===Command.COMMAND_HEARTBEAT_REQ){
      wsBodyLength = 0;
    }
    if(imBody){
      wsBodyLength+=imBody.byteLength; 
    }

    const header0 = (0x8f & (this.wsOpcode | 0xf0));
    throw 'TODO';
  }

  /// static members

  static readonly MINIMUM_HEADER_LENGTH = 2;
  static readonly MAX_BODY_LENGTH = 1024 * 512;
  static readonly CHARSET_NAME = 'UTF-8';

  static fromEvent(e: MessageEvent): ImPacket {
    const raw: ArrayBuffer = e.data;
    const buf = ByteBuffer.wrap(raw, 'binary');

    return ImPacket.decode(buf);
  }

  static decode(buf: ByteBuffer): ImPacket {
    // resolving step 1
    let initPosition = buf.offset;
    const readableLength = buf.limit - initPosition;
    let headLength = ImPacket.MINIMUM_HEADER_LENGTH;
    if (readableLength < headLength) throw 'readableLength < headLength';
    const first = buf.readByte();
    const fin = (first & 0x80) > 0;
    const rsv = (first & 0x70) >>> 4;
    const opCodeByte: Opcode = first & 0x0f;
    // const opcode = Opcode[opCodeByte];
    if (opCodeByte === Opcode.CLOSE) {
      throw 'CLOSE';
    }
    if (!fin) {
      throw 'not fin';
    }
    const second = buf.readByte();
    const hasMask = (second & 0xff) >> 7 == 1; // 用于标识PayloadData是否经过掩码处理。如果是1，Masking-key域的数据即是掩码密钥，用于解码PayloadData。客户端发出的数据帧需要进行掩码处理，所以此位是1。
    // Client data must be masked
    if (!hasMask) {
      // 第9位为mask,必须为1
      throw 'websocket client data must be masked';
    } else {
      headLength += 4;
    }
    let payloadLength = second & 0x7f;
    let mask = new Uint8Array();
    if (payloadLength === 126) {
      headLength += 2;
      if (readableLength < headLength) throw 'readableLength < headLength';
      payloadLength = ByteBufferKit.readUB2WithBigEdian(buf);
    } else if (payloadLength === 127) {
      headLength += 8;
      if (readableLength < headLength) throw 'readableLength < headLength';
      payloadLength = buf.readInt64().toNumber();
    }
    if (payloadLength < 0 || payloadLength > ImPacket.MAX_BODY_LENGTH) {
      throw 'body length(' + payloadLength + ') is not right';
    }
    if (readableLength < headLength + payloadLength) {
      throw 'readableLength < headLength + payloadLength';
    }
    if (hasMask) {
      mask = ByteBufferKit.readBytes(buf, 4);
    }
    // resolving step 2
    const packet = new ImPacket();
    packet.wsEof = fin;
    packet.wsHasMask = hasMask;
    packet.wsMask = mask;
    packet.wsOpcode = opCodeByte;
    packet.wsBodyLength = payloadLength;

    if (payloadLength === 0) return packet;

    const array = ByteBufferKit.readBytes(buf, payloadLength);
    if (hasMask) {
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i] ^ mask[i % 4];
      }
    }

    if (!fin) return packet;
    else {
    }

    packet.wsBody = array;

    if (opCodeByte === Opcode.TEXT) {
      packet.wsBodyText = ByteBuffer.wrap(array).toUTF8();
    }

    return packet;
  }
}

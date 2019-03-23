import ByteBuffer from 'bytebuffer';
export declare class ImPacket {
    private command;
    private body;
    private wsEof;
    private wsOpcode;
    private wsHasMask;
    private wsBodyLength;
    private wsMask;
    private wsBody;
    private wsBodyText?;
    private constructor();
    encode(): ArrayBuffer;
    static readonly MINIMUM_HEADER_LENGTH = 2;
    static readonly MAX_BODY_LENGTH: number;
    static readonly CHARSET_NAME = "UTF-8";
    static fromEvent(e: MessageEvent): ImPacket;
    static decode(buf: ByteBuffer): ImPacket;
}

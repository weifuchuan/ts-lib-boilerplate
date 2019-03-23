import ByteBuffer from 'bytebuffer';
export declare class ByteBufferKit {
    static readUB2WithBigEdian(buffer: ByteBuffer): number;
    static readBytes(buffer: ByteBuffer, length: number): Uint8Array;
}

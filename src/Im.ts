import { ImPacket } from './ImPacket';
import {
  webSocket,
  WebSocketSubjectConfig,
  WebSocketSubject
} from 'rxjs/webSocket';
import { PartialObserver } from 'rxjs/internal/types';

export class Im {
  private ws: WebSocketSubject<ImPacket>;

  constructor(url: string) {
    const config = buildConfig(url);
    this.ws = webSocket(config);
    this.ws.subscribe(this.subscriber);
    
  }

  private readonly subscriber: PartialObserver<ImPacket> = {
    next(packet) {
      console.info(packet);
    },
    complete() {
      console.info('complete');
    },
    error(err) {
      console.error('err', err);
    }
  };
}

function buildConfig(url: string): WebSocketSubjectConfig<ImPacket> {
  return {
    url,
    serializer(packet) {
      return packet.encode();
    },
    deserializer(msg) {
      return ImPacket.fromEvent(msg);
    },
    binaryType: 'arraybuffer'
  };
}

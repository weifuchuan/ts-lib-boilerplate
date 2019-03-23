"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImPacket_1 = require("./ImPacket");
var webSocket_1 = require("rxjs/webSocket");
var Im = /** @class */ (function () {
    function Im(url) {
        this.subscriber = {
            next: function (packet) {
                console.info(packet);
            },
            complete: function () {
                console.info('complete');
            },
            error: function (err) {
                console.error('err', err);
            }
        };
        var config = buildConfig(url);
        this.ws = webSocket_1.webSocket(config);
        this.ws.subscribe(this.subscriber);
    }
    return Im;
}());
exports.Im = Im;
function buildConfig(url) {
    return {
        url: url,
        serializer: function (packet) {
            return packet.encode();
        },
        deserializer: function (msg) {
            return ImPacket_1.ImPacket.fromEvent(msg);
        },
        binaryType: 'arraybuffer'
    };
}
//# sourceMappingURL=Im.js.map
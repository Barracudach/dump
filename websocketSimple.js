import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as o from "./websocket.js";
import * as c from "./mttconfig.js";
import * as l from "./mttconfig.js";

function main() {
    t._RF.push({}, "be2c37zXBtLv4gZlTwvqfkf", "websocketSimple", void 0);
    e("WebSocketSimple", class {
        get gameURLPrefix() {
            return l.SERVER_URL_WS_PREFIX + "://" + l.SERVER_URL_GAME_TEXT[this._index] + "/"
        }
        get worldURLPrefix() {
            return l.SERVER_URL_WS_PREFIX + "://" + l.SERVER_URL_WORLD_TEXT[this._index] + "/"
        }
        get url() {
            switch (this._type) {
                case o.HOLDEM:
                    return this.gameURLPrefix + "holdem";
                case o.HOLDEM_SNG:
                    return this.gameURLPrefix + "sng/holdem";
                case o.HOLDEM_MTT:
                    return this.gameURLPrefix + "mtt/holdem";
                case o.OMAHA_SNG:
                    return this.gameURLPrefix + "sng/omaha";
                case o.OMAHA_MTT:
                    return this.gameURLPrefix + "mtt/omaha";
                case o.PINEAPPLE:
                    return this.gameURLPrefix + "pineapple";
                case o.PINEAPPLE_LOOP:
                    return this.gameURLPrefix + "loop/pineapple";
                case o.PINEAPPLE_MTT:
                    return this.gameURLPrefix + "mtt/pineapple"
            }
            return this.worldURLPrefix + "world"
        }
        constructor(e, t, n = null, s = null, i = null, o = null) {
            this.ws = void 0, this._type = 0, this._index = 0, this._connectingTimeout = null, this.pingMessageData = new Uint8Array([0, 0, 0, 6, 0, 3]), this.onOpenCallback = null, this.onOpen = () => {
                try {
                    clearTimeout(this._connectingTimeout), this.onOpenCallback && this.onOpenCallback instanceof Function && this.onOpenCallback()
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.error("WS", e)
                }
            }, this._type = e, this._index = t, this.connect(n, s, i, o)
        }
        init() {
            clearTimeout(this._connectingTimeout), this.onOpenCallback = null, this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onclose = null, this.ws.onerror = null, this.ws.close())
        }
        connect(e = null, t = null, o = null, l = null) {
            cc_mtt.vv.ConsoleLog.log("WS", this.url, this._type, this._index), clearTimeout(this._connectingTimeout), this._connectingTimeout = setTimeout((() => {
                this.ws && this.ws.close()
            }), c.websocketConnectTimeoutLimit), !n.isNative || n.os !== n.OS.ANDROID && n.os !== n.OS.WINDOWS ? (this.ws = new WebSocket(this.url), this.initWebSocket(e, t, o, l)) : s.load("ca/cacert", i, ((n, s) => {
                n ? console.error(n.message || n) : (cc_mtt.vv.ConsoleLog.log("cert url ", s.nativeUrl), this.ws = new WebSocket(this.url, "chat", s.nativeUrl), this.initWebSocket(e, t, o, l))
            }))
        }
        initWebSocket(e = null, t = null, n = null, s = null) {
            const i = this.ws;
            i.binaryType = "arraybuffer", i.onopen = this.onOpen, this.onOpenCallback = e, i.onmessage = t, i.onclose = n, i.onerror = s
        }
        sendPing() {
            this.ws.send(this.pingMessageData)
        }
    }), t._RF.pop()
}
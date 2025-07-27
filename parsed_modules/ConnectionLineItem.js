import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./websocketSimple.js";
import * as u from "./websocket.js";
import * as _ from "./websocket.js";
import * as d from "./Translator.js";
import * as g from "./mttconfig.js";
import * as m from "./mttconfig.js";
import * as p from "./worldWebsocket.js";
import * as f from "./ppWebsocket.js";
import * as b from "./CommonTools.js";

function main() {
    var T, I, L, y, S, x, w, E, k;
    i._RF.push({}, "d3448+45LFHl6JQ1Y573UsZ", "ConnectionLineItem", void 0);
    const {
        ccclass: v,
        property: W
    } = r;
    t("ConnectionLineItem", (T = W(o), I = W(s), L = W(s), v(((k = class t extends l {
        constructor(...e) {
            super(...e), n(this, "statusSprite", x, this), n(this, "nameLabel", w, this), n(this, "pingLabel", E, this), this._lineIndex = 0, this._startConnectTime = [], this._endConnectTime = [], this._ws = [], this._onConnectedCallback = void 0, this._typeIndex = 0, this.hasConnected = !1, this._connectionLineObject = null, this._connectingTimeout = null, this.onOpen = () => {
                try {
                    this.currentStartConnectTime = (new Date).getTime(), this.currentWS.sendPing(), this._connectingTimeout = setTimeout((() => {
                        this.currentWS.init(), this.onClosed()
                    }), m.websocketConnectTimeoutLimit)
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error("CLI", t)
                }
            }, this.onMessage = e => {
                try {
                    const n = new Uint8Array(e.data);
                    4 == b.instance.intFromBytes(n.slice(4, 6)) && (this.currentEndConnectTime = (new Date).getTime(), this.initConnection(), this._typeIndex++, this._typeIndex < t._type.length ? this.connect() : (this.hasConnected = !0, this.setPing(this.getPingValue()), this._onConnectedCallback && this._onConnectedCallback instanceof Function && this._onConnectedCallback()))
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error("CLI", t)
                }
            }, this.onClosed = () => {
                try {
                    this.currentEndConnectTime = -1, this.initConnection(), this.setPing(this.getPingValue()), cc_mtt.vv.ConsoleLog.error("onClosed", this._lineIndex, this._typeIndex), this._onConnectedCallback && this._onConnectedCallback instanceof Function && this._onConnectedCallback()
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error(t)
                }
            }, this.onError = () => {
                try {
                    this.currentEndConnectTime = -1, this.initConnection(), this.setPing(this.getPingValue()), cc_mtt.vv.ConsoleLog.error("onError", this._lineIndex, this._typeIndex), this._onConnectedCallback && this._onConnectedCallback instanceof Function && this._onConnectedCallback()
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error("CLI", t)
                }
            }
        }
        get currentStartConnectTime() {
            return this._startConnectTime[this._typeIndex]
        }
        set currentStartConnectTime(t) {
            this._startConnectTime[this._typeIndex] = t
        }
        get currentEndConnectTime() {
            return this._endConnectTime[this._typeIndex]
        }
        set currentEndConnectTime(t) {
            this._endConnectTime[this._typeIndex] = t
        }
        get currentWS() {
            return this._ws[this._typeIndex]
        }
        set currentWS(t) {
            this._ws[this._typeIndex] = t
        }
        onDestroy() {
            if (clearTimeout(this._connectingTimeout), this._ws)
                for (let t = 0; t < this._ws.length; t++) this._ws[t] && this._ws[t].init()
        }
        setName(t, e) {
            this._connectionLineObject = t, this._lineIndex = e;
            let n = "";
            n = 0 == e ? d("NETWORK.MAIN_CONNECTION_LINE") : h.formatStr(d("NETWORK.CONNECTION_LINE_NO"), e), this.nameLabel.string = n, this.checkSelected()
        }
        init() {
            this._ws = [], this._startConnectTime = [], this._endConnectTime = [], this.hasConnected = !1;
            for (let e = 0; e < t._type.length; e++) this._startConnectTime.push(-1), this._endConnectTime.push(-1), this._ws.push(null);
            this._typeIndex = 0
        }
        initConnection() {
            clearTimeout(this._connectingTimeout), this.currentWS.init()
        }
        checkSelected() {
            this.setSelected(this._lineIndex == g.getURLWorldIndex())
        }
        setSelected(e) {
            let n = t.fontColor[0];
            e && (n = t.fontColor[1]), this.nameLabel.node.getComponent(a).color = n, this.pingLabel.node.getComponent(a).color = n
        }
        setInfo(t = null) {
            this.init(), this._onConnectedCallback = t, this.connect()
        }
        connect() {
            this.currentWS = new C(t._type[this._typeIndex], this._lineIndex, this.onOpen, this.onMessage, this.onClosed, this.onError)
        }
        setPing(e) {
            this.pingLabel.string = -1 == e ? d("NETWORK.DISCONNECTED") : e.toString() + "ping";
            let n = t._statusColor[t._statusColor.length - 1];
            for (let i = 0; i < t._statusRange.length; i++)
                if (e > 0 && e <= t._statusRange[i]) {
                    n = t._statusColor[i];
                    break
                } this.statusSprite.node.getComponent(a).color = n, this.statusSprite.node.active = !0
        }
        getPingValue() {
            let e = 0;
            for (let n = 0; n < this._startConnectTime.length && n < this._endConnectTime.length; n++) {
                if (-1 == this._endConnectTime[n]) return -1;
                let i = this._endConnectTime[n] - this._startConnectTime[n];
                cc_mtt.vv.ConsoleLog.log("ping", this._lineIndex, t._type[n], i), i > e && (e = i)
            }
            return e
        }
        onClick() {
            try {
                this.hasConnected && p.hasInstance && (cc_mtt.vv.ConsoleLog.log("Change connection", this._lineIndex), p.reconnectCountTotal = 2 * this._lineIndex, f.reconnectCountTotal = 2 * this._lineIndex, u.reconnectCountTotal = 2 * this._lineIndex, p.getInstance().close(), this._connectionLineObject.selectItem(this._lineIndex))
            } catch (t) {
                cc_mtt.vv.ConsoleLog.error("CLI", t)
            }
        }
    })._type = [_.WORLD, _.HOLDEM_MTT], k._statusColor = [(new c).fromHEX("53ff6e"), (new c).fromHEX("f9bb25"), (new c).fromHEX("ff5a00")], k.fontColor = [(new c).fromHEX("9b9b9b"), (new c).fromHEX("ffffff")], k._statusRange = [200, 400], x = e((S = k).prototype, "statusSprite", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(S.prototype, "nameLabel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(S.prototype, "pingLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = S)) || y));
    i._RF.pop()
}
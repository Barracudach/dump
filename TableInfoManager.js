import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as S from "./TableSeat.js";
import * as c from "./TableSeat.js";

function main() {
    var _, g, d, f, y, m, I, w, P, M, R, B, N;
    l._RF.push({}, "9c3e4XiRc1IdIxlML6Qge7x", "TableInfoManager", void 0);
    const {
        ccclass: x,
        property: v
    } = o;
    t("default", (_ = v(i), g = v(i), d = v(i), f = v(s), x((I = e((m = class extends n {
        constructor(...t) {
            super(...t), a(this, "tableSeatRootNode", I, this), a(this, "inGamePlayerNode", w, this), a(this, "tableSeatNode", P, this), a(this, "tableBg", M, this), a(this, "tableBgRa", R, this), a(this, "tableBgRb", B, this), a(this, "showMultiEmptySeat", N, this), this._tableSeatPool = new r, this._tableSeatNodes = [], this._tableSeats = [], this._emptySeatIndex = -1
        }
        onLoad() {
            this.tableBgRa || (this.tableBgRa = this.tableBg.node.getComponent(h).width / 2), this.tableBgRb || (this.tableBgRb = this.tableBg.node.getComponent(h).height / 2)
        }
        onDestroy() {
            this._tableSeatPool.clear()
        }
        reset() {
            this._recycleTableSeat(), this._tableSeatPool.clear(), this._tableSeats = [], this._emptySeatIndex = -1
        }
        setData(t, e) {
            this._tableSeats = [], this._emptySeatIndex = -1, "number" == typeof t ? this._setDataSimple(t, e) : this._setData(t, e)
        }
        _setDataSimple(t, e) {
            for (let e = 0; e < t; ++e) this._tableSeats.push({
                seatId: e,
                avatorUrl: ""
            });
            for (let a = t; a < e && (this._tableSeats.push({
                    seatId: a,
                    avatorUrl: null
                }), this._emptySeatIndex = a, this.showMultiEmptySeat); ++a);
        }
        _setData(t, e) {
            for (let t = 0; t < e; ++t) this._tableSeats.push({
                seatId: t,
                avatorUrl: null
            });
            for (let e = 0; e < t.length; ++e) this._tableSeats[t[e].seatId] = t[e];
            for (let t = 0; t < this._tableSeats.length; ++t)
                if (null == this._tableSeats[t].avatorUrl) {
                    this._emptySeatIndex = t;
                    break
                } if (!this.showMultiEmptySeat)
                for (let t = this._tableSeats.length - 1; t >= 0; --t) null == this._tableSeats[t].avatorUrl && t != this._emptySeatIndex && this._tableSeats.splice(t, 1)
        }
        generate() {
            this._recycleTableSeat();
            let t = 360 * this._emptySeatIndex / this._tableSeats.length + 90;
            for (let e = 0; e < this._tableSeats.length; ++e) {
                let a, l = this._tableSeats[e];
                a = this._tableSeatPool.size() > 0 ? this._tableSeatPool.get() : b(this.tableSeatNode), a.active = !0;
                let i = null == l.avatorUrl ? S.emptySeat : S.playerSeat;
                a.getComponent(c).setSeat(i, l.seatId, l.avatorUrl), a.setPosition(this._calPosition(e, t)), a.parent = this.tableSeatRootNode, this._tableSeatNodes.push(a)
            }
        }
        hasEmptySeat() {
            return -1 !== this._emptySeatIndex
        }
        getTableSeats() {
            return this._tableSeatNodes
        }
        _recycleTableSeat() {
            for (; this._tableSeatNodes.length > 0;) this._tableSeatPool.put(this._tableSeatNodes.pop())
        }
        _calPosition(t, e = 0) {
            let a = 360 * t / this._tableSeats.length;
            return a -= e, this._getPositionOnEllipseArc(a, this.tableBgRa, this.tableBgRb)
        }
        _getPositionOnEllipseArc(t, e, a, l = new u(0, 0)) {
            let i = t / 180 * Math.PI,
                s = Math.sqrt(Math.pow(e * Math.sin(i), 2) + Math.pow(a * Math.cos(i), 2)),
                o = l.x + e * a * Math.cos(i) / s,
                n = l.y + e * a * Math.sin(i) / s;
            return new p(o, n)
        }
    }).prototype, "tableSeatRootNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(m.prototype, "inGamePlayerNode", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(m.prototype, "tableSeatNode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(m.prototype, "tableBg", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(m.prototype, "tableBgRa", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), B = e(m.prototype, "tableBgRb", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), N = e(m.prototype, "showMultiEmptySeat", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), y = m)) || y));
    l._RF.pop()
}
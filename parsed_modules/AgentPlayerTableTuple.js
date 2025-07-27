import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./NodePage.js";
import * as u from "./EventCustom.js";

function main() {
    var c, p, h, b, d, m, g, f, y, T, v, D, C, w;
    n._RF.push({}, "252c6GSasxPBYlJmJ3ueulw", "AgentPlayerTableTuple", void 0);
    const {
        ccclass: P,
        property: k
    } = s;
    e("AgentPlayerTableTuple", (c = k(l), p = k(l), h = k(l), b = k(l), d = k(l), m = k(l), P((y = t((f = class extends a {
        constructor(...e) {
            super(...e), i(this, "nickName", y, this), i(this, "playerId", T, this), i(this, "coins", v, this), i(this, "contribution", D, this), i(this, "lastDate", C, this), i(this, "lastTime", w, this), this._tupleId = 0, this.tupleRef = 0, this.tupleData = void 0
        }
        setInfo(e, t, i = this.tupleRef) {
            if (!r(this.node)) return;
            this._tupleId = t, this.tupleRef = i, this.tupleData = e, this.nickName.string = e.nickname, this.playerId.string = `${e.userId}`, this.coins.string = void 0 === e.gold ? e.code : o.getCoinsLabel(e.gold), this.contribution.string = o.getCoinsLabel(e.contribution);
            let n = e.lastAction;
            if ("number" == typeof e.memberCount && e.memberCount >= 0) this.lastDate.string = e.memberCount.toString(), this.lastTime.node.active && (this.lastTime.node.active = !1);
            else if (n)
                if (n.getFullYear() < 2e3) this.lastDate.string = "-", this.lastTime.node.active = !1;
                else {
                    this.lastDate.string = `${o.handleDateLabel(n).join("-")}`, this.lastTime.node.active = !0;
                    let [e, t] = o.handleTimeLabel(n);
                    this.lastTime.string = `${e}:${t}`
                }
            else this.lastDate.string = "-", this.lastTime.node.active = !1
        }
        onTupleClicked() {
            let e = new u("agentTupleClicked", !0);
            e.setUserData([this.tupleRef, this.tupleData]), this.node.dispatchEvent(e)
        }
    }).prototype, "nickName", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(f.prototype, "playerId", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(f.prototype, "coins", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(f.prototype, "contribution", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(f.prototype, "lastDate", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(f.prototype, "lastTime", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = f)) || g));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./NodePage.js";
import * as a from "./UtilsPkw.js";

function main() {
    var b, c, p, h, d, f, g, m, P, T, v, y, B, A;
    n._RF.push({}, "29a9eWu3IJMhYxogB0Cs373", "MttBlindPotTableTuple", void 0);
    const {
        ccclass: w,
        property: z
    } = o;
    t("MttBlindPotTableTuple", (b = z(l), c = z(r), p = z([l]), h = z(r), d = z(r), f = z(r), w((P = e((m = class extends u {
        constructor(...t) {
            super(...t), i(this, "stopIcon", P, this), i(this, "level", T, this), i(this, "tupleAttributes", v, this), i(this, "blind", y, this), i(this, "ante", B, this), i(this, "basePot", A, this), this._tupleId = 0
        }
        start() {}
        setInfo(t, e, i, n, l, r = 0) {
            t.BasePot ? (this.selectTableAttributes(1), this.basePot.string = a.NumberToString(s.roundValue(t.BasePot))) : (this.selectTableAttributes(0), this.ante.string = a.NumberToString(s.roundValue(t.Ante)), this.blind.string = (l ? "" : a.NumberToString(s.roundValue(t.SmallBlind)) + "/") + a.NumberToString(s.roundValue(t.BigBlind))), this._tupleId = e, this.level.string = t.Level, this.stopIcon.active = t.Level == n
        }
        selectTableAttributes(t) {
            for (let e = 0; e < this.tupleAttributes.length; e++) this.tupleAttributes[e].active = e == t
        }
    }).prototype, "stopIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(m.prototype, "level", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(m.prototype, "tupleAttributes", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = e(m.prototype, "blind", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(m.prototype, "ante", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(m.prototype, "basePot", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = m)) || g));
    n._RF.pop()
}
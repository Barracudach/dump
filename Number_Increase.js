import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, c, h, p, b, d, _, f, g, y, m, w, C, I;
    r._RF.push({}, "373ecCHn+1L0oFcedYrmDqQ", "Number_Increase", void 0);
    const {
        ccclass: v,
        property: z
    } = a;
    t("default", (u = z(n), c = z(s), h = z({
        type: s,
        visible: !0,
        min: 0
    }), p = z({
        type: s,
        visible: !0,
        min: 0
    }), b = z(o), d = z({
        type: s,
        visible: !0,
        min: 0
    }), v((g = e((f = class extends l {
        constructor(...t) {
            super(...t), i(this, "label", g, this), i(this, "delay", y, this), i(this, "_start", m, this), i(this, "_end", w, this), i(this, "digits", C, this), i(this, "_speed", I, this), this.startInitCount = this._start, this.countNow = !1
        }
        onLoad() {
            this.startInitCount = this._start
        }
        update(t) {
            1 == this.countNow && (this._start < this._end ? (this._start += this._speed * t, this.label.string = this._start.toFixed(this.digits).toString()) : (this.countNow = !1, this._start, this._end, this.label.string = this._end.toString()))
        }
        numberIncrease() {
            this.label.string = this.startInitCount.toString(), this._start = this.startInitCount, this.scheduleOnce((function() {
                this.countNow = !0
            }), this.delay)
        }
    }).prototype, "label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(f.prototype, "delay", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = e(f.prototype, "_start", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 100
        }
    }), w = e(f.prototype, "_end", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 980
        }
    }), C = e(f.prototype, "digits", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 2
        }
    }), I = e(f.prototype, "_speed", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), _ = f)) || _));
    r._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, h, c, p, b, d, _, y, f, g, m, C, w, I, v;
    r._RF.push({}, "f9770AoubRMjo8F9kU3Saih", "Number_Increase_MB", void 0);
    const {
        ccclass: z,
        property: N,
        menu: F
    } = o;
    t("default", (u = F("Animation/NumberIncrease"), h = N(n), c = N(s), p = N({
        type: s,
        visible: !0,
        min: 0
    }), b = N({
        type: s,
        visible: !0,
        min: 0
    }), d = N(a), _ = N({
        type: s,
        visible: !0,
        min: 0
    }), z(y = u((g = i((f = class extends l {
        constructor(...t) {
            super(...t), e(this, "label", g, this), e(this, "delay", m, this), e(this, "_start", C, this), e(this, "_end", w, this), e(this, "digits", I, this), e(this, "_speed", v, this), this.startInitCount = this._start, this.countNow = !1, this.displayCurreny = ""
        }
        onLoad() {
            this.startInitCount = this._start
        }
        update(t) {
            1 == this.countNow && (this._start < this._end ? (this._start += this._speed * t, this.label.string = this.displayCurreny + this._start.toFixed(this.digits).toString()) : (this.countNow = !1, this.label.string = this.displayCurreny + this._end.toString()))
        }
        numberIncrease(t) {
            this.displayCurreny = t, this.label.string = this.startInitCount.toString(), this._start = this.startInitCount, this._speed = (this._end - this._start) / 500 * 1e3, this.scheduleOnce((function() {
                this.countNow = !0
            }), this.delay)
        }
    }).prototype, "label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(f.prototype, "delay", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), C = i(f.prototype, "_start", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 100
        }
    }), w = i(f.prototype, "_end", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 980
        }
    }), I = i(f.prototype, "digits", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 2
        }
    }), v = i(f.prototype, "_speed", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), y = f)) || y) || y));
    r._RF.pop()
}
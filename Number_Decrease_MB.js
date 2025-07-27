import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, c, h, b, p, _, d, f, g, m, y, C, w, D, v;
    s._RF.push({}, "4a7afsRb6VDsbLHR5E4SflC", "Number_Decrease_MB", void 0);
    const {
        ccclass: z,
        property: N,
        menu: I
    } = o;
    t("default", (u = I("Animation/NumberDecrease"), c = N(r), h = N(n), b = N({
        type: n,
        visible: !0,
        min: 0
    }), p = N({
        type: n,
        visible: !0,
        min: 0
    }), _ = N(a), d = N({
        type: n,
        visible: !0,
        min: 0
    }), z(f = u((m = e((g = class extends l {
        constructor(...t) {
            super(...t), i(this, "label", m, this), i(this, "delay", y, this), i(this, "_start", C, this), i(this, "_end", w, this), i(this, "digits", D, this), i(this, "_speed", v, this), this.startInitCount = this._start, this.countNow = !1
        }
        onLoad() {
            this.startInitCount = this._start
        }
        update(t) {
            1 == this.countNow && (this._start > this._end ? (this._start -= this._speed * t, this._start < this._end && (this._start = this._end), this.label.string = this._start.toFixed(this.digits).toString()) : (this.countNow = !1, this._start, this._end, this.label.string = this._end.toString()))
        }
        numberDecrease() {
            this.unscheduleAllCallbacks(), this.label.string = this.startInitCount.toString(), this._start = this.startInitCount, this.scheduleOnce((function() {
                this.countNow = !0
            }), this.delay)
        }
    }).prototype, "label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(g.prototype, "delay", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), C = e(g.prototype, "_start", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), w = e(g.prototype, "_end", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 5
        }
    }), D = e(g.prototype, "digits", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 2
        }
    }), v = e(g.prototype, "_speed", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), f = g)) || f) || f));
    s._RF.pop()
}
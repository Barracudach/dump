import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, h, c, b, p, d, _, f, g, y, m, C, w, z;
    s._RF.push({}, "491ebah4+BCsYoy58XzH7of", "Number_Decrease", void 0);
    const {
        ccclass: v,
        property: D
    } = o;
    t("default", (u = D(r), h = D(n), c = D({
        type: n,
        visible: !0,
        min: 0
    }), b = D({
        type: n,
        visible: !0,
        min: 0
    }), p = D(a), d = D({
        type: n,
        visible: !0,
        min: 0
    }), v((g = e((f = class extends l {
        constructor(...t) {
            super(...t), i(this, "label", g, this), i(this, "delay", y, this), i(this, "_start", m, this), i(this, "_end", C, this), i(this, "digits", w, this), i(this, "_speed", z, this), this.startInitCount = this._start, this.countNow = !1
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
    }).prototype, "label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(f.prototype, "delay", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = e(f.prototype, "_start", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), C = e(f.prototype, "_end", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 5
        }
    }), w = e(f.prototype, "digits", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 2
        }
    }), z = e(f.prototype, "_speed", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1e3
        }
    }), _ = f)) || _));
    s._RF.pop()
}
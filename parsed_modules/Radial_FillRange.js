import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o, h, c, u, f, p, g, _, R, b, d, S;
    l._RF.push({}, "1148bFyU89EdYeEOtiZuYyb", "Radial_FillRange", void 0);
    const {
        ccclass: y,
        property: F
    } = r;
    t("default", (o = F(s), h = F(n), c = F({
        type: n,
        visible: !0,
        min: -1,
        max: 1
    }), u = F({
        type: n,
        visible: !0,
        min: -1,
        max: 1
    }), f = F({
        type: n,
        visible: !0,
        min: 0
    }), y((_ = i((g = class extends a {
        constructor(...t) {
            super(...t), e(this, "spriteList", _, this), e(this, "delay", R, this), e(this, "_fillStart", b, this), e(this, "ToFillRange", d, this), e(this, "_speed", S, this), this.startInitCount = this._fillStart, this.countNow = !1, this.clockwise = !0
        }
        onLoad() {
            this.startInitCount = this._fillStart
        }
        update(t) {
            if (1 == this.countNow)
                if (1 == this.clockwise)
                    if (this._fillStart > this.ToFillRange) {
                        this._fillStart -= this._speed * t, this._fillStart < this.ToFillRange && (this._fillStart = this.ToFillRange);
                        for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this._fillStart
                    } else {
                        this.countNow = !1, this._fillStart, this.ToFillRange;
                        for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this.ToFillRange
                    }
            else if (this._fillStart < this.ToFillRange) {
                this._fillStart += this._speed * t, this._fillStart > this.ToFillRange && (this._fillStart = this.ToFillRange);
                for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this._fillStart
            } else {
                this.countNow = !1, this._fillStart, this.ToFillRange;
                for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this.ToFillRange
            }
        }
        fillRange_ClockWise() {
            this.clockwise = !0, this.unscheduleAllCallbacks();
            for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this.startInitCount;
            this._fillStart = this.startInitCount, this.scheduleOnce((function() {
                this.countNow = !0
            }), this.delay)
        }
        fillRange_AntiClockWise() {
            this.clockwise = !1, this.unscheduleAllCallbacks();
            for (let t = 0; t < this.spriteList.length; t++) this.spriteList[t].fillRange = this.startInitCount;
            this._fillStart = this.startInitCount, this.scheduleOnce((function() {
                this.countNow = !0
            }), this.delay)
        }
    }).prototype, "spriteList", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), R = i(g.prototype, "delay", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), b = i(g.prototype, "_fillStart", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = i(g.prototype, "ToFillRange", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), S = i(g.prototype, "_speed", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .5
        }
    }), p = g)) || p));
    l._RF.pop()
}
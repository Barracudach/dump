import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o, h, u, c, f, p, g, _, R, d, b, S, F;
    e._RF.push({}, "d92a7GBOkRB/KQu7aQGVjnb", "Radial_FillRange_MB", void 0);
    const {
        ccclass: y,
        property: L,
        menu: w
    } = r;
    t("default", (o = w("Animation/Radial_FillRange"), h = L(s), u = L(n), c = L({
        type: n,
        visible: !0,
        min: -1,
        max: 1
    }), f = L({
        type: n,
        visible: !0,
        min: -1,
        max: 1
    }), p = L({
        type: n,
        visible: !0,
        min: 0
    }), y(g = o((R = i((_ = class extends a {
        constructor(...t) {
            super(...t), l(this, "spriteList", R, this), l(this, "delay", d, this), l(this, "_fillStart", b, this), l(this, "ToFillRange", S, this), l(this, "_speed", F, this), this.startInitCount = this._fillStart, this.countNow = !1, this.clockwise = !0
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
    }).prototype, "spriteList", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), d = i(_.prototype, "delay", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), b = i(_.prototype, "_fillStart", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), S = i(_.prototype, "ToFillRange", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), F = i(_.prototype, "_speed", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .5
        }
    }), g = _)) || g) || g));
    e._RF.pop()
}
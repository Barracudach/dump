import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, a, p, u, c, S, b, h;
    n._RF.push({}, "8d965Jaoc5Cy6LiHRYmIhCt", "PokerFlipsPromoAnimHelper", void 0);
    const {
        ccclass: d,
        property: m
    } = o;
    e("default", (s = m({
        type: l.Skeleton
    }), a = m({
        type: l.Skeleton
    }), p = m(l.Skeleton), d((S = i((c = class extends r {
        constructor(...e) {
            super(...e), t(this, "cowboySpine", S, this), t(this, "bullSpine", b, this), t(this, "dollarsSpine", h, this)
        }
        Cowboy_Step1() {
            this.cowboySpine.setAnimation(0, "Idle_Variant", !1).animationStart = 1.35
        }
        Cowboy_Step2() {
            this.cowboySpine.setMix("Idle_Variant", "Win", .2), this.cowboySpine.setAnimation(0, "Win", !1)
        }
        Cowboy_Step3() {
            this.cowboySpine.setMix("Win", "Idle", .2), this.cowboySpine.setAnimation(0, "Idle", !0)
        }
        Bull_Step1() {
            this.bullSpine.setAnimation(0, "Idle_Variant", !1).animationStart = 1.55
        }
        Bull_Step2() {
            this.bullSpine.setMix("Idle_Variant", "Idle", .2), this.bullSpine.setAnimation(0, "Idle", !0)
        }
        Bull_Step3() {
            this.bullSpine.setMix("Idle", "Win", .2), this.bullSpine.setAnimation(0, "Win", !1)
        }
        Bull_Step4() {
            this.bullSpine.setMix("Win", "Idle", .2), this.bullSpine.setAnimation(0, "Idle", !0)
        }
        DollarsFall() {
            const e = this.dollarsSpine.setAnimation(0, "fast", !1);
            e && (e.animationStart = .3)
        }
    }).prototype, "cowboySpine", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = i(c.prototype, "bullSpine", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = i(c.prototype, "dollarsSpine", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u));
    n._RF.pop()
}
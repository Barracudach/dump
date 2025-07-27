import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var l, s, c, m;
    o._RF.push({}, "dc6d1et/LNGU7qpYPS42XjV", "GameJackPotBaseController", void 0);
    const {
        ccclass: p,
        property: u
    } = a;
    e("default", (l = u(i), p((m = t((c = class extends r {
        constructor(...e) {
            super(...e), n(this, "anim", m, this), this.onAnimationCompleted = null
        }
        playAnim() {
            throw new Error("GameJackPotBaseController :: playAnim must be defined!")
        }
        setOnAnimationCompleted(e) {
            this.onAnimationCompleted = () => {
                e(), this.clearOnAnimationCompletedFunc()
            }, this.anim.on(i.EventType.FINISHED, this.onAnimationCompleted, this)
        }
        clearOnAnimationCompletedFunc() {
            this.anim.off(i.EventType.FINISHED, this.onAnimationCompleted, this), this.onAnimationCompleted = null
        }
    }).prototype, "anim", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = c)) || s));
    o._RF.pop()
}
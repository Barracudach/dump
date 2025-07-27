import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, p, D, h;
    n._RF.push({}, "fcd50Lir0VFVLf02yNy2a17", "JackpotDigit", void 0);
    const {
        ccclass: m,
        property: l
    } = a;
    t("default", (u = l(r), m((h = i((D = class extends o {
        constructor(...t) {
            super(...t), e(this, "jackpotDigitPrefab", h, this), this.currentDigit = null, this.animName_fade_in = "jackpot_digit_fade_in", this.animName_fade_out = "jackpot_digit_fade_out"
        }
        setDigit(t, i) {
            i ? (this.fadeOutDigit(), this.instantiateDigit(), this.currentDigit.getComponent(s).string = t, this.currentDigit.getComponent(c).play(this.animName_fade_in)) : (this.currentDigit || this.instantiateDigit(), this.currentDigit.getComponent(s).string = t)
        }
        getDigit() {
            return this.currentDigit ? this.currentDigit.getComponent(s).string : ""
        }
        fadeOutDigit() {
            if (this.currentDigit) {
                let t = this.currentDigit;
                t.getComponent(c).once(c.EventType.FINISHED, (() => {
                    t.removeFromParent()
                })), t.getComponent(c).play(this.animName_fade_out)
            }
        }
        removeDigit() {
            if (this.currentDigit) {
                let t = this.currentDigit;
                t.getComponent(c).once(c.EventType.FINISHED, (() => {
                    this.node.removeFromParent()
                })), t.getComponent(c).play(this.animName_fade_out)
            } else this.node.removeFromParent()
        }
        instantiateDigit() {
            this.currentDigit = g(this.jackpotDigitPrefab), this.currentDigit.parent = this.node
        }
    }).prototype, "jackpotDigitPrefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = D)) || p));
    n._RF.pop()
}
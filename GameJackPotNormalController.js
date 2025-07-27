import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as o from "./GameJackPotBaseController.js";

function main() {
    var c, s, u, p, g, f;
    a._RF.push({}, "db48bYRub9BO7/eAd6utWx2", "GameJackPotNormalController", void 0);
    const {
        ccclass: b,
        property: d
    } = i;
    t("default", (c = d(r), s = d(r), b((g = e((p = class extends o {
        constructor(...t) {
            super(...t), n(this, "labelContent", g, this), n(this, "labelWinValue", f, this)
        }
        init(t) {
            const e = t.award_player_name,
                n = l.config.getStringData(`UITitle${112+t.hand_level}`),
                a = l.config.getStringData("UIJackpotHitCardPlayer") + "\n" + l.config.getStringData("UIJackpotHitCardType");
            this.labelContent.string = l.StringTools.formatC(a, e, n), this.labelWinValue.string = l.StringTools.serverGoldToShowString(t.award_amount)
        }
        playAnim() {
            this.anim.play("JackpotBigWin")
        }
    }).prototype, "labelContent", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(p.prototype, "labelWinValue", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    a._RF.pop()
}
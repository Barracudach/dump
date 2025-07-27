import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";

function main() {
    var g, f, _, h, d, b, m, y, v, w, x, C;
    a._RF.push({}, "9b3a56ryBdD86TCvi6MLorq", "JackPotHitCardType", void 0);
    const {
        ccclass: S,
        property: T
    } = o;
    t("default", (g = T(r), f = T(r), _ = T(n), h = T(n), d = T(n), S((y = e((m = class extends l {
        constructor(...t) {
            super(...t), i(this, "effect_panel", y, this), i(this, "light_img", v, this), i(this, "amount_text", w, this), i(this, "award_player_text", x, this), i(this, "hand_level_text", C, this)
        }
        onClickSelf(t) {
            this.node.active = !1
        }
        showHitCard() {
            p.MessageCenter.send("hide_bombInfoTips"), this.effect_panel.setScale(s(.1, .1, .1)), c(this.effect_panel).to(.8, {
                scale: s(1, 1, 1)
            }, {
                easing: u.elasticOut
            }).start(), c(this.light_img).to(10, {
                angle: 730
            }).repeatForever().start();
            let t = p.GameDataManager.tJackPot.noticeJackPotAwardInfo,
                e = t.award_player_name,
                i = p.config.getStringData(`UITitle${112+t.hand_level}`);
            this.award_player_text.string = p.StringTools.formatC(p.config.getStringData("UIJackpotHitCardPlayer"), e), this.hand_level_text.string = p.StringTools.formatC(p.config.getStringData("UIJackpotHitCardType"), i), this.amount_text.string = p.StringTools.serverGoldToShowString(t.award_amount)
        }
    }).prototype, "effect_panel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(m.prototype, "light_img", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(m.prototype, "amount_text", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(m.prototype, "award_player_text", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(m.prototype, "hand_level_text", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = m)) || b));
    a._RF.pop()
}
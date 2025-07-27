import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";

function main() {
    var u, c, s, p, m, _, g, d, y, f;
    n._RF.push({}, "c105192u2NIorTOH9B9o03j", "GameJackPotSignItemComponent", void 0);
    const {
        ccclass: h,
        property: b
    } = a;
    t("GameJackPotSignItemComponent", (u = b(i), c = b(i), s = b(i), p = b(i), h((g = e((_ = class extends o {
        constructor(...t) {
            super(...t), r(this, "playerName_text", g, this), r(this, "cardTypeName_text", d, this), r(this, "award_text", y, this), r(this, "day_text", f, this)
        }
        setdata(t) {
            null != t && (l.StringTools.setShrinkString(this.playerName_text.node, t.player_name, !0), this.award_text.string = l.StringTools.numberToString(t.award_amount / 100), this.cardTypeName_text.string = l.config.getStringData(`UITitle${112+t.hand_level}`), this.day_text.string = l.StringTools.formatTime(t.award_time, l.Enum.eTimeType.MM_DD_HH_MM, !1))
        }
    }).prototype, "playerName_text", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(_.prototype, "cardTypeName_text", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(_.prototype, "award_text", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(_.prototype, "day_text", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = _)) || m));
    n._RF.pop()
}
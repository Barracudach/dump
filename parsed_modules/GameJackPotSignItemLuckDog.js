import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as o from "./cc.js";
import * as l from "./CircleSprite.js";
import * as c from "./CircleSprite.js";
import * as s from "./cv.js";
import * as u from "./GameSceneInstance.js";
import * as p from "./GameJackPotSignItemSingle.js";

function main() {
    var m, g, f, _, d, S, b, D;
    i._RF.push({}, "fb787Fsp7ZF0oLP1BqfrkfH", "GameJackPotSignItemLuckDog", void 0);
    const {
        ccclass: k,
        property: h
    } = o;
    t("default", (m = h(n), g = h(r), f = u("GameDataInstance"), k((S = e((d = class extends p {
        constructor(...t) {
            super(...t), a(this, "luckDogAvatarSprite", S, this), a(this, "jackpot_blind_text", b, this), a(this, "gameDataInstance", D, this)
        }
        setdata(t) {
            super.setdata(t), this.day_text.string = s.StringTools.formatTime(t.award_time, s.Enum.eTimeType.MM_DD_HH_MM, !1);
            const {
                avatar: e
            } = t;
            e && c.setCircleSprite(this.luckDogAvatarSprite.node, e, 0, !0, l.IRREGULAR_CIRCLE);
            let a = "";
            a = s.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1);
            let i = 2 * parseFloat(a.split("/")[1]);
            this.gameDataInstance.tRoomData.pkRoomParam.rule_switch_force_straddle && (a = a + "/" + (i >= 1e3 ? s.StringTools.formatC("%sK", (i / 1e3).toString()) : i.toString())), this.jackpot_blind_text.string = a
        }
    }).prototype, "luckDogAvatarSprite", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(d.prototype, "jackpot_blind_text", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(d.prototype, "gameDataInstance", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = d)) || _));
    i._RF.pop()
}
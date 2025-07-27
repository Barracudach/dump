import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cv.js";

function main() {
    var a, o, c, s, l, d, m, _, g, p, u, y;
    i._RF.push({}, "a247cR5Fj5I/oDhch38ELzU", "HumanboyJackpotItem", void 0);
    const {
        ccclass: h,
        property: S
    } = cc._decorator;
    t("HumanboyJackpotItem", (a = S(cc.Sprite), o = S(cc.Label), c = S(cc.Label), s = S(cc.Label), l = S(cc.Label), h((m = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "bg_img", _, this), e(this, "playername_text", g, this), e(this, "day_text", p, this), e(this, "award_text", u, this), e(this, "cardtypename_text", y, this)
        }
        onLoad() {}
        setData(t) {
            this.playername_text.node.setContentSize(cc.size(120, 60)), r.StringTools.setShrinkString(this.playername_text.node, t.name);
            let e = r.StringTools.numberToString(r.StringTools.clientGoldByServer(t.amount));
            this.award_text.string = e, 8 == t.handLevel ? r.StringTools.setShrinkString(this.cardtypename_text.node, r.config.getStringData("Humanboy_game_card_type_four_of_a_kind")) : r.StringTools.setShrinkString(this.cardtypename_text.node, r.config.getStringData(r.StringTools.formatC("M_UITitle%d", 112 + t.handLevel))), this.day_text.string = r.StringTools.formatTime(t.timeStamp, r.Enum.eTimeType.Month_Day), this.cardtypename_text.node.setContentSize(cc.size(204, 60)), this.cardtypename_text.node.opacity = 125, this.cardtypename_text.node.color = cc.color(232, 201, 147), this.day_text.node.opacity = 125, this.day_text.node.color = cc.color(232, 201, 147)
        }
        setFirstData(t) {
            this.bg_img.node.active = !0, this.playername_text.fontSize = 28, this.day_text.fontSize = 28, this.cardtypename_text.fontSize = 28, this.cardtypename_text.node.setContentSize(cc.size(204, 60)), this.playername_text.node.setContentSize(cc.size(120, 60)), r.StringTools.setShrinkString(this.playername_text.node, t.name);
            let e = r.StringTools.numberToString(r.StringTools.clientGoldByServer(t.amount));
            this.award_text.string = e, 8 == t.handLevel ? r.StringTools.setShrinkString(this.cardtypename_text.node, r.config.getStringData("Humanboy_game_card_type_four_of_a_kind")) : r.StringTools.setShrinkString(this.cardtypename_text.node, r.config.getStringData(r.StringTools.formatC("M_UITitle%d", 112 + t.handLevel))), this.day_text.string = r.StringTools.formatTime(t.timeStamp, r.Enum.eTimeType.Month_Day), this.day_text.node.x = 266
        }
        start() {}
    }, _ = n(m.prototype, "bg_img", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = n(m.prototype, "playername_text", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = n(m.prototype, "day_text", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = n(m.prototype, "award_text", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = n(m.prototype, "cardtypename_text", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = m)) || d));
    i._RF.pop()
}
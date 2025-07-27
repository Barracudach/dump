import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as u from "./GameSceneInstance.js";
import * as m from "./ThemeSystem.js";
import * as h from "./ColorSystemType.js";
import * as p from "./ColorSystemTypeOther.js";

function main() {
    var y, g, C, S, d, b, f, T, I, _, D, O, x, B;
    n._RF.push({}, "cec1anoqWZL64L3M5A8YZYF", "CurrentTimeItem", void 0);
    const {
        ccclass: v,
        property: k
    } = a;
    e("CurrentTimeItem", (y = k({
        type: o,
        tooltip: "Nickname"
    }), g = k({
        type: o,
        tooltip: "Buy In"
    }), C = k({
        type: o,
        tooltip: "Win/Lose"
    }), S = k({
        type: o,
        tooltip: "HandCount"
    }), d = k({
        type: i,
        tooltip: "Bg"
    }), b = u("GameDataInstance"), v((I = t((T = class extends s {
        constructor(...e) {
            super(...e), r(this, "yourname", I, this), r(this, "dairu", _, this), r(this, "score", D, this), r(this, "handCount", O, this), r(this, "sprite_color", x, this), r(this, "gameDataInstance", B, this)
        }
        setdata(e, t) {
            const r = c.dataHandler.getUserData().getRemarkData(e.playerid),
                n = null !== r.sRemark && 0 !== r.sRemark.length ? r.sRemark : e.playername,
                o = e.HandCount || 0;
            this.handCount.string = o.toString(), this.dairu.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(e.total_buyin)), c.StringTools.setShrinkString(this.yourname.node, n), e.curr_record > 0 ? this.score.string = "+" + c.StringTools.numberToString(c.StringTools.clientGoldByServer(e.curr_record)) : this.score.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(e.curr_record));
            null === this.gameDataInstance.tRoomData.GetTablePlayer(e.playerid) ? (this.yourname.getComponent(m).setColorScheme(h.Other, p.InsuranceTxtDescSmallBox), this.dairu.getComponent(m).setColorScheme(h.Other, p.InsuranceTxtDescSmallBox), this.score.getComponent(m).setColorScheme(h.Other, p.InsuranceTxtDescSmallBox), this.handCount.getComponent(m).setColorScheme(h.Other, p.InsuranceTxtDescSmallBox), this.node.getComponent(l).opacity = 127) : (this.yourname.getComponent(m).setColorScheme(h.Other, p.WhiteCreamy_100), this.dairu.getComponent(m).setColorScheme(h.Other, p.WhiteCreamy_100), this.score.getComponent(m).setColorScheme(h.Other, p.WhiteCreamy_100), this.handCount.getComponent(m).setColorScheme(h.Other, p.WhiteCreamy_100), this.node.getComponent(l).opacity = 255), this.sprite_color.node.active = t % 2 == 0
        }
    }).prototype, "yourname", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(T.prototype, "dairu", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(T.prototype, "score", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(T.prototype, "handCount", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(T.prototype, "sprite_color", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(T.prototype, "gameDataInstance", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = T)) || f));
    n._RF.pop()
}
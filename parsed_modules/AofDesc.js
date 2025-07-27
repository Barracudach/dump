import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var g, h, f, p, _, b, d, m, S, y, w, D, x, j, z, A, v, T;
    n._RF.push({}, "c252djSzrtGv6SWAOeUM3Qb", "AofDesc", void 0);
    const {
        ccclass: C,
        property: P
    } = u;
    t("default", (g = P(r), h = P(r), f = P(r), p = P(r), _ = P(a), b = P(r), d = P(o), m = P(l), C((w = e((y = class extends s {
        constructor(...t) {
            super(...t), i(this, "aofTitle_text", w, this), i(this, "title", D, this), i(this, "renwu", x, this), i(this, "choujiangNum", j, this), i(this, "curShoushu", z, this), i(this, "curChoujiang", A, this), i(this, "close_btn", v, this), i(this, "desImg", T, this)
        }
        onLoad() {
            this.aofTitle_text.string = c.config.getStringData("Aof_game_lost_title_text"), this.title.string = c.config.getStringData("Aof_game_lost_desc_text"), this.renwu.string = c.config.getStringData("Aof_game_lost_duiju_text"), this.choujiangNum.string = c.config.getStringData("Aof_game_lost_jihui_text")
        }
        start() {
            c.resMgr.setSpriteFrame(this.desImg.node, c.config.getLanguagePath("hall/laba/lost_aof_desc"))
        }
        onCloseBtn() {
            c.AudioMgr.playButtonSound("close.mp3"), this.closePanel()
        }
        closePanel() {
            this.node.active = !1
        }
        updateView() {
            c.StringTools.setRichTextString(this.curShoushu.node, c.StringTools.formatC(c.config.getStringData("Laba_game_dealer_up_count"), c.dataHandler.getUserData().hand_num, c.dataHandler.getUserData().getPlayerHands())), this.curChoujiang.string = c.dataHandler.getUserData().luckdrawslen.toString()
        }
    }).prototype, "aofTitle_text", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(y.prototype, "title", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(y.prototype, "renwu", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(y.prototype, "choujiangNum", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(y.prototype, "curShoushu", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(y.prototype, "curChoujiang", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(y.prototype, "close_btn", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(y.prototype, "desImg", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = y)) || S));
    n._RF.pop()
}
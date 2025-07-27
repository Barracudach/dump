import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as h from "./cb.js";
import * as d from "./CircleSprite.js";
import * as m from "./CircleSprite.js";
import * as _ from "./userData.js";
import * as f from "./HumanboyDataMgr.js";
import * as y from "./VideoCowboyManager.js";
import * as b from "./PokerMasterDataMgr.js";
import * as p from "./GameSceneInstance.js";

function main() {
    var S, x, C, k, w, P, T, H, I, v, D, R, z, L, G, M, E, A, V, B, U, q, N, j;
    n._RF.push({}, "d6676D8v0pAD4qSQsj26yZ6", "HumanboyHonorItem", void 0);
    const {
        ccclass: F,
        property: W
    } = l;
    t("default", (S = W(r), x = W(a), C = W(a), k = W(o), w = W(o), P = W(o), T = W(o), H = W(o), I = W(o), v = W(s), D = W(s), F((L = e((z = class extends u {
        constructor(...t) {
            super(...t), i(this, "head_img", L, this), i(this, "rank_img", G, this), i(this, "gold_img", M, this), i(this, "name_text", E, this), i(this, "money_text", A, this), i(this, "profit_text", V, this), i(this, "rank_text", B, this), i(this, "des_text", U, this), i(this, "day_text", q, this), i(this, "chart_PLIST", N, this), i(this, "game_dznz_PLIST", j, this), this.msg = new _, this._curView = 0
        }
        onEnable() {
            c.MessageCenter.register(c.config.CHANGE_LANGUAGE, this.onChangedLanguage.bind(this), this.node)
        }
        onDisable() {
            c.MessageCenter.unregister(c.config.CHANGE_LANGUAGE, this.node)
        }
        updateSVReuseData(t, e, i) {
            if (e.length <= 0 || e.length - 1 < t) return;
            let n = e[t];
            if (!(n instanceof _)) return;
            this.msg = n, 0 == t ? (this.rank_img.node.active = !0, this.rank_text.node.active = !1, c.resMgr.loadSpriteTextureByPlist(this.chart_PLIST, this.rank_img, "chart_honor_1")) : 1 == t ? (this.rank_img.node.active = !0, this.rank_text.node.active = !1, c.resMgr.loadSpriteTextureByPlist(this.chart_PLIST, this.rank_img, "chart_honor_2")) : 2 == t ? (this.rank_img.node.active = !0, this.rank_text.node.active = !1, c.resMgr.loadSpriteTextureByPlist(this.chart_PLIST, this.rank_img, "chart_honor_3")) : (this.rank_img.node.active = !1, this.rank_text.node.active = !0, this.rank_text.string = c.StringTools.numberToString(t + 1)), this.name_text.string = n.name, this.money_text.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(n.coin));
            let r = parseInt(i.name);
            this.des_text.node.opacity = 153, this.des_text.node.color = new g(g.WHITE), this._curView = r, 1 == r || 3 == r ? (this.des_text.string = c.config.getStringDataCasino("Humanboy_list_frequency_time"), this.profit_text.string = c.StringTools.formatC(c.config.getStringDataCasino("Humanboy_list_frequency"), n.frequency)) : (this.des_text.string = c.config.getStringDataCasino("Humanboy_list_profit"), this.profit_text.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(n.profit))), this.day_text.string = c.StringTools.formatTime(n.updateAt, c.Enum.eTimeType.Year_Month_Day), this.day_text.node.opacity = 153, this.day_text.node.color = g.WHITE, this.head_img.active = !0, this.head_img.destroyAllChildren(), this.head_img.removeAllChildren();
            let a = "";
            this.msg.head.length > 0 && (a = c.dataHandler.getUserData().getImageURL(this.msg.head));
            let o = 0,
                s = "",
                l = 0;
            switch (p.getInstanceGameId(null == this ? void 0 : this.node)) {
                case c.Enum.GameId.CowBoy:
                    o = h.getCowboyRoom().selfPlayer.uid, s = h.getCowboyRoom().selfPlayer.head;
                    break;
                case c.Enum.GameId.HumanBoy:
                    o = f.getHumanboyRoom().tSelfPlayer.uid, s = f.getHumanboyRoom().tSelfPlayer.head, l = f.getHumanboyRoom().tSelfPlayer.plat;
                    break;
                case c.Enum.GameId.VideoCowboy:
                    o = y.getVideoCowboyRoom().selfPlayer.uid, s = y.getVideoCowboyRoom().selfPlayer.head;
                    break;
                case c.Enum.GameId.PokerMaster:
                    o = b.getPokerMasterRoom().tSelfPlayer.uid, s = b.getPokerMasterRoom().tSelfPlayer.head
            }
            this.msg.uid === o ? a = c.dataHandler.getUserData().getImageURL(s) : l = n.plat, d.setCircleSprite(this.head_img, a, l, !1, m.IRREGULAR), this.head_img.active = !1
        }
        onChangedLanguage() {
            1 == this._curView || 3 == this._curView ? this.des_text.string = c.config.getStringDataCasino("Humanboy_list_frequency_time") : this.des_text.string = c.config.getStringDataCasino("Humanboy_list_profit")
        }
    }).prototype, "head_img", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(z.prototype, "rank_img", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(z.prototype, "gold_img", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(z.prototype, "name_text", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(z.prototype, "money_text", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(z.prototype, "profit_text", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(z.prototype, "rank_text", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(z.prototype, "des_text", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(z.prototype, "day_text", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(z.prototype, "chart_PLIST", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(z.prototype, "game_dznz_PLIST", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = z)) || R));
    n._RF.pop()
}
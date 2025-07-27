import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as d from "./cb.js";
import * as _ from "./CowboyRoomData.js";
import * as f from "./CircleSprite.js";
import * as b from "./CircleSprite.js";
import * as y from "./HumanboyDataMgr.js";
import * as p from "./VideoCowboyManager.js";
import * as x from "./PokerMasterDataMgr.js";
import * as C from "./GameSceneInstance.js";
import * as S from "./i18nText.js";

function main() {
    var w, P, I, T, z, R, D, k, L, G, M, v, A, E, H, U, B, j, N, V, O, F, K, q;
    n._RF.push({}, "e089deL0K1MlpbfzAi1zrDg", "cowboyItem", void 0);
    const {
        ccclass: J,
        property: Q
    } = l;
    t("default", (w = Q(o), P = Q(r), I = Q(a), T = Q(a), z = Q(a), R = Q(a), D = Q(a), k = Q(a), L = Q(o), G = Q(o), M = Q(s), J((E = e((A = class extends u {
        constructor(...t) {
            super(...t), i(this, "head_img", E, this), i(this, "rank_img", H, this), i(this, "num_text", U, this), i(this, "name_text", B, this), i(this, "money_text", j, this), i(this, "jushu_text", N, this), i(this, "bet_text", V, this), i(this, "win_text", O, this), i(this, "tz_img", F, this), i(this, "hs_img", K, this), i(this, "playerlist_PLIST", q, this), this.msg = new _, this.index = 0
        }
        start() {}
        onEnable() {
            c.MessageCenter.register(c.config.CHANGE_LANGUAGE, this.onChangedLanguage.bind(this), this.node), this.onChangedLanguage()
        }
        onDisable() {
            c.MessageCenter.unregister(c.config.CHANGE_LANGUAGE, this.node)
        }
        initTexts() {
            const t = [this.tz_img, this.hs_img];
            for (const e of t)
                if (e) {
                    const t = e.getComponentInChildren(S);
                    t && t.setOptionUseEngTextOnly(!0)
                }
        }
        updateSVReuseData(t, e) {
            if (e.length <= 0 || e.length - 1 < t) return;
            let i = e[t];
            this.index = t, this.msg = i, this.num_text.string = c.StringTools.formatC(c.config.getStringDataCasino("Cowboy_fuhao_no_text"), t), t > 8 ? (this.rank_img.node.active = !0, c.resMgr.loadSpriteTextureByPlist(this.playerlist_PLIST, this.rank_img, "fuwen9")) : (this.rank_img.node.active = !0, 0 == t ? (c.resMgr.loadSpriteTextureByPlist(this.playerlist_PLIST, this.rank_img, "playerlist_ssz"), this.num_text.string = c.config.getStringDataCasino("Cowboy_shensuanzi_text")) : c.resMgr.loadSpriteTextureByPlist(this.playerlist_PLIST, this.rank_img, "fuwen")), this.jushu_text.node.getComponent(g).opacity = 127, this.jushu_text.node.getComponent(h).color = m(255, 255, 255, 127), this.jushu_text.node.getComponent(a).string = c.config.getStringDataCasino("Cowboy_last20_text"), this.name_text.string = i.name, this.bet_text.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(i.totalBetAmount)), this.win_text.string = c.StringTools.numberToString(i.winCount), this.money_text.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(this.msg.curCoin)), this.head_img.active = !0, this.head_img.destroyAllChildren(), this.head_img.removeAllChildren();
            let n = "";
            this.msg.head.length > 0 && (n = c.dataHandler.getUserData().getImageURL(this.msg.head));
            let o = 0,
                r = "",
                s = 0;
            switch (C.getInstanceGameId(null == this ? void 0 : this.node)) {
                case c.Enum.GameId.CowBoy:
                    o = d.getCowboyRoom().selfPlayer.uid, r = d.getCowboyRoom().selfPlayer.head;
                    break;
                case c.Enum.GameId.HumanBoy:
                    o = y.getHumanboyRoom().tSelfPlayer.uid, r = y.getHumanboyRoom().tSelfPlayer.head, s = y.getHumanboyRoom().tSelfPlayer.plat;
                    break;
                case c.Enum.GameId.VideoCowboy:
                    o = p.getVideoCowboyRoom().selfPlayer.uid, r = p.getVideoCowboyRoom().selfPlayer.head;
                    break;
                case c.Enum.GameId.PokerMaster:
                    o = x.getPokerMasterRoom().tSelfPlayer.uid, r = x.getPokerMasterRoom().tSelfPlayer.head
            }
            if (this.msg.uid === o) n = c.dataHandler.getUserData().getImageURL(r);
            else {
                let t = this.msg;
                null !== t.plat && void 0 !== t.plat && (s = c.Number(t.plat))
            }
            b.setCircleSprite(this.head_img, n, s, !1, f.IRREGULAR), this.rank_img.node.setSiblingIndex(-1), this.num_text.node.setSiblingIndex(-1), this.head_img.active = !1
        }
        onChangedLanguage() {
            this.jushu_text.node.getComponent(a).string = c.config.getStringDataCasino("Cowboy_last20_text"), 0 === this.index ? this.num_text.string = c.config.getStringDataCasino("Cowboy_shensuanzi_text") : this.num_text.string = c.StringTools.formatC(c.config.getStringDataCasino("Cowboy_fuhao_no_text"), this.index)
        }
    }).prototype, "head_img", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(A.prototype, "rank_img", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(A.prototype, "num_text", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(A.prototype, "name_text", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(A.prototype, "money_text", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(A.prototype, "jushu_text", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(A.prototype, "bet_text", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(A.prototype, "win_text", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(A.prototype, "tz_img", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(A.prototype, "hs_img", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(A.prototype, "playerlist_PLIST", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = A)) || v));
    n._RF.pop()
}
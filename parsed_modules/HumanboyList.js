import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./ScrollViewReuse.js";
import * as y from "./cv.js";
import * as C from "./cb.js";
import * as w from "./HumanboyDataMgr.js";
import * as S from "./CircleSprite.js";
import * as k from "./CircleSprite.js";
import * as x from "./VideoCowboyManager.js";
import * as H from "./PokerMasterDataMgr.js";
import * as v from "./GameSceneInstance.js";
import * as D from "./MiniGameSoundManager.js";
import * as I from "./i18nText.js";
import * as P from "./TweenControl.js";

function main() {
    var R, z, T, U, V, L, G, E, M, B, q, N, A, F, O, W, Y, j, J, K, Z, Q, X, $, tt, et, nt, it, at, ot, rt, st, lt, gt, _t, mt, ht, dt, ut, ct, pt, bt, ft, yt, Ct, wt, St, kt;
    i._RF.push({}, "198a7ee5qJKDJZvH1DjrYSm", "HumanboyList", void 0);
    const {
        ccclass: xt,
        property: Ht
    } = h;
    t("HumanboyList", (R = Ht(a), z = Ht(a), T = Ht(o), U = Ht(a), V = Ht(o), L = Ht(r), G = Ht(r), E = Ht(s), M = Ht(l), B = Ht(l), q = Ht(l), N = Ht(s), A = Ht(s), F = Ht(s), O = Ht(s), W = Ht(s), Y = Ht(g), j = Ht(g), J = Ht(g), K = Ht(g), Z = Ht(s), Q = Ht(_), X = Ht(m), xt((et = e((tt = class extends d {
        constructor(...t) {
            super(...t), n(this, "online_desc", et, this), n(this, "online_num", nt, this), n(this, "item_prefab", it, this), n(this, "title_txt", at, this), n(this, "item_prefab2", ot, this), n(this, "scrollView", rt, this), n(this, "scrollView2", st, this), n(this, "chartbg", lt, this), n(this, "arrow_img", gt, this), n(this, "title_bg", _t, this), n(this, "img2", mt, this), n(this, "panel1", ht, this), n(this, "panel2", dt, this), n(this, "panel3", ut, this), n(this, "layout0", ct, this), n(this, "layout1", pt, this), n(this, "arrow_btn", bt, this), n(this, "page1_btn", ft, this), n(this, "page2_btn", yt, this), n(this, "close_btn", Ct, this), n(this, "head_img", wt, this), this.curIdx = 0, this.curTag = 1, this._name_list = [], this._gou_list = [], this._btn_list = [], this.once = !0, n(this, "game_dznz_PLIST", St, this), n(this, "titleDisabledColor", kt, this), this._page1_btn_text = null, this._page2_btn_text = null, this._rank_title_change = null, this._rank_num_text = null, this._rank_des_text = null
        }
        onLoad() {
            var t, e, n, i;
            if (v.getInstanceGameId(null == this ? void 0 : this.node) == y.Enum.GameId.CowBoy) {
                let t = u("panel1/Image_2", this.layout1);
                t.getComponent(c).setContentSize(t.getComponent(c).width, 348);
                let e = u("panel2", this.layout1);
                e.getComponent(c).setContentSize(e.getComponent(c).width, 346);
                let n = u("cell1", e),
                    i = u("cell2", e),
                    a = u("cell3", e),
                    o = u("cell4", e),
                    r = u("cell5", e);
                n.active = !1, i.setPosition(i.position.x, -186), a.active = !1, o.setPosition(o.position.x, -266), r.setPosition(r.position.x, -346)
            }
            this.panel2.active = !1, null == (t = this.scrollView2) || null == (t = t.node) || t.setSiblingIndex(1), null == (e = this.panel3) || e.setSiblingIndex(2), null == (n = this.panel1) || n.setSiblingIndex(3), null == (i = this.panel2) || i.setSiblingIndex(4), this.online_desc.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_online");
            let o = u("Image_1", this.panel1).getChildByName("title_change");
            o.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_change_rank"), this._rank_title_change = o, this._page1_btn_text = this.page1_btn.getComponentInChildren(a), this._page2_btn_text = this.page2_btn.getComponentInChildren(a), this._rank_des_text = this.panel3.getChildByName("des_text");
            for (let t = 0; t < 6; t++) {
                let e = u("cell" + t, this.panel2),
                    n = u("name_txt", e);
                n.getComponent(p).color = new m(255, 255, 255);
                let i = u("gou_img", e);
                i.active = !1;
                let a = u("Button_" + t, e);
                a.name = t.toString(), a.on("click", (() => {
                    D.playButtonSound("tab"), this.displayCell(parseInt(a.name)), -1 == this.arrow_img.node.scale.y ? (this.arrow_img.node.scale = new b(this.arrow_img.node.scale.x, 1, this.arrow_img.node.scale.z), this.img2.node.active = !1, this.panel2.active = !1) : (this.arrow_img.node.scale = new b(this.arrow_img.node.scale.x, -1, this.arrow_img.node.scale.z), this.img2.node.active = !0, this.panel2.active = !0)
                })), this._name_list.push(n), this._gou_list.push(i), this._btn_list.push(a)
            }
            this.page1_btn.node.on("click", (() => {
                D.playButtonSound("tab"), this.page1_btn.enabled = !1, this.page2_btn.enabled = !0, this.layout0.active = !0, this.layout1.active = !1, this.panel1.active = !1, this.panel2.active = !1, this.title_txt.node.active = !1, this.title_bg.node.scale = new b(1, this.title_bg.node.scale.y, this.title_bg.node.scale.z), this._page1_btn_text && (this._page1_btn_text.node.getComponent(p).color = new m(m.WHITE)), this._page2_btn_text && (this._page2_btn_text.node.getComponent(p).color = this.titleDisabledColor)
            }), this), this.page2_btn.node.on("click", (() => {
                D.playButtonSound("tab"), this.page1_btn.enabled = !0, this.page2_btn.enabled = !1, this.layout0.active = !1, this.layout1.active = !0, this.panel1.active = !0, this.img2.node.active = !1, this.title_txt.node.active = !0, this.arrow_img.node.scale = new b(this.arrow_img.node.scale.x, 1, this.arrow_img.node.scale.z), this.title_bg.node.scale = new b(-1, this.title_bg.node.scale.y, this.title_bg.node.scale.z), this._page1_btn_text && (this._page1_btn_text.node.getComponent(p).color = this.titleDisabledColor), this._page2_btn_text && (this._page2_btn_text.node.getComponent(p).color = new m(m.WHITE));
                let t = this.scrollView2.getComponent(f);
                this.once && (this.once = !1, t.bindPrefab(this.item_prefab2, "HumanboyHonorItem", []), t.generateItemPool(), t.bindScrollEventTarget(this)), t.name = this.curIdx.toString(), t.reloadView(y.dataHandler.getUserData().m_rankInfos)
            }), this), this.arrow_btn.node.on("click", (() => {
                D.playButtonSound("tab"), -1 == this.arrow_img.node.scale.y ? (this.arrow_img.node.scale = new b(this.arrow_img.node.scale.x, 1, this.arrow_img.node.scale.z), this.img2.node.active = !1, this.panel2.active = !1) : (this.arrow_img.node.scale = new b(this.arrow_img.node.scale.x, -1, this.arrow_img.node.scale.z), this.img2.node.active = !0, this.panel2.active = !0)
            }), this), this.layout0.active = !0, this.layout1.active = !1, 0 == w.getHumanboyRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0), this.close_btn.node.on("click", (() => {
                D.playButtonSound("close"), this.node.active = !1
            }), this), this._name_list[0].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_0"), this._name_list[1].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_1"), this._name_list[2].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_2"), this._name_list[3].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_3"), this._name_list[4].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_4"), this._name_list[5].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_5"), this.addObserver()
        }
        addObserver() {
            y.MessageCenter.register("update_rank_info", this.onDisplayRank.bind(this), this.node), y.MessageCenter.register("finish_req_data", this.onFinishReqData.bind(this), this.node), y.MessageCenter.register(y.config.CHANGE_LANGUAGE, this.onChangedLanguage.bind(this), this.node)
        }
        onDestroy() {
            y.MessageCenter.unregister("update_rank_info", this.node), y.MessageCenter.unregister("finish_req_data", this.node), y.MessageCenter.unregister(y.config.CHANGE_LANGUAGE, this.node)
        }
        initTexts() {
            const t = [this._page1_btn_text, this._page2_btn_text];
            for (const e of t)
                if (e) {
                    const t = e.node.getComponent(I);
                    t && t.setOptionUseEngTextOnly(!0)
                }
        }
        onDisplayRank() {
            if (this.layout1.active) {
                let t = this.scrollView2.getComponent(f);
                t.name = this.curIdx.toString(), t.reloadView(y.dataHandler.getUserData().m_rankInfos)
            }
            if (0 != y.dataHandler.getUserData().m_rank.uid) this.showSelf();
            else {
                u("name_text", this.panel3).getComponent(a).string = y.dataHandler.getUserData().nick_name;
                u("day_text", this.panel3);
                let t = u("des_text", this.panel3),
                    e = u("profit_text", this.panel3);
                u("rank_num_text", this.panel3).getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_myrank"), this.head_img.destroyAllChildren(), this.head_img.removeAllChildren();
                let n = 0;
                switch (v.getInstanceGameId(null == this ? void 0 : this.node)) {
                    case y.Enum.GameId.CowBoy:
                        n = C.getCowboyRoom().selfPlayer.uid, C.getCowboyRoom().selfPlayer.head;
                        break;
                    case y.Enum.GameId.HumanBoy:
                        n = w.getHumanboyRoom().tSelfPlayer.uid, w.getHumanboyRoom().tSelfPlayer.head;
                        break;
                    case y.Enum.GameId.VideoCowboy:
                        n = x.getVideoCowboyRoom().selfPlayer.uid, x.getVideoCowboyRoom().selfPlayer.head;
                        break;
                    case y.Enum.GameId.PokerMaster:
                        n = H.getPokerMasterRoom().tSelfPlayer.uid, H.getPokerMasterRoom().tSelfPlayer.head
                }
                y.dataHandler.getUserData().m_rank.head.length > 0 && y.dataHandler.getUserData().getImageURL(y.dataHandler.getUserData().m_rank.head), y.dataHandler.getUserData().m_rank.uid == n ? (this.head_img.getComponent(l).spriteFrame = C.getTextureByName("game_dznz_PLIST", "self_head_default_2"), y.dataHandler.getUserData().getImageURL(y.dataHandler.getUserData().m_rank.head)) : this.head_img.getComponent(l).spriteFrame = C.getTextureByName("game_dznz_PLIST", "other_head_default"), 1 == this.curIdx || 3 == this.curIdx ? (t.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_frequency_time"), e.getComponent(a).string = y.StringTools.formatC(y.config.getStringDataCasino("Humanboy_list_frequency"), y.dataHandler.getUserData().m_rank.frequency)) : (t.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_profit"), e.getComponent(a).string = y.StringTools.numberToString(y.StringTools.clientGoldByServer(y.dataHandler.getUserData().m_rank.profit)))
            }
        }
        onFinishReqData() {
            this.curIdx >= 0 && this.curIdx < 6 && (1 == this.curTag ? y.worldNet.RequestRank(300001 + this.curIdx) : 0 == this.curTag ? y.worldNet.RequestRank(100001 + this.curIdx) : 2 == this.curTag ? y.worldNet.RequestRank(500001 + this.curIdx) : 3 == this.curTag && y.worldNet.RequestRank(700001 + this.curIdx))
        }
        showSelf() {
            let t = u("rank_num_text", this.panel3);
            if (t.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_myrank"), this._rank_num_text = t, -1 == y.dataHandler.getUserData().m_rank.rank) u("selfrank_text", this.panel3).getComponent(a).string = "1000+", u("selfrank_text", this.panel3).getComponent(a).fontSize = 42;
            else {
                let t = 1,
                    e = y.dataHandler.getUserData().m_rank.rank;
                for (; e >= 10;) t += 1, e /= 10;
                1 == t ? u("selfrank_text", this.panel3).getComponent(a).fontSize = 56 : 2 == t ? u("selfrank_text", this.panel3).getComponent(a).fontSize = 48 : 3 == t ? u("selfrank_text", this.panel3).getComponent(a).fontSize = 42 : 4 == t && (u("selfrank_text", this.panel3).getComponent(a).fontSize = 36), u("selfrank_text", this.panel3).getComponent(a).string = y.dataHandler.getUserData().m_rank.rank.toString()
            }
            1 == this.curIdx || 3 == this.curIdx ? (u("des_text", this.panel3).getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_frequency_time"), u("profit_text", this.panel3).getComponent(a).string = y.StringTools.formatC(y.config.getStringDataCasino("Humanboy_list_frequency"), y.dataHandler.getUserData().m_rank.frequency)) : (u("des_text", this.panel3).getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_profit"), u("profit_text", this.panel3).getComponent(a).string = y.StringTools.numberToString(y.StringTools.clientGoldByServer(y.dataHandler.getUserData().m_rank.profit))), u("name_text", this.panel3).getComponent(a).string = y.dataHandler.getUserData().m_rank.name, u("money_text", this.panel3).getComponent(a).string = y.StringTools.numberToString(y.StringTools.clientGoldByServer(y.dataHandler.getUserData().m_rank.coin)), 0 == y.dataHandler.getUserData().m_rank.updateAt ? u("day_text", this.panel3).active = !1 : (u("day_text", this.panel3).active = !0, u("day_text", this.panel3).getComponent(a).string = y.StringTools.formatTime(y.dataHandler.getUserData().m_rank.updateAt, y.Enum.eTimeType.Year_Month_Day)), this.head_img.active = !0, this.head_img.destroyAllChildren(), this.head_img.removeAllChildren();
            let e = "";
            y.dataHandler.getUserData().m_rank.head.length > 0 && (e = y.dataHandler.getUserData().getImageURL(y.dataHandler.getUserData().m_rank.head));
            let n = 0,
                i = "",
                o = 0;
            switch (v.getInstanceGameId(null == this ? void 0 : this.node)) {
                case y.Enum.GameId.CowBoy:
                    n = C.getCowboyRoom().selfPlayer.uid, i = C.getCowboyRoom().selfPlayer.head;
                    break;
                case y.Enum.GameId.HumanBoy:
                    n = w.getHumanboyRoom().tSelfPlayer.uid, i = w.getHumanboyRoom().tSelfPlayer.head, o = w.getHumanboyRoom().tSelfPlayer.plat;
                    break;
                case y.Enum.GameId.VideoCowboy:
                    n = x.getVideoCowboyRoom().selfPlayer.uid, i = x.getVideoCowboyRoom().selfPlayer.head;
                    break;
                case y.Enum.GameId.PokerMaster:
                    n = H.getPokerMasterRoom().tSelfPlayer.uid, i = H.getPokerMasterRoom().tSelfPlayer.head
            }
            y.dataHandler.getUserData().m_rank.uid === n ? e = y.dataHandler.getUserData().getImageURL(i) : o = y.dataHandler.getUserData().m_rank.plat, S.setCircleSprite(this.head_img, e, o, !1, k.IRREGULAR), this.head_img.active = !1
        }
        start() {
            C.addPlist("game_dznz_PLIST", this.game_dznz_PLIST)
        }
        onBtnClose() {
            this.node.active = !1
        }
        displayCell(t) {
            t >= 0 ? this.curIdx = t : (P.flipY(this.arrow_img.node, !1), u("Image_2", this.panel1).active = !1, this.panel2.active = !1);
            for (let t = 0; t < 6; t++) {
                let e = u("cell" + t, this.panel2);
                (v.getInstanceGameId(null == this ? void 0 : this.node) != y.Enum.GameId.CowBoy || 1 != t && 3 != t) && (e.active = !0, u("name_txt", e).getComponent(a).node.getComponent(p).color = new m(255, 255, 255), u("gou_img", e).active = !1)
            }
            this.title_txt.string = y.config.getStringDataCasino(y.StringTools.formatC("Humanboy_list_rank_%d", this.curIdx)), this._name_list[this.curIdx].getComponent(p).color = new m(237, 211, 119), this._gou_list[this.curIdx].active = !0, this.onFinishReqData()
        }
        setCowboyData() {
            this.curTag = 0, 0 == C.getCowboyRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0, this.online_num.string = y.StringTools.formatC("%d", C.getCowboyRoom().dzplayerNum));
            let t = this.scrollView.getComponent(f);
            t.bindPrefab(this.item_prefab, "cowboyItem", []), t.generateItemPool(), t.bindScrollEventTarget(this), t.reloadView(C.getCowboyRoom().gamePlayerList)
        }
        setHumanboyData() {
            this.curTag = 1, 0 == w.getHumanboyRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0, this.online_num.string = y.StringTools.formatC("%d", w.getHumanboyRoom().brdzplayerNum));
            let t = this.scrollView.getComponent(f);
            t.bindPrefab(this.item_prefab, "cowboyItem", []), t.generateItemPool(), t.bindScrollEventTarget(this), t.reloadView(w.getHumanboyRoom().gamePlayerList)
        }
        setVideoCowboyData() {
            this.curTag = 2, 0 == x.getVideoCowboyRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0, this.online_num.string = y.StringTools.formatC("%d", x.getVideoCowboyRoom().dzplayerNum));
            let t = this.scrollView.getComponent(f);
            t.bindPrefab(this.item_prefab, "cowboyItem", []), t.generateItemPool(), t.bindScrollEventTarget(this), t.reloadView(x.getVideoCowboyRoom().gamePlayerList)
        }
        setPokerMasterData() {
            this.curTag = 3, 0 == H.getPokerMasterRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0, this.online_num.string = y.StringTools.formatC("%d", H.getPokerMasterRoom().brdzplayerNum));
            let t = this.scrollView.getComponent(f);
            t.bindPrefab(this.item_prefab, "cowboyItem", []), t.generateItemPool(), t.bindScrollEventTarget(this), t.reloadView(H.getPokerMasterRoom().gamePlayerList)
        }
        onChangedLanguage() {
            this.online_desc.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_online"), this.title_txt.string = y.config.getStringDataCasino(y.StringTools.formatC("Humanboy_list_rank_%d", this.curIdx)), this._rank_title_change.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_change_rank"), this._rank_num_text && (this._rank_num_text.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_myrank")), this._name_list[0].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_0"), this._name_list[1].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_1"), this._name_list[2].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_2"), this._name_list[3].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_3"), this._name_list[4].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_4"), this._name_list[5].getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_rank_5"), 1 == this.curIdx || 3 == this.curIdx ? this._rank_des_text.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_frequency_time") : this._rank_des_text.getComponent(a).string = y.config.getStringDataCasino("Humanboy_list_profit")
        }
    }).prototype, "online_desc", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(tt.prototype, "online_num", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(tt.prototype, "item_prefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(tt.prototype, "title_txt", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(tt.prototype, "item_prefab2", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(tt.prototype, "scrollView", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(tt.prototype, "scrollView2", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(tt.prototype, "chartbg", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(tt.prototype, "arrow_img", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(tt.prototype, "title_bg", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(tt.prototype, "img2", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(tt.prototype, "panel1", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(tt.prototype, "panel2", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(tt.prototype, "panel3", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(tt.prototype, "layout0", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(tt.prototype, "layout1", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(tt.prototype, "arrow_btn", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(tt.prototype, "page1_btn", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(tt.prototype, "page2_btn", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(tt.prototype, "close_btn", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(tt.prototype, "head_img", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(tt.prototype, "game_dznz_PLIST", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(tt.prototype, "titleDisabledColor", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new m(m.WHITE)
        }
    }), $ = tt)) || $));
    i._RF.pop()
}
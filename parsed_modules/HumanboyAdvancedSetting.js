import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cowboy.mjs_cjs=&original=.js";
import * as g from "./video_cowboy.mjs_cjs=&original=.js";
import * as C from "./humanboy.mjs_cjs=&original=.js";
import * as p from "./pokermaster.mjs_cjs=&original=.js";
import * as b from "./cv.js";
import * as B from "./cb.js";
import * as v from "./HumanboyDataMgr.js";
import * as y from "./HumanboyDialog.js";
import * as A from "./HumanboyBetCoin.js";
import * as S from "./VideoCowboyManager.js";
import * as k from "./PokerMasterDataMgr.js";
import * as w from "./GameSceneInstance.js";
import * as f from "./MiniGameDialog.js";
import * as O from "./MiniGameAdvancedAuto.js";
import * as N from "./ConcreteAdvancedAuto.js";
import * as L from "./cowboyScene.js";
import * as R from "./ConcreteMiniGameDialog.js";
import * as G from "./MiniGameSoundManager.js";
import * as x from "./i18nText.js";

function main() {
    var I, E, M, D, H, P, T, U, V, j, z, q, Z, W, F, Y, J, K;
    n._RF.push({}, "470bf0z+OFP7antW6wJBVT3", "HumanboyAdvancedSetting", void 0);
    class Q {
        constructor() {
            this.index = 0, this.llAmountLevel = 0, this.nodeRoot = null, this.coin = null, this.checkBox = null
        }
    }
    const {
        ccclass: X,
        property: $
    } = c;
    t("HumanboyAdvancedSetting", (I = $(i), E = $(a), M = $(s), D = $(s), H = $(s), P = $(l), T = $(l), U = $(i), X((z = e((j = class extends d {
        constructor(...t) {
            super(...t), o(this, "prefab_dialog", z, this), o(this, "imgBgRoot", q, this), o(this, "btn_close", Z, this), o(this, "btn_clean", W, this), o(this, "btn_ensure", F, this), o(this, "opt_setting_normal", Y, this), o(this, "opt_setting_advance", J, this), o(this, "MiniGameAddAdvancedAuto_prefab", K, this), this._maxSelectedCoinOptNode = 5, this._vCoinOptNode = [], this._vSelectedCoinOptNode = [], this._clickbyprogram = !1, this.advanceAutoAddBet = null
        }
        show() {
            this.node.active = !0, this._updateView()
        }
        hide() {
            this.node.active = !1
        }
        onLoad() {
            this._initAtlasList(), this._initUI()
        }
        start() {}
        onEnable() {
            _.MessageCenter.register(_.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        onDisable() {
            _.MessageCenter.unregister(_.config.CHANGE_LANGUAGE, this.node)
        }
        _initAtlasList() {}
        _initLanguageUI() {
            var t;
            const e = null == (t = this.imgBgRoot.node.getChildByName("title")) ? void 0 : t.getComponentInChildren(N);
            e && e.setOptionUseEngTextOnly(!0);
            const o = this.btn_clean.node.getComponentInChildren(N);
            o && o.setOptionUseEngTextOnly(!0);
            const n = this.btn_ensure.node.getComponentInChildren(N);
            n && n.setOptionUseEngTextOnly(!0)
        }
        _initUI() {
            this.btn_close.node.on("click", (t => {
                O.playButtonSound("close"), this.hide()
            }), this), this.btn_clean.node.on("click", (t => {
                O.playButtonSound("button_click"), this._clearAllSelected()
            }), this), this.btn_ensure.node.on("click", this._onClickBtnEnsure, this), this.opt_setting_normal.isChecked = !0;
            let t = this.imgBgRoot.node.getChildByName("panel_opts"),
                e = t.children.length;
            for (let o = 0; o < e; ++o) {
                let e = new Q;
                this._vCoinOptNode.push(e), e.index = o, e.nodeRoot = t.getChildByName(_.StringTools.formatC("node_%d", o)), e.coin = e.nodeRoot.getChildByName("coin").getComponent(b), e.checkBox = e.nodeRoot.getChildByName("checkBox").getComponent(l), e.checkBox.isChecked = !1, e.checkBox.node.on("toggle", (t => {
                    this._clickbyprogram || O.playButtonSound("button_click"), this._clickbyprogram = !1, this._makeSelectedByIndex(e.index)
                }), this)
            }
            this.opt_setting_normal.node.on("toggle", (t => {
                O.playButtonSound("button_click")
            }), this), this.opt_setting_advance.node.on("toggle", (t => {
                O.playButtonSound("button_click")
            }), this)
        }
        _updateView() {
            this._updateStaticText(), this._updateAllOptBtn()
        }
        _onClickBtnEnsure(t) {
            O.playButtonSound("button_click");
            let e = y.getInstanceGameId(null == this ? void 0 : this.node);
            const {
                iUsedAutoBetCount: o,
                iSelectAutoBetCount: n,
                reachLimitBet: i
            } = this._getGameAutoBetData(e);
            let a = () => {
                let t = [];
                for (let e = 0; e < this._vSelectedCoinOptNode.length; ++e) t.push(_.StringTools.serverGoldByClient(this._vSelectedCoinOptNode[e].llAmountLevel));
                switch (e) {
                    case _.Enum.GameId.CowBoy: {
                        let e = this.opt_setting_normal.isChecked ? x.cowboy_proto.AutoBetLevel.Level_Normal : x.cowboy_proto.AutoBetLevel.Level_Advance;
                        _.cowboyNet.reqSetGameOption(t, e)
                    }
                    break;
                    case _.Enum.GameId.HumanBoy: {
                        let e = this.opt_setting_normal.isChecked ? G.humanboy_proto.AutoBetLevel.Level_Normal : G.humanboy_proto.AutoBetLevel.Level_Advance;
                        _.humanboyNet.reqSetGameOption(t, e)
                    }
                    break;
                    case _.Enum.GameId.VideoCowboy: {
                        let e = this.opt_setting_normal.isChecked ? R.video_cowboy_proto.AutoBetLevel.Level_Normal : R.video_cowboy_proto.AutoBetLevel.Level_Advance;
                        _.videoCowboyNet.reqSetGameOption(t, e)
                    }
                    break;
                    case _.Enum.GameId.PokerMaster: {
                        let e = this.opt_setting_normal.isChecked ? L.pokermaster_proto.AutoBetLevel.Level_Normal : L.pokermaster_proto.AutoBetLevel.Level_Advance;
                        _.pokerMasterNet.reqSetGameOption(t, e)
                    }
                }
                this.hide()
            };
            if (this.opt_setting_normal.isChecked && n > 0) {
                const t = r(this.prefab_dialog),
                    e = t.getComponent(A);
                this.node.addChild(t), t.setSiblingIndex(w.COWBOY_LOCAL_ZORDER_TOAST);
                const s = t.getComponent(p),
                    l = _.StringTools.formatC(_.config.getStringDataCasino("Cowboy_auto_bet_switch_tips"), n - o, n),
                    c = _.config.getStringDataCasino("CowBoy_btn_desc_switch_auto_bet"),
                    d = _.config.getStringDataCasino("CowBoy_btn_desc_resume_auto_bet");
                let u = y.getInstanceGameId(null == this ? void 0 : this.node);
                const h = t => {
                        switch (a(), u) {
                            case _.Enum.GameId.CowBoy:
                                _.cowboyNet.ReqCancelAdvanceAutoBet();
                                break;
                            case _.Enum.GameId.HumanBoy:
                                _.humanboyNet.reqCancelAdvanceAutoBet();
                                break;
                            case _.Enum.GameId.VideoCowboy:
                                _.videoCowboyNet.ReqCancelAdvanceAutoBet();
                                break;
                            case _.Enum.GameId.PokerMaster:
                                _.pokerMasterNet.reqCancelAdvanceAutoBet()
                        }
                        this.hide()
                    },
                    m = t => {
                        null == e || e.close(), this.hide()
                    },
                    b = _.config.getStringDataCasino("MiniGame_AddAutoBet_Text"),
                    S = t => {
                        this._showAutoAddBetList(t)
                    };
                let k = "",
                    O = "",
                    N = "",
                    L = "",
                    R = y.getInstanceGameId(null == this ? void 0 : this.node);
                switch (R) {
                    case _.Enum.GameId.CowBoy:
                    case _.Enum.GameId.PokerMaster:
                        k = "Cowboy_auto_bet_switch_tips", O = "CowBoy_btn_desc_switch_auto_bet", N = "CowBoy_btn_desc_resume_auto_bet", L = "MiniGame_AddAutoBet_Text"
                }
                const G = {
                        title: "Notice_Layer_notice_panel_message_button",
                        textContent: k,
                        leftBtn: O,
                        rightBtn: N,
                        centerBtn: L,
                        gameID: R,
                        contentArgs: () => {
                            const {
                                iSelectAutoBetCount: t,
                                iUsedAutoBetCount: e
                            } = this._getGameAutoBetData(R);
                            return [t - e, t]
                        }
                    },
                    x = f.onChangeLanguageAutoBetPopup(s, e, G),
                    I = t => {
                        let o = 0,
                            n = 0,
                            i = !1;
                        switch (y.getInstanceGameId(null == this ? void 0 : this.node)) {
                            case _.Enum.GameId.CowBoy:
                                o = g.getCowboyRoom().iUsedAutoBetCount, n = g.getCowboyRoom().iSelectAutoBetCount, i = g.getCowboyRoom().reachLimitBet;
                                break;
                            case _.Enum.GameId.HumanBoy:
                                o = C.getHumanboyRoom().iUsedAutoBetCount, n = C.getHumanboyRoom().iSelectAutoBetCount;
                                break;
                            case _.Enum.GameId.VideoCowboy:
                                o = B.getVideoCowboyRoom().iUsedAutoBetCount, n = B.getVideoCowboyRoom().iSelectAutoBetCount, i = B.getVideoCowboyRoom().reachLimitBet;
                                break;
                            case _.Enum.GameId.PokerMaster:
                                o = v.getPokerMasterRoom().iUsedAutoBetCount, n = v.getPokerMasterRoom().iSelectAutoBetCount, i = v.getPokerMasterRoom().reachLimitBet
                        }
                        s && (s.txt_content.string = _.StringTools.formatC(_.config.getStringDataCasino("Cowboy_auto_bet_switch_tips"), n - o, n)), i && (null == e || e.blockCenterButton())
                    },
                    E = {
                        miniDialog: e,
                        stringContent: l,
                        stringLeftBtn: c,
                        stringRightBtn: d,
                        cbLeftBtn: h,
                        cbRightBtn: m,
                        isReachedMax: i,
                        legacyDialog: s,
                        isShowBtnCenter: !0,
                        stringCenterButton: b,
                        cbCenterBtn: S,
                        onUpdateContent: I,
                        onChangeLanguage: x
                    };
                f.showDialog(E)
            } else a()
        }
        _getGameAutoBetData(t) {
            let e = 0,
                o = 0,
                n = !1;
            switch (t) {
                case _.Enum.GameId.CowBoy:
                    e = g.getCowboyRoom().iUsedAutoBetCount, o = g.getCowboyRoom().iSelectAutoBetCount, n = g.getCowboyRoom().reachLimitBet;
                    break;
                case _.Enum.GameId.HumanBoy:
                    e = C.getHumanboyRoom().iUsedAutoBetCount, o = C.getHumanboyRoom().iSelectAutoBetCount;
                    break;
                case _.Enum.GameId.VideoCowboy:
                    e = B.getVideoCowboyRoom().iUsedAutoBetCount, o = B.getVideoCowboyRoom().iSelectAutoBetCount, n = B.getVideoCowboyRoom().reachLimitBet;
                    break;
                case _.Enum.GameId.PokerMaster:
                    e = v.getPokerMasterRoom().iUsedAutoBetCount, o = v.getPokerMasterRoom().iSelectAutoBetCount, n = v.getPokerMasterRoom().reachLimitBet
            }
            return {
                iUsedAutoBetCount: e,
                iSelectAutoBetCount: o,
                reachLimitBet: n
            }
        }
        _updateStaticText() {
            this.imgBgRoot.node.getChildByName("txt_desc_word").getComponent(u).string = _.StringTools.formatC(_.config.getStringDataCasino("Humanboy_advancedSetting_desc"), this._maxSelectedCoinOptNode), this.imgBgRoot.node.getChildByName("txt_auto_word").getComponent(u).string = _.config.getStringDataCasino("Humanboy_advancedSetting_auto"), this.imgBgRoot.node.getChildByName("txt_opt_normal_word").getComponent(u).string = _.config.getStringDataCasino("Humanboy_advancedSetting_opt_normal");
            let t = this.imgBgRoot.node.getChildByName("txt_opt_advance_word").getComponent(u);
            t.string = _.config.getStringDataCasino("Humanboy_advancedSetting_opt_advance");
            let e = _.resMgr.getLabelStringSize(t),
                o = this.imgBgRoot.node.getChildByName("txt_opt_advance_extra_word").getComponent(u);
            o.string = _.config.getStringDataCasino("Humanboy_advancedSetting_opt_advance_extra"), o.node.setPosition(t.node.position.x + e.width + 10, o.node.position.y)
        }
        _checkCoinOptsStatus() {
            if (this._vSelectedCoinOptNode.length > this._maxSelectedCoinOptNode) {
                let t = this._vSelectedCoinOptNode[0];
                this._vSelectedCoinOptNode.splice(0, 1), t.checkBox.isChecked = !1
            }
            let t = this._vSelectedCoinOptNode.length === this._maxSelectedCoinOptNode;
            this.btn_ensure.interactable = t
        }
        _updateAllOptBtn() {
            this.opt_setting_normal.isChecked = !1, this.opt_setting_advance.isChecked = !1, this._resetAllOptBtn();
            let t = !0,
                e = [],
                o = [],
                n = 0;
            switch (y.getInstanceGameId(null == this ? void 0 : this.node)) {
                case _.Enum.GameId.CowBoy:
                    t = g.getCowboyRoom().eAutoLevel === x.cowboy_proto.AutoBetLevel.Level_Normal, e = g.getCowboyRoom().pkRoomParam.totalAmountLevel, o = g.getCowboyRoom().vBetCoinOption, n = g.getCowboyRoom().llCoinUICritical;
                    break;
                case _.Enum.GameId.HumanBoy:
                    t = C.getHumanboyRoom().eAutoLevel === G.humanboy_proto.AutoBetLevel.Level_Normal, e = C.getHumanboyRoom().tCurRoom.totalAmountLevel, o = C.getHumanboyRoom().vBetCoinOption, n = C.getHumanboyRoom().llCoinUICritical;
                    break;
                case _.Enum.GameId.VideoCowboy:
                    t = B.getVideoCowboyRoom().eAutoLevel === R.video_cowboy_proto.AutoBetLevel.Level_Normal, e = B.getVideoCowboyRoom().pkRoomParam.totalAmountLevel, o = B.getVideoCowboyRoom().vBetCoinOption, n = B.getVideoCowboyRoom().llCoinUICritical;
                    break;
                case _.Enum.GameId.PokerMaster:
                    t = v.getPokerMasterRoom().eAutoLevel === L.pokermaster_proto.AutoBetLevel.Level_Normal, e = v.getPokerMasterRoom().tCurRoom.totalAmountLevel, o = v.getPokerMasterRoom().vBetCoinOption, n = v.getPokerMasterRoom().llCoinUICritical
            }
            this._updateOptBtnStatus(t, e, o, n)
        }
        _resetAllOptBtn() {
            for (let t = 0; t < this._vCoinOptNode.length; ++t) this._vCoinOptNode[t].nodeRoot.active = !1, this._vCoinOptNode[t].llAmountLevel = 0, this._vCoinOptNode[t].coin.setShape(b.eHumanboyBetCoinShape.SHAPE_COIN), this._vCoinOptNode[t].coin.setTxtNum(_.StringTools.numberToShowNumber(this._vCoinOptNode[t].llAmountLevel)), this._vCoinOptNode[t].coin.txtBetNode.setPosition(h(m.ZERO)), this._clickbyprogram = !0, this._vCoinOptNode[t].checkBox.isChecked = !1;
            _.StringTools.clearArray(this._vSelectedCoinOptNode), this._checkCoinOptsStatus()
        }
        _updateOptBtnStatus(t, e, o, n) {
            t ? this.opt_setting_normal.isChecked = !0 : this.opt_setting_advance.isChecked = !0;
            let i = Math.min(this._vCoinOptNode.length, e.length);
            for (let t = 0; t < i; ++t) {
                let o = _.StringTools.clientGoldByServer(e[t]),
                    i = o < n ? b.eHumanboyBetCoinShape.SHAPE_COIN : b.eHumanboyBetCoinShape.SHAPE_BLOCK;
                this._vCoinOptNode[t].nodeRoot.active = !0, this._vCoinOptNode[t].llAmountLevel = o, this._vCoinOptNode[t].coin.setShape(i), this._vCoinOptNode[t].coin.setTxtNum(_.StringTools.numberToShowNumber(this._vCoinOptNode[t].llAmountLevel)), this._vCoinOptNode[t].coin.txtBetNode.setPosition(h(m.ZERO))
            }
            i = Math.min(this._vCoinOptNode.length, o.length);
            for (let t = 0; t < i; ++t) {
                let e = _.StringTools.clientGoldByServer(o[t]);
                for (let t = 0; t < this._vCoinOptNode.length; ++t)
                    if (this._vCoinOptNode[t].llAmountLevel === e && !this._vCoinOptNode[t].checkBox.isChecked) {
                        this._clickbyprogram = !0, this._vCoinOptNode[t].checkBox.isChecked = !0;
                        break
                    }
            }
        }
        _makeSelectedByIndex(t) {
            if (t < 0 || t >= this._vCoinOptNode.length) return;
            let e = !1,
                o = 0,
                n = this._vCoinOptNode[t];
            for (let t = 0; t < this._vSelectedCoinOptNode.length; ++t)
                if (n.index === this._vSelectedCoinOptNode[t].index) {
                    e = !0, o = t;
                    break
                } n.checkBox.isChecked ? e || this._vSelectedCoinOptNode.push(n) : e && this._vSelectedCoinOptNode.splice(o, 1), this._checkCoinOptsStatus()
        }
        _showAutoAddBetList(t) {
            this.advanceAutoAddBet || (this.advanceAutoAddBet = r(this.MiniGameAddAdvancedAuto_prefab), this.node.addChild(this.advanceAutoAddBet), this.advanceAutoAddBet.setSiblingIndex(w.COWBOY_LOCAL_ZORDER_ADVANCE_AUTO_ADD_SELECT));
            const e = this.advanceAutoAddBet.getComponent(S),
                o = new k(e);
            o.adaptSelectPanelPos(t.btn_center.node), o.showSelectPanel(!0), o.setCountUpdateCallback((() => {
                t.updateCenterButton()
            }))
        }
        _clearAllSelected() {
            for (let t = 0; t < this._vCoinOptNode.length; ++t) this._vCoinOptNode[t].checkBox.isChecked = !1;
            _.StringTools.clearArray(this._vSelectedCoinOptNode), this._checkCoinOptsStatus()
        }
        onChangeLanguage() {
            this._updateStaticText()
        }
    }).prototype, "prefab_dialog", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(j.prototype, "imgBgRoot", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(j.prototype, "btn_close", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(j.prototype, "btn_clean", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(j.prototype, "btn_ensure", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(j.prototype, "opt_setting_normal", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(j.prototype, "opt_setting_advance", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(j.prototype, "MiniGameAddAdvancedAuto_prefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = j)) || V));
    n._RF.pop()
}
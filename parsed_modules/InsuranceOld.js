import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as I from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as S from "./cv.js";
import * as C from "./TagCom.js";
import * as D from "./CustomToggle.js";
import * as w from "./InsuranceData.js";
import * as v from "./InsuranceOutsCardItem.js";
import * as x from "./TableView.js";
import * as A from "./GameSceneInstance.js";
import * as P from "./GameSceneInstance.js";

function main() {
    var O, R, M, B, k, N, E, G, U, z, V, F, L, X, H, W, q, Y, j, Z, $, J, K, Q, tt, et, nt, it, st, at, rt, ot, lt, ut, _t, ht, ct, gt, dt, pt, mt, It, bt, Tt, ft, yt, St, Ct, Dt, wt, vt, xt, Pt, At, Ot, Rt, Mt, Bt, kt, Nt, Et;
    i._RF.push({}, "f0266n6fvlMbL33n0TVVSt2", "InsuranceOld", void 0);
    const {
        ccclass: Gt,
        property: Ut
    } = h;
    t("InsuranceOld", (O = Ut(s), R = Ut(s), M = Ut(s), B = Ut(a), k = Ut(a), N = Ut(a), E = Ut(a), G = Ut(r), U = Ut(r), z = Ut(r), V = Ut(o), F = Ut(o), L = Ut(o), X = Ut(o), H = Ut(o), W = Ut(o), q = Ut(o), Y = Ut(o), j = Ut(o), Z = Ut(o), $ = Ut(o), J = Ut(o), K = Ut(D), Q = Ut(l), tt = Ut(l), et = Ut(l), nt = Ut(u), it = Ut(_), st = A("GameDataInstance"), Gt(((Et = class extends c {
        constructor(...t) {
            super(...t), n(this, "prefab_allin_info_item", ot, this), n(this, "prefab_public_cards_item", lt, this), n(this, "prefab_outs_cards_item", ut, this), n(this, "panel", _t, this), n(this, "panel_shield", ht, this), n(this, "panel_self", ct, this), n(this, "panel_buy", gt, this), n(this, "scrollview_allin_info", dt, this), n(this, "scrollview_public_cards", pt, this), n(this, "scrollview_outs_cards", mt, this), n(this, "txt_selected", It, this), n(this, "txt_odds_rate", bt, this), n(this, "txt_insurance_time_price", Tt, this), n(this, "txt_insurance_time_down", ft, this), n(this, "txt_tips_waitting", yt, this), n(this, "txt_tips_self", St, this), n(this, "txt_tips_other", Ct, this), n(this, "txt_chips_insurance", Dt, this), n(this, "txt_chips_pot", wt, this), n(this, "txt_chips_invest", vt, this), n(this, "txt_insure_pay", xt, this), n(this, "txt_insure_odds", Pt, this), n(this, "toggle_select_all", At, this), n(this, "btn_addTime", Ot, this), n(this, "btn_buy_ensure", Rt, this), n(this, "btn_buy_cancel", Mt, this), n(this, "slider", Bt, this), n(this, "slider_sp", kt, this), this._insuranceData = null, this._bInit = !1, this._nChipsInsurance = 0, this._nChipsPot = 0, this._nChipsInvest = 0, this._nInsurePay = 0, this._nInsureOdds = 0, this._bShowingAction = !1, this._bHidingAction = !1, this._bParseOddsRateOnce = !1, this._vInsuranceRates = [], this._nInsuranceTimeDown = 0, this._nBuyBackAmount = 0, this._bTurnInsurance = !1, this._nMaxInsuredAmount = 0, this._nMaxRealInsuredAmount = 0, this._vToggleInsuredPay = [], this._vOutsCardsData = [], this._btn_buy_ensure_src_frame = null, this._btn_cancel_src_frame = null, this._txt_self_tips_src_pos = new g(g.ZERO), this._panel_buy_src_pos = new g(g.ZERO), this.nodeUITransform = null, this.parentNodeUITransform = null, this.panelNodeUITransform = null, n(this, "gameDataInstance", Nt, this)
        }
        init() {
            if (this._bInit) return;
            this._bInit = !0, this.scrollview_allin_info.getComponent(x).generatePoolInst(4), this.scrollview_public_cards.getComponent(x).generatePoolInst(4), this.scrollview_outs_cards.getComponent(x).generatePoolInst(2), this.node.active = !1
        }
        bindDataTarget(t) {
            this._insuranceData = t
        }
        autoShow(t = !0, e) {
            if (S.appConfig.getGameConfig().isAutoCancelInsurrance) return void this._reqNotBuy();
            if (this.node.active || this._bShowingAction || this._bHidingAction) return;
            S.tools.isSoundEffectOpen() && S.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/insure_confirm");
            let n = this.parentNodeUITransform.width,
                i = this.parentNodeUITransform.height;
            n <= 0 && (n = d.getVisibleSize().width), i <= 0 && (i = d.getVisibleSize().height);
            let s = new g((this.nodeUITransform.anchorX - this.parentNodeUITransform.anchorX) * n, (this.nodeUITransform.anchorY - this.parentNodeUITransform.anchorY) * i);
            t ? (this.node.active = !0, p.stopAllByTarget(this.node), this.node.setPosition(s), S.action.removeShowActionShieldLayer(this.node), S.action.showAction(this.node, S.action.eMoveActionDir.EMAD_TO_LEFT, S.action.eMoveActionType.EMAT_FADE_IN, S.action.delay_type.FAST, ((t, e) => {
                this._bShowingAction = !0
            }), ((t, e) => {
                this._bShowingAction = !1
            }))) : (this.node.active = !0, p.stopAllByTarget(this.node), this.node.setPosition(s), this._bShowingAction = !1, S.action.removeShowActionShieldLayer(this.node)), this._updateView(e)
        }
        autoHide(t = !0) {
            if (!this.node.parent || !this.node.active) return;
            let e = () => {
                    this._bShowingAction = !1, p.stopAllByTarget(this.node), S.action.removeShowActionShieldLayer(this.node), y.getScheduler().unscheduleAllForTarget(this.node)
                },
                n = this.parentNodeUITransform.width,
                i = this.parentNodeUITransform.height;
            n <= 0 && (n = d.getVisibleSize().width), i <= 0 && (i = d.getVisibleSize().height);
            let s = m((this.nodeUITransform.anchorX - this.parentNodeUITransform.anchorX) * n, (this.nodeUITransform.anchorY - this.parentNodeUITransform.anchorY) * i, 0);
            t && !this._bHidingAction ? (e(), this.node.setPosition(s), S.action.showAction(this.node, S.action.eMoveActionDir.EMAD_TO_RIGHT, S.action.eMoveActionType.EMAT_FADE_OUT, S.action.delay_type.FAST, ((t, e) => {
                this._bHidingAction = !0
            }), ((t, e) => {
                this._bHidingAction = !1
            }))) : (e(), this.node.setPosition(s), this.node.active = !1, this._bHidingAction = !1)
        }
        onLoad() {
            this.nodeUITransform = this.node.getComponent(I), this.parentNodeUITransform = this.node.parent.getComponent(I), this.panelNodeUITransform = this.panel.getComponent(I), S.resMgr.adaptWidget(this.node), this._btn_buy_ensure_src_frame = this.btn_buy_ensure.getComponent(_).spriteFrame, this._btn_cancel_src_frame = this.btn_buy_cancel.getComponent(_).spriteFrame, this._txt_self_tips_src_pos = m(this.txt_tips_self.node.position), this._panel_buy_src_pos = m(this.panel_buy.position), this.btn_buy_ensure.node.on("click", (t => {
                S.AudioMgr.playButtonSound("button_click"), this._reqBuy()
            }), this), this.btn_buy_cancel.node.on("click", (t => {
                S.AudioMgr.playButtonSound("button_click"), this._reqNotBuy()
            }), this), this.btn_addTime.node.on("click", (t => {
                S.AudioMgr.playButtonSound("button_click"), this._reqAddInsuranceTime()
            }), this), this.slider.node.on("slide", (t => {
                this._onSliderEvent()
            }), this), this.toggle_select_all.node.on("toggle", (t => {
                this._onToggleSelectedAll()
            }), this);
            let t = this.panel_self.getChildByName("panel_toggle");
            if (t)
                for (let e = 0; e < t.children.length; ++e) {
                    let n = t.children[e].getComponent(D),
                        i = n.node.getComponent(C);
                    switch (i || (i = n.node.addComponent(C)), e) {
                        case 0:
                            i.nTag = w.InsurancePayToggleIdx.E_IPT_IDX_BreakEven;
                            break;
                        case 1:
                            i.nTag = w.InsurancePayToggleIdx.E_IPT_IDX_HalfPot;
                            break;
                        case 2:
                            i.nTag = w.InsurancePayToggleIdx.E_IPT_IDX_EqualInterest;
                            break;
                        case 3:
                            i.nTag = w.InsurancePayToggleIdx.E_IPT_IDX_FullPot
                    }
                    n.node.on("toggle", this._onToggleGroupEvent, this), this._vToggleInsuredPay.push(n)
                }
        }
        start() {}
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        _registerEvent() {
            S.MessageCenter.register("update_insurance_time", this._onMsgUpdateInsuranceTime.bind(this), this.node), S.MessageCenter.register("click_insurance_outs_card_item", this._onMsgClickInsuranceOutsCardItem.bind(this), this.node), S.MessageCenter.register("ChangeCard_onClickCardFace", this._onMsgChangeCardFace.bind(this), this.node)
        }
        _unregisterEvent() {
            S.MessageCenter.unregister("update_insurance_time", this.node), S.MessageCenter.unregister("click_insurance_outs_card_item", this.node), S.MessageCenter.unregister("ChangeCard_onClickCardFace", this.node)
        }
        _updateView(t) {
            this._parseInsuranceRatesOnce(), this._resetAllUI(), this._updateStaticTxt(), this._updateViewPerspective(), this._resetInsuranceTimeDown(t), this._updateInsuranceTimeDownPrice(), this._setPotInfo(this._insuranceData.getDataInsurance()), this._updateAllInInfo(), this._updatePublicCards(), this._updateOutsCards(), this._resetSlider(), this._updateOutsSelected(), this._insuranceData.getViewMode() === w.InsuranceViewMode.VIEW_REPLAY && this._updateViewExReplay()
        }
        _updateViewExReplay() {
            if (this.panel.getChildByName("txt_title").getComponent(o).string = S.config.getStringData("UITitle123"), this._resetInsuranceTimeDown(0), this.panel_shield.active = !0, this._setOutsCardsTouchEnanled(!1), this._insuranceData.getDataInsuranceReplay().isBuyInsurance) {
                let t = S.Number(this._insuranceData.getDataInsuranceReplay().option) - 1;
                if (t >= 0 && t < this._vToggleInsuredPay.length) this._vToggleInsuredPay[t].check();
                else {
                    let t = S.StringTools.clientGoldByServer(this._insuranceData.getDataInsuranceReplay().insuredAmounts);
                    t = Math.min(t, this._nMaxRealInsuredAmount), this._setSliderProgress(S.StringTools.div(t, this._nMaxRealInsuredAmount)), this._updateSliderPercent(!0)
                }
            } {
                let t = this._insuranceData.getDataInsuranceReplay().isBuyInsurance;
                this.btn_buy_ensure.enabled = t, this.btn_buy_ensure.interactable = t, this.btn_buy_cancel.enabled = !t, this.btn_buy_cancel.interactable = !t, this.btn_buy_ensure.getComponent(_).spriteFrame = t ? this._btn_buy_ensure_src_frame : this._btn_cancel_src_frame, this.btn_buy_cancel.getComponent(_).spriteFrame = t ? this._btn_cancel_src_frame : this._btn_buy_ensure_src_frame
            }
        }
        _resetAllUI() {
            this._resetInsuranceTimeDown(0), this._updateInsuranceTimeDownPrice(), this.txt_odds_rate.string = "0", this.txt_selected.string = S.StringTools.formatC(S.config.getStringData("UITitle88"), 0), this.toggle_select_all.enabled = !0, this.toggle_select_all.isChecked = !0, this._setChipsInsureNum(0), this._setChipsPotNum(0), this._setChipsInvestNum(0);
            for (let t = 0; t < this._vToggleInsuredPay.length; ++t) this._vToggleInsuredPay[t].isChecked = !1;
            this._setInsurePayOddsNum(0), this._setSliderProgress(0, !1), this._resetToggleGroupStatus(!1), this.txt_tips_self.string = "", this.txt_tips_self.node.active = !1, this.txt_tips_other.string = "", this.txt_tips_other.node.active = !1
        }
        _updateViewPerspective() {
            let t = this._insuranceData.getDataIsSelfBuy();
            this.panel_shield.active = !t, this.panel_self.active = t, this.txt_tips_waitting.node.active = !t
        }
        _getSelectOutsCardTag() {
            let t = [];
            for (let e = 0; e < this._vOutsCardsData.length; ++e) this._vOutsCardsData[e].isCheck && t.push(this._vOutsCardsData[e].outItem.outs_id);
            return t
        }
        _getCurrentRate() {
            let t = 0;
            return t = this._getRateByOuts(this._getSelectOutsCardTag().length), t
        }
        _getRateByOuts(t) {
            let e = 0;
            if ((t = S.Number(t)) > 0 && this._vInsuranceRates.length > 0) {
                let n = Math.min(t - 1, this._vInsuranceRates.length - 1);
                n = Math.max(0, n), e = this._vInsuranceRates[n]
            }
            return e
        }
        _getInsuranceByToggleIdx(t) {
            let e = 0,
                n = this._getCurrentRate();
            switch (t) {
                case w.InsurancePayToggleIdx.E_IPT_IDX_BreakEven:
                    e = S.StringTools.div(this._nChipsInvest, n);
                    break;
                case w.InsurancePayToggleIdx.E_IPT_IDX_HalfPot:
                    e = S.StringTools.div(this._nChipsInsurance, 2), e = S.StringTools.div(e, n);
                    break;
                case w.InsurancePayToggleIdx.E_IPT_IDX_EqualInterest:
                    e = S.StringTools.plus(n, 1), e = S.StringTools.div(this._nChipsInsurance, e);
                    break;
                case w.InsurancePayToggleIdx.E_IPT_IDX_FullPot:
                    e = S.StringTools.div(this._nChipsInsurance, n)
            }
            return S.Number(e)
        }
        _isAllowOutsSelected() {
            return !!this.gameDataInstance.tRoomData.m_bChooseOuts || (S.TT.showMsg(S.config.getStringData("UICantChooseOuts"), S.Enum.ToastType.ToastTypeDefault), !1)
        }
        _updateOutsSelected(t = !0) {
            let e = S.StringTools.getArrayLength(this._getSelectOutsCardTag());
            t && (this.toggle_select_all.isChecked = e === this._vOutsCardsData.length), this.txt_selected.string = S.StringTools.formatC(S.config.getStringData("UITitle88"), e);
            let n = S.config.getStringData("Insurance_bg_peilv_wordtext"),
                i = S.StringTools.formatC("1-%s", this._getCurrentRate());
            this.txt_odds_rate.string = S.StringTools.formatC(n, i);
            let s = !(0 === e);
            this._resetSlider(s), this._checkBuyBackTip()
        }
        _updateStaticTxt() {
            this.panel.getChildByName("txt_title").getComponent(o).string = S.config.getStringData("UITitle42");
            this.panel.getChildByName("txt_left_time_word").getComponent(o).string = S.config.getStringData("Insurance_bg_signScore_text_0");
            this.panel.getChildByName("txt_pub_card").getComponent(o).string = S.config.getStringData("Insurance_bg_pulbicWord_textBg_pulbicWord_text");
            this.panel.getChildByName("txt_select_all_word").getComponent(o).string = S.config.getStringData("Insurance_bg_selectAll_txt");
            for (let t = 0; t < this._vToggleInsuredPay.length; ++t) {
                let e = this._vToggleInsuredPay[t].node.getChildByName("txt").getComponent(o),
                    n = this._vToggleInsuredPay[t].node.getComponent(C);
                e.string = S.config.getStringData(`Insurance_bg_self_panel_toggle_${n.nTag}`)
            }
            this.btn_buy_ensure.node.getChildByName("txt").getComponent(o).string = S.config.getStringData("Insurance_bg_self_panel_buy_button"), this.btn_buy_cancel.node.getChildByName("txt").getComponent(o).string = S.config.getStringData("Insurance_bg_self_panel_noBuy_button");
            this.txt_tips_waitting.string = S.config.getStringData("Insurance_bg_waiting_text")
        }
        _setSliderProgress(t, e = !0) {
            t = Math.max(0, t), t = Math.min(1, t), this.slider.progress = t, this.slider_sp.node.getComponent(I).width = this.slider.progress * this.slider.node.getComponent(I).width, this.slider.enabled = e, this.slider.handle.getComponent(l).interactable = e, this.slider.handle.enabled = e
        }
        _resetSlider(t = !0) {
            this._setSliderProgress(0, t), this._resetToggleGroupStatus(t);
            let e = this._getInsuranceByToggleIdx(w.InsurancePayToggleIdx.E_IPT_IDX_FullPot),
                n = this._getRateByOuts(this._vOutsCardsData.length - this._getSelectOutsCardTag().length),
                i = S.StringTools.div(this._nMaxInsuredAmount, 3);
            if (this._bTurnInsurance)
                if (n > 0) {
                    let t = S.StringTools.div(e, n);
                    if (0 === t && (t = 1), S.StringTools.plus(e, t) <= i) this._nMaxRealInsuredAmount = e;
                    else {
                        let t = S.StringTools.div(i, S.StringTools.plus(1, n));
                        t = S.StringTools.minus(i, t);
                        let e = S.StringTools.div(t, n),
                            s = S.StringTools.plus(t, e);
                        if (s > i) {
                            let e = S.StringTools.minus(s, i);
                            t = S.StringTools.minus(t, e)
                        }
                        this._nMaxRealInsuredAmount = t
                    }
                } else this._nMaxRealInsuredAmount = Math.min(e, i);
            else if (n > 0) {
                let t = S.StringTools.div(e, n);
                0 === t && (t = 1), S.StringTools.plus(e, t) <= this._nMaxInsuredAmount ? this._nMaxRealInsuredAmount = e : this._nMaxRealInsuredAmount = this._nMaxInsuredAmount
            } else this._nMaxRealInsuredAmount = Math.min(e, this._nMaxInsuredAmount);
            if (this._setInsurePayOddsNum(this._nBuyBackAmount), this.txt_tips_other.node.active = this._getCurrentRate() <= 1, this.txt_tips_other.node.active) {
                let t = S.config.getStringData("UIGameSceneTips18");
                this.txt_tips_other.string = S.StringTools.calculateAutoWrapString(this.txt_tips_other.node, t)
            }
        }
        _onSliderEvent() {
            let t = this.slider.progress,
                e = this._nMaxRealInsuredAmount;
            if (this._insuranceData.getDataIsMirco() && (e *= 100), e > 0) {
                e = Math.min(e, this.slider.node.getComponent(I).width);
                let n = S.StringTools.div(1, e);
                e = Math.ceil(S.StringTools.div(t, n)), t = S.StringTools.times(e, n)
            }
            this._setSliderProgress(t), this._updateSliderPercent()
        }
        _updateSliderPercent(t = !0) {
            let e = 0,
                n = this._nChipsInsurance,
                i = S.StringTools.times(this.slider.progress, this._nMaxRealInsuredAmount);
            if (i <= n ? e = S.StringTools.plus(i, this._nBuyBackAmount) : (this._setSliderProgress(1), e = S.StringTools.div(n, this._getCurrentRate())), this._setInsurePayOddsNum(e), this._checkBuyBackTip(), t) {
                this._resetToggleGroupStatus();
                for (let t = this._vToggleInsuredPay.length - 1; t >= 0; --t) {
                    this._vToggleInsuredPay[t].isChecked = !1;
                    let e = this._getRealGameNumberDown(i, !0),
                        n = 0,
                        s = this._vToggleInsuredPay[t].getComponent(C),
                        a = this._getInsuranceByToggleIdx(s.nTag),
                        r = 0,
                        o = this._vOutsCardsData.length - this._getSelectOutsCardTag().length;
                    if (o > 0) {
                        let t = this._getRateByOuts(o);
                        r = S.StringTools.div(a, t)
                    }
                    if (n = S.StringTools.plus(a, r) <= this._nMaxRealInsuredAmount ? a : this._nMaxRealInsuredAmount, n = this._getRealGameNumberDown(n, !0), n > 0 && n === e) {
                        this._vToggleInsuredPay[t].isChecked = !0, this._updateToggleGroupTxtColor();
                        break
                    }
                }
            }
        }
        _parseInsuranceRatesOnce() {
            if (this._bParseOddsRateOnce) return;
            this._bParseOddsRateOnce = !0, this._vInsuranceRates = [];
            let t = "";
            switch (this.gameDataInstance.tRoomData.pkRoomParam.game_mode) {
                case S.Enum.CreateGameMode.CreateGame_Mode_Normal:
                    t = S.config.getStringData("NormalTypeInsuranceRate");
                    break;
                default:
                    t = S.config.getStringData("ShortTypeInsuranceRate")
            }
            let e = t.split(",");
            for (let t = 0; t < S.StringTools.getArrayLength(e); ++t) this._vInsuranceRates.push(S.Number(e[t]))
        }
        _reqBuy() {
            if (this._getCurrentRate() > 1) {
                let t = this._getSelectOutsCardTag();
                if (S.StringTools.getArrayLength(t) > 0) {
                    let e = this._getRealGameNumberDown(this.slider.progress * this._nMaxRealInsuredAmount, this._insuranceData.getDataIsMirco());
                    if (e <= 0) return;
                    if (this._bTurnInsurance && e > this._nMaxRealInsuredAmount) {
                        let t = S.config.getStringData("ServerErrorCode61");
                        return void S.TT.showMsg(t, S.Enum.ToastType.ToastTypeWarning)
                    }
                    let n = this._getToggleGroupCheckIndex();
                    S.gameNet.RequestBuyInsurance(this.gameDataInstance.tRoomData.u32GameID, this.gameDataInstance.tRoomData.u32RoomId, t, e, !0, n + 1)
                } else this._reqNotBuy()
            } else S.TT.showMsg(S.config.getStringData("UIGameSceneTips18"), S.Enum.ToastType.ToastTypeWarning)
        }
        _reqNotBuy() {
            var t, e;
            let n = this._getSelectOutsCardTag();
            S.gameNet.RequestBuyInsurance(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID, null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, n, 0, !1, 0)
        }
        _reqAddInsuranceTime() {
            var t, e;
            S.gameNet.RequestAddInsuranceTime(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID, null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId)
        }
        _onMsgUpdateInsuranceTime(t) {
            if (P.isInvalidGameDataMultiWindow(t.gameData, this.gameDataInstance)) return;
            const e = t.nLeftTime;
            this._resetInsuranceTimeDown(e), this._updateInsuranceTimeDownPrice()
        }
        _onMsgClickInsuranceOutsCardItem(t) {
            if (!P.isInvalidGameDataMultiWindow(t.data.gameDataInstance, this.gameDataInstance) && this._isAllowOutsSelected()) {
                t.card.setCheck(!t.card.isCheck()), t.data.isCheck = t.card.isCheck();
                for (let e = 0; e < this._vOutsCardsData.length; ++e)
                    if (t.data.index === this._vOutsCardsData[e].index) {
                        this._vOutsCardsData[e].isCheck = t.card.isCheck();
                        break
                    } this._updateOutsSelected()
            }
        }
        _onMsgChangeCardFace() {
            this.scrollview_allin_info.getComponent(x).refreshView(), this.scrollview_public_cards.getComponent(x).refreshView(), this.scrollview_outs_cards.getComponent(x).refreshView()
        }
        _resetInsuranceTimeDown(t) {
            this._nInsuranceTimeDown = Math.max(0, S.Number(t)), this._setInsuranceTimeDown(this._nInsuranceTimeDown), this.unschedule(this._onScheduleInsuranceTimeDown), this._nInsuranceTimeDown > 0 && this.schedule(this._onScheduleInsuranceTimeDown, 1)
        }
        _setInsuranceTimeDown(t) {
            t = S.Number(t), this.txt_insurance_time_down.string = S.StringTools.formatC("%ds", t)
        }
        _onScheduleInsuranceTimeDown() {
            this._nInsuranceTimeDown -= 1, this._nInsuranceTimeDown <= 0 && (this._nInsuranceTimeDown = 0, this.unschedule(this._onScheduleInsuranceTimeDown), this.autoHide()), this._setInsuranceTimeDown(this._nInsuranceTimeDown)
        }
        _updateInsuranceTimeDownPrice() {
            let t = this.gameDataInstance.tRoomData.pkPayMoneyItem.insuranceCount,
                e = this.gameDataInstance.tRoomData.pkPayMoneyItem.insuranceCountsFee,
                n = 0,
                i = 0,
                s = !0;
            if (S.StringTools.getArrayLength(e) > 0) {
                for (let i = 0; i < e.length; ++i)
                    if (t >= e[i].startCount && t <= e[i].endCount) {
                        n = i;
                        break
                    } i = e[n].needCoin, s = t <= e.length
            }
            this.txt_insurance_time_price.string = S.StringTools.serverGoldToShowString(i), this.btn_addTime.interactable = s, this.btn_addTime.enabled = s
        }
        _setPotInfo(t) {
            this._setChipsInsureNum(S.StringTools.clientGoldByServer(S.StringTools.plus(t.pot_amount, t.limit_amount))), this._setChipsPotNum(S.StringTools.clientGoldByServer(t.total_pot)), this._setChipsInvestNum(S.StringTools.clientGoldByServer(t.total_inv_amount)), this._bTurnInsurance = t.public_cards.length < 4;
            let e = 0;
            if (0 !== t.limit_amount) {
                let n = this._getRateByOuts(this._insuranceData.getDataOutsCards().length);
                0 === n ? e = this._insuranceData.getDataIsMirco() ? 1 : 100 : (e = S.StringTools.div(t.limit_amount, n), e = Math.ceil(e))
            }
            this._nMaxInsuredAmount = S.StringTools.clientGoldByServer(S.StringTools.minus(t.pot_amount, e)), this._nBuyBackAmount = S.StringTools.clientGoldByServer(e), this._nBuyBackAmount = this._getRealGameNumberDown(this._nBuyBackAmount, this._insuranceData.getDataIsMirco())
        }
        _setOutsCardsTouchEnanled(t) {
            for (let e = 0; e < this._vOutsCardsData.length; ++e) this._vOutsCardsData[e].clickEnable = t;
            this._reloadOutsView()
        }
        _checkBuyBackTip() {
            let t = this._vOutsCardsData.length - this._getSelectOutsCardTag().length;
            if (t > 0) {
                let e = t > 0 && this._getSelectOutsCardTag().length > 0;
                if (this.txt_tips_self.node.active = e, this.txt_tips_self.node.active) {
                    let e = this._getRateByOuts(t),
                        n = S.StringTools.times(this.slider.progress, this._nMaxRealInsuredAmount),
                        i = this._getRealGameNumberDown(S.StringTools.div(n, e), this._insuranceData.getDataIsMirco());
                    (0 === i || i < .01) && this.slider.progress > 0 && (i = this._insuranceData.getDataIsMirco() ? .01 : 1);
                    let s = S.StringTools.formatC(S.config.getStringData("UIGameSceneTips16"), S.StringTools.numberToShowString(i));
                    this.txt_tips_self.string = S.StringTools.calculateAutoWrapString(this.txt_tips_self.node, s)
                }
            } else if (this.txt_tips_self.node.active = 0 !== this._nBuyBackAmount, this.txt_tips_self.node.active) {
                let t = S.StringTools.formatC(S.config.getStringData("UIGameSceneTips15"), S.StringTools.numberToShowString(this._nBuyBackAmount));
                this.txt_tips_self.string = S.StringTools.calculateAutoWrapString(this.txt_tips_self.node, t)
            }
            this.txt_tips_self.node.active && this.txt_tips_self.node.setPosition(this._txt_self_tips_src_pos);
            {
                let t = 0,
                    e = this.txt_tips_self.node.active ? 0 : (this.txt_tips_self.node.position.y - this._panel_buy_src_pos.y) / 2;
                this.panel_buy.setPosition(this._panel_buy_src_pos.x + t, this._panel_buy_src_pos.y + e)
            }
        }
        _onToggleSelectedAll() {
            let t = this.toggle_select_all.isChecked;
            if (this._isAllowOutsSelected()) {
                for (let e = 0; e < this._vOutsCardsData.length; ++e) this._vOutsCardsData[e].isCheck = t;
                this._reloadOutsView(), this._updateOutsSelected()
            } else this.toggle_select_all.isChecked = !0
        }
        _resetToggleGroupStatus(t = !0) {
            for (let e = 0; e < this._vToggleInsuredPay.length; ++e) this._vToggleInsuredPay[e].isChecked = !1, this._vToggleInsuredPay[e].setTouchEnable(t), this._updateToggleGroupTxtColor()
        }
        _getToggleGroupCheckIndex() {
            let t = -1;
            for (let e = 0; e < this._vToggleInsuredPay.length; ++e)
                if (this._vToggleInsuredPay[e].isChecked) {
                    t = e;
                    break
                } return t
        }
        _updateToggleGroupTxtColor() {
            for (let t = 0; t < this._vToggleInsuredPay.length; ++t) {
                let e = this._vToggleInsuredPay[t];
                e.node.getChildByName("txt").getComponent(b).color = e.isChecked ? T.WHITE : f(39, 130, 219)
            }
        }
        _onToggleGroupEvent(t) {
            let e = 0;
            if (this._getToggleGroupCheckIndex() >= 0) {
                let n = t.getComponent(C),
                    i = this._getInsuranceByToggleIdx(n.nTag),
                    s = 0,
                    a = this._vOutsCardsData.length - this._getSelectOutsCardTag().length;
                if (a > 0) {
                    let t = this._getRateByOuts(a);
                    s = S.StringTools.div(i, t)
                }
                e = S.StringTools.plus(i, s) <= this._nMaxRealInsuredAmount ? S.StringTools.div(i, this._nMaxRealInsuredAmount) : 1
            }
            this._setSliderProgress(e), this._updateSliderPercent(!1), this._updateToggleGroupTxtColor()
        }
        _setChipsInsureNum(t) {
            this._nChipsInsurance = t, this.txt_chips_insurance.string = S.config.getStringData("Insurance_bg_keTouBao_txt") + S.StringTools.numberToShowString(this._nChipsInsurance), this._layoutChipsPanel()
        }
        _setChipsPotNum(t) {
            this._nChipsPot = t, this.txt_chips_pot.string = S.config.getStringData("Insurance_bg_dichi_txt") + S.StringTools.numberToShowString(this._nChipsPot), this._layoutChipsPanel()
        }
        _setChipsInvestNum(t) {
            this._nChipsInvest = t, this.txt_chips_invest.string = S.config.getStringData("Insurance_bg_touru_text") + S.StringTools.numberToShowString(this._nChipsInvest), this._layoutChipsPanel()
        }
        _layoutChipsPanel() {
            let t = S.resMgr.getLabelStringSize(this.txt_chips_insurance).width,
                e = S.resMgr.getLabelStringSize(this.txt_chips_pot).width,
                n = S.resMgr.getLabelStringSize(this.txt_chips_invest).width,
                i = this.txt_chips_insurance.node.getComponent(I).anchorX,
                s = this.txt_chips_pot.node.getComponent(I).anchorX,
                a = this.txt_chips_invest.node.getComponent(I).anchorX,
                r = t + e + n,
                o = (this.panelNodeUITransform.width - r) / 4,
                l = this.panelNodeUITransform.width * (0 - this.panelNodeUITransform.anchorX),
                u = this.txt_chips_insurance.node.position.y;
            l += o + t * i, this.txt_chips_insurance.node.setPosition(l, u), l += t * (1 - i), l += o + e * s, this.txt_chips_pot.node.setPosition(l, u), l += e * (1 - s), l += o + n * a, this.txt_chips_invest.node.setPosition(l, u)
        }
        _setInsurePayOddsNum(t) {
            this._nInsurePay = this._getRealGameNumberDown(t, this._insuranceData.getDataIsMirco()), this.txt_insure_pay.string = S.config.getStringData("Insurance_bg_self_panel_Text_931") + S.StringTools.numberToShowString(this._nInsurePay), t = S.StringTools.times(this._nInsurePay, this._getCurrentRate()), this._nInsureOdds = this._getRealGameNumberDown(t, this._insuranceData.getDataIsMirco()), this.txt_insure_odds.string = S.config.getStringData("Insurance_bg_self_panel_Text_93") + S.StringTools.numberToShowString(this._nInsureOdds), this._layoutInsurePanel()
        }
        _layoutInsurePanel() {
            let t = S.resMgr.getLabelStringSize(this.txt_insure_pay).width,
                e = t + S.resMgr.getLabelStringSize(this.txt_insure_odds).width,
                n = (this.panelNodeUITransform.width - e) / 3,
                i = this.panelNodeUITransform.width * (0 - this.panelNodeUITransform.anchorX),
                s = 0,
                a = this.txt_insure_pay.node.position.y;
            s += i + n, this.txt_insure_pay.node.setPosition(s, a), s += t + n, this.txt_insure_odds.node.setPosition(s, a)
        }
        _getRealGameNumberDown(t, e) {
            let n = e ? 2 : 0;
            return S.StringTools.toFixed(t, n, S.StringTools.RoundingMode.ROUND_DOWN)
        }
        _getRealGameNumberUp(t, e) {
            let n = e ? 2 : 0;
            return S.StringTools.toFixed(t, n, S.StringTools.RoundingMode.ROUND_HALF_UP)
        }
        _updateAllInInfo() {
            let t = [];
            for (let e = 0; e < this._insuranceData.getDataPlayerCards().length; ++e) {
                let n = 0,
                    i = this._insuranceData.getDataPlayerCards()[e];
                switch (i.vCards.length) {
                    case 4:
                        n = 1;
                        break;
                    case 2:
                    default:
                        n = 0
                }
                t.push({
                    prefab_type: n,
                    prefab_component: "InsuranceAllInItem",
                    prefab_datas: i
                })
            }
            let e = this.scrollview_allin_info.getComponent(x);
            e.bindData(t), e.reloadView()
        }
        _updatePublicCards() {
            let t = [];
            for (let e = 0; e < this._insuranceData.getDataPublicCards().length; ++e) t.push(this._insuranceData.getDataPublicCards()[e]);
            let e = {
                    prefab_type: 0,
                    prefab_component: "InsurancePublicCardItem",
                    prefab_datas: t
                },
                n = this.scrollview_public_cards.getComponent(x);
            n.cellScale = .65, n.bindData(e), n.reloadView()
        }
        _updateOutsCards() {
            let t = this._insuranceData.getDataIsSelfBuy();
            this.gameDataInstance.tRoomData.m_bChooseOuts && (this._bTurnInsurance || (t = this._insuranceData.getDataInsurance().buy_amount <= 0, this.toggle_select_all.enabled = t));
            let e = 0,
                n = this.prefab_outs_cards_item.data.children.length,
                i = [];
            S.StringTools.clearArray(this._vOutsCardsData);
            for (let s = 0; s < this._insuranceData.getDataOutsCards().length; ++s) {
                s % n == 0 && (e = i.length, i[e] = new Array);
                let a = new v;
                a.index = s, a.gameid = this._insuranceData.getDataGameID(), a.outItem = this._insuranceData.getDataOutsCards()[s], a.isCheck = !0, a.clickEnable = t, a.gameDataInstance = this.gameDataInstance, i[e].push(a), this._vOutsCardsData.push(a)
            }
            if (this._insuranceData.getViewMode() === w.InsuranceViewMode.VIEW_REPLAY && this._insuranceData.getDataInsuranceReplay().isBuyInsurance)
                for (let t = 0; t < this._vOutsCardsData.length; ++t) {
                    let e = !1,
                        n = this._vOutsCardsData[t].outItem.outs_id;
                    for (let t = 0; t < this._insuranceData.getDataInsuranceReplay().buyOutsID.length; ++t)
                        if (n === this._insuranceData.getDataInsuranceReplay().buyOutsID[t]) {
                            e = !0;
                            break
                        } this._vOutsCardsData[t].isCheck = e
                }
            let s = {
                    prefab_type: 0,
                    prefab_component: "InsuranceOutsCardItem",
                    prefab_datas: i
                },
                a = this.scrollview_outs_cards.getComponent(x);
            a.bindData(s), a.reloadView(), this._updateOutsSelected()
        }
        _reloadOutsView(t = !1) {
            let e = 0,
                n = [];
            for (let t = 0; t < this._vOutsCardsData.length; ++t) t % 11 == 0 && (e = n.length, n[e] = new Array), n[e].push(this._vOutsCardsData[t]);
            let i = {
                    prefab_type: 0,
                    prefab_component: "InsuranceOutsCardItem",
                    prefab_datas: n
                },
                s = this.scrollview_outs_cards.getComponent(x);
            s.bindData(i), s.reloadView(t)
        }
    }).gClassName = "InsuranceOld", ot = e((rt = Et).prototype, "prefab_allin_info_item", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(rt.prototype, "prefab_public_cards_item", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(rt.prototype, "prefab_outs_cards_item", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(rt.prototype, "panel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(rt.prototype, "panel_shield", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(rt.prototype, "panel_self", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(rt.prototype, "panel_buy", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(rt.prototype, "scrollview_allin_info", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(rt.prototype, "scrollview_public_cards", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(rt.prototype, "scrollview_outs_cards", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(rt.prototype, "txt_selected", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(rt.prototype, "txt_odds_rate", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(rt.prototype, "txt_insurance_time_price", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(rt.prototype, "txt_insurance_time_down", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(rt.prototype, "txt_tips_waitting", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(rt.prototype, "txt_tips_self", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(rt.prototype, "txt_tips_other", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(rt.prototype, "txt_chips_insurance", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(rt.prototype, "txt_chips_pot", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(rt.prototype, "txt_chips_invest", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(rt.prototype, "txt_insure_pay", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(rt.prototype, "txt_insure_odds", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(rt.prototype, "toggle_select_all", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(rt.prototype, "btn_addTime", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(rt.prototype, "btn_buy_ensure", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(rt.prototype, "btn_buy_cancel", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(rt.prototype, "slider", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(rt.prototype, "slider_sp", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(rt.prototype, "gameDataInstance", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = rt)) || at));
    i._RF.pop()
}
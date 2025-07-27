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
import * as D from "./cv.js";
import * as x from "./TagCom.js";
import * as w from "./CustomToggle.js";
import * as S from "./InsuranceData.js";
import * as C from "./InsuranceOutsCardItem.js";
import * as v from "./TableView.js";
import * as P from "./CurrencyValue.js";
import * as A from "./GameSceneInstance.js";
import * as N from "./GameSceneInstance.js";
import * as B from "./AudioComp.js";

function main() {
    var M, R, O, z, V, k, U, G, E, F, L, H, X, W, q, Y, K, j, $, J, Q, Z, tt, et, nt, it, st, at, rt, ot, lt, _t, ut, ht, ct, gt, dt, pt, mt, bt, It, ft, Tt, yt, Dt, xt, wt, St, Ct, vt, Pt, At, Nt, Bt, Mt, Rt, Ot, zt, Vt, kt, Ut, Gt, Et, Ft, Lt, Ht, Xt, Wt, qt, Yt, Kt, jt, $t, Jt, Qt, Zt, te, ee, ne, ie, se, ae, re, oe, le, _e, ue, he, ce, ge, de, pe, me, be, Ie;
    i._RF.push({}, "8e433+1r8FBar+6Sgh+Op5q", "InsuranceNew", void 0);
    const {
        ccclass: fe,
        property: Te
    } = u;
    t("InsuranceNew", (M = Te(s), R = Te(s), O = Te(s), z = Te(s), V = Te(a), k = Te(a), U = Te(a), G = Te(a), E = Te(a), F = Te(a), L = Te(a), H = Te(r), X = Te(r), W = Te(r), q = Te(r), Y = Te(o), K = Te(o), j = Te(o), $ = Te(o), J = Te(o), Q = Te(o), Z = Te(o), tt = Te(o), et = Te(o), nt = Te(o), it = Te(o), st = Te(o), at = Te(o), rt = Te(o), ot = Te(o), lt = Te(o), _t = Te(o), ut = Te(l), ht = Te(l), ct = Te(l), gt = Te(l), dt = Te(l), pt = Te(_), mt = Te(_), bt = Te(_), It = Te(_), ft = Te(P), Tt = Te(P), yt = Te(P), Dt = Te(P), xt = N("GameDataInstance"), fe(((Ie = class extends h {
        constructor(...t) {
            super(...t), n(this, "prefab_allin_info_item", Ct, this), n(this, "prefab_public_cards_item", vt, this), n(this, "prefab_other_cards_item", Pt, this), n(this, "prefab_outs_cards_item", At, this), n(this, "panel", Nt, this), n(this, "panel_shield", Bt, this), n(this, "panel_self", Mt, this), n(this, "panel_detail", Rt, this), n(this, "panel_toggle", Ot, this), n(this, "panel_self_img_line_1", zt, this), n(this, "panel_self_img_line_2", Vt, this), n(this, "rtxt_other_cards", kt, this), n(this, "rtxt_left_cards", Ut, this), n(this, "rtxt_select_outs", Gt, this), n(this, "rtxt_odds_rate", Et, this), n(this, "txt_chips_insurance", Ft, this), n(this, "txt_chips_pot", Lt, this), n(this, "txt_chips_invest", Ht, this), n(this, "txt_time_price", Xt, this), n(this, "txt_time_down", Wt, this), n(this, "txt_tips_self", qt, this), n(this, "txt_tips_other", Yt, this), n(this, "txt_tips_waitting", Kt, this), n(this, "txt_tips_no_outs", jt, this), n(this, "txt_title", $t, this), n(this, "txt_pub_cards", Jt, this), n(this, "txt_left_time_word", Qt, this), n(this, "txt_plan_word", Zt, this), n(this, "btn_buy_close_txt", te, this), n(this, "txt_btn_detail", ee, this), n(this, "txt_btn_ensure", ne, this), n(this, "txt_btn_cancel", ie, this), n(this, "btn_addTime", se, this), n(this, "btn_detail", ae, this), n(this, "btn_buy_ensure", re, this), n(this, "btn_buy_cancel", oe, this), n(this, "btn_buy_close", le, this), n(this, "scrollview_allin_info", _e, this), n(this, "scrollview_public_cards", ue, this), n(this, "scrollview_other_cards", he, this), n(this, "scrollview_outs_cards", ce, this), n(this, "insurance_currencyValue", ge, this), n(this, "pot_currencyValue", de, this), n(this, "invest_currencyValue", pe, this), n(this, "time_price_currencyValue", me, this), this._insuranceData = null, this._bInit = !1, this._nChipsInsurance = 0, this._nChipsPot = 0, this._nChipsInvest = 0, this._nInsurePay = 0, this._nInsureOdds = 0, this._bShowingAction = !1, this._bHidingAction = !1, this._nInsuranceTimeDown = 0, this._nNoOutsTimeDown = 0, this._nBuyBackAmount = 0, this._bTurnInsurance = !1, this._nMaxInsuredAmount = 0, this._nMaxRealInsuredAmount = 0, this._bOverMaxRealInsuredAmount = !1, this._vToggleInsuredPay = [], this._vToggleInsuredPayValue = [], this._btn_ensure_src_frame = null, this._btn_cancel_src_frame = null, this.nodeUITransform = null, this.parentNodeUITransform = null, this.panel_self_img_line_1_uiTransform = null, this.panel_self_img_line_2_uiTransform = null, this.panelUITransform = null, n(this, "gameDataInstance", be, this)
        }
        init() {
            if (this._bInit) return;
            this._bInit = !0, this.scrollview_allin_info.getComponent(v).generatePoolInst(2), this.scrollview_public_cards.getComponent(v).generatePoolInst(4), this.scrollview_other_cards.getComponent(v).generatePoolInst(3), this.scrollview_outs_cards.getComponent(v).generatePoolInst(2), this.node.active = !1
        }
        bindDataTarget(t) {
            this._insuranceData = t
        }
        autoShow(t = !0, e) {
            if (D.appConfig.getGameConfig().isAutoCancelInsurrance) return void this._reqNotBuy();
            if (this.node.active || this._bShowingAction || this._bHidingAction) return;
            D.AudioMgr.playEffectByAudioCompInGameCash(B.Instance().setUrl("zh_CN/game/dzpoker/audio/insure_confirm").setRoomId(this.gameDataInstance.tRoomData.u32RoomId));
            let n = this.parentNodeUITransform.width,
                i = this.parentNodeUITransform.height;
            n <= 0 && (n = c.getVisibleSize().width), i <= 0 && (i = c.getVisibleSize().height);
            let s = g((this.nodeUITransform.anchorX - this.parentNodeUITransform.anchorX) * n, (this.nodeUITransform.anchorY - this.parentNodeUITransform.anchorY) * i, 0);
            t ? (this.node.active = !0, d.stopAllByTarget(this.node), this.node.setPosition(s), D.action.removeShowActionShieldLayer(this.node), D.action.showAction(this.node, D.action.eMoveActionDir.EMAD_TO_LEFT, D.action.eMoveActionType.EMAT_FADE_IN, D.action.delay_type.FAST, ((t, e) => {
                this._bShowingAction = !0
            }), ((t, e) => {
                this._bShowingAction = !1
            }))) : (this.node.active = !0, d.stopAllByTarget(this.node), this.node.setPosition(s), this._bShowingAction = !1, D.action.removeShowActionShieldLayer(this.node)), this._updateView(e)
        }
        autoHide(t = !0) {
            if (!this.node.parent || !this.node.active) return;
            let e = () => {
                    this._bShowingAction = !1, d.stopAllByTarget(this.node), D.action.removeShowActionShieldLayer(this.node), y.getScheduler().unscheduleAllForTarget(this.node)
                },
                n = this.parentNodeUITransform.width,
                i = this.parentNodeUITransform.height;
            n <= 0 && (n = c.getVisibleSize().width), i <= 0 && (i = c.getVisibleSize().height);
            let s = g((this.nodeUITransform.anchorX - this.parentNodeUITransform.anchorX) * n, (this.nodeUITransform.anchorY - this.parentNodeUITransform.anchorY) * i, 0);
            t && !this._bHidingAction ? (e(), this.node.setPosition(s), D.action.showAction(this.node, D.action.eMoveActionDir.EMAD_TO_RIGHT, D.action.eMoveActionType.EMAT_FADE_OUT, D.action.delay_type.FAST, ((t, e) => {
                this._bHidingAction = !0
            }), ((t, e) => {
                this._bHidingAction = !1
            }))) : (e(), this.node.setPosition(s), this.node.active = !1, this._bHidingAction = !1)
        }
        loadButtonFrames() {
            this._btn_ensure_src_frame = this.btn_buy_ensure.getComponent(p).spriteFrame, this._btn_cancel_src_frame = this.btn_buy_cancel.getComponent(p).spriteFrame
        }
        onLoad() {
            this.nodeUITransform = this.node.getComponent(m), this.parentNodeUITransform = this.node.parent.getComponent(m), this.panel_self_img_line_1_uiTransform = this.panel_self_img_line_1.getComponent(m), this.panel_self_img_line_2_uiTransform = this.panel_self_img_line_2.getComponent(m), D.resMgr.adaptWidget(this.node), this.loadButtonFrames(), this.btn_buy_ensure.node.on("click", (t => {
                D.AudioMgr.playButtonSound("button_click"), this._reqBuy()
            }), this), this.btn_buy_cancel.node.on("click", (t => {
                D.AudioMgr.playButtonSound("button_click"), this._reqNotBuy()
            }), this), this.btn_buy_close.node.on("click", (t => {
                D.AudioMgr.playButtonSound("button_click"), this._reqNotBuy()
            }), this), this.btn_addTime.node.on("click", (t => {
                this._reqAddInsuranceTime()
            }), this), this.btn_detail.node.on("click", (t => {
                D.AudioMgr.playButtonSound("button_click"), this._onClickBtnDetail()
            }), this);
            let t = this.btn_detail.getComponent(x);
            if (t || (t = this.btn_detail.addComponent(x)), t.reset(), this.panel_toggle)
                for (let t = 0; t < this.panel_toggle.children.length; ++t) {
                    let e = this.panel_toggle.children[t].getComponent(w),
                        n = e.node.getComponent(x);
                    switch (n || (n = e.node.addComponent(x)), t) {
                        case 0:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_ThirdPot;
                            break;
                        case 1:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_HalfPot;
                            break;
                        case 2:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_FullPot;
                            break;
                        case 3:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_EighthPot;
                            break;
                        case 4:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_FifthPot;
                            break;
                        case 5:
                            n.nTag = S.InsurancePayToggleIdx.E_IPT_IDX_BreakEven
                    }
                    e.node.on("toggle", this._onToggleGroupEvent, this), this._vToggleInsuredPay.push(e), this._vToggleInsuredPayValue.push(0)
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
            D.MessageCenter.register("update_insurance_time", this._onMsgUpdateInsuranceTime.bind(this), this.node), D.MessageCenter.register("ChangeCard_onClickCardFace", this._onMsgChangeCardFace.bind(this), this.node)
        }
        _unregisterEvent() {
            D.MessageCenter.unregister("update_insurance_time", this.node), D.MessageCenter.unregister("ChangeCard_onClickCardFace", this.node)
        }
        _updateView(t) {
            this._resetAllUI(), this._updateStaticTxt(), this._updateViewPerspective(), this._resetInsuranceTimeDown(t), this._resetNoOutsTimeDown(this._insuranceData.getDataInsurance().NoOutsTimeOut), this._updateInsuranceTimeDownPrice(), this._setPotInfo(this._insuranceData.getDataInsurance()), this._calculateMaxRealInsured(), this._updateInsurePay(), this._updateDetailTxt(), this._checkBuyBackTip(), this._updateAllInInfo(), this._updatePublicCards(), this._updateOtherCards(), this._updateOutsCards(), this._insuranceData.getViewMode() === S.InsuranceViewMode.VIEW_REPLAY && this._updateViewExReplay()
        }
        _updateViewExReplay() {
            if (this.txt_title.string = D.config.getStringData("UITitle123"), this._resetNoOutsTimeDown(0), this._resetInsuranceTimeDown(0), this.panel_shield.active = !0, this._insuranceData.getDataInsuranceReplay().isBuyInsurance) {
                let t = D.Number(this._insuranceData.getDataInsuranceReplay().option) - 1;
                if (t >= 0 && t < this._vToggleInsuredPay.length) this._vToggleInsuredPay[t].check();
                else {
                    let t = D.StringTools.clientGoldByServer(this._insuranceData.getDataInsuranceReplay().insuredAmounts);
                    t = Math.min(t, this._nMaxRealInsuredAmount);
                    for (let e = 0; e < this._vToggleInsuredPay.length; ++e) {
                        let n = this._getFixedInsurePayByToggleIdx(e);
                        if (t = this._getRealGameNumberDown(t, this._insuranceData.getDataIsMirco()), n === t) {
                            this._vToggleInsuredPay[e].check();
                            break
                        }
                    }
                }
            }
            if (this._insuranceData.getDataInsurance().outs.length > 0) {
                let t = this._insuranceData.getDataInsuranceReplay().isBuyInsurance;
                this.btn_buy_ensure.enabled = t, this.btn_buy_ensure.interactable = t, this.btn_buy_cancel.enabled = !t, this.btn_buy_cancel.interactable = !t, this.setButtonFrames(t)
            } else {
                this.btn_buy_ensure.node.active = !1, this.btn_buy_cancel.node.active = !1, this.btn_buy_close.node.active = !0;
                let t = D.config.getStringData("tips_mail_btn_deal_0");
                this.btn_buy_close_txt.string = t
            }
        }
        setButtonFrames(t) {
            this._btn_ensure_src_frame && this._btn_cancel_src_frame && (this.btn_buy_ensure.getComponent(p).spriteFrame = t ? this._btn_ensure_src_frame : this._btn_cancel_src_frame, this.btn_buy_cancel.getComponent(p).spriteFrame = t ? this._btn_cancel_src_frame : this._btn_ensure_src_frame)
        }
        _resetAllUI() {
            this._resetNoOutsTimeDown(0), this._resetInsuranceTimeDown(0), this._updateInsuranceTimeDownPrice(), this._setChipsInsureNum(0), this._setChipsPotNum(0), this._setChipsInvestNum(0), this._nInsurePay = 0, this._nInsureOdds = 0, this._resetToggleGroupStatusAll(), this._updateInsurePay(!0), this._updateDetailTxt(!0), this.resetShowHideDetail(), this.activePanelDetail(!1), D.resMgr.setSpriteFrame(this.btn_detail.node, "zh_CN/common/icon/btn_fold_down"), this.txt_tips_self.string = "", this.txt_tips_self.node.active = !1, this.txt_tips_other.string = "", this.txt_tips_other.node.active = !1, this.btn_buy_ensure.node.active = !0, this.btn_buy_cancel.node.active = !0, this.revertButtonFrames(), this.btn_buy_close.node.active = !1, this.txt_tips_no_outs.node.active = !1, this.txt_tips_waitting.node.active = !1
        }
        resetShowHideDetail() {
            this.btn_detail.getComponent(x).reset()
        }
        revertButtonFrames() {
            this._btn_ensure_src_frame && this._btn_cancel_src_frame && (this.btn_buy_ensure.getComponent(p).spriteFrame = this._btn_ensure_src_frame, this.btn_buy_cancel.getComponent(p).spriteFrame = this._btn_cancel_src_frame)
        }
        _updateViewPerspective() {
            let t = this._insuranceData.getDataIsSelfBuy();
            this.panel_shield.active = !t, this.panel_self.active = t, this.txt_tips_waitting.node.active = !t
        }
        _getSelectOutsCardTag() {
            let t = [];
            for (let e = 0; e < this._insuranceData.getDataOutsCards().length; ++e) t.push(this._insuranceData.getDataOutsCards()[e].outs_id);
            return t
        }
        _getCurrentRate() {
            let t = 0,
                e = this._insuranceData.getDataInsurance().outs.length;
            return e > 0 && (t = D.StringTools.div(this._insuranceData.getDataInsurance().leftCards, e), t = D.StringTools.times(t, .95), t = D.StringTools.minus(t, 1), t = D.StringTools.toFixed(t, 1, D.StringTools.RoundingMode.ROUND_DOWN), t = Math.max(0, t)), t
        }
        _getInsuranceByToggleIdx(t) {
            let e = 0,
                n = this._getCurrentRate();
            if (n > 0) switch (t) {
                case S.InsurancePayToggleIdx.E_IPT_IDX_ThirdPot:
                    e = D.StringTools.div(this._nChipsInsurance, 3), e = D.StringTools.div(e, n);
                    break;
                case S.InsurancePayToggleIdx.E_IPT_IDX_HalfPot:
                    e = D.StringTools.div(this._nChipsInsurance, 2), e = D.StringTools.div(e, n);
                    break;
                case S.InsurancePayToggleIdx.E_IPT_IDX_FullPot:
                    e = D.StringTools.div(this._nChipsInsurance, n);
                    break;
                case S.InsurancePayToggleIdx.E_IPT_IDX_EighthPot:
                    e = D.StringTools.div(this._nChipsInsurance, 8), e = D.StringTools.div(e, n);
                    break;
                case S.InsurancePayToggleIdx.E_IPT_IDX_FifthPot:
                    e = D.StringTools.div(this._nChipsInsurance, 5), e = D.StringTools.div(e, n);
                    break;
                case S.InsurancePayToggleIdx.E_IPT_IDX_BreakEven:
                    e = D.StringTools.div(this._nChipsInvest, n)
            }
            return D.Number(e)
        }
        _getFixedInsurePayByToggleIdx(t) {
            let e = 0;
            return t >= 0 && t < this._vToggleInsuredPayValue.length && (e = this._vToggleInsuredPayValue[t]), e
        }
        _updateStaticTxt() {
            this.txt_title.string = D.config.getStringData("Insurance_bg_title_text"), this.txt_left_time_word.string = D.config.getStringData("Insurance_bg_signScore_text_0"), this.setCommunityText();
            {
                this.txt_plan_word.string = D.config.getStringData("Insurance_bg_option_text");
                let t = 20,
                    e = D.resMgr.getLabelStringSize(this.txt_plan_word).width,
                    n = 0 - t - this.panel_self_img_line_1.position.x - e / 2,
                    i = 0 - t - this.panel_self_img_line_1.position.x - e / 2;
                this.panel_self_img_line_1_uiTransform.setContentSize(b(n, this.panel_self_img_line_1_uiTransform.height)), this.panel_self_img_line_2_uiTransform.setContentSize(b(i, this.panel_self_img_line_2_uiTransform.height));
                for (let t = 0; t < this._vToggleInsuredPay.length; ++t) {
                    let e = this._vToggleInsuredPay[t].node.getChildByName("txt_title").getComponent(o),
                        n = this._vToggleInsuredPay[t].node.getComponent(x),
                        i = D.config.getStringData(`Insurance_bg_self_panel_toggle_${n.nTag}`);
                    e.string = D.StringTools.calculateAutoWrapString(e.node, i), this.setTitleWrap(e, i)
                }
                this.setBtnsText()
            }
            this.txt_tips_waitting.string = D.config.getStringData("Insurance_bg_waiting_text")
        }
        setCommunityText() {
            this.txt_pub_cards.string = D.config.getStringData("Insurance_bg_pulbicWord_textBg_pulbicWord_text")
        }
        setTitleWrap(t, e) {
            t.string = D.StringTools.calculateAutoWrapString(t.node, e)
        }
        setBtnsText() {
            this.txt_btn_detail.string = D.config.getStringData("Insurance_bg_detail_btn_text"), this.txt_btn_ensure.string = D.config.getStringData("Insurance_bg_self_panel_buy_button"), this.txt_btn_cancel.string = D.config.getStringData("Insurance_bg_self_panel_noBuy_button")
        }
        setBtnDetailTextColor(t) {
            this.txt_btn_detail.node.getComponent(I).color = t ? f.WHITE : T(127, 127, 127, 255)
        }
        _getColorString(t) {
            let e = new f(f.WHITE);
            return t > 0 ? e = D.tools.getWinColor() : t < 0 && (e = D.tools.getLoseColor()), D.StringTools.formatC("<color=#%s>%s</color>", e.toHEX("#rrggbb"), D.String(t))
        }
        _getColor(t) {
            let e = new f(f.WHITE);
            return t > 0 ? e = this.getWinColor() : t < 0 && (e = this.getLoseColor()), e
        }
        getWinColor() {
            return D.tools.getWinColor()
        }
        getLoseColor() {
            return D.tools.getLoseColor()
        }
        _updateAllInInfo() {
            this._resetDataScrollView(this.scrollview_allin_info);
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
            let e = this.scrollview_allin_info.getComponent(v);
            e.bindData(t), e.reloadView()
        }
        _resetDataScrollView(t) {
            let e = t.node.children[0];
            if (null == e) return;
            let n = e.children.length;
            for (let t = 0; t < n; t++) {
                let n = e.children[t];
                null != n && (n.active = !1)
            }
        }
        _updatePublicCards() {
            this._resetDataScrollView(this.scrollview_public_cards);
            let t = [];
            for (let e = 0; e < this._insuranceData.getDataPublicCards().length; ++e) t.push(this._insuranceData.getDataPublicCards()[e]);
            let e = {
                    prefab_type: 0,
                    prefab_component: "InsurancePublicCardItem",
                    prefab_datas: t
                },
                n = this.scrollview_public_cards.getComponent(v);
            n.cellScale = this.getPublicCardsCellScale(), n.bindData(e), n.reloadView()
        }
        getPublicCardsCellScale() {
            return .68
        }
        _updateOtherCards() {
            this._resetDataScrollView(this.scrollview_other_cards);
            let t = [],
                e = 0;
            if (this._insuranceData.getDataOtherCards().length > 0) {
                let n = 0,
                    i = this.prefab_other_cards_item.data.children.length,
                    s = this._insuranceData.getDataOtherCards()[0].data.inOuts;
                for (let a = 0, r = 0; a < this._insuranceData.getDataOtherCards().length; ++a, ++r) {
                    let o = this._insuranceData.getDataOtherCards()[a].data.inOuts;
                    o && ++e, r % i != 0 && o === s || (n = t.length, t[n] = new Array, r = 0), s = o, t[n].push(this._insuranceData.getDataOtherCards()[a])
                }
            }
            let n = {
                    prefab_type: 0,
                    prefab_component: "InsuranceOtherCardItem",
                    prefab_datas: t
                },
                i = this.scrollview_other_cards.getComponent(v);
            i.bindData(n), i.reloadView(), this.setTxtOtherCards(e)
        }
        _updateOutsCards() {
            this._resetDataScrollView(this.scrollview_outs_cards);
            let t = 0,
                e = this.prefab_outs_cards_item.data.children.length,
                n = [];
            for (let i = 0; i < this._insuranceData.getDataOutsCards().length; ++i) {
                i % e == 0 && (t = n.length, n[t] = new Array);
                let s = new C;
                s.index = i, s.gameid = this._insuranceData.getDataGameID(), s.outItem = this._insuranceData.getDataOutsCards()[i], s.isCheck = !0, s.clickEnable = !1, s.gameDataInstance = this.gameDataInstance, n[t].push(s)
            }
            let i = {
                    prefab_type: 0,
                    prefab_component: "InsuranceOutsCardItem",
                    prefab_datas: n
                },
                s = this.scrollview_outs_cards.getComponent(v);
            s.bindData(i), s.reloadView(), this.setTxtSelectOuts(this._insuranceData.getDataOutsCards().length), this.setTxtLeftCards(this._insuranceData.getDataInsurance().leftCards), this.setTxtOddsRate(this._getCurrentRate())
        }
        _onClickBtnDetail() {
            D.AudioMgr.playButtonSound("button_click");
            let t = this.btn_detail.getComponent(x);
            t.bTag = !t.bTag;
            let e = "zh_CN/common/icon/btn_fold_down";
            t.bTag && (e = "zh_CN/common/icon/btn_fold_up"), D.resMgr.setSpriteFrame(this.btn_detail.node, e), this.activePanelDetail(t.bTag)
        }
        activePanelDetail(t) {
            this.panel_detail.active = t
        }
        _reqBuy() {
            {
                let t = this._getSelectOutsCardTag();
                if (t.length > 0) {
                    let e = 0,
                        n = this._getToggleGroupCheckIndex();
                    if (e = n >= 0 ? this._nInsurePay : this._bOverMaxRealInsuredAmount ? this._nMaxRealInsuredAmount : 0, e = this._getRealGameNumberDown(e, this._insuranceData.getDataIsMirco()), e <= 0) return;
                    D.gameNet.RequestBuyInsurance(this.gameDataInstance.tRoomData.u32GameID, this.gameDataInstance.tRoomData.u32RoomId, t, e, !0, n + 1)
                } else this._reqNotBuy()
            }
        }
        _reqNotBuy() {
            var t, e;
            let n = this._getSelectOutsCardTag();
            D.gameNet.RequestBuyInsurance(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID, null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, n, 0, !1, 0)
        }
        _reqAddInsuranceTime() {
            var t, e;
            D.gameNet.RequestAddInsuranceTime(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID, null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId)
        }
        _onMsgUpdateInsuranceTime(t) {
            if (A.isInvalidGameDataMultiWindow(t.gameData, this.gameDataInstance)) return;
            const e = t.nLeftTime;
            this._resetInsuranceTimeDown(e), this._updateInsuranceTimeDownPrice()
        }
        _onMsgChangeCardFace() {
            this.scrollview_allin_info.getComponent(v).refreshView(), this.scrollview_public_cards.getComponent(v).refreshView(), this.scrollview_other_cards.getComponent(v).refreshView(), this.scrollview_outs_cards.getComponent(v).refreshView()
        }
        _resetInsuranceTimeDown(t) {
            this._nInsuranceTimeDown = Math.max(0, D.Number(t)), this._setInsuranceTimeDown(this._nInsuranceTimeDown), this.unschedule(this._onScheduleInsuranceTimeDown), this._nInsuranceTimeDown > 0 && this.schedule(this._onScheduleInsuranceTimeDown, 1)
        }
        _setInsuranceTimeDown(t) {
            t = D.Number(t), this.txt_time_down.string = D.StringTools.formatC("%ds", t)
        }
        _onScheduleInsuranceTimeDown() {
            this._nInsuranceTimeDown -= 1, this._nInsuranceTimeDown <= 0 && (this._nInsuranceTimeDown = 0, this.unschedule(this._onScheduleInsuranceTimeDown), this.autoHide()), this._setInsuranceTimeDown(this._nInsuranceTimeDown)
        }
        _resetNoOutsTimeDown(t) {
            this._insuranceData.getDataIsSelfBuy() ? (this._nNoOutsTimeDown = Math.max(0, D.Number(t)), this._setNoOutsTimeDown(this._nNoOutsTimeDown), this.unschedule(this._onScheduleNoOutsTimeDown), this._nNoOutsTimeDown > 0 && this.schedule(this._onScheduleNoOutsTimeDown, 1)) : (this._nNoOutsTimeDown = 0, this.unschedule(this._onScheduleNoOutsTimeDown))
        }
        _setNoOutsTimeDown(t) {
            if (this.btn_buy_close.node.active = D.Number(t) > 0, this.btn_buy_close.node.active) {
                this.btn_buy_ensure.node.active = !1, this.btn_buy_cancel.node.active = !1;
                let e = D.config.getStringData("tips_mail_btn_deal_0");
                this.btn_buy_close_txt.string = D.StringTools.formatC("%s(%d)", e, t)
            }
        }
        _onScheduleNoOutsTimeDown() {
            this._nNoOutsTimeDown -= 1, this._nNoOutsTimeDown <= 0 && (this._nNoOutsTimeDown = 0, this.unschedule(this._onScheduleNoOutsTimeDown), this.autoHide()), this._setNoOutsTimeDown(this._nNoOutsTimeDown)
        }
        _updateInsuranceTimeDownPrice() {
            let t = this.gameDataInstance.tRoomData.pkPayMoneyItem.insuranceCount,
                e = this.gameDataInstance.tRoomData.pkPayMoneyItem.insuranceCountsFee,
                n = 0,
                i = 0,
                s = !0;
            if (D.StringTools.getArrayLength(e) > 0) {
                for (let i = 0; i < e.length; ++i)
                    if (t >= e[i].startCount && t <= e[i].endCount) {
                        n = i;
                        break
                    } i = e[n].needCoin, s = t <= e.length
            }
            this.txt_time_price.string = D.StringTools.serverGoldToShowString(i), this.time_price_currencyValue && this.time_price_currencyValue.updateVal(D.StringTools.serverGoldToShowString(i), this.gameDataInstance.tRoomData.currency.type), this.btn_addTime.interactable = s, this.btn_addTime.enabled = s
        }
        _setPotInfo(t) {
            this._setChipsInsureNum(D.StringTools.clientGoldByServer(D.StringTools.plus(t.pot_amount, t.limit_amount))), this._setChipsPotNum(D.StringTools.clientGoldByServer(t.total_pot)), this._setChipsInvestNum(D.StringTools.clientGoldByServer(t.total_inv_amount)), this._bTurnInsurance = t.public_cards.length < 4;
            let e = 0;
            if (0 !== t.limit_amount) {
                let n = this._getCurrentRate();
                0 === n ? e = this._insuranceData.getDataIsMirco() ? 1 : 100 : (e = D.StringTools.div(t.limit_amount, n), e = Math.ceil(e))
            }
            this._nMaxInsuredAmount = D.StringTools.clientGoldByServer(D.StringTools.minus(t.pot_amount, e)), this._nMaxInsuredAmount = Math.max(0, this._nMaxInsuredAmount), this._nBuyBackAmount = D.StringTools.clientGoldByServer(e), this._nBuyBackAmount = this._getRealGameNumberDown(this._nBuyBackAmount, this._insuranceData.getDataIsMirco())
        }
        _calculateMaxRealInsured() {
            let t = this._getInsuranceByToggleIdx(S.InsurancePayToggleIdx.E_IPT_IDX_FullPot),
                e = D.StringTools.div(this._nMaxInsuredAmount, 3);
            this._bTurnInsurance ? this._nMaxRealInsuredAmount = Math.min(t, e) : this._nMaxRealInsuredAmount = Math.min(t, this._nMaxInsuredAmount)
        }
        _updateInsurePay(t = !1) {
            for (let e = 0; e < this._vToggleInsuredPay.length; ++e) {
                let n = 0,
                    i = this._vToggleInsuredPay[e].getComponent(x),
                    s = this._vToggleInsuredPay[e].node.getChildByName("txt_num").getComponent(o);
                if (!t) {
                    n = this._getInsuranceByToggleIdx(i.nTag), n = this._getRealGameNumberDown(n, this._insuranceData.getDataIsMirco());
                    let t = n > 0 && n <= this._nMaxRealInsuredAmount;
                    this._resetToggleGroupStatusByIdx(e, t)
                }
                this._vToggleInsuredPayValue[e] = n, s.string = D.StringTools.numberToShowString(n)
            }
        }
        getLabelHitProfitV(t) {
            return t.getChildByName("txt_hit_profit_v").getComponent(o)
        }
        getLabelHitProfitK(t) {
            return t.getChildByName("txt_hit_profit_k").getComponent(o)
        }
        getLabelNotHitProfitV(t) {
            return t.getChildByName("txt_not_hit_profit_v").getComponent(o)
        }
        getLabelNotHitProfitK(t) {
            return t.getChildByName("txt_not_hit_profit_k").getComponent(o)
        }
        _updateDetailTxt(t = !1) {
            let e = this.panel_detail;
            for (let n = 0; n < e.children.length; ++n) {
                let i = e.getChildByName(`node_${n}`);
                if (!i) continue;
                let s = this._getFixedInsurePayByToggleIdx(n);
                s = Math.min(s, this._nMaxRealInsuredAmount), s = this._getRealGameNumberDown(s, this._insuranceData.getDataIsMirco());
                let a = this._getInsureOddsByPay(s);
                {
                    let e = 0;
                    !t && a > 0 && (e = D.StringTools.minus(a, this._nChipsInvest), e = this._getRealGameNumberHalfUp(e, this._insuranceData.getDataIsMirco()));
                    let n = this.getLabelHitProfitK(i),
                        s = this.getLabelHitProfitV(i);
                    n.string = D.config.getStringData("Insurance_bg_hit_profit_text"), s.string = D.StringTools.numberToShowString(e), s.node.getComponent(I).color = this._getColor(e);
                    let r = 5,
                        o = D.resMgr.getLabelStringSize(n),
                        l = D.resMgr.getLabelStringSize(s),
                        _ = o.width + r + l.width,
                        u = -this.nodeUITransform.width * this.nodeUITransform.anchorX + (this.nodeUITransform.width - _) / 2,
                        h = n.node.position.y;
                    u += o.width * n.node.getComponent(m).anchorX, n.node.setPosition(u, h), u += o.width * (1 - n.node.getComponent(m).anchorX), u += r, u += l.width * s.node.getComponent(m).anchorX, s.node.setPosition(u, h)
                } {
                    let e = 0;
                    if (!t && a > 0) {
                        let t = D.StringTools.clientGoldByServer(this._insuranceData.getDataInsurance().buy_amount);
                        t = this._getRealGameNumberDown(t, this._insuranceData.getDataIsMirco()), e = this._nChipsInsurance, e = D.StringTools.minus(e, this._nChipsInvest), e = D.StringTools.minus(e, t), e = D.StringTools.minus(e, this._nBuyBackAmount), e = D.StringTools.minus(e, s), e = this._getRealGameNumberHalfUp(e, this._insuranceData.getDataIsMirco())
                    }
                    let n = this.getLabelNotHitProfitK(i),
                        r = this.getLabelNotHitProfitV(i);
                    n.string = D.config.getStringData("Insurance_bg_not_hit_profit_text"), r.string = D.StringTools.numberToShowString(e), r.node.getComponent(I).color = this._getColor(e);
                    let o = 5,
                        l = D.resMgr.getLabelStringSize(n),
                        _ = D.resMgr.getLabelStringSize(r),
                        u = l.width + o + _.width,
                        h = -this.nodeUITransform.width * this.nodeUITransform.anchorX + (this.nodeUITransform.width - u) / 2,
                        c = n.node.position.y;
                    h += l.width * n.node.getComponent(m).anchorX, n.node.setPosition(h, c), h += l.width * (1 - n.node.getComponent(m).anchorX), h += o, h += _.width * r.node.getComponent(m).anchorX, r.node.setPosition(h, c);
                    const g = i.getComponent(m);
                    if (u > g.width) {
                        const t = g.width / u;
                        i.setScale(t, t)
                    } else i.setScale(1, 1)
                }
            }
        }
        _checkBuyBackTip() {
            let t = this._insuranceData.getDataOutsCards().length,
                e = this._getCurrentRate();
            if (t <= 0) {
                let t = D.config.getStringData("Insurance_bg_tips_no_outs_text");
                this.txt_tips_no_outs.string = D.StringTools.calculateAutoWrapString(this.txt_tips_no_outs.node, t), this.txt_tips_no_outs.node.active = !0
            }
            if (this._insuranceData.getDataIsSelfBuy()) {
                if (t > 0)
                    if (e <= 0) {
                        this.txt_tips_other.node.active = !0;
                        let t = D.config.getStringData("Insurance_bg_tips_no_rates_text");
                        this.txt_tips_other.string = D.StringTools.calculateAutoWrapString(this.txt_tips_other.node, t)
                    } else if (this._bOverMaxRealInsuredAmount = !1, this._nMaxRealInsuredAmount > 0) {
                    for (let t = 0; t < this._vToggleInsuredPay.length; ++t) {
                        if (this._getFixedInsurePayByToggleIdx(t) > this._nMaxRealInsuredAmount) {
                            this._bOverMaxRealInsuredAmount = !0;
                            break
                        }
                    }
                    if (this._bOverMaxRealInsuredAmount) {
                        let t = "";
                        t = this._bTurnInsurance ? D.config.getStringData("Insurance_bg_tips_over_third_pot_text") : D.config.getStringData("Insurance_bg_tips_over_max_value_text");
                        let e = this._getRealGameNumberDown(this._nMaxRealInsuredAmount, this._insuranceData.getDataIsMirco());
                        t = D.StringTools.formatC(t, D.StringTools.numberToShowString(e)), this.txt_tips_other.node.active = !0, this.txt_tips_other.string = D.StringTools.calculateAutoWrapString(this.txt_tips_other.node, t)
                    }
                } else {
                    this._bOverMaxRealInsuredAmount = !0, this.txt_tips_other.node.active = !0;
                    let t = D.config.getStringData("Insurance_bg_tips_over_max_pot_text");
                    this.txt_tips_other.string = D.StringTools.calculateAutoWrapString(this.txt_tips_other.node, t)
                }
                if (this._nBuyBackAmount > 0) {
                    this.txt_tips_self.node.active = !0;
                    let t = D.StringTools.formatC(D.config.getStringData("UIGameSceneTips15"), D.StringTools.numberToShowString(this._nBuyBackAmount));
                    this.txt_tips_self.string = D.StringTools.calculateAutoWrapString(this.txt_tips_self.node, t)
                } {
                    let n = t > 0 && e > 0 && this._nMaxRealInsuredAmount > 0;
                    this.btn_detail.enabled = n, this.btn_detail.interactable = n, this.setBtnDetailTextColor(n)
                } {
                    let n = t > 0 && e > 0 && this._nMaxRealInsuredAmount > 0;
                    this.btn_buy_ensure.enabled = n, this.btn_buy_ensure.interactable = n
                }
                if (this._insuranceData.getViewMode() !== S.InsuranceViewMode.VIEW_REPLAY) {
                    let t = S.InsurancePayToggleIdx.E_IPT_IDX_BreakEven,
                        e = this._getInsuranceByToggleIdx(t);
                    e > 0 && e <= this._nMaxRealInsuredAmount && this._vToggleInsuredPay[t].check()
                }
            }
        }
        _resetToggleGroupStatusAll(t = !0) {
            for (let e = 0; e < this._vToggleInsuredPay.length; ++e) this._resetToggleGroupStatusByIdx(e, t)
        }
        _resetToggleGroupStatusByIdx(t, e = !0) {
            t < 0 || t >= this._vToggleInsuredPay.length || (this._vToggleInsuredPay[t].isChecked = !1, this._vToggleInsuredPay[t].setTouchEnable(e), this._updateToggleGroupTxtColorByIdx(t))
        }
        _getInsureOddsByPay(t) {
            let e = D.StringTools.times(t, this._getCurrentRate());
            return e = this._getRealGameNumberHalfUp(e, this._insuranceData.getDataIsMirco()), e
        }
        _getToggleGroupCheckIndex() {
            let t = -1;
            for (let e = 0; e < this._vToggleInsuredPay.length; ++e)
                if (this._vToggleInsuredPay[e].isChecked) {
                    t = e;
                    break
                } return t
        }
        _updateToggleGroupTxtColorAll() {
            for (let t = 0; t < this._vToggleInsuredPay.length; ++t) this._updateToggleGroupTxtColorByIdx(t)
        }
        _updateToggleGroupTxtColorByIdx(t) {}
        _onToggleGroupEvent(t) {
            if (this._nInsurePay = 0, this._getToggleGroupCheckIndex() >= 0) {
                let e = t.getComponent(x);
                this._nInsurePay = this._getFixedInsurePayByToggleIdx(e.nTag)
            }
            this._nInsureOdds = this._getInsureOddsByPay(this._nInsurePay), this._updateToggleGroupTxtColorAll()
        }
        setTxtOtherCards(t) {
            let e = D.StringTools.formatC(D.config.getStringData("Insurance_bg_other_cards_text"), D.String(t));
            D.StringTools.setRichTextString(this.rtxt_other_cards.node, e)
        }
        setTxtSelectOuts(t) {
            let e = D.StringTools.formatC(D.config.getStringData("Insurance_bg_select_outs_text"), D.String(t));
            D.StringTools.setRichTextString(this.rtxt_select_outs.node, e)
        }
        setTxtLeftCards(t) {
            let e = D.StringTools.formatC(D.config.getStringData("Insurance_bg_left_cards_text"), D.String(t));
            D.StringTools.setRichTextString(this.rtxt_left_cards.node, e)
        }
        setTxtOddsRate(t) {
            let e = D.StringTools.formatC(D.config.getStringData("Insurance_bg_odds_rate_text"), D.String(t));
            D.StringTools.setRichTextString(this.rtxt_odds_rate.node, e)
        }
        _setChipsInsureNum(t) {
            this._nChipsInsurance = t, this.txt_chips_insurance.string = this.getChipInsuranceText() + D.StringTools.numberToShowString(this._nChipsInsurance), this._layoutChipsPanel(), this.insurance_currencyValue && this.insurance_currencyValue.updateVal(t + "", this.gameDataInstance.tRoomData.currency.type)
        }
        getChipInsuranceText() {
            return D.config.getStringData("Insurance_bg_keTouBao_txt")
        }
        _setChipsPotNum(t) {
            this._nChipsPot = t, this.txt_chips_pot.string = this.getChipPotText() + D.StringTools.numberToShowString(this._nChipsPot), this._layoutChipsPanel(), this.pot_currencyValue && this.pot_currencyValue.updateVal(t + "", this.gameDataInstance.tRoomData.currency.type)
        }
        getChipPotText() {
            return D.config.getStringData("Insurance_bg_dichi_txt")
        }
        _setChipsInvestNum(t) {
            this._nChipsInvest = t, this.txt_chips_invest.string = this.getChipInvestText() + D.StringTools.numberToShowString(this._nChipsInvest), this._layoutChipsPanel(), this.invest_currencyValue && this.invest_currencyValue.updateVal(t + "", this.gameDataInstance.tRoomData.currency.type)
        }
        getChipInvestText() {
            return D.config.getStringData("Insurance_bg_touru_text")
        }
        _layoutChipsPanel() {
            let t = D.resMgr.getLabelStringSize(this.txt_chips_insurance).width,
                e = D.resMgr.getLabelStringSize(this.txt_chips_pot).width,
                n = D.resMgr.getLabelStringSize(this.txt_chips_invest).width,
                i = this.txt_chips_insurance.node.getComponent(m).anchorX,
                s = this.txt_chips_pot.node.getComponent(m).anchorX,
                a = this.txt_chips_invest.node.getComponent(m).anchorX,
                r = t + e + n;
            this.panelUITransform || (this.panelUITransform = this.panel.getComponent(m));
            let o = (this.panelUITransform.width - r) / 4,
                l = this.panelUITransform.width * (0 - this.panelUITransform.anchorX),
                _ = this.txt_chips_insurance.node.position.y;
            l += o + t * i, this.txt_chips_insurance.node.setPosition(l, _), l += t * (1 - i), l += o + e * s, this.txt_chips_pot.node.setPosition(l, _), l += e * (1 - s), l += o + n * a, this.txt_chips_invest.node.setPosition(l, _)
        }
        _getRealGameNumberDown(t, e) {
            let n = e ? 2 : 0;
            return D.StringTools.toFixed(t, n, D.StringTools.RoundingMode.ROUND_DOWN)
        }
        _getRealGameNumberUp(t, e) {
            let n = e ? 2 : 0;
            return D.StringTools.toFixed(t, n, D.StringTools.RoundingMode.ROUND_UP)
        }
        _getRealGameNumberHalfUp(t, e) {
            let n = e ? 2 : 0;
            return D.StringTools.toFixed(t, n, D.StringTools.RoundingMode.ROUND_HALF_UP)
        }
    }).gClassName = "InsuranceNew", Ct = e((St = Ie).prototype, "prefab_allin_info_item", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(St.prototype, "prefab_public_cards_item", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(St.prototype, "prefab_other_cards_item", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(St.prototype, "prefab_outs_cards_item", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(St.prototype, "panel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(St.prototype, "panel_shield", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(St.prototype, "panel_self", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(St.prototype, "panel_detail", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(St.prototype, "panel_toggle", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(St.prototype, "panel_self_img_line_1", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(St.prototype, "panel_self_img_line_2", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(St.prototype, "rtxt_other_cards", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(St.prototype, "rtxt_left_cards", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(St.prototype, "rtxt_select_outs", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(St.prototype, "rtxt_odds_rate", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(St.prototype, "txt_chips_insurance", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(St.prototype, "txt_chips_pot", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(St.prototype, "txt_chips_invest", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(St.prototype, "txt_time_price", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(St.prototype, "txt_time_down", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(St.prototype, "txt_tips_self", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(St.prototype, "txt_tips_other", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(St.prototype, "txt_tips_waitting", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(St.prototype, "txt_tips_no_outs", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(St.prototype, "txt_title", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(St.prototype, "txt_pub_cards", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(St.prototype, "txt_left_time_word", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(St.prototype, "txt_plan_word", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(St.prototype, "btn_buy_close_txt", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(St.prototype, "txt_btn_detail", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(St.prototype, "txt_btn_ensure", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(St.prototype, "txt_btn_cancel", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(St.prototype, "btn_addTime", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(St.prototype, "btn_detail", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(St.prototype, "btn_buy_ensure", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(St.prototype, "btn_buy_cancel", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(St.prototype, "btn_buy_close", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = e(St.prototype, "scrollview_allin_info", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(St.prototype, "scrollview_public_cards", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(St.prototype, "scrollview_other_cards", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(St.prototype, "scrollview_outs_cards", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = e(St.prototype, "insurance_currencyValue", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = e(St.prototype, "pot_currencyValue", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(St.prototype, "invest_currencyValue", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = e(St.prototype, "time_price_currencyValue", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = e(St.prototype, "gameDataInstance", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = St)) || wt));
    i._RF.pop()
}
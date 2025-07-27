import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./cv.js";
import * as D from "./GameReplay.js";
import * as S from "./Enum.js";
import * as w from "./ScrollViewReuse.js";
import * as I from "./RecordData.js";
import * as f from "./RecordData.js";
import * as v from "./RecordData.js";
import * as C from "./CurrencyValue.js";
import * as R from "./GameSceneInstance.js";
import * as G from "./GameSceneInstance.js";
import * as U from "./JackpotData.js";

function main() {
    var P, T, M, x, k, E, B, L, H, A, N, O, F, z, V, j, X, W, J, q, Z, Y, K, Q, $, tt, et, at, it, nt, st, ot, rt, lt, ht, dt, ct, _t, gt, ut, mt, pt, bt, yt, Dt, St, wt, It, vt, ft, Ct, Rt, Gt, Ut, Pt, Tt, Mt, xt, kt, Et, Bt, Lt, Ht, At, Nt, Ot, Ft, zt, Vt;
    i._RF.push({}, "08559/rj6xCwY/wbMNqn01t", "GameReview", void 0);
    const {
        ccclass: jt,
        property: Xt
    } = _;
    t("GameReview", (P = Xt(n), T = Xt(n), M = Xt(n), x = Xt(s), k = Xt(s), E = Xt(s), B = Xt(o), L = Xt(o), H = Xt(o), A = Xt(o), N = Xt(o), O = Xt(o), F = Xt(o), z = Xt(o), V = Xt(r), j = Xt(l), X = Xt(h), W = Xt(h), J = Xt(o), q = Xt(d), Z = Xt(d), Y = Xt(d), K = Xt(d), Q = Xt(d), $ = Xt(d), tt = Xt(d), et = Xt(d), at = Xt(d), it = Xt(o), nt = Xt(s), st = Xt(o), ot = Xt(c), rt = G("GameDataInstance"), jt(((Vt = class t extends g {
        constructor(...t) {
            super(...t), a(this, "prefab_review_item", dt, this), a(this, "prefab_game_replay", ct, this), a(this, "prefab_report", _t, this), a(this, "panel_main", gt, this), a(this, "panel_top", ut, this), a(this, "panel_bottom", mt, this), a(this, "txt_title", pt, this), a(this, "txt_serial_number", bt, this), a(this, "txt_pot_word", yt, this), a(this, "txt_insurance_word", Dt, this), a(this, "txt_jackpot_word", St, this), a(this, "txt_pot", wt, this), a(this, "txt_insurance", It, this), a(this, "txt_jackpot", vt, this), a(this, "panel_scrollview", ft, this), a(this, "slider", Ct, this), a(this, "slider_bg", Rt, this), a(this, "slider_sp", Gt, this), a(this, "txt_page", Ut, this), a(this, "btn_forceshow", Pt, this), a(this, "btn_sendout", Tt, this), a(this, "btn_audit", Mt, this), a(this, "btn_play", xt, this), a(this, "btn_collect", kt, this), a(this, "btn_first", Et, this), a(this, "btn_last", Bt, this), a(this, "btn_before", Lt, this), a(this, "btn_next", Ht, this), a(this, "txt_date", At, this), a(this, "jackpot_holder", Nt, this), a(this, "txt_total_jackpot", Ot, this), a(this, "panel_scrollview_widget", Ft, this), this._bInit = !1, this._svReuseView = null, this._sCurGameUUID = "", this._sGameSettlementUUID = "", this._vGameUUID = [], this._nCurGameUUIDIndex = -1, this._dataSourceType = S.EDST_NONE, this._nLastSliderProgress = 0, this._nSliderPerRatio = 1, this._shieldLayer = null, this._shieldLayer_card_act = null, this._bShowAudit = !1, this._bHasReplayData = !1, this._tGameReplay = null, this._nTopPanelFontSize = 0, this._scrollViewWidgetTopInitialOffset = 0, a(this, "gameDataInstance", zt, this)
        }
        static getSinglePrefabInst(e, a) {
            if (!(a instanceof n)) return null;
            let i = e.getChildByName(t.gClassName);
            if (!i) {
                i = u(a);
                const n = i.getComponent(t);
                if (e.addChild(i), !n) return i.destroy(), null
            }
            return i
        }
        isInit() {
            return this._bInit
        }
        onEnable() {
            this._shieldLayer && (this._shieldLayer.active = !0)
        }
        onDisable() {
            this._shieldLayer && (this._shieldLayer.active = !1)
        }
        autoShow(e, a, i, n = !0) {
            this._dataSourceType = e, this._vGameUUID = a || this._getGameuuids(), this._sGameSettlementUUID = this.gameDataInstance.tGameData.game_settlement_uuid, this._vGameUUID.length > 1 ? this._nSliderPerRatio = y.StringTools.div(1, this._vGameUUID.length - 1) : 1 === this._vGameUUID.length && (this._nSliderPerRatio = 1), this._shieldLayer || (i = i || y.Enum.ZORDER_TYPE.ZORDER_TOP, this.node.setSiblingIndex(i), this.node.name = t.gClassName, this._shieldLayer = y.action.createShieldLayer(this.node.parent, "shieldLayer-gameReview", i, m.BLACK, 76.5, (t => {
                this.autoHide.bind(this, !0)
            })), this._shieldLayer.setSiblingIndex(i), this.node.setSiblingIndex(this._shieldLayer.getSiblingIndex() + 1)), this._updateView(), this._bInit = !0, this._shieldLayer.active = !0, n ? y.action.showAction(this.node, y.action.eMoveActionDir.EMAD_TO_LEFT, y.action.eMoveActionType.EMAT_FADE_IN, y.action.delay_type.NORMAL, this._actFunc.bind(this), this._actFuncFinish.bind(this), 1 / p.getFrameRate()) : (this.node.active = !0, this._actFunc(null, null), this._actFuncFinish(null, null));
            let s = y.dataHandler.getUserData().getUserId(!0);
            y.httpHandler.requestGetFavoriteList(s, 1, this.gameDataInstance.tCollectPokerMapData.nPageNum, this.gameDataInstance)
        }
        autoHide(t = !0) {
            this.isInit() && this.node.active && (this._shieldLayer && (this._shieldLayer.active = !1), this._shieldLayer_card_act && (this._shieldLayer_card_act.active = !1), this._tGameReplay && this._tGameReplay.autoHide(!1), t ? y.action.showAction(this.node, y.action.eMoveActionDir.EMAD_TO_RIGHT, y.action.eMoveActionType.EMAT_FADE_OUT, y.action.delay_type.NORMAL) : this.node.active = !1)
        }
        beforePage() {
            if (y.AudioMgr.playButtonSound("button_click.mp3"), !this.isInit()) return;
            if (this._vGameUUID.length <= 1) return;
            let t = Math.max(0, y.StringTools.minus(this.slider.progress, this._nSliderPerRatio));
            this.slider.progress = t, this._updateSliderPercent()
        }
        nextPage() {
            if (y.AudioMgr.playButtonSound("button_click.mp3"), !this.isInit()) return;
            if (this._vGameUUID.length <= 1) return;
            let t = Math.min(1, y.StringTools.plus(this.slider.progress, this._nSliderPerRatio));
            this.slider.progress = t, this._updateSliderPercent()
        }
        firstPage() {
            y.AudioMgr.playButtonSound("button_click.mp3"), this.isInit() && (this._vGameUUID.length <= 1 || (this.slider.progress = 0, this._updateSliderPercent()))
        }
        lastPage() {
            y.AudioMgr.playButtonSound("button_click.mp3"), this.isInit() && (this._vGameUUID.length <= 1 || (this.slider.progress = 1, this._updateSliderPercent()))
        }
        setShowAudit(t) {
            this._bShowAudit = t, this.isInit() && this._onMsgUpdateDataHand(this.gameDataInstance)
        }
        onLoad() {
            if (y.config.IS_IPHONEX_SCREEN) {
                var t;
                let e = null == (t = this.panel_main) ? void 0 : t.getComponent(c);
                e && (e.top = y.config.FULLSCREEN_OFFSETY)
            }
            y.resMgr.adaptWidget(this.node, !0), y.MessageCenter.register("update_hand", this._onMsgUpdateDataHand.bind(this), this.node), y.MessageCenter.register("update_handMap", this._onMsgUpdateHandMap.bind(this), this.node), y.MessageCenter.register("game_replay_lastHand", this._onMsgLastHand.bind(this), this.node), y.MessageCenter.register("game_replay_nextHand", this._onMsgNextHand.bind(this), this.node), y.MessageCenter.register("game_replay_hide_sendout_shieldlayer", this._onMsgHideSendoutShieldLayer.bind(this), this.node), y.MessageCenter.register("show_Audit", this._onMsgShowAudit.bind(this), this.node), y.MessageCenter.register("on_replay_forceshow", this._onMsgForceShow.bind(this), this.node), y.MessageCenter.register("on_replay_sendout", this._onMsgSendOut.bind(this), this.node), this._registerOnTouchEndEvent(), this.panel_scrollview.node.on(s.EventType.SIZE_CHANGED, this.onPanelScrollViewChangedSize, this), this.btn_first.node.on("click", (t => {
                this.firstPage()
            }), this), this.btn_last.node.on("click", (t => {
                this.lastPage()
            }), this), this.btn_before.node.on("click", (t => {
                this.beforePage()
            }), this), this.btn_next.node.on("click", (t => {
                this.nextPage()
            }), this), this.txt_serial_number.node.on("click", this._onClickSerialNumber, this), this.btn_play.node.on("click", this._onClickPlay, this), this.btn_audit.node.on("click", this._onClickAudit, this), this.btn_collect.node.on("click", this._onClickCollect, this), this.btn_forceshow.node.on("click", this._onClickForceShow, this), this.btn_sendout.node.on("click", this._onClickSendOut, this), this.slider.node.on("slide", this._onSliderEvent, this), this._nTopPanelFontSize = this.txt_pot_word.fontSize, this._shieldLayer_card_act = this.panel_main.getChildByName("img_shieldLayer_sendout"), this._setForceShowBtnVisible(!1), this._setSendOutBtnVisible(!1), this.panel_scrollview_widget && (this._scrollViewWidgetTopInitialOffset = this.panel_scrollview_widget.top)
        }
        _registerOnTouchEndEvent() {
            this.node.on(s.EventType.TOUCH_END, (t => {
                this.autoHide()
            }), this)
        }
        start() {
            this._updateView()
        }
        onDestroy() {
            y.MessageCenter.unregister("update_hand", this.node), y.MessageCenter.unregister("update_handMap", this.node), y.MessageCenter.unregister("game_replay_lastHand", this.node), y.MessageCenter.unregister("game_replay_nextHand", this.node), y.MessageCenter.unregister("game_replay_hide_sendout_shieldlayer", this.node), y.MessageCenter.unregister("show_Audit", this.node), y.MessageCenter.unregister("on_replay_forceshow", this.node), y.MessageCenter.unregister("on_replay_sendout", this.node)
        }
        _actFunc(t, e) {}
        _actFuncFinish(t, e) {
            this._svReuseView = this.panel_scrollview.getComponent(w), this._svReuseView.isGenerateItemPool() || (this._svReuseView.bindPrefab(this.prefab_review_item, "GameReviewItem"), this._svReuseView.generateItemPool(), this._updateView())
        }
        _getGameuuids() {
            let t = [];
            switch (this._dataSourceType) {
                case S.EDST_NONE:
                case S.EDST_RECORD: {
                    let e = this.gameDataInstance.tGameRecords.tPokerInfoData.vHandUUIDList;
                    t = e.slice(0, e.length)
                }
                break;
                case S.EDST_GAMEROOM: {
                    let e = this.gameDataInstance.tRoomData.game_uuids_js;
                    t = e.slice(0, e.length)
                }
                break;
                case S.EDST_COLLECTION: {
                    let e = this.gameDataInstance.tCollectPokerMapData.vCollectUUidList.sort(((t, e) => t.nAddTime - e.nAddTime));
                    for (let a = 0; a < e.length; ++a) t.push(e[a].sUUID)
                }
            }
            return t
        }
        _updateView() {
            this.node.active = !0, this._shieldLayer_card_act && (this._shieldLayer_card_act.active = !1), this._updateStaticText(), this.slider.progress = this._vGameUUID.length <= 0 ? 0 : 1, this._updateSliderPercent(), this._onMsgUpdateDataHand(this.gameDataInstance)
        }
        _updateStaticText() {
            this.txt_title.string = y.config.getStringData("allReview_allReview_panel_review_txt"), this.txt_pot_word.string = y.config.getStringData("allReview_allReview_panel_pot_txt"), this.txt_insurance_word.string = y.config.getStringData("allReview_allReview_panel_insurance_txt"), this.txt_jackpot_word.string = y.config.getStringData("curentTime_curentTime_panel_jackpotWord_text") + ":", this.btn_forceshow.node.getChildByName("txt_title").getComponent(o).string = y.config.getStringData("allReview_allReview_panel_forceshow_txt"), this.btn_sendout.node.getChildByName("txt_title").getComponent(o).string = y.config.getStringData("allReview_allReview_panel_sendout_txt"), this.panel_bottom.getChildByName("panel_top").getChildByName("txt_collect").getComponent(o).string = y.config.getStringData("allReview_allReview_panel_collect_img_collect_txt")
        }
        _updateUIShowHideStatus(t) {
            this.btn_play.node.active = !0, this.btn_audit.node.active = this.canShowReportBtn(), this.btn_collect.node.active = this.canShowFavoriteBtn(), this.txt_pot_word.node.active = !0, this.txt_pot.node.active = !0, this.txt_insurance_word.node.active = !0, this.txt_insurance.node.active = !0, this.txt_jackpot_word.node.active = !0, this.txt_jackpot.node.active = !0, this._tGameReplay && (this._tGameReplay.setFavoriteBtnStatus(this.btn_collect.node.active), this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active)), this.btn_collect.interactable = !0;
            {
                let a = !0;
                switch (this._dataSourceType) {
                    case S.EDST_RECORD:
                        a = this.gameDataInstance.tGameRecords.tPokerInfoData.tRoomParam.is_associated_jackpot, this._setForceShowBtnVisible(!1), this._setSendOutBtnVisible(!1);
                        break;
                    case S.EDST_GAMEROOM:
                        var e;
                        a = this.gameDataInstance.tRoomData.pkRoomParam.is_associated_jackpot, (e = this.btn_audit.node).active && (e.active = this._bShowAudit && this.canShowReportBtn()), this._tGameReplay && this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active);
                        break;
                    case S.EDST_COLLECTION:
                        a = this.gameDataInstance.tCollectPokerMapData.tPokerHandData.bAssociatedJackpot, this._setForceShowBtnVisible(!1), this._setSendOutBtnVisible(!1);
                        break;
                    case S.EDST_NONE:
                }
                this.txt_jackpot_word.node.active = a, this.txt_jackpot.node.active = a, this.showJackpotFallingMarsPanel(t)
            }
            this._dataSourceType === S.EDST_COLLECTION && (this.btn_audit.node.active = !1, this.btn_collect.node.active = !1, this._tGameReplay && (this._tGameReplay.setFavoriteBtnStatus(this.btn_collect.node.active), this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active)));
            let a = this.gameDataInstance.tGameRecords.tPokerHandData.nGameid;
            0 === a && (a = R.getInstanceGameId(null == this ? void 0 : this.node)), 0 === a ? (this.btn_audit.node.active = !1, this._tGameReplay && this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active), this._setForceShowBtnVisible(!1), this._setSendOutBtnVisible(!1)) : a === y.Enum.GameId.Allin ? (this.btn_audit.node.active = !1, this._tGameReplay && this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active), this._setForceShowBtnVisible(!1), this._setSendOutBtnVisible(!1), this.txt_insurance_word.node.active = !1, this.txt_insurance.node.active = !1, this.txt_jackpot_word.node.active = !0, this.txt_jackpot.node.active = !0) : y.roomManager.checkGameIsZoom(a) && (this.btn_audit.node.active = !1, this.btn_collect.node.active = !1, this._tGameReplay && (this._tGameReplay.setFavoriteBtnStatus(this.btn_collect.node.active), this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active)), this._setSendOutBtnVisible(!1), this.txt_jackpot_word.node.active = !1, this.txt_jackpot.node.active = !1), this._layoutForceShowAndSendOutBtn();
            {
                let t = this.panel_bottom.getChildByName("panel_top"),
                    e = t.getChildByName("txt_collect").getComponent(o);
                e.node.active = this.btn_collect.node.active;
                let a = 30,
                    i = 0,
                    n = 15,
                    s = t.getPosition().x + t.getComponent(b).width * t.getScale().x * t.getComponent(b).anchorX - a,
                    r = 0,
                    l = t.getChildByName("txt_play").getComponent(o);
                this.btn_collect.node.active && (s -= y.resMgr.getLabelStringSize(e).width * e.node.getComponent(b).anchorX * (1 - e.node.getComponent(b).anchorX), e.node.setPosition(s, r), s -= y.resMgr.getLabelStringSize(e).width * e.node.getScale().x * e.node.getComponent(b).anchorX, s -= i, s -= this.btn_collect.node.getComponent(b).width * this.btn_collect.node.getScale().x * (1 - this.btn_collect.node.getComponent(b).anchorX), s -= this.btn_collect.node.getComponent(b).width * this.btn_collect.node.scale.x * this.btn_collect.node.getComponent(b).anchorX, s -= n), this.btn_play.node.active && (s -= y.resMgr.getLabelStringSize(l).width * l.node.getScale().x * (1 - l.node.getComponent(b).anchorX), l.node.setPosition(s, r), s -= y.resMgr.getLabelStringSize(l).width * l.node.scale.x * l.node.getComponent(b).anchorX, s -= i, s -= this.btn_play.node.getComponent(b).width * this.btn_play.node.scale.x * (1 - this.btn_play.node.getComponent(b).anchorX), s -= this.btn_play.node.getComponent(b).width * this.btn_play.node.scale.x * this.btn_play.node.getComponent(b).anchorX, s -= n), this.btn_audit.node.active && (s -= i, s -= this.btn_audit.node.getComponent(b).width * this.btn_audit.node.scale.x * (1 - this.btn_audit.node.getComponent(b).anchorX), s -= this.btn_audit.node.getComponent(b).width * this.btn_audit.node.scale.x * this.btn_audit.node.getComponent(b).anchorX, s -= n)
            }
        }
        _updateForceShowState(t) {
            let e = !1,
                a = !1;
            if (this._vGameUUID.length > 0 && t.bForceShowcard && this._sCurGameUUID !== this._sGameSettlementUUID) {
                let i = this._vGameUUID.length,
                    n = this._nCurGameUUIDIndex + 1,
                    s = n > i - ("" !== this._sGameSettlementUUID ? 4 : 3) && n <= i,
                    o = !1,
                    r = !1,
                    l = 2;
                switch (t.nGameid) {
                    case y.Enum.GameId.Plo:
                        l = 4;
                        break;
                    case y.Enum.GameId.Plo5:
                        l = 5
                }
                if (s)
                    for (let e = 0; e < t.vPlayerRecords.length; ++e) {
                        let a = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
                        if (t.vPlayerRecords[e].nPlayerID == a ? o = !0 : t.vPlayerRecords[e].vCards.length < l && (r = !0), o && r) break
                    }
                a = this.gameDataInstance.tRoomData.spectatorRevealEnabled && !o, e = (a || o) && r
            }
            this._setForceShowBtnVisible(e, a)
        }
        _updateSendOutState(t) {
            let e = !1;
            if (this._vGameUUID.length > 0 && this._sCurGameUUID !== this._sGameSettlementUUID) {
                let a = !1,
                    i = this.gameDataInstance.tGameRecords.mHandMapCache.get(this.gameDataInstance.tGameRecords.tPokerHandData.sGameUUID);
                if (i) {
                    let t = i.game_record.unsend_public_cards;
                    null == t && (a = !0)
                }
                if (!a) {
                    let a = this._vGameUUID.length,
                        i = this._nCurGameUUIDIndex + 1,
                        n = i > a - ("" !== this._sGameSettlementUUID ? 4 : 3) && i <= a,
                        s = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
                    if (n)
                        for (let a = 0; a < t.vPlayerRecords.length; ++a)
                            if (t.vPlayerRecords[a].nPlayerID === s) {
                                e = t.vPlayerRecords[a].nReviewSendOutLen < 5;
                                break
                            }
                }
            }
            this._setSendOutBtnVisible(e)
        }
        _layoutForceShowAndSendOutBtn() {
            let t = this.panel_bottom.getChildByName("panel_top"),
                e = t.getPosition().x + t.getComponent(b).width * t.getScale().x * -t.getComponent(b).anchorX + 30;
            if (this.btn_forceshow.node.active) {
                e += this.btn_forceshow.node.getComponent(b).width * this.btn_forceshow.node.scale.x * this.btn_forceshow.node.getComponent(b).anchorX, this.btn_forceshow.node.setPosition(e, this.btn_forceshow.node.position.y);
                let a = t.getChildByName("ctx_forceshow");
                a.setPosition(e, a.getPosition().y), e += this.btn_forceshow.node.getComponent(b).width * this.btn_forceshow.node.getScale().x * (1 - this.btn_forceshow.node.getComponent(b).anchorX), e += 30
            }
            if (this.btn_sendout.node.active) {
                e += this.btn_sendout.node.getComponent(b).width * this.btn_sendout.node.scale.x * this.btn_sendout.node.getComponent(b).anchorX, this.btn_sendout.node.setPosition(e, this.btn_sendout.node.position.y);
                let a = t.getChildByName("ctx_sendout");
                a.setPosition(e, a.getPosition().y), e += this.btn_sendout.node.getComponent(b).width * this.btn_sendout.node.scale.x * (1 - this.btn_sendout.node.getComponent(b).anchorX), e += 30
            }
        }
        _updateForceShowCoin(t) {
            if (!this.btn_forceshow.node.active) return;
            let e = t ? this.gameDataInstance.tRoomData.pkPayMoneyItem.spectatorShowCardCount + 1 : this.gameDataInstance.tRoomData.pkPayMoneyItem.showCardCount + 1,
                a = t ? this.gameDataInstance.tRoomData.pkPayMoneyItem.showCardCountsSpectatorFee : this.gameDataInstance.tRoomData.pkPayMoneyItem.showCardCountsFee,
                i = 0,
                n = !1;
            for (let t = 0; t < y.StringTools.getArrayLength(a); ++t)
                if (e >= a[t].startCount && e <= a[t].endCount) {
                    i = this.gameDataInstance.tRoomData.neededFeeAsPerCurrency(a[t]);
                    break
                } let s = this.panel_bottom.getChildByName("panel_top").getChildByName("ctx_forceshow"),
                r = s.getChildByName("txt_coin").getComponent(o);
            if (n = i !== y.Number(r.string), r.string = y.StringTools.serverGoldToShowString(i), this._tGameReplay && this._tGameReplay.setExplodeCardBtnStatus(this.btn_forceshow.node.active, r.string), n) {
                let t = !0,
                    e = s.getComponent(C);
                if (e && (e.updateVal(r.string, this.gameDataInstance.tRoomData.currency.type), t = e.isIconShown), t) {
                    let t = y.resMgr.getLabelStringSize(r),
                        e = s.getChildByName("img_coin").getComponent(h),
                        a = s.getComponent(b).width * s.getScale().x * -s.getComponent(b).anchorX,
                        i = 0,
                        n = 15,
                        o = s.getComponent(b).width - e.node.getComponent(b).width * e.node.getScale().x - t.width * r.node.getScale().x;
                    n = Math.min(n, o / 3), i = (o - n) / 2, a += i + e.node.getComponent(b).width * e.node.getScale().x * e.node.getComponent(b).anchorX, e.node.setPosition(a, e.node.getPosition().y), a += e.node.getComponent(b).width * e.node.getScale().x * (1 - e.node.getComponent(b).anchorX), a += n + t.width * r.node.getComponent(b).anchorX, r.node.setPosition(a, r.node.getPosition().y)
                } else r.node.setPosition(0, r.node.getPosition().y)
            }
        }
        _updateSendOutCoin() {
            if (!this.btn_sendout.node.active) return;
            let t = 0,
                e = this.gameDataInstance.tRoomData.pkPayMoneyItem.showLeftCardFee,
                a = this.gameDataInstance.tGameRecords.tPokerHandData.vPlayerRecords,
                i = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
            for (let e = 0; e < a.length; ++e)
                if (a[e].nPlayerID === i) {
                    t = a[e].nReviewSendOutLen;
                    break
                } let n = 0;
            switch (t) {
                case 0:
                    n = 0;
                    break;
                case 3:
                    n = 1;
                    break;
                case 4:
                    n = 2;
                    break;
                case 5:
                    n = 3
            }
            let s = 0,
                r = !1;
            n >= 0 && n < e.length && (s = this.gameDataInstance.tRoomData.neededFeeAsPerCurrency(e[n]));
            let l = this.panel_bottom.getChildByName("panel_top").getChildByName("ctx_sendout"),
                d = l.getChildByName("txt_coin").getComponent(o);
            if (r = s !== y.Number(d.string), d.string = y.StringTools.serverGoldToShowString(s), this._tGameReplay && this._tGameReplay.setRabbitCardBtnStatus(this.btn_sendout.node.active, d.string), r) {
                let t = !0,
                    e = l.getComponent(C);
                if (e && (e.updateVal(d.string, this.gameDataInstance.tRoomData.currency.type), t = e.isIconShown), t) {
                    let t = y.resMgr.getLabelStringSize(d),
                        e = l.getChildByName("img_coin").getComponent(h),
                        a = l.getComponent(b).width * l.getScale().x * -l.getComponent(b).anchorX,
                        i = 0,
                        n = 15,
                        s = l.getComponent(b).width - e.node.getComponent(b).width * e.node.getScale().x - t.width * d.node.getScale().x;
                    n = Math.min(n, s / 3), i = (s - n) / 2, a += i + e.node.getComponent(b).width * e.node.getScale().x * e.node.getComponent(b).anchorX, e.node.setPosition(a, e.node.getPosition().y), a += e.node.getComponent(b).width * e.node.getScale().x * (1 - e.node.getComponent(b).anchorX), a += n + t.width * d.node.getComponent(b).anchorX, d.node.setPosition(a, d.node.getPosition().y)
                } else d.node.setPosition(0, d.node.getPosition().y)
            }
        }
        _updateSliderPercent() {
            this.slider_sp.node.getComponent(b).width = y.StringTools.times(this.slider.progress, this.slider.node.getComponent(b).width), this._nLastSliderProgress = this.slider.progress;
            let t = 0;
            this._vGameUUID.length > 1 && (t = Math.round(y.StringTools.div(this.slider.progress, this._nSliderPerRatio))), this._nCurGameUUIDIndex !== t && (this._nCurGameUUIDIndex = t, this._onMsgUpdateDataHand(this.gameDataInstance))
        }
        _setForceShowBtnVisible(t, e = !1) {
            let a = this.btn_forceshow.node.active !== t;
            this.btn_forceshow.node.active = t, this._tGameReplay && this._tGameReplay.setExplodeCardBtnStatus(this.btn_forceshow.node.active), this.panel_bottom.getChildByName("panel_top").getChildByName("ctx_forceshow").active = this.btn_forceshow.node.active, a && this._layoutForceShowAndSendOutBtn(), this._updateForceShowCoin(e)
        }
        _setSendOutBtnVisible(t) {
            let e = this.btn_sendout.node.active !== t;
            this.btn_sendout.node.active = t, this._tGameReplay && this._tGameReplay.setRabbitCardBtnStatus(this.btn_sendout.node.active), this.panel_bottom.getChildByName("panel_top").getChildByName("ctx_sendout").active = this.btn_sendout.node.active, e && this._layoutForceShowAndSendOutBtn(), this._updateSendOutCoin()
        }
        _onMsgUpdateDataHand(t) {
            if (!R.isInvalidGameDataMultiWindow(t, this.gameDataInstance))
                if (this._vGameUUID.length <= 0) this._onMsgUpdateHandMap(this.gameDataInstance);
                else {
                    let t = this._nCurGameUUIDIndex;
                    if (t < 0 || t >= this._vGameUUID.length) return;
                    this._sCurGameUUID = this._vGameUUID[t];
                    let e = this.gameDataInstance.tGameRecords.gameID;
                    0 === e && (e = R.getInstanceGameId(null == this ? void 0 : this.node));
                    let a = y.dataHandler.getUserData().getUserIdByGameID(e);
                    switch (this._dataSourceType) {
                        case S.EDST_NONE:
                            break;
                        case S.EDST_RECORD:
                            if (this.gameDataInstance.tGameRecords.hasJsonValue(this._sCurGameUUID)) {
                                let t = this.gameDataInstance.tGameRecords.mHandMapCache.get(this._sCurGameUUID);
                                y.httpHandler._onGameHand(this.gameDataInstance, t)
                            } else y.httpHandler.requestGameHand(a, this._sCurGameUUID, e, this.gameDataInstance);
                            break;
                        case S.EDST_GAMEROOM:
                            y.httpHandler.requestGameHand(a, this._sCurGameUUID, e, this.gameDataInstance);
                            break;
                        case S.EDST_COLLECTION:
                            if (this.gameDataInstance.tCollectPokerMapData.hasJsonValue(this._sCurGameUUID)) {
                                let t = this.gameDataInstance.tCollectPokerMapData.mHandMapCache.get(this._sCurGameUUID);
                                y.httpHandler._onFavoriteHand(this.gameDataInstance, t)
                            } else y.httpHandler.requestFavoriteHand(a, this._sCurGameUUID, this.gameDataInstance)
                    }
                }
        }
        _setCreatedDate(t) {
            if (0 == this._vGameUUID.length) return void(this.txt_date.string = "");
            let e = t.nCreateTime;
            this.txt_date.string = y.StringTools.formatDateTimeByCountry(e, !1, !0)
        }
        _setGameId(t) {}
        _updatePanelFuncBtnStat() {
            this._updateFavoriteBtnState()
        }
        _onMsgUpdateHandMap(t) {
            if (R.isInvalidGameDataMultiWindow(t, this.gameDataInstance)) return;
            let e = null;
            switch (this._dataSourceType) {
                case S.EDST_RECORD:
                case S.EDST_GAMEROOM:
                    e = this.gameDataInstance.tGameRecords.tPokerHandData;
                    break;
                case S.EDST_COLLECTION:
                    e = this.gameDataInstance.tCollectPokerMapData.tPokerHandData;
                    break;
                case S.EDST_NONE:
            }
            e || (e = new v), this._vGameUUID.length <= 0 && e.reset();
            let a = this._vGameUUID.length > 0 ? this._nCurGameUUIDIndex + 1 : 0;
            if (this.txt_page.string = y.StringTools.formatC("%d/%d", a, this._vGameUUID.length), this._dataSourceType === S.EDST_GAMEROOM && this._updateForceShowState(e), this._dataSourceType === S.EDST_GAMEROOM && this._updateSendOutState(e), this._updateUIShowHideStatus(e), this.txt_serial_number.node.active)
                if ("" === e.sGameUUID) this.txt_serial_number.string = "";
                else {
                    let t = y.config.getStringData("allReview_allReview_panel_serial_number_text");
                    this.txt_serial_number.string = y.StringTools.formatC(t, e.sGameUUID);
                    let a = this.panel_main.getComponent(b).width * (1 - this.panel_main.getComponent(b).anchorX),
                        i = (this.txt_serial_number.node.position.y, 30),
                        n = y.resMgr.getLabelStringSize(this.txt_serial_number).width;
                    a -= i, a -= n * (1 - this.txt_serial_number.node.getComponent(b).anchorX)
                } if (this.txt_pot.node.active) {
                let t = y.Number(y.StringTools.numberToShowString(y.StringTools.clientGoldByServer(e.nTotalPot)));
                this.txt_pot.string = y.StringTools.toFixedAsString(t, y.currencyManager.defaultRoundDecimal)
            }
            if (this.txt_insurance.node.active) {
                let t = y.StringTools.serverGoldToShowNumber(e.nInsuranceWinbet);
                this.txt_insurance.string = y.StringTools.toFixedAsString(t, y.currencyManager.defaultRoundDecimal)
            }
            if (this.txt_jackpot.node.active) {
                let t = y.StringTools.serverGoldToShowNumber(e.nJackpotWinbet);
                this.txt_jackpot.string = y.StringTools.toFixedAsString(t, y.currencyManager.defaultRoundDecimal)
            }
            if (this.jackpot_holder.active) {
                let t = 0;
                e && (t = y.StringTools.serverGoldToShowNumber(e.nJackpotTotalWinbet)), this.txt_total_jackpot.string = t.toString()
            }
            this._layoutPanelTopTexts(), this._updateItemListView(), e.objReplay && e.objReplay.RoomInfo && y.Number(e.objReplay.RoomInfo.players_count) > 0 ? this._bHasReplayData = !0 : this._bHasReplayData = !1;
            let i = {
                uuid: this._sCurGameUUID,
                hasReplayData: this._bHasReplayData
            };
            if (y.MessageCenter.send("update_replay_data", {
                    param: i,
                    gameDataInstance: t
                }), this._setCreatedDate(e), this._setGameId(e), this._updatePanelFuncBtnStat(), this._tGameReplay) {
                let t = {
                    vGameUUID: this._vGameUUID.slice(),
                    sCurGameUUID: this._sCurGameUUID,
                    bShowAudit: this._bShowAudit,
                    shieldLayer_card_act: this._shieldLayer_card_act,
                    gameDataMgr: this.gameDataInstance
                };
                this._tGameReplay.setDataFromGameReview(t)
            }
        }
        _layoutPanelTopTexts() {
            const t = this.panel_top.getComponent(b).width,
                e = 32,
                a = 10,
                i = this.txt_pot_word,
                n = this.txt_pot,
                s = this.txt_insurance_word,
                o = this.txt_insurance,
                r = this.txt_jackpot_word,
                l = this.txt_jackpot;
            let h = 0;
            const d = i.node.active && n.node.active,
                c = s.node.active && o.node.active,
                _ = r.node.active && l.node.active;
            if (d && h++, c && h++, _ && h++, 0 === h) return;
            const g = t - 64;
            let u = 32,
                m = !1;
            do {
                d && (i.fontSize = u, n.fontSize = u), c && (s.fontSize = u, o.fontSize = u), _ && (r.fontSize = u, l.fontSize = u);
                let t = d ? y.resMgr.getLabelStringSize(i) : {
                        width: 0,
                        height: 0
                    },
                    e = d ? y.resMgr.getLabelStringSize(n) : {
                        width: 0,
                        height: 0
                    },
                    p = c ? y.resMgr.getLabelStringSize(s) : {
                        width: 0,
                        height: 0
                    },
                    b = c ? y.resMgr.getLabelStringSize(o) : {
                        width: 0,
                        height: 0
                    },
                    D = _ ? y.resMgr.getLabelStringSize(r) : {
                        width: 0,
                        height: 0
                    },
                    S = _ ? y.resMgr.getLabelStringSize(l) : {
                        width: 0,
                        height: 0
                    },
                    w = (d ? t.width + a + e.width : 0) + (c ? p.width + a + b.width : 0) + (_ ? D.width + a + S.width : 0);
                h > 1 && (w += 40 * (h - 1)), m = w <= g || u <= 18, m || (u -= 1)
            } while (!m);
            let p = d ? y.resMgr.getLabelStringSize(i) : {
                    width: 0,
                    height: 0
                },
                D = d ? y.resMgr.getLabelStringSize(n) : {
                    width: 0,
                    height: 0
                },
                S = c ? y.resMgr.getLabelStringSize(s) : {
                    width: 0,
                    height: 0
                },
                w = c ? y.resMgr.getLabelStringSize(o) : {
                    width: 0,
                    height: 0
                },
                I = _ ? y.resMgr.getLabelStringSize(r) : {
                    width: 0,
                    height: 0
                },
                v = _ ? y.resMgr.getLabelStringSize(l) : {
                    width: 0,
                    height: 0
                },
                f = d ? p.width + a + D.width : 0,
                C = c ? S.width + a + w.width : 0,
                R = _ ? I.width + a + v.width : 0;
            const G = -t / 2,
                U = t / 2;
            if (d) {
                const t = G + e;
                i.node.setPosition(t, i.node.position.y), n.node.setPosition(t + p.width + a, n.node.position.y)
            }
            if (_) {
                const t = U - e - R;
                r.node.setPosition(t, r.node.position.y), l.node.setPosition(t + I.width + a, l.node.position.y)
            }
            if (c) {
                let t = 0;
                if (d && _) {
                    t = (G + e + f + (U - e - R)) / 2 - C / 2
                } else if (d) {
                    t = (G + e + f + U - e - C) / 2
                } else if (_) {
                    t = (G + e + (U - e - R) - C) / 2
                }
                s.node.setPosition(t, s.node.position.y), o.node.setPosition(t + S.width + a, o.node.position.y)
            }
        }
        _updateItemListView(t = !0) {
            let e = [],
                a = null;
            switch (this._dataSourceType) {
                case S.EDST_RECORD:
                case S.EDST_GAMEROOM:
                    a = this.gameDataInstance.tGameRecords.tPokerHandData;
                    break;
                case S.EDST_COLLECTION:
                    a = this.gameDataInstance.tCollectPokerMapData.tPokerHandData;
                    break;
                case S.EDST_NONE:
            }
            if (a) {
                let t = a.vPlayerRecords.length;
                for (let i = 0; i < t; ++i) {
                    let t = new f;
                    t.sGameUUID = a.sGameUUID, t.nGameMode = a.nGameMode, t.nShortFull = a.nShortFull, t.vPubsCards = a.vPublicCards, t.vUnsendPublicCards = a.vUnsendPublicCards, t.nGameid = a.nGameid, t.nPlayerID = a.vPlayerRecords[i].nPlayerID, t.sPlayerName = a.vPlayerRecords[i].sPlayerName, t.sPlayerHead = a.vPlayerRecords[i].sPlayerHead, t.plat = a.vPlayerRecords[i].plat, t.nWinBet = a.vPlayerRecords[i].nWinBet, t.nInsuranceBet = a.vPlayerRecords[i].nInsuranceBet, t.nInsuranceAmount = a.vPlayerRecords[i].nInsuranceAmount, t.nPlayerBettingRoundBet = a.vPlayerRecords[i].nPlayerBettingRoundBet, t.bMuck = a.vPlayerRecords[i].bMuck, t.bActiveShow = a.vPlayerRecords[i].bActiveShow, t.bForceShowDown = a.vPlayerRecords[i].bForceShowDown, t.nLastRoundType = a.vPlayerRecords[i].nLastRoundType, t.vHandCards = a.vPlayerRecords[i].vCards, t.seatNo = a.vPlayerRecords[i].seatNo, t.seatInfo = a.vPlayerRecords[i].seatInfo, t.bFold = a.vPlayerRecords[i].bFold, t.nReviewSendOutLen = a.vPlayerRecords[i].nReviewSendOutLen, t.bForceShowedAct = a.vPlayerRecords[i].bForceShowedAct, t.nReviewSendOutActLen = a.vPlayerRecords[i].nReviewSendOutActLen, a.vPlayerRecords[i].bForceShowedAct = !1, a.vPlayerRecords[i].nReviewSendOutActLen = 0, t.jackpotType = a.vPlayerRecords[i].jackpotType, this.txt_jackpot.node.active && (t.nJackWinbet = a.vPlayerRecords[i].nJackWinbet), e.push(t)
                }
            }
            this._svReuseView && this._svReuseView.isGenerateItemPool() && this._svReuseView.reloadView(e, t)
        }
        _onSliderEvent(t) {
            if (this._vGameUUID.length <= 1) return this.slider.progress = 1 === this._vGameUUID.length ? 1 : 0, void this._updateSliderPercent();
            let e = this._nSliderPerRatio,
                a = this._nLastSliderProgress - this.slider.progress,
                i = this._nLastSliderProgress;
            if (Math.abs(a) >= e / 2)
                if (this.slider.progress >= this._nLastSliderProgress) {
                    let t = Math.ceil(this.slider.progress / e);
                    i = Math.min(1, e * t)
                } else {
                    let t = Math.floor(this.slider.progress / e);
                    i = Math.max(0, e * t)
                } this.slider.progress = i, this._updateSliderPercent()
        }
        _onMsgLastHand(t) {
            R.isInvalidGameDataMultiWindow(this.gameDataInstance, t) || this.beforePage()
        }
        _onMsgNextHand(t) {
            R.isInvalidGameDataMultiWindow(this.gameDataInstance, t) || this.nextPage()
        }
        _onMsgShowAudit(t) {
            if (t.gameData) {
                if (R.isInvalidGameDataMultiWindow(this.gameDataInstance, t.gameData)) return
            } else if (R.isInvalidRoomUuidMultiWindow(t.room_uuid_js, this.gameDataInstance, t.game_uuid_js)) return
        }
        _onMsgForceShow(t) {
            if (R.isInvalidGameDataMultiWindow(this.gameDataInstance, t.gameDataInstance)) return;
            const e = t.msg;
            let a = this.gameDataInstance.tGameRecords.tPokerHandData.sGameUUID,
                i = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
            if (e.playerid !== i || !this.gameDataInstance.tGameRecords.mHandMapCache.has(a)) return console.log("GameReview - _onMsgForceShow: 数据错误"), void(this._shieldLayer_card_act.active = !1);
            {
                let t = (t, e) => {
                        for (let a = 0; a < y.StringTools.getArrayLength(e); ++a)
                            if (e[a].playerid === t) return e[a];
                        return null
                    },
                    i = (t, e) => {
                        let a = e.SeatsInfo.seats_info;
                        for (let e = 0; e < y.StringTools.getArrayLength(a); ++e)
                            if (a[e].UID === t) return a[e];
                        return null
                    },
                    n = this.gameDataInstance.tGameRecords.mHandMapCache.get(a);
                if (n && void 0 !== n)
                    for (let a = 0; a < y.StringTools.getArrayLength(e.show_seats); ++a) {
                        let s = e.show_seats[a].uid,
                            o = e.show_seats[a].cards,
                            r = i(s, n.replay),
                            l = t(s, n.game_record.records);
                        if (l && void 0 !== l) {
                            let t = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
                            if (l.playerid !== t) {
                                l.cards && void 0 !== l.cards ? y.StringTools.clearArray(l.cards) : l.cards = [], r.holecards && void 0 !== r.holecards ? y.StringTools.clearArray(r.holecards) : r.holecards = [];
                                for (let t = 0; t < o.length; ++t) l.cards.push(o[t]), r.holecards.push({
                                    number: o[t].number,
                                    suit: o[t].suit
                                })
                            } else l.is_force_show = !0
                        }
                    }
                let s = this.gameDataInstance.tCollectPokerMapData.mHandMapCache.get(a);
                if (s && void 0 !== s)
                    for (let a = 0; a < y.StringTools.getArrayLength(e.show_seats); ++a) {
                        let n = e.show_seats[a].uid,
                            o = e.show_seats[a].cards,
                            r = i(n, s.replay),
                            l = t(n, s.game_record.records);
                        if (l && void 0 !== l) {
                            let t = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
                            if (l.playerid !== t) {
                                l.cards && void 0 !== l.cards ? y.StringTools.clearArray(l.cards) : l.cards = [], r.holecards && void 0 !== r.holecards ? y.StringTools.clearArray(r.holecards) : r.holecards = [];
                                for (let t = 0; t < o.length; ++t) l.cards.push(o[t]), r.holecards.push({
                                    number: o[t].number,
                                    suit: o[t].suit
                                })
                            } else l.is_force_show = !0
                        }
                    }
            } {
                let t = this.gameDataInstance.tGameRecords.tPokerHandData.vPlayerRecords,
                    a = null;
                for (let i = 0; i < y.StringTools.getArrayLength(e.show_seats); ++i) {
                    let n = e.show_seats[i].uid,
                        s = e.show_seats[i].cards;
                    for (let e = 0; e < t.length; ++e)
                        if (t[e].nPlayerID === n) {
                            a = t[e];
                            break
                        } if (a && void 0 !== a) {
                        let t = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
                        if (a.nPlayerID !== t) {
                            if (a.vCards.length < s.length)
                                for (let t = 0; t < s.length; ++t) {
                                    let e = new I;
                                    e.eCardNum = s[t].number, e.eCardSuit = s[t].suit, a.vCards.findIndex((t => t.eCardNum === e.eCardNum && t.eCardSuit === e.eCardSuit)) < 0 && (a.vCards.push(e), a.bForceShowedAct = !0)
                                }
                        } else a.bForceShowDown = !0
                    }
                }
            }
            this.gameDataInstance.tRoomData.pkPayMoneyItem.showCardCount = e.count, this.gameDataInstance.tRoomData.pkPayMoneyItem.spectatorShowCardCount = e.spectatorCount, this._setForceShowBtnVisible(!1), this._updateItemListView(!1), y.TT.showMsg(y.StringTools.formatC(y.config.getStringData("ForceShowCardToast"), e.playername), y.Enum.ToastType.ToastTypeWarning)
        }
        _onMsgSendOut(t) {
            if (R.isInvalidGameDataMultiWindow(this.gameDataInstance, t.gameDataInstance)) return;
            const e = t.noti;
            let a = this.gameDataInstance.tGameRecords.tPokerHandData.sGameUUID,
                i = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid);
            if (e.player_id !== i || !this.gameDataInstance.tGameRecords.mHandMapCache.has(a)) return console.log("GameReview - _onMsgForceShow: 数据错误"), void(this._shieldLayer_card_act.active = !1);
            {
                let t = this.gameDataInstance.tGameRecords.tPokerHandData.vPlayerRecords,
                    a = !1;
                for (let i = 0; i < t.length; ++i)
                    if (t[i].nPlayerID === e.player_id) {
                        t[i].nReviewSendOutActLen = e.cards.length, a = t[i].nReviewSendOutActLen > 0;
                        break
                    } a && this._updateItemListView(!1)
            } {
                let t = this.gameDataInstance.tGameRecords.mHandMapCache.get(a);
                if (t && void 0 !== t) {
                    let a = t.game_record.records;
                    for (let t = 0; t < y.StringTools.getArrayLength(a); ++t)
                        if (a[t].playerid === e.player_id) {
                            a[t].send_card_len = y.Number(a[t].send_card_len), a[t].send_card_len += e.cards.length;
                            break
                        }
                }
                let i = this.gameDataInstance.tCollectPokerMapData.mHandMapCache.get(a);
                if (i && void 0 !== i) {
                    let t = i.game_record.records;
                    for (let a = 0; a < y.StringTools.getArrayLength(t); ++a)
                        if (t[a].playerid === e.player_id) {
                            t[a].send_card_len = y.Number(t[a].send_card_len), t[a].send_card_len += e.cards.length;
                            break
                        }
                }
            } {
                let t = this.gameDataInstance.tGameRecords.tPokerHandData.vPlayerRecords;
                for (let a = 0; a < t.length; ++a)
                    if (t[a].nPlayerID === e.player_id) {
                        t[a].nReviewSendOutLen += e.cards.length;
                        break
                    }
            }
            this._updateSendOutState(this.gameDataInstance.tGameRecords.tPokerHandData), y.TT.showMsg(y.config.getStringData("GameReplaySendOutToast"), y.Enum.ToastType.ToastTypeWarning)
        }
        _onMsgHideSendoutShieldLayer(t) {
            R.isInvalidGameDataMultiWindow(this.gameDataInstance, t) || (this._shieldLayer_card_act.active = !1)
        }
        _onClickSerialNumber(t) {
            y.TT.showMsg(y.config.getStringData("allReview_allReview_panel_serial_number_copy_text"), y.Enum.ToastType.ToastTypeInfo);
            let e = y.String(this._sCurGameUUID);
            y.native.setClipBoardString(e)
        }
        _appendGameReplayNode() {
            this.node.addChild(this._tGameReplay.node)
        }
        _onClickPlay(t) {
            if (y.AudioMgr.playButtonSound("button_click.mp3"), this._vGameUUID.length <= 0 || !this._bHasReplayData) {
                var e;
                let t = null == (e = R.getInstance(this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
                y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips"), y.Enum.ToastType.ToastTypeError, !1, !0, t)
            } else {
                this._tGameReplay || (this._tGameReplay = u(this.prefab_game_replay).getComponent(D), this._appendGameReplayNode()), this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active), this._tGameReplay.setFavoriteBtnStatus(this.btn_collect.node.active);
                let t = this.panel_bottom.getChildByName("panel_top"),
                    e = t.getChildByName("ctx_forceshow"),
                    a = t.getChildByName("ctx_sendout");
                this._tGameReplay.setExplodeCardBtnStatus(this.btn_forceshow.node.active, e.getChildByName("txt_coin").getComponent(o).string), this._tGameReplay.setRabbitCardBtnStatus(this.btn_sendout.node.active, a.getChildByName("txt_coin").getComponent(o).string);
                let i = {
                    vGameUUID: this._vGameUUID.slice(),
                    sCurGameUUID: this._sCurGameUUID,
                    bShowAudit: this._bShowAudit,
                    shieldLayer_card_act: this._shieldLayer_card_act,
                    gameDataMgr: this.gameDataInstance
                };
                this._tGameReplay.setDataFromGameReview(i), this._tGameReplay.autoShow(this._dataSourceType, this._sCurGameUUID, !0)
            }
        }
        _onClickAudit(t) {
            var e;
            y.AudioMgr.playButtonSound("button_click.mp3");
            let a = null == (e = R.getInstance(this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            if (this._vGameUUID.length <= 0 || !this._bHasReplayData) y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips"), y.Enum.ToastType.ToastTypeError, !1, !0, a);
            else {
                if (y.config.getCurrentScene() === y.Enum.SCENE.GAME_SCENE && !this._bShowAudit) return void y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips3"), y.Enum.ToastType.ToastTypeError, !1, !0, a);
                let t = this.gameDataInstance.tGameRecords.tPokerHandData.nClubID,
                    e = this.gameDataInstance.tGameRecords.tPokerHandData.sRoomUUID;
                y.worldNet.RequestQuerySendFairReport(t, this._sCurGameUUID, e, this.gameDataInstance.tRoomData.u32GameID)
            }
        }
        _onClickCollect(t) {
            if (y.AudioMgr.playButtonSound("button_click.mp3"), this._vGameUUID.length <= 0 || !this._bHasReplayData) {
                var e;
                let t = null == (e = R.getInstance(this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
                y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips"), y.Enum.ToastType.ToastTypeError, !1, !0, t)
            } else {
                let t = y.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tGameRecords.tPokerHandData.nGameid),
                    e = 0;
                e = y.config.getCurrentScene() == y.Enum.SCENE.HALL_SCENE ? this.gameDataInstance.tGameRecords.gameID : R.getInstanceGameId(null == this ? void 0 : this.node), y.httpHandler.requestDoFavorite(t, this._sCurGameUUID, e, this.gameDataInstance)
            }
            this._setBtnStat(this.btn_collect, !1)
        }
        _setBtnStat(t, e) {
            this.btn_collect.interactable = e
        }
        _onClickForceShow(t) {
            y.AudioMgr.playButtonSound("button_click"), this._vGameUUID.length <= 0 || !this._bHasReplayData ? y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips"), y.Enum.ToastType.ToastTypeError) : y.gameNet.RequestReplayForceShowCard(this.gameDataInstance.tRoomData.u32RoomId, this._sCurGameUUID)
        }
        _onClickSendOut(t) {
            y.AudioMgr.playButtonSound("button_click"), this._vGameUUID.length <= 0 || !this._bHasReplayData ? y.TT.showMsg(y.config.getStringData("UIAllreviewReplayTips"), y.Enum.ToastType.ToastTypeError) : y.gameNet.RequestReplaySendCard(this.gameDataInstance.tRoomData.u32RoomId, this._sCurGameUUID)
        }
        _updateFavoriteBtnState() {
            if (0 == this._vGameUUID.length) return void(this.btn_collect.interactable = !1);
            let t = this.gameDataInstance.tCollectPokerMapData.vCollectUUidList,
                e = !1;
            for (let a = 0; a < t.length; ++a)
                if (t[a].sUUID == this._sCurGameUUID) {
                    e = !0;
                    break
                } this.btn_collect.interactable = this.btn_collect.interactable && !e
        }
        canShowReportBtn() {
            return this.gameDataInstance.tRoomData.u32GameID == y.Enum.GameId.Plo5 ? y.appConfig.getUserProfileConfig().reportEnabledPlo5 : y.appConfig.getUserProfileConfig().reportEnabled
        }
        canShowFavoriteBtn() {
            return y.appConfig.getUserProfileConfig().favoriteEnabled
        }
        onPanelScrollViewChangedSize() {}
        showJackpotFallingMarsPanel(t) {
            const e = t && t.vPlayerRecords.length > 0 && t.vPlayerRecords.filter((t => t.jackpotType >= U.Earth)).length > 0;
            this.jackpot_holder.active = e;
            const a = e ? this.jackpot_holder.getComponent(b).height : 0;
            this.panel_scrollview_widget.top = this._scrollViewWidgetTopInitialOffset + a, this.panel_scrollview_widget.updateAlignment()
        }
    }).gClassName = "GameReview", dt = e((ht = Vt).prototype, "prefab_review_item", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ht.prototype, "prefab_game_replay", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ht.prototype, "prefab_report", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ht.prototype, "panel_main", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(ht.prototype, "panel_top", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ht.prototype, "panel_bottom", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ht.prototype, "txt_title", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ht.prototype, "txt_serial_number", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ht.prototype, "txt_pot_word", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ht.prototype, "txt_insurance_word", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ht.prototype, "txt_jackpot_word", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ht.prototype, "txt_pot", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(ht.prototype, "txt_insurance", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ht.prototype, "txt_jackpot", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ht.prototype, "panel_scrollview", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ht.prototype, "slider", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(ht.prototype, "slider_bg", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ht.prototype, "slider_sp", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(ht.prototype, "txt_page", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ht.prototype, "btn_forceshow", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ht.prototype, "btn_sendout", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(ht.prototype, "btn_audit", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(ht.prototype, "btn_play", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ht.prototype, "btn_collect", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(ht.prototype, "btn_first", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ht.prototype, "btn_last", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ht.prototype, "btn_before", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(ht.prototype, "btn_next", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(ht.prototype, "txt_date", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(ht.prototype, "jackpot_holder", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(ht.prototype, "txt_total_jackpot", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(ht.prototype, "panel_scrollview_widget", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(ht.prototype, "gameDataInstance", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = ht)) || lt));
    i._RF.pop()
}
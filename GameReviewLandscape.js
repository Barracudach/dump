import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as h from "./GameReview.js";
import * as o from "./GameDataManager.js";
import * as _ from "./cv.js";
import * as c from "./Enum.js";
import * as d from "./CommonTools.js";
import * as u from "./GameSceneInstance.js";

function main() {
    var m, p, g, G;
    i._RF.push({}, "5c235gpwJ1AeYJhUIG+sKUu", "GameReviewLandscape", void 0);
    const {
        ccclass: S,
        property: D
    } = s;
    o.getInstance(), t("default", (m = D(n), S((G = e((g = class extends h {
        constructor(...t) {
            super(...t), a(this, "txt_game_id", G, this)
        }
        _setCreatedDate(t) {
            if (0 == this._vGameUUID.length) return void(this.txt_date.string = "");
            let e = t.nCreateTime;
            this.txt_date.string = _.StringTools.formatDateTimeByCountry(e, !1, !0)
        }
        _setGameId(t) {
            if (0 == this._vGameUUID.length) return void(this.txt_game_id.string = "");
            let e = _.config.getStringData("allReview_allReview_panel_serial_number_text");
            this.txt_game_id.string = _.StringTools.formatC(e, t.sGameUUID)
        }
        _updateStaticText() {
            this.txt_pot_word.string = _.config.getStringData("allReview_allReview_panel_pot_txt"), this.txt_insurance_word.string = _.config.getStringData("allReview_allReview_panel_insurance_txt"), this.txt_jackpot_word.string = _.config.getStringData("curentTime_curentTime_panel_jackpotWord_text") + ":"
        }
        _updatePanelFuncBtnStat() {
            this.btn_first.interactable = this._nCurGameUUIDIndex > 0, this.btn_before.interactable = this._nCurGameUUIDIndex > 0, this.btn_last.interactable = this._nCurGameUUIDIndex + 1 < this._vGameUUID.length, this.btn_next.interactable = this._nCurGameUUIDIndex + 1 < this._vGameUUID.length, this._updateFavoriteBtnState(), this.btn_audit.interactable = this._vGameUUID.length > 0 && this.btn_audit.interactable, this.btn_play.interactable = this._vGameUUID.length > 0
        }
        _appendGameReplayNode() {
            var t;
            let e = l.getScene();
            _.appConfig.getGeneralConfig().multiWindowEnabled && (e = d.instance.getParentScene(l, this.node)), null == (t = e) || null == (t = t.getComponentInChildren(r)) || t.node.addChild(this._tGameReplay.node)
        }
        _onMsgShowAudit() {}
        _registerOnTouchEndEvent() {}
        autoHide(t = !0) {
            this.isInit() && this.node.active && (this._shieldLayer && (this._shieldLayer.active = !1), this._shieldLayer_card_act && (this._shieldLayer_card_act.active = !1), this._tGameReplay && this._tGameReplay.autoHide(!1), this.node.active = !1)
        }
        autoShow(t, e, a, i = !0) {
            this._dataSourceType = t, this._vGameUUID = e || this._getGameuuids(), this._sGameSettlementUUID = this.gameDataInstance.tGameData.game_settlement_uuid, this._vGameUUID.length > 1 ? this._nSliderPerRatio = _.StringTools.div(1, this._vGameUUID.length - 1) : 1 === this._vGameUUID.length && (this._nSliderPerRatio = 1), this._bInit = !0, this._updateView(), this._actFuncFinish(null, null);
            let n = _.dataHandler.getUserData().getUserId(!0);
            _.httpHandler.requestGetFavoriteList(n, 1, this.gameDataInstance.tCollectPokerMapData.nPageNum, this.gameDataInstance)
        }
        _updateUIShowHideStatus(t) {
            switch (this.btn_audit.node.active = this.canShowReportBtn(), this.btn_collect.node.active = this.canShowFavoriteBtn(), this._tGameReplay && (this._tGameReplay.setFavoriteBtnStatus(this.btn_collect.node.active), this._tGameReplay.setReportBtnStatus(this.btn_audit.node.active)), this.btn_play.interactable = !0, this.btn_audit.interactable = !0, this.btn_collect.interactable = !0, this._dataSourceType) {
                case c.EDST_COLLECTION:
                case c.EDST_RECORD:
                    this._tGameReplay && (this._tGameReplay.setExplodeCardBtnStatus(!1), this._tGameReplay.setRabbitCardBtnStatus(!1));
                    break;
                case c.EDST_GAMEROOM:
                    this.btn_audit.interactable = this._bShowAudit, this._tGameReplay && this._tGameReplay.setReportBtnStatus(this._bShowAudit && this.canShowReportBtn());
                    break;
                case c.EDST_NONE:
            }
            this.showJackpotFallingMarsPanel(t), this._dataSourceType === c.EDST_COLLECTION && (this.btn_audit.interactable = !1, this.btn_collect.interactable = !1, this._tGameReplay && (this._tGameReplay.setFavoriteBtnStatus(!1), this._tGameReplay.setReportBtnStatus(!1)));
            let e = this.gameDataInstance.tGameRecords.tPokerHandData.nGameid;
            0 === e && (e = u.getInstanceGameId(null == this ? void 0 : this.node)), 0 === e || e === _.Enum.GameId.Allin ? (this.btn_audit.interactable = !1, this._tGameReplay && (this._tGameReplay.setReportBtnStatus(!1), this._tGameReplay.setExplodeCardBtnStatus(!1), this._tGameReplay.setRabbitCardBtnStatus(!1))) : _.roomManager.checkGameIsZoom(e) && (this.btn_audit.interactable = !1, this._tGameReplay && (this._tGameReplay.setRabbitCardBtnStatus(!1), this._tGameReplay.setReportBtnStatus(!1)))
        }
        _onMsgForceShow(t) {
            u.isInvalidGameDataMultiWindow(this.gameDataInstance, t.gameDataInstance) || (super._onMsgForceShow(t), this.reoadDataAndShow())
        }
        _onMsgSendOut(t) {
            u.isInvalidGameDataMultiWindow(this.gameDataInstance, t.gameDataInstance) || (super._onMsgSendOut(t), this.reoadDataAndShow())
        }
        reoadDataAndShow() {
            if (this._tGameReplay) {
                let t = {
                    vGameUUID: this._vGameUUID.slice(),
                    sCurGameUUID: this._sCurGameUUID,
                    bShowAudit: this._bShowAudit,
                    shieldLayer_card_act: this._shieldLayer_card_act,
                    gameDataMgr: this.gameDataInstance
                };
                this._tGameReplay.setDataFromGameReview(t), this._tGameReplay.autoShow(this._dataSourceType, this._sCurGameUUID, !0)
            }
        }
        onPanelScrollViewChangedSize() {
            this.panel_scrollview.stopAutoScroll(), this.scheduleOnce((() => {
                this.panel_scrollview.scrollToTop()
            }))
        }
    }).prototype, "txt_game_id", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = g)) || p));
    i._RF.pop()
}
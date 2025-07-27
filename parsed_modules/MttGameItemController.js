import * as i from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as n from "./MTTConnector.js";
import * as o from "./LobbyTools.js";
import * as s from "./MttItemHelper.js";
import * as r from "./MttGameItemModel.js";
import * as l from "./MttGameItemModel.js";
import * as m from "./MttGameItemView.js";
import * as d from "./HallPokerController.js";
import * as u from "./HallPokerController.js";
import * as h from "./cv.js";
import * as c from "./MVCItemController.js";
import * as g from "./MttPrefab.js";
import * as p from "./MttHall.js";
import * as T from "./HttpApiTournamentDetail.js";
import * as D from "./worldWebsocket.js";
import * as M from "./Translator.js";

function main() {
    a._RF.push({}, "373d79iSshGNYeps1pI/P/T", "MttGameItemController", void 0);
    t("default", class extends c {
        onViewEvent(t, ...e) {
            "VIEW_LOADED" === t && (this.view.registerHandlers(this.onClickHandler.bind(this)), h.appConfig.isLandscapeLayout && this.view.setDoubleClickHandler(this.onDoubleClickHandler.bind(this)))
        }
        onInitializeBegin(t) {
            o.registerMessage("mttGameItem_timeStampLateRegUpdated", this.onTimeStampLateRegUpdated.bind(this), this), this.view.onAutoSizeLabelFinish = this.onAutoResizeMttName.bind(this)
        }
        onTimeStampLateRegUpdated(t) {
            this.model.data.id == t.id && e(this.engineView) && (this.getTournamentData().timeStampLateReg = t.timeStampLateReg, this.model.data.timeStampLateReg = t.timeStampLateReg, this.model.setData(this.model.data))
        }
        onClickHandler() {
            var t;
            h.appConfig.isLandscapeLayout ? this.onClickOnLandscape() : (null == (t = this.hallPoker) || t.showLoading(!0), o.emitMessage(d, {
                tournamentData: this.model.tournamentData,
                needShowLoading: !0
            }))
        }
        requestMttTournamentDetail() {
            var t;
            const e = p.ALL;
            T.requestMttTournamentDetail(null == (t = this.model) || null == (t = t.data) ? void 0 : t.id, (t => {
                if (t && !t.ErrorCode && t.TournamentDetail) o.openMttDetailWindowByTourData(this.model.tournamentData, t.TournamentDetail);
                else if (1 === t.ErrorCode) this.requestMTTDetailTimeOut = setTimeout(this.requestMttTournamentDetail.bind(this), 5e3);
                else {
                    let e = t.ErrorCode ? "ERROR_CODE_PKW." + t.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR",
                        a = "ERROR_CODE_PKW.TITLE";
                    31004 === t.ErrorCode && (e = {
                        Translation: e,
                        payload: t => i.formatStr(M(t), this.model.data.roomName)
                    }, a = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), this.showPopup(e, (() => {}), a)
                }
            }), (t => {
                this.showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", (() => {}), null, "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR"), D.checkNetwork("requestMttTournamentDetail") && !cc_mtt.vv.DataManager.token || (this.requestMTTDetailTimeOut = setTimeout(this.requestMttTournamentDetail.bind(this), 1e3))
            }), 15e3, {
                page: e
            })
        }
        removeRetryRequestMttTournamentDetail() {
            this.requestMTTDetailTimeOut && (clearTimeout(this.requestMTTDetailTimeOut), this.requestMTTDetailTimeOut = null)
        }
        showPopup(t, e, i, a) {
            o.emitMessage(u, {
                message: t,
                callback: e,
                title: i,
                key: a
            })
        }
        onDoubleClickHandler() {
            h.appConfig.isLandscapeLayout && this.requestMttTournamentDetail()
        }
        onClickOnLandscape() {
            this.customOnClick ? this.customOnClick(this.model.data.id) : this._mvcList && this._mvcList.onItemSelect(this.getDataId())
        }
        onSelected(t, e) {
            var i;
            (this.model.data.isSelected = t, h.appConfig.isLandscapeLayout) && (this.view.updateSelected(this.model), t && !g.instance.ignoreSelectFirstItem && (null == (i = this.hallPoker) || i.showLoading(!0), o.emitMessage(d, {
                tournamentData: this.model.tournamentData,
                needShowLoading: e
            })))
        }
        onUpdateViewSelected() {
            h.appConfig.isLandscapeLayout && o.emitMessage(d, {
                tournamentData: this.model.tournamentData,
                needShowLoading: !1
            })
        }
        isTournament(t) {
            var e;
            return (null == (e = this.model) || null == (e = e.data) ? void 0 : e.id) == t
        }
        onModelUpdated() {
            this.view.updateView(this.model)
        }
        onCurrencyUpdated() {
            this.view.updateCurrency(this.model)
        }
        updateItemDataWhenScrolling(t) {
            t.timeStampLateReg || (t.timeStampLateReg = s.timeLeftSecToTimeStamp(t.TimeLeftSec ? t.TimeLeftSec : 0)), t != this.model.tournamentData && this.checkToUpdateTimeStampLateReg(t), this.model.setTournamentData(t);
            let e = this.convertMttItemToModelData(t);
            this.model.setData(e)
        }
        checkToUpdateTimeStampLateReg(t) {
            if (null != t && null !== t.Detail && void 0 !== t.Detail) {
                const e = s.isPaused(t.Detail),
                    i = !t.timeStampLateReg && t.TimeLeftSec > 0;
                (e || i) && (t.timeStampLateReg = s.timeLeftSecToTimeStamp(t.TimeLeftSec))
            }
        }
        convertMttItemToModelData(t) {
            var e, i;
            let a = t.Detail,
                n = new r;
            if (!a) return console.error("MttItemHelper : convertMttLobbyItem : details null"), n;
            n.id = t.Detail.Id, [n.roomName, n.roomNameI18n] = s.getTourName(t), n.gameMode = s.getGameModeNumber(t), n.gameSpeed = s.getGameSpeed(t), n.hasTicket = s.hasTicket(t), n.maxPlayers = s.getMaxPlayers(t), n.isBounty = s.isBounty(t), n.buyIn = s.getBuyIn(t), n.regFee = s.getRegFee(t), n.srvFee = s.getSrvFee(t), n.registeredPlayer = s.getEntrantsCount(t), n.prizePool = s.getPrizePool(t), n.showTicketStringOnBuyIn = s.showTicketStringOnBuyIn(t);
            const o = s.isPaused(a),
                l = s.isRegistered(t);
            n.isPaused = o, n.isRegistered = l;
            let [m, d, u] = s.getMttRoomStatusI18n(t);
            n.roomStatusNumber = t.Detail.Status, n.roomStatusI18nKey = m, n.startingTime = t.Detail.StartingTime, n.timerStop = t.TimerStop, n.duration = t.Duration, n.timeStampLateReg = s.getStopSignUpTimestampFromMtt(t), n.currencyRate = t.CurrencyRate, n.displayCurrency = t.Detail.DisplayCurrency, n.currency = t.Detail.currency, n.convertCurrency = t.convertCurrency, n.colorIndentifier = s.getColorIndentifier(t), n.colorIndentifierSubType = s.getIndentifierIconType(n.colorIndentifier, t), n.playerOnJoint = t.Detail.PlayOnJoint, n.isSelected = (null == (e = t.Detail) ? void 0 : e.Id) == (null == (i = this._mvcList) ? void 0 : i.getSelectedItemId()), n.multiFlightId = t.Detail.MultiFlightId, n.multiFlightLevel = t.Detail.MultiFlightLevel, n.showingPosition = t.Detail.ShowingPosition, n.joinedPlayer = t.JoinedCount, n.willPlayStartTime = t.WillPlayStartTime ? 1e3 * t.WillPlayStartTime : -1, n.prizePoolOverlay = t.overlay, n.userJoinState = s.getMyJoinStatus(t.Detail), n.playingPlayersCount = t.PlayingPlayersCount;
            let h = s.getAllowSignupDate(t);
            return n.allowSignupDate = h && s.getServerNow().getTime() < h.getTime() ? h : null, n.iconType = s.getMttIconType(t.Detail), n.bannerType = s.getMttBannerType(t.Detail), n.pageType = s.getPageType(t.Detail), n.updatedAt = t.updatedAt, n.cachedShorterMttName = t.cachedShorterMttName, n.hidePin = t.hidePin, n.rebuyStatus = t.RebuyStatus, n.fontColor = t.Detail.FontColor, n
        }
        updateCurrency(t) {
            let e = this.model.data;
            e.displayCurrency = t, this.model.setData(e)
        }
        updateDisplayCurrency(t) {
            this.model.setConvertCurrency(t)
        }
        constructor(t, e, i) {
            super(m, l, e), this.customOnClick = null, this._mvcList = null, this.onAutoResizeMttNameFinish = null, this.requestMTTDetailTimeOut = null, this.hallPoker = t, this.hallPoker = t, this._mvcList = i
        }
        setCustomOnClick(t) {
            this.customOnClick = t
        }
        init() {
            super.init(), this.model.registerHandlers(this.onModelUpdated.bind(this), this.onCurrencyUpdated.bind(this)), n.instance.cv.MessageCenter.register("onUpdateStatusRoomMtt", this.updateStatusRoom.bind(this), this.engineView), n.instance.cv.MessageCenter.register("syncMttItemFromMttDetail", this.syncMttItemFromMttDetail.bind(this), this.engineView)
        }
        destroy() {
            n.instance.cv.MessageCenter.unregister("onUpdateStatusRoomMtt", this.engineView), n.instance.cv.MessageCenter.unregister("syncMttItemFromMttDetail", this.engineView), o.unregisterMessage("mttGameItem_timeStampLateRegUpdated", this), this.removeRetryRequestMttTournamentDetail()
        }
        syncMttItemFromMttDetail(t) {
            this.model.data.id == t.Id && (this.model.tournamentData.Detail = t, this.model.data = this.convertMttItemToModelData(this.model.tournamentData), this.view.updateView(this.model))
        }
        updateStatusRoom(t) {
            var e;
            if (t.tourId == (null == (e = this.model.tournamentData.Detail) ? void 0 : e.Id)) {
                const t = s.isPaused(this.model.tournamentData.Detail),
                    e = s.isRegistered(this.model.tournamentData),
                    i = this.model.data.isRegistered !== e || this.model.data.isPaused !== t;
                this.model.data.isPaused = t, this.model.data.isRegistered = e, this.model.tournamentData && (this.model.data.registeredPlayer = s.getEntrantsCount(this.model.tournamentData), this.model.data.prizePool = s.getPrizePool(this.model.tournamentData)), i && this.view.updateView(this.model)
            }
        }
        getTournamentId() {
            var t;
            return null == (t = this.model.tournamentData.Detail) ? void 0 : t.Id
        }
        getTournamentData() {
            return this.model.tournamentData
        }
        getDataId() {
            return this.model.data.id
        }
        setAutoResizeMttNameCallback(t = null) {
            this.onAutoResizeMttNameFinish = t
        }
        onAutoResizeMttName(t) {
            var e;
            null == (e = this.onAutoResizeMttNameFinish) || e.call(this, t, this.model.tournamentData.Detail.Id)
        }
    }), a._RF.pop()
}
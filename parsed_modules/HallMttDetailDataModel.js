import * as i from "./cc.js";
import * as e from "./MVCModel.js";
import * as a from "./MttHall.js";
import * as s from "./Pb.js";
import * as d from "./MttItemHelper.js";

function main() {
    i._RF.push({}, "d6a81x8FIJLaqVkHstM3hZf", "HallMttDetailDataModel", void 0);
    t("HallMttDetailData", class {
        constructor() {
            this.fullDescription = void 0, this.entries = void 0, this.playOnJoin = void 0, this.hasTicket = void 0, this.isShortDeck = void 0, this.isBounty = void 0, this.prizePool = void 0, this.seats = void 0, this.roomStatus = void 0, this.dateInfo = void 0, this.titleIconUrl = void 0, this.curBlind = void 0, this.currentLevel = void 0, this.startingTime = void 0, this.gameDuration = void 0, this.buyIn = void 0, this.currency = void 0, this.displayCurrency = void 0, this.currencyRate = void 0, this.convertCurrency = void 0, this.showTicketStringOnBuyIn = void 0, this.isRegistered = void 0, this.isPaused = void 0, this.timerStop = void 0, this.regFee = void 0, this.srvFee = void 0, this.multiFlightId = void 0, this.multiFlightLevel = void 0, this.targetId = void 0, this.targetEventName = void 0, this.targetEvents = void 0, this.feederEvents = void 0, this.satelliteEvents = void 0, this.blindConfig = [], this.players = [], this.prizeMoney = [], this.prizeTools = [], this.tables = [], this.payouts = [], this.timeStampRestRestart = 0, this.timeStampLateReg = 0, this.timeStampNextBreak = 0, this.timeStampWillPlay = 0, this.needShowLoading = !0, this.isStage2RegCheckingInProgress = void 0, this.mttButtonStatus = void 0, this._popupIsCalled = void 0, this.myJoinStatus = void 0, this.isAutoFeed = void 0, this._timeUpdate3 = 1, this._updateDataInterval = 15, this.mttCancelOrEnd = void 0, this._showing = void 0, this._timeDifference = 0, this._timeUpdate = 0, this._timeUpdate2 = 0, this._autoEnterCalled = !1, this.bannerType = 0, this.iconType = 0, this.rebuyFlag = 0, this.rebuyParam = null, this.moreBuyParam = null, this._regStatus = void 0, this._timeStampLastSatelliteUpdate = 0, this.isStarted = !1
        }
    });
    t("HallMttDetailModel", class extends e {
        constructor(...t) {
            super(...t), this.detailData = void 0, this.tournamentData = void 0, this.isAutoRefresh = void 0, this.data = void 0, this.currentPage = a.LOBBY, this._updatedPages = {}, this._lastUpdateTimestamp = 0
        }
        setDetailData(t) {
            this.detailData = t, this._lastUpdateTimestamp = cc_mtt.vv.DataManager.getNow().getTime()
        }
        setTournamentData(t) {
            this.tournamentData = t
        }
        setData(t) {
            this.data = t
        }
        setCurrentPage(t) {
            this.currentPage = t
        }
        setPageUpdated(t, i) {
            switch (t) {
                default:
                    this._updatedPages[t] = i;
                    break;
                case a.ALL:
                    this._updatedPages[a.LOBBY] = i, this._updatedPages[a.PLAYER] = i, this._updatedPages[a.REWARD] = i, this._updatedPages[a.TABLE] = i
            }
            cc_mtt.vv.ConsoleLog.log("setPageUpdated", t, this._updatedPages)
        }
        getPageUpdated(t) {
            switch (t) {
                default:
                    return this._updatedPages[t];
                case a.ALL:
                    return 0
            }
        }
        isPageUpdated(t) {
            const i = Object.values(this._updatedPages),
                e = Math.max(...i);
            switch (t) {
                default:
                    return this._updatedPages[t] == e;
                case a.ALL:
                    return i.findIndex((t => t != e)) < 0
            }
        }
        get isLateReg() {
            var t, i;
            return (null == (t = this.detailData) ? void 0 : t.Status) == s.commonProto.MTT_GAME_STATUS.STARTED || (null == (i = this.detailData) ? void 0 : i.Status) == s.commonProto.MTT_GAME_STATUS.STARTED + 100
        }
        getLateRegEndTimestamp() {
            return this.data && this.data.timeStampLateReg ? this.data.timeStampLateReg : (null == (t = this.detailData.StopSignupTime) ? void 0 : t.getTime()) || d.timeLeftSecToTimeStamp(this.detailData.TimeLeftSec);
            var t
        }
        get isBounty() {
            var t;
            return (null == (t = this.detailData) ? void 0 : t.TournamentMode) > 0
        }
        get curBigBlind() {
            var t, i, e;
            const a = null == (t = this.data) ? void 0 : t.blindConfig[Math.min((null == (i = this.detailData) ? void 0 : i.CurrentLevel) - 1, this.data.blindConfig.length - 1)];
            return (null != (e = this.data) && e.isShortDeck ? null == a ? void 0 : a.Ante : null == a ? void 0 : a.BigBlind) || 0
        }
        getTimeDiffFromLastUpdate() {
            return this._lastUpdateTimestamp > 0 ? Math.floor((cc_mtt.vv.DataManager.getNow().getTime() - this._lastUpdateTimestamp) / 1e3) : 0
        }
        isPaused() {
            var t, i;
            return (null == (t = this.detailData) ? void 0 : t.Status) > 100 || (null == (i = this.detailData) ? void 0 : i.WillPlayStartTime) > 0
        }
    }), i._RF.pop()
}
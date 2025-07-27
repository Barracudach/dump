import * as o from "./cc.js";
import * as e from "./cc.js";
import * as i from "./MVCController.js";
import * as n from "./MttDetailWindowView.js";
import * as l from "./MTTDetailInfoLandscapeController.js";
import * as a from "./HttpApiTournamentDetail.js";
import * as r from "./cv.js";
import * as d from "./MttHall.js";
import * as s from "./MttHall.js";
import * as u from "./MttItemHelper.js";
import * as h from "./Translator.js";
import * as m from "./MttDetailWindowLeftController.js";
import * as D from "./MttDetailWindowPlayersAndTablesController.js";
import * as T from "./MttStructurePayoutPrizePoolController.js";
import * as y from "./HallMttDetailDataModel.js";
import * as c from "./HallMttDetailDataModel.js";
import * as C from "./FormatParser.js";
import * as p from "./Pb.js";
import * as g from "./MTTBuyInControllerLandscape.js";
import * as f from "./DialogBoxController.js";
import * as M from "./HttpApiRelateTournamentList.js";

function main() {
    e._RF.push({}, "e75e5F4TZBINKhUW9FCS9Ao", "MttDetailWindowController", void 0);
    class w extends c {
        constructor(...t) {
            super(...t), this.tournamentId = void 0, this.tournamentData = void 0, this.tournamentDetail = void 0, this.feederEvents = void 0, this.satelliteEvents = void 0, this.targetEvents = void 0
        }
    }
    t("MttDetailWindowModel", w);
    t("MttDetailWindowController", class extends i {
        constructor(t, e) {
            super(n, w, t), this.leftWindowController = null, this.playersAndTables = null, this.structurePayoutPrizepoolController = null, this.topInfoController = null, this.buyInController = null, this.isDestroyed = !1, this.dialogController = null, this._timeoutReloadMTTWindow = null, this.RELOAD_TIME_OUT_IN_SECONDS = 60, this.model.tournamentId = e
        }
        onInitializeBegin(t) {
            this.view.playersAndTablesEngineView;
            this.playersAndTables = null
        }
        onInitializeEnded(t) {
            this.leftWindowController = new m(this.view.leftWindowEngineView), this.leftWindowController.addWindowController(this), this.leftWindowController.init(), this.playersAndTables = new D(this.view.playersAndTablesEngineView), this.playersAndTables.init(), this.structurePayoutPrizepoolController = new T(this.view.structurePayoutsPrizepoolEngineView), this.structurePayoutPrizepoolController.init(), this.topInfoController = new l(this.view.topWindowEngineView), this.topInfoController.addWindowController(this), this.topInfoController.init();
            const e = s.instance.getHallScene().hallPokerViewController.getHallMttDetailController();
            this.buyInController = new g(e, this.view.buyInPopupEngineView), this.buyInController.init(), this.buyInController.setCallbackRevice(this.topInfoController.handleRevive.bind(this.topInfoController)), this.buyInController.setCallbackSignUp(this.topInfoController.handleSignUp.bind(this.topInfoController)), this.buyInController.hideImmediate(), this.dialogController = new f(this.view.getRender().node, this.view.getDialogPrefab(), this.getMttPopupsParent(), null), this.view.onRefreshWindowsMttDetail = this.refreshWindowsMttDetail.bind(this), this.view.onViewDestroyed = this.destroy.bind(this)
        }
        refreshWindowsMttDetail(t) {
            u.checkTableToUpdateJoinStatus((() => {
                this.topInfoController.requestDataToUpdate(d.ALL, t)
            }))
        }
        getMttPopupsParent() {
            return this.view.getMttPopupsParent()
        }
        destroy() {
            this.topInfoController.destroy(), this.leftWindowController.destroy(), this.buyInController.destroy(), this.playersAndTables.destroy(), this._timeoutReloadMTTWindow && (clearTimeout(this._timeoutReloadMTTWindow), this._timeoutReloadMTTWindow = null), this.isDestroyed = !0
        }
        retryRequestMttTournamentDetail(t) {
            this.isDestroyed || this.reload()
        }
        async loadByDatas(t, e) {
            this.isDestroyed || (this.model.tournamentData = t, this.model.tournamentDetail = e, this._updateModel(t, e), await this.updateRelatedEvents(), this.leftWindowController.loadByDatas(this.model), this.playersAndTables.loadByDatas(t, e), this.topInfoController.loadByDatas(t, e), this.structurePayoutPrizepoolController.setMttData(this.model), this.setTimeOutToReloadMTTWindow(), this.view.fadeIn())
        }
        updateCurrentLevel(t) {
            !this.isDestroyed && this.model && this.model.tournamentDetail && (this.model.tournamentDetail.CurrentLevel = t, this.structurePayoutPrizepoolController.setMttData(this.model))
        }
        requestRelatedEvents() {
            const t = this.model.detailData.TournamentId;
            return new Promise(((e, o) => {
                M.requestRelateTournamentList({
                    tournamentId: t
                }, (i => {
                    u.applyCurrencyToMttItem(i.UpstreamTournamentList), u.applyCurrencyToMttItem(i.DownstreamSatelliteTournamentList), u.applyCurrencyToMttItem(i.DownstreamFeederTournamentList), this.model.detailData.TournamentId == t && i && !i.ErrorCode ? e(i) : o()
                }), o)
            }))
        }
        updateRelatedEvents() {
            return this.requestRelatedEvents().then((t => (this.model.targetEvents = u.filterEventsByStartingTime(t.UpstreamTournamentList), this.model.feederEvents = u.filterEventsByStartingTime(t.DownstreamFeederTournamentList), this.model.satelliteEvents = u.filterEventsByStartingTime(t.DownstreamSatelliteTournamentList), t))).catch((() => {}))
        }
        setTimeOutToReloadMTTWindow() {
            this._timeoutReloadMTTWindow && (clearTimeout(this._timeoutReloadMTTWindow), this._timeoutReloadMTTWindow = null), this._timeoutReloadMTTWindow = setTimeout(this.reload.bind(this), 1e3 * this.RELOAD_TIME_OUT_IN_SECONDS)
        }
        _updateModel(t, e) {
            r.appConfig.getWalletConfig().checkAndSetGameTableCurrency(e), this.model.setDetailData(e), this.model.setTournamentData(t);
            const o = u.isRegistered(this.model.detailData),
                i = u.isPaused(this.model.detailData),
                n = u.getStartingTimeFromDetail(e),
                l = new y;
            l.startingTime = n, l.gameDuration = u.getGameDuration(this.model.detailData), l.fullDescription = u.getFullDescriptionMttDetail(e.Desc, e.DescI18N);
            let [a, , s] = u.getMttRoomStatusI18n(this.model.tournamentData);
            l._regStatus = s, l.roomStatus = h(u.getOverriddenI18nStatusKey(a, i, o)), l.entries = u.getEntrantsCountDetail(e, n), l.playOnJoin = u.getPlayOnJoinDetail(e, n), l.hasTicket = u.hasTicket(t), l.isBounty = u.getIsBounty(this.model.detailData.TournamentMode), l.prizePool = C.DisplayGold(this.model.detailData.GamePot + this.model.detailData.BountyPot), l.seats = u.getMaxPlayers(this.model.tournamentData), l.curBlind = u.getCurBlind(e.HoldemBlindsConfig, this.model.detailData), l.currentLevel = e.CurrentLevel, l.buyIn = u.getBuyIn(this.model.tournamentData), l.regFee = u.getRegFee(this.model.tournamentData), l.srvFee = u.getSrvFee(this.model.tournamentData), l.isRegistered = o, l.isPaused = i, l.currencyRate = t.CurrencyRate, l.displayCurrency = e.DisplayCurrency, l.currency = t.Detail.currency, l.convertCurrency = !1, l.bannerType = e.Banners[0] || p.commonProto.MttBanner.Banner_None, l.iconType = e.Icons[0] || p.commonProto.MttIcon.Icon_None, l._showing = !0, l.multiFlightId = e.MultiFlightId, l.multiFlightLevel = e.MultiFlightLevel, l.blindConfig = e.HoldemBlindsConfig;
            let d = 1;
            l.blindConfig.forEach((t => {
                t.Level == d && (t.TimeBank = 1 == d ? e.InitialTimeBank : e.TimeBankAdd, d += e.RestIntervalLevel)
            })), l.players = e.PlayersDetail, l.prizeMoney = e.PrizeMoney, l.prizeTools = e.PrizeTools, l.tables = e.TablesDetail, l.targetId = e.TargetID, l.targetEventName = cc_mtt.vv.DataManager.i18DataFromServer(e.Day2TournamentName, e.Day2TournamentNameI18N), l.targetEvents = [], l.feederEvents = [], l.satelliteEvents = [], this.model.detailData.RebuyParam && (l.rebuyParam = JSON.parse(this.model.detailData.RebuyParam)), this.model.detailData.MorebuyParam && (l.moreBuyParam = JSON.parse(this.model.detailData.MorebuyParam)), this.model.setData(l)
        }
        reload() {
            const t = this.model.tournamentId,
                e = r.lobbyService.getMttItemsByFilter(null).find((e => e.id == t)),
                i = u.getTournamentLocalizeName(e);
            d.ALL;
            a.requestMttTournamentDetail(t, (n => {
                if (!this.isDestroyed)
                    if (n && !n.ErrorCode && n.TournamentDetail) {
                        const o = r.lobbyService.getMttItemsByFilter(null).find((e => {
                            var o;
                            return (null == (o = e.Detail) ? void 0 : o.Id) == t
                        }));
                        o && o.timeStampLateReg && (n.TournamentDetail.timeStampLateReg = o.timeStampLateReg), u.checkTableToUpdateJoinStatus((() => {
                            this.loadByDatas(e, n.TournamentDetail)
                        }))
                    } else if (1 == n.ErrorCode) setTimeout(this.retryRequestMttTournamentDetail.bind(this, t), 5e3);
                else {
                    let t = n.ErrorCode ? "ERROR_CODE_PKW." + n.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR",
                        e = "ERROR_CODE_PKW.TITLE";
                    31004 == n.ErrorCode && (t = {
                        Translation: t,
                        payload: t => o.formatStr(h(t), i)
                    }, e = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), this.showDialog(e, t, (() => {}))
                }
            }), (t => {}), 15e3)
        }
        showDialog(t, e, o) {
            this.dialogController && this.dialogController.showDialogBox(t, e, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: o
            }])
        }
    }), e._RF.pop()
}
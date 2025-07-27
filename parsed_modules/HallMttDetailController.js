import * as e from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as n from "./ThemeSystem.js";
import * as s from "./DesignSystemButtonBase.js";
import * as d from "./CrashTracing.js";
import * as r from "./CrashTracing.js";
import * as h from "./aesHandler.js";
import * as g from "./Enum.js";
import * as u from "./Enum.js";
import * as m from "./Enum.js";
import * as c from "./cv.js";
import * as p from "./HallScene.js";
import * as T from "./DynamicPromoEnums.js";
import * as S from "./DynamicPromoEnums.js";
import * as D from "./MttHall.js";
import * as C from "./MttHall.js";
import * as P from "./MttPrefab.js";
import * as v from "./UtilsPkw.js";
import * as _ from "./ImpokerHall.js";
import * as L from "./AndroidBackButton.js";
import * as E from "./CommonTools.js";
import * as I from "./MTTConnector.js";
import * as b from "./NodePage.js";
import * as f from "./Translator.js";
import * as y from "./FakeMultipleGame.js";
import * as w from "./MultipleGame.js";
import * as M from "./MultipleGame.js";
import * as U from "./mttconfig.js";
import * as B from "./Pb.js";
import * as R from "./httpApis.js";
import * as k from "./HttpApiTournamentDetail.js";
import * as A from "./worldWebsocket.js";
import * as N from "./FormatParser.js";
import * as G from "./MultiTableBarSelector.js";
import * as O from "./LobbyHelper.js";
import * as F from "./LobbyTypes.js";
import * as H from "./MttItemHelper.js";
import * as V from "./MVCController.js";
import * as z from "./MTTBuyInController.js";
import * as J from "./HallMttPrizepoolController.js";
import * as W from "./MttItemRenderHelper.js";
import * as q from "./HallMttDetailDataModel.js";
import * as x from "./HallMttDetailDataModel.js";
import * as K from "./MttDetailStatsHelper.js";
import * as mod36 from "./MttBlindStructureController.js";
import * as j from "./MTTDetailInfoController.js";
import * as Y from "./LobbyTools.js";
import * as Q from "./HallPokerController.js";
import * as X from "./HallPokerController.js";
import * as Z from "./mttController.js";
import * as tt from "./MessageBroker.js";
import * as et from "./MultipleRoomManager.js";
import * as at from "./FullscreenController.js";
import * as it from "./EventCustom.js";
import * as ot from "./index.mjs_cjs=&original=.js";
import * as lt from "./DialogBox.js";
import * as nt from "./MttHallDetailPayoutController.js";
import * as st from "./MttHallDetailPayoutController.js";
import * as rt from "./MttHallDetailEventListComp.js";
import * as dt from "./MTTBuyInControllerLandscape.js";
import * as ht from "./MttLobbyListHelper.js";
import * as mt from "./GameViewLoader.js";

function main() {
    l._RF.push({}, "7ee99kbfntPLaz9KpZQjvwK", "HallMttDetailController", void 0);
    let ut = t("MttHallTabPage", function(t) {
        return t[t.Main = 0] = "Main", t[t.Players = 1] = "Players", t[t.Satellite = 2] = "Satellite", t
    }({}));
    t("default", class extends V {
        get view() {
            return this._view
        }
        get model() {
            return this._model
        }
        constructor(t, e, a) {
            super(t, q, e, a), this.buyInController = void 0, this._hallScript = void 0, this.hallScene = void 0, this.signUpPopUpScript = void 0, this.prizepoolController = void 0, this._mttDetailPlayerController = void 0, this._mttDetailTableController = void 0, this._mttBlindStructureController = void 0, this.detailInfoController = void 0, this.payoutController = void 0, this.multiflightFeederComp = void 0, this.satelliteFeederComp = void 0, this.eventListController = null, this.mttGameListController = void 0, this._alreadyStarted = !1, this._isCallGameView = !1, this._lastTournamentID = 0, this._rebuyInterval = 15, this._satellitePageRefreshInterval = 5, this._backList = [], this.isShowingBefore = !1, this.scheduleRender = null, c.appConfig.isLandscapeLayout || O.showPanelFromRight(e, !1, !0)
        }
        onInitializeBegin(t) {
            var a;
            this._hallScript = E.instance.getParentScene(e, null == (a = this.view.engineView) ? void 0 : a.node).getComponentInChildren(_), this.hallScene = e.getScene().getComponentInChildren(p), this.view.onClickButtonBack = this.onClickButtonBack.bind(this), this.view.onClickButtonAction = this.processButtonAction.bind(this), this.view.onClickButtonDetail = this.onClickPanelDetail.bind(this), this.view.onClickButtonEntries = this.showPanelEntries.bind(this), this.view.onClickButtonPlayers = this.onClickPanelPlayer.bind(this), this.view.onClickButtonTables = this.onClickPanelTable.bind(this), this.view.onClickButtonPrizepool = this.onClickPanelPrizePool.bind(this), this.view.onClickButtonPayout = this.onClickPanelPayout.bind(this), this.view.onClickButtonStructure = this.onClickPanelStructure.bind(this), this.view.onClickButtonShowFullDescription = this.toggleFullDescription.bind(this), this.view.hideHallMttDetailView = this.hideHallMttDetailView.bind(this), this.view.onClickPlayerTableItem = this.watchTable.bind(this), this.view.onTabSwitched = this.onTabSwitched.bind(this)
        }
        onInitializeEnded(t) {
            this.eventListController = this.view.getEventListPage().getComponent(nt), O.showPanelFromRight(this.eventListController.node, !1, !0);
            let e = this.view.getPrizePoolRendererNode();
            this.prizepoolController = new J(e), this.prizepoolController.init(), this.prizepoolController.registerPageShowCallback(this.onShowPanelInMainPage.bind(this)), this.prizepoolController.registerPageHideCallback(this.onBackToLobbyPage.bind(this)), this._mttBlindStructureController = new $(this.view.getBlindStructureEngineView()), this._mttBlindStructureController.init(), this._mttBlindStructureController.registerPageShowCallback(this.onShowPanelInMainPage.bind(this)), this._mttBlindStructureController.registerPageHideCallback(this.onBackToLobbyPage.bind(this));
            const a = this.view.getInfoCompNode();
            this.detailInfoController = new j(a), this.detailInfoController.init(), this.detailInfoController.registerPageShowCallback(this.onShowPanelInMainPage.bind(this)), this.detailInfoController.registerPageHideCallback(this.onBackToLobbyPage.bind(this)), this.detailInfoController.registerOnClickShowAllTargetEventCallback(this.showTargetEvent.bind(this)), this.detailInfoController.registerOnClickInfoButtonCallback(this.onClickInfoButton.bind(this));
            const i = this.view.getPayoutCompNode();
            this.payoutController = new lt(i), this.payoutController.init(), this.payoutController.registerPageShowCallback(this.onShowPanelInMainPage.bind(this)), this.payoutController.registerPageHideCallback(this.onBackToLobbyPage.bind(this)), this._mttDetailPlayerController = this.view.getPlayerComp(), this._mttDetailPlayerController.registerOnHideCallback(this.onBackToLobbyPage.bind(this)), this._mttDetailTableController = this.view.getTableComp(), this._mttDetailTableController.registerOnHideCallback(this.onBackToLobbyPage.bind(this)), this.multiflightFeederComp = this.view.getMultiflightFeederComp(), this.multiflightFeederComp.registerOnClickShowAllCallback(this.showFeederEvent.bind(this)), this.satelliteFeederComp = this.view.getSatelliteFeederComp(), this.satelliteFeederComp.registerOnClickShowAllCallback(this.showSatelliteEvent.bind(this))
        }
        updateDisplayCurrency() {
            var t, e;
            !1 !== Boolean(this.model.data) && (this.model.data.convertCurrency = Y.isMTTJPcurrencySwitcherOn, this.view.updateDisplayCurrency(), null == (t = this.prizepoolController) || t.updateDisplayCurrency(), null == (e = this.detailInfoController) || e.updateDisplayCurrency())
        }
        showLoading(t) {
            this.view.setLoading(t)
        }
        showPopup(t, e, a, i) {
            Y.emitMessage(Q, {
                message: t,
                callback: e,
                title: a,
                key: i
            })
        }
        destroy() {
            this.hide(!0), super.destroy(), this.prizepoolController && this.prizepoolController.destroy(), this._mttBlindStructureController && this._mttBlindStructureController.destroy(), this.detailInfoController && this.detailInfoController.destroy(), null !== this.scheduleRender && (clearInterval(this.scheduleRender), this.scheduleRender = null), this.buyInController && this.buyInController.destroy()
        }
        convertData(t, e) {
            this.model.setDetailData(e), this.model.setTournamentData(t);
            const a = H.isRegistered(this.model.detailData),
                i = H.isPaused(this.model.detailData),
                o = H.getStartingTimeFromDetail(e),
                l = new x;
            l.startingTime = o, l.gameDuration = H.getGameDuration(this.model.detailData), l.fullDescription = H.getFullDescriptionMttDetail(e.Desc, e.DescI18N);
            let [n, , s] = H.getMttRoomStatusI18n(this.model.tournamentData);
            l._regStatus = s, l.roomStatus = f(H.getOverriddenI18nStatusKey(n, i, a)), l.entries = H.getEntrantsCountDetail(e, o), l.playOnJoin = H.getPlayOnJoinDetail(e, o), l.hasTicket = H.hasTicket(t), l.isShortDeck = H.isDetailShortDeck(e), l.isBounty = H.getIsBounty(this.model.detailData.TournamentMode), l.prizePool = N.DisplayGold(this.model.detailData.AllGamePot + this.model.detailData.BountyPot), l.seats = H.getMaxPlayers(this.model.tournamentData), l.curBlind = H.getCurBlind(e.HoldemBlindsConfig, this.model.detailData), l.currentLevel = e.CurrentLevel, l.buyIn = H.getBuyIn(this.model.tournamentData), l.regFee = H.getRegFee(this.model.tournamentData), l.srvFee = H.getSrvFee(this.model.tournamentData), l.isRegistered = a, l.isPaused = i, l.timerStop = e.TimerStop, l.currencyRate = t.CurrencyRate, l.displayCurrency = e.DisplayCurrency, l.currency = t.Detail.currency, l.convertCurrency = !1, l.bannerType = e.Banners[0] || B.commonProto.MttBanner.Banner_None, l.iconType = e.Icons[0] || B.commonProto.MttIcon.Icon_None, l._showing = !0, l.multiFlightId = e.MultiFlightId, l.multiFlightLevel = e.MultiFlightLevel, l.blindConfig = e.HoldemBlindsConfig;
            let r = 1;
            return l.blindConfig.forEach((t => {
                t.Level == r && (t.TimeBank = 1 == r ? e.InitialTimeBank : e.TimeBankAdd, r += e.RestIntervalLevel)
            })), l.players = e.PlayersDetail, l.prizeMoney = e.PrizeMoney, l.prizeTools = e.PrizeTools, l.tables = e.TablesDetail, l.targetId = e.TargetID, l.targetEventName = cc_mtt.vv.DataManager.i18DataFromServer(e.Day2TournamentName, e.Day2TournamentNameI18N), l.targetEvents = [], l.feederEvents = [], l.satelliteEvents = [], l.timerStop ? l.timeStampLateReg = H.timeLeftSecToTimeStamp(e.TimeLeftSec) : l.timeStampLateReg = this.syncRegLateFromMttItem(H.getStopSignUpTimestampFromMtt(t), H.getStopSignUpTimestampFromDetail(e)), this.model.detailData.RebuyParam && (l.rebuyParam = JSON.parse(this.model.detailData.RebuyParam)), this.model.detailData.MorebuyParam && (l.moreBuyParam = JSON.parse(this.model.detailData.MorebuyParam)), this._lastTournamentID !== t.Detail.Id && (this._isCallGameView = !1, this._lastTournamentID = t.Detail.Id), l
        }
        show(t, e, a, i = !0, o) {
            var l;
            cc_mtt.vv.ConsoleLog.log("MttHall show", a.TournamentId, o);
            const n = {
                pageIdx: this.view.getCurrentTabPageIndex(),
                tournamentData: H.convertMttTournamentInfoToMttLobbyItem(this.model.tournamentData),
                displayEventType: this.eventListController.displayEventType
            };
            this.isShowingBefore = null == (l = this.model.data) ? void 0 : l._showing, this.payoutController.showPanel(!H.isMultiFlightDay1(a)), this.prizepoolController.showPanel(H.isShowPrizePoolTabMttDetail(a)), this.detailInfoController.updateTargetEvent([], ""), this.registerEvent(), this.view.setLoading(!1), this.resetAllSubPanel(), this.showSatellitePage(!1), c.appConfig.getWalletConfig().checkAndSetGameTableCurrency(a), this.model.isAutoRefresh = !i;
            const s = this.convertData(e, a);
            s.needShowLoading = i, this.model.setData(s), this.model.setPageUpdated(t, a.TimeStamp), this.view.getNode().active = !0, O.showPanelFromRight(this.view.getNode(), !0, !0), this.setInfo(a), this.view.show(this.model), this.updateTimeDifference(), this.updateSignUpButton(), this.updateGameClock(this.model.data._timeDifference), this.setMttSchedule(), c.appConfig.isLandscapeLayout || this.hideAllSubPanel(), c.appConfig.isWebApp && c.appConfig.isWebApp && (Y.registerMessage(c.Enum.MessageCenterAction.onGoBack, this.onGoBackEvent.bind(this), this), Y.registerMessage(c.Enum.MessageCenterAction.onShowHall, this.onFocusPokerPage.bind(this), this)), this.hideLogo(), null != o && o.isReturnedFromDeposit ? (this.view.getSignUpButton().interactable && this.onSignUpClicked(), this.updateRelatedEvents(), this.view.switchTab(0)) : null != o && o.backData ? this.updateRelatedEvents().then((() => {
                var t;
                switch (this.view.switchTab(null != (t = this.view.getRender().tabs[null == o ? void 0 : o.backData.pageIdx]) && t.active ? null == o ? void 0 : o.backData.pageIdx : 0), null == o ? void 0 : o.backData.displayEventType) {
                    case st.TargetEvent:
                        this.model.data.targetEvents.length > 0 && this.showTargetEvent();
                        break;
                    case st.Feeder:
                        this.model.data.feederEvents.length > 0 && this.showFeederEvent();
                        break;
                    case st.Satellite:
                        this.model.data.satelliteEvents.length > 0 && this.showSatelliteEvent()
                }
            })) : (this.isShowingBefore ? this.addBackList(n) : this._backList = [], this.updateRelatedEvents(), this.view.switchTab(0)), this.isShowingBefore = !0
        }
        hideLogo() {
            c.appConfig.isWebApp ? y.mttBackButtonVisible || (tt.getInstance().sendShowBackButton(!0, "", !0, !1), y.mttBackButtonVisible = !0) : c.MessageCenter.send(c.Enum.MessageCenterAction.DisableTopAppLogo)
        }
        hideAllSubPanel() {
            var t;
            this.hideAllPanelInMainPage(!0), this.hideAllPageInPlayersPage(!0), null == (t = this.eventListController) || t.hideImmediately()
        }
        resetAllSubPanel() {
            var t, e, a, i, o;
            this.hideAllSubPanel(), null == (t = this._mttDetailPlayerController) || t.reset(), null == (e = this._mttDetailTableController) || e.reset(), null == (a = this.satelliteFeederComp) || a.reset(), null == (i = this.multiflightFeederComp) || i.reset(), null == (o = this.eventListController) || o.reset()
        }
        hideAllPopUp() {
            var t;
            c.tools.visiblePopupCount > 0 && c.popUp.hidePopup(), null != (t = this.buyInController) && t.isShowing() && this.buyInController.hideImmediate()
        }
        hide(t = !1) {
            var e;
            null != (e = this.model) && e.data && (this.model.data._showing = !1), this.unregisterEvent(), this.model.setPageUpdated(C.ALL, 0), this.hideAllPopUp(), O.showPanelFromRight(this.view.getNode(), !1, !0), c.appConfig.isWebApp && (Y.unregisterMessage(c.Enum.MessageCenterAction.onGoBack, this), Y.unregisterMessage(c.Enum.MessageCenterAction.onShowHall, this), t || (tt.getInstance().sendShowBackButton(!1, "", !1), y.mttBackButtonVisible = !1)), c.MessageCenter.send(c.Enum.MessageCenterAction.RequestMttLobbyLevelList)
        }
        onClickButtonBack() {
            if (this._backList.length > 0) {
                const t = this._backList.pop();
                Y.emitMessage(X, {
                    tournamentData: t.tournamentData,
                    param: {
                        backData: t
                    }
                })
            } else this.hide()
        }
        showLogoBack() {
            c.MessageCenter.send(c.Enum.MessageCenterAction.EnableTopAppLogo)
        }
        registerEvent() {
            var t;
            a.isNative && a.os === a.OS.ANDROID && L.getInstance().addBackFunction("MttHall", this.onReturnClicked.bind(this)), null == (t = this.view.getNode()) || t.dispatchEvent(new it("onShowMttDetailsPanel", !0))
        }
        unregisterEvent() {
            var t;
            this.view.getRender().unscheduleAllCallbacks(), a.isNative && a.os === a.OS.ANDROID && L.getInstance().removeBackFunction("MttHall"), null == (t = this.view.getNode()) || t.dispatchEvent(new it("onHideMttDetailsPanel", !0))
        }
        hideHallMttDetailView() {
            this.hideImmediate()
        }
        hideImmediate() {
            var t;
            this.model.data && (this.model.data._showing = !1), this.hideAllPopUp(), O.showPanelFromRight(this.view.getNode(), !1, !0), this.unregisterEvent(), null != (t = this.model) && t.data && (this.model.data._showing = !1)
        }
        toggleFullDescription() {}
        showPanelEntries() {}
        showPanelPlayer() {
            this.hideAllPageInPlayersPage(), this._mttDetailPlayerController.render(K.getPlayerDetail(this.model.data.players, this.model.detailData, this.model.data.currency, this.model.data.displayCurrency, this.model.data.currencyRate, this.model.data.convertCurrency, this.model.curBigBlind), this.model.detailData.TournamentId), this._mttDetailPlayerController.show(), this.model.setCurrentPage(C.PLAYER), this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        showPanelTable() {
            this.hideAllPageInPlayersPage(), this._mttDetailTableController.render({
                tableList: K.parseTableDetailList(this.model.data.tables),
                tournamentId: this.model.detailData.TournamentId,
                bigBlind: this.model.curBigBlind
            }), this._mttDetailTableController.show(), this.model.setCurrentPage(C.TABLE), this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        showPanelPrizepool() {
            this.hideAllPanelInMainPage(), this.prizepoolController.updateInfo(this.model.data.prizeMoney, this.model.data.prizeTools, this.model.detailData, this.model.tournamentData), this.prizepoolController.show(), this.model.setCurrentPage(C.REWARD), this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        showPanelDetail(t = !1) {
            this.detailInfoController.updateInfo(this.model.tournamentData, this.model.detailData, this.model.data), this.hideAllPanelInMainPage(), t ? this.detailInfoController.showImmdiately() : this.detailInfoController.show(), this.model.setCurrentPage(C.LOBBY), this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        showPanelStructure() {
            let t = cc_mtt.vv.DataManager.getNow() < H.getStartingTimeFromDetail(this.model.detailData).getTime() ? 0 : this.model.detailData.CurrentLevel;
            this._mttBlindStructureController.updateInfo(this.model.data.blindConfig, t, this.model.detailData.LevelStopSignup, this.model.detailData.LevelTime, this.model.detailData.GameMode == B.commonProto.MTT_GAME_MODE.SHORT_DECK, this.model.detailData.BlindHands), this.hideAllPanelInMainPage(), this._mttBlindStructureController.show(), this.model.setCurrentPage(C.LOBBY)
        }
        showPanelPayout() {
            this.payoutController.updateInfo(this.model), this.hideAllPanelInMainPage(), this.payoutController.show(), this.model.setCurrentPage(C.REWARD), this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        onClickPanelDetail() {
            this.detailInfoController.isShowing() ? this.detailInfoController.hide() : this.showPanelDetail()
        }
        onClickPanelStructure() {
            this._mttBlindStructureController.isShowing() ? this._mttBlindStructureController.hide() : this.showPanelStructure()
        }
        onClickPanelPrizePool() {
            this.prizepoolController.isShowing() ? this.prizepoolController.hide() : this.showPanelPrizepool()
        }
        onClickPanelPayout() {
            this.payoutController.isShowing() ? this.payoutController.hide() : this.showPanelPayout()
        }
        onClickPanelPlayer() {
            this._mttDetailPlayerController.isShowing() ? this._mttDetailPlayerController.hide() : this.showPanelPlayer()
        }
        onClickPanelTable() {
            this._mttDetailTableController.isShowing() ? this._mttDetailTableController.hide() : this.showPanelTable()
        }
        hideAllPanelInMainPage(t = !1) {
            const e = [this.detailInfoController, this._mttBlindStructureController, this.payoutController, this.prizepoolController];
            for (const a of e) null != a && a.isShowing() && (t ? a.hideImmediate() : a.hide())
        }
        hideAllPageInPlayersPage(t = !1) {
            const e = [this._mttDetailPlayerController, this._mttDetailTableController];
            for (const a of e) null != a && a.isShowing() && (t ? a.hideImmediately() : a.hide())
        }
        processButtonAction() {
            this.onSignUpClicked()
        }
        isMaxTablesReached() {
            const t = c.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent,
                e = c.getTotalOpeningGames();
            return !Z.selfTours.getPlayingTournaments().some((t => t.TournamentId == this.model.detailData.TournamentId)) && e >= t
        }
        onSignUpClicked() {
            if (c.dataHandler.getUserData().showWebAppTouristPopup()) return;
            var t;
            if (c.dataHandler.getUserData().showTouristLimited()) return void(c.authenticator.autoShowBuyInMTTById = null == (t = this.model.detailData) ? void 0 : t.TournamentId);
            if (c.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
            const e = this.model.detailData.Status == B.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            if (c.appConfig.isWebApp && !e && this.isMaxTablesReached()) {
                let t = c.config.getStringData("Max_playing_table_warning_title"),
                    e = c.StringTools.formatC(c.config.getStringData("Max_concurrent_game_tables_mtt_web"), maxTablesConcurrent),
                    a = c.Enum.PopUpIconType.PhoneWarning;
                c.popUp.showMsg({
                    subtitle: t,
                    txt: e,
                    iconType: a
                })
            } else if (this.isMaxTablesReached() && this.model.isLateReg) {
                const t = c.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent;
                let e = c.StringTools.formatC(c.config.getStringData("Max_concurrent_game_tables"), t);
                ht.showMsgPopup(e)
            } else this.getStage2RegCheckingInProgressStatus() || (this.hallScene && !this.hallScene.isStage2RegistrationDone() ? (this.setStage2RegCheckingInProgressStatus(!0), this.hallScene.checkStage2Registration()) : this.OnStage2RegitrationComplete())
        }
        setStage2RegCheckingInProgressStatus(t) {
            var e;
            null != (e = this.model) && e.data && (this.model.data.isStage2RegCheckingInProgress = t)
        }
        getStage2RegCheckingInProgressStatus() {
            var t;
            return null == (t = this.model) || null == (t = t.data) ? void 0 : t.isStage2RegCheckingInProgress
        }
        OnStage2RegitrationComplete() {
            if (w.instance || b.coolDownButton(this.view.getSignUpButton(), this.hallScene), this.model.data.mttButtonStatus === D.SIGN_UP_CANCEL || at.getInstance().isAbleToJoinRoom()) {
                switch (this.model.data.mttButtonStatus) {
                    case D.SIGN_UP: {
                        var t;
                        let e, a = t => {
                                e = t.string, c.worldNet.JoinRoomAccessCheck_Request(0, 0, i)
                            },
                            i = () => {
                                this.callSignUpPopUp(e, !1)
                            };
                        null != (t = this.model.detailData) && t.isPrivate ? c.popUp.showMsg({
                            title: c.config.getStringData("Tournament_Enter_password_text"),
                            txt: c.config.getStringData("Tournament_Enter_password_Info"),
                            needPasswordField: !0,
                            isTwoBtn: !0,
                            iconType: m.Password,
                            sureCallback: a.bind(this),
                            cancelCallback: null,
                            msgType: c.Enum.ToastType.ToastTypeSuccess,
                            sureButtonType: u.PopupConfirmBtn
                        }) : c.worldNet.JoinRoomAccessCheck_Request(0, 0, i)
                    }
                    break;
                    case D.REVIVE: {
                        let t = () => {
                            this.callSignUpPopUp(null, !0)
                        };
                        c.worldNet.JoinRoomAccessCheck_Request(0, 0, t)
                    }
                    break;
                    case D.BACK_TO_GAME:
                        this.callMttGameView();
                        break;
                    case D.SIGN_UP_CANCEL:
                        this.handleSignUpCancel()
                }
                this.setStage2RegCheckingInProgressStatus(!1)
            }
        }
        callSignUpPopUp(t = null, e = !1) {
            this.model.data._popupIsCalled || (this.model.data._popupIsCalled = !0, this.addSignUpLoading(), cc_mtt.vv.DataManager.updateToolList((() => {
                var a, i, o;
                if (!this.model.detailData || !this.engineView) return;
                let l;
                switch (this.model.data.mttButtonStatus) {
                    case D.REVIVE:
                        l = null != (a = this.model.data.rebuyParam) && a.defineParam ? this.model.data.rebuyParam.regFee + this.model.data.rebuyParam.srvFee : this.model.detailData.RegFee + this.model.detailData.SrvFee;
                        break;
                    default:
                        l = this.model.detailData.RegFee + this.model.detailData.SrvFee
                }
                l = N.DisplayGold(l);
                let n = f("POPUP_TITLE.JOIN_TOURNAMENT"),
                    s = !1;
                e && null != (i = this.model) && null != (i = i.data) && i.rebuyParam && null != (o = this.model) && null != (o = o.data) && null != (o = o.rebuyParam) && o.defineParam && (s = !0);
                let h = H.getSignUpPropertyByDetail(n, this.model.detailData, s, this.model.data);
                if (h.toolOption && !h.goldOption && h.tools.length < 1) {
                    var m;
                    let t = {
                        UserId: cc_mtt.vv.DataManager.userId,
                        TournamentId: null == (m = this.model.detailData) ? void 0 : m.TournamentId,
                        TicketId: h.tools,
                        PlatForm: I.instance.getPlatform()
                    };
                    r.hasInstance() && r.getInstance().endSpan(d.BuyIn, "buyin-error", {
                        no_ticket: "true",
                        inputData: JSON.stringify(t),
                        tournamentId: t.TournamentId
                    });
                    const e = "POPUP_HINTS.NO_TOOL",
                        a = "REGISTER.UNABLE_REGISTER";
                    this.showPopup(e, void 0, a), this.model.data._popupIsCalled = !1, this.removeSignUpLoading()
                } else this.createSignUpPopUp(h, e, t)
            })))
        }
        handleSignUp(t, e) {
            var a, o;
            if (!this.model.detailData) return;
            let l = (a = "") => {
                a && this.handleSignUp(t, e)
            };
            var n;
            if (null != (a = c.geoComplyManager) && a.isGeoTokenRequired()) return void(null == (n = c.geoComplyManager) || n.requestValidToken(l, (() => {})));
            if (null != (o = c.geoComplyManager) && o.checkForLocationServices(l)) return;
            this.addSignUpLoading(), this.changeSignUpButtonStatus(D.REGISTERING);
            let s = c.appConfig.canRegisterMore(),
                m = {
                    UserId: cc_mtt.vv.DataManager.userId,
                    TournamentId: this.model.detailData.TournamentId,
                    TicketId: t ? t.Id : 0,
                    PlatForm: I.instance.getPlatform(),
                    isDesktop: s,
                    PrivateMttToken: h.EncryptStringCBC(e).toString(),
                    GeoComplianceToken: "",
                    RegGoldType: 0
                };
            var u;
            c.appConfig.getSecurityConfig().useGeoComply && (m.GeoComplianceToken = null == (u = c.geoComplyManager) ? void 0 : u.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt sign up"), r.hasInstance() && r.getInstance().addEventToSpan(d.BuyIn, "requestMttPlayerSignUp", {
                inputData: JSON.stringify(m),
                tournamentId: m.TournamentId
            }), R.requestMttPlayerSignUp(m, (a => {
                if (r.hasInstance() && r.getInstance().addEventToSpan(d.BuyIn, "finish", {
                        responseData: JSON.stringify(a)
                    }), a && a.ErrorCode) {
                    r.hasInstance() && r.getInstance().endSpan(d.BuyIn, "buyin-error"), a.ErrorCode == B.commonProto.ErrorCode.Mtt_Player_Already_SignUp && this.model.detailData.Status == B.commonProto.MTT_GAME_STATUS.NOT_STARTED && (H.addJoinedTournaments(m.TournamentId, {}), this.updateSignUpButton());
                    let o = f("ERROR_CODE_PKW." + v.getFullErrorCode(a));
                    switch (a.ErrorCode) {
                        case B.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join:
                            o = i.formatStr(o, c.appConfig.getGameConfig().gameTablesConcurrent.mtt);
                            break;
                        case B.commonProto.ErrorCode.Mtt_Tournament_Not_Allow_Signup_Now:
                            const {
                                hour: t, min: e, sec: l
                            } = E.instance.splitSecond(a.LastSeconds, {
                                hasDay: !1,
                                hasHour: !0
                            }), [n, s] = N.addStartPadding([t, e], 2, "0");
                            o = i.formatStr(o, `${n}:${s}`);
                            const r = cc_mtt.vv.DataManager.getNow();
                            r.setHours(r.getHours() + t, r.getMinutes() + e + this.model.detailData.AllowSignupHours, r.getSeconds() + l), cc_mtt.vv.ConsoleLog.log("update starting time", this.model.data.startingTime, "to", r), this.model.data.startingTime = r, this.model.detailData.StartingTime = r
                    }
                    this.removeSignUpLoading((() => {
                        const i = c.Enum.ThirdPartyErrorCode.MttErrorNotEnoughMoney;
                        if (a.ErrorCode == B.commonProto.ErrorCode.Platform_Response_Error && a.ExternalErrorCode && a.ExternalErrorCode.includes(i)) c.showOutOfFundsPopup(o, null, null, c.SHOP.RechargeClick);
                        else if (a.ErrorCode == B.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                            var l;
                            let i = mt.Buffer.from(a.GeoComplianceRes).toString("utf8");
                            i = c.tryParseJSON(i) || {}, null == (l = c.geoComplyManager) || l.serverErrorHandler(i, null, this.handleSignUp.bind(this, t, e), null, {
                                ErrorType: "MttSignUpFailed",
                                ErrorCode: a.ErrorCode.toString(),
                                ErrorDetails: JSON.stringify(i)
                            })
                        } else {
                            const t = () => {
                                c.appConfig.getGeneralConfig().multiWindowEnabled && c.authenticator.showDelayedPromo()
                            };
                            c.popUp.showMsg({
                                txt: o,
                                sureCallback: t,
                                cancelCallback: t
                            })
                        }
                        this.changeSignUpButtonStatus(D.SIGN_UP)
                    }))
                } else if (a) {
                    r.hasInstance() && r.getInstance().endSpan(d.BuyIn, "buyin-success"), H.addJoinedTournaments(this.model.detailData.TournamentId, {});
                    let t = cc_mtt.vv.DataManager.getNow();
                    const e = this.model.data.startingTime && t.getTime() < this.model.data.startingTime.getTime();
                    c.dynamicPromoController.incrementPopupTrigger(S.LobbyPopup, T.TournamentBuyIn), (e || c.appConfig.getGeneralConfig().multiWindowEnabled) && (c.authenticator.delayShowPromoPopup ? c.authenticator.showDelayedPromo() : c.dynamicPromoController.showPromoPopup(S.LobbyPopup, T.TournamentBuyIn)), e ? (this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(D.SIGN_UP_CANCEL)
                    })), this.model.data._timeUpdate3 = this.model.data._updateDataInterval - 4, this.model.detailData.SignupCount++) : this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(D.BACK_TO_GAME), this.model.detailData && this.model.detailData.Status > B.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
                    })), c.appConfig.isLandscapeLayout ? this.requestLobbyListAndData() : this.view.getRender().scheduleOnce(this.requestLobbyListAndData.bind(this), 2)
                } else r.hasInstance() && (r.getInstance().endSpan(d.BuyIn, "buyin-error-no-data"), this.changeSignUpButtonStatus(D.SIGN_UP));
                this.updateMyJoinStatus()
            }), (t => {
                this.removeSignUpLoading(), this.showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0, null, "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        handleSignUpCancel() {
            this.showUnregisterPopup((() => {
                if (!this.model.detailData) return;
                this.addSignUpLoading();
                let t = {
                    UserId: cc_mtt.vv.DataManager.userId,
                    TournamentId: this.model.detailData.TournamentId
                };
                cc_mtt.vv.ConsoleLog.log("mtt sign up cancel"), this.changeSignUpButtonStatus(D.CANCELLING_REGISTER), R.requestMttPlayerSignUpCancel(t, (e => {
                    if (this.removeSignUpLoading(), e.ErrorCode) {
                        cc_mtt.vv.ConsoleLog.log("handleSignUpCancel err:", e.ErrorCode);
                        let t = "";
                        t = e.ErrorCode === B.commonProto.ErrorCode.Mtt_Tournament_Started ? "POPUP_HINTS.MTT_HALL.CANCEL_FAIL_GAME_STARTED" : e.ErrorCode === B.commonProto.ErrorCode.User_Operate_Frequent || e.ErrorCode === B.commonProto.ErrorCode.Mtt_AutoFeed_NotAllowCancel ? "ERROR_CODE_PKW." + v.getFullErrorCode(e) : {
                            Translation: "POPUP_HINTS.MTT_HALL.SIGN_UP_CANCEL_FAIL",
                            payload: t => f(t).replace("${errorCode}", v.getFullErrorCode(e))
                        }, this.showPopup(t, void 0), this.changeSignUpButtonStatus(D.SIGN_UP_CANCEL)
                    } else H.removeJoinedTournaments(t.TournamentId), this.updateSignUpButton(), this.model.data._timeUpdate3 = this.model.data._updateDataInterval - 4, this.model.detailData.SignupCount--, 0 == this.model.detailData.SignupCount && (this.model.detailData.GamePot = 0), c.appConfig.isLandscapeLayout ? this.requestLobbyListAndData() : this.view.getRender().scheduleOnce(this.requestLobbyListAndData.bind(this), 2)
                }), (t => {
                    var e;
                    this.removeSignUpLoading(), null == (e = this._hallScript) || e.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0), this.changeSignUpButtonStatus(D.SIGN_UP_CANCEL)
                }))
            }), (() => {}))
        }
        showUnregisterPopup(t, e) {
            c.popUp.showMsg({
                title: f("GAME_MENU.CANCEL_APPLY"),
                txt: f("GAME_MENU.CONFIRM_CANCEL_REGISTRATION"),
                isTwoBtn: !0,
                sureCallback: t,
                cancelCallback: e,
                onXCancelCallback: !0,
                cancelLabel: f("GAME_MENU.DO_NOT_CANCEL"),
                sureLabel: f("GAME_MENU.CANCEL_APPLY")
            })
        }
        handleRevive(t) {
            var e, a;
            let o = (e = "") => {
                e && this.handleRevive(t)
            };
            var l;
            if (null != (e = c.geoComplyManager) && e.isGeoTokenRequired()) return void(null == (l = c.geoComplyManager) || l.requestValidToken(o, (() => {})));
            if (null != (a = c.geoComplyManager) && a.checkForLocationServices(o)) return;
            this.addSignUpLoading();
            let n = {
                UserId: cc_mtt.vv.DataManager.userId,
                TournamentId: this.model.detailData.TournamentId,
                TicketId: t ? t.Id : 0,
                PlatForm: I.instance.getPlatform(),
                isDesktop: c.appConfig.canRegisterMore(!0),
                GeoComplianceToken: "",
                RegGoldType: 0
            };
            var s;
            c.appConfig.getSecurityConfig().useGeoComply && (n.GeoComplianceToken = null == (s = c.geoComplyManager) ? void 0 : s.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt reenter"), R.requestMttReenter(n, (e => {
                if (e && e.ErrorCode) {
                    cc_mtt.vv.ConsoleLog.log("handleRevive err:", e.ErrorCode);
                    let o = "ERROR_CODE_PKW." + v.getFullErrorCode(e);
                    if (e.ErrorCode == B.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join && (o = {
                            Translation: o,
                            payload: t => i.formatStr(f(t), c.appConfig.getGameConfig().gameTablesConcurrent.mtt)
                        }), e.ErrorCode == B.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                        var a;
                        let i = mt.Buffer.from(e.GeoComplianceRes).toString("utf8");
                        i = c.tryParseJSON(i) || {}, null == (a = c.geoComplyManager) || a.serverErrorHandler(i, null, this.handleRevive.bind(this, t), null, {
                            ErrorType: "MttReEnterFailed",
                            ErrorCode: e.ErrorCode.toString(),
                            ErrorDetails: JSON.stringify(i)
                        })
                    } else this.showPopup(o, void 0);
                    this.removeSignUpLoading()
                } else this.updateMyJoinStatus(), this.removeSignUpLoading(), this.changeSignUpButtonStatus(D.BACK_TO_GAME), this.model.detailData.Status > B.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
            }), (t => {
                this.removeSignUpLoading(), this.showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0, null, "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        callMttGameView(t = 0, e = 0) {
            let a = cc_mtt.vv.DataManager.getNow(),
                i = a.getTime(),
                o = this.model.data.startingTime && i > this.model.data.startingTime.getTime() - 6e4 && H.checkStartGameRequirementIsOk(this.model.detailData);
            if (cc_mtt.vv.ConsoleLog.log("callMttGameView", o, a, this.model.data.startingTime), o) try {
                const a = a => {
                    if (a) {
                        if (et.instance) {
                            let t = new B.commonProto.MttTournament;
                            t.Detail = new B.modelProto.MttTournament, t.Detail.Id = this.model.detailData.TournamentId, t.Detail.GameMode = this.model.detailData.GameMode;
                            let e = {
                                type: M.HOLDEM,
                                data: t,
                                gameMode: this.model.detailData.GameMode,
                                gameListId: U.GAME_LEVEL_LIST_ID.MTT,
                                index: 0,
                                isWatching: !1
                            };
                            et.instance.selectedRoomInfo = e
                        }
                        this._hallScript.callGameView(this.model.detailData.GameMode, U.GAME_LEVEL_LIST_ID.MTT, this.model.detailData.TournamentId, t, e, !1, this.model.detailData.PlayOnJoint, this.model.detailData.TournamentId, g.LobbyMttHallDetailAutoLaunch), this._isCallGameView = !0
                    } else this._hallScript.hidLoading(null, !1)
                };
                if (c.appConfig.getGameConfig().enableMultiTableBar && !c.appConfig.isWebApp && G.checkAndShow(!1, a)) return;
                a(!0)
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log("callMttGameView fail: ", JSON.stringify(t)), this._hallScript.hidLoading()
            } else cc_mtt.vv.ConsoleLog.log("callMttGameView game not start")
        }
        removeSignUpLoading(t, e = !1) {
            o(this._hallScript) && o(this._hallScript.loadingBlockerScript) && this._hallScript.loadingBlockerScript.hide("MTTSignUpLoading"), t && t()
        }
        addSignUpLoading() {
            if (o(this._hallScript) && o(this._hallScript.loadingBlockerScript)) {
                const t = c.appConfig.isLandscapeLayout ? null : this.view.getNode();
                this._hallScript.loadingBlockerScript.show("MTTSignUpLoading", t)
            }
        }
        createSignUpPopUp(t, e = !1, a = null) {
            this.removeSignUpLoading(), this.buyInController = c.appConfig.isLandscapeLayout ? new rt(this, this.view.getSignUpPopup()) : new z(this, this.view.getSignUpPopup()), this.buyInController.init();
            let i = {
                signUpBoxProperty: t,
                tournamentId: this.model.detailData.TournamentId,
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                gameMode: this.model.detailData.GameMode,
                hallMttDetailData: this.model.data,
                dateInfoString: this.view.getDateInfoString(),
                regStatusString: this.view.getRoomStatusString(),
                isLate: this.model.isLateReg,
                timeLeftSec: this.model.getLateRegEndTimestamp(),
                isRevive: e,
                regStatus: this.model.data._regStatus,
                password: a,
                startingCoin: this.model.detailData.StartingCoins,
                timeStampLateReg: this.model.data.timeStampLateReg,
                regFrom: F.LOBBY_HALL
            };
            this.buyInController.show(i)
        }
        changeSignUpButtonStatus(t) {
            var e, a, i, o;
            switch (this.model.data.mttButtonStatus = t, null == (e = this.view.getSignUpButton()) || null == (e = e.getComponent(s)) || e.showLoadingAnim(!1), t) {
                case D.SIGN_UP:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.SIGN_UP"), this.setSignUpButtonLabel(!0);
                    break;
                case D.SIGN_UP_CANCEL:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.UNREGISTER"), this.setSignUpButtonLabel(!0);
                    break;
                case D.SIGN_UP_STOP:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.SIGN_UP"), this.setSignUpButtonLabel(!1);
                    break;
                case D.BACK_TO_GAME:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.BACK_TO_GAME"), this.setSignUpButtonLabel(!0);
                    break;
                case D.REVIVE:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.REVIVE"), this.setSignUpButtonLabel(!0);
                    break;
                case D.OUT:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.OUT"), this.setSignUpButtonLabel(!1);
                    break;
                case D.END:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_END"), this.setSignUpButtonLabel(!1);
                    break;
                case D.SIGN_UP_NOT_START:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_NOT_START"), this.setSignUpButtonLabel(!1);
                    break;
                case D.RESET:
                    this.view.getSignUpButtonLabel().string = "", this.setSignUpButtonLabel(!1);
                    break;
                case D.REGISTERING:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.REGISTERING"), null == (a = this.view.getSignUpButton()) || null == (a = a.getComponent(s)) || a.showLoadingAnim(!0), this.setSignUpButtonLabel(!1);
                    break;
                case D.CANCELLING_REGISTER:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.CANCELLING_REGISTER"), null == (i = this.view.getSignUpButton()) || null == (i = i.getComponent(s)) || i.showLoadingAnim(!0), this.setSignUpButtonLabel(!1);
                    break;
                case D.AUTO_FEED:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_AUTO_FEED"), this.setSignUpButtonLabel(!1)
            }
            this.updateRoomStatus(this.model.detailData), I.instance.cv.MessageCenter.send("onUpdateStatusRoomMtt", {
                tourId: null == (o = this.model.tournamentData.Detail) ? void 0 : o.Id
            })
        }
        updateRoomStatus(t) {
            const e = H.isRegistered(t),
                a = H.isPaused(t);
            let [i, o, l] = H.getMttRoomStatusI18n(t);
            i = H.getOverriddenI18nStatusKey(i, a, e), this.model.data.roomStatus = f(i), this.model.data.isRegistered = e, this.model.data.isPaused = a, this.model.data._regStatus = l, this.view.updatRoomStatus()
        }
        showSignUpButton(t) {
            this.view.getSignUpButton().node.active = t
        }
        setSignUpButtonLabel(t) {
            this.view.getSignUpButton().interactable = t, this.setSignUpButtonColor(t ? this.model.data.mttButtonStatus == D.SIGN_UP_CANCEL ? 3 : 1 : 2)
        }
        setSignUpButtonColor(t) {
            if (!this.view.isActive() || !this.view.getSignUpButton().node.active) return;
            const e = [this.view.getSignUpButton().target.getComponent(n), this.view.getSignUpButtonLabel().getComponent(n)];
            W.applySignUpColor(t, e)
        }
        handleNoMoney() {
            var t;
            null == (t = this._hallScript) || t.callPopUpBoxWithTwoOptions("POPUP_HINTS.INSUFFICIENT_BALANCE", (() => {
                var t;
                null == (t = this._hallScript) || t.onClickTopUpOnOtherPage(this.view.getNode(), void 0)
            }), void 0, "ERROR_CODE_PKW.TITLE", null, "Deposit")
        }
        handleCoupon(t, e, a) {
            var o, l;
            let n = this.model.detailData ? (null == (o = this.model.detailData) ? void 0 : o.RegFee) + (null == (l = this.model.detailData) ? void 0 : l.SrvFee) : 0;
            if (t && t.Type === B.commonProto.TOOL_TYPE.coupon && t.Value != n) {
                var s;
                let o = "",
                    l = N.DisplayGold(t.Value, 2);
                o = l > n ? "POPUP_HINTS.HIGHER_COUPON_VALUE" : {
                    Translation: "POPUP_HINTS.LOWER_COUPON_VALUE",
                    payload: t => i.formatStr(f(t), l, n - l)
                }, null == (s = this._hallScript) || s.callPopUpBoxWithTwoOptions(o, (() => {
                    n - t.Value > cc_mtt.vv.DataManager.userData.Gold ? this.handleNoMoney() : e instanceof Function && e(t)
                }), (() => {
                    a instanceof Function && a()
                }), "POPUP_TITLE.JOIN_TOURNAMENT", this.view.getMttPopupsParent())
            } else e instanceof Function && e(t)
        }
        updateMyJoinStatus() {
            this.model.data.myJoinStatus = H.getMyJoinStatus(this.model.detailData), this.model.data.isAutoFeed = H.getIsAutoFeed(this.model.detailData), this.model.data.rebuyFlag = H.getRebuyFlag(this.model.detailData)
        }
        updateSignUpButton() {
            c.MessageCenter.send("updateMttDetail", {
                tournamentData: this.model.tournamentData
            });
            const {
                DataManager: t
            } = cc_mtt.vv;
            let e = t.getNow();
            this.updateMyJoinStatus();
            let a = Math.floor((e.getTime() - this.model.data.startingTime.getTime()) / 1e3);
            this.showSignUpButton(0 === this.model.data.multiFlightLevel || a >= -60), H.checkIsSignUpNotStart(this.model.data.startingTime, this.model.detailData) ? this.changeSignUpButtonStatus(D.SIGN_UP_NOT_START) : H.checkIsEnd(this.model.detailData) ? this.changeSignUpButtonStatus(D.END) : a > 0 ? this.model.data.myJoinStatus > 0 ? this.changeSignUpButtonStatus(D.BACK_TO_GAME) : this.model.data.myJoinStatus < 0 ? H.checkForSignUpStop(this.model.detailData) && !H.isDetailRebuyState(this.model.detailData) || H.checkForOverOutLimit(this.model.data.myJoinStatus, this.model.detailData) ? this.changeSignUpButtonStatus(D.OUT) : this.changeSignUpButtonStatus(D.REVIVE) : H.checkForSignUpStop(this.model.detailData) ? this.changeSignUpButtonStatus(D.SIGN_UP_STOP) : this.changeSignUpButtonStatus(D.SIGN_UP) : (-60 != a && 0 != a || this.requestDataToUpdate(), -60 === a ? !this._isCallGameView && this.model.data.myJoinStatus > 0 && this.callMttGameView() : a > -60 && H.checkStartGameRequirementIsOk(this.model.detailData) ? (this.showCountDown(a), a < 0 && this.model.data.myJoinStatus > 0 && !this._alreadyStarted && (this._alreadyStarted = !0, o(y.instance) && y.instance.requestMultiTableByTournamentID_MTT(this.model.detailData.TournamentId, (t => {
                t || (this._alreadyStarted = !1)
            })))) : (this.setSignUpButtonLabel(!0), this.changeSignUpButtonStatus(this.model.data.isAutoFeed ? D.AUTO_FEED : this.model.data.myJoinStatus > 0 ? D.SIGN_UP_CANCEL : D.SIGN_UP)))
        }
        showCountDown(t) {
            this.model.data.myJoinStatus > 0 ? this.changeSignUpButtonStatus(D.BACK_TO_GAME) : (this.changeSignUpButtonStatus(D.SIGN_UP), this.setSignUpButtonLabel(!1)), this.view.setGameClockLabel(""), this.closeMttPopups(), 0 === t && (this.model.data.myJoinStatus > 0 ? this.callMttGameView() : H.checkForSignUpStop(this.model.detailData) && this.changeSignUpButtonStatus(D.SIGN_UP_STOP))
        }
        closeMttPopups() {
            if (this.view.getMttPopupsParent().children.length > 0)
                for (let t of this.view.getMttPopupsParent().children) {
                    let e = t.getComponent(ot);
                    e && e.hide()
                }
            this.closeSignUpPopup()
        }
        closeSignUpPopup() {
            this.signUpPopUpScript && (o(this.signUpPopUpScript.node) ? this.signUpPopUpScript.onCancelClicked() : this.signUpPopUpScript = null)
        }
        requestLobbyListAndData() {
            this.requestDataToUpdate(), c.MessageCenter.send(c.Enum.MessageCenterAction.RequestMttLobbyLevelList)
        }
        requestDataToUpdate(t = C.ALL) {
            if (this.model.data._timeUpdate3 = 0, A.checkNetwork("requestMttTournamentDetail") || null == this.model.detailData) return;
            let e = this.model.detailData.TournamentId;
            c.appConfig.isLandscapeLayout && dt.getInstance().isTournamentCanceled(e) ? this.model.data._timeUpdate3 = this.model.data._updateDataInterval : k.requestMttTournamentDetail(e, (a => {
                if (o(this.view.getNode()) && this.model.data._showing && this.model.detailData && e == this.model.detailData.TournamentId)
                    if (a)
                        if (a.ErrorCode)
                            if (a.ErrorCode == B.commonProto.ErrorCode.Mtt_Tournament_Ended || a.ErrorCode == B.commonProto.ErrorCode.Mtt_Tournament_Canceled || a.ErrorCode == B.commonProto.ErrorCode.Mtt_Tournament_Release) {
                                let t = a.ErrorCode;
                                var i;
                                if (this.handleGameEndOrCancel(t), P.instance) null == (i = this.mttGameListController) || i.updateClosedTournament(e)
                            } else a.ErrorCode == B.commonProto.ErrorCode.Mtt_Tournament_No_Update && cc_mtt.vv.ConsoleLog.log("mtt hall no need update", t);
                else this.setInfo(null == a ? void 0 : a.TournamentDetail, t), this.model.setPageUpdated(t, a.TournamentDetail.TimeStamp), I.instance.cv.MessageCenter.send("syncMttItemFromMttDetail", this.model.tournamentData.Detail), a.TournamentDetail && cc_mtt.vv.ConsoleLog.log(`${this.model.detailData.TournamentName} (${this.model.detailData.TournamentId}, requestDataToUpdate): ${this.model.data.myJoinStatus}_${this.model.detailData.Status}_${a.TournamentDetail.CurrentLevel}_${a.TournamentDetail.LeftRiseBlindTime}_${a.TournamentDetail.PauseStatus}`);
                else cc_mtt.vv.ConsoleLog.log(`${this.model.detailData.TournamentName} (${this.model.detailData.TournamentId}, requestDataToUpdate): empty`)
            }), (t => {}), 1e3 * this.model.data._updateDataInterval, {
                page: t,
                pageTimestamp: this.model.getPageUpdated(t)
            })
        }
        handleGameEndOrCancel(t, e = 5) {
            var a, o;
            if (this.model.data.mttCancelOrEnd) return;
            y.instance && y.instance.removeMttRoom(null == (o = this.model.detailData) ? void 0 : o.TournamentId);
            this.model.data.mttCancelOrEnd = !0, this.model.detailData.Status = B.commonProto.MTT_GAME_STATUS.ENDED, this.view.getSignUpButton().interactable && this.setSignUpButtonLabel(!1);
            let l = "ERROR_CODE_PKW." + t,
                n = "ERROR_CODE_PKW.TITLE",
                s = (null == (a = this.model.detailData) ? void 0 : a.TournamentName) ?? "";
            31004 == t && (l = {
                Translation: l,
                payload: t => i.formatStr(f(t), s)
            }, n = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), t == B.commonProto.ErrorCode.Mtt_Tournament_Canceled ? this.view.setGameClockLabel(f("MTT_HALL.GAME_TIMER.GAME_CANCEL")) : t == B.commonProto.ErrorCode.Mtt_Tournament_Ended && this.view.setGameClockLabel(f("MTT_HALL.GAME_TIMER.GAME_OVER")), this.closePopUps(), t == B.commonProto.ErrorCode.Mtt_Tournament_Ended && c.appConfig.getLobbyConfig().mtt.disableTournamentEndedPopup ? this.onReturnClicked() : this._hallScript.callPopUpBox(l, (() => {
                this.onReturnClicked()
            }), n)
        }
        onReturnClicked() {
            o(this.view.getNode()) && this.model.data._showing && (a.isNative && a.os === a.OS.ANDROID && L.getInstance().removeBackFunction("MttHall"), this.hide())
        }
        closePopUps() {
            if (this.closeMttPopups(), !A.checkNetwork("mttHall") && this._hallScript && this._hallScript.layers[7].children.length > 0) {
                for (let t of this._hallScript.layers[7].children) {
                    let e = t.getComponent(ot);
                    e && e.hide()
                }
                cc_mtt.vv.DataManager.popUps = []
            }
        }
        syncRegLateFromMttItem(t, e) {
            return H.timeStampToTimeLeftSec(t) > H.timeStampToTimeLeftSec(e) ? e : t
        }
        setInfo(t = null, e = C.ALL) {
            var a, i, o, l, n, s;
            if (!t || this.model.currentPage != e && e != C.ALL) return;
            const {
                HoldemBlindsConfig: r,
                PPBasePotConfig: d,
                PrizeMoney: h,
                PrizeTools: m,
                PrizeCircleInfo: u,
                PlayersDetail: g,
                CelebrityList: p,
                TablesDetail: S,
                ...T
            } = t;
            cc_mtt.vv.ConsoleLog.log("mtt hall setInfo", e, T), cc_mtt.vv.ConsoleLog.log("mtt hall setInfo players", g), cc_mtt.vv.ConsoleLog.log("mtt hall setInfo prize", h, m, u), cc_mtt.vv.ConsoleLog.log("mtt hall setInfo table", S);
            const D = cc_mtt.vv.DataManager.getNow().getTime();
            switch (this.model.setPageUpdated(e, t.TimeStamp), c.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t), this.model.data.mttCancelOrEnd = !1, this.model.setDetailData(t), this.model.detailData.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N), this.model.data.isPaused = H.isPaused(t), this.model.data.timerStop = t.TimerStop, this.model.data.startingTime = H.getStartingTimeFromDetail(t), this.model.data.isStarted = D > this.model.data.startingTime.getTime(), this.model.data.gameDuration = H.getGameDuration(this.model.detailData), this.model.data.timeStampRestRestart = t.LeftRestTime ? D + 1e3 * t.LeftRestTime : 0, this.model.data.entries = H.getEntrantsCountDetail(this.model.detailData, this.model.data.startingTime), this.model.data.playOnJoin = H.getPlayOnJoinDetail(this.model.detailData, this.model.data.startingTime), this.model.data.prizePool = N.DisplayGold(this.model.detailData.AllGamePot + this.model.detailData.BountyPot), this.model.data.timeStampLateReg = H.getStopSignUpTimestampFromDetail(t), this.model.data.timeStampNextBreak = H.timeLeftSecToTimeStamp(t.LeftEnterRestTime), this.model.data.timeStampWillPlay = t.WillPlayStartTime ? 1e3 * t.WillPlayStartTime : -1, Y.emitMessage("timeStampLateRegUpdated", {
                    id: t.TournamentId,
                    timeStampLateReg: this.model.data.timeStampLateReg
                }), e) {
                default:
                    this.model.data.players = t.PlayersDetail, this.model.data.prizeMoney = t.PrizeMoney, this.model.data.prizeTools = t.PrizeTools, this.model.data.tables = t.TablesDetail, this.model.data.payouts = H.getPayoutList(t);
                    break;
                case C.LOBBY:
                    break;
                case C.PLAYER:
                    this.model.data.players = t.PlayersDetail;
                    break;
                case C.REWARD:
                    this.model.data.prizeMoney = t.PrizeMoney, this.model.data.prizeTools = t.PrizeTools, this.model.data.payouts = H.getPayoutList(t);
                    break;
                case C.TABLE:
                    this.model.data.tables = t.TablesDetail
            }
            if (this.model.detailData.RebuyParam && (this.model.data.rebuyParam = JSON.parse(this.model.detailData.RebuyParam)), this.model.detailData.MorebuyParam && (this.model.data.moreBuyParam = JSON.parse(this.model.detailData.MorebuyParam)), this.model.tournamentData.Detail.Status = t.Status, this.updateRoomStatus(this.model.detailData), this.view.updateView(this.model), null != (a = this.detailInfoController) && a.isShowing() && this.detailInfoController.updateInfo(this.model.tournamentData, this.model.detailData, this.model.data), null != (i = this.prizepoolController) && i.isShowing() && this.prizepoolController.updateInfo(this.model.data.prizeMoney, this.model.data.prizeTools, this.model.detailData, this.model.tournamentData), null != (o = this.payoutController) && o.isShowing() && this.payoutController.updateInfo(this.model), null != (l = this._mttDetailPlayerController) && l.isShowing() && this._mttDetailPlayerController.render(K.getPlayerDetail(this.model.data.players, this.model.detailData, this.model.data.currency, this.model.data.displayCurrency, this.model.data.currencyRate, this.model.data.convertCurrency, this.model.curBigBlind), this.model.detailData.TournamentId), null != (n = this._mttDetailTableController) && n.isShowing() && this._mttDetailTableController.render({
                    tableList: K.parseTableDetailList(this.model.data.tables),
                    tournamentId: this.model.detailData.TournamentId,
                    bigBlind: this.model.curBigBlind
                }), null != (s = this._mttBlindStructureController) && s.isShowing()) {
                let e = cc_mtt.vv.DataManager.getNow() < H.getStartingTimeFromDetail(t).getTime() ? 0 : this.model.detailData.CurrentLevel;
                this._mttBlindStructureController.updateInfo(this.model.data.blindConfig, e, this.model.detailData.LevelStopSignup, this.model.detailData.LevelTime, this.model.detailData.GameMode == B.commonProto.MTT_GAME_MODE.SHORT_DECK, this.model.detailData.BlindHands)
            }
        }
        updateTimeDifference() {
            this.model.data._timeDifference = Math.floor((cc_mtt.vv.DataManager.getNow().getTime() - this.model.data.startingTime.getTime()) / 1e3)
        }
        updateGameClock(t) {
            if (this.model.detailData)
                if (H.checkIsSignUpNotStart(this.model.data.startingTime, this.model.detailData)) this.view.setGameClockLabel("00:00");
                else if (H.checkIsEnd(this.model.detailData)) this.view.setGameClockLabel("00:00");
            else if (H.checkHasTournamentStartTime(this.model.detailData))
                if (t <= 0) t = Math.abs(t), this.view.setGameClockLabel("00:00"), 0 == Math.floor(t) && (this.model.detailData.LeftRiseBlindTime = this.model.detailData.LevelTime - 1);
                else if (this.model.detailData.BlindHands > 0) this.view.setGameClockLabel("00:00");
            else {
                const e = this.model.data.blindConfig.length,
                    a = this.model.detailData.PauseStatus || this.model.detailData.Status > 100,
                    i = this.model.detailData.timeStampLateReg && !a ? H.timeStampToTimeLeftSec(this.model.detailData.timeStampLateReg) : this.model.detailData.TimeLeftSec;
                if (this.model.detailData.CurrentLevel >= e || this.model.detailData.BlindLevelPause && this.model.detailData.CurrentLevel >= this.model.detailData.BlindLevelPause) this.view.setGameClockLabel("00:00");
                else if (this.model.detailData.Status == B.commonProto.MTT_GAME_STATUS.STARTED && (this.model.detailData.CurrentLevel >= this.model.detailData.LevelStopSignup || i <= 0 && i >= -this._rebuyInterval)) this.view.setGameClockLabel("00:00");
                else if (a) this.view.setGameClockLabel(H.handleTimeLabel(this.model.detailData.LeftRiseBlindTime).join(":"));
                else if (0 === this.model.detailData.LeftRiseBlindTime) {
                    let a = this.model.detailData.CurrentLevel > parseInt(this.view.getCurLevelLabel().string);
                    t > 20 && !a && (this.view.getCurLevelLabel().string = (this.model.detailData.CurrentLevel + 1).toString()), this.model.detailData.CurrentLevel + 1 >= e ? this.view.setGameClockLabel("00:00") : (this.model.detailData.LeftRiseBlindTime = this.model.detailData.LevelTime, this.view.setGameClockLabel(H.handleTimeLabel(this.model.detailData.LeftRiseBlindTime--).join(":")))
                } else this.model.detailData.LeftRiseBlindTime < 0 && (this.model.detailData.LeftRiseBlindTime = this.model.detailData.LevelTime), this.view.setGameClockLabel(H.handleTimeLabel(this.model.detailData.LeftRiseBlindTime--).join(":"))
            } else this.view.setGameClockLabel("00:00")
        }
        setMttSchedule() {
            this.resetTimer(), null !== this.scheduleRender && (clearInterval(this.scheduleRender), this.scheduleRender = null), this.scheduleRender = setInterval((() => {
                this.setMttScheduleAction()
            }), 1e3)
        }
        setMttScheduleAction() {
            var t;
            let e = Math.floor(this.model.data._timeDifference);
            this.updateTimeDifference(), this.updateTime(), -60 != e && 0 != e || this.requestDataToUpdate(), this.updateGameClock(this.model.data._timeDifference), null == (t = this.detailInfoController) || t.schedulerAction()
        }
        updateTableJoinStatus(t = !1) {
            t && this.onSignUpClicked()
        }
        updateTime() {
            this.model.data.startingTime && (this.updateTimeDifference(), this.updateSignUpButton()), this.model.data.mttCancelOrEnd || (this.autoEnterWhenStart(), this.model.data._timeUpdate2 += 1, this.model.data._timeUpdate2 >= 5 && (this.model.data._timeUpdate2 = 0, H.checkTableToUpdateJoinStatus((() => {
                this.updateTableJoinStatus()
            }))), this.model.detailData && this.model.detailData.Status == B.commonProto.MTT_GAME_STATUS.ENDED || (this.model.data._timeUpdate3 += 1, this.model.data._timeUpdate3 >= this.model.data._updateDataInterval && this.requestDataToUpdate(this.model.currentPage)))
        }
        autoEnterWhenStart() {
            if (this.model.data.startingTime && !this.model.data._autoEnterCalled && H.checkStartGameRequirementIsOk(this.model.detailData)) {
                let t = this.model.data._timeDifference;
                t >= 0 && t < 1 && (this.model.data._autoEnterCalled = !0, this.model.data.myJoinStatus > 0 ? this.callMttGameView() : H.checkForSignUpStop(this.model.detailData) && this.changeSignUpButtonStatus(D.SIGN_UP_STOP))
            }
        }
        resetTimer() {
            this.model.data._timeUpdate = 0, this.model.data._timeUpdate2 = 0, this.model.data._timeUpdate3 = 1
        }
        isGamePlaying() {
            return this.model.detailData && H.isGamePlaying(this.model.detailData.Status)
        }
        watchTable(t = 0, e = 0) {
            at.getInstance().isAbleToJoinRoom() && (!c.appConfig.getGeneralConfig().multiWindowEnabled && w.instance || this.isGamePlaying() && (c.appConfig.isLandscapeLayout || this.view.setLoading(!0), this.callMttGameView(t, e)))
        }
        setPopupIsCalled(t) {
            this.model.data && (this.model.data._popupIsCalled = t)
        }
        onGoBackEvent() {
            var t, e, a, i;
            switch (null == (t = this._hallScript) || null == (t = t.dialogController) || t.hideAllDialogBox(), !0) {
                case c.tools.visiblePopupCount > 0:
                    c.popUp.hidePopup();
                    break;
                case null == (e = this.signUpPopUpScript) ? void 0:
                    e.node.active: this.closeSignUpPopup();
                    break;
                case null == (a = this.buyInController) ? void 0:
                    a.isShowing(): this.buyInController.hide();
                    break;
                case null == (i = this.eventListController) ? void 0:
                    i.isShowing(): this.eventListController.hide();
                    break;
                default:
                    this.onClickButtonBack()
            }
        }
        onFocusPokerPage() {
            var t, e, a, i, o, l, n, s;
            this.hide(!0), y.mttBackButtonVisible = !1, null == (t = this._hallScript) || null == (t = t.dialogController) || t.hideAllDialogBox(), c.tools.visiblePopupCount > 0 && c.popUp.hidePopup(), (null == (e = this.signUpPopUpScript) ? void 0 : e.node.active) && this.closeSignUpPopup(), (null == (a = this.buyInController) ? void 0 : a.isShowing()) && this.buyInController.hide(), (null == (i = this.prizepoolController) ? void 0 : i.isShowing()) && this.prizepoolController.hideImmediate(), (null == (o = this.detailInfoController) ? void 0 : o.isShowing()) && this.detailInfoController.hideImmediate(), (null == (l = this._mttBlindStructureController) ? void 0 : l.isShowing()) && this._mttBlindStructureController.hideImmediate(), (null == (n = this._mttDetailPlayerController) ? void 0 : n.isShowing()) && this._mttDetailPlayerController.hideImmediately(), (null == (s = this._mttDetailTableController) ? void 0 : s.isShowing()) && this._mttDetailTableController.hideImmediately()
        }
        onShowPanelInMainPage() {
            const t = this.view.getRender().getMainPageScrollView();
            null == t || t.stopAutoScroll(), null == t || t.scrollToTop()
        }
        onBackToLobbyPage() {
            this.model.isPageUpdated(this.model.currentPage) || this.requestDataToUpdate(this.model.currentPage)
        }
        onTabSwitched(t) {
            switch (t) {
                case 0:
                    this.hideAllPageInPlayersPage(!0), this.showPanelDetail(!this.isShowingBefore);
                    break;
                case 1:
                    this.hideAllPanelInMainPage(!0), this.showPanelPlayer();
                    break;
                case 2:
                    this.hideAllPanelInMainPage(!0), this.hideAllPageInPlayersPage(!0), (cc_mtt.vv.DataManager.getNow().getTime() - this.model.data._timeStampLastSatelliteUpdate) / 1e3 >= this._satellitePageRefreshInterval && this.updateRelatedEvents()
            }
        }
        showSatellitePage(t) {
            this.view.getRender().setTabActive(ut.Satellite, t)
        }
        requestRelatedEvents() {
            const t = this.model.detailData.TournamentId;
            return new Promise(((e, a) => {
                R.requestRelateTournamentList({
                    tournamentId: t
                }, (i => {
                    H.applyCurrencyToMttItem(i.UpstreamTournamentList), H.applyCurrencyToMttItem(i.DownstreamSatelliteTournamentList), H.applyCurrencyToMttItem(i.DownstreamFeederTournamentList), this.model.detailData.TournamentId == t && i && !i.ErrorCode ? e(i) : a()
                }), a)
            }))
        }
        updateRelatedEvents() {
            return this.requestRelatedEvents().then((t => {
                var e;
                return this.model.data.targetId = t.TargetID, this.model.data.targetEventName = cc_mtt.vv.DataManager.i18DataFromServer(t.Day2TournamentName, t.Day2TournamentNameI18N), this.model.data.targetEvents = H.filterEventsByStartingTime(t.UpstreamTournamentList), this.model.data.feederEvents = H.filterEventsByStartingTime(t.DownstreamFeederTournamentList), this.model.data.satelliteEvents = H.filterEventsByStartingTime(t.DownstreamSatelliteTournamentList), null == (e = this.detailInfoController) || e.updateTargetEvent(this.model.data.targetEvents, this.model.data.targetEventName), this.showSatellitePage(t.DownstreamFeederTournamentList.length > 0 || t.DownstreamSatelliteTournamentList.length > 0), this.multiflightFeederComp.render({
                    mttList: this.model.data.feederEvents
                }), this.satelliteFeederComp.render({
                    mttList: this.model.data.satelliteEvents
                }), this.model.data._timeStampLastSatelliteUpdate = cc_mtt.vv.DataManager.getNow().getTime(), t
            })).catch((() => {}))
        }
        showTargetEvent() {
            this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.targetEvents,
                displayEventType: st.TargetEvent
            })
        }
        showFeederEvent() {
            this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.feederEvents,
                displayEventType: st.Feeder
            })
        }
        showSatelliteEvent() {
            this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.satelliteEvents,
                displayEventType: st.Satellite
            })
        }
        onClickInfoButton(t, e = null) {
            var a;
            null == (a = this.view) || a.onToggleOverlayButton(t, e)
        }
        addBackList(t) {
            let e = this._backList.length;
            for (; e--;) {
                if (this._backList[e].tournamentData.Detail.Id == t.tournamentData.Detail.Id) break
            }
            if (e >= (this._backList.length - 1) / 2) {
                let a = this._backList.slice(e + 1),
                    i = this._backList.slice(e - a.length, e),
                    o = a.length;
                for (; o--;) {
                    const t = a[o],
                        e = i[o];
                    if (t.tournamentData.Detail.Id != e.tournamentData.Detail.Id) break
                }
                o < 0 ? this._backList.splice(e + 1, a.length) : this._backList.push(t)
            } else this._backList.push(t)
        }
        isShowingTournament(t) {
            var e, a;
            return this.model && (null == (e = this.model.data) ? void 0 : e._showing) && (null == (a = this.model.detailData) ? void 0 : a.TournamentId) === t
        }
        getMttId() {
            return this.model.detailData.TournamentId
        }
    }), l._RF.pop()
}
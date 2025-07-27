import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as n from "./LobbyFilterHelper.js";
import * as r from "./HashMap.js";
import * as l from "./cv.js";
import * as h from "./MVCController.js";
import * as u from "./MVCModel.js";
import * as m from "./CashGameTabController.js";
import * as T from "./CashGameRoomListController.js";
import * as c from "./LobbyHelper.js";
import * as d from "./HallMttDetailController.js";
import * as b from "./LobbyTools.js";
import * as M from "./HttpApiTournamentDetail.js";
import * as f from "./HttpApiTournamentDetail.js";
import * as p from "./Enum.js";
import * as C from "./Enum.js";
import * as g from "./Translator.js";
import * as L from "./MttItemHelper.js";
import * as v from "./AnalyticsHandler.js";
import * as w from "./AppConfig.js";
import * as R from "./MttLobbyRepository.js";
import * as y from "./HallPokerView.js";
import * as D from "./HallPokerView.js";
import * as G from "./MTTGameTabController.js";
import * as S from "./MttGameOverviewControllerLandscape.js";
import * as E from "./MttPrefab.js";
import * as A from "./MttHall.js";
import * as _ from "./worldWebsocket.js";
import * as k from "./HallMttDetailView.js";
import * as I from "./FlashGameTabController.js";
import * as O from "./HallPokerCompLandscape.js";
import * as H from "./SubfilterController.js";
import * as F from "./SubfilterController.js";
import * as P from "./MttLobbyListHelper.js";
import * as B from "./ecdhHandler.js";
import * as N from "./LoadingBlocker.js";

function main() {
    a._RF.push({}, "e5a88yM4zZA36IqkcncPQ5H", "HallPokerController", void 0);
    class q extends u {
        constructor(...e) {
            super(...e), this.tabs = [], this.currentTab = "nlhe", this.showBanner = !0, this.showLandscapeRightPanelLine = !0, this.showAppLogo = !0
        }
    }
    e("HallPokerModel", q);
    e("EVENT_SHOW_POPUP_MTT", "HallPokerController_SHOW_POPUP_MTT"), e("EVENT_SHOW_HALL_MTT_DETAIL", "HallPokerController_SHOW_HALL_MTT_DETAIL"), e("RESELECT_ITEM_LANSCAPE", "ReselectItemLandscape");
    class V extends h {
        constructor(e) {
            super(y, q, e), this.tabControllers = void 0, this.cashGameRoomListController = void 0, this.hallMttDetailController = void 0, this.mttOverviewController = void 0, this.autoRefreshCashGameTimeout = void 0, this.needRefreshCashGame = !1, this.autoRefreshMTTTimeout = void 0, this.retryShowMTTDetailTimeout = void 0, this.isDestroyed = !1, this.isCancelRequestMttDetail = !1, this._callbacksRefreshMTTSuccess = [], this._simulateRegisterClickMttDetail = !1, this._selectedTournamentId = 0, this.depositMttId = 0, this.refreshMTTTimeout = null, c.updateToolList()
        }
        hallViewActivated() {
            var e;
            if (!l.appConfig.isLandscapeLayout && (null != (e = this.cashGameRoomListController) && e.isModelShown() ? l.MessageCenter.send(l.Enum.MessageCenterAction.DisableTopAppLogo) : this.model.showAppLogo && l.MessageCenter.send(l.Enum.MessageCenterAction.EnableTopAppLogo), this.resetSubfilterSwitchCanUseMyTicket(), this.depositMttId > 0)) {
                let e = l.lobbyService.getMttItemsByFilter(null).find((e => e.Detail.Id == this.depositMttId));
                e && this.loadAndShowMttTournamentDetail(e, {
                    isReturnedFromDeposit: !0
                }), this.depositMttId = 0
            }
        }
        onInitializeBegin() {
            this.view.onClickChangeTab = this.changeTab.bind(this), this.view.joinCashGameLobbyV2FromDeepLink = this.joinCashGameLobbyV2FromDeepLink.bind(this), this.view.showMttDetailLobbyV2FromDeepLink = this.showMttDetailLobbyV2FromDeepLink.bind(this), this.view.loadAndShowMttTournamentDetail = this.loadAndShowMttTournamentDetail.bind(this), this.view.cancelRequestMttDetail = this.cancelRequestMttDetail.bind(this)
        }
        onInitializeEnded() {
            const e = n.removeObjectsWithUnused(w.Instance.getLobbyConfig().lobbyConfigs),
                s = Object.values(e).sort(((e, t) => e.index - t.index));
            let i = n.parseConfigFilter(s);
            const o = this;
            if (this.cashGameRoomListController = new T(this.refreshCashGame.bind(this), o.view.getCashRoomListViewEngine()), this.cashGameRoomListController.init(), l.appConfig.isLandscapeLayout) null != this.view.comp.prefabMttGameOverview && (this.mttOverviewController = new S(this.view.getMttGameOverviewNode()), this.mttOverviewController.init());
            else if (null != this.view.comp.hallMttDetailPrefab) {
                var a;
                let e = t(this.view.comp.hallMttDetailPrefab);
                null == (a = this.view.comp) || null == (a = a.node) || a.addChild(e), this.hallMttDetailController = new d(k, e), this.hallMttDetailController.init()
            }
            this.tabControllers = new r;
            for (let e = 0; e < i.length; e++) {
                const t = i[e],
                    s = o.view.geLobbyTabViewEngine(t.provider, t.filterm, t.name, t.isDisableGroup);
                let a = null;
                if (0 == t.provider) {
                    if ("mtt" == t.name) {
                        const e = t.subfilters.findIndex((e => e.name === F));
                        if (e > -1) {
                            const [s] = t.subfilters.splice(e, 1);
                            t.subfilters.splice(1, 0, s), s.isShow = !1
                        }
                        const s = t.subfilters.find((e => e.name === H));
                        s && (s.isShow = !1)
                    }
                    a = new G(this, l.appConfig.isLandscapeLayout ? this.mttOverviewController : this.hallMttDetailController, s, {
                        name: t.name,
                        filter: t.filter,
                        subfilters: t.subfilters,
                        onRequestRefreshList: this.refreshMTT.bind(this, !0)
                    }), a.init()
                } else if (1 == t.provider) {
                    var h, u, c, M;
                    if (t.isDisableGroup) a = new I(s, {
                        name: t.name,
                        filter: t.filter,
                        subfilters: t.subfilters,
                        isEnableSDPace: l.appConfig.getLobbyConfig().enableSDPaceInFlash,
                        isEnablePLOPace: l.appConfig.getLobbyConfig().enablePLOPaceInFlash,
                        showMyGameFilter: b.isLandscapeLayout() ? null == (h = t.showMyGameFilter) ? void 0 : h.landscape : null == (u = t.showMyGameFilter) ? void 0 : u.mobile,
                        onRequestRefreshList: this.refreshCashGame.bind(this)
                    });
                    else a = new m(this.cashGameRoomListController, s, {
                        name: t.name,
                        filter: t.filter,
                        subfilters: t.subfilters,
                        groups: t.groups,
                        showMyGameFilter: b.isLandscapeLayout() ? null == (c = t.showMyGameFilter) ? void 0 : c.landscape : null == (M = t.showMyGameFilter) ? void 0 : M.mobile,
                        onRequestRefreshList: this.refreshCashGame.bind(this)
                    });
                    a.init()
                }
                a.setListStateLoading(!0), this.tabControllers.add(t.name, a)
            }
            this.refreshModelTabs()
        }
        refreshModelTabs() {
            const e = n.removeObjectsWithUnused(w.Instance.getLobbyConfig().lobbyConfigs),
                t = [];
            for (var s in e) t.push(e[s].name);
            this.model.tabs = n.checkVisibleTabConfig(t)
        }
        start() {
            const e = this.getLobbyTabShowAtBegin(b.isLandscapeLayout() ? void 0 : "");
            e && this.model.tabs.includes(e) ? this.changeTab(e) : b.isLandscapeLayout() && this.changeTab(this.model.tabs[0]), this.refreshCashGame();
            const t = this.tabControllers.get("mtt");
            l.lobbyService.setMttListDisplayMode(t && "All" != t.getCurrentSubFilter() ? R.Full : R.Simplified), this.refreshMTT(!0), l.MessageCenter.register(l.Enum.MessageCenterAction.RequestMttLobbyLevelList, this.refreshMTT.bind(this, !0), this), l.MessageCenter.register("MttHall_Go_Deposit", (e => this.depositMttId = e), this), l.MessageCenter.register(l.config.CHANGE_LANGUAGE, this.refreshMTT.bind(this, !0), this), l.MessageCenter.register(l.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.onUpdateServerConfigSuccess.bind(this), this)
        }
        refreshLobby() {
            this.refreshCashGame(), this.refreshMTT(!0)
        }
        destroy() {
            var e, t;
            this.isDestroyed = !0, this.tabControllers.forEach(((e, t) => {
                t && t.destroy()
            })), this.cashGameRoomListController.destroy(), null == (e = this.hallMttDetailController) || e.destroy(), null == (t = this.mttOverviewController) || t.destroy(), this.removeTimeoutAutoRefreshCashGame(), this.removeTimeoutAutoRefreshMTT(), this.removeRetryRequestMttTournamentDetail(), l.MessageCenter.unregister(l.Enum.MessageCenterAction.RequestMttLobbyLevelList, this), l.MessageCenter.unregister("MttHall_Go_Deposit", this), l.MessageCenter.unregister(l.config.CHANGE_LANGUAGE, this), l.MessageCenter.unregister(l.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this)
        }
        getLobbyTabShowAtBegin(e = "nlhe") {
            let t = c.getLobbyTabShowAtBegin();
            return t && t.length ? t : e
        }
        refreshCashGame(e = !0) {
            B.getInstance().ecdh_getNeedGenKeyState() ? (this.needRefreshCashGame = !1, l.lobbyService.refreshAllCash().then((() => {
                this.onCashGameRefreshed()
            })).catch((t => {
                e && setTimeout((() => {
                    this.refreshCashGame(!0)
                }), 1e3)
            })), this.resetTimeoutAutoRefreshCashGame()) : e && setTimeout((() => {
                this.refreshCashGame(!0)
            }), 1e3)
        }
        onCashGameRefreshed() {
            this.isDestroyed || (this.isCashGameTab(this.model.currentTab) ? (this.reloadCurrentTabList(), this.reloadCashGameRoomList()) : this.isFlashGameTab(this.model.currentTab) && this.reloadCurrentTabList(), this.tabControllers.forEach(((e, t) => {
                (this.isCashGameTab(e) || this.isFlashGameTab(e)) && t.setListStateLoading(!1)
            })))
        }
        refreshMTT(e = !0) {
            this.refreshMTTTimeout && (clearTimeout(this.refreshMTTTimeout), this.refreshMTTTimeout = null), l.lobbyService.refreshMtt().then((() => {
                l.MessageCenter.send(l.Enum.MessageCenterAction.onRefreshJoinedTournaments), L.checkTableToUpdateJoinStatus((() => {
                    this.onMTTRefreshed(!0), e && 0 == l.lobbyService.getMttItemsByFilter(null).length && (this.refreshMTTTimeout = setTimeout((() => {
                        this.refreshMTT(!0)
                    }), 1e3))
                }))
            })).catch((t => {
                this.onMTTRefreshed(!1), e && (this.refreshMTTTimeout = setTimeout((() => {
                    this.refreshMTT(!0)
                }), 1e3))
            })), this.resetTimeoutAutoRefreshMTT()
        }
        onMTTRefreshed(e) {
            this.isDestroyed || (this.isMTTGameTab(this.model.currentTab) && this.reloadCurrentTabList(), b.emitMessage("Refresh_Windows_MttDetail"), this.tabControllers.forEach(((e, t) => {
                this.isMTTGameTab(e) && t.setListStateLoading(!1)
            })), b.emitMessage(C.MTTListLoadCompleted), e && l.lobbyService.getMttItemsByFilter(null).length > 0 && this._callbacksRefreshMTTSuccess && (this._callbacksRefreshMTTSuccess.forEach((e => {
                null == e || e(!0)
            })), this._callbacksRefreshMTTSuccess = []), e && this.reloadSubFilterList())
        }
        reloadSubFilterList() {
            const e = this.tabControllers.get("mtt");
            e && (e.reloadSubFilterList(), e.updateFilterToggleButton())
        }
        resetTimeoutAutoRefreshCashGame() {
            this.removeTimeoutAutoRefreshCashGame();
            const e = this;
            this.autoRefreshCashGameTimeout = setTimeout((() => {
                e && (e.isCashGameTab(e.model.currentTab) ? e.refreshCashGame() : (e.needRefreshCashGame = !0, e.resetTimeoutAutoRefreshCashGame()))
            }), 6e4)
        }
        removeTimeoutAutoRefreshCashGame() {
            this.autoRefreshCashGameTimeout && (clearTimeout(this.autoRefreshCashGameTimeout), this.autoRefreshCashGameTimeout = null)
        }
        resetTimeoutAutoRefreshMTT() {
            this.removeTimeoutAutoRefreshMTT();
            const e = this;
            this.autoRefreshMTTTimeout = setTimeout((() => {
                e && (e.isMTTGameTab(this.model.currentTab) ? e.refreshMTT() : e.resetTimeoutAutoRefreshMTT())
            }), 6e4)
        }
        closePopups() {
            const e = this.tabControllers.get("mtt");
            null == e || e.hidePopups();
            const t = this.tabControllers.get("sng");
            s(t) && (null == t || t.hidePopups())
        }
        isCashGameTab(e) {
            return this.tabControllers.get(e) instanceof m
        }
        isFlashGameTab(e) {
            return this.tabControllers.get(e) instanceof I || "flash" === e
        }
        isMTTGameTab(e) {
            return this.tabControllers.get(e) instanceof G && "mtt" === e.toLowerCase()
        }
        removeTimeoutAutoRefreshMTT() {
            this.autoRefreshMTTTimeout && (clearTimeout(this.autoRefreshMTTTimeout), this.autoRefreshMTTTimeout = null)
        }
        refreshGameListsIfNeeded() {
            this.needRefreshCashGame && this.isCashGameTab(this.model.currentTab) && this.refreshCashGame(), this.isMTTGameTab(this.model.currentTab) && this.onMTTRefreshed(!0)
        }
        updateBannerIfNeeded() {
            const e = this.isFlashGameTab(this.model.currentTab);
            this.view.comp && this.view.comp instanceof O && (this.view.comp.pageBannerStatic.active = e)
        }
        reloadCurrentTabList(e = !1) {
            const t = this.tabControllers.get(this.model.currentTab);
            null == t || t.reloadList(e)
        }
        reloadCashGameRoomList() {
            this.cashGameRoomListController.reloadList()
        }
        changeTab(e, t = null, s = -1) {
            this.model.currentTab = e, this.model.showBanner = !this.isMTTGameTab(e) && !this.isFlashGameTab(e) || !l.appConfig.isLandscapeLayout, this.model.showLandscapeRightPanelLine = !this.isMTTGameTab(e) || !l.appConfig.isLandscapeLayout, this.view.updateOnChangeTab(e), this.view.updateShowBanner(this.model.showBanner), this.view.updateShowLandscapeRightPanelLine(this.model.showLandscapeRightPanelLine), this.tabControllers.forEach(((t, s) => {
                s && e != t && s.hideTab()
            }));
            const i = this.tabControllers.get(e);
            null == i || i.showTab(t, s), this.refreshGameListsIfNeeded(), this.updateBannerIfNeeded(), this.cashGameRoomListController.hide(!0);
            const o = {
                gameType: e.toLocaleUpperCase()
            };
            v.getInstance().sendEvent(l.Enum.CurrentScreen.lobby, l.Enum.segmentEvent.LobbyGameTypeSelected, l.Enum.Functionality.poker, o)
        }
        resetSubfilterSwitchCanUseMyTicket() {
            if (s(this.model) && s(this.model.currentTab)) {
                const e = this.tabControllers.get(this.model.currentTab);
                null == e || e.selectSubfilterSwitchCanUseMyTicket(!1)
            }
        }
        cancelRequestMttDetail() {
            this.isCancelRequestMttDetail = !0
        }
        loadAndShowMttTournamentDetail(e, t, s = !1, o = !0) {
            var a;
            if (this.removeRetryRequestMttTournamentDetail(), _.checkNetwork("requestMttTournamentDetail") || !cc_mtt.vv.DataManager.token) return this.retryShowMTTDetailTimeout = setTimeout(this.retryRequestMttTournamentDetail.bind(this, e, this._simulateRegisterClickMttDetail, o), 1e3), void(l.appConfig.isLandscapeLayout || N.instance.hide("showMttDetailLobbyFromDeepLink"));
            this.isCancelRequestMttDetail = !1, s && (this._simulateRegisterClickMttDetail = !0), o && this.showLoading(!0);
            const n = null == e || null == (a = e.Detail) ? void 0 : a.Id,
                r = L.getTournamentLocalizeName(e);
            let h = A.ALL;
            this._selectedTournamentId = n, M.requestMttTournamentDetail(n, (a => {
                if (cc_mtt.vv.ConsoleLog.log("timTest HallPokerController requestMttTournamentDetail", !0, e, n, a), l.MessageCenter.send(l.Enum.MessageCenterAction.onMttDetailUpdate, a), this.isDestroyed || this.isCancelRequestMttDetail) return o && this.showLoading(!1), void(l.appConfig.isLandscapeLayout || N.instance.hide("showMttDetailLobbyFromDeepLink"));
                if (a && !a.ErrorCode && a.TournamentDetail) {
                    const i = l.lobbyService.getMttItemsByFilter(null).find((e => {
                        var t;
                        return (null == (t = e.Detail) ? void 0 : t.Id) == n
                    }));
                    i && i.timeStampLateReg && (a.TournamentDetail.timeStampLateReg = i.timeStampLateReg), l.MessageCenter.send(l.Enum.MessageCenterAction.onRefreshJoinedTournaments), L.checkTableToUpdateJoinStatus((() => {
                        if (o && this.showLoading(!1), !l.appConfig.isLandscapeLayout) {
                            var i;
                            let e = this.tabControllers.get("mtt");
                            (e && !e.getIsShow() || null == (i = this.view) || null == (i = i.comp) || null == (i = i.node) || !i.active) && l.MessageCenter.send("jumpToMtt", "All"), N.instance.hide("showMttDetailLobbyFromDeepLink")
                        }
                        this.isMTTGameTab(this.model.currentTab) && this._selectedTournamentId == n && (l.appConfig.isLandscapeLayout ? this.mttOverviewController.show(h, e, a.TournamentDetail, o, t) : this.hallMttDetailController.show(h, e, a.TournamentDetail, o, t), s && this.getHallMttDetailController().onSignUpClicked())
                    }), 1e3)
                } else if (o && this.showLoading(!1), l.appConfig.isLandscapeLayout || N.instance.hide("showMttDetailLobbyFromDeepLink"), 1 == a.ErrorCode) this.retryShowMTTDetailTimeout = setTimeout(this.retryRequestMttTournamentDetail.bind(this, e, this._simulateRegisterClickMttDetail, o), 5e3);
                else {
                    let e = a.ErrorCode ? "ERROR_CODE_PKW." + a.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR",
                        t = "ERROR_CODE_PKW.TITLE";
                    31004 == a.ErrorCode && (e = {
                        Translation: e,
                        payload: e => i.formatStr(g(e), r)
                    }, t = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL", P.getInstance().markTournamentAsCanceled(n)), this.getHallMttDetailController().showPopup(e, (() => {
                        l.appConfig.isLandscapeLayout && this.refreshMTT()
                    }), t), this.getHallMttDetailController().hide()
                }
            }), (t => {
                cc_mtt.vv.ConsoleLog.log("loadAndShowMttTournamentDetail onError", t), this.showLoading(!1), l.appConfig.isLandscapeLayout || N.instance.hide("showMttDetailLobbyFromDeepLink"), this.getHallMttDetailController().showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", (() => {}), null, "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR"), this.getHallMttDetailController().hide(), _.checkNetwork("requestMttTournamentDetail") && !cc_mtt.vv.DataManager.token || (this.retryShowMTTDetailTimeout = setTimeout(this.retryRequestMttTournamentDetail.bind(this, e, this._simulateRegisterClickMttDetail, o), 1e3))
            }), 15e3, {
                page: h
            }, 0, f.MTT_TOURNAMENT_DETAIL_IN_LOBBY_RIGHT_PANEL)
        }
        retryRequestMttTournamentDetail(e, t = !1, s = !0) {
            this.isDestroyed || this.loadAndShowMttTournamentDetail(e, void 0, t, s)
        }
        removeRetryRequestMttTournamentDetail() {
            this.retryShowMTTDetailTimeout && (clearTimeout(this.retryShowMTTDetailTimeout), this.retryShowMTTDetailTimeout = null)
        }
        getHallMttDetailController() {
            return l.appConfig.isLandscapeLayout ? this.mttOverviewController : this.hallMttDetailController
        }
        joinCashGameLobbyV2FromDeepLink(e) {
            let t = parseInt(e.gameId),
                s = parseInt(e.roomId);
            l.security.tryJoinPokerRoom((() => {
                l.roomManager.RequestJoinRoom(t, s)
            }))
        }
        showMttDetailLobbyV2FromDeepLink(e, t) {
            if ("string" == typeof e) try {
                e = parseInt(e)
            } catch (t) {
                e = 0, o(t)
            }
            if (this.getHallMttDetailController().isShowingTournament(e)) return void(t && this.getHallMttDetailController().onSignUpClicked());
            const s = () => {
                let s = this.tabControllers.get("mtt"),
                    i = l.lobbyService.getMttItemsByFilter(null),
                    o = null == i ? void 0 : i.find((t => {
                        var s;
                        return (null == (s = t.Detail) ? void 0 : s.Id) == e
                    }));
                return !!o && (E.instance.ignoreSelectFirstItem = !1, l.appConfig.isLandscapeLayout && (s.scrollToItem(e), s.selectItemById(e)), this.loadAndShowMttTournamentDetail(o, void 0, t), !0)
            };
            s() || (l.lobbyService.setMttListDisplayMode(R.Full), this.refreshMTT(!0), this._callbacksRefreshMTTSuccess.push(s))
        }
        showLoading(e) {
            var t;
            l.appConfig.isLandscapeLayout ? null == (t = this.mttOverviewController) || t.showLoading(e) : this.view.showLoading(e)
        }
        onViewEvent(e, ...t) {
            switch (e) {
                case D.go_back_poker_type:
                    this.goBackToPokerType()
            }
        }
        showMvcView(e) {
            this.view.showComponent(e)
        }
        hideMvcView() {
            this.view.setActive(!1)
        }
        goBackToPokerType() {
            this.view.hideComponent(), l.MessageCenter.send(p.showHomePokerTypeView)
        }
        enableAppLogo(e) {
            this.model.showAppLogo = e, this.view.showBackBtn(!e)
        }
        getDepositMttId() {
            return this.depositMttId
        }
        getMttGameOverviewNode() {
            return this.view.getMttGameOverviewNode()
        }
        getAvailableTabs(e = !1) {
            return e && this.refreshModelTabs(), this.model.tabs
        }
        onUpdateServerConfigSuccess() {
            this.refreshModelTabs(), this.view.initView(this.model), this.model.tabs.includes(this.model.currentTab) || this.changeTab(this.model.tabs[0])
        }
    }
    e("default", V), V.isCashJPcurrencySwitcherOn = !0, V.isMTTJPcurrencySwitcherOn = !1, a._RF.pop()
}
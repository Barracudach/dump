import * as i from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cv.js";
import * as l from "./MTTGameTabView.js";
import * as n from "./LobbyTabController.js";
import * as o from "./LobbyTabController.js";
import * as s from "./LobbyTabController.js";
import * as a from "./HallPokerController.js";
import * as u from "./MttGameItemController.js";
import * as h from "./MttGroupFilterPopupController.js";
import * as m from "./HashMap.js";
import * as d from "./CrashTracing.js";
import * as c from "./CrashTracing.js";
import * as p from "./LobbyTools.js";
import * as b from "./LobbyFilterHelper.js";
import * as f from "./SubfilterController.js";
import * as T from "./SubfilterController.js";
import * as S from "./MttLobbyRepository.js";
import * as g from "./JackpotSngGameList.js";
import * as y from "./Pb.js";
import * as M from "./MttItemHelper.js";
import * as C from "./MttPrefab.js";
import * as F from "./MTTSubfilterController.js";

function main() {
    i._RF.push({}, "9aa61uaFxlFS7czqVRm/9T8", "MTTGameTabController", void 0);
    class v extends n {
        constructor(...t) {
            super(...t), this.convertCurrency = !1, this.canUseMyTicketFilterOption = null
        }
    }
    t("MTTGameListModel", v);
    const w = t("LOBBY_LIST_STATE_MY_MTT_EMPTY", 3),
        L = t("LOBBY_LIST_STATE_FILTER_EMPTY", 4);
    t("default", class extends s {
        constructor(t, e, i, r) {
            super(l, v, i, r), this.mttGroupFilterPopupController = void 0, this.hasMttPrizePoolOverlay = !1, this.showRunningCount = 0, this.hideSatellitesCount = 0, this.lastFilterOption = null, this.filterCustomMax = 0, this.cachedShorterMttName = {}, this.defaultFilterOption = {
                searchName: "",
                showRunning: !1,
                hideSatellites: !1,
                buyin: 0,
                buyinFrom: 0,
                buyinTo: Number.MAX_VALUE,
                gameType: 0
            }, this.closedTournamentsIds = void 0, this.hallPoker = t, this.hallMttDetail = e
        }
        onInitializeBegin(t) {
            super.onInitializeBegin(t), "mtt" === t.name.toLocaleLowerCase() && (this.hallMttDetail.mttGameListController = this), this.view.onGroupFilterClicked = this.showGroupFilter.bind(this), this.view.onInformerClosed = this.onInformerClosed.bind(this)
        }
        onInitializeEnded(t) {
            super.onInitializeEnded(t), p.registerMessage("SelfTournaments_Changed_My_MTT_List", this.onMyMTTChanged.bind(this), this), p.registerMessage(r.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this), p.registerMessage("timeStampLateRegUpdated", this.onMttGameItemTimeStampLateRegUpdated.bind(this), this)
        }
        createSubfiltersController() {
            const t = this.view.getSubfilterEngineView();
            t && (this.subfilterController = new F(this.selectSubfilter.bind(this), this.subfilterSwitchCurrency.bind(this), this.subfilterSwitchMyGames.bind(this), this.subfilterSwitchCanUseMyTicket.bind(this), this.subfilterFilter.bind(this), this.subfilterRereshButtonClick.bind(this), t, {
                subfilters: this.model.subfilters,
                showMyGame: this.showMyGameInSubfilter(),
                showSwitchCurrency: this.showSwitchCurrencyInSubfilter(),
                defaultSubfilter: this.getDefaultSubfilterName(),
                showSwitchMyTicket: this.showSwitchMyTicketInSubfilter(),
                showFilterButton: this.showFilterButtonSubfilter(),
                showRefreshButton: this.showRefreshButtonInSubFilter()
            }), this.subfilterController.init())
        }
        destroy() {
            super.destroy(), p.unregisterMessage("SelfTournaments_Changed_My_MTT_List", this), p.unregisterMessage(r.config.CHANGE_LANGUAGE, this), p.unregisterMessage("timeStampLateRegUpdated", this)
        }
        createItemController(t, e) {
            let i = new u(this.hallPoker, t, e);
            return i.init(), i.setAutoResizeMttNameCallback(this.onAutoResizeMttName.bind(this)), i
        }
        updateItemControllerByData(t, e) {
            e.convertCurrency = this.model.convertCurrency, e.cachedShorterMttName = this.getCachedShorterMttName(e.Detail.Id), null == t || t.updateItemDataWhenScrolling(e)
        }
        getMttItemsByStatus(t, e) {
            let i = [];
            for (let r of t) {
                let t = r.Detail.Status ?? 0;
                (e.findIndex((e => e == t)) > -1 || r.isMyMTT) && i.push(r)
            }
            return i
        }
        getFilteredItems() {
            let t = [],
                e = this.mttGroupFilterPopupController ? this.mttGroupFilterPopupController.getFilterOptions() : null;
            null == e && (e = this.normalizeFilterOption(C.instance.createOption())), !e && this.lastFilterOption && (e = this.lastFilterOption);
            let i = !!e && e.showRunning;
            const l = this.model.subfilters.filter((t => {
                var e;
                return null == (e = this.subfilterController) ? void 0 : e.isSelectingSubfilter(t.name)
            }));
            let s = [];
            l.forEach((t => {
                s = s.concat(t.filter)
            }));
            let o = [];
            var n;
            if (e && !this.isDefaultOption(e)) t = r.lobbyService.getMttItemsByExtraFilter(e, s), this.lastFilterOption = e, i || (o.push({
                field: "RebuyStatus",
                value: 0,
                condition: null
            }), o.push({
                field: "RebuyStatus",
                value: 1,
                condition: null
            }));
            else if (t = r.lobbyService.getMttItemsByFilter(s || this.model.filter), (null == (n = l[0]) ? void 0 : n.name) != f) {
                let e = [y.commonProto.MTT_GAME_STATUS.NOT_STARTED, y.commonProto.MTT_GAME_STATUS.STARTED, y.commonProto.MTT_GAME_STATUS.STARTED + 100];
                t = this.getMttItemsByStatus(t, e), o.push({
                    field: "RebuyStatus",
                    value: 0,
                    condition: null
                }), o.push({
                    field: "RebuyStatus",
                    value: 1,
                    condition: null
                })
            }
            return this.model.canUseMyTicketFilterOption && (o = o.concat(this.model.canUseMyTicketFilterOption)), t = b.filterMttGameList(t, o), cc_mtt.vv.ConsoleLog.log("getFilteredItems data: ", t), t
        }
        normalizeFilterOption(t) {
            const e = {};
            Array.isArray(t.searchName) ? e.searchName = t.searchName[0] || "" : e.searchName = t.searchName || "", e.buyinFrom = Array.isArray(t.buyinFrom) ? Number(t.buyinFrom[0] || 0) : Number(t.buyinFrom || 0), e.buyinTo = Array.isArray(t.buyinTo) ? Number(t.buyinTo[0] || 0) : Number(t.buyinTo || 0);
            return ["buyin", "gameType"].forEach((i => {
                const r = t[i];
                Array.isArray(r) && r.length > 0 ? e[i] = r.map((t => Number(t))) : e[i] = [0]
            })), e.showRunning = !!t.showRunning, e.hideSatellites = !!t.hideSatellites, e
        }
        isDefaultOption(t) {
            return t.searchName === this.defaultFilterOption.searchName && t.showRunning === this.defaultFilterOption.showRunning && t.hideSatellites === this.defaultFilterOption.hideSatellites && JSON.stringify(t.buyin).includes(this.defaultFilterOption.buyin) && JSON.stringify(t.gameType).includes(this.defaultFilterOption.gameType)
        }
        isFiltered(t) {
            return t && ("" != t.searchName || t.showRunning || t.hideSatellites || !JSON.stringify(t.buyin).includes(0) || !JSON.stringify(t.gameType).includes(0))
        }
        isShowingMyMTT() {
            var t;
            return (null == (t = this.subfilterController) ? void 0 : t.currentSubfilter) == f
        }
        reloadMyMTT() {
            var t;
            null == (t = this.subfilterController) || t.setSubfilterAmount(f, b.getMyMttCount())
        }
        onMyMTTChanged() {
            this.isShowingMyMTT() ? this.reloadList() : this.reloadMyMTT(), this.reloadSubFilterList()
        }
        isListStateShowMyGame() {
            return this.isShowingMyMTT()
        }
        reloadList(t = !1) {
            this.reloadMyMTT(), super.reloadList(t), this.updatePrizePoolOverlayView()
        }
        updateClosedTournament(t) {
            var e;
            (this.closedTournamentsIds || (this.closedTournamentsIds = new m), this.closedTournamentsIds.has(t)) ? null == (e = c.getInstance()) || e.traceEvent(d.MttTournamentRequestDestroyedOne, t.toString(), {}, null, !1, !0): this.closedTournamentsIds.add(t, 1, !0);
            this.reloadList()
        }
        isTournamentClosed(t) {
            return this.closedTournamentsIds && this.closedTournamentsIds.has(t)
        }
        reloadListState() {
            var t;
            super.reloadListState(), this.model.listState == o && this.isShowingMyMTT() && (this.model.listState = w), this.model.listState == o && null != (t = this.mttGroupFilterPopupController) && t.isFiltered() && (this.model.listState = L)
        }
        getDefaultSubfilterName() {
            return cc_mtt.vv.DataManager.mttGameListLastSubfilter ?? "All"
        }
        showSwitchCurrencyInSubfilter() {
            return !0
        }
        showSwitchMyTicketInSubfilter() {
            return !0
        }
        showFilterButtonSubfilter() {
            return !0
        }
        getItemId(t) {
            return null == t ? void 0 : t.id
        }
        showTab(t, e) {
            super.showTab(t, e), null == this || this.selectSubfilterSwitchCanUseMyTicket(!1), r.appConfig.isLandscapeLayout && "mtt" == this.tabName && this.createGroupFilterController()
        }
        reloadListOnShowTab() {
            return !1
        }
        subfilterSwitchCurrency(t) {
            var e;
            a.isMTTJPcurrencySwitcherOn = t, p.isMTTJPcurrencySwitcherOn = t, this.model.convertCurrency = t, null == (e = this.listController.getItemControllers()) || e.forEach((e => {
                e.updateDisplayCurrency(t)
            })), this.hallMttDetail.updateDisplayCurrency()
        }
        subfilterSwitchCanUseMyTicket(t) {
            var e;
            (this.model.canUseMyTicketFilterOption = t ? [{
                field: "canUseMyTicket",
                value: !0
            }] : null, this.getIsShow()) && (r.lobbyService.getMttListDisplayMode() != S.Full ? r.lobbyService.switchMttListDisplayModeToFullList() : (this.reloadList(), null == (e = this.listController) || e.scrollToTop()))
        }
        subfilterFilter() {
            this.showGroupFilter()
        }
        reloadSubFilterList() {
            let t, e = !1;
            if ("mtt" === this.tabName) {
                const t = b.getMyMttCount() > 0,
                    e = this.model.subfilters.find((t => t.name == f));
                e && e.isShow !== t && this.subfilterController.showSubFilter(t, f);
                const i = b.filterMyTicketItems(r.lobbyService.getMttItemsByExtraFilter(null)).length > 0,
                    l = this.model.subfilters.find((t => t.name == T));
                l && l.isShow !== i && this.subfilterController.showSubFilter(i, T)
            }
            this.model.subfilters.forEach(((i, l) => {
                const s = r.lobbyService.getMttItemsByFilter(i.filter),
                    o = (null == s ? void 0 : s.length) > 0;
                if (!t && i.isShow && (t = i.name), o || this.subfilterController.currentSubfilter != i.name || (e = !0), "mtt" === this.tabName && i.name != t && i.name != f && i.name != T) {
                    let t = o;
                    t && -1 == s.findIndex((t => !M.checkForSignUpStopMtt(t) || M.isMttRebuyState(t))) && (t = !1), cc_mtt.vv.ConsoleLog.log("reloadSubFilterList", i.name, s.length, t), this.subfilterController.showSubFilter(t, i.name), t || this.subfilterController.deselectSubFilter(i.name), "" == this.subfilterController.currentSubfilter && (e = !0)
                }
            })), e && t && this.selectSubfilter(t), this.updatePrizePoolOverlayView()
        }
        selectSubfilter(t, e = !0) {
            this.mttGroupFilterPopupController && this.updateFilterToggleButton(), r.lobbyService.getMttListDisplayMode() != S.Full ? (super.selectSubfilter(t, !1), r.lobbyService.switchMttListDisplayModeToFullList()) : super.selectSubfilter(t, e)
        }
        createGroupFilterController() {
            this.mttGroupFilterPopupController || (this.mttGroupFilterPopupController = new h(this.onGroupFilterOptionChanged.bind(this), this.view.getGroupFilterPopupEngineView()), this.mttGroupFilterPopupController.parent = this, this.mttGroupFilterPopupController.init())
        }
        showGroupFilter() {
            if ("mtt" == this.tabName) {
                let e = !1;
                var t;
                if (this.mttGroupFilterPopupController || (this.createGroupFilterController(), e = !0), this.mttGroupFilterPopupController.isShowing()) this.hideGroupFiler();
                else this.mttGroupFilterPopupController.show(), this.view.updateFilterCount(this.getFilteredItems().length), null == (t = this.subfilterController) || t.updateFilterToggleButtonState(!0), this.updateFilterToggleButton(), e ? setTimeout((() => {
                    this.view && this.view.engineView && this.view.playFilterAni(!0)
                }), 200) : this.view.playFilterAni(!0)
            }
        }
        hideGroupFiler() {
            "mtt" == this.tabName && this.view.playFilterAni(!1, (() => {
                var t, e;
                null == (t = this.mttGroupFilterPopupController) || t.hide(!1), null == (e = this.subfilterController) || e.updateFilterToggleButtonState(!1)
            }))
        }
        resizeGroupFilter(t) {
            "mtt" == this.tabName && this.view.playExpandAnim(t)
        }
        updateFilterToggleButton() {
            var t;
            let e = !1,
                i = null == (t = this.mttGroupFilterPopupController) ? void 0 : t.getFilterOptions();
            if (i || (i = C.instance.getMTT_LastFilterOption()), i && (e = this.isFiltered(i)), this.view.changeFilterToggleState(e), r.appConfig.isLandscapeLayout) {
                var l, s;
                const t = null == (l = this.mttGroupFilterPopupController) ? void 0 : l.isFilteredExceptName();
                null == (s = this.subfilterController) || s.setFilterToggleButton(t)
            }
        }
        hidePopups() {
            var t;
            if ("mtt" == this.tabName) null == (t = this.mttGroupFilterPopupController) || t.hide(!1);
            else if ("sng" == this.tabName) {
                const t = this.engineView.getComponentInChildren(g);
                e(t) && t.hideAllPopups()
            }
        }
        onGroupFilterOptionChanged(t, e = !1) {
            r.lobbyService.getMttListDisplayMode() != S.Full && r.lobbyService.switchMttListDisplayModeToFullList(), e && this.reloadList(), this.view.updateFilterCount(this.getFilteredItems().length), this.updateFilterToggleButton()
        }
        scrollToItem(t) {
            this.listController.scrollToItem((e => {
                var i;
                return (null == e || null == (i = e.Detail) ? void 0 : i.Id) == t
            }))
        }
        hasPrizePoolOverlay(t) {
            return !!t && (this.hasMttPrizePoolOverlay = t.findIndex((t => t.overlay)) > -1, this.hasMttPrizePoolOverlay)
        }
        updatePrizePoolOverlayView() {
            var t, e;
            (cc_mtt.vv.ConsoleLog.log("updatePrizePoolOverlayView", this.model.isShow, this.customData, cc_mtt.vv.DataManager.mttGameListInformerClosed), this.model.isShow && "mtt" == this.customData.name && !cc_mtt.vv.DataManager.mttGameListInformerClosed) && (null == (t = this.view) || t.activeInformer(this.hasPrizePoolOverlay(null == (e = this.listController) ? void 0 : e.getItems())))
        }
        onInformerClosed() {
            cc_mtt.vv.ConsoleLog.log("updatePrizePoolOverlayView onInformerClosed"), cc_mtt.vv.DataManager.mttGameListInformerClosed = !0
        }
        onAutoResizeMttName(t, e) {
            this.cachedShorterMttName[e] = t
        }
        getCachedShorterMttName(t) {
            return this.cachedShorterMttName[t] ? this.cachedShorterMttName[t] : null
        }
        resetShorterMttNameCache() {
            this.cachedShorterMttName = {}
        }
        onLanguageChanged() {
            cc_mtt.vv.ConsoleLog.log("MTTGameTabController onLanguageChanged"), this.resetShorterMttNameCache()
        }
        requestRefreshGameListIfShowing() {
            super.requestRefreshGameListIfShowing(), this.resetShorterMttNameCache()
        }
        onMttGameItemTimeStampLateRegUpdated(t) {
            let e = this.getFilteredItems().find((e => e.Detail.Id == t.id));
            e && (e.timeStampLateReg = t.timeStampLateReg, p.emitMessage("mttGameItem_timeStampLateRegUpdated", t))
        }
        selectItemById(t) {
            this.listController.onItemSelect(t)
        }
        getSelectedItemId() {
            return this.listController.getSelectedItemId()
        }
    }), i._RF.pop()
}
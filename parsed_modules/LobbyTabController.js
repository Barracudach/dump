import * as e from "./cc.js";
import * as i from "./LobbyTools.js";
import * as s from "./MVCController.js";
import * as l from "./MVCModel.js";
import * as r from "./MVCListController.js";
import * as o from "./SubfilterController.js";

function main() {
    e._RF.push({}, "18a30JE3hhO9J2duVXONZr6", "LobbyTabController", void 0);
    const h = t("LOBBY_LIST_STATE_LOADING", 0),
        n = t("LOBBY_LIST_STATE_EMPTY", 1),
        u = t("LOBBY_LIST_STATE_LOADED", 2);
    t("LobbyTabModel", class extends l {
        constructor(...t) {
            super(...t), this.isShow = void 0, this.filter = void 0, this.subfilters = void 0, this.isShowSubFilter = void 0, this.listState = void 0
        }
    });
    t("LobbyTabController", class extends s {
        constructor(t, e, i, s) {
            super(t, e, i, s), this.listController = void 0, this.subfilterController = void 0, this.tabName = void 0, this.requestRefreshList = void 0
        }
        onInitializeEnded(t) {
            var e;
            this.tabName = null == t ? void 0 : t.name, this.requestRefreshList = null == t ? void 0 : t.onRequestRefreshList, this.model.filter = null == t ? void 0 : t.filter, this.model.subfilters = null == t ? void 0 : t.subfilters, this.model.isShowSubFilter = !(null == (e = this.model.subfilters) || !e.length) || this.showMyGameInSubfilter() || this.showSwitchCurrencyInSubfilter();
            this.view.getGameListEngineView() && (this.listController = new r(this.requestRefreshGameListIfShowing.bind(this), this.createItemController.bind(this), this.updateItemControllerByData.bind(this), this.view.getGameListEngineView(), null, this.getItemId.bind(this)), this.listController.init()), this.model.isShowSubFilter && this.createSubfiltersController()
        }
        createSubfiltersController() {
            const t = this.view.getSubfilterEngineView();
            t && (this.subfilterController = new o(this.selectSubfilter.bind(this), this.subfilterSwitchCurrency.bind(this), this.subfilterSwitchMyGames.bind(this), this.subfilterSwitchCanUseMyTicket.bind(this), this.subfilterFilter.bind(this), this.subfilterRereshButtonClick.bind(this), t, {
                subfilters: this.model.subfilters,
                showMyGame: this.showMyGameInSubfilter(),
                showSwitchCurrency: this.showSwitchCurrencyInSubfilter(),
                defaultSubfilter: this.getDefaultSubfilterName(),
                showSwitchMyTicket: this.showSwitchMyTicketInSubfilter(),
                showFilterButton: this.showFilterButtonSubfilter(),
                showRefreshButton: this.showRefreshButtonInSubFilter()
            }), this.subfilterController.init())
        }
        start() {
            var t;
            null == (t = this.subfilterController) || t.setIsShow(this.model.isShowSubFilter)
        }
        destroy() {
            var t, e;
            null == (t = this.listController) || t.destroy(), null == (e = this.subfilterController) || e.destroy()
        }
        getDefaultSubfilterName() {
            return i.getTabSubfilterSelected(this.tabName)
        }
        setIsShow(t, e = !1) {
            var i;
            this.model.isShow = t, this.view.updateIsShow(!e && this.model.isShow), null == (i = this.subfilterController) || i.setIsShow(!e && t && this.model.isShowSubFilter), this.listController && (this.listController.isUpdateItemWhenScrolling = t)
        }
        getIsShow() {
            return this.model.isShow
        }
        getCurrentSubFilter() {
            var t;
            return null == (t = this.subfilterController) ? void 0 : t.currentSubfilter
        }
        showGroup(t = -1) {}
        getItemId(t) {
            return null
        }
        showTab(t, e = -1) {
            var s;
            this.setIsShow(!0, !0), t && this.selectSubfilter(t, !1), this.reloadListOnShowTab() && this.reloadList(), this.view.updateIsShow(!0), null == (s = this.subfilterController) || s.setIsShow(!0), this.showGroup(e), i.saveLastSelectedTabToFile(this.tabName)
        }
        reloadListOnShowTab() {
            return !0
        }
        hideTab() {
            this.setIsShow(!1)
        }
        reloadList(t = !1) {
            var e;
            this.model.isShow && (null == (e = this.listController) || e.setItems(this.getFilteredItems(), t), this.model.listState != h && this.reloadListState(), this.view.updateListStatus(this.model.listState))
        }
        reloadListState() {
            var t, e;
            null == (t = this.listController) || !t.getItems() || (null == (e = this.listController) || null == (e = e.getItems()) ? void 0 : e.length) <= 0 ? this.model.listState = n : this.model.listState = u
        }
        isListStateShowMyGame() {
            return !1
        }
        setListStateLoading(t) {
            this.model.isShow && (t ? this.model.listState = h : this.reloadListState(), this.view.updateListStatus(this.model.listState))
        }
        showMyGameInSubfilter() {
            return !1
        }
        showSwitchCurrencyInSubfilter() {
            return !1
        }
        showSwitchMyTicketInSubfilter() {
            return !1
        }
        showFilterButtonSubfilter() {
            return !1
        }
        showRefreshButtonInSubFilter() {
            return !1
        }
        subfilterSwitchCurrency(t) {}
        subfilterRereshButtonClick() {}
        subfilterSwitchMyGames(t) {}
        subfilterSwitchCanUseMyTicket(t) {}
        subfilterFilter() {}
        requestRefreshGameListIfShowing() {
            var t;
            this.model.isShow && (null == (t = this.requestRefreshList) || t.call(this))
        }
        selectSubfilterSwitchCanUseMyTicket(t) {
            var e;
            this.model.isShow && (null == (e = this.subfilterController) || e.setSwitchCanUseMyTicketButton(t))
        }
        selectSubfilter(t, e = !0) {
            var s;
            if (!this.model.isShow) return;
            var l;
            this.model.subfilters.find((e => e.name == t)) && (null == (s = this.subfilterController) || s.selectSubFilter(t), i.saveTabSubfilterSelected(this.tabName, this.subfilterController.currentSubfilter), e && (this.reloadList(), null == (l = this.listController) || l.scrollToTop()))
        }
    }), e._RF.pop()
}
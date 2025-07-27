import * as t from "./cc.js";
import * as r from "./LobbyTabController.js";
import * as s from "./LobbyTabController.js";
import * as l from "./FlashGameTabView.js";
import * as i from "./cv.js";
import * as a from "./CashGameRightPanelController.js";
import * as o from "./LobbyHelper.js";
import * as n from "./LobbyOrderHelper.js";
import * as h from "./LobbyFilterHelper.js";
import * as m from "./LobbyFilterHelper.js";
import * as u from "./CashMyGameController.js";
import * as c from "./LobbyTools.js";
import * as f from "./FlashMyGameController.js";
import * as d from "./CashGameNonGroupItemController.js";

function main() {
    t._RF.push({}, "e8e89lhJAdE67G3lWdHZ2sZ", "FlashGameTabController", void 0);
    class y extends s {
        constructor(...e) {
            super(...e), this.convertCurrency = !1, this.showMyGames = !1, this.showMyGameFilter = void 0
        }
    }
    e("FlashGameListModel", y);
    class C extends r {
        constructor(e, t) {
            super(l, y, e, t), this.cashGameRightPanelController = void 0, this.myFlashGamesController = void 0
        }
        start() {
            super.start(), this.reloadMyFlashGames()
        }
        changeConvertCurrency(e) {
            var t;
            this.model.convertCurrency = e, null == (t = this.listController) || null == (t = t.getItemControllers()) || t.forEach((e => {
                e.updateDisplayCurrency(this.model.convertCurrency)
            }))
        }
        processFlashConfig(e) {
            var t;
            if ("flash" !== (null == (t = e.name) ? void 0 : t.toLocaleLowerCase())) return e;
            const s = {
                ...e
            };
            if (!s.isEnableSDPace) {
                s.filter = s.filter.filter((e => e.game_mode !== i.Enum.CreateGameMode.CreateGame_Mode_Short));
                for (let e = 0, t = s.subfilters.length; e < t; e++) {
                    var r;
                    const t = s.subfilters[e];
                    if ("all" === (null == (r = t.name) ? void 0 : r.toLowerCase())) {
                        t.filter = t.filter.filter((e => e.game_mode !== i.Enum.CreateGameMode.CreateGame_Mode_Short));
                        break
                    }
                }
            }
            return s.isEnableSDPace || (s.subfilters = s.subfilters.filter((e => "sd" !== e.name.toLocaleLowerCase()))), s.isEnablePLOPace || (s.subfilters = s.subfilters.filter((e => "plo" !== e.name.toLocaleLowerCase()))), (s.isEnablePLOPace || s.isEnableSDPace) && (s.subfilters = s.subfilters.filter((e => -1 === h.findIndex((t => {
                var s;
                return t.toLowerCase() === (null == (s = e.name) ? void 0 : s.toLowerCase())
            }))))), s.isEnablePLOPace || s.isEnableSDPace || (s.subfilters = s.subfilters.filter((e => "nlhe" !== e.name.toLocaleLowerCase()))), s
        }
        onInitializeBegin(e) {
            var t;
            if (null != e && e.filter && "flash" === (null == (t = e.name) ? void 0 : t.toLocaleLowerCase())) {
                const t = this.processFlashConfig(e);
                e.filter = [...t.filter], e.subfilters = [...t.subfilters]
            }
            super.onInitializeBegin(e)
        }
        onInitializeEnded(e) {
            this.model.showMyGameFilter = e.showMyGameFilter ?? !0, super.onInitializeEnded(e), i.appConfig.isLandscapeLayout && (this.cashGameRightPanelController = new a(this.view.getPaceGameRightPanelEngineView()), this.cashGameRightPanelController.init()), this.model.showMyGames = !1, this.model.showMyGameFilter && this.view.getMyGamesEngineView() && (this.myFlashGamesController = new f(this.view.getMyGamesEngineView(), {
                onRequestRefreshList: this.requestRefreshGameListIfShowing.bind(this)
            }), this.myFlashGamesController.init()), c.registerMessage("updateMyCashGames", this.reloadMyFlashGames.bind(this), this), c.registerMessage(i.Enum.MessageCenterAction.requestRefreshGamesList, this.requestRefreshGameListIfShowing.bind(this), this)
        }
        destroy() {
            var e;
            c.unregisterMessage("updateMyCashGames", this), c.unregisterMessage(i.Enum.MessageCenterAction.requestRefreshGamesList, this), null == (e = this.myFlashGamesController) || e.destroy(), super.destroy()
        }
        updateItemControllerByData(e, t) {
            null == e || e.updateItemDataWhenScrolling(t, this.model.convertCurrency)
        }
        createItemController(e, t) {
            const s = new d(e);
            return s.init(), s
        }
        getCurrentFilter() {
            const e = this.model.subfilters.find((e => {
                var t;
                return e.name == (null == (t = this.subfilterController) ? void 0 : t.currentSubfilter)
            }));
            return (null == e ? void 0 : e.filter) || this.model.filter
        }
        getFilteredItems() {
            var e;
            const t = this.getCurrentFilter();
            let s = [];
            if (m.isCashGameSizeFilter(null == (e = this.subfilterController) ? void 0 : e.currentSubfilter)) {
                var r;
                const e = i.lobbyService.getCashItemsByFilter(this.model.filter);
                s = m.filterFlashGameBySize(e, null == (r = this.subfilterController) ? void 0 : r.currentSubfilter)
            } else s = i.lobbyService.getCashItemsByFilter(t);
            if (i.appConfig.isLandscapeLayout) {
                const e = o.getAllStatusCashGames(s);
                this.cashGameRightPanelController.updateInfo(this.tabName, e)
            } else
                for (let e = 0; e < s.length; e++) i.appConfig.getWalletConfig().checkAndSetGameTableCurrency(s[e], !0);
            return n.sortCashGameList(s)
        }
        showSwitchCurrencyInSubfilter() {
            return !0
        }
        showRefreshButtonInSubFilter() {
            return !1
        }
        showMyGameInSubfilter() {
            return this.model.showMyGameFilter
        }
        subfilterSwitchCurrency() {
            this.changeConvertCurrency(!this.model.convertCurrency)
        }
        subfilterRereshButtonClick() {
            this.requestRefreshGameListIfShowing()
        }
        reloadMyFlashGames() {
            if (this.model.isShow && this.model.showMyGameFilter && this.myFlashGamesController) {
                var e;
                const t = this.setIsFlashMyGameToRoomItems();
                null == (e = this.subfilterController) || e.setMyGameAmount(t), this.model.showMyGames && this.myFlashGamesController.reloadList(this.getMyFlashGame())
            }
        }
        setIsFlashMyGameToRoomItems() {
            const e = this.getFilteredItems();
            let t = 0;
            return e.forEach((e => {
                let s = m.isMyCashGame(e);
                e[u] = s, s && t++
            })), t
        }
        showTab(e, t = -1) {
            var s;
            this.model.showMyGames = C.checkedMyGame, null == (s = this.subfilterController) || s.syncMyGameChecked(this.model.showMyGames), this.view.updateShowMyGames(this.model.showMyGames), super.showTab(e, t)
        }
        subfilterSwitchMyGames(e) {
            this.model.showMyGames = e, C.checkedMyGame = e, this.view.updateShowMyGames(this.model.showMyGames), this.model.showMyGames && this.myFlashGamesController && this.myFlashGamesController.reloadList(this.getMyFlashGame())
        }
        reloadList(e = !1) {
            super.reloadList(e), this.reloadMyFlashGames()
        }
        getMyFlashGame() {
            return (this.getFilteredItems() || []).filter((e => !!e[u]))
        }
    }
    e("FlashGameTabController", C), C.checkedMyGame = !1, t._RF.pop()
}
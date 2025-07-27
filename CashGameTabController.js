import * as t from "./cc.js";
import * as s from "./cv.js";
import * as r from "./LobbyFilterHelper.js";
import * as o from "./LobbyHelper.js";
import * as i from "./LobbyOrderHelper.js";
import * as l from "./LobbyTools.js";
import * as a from "./CashGroupItemController.js";
import * as n from "./CashGroupItemHelper.js";
import * as h from "./CashGameTabView.js";
import * as u from "./CashMyGameController.js";
import * as d from "./LobbyTabController.js";
import * as m from "./LobbyTabController.js";
import * as c from "./CashGameRightPanelController.js";
import * as f from "./Enum.js";

function main() {
    t._RF.push({}, "572a4REK+lDf4VNB0w/HUvz", "CashGameTabController", void 0);
    class y extends d {
        constructor(...e) {
            super(...e), this.groupsFromConfig = [], this.showMyGames = !1, this.showMyGameFilter = void 0
        }
    }
    e("CashGameListModel", y);
    class G extends m {
        constructor(e, t, s) {
            super(h, y, t, s), this.myGamesController = void 0, this.groupForDefaultRooms = void 0, this.cashGameRightPanelController = void 0, this.cashGameRoomListController = e
        }
        onInitializeEnded(e) {
            if (this.groupForDefaultRooms = {
                    usdStake: null,
                    cnyStake: null,
                    tablesFilter: []
                }, e.groups) {
                const t = Object.values(e.groups).sort(((e, t) => e.index - t.index));
                Array.isArray(t) && (this.model.groupsFromConfig = [...t])
            }
            this.model.showMyGameFilter = e.showMyGameFilter ?? !0, super.onInitializeEnded(e), this.model.showMyGames = !1, this.myGamesController = new u(this.view.getMyGamesEngineView(), {
                onRequestRefreshList: this.requestRefreshGameListIfShowing.bind(this)
            }), this.myGamesController.init(), s.appConfig.isLandscapeLayout && (this.cashGameRightPanelController = new c(this.view.getCashGameRightPanelEngineView()), this.cashGameRightPanelController.init()), l.unregisterMessage("update_info", this), l.registerMessage("update_info", this.updateUserInfo.bind(this), this), l.unregisterMessage("update_gold", this), l.registerMessage("update_gold", this.updateUserInfo.bind(this), this), l.registerMessage("updateMyCashGames", this.reloadMyCashGames.bind(this), this), l.registerMessage(s.Enum.MessageCenterAction.requestRefreshGamesList, this.requestRefreshGameListIfShowing.bind(this), this)
        }
        destroy() {
            l.unregisterMessage("update_info", this), l.unregisterMessage("update_gold", this), l.unregisterMessage("updateMyCashGames", this), l.unregisterMessage(s.Enum.MessageCenterAction.requestRefreshGamesList, this), this.myGamesController.destroy(), super.destroy()
        }
        start() {
            super.start(), this.reloadMyCashGames()
        }
        showGroup(e = -1) {
            if (e >= 0) {
                var t;
                const s = null == (t = this.listController) ? void 0 : t.getItems()[e];
                s && (this.cashGameRoomListController.show(), this.cashGameRoomListController.setGroupData(s))
            }
        }
        showTab(e, t = -1) {
            var s;
            this.model.showMyGames = G.checkedMyGame, null == (s = this.subfilterController) || s.syncMyGameChecked(this.model.showMyGames), this.view.updateShowMyGames(this.model.showMyGames), super.showTab(e, t)
        }
        createItemController(e, t) {
            const s = new a(e);
            return s.init(), s.registerHandlers(this.onGroupItemClicked.bind(this)), s
        }
        updateItemControllerByData(e, t) {
            const s = n.parseCashGroupItemData(t);
            null == e || e.updateItemDataWhenScrolling(s)
        }
        getCurrentFilter() {
            const e = this.model.subfilters.find((e => {
                var t;
                return e.name == (null == (t = this.subfilterController) ? void 0 : t.currentSubfilter)
            }));
            return (null == e ? void 0 : e.filter) || this.model.filter
        }
        getFilteredItems() {
            const e = this.getCurrentFilter();
            let t = s.lobbyService.getCashItemsByFilter(e);
            if (s.appConfig.isLandscapeLayout) {
                const e = o.getAllStatusCashGames(t);
                this.cashGameRightPanelController.updateInfo(this.tabName, e)
            } else
                for (let e = 0; e < t.length; e++) s.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t[e], !0);
            i.sortCashGameList(t);
            const l = this.model.groupsFromConfig ? Object.values(this.model.groupsFromConfig) : [],
                a = r.filterCashGroupList(l, e);
            a.push(this.groupForDefaultRooms), a.forEach(((e, t) => {
                var s;
                return e.name = ((null == (s = e.usdStake) || null == (s = s.stake) ? void 0 : s.toString()) || "default") + t
            })), this.fillRoomItemsIntoGroupItems(a, t);
            let n = a.filter((e => e.items.length));
            return n = i.sortCashGameGroupList(n), n
        }
        reloadList(e = !1) {
            super.reloadList(e), this.reloadMyCashGames()
        }
        fillRoomItemsIntoGroupItems(e, t) {
            e.forEach((e => {
                e.items = []
            })), t.forEach((t => {
                const s = l.clientGoldByServer(t.big_blind),
                    r = l.clientGoldByServer(t.small_blind),
                    o = l.clientGoldByServer(t.ante),
                    i = [r, s];
                t.straddle && i.push(2 * s);
                let a = !1;
                for (let s = 0; s < e.length; s++) {
                    const r = e[s],
                        n = r.tablesFilter ? Object.values(r.tablesFilter) : [];
                    for (let e = 0; e < n.length; e++) {
                        const s = n[e];
                        if (s.currencyType == t.currencyType && (s.ante == o || !s.ante && !o) && l.arrayEquals(s.stake, i)) {
                            r.items.push(t), a = !0;
                            break
                        }
                    }
                }
                if (!a) {
                    const s = this.findFallbackGroupForRoomItem(e, t);
                    s && (s.items.push(t), a = !0)
                }
                a || this.groupForDefaultRooms.items.push(t)
            }))
        }
        findFallbackGroupForRoomItem(e, t) {
            const s = l.clientGoldByServer(t.big_blind),
                r = l.clientGoldByServer(t.small_blind),
                o = l.clientCurrencyFromServerCurrency(t.currencyType);
            e = [...e].filter((e => !e.gameIds || e.gameIds.includes(t.game_id)));
            const i = e => {
                    var t, s;
                    if (!e) return 0;
                    const r = o == f.USD ? null == (t = e.usdStake) ? void 0 : t.stake : null == (s = e.cnyStake) ? void 0 : s.stake;
                    return r && r.length ? r[0] : 0
                },
                a = e => {
                    var t, s;
                    if (!e) return 0;
                    const r = o == f.USD ? null == (t = e.usdStake) ? void 0 : t.stake : null == (s = e.cnyStake) ? void 0 : s.stake;
                    return r && r.length ? r[r.length - 1] : 0
                };
            let n = e.find((e => {
                const t = i(e),
                    o = a(e);
                return r >= t && s <= o
            }));
            if (!n) {
                const t = (e = [...e].filter((e => {
                    var t;
                    return !(null == (t = e.usdStake) || !t.stake)
                })).sort(((e, t) => {
                    var s, r;
                    return (null == (s = e.usdStake) ? void 0 : s.stake[0]) - (null == (r = t.usdStake) ? void 0 : r.stake[0])
                })))[0];
                if (i(t) > r) n = t;
                else {
                    const t = e[e.length - 1];
                    a(t) < s && (n = t)
                }
            }
            if (!n) {
                const s = l.clientGoldByServer(t.buyin_min);
                for (let t = 1; t < e.length; t++) {
                    const r = e[t];
                    if (o == f.USD && r.usdStake.minBuyIn <= s || o !== f.USD && r.cnyStake.minBuyIn <= s) {
                        n = r;
                        break
                    }
                }
            }
            return n
        }
        onGroupItemClicked(e) {
            var t;
            if (!this.model.isShow) return;
            const s = null == (t = this.listController) ? void 0 : t.getItems().find((t => t.name == e));
            this.cashGameRoomListController.show(), this.cashGameRoomListController.setGroupData(s)
        }
        updateUserInfo() {}
        reloadMyCashGames() {
            var e;
            if (!this.model.isShow) return;
            this.myGamesController.filter = this.getCurrentFilter();
            const t = this.myGamesController.setIsMyGameForAllCashGames();
            null == (e = this.subfilterController) || e.setMyGameAmount(t), this.model.showMyGames && this.myGamesController.reloadList()
        }
        showMyGameInSubfilter() {
            return this.model.showMyGameFilter
        }
        subfilterSwitchMyGames(e) {
            this.model.showMyGames = e, G.checkedMyGame = e, this.view.updateShowMyGames(this.model.showMyGames), this.model.showMyGames && this.myGamesController.reloadList()
        }
    }
    e("default", G), G.checkedMyGame = !1, t._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./ListView.js";
import * as p from "./borderGraphic.js";
import * as m from "./NodePage.js";
import * as b from "./httpApis.js";
import * as f from "./Pb.js";
import * as w from "./MttDetailStatsPlayerItem.js";
import * as g from "./MttDetailStatsHelper.js";
import * as S from "./LobbyTools.js";
import * as P from "./MttHallDetailExpandTab.js";
import * as L from "./MttItemHelper.js";

function main() {
    var _, B, I, v, x, C, T, D, V, E, M, R, z, N, k, F, A, O, q, K, H, j, G, U, W, Q, J, X, Y, Z;
    r._RF.push({}, "8724aEjvi9CF62Fe59wDtTQ", "MttDetailStatsPlayer", void 0);
    const {
        ccclass: $,
        property: tt
    } = o;
    t("default", (_ = tt(s), B = tt(a), I = tt(p), v = tt(a), x = tt(a), C = tt(a), T = tt(a), D = tt(a), V = tt(a), E = tt(a), M = tt(a), R = tt(y), z = tt(n), N = tt(l), $((A = e((F = class extends P {
        constructor(...t) {
            super(...t), this.mvcView = void 0, i(this, "searchBox", A, this), i(this, "clearSearchBtn", O, this), i(this, "searchBoxBorder", q, this), i(this, "searchBoxBorderNode", K, this), i(this, "bountyNode", H, this), i(this, "emptyListPanel", j, this), i(this, "emptyListText", G, this), i(this, "notFoundText", U, this), i(this, "chipArrow", W, this), i(this, "searchPanel", Q, this), i(this, "headerNode", J, this), i(this, "listView", X, this), i(this, "itemPrefab", Y, this), i(this, "scrollView", Z, this), this._tournamentId = 0, this._lastSearchKeyword = void 0, this._lastSearchTime = 0, this._gameStatus = 0, this._tournamentMode = 0, this._currency = "", this._bigBlind = 0, this._selectedPlayerId = 0, this._displayCurrency = void 0, this._currencyRate = void 0, this._convertCurrency = void 0, this.allDataList = [], this.matchedList = [], this._isRendered = !1
        }
        get searchString() {
            var t;
            return (null == (t = this.searchBox) || null == (t = t.string) ? void 0 : t.trim()) || ""
        }
        get isRendered() {
            return this._isRendered
        }
        onEnable() {}
        render(t, e) {
            this._isRendered = !0, this._gameStatus = t.gameStatus, this._tournamentMode = t.tournamentMode, this._tournamentId = e, this._currency = t.currency, this._bigBlind = t.bigBlind, this._currencyRate = t.currencyRate, this._displayCurrency = t.displayCurrency, this._convertCurrency = t.convertCurrency, this.allDataList = t.playerList.map((e => {
                const i = {
                    ...e,
                    gameStatus: t.gameStatus,
                    tournamentMode: t.tournamentMode,
                    currency: t.currency,
                    tablePlayerList: null,
                    isSelected: !1
                };
                var r;
                i.playerId == this._selectedPlayerId && (i.isSelected = !0, i.tablePlayerList = null == (r = this.getSelectedPlayerInfo()) ? void 0 : r.tablePlayerList);
                return i
            }));
            this.searchString.length > 0 ? this.startSearch() : (this.matchedList = this.allDataList, this.setListViewData(this.allDataList, !1, !0)), this.bountyNode && (this.bountyNode.active = L.getIsBounty(t.tournamentMode))
        }
        updateItem(t, e, i) {
            const r = t.getComponent(w);
            var s;
            (r.render(e, i, this._bigBlind), r.isSelected && r.isShowing()) && (null == (s = this.requestTablePlayerList()) || s.then((t => {
                h(r) && r.updateTablePlayer(t)
            })).catch((() => {
                h(r) && r.hideImmediately()
            })))
        }
        setListViewData(t, e = !1, i = !1) {
            if (!h(this)) return;
            if (t.sort(this.rankComperator), e && (this.allDataList = t), this.scrollView.content.children.length > t.length) {
                let e = t.length;
                for (; e < this.scrollView.content.children.length;) {
                    let t = this.scrollView.content.children[e];
                    this.scrollView.content.removeChild(t), t.destroy()
                }
            }
            this.contentNode.active = !0, t.forEach(((t, e) => {
                if (this.scrollView.content.children.length <= e) {
                    const t = c(this.itemPrefab);
                    t.parent = this.scrollView.content;
                    const e = t.getComponent(w);
                    e.registerOnTouchCallback(this.onClickPlayerItem.bind(this)), e.registerOnShowCallback(this.onShowTablePlayer.bind(this))
                }
                const i = this.scrollView.content.children[e];
                this.updateItem(i, t, e)
            }));
            let r = 0 == t.length;
            this.showEmptyListPanel(r)
        }
        showEmptyListPanel(t) {
            if (this.emptyListPanel)
                if (this.emptyListPanel.active = t, t) {
                    const t = this.searchString.length > 0;
                    this.searchBox && (this.searchBox.enabled = t), this.notFoundText && (this.notFoundText.active = t), this.emptyListText && (this.emptyListText.active = !t)
                } else this.searchBox && (this.searchBox.enabled = !0)
        }
        onClearSearchBtnClick() {
            S.playSoundClick(), this.clearSearchBox(), this.searchBox.focus(), this.setListViewData(this.allDataList)
        }
        onSearchTextChanged() {
            this.clearSearchBtn.active = this.searchBox.string.length > 0
        }
        startSearch() {
            var t;
            null == (t = this.mvcView) || null == t.showLoading || t.showLoading(!0);
            let e = this.searchString;
            var i;
            "" === e ? (this._lastSearchKeyword = "", this.setListViewData(this.allDataList), null == (i = this.mvcView) || null == i.showLoading || i.showLoading(!1)) : this.requestMttTournamentPlayers(e, (() => {
                var t;
                null == (t = this.mvcView) || null == t.showLoading || t.showLoading(!1)
            }))
        }
        onSearchInputStart() {
            S.playSoundClick(), this.showSearchBoxBorder(!0)
        }
        onSearchInputEnd() {
            this.showSearchBoxBorder(!1), this.startSearch()
        }
        showSearchBoxBorder(t) {
            h(this.searchBoxBorder) && (this.searchBoxBorder.enabledStrokeColor = t), h(this.searchBoxBorderNode) && (this.searchBoxBorderNode.active = t)
        }
        onClickSortChips() {
            this.chipArrow.setScale(new u(this.chipArrow.scale.x, -1 * this.chipArrow.scale.y, this.chipArrow.scale.z)), this.setListViewData(this.matchedList)
        }
        chipsComperator(t, e) {
            function i(t) {
                return t.joinStatus < 0 ? t.prize > 0 ? t.prize : 0 : -t.coins
            }
            const r = i(t),
                s = i(e);
            return r < 0 && s < 0 ? s - r : r - s
        }
        rankComperator(t, e) {
            function i(t) {
                return t.gameStatus, t.joinStatus < 0 ? t.rank : t.index
            }
            return i(t) - i(e)
        }
        requestMttTournamentPlayers(t, e) {
            let i = Date.now(),
                r = !1;
            if (this._lastSearchKeyword == t) {
                const t = 3e3;
                i - this._lastSearchTime > t && (this._lastSearchTime = i, r = !0)
            } else r = !0;
            if (!r) return void(e instanceof Function && e());
            this._lastSearchKeyword = t, this._lastSearchTime = i;
            let s = new f.commonProto.MttTournamentPlayersRequest;
            s.TournamentId = this._tournamentId, s.SearchKeyword = t;
            let a = this;
            b.requestMttTournamentPlayers(s, (t => {
                if (h(this)) {
                    if (t && t.ErrorCode) {
                        let e = "ERROR_CODE_PKW." + t.ErrorCode;
                        null == a.mvcView.callPopup || a.mvcView.callPopup(e, void 0)
                    } else a.matchedList = g.getPlayersDetailList(t.PlayersDetail, a._gameStatus, a._tournamentMode, a._currency, a._displayCurrency, a._currencyRate, a._convertCurrency), a.setListViewData(a.matchedList);
                    e instanceof Function && e()
                }
            }), (() => {
                null == a.mvcView.callPopup || a.mvcView.callPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0), e instanceof Function && e()
            }))
        }
        searchLocally(t) {
            let e = this.searchString;
            if ("" !== e) {
                if (m.checkForSymbols(e)) this.matchedList = [];
                else {
                    let t = new RegExp(e);
                    this.matchedList = this.allDataList.filter((e => t.test(e.playerName)))
                }
                this.setListViewData(this.matchedList)
            } else t && this.setListViewData(this.allDataList)
        }
        onDisable() {
            this.clearSearchBox()
        }
        clearSearchBox() {
            this.searchBox && (this.searchBox.string = ""), this.clearSearchBtn && (this.clearSearchBtn.active = !1)
        }
        getPlayerInfo(t) {
            return this.allDataList.find((e => e.playerId == t))
        }
        getSelectedPlayerInfo() {
            return this._selectedPlayerId ? this.getPlayerInfo(this._selectedPlayerId) : null
        }
        onClickPlayerItem(t) {
            var e, i;
            this._selectedPlayerId = t.isSelected ? t.playerId : 0, null == (e = this.scrollView.content.getComponentsInChildren(w)) || e.forEach((t => {
                t.isShowing() && t.playerId != this._selectedPlayerId && t.hide()
            })), null == (i = this.requestTablePlayerList()) || i.then((e => {
                h(t) && (t.updateTablePlayer(e), t.show())
            })).catch((() => {
                h(t) && t.hideImmediately()
            }))
        }
        onShowTablePlayer(t) {
            this.scrollView.scrollToOffset(new d(t.node.position.x, -t.node.position.y), .1)
        }
        requestTablePlayerList() {
            if (!this._tournamentId || !this._selectedPlayerId) return;
            const t = {
                TournamentId: this._tournamentId,
                UserId: this._selectedPlayerId
            };
            return new Promise(((e, i) => {
                b.requestRoomPlayers(t, (r => {
                    this._tournamentId == t.TournamentId && this._selectedPlayerId == t.UserId && r && !r.ErrorCode ? e(g.getTablePlayerInfoList(r.Players, this._bigBlind, t.UserId)) : i()
                }), (() => {
                    i()
                }))
            }))
        }
        reset() {
            this._selectedPlayerId = 0
        }
        onLanguageChange() {
            this.scrollView.content.children.forEach((t => {
                t.getComponent(w).onLanguageChange()
            }))
        }
    }).prototype, "searchBox", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(F.prototype, "clearSearchBtn", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(F.prototype, "searchBoxBorder", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(F.prototype, "searchBoxBorderNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(F.prototype, "bountyNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(F.prototype, "emptyListPanel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(F.prototype, "emptyListText", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(F.prototype, "notFoundText", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(F.prototype, "chipArrow", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(F.prototype, "searchPanel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(F.prototype, "headerNode", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(F.prototype, "listView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(F.prototype, "itemPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(F.prototype, "scrollView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = F)) || k));
    r._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ListView.js";
import * as u from "./MttDetailStatsHelper.js";
import * as b from "./MttDetailStatsTableItem.js";
import * as p from "./MttHallDetailExpandTab.js";
import * as f from "./httpApis.js";
import * as I from "./cv.js";

function main() {
    var m, y, T, g, w, P, _, L, C, V, v, S, D, R;
    l._RF.push({}, "40b3cIoa5xNBKs6Kwxx8Pae", "MttDetailStatsTable", void 0);
    const {
        ccclass: z,
        property: x
    } = r;
    e("default", (m = x(h), y = x(n), T = x(n), g = x(n), w = x(a), P = x(s), z((C = t((L = class extends p {
        constructor(...e) {
            super(...e), this.mvcView = void 0, i(this, "listView", C, this), i(this, "tipsPanel", V, this), i(this, "headerPanel", v, this), i(this, "emptyListPanel", S, this), i(this, "itemPrefab", D, this), i(this, "scrollView", R, this), this._data = null, this._tournamentId = 0, this._selectedTableId = 0, this.onPlayerCountUpdated = null, this._isRendered = !1
        }
        get isRendered() {
            return this._isRendered
        }
        onEnable() {}
        updateContentNodeSize() {
            super.updateContentNodeSize(), this.contentNode.setPosition(0, 0, 0)
        }
        render(e) {
            if (this._isRendered = !0, this._selectedTableId) {
                const i = e.tableList.find((e => e.tableId == this._selectedTableId));
                var t;
                if (i) i.isSelected = !0, i.tablePlayerList = null == (t = this.getSelectedTableInfo()) ? void 0 : t.tablePlayerList
            }
            this._data = e, this._tournamentId = e.tournamentId, this.setListViewData(e.tableList)
        }
        updateItem(e, t, i) {
            const l = e.getComponent(b);
            var n;
            (l.render(t, i), l.isSelected) && (null == (n = this.requestTablePlayerList()) || n.then((e => {
                o(l) && (l.updateTablePlayer(e), I.appConfig.isLandscapeLayout && this.syncTableItemPlayerCount(this._selectedTableId, e.playerList.length))
            })).catch((() => {
                o(l) && l.hideImmediately()
            })))
        }
        setListViewData(e) {
            if (o(this)) {
                if (e.sort(((e, t) => e.tableId - t.tableId)), this.scrollView.content.children.length > e.length) {
                    let t = e.length;
                    for (; t < this.scrollView.content.children.length;) {
                        let e = this.scrollView.content.children[t];
                        this.scrollView.content.removeChild(e), e.destroy()
                    }
                }
                e.forEach(((e, t) => {
                    if (this.scrollView.content.children.length <= t) {
                        const e = d(this.itemPrefab);
                        e.parent = this.scrollView.content;
                        const t = e.getComponent(b);
                        t.registerOnTouchCallback(this.onClickTableItem.bind(this)), t.registerOnShowCallback(this.onShowTablePlayer.bind(this))
                    }
                    const i = this.scrollView.content.children[t];
                    this.updateItem(i, e, t)
                })), this.emptyListPanel.active = 0 == e.length
            }
        }
        getTableInfo(e) {
            var t;
            return null == (t = this._data) || null == (t = t.tableList) ? void 0 : t.find((t => t.tableId == e))
        }
        getSelectedTableInfo() {
            return this._selectedTableId ? this.getTableInfo(this._selectedTableId) : null
        }
        onClickTableItem(e) {
            var t, i;
            this._selectedTableId = e.isSelected ? e.tableId : 0, null == (t = this.scrollView.content.getComponentsInChildren(b)) || t.forEach((e => {
                e.isShowing() && e.tableId != this._selectedTableId && e.hide()
            })), null == (i = this.requestTablePlayerList()) || i.then((t => {
                o(e) && (e.updateTablePlayer(t), e.show(), I.appConfig.isLandscapeLayout && this.syncTableItemPlayerCount(this._selectedTableId, t.playerList.length))
            })).catch((() => {
                o(e) && e.hideImmediately()
            }))
        }
        onShowTablePlayer(e) {
            this.scrollView.scrollToOffset(new c(e.node.position.x, -e.node.position.y), .1)
        }
        requestTablePlayerList() {
            if (!this._tournamentId || !this._selectedTableId) return;
            const e = {
                TournamentId: this._tournamentId,
                RoomId: this._selectedTableId
            };
            return new Promise(((t, i) => {
                f.requestRoomPlayers(e, (l => {
                    this._tournamentId == e.TournamentId && this._selectedTableId == e.RoomId && l && !l.ErrorCode ? t(u.getTablePlayerInfoList(l.Players, this._data.bigBlind, 0, e.RoomId)) : i()
                }), (() => {
                    i()
                }))
            }))
        }
        reset() {
            this._selectedTableId = 0
        }
        syncTableItemPlayerCount(e, t) {
            var i;
            if (null == e || null == t) return;
            const l = this._data.tableList.find((t => t.tableId == e)),
                n = null == (i = this.scrollView.content.getComponentsInChildren(b)) ? void 0 : i.find((t => t.tableId == e));
            var a;
            l && o(n) && (l.playerCount = t, n.render(l, l.tableId), null == (a = this.onPlayerCountUpdated) || a.call(this, e, t))
        }
    }).prototype, "listView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(L.prototype, "tipsPanel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(L.prototype, "headerPanel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(L.prototype, "emptyListPanel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(L.prototype, "itemPrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(L.prototype, "scrollView", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = L)) || _));
    l._RF.pop()
}
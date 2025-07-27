import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./SlideView.js";
import * as b from "./RoomData.js";
import * as C from "./cv.js";
import * as S from "./i18nText.js";
import * as I from "./mttController.js";
import * as R from "./FakeMultipleGame.js";
import * as _ from "./MultipleGame.js";
import * as M from "./MultipleRoomManager.js";
import * as w from "./MTTConnector.js";
import * as D from "./ResourcesLoader.js";
import * as E from "./ScrollItem.js";
import * as B from "./MultiTableBarSelectorItem.js";
import * as v from "./MultiTableBarSelectorItem.js";
import * as y from "./MultiTableBarSelectorItem.js";

function main() {
    var L, P, x, A, O, V, W, k, F, z, G, U, H, N, $, K, J, j, q, Q, Y;
    s._RF.push({}, "8d9e1iWMQhOnqYTgdO1ooJp", "MultiTableBarSelector", void 0);
    const {
        ccclass: Z,
        property: X
    } = c;
    e("default", (L = X(T), P = X(E), x = X(o), A = X(n), O = X(l), V = X(a), W = X(r), k = X(r), F = X(S), Z(((Y = class e extends h {
        constructor(...e) {
            super(...e), i(this, "slideView", U, this), i(this, "listScrollItem", H, this), i(this, "listScrollContent", N, this), i(this, "labelSelected", $, this), i(this, "btnConfirm", K, this), i(this, "richTextDescription", J, this), i(this, "maxWidget", j, this), i(this, "panelWidget", q, this), i(this, "title", Q, this), this.itemInfos = [], this.selectedTours = [], this.confirmSelect = !1, this._hideCallback = null, this._initSelectedTours = []
        }
        static setSelectedCashRooms(t) {
            t && (e.selectedCashRooms = t)
        }
        static removeSelectedCashRoom(t) {
            if (t) {
                const i = e.selectedCashRooms.findIndex((e => e.isSameRoom(t)));
                i >= 0 && e.selectedCashRooms.splice(i, 1)
            }
        }
        static get maxOpenRooms() {
            return M.instance.maxOpenRooms
        }
        static syncSelectedRooms(t) {
            let i = e.maxOpenRooms;
            const s = I.selfTours.getPlayingTournaments(),
                o = I.selfTours.getSelectedTournamentMultiTableBarPlaying(),
                n = e.getValidCashRoomInstances().map((e => new b(e.gameId, e.roomId))),
                l = e.selectedCashRooms.map((e => e.Clone()));
            t && (o.length < i && o.length < s.length || 0 == I.selfTours.getSelectedTournamentMultiTableBar().length) && (s.forEach((e => {
                o.length < i && !o.includes(e.TournamentId) && o.push(e.TournamentId)
            })), I.selfTours.setSelectedTournamentMultiTableBar(o));
            let a = t ? o.length : 0,
                r = a < i ? i - a : 0,
                c = [];
            n.forEach((e => {
                c.length < r && c.push(e)
            })), l.forEach((e => {
                c.length < r && !c.some((t => t.isSameRoom(e))) && c.push(e)
            })), e.setSelectedCashRooms(c)
        }
        static needToShow() {
            if (C.appConfig.getGameConfig().enableMultiTableBar) {
                const t = e.maxOpenRooms,
                    i = I.selfTours.getPlayingTournaments().length;
                if (i > 0 && !cc_mtt.vv.DataManager.GAME_LEVEL_LIST) return !1;
                if (C.config.getCurrentScene() === C.Enum.SCENE.GAME_SCENE) return !1;
                if (i > t) return !0;
                if (i + e.getValidCashRoomInstances().length > t) return !0
            }
            return !1
        }
        static checkAndShow(t = !0, i = null) {
            return !!e.needToShow() && (e.show(t, i), !0)
        }
        static show(t = !1, i = null) {
            u(e.currentPopup, !0) ? e.updateUI(i) : e.doShow(t, i)
        }
        static doShow(t, i) {
            const s = () => {
                if (e.needToShow()) {
                    const t = D.RES_PATH.PREFAB.COMMON.MTT_MULTI_TABLE_BAR_SELECTOR_PKW;
                    cc_mtt.vv.AssetsManager.loadRes(t, d, ((t, s) => {
                        const o = m(s);
                        o.parent = g.getScene().getComponentInChildren(f).node, o.position = new p(0, 0, 0), e.currentPopup = o.getComponent(e), e.currentPopup._hideCallback = i
                    }))
                }
            };
            t ? I.selfTours.reloadUserTournaments(null, null).then(s).catch(s) : s()
        }
        static updateUI(t) {
            e.currentPopup._isOnLoadCalled && (e.currentPopup._hideCallback = t, e.currentPopup.reloadUI())
        }
        start() {
            this.confirmSelect = !1, this.initListView(), this.reloadUI(), this.cacheInitSelectedTours()
        }
        cacheInitSelectedTours() {
            var e;
            this._initSelectedTours = [], (null == (e = this.selectedTours) ? void 0 : e.length) > 0 && this.selectedTours.forEach((e => {
                this._initSelectedTours.push(e)
            }))
        }
        onEnable() {
            this.slideView && this.slideView.show(!0, this.onHiddenPopup.bind(this)), C.appConfig.isWebApp && this.slideView.node.once(C.Enum.CustomEvent.ActionShowFinish, this.finishShow.bind(this), this)
        }
        onDisable() {
            C.appConfig.isWebApp && this.slideView.node.off(C.Enum.CustomEvent.ActionShowFinish, this.finishShow.bind(this), this)
        }
        finishShow() {
            this.panelWidget && this.maxWidget && (this.panelWidget.isAlignTop = !0, this.panelWidget.isAbsoluteTop = !0, this.panelWidget.top = this.maxWidget.top, this.panelWidget.isAlignBottom = !0, this.panelWidget.isAbsoluteBottom = !0, this.panelWidget.bottom = 0, C.resMgr.adaptWidget(this.node, !0, !1))
        }
        onDestroy() {
            e.currentPopup = null
        }
        get selectedRoomCount() {
            return this.selectedTours.length + e.selectedCashRooms.length
        }
        get selectedItemCount() {
            return this.itemInfos.filter((e => e.isChecked)).length
        }
        getSelectedMttRooms() {
            return this.itemInfos.filter((e => e.isChecked && e.type == _.HOLDEM)).map((e => e.tournamentId))
        }
        getPlayingTournaments() {
            return I.selfTours.getPlayingTournaments()
        }
        onHiddenPopup() {
            var e;
            this.updateSelectedMttRooms(), this.updateSelectedCashRooms(), w.instance.sendMessageCenter(w.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED), null == (e = this._hideCallback) || e.call(this, this.confirmSelect)
        }
        updateSelectedMttRooms() {
            const t = e.maxOpenRooms,
                i = this.getPlayingTournaments().map((e => e.TournamentId));
            if (this.confirmSelect) {
                I.selfTours.setSelectedTournamentMultiTableBar(this.selectedTours);
                const e = I.selfTours.getSelectedTournamentMultiTableBarPlaying();
                e.length < t && e.length < i.length && i.forEach((i => {
                    e.length < t && !e.includes(i) && e.push(i)
                })), this.selectedTours = e
            } else if (C.appConfig.isWebApp) this.selectedTours = [];
            else if (this._initSelectedTours.length >= t) this.selectedTours = this._initSelectedTours;
            else {
                let e = i.length >= t ? i : i.slice(0, t);
                const s = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments;
                if (s) {
                    const o = s.filter((e => {
                        var t;
                        return i.includes(null == e || null == (t = e.Detail) ? void 0 : t.Id)
                    })).sort(((e, t) => (null == t ? void 0 : t.Detail.RegFee) - (null == e ? void 0 : e.Detail.RegFee)));
                    e = o.length >= t ? o.map((e => null == e ? void 0 : e.Detail.Id)).slice(0, t) : e
                }
                this.selectedTours = e
            }
            I.selfTours.setSelectedTournamentMultiTableBar(this.selectedTours)
        }
        static getValidCashRoomInstances() {
            let e = R.isShowingFirstTimeAfterLogin() ? C.roomManager.rooms : C.roomManager.getOpeningRooms();
            return e = e.filter((e => C.roomManager.checkGameIsZoom(e.gameId) || C.clubDataMgr.getClubData(e.gameId, e.firstId))), e
        }
        updateSelectedCashRooms() {
            const t = e.maxOpenRooms - I.selfTours.getSelectedTournamentMultiTableBar().length;
            let i = e.selectedCashRooms;
            if (t > 0) {
                if (this.confirmSelect && (i = this.itemInfos.filter((e => e.isChecked && e instanceof y)).map((e => e.getRoomInfo()))), i.length >= t) i = i.slice(0, t);
                else {
                    e.getValidCashRoomInstances().forEach((e => {
                        i.length < t && !i.some((t => t.isSameRoomInfo(e.gameId, e.roomId))) && i.push(new b(e.gameId, e.roomId))
                    }))
                }
                e.selectedCashRooms = i
            } else e.selectedCashRooms = []
        }
        initListView() {
            var e = (e, t) => {
                e && (e.getComponent(v).onToggleCheckCb = this.onToggleChecked.bind(this), e.getComponent(v).updateInfo(t))
            };
            this.listScrollItem && (this.listScrollItem.setItemFunc(0, e), this.listScrollItem.setItemFunc(1, e))
        }
        reloadUI() {
            const t = this.getPlayingTournaments().length,
                i = e.getValidCashRoomInstances().length;
            let s = e.maxOpenRooms,
                o = s - t,
                n = "";
            t > s ? (this.itemInfos = this.loadMttTableData(), n = C.appConfig.isWebApp ? C.StringTools.formatC(C.config.getStringData("Multi_table_bar_selector_description_web"), t, s, s) : C.StringTools.formatC(C.config.getStringData("Multi_table_bar_selector_description"), t, s, s)) : 0 == t ? (this.itemInfos = this.loadCashTableData(o), n = C.StringTools.formatC(C.config.getStringData("Multi_table_bar_selector_description_mtt_and_cash"), i, s, s)) : t > 0 && (this.itemInfos = this.loadMttTableData(!0), this.itemInfos = [...this.itemInfos, ...this.loadCashTableData(o)], n = C.StringTools.formatC(C.config.getStringData("Multi_table_bar_selector_description_mtt_and_cash"), t + i, s, s)), this.itemInfos.length > 0 && (this.itemInfos[0].prefabType = 0), this.listScrollItem.changeItemData(this.itemInfos, !0), u(this.title) && (C.appConfig.isWebApp ? this.title.setKey("Resume_Games_web") : this.title.setKey("Open_tables")), this.richTextDescription.string = C.StringTools.formatC(n), this.reloadLabelSelected(), this.reloadConfirmBtn()
        }
        loadMttTableData(t = !1) {
            const i = e.maxOpenRooms,
                s = this.getPlayingTournaments(),
                o = I.selfTours.getSelectedTournamentMultiTableBarPlaying();
            this.selectedTours.length <= 0 ? o.length <= i && (this.selectedTours = o) : this.selectedTours = this.selectedTours.filter((e => s.some((t => (null == t ? void 0 : t.TournamentId) === e))));
            let n = [],
                l = 0;
            for (let e = 0; e < s.length; e++) {
                let o = s[e];
                const a = l < i && (t || this.selectedTours.some((e => e == o.TournamentId))),
                    r = t || !a && this.selectedTours.length >= i;
                n.push(new B(o.TournamentId, a, r)), l += a ? 1 : 0
            }
            return n
        }
        loadCashTableData(t) {
            let i = [],
                s = [],
                o = e.getValidCashRoomInstances();
            for (let n = 0; n < o.length; n++) {
                let l = o[n];
                const a = e.selectedCashRooms.some((e => e.isSameRoomInfo(l.gameId, l.roomId))) && s.length < t,
                    r = !a && t - s.length <= 0;
                i.push(new y(l.gameId, l.roomId, a, r)), a && s.push(new b(l.gameId, l.roomId))
            }
            return e.setSelectedCashRooms(s), i
        }
        reloadLabelSelected() {
            this.labelSelected.string = `${C.config.getStringData("Select")} ${this.selectedItemCount}/${e.maxOpenRooms}`
        }
        reloadConfirmBtn() {
            this.btnConfirm.interactable = this.selectedItemCount >= e.maxOpenRooms
        }
        reloadItemsState(t) {
            let i = t.info,
                s = this.itemInfos.findIndex((e => e instanceof B && i instanceof B ? e.isSameData(i.tournamentId) : e instanceof y && i instanceof y && e.isSameData(i.gameId, i.roomId)));
            if (-1 != s)
                for (let i = 0; i < this.itemInfos.length; i++)
                    if (i != s) {
                        let s = this.itemInfos[i];
                        t.isChecked ? this.itemInfos.filter((e => e.isChecked)).length >= e.maxOpenRooms && (s.isDisable || s.isChecked || (s.isDisable = !0)) : s.isDisable && !s.isChecked && (s.isDisable = !1)
                    } this.listScrollContent.children.map((e => null == e ? void 0 : e.getComponent(v))).forEach((e => {
                u(e, !0) && e.reloadUI()
            }))
        }
        onToggleChecked(e) {
            if (this.reloadItemsState(e), this.reloadLabelSelected(), this.reloadConfirmBtn(), e.info.type == _.HOLDEM) {
                let e = this.getSelectedMttRooms();
                (null == e ? void 0 : e.length) > 0 && (this.selectedTours = [], e.forEach((e => this.selectedTours.push(e))))
            }
        }
        onConfirmClicked() {
            this.confirmSelect = !0, this.slideView.hide(), console.log(`Confirm select tournaments: ${this.selectedTours}\n               cash rooms: ${JSON.stringify(e.selectedCashRooms)}`)
        }
        onCancelClicked() {
            this.slideView.hide(), console.log("Cancel select tournaments")
        }
    }).currentPopup = null, Y.selectedCashRooms = [], U = t((G = Y).prototype, "slideView", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(G.prototype, "listScrollItem", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(G.prototype, "listScrollContent", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(G.prototype, "labelSelected", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(G.prototype, "btnConfirm", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(G.prototype, "richTextDescription", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(G.prototype, "maxWidget", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(G.prototype, "panelWidget", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(G.prototype, "title", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = G)) || z));
    s._RF.pop()
}
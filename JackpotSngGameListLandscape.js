import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./RoomManager.js";
import * as r from "./Enum.js";
import * as p from "./cv.js";
import * as c from "./GameViewLoader.js";
import * as d from "./Translator.js";
import * as u from "./MultipleGame.js";
import * as g from "./MultipleRoomManager.js";
import * as P from "./mttconfig.js";
import * as m from "./Pb.js";
import * as I from "./httpApis.js";
import * as f from "./JackpotSngGameList.js";
import * as L from "./JackpotSngGameListSpinItem.js";
import * as U from "./JackpotRighPanel.js";
import * as S from "./JackpotSngBuyInLandscape.js";
import * as b from "./LobbyHelper.js";

function main() {
    var k, C, R, G, w, v;
    n._RF.push({}, "55f36CY4cVJV4D7TMWg7o1M", "JackpotSngGameListLandscape", void 0);
    const {
        ccclass: B,
        property: _
    } = a;
    t("default", (k = _(s), C = _(U), B((w = e((G = class extends f {
        constructor(...t) {
            super(...t), i(this, "loadingBlocker", w, this), i(this, "rightPanel", v, this), this.invalidId = -1, this.selectedId = this.invalidId, this._isResettingRightPanel = !1
        }
        onLoad() {
            super.onLoad(), p.MessageCenter.register(r.AddRoom, this.resetRightPanel.bind(this, !0), this), p.MessageCenter.register(r.ExitRoom, this.resetRightPanel.bind(this), this)
        }
        onDestroy() {
            super.onDestroy(), p.MessageCenter.unregister(r.AddRoom, this), p.MessageCenter.unregister(r.ExitRoom, this)
        }
        start() {
            this.createSignUpPopup()
        }
        onEnable() {
            super.onEnable(), p.MessageCenter.register("reloadSngGameList", this.requestJackpotSngGameList.bind(this), this.node), o(this.rightPanel) && (this.rightPanel.node.active = !0)
        }
        onDisable() {
            p.MessageCenter.unregister("reloadSngGameList", this.node), o(this.rightPanel) && (this.rightPanel.node.active = !1)
        }
        setLoadingBlocker(t) {
            this.loadingBlocker.active = t
        }
        createHowToPlay() {}
        getSelectedId() {
            if (0 == this.tournamentList.length) return this.invalidId;
            if (this.selectedId == this.invalidId) return this.tournamentList[0].Detail.Id;
            const t = `${this.selectedId}`;
            if (this.gameListItemMap.hasOwnProperty(t)) {
                return this.gameListItemMap[t] ? this.selectedId : this.tournamentList[0].Detail.Id
            }
            return this.tournamentList[0].Detail.Id
        }
        selectGame(t) {
            var e;
            if (this.selectedId != this.invalidId) {
                const t = this.getItemById(this.selectedId);
                null == t || t.setSelected(!1)
            }
            const i = this.selectedId != t.Detail.Id;
            this.selectedId = t.Detail.Id;
            const n = this.getItemById(this.selectedId);
            var s;
            (null == n || n.setSelected(!0), null == (e = this.rightPanel) || e.setTournamentData(t), i) && (null == (s = this.rightPanel) || s.setBuyInCount(1))
        }
        setList(t) {
            super.setList(t);
            if (!t.some((t => t.Detail.Id === this.selectedId)) && (this.selectedId = this.invalidId), null == t || 0 == t.length) return;
            const e = this.selectedId == this.invalidId;
            if (e && this.selectGame(t[0]), this.selectedId != this.invalidId) {
                if (null == this.getItemById(this.selectedId)) return;
                this.updateRightPanel(e)
            }
        }
        getItemById(t) {
            const e = this.gameListItemMap[`${this.selectedId}`];
            if (null == e) return null;
            return e.getComponent(L)
        }
        createSignUpPopup() {
            this.signUpPopUp = l(this.signUpPopUpPrefab).getComponent(S), this.signUpPopUp.node.parent = this.signUpPopUpParentNode, this.signUpPopUp.init(), this.signUpPopUp.node.active = !1
        }
        showSignUpPopUp(t, e, i = 1) {
            o(this.signUpPopUp) || this.createSignUpPopup(), this.signUpPopUp.setResponseBuyInCallBack((t => {
                t && (this._isScheduleGameListUpdated = !1, p.appConfig.getGeneralConfig().multiWindowEnabled && this.resetRightPanel())
            }), this), this.signUpPopUp.setData(t, e, i), this.signUpPopUp.show(), null != this.signUpPopUpParentNode && this.signUpPopUp.node.setSiblingIndex(this.signUpPopUpParentNode.children.length + 1)
        }
        resetRightPanel(t = !1) {
            t && this._isResettingRightPanel || (this.updateRightPanel(!0, (t => {
                var e;
                null == (e = this.rightPanel) || e.setBuyInCount(0 == h.getInstance().getAvailableRoomsToJoin() ? 0 : 1), this._isResettingRightPanel = !1
            })), this._isResettingRightPanel = !0)
        }
        showBackToGamePopUp(t, e, i = 1) {
            const n = {
                    type: 1,
                    text: d("GLOBAL_SPINS.BUY_IN_POPUP.NEW_TAKE_IN"),
                    callback: () => {
                        this.isFullRoomsToJoin() || this.showSignUpPopUp(t, e, i)
                    }
                },
                s = {
                    type: 0,
                    text: d("GLOBAL_SPINS.BUY_IN_POPUP.BACK_TO_GAME"),
                    callback: () => {
                        if (this._isScheduleGameListUpdated = !1, p.appConfig.getGeneralConfig().multiWindowEnabled) u.openAllSngGames(), p.authenticator.showDelayedPromo();
                        else {
                            (new c).callGameView(m.commonProto.MTT_GAME_MODE.NLH, P.GAME_LEVEL_LIST_ID.SNG, 0)
                        }
                    }
                },
                a = d("POPUP_HINTS.GAME_LIST.GAME_ALREADY_TAKE_IN"),
                o = t => {
                    e > 0 ? p.popUp.showMsg({
                        txt: t,
                        isTwoBtn: !1,
                        onXCancelCallback: !1,
                        sureLabel: s.text,
                        sureCallback: s.callback
                    }) : p.popUp.showMsg({
                        txt: t,
                        isTwoBtn: !1,
                        onXCancelCallback: !1,
                        sureLabel: p.config.getStringData("OKAY")
                    })
                };
            c.checkValidOpeningGame(g.Sng, o) && (e < p.appConfig.getGameConfig().gameTablesConcurrent.sng ? p.popUp.showMsg({
                txt: a,
                isTwoBtn: !0,
                onXCancelCallback: !1,
                sureLabel: n.text,
                sureCallback: n.callback,
                cancelLabel: s.text,
                cancelCallback: s.callback
            }) : o(a))
        }
        showSignUp(t) {
            this.isFakeShowSignUp ? this.fakeShowSignUp(t) : this.updateLevelInfo(!0, (e => {
                e.code || (this.selectGame(t), e.takeinCount > 0 ? this.showBackToGamePopUp(t, e.takeinCount) : (this.showSignUpPopUp(t, e.takeinCount), this.updateRightPanelBuyIn(e)))
            }))
        }
        showLoadingAll(t) {
            var e;
            this.setLoadingBlocker(t), null == (e = this.rightPanel) || e.setLoading(t)
        }
        updateLevelInfo(t = !0, e = null, i = null) {
            t && this.showLoadingAll(!0), Promise.all([I.requestSngRoomLevelInfo(), b.updateToolList()]).then((([t, n]) => {
                t.code || this.updateRightPanelBuyIn(t), null == e || e(t), null == i || i(!t.code)
            })).catch((e => {
                console.log("requestSngRoomLevelInfo error/timeout"), t && this.showNetworkErrorPopup(), null == i || i(!1)
            })).finally((() => {
                t && this.showLoadingAll(!1)
            }))
        }
        onClickItem(t) {
            this.selectGame(t.data), this.rightPanel
        }
        updateRightPanel(t = !0, e = null) {
            var i;
            null !== this.rightPanel && (null == (i = this.rightPanel) || i.setGameListLandscape(this), this.updateLevelInfo(t, (t => {
                t.code || this.updateRightPanelBuyIn(t)
            }), e))
        }
        updateRightPanelBuyIn(t) {
            var e, i;
            null == (e = this.rightPanel) || e.setGameListLandscape(this), null == (i = this.rightPanel) || i.setTakeInCount(t.takeinCount)
        }
        onEventShowBuyIn(t) {}
    }).prototype, "loadingBlocker", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(G.prototype, "rightPanel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = G)) || R));
    n._RF.pop()
}
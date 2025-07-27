import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./JackpotSngSignUpPopUp.js";
import * as m from "./JackpotSngSignUpPopUp.js";
import * as L from "./ImpokerHall.js";
import * as P from "./mttconfig.js";
import * as S from "./httpApis.js";
import * as U from "./Pb.js";
import * as T from "./GameViewLoader.js";
import * as b from "./JackpotSngGameListItem.js";
import * as w from "./JackpotHowToPlayPopUp.js";
import * as y from "./cv.js";
import * as _ from "./Translator.js";
import * as M from "./MTTConnector.js";
import * as I from "./SngEvent.js";
import * as C from "./RoomManager.js";
import * as k from "./MultipleRoomManager.js";
import * as G from "./JsngBgMusic.js";
import * as v from "./CommonTools.js";
import * as B from "./FullscreenController.js";
import * as E from "./FakeMultipleGame.js";
import * as A from "./holdemRoom.js";
import * as R from "./LobbyTools.js";

function main() {
    var D, N, O, F, V, J, x, H, z, q, X, W, K, Y, j, Q;
    n._RF.push({}, "ead3bfePzZFwLMsYQXdiXpj", "JackpotSngGameList", void 0);
    const {
        ccclass: Z,
        property: $
    } = s;
    var tt = function(t) {
        return t.GameList = "game_list", t.BuyIn = "buy_in", t.ShowBuyIn = "show_buy_in", t.BackToGame = "back_to_game", t.UpdateTool = "update_tool", t
    }(tt || {});
    t("default", (D = $(o), N = $(a), O = $(o), F = $(a), V = $(o), J = $(a), x = $(a), Z((q = e((z = class extends l {
        constructor(...t) {
            super(...t), i(this, "itemPrefab", q, this), i(this, "loadingMsgNode", X, this), i(this, "signUpPopUpPrefab", W, this), i(this, "signUpPopUpParentNode", K, this), i(this, "howtoPlayPrefab", Y, this), i(this, "itemParent", j, this), i(this, "loadingBlocker", Q, this), this.signUpPopUp = null, this.tournamentList = [], this.howToPlayPopup = null, this.gameListItemMap = {}, this.requestListInterval = 5, this._isScheduleGameListUpdated = !1, this._isServerMaintenance = !1, this.loadingTasks = new Map, this.isFakeShowSignUp = !1, this._autoScrollTopOneTime = !1, this.samples = [{
                Detail: {
                    Id: 1,
                    RegFee: 20,
                    Created: null
                },
                Jackpot: 456123,
                CurrencyRate: [{
                    Currency: "USD",
                    Rate: 2.1346
                }]
            }], this._list = []
        }
        reset() {
            this.unscheduleAllCallbacks(), this.itemParent.children.forEach((t => t.destroy())), this.gameListItemMap = {}
        }
        onLoad() {
            y.appConfig.isLandscapeLayout || (this.signUpPopUpParentNode = v.instance.getParentScene(r, null).getComponentInChildren(p).node), this.createHowToPlay(), G.checkAndInitAudioClips(null), y.MessageCenter.register("sng_show_buy_in_popup", this.onEventShowBuyIn.bind(this), this.node)
        }
        onEnable() {
            this.scheduleRequestJackpotSngGameList(!0), y.appConfig.isWebApp && this.recalculateGridWidth()
        }
        onDestroy() {
            this.unscheduleAllCallbacks(), y.MessageCenter.unregister("sng_show_buy_in_popup", this.node)
        }
        isAvailableGameList() {
            return null !== this.tournamentList && this.tournamentList.length > 0
        }
        ReloadGameListAnimation(t) {
            this.loadingMsgNode && (this.loadingMsgNode.active = t)
        }
        updateLoading(t, e) {
            if (this.loadingTasks) {
                this.loadingTasks.set(t, e);
                Array.from(this.loadingTasks.values()).some((t => t)) ? this.showLoadingIndicator() : this.hideLoadingIndicator()
            }
        }
        setList(t) {
            if (null == this.gameListItemMap) return;
            t && t.sort(((t, e) => {
                if (t.Detail.RegFee != e.Detail.RegFee) return t.Detail.RegFee - e.Detail.RegFee;
                t.MultiplierList.sort(((t, e) => e - t)), e.MultiplierList.sort(((t, e) => e - t));
                for (let i = 0; i < t.MultiplierList.length && i < e.MultiplierList.length; i++) {
                    const n = t.MultiplierList[i],
                        o = e.MultiplierList[i];
                    if (n != o) return n - o
                }
                return 0
            })), this.tournamentList = t;
            const e = {};
            t && t.forEach(((t, i) => {
                let n = this.gameListItemMap[t.Detail.Id];
                if (!n) {
                    n = u(this.itemPrefab), n.parent = this.itemParent;
                    const t = n.getComponent(b);
                    t.setGameListPage(this), t.init()
                }
                e[t.Detail.Id] = n, n.setSiblingIndex(i), n.getComponent(b).setData(t)
            })), Object.keys(this.gameListItemMap).forEach((t => {
                if (!e[t]) {
                    const e = this.gameListItemMap[t];
                    h(e) && e.destroy()
                }
            })), this.gameListItemMap = e, this.autoScrollToTop()
        }
        recalculateGridWidth() {
            let t = this.node.getChildByName("content"),
                e = null == t ? void 0 : t.getChildByName("grid"),
                i = null == e ? void 0 : e.getComponent(c);
            if (!t || !e || !i) return;
            let n = this.itemPrefab.data.getContentSize().width,
                o = t.getContentSize().width - i.paddingLeft - i.paddingRight;
            o = Math.floor((o + i.spacingX) / (n + i.spacingX)) * (n + i.spacingX) - i.spacingX + i.paddingLeft + i.paddingRight, e.getComponent(g).setContentSize(o, e.getContentSize().height)
        }
        setTicketList(t) {
            t && this.gameListItemMap && t.forEach(((t, e) => {
                if (t) {
                    var i;
                    let e = this.gameListItemMap[t.Detail.Id];
                    null == e || null == (i = e.getComponent(b)) || i.setTicket()
                }
            }))
        }
        autoScrollToTop() {
            if (!this._autoScrollTopOneTime && this.isAvailableGameList()) {
                let t = this.getComponent(d);
                t && this.scheduleOnce((() => {
                    t.scrollToTop(), this._autoScrollTopOneTime = !0
                }))
            }
        }
        requestJackpotSngGameList() {
            this.isAvailableGameList() || this._isServerMaintenance || this.ReloadGameListAnimation(!0);
            const t = {
                    ListId: P.GAME_LEVEL_LIST_ID.SNG,
                    platForm: M.instance.PLATFORM.WPTG
                },
                e = () => {
                    null != this && h(this.node) && (this.setList(cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments), this.ReloadGameListAnimation(!1), cc_mtt.vv.DataManager.updateToolList((() => {
                        this.setTicketList(cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments)
                    })), this.showSignUpNewGame(), this._isServerMaintenance = !this.isAvailableGameList(), this._isServerMaintenance && (this._autoScrollTopOneTime = !1))
                };
            L.instance && L.instance.getLevelList("sngList", t, e, (() => {}), !1)
        }
        scheduleRequestJackpotSngGameList(t) {
            this._isScheduleGameListUpdated && !t || (this._isScheduleGameListUpdated = !0, this.unscheduleAllCallbacks(), this.requestJackpotSngGameList(), this.schedule(this.requestJackpotSngGameList.bind(this), this.requestListInterval))
        }
        fakeShowSignUp(t) {
            let e = t;
            null == e && (e = this.samples[0]), this.showSignUpPopUp(e, 0)
        }
        getBuyInPopup() {
            return this.signUpPopUp
        }
        async waitUntil(t, e = .1, i = 10) {
            return new Promise(((n, o) => {
                let a = 0;
                const s = () => {
                    t() ? (this.unschedule(s), n()) : a >= i && (this.unschedule(s), o(new Error("Timeout"))), a += e
                };
                this.schedule(s, e)
            }))
        }
        showSignUp(t, e = !1) {
            if (this.isFakeShowSignUp) return void this.fakeShowSignUp(t);
            this.updateLoading(tt.ShowBuyIn, !0), Promise.all([S.requestSngRoomLevelInfo(), this.waitUntil((() => {
                var t;
                const i = (null == (t = E.instance) ? void 0 : t.isHoldemDataReady) ?? !1;
                return !e || i
            }))]).then((([e, i]) => {
                if (!e.code) {
                    const i = () => {
                        const i = {
                                type: 1,
                                text: _("GLOBAL_SPINS.BUY_IN_POPUP.NEW_TAKE_IN"),
                                callback: () => {
                                    this.showSignUpPopUp(t, e.takeinCount)
                                }
                            },
                            n = {
                                type: 0,
                                text: _("GLOBAL_SPINS.BUY_IN_POPUP.BACK_TO_GAME"),
                                callback: () => {
                                    if (!B.getInstance().isAbleToJoinRoom()) return;
                                    R.setSelectedSngGameInfo(0), y.MessageCenter.send(I.BackToGame), this.unscheduleAllCallbacks(), this.updateLoading(tt.BackToGame, !0);
                                    const t = new T;
                                    t.setCallGameViewCallback((t => {
                                        t > 0 && this.updateLoading(tt.BackToGame, !1)
                                    })), t.callGameView(U.commonProto.MTT_GAME_MODE.NLH, P.GAME_LEVEL_LIST_ID.SNG, 0)
                                }
                            },
                            o = _("POPUP_HINTS.GAME_LIST.GAME_ALREADY_TAKE_IN"),
                            a = t => {
                                e.takeinCount > 0 ? y.popUp.showMsg({
                                    txt: t,
                                    isTwoBtn: !1,
                                    onXCancelCallback: !1,
                                    sureLabel: n.text,
                                    sureCallback: n.callback
                                }) : y.popUp.showMsg({
                                    txt: t,
                                    isTwoBtn: !1,
                                    onXCancelCallback: !1,
                                    sureLabel: y.config.getStringData("OKAY")
                                })
                            };
                        (T.checkValidOpeningGame(k.Sng, a) || y.appConfig.isWebApp) && (e.takeinCount < y.appConfig.getGameConfig().gameTablesConcurrent.sng ? y.popUp.showMsg({
                            txt: o,
                            isTwoBtn: !0,
                            onXCancelCallback: !1,
                            sureLabel: i.text,
                            sureCallback: i.callback,
                            cancelLabel: n.text,
                            cancelCallback: n.callback
                        }) : a(o))
                    };
                    let n = !1;
                    return !y.appConfig.isLandscapeLayout && E.instance && (n = E.instance.isHoldemRoomAvailableByTournamentMode(A.SNG)), void(e.takeinCount > 0 || n ? i() : this.showSignUpPopUp(t, e.takeinCount))
                }
            })).catch((t => {
                console.warn("requestSngRoomLevelInfo error/timeout", t), this.showNetworkErrorPopup()
            })).finally((() => {
                this.updateLoading(tt.ShowBuyIn, !1)
            })), this.updateLoading(tt.UpdateTool, !0), cc_mtt.vv.DataManager.updateToolList((() => {
                this.updateLoading(tt.UpdateTool, !1)
            }))
        }
        showNetworkErrorPopup() {
            const t = _("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR");
            y.popUp.showMsg({
                txt: t,
                msgType: y.Enum.ToastType.ToastTypeError
            })
        }
        showSignUpPopUp(t, e) {
            h(this.signUpPopUp, !0) || (this.signUpPopUp = null != this.signUpPopUpPrefab ? u(this.signUpPopUpPrefab).getComponent(m) : null, h(this.signUpPopUp, !0) && (this.signUpPopUp.node.parent = this.signUpPopUpParentNode, this.signUpPopUp.init(), this.signUpPopUp.setRequestBuyInCallBack((t => {
                this.showLoadingIndicator()
            })), this.signUpPopUp.setResponseBuyInCallBack((t => {
                this.hideLoadingIndicator(), t ? this.unscheduleAllCallbacks() : y.MessageCenter.send(I.BuyInError)
            }), this))), this.signUpPopUp.switchPage(f.SignUp), this.signUpPopUp.setData(t, e), this.signUpPopUp.show()
        }
        showLoadingIndicator() {
            h(this.loadingBlocker) && (this.loadingBlocker.active = !0)
        }
        hideLoadingIndicator() {
            h(this.loadingBlocker) && (this.loadingBlocker.active = !1)
        }
        onHowToPlayClicked() {
            this.howToPlayPopup.show()
        }
        createHowToPlay() {
            this.howToPlayPopup = u(this.howtoPlayPrefab).getComponent(w), null != this.howToPlayPopup && (this.howToPlayPopup.node.parent = this.signUpPopUpParentNode, this.howToPlayPopup.node.active = !1)
        }
        testSngList() {
            this._list = [];
            for (let t = 0; t < 2; t++) {
                const e = {
                    ...this.samples[Math.round(2 * Math.random())]
                };
                e.Detail = {
                    ...e.Detail
                }, e.Detail.Id = t, e.Detail.Created = Date.now(), e.Jackpot += 10 * Math.random(), this._list.push(e)
            }
            this.setList(this._list)
        }
        showSignUpNewGame() {
            var t;
            const e = y.dataHandler.getUserData(),
                i = null == (t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : t.SngTournaments;
            if (i)
                if (e.autoShowBuyInSNGValue >= 0) {
                    for (const t of i)
                        if (e.autoShowBuyInSNGValue === t.Detail.RegFee) return e.autoShowBuyInSNGValue = -1, void this.showSignUp(t, !0)
                } else if (e.sngPromoMttBuyInValue >= 0) {
                const t = this.getSNGBuyInFromMttBuyIn();
                let n = -1;
                for (const o of i) {
                    const i = o.Detail.RegFee;
                    if (t === i) return e.sngPromoMttBuyInValue = -1, void this.showSignUp(o, !0);
                    i < t && i > n && (n = i)
                }
                for (const t of i)
                    if (n == t.Detail.RegFee) return e.sngPromoMttBuyInValue = -1, void this.showSignUp(t, !0)
            }
        }
        isFullRoomsToJoin() {
            if (0 == C.getInstance().getAvailableRoomsToJoin()) {
                const t = y.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent;
                let e = y.StringTools.formatC(y.config.getStringData("Max_concurrent_game_tables"), t);
                return T.showMsgPopup(e), !0
            }
            return !1
        }
        getSNGBuyInFromMttBuyIn() {
            let t = -1,
                e = y.dataHandler.getUserData().sngPromoMttBuyInValue;
            return e >= 1050 ? t = 250 : e >= 400 ? t = 100 : e >= 215 ? t = 50 : e >= 55 ? t = 25 : e >= 22 ? t = 10 : e >= 7 ? t = 5 : e >= 0 && (t = 1), t
        }
        hideAllPopups() {
            h(this.signUpPopUp) && this.signUpPopUp.hide(!1), h(this.howToPlayPopup) && this.howToPlayPopup.hide(!1)
        }
        onEventShowBuyIn(t) {
            this.showSignUp(t)
        }
    }).prototype, "itemPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(z.prototype, "loadingMsgNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(z.prototype, "signUpPopUpPrefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(z.prototype, "signUpPopUpParentNode", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(z.prototype, "howtoPlayPrefab", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(z.prototype, "itemParent", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(z.prototype, "loadingBlocker", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = z)) || H));
    n._RF.pop()
}
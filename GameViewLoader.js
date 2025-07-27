import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./worldWebsocket.js";
import * as c from "./mttconfig.js";
import * as r from "./Pb.js";
import * as m from "./Translator.js";
import * as L from "./Holdem_View.js";
import * as _ from "./ImpokerHall.js";
import * as g from "./LoadingBlocker.js";
import * as u from "./MultipleGame.js";
import * as E from "./MultipleGame.js";
import * as d from "./MTTConnector.js";
import * as p from "./cv.js";
import * as T from "./Tools.js";
import * as M from "./MultipleRoomManager.js";
import * as h from "./MultipleRoomManager.js";
import * as I from "./MttHall.js";
import * as G from "./MttItemHelper.js";
import * as f from "./FakeMultipleGame.js";
import * as v from "./MultiTableBarSelector.js";
import * as C from "./Enum.js";
import * as S from "./mttController.js";
import * as A from "./CrashTracing.js";
import * as P from "./CrashTracing.js";
import * as w from "./SngEvent.js";
import * as D from "./httpApiTournamentList.js";

function main() {
    t._RF.push({}, "f4f77S1P61MqqTUZqSPWXC9", "GameViewLoader", void 0);
    class k {
        constructor() {
            this.pendingCallback = [], this._hallScript = void 0, this.lastCallTime = 0, this.callGameViewCallBack = void 0, this._isAppPause = void 0, this.onAppPause = () => {
                this && (this._isAppPause || (this._isAppPause = !0))
            }, this.onAppResume = () => {
                this && this._isAppPause && (this._isAppPause = !1)
            }, this.onGameLevelList = e => {
                this._requestingListId = null, e && !e.ErrorCode && (k.storeGameLevelList(e), this.onGameLevelListResponse(e))
            }, this._requestingListId = void 0, this._lastRequestTime = 0
        }
        get hallScript() {
            return this._hallScript || (this._hallScript = a.getScene().getComponentInChildren(_)), this._hallScript
        }
        bindMessageHandler() {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(r.commonProto.SocketMessageId.Game_Level_List, this.onGameLevelList), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(r.commonProto.SocketMessageId.Game_Level_List, this.onGameLevelList), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(l.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(l.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), n.off(i.EVENT_HIDE, this.onAppPause), n.off(i.EVENT_SHOW, this.onAppResume), n.on(i.EVENT_HIDE, this.onAppPause), n.on(i.EVENT_SHOW, this.onAppResume)
        }
        unbindMessageHandler() {
            l.hasInstance() && (cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(r.commonProto.SocketMessageId.Game_Level_List, this.onGameLevelList), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(l.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), n.off(i.EVENT_HIDE, this.onAppPause), n.off(i.EVENT_SHOW, this.onAppResume))
        }
        static storeGameLevelList(e) {
            switch (cc_mtt.vv.DataManager.GAME_LEVEL_LIST || (cc_mtt.vv.DataManager.GAME_LEVEL_LIST = new r.commonProto.Game_Level_List), e.ListId) {
                case 0:
                    cc_mtt.vv.DataManager.GAME_LEVEL_LIST = e;
                    break;
                case c.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    cc_mtt.vv.DataManager.GAME_LEVEL_LIST.PpRooms = e.PpRooms;
                    break;
                case c.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    cc_mtt.vv.DataManager.GAME_LEVEL_LIST.PpLevels = e.PpLevels;
                    break;
                case c.GAME_LEVEL_LIST_ID.PINEAPPLE_COWBOY:
                    break;
                case c.GAME_LEVEL_LIST_ID.SNG:
                    cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments = e.SngTournaments;
                    break;
                case c.GAME_LEVEL_LIST_ID.AOF:
                    cc_mtt.vv.DataManager.GAME_LEVEL_LIST.AofTournaments = e.AofTournaments;
                    break;
                case c.GAME_LEVEL_LIST_ID.MTT:
                    G.applyCurrencyToMttItem(e.MttTournaments), cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments = e.MttTournaments
            }
        }
        onGameLevelListResponse(e) {
            if (e) {
                let t = 0;
                for (; t < this.pendingCallback.length;) this.pendingCallback[t] && this.pendingCallback[t].ListId === e.ListId ? ("updateTableNum" != this.pendingCallback[t].uid && g.hide("getLevelList"), e.ErrorCode ? this.pendingCallback[t].ErrorCallback() : this.pendingCallback[t].Callback(), this.pendingCallback.splice(t, 1)) : t++
            }
            u.instance || g.hasInstance() && g.instance.showContainer()
        }
        showLoading(e) {
            p.appConfig.getGeneralConfig().multiWindowEnabled || (u.instance ? u.instance.showLoading(e) : g.show(e))
        }
        hideLoading(e) {
            u.instance ? u.instance.hideLoading(e) : g.hide(e)
        }
        getLevelList(e, t, a, n, i = !0) {
            if (this._isAppPause) return;
            "string" == typeof t || t.platForm || (t.platForm = d.instance.getPlatform());
            let o = Date.now();
            const s = "string" == typeof t,
                l = null != this._requestingListId,
                r = o - this._lastRequestTime >= 2e4,
                m = this._requestingListId + "",
                L = s ? m == t : this._requestingListId == t.ListId;
            let _ = !0;
            if (_ = !(l && !r) || !L, _) {
                let l = this.pendingCallback.findIndex((t => t.Uid == e));
                const r = l >= 0;
                switch ("updateTableNum" != e && i && (r && this.hideLoading("getLevelList"), this.showLoading("getLevelList")), t.ListId) {
                    case c.GAME_LEVEL_LIST_ID.MTT:
                        this.getMttTournamentInfoList(e, t, a, n, i);
                        break;
                    default:
                        r && this.pendingCallback.splice(l, 1), this.pendingCallback.push({
                            ListId: "string" == typeof t ? 0 : t.ListId,
                            Uid: e,
                            Callback: a,
                            ErrorCallback: n
                        }), cc_mtt.vv.DataManager.worldNetwork.requestLevelList(t, null, i)
                }
                this._requestingListId = s ? t : t.ListId, this._lastRequestTime = o
            } else cc_mtt.vv.ConsoleLog.log("getLevelList can't request", l, r, L)
        }
        getMttTournamentInfoList(e, t, a, n, i = !0) {
            D.requestMttTournamentList((t => {
                "updateTableNum" != e && i && this.hideLoading("getLevelList"), cc_mtt.vv.ConsoleLog.log("getLevelList", t), t.ErrorCode ? n && n() : (G.applyCurrencyToMttItem(t.TournamentInfos), cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments = t.TournamentInfos, p.MessageCenter.send(p.Enum.MessageCenterAction.MttListUpdated), a()), this._requestingListId = null
            }), (() => {
                "updateTableNum" != e && i && this.hideLoading("getLevelList"), n && n()
            }), {
                rows: t.rows
            })
        }
        onNetworkConnected(e, t) {
            this && (this._lastRequestTime = 0)
        }
        transferGameListIdToGameCategoryId(e) {
            switch (e) {
                case c.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    return r.commonProto.GAME_CATEGORY.GEN_PP;
                case c.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    return r.commonProto.GAME_CATEGORY.LOOP_PP;
                case c.GAME_LEVEL_LIST_ID.MTT:
                    return r.commonProto.GAME_CATEGORY.MTT;
                case c.GAME_LEVEL_LIST_ID.SNG:
                    return r.commonProto.GAME_CATEGORY.SNG;
                case c.GAME_LEVEL_LIST_ID.AOF:
                    return r.commonProto.GAME_CATEGORY.SNG_AOF
            }
        }
        setHoldemViewMttHallInfo(e, t) {
            if (e == c.GAME_LEVEL_LIST_ID.MTT) {
                let e = a.getScene().getComponentInChildren(L);
                e && e.setMttHallInfo(t)
            }
        }
        getMultipleGameInfoIndex(e) {
            var t;
            return (null == (t = M.instance) ? void 0 : t.getRoomIndex(e)) ?? -1
        }
        static showMsgPopup(e) {
            p.popUp.showMsg({
                txt: e,
                isTwoBtn: !1,
                sureLabel: p.config.getStringData("OKAY"),
                msgType: p.Enum.ToastType.ToastTypeDefault
            })
        }
        static checkValidOpeningGame(e, t = null, a = !0) {
            const n = p.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent;
            let i = !1,
                s = "";
            switch (M.instance.getExceedLimitType(e)) {
                case h.None:
                    i = !0;
                    break;
                case h.Total:
                    s = p.StringTools.formatC(p.config.getStringData("Max_concurrent_game_tables"), n);
                    break;
                case h.Sng:
                    const e = p.appConfig.getGameConfig().gameTablesConcurrent.sng;
                    s = o.formatStr(m("HALL.MTT_TABLE_LIMIT"), e);
                    break;
                case h.Mtt:
                    const t = p.appConfig.getGameConfig().gameTablesConcurrent.mtt;
                    s = o.formatStr(m("HALL.MTT_TABLE_LIMIT"), t)
            }
            return i || p.appConfig.isWebApp || !a || (null != t ? t(s) : k.showMsgPopup(s)), i
        }
        isShowErrorMsgPopupCheckingValidOpenningGame(e) {
            return !(M.instance.getExceedLimitType(e) == h.Total && !p.appConfig.isLandscapeLayout && !p.appConfig.isWebApp && p.config.getCurrentScene() == p.Enum.SCENE.GAME_SCENE)
        }
        _loadGameViewByGameInfo(e, t, a, n = 0, i = 0, o = !1, l = null) {
            var m;
            if (p.appConfig.getGeneralConfig().multiWindowEnabled && (k._isInitMultipleGameLandscapeProcessing && !s(u.instance))) return void(null == (m = I.instance) || m.scheduleOnce((() => {
                this._loadGameViewByGameInfo(e, t, a, n, i, o, l)
            }), 1));
            cc_mtt.vv.DataManager.joinedGameClicked = o, cc_mtt.vv.DataManager.gameMode = t, cc_mtt.vv.DataManager.currentGameInfo = a, cc_mtt.vv.DataManager.mttReviewTableId = n, cc_mtt.vv.DataManager.mttReviewPlayerId = i, cc_mtt.vv.DataManager.gameViewType = e;
            let L = this.getMultipleGameInfoIndex(a);
            if (u.instance) {
                if (cc_mtt.vv.ConsoleLog.log("Multiple Game _loadGameViewByGameInfo", a, L), p.appConfig.isLandscapeLayout) {
                    if (!p.appConfig.getGeneralConfig().multiWindowEnabled && -1 !== L)
                        for (let e = 0; e < u.instance._holdemRoom.length; e++)
                            if (u.instance._holdemRoom[e]) {
                                var _;
                                if ((null == (_ = u.instance._holdemRoom[e].store) ? void 0 : _.tournamentId) === a.Detail.Id) {
                                    L = e;
                                    break
                                }
                                L = -1
                            } else L = -1
                } else u.instance.onClickBackButton();
                if (p.appConfig.getGeneralConfig().multiWindowEnabled && (k._isInitMultipleGameLandscapeProcessing = !1), -1 == L) {
                    let n = t == c.GAME_LEVEL_LIST_ID.SNG ? h.Sng : h.Mtt,
                        i = this.isShowErrorMsgPopupCheckingValidOpenningGame(n);
                    k.checkValidOpeningGame(n, null, i) && (L = u.addMTTGame(e, t, a, !0))
                } else {
                    var g;
                    let e = null == (g = u.instance._room[L]) ? void 0 : g.currentScene;
                    if (e) {
                        let t = e.windowID; - 1 != t && p.focusWindow(t)
                    }
                }
                u.instance.selectedGameInfo = cc_mtt.vv.DataManager.currentGameInfo;
                let n = this.getMultipleGameInfoIndex(u.instance.selectedGameInfo);
                u.instance.selectedGameInfo && n != L || (u.instance.onChangedPage(L, !1), u.instance.startDelayTimeEnableTableBarBtn(), u.instance.selectedGameInfo = null)
            } else e === r.commonProto.MTT_GAME_MODE.PP ? cc_mtt.vv.AssetsManager.loadScene("pineappleGame") : p.appConfig.getGeneralConfig().multiWindowEnabled ? k.checkValidOpeningGame(t == c.GAME_LEVEL_LIST_ID.SNG ? h.Sng : h.Mtt) && (L = u.addMTTGame(e, t, a, !1), I.instance.getHallScene().initMultipleGame(E.HOLDEM, L, t), k._isInitMultipleGameLandscapeProcessing = !0) : cc_mtt.vv.AssetsManager.loadScene(c.SCENE_NAME.HOLDEM);
            l && l instanceof Function && l()
        }
        callGameView(e, t, a, n = 0, i = 0, o = !1, s = 0, l = null, r = !0, m = 0, L = C.None) {
            if (!p.appConfig.isLandscapeLayout && p.appConfig.getGameConfig().enableMultiTableBar && !p.appConfig.isWebApp && t == c.GAME_LEVEL_LIST_ID.MTT && L == C.None) {
                if (v.checkAndShow(!1)) return;
                if (null != S && S.selfTours) {
                    const e = M.instance.getRoomsCount(),
                        t = v.maxOpenRooms,
                        a = S.selfTours.getPlayingTournaments().length,
                        n = v.needToShow();
                    if (e >= t && a > t) {
                        let i = {
                            currentRoomsCount: e,
                            maxOpenRooms: t,
                            playingTours: a,
                            isMultiTablePopupSelectorShowed: n
                        };
                        A.getInstance().trace(P.MttIssues, w.CallGameViewInvalid, i)
                    }
                }
            }
            this.callGameViewProcess(e, t, a, n, i, o, s, l, m, r)
        }
        callGameViewProcess(e, t, a, n = 0, i = 0, o = !1, s = 0, l = null, m = 0, L = !0) {
            if (!(u.instance || p.appConfig.getGeneralConfig().multiWindowEnabled && T.isDesktopMultiWindowSupported())) {
                if (Date.now() - this.lastCallTime < 900) return;
                this.lastCallTime = Date.now()
            }
            if ("number" == typeof a) {
                const g = a => {
                    let n = null;
                    switch (t) {
                        case c.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                            n = new r.commonProto.PP_Level, n.RoomId = a;
                            break;
                        case c.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                            n = new r.commonProto.PP_Level, n.Level = a;
                            break;
                        case c.GAME_LEVEL_LIST_ID.MTT:
                            n = new r.commonProto.MttTournament, n.Detail = new r.modelProto.MttTournament, n.Detail.Id = a, n.Detail.GameMode = e, n.Detail.PlayOnJoint = s;
                            break;
                        case c.GAME_LEVEL_LIST_ID.SNG:
                        case c.GAME_LEVEL_LIST_ID.AOF:
                            n = new r.commonProto.SngTournament, n.Detail = new r.modelProto.SngTournament, n.Detail.Id = m, n.Detail.LevelTime = a, n.Detail.GameMode = e
                    }
                    return n
                };
                let E = {
                    CategoryId: this.transferGameListIdToGameCategoryId(t),
                    GameId: a
                };
                if (L) cc_mtt.vv.ConsoleLog.log("checkGameState before:", E, a), cc_mtt.vv.DataManager.worldNetwork.requestGameState(E, (s => {
                    if (cc_mtt.vv.ConsoleLog.log("checkGameState:", a, s.State, !!this.hallScript), s.State === r.commonProto.GAME_ROOM_STATE.END) {
                        var m;
                        u.instance ? l && l instanceof Function && l() : this.hallScript ? this.hallScript.hidLoading((() => {
                            t === c.GAME_LEVEL_LIST_ID.MTT && f.instance.removeMttRoom(a);
                            let e = t == c.GAME_LEVEL_LIST_ID.MTT ? "POPUP_HINTS.TOURNAMENT_END" : "POPUP_HINTS.GAME_END";
                            setTimeout((() => {
                                this.hallScript.callPopUpBox(e, (() => {
                                    (this.hallScript._sngPage && this.hallScript._sngPage.active || this.hallScript._pinePage && this.hallScript._pinePage.active || this.hallScript._mttPage && this.hallScript._mttPage.active) && this.hallScript.requestGameList(t)
                                }))
                            }), 300)
                        })) : cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "POPUP_HINTS.GAME_END", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: () => {
                                cc_mtt.vv.AssetsManager.loadScene("hall")
                            }
                        }]), null == (m = this.callGameViewCallBack) || m.call(this, r.commonProto.GAME_ROOM_STATE.END)
                    } else {
                        var L;
                        let s = g(a);
                        this._loadGameViewByGameInfo(e, t, s, n, i, o, l), null == (L = this.callGameViewCallBack) || L.call(this, 0)
                    }
                }));
                else {
                    var _;
                    let s = g(a);
                    this._loadGameViewByGameInfo(e, t, s, n, i, o, l), null == (_ = this.callGameViewCallBack) || _.call(this, 0)
                }
            } else {
                var g;
                cc_mtt.vv.ConsoleLog.log("load GameView without list request"), this._loadGameViewByGameInfo(e, t, a, n, i, o, l), null == (g = this.callGameViewCallBack) || g.call(this, 0)
            }
        }
        reset() {
            this.pendingCallback.splice(0, this.pendingCallback.length)
        }
        setCallGameViewCallback(e) {
            this.callGameViewCallBack = e
        }
    }
    e("GameViewLoader", k), k._isInitMultipleGameLandscapeProcessing = !1, t._RF.pop()
}
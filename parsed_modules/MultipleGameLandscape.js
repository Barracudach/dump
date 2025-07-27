import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./MultipleGame.js";
import * as l from "./MultipleGame.js";
import * as d from "./MTTConnector.js";
import * as m from "./Holdem_Room_ts.js";
import * as u from "./ConnectionTracing.js";
import * as c from "./cv.js";
import * as h from "./MultipleRoomManager.js";
import * as p from "./Pb.js";
import * as g from "./MultipleNewReplayerWindow.js";
import * as f from "./MultiWindowFocusManager.js";

function main() {
    var _;
    o._RF.push({}, "36b5buqWR5EuqrM4zcsJv3I", "MultipleGameLandscape", void 0);
    const {
        ccclass: C,
        property: G
    } = s;
    e("default", C(_ = class extends l {
        constructor(...e) {
            super(...e), this.gamesToLoad = [], this.isLoadingScene = !1, this._intervalCheckGames = null
        }
        adaptWidget(e) {
            d.instance.cv.resMgr.adaptWidget(e, !0, !1)
        }
        onLoad() {
            super.onLoad(), this.maxTabCount = c.appConfig.getGameConfig().gameTablesConcurrent.mtt, n.on(t.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this)
        }
        cashGameInit() {}
        setMenuNewIcon(e) {}
        updateMenuNewIcon() {}
        onbtnMenuClick(e) {}
        enablePageView(e) {}
        onBtnExitPoker() {}
        updateMenu() {}
        sureToSettlement() {}
        adaptiveExpand() {}
        onDestroy() {
            super.onDestroy(), n.off(t.EVENT_WINDOW_CLOSE, this.onWindowClose, this)
        }
        setIntervalCheckGames() {
            null == this._intervalCheckGames && (this._intervalCheckGames = setInterval((() => {
                this && a(this.node) ? this.checkGamesToLoad() : null != this._intervalCheckGames && clearInterval(this._intervalCheckGames)
            }), 500))
        }
        checkGamesToLoad() {
            if (this.gamesToLoad.length && !this.isLoadingScene) {
                let e = this,
                    o = e.gamesToLoad.shift();
                if (null == h.instance.listRoom[o]) return;
                e.isLoadingScene = !0, l.currentMultipleGameIndex = o;
                let n = h.instance.listRoom[o].data;
                cc_mtt.vv.DataManager.currentGameInfo = n, c.createWindow("holdemSceneLandscape", "", (function(t) {
                    e._room[o] = t.getComponentInChildren(m), e._holdemRoom[o] = e._room[o], n instanceof p.commonProto.SngTournament && (e._holdemRoom[o].store.currentGameInfoSng = n), e._room[o].currentDirector = i, e._room[o].store && e._room[o].startGame(), cc_mtt.vv.ConsoleLog.log("this._hasShowChildrenLoading", e._hasShowChildrenLoading), e._hasShowChildrenLoading || e._room[o].hideLoadingContainer();
                    let a = t.windowID;
                    c.focusWindow(a), e.isLoadingScene = !1
                }))
            }
        }
        actualLoadPrefab(e) {
            c.appConfig.getGeneralConfig().multiWindowEnabled ? null == this.gamesToLoad.find((o => o == e)) && this.gamesToLoad.push(e) : super.actualLoadPrefab(e)
        }
        setReplayNodeParent(e, o) {
            c.appConfig.getGeneralConfig().multiWindowEnabled ? (e.parent = this._holdemRoom[o].node.parent, c.resMgr.adaptWidget(e, !0, !1)) : super.setReplayNodeParent(e, o)
        }
        actualLoadReplayPrefab(e, o) {
            super.actualLoadReplayPrefab(e, o), this._replayRoomNodes[o] = this._replayRoomNode, this._replayRooms[o] = this._replayRoom
        }
        removeReplayRoom(e) {
            let o = this._replayRoomNodes[e];
            a(o) && o.destroy(), this._replayRoomNodes[e] = null;
            let n = this._replayRooms[e];
            n && n.destroy(), this._replayRooms[e] = null
        }
        onChangedPage(e) {
            c.appConfig.getGeneralConfig().multiWindowEnabled || super.onChangedPage(e)
        }
        onChangedPageEnd(e) {
            c.appConfig.getGeneralConfig().multiWindowEnabled || super.onChangedPageEnd(e)
        }
        initMTTGame(e, o) {
            c.appConfig.getGeneralConfig().multiWindowEnabled ? (this.initGameSocket(r.HOLDEM, o), this.actualLoadPrefab(e)) : super.initMTTGame(e, o), this.setIntervalCheckGames()
        }
        onWindowClose(e) {
            if (c.appConfig.getGeneralConfig().multiWindowEnabled) {
                for (let a = 0; a < this._room.length; a++) {
                    var o;
                    const i = this._room[a];
                    if (null == i) continue;
                    var n, t;
                    if (e == (null == (o = i.currentScene) ? void 0 : o.windowID))
                        if (null != i && i.isGlobalSpinGameMode()) null != i && null != (n = i.store) && n.isWaitingPlayerSngGame() || null != i && null != (t = i.store) && t.isGameEnd ? i.store.ExitSngRoomLevel() : this.exitGame(a);
                        else this.exitGame(a)
                }
                u.hasInstance() && u.getInstance().endSession("AllWindowClose")
            }
        }
        removeRoom(e) {
            if (c.appConfig.getGeneralConfig().multiWindowEnabled) {
                var o;
                if (null == this._room[e] || null == this._room[e].currentScene) return;
                let n = this._room[e].currentScene,
                    t = n.windowID;
                const i = this._room[e].store.tournamentId;
                this._room.splice(e, 1), this._holdemRoom.splice(e, 1), this.sendWindowRemovedMsg(t), c.closeWindow(t), a(n) && f.getInstance().endTurn(n), null == (o = g.instance) || o.removeWindowByRoomId(i)
            } else super.removeRoom(e)
        }
        hasMoreGameInRoom() {
            return h.instance.listRoom.length > 1
        }
        setPopUpParent() {}
        initHall() {}
        setHeader(e) {}
        initTabButton() {}
    }) || _);
    o._RF.pop()
}
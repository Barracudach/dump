import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as h from "./ResourcesLoader.js";
import * as u from "./MttHall.js";
import * as m from "./Holdem_Room_ts.js";
import * as f from "./NewReplayerSceneLandscape.js";
import * as g from "./GameMain.js";
import * as W from "./NewReplayerLandscape.js";

function main() {
    var R, y, _, C, b, N;
    t._RF.push({}, "c5ee1lNnbRA64r1hqWq0A19", "MultipleNewReplayerWindow", void 0);
    const {
        ccclass: L,
        property: I
    } = o;
    e("MultipleNewReplayerWindow", (R = L("MultipleNewReplayerWindow"), y = I(s), R(((N = class e extends r {
        constructor(...e) {
            super(...e), i(this, "browser_newReplayer_prefab", b, this), this.browser_newReplayerNode = null, this.sceneName = "NewReplayerLandscape", this.windowsList = new Map, this.isWindowCreatedProcess = !1
        }
        static get instance() {
            return e._instance
        }
        onLoad() {
            e._instance = this, a.on(d.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this), p.MessageCenter.register(p.Enum.MessageCenterAction.OnRoomWindowClosed, this.onGameMainWindowClosed.bind(this), this)
        }
        onDestroy() {
            a.off(d.EVENT_WINDOW_CLOSE, this.onWindowClose, this), p.MessageCenter.unregister(p.Enum.MessageCenterAction.OnRoomWindowClosed, this)
        }
        getLimitWindows() {
            return 100
        }
        getWindowScene(e) {
            return this.windowsList.has(e) ? this.windowsList.get(e) : null
        }
        clearWindowsList() {
            this.windowsList.clear()
        }
        getRoomId(e) {
            if (w(e)) {
                if (e instanceof m) return e.store.tournamentId;
                if (e instanceof g) return e.gameSceneInstance.room.firstId
            }
            return 0
        }
        isValidToCreateWindow(e) {
            const n = this.getRoomId(e);
            return n > 0 && !this.windowsList.has(n) && !this.isWindowCreatedProcess && this.windowsList.size < this.getLimitWindows()
        }
        isWindowOpened(e) {
            return this.windowsList.has(e)
        }
        isNewReplayerWindowScene(e) {
            if (w(e)) {
                return Array.from(this.windowsList.entries()).some((([n, i]) => i.getScene().uuid === e.uuid))
            }
            return !1
        }
        static initNewReplayerWindowByHoldem(n) {
            e.initNewReplayerWindowProcess(n)
        }
        static initNewReplayerWindowByGameMain(n) {
            e.initNewReplayerWindowProcess(n)
        }
        static initNewReplayerWindowProcess(n) {
            if (w(e._instance)) e._instance.show(n);
            else if (p.appConfig.getGeneralConfig().multiWindowEnabled) {
                const i = new c;
                i.addComponent(e), i.name = "multiple_hand_history_window", i.setParent(u.instance.getHallScene().node);
                i.getComponent(e).show(n)
            } else h.instance.loadRes(h.RES_PATH.PREFAB.HALL.MULTIPLE_NEW_REPLAYER, s, null, ((i, t) => {
                const s = l(t);
                n.node.getParent().addChild(s);
                s.getComponent(e).show(n)
            }))
        }
        show(e) {
            if (p.appConfig.getGeneralConfig().multiWindowEnabled) {
                const n = this.getRoomId(e);
                if (this.isValidToCreateWindow(e)) this.createWindow(e);
                else if (this.isWindowOpened(n)) {
                    const e = this.windowsList.get(n);
                    null == e || e.focusWindow()
                }
            } else this.showOnBrowser(e)
        }
        showOnBrowser(e) {
            w(this.browser_newReplayerNode) && (this.browser_newReplayerNode.destroy(), this.browser_newReplayerNode = null), !w(this.browser_newReplayerNode) && w(this.browser_newReplayer_prefab) && (this.browser_newReplayerNode = l(this.browser_newReplayer_prefab), e.node.getParent().addChild(this.browser_newReplayerNode)), w(this.browser_newReplayerNode) && (this.browser_newReplayerNode.active = !0, this.browser_newReplayerNode.setSiblingIndex(this.browser_newReplayerNode.parent.children.length - 1), this.bindData(e, this.browser_newReplayerNode))
        }
        bindData(e, n) {
            const i = n.getComponent(W);
            w(i) && (i.show(e), e instanceof g && (i.gameSceneInstance = e.gameSceneInstance, i.gameDataInstance = e.gameDataInstance), i.scene = p.tools.getRootCanvas(n))
        }
        createWindow(n) {
            this.isWindowCreatedProcess = !0, p.createWindow(this.sceneName, "", (function(i) {
                p.popUp.createGamePopup(i), e.instance.addWindowScene(i, n);
                let t = i.windowID;
                p.focusWindow(t)
            }), !1, !0)
        }
        addWindowScene(e, n) {
            this.isWindowCreatedProcess = !1;
            const i = this.getRoomId(n),
                t = e.getComponentInChildren(f);
            null == t || t.updateData(e, n), this.bindData(n, t.getWindowNode()), this.windowsList.set(i, t)
        }
        onWindowClose(e) {
            if (p.appConfig.getGeneralConfig().multiWindowEnabled)
                for (const [n, i] of this.windowsList.entries())
                    if (i.getScene().windowID === e) {
                        this.removeWindow(n, e);
                        break
                    }
        }
        removeWindowByRoomId(e) {
            if (this.windowsList.has(e)) {
                const n = this.windowsList.get(e).getScene().windowID;
                this.removeWindow(e, n)
            }
        }
        removeWindow(e, n) {
            this.windowsList.delete(e), p.MessageCenter.send(p.Enum.MessageCenterAction.WindowRemoved, n), p.closeWindow(n)
        }
        onGameMainWindowClosed(e = null) {
            p.appConfig.getGeneralConfig().multiWindowEnabled && w(e) && this.removeWindowByRoomId(e.firstId)
        }
    })._instance = null, b = n((C = N).prototype, "browser_newReplayer_prefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = C)) || _));
    t._RF.pop()
}
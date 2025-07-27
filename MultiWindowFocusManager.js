import * as t from "./cc.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as i from "./cv.js";

function main() {
    var d, c;
    u._RF.push({}, "a27506x4TFBtpVuzIEnO/La", "MultiWindowFocusManager", void 0);
    const {
        ccclass: a
    } = t;
    e("default", a(((c = class e extends n {
        constructor(...e) {
            super(...e), this._focusQueue = [], this._autoFocusedQueue = [], this._currentFocusedWindowIndex = 0
        }
        static attach(u) {
            u && (u.getComponent(e) || u.addComponent(e))
        }
        static getInstance() {
            return e.g_instance
        }
        onLoad() {
            if (e.g_instance = this, i.appConfig.getGeneralConfig().multiWindowEnabled) {
                const e = .2;
                this.schedule(this.updateFocusedWindowIndex, e), i.MessageCenter.register(i.Enum.MessageCenterAction.OnRoomWindowClosed, this.onGameMainWindowClosed.bind(this), this)
            }
        }
        onDestroy() {
            i.appConfig.getGeneralConfig().multiWindowEnabled && i.MessageCenter.unregister(i.Enum.MessageCenterAction.OnRoomWindowClosed, this)
        }
        onGameMainWindowClosed(e = null) {
            i.appConfig.getGeneralConfig().multiWindowEnabled && s(e) && s(e.gameScene) && this.endTurn(e.gameScene)
        }
        clearQueues() {
            this._focusQueue = [], this._autoFocusedQueue = [], this._currentFocusedWindowIndex = 0
        }
        startTurn(e) {
            let u = !1;
            for (let t = 0; t < this._focusQueue.length; t++) {
                if (this._focusQueue[t] === e) {
                    u = !0, this._autoFocusedQueue[t] = !1;
                    break
                }
            }
            u || (this._focusQueue.push(e), this._autoFocusedQueue.push(!1))
        }
        endTurn(e) {
            if (s(e))
                for (let u = 0; u < this._focusQueue.length; u++) {
                    const t = this._focusQueue[u];
                    if (t !== e) continue;
                    this._focusQueue.splice(u, 1), this._autoFocusedQueue.splice(u, 1), t.windowID == o.getFocusedWindowID() && this._autoFocusedQueue.length > 0 && (this._autoFocusedQueue[0] = !1);
                    break
                }
        }
        updateFocusedWindowIndex() {
            let e = o.getFocusedWindowID();
            this.updateFocusedGameNodeIndex(e)
        }
        updateFocusedGameNodeIndex(e) {
            this._currentFocusedWindowIndex != e && (this._currentFocusedWindowIndex = e, i.MessageCenter.send(i.Enum.MessageCenterAction.WindowFocusChanged, this._currentFocusedWindowIndex))
        }
        update(e) {
            if (i.appConfig.getGeneralConfig().multiWindowEnabled && this._focusQueue.length > 0) {
                var u, t;
                let e = this._focusQueue[0];
                if (null == e || e.windowID < 1) return this._focusQueue.splice(0, 1), void this._autoFocusedQueue.splice(0, 1);
                if (1 == this._autoFocusedQueue[0]) return;
                let n = o.getFocusedWindowID(),
                    s = null != (u = o.scenes) && u.has(n) ? null == (t = o.scenes) ? void 0 : t.get(n) : null;
                null != s && e === s || (i.focusWindow(e.windowID), this._autoFocusedQueue[0] = !0)
            }
        }
    }).g_instance = void 0, d = c)) || d);
    u._RF.pop()
}
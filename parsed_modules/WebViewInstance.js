import * as n from "./cc.js";
import * as i from "./cc.js";
import * as t from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";

function main() {
    n._RF.push({}, "a931fGsWfZP0rMZPWePLjCS", "WebViewInstance", void 0);
    e("WebViewInstance", class {
        constructor(e) {
            this.game_scene = null, this._gameId = 0, this.isLoadingScene = !1, this.allowCloseByCloseButton = !0, s.on(i.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this), this._gameId = e
        }
        get gameScene() {
            return o.appConfig.getGeneralConfig().multiWindowEnabled ? this.game_scene : t.getScene()
        }
        get gameId() {
            return this._gameId
        }
        set allowCloseByCloseBtn(e) {
            this.allowCloseByCloseButton = e
        }
        destroy() {
            s.off(i.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this)
        }
        openWindow() {
            if (!this.isLoadingScene)
                if (this.game_scene) this.checkAndOpenWindow(o.Enum.SCENE.WEBVIEW_SCENE);
                else {
                    this.isLoadingScene = !0;
                    let e = this;
                    o.config.preloadSceneResource(o.Enum.SCENE.WEBVIEW_SCENE, (() => {
                        e.checkAndOpenWindow(o.Enum.SCENE.WEBVIEW_SCENE)
                    }))
                }
        }
        closeWindow() {
            this.game_scene && !this.isLoadingScene && (o.appConfig.getGeneralConfig().multiWindowEnabled && this.game_scene && (o.MessageCenter.send(o.Enum.MessageCenterAction.OnWebViewWindowClosed, this), this.destroy(), o.closeWindow(this.game_scene.windowID), this.game_scene = null), this.isLoadingScene = !1)
        }
        checkAndFocusGameWindow() {
            this.game_scene && o.focusWindow(this.game_scene.windowID)
        }
        checkAndOpenWindow(e) {
            null != this.game_scene ? this.checkAndFocusGameWindow() : o.action.switchScene(e, null, null, this.setGameScene.bind(this), o.appConfig.getAppTitle())
        }
        setGameScene(e) {
            this.game_scene = e, this.isLoadingScene = !1
        }
        onWindowClose(e) {
            o.appConfig.getGeneralConfig().multiWindowEnabled && this.game_scene && this.game_scene.windowID === e && (this.allowCloseByCloseButton ? this.closeWindow() : o.MessageCenter.send(o.Enum.MessageCenterAction.onRequestLeaveWebview, this))
        }
    }), n._RF.pop()
}
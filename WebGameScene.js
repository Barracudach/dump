import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cv.js";
import * as S from "./GameSceneInstance.js";
import * as b from "./Base64Img.js";
import * as u from "./WebViewUIData.js";

function main() {
    var w, p, C, f, E, _, L, W, G, V, v, k, I;
    n._RF.push({}, "9bec7JRJytCnbKXW6YSPwf1", "WebGameScene", void 0);
    const {
        ccclass: T,
        property: H
    } = r;
    var M = function(e) {
        return e.GET_SCREENSHOT = "screenshot", e.TAKE_SCREENSHOT = "takescreenshot", e
    }(M || {});
    e("WebGameScene", (w = T("WebGameScene"), p = H(a), C = H(b), f = H(o), E = H(s), _ = S(), w((G = i((W = class extends c {
        constructor(...e) {
            super(...e), t(this, "webViewComponent", G, this), t(this, "baseImg", V, this), t(this, "miniGameLoadingScreenPrefab", v, this), t(this, "loadingHolder", k, this), this.SCHEME_WEB = "ccjs", this._miniGameLoadingScreen = null, this.gameId = void 0, this.isWebViewLoaded = !1, this.shouldShowWebview = !1, this.isTakingScreenShot = !1, this.urlToCall = void 0, t(this, "gameSceneInstance", I, this)
        }
        onLoad() {
            var e;
            this.setCurrentScene(), null == (e = this.webViewComponent) || e.node.on("loaded", this.onWebViewLoaded.bind(this)), m.appConfig.getGeneralConfig().multiWindowEnabled ? (this._miniGameLoadingScreen = l(this.miniGameLoadingScreenPrefab), this._miniGameLoadingScreen.setParent(this.loadingHolder), this._miniGameLoadingScreen.active = !0, m.SwitchLoadingView.hide()) : m.SwitchLoadingView.show(m.config.getStringData("SwitchLoadingView_des_1"), !1, !1, !1, !0)
        }
        onEnable() {
            this.setWebUrl(), this.webViewComponent.setJavascriptInterfaceScheme(this.SCHEME_WEB), this.webViewComponent.setOnJSCallback(((e, i) => {
                this.webGameCallback(i)
            })), m.MessageCenter.register("on_webCcjsCallback", this.webGameCallback.bind(this), this.node), m.MessageCenter.register("click_btn_exit_room", this.onWindowCloseCallback.bind(this), this.node)
        }
        onDisable() {
            m.MessageCenter.unregister("click_btn_exit_room", this.node), m.MessageCenter.unregister("on_webCcjsCallback", this.node)
        }
        webGameCallback(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : h("data send from webview should be string")
        }
        getEventFromWebView(e) {
            if ("string" == typeof e && e.indexOf(`${this.SCHEME_WEB}://${M.GET_SCREENSHOT}//`) >= 0) return this.updateScreenShot(e), !0;
            if (e.indexOf(`${this.SCHEME_WEB}://`) >= 0) {
                let i = e.replace(`${this.SCHEME_WEB}://`, ""),
                    t = i;
                const n = i.split("&");
                switch (n && n.length > 1 && (t = n[0], n.shift()), t) {
                    case "back":
                    case "back-normal":
                    case "back-abnormal":
                        this.exitGame()
                }
            }
        }
        exitGame() {
            m.roomManager.RequestLeaveRoom(this.gameId, m.roomManager.getMiniGameRoomIdTemplate(this.gameId), (() => {
                if (m.config.NEEDS_LANDSCAPE()) {
                    var e;
                    const i = {
                        title: "Attention",
                        txt: "ErrorToast2",
                        isTwoBtn: !1,
                        sureCallback: null,
                        sureLabel: "OK",
                        isPopupDarkActive: m.appConfig.isLandscapeLayout,
                        cashGameScene: null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene
                    };
                    m.popUp.showMsgI18n(i)
                }
            }))
        }
        updateScreenShot(e) {
            var i, t;
            console.log("############### updateScreenShot ###############");
            const n = this.webViewComponent.node.parent,
                a = e.replace(`${this.SCHEME_WEB}://${M.GET_SCREENSHOT}//`, "");
            let o = "";
            if (a.includes(".png")) {
                const e = /.*_([^_]+?)\.png$/;
                let i = a.match(e);
                if (i && i[1] && (o = i[1], o !== this.webViewComponent.node.uuid)) return
            }
            null == (i = this.baseImg) || i.cleanImage(), null == (t = this.baseImg) || t.setImage(a, {
                pixelsWidth: n.getContentSize().width,
                pixelsHeight: n.getContentSize().height
            }), this.isTakingScreenShot = !1
        }
        reset(e) {
            var i;
            this.unscheduleAllCallbacks(), null == (i = this.baseImg) || i.cleanImage(), this.setShowWebView(!1), m.appConfig.getGeneralConfig().multiWindowEnabled ? this._miniGameLoadingScreen.active = !0 : m.SwitchLoadingView.show(m.config.getStringData("SwitchLoadingView_des_1")), this.urlToCall = e, this.webViewComponent.url = e
        }
        setShowWebView(e, i = !1) {
            const t = this.webViewComponent.getComponent(g);
            t.isAbsoluteTop = !1, e ? (t.top = 0, m.appConfig.getGeneralConfig().multiWindowEnabled ? this._miniGameLoadingScreen.active = !1 : m.SwitchLoadingView.hide()) : d.isNative && m.appConfig.isLandscapeLayout && this.isWebViewLoaded && m.tools.isAbleTakeScreenShot() && i ? (this.takeScreenShot(), this.scheduleOnce((() => {
                t.top = 1, m.appConfig.getGeneralConfig().multiWindowEnabled && this.isTakingScreenShot ? this._miniGameLoadingScreen.active = !1 : m.appConfig.getGeneralConfig().multiWindowEnabled && !this.isTakingScreenShot ? this._miniGameLoadingScreen.active = !0 : m.SwitchLoadingView.show(m.config.getStringData("SwitchLoadingView_des_1"))
            }), .4)) : (t.top = 1, m.appConfig.getGeneralConfig().multiWindowEnabled ? this._miniGameLoadingScreen.active = !0 : m.SwitchLoadingView.show(m.config.getStringData("SwitchLoadingView_des_1")))
        }
        takeScreenShot() {
            console.log("isWebViewLoaded : " + this.isWebViewLoaded), console.log("############### takeScreenShot ###############");
            const e = `${this.SCHEME_WEB}://${M.TAKE_SCREENSHOT}_${this.webViewComponent.node.uuid}//0.5`;
            var i, t;
            d.isNative ? (null == (i = (t = this.webViewComponent).evaluateJS) || i.call(t, `\n                window.parent.postMessage ("${e}", "*");\n                document.location = "${e}";\n            `), this.isTakingScreenShot = !0) : (this.updateScreenShot(u.fakeImgBase64), this.isTakingScreenShot = !1)
        }
    }).prototype, "webViewComponent", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(W.prototype, "baseImg", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(W.prototype, "miniGameLoadingScreenPrefab", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = i(W.prototype, "loadingHolder", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = i(W.prototype, "gameSceneInstance", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = W)) || L));
    n._RF.pop()
}
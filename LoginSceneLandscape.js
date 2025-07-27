import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./cv.js";
import * as w from "./LoginScene.js";
import * as f from "./PlayerComplaints.js";
import * as V from "./RegistrationView.js";
import * as m from "./ForgotPasswordViewEmailLandscape.js";
import * as C from "./LoginViewLandscape.js";
import * as b from "./AnalyticsHandler.js";
import * as y from "./Enum.js";

function main() {
    var v, S, E, L, B, P, A, x, R, H, _, D, N, T;
    n._RF.push({}, "e2f6eafPb1PmrxYUrda6N0e", "LoginSceneLandscape", void 0);
    const {
        ccclass: M,
        property: F
    } = s;
    e("default", (v = F(o), S = F(o), E = F(r), L = F(r), B = F(r), P = F(r), M((R = i((x = class extends w {
        constructor(...e) {
            super(...e), t(this, "playerComplaintPrefab", R, this), t(this, "passwordRecoveryPrefab", H, this), t(this, "supportButton", _, this), t(this, "loginBannerHolder", D, this), t(this, "registerBannerHolder", N, this), t(this, "rgLoader", T, this), this.playerComplaintView = null
        }
        onLoad() {
            a.exitFullScreen().then((() => {
                l("Exit full screen successfully.")
            })).catch((e => {
                console.error("Exit full screen failed.", e)
            })), d.config.adaptScreen(this.node), this.initPasswordRecoveryView(), this.initComplaintView(), this.initRegistrationView(), d.config.setCurrentScene(d.Enum.SCENE.LOGIN_SCENE), d.pushNotice.setPushNoticeType(y.PUSH_ERROR), this.registerMsg(), this.schedule(this.updateRegisterCdTime, 1), this.schedule(this.updateForgetCdTime, 1), c.on(g.EVENT_HIDE, this.OnAppEnterBackground, this), c.on(g.EVENT_SHOW, this.OnAppEnterForeground, this), this.initVisitorLoginAccess(), d.resMgr.adaptWidget(this.node, !0, !1), f.onChangeState.on("state", this.onSupportPageShow, this), c.on(g.EVENT_WINDOW_CLOSE, this.onWindowClose.bind(this), this), this.showMXDesclaimerText()
        }
        onEnable() {
            this.loginBannerHolder.active = !0, this.registerBannerHolder.active = !0
        }
        start() {
            super.start(), this.scheduleOnce((() => {
                const e = d.dataHandler.getUserData().loadLoginDataFromFile(),
                    i = !(null != e && e.username);
                this.registerBannerActive(i), i && (this.loginView.active = !1, this.registerView.active = !0)
            }), 0)
        }
        onDestroy() {
            super.onDestroy(), f.onChangeState.off("state", this.onSupportPageShow, this), c.off("window_close", this.onWindowClose, this)
        }
        onWindowClose(e) {
            1 == e && d.showAppExitPopup()
        }
        initAreaCode() {}
        onBtnKefuClick() {
            if (d.AudioMgr.playButtonSound("button_click.mp3"), d.appConfig.getGeneralConfig().helpLine.useCustomWebPage) return void d.httpHandler.getCustom();
            if (this.playerComplaintView.active) return;
            let e = this.loginView;
            if (this.forgetView.active) e = this.forgetView;
            else if (this.registerView.active) e = this.registerView;
            else {
                let i = this.loginView.getComponentInChildren(C);
                i && i.bindDeviceView && i.bindDeviceView.active && (e = i.bindDeviceView)
            }
            this.playerComplaintView.getComponent(f).backToView = e, d.action.showActionBothLeft(this.playerComplaintView, e, d.action.delay_type.NORMAL)
        }
        onBtnForgetPsdClick() {
            d.AudioMgr.playButtonSound("button_click.mp3"), d.action.showActionBothLeft(this.forgetView, this.loginView, d.action.delay_type.NORMAL);
            b.getInstance().sendEvent(d.Enum.CurrentScreen.Login, d.Enum.segmentEvent.Clicked, d.Enum.Functionality.login, {
                intent: "link",
                label: "forgot password"
            })
        }
        initPasswordRecoveryView() {
            this.forgetView = h(this.passwordRecoveryPrefab), this.forgetView.active = !1, this.loginView.parent.addChild(this.forgetView), this.forgetView.setSiblingIndex(this.loginView.getSiblingIndex() + 1), this.forgetView.getComponent(p).updateAlignment()
        }
        initComplaintView() {
            d.appConfig.getGeneralConfig().helpLine.useCustomWebPage || (this.playerComplaintView = h(this.playerComplaintPrefab), this.playerComplaintView.active = !1, this.loginView.parent.addChild(this.playerComplaintView), this.playerComplaintView.setSiblingIndex(this.loginView.getSiblingIndex() + 1), this.playerComplaintView.getComponent(p).updateAlignment(), this.forgetView.getComponent(m).playerComplaintView = this.playerComplaintView)
        }
        initRegistrationView() {
            this.registerView = h(this.registerView_prefab), this.registerView.active = !1, this.loginView.parent.addChild(this.registerView), this.registerView.setSiblingIndex(this.loginView.getSiblingIndex() + 1), this.registerView.getComponent(p).updateAlignment(), this.registerView.getComponent(V).loginView = this.loginView, this.registerView.getComponent(V).initForm()
        }
        switchToRegisterScene(e = d.action.delay_type.NORMAL) {
            this.registerBannerActive(!0), d.action.showActionBothLeft(this.registerView, this.loginView, e)
        }
        registerBannerActive(e) {
            u(this.registerBannerHolder) && u(this.loginBannerHolder) && (this.loginBannerHolder.active = !e, this.registerBannerHolder.active = e)
        }
        registerRgActive(e) {
            u(this.rgLoader) && (this.rgLoader.active = e && d.appConfig.getGeneralConfig().responsibleGamingBtnEnabled)
        }
        onSupportPageShow(e) {
            this.supportButton.active = !e, e ? this.hideMXDesclaimerText() : this.showMXDesclaimerText()
        }
        hideMXDesclaimerText() {
            var e;
            null != (e = this.disclaimerText) && e.active && (this.disclaimerText.active = !1)
        }
    }).prototype, "playerComplaintPrefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = i(x.prototype, "passwordRecoveryPrefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = i(x.prototype, "supportButton", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = i(x.prototype, "loginBannerHolder", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(x.prototype, "registerBannerHolder", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(x.prototype, "rgLoader", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = x)) || A));
    n._RF.pop()
}
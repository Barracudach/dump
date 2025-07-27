import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as d from "./EditBoxValidator.js";
import * as p from "./Enum.js";
import * as L from "./Enum.js";
import * as h from "./Enum.js";
import * as m from "./Enum.js";
import * as f from "./DocumentAgreement.js";
import * as E from "./profile_player_complaint.js";
import * as b from "./FormView.js";
import * as C from "./WorldNetWork.js";
import * as S from "./BranchSDKHandler.js";
import * as y from "./AppsflyerSDKHandler.js";
import * as w from "./AnalyticsHandler.js";
import * as F from "./PhoneField.js";

function main() {
    var M, _, A, B, k, D, v, U, T, H, I, V, P, O, x, N, R, z, K, j, W, G, q, J, Y, Q;
    i._RF.push({}, "73e9fNWgoJGNaQrmtaMRH5c", "LoginView", void 0);
    const {
        ccclass: X,
        property: Z
    } = g;
    e("default", (M = Z(o), _ = Z(o), A = Z(d), B = Z(d), k = Z(s), D = Z(s), v = Z(r), U = Z(s), T = Z(r), H = Z(r), I = Z(F), V = Z(a), X((x = t((O = class e extends b {
        constructor(...e) {
            super(...e), this.VESION_TIME = "version: 2019-03-23", this.account = "", this.psd = "", this.docsAgree = null, n(this, "docsAgree_prefab", x, this), n(this, "playerComplaints_prefab", N, this), n(this, "usernameEditBox", R, this), n(this, "passwordEditBox", z, this), n(this, "autoLoginShow", K, this), n(this, "autoLoginHide", j, this), n(this, "autoLoginToggle", W, this), n(this, "loginModeTogglePanel", G, this), n(this, "phoneLoginToggle", q, this), n(this, "emailLoginToggle", J, this), n(this, "phoneInputField", Y, this), n(this, "loginButton", Q, this), this.currentLoginMode = void 0
        }
        onLoad() {
            super.onLoad(), this.customSubmitOnEnter = this.onBtnLoginClick.bind(this), this.autoLoginShow && (this.autoLoginShow.active = c.appConfig.getLoginConfig().autoLogin), this.autoLoginHide && (this.autoLoginHide.active = !c.appConfig.getLoginConfig().autoLogin), this.usernameEditBox.schemaKey = c.appConfig.getFormsConfig().loginUsername.key, this.phoneInputField.schemaKey = c.appConfig.getFormsConfig().loginUsername.key, this.populate(c.httpHandler.getDefaultLoginObj()), this.initLoginModeUI(), this.autoLogin(), c.dataHandler.getUserData().initAutoLoginState(), c.Number(c.tools.GetStringByCCFile("is_tourist_login")) ? w.getInstance().sendEvent(c.Enum.CurrentScreen.account, c.Enum.segmentEvent.ScreenOpened, c.Enum.Functionality.guestRegistration, {
                screenName: "guestRegistrationLogin"
            }) : w.getInstance().sendEvent(c.Enum.CurrentScreen.Login, c.Enum.segmentEvent.ScreenOpened, c.Enum.Functionality.login, {
                journey: "Login"
            })
        }
        onEnable() {
            super.onEnable(), this.registerMsg(), this.autoLoginToggle.isChecked = c.dataHandler.getUserData().getAutoLoginState(), this.onChangeCheckFormValid()
        }
        start() {}
        initLoginModeUI() {
            const e = c.appConfig.getLoginConfig().isPhoneAndEmailLoginModeEnable;
            this.loginModeTogglePanel.active = e;
            let t = h[c.dataHandler.getUserData().getLoginMode()] ?? c.appConfig.getLoginConfig().defaultUserLoginMode;
            var n;
            (this.changeLoginMode(e ? t : h.Email, !0), e || c.appConfig.getLoginConfig().defaultUserLoginMode === h.Phone) && (null == (n = this.phoneInputField) || n.addAreaCodeKeyByCountry(!0))
        }
        OnPhoneLoginModeToggleChecked() {
            this.changeLoginMode(h.Phone)
        }
        OnEmailLoginModeToggleChecked() {
            this.changeLoginMode(h.Email)
        }
        changeLoginMode(e, t = !1) {
            this.currentLoginMode = e;
            const n = e == h.Phone;
            this.usernameEditBox.node.active = !n, this.phoneInputField.node.active = n, t && (n ? this.phoneLoginToggle.isChecked = !0 : this.emailLoginToggle.isChecked = !0), this.fields[0] = n ? this.phoneInputField : this.usernameEditBox, this.onChangeCheckFormValid()
        }
        onDisable() {
            c.MessageCenter.unregister(p.OnLoginSuccess, this.node), c.MessageCenter.unregister(p.OnLoginSuccessActionsReq, this.node), c.MessageCenter.unregister("goToLoginAccount", this.node), c.MessageCenter.unregister(c.Enum.MessageCenterAction.onChangeCheckFormValid, this.node), l.off(u.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        registerMsg() {
            c.MessageCenter.register(p.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node), c.MessageCenter.register(p.OnLoginSuccessActionsReq, this.onLoginSuccess.bind(this), this.node), c.MessageCenter.register("goToLoginAccount", this.onBtnLoginClick.bind(this), this.node), c.MessageCenter.register(c.Enum.MessageCenterAction.onChangeCheckFormValid, this.onChangeCheckFormValid.bind(this), this.node), l.on(u.EVENT_SHOW, this.onAppEnterForeground, this), this.autoLoginToggle.node.on("toggle", this.saveAutoLoginState, this)
        }
        saveAutoLoginState(e) {
            c.dataHandler.getUserData().setAutoLoginState(e.isChecked)
        }
        autoLogin() {
            let e = c.dataHandler.getUserData().loadLoginDataFromFile();
            if (null != e && e.username) {
                const t = c.appConfig.getLoginConfig().isPhoneAndEmailLoginModeEnable;
                let n = e.loginMode;
                t || n !== h.Phone || (n = h.Email, e.username = ""), this.changeLoginMode(n, !0), n === h.Phone ? this.phoneInputField.setPhoneAndAreaValueFromString(e.username) : this.usernameEditBox.string = e.username, e.passwd && (this.passwordEditBox.string = e.passwd)
            }
        }
        onLoginSuccess(e) {
            null != e ? this.userLockedFlow(e) : (c.dataHandler.getUserData().saveLoginDataToFile(), c.SwitchLoadingView.show(c.config.getStringData("Loading"), !1, !1, !1, !1, !0), S.getInstance().BranchSDKLogin(c.dataHandler.getUserData().getUserIdS().toString()), y.getInstance().AppsflyerSDKLogin(c.dataHandler.getUserData().getUserIdS().toString()))
        }
        onBtnLoginClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.usernameEditBox.string = this.usernameEditBox.string.trim(), this.passwordEditBox.string = this.passwordEditBox.string.trim();
            c.Number(c.tools.GetStringByCCFile("is_tourist_login")) ? w.getInstance().sendEvent(c.Enum.CurrentScreen.account, c.Enum.segmentEvent.UserLoggedIn, c.Enum.Functionality.guestRegistration, {
                screenName: "guestRegistrationLogin"
            }) : w.getInstance().sendEvent(c.Enum.CurrentScreen.Login, c.Enum.segmentEvent.Clicked, c.Enum.Functionality.login, {
                item: "loginButton"
            }), this.doLogin()
        }
        doLogin() {
            !0 === this.validate() && c.security.TryLogin((() => {
                this._login()
            }), c.SwitchLoadingView.hide.bind(c.SwitchLoadingView))
        }
        _login() {
            null == this.objValues && (this.objValues = {}), c.tools.traverseObjRemove(this.objValues, "pin"), this.submitLoginForm()
        }
        submitLoginForm() {
            c.SwitchLoadingView.show(c.config.getStringData("Loading_resource"), !1, !1, !1, !1, !0);
            w.getInstance().sendEvent(c.Enum.CurrentScreen.Login, c.Enum.segmentEvent.LogInInitiated, c.Enum.Functionality.login, {
                intent: "cta",
                method: "login"
            });
            const e = () => {
                this.autoLoginToggle && (this.autoLoginToggle.isChecked ? c.dataHandler.getUserData().setLoginData(this.currentLoginMode, this.getUserNameData(), this.passwordEditBox.string) : c.dataHandler.getUserData().setLoginData(this.currentLoginMode, this.getUserNameData(), ""), C.getInstance().SetpasswordForAutologinOff(this.passwordEditBox.string)), this.submit(this.onUserNameLoginSuccess.bind(this), c.httpHandler.onLoginFail.bind(c.httpHandler))
            };
            c.dataHandler.getUserData().isTouristUser ? c.netWorkManager.Logout(!0, null, c.Enum.LogOutReason.TouristUpgrade, e) : e()
        }
        getUserNameData() {
            let e = this.usernameEditBox.string;
            return this.currentLoginMode === h.Phone && (e = this.phoneInputField.getPhoneAndAreaValueAsString()), e
        }
        onUserNameLoginSuccess(t, n) {
            c.SwitchLoadingView.hide(), e.checkLegalDocPostLogin(t)
        }
        static checkLegalDocPostLogin(e) {
            let t, n = c.httpHandler.getErrorMessage(e, !0),
                i = null,
                o = null;
            e.legal_documents_to_accept && Object.keys(e.legal_documents_to_accept).length > 0 && (i = {
                legal_documents_to_accept: e.legal_documents_to_accept
            }), t = e.payload ? e.payload : e, o = n || i, c.httpHandler.postLogin(t, o, "0")
        }
        onDocAgreeFinish() {
            c.MessageCenter.send(c.Enum.MessageCenterAction.OnLoginSuccess)
        }
        userLockedFlow(e) {
            if (e.legal_documents_to_accept) null == this.docsAgree && (this.docsAgree = c.action.addChildToScene(this, this.docsAgree_prefab, [], -1, !0).getComponent(f), this.docsAgree.eventMgr.register(m.OnBack, this.resetUserSession.bind(this, L.LegalDocsNotAccepted), this.node), this.docsAgree.eventMgr.register(m.OnFinish, this.onDocAgreeFinish.bind(this), this.node)), this.docsAgree.init(e.legal_documents_to_accept, !0);
            else {
                let t = c.config.getStringData("serverErrorCode" + e.code, !1, e.description || c.config.getStringData("ErrorUnknown"));
                if (10000020 == e.code) c.popUp.showMsg({
                    txt: t,
                    title: c.config.getStringData("AccountLocked_title"),
                    sureCallback: this.resetUserSession.bind(this, L.KYCDocsInProgress),
                    cancelCallback: this.resetUserSession.bind(this, L.KYCDocsInProgress),
                    msgType: c.Enum.ToastType.ToastTypeWarning
                });
                else {
                    let t = c.Number(c.tools.GetStringByCCFile("is_tourist_login"));
                    c.httpHandler.onLoginFail(e, 1 == t), this.resetUserSession("User Locked: " + JSON.stringify(e))
                }
            }
        }
        resetUserSession(e = L.Unknown) {
            c.netWorkManager.Logout(!1, null, e), this.passwordEditBox.reset()
        }
        onBtnRegisterClick() {
            c.AudioMgr.playButtonSound("button_click.mp3");
            let e = {
                item: "registerButton",
                intent: "cta",
                label: "register"
            };
            w.getInstance().sendEvent(c.Enum.CurrentScreen.Login, c.Enum.segmentEvent.Clicked, c.Enum.Functionality.registration, e), c.Number(c.tools.GetStringByCCFile("is_tourist_login")) ? w.getInstance().sendEvent(c.Enum.CurrentScreen.account, c.Enum.segmentEvent.UserRegistrationStarted, c.Enum.Functionality.guestRegistration, {
                screenName: "guestRegistrationLogin"
            }) : w.getInstance().sendEvent(c.Enum.CurrentScreen.Login, c.Enum.segmentEvent.UserRegistrationStarted, c.Enum.Functionality.registration, e), c.authenticator.showRegistrationPopup()
        }
        onBtnForgotPasswordClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), c.authenticator.showForgetPasswordPopup()
        }
        onBtnKefuClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), E.show(this.playerComplaints_prefab)
        }
        onAppEnterForeground() {
            this.objValues && c.tools.traverseObjSet(this.objValues, "location", c.native.GetLocation())
        }
        onChangeCheckFormValid() {
            const e = this.fields.every((e => e && (!e.node.activeInHierarchy || e.isFieldValid())));
            this.loginButton && (this.loginButton.interactable = e)
        }
    }).prototype, "docsAgree_prefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(O.prototype, "playerComplaints_prefab", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(O.prototype, "usernameEditBox", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(O.prototype, "passwordEditBox", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(O.prototype, "autoLoginShow", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(O.prototype, "autoLoginHide", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(O.prototype, "autoLoginToggle", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(O.prototype, "loginModeTogglePanel", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(O.prototype, "phoneLoginToggle", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(O.prototype, "emailLoginToggle", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(O.prototype, "phoneInputField", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(O.prototype, "loginButton", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = O)) || P));
    i._RF.pop()
}
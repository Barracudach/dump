import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as _ from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as T from "./cc.js";
import * as E from "./cv.js";
import * as y from "./AreaView.js";
import * as A from "./BindDevice.js";
import * as S from "./RGButton.js";
import * as v from "./ConnectionTracing.js";
import * as V from "./AnalyticsHandler.js";
import * as N from "./Enum.js";

function main() {
    var x, B, L, R, k, M, P, F, I, O, G, D, z, H, U, W, q, Y, j, K, X, J, Q, Z, $, ee, te, ie, ne, oe;
    n._RF.push({}, "2d377/MPf1MjbmkJ+m05/6y", "LoginScene", void 0);
    const {
        ccclass: se,
        property: re
    } = a;
    e("default", (x = re(o), B = re(s), L = re(s), R = re(s), k = re(o), M = re(s), P = re(o), F = re(o), I = re(o), O = re(o), G = re(r), D = re(r), z = re(S), H = re(s), se((q = t((W = class extends g {
        constructor(...e) {
            super(...e), i(this, "areaCode_prefab", q, this), i(this, "loginView", Y, this), i(this, "visitorLogin", j, this), i(this, "signupNode", K, this), i(this, "registerView_prefab", X, this), i(this, "forgetView", J, this), i(this, "setAccountAndPassword_prefab", Q, this), i(this, "alwaysNode_prefab", Z, this), i(this, "tourist_panel_prefab", $, this), i(this, "roleset_prefab", ee, this), i(this, "circle_gray", te, this), i(this, "circle_light", ie, this), i(this, "rgButton", ne, this), i(this, "disclaimerText", oe, this), this.areaCode = null, this.registerView = null, this.setAccountAndPassword = null, this.alwaysNode = null, this.roleset = null, this.flagView = "LOGIN_PANEL", this.registerCdTime = 0, this.forgetCdTime = 0, this.account = "", this.psd = "", this.isRequestCaptcha = !1
        }
        onLoad() {
            c.exitFullScreen().then((() => {
                l("Exit full screen successfully.")
            })).catch((e => {
                console.error("Exit full screen failed.", e)
            })), E.config.adaptScreen(this.node), E.config.setCurrentScene(E.Enum.SCENE.LOGIN_SCENE), E.pushNotice.setPushNoticeType(N.PUSH_ERROR), this.registerMsg(), this.schedule(this.updateRegisterCdTime, 1), this.schedule(this.updateForgetCdTime, 1), d.on(h.EVENT_HIDE, this.OnAppEnterBackground, this), d.on(h.EVENT_SHOW, this.OnAppEnterForeground, this), this.alwaysNode = u(this.alwaysNode_prefab), this.node.addChild(this.alwaysNode), this.alwaysNode.active = !1, E.resMgr.adaptWidget(this.alwaysNode), this.loginView.active = !0, this.forgetView.active = !1, this.alwaysNode.active = !1, this.setView(this.loginView.getSiblingIndex(), !1), E.config.isOverSeas() && this.updateAreaCode("US+1"), E.config.getCurrentLanguage() == E.Enum.LANGUAGE_TYPE.vi_VN && this.updateAreaCode("VN+84"), E.config.GET_CLIENT_TYPE() == E.Enum.ClientType.H5WebPage && (E.native.SYwebjsToClient('{"cmd":"1001"}'), E.native.SYwebjsToClient('{"cmd":"1002"}'), E.native.SYwebjsToClient('{"cmd":"1004"}')), this.initVisitorLoginAccess(), E.resMgr.adaptWidget(this.node, !0), v.hasInstance() && v.getInstance().onLoginSceneLoaded(), this.showMXDesclaimerText()
        }
        initVisitorLoginAccess() {
            this.visitorLogin && (this.visitorLogin.active = E.appConfig.getLoginConfig().isGuestLoginAllowed, 0 == this.visitorLogin.active && (this.signupNode.getComponent(p).width = this.signupNode.parent.getComponent(p).width))
        }
        start() {
            this.initAreaCode(), E.httpHandler.hasFaileCache() && E.httpHandler.doLoginFaile(E.httpHandler.getFaileCache()), E.appConfig.getGeneralConfig().preloadHallScene && this.scheduleOnce((() => {
                E.resMgr.preloadSceneWidthRes(E.Enum.SCENE.HALL_SCENE)
            }), .5)
        }
        initAreaCode() {
            this.areaCode = u(this.areaCode_prefab), this.node.addChild(this.areaCode), this.areaCode.active = !1, this.areaCode.getComponent(y).getAreaCallback = this.updateAreaCode.bind(this), this.areaCode.getComponent(y).exitAreaCallback = this.onBtnExitAreaCodeClick.bind(this)
        }
        setView(e, t) {
            this.forgetView.setSiblingIndex(e), this.forgetView.active = t, null == this.rgButton && (this.rgButton = this.node.getComponentInChildren(S)), this.rgButton && this.rgButton.node.setSiblingIndex(e)
        }
        showMXDesclaimerText() {
            this.disclaimerText && E.appConfig.isMX && (this.disclaimerText.getComponent(C).maxWidth = this.disclaimerText.parent.getContentSize().width, this.disclaimerText.active = !0)
        }
        onDestroy() {
            this.unschedule(this.updateForgetCdTime), this.unschedule(this.updateRegisterCdTime), E.MessageCenter.unregister("onGetRegisterVCodeSuccess", this.node), E.MessageCenter.unregister("onGetForgetVCodeSuccess", this.node), E.MessageCenter.unregister("set_account", this.node), E.MessageCenter.unregister("login_Lock", this.node), E.MessageCenter.unregister("exitRegister", this.node), E.MessageCenter.unregister("getIdcode", this.node), E.MessageCenter.unregister("exitSetAccountAndPassword", this.node), E.MessageCenter.unregister("exitRoleInfoSet", this.node), E.MessageCenter.unregister("AlwaysNode_Active", this.node)
        }
        registerMsg() {
            E.MessageCenter.register("onGetRegisterVCodeSuccess", this.onGetRegisterVCodeSuccess.bind(this), this.node), E.MessageCenter.register("onGetForgetVCodeSuccess", this.onGetForgetVCodeSuccess.bind(this), this.node), E.MessageCenter.register("set_account", this.switchLoginAndSetAccount.bind(this), this.node), E.MessageCenter.register("login_Lock", this.loginLock.bind(this), this.node), E.MessageCenter.register("register_to_user_account", this.onMiddleSuccess.bind(this), this.node), E.MessageCenter.register("exitRegister", this.onBtnExitRegisterClick.bind(this), this.node), E.MessageCenter.register("getIdcode", this.onBtnGetIdCodeClick.bind(this), this.node), E.MessageCenter.register("exitSetAccountAndPassword", this.onExitSetAccountClick.bind(this), this.node), E.MessageCenter.register("exitRoleInfoSet", this.onBtnBackFromRoleInfo.bind(this), this.node), E.MessageCenter.register("AlwaysNode_Active", this.AlwaysNode_Ative.bind(this), this.node)
        }
        AlwaysNode_Ative(e) {
            this.alwaysNode.active = e
        }
        onBtnForgetPsdClick() {
            E.AudioMgr.playButtonSound("button_click.mp3"), E.action.showActionBothLeft(this.forgetView, this.loginView, E.action.delay_type.NORMAL);
            V.getInstance().sendEvent(E.Enum.CurrentScreen.Login, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.login, {
                intent: "link",
                label: "forgot password"
            })
        }
        onBtnRegisterClick() {
            E.AudioMgr.playButtonSound("button_click.mp3");
            let e = {
                item: "registerButton",
                intent: "cta",
                label: "register"
            };
            V.getInstance().sendEvent(E.Enum.CurrentScreen.Login, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.registration, e), E.Number(E.tools.GetStringByCCFile("is_tourist_login")) ? V.getInstance().sendEvent(E.Enum.CurrentScreen.account, E.Enum.segmentEvent.UserRegistrationStarted, E.Enum.Functionality.guestRegistration, {
                screenName: "guestRegistrationLogin"
            }) : V.getInstance().sendEvent(E.Enum.CurrentScreen.Login, E.Enum.segmentEvent.UserRegistrationStarted, E.Enum.Functionality.registration, e), this.switchToRegisterScene()
        }
        switchToRegisterScene() {
            E.authenticator.logOutAndDoGuestLogin()
        }
        showUpdate_registerPanel() {
            this.registerView.active = !0, E.httpHandler.requestCaptcha(), this.updateCircle(1)
        }
        onBtnBackFromRoleInfo() {
            E.AudioMgr.playButtonSound("button_click.mp3"), E.action.showActionBothRight(this.setAccountAndPassword, this.roleset, E.action.delay_type.NORMAL), this.roleset.active = !0, this.updateCircle(2)
        }
        onBtnExitRegisterClick() {
            E.AudioMgr.playButtonSound("back_button.mp3"), this.registerView.active ? (E.action.showActionBothRight(this.loginView, this.registerView, E.action.delay_type.NORMAL), this.alwaysNode.active = !1) : this.roleset.active && E.action.showActionBothRight(this.loginView, this.roleset, E.action.delay_type.NORMAL)
        }
        onBtnAreaCodeClick(e, t) {
            this.flagView = t, this.areaCode.active = !0, this.loginView.active = !1, this.registerView.active = !1, this.forgetView.active = !1
        }
        onBtnExitAreaCodeClick() {
            if ("LOGIN_PANEL" === this.flagView) this.loginView.active = !0;
            else if ("REGISTER_PANEL" === this.flagView) {
                this.registerView.active = !0, this.updateCircle(1);
                let e = {
                    item: "countryInput"
                };
                V.getInstance().sendEvent(E.Enum.CurrentScreen.validation, E.Enum.segmentEvent.InputFieldValueEntered, E.Enum.Functionality.registration, e)
            } else if ("FORGET_PANEL" === this.flagView) this.forgetView.active = !0;
            else if ("BIND_DEVICE" === this.flagView) {
                let e = m.getScene().getComponentInChildren(w).node.getChildByName("BindDevice");
                e && (e.active = !0)
            }
        }
        onCheckRegisterIdCodeSuccess() {
            E.action.showActionBothLeft(this.setAccountAndPassword, this.registerView, E.action.delay_type.FAST), this.updateCircle(2)
        }
        updateAreaCode(e) {
            let t = f("phone_Panel/areaCode_text", this.forgetView);
            t && (t.getComponent(_).string = e);
            let i = f("phone_Panel/areaCode_text", this.registerView);
            if (i && (i.getComponent(_).string = e), e.length > 5 && (t && (t.getComponent(_).fontSize = 38), i && (i.getComponent(_).fontSize = 38)), "BIND_DEVICE" === this.flagView) {
                let t = m.getScene().getComponentInChildren(w).node.getChildByName("BindDevice");
                t && t.getComponent(A).updateAreaCode(e)
            }
            this.onBtnExitAreaCodeClick()
        }
        getAreaCodeData() {
            let e = f("phone_Panel/bg_white_0/areaCode_text", this.loginView).getComponent(_).string,
                t = e.indexOf("+");
            return e = e.substring(t + 1, e.length), e
        }
        onMiddleSuccess() {
            E.action.showActionBothLeft(this.roleset, this.setAccountAndPassword, E.action.delay_type.NORMAL), this.updateCircle(3)
        }
        onGetRegisterVCodeSuccess(e) {
            console.log("onGetRegisterVCodeSuccess"), "0" != e.msg_code && this.showCdTime(0, !0)
        }
        onGetForgetVCodeSuccess(e) {
            console.log("onGetForgetVCodeSuccess"), "0" != e.msg_code && this.showCdTime(0, !1)
        }
        loginLock(e) {
            E.popUp.showMsg({
                txt: e,
                msgType: E.Enum.ToastType.ToastTypeWarning,
                sureCallback: this.gotoForgetPass.bind(this),
                isTwoBtn: !0,
                sureLabel: E.config.getStringData("OKAY"),
                cancelLabel: E.config.getStringData("Cancel")
            })
        }
        gotoForgetPass() {
            this.onBtnForgetPsdClick()
        }
        updateRegisterCdTime() {
            this.registerCdTime < 1 || (this.registerCdTime--, this.showCdTime(this.registerCdTime, !0))
        }
        updateForgetCdTime() {
            this.forgetCdTime < 1 || (this.forgetCdTime--, this.showCdTime(this.forgetCdTime, !1))
        }
        onBtnGetIdCodeClick() {
            let e, t;
            if (this.registerView.active) {
                if (this.registerCdTime > 0) return;
                e = f("phone_Panel/phoneNumber_text", this.registerView).getComponent(b).string, t = f("phone_Panel/areaCode_text", this.registerView).getComponent(_).string
            } else {
                if (!this.forgetView.active) return;
                if (this.forgetCdTime > 0) return;
                e = f("phone_Panel/phoneNumber_text", this.forgetView).getComponent(b).string, t = f("phone_Panel/areaCode_text", this.forgetView).getComponent(_).string
            }
            let i = t.indexOf("+");
            t = t.substring(i, t.length);
            let n = E.config.getStringData("RegisterTips1").replace("%s", t + " " + e);
            if (!this.showError({
                    phoneNum: e,
                    AreaCode: t
                }))
                if (this.registerView.active) E.TP.showMsg(n, !0, this.registerIdCode.bind(this), null);
                else {
                    e = f("phone_Panel/phoneNumber_text", this.forgetView).getComponent(b).string;
                    let i = E.config.getStringData("WEB_API_FORGET_GET_VCODE", !0);
                    E.httpHandler.requestVCode(e, t.substring(1, t.length), i), this.showCdTime(60, !1)
                }
        }
        registerIdCode() {
            let e, t, i = f("phone_Panel/areaCode_text", this.registerView).getComponent(_).string,
                n = i.indexOf("+");
            if (i = i.substring(n + 1, i.length), this.registerView.active) {
                e = f("phone_Panel/phoneNumber_text", this.registerView).getComponent(b).string;
                let t = f("tiaoCode/captcha_bg/captcha_text", this.registerView).getComponent(b).string;
                E.dataHandler.getUserData().isOpenUpdateUserMode ? E.httpHandler.requestUpdateGradeVCode(e, i, t) : E.httpHandler.requestRegisterVCode(e, i, t), this.showCdTime(60, !0)
            } else this.forgetView.active && (e = f("phone_Panel/phoneNumber_text", this.forgetView).getComponent(b).string, t = E.config.getStringData("WEB_API_FORGET_GET_VCODE", !0), E.httpHandler.requestVCode(e, i, t), this.showCdTime(60, !1));
            V.getInstance().sendEvent(E.Enum.CurrentScreen.sendCodePopup, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.registration, {
                item: "confirmButton"
            })
        }
        showCdTime(e, t) {
            if (t) {
                this.registerCdTime = e;
                let t = f("setPassword_Panel/identify_button/Label", this.registerView).getComponent(_),
                    i = 0 != e;
                t.string = i ? this.registerCdTime + "s" : E.config.getStringData("getCode")
            } else {
                this.forgetCdTime = e;
                let t = f("password_Panel/identify_button/Label", this.forgetView).getComponent(_),
                    i = 0 != e;
                t.string = i ? this.forgetCdTime + "s" : E.config.getStringData("getCode")
            }
        }
        showError(e) {
            let t = null,
                i = null,
                n = function(e) {
                    return null != e
                };
            if (n(e.KVCode) && 6 != e.KVCode.length && (t = "ErrorToast39", i = "ToastTypeError"), n(e.phoneNum) && (e.phoneNum.length <= 0 ? (t = "ErrorToast38", i = "ToastTypeError") : n(e.AreaCode) && "86" === e.AreaCode && 11 != e.phoneNum.length && (t = "ErrorToast28", i = "ToastTypeError")), n(e.kAccount0)) {
                let n = E.StringTools.getStrLen(e.kAccount0);
                e.kAccount0.length <= 0 ? (t = "ErrorCode8", i = "ToastTypeError") : (n < 8 || n > 32) && (t = "ErrorToast41", i = "ToastTypeError")
            }
            if (n(e.kAccount0) && n(e.kAccount1) && e.kAccount0 != e.kAccount1 && (t = "ErrorToast40", i = "ToastTypeError"), n(e.password0)) {
                let n = E.StringTools.getStrLen(e.password0);
                e.password0.length <= 0 ? (t = "ErrorCode9", i = "ToastTypeError") : n < 6 || n > 14 ? (t = "ErrorCode7", i = "ToastTypeError") : -1 != e.password0.indexOf(" ") && (t = "recetPassWord_recetPassWord_panel_des_text", i = "ToastTypeError")
            }
            if (n(e.password0) && n(e.password1) && e.password0 != e.password1 && (t = "ErrorToast17", i = "ToastTypeError"), n(e.nickname)) {
                let n = E.StringTools.getStrLen(e.nickname);
                e.nickname.length <= 0 ? (t = "ErrorToast3", i = "ToastTypeError") : E.StringTools.isClubNameFormat(e.nickname) ? E.StringTools.isSensitiveWords(e.nickname) ? (t = "tips_no_sensitive_words", i = "ToastTypeWarning") : (n < 4 || n > 12) && (t = "EditBoxNickName1", i = "ToastTypeWarning") : (t = "tips_no_special_words", i = "ToastTypeWarning")
            }
            return null != t && (E.TT.showMsg(E.config.getStringData(t), i), !0)
        }
        switchLoginAndSetAccount(e) {
            (e = !1 !== e) ? E.action.showActionBothLeft(this.setAccountAndPassword, this.loginView, E.action.delay_type.NORMAL): E.action.showActionBothRight(this.loginView, this.setAccountAndPassword, E.action.delay_type.NORMAL)
        }
        onFinishRegisterSuccess() {
            E.action.showActionBothLeft(this.setAccountAndPassword, this.roleset, E.action.delay_type.NORMAL)
        }
        saveAccountAndPsd(e, t) {
            this.account = e, this.psd = t
        }
        saveAccountToFile() {
            null != this.account && E.tools.SaveStringByCCFile("user_account", this.account), E.tools.SaveStringByCCFile("user_password", this.psd)
        }
        onExitSetAccountClick() {
            E.AudioMgr.playButtonSound("back_button.mp3"), E.action.showActionBothRight(this.registerView, this.setAccountAndPassword, E.action.delay_type.NORMAL), this.updateCircle(1)
        }
        onExitOldUserSetAccountClick() {
            E.AudioMgr.playButtonSound("back_button.mp3"), E.action.showActionBothRight(this.loginView, this.setAccountAndPassword, E.action.delay_type.NORMAL)
        }
        getinvateCode() {
            return f("invate_code_panel/invateCode_text", this.registerView).getComponent(b).string
        }
        updateCircle(e) {
            this.alwaysNode.active = !0;
            for (let t = 1; t < 4; t++) t == e ? (f("circle_panel/circle_" + t, this.alwaysNode).getComponent(T).spriteFrame = this.circle_light, f("circle_panel/circle_" + t, this.alwaysNode).getComponent(T).sizeMode = T.SizeMode.RAW) : (f("circle_panel/circle_" + t, this.alwaysNode).getComponent(T).spriteFrame = this.circle_gray, f("circle_panel/circle_" + t, this.alwaysNode).getComponent(T).sizeMode = T.SizeMode.RAW);
            1 == e ? (f("back_button", this.alwaysNode).active = !0, f("next_button", this.alwaysNode).active = !0, E.dataHandler.getUserData().isOpenUpdateUserMode ? f("back_button/previous_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("BackBtnTitle") : f("back_button/previous_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("LoginBtnText"), f("next_button/next_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("NextBtnText")) : 2 == e ? (f("back_button", this.alwaysNode).active = !0, f("next_button", this.alwaysNode).active = !0, f("back_button/previous_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("LastStep"), f("next_button/next_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("NextBtnText")) : 3 == e && (f("back_button", this.alwaysNode).active = !0, f("next_button", this.alwaysNode).active = !1, f("back_button/previous_text", this.alwaysNode).getComponent(_).string = E.config.getStringData("LastStep"))
        }
        onBtnTourist() {
            E.AudioMgr.playButtonSound("button_click.mp3");
            V.getInstance().sendEvent(E.Enum.CurrentScreen.Login, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.login, {
                item: "loginAsVisitorButton",
                intent: "cta",
                label: "login as guest"
            }), this.onBtnTouristContinue()
        }
        onBtnTouristContinue() {
            V.getInstance().sendEvent(E.Enum.CurrentScreen.tipsForGuestLogin, E.Enum.segmentEvent.ContinueAsGuestUser, E.Enum.Functionality.registration, {
                intent: "cta",
                label: "continue"
            }), E.httpHandler.requestTouristLogin()
        }
        onBtnTouristRegister() {
            V.getInstance().sendEvent(E.Enum.CurrentScreen.tipsForGuestLogin, E.Enum.segmentEvent.UserRegistrationStarted, E.Enum.Functionality.registration, {
                item: "visitorPopupRegisterButton",
                intent: "cta",
                label: "start registration"
            }), this.switchToRegisterScene()
        }
        OnAppEnterForeground() {
            let e = E.config.logTime("loginScene OnAppEnterForeground  切回前台");
            e = Math.ceil(e), this.registerCdTime = e < this.registerCdTime ? this.registerCdTime - e : 0, 0 != this.registerCdTime && this.updateRegisterCdTime(), this.forgetCdTime = e < this.forgetCdTime ? this.forgetCdTime - e : 0, 0 != this.forgetCdTime && this.updateForgetCdTime()
        }
        OnAppEnterBackground() {
            E.config.logTime("loginScene OnAppEnterForeground  切入前台")
        }
    }).prototype, "areaCode_prefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(W.prototype, "loginView", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(W.prototype, "visitorLogin", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(W.prototype, "signupNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(W.prototype, "registerView_prefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(W.prototype, "forgetView", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(W.prototype, "setAccountAndPassword_prefab", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(W.prototype, "alwaysNode_prefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(W.prototype, "tourist_panel_prefab", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(W.prototype, "roleset_prefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(W.prototype, "circle_gray", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(W.prototype, "circle_light", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(W.prototype, "rgButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(W.prototype, "disclaimerText", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = W)) || U));
    n._RF.pop()
}
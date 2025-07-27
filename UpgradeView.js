import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as A from "./cv.js";
import * as f from "./AreaView.js";
import * as b from "./BindDevice.js";
import * as m from "./RegisterView.js";

function main() {
    var T, y, S, E, N, v, V, x, k, M, B, P, R, F, L, I, D;
    s._RF.push({}, "02313ZXio5LVIVuZpGJLTXl", "UpgradeView", void 0);
    const {
        ccclass: G,
        property: O
    } = r;
    e("default", (T = O(o), y = O(o), S = O(o), E = O(o), N = O(o), v = O(n), V = O(n), G(((D = class e extends a {
        constructor(...e) {
            super(...e), i(this, "areaCode_prefab", M, this), i(this, "registerView_prefab", B, this), i(this, "setAccountAndPassword_prefab", P, this), i(this, "alwaysNode_prefab", R, this), i(this, "roleset_prefab", F, this), i(this, "circle_gray", L, this), i(this, "circle_light", I, this), this.areaCode = null, this.registerView = null, this.setAccountAndPassword = null, this.alwaysNode = null, this.roleset = null, this.flagView = "LOGIN_PANEL", this.registerCdTime = 0, this.forgetCdTime = 0, this.account = "", this.psd = "", this.isRequestCaptcha = !1, this._circleIndex = 1
        }
        static getSinglePrefabInst(t, i) {
            let s = i;
            return s || (s = d.getScene().getComponentInChildren(c).node), e._g_prefabInst || (e._g_prefabInst = g(t)), s.getChildByUuid(e._g_prefabInst.uuid) || l(e._g_prefabInst, !0) || (e._g_prefabInst = g(t)), e._g_prefabInst
        }
        onLoad() {
            this.registerMsg(), this.schedule(this.updateRegisterCdTime, 1), this.schedule(this.updateForgetCdTime, 1), h.on(u.EVENT_HIDE, this.OnAppEnterBackground, this), h.on(u.EVENT_SHOW, this.OnAppEnterForeground, this), this.registerView = g(this.registerView_prefab), this.node.addChild(this.registerView), this.registerView.active = !1, this.setAccountAndPassword = g(this.setAccountAndPassword_prefab), this.node.addChild(this.setAccountAndPassword), this.setAccountAndPassword.active = !1, this.roleset = g(this.roleset_prefab), this.node.addChild(this.roleset), this.roleset.active = !1, this.alwaysNode = g(this.alwaysNode_prefab), this.node.addChild(this.alwaysNode), this.alwaysNode.active = !1, A.resMgr.adaptWidget(this.alwaysNode), this.setAccountAndPassword.active = !1, this.alwaysNode.active = !1, this.roleset.active = !1, this.setView(A.Enum.ZORDER_TYPE.ZORDER_1, !1), A.config.isOverSeas() && this.updateAreaCode("US+1"), A.config.getCurrentLanguage() == A.Enum.LANGUAGE_TYPE.vi_VN && this.updateAreaCode("VN+84"), A.config.GET_CLIENT_TYPE() == A.Enum.ClientType.H5WebPage && (A.native.SYwebjsToClient('{"cmd":"1001"}'), A.native.SYwebjsToClient('{"cmd":"1002"}'), A.native.SYwebjsToClient('{"cmd":"1004"}')), A.dataHandler.getUserData().isOpenUpdateUserMode && this.showUpdate_registerPanel(), A.resMgr.adaptWidget(this.node, !0)
        }
        start() {
            this.initAreaCode(), A.httpHandler.hasFaileCache() && A.httpHandler.doLoginFaile(A.httpHandler.getFaileCache())
        }
        initAreaCode() {
            this.areaCode = g(this.areaCode_prefab), this.node.addChild(this.areaCode), this.areaCode.active = !1, this.areaCode.getComponent(f).getAreaCallback = this.updateAreaCode.bind(this), this.areaCode.getComponent(f).exitAreaCallback = this.onBtnExitAreaCodeClick.bind(this)
        }
        setView(e, t) {
            this.registerView.setSiblingIndex(e), this.setAccountAndPassword.setSiblingIndex(e), this.registerView.active = t, this.setAccountAndPassword.active = t
        }
        onDestroy() {
            this.unschedule(this.updateForgetCdTime), this.unschedule(this.updateRegisterCdTime), A.MessageCenter.unregister("onGetRegisterVCodeSuccess", this.node), A.MessageCenter.unregister("onGetForgetVCodeSuccess", this.node), A.MessageCenter.unregister("login_Lock", this.node), A.MessageCenter.unregister("toRelogin", this.node), A.MessageCenter.unregister("exitRegister", this.node), A.MessageCenter.unregister("getIdcode", this.node), A.MessageCenter.unregister("exitSetAccountAndPassword", this.node), A.MessageCenter.unregister("exitRoleInfoSet", this.node), A.MessageCenter.unregister("AlwaysNode_Active", this.node), A.MessageCenter.unregister(A.config.CHANGE_LANGUAGE, this.node)
        }
        registerMsg() {
            A.MessageCenter.register("onGetRegisterVCodeSuccess", this.onGetRegisterVCodeSuccess.bind(this), this.node), A.MessageCenter.register("onGetForgetVCodeSuccess", this.onGetForgetVCodeSuccess.bind(this), this.node), A.MessageCenter.register("login_Lock", this.loginLock.bind(this), this.node), A.MessageCenter.register("register_to_user_account", this.onMiddleSuccess.bind(this), this.node), A.MessageCenter.register("toRelogin", this.toRelogin.bind(this), this.node), A.MessageCenter.register("exitRegister", this.onBtnExitRegisterClick.bind(this), this.node), A.MessageCenter.register("getIdcode", this.onBtnGetIdCodeClick.bind(this), this.node), A.MessageCenter.register("exitSetAccountAndPassword", this.onExitSetAccountClick.bind(this), this.node), A.MessageCenter.register("exitRoleInfoSet", this.onBtnBackFromRoleInfo.bind(this), this.node), A.MessageCenter.register("AlwaysNode_Active", this.AlwaysNode_Ative.bind(this), this.node), A.MessageCenter.register(A.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        AlwaysNode_Ative(e) {
            this.alwaysNode.active = e
        }
        initLanguage() {
            this.updateCircle(this._circleIndex)
        }
        toRelogin() {
            this.onlySaveAccountToFile(), A.netWorkManager.Logout()
        }
        onBtnForgetPsdClick() {
            A.AudioMgr.playButtonSound("button_click.mp3")
        }
        onBtnExitForgetPsdClick() {
            A.AudioMgr.playButtonSound("back_button.mp3")
        }
        onBtnRegisterClick() {
            this.registerView.active = !0, this.registerView.getComponent(m).initText(), A.AudioMgr.playButtonSound("button_click.mp3"), A.httpHandler.requestCaptcha(), this.updateCircle(1)
        }
        showUpdate_registerPanel() {
            this.registerView.active = !0, A.httpHandler.requestCaptcha(), this.updateCircle(1)
        }
        onBtnBackFromRoleInfo() {
            A.AudioMgr.playButtonSound("button_click.mp3"), A.action.showActionBothRight(this.setAccountAndPassword, this.roleset, A.action.delay_type.NORMAL), this.roleset.active = !0, this.updateCircle(2)
        }
        onBtnExitRegisterClick() {
            A.dataHandler.getUserData().isOpenUpdateUserMode = !1, A.AudioMgr.playButtonSound("back_button.mp3"), this.node.active = !1, A.MessageCenter.send("HideWebview_ShowWindows", !0), A.MessageCenter.send("hideTips_ForMTT"), A.dataHandler.cancleUpgradeAccount()
        }
        onBtnAreaCodeClick(e, t) {
            this.flagView = t, this.areaCode.active = !0, this.registerView.active = !1
        }
        onBtnExitAreaCodeClick() {
            if ("LOGIN_PANEL" === this.flagView);
            else if ("REGISTER_PANEL" === this.flagView) this.registerView.active = !0, this.updateCircle(1);
            else if ("FORGET_PANEL" === this.flagView);
            else if ("BIND_DEVICE" === this.flagView) {
                let e = d.getScene().getComponentInChildren(c).node.getChildByName("BindDevice");
                e && (e.active = !0)
            }
        }
        onCheckRegisterIdCodeSuccess() {
            A.action.showActionBothLeft(this.setAccountAndPassword, this.registerView, A.action.delay_type.FAST), this.updateCircle(2)
        }
        updateAreaCode(e) {
            if (p("phone_Panel/areaCode_text", this.registerView).getComponent(C).string = e, e.length > 5 && (p("phone_Panel/areaCode_text", this.registerView).getComponent(C).fontSize = 38), "BIND_DEVICE" === this.flagView) {
                let t = d.getScene().getComponentInChildren(c).node.getChildByName("BindDevice");
                t && t.getComponent(b).updateAreaCode(e)
            }
            this.onBtnExitAreaCodeClick()
        }
        getAreaCodeData() {}
        onMiddleSuccess() {
            A.action.showActionBothLeft(this.roleset, this.setAccountAndPassword, A.action.delay_type.NORMAL), this.updateCircle(3)
        }
        onGetRegisterVCodeSuccess(e) {
            console.log("onGetRegisterVCodeSuccess"), "0" != e.msg_code && this.showCdTime(0, !0)
        }
        onGetForgetVCodeSuccess(e) {
            console.log("onGetForgetVCodeSuccess"), "0" != e.msg_code && this.showCdTime(0, !1)
        }
        loginLock(e) {
            console.log("loginLock"), A.TP.showMsg(e, !1, this.gotoForgetPass.bind(this))
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
            if (!this.registerView.active) return;
            if (this.registerCdTime > 0) return;
            e = p("phone_Panel/phoneNumber_text", this.registerView).getComponent(_).string, t = p("phone_Panel/areaCode_text", this.registerView).getComponent(C).string;
            let i = t.indexOf("+");
            t = t.substring(i, t.length);
            let s = A.config.getStringData("RegisterTips1").replace("%s", t + " " + e);
            this.showError({
                phoneNum: e,
                AreaCode: t
            }) || this.registerView.active && A.TP.showMsg(s, !0, this.registerIdCode.bind(this), null)
        }
        registerIdCode() {
            let e, t = p("phone_Panel/areaCode_text", this.registerView).getComponent(C).string,
                i = t.indexOf("+");
            if (t = t.substring(i + 1, t.length), this.registerView.active) {
                e = p("phone_Panel/phoneNumber_text", this.registerView).getComponent(_).string;
                let i = p("tiaoCode/captcha_bg/captcha_text", this.registerView).getComponent(_).string;
                A.dataHandler.getUserData().isOpenUpdateUserMode ? A.httpHandler.requestUpdateGradeVCode(e, t, i) : A.httpHandler.requestRegisterVCode(e, t, i), this.showCdTime(60, !0)
            }
        }
        showCdTime(e, t) {
            if (t) {
                this.registerCdTime = e;
                let t = p("setPassword_Panel/identify_button/Label", this.registerView).getComponent(C),
                    i = 0 != e;
                t.string = i ? this.registerCdTime + "s" : A.config.getStringData("getCode")
            }
        }
        showError(e) {
            let t = null,
                i = null,
                s = function(e) {
                    return null != e
                };
            if (s(e.KVCode) && 6 != e.KVCode.length && (t = "ErrorToast39", i = "ToastTypeError"), s(e.phoneNum) && (e.phoneNum.length <= 0 ? (t = "ErrorToast38", i = "ToastTypeError") : s(e.AreaCode) && "86" === e.AreaCode && 11 != e.phoneNum.length && (t = "ErrorToast28", i = "ToastTypeError")), s(e.kAccount0)) {
                let s = A.StringTools.getStrLen(e.kAccount0);
                e.kAccount0.length <= 0 ? (t = "ErrorCode8", i = "ToastTypeError") : (s < 8 || s > 32) && (t = "ErrorToast41", i = "ToastTypeError")
            }
            if (s(e.kAccount0) && s(e.kAccount1) && e.kAccount0 != e.kAccount1 && (t = "ErrorToast40", i = "ToastTypeError"), s(e.password0)) {
                let s = A.StringTools.getStrLen(e.password0);
                e.password0.length <= 0 ? (t = "ErrorCode9", i = "ToastTypeError") : s < 6 || s > 14 ? (t = "ErrorCode7", i = "ToastTypeError") : -1 != e.password0.indexOf(" ") && (t = "recetPassWord_recetPassWord_panel_des_text", i = "ToastTypeError")
            }
            if (s(e.password0) && s(e.password1) && e.password0 != e.password1 && (t = "ErrorToast17", i = "ToastTypeError"), s(e.nickname)) {
                let s = A.StringTools.getStrLen(e.nickname);
                e.nickname.length <= 0 ? (t = "ErrorToast3", i = "ToastTypeError") : A.StringTools.isClubNameFormat(e.nickname) ? A.StringTools.isSensitiveWords(e.nickname) ? (t = "tips_no_sensitive_words", i = "ToastTypeWarning") : (s < 4 || s > 12) && (t = "EditBoxNickName1", i = "ToastTypeWarning") : (t = "tips_no_special_words", i = "ToastTypeWarning")
            }
            return null != t && (A.TT.showMsg(A.config.getStringData(t), i), !0)
        }
        onFinishRegisterSuccess() {
            A.action.showActionBothLeft(this.setAccountAndPassword, this.roleset, A.action.delay_type.NORMAL)
        }
        saveAccountAndPsd(e, t) {
            this.account = e, this.psd = t
        }
        saveAccountToFile() {
            null != this.account && A.tools.SaveStringByCCFile("user_account", this.account), A.tools.SaveStringByCCFile("user_password", this.psd)
        }
        onlySaveAccountToFile() {
            null != this.account && A.tools.SaveStringByCCFile("user_account", this.account), A.tools.SaveStringByCCFile("user_password", "")
        }
        onExitSetAccountClick() {
            A.AudioMgr.playButtonSound("back_button.mp3"), A.action.showActionBothRight(this.registerView, this.setAccountAndPassword, A.action.delay_type.NORMAL), this.updateCircle(1)
        }
        getinvateCode() {
            return p("invate_code_panel/invateCode_text", this.registerView).getComponent(_).string
        }
        updateCircle(e = this._circleIndex) {
            this.alwaysNode.active = !0, this._circleIndex = e;
            for (let t = 1; t < 4; t++) t == e ? (p("circle_panel/circle_" + t, this.alwaysNode).getComponent(w).spriteFrame = this.circle_light, p("circle_panel/circle_" + t, this.alwaysNode).getComponent(w).sizeMode = w.SizeMode.RAW) : (p("circle_panel/circle_" + t, this.alwaysNode).getComponent(w).spriteFrame = this.circle_gray, p("circle_panel/circle_" + t, this.alwaysNode).getComponent(w).sizeMode = w.SizeMode.RAW);
            1 == e ? (p("back_button", this.alwaysNode).active = !0, p("next_button", this.alwaysNode).active = !0, A.dataHandler.getUserData().isOpenUpdateUserMode ? p("back_button/previous_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("BackBtnTitle") : p("back_button/previous_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("LoginBtnText"), p("next_button/next_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("NextBtnText")) : 2 == e ? (p("back_button", this.alwaysNode).active = !0, p("next_button", this.alwaysNode).active = !0, p("back_button/previous_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("LastStep"), p("next_button/next_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("NextBtnText")) : 3 == e && (p("back_button", this.alwaysNode).active = !0, p("next_button", this.alwaysNode).active = !1, p("back_button/previous_text", this.alwaysNode).getComponent(C).string = A.config.getStringData("LastStep"))
        }
        OnAppEnterForeground() {
            let e = A.config.logTime("loginScene OnAppEnterForeground  切回前台");
            e = Math.ceil(e), this.registerCdTime = e < this.registerCdTime ? this.registerCdTime - e : 0, 0 != this.registerCdTime && this.updateRegisterCdTime(), this.forgetCdTime = e < this.forgetCdTime ? this.forgetCdTime - e : 0, 0 != this.forgetCdTime && this.updateForgetCdTime()
        }
        OnAppEnterBackground() {
            A.config.logTime("loginScene OnAppEnterForeground  切入前台")
        }
    })._g_prefabInst = null, M = t((k = D).prototype, "areaCode_prefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(k.prototype, "registerView_prefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(k.prototype, "setAccountAndPassword_prefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(k.prototype, "alwaysNode_prefab", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(k.prototype, "roleset_prefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(k.prototype, "circle_gray", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(k.prototype, "circle_light", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = k)) || x));
    s._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as v from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as y from "./Pb.js";
import * as I from "./worldWebsocket.js";
import * as L from "./Translator.js";
import * as A from "./mttconfig.js";
import * as S from "./mttconfig.js";
import * as E from "./mttconfig.js";
import * as b from "./StatusBar.js";
import * as w from "./AccountMigration.js";
import * as D from "./LogUploader.js";
import * as P from "./LoadingBlocker.js";
import * as k from "./LoginEnvironment.js";
import * as O from "./PhoneInputPage.js";
import * as R from "./AndroidBackButton.js";
import * as N from "./SystemAvatar.js";
import * as M from "./AvatarSetting.js";
import * as T from "./DataManager.js";
import * as B from "./RegisterInputPage.js";
import * as U from "./ResetPasswordPage.js";
import * as V from "./AreaCodeInputPage.js";

function main() {
    var G, K, x, z, W, H, F, j, J, q, Z, X, $, Y, Q, ee, te, oe, ne, ie, se, re, ae, le, ce, ge, he, de, ue, me, pe, ve, _e, Ce, fe, ye, Ie, Le, Ae, Ee, Se, be;
    n._RF.push({}, "dfde7+fzYtFv75nPPJKzXZu", "Login_ts", void 0);
    const {
        ccclass: we,
        property: De
    } = c;
    let Pe = e("LOGIN_PAGES", function(e) {
        return e[e.LOGIN = 0] = "LOGIN", e[e.PHONE = 1] = "PHONE", e[e.VALID_CODE = 2] = "VALID_CODE", e[e.REGISTER = 3] = "REGISTER", e[e.RESET_PASSWORD = 4] = "RESET_PASSWORD", e[e.AREA_CODE = 5] = "AREA_CODE", e[e.AGREEMENT = 6] = "AGREEMENT", e[e.AVATAR_SETTING = 7] = "AVATAR_SETTING", e
    }({}));
    e("Login_ts", (G = De(i), K = De(s), x = De(s), z = De(i), W = De(r), H = De(a), F = De(r), j = De(l), J = De([r]), q = De([a]), Z = De(a), X = De(a), $ = De(a), Y = De(a), Q = De(a), ee = De(a), te = De(r), we(((be = class e extends g {
        constructor(...e) {
            super(...e), o(this, "areaCodeButton", ie, this), o(this, "userAccountValue", se, this), o(this, "userPasswordValue", re, this), o(this, "loginButton", ae, this), o(this, "loading", le, this), o(this, "_loading", ce, this), o(this, "reConnectLoading", ge, this), o(this, "hall", he, this), o(this, "layerPrefabs", de, this), o(this, "layers", ue, this), o(this, "layersParent", me, this), o(this, "blockLayer", pe, this), o(this, "centerPosition", ve, this), o(this, "rightPosition", _e, this), o(this, "noticeInfo", Ce, this), o(this, "blackOverlay", fe, this), o(this, "migrationBoxPrefab", ye, this), o(this, "_intention", Ie, this), o(this, "_userPhone", Le, this), o(this, "_userAreaCode", Ae, this), o(this, "_userPassword", Ee, this), o(this, "_userValidCode", Se, this), this.pageScrollSpeed = .15, this._loginIsClick = !1, this._dialogIsShow = !1, this._reConnectLoading = null, this._migrationBox = null, this._retryLoginCount = 1, this._retryInputData = null, this._logUploader = void 0, this.delayLoadScene = !1, this.isRegister = !1, this.loginLoadingKey = "login", this.passwordRegex = /[^\w-\/:;()$&@".,?!'[\]{}#%^*+=_\\|~<>€£¥•\s]/g, this.passwordLength = ["G", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "0"], this.passwordSymbol = ["~", "+", "1", "_", "Q", "0", "a", "P", "Z", "L", "|", "o", "'", "(", "/", "8", "x", "I", "S", "k", "w", "[", "@", "m", "3", "J", "E", "u", "d", "&", "C", "6", ">", "Y", "v", "h", "F", "N", "r", "<", "$", ";", "}", "b", "5", "G", "T", "t", "g", "%", "B", "]", ":", "4", ",", "R", "n", "f", "H", "V", "y", ".", "^", "c", "7", "D", "U", "e", "j", "#", "M", "2", "{", "W", "K", "s", "i", "X", "*", "?", "9", '"', "O", "\\", "l", "z", "p", "A", ")", "q", "-", "!", "=", "`"], this.responseUserLogin = e => {
                if (e && !e.ErrorCode) {
                    I.getInstance().hasVerifyToken = !0, cc_mtt.vv.DataManager.gameList = e.Games, cc_mtt.vv.DataManager.userData = e.UserData, cc_mtt.vv.DataManager.JoinedTournaments = e.JoinedTournaments, cc_mtt.vv.DataManager.token = e.Token, cc_mtt.vv.DataManager.loginData = e;
                    let t = new Date;
                    cc_mtt.vv.DataManager.timeOffset = t.getTime() - e.ServerTime.getTime(), cc_mtt.vv.DataManager.agentCodes = e.AgentCodes, cc_mtt.vv.DataManager.defaultAgentCode = e.DefaultAgentCode, cc_mtt.vv.DataManager.ownAssociationId = e.OwnAssociationId, h.localStorage.setItem("phoneNum", this.userAccountValue.string), h.localStorage.setItem("password", this.encryptPassword(this.userPasswordValue.string)), h.localStorage.setItem("areaCode", this.areaCodeButton.node.getComponentInChildren(d).string.slice(1)), this.isRegister && N.changeSystemAvatar(-1).then((e => {
                        cc_mtt.vv.ConsoleLog.log("set default avatar " + (e.status ? "success" : `fail: ${e.message}`)), this.layers[Pe.AVATAR_SETTING].getComponent(M).init()
                    })), P.hide(this.loginLoadingKey), h.isNative && h.os === h.OS.ANDROID && u.reflection.callStaticMethod("com/cocos/game/AppActivity", "setHasLogin", "(Z)V", !0), I.needBindAssoCode && (I.needBindAssoCode = !1, h.openURL(A.webUrl + "/bindAsso/?token=" + cc_mtt.vv.DataManager.token)), k.instance && (k.instance.crash = ""), this.delayLoadScene ? this.moveToCenter(Pe.LOGIN, Pe.AVATAR_SETTING) : cc_mtt.vv.AssetsManager.loadScene("hall"), cc_mtt.vv.ConsoleLog.warn("test"), this._loginIsClick = !1, I.getInstance().reconnectCount = 0, h.isNative && h.localStorage.setItem("lastLogin", cc_mtt.vv.DataManager.token)
                } else if (e.ErrorCode === y.commonProto.ErrorCode.Impoker_User_Need_To_Choose_User) P.hide(this.loginLoadingKey), this.callMigrationBox(e.ImpokerAgents, this.userPasswordValue.string, this.responseUserLogin), this._loginIsClick = !1;
                else if (e.ErrorCode === y.commonProto.ErrorCode.Connection_Invalid && this._retryLoginCount-- > 0) cc_mtt.vv.ConsoleLog.log("retry login", this._retryLoginCount), h.isNative && h.os === h.OS.ANDROID && u.reflection.callStaticMethod("com/cocos/game/AppActivity", "setHasLogin", "(Z)V", !1), this.scheduleOnce((() => {
                    cc_mtt.vv.DataManager.worldNetwork.requestUserLogin(this._retryInputData, this.responseUserLogin.bind(this))
                }), 1);
                else if (e.ErrorCode == y.commonProto.ErrorCode.User_Account_Locked || e.ErrorCode == y.commonProto.ErrorCode.User_Account_Locked_For_Password || e.ErrorCode == y.commonProto.ErrorCode.User_Device_Locked) {
                    let t = e.ErrorCode == y.commonProto.ErrorCode.User_Account_Locked ? "LOGIN.USER_ACCOUNT_LOCKED" : "ERROR_CODE_PKW." + e.ErrorCode;
                    cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", t, !1, [{
                        type: 0,
                        text: "MESSAGE_DIALOG_BLOCKER.OK",
                        callback: function() {
                            I.logout("Acount Locked")
                        }
                    }])
                } else cc_mtt.vv.ConsoleLog.log("check", e.ErrorCode), P.hide(this.loginLoadingKey), this._loginIsClick = !1, h.isNative && h.os === h.OS.ANDROID && u.reflection.callStaticMethod("com/cocos/game/AppActivity", "setHasLogin", "(Z)V", !1), this._dialogIsShow || (cc_mtt.vv.AssetsManager.showDialogBox(e.ErrorCode === y.commonProto.ErrorCode.User_Client_Need_Update ? "UPDATE.APK_NEED_UPDATE_TITLE" : "ERROR_CODE_PKW.TITLE", e.ErrorCode === y.commonProto.ErrorCode.User_Client_Need_Update ? "UPDATE.APK_NEED_UPDATE_MESSAGE" : "ERROR_CODE_PKW." + e.ErrorCode, !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: () => {
                        if (this._dialogIsShow = !1, e.ErrorCode === y.commonProto.ErrorCode.User_Client_Need_Update)
                            if (h.isNative) try {
                                h.os === h.OS.ANDROID ? u.reflection.callStaticMethod("com/cocos/game/AppActivity", "openDownloadPage", "(Ljava/lang/String;)V", A.appDownloadUrl) : h.os === h.OS.IOS && u.reflection.callStaticMethod("AppController", "openBrowser:", A.appDownloadUrl)
                            } catch (e) {
                                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                            } else cc_mtt.vv.ConsoleLog.log("ERROR: Impossible run here")
                    }
                }]), this._dialogIsShow = !0), this._loginIsClick = !1, this.blackOverlay.active = !1, P.hide(this.loginLoadingKey)
            }
        }
        encryptPassword(e) {
            let t = e,
                o = this.passwordLength[t.length];
            for (; 16 !== t.length;) t += this.passwordSymbol[t[t.length - 1].charCodeAt() % this.passwordSymbol.length];
            for (let e = 1; e < 32; e++) {
                let n = t[Math.floor((e - 1) / 2)].charCodeAt() + 23;
                o += e % 2 == 1 ? String.fromCharCode(n) : this.passwordSymbol[n % this.passwordSymbol.length]
            }
            return o
        }
        decryptPassword(e) {
            if (32 !== e.length) return e;
            let t = this.passwordLength.indexOf(e[0]),
                o = "";
            for (let n = 0; n < 32; n++)
                if (o.length < t && n % 2 == 1) o += String.fromCharCode(e[n].charCodeAt() - 23);
                else if (o.length === t) break;
            return o
        }
        onDestroy() {
            I.setCallBack(), I.hasInstance() && cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(y.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin), this._logUploader && this._logUploader.onDestroy(), this.unscheduleAllCallbacks()
        }
        onLoad() {
            this.blackOverlay.active = !0, e.instance = this, cc_mtt.vv.AssetsManager.init();
            const t = h.localStorage;
            null != t.getItem("phoneNum") && (this.userAccountValue.string = t.getItem("phoneNum")), null != t.getItem("password") && (this.userPasswordValue.string = this.decryptPassword(t.getItem("password"))), null != t.getItem("areaCode") && (this.areaCodeButton.node.getComponentInChildren(d).string = "+" + t.getItem("areaCode")), this.noticeInfo.on(a.EventType.TOUCH_END, (e => {
                try {
                    h.isNative && (h.os, h.OS.ANDROID)
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                }
            })), this._loading = m(this.loading), this._loading.parent = this.node, cc_mtt.vv.DataManager.loadingTargets = [], cc_mtt.vv.DataManager.loading = this._loading;
            let o = this;
            if (cc_mtt.vv.AssetsManager.loadRes("prefab/common/status_bar", r, (function(e, t) {
                    let n = m(t);
                    n.parent = o.node, T.StatusBar = n.getComponent(b)
                })), null == cc_mtt.vv.DataManager.ERROR_CODE) {
                cc_mtt.vv.DataManager.ERROR_CODE = {};
                for (const e in y.commonProto.ErrorCode) cc_mtt.vv.DataManager.ERROR_CODE[e] = y.commonProto.ErrorCode[e];
                for (const e in y.pineapple.ErrorCode) cc_mtt.vv.DataManager.ERROR_CODE[e] = y.pineapple.ErrorCode[e]
            }
            this.addToLayers();
            let n = this.node.children[0].children[0].children[3].getComponent(d);
            h.localStorage.getItem("appVersion") ? n.string = "v" + JSON.parse(h.localStorage.getItem("appVersion")).version + (h.os === h.OS.ANDROID ? ".a" : ".i") : h.isBrowser ? n.string = "v" + E.webVersion + ".w" : n.string = "v1.0.0";
            try {
                if (h.os === h.OS.IOS && h.isNative) {
                    let e = this.getComponent(p);
                    e.top = "true" === u.reflection.callStaticMethod("AppController", "checkModern") ? 88 * 1.2171875 : 0, e.updateAlignment()
                }
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }
            P.show(this.loginLoadingKey), this._logUploader = new D(this.loginLoadingKey)
        }
        createLoginEnvironment() {
            if (new k, h.isNative) try {
                h.os === h.OS.ANDROID ? (k.instance.isEmulator = u.reflection.callStaticMethod("com/cocos/game/AppActivity", "checkEmulator", "()Z"), k.instance.deviceModel = u.reflection.callStaticMethod("com/cocos/game/AppActivity", "deviceModel", "()Ljava/lang/String;")) : h.os === h.OS.IOS && (k.instance.deviceModel = u.reflection.callStaticMethod("AppController", "deviceModel"))
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }
            let e = h.localStorage.getItem(S.key_enterBackground);
            cc_mtt.vv.ConsoleLog.log("hasEnterBackground", e), "0" == e && (k.instance.crash = 1), h.localStorage.setItem(S.key_enterBackground, "0")
        }
        setWebSocketCallBack() {
            I.setCallBack(null, null, null, (() => {
                P.show(this.loginLoadingKey)
            }), (() => {
                this.blackOverlay && (this.blackOverlay.active = !1), P.hide(this.loginLoadingKey)
            }), (() => {
                if (!I.hasInstance() || !I.getInstance().isShowDisconnectDialog) {
                    let e = {
                        Translation: "NETWORK.DISCONNECT_DIALOG",
                        isTranslated: !0,
                        resultArray: e => L(e).split("|")
                    };
                    P.hide("All");
                    let t = this;
                    I.getInstance().isShowDisconnectDialog = !0, cc_mtt.vv.ConsoleLog.log("Show login world reconnect dialog"), cc_mtt.vv.AssetsManager.showDialogBox("", e, !1, [{
                        type: 0,
                        text: "",
                        callback: function() {
                            cc_mtt.vv.ConsoleLog.log("Reconnect login world websocket"), I.getInstance().reset(), I.getInstance().isShowDisconnectDialog = !1, I.getInstance().stopAllConnect = !0, I.dropInstance(), t._loginIsClick = !1, t.onLoginConfirmClicked()
                        }
                    }, {
                        type: 0,
                        text: "",
                        callback: function() {
                            cc_mtt.vv.ConsoleLog.log("Cancel login world reconnect dialog"), I.getInstance().reset(), I.getInstance().isShowDisconnectDialog = !1, I.getInstance().stopAllConnect = !0, I.dropInstance(), t._loginIsClick = !1
                        }
                    }])
                }
            }), null, null)
        }
        start() {
            if (this.createLoginEnvironment(), h.isNative) {
                let e = h.localStorage.getItem("lastLogin") ? h.localStorage.getItem("lastLogin") : "";
                if ("" !== e) {
                    I.checkNetwork("lastLogin init") && (cc_mtt.vv.ConsoleLog.log("lastLogin worldNetwork init"), T.worldNetwork && cc_mtt.vv.ConsoleLog.log("lastLogin worldNetwork init finish")), k.instance.tokenLogin = !0;
                    let t = this.getDeviceId(),
                        o = JSON.stringify(k.instance);
                    cc_mtt.vv.ConsoleLog.log("token login DeviceId: " + t), cc_mtt.vv.ConsoleLog.log("token login environment: " + o), cc_mtt.vv.DataManager.worldNetwork.setReConnect(), I.bindUserBannerEventMessage(), I.setCallBack(null, null, null, (() => {
                        P.show(this.loginLoadingKey)
                    }), (() => {
                        this.blackOverlay && (this.blackOverlay.active = !1), P.hide(this.loginLoadingKey)
                    }), null, null, null), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(y.commonProto.SocketMessageId.User_Login_Response), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(y.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin), T.worldNetwork.requestTokenLogin({
                        Token: e,
                        device: t,
                        environment: o
                    }, this.responseUserLogin.bind(this))
                } else this.blackOverlay.active = !1, P.hide(this.loginLoadingKey), h.os === h.OS.ANDROID && u.reflection.callStaticMethod("com/cocos/game/AppActivity", "setHasLogin", "(Z)V", !1)
            } else this.blackOverlay.active = !1, P.hide(this.loginLoadingKey)
        }
        onPasswordChange() {
            this.userPasswordValue.string = this.userPasswordValue.string.replace(this.passwordRegex, "")
        }
        update(e) {
            1 == this.layers[Pe.LOGIN].active && ("" == this.userPasswordValue.string || "" == this.userAccountValue.string || this.userPasswordValue.string.length < 6 || null == this.userPasswordValue.string || null == this.userAccountValue.string ? this.loginButton.interactable = !1 : this.loginButton.interactable = !0, this.loginButton.getComponentInChildren(d).node.getComponent(v).color = this.loginButton.interactable ? _.WHITE : (new _).fromHEX("#9B9B9B"))
        }
        addToLayers() {
            this.layers[Pe.PHONE] = m(this.layerPrefabs[0]), this.layers[Pe.VALID_CODE] = m(this.layerPrefabs[1]), this.layers[Pe.REGISTER] = m(this.layerPrefabs[2]), this.layers[Pe.RESET_PASSWORD] = m(this.layerPrefabs[3]), this.layers[Pe.AREA_CODE] = m(this.layerPrefabs[4]), this.layers[Pe.AGREEMENT] = m(this.layerPrefabs[5]), this.layers[Pe.AVATAR_SETTING] = m(this.layerPrefabs[6]), this.resetPosition()
        }
        resetPosition() {
            for (let e of this.layers) e.uuid !== this.layers[Pe.LOGIN].uuid && (this.setPos(e, this.rightPosition.position), e.active = !1), e.parent = this.layersParent
        }
        setPos(e, t, o = !1) {
            this.setWidget(e, o), e.setPosition(t), e.getComponent(C).width = this.node.getComponent(C).width, e.getComponent(C).height = this.node.getComponent(C).height
        }
        setWidget(e, t) {
            let o = e.getComponent(p);
            o.enabled = t, o.updateAlignment()
        }
        moveToCenter(e, t, o) {
            this.blockLayer.active = !0;
            let n = this.layers[t],
                i = this;
            this.setPos(n, this.rightPosition.position), n.active = !0, f(n).sequence(f().to(this.pageScrollSpeed, {
                position: this.centerPosition.position
            }, {
                easing: "sineIn"
            }), f().call((() => {
                n.position = this.centerPosition.position, i.setWidget(n, !0), o && o(), i.layers[e].active = !1, i.blockLayer.active = !1
            }))).start()
        }
        moveFromCenter(e, t, o) {
            this.blockLayer.active = !0, this.setPos(this.layers[t], this.centerPosition.position, !0), this.layers[t].active = !0;
            let n = this.layers[e],
                i = this;
            this.setWidget(n, !1), f(n).sequence(f().to(this.pageScrollSpeed, {
                position: this.rightPosition.position
            }, {
                easing: "sineOut"
            }), f().call((() => {
                o && o(), n.active = !1, i.blockLayer.active = !1
            }))).start()
        }
        resetLayers() {
            this.layers[Pe.REGISTER].getComponent(B).passwordInput.string = "", this.layers[Pe.REGISTER].getComponent(B).nicknameInput.string = "", this.layers[Pe.RESET_PASSWORD].getComponent(U).passwordInput.string = "", this.resetPosition()
        }
        onRegisterClicked() {
            this._intention = Pe.REGISTER, this.resetLayers();
            let e = this.layers[Pe.PHONE].getComponent(O);
            e.presetPage(L("REGISTER.TITLE")), this.moveToCenter(Pe.LOGIN, Pe.PHONE, (() => {
                e.setFocus()
            })), h.isNative && h.os === h.OS.ANDROID && R.getInstance().addBackFunction("PhoneInputPage", e.onBackClicked.bind(e))
        }
        onResetPasswordClicked() {
            this._intention = Pe.RESET_PASSWORD, this.resetLayers();
            let e = this.layers[Pe.PHONE].getComponent(O);
            e.presetPage(L("RESET_PASSWORD.TITLE")), this.moveToCenter(Pe.LOGIN, Pe.PHONE, (() => {
                e.setFocus()
            })), h.isNative && h.os === h.OS.ANDROID && R.getInstance().addBackFunction("PhoneInputPage", e.onBackClicked.bind(e))
        }
        onAreaCodeClicked() {
            let e = this.layers[Pe.AREA_CODE].getComponent(V);
            e._comeFrom = Pe.LOGIN, this.moveToCenter(Pe.LOGIN, Pe.AREA_CODE), h.isNative && h.os === h.OS.ANDROID && R.getInstance().addBackFunction("AreaCodeInputPage", e.onBackClicked.bind(e))
        }
        onLoginConfirmClicked() {
            k.instance.tokenLogin && delete k.instance.tokenLogin;
            let e = this.areaCodeButton.node.getComponentInChildren(d).string.slice(1),
                t = "",
                o = 0,
                n = "",
                i = this.getDeviceId(),
                s = JSON.stringify(k.instance);
            if (h.isNative) try {
                h.os === h.OS.ANDROID ? (t = u.reflection.callStaticMethod("com/cocos/game/AppActivity", "getJPushRegistrationID", "()Ljava/lang/String;"), o = 1, n = u.reflection.callStaticMethod("com/cocos/game/AppActivity", "getAppVersion", "()Ljava/lang/String;")) : h.os === h.OS.IOS && (t = h.localStorage.getItem("jPushRegistrationID") ? h.localStorage.getItem("jPushRegistrationID") : "", o = 2, n = u.reflection.callStaticMethod("AppController", "getAppVersion"))
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }
            cc_mtt.vv.ConsoleLog.log("JPush: " + t), cc_mtt.vv.ConsoleLog.log("AppVerison: " + n), cc_mtt.vv.ConsoleLog.log("DeviceId: " + i), cc_mtt.vv.ConsoleLog.log("environment: " + s);
            let r = {
                AreaCode: e,
                Mobile: this.userAccountValue.string,
                Password: this.userPasswordValue.string,
                JPushRegistrationID: t,
                ClientType: o,
                ClientVersion: n,
                device: i,
                environment: s
            };
            this._loginIsClick || (I.checkNetwork("init") && (cc_mtt.vv.ConsoleLog.log("worldNetwork init"), cc_mtt.vv.DataManager.worldNetwork && cc_mtt.vv.ConsoleLog.log("worldNetwork init finish")), cc_mtt.vv.ConsoleLog.log("onLoginConfirmClicked"), this.setWebSocketCallBack(), cc_mtt.vv.DataManager.worldNetwork.setReConnect(), P.show(this.loginLoadingKey), P.instance && P.setLoading((() => {
                cc_mtt.vv.ConsoleLog.log("loading timeout:Login clicked"), this._loginIsClick = !1, I.dropInstance(), P.hide(this.loginLoadingKey)
            })), this._loginIsClick = !0, this._retryInputData = r, I.bindUserBannerEventMessage(), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(y.commonProto.SocketMessageId.User_Login_Response), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(y.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin), cc_mtt.vv.DataManager.worldNetwork.requestUserLogin(r, this.responseUserLogin.bind(this)), this.scheduleOnce((() => {
                this._loginIsClick = !1
            }), 1))
        }
        onVersionButtonClicked() {
            this._logUploader && this._logUploader.onVersionButtonClicked()
        }
        callMigrationBox(e, t, o) {
            this._migrationBox || (this._migrationBox = m(this.migrationBoxPrefab), this._migrationBox.parent = this.layersParent, this._migrationBox.active = !1), this._migrationBox.getComponent(w).callMigration(e, t, o)
        }
        getDeviceId() {
            if (h.isNative) try {
                if (h.os === h.OS.ANDROID) return u.reflection.callStaticMethod("com/cocos/game/AppActivity", "getDeviceId", "()Ljava/lang/String;");
                if (h.os === h.OS.IOS) return u.reflection.callStaticMethod("AppController", "getUniqueIdentifier")
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }
            return ""
        }
        onCustomerServiceClicked() {
            h.openURL("https://800.aspk88.com/chat/chatClient/chatbox.jsp?companyID=9074&configID=141&codeType=custom")
        }
    }).instance = null, ie = t((ne = be).prototype, "areaCodeButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(ne.prototype, "userAccountValue", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(ne.prototype, "userPasswordValue", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(ne.prototype, "loginButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(ne.prototype, "loading", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(ne.prototype, "_loading", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(ne.prototype, "reConnectLoading", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(ne.prototype, "hall", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(ne.prototype, "layerPrefabs", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ue = t(ne.prototype, "layers", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), me = t(ne.prototype, "layersParent", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(ne.prototype, "blockLayer", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(ne.prototype, "centerPosition", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = t(ne.prototype, "rightPosition", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(ne.prototype, "noticeInfo", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(ne.prototype, "blackOverlay", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(ne.prototype, "migrationBoxPrefab", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(ne.prototype, "_intention", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Le = t(ne.prototype, "_userPhone", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), Ae = t(ne.prototype, "_userAreaCode", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), Ee = t(ne.prototype, "_userPassword", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), Se = t(ne.prototype, "_userValidCode", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), oe = ne)) || oe));
    n._RF.pop()
}
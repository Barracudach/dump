import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as v from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Pb.js";
import * as D from "./worldWebsocket.js";
import * as C from "./Translator.js";
import * as f from "./LoadingBlocker.js";
import * as M from "./mttconfig.js";
import * as L from "./mttconfig.js";
import * as E from "./LoginEnvironment.js";
import * as R from "./AppUpdate.js";
import * as O from "./WebPlatformTools.js";
import * as P from "./ResourcesLoader.js";
import * as k from "./cv.js";
import * as w from "./DataManager.js";
import * as A from "./AssetsManager.js";

function main() {
    var b, S, I, U, N, T, W;
    a._RF.push({}, "96aa7+nvgdOEodUf7xTtqDO", "LoginWeb", void 0);
    const {
        ccclass: y,
        property: B
    } = s;
    t("LoginWeb", (b = B(n), S = B(r), y(((W = class t extends i {
        constructor(...t) {
            super(...t), o(this, "loading", N, this), o(this, "_loading", T, this), this.token = "", this.appUpdate = void 0, this.langMap = {
                en_US: "en",
                zh_CN: "sc",
                vi_VN: "vi",
                th_TH: "th",
                es_MX: "es",
                fr_CA: "fr",
                pt_BR: "pt",
                ja_JP: "ja",
                ko_KR: "ko",
                zh_TW: "tc",
                pl_PL: "pl",
                no_NO: "no",
                fi_FI: "fi",
                id_ID: "id"
            }, this.login = () => {
                if (this.token && "" !== this.token) {
                    let t = this.getDeviceId();
                    D.bindUserBannerEventMessage(), D.setCallBack((t => {
                        this.repeatLoginDialog(t)
                    }), null, null, (() => {
                        f.show("Web World")
                    }), (() => {
                        f.hide("Web World")
                    }), null, (() => {
                        cc_mtt.vv.DataManager.worldNetwork.requestTokenLogin({
                            Token: this.token,
                            device: t,
                            environment: JSON.stringify(E.instance)
                        }, this.responseUserLogin.bind(this))
                    })), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(u.commonProto.SocketMessageId.User_Login_Response), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(u.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin), cc_mtt.vv.DataManager.worldNetwork.setReConnect()
                } else cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "GAME.LOGIN_TIME_OUT", !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: () => {
                        O.instance.sendCCJS("back-abnormal")
                    },
                    stopCloseOnClick: !0
                }]), f.hide("login")
            }, this.responseUserLogin = t => {
                if (t && !t.ErrorCode) {
                    D.getInstance().hasVerifyToken = !0, cc_mtt.vv.DataManager.gameList = t.Games, cc_mtt.vv.DataManager.userData = t.UserData, cc_mtt.vv.DataManager.JoinedTournaments = t.JoinedTournaments, cc_mtt.vv.DataManager.token = t.Token, cc_mtt.vv.DataManager.loginData = t;
                    let e = new Date;
                    cc_mtt.vv.DataManager.timeOffset = e.getTime() - t.ServerTime.getTime(), cc_mtt.vv.DataManager.agentCodes = t.AgentCodes, cc_mtt.vv.DataManager.defaultAgentCode = t.DefaultAgentCode, cc_mtt.vv.DataManager.ownAssociationId = t.OwnAssociationId, f.hide("login"), cc_mtt.vv.AssetsManager.loadScene(M.SCENE_NAME.HALL), D.getInstance().reconnectCount = 0, c.isNative && c.localStorage.setItem("lastLogin", cc_mtt.vv.DataManager.token)
                } else cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "ERROR_CODE_PKW." + t.ErrorCode, !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: () => {
                        if (t.ErrorCode === u.commonProto.ErrorCode.User_Client_Need_Update)
                            if (c.isNative) try {
                                c.os === c.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/AppActivity", "openDownloadPage", "(Ljava/lang/String;)V", M.appDownloadUrl) : c.os === c.OS.IOS && l.reflection.callStaticMethod("AppController", "openBrowser:", M.appDownloadUrl)
                            } catch (t) {
                                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
                            } else cc_mtt.vv.ConsoleLog.log("ERROR: Impossible run here")
                    }
                }])
            }
        }
        onDestroy() {
            D.setCallBack(), D.hasInstance() && cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(u.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin)
        }
        onLoad() {
            if (t.instance = this, cc_mtt.vv = {}, cc_mtt.vv.DataManager = w, cc_mtt.vv.AssetsManager = A, this.readParam(), P.instance.updateResPath(), P.instance.initNeccessaryPrefabPath(), cc_mtt.vv.ConsoleLog.log("lang", cc_mtt.vv.DataManager.lang), cc_mtt.vv.AssetsManager.init(), this._loading = g(this.loading), this._loading.parent = this.node, cc_mtt.vv.DataManager.loadingTargets = [], cc_mtt.vv.DataManager.loading = this._loading, null == cc_mtt.vv.DataManager.ERROR_CODE_PKW) {
                cc_mtt.vv.DataManager.ERROR_CODE = {};
                for (const t in u.commonProto.ErrorCode) cc_mtt.vv.DataManager.ERROR_CODE_PKW[t] = u.commonProto.ErrorCode[t];
                for (const t in u.pineapple.ErrorCode) cc_mtt.vv.DataManager.ERROR_CODE_PKW[t] = u.pineapple.ErrorCode[t]
            }
            try {
                if (c.os === c.OS.IOS && c.isNative) {
                    let t = this.getComponent(v);
                    t.top = "true" === l.reflection.callStaticMethod("AppController", "checkModern") ? 88 * 1.2171875 : 0, t.updateAlignment()
                }
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            }
            f.show("login")
        }
        createLoginEnvironment() {
            new E
        }
        start() {
            this.createLoginEnvironment(), this.appUpdate = new R, this.login(), L.writeWebLog && P.instance.loadRes("mtt/upload_web_log/UploadLog", n, null, ((t, e) => {
                if (!t) {
                    let t = g(e);
                    t.parent = d.getScene().getComponentInChildren(m).node, t.setPosition(new p(this.node.getComponent(_).width * this.node.getComponent(_).anchorX - t.getComponent(_).width * t.getComponent(_).anchorX - 50, 0 - this.node.getComponent(_).height * this.node.getComponent(_).anchorY + t.getComponent(_).height * t.getComponent(_).anchorY + 50, 0))
                }
            }))
        }
        repeatLoginDialog(t) {
            if (t && t.ErrorCode) {
                let e = `ERROR_CODE_PKW.${t.ErrorCode}`;
                this.callLogoutPopUpBox(e, (() => {
                    D.logout()
                }))
            } else cc_mtt.vv.ConsoleLog.log("impoker repeatLoginDialog: no msg or msg error code"), this.callLogoutPopUpBox("GAME.OTHER_LOGIN_PKW", (() => {
                D.logout()
            }))
        }
        callLogoutPopUpBox(t, e, o = "ERROR_CODE_PKW.TITLE", a) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", t), h(this.node) && (a = a || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(o, t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e,
                stopCloseOnClick: !0
            }], a))
        }
        getUrlConfig(t) {
            this.appUpdate.getUrlConfigVersion(t, null)
        }
        readParam() {
            var t = new URL(window.location.href);
            this.token = t.searchParams.get("token");
            let e = Number(t.searchParams.get("platform"));
            isNaN(e) || (cc_mtt.vv.DataManager.webPlatform = e, e == u.commonProto.PLATFORM.PKW && (cc_mtt.vv.DataManager.needGoldCheck = !1));
            let o = Number(t.searchParams.get("page"));
            isNaN(o) || (cc_mtt.vv.DataManager.webPage = o), cc_mtt.vv.DataManager.isWebFeature = !0;
            let a = t.searchParams.get("language");
            cc_mtt.vv.DataManager.webPlatform == u.commonProto.PLATFORM.PKW && a && this.langMap[a] && (cc_mtt.vv.DataManager.lang = this.langMap[a], C.SetLanguage(k.config.getCurrentLanguage())), "true" == t.searchParams.get("isFullscreen") && (cc_mtt.vv.DataManager.isFullScreen = !0), cc_mtt.vv.ConsoleLog.log("Web Login", window.location.href, this.token, e, o, cc_mtt.vv.DataManager.needGoldCheck, cc_mtt.vv.DataManager.isFullScreen)
        }
        getDeviceId() {
            if (c.isNative) try {
                if (c.os === c.OS.ANDROID) return l.reflection.callStaticMethod("com/cocos/game/AppActivity", "getDeviceId", "()Ljava/lang/String;");
                if (c.os === c.OS.IOS) return l.reflection.callStaticMethod("AppController", "getUniqueIdentifier")
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            }
            return ""
        }
    }).instance = null, N = e((U = W).prototype, "loading", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(U.prototype, "_loading", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = U)) || I));
    a._RF.pop()
}
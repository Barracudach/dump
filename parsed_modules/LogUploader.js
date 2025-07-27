import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./Translator.js";
import * as n from "./mttconfig.js";
import * as a from "./ConsoleLog.js";

function main() {
    e._RF.push({}, "7bb73UFnw1A/orcmCSgz36R", "LogUploader", void 0);
    t("LogUploader", class {
        constructor(t = "") {
            this._versionButtonClickedTime = 0, this._resetVersionButtonClickedTimeAction = null, this._overrideFilePrefix = "", this.onDestroy = () => {
                this._resetVersionButtonClickedTimeAction && clearTimeout(this._resetVersionButtonClickedTimeAction), this.resetVersionButtonClickedTime()
            }, this.uploadLogs = () => {
                this.writeNetworkMsg(), window.updateProgress = this.updateProgress;
                let t = this._overrideFilePrefix;
                "" == this._overrideFilePrefix && cc_mtt.vv && cc_mtt.vv.DataManager && cc_mtt.vv.DataManager.userData && cc_mtt.vv.DataManager.userId && (t = cc_mtt.vv.DataManager.userId);
                let e = {
                    Translation: "SETTING.ZIP",
                    payload: t => r.formatStr(s(t), 0)
                };
                cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", e, !1, []), setTimeout((() => {
                    try {
                        o.os === o.OS.ANDROID ? i.reflection.callStaticMethod("com/cocos/game/AppActivity", "uploadLogs", "(Ljava/lang/String;)V", t) : o.os === o.OS.IOS && i.reflection.callStaticMethod("AppController", "uploadLogs:", t)
                    } catch (t) {
                        this.updateProgress("FAIL", JSON.stringify(t))
                    }
                }), 500)
            }, this.resetVersionButtonClickedTime = () => {
                cc_mtt.vv.ConsoleLog.log("resetVersionButtonClickedTime"), this._versionButtonClickedTime = 0, this._resetVersionButtonClickedTimeAction = null
            }, this._overrideFilePrefix = t
        }
        writeNetworkMsg() {
            let t = "Not called";
            try {
                o.os === o.OS.ANDROID ? t = i.reflection.callStaticMethod("com/cocos/game/AppActivity", "getIPByDomain", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n.SERVER_URL_GAME, "443") : o.os === o.OS.IOS && (t = i.reflection.callStaticMethod("AppController", "getIPByDomain:", n.SERVER_URL_GAME))
            } catch (e) {
                t = "Error"
            }
            cc_mtt.vv.ConsoleLog.log("networkMsg", t), t = "Not called";
            try {
                o.os === o.OS.ANDROID ? t = i.reflection.callStaticMethod("com/cocos/game/AppActivity", "getIPByDomain", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n.SERVER_URL_WORLD, "443") : o.os === o.OS.IOS && (t = i.reflection.callStaticMethod("AppController", "getIPByDomain:", n.SERVER_URL_WORLD))
            } catch (e) {
                t = "Error"
            }
            cc_mtt.vv.ConsoleLog.log("networkMsg", t), a.writeLogs()
        }
        writeOtherNetworkMsg(t) {
            let e = "Not called";
            try {
                o.os === o.OS.ANDROID ? e = i.reflection.callStaticMethod("com/cocos/game/AppActivity", "getIPByDomain", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", t, "443") : o.os === o.OS.IOS && (e = i.reflection.callStaticMethod("AppController", "getIPByDomain:", t))
            } catch (t) {
                e = "Error"
            }
            cc_mtt.vv.ConsoleLog.log("otherNetworkMsg", e), a.writeLogs()
        }
        updateProgress(t, e) {
            if (cc_mtt.vv.AssetsManager.currentPopup) {
                let o = cc_mtt.vv.AssetsManager.currentPopup.getComponent("DialogBox");
                if ("number" == typeof e) o.contentLabel.string = r.formatStr(s(`SETTING.${t}`), Math.min(Math.max(0, e), 100));
                else {
                    o.hide();
                    let i = {
                        Translation: "SUCCESS" === t || "FAIL" === t ? `SETTING.UPLOAD_${t}` : `SETTING.${t}.${""===e?"SUCCESS":"FAIL"}`,
                        payload: t => r.formatStr(s(t), e)
                    };
                    cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", i, !1, [{
                        type: 0,
                        text: "GAME.CONFIRM",
                        callback: void 0
                    }])
                }
            }
        }
        onVersionButtonClicked() {
            o.isNative && (this._versionButtonClickedTime++, this._resetVersionButtonClickedTimeAction && (clearTimeout(this._resetVersionButtonClickedTimeAction), this._resetVersionButtonClickedTimeAction = null), this._versionButtonClickedTime >= 5 ? (this._versionButtonClickedTime = 0, cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "SETTING.UPLOAD_LOGS_TO_SERVER", !1, [{
                type: 0,
                text: "GAME.CONFIRM",
                callback: this.uploadLogs
            }, {
                type: 1,
                text: "GAME.CANCEL",
                callback: void 0
            }])) : this._resetVersionButtonClickedTimeAction || (this._resetVersionButtonClickedTimeAction = setTimeout(this.resetVersionButtonClickedTime, 5e3)))
        }
    }), e._RF.pop()
}
import * as t from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as i from "./httpApis.js";
import * as n from "./mttconfig.js";
import * as l from "./mttconfig.js";
import * as s from "./mttconfig.js";
import * as c from "./WebPlatformTools.js";
import * as a from "./LoadingBlocker.js";

function main() {
    t._RF.push({}, "03652bhz+FKho8OHa3ARh4r", "AppUpdate", void 0);
    o("AppUpdate", class {
        constructor() {
            this._callback = void 0, this._retryCount = void 0, this._retryGetUrlConfig = void 0, this._retryGetUrlConfigVersion = void 0, this._clientApkVersion = void 0, this._callback = null, this._retryCount = 0, this._retryGetUrlConfig = 0, this._retryGetUrlConfigVersion = 0, this._clientApkVersion = "-1"
        }
        retry() {
            this._retryCount = 0, c.instance.sendCCJS("back-abnormal")
        }
        getUrlConfigVersion(o, t) {
            i.requestUrlConfigVersion((r => {
                let i = e.localStorage.getItem(n.key_urlConfigVersion),
                    s = e.localStorage.getItem(n.key_urlConfig);
                cc_mtt.vv.ConsoleLog.log("getUrlConfig version", r, i, !!s), r == i && s ? (l.updateUrlConfig(), o && o()) : this.getUrlConfig(o, t, r)
            }), (() => {
                this._retryGetUrlConfigVersion++, cc_mtt.vv.ConsoleLog.log("Cannot get UrlConfigVersion", this._retryGetUrlConfigVersion), this._retryGetUrlConfigVersion < 3 ? this.getUrlConfigVersion(o, t) : t ? t() : this.showNetworkErrorDialog()
            }))
        }
        getUrlConfig(o, t, e) {
            i.requestUrlConfig((t => {
                cc_mtt.vv.ConsoleLog.log("getUrlConfig version", t), this.setUrlConfigVersion(e), this.setUrlConfig(t), o && o()
            }), (() => {
                this._retryGetUrlConfig++, cc_mtt.vv.ConsoleLog.log("Cannot get UrlConfig", this._retryGetUrlConfig), this._retryGetUrlConfig < 3 ? this.getUrlConfig(o, t, e) : (t && t(), this.showNetworkErrorDialog())
            }))
        }
        checkVersionIsUpToDate(o) {
            try {
                if (this._callback = o, !e.isNative) return void(this._callback && this._callback(!0));
                this._clientApkVersion = this.getClientAppVersion(), cc_mtt.vv.ConsoleLog.log("checkVersion", "clientApkVersion: " + this._clientApkVersion), this.getServerVersion()
            } catch (o) {
                cc_mtt.vv.ConsoleLog.log("checkVersion ERROR:", o), this.showNetworkErrorDialog(), this._callback && this._callback(!1)
            }
        }
        setUrlConfigVersion(o) {
            e.localStorage.setItem(n.key_urlConfigVersion, o)
        }
        setUrlConfig(o) {
            e.localStorage.setItem(n.key_urlConfig, o), l.updateUrlConfig(o)
        }
        getClientAppVersion() {
            let o = "0.0.1";
            try {
                return e.os === e.OS.ANDROID ? o = r.reflection.callStaticMethod("com/cocos/game/util/VersionUtil", "getClientVersion", "()Ljava/lang/String;") : e.os === e.OS.IOS && (o = r.reflection.callStaticMethod("AppController", "getAppVersion", "")), o
            } catch (t) {
                return cc_mtt.vv.ConsoleLog.log("getClientAppVersion ERROR:", t), o
            }
        }
        getServerVersion() {
            i.requestAppVersion((o => {
                o ? (cc_mtt.vv.ConsoleLog.log("checkVersion", "getServerVersion", o), this.compareVersion(this._clientApkVersion, o) < 0 ? (cc_mtt.vv.ConsoleLog.log("checkVersion", "client apk version too old, redirect user to appDownloadPage!"), this.checkDownloadURL(), this._callback(!1)) : (cc_mtt.vv.ConsoleLog.log("checkVersion", "client apk version is new, no need to update apk"), this._callback(!0))) : this.retryGetAppVersion()
            }), this.retryGetAppVersion.bind(this))
        }
        retryGetAppVersion() {
            cc_mtt.vv.ConsoleLog.log("retryGetAppVersion"), this._retryCount++, this._retryCount > 3 ? (this.showNetworkErrorDialog(), this._callback(!1)) : this.getServerVersion()
        }
        compareVersion(o, t) {
            let e = o.split("."),
                r = t.split(".");
            for (let o = 0; o < 3; o++) {
                let t = parseInt(e[o]),
                    i = parseInt(r[o]);
                if (t > i) return 1;
                if (t < i) return -1
            }
            return 0
        }
        checkDownloadURL() {
            i.checkDownloadURL((() => {
                this.showDownloadDialog(s.appDownloadUrl)
            }), (() => {
                i.requestDownloadURL((o => {
                    let t = o.split(",");
                    t && t.length > 0 ? i.checkDownloadURLList(t, 0, (o => {
                        this.showDownloadDialog(o)
                    }), (() => {
                        l.changeDownloadIndex(0), this.showDownloadDialog(s.appDownloadUrl)
                    })) : (l.changeDownloadIndex(0), this.showDownloadDialog(s.appDownloadUrl))
                }), (() => {
                    l.changeDownloadIndex(0), this.showDownloadDialog(s.appDownloadUrl)
                }))
            }))
        }
        showDownloadDialog(o = s.appDownloadUrl) {
            cc_mtt.vv.ConsoleLog.log("showDownloadDialog", o), cc_mtt.vv.AssetsManager.showDialogBox("UPDATE.APK_NEED_UPDATE_TITLE", "UPDATE.APK_NEED_UPDATE_MESSAGE", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                stopCloseOnClick: !0,
                callback: () => {
                    e.openURL(o)
                }
            }])
        }
        showNetworkErrorDialog() {
            a.hide("All"), cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                type: 0,
                text: "NETWORK.RECONNECT",
                callback: () => {
                    cc_mtt.vv.ConsoleLog.log("App update error retry"), this.retry()
                }
            }], cc_mtt.vv.AssetsManager.popupParent, null, "AppUpdate_Reconnect")
        }
    }), t._RF.pop()
}
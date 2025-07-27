import * as n from "./cc.js";
import * as a from "./LobbyTools.js";
import * as e from "./WepAppMessageManager.js";
import * as o from "./MessageBroker.js";
import * as i from "./InitialDataArgs.js";
import * as s from "./cv.js";

function main() {
    n._RF.push({}, "8bcc4Rv9/hO4r5q8SBeWtoQ", "InstallPromptStatusManager", void 0);
    class r {
        constructor() {
            this._info = null
        }
        static getInstance() {
            return r._instance || (r._instance = new r), r._instance
        }
        get info() {
            return this._info
        }
        set info(t) {
            this._info = t
        }
        get previousAvailableStatus() {
            if (!s.appConfig.isWebApp) return !1;
            if (!s.appConfig.getUserProfileConfig().addToHomeEnabled) return !1;
            return "1" === a.getStringFromLocalStorage("isInstallPromptAvailable")
        }
        set previousAvailableStatus(t) {
            a.saveStringToLocalStorage("isInstallPromptAvailable", t ? "1" : "0")
        }
        handleClickAddToHomeScreenButton() {
            if (!this._info || !this._info.platform) return;
            const {
                platform: t,
                isInstallPromptAvailable: n
            } = this._info, a = o.getInstance();
            t === i.android ? n ? a.sendShowInstallPrompt() : console.warn(`InstallPromptStatusManager: handleClickAddToHomeScreenButton: not available, info: ${JSON.stringify(this._info)}`) : t === i.iOS && a.sendAddShortcut()
        }
        isAvailableAddToHomeScreen() {
            return !(!this._info || !this._info.platform) && (this._info.platform === i.android ? !!this._info.isInstallPromptAvailable || (console.warn(`InstallPromptStatusManager: isInstallPromptAvailable: not available, info: ${JSON.stringify(this._info)}`), !1) : this._info.platform === i.iOS && !e.checkIfFullScreenApp())
        }
    }
    t("InstallPromptStatusManager", r), r._instance = void 0, n._RF.pop()
}
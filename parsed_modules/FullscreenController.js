import * as t from "./cc.js";
import * as s from "./cc.js";
import * as n from "./FullscreenEventArgs.js";
import * as r from "./ShowAddShortcutEventArgs.js";
import * as c from "./MessageSender.js";
import * as u from "./cv.js";
import * as l from "./WepAppMessageManager.js";

function main() {
    t._RF.push({}, "48852Pzw4FD4J0Utp8rO8sD", "FullscreenController", void 0);
    class i {
        constructor() {
            this.isFullscreenStatus = !1
        }
        static getInstance() {
            return i._instance || (i._instance = new i), i._instance
        }
        isAbleToJoinRoom() {
            return !u.appConfig.isWebApp || (s.os !== s.OS.IOS || (!!l.checkIfFullScreenApp() || (this.sendAddShortcut(), !1)))
        }
        sendApplyFullScreenForWebApp(e) {
            u.appConfig.isWebApp && this.isFullscreenStatus != e && (this.isFullscreenStatus = e, c.sendParent(new n(e)))
        }
        sendAddShortcut() {
            const e = new r;
            c.sendParent(e)
        }
        updateFullscreenStatus(e) {
            this.isFullscreenStatus != e && (this.isFullscreenStatus = e)
        }
    }
    e("FullscreenController", i), i._instance = void 0, t._RF.pop()
}
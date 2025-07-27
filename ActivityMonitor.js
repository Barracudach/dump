import * as u from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cv.js";

function main() {
    n._RF.push({}, "f4203liRYNMFYDrTyhJnvdl", "ActivityMonitor", void 0);
    class c {
        static getInstance() {
            return c.instance || (c.instance = new c), c.instance
        }
        constructor() {
            this.lastActivity = void 0, this.wasEnterBackground = !1, this.id = void 0, this.uuid = void 0, r.config.IS_PC(!0) ? (e.enableForTarget(this), i.on(o.EventType.KEY_DOWN, this.onGetInputInteraction, this), window.addEventListener("mousedown", this.onGetInputInteraction.bind(this), !1)) : (s.on(u.EVENT_HIDE, this.OnAppEnterBackground, this), s.on(u.EVENT_SHOW, this.OnAppEnterForeground, this))
        }
        onGetInputInteraction() {
            a.getScheduler().unschedule(this.autoLogOut, this), a.getScheduler().schedule(this.autoLogOut, this, 60 * r.appConfig.getSecurityConfig().timeoutLogout)
        }
        OnAppEnterBackground() {
            this.lastActivity = Date.now(), this.wasEnterBackground = !0
        }
        OnAppEnterForeground() {
            if (!this.wasEnterBackground) return;
            let t = Date.now();
            Math.floor((t - this.lastActivity) / 1e3 / 60) >= r.appConfig.getSecurityConfig().timeoutLogout && this.autoLogOut(), this.wasEnterBackground = !1
        }
        autoLogOut() {
            r.config.IS_PC(!0) && a.getScheduler().unschedule(this.autoLogOut, this), r.dataHandler.getUserData().isLoggedIn() && (r.netWorkManager.Logout(!1, null, r.Enum.LogOutReason.BackgroundTimeout), r.TT.showMsg(r.config.getStringData("inactivitySignedOut"), r.Enum.ToastType.ToastTypeWarning))
        }
    }
    t("ActivityMonitor", c), c.instance = void 0, n._RF.pop()
}
import * as t from "./cc.js";
import * as n from "./cc.js";
import * as s from "./Authenticator.js";
import * as a from "./MessageSender.js";
import * as r from "./RequestLoginArgs.js";
import * as o from "./cv.js";
import * as c from "./AnalyticsHandler.js";

function main() {
    var u;
    t._RF.push({}, "04217LlIltP84QbEQsy01Uf", "WebAuthenticator", void 0);
    const {
        ccclass: i
    } = n;
    e("WebAuthenticator", i("WebAuthenticator")(u = class e extends s {
        static getInstance() {
            return s.instance || (s.instance = new e), s.instance
        }
        registerMessageHandlers() {
            super.registerMessageHandlers()
        }
        showLoginPopup() {
            a.sendParent(new r)
        }
        showRegistrationPopup() {
            a.sendParent(new r)
        }
        logOutAndDoGuestLogin() {
            const e = () => {};
            o.SwitchLoadingView.show("", !1, !1, !1, !1, !0), o.dataHandler.getUserData().isLoggedIn() && (c.getInstance().sendEvent(o.Enum.CurrentScreen.profile, o.Enum.segmentEvent.UserLoggedOut), o.netWorkManager.Logout(!0, null, o.Enum.LogOutReason.Manual, e, e))
        }
    }) || u);
    t._RF.pop()
}
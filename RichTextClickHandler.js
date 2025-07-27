import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as s from "./AnalyticsHandler.js";

function main() {
    var p, g, d, m;
    o._RF.push({}, "0164aKS0YJIu694x1h7h8WB", "RichTextClickHandler", void 0);
    const {
        ccclass: y,
        property: h
    } = r;
    e("default", (p = h([i]), y((m = n((d = class extends a {
        constructor(...e) {
            super(...e), t(this, "onOpenPage", m, this)
        }
        openURL(e, n) {
            l.AudioMgr.playButtonSound("button_click.mp3"), l.native.openUrl(n)
        }
        moreNumberSelected() {
            u.openURL("https://www.google.com")
        }
        sendEMail(e, n) {
            l.AudioMgr.playButtonSound("button_click.mp3"), null != n && "" != n ? u.openURL("mailto:" + n) : l.appConfig.getGeneralConfig().helpLine.useCustomWebPage && l.httpHandler.getCustom()
        }
        startCall(e, n) {
            l.AudioMgr.playButtonSound("button_click.mp3"), null != n && "" != n ? u.openURL("tel:" + n) : l.appConfig.getGeneralConfig().helpLine.useCustomWebPage && l.httpHandler.getCustom()
        }
        openLogin() {
            l.AudioMgr.playButtonSound("button_click.mp3"), l.authenticator.showLoginPopup()
        }
        openRegister() {
            l.AudioMgr.playButtonSound("button_click.mp3"), l.authenticator.showRegistrationPopup()
        }
        openPage(e, n) {
            l.AudioMgr.playButtonSound("button_click.mp3"), this.sendPageOpenAnalyticsEvent(n), this.node.parent.emit(c.EventType.TOUCH_CANCEL, e, !0), this.onOpenPage.forEach((e => {
                e.emit([n])
            }))
        }
        sendPageOpenAnalyticsEvent(e) {
            switch (e.split(",")[0]) {
                case "TermsAndConditions":
                    s.getInstance().sendEvent(l.Enum.CurrentScreen.termsOfService, l.Enum.segmentEvent.ScreenOpened, l.Enum.Functionality.registration, {
                        journey: "registration"
                    });
                    break;
                case "PrivacyPolicy":
                    s.getInstance().sendEvent(l.Enum.CurrentScreen.privacyPolicy, l.Enum.segmentEvent.ScreenOpened, l.Enum.Functionality.registration, {
                        journey: "registration"
                    })
            }
        }
    }).prototype, "onOpenPage", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = d)) || g));
    o._RF.pop()
}
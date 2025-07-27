import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as a from "./DesignSystemRegularButton.js";

function main() {
    var r, u, l, f, p, y;
    o._RF.push({}, "bb348Jch0JFFoPanBC8RXeR", "DesignSystemNotificationButton", void 0);
    const {
        ccclass: g,
        property: m,
        menu: D
    } = c;
    t("DesignSystemNotificationButton", (r = g("DesignSystemNotificationButton"), u = D("Design System/Design System Button with Notification Icon"), l = m(e), r(f = u((y = i((p = class extends a {
        constructor(...t) {
            super(...t), n(this, "notificationIcon", y, this)
        }
        enableNotification(t) {
            s(this.notificationIcon) && (this.notificationIcon.active = t)
        }
    }).prototype, "notificationIcon", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = p)) || f) || f));
    o._RF.pop()
}
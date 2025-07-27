import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as c from "./AnalyticsHandler.js";
import * as s from "./cv.js";

function main() {
    var l, u, p, d;
    o._RF.push({}, "cb963b7EqBJ5IrB91chBJvx", "TouristLoginPanelView", void 0);
    const {
        ccclass: y,
        property: g
    } = i;
    e("default", (l = g(r), y((d = n((p = class extends a {
        constructor(...e) {
            super(...e), t(this, "realMoneyTextNode", d, this)
        }
        onLoad() {
            s.appConfig.getLobbyConfig().casino.showSecondary ? this.realMoneyTextNode.active = !0 : this.realMoneyTextNode.active = !1
        }
        onEnable() {
            c.getInstance().sendEvent(s.Enum.CurrentScreen.tipsForGuestLogin, s.Enum.segmentEvent.ScreenOpened, s.Enum.Functionality.registration, {
                journey: "registration"
            })
        }
    }).prototype, "realMoneyTextNode", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    o._RF.pop()
}
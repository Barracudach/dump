import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cv.js";

function main() {
    var c, u, h, f;
    s._RF.push({}, "bf4bf0EFwJKlajcmswRK5cX", "SessionTime", void 0);
    const {
        ccclass: p,
        property: b
    } = o;
    e("SessionTime", (c = b(n), p((f = i((h = class extends l {
        constructor(...e) {
            super(...e), t(this, "label", f, this), this.loginTime = 0, this.sessionDiff = null
        }
        onEnable() {
            this.updateLabel(), this.schedule(this.updateLabel.bind(this), 10, a.REPEAT_FOREVER)
        }
        onDisable() {
            this.unschedule(this.updateLabel.bind(this))
        }
        updateLabel() {
            if (0 == this.loginTime) {
                let e = r.dataHandler.getUserActivityData().getLast(r.Enum.UserActionType.Login);
                null != e && (this.loginTime = e.at.getTime()), this.sessionDiff = new Date
            }
            this.loginTime > 0 && (this.sessionDiff.setTime(Date.now() - this.loginTime), this.label.string = r.StringTools.formatC("%02d:%02d", this.sessionDiff.getUTCHours(), this.sessionDiff.getUTCMinutes()))
        }
    }).prototype, "label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = h)) || u));
    s._RF.pop()
}
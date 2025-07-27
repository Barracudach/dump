import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cv.js";

function main() {
    var u, c, p, b;
    i._RF.push({}, "c5015UVAmhPEoDiKs5Rqm9U", "CurrentClock", void 0);
    const {
        ccclass: h,
        property: d
    } = o;
    e("CurrentClock", (u = d(r), h((b = t((p = class extends l {
        constructor(...e) {
            super(...e), n(this, "label", b, this)
        }
        onEnable() {
            this.updateLabel(), this.schedule(this.updateLabel.bind(this), 10, a.REPEAT_FOREVER)
        }
        onDisable() {
            this.unschedule(this.updateLabel.bind(this))
        }
        updateLabel() {
            this.label.string = s.StringTools.formatTime(Date.now(), s.Enum.eTimeType.Hour_Minute, !0), s.appConfig.getGeneralConfig().timeZone.nameAbbrev && (this.label.string += " " + s.appConfig.getGeneralConfig().timeZone.nameAbbrev)
        }
    }).prototype, "label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = p)) || c));
    i._RF.pop()
}
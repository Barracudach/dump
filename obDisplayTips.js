import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cv.js";

function main() {
    var a, l, p, u;
    o._RF.push({}, "ccc5f7ATh5Ot4XFBI9ODcwN", "obDisplayTips", void 0);
    const {
        ccclass: y,
        property: b
    } = r;
    t("obDisplayTips", (a = b(n), y((u = e((p = class extends s {
        constructor(...t) {
            super(...t), i(this, "obDisplay_text", u, this)
        }
        onLoad() {
            this.obDisplay_text.string = c.config.getStringData("curentTime_display_panel_txt")
        }
    }).prototype, "obDisplay_text", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    o._RF.pop()
}
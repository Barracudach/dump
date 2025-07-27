import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";

function main() {
    var s, c, u, p;
    o._RF.push({}, "b0fb7M5u2VKRrRLORd1vOHp", "obManNumber", void 0);
    const {
        ccclass: b,
        property: m
    } = a;
    e("obManNumber", (s = m(n), b((p = t((u = class extends i {
        constructor(...e) {
            super(...e), r(this, "label", p, this)
        }
        setdata(e) {
            e.totalNum > 0 ? this.label.string = l.config.getStringData("curentTime_curentTime_panel_obWord_text").toUpperCase() + l.StringTools.formatC("（%d / %d）", e.onlineNum, e.totalNum).toUpperCase() : this.label.string = l.config.getStringData("curentTime_curentTime_panel_obWord_text").toUpperCase() + l.StringTools.formatC(" %d ", 0).toUpperCase()
        }
    }).prototype, "label", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = u)) || c));
    o._RF.pop()
}
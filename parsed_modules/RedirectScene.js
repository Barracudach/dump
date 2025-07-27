import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";

function main() {
    var o, i, a;
    c._RF.push({}, "105a43lL0RB65Zgr3ZGGujT", "RedirectScene", void 0);
    const {
        ccclass: l,
        property: u
    } = n;
    e("default", l((a = t((i = class extends s {
        constructor(...e) {
            super(...e), r(this, "sceneName", a, this)
        }
        start() {
            this.sceneName ? cc_mtt.vv.AssetsManager.loadScene(this.sceneName) : cc_mtt.vv.ConsoleLog.error("no scene name")
        }
    }).prototype, "sceneName", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), o = i)) || o);
    c._RF.pop()
}
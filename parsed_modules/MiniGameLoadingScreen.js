import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cv.js";

function main() {
    var a, u, l, p, d;
    r._RF.push({}, "3f889MT98dC4q07jXjNxbmR", "MiniGameLoadingScreen", void 0);
    const {
        ccclass: f,
        property: m
    } = t;
    e("MiniGameLoadingScreen", (a = f("MiniGameLoadingScreen"), u = m(o), a((d = n((p = class extends c {
        constructor(...e) {
            super(...e), i(this, "versionNum", d, this)
        }
        onLoad() {
            this.versionNum.string = "version " + s.config.GET_CLIENT_VERSION()
        }
    }).prototype, "versionNum", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    r._RF.pop()
}
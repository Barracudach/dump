import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var a, c, u, l;
    t._RF.push({}, "b4bd1VvSyxEwpj2XC9y3tDt", "JumioWebview", void 0);
    const {
        ccclass: w,
        property: b
    } = r;
    e("default", (a = b(n), w((l = i((u = class extends s {
        constructor(...e) {
            super(...e), o(this, "webView", l, this)
        }
        onLoad() {}
        start() {
            this.showWebview()
        }
        showWebview() {
            this.webView.node.on("loaded", this.onWebViewLoaded, this), this.webView.node.on("error", this.onWebViewLoadingFailure, this)
        }
        onWebViewLoaded(e) {}
        onWebViewLoadingFailure(e) {}
    }).prototype, "webView", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = u)) || c));
    t._RF.pop()
}
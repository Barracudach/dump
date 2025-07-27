import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";

function main() {
    var i, a, c, u;
    o._RF.push({}, "ffb62Nulh5P0a2IfOxgp5Jh", "PreloadProgress", void 0);
    const {
        ccclass: p,
        property: f
    } = l;
    e("default", (i = f(s), p((u = r((c = class extends n {
        constructor(...e) {
            super(...e), t(this, "label", u, this)
        }
        setProgress(e) {
            this.label.string = e.toString() + "%"
        }
    }).prototype, "label", [i], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = c)) || a));
    o._RF.pop()
}
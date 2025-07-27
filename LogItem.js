import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cc.js";

function main() {
    var i, s, c, u;
    l._RF.push({}, "0fa7e9c+KBCR4d94m2jyUlL", "LogItem", void 0);
    const {
        ccclass: p,
        property: b
    } = o;
    e("LogItem", (i = b(n), p((u = t((c = class extends a {
        constructor(...e) {
            super(...e), r(this, "label", u, this)
        }
        onLoad() {
            this.label.enableWrapText = !0
        }
        start() {}
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || (this.label.string = t[e])
        }
    }).prototype, "label", [i], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = c)) || s));
    l._RF.pop()
}
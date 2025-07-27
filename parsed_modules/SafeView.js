import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";

function main() {
    var p, d, h, b, g, R, y, m;
    r._RF.push({}, "3f802Bj09VBNY639vdajSiS", "SafeView", void 0);
    const {
        ccclass: S,
        property: _
    } = o;
    e("SafeView", (p = _(s), d = _(n), h = _(a), S((R = t((g = class extends f {
        constructor(...e) {
            super(...e), i(this, "safeBtn", R, this), i(this, "safe_text", y, this), i(this, "safePref", m, this), this.safe = null
        }
        onLoad() {
            this.addRegister()
        }
        displaysafe() {
            c.worldNet.RequestGetStrongboxInfo(), this.safe = l(this.safePref), u.getScene().addChild(this.safe), this.safe.setSiblingIndex(c.Enum.ZORDER_TYPE.ZORDER_6), this.safe.name = "safe_pref"
        }
        addRegister() {}
        removeRegister() {}
        onDestroy() {
            this.removeRegister()
        }
        start() {}
    }).prototype, "safeBtn", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(g.prototype, "safe_text", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(g.prototype, "safePref", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = g)) || b));
    r._RF.pop()
}
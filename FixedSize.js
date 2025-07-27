import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, s, u, h, f, p, g, d;
    r._RF.push({}, "4dcc3GhcMZJ4arvIjYeu5BN", "FixedSize", void 0);
    const {
        ccclass: x,
        property: b
    } = o;
    e("FixedSize", (c = b(n), s = b([n]), x((f = t((h = class extends a {
        constructor(...e) {
            super(...e), i(this, "refTarget", f, this), i(this, "fixChildren", p, this), i(this, "fixHeight", g, this), i(this, "fixWidth", d, this)
        }
        update(e) {
            for (let e of this.fixChildren) this.fixHeight && (e.getComponent(l).height = this.refTarget.getComponent(l).height), this.fixWidth && (e.getComponent(l).width = this.refTarget.getComponent(l).width)
        }
    }).prototype, "refTarget", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(h.prototype, "fixChildren", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = t(h.prototype, "fixHeight", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), d = t(h.prototype, "fixWidth", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), u = h)) || u));
    r._RF.pop()
}
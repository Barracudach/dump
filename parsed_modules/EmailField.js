import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as o from "./EditBoxValidator.js";

function main() {
    var l, u, c, d, s, p;
    a._RF.push({}, "5bd08QZA9VEiKrngJn6+AnW", "EmailField", void 0);
    const {
        ccclass: f,
        property: b
    } = r;
    e("default", (l = b(n), u = b(n), f((s = t((d = class extends o {
        constructor(...e) {
            super(...e), i(this, "addButton", s, this), i(this, "alternateRegistrationPanelNode", p, this), this.addVerificationTypeInValue = !1
        }
        addValueToObject(e) {
            var t;
            null != (t = this.node) && t.active && (this.addVerificationTypeInValue && (e.verificationType = "Email"), super.addValueToObject(e))
        }
    }).prototype, "addButton", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(d.prototype, "alternateRegistrationPanelNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = d)) || c));
    a._RF.pop()
}
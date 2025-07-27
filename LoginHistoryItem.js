import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var l, a, u, c, p, g, h, y;
    n._RF.push({}, "78543KiGsFC7ZYsWZ3LADab", "LoginHistoryItem", void 0);
    const {
        ccclass: b,
        property: d
    } = o;
    t("LoginHistoryItem", (l = d(r), a = d(r), u = d(r), b((g = e((p = class extends s {
        constructor(...t) {
            super(...t), i(this, "dateTime", g, this), i(this, "ip", h, this), i(this, "location", y, this)
        }
        init(t) {
            null != t ? (this.dateTime.string = t.loggedAtPretty, this.ip.string = t.ip || "", this.location.string = t.countryName) : this.node.destroy()
        }
        updateSVReuseData(t, e) {
            e.length <= 0 || e.length - 1 < t || this.init(e[t])
        }
    }).prototype, "dateTime", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(p.prototype, "ip", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(p.prototype, "location", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = p)) || c));
    n._RF.pop()
}
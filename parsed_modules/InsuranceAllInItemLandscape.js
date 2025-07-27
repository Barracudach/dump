import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as c from "./cc.js";
import * as i from "./ThemeSystem.js";
import * as l from "./InsuranceAllInItem.js";

function main() {
    var o, s, a, h, u, m, p, f;
    n._RF.push({}, "005c9YElBJLU6Cm1J/whRiF", "InsuranceAllInItemLandscape", void 0);
    const {
        ccclass: T,
        property: d
    } = c;
    e("default", (o = d(i), s = d(i), a = d(i), T((m = t((u = class extends l {
        constructor(...e) {
            super(...e), r(this, "descTheme", m, this), r(this, "normalTheme", p, this), r(this, "purchaseTheme", f, this)
        }
        setTextDescriptionColor(e) {
            e ? this.descTheme.setColorScheme(this.purchaseTheme.colorScheme, this.purchaseTheme.colorSchemeOther) : this.descTheme.setColorScheme(this.normalTheme.colorScheme, this.normalTheme.colorSchemeOther)
        }
    }).prototype, "descTheme", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(u.prototype, "normalTheme", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(u.prototype, "purchaseTheme", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = u)) || h));
    n._RF.pop()
}
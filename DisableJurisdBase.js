import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as c from "./AppConfig.js";
import * as u from "./Enum.js";
import * as p from "./ThemeSystemType.js";

function main() {
    var l, a, h, d, f, m, g, y, b;
    n._RF.push({}, "d48d60xsZhK+rvOyNF+eoYe", "DisableJurisdBase", void 0);
    const {
        ccclass: x,
        property: T,
        executeInEditMode: I,
        disallowMultiple: A,
        playOnFocus: B
    } = r;
    e("default", (l = T({
        tooltip: "Include jurisdictions or exclude them"
    }), a = T({
        type: s(u),
        displayName: "Affect Brands"
    }), h = T({
        type: s(p),
        displayName: "Affect Themes"
    }), x(d = A(d = I(d = B((m = t((f = class extends o {
        constructor(...e) {
            super(...e), i(this, "useInclude", m, this), i(this, "exceptAppBrands", g, this), i(this, "useIncludeTheme", y, this), i(this, "exceptThemeConfig", b, this), this._isFocus = void 0
        }
        isShow() {
            let e = !1,
                t = !1;
            if (this.exceptThemeConfig.length > 0)
                for (let e = 0; e < this.exceptThemeConfig.length; e++) {
                    this.exceptThemeConfig[e] == c.Instance.themeUse && (t = !0)
                }
            if (this.exceptAppBrands.length > 0)
                for (let t = 0; t < this.exceptAppBrands.length; t++) {
                    if (this.exceptAppBrands[t] == c.Instance.getAppBrand()) {
                        e = !0;
                        break
                    }
                }
            return (this.useInclude ? e : !e) && (this.useIncludeTheme ? t : !t)
        }
        onLoad() {
            this.reload()
        }
        reload() {}
        onFocusInEditor() {
            this._isFocus = !0, this.reload()
        }
        onLostFocusInEditor() {
            this._isFocus = !1
        }
        update() {}
    }).prototype, "useInclude", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), g = t(f.prototype, "exceptAppBrands", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = t(f.prototype, "useIncludeTheme", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), b = t(f.prototype, "exceptThemeConfig", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), d = f)) || d) || d) || d) || d));
    n._RF.pop()
}
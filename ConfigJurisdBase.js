import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./AppConfig.js";
import * as p from "./Enum.js";
import * as a from "./ThemeSystemType.js";

function main() {
    var h, f, c, d, m, b, y, g, C, w, P, B, v, _, x;
    n._RF.push({}, "9b0d4JhIlFGH5bmbE7slAfS", "ConfigJurisdBase", void 0);
    const {
        ccclass: T,
        property: I,
        disallowMultiple: A,
        executeInEditMode: D,
        playOnFocus: R
    } = r;
    e("ConfigJurisdBase", (h = I({
        tooltip: "Path of the file to be loaded, without extension, relative to selected jurisdiction bundle from `bundles` folder"
    }), f = I({
        tooltip: "Show preview when selected"
    }), c = I({
        tooltip: "Use common bundle"
    }), d = I({
        type: s(p),
        displayName: "Affect Brands"
    }), m = I({
        type: s(a),
        displayName: "Affect Themes"
    }), T(b = A(b = D(b = R(((x = class e extends o {
        constructor(...e) {
            super(...e), i(this, "_filePath", g, this), i(this, "_preview", C, this), i(this, "_useCommonBundle", w, this), i(this, "useInclude", P, this), i(this, "exceptAppBrands", B, this), i(this, "useIncludeTheme", v, this), i(this, "exceptThemeConfig", _, this), this._bundle = null, this.fileType = l
        }
        set filePath(e) {
            this._filePath = e, this.reload()
        }
        get filePath() {
            return this._filePath
        }
        set preview(e) {
            this._preview = e, this._preview ? this.reload() : this.clearPreview()
        }
        get preview() {
            return this._preview
        }
        set useCommonBundle(e) {
            this._useCommonBundle = e, this.reload()
        }
        get useCommonBundle() {
            return this._useCommonBundle
        }
        get bundle() {
            return this._bundle
        }
        set bundle(t) {
            this._bundle = t;
            let i = this.fileUID;
            i && (e.filesRefCount[i] ? e.filesRefCount[i]++ : e.filesRefCount[i] = 1)
        }
        get fileUID() {
            return this.bundle && this.filePath ? this.bundle.name + "/" + this.filePath : null
        }
        onDestroy() {
            let t = this.fileUID;
            t && (e.filesRefCount[t] ? (e.filesRefCount[t]--, 0 == e.filesRefCount[t] ? this.bundle.release(this.filePath, this.fileType) : e.filesRefCount[t] < 0 && (e.filesRefCount[t] = 0)) : this.bundle.release(this.filePath, this.fileType))
        }
        onDisable() {}
        onFocusInEditor() {
            this.filePath && this.clearPreview() && Editor.Message.send("scene", "save-scene", !0), this.reload()
        }
        onLostFocusInEditor() {
            this.clearPreview()
        }
        reload() {
            this.isExcluded() ? this.disable() : this.filePath && this.loadBundle(this.useCommonBundle)
        }
        isExcluded() {
            let e = !1,
                t = !1;
            if (this.exceptAppBrands.length > 0)
                for (let t = 0; t < this.exceptAppBrands.length; t++) {
                    if (this.exceptAppBrands[t] == u.Instance.getAppBrand()) {
                        e = !0;
                        break
                    }
                }
            if (this.exceptThemeConfig.length > 0)
                for (let e = 0; e < this.exceptThemeConfig.length; e++) {
                    if (this.exceptThemeConfig[e] == u.Instance.themeUse) {
                        t = !0;
                        break
                    }
                }
            return !((this.useInclude ? e : !e) && (this.useIncludeTheme ? t : !t))
        }
        loadBundle(e) {}
        clearPreview() {
            return !0
        }
        disable() {}
    }).filesRefCount = {}, g = t((y = x).prototype, "_filePath", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), t(y.prototype, "filePath", [I], Object.getOwnPropertyDescriptor(y.prototype, "filePath"), y.prototype), C = t(y.prototype, "_preview", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), t(y.prototype, "preview", [I], Object.getOwnPropertyDescriptor(y.prototype, "preview"), y.prototype), w = t(y.prototype, "_useCommonBundle", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), t(y.prototype, "useCommonBundle", [I], Object.getOwnPropertyDescriptor(y.prototype, "useCommonBundle"), y.prototype), P = t(y.prototype, "useInclude", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), B = t(y.prototype, "exceptAppBrands", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = t(y.prototype, "useIncludeTheme", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), _ = t(y.prototype, "exceptThemeConfig", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = y)) || b) || b) || b) || b));
    n._RF.pop()
}
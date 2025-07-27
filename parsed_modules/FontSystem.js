import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./FontSystemInfo.js";
import * as r from "./FontSystemModel.js";
import * as c from "./cv.js";
import * as f from "./AutoWrapAndLimitLengthLabel.js";
import * as h from "./AutoResizeLabel.js";

function main() {
    var S, p, b, d, m, y;
    n._RF.push({}, "cbc90ovybVIkqz4wIFsV5Ji", "FontSystem", void 0);
    const {
        ccclass: F,
        requireComponent: z,
        menu: g,
        property: L
    } = s;
    t("default", (S = z(l), p = g("Design System/Font System"), b = L(o), F(d = S(d = p((y = e((m = class extends u {
        constructor(...t) {
            super(...t), this.editorFocus = !1, this.label = null, i(this, "ignoreUpdateFontSize", y, this)
        }
        applyFont(t = !1) {
            a(this, !0) && this.node.active && (null == this.label && (this.label = this.getComponent(l)), null == this.label && (this.label = this.getComponent(f)), null == this.label && (this.label = this.getComponent(h)), super.applyFont(!1))
        }
        getFontAndApply(t) {
            if (this.label) {
                if (this.label.isBold = !!this.useSystemDefaultFont && this.fontCustomWeight > r.W600, this.label.isItalic = !1, this.useSystemDefaultFont) this.label.fontFamily = this.getSystemFontName(), this.label.font = null;
                else {
                    var e;
                    if (!t || (null == (e = this.label.font) ? void 0 : e.name) == (null == t ? void 0 : t.name)) return void this.updateLabelSize();
                    this.label.font = t
                }
                this.label.useSystemFont = this.useSystemDefaultFont, this.updateLabelSize()
            }
        }
        updateLabelSize() {
            if (!this.ignoreUpdateFontSize && a(this.label)) {
                const t = this.fontScaleFactor();
                this.label.fontSize = t * this.fontSize
            }
        }
        fontScaleFactor() {
            let t = c.config.getCurrentLanguageDetails();
            return null == t.fontSizeScale || 0 == t.fontSizeScale.fontSizeScale || t.fontSizeScale.landscapeOnly && !c.appConfig.isLandscapeLayout || this.fontSize >= t.fontSizeScale.onlySmallerThan ? 1 : 1 + (t.fontSizeScale.onlySmallerThan - this.fontSize) * t.fontSizeScale.fontSizeScale
        }
        setIgnoreUpdateFontSize(t) {
            this.ignoreUpdateFontSize = t
        }
    }).prototype, "ignoreUpdateFontSize", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), d = m)) || d) || d) || d));
    n._RF.pop()
}
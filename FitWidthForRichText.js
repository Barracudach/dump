import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./FontSystemForRichText.js";
import * as f from "./NodeTools.js";

function main() {
    var g, x, T, p, S, z, _, F, b, y, m, C;
    n._RF.push({}, "9eca22ixnxIjL46WoLydwXw", "FitWidthForRichText", void 0);
    const {
        ccclass: E,
        property: W,
        requireComponent: N,
        menu: R,
        executeInEditMode: v,
        playOnFocus: D
    } = a;
    t("default", (g = N(o), x = R("Design System/Fit Width for RichText"), T = W(s), p = W(h), S = W({
        type: r,
        visible: function() {
            return this.fitByTarget
        }
    }), z = W({
        type: s,
        visible: function() {
            return !this.fitByTarget
        }
    }), E(_ = v(_ = D(_ = g(_ = x((b = i((F = class extends c {
        constructor(...t) {
            super(...t), e(this, "baseFontSize", b, this), e(this, "fitByTarget", y, this), e(this, "target", m, this), e(this, "maxWidth", C, this), this.editorFocus = !1, this._richText = null, this._isUpdatingRichTextFontSize = !1
        }
        onLoad() {
            this._richText = this.getComponent(o), d(this._richText) ? this.baseFontSize = this._richText.fontSize : u("Need a RichText component"), this.fitByTarget && d(this.target) && (this.maxWidth = f.getNodeWidth(this.target))
        }
        onEnable() {
            d(this._richText) && (this._richText.node.on(r.EventType.SIZE_CHANGED, this._richTextSizeChanged, this), this.target.on(r.EventType.SIZE_CHANGED, this._targetSizeChanged, this))
        }
        onDisable() {
            d(this._richText) && (this._richText.node.off(r.EventType.SIZE_CHANGED, this._richTextSizeChanged, this), this.target.off(r.EventType.SIZE_CHANGED, this._targetSizeChanged, this))
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            this.editorFocus && this.baseFontSize <= 0 && (this.baseFontSize = this._richText.fontSize)
        }
        _richTextSizeChanged() {
            if (this._isUpdatingRichTextFontSize) return;
            let t = this.getComponent(l),
                i = f.getNodeWidth(this._richText.node);
            if (i > this.maxWidth) {
                this._isUpdatingRichTextFontSize = !0;
                let e = Math.floor(this.baseFontSize * (this.maxWidth / i));
                t && (t.fontSize = e), this._richText.fontSize = e, this._isUpdatingRichTextFontSize = !1
            } else this._richText.fontSize < this.baseFontSize && (t && (t.fontSize = this.baseFontSize), this._richText.fontSize = this.baseFontSize)
        }
        _targetSizeChanged() {
            if (this.fitByTarget && d(this.target)) {
                let t = f.getNodeWidth(this.target);
                if (Math.abs(this.maxWidth - t) <= Number.EPSILON) return;
                this.maxWidth = t, this._isUpdatingRichTextFontSize = !1, this._richTextSizeChanged()
            }
        }
    }).prototype, "baseFontSize", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), y = i(F.prototype, "fitByTarget", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), m = i(F.prototype, "target", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(F.prototype, "maxWidth", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), _ = F)) || _) || _) || _) || _) || _));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./FontSystem.js";
import * as h from "./FontSystemModel.js";
import * as c from "./FontSystemModel.js";
import * as a from "./ThemeSystem.js";
import * as p from "./ColorSystemType.js";
import * as f from "./ColorSystemTypeOther.js";

function main() {
    var m, b, y, d, g, S, z, C, _, x, F, w, I, T, L, v;
    o._RF.push({}, "279cdQiXzxKK7J0kiXEX12X", "DesignSystemInput", void 0);
    const {
        ccclass: W,
        property: D,
        executeInEditMode: E,
        playOnFocus: O
    } = r;
    t("default", (m = D({
        type: n
    }), b = D({
        type: n
    }), y = D({
        type: s
    }), d = D({
        visible: function() {
            return 1 == this.useCustomFontSize
        }
    }), g = D({
        visible: function() {
            return 1 == this.useCustomFontSize
        }
    }), W(S = E(S = O((C = e((z = class extends u {
        constructor(...t) {
            super(...t), i(this, "left_icon", C, this), i(this, "right_icon", _, this), i(this, "edit_box", x, this), i(this, "showLeftIcon", F, this), i(this, "showRightIcon", w, this), i(this, "useCustomFontSize", I, this), i(this, "fontSize", T, this), i(this, "placeholderSize", L, this), i(this, "useCustomTheme", v, this), this.editorFocus = !1
        }
        onLoad() {
            this.setIcons(), this.setTextStyle()
        }
        setTextStyle() {
            if (!this.useCustomTheme && null != this.edit_box) {
                let t = this.edit_box.textLabel.getComponent(a),
                    e = this.edit_box.textLabel.getComponent(l);
                t.setColorScheme(p.Other, f.TypoGraphyMain), e.fontWeight = c.Custom, e.fontCustomWeight = h.W400, e.fontSize = this.fontSize;
                let i = this.edit_box.placeholderLabel.getComponent(a),
                    o = this.edit_box.placeholderLabel.getComponent(l);
                i.setColorScheme(p.Other, f.TypoGraphySecond), o.fontWeight = c.Custom, o.fontCustomWeight = h.W600, o.fontSize = this.placeholderSize
            }
        }
        setIcons() {
            this.left_icon && (this.left_icon.active = this.showLeftIcon), this.right_icon && (this.right_icon.active = this.showRightIcon)
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            this.editorFocus && (this.setIcons(), this.setTextStyle())
        }
    }).prototype, "left_icon", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(z.prototype, "right_icon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(z.prototype, "edit_box", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(z.prototype, "showLeftIcon", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), w = e(z.prototype, "showRightIcon", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), I = e(z.prototype, "useCustomFontSize", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), T = e(z.prototype, "fontSize", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 28
        }
    }), L = e(z.prototype, "placeholderSize", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 20
        }
    }), v = e(z.prototype, "useCustomTheme", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), S = z)) || S) || S) || S));
    o._RF.pop()
}
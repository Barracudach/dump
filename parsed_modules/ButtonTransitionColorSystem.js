import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as u from "./AppConfig.js";
import * as a from "./ThemeSystemModel.js";

function main() {
    var h, p, C, c, d, m, b, g, f, y, T, w, B, v;
    r._RF.push({}, "e526eSFxuhK/J1pgN9zi9rQ", "ButtonTransitionColorSystem", void 0);
    const {
        ccclass: F,
        property: z,
        executeInEditMode: I,
        playOnFocus: S,
        requireComponent: x,
        executionOrder: A,
        menu: D
    } = n;
    o("default", (h = x(i), p = A(-1), C = D("Design System/Button Transition Color System"), c = z({
        tooltip: "Button Color",
        type: a
    }), d = z({
        tooltip: "Button Color when pressed",
        type: a
    }), m = z({
        tooltip: "Button Color when mouse hover it",
        type: a
    }), b = z({
        tooltip: "Button Color when disable",
        type: a
    }), F(g = I(g = S(g = h(g = p(g = C((y = e((f = class extends s {
        constructor(...o) {
            super(...o), t(this, "shouldAutoUpdateButtonColors", y, this), this.editorFocus = !1, t(this, "normalColor", T, this), t(this, "hoverColor", w, this), t(this, "pressedColor", B, this), t(this, "disabledColor", v, this)
        }
        onLoad() {
            this.onThemeChanged(), l.on("themechange", this.onThemeChanged, this)
        }
        onThemeChanged() {
            this.setThemeColor(u.Instance.themeUse), this.updateInteractionColors()
        }
        setThemeColor(o) {
            this.normalColor.setTheme(o), this.hoverColor.setTheme(o), this.pressedColor.setTheme(o), this.disabledColor.setTheme(o)
        }
        updateInteractionColors() {
            if (!this.shouldAutoUpdateButtonColors) return;
            let o = this.getComponent(i);
            null != o && o.transition === i.Transition.COLOR && (o.normalColor = this.normalColor.getColor(), o.hoverColor = this.hoverColor.getColor(), o.pressedColor = this.pressedColor.getColor(), o.disabledColor = this.disabledColor.getColor())
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(o) {
            this.editorFocus && this.updateInteractionColors()
        }
    }).prototype, "shouldAutoUpdateButtonColors", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), T = e(f.prototype, "normalColor", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a
        }
    }), w = e(f.prototype, "hoverColor", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a
        }
    }), B = e(f.prototype, "pressedColor", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a
        }
    }), v = e(f.prototype, "disabledColor", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a
        }
    }), g = f)) || g) || g) || g) || g) || g) || g));
    r._RF.pop()
}
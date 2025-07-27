import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ThemeSystem.js";
import * as a from "./ToggleSwitch.js";
import * as u from "./ThemeSystemType.js";
import * as s from "./ThemeSystemType.js";
import * as m from "./ColorSystemType.js";
import * as b from "./ColorSystemWeight.js";
import * as g from "./ColorSystemTypeOther.js";

function main() {
    var y, S, p, k, C, f, d, v, T, O, N, A, W, w, z, B, D, _, H, I, R, x, F, J, L, P, j, E, K, M, U, V, X, q, G, Q;
    r._RF.push({}, "fce03KaImpIOpo0JtVXJspo", "SettingToggleSwitchHandler", void 0);
    const {
        ccclass: Y,
        property: Z
    } = l;
    e("default", (y = Z(i), S = Z(c), p = Z({
        type: n(s)
    }), k = Z({
        type: n(m)
    }), C = Z({
        type: n(b),
        visible: function() {
            return this.knobActiveColorScheme != m.Other
        }
    }), f = Z({
        type: n(g),
        visible: function() {
            return this.knobActiveColorScheme == m.Other
        }
    }), d = Z({
        type: n(m)
    }), v = Z({
        type: n(g),
        visible: function() {
            return this.knobNormalColorScheme == m.Other
        }
    }), T = Z({
        type: n(b),
        visible: function() {
            return this.knobNormalColorScheme != m.Other
        }
    }), O = Z(c), N = Z({
        type: n(m)
    }), A = Z({
        type: n(b),
        visible: function() {
            return this.colorScheme != m.Other
        }
    }), W = Z({
        type: n(m)
    }), w = Z({
        type: n(b),
        visible: function() {
            return this.backgroundNormalColorScheme != m.Other
        }
    }), z = Z({
        type: n(g),
        visible: function() {
            return this.backgroundNormalColorScheme == m.Other
        }
    }), B = Z({
        type: n(g),
        visible: function() {
            return this.backgroundActiveColorScheme == m.Other
        }
    }), Y((H = t((_ = class extends a {
        constructor(...e) {
            super(...e), o(this, "knobWidget", H, this), o(this, "knobThemeSystem", I, this), o(this, "themeType", R, this), o(this, "knobActiveColorScheme", x, this), o(this, "knobActiveColorWeight", F, this), o(this, "knobActiveColorSchemeOther", J, this), o(this, "knobNormalColorScheme", L, this), o(this, "knobNormalColorSchemeOther", P, this), o(this, "knobNormalColorWeight", j, this), o(this, "backgroundThemeSystem", E, this), o(this, "backgroundActiveColorScheme", K, this), o(this, "backgroundActiveColorWeight", M, this), o(this, "backgroundNormalColorScheme", U, this), o(this, "backgroundNormalColorWeight", V, this), o(this, "backgroundNormalColorSchemeOther", X, this), o(this, "backgroundActiveColorSchemeOther", q, this), o(this, "backgroundActiveOpacity", G, this), o(this, "backgroundNormalOpacity", Q, this)
        }
        setStatus(e) {
            let t = this.knobWidget,
                o = 0 != t.left ? t.left : t.right;
            t.isAlignLeft = !e, t.isAlignRight = e, t.left = o, t.right = o, t.updateAlignment(), e ? (this.knobThemeSystem.hasColorSystemTypeOfWeight(this.knobActiveColorScheme) ? this.knobThemeSystem.setColorSystemWeight(this.knobActiveColorScheme, this.knobActiveColorWeight) : this.knobThemeSystem.setColorScheme(this.knobActiveColorScheme, this.knobActiveColorSchemeOther), this.backgroundThemeSystem.hasColorSystemTypeOfWeight(this.backgroundActiveColorScheme) ? this.backgroundThemeSystem.setColorSystemWeight(this.backgroundActiveColorScheme, this.backgroundActiveColorWeight) : this.backgroundThemeSystem.setColorScheme(this.backgroundActiveColorScheme, this.backgroundActiveColorSchemeOther)) : (this.knobThemeSystem.hasColorSystemTypeOfWeight(this.knobNormalColorScheme) ? this.knobThemeSystem.setColorSystemWeight(this.knobNormalColorScheme, this.knobNormalColorWeight) : this.knobThemeSystem.setColorScheme(this.knobNormalColorScheme, this.knobNormalColorSchemeOther), this.backgroundThemeSystem.hasColorSystemTypeOfWeight(this.backgroundNormalColorScheme) ? this.backgroundThemeSystem.setColorSystemWeight(this.backgroundNormalColorScheme, this.backgroundNormalColorWeight) : this.backgroundThemeSystem.setColorScheme(this.backgroundNormalColorScheme, this.backgroundNormalColorSchemeOther)), this.backgroundThemeSystem.node.getComponent(h).opacity = e ? this.backgroundActiveOpacity : this.backgroundNormalOpacity
        }
        setSwitchStatus(e) {
            this.setStatus(e)
        }
    }).prototype, "knobWidget", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(_.prototype, "knobThemeSystem", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(_.prototype, "themeType", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u
        }
    }), x = t(_.prototype, "knobActiveColorScheme", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.Nero
        }
    }), F = t(_.prototype, "knobActiveColorWeight", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.W400
        }
    }), J = t(_.prototype, "knobActiveColorSchemeOther", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.Blue
        }
    }), L = t(_.prototype, "knobNormalColorScheme", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.Nero
        }
    }), P = t(_.prototype, "knobNormalColorSchemeOther", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.Blue
        }
    }), j = t(_.prototype, "knobNormalColorWeight", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.W400
        }
    }), E = t(_.prototype, "backgroundThemeSystem", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(_.prototype, "backgroundActiveColorScheme", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.Nero
        }
    }), M = t(_.prototype, "backgroundActiveColorWeight", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.W400
        }
    }), U = t(_.prototype, "backgroundNormalColorScheme", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.Nero
        }
    }), V = t(_.prototype, "backgroundNormalColorWeight", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.W400
        }
    }), X = t(_.prototype, "backgroundNormalColorSchemeOther", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.Blue
        }
    }), q = t(_.prototype, "backgroundActiveColorSchemeOther", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.Blue
        }
    }), G = t(_.prototype, "backgroundActiveOpacity", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Q = t(_.prototype, "backgroundNormalOpacity", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), D = _)) || D));
    r._RF.pop()
}
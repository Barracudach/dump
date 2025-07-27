import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as n from "./ThemeSystem.js";
import * as c from "./ColorSystemType.js";
import * as m from "./ColorSystemWeight.js";
import * as u from "./ColorSystemTypeOther.js";

function main() {
    var a, y, S, p, x, C, v, f, T, b, g, O, N, d, W, M, A, _, z;
    o._RF.push({}, "3f1c4TqE4tCDpQ6iZgifsFu", "ButtonTextWithHightlight", void 0);
    const {
        ccclass: E,
        property: w
    } = h;
    e("default", (a = w(n), y = w(r), S = w({
        type: s(c)
    }), p = w({
        type: s(m),
        visible: function() {
            return this.textActiveColorScheme != c.Other
        }
    }), x = w({
        type: s(u),
        visible: function() {
            return this.textActiveColorScheme == c.Other
        }
    }), C = w({
        type: s(c)
    }), v = w({
        type: s(u),
        visible: function() {
            return this.textNormalColorScheme == c.Other
        }
    }), f = w({
        type: s(m),
        visible: function() {
            return this.textNormalColorScheme != c.Other
        }
    }), E((g = t((b = class extends l {
        constructor(...e) {
            super(...e), i(this, "textThemeSystem", g, this), i(this, "activeNodeIsOn", O, this), i(this, "textActiveColorScheme", N, this), i(this, "textActiveColorWeight", d, this), i(this, "textActiveColorSchemeOther", W, this), i(this, "textNormalColorScheme", M, this), i(this, "textNormalColorSchemeOther", A, this), i(this, "textNormalColorWeight", _, this), i(this, "isOn", z, this), this._isMouseHover = !1
        }
        onLoad() {
            this.node.on(r.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.on(r.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseOver() {
            1 != this._isMouseHover && (this._isMouseHover = !0, this.setMouseOverColorTheme())
        }
        setMouseOverColorTheme() {
            this.textThemeSystem && this.textThemeSystem.setColorScheme(c.Other, u.WhiteCreamy_100)
        }
        onMouseLeave(e = !1) {
            (1 == this._isMouseHover || e) && (this._isMouseHover = !1, this.textThemeSystem && this.setTextTheme(this.activeNodeIsOn.active))
        }
        updateTextTheme() {
            0 == this._isMouseHover ? this.setTextTheme(this.activeNodeIsOn.active) : this.setMouseOverColorTheme()
        }
        setTextTheme(e) {
            e ? this.textThemeSystem.hasColorSystemTypeOfWeight(this.textActiveColorScheme) ? this.textThemeSystem.setColorSystemWeight(this.textActiveColorScheme, this.textActiveColorWeight) : this.textThemeSystem.setColorScheme(this.textActiveColorScheme, this.textActiveColorSchemeOther) : this.textThemeSystem.hasColorSystemTypeOfWeight(this.textNormalColorScheme) ? this.textThemeSystem.setColorSystemWeight(this.textNormalColorScheme, this.textNormalColorWeight) : this.textThemeSystem.setColorScheme(this.textNormalColorScheme, this.textNormalColorSchemeOther)
        }
    }).prototype, "textThemeSystem", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(b.prototype, "activeNodeIsOn", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(b.prototype, "textActiveColorScheme", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c.Gold
        }
    }), d = t(b.prototype, "textActiveColorWeight", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.W400
        }
    }), W = t(b.prototype, "textActiveColorSchemeOther", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.Blue
        }
    }), M = t(b.prototype, "textNormalColorScheme", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c.Vulcano
        }
    }), A = t(b.prototype, "textNormalColorSchemeOther", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.Blue
        }
    }), _ = t(b.prototype, "textNormalColorWeight", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.W400
        }
    }), z = t(b.prototype, "isOn", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), T = b)) || T));
    o._RF.pop()
}
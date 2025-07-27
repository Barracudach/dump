import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./ThemeSystem.js";
import * as u from "./ColorSystemType.js";
import * as m from "./ColorSystemTypeOther.js";

function main() {
    var c, a, y, p, T, S;
    s._RF.push({}, "603cd6MCDlFKoR4cgFk75Px", "BottomMenuTabItemHandler", void 0);
    const {
        ccclass: d,
        property: g
    } = r;
    e("default", (c = g(l), a = g(i), d((T = t((p = class extends n {
        constructor(...e) {
            super(...e), o(this, "textThemeSystem", T, this), o(this, "toggle", S, this), this._isMouseHover = !1
        }
        onLoad() {
            this.node.on(h.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.on(h.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseOver() {
            1 != this._isMouseHover && (this._isMouseHover = !0, this.textThemeSystem && this.textThemeSystem.setColorScheme(u.Other, m.Creamy))
        }
        onMouseLeave() {
            1 == this._isMouseHover && (this._isMouseHover = !1, this.textThemeSystem && this.setTextTheme(this.toggle.isChecked))
        }
        setTextTheme(e) {
            e ? this.textThemeSystem.setColorScheme(u.Other, m.TextColorBlueLight) : this.textThemeSystem.setColorScheme(u.Other, m.WhiteCreamy_100)
        }
    }).prototype, "textThemeSystem", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(p.prototype, "toggle", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = p)) || y));
    s._RF.pop()
}
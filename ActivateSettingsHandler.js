import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ThemeSystem.js";
import * as c from "./ColorSystemType.js";
import * as a from "./ColorSystemWeight.js";

function main() {
    var g, m, u, b, p, y, C, S, f, v, T, W, A, d;
    i._RF.push({}, "03501+o7d5B/ppGOBXllukb", "ActivateSettingsHandler", void 0);
    const {
        ccclass: N,
        property: z
    } = s;
    e("default", (g = z(h), m = z({
        type: r(c)
    }), u = z({
        type: r(a),
        visible: function() {
            return this.bgActiveColorScheme != c.Other
        }
    }), b = z({
        type: r(c)
    }), p = z({
        type: r(a),
        visible: function() {
            return this.bgNormalColorScheme != c.Other
        }
    }), y = z(l), N((f = t((S = class extends n {
        constructor(...e) {
            super(...e), o(this, "themeSystems", f, this), o(this, "bgActiveColorScheme", v, this), o(this, "bgActiveColorWeight", T, this), o(this, "bgNormalColorScheme", W, this), o(this, "bgNormalColorWeight", A, this), o(this, "tabTypeToggle", d, this)
        }
        setActive(e) {
            e < 0 || e >= this.themeSystems.length || e >= this.tabTypeToggle.length || (this.themeSystems.forEach(((t, o) => {
                e == o ? t.hasColorSystemTypeOfWeight(this.bgActiveColorScheme) ? t.setColorSystemWeight(this.bgActiveColorScheme, this.bgActiveColorWeight) : t.setColorScheme(this.bgActiveColorScheme) : t.hasColorSystemTypeOfWeight(this.bgNormalColorScheme) ? t.setColorSystemWeight(this.bgNormalColorScheme, this.bgNormalColorWeight) : t.setColorScheme(this.bgNormalColorScheme)
            })), this.tabTypeToggle[e].isChecked = !0)
        }
    }).prototype, "themeSystems", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = t(S.prototype, "bgActiveColorScheme", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c.Nero
        }
    }), T = t(S.prototype, "bgActiveColorWeight", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a.W400
        }
    }), W = t(S.prototype, "bgNormalColorScheme", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c.Nero
        }
    }), A = t(S.prototype, "bgNormalColorWeight", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a.W400
        }
    }), d = t(S.prototype, "tabTypeToggle", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = S)) || C));
    i._RF.pop()
}
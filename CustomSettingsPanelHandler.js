import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./ThemeSystem.js";
import * as h from "./ColorSystemType.js";
import * as p from "./ColorSystemWeight.js";
import * as m from "./ColorSystemTypeOther.js";

function main() {
    var d, g, y, b, f, S, P, T, B, C, v, W, N;
    r._RF.push({}, "61074VE4I9E4LZmGHjol8T6", "CustomSettingsPanelHandler", void 0);
    const {
        ccclass: w,
        property: z
    } = n;
    e("default", (d = z(u), g = z(o), y = z(o), b = z(s), f = z(o), w((T = t((P = class extends l {
        constructor(...e) {
            super(...e), i(this, "tabThemeSystems", T, this), i(this, "tabBackGrounds", B, this), i(this, "pointSeclectBg", C, this), i(this, "pointSeclectBgPos", v, this), i(this, "sliderProgressNode", W, this), i(this, "sliderProgressNodeMaxWidth", N, this)
        }
        activateTab(e) {
            e < 0 || e >= this.tabThemeSystems.length || e >= this.tabBackGrounds.length || (this.tabBackGrounds.forEach(((t, i) => {
                t.active = e == i, e == i && (this.pointSeclectBg.setParent(t.parent), this.pointSeclectBg.position = this.pointSeclectBgPos)
            })), this.tabThemeSystems.forEach(((t, i) => {
                this.setActivateThemeSystem(e == i, t)
            })))
        }
        setProgressBarWidth(e) {
            this.sliderProgressNode.getComponent(a).width = Number(this.sliderProgressNodeMaxWidth) / 100 * e
        }
        setActivateThemeSystem(e = !1, t) {
            t && (e ? t.setColorSystemWeight(h.Gold, p.W400) : t.setColorScheme(h.Other, m.WhiteCreamy_100))
        }
    }).prototype, "tabThemeSystems", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), B = t(P.prototype, "tabBackGrounds", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = t(P.prototype, "pointSeclectBg", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(P.prototype, "pointSeclectBgPos", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c(0, 0, 0)
        }
    }), W = t(P.prototype, "sliderProgressNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(P.prototype, "sliderProgressNodeMaxWidth", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 470
        }
    }), S = P)) || S));
    r._RF.pop()
}
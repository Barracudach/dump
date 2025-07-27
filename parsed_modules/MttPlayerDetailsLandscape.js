import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as o from "./PageTwoTableTuplePkw.js";
import * as l from "./cv.js";
import * as a from "./ThemeSystem.js";
import * as c from "./ColorSystemType.js";
import * as u from "./ColorSystemTypeOther.js";

function main() {
    var p, y, h, g, m, f;
    n._RF.push({}, "7a4e32HCQBMSLB4s8hoqcTU", "MttPlayerDetailsLandscape", void 0);
    const {
        ccclass: S,
        property: T
    } = i;
    e("default", (p = T(s), y = T(a), S((m = t((g = class extends o {
        constructor(...e) {
            super(...e), r(this, "bg", m, this), r(this, "playerNameThemeSystem", f, this)
        }
        setPlace(e) {
            super.setPlace(e), this.node.getSiblingIndex() != e && this.node.setSiblingIndex(e)
        }
        getEliminatedString() {
            return l.StringTools.convertText(super.getEliminatedString().toUpperCase(), 2)
        }
        setInfo(e, t, r, n = 0, s = !1) {
            null != e && (super.setInfo(e, t, r, n, s), this.setActiveBg(t))
        }
        setActiveBg(e = 0) {
            this.bg && (this.bg.enabled = e % 2 != 0)
        }
        showCrown(e) {
            super.showCrown(e);
            let t = e ? u.Star : u.TypoGraphyMain;
            this.playerNameThemeSystem.setColorScheme(c.Other, t)
        }
    }).prototype, "bg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(g.prototype, "playerNameThemeSystem", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = g)) || h));
    n._RF.pop()
}
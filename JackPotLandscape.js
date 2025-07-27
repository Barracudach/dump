import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./JackPot.js";
import * as l from "./TextButton.js";
import * as m from "./ColorSystemType.js";
import * as h from "./ColorSystemTypeOther.js";
import * as u from "./cv.js";

function main() {
    var p, z, f, y, x, b, d, g, T, _;
    n._RF.push({}, "efacdwQ73dBSbFHOIXav5Ym", "JackPotLandscape", void 0);
    const {
        ccclass: C,
        property: S
    } = a;
    e("JackPotLandscape", (p = S(s), z = S(s), f = S(s), y = S(l), C((d = t((b = class extends c {
        constructor(...e) {
            super(...e), i(this, "contentPanel", d, this), i(this, "icn_maximize", g, this), i(this, "icn_minimize", T, this), i(this, "panelResizeButton", _, this), this.isMaximize = !1, this.maxHeight = 1440, this.normalHeight = 1104
        }
        onClickMaximizeButton() {
            this.isMaximize = !this.isMaximize, this.resizeWindow(this.isMaximize)
        }
        onEnable() {
            super.onEnable(), this.isMaximize = !1, this.resizeWindow(this.isMaximize)
        }
        resizeWindow(e) {
            this.panelResizeButton.target = e ? this.icn_minimize : this.icn_maximize, this.contentPanel.getComponent(o).height = e ? this.maxHeight : this.normalHeight, this.icn_maximize.active = !e, this.icn_minimize.active = e, u.resMgr.adaptWidget(this.allJackpotInfo_panel, !0, !1)
        }
        updateMainTabsTextThemeColor() {
            let e = 0,
                t = this.mainTabs_textsThemeSystem.length;
            for (; e < t; e++) {
                this.mainTabs_textsThemeSystem[e].node.parent.getComponent(r).isChecked ? this.mainTabs_textsThemeSystem[e].setColorScheme(m.Other, h.WhiteCreamy_100) : this.mainTabs_textsThemeSystem[e].setColorScheme(m.Other, h.CreamyText)
            }
        }
    }).prototype, "contentPanel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(b.prototype, "icn_maximize", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(b.prototype, "icn_minimize", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(b.prototype, "panelResizeButton", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = b)) || x));
    n._RF.pop()
}
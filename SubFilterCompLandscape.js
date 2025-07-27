import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as l from "./SubfilterComp.js";
import * as c from "./LobbyTools.js";

function main() {
    var a, u, s, p, h;
    r._RF.push({}, "fefafPFk7lLBI6CHhgrPw4C", "SubFilterCompLandscape", void 0);
    const {
        ccclass: d,
        property: m
    } = o;
    e("SubFilterCompLandscape", (a = d("SubFilterCompLandscape"), u = m(n), a((h = t((p = class extends l {
        constructor(...e) {
            super(...e), i(this, "lineMyGameSwitcher", h, this)
        }
        setActiveSubFilterButton(e) {
            super.setActiveSubFilterButton(e), this.reloadSeparatorLine()
        }
        setupButtonLayout(e, t) {}
        reloadSeparatorLine() {
            const e = this.myGameSwitcher.node.parent.children.some((e => {
                var t;
                return (null == (t = this.myGameSwitcher) || null == (t = t.node) ? void 0 : t.active) && e != this.lineMyGameSwitcher && e != this.myGameSwitcher.node && e.active
            }));
            this.lineMyGameSwitcher.active = e
        }
        onFilterToggleClick() {
            var e;
            c.playSoundClick(), null == (e = this.mvcView) || null == e.onFilterButtonClick || e.onFilterButtonClick()
        }
    }).prototype, "lineMyGameSwitcher", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = p)) || s));
    r._RF.pop()
}
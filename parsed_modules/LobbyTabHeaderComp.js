import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./LobbyTools.js";
import * as i from "./DesignSystemButtonBase.js";
import * as b from "./DesignSystemButtonBase.js";

function main() {
    var c, l, u, p, d;
    s._RF.push({}, "8988dsE7yhJ9KeIm+t07Ef8", "LobbyTabHeaderComp", void 0);
    const {
        ccclass: h,
        property: y
    } = a;
    t("LobbyTabHeaderComp", (c = h("LobbyTabHeaderComp"), l = y(i), c((d = e((p = class extends n {
        constructor(...t) {
            super(...t), o(this, "tabs", d, this)
        }
        onLoad() {
            this.showTab(0)
        }
        onClickTab(t, e) {
            r.playSoundTab();
            const o = Number.parseInt(e);
            this.showTab(o)
        }
        showTab(t) {
            for (let e = 0; e < this.tabs.length; e++) {
                const o = this.tabs[e];
                e == t ? (o.btnState = b.pressed, o.isChecked = !0) : (o.btnState = b.normal, o.isChecked = !1)
            }
        }
    }).prototype, "tabs", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = p)) || u));
    s._RF.pop()
}
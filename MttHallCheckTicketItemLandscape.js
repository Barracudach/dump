import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./ColorsystemLobbyV2.js";
import * as n from "./ThemeSystem.js";
import * as r from "./MttHallCheckTicketItem.js";

function main() {
    var s, a, u, p, h;
    o._RF.push({}, "c5a31fMEOlPH6QOZNu46T/E", "MttHallCheckTicketItemLandscape", void 0);
    const {
        ccclass: m,
        property: d
    } = i;
    e("MttHallCheckTicketItemLandscape", (s = m("MttHallCheckTicketItemLandscape"), a = d(n), s((h = t((p = class extends r {
        constructor(...e) {
            super(...e), c(this, "outlineTheme", h, this)
        }
        setSelected(e) {
            this.outlineTheme.colorSchemeLobbyV2 = e ? l.BuyIn_OptionBorder_Selected : l.BuyIn_OptionBorder, this.outlineTheme.applyTheme(), this.toggleNode.active = e
        }
    }).prototype, "outlineTheme", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    o._RF.pop()
}
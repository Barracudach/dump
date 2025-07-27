import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as a from "./LobbyTools.js";
import * as l from "./MttHallCheckTicket.js";

function main() {
    var s, r, u, h, p;
    n._RF.push({}, "46e69DPK9ZCT7RKRy+HFBm0", "MttHallCheckTicketLandscape", void 0);
    const {
        ccclass: d,
        property: k
    } = o;
    e("MttHallCheckTicketLandscape", (s = d("MttHallCheckTicketLandscape"), r = k(c), s((p = t((h = class extends l {
        constructor(...e) {
            super(...e), i(this, "mainPanel", p, this)
        }
        show() {
            this.node.active = !0, a.zoomIn(this.node, this.mainPanel)
        }
        hide() {
            a.zoomOut(this.node, this.mainPanel, (() => {
                this.node.active = !1
            }))
        }
    }).prototype, "mainPanel", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = h)) || u));
    n._RF.pop()
}
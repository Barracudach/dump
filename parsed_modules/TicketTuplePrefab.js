import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./NodeTools.js";

function main() {
    var h, f, k, m, g, d, B, N, y, T, C, w, v, z;
    r._RF.push({}, "c460dR+2QJAMoYigEZJOJBw", "TicketTuplePrefab", void 0);
    const {
        ccclass: P,
        property: D
    } = a;
    t("TicketTuplePrefab", (h = D(n), f = D(n), k = D(o), m = D(c), g = D([l]), d = D([l]), P((y = e((N = class t extends u {
        constructor(...t) {
            super(...t), i(this, "ticketName", y, this), i(this, "ticketNumber", T, this), i(this, "tickLabel", C, this), i(this, "ticketButton", w, this), i(this, "ticketBg", v, this), i(this, "numBg", z, this), this.toolId = 0, this.bagPrefab = null
        }
        ticketClick() {
            if (this.node.parent.children) {
                for (var e of this.node.parent.children) e.getComponent(t).ticketActive(e === this.node);
                this.bagPrefab.handleTempSelectTicket(this.toolId, this.ticketName.string, parseInt(this.ticketNumber.string.substring(1)))
            }
        }
        ticketActive(t) {
            this.ticketButton.getComponent(s).spriteFrame = this.ticketBg[t ? 1 : 0], b.changeNodeColor(this.ticketNumber.node, (new p).fromHEX(t ? "#604F2C" : "#D6DDE4")), this.ticketNumber.node.parent.parent.getComponent(s).spriteFrame = this.numBg[t ? 1 : 0]
        }
        setClickable(t) {
            this.ticketButton.interactable = t
        }
    }).prototype, "ticketName", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(N.prototype, "ticketNumber", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(N.prototype, "tickLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(N.prototype, "ticketButton", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(N.prototype, "ticketBg", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = e(N.prototype, "numBg", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), B = N)) || B));
    r._RF.pop()
}
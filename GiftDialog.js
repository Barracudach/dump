import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./TicketTuplePrefab.js";

function main() {
    var h, p, f, b, g, m, d, k, y, v, P, C, N, _, z, w, B, T, D, F, G, I;
    r._RF.push({}, "06dfblViQFMtZt778Ro+JVH", "GiftDialog", void 0);
    const {
        ccclass: L,
        property: x
    } = c;
    t("GiftDialog", (h = x(n), p = x(o), f = x(o), b = x(n), g = x(n), m = x(n), d = x(n), k = x(o), y = x(l), v = x(a), L((N = e((C = class extends s {
        constructor(...t) {
            super(...t), i(this, "title", N, this), i(this, "confirmPage", _, this), i(this, "choosePage", z, this), i(this, "userId", w, this), i(this, "userName", B, this), i(this, "ticketName", T, this), i(this, "ticketNum", D, this), i(this, "ticketsNode", F, this), i(this, "confirmButton", G, this), this._type = 0, this.callback = void 0, i(this, "avatar", I, this)
        }
        setDialogType(t) {
            this._type = t, 1 == t ? (this.confirmPage.active = !0, this.choosePage.active = !1) : (this.confirmPage.active = !1, this.choosePage.active = !0)
        }
        updateConfirmPage(t, e, i, r) {
            this.ticketName.string = i, this.userName.string = t, this.userId.string = `${e}`, this.ticketName.string = i, this.ticketNum.string = r.toString()
        }
        setAvatar(t) {
            this.avatar.spriteFrame = t
        }
        onConfirmButtonClick() {
            if (1 == this._type && cc_mtt.vv.ConsoleLog.log("onConfirmButtonClick", this._type), 2 == this._type && (cc_mtt.vv.ConsoleLog.log("onConfirmButtonClick", this._type), this.ticketsNode.children)) {
                let t = this.ticketsNode.children[0].getComponent(u).bagPrefab;
                if (!t.selectedTicketCheck) return void t.callPopUpBox("PKW_BAG.TICKET_EMPTY", void 0)
            }
            this.callback && this.callback instanceof Function && this.callback(), this.onClose()
        }
        onClose() {
            this.node.destroy()
        }
    }).prototype, "title", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(C.prototype, "confirmPage", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(C.prototype, "choosePage", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(C.prototype, "userId", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(C.prototype, "userName", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(C.prototype, "ticketName", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(C.prototype, "ticketNum", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(C.prototype, "ticketsNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(C.prototype, "confirmButton", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(C.prototype, "avatar", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = C)) || P));
    r._RF.pop()
}
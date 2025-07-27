import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./observer.js";
import * as c from "./Holdem_Card_ts.js";
import * as u from "./Holdem_Basic_Item.js";

function main() {
    var d, h, p, b, f, m, g, _, H, w;
    o._RF.push({}, "4faec/RTn9F4oZQkw4Ko8Hw", "Holdem_RoomHolders_ts", void 0);
    const {
        ccclass: y,
        property: C
    } = a;
    e("Holdem_RoomHolders", (d = C(r), h = C(n), p = C(n), b = C(n), y(f = s((g = t((m = class extends u {
        constructor(...e) {
            super(...e), i(this, "cardPrefab", g, this), i(this, "dealingShoe", _, this), i(this, "publicDealingShoe", H, this), i(this, "discardArea", w, this), this.newCardToPlayer = e => this.newCard(this.dealingShoe, e), this.newCardToPublic = e => this.newCard(this.publicDealingShoe, e), this.newCard = (e, t) => {
                let i = l(this.cardPrefab);
                return i.getComponent(c).setHoldemRoom(this.holdemRoom), i.getComponent(c).init(e, t), i.getComponent(c)
            }
        }
        onLoad() {
            this.dealingShoe.active = !1, this.publicDealingShoe.active = !1, this.discardArea.active = !1
        }
    }).prototype, "cardPrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(m.prototype, "dealingShoe", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(m.prototype, "publicDealingShoe", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(m.prototype, "discardArea", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = m)) || f) || f));
    o._RF.pop()
}
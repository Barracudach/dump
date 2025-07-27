import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./NewReplayerDetailCard.js";
import * as d from "./Enum.js";
import * as u from "./Enum.js";
import * as l from "./Enum.js";
import * as p from "./Pb.js";

function main() {
    var h, f, C, b, y, m, g, S, w, v;
    a._RF.push({}, "f1850+VZl1O1pcTzKaVzrpD", "NewReplayerCardHolder", void 0);
    const {
        ccclass: D,
        property: M
    } = s;
    e("NewReplayerCardHolder", (h = D("NewReplayerCardHolder"), f = M(i), C = M([c]), h((m = t((y = class extends n {
        constructor(...e) {
            super(...e), r(this, "cardLayout", m, this), r(this, "cards", g, this), r(this, "plo5CardSpace", S, this), r(this, "plo4CardSpace", w, this), r(this, "nlheCardSpace", v, this)
        }
        init() {
            this.cards.forEach((e => {
                e.initDefaultValue()
            }))
        }
        getCards() {
            return this.cards
        }
        hideCards() {
            for (let e = 0; e < this.cards.length; e++) o(this.cards[e]) && o(this.cards[e].node) && (this.cards[e].node.active = !1)
        }
        setCards(e, t = !0, r, a = !1) {
            if (t) {
                Object.values(l).includes(e) || (e = 5 == r.length ? l.Plo5 : 4 == r.length ? l.Plo : l.Texas)
            } else {
                e = Object.values(p.commonProto.MTT_GAME_MODE).includes(e) ? e == p.commonProto.MTT_GAME_MODE.OMAHA ? l.Plo : l.Texas : 4 == r.length ? l.Plo : l.Texas
            }
            for (let t = 0; t < this.cards.length; t++) {
                const i = t;
                if (r && i < r.length) {
                    this.cards[i].node.active = !0;
                    const t = r[i];
                    this.cards[i].updateCardBack(), this.cards[i].setGameID(e), t.number >= 0 ? (this.cards[i].setContent(t.number, t.suit), this.cards[i].setFace(!0)) : this.cards[i].setFace(!1), a && t.number == d.CardNum_MAX && t.suit == u.CardSuit_MAX && (this.cards[i].node.active = !1)
                } else this.cards[i].node.active = !1
            }
            const i = 5 == r.length ? this.plo5CardSpace : 4 == r.length ? this.plo4CardSpace : this.nlheCardSpace;
            this.cardLayout.spacingX = i, this.cardLayout.updateLayout()
        }
    }).prototype, "cardLayout", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(y.prototype, "cards", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = t(y.prototype, "plo5CardSpace", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), w = t(y.prototype, "plo4CardSpace", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), v = t(y.prototype, "nlheCardSpace", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), b = y)) || b));
    a._RF.pop()
}
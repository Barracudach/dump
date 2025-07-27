import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./Enum.js";
import * as s from "./Enum.js";
import * as c from "./cv.js";
import * as l from "./CustomToggleHandler.js";

function main() {
    var u, A, C, D;
    i._RF.push({}, "6ee93NXoPlKAIOx+EVo3nFE", "CardFrontItemHandler", void 0);
    const {
        ccclass: d,
        property: p
    } = o;
    t("default", (u = p(n), d((D = e((C = class extends l {
        constructor(...t) {
            super(...t), r(this, "cardSprites", D, this)
        }
        initialize(t, e, r, i) {
            this.initializeBase(t, r, i);
            const n = [
                [a.CARD_A, s.CARD_DIAMOND],
                [a.CARD_A, s.CARD_CLUB],
                [a.CARD_A, s.CARD_HEART],
                [a.CARD_A, s.CARD_SPADE],
                [a.CARD_K, s.CARD_DIAMOND],
                [a.CARD_Q, s.CARD_CLUB],
                [a.CARD_J, s.CARD_HEART]
            ];
            for (let t = 0; t < n.length; t++) {
                const r = n[t],
                    i = r[1],
                    o = r[0];
                c.resMgr.loadCardFront(e, i, o, [this.cardSprites[t]])
            }
        }
    }).prototype, "cardSprites", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = C)) || A));
    i._RF.pop()
}
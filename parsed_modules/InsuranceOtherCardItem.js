import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./Card.js";

function main() {
    var n;
    e._RF.push({}, "f412fU9W4VNTYeCYnR3etM+", "InsuranceOtherCardItem", void 0);
    t("InsuranceOtherCardItemData", class {
        constructor() {
            this.gameid = 0, this.data = null
        }
    });
    const {
        ccclass: c,
        property: d
    } = s;
    t("InsuranceOtherCardItem", c(n = class extends a {
        constructor(...t) {
            super(...t), this._vCards = []
        }
        onLoad() {
            for (let t = 0; t < this.node.children.length; ++t) {
                let e = this.node.getChildByName(`card_${t}`);
                e && this._vCards.push(e.getComponent(r))
            }
        }
        start() {}
        updateSVReuseData(t, e) {
            for (let t = 0; t < this._vCards.length; ++t) {
                let a = this._vCards[t];
                t < e.length && (null !== e[t] || void 0 !== e[t]) ? (a.setActive(!0), a.setGameID(e[t].gameid), a.setContent(e[t].data.card.number, e[t].data.card.suit), a.setFace(!0), a.setGary(!e[t].data.inOuts)) : a.setActive(!1)
            }
            this.node.active = !0
        }
    }) || n);
    e._RF.pop()
}
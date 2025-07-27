import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./GameReviewItem.js";

function main() {
    var l;
    t._RF.push({}, "b86b4jzm5dIYriLRvKlhcEX", "GameReviewItemLandscape", void 0);
    const {
        ccclass: c
    } = r;
    e("default", c(l = class extends n {
        constructor(...e) {
            super(...e), this.CardNormalSize = new a(52, 72), this.CardPloSize = new a(44, 60), this.CardNormalLength = 2
        }
        updateSVReuseData(e, t) {
            var a;
            if (super.updateSVReuseData(e, t), e < 0 || e >= t.length) return;
            const r = this._vSelfCard.filter((e => e.isActive)).length > this.CardNormalLength ? this.CardPloSize : this.CardNormalSize;
            for (let e = 0; e < this._vSelfCard.length; ++e) {
                const t = this._vSelfCard[e].node;
                s(t) && t.setContentSize(r)
            }
            null == (a = this.panel_self_card) || null == (a = a.getComponent(i)) || a.updateLayout(!0)
        }
    }) || l);
    t._RF.pop()
}
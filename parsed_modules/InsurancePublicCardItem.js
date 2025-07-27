import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./Card.js";

function main() {
    var i, u, o, d;
    r._RF.push({}, "0f20dckjCNEo4JmN6a0qE5T", "InsurancePublicCardItem", void 0);
    t("InsurancePublicCardItemData", class {
        constructor() {
            this.gameid = 0, this.data = null
        }
    });
    const {
        ccclass: l,
        property: p
    } = c;
    t("InsurancePublicCardItem", (i = p(s), l((d = e((o = class extends n {
        constructor(...t) {
            super(...t), a(this, "card", d, this)
        }
        onLoad() {}
        start() {}
        updateSVReuseData(t, e) {
            this.card.setGameID(e.gameid), this.card.setContent(e.data.number, e.data.suit), this.card.setFace(!0), this.node.active = !0
        }
    }).prototype, "card", [i], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = o)) || u));
    r._RF.pop()
}
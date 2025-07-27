import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as u from "./Card.js";

function main() {
    var h, d, m, g, p, I, b, f;
    n._RF.push({}, "bc477HWmiNNbZ83DvM7LhB3", "InsuranceAllInItem", void 0);
    t("InsuranceAllInItemData", class {
        constructor() {
            this.nUID = 0, this.nGameID = 0, this.sPlayerName = "", this.nOutsNum = 0, this.vCards = [], this.bPurchaser = !1
        }
        copyFrom(t) {
            this.nUID = t.nUID, this.sPlayerName = t.sPlayerName, this.nOutsNum = t.nOutsNum, this.bPurchaser = t.bPurchaser, this.vCards = [];
            for (let e = 0; e < t.vCards.length; ++e) this.vCards[e] = t.vCards[e]
        }
    });
    const {
        ccclass: D,
        property: y
    } = a;
    t("InsuranceAllInItem", (h = y(s), d = y(s), m = y(u), D((I = e((p = class extends i {
        constructor(...t) {
            super(...t), r(this, "txt_name", I, this), r(this, "txt_desc", b, this), r(this, "card_array", f, this)
        }
        onLoad() {}
        start() {}
        updateSVReuseData(t, e) {
            let r = l.dataHandler.getUserData().getRemarkData(e.nUID);
            r && r.sRemark.length > 0 ? l.StringTools.setShrinkString(this.txt_name.node, r.sRemark, !0) : l.StringTools.setShrinkString(this.txt_name.node, e.sPlayerName, !0);
            for (let t = 0; t < this.card_array.length; ++t) {
                let r = this.card_array[t];
                t < e.vCards.length ? (r.setGameID(e.nGameID), r.setContent(e.vCards[t].number, e.vCards[t].suit), r.setFace(!0)) : r.setFace(!1)
            }
            e.bPurchaser ? this.txt_desc.string = l.config.getStringData("UITitle85") : this.txt_desc.string = l.StringTools.formatC(l.config.getStringData("UITitle84"), e.nOutsNum), this.setTextDescriptionColor(e.bPurchaser), this.node.active = !0
        }
        setTextDescriptionColor(t) {
            this.txt_desc.node.getComponent(o).color = t ? new c(255, 72, 72) : new c(39, 133, 225)
        }
    }).prototype, "txt_name", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(p.prototype, "txt_desc", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(p.prototype, "card_array", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = p)) || g));
    n._RF.pop()
}
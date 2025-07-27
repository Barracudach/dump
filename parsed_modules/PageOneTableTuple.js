import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./FormatParser.js";

function main() {
    var a, l, p, h, b, y;
    r._RF.push({}, "9d2b4IT0ftFeaeZHobX6kEZ", "PageOneTableTuple", void 0);
    const {
        ccclass: f,
        property: d
    } = c;
    e("PageOneTableTuple", (a = d([o]), l = d([u]), f((b = t((h = class extends i {
        constructor(...e) {
            super(...e), n(this, "tupleLabels", b, this), n(this, "cupIcon", y, this), this.tupleId = 0, this.currencyValue = null
        }
        showCup(e) {
            this.cupIcon[0].active = !0, this.cupIcon[0].getComponent(o).string = e;
            for (let e = 1; e < this.cupIcon.length; e++) this.cupIcon[e].active = !1
        }
        showMoney(e, t = 0) {
            this.tupleLabels[1].node.active = e, e && (this.currencyValue ? this.currencyValue.value = s.ThousandPointFormat(t) : this.tupleLabels[1].string = s.ThousandPointFormat(t))
        }
        setInfo(e, t, n, r, o) {}
        setConvertCurrency(e) {
            this.currencyValue && (this.currencyValue.shouldConvert = e)
        }
    }).prototype, "tupleLabels", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = t(h.prototype, "cupIcon", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = h)) || p));
    r._RF.pop()
}
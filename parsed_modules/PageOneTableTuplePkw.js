import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./NodePage.js";
import * as u from "./FormatParser.js";
import * as c from "./PageOneTableTuple.js";
import * as h from "./StringTools.js";
import * as p from "./CurrencyValue.js";

function main() {
    var g, b, f, d, y, w, P, T, m, k, v, V, z, S;
    n._RF.push({}, "971fe/eWiJMBIlEr7w+Sqtr", "PageOneTableTuplePkw", void 0);
    const {
        ccclass: F,
        property: B
    } = s;
    e("PageOneTableTuplePkw", (g = B(r), b = B([o]), f = B(a), d = B(a), y = B(a), w = B(a), F((m = t((T = class extends c {
        constructor(...e) {
            super(...e), i(this, "tupleBg", m, this), i(this, "bgSf", k, this), i(this, "rank", v, this), i(this, "percentage", V, this), i(this, "chips", z, this), i(this, "tool", S, this), this.tupleId = 0
        }
        showBg() {
            this.tupleBg.spriteFrame = this.bgSf[this.tupleId % 2]
        }
        setRank(e, t) {
            this.rank.string = this.editRank(e), t > 0 && (this.rank.string += `-${this.editRank(t)}`)
        }
        editRank(e) {
            return h.getOrinalNumberText(e)
        }
        showPercentage(e) {
            this.percentage.node.active = e > 0, this.percentage.node.active && (this.percentage.string = l.roundValue(e, 3) + "%")
        }
        showMoney(e, t = 0) {
            this.chips.node.parent.active = e, e && (this.currencyValue ? this.currencyValue.value = u.ThousandPointFormat(u.DisplayGold(t)) : this.chips.string = u.ThousandPointFormat(u.DisplayGold(t)))
        }
        showTool(e, t = "") {
            this.tool.node.active = e, e && (this.tool.string = t)
        }
        showPrize(e, t) {
            this.showMoney(e > 0, e), this.showTool(!!t, null == t ? void 0 : t.Name)
        }
        setInfo(e, t, i, n, r) {
            this.tupleId = t, null == this.currencyValue && (this.currencyValue = this.chips.getComponent(p)), this.currencyValue && this.currencyValue.updateVal("", i, null, n, r), this.showBg(), this.setRank(e.rank, e.rankTail), this.showPercentage(e.proportion), this.showPrize(e.money, e.tool)
        }
    }).prototype, "tupleBg", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "bgSf", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = t(T.prototype, "rank", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(T.prototype, "percentage", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(T.prototype, "chips", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(T.prototype, "tool", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = T)) || P));
    n._RF.pop()
}
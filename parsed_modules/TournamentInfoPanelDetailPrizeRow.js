import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./FormatParser.js";

function main() {
    var l, c, u, h, p, m, f;
    n._RF.push({}, "26864GJk8RHeoOHgk4TeGi3", "TournamentInfoPanelDetailPrizeRow", void 0);
    const {
        ccclass: d,
        property: g
    } = o;
    e("TournamentInfoPanelDetailPrizeRow", (l = d("TournamentInfoPanelDetailPrizeRow"), c = g(i), u = g(i), l((m = t((p = class extends a {
        constructor(...e) {
            super(...e), r(this, "rank", m, this), r(this, "prize", f, this), this.holdemStore = null
        }
        setInfo(e, t) {
            this.holdemStore = t, this.setRank(e.rank), this.setReward(e.money, e.tool)
        }
        setRank(e) {
            this.rank.string = e.toString()
        }
        setReward(e, t) {
            if (!this.holdemStore) return;
            const r = s.ExchangeCurrency_ScientificNotation(e, this.holdemStore.exchangeRate, this.holdemStore.displayCurrency, this.holdemStore.displayCurrency, 2, !0),
                n = t ? cc_mtt.vv.DataManager.i18DataFromServer(t.Name, t.NameI18N) : "";
            s.DisplayGold(e) >= .01 ? (this.prize.string = r, n && (this.prize.string += "\n" + n)) : this.prize.string = n
        }
    }).prototype, "rank", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(p.prototype, "prize", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = p)) || h));
    n._RF.pop()
}
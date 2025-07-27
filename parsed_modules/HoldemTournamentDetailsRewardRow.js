import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./CustomScrollViewItem.js";
import * as o from "./FormatParser.js";

function main() {
    var l, c, u, d, p, h;
    a._RF.push({}, "52411+NJVNErpYnVjDGy05/", "HoldemTournamentDetailsRewardRow", void 0);
    const {
        ccclass: m,
        property: g
    } = n;
    e("default", (l = g(i), c = g(i), m((p = t((d = class extends s {
        constructor(...e) {
            super(...e), r(this, "rankingLabel", p, this), r(this, "rewardLabel", h, this), this._prizeMode = 0
        }
        start() {}
        setData(e) {
            super.setData(e);
            const t = e.prize;
            this.setRank(e.rank, e.rankTail), this.setReward(t.money, t.tool)
        }
        setPrizeMode(e) {
            this._prizeMode = e
        }
        setRank(e, t) {
            this.rankingLabel.string = e.toString(), t && (this.rankingLabel.string += "-" + t)
        }
        setReward(e, t) {
            let r = o.ExchangeCurrency_DisplayGold(e, this.holdemRoom.store.exchangeRate, this.holdemRoom.store.displayCurrency, this.holdemRoom.store.displayCurrency),
                a = t ? cc_mtt.vv.DataManager.i18DataFromServer(t.Name, t.NameI18N) : "";
            o.DisplayGold(e) >= .01 ? (this.rewardLabel.string = r, a && (this.rewardLabel.string += "\n" + a)) : this.rewardLabel.string = a
        }
    }).prototype, "rankingLabel", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(d.prototype, "rewardLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = d)) || u));
    a._RF.pop()
}
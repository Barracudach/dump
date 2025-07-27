import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as a from "./HoldemTournamentDetailsRewardRow.js";
import * as c from "./FormatParser.js";
import * as p from "./mttconfig.js";

function main() {
    var l, u, d, _;
    o._RF.push({}, "7afb5gFpQ5HPJpWvdVRguxJ", "HoldemTournamentDetailsRewardRowLandscape", void 0);
    const {
        ccclass: f,
        property: P
    } = i;
    e("default", (l = P(n), f((_ = t((d = class extends a {
        constructor(...e) {
            super(...e), r(this, "percent", _, this)
        }
        setData(e) {
            super.setData(e), this.setProportion(e.prize.proportion)
        }
        setPrizeMode(e) {
            super.setPrizeMode(e), this.showProportionColum(!(e == p.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_AVERAGE || e == p.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_FIX))
        }
        showProportionColum(e) {
            s(this.percent) && (this.percent.node.active = e)
        }
        setProportion(e) {
            s(this.percent) && this.percent.node.active && (this.percent.string = e > 0 ? c.RoundToDecimal(e, 3).toString() + "%" : "")
        }
    }).prototype, "percent", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = d)) || u));
    o._RF.pop()
}
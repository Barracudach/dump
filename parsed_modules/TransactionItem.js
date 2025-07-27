import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var u, p, d, b, m, h, f, g, y, U, _, B, L, T;
    i._RF.push({}, "9d006iR/CNH/7YssD3dd2Ww", "TransactionItem", void 0);
    const {
        ccclass: D,
        property: F
    } = r;
    e("TransactionItem", (u = F(n), p = F(n), d = F(n), b = F(n), m = F(n), h = F(n), D((y = t((g = class extends l {
        constructor(...e) {
            super(...e), a(this, "timeLabel", y, this), a(this, "gameName", U, this), a(this, "date", _, this), a(this, "initialBalanceLabel", B, this), a(this, "finalBalanceLabel", L, this), a(this, "balanceUpdated", T, this), this.balanceUpdatedUIRenderer = null, this.profitBalanceColor = o(49, 142, 234), this.lossBalanceColor = o(255, 0, 0)
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || this.populateGameData(t[e])
        }
        populateGameData(e) {
            let t = c.Enum.FilterGameType[e.game_type];
            this.timeLabel.string = c.StringTools.formatTime(e.started_at.seconds, c.Enum.eTimeType.Hour_Minute_12), this.gameName.string = c.config.getStringData("Name_" + t, !1, e.game_type), this.date.string = c.StringTools.formatDateTimeByCountry(e.started_at.seconds, !1, !1);
            let a = parseFloat(e.initial_balance),
                i = parseFloat(e.final_balance),
                n = c.numFix.minus(i, a),
                r = n >= 0 ? "+" : "-",
                l = n >= 0 ? this.profitBalanceColor : this.lossBalanceColor;
            n = Math.abs(n), this.balanceUpdated.string = r + n.toFixed(2) + " " + e.currency, this.balanceUpdatedUIRenderer || (this.balanceUpdatedUIRenderer = this.balanceUpdated.node.getComponent(s)), this.balanceUpdatedUIRenderer.color = l, this.initialBalanceLabel.string = a.toFixed(2) + " " + e.currency, this.finalBalanceLabel.string = i.toFixed(2) + " " + e.currency
        }
    }).prototype, "timeLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(g.prototype, "gameName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(g.prototype, "date", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(g.prototype, "initialBalanceLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(g.prototype, "finalBalanceLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(g.prototype, "balanceUpdated", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = g)) || f));
    i._RF.pop()
}
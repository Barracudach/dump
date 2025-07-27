import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./StringTools.js";
import * as c from "./NodePage.js";
import * as h from "./FormatParser.js";
import * as d from "./CurrencyValue.js";
import * as p from "./Enum.js";
import * as g from "./cv.js";

function main() {
    var b, y, f, w, m, P, z, C, T, v, A, R, N, S, k, L;
    r._RF.push({}, "ad4e981XMBEYq04xvyN5ZI2", "MttItemPrizepoolRender", void 0);
    const {
        ccclass: M,
        property: F
    } = l;
    e("default", (b = F(i), y = F(i), f = F(a), w = F(i), m = F(d), P = F(i), z = F(a), M((v = t((T = class extends o {
        constructor(...e) {
            super(...e), this.mvcView = void 0, n(this, "labelRank", v, this), n(this, "labelPercentage", A, this), n(this, "moneyNode", R, this), n(this, "labelAward", N, this), n(this, "currencyPrizePool", S, this), n(this, "labelTool", k, this), n(this, "line", L, this)
        }
        render(e) {
            const {
                id: t,
                data: n,
                modelHall: r
            } = e;
            this.setRank(n.rank, n.rankTail), this.showPrize(n.money, n.tool, r), this.showSeparateLine(t > 0)
        }
        updateDisplayCurrency(e) {
            const {
                data: t,
                modelHall: n
            } = e;
            this.showPrize(t.money, t.tool, n)
        }
        showPercentage(e) {
            this.labelPercentage.node.active = e > 0, this.labelPercentage.node.active && (this.labelPercentage.string = c.roundValue(e, 3) + "%")
        }
        setRank(e, t) {
            this.labelRank.string = t > 0 ? `${e} ~ ${t}` : e.toString()
        }
        setBg(e) {
            this.spriteBg.enabled = e % 2 == 1
        }
        editRank(e) {
            return u.getOrinalNumberText(e)
        }
        showPrize(e, t, n) {
            this.showMoney(e, n), this.showTool(null == t ? void 0 : t.Name)
        }
        showMoney(e, t) {
            const n = t.data.currency,
                r = t.data.convertCurrency,
                i = t.data.displayCurrency,
                a = t.data.currencyRate,
                l = n ? g.appConfig.getWalletConfig().convertStringToCurrencyType(n) : p.None,
                o = i ? g.appConfig.getWalletConfig().convertStringToCurrencyType(i.toString()) : p.None;
            let s = g.currencyManager.convert(l, o, e, a),
                u = h.DisplayGold(s);
            if (u > 0) {
                const e = h.ThousandPointFormat(u),
                    t = this.labelAward.getComponent(d);
                t ? t.updateVal(e, n, r, i, a) : this.labelAward.string = h.GetCurrencyShortSign(n) + e
            } else this.labelAward.string = ""
        }
        showTool(e) {
            e ? (g.appConfig.isLandscapeLayout && (this.labelAward.horizontalAlign = s.LEFT), this.labelAward.string = this.labelAward.string ? this.labelAward.string + " + " + e : e) : this.labelAward.horizontalAlign = s.CENTER
        }
        showSeparateLine(e) {
            this.line && (this.line.active = e)
        }
    }).prototype, "labelRank", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(T.prototype, "labelPercentage", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(T.prototype, "moneyNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(T.prototype, "labelAward", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(T.prototype, "currencyPrizePool", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "labelTool", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(T.prototype, "line", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = T)) || C));
    r._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./CurrencyValue.js";
import * as C from "./TweenControl.js";
import * as m from "./cv.js";

function main() {
    var b, d, f, g, v, w, k, S, x, F, E, z, R, V, A, I, D, G, H, L, B, O, U, M;
    i._RF.push({}, "c4358kwObRNbYJF1le+kJaa", "RedEnvelopeLuckResult", void 0);
    const {
        ccclass: N,
        property: J
    } = a;
    let P = e("RedEnvelopeCurrencyType", function(e) {
        return e[e.Currency_Type_Coin = 0] = "Currency_Type_Coin", e[e.Currency_Type_GameCoin = 1] = "Currency_Type_GameCoin", e[e.Currency_Type_Usdt = 2] = "Currency_Type_Usdt", e[e.Currency_Type_Goods = 3] = "Currency_Type_Goods", e[e.Currency_Type_Diamond = 4] = "Currency_Type_Diamond", e[e.Currency_Type_Sports_Trial_Coin = 5] = "Currency_Type_Sports_Trial_Coin", e[e.Currency_Type_Casino_Coin = 6] = "Currency_Type_Casino_Coin", e
    }({}));
    e("default", (b = J(r), d = J(r), f = J(o), g = J(o), v = J(o), w = J(l), k = J(s), S = J(_), x = J(s), F = J(s), E = J(s), N((V = t((R = class extends u {
        constructor(...e) {
            super(...e), n(this, "bg", V, this), n(this, "panel", A, this), n(this, "moneySF", I, this), n(this, "ticketSF", D, this), n(this, "casinoCoinSF", G, this), n(this, "IconSprite", H, this), n(this, "moneyText", L, this), n(this, "moneyValue", B, this), n(this, "ticketTournamentText", O, this), n(this, "coinsText", U, this), n(this, "ticketText", M, this), this._resultCurrencyType = void 0, this._onHide = null
        }
        set resultCurrencyType(e) {
            switch (this._resultCurrencyType = e, this.hideAllElements(), e) {
                case P.Currency_Type_Goods:
                    this.showTicketElements();
                    break;
                case P.Currency_Type_Usdt:
                    this.showMoneyElements();
                    break;
                case P.Currency_Type_Casino_Coin:
                    this.showCoinElements();
                    break;
                default:
                    throw new Error(`RedEnvelopeLuckResult :: resultCurrencyType : ${e} is not supported!`)
            }
        }
        get resultCurrencyType() {
            return this._resultCurrencyType
        }
        hideAllElements() {
            this.moneyText.node.active = !1, this.moneyValue.node.active = !1, this.ticketTournamentText.node.active = !1, this.ticketText.node.active = !1, this.coinsText.node.active = !1
        }
        showTicketElements() {
            this.IconSprite.spriteFrame = this.ticketSF, this.ticketText.node.active = !0, this.ticketTournamentText.node.active = !0
        }
        showMoneyElements() {
            this.IconSprite.spriteFrame = this.moneySF, this.moneyText.node.active = !0, this.moneyValue.node.active = !0
        }
        showCoinElements() {
            this.IconSprite.spriteFrame = this.casinoCoinSF, this.coinsText.node.active = !0, this.moneyValue.node.active = !0
        }
        show(e = null) {
            this._onHide = e, this.node.active = !0, this.bg.getComponent(c).opacity = 0, this.panel.scale = new p(.95, .95, 1), y.stopAllByTarget(this.bg), h(this.bg.getComponent(c)).to(.2, {
                opacity: 128
            }).start(), y.stopAllByTarget(this.panel), C.scaleAndFade(this.panel, .2, p.ONE, 255)
        }
        setInfo(e, t = 0) {
            this.resultCurrencyType = e, this.moneyValue.value = m.StringTools.serverGoldToShowString(t)
        }
        confirmOnClick() {
            var e;
            y.stopAllByTarget(this.bg), h(this.bg.getComponent(c)).delay(.1).to(.2, {
                opacity: 0
            }).call((() => {
                this.node.active = !1
            })).start(), C.scaleAndFade(this.panel, .2, T(1.05, 1.05, 1.05), 0), null == (e = this._onHide) || e.call(this)
        }
        onDisable() {
            var e;
            null == (e = this._onHide) || e.call(this)
        }
    }).prototype, "bg", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(R.prototype, "panel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(R.prototype, "moneySF", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(R.prototype, "ticketSF", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(R.prototype, "casinoCoinSF", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(R.prototype, "IconSprite", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(R.prototype, "moneyText", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(R.prototype, "moneyValue", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(R.prototype, "ticketTournamentText", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(R.prototype, "coinsText", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(R.prototype, "ticketText", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = R)) || z));
    i._RF.pop()
}
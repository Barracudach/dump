import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./FormatParser.js";
import * as u from "./cv.js";
import * as l from "./Pb.js";
import * as h from "./Translator.js";

function main() {
    var p, m, c, _, b, d, g, y;
    o._RF.push({}, "a575awDzcRMZ4/n09A02YKu", "Holdem_PlayerControlPotButton_ts", void 0);
    const {
        ccclass: v,
        property: D
    } = a;
    t("Holdem_PlayerControlPotButton", (p = D(r), m = D(r), c = D(r), v((d = e((b = class extends s {
        constructor(...t) {
            super(...t), i(this, "rateLabel", d, this), i(this, "valueLabel", g, this), i(this, "potLabel", y, this), this.bbValue = 1, this.anteValue = 1, this.coinMode = 0, this.tableCurrency = null, this.gameMode = null, this.potValue = 0, this._numerator = 1, this._denominator = 1, this._pot = 2100, this._call = 700, this._maxBetCoin = 0, this._minBetCoin = 0, this._lastBetNum = 0, this._isOmaha = !1, this._deskCoin = 0, this._betType = 1, this._isMax = !1, this._overRange = !1, this._maximumBetAmount = 0
        }
        get value() {
            return this.potValue
        }
        set value(t) {
            this.potValue = t, this.valueLabel && (this.valueLabel.string = n.getDataPointValue(t, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck))
        }
        get numerator() {
            return this._numerator
        }
        set numerator(t) {
            this._numerator = t
        }
        get denominator() {
            return this._denominator
        }
        set denominator(t) {
            this._denominator = t
        }
        get pot() {
            return this._pot
        }
        set pot(t) {
            this._pot = t, this.updateValue()
        }
        get call() {
            return this._call
        }
        set call(t) {
            this._call = t, this.updateValue()
        }
        get maximumBetAmount() {
            return this._maximumBetAmount
        }
        set maximumBetAmount(t) {
            this._maximumBetAmount = t, this.updateValue()
        }
        onLoad() {}
        updateValue() {
            let t = this.numerator / this.denominator,
                e = 0;
            10 == this.denominator && 1 == this._betType ? (this.rateLabel.string = this.dealRaiseDataNumber(this.numerator), 101 != this.numerator ? (e = Math.round(this.bbValue * t), this.value = e) : (e = Math.round(this._lastBetNum), this.value = e)) : (100 == this.denominator && this.numerator >= 10 ? this.rateLabel.string = this.dealRaiseDataNumber(this.numerator) : this.rateLabel.string = 1 == t ? "100%" : Math.round(100 * this.numerator / this.denominator) + "%", e = Math.round(this.pot * t + this.call), this.value = e + this._deskCoin);
            let i = !1;
            this._minBetCoin + this._deskCoin > this.value && (i = !0), 0 != this._maxBetCoin && this._maxBetCoin + this._deskCoin < this.value && (i = !0), this._overRange = i, this.potLabel.string = this.value <= 0 ? u.config.getStringData("ActionTips3") : u.config.getStringData("ActionTips2"), this._isMax && (this.value = this.maximumBetAmount, this.rateLabel.string = h("PLAYER_SETTING.CUSTOM_POT_RATE_MAX"))
        }
        updateCoinMode(t, e, i, o, r) {
            this.coinMode = t, this.bbValue = e, this.anteValue = i, this.tableCurrency = o, this.gameMode = r, this.valueLabel.string = n.getDataPointValue(this.value, this.isShortDeck ? i : e, t, this.isShortDeck)
        }
        dealRaiseDataNumber(t) {
            return Math.round(t) + "%"
        }
        get isShortDeck() {
            return this.gameMode == l.commonProto.MTT_GAME_MODE.SHORT_DECK
        }
    }).prototype, "rateLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(b.prototype, "valueLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "potLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(b.prototype, "value", [D], Object.getOwnPropertyDescriptor(b.prototype, "value"), b.prototype), e(b.prototype, "numerator", [D], Object.getOwnPropertyDescriptor(b.prototype, "numerator"), b.prototype), e(b.prototype, "denominator", [D], Object.getOwnPropertyDescriptor(b.prototype, "denominator"), b.prototype), e(b.prototype, "pot", [D], Object.getOwnPropertyDescriptor(b.prototype, "pot"), b.prototype), e(b.prototype, "call", [D], Object.getOwnPropertyDescriptor(b.prototype, "call"), b.prototype), _ = b)) || _));
    o._RF.pop()
}
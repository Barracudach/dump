import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./ThemeSystem.js";
import * as b from "./Pb.js";
import * as d from "./Holdem_PlayerControl_ts.js";
import * as p from "./Tools.js";
import * as B from "./cv.js";
import * as C from "./FormatParser.js";
import * as f from "./bignumber.mjs.js";
import * as x from "./ColorSystemType.js";
import * as g from "./ColorSystemTypeOther.js";

function main() {
    var y, k, _, T, v, P, A, S, I, M, O, w, R, z, E, V, D, F, N, H, L, W, j, G, K, Q, U, X, Y, q, J, Z, $, tt;
    n._RF.push({}, "ffde1S4CQFOWIe/6oV8Wdy6", "Holdem_PlayerControl_Landscape", void 0);
    const {
        ccclass: et,
        property: it
    } = a;
    t("default", (y = it(o), k = it(s), _ = it(s), T = it(r), v = it(r), P = it(r), A = it(l), S = it(s), I = it(r), M = it(u), O = it(u), w = it(u), R = it(u), z = it(u), E = it(u), V = it(u), et((N = e((F = class extends d {
        constructor(...t) {
            super(...t), i(this, "amountInputEditbox", N, this), i(this, "plusButton", H, this), i(this, "minusButton", L, this), i(this, "raiseText", W, this), i(this, "betText", j, this), i(this, "allInText", G, this), i(this, "betAmountText", K, this), i(this, "raiseOrBetButton", Q, this), i(this, "raiseContainer", U, this), i(this, "sliderHandleSprite", X, this), i(this, "mouseOverBetButtonsSprites", Y, this), i(this, "mouseClickBetButtonsSprites", q, this), i(this, "mouseNormalPlusMinusButtonsColors", J, this), i(this, "mouseOverPlusMinusButtonsColors", Z, this), i(this, "mouseClickPlusMinusButtonsColors", $, this), i(this, "mouseClickOtherBetButtonsColors", tt, this), this._chipBetAmount = 0, this._isCustomRound = !1, this._BbPrefixFormat = ""
        }
        onLoad() {
            var t;
            super.onLoad(), this.plusButton.node.on("click", this.onClickPlus, this), this.minusButton.node.on("click", this.onClickMinus, this), this.raiseOrBetButton.node.on("click", this.onClickRaiseButton, this);
            let e = new h;
            e.target = this.node, e.component = "Holdem_PlayerControl_Landscape", e.handler = "onEditBoxBetAmountTextChanged", this.amountInputEditbox.textChanged.push(e), this.checkInitBBPrefix(), null != (t = this.betSlider) && null != (t = t.node) && t.parent && this.betSlider.node.parent.on("mouse-wheel", this.onMouseScroll, this)
        }
        onMouseScroll(t) {
            const e = t.getScrollX(),
                i = t.getScrollY();
            e > 0 || i > 0 ? this.onClickPlus() : (e < 0 || i < 0) && this.onClickMinus()
        }
        checkInitBBPrefix() {
            "" == this._BbPrefixFormat && (this._BbPrefixFormat = C.getStringBBPrefix())
        }
        onClickPotButton(t) {
            this.setBetAmount(t, !0, !0)
        }
        onClickRaiseButton() {
            let t = this._chipBetAmount;
            t > 0 ? super.onClickPotButton(t) : this.onClickCallButton()
        }
        setPotButtonActive(t, e) {
            let i = t.rateLabel.getComponent(m);
            i && i.setColorScheme(x.Other, e ? g.WhiteCreamy_100 : g.BlackGrey), t.getComponent(s).interactable = e
        }
        setBetAmount(t, e = !0, i = !1) {
            this._chipBetAmount = t, this._isCustomRound = i;
            let n = i ? C.getDataPointValueCustomRound(t, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck, B.currencyManager.defaultRoundDecimal, f.ROUND_FLOOR) : C.getDataPointValue(t, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck);
            if (this.amountInputEditbox.string = n, this.betAmountText.string = n, e) {
                let e = this.minBetCoin + this._deskCoin,
                    i = this.maximumBetAmount - e,
                    n = i > 0 ? (t - e) / i : 1;
                if (this._slideNumberArray && this._slideNumberArray.length > 1) {
                    n = (B.tools.findClosestIndex(this._slideNumberArray, t) ?? 0) / (this._slideNumberArray.length - 1)
                }
                this.betSlider.progress = n, this.betSlider.slideEvents[0].emit([this.betSlider])
            }
        }
        setCallValueActiveInSetCallButtonType(t) {
            this.callValue.node.active = !0
        }
        setCallButtonType(t, e) {
            super.setCallButtonType(t, e);
            const i = b.holdem.Action;
            let n;
            switch (t) {
                case 0:
                    this.raiseText.active = !1, this.betText.active = !1, this.allInText.active = !1, this.raiseOrBetButton.node.active = !1, this.raiseContainer.active = !1;
                    break;
                case 1:
                    this.raiseText.active = !0, this.betText.active = !1, this.allInText.active = !1, this.updateRaiseOptions();
                    break;
                case 2:
                    n = this.optAction == i.OPT_FIRST_CHECK, this.raiseText.active = !n, this.betText.active = n, this.allInText.active = !1, this.updateRaiseOptions();
                    break;
                case 3:
                    this.raiseText.active = !1, this.betText.active = !1, this.allInText.active = !0, this.updateRaiseOptions(e)
            }
        }
        updateRaiseOptions(t = !0) {
            let e = this.minBetCoin + this._deskCoin,
                i = this.maximumBetAmount - e > 0;
            if (i) {
                if (this.checkInitBBPrefix(), 7 == this.holdemRoom.store.getSelfPlayer().state && "0" != this.amountInputEditbox.string && this.amountInputEditbox.string != "0 " + this._BbPrefixFormat || this.setBetAmount(e), i = !1, !this._blockRaise) {
                    const {
                        seatedPlayers: t
                    } = this.room.store;
                    for (let e in t) {
                        let n = t[e];
                        if (n.userId != this.room.store.self.userId && n.leftCoin > 0 && !n.hasFold && n.state != b.holdem.PlayerState.WAITING) {
                            i = !0;
                            break
                        }
                    }
                }
                this.raiseOrBetButton.node.active = i, this.raiseContainer.active = i
            } else this._blockRaise ? (this.raiseOrBetButton.node.active = !1, this.raiseContainer.active = !1) : (this.setBetAmount(this.remainCoin + this._deskCoin), this.raiseText.active = !1, this.betText.active = !1, this.allInText.active = !0, this.raiseOrBetButton.node.active = t, this.raiseContainer.active = !1)
        }
        onEditBoxBetAmountTextChanged() {
            let t = C.getChipAmountFromDataPoint(this.amountInputEditbox.string, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode);
            if (isNaN(t)) return;
            let e = this.minBetCoin + this._deskCoin,
                i = this.maximumBetAmount,
                n = t >= e,
                o = t > i;
            t = Math.min(t, i), t = Math.max(t, e), this.setBetAmount(t), this.amountInputEditbox.string = p.removeDataPointFromString(this.betAmountText.string), n && (c.isBrowser || o) && (this.amountInputEditbox.blur(), this.scheduleOnce((() => {
                this.amountInputEditbox.focus()
            })))
        }
        onClickPlus() {
            this.onClickChangeMinAmount(!1)
        }
        onClickMinus() {
            this.onClickChangeMinAmount(!0)
        }
        onClickChangeMinAmount(t) {
            let e = C.getChipAmountFromDataPoint(this.amountInputEditbox.string, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode),
                i = this.minBetCoin + this._deskCoin,
                n = this.maximumBetAmount,
                o = this._smallBlind;
            0 == o && (o = this._bigBlind), t ? (e -= o, e < i && (e = i)) : (e += o, e > n && (e = n)), this.setBetAmount(e, !0, !0)
        }
        onSliderValueChange(t) {
            super.onSliderValueChange(t);
            let e = Math.round(t.progress * (this._slideNumberArray.length - 1)),
                i = Math.floor(this._slideNumberArray[e]);
            this.setBetAmount(i, !1, !0)
        }
        updateCoinModeValue() {
            super.updateCoinModeValue(), this.setBetAmount(this._chipBetAmount, !0, this._isCustomRound)
        }
        isShowAllinButton() {
            return this.allInText.active
        }
    }).prototype, "amountInputEditbox", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(F.prototype, "plusButton", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(F.prototype, "minusButton", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(F.prototype, "raiseText", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(F.prototype, "betText", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(F.prototype, "allInText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(F.prototype, "betAmountText", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(F.prototype, "raiseOrBetButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(F.prototype, "raiseContainer", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(F.prototype, "sliderHandleSprite", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(F.prototype, "mouseOverBetButtonsSprites", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), q = e(F.prototype, "mouseClickBetButtonsSprites", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), J = e(F.prototype, "mouseNormalPlusMinusButtonsColors", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = e(F.prototype, "mouseOverPlusMinusButtonsColors", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = e(F.prototype, "mouseClickPlusMinusButtonsColors", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), tt = e(F.prototype, "mouseClickOtherBetButtonsColors", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = F)) || D));
    n._RF.pop()
}
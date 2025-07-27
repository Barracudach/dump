import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as c from "./FormatParser.js";
import * as h from "./LobbyTools.js";
import * as d from "./CurrencyValue.js";
import * as p from "./Pb.js";
import * as P from "./MttHallDetailExpandTab.js";
import * as z from "./Translator.js";

function main() {
    var b, f, T, m, x, C, y, _, g, I, N, S, L, v, w, M, A, G;
    r._RF.push({}, "6dc6aGGHcdLjJvrLGGEoyrr", "HallMttPrizepoolRender", void 0);
    const {
        ccclass: k,
        property: B
    } = a;
    t("default", (b = B(n), f = B(l), T = B(o), m = B(o), x = B(o), C = B(d), y = B(l), _ = B(o), k((N = e((I = class extends P {
        constructor(...t) {
            super(...t), this.mvcView = void 0, i(this, "prefabItem", N, this), i(this, "itemContentNode", S, this), this.content = null, i(this, "labelPlacePaid", L, this), i(this, "prizeCircleTxt", v, this), i(this, "prizeCircleInstructionTxt", w, this), i(this, "currencyPrizePool", M, this), i(this, "nextPrizeNode", A, this), i(this, "nextPrizeTxt", G, this), this._model = void 0
        }
        render(t) {
            this._model = t, this.itemContentNode.removeAllChildren(), this.updatePrizeCircle(), this.updateStatus()
        }
        setPrizeCircle(t) {
            this.prizeCircleTxt.string = u.config.getStringData("MTT_HALL.PRIZEPOOL.PLACES_PAID").replace("%s", t)
        }
        updatePrizeCircle() {
            var t;
            null != (t = this._model) && t.detail && this.setPrizeCircle(this._model.detail.InTheMoney)
        }
        updateStatus() {
            var t;
            if (null == (t = this._model) || !t.detail) return;
            switch (this._model.detail.Status) {
                case p.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case p.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.setPrizeCircleInstruction(z("MTT_HALL.PRIZE_FINAL")), this.setNextPrize(this._model.detail.NextPrize, this._model.detail.currency), this.showNextPrize(!0);
                    break;
                default:
                    this.setPrizeCircleInstruction(z("MTT_HALL.PRIZE_NOT_FINAL")), this.showNextPrize(!1)
            }
        }
        createItem() {
            let t = s(this.prefabItem);
            return t.parent = this.itemContentNode, t
        }
        onClickButtonBack() {
            var t;
            h.playSoundBack(), null == (t = this.mvcView) || null == t.onClickButtonBack || t.onClickButtonBack()
        }
        setPrizeCircleInstruction(t) {
            this.prizeCircleInstructionTxt && (this.prizeCircleInstructionTxt.string = t)
        }
        showNextPrize(t) {
            this.nextPrizeNode && (this.nextPrizeNode.active = t)
        }
        setNextPrize(t, e) {
            this.nextPrizeTxt && (this.nextPrizeTxt.string = c.GetCurrencyShortSign(e) + c.ThousandPointFormat(c.DisplayGold(t)))
        }
        onLanguageChange() {
            this.updatePrizeCircle(), this.updateStatus()
        }
    }).prototype, "prefabItem", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(I.prototype, "itemContentNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(I.prototype, "labelPlacePaid", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(I.prototype, "prizeCircleTxt", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(I.prototype, "prizeCircleInstructionTxt", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(I.prototype, "currencyPrizePool", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(I.prototype, "nextPrizeNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(I.prototype, "nextPrizeTxt", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = I)) || g));
    r._RF.pop()
}
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./ThemeSystem.js";
import * as u from "./CurrencyValue.js";
import * as l from "./i18nText.js";
import * as c from "./borderGraphic.js";
import * as h from "./Enum.js";
import * as p from "./cv.js";
import * as m from "./BonusHistoryEntry.js";
import * as y from "./ColorSystemType.js";
import * as C from "./ColorSystemWeight.js";
import * as b from "./ColorSystemTypeOther.js";

function main() {
    var f, d, g, S, D, T, x, B, N, v, V, w, I, z, O, H, P, k;
    s._RF.push({}, "04e199mLHZNkamLbIqSyCoT", "BonusHistoryItem", void 0);
    const {
        ccclass: E,
        property: L
    } = o;
    t("default", (f = L(r), d = L(r), g = L(r), S = L(r), D = L(u), T = L(u), x = L(r), B = L(r), E((V = e((v = class extends i {
        constructor(...t) {
            super(...t), n(this, "bonusName", V, this), n(this, "bonusDescription", w, this), n(this, "expDate", I, this), n(this, "startDate", z, this), n(this, "maxCurrencyVal", O, this), n(this, "releasedCurrencyVal", H, this), n(this, "points", P, this), n(this, "status", k, this), this.bonusCurrency = void 0, this.statusThemeComponent = void 0, this.statusBorderComponent = void 0, this.statusI18nComponent = void 0
        }
        onLoad() {
            var t;
            this.bonusCurrency = p.appConfig.getWalletConfig().defaultCurrency.type, this.statusThemeComponent = this.status.node.getComponent(a), this.statusBorderComponent = null == (t = this.status.node.parent) ? void 0 : t.getComponent(c), this.statusI18nComponent = this.status.node.getComponent(l)
        }
        updateSVReuseData(t, e) {
            if (e.length <= 0 || e.length - 1 < t) return;
            let n = t % 2 == 0,
                s = e[t].bhData;
            this.reset(), this.parseData(s, n)
        }
        reset() {
            this.bonusName.string = "", this.bonusDescription.string = "", this.expDate.string = "-", this.startDate.string = "-"
        }
        parseData(t, e) {
            this.setItemBg(e), this.setBonusNameTooltip(t.bonusName), t.currency && h.hasOwnProperty(t.currency) && (this.bonusCurrency = h[t.currency]), this.bonusName.overflow == r.Overflow.RESIZE_HEIGHT ? this.bonusName.string = t.bonusName : this.scheduleOnce((() => {
                p.StringTools.setShrinkString(this.bonusName.node, t.bonusName, !0)
            })), this.bonusDescription.string = t.bonusDescription, this.expDate.string = t.expDate, this.startDate.string = this.getStartDatePrefix() + t.startDate, this.points.string = t.bonusPoints, t.maxBonusCoin ? this.maxCurrencyVal.updateVal(t.maxBonusCoin.toString(), this.bonusCurrency) : this.maxCurrencyVal.updateVal("-", h.None), t.releasedBonusCoin ? this.releasedCurrencyVal.updateVal(t.releasedBonusCoin.toString(), this.bonusCurrency) : this.releasedCurrencyVal.updateVal("-", h.None), this.setSatusColorTheme(t.status, t.statusKey)
        }
        getStartDatePrefix() {
            return ""
        }
        setItemBg(t) {}
        setBonusNameTooltip(t) {}
        setSatusColorTheme(t, e) {
            var n, s, r;
            let o, i = y.Nero,
                a = b.Custom;
            switch (t) {
                case m.Active:
                case m.Completed:
                case m.Pending:
                    o = b.Orange, i = y.Other, a = b.StatusBg, null == (n = this.statusI18nComponent) || n.setKey(e, !0);
                    break;
                case m.None:
                    o = b.TypoGraphySecond, null == (s = this.statusI18nComponent) || s.setText(e);
                    break;
                default:
                    o = b.TypoGraphySecond, null == (r = this.statusI18nComponent) || r.setKey(e, !0)
            }
            if (this.statusThemeComponent) {
                const t = y.Other;
                this.statusThemeComponent.setColorScheme(t, o)
            }
            if (this.statusBorderComponent) {
                const t = C.W800;
                this.statusBorderComponent.setColor(i, t, a)
            }
        }
    }).prototype, "bonusName", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(v.prototype, "bonusDescription", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(v.prototype, "expDate", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(v.prototype, "startDate", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(v.prototype, "maxCurrencyVal", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(v.prototype, "releasedCurrencyVal", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(v.prototype, "points", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(v.prototype, "status", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = v)) || N));
    s._RF.pop()
}
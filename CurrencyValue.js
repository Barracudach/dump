import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as p from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./FontSystem.js";
import * as d from "./ThemeSystem.js";
import * as S from "./ThemeSystemModel.js";
import * as f from "./FormatParser.js";
import * as w from "./cv.js";
import * as v from "./AppConfig.js";
import * as I from "./Enum.js";
import * as N from "./Enum.js";
import * as O from "./Tools.js";
import * as B from "./CurrencyManager.js";
import * as T from "./ColorSystemType.js";
import * as A from "./ColorSystemTypeOther.js";
import * as _ from "./StringTools.js";

function main() {
    var U, D, F, E, x, L, z, R, M, V, G, P, H, Y, W, k, j, X, $, q, J, K, Q, Z, ee, te, ne, oe, ie, re, se, ue, le, ce, ae, he, pe, ye, Ce, me, ge, be, de, Se, fe, we, ve;
    o._RF.push({}, "3245b5xmf9BwozXM1Oo9VjC", "CurrencyValue", void 0);
    const {
        ccclass: Ie,
        property: Ne,
        executionOrder: Oe,
        menu: Be
    } = p;
    let Te = e("CurrencyTypeIndex", function(e) {
            return e[e.None = 0] = "None", e[e.USD = 1] = "USD", e[e.CNY = 2] = "CNY", e[e.USDT = 3] = "USDT", e[e.EUR = 4] = "EUR", e[e.GBP = 5] = "GBP", e[e.GOLD = 6] = "GOLD", e[e.CASINO_COIN = 7] = "CASINO_COIN", e
        }({})),
        Ae = (U = Ie("CurrencyIcon"), D = Ne({
            type: i(Te)
        }), F = Ne(r), E = Ne(s), x = Ne({
            type: A,
            visible: function() {
                return this.applyCustomColor
            }
        }), U((R = t((z = class {
            constructor() {
                n(this, "type", R, this), n(this, "icon", M, this), n(this, "applyCustomColor", V, this), n(this, "customColor", G, this)
            }
        }).prototype, "type", [D], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return Te.None
            }
        }), M = t(z.prototype, "icon", [F], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), V = t(z.prototype, "applyCustomColor", [E], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), G = t(z.prototype, "customColor", [x], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return A.Icon
            }
        }), L = z)) || L);
    e("CurrencyValue", (P = Oe(-1), H = Be("Custom UI/Currency Value"), Y = Ne({
        tooltip: "Should currency symbol should be shown?"
    }), W = Ne({
        tooltip: "Should currency symbol should be shown as short symbol?",
        visible: function() {
            return this.isShowSymbol
        }
    }), k = Ne({
        tooltip: "Should show both currency symbol and icon?"
    }), j = Ne(s), X = Ne(u), $ = Ne(l), q = Ne(s), J = Ne({
        type: l,
        visible: function() {
            return null != this.valueLabel
        }
    }), K = Ne(s), Q = Ne({
        type: c,
        visible: function() {
            return this.isShowIcon
        }
    }), Z = Ne({
        type: a,
        visible: function() {
            return this.isShowIcon
        }
    }), ee = Ne(s), te = Ne({
        type: [Ae],
        visible: function() {
            return this.useCustomIcon
        }
    }), ne = Ne({
        tooltip: "This should be converted and shown in user country currency by default?"
    }), oe = Ne([h]), ie = Ne({
        tooltip: "Should given value filter any text out and keep only numbers?"
    }), Ie(re = P(re = H((ue = t((se = class extends y {
        constructor(...e) {
            super(...e), n(this, "isShowSymbol", ue, this), n(this, "isShowShortSymbol", le, this), n(this, "isShowBothSymbolAndIcon", ce, this), n(this, "isStakeOrBuyin", ae, this), n(this, "valueLabel", he, this), n(this, "_value", pe, this), n(this, "hasComasInNumber", ye, this), n(this, "isShowIcon", Ce, this), n(this, "iconNode", me, this), n(this, "iconSprite", ge, this), n(this, "useCustomIcon", be, this), n(this, "customIcons", de, this), n(this, "colorCanBeUpdatedExt", Se, this), n(this, "showInCountryCurrency", fe, this), n(this, "onValueChange", we, this), n(this, "isRemoveAdditionalText", ve, this), this.currencyBase = null, this.baseColorType = A.Icon, this.baseColor = new C(C.WHITE), this.currencyShow = null, this.uiAlreadyUpdated = !1, this.customCurrencyRates = null, this.limitNumberOfDigits = null, this.showSpaceBetweenCountryAndValue = !1, this._shouldConvert = !1
        }
        set value(e) {
            this._value = e, this.updateUI()
        }
        get value() {
            return this._value
        }
        set string(e) {
            this.value = e
        }
        get currencyBaseType() {
            return this.currencyBase
        }
        get currencyShown() {
            return this.getCurrencyShown(this._shouldConvert, this.currencyBase, this.currencyShow)
        }
        getCurrencyShown(e, t, n) {
            return e || !t ? w.appConfig.getWalletConfig().defaultCurrency.type : n && n != I.None ? n : t
        }
        set shouldConvert(e) {
            this._shouldConvert = e, this.updateUI()
        }
        get shouldConvert() {
            return this.currencyShown != this.currencyBase
        }
        get isIconShown() {
            return null != this.iconSprite && 0 != this.isShowIcon && (!(this.isShowSymbol && !this.isShowBothSymbolAndIcon) || "" == this.getCurrentCurrencySymbol())
        }
        onLoad() {
            null == this.currencyBase && (this.currencyBase = v.Instance.getWalletConfig().defaultCurrency.type), this.showInCountryCurrency && (this.currencyShow = w.dataHandler.getUserData().getCountryCurrency().type), this.iconSprite && this.iconSprite.getComponent(m)._srcBlendFactor != g.BlendFactor.ONE && this.iconSprite.getComponent(m)._srcBlendFactor != g.BlendFactor.DST_ALPHA && (this.iconSprite.getComponent(m)._srcBlendFactor = g.BlendFactor.ONE, this.iconSprite.getComponent(m)._updateBlendFunc())
        }
        onEnable() {
            "" == this._value || this.uiAlreadyUpdated || this.updateUI(), this.valueLabel && w.MessageCenter.register(B, this.updateValue.bind(this), this.node), this.iconSprite && (this.colorCanBeUpdatedExt || this.iconSprite.node.on(c.EventType.COLOR_CHANGED, this.iconColorChanged, this)), w.MessageCenter.register(w.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDisable() {
            this.uiAlreadyUpdated = !1, this.valueLabel && w.MessageCenter.unregister(B, this.node), this.iconSprite && !this.colorCanBeUpdatedExt && this.iconSprite.node.off(c.EventType.COLOR_CHANGED, this.iconColorChanged, this), w.MessageCenter.unregister(w.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            this.updateUI()
        }
        updateProps(e) {
            this.showSpaceBetweenCountryAndValue = e
        }
        updateVal(e, t, n, o, i, r) {
            if (this._value = e, t && t != I.None && (this.currencyBase = w.appConfig.getWalletConfig().convertStringToCurrencyType(t)), null != n && (this._shouldConvert = n), o) {
                let e = w.appConfig.getWalletConfig().convertStringToCurrencyType(o.toString());
                e != I.None && (this.currencyShow = e)
            }
            this.customCurrencyRates = i, this.limitNumberOfDigits = r, this.updateUI()
        }
        updateUI() {
            this.node.active && (this.updateIcon(), this.updateValue(), this.uiAlreadyUpdated = !0)
        }
        updateIcon() {
            let e = this.isIconShown;
            if (this.iconNode && (this.iconNode.active = e), e) {
                if (this.iconColorChanged(), this.useCustomIcon) {
                    let e = this.getCustomIconIndex();
                    if (e >= 0 && this.customIcons[e].icon) return void(this.iconSprite.spriteFrame = this.customIcons[e].icon)
                }
                w.resMgr.setSpriteFrame(this.iconSprite.node, N[this.currencyShown].iconPath)
            }
        }
        getCustomIconIndex() {
            let e = 0,
                t = this.customIcons.length;
            for (; e < t; e++)
                if (Te[this.customIcons[e].type] == this.currencyShown) return e;
            return -1
        }
        iconColorChanged() {
            let e = this.iconSprite.getComponent(d),
                t = -1;
            const n = {
                [I.GOLDCOIN]: !0
            };
            this.useCustomIcon && (t = this.getCustomIconIndex()), e ? (t > -1 ? this.customIcons[t].applyCustomColor && e.setColorScheme(T.Other, this.customIcons[t].customColor) : n[this.currencyShown] ? e.setColorScheme(T.Other, A.WhiteCreamy_100) : this.isStakeOrBuyin && this.currencyShown == I.CNY ? (e.colorSchemeOther != A.CurrencyCNY && (this.baseColorType = e.colorSchemeOther), e.setColorScheme(T.Other, A.CurrencyCNY)) : e.setColorScheme(T.Other, this.baseColorType), e.applyTheme()) : t > -1 && this.customIcons[t].applyCustomColor ? this.iconSprite.node.getComponent(m).color = S.getInstance().getColor(w.appConfig.themeUse, T.Other, null, this.customIcons[t].customColor).clone() : n[this.currencyShown] ? this.iconSprite.node.getComponent(m).color = new C(C.WHITE) : this.isStakeOrBuyin && this.currencyShown == I.CNY ? (e.colorSchemeOther != A.CurrencyCNY && (this.baseColor = this.iconSprite.node.getComponent(m).color), this.iconSprite.node.getComponent(m).color = S.getInstance().getColor(w.appConfig.themeUse, T.Other, null, A.CurrencyCNY).clone()) : this.iconSprite.node.getComponent(m).color = this.baseColor
        }
        getCurrentCurrencySymbol() {
            if (!this.isShowSymbol) return "";
            let e = this.currencyShown,
                t = this.valueLabel.getComponent(b);
            t && t.useBitmapFont && !this.isSupportBMFont(e) && (t.useBitmapFont = !1, t.applyFont());
            const n = `${this.isShowShortSymbol&&N[e].shortSymbol?N[e].shortSymbol:N[e].symbol}`;
            return this.showInCountryCurrency ? this.showSpaceBetweenCountryAndValue ? `~${n} ` : `~${n}` : n
        }
        isSupportBMFont(e) {
            return e == I.None || e == I.USD || e == I.CNY || e == I.USDT || e == I.EUR || e == I.GBP || e == I.GOLDCOIN || e == I.CASINO_COIN || e == I.MXN || e == I.PHP
        }
        updateValue(e) {
            (null == e || e.from == this.currencyBase && e.to == this.currencyShown) && (this.valueLabel && (this.valueLabel.string = this.getShowValue(this.isShowSymbol ? this.getCurrentCurrencySymbol() : "")), this.hasComasInNumber && (this.valueLabel.string = O.numberSeparator(this.valueLabel.string)), h.emitEvents(this.onValueChange, this.value, this.currencyBase))
        }
        getShowValue(e) {
            return this.isRemoveAdditionalText && (this._value = this._value.replace(/[^0-9.,]/g, "")), this._value.replace(/[\d.,]+/g, function(t) {
                let n = 0;
                if (this.shouldConvert ? (t.indexOf(",") > 0 ? (n = this.exchange(w.Number(t.replace(/,/g, ""))), t = f.ThousandPointFormat(n)) : (n = w.Number(t), t = this.exchange(n)), n = w.Number(t)) : t.indexOf(",") > 0 ? (n = w.Number(t.replace(/,/g, "")), f.ThousandPointFormat(n)) : (n = w.Number(t), t = w.StringTools.toFixedAsString(n, w.currencyManager.defaultRoundDecimal)), this.limitNumberOfDigits) {
                    const e = (t = _.ScientificNotationWithFormat(n, this.limitNumberOfDigits)).replace(/[,.]/g, "").length;
                    var o;
                    if (e < this.limitNumberOfDigits) 1 === (null == (o = t.split(".")[1]) ? void 0 : o.length) && (t = parseFloat(t).toFixed(2));
                    else if (e == this.limitNumberOfDigits) {
                        var i;
                        1 === (null == (i = t.split(".")[1]) ? void 0 : i.length) && (t = parseFloat(t).toFixed(0))
                    }
                }
                return e + t
            }.bind(this))
        }
        exchange(e) {
            return w.StringTools.toFixedAsString(w.currencyManager.convert(this.currencyBase, this.currencyShown, e, this.customCurrencyRates), w.currencyManager.defaultRoundDecimal)
        }
        getReverseAmount(e) {
            return w.currencyManager.convert(this.currencyShown, this.currencyBase, e)
        }
    }).prototype, "isShowSymbol", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), le = t(se.prototype, "isShowShortSymbol", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ce = t(se.prototype, "isShowBothSymbolAndIcon", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ae = t(se.prototype, "isStakeOrBuyin", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), he = t(se.prototype, "valueLabel", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(se.prototype, "_value", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), ye = t(se.prototype, "hasComasInNumber", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), t(se.prototype, "value", [J], Object.getOwnPropertyDescriptor(se.prototype, "value"), se.prototype), Ce = t(se.prototype, "isShowIcon", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), me = t(se.prototype, "iconNode", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(se.prototype, "iconSprite", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(se.prototype, "useCustomIcon", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), de = t(se.prototype, "customIcons", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Se = t(se.prototype, "colorCanBeUpdatedExt", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), fe = t(se.prototype, "showInCountryCurrency", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), we = t(se.prototype, "onValueChange", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ve = t(se.prototype, "isRemoveAdditionalText", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), re = se)) || re) || re) || re));
    o._RF.pop()
}
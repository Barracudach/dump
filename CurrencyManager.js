import * as t from "./cc.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cv.js";
import * as o from "./Enum.js";
import * as s from "./Enum.js";
import * as i from "./FormatParser.js";

function main() {
    t._RF.push({}, "c71d1g5S4VLK5r/NSMLlyOO", "CurrencyManager", void 0);
    var c = function(e) {
        return e[e.Custom = -1] = "Custom", e[e.DefualtToSecondary = 0] = "DefualtToSecondary", e[e.SecondaryToDefualt = 1] = "SecondaryToDefualt", e
    }(c || {});
    const u = e("EXCHANGE_RATE_UPDATED", "ExchangeRateUpdated");
    class h {
        constructor() {
            this.rates = new Map([
                [s.USD, {
                    CNY: 6.4538394,
                    GOLD: 6.4538394
                }],
                [s.CNY, {
                    USD: .15494653,
                    GOLD: 1
                }],
                [s.GOLDCOIN, {
                    CNY: 1,
                    USD: .15494653
                }]
            ]), this._fetchDataTimeoutId = null, this.defaultCurrency = void 0, this.secondCurrency = void 0, this.currencyTypeValues = []
        }
        static getInstance() {
            return h.g_instance || (h.g_instance = new h, h.g_instance.init()), h.g_instance
        }
        init() {
            if (!0 === a.appConfig.getWalletConfig().haveSecondCurrency()) {
                if (this.currencyTypeValues = Object.values(s), this.defaultCurrency = a.appConfig.getWalletConfig().defaultCurrency, this.secondCurrency = a.appConfig.getWalletConfig().secondCurrency, a.appConfig.isPKW) a.MessageCenter.register("onGetScalerQuoteResponse", this.onGetScalerQuoteResponse.bind(this), this), a.MessageCenter.register(a.Enum.MessageCenterAction.OnWorldServerLoginSuccess, this.fetchDataFromSocket.bind(this), this);
                else {
                    const e = a.appConfig.getGeneralConfig().delayFetchCurrencyData ? a.Enum.MessageCenterAction.onFetchCurrencyAPI : a.Enum.MessageCenterAction.OnLoginSuccess;
                    a.MessageCenter.register(e, this.fetchDataFromAPI.bind(this), this)
                }
                a.MessageCenter.register("onLogout", this.clearUpdate.bind(this), this)
            } else n("[CurrencyManager] CurrencyManager module will be disabled because current selected jurisdiction does not have both defaultCurrency and secondCurrency set.")
        }
        fetchDataFromSocket() {
            a.netWork.isConnect() && (a.worldNet.GetScalerQuoteRequest(c.DefualtToSecondary), a.worldNet.GetScalerQuoteRequest(c.SecondaryToDefualt))
        }
        fetchDataFromAPI() {
            let e = a.config.getStringData("WEB_API_GET_EXCHANGE_RATE", !0);
            this.getExchangeRateAPI(e, this.defaultCurrency, this.secondCurrency);
            let t = a.dataHandler.getUserData().getCountryCurrency();
            t && t.type != s.None && (this.getExchangeRateAPI(e, t, this.defaultCurrency), this.getExchangeRateAPI(e, t, this.secondCurrency))
        }
        getExchangeRateAPI(e, t, n) {
            let r = e + "?from=" + t.code + "&to=" + n.code;
            a.http.sendRequestV2(r, null, this.onFetchDataFromAPISuccess.bind(this, t.type, n.type), this.onFetchDataFromAPIFailure.bind(this, t.type, n.type), a.http.HttpRequestType.GET, a.http.HttpParseType.NONE, !1, !1, !1);
            let s = e + "?from=" + n.code + "&to=" + t.code;
            a.http.sendRequestV2(s, null, this.onFetchDataFromAPISuccess.bind(this, n.type, t.type), this.onFetchDataFromAPIFailure.bind(this, n.type, t.type), a.http.HttpRequestType.GET, a.http.HttpParseType.NONE, !1, !1, !1)
        }
        onFetchDataFromAPISuccess(e, t, n) {
            let r = a.Number(n);
            0 != r && this.onGetScalerQuoteResponse({
                rate: r,
                op_type: c.Custom,
                exc_from: e,
                exc_to: t
            })
        }
        onFetchDataFromAPIFailure(e, t) {
            let n = JSON.parse(r.localStorage.getItem("currencyRates_" + e));
            n && n[t] && this.onGetScalerQuoteResponse({
                rate: n[t],
                op_type: c.Custom,
                exc_from: e,
                exc_to: t,
                fromCache: !0
            })
        }
        clearUpdate() {
            this._fetchDataTimeoutId && (clearTimeout(this._fetchDataTimeoutId), this._fetchDataTimeoutId = null)
        }
        onGetScalerQuoteResponse(e) {
            let t = Number(e.rate);
            if (isNaN(t) || t <= 0 || !(e.op_type in c)) return;
            e.op_type == c.DefualtToSecondary ? this.updateExchangeRate(this.defaultCurrency.type, this.secondCurrency.type, t) : e.op_type == c.SecondaryToDefualt ? this.updateExchangeRate(this.secondCurrency.type, this.defaultCurrency.type, t) : e.op_type == c.Custom && this.updateExchangeRate(e.exc_from, e.exc_to, t, !!e.fromCache), a.MessageCenter.send("UpdateExchangeRate"), this.clearUpdate();
            let n = new Date,
                r = n.getTime() + 6e4 * n.getTimezoneOffset();
            n = new Date(r), n.setHours(24, 0, 1);
            let s = n.getTime() - r;
            a.appConfig.isPKW ? this._fetchDataTimeoutId = setTimeout(this.fetchDataFromSocket.bind(this), s) : this._fetchDataTimeoutId = setTimeout(this.fetchDataFromAPI.bind(this), s)
        }
        updateExchangeRate(e, t, n, o = !1) {
            if (!this.currencyTypeValues.includes(e) || !this.currencyTypeValues.includes(t)) return;
            let i = this.rates.get(e) || {};
            console.log("[CurrencyManager] => updateExchangeRate() `" + e + "` to `" + t + "` - " + i[t] + " -> " + n), i[t] = n, this.rates.set(e, i), o || r.localStorage.setItem("currencyRates_" + e, JSON.stringify(i)), a.MessageCenter.send(u, {
                from: e,
                to: t
            }), e == s.CNY && this.updateExchangeRate(s.GOLDCOIN, t, n, o), t == s.CNY && this.updateExchangeRate(e, s.GOLDCOIN, n, o)
        }
        convert(e, t, r, o) {
            if (e == t) return r;
            if (o) {
                if ("number" == typeof o || "string" == typeof o && !isNaN(o)) return this.exchange(r, a.Number(o));
                let n = 0,
                    i = o.length;
                for (; n < i; n++) {
                    let i, c = a.appConfig.getWalletConfig().convertStringToCurrencyType(o[n].Currency);
                    if (e != c || t != s.CNY && t != s.GOLDCOIN ? t != c || e != s.CNY && e != s.GOLDCOIN || (i = 1 / this.getMTTRate(o[n])) : i = this.getMTTRate(o[n]), null != i && !isNaN(i)) return this.exchange(r, i)
                }
            }
            if (!this.rates.has(e)) return r;
            let i = this.rates.get(e);
            return !i || !i[t] || i[t] <= 0 ? (n("Can not convert! `" + e + "` exchange rates:", i), r) : this.exchange(r, i[t])
        }
        getRate(e, t) {
            if (e == t) return 1;
            if (!this.rates.has(e)) return 1;
            let r = this.rates.get(e);
            return !r || !r[t] || r[t] <= 0 ? (n("Can not convert! `" + e + "` exchange rates:", r), 1) : r[t]
        }
        getMTTRate(e) {
            return null != e.Rate ? e.Rate : null != e.ExchangeRate ? e.ExchangeRate : void 0
        }
        exchange(e, t) {
            let n = t * e;
            return n < .05 ? a.StringTools.toFixed(n, 3) : a.StringTools.toFixed(n, this.defaultRoundDecimal)
        }
        getTextConvertedCurrencyWithSymbol(e, t, n) {
            return n.replace(/[\d.,]+/g, function(n) {
                if (n = n.indexOf(",") > 0 ? i.ThousandPointFormat(this.convert(e, t, a.Number(n.replace(/,/g, "")))).toString() : i.ThousandPointFormat(this.convert(e, t, a.Number(n))).toString(), t == s.GOLDCOIN) {
                    return n + ("" == o[t].symbol ? a.config.getStringData("USDTView_coin_label") : o[t].symbol)
                }
                return o[t].symbol + n
            }.bind(this))
        }
        get defaultRoundDecimal() {
            return 2
        }
    }
    e("CurrencyManager", h), h.g_instance = void 0, t._RF.pop()
}
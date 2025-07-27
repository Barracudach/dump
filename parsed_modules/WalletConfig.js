import * as t from "./cc.js";
import * as n from "./Enum.js";
import * as r from "./Enum.js";
import * as c from "./cv.js";
import * as i from "./AppConfig.js";

function main() {
    t._RF.push({}, "2ecf1rbd4hEU4YMTSMxS5F9", "WalletConfig", void 0);
    e("WalletConfig", class {
        constructor(...e) {
            this.defaultCurrency = r.USD, this.secondCurrency = r.None, this.showCurrencySymbol = !0, this.haveUSDTCurrency = !1, this.countriesCurrency = {}, this.showFreshChatWindow = !1, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
        haveSecondCurrency() {
            return this.isValidCurrency(this.secondCurrency)
        }
        isValidCurrency(e) {
            return e && e != r.None
        }
        getTempCurrency(e = null) {
            if (e) {
                let t = null;
                if (t = e.currencyType ? e.currencyType : e.DisplayCurrency ? this.convertStringToCurrency(e.DisplayCurrency) : e, "object" == typeof t && t.symbol) return t;
                if (101 == t) return r.USD;
                if ("string" == typeof t) return this.convertStringToCurrency(t)
            }
            return i.Instance.getModulesConfig().sharedPlayersPool && this.haveSecondCurrency() ? this.secondCurrency : this.defaultCurrency
        }
        checkAndSetGameTableCurrency(e, t = !0) {
            if (e) {
                let r = this.getTempCurrency(e);
                e.currency = t ? r.type : r
            }
        }
        checkAndSetGamesCurrency(e, t = !0) {
            if (e) {
                let r = 0,
                    n = e.length;
                for (; r < n; r++) this.checkAndSetGameTableCurrency(e[r], t)
            }
        }
        shouldConvertCurrency(e, t) {
            return this.isValidCurrency(e) && e != this.defaultCurrency && (!this.isValidCurrency(t) || t != this.defaultCurrency)
        }
        shouldConvertCurrencyType(e, t) {
            return this.shouldConvertCurrency(r[e], r[t])
        }
        convertStringToCurrencyType(e) {
            if (null == e) return n.None;
            if ("object" == typeof e && e.type) return e.type;
            let t = n[e] || n.None;
            return "GOLD" == e && (t = n.GOLDCOIN), c.appConfig.isPKW || t != n.GOLDCOIN ? c.appConfig.isPKW && t == n.CNY && (t = n.GOLDCOIN) : t = n.CNY, t
        }
        convertStringToCurrency(e) {
            if (e && "object" == typeof e && e.type) return e;
            const t = this.convertStringToCurrencyType(e);
            return r[t]
        }
        getCurrencyDataPointMTT() {
            return c.config.getStringData("jackfruit_setting_custom_data_point_chips")
        }
        getConverterDataPointMTT(e = !1) {
            return c.config.getStringData(e ? "jackfruit_setting_custom_data_point_ante" : "jackfruit_setting_custom_data_point_bb")
        }
        getCurrencyDataPointCash(e) {
            switch (e) {
                case n.GOLDCOIN:
                case n.CNY:
                    return r[n.CNY].code;
                case n.USD:
                    return r[n.USD].code;
                default:
                    return c.config.getStringData("jackfruit_setting_custom_data_point_chips")
            }
        }
        getConverterDataPointCash(e = !1) {
            return this.getConverterDataPointMTT(e)
        }
    }), t._RF.pop()
}
import * as r from "./cc.js";
import * as o from "./cv.js";
import * as n from "./Tools.js";
import * as e from "./bignumber.mjs.js";
import * as a from "./StringTools.js";
import * as i from "./Enum.js";
import * as s from "./Enum.js";

function main() {
    r._RF.push({}, "854dfx/DA5M+oJsapCdZ454", "FormatParser", void 0);
    class u {
        static addStartPadding(t, r, o) {
            return Array.from(t, (t => t.toString().padStart(r, o)))
        }
        static RoundToDecimal(t, r = 0) {
            let o = Math.pow(10, r);
            return Math.round(t * o) / o
        }
        static FloorToDecimal(t, r = 0, n = !1) {
            if (n) return parseFloat(o.StringTools.fixedNumberToShowString(t, r));
            {
                let o = Math.pow(10, r);
                return Math.sign(t) * Math.floor(Math.abs(t) * o) / o
            }
        }
        static DisplayGold(t, r = 2) {
            let o = Math.sign(t) * (Math.abs(t) + Math.pow(10, -4));
            return u.FloorToDecimal(o, r)
        }
        static GetCurrencySign(t) {
            var r;
            const o = null == (r = i[t]) ? void 0 : r.symbol;
            return o || ""
        }
        static GetCurrencyShortSign(t) {
            let r = "";
            switch (t) {
                case i[s.USD].code:
                    r = i[s.USD].symbol;
                    break;
                case i[s.CNY].code:
                    r = i[s.CNY].shortSymbol
            }
            return r
        }
        static ThousandPointFormat(t, r = 2, n = e.ROUND_HALF_UP) {
            let a = o.StringTools.toFixedAsString(t, r, n).split("."),
                i = a[0].split(""),
                s = "";
            return i.reverse().forEach(((t, r) => {
                r % 3 == 0 && r > 0 && (s = "," + s), s = t + s
            })), a.length > 1 && (s += "." + a[1]), s
        }
        static changeSecToTime(t, r = "hhmmss") {
            let o = Math.floor(t),
                n = Math.floor(o / 3600),
                e = Math.floor(o % 3600 / 60),
                a = o % 3600 % 60;
            switch (r) {
                case "hhmmss":
                    return n.toString().padStart(2, "0") + ":" + e.toString().padStart(2, "0") + ":" + a.toString().padStart(2, "0");
                case "mmss":
                    return e += 60 * n, e.toString().padStart(2, "0") + ":" + a.toString().padStart(2, "0");
                default:
                    return ""
            }
        }
        static ExchangeCurrency(t, r, o) {
            return o == s.GOLDCOIN || o == s.CNY ? t * r : t / r
        }
        static ExchangeCurrency_DisplayGold(t, r, o, n = s.GOLDCOIN, e = 2) {
            let a = i[o].symbol,
                c = u.DisplayGold(o != n ? u.ExchangeCurrency(t, r, o) : t, e);
            if (o != s.GOLDCOIN) {
                let t = Math.round(c);
                .01 == u.RoundToDecimal(t - c, 2) && (c = t)
            }
            return (a || "") + c
        }
        static ExchangeCurrency_ThousandPointFormat(t, r, o, n = s.GOLDCOIN, e = 2) {
            let a = i[o].symbol,
                c = u.DisplayGold(o != n ? u.ExchangeCurrency(t, r, o) : t, e);
            if (o != s.GOLDCOIN) {
                let t = Math.round(c);
                .01 == u.RoundToDecimal(t - c, 2) && (c = t)
            }
            return (a || "") + u.ThousandPointFormat(c)
        }
        static ExchangeCurrency_ScientificNotation(t, r, o, n = s.GOLDCOIN, e = 2, c = !1) {
            let l = c && i[o].shortSymbol ? i[o].shortSymbol : i[o].symbol,
                g = u.DisplayGold(o != n ? u.ExchangeCurrency(t, r, o) : t, e);
            if (o != s.GOLDCOIN) {
                let t = Math.round(g);
                .01 == u.RoundToDecimal(t - g, 2) && (g = t)
            }
            return (l || "") + a.ScientificNotationWithFormat(g)
        }
        static getDataPointValue(t, r = 1, e = 0, a = !1) {
            if ("string" == typeof t && !t.length) return "";
            let i = "";
            return i = 0 == e ? Math.floor(t).toString() : u.roundForBB(Number(t) / r) + " " + o.config.getStringData("jackfruit_setting_custom_data_point_bb"), i = n.numberSeparator(i), i
        }
        static getDataPointValueCustomRound(t, r = 1, a = 0, i = !1, s = 2, u = e.ROUND_FLOOR) {
            if ("string" == typeof t && !t.length) return "";
            let c = "";
            return c = 0 == a ? o.StringTools.toFixedAsString(t, s, u) : o.StringTools.toFixedAsString(Number(t) / r, s, u) + " " + o.config.getStringData("jackfruit_setting_custom_data_point_bb"), c = n.numberSeparator(c), c
        }
        static getCurrencySymbol(t, r = !1) {
            let o = i[t].symbol;
            return r && i[t].shortSymbol && (o = i[t].shortSymbol), o
        }
        static getDataPointValueWithCurrency(t, r = 1, e = 0, a = !1, i = s.None, c = !1) {
            if ("string" == typeof t && !t.length) return "";
            let l = "";
            return l = 0 == e ? (i != s.None ? this.getCurrencySymbol(i, c).concat(" ") : "") + o.StringTools.fixedNumberToShowString(t) : u.roundForBB(Number(t) / r) + " " + o.config.getStringData("jackfruit_setting_custom_data_point_bb"), l = n.numberSeparator(l), l
        }
        static getDataPointValueWithCurrencyCustomRound(t, r = 1, a = 0, i = !1, u = s.None, c = 2, l = e.ROUND_FLOOR, g = !1) {
            if ("string" == typeof t && !t.length) return "";
            let m = "";
            return m = 0 == a ? (u != s.None ? this.getCurrencySymbol(u, g).concat(" ") : "") + o.StringTools.fixedNumberToShowString(o.StringTools.toFixed(t, c, l)) : o.StringTools.toFixedAsString(Number(t) / r, c, l) + " " + o.config.getStringData("jackfruit_setting_custom_data_point_bb"), m = n.numberSeparator(m), m
        }
        static getChipAmountFromDataPoint(t, r = 1, e = 0) {
            const a = n.convertValueToStandardFormat(n.removeDataPointFromString(t));
            let i = o.StringTools.showStringToNumber(a);
            return 1 == e && (i = Math.floor(i * r)), i
        }
        static getChipAmountFromDataPointWithCurrency(t, r = 1, e = 0, a = s.None, i = !1) {
            a != s.None && (t = t.replace(this.getCurrencySymbol(a, i).concat(" "), ""));
            const u = n.convertValueToStandardFormat(n.removeDataPointFromString(t));
            let c = o.StringTools.showStringToNumber(u);
            return 1 == e && (c = o.StringTools.numberToShowNumber(c * r)), c
        }
        static removeDataPointWithCurrency(t, r = s.None, o = !1) {
            return r != s.None && (t = t.replace(this.getCurrencySymbol(r, o).concat(" "), "")), n.removeDataPointFromString(t)
        }
        static roundForBB(t) {
            return t >= 100 ? t = Math.round(t) : t >= 10 ? t = Math.round(10 * t) / 10 : t >= .01 ? t = Math.round(100 * t) / 100 : t > 0 && (t = .01), o.StringTools.toFixedAsString(t, 1)
        }
        static getStringBBPrefix() {
            return o.config.getStringData("jackfruit_setting_custom_data_point_bb")
        }
    }
    t("FormatParser", u), r._RF.pop()
}
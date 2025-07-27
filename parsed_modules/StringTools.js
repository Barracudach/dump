import * as t from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./ThemeSystemForRichText.js";
import * as m from "./cv.js";
import * as d from "./Enum.js";
import * as f from "./Enum.js";
import * as S from "./Enum.js";
import * as b from "./bignumber.mjs.js";
import * as M from "./FormatParser.js";
import * as p from "./StringUtils.js";

function main() {
    t._RF.push({}, "2fac3s7kLNOeayxSzOldWBS", "StringTools", void 0);
    var T = function(e) {
        return e[e.ROUND_UP = 0] = "ROUND_UP", e[e.ROUND_DOWN = 1] = "ROUND_DOWN", e[e.ROUND_CEIL = 2] = "ROUND_CEIL", e[e.ROUND_FLOOR = 3] = "ROUND_FLOOR", e[e.ROUND_HALF_UP = 4] = "ROUND_HALF_UP", e[e.ROUND_HALF_DOWN = 5] = "ROUND_HALF_DOWN", e[e.ROUND_HALF_EVEN = 6] = "ROUND_HALF_EVEN", e[e.ROUND_HALF_CEIL = 7] = "ROUND_HALF_CEIL", e[e.ROUND_HALF_FLOOR = 8] = "ROUND_HALF_FLOOR", e
    }(T || {});
    class C {
        constructor() {
            this.RoundingMode = T
        }
        static getInstance() {
            return C._g_instance || (C._g_instance = new C), C._g_instance
        }
        format(e, ...t) {
            if (null == e) return null;
            let r = e;
            for (let e = 0; e < t.length; ++e) r = r.replace("{" + e + "}", t[e]);
            return r
        }
        formatC(e, ...t) {
            let r = 0;
            return e.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?(l*)([scudoxfpe])/gi, (function(e, n, o, i, a, g) {
                if (r < 0 || r >= t.length) return;
                let s = i ? parseInt(i.substr(1)) : i,
                    l = e,
                    u = !0;
                switch (a + g) {
                    case "s":
                    case "S":
                        l = m.String(t[r]);
                        break;
                    case "c":
                        l = m.String(t[r])[0];
                        break;
                    case "C":
                        l = m.String(t[r]).toUpperCase()[0];
                        break;
                    case "u":
                    case "U":
                        l = Math.floor(m.Number(t[r])).toString(10);
                        break;
                    case "d":
                    case "D":
                        l = Math.floor(m.Number(t[r])).toString(10);
                        break;
                    case "o":
                        l = Math.floor(m.Number(t[r])).toString(8).toLowerCase();
                        break;
                    case "O":
                        l = Math.floor(m.Number(t[r])).toString(8).toUpperCase();
                        break;
                    case "x":
                        l = Math.floor(m.Number(t[r])).toString(16).toLowerCase();
                        break;
                    case "X":
                        l = Math.floor(m.Number(t[r])).toString(16).toUpperCase();
                        break;
                    case "f":
                    case "F":
                        l = s ? parseFloat(m.Number(t[r]).toString()).toFixed(s) : parseFloat(m.Number(t[r]).toString());
                        break;
                    case "p":
                    case "P":
                        l = s ? parseFloat(m.Number(t[r]).toString()).toPrecision(s) : parseFloat(m.Number(t[r]).toString());
                        break;
                    case "e":
                    case "E":
                        l = s ? parseFloat(m.Number(t[r]).toString()).toExponential(s) : parseFloat(m.Number(t[r]).toString());
                        break;
                    case "ld":
                    case "LD":
                        l = Math.floor(m.Number(t[r])).toString(10);
                        break;
                    case "lld":
                    case "LLD":
                        l = Math.floor(m.Number(t[r])).toString(10);
                        break;
                    case "lf":
                    case "LF":
                        l = s ? parseFloat(m.Number(t[r]).toString()).toFixed(s) : parseFloat(m.Number(t[r]).toString());
                        break;
                    default:
                        u = !1
                }
                if (u && o) {
                    let e = Math.floor(Number(o)),
                        t = o && "0" === o[0] ? "0" : " ";
                    for (; l.length < e;) l = n ? l + t : t + l
                }
                return ++r, l
            }))
        }
        randomRange(e, t) {
            return e + Math.random() * (t - e)
        }
        getDateFormatByUserCountry() {
            let e = m.dataHandler.getUserData().countryISO2;
            return e || m.security.locationMonitor.getLocationDetails(), "US" == e || "AS" == e || "FM" == e || "GU" == e || "MH" == e || "MP" == e || "UM" == e || "VI" == e ? m.Enum.DateTimeTypeByCountry.MM_DD_YYYY : "CN" == e || "BT" == e || "HU" == e || "JP" == e || "KP" == e || "KR" == e || "LT" == e || "MN" == e || "ZW" == e || "TW" == e ? m.Enum.DateTimeTypeByCountry.YYYY_MM_DD : m.Enum.DateTimeTypeByCountry.DD_MM_YYYY
        }
        get countryAlpha3Code() {
            let e = m.dataHandler.getUserData().countryISO2;
            e || m.security.locationMonitor.getLocationDetails();
            const t = m.countryISO3166.find((t => t["alpha-2"].toLowerCase() === e.toLowerCase()));
            return t ? t["alpha-3"] : "AOS"
        }
        formatDateTimeByCountry(e, t, r) {
            let n = "";
            r = !0 === r, e = (t = !0 === t) ? e : 1e3 * e, e = m.config.getTimeWithTimeZone(e).getTime();
            let o = this.getDateFormatByUserCountry();
            if (e > 0) {
                let t = new Date;
                switch (t.setTime(e), o) {
                    case m.Enum.DateTimeTypeByCountry.MM_DD_YYYY:
                        n = r ? this.formatC("%02d/%02d/%02d %02d:%02d", t.getMonth() + 1, t.getDate(), t.getFullYear(), t.getHours(), t.getMinutes()) : this.formatC("%02d/%02d/%02d", t.getMonth() + 1, t.getDate(), t.getFullYear());
                        break;
                    case m.Enum.DateTimeTypeByCountry.YYYY_MM_DD:
                        n = r ? this.formatC("%02d/%02d/%02d %02d:%02d", t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes()) : this.formatC("%02d/%02d/%02d", t.getFullYear(), t.getMonth() + 1, t.getDate());
                        break;
                    case m.Enum.DateTimeTypeByCountry.DD_MM_YYYY:
                        n = r ? this.formatC("%02d/%02d/%02d %02d:%02d", t.getDate(), t.getMonth() + 1, t.getFullYear(), t.getHours(), t.getMinutes()) : this.formatC("%02d/%02d/%02d", t.getDate(), t.getMonth() + 1, t.getFullYear())
                }
            }
            return n
        }
        formatTime(e, t, r) {
            let n = "";
            if (e = (r = !0 === r) ? e : 1e3 * e, (e = m.config.getTimeWithTimeZone(e).getTime()) > 0) {
                let r = new Date;
                switch (r.setTime(e), t) {
                    case m.Enum.eTimeType.Year_Month_Day:
                        n = this.formatC("%02d-%02d-%02d", r.getFullYear(), r.getMonth() + 1, r.getDate());
                        break;
                    case m.Enum.eTimeType.Hour_Min_Sec:
                        n = this.formatC("%02d:%02d:%02d", r.getHours(), r.getMinutes(), r.getSeconds());
                        break;
                    case m.Enum.eTimeType.Hour_Minute:
                        n = this.formatC("%02d:%02d", r.getHours(), r.getMinutes());
                        break;
                    case m.Enum.eTimeType.Month_Day:
                        n = this.formatC("%02d-%02d", r.getMonth() + 1, r.getDate());
                        break;
                    case m.Enum.eTimeType.Month_Day_Hour_Min_Sec:
                        n = this.formatC("%02d-%02d %02d:%02d:%02d", r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds());
                        break;
                    case m.Enum.eTimeType.Year_Month_Day_Hour_Min_Sec:
                        n = this.formatC("%02d-%02d-%02d %02d:%02d:%02d", r.getFullYear(), r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds());
                        break;
                    case m.Enum.eTimeType.Month_Day_Hour_Min:
                        n = this.formatC("%02d-%02d %02d:%02d", r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes());
                        break;
                    case m.Enum.eTimeType.MM_DD_HH_MM:
                        n = this.formatC("%02d.%02d, %02d:%02d", r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes());
                        break;
                    case m.Enum.eTimeType.Day_Hour_Min: {
                        let t = e / 1e3,
                            r = "",
                            o = "",
                            i = Math.floor(t / 3600 / 24),
                            a = t - 3600 * i * 24,
                            g = Math.floor(a / 3600),
                            s = Math.floor(a % 3600 / 60);
                        o = g < 10 ? "0" + g : g.toString(), r = s < 10 ? "0" + s : s.toString(), n = i > 0 ? i + m.config.getStringData("dateInputDay") : "", n += ("" == n ? "" : " ") + (g > 0 ? o + m.config.getStringData("dateInputHour") : ""), n += ("" == n ? "" : " ") + (s > 0 ? r + m.config.getStringData("dateInputMinute") : "")
                    }
                    break;
                    case m.Enum.eTimeType.DD_MMM_YYYY_HH_MM: {
                        let e = m.config.getStringData("MonthAbbrev" + (r.getMonth() + 1), !1, (r.getMonth() + 1).toString());
                        n = this.formatC("%02d %s %02d %02d:%02d", r.getDate(), e, r.getFullYear(), r.getHours(), r.getMinutes())
                    }
                    break;
                    case m.Enum.eTimeType.DD_MMM_YYYY: {
                        let e = m.config.getStringData("MonthAbbrev" + (r.getMonth() + 1), !1, (r.getMonth() + 1).toString());
                        n = this.formatC("%02d %s %02d", r.getDate(), e, r.getFullYear())
                    }
                    break;
                    case m.Enum.eTimeType.Hour_Minute_12: {
                        let e = r.getHours(),
                            t = r.getMinutes(),
                            o = e >= 12 ? m.config.getStringData("Hours_Format_PM", !1, "PM") : m.config.getStringData("Hours_Format_AM", !1, "AM");
                        e %= 12, e = e || 12;
                        let i = t < 10 ? "0" + t : t.toString();
                        n = this.formatC("%02d:%s %s", e, i, o)
                    }
                    break;
                    case m.Enum.eTimeType.DD_MMMM: {
                        let e = m.config.getStringData("Month" + (r.getMonth() + 1), !1, (r.getMonth() + 1).toString());
                        n = this.formatC("%02d %s", r.getDate(), e)
                    }
                    break;
                    case m.Enum.eTimeType.WD_MMM_DDD: {
                        const e = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        let t = m.config.getStringData(e[r.getDay()], !1, (r.getDay() + 1).toString()),
                            o = m.config.getStringData("Month" + (r.getMonth() + 1), !1, (r.getMonth() + 1).toString()),
                            i = C.getDayOrdinalNumberText(r.getDate());
                        n = this.formatC("%s, %s %s", t, o, i)
                    }
                    break;
                    case m.Enum.eTimeType.MM_DD_YY: {
                        let e = r.getFullYear().toString();
                        e = e.substring(2), n = this.formatC("%02d.%02d.%02d", r.getMonth() + 1, r.getDate(), parseInt(e))
                    }
                }
            }
            return n
        }
        formatUTCTime(e, t, r) {
            e = (r = !0 === r) ? e : 1e3 * e;
            let n = "",
                o = new Date;
            switch (o.setTime(e), t) {
                case m.Enum.eTimeType.Hour_Min_Sec:
                    n = this.formatC("%02d:%02d:%02d", o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds())
            }
            return n
        }
        countTime(e, t) {
            let r, n, o, i = "";
            if (!(e >= 0)) return null;
            switch (r = Math.floor(e / 60 / 60 % 24), n = Math.floor(e / 60 % 60), o = Math.floor(e % 60), t != m.Enum.eTimeType.Hh_Mm && (o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r)), t) {
                case m.Enum.eTimeType.Hour_Min_Sec:
                    i = r + ":" + n + ":" + o;
                    break;
                case m.Enum.eTimeType.Hour_Minute:
                    i = r + ":" + n;
                    break;
                case m.Enum.eTimeType.Hh_Mm:
                    i = r + m.config.getStringData("dateInputHour") + ":" + n + m.config.getStringData("dateInputMinute")
            }
            return i
        }
        getStrLen(e) {
            let t = 0,
                r = m.String(e);
            for (let e = 0; e < r.length; ++e) {
                let n = r.charCodeAt(e);
                n >= 0 && n <= 127 ? ++t : t += 2
            }
            return t
        }
        isEmailFormat(e) {
            let t = !0,
                r = e.match(/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/g);
            return t = this.getArrayLength(r) > 0, t
        }
        isAccountFormat(e) {
            return /[^0-9a-zA-Z@.]/g.test(e)
        }
        isIncludeEn(e) {
            return /[a-zA-Z]/g.test(e)
        }
        isClubNameFormat(e) {
            let t = !0,
                r = e.match(/^[a-zA-Z0-9\u4e00-\u9fa5]*$/g);
            return t = this.getArrayLength(r) > 0, t
        }
        isHaveEmpty(e) {
            let t = !1,
                r = m.String(e);
            for (let e = 0; e < r.length; ++e) {
                if (32 === r.charCodeAt(e)) {
                    t = !0;
                    break
                }
            }
            return t
        }
        earseSpace(e) {
            return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "").replace(/\s+/g, "")
        }
        earseNoNumber(e) {
            return e.replace(/[^0-9]/gi, "")
        }
        isSensitiveWords(e, t) {
            let r = null,
                n = !1,
                o = function(e) {
                    n = !0;
                    let r = e;
                    if (t) {
                        r = "";
                        for (let t = 0; t < e.length; ++t) r += "*"
                    }
                    return r
                },
                i = m.resMgr.getSensitiveWords(),
                a = m.StringTools.getArrayLength(i);
            if (a > 0)
                for (let t = 0; t < a; ++t) e = e.replace(i[t], o);
            return n && (r = e), r
        }
        numToFloatString(e) {
            return this.numberToString(this.clientGoldByServer(e))
        }
        clientGoldByServer(e) {
            return m.numFix.times(e, .01)
        }
        serverGoldByClient(e) {
            return m.numFix.times(e, 100)
        }
        deepCopy(e, t) {
            if (null != e) {
                t = t || {};
                for (let r in e)
                    if (e.hasOwnProperty(r))
                        if ("object" == typeof e[r]) {
                            if (!e[r]) continue;
                            t[r] = e[r].constructor === Array ? [] : {}, this.deepCopy(e[r], t[r])
                        } else t[r] = e[r]
            }
            return t
        }
        getArrayLength(e) {
            let t = 0;
            return null != e && (t = m.Number(e.length)), t
        }
        clearArray(e) {
            this.getArrayLength(e) > 0 ? e.splice(0, e.length) : e = []
        }
        arrayMemset(e, t, r) {
            if (!e) return !1;
            m.Number(r) <= 0 && (r = e.length), r = Math.min(r, e.length);
            for (let n = 0; n < e.length; ++n) e[n] = 0, n < r && (e[n] = t);
            return !0
        }
        arrayMemsetNew(e, t) {
            e = m.Number(e);
            let r = new Array(e);
            return this.arrayMemset(r, t), r
        }
        cleanNodeArray(e) {
            if (e && e.length > 0) {
                for (let t = 0; t < e.length; t++) e[t].removeFromParent();
                e.splice(0, e.length)
            }
        }
        setLabelValueAndColor(e, t) {
            let i = this.clientGoldByServer(t);
            e.getComponent(r).string = this.numberToShowString(i), t > 0 ? (e.getComponent(n).color = m.tools.getWinColor(), e.getComponent(r).string = "+" + e.getComponent(r).string) : e.getComponent(n).color = 0 == t ? new o(o.WHITE) : m.tools.getLoseColor()
        }
        setLabelString(e, t, n, o = 0) {
            let g = i(t, e);
            if (!g) return void a("setLabelString can not find node with name:" + t);
            if (!g.getComponent(r)) return void a("setLabelString can not find Label component");
            let s = m.config.getStringData(n);
            s = this.convertText(s, o), i(t, e).getComponent(r).string = s, m.resMgr.getLabelStringSize(i(t, e).getComponent(r))
        }
        numberToString(e) {
            let t = parseFloat(e.toString()),
                r = 0;
            if (0 == e) return "0";
            if (e > 0) return r = 10 * e - parseInt((10 * t).toString()) > 0 ? this.handleNumberByFloor(e, 2) : e - parseInt(e.toString()) == 0 ? e : this.handleNumberByFloor(e, 1), this.numberToShowString(r);
            {
                e = -e;
                let t = parseFloat(e.toString());
                return r = e + parseInt((10 * t).toString()) > 0 ? this.handleNumberByFloor(e, 2) : e - parseInt(e.toString()) == 0 ? e : this.handleNumberByFloor(e, 1), this.numberToShowString(-r)
            }
        }
        numberToShowNumber(e) {
            return m.numFix.times(m.config.getShowGoldRatio(), e)
        }
        numberToShowString(e) {
            return this.numberToShowNumber(e).toString()
        }
        fixedNumberToShowString(e, t = 2, r = b.ROUND_HALF_UP) {
            return this.toFixedAsString(this.numberToShowNumber(e), t, r)
        }
        showStringToNumber(e) {
            return m.numFix.divide(m.Number(parseFloat(e)), m.config.getShowGoldRatio())
        }
        serverGoldToShowNumber(e) {
            return this.numberToShowNumber(this.clientGoldByServer(e))
        }
        serverGoldToShowString(e) {
            return this.serverGoldToShowNumber(e).toString()
        }
        getSignString(e, t = !0) {
            let r;
            return e = m.Number(e), r = t ? m.StringTools.toFixedAsString(e, m.currencyManager.defaultRoundDecimal) : m.String(e), e > 0 && (r = "+" + r), r
        }
        getSignColor(e) {
            let t = new o(188, 186, 186);
            return (e = m.Number(e)) > 0 ? t = m.tools.getWinColor() : e < 0 && (t = m.tools.getLoseColor()), t
        }
        setThemeSystemRichText(e, t) {
            if (!e || !g(e)) return void console.log("function setRichTextString parameter node is null");
            let r = e.getComponent(s);
            r && (r.string = t);
            let n = e.getComponent(h);
            g(n, !0) && n.applyTheme()
        }
        setRichTextString(e, t) {
            if (!e) return void console.log("function setRichTextString parameter node is null");
            let r = 0,
                n = 0,
                o = 0,
                i = "";
            do {
                if (o = t.indexOf("#", o), -1 != o) {
                    if (r = t.lastIndexOf("|", o), -1 == r && (t = "|" + t, r = 0, o += 1), r > 0) {
                        "" != i && "|" == t.charAt(0) && (t = t.replace(t.slice(0, 1), ""));
                        let e = t.slice(0, r);
                        i += e, o = (t = t.replace(e, "")).indexOf("#", 0), r = 0
                    }
                    n = t.indexOf("|", o), -1 == n && (n = (t += "|").length);
                    let e = t.slice(r + 1, o),
                        a = t.slice(o, n),
                        g = e.split(">");
                    if (g.length < 3) i += this.formatC("<color=%s>%s</color>", a, e);
                    else
                        for (let e = 0; e < g.length; e++) i += this.formatC("<color=%s>%s</color>", a, g[e]), e < g.length - 1 && (i += this.formatC("<color=%s>%s</color>", a, ">"));
                    t = t.replace(t.slice(r, n + 1), ""), o = 0
                } else i += t
            } while (-1 != o);
            e.getComponent(s).string = i
        }
        isalnum(e) {
            if (1 != e.length) return void console.log("StringTools::isalnum error str 不是一个字符的字符串");
            let t = e.charCodeAt(0);
            return t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0) || t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0) || t >= "a".charCodeAt(0) && t <= "z".charCodeAt(0)
        }
        ToHex(e) {
            return e > 9 ? e + 55 : e + 48
        }
        FromHex(e) {
            let t = e.charCodeAt(0);
            return t >= "0".charCodeAt(0) && t <= "9".charCodeAt(0) ? t -= "0".charCodeAt(0) : t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0) ? t = t - "A".charCodeAt(0) + 10 : t >= "a".charCodeAt(0) && t <= "z".charCodeAt(0) ? t = t - "a".charCodeAt(0) + 10 : (t = 0, console.log("StringTools::FromHex is error")), t
        }
        isNumber(e) {
            return p.isNumber(e)
        }
        isNumberArray(e) {
            if (Array.isArray(e) && e.length > 0) {
                for (let t = 0; t < e.length; ++t)
                    if (!this.isNumber(e[t])) return !1;
                return !0
            }
            return !1
        }
        setShrinkString(e, t, n = !0) {
            if (!g(e, !0)) return;
            let o = e.getComponent(r),
                i = e.getComponent(s);
            if (!g(o, !0) && !g(i, !0)) return;
            let a = "",
                c = 0,
                h = 0;
            if (o) {
                o.string = t, a = t, c = o.fontSize;
                let i = (new l).addComponent(r);
                i.font = o.font, i.fontSize = c, i.fontFamily = o.fontFamily, i.overflow = r.Overflow.NONE, i.horizontalAlign = r.HorizontalAlign.LEFT, i.verticalAlign = r.VerticalAlign.CENTER, i.string = o.string;
                let g = e.getComponent(u).width,
                    s = m.resMgr.getLabelStringSize(i).width;
                if (s > g) {
                    if (n) {
                        let e = "...";
                        do {
                            if (a = a.substr(0, a.length - 1), a.length <= 0) break;
                            i.string = a + e
                        } while (m.resMgr.getLabelStringSize(i).width > g);
                        a += e
                    } else
                        for (let e = c - 1; e >= 1; --e)
                            if (i.fontSize = e, m.resMgr.getLabelStringSize(i).width <= g) {
                                c = e;
                                break
                            } o.string = a, o.fontSize = c, h = m.resMgr.getLabelStringSize(i).width
                } else h = s;
                return i.destroy(), h
            }
            if (i) {
                i.string = t, a = t, c = i.fontSize;
                let n = (new l).addComponent(s);
                n.font = i.font, n.fontSize = i.fontSize, n.fontFamily = i.fontFamily, n.horizontalAlign = r.HorizontalAlign.LEFT, n.string = i.string;
                let o = e.getComponent(u).width;
                if (n.node.getComponent(u).width > o) {
                    for (let e = c - 1; e >= 1; --e)
                        if (n.fontSize = e, n.node.getComponent(u).width <= o) {
                            c = e;
                            break
                        } i.fontSize = c
                }
                n.destroy()
            }
        }
        fixedNumberTostring(e) {
            let t;
            return t = 0 == e ? e.toString() : e.toFixed(2).toString(), t
        }
        plus(e, t) {
            let r = new b(e),
                n = new b(t);
            return r.plus(n).toNumber()
        }
        minus(e, t) {
            let r = new b(e),
                n = new b(t);
            return r.minus(n).toNumber()
        }
        times(e, t) {
            let r = new b(e),
                n = new b(t);
            return r.times(n).toNumber()
        }
        div(e, t) {
            let r = new b(e),
                n = new b(t);
            return r.div(n).toNumber()
        }
        toFixed(e, t = 2, r = b.ROUND_HALF_UP) {
            e = m.Number(e), t = m.Number(t);
            let n = 0,
                o = new b(e).toFixed(t, r);
            return n = m.Number(o), n
        }
        toFixedAsString(e, t = 2, r = b.ROUND_HALF_UP) {
            e = m.Number(e), t = m.Number(t);
            let n = new b(e);
            return n.isInteger() ? this.toFixed(e, t, r).toString() : n.toFixed(t, r)
        }
        handleNumberByFloor(e, t) {
            return this.toFixed(e, t, this.RoundingMode.ROUND_DOWN)
        }
        generateUUID(e) {
            return (e = m.Number(e)) <= 0 && (e = 32), m.Number(Math.random().toString().substr(3, e) + (new Date).getTime()).toString(36)
        }
        calculateAutoWrapString(e, t) {
            let n = m.String(t);
            if (e instanceof l && g(e) && e.getComponent(r)) {
                let o = c(e).getComponent(r);
                o.string = "", o.overflow = r.Overflow.NONE;
                let i = 0,
                    a = "",
                    g = o.node.getComponent(u).width,
                    s = "\n",
                    l = "",
                    h = 0,
                    d = /[*\s+|-]/gi;
                t = t.replace(/(\r\n)/gi, "\n");
                let f = (e, t) => {
                    let r = t,
                        n = e.substr(t, e.length - t),
                        o = n.search(d);
                    return o < 0 && (o = n.length), r + o
                };
                for (let e = 0; e < t.length; ++e) {
                    let r = f(t, h),
                        n = t.charAt(r);
                    if (t.charAt(e) === n) {
                        if (l = t.charAt(e), ++h, "\n" === l) {
                            a += l, i = 0;
                            continue
                        }
                    } else {
                        r < 0 && (r = t.length);
                        let n = r - h;
                        l = t.substr(h, n), h = r, e = h - 1
                    }
                    let u = m.resMgr.getLabelStringSize(o, l).width;
                    u > g ? (a += l, i = 0) : i + u <= g ? (a += l, i += u) : (a += s, a += l, i = u)
                }
                o.node.destroy(), n = a
            }
            return n
        }
        getStringIndexByLength(e, t, n = 2e3) {
            m.String(t);
            if (e instanceof l && g(e) && e.getComponent(r)) {
                let o = c(e).getComponent(r);
                if (o.overflow = r.Overflow.NONE, m.resMgr.getLabelStringSize(o, t).width <= n) return t.length;
                {
                    let e = "";
                    for (let r = 1; r < t.length; ++r)
                        if (e = t.substr(0, r), m.resMgr.getLabelStringSize(o, e).width > n) return r - 1
                }
                o.node.destroy()
            }
            return t.length
        }
        checkDomain(e) {
            var t = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
            return console.log(e + "  is " + t.test(e)), t.test(e)
        }
        getLengthForCN(e, t) {
            let n = 1;
            if (e instanceof l && g(e) && e.getComponent(r)) {
                let o = c(e).getComponent(r);
                o.string = "", o.overflow = r.Overflow.NONE;
                let i = m.resMgr.getLabelStringSize(o, t).width;
                n = Math.ceil(i / e.getComponent(u).width)
            }
            return n
        }
        cutZero(e) {
            var t = e = e.toString(),
                r = e.length - e.indexOf(".") - 1;
            if (e.indexOf(".") > -1)
                for (let e = r; e > 0; e--)
                    if (t.indexOf(".") > -1) {
                        if (!t.indexOf("0") || "0" !== t.substr(-1, 1)) return t;
                        var n = t.lastIndexOf("0");
                        if ("." === t.charAt(n - 1)) return t.substring(0, n - 1);
                        t = t.substring(0, n)
                    } return e
        }
        capitalizeFirstLetter(e) {
            return p.capitalizeFirstLetter(e)
        }
        capitalizeTheFirstLetterOfEachWord(e) {
            return e ? p.capitalizeTheFirstLetterOfEachWord(e) : e
        }
        convertText(e, t) {
            return p.formatString(e, t)
        }
        readingTime(e, t = .7) {
            let r = 3 * e.match(/[^\s.,;]+/g).length / 10;
            return Math.max(t, r)
        }
        getServerStrByLanguage(e) {
            if (-1 != e.search("<color=#")) return e;
            let t = e.split("#"),
                r = this.getLanguageIndx();
            return t.length < r + 1 && (r = t.length >= 2 ? 1 : 0), t[r]
        }
        getLanguageIndx() {
            return m.config.getCurrentLanguageDetails().index
        }
        static getDayOrdinalNumberText(e) {
            return m.config.getCurrentLanguage() == d.en_US ? C.getOrinalNumberText(e) : e.toString()
        }
        static getOrinalNumberText(e) {
            let t = parseInt(e.toString()),
                r = m.config.getCurrentLanguage(),
                n = "";
            if (r == d.en_US) {
                let e = t % 100;
                const r = ["th", "st", "nd", "rd"];
                n = r[(e - 20) % 10] || r[e] || r[0]
            } else r == d.es_MX ? n = " ⁰" : r == d.pt_BR ? n = "º" : r == d.fr_CA ? n = "No " : r != d.pl_PL && r != d.fi_FI && r != d.no_NO || (n = ".");
            let o = "";
            return o = r == d.fr_CA ? n + e : e + n, o
        }
        formatNumberThousand(e) {
            let t = e.toString().split(".");
            return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "), t.join(".")
        }
        static getScientificNotation(e, t, r, n, o) {
            if (e >= n) {
                const i = n.toString().length - 1;
                let a = Math.floor(Math.log10(e) / i);
                a = a >= o.length ? o.length - 1 : a;
                const g = Math.pow(n, a);
                return m.config.getCurrentLanguage() == m.Enum.LANGUAGE_TYPE.th_TH ? (a = r % n.toString().length + 1, e >= 1e6 ? M.RoundToDecimal(e / 1e6, t) + o[o.length - 1] : (e /= Math.pow(10, r - 1), M.RoundToDecimal(e, t) + o[a])) : M.RoundToDecimal(e / g, t) + o[a]
            }
            return M.RoundToDecimal(e, t).toString()
        }
        static ScientificNotationWithFormat(e, t = 3) {
            const r = Math.trunc(e).toString().length,
                n = r % t,
                o = 0 == n || r > 9 + t ? 0 : t - n;
            return this.getScientificNotation(e, o, r, m.config.getCurrentLanguageDetails().numeralBaseOfLang, m.config.getCurrentLanguageDetails().numeralSymbolArrForLang)
        }
        static removeAccents(e) {
            e = e.split("");
            let t = new Array,
                r = e.length,
                n = -1;
            for (let o = 0; o < r; o++) n = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž".indexOf(e[o]), t[o] = -1 != n ? "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz".charAt(n) : e[o];
            return t = t.join(""), t
        }
        mapOrder(e, t, r, n) {
            return e.sort(((e, o) => {
                let i = 0,
                    a = 0;
                const g = r instanceof Function ? r(e) : e[r],
                    s = r instanceof Function ? r(o) : o[r];
                return n ? (t.find((e => e[n] == g)) || (i += 100), t.find((e => e[n] == s)) || (a += 100), t.findIndex((e => e[n] == g)) + i - (t.findIndex((e => e[n] == s)) + a)) : (t.includes(g) || (i += 100), t.includes(s) || (a += 100), t.indexOf(g) + i - (t.indexOf(s) + a))
            }))
        }
        static IsHex(e) {
            let t;
            return Object.assign([], e).forEach((e => {
                t = e >= "0" && e <= "9" || e >= "a" && e <= "f" || e >= "A" && e <= "F"
            })), t
        }
        static GetRichTextColor(e, t, r = !1) {
            const n = "</color>";
            let o = "<color=#FFFFF>",
                i = "";
            return 6 != t.length ? (i = o + e + n, console.error("hex code not in 6 character length")) : this.IsHex(t) ? i = "<color=#" + t + ">" + e + n : (i = o + e + n, console.error("not a valid hex color, please check characters in hex code")), r && (i = "<b>" + i + "</b>"), 0 === i.length && (i = e), i
        }
        getCurrencySymbol(e) {
            let t = f.USD.symbol;
            switch (e) {
                case 0:
                    t = f.CNY.symbol;
                    break;
                case 1:
                    t = f.CASINO_COIN.symbol;
                    break;
                case 2:
                default:
                    t = f.USD.symbol
            }
            return t
        }
        getPatternRegexp(e) {
            if (null != e && e.length > 0) {
                var t;
                const r = (null == (t = e.match(/\/([gimsuy]*)$/)) ? void 0 : t[1]) || "";
                return e = e.replace(/^\/|\/[gimsuy]*$/g, ""), new RegExp(e, r)
            }
            return null
        }
    }
    e("StringTools", C), C.prizePoolThreshold = new Map([
        [S.USD, 1e8],
        [S.CNY, 1e4]
    ]), C._g_instance = null, t._RF.pop()
}
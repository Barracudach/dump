import * as t from "./cc.js";

function main() {
    t._RF.push({}, "99f7fDD1L1PgIvoGEpDQ5sN", "StringUtils", void 0);
    let r = e("StringFormatFlag", function(e) {
        return e[e.Default = 0] = "Default", e[e.Uppercase_First_Letter = 1] = "Uppercase_First_Letter", e[e.Uppercase_All = 2] = "Uppercase_All", e[e.Lowercase_All = 3] = "Lowercase_All", e[e.Uppercase_Words_First_Letter = 4] = "Uppercase_Words_First_Letter", e
    }({}));
    class s {
        static toString(e) {
            return (e ?? "").toString()
        }
        static toNumber(e) {
            return s.isNumber(e) ? parseFloat(e) : 0
        }
        static isNumber(e) {
            return "number" == typeof e ? isFinite(e) : "string" == typeof e && ("" !== (e = e.trim()) && /^-?(\d+\.?\d*|\.\d+)$/.test(e))
        }
        static formatString(e, t) {
            if (!e || 0 == e.length || s.isNumber(e)) return e;
            switch (t) {
                case r.Uppercase_First_Letter:
                    e = s.capitalizeFirstLetter(e);
                    break;
                case r.Uppercase_All:
                    e = e.toLocaleUpperCase();
                    break;
                case r.Lowercase_All:
                    e = e.toLocaleLowerCase();
                    break;
                case r.Uppercase_Words_First_Letter:
                    e = s.capitalizeTheFirstLetterOfEachWord(e)
            }
            return e
        }
        static capitalizeFirstLetter(e) {
            const t = s.toString(e);
            return t.length <= 0 ? "" : t.charAt(0).toLocaleUpperCase() + t.slice(1).toLocaleLowerCase()
        }
        static capitalizeTheFirstLetterOfEachWord(e) {
            return e.toLowerCase().split(" ").map((e => e.charAt(0).toUpperCase() + e.slice(1))).join(" ")
        }
        static isObject(e) {
            return e && "object" == typeof e && !Array.isArray(e)
        }
        static isJsonFile(e) {
            const t = (e ?? "").split(".").pop();
            return "json" === (null == t ? void 0 : t.toLocaleLowerCase())
        }
        static mergeDeep(e, t) {
            const r = e ?? {},
                a = t ?? {};
            return Object.keys(a).forEach((e => {
                s.isObject(a[e]) ? r[e] = e in r ? s.mergeDeep(r[e], a[e]) : a[e] : r[e] = a[e]
            })), r
        }
        static isSameString(e, t, r = !0) {
            return r ? e.toLowerCase() == t.toLowerCase() : e == t
        }
    }
    e("StringUtils", s), t._RF.pop()
}
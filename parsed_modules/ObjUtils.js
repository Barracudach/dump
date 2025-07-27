import * as e from "./cc.js";

function main() {
    e._RF.push({}, "4c241DVvaJCM6hSkYjihpbX", "ObjUtils", void 0);
    class r {
        static traverseObjGet(t, e) {
            return t ? e.split(".").reduce((function(t, e) {
                return t ? t[e] : void 0
            }), t) : void 0
        }
        static traverseObjSet(t, e, r) {
            let s = e.split("."),
                i = t;
            for (; s.length > 1;) {
                let t = s.shift();
                t in i || (i[t] = {}), i = i[t], "object" != typeof i && (i = {})
            }
            i[s.shift()] = r
        }
        static traverseObjRemove(t, e) {
            let r = e.split("."),
                s = t;
            for (; r.length > 1;) {
                let t = r.shift();
                if (!(t in s)) return;
                s = s[t]
            }
            delete s[r.shift()]
        }
        static isObject(t) {
            return t && "object" == typeof t && !Array.isArray(t)
        }
        static deepMerge(t, e, s) {
            return r.isObject(t) && r.isObject(e) ? (Object.keys(e).forEach((i => {
                const c = e[i],
                    n = t[i];
                "function" != typeof n && (Array.isArray(c) ? Array.isArray(n) && (t[i] = c) : r.isObject(c) ? r.isObject(n) ? 0 === Object.keys(c).length || (n ? r.deepMerge(n, c, s) : t[i] = c) : t[i] || (t[i] = c) : typeof c == typeof n ? "string" == typeof c && s[c] ? t[i] = new s[c] : "string" != typeof c && "boolean" != typeof c && "number" != typeof c || (t[i] = c) : t[i] || (t[i] = c))
            })), t) : t
        }
    }
    t("ObjUtils", r), e._RF.pop()
}
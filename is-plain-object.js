import * as e from "./cc.js";

function main() {
    function n(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    t("isPlainObject", (function(t) {
        if (!1 === n(t)) return !1;
        const e = t.constructor;
        if (void 0 === e) return !0;
        const r = e.prototype;
        if (!1 === n(r)) return !1;
        if (!1 === r.hasOwnProperty("isPrototypeOf")) return !1;
        return !0
    })), e._RF.push({}, "ec540Mbh9lCjqnXde+igYXV", "is-plain-object", void 0), e._RF.pop()
}
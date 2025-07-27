import * as o from "./cc.js";

function main() {
    t("bindAll", (function(t) {
        const o = t.constructor.prototype;
        for (const n of Object.getOwnPropertyNames(o))
            if ("constructor" !== n) {
                const o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
                o && "function" == typeof o.value && (t[n] = t[n].bind(t))
            } return t
    })), o._RF.push({}, "e1556JfMQ1EkLh1Q3hPKWjE", "bind-all", void 0), o._RF.pop()
}
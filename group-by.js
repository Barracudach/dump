import * as n from "./cc.js";

function main() {
    t("groupBy", (function(t, n) {
        const o = {};
        return t.forEach((t => {
            let e;
            if ("string" == typeof n) {
                const o = t[n];
                e = "string" != typeof o ? JSON.stringify(o) : o
            } else n instanceof Function && (e = n(t));
            void 0 !== e && (o[e] = [...o[e] ?? [], t])
        })), o
    })), n._RF.push({}, "07d83oPk8hE1YNdjo5MAOBp", "group-by", void 0), n._RF.pop()
}
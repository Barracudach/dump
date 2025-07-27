import * as e from "./cc.js";

function main() {
    t("dset", (function(t, e, o) {
        e.split && (e = e.split("."));
        var s, c, n = 0,
            r = e.length,
            i = t;
        for (; n < r && "__proto__" != (c = "" + e[n++]) && "constructor" !== c && "prototype" !== c;) i = i[c] = n === r ? o : typeof(s = i[c]) == typeof e ? s : 0 * e[n] != 0 || ~("" + e[n]).indexOf(".") ? {} : []
    })), e._RF.push({}, "6a601EKTgVAZb0YFY2LQGsg", "dset", void 0), e._RF.pop()
}
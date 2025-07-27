import * as t from "./cc.js";

function main() {
    r("v4", (function() {
        var r, t = 0,
            i = "";
        if (!u || n + 16 > 256) {
            for (u = Array(t = 256); t--;) u[t] = 256 * Math.random() | 0;
            t = n = 0
        }
        for (; t < 16; t++) r = u[n + t], i += 6 == t ? e[15 & r | 64] : 8 == t ? e[63 & r | 128] : e[r], 1 & t && t > 1 && t < 11 && (i += "-");
        return n++, i
    })), t._RF.push({}, "5fe53e3V19DC53GvNqA0NTg", "uuidv4", void 0);
    for (var u, n = 256, e = []; n--;) e[n] = (n + 256).toString(16).substring(1);
    t._RF.pop()
}
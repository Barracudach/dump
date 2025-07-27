import * as c from "./cc.js";

function main() {
    t("backoff", (function(t) {
        const c = Math.random() + 1,
            {
                minTimeout: e = 500,
                factor: n = 2,
                attempt: o,
                maxTimeout: a = 1 / 0
            } = t;
        return Math.min(c * e * Math.pow(n, o), a)
    })), c._RF.push({}, "d1c13FcUuBPHaelMXye8Aqd", "backoff", void 0), c._RF.pop()
}
import * as t from "./cc.js";

function main() {
    r("arraysEqual", (function r(t, e) {
        return !(!e || t.length !== e.length) && t.every(((t, n) => t instanceof Array && e[n] instanceof Array ? r(t, e[n]) : t === e[n]))
    })), t._RF.push({}, "15e04Ez/8ZEM7sphG9Gx0dO", "ArrayUtils", void 0), t._RF.pop()
}
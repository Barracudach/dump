import * as l from "./cc.js";

function main() {
    l._RF.push({}, "c18c1ADRfZGSqsXzeGqRpoB", "get-global", void 0);
    e("getGlobal", (() => "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : null));
    l._RF.pop()
}
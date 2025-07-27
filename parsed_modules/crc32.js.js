import * as e from "./cjs-loader.mjs.js";

function main() {
    let n;
    r("default", void 0);
    const u = r("__cjsMetaURL", t.meta.url);
    e.define(u, (function(t, e, u, o, a) {
        var c = function() {
            for (var r, t = [], e = 0; e < 256; e++) {
                r = e;
                for (var n = 0; n < 8; n++) r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
                t[e] = r
            }
            return t
        }();
        u.exports = function(r, t, e, n) {
            var u = c,
                o = n + e;
            r ^= -1;
            for (var a = n; a < o; a++) r = r >>> 8 ^ u[255 & (r ^ t[a])];
            return -1 ^ r
        }, n = r("default", u.exports)
    }), {})
}
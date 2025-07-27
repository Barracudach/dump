import * as r from "./cjs-loader.mjs.js";

function main() {
    let n;
    e("default", void 0);
    const u = e("__cjsMetaURL", t.meta.url);
    r.define(u, (function(t, r, u, o, s) {
        u.exports = function(e, t, r, n) {
            for (var u = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== r;) {
                r -= s = r > 2e3 ? 2e3 : r;
                do {
                    o = o + (u = u + t[n++] | 0) | 0
                } while (--s);
                u %= 65521, o %= 65521
            }
            return u | o << 16 | 0
        }, n = e("default", u.exports)
    }), {})
}
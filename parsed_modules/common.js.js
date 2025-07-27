import * as e from "./cjs-loader.mjs.js";

function main() {
    let n;
    r("default", void 0);
    const a = r("__cjsMetaURL", t.meta.url);
    e.define(a, (function(t, e, a, u, f) {
        var o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

        function s(r, t) {
            return Object.prototype.hasOwnProperty.call(r, t)
        }
        t.assign = function(r) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var e = t.shift();
                if (e) {
                    if ("object" != typeof e) throw new TypeError(e + "must be non-object");
                    for (var n in e) s(e, n) && (r[n] = e[n])
                }
            }
            return r
        }, t.shrinkBuf = function(r, t) {
            return r.length === t ? r : r.subarray ? r.subarray(0, t) : (r.length = t, r)
        };
        var i = {
                arraySet: function(r, t, e, n, a) {
                    if (t.subarray && r.subarray) r.set(t.subarray(e, e + n), a);
                    else
                        for (var u = 0; u < n; u++) r[a + u] = t[e + u]
                },
                flattenChunks: function(r) {
                    var t, e, n, a, u, f;
                    for (n = 0, t = 0, e = r.length; t < e; t++) n += r[t].length;
                    for (f = new Uint8Array(n), a = 0, t = 0, e = r.length; t < e; t++) u = r[t], f.set(u, a), a += u.length;
                    return f
                }
            },
            y = {
                arraySet: function(r, t, e, n, a) {
                    for (var u = 0; u < n; u++) r[a + u] = t[e + u]
                },
                flattenChunks: function(r) {
                    return [].concat.apply([], r)
                }
            };
        t.setTyped = function(r) {
            r ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, i)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, y))
        }, t.setTyped(o), n = r("default", a.exports), a.exports.assign, a.exports.shrinkBuf, a.exports.setTyped, a.exports.Buf8, a.exports.Buf16, a.exports.Buf32
    }), {})
}
import * as e from "./cjs-loader.mjs.js";
import * as s from "./deflate.js";
import * as n from "./common.js";
import * as r from "./strings.js";
import * as o from "./messages.js";
import * as a from "./zstream.js";

function main() {
    let u;
    t("default", void 0);
    const h = t("__cjsMetaURL", i.meta.url);
    e.define(h, (function(i, e, s, n, r) {
        var o = e("./zlib/deflate"),
            a = e("./utils/common"),
            h = e("./utils/strings"),
            l = e("./zlib/messages"),
            f = e("./zlib/zstream"),
            d = Object.prototype.toString;

        function c(t) {
            if (!(this instanceof c)) return new c(t);
            this.options = a.assign({
                level: -1,
                method: 8,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: 0,
                to: ""
            }, t || {});
            var i = this.options;
            i.raw && i.windowBits > 0 ? i.windowBits = -i.windowBits : i.gzip && i.windowBits > 0 && i.windowBits < 16 && (i.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f, this.strm.avail_out = 0;
            var e = o.deflateInit2(this.strm, i.level, i.method, i.windowBits, i.memLevel, i.strategy);
            if (0 !== e) throw new Error(l[e]);
            if (i.header && o.deflateSetHeader(this.strm, i.header), i.dictionary) {
                var s;
                if (s = "string" == typeof i.dictionary ? h.string2buf(i.dictionary) : "[object ArrayBuffer]" === d.call(i.dictionary) ? new Uint8Array(i.dictionary) : i.dictionary, 0 !== (e = o.deflateSetDictionary(this.strm, s))) throw new Error(l[e]);
                this._dict_set = !0
            }
        }

        function p(t, i) {
            var e = new c(i);
            if (e.push(t, !0), e.err) throw e.msg || l[e.err];
            return e.result
        }
        c.prototype.push = function(t, i) {
            var e, s, n = this.strm,
                r = this.options.chunkSize;
            if (this.ended) return !1;
            s = i === ~~i ? i : !0 === i ? 4 : 0, "string" == typeof t ? n.input = h.string2buf(t) : "[object ArrayBuffer]" === d.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;
            do {
                if (0 === n.avail_out && (n.output = new a.Buf8(r), n.next_out = 0, n.avail_out = r), 1 !== (e = o.deflate(n, s)) && 0 !== e) return this.onEnd(e), this.ended = !0, !1;
                0 !== n.avail_out && (0 !== n.avail_in || 4 !== s && 2 !== s) || ("string" === this.options.to ? this.onData(h.buf2binstring(a.shrinkBuf(n.output, n.next_out))) : this.onData(a.shrinkBuf(n.output, n.next_out)))
            } while ((n.avail_in > 0 || 0 === n.avail_out) && 1 !== e);
            return 4 === s ? (e = o.deflateEnd(this.strm), this.onEnd(e), this.ended = !0, 0 === e) : 2 !== s || (this.onEnd(0), n.avail_out = 0, !0)
        }, c.prototype.onData = function(t) {
            this.chunks.push(t)
        }, c.prototype.onEnd = function(t) {
            0 === t && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        }, i.Deflate = c, i.deflate = p, i.deflateRaw = function(t, i) {
            return (i = i || {}).raw = !0, p(t, i)
        }, i.gzip = function(t, i) {
            return (i = i || {}).gzip = !0, p(t, i)
        }, u = t("default", s.exports), s.exports.Deflate, s.exports.deflate, s.exports.deflateRaw, s.exports.gzip
    }), (() => ({
        "./zlib/deflate": s,
        "./utils/common": n,
        "./utils/strings": r,
        "./zlib/messages": o,
        "./zlib/zstream": a
    })))
}
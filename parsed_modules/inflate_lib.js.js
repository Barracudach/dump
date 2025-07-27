import * as n from "./cjs-loader.mjs.js";
import * as s from "./inflate.js";
import * as e from "./common.js";
import * as o from "./strings.js";
import * as r from "./constants.js";
import * as a from "./messages.js";
import * as u from "./zstream.js";
import * as _ from "./gzheader.js";

function main() {
    let h;
    t("default", void 0);
    const l = t("__cjsMetaURL", i.meta.url);
    n.define(l, (function(i, n, s, e, o) {
        var r = n("./zlib/inflate"),
            a = n("./utils/common"),
            u = n("./utils/strings"),
            _ = n("./zlib/constants"),
            l = n("./zlib/messages"),
            f = n("./zlib/zstream"),
            c = n("./zlib/gzheader"),
            w = Object.prototype.toString;

        function d(t) {
            if (!(this instanceof d)) return new d(t);
            this.options = a.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
            }, t || {});
            var i = this.options;
            i.raw && i.windowBits >= 0 && i.windowBits < 16 && (i.windowBits = -i.windowBits, 0 === i.windowBits && (i.windowBits = -15)), !(i.windowBits >= 0 && i.windowBits < 16) || t && t.windowBits || (i.windowBits += 32), i.windowBits > 15 && i.windowBits < 48 && 0 == (15 & i.windowBits) && (i.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f, this.strm.avail_out = 0;
            var n = r.inflateInit2(this.strm, i.windowBits);
            if (n !== _.Z_OK) throw new Error(l[n]);
            this.header = new c, r.inflateGetHeader(this.strm, this.header)
        }

        function p(t, i) {
            var n = new d(i);
            if (n.push(t, !0), n.err) throw n.msg || l[n.err];
            return n.result
        }
        d.prototype.push = function(t, i) {
            var n, s, e, o, h, l, f = this.strm,
                c = this.options.chunkSize,
                d = this.options.dictionary,
                p = !1;
            if (this.ended) return !1;
            s = i === ~~i ? i : !0 === i ? _.Z_FINISH : _.Z_NO_FLUSH, "string" == typeof t ? f.input = u.binstring2buf(t) : "[object ArrayBuffer]" === w.call(t) ? f.input = new Uint8Array(t) : f.input = t, f.next_in = 0, f.avail_in = f.input.length;
            do {
                if (0 === f.avail_out && (f.output = new a.Buf8(c), f.next_out = 0, f.avail_out = c), (n = r.inflate(f, _.Z_NO_FLUSH)) === _.Z_NEED_DICT && d && (l = "string" == typeof d ? u.string2buf(d) : "[object ArrayBuffer]" === w.call(d) ? new Uint8Array(d) : d, n = r.inflateSetDictionary(this.strm, l)), n === _.Z_BUF_ERROR && !0 === p && (n = _.Z_OK, p = !1), n !== _.Z_STREAM_END && n !== _.Z_OK) return this.onEnd(n), this.ended = !0, !1;
                f.next_out && (0 !== f.avail_out && n !== _.Z_STREAM_END && (0 !== f.avail_in || s !== _.Z_FINISH && s !== _.Z_SYNC_FLUSH) || ("string" === this.options.to ? (e = u.utf8border(f.output, f.next_out), o = f.next_out - e, h = u.buf2string(f.output, e), f.next_out = o, f.avail_out = c - o, o && a.arraySet(f.output, f.output, e, o, 0), this.onData(h)) : this.onData(a.shrinkBuf(f.output, f.next_out)))), 0 === f.avail_in && 0 === f.avail_out && (p = !0)
            } while ((f.avail_in > 0 || 0 === f.avail_out) && n !== _.Z_STREAM_END);
            return n === _.Z_STREAM_END && (s = _.Z_FINISH), s === _.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === _.Z_OK) : s !== _.Z_SYNC_FLUSH || (this.onEnd(_.Z_OK), f.avail_out = 0, !0)
        }, d.prototype.onData = function(t) {
            this.chunks.push(t)
        }, d.prototype.onEnd = function(t) {
            t === _.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
        }, i.Inflate = d, i.inflate = p, i.inflateRaw = function(t, i) {
            return (i = i || {}).raw = !0, p(t, i)
        }, i.ungzip = p, h = t("default", s.exports), s.exports.Inflate, s.exports.inflate, s.exports.inflateRaw, s.exports.ungzip
    }), (() => ({
        "./zlib/inflate": s,
        "./utils/common": e,
        "./utils/strings": o,
        "./zlib/constants": r,
        "./zlib/messages": a,
        "./zlib/zstream": u,
        "./zlib/gzheader": _
    })))
}
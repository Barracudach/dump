import * as r from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";

function main() {
    var n;
    r._RF.push({}, "27dffqCPtlB7bpOd6VRuUJ+", "ByteArray", void 0);
    const {
        ccclass: h,
        property: a
    } = s;
    t("ByteArray", h(n = class extends e {
        constructor(...t) {
            super(...t), this.buffer = void 0, this.rpos = void 0, this.wpos = void 0
        }
        createBuffer(t) {
            t instanceof ArrayBuffer ? this.buffer = t : this.buffer = new ArrayBuffer(t), this.rpos = 0, this.wpos = 0
        }
        readInt8() {
            var t = new DataView(this.buffer);
            return this.rpos += 1, t.getInt8(this.rpos - 1)
        }
        readInt16() {
            var t = this.readUint16();
            return t >= 32768 && (t -= 65536), t
        }
        readInt32() {
            var t = this.buffer.slice(this.rpos, this.rpos + 4),
                r = i.ByteBuffer.wrap(t, "utf8", i.ByteBuffer.LITTLE_ENDIAN).readInt32();
            return this.rpos += 4, r
        }
        readInt64() {
            var t = this.buffer.slice(this.rpos, this.rpos + 8),
                r = i.ByteBuffer.wrap(t, "utf8", i.ByteBuffer.LITTLE_ENDIAN).readInt64();
            return this.rpos += 8, r
        }
        readUint8() {
            var t = new DataView(this.buffer);
            return this.rpos += 1, t.getUint8(this.rpos - 1)
        }
        readUint16() {
            var t = new DataView(this.buffer);
            return this.rpos += 2, t.getUint16(this.rpos - 2)
        }
        readUint32() {
            var t = new DataView(this.buffer);
            return this.rpos += 4, t.getUint32(this.rpos - 4)
        }
        readUint64() {
            var t = this.buffer.slice(this.rpos, this.rpos + 8),
                r = i.ByteBuffer.wrap(t, "utf8", i.ByteBuffer.LITTLE_ENDIAN).readUint64();
            return this.rpos += 8, r
        }
        readFloat() {
            try {
                var t = new Float32Array(this.buffer, this.rpos, 1)
            } catch (r) {
                t = new Float32Array(this.buffer.slice(this.rpos, this.rpos + 4))
            }
            return this.rpos += 4, t[0]
        }
        readDouble() {
            try {
                var t = new Float64Array(this.buffer, this.rpos, 1)
            } catch (r) {
                t = new Float64Array(this.buffer.slice(this.rpos, this.rpos + 8), 0, 1)
            }
            return this.rpos += 8, t[0]
        }
        readString() {
            for (var t = new Uint8Array(this.buffer, this.rpos), r = 0, e = "";;) {
                if (0 == t[r]) {
                    r++;
                    break
                }
                if (e += String.fromCharCode(t[r]), r++, this.rpos + r >= this.buffer.byteLength) throw new Error("KBEngine.MemoryStream::readString: rpos(" + (this.rpos + r) + ")>=" + this.buffer.byteLength + " overflow!")
            }
            return this.rpos += r, e
        }
        readBlob() {
            let t = this.readUint32();
            var r = new Uint8Array(this.buffer, this.rpos, t);
            return this.rpos += t, r
        }
        readPackY() {
            return this.readUint16()
        }
        writeInt8(t) {
            new DataView(this.buffer).setInt8(this.wpos, t), this.wpos += 1
        }
        writeInt16(t) {
            this.writeInt8(255 & t), this.writeInt8(t >> 8 & 255)
        }
        writeInt32(t) {
            for (let r = 0; r < 4; r++) this.writeInt8(t >> 8 * r & 255)
        }
        writeInt64(t) {
            this.writeInt32(t.lo), this.writeInt32(t.hi)
        }
        writeUint8(t) {
            new DataView(this.buffer).setUint8(this.wpos, t), this.wpos += 1
        }
        writeUint16(t) {
            new DataView(this.buffer).setUint16(this.wpos, t, !1), this.wpos += 2
        }
        writeUint32(t) {
            new DataView(this.buffer).setUint32(this.wpos, t, !1), this.wpos += 4
        }
        writeUint64(t) {
            this.writeUint32(t.lo), this.writeUint32(t.hi)
        }
        writeFloat(t) {
            try {
                (r = new Float32Array(this.buffer, this.wpos, 1))[0] = t
            } catch (i) {
                var r;
                (r = new Float32Array(1))[0] = t;
                var e = new Uint8Array(this.buffer),
                    s = new Uint8Array(r.buffer);
                e.set(s, this.wpos)
            }
            this.wpos += 4
        }
        writeDouble(t) {
            try {
                (r = new Float64Array(this.buffer, this.wpos, 1))[0] = t
            } catch (i) {
                var r;
                (r = new Float64Array(1))[0] = t;
                var e = new Uint8Array(this.buffer),
                    s = new Uint8Array(r.buffer);
                e.set(s, this.wpos)
            }
            this.wpos += 8
        }
        writeBlob(t) {}
        writeString(t) {
            if (!(t.length > this.space())) {
                for (var r = new Uint8Array(this.buffer, this.wpos), e = 0, s = 0; s < t.length; s++) r[e++] = t.charCodeAt(s);
                r[e++] = 0, this.wpos += e
            }
        }
        writeBuffer(t) {
            for (var r = new Uint8Array(this.buffer, this.wpos), e = new Uint8Array(t), s = 0, i = e.length; s < i; ++s) r[s] = e[s];
            this.wpos += e.length
        }
        readSkip(t) {
            this.rpos += t
        }
        space() {
            return this.buffer.byteLength - this.wpos
        }
        readEOF() {
            return this.buffer.byteLength - this.rpos <= 0
        }
        done() {
            this.rpos = this.wpos
        }
        getrpos() {
            return this.rpos
        }
        getwpos() {
            return this.wpos
        }
        getbuffer() {
            return this.buffer.slice(this.rpos, this.wpos)
        }
        islittleEndian() {
            var t = new ArrayBuffer(2);
            return new DataView(t).setInt16(0, 256, !0), 256 == new Int16Array(t)[0]
        }
    }) || n);
    r._RF.pop()
}
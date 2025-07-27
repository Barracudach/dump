import * as i from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";

function main() {
    var n, u;
    i._RF.push({}, "fda3dNTvEhBIbfShpfqMaic", "RuntimeMd5", void 0);
    const {
        ccclass: _,
        property: a
    } = s;
    t("RuntimeMd5", _(((u = class t extends h {
        to_zerofilled_hex(t) {
            var i = (t >>> 24).toString(16),
                s = (16777215 & t).toString(16);
            return "00".substring(0, 2 - i.length) + i + "000000".substring(0, 6 - s.length) + s
        }
        int64_to_bytes(t) {
            for (var i = [], s = 0; s < 8; s++) i.push(255 & t), t >>>= 8;
            return i
        }
        rol(t, i) {
            return t << i & 4294967295 | t >>> 32 - i
        }
        fF(t, i, s) {
            return t & i | ~t & s
        }
        fG(t, i, s) {
            return s & t | ~s & i
        }
        fH(t, i, s) {
            return t ^ i ^ s
        }
        fI(t, i, s) {
            return i ^ (t | ~s)
        }
        bytes_to_int32(t, i) {
            return t[i + 3] << 24 | t[i + 2] << 16 | t[i + 1] << 8 | t[i]
        }
        int128le_to_hex(t, i, s, h) {
            for (var e = "", n = 0, u = 0, _ = 3; _ >= 0; _--) n = 255 & (u = arguments[_]), n <<= 8, n |= 255 & (u >>>= 8), n <<= 8, n |= 255 & (u >>>= 8), n <<= 8, n |= u >>>= 8, e += this.to_zerofilled_hex(n);
            return e
        }
        updateRun(t, i, s, h, e, n, u, _) {
            var a = h;
            h = s, s = i, i = this._add(i, this.rol(this._add(t, this._add(e, this._add(n, u))), _)), t = a
        }
        getFileMd5(t) {
            if (!(t instanceof Uint8Array)) return console.log("input data type mismatch only support Uint8Array"), null;
            for (var i = [], s = 0; s < t.byteLength; s++) i.push(t[s]);
            var h = i.length;
            i.push(128);
            var e = i.length % 64;
            if (e > 56) {
                for (s = 0; s < 64 - e; s++) i.push(0);
                e = i.length % 64
            }
            for (s = 0; s < 56 - e; s++) i.push(0);
            i = i.concat(this.int64_to_bytes(8 * h));
            var n = 1732584193,
                u = 4023233417,
                _ = 2562383102,
                a = 271733878,
                o = 0,
                d = 0,
                f = 0,
                p = 0;
            for (s = 0; s < i.length / 64; s++) {
                o = n, d = u, f = _, p = a;
                var y = 64 * s;
                return this.updateRun(o, d, f, p, this.fF(d, f, p), 3614090360, this.bytes_to_int32(i, y), 7), this.updateRun(o, d, f, p, this.fF(d, f, p), 3905402710, this.bytes_to_int32(i, y + 4), 12), this.updateRun(o, d, f, p, this.fF(d, f, p), 606105819, this.bytes_to_int32(i, y + 8), 17), this.updateRun(o, d, f, p, this.fF(d, f, p), 3250441966, this.bytes_to_int32(i, y + 12), 22), this.updateRun(o, d, f, p, this.fF(d, f, p), 4118548399, this.bytes_to_int32(i, y + 16), 7), this.updateRun(o, d, f, p, this.fF(d, f, p), 1200080426, this.bytes_to_int32(i, y + 20), 12), this.updateRun(o, d, f, p, this.fF(d, f, p), 2821735955, this.bytes_to_int32(i, y + 24), 17), this.updateRun(o, d, f, p, this.fF(d, f, p), 4249261313, this.bytes_to_int32(i, y + 28), 22), this.updateRun(o, d, f, p, this.fF(d, f, p), 1770035416, this.bytes_to_int32(i, y + 32), 7), this.updateRun(o, d, f, p, this.fF(d, f, p), 2336552879, this.bytes_to_int32(i, y + 36), 12), this.updateRun(o, d, f, p, this.fF(d, f, p), 4294925233, this.bytes_to_int32(i, y + 40), 17), this.updateRun(o, d, f, p, this.fF(d, f, p), 2304563134, this.bytes_to_int32(i, y + 44), 22), this.updateRun(o, d, f, p, this.fF(d, f, p), 1804603682, this.bytes_to_int32(i, y + 48), 7), this.updateRun(o, d, f, p, this.fF(d, f, p), 4254626195, this.bytes_to_int32(i, y + 52), 12), this.updateRun(o, d, f, p, this.fF(d, f, p), 2792965006, this.bytes_to_int32(i, y + 56), 17), this.updateRun(o, d, f, p, this.fF(d, f, p), 1236535329, this.bytes_to_int32(i, y + 60), 22), this.updateRun(o, d, f, p, this.fG(d, f, p), 4129170786, this.bytes_to_int32(i, y + 4), 5), this.updateRun(o, d, f, p, this.fG(d, f, p), 3225465664, this.bytes_to_int32(i, y + 24), 9), this.updateRun(o, d, f, p, this.fG(d, f, p), 643717713, this.bytes_to_int32(i, y + 44), 14), this.updateRun(o, d, f, p, this.fG(d, f, p), 3921069994, this.bytes_to_int32(i, y), 20), this.updateRun(o, d, f, p, this.fG(d, f, p), 3593408605, this.bytes_to_int32(i, y + 20), 5), this.updateRun(o, d, f, p, this.fG(d, f, p), 38016083, this.bytes_to_int32(i, y + 40), 9), this.updateRun(o, d, f, p, this.fG(d, f, p), 3634488961, this.bytes_to_int32(i, y + 60), 14), this.updateRun(o, d, f, p, this.fG(d, f, p), 3889429448, this.bytes_to_int32(i, y + 16), 20), this.updateRun(o, d, f, p, this.fG(d, f, p), 568446438, this.bytes_to_int32(i, y + 36), 5), this.updateRun(o, d, f, p, this.fG(d, f, p), 3275163606, this.bytes_to_int32(i, y + 56), 9), this.updateRun(o, d, f, p, this.fG(d, f, p), 4107603335, this.bytes_to_int32(i, y + 12), 14), this.updateRun(o, d, f, p, this.fG(d, f, p), 1163531501, this.bytes_to_int32(i, y + 32), 20), this.updateRun(o, d, f, p, this.fG(d, f, p), 2850285829, this.bytes_to_int32(i, y + 52), 5), this.updateRun(o, d, f, p, this.fG(d, f, p), 4243563512, this.bytes_to_int32(i, y + 8), 9), this.updateRun(o, d, f, p, this.fG(d, f, p), 1735328473, this.bytes_to_int32(i, y + 28), 14), this.updateRun(o, d, f, p, this.fG(d, f, p), 2368359562, this.bytes_to_int32(i, y + 48), 20), this.updateRun(o, d, f, p, this.fH(d, f, p), 4294588738, this.bytes_to_int32(i, y + 20), 4), this.updateRun(o, d, f, p, this.fH(d, f, p), 2272392833, this.bytes_to_int32(i, y + 32), 11), this.updateRun(o, d, f, p, this.fH(d, f, p), 1839030562, this.bytes_to_int32(i, y + 44), 16), this.updateRun(o, d, f, p, this.fH(d, f, p), 4259657740, this.bytes_to_int32(i, y + 56), 23), this.updateRun(o, d, f, p, this.fH(d, f, p), 2763975236, this.bytes_to_int32(i, y + 4), 4), this.updateRun(o, d, f, p, this.fH(d, f, p), 1272893353, this.bytes_to_int32(i, y + 16), 11), this.updateRun(o, d, f, p, this.fH(d, f, p), 4139469664, this.bytes_to_int32(i, y + 28), 16), this.updateRun(o, d, f, p, this.fH(d, f, p), 3200236656, this.bytes_to_int32(i, y + 40), 23), this.updateRun(o, d, f, p, this.fH(d, f, p), 681279174, this.bytes_to_int32(i, y + 52), 4), this.updateRun(o, d, f, p, this.fH(d, f, p), 3936430074, this.bytes_to_int32(i, y), 11), this.updateRun(o, d, f, p, this.fH(d, f, p), 3572445317, this.bytes_to_int32(i, y + 12), 16), this.updateRun(o, d, f, p, this.fH(d, f, p), 76029189, this.bytes_to_int32(i, y + 24), 23), this.updateRun(o, d, f, p, this.fH(d, f, p), 3654602809, this.bytes_to_int32(i, y + 36), 4), this.updateRun(o, d, f, p, this.fH(d, f, p), 3873151461, this.bytes_to_int32(i, y + 48), 11), this.updateRun(o, d, f, p, this.fH(d, f, p), 530742520, this.bytes_to_int32(i, y + 60), 16), this.updateRun(o, d, f, p, this.fH(d, f, p), 3299628645, this.bytes_to_int32(i, y + 8), 23), this.updateRun(o, d, f, p, this.fI(d, f, p), 4096336452, this.bytes_to_int32(i, y), 6), this.updateRun(o, d, f, p, this.fI(d, f, p), 1126891415, this.bytes_to_int32(i, y + 28), 10), this.updateRun(o, d, f, p, this.fI(d, f, p), 2878612391, this.bytes_to_int32(i, y + 56), 15), this.updateRun(o, d, f, p, this.fI(d, f, p), 4237533241, this.bytes_to_int32(i, y + 20), 21), this.updateRun(o, d, f, p, this.fI(d, f, p), 1700485571, this.bytes_to_int32(i, y + 48), 6), this.updateRun(o, d, f, p, this.fI(d, f, p), 2399980690, this.bytes_to_int32(i, y + 12), 10), this.updateRun(o, d, f, p, this.fI(d, f, p), 4293915773, this.bytes_to_int32(i, y + 40), 15), this.updateRun(o, d, f, p, this.fI(d, f, p), 2240044497, this.bytes_to_int32(i, y + 4), 21), this.updateRun(o, d, f, p, this.fI(d, f, p), 1873313359, this.bytes_to_int32(i, y + 32), 6), this.updateRun(o, d, f, p, this.fI(d, f, p), 4264355552, this.bytes_to_int32(i, y + 60), 10), this.updateRun(o, d, f, p, this.fI(d, f, p), 2734768916, this.bytes_to_int32(i, y + 24), 15), this.updateRun(o, d, f, p, this.fI(d, f, p), 1309151649, this.bytes_to_int32(i, y + 52), 21), this.updateRun(o, d, f, p, this.fI(d, f, p), 4149444226, this.bytes_to_int32(i, y + 16), 6), this.updateRun(o, d, f, p, this.fI(d, f, p), 3174756917, this.bytes_to_int32(i, y + 44), 10), this.updateRun(o, d, f, p, this.fI(d, f, p), 718787259, this.bytes_to_int32(i, y + 8), 15), this.updateRun(o, d, f, p, this.fI(d, f, p), 3951481745, this.bytes_to_int32(i, y + 36), 21), n = this._add(n, o), u = this._add(u, d), _ = this._add(_, f), a = this._add(a, p), this.int128le_to_hex(a, _, u, n).toLowerCase()
            }
        }
        calMD5OfFile(t) {
            return this.getFileMd5(e.fileUtils.getStringFromFile(t))
        }
        _add(t, i) {
            return 4294967295 & t + i
        }
        static getInstance() {
            return t._g_Instance || (t._g_Instance = new t), t._g_Instance
        }
    })._g_Instance = null, n = u)) || n);
    i._RF.pop()
}
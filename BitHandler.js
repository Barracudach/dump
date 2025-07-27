import * as e from "./cc.js";

function main() {
    e._RF.push({}, "50a77Lq8yBGPIkY+osBjmH2", "BitHandler", void 0);
    t("BitHandler", class {
        static reverse_bits(t, e) {
            let r = 0;
            for (let o = 0; o < e; o++) r = (r << 1) + (1 & t), t >>= 1;
            return r
        }
        static swapoddeven_32bits(t) {
            return (2863311530 & t) >>> 1 | (1431655765 & t) << 1
        }
        static swapoddeven_16bits(t) {
            return (43690 & t) >>> 1 | (21845 & t) << 1
        }
        static swapoddeven_8bits(t) {
            return (170 & t) >>> 1 | (85 & t) << 1
        }
        static readLeftBitFromByte(t, e, r) {
            return t >>> e - r
        }
        static readRightBitFromByte(t, e, r) {
            let o = 255;
            return 8 == e ? o = 255 : 16 == e ? o = 65535 : 32 == e && (o = 4294967295), t & o >>> e - r
        }
        static getReadMidNumFromByte(t, e, r, o) {
            let n = this.readLeftBitFromByte(t, e, o);
            return this.readRightBitFromByte(n, e, o - r)
        }
        static concatBinaryNumber(t, e, r) {
            return t << r | e
        }
        static RunTestFunc() {
            let t = 3481132477;
            console.log("###################current data :" + t), console.log("###################current data :" + t.toString(2));
            let e = this.readLeftBitFromByte(t, 32, 3);
            console.log("###################current rd1 :" + e), console.log("###################current rd1 :" + e.toString(2));
            let r = this.readRightBitFromByte(t, 32, 3);
            console.log("###################current rd2 :" + r), console.log("###################current rd2 :" + r.toString(2));
            let o = this.getReadMidNumFromByte(t, 32, 4, 15);
            console.log("###################current rd3 :" + o), console.log("###################current rd3 :" + o.toString(2))
        }
    }), e._RF.pop()
}
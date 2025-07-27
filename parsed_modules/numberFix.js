import * as n from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./bignumber.mjs.js";

function main() {
    var r, u;
    i._RF.push({}, "94fccODIAtAFbHbB2cKEgqr", "numberFix", void 0);
    const {
        ccclass: h,
        property: c
    } = e;
    t("NP", h(((u = class t extends n {
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        strip(t, i = 12) {
            return +parseFloat(t.toPrecision(i))
        }
        digitLength(t) {
            const i = t.toString().split(/[eE]/),
                e = (i[0].split(".")[1] || "").length - +(i[1] || 0);
            return e > 0 ? e : 0
        }
        float2Fixed(t) {
            if (-1 === t.toString().indexOf("e")) return Number(t.toString().replace(".", ""));
            const i = this.digitLength(t);
            return i > 0 ? t * Math.pow(10, i) : t
        }
        times(t, i, ...e) {
            if (e.length > 0) return this.times(this.times(t, i), e[0], ...e.slice(1));
            let n = new s(t),
                r = new s(i);
            return n.times(r).toNumber()
        }
        plus(t, i, ...e) {
            if (e.length > 0) return this.plus(this.plus(t, i), e[0], ...e.slice(1));
            const n = Math.pow(10, Math.max(this.digitLength(t), this.digitLength(i)));
            return (this.times(t, n) + this.times(i, n)) / n
        }
        minus(t, i, ...e) {
            if (e.length > 0) return this.minus(this.minus(t, i), e[0], ...e.slice(1));
            const n = Math.pow(10, Math.max(this.digitLength(t), this.digitLength(i)));
            return (this.times(t, n) - this.times(i, n)) / n
        }
        divide(t, i, ...e) {
            if (e.length > 0) return this.divide(this.divide(t, i), e[0], ...e.slice(1));
            let n = new s(t),
                r = new s(i);
            return n.div(r).toNumber()
        }
        round(t, i) {
            const e = Math.pow(10, i);
            return this.divide(Math.round(this.times(t, e)), e)
        }
        roundWithNaNHandling(t, i) {
            return t || (t = 0), this.round(t, i)
        }
    }).g_instance = null, r = u)) || r);
    i._RF.pop()
}
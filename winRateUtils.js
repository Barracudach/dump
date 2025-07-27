import * as r from "./cc.js";
import * as t from "./cv.js";

function main() {
    r._RF.push({}, "08c34xpHKFJGpaiNBT3WpCo", "winRateUtils", void 0);
    const n = [1e12, 1e11, 1e10, 1e9, 1e8, 1e7, 1e6, 1e5, 1e4, 1e3, 100, 10, 1];
    var a = {},
        o = 0;
    class l {
        constructor() {
            this.getCardsValue = function(e, r) {
                e = r == t.Enum.CreateGameMode.CreateGame_Mode_Short ? this.arrayize_short(e) : this.arrayize(e);
                let n = this.getIndex(e[0], e[1]),
                    l = a[n];
                if (l) return l;
                let i = detect(e, r)[1];
                return a[n] = i, o++, i
            }
        }
        static get Instance() {
            return null == l._instance && (l._instance = new l), l._instance
        }
        arrCopy(e) {
            return e.slice(0)
        }
        arrZero(e) {
            return 4 === e ? [0, 0, 0, 0] : 9 === e ? [0, 0, 0, 0, 0, 0, 0, 0, 0] : 13 === e ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : Array(e).fill(0)
        }
        toPercent(e) {
            return (e = (e = 100 * Number(e)).toFixed(2)) + "%"
        }
        randomPick(e, r) {
            if (Math.abs(parseInt(e)) !== e || Math.abs(parseInt(r)) !== r || e < r || 0 === e || 0 === r) console.log("randomPick的参数为两个正整数，且前者不能小于后者！");
            else
                for (var t = [];;) {
                    var n = Math.floor(Math.random() * e);
                    if (-1 === t.indexOf(n) && t.push(n), t.length === r) return t
                }
        }
        arrayWithout(e, r) {
            let t = {};
            for (let e = 0; e < r.length; e++) t[r[e].join("_")] = !0;
            let n = [];
            for (let r = 0; r < e.length; r++) t[e[r].join("_")] || n.push(e[r]);
            return n
        }
        myConcat(e) {
            for (var r = [], t = 0; t < e.length; t++) r.push(e[t].join("_"));
            return r
        }
        combNumber(e, r) {
            for (var t = 1, n = 1, a = r; a > 0; a--) t *= e, e -= 1, n *= a;
            return t / n
        }
        combination(e, r) {
            var t = [];
            return function e(r, n, a) {
                if (0 === a) return t.push(r);
                for (var o = 0, l = n.length; o <= l - a; o++) e(r.concat(n[o]), n.slice(o + 1), a - 1)
            }([], e, r), t
        }
        arrayMultiply(e, r) {
            for (var t = [], n = 0; n < e.length; n++)
                for (var a = 0; a < r.length; a++) t.push([e[n], r[a]]);
            return t
        }
        arrayize(e) {
            let r = this.arrZero(4),
                t = this.arrZero(13);
            for (let n = 0; n < e.length; n++) r[e[n][0]]++, t[14 - e[n][1]]++;
            return [r, t]
        }
        arrayize_short(e) {
            let r = this.arrZero(4),
                t = this.arrZero(9);
            for (let n = 0; n < e.length; n++) r[e[n][0]]++, t[14 - e[n][1]]++;
            return [r, t]
        }
        getIndex(e, r) {
            let t = 0;
            for (let e = 0; e < r.length; e++) t += r[e] * n[e];
            var a;
            return 5 === (a = e, Math.max(...a)) && (t += 1e13), t + ""
        }
        clearCache(e) {
            o > 5 * e && (console.log("clearCache:clear calc cache now."), a = {}, o = 0)
        }
    }
    e("default", l), l._instance = null, r._RF.pop()
}
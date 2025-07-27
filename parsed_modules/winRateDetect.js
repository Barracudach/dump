import * as e from "./cc.js";
import * as t from "./cv.js";

function main() {
    e._RF.push({}, "969e9FOPoJEIITIab5XD0KU", "winRateDetect", void 0),
        function() {
            let e = e => Math.max(...e);

            function n(e) {
                for (let t = 0; t < e.length; t++)
                    if (5 === e[t]) return !0;
                return !1
            }

            function r(e) {
                for (let t = 0; t < e.length - 4; t++)
                    if (1 === e[t] && 1 === e[t + 1] && 1 === e[t + 2] && 1 === e[t + 3] && 1 === e[t + 4]) return !0;
                return !1
            }

            function i(e) {
                let t = e.length;
                return 1 === e[t - 4] && 1 === e[t - 3] && 1 === e[t - 2] && 1 === e[t - 1] && 1 === e[0]
            }
            window.detect = function(u, f) {
                var c, o = 0,
                    a = u[1].join(""),
                    l = parseInt(a);

                function s(e) {
                    return 12 - parseInt(u[1].indexOf(e))
                }
                if (function(e) {
                        for (let t = 0; t < e.length; t++)
                            if (e[t] > 1) return !1;
                        return !0
                    }(u[1]) && !n(u[0]) && !r(u[1]) && !i(u[1])) return [o, l];
                if (function(t) {
                        let n = e(t);
                        if (2 === n) {
                            let r = t.slice(0);
                            if (r[r.indexOf(n)] = 0, e(r) < 2) return !0
                        }
                        return !1
                    }(u[1])) l = 1e13 * (o = 1) + 1e11 * s(2) + parseInt(a) / 100;
                else if (function(t) {
                        let n = e(t);
                        if (2 === n) {
                            let r = t.slice(0);
                            if (r[r.indexOf(n)] = 0, 2 === e(r)) return !0
                        }
                        return !1
                    }(u[1])) {
                    o = 2;
                    var d = u[1].slice(0);
                    d[d.indexOf(1)] = 0, l = 1e13 * o + parseInt(d.join("")) + s(1) / 100
                } else ! function(t) {
                    let n = e(t);
                    if (3 === n) {
                        let r = t.slice(0);
                        if (r[r.indexOf(n)] = 0, e(r) < 2) return !0
                    }
                    return !1
                }(u[1]) ? n(u[0]) ? l = r(u[1]) ? 1e13 * (o = 8) + parseInt(a) : i(u[1]) ? 1e13 * (o = 8) : 1e13 * (o = f == t.Enum.CreateGameMode.CreateGame_Mode_Short ? 6 : 5) + parseInt(a) : r(u[1]) ? l = 1e13 * (o = 4) + parseInt(a) : i(u[1]) ? l = 1e13 * (o = 4) : ! function(t) {
                    let n = e(t);
                    if (3 === n) {
                        let r = t.slice(0);
                        if (r[r.indexOf(n)] = 0, 2 === e(r)) return !0
                    }
                    return !1
                }(u[1]) ? (c = u[1], 4 === e(c) && (l = 1e13 * (o = 7) + 100 * s(4) + s(1))) : l = 1e13 * (o = f == t.Enum.CreateGameMode.CreateGame_Mode_Short ? 5 : 6) + 100 * s(3) + s(2) : l = 1e13 * (o = 3) + 1e11 * s(3) + parseInt(a) / 100;
                return [o, l]
            }
        }(), e._RF.pop()
}
import * as t from "./cc.js";

function main() {
    n({
        calcGroupRanks: function(n, t, i) {
            for (var o = !1, u = [], a = n.length, h = t.length, l = i.length, g = 0; g < 13; g++) u.splice(0, 0, g + 2 + 16, g + 2 + 32, g + 2 + 64, g + 2 + 128);
            n = n.filter((function(n) {
                return 1 != n && 15 != n
            })), t = t.filter((function(n) {
                return 1 != n && 15 != n
            })), i = i.filter((function(n) {
                return 1 != n && 15 != n
            }));
            var s = [],
                v = [],
                d = [];
            5 == l && (5 == i.length ? d = f(i) : 4 == i.length ? u.forEach((function(n) {
                if (!(i.indexOf(n) >= 0)) {
                    var t = f([n].concat(i));
                    c(t, d) > 0 && (d = t)
                }
            })) : 3 == i.length && u.forEach((function(n) {
                u.forEach((function(t) {
                    if (n != t && !(i.indexOf(n) >= 0 || i.indexOf(t) >= 0)) {
                        var r = f([n, t].concat(i));
                        c(r, d) > 0 && (d = r)
                    }
                }))
            })));
            var p = [],
                x = [];
            5 == h && (5 == t.length ? v = f(t) : 4 == t.length ? u.forEach((function(n) {
                if (!(t.indexOf(n) >= 0)) {
                    var r = f([n].concat(t));
                    c(r, p) > 0 && (p = r), c(r, v) > 0 && c(r, d) <= 0 && (v = r)
                }
            })) : 3 == t.length && u.forEach((function(n) {
                u.forEach((function(r) {
                    if (n != r && !(t.indexOf(n) >= 0 || t.indexOf(r) >= 0)) {
                        var e = f([n, r].concat(t));
                        c(e, p) > 0 && (p = e), c(e, v) > 0 && c(e, d) <= 0 && (v = e)
                    }
                }))
            })), 0 == v.length && (5 == l && (o = !0), v = p));
            c(v, d) > 0 && 5 == l && (o = !0);
            3 == a && (3 == n.length ? s = f(n) : 2 == n.length ? u.forEach((function(t) {
                if (!(n.indexOf(t) >= 0)) {
                    var r = f([t].concat(n));
                    c(r, x) > 0 && (x = r), 5 == h && c(r, v) > 0 || c(r, s) > 0 && (s = r)
                }
            })) : 1 == n.length && u.forEach((function(t) {
                u.forEach((function(r) {
                    if (t != r && !(n.indexOf(t) >= 0 || n.indexOf(r) >= 0)) {
                        var e = f([t, r].concat(n));
                        c(e, x) > 0 && (x = e), 5 == h && c(e, v) > 0 || c(e, s) > 0 && (s = e)
                    }
                }))
            })), 0 == s.length && (5 == h && (o = !0), s = x));
            c(s, v) > 0 && 5 == h && (o = !0);
            var E = [0, 0, 0];
            if (0 == o) {
                if (2 == s[0])(O = s[1]) > 5 && (E[0] = O - 5);
                else if (4 == s[0]) {
                    var O = s[1];
                    E[0] = O + 8
                }
                v[0] >= 4 && (E[1] = r[v[0] - 4]), d[0] >= 5 && (E[2] = e[d[0] - 5])
            }
            return [s, v, d, E, o]
        },
        findRank: f
    }), t._RF.push({}, "6406fYU4rhHVbfE96TVDIbG", "rankpoint", void 0);
    const r = [2, 4, 8, 12, 20, 30, 50],
        e = [2, 4, 6, 10, 15, 25];

    function c(n, t) {
        var r = n.length;
        r > t.length && (r = t.length);
        for (var e = 0; e < r; e++) {
            if (n[e] > t[e]) return 1;
            if (n[e] < t[e]) return -1
        }
        return n.length > t.length ? 1 : n.length < t.length ? -1 : 0
    }

    function f(n) {
        for (var t = !0, r = !0, e = [], f = [], i = [], o = 0, u = 240 & n[0]; o < n.length; o++) {
            var a = n[o];
            1 != a && 15 != a && (e.push(15 & a), r && (240 & a) != u && (r = !1))
        }
        var h = 0 == c(e = e.sort(((n, t) => n - t)), [2, 3, 4, 5, 14]),
            l = 1;
        for (u = e[0], o = 1; o < e.length; o++) e[o] == u ? (t = !1, l++) : (e[o] != u + 1 && (t = !1), l > 1 && (f.push(l), i.push(u), l = 1)), u = e[o];
        if (l > 1 && (f.push(l), i.push(e[e.length - 1])), 5 == e.length) {
            if (t) {
                var g = e[e.length - 1];
                return r ? [14 == g ? 10 : 9, g] : [5, g]
            }
            if (h) return [r ? 9 : 5, 5]
        }
        if (1 == f.length && 4 == f[0]) return [8, i[0]].concat(e.filter((function(n) {
            return n != i[0]
        })));
        if (2 == f.length) {
            if (2 == f[0] && 3 == f[1]) return [7, i[1], i[0]];
            if (3 == f[0] && 2 == f[1]) return [7, i[0], i[1]]
        }
        if (r && 5 == e.length) return [6].concat(e.reverse());
        if (1 == f.length && 3 == f[0]) return [4, i[0]].concat(e.filter((function(n) {
            return !i.includes(n)
        })).reverse());
        if (2 == f.length && 2 == f[0] && 2 == f[1]) {
            var s = e.filter((function(n) {
                return !i.includes(n)
            }));
            return i[0] > i[1] ? [3].concat(i).concat(s) : [3].concat(i.reverse()).concat(s)
        }
        return 1 == f.length && 2 == f[0] ? [2, i[0]].concat(e.filter((function(n) {
            return !i.includes(n)
        })).sort(((n, t) => n - t)).reverse()) : [1].concat(e.reverse())
    }
    t._RF.pop()
}
import * as t from "./cc.js";

function main() {
    t._RF.push({}, "484a72nIK9J/LMCjxe4Q3r3", "Selector", void 0);
    e("default", class {
        constructor(e, t) {
            this.dumper = void 0, this.matcher = void 0, this.dumper = e, this.matcher = t
        }
        getRoot() {
            return this.dumper.getRoot()
        }
        select(e, t) {
            return this.selectImpl(e, t, this.getRoot(), 9999, !0, !0)
        }
        selectImpl(e, t, r, s, i, n) {
            var a = [];
            if (!r) return a;
            var l = e[0],
                c = e[1];
            if (">" === l || "/" === l) {
                var h = [r];
                for (var v in c) {
                    const e = parseInt(v);
                    var u = c[e],
                        o = [];
                    for (var f in h) {
                        var p = h[f],
                            m = s;
                        "/" === l && 0 !== e && (m = 1);
                        var d = this.selectImpl(u, !0, p, m, i, !1);
                        for (var g in d) o.indexOf(d[g]) < 0 && o.push(d[g])
                    }
                    h = o
                }
                a = h
            } else if ("-" === l) {
                var I = c[0],
                    x = c[1],
                    _ = this.selectImpl(I, t, r, s, i, n);
                for (var v in _) {
                    var R = _[v],
                        C = this.selectImpl(x, t, R.getParent(), 1, i, n);
                    for (var g in C) a.indexOf(C[g]) < 0 && a.push(C[g])
                }
            } else if ("index" === l) {
                e = c[0];
                var O = c[1];
                a = [this.selectImpl(e, t, r, s, i, n)[O]]
            } else if ("^" === l) {
                I = c[0];
                if ((_ = this.selectImpl(I, !1, r, s, i, n)).length > 0) {
                    var S = _[0].getParent();
                    S && (a = [S])
                }
            } else this._selectTraverse(e, r, a, t, s, i, n);
            return a
        }
        _selectTraverse(e, t, r, s, i, n, a) {
            if (n && !t.getAttr("visible")) return !1;
            if (this.matcher.match(e, t) && a && (r.indexOf(t) < 0 && r.push(t), !s)) return !0;
            if (0 === i) return !1;
            i -= 1;
            var l = t.getChildren();
            for (var c in t.getChildren()) {
                var h = l[c];
                if (this._selectTraverse(e, h, r, s, i, n, !0)) return !0
            }
            return !1
        }
    }), t._RF.pop()
}
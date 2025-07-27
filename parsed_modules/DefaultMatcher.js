import * as t from "./cc.js";

function main() {
    t._RF.push({}, "6dca0SudKdMForVDFFyZ/Yu", "DefaultMatcher", void 0);
    class a {
        compare(r, t) {
            return r === t
        }
    }
    class e {
        compare(r, t) {
            return !(!r || !t) && null !== r.toString().match(t)
        }
    }
    r("default", class {
        constructor() {
            this.comparators = {
                "attr=": new a,
                "attr.*=": new e
            }
        }
        match(r, t) {
            var a = r[0],
                e = r[1];
            if ("and" === a) {
                for (var c in e) {
                    var n = e[c];
                    if (!this.match(n, t)) return !1
                }
                return !0
            }
            if ("or" === a) {
                for (var c in e) {
                    n = e[c];
                    if (this.match(n, t)) return !0
                }
                return !1
            }
            var u = this.comparators[a];
            if (u) {
                var s = e[0],
                    o = e[1],
                    i = t.getAttr(s);
                return u.compare(i, o)
            }
            return !1
        }
    }), t._RF.pop()
}
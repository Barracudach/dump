import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    e._RF.push({}, "976b6TS4CFKPoUf0Jrveg2E", "TweenControl", void 0);
    t("TweenControl", class {
        static fade(t, e, o, r = 0, s = null) {
            return a(t.addOrGetComponent(n)).delay(r).to(e, {
                opacity: o
            }, {
                easing: l.fade
            }).call((() => {
                s && s()
            })).start()
        }
        static tintTo(t, e, n, r = l.linear, s = 0, i = null) {
            const c = t.getComponent(o);
            if (c) {
                return a(c).delay(s).to(e, {
                    color: n
                }, {
                    easing: r
                }).call((() => {
                    i && i()
                })).start()
            }
            return null
        }
        static fadeIn(t, e, a = null) {
            return this.fade(t, e, 255, 0, a)
        }
        static fadeOut(t, e, a = null) {
            return this.fade(t, e, 0, 0, a)
        }
        static moveBy(t, e, n, l = null, o = 0, r = null) {
            let s = a(t).delay(o);
            return l ? s.to(e, {
                position: t.position.add(n)
            }, {
                easing: l
            }) : s.to(e, {
                position: t.position.add(n)
            }), r && s.call(r), s.start()
        }
        static moveTo(t, e, n, l = null, o = 0, r = null) {
            let s = a(t).delay(o);
            return l ? s.to(e, {
                position: n
            }, {
                easing: l
            }) : s.to(e, {
                position: n
            }), r && s.call(r), s.start()
        }
        static flipY(t, e) {
            let n = e ? -1 : 1;
            return a(t).to(.01, {
                scale: r(t.scale.x, n * Math.abs(t.scale.y), t.scale.z)
            }).start()
        }
        static scaleTo(t, e, n, l = null, o = null) {
            let r = null;
            return r = l ? a(t).to(e, {
                scale: n
            }, {
                easing: l
            }) : a(t).to(e, {
                scale: n
            }), o && r.call(o), r.start()
        }
        static rotateTo(t, e, n, l, o) {
            let r = a(t);
            return l ? r.to(e, {
                angle: n
            }, {
                easing: l
            }) : r.to(e, {
                angle: n
            }), o && r.call(o), r.start()
        }
        static rotateBy(t, e, n, l, o) {
            let r = a(t);
            return l ? r.by(e, {
                angle: n
            }, {
                easing: l
            }) : r.by(e, {
                angle: n
            }), o && r.call(o), r.start()
        }
        static scaleAndFade(t, e, l, o, r, s) {
            let i = t.addOrGetComponent(n),
                c = i.opacity;
            return a(t).to(e, {
                scale: l
            }, {
                easing: r,
                onUpdate(t, e) {
                    i.opacity = o > 0 ? o * e : c - c * e
                }
            }).call(s).start()
        }
        static blink(t, e, n, l) {
            let o = a(t).repeat(n, a(t).hide().delay(e / 2).show().delay(e / 2));
            return l && o.call(l), o.start()
        }
        static blinkForever(t, e, n) {
            return a(t).repeatForever(a(t).hide().delay(e / 2).show().delay(e / 2)).start()
        }
        static easeInOut(t) {
            return e => e < .5 ? Math.pow(2 * e, t) / 2 : 1 - Math.pow(2 * (1 - e), t) / 2
        }
        static easeOut(t) {
            return e => 1 - Math.pow(2 * (1 - e), t) / 2
        }
        static easeIn(t) {
            return e => Math.pow(2 * e, t) / 2
        }
        static stopAll(t) {
            s.stopAllByTarget(t)
        }
        static bezierTo(t, e, n, l, o, s) {
            s = s || Object.create(null);
            return s.onUpdate = (e, a) => {
                t.position = ((t, e, a, n) => {
                    let l = (1 - t) * (1 - t) * e.x + 2 * t * (1 - t) * a.x + t * t * n.x,
                        o = (1 - t) * (1 - t) * e.y + 2 * t * (1 - t) * a.y + t * t * n.y;
                    return r(l, o, 0)
                })(a, n, l, o)
            }, a(t).to(e, {}, s)
        }
        static bezierToV2(t, e, n, o, r) {
            r = r ?? {};
            const s = new i(t.position.x, t.position.y);
            return r.onUpdate = (a, n) => {
                t.position = ((t, e, a) => {
                    const n = Math.abs(1 - 4 * (a - .5) * (a - .5)),
                        l = t.x + (e.x - t.x) * a + o.x * n,
                        r = t.y + (e.y - t.y) * a + o.y * n;
                    return new c(l, r, 0)
                })(s, e, n)
            }, r.easing = l.expoIn, a(t).to(n, {}, r)
        }
    }), e._RF.pop()
}
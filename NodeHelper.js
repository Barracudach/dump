import * as t from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    l._RF.push({}, "91030v2ZnVMe6WWSz6jFPVC", "NodeHelper", void 0);
    class r {
        static copyWorldPosition(e, a, n, l, s) {
            let i = e.parent,
                c = a.parent.getComponent(t).convertToWorldSpaceAR(a.position),
                p = i.getComponent(t).convertToNodeSpaceAR(c);
            if (e.setPosition(p), n) {
                let t = r.getGlobalScale(i),
                    n = r.getGlobalScale(a),
                    l = new o;
                o.divide(l, n, t), e.setScale(l)
            }
            if (l) {
                let t = r.getGlobalRotation(i),
                    o = r.getGlobalRotation(a);
                e.angle = o - t
            }
            s && e.getComponent(t).setAnchorPoint(a.getComponent(t).anchorPoint)
        }
        static setParentWorldPosStays(e, t, o, n, l) {
            let r = t.getComponent(a);
            r ? (r.enabled = !1, e.scheduleOnce((() => {
                this._setParentWorldPosStays(t, o, n, l)
            }))) : this._setParentWorldPosStays(t, o, n, l)
        }
        static _setParentWorldPosStays(e, a, n, l) {
            a.getComponent(t) || a.addComponent(t);
            let s = e.parent,
                i = s.getComponent(t).convertToWorldSpaceAR(e.position);
            if (e.parent = a, e.position = a.getComponent(t).convertToNodeSpaceAR(i), n) {
                let t = r.getGlobalScale(s),
                    n = r.getGlobalScale(a),
                    l = e.getScale(),
                    i = new o(l);
                Math.abs(t.x - n.x) > Number.EPSILON && (i.x = l.x * t.x / n.x), Math.abs(t.y - n.y) > Number.EPSILON && (i.y = l.y * t.y / n.y), Math.abs(t.z - n.z) > Number.EPSILON && (i.z = l.z * t.z / n.z), e.setScale(i)
            }
            if (l) {
                let t = r.getGlobalRotation(s),
                    o = r.getGlobalRotation(a);
                Math.abs(t - o) > Number.EPSILON && (e.angle = e.angle + t - o)
            }
        }
        static getGlobalScale(e) {
            let t = new o,
                a = e;
            for (; a;) o.multiply(t, t, a.getScale()), a = a.parent;
            return t
        }
        static getGlobalRotation(e) {
            let t = e.angle,
                o = e.parent;
            for (; o;) t += o.angle, o = o.parent;
            return t
        }
        static equal(e, t) {
            let o = n(e, !0);
            return o == n(t, !0) && (!o || e.uuid == t.uuid)
        }
    }
    e("default", r), l._RF.pop()
}
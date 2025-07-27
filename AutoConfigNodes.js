import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cv.js";

function main() {
    o._RF.push({}, "7110f8EAOxKn7U7S2mHVyen", "AutoConfigNodes", void 0);
    const i = t("ADD_COMPS_KEY", "addComps"),
        r = t("DEL_COMPS_KEY", "removeComps");
    class c {
        static get tools() {
            return null == this._tools && (this._tools = s.tools), this._tools
        }
        static findComponent(t, o, n = !0, e = !1) {
            let s = t.getComponent(o);
            return !s && n && (s = t.getComponentInChildren(o)), !s && e && (s = t.addComponent(o)), s
        }
        static configure(t, o) {
            if (!t || !o) return;
            let s = t instanceof n ? t : t.node;
            r in o && o[r].forEach((t => {
                var o;
                null == (o = s.getComponent(t)) || o.destroy()
            }));
            for (let c in o) c == i ? o[i].forEach((t => {
                this.configureComp(s, t)
            })) : c != r && (t[c] instanceof e || t[c] instanceof n ? this.configure(t[c], o[c]) : this.tools.traverseObjSet(t, c, o[c]))
        }
        static configureComp(t, o) {
            let n = this.findComponent(t, o.type, !1, !0);
            for (let t in o.props) this.tools.traverseObjSet(n, t, o.props[t])
        }
    }
    t("AutoConfigNodes", c), c._tools = null, o._RF.pop()
}
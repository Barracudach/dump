import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var p, c, a;
    s._RF.push({}, "94ac41j+DRMVLYZvXhghYNH", "BaseComponent", void 0);
    const {
        ccclass: u,
        property: h
    } = r;
    t("default", (p = h({
        tooltip: "重新创建当前属性所有引用\n无法被自动引用的属性将保持不变\n1.找不到的节点\n2.找不到的类型(图声字等资源类型)"
    }), u((e((a = class extends o {
        constructor(...t) {
            super(...t), this.resetInEditor2 = void 0
        }
        get reset() {
            return !1
        }
        set reset(t) {
            this.resetInEditor()
        }
        resetInEditor() {
            let t = (t, e, s, r = !1) => {
                    if (!e) return;
                    let o, n = l(e, this.node);
                    n && (o = s == Node ? n : n.getComponent(s)), o && (r ? this[t].push(o) : this[t] = o)
                },
                e = n.Attr,
                s = i.getClassByName(i.getClassName(this)),
                r = e.getClassAttrs(s),
                o = e.DELIMETER;
            for (const e in this) {
                let s = r[e + o + "visible"];
                if ("_" === e[0] || !1 === s) continue;
                let n = r[e + o + "ctor"],
                    i = r[e + o + "default"],
                    l = r[e + o + "tooltip"];
                if (this.hasOwnProperty(e) && n)
                    if (i && Array.isArray(i)) {
                        let s = l.split("\n");
                        this[e] = [];
                        for (let r = 0; r < s.length; r++) {
                            t(e, s[r], n, !0)
                        }
                    } else {
                        t(e, l || e, n)
                    }
            }
            this.resetInEditor2 && this.resetInEditor2()
        }
    }).prototype, "reset", [p], Object.getOwnPropertyDescriptor(a.prototype, "reset"), a.prototype), c = a)) || c));
    s._RF.pop()
}
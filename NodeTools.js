import * as e from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    e._RF.push({}, "af484Q2DZxMcqLa8jobdXgW", "NodeTools", void 0);
    t("NodeTools", class {
        static changeNodeColor(t, e) {
            if (!o(t, !0)) return;
            let n = t.getComponent(r);
            o(n, !0) && (n.color = e)
        }
        static getNodeWidth(t) {
            if (!o(t, !0)) return 0;
            let e = t.getComponent(n);
            return o(e, !0) ? e.width : 0
        }
        static getNodeHeight(t) {
            if (!o(t, !0)) return 0;
            let e = t.getComponent(n);
            return o(e, !0) ? e.height : 0
        }
        static setNodeHeight(t, e) {
            if (!o(t, !0)) return;
            let r = t.getComponent(n);
            o(r, !0) && (r.height = e)
        }
        static easeOutWithFactor(t) {
            return e => 1 - Math.pow(1 - e, t)
        }
        static setNodeOpacity(t, e) {
            if (!o(t, !0)) return;
            let n = t.getComponent(r);
            o(n, !0) && (n.color = new i(n.color.r, n.color.b, n.color.g, e))
        }
        static getNodeAnchorX(t) {
            if (!o(t, !0)) return 0;
            let e = t.getComponent(n);
            return o(e, !0) ? e.anchorX : 0
        }
        static getNodeAnchorY(t) {
            if (!o(t, !0)) return 0;
            let e = t.getComponent(n);
            return o(e, !0) ? e.anchorY : 0
        }
        static setNodeWidth(t, e) {
            if (!o(t, !0)) return;
            let r = t.getComponent(n);
            o(r, !0) && (r.width = e)
        }
        static getNodeOpacity(t) {
            if (!o(t, !0)) return 0;
            let e = t.getComponent(r);
            return o(e, !0) ? e.color.a : 0
        }
        static getNodeColor(t) {
            if (!o(t, !0)) return i.WHITE;
            let e = t.getComponent(r);
            return o(e, !0) ? e.color : i.WHITE
        }
    }), e._RF.pop()
}
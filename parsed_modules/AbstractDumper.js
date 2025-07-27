import * as t from "./cc.js";

function main() {
    t._RF.push({}, "4dfd32gMWhPAai7ptKnxQb1", "AbstractDumper", void 0);
    r("default", class {
        getRoot() {
            throw new Error("not impl")
        }
        dumpHierarchy(r, t = !0) {
            if (!r) return null;
            !0 === r && (r = this.getRoot());
            var e = r.enumerateAttrs();
            e.zOrders = {
                local: 0,
                global: 0
            };
            var a = {
                    name: e.name || r.getAttr("name"),
                    payload: e,
                    children: []
                },
                n = r.getChildren();
            for (var i in n) {
                var c = n[i];
                (!t || e.visible || c.getAttr("visible")) && a.children.push(this.dumpHierarchy(c, t))
            }
            return a
        }
    }), t._RF.pop()
}
import * as t from "./cc.js";
import * as n from "./cc.js";

function main() {
    n._RF.push({}, "a182bIIqz1Ep6u+RhnJM+oC", "CocosCreator3Node", void 0);
    class r {
        constructor(e) {
            this.node = void 0, this.node = e
        }
        getParent() {
            let e = this.node.parent;
            return e ? new r(e) : null
        }
        getChildren() {
            let e = [],
                t = this.node.children;
            for (const n of t) e.push(new r(n));
            return e
        }
        getAttr(e) {
            if ("visible" === e) return this.node.activeInHierarchy;
            if ("name" === e) return this.node.name || "<no-name>";
            if ("text" === e) {
                for (const e of this.node.components)
                    if ("string" in e) return e.string;
                return ""
            }
            if ("type" === e) {
                let e = "";
                switch (this.node.components.length) {
                    case 0:
                        return "";
                    case 1:
                        e = this.node.components[0].name;
                        break;
                    default:
                        e = this.node.components[1].name
                }
                return e.replace(/\w+\./, "")
            }
            if ("pos" === e) {
                let e = this.node.worldPosition;
                return [e.x / r.screenWidth, 1 - e.y / r.screenHeight]
            }
            if ("size" === e) {
                var n;
                let e = null == (n = this.node.getComponent(t)) ? void 0 : n.contentSize;
                return e ? [e.width / r.screenWidth, e.height / r.screenHeight] : [0, 0]
            }
            if ("scale" === e) return [this.node.scale.x, this.node.scale.y];
            if ("anchorPoint" === e) {
                let e = this.node.getComponent(t);
                return e ? [e.anchorX, e.anchorY] : [0, 0]
            }
            return "touchable" == e || ("tag" === e ? "" : "enabled" === e || ("rotation" === e ? this.node.rotation : void 0))
        }
        getAvailableAttributeNames() {
            return ["name", "type", "visible", "pos", "size", "scale", "anchorPoint", "text", "enabled", "rotation"]
        }
        setAttr() {}
        enumerateAttrs() {
            var e = {},
                t = this.getAvailableAttributeNames();
            for (var n in t) {
                var r = t[n],
                    o = this.getAttr(r);
                void 0 !== o && (e[r] = o)
            }
            return e
        }
    }
    e("default", r), r.screenWidth = 0, r.screenHeight = 0, n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./CommonTools.js";

function main() {
    var u, p, c, l, g;
    n._RF.push({}, "7ee28R8iBBIFJMrmBK2gnXR", "AutoSizeByChildrenHeight", void 0);
    const {
        ccclass: f,
        executeInEditMode: y,
        property: E
    } = o;
    t("AutoSizeByChildrenHeight", (u = f("AutoSizeByChildrenHeight"), p = E({
        type: Boolean
    }), u(c = y((g = e((l = class extends s {
        constructor(...t) {
            super(...t), i(this, "autoUpdate", g, this), this.isFirstUpdate = !0
        }
        onLoad() {
            this.autoUpdate && (this.registerEvents(), this.updateHeight())
        }
        onDestroy() {
            this.unregisterEvents()
        }
        registerEvents() {
            this.node.children.forEach((t => {
                r(t) && t.on(h.EventType.SIZE_CHANGED, this.updateHeight, this)
            }))
        }
        unregisterEvents() {
            this.node.children.forEach((t => {
                r(t) && t.off(h.EventType.SIZE_CHANGED, this.updateHeight, this)
            }))
        }
        updateHeight() {
            if (!this.node) return;
            let t = 0;
            this.node.children.forEach((e => {
                let i = e.getComponent(a);
                if (i) {
                    let e = i.node.position.y - i.anchorY * i.height,
                        n = i.node.position.y + (1 - i.anchorY) * i.height - e;
                    t = Math.max(t, n)
                }
            }));
            let e = this.node.getComponent(a);
            e && e.height !== t && (e.height = t, this.isFirstUpdate = !1, d.instance.updateAlignments(this.node, !0, !1))
        }
        update(t) {
            0 != this.isFirstUpdate && this.autoUpdate && this.updateHeight()
        }
    }).prototype, "autoUpdate", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), c = l)) || c) || c));
    n._RF.pop()
}
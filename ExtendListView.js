import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";

function main() {
    i._RF.push({}, "375f8JgtENLYLy9PlVfD491", "ExtendListView", void 0);
    t("default", class {
        static extend(t) {
            if (null == t) return;
            let i = !1;
            t.node.on(e.EventType.TOUCH_MOVE, (function(e) {
                if (e.target != t.node) {
                    if (i) return;
                    e.propagationStopped = !0;
                    let o = e.getLocation().subtract(e.getStartLocation()),
                        a = Math.abs(o.x) > 7,
                        c = Math.abs(o.y) > 7;
                    n(o.x, a, c), (t.horizontal && !a && c || t.vertical && !c && a) && (i = !0)
                }
            }), t.node, !0), t.node.on(e.EventType.TOUCH_END, (function() {
                i = !1
            }), t.node, !0), t.node.on(e.EventType.TOUCH_CANCEL, (function() {
                i = !1
            }), t.node, !0);
            let a = t._hasNestedViewGroup;
            t._hasNestedViewGroup = function(t, e) {
                return !(!t || t.eventPhase !== o.CAPTURING_PHASE) && (!!i && a.call(this, t, e))
            }.bind(t)
        }
    }), i._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";

function main() {
    var r, a, l, u, h;
    i._RF.push({}, "2229fqjNL9PuIiTHtBLhGFs", "DelayActiveNode", void 0);
    const {
        ccclass: d,
        property: p
    } = c;
    e("DelayActiveNode", (r = d("DelayActiveNode"), a = p(n), r((h = t((u = class extends s {
        constructor(...e) {
            super(...e), o(this, "container", h, this)
        }
        showNodeUI(e, t = 0) {
            this.unscheduleAllCallbacks(), t > 0 ? this.scheduleOnce((() => {
                this.container.active = e
            }), t) : this.container.active = e
        }
        onEnable() {
            this.showNodeUI(!1), this.showNodeUI(!0, 1.5)
        }
        onDisable() {
            this.showNodeUI(!1)
        }
    }).prototype, "container", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = u)) || l));
    i._RF.pop()
}
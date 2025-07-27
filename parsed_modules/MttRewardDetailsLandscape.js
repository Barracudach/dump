import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./PageOneTableTuplePkw.js";

function main() {
    var s, c, l, p;
    n._RF.push({}, "cd7f1E7KrBPdYt7hHLtQ5dz", "MttRewardDetailsLandscape", void 0);
    const {
        ccclass: u,
        property: d
    } = a;
    e("default", (s = d(o), u((p = t((l = class extends i {
        constructor(...e) {
            super(...e), r(this, "percentageNode", p, this)
        }
        showBg() {
            this.tupleBg.enabled = this.tupleId % 2 != 0
        }
        setInfo(e, t, r, n, o) {
            null != e && (super.setInfo(e, t, r, n, o), this.percentageNode && (this.percentageNode.active = e.proportion && e.proportion > 0))
        }
    }).prototype, "percentageNode", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = l)) || c));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./MVCListComp.js";

function main() {
    var a, c, p, u, m, y, f;
    s._RF.push({}, "fe9e6nAeolLx5zAGN7ftERQ", "FlashMyGameComp", void 0);
    const {
        ccclass: h,
        property: d
    } = r;
    t("FlashMyGameComp", (a = h("FlashMyGameComp"), c = d(n), p = d(o), a((y = e((m = class extends l {
        constructor(...t) {
            super(...t), this.mvcView = void 0, i(this, "listView", y, this), i(this, "listEmpty", f, this)
        }
        setActiveListEmpty(t) {
            this.listEmpty && (this.listEmpty.active = t)
        }
    }).prototype, "listView", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(m.prototype, "listEmpty", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = m)) || u));
    s._RF.pop()
}
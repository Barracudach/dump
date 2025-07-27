import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./LobbyTools.js";
import * as a from "./MTTUnregisterComp.js";

function main() {
    var c, l, p, u, d;
    o._RF.push({}, "00942/Uc3ZE2JAQnNqa54bF", "MTTUnregisterCompLandscape", void 0);
    const {
        ccclass: m,
        property: T
    } = r;
    e("MTTUnregisterCompLandscape", (c = m("MTTUnregisterCompLandscape"), l = T(i), c((d = n((u = class extends a {
        constructor(...e) {
            super(...e), t(this, "mainPanel", d, this)
        }
        show() {
            this.node.active = !0, s.zoomIn(this.node, this.mainPanel)
        }
        hide(e = null) {
            s.zoomOut(this.node, this.mainPanel, (() => {
                this.node.active = !1, e && e()
            }))
        }
    }).prototype, "mainPanel", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = u)) || p));
    o._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./GameJackPotSignItemGroup.js";
import * as l from "./GameJackPotSignItemSingle.js";

function main() {
    var g, u, s, p, m, S, P, d, k, f;
    n._RF.push({}, "542e7CnwjpCfL4VQr48pxWZ", "GameJackPotSignItem", void 0);
    const {
        ccclass: h,
        property: I
    } = o;
    e("GameJackPotSignItem", (g = I(a), u = I(a), s = I(l), p = I(c), h((P = t((S = class extends r {
        constructor(...e) {
            super(...e), i(this, "singlePanelNode", P, this), i(this, "groupPanelNode", d, this), i(this, "gameJackPotSignItemSingleScript", k, this), i(this, "gameJackPotSignItemGroupScript", f, this)
        }
        setdata(e) {
            const {
                data: t
            } = e, i = Array.isArray(t);
            this.singlePanelNode.active = !i, this.groupPanelNode.active = i, i ? this.gameJackPotSignItemGroupScript.setdata(t) : this.gameJackPotSignItemSingleScript.setdata(t)
        }
        toggleBackground(e) {
            this.gameJackPotSignItemSingleScript.toggleBackground(e), this.gameJackPotSignItemGroupScript.toggleBackground(e)
        }
    }).prototype, "singlePanelNode", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(S.prototype, "groupPanelNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(S.prototype, "gameJackPotSignItemSingleScript", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(S.prototype, "gameJackPotSignItemGroupScript", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = S)) || m));
    n._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./mttconfig.js";
import * as c from "./EventCustom.js";

function main() {
    var u, p, b, f, g, d, h, m;
    r._RF.push({}, "18063YGdMpCgrUSy6G1MYgy", "ImpokerHallBannerPage", void 0);
    const {
        ccclass: v,
        property: y
    } = a;
    e("ImpokerHallBannerPage", (u = y(i), p = y(o), b = y(i), v((d = t((g = class extends l {
        constructor(...e) {
            super(...e), n(this, "banner", d, this), n(this, "testLabel", h, this), n(this, "view", m, this), this.bannerId = 0
        }
        onBannerClicked() {
            let e = new c(s.topBannerEvent, !0);
            e.setUserData(this.bannerId), this.node.dispatchEvent(e)
        }
    }).prototype, "banner", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(g.prototype, "testLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(g.prototype, "view", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = g)) || f));
    r._RF.pop()
}
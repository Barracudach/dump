import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./TrackingComp.js";

function main() {
    var c, a, s, l;
    t._RF.push({}, "84fccL4TvxGTZpX3bl3S+Xl", "BannerTracking", void 0);
    const {
        ccclass: u,
        property: p
    } = i;
    n("BannerTracking", (c = p({
        override: !0,
        visible: !1
    }), u((l = r((s = class extends o {
        constructor(...n) {
            super(...n), e(this, "trackOnLoad", l, this)
        }
        onEnable() {
            this.node.on("banner-shown", this.track, this)
        }
        onDisable() {
            this.node.off("banner-shown", this.track, this)
        }
    }).prototype, "trackOnLoad", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), a = s)) || a));
    t._RF.pop()
}
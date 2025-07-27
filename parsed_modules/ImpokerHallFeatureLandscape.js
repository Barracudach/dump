import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./MultipleRoomManager.js";
import * as c from "./ImpokerHallFeature.js";

function main() {
    var l, s, u, p;
    o._RF.push({}, "db2cdSl6LRLBoLBfyPyspyr", "ImpokerHallFeatureLandscape", void 0);
    const {
        ccclass: d,
        property: m
    } = a;
    e("ImpokerHallFeatureLandscape", (l = m(n), d((p = r((u = class extends c {
        constructor(...e) {
            super(...e), t(this, "container", p, this)
        }
        show(e) {
            this.container.active = e
        }
        isShow() {
            return this.container.active
        }
        onDestroy() {
            var e;
            super.onDestroy(), null == (e = i.instance) || e.removeAllRooms()
        }
    }).prototype, "container", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = u)) || s));
    o._RF.pop()
}
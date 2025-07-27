import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./AnalyticsHandler.js";

function main() {
    var c, l, p, u, h, g, f, m, b, y, d, k, z, v, w, C;
    r._RF.push({}, "5af5cVpz6tHo78JFqyz4REd", "TrackingComp", void 0);
    const {
        ccclass: S,
        property: F
    } = o;
    let L = (c = S("TrackingCompProperties"), l = F(n), p = F(n), c((g = e((h = class {
        constructor() {
            i(this, "propertyName", g, this), i(this, "propertyValue", f, this)
        }
    }).prototype, "propertyName", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), f = e(h.prototype, "propertyValue", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), u = h)) || u);
    t("TrackingComp", (m = F([L]), S((d = e((y = class extends a {
        constructor(...t) {
            super(...t), i(this, "trackOnLoad", d, this), i(this, "screenName", k, this), i(this, "segmentEvent", z, this), i(this, "functionality", v, this), i(this, "itemString", w, this), i(this, "properties", C, this), this.trackingFired = !1
        }
        onLoad() {
            this.trackOnLoad && this.track()
        }
        getProperties() {
            if ("" == this.itemString && this.properties.length <= 0) return null;
            let t = {};
            "" != this.itemString && (t.item = this.itemString);
            for (let e of this.properties) t[e.propertyName] = e.propertyValue;
            return t
        }
        track() {
            this.trackOnLoad && this.trackingFired || (s.getInstance().sendEvent(this.screenName, this.segmentEvent, this.functionality, this.getProperties()), this.trackingFired = !0)
        }
    }).prototype, "trackOnLoad", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), k = e(y.prototype, "screenName", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), z = e(y.prototype, "segmentEvent", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), v = e(y.prototype, "functionality", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), w = e(y.prototype, "itemString", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), C = e(y.prototype, "properties", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = y)) || b));
    r._RF.pop()
}
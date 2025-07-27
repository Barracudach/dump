import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, p, h, f;
    i._RF.push({}, "243a57zu9hPZ4SnDfD2GF6b", "HallFeature", void 0);
    const {
        ccclass: b,
        property: d
    } = n;
    e("HallFeature", (c = d(a), b((f = t((h = class extends s {
        constructor(...e) {
            super(...e), r(this, "prefab", f, this), this._mttListFeaturePrefab = null
        }
        onLoad() {
            if (this._mttListFeaturePrefab = o(this.prefab), this._mttListFeaturePrefab.parent = this.node, this.isLeaveGap()) {
                let e = this._mttListFeaturePrefab.getComponent(l);
                e && (e.top = 100, e.updateAlignment())
            }
        }
        isLeaveGap() {
            let e = u.windowSize;
            return cc_mtt.vv.ConsoleLog.log("isLeaveGap", e.width, e.height), e.height / e.width >= 2
        }
    }).prototype, "prefab", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = h)) || p));
    i._RF.pop()
}
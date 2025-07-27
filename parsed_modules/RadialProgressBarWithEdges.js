import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var n, u, l, p, g, c;
    o._RF.push({}, "57985nT6AhLeY5z/NxMMzmU", "RadialProgressBarWithEdges", void 0);
    const {
        ccclass: h,
        property: d
    } = a;
    r("default", (n = d(t), u = d(i), h((g = s((p = class extends i {
        constructor(...r) {
            super(...r), e(this, "progressBarCursor", g, this), e(this, "progressBarCursorProgress", c, this)
        }
        updateProgress(r) {
            let s = 1 - r;
            if (this.progress = s, this.progressBarCursor) {
                let s = 360 * r;
                this.progressBarCursor.angle = -s
            }
            if (this.progressBarCursorProgress) {
                let r = Math.max(.1, s);
                r = Math.min(.35, s), this.progressBarCursorProgress.progress = r
            }
        }
    }).prototype, "progressBarCursor", [n], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = s(p.prototype, "progressBarCursorProgress", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    o._RF.pop()
}
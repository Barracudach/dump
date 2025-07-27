import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cc.js";
import * as s from "./NewReplayerLandcapeUI.js";
import * as n from "./ScrollViewWithSlider.js";

function main() {
    var c, p, u, h, d, w, f;
    t._RF.push({}, "46a3caHTqNIYph0US6ZADiM", "NewReplayerMobileUI", void 0);
    const {
        ccclass: y,
        property: b
    } = a;
    e("NewReplayerMobileUI", (c = y("NewReplayerMobileUI"), p = b(n), u = b(l), c((w = r((d = class extends s {
        constructor(...e) {
            super(...e), i(this, "scrollViewSlider", w, this), i(this, "masksToHideWhenCapture", f, this)
        }
        getCaptureDelayTime() {
            return .1
        }
        getCaptureMaxSize() {
            return 2048
        }
        prepareCapture() {
            super.prepareCapture(), o(this.scrollViewSlider) && (this.scrollViewSlider.scrollView.stopAutoScroll(), this.scrollViewSlider.scrollView.scrollToTop(0, !1)), this.masksToHideWhenCapture.forEach((e => {
                o(e) && (e.enabled = !1)
            }))
        }
        finishCapture() {
            super.finishCapture(), this.masksToHideWhenCapture.forEach((e => {
                o(e) && (e.enabled = !0)
            }))
        }
    }).prototype, "scrollViewSlider", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = r(d.prototype, "masksToHideWhenCapture", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), h = d)) || h));
    t._RF.pop()
}
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as a from "./cc.js";
import * as s from "./StatusView.js";
import * as r from "./AppConfig.js";
import * as u from "./StatusPopup.js";
import * as l from "./StatusPopup.js";

function main() {
    var p, y, h, L, f, d, v, w, b, g, S, m;
    c._RF.push({}, "f554eDa8npIlow7nI2DJB34", "StatusController", void 0);
    const {
        ccclass: x,
        property: P
    } = o;
    t("default", (p = P(i), y = P(i), h = P(i), L = P(i), f = P(l), x((w = e((v = class extends a {
        constructor(...t) {
            super(...t), n(this, "connectionLatencyRed", w, this), n(this, "connectionLatencyYellow", b, this), n(this, "connectionLatencyLoading", g, this), n(this, "connectionLatencyText", S, this), n(this, "statusPopup", m, this)
        }
        showLatency(t = s.None) {
            if (this.haveAssets()) {
                switch (t) {
                    case s.None:
                    case s.Normal:
                        this.connectionLatencyLoading.active = !1, this.connectionLatencyRed.active = !1, this.connectionLatencyYellow.active = !1, this.connectionLatencyText.active = !1;
                        break;
                    case s.Slow:
                        this.connectionLatencyLoading.active = !1, this.connectionLatencyRed.active = !1, this.connectionLatencyYellow.active = !0, this.connectionLatencyText.active = !1;
                        break;
                    case s.VerySlow:
                    case s.ExtremelySlow:
                        this.connectionLatencyLoading.active = !1, this.connectionLatencyRed.active = !0, this.connectionLatencyYellow.active = !1, this.connectionLatencyText.active = !1;
                        break;
                    case s.Disconnect:
                        this.connectionLatencyLoading.active = !0, this.connectionLatencyRed.active = !1, this.connectionLatencyYellow.active = !1, this.connectionLatencyText.active = !1
                }
                this.statusPopup && r.Instance.getGameConfig().showNetworkStatusPopUp && (t == s.Disconnect ? this.statusPopup.show(u.DISCONNECT) : this.statusPopup.hide())
            }
        }
        haveAssets() {
            return !!(this.connectionLatencyLoading && this.connectionLatencyYellow && this.connectionLatencyRed && this.connectionLatencyText)
        }
    }).prototype, "connectionLatencyRed", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(v.prototype, "connectionLatencyYellow", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(v.prototype, "connectionLatencyLoading", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(v.prototype, "connectionLatencyText", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(v.prototype, "statusPopup", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = v)) || d));
    c._RF.pop()
}
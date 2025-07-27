import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, d, l, u, g, R, C;
    o._RF.push({}, "2b60a7kd9pN1rE7TvPwgx4+", "AspectRatioFitter", void 0);
    const {
        ccclass: y,
        executeInEditMode: m,
        disallowMultiple: b,
        property: w
    } = s;
    var P = function(t) {
        return t[t.None = 0] = "None", t[t.WidthControlsHeight = 1] = "WidthControlsHeight", t[t.HeightControlsWidth = 2] = "HeightControlsWidth", t[t.FitInParent = 3] = "FitInParent", t[t.EnvelopeParent = 4] = "EnvelopeParent", t
    }(P || {});
    t("AspectRatioFitter", (h = y("AspectRatioFitter"), d = w({
        type: n(P)
    }), h(l = m(l = b(((C = class extends a {
        constructor(...t) {
            super(...t), i(this, "aspectMode", g, this), i(this, "aspectRatio", R, this)
        }
        onLoad() {
            this.updateRect()
        }
        update(t) {
            this.updateRect()
        }
        updateRect() {
            switch (this.aspectMode) {
                case P.None:
                    break;
                case P.HeightControlsWidth:
                    this.node.getComponent(p).width = this.node.getComponent(p).height * this.aspectRatio;
                    break;
                case P.WidthControlsHeight:
                    this.node.getComponent(p).height = this.node.getComponent(p).width / this.aspectRatio;
                    break;
                case P.FitInParent:
                case P.EnvelopeParent: {
                    let t = new r(r.ZERO),
                        e = this.getParentSize();
                    e.y * this.aspectRatio < e.x != (this.aspectMode == P.FitInParent) ? (t.y = e.x / this.aspectRatio, t.x = t.y * this.aspectRatio) : (t.x = e.y * this.aspectRatio, t.y = t.x / this.aspectRatio), this.setSize(new c(t.x, t.y));
                    break
                }
            }
        }
        getParentSize() {
            let t = this.node.parent;
            return t ? new r(t.getComponent(p).width, t.getComponent(p).height) : new r(r.ZERO)
        }
        setSize(t) {
            this.node.getComponent(p).setContentSize(t)
        }
    }).AspectMode = P, g = e((u = C).prototype, "aspectMode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return P.None
        }
    }), R = e(u.prototype, "aspectRatio", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), l = u)) || l) || l) || l));
    o._RF.pop()
}
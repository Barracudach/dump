import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as r from "./AppConfig.js";

function main() {
    var l, p, s, u, d, y;
    o._RF.push({}, "570cd+slhFLc5coINNYe1UE", "DynamicPromoPopupScaler", void 0);
    const {
        ccclass: h,
        property: S
    } = i;
    e("DynamicPromoPopupScaler", (l = S({
        tooltip: "Scale value applied when the layout is in landscape mode"
    }), p = S({
        tooltip: "Scale value applied when the layout is in portrait mode"
    }), h((d = t((u = class extends c {
        constructor(...e) {
            super(...e), a(this, "landscapeLayoutScale", d, this), a(this, "portraitLayoutScale", y, this)
        }
        onLoad() {
            this.adjustScale()
        }
        adjustScale() {
            const e = r.Instance.isLandscapeLayout ? this.landscapeLayoutScale : this.portraitLayoutScale;
            this.node.setScale(new n(e, e, 1))
        }
    }).prototype, "landscapeLayoutScale", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .667
        }
    }), y = t(u.prototype, "portraitLayoutScale", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), s = u)) || s));
    o._RF.pop()
}
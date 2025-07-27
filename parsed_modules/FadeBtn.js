import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./Enum.js";

function main() {
    var r, p, u, d;
    o._RF.push({}, "817c1/rTE9OS61HBJkxzPX8", "FadeBtn", void 0);
    const {
        ccclass: l,
        property: y
    } = s;
    t("FadeBtn", (r = y(n), l((d = i((u = class extends a {
        constructor(...t) {
            super(...t), e(this, "page", d, this), this.nodeUIOpacity = null
        }
        onLoad() {
            this.page && (this.nodeUIOpacity = this.node.getComponent(c), this.nodeUIOpacity.opacity = 0, this.page.on(h.ActionShowFinish, this.show, this), this.page.on(h.ActionHideStart, this.hide, this))
        }
        onDestroy() {
            this.page && (this.page.off(h.ActionShowFinish, this.show, this), this.page.off(h.ActionHideStart, this.hide, this))
        }
        show() {
            this.nodeUIOpacity.opacity = 255
        }
        hide() {
            this.nodeUIOpacity.opacity = 0
        }
    }).prototype, "page", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = u)) || p));
    o._RF.pop()
}
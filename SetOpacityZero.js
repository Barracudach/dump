import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var p, l, u, y, d, f;
    r._RF.push({}, "158044nVPNE9IlZjrJ3rQ31", "SetOpacityZero", void 0);
    const {
        ccclass: h,
        property: g
    } = c;
    t("default", (p = g(n), l = g(o), h((d = e((y = class extends s {
        constructor(...t) {
            super(...t), i(this, "nodeList", d, this), i(this, "Opacity", f, this)
        }
        SetOpacityZero() {
            for (let t = 0; t < this.nodeList.length; t++) this.nodeList[t].getComponent(a).opacity = this.Opacity
        }
    }).prototype, "nodeList", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = e(y.prototype, "Opacity", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), u = y)) || u));
    r._RF.pop()
}
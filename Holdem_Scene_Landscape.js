import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./CommonTools.js";

function main() {
    var c, u, p, _;
    i._RF.push({}, "7fd86C9hg9BF5/VAle2DwXz", "Holdem_Scene_Landscape", void 0);
    const {
        ccclass: h,
        property: w
    } = r;
    e("default", (c = w(o), h((_ = n((p = class extends s {
        constructor(...e) {
            super(...e), t(this, "holdem_view_prefab", _, this), this.holdem_view_node = null
        }
        onLoad() {
            this.holdem_view_node = d(this.holdem_view_prefab), this.node.addChild(this.holdem_view_node)
        }
        start() {
            var e;
            window._resizingWindowIndex = null == (e = l.instance.getParentScene(a, this.node)) ? void 0 : e.windowID, window.dispatchEvent(new Event("resize"))
        }
    }).prototype, "holdem_view_prefab", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    i._RF.pop()
}
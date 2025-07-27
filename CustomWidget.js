import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var a, g, p, u, d, c, l;
    n._RF.push({}, "baa46WQjqxOC6fU57VkorsY", "CustomWidget", void 0);
    const {
        ccclass: E,
        property: m
    } = s;
    var I = function(e) {
        return e[e.NORMAL = 0] = "NORMAL", e[e.RESIZE_HEIGHT = 1] = "RESIZE_HEIGHT", e[e.RESIZE_WIDTH = 2] = "RESIZE_WIDTH", e[e.RESIZE = 3] = "RESIZE", e
    }(I || {});
    e("default", (a = m({
        type: r(I)
    }), E(((l = class e extends o {
        constructor(...e) {
            super(...e), i(this, "alignType", u, this), i(this, "resizeHeight", d, this), i(this, "resizeWidth", c, this)
        }
        updateAlignment() {
            switch (this.alignType) {
                case I.NORMAL:
                    super.updateAlignment();
                    break;
                case I.RESIZE_HEIGHT:
                    this.node.getComponent(h).height = this.target ? this.target.getComponent(h).height * this.resizeHeight : this.node.parent.getComponent(h).height * this.resizeHeight;
                    break;
                case I.RESIZE_WIDTH:
                    this.node.getComponent(h).width = this.target ? this.target.getComponent(h).width * this.resizeWidth : this.node.parent.getComponent(h).width * this.resizeWidth;
                    break;
                case I.RESIZE:
                    this.node.getComponent(h).height = this.target ? this.target.getComponent(h).height * this.resizeHeight : this.node.parent.getComponent(h).height * this.resizeHeight, this.node.getComponent(h).width = this.target ? this.target.getComponent(h).width * this.resizeWidth : this.node.parent.getComponent(h).width * this.resizeWidth;
                    break;
                default:
                    super.updateAlignment()
            }
            this.node.emit(e.EventType.ALIGNMENT_UPDATE)
        }
    }).EventType = r({
        ALIGNMENT_UPDATE: "alignment_update"
    }), u = t((p = l).prototype, "alignType", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return I.NORMAL
        }
    }), d = t(p.prototype, "resizeHeight", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), c = t(p.prototype, "resizeWidth", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), g = p)) || g));
    n._RF.pop()
}
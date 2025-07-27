import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./Enum.js";
import * as b from "./cv.js";
import * as u from "./Translator.js";
import * as h from "./NodeTools.js";

function main() {
    var c, d, f, p, g, _;
    i._RF.push({}, "d5b23L5bfRMppO0R6NMHdXZ", "MttHallHintLabelPkw", void 0);
    const {
        ccclass: E,
        property: H
    } = n;
    e("default", (c = H(s), d = H(o), E((g = t((p = class extends r {
        constructor(...e) {
            super(...e), l(this, "label", g, this), l(this, "bgbubble", _, this), this.FIXED_WIDTH = 650, this.MAXIMUM_CHAR = 40, this.TOP_BORDER = 30, this.SIDE_BORDER = 52
        }
        onLoad() {
            this.setLabel(u("MTT_HALL.TAB.HALL.HINTS_RE_ENTRY"))
        }
        start() {}
        setLabel(e) {
            this.label.string = e, this.resizeLabel()
        }
        resizeLabel() {
            let e = this.MAXIMUM_CHAR;
            b.config.getCurrentLanguage() == a.zh_CN && (e /= 2), this.label.string.length > e ? (this.label.overflow = s.Overflow.RESIZE_HEIGHT, h.setNodeWidth(this.label.node, this.FIXED_WIDTH)) : this.label.overflow = s.Overflow.NONE
        }
        update() {
            let e = this.TOP_BORDER,
                t = this.SIDE_BORDER;
            h.setNodeHeight(this.bgbubble.node, h.getNodeHeight(this.label.node) + e), h.setNodeWidth(this.bgbubble.node, h.getNodeWidth(this.label.node) + t)
        }
    }).prototype, "label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(p.prototype, "bgbubble", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = p)) || f));
    i._RF.pop()
}
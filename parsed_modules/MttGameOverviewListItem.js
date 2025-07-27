import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, d, g, f, p, c, b, v, m, w, z, L, R, H, x;
    n._RF.push({}, "cad677k/xpNdoC7resdyiJZ", "MttGameOverviewListItem", void 0);
    const {
        ccclass: y,
        property: C
    } = o;
    e("MttGameOverviewListItem", (s = y("MttGameOverviewListItem"), d = C(a), g = C(a), f = C(l), p = C(r), c = C(l), s((m = t((v = class extends h {
        constructor(...e) {
            super(...e), i(this, "title", m, this), i(this, "valueLabel", w, this), i(this, "maxHeightRef", z, this), i(this, "lineWidget", L, this), i(this, "maxValueWidthRef", R, this), i(this, "topPadding", H, this), i(this, "botPadding", x, this)
        }
        start() {
            for (let e = 0; e < this.maxHeightRef.length; e++) this.maxHeightRef[e].on(l.EventType.SIZE_CHANGED, this.updateHeight, this)
        }
        setValue(e) {
            this.valueLabel.string = e, u(this.maxValueWidthRef) && (this.valueLabel.overflow == a.Overflow.RESIZE_HEIGHT && (this.valueLabel.overflow = a.Overflow.NONE), this.valueLabel.updateRenderData(), this.valueLabel.node.getContentSize().width >= this.maxValueWidthRef.getContentSize().width ? (this.valueLabel.overflow = a.Overflow.RESIZE_HEIGHT, this.valueLabel.node.setContentSize(this.maxValueWidthRef.getContentSize().width, this.valueLabel.node.getContentSize().height)) : this.valueLabel.overflow = a.Overflow.NONE, this.valueLabel.updateRenderData(), this.updateHeight())
        }
        updateHeight() {
            let e = 0;
            this.maxHeightRef.forEach((t => {
                t.active && e < t.getContentSize().height && (e = t.getContentSize().height)
            }));
            let t = 0;
            u(this.lineWidget) && (t = this.lineWidget.node.getContentSize().height), this.node.setContentSize(this.node.getContentSize().width, this.topPadding + e + this.botPadding + t), this.maxHeightRef.forEach((e => {
                var t;
                null == (t = e.getComponent(r)) || t.updateAlignment()
            })), u(this.lineWidget) && this.lineWidget.updateAlignment()
        }
        update(e) {}
    }).prototype, "title", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(v.prototype, "valueLabel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(v.prototype, "maxHeightRef", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), L = t(v.prototype, "lineWidget", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(v.prototype, "maxValueWidthRef", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(v.prototype, "topPadding", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 18
        }
    }), x = t(v.prototype, "botPadding", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 18
        }
    }), b = v)) || b));
    n._RF.pop()
}
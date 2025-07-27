import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var d, c, u, f, p, g;
    n._RF.push({}, "4f15d0zAbtExpEBECZcgvA1", "FitChildrenSize", void 0);
    const {
        ccclass: y,
        property: C,
        executeInEditMode: b
    } = h;
    t("FitChildrenSize", y(d = b((u = i((c = class extends r {
        constructor(...t) {
            super(...t), e(this, "fitWidth", u, this), e(this, "fitHeight", f, this), e(this, "fitMax", p, this), e(this, "isAuto", g, this)
        }
        onEnable() {
            if (!this.isAuto) return;
            let t = this.node.children;
            for (let i = 0, e = t.length; i < e; i++) t[i].on(o.EventType.SIZE_CHANGED, this.onChildChanged, this), t[i].on("active-in-hierarchy-changed", this.onChildChanged, this);
            this.updateUI(t)
        }
        onDisable() {
            if (!this.isAuto) return;
            let t = this.node.children;
            for (let i = 0, e = t.length; i < e; i++) s(t[i], !0) && (t[i].off(o.EventType.SIZE_CHANGED, this.onChildChanged, this), t[i].off("active-in-hierarchy-changed", this.onChildChanged, this))
        }
        onChildChanged() {
            this.updateUI(this.node.children)
        }
        invokeUpdate() {
            this.updateUI(this.node.children)
        }
        updateUI(t) {
            if (!this.fitWidth && !this.fitHeight || !t || 0 == t.length) return;
            let i = new a(0, 0);
            for (let e = 0, n = t.length; e < n; e++)
                if (t[e].active) {
                    let n = t[e].getComponent(l);
                    this.fitWidth && (0 == i.x ? i.set(n.width, i.y) : i.set(this.fitMax ? Math.max(i.x, n.width) : Math.min(i.x, n.width), i.y)), this.fitHeight && (0 == i.y ? i.set(i.x, n.height) : i.set(i.x, this.fitMax ? Math.max(i.y, n.height) : Math.min(i.y, n.height)))
                } let e = this.node.getComponent(l);
            this.fitWidth && (e.width = i.x), this.fitHeight && (e.height = i.y)
        }
    }).prototype, "fitWidth", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), f = i(c.prototype, "fitHeight", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), p = i(c.prototype, "fitMax", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), g = i(c.prototype, "isAuto", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), d = c)) || d) || d);
    n._RF.pop()
}
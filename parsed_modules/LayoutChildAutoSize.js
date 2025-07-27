import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";

function main() {
    var y, r, E, c, z, C, g, f, A, m, S;
    o._RF.push({}, "acd81/mh5ZJ75OjiwEZBuaK", "LayoutChildAutoSize", void 0);
    const {
        ccclass: N,
        property: T,
        menu: I,
        executeInEditMode: R
    } = h;
    t("LayoutChildAutoSize", (y = I("Custom UI/Layout Child Auto Size"), r = T(s), E = T({
        type: n,
        tooltip: "If component is added on ScrollView then this should be the Content"
    }), c = T({
        visible: function() {
            return null != this.layout && this.layout.resizeMode == s.ResizeMode.CONTAINER && this.layout.type == s.Type.VERTICAL
        }
    }), z = T({
        visible: function() {
            return null != this.layout && this.layout.resizeMode == s.ResizeMode.CONTAINER && this.layout.type == s.Type.HORIZONTAL
        }
    }), N(C = y(C = R((f = e((g = class extends a {
        constructor(...t) {
            super(...t), i(this, "layout", f, this), i(this, "maxSizeAs", A, this), i(this, "maxHeight", m, this), i(this, "maxWidth", S, this), this.editorFocus = !1
        }
        onEnable() {
            if (u(this.layout, !0)) {
                let t = this.node.getComponent(d);
                t && (this.layout.type == s.Type.VERTICAL ? t.isAlignTop = t.isAlignBottom = !1 : this.layout.type == s.Type.HORIZONTAL && (t.isAlignLeft = t.isAlignRight = !1)), this.layout.resizeMode == s.ResizeMode.NONE && this.layout.node.on(n.EventType.SIZE_CHANGED, this.updateSize, this), this.layout.node.on(n.EventType.CHILD_ADDED, this.updateSize, this), this.layout.node.on(n.EventType.CHILD_REMOVED, this.updateSize, this), this.layout.node.on(n.EventType.CHILDREN_ORDER_CHANGED, this.updateSize, this);
                let e = this.layout.node.children;
                for (let t = 0, i = e.length; t < i; t++) e[t].uuid != this.node.uuid && (e[t].on(n.EventType.SIZE_CHANGED, this.updateSize, this), e[t].on(n.EventType.ACTIVE_IN_HIERARCHY_CHANGED, this.updateSize, this))
            }
            u(this.maxSizeAs, !0) && this.maxSizeAs.on(n.EventType.SIZE_CHANGED, this.updateSize, this), this.onLayoutSizeChanged()
        }
        onDisable() {
            if (u(this.layout, !0)) {
                this.layout.resizeMode == s.ResizeMode.NONE && this.layout.node.off(n.EventType.SIZE_CHANGED, this.updateSize, this), this.layout.node.off(n.EventType.CHILD_ADDED, this.updateSize, this), this.layout.node.off(n.EventType.CHILD_REMOVED, this.updateSize, this), this.layout.node.off(n.EventType.CHILDREN_ORDER_CHANGED, this.updateSize, this);
                let t = this.layout.node.children;
                for (let e = 0, i = t.length; e < i; e++) t[e].uuid != this.node.uuid && (t[e].off(n.EventType.SIZE_CHANGED, this.updateSize, this), t[e].off(n.EventType.ACTIVE_IN_HIERARCHY_CHANGED, this.updateSize, this))
            }
            u(this.maxSizeAs, !0) && this.maxSizeAs.off(n.EventType.SIZE_CHANGED, this.updateSize, this)
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            this.editorFocus && this.onLayoutSizeChanged()
        }
        updateSize() {
            this.onLayoutSizeChanged()
        }
        onLayoutSizeChanged() {
            if (!u(this.layout, !0)) return;
            if (this.layout.type == s.Type.NONE || this.layout.type == s.Type.GRID) return;
            let t = this.layout.node.children,
                e = 0;
            switch (this.layout.type) {
                case s.Type.VERTICAL: {
                    for (let i = 0, o = t.length; i < o; i++) t[i].uuid != this.node.uuid && t[i].active && (e += t[i].getComponent(l).height + this.layout.spacingY);
                    e += this.layout.paddingTop + this.layout.paddingBottom + .01;
                    let i = 0;
                    if (this.layout.resizeMode == s.ResizeMode.NONE ? i = this.layout.node.getComponent(l).height - e : this.layout.resizeMode == s.ResizeMode.CONTAINER && (i = this.maxHeight), i > 0) {
                        let t = 0;
                        t = u(this.maxSizeAs) ? Math.min(this.maxSizeAs.getComponent(l).height + .01, i) : i, this.node.getComponent(l).height = t / this.node.scale.y, this.updateNodeComponents()
                    }
                }
                break;
                case s.Type.HORIZONTAL: {
                    for (let i = 0, o = t.length; i < o; i++) t[i].uuid != this.node.uuid && t[i].active && (e += t[i].getComponent(l).width + this.layout.spacingX);
                    e += this.layout.paddingLeft + this.layout.paddingRight + .01;
                    let i = 0;
                    if (this.layout.resizeMode == s.ResizeMode.NONE ? i = this.layout.node.getComponent(l).width - e : this.layout.resizeMode == s.ResizeMode.CONTAINER && (i = this.maxWidth), i > 0) {
                        let t = 0;
                        t = u(this.maxSizeAs) ? Math.min(this.maxSizeAs.getComponent(l).width + .01, i) : i, this.node.getComponent(l).width = t / this.node.scale.x, this.updateNodeComponents()
                    }
                }
            }
        }
        updateNodeComponents() {
            p.resMgr.adaptWidget(this.node, !0, !1), this.layout.updateLayout()
        }
    }).prototype, "layout", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(g.prototype, "maxSizeAs", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(g.prototype, "maxHeight", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), S = e(g.prototype, "maxWidth", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), C = g)) || C) || C) || C));
    o._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./ResourceManager.js";

function main() {
    var p, g, l, y, S, f, C, b, N, z, W;
    n._RF.push({}, "e38f4VJmSRCrLtwVcPy0mIP", "SizeContentSync", void 0);
    const {
        ccclass: _,
        property: m,
        executeInEditMode: w,
        menu: E,
        executionOrder: D
    } = r;
    e("SizeContentSync", (p = E("Custom UI/Size Content Sync"), g = m(o), l = m({
        tooltip: "Making this true will mess up Action.ts screen `show` animation for mobile. If you need this to be true test how screen `show` animation is working on mobile, especially after you change language to/from JP (because JP uses different font than other languages."
    }), _(y = w(y = p((f = t((S = class extends s {
        constructor(...e) {
            super(...e), i(this, "sourceNode", f, this), i(this, "syncWidth", C, this), i(this, "syncHeight", b, this), i(this, "_paddingWidth", N, this), i(this, "_paddingheight", z, this), i(this, "adaptChildrenWidget", W, this)
        }
        get paddingWidth() {
            return this._paddingWidth
        }
        set paddingWidth(e) {
            e !== this._paddingWidth && (this._paddingWidth = e, this.updateContentSize())
        }
        get paddingheight() {
            return this._paddingheight
        }
        set paddingheight(e) {
            e !== this._paddingheight && (this._paddingheight = e, this.updateContentSize())
        }
        onEnable() {
            this.onSourceNodeSizeChanged(), !h(this.sourceNode, !0) || 1 != this.syncWidth && 1 != this.syncHeight || this.sourceNode.on(o.EventType.SIZE_CHANGED, this.onSourceNodeSizeChanged, this)
        }
        start() {
            this.updateContentSize()
        }
        onDisable() {
            h(this.sourceNode, !0) && this.sourceNode.off(o.EventType.SIZE_CHANGED, this.onSourceNodeSizeChanged, this)
        }
        onSourceNodeSizeChanged() {
            h(this.sourceNode, !0) && this.updateContentSize()
        }
        changeSourceNode(e) {
            h(this.sourceNode, !0) && this.sourceNode.off(o.EventType.SIZE_CHANGED, this.onSourceNodeSizeChanged, this), !h(e, !0) || 1 != this.syncWidth && 1 != this.syncHeight || (this.sourceNode = e, this.onSourceNodeSizeChanged(), this.sourceNode.on(o.EventType.SIZE_CHANGED, this.onSourceNodeSizeChanged, this))
        }
        updateContentSize() {
            const e = this.node.getComponent(d),
                t = this.sourceNode.getComponent(d);
            e.setContentSize(new a(this.syncWidth ? t.width + this._paddingWidth : e.width, this.syncHeight ? t.height + this._paddingheight : e.height)), this.adaptChildrenWidget && u.updateWidget(this.node, !0, c.AlignMode.ON_WINDOW_RESIZE)
        }
    }).prototype, "sourceNode", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(S.prototype, "syncWidth", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), b = t(S.prototype, "syncHeight", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), N = t(S.prototype, "_paddingWidth", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), t(S.prototype, "paddingWidth", [m], Object.getOwnPropertyDescriptor(S.prototype, "paddingWidth"), S.prototype), z = t(S.prototype, "_paddingheight", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), t(S.prototype, "paddingheight", [m], Object.getOwnPropertyDescriptor(S.prototype, "paddingheight"), S.prototype), W = t(S.prototype, "adaptChildrenWidget", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), y = S)) || y) || y) || y));
    n._RF.pop()
}
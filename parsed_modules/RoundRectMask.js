import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, l, m, g, C, _;
    n._RF.push({}, "45370ANTzFML4AuFSKICSvf", "RoundRectMask", void 0);
    const {
        ccclass: k,
        property: f,
        disallowMultiple: E,
        menu: y,
        executeInEditMode: T,
        requireComponent: R,
        executionOrder: M
    } = r;
    o.ENABLE_WEBGL_ANTIALIAS = !0;
    t("RoundRectMask", (c = R(i), l = y("Custom UI/round rectangle corner mask"), m = f({
        tooltip: "radius of the round corner"
    }), k(g = T(g = E(g = c(g = l((_ = e((C = class extends a {
        constructor(...t) {
            super(...t), s(this, "_radius", _, this), this.mask = null
        }
        get radius() {
            return this._radius
        }
        set radius(t) {
            this._radius = t, this.updateMask()
        }
        onLoad() {
            this.mask = this.getComponent(i)
        }
        onEnable() {
            this.updateMask()
        }
        start() {
            this.node.on(h.EventType.SIZE_CHANGED, this.onSizeChanged, this), this.node.on(h.EventType.TRANSFORM_CHANGED, this.onTransformChanged, this)
        }
        onDestroy() {
            this.node.off(h.EventType.SIZE_CHANGED, this.onSizeChanged, this), this.node.off(h.EventType.TRANSFORM_CHANGED, this.onTransformChanged, this)
        }
        onTransformChanged(t) {
            t & h.TransformBit.POSITION && this.scheduleOnce((() => {
                this.updateMask()
            }))
        }
        onSizeChanged() {
            this.scheduleOnce((() => {
                this.updateMask()
            }))
        }
        updateMask() {
            let t = this.radius >= 0 ? this.radius : 0;
            t < 1 && (t = Math.min(this.node.getComponent(d).width, this.node.getComponent(d).height) * t), this.mask.radius = t, this.mask.onDraw = this.onDraw.bind(this.mask), this.mask._updateGraphics = this._updateGraphics.bind(this.mask), this.mask.type = i.Type.GRAPHICS_RECT
        }
        _updateGraphics() {
            let t = this._graphics;
            t && this.onDraw(t)
        }
        onDraw(t) {
            t.clear();
            let e = this.node,
                s = e.getComponent(d).width,
                n = e.getComponent(d).height,
                o = -s * e.getComponent(d).anchorX,
                i = -n * e.getComponent(d).anchorY;
            t.roundRect(o, i, s, n, this.radius || 0), u.renderType === p.RENDER_TYPE_CANVAS ? t.stroke() : t.fill()
        }
    }).prototype, "_radius", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 20
        }
    }), e(C.prototype, "radius", [m], Object.getOwnPropertyDescriptor(C.prototype, "radius"), C.prototype), g = C)) || g) || g) || g) || g) || g));
    n._RF.pop()
}
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
    var c, l, m, k, g, _;
    i._RF.push({}, "54563RvHoNCbpQAJtsGh2UC", "RoundRectMaskMTT", void 0);
    const {
        ccclass: C,
        property: M,
        requireComponent: R,
        menu: y,
        executeInEditMode: T,
        disallowMultiple: b
    } = r;
    a.ENABLE_WEBGL_ANTIALIAS = !0;
    t("RoundRectMaskMTT", (c = C(), l = R(o), m = M({
        tooltip: "圆角半径:\n0-1之间为最小边长比例值, \n>1为具体像素值"
    }), c(k = T(k = b(k = l((_ = e((g = class extends n {
        constructor(...t) {
            super(...t), s(this, "_radius", _, this), this.mask = null
        }
        get radius() {
            return this._radius
        }
        set radius(t) {
            this._radius = t, this.updateMask(t)
        }
        onLoad() {
            this.mask = this.getComponent(o), this.mask.radius = this.radius, this.mask.onDraw = this.onDraw.bind(this.mask), this.mask._updateGraphics = this._updateGraphics.bind(this.mask), this.mask.type = o.Type.GRAPHICS_RECT
        }
        onEnable() {
            this.updateMask(this.radius)
        }
        updateMask(t) {
            var e, s;
            let i = t >= 0 ? t : 0;
            i < 1 && (i = Math.min(this.node.getComponent(p).width, this.node.getComponent(p).height) * i), this.mask.radius = i, null == (e = (s = this.mask)._updateGraphics) || e.call(s)
        }
        _updateGraphics() {
            let t = this.getComponent(u);
            t && this.onDraw(t)
        }
        onDraw(t) {
            t.clear();
            let e = this.node,
                s = e.getComponent(p).width,
                i = e.getComponent(p).height,
                a = -s * e.getComponent(p).anchorX,
                o = -i * e.getComponent(p).anchorY;
            t.roundRect(a, o, s, i, this.radius || 0), h.renderType === d.RENDER_TYPE_CANVAS ? t.stroke() : t.fill()
        }
    }).prototype, "_radius", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 50
        }
    }), e(g.prototype, "radius", [m], Object.getOwnPropertyDescriptor(g.prototype, "radius"), g.prototype), k = g)) || k) || k) || k) || k));
    i._RF.pop()
}
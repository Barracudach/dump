import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as w from "./ThemeSystemModel.js";
import * as _ from "./Gradient.js";
import * as D from "./cv.js";
import * as F from "./AppConfig.js";
import * as W from "./Tools.js";
import * as R from "./GraphicHelper.js";
import * as S from "./GraphicHelper.js";

function main() {
    var k, O, E, L, G, v, z, I, T, B, H, M, j, P, U, x, N, A, X, Y, q, V;
    o._RF.push({}, "25f8fxwtsZCT7yF0lzyt5zU", "borderGraphic", void 0);
    const {
        ccclass: Z,
        property: J,
        executeInEditMode: K,
        playOnFocus: Q,
        menu: $,
        requireComponent: tt
    } = l;
    let et = t("borderDirEnum", function(t) {
        return t[t.Center = 0] = "Center", t[t.Inside = 1] = "Inside", t[t.Outside = 2] = "Outside", t
    }({}));
    t("default", (k = $("Custom UI/Border"), O = tt(r), E = J({
        type: n
    }), L = J({
        type: s
    }), G = J({
        type: w,
        visible: function() {
            return this.enabledFillColor
        }
    }), v = J({
        type: s
    }), z = J({
        type: w,
        visible: function() {
            return this.enabledStrokeColor
        }
    }), I = J({
        type: h(et),
        visible: function() {
            return this.enabledStrokeColor
        }
    }), T = J({
        type: s
    }), B = J({
        type: [h(R)],
        visible: function() {
            return this.customeRoundCornors
        }
    }), Z(H = K(H = Q(H = k(H = O((j = e((M = class extends a {
        constructor(...t) {
            super(...t), i(this, "borderLineWidth", j, this), i(this, "_borderRoundRadius", P, this), i(this, "_enabledFillColor", U, this), i(this, "fillColor", x, this), i(this, "_enabledStrokeColor", N, this), i(this, "strokesColor", A, this), i(this, "_borderDir", X, this), this._widthEmptyBorder = 0, i(this, "_enabledGradient", Y, this), this._graphic = null, this.gradient = null, this.reDraw = !0, this.calculateLineWidthOnEnable = !1, this.boderWidth = 0, this.boderHeight = 0, this.editorFocus = !1, this._isFocus = !1, this._customOpacity = null, i(this, "customeRoundCornors", q, this), i(this, "roundCornors", V, this)
        }
        set borderRoundRadius(t) {
            this._borderRoundRadius = t, this.reDraw = !0
        }
        get borderRoundRadius() {
            return this._borderRoundRadius
        }
        set enabledFillColor(t) {
            this._enabledFillColor = t, this.reDraw = !0
        }
        get enabledFillColor() {
            return this._enabledFillColor
        }
        set enabledStrokeColor(t) {
            this._enabledStrokeColor = t, this.reDraw = !0
        }
        get enabledStrokeColor() {
            return this._enabledStrokeColor
        }
        set borderDir(t) {
            this._borderDir = t, this.reDraw = !0
        }
        get borderDir() {
            return this._borderDir
        }
        set widthEmptyBorder(t) {
            this._widthEmptyBorder = t
        }
        get widthEmptyBorder() {
            return this._widthEmptyBorder
        }
        set enabledGradient(t) {
            this._enabledGradient = t, this.updateGradientComp()
        }
        get enabledGradient() {
            return this._enabledGradient
        }
        set graphic(t) {
            this._graphic = t
        }
        get graphic() {
            return d(this._graphic) || (this._graphic = this.node.getComponent(r)), this._graphic
        }
        set customOpacity(t) {
            this._customOpacity = t
        }
        start() {
            this.onThemeChanged(), this.graphic = this.node.getComponent(r), this.updateGradientComp(), this.calculateLineWidth(), this.node.on(c.EventType.ANCHOR_CHANGED, this.ForceDraw, this), u.on("themechange", this.onThemeChanged, this), p.on("canvas-resize", this.calculateLineWidth, this), p.on("design-resolution-changed", this.calculateLineWidth.bind(this), this)
        }
        onDestroy() {
            u.off("themechange", this.onThemeChanged, this), p.off("canvas-resize", this.calculateLineWidth, this), p.off("design-resolution-changed", this.calculateLineWidth.bind(this), this)
        }
        onEnable() {
            this.calculateLineWidthOnEnable && (this.calculateLineWidthOnEnable = !1, this.calculateLineWidth())
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        onThemeChanged() {
            null != this.node && (this.fillColor.themeType = this.strokesColor.themeType = D.appConfig.themeUse)
        }
        update() {
            this.editorFocus && this.calculateLineWidth(), this.drawBorder()
        }
        setStrokesColor(t) {
            this.strokesColor = t
        }
        setFillsColor(t) {
            this.fillColor = t
        }
        updateGradientComp() {
            this.enabledGradient ? (this.gradient = this.node.getComponent(_), this.gradient || (this.gradient = this.node.addComponent(_))) : (this.gradient = null, this.node.removeComponent(_))
        }
        _createGraphics() {
            this.graphic || (this.graphic = new r, this.graphic._objFlags |= b.Flags.IsOnLoadCalled, this.graphic.node = this.node, this.graphic.node.getWorldMatrix()), this._updateMaterial()
        }
        _updateMaterial() {
            if (this.graphic) {
                const t = this.graphic;
                let e;
                e = g.get("ui-graphics-material"), t.setSharedMaterial(e, 0), t.getMaterialInstance(0)
            }
        }
        ForceDraw() {
            this.reDraw = !0
        }
        drawBorderByFocus(t) {
            this._isFocus = t, this.ForceDraw()
        }
        drawBorder() {
            this._isFocus = !0, 0 == this.enabledFillColor && 0 == this.enabledStrokeColor || null == this.graphic || ((0 == W.compareColors(this.graphic.strokeColor, this.strokesColor.getColor()) && this.enabledStrokeColor || 0 == W.compareColors(this.graphic.fillColor, this.fillColor.getColor()) && this.enabledFillColor || 0 != W.compareNumbers(this.boderWidth, this.node.getComponent(C).width, 4) || 0 != W.compareNumbers(this.boderHeight, this.node.getComponent(C).height, 4)) && (this.reDraw = !0), this.reDraw && (this.graphic.clear(), this.defineDrawRect(), this.drawColors(), this.reDraw = !1))
        }
        defineDrawRect() {
            if (this.boderWidth = this.node.getComponent(C).width, this.boderHeight = this.node.getComponent(C).height, this.enabledStrokeColor || this.customeRoundCornors) {
                let t = this.graphic.lineWidth / 2;
                const e = this.boderWidth + this.graphic.lineWidth,
                    i = this.boderHeight + this.graphic.lineWidth,
                    o = 1.06 * this.borderRoundRadius - (this._borderDir === et.Inside ? this.graphic.lineWidth / 1.5 : 0),
                    r = -this.node.getComponent(C).anchorX * this.boderWidth + t - (this._borderDir === et.Inside ? .1 : 0),
                    n = -this.node.getComponent(C).anchorY * this.boderHeight + t - (this._borderDir === et.Inside ? .1 : 0),
                    s = this.customeRoundCornors ? this.roundCornors : [R.TopLeft, R.TopRight, R.BottomRight, R.BottomLeft];
                S.roundRect(this.graphic, r, n, this._borderDir === et.Outside ? e : this.boderWidth - this.graphic.lineWidth + .2, this._borderDir === et.Outside ? i : this.boderHeight - this.graphic.lineWidth + .2, o, this.widthEmptyBorder, this._isFocus, s)
            } else this.enabledFillColor && this.graphic.roundRect(-this.node.getComponent(C).anchorX * this.boderWidth, -this.node.getComponent(C).anchorY * this.boderHeight, this.boderWidth, this.boderHeight, this.borderRoundRadius)
        }
        drawColors() {
            this.drawFill(), this.drawStroke()
        }
        drawFill() {
            if (this.enabledFillColor) {
                const t = this.fillColor.getColor();
                this.graphic.fillColor.set(t.r, t.g, t.b, this._customOpacity ?? t.a), this.graphic.fill()
            }
        }
        drawStroke() {
            if (this.enabledStrokeColor) {
                const t = this.strokesColor.getColor();
                this.graphic.strokeColor.set(t.r, t.g, t.b, this._customOpacity ?? t.a), this.graphic.stroke()
            }
        }
        calculateLineWidth(t) {
            var e, i;
            if (t && t !== this.node.scene.windowID) return this.borderLineWidth;
            if (null == (e = this.node) || !e.active) return this.calculateLineWidthOnEnable = !0, this.borderLineWidth;
            if (!this.graphic) return this.borderLineWidth;
            let o = m.windowSize.width,
                r = m.windowSize.height;
            if (D.appConfig.getGeneralConfig().multiWindowEnabled) {
                let t = this.node.scene.windowSize;
                t && (o = t.width, r = t.height)
            }
            const n = null == p ? void 0 : p.getDesignResolutionSize(),
                s = null == p || null == (i = p.getResolutionPolicy()) ? void 0 : i.getContentStrategy(),
                h = s === f.FIXED_WIDTH,
                l = s === f.FIXED_HEIGHT,
                a = this.calculateScale(n, o, r, h, l);
            let d = this.borderLineWidth;
            return d += 1 / a, d = Math.min(d, this.node.getComponent(C).width / 2, this.node.getComponent(C).height / 2), d = Number(d.toFixed(4)), this.graphic.lineWidth = d, this.reDraw = !0, d
        }
        calculateScale(t, e, i, o, r) {
            let n = 1;
            return null === t || (r === o ? n = Math.min(e / Math.round(t.width), i / Math.round(t.height)) : r ? n = i / Math.round(t.height) : o && (n = e / Math.round(t.width))), n
        }
        setStrokeColor(t, e, i) {
            this.strokesColor.themeType = F.Instance.themeUse, this.strokesColor.colorScheme = t, this.strokesColor.colorWeight = e, this.strokesColor.colorSchemeOther = i
        }
        setFillColor(t, e, i) {
            this.fillColor.themeType = F.Instance.themeUse, this.fillColor.colorScheme = t, this.fillColor.colorWeight = e, this.fillColor.colorSchemeOther = i
        }
        setFillColorScheme(t, e) {
            this.fillColor.setColorScheme(t, e)
        }
        setColor(t, e, i) {
            this.setStrokeColor(t, e, i), this.setFillColor(t, e, i)
        }
        runEffectOpacity(t, e, i) {
            y({
                v: t
            }).to(i, {
                v: e
            }, {
                onUpdate: (i, o) => {
                    this.customOpacity = t + (e - t) * o
                }
            }).start()
        }
    }).prototype, "borderLineWidth", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), P = e(M.prototype, "_borderRoundRadius", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 30
        }
    }), e(M.prototype, "borderRoundRadius", [E], Object.getOwnPropertyDescriptor(M.prototype, "borderRoundRadius"), M.prototype), U = e(M.prototype, "_enabledFillColor", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(M.prototype, "enabledFillColor", [L], Object.getOwnPropertyDescriptor(M.prototype, "enabledFillColor"), M.prototype), x = e(M.prototype, "fillColor", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new w
        }
    }), N = e(M.prototype, "_enabledStrokeColor", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), e(M.prototype, "enabledStrokeColor", [v], Object.getOwnPropertyDescriptor(M.prototype, "enabledStrokeColor"), M.prototype), A = e(M.prototype, "strokesColor", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new w
        }
    }), X = e(M.prototype, "_borderDir", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return et.Center
        }
    }), e(M.prototype, "borderDir", [I], Object.getOwnPropertyDescriptor(M.prototype, "borderDir"), M.prototype), Y = e(M.prototype, "_enabledGradient", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(M.prototype, "enabledGradient", [T], Object.getOwnPropertyDescriptor(M.prototype, "enabledGradient"), M.prototype), q = e(M.prototype, "customeRoundCornors", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), V = e(M.prototype, "roundCornors", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), H = M)) || H) || H) || H) || H) || H));
    o._RF.pop()
}
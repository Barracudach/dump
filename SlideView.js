import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as z from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./cv.js";

function main() {
    var A, y, b, v, C, w, P, E, D, x, M, _, H, I, O, R, V, F, N, Y;
    n._RF.push({}, "cc682eBfLVDg49z2VqszNUC", "SlideView", void 0);
    const {
        ccclass: B,
        property: k
    } = o;
    i("SlideView", (A = k(s), y = k(s), b = k(s), v = k(s), C = k(s), w = k(s), P = k({
        tooltip: "Can slide this pop-up to maximum size?"
    }), E = k({
        tooltip: "Use default position as base"
    }), D = k({
        type: Number,
        tooltip: "Moving detection threshold"
    }), B((_ = t((M = class extends h {
        constructor(...i) {
            super(...i), e(this, "bg", _, this), e(this, "panel", H, this), e(this, "swipeIndicator", I, this), e(this, "maximumSize", O, this), e(this, "defaultSize", R, this), e(this, "dynamicSizeNode", V, this), e(this, "canSlideMax", F, this), e(this, "isDefaultPosition", N, this), e(this, "movingDetectionThreshold", Y, this), this.animTime = .2, this.startRelativeYPos = 0, this.lastDeltaY = 0, this.animation = null, this.destroyOnHide = !1, this.defaultBgOpacity = 0, this.showAnim = {
                running: !1,
                slideAnim: null,
                bgAnim: null
            }, this.hideAnim = {
                running: !1,
                slideAnim: null,
                bgAnim: null
            }, this.closeCallbackFn = null, this.globalScale = new a(1, 1, 1), this.defaultPosY = void 0, this.referenceRatio = 750 / 850, this._defaultSize = 0, this._dynamicSize = 0
        }
        get maxSize() {
            return this.maximumSize && this.canSlideMax ? this.getBottomRelativePos(this.maximumSize) : this.defSize
        }
        get defSize() {
            return this.dynamicSize > 0 && this.dynamicSize < this._defaultSize ? this.dynamicSize : this._defaultSize
        }
        set defSize(i) {
            this.maximumSize ? this._defaultSize = Math.min(i, this.getBottomRelativePos(this.maximumSize)) : this._defaultSize = i, this.panel.getComponent(l).height != this.defSize && this.slideToDef()
        }
        get dynamicSize() {
            return this._dynamicSize
        }
        set dynamicSize(i) {
            this.maximumSize ? this._dynamicSize = Math.min(i, this.getBottomRelativePos(this.maximumSize)) : this._dynamicSize = i, this.panel.getComponent(l).height != this.defSize && this.slideToDef()
        }
        get isActive() {
            return this.node.active && !this.hideAnim.running
        }
        resetDynamicContainer(i) {
            if (!this.dynamicSizeNode && this.panel) {
                let i = this.panel.getComponentInChildren(r);
                i && (this.dynamicSizeNode = i.node)
            }
            this.dynamicSizeNode && (this.dynamicSize = this.panel.getComponent(l).height - this.dynamicSizeNode.getComponent(l).height + i + .01)
        }
        onLoad() {
            if (T.resMgr.adaptWidget(this.node, !0, !1), null == this.panel) return void(this.enabled = !1);
            if (this.bg && (this.defaultBgOpacity = this.bg.getComponent(p).opacity), this.defaultSize) this._defaultSize = this.getBottomRelativePos(this.defaultSize);
            else {
                this._defaultSize = this.panel.getComponent(l).height;
                let i = this.panel.getComponent(m);
                i && i.enabled && i.type == m.Type.VERTICAL && i.resizeMode == m.ResizeMode.CONTAINER && (this.canSlideMax = !1, this.panel.on(s.EventType.SIZE_CHANGED, (function() {
                    this._defaultSize = this.panel.height
                }), this))
            }
            this.globalScale = T.tools.getGlobalScale(this.panel);
            let i = this.panel.getPosition();
            this.defaultPosY = null == i ? void 0 : i.y, this.adaptScreenHeight()
        }
        adaptScreenHeight() {
            if (!this.panel || !this.panel.parent) return;
            const i = this.panel.getComponent(l),
                t = this.panel.parent.getComponent(l),
                e = d.getViewportRect(),
                n = e.width / e.height > this.referenceRatio;
            if (!i || !t) return;
            const s = t.height;
            let o = i.height;
            if (s >= o || o <= 0) return;
            const h = this.panel.getComponent(u);
            if (h && !n) {
                var a;
                this.updateWidgetForPanel(h, o);
                const i = null == (a = this.maximumSize) ? void 0 : a.getComponent(u);
                if (i) {
                    const t = i.top;
                    this.setMaximumSizeWidgetTopFromDesign(t)
                }
            }
            if (o = i.height, this.isPanelHeightValid(o, s, n)) return this.resetWidgetAlignment(h), i.height = o, void(this.defSize = o);
            this.adjustPanelForAspectRatio(i, s, o, n)
        }
        getPanelTopOffsetInViewportPixels(i) {
            const t = T.config.DESIGN_HEIGHT - i;
            return this.convertDesignTopOffsetToViewportPixels(t)
        }
        convertDesignTopOffsetToViewportPixels(i) {
            return i / T.config.DESIGN_HEIGHT * 100 / 100 * d.getViewportRect().height
        }
        updateWidgetForPanel(i, t) {
            i.top = this.getPanelTopOffsetInViewportPixels(t), i.isAbsoluteTop = !0, i.isAlignTop = !0, i.bottom = 0, i.isAlignBottom = !0, i.updateAlignment()
        }
        isPanelHeightValid(i, t, e) {
            return !(!(i <= t) || e)
        }
        resetWidgetAlignment(i) {
            i && (i.isAlignTop = !1, i.isAlignBottom = !1, i.updateAlignment())
        }
        adjustPanelForAspectRatio(i, t, e, n) {
            !T.appConfig.isWebApp || T.appConfig.isWebApp && !n ? this.panel.scale = new a(this.panel.scale.x, t / e, this.panel.scale.z) : this.makePanelFullScreen(i, t)
        }
        setMaximumSizeWidgetTopFromDesign(i) {
            var t;
            const e = null == (t = this.maximumSize) ? void 0 : t.getComponent(u);
            e && (e.top = this.convertDesignTopOffsetToViewportPixels(i), e.updateAlignment())
        }
        makePanelFullScreen(i, t) {
            this.setMaximumSizeWidgetTopFromDesign(0), this.canSlideMax = !1, i.height = t, this.defSize = t
        }
        onEnable() {
            this.registerSwipeEvents(), this.showAnim.running || this.hideAnim.running || this.show(!1)
        }
        onDisable() {
            this.unresgisterSwipeEvents(), this.stopCurrentAnims(this.showAnim), this.unscheduleAllCallbacks()
        }
        registerSwipeEvents() {
            this.swipeIndicator && (this.swipeIndicator.on(s.EventType.TOUCH_START, this.onTouchStart, this), this.swipeIndicator.on(s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.swipeIndicator.on(s.EventType.TOUCH_END, this.onTouchEnd, this), this.swipeIndicator.on(s.EventType.TOUCH_CANCEL, this.onTouchEnd, this))
        }
        unresgisterSwipeEvents() {
            this.swipeIndicator && (this.swipeIndicator.off(s.EventType.TOUCH_START, this.onTouchStart, this), this.swipeIndicator.off(s.EventType.TOUCH_MOVE, this.onTouchMove, this), this.swipeIndicator.off(s.EventType.TOUCH_END, this.onTouchEnd, this), this.swipeIndicator.off(s.EventType.TOUCH_CANCEL, this.onTouchEnd, this))
        }
        getBottomRelativePos(i) {
            return i.getPosition().y + i.parent.getComponent(l).anchorY * i.parent.getComponent(l).height
        }
        onTouchStart(i) {
            this.stopAllAnims(), this.startRelativeYPos = this.panel.getComponent(l).height - i.getLocationY() / this.globalScale.y
        }
        onTouchMove(i) {
            if (this.lastDeltaY = i.getDeltaY() / this.globalScale.y, 0 != this.lastDeltaY) {
                let t = this.panel.getPosition();
                if (t.y < 0) this.movePanel(t);
                else if (Math.abs(this.panel.getComponent(l).height - i.getPreviousLocation().y / this.globalScale.y - this.startRelativeYPos) <= this.movingDetectionThreshold) {
                    let i = this.panel.getComponent(l).height + this.lastDeltaY;
                    i >= this.defSize && i <= this.maxSize ? this.panel.getComponent(l).height = i : this.movePanel(t)
                } else this.lastDeltaY = 0
            }
        }
        movePanel(i) {
            i.y = Math.min(0, i.y + this.lastDeltaY), this.panel.setPosition(i)
        }
        onTouchEnd(i) {
            let t = this.panel.getPosition().y + this.panel.getComponent(l).height;
            if (0 != this.lastDeltaY) this.lastDeltaY > 0 ? t > this.defSize ? this.slideToMax() : t < this.defSize && this.moveToDef() : t > this.defSize ? this.slideToDef() : t < this.defSize && this.hide(!0);
            else if (t > this.defSize) {
                let i = .5 * (this.maxSize - this.defSize) + this.defSize;
                t > i ? this.slideToMax() : t < i && this.slideToDef()
            } else if (t < this.defSize) {
                let i = .5 * this.defSize;
                t > i ? this.moveToDef() : t < i && this.hide(!0)
            }
        }
        slideToMax() {
            const i = this.panel.getComponent(l);
            g(i) && (c.stopAllByTarget(i), this.animation = f(i).to(this.animTime, {
                height: this.maxSize
            }).start())
        }
        slideToDef() {
            const i = this.panel.getComponent(l);
            g(i) && (c.stopAllByTarget(i), this.animation = f(i).to(this.animTime, {
                height: this.defSize
            }).start())
        }
        moveToDef() {
            c.stopAllByTarget(this.panel), this.animation = f(this.panel).to(this.animTime, {
                position: new a(this.panel.getPosition().x, 0, this.panel.getPosition().z)
            }).start()
        }
        onClickHide() {
            T.AudioMgr.playButtonSound("close.mp3"), this.hide(!0)
        }
        hide(i = !1, t = !1) {
            if (this.hideAnim.running) return;
            t && this.unresgisterSwipeEvents(), this.hideAnim.running = !0;
            let e = this.panel.getPosition();
            this.stopCurrentAnims(this.showAnim), this.hideAnim.slideAnim = f(this.panel).to(this.animTime, {
                position: new a(e.x, -this.panel.getComponent(l).height, e.z)
            }).call((() => {
                var t;
                this.hideAnim.running = !1, this.node.emit(T.Enum.CustomEvent.ActionHideFinish, i), null == (t = this.closeCallbackFn) || t.call(this, i)
            })).call(this.onFinishHide.bind(this)).start(), this.bg && (this.hideAnim.bgAnim = f(this.bg.getComponent(p)).to(this.animTime, {
                opacity: 0
            }).start()), this.node.emit(T.Enum.CustomEvent.ActionHideStart, i)
        }
        onFinishHide() {
            this.destroyOnHide ? this.node.destroy() : this.node.active = !1
        }
        reEnableMasks() {
            this.node.getComponentsInChildren(S).forEach((i => {
                i && g(i.node) && i.node.active && T.tools.resetMask(i, 1)
            }))
        }
        show(i = !0, t = null) {
            this.destroyOnHide = i, this.closeCallbackFn = t;
            let e = this.panel.getPosition();
            !this.node || this.showAnim.running && this.node.active || (this.showAnim.running = !0, this.node.active || (this.node.active = !0), this.panel.getComponent(l).height = this.defSize, this.panel.setPosition(e.x, -this.defSize), this.stopCurrentAnims(this.hideAnim), this.showAnim.slideAnim = f(this.panel).to(this.animTime, {
                position: z(e.x, this.isDefaultPosition ? this.defaultPosY : 0, e.z)
            }).call((() => {
                this.showAnim.running = !1, this.node.emit(T.Enum.CustomEvent.ActionShowFinish), this.reEnableMasks()
            })).start(), this.bg && (this.bg.getComponent(p).opacity = 0, this.showAnim.bgAnim = f(this.bg.getComponent(p)).to(this.animTime, {
                opacity: this.defaultBgOpacity
            }).start()))
        }
        stopAllAnims() {
            this.stopCurrentAnims(this.showAnim), this.stopCurrentAnims(this.hideAnim)
        }
        stopCurrentAnims(i) {
            i && (i.slideAnim && i.slideAnim.stop(), i.bgAnim && i.bgAnim.stop(), i.running = !1), this.animation && this.animation.stop()
        }
    }).prototype, "bg", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(M.prototype, "panel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(M.prototype, "swipeIndicator", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(M.prototype, "maximumSize", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(M.prototype, "defaultSize", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(M.prototype, "dynamicSizeNode", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(M.prototype, "canSlideMax", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), N = t(M.prototype, "isDefaultPosition", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Y = t(M.prototype, "movingDetectionThreshold", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 10
        }
    }), x = M)) || x));
    n._RF.pop()
}
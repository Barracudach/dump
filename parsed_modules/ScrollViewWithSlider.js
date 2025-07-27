import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var p, b, f, C, T, m, E, H, v, B, w, y, N, O, V;
    l._RF.push({}, "f91ceO9QxVE2J768ymql9rZ", "ScrollViewWithSlider", void 0);
    const {
        ccclass: z,
        property: A
    } = h;
    t("ScrollViewWithSlider", (p = A(n), b = A(o), f = A(s), C = A(r), T = A(s), z((H = e((E = class extends d {
        constructor(...t) {
            super(...t), i(this, "scrollView", H, this), i(this, "slider", v, this), i(this, "sliderHeightNode", B, this), i(this, "sliderHandleButton", w, this), this._sliderButtonTouchEnabled = !1, i(this, "background", y, this), i(this, "hideScrollBarOnSmallContent", N, this), i(this, "minimumSizeOfBar", O, this), this.SliderRightPaddingValue = void 0, i(this, "addScrollBarHeight", V, this)
        }
        onLoad() {
            var t, e, i, l, n, o;
            this.sliderHeightNode || (this.sliderHeightNode = this.scrollView.node), this.slider.node.on("slide", this.onSliderCallback, this), null == (t = this.scrollView) || t.content.on(s.EventType.TRANSFORM_CHANGED, this.onScrollviewCallback, this), null == (e = this.sliderHandleButton) || e.node.on(s.EventType.TOUCH_START, this.onSliderButtonTouchStart, this), null == (i = this.sliderHandleButton) || i.node.on(s.EventType.TOUCH_END, this.onSliderButtonTouchEnd, this), null == (l = this.sliderHandleButton) || l.node.on(s.EventType.TOUCH_CANCEL, this.onSliderButtonTouchEnd, this), null == (n = this.scrollView) || n.content.on(s.EventType.SIZE_CHANGED, this.adjustScrollbarAsContentSize, this), null == (o = this.sliderHeightNode) || o.on(s.EventType.SIZE_CHANGED, this.adjustScrollbarAsContentSize, this)
        }
        onEnable() {
            this.adjustScrollbarAsContentSize()
        }
        disable() {
            var t, e, i, l, n, o;
            this.slider.node.off("slide", this.onSliderCallback, this), null == (t = this.scrollView) || t.content.off(s.EventType.TRANSFORM_CHANGED, this.onScrollviewCallback, this), null == (e = this.sliderHandleButton) || e.node.off(s.EventType.TOUCH_START, this.onSliderButtonTouchStart, this), null == (i = this.sliderHandleButton) || i.node.off(s.EventType.TOUCH_END, this.onSliderButtonTouchEnd, this), null == (l = this.sliderHandleButton) || l.node.off(s.EventType.TOUCH_CANCEL, this.onSliderButtonTouchEnd, this), null == (n = this.scrollView) || n.content.off(s.EventType.SIZE_CHANGED, this.adjustScrollbarAsContentSize, this), null == (o = this.sliderHeightNode) || o.off(s.EventType.SIZE_CHANGED, this.adjustScrollbarAsContentSize, this), this.enabled = !1, this.slider.enabled = !1, this.slider.node.active = !1, a(this.background) && (this.background.active = !1)
        }
        adjustScrollbarAsContentSize() {
            a(this, !0) && this.enabled && a(this.slider, !0) && this.slider.enabled && (this.adjustScrollbarSize(), this.onScrollviewCallback(s.TransformBit.POSITION))
        }
        adjustScrollbarSize() {
            this.slider.progress = 0;
            let t = 100 * this.scrollView.node.getComponent(c).height / this.scrollView.content.getComponent(c).height;
            if ((t >= 99.9 || t < 0) && (t = 100, this.hideScrollBarOnSmallContent)) return this.slider.node.active = !1, void(a(this.background) && (this.background.active = !1));
            let e = (this.sliderHeightNode.getComponent(c).height + this.addScrollBarHeight) * t / 100;
            e < this.minimumSizeOfBar && (e = this.minimumSizeOfBar), this.slider.handle.node.getComponent(c).height = e, this.slider.node.getComponent(c).height = this.sliderHeightNode.getComponent(c).height + this.addScrollBarHeight - e, this.slider.node.active = !0, a(this.background) && (this.background.active = !0), this.slider.handle.getComponentInChildren(u) && (this.slider.handle.getComponentInChildren(u).enabled = !0), 0 !== this.node.getComponent(c).anchorY ? this.slider.node.setPosition(S(this.slider.node.position.x, -e / 2 - this.addScrollBarHeight / 2, this.slider.node.position.z)) : this.slider.node.setPosition(S(this.slider.node.position.x, this.slider.node.getComponent(c).height / 2 - this.addScrollBarHeight / 2, this.slider.node.position.z));
            const i = this.sliderHeightNode.getComponent(u);
            i && i.updateAlignment()
        }
        onSliderCallback(t) {
            var e, i, l = t.progress;
            null == (e = this.scrollView) || e.content.off(s.EventType.TRANSFORM_CHANGED, this.onScrollviewCallback, this), this.scrollView.scrollTo(g(0, l), .03), null == (i = this.scrollView) || i.content.on(s.EventType.TRANSFORM_CHANGED, this.onScrollviewCallback, this)
        }
        onScrollviewCallback(t) {
            if (t & s.TransformBit.POSITION) {
                if (this._sliderButtonTouchEnabled) return;
                this.scrollView.getScrollOffset().y <= 0 ? this.slider.progress = 1 : this.scrollView.getScrollOffset().y >= this.scrollView.getMaxScrollOffset().y ? this.slider.progress = 0 : this.slider.progress = 1 - Math.abs(this.scrollView.getScrollOffset().y / this.scrollView.getMaxScrollOffset().y)
            }
        }
        onSliderButtonTouchStart() {
            this._sliderButtonTouchEnabled = !0
        }
        onSliderButtonTouchEnd() {
            this._sliderButtonTouchEnabled = !1
        }
    }).prototype, "scrollView", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(E.prototype, "slider", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(E.prototype, "sliderHeightNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(E.prototype, "sliderHandleButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(E.prototype, "background", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(E.prototype, "hideScrollBarOnSmallContent", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), O = e(E.prototype, "minimumSizeOfBar", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 20
        }
    }), V = e(E.prototype, "addScrollBarHeight", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = E)) || m));
    l._RF.pop()
}
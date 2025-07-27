import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var b, p, M, v, w, E, O, D, m, d, _, g, y, S, B, T;
    o._RF.push({}, "f1e11ltZL9NFqE9pxXU7tuo", "MouseEventEffect", void 0);
    const {
        ccclass: I,
        property: k,
        requireComponent: U
    } = u;
    e("default", (b = k(s), p = k(s), M = k(s), v = k(i), w = k({
        type: r
    }), E = k({
        type: a,
        visible: function() {
            return this.enabledScaleOnMouseDown
        }
    }), O = k({
        type: a,
        visible: function() {
            return this.enabledScaleOnMouseDown
        }
    }), I((d = t((m = class extends c {
        constructor(...e) {
            super(...e), n(this, "normalEffect", d, this), n(this, "overEffect", _, this), n(this, "clickEffect", g, this), n(this, "targetButton", y, this), n(this, "_enabledScaleOnMouseDown", S, this), n(this, "scaleStartOnMouseDown", B, this), n(this, "scaleEndOnMouseDown", T, this), this.startAnim = void 0, this._isMouseHover = !1, this._isMouseDown = !1, this._isTargetButtonInteractable = !0
        }
        set enabledScaleOnMouseDown(e) {
            this._enabledScaleOnMouseDown = e
        }
        get enabledScaleOnMouseDown() {
            return this._enabledScaleOnMouseDown
        }
        onLoad() {
            this.node.on(s.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.on(s.EventType.MOUSE_LEAVE, this.onMouseLeave, this), this.node.on(s.EventType.MOUSE_DOWN, this.onMouseDown, this), this.node.on(s.EventType.MOUSE_UP, this.onMouseUp, this), this.node.on(s.EventType.MOUSE_MOVE, this.onMouseOver, this), this.overEffect && (this.overEffect.active = !1), this.clickEffect && (this.clickEffect.active = !1)
        }
        get mouseOver() {
            return this._isMouseHover
        }
        set mouseOver(e) {
            this._isMouseHover != e && (this._isMouseHover = e, this.overEffect && (this.overEffect.active = e), this.normalEffect && (this.normalEffect.active = !this.overEffect.active))
        }
        get mouseDown() {
            return this._isMouseDown
        }
        set mouseDown(e) {
            this._isMouseDown != e && (this._isMouseDown = e, this.clickEffect && (this.clickEffect.active = e))
        }
        onDisable() {
            this.mouseDown = !1, this.mouseOver = !1
        }
        onMouseOver() {
            this._isTargetButtonInteractable && (this.mouseOver = !0)
        }
        onMouseLeave() {
            this._isTargetButtonInteractable && (this.mouseOver = !1, this.mouseDown = !1)
        }
        onMouseDown() {
            this._isTargetButtonInteractable && (this.mouseDown = !0, this._enabledScaleOnMouseDown && (this.mouseOver = !1, l.stopAllByTarget(this.clickEffect), this.startAnim = !0, h().target(this.clickEffect).sequence(h().to(.2, {
                scale: new f(this.scaleEndOnMouseDown, this.scaleEndOnMouseDown, 1)
            }), h().to(.2, {
                scale: new f(this.scaleStartOnMouseDown, this.scaleStartOnMouseDown, 1)
            })).call((() => {
                this.startAnim = !1
            })).start()))
        }
        onMouseUp() {
            this._isTargetButtonInteractable && (this.mouseDown = this.startAnim, this.mouseOver = !0)
        }
        set buttonInteractable(e) {
            this._isTargetButtonInteractable != e && (this._isTargetButtonInteractable = e, 0 == this._isTargetButtonInteractable && (this.mouseDown = !1, this.mouseOver = !1))
        }
        update() {
            this.targetButton && (this.buttonInteractable = this.targetButton.interactable)
        }
    }).prototype, "normalEffect", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(m.prototype, "overEffect", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(m.prototype, "clickEffect", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(m.prototype, "targetButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(m.prototype, "_enabledScaleOnMouseDown", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), t(m.prototype, "enabledScaleOnMouseDown", [w], Object.getOwnPropertyDescriptor(m.prototype, "enabledScaleOnMouseDown"), m.prototype), B = t(m.prototype, "scaleStartOnMouseDown", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), T = t(m.prototype, "scaleEndOnMouseDown", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .9
        }
    }), D = m)) || D));
    o._RF.pop()
}
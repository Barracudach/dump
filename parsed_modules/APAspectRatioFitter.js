import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, c, v, m, _, C, f, T, F, S, y;
    o._RF.push({}, "c6f0dixFTxAKo37Z+uM7e92", "APAspectRatioFitter", void 0);
    let E = t("APAspectRatioFitType", function(t) {
        return t[t.None = 0] = "None", t[t.FitVertical = 1] = "FitVertical", t[t.FitHorizontal = 2] = "FitHorizontal", t[t.Envelope = 3] = "Envelope", t[t.FitInside = 4] = "FitInside", t[t.Stretch = 5] = "Stretch", t
    }({}));
    const M = t("ON_SPRITE_FRAME_CHANGED", "OnSpriteFrameChanged"),
        {
            ccclass: z,
            property: b,
            menu: w,
            executeInEditMode: A
        } = h;
    t("APAspectRatioFitter", (u = w("Custom UI/Aspect Ratio Fitter"), c = b(n), v = b({
        type: r(E),
        serializable: !0,
        visible: !1
    }), m = b({
        type: r(E)
    }), _ = b({
        type: s
    }), C = b({
        type: s
    }), z(f = u(f = A((F = e((T = class extends a {
        constructor(...t) {
            super(...t), i(this, "sprite", F, this), i(this, "_fitMode", S, this), i(this, "_relativeTo", y, this), this.editorFocus = !1, this.lastSpriteName = null
        }
        get fitMode() {
            return this._fitMode
        }
        set fitMode(t) {
            this._fitMode = t, this.validateFitMode(), this.onSizeChanged()
        }
        get relativeTo() {
            return this._relativeTo
        }
        set relativeTo(t) {
            this._relativeTo.uuid != t.uuid && (l(this._relativeTo, !0) && this._relativeTo.off(s.EventType.SIZE_CHANGED, this.onSizeChanged, this), this._relativeTo = t, l(this._relativeTo, !0) && this._relativeTo.on(s.EventType.SIZE_CHANGED, this.onSizeChanged, this), this.validateFitMode(), this.onSizeChanged())
        }
        onLoad() {
            null == this.sprite && (this.sprite = this.getComponent(n)), null == this._relativeTo && (this._relativeTo = this.node.parent)
        }
        onEnable() {
            this.onSizeChanged(), this._relativeTo.on(s.EventType.SIZE_CHANGED, this.onSizeChanged, this), this.node.on(M, this.onSizeChanged, this)
        }
        onDisable() {
            l(this.node, !0) && (l(this._relativeTo, !0) && this._relativeTo.off(s.EventType.SIZE_CHANGED, this.onSizeChanged, this), this.node.off(M, this.onSizeChanged, this))
        }
        validateFitMode() {
            this._relativeTo.uuid == this.node.uuid && (this._fitMode != E.Envelope && this._fitMode != E.FitInside && this._fitMode != E.Stretch || (this._fitMode = E.None))
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            (this.editorFocus || this.lastSpriteName != this.getSpriteName()) && this.onSizeChanged()
        }
        getSpriteName() {
            var t;
            return (null == (t = this.sprite.spriteFrame) ? void 0 : t.name) || ""
        }
        onSizeChanged() {
            if (null == this.sprite || null == this._relativeTo) return;
            if (this.lastSpriteName = this.getSpriteName(), null == this.sprite || null == this.sprite.spriteFrame) return;
            var t = this.sprite.spriteFrame.getOriginalSize();
            if (this.sprite.trim) {
                let e = this.sprite.spriteFrame.getRect();
                t = new p(e.width, e.height)
            }
            var e = this._relativeTo.getComponent(d).width / t.width,
                i = this._relativeTo.getComponent(d).height / t.height;
            switch (this.fitMode) {
                case E.Envelope:
                    var o = Math.max(e, i);
                    this.node.getComponent(d).width = t.width * o, this.node.getComponent(d).height = t.height * o;
                    break;
                case E.FitVertical:
                    this.node.getComponent(d).height = this._relativeTo.getComponent(d).height, this.node.getComponent(d).width = t.width * i;
                    break;
                case E.FitHorizontal:
                    this.node.getComponent(d).width = this._relativeTo.getComponent(d).width, this.node.getComponent(d).height = t.height * e;
                    break;
                case E.FitInside:
                    o = Math.min(e, i);
                    this.node.getComponent(d).width = t.width * o, this.node.getComponent(d).height = t.height * o;
                    break;
                case E.Stretch:
                    this.node.getComponent(d).width = this._relativeTo.getComponent(d).width, this.node.getComponent(d).height = this._relativeTo.getComponent(d).height
            }
            let n = this.getComponent(g);
            n && (n.alignMode = g.AlignMode.ALWAYS)
        }
    }).prototype, "sprite", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(T.prototype, "_fitMode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return E.Envelope
        }
    }), e(T.prototype, "fitMode", [m], Object.getOwnPropertyDescriptor(T.prototype, "fitMode"), T.prototype), y = e(T.prototype, "_relativeTo", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(T.prototype, "relativeTo", [C], Object.getOwnPropertyDescriptor(T.prototype, "relativeTo"), T.prototype), f = T)) || f) || f) || f));
    o._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./CustomShader.js";

function main() {
    var f, d, C, b, y, g, m, k;
    o._RF.push({}, "5368bfafTpAILo/RqmVjHSf", "Outline", void 0);
    const {
        ccclass: T,
        property: w,
        executeInEditMode: _
    } = l;
    e("Outline", (f = w({
        serializable: !0
    }), d = w({
        type: r,
        tooltip: "Outline thickness in pixels"
    }), C = w({
        serializable: !0
    }), b = w({
        type: s,
        tooltip: "Outline color. Color alpha is not used!"
    }), T(y = _((m = t((g = class extends c {
        constructor(...e) {
            super(...e), i(this, "_outlineThickness", m, this), i(this, "_outlineColor", k, this), this.effectPath = "db://assets/Shader/Outline/Outline.effect"
        }
        set outlineThickness(e) {
            this._outlineThickness = e, this.updateMaterial()
        }
        get outlineThickness() {
            return this._outlineThickness
        }
        set outlineColor(e) {
            this._outlineColor = e, this.updateMaterial()
        }
        get outlineColor() {
            return this._outlineColor
        }
        onNodeSizeChanged() {
            if (!this.haveCorrectEffect) return;
            let e = this.node.getComponent(n).contentSize,
                t = new a(e.width, e.height);
            if (this.label)
                if (this.label.cacheMode == h.CacheMode.CHAR) t.set(2048, 2048);
                else {
                    let e = null;
                    e = this.label.spriteFrame instanceof u ? this.label.spriteFrame.texture : this.label.spriteFrame, e && t.set(e.width, e.height)
                }
            else if (this.sprite) {
                let i = this.sprite.spriteFrame.originalSize;
                {
                    let e = this.sprite.spriteFrame.texture;
                    1 == this.sprite.spriteFrame.packable ? t.set(2048, 2048) : t.set(e.width, e.height)
                }
                t = t.multiply2f(e.width / i.width, e.height / i.height)
            }
            this.material.setProperty("nodeSize", t), this.onNodePositionChanged()
        }
        updateMaterial() {
            if (this.haveCorrectEffect) {
                this.material.setProperty("outlineThickness", this.outlineThickness);
                let e = new p(this.outlineColor.r / 255, this.outlineColor.g / 255, this.outlineColor.b / 255, this.outlineColor.a / 255);
                this.material.setProperty("outlineColor", e)
            }
        }
    }).prototype, "_outlineThickness", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), t(g.prototype, "outlineThickness", [d], Object.getOwnPropertyDescriptor(g.prototype, "outlineThickness"), g.prototype), k = t(g.prototype, "_outlineColor", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(s.WHITE)
        }
    }), t(g.prototype, "outlineColor", [b], Object.getOwnPropertyDescriptor(g.prototype, "outlineColor"), g.prototype), y = g)) || y) || y));
    o._RF.pop()
}
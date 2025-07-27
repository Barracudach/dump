import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, c, l, u, y, f, d, _, g, m;
    i._RF.push({}, "5b68972rtZP05Pdnwclos6f", "CircleAvatar", void 0);
    const {
        ccclass: b,
        property: w
    } = s;
    t("CircleAvatar", (h = w({
        tooltip: "边缘羽化度(值越大轮廓越清晰, 值越小越虚幻)"
    }), c = w({
        tooltip: "圆角半径(输入0, 则默认为内切圆半径)"
    }), l = w({
        tooltip: "shader类型(0:圆形, 1:圆角)"
    }), u = w({
        type: o,
        tooltip: "shader材质"
    }), b((d = e((f = class extends p {
        constructor(...t) {
            super(...t), r(this, "_factor", d, this), r(this, "_radius", _, this), r(this, "_type", g, this), r(this, "material", m, this), this._sprite = null
        }
        get factor() {
            return this._factor
        }
        set factor(t) {
            t !== this._factor && (t < 1 && (t = 1), this._factor = t, this.refresh())
        }
        get radius() {
            return this._radius
        }
        set radius(t) {
            if (t !== this._radius) {
                if (0 === t) {
                    t = Math.min(this.node.getComponent(a).width, this.node.getComponent(a).height) / 2
                }
                this._radius = t, this.refresh()
            }
        }
        get type() {
            return this._type
        }
        set type(t) {
            t !== this._type && (t < 0 && (t = 0), this._type = t, this.refresh())
        }
        onLoad() {}
        start() {}
        resetInEditor() {
            this.factor = 20;
            let t = Math.min(this.node.getComponent(a).width, this.node.getComponent(a).height);
            this.radius = t / 2, this.type = 0
        }
        onEnable() {
            this.refresh()
        }
        onDisable() {}
        refresh() {
            if (this._sprite = this.node.getComponent(n), this._sprite && this._sprite.spriteFrame && this.material) {
                this._sprite.customMaterial = this.material;
                let t = this._sprite.customMaterial;
                t.setProperty("circleType", this.type), t.setProperty("factor", this.factor), t.setProperty("radius", this.radius);
                let e = [this._sprite.node.getComponent(a).width, this._sprite.node.getComponent(a).height];
                t.setProperty("textureSize", e)
            }
        }
    }).prototype, "_factor", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), e(f.prototype, "factor", [w], Object.getOwnPropertyDescriptor(f.prototype, "factor"), f.prototype), _ = e(f.prototype, "_radius", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), e(f.prototype, "radius", [w], Object.getOwnPropertyDescriptor(f.prototype, "radius"), f.prototype), g = e(f.prototype, "_type", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), e(f.prototype, "type", [w], Object.getOwnPropertyDescriptor(f.prototype, "type"), f.prototype), m = e(f.prototype, "material", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = f)) || y));
    i._RF.pop()
}
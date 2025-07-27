import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./FontSystem.js";

function main() {
    var f, c, u, p, m, w, H, b, v, z, S, L, W, F;
    o._RF.push({}, "2a825e4omxAZqL32SPZ9qrE", "AutoWrapAndLimitLengthLabel", void 0);
    const {
        ccclass: O,
        property: y
    } = r;
    t("default", (f = y(h), c = y(h), u = y(n), p = y(n), m = y(s), w = y(h), O((v = i((b = class extends l {
        constructor(...t) {
            super(...t), e(this, "orgNodeWidth", v, this), e(this, "lineHeightOffset", z, this), this.orgOverflow = l.Overflow.RESIZE_HEIGHT, this.orgFontSize = void 0, e(this, "nodeFitWithTextByWidth", S, this), e(this, "isLimitHeight", L, this), e(this, "limitHeightNode", W, this), e(this, "limitHeightPadding", F, this), this.cacheLimitHeight = 0, this.transform = void 0
        }
        onLoad() {
            super.onLoad(), this.node.getComponent(g).width < this.orgNodeWidth && (this.node.getComponent(g).width = this.orgNodeWidth), this.orgNodeWidth = this.node.getComponent(g).width, this.orgOverflow = this.overflow, this.orgFontSize = this.fontSize, this.isLimitHeight && a(this.limitHeightNode) && (this.cacheLimitHeight = this.limitHeightNode.getComponent(g).height), this.transform = this.node.getComponent(g);
            let t = this.node.getComponent(d);
            t && t.setIgnoreUpdateFontSize(!0)
        }
        start() {
            this.node.on("label_string_updated", this.updateLabelOverflow, this), this.updateLabelOverflow()
        }
        setString(t) {
            this.string !== t && (this.string = t, this.node.emit("label_string_updated"))
        }
        onDestroy() {
            this.node.off("label_string_updated", this.updateLabelOverflow, this), super.onDestroy()
        }
        getTextWidth(t) {
            const i = this.string;
            this.overflow = l.Overflow.NONE, this.string = t;
            this.updateRenderData(!0);
            const e = Math.ceil(this.node.getComponent(g).width);
            return this.string = i, this.overflow = this.orgOverflow, this.node.getComponent(g).width = this.orgNodeWidth, e
        }
        changeFontSize(t) {
            let i = this.node.getComponent(d);
            i && (i.fontSize = t, i.applyFont()), this.fontSize = t
        }
        updateLabelOverflow() {
            this.node.getComponent(g).width = this.orgNodeWidth, this.overflow = this.orgOverflow, this.changeFontSize(this.orgFontSize);
            let t = this.getTextWidth(this.string);
            const i = t;
            if (t < this.orgNodeWidth) this.overflow = l.Overflow.NONE;
            else {
                let e = this.fontSize;
                const o = this.string.split(" ");
                let h = "";
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    i.length <= h.length || (h = i)
                }
                const n = Math.max(this.orgNodeWidth - 1, 1),
                    s = this.getTextWidth(h),
                    r = s / n;
                if (r > 1) return e = Math.floor(e / r), this.changeFontSize(e), this.overflow = l.Overflow.RESIZE_HEIGHT, void(this.lineHeight = e + this.lineHeightOffset);
                let a = o[0];
                for (let t = 1; t < o.length; t++) {
                    a += ` ${o[t]}`;
                    const i = this.getTextWidth(a);
                    if (!(i < s)) {
                        if (i > n) break;
                        h = a
                    }
                }
                if (t = this.getTextWidth(h), this.overflow = l.Overflow.RESIZE_HEIGHT, this.lineHeight = e + this.lineHeightOffset, this.nodeFitWithTextByWidth && (this.node.getComponent(g).width = t + 1), this.isLimitHeight && this.cacheLimitHeight > 0) {
                    const o = Math.ceil(i / t),
                        h = this.cacheLimitHeight - 2 * this.limitHeightPadding,
                        n = o * this.lineHeight / h;
                    if (n > 1) {
                        const t = Math.floor(this.fontSize / n),
                            i = this.lineHeight,
                            o = t => (this.changeFontSize(t), this.lineHeight = i * t / this.orgFontSize, this.updateRenderData(!0), this.transform.height > h);
                        let s = t,
                            r = this.orgFontSize;
                        for (; s <= r;) {
                            const t = Math.floor((s + r) / 2);
                            o(t) ? r = t - 1 : s = t + 1, e = t
                        }
                        this.changeFontSize(e), this.lineHeight = i * e / this.orgFontSize
                    }
                }
            }
        }
    }).prototype, "orgNodeWidth", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 30
        }
    }), z = i(b.prototype, "lineHeightOffset", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), S = i(b.prototype, "nodeFitWithTextByWidth", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), L = i(b.prototype, "isLimitHeight", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), W = i(b.prototype, "limitHeightNode", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(b.prototype, "limitHeightPadding", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 2
        }
    }), H = b)) || H));
    o._RF.pop()
}
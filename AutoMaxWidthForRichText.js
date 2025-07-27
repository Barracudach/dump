import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./NodeTools.js";

function main() {
    var d, l, x, u, g, p;
    h._RF.push({}, "d1c877JCdlEe7XjwZ7lW52Q", "AutoMaxWidthForRichText", void 0);
    const {
        ccclass: T,
        property: W,
        requireComponent: m,
        executeInEditMode: f,
        playOnFocus: y,
        menu: C
    } = o;
    t("default", (d = m(s), l = C("Design System/Auto max width for RichText"), x = W(r), T(u = f(u = y(u = d(u = l((p = e((g = class extends n {
        constructor(...t) {
            super(...t), i(this, "target", p, this), this.lastMaxWidth = 0, this._richText = null
        }
        get richText() {
            return this._richText || (this._richText = this.getComponent(s)), this._richText
        }
        onLoad() {
            a(this.target, !0) && this.target.on(r.EventType.SIZE_CHANGED, this.onSizeChanged, this)
        }
        onEnable() {
            0 != this.lastMaxWidth && this.lastMaxWidth != this.richText.maxWidth && (this.richText.maxWidth = this.lastMaxWidth)
        }
        start() {
            this.onSizeChanged()
        }
        onDisable() {
            this.lastMaxWidth = this.richText.maxWidth
        }
        onDestroy() {
            a(this.target, !0) && this.target.off(r.EventType.SIZE_CHANGED, this.onSizeChanged, this)
        }
        onSizeChanged() {
            let t = c.getNodeWidth(this.target);
            this.target && this.richText && t != this.richText.maxWidth && (this.richText.maxWidth = t)
        }
    }).prototype, "target", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = g)) || u) || u) || u) || u) || u));
    h._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var h, a, d, c, p;
    l._RF.push({}, "f7e5aAiVrxKrJCssqr/f2JU", "LimitedLabel_pkw", void 0);
    const {
        ccclass: u,
        property: m
    } = n;
    t("default", (h = m(o), u((c = i((d = class extends s {
        constructor(...t) {
            super(...t), e(this, "label", c, this), e(this, "widthLimit", p, this), this._lastWidth = 0
        }
        start() {
            this._lastWidth = this.label.node.getComponent(r).width
        }
        limitWidth() {
            this._lastWidth == this.label.node.getComponent(r).width && this._lastWidth <= this.widthLimit || (cc_mtt.vv.ConsoleLog.log("limitWidth", this.label.node.getComponent(r).width, this.widthLimit, this.label.string), this.label.node.getComponent(r).width > this.widthLimit ? (this.label.node.getComponent(r).width = this.widthLimit, this.label.overflow = o.Overflow.SHRINK) : this.label.overflow = o.Overflow.NONE, this._lastWidth = this.label.node.getComponent(r).width)
        }
        update(t) {
            this.limitWidth()
        }
    }).prototype, "label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = i(d.prototype, "widthLimit", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 300
        }
    }), a = d)) || a));
    l._RF.pop()
}
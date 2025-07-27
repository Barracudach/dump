import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./cv.js";

function main() {
    var c, p, b, d, m, g, f, N, w, L;
    a._RF.push({}, "cf8afuwhGVGha3K6Uf3V+6J", "CollapsibleToggle", void 0);
    const {
        ccclass: T,
        property: y
    } = s;
    e("default", (c = y(n), p = y(r), b = y(l), d = y(l), T((f = t((g = class extends o {
        constructor(...e) {
            super(...e), i(this, "arrowSpriteNode", f, this), i(this, "nameLabel", N, this), i(this, "collapsedName", w, this), i(this, "expandedName", L, this), this.rotationMin = 0, this.rotationMax = 180, this.animTime = .2, this.labelI18N = "", this.animTween = null
        }
        onLoad() {
            this.labelI18N = this.collapsedName, this.updateLabel(), h.MessageCenter.register(h.config.CHANGE_LANGUAGE, this.updateLabel.bind(this), this.node)
        }
        onDestroy() {
            h.MessageCenter.unregister(h.config.CHANGE_LANGUAGE, this.node)
        }
        setState(e, t) {
            this.labelI18N = e ? this.collapsedName : this.expandedName, this.rotateTween(this.arrowSpriteNode, e ? this.rotationMin : this.rotationMax, t ?? this.animTime)
        }
        rotateTween(e, t, i = this.animTime) {
            return this.animTween && this.animTween.stop(), i <= 0 ? (e.angle = t, this.updateLabel(), null) : (this.animTween = u(e).to(i, {
                angle: -t
            }).call(this.updateLabel.bind(this)).start(), this.animTween)
        }
        updateLabel() {
            this.nameLabel && (this.nameLabel.string = h.config.getStringData(this.labelI18N))
        }
    }).prototype, "arrowSpriteNode", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(g.prototype, "nameLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(g.prototype, "collapsedName", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), L = t(g.prototype, "expandedName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), m = g)) || m));
    a._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./ResourceManager.js";
import * as u from "./MouseEventEffect.js";

function main() {
    var h, s, p, g, E, d, v, b, m, w, B, y, z, S;
    r._RF.push({}, "f69c5pz86RNvLzRzwdk70Kw", "BetButtonUiHandler", void 0);
    const {
        ccclass: C,
        property: R
    } = c;
    t("default", (h = R(n), s = R(n), p = R(n), g = R(n), E = R(n), d = R(f), C((m = e((b = class t extends a {
        constructor(...t) {
            super(...t), i(this, "leftEffect", m, this), i(this, "midEffect", w, this), i(this, "rightEffect", B, this), i(this, "wholeEffect", y, this), i(this, "rightSeparator", z, this), i(this, "targetButton", S, this)
        }
        onLoad() {
            this.leftEffect.active = !1, this.midEffect.active = !1, this.rightEffect.active = !1, this.wholeEffect.active = !1, this.rightSeparator.active = !1;
            let t = this.leftEffect.getComponent(u);
            t && (t.targetButton = this.targetButton), t = this.midEffect.getComponent(u), t && (t.targetButton = this.targetButton), t = this.rightEffect.getComponent(u), t && (t.targetButton = this.targetButton)
        }
        onEnable() {
            this.updateEffect(!0)
        }
        onDisable() {
            this.updateEffect(!1)
        }
        updateEffect(e) {
            let i = this.node.parent.parent,
                r = i.children.length,
                n = 0,
                f = null;
            for (let c = 0; c < r; c++) {
                let r = i.children[c];
                if (r.active && r !== this.node || r === this.node && e) {
                    let e = r.getComponentInChildren(t);
                    e && (0 == n ? (e.leftEffect.active = !0, e.midEffect.active = !1, e.rightEffect.active = !1, e.wholeEffect.active = !1, e.rightSeparator.active = !0) : (e.leftEffect.active = !1, e.midEffect.active = !0, e.rightEffect.active = !1, e.wholeEffect.active = !1, e.rightSeparator.active = !0), l.updateWidget(r, !0, o.AlignMode.ALWAYS), n++, f = e)
                }
            }
            f && (n > 1 ? (f.leftEffect.active = !1, f.midEffect.active = !1, f.rightEffect.active = !0, f.wholeEffect.active = !1, f.rightSeparator.active = !1) : (f.leftEffect.active = !1, f.midEffect.active = !1, f.rightEffect.active = !1, f.wholeEffect.active = !0, f.rightSeparator.active = !1))
        }
    }).prototype, "leftEffect", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(b.prototype, "midEffect", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(b.prototype, "rightEffect", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "wholeEffect", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(b.prototype, "rightSeparator", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(b.prototype, "targetButton", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = b)) || v));
    r._RF.pop()
}
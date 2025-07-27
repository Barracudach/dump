import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./DataManager.js";

function main() {
    var d, f, y, g, m, v, L, k, C, w, D, z, B, R, T, I;
    n._RF.push({}, "2c686UhksNDD5NvQ2yqb78v", "maintenanceDialog", void 0);
    const {
        ccclass: x,
        property: A
    } = r;
    t("default", (d = A(o), f = A(o), y = A(l), g = A(o), m = A(l), v = A(o), L = A(o), x((w = e((C = class extends a {
        constructor(...t) {
            super(...t), i(this, "mask", w, this), i(this, "blocker", D, this), i(this, "titleLabel", z, this), i(this, "spaceReplaceTitle", B, this), i(this, "contentLabel", R, this), i(this, "closeButton", T, this), i(this, "options", I, this), this.controller = null
        }
        onLoad() {
            this.blocker.active = !1, this.closeButton.on(s.EventType.CLICK, this.hide.bind(this));
            for (const t of this.options) t.active = !1
        }
        playAnimation(t) {
            let e = this.node.getComponent(c);
            e.play(e.clips[t].name)
        }
        show(t, e, i, n) {
            t || (t = ""), e || (e = ""), this.node.active = !0, this.blocker.active = !1, this.playAnimation(0), this.titleLabel.string = t, this.titleLabel.node.parent.active = "" !== this.titleLabel.string, this.spaceReplaceTitle.active = !this.titleLabel.node.parent.active, this.contentLabel.string = e, this.closeButton.parent.active = i;
            for (const t of n) this.createOption(t)
        }
        createOption(t) {
            let e = this.options[t.type],
                i = p(e);
            i.parent = e.parent, i.active = !0, i.on(s.EventType.CLICK, this.hide.bind(this)), t.callback && i.on(s.EventType.CLICK, (() => {
                t.callback()
            })), i.getComponentInChildren(l).string = t.text, t.color && (i.getComponent(u).color = t.color)
        }
        hide() {
            h(this.blocker, !0) && (this.blocker.active = !0);
            let t = b.popUps,
                e = t.indexOf(this.node);
            e >= 0 && t.splice(e, 1), this.playAnimation(1)
        }
        onShow() {}
        onHide() {
            this.node.destroy()
        }
        onClickSecretButton(t, e) {
            this.controller && this.controller.onPopupClickCode(e)
        }
    }).prototype, "mask", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(C.prototype, "blocker", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(C.prototype, "titleLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(C.prototype, "spaceReplaceTitle", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(C.prototype, "contentLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(C.prototype, "closeButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(C.prototype, "options", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), k = C)) || k));
    n._RF.pop()
}
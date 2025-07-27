import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./NodePage.js";

function main() {
    var p, d, m, b, f, g, k, N, y, w, P, z, B, R;
    n._RF.push({}, "05d07p+OQNGrqtv74DK8Vcb", "RedPocketHall", void 0);
    const {
        ccclass: v,
        property: I
    } = r;
    t("RedPocketHall", (p = I(o), d = I(a), m = I(a), b = I(s), f = I(s), g = I(l), v((y = e((N = class extends c {
        constructor(...t) {
            super(...t), i(this, "pocketNode", y, this), i(this, "message", w, this), i(this, "recordLabel", P, this), i(this, "okButton", z, this), i(this, "openButton", B, this), i(this, "animation", R, this), this._confirmAction = null, this.isInitialized = !1
        }
        onLoad() {
            this.okButton.enabled = this.openButton.enabled = !1
        }
        start() {}
        callRedPocket(t, e, i) {
            if (this.node.active = !0, !this.isInitialized) {
                this.isInitialized = !0;
                let i = h.roundValue(t);
                this.showPocketCoins(i > 0, i), this.addTuple(e)
            }
            this.showRedPocket(), this.showRecordIds(i)
        }
        showRecordIds(t) {
            this.recordLabel.string = t.length > 0 ? "(Id:" + t + ")" : ""
        }
        showRedPocket() {
            this.animation.play(this.animation.clips[0].name)
        }
        showPocketCoins(t, e = 0) {
            this.message.node.parent.active = t, t && (this.message.string = e.toString())
        }
        countTools(t) {
            let e = [],
                i = t.length;
            for (let n = 0; n < i; n++)
                if (0 == n) e.push({
                    toolName: t.shift(),
                    count: 1
                });
                else {
                    let i = t.shift(),
                        n = e.findIndex((t => t.toolName == i));
                    n < 0 ? e.push({
                        toolName: i,
                        count: 1
                    }) : e[n].count++
                } return e
        }
        addTuple(t) {
            let e = this.countTools(t);
            for (let t = 0; t < e.length; t++)
                if (0 == t) this.pocketNode.getComponent(a).string = `${e[t].toolName} x${e[t].count}`, this.pocketNode.active = !0;
                else {
                    let i = u(this.pocketNode);
                    i.getComponent(a).string = `${e[t].toolName} x${e[t].count}`, i.parent = this.pocketNode.parent, i.setSiblingIndex(i.parent.children.length - 3)
                }
        }
        onAnimCompleted(t) {
            switch (t) {
                case 0:
                    this.animation.play(this.animation.clips[1].name);
                    break;
                case 1:
                    this.okButton.enabled = !0;
                    break;
                case 2:
                    this.node.active = !1
            }
        }
        onOkClicked() {
            this.okButton.enabled = !1, this.animation.play(this.animation.clips[2].name)
        }
    }).prototype, "pocketNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(N.prototype, "message", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(N.prototype, "recordLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(N.prototype, "okButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(N.prototype, "openButton", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(N.prototype, "animation", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = N)) || k));
    n._RF.pop()
}
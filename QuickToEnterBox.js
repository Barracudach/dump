import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as k from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./ImpokerHall.js";
import * as f from "./NodePage.js";
import * as b from "./CommonTools.js";

function main() {
    var v, _, y, B, O, P, S, I, x, z;
    o._RF.push({}, "d99fafKrmxCQo12l1m9p6TZ", "QuickToEnterBox", void 0);
    const {
        ccclass: E,
        property: T
    } = s;
    t("QuickToEnterBox", (v = T(i), _ = T(i), y = T(i), B = T(r), E((S = e((P = class extends a {
        constructor(...t) {
            super(...t), n(this, "mask", S, this), n(this, "popup", I, this), n(this, "menuParent", x, this), n(this, "okButton", z, this), this._hallScript = void 0, this._enterAction = void 0, this._actionSpeed = .2, this.optionClicked = null
        }
        onLoad() {
            this.mask.getComponent(l).opacity = 1, this.popup.scale = new c(1e-4, 1e-4), this._hallScript = b.instance.getParentScene(p, this.node).getComponentInChildren(C)
        }
        start() {}
        zoomIn() {
            this.okButton.enabled = !1, this.node.active = !0, h(this.mask.getComponent(l)).to(this._actionSpeed, {
                opacity: 255
            }).start(), h(this.popup).to(this._actionSpeed, {
                scale: u(c.ONE)
            }, {
                easing: d.backOut
            }).call((() => {
                this.okButton.enabled = !0
            })).start()
        }
        zoomOut(t) {
            this.okButton.enabled = !1, h(this.mask.getComponent(l)).to(this._actionSpeed, {
                opacity: 0
            }).start(), h(this.popup).to(this._actionSpeed, {
                scale: u(c.ZERO)
            }, {
                easing: d.backIn
            }).call((() => {
                this.node.active = !1, t instanceof Function && t()
            })).start()
        }
        callBox(t, e) {
            this._enterAction = e, this.createOptions(t), this.zoomIn()
        }
        createOptions(t) {
            this.optionClicked = this.menuParent.children[0], this.optionClicked.getComponentInChildren(m).string = f.roundValue(t[0]).toString(), this.optionClicked.getComponent(g).isChecked = !0;
            for (let e = 1; e < t.length; e++) {
                let n = k(this.optionClicked);
                n.parent = this.menuParent, n.getComponentInChildren(m).string = t[e].toString()
            }
        }
        removeOptions() {
            for (let t = 1; t < this.menuParent.children.length; t++) this.menuParent.children[t].destroy()
        }
        resetBox() {
            this.removeOptions()
        }
        onOptionChosen(t) {
            this.optionClicked = t.node
        }
        handleNoLevelToEnter(t) {}
        onEnterClicked() {
            let t = parseFloat(this.optionClicked.getComponentInChildren(m).string);
            cc_mtt.vv.ConsoleLog.log("quick to enter:", t), this._enterAction(t, this.handleNoLevelToEnter.bind(this))
        }
        onBackClicked() {
            this.zoomOut((() => {
                this.resetBox()
            }))
        }
    }).prototype, "mask", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(P.prototype, "popup", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(P.prototype, "menuParent", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(P.prototype, "okButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = P)) || O));
    o._RF.pop()
}
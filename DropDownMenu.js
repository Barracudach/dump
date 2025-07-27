import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./Translator.js";

function main() {
    var y, g, L, v, k, f, C, D;
    o._RF.push({}, "27f0bFFLKxJDZ7h0xATMTUH", "DropDownMenu", void 0);
    const {
        ccclass: V,
        property: m
    } = s;
    t("DropDownMenu", (y = m(n), g = m(l), L = m(n), V((f = e((k = class extends r {
        constructor(...t) {
            super(...t), i(this, "optionAll", f, this), i(this, "scrollView", C, this), i(this, "blockLayer", D, this), this.dropDownSpeedInSecond = .2, this.dropUpSpeedInSecond = .2, this.optionList = []
        }
        start() {
            this.node.on("click", (() => {
                this.dropUp()
            }), this)
        }
        dropUp() {
            this.blockLayer.active || (this.blockLayer.active = !0), c(this.scrollView.node).to(this.dropUpSpeedInSecond, {
                scale: a(1, 0, 1)
            }, {
                easing: h.backIn
            }).call((() => {
                this.node.active = !1, this.blockLayer.active = !1
            })).start()
        }
        dropDown() {
            this.blockLayer.active || (this.blockLayer.active = !0), this.node.active = !0, this.scrollView.content.position = new p(this.scrollView.content.position.x, 0, this.scrollView.content.position.z), c(this.scrollView.node).set({
                scale: a(1, 0, 1)
            }).to(this.dropDownSpeedInSecond, {
                scale: a(1, 1, 1)
            }, {
                easing: h.backOut
            }).call((() => {
                this.blockLayer.active = !1
            })).start()
        }
        createOptions(t, e) {
            if (this.scrollView.content.children.length < 1) {
                this.optionList = t;
                let i = d(this.optionAll);
                i.getChildByName("dropRlist").destroy(), this.optionAll.getComponentInChildren(u).string = b("GAME_CATEGORY.ALL"), this.optionAll.on("click", (() => {
                    this.blockLayer.active = !0, c(this.node).call((() => {
                        e && e(this.optionAll.getComponentInChildren(u).string)
                    })).call((() => {
                        this.scheduleOnce((() => {
                            this.dropUp()
                        }), 0)
                    })).start()
                }), this);
                for (let t, o = 0; o < this.optionList.length; o++) t = d(i), t.parent = this.scrollView.content, t.getComponentInChildren(u).string = this.optionList[o], t.on(w.EventType.CLICK, (() => {
                    this.blockLayer.active = !0, c(this.node).call((() => {
                        e && e(t.getComponentInChildren(u).string)
                    })).call((() => {
                        this.scheduleOnce((() => {
                            this.dropUp()
                        }), 0)
                    })).start()
                }), this), o === this.optionList.length - 1 && (t.getChildByName("underline").active = !1)
            }
        }
        resetDropDownMenu() {
            this.scrollView.node.scale = new p(this.scrollView.node.scale.x, 0, this.scrollView.node.scale.z), this.node.active = !1, this.blockLayer.active = !1
        }
        deleteOptions() {
            this.scrollView.content.destroyAllChildren()
        }
    }).prototype, "optionAll", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(k.prototype, "scrollView", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(k.prototype, "blockLayer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = k)) || v));
    o._RF.pop()
}
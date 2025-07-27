import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./cv.js";

function main() {
    var m, b, v, y, f, x;
    n._RF.push({}, "affedgfH5tG5Ls1LjleyicO", "InsuranceHitOutsTips", void 0);
    const {
        ccclass: w,
        property: S
    } = a;
    t("InsuranceHitOutsTips", (m = S(o), b = S(s), w((f = e((y = class extends r {
        constructor(...t) {
            super(...t), i(this, "img_bg", f, this), i(this, "txt_value", x, this), this._bShowActing = !1
        }
        onLoad() {
            _.resMgr.adaptWidget(this.node, !0), this.hideAnim()
        }
        start() {}
        _reset() {
            g.stopAllByTarget(this.node), this.node.getComponent(h).opacity = 255, g.stopAllByTarget(this.img_bg.node), this.img_bg.node.setPosition(l(c.ZERO)), this.img_bg.node.getComponent(h).opacity = 255, g.stopAllByTarget(this.txt_value.node), this.txt_value.node.setPosition(l(c.ZERO)), this.txt_value.node.getComponent(h).opacity = 255, this._bShowActing = !1
        }
        showAnim(t) {
            if (this._bShowActing) return;
            this._bShowActing = !0;
            let e = 0,
                i = 0;
            e = this.img_bg.node.position.x - this.img_bg.node.getComponent(u).width * this.img_bg.node.getComponent(u).anchorX - d.getVisibleSize().width * this.node.getComponent(u).anchorX, i = this.img_bg.node.position.y, this.img_bg.node.setPosition(e, i);
            let n = _.config.getStringData("Insurance_bg_tips_hit_outs");
            this.txt_value.string = _.StringTools.formatC(n, _.String(-Math.abs(_.StringTools.numberToShowNumber(t)))), e = this.txt_value.node.position.x + _.resMgr.getLabelStringSize(this.txt_value).width * this.txt_value.node.getComponent(u).anchorX + d.getVisibleSize().width * this.node.getComponent(u).anchorX, i = this.txt_value.node.position.y, this.txt_value.node.setPosition(e, i);
            let o = p().to(.2, {
                    position: l(c.ZERO)
                }, {
                    easing: "elasticOut"
                }),
                s = function(t) {
                    return p().by(.05, {
                        position: t
                    })
                };
            this.img_bg.node.active = !0, o.clone(this.img_bg.node).delay(1).start(), this.txt_value.node.active = !0, p(this.txt_value.node).sequence(o, s(l(-10, 0, 0)), s(l(10, 0, 0)), s(l(-5, 0, 0)), s(l(5, 0, 0)), p().delay(.8)).start(), this.node.active = !0, p(this.node.getComponent(h)).delay(1.2).to(.3, {
                opacity: 0
            }).call((() => this.hideAnim())).start()
        }
        hideAnim() {
            this._reset(), this.img_bg.node.active = !1, this.txt_value.node.active = !1, this.node.active = !1
        }
    }).prototype, "img_bg", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(y.prototype, "txt_value", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = y)) || v));
    n._RF.pop()
}
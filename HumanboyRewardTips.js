import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as l from "./TweenControl.js";

function main() {
    var p, m, u, x, z, y;
    r._RF.push({}, "4deebw6Lg9GkZHAkM9bhpaJ", "HumanboyRewardTips", void 0);
    const {
        ccclass: f,
        property: C
    } = s;
    t("HumanboyRewardTips", (p = C(n), m = C(o), f((z = e((x = class extends a {
        constructor(...t) {
            super(...t), i(this, "img_reward", z, this), i(this, "txt_reward", y, this), this._img_reward_src_size = new d(d.ZERO), this._txt_reward_src_size = new d(d.ZERO)
        }
        onLoad() {
            g.resMgr.adaptWidget(this.node), this._img_reward_src_size = h(this.img_reward.node.getContentSize()), this._txt_reward_src_size = h(this.txt_reward.node.getContentSize())
        }
        start() {}
        _doLayout(t) {
            let e = h(this._txt_reward_src_size);
            this.txt_reward.maxWidth = e.width;
            for (let i = 0; i < this.txt_reward.string.length; ++i) {
                if (this.txt_reward.string = g.StringTools.calculateAutoWrapString(this.txt_reward.node, t), h(g.resMgr.getRichTextStringSize(this.txt_reward)).height <= this._txt_reward_src_size.height) break;
                e.width += this.txt_reward.fontSize, this.txt_reward.maxWidth = e.width
            }
            let i = e.width - this._txt_reward_src_size.width,
                r = e.height - this._txt_reward_src_size.height,
                n = h(this._img_reward_src_size.width + i, this._img_reward_src_size.height + r);
            this.img_reward.node.getComponent(_).setContentSize(n);
            let o = (this.txt_reward.node.getComponent(_).anchorX - this.img_reward.node.getComponent(_).anchorX) * this.img_reward.node.getComponent(_).width * this.img_reward.node.scale.x,
                s = (this.txt_reward.node.getComponent(_).anchorY - this.img_reward.node.getComponent(_).anchorY) * this.img_reward.node.getComponent(_).height * this.img_reward.node.scale.y;
            this.txt_reward.node.setPosition(o, s)
        }
        show(t, e = 4) {
            this._doLayout(t), this.node.active = !0, this.node.addOrGetComponent(c).opacity = 255, l.stopAll(this.node);
            let i = e / 2;
            w(this.node.addOrGetComponent(c)).delay(i).to(i, {
                opacity: 0
            }).call(this.hide).start()
        }
        hide() {
            this.node.active = !0, l.stopAll(this.node), this.node.active = !1
        }
    }).prototype, "img_reward", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(x.prototype, "txt_reward", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = x)) || u));
    r._RF.pop()
}
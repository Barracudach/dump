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
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as S from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./TweenControl.js";
import * as w from "./cv.js";

function main() {
    var b, f, z, x, v, T, I, R, A, O;
    o._RF.push({}, "6a5deXX8O9NGZV98tSjLQkd", "HumanboyGuid", void 0);
    const {
        ccclass: P,
        property: E
    } = s;
    t("HumanboyGuid", (b = E(n), f = E(n), z = E(n), x = E(h), P((I = e((T = class extends c {
        constructor(...t) {
            super(...t), i(this, "img_shield", I, this), i(this, "img_touch", R, this), i(this, "img_hand", A, this), i(this, "txt_desc", O, this), this._srcTouchSize = new r(200, 100), this._touchSizeScale = a(d.ZERO)
        }
        onLoad() {
            this._initUI()
        }
        start() {}
        _initUI() {
            this.resetShieldImg(), this.resetTouchImg(), w.resMgr.adaptWidget(this.node)
        }
        _layout(t) {
            let e = new r(this._srcTouchSize),
                i = l(g.ZERO);
            if (this.img_touch.node.getComponent(u).setAnchorPoint(.5, .5), t) {
                let o = new r(t.getComponent(u).contentSize);
                o.width > 0 && (e.width = o.width), o.height > 0 && (e.height = o.height), 0 != this._touchSizeScale.x && (e.width *= this._touchSizeScale.x), 0 != this._touchSizeScale.y && (e.height *= this._touchSizeScale.y);
                let n = l(g.ZERO);
                t.parent.getComponent(u).convertToWorldSpaceAR(t.position, n);
                let h = l(g.ZERO);
                this.img_touch.node.parent.getComponent(u).convertToNodeSpaceAR(n, h);
                let s = a(d.ZERO);
                s.x = this.img_touch.node.getComponent(u).anchorX - t.getComponent(u).anchorX, s.y = this.img_touch.node.getComponent(u).anchorY - t.getComponent(u).anchorY, i.x = h.x + s.x * o.width, i.y = h.y + s.y * o.height
            }
            this.img_touch.node.getComponent(u).setContentSize(e), this.img_touch.node.setPosition(i), this.img_hand.node.getComponent(u).setAnchorPoint(new d(.5, 1)), this.img_hand.node.setPosition(new g(i.x - 10, i.y)), this.txt_desc.node.getComponent(u).setAnchorPoint(.5, .5), this.txt_desc.node.setPosition(new g(this.img_hand.node.position.x, this.img_hand.node.position.y - this.img_hand.node.getComponent(u).height - 43))
        }
        resetShieldImg() {
            this.img_shield.node.active = !0, this.img_shield.node.getComponent(m).color = new p(p.BLACK), this.img_shield.node.getComponent(_).opacity = 153
        }
        resetTouchImg() {
            this.img_touch.node.active = !0, this.img_touch.node.getComponent(m).color = new p(p.BLACK), this.img_touch.node.getComponent(_).opacity = 0
        }
        setTouchSizeScale(t, e) {
            this._touchSizeScale.x = t, this._touchSizeScale.y = e
        }
        setDescString(t) {
            this.txt_desc.string = t
        }
        getDescString() {
            return this.txt_desc.string
        }
        show(t, e, i) {
            t && (this.node.active = !0, this._layout(t), this.img_touch.node.on(y.EventType.TOUCH_END, (t => {
                e && e(), this.hide()
            })), i ? this.resetShieldImg() : (this.img_shield.node.active = !0, this.img_shield.node.getComponent(_).opacity = 0), C.blinkForever(this.img_hand.node, 1, 1))
        }
        hide() {
            S.stopAllByTarget(this.img_hand.node), this.node.active = !1
        }
        reLayout(t) {
            this._layout(t)
        }
    }).prototype, "img_shield", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(T.prototype, "img_touch", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(T.prototype, "img_hand", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(T.prototype, "txt_desc", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = T)) || v));
    o._RF.pop()
}
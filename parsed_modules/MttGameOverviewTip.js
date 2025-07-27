import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, d, u, g, x, T, C, N, v;
    o._RF.push({}, "b7be6cTGrVMxZtrD5NDbADx", "MttGameOverviewTip", void 0);
    const {
        ccclass: _,
        property: b
    } = r;
    t("MttGameOverviewTip", (c = _("MttGameOverviewTip"), d = b(n), u = b(n), g = b(s), c((C = e((T = class extends a {
        constructor(...t) {
            super(...t), i(this, "tipNode", C, this), i(this, "tipTriangle", N, this), i(this, "tipLabel", v, this), this._targetNode = null, this._tipMaxWorldPositionX = [], this._onClickBackCB = null
        }
        start() {}
        updateTipMaxWorldPos() {
            this._tipMaxWorldPositionX = [];
            let t = this.node.getComponent(l).anchorPoint,
                e = this.node.convertToWorldSpaceAR(new p(-this.node.getContentSize().x * t.x, this.node.getContentSize().y * (1 - t.y))),
                i = this.node.convertToWorldSpaceAR(new p(this.node.getContentSize().x * (1 - t.x), -this.node.getContentSize().y * t.y)),
                o = this.tipNode.getComponent(l).anchorPoint,
                n = e.x + this.tipNode.getContentSize().x * o.x,
                s = i.x - this.tipNode.getContentSize().x * (1 - o.x);
            n > s && (n = s = e.x + this.node.getContentSize().x / 2), this._tipMaxWorldPositionX.push(n), this._tipMaxWorldPositionX.push(s)
        }
        setCallback(t) {
            this._onClickBackCB = t
        }
        setTargetNode(t) {
            this._targetNode = t
        }
        applyToTargetNode() {
            if (h(this._targetNode)) {
                let t = this._targetNode.convertToWorldSpaceAR(p.ZERO),
                    e = t.x;
                if (e = Math.min(Math.max(e, this._tipMaxWorldPositionX[0]), this._tipMaxWorldPositionX[1]), this.tipNode.setPosition(this.node.convertToNodeSpaceAR(new p(e, t.y))), e != t.x) {
                    let e = this.tipTriangle.parent,
                        i = e.convertToNodeSpaceAR(t).x,
                        o = e.getComponent(l).anchorPoint;
                    i = Math.min(Math.max(i, -e.getContentSize().x * o.x), e.getContentSize().x * (1 - o.x)), this.tipTriangle.setPosition(i, 0)
                } else this.tipTriangle.setPosition(0, 0)
            }
        }
        updateTipY() {
            if (h(this._targetNode)) {
                let t = this._targetNode.convertToWorldSpaceAR(p.ZERO),
                    e = this.node.convertToNodeSpaceAR(t);
                this.tipNode.setPosition(this.tipNode.getPosition().x, e.y)
            }
        }
        setTipLabel(t) {
            this.tipLabel.string = t
        }
        show() {
            this.node.active = !0, this.updateTipMaxWorldPos(), this.applyToTargetNode()
        }
        hide() {
            this.node.active = !1, this._targetNode = null
        }
        onClickBack() {
            this._onClickBackCB ? this._onClickBackCB() : this.hide()
        }
        update(t) {
            this.node.activeInHierarchy && this.updateTipY()
        }
    }).prototype, "tipNode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(T.prototype, "tipTriangle", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(T.prototype, "tipLabel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = T)) || x));
    o._RF.pop()
}
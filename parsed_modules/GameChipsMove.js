import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as v from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as a from "./cc.js";
import * as P from "./TweenControl.js";
import * as f from "./cv.js";
import * as I from "./Seat.js";

function main() {
    var T, N, M, b, A, D, w, O, S, _, k;
    i._RF.push({}, "35e00bA5cVKRImhwpNYMpG4", "GameChipsMove", void 0);
    const {
        ccclass: R,
        property: F
    } = s;
    e("GameChipsMove", (T = F(n), N = F(n), M = F(n), b = F(n), R((w = t((D = class extends a {
        constructor(...e) {
            super(...e), o(this, "chips", w, this), o(this, "chipsDrop", O, this), o(this, "chipsDropReverst", S, this), o(this, "chipsDropTiePrefab", _, this), this.m_kFadeInPos = new h, this.m_pkTarget = null, this.seat = void 0, this.chipsInPotNode = void 0, this.nodeUiTransform = null, o(this, "isMainPot", k, this), this.finishedAnimation = !1
        }
        onLoad() {
            this.nodeUiTransform = this.node.getComponent(l), this.chipsInPotNode = new p("chipsInPotNode"), this.chipsInPotNode.addComponent(r), this.chipsInPotNode.parent = this.node, this.chipsInPotNode.setPosition(0, 0)
        }
        onDestroy() {
            this.stopAllCallbackAndAnimation()
        }
        setSeat(e) {
            this.seat = e
        }
        SetFadeInPos(e) {
            this.m_kFadeInPos = new h(this.node.getComponent(l).convertToNodeSpaceAR(e))
        }
        MoveIn(e = 0) {
            0 == e ? this._MoveInDelay(0) : this.scheduleOnce(this._MoveInDelay, e)
        }
        MoveOut(e, t, o, i = 0, n = 1) {
            const s = this.nodeUiTransform.convertToNodeSpaceAR(o),
                a = this.nodeUiTransform.convertToNodeSpaceAR(t);
            0 == i ? this._MoveOutDelay(e, a, s, n) : this.scheduleOnce((() => {
                this._MoveOutDelay(e, a, s, n)
            }), i)
        }
        MoveOutToTarget(e, t, o = 0, i = !1) {
            const n = this.nodeUiTransform.convertToNodeSpaceAR(t);
            this.m_pkTarget = e.getComponent(I), this.finishedAnimation = !1, 0 == o ? this.ChipMoveOutToTarget(n, i) : this.scheduleOnce((() => {
                this.ChipMoveOutToTarget(n, i)
            }), o)
        }
        ChipMoveOutToTarget(e, t = !1) {
            this.stopAllCallbackAndAnimation(), t ? this.ChipSharingMove(e, 3) : this._MoveOutToTargetDelay(e)
        }
        ForceMove(e) {
            this.stopAllCallbackAndAnimation(), this.node && this._MoveOutToTargetDelay(new h(this.node.getComponent(l).convertToNodeSpaceAR(e)))
        }
        _MoveInDelay(e) {
            for (let e = 0; e < 3; ++e) {
                let t = c(this.chips);
                t.setScale(d(h.ONE)), this.node.addChild(t);
                let o = 2 - e;
                t.setPosition(this.m_kFadeInPos), t.getComponent(r).opacity = 0, u(t.getComponent(r)).delay(.02 * o).to(.1, {
                    opacity: 255
                }).start(), 0 == e ? u(t).delay(.02 * o).to(.1, {
                    position: new h(0, 0)
                }).call(this._MoveInHide.bind(this)).start() : u(t).delay(.02 * o).to(.1, {
                    position: d(0, 0, 0)
                }).start(), u(t).delay(.02 * o).to(.1, {
                    scale: d(h.ONE)
                }).delay(.1).call((() => P.fadeOut(t, .1))).delay(.1).removeSelf().start()
            }
        }
        _MoveOutDelay(e, t, o, i) {
            let n = c(this.chips);
            n.children.length > 1 && (n.children[0].active = i > 1, n.children[1].active = i > 2), this.node.addChild(n), e ? n.setPosition(o) : n.setPosition(new h(0, 0));
            let s = n.getComponent(r);
            s.opacity = 255, u(n).parallel(u(s).delay(.15).to(.15, {
                opacity: 0
            }), u().to(.3, {
                position: t
            })).removeSelf().start(), this.seat.hideChips()
        }
        ChipSharingMove(e, t) {
            let o = this,
                i = e,
                n = c(this.chips);
            n.children.length > 1 && (n.children[0].active = t > 1, n.children[1].active = t > 2), this.node.addChild(n), n.setPosition(new h(0, 0)), n.getComponent(r).opacity = 255;
            n.getComponent(r).opacity = 0, u(n).call((() => {
                o.chipsInPotNode && (o.chipsInPotNode.getComponent(r).opacity = 0)
            })).parallel(u().to(.5, {
                position: {
                    value: i,
                    easing: "sineOut"
                }
            }), u(n.getComponent(r)).to(.2, {
                opacity: 255
            })).delay(.66).parallel(u().call((() => {
                m(o.node) && f.tools.showChipDropReverst(n, o.chipsDropTiePrefab, !0)
            })), u(n.getComponent(r)).to(.4, {
                opacity: 0
            })).removeSelf().call((() => {
                o.destroySelf()
            })).start();
            this.scheduleOnce(this._MoveOutTargetHide, 2.06)
        }
        _MoveOutToTargetDelay(e) {
            this.chipsInPotNode || this.showChipInPot(!1);
            let t = this;
            this.stopAllCallbackAndAnimation(), u(this.chipsInPotNode).delay(.2).to(.5, {
                position: e
            }, {
                easing: C.sineInOut
            }).delay(.67).parallel(u(this.chipsInPotNode.getComponent(r)).to(.43, {
                opacity: 0
            }), u().delay(0).call((() => {
                m(t.node) && f.tools.showChipDropReverst(t.chipsInPotNode, t.chipsDropReverst, !1)
            }))).call((() => {
                t.finishedAnimation = !0, t.chipsInPotNode.removeAllChildren(), t.chipsInPotNode.getComponent(r).opacity = 255, t.chipsInPotNode.setPosition(0, 0), t.destroySelf()
            })).start();
            this.scheduleOnce(this._MoveOutTargetHide, 2.3)
        }
        _MoveInHide() {
            this.seat && this.seat.showChips(), this.isMainPot && this.showChipInPot()
        }
        _MoveOutTargetHide(e) {
            this.destroySelf()
        }
        _RandPos(e) {
            let t, o = 0;
            return t = 2 * (Math.random() - .5) * 100, o = 200 * Math.random(), new v(e.x + t, e.y + o)
        }
        TargetCallback() {
            f.appConfig.baseConfig.gameConfig.enableShakeSeatAfterGetChips && this.m_pkTarget.ShakeSeat()
        }
        showChipInPot(e = !0, t = (e => {})) {
            this.chipsInPotNode || (this.chipsInPotNode = new p("chipsInPotNode"), this.chipsInPotNode.addComponent(r), this.chipsInPotNode.parent = this.node), this.chipsInPotNode.setPosition(0, 0), f.tools.showChipInPot(this.chipsInPotNode, this.chipsDrop, e, t)
        }
        stopAllCallbackAndAnimation() {
            if (this.unscheduleAllCallbacks(), m(this.chipsInPotNode) && (y.stopAllByTarget(this.chipsInPotNode), this.chipsInPotNode.getChildByName("ChipDrop"))) {
                let e = this.chipsInPotNode.getChildByName("ChipDrop").getComponent(g);
                e && e.off(g.EventType.FINISHED)
            }
        }
        destroySelf() {
            m(this.node) && this.node.destroy()
        }
    }).prototype, "chips", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(D.prototype, "chipsDrop", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(D.prototype, "chipsDropReverst", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(D.prototype, "chipsDropTiePrefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(D.prototype, "isMainPot", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), A = D)) || A));
    i._RF.pop()
}
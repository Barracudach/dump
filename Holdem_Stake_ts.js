import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as y from "./observer.js";
import * as f from "./CommonTools.js";
import * as I from "./FormatParser.js";
import * as M from "./cv.js";
import * as k from "./Pb.js";
import * as _ from "./Holdem_GameConfig.js";
import * as w from "./TweenControl.js";

function main() {
    var A, T, E, O, D, L, V, R, B, z, F, H, x, G, K, W, j, U, Z, $, q, J;
    o._RF.push({}, "6d682FEN1ZLaIwbMeCJM7WV", "Holdem_Stake_ts", void 0);
    const {
        ccclass: Y,
        property: Q
    } = c;
    var X = function(t) {
        return t[t.NormalStake = 0] = "NormalStake", t[t.MainStake = 1] = "MainStake", t[t.LastStake = 2] = "LastStake", t
    }(X || {});
    t("Holdem_Stake", (A = Q(n), T = Q(s), E = Q(n), O = Q(a), D = Q(n), L = Q(n), V = Q(h), R = Q(r), B = Q(r), z = Q({
        type: l(X)
    }), F = Q(r), Y(H = y((G = e((x = class extends p {
        constructor(...t) {
            super(...t), i(this, "iconNode", G, this), i(this, "label", K, this), i(this, "choumaImgNode", W, this), i(this, "choumaImgSprite", j, this), i(this, "background", U, this), i(this, "colorBound", Z, this), i(this, "chips", $, this), this.chip = [], this.singleChip = null, this.chipsInPotNode = void 0, this.singleAnimationActionInterval = void 0, this.aimationActionInterval = [], i(this, "isMainPot", q, this), this.stakeToTimeOut = null, this._value = 0, this.bbValue = 1, this.anteValue = 1, this.coinMode = 0, this.tableCurrency = null, this.gameMode = null, this._chipStackNum = 1, this._stakeMode = X.NormalStake, i(this, "isPublic", J, this), this.potShow = !0, this._iconNodeStartPosition = new d(0, 0, 0)
        }
        get value() {
            return this._value
        }
        set value(t) {
            const e = 0 != t && this.potShow;
            if (this.isMainPot && this.value > 0 && 0 == t && M.tools.fadeOutPot(this.label.node.parent, .2), this.isMainPot && this.choumaImgSprite && (this.choumaImgSprite.enabled = t > 0), this._value = t, this.label) {
                this.setMainPotLabel(I.getDataPointValue(t, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck));
                let i = this.label.string;
                t > 0 && "0" == this.label.string && (this.setMainPotLabel(""), u(`******* Holdem_Stack > set value is > 0 but string showing is 0 ****\n                    ---- value = ${t}\n                    ---- stringToTrack = ${i}\n                `)), e || this.setMainPotLabel(""), this.label.node.parent.active = e
            }
            this.iconNode && (this.iconNode.active = e), this.background && (this.background.active = e)
        }
        get stakeMode() {
            return this._stakeMode
        }
        set stakeMode(t) {
            this._stakeMode != t && (this._stakeMode = t)
        }
        onLoad() {
            this.setNodeStartPosition()
        }
        setMainPotLabel(t) {
            this.label.string = t
        }
        setMainPotFakeEmpty() {
            const t = this.label.string.length + 1;
            this.setMainPotLabel(" ".repeat(t))
        }
        setNodeStartPosition() {
            this._iconNodeStartPosition = new d(this.background ? this.background.position : this.iconNode.position)
        }
        stakeFrom(t, e, i = 1) {
            let o = new d(f.instance.convertToNodeSpace(this.iconNode.parent, t).x, f.instance.convertToNodeSpace(this.iconNode.parent, t).y),
                n = this._iconNodeStartPosition;
            this.runStakeAction(1, o, n, (() => {
                e && e(), this.showChipInPot()
            }), i)
        }
        stakeTo(t, e) {
            let i = this._iconNodeStartPosition,
                o = new d(f.instance.convertToNodeSpace(this.iconNode.parent, t).x, f.instance.convertToNodeSpace(this.iconNode.parent, t).y);
            this.runStakeAction(1, i, o, e)
        }
        removeSingleChip() {
            this.singleChip && this.singleAnimationActionInterval && (this.singleAnimationActionInterval.stop(), this.singleChip.destroy())
        }
        runStakeAction(t, e, i, o, n = 1) {
            if (this.isPublic)
                for (var s = 0; s < _.NO_OF_STAKE_BEHIND; s++) {
                    this.chip && m(this.chip[s]) && this.chip[s].destroy(), this.chip[s] = g(this.iconNode);
                    let t = this.chip[s].getComponent(a);
                    t && (t.enabled = !0), this.iconNode && this.iconNode.parent && (this.chip[s].parent = this.iconNode.parent, this.chip[s].setPosition(e.x, e.y), this.chip[s].active = !0), this.chip[s].getComponent(b).opacity = 255, this.chip[s].children.length > 1 && (this.chip[s].children[0].active = n > 1, this.chip[s].children[1].active = n > 2), N(this.chip[s].getComponent(b)).delay(.15).to(.15, {
                        opacity: 0
                    }).start(), N(this.chip[s]).to(.3, {
                        position: i
                    }).call((() => {
                        o && o()
                    })).removeSelf().start()
                } else {
                    let n = _.PUBLIC_STAKE_MOVE_TIME,
                        s = _.PLAYER_STAKE_MOVE_TIME;
                    this.removeSingleChip(), this.singleChip = g(this.iconNode), this.iconNode && this.iconNode.parent && (this.singleChip.parent = this.iconNode.parent, this.singleChip.setPosition(new d(e.x, e.y)), this.singleChip.active = !0, this.singleChip.getComponent(b).opacity = 255 * t), this.singleAnimationActionInterval = N().sequence(N().to(this.isPublic ? n : s, {
                        position: i
                    }, {
                        easing: w.easeInOut(_.EASE_RATE)
                    }), N().call((() => {
                        o && o()
                    })), N().removeSelf()), this.singleAnimationActionInterval.target(this.singleChip).start()
                }
        }
        updateCoinModeInfo(t, e, i, o, n) {
            this.coinMode = t, this.bbValue = e, this.anteValue = i, this.tableCurrency = o, this.gameMode = n
        }
        showChipInPot(t = !0) {
            this.chipsInPotNode || (this.chipsInPotNode = new n("chipsInPotNode"), this.chipsInPotNode.addComponent(S), this.chipsInPotNode.parent = this.node);
            let e = new d(0, 0, 0);
            this.isMainPot && (e = this.node.parent.getComponent(S).convertToNodeSpaceAR(this.choumaImgSprite.node.getComponent(S).convertToWorldSpaceAR(d.ZERO)), M.appConfig.isLandscapeLayout ? e.add(new d(20, 100)) : e.add(new d(0, 132))), this.chipsInPotNode.setPosition(e), this.setShowLabelMainPot(!0), M.tools.showChipInPot(this.chipsInPotNode, this.chips, t, (t => {
                t.removeAll(t.node), t.node.destroy(), this.setShowChipMainPot(!0)
            }))
        }
        movePotToTarget(t, e, i = null) {
            let o = g(this.choumaImgSprite.node);
            o.parent = this.node.parent;
            let n = this.node.parent.getComponent(S).convertToNodeSpaceAR(this.choumaImgSprite.node.getComponent(S).convertToWorldSpaceAR(new d(0, 0)));
            o.setPosition(n), o.active = !0, o.getComponent(a).enabled = !0, t = this.node.parent.getComponent(S).convertToNodeSpaceAR(t), N().target(o).delay(e).to(.5, {
                position: t
            }, {
                easing: P.sineOut
            }).delay(.6).then(N(o.addOrGetComponent(b)).to(.5, {
                opacity: 0
            })).call((() => {
                o.destroy(), i && i()
            })).start()
        }
        moveSidePotToTarget(t, e, i = null, o) {
            let n = g(this.iconNode);
            n.parent = o;
            let s = o.getComponent(S).convertToNodeSpaceAR(this.iconNode.getComponent(S).convertToWorldSpaceAR(new d(0, 0)));
            n.setPosition(s), n.active = !0, n.getComponent(a).enabled = !0, t = o.getComponent(S).convertToNodeSpaceAR(t), N().target(n).delay(e).call((() => {
                this.node.active = !1
            })).to(.5, {
                position: t
            }, {
                easing: P.sineOut
            }).delay(.6).then(N(n.addOrGetComponent(b)).to(.5, {
                opacity: 0
            })).call((() => {
                n.destroy(), i && i()
            })).start()
        }
        showChipByNumberIndex() {
            this.choumaImgNode && this.choumaImgNode.children.length > 1 && (this.choumaImgNode.children[0].active = this._chipStackNum > 1, this.choumaImgNode.children[1].active = this._chipStackNum > 2)
        }
        setShowChipMainPot(t) {
            this.isMainPot && (this.choumaImgSprite.enabled = t)
        }
        setShowLabelMainPot(t) {
            this.isMainPot && this.label && (t ? this.setMainPotLabel(I.getDataPointValue(this._value, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck)) : this.setMainPotFakeEmpty())
        }
        setChipStackNum(t) {
            this._chipStackNum = t
        }
        get isShortDeck() {
            return this.gameMode == k.commonProto.MTT_GAME_MODE.SHORT_DECK
        }
        stopAllCallbackAndAnimation() {
            if (m(this.chipsInPotNode)) {
                if (v.stopAllByTarget(this.chipsInPotNode), this.chipsInPotNode.getChildByName("ChipDrop")) {
                    let t = this.chipsInPotNode.getChildByName("ChipDrop").getComponent(C);
                    t && (t.off(C.EventType.FINISHED), t.removeAll(t.node), t.node.destroy())
                }
                this.chipsInPotNode.removeAllChildren()
            }
        }
    }).prototype, "iconNode", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(x.prototype, "label", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(x.prototype, "choumaImgNode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(x.prototype, "choumaImgSprite", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(x.prototype, "background", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(x.prototype, "colorBound", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(x.prototype, "chips", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(x.prototype, "isMainPot", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(x.prototype, "value", [B], Object.getOwnPropertyDescriptor(x.prototype, "value"), x.prototype), e(x.prototype, "stakeMode", [z], Object.getOwnPropertyDescriptor(x.prototype, "stakeMode"), x.prototype), J = e(x.prototype, "isPublic", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), H = x)) || H) || H));
    o._RF.pop()
}
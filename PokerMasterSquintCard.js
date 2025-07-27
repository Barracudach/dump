import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cv.js";
import * as q from "./RubCard.js";
import * as E from "./Enum.js";
import * as w from "./PokerMasterDef.js";
import * as A from "./CowboyCard.js";
import * as N from "./HashMap.js";
import * as O from "./PeekCard.js";
import * as F from "./TweenControl.js";

function main() {
    var z, L, D, M, U, R, H, x, B, V, I, Z, X, j, G, W, J, $, K, Y, Q, tt, et, it;
    s._RF.push({}, "97782PJjRdEZJj4NZKcDL5C", "PokerMasterSquintCard", void 0);
    const {
        ccclass: st,
        property: nt
    } = d;
    t("PokerMasterSquintCard", (z = nt(n), L = nt(n), D = nt(a), M = nt(h), U = nt(h), R = nt(h), H = nt(h), x = nt(r), B = nt(o), V = nt(_), I = nt(o), st((j = e((X = class extends u {
        constructor(...t) {
            super(...t), i(this, "prefab_rub_card", j, this), i(this, "prefab_peek_card", G, this), i(this, "atlas_pm_pokermaster", W, this), i(this, "img_shield", J, this), i(this, "img_toast", $, this), i(this, "img_face", K, this), i(this, "img_back", Y, this), i(this, "txt_toast", Q, this), i(this, "outs_bg", tt, this), i(this, "zhiyin_ani", et, this), i(this, "aniTouch", it, this), this._toastTip = "", this._leftTime = 0, this._squintShader = null, this._isSquintFinish = !1, this._srcScale = l(c.ZERO), this._srcAngle = 0, this._srcPos = l(c.ZERO), this._isViewLuckTurnTables = !1, this._cardNum = 0, this._cardSuit = 0, this._isCreateShade = !1, this._bCanSquint = !1, this._sharkOuts = [], this._dashiOuts = [], this.outMap = new N, this.isIphoneX_area = !1, this._PeekCard = null, this._rtNode = null
        }
        show(t, e, i, s, n, a, h) {
            this.isIphoneX_area = h, this._bCanSquint = t, this.node.active = !0, this._resetView(), this._cardNum = e, this._cardSuit = i, this._isCreateShade = !1, this._leftTime = s, this.img_shield.node.active = !1, this.node.setSiblingIndex(w.LayerZorder.Z_IDX_PANEL_COUNT_DOWN), this.node.getComponent(g).enabled = !1, this._sharkOuts = n, this._dashiOuts = a, this.showSquintCard(), this._toastTip = t ? y.config.getStringDataCasino("PokerMaster_tips_insure_self_squint") : y.config.getStringDataCasino("PokerMaster_tips_insure_other_squint_1"), this._leftTime > 0 && this._startClock()
        }
        updateLanguage(t) {
            this._toastTip = t ? y.config.getStringDataCasino("PokerMaster_tips_insure_self_squint") : y.config.getStringDataCasino("PokerMaster_tips_insure_other_squint_1")
        }
        hide() {
            this._resetView(), this.node.active = !1
        }
        onLoad() {
            y.resMgr.adaptWidget(this.node, !0), this._srcScale = this.img_back.node.scale, this._srcAngle = this.img_back.node.angle, this._srcPos = this.img_back.node.position.clone(), y.MessageCenter.register("LuckTurntables_isView", this.sendLuckTurnTablesView.bind(this), this.node), this.outs_bg.active = !1, E.zh_CN != y.config.getCurrentLanguage() && E.zh_TW != y.config.getCurrentLanguage() && (this.txt_toast.fontSize = 36), this._rtNode = new o("_rtNode"), this._rtNode.addComponent(C), this._rtNode.addComponent(p), this._rtNode.addComponent(h), this._rtNode.active = !1, this.node.addChild(this._rtNode), this.node.on(o.EventType.TOUCH_START, (t => {
                var e, i;
                null == (e = this._squintShader) || !e.node || null != (i = this._squintShader) && i.unregisterEvent || this._squintShader.node.emit(o.EventType.TOUCH_START, t)
            }), this), this.node.on(o.EventType.TOUCH_MOVE, (t => {
                var e, i, s;
                null == (e = this._squintShader) || !e.node || null != (i = this._squintShader) && i.unregisterEvent || null == (s = this._squintShader) || s.node.emit(o.EventType.TOUCH_MOVE, t)
            }), this), this.node.on(o.EventType.TOUCH_END, (t => {
                var e, i, s;
                null == (e = this._squintShader) || !e.node || null != (i = this._squintShader) && i.unregisterEvent || null == (s = this._squintShader) || s.node.emit(o.EventType.TOUCH_END, t)
            }), this), this.node.on(o.EventType.TOUCH_CANCEL, (t => {
                var e, i, s;
                null == (e = this._squintShader) || !e.node || null != (i = this._squintShader) && i.unregisterEvent || null == (s = this._squintShader) || s.node.emit(o.EventType.TOUCH_CANCEL, t)
            }), this)
        }
        start() {}
        onDestroy() {
            y.MessageCenter.unregister("LuckTurntables_isView", this.node)
        }
        _createShade(t = !1) {
            if (this._squintShader) return;
            this.img_shield.node.active = !0, this.node.setSiblingIndex(w.LayerZorder.Z_IDX_PANEL_ADVANCE_AUTO_SELECT), this.node.getComponent(g).enabled = !0, this._isCreateShade = !0, this.img_face.node.active = !1, this.img_back.node.active = !1;
            let e = this._getSquintCardFrameName(this._cardNum, this._cardSuit),
                i = this._getSquintCardFacePath() + e,
                s = this._getSquintCardBackPath();
            if (t) {
                m(this._PeekCard) && null != this._PeekCard && (this.node.removeChild(this._PeekCard.node), this._PeekCard.node.destroy(), this._PeekCard = null), this._PeekCard || (this._PeekCard = S(this.prefab_peek_card).getComponent(O), this.node.addChild(this._PeekCard.node), this._PeekCard.node.setPosition(this.img_back.node.position), this._PeekCard.node.getComponent(C).setContentSize(440, 600), this._PeekCard.setTopNodeRadioNum(-90), this._PeekCard.setCardSize(b(400, 560)), this._PeekCard._moveSpeed = .1, this._PeekCard.angleFixed = 0), this._PeekCard.setCardBack(s), this._PeekCard.setCardFace(i), this._PeekCard.init(), this._PeekCard.setAutoPlay(!1), this._PeekCard.node.active = !0;
                let t = this._leftTime - 4.5;
                return t > 0 ? this.scheduleOnce((() => {
                    this._PeekCard && this._PeekCard.node.active && this._PeekCard.setAutoPlay(!0)
                }), t) : this._PeekCard && this._PeekCard.node.active && this._PeekCard.setAutoPlay(!0), void(this._rtNode.active = !1)
            }
            this._squintShader = S(this.prefab_rub_card).getComponent(q), this._squintShader.setFaceTextureFileName(i), this._squintShader.setBackTextureFileName(s), this._squintShader.setScale(this.img_back.node.scale), this._squintShader.setPosition(this.img_back.node.position.x, this.img_back.node.position.y), this._squintShader.setCallBack(((t, e) => {
                this._squintShader = null, this._isSquintFinish = !0, this._showFace(this._cardNum, this._cardSuit, e)
            })), this._squintShader.node.active = !0, this.node.addChild(this._squintShader.node);
            const n = new T;
            n.reset({
                width: this.node.getComponent(C).width,
                height: this.node.getComponent(C).height
            }), this._squintShader.getComponent(f).targetTexture = n;
            let a = new k;
            a.texture = n, this._rtNode.getComponent(h).spriteFrame = a, this._rtNode.active = !0, t && (this._squintShader.showAuto(), this.scheduleOnce((() => {
                this._squintShader && this._squintShader.beginFlip()
            }), 2))
        }
        _resetView() {
            this.resetZhiyinAni(), this.resetOut(), F.stopAll(this.node), P.getScheduler().unscheduleAllForTarget(this.node), this.img_toast.node.active = !1, this.img_shield.node.active = !0, this._isSquintFinish = !1, this.img_face.node.active = !1, F.stopAll(this.img_face.node), this.img_face.node.setScale(this._srcScale), this.img_face.node.angle = this._srcAngle, this.img_face.node.setPosition(this._srcPos), this.img_back.node.active = !1, F.stopAll(this.img_back.node), this.img_back.node.setScale(this._srcScale), this.img_back.node.angle = this._srcAngle, this.img_back.node.setPosition(this._srcPos), this._squintShader && (this._squintShader.node.removeFromParent(), this._squintShader.destroy(), this._squintShader = null), this._PeekCard && (this._PeekCard.node.active = !1, this._PeekCard.setAutoPlay(!1))
        }
        _showFace(t, e, i) {
            this.img_face.node.active = !0, this.img_back.node.active = !1, this.img_face.node.angle = i;
            let s = this._getSquintCardFrameName(t, e);
            y.resMgr.setSpriteFrame(this.img_face.node, this._getSquintCardFacePath() + s)
        }
        _showBack() {
            this.img_face.node.active = !1, this.img_back.node.active = !0
        }
        _getSquintCardFrameName(t, e) {
            let i = "";
            switch (e) {
                case y.Enum.CardSuit.CARD_SPADE:
                    i = "Bhm_";
                    break;
                case y.Enum.CardSuit.CARD_HEART:
                    i = "Rhm_";
                    break;
                case y.Enum.CardSuit.CARD_CLUB:
                    i = "Bcm_";
                    break;
                case y.Enum.CardSuit.CARD_DIAMOND:
                    i = "Rbm_";
                    break;
                default:
                    i = "Bhm_"
            }
            return `${i}${t+1}`
        }
        _getSquintCardFacePath() {
            return "zh_CN/game/pokermaster/rubcard/"
        }
        _getSquintCardBackPath() {
            return "zh_CN/game/pokermaster/rubcard/card_back"
        }
        _startClock() {
            this._updateToastTip(), this.unschedule(this._onTimeClock), this._leftTime > 0 && this.schedule(this._onTimeClock, 1)
        }
        _stopClock() {
            this.unschedule(this._onTimeClock), this.img_toast.node.active = !1, this.img_shield.node.active = !1, this._squintShader && (this._squintShader.node.removeFromParent(), this._squintShader.destroy(), this._squintShader = null), this._isSquintFinish || this._showBack()
        }
        _onTimeClock() {
            --this._leftTime >= 0 ? (this._updateToastTip(), this.showSquintCard()) : this._stopClock()
        }
        _updateToastTip() {
            this.img_toast.node.active = !this._isViewLuckTurnTables, this.txt_toast.string = y.StringTools.formatC(this._toastTip, this._leftTime)
        }
        sendLuckTurnTablesView(t) {
            this._isViewLuckTurnTables = t
        }
        showOuts(t, e) {
            let i = t.length,
                s = e.length;
            if (i <= 0 && s <= 0) return void this.resetOut();
            let n = this.isIphoneX_area ? 25 : 21,
                a = this.isIphoneX_area ? 8 : 6,
                h = (n - 1) / 2,
                r = this.outs_bg.getComponent(C).width,
                o = (t, e, i, s) => {
                    let n = this.outMap.get(s);
                    s.active = !0;
                    let a = "zh_CN/game/pokermaster/card_type_0/",
                        h = n.length,
                        o = s.getChildByName("card");
                    if (e < h)
                        for (let t = h - 1; t >= e; --t) n[t].node.removeFromParent(), n[t].node.destroy(), n.pop();
                    else if (e > h)
                        for (let t = h; t < e; ++t) {
                            let e = A.create(a, a);
                            e.ResetFromNode(o), e.node.name = "card_map_" + t, n.push(e)
                        }
                    s.getComponent(C).setContentSize(r + 74 * (e - 1), 186), s.getComponent(v).updateLayout();
                    for (let s = 0; s < e; ++s) n[s].SetContent(t[i + s].card.number, t[i + s].card.suit), n[s].SetFace(!0);
                    this.outMap.add(s, n)
                },
                _ = (t, e, i) => {
                    0 == e ? 0 == i ? (t.getComponent(C).setAnchorPoint(.5, .5), t.setPosition(this.outs_bg.position)) : -1 == i ? (t.getComponent(C).setAnchorPoint(1, .5), t.setPosition(r / 2 - 35.5 - 7, this.outs_bg.position.y)) : 1 == i && (t.getComponent(C).setAnchorPoint(0, .5), t.setPosition(-r / 2 + 35.5 + 7, this.outs_bg.position.y)) : 0 == i ? (t.getComponent(C).setAnchorPoint(1, .5), t.setPosition(this.outs_bg.position.x + (r + 74 * (n - 1)) / 2, this.outs_bg.position.y - 105 * e)) : -1 == i ? (t.getComponent(C).setAnchorPoint(0, .5), t.setPosition(this.outs_bg.position.x - (r + 74 * (n - 1)) / 2 + r / 2 - 35.5 - 7 - 3, this.outs_bg.position.y - 105 * e)) : 1 == i && (t.getComponent(C).setAnchorPoint(1, .5), t.setPosition(this.outs_bg.position.x + (r + 74 * (n - 1)) / 2 - (r / 2 - 35.5 - 7) + 3, this.outs_bg.position.y - 105 * e))
                },
                d = (t, e, i, s) => {
                    let r = t;
                    for (let d = 0; d < i;) {
                        let u = this.node.getChildByName("outbg_map_" + t);
                        u || (u = S(this.outs_bg), u.name = "outbg_map_" + t, this.outs_bg.parent.addChild(u), this.outMap.add(u, []));
                        let l = 0 == s ? n : h;
                        d > 0 && (l = a), _(u, t - r, s), o(e, d + l >= i ? i - d : l, d, u), d += l, t += 1
                    }
                    return t
                },
                u = [];
            if (i <= 0 || s <= 0) {
                let n = 0;
                0 == i ? (n = s, u = e) : (n = i, u = t), d(0, u, n, 0)
            } else {
                let n = d(0, e, s, -1);
                d(n, t, i, 1)
            }
        }
        resetOut() {
            this.outMap.forEach(((t, e) => {
                t.active = !1
            }))
        }
        showZhiyinAni() {
            let t = "master_squintCard_guide";
            "true" != y.tools.GetStringByCCFile(t) ? (this._isCreateShade = !0, this._showBack(), this.zhiyin_ani.node.active = !0, this.zhiyin_ani.play(), this.aniTouch.on(o.EventType.TOUCH_START, (e => {
                y.tools.SaveStringByCCFile(t, "true"), this._createShade(), this._squintShader.unregisterEvent ? this.aniTouch.targetOff(this) : (this._squintShader.node.emit(o.EventType.TOUCH_START, e), this.zhiyin_ani.stop(), this.zhiyin_ani.node.active = !1)
            }), this), this.aniTouch.on(o.EventType.TOUCH_MOVE, (t => {
                this._squintShader.node.emit(o.EventType.TOUCH_MOVE, t), this._squintShader.unregisterEvent && this.aniTouch.targetOff(this)
            }), this), this.aniTouch.on(o.EventType.TOUCH_END, (t => {
                this._squintShader.node.emit(o.EventType.TOUCH_END, t), this._squintShader.unregisterEvent && this.aniTouch.targetOff(this)
            }), this), this.aniTouch.on(o.EventType.TOUCH_CANCEL, (t => {
                this._squintShader.node.emit(o.EventType.TOUCH_CANCEL, t), this._squintShader.unregisterEvent && this.aniTouch.targetOff(this)
            }), this)) : this._createShade()
        }
        resetZhiyinAni() {
            this.zhiyin_ani.stop(), this.zhiyin_ani.node.active = !1, this.aniTouch.targetOff(this)
        }
        showSquintCard() {
            this._isCreateShade || this._isViewLuckTurnTables || (this.showOuts(this._sharkOuts, this._dashiOuts), this._bCanSquint ? this.showZhiyinAni() : this._createShade(!0))
        }
    }).prototype, "prefab_rub_card", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(X.prototype, "prefab_peek_card", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(X.prototype, "atlas_pm_pokermaster", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(X.prototype, "img_shield", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(X.prototype, "img_toast", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(X.prototype, "img_face", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(X.prototype, "img_back", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(X.prototype, "txt_toast", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(X.prototype, "outs_bg", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(X.prototype, "zhiyin_ani", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(X.prototype, "aniTouch", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = X)) || Z));
    s._RF.pop()
}
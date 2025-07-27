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
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as T from "./cc.js";
import * as y from "./observer.js";
import * as w from "./mttconfig.js";
import * as D from "./mttconfig.js";
import * as v from "./soundEffect.js";
import * as I from "./Holdem_Basic_Item.js";
import * as L from "./Enum.js";
import * as b from "./cv.js";
import * as H from "./CrashTracing.js";
import * as O from "./CrashTracing.js";
import * as P from "./Pb.js";
import * as R from "./Holdem_GameConfig.js";
import * as k from "./TweenControl.js";
import * as E from "./CommonTools.js";

function main() {
    var x, N, F, M, B, j, q, W, z, V, G, U, K, Z, J, Q, X, Y, $, tt, et, it, ot, st;
    o._RF.push({}, "9bb51SS+yxEMqB/FVUvTZwL", "Holdem_Card_ts", void 0);
    const {
        ccclass: nt,
        property: at
    } = c, rt = t("CardAnimationType", s({
        NONE: 0,
        CLEAR_CARD: 1,
        MOVE_TO_HIDE: 2,
        MOVE_TO_SHOW: 3,
        ROTATE_CARD: 4,
        HIGHLIGHT: 5,
        SHOW_CARD: 6,
        MOVE_TO_HOLDER: 7,
        CLEAR_ALL: 99
    }));
    class lt {
        constructor(t, e) {
            this.key = 0, this.actions = [], this.isStart = !1, this._isDone = !1, this._countDone = 0, this.key = t, e.forEach((t => {
                this.actions.push({
                    node: t.node,
                    isTweenColor: t.isTweenColor,
                    animation: n().sequence(t.animation, n().call((() => {
                        this.complete()
                    })))
                })
            }), this), this.isStart = !1, this._isDone = !1, this._countDone = 0
        }
        start() {
            this.isDone || (this.isStart = !0, this.actions.forEach((t => {
                let e = t.node;
                t.isTweenColor && t.node.getComponent(a) ? e = t.node.getComponent(a) : t.isTweenColor && t.node.getComponent(r) && (e = t.node.getComponent(r)), t.animation.target(e).start()
            }), this))
        }
        complete() {
            this._isDone = ++this._countDone >= this.actions.length
        }
        stop() {
            for (; this.actions.length > 0;) {
                let t = this.actions.pop();
                t.node && t.animation && t.animation.stop()
            }
        }
        get isValid() {
            let t = !0;
            for (let e = 0; e < this.actions.length; e++) {
                const i = this.actions[e];
                if (!i.node || !i.animation) {
                    t = !1;
                    break
                }
            }
            return t
        }
        get isDone() {
            let t = !1;
            for (let e = 0; e < this.actions.length; e++) {
                let i = !0;
                for (let t = 0; t < this.actions[e].animation._actions.length; t++)
                    if (!this.actions[e].animation._actions[t].isDone()) {
                        i = !1;
                        break
                    } if (!i) {
                    t = !1;
                    break
                }
            }
            return this._isDone || t
        }
    }
    t("Holdem_CardAnimation", lt);
    t("Holdem_Card", (x = at(l), N = at(h), F = at(a), M = at(d), B = at(d), j = at(d), q = at(d), W = at(d), z = at(d), V = at(d), G = at(d), nt(U = y((Z = e((K = class extends I {
        constructor(...t) {
            super(...t), this.player = void 0, this.cardFaceSetting = 0, this.cardBackSetting = 0, i(this, "cardFaceAtlas", Z, this), i(this, "backSprite", J, this), i(this, "sprite", Q, this), i(this, "shadow", X, this), i(this, "highlight", Y, this), i(this, "showIcon", $, this), this._moveToShowTime = .5, this._moveToHideTime = .5, this._moveToPopTime = .5, this._moveToDiscardTime = .5, this._moveToDarkTime = .4, this._rotateTime = .5, i(this, "_showHolder", tt, this), i(this, "_hideHolder", et, this), i(this, "_popHolder", it, this), i(this, "_discardHolder", ot, this), i(this, "rootNode", st, this), this.cardPositionAfterDeal = new p(0, 0), this._cardId = 0, this.discarded = !1, this.actionIntervalList = [], this.animationList = [], this.controlRoom = !1, this._isAnimatingSelfFoldCard = !1, this._dealPos = new p(0, 0, 0), this._dealNode = null, this._dealRotate = 0, this._dealTime = 0, this._cardPositionAfterDeal = new p(0, 0, 0), this._isForceMoveToPositionAfterDeal = !1, this._cardScaleBeforeDeal = new p(1, 1, 1), this._cardScaleAfterDeal = new p(1, 1, 1), this._cardScaleOpen = new p(1, 1, 1), this._rootcardAngleOpen = 0, this._rootcardPosOpen = u(0, 0, 0), this._rootcardScaleOpen = u(0, 0, 0), this._dealCardCallback = null, this._offsetOpenCardTime = 0, this.isDealing = !1, this.isAnimating = !1, this._isSelf = !1, this._flyTime = .42, this._currentTimerAmount = 0, this._currentTimerStartTime = 0, this.cardSpriteColorAdjustAmount = 0, this.cardSpriteColorAdjustSource = void 0, this.cardSpriteRootColor = void 0
        }
        onDestroy() {
            this.stopSchedulesAndActions()
        }
        onLoad() {
            this.onLoadInit()
        }
        onDisable() {
            this.stopSchedulesAndActions()
        }
        onLoadInit() {
            this.node.active = !1, this.setCardBack(+this.getSettingCardBack()).then((() => this.setCardFace(+this.getSettingCardFace()))).then((() => this.node && (this.node.active = !0))).catch((() => this.node && (this.node.active = !0))), this.shadow.getComponent(m).opacity = 0, this.highlight && (this.highlight.getComponent(m).opacity = 0)
        }
        getSettingCardBack() {
            return +(C.localStorage.getItem(w.key_cardBackSetting) ?? b.appConfig.getGameConfig().defaultCardBackSetting)
        }
        getSettingCardFace() {
            return +C.localStorage.getItem(w.key_cardFaceSetting)
        }
        setSelf(t) {
            this._isSelf = t
        }
        get isSelf() {
            return this._isSelf
        }
        setId(t) {
            _(this.sprite) && (this._cardId = t, this.setCardSprite(t))
        }
        setCardSprite(t) {
            0 == t ? _(this.backSprite) ? this.sprite.spriteFrame = this.backSprite : this.setCardBack(this.cardBackSetting).catch((() => {
                console.log(" SetCard Back Promise Rejected")
            })) : this.setCardFaceSprite(t)
        }
        setCardFaceSprite(t) {
            b.resMgr.loadCardFront(this.cardFaceSetting, this.getCardSuitFromCardId(t), this.getCardNumberFromCardId(t), [this.sprite], this.loadCardFaceSpriteSucess.bind(this))
        }
        loadCardFaceSpriteSucess() {}
        getCardNumberFromCardId(t) {
            return t >= 130 ? t - 130 : t >= 66 ? t - 66 : t >= 34 ? t - 34 : t >= 18 ? t - 18 : 0
        }
        getCardSuitFromCardId(t) {
            return t >= 130 ? L.CARD_SPADE : t >= 66 ? L.CARD_HEART : t >= 34 ? L.CARD_CLUB : t >= 18 ? L.CARD_DIAMOND : 0
        }
        convertCardIdToCardData(t) {
            return {
                number: this.getCardNumberFromCardId(t),
                suit: this.getCardSuitFromCardId(t)
            }
        }
        setCardBack(t) {
            return new Promise(((e, i) => {
                this.cardBackSetting = t, b.resMgr.loadCardback(t, [this.sprite], (t => {
                    this.backSprite = t, this.setId(this._cardId), e instanceof Function && e()
                }), (() => {
                    i instanceof Function && i()
                }))
            }))
        }
        setCardFace(t) {
            return new Promise(((e, i) => {
                this.cardFaceSetting = t, this.setId(this._cardId), e instanceof Function && e()
            }))
        }
        setToHide() {
            this.setToHolder(this._hideHolder)
        }
        setToShow() {
            this.setToHolder(this._showHolder)
        }
        setToPop() {
            this.setToHolder(this._popHolder)
        }
        clearAnimation(t = 0, e = (() => {}), i = (() => {}), o = (() => {})) {
            let s = n().sequence(n().call(e), n().delay(t), n().call(i), n().call(o));
            const a = [{
                node: this.node,
                isTweenColor: !1,
                animation: s
            }];
            this.pushAnimation(rt.CLEAR_ALL, a)
        }
        moveToClear(t, e, i, o) {
            let s = n().sequence(n().call(i), n().delay(t), this.moveTo(this._moveToHideTime, e, o));
            const a = [{
                node: this.node,
                isTweenColor: !1,
                animation: s
            }];
            this.pushAnimation(rt.CLEAR_CARD, a)
        }
        moveToPopUp(t) {}
        moveToDark(t) {
            let e = k.easeInOut(R.EASE_RATE);
            const i = D.HOLDEM_DARK_TINT;
            let o = n().sequence(n().to(this._moveToDarkTime, {
                color: i
            }, {
                easing: e
            }), n().call(t));
            const s = [{
                node: this.sprite.node,
                isTweenColor: !0,
                animation: o
            }];
            this.pushAnimation(rt.HIGHLIGHT, s)
        }
        moveToDarkOpponent(t) {
            const e = D.HOLDEM_DARK_TINT,
                i = k.easeInOut(R.EASE_RATE);
            let o = n().sequence(n().to(this._moveToDarkTime, {
                color: e
            }, {
                easing: i
            }), n().call(t));
            const s = new p(this._showHolder.scale).multiply(new p(.9, .9, 1)),
                a = this.getConvertPosition(this._showHolder, this.node.parent).subtract(new p(0, 10, 0));
            let r = n().sequence(n().to(this._moveToDarkTime, {
                scale: s
            }), n().to(this._moveToDarkTime, {
                position: a
            }));
            const l = [{
                node: this.sprite.node,
                isTweenColor: !0,
                animation: o
            }, {
                node: this.node,
                isTweenColor: !1,
                animation: r
            }];
            this.pushAnimation(rt.HIGHLIGHT, l)
        }
        moveToDiscard(t = 0, e, i, o, s = (() => {})) {
            this.discarded = !0, this.setFoldAnimation(s, t, e, i, o)
        }
        moveTo(t, e, i) {
            return n().sequence(this.moveToAction(t, e), n().call(i))
        }
        rotateCard(t, e, i = (() => {}), o = (() => {})) {
            let s = n().sequence(n().call(i), this.flipCardAction(this._showHolder, e, t), n.call(o));
            const a = [{
                node: this.node,
                isTweenColor: !1,
                animation: s
            }];
            this.pushAnimation(rt.ROTATE_CARD, a)
        }
        rotateOpponentCard(t, e, i = (() => {}), o = (() => {})) {
            const s = this.getConvertPosition(this._showHolder, this.node.parent);
            let a = n().sequence(n().call(i), n().call(this.resetPos.bind(this)), this.flipOpponentCardAction(this._showHolder, this._showHolder.scale, s, t, e), n().call(o));
            const r = [{
                node: this.node,
                isTweenColor: !1,
                animation: a
            }];
            this.pushAnimation(rt.ROTATE_CARD, r)
        }
        showCard(t, e, i, o = (() => {}), s = (() => {})) {
            let a = n().sequence(n().call(o), this.showCardAction(t, e, i), n().call(s));
            const r = [{
                node: this.node,
                isTweenColor: !1,
                animation: a
            }];
            this.pushAnimation(rt.SHOW_CARD, r)
        }
        showCardFromHand(t = (() => {}), e = (() => {})) {
            let i = this._cardId,
                o = this.node.scale,
                s = k.easeInOut(R.EASE_RATE),
                a = n().sequence(n().call(t), n().to(0, {
                    scale: new p(0, o.y, o.z)
                }, {
                    easing: s
                }), n().call((() => {
                    this.showIcon.active = !1
                })), n().parallel(n().to(this._rotateTime, {
                    scale: o
                }, {
                    easing: s
                }), n().call((() => {
                    this.setCardSprite(0)
                }))), n().call((() => {
                    this.showIcon.active = !0
                })), n().to(0, {
                    scale: new p(0, o.y, o.z)
                }, {
                    easing: s
                }), n().parallel(n().to(this._rotateTime, {
                    scale: o
                }, {
                    easing: s
                }), n().call((() => {
                    this.setCardSprite(i)
                }))), n().call(e));
            const r = [{
                node: this.node,
                isTweenColor: !1,
                animation: a
            }];
            this.pushAnimation(rt.SHOW_CARD, r)
        }
        moveToAction(t, e, i) {
            i || (i = k.easeInOut(R.EASE_RATE));
            let o = this.getArrivePosition(e);
            return n().parallel(n().to(t, {
                position: new p(o.x, o.y)
            }, {
                easing: i
            }), n().to(t, {
                angle: -e.angle
            }, {
                easing: i
            }), n().to(t, {
                scale: e.scale
            }, {
                easing: i
            }), n().call((() => {})))
        }
        getArrivePosition(t) {
            let e = u(t.position.x, t.position.y, 0);
            if (t.parent != this.node.parent) {
                let i = E.instance.convertToWorldSpace(t, u(0, 0)),
                    o = E.instance.convertToNodeSpace(this.node.parent, i);
                e = u(o.x, o.y, 0)
            }
            return e
        }
        getConvertPosition(t, e) {
            let i = t.getComponent(A).convertToWorldSpaceAR(u(0, 0, 0));
            return e.getComponent(A).convertToNodeSpaceAR(i)
        }
        setToHolder(t) {
            let e = this.getArrivePosition(t);
            this.node.position = u(e.x, e.y, 0), this.node.angle = t.angle, this.node.setScale(new p(t.scale)), this.node.getComponent(m).opacity = t.getComponent(m).opacity
        }
        flipCardAction(t, e, i, o = (() => {})) {
            let s = k.easeInOut(R.EASE_RATE);
            return this.setTimerAnim(2 * this._rotateTime), n().sequence(n().to(this._rotateTime, {
                scale: new p(0, e.y, 1)
            }, {
                easing: s
            }), n().call(o), n().call((() => {
                this.setCardSprite(i)
            })), n().to(this._rotateTime, {
                scale: new p(e)
            }, {
                easing: s
            }))
        }
        flipOpponentCardAction(t, e, i, o, s, a = (() => {})) {
            let r = k.easeInOut(1),
                l = .533;
            const h = u(0, this.node.scale.y, this.node.scale.z),
                d = 2 + 10 * (1 - s);
            let c = u((this.node.position.x + d * i.x) / (d + 1), (this.node.position.y + d * i.y) / (d + 1));
            1 - s > .5 ? u(-15, 10) : u(10, -15);
            let m = u(this.node.scale.x + .3 * (e.x - this.node.scale.x), this.node.scale.y + .3 * (e.y - this.node.scale.y), this.node.scale.z);
            u(0, 0);
            const C = u(e);
            let _ = .16 + .1 * (1 - s),
                A = .19;
            b.appConfig.isLandscapeLayout && (l = .7, c.subtract(u(80 * (1 - s) + 80, 0)), 1 - s <= .5 && (r = k.easeInOut(3)), _ = .25 + .1 * (1 - s), A = .32, m = u(e));
            const g = l - _ - A;
            return this.setTimerAnim(l), n().sequence(n().parallel(n().to(_, {
                scale: new p(h)
            }, {
                easing: r
            }), n().to(_, {
                position: new p(c.x, c.y)
            })), n().call((() => {
                this.node.setPosition(new p(c.x, c.y)), a && a(), this.setCardSprite(o)
            })), n().parallel(n().to(A, {
                scale: new p(m)
            }, {
                easing: r
            }), n().to(A, {
                position: new p(i.x, i.y)
            }, {
                easing: r
            })), n().call((() => {
                this.node.setPosition(i.x, i.y)
            })), n().to(g, {
                scale: new p(C)
            }, {
                easing: r
            }))
        }
        showCardAction(t, e, i) {
            let o = k.easeInOut(R.EASE_RATE);
            return n().sequence(n().to(t, {
                scale: new p(e)
            }, {
                easing: o
            }), this.flipCardAction(this._hideHolder, e, i))
        }
        toggleHideShowSetting() {
            this._cardId && !this.holdemRoom.store.isReplay && (this.showIcon.active = !this.showIcon.active, this.holdemRoom.store.sendShowCardReq(Uint8Array.of(this._cardId), this.showIcon.active))
        }
        init(t, e) {
            this.node.parent = e;
            let i = E.instance.convertToWorldSpace(t, u(0, 0, 0)),
                o = E.instance.convertToNodeSpace(e, i);
            this.node.getComponent(m).opacity = 255, this.node.scale = new p(t.scale), this.node.setPosition(new p(o.x, o.y)), this.setToLight(), this.setCardSprite(0)
        }
        init2(t, e) {
            this.node.parent = e;
            let i = this.getConvertPosition(t, e);
            this.node.getComponent(m).opacity = 255, this.node.scale = new p(t.scale), this.node.setPosition(u(i.x, i.y)), this.setToLight(), this.setId(0)
        }
        setToLight() {
            this.setColorWithAdjustment(new g(255, 255, 255))
        }
        setToDark() {
            this.setColorWithAdjustment(D.HOLDEM_DARK_TINT)
        }
        setAnimationSelfFoldCard(t) {
            this._isAnimatingSelfFoldCard = t
        }
        equals(t) {
            return this._cardId == t
        }
        clearAllActionInterval() {
            if (this.actionIntervalList)
                for (; this.actionIntervalList.length > 0;) {
                    let t = this.actionIntervalList.shift();
                    this.node && t.stop()
                }
        }
        hasAnimationNotDone() {
            if (this.animationList.length > 0)
                for (let t = 0; t < this.animationList.length; t++)
                    if (this.animationList[t] && !this.animationList[t].isDone) return !0;
            return !1
        }
        containsAnimation(t) {
            return -1 != this.animationList.findIndex((e => e.key == t))
        }
        stopAllAnimation() {
            for (; this.animationList.length > 0;) {
                let t = this.animationList.pop();
                t && t.stop()
            }
        }
        pushAnimation(t, e) {
            let i = -1;
            const o = new lt(t, e);
            switch (t) {
                case rt.CLEAR_CARD:
                case rt.CLEAR_ALL:
                    this.stopAllAnimation();
                    break;
                case rt.MOVE_TO_SHOW:
                    if (i = this.animationList.findIndex((t => t.key == rt.MOVE_TO_SHOW)), i >= 0) return;
                    break;
                case rt.MOVE_TO_HIDE:
                    if (i = this.animationList.findIndex((t => t.key == rt.MOVE_TO_HIDE)), i >= 0) return;
                    break;
                case rt.ROTATE_CARD:
                    if (i = this.animationList.findIndex((t => t.key == rt.ROTATE_CARD)), i >= 0) return void(this.animationList[i] = o);
                    break;
                case rt.HIGHLIGHT:
                    if (i = this.animationList.findIndex((t => t.key == rt.HIGHLIGHT)), i >= 0) return void(this.animationList[i] = o);
                    break;
                case rt.MOVE_TO_HOLDER:
                    if (i = this.animationList.findIndex((t => t.key == rt.MOVE_TO_HOLDER)), i >= 0) return;
                    break;
                case rt.SHOW_CARD:
                    if (i = this.animationList.findIndex((t => t.key == rt.SHOW_CARD)), i >= 0) return
            }
            this.animationList.push(o)
        }
        playNextAnimation() {
            if (this.animationList.length > 0) {
                this.animationList[0].start()
            }
        }
        update() {
            if (this.animationList.length > 0) {
                let t = this.animationList[0];
                this.node ? t ? t.isDone || !t.isValid ? (this.animationList.shift(), this.playNextAnimation()) : t.isStart || this.playNextAnimation() : (this.animationList.shift(), this.playNextAnimation()) : this.stopAllAnimation()
            }
        }
        stopSchedulesAndActions() {
            this.unscheduleAllCallbacks(), this.clearTimerAnim(), this.stopAllAnimation(), _(this.rootNode) && f.stopAllByTarget(this.rootNode), _(this.node) && (f.stopAllByTarget(this.node), f.stopAllByTarget(this.node.getComponent(m)))
        }
        setDealPos(t) {
            let e = new p(0, 0, 0);
            this.node.parent.getComponent(A).convertToNodeSpaceAR(u(t.x, t.y), e), this._dealPos = new p(e.x, e.y, 0)
        }
        setDealNode(t) {
            this._dealNode = t
        }
        updateDealPos() {
            if (this._dealNode) {
                let t = this._dealNode.getComponent(A).convertToWorldSpaceAR(u(0, 0, 0));
                this.setDealPos(t)
            }
        }
        resetPos() {
            this.rootNode.setPosition(u(0, 0))
        }
        setDealRotate(t) {
            this._dealRotate = t
        }
        resetAngle() {
            this.node.angle = 0
        }
        setUnscheduleAllCallbacks() {
            this.stopSchedulesAndActions(), this._updateDeal(1, !0)
        }
        deal(t) {
            let e = this.rootNode.getComponent(S);
            e && (e.enabled = !1), this.setAnimationSelfFoldCard(!1), this.node.active = !1, this.isDealing = !0, this.stopSchedulesAndActions(), 0 == t ? this._onDeal(0) : this.scheduleOnce(this._onDeal, t)
        }
        setOpenCardDelay(t) {
            this._offsetOpenCardTime = t
        }
        setCardPositionAfterDeal(t, e = !1) {
            this._isForceMoveToPositionAfterDeal = e, this.setSelf(t);
            let i = 0;
            i = this.isSelf ? b.appConfig.isLandscapeLayout ? -360 : -330 : 0, this._cardPositionAfterDeal = u(0, i)
        }
        setCardScaleOnDeal(t, e) {
            this._cardScaleBeforeDeal = t, this._cardScaleAfterDeal = e
        }
        setCardScaleOnOpen(t) {
            this._cardScaleOpen = t
        }
        setDealCardCallback(t) {
            this._dealCardCallback = t
        }
        _onDeal(t) {
            this._dealTime = 0, this.node.getComponent(m).opacity = 200, this.node.setScale(this._cardScaleBeforeDeal), this.node.angle = this._dealRotate, this.node.active = !0, this.updateDealPos(), this.rootNode.active = !0, this.rootNode.setPosition(new p(this._cardPositionAfterDeal)), this.schedule(this._updateDeal, 0), this._updateDeal(0), _(this.holdemRoom) && this.controlRoom && this.holdemRoom.audioPlayer.playEffect(v.DealCard, this.holdemRoom.store)
        }
        _updateDeal(t, e = !1) {
            if (this._dealTime += t, this._dealTime >= this._flyTime) this._dealTime = 0, this.unschedule(this._updateDeal), e ? (this.updateCardAfterDeal(), this._openCard(1)) : this.schedule(this._waitForOpenCard, 0);
            else {
                let t = Math.pow(Math.min(6.44 * this._dealTime, 1), 2);
                this.node.getComponent(m).opacity = 200 + 55 * t;
                let e = 1 - (this._flyTime - this._dealTime) / this._flyTime,
                    i = new p(this._cardScaleAfterDeal),
                    o = new p(this._cardScaleBeforeDeal),
                    s = i.subtract(o).multiply(new p(e, e, 1)),
                    n = o.add(s);
                this.node.setScale(new p(n.x, n.y, 1));
                let a = b.appConfig.isLandscapeLayout ? Math.pow(1 - e, 2) : 1 - Math.sin(e * Math.PI / 2),
                    r = u(this._dealPos.x * a + this._cardPositionAfterDeal.x * (1 - a), this._dealPos.y * a + this._cardPositionAfterDeal.y * (1 - a));
                this.rootNode.setPosition(r)
            }
        }
        updateCardAfterDeal() {
            this._dealTime = 0, this.setCardSprite(this._cardId), this.node.active = !0, this.node.getComponent(m).opacity = 255, this.node.setScale(this._cardScaleOpen), this.rootNode.active = !0, this.isSelf && (this._cardPositionAfterDeal = u(0, b.appConfig.isLandscapeLayout ? -120 : -250)), this.rootNode.setPosition(new p(this._cardPositionAfterDeal)), this._dealCardCallback && (this._dealCardCallback(), this._dealCardCallback = null), this._isForceMoveToPositionAfterDeal && this.resetAngle()
        }
        _waitForOpenCard() {
            this._offsetOpenCardTime <= cc_mtt.vv.DataManager.getNow().getTime() && (this.unschedule(this._waitForOpenCard), this.updateCardAfterDeal(), this.schedule(this._openCard, 0))
        }
        _openCard(t) {
            this.unschedule(this._waitForOpenCard), this._dealTime += t;
            const e = b.appConfig.isLandscapeLayout ? .4 : .367;
            if (this._dealTime >= e) this.finishOpenCard();
            else {
                let t = (e - this._dealTime) / e,
                    i = 1 - Math.cos(t * Math.PI / 2);
                this.rootNode.setPosition(u(0, this._cardPositionAfterDeal.y * i)), this._isForceMoveToPositionAfterDeal && (this.node.angle = (1 - Math.pow(t, 2)) * this._dealRotate)
            }
        }
        finishOpenCard() {
            this.unschedule(this._openCard), this.unschedule(this._updateDeal), this._dealCardCallback && (this._dealCardCallback(), this._dealCardCallback = null), this._dealTime = 0, this._offsetOpenCardTime = 0, this.isDealing = !1, this.node.angle = this._dealRotate, this.recoverCardToOpenState()
        }
        recoverCardToOpenState(t = 0) {
            var e;
            let i = {
                    recoveryType: t,
                    cardIssue: 0
                },
                o = new p(p.ONE);
            this._hideHolder && this._showHolder && (0 == this._cardId ? this.isSelf ? this._showHolder.getScale(o) : this._hideHolder.getScale(o) : this._showHolder.getScale(o));
            let s = new p(p.ONE);
            if (this.node.getScale(s), t > 0) {
                const t = .5;
                0 == o.x || 0 == o.y ? (i.incorrectScale = "target scale: x:" + o.x + " y:" + o.y, i.cardIssue = 1) : (Math.abs(s.x - o.x) > t || Math.abs(s.y - o.y) > t) && (i.incorrectScale = "current scale: x:" + s.x + " y:" + s.y, i.cardIssue = 1)
            }
            if (this.node.setScale(o.x, o.y, 1), t > 0) {
                const t = 1;
                let e = this.rootNode.getPosition();
                (Math.abs(e.x) > t || Math.abs(e.y) > t) && (i.incorrectRootNodePosition = "x:" + e.x + " y:" + e.y, i.cardIssue = 1)
            }
            this.rootNode.setPosition(u(0, 0));
            let n = !1;
            const a = this.holdemRoom.store,
                r = null == (e = this.player) ? void 0 : e.store;
            let l = "";
            if (isNaN(this._cardId)) n = !0, this._cardId = 0, l += "isNaN ";
            else if (this.isSelf) n = 0 == this._cardId, l += "isSelf ";
            else if (this._cardId > 0) {
                if (r && (r.cards.length || r.hasCards || (n = !0, l += "show_face_cards.length.0 ")), a) {
                    let t = !1;
                    for (let e in a.seatedPlayers) {
                        let i = a.seatedPlayers[e];
                        if (a.self && i.userId != a.self.userId) continue;
                        const {
                            actualState: o,
                            state: s,
                            cards: n,
                            rank: r,
                            rankCards: l,
                            isShowdown: h
                        } = i;
                        if (i && o != P.holdem.Action.FOLD && s != P.holdem.Action.FOLD && !n.length) {
                            if (n.findIndex((t => 0 == t)) >= 0) continue;
                            if (h && (0 == r || l && !l.length)) {
                                t = !0;
                                break
                            }
                        }
                    }
                    t && (n = t, l += "show_face_haveAnyPlayerNotInShowDown ")
                }
            } else if (r && r.cards.length && (n = !0, l += "show_back_cards.length "), a) {
                let t = !1;
                for (let e in a.seatedPlayers) {
                    let i = a.seatedPlayers[e];
                    if (a.self && i.userId != a.self.userId) continue;
                    const {
                        actualState: o,
                        state: s,
                        cards: n,
                        rank: r,
                        rankCards: l,
                        isShowdown: h
                    } = i;
                    if (i && o != P.holdem.Action.FOLD && s != P.holdem.Action.FOLD && n.length && h && (r > 0 || l && l.length)) {
                        t = !0;
                        break
                    }
                }
                t && (n = t, l += "show_back_haveAnyPlayerInShowDown ")
            }
            if (n && t > 0 && (i.incorrectCard = this._cardId, i.incorrectCardReason = l, i.cardIssue = 1), this.setCardSprite(this._cardId), t > 0) {
                const t = 100;
                255 - this.node.getComponent(m).opacity > t && (i.incorrectOpacity = "opacity:" + this.node.getComponent(m).opacity, i.cardIssue = 1), this.node.active || (i.incorrectNodeActive = "nodeActive:false", i.cardIssue = 1), this.rootNode.active || (i.incorrectRootNodeActive = "rootNodeActive:false", i.cardIssue = 1), this.sprite.node.active || (i.incorrectRootNodeActive = "spriteNodeActive:false", i.cardIssue = 1)
            }
            var h, d, c;
            (this.node.getComponent(m).opacity = 255, this.node.active = !0, this.rootNode.active = !0, this.sprite.node.active = !0, t > 0 && i.cardIssue > 0) && (i.playerOnTable = (null == (h = this.player) || null == (h = h.info) ? void 0 : h.username) ?? "unknown", i.roomId = (null == (d = this.player) || null == (d = d.room) ? void 0 : d._roomId) ?? "unknown", null == (c = O.getInstance()) || c.trace(H.CardRecover, "MTT", i, !1, !1))
        }
        setTimerAnim(t) {
            if (t <= 0) return;
            let e = cc_mtt.vv.DataManager.getNow();
            if (this._currentTimerAmount > 0) {
                if (1e3 * this._currentTimerAmount - (e.getTime() - this._currentTimerStartTime) >= 1e3 * t) return
            }
            this._currentTimerStartTime = e.getTime(), this._currentTimerAmount = t, this.isAnimating = !0, this.unschedule(this.clearTimerAnim), this.scheduleOnce(this.clearTimerAnim, t)
        }
        clearTimerAnim() {
            this.isAnimating = !1, this._currentTimerAmount = 0
        }
        hideAnimation(t, e = null, i = (() => {})) {
            this.discarded = !0, this.setSelfFoldAnimation(t, e, i)
        }
        showAnimation() {
            this.stopSchedulesAndActions(), this.node.active = !0;
            const t = this.getConvertPosition(this._showHolder, this.node.parent);
            this.setTimerAnim(.15), this.node.getComponent(m).opacity = 255, n(this.node).set({
                position: new p(this.node.position.x, t.y - 60),
                active: !0
            }).to(.15, {
                position: new p(this.node.position.x, t.y),
                angle: this._showHolder.angle
            }).set({
                position: new p(this.node.position.x, t.y)
            }).start()
        }
        setFoldAnimation(t = (() => {}), e = 0, i, o, s) {
            this.stopSchedulesAndActions();
            const a = this.node.position.y,
                r = b.appConfig.isLandscapeLayout ? .4 : .3;
            this.node.getComponent(m);
            this.setTimerAnim(r), n(this.node.getComponent(m)).set({
                opacity: 255
            }).to(r, {
                opacity: 255
            }).start(), n(this.node).to(r, {
                position: new p(this.node.position.x, a + (b.appConfig.isLandscapeLayout ? -130 : -160))
            }).set({
                position: new p(this.node.position.x, a),
                active: !1
            }).call((() => {
                this.sprite.node.active = !1
            })).call(t.bind(this)).start(), b.appConfig.isLandscapeLayout || b.tools.foldCardAnim(.2, this.node, e, i, o, s, !0)
        }
        setSelfFoldAnimation(t, e = null, i = (() => {})) {
            if (!b.appConfig.isLandscapeLayout) {
                if (this._isAnimatingSelfFoldCard) return;
                this.setAnimationSelfFoldCard(!0)
            }
            this.stopSchedulesAndActions();
            const o = this.getConvertPosition(this._showHolder, this.node.parent),
                s = this.node.angle,
                a = b.appConfig.isLandscapeLayout ? .4 : .367,
                r = !b.appConfig.isLandscapeLayout;
            b.appConfig.isLandscapeLayout;
            this.setTimerAnim(a), this._rootcardAngleOpen = this.node.angle, this._rootcardPosOpen = new p(this.node.position.x, this.node.position.y), this._rootcardScaleOpen = this.node.scale, n(this.node.getComponent(m)).set({
                opacity: 255
            }).delay(.17).to(.3, {
                opacity: 255
            }).start(), n(this.node).parallel(n().to(.467, {
                position: new p(this.node.position.x, o.y + (b.appConfig.isLandscapeLayout ? -130 : -180))
            }), n().to(.3, {
                angle: 0
            })).set({
                position: new p(this.node.position.x, o.y),
                angle: s,
                active: r
            }).call(i.bind(this)).delay(.55).call(this.reShowCardAfterFold.bind(this)).start(), b.appConfig.isLandscapeLayout || b.tools.selfFoldCardAnim(!0, .3, this.node, t, e, this._hideHolder.scale)
        }
        reShowCardAfterFold() {
            b.appConfig.isLandscapeLayout || (this.node.setPosition(this._rootcardPosOpen), this.node.setScale(this._rootcardScaleOpen), this.node.angle = this._rootcardAngleOpen, this.node.getComponent(m).opacity = 255, this.setToDark())
        }
        setPublicCardOffAnimation(t, e = (() => {})) {
            this.stopSchedulesAndActions(), this._cardId = 0, this.setId(0), this.setToLight();
            const i = this.node.position.y,
                o = b.appConfig.isLandscapeLayout ? 0 : -255;
            n(this.node.getComponent(m)).delay(.1).to(.567, {
                opacity: o
            }).start(), n(this.node).delay(t).to(.567, {
                position: new p(this.node.position.x, i + (b.appConfig.isLandscapeLayout ? -40 : -70))
            }).call(this.resetPos.bind(this)).call((() => {
                this.sprite.node.active = !1
            })).set({
                position: new p(this.node.position.x, i),
                active: !1
            }).call(e.bind(this)).start()
        }
        setHideAnimation(t = (() => {})) {
            this.stopSchedulesAndActions();
            const e = this.node.position.y,
                i = this.node.angle,
                o = b.appConfig.isLandscapeLayout ? .4 : .367;
            this.setTimerAnim(o), n(this.node.getComponent(m)).set({
                opacity: 255
            }).delay(.167).to(.3, {
                opacity: 255
            }).start(), n(this.node).parallel(n().to(.367, {
                position: new p(this.node.position.x, e + (b.appConfig.isLandscapeLayout ? -130 : -180))
            }), n().to(.3, {
                angle: 0
            })).set({
                position: new p(this.node.position.x, e, 1),
                angle: i,
                active: !1
            }).call(this.resetAngle.bind(this)).call(t.bind(this)).start()
        }
        reset() {
            this.stopSchedulesAndActions(), this.resetPos(), this.setId(0), this.discarded = !1, this.sprite.node.active = !1, this.node.off(T.EventType.CLICK, this.toggleHideShowSetting, this)
        }
        showCardNoAnimation(t) {
            const e = this.getConvertPosition(this._showHolder, this.node.parent);
            this.node.setScale(this._showHolder.scale), this.node.setPosition(new p(e.x, e.y, 1)), this.setId(t)
        }
        setColorAdjustmentAmount(t, e) {
            t && e > 0 && e < 256 && (this.cardSpriteColorAdjustSource && this.clearColorAdjustment(this.cardSpriteColorAdjustSource), this.cardSpriteColorAdjustSource = t, this.cardSpriteColorAdjustAmount = e, this.setColorWithAdjustment(this.sprite.node.getComponent(r).color))
        }
        setColorWithAdjustment(t) {
            this.cardSpriteRootColor = t, this.cardSpriteColorAdjustAmount > 0 && this.cardSpriteColorAdjustAmount < 256 ? this._setCardSpriteColor(b.tools.getAdjustedColor(t, this.cardSpriteColorAdjustAmount)) : this._setCardSpriteColor(t)
        }
        clearColorAdjustment(t) {
            t && this.cardSpriteColorAdjustSource === t && (this.cardSpriteRootColor && this._setCardSpriteColor(this.cardSpriteRootColor), this.cardSpriteColorAdjustAmount = 0, this.cardSpriteColorAdjustSource = void 0)
        }
        _setCardSpriteColor(t) {
            this.sprite.node.getComponent(r).color = t
        }
    }).prototype, "cardFaceAtlas", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(K.prototype, "backSprite", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(K.prototype, "sprite", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(K.prototype, "shadow", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(K.prototype, "highlight", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(K.prototype, "showIcon", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(K.prototype, "_showHolder", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(K.prototype, "_hideHolder", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(K.prototype, "_popHolder", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(K.prototype, "_discardHolder", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(K.prototype, "rootNode", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = K)) || U) || U));
    o._RF.pop()
}
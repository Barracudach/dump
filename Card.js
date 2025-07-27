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
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as y from "./cc.js";
import * as v from "./ws_protocol.mjs_cjs=&original=.js";
import * as T from "./cv.js";
import * as S from "./cv.js";
import * as O from "./cv.js";
import * as D from "./cv.js";
import * as N from "./Enum.js";
import * as k from "./AppConfig.js";
import * as F from "./AppConfig.js";
import * as w from "./CrashTracing.js";
import * as P from "./GameSceneInstance.js";
import * as R from "./HoneyPotHelper.js";
import * as I from "./node-extension.js";
import * as L from "./AudioComp.js";

function main() {
    var x, B, G, z, M, E, H, U, Z, $, K, V, j, J, X, W, q, Y, Q, tt, et, it, at, ot, st, nt, rt, ct, dt, ht, lt, pt, ut, _t, mt;
    a._RF.push({}, "c86a9tpnkhDdq3NsYDhA4/3", "Card", void 0);
    const {
        ccclass: gt,
        property: Ct
    } = d;
    t("Card", (x = Ct(o), B = Ct(o), G = Ct({
        type: s,
        tooltip: "数字"
    }), z = Ct({
        type: s,
        tooltip: "背面"
    }), M = Ct({
        type: s,
        tooltip: "高亮边框"
    }), E = Ct({
        type: s,
        tooltip: "灰度遮罩"
    }), H = Ct({
        type: s,
        tooltip: "勾选"
    }), U = Ct({
        type: s,
        tooltip: "亮牌"
    }), Z = Ct({
        type: s,
        tooltip: "平分"
    }), $ = Ct({
        type: n(D),
        tooltip: "牌面值(默认:2)"
    }), K = Ct({
        type: n(S),
        tooltip: "牌花色(默认:黑桃)"
    }), V = Ct({
        type: n(O),
        tooltip: "牌类型(默认:0)"
    }), j = Ct({
        type: n(T),
        tooltip: "牌背(默认:4)"
    }), J = Ct({
        type: r,
        tooltip: "击中保险裂纹动画 预制件"
    }), X = Ct(c), W = Ct(o), gt((Q = e((Y = class extends h {
        constructor(...t) {
            super(...t), i(this, "tag", Q, this), i(this, "rootNode", tt, this), i(this, "img_cardFace", et, this), i(this, "img_num", it, this), i(this, "img_back", at, this), this.img_back_uiOpacity = null, i(this, "img_light", ot, this), i(this, "img_gray", st, this), i(this, "img_check", nt, this), i(this, "img_eye", rt, this), i(this, "img_fen", ct, this), i(this, "eCardNum", dt, this), i(this, "eCardSuit", ht, this), i(this, "eCardType", lt, this), i(this, "eCardBgType", pt, this), i(this, "prefab_anim_crack", ut, this), i(this, "anmRabbitHunt", _t, this), i(this, "anmForceExpose", mt, this), this._bBonny = !1, this._dealPos = l(0, 0, 0), this._dealNode = null, this._dealRotate = 0, this._dealTime = 0, this._cardPositionAfterDeal = l(0, 0, 0), this._isForceMoveToPositionAfterDeal = !1, this._cardScaleBeforeDeal = 1, this._cardScaleAfterDeal = 1, this._cardScaleOpen = 1, this._rootcardAngleOpen = 0, this._rootcardPosOpen = new p(0, 0, 0), this._rootcardScaleOpen = new p(0, 0, 1), this._dealCardCallback = null, this._hasContent = !1, this._gameid = 0, this._card_back_folder_path = "zh_CN/game/dzpoker/card/card_bg/", this._offsetOpenCardTime = 0, this.isDealing = !1, this.isAnimating = !1, this.isDiscarded = !0, this._flipOpponentActionTag = 100, this._flipOpponentActionCompleted = !1, this._isSelf = !1, this._isZoom = !1, this._flyTime = .42, this._nodeActiveTrace = [], this._rootNodeActiveTrace = [], this._isAnimatingSelfFoldCard = !1, this._currentTimerAmount = 0, this._currentTimerStartTime = 0, this.isTurnning = !1
        }
        onLoad() {
            this.setActive(!0), this.img_cardFace.active = !1, this.img_back.node.active = !0, this.img_light.node.active = !1, this.img_gray.node.active = !1, this.img_check.node.active = !1, this.img_eye.node.active = !1, this.img_fen.node.active = !1, this.getGameIDByGameInstance() == v.Enum.GameId.Jackfruit && this.executeLoadSprite(this.img_back, `${this._card_back_folder_path}Pb_01_0`), this._checkForHoneyPot()
        }
        getNodeActiveTrace() {
            return this._nodeActiveTrace
        }
        start() {}
        reset() {
            this.rootNode.setScale(l(1, 1, 1)), this.eCardNum = D.CardNum_MAX, this.eCardSuit = S.CardSuit_MAX, this._hasContent = !1, this.executeLoadSprite(this.img_num, this._getCardBgResPath()), this.isTurnning = !1
        }
        setContent(t, e, i = !0) {
            t = v.Number(t), e = v.Number(e), t === v.Number(L.pb.SpecialCards.Cards_Zero) && (t = D.CARD_2), e == v.Number(L.pb.SpecialCards.Cards_Zero) && (e = S.CARD_DIAMOND), this.eCardNum = t, this.eCardSuit = e, i && this._updateContent()
        }
        setGameID(t) {
            this._gameid = t
        }
        getGameID() {
            return this._gameid
        }
        setSelf(t) {
            this._isSelf = t
        }
        get isSelf() {
            return this._isSelf
        }
        setZoom(t) {
            this._isZoom = t
        }
        get isZoom() {
            return this._isZoom
        }
        _getCardResPath() {
            let t = O.CARD_FACE_0;
            switch (this.getGameIDByGameInstance()) {
                case v.Enum.GameId.Jackfruit:
                    t = v.tools.GetCardFaceJackfruit();
                    break;
                default:
                    t = v.tools.GetCardFace()
            }
            return this.getCardFrontResPath(t)
        }
        getCardFrontResPath(t) {
            let e = N.Instance.getGameConfig().cardFaceList;
            return t >= e.length && (t = e.length), `zh_CN/game/dzpoker/card/card_type_${e[t]}/`
        }
        _getCardBgResPath() {
            let t = T.CARD_BACK_0;
            switch (this.getGameIDByGameInstance()) {
                case v.Enum.GameId.Jackfruit:
                    t = T.CARD_BACK_0;
                    break;
                default:
                    t = v.tools.GetCardBack()
            }
            return this.getCardBgResPath(t)
        }
        getGameIDByGameInstance() {
            return (u(this.node.parent) ? w.getInstanceGameId(null == this ? void 0 : this.node, !0) : null) ?? this.getGameID()
        }
        getCardBgResPath(t) {
            let e = "",
                i = "Pb_01_0";
            switch (t) {
                case T.CARD_BACK_0:
                    i = "Pb_01_0";
                    break;
                case T.CARD_BACK_1:
                    i = "Pb_01_1";
                    break;
                case T.CARD_BACK_2:
                    i = "Pb_01_2";
                    break;
                case T.CARD_BACK_3:
                    i = "Pb_01_3";
                    break;
                case T.CARD_BACK_MAX:
                    i = "Pb_01_4"
            }
            return e = `${this._card_back_folder_path}${i}`, e
        }
        _updateContent() {
            this.anmRabbitHunt && (this.anmRabbitHunt.node.active = !1), this.anmForceExpose && (this.anmForceExpose.active = !1), this.eCardNum >= D.CARD_2 && this.eCardNum < D.CARD_INVALID ? (this.loadCardFaceSprite(this.img_num, this.eCardSuit, this.eCardNum + 1), this._hasContent = !0) : this.img_back.node.active = !0
        }
        loadCardFaceSprite(t, e, i) {
            let a = this.getCardFrontResPrefix(e),
                o = v.StringTools.format(this.getResourceStringTemplate(), this._getCardResPath(), a, i);
            this.executeLoadSprite(t, o)
        }
        getResourceStringTemplate() {
            return "{0}{1}{2}"
        }
        getCardFrontResPrefix(t) {
            let e = "";
            switch (t) {
                case S.CARD_SPADE:
                    e = "Bhm_";
                    break;
                case S.CARD_HEART:
                    e = "Rhm_";
                    break;
                case S.CARD_CLUB:
                    e = "Bcm_";
                    break;
                case S.CARD_DIAMOND:
                    e = "Rbm_";
                    break;
                default:
                    e = "Bhm_"
            }
            return e
        }
        executeLoadSprite(t, e) {
            v.resMgr.setSpriteFrame(t.node, e)
        }
        clearContent() {
            this.loadCardFaceShadow(this.img_num, 0), this.anmRabbitHunt && (this.anmRabbitHunt.node.active = !1), this.anmForceExpose && (this.anmForceExpose.active = !1)
        }
        hasContent() {
            return this._hasContent
        }
        initDefaultValue() {
            this.updateCard(), this.clearContent(), this.updateCardFace(), this.updateCardBack()
        }
        updateCardFace(t = !0) {
            let e = this.node.getComponent(s);
            this.loadCardFaceShadow(e, 0, t)
        }
        loadCardFaceShadow(t, e, i = !0) {
            let a = 0 == e ? "Pb_02" : "back_m",
                o = `${this._card_back_folder_path}${a}`;
            this.executeLoadSprite(t, o), i && (this._hasContent = !1)
        }
        updateCardBack() {
            let t = this._getCardBgResPath();
            this.executeLoadSprite(this.img_back, t)
        }
        updateCard() {
            this.updateCardFace(), this._updateContent()
        }
        updateCardGray() {
            this.loadCardFaceShadow(this.img_gray, 1)
        }
        setFace(t) {
            _.stopAllByTarget(this.img_back.node), _.stopAllByTarget(this.img_cardFace), this.img_cardFace.active = t, this.img_cardFace.scale = new p(1, this.img_cardFace.scale.y, this.img_cardFace.scale.z), this.img_back.node.active = !t, this.img_back.node.scale = new p(1, this.img_back.node.scale.y, this.img_back.node.scale.z), this.img_cardFace.angle = 0, this.img_back.node.angle = 0
        }
        isFace() {
            return !(!u(this.img_cardFace) || !u(this.img_back.node)) && (this.img_cardFace.active && !this.img_back.node.active && this.eCardNum < D.CARD_INVALID)
        }
        setHighLight(t) {
            this.img_light.node.active !== t && (this.img_light.node.active = t)
        }
        isHighLight() {
            return this.img_light.node.active
        }
        setGary(t, e = 255) {
            this.img_gray.node.active !== t && (this.img_gray.node.active = t)
        }
        isGray() {
            return this.img_gray.node.active
        }
        setCheck(t) {
            this.img_check.node.active !== t && (this.img_check.node.active = t)
        }
        isCheck() {
            return this.img_check.node.active
        }
        setEye(t) {
            this.img_eye.node.active !== t && (this.img_eye.node.active = t)
        }
        isEye() {
            return this.img_eye.node.active
        }
        setFen(t) {
            this.img_fen.node.active !== t && (this.img_fen.node.active = t)
        }
        isFen() {
            return this.img_fen.node.active
        }
        setDealPos(t) {
            this.node.getComponent(m).convertToNodeSpaceAR(new p(t.x, t.y, 1), this._dealPos)
        }
        setDealNode(t) {
            this._dealNode = t
        }
        updateDealPos() {
            if (this._dealNode) {
                let t = this._dealNode.getComponent(m).convertToWorldSpaceAR(new p(0, 0));
                this.setDealPos(t)
            }
        }
        resetPos() {
            u(this.rootNode) && this.rootNode.setPosition(new p(0, 0))
        }
        setDealRotate(t) {
            this._dealRotate = t
        }
        setUnscheduleAllCallbacks() {
            this.stopSchedulesAndActions(), this._updateDeal(1, !0)
        }
        deal(t) {
            this.isDiscarded = !1;
            let e = this.rootNode.getComponent(g);
            e && (e.enabled = !1), this.setAnimationSelfFoldCard(!1), this.setActive(!1), this.isDealing = !0, this.stopSchedulesAndActions(), 0 == t ? this._onDeal(0) : this.scheduleOnce(this._onDeal, t)
        }
        setOpenCardDelay(t) {
            this._offsetOpenCardTime = t
        }
        setCardPositionAfterDeal(t) {
            this._isForceMoveToPositionAfterDeal = t;
            let e = 0;
            e = this.isSelf ? v.appConfig.isLandscapeLayout ? -160 : -220 : 0, this._cardPositionAfterDeal = l(0, e, 0)
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
            this._dealTime = 0, this.node.getComponent(C).opacity = 255, this.setActive(!0), this.setRootActive(!0), this.rootNode.angle = this._dealRotate, this.img_back_uiOpacity || (this.img_back_uiOpacity = this.img_back.node.getComponent(C)), this.img_back_uiOpacity.opacity = this._bBonny ? 80 : 255, this.node.setScale(this._cardScaleBeforeDeal, this._cardScaleBeforeDeal), this.updateDealPos(), this.schedule(this._updateDeal, 0), this._updateDeal(0), v.AudioMgr.playEffectByAudioCompInGameCash(I.Instance().setUrl("zh_CN/game/dzpoker/audio/dealcard.mp3").setRoomId(w.getInstanceRoomId(null == this ? void 0 : this.node, !0) ?? -1))
        }
        _updateDeal(t, e = !1) {
            if (this._dealTime += t, this._dealTime > this._flyTime) this._dealTime = 0, this.unschedule(this._updateDeal), this.img_back_uiOpacity || (this.img_back_uiOpacity = this.img_back.node.getComponent(C)), this.img_back_uiOpacity.opacity = this._bBonny ? 80 : 255, e ? (this.updateCardAfterDeal(), this._openCard(1)) : this.schedule(this._waitForOpenCard, 0);
            else {
                let t = Math.pow(Math.min(6.44 * this._dealTime, 1), 2);
                this.img_back_uiOpacity || (this.img_back_uiOpacity = this.img_back.node.getComponent(C)), this.img_back_uiOpacity.opacity = this._bBonny ? 80 * t : 200 + 55 * t;
                let e = 1 - (this._flyTime - this._dealTime) / this._flyTime,
                    i = this._cardScaleBeforeDeal + e * (this._cardScaleAfterDeal - this._cardScaleBeforeDeal);
                this.node.setScale(i, i);
                let a = v.appConfig.isLandscapeLayout ? Math.pow(1 - e, 2) : 1 - Math.sin(e * Math.PI / 2),
                    o = l(this._dealPos.x * a + this._cardPositionAfterDeal.x * (1 - a), this._dealPos.y * a + this._cardPositionAfterDeal.y * (1 - a), 0);
                this.rootNode.setPosition(o)
            }
        }
        updateCardAfterDeal() {
            this._dealTime = 0, this._updateContent(), this.setFace(this.isSelf), this._dealCardCallback && (this._dealCardCallback(), this._dealCardCallback = null), this.isSelf && (this._cardPositionAfterDeal = l(0, v.appConfig.isLandscapeLayout ? -120 : -180, 0)), this.rootNode.setPosition(this._cardPositionAfterDeal), this.node.setScale(this._cardScaleOpen, this._cardScaleOpen), this._isForceMoveToPositionAfterDeal && this.resetAngle()
        }
        _waitForOpenCard() {
            this._offsetOpenCardTime <= cc_mtt.vv.DataManager.getNow().getTime() && (this.unschedule(this._waitForOpenCard), this.updateCardAfterDeal(), this.schedule(this._openCard, 0))
        }
        _openCard(t) {
            this.unschedule(this._waitForOpenCard), this._dealTime += t;
            const e = v.appConfig.isLandscapeLayout ? .4 : .367;
            if (this._dealTime >= e) this.finishOpenCard();
            else {
                let t = (e - this._dealTime) / e,
                    i = 1 - Math.cos(t * Math.PI / 2);
                this.rootNode.setPosition(l(0, this._cardPositionAfterDeal.y * i, 0)), this.node.setScale(this._cardScaleOpen, this._cardScaleOpen), this._isForceMoveToPositionAfterDeal && (this.rootNode.angle = (1 - Math.pow(t, 2)) * this._dealRotate)
            }
        }
        finishOpenCard(t = !1) {
            this.unschedule(this._openCard), this.unschedule(this._updateDeal), t && this.stopSchedulesAndActions(), this._dealCardCallback && (this._dealCardCallback(), this._dealCardCallback = null), this.setFace(this.isSelf), this.recoverCardToOpenState(), this.rootNode.angle = this._dealRotate, this._dealTime = 0, this._offsetOpenCardTime = 0, this.isDealing = !1
        }
        setTimerAnim(t) {
            if (t <= 0) return;
            let e = cc_mtt.vv.DataManager.getNow().getTime();
            if (this._currentTimerAmount > 0) {
                if (e - this._currentTimerStartTime >= 1e3 * t) return
            }
            this._currentTimerStartTime = e, this._currentTimerAmount = t, this.isAnimating = !0, this.unschedule(this.clearTimerAnim), this.scheduleOnce(this.clearTimerAnim, t)
        }
        clearTimerAnim() {
            this.isAnimating = !1, this._currentTimerAmount = 0
        }
        recoverCardToOpenState(t = 0, e) {
            let i = {
                    recoveryType: t,
                    cardIssue: 0
                },
                a = new p(1, 1, 1);
            if (this.node.getScale(a), t > 0) {
                const t = .5;
                Math.abs(a.x - this._cardScaleOpen) > t && Math.abs(a.y - this._cardScaleOpen) > t && (i.incorrectScale = "x:" + a.x + " y:" + a.y, i.cardIssue = 1)
            }
            if (this.node.setScale(this._cardScaleOpen, this._cardScaleOpen), t > 0) {
                const t = 1;
                let e = this.rootNode.getPosition();
                Math.abs(e.x) > t && Math.abs(e.y) > t && (i.incorrectRootNodePosition = "x:" + e.x + " y:" + e.y, i.cardIssue = 1)
            }
            if (this.rootNode.setPosition(l(0, 0, 0)), this._updateContent(), t > 0) {
                const t = 100;
                255 - this.node.addOrGetComponent(C).opacity > t && (i.incorrectOpacity = "opacity:" + this.node.addOrGetComponent(C).opacity, i.cardIssue = 1)
            }
            var o;
            (this.node.getComponent(C).opacity = 255, t > 0 && (this.node.active || (i.incorrectNodeActive = this._nodeActiveTrace, i.cardIssue = 1)), this.setActive(!0), t > 0 && (this.rootNode.active || (i.incorrectRootNodeActive = this._rootNodeActiveTrace, i.cardIssue = 1)), this.setRootActive(!0), t > 0 && i.cardIssue > 0) && (i.roomId = w.getInstanceRoomId(null == this ? void 0 : this.node, !0) ?? "unknown", i.isSelf = this.isSelf, e && (i.others = e), null == (o = k.getInstance()) || o.trace(F.CardRecover, "CashGame", i, !1, !1))
        }
        setAnimationSelfFoldCard(t) {
            this._isAnimatingSelfFoldCard = t
        }
        setOp(t) {
            this._bBonny = t, this.node.addOrGetComponent(C).opacity = t ? 80 : 255
        }
        isBonny() {
            return this._bBonny
        }
        turn(t, e = !1) {
            this.unschedule(this._realTurn), this.scheduleOnce((() => {
                this._realTurn(e)
            }), t)
        }
        turnOpponent(t, e = !1, i, a, o) {
            this.unschedule(this._realTurnOpponent), this.scheduleOnce((() => {
                this._realTurnOpponent(e, i, a, o)
            }), t)
        }
        stopSchedulesAndActions() {
            if (this.unscheduleAllCallbacks(), this.clearTimerAnim(), u(this.img_back) && _.stopAllByTarget(this.img_back.node), u(this.rootNode) && _.stopAllByTarget(this.rootNode), u(this.node)) {
                _.stopAllByTarget(this.node);
                const t = this.node.getComponent(C);
                u(t) && _.stopAllByTarget(t)
            }
        }
        _realTurn(t) {
            this.isFace() || (t ? (this.img_cardFace.active = !0, f(this.img_cardFace).to(.13, {
                scale: l(.01, 1, 1)
            }).to(.13, {
                scale: l(1, 1, 1)
            }).start(), f(this.img_back.node).to(.13, {
                scale: l(.01, 1, 1)
            }).call((() => {
                this.hide_Img_back()
            })).start()) : this.setFace(!0))
        }
        _realTurnOpponent(t, e, i, a) {
            if (!this.isFace() && !this.isTurnning)
                if (this.isTurnning = !0, this.node.addOrGetComponent(C).opacity = 255, t) {
                    this.setFace(!1), this.img_cardFace.active = !0;
                    let t = .533;
                    const o = y(0, this.node.scale.y),
                        s = 2 + 10 * (1 - a);
                    let n = y((this.node.position.x + s * i.x) / (s + 1), (this.node.position.y + s * i.y) / (s + 1));
                    1 - a > .5 ? y(-15, 10) : y(10, -15);
                    let r = y(this.node.scale.x + .3 * (e - this.node.scale.x), this.node.scale.y + .3 * (e - this.node.scale.y));
                    y(0, 0);
                    const c = y(e, e);
                    let d = .16 + .1 * (1 - a),
                        h = .19;
                    v.appConfig.isLandscapeLayout && (t = .7, n.subtract(y(80 * (1 - a) + 80, 0)), d = .25 + .1 * (1 - a), h = .32, r = y(e, e));
                    const p = t - d - h;
                    this._flipOpponentActionCompleted = !1, f(this.node).parallel(f().to(d, {
                        scale: l(o.x, o.y, 1)
                    }, {
                        easing: "sineInOut"
                    }), f().to(d, {
                        position: l(n.x, n.y, 0)
                    }, {
                        easing: "sineInOut"
                    })).call((() => {
                        this.hide_Img_back()
                    })).parallel(f().to(h, {
                        scale: l(r.x, r.y, 1)
                    }, {
                        easing: "sineInOut"
                    }), f().to(h, {
                        position: l(i.x, i.y, 0)
                    }, {
                        easing: "sineInOut"
                    })).to(p, {
                        scale: l(c.x, c.y, 1)
                    }, {
                        easing: "sineInOut"
                    }).call((() => {
                        this.isTurnning = !1, this._flipOpponentActionCompleted = !0
                    })).tag(this._flipOpponentActionTag).start()
                } else this.setFace(!0), this.isTurnning = !1
        }
        garyOpponent(t) {
            this.unschedule(this._garyOpponent), this.schedule(this._garyOpponent, 0, NaN, t)
        }
        _garyOpponent() {
            if (!this._flipOpponentActionCompleted) return;
            this.unschedule(this._garyOpponent);
            const t = 1.03,
                e = this.node.getPosition().add(v.appConfig.isLandscapeLayout ? l(p.ZERO) : l(0, -10, 0));
            f(this.node).parallel(f().to(.4, {
                scale: l(t, t, t)
            }), f().to(.4, {
                position: e
            })).start();
            const i = R.addOrGetComponent(this.img_gray.node, C);
            i.opacity = 0, this.setGary(!0), f(i).to(.4, {
                opacity: 255
            }).start()
        }
        hide_Img_back() {
            this.img_back.node.active = !1, this.img_back.node.scale = new p(1, this.img_back.node.scale.y, this.img_back.node.scale.z)
        }
        setCrackAnim(t, e = 0, i = !0, a = !1) {
            let o = "card_anim_crack",
                s = this.rootNode.getChildByName(o);
            if (t) {
                s || (s = b(this.prefab_anim_crack), s.setSiblingIndex(e), s.name = o, this.rootNode.addChild(s)), s.active = !0, s.setPosition(l(p.ZERO));
                let t = s.getComponent(c);
                if (t)
                    if (t.defaultClip.wrapMode = 1, a) {
                        t.play();
                        let e = t.getState(t.defaultClip.name);
                        e.time = e.duration
                    } else t.play()
            } else if (s)
                if (i) s.removeFromParent(), s.destroy();
                else {
                    let t = s.getComponent(c);
                    if (t) {
                        let e = t.defaultClip.name;
                        t.getState(e).setTime(0), t.getState(e).sample(), t.stop()
                    }
                    s.active = !1
                }
        }
        onDestroy() {}
        showActionD(t, e) {
            let i = this.rootNode.getComponent(c);
            i.play(["card_middle_d", "card_left_d", "card_down_d"][t]), i.hasEventListener("finished") || i.on("finished", (function() {
                e && this.turn(0, !0)
            }), this)
        }
        getCardNum() {
            return this.eCardNum
        }
        getCardSuit() {
            return this.eCardSuit
        }
        resetAngle() {
            this.rootNode.angle = 0
        }
        hideAnimation(t, e = null, i = .45) {
            this.isDealing || this.setSelfFoldAnimation(t, e, i)
        }
        showAnimation() {
            if (this.isDealing) return;
            this.stopSchedulesAndActions(), this.setActive(!0);
            let t = this._cardPositionAfterDeal = l(0, v.appConfig.isLandscapeLayout ? -120 : -160, 0);
            this.setTimerAnim(.15);
            const e = this.rootNode.position;
            f(this.rootNode).call((() => {
                this.rootNode.setPosition(e.x, t.y, e.z), this.rootNode.getComponent(C).opacity = 255, this.rootNode.active = !0
            })).to(.15, {
                position: l(e.x, 0, e.z),
                angle: this._dealRotate
            }).call(this.resetPos.bind(this)).start()
        }
        hideCard() {
            this.node.addOrGetComponent(C).opacity = 0, this.setActive(!1)
        }
        setFoldAnimation(t = 0, e, i, a, o = (() => {})) {
            this.setHideAnimation((() => {
                this.hideCard(), o()
            })), v.appConfig.isLandscapeLayout || v.tools.foldCardAnim(.2, this.node, t, e, i, a)
        }
        setSelfFoldAnimation(t, e = null, i = .45, a = (() => {})) {
            if (!v.appConfig.isLandscapeLayout) {
                if (this._isAnimatingSelfFoldCard) return;
                this.setAnimationSelfFoldCard(!0)
            }
            this.setSelfHideAnimation(a), v.appConfig.isLandscapeLayout || this.isZoom || v.tools.selfFoldCardAnim(!1, .3, this.node, t, e, new p(1, 1, 1).multiplyScalar(i))
        }
        setPublicCardOffAnimation(t, e = (() => {})) {
            this.setFace(!1), this.setHighLight(!1), this.setGary(!1), this.setOp(!1), this.setCrackAnim(!1), this.reset(), _.stopAllByTarget(this.node);
            const i = this.node.getComponent(C);
            u(i) && _.stopAllByTarget(i);
            const a = this.node.position.y,
                o = v.appConfig.isLandscapeLayout ? 0 : -255;
            f(this.node).parallel(f(this.node.getComponent(C)).delay(.1).to(.567, {
                opacity: o
            }), f().delay(t).to(.567, {
                position: new p(this.node.position.x, a + (v.appConfig.isLandscapeLayout ? -40 : -70))
            })).call(this.stopSchedulesAndActions.bind(this)).call(this.resetPos.bind(this)).call((() => {
                let t = this.node.position;
                this.node.setPosition(t.x, a, t.z), this.node.active = !1
            })).call(e.bind(this)).start()
        }
        setHideAnimation(t = (() => {})) {
            this.isDiscarded = !0, this.stopSchedulesAndActions();
            const e = v.appConfig.isLandscapeLayout ? .4 : .3;
            this.setTimerAnim(e), f(this.node.addOrGetComponent(C)).set({
                opacity: 255
            }).to(e, {
                opacity: 255
            }).call((() => {
                this.node.active = !1, this.node.addOrGetComponent(C).opacity = 255
            })).call(this.resetPos.bind(this)).call(t).start(), f(this.node).to(e, {
                scale: new p(.7, .7, 1)
            }).start(), f(this.rootNode).set({
                position: l(p.ZERO)
            }).to(e, {
                position: new p(this.rootNode.position.x, v.appConfig.isLandscapeLayout ? -130 : -160, this.rootNode.position.z)
            }).start()
        }
        setSelfHideAnimation(t = (() => {})) {
            this.isDiscarded = !0, this.stopSchedulesAndActions();
            const e = 1 + (v.appConfig.isLandscapeLayout ? .4 : .367),
                i = !v.appConfig.isLandscapeLayout;
            this._rootcardAngleOpen = this.rootNode.angle, this._rootcardPosOpen = new p(this.rootNode.position.x, this.rootNode.position.y, this.rootNode.position.z), this._rootcardScaleOpen = new p(this.rootNode.scale.x, this.rootNode.scale.y, 1), this.setTimerAnim(e), f(this.node.addOrGetComponent(C)).set({
                opacity: 255
            }).delay(.17).to(.3, {
                opacity: 255
            }).call((() => {
                this.node.active = i, this.node.addOrGetComponent(C).opacity = 255
            })).call((() => {
                v.appConfig.isLandscapeLayout && (this.resetAngle(), this.resetPos())
            })).call(t.bind(this)).start(), v.appConfig.isLandscapeLayout || f(this.node).to(.3, {
                scale: new p(.7, .7, 1)
            }).start(), f(this.rootNode).set({
                position: p.ZERO
            }).parallel(f().to(.3, {
                angle: 0
            }), f().to(.467, {
                position: l(this.rootNode.position.x, v.appConfig.isLandscapeLayout ? -130 : -190, this.rootNode.position.z)
            })).delay(.4).call(this.reShowCardAfterFold.bind(this)).start()
        }
        reShowCardAfterFold() {
            v.appConfig.isLandscapeLayout || (this.rootNode.setPosition(this._rootcardPosOpen), this.rootNode.angle = this._rootcardAngleOpen, this.node.scale = new p(this._cardScaleOpen, this._cardScaleOpen, 1), this.setAnimationSelfFoldCard(!0))
        }
        runRabbitHuntAnm(t, e) {
            if (!this.anmRabbitHunt) return this.setOp(!0), void(e && e());
            this.anmRabbitHunt.node.active = !0, this.img_cardFace.active = !1;
            const i = [{
                delay: 0,
                fadeInDuration: .13,
                moveUpDuration: .33,
                delayMoveDown: 2,
                moveDownDuration: .57
            }, {
                delay: 0,
                fadeInDuration: .17,
                moveUpDuration: .37,
                delayMoveDown: 1.93,
                moveDownDuration: .53
            }, {
                delay: 0,
                fadeInDuration: .2,
                moveUpDuration: .4,
                delayMoveDown: 1.87,
                moveDownDuration: .5
            }, {
                delay: .04,
                fadeInDuration: .16,
                moveUpDuration: .36,
                delayMoveDown: 1.47,
                moveDownDuration: .47
            }, {
                delay: .07,
                fadeInDuration: .07,
                moveUpDuration: .33,
                delayMoveDown: 1.44,
                moveDownDuration: .43
            }][t];
            i.delayMoveDown += 1;
            const a = this.node.position.y - 32,
                o = this.node.position.y;
            f(this.node).call((() => {
                R.addOrGetComponent(this.node, C).opacity = 0, this.node.setPosition(this.node.position.x, a, this.node.position.z)
            })).delay(i.delay).parallel(f().to(i.fadeInDuration, {}, {
                onUpdate(t, e) {
                    R.addOrGetComponent(t, C).opacity = 255 * e
                }
            }), f().to(i.moveUpDuration, {}, {
                onUpdate(t, e) {
                    t.setPosition(t.position.x, a + (o - a) * e, t.position.z)
                }
            })).call((() => {
                this.img_cardFace.active = !0, this.anmRabbitHunt.play(this.anmRabbitHunt.defaultClip.name)
            })).delay(i.delayMoveDown).call((() => {
                this.img_cardFace.active = !1
            })).to(i.moveDownDuration, {}, {
                onUpdate(t, e) {
                    t.setPosition(t.position.x, o + (a - o) * e, t.position.z), R.addOrGetComponent(t, C).opacity = 255 - 255 * e
                }
            }).call((() => {
                this.img_cardFace.active = !0, e && e()
            })).start()
        }
        runForceExposeAnm(t, e) {
            if (!this.anmForceExpose) return void(e && e());
            const i = this.rootNode.getComponent(g);
            i && (i.enabled = !1), this.setGary(!1), this.anmForceExpose.active = !0;
            const a = t <= 0 ? "card_forceExpose_card_1" : "card_forceExpose_card_2",
                o = this.rootNode.getComponent(c);
            o.play(a);
            const s = o.getState(a);
            this.scheduleOnce((() => {
                o.stop(), this.rootNode.scale = l(p.ONE), i && (i.enabled = !0), this.anmForceExpose.active = !1, e && e()
            }), (null == s ? void 0 : s.duration) + .02)
        }
        get isActive() {
            return u(this.node) && this.node.active
        }
        setActive(t) {
            if (this.node.active = t, k.hasInstance()) {
                const e = `node.active = ${t} - time: ${cc_mtt.vv.DataManager.getNow().toISOString()} - ${k.getTrace(3)}`;
                this._nodeActiveTrace.push(e), this._nodeActiveTrace = this._nodeActiveTrace.slice(0, 2)
            }
        }
        get isRootActive() {
            return this.rootNode.active
        }
        setRootActive(t) {
            if (this.rootNode.active = t, k.hasInstance()) {
                const e = `rootNode.active = ${t} - time: ${cc_mtt.vv.DataManager.getNow().toISOString()} - ${k.getTrace(3)}`;
                this._rootNodeActiveTrace.push(e), this._rootNodeActiveTrace = this._rootNodeActiveTrace.slice(0, 2)
            }
        }
        blendColor(t) {
            this.img_num.node.getComponent(A).color = t
        }
        _checkForHoneyPot() {
            const t = P.config;
            t.enabled && t.enableChangeCardColor && P.addColorComponent(this.node, this.img_num.node)
        }
    }).prototype, "tag", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), tt = e(Y.prototype, "rootNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "img_cardFace", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "img_num", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "img_back", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "img_light", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "img_gray", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "img_check", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Y.prototype, "img_eye", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Y.prototype, "img_fen", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(Y.prototype, "eCardNum", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return D.CARD_INVALID
        }
    }), ht = e(Y.prototype, "eCardSuit", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return S.CARD_SPADE
        }
    }), lt = e(Y.prototype, "eCardType", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return O.CARD_FACE_0
        }
    }), pt = e(Y.prototype, "eCardBgType", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return T.CARD_BACK_3
        }
    }), ut = e(Y.prototype, "prefab_anim_crack", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Y.prototype, "anmRabbitHunt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Y.prototype, "anmForceExpose", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = Y)) || q));
    a._RF.pop()
}
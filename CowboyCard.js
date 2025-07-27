import * as d from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./node-extension.js";
import * as C from "./cv.js";

function main() {
    var l, k;
    e._RF.push({}, "d51d1xy5UFGlpvkpLahI4sW", "CowboyCard", void 0);
    const {
        ccclass: u,
        property: b
    } = a;
    t("default", u(((k = class t extends s {
        constructor(...t) {
            super(...t), this.m_eNumber = C.Enum.CardNum.CARD_10, this.m_eSuit = C.Enum.CardSuit.CARD_SPADE, this.m_strCardFacePath = "zh_CN/game/cowboy/card_type_0/", this.m_strCardBackPath = "zh_CN/game/cowboy/card_type_0/", this.m_bIsFace = !0, this.m_bIsGray = !0, this.m_bActionDone = !0, this.m_bIsBonny = !1, this.m_kDealPos = new i(0, 0), this.m_f32DealTime = 0, this.m_DealRotate = 0, this.m_pkRoot = null, this.m_pkCardFace = null, this.m_pkNumber = null, this.m_pkCardBack = null, this.m_pkGray = null
        }
        static create(e, a) {
            let s = new t;
            return s && s.init(e, a) ? s : null
        }
        init(t, e) {
            this.node = new o, C.StringTools.getArrayLength(t) > 0 && (this.m_strCardFacePath = t), C.StringTools.getArrayLength(e) > 0 && (this.m_strCardBackPath = e), this.m_pkRoot = new o, this.node.addChild(this.m_pkRoot), this.m_pkRoot.setSiblingIndex(0), this.m_pkCardFace = new o, this.m_pkRoot.addChild(this.m_pkCardFace), this.m_pkCardFace.setSiblingIndex(0);
            let a = new o;
            return this.m_pkCardFace.addChild(a), a.setSiblingIndex(0), this.m_pkNumber = a.addComponent(n), this.m_pkCardBack = this.createSprite(this.m_pkRoot, 0, this.getCowboyCardBackPath() + "Pb_01"), this.m_pkGray = this.createSprite(this.m_pkRoot, 8, this.getCowboyCardFacePath() + "back_m"), this.UpdateContent(), this.Gray(!1), this.SetFace(!1), p.addOrGetComponent(this.node, h).setAnchorPoint(new r(.5, .5)), p.addOrGetComponent(this.node, h).setContentSize(p.addOrGetComponent(this.m_pkNumber.node, h).contentSize), !0
        }
        ResetFromNode(t) {
            t.active = !1, this.node.parent || t.getParent().addChild(this.node), p.addOrGetComponent(this.node, h).setAnchorPoint(t.getComponent(h).anchorPoint), this.node.setPosition(t.getPosition()), this.node.angle = t.angle, this.node.setScale(t.scale), this.m_pkNumber.trim = !1, this.m_pkCardBack.trim = !1, this.m_pkGray.trim = !1
        }
        SetContent(e, a) {
            e == t.CARD_SPECIAL && (e = C.Enum.CardNum.CARD_2), a == t.CARD_SPECIAL && (a = C.Enum.CardSuit.CARD_DIAMOND), this.m_eNumber == e && this.m_eSuit == a || (this.m_eNumber = e, this.m_eSuit = a, this.UpdateContent())
        }
        GetNumber() {
            return this.m_eNumber
        }
        GetSuit() {
            return this.m_eSuit
        }
        UpdateContent() {
            let t = "";
            switch (this.m_eSuit) {
                case C.Enum.CardSuit.CARD_SPADE:
                    t = "Bhm_";
                    break;
                case C.Enum.CardSuit.CARD_HEART:
                    t = "Rhm_";
                    break;
                case C.Enum.CardSuit.CARD_CLUB:
                    t = "Bcm_";
                    break;
                case C.Enum.CardSuit.CARD_DIAMOND:
                    t = "Rbm_"
            }
            t.length > 0 && C.resMgr.setSpriteFrame(this.m_pkNumber.node, this.getCowboyCardFacePath() + t + C.String(this.m_eNumber + 1))
        }
        getCowboyCardFacePath() {
            return this.m_strCardFacePath
        }
        getCowboyCardBackPath() {
            return this.m_strCardBackPath
        }
        SetFace(t) {
            this.m_bIsFace = t, this.m_pkCardFace.active = t, this.m_pkCardBack.node.active = !t, m.stopAllByTarget(this.m_pkCardFace), m.stopAllByTarget(this.m_pkCardBack.node), this.unscheduleAllCallbacks(), this.m_pkCardBack.node.setScale(1, 1), this.m_pkCardFace.setScale(1, 1), this.m_bActionDone = !0
        }
        Turn(t, e) {
            e = null != e ? e : 0, this.unscheduleAllCallbacks(), this.scheduleOnce((() => {
                this.RealTurn(t)
            }), e)
        }
        RealTurn(t) {
            if (!c(this, !0) || !c(this.m_pkCardFace, !0)) return;
            if (t == this.m_bIsFace) return;
            this.SetFace(!t);
            let e = d().to(.15, {
                    scale: new i(1, 1, 1)
                }),
                a = d().to(.15, {
                    scale: new i(0, 1, 1)
                });
            t ? (this.m_bActionDone = !1, this.m_bIsFace = !1, this.m_pkCardBack.node.active = !0, this.m_pkCardFace.active = !1, this.m_pkCardBack.node.setScale(1, 1), d(this.m_pkCardBack.node).sequence(a, d().call((() => {
                this.m_pkCardBack.node.active = !1, this.m_pkCardBack.node.setScale(1, 1), this.m_pkCardFace.active = !0, this.m_pkCardFace.setScale(0, 1), d(this.m_pkCardFace).sequence(e, d().call((() => {
                    this.m_bActionDone = !0, this.m_bIsFace = !0
                }))).start()
            }))).start()) : (this.m_bActionDone = !1, this.m_bIsFace = !1, this.m_pkCardBack.node.active = !1, this.m_pkCardFace.active = !0, this.m_pkCardFace.setScale(1, 1), d(this.m_pkCardFace).sequence(a, d().call((() => {
                this.m_pkCardFace.active = !1, this.m_pkCardFace.setScale(1, 1), this.m_pkCardBack.node.active = !0, this.m_pkCardBack.node.setScale(0, 1), d(this.m_pkCardBack.node).sequence(e, d().call((() => {
                    this.m_bActionDone = !0, this.m_bIsFace = !0
                }))).start()
            }))).start())
        }
        Gray(t) {
            this.m_bIsGray != t && (this.m_bIsGray = t, this.m_pkGray.node.active = this.m_bIsGray)
        }
        SetDealPos(t) {
            this.m_kDealPos = this.node.getComponent(h).convertToNodeSpaceAR(t)
        }
        ResetPos() {
            this.m_pkRoot.setPosition(0, 0), this.m_pkRoot.angle = 0
        }
        SetDealRotate(t) {
            this.m_DealRotate = t, this.m_bActionDone = !0
        }
        Deal(t) {
            this.node.active = !1, this.scheduleOnce(this.OnDeal, t)
        }
        OnDeal(t) {
            this.m_f32DealTime = 0, this.m_pkRoot.setPosition(this.m_kDealPos), this.m_pkCardBack.node.getComponent(_).opacity = 0, this.m_pkRoot.angle = 0, this.node.active = !0, this.schedule(this.UpdateDeal, 0), C.tools.isSoundEffectOpen() && C.AudioMgr.playEffect("zh_CN/game/cowboy/audio/dealcard")
        }
        UpdateDeal(t) {
            if (this.m_f32DealTime += 4 * t, this.m_f32DealTime >= 1) this.m_f32DealTime = 1, this.unschedule(this.UpdateDeal), this.m_pkRoot.setPosition(0, 0), this.m_bIsBonny ? this.m_pkCardBack.node.getComponent(_).opacity = 100 : this.m_pkCardBack.node.getComponent(_).opacity = 255, this.m_pkRoot.angle = -this.m_DealRotate;
            else {
                let t = Math.pow(Math.min(4 * this.m_f32DealTime, 1), 2);
                this.m_bIsBonny ? this.m_pkCardBack.node.getComponent(_).opacity = 100 * t : this.m_pkCardBack.node.getComponent(_).opacity = 255 * t;
                let e = Math.cos(this.m_f32DealTime * Math.PI * .5);
                this.m_pkRoot.setPosition(this.m_kDealPos.x * e, this.m_kDealPos.y * e), this.m_pkRoot.angle = 360 * e
            }
        }
        IsBonny() {
            return this.m_bIsBonny
        }
        IsFace() {
            return this.m_bIsFace
        }
        updateCardBack(t) {
            C.resMgr.setSpriteFrame(this.m_pkCardBack.node, t)
        }
        getRoot() {
            return this.m_pkRoot
        }
        getCardBack() {
            return this.m_pkCardBack
        }
        createSprite(t, e, a) {
            let s = new o;
            t.addChild(s), s.setSiblingIndex(e);
            let i = s.addComponent(n);
            return C.resMgr.setSpriteFrame(s, a), i
        }
        showCard(t) {
            this.m_pkCardBack.node.active = !t, this.m_pkCardFace.active = t
        }
    }).CARD_SPECIAL = 255, l = k)) || l);
    e._RF.pop()
}
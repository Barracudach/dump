import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Enum.js";
import * as m from "./Enum.js";
import * as C from "./AppConfig.js";
import * as _ from "./PeekCardComp.js";

function main() {
    var l, k, P, g, S;
    a._RF.push({}, "fde4a9LFzBMfrstE2KV6eHo", "PeekCardDisplay", void 0);
    const {
        ccclass: f,
        property: y
    } = s;
    e("PeekCardDisplay", (l = f("PeekCardDisplay"), k = y(_), l((S = t((g = class extends i {
        constructor(...e) {
            super(...e), r(this, "cardPeeker", S, this), this.maxOpenDuration = 4, this._opened = !1, this._cardType = m.CARD_FACE_0, this._cardNum = void 0, this._cardSuit = void 0
        }
        setCardType(e) {
            this._cardType = e
        }
        setOpened(e = !1) {
            e && this.cardPeeker.openImmediately()
        }
        async setCardFace(e, t) {
            this._cardNum = e, this._cardSuit = t;
            const r = await this._generateCard(e, t);
            this.cardPeeker.cardFront.spriteFrame = r
        }
        async updateCardFace() {
            const e = await this._generateCard(this._cardNum, this._cardSuit);
            this.cardPeeker.cardFront.spriteFrame = e
        }
        setCardBack(e) {
            this.cardPeeker.cardBack.spriteFrame = e
        }
        startPeek(e) {
            this.setOpened(!1), this.open(e), this._opened = !1
        }
        open(e) {
            this.cardPeeker.isAnimate || (this.cardPeeker.open(e), this.cardPeeker.speedScale = 1)
        }
        openImmediately() {
            const e = this.cardPeeker.animateProgress,
                t = this.cardPeeker.animateDuration * (1 - e);
            this.cardPeeker.speedScale = Math.max(1, t / .2), this._opened = !0
        }
        setSize(e, t) {
            const r = this.cardPeeker.cardBack.node.getComponent(n),
                a = this.cardPeeker.cardFront.node.getComponent(n);
            this.cardPeeker.cardBack.sizeMode = c.SizeMode.CUSTOM, this.cardPeeker.cardFront.sizeMode = c.SizeMode.CUSTOM, r.setContentSize(new d(e, t)), a.setContentSize(new d(e, t)), this.node.getComponent(n).setContentSize(new d(e, t))
        }
        update(e) {
            const t = this.cardPeeker;
            if (t.isAnimate && !this._opened) {
                const e = t.animateProgress;
                if (1 === e) return;
                const r = 2 / 3;
                if (e >= r) {
                    const e = t.animateDuration;
                    t.speedScale = (1 - r) * e / .2
                }
            }
        }
        async _generateCard(e, t, r = !0) {
            let a = "";
            switch (t) {
                case u.CARD_SPADE:
                    a = "Bhm_";
                    break;
                case u.CARD_HEART:
                    a = "Rhm_";
                    break;
                case u.CARD_CLUB:
                    a = "Bcm_";
                    break;
                case u.CARD_DIAMOND:
                    a = "Rbm_";
                    break;
                default:
                    a = "Bhm_"
            }
            const s = `${this._getCardResPath()}${a}${e+1}/spriteFrame`;
            return await this._getCardItemSpriteFrame(s)
        }
        _getCardResPath() {
            let e = this._cardType;
            const t = C.Instance.getGameConfig().cardFaceList;
            e >= t.length && (e = t.length);
            return `zh_CN/game/dzpoker/card/card_type_${t[e]}/`
        }
        _getCardItemSpriteFrame(e) {
            return new Promise(((t, r) => {
                o.load(e, p, ((e, a) => {
                    e && (h(e), r(e)), t(a)
                }))
            }))
        }
    }).prototype, "cardPeeker", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = g)) || P));
    a._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./Enum.js";
import * as l from "./PeekCardComp.js";
import * as m from "./CrashTracing.js";
import * as _ from "./CrashTracing.js";

function main() {
    var k, w, g, F, b, v, P, f, D;
    n._RF.push({}, "d66f7KjYMxPAKjiOsOlkoJq", "PeekCardPopup", void 0);
    const {
        ccclass: S,
        property: O
    } = s;
    e("PeekCardPopup", (k = S("PeekCardPopup"), w = O(l), g = O(a), F = O(r), k((P = t((v = class extends o {
        constructor(...e) {
            super(...e), i(this, "cardPeeker", P, this), i(this, "lbCountdown", f, this), i(this, "nodeCountdown", D, this), this._onClickOpenCard = void 0, this._onOpenCard = void 0, this._time = void 0, this._state = void 0, this._faceSpriteFrame = void 0, this._noFaceSpriteFrame = void 0, this._tempCountDown = void 0
        }
        init(e, t, i) {
            const n = this.cardPeeker;
            n.reset(), n.setCardBgActive(), n.setManualOpen(!0), n.setOnFinishAnimate(this._onCompletePeek.bind(this)), n.setOnStartAnimate(this._onStartPeek.bind(this)), n.cardBack.node.active = !0, this._time = i - Date.now() / 1e3, this._tempCountDown = this._time, this.lbCountdown.node.parent.active = !0, this._setCountDown(this._time), this.setCard(e, t, !1), this._state = "ready"
        }
        setOnClickOpenCard(e) {
            this._onClickOpenCard = e
        }
        setOnOpenCard(e) {
            this._onOpenCard = e
        }
        async setCard(e, t, i = !0) {
            this.cardNum = e, this.cardSuit = t;
            const n = await this._generateCard(e, t, i),
                a = await this._generateBackCard();
            this._faceSpriteFrame = new c, this._faceSpriteFrame.texture = n.texture, this._faceSpriteFrame.rect = new d(0, 0, n.width, n.height), this._noFaceSpriteFrame = new c, this._noFaceSpriteFrame.texture = n.texture, this._noFaceSpriteFrame.rect = new d(70, 0, n.width - 140, n.height);
            try {
                this.setCardFace(this._noFaceSpriteFrame), this.setCardBack(a)
            } catch (e) {
                var r;
                null == (r = _.getInstance()) || r.traceEvent(m.BreakMsg, "PeekCardComponentLostBinding", {
                    context: this.__classname__,
                    message: e instanceof Error ? e.message : String(e)
                })
            }
        }
        setCardFace(e) {
            this.cardPeeker.cardFront.spriteFrame = e
        }
        setCardBack(e) {
            this.cardPeeker.cardBack.spriteFrame = e
        }
        OnClickOpenCard() {
            var e;
            this.lbCountdown.node.parent.active = !1, null == (e = this._onClickOpenCard) || e.call(this), this._onClickOpenCard = void 0, this.openCard()
        }
        openCard() {
            if ("ready" !== this._state) return;
            this.unscheduleAllCallbacks();
            const e = this.cardPeeker;
            if (this.nodeCountdown.active = !1, e.isClosed) e.open(1, "r");
            else if (e.isPeeking) {
                const t = e.startPos,
                    i = e.getEdge(t);
                e.open(.8, i)
            }
        }
        async _generateCard(e, t, i = !0) {
            let n = "";
            switch (t) {
                case p.CARD_SPADE:
                    n = "Spades_";
                    break;
                case p.CARD_HEART:
                    n = "Hearts_";
                    break;
                case p.CARD_CLUB:
                    n = "Clubs_";
                    break;
                case p.CARD_DIAMOND:
                    n = "Diamonds_";
                    break;
                default:
                    n = "Bhm_"
            }
            const a = `${this._getCardResPath("card_face")}${n}${e}/spriteFrame`;
            return await this._getCardItemSpriteFrame(a)
        }
        async _generateBackCard() {
            let e = "peek_card_back_";
            e += "a";
            return await this._getCardItemSpriteFrame("zh_CN/game/dzpoker/peekcard/peek_card_back_a/spriteFrame")
        }
        async _onCompletePeek() {
            var e;
            this._state = "open", this.unscheduleAllCallbacks(), this.lbCountdown.node.parent.active = !1, null == (e = this._onOpenCard) || e.call(this), this._onOpenCard = void 0, this.setCardFace(this._faceSpriteFrame), this.cardPeeker.cardBack.node.active = !1, h.stopAllByTarget(this.node), u(this.node).delay(2).call((() => {
                this.node.active = !1
            })).start()
        }
        _onStartPeek() {}
        onDestroy() {
            this.unscheduleAllCallbacks(), this._onClickOpenCard = void 0, this._onOpenCard = void 0, h.stopAllByTarget(this.node)
        }
        _setCountDown(e) {
            this.nodeCountdown.active = !0, this._updateCountDownTimer(), this.scheduleOnce(this._onCountDownFinish, e), this.schedule(this._updateCountDownTimer, 1)
        }
        _onCountDownFinish() {
            this.openCard(), this.unschedule(this._onCountDownFinish)
        }
        _updateCountDownTimer() {
            if (this._tempCountDown < 0) return this.unschedule(this._updateCountDownTimer), void(this.nodeCountdown.active = !1);
            this.lbCountdown.string = "(" + Math.trunc(this._tempCountDown) + "s)", this._tempCountDown--
        }
        _getCardResPath(e) {
            return `zh_CN/game/dzpoker/card/${e}/`
        }
        _getCardItemSpriteFrame(e) {
            return new Promise(((t, i) => {
                C.load(e, c, ((e, n) => {
                    e && (cc.log(e), i(e)), t(n)
                }))
            }))
        }
    }).prototype, "cardPeeker", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(v.prototype, "lbCountdown", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), D = t(v.prototype, "nodeCountdown", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), b = v)) || b));
    n._RF.pop()
}
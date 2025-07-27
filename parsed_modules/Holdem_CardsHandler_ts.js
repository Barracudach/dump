import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as a from "./observer.js";
import * as n from "./Holdem_Card_ts.js";
import * as l from "./Holdem_Card_ts.js";
import * as h from "./Holdem_Basic_Item.js";
import * as c from "./Holdem_GameConfig.js";

function main() {
    var _, C, u, m, p, f, g, H, I, A, L, T, v, P, b, R, D, w;
    s._RF.push({}, "23c82NHdZtKHLJ6i5DcQ4DD", "Holdem_CardsHandler_ts", void 0);
    const {
        ccclass: y,
        property: E
    } = d;
    e("Holdem_CardsHandler", (_ = E([i]), C = E([i]), u = E([i]), m = E([i]), p = E([i]), f = E([i]), g = E(o), H = E([n]), y(I = a((L = t((A = class extends h {
        constructor(...e) {
            super(...e), r(this, "hideCardHolders", L, this), r(this, "showCardHolders", T, this), r(this, "popCardHolders", v, this), r(this, "hideCardHoldersPLO", P, this), r(this, "showCardHoldersPLO", b, this), r(this, "popCardHoldersPLO", R, this), r(this, "isPlayer", D, this), r(this, "_cards", w, this), this._tempCardIds = [], this._spawnedCardList = []
        }
        onLoad() {
            for (const e of this.hideCardHolders) e.active = !1;
            for (const e of this.showCardHolders) e.active = !1;
            for (const e of this.popCardHolders) e.active = !1
        }
        clearCardImmediate() {
            this._tempCardIds = [];
            for (const e of this._cards) e.reset()
        }
        clearCardIndexImmediate(e) {
            e < this._cards.length && (this._cards[e].stopSchedulesAndActions(), this._cards[e].setId(0), this._cards[e].sprite.node.active = !1)
        }
        setRoomToChild() {
            for (const e of this._cards) e.setHoldemRoom(this.holdemRoom)
        }
        addCard(e, t = 0, r = 0) {
            var s;
            let i = void 0 !== e ? e : this._cards.length,
                o = this.isPlayer ? this.holdemRoom.holders.newCardToPlayer(this.node) : this.holdemRoom.holders.newCardToPublic(this.node);
            this._spawnedCardList.push(o);
            let d = i - t;
            d < this._cards.length ? (this._cards[d] && (this._cards[d].clearAllActionInterval(), this._cards[d].node && this._cards[d].node.destroy(), this._cards[d].destroy()), this._cards[d] = o, this._tempCardIds[d] = r) : (this._cards.push(o), this._tempCardIds.push(r));
            const a = this.isPlayer && (null == (s = this.holdemRoom) ? void 0 : s.isOmaha),
                n = a && this.hideCardHoldersPLO.length ? this.hideCardHoldersPLO : this.hideCardHolders,
                l = a && this.showCardHoldersPLO.length ? this.showCardHoldersPLO : this.showCardHolders,
                h = a && this.popCardHoldersPLO.length ? this.popCardHoldersPLO : this.popCardHolders;
            return o._hideHolder = n[i], o._showHolder = l[i], o._popHolder = h[i], o._discardHolder = this.holdemRoom.holders.discardArea, o._moveToDiscardTime = c.PLAYER_CARD_DISCARD_TIME, o._moveToPopTime = c.CARD_POP_TIME, this.isPlayer ? (o._moveToHideTime = c.PLAYER_CARD_HIDE_TIME, o._moveToShowTime = c.PLAYER_CARD_SHOW_TIME, o._rotateTime = c.PLAYER_CARD_ROTATE_TIME) : (o._moveToHideTime = c.PUBLIC_CARD_HIDE_TIME, o._moveToShowTime = c.PUBLIC_CARD_SHOW_TIME, o._rotateTime = c.PUBLIC_CARD_ROTATE_TIME), o
        }
        isAllHide() {
            let e = this._tempCardIds.length > 0;
            for (let t = 0; t < this._tempCardIds.length; t++)
                if (0 != this._tempCardIds[t]) {
                    e = !1;
                    break
                } return e
        }
        hasCardButAllHide() {
            return this.cardsLength() > 0 && this.isAllHide()
        }
        hasClearAnimationNotDone() {
            for (let e = 0; e < this._cards.length; e++)
                if (this._cards[e].containsAnimation(l.CLEAR_CARD)) return !0;
            return !1
        }
        hasAnimationNotDone() {
            for (let e = 0; e < this._cards.length; e++)
                if (this._cards[e].hasAnimationNotDone()) return !0;
            return !1
        }
        equals(e) {
            if (!this.equalsLength(e)) return !1;
            if (this._tempCardIds) {
                for (let t = 0; t < e.length; t++)
                    if (e[t] != this._tempCardIds[t]) return !1
            } else
                for (const t of this._cards) {
                    let r = !1;
                    for (const s of e)
                        if (t.equals(s)) {
                            r = !0;
                            break
                        } if (!r) return !1
                }
            return !0
        }
        equalsLength(e) {
            return this._tempCardIds ? this._tempCardIds.length == e.length : this._cards.length == e.length
        }
        equalsUntil(e) {
            if (cc_mtt.vv.ConsoleLog.log("BoardCardsChanged equalsUntil _tempCardIds", this._tempCardIds), cc_mtt.vv.ConsoleLog.log("BoardCardsChanged equalsUntil newCards", e), this._tempCardIds) {
                for (let t = 0; t < e.length; t++)
                    if (cc_mtt.vv.ConsoleLog.log("BoardCardsChanged equalsUntil compare", t, e[t], this._tempCardIds[t]), e[t] != this._tempCardIds[t]) return t - 1;
                return this._tempCardIds.length - 1
            }
            if (this._cards.length > 0 && this._cards.length <= e.length) {
                for (let t = 0; t < this._cards.length; t++)
                    if (!this._cards[t].equals(e[t])) return t - 1;
                return this._cards.length - 1
            }
            return -1
        }
        equalsIndex(e, t) {
            return this._cards.length > e && this._cards[e].equals(t)
        }
        cardsLength() {
            return this._tempCardIds.length
        }
        resetDiscardCards() {
            for (const e of this._cards) e.discarded = !1
        }
        discardCards(e, t, r, s = (() => {})) {
            let i = r > 2,
                o = 0;
            this._cards.forEach(((r, d) => {
                r.moveToDiscard(o, e, t, i, s), o += 1
            }))
        }
        hideCards(e = (() => {})) {
            let t = this._cards.length;
            this._cards.forEach(((r, s) => {
                const i = () => {
                    t--, r.reset(), t <= 0 && e()
                };
                r.discarded ? i() : r.setHideAnimation(i)
            }))
        }
        clearAllActionInterval() {
            for (const e of this._cards) e && e.clearAllActionInterval()
        }
        checkAndRecover(e) {
            let t = 1,
                r = e;
            4 == e && (t = 0, r = e - 1);
            for (let e = t; e <= r; e++) {
                const t = this._cards[e];
                !t || t.isDealing || t.isAnimating || t.discarded || t.recoverCardToOpenState(1)
            }
        }
    }).prototype, "hideCardHolders", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), T = t(A.prototype, "showCardHolders", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = t(A.prototype, "popCardHolders", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = t(A.prototype, "hideCardHoldersPLO", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = t(A.prototype, "showCardHoldersPLO", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), R = t(A.prototype, "popCardHoldersPLO", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = t(A.prototype, "isPlayer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), w = t(A.prototype, "_cards", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), I = A)) || I) || I));
    s._RF.pop()
}
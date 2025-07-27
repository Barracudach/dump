import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Pb.js";
import * as h from "./Holdem_Player_ts.js";
import * as p from "./ResourceManager.js";
import * as y from "./cv.js";

function main() {
    var B, f, g, b, m, v, P, _;
    i._RF.push({}, "37b52/sI+tLlIuKEOz14FE3", "Holdem_Player_Landscape", void 0);
    const {
        ccclass: M,
        property: C
    } = n;
    e("default", (B = C(o), f = C(o), g = C(o), M((v = t((m = class extends h {
        constructor(...e) {
            super(...e), s(this, "flipableContainer", v, this), s(this, "hoverButton", P, this), s(this, "redDotPlayerBalance", _, this), this.m_chipsDropOffset = new a(-29, -47), this.playerBalanceBBKey = "holdem_balance_bb", this.cardFlipGapX = -290
        }
        onLoad() {
            this._playerCardScale = 1, super.onLoad(), this.hoverButton.on(o.EventType.MOUSE_ENTER, this.buttonMouseEnter, this), this.hoverButton.on(o.EventType.MOUSE_LEAVE, this.buttonMouseLeave, this), y.MessageCenter.register(this.playerBalanceBBKey, this.onPlayerBalanceBBChange.bind(this), this.node)
        }
        onDestroy() {
            super.onDestroy(), y.MessageCenter.unregister(this.playerBalanceBBKey, this.node)
        }
        stopTimer() {
            super.stopTimer(), this.headOverlay.node.active = !1
        }
        startTimer(e, t, s = 0, i = !1) {
            super.startTimer(e, t, s, i), this.headOverlay.node.active = !1
        }
        updateWidget() {
            p.updateWidget(this.node, !0, r.AlignMode.ON_WINDOW_RESIZE)
        }
        setSeatIndex(e) {
            super.setSeatIndex(e), this.updateWidget()
        }
        setFlip(e) {
            super.setFlip(e);
            let t = l.localStorage.getItem(this.playerBalanceBBKey);
            this.redDotPlayerBalance.active = (null == t || "" == t || null == t) && this.isSelf()
        }
        setCardsFlip(e) {}
        setBountyBoardFlip(e) {}
        setCardPositionAfterMoveShow(e) {
            e.node.setPosition(new d(e.node.position.x, e.node.position.y - 140))
        }
        setCardPositionAfterMoveHide(e) {
            e.node.setPosition(new d(e.node.position.x, e.node.position.y - 100))
        }
        buttonMouseEnter() {
            const {
                Action: e
            } = u.holdem;
            this.state == e.FOLD && this.store && this.store.userId == this.room.store.playerUserId && this.cardsHandler._cards.forEach((e => {
                e.cardPositionAfterDeal = e.node.getPosition(), e.showAnimation()
            }))
        }
        buttonMouseLeave() {
            const {
                Action: e
            } = u.holdem;
            this.state == e.FOLD && this.store && this.store.userId == this.room.store.playerUserId && (this.setEnableCardPanelMask(!0), this.cardsHandler._cards.forEach(((e, t) => {
                e.hideAnimation(t)
            })))
        }
        setAutoPlayStatus(e, t = !1) {
            var s, i;
            const o = e && (null == (s = this.room) || null == (s = s.store) || null == (s = s.self) ? void 0 : s.userId) !== this.store.userId;
            this.celebrityNode.info.username = this.info.username = t ? y.config.getStringData("Mtt_Disconnect") : this.store.nickName, null == (i = this.timer) || i.setAutoPlayStatus(e, t), this.sittingOutNode && (this.sittingOutNode.active = o), this.celebrityNode.sittingOutNode && (this.celebrityNode.sittingOutNode.active = o)
        }
        setCardPosition() {}
        onClickSwitchCoinMode() {
            super.onClickSwitchCoinMode(), y.MessageCenter.send(this.playerBalanceBBKey)
        }
        setEnableCardPanelMaskTop(e) {
            let t = this.cardsHandler.node.parent.getComponent(c);
            t && (t.enabled = !1)
        }
        onPlayerBalanceBBChange() {
            l.localStorage.setItem(this.playerBalanceBBKey, "1"), this.redDotPlayerBalance.active = !1
        }
    }).prototype, "flipableContainer", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(m.prototype, "hoverButton", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(m.prototype, "redDotPlayerBalance", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = m)) || b));
    i._RF.pop()
}
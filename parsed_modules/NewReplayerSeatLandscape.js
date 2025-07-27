import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./CurrencyValue.js";
import * as b from "./CircleSprite.js";
import * as m from "./Enum.js";
import * as y from "./Tools.js";
import * as g from "./Card.js";
import * as v from "./cv.js";
import * as P from "./HandsRecordsManager.js";

function main() {
    var C, N, S, w, k, T, I, L, z, A, E, M, D, R, x, H, O, V, U, _, W, B, F, G, Z, j, K;
    i._RF.push({}, "eab14nhUbtH1ZI2Oy+3xPKN", "NewReplayerSeatLandscape", void 0);
    const {
        ccclass: X,
        property: q
    } = l;
    e("NewReplayerSeatLandscape", (C = X("NewReplayerSeatLandscape"), N = q(n), S = q(r), w = q(n), k = q(s), T = q(n), I = q(r), L = q(f), z = q(n), A = q(n), E = q(n), M = q(o), D = q(n), C((H = t((x = class extends c {
        constructor(...e) {
            super(...e), a(this, "stakeNode", H, this), a(this, "stakeLabel", O, this), a(this, "winningEffect", V, this), a(this, "avatarSprite", U, this), a(this, "avatarOverGrey", _, this), a(this, "nameLabel", W, this), a(this, "balanceCurrencyValue", B, this), this.coinMode = 0, a(this, "cardPanel", F, this), a(this, "cardPanelPlo", G, this), a(this, "cardPanelPlo5", Z, this), a(this, "cardPrefab", j, this), a(this, "dealerIcon", K, this), this.recordType = void 0, this.avatarUrl = "", this.userName = "", this.hintSeatName = "", this.seatInfo = void 0, this.seatHandsCardType = void 0, this.dataPointInfo = void 0, this.isDealer = void 0
        }
        init(e, t, a, i, n, r) {
            this.recordType = e, this.avatarUrl = t.avatarUrl, this.userName = t.name, this.hintSeatName = t.label, this.seatInfo = t, this.seatHandsCardType = a, this.dataPointInfo = i, this.coinMode = n, this.isDealer = r, this.setName(t.name), this.setAvatar(t.avatarUrl), this.setBalance(t.finalStake, i), this.setCards(a, t.cards), this.setWinningEffect(t.isWinning), this.setWinningStakeText(t.winningPot, i), this.setDealer(r)
        }
        initChipsPosition(e, t) {
            if (this.stakeNode.position = this.stakeNode.parent.getComponent(u).convertToNodeSpaceAR(e), t) {
                var a, i, n, r;
                null == (a = this.stakeNode.getComponent(u)) || a.setAnchorPoint(t), null == (i = this.stakeLabel.node.parent.getComponent(u)) || i.setAnchorPoint(t), null == (n = this.stakeLabel.node.getComponent(u)) || n.setAnchorPoint(t);
                const e = this.stakeNode.active;
                e || (this.stakeNode.active = !0), null == (r = this.stakeNode.getComponent(h)) || r.updateLayout(!0), this.stakeNode.active = e
            }
        }
        initDealerIconPosition(e) {
            this.dealerIcon.position = this.dealerIcon.parent.convertToNodeSpaceAR(e)
        }
        setCoinMode(e) {
            this.coinMode = e, this.seatInfo && this.dataPointInfo && (this.setBalance(this.seatInfo.finalStake, this.dataPointInfo), this.setWinningStakeText(this.seatInfo.winningPot, this.dataPointInfo))
        }
        setName(e) {
            v.StringTools.setShrinkString(this.nameLabel.node, e, !0)
        }
        switchAnonymousMode(e) {
            e ? (this.setAvatar(""), this.setName(this.hintSeatName)) : (this.setAvatar(this.avatarUrl), this.setName(this.userName))
        }
        setAvatar(e) {
            this.avatarOverGrey.active = !1, b.setCircleSprite(this.avatarSprite.node, e ?? "", 1, !1)
        }
        setBalance(e, t) {
            const a = this.coinMode;
            let i = P.getInstance().formatMoneyText(this.recordType, t, a, e);
            this.balanceCurrencyValue.string = i
        }
        setCards(e, t) {
            const a = this.getCardPanelNode(e);
            if (a.children.forEach((e => e.destroyAllChildren())), t && t.length) {
                const e = "card";
                t.some((e => e.number >= 0 && e.suit >= 0)) && t.forEach(((t, i) => {
                    const n = e + (i + 1),
                        r = d(this.cardPrefab).getComponent(g);
                    r.setGameID(v.Enum.GameId.Texas), r.initDefaultValue(), r.node.parent = a.getChildByName(n), r.node.position = new p(p.ZERO), r.node.scale = new p(p.ONE), r.node.parent.active = !0, t.number >= 0 && t.suit >= 0 ? (r.setContent(t.number, t.suit), r.setFace(!0)) : r.setFace(!1)
                }))
            }
        }
        setWinningEffect(e) {
            this.winningEffect.active = e
        }
        setWinningStakeText(e, t) {
            if (this.stakeNode.active = e > 0, !e || e < 0) return;
            const a = this.coinMode;
            let i = P.getInstance().formatMoneyText(this.recordType, t, a, e);
            this.stakeLabel.string = y.convertValueToStandardFormat(i)
        }
        setDealer(e) {
            this.dealerIcon.active = e
        }
        getCardPanelNode(e) {
            let t = this.cardPanel;
            switch (e) {
                case m.SHCT_TEXAS:
                    t = this.cardPanel;
                    break;
                case m.SHCT_PLO:
                    t = this.cardPanelPlo;
                    break;
                case m.SHCT_PLO5:
                    t = this.cardPanelPlo5
            }
            return t
        }
    }).prototype, "stakeNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(x.prototype, "stakeLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(x.prototype, "winningEffect", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(x.prototype, "avatarSprite", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(x.prototype, "avatarOverGrey", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(x.prototype, "nameLabel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(x.prototype, "balanceCurrencyValue", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(x.prototype, "cardPanel", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(x.prototype, "cardPanelPlo", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(x.prototype, "cardPanelPlo5", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(x.prototype, "cardPrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(x.prototype, "dealerIcon", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = x)) || R));
    i._RF.pop()
}
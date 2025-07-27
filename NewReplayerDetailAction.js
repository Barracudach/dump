import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./ColorSystemType.js";
import * as u from "./ColorSystemTypeOther.js";
import * as d from "./ThemeSystem.js";
import * as p from "./CircleSprite.js";
import * as b from "./HandsRecord.js";
import * as f from "./NewReplayerCardHolder.js";
import * as y from "./HandsRecordsManager.js";
import * as N from "./RecordType.js";

function main() {
    var g, C, w, m, v, A, V, P, E, S, D, R, I, T, L, k, B, z, W, H, G, O, j, M, _, x, U, F, J, K, q, Q, X;
    a._RF.push({}, "66190R+LblLLa21fWJ1zfWR", "NewReplayerDetailAction", void 0);
    const {
        ccclass: Y,
        property: Z
    } = r;
    e("NewReplayerDetailAction", (g = Y("NewReplayerDetailAction"), C = Z(n), w = Z(n), m = Z(n), v = Z(n), A = Z(n), V = Z(n), P = Z(n), E = Z(s), S = Z(s), D = Z(s), R = Z(s), I = Z(s), T = Z(s), L = Z(s), k = Z(f), g((W = t((z = class extends o {
        constructor(...e) {
            super(...e), i(this, "playerName", W, this), i(this, "positionAlias", H, this), i(this, "action", G, this), i(this, "betValue", O, this), i(this, "profitLossValue", j, this), i(this, "jackpotValue", M, this), i(this, "winningPercentage", _, this), i(this, "isAllIn", x, this), i(this, "betNode", U, this), i(this, "cardGroupNode", F, this), i(this, "profitNode", J, this), i(this, "percentageNode", K, this), i(this, "avatarNode", q, this), i(this, "showCardNode", Q, this), this.avatarUrl = "", i(this, "cardHolder", X, this), this.gameId = 0, this.isCash = !0, this.actionData = null, this.coinConvertData = null
        }
        setPlayerName(e) {
            this.playerName && (this.playerName.string = e)
        }
        setPositionAlias(e) {
            this.positionAlias && (this.positionAlias.string = e)
        }
        setAction(e) {
            this.action && (this.action.string = e)
        }
        setBetValue(e) {
            if (this.betValue) {
                if (null == e || e < 0) return void(this.betValue.node.active = !1);
                this.betValue.node.active = !0, this.betValue.string = y.getInstance().formatMoneyTextWithData(this.coinConvertData, e), this.betValue.updateRenderData(!0)
            }
        }
        setProfitLossValue(e, t = !0) {
            if (this.profitLossValue) {
                this.profitLossValue.string = e;
                const i = this.profitLossValue.getComponent(d);
                l(i) && i.setColorScheme(c.Other, t ? u.NewReplayerPlayerProfitText : u.NewReplayerPlayerLossText)
            }
        }
        setJackpotValue(e) {
            null == e || e < 0 || this.jackpotValue && (this.jackpotValue.string = "JP:" + y.getInstance().formatMoneyTextWithData(this.coinConvertData, e))
        }
        setWinningPercentage(e) {
            this.winningPercentage && (this.winningPercentage.string = e)
        }
        setIsAllIn(e) {
            this.isAllIn && (this.isAllIn.active = e)
        }
        setBetNodeEnabled(e) {
            this.betNode && (this.betNode.active = e)
        }
        setCardGroupNodeEnabled(e) {
            this.cardGroupNode && (this.cardGroupNode.active = e)
        }
        setProfitNodeEnabled(e) {
            this.profitNode && (this.profitNode.active = e)
        }
        setPercentageNodeEnabled(e) {
            this.percentageNode && (this.percentageNode.active = e)
        }
        setShowCardNodeEnabled(e) {
            this.showCardNode && (this.showCardNode.active = e)
        }
        init(e, t, i) {
            var a;
            null != e && null != e && null != e.player && null != e.player ? (this.avatarUrl = e.player.avatarUrl, this.coinConvertData = i, this.actionData = e, this.getComponent(h).opacity = 0, this.gameId = t, this.isCash = i.recordType === N.Cash, null == (a = this.cardHolder) || a.init(), this.setPlayerName(e.player.name), this.setPositionAlias(e.player.label), this.setAvatar(e.player.avatarUrl), this.setShowCardNodeEnabled(!1), this.setCardGroupNodeEnabled(!1), this.setProfitNodeEnabled(!1), this.setPercentageNodeEnabled(!1), this.setIsAllIn(!1), this.setBetNodeEnabled(!1), this.setJackpotValue(0), this.setBetValue(null), this.setAction(""), this.setProfitLossValue(""), this.setWinningPercentage(""), this.handleAction(e), this.getComponent(h).opacity = 255) : console.warn("NewReplayerDetailAction init actionData or player is null or undefined")
        }
        switchAnonymousMode(e) {
            e ? (this.setAvatar(""), this.playerName && (this.playerName.node.active = !1)) : (this.setAvatar(this.avatarUrl), this.playerName && (this.playerName.node.active = !0))
        }
        setCoinMode(e) {
            this.coinConvertData.coinMode = e, this.handleAction(this.actionData)
        }
        onShownCardsRevealHand() {
            this.showPrivateCards(this.actionData)
        }
        setAvatar(e) {
            p.setCircleSprite(this.avatarNode, e, 0, !0)
        }
        handleAction(e) {
            switch (e.actionTitle) {
                case b.FOLD:
                case b.CHECK:
                    this.handleCheckOrFold(e);
                    break;
                case b.SB:
                case b.BB:
                case b.STRADDLE:
                case b.BTB:
                case b.RAISE:
                case b.CALL:
                case b.BET:
                    this.handleBetActions(e);
                    break;
                case b.ALL_IN_PERCENTAGE:
                    this.handleAllInPercentage(e);
                    break;
                case b.SHOW_CARDS:
                    this.handleShowCards(e);
                    break;
                case b.SHOWDOWN:
                    this.handleShowdown(e);
                    break;
                case b.SHOW_WINNER:
                    this.handleShowWinner(e);
                    break;
                default:
                    this.node.active = !1
            }
        }
        handleCheckOrFold(e) {
            this.setAction(e.actionTitle), this.setBetValue(null), this.setBetNodeEnabled(!0)
        }
        handleBetActions(e) {
            this.setAction(e.actionTitle), this.setBetValue(e.actionValue);
            const t = [b.CALL, b.RAISE, b.BET],
                i = e.isAllIn && t.includes(e.actionTitle);
            this.setIsAllIn(i), this.setBetNodeEnabled(!0)
        }
        handleAllInPercentage(e) {
            this.setCardGroupNodeEnabled(!0), this.setPercentageNodeEnabled(!0), this.setWinningPercentage(e.actionValue ? e.actionValue.toString() + "%" : ""), this.showPrivateCards(e)
        }
        handleShowCards(e) {
            this.setCardGroupNodeEnabled(!0), this.setShowCardNodeEnabled(!0), this.showPrivateCards(e)
        }
        handleShowdown(e) {
            this.setCardGroupNodeEnabled(!0), this.showPrivateCards(e)
        }
        handleShowWinner(e) {
            this.setCardGroupNodeEnabled(!0), this.setProfitNodeEnabled(!0);
            let t = "",
                i = !0;
            e.actionValue && (e.actionValue > 0 ? t = "+" : (t = "-", i = !1));
            let a = e.actionValue ? Math.abs(e.actionValue) : 0,
                n = y.getInstance().formatMoneyTextWithData(this.coinConvertData, a);
            this.setProfitLossValue(t + n, i), e.player.jackpot ? (this.jackpotValue.node.active = !0, this.setJackpotValue(e.player.jackpot)) : this.jackpotValue.node.active = !1, this.showPrivateCards(e)
        }
        showPrivateCards(e) {
            var t;
            null == (t = this.cardHolder) || t.setCards(this.gameId, this.isCash, e.player.cards)
        }
    }).prototype, "playerName", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(z.prototype, "positionAlias", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(z.prototype, "action", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(z.prototype, "betValue", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(z.prototype, "profitLossValue", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(z.prototype, "jackpotValue", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(z.prototype, "winningPercentage", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(z.prototype, "isAllIn", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(z.prototype, "betNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(z.prototype, "cardGroupNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(z.prototype, "profitNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(z.prototype, "percentageNode", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(z.prototype, "avatarNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(z.prototype, "showCardNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(z.prototype, "cardHolder", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = z)) || B));
    a._RF.pop()
}
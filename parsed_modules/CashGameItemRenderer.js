import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cv.js";
import * as m from "./CircleSprite.js";
import * as f from "./ResourceManager.js";
import * as g from "./CurrencyValue.js";
import * as S from "./LobbyTypes.js";
import * as C from "./LobbyTools.js";
import * as I from "./ColorsystemLobbyV2.js";
import * as d from "./ColorSystemType.js";
import * as v from "./ThemeSystem.js";
import * as T from "./GameTypeIcon.js";
import * as P from "./GameTypeIcon.js";
import * as k from "./i18nText.js";
import * as w from "./RuleDiscription.js";
import * as L from "./Enum.js";

function main() {
    var _, V, F, z, D, N, E, B, H, x, R, A, U, G, O, M, Y, K, j, Q, $, q, J, W, X, Z, ee, te, ne, re, ae, ie, se, le, oe, ue, ce, he, pe, ye, be, me, fe, ge, Se, Ce, Ie, de;
    r._RF.push({}, "46284PQF1xG5Yye2YuvF9//", "CashGameItemRenderer", void 0);
    const {
        ccclass: ve,
        property: Pe
    } = c, Te = new Map([
        [w.NLHE, I.Btn_Play_Now_NLHE],
        [w.PACE, I.Btn_Play_Now_NLHE],
        [w.SHORT_DECK, I.Btn_Play_Now_Short_Deck],
        [w.PLO, I.Btn_Play_Now_PLO4],
        [w.PLO5, I.Btn_Play_Now_PLO5]
    ]);
    e("default", (_ = Pe(a), V = Pe(i), F = Pe(i), z = Pe(g), D = Pe(g), N = Pe(s), E = Pe(g), B = Pe(l), H = Pe(l), x = Pe(s), R = Pe(o), A = Pe(u), U = Pe(u), G = Pe(u), O = Pe(g), M = Pe(s), Y = Pe(v), K = Pe(s), j = Pe(s), Q = Pe(i), $ = Pe(i), q = Pe(s), J = Pe(k), ve((Z = t((X = class extends h {
        constructor(...e) {
            super(...e), n(this, "playerCountProgressBar", Z, this), n(this, "playerCountLabel", ee, this), n(this, "roomNameLabel", te, this), n(this, "stakeCurrencyValues", ne, this), n(this, "anteCurrencyValue", re, this), n(this, "slashes", ae, this), n(this, "buyInCurrencyValue", ie, this), n(this, "cashStackIcon", se, this), n(this, "currencyIcon", le, this), n(this, "paceIcon", oe, this), n(this, "gameTypeIconPrefab", ue, this), n(this, "currencySpriteFrames", ce, this), n(this, "cashStackSpriteFrames", he, this), n(this, "redEnvelopeSpriteFrame", pe, this), n(this, "avgPotCurrencyValue", ye, this), n(this, "vipIconDefault", be, this), n(this, "barTheme", me, this), n(this, "playerStatsPanel", fe, this), n(this, "potStatsPanel", ge, this), n(this, "totalPlayerLabel", Se, this), n(this, "tableCountLabel", Ce, this), n(this, "stakeCNFlag", Ie, this), n(this, "buyIn18Text", de, this), this._gameTypeIcons = [], this._onClickHandler = void 0
        }
        onEnable() {
            this.avgPotCurrencyValue.node.parent.active = C.showAvgPot
        }
        registerHandlers(e) {
            this._onClickHandler = e
        }
        render(e) {
            const t = e.formatedCurrencyData,
                n = t.currency;
            this.setPlayerCount(e.playerCount, e.playerCountMax, e.tableCount, e.gameType);
            const r = Te.get(e.gameType) ?? Te.get(w.NLHE);
            this.barTheme.setColorScheme(d.LobbyV2, r), this.roomNameLabel.string = e.roomName, this.buyInCurrencyValue.updateVal(t.buyInStr, n, t.displayInUSD), this.setCurrencyIcon(n), this.setGameTypeIcons(e.hasBombPot, e.hasBigAnte, e.hasSquid), this.setCashStackIcon(e.buyInLevel, e.hasRedEnvelope), this.setStakeString(t.stakeData, n, t.displayInUSD), e.gameType == w.PACE ? (this.paceIcon.active = !0, this.playerStatsPanel.active = !0, this.potStatsPanel.active = !1, this.totalPlayerLabel.string = e.playerCount.toString(), this.tableCountLabel.string = e.tableCount.toString()) : (this.paceIcon.active = !1, this.playerStatsPanel.active = !1, this.potStatsPanel.active = !0, this.setAvatar(e.vipAvatarPath, e.vipPlatform), this.avgPotCurrencyValue.updateVal(t.avgPotStr, n, t.displayInUSD))
        }
        setGameTypeIcons(e, t, n) {
            const r = [];
            e && r.push(P.BOMB_POT), t && r.push(P.BIG_ANTE), n && r.push(P.SQUID);
            for (let e = 0; e < r.length; e++) {
                if (e >= this._gameTypeIcons.length) {
                    const e = p(this.gameTypeIconPrefab);
                    e.parent = this.currencyIcon.node.parent, this._gameTypeIcons.push(e.getComponent(T))
                }
                this._gameTypeIcons[e].setIcon(r[e], this.currencyIcon.node.getSiblingIndex() + e + 100)
            }
            for (let e = r.length; e < this._gameTypeIcons.length; e++) this._gameTypeIcons[e].hide()
        }
        setCurrencyIcon(e) {
            switch (e) {
                case L.USD:
                    this.currencyIcon.node.active = !0, this.currencyIcon.spriteFrame = this.currencySpriteFrames[0];
                    break;
                case L.CNY:
                    this.currencyIcon.node.active = !0, this.currencyIcon.spriteFrame = this.currencySpriteFrames[1];
                    break;
                default:
                    this.currencyIcon.node.active = !1
            }
        }
        setCashStackIcon(e, t = !1) {
            if (t) this.cashStackIcon.spriteFrame = this.redEnvelopeSpriteFrame;
            else switch (e) {
                case S.small:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[0];
                    break;
                case S.medium:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[1];
                    break;
                default:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[2]
            }
        }
        setStakeString(e, t, n) {
            const r = e.stakes.length;
            for (let a = 0; a < this.stakeCurrencyValues.length; a++) {
                const i = this.stakeCurrencyValues[a];
                a < r ? (i.node.active = !0, i.updateVal(e.stakes[a].toString(), t, n), a > 0 && (this.slashes[a - 1].active = !0)) : (i.node.active = !1, a > 0 && (this.slashes[a - 1].active = !1))
            }
            e.ante && e.ante > 0 ? (this.anteCurrencyValue.node.parent.active = !0, this.anteCurrencyValue.updateVal(C.numberToString(e.ante), t, n)) : this.anteCurrencyValue.node.parent.active = !1;
            const a = t == L.CNY && !n;
            this.stakeCNFlag.active = a, this.buyIn18Text.concat = a ? [{
                glue: " [CN]",
                textKey: ""
            }] : [], this.buyIn18Text.setKey(this.buyIn18Text.textKey, !0)
        }
        setRoomName(e) {
            this.roomNameLabel.string = e
        }
        setPlayerCount(e, t, n, r) {
            if (r == w.PACE) this.playerCountLabel.string = e.toString(), this.playerCountProgressBar.progress = 0;
            else {
                const r = n > 0 ? n : 1;
                this.playerCountLabel.string = 0 === t ? "" : `${e}/${r*t}`, this.playerCountProgressBar.progress = 0 === t ? 0 : e / t
            }
        }
        setPosition(e) {
            this.node.position = e
        }
        setCurrencyValues(e) {
            this.setStakeString(e.stakeData, e.currency, e.displayInUSD), this.buyInCurrencyValue.updateVal(e.buyInStr, e.currency, e.displayInUSD), this.avgPotCurrencyValue.updateVal(e.avgPotStr, e.currency, e.displayInUSD)
        }
        onClicked() {
            var e;
            C.playSoundClick(), b.dataHandler.getUserData().showTouristLimited() || null == (e = this._onClickHandler) || e.call(this)
        }
        isValidObject() {
            return y(this.node, !0)
        }
        setAvatar(e, t) {
            e ? (this.vipIconDefault.active = !1, m.cleanHeadNode(this.vipIconDefault), this.signHeadInfo(e, t), m.setCircleSprite(this.vipIconDefault, e, t, !1)) : this.vipIconDefault.active = !0
        }
        signHeadInfo(e, t) {
            let n = new f;
            n.url = e, n.plat = t, b.resMgr.addRemoteHeadInfo(n, !1)
        }
    }).prototype, "playerCountProgressBar", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(X.prototype, "playerCountLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(X.prototype, "roomNameLabel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(X.prototype, "stakeCurrencyValues", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), re = t(X.prototype, "anteCurrencyValue", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(X.prototype, "slashes", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), ie = t(X.prototype, "buyInCurrencyValue", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(X.prototype, "cashStackIcon", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(X.prototype, "currencyIcon", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(X.prototype, "paceIcon", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(X.prototype, "gameTypeIconPrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(X.prototype, "currencySpriteFrames", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), he = t(X.prototype, "cashStackSpriteFrames", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), pe = t(X.prototype, "redEnvelopeSpriteFrame", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(X.prototype, "avgPotCurrencyValue", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(X.prototype, "vipIconDefault", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(X.prototype, "barTheme", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(X.prototype, "playerStatsPanel", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(X.prototype, "potStatsPanel", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(X.prototype, "totalPlayerLabel", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(X.prototype, "tableCountLabel", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(X.prototype, "stakeCNFlag", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(X.prototype, "buyIn18Text", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = X)) || W));
    r._RF.pop()
}
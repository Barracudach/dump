import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
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
import * as y from "./cv.js";
import * as m from "./ResourceManager.js";
import * as g from "./CurrencyValue.js";
import * as d from "./LobbyTypes.js";
import * as b from "./LobbyTools.js";
import * as C from "./ColorSystemType.js";
import * as f from "./ThemeSystem.js";
import * as I from "./GameTypeIcon.js";
import * as T from "./GameTypeIcon.js";
import * as S from "./i18nText.js";
import * as k from "./CashGroupItemRenderer.js";
import * as x from "./PlayerCount.js";
import * as M from "./AutoFitRemainSpaceInLayout.js";
import * as v from "./RuleDiscription.js";
import * as L from "./Enum.js";

function main() {
    var _, P, V, E, G, F, w, z, A, D, H, R, N, B, U, K, O, Y, j, q, $, Q, Z, J, W, X, ee, te, ae, ne, ie, re;
    n._RF.push({}, "ff9f1tqcSpBG6dK7+o3g8mK", "CashGameNonGroupItemRenderer", void 0);
    const {
        ccclass: se,
        property: oe
    } = u;
    e("default", (_ = oe(i), P = oe(S), V = oe(f), E = oe(f), G = oe(g), F = oe(g), w = oe(r), z = oe(g), A = oe(s), D = oe(o), H = oe(l), R = oe(l), N = oe(x), B = oe(M), U = oe(r), se((Y = t((O = class extends c {
        constructor(...e) {
            super(...e), a(this, "playerCountLabel", Y, this), a(this, "gameTypeI18nText", j, this), a(this, "gameTypeTheme", q, this), a(this, "gameTypeBgTheme", $, this), a(this, "stakeCurrencyValues", Q, this), a(this, "anteCurrencyValue", Z, this), a(this, "slashes", J, this), a(this, "buyInCurrencyValue", W, this), a(this, "cashStackIcon", X, this), a(this, "gameTypeIconPrefab", ee, this), a(this, "cashStackSpriteFrames", te, this), a(this, "redEnvelopeSpriteFrame", ae, this), a(this, "playerCountMaxs", ne, this), a(this, "gameTypeIconLayout", ie, this), a(this, "stakeCNFlag", re, this), this._data = void 0, this._gameTypeIcons = [], this._onClickHandler = void 0
        }
        registerHandlers(e) {
            this._onClickHandler = e
        }
        render(e) {
            this._data = e;
            const t = e.formatedCurrencyData,
                a = t.currency;
            this.setPlayerCount(e.playerCount, e.playerCountMax, e.gameType), this.buyInCurrencyValue.updateVal(t.buyInStr, a, t.displayInUSD), this.setGameTypeIcons(e.hasBombPot, e.hasBigAnte, e.hasSquid), this.setCashStackIcon(e.buyInLevel, e.hasRedEnvelope), this.setStakeString(t.stakeData, a, t.displayInUSD);
            let n = v.PACE;
            e.gameMode == y.Enum.CreateGameMode.CreateGame_Mode_Short ? n = v.SHORT_DECK : y.roomManager.checkGameIsZoom(e.gameId) ? n = v.PACE : e.gameId == y.Enum.GameId.Plo ? n = v.PLO : e.gameId == y.Enum.GameId.Plo5 && (n = v.PLO5);
            const i = k.get(n) ?? k.get(v.NLHE);
            this.setGameTypeTheme(i), this.setPlayerCountMax([e.playerCountMax]), e.gameType != v.PACE && this.setAvatar(e.vipAvatarPath, e.vipPlatform), this.gameTypeIconLayout.resizeChildren()
        }
        setPlayerCount(e, t, a) {
            a == v.PACE ? this.playerCountLabel.string = e.toString() : this.playerCountLabel.string = 0 === t ? "" : `${e}/${t}`
        }
        setPosition(e) {
            this.node.position = e
        }
        setCurrencyValues(e) {
            this.setStakeString(e.stakeData, e.currency, e.displayInUSD), this.buyInCurrencyValue.updateVal(e.buyInStr, e.currency, e.displayInUSD)
        }
        onClicked() {
            var e;
            b.playSoundClick(), y.dataHandler.getUserData().showTouristLimited() || null == (e = this._onClickHandler) || e.call(this)
        }
        isValidObject() {
            return h(this.node, !0)
        }
        signHeadInfo(e, t) {
            let a = new m;
            a.url = e, a.plat = t, y.resMgr.addRemoteHeadInfo(a, !1)
        }
        onLoad() {
            b.registerMessage(y.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onLanguageChange() {
            h(this._data) && this.setCurrencyValues(this._data.formatedCurrencyData)
        }
        setGameTypeTheme(e) {
            e.i18nKey ? this.gameTypeI18nText.setKey(e.i18nKey) : this.gameTypeI18nText.setText(e.displayName), this.gameTypeTheme.setColorScheme(C.LobbyV2, e.textColor), this.gameTypeBgTheme.setColorScheme(C.LobbyV2, e.bgColor)
        }
        setGameTypeIcons(e, t, a) {
            const n = [];
            e && n.push(I.BOMB_POT), t && n.push(I.BIG_ANTE), a && n.push(I.SQUID);
            for (let e = 0; e < n.length; e++) {
                if (e >= this._gameTypeIcons.length) {
                    const e = p(this.gameTypeIconPrefab);
                    e.parent = this.playerCountMaxs[0].node.parent, this._gameTypeIcons.push(e.getComponent(T))
                }
                this._gameTypeIcons[e].setIcon(n[e], this.playerCountMaxs[0].node.getSiblingIndex() + e + 100)
            }
            for (let e = n.length; e < this._gameTypeIcons.length; e++) this._gameTypeIcons[e].hide()
        }
        setPlayerCountMax(e) {
            if (this.playerCountMaxs.length > 0) {
                for (; e.length > this.playerCountMaxs.length;) {
                    const e = p(this.playerCountMaxs[0].node);
                    e.parent = this.playerCountMaxs[0].node.parent, this.playerCountMaxs.push(e.getComponent(x))
                }
                for (let t = 0; t < this.playerCountMaxs.length; t++) t < e.length ? (this.playerCountMaxs[t].node.active = !0, this.playerCountMaxs[t].setData(e[t]), this.playerCountMaxs[t].node.setSiblingIndex(this.playerCountMaxs[0].node.getSiblingIndex() + t)) : this.playerCountMaxs[t].node.active = !1
            }
        }
        setCashStackIcon(e, t = !1) {
            if (t) this.cashStackIcon.spriteFrame = this.redEnvelopeSpriteFrame;
            else switch (e) {
                case d.small:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[0];
                    break;
                case d.medium:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[1];
                    break;
                default:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[2]
            }
        }
        setStakeString(e, t, a) {
            const n = e.stakes.length;
            for (let i = 0; i < this.stakeCurrencyValues.length; i++) {
                const r = this.stakeCurrencyValues[i];
                i < n ? (r.node.active = !0, r.updateVal(e.stakes[i].toString(), t, a), i > 0 && (this.slashes[i - 1].active = !0)) : (r.node.active = !1, i > 0 && (this.slashes[i - 1].active = !1))
            }
            e.ante && e.ante > 0 ? (this.anteCurrencyValue.node.parent.active = !0, this.anteCurrencyValue.updateVal(b.numberToString(e.ante), t, a)) : this.anteCurrencyValue.node.parent.active = !1;
            const i = t == L.CNY && !a;
            this.stakeCNFlag.active = i
        }
        setAvatar(e, t) {
            e && this.signHeadInfo(e, t)
        }
    }).prototype, "playerCountLabel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(O.prototype, "gameTypeI18nText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(O.prototype, "gameTypeTheme", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(O.prototype, "gameTypeBgTheme", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(O.prototype, "stakeCurrencyValues", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), Z = t(O.prototype, "anteCurrencyValue", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(O.prototype, "slashes", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), W = t(O.prototype, "buyInCurrencyValue", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(O.prototype, "cashStackIcon", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(O.prototype, "gameTypeIconPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(O.prototype, "cashStackSpriteFrames", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), ae = t(O.prototype, "redEnvelopeSpriteFrame", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(O.prototype, "playerCountMaxs", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), ie = t(O.prototype, "gameTypeIconLayout", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(O.prototype, "stakeCNFlag", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = O)) || K));
    n._RF.pop()
}
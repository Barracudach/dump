import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ThemeSystem.js";
import * as y from "./ColorSystemType.js";
import * as m from "./ColorsystemLobbyV2.js";
import * as g from "./CurrencyValue.js";
import * as b from "./LobbyHelper.js";
import * as T from "./LobbyTools.js";
import * as C from "./LobbyTypes.js";
import * as d from "./PlayerCount.js";
import * as f from "./AutoFitRemainSpaceInLayout.js";
import * as S from "./GameTypeIcon.js";
import * as _ from "./GameTypeIcon.js";
import * as L from "./i18nText.js";
import * as I from "./cv.js";
import * as x from "./RuleDiscription.js";

function main() {
    var k, P, E, M, G, N, F, H, v, B, w, z, V, D, A, O, R, K, Q, U, j, Y, q, J, W, X;
    n._RF.push({}, "7a339LfPzVIQJQTms33dbj9", "CashGroupItemRenderer", void 0);
    const {
        ccclass: Z,
        property: $
    } = l, ee = e("GAME_TYPE_THEME", new Map([
        [x.NLHE, {
            displayName: "NLHE",
            i18nKey: null,
            textColor: m.GameType_Text_NLHE,
            bgColor: m.GameType_Background_NLHE
        }],
        [x.PACE, {
            displayName: "NLHE",
            i18nKey: null,
            textColor: m.GameType_Text_NLHE,
            bgColor: m.GameType_Background_NLHE
        }],
        [x.SHORT_DECK, {
            displayName: "Short Deck",
            i18nKey: "Short_Deck_text_Title",
            textColor: m.GameType_Text_ShortDeck,
            bgColor: m.GameType_Background_ShortDeck
        }],
        [x.PLO, {
            displayName: "PLO4",
            i18nKey: null,
            textColor: m.Btn_Play_Now_PLO4,
            bgColor: m.GameType_Background_PLO4
        }],
        [x.PLO5, {
            displayName: "PLO5",
            i18nKey: null,
            textColor: m.GameType_Text_PLO5,
            bgColor: m.GameType_Background_PLO5
        }]
    ]));
    e("default", (k = $(i), P = $(L), E = $(i), M = $(g), G = $(r), N = $(o), F = $(o), H = $(h), v = $(h), B = $(d), w = $(f), z = $(s), Z((A = t((D = class extends u {
        constructor(...e) {
            super(...e), a(this, "playerCountLabel", A, this), a(this, "gameTypeI18nText", O, this), a(this, "stakeLabel", R, this), a(this, "buyInCurrencyValue", K, this), a(this, "cashStackIcon", Q, this), a(this, "cashStackSpriteFrames", U, this), a(this, "redEnvelopeSpriteFrame", j, this), a(this, "gameTypeTheme", Y, this), a(this, "gameTypeBgTheme", q, this), a(this, "playerCountMaxs", J, this), a(this, "gameTypeIconLayout", W, this), a(this, "gameTypeIconPrefab", X, this), this._data = void 0, this._gameTypeIcons = [], this._clickHandler = []
        }
        onLoad() {
            T.registerMessage(I.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onLanguageChange() {
            c(this._data) && this.setCurrencyValues(this._data, this._data.currency)
        }
        registerHandlers(e) {
            this._clickHandler.push(e)
        }
        setData(e) {
            this._data = e, this.playerCountLabel.string = T.ThousandPointFormat(e.playerCount), this.setCurrencyValues(e, e.currency), this.buyInCurrencyValue.updateVal(e.buyIn.toString(), e.currency, !0);
            const t = ee.get(e.gameType) ?? ee.get(x.NLHE);
            this.setCashStackIcon(e.buyInLevel, e.hasRedEnvelope), this.setGameTypeTheme(t), this.setPlayerCountMax(e.playerCountMax), this.setGameTypeIcons(e.hasBombPot, e.hasBigAnte, e.hasSquid, e.hasPace), this.gameTypeIconLayout.resizeChildren()
        }
        setGameTypeIcons(e, t, a, n) {
            const i = [];
            e && i.push(_.BOMB_POT), t && i.push(_.BIG_ANTE), a && i.push(_.SQUID), n && i.push(_.PACE);
            for (let e = 0; e < i.length; e++) {
                if (e >= this._gameTypeIcons.length) {
                    const e = p(this.gameTypeIconPrefab);
                    e.parent = this.playerCountMaxs[0].node.parent, this._gameTypeIcons.push(e.getComponent(S))
                }
                this._gameTypeIcons[e].setIcon(i[e], this.playerCountMaxs[0].node.getSiblingIndex() + e + 100)
            }
            for (let e = i.length; e < this._gameTypeIcons.length; e++) this._gameTypeIcons[e].hide()
        }
        setGameTypeTheme(e) {
            e.i18nKey ? this.gameTypeI18nText.setKey(e.i18nKey) : this.gameTypeI18nText.setText(e.displayName), this.gameTypeTheme.setColorScheme(y.LobbyV2, e.textColor), this.gameTypeBgTheme.setColorScheme(y.LobbyV2, e.bgColor)
        }
        setCurrencyValues(e, t) {
            this.stakeLabel.string = b.getCashGroupName(e.usdStake, t, e.cnyStake)
        }
        setPlayerCountMax(e) {
            if (this.playerCountMaxs.length > 0) {
                for (; e.length > this.playerCountMaxs.length;) {
                    const e = p(this.playerCountMaxs[0].node);
                    e.parent = this.playerCountMaxs[0].node.parent, this.playerCountMaxs.push(e.getComponent(d))
                }
                for (let t = 0; t < this.playerCountMaxs.length; t++) t < e.length ? (this.playerCountMaxs[t].node.active = !0, this.playerCountMaxs[t].setData(e[t]), this.playerCountMaxs[t].node.setSiblingIndex(this.playerCountMaxs[0].node.getSiblingIndex() + t)) : this.playerCountMaxs[t].node.active = !1
            }
        }
        setCashStackIcon(e, t) {
            if (t) this.cashStackIcon.spriteFrame = this.redEnvelopeSpriteFrame;
            else switch (e) {
                case C.small:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[0];
                    break;
                case C.medium:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[1];
                    break;
                default:
                    this.cashStackIcon.spriteFrame = this.cashStackSpriteFrames[2]
            }
        }
        onClicked() {
            var e;
            T.playSoundClick(), null == (e = this._clickHandler) || e.forEach((e => null == e ? void 0 : e()))
        }
    }).prototype, "playerCountLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(D.prototype, "gameTypeI18nText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(D.prototype, "stakeLabel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(D.prototype, "buyInCurrencyValue", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(D.prototype, "cashStackIcon", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(D.prototype, "cashStackSpriteFrames", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), j = t(D.prototype, "redEnvelopeSpriteFrame", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(D.prototype, "gameTypeTheme", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(D.prototype, "gameTypeBgTheme", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(D.prototype, "playerCountMaxs", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), W = t(D.prototype, "gameTypeIconLayout", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(D.prototype, "gameTypeIconPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = D)) || V));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./NodePage.js";
import * as d from "./ThemeSystem.js";
import * as b from "./ColorSystemType.js";
import * as g from "./ColorsystemLobbyV2.js";
import * as m from "./CurrencyValue.js";
import * as f from "./StringTools.js";
import * as S from "./cv.js";
import * as v from "./CommonTools.js";
import * as T from "./Translator.js";
import * as _ from "./FormatParser.js";
import * as L from "./LobbyTools.js";
import * as C from "./MttItemHelper.js";
import * as P from "./MttHallDetailExpandTab.js";
import * as I from "./MttHallDetailTablePlayerComp.js";
import * as B from "./Pb.js";
import * as M from "./MttItemRenderHelper.js";
import * as w from "./Enum.js";

function main() {
    var F, N, z, A, D, k, H, V, E, U, x, j, O, R, W, G, K, $, q, J, Q, X, Y, Z, tt, et, it, at, nt, rt;
    a._RF.push({}, "2758fhFFLNOKbUhgtv492+U", "MttDetailStatsPlayerItem", void 0);
    const {
        ccclass: lt,
        property: ot
    } = c;
    t("default", (F = ot(n), N = ot(r), z = ot(l), A = ot(o), D = ot(n), k = ot(m), H = ot(Boolean), V = ot(n), E = ot(r), U = ot(s), x = ot(u), j = ot(u), O = ot(d), R = ot(I), lt((K = e((G = class extends P {
        constructor(...t) {
            super(...t), i(this, "rankLabel", K, this), i(this, "nationFlagSprite", $, this), i(this, "nationFlagSpriteAtlas", q, this), i(this, "playerNameLimit", J, this), i(this, "playerNameLabel", Q, this), i(this, "currencyBounty", X, this), i(this, "useAbbreviationBountyAmount", Y, this), i(this, "chipLabel", Z, this), i(this, "playerIcon", tt, this), i(this, "defaultAvatar", et, this), i(this, "rightArrow", it, this), i(this, "line", at, this), i(this, "bg", nt, this), i(this, "tablePlayerComp", rt, this), this._data = null, this._bigBlind = 0, this._onTouchCallback = null
        }
        get playerId() {
            var t;
            return (null == (t = this._data) ? void 0 : t.playerId) || 0
        }
        get joinStatus() {
            var t;
            return (null == (t = this._data) ? void 0 : t.joinStatus) || 0
        }
        get gameStatus() {
            var t;
            return (null == (t = this._data) ? void 0 : t.gameStatus) || 0
        }
        get isSelected() {
            var t;
            return !(null == (t = this._data) || !t.isSelected)
        }
        onHide() {
            super.onHide(), this.setSelected(!1)
        }
        start() {
            this.node.on(u.EventType.TOUCH_END, this.onTouch, this)
        }
        registerOnTouchCallback(t) {
            this._onTouchCallback = t
        }
        onTouch() {
            var t;
            (L.playSoundClick(), this.gameStatus != B.commonProto.MTT_GAME_STATUS.NOT_STARTED) && (this.joinStatus > 0 && (this.setSelected(!this.isSelected), null == (t = this._onTouchCallback) || t.call(this, this)))
        }
        render(t, e, i) {
            this._bigBlind = i, this.updateItem(t), this.showSeparateLine(e > 0)
        }
        updateItem(t) {
            this._data = t, this.showBg(), this.showPlacing(t.gameStatus > 0, t.joinStatus < 0 ? t.rank : t.index), C.getIsBounty(t.tournamentMode) ? (this.currencyBounty.node.active = !0, this.setBounty(t)) : this.currencyBounty.node.active = !1, this.setNationFlag(t.areaCode, t.area), this.setPlayerName(t.playerName);
            const e = this.chipLabel.getComponent(m);
            if (e.enabled = !1, t.joinStatus < 0)
                if (t.prize > 0) {
                    e.enabled = !0;
                    const i = _.ThousandPointFormat(_.DisplayGold(t.prize));
                    e.updateVal(i, t.currency, !1)
                } else this.chipLabel.string = this.getEliminatedString();
            else this.chipLabel.string = _.ThousandPointFormat(t.coins, 0), this._bigBlind && (this.chipLabel.string += ` (${_.ThousandPointFormat(t.coins/this._bigBlind,1)} BB)`);
            this.isShowing() && (t.isSelected && t.tablePlayerList ? this.renderTablePlayer() : this.hideImmediately())
        }
        setBounty(t) {
            const e = t.bounty,
                i = t.currency,
                a = t.convertCurrency,
                n = t.displayCurrency,
                r = t.currencyRate,
                l = i ? S.appConfig.getWalletConfig().convertStringToCurrencyType(i) : w.None,
                o = n ? S.appConfig.getWalletConfig().convertStringToCurrencyType(n.toString()) : w.None,
                s = this.currencyBounty.getCurrencyShown(a, l, o);
            if (S.currencyManager.convert(l, o, e, r) <= 0) this.currencyBounty.string = "-";
            else if (!this.useAbbreviationBountyAmount || f.prizePoolThreshold.has(s) && e < f.prizePoolThreshold.get(s)) this.currencyBounty.updateVal(_.ThousandPointFormat(e), i, a, n, r);
            else {
                const t = f.ScientificNotationWithFormat(y.roundValue(e));
                this.currencyBounty.updateVal(t, i, a, n, r)
            }
        }
        setPlayerName(t) {
            const e = this.playerNameLimit.getComponent(h);
            var i;
            p(e) && (S.appConfig.isLandscapeLayout && (e.right = null != (i = this.currencyBounty) && null != (i = i.node) && i.active ? .53 : .4, v.instance.updateAlignment(e, !1)));
            v.instance.updateLayouts(this.playerNameLimit.node, !1, !0);
            let a = this.playerNameLimit.width - this.playerNameLabel.node.position.x;
            v.instance.ellipseText(this.playerNameLabel, t, a)
        }
        showPlacing(t, e) {
            this.rankLabel.string = "-", t && this.setPlace(e)
        }
        setPlace(t) {
            this.rankLabel.string = t + ""
        }
        getEliminatedString() {
            return T("MTT_SIGN_UP.OUT")
        }
        showBg() {
            var t, e;
            S.appConfig.isLandscapeLayout ? null == (t = this.bg) || t.setColorScheme(b.LobbyV2, this.isSelected ? g.MttDetailLandscape_surface_tertiary : this._data.playerId == cc_mtt.vv.DataManager.userId ? g.MttDetail_Item_Bg3 : g.MttDetailLandscape_surface_secondary) : null == (e = this.bg) || e.setColorScheme(b.LobbyV2, this.isSelected ? g.MttDetail_Item_Bg : this._data.playerId == cc_mtt.vv.DataManager.userId ? g.MttDetail_Item_Bg3 : g.MttDetail_Item_Bg2)
        }
        showPlayerIcon(t, e) {
            const i = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(e, t), {
                isThumbnails: !0,
                timestamp: t === cc_mtt.vv.DataManager.userId ? Date.now() : null
            });
            let a = this.playerIcon.node.getContentSize();
            this.playerIcon.sizeMode = r.SizeMode.CUSTOM;
            this.playerIcon.spriteFrame = this.defaultAvatar, cc_mtt.vv.AssetsManager.loadWebImage(this.playerIcon, i, this.defaultAvatar, (t => {
                let e = new s;
                e.texture = t, this.playerIcon.spriteFrame = e, this.playerIcon.node.getComponent(o).setContentSize(a)
            }), null, 0)
        }
        setSelected(t) {
            this._data.isSelected = t, this.showBg()
        }
        updateTablePlayer(t) {
            this._data.tablePlayerList = t, this.renderTablePlayer()
        }
        renderTablePlayer() {
            this.tablePlayerComp && this.tablePlayerComp.render(this._data.tablePlayerList)
        }
        setNationFlag(t, e = "") {
            S.appConfig.isLandscapeLayout || (this.nationFlagSprite.node.active = !1), M.getNationFlag(t, e).then((t => {
                this.nationFlagSprite.spriteFrame = t, this.nationFlagSprite.node.active = !0
            })).catch((() => {
                this.nationFlagSprite.node.active = !1
            }))
        }
        showSeparateLine(t) {
            this.line && (this.line.active = t)
        }
        onLanguageChange() {
            var t, e;
            (null == (t = this._data) ? void 0 : t.joinStatus) < 0 && (null == (e = this._data) ? void 0 : e.prize) <= 0 && (this.chipLabel.string = this.getEliminatedString())
        }
    }).prototype, "rankLabel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(G.prototype, "nationFlagSprite", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(G.prototype, "nationFlagSpriteAtlas", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(G.prototype, "playerNameLimit", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(G.prototype, "playerNameLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(G.prototype, "currencyBounty", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(G.prototype, "useAbbreviationBountyAmount", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), Z = e(G.prototype, "chipLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(G.prototype, "playerIcon", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(G.prototype, "defaultAvatar", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(G.prototype, "rightArrow", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(G.prototype, "line", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(G.prototype, "bg", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(G.prototype, "tablePlayerComp", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = G)) || W));
    a._RF.pop()
}
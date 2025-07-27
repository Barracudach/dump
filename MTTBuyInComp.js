import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./AutoWrapAndLimitLengthLabel.js";
import * as d from "./ColorsystemLobbyV2.js";
import * as g from "./ThemeSystem.js";
import * as f from "./Translator.js";
import * as T from "./SlideView.js";
import * as B from "./CurrencyValue.js";
import * as L from "./Enum.js";
import * as S from "./Enum.js";
import * as k from "./borderGraphic.js";
import * as C from "./cv.js";
import * as _ from "./LobbyTools.js";
import * as I from "./MttItemHelper.js";
import * as v from "./MttItemRenderHelper.js";
import * as w from "./FormatParser.js";
import * as N from "./AutoResizeLabel.js";

function main() {
    var M, R, V, z, D, P, A, G, F, O, E, H, x, U, W, Y, $, j, K, Z, q, J, Q, X, ee, te, ie, ne, oe, re, ae, le, ue, se, ce, he, be, me, pe, ye, de, ge, fe, Te, Be, Le, Se, ke, Ce, _e, Ie, ve, we, Ne, Me, Re, Ve, ze, De, Pe, Ae, Ge, Fe, Oe, Ee, He;
    n._RF.push({}, "7e0c1dmd5ZALZ9h3uesf8eA", "MTTBuyInComp", void 0);
    const {
        ccclass: xe,
        property: Ue
    } = c;
    e("default", (M = Ue(T), R = Ue(y), V = Ue(o), z = Ue(o), D = Ue(o), P = Ue(r), A = Ue(B), G = Ue(B), F = Ue(B), O = Ue(o), E = Ue(a), H = Ue(l), x = Ue(r), U = Ue(r), W = Ue(r), Y = Ue(g), $ = Ue(g), j = Ue(r), K = Ue(r), Z = Ue(B), q = Ue(B), J = Ue(o), Q = Ue(w), X = Ue(u), ee = Ue(l), te = Ue(a), ie = Ue(o), ne = Ue(u), oe = Ue(o), re = Ue(o), ae = Ue(r), le = Ue(s), xe((ce = t((se = class extends h {
        constructor(...e) {
            super(...e), this.mvcView = null, this.model = null, i(this, "slideView", ce, this), i(this, "TournamentNameLabel", he, this), this._TournamentName = void 0, i(this, "GameModeLabel", be, this), this._gameMode = void 0, this.isPaused = !1, this._isLate = void 0, i(this, "RegStatusLabel", me, this), i(this, "StatusTimeLabel", pe, this), i(this, "CountryCurency", ye, this), this._timeLeftSec = 0, i(this, "buyInAmount", de, this), i(this, "buyInAmountUSD", ge, this), i(this, "prizePoolAmount", fe, this), i(this, "startingChips", Te, this), i(this, "currencySpriteFrames", Be, this), i(this, "CurrencyIcon", Le, this), this._currencyType = void 0, i(this, "TicketButtonNode", Se, this), i(this, "CashButtonNode", ke, this), i(this, "noTicketNode", Ce, this), i(this, "cashButtonBg", _e, this), i(this, "ticketButtonBg", Ie, this), i(this, "ticketButtonToggleNode", ve, this), i(this, "cashButtonToggleNode", we, this), i(this, "buyInOptionAmount", Ne, this), i(this, "buyInOptionAmountUSD", Me, this), i(this, "TicketNumLabel", Re, this), i(this, "ticketLabel", Ve, this), i(this, "changeTicketButton", ze, this), i(this, "StatusIcon", De, this), i(this, "StatusSpriteFrames", Pe, this), this._paymentType = L.Cash, i(this, "paymentLabel", Ae, this), i(this, "registerButton", Ge, this), i(this, "registerLabel", Fe, this), i(this, "balance", Oe, this), i(this, "insufficientBalanceNode", Ee, this), i(this, "checkTicketPrefab", He, this), this.checkTicketGroupNode = null, this.roomId = void 0, this.gameId = void 0, this.clubId = void 0, this.buyIn = 0, this.buyInDefaultCurrency = 0
        }
        get TournamentName() {
            return this._TournamentName
        }
        set TournamentName(e) {
            var t;
            this._TournamentName = e, null == (t = this.TournamentNameLabel) || t.setString(e)
        }
        get gameMode() {
            return this._gameMode
        }
        set gameMode(e) {
            this._gameMode = e, this.GameModeLabel.string = I.getGameMode(this._gameMode);
            let t = this.GameModeLabel.node.getComponent(g),
                i = this.GameModeLabel.node.parent.getComponent(k);
            switch (this.GameModeLabel.string) {
                case f("MTT_GAME_MODE.SHORT_DECK"):
                    t.colorSchemeLobbyV2 = d.GameType_Text_ShortDeck, i.fillColor.colorSchemeLobbyV2 = d.GameType_Background_ShortDeck;
                    break;
                case f("MTT_GAME_MODE.OMAHA"):
                    t.colorSchemeLobbyV2 = d.GameType_Text_PLO4, i.fillColor.colorSchemeLobbyV2 = d.GameType_Background_PLO4;
                    break;
                case f("MTT_GAME_MODE.NLH"):
                    t.colorSchemeLobbyV2 = d.GameType_Text_NLHE, i.fillColor.colorSchemeLobbyV2 = d.GameType_Background_NLHE
            }
            t.applyTheme(), i.onThemeChanged()
        }
        get isLate() {
            return this._isLate
        }
        set isLate(e) {
            this._isLate = e;
            const t = this.RegStatusLabel.node.getComponent(g),
                i = this.RegStatusLabel.node.parent.getComponent(k),
                n = this.StatusTimeLabel.node.getComponent(g);
            let o = 0;
            this.isPaused ? (t.colorSchemeLobbyV2 = d.HallMttDetail_Text_StateRoom_Running, n.colorSchemeLobbyV2 = d.HallMttDetail_Text_StateRoom_Running, i.fillColor.colorSchemeLobbyV2 = d.ListItem_Mtt_Background_Running, o = 2) : e ? (t.colorSchemeLobbyV2 = d.BuyIn_LateRegText2, n.colorSchemeLobbyV2 = d.BuyIn_LateRegText, i.fillColor.colorSchemeLobbyV2 = d.BuyIn_LateRegBox, o = 1) : (t.colorSchemeLobbyV2 = d.BuyIn_RegisterText2, n.colorSchemeLobbyV2 = d.BuyIn_RegisterText, i.fillColor.colorSchemeLobbyV2 = d.BuyIn_RegisterBox), t.applyTheme(), n.applyTheme(), i.onThemeChanged(), o < this.StatusSpriteFrames.length && (this.StatusIcon.spriteFrame = this.StatusSpriteFrames[o]);
            const r = this.StatusIcon.getComponent(g);
            r && (this.isPaused ? r.colorSchemeLobbyV2 = d.HallMttDetail_Icon_Running : r.colorSchemeLobbyV2 = e ? d.HallMttDetail_Icon_LateReg : d.HallMttDetail_Icon_Register, r.applyTheme())
        }
        get timeLeftSec() {
            return this._timeLeftSec
        }
        set timeLeftSec(e) {
            this._timeLeftSec = e, this.isLate && this.StatusTimeLabel && this.schedule(this.updateLateReg, 1, b.REPEAT_FOREVER)
        }
        updateLateReg() {
            if (this.timeLeftSec -= 1, this.timeLeftSec >= 0) {
                const e = _.getRemainTimeString(this.timeLeftSec, "PKWMTT.GAMELIST.LATE_REG", !0, !1);
                this.StatusTimeLabel.string = e
            } else this.timeLeftSec <= -10 && this.unschedule(this.updateLateReg)
        }
        get currencyType() {
            return this._currencyType
        }
        set currencyType(e) {
            switch (this._currencyType = e, this.buyInAmountUSD.node.parent.active = e !== S.USD && this.buyIn > 0, this.buyInOptionAmountUSD.node.parent.active = e !== S.USD && this.buyIn > 0, e) {
                case S.USD:
                    this.CurrencyIcon.spriteFrame = this.currencySpriteFrames[0];
                    break;
                case S.CNY:
                    this.CurrencyIcon.spriteFrame = this.currencySpriteFrames[1];
                    break;
                default:
                    this.CurrencyIcon.spriteFrame = this.currencySpriteFrames[0]
            }
        }
        get paymentType() {
            return this._paymentType
        }
        set paymentType(e) {
            this._paymentType = e;
            const t = e == L.Cash,
                i = e == L.Ticket;
            this.updateBuyInButtons(), this.cashButtonToggleNode && this.ticketButtonToggleNode && (this.cashButtonToggleNode.active = t, this.ticketButtonToggleNode.active = i), this.checkInsufficientBalance()
        }
        get userBalance() {
            var e;
            return C.StringTools.clientGoldByServer((null == (e = C.dataHandler) || null == (e = e.getUserData()) ? void 0 : e.total_amount) || 0)
        }
        updateInfo(e) {
            let t = !1;
            m(this.model) && m(e) && this.model === e && (t = !0), this.model = e, this.TournamentName = e.data.tournamentName;
            let {
                buyIn: i,
                regFee: n,
                srvFee: o,
                currency: r,
                convertCurrency: a,
                displayCurrency: l,
                currencyRate: u,
                rebuyParam: s,
                prizePool: c,
                currentLevel: h,
                blindConfig: b
            } = this.model.data.hallMttDetailData;
            this.model.data.isRevive && null != s && s.defineParam && (n = s.regFee, o = s.srvFee, i = n + o), this.buyIn = i, I.setBuyIn(this.buyInAmount, i, !1, r, l, a, u), I.setBuyIn(this.buyInAmountUSD, i, !1, r, l, !0, u), this.prizePoolAmount.updateVal(c.toString(), r, a, l, u), I.setBuyIn(this.buyInOptionAmount, i, !1, r, l, a, u), I.setBuyIn(this.buyInOptionAmountUSD, i, !1, r, l, !0, u), this.startingChips.string = v.ThousandPointFormat(this.model.data.startingCoin, 0);
            const p = b[h - 1];
            if (p) {
                let e = p.BigBlind;
                this.startingChips.string += ` (${v.ThousandPointFormat(this.model.data.startingCoin/e)}BB)`
            }
            this.currencyType = r, this.buyInDefaultCurrency = C.currencyManager.convert(this.currencyType, C.appConfig.getWalletConfig().defaultCurrency.type, this.buyIn, u);
            let y = e.data.signUpBoxProperty.tools,
                d = y[0],
                g = e.data.signUpBoxProperty.goldOption,
                f = e.data.signUpBoxProperty.toolOption;
            this.TicketButtonNode.active = y.length > 0 && f, this.noTicketNode.active = 0 == y.length && f, this.changeTicketButton.node.active = y.length > 1 && f, this.CashButtonNode.active = !(!g && f), t || (this.cashButtonToggleNode.active = g, this.paymentType = f && d ? L.Ticket : L.Cash), this.setBalance(this.userBalance)
        }
        setTicketLabel(e) {
            this.ticketLabel && m(e) && this.ticketLabel.setString(e)
        }
        setBalance(e) {
            this.balance && (this.balance.string = `$${v.ThousandPointFormat(e)}`)
        }
        updateBuyInButtons() {
            if (this.cashButtonBg && this.ticketButtonBg) {
                const e = this._paymentType == L.Cash,
                    t = this._paymentType == L.Ticket;
                this.cashButtonBg.setColorScheme(N.LobbyV2, e ? d.BuyIn_OptionBorder_Selected : d.BuyIn_OptionBorder), this.ticketButtonBg.setColorScheme(N.LobbyV2, t ? d.BuyIn_OptionBorder_Selected : d.BuyIn_OptionBorder)
            }
        }
        enableRegisterButton(e) {
            this.registerButton && (this.registerButton.interactable = e)
        }
        checkInsufficientBalance() {
            switch (this.paymentType) {
                case L.Cash:
                    let e = this.userBalance >= this.buyInDefaultCurrency;
                    m(this.insufficientBalanceNode) && (this.insufficientBalanceNode.active = !e), this.enableRegisterButton(e);
                    break;
                case L.Ticket:
                    m(this.insufficientBalanceNode) && (this.insufficientBalanceNode.active = !1), this.enableRegisterButton(!0)
            }
        }
        updateBalance() {
            this.setBalance(this.userBalance), this.checkInsufficientBalance()
        }
        show() {
            this.node.active = !0;
            this.slideView.show(!1, (() => {
                this.onHideCallBack(), this.node.active = !1
            }))
        }
        hide() {
            this.slideView.hide()
        }
        hideImmediate() {
            this.onHideCallBack(), this.node.active = !1
        }
        onRegisterClicked() {
            var e;
            null == (e = this.mvcView) || e.onClickedRegisterBtn(this.node)
        }
        onTicketPaymentClicked() {
            var e;
            this.paymentType = null == (e = this.mvcView) ? void 0 : e.onTicketPaymentClicked()
        }
        onCashPaymentClicked() {
            var e;
            this.paymentType = null == (e = this.mvcView) ? void 0 : e.onCashPaymentClicked()
        }
        onChangeTicketClicked() {
            var e;
            null == (e = this.mvcView) || null == e.onChangeTicketClicked || e.onChangeTicketClicked()
        }
        onDepositClicked() {
            var e, t;
            null == (e = (t = this.mvcView).onDepositClicked) || e.call(t)
        }
        isValidObject() {
            return m(this.node, !0)
        }
        onHideCallBack() {
            var e;
            null == (e = this.mvcView) || e.onHideCallBack()
        }
        getCheckTicketGroup() {
            return m(this.checkTicketGroupNode) || (this.checkTicketGroupNode = p(this.checkTicketPrefab), this.checkTicketGroupNode.parent = this.node.parent, this.checkTicketGroupNode.active = !1), this.checkTicketGroupNode
        }
    }).prototype, "slideView", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(se.prototype, "TournamentNameLabel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(se.prototype, "GameModeLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(se.prototype, "RegStatusLabel", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(se.prototype, "StatusTimeLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(se.prototype, "CountryCurency", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(se.prototype, "buyInAmount", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(se.prototype, "buyInAmountUSD", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(se.prototype, "prizePoolAmount", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(se.prototype, "startingChips", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = t(se.prototype, "currencySpriteFrames", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Le = t(se.prototype, "CurrencyIcon", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(se.prototype, "TicketButtonNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(se.prototype, "CashButtonNode", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(se.prototype, "noTicketNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = t(se.prototype, "cashButtonBg", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(se.prototype, "ticketButtonBg", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(se.prototype, "ticketButtonToggleNode", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t(se.prototype, "cashButtonToggleNode", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(se.prototype, "buyInOptionAmount", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = t(se.prototype, "buyInOptionAmountUSD", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(se.prototype, "TicketNumLabel", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = t(se.prototype, "ticketLabel", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(se.prototype, "changeTicketButton", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(se.prototype, "StatusIcon", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(se.prototype, "StatusSpriteFrames", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), Ae = t(se.prototype, "paymentLabel", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(se.prototype, "registerButton", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(se.prototype, "registerLabel", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = t(se.prototype, "balance", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = t(se.prototype, "insufficientBalanceNode", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = t(se.prototype, "checkTicketPrefab", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = se)) || ue));
    n._RF.pop()
}
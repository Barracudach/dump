import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./SignUpWithToolPopUp.js";
import * as g from "./Translator.js";
import * as p from "./NodePage.js";
import * as b from "./FormatParser.js";
import * as y from "./CurrencyValue.js";
import * as d from "./cv.js";
import * as f from "./SlideView.js";
import * as x from "./mttController.js";
import * as T from "./commonProto.mjs_cjs=&original=.js";

function main() {
    var m, w, B, S, L, P, C, v, U, D, E, I, N, R, M, z, k, _, O, V, F, G, W, A, H, j, Y, J, K, $, q, Q, X, Z, tt, et, it, nt, rt, ot, st, lt, at, ut, ht, ct, gt, pt, bt, yt, dt, ft, xt, Tt, mt, wt, Bt, St;
    n._RF.push({}, "3d961666c5MgI85iNHaEkgS", "MttSignUpBoxPkw", void 0);
    const {
        ccclass: Lt,
        property: Pt
    } = a;
    let Ct = t("MttSignUpBuyInOption", function(t) {
        return t[t.tool = 0] = "tool", t[t.gold = 1] = "gold", t[t.none = 2] = "none", t
    }({}));
    t("MttSignUpBoxPkw", (m = Pt(r), w = Pt(r), B = Pt(y), S = Pt(r), L = Pt(r), P = Pt(r), C = Pt(r), v = Pt(r), U = Pt(r), D = Pt(o), E = Pt(y), I = Pt(r), N = Pt(y), R = Pt(o), M = Pt(o), z = Pt(s), k = Pt(r), _ = Pt(r), O = Pt(o), V = Pt(y), F = Pt(r), G = Pt(y), W = Pt(o), A = Pt(o), H = Pt(o), j = Pt([l]), Y = Pt([l]), J = Pt(f), Lt((q = e(($ = class extends c {
        constructor(...t) {
            super(...t), i(this, "buyInLbl", q, this), i(this, "toolNumLbl", Q, this), i(this, "goldLblCurrency", X, this), i(this, "startDateLbl", Z, this), i(this, "dateLbl", tt, this), i(this, "timeLbl", et, this), i(this, "fullSeatLbl", it, this), i(this, "warningLbl", nt, this), i(this, "reenterHintLbl", rt, this), i(this, "reenterPaymentText", ot, this), i(this, "reenterExchangeSourceCurrency", st, this), i(this, "reenterExchangeSourceLbl", lt, this), i(this, "reenterExchangeCurrency", at, this), i(this, "reenterWarningNode", ut, this), i(this, "startDateNode", ht, this), i(this, "leaveBtn", ct, this), i(this, "buyInTxt", gt, this), i(this, "reBuyInTxt", pt, this), i(this, "paymentText", bt, this), i(this, "exchangeSourceCurrency", yt, this), i(this, "exchangeSourceLbl", dt, this), i(this, "exchangeCurrency", ft, this), i(this, "buyInWarningNode", xt, this), i(this, "registerNode", Tt, this), i(this, "reEnterNode", mt, this), i(this, "toolToggles", wt, this), i(this, "goldToggles", Bt, this), this.shouldConvertCurrency = !0, this.oneTool = null, i(this, "registerSlideView", St, this), this.isRegistration = !1
        }
        onLoad() {
            this.registerSlideView = this.getComponent(f)
        }
        start() {}
        update(t) {}
        createTickets() {
            this.shouldConvertCurrency = d.appConfig.getWalletConfig().shouldConvertCurrencyType(this.signUpBoxProperty.currency, this.signUpBoxProperty.displayCurrency), 1001 == this.signUpBoxProperty.joinStatus ? this.showCustom() : this.signUpBoxProperty.joinStatus < 0 ? this.showReenter() : this.showRegistration()
        }
        showRegistrationNode(t) {
            this.isRegistration = t, t && this.registerSlideView ? (this.reEnterNode.active = !1, this.registerSlideView.show(!1, (() => {
                this.node.destroy()
            }))) : (this.registerNode.active = t, this.reEnterNode.active = !t, this.warningLbl.node.active = t), this.showDate(t)
        }
        showRegistrationExtra() {
            this.showBuyIn(g("GAME_LIST.BUY_IN_FEE") + ": "), this.showBottomBtns(!0), this.buyInTxt.node.active = !0, this.reBuyInTxt.node.active = !1, this.shouldConvertCurrency ? (this.paymentText.active = !1, this.exchangeSourceCurrency.updateVal(b.DisplayGold(this.signUpBoxProperty.regFee).toString(), this.signUpBoxProperty.currency, !1, this.signUpBoxProperty.displayCurrency, this.signUpBoxProperty.exchangeRate), this.exchangeSourceLbl.string += " = ", this.exchangeCurrency.updateVal(b.DisplayGold(this.signUpBoxProperty.regFee).toString(), this.signUpBoxProperty.currency, !0, null, this.signUpBoxProperty.exchangeRate)) : this.paymentText.active = !0, this.checkMaxRegisteredTournament(this.buyInWarningNode)
        }
        showRegistration() {
            this.showRegistrationNode(!0), this.warningLbl.string = this.signUpBoxProperty.eventName, this.showRegistrationExtra()
        }
        showReenterExtra() {
            this.showBuyIn(g("GAME_LIST.COST_FEE") + ": "), this.showBottomBtns(!0), this.buyInTxt.node.active = !1, this.reBuyInTxt.node.active = !0, this.shouldConvertCurrency ? (this.reenterPaymentText.active = !1, this.reenterExchangeSourceCurrency.updateVal(b.DisplayGold(this.signUpBoxProperty.regFee).toString(), this.signUpBoxProperty.currency, !1, this.signUpBoxProperty.displayCurrency, this.signUpBoxProperty.exchangeRate), this.reenterExchangeSourceLbl.string += " = ", this.reenterExchangeCurrency.updateVal(b.DisplayGold(this.signUpBoxProperty.regFee).toString(), this.signUpBoxProperty.currency, !0, null, this.signUpBoxProperty.exchangeRate)) : this.reenterPaymentText.active = !0, this.checkMaxRegisteredTournament(this.reenterWarningNode)
        }
        showReenter() {
            this.showRegistrationNode(!1), this.reenterHintLbl.string = g("HOLDEM.REVIVE_TOURNAMENT"), this.showReenterExtra()
        }
        showCustom() {
            this.showRegistrationNode(!1), this.reenterHintLbl.string = this.signUpBoxProperty.popUpName, this.showReenterExtra()
        }
        activeOptions() {}
        checkGoldBuyIn() {
            this.setToolTogglesInteractable(!1), this.oneTool = null, this.toolNumLbl.forEach((t => t.string = "0")), this.okButton.interactable = this.signUpBoxProperty.goldOption, this.onSelectBuyInOption(Ct.gold)
        }
        setBuyInTexts(t) {
            this.buyInLbl.string = t, this.reBuyInTxt.string = t
        }
        showBuyIn(t) {
            if (this.activeOptions(), this.signUpBoxProperty.toolOption) {
                if (this.tools = this.signUpBoxProperty.tools, this.tools.length > 0) {
                    this.oneTool = this.tools[0], this.toolNumLbl.forEach((t => t.string = "1")), this.okButton.interactable = !0;
                    const t = 0 != this.signUpBoxProperty.regFee || !this.signUpBoxProperty.goldOption;
                    this.onToolToggleSelected(t), this.onSelectBuyInOption(t ? Ct.tool : Ct.gold)
                } else this.checkGoldBuyIn();
                cc_mtt.vv.ConsoleLog.log("createTickets", this.tools.length, this.tools)
            } else this.checkGoldBuyIn();
            this.goldLblCurrency.forEach((t => t.updateVal(b.DisplayGold(this.signUpBoxProperty.regFee).toString(), this.signUpBoxProperty.currency, !1, this.signUpBoxProperty.displayCurrency, this.signUpBoxProperty.exchangeRate))), this.setBuyInTexts(t)
        }
        getEventDateString() {
            let [t, e, i] = p.handleDateLabel(this.signUpBoxProperty.startDate), [n, r, o] = p.handleDateLabel(new Date);
            const s = cc_mtt.vv.DataManager.getNow(),
                l = new Date(this.signUpBoxProperty.startDate),
                a = s.getFullYear() === l.getFullYear() && s.getMonth() === l.getMonth() && s.getDate() === l.getDate(),
                u = s.getFullYear() === l.getFullYear() && s.getMonth() === l.getMonth() && s.getDate() + 1 === l.getDate();
            return a ? d.config.getStringData("Mtt_Join_Event_Today") : u ? g("PKWMTT.GAMELIST.DATE.TOMORROW").toUpperCase() : i + " " + d.config.getStringData("MonthAbbrev" + parseInt(e))
        }
        activeStartDateText(t) {
            this.startDateNode.active = t
        }
        showDate(t) {
            if (this.activeStartDateText(t), t)
                if (this.signUpBoxProperty.startDate && this.signUpBoxProperty.startDate.getTime() > new Date(2e3, 2).getTime()) {
                    let [t, e] = p.handleTimeLabel(this.signUpBoxProperty.startDate);
                    this.dateLbl.string = this.getEventDateString(), this.timeLbl.string = `${t}:${e}`, this.fullSeatLbl.string = "", this.timeLbl.node.parent.active = !0, this.dateLbl.node.active = !0, this.fullSeatLbl.node.active = !1
                } else this.dateLbl.string = "", this.timeLbl.string = "", this.fullSeatLbl.string = this.signUpBoxProperty.playOnJoint > 0 ? g("MTT_HALL.FULL_TO_PLAY_PKW") : "", this.timeLbl.node.parent.active = !1, this.dateLbl.node.active = !1, this.fullSeatLbl.node.active = !0
        }
        showBottomBtns(t) {
            this.leaveBtn.node.active = t, this.okButton.node.getComponent(u).width = t ? 346 : 414
        }
        lightUpOptionTool(t) {}
        checkMaxRegisteredTournament(t) {
            if (!h(t, !0)) return;
            const e = this.signUpBoxProperty.startDate;
            if (!e) return void(t.active = !1);
            const i = x.selfTours.getNotStaredTournaments(),
                n = cc_mtt.vv.DataManager.GAME_LEVEL_LIST,
                r = n && n.MttTournaments && n.MttTournaments.length > 0 ? n.MttTournaments.filter((t => i.some((e => e.TournamentId == t.Detail.Id)))) : [],
                o = x.selfTours.getPlayingTournaments().length;
            let s = 0,
                l = 0;
            const a = new Date(e).getTime(),
                u = a + 72e5;
            r.length && r.forEach(((t, e) => {
                const i = t.Detail.StartingTime;
                if (i)
                    if (i instanceof Date) {
                        let t = i.getTime();
                        t <= a ? s++ : t <= u && l++
                    } else if (i instanceof T.google.protobuf.Timestamp) {
                    if (i.seconds <= a / 1e3) return void s++;
                    if (i.seconds <= u / 1e3) return void l++
                }
            }));
            const c = o + s + l;
            d.StringTools.setLabelString(t, "text_warning", "Warning_Maximum_Register"), t.active = c >= d.appConfig.getGameConfig().gameTablesConcurrent.mtt
        }
        onSelectOption(t) {
            t === Ct.tool && this.oneTool ? (this.lightUpOptionTool(!0), this.toolSelected = this.oneTool, this.onToolToggleSelected(!0)) : (this.lightUpOptionTool(!1), this.toolSelected = null, this.onGoldToggleSelected(!0))
        }
        clickOptionTool() {
            this.onSelectOption(Ct.tool)
        }
        clickOptionGold() {
            this.onSelectOption(Ct.gold)
        }
        setToolTogglesInteractable(t) {
            this.toolToggles.forEach((e => e.interactable = t))
        }
        onToolToggleSelected(t) {
            this.toolToggles.forEach((e => e.isChecked = t))
        }
        onGoldToggleSelected(t) {
            this.goldToggles.forEach((e => e.isChecked = t))
        }
        onSelectBuyInOption(t) {}
        onCancelClicked() {
            this.isRegistration && this.registerSlideView ? (this.registerSlideView.hide(), this.cancelCallback instanceof Function && this.cancelCallback()) : super.onCancelClicked(), d.authenticator.showDelayedPromo()
        }
        onBackgroundClick() {
            this.isRegistration && this.onCancelClicked()
        }
    }).prototype, "buyInLbl", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e($.prototype, "toolNumLbl", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), X = e($.prototype, "goldLblCurrency", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = e($.prototype, "startDateLbl", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e($.prototype, "dateLbl", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e($.prototype, "timeLbl", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e($.prototype, "fullSeatLbl", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e($.prototype, "warningLbl", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e($.prototype, "reenterHintLbl", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e($.prototype, "reenterPaymentText", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e($.prototype, "reenterExchangeSourceCurrency", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e($.prototype, "reenterExchangeSourceLbl", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e($.prototype, "reenterExchangeCurrency", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e($.prototype, "reenterWarningNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e($.prototype, "startDateNode", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e($.prototype, "leaveBtn", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e($.prototype, "buyInTxt", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e($.prototype, "reBuyInTxt", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e($.prototype, "paymentText", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e($.prototype, "exchangeSourceCurrency", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e($.prototype, "exchangeSourceLbl", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e($.prototype, "exchangeCurrency", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e($.prototype, "buyInWarningNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e($.prototype, "registerNode", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e($.prototype, "reEnterNode", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e($.prototype, "toolToggles", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bt = e($.prototype, "goldToggles", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), St = e($.prototype, "registerSlideView", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = $)) || K));
    n._RF.pop()
}
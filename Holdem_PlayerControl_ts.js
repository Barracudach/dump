import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as B from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./Holdem_PlayerControlPotButton_ts.js";
import * as b from "./Pb.js";
import * as T from "./Translator.js";
import * as f from "./soundEffect.js";
import * as A from "./mttconfig.js";
import * as y from "./Holdem_PlayerTimer_ts.js";
import * as S from "./Holdem_Basic_Item.js";
import * as v from "./Holdem_TableSetting.js";
import * as k from "./Holdem_TableSetting.js";
import * as P from "./cv.js";
import * as I from "./CrashTracing.js";
import * as E from "./CrashTracing.js";
import * as L from "./FormatParser.js";

function main() {
    var R, O, M, F, x, D, V, w, N, H, z, U, K, G, J, Y, j, W, X, q, Q, Z, $, tt, et, it, ot, nt, lt, st, at, rt, ht, ut, ct, mt, pt, dt, Ct, Bt, _t, gt, bt, Tt, ft, At, yt, St, vt, kt, Pt, It;
    o._RF.push({}, "3c121WaWwNLqbzpew9vkT7V", "Holdem_PlayerControl_ts", void 0);
    const {
        ccclass: Et,
        property: Lt
    } = h;
    t("Holdem_PlayerControl", (R = Lt(n), O = Lt(n), M = Lt(n), F = Lt(n), x = Lt(n), D = Lt(n), V = Lt(l), w = Lt([g]), N = Lt(n), H = Lt(l), z = Lt(n), U = Lt(n), K = Lt(l), G = Lt(s), J = Lt(a), Y = Lt(a), j = Lt(l), W = Lt(r), X = Lt(l), q = Lt(n), Q = Lt(l), Z = Lt(y), $ = Lt(y), tt = Lt(n), et = Lt(l), Et((nt = e((ot = class extends S {
        constructor(...t) {
            super(...t), i(this, "mainPanel", nt, this), i(this, "preActionPanel", lt, this), i(this, "allInPanel", st, this), i(this, "foldButton", at, this), i(this, "callButton", rt, this), i(this, "allInPotButton", ht, this), i(this, "callValue", ut, this), i(this, "potButtons", ct, this), i(this, "preCallButton", mt, this), i(this, "preCallValue", pt, this), i(this, "preFoldButton", dt, this), i(this, "buyTimeButton", Ct, this), i(this, "timeCoinLabel", Bt, this), i(this, "betSlider", _t, this), i(this, "betButton", gt, this), i(this, "confirmBetButton", bt, this), i(this, "preCallButtonLable", Tt, this), i(this, "freeSliderProgressBar", ft, this), i(this, "allInSliderText", At, this), i(this, "callBtnText", yt, this), i(this, "checkOrAllInBtnText", St, this), this._smallBlind = 0, this._bigBlind = 0, this._optCoin = 0, this._isAOF = !1, this._isOmaha = !1, this.isFlatTheme = !1, this.isLiveMode = !1, this.coinMode = 0, this._maxBetCoin = 0, this._buyButtonClickTime = 0, this._blockRaise = !1, this._lastRaiseIsUnderRaise = !1, i(this, "foldTimer", vt, this), i(this, "callTimer", kt, this), i(this, "allinState", Pt, this), i(this, "optionStake", It, this), this._maximumBetAmount = void 0, this._remainCoin = 50, this._call = 700, this._slideNumberArray = void 0, this.state = void 0, this.minBetCoin = void 0, this.optAction = void 0, this._sliding = !1, this._oldRaiseCoin = 0, this._preClickFold = !1, this._preClickCall = !1, this._preselectedAction = !1, this._deskCoin = 0, this._buyTimeCount = 0, this.isBuyingTime = !1, this.lastRaisePos = 0, this._optionStakeValue = 0, this.room = void 0, this._actions = void 0, this.betBtnTouchLocation = u(0, 0), this.lastRaisePlayer = null
        }
        set isOmaha(t) {
            this.allinState.children[2].getComponent(l).string = T(t ? "HOLDEM.MAX" : "HOLDEM.ALL_IN"), this._isOmaha = t, this.setAllInText()
        }
        get pot() {
            return 0 != this.potButtons.length && this.potButtons[0] ? this.potButtons[0].pot : 0
        }
        set pot(t) {
            0 == t && I.hasInstance() && I.getInstance().endSpan(E.PotValue, "pot zero");
            let e = this._slideNumberArray[this._slideNumberArray.length ? this._slideNumberArray.length - 1 : 0],
                i = this._isOmaha ? A.key_customOMHPotButtons1 : A.key_customPotButtons1,
                o = c.localStorage.getItem(i),
                n = o && null != o ? JSON.parse(c.localStorage.getItem(i)) : this._isOmaha ? JSON.parse(JSON.stringify(v)) : JSON.parse(JSON.stringify(k)),
                l = A.getLocalStorageItem(A.key_customPotSet, 0);
            l = 1, cc_mtt.vv.ConsoleLog.log("rise check", t, this._deskCoin, 3 * this._smallBlind, n, 1);
            let s = t + this._optCoin - this._deskCoin;
            this.potButtons.forEach(((t, i) => {
                let o;
                o = i + 3, t.numerator = n.numerator[o], t.denominator = n.denominator[o], t._maxBetCoin = this._maxBetCoin, t._minBetCoin = this.minBetCoin, t._lastBetNum = e, t._deskCoin = this._deskCoin, t._overRange = !1, t._isOmaha = this._isOmaha, t._isMax = !1, t.pot = s, n.isMax && 3 == i && (t._isMax = !0, t.value = this.maximumBetAmount, t.rateLabel.string = T("PLAYER_SETTING.CUSTOM_POT_RATE_MAX"))
            }))
        }
        get call() {
            return this._call
        }
        set call(t) {
            this._call = t;
            for (const e of this.potButtons) e.rateLabel.isBold = !this.isFlatTheme, e.call = t
        }
        get remainCoin() {
            return this._remainCoin
        }
        set remainCoin(t) {
            this._remainCoin = t, this._blockRaise = -1 == this.lastRaisePos || this.lastRaisePos == this.room.store.self.seatNum && this.optAction == b.holdem.Action.CALL, cc_mtt.vv.ConsoleLog.log("PAT0417 block raise:", this._blockRaise, "lastRaisePos:", this.lastRaisePos, "selfSeatNum", this.room.store.self.seatNum, "CALL=2?", this.optAction)
        }
        get maximumBetAmount() {
            return this._maximumBetAmount
        }
        set maximumBetAmount(t) {
            this._maximumBetAmount = t;
            for (const e of this.potButtons) e.maximumBetAmount = t
        }
        onLoad() {
            var t, e;
            this._actions = b.holdem.Action, this.buyTimeButton.active = !1, this.preCallButton.on(a.EventType.CLICK, this.onClickPreCallButton, this), this.preFoldButton.on(a.EventType.CLICK, this.onClickPreFoldButton, this), this.betButton.node.on(n.EventType.TOUCH_START, this.betButton_onTouchStart, this), this.betButton.node.on(n.EventType.TOUCH_MOVE, this.betButton_onTouchMoved, this), this.betButton.node.on(n.EventType.TOUCH_END, this.betButton_onTouchEnd, this), this.betButton.node.on(n.EventType.TOUCH_CANCEL, this.betButton_onTouchCancel, this), this.betSlider.node.on("slide", this.onSliderValueChange, this), this.confirmBetButton.node.on(n.EventType.TOUCH_END, this.betButton_onTouchEnd, this), this.confirmBetButton.node.on(n.EventType.TOUCH_CANCEL, this.betButton_onTouchCancel, this), this.callButton.on(a.EventType.CLICK, this.onClickCallButton, this), this.callButton.on(n.EventType.TOUCH_END, this.onTouchEndBetButtons, this), this.foldButton.on(a.EventType.CLICK, this.onClickFoldButton, this), this.foldButton.on(n.EventType.TOUCH_END, this.onTouchEndBetButtons, this), null == (t = this.allInPotButton) || t.on(a.EventType.CLICK, this.onClickAllInAlmostOverMoneyButton, this), null == (e = this.allInPotButton) || e.on(n.EventType.TOUCH_END, this.onTouchEndBetButtons, this);
            for (const t of this.potButtons) this._isAOF ? t.node.active = !1 : t.node.on(a.EventType.CLICK, (() => {
                this.onClickPotButton(t.value)
            }), this);
            this.callTimer.isSelfTimer = !0, this.foldTimer.isSelfTimer = !0
        }
        onClickPotButton(t) {
            const e = b.holdem.Action;
            let i = t - this._deskCoin;
            i >= this.remainCoin ? this.room.store.Action(e.ALL_IN, this.remainCoin, "onClickPotButton", !0) : this.optAction == e.OPT_FIRST_CHECK ? this.room.store.Action(e.BET, i) : this.room.store.Action(e.RAISE, t)
        }
        setRoomToChild() {
            this.callTimer.setHoldemRoom(this.holdemRoom), this.foldTimer.setHoldemRoom(this.holdemRoom)
        }
        roundUpdateBuyButton() {
            this._buyTimeCount = 0, this.isBuyingTime = !1, this.buyTimeButton.getComponent(m) && (this.buyTimeButton.getComponent(m).color = p(255, 255, 255, 255)), this.buyTimeButton.getComponent(a).interactable = !0, this.timeCoinLabel.string = T("HOLDEM.BUY_TIME.FREE")
        }
        disableBuyButton(t = !0) {
            this.buyTimeButton.getComponent(m) && (this.buyTimeButton.getComponent(m).color = p(82, 82, 82, 255)), this.buyTimeButton.getComponent(a).interactable = !1, this.timeCoinLabel.string = "---", t || (this.buyTimeButton.active = t)
        }
        setBuyButtonLabel(t) {
            let e = [T("HOLDEM.BUY_TIME.FREE"), "2", "5", "10", "10", "---"];
            if (this._buyTimeCount = t < 5 ? t : 5, this.timeCoinLabel.string = e[this._buyTimeCount], 5 == this._buyTimeCount && this.disableBuyButton(!1), t >= 1 && t <= 3) {
                let t = parseInt(e[this._buyTimeCount]);
                cc_mtt.vv.DataManager.userData.Gold < t ? (this.disableBuyButton(), this.timeCoinLabel.string = T("HOLDEM.BUY_TIME.INSUFFICIENT")) : (this.buyTimeButton.getComponent(m) && (this.buyTimeButton.getComponent(m).color = p(255, 255, 255, 255)), this.buyTimeButton.getComponent(a).interactable = !0)
            }
        }
        betButton_onTouchStart(t) {
            this.showAllInSlide(!0)
        }
        betButton_onTouchMoved(t) {
            let e = t.getStartLocation().y,
                i = t.getLocation().y,
                o = this.betSlider.node.getComponent(d).height.valueOf(),
                n = 0;
            n = i < e ? 0 : i - e >= o ? 1 : (i - e) / o, n >= 0 && n <= 1 && (this.betSlider.progress = n, this.freeSliderProgressBar && (this.freeSliderProgressBar.progress = this.betSlider.progress), this.onSliderValueChange(this.betSlider))
        }
        betButton_onTouchEnd() {
            if (cc_mtt.vv.ConsoleLog.log("betButton_onTouchEnd", this.betSlider.progress, this.optionStake.string), this.betSlider.progress <= 0) this.showAllInSlide(!1);
            else {
                const i = this._actions;
                var t = this._optionStakeValue;
                0 == t && this.showAllInSlide(!1), this._sliding = !1;
                var e = this.allInPanel.getComponentInChildren(s).progress;
                if (0 == t) this.showAllInSlide(!1);
                else {
                    let o = t - this._deskCoin;
                    1 == e ? 0 !== this._maxBetCoin && o < this.remainCoin ? this.room.store.Action(this.optAction == i.OPT_FIRST_CHECK ? i.BET : i.RAISE, t) : this.room.store.Action(i.ALL_IN, 0, "betButton_onTouchEnd", !0) : (cc_mtt.vv.ConsoleLog.log("confirmAllInButton", t > 0 ? "call" : "check", t), this.optAction == i.OPT_FIRST_CHECK ? this.room.store.Action(i.BET, t) : this.room.store.Action(i.RAISE, t)), this.showAllInSlide(!1)
                }
            }
        }
        betButton_onTouchCancel() {
            cc_mtt.vv.ConsoleLog.log("betButton_onTouchCancel", this.betSlider.progress, this.optionStake.string), this._sliding = !1;
            var t = this._optionStakeValue;
            if (0 == t) this.showAllInSlide(!1);
            else {
                const i = this._actions;
                var e = this.allInPanel.getComponentInChildren(s).progress;
                let o = t - this._deskCoin;
                1 == e ? 0 !== this._maxBetCoin && o < this.remainCoin ? this.room.store.Action(this.optAction == i.OPT_FIRST_CHECK ? i.BET : i.RAISE, t) : this.room.store.Action(i.ALL_IN, 0, "betButton_onTouchCancel", !0) : (cc_mtt.vv.ConsoleLog.log("confirmAllInButton", t > 0 ? "call" : "check", t), this.optAction == i.OPT_FIRST_CHECK ? this.room.store.Action(i.BET, t) : this.room.store.Action(i.RAISE, t)), this.showAllInSlide(!1)
            }
        }
        onClickPreCallButton() {
            cc_mtt.vv.ConsoleLog.log(this.preCallButton), this._preClickCall = !this._preClickCall, this._preClickFold = !1, this._preselectedAction = this._preClickCall || this._preClickFold, this.updatePreCallButtonImage(), cc_mtt.vv.ConsoleLog.log("have preClickCall", this._preClickCall)
        }
        updatePreCallButtonImage() {
            this.loadPreBetCheck(this._preClickCall), this.loadPreBetFold(!1)
        }
        loadPreBetFold(t) {
            let e = P.tools.GetTableBack();
            P.resMgr.loadPreBetSprite(this.preFoldButton.getComponent(C), e, t)
        }
        loadPreBetCheck(t) {
            let e = P.tools.GetTableBack();
            P.resMgr.loadPreBetSprite(this.preCallButton.getComponent(C), e, t)
        }
        onClickPreFoldButton() {
            cc_mtt.vv.ConsoleLog.log(this.preFoldButton), this._preClickCall = !1, this._preClickFold = !this._preClickFold, this._preselectedAction = this._preClickCall || this._preClickFold, this.updatePreFoldButtonImage(), cc_mtt.vv.ConsoleLog.log("have preClickFold", this._preClickFold)
        }
        updatePreFoldButtonImage() {
            this.loadPreBetCheck(!1), this.loadPreBetFold(this._preClickFold)
        }
        onClickCallButton() {
            cc_mtt.vv.ConsoleLog.log("跟注/過牌", this.call > 0 ? "跟" : "過", this.call, this.minBetCoin, this.remainCoin, "optAction: ", this.optAction);
            const t = this._actions;
            this.call < this.remainCoin || !this._isAOF ? this.room.store.Action(this.optAction == t.OPT_FIRST_CHECK ? t.CHECK : this.optAction, this.call) : this.room.store.Action(t.ALL_IN, this.remainCoin, "onClickCallButton", !0)
        }
        onTouchEndBetButtons(t) {
            const e = t.touch.getLocation();
            this.betBtnTouchLocation = u(e.x, e.y)
        }
        onClickFoldButton() {
            const t = this._actions;
            this.room.store.Action(t.FOLD, 0), I.SetTrackAttributesToSpan(E.MTTTimeBank, {
                userClickFold: !0
            })
        }
        onClickAllInAlmostOverMoneyButton() {
            const t = this._actions;
            this.room.store.Action(t.ALL_IN, 0, "onClickAllInAlmostOverMoneyButton", !0)
        }
        onClickBuyButton() {
            let t = Math.floor(cc_mtt.vv.DataManager.getNow().getTime() / 1e3);
            cc_mtt.vv.ConsoleLog.log("onClick Buy time Button ", this._buyButtonClickTime, t, this._buyTimeCount, this.isBuyingTime), this.isBuyingTime || this._buyButtonClickTime + 2 > t ? cc_mtt.vv.ConsoleLog.log("is buying time || clickTime<2") : (this._buyButtonClickTime = t, this._buyTimeCount >= 5 ? this.disableBuyButton(!1) : (this.isBuyingTime = !0, this.room.store.BuyTime()))
        }
        updateBetButtons(t = !1) {
            let e = this.updateCallText(t);
            this.updatePotButtonActive(t, e)
        }
        hadAction() {
            var t;
            let e = !1,
                i = this.room.store.self.state;
            switch (7 == i && (i = this.room.store.self.lastState), i) {
                case b.holdem.Action.CHECK:
                case b.holdem.Action.CALL:
                case b.holdem.Action.BET:
                case b.holdem.Action.FOLD:
                case b.holdem.Action.RAISE:
                case b.holdem.Action.ALL_IN:
                    e = !0;
                    break;
                default:
                    e = !1
            }
            return null == (t = I.getInstance()) || t.addEventToSpan(E.UnderRaise, "hadAction", {
                stateToCheck: i,
                hadAction: e
            }), e
        }
        updateCallText(t) {
            this.callButton.active = !0;
            let e = 0;
            if (cc_mtt.vv.ConsoleLog.log("updateCallText", this.remainCoin, this.call, !this._isAOF, this.optAction), this.remainCoin > this.call && !this._isAOF) {
                var i;
                let o = this.minBetCoin - this.call;
                this.lastRaisePlayer = this.room._players.find((t => {
                    var e;
                    return (null == t || null == (e = t.store) ? void 0 : e.seatNum) === this.lastRaisePos
                })), this._lastRaiseIsUnderRaise = this.call > 0 && (0 == (null == (i = this.lastRaisePlayer) || null == (i = i.store) ? void 0 : i.leftCoin) || this.call < this.bbValue) && o > this.call, P.appConfig.getGameConfig().applyNewUnderRaiseRule && this._lastRaiseIsUnderRaise && -1 !== this.lastRaisePos && (this._blockRaise = this.hadAction()), this._blockRaise ? (cc_mtt.vv.ConsoleLog.log("PAT0417", "cant raise"), this.betButton.node.active = !1) : this.betButton.node.active = !0, this.call > 0 ? (this.callValue.string = L.getDataPointValue(this.call, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck), e = this.remainCoin >= this.minBetCoin ? 1 : 3, t || (this.betButton.node.active = !1)) : e = 2
            } else this.betButton.node.active = !1, this.optAction = b.holdem.Action.ALL_IN, e = 0;
            return this.setCallButtonType(e, t), e
        }
        setCallValueActiveInSetCallButtonType(t) {
            this.callValue.node.active = t
        }
        setCallButtonType(t, e) {
            switch (t) {
                case 0:
                    this.callBtnText.active = !1, this.checkOrAllInBtnText.string = P.config.getStringData("Enum_Action_Allin"), this.checkOrAllInBtnText.node.active = !0, this.setCallValueActiveInSetCallButtonType(!1);
                    break;
                case 1:
                case 3:
                    this.callBtnText.active = !0, this.checkOrAllInBtnText.node.active = !1, this.setCallValueActiveInSetCallButtonType(!0);
                    break;
                case 2:
                    this.callBtnText.active = !1, this.checkOrAllInBtnText.string = P.config.getStringData("Enum_Action_Check"), this.checkOrAllInBtnText.node.active = !0, this.setCallValueActiveInSetCallButtonType(!1)
            }
        }
        updatePotButtonActive(t, e) {
            if (!this._isAOF) {
                let i = null,
                    o = !1;
                const n = this.potButtons.length > 4 ? this.potButtons[4] : null;
                for (const l of this.potButtons) {
                    l.node.active = !0;
                    let s = this.remainCoin >= l.value - this._deskCoin && !l._overRange && !this._blockRaise;
                    t || (s = !1), this.setPotButtonActive(l, s, e), l.node.getComponent(a).interactable = s, s && (o = !0), s || l._overRange || i || l == n || (i = l.node)
                }
                A.getLocalStorageItem(A.key_customPotSet, 0);
                if (n && (n.node.active = !1, n.node.getComponent(a).interactable = !1), this.allInPotButton) {
                    const n = 0 !== e && t && !this._blockRaise && null != i;
                    if (this.allInPotButton.active = n, n && i) {
                        o || (i = this.potButtons[0].node);
                        const t = i.parent.getComponent(d).convertToWorldSpaceAR(i.position);
                        this.allInPotButton.position = this.allInPotButton.parent.getComponent(d).convertToNodeSpaceAR(t)
                    }
                }
            }
        }
        setPotButtonActive(t, e, i) {
            t.node.getComponent(B).opacity = e ? 255 : 0, t.potLabel.string = 2 == i ? P.config.getStringData("ActionTips3") : P.config.getStringData("ActionTips2")
        }
        showAllInSlide(t) {
            this.allInPanel.active = t, this.holdemRoom.store.getSelfPlayer() && 7 == this.holdemRoom.store.getSelfPlayer().state || (this.betSlider.progress = 0), this.freeSliderProgressBar && (this.freeSliderProgressBar.progress = 0), this.setAllInText(this._maxBetCoin >= this.remainCoin ? "Enum_Action_Allin" : null), this._optionStakeValue = 0, this.optionStake.string = "0", this.potButtons[0].node.parent.active = !t, this.allinState.active = !1, this.betButton.node.getComponent(B).opacity = t ? 0 : 255
        }
        onSliderValueChange(t) {
            let e = Math.round(t.progress * (this._slideNumberArray.length - 1)),
                i = Math.floor(this._slideNumberArray[e]),
                o = e / (this._slideNumberArray.length - 1);
            t.progress = o, this.freeSliderProgressBar && (this.freeSliderProgressBar.progress = t.progress), Math.abs(this._oldRaiseCoin - i) > .999 && (this._sliding = !0), this._oldRaiseCoin != i && _(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect(f.SlideBarScroll, this.holdemRoom.store), this._oldRaiseCoin = i, 1 == t.progress ? (0 !== this._maxBetCoin && this._maxBetCoin < this.remainCoin ? (this._optionStakeValue = this._maxBetCoin, this.optionStake.string = L.getDataPointValue(this._maxBetCoin, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck)) : (0 == this._optionStakeValue && (this._optionStakeValue = i), this.optionStake.string = "All In"), this.allinState.active = !0) : (this._optionStakeValue = i, this.optionStake.string = L.getDataPointValue(i, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck), this.allinState.active = !1)
        }
        resetPreActionPanel() {
            this._preClickCall = !1, this._preClickFold = !1, this.resetPreButton()
        }
        resetPreButton() {
            this.preCallValue.string = "", this.loadPreBetCheck(!1), this.loadPreBetFold(!1)
        }
        stopAllTimer() {
            this.foldTimer.stopTimer(), this.callTimer.stopTimer()
        }
        startTimer(t) {}
        updateTheme(t) {
            this.isFlatTheme = t, this.foldButton.children[0].active = !t, this.potButtons.forEach((e => {
                e.node.children[0].active = !t, e.node.children[1].active = t, e.rateLabel.isBold = !t
            })), this.allInPanel.children[0].children[0].active = !t, this.allInPanel.children[0].children[1].active = t, this.foldButton.children[1].active = t
        }
        setAllInText(t) {
            if (this.allInSliderText) {
                let e;
                e = t || (this._isOmaha ? "Bet_Slider_Pot" : "Enum_Action_Allin"), this.allInSliderText.string = P.config.getStringData(e).toUpperCase()
            }
        }
        updateCoinModeValue() {
            const t = this.getDisplayCurrency();
            this.preCallValue.string = L.getDataPointValue(this.holdemRoom._callDiffValue, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck), this.callValue.string = L.getDataPointValue(this.call, this.isShortDeck ? this.anteValue : this.bbValue, this.coinMode, this.isShortDeck), this.potButtons.forEach((e => {
                e.updateCoinMode(this.coinMode, this.bbValue, this.anteValue, t, this.getGameMode())
            }))
        }
        get isShortDeck() {
            return this.getGameMode() == b.commonProto.MTT_GAME_MODE.SHORT_DECK
        }
        updatePot(t) {
            let e = A.getLocalStorageItem(A.key_customPotSet, 0);
            e = 1, this.potButtons.forEach(((e, i) => {
                let o;
                o = i + 3, e.numerator = t.numerator[o], e.denominator = t.denominator[o], t.isMax && 3 == i ? (e._isMax = !0, e.value = this.maximumBetAmount, e.rateLabel.string = T("PLAYER_SETTING.CUSTOM_POT_RATE_MAX")) : (e._isMax = !1, e.updateValue())
            }))
        }
        isShowAllinButton() {
            return this.allInPotButton.active
        }
    }).prototype, "mainPanel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(ot.prototype, "preActionPanel", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(ot.prototype, "allInPanel", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(ot.prototype, "foldButton", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(ot.prototype, "callButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(ot.prototype, "allInPotButton", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(ot.prototype, "callValue", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ot.prototype, "potButtons", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), mt = e(ot.prototype, "preCallButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ot.prototype, "preCallValue", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ot.prototype, "preFoldButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ot.prototype, "buyTimeButton", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ot.prototype, "timeCoinLabel", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ot.prototype, "betSlider", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ot.prototype, "betButton", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ot.prototype, "confirmBetButton", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ot.prototype, "preCallButtonLable", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ot.prototype, "freeSliderProgressBar", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(ot.prototype, "allInSliderText", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ot.prototype, "callBtnText", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ot.prototype, "checkOrAllInBtnText", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ot.prototype, "foldTimer", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ot.prototype, "callTimer", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ot.prototype, "allinState", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(ot.prototype, "pot", [Lt], Object.getOwnPropertyDescriptor(ot.prototype, "pot"), ot.prototype), e(ot.prototype, "call", [Lt], Object.getOwnPropertyDescriptor(ot.prototype, "call"), ot.prototype), e(ot.prototype, "remainCoin", [Lt], Object.getOwnPropertyDescriptor(ot.prototype, "remainCoin"), ot.prototype), It = e(ot.prototype, "optionStake", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = ot)) || it));
    o._RF.pop()
}
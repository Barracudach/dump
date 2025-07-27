import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./observer.js";
import * as p from "./Translator.js";
import * as S from "./mttconfig.js";
import * as d from "./LanguageManager.js";

function main() {
    var v, _, E, G, C, M, L, y, H, A, f, N, O, T, D, U, P, b;
    i._RF.push({}, "e26e9QnTXBA26yqQqPJ8htB", "Holdem_GuessHand", void 0);
    const {
        ccclass: B,
        property: I
    } = r;
    t("Holdem_GuessHand", (v = I(o), _ = I(o), E = I(n), G = I(n), C = I(a), M = I(n), L = I(h), y = I(n), B(H = m((f = e((A = class extends l {
        constructor(...t) {
            super(...t), s(this, "statement", f, this), s(this, "continuousGuess", N, this), s(this, "manualGuess", O, this), s(this, "autoGuess", T, this), s(this, "toggleButton", D, this), s(this, "statementChangeButton", U, this), s(this, "listAnim", P, this), this.data = [
                ["", 200],
                ["", 6.5],
                ["", 3.3],
                ["", 16],
                ["", 1.4]
            ], this.currentState = 0, this.tempMoney = 0, this.callBackFunc = void 0, this.loopSetting = !1, this.basePot = 0, this.successPopUp = !1, this.listActive = 1, this._snapshot = !1, this.guessPotArr = [1, 10, 50, 100], this.guessedType = 0, this.guessedAmount = 0, this._thisRoundGuessed = !1, s(this, "choiceNode", b, this), this.room = void 0
        }
        onLoad() {
            this.currentState != S.getLocalStorageItem(S.key_guess_type, 0) && (this.currentState = S.getLocalStorageItem(S.key_guess_type, 0));
            let t = this.manualGuess.children;
            for (let e = 0; e < 4; e++) t[e].children[0].active = !1, t[e].on(n.EventType.TOUCH_START, (() => {
                t[e].children[0].active = !0
            })), t[e].on(n.EventType.TOUCH_END, (() => {
                t[e].children[0].active = !1
            })), t[e].on(n.EventType.TOUCH_CANCEL, (() => {
                t[e].children[0].active = !1
            }));
            let e = p("HOLDEM.GUESS_HAND_TYPE_CHOICE").split("|");
            this.data = [
                [e[0], 200],
                [e[1], 6.5],
                [e[2], 3.3],
                [e[3], 16],
                [e[4], 1.4]
            ];
            let s = this.choiceNode.children;
            for (let t = 0; t < 5; t++) s[t].children[0].children[0].getComponent(o).string = c.formatStr(d.t("HOLDEM.GUESS_HAND_STATEMENT"), this.data[t][0], this.data[t][1])
        }
        PanelSnapshot(t) {
            this.currentState = t.type - 1, this.tempMoney = t.amount, this.manualGuess.children[4].children[0].getComponent(u).string = p("HOLDEM.GUESS_BET") + this.tempMoney, cc_mtt.vv.ConsoleLog.log("PL1009", t.amount, t), this._snapshot = !0, this.SuccessPopUp()
        }
        PanelActive(t, e = null) {
            if (cc_mtt.vv.ConsoleLog.log("PanelActive 106", t, this._thisRoundGuessed), t) this.loopSetting && this.tempMoney > cc_mtt.vv.DataManager.userData.Gold && (cc_mtt.vv.ConsoleLog.log("PL1004", this.loopSetting, this.tempMoney, cc_mtt.vv.DataManager.userData.Gold), this.room.setNotificationMsg(p("HOLDEM.GUESS_HAND_CANCEL_WITH_NO_COIN")), this.removeLoopSetting()), this.PopUpInit(), this.node.active = !0;
            else {
                this.listActive || (this.listActive = 1, this.listAnim.play(this.listAnim.clips[2].name), this.choiceNode.active = !1);
                let t = this.manualGuess.children;
                for (let e = 0; e < 4; e++) t[e].children[0].active = !1;
                this.node.active = !1
            }
        }
        removeLoopSetting() {
            cc_mtt.vv.ConsoleLog.log("remove loop setting"), this.loopSetting = !1, this.tempMoney = 0, this.toggleButton.isChecked = !1
        }
        resetAllSetting() {
            S.getLocalStorageItem(S.key_enableGuessHand + cc_mtt.vv.DataManager.userId, !0) && (this.tempMoney = 0, this.manualGuess.children[4].children[0].getComponent(u).string = p("HOLDEM.GUESS_BET"), this.removeLoopSetting())
        }
        PopUpInit() {
            this._thisRoundGuessed ? (this.autoGuess.active = !0, this.manualGuess.active = !1, this.statement.string = c.formatStr(d.t("HOLDEM.GUESS_HAND_SUCCESS"), this.guessedAmount, this.data[this.guessedType][0])) : (this.autoGuess.active = !!this.loopSetting, this.manualGuess.active = !this.loopSetting, this.statementChangeButton.active = !this.loopSetting, this.manualGuess.active && this.ChangePotValue("ENTER_IN_POPUPINIT", 4), this.loopSetting ? this.statement.string = c.formatStr(d.t("HOLDEM.GUESS_HAND_STATEMENT_LOOP"), this.tempMoney, this.data[this.currentState][0]) : (this.statement.string = c.formatStr(d.t("HOLDEM.GUESS_HAND_STATEMENT"), this.data[this.currentState][0], this.data[this.currentState][1]), 0 == this.tempMoney && (this.manualGuess.children[4].children[0].getComponent(u).string = p("HOLDEM.GUESS_BET"))))
        }
        switchStatement() {
            if (this.statementChangeButton.active) {
                if (cc_mtt.vv.ConsoleLog.log("PL0927 check list button", this.statementChangeButton.active), this.choiceNode.active = !0, this.listActive = this.listActive ? 0 : 1, cc_mtt.vv.ConsoleLog.log("PL0902 switchStatement", this.listActive), !this.listActive) {
                    let t = this.choiceNode.children;
                    for (let e = 0; e < t.length; e++) t[e].active = e != this.currentState
                }
                this.listAnim.play(this.listAnim.clips[this.listActive].name)
            } else cc_mtt.vv.ConsoleLog.log("PL0927 check list button 2", this.statementChangeButton.active)
        }
        ChangeStatement(t, e) {
            const s = this.data[e];
            this.currentState = parseInt(e), g.localStorage.setItem(S.key_guess_type, this.currentState.toString()), this.statement.string = c.formatStr(d.t("HOLDEM.GUESS_HAND_STATEMENT"), s[0], s[1]), this.switchStatement()
        }
        ChangePotValue(t, e) {
            let s = this.manualGuess.children;
            if (4 !== e) {
                let t = this.tempMoney + this.guessPotArr[e] > 1e4 ? 1e4 : this.tempMoney + this.guessPotArr[e];
                if (!(t <= cc_mtt.vv.DataManager.userData.Gold)) return void(this.room ? this.room.setNotificationMsg(p("ICON_MESSAGE.NOT_ENOUGH_COIN")) : cc_mtt.vv.ConsoleLog.log("GuessHand room not exist"));
                this.tempMoney = t, s[4].children[0].getComponent(u).string = p("HOLDEM.GUESS_BET") + (t > 0 ? t : "")
            }
        }
        GuessHandRequest(t, e) {
            return this.tempMoney <= 0 ? (cc_mtt.vv.ConsoleLog.log("PL1009 GuessHandRequest tempMoney", " you are poor jj"), void(this.room ? this.room.setNotificationMsg(p("HOLDEM.GUESS_POT_ZERO")) : cc_mtt.vv.ConsoleLog.log("GuessHand room not exist"))) : this.tempMoney > cc_mtt.vv.DataManager.userData.Gold ? (cc_mtt.vv.ConsoleLog.log("GuessHandRequest NOT_ENOUGH_COIN", this.tempMoney, cc_mtt.vv.DataManager.userData.Gold), void(this.room ? this.room.setNotificationMsg(p("ICON_MESSAGE.NOT_ENOUGH_COIN")) : cc_mtt.vv.ConsoleLog.log("GuessHand room not exist"))) : (cc_mtt.vv.ConsoleLog.log("GuessHandRequest Click"), void(this.room.store ? this.room.store.GuessHandReq(this.tempMoney, this.currentState + 1) : cc_mtt.vv.ConsoleLog.log("GuessHandRequest", " no room store")))
        }
        SuccessPopUp() {
            this._thisRoundGuessed = !0, this.autoGuess.active = !0, this.manualGuess.active = !1, this.statementChangeButton.active = !1, this.guessedType = this.currentState, this.guessedAmount = this.tempMoney, this.continuousGuess.string = p("HOLDEM.GUESS_HAND_LOOP"), this.loopSetting || this._snapshot ? (this.successPopUp = !1, this._snapshot ? this.statement.string = c.formatStr(p("HOLDEM.GUESS_HAND_SUCCESS"), this.guessedAmount, this.data[this.guessedType][0]) : this.statement.string = c.formatStr(d.t("HOLDEM.GUESS_HAND_STATEMENT"), this.data[this.guessedType][0], this.data[this.guessedType][1]), this._snapshot = !1) : (this.successPopUp = !0, this.loopSetting = !1, this.toggleButton.isChecked = !1, this.statement.string = c.formatStr(p("HOLDEM.GUESS_HAND_SUCCESS"), this.guessedAmount, this.data[this.guessedType][0]))
        }
        LoopButtonClick() {
            if (this.loopSetting) cc_mtt.vv.ConsoleLog.log("LoopButtonClick uncheck"), this.removeLoopSetting();
            else {
                if (this.tempMoney != this.guessedAmount && (this.tempMoney = this.guessedAmount), cc_mtt.vv.DataManager.userData.Gold < this.tempMoney) return void(this.room ? this.room.setNotificationMsg(p("ICON_MESSAGE.NOT_ENOUGH_COIN")) : cc_mtt.vv.ConsoleLog.log("GuessHand room not exist"));
                this.loopSetting = !0, this.successPopUp = !1, cc_mtt.vv.ConsoleLog.log("LoopButtonClick check"), this.toggleButton.isChecked = !0, this.callPopUpBox("HOLDEM.FIRST_LOOP_GUESS", (() => {}))
            }
        }
        callPopUpBox(t, e, s = "MESSAGE_DIALOG_BLOCKER.OK") {
            cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: s,
                callback: e
            }])
        }
        onShow() {
            this.node.active = !0
        }
        onClose() {
            this.node.active = !1, this.room.ToggleGuessHandControl()
        }
    }).prototype, "statement", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(A.prototype, "continuousGuess", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(A.prototype, "manualGuess", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(A.prototype, "autoGuess", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(A.prototype, "toggleButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(A.prototype, "statementChangeButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(A.prototype, "listAnim", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(A.prototype, "choiceNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = A)) || H) || H));
    i._RF.pop()
}
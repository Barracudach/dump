import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as S from "./mttconfig.js";
import * as C from "./mttconfig.js";
import * as p from "./SelfSetting_ts.js";
import * as B from "./Holdem_Card_ts.js";
import * as k from "./ToggleSwitch.js";
import * as b from "./Translator.js";
import * as f from "./MultipleGame.js";
import * as _ from "./MultipleGame.js";
import * as L from "./MTTConnector.js";

function main() {
    var T, v, y, G, P, I, F, N, E, w, M, R, O, D, z, A, W, x, H, J, V, Y, j, U, Z, $, q, K;
    i._RF.push({}, "7aff2nD4GZLSb5hPkCHomG2", "Holdem_SelfSetting", void 0);
    const {
        ccclass: Q,
        property: X
    } = h, tt = t("potDefaultSetting", {
        numerator: [1, 1, 1, 1, 1, 1, 1, 1],
        denominator: [3, 2, 1, 6, 4, 3, 2, 1]
    });
    t("Holdem_SelfSetting", (T = X(k), v = X(n), y = X(n), G = X(n), P = X(r), I = X(n), F = X(s), N = X(c), E = X([a]), w = X([l]), M = X(n), R = X(g), O = X(c), Q((A = e((z = class extends p {
        constructor(...t) {
            super(...t), o(this, "autoCheck", A, this), o(this, "cardBackList", W, this), o(this, "cardFaceList", x, this), o(this, "bgColorList", H, this), this.raiseMenuShow = !1, this.currentSelectPot = 0, this.customSlideNumber = 101, o(this, "closeButton", J, this), o(this, "contentNode", V, this), o(this, "previewBG", Y, this), o(this, "bgName", j, this), o(this, "potButtonSet", U, this), o(this, "potButtonToggleGroup", Z, this), o(this, "customRateNode", $, this), o(this, "potSlide", q, this), o(this, "titleTxt", K, this), this.tempSetting = null, this._currentBg = 0, this._currentCardFace = 0, this._currentCardBack = 0, this.isWPT = !1, this.isOmaha = !1, this.potStr = void 0, this._currentPage = 0, this._currentPotButton = -1, this._checkingState = !1, this._currentButtonSet = 0
        }
        onLoad() {
            super.onLoad(), this.potStr = b("PLAYER_SETTING.POT"), cc_mtt.vv.DataManager.needGoldCheck || (this.accountBalance.node.active = !1, this.accountBalance.node.parent.parent.children[5].active = !1), this.titleTxt.isBold = !0, this.potButtonSet[C.getLocalStorageItem(C.key_customPotSet, 0)].isChecked = !0, this.tempSetting = u.localStorage.getItem(C.key_customPotButtons) && "null" !== u.localStorage.getItem(C.key_customPotButtons) ? JSON.parse(u.localStorage.getItem(C.key_customPotButtons)) : JSON.parse(JSON.stringify(tt))
        }
        initSetting() {
            switch (super.initSetting(), +u.localStorage.getItem(C.key_cardBackSetting)) {
                case C.CardBack.SET1:
                    this.cardBackList.children[0].getComponent(a).isChecked = !0;
                    break;
                case C.CardBack.SET2:
                    this.cardBackList.children[1].getComponent(a).isChecked = !0;
                    break;
                case C.CardBack.SET3:
                    this.cardBackList.children[2].getComponent(a).isChecked = !0;
                    break;
                case C.CardBack.SET4:
                    this.cardBackList.children[3].getComponent(a).isChecked = !0;
                    break;
                default:
                    this.cardBackList.children[0].getComponent(a).isChecked = !0
            }
            switch (+u.localStorage.getItem(C.key_cardFaceSetting)) {
                case C.CardFace.SET1:
                    this.cardFaceList.children[0].getComponent(a).isChecked = !0;
                    break;
                case C.CardFace.SET2:
                    this.cardFaceList.children[1].getComponent(a).isChecked = !0;
                    break;
                case C.CardFace.SET3:
                    this.cardFaceList.children[2].getComponent(a).isChecked = !0;
                    break;
                default:
                    this.cardFaceList.children[0].getComponent(a).isChecked = !0
            }
            if (this.isOmaha = this.holdemRoom._gameViewType == S.MTT_GAME_MODE.OMAHA, this.isOmaha && this.cardFaceList.children.forEach(((t, e) => {
                    t.active = 2 == e, t.getComponent(a).interactable = !1
                })), this.holdemRoom._gameMode == S.GAME_LEVEL_LIST_ID.SNG || this.holdemRoom._gameMode == S.GAME_LEVEL_LIST_ID.AOF) switch (+u.localStorage.getItem(C.key_sngBgColorSetting)) {
                case C.BgColor.BG1:
                    this.bgColorList.children[0].getComponent(a).isChecked = !0;
                    break;
                case C.BgColor.BG2:
                    this.bgColorList.children[1].getComponent(a).isChecked = !0;
                    break;
                case C.BgColor.BG3:
                    this.bgColorList.children[2].getComponent(a).isChecked = !0;
                    break;
                case C.BgColor.BG4:
                    this.bgColorList.children[3].getComponent(a).isChecked = !0;
                    break;
                case C.BgColor.BG5:
                    this.bgColorList.children[4].getComponent(a).isChecked = !0;
                    break;
                default:
                    this.bgColorList.children[2].getComponent(a).isChecked = !0
            } else {
                let t = u.localStorage.getItem(C.key_mttBgColorSetting);
                switch (this.holdemRoom.isWPT && (this.isWPT = !0, this.bgColorList.children[8].active = !0, t = C.getLocalStorageItem(C.key_wptBgColorSetting, 9)), +t) {
                    case C.BgColor.BG0:
                        this.bgColorList.children[0].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG1:
                        this.bgColorList.children[1].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG2:
                        this.bgColorList.children[2].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG3:
                        this.bgColorList.children[3].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG4:
                        this.bgColorList.children[4].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG5:
                        this.bgColorList.children[5].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG6:
                        this.bgColorList.children[6].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG7:
                        this.bgColorList.children[7].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG8:
                        this.bgColorList.children[8].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG9:
                        this.bgColorList.children[9].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG10:
                        this.bgColorList.children[10].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG11:
                        this.bgColorList.children[11].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG12:
                        this.bgColorList.children[12].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG13:
                        this.bgColorList.children[13].getComponent(a).isChecked = !0;
                        break;
                    case C.BgColor.BG14:
                        this.bgColorList.children[14].getComponent(a).isChecked = !0;
                        break;
                    default:
                        this.bgColorList.children[0].getComponent(a).isChecked = !0
                }
            }
        }
        start() {
            this.scheduleOnce((() => {
                this.closeButton.interactable = !0
            }), .3)
        }
        initPotButtons(t = !1) {
            this.potSlide.progress = .5, this.onCustomRateSlide(this.potSlide, "autoSet"), cc_mtt.vv.ConsoleLog.log("initPotButtons", t), t && (this.tempSetting = JSON.parse(JSON.stringify(tt)));
            for (var e = 0; e < 8; e++) {
                let t = this.tempSetting.numerator[e],
                    o = this.tempSetting.denominator[e],
                    i = t / o;
                cc_mtt.vv.ConsoleLog.log("initPotButtons", t, o, tt, this.tempSetting, e, this.potStr), cc_mtt.vv.ConsoleLog.log("initPotButtons", this.potButtonToggleGroup[0].toggleItems), e > 2 ? this.potButtonToggleGroup[1].toggleItems[e - 3].node.children[2].getComponent(c).string = 1 == t ? 1 == i ? "1x\n" + this.potStr : t + "/" + o + "\n" + this.potStr : 100 == t ? "1x\n" + this.potStr : t + "%\n" + this.potStr : this.potButtonToggleGroup[0].toggleItems[e].node.children[2].getComponent(c).string = 1 == t ? 1 == i ? "1x\n" + this.potStr : t + "/" + o + "\n" + this.potStr : 100 == t ? "1x\n" + this.potStr : t + "%\n" + this.potStr
            }
        }
        onToggleMenu(t, e) {
            console.log("toggle menu", t);
            for (let t of this.contentNode.children) t.active = !1;
            t.node.parent.children.forEach(((t, o) => {
                cc_mtt.vv.ConsoleLog.log("pat log menu", t), t.children[1].getComponent(d).color = o == e ? L.instance.selfSettingMenuON : L.instance.selfSettingMenuOFF
            })), this._currentPage = e, this.contentNode.children[e].active = !0, 3 == e && this.initPotButtons()
        }
        onCardBackToggle(t, e) {
            this._currentCardBack = e
        }
        onCardFaceToggle(t, e) {
            this._currentCardFace = e
        }
        onCardFaceMenuToggle() {
            cc_mtt.vv.ConsoleLog.log("onCardFaceMenuToggle"), this.cardFaceList.active = !0, this.bgColorList.active = !1
        }
        onBgColorMenuToggle() {
            cc_mtt.vv.ConsoleLog.log("onBgColorMenuToggle"), this.cardFaceList.active = !1, this.bgColorList.active = !0
        }
        onBgColorToggle(t, e) {
            cc_mtt.vv.ConsoleLog.log("onBgColorToggle", e), this._currentBg = e, this.previewBG.spriteFrame = t.target.getComponent(s).spriteFrame, this.bgName.string = e > 8 ? e.toString() : b(`PLAYER_SETTING.BG_NAME${e}`)
        }
        onCustomRateSlide(t, e) {
            this.customSlideNumber = Math.round(140 * t.progress + 10), cc_mtt.vv.ConsoleLog.log("onCustomRateSlide", e, this._currentPotButton), "sliderr" == e && this._currentPotButton >= 0 && (this.tempSetting.numerator[this._currentPotButton] = this.customSlideNumber, this.tempSetting.denominator[this._currentPotButton] = 100, cc_mtt.vv.ConsoleLog.log("set tempSetting", this.tempSetting, this.customSlideNumber), this._currentPotButton > 2 ? this.potButtonToggleGroup[1].toggleItems[this._currentPotButton - 3].node.children[2].getComponent(c).string = this.customSlideNumber + "%\n" + this.potStr : this.potButtonToggleGroup[0].toggleItems[this._currentPotButton].node.children[2].getComponent(c).string = this.customSlideNumber + "%\n" + this.potStr), t.node.children[3].getComponent(c).string = this.customSlideNumber + "%"
        }
        onPotButtonToggle(t, e) {
            cc_mtt.vv.ConsoleLog.log("onPotButtonToggle", tt.denominator[e], e), cc_mtt.vv.ConsoleLog.log("potButtonToggleGroup", t.isChecked, this._checkingState, this._currentPotButton), t.isChecked ? (this._currentPotButton != e && (cc_mtt.vv.ConsoleLog.log("check numerator", this.tempSetting), 1 == this.tempSetting.numerator[e] ? (this.potSlide.progress = .5, this.onCustomRateSlide(this.potSlide, "autoSet")) : (this.potSlide.progress = (this.tempSetting.numerator[e] - 10) / 140, this.onCustomRateSlide(this.potSlide, "autoSet"))), this.customRateNode.active = !0) : this._currentPotButton == e && (this.customRateNode.active = !1), this._checkingState || (this._currentPotButton = e, e > 2 ? this.potButtonSet[1].isChecked = !0 : e < 3 && (this.potButtonSet[0].isChecked = !0))
        }
        onPotButtonSet(t, e) {
            if (cc_mtt.vv.ConsoleLog.log("onPotButtonSet", e, this.potButtonSet[0].isChecked, this.potButtonSet[1].isChecked), this._checkingState = !0, this._currentButtonSet = e, 0 == e)
                for (const t of this.potButtonToggleGroup[1].toggleItems) t.isChecked = !1;
            else if (1 == e)
                for (const t of this.potButtonToggleGroup[0].toggleItems) t.isChecked = !1;
            this._checkingState = !1
        }
        onResetButton() {
            switch (cc_mtt.vv.ConsoleLog.log("onResetButton", this._currentPage, this.isOmaha), +this._currentPage) {
                case 0:
                    let t = 0;
                    this.isWPT && (t = 8), this.bgColorList.children[t].getComponent(a).isChecked = !0, this.handelBackgroundSetting(t + 1);
                    break;
                case 1:
                    this.cardBackList.children[0].getComponent(a).isChecked = !0, this.handleCardBackSetting(0), this.isOmaha || (this.cardFaceList.children[0].getComponent(a).isChecked = !0, this.handleCardFaceSetting(0));
                    break;
                case 2:
                    0 == C.getLocalStorageItem(C.key_enableSoundEffect, 1) && this.soundEffect.onClickToggleSwitch();
                    break;
                case 3:
                    if (u.localStorage.setItem(C.key_customPotSet, "0"), 0 == this._currentButtonSet)
                        for (const t of this.potButtonToggleGroup[0].toggleItems) t.isChecked = !1;
                    else this.potButtonSet[0].isChecked = !0;
                    this.initPotButtons(!0)
            }
        }
        onConfirmButton() {
            cc_mtt.vv.ConsoleLog.log("onConfirmButton setting", this._currentPage), this.handleCardBackSetting(this._currentCardBack), this.handleCardFaceSetting(this._currentCardFace), this.handelBackgroundSetting(this._currentBg), null == this.tempSetting && (this.tempSetting = u.localStorage.getItem(C.key_customPotButtons) && "null" !== u.localStorage.getItem(C.key_customPotButtons) ? JSON.parse(u.localStorage.getItem(C.key_customPotButtons)) : JSON.parse(JSON.stringify(tt))), u.localStorage.setItem(C.key_customPotButtons, JSON.stringify(this.tempSetting)), u.localStorage.setItem(C.key_customPotSet, this._currentButtonSet.toString()), this.onClose()
        }
        handleCardBackSetting(t) {
            if (this.checkDiffWithLocalStorage(C.key_cardBackSetting, t.toString())) {
                u.localStorage.setItem(C.key_cardBackSetting, t.toString());
                for (let e of m.getScene().getComponentsInChildren(B)) e.setCardBack(+t)
            }
        }
        handleCardFaceSetting(t) {
            if (this.checkDiffWithLocalStorage(C.key_cardFaceSetting, t.toString())) {
                u.localStorage.setItem(C.key_cardFaceSetting, t.toString());
                for (let e of m.getScene().getComponentsInChildren(B)) e.setCardFace(+t)
            }
        }
        handelBackgroundSetting(t) {
            this.holdemRoom._gameMode == S.GAME_LEVEL_LIST_ID.SNG || this.holdemRoom._gameMode == S.GAME_LEVEL_LIST_ID.AOF ? this.checkDiffWithLocalStorage(C.key_sngBgColorSetting, t.toString()) && (u.localStorage.setItem(C.key_sngBgColorSetting, t.toString()), this.holdemRoom.setBackground()) : this.isWPT ? this.checkDiffWithLocalStorage(C.key_wptBgColorSetting, t.toString()) && (u.localStorage.setItem(C.key_wptBgColorSetting, t.toString()), this.holdemRoom.setBackground()) : this.checkDiffWithLocalStorage(C.key_mttBgColorSetting, t.toString()) && (u.localStorage.setItem(C.key_mttBgColorSetting, t.toString()), this.holdemRoom.setBackground()), _.instance && _.instance.updateBackground(f.HOLDEM)
        }
        checkDiffWithLocalStorage(t, e) {
            let o = t == C.key_cardBackSetting || t == C.key_cardFaceSetting ? 0 : 1;
            return C.getLocalStorageItem(t, o) !== e
        }
    }).prototype, "autoCheck", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(z.prototype, "cardBackList", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(z.prototype, "cardFaceList", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(z.prototype, "bgColorList", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(z.prototype, "closeButton", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(z.prototype, "contentNode", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(z.prototype, "previewBG", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(z.prototype, "bgName", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(z.prototype, "potButtonSet", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = e(z.prototype, "potButtonToggleGroup", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = e(z.prototype, "customRateNode", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(z.prototype, "potSlide", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(z.prototype, "titleTxt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = z)) || D));
    i._RF.pop()
}
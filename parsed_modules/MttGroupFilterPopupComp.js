import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./mttGameListFilterSilder.js";
import * as B from "./DesignSystemButtonBase.js";
import * as f from "./CurrencyValue.js";
import * as I from "./cv.js";
import * as T from "./LobbyTools.js";
import * as S from "./MttPrefab.js";
import * as F from "./Translator.js";

function main() {
    var w, L, E, v, N, P, k, V, O, D, A, z, R, x, M, G, H, U, W, $, X, j, K, Y, q, J, Q, Z, tt, et, it, nt, st, ot, rt, lt, ut, ht, at, pt, mt, dt, ct, bt, yt, Ct, gt, _t, Bt, ft, It, Tt, St, Ft, wt, Lt, Et, vt, Nt, Pt, kt, Vt, Ot, Dt, At, zt, Rt, xt, Mt, Gt, Ht, Ut;
    n._RF.push({}, "1eac8e1fNhP4YK8qRuzdi7J", "MttGroupFilterPopupComp", void 0);
    const {
        ccclass: Wt,
        property: $t
    } = p;
    t("default", (w = $t(s), L = $t(o), E = $t(r), v = $t(l), N = $t(l), P = $t(u), k = $t(l), V = $t(u), O = $t(h), D = $t(s), A = $t(s), z = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), R = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), x = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), M = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), G = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), H = $t({
        group: {
            name: "buyInTipValue"
        },
        type: f
    }), U = $t(s), W = $t(l), $ = $t(s), X = $t(_), j = $t(o), K = $t(r), Y = $t(o), q = $t(r), J = $t(s), Q = $t(l), Z = $t(l), tt = $t(u), et = $t(u), it = $t(l), nt = $t(s), st = $t(a), ot = $t(a), rt = $t(s), Wt((ht = e((ut = class extends m {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "popup", ht, this), i(this, "searchField", at, this), i(this, "searchFieldSprite", pt, this), i(this, "searchFieldClearBtn", mt, this), i(this, "showRunningBtn", dt, this), i(this, "showRunningLabel", ct, this), i(this, "hideSatellitesBtn", bt, this), i(this, "hideSatellitesLabel", yt, this), i(this, "buyInTipBtn", Ct, this), i(this, "buyInTipNode", gt, this), i(this, "buyInTipCloseBtn", _t, this), i(this, "microUpperVal", Bt, this), i(this, "lowLowerVal", ft, this), i(this, "lowUpperVal", It, this), i(this, "midLowerVal", Tt, this), i(this, "midUpperVal", St, this), i(this, "highLowerVal", Ft, this), i(this, "buyinOption", wt, this), i(this, "buyInBtn", Lt, this), i(this, "buyInCustomNode", Et, this), i(this, "buyInCustomSilder", vt, this), i(this, "buyInCustomFrom", Nt, this), i(this, "buyInCustomFromSprite", Pt, this), i(this, "buyInCustomTo", kt, this), i(this, "buyInCustomToSprite", Vt, this), i(this, "gameTypeOption", Ot, this), i(this, "gameBtn", Dt, this), i(this, "resetNode", At, this), i(this, "resetBtnLabel", zt, this), i(this, "confirmBtnLabel", Rt, this), i(this, "confirmBtn", xt, this), i(this, "noGameListTip", Mt, this), i(this, "btnBg_normal", Gt, this), i(this, "btnBg_selected", Ht, this), i(this, "footer", Ut, this), this._callback = null, this._buyinCustomPoint = [0, .05, .1, .2, .25, .5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3, 1e4, 2e4, 25e3, Number.MAX_VALUE], this._searchName = "", this._isShowRunning = !1, this._isHideSatellites = !1, this._isShowBuyInTip = !1, this._buyInBtnType = [0], this._buyInCustomMax = 0, this._buyInCustomFrom = 0, this._buyInCustomTo = 0, this._isClickedCustomField = !1, this._gameBtnType = [0], this._isShowResetBtn = !1, this._progressBarWidth = 0, this._isSetCustomSilder = !1, this._filterCount = 0, this._filterOpenAni = void 0, this._filterCloseAni = void 0, this._enableColor = (new d).fromHEX("#D6DDE4"), this._normalColor = (new d).fromHEX("#5B9DFF"), this.currentFormIsPopup = !1
        }
        setActive(t, e = !0) {
            t ? this.onShow(e) : this.onHide(e)
        }
        setCallback(t) {
            this._callback = t
        }
        start() {
            this.buyInCustomTo.string = ""
        }
        getSavedFilterOption() {
            let t = S.instance.createOption();
            cc_mtt.vv.ConsoleLog.log("getSavedFilterOption:", t), I.appConfig.isLandscapeLayout || (this._searchName = t.searchName), this.setSearchFieldClearBtn(), this._isShowRunning = t.showRunning, this._isHideSatellites = t.hideSatellites, this._buyInBtnType = t.buyin.map(Number), this._gameBtnType = t.gameType.map(Number), this._isShowBuyInTip = !1, this.setFilterInterface(), this._buyInCustomFrom = Number(t.buyinFrom[0] || 0), this._buyInCustomTo = Number(t.buyinTo[0] || 0), cc_mtt.vv.ConsoleLog.log("this._buyInCustomFrom:", this._buyInCustomFrom), cc_mtt.vv.ConsoleLog.log("this._buyInCustomTo:", this._buyInCustomTo), setTimeout((() => {
                this._applyValueToEditBoxText(this.buyInCustomFrom, this._buyInCustomFrom), this._applyValueToEditBoxText(this.buyInCustomTo, this._buyInCustomTo, !0)
            }), 100)
        }
        setBuyInCustomToPlaceholder() {
            this.buyInCustomTo.placeholder = F("PKWMTT.GAMELIST.FILTER.BUYIN.MAX")
        }
        onDisable() {
            I.MessageCenter.unregister(I.Enum.MessageCenterAction.onOpenPopUpMsg, this.node), I.MessageCenter.unregister(I.config.CHANGE_LANGUAGE, this.node), I.appConfig.isLandscapeLayout || (this.searchField.node.off(o.EventType.EDITING_DID_BEGAN, this.setSearchFieldBgOn, this), this.searchField.node.off(o.EventType.TEXT_CHANGED, this.setSearchFieldClearBtn, this), this.searchField.node.off(o.EventType.EDITING_DID_ENDED, this.onClickSearchField, this))
        }
        onEnable() {
            this.setBuyInCustomToPlaceholder(), I.MessageCenter.register(I.Enum.MessageCenterAction.onOpenPopUpMsg, this.onShowGeneralPopup.bind(this), this.node), I.MessageCenter.register(I.config.CHANGE_LANGUAGE, this.setBuyInCustomToPlaceholder.bind(this), this.node), I.appConfig.isLandscapeLayout || (this.searchField.node.on(o.EventType.EDITING_DID_BEGAN, this.setSearchFieldBgOn, this), this.searchField.node.on(o.EventType.TEXT_CHANGED, this.setSearchFieldClearBtn, this), this.searchField.node.on(o.EventType.EDITING_DID_ENDED, this.onClickSearchField, this))
        }
        onShowGeneralPopup(t) {
            this.currentFormIsPopup && t <= 1 || !this.currentFormIsPopup && t <= 0 || (this.buyInCustomFrom.blur(), this.buyInCustomTo.blur())
        }
        updateDelemeter() {
            let t = I.appConfig.getFilterDelemeterConfig();
            this.microUpperVal.updateVal(t.ui.microUpper, I.appConfig.getWalletConfig().defaultCurrency.type), this.lowLowerVal.updateVal(t.ui.lowLower, I.appConfig.getWalletConfig().defaultCurrency.type), this.lowUpperVal.updateVal(t.ui.lowUpper, I.appConfig.getWalletConfig().defaultCurrency.type), this.midLowerVal.updateVal(t.ui.midLower, I.appConfig.getWalletConfig().defaultCurrency.type), this.midUpperVal.updateVal(t.ui.midUpper, I.appConfig.getWalletConfig().defaultCurrency.type), this.highLowerVal.updateVal(t.ui.highLower, I.appConfig.getWalletConfig().defaultCurrency.type)
        }
        onItemClicked(t = !1) {
            let e = this.createOption();
            this._callback && this._callback(e, t)
        }
        saveFilterOption(t) {
            S.instance.setMTT_LastFilterOption(t)
        }
        onShow(t = !0) {
            t && T.playSoundClick(), this.updateDelemeter(), (this._filterOpenAni || this._filterCloseAni) && this.stopFilterTween();
            let e = .72 * this.node.height;
            e = e <= 1e3 ? 1200 : e + 200, e = Math.min(e, c.getVisibleSize().height), I.appConfig.isWebApp && this._adjustFooterForWeb(), this.popup.height = e, this.popup.setPosition(new b(0, -this.node.height, 0)), this.node.active = !0, 1 == this._isShowBuyInTip && this.onClickBuyInTipBtn(), this.node.active = !0, this._filterOpenAni = y(this.popup).to(.5, {
                position: new b(0, -100, 0)
            }).call((() => {
                cc_mtt.vv.ConsoleLog.log("filter open anim end this.groupFilterPopupNode: ", this.popup, this.popup.position), this._filterOpenAni = null, this.getSavedFilterOption(), this.onItemClicked(!0)
            })).start()
        }
        onHide(t = !0, e) {
            t && T.playSoundClose(), (this._filterOpenAni || this._filterCloseAni) && this.stopFilterTween(), this.node.active = !0, this._filterCloseAni = y(this.popup).to(.5, {
                position: new b(0, -this.node.height, 0)
            }).call((() => {
                var t;
                if (this.node.active = !1, this._filterCloseAni = null, null == (t = this.mvcView) || t.emitEvent("POPUP_ON_HIDE"), "confirm" == e) {
                    let t = this.createOption();
                    this.saveFilterOption(t)
                } else this.getSavedFilterOption();
                this.onItemClicked("confirm" == e)
            })).start()
        }
        stopFilterTween() {
            this._filterOpenAni && (this._filterOpenAni.stop(), this._filterOpenAni = null), this._filterCloseAni && (this._filterCloseAni.stop(), this._filterCloseAni = null)
        }
        onClickTopBar() {
            T.playSoundClick()
        }
        resetOptions() {
            I.appConfig.isLandscapeLayout || (this._searchName = ""), this.setSearchFieldClearBtn(), this._isShowRunning = !1, this._isHideSatellites = !1, this._buyInBtnType = [0], this._gameBtnType = [0], this._isShowBuyInTip = !1, this.setFilterInterface(), this.resetSilder(), C(this.resetNode) && (this.resetNode.active = this._isShowResetBtn), this.checkShowResetBtn(), this.onItemClicked(!1)
        }
        setFilterInterface() {
            C(this.searchField) && (this.searchField.string = this._searchName), this.setShowHideBtn(), this.setBuyinBtn(), this.setGametypeBtn(), this.buyInTipNode.active = !1
        }
        onClickReset() {
            this.resetOptions(), this.onItemClicked(I.appConfig.isLandscapeLayout)
        }
        getOption(t, e = null) {
            let i = [];
            for (let n = 0; n < t.length; n++) {
                t[n].getComponent(B).isChecked && i.push(e ? e[t[n].name] : t[n].name)
            }
            return i
        }
        createOption() {
            let t = this.searchField ? this.searchField.string : "";
            return I.appConfig.isLandscapeLayout && (t = this._searchName), {
                searchName: t,
                showRunning: this._isShowRunning,
                hideSatellites: this._isHideSatellites,
                buyin: this._buyInBtnType,
                buyinFrom: this._buyInCustomFrom,
                buyinTo: this._buyInCustomTo,
                gameType: this._gameBtnType
            }
        }
        checkShowResetBtn() {
            this._isShowResetBtn = "" != this._searchName || this._isShowRunning || this._isHideSatellites || !this._buyInBtnType.includes(0) || !this._gameBtnType.includes(0), this.setResetBtnInteractable(this._isShowResetBtn)
        }
        onClickSearchField() {
            this.searchFieldSprite.spriteFrame = this.btnBg_normal, this.searchByName(this.searchField.string)
        }
        searchByName(t) {
            this._searchName = t, this.onItemClicked(I.appConfig.isLandscapeLayout), this.checkShowResetBtn()
        }
        setSearchFieldBgOn() {
            this.searchFieldSprite.spriteFrame = this.btnBg_selected, this.setSearchFieldClearBtn()
        }
        setSearchFieldClearBtn() {
            I.appConfig.isLandscapeLayout || (this.searchFieldClearBtn.node.active = "" != this.searchField.string)
        }
        resetSearchField() {
            this.searchField.string = "", this.setSearchFieldClearBtn(), this.searchByName(this.searchField.string)
        }
        onClickShowHideBtn(t, e) {
            switch (e) {
                case "show":
                    this._isShowRunning = !this._isShowRunning;
                    break;
                case "hide":
                    this._isHideSatellites = !this._isHideSatellites
            }
            this.onItemClicked(I.appConfig.isLandscapeLayout), this.setShowHideBtn(), this.checkShowResetBtn()
        }
        setShowHideBtn() {
            this.showRunningBtn.normalSprite = this._isShowRunning ? this.btnBg_selected : this.btnBg_normal, this.hideSatellitesBtn.normalSprite = this._isHideSatellites ? this.btnBg_selected : this.btnBg_normal
        }
        onClickBuyInTipBtn() {
            this._isShowBuyInTip = !this._isShowBuyInTip, this.buyInTipNode.active = this._isShowBuyInTip, this.buyInTipBtn.isChecked = this._isShowBuyInTip, this.buyInTipCloseBtn.active = this._isShowBuyInTip
        }
        onClickBuyInBtn(t, e) {
            if (null == e) return;
            const i = Number(e);
            0 === i || 6 === i ? this._buyInBtnType = [i] : (this._buyInBtnType = this._buyInBtnType.filter((t => 0 !== t && 6 !== t)), this._buyInBtnType.includes(i) ? this._buyInBtnType = this._buyInBtnType.filter((t => t !== i)) : this._buyInBtnType.push(i)), 0 === this._buyInBtnType.length && (this._buyInBtnType = [0]), this.setBuyinBtn(), this.onItemClicked(I.appConfig.isLandscapeLayout), this.checkShowResetBtn()
        }
        setBuyinBtn() {
            for (let t = 0; t < this.buyInBtn.length; t++) {
                const e = this._buyInBtnType.includes(t),
                    i = this.buyInBtn[t];
                i.normalSprite = e ? this.btnBg_selected : this.btnBg_normal, i.node.getChildByName("Label").getComponent(u).color = e ? this._normalColor : this._enableColor
            }
            this.buyInCustomNode.active = this._buyInBtnType.includes(6), this._buyInBtnType.includes(6) && !1 === this._isSetCustomSilder ? (this.setBuyInCustomSilder(), this.resetSilder()) : this._buyInBtnType.includes(6) && !0 === this._isSetCustomSilder && this._buyInCustomFrom == this._buyinCustomPoint[0] && this._buyInCustomTo == this._buyinCustomPoint[this._buyinCustomPoint.length - 1] && this.resetSilder()
        }
        setBuyinCustomField() {
            this._isClickedCustomField || (this._isClickedCustomField || (this._buyInCustomTo = this._buyinCustomPoint[this._buyinCustomPoint.length - 1]), this._isClickedCustomField || (this._buyInCustomFrom = this._buyinCustomPoint[0]), setTimeout((() => {
                this._applyValueToEditBoxText(this.buyInCustomFrom, this._buyInCustomFrom), this._applyValueToEditBoxText(this.buyInCustomTo, this._buyInCustomTo, !0)
            }), 100), this._isClickedCustomField = !1)
        }
        onClickCustomFieldBeganFrom() {
            this.buyInCustomFrom.string = "", this.buyInCustomFromSprite.spriteFrame = this.btnBg_selected
        }
        onClickCustomFieldBeganTo() {
            this.buyInCustomTo.string = "", this.buyInCustomToSprite.spriteFrame = this.btnBg_selected
        }
        onclickBuyinCustomField() {
            const t = this.buyInCustomFrom.string.replace("$", ""),
                e = this.buyInCustomTo.string.replace("$", "");
            let i = this.isNumeric(t) ? Number(t) : this._buyInCustomFrom,
                n = this.isNumeric(e) ? Number(e) : this._buyInCustomTo;
            i < 0 && (i = 0), n < 0 && (n = i + 1), n <= i && (n = i + 1), i >= n && (i = Math.max(0, n - 1)), this._buyInCustomFrom = i, this._buyInCustomTo = n, this._applyValueToEditBoxText(this.buyInCustomFrom, this._buyInCustomFrom), this._applyValueToEditBoxText(this.buyInCustomTo, this._buyInCustomTo, !0), this._isClickedCustomField = !0, this.buyInCustomFromSprite.spriteFrame = this.btnBg_normal, this.buyInCustomToSprite.spriteFrame = this.btnBg_normal, this.onItemClicked(I.appConfig.isLandscapeLayout), this.checkShowResetBtn()
        }
        isNumeric(t) {
            return /^-?\d+(\.\d+)?$/.test(t)
        }
        onClickGameBtn(t, e) {
            if (null == e) return;
            const i = Number(e);
            0 === i ? this._gameBtnType = [i] : (this._gameBtnType = this._gameBtnType.filter((t => 0 !== t)), this._gameBtnType.includes(i) ? this._gameBtnType = this._gameBtnType.filter((t => t !== i)) : this._gameBtnType.push(i)), 0 === this._gameBtnType.length && (this._gameBtnType = [0]), this.onItemClicked(I.appConfig.isLandscapeLayout), this.setGametypeBtn(), this.checkShowResetBtn()
        }
        setGametypeBtn() {
            for (let t = 0; t < this.gameBtn.length; t++) {
                const e = this._gameBtnType.includes(t),
                    i = this.gameBtn[t];
                i.normalSprite = e ? this.btnBg_selected : this.btnBg_normal, i.node.getChildByName("Label").getComponent(u).color = e ? this._normalColor : this._enableColor
            }
        }
        setBuyInCustomSilder() {
            cc_mtt.vv.ConsoleLog.log("setBuyInCustomSilder"), this._progressBarWidth = this.buyInCustomSilder.progressBar.getContentSize().x, this.buyInCustomSilder.startBtn.node.on(s.EventType.TOUCH_MOVE, (t => {
                this.buyInCustomSilder.onDraggingStartButton(t, ((t, e) => {
                    cc_mtt.vv.ConsoleLog.log("onDraggingStartButton: ", t, e), this.checkCustomStartBtnPos(t) && this.updateFilledBar(t, e, !0, "start")
                }))
            }), this), this.buyInCustomSilder.startBtn.node.on(s.EventType.TOUCH_END, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.startBtn.node.on(s.EventType.TOUCH_CANCEL, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.endBtn.node.on(s.EventType.TOUCH_MOVE, (t => {
                this.buyInCustomSilder.onDraggingEndButton(t, ((t, e) => {
                    this.updateFilledBar(t, e, !0, "end"), cc_mtt.vv.ConsoleLog.log("onDraggingEndButton: ", t, e)
                }))
            }), this), this.buyInCustomSilder.endBtn.node.on(s.EventType.TOUCH_END, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.endBtn.node.on(s.EventType.TOUCH_CANCEL, this.onCustomSilderEndDrag, this), cc_mtt.vv.ConsoleLog.log("this.buyInCustomSilder: ", this.buyInCustomSilder), this._isSetCustomSilder = !0
        }
        getCustomSilderClosestPoint(t) {
            let e = this._buyinCustomPoint.length,
                i = this._progressBarWidth / (e - 1);
            return Math.round(t / i) * i
        }
        getCustomSilderClosestStep(t) {
            let e = this._buyinCustomPoint.length,
                i = this._progressBarWidth / (e - 1);
            return Math.round(t / i)
        }
        checkCustomStartBtnPos(t) {
            this.getCustomSilderClosestStep(t);
            let e = this._progressBarWidth / (this._buyinCustomPoint.length - 1);
            return Math.round(t / e) < 25
        }
        updateFilledBar(t, e, i = !0, n = "end") {
            cc_mtt.vv.ConsoleLog.log("updateFilledBar: ", t, e);
            let s = this.buyInCustomSilder.startBtn.node.position.x,
                o = this.buyInCustomSilder.endBtn.node.position.x;
            0 != t && (s = this.getCustomSilderClosestPoint(t)), 0 != e && (o = this.getCustomSilderClosestPoint(e));
            let r = this.getCustomSilderClosestStep(s),
                l = this.getCustomSilderClosestStep(o);
            "end" === n && l <= r ? (l = r + 1, o = this.getCustomerSliderPosForStep(l)) : "start" === n && r >= l && (r = l - 1, s = this.getCustomerSliderPosForStep(r));
            let u = o - s;
            this.buyInCustomSilder.filledBar.width = u, this.buyInCustomSilder.filledBar.setPosition(new b(s, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.startBtn.node.setPosition(new b(s, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.endBtn.node.setPosition(new b(o, this.buyInCustomSilder.filledBar.position.y, 0)), i && this.updateCustomField(s, o)
        }
        getClosestStep(t) {
            for (let e = 0; e < this._buyinCustomPoint.length; e++)
                if (t <= this._buyinCustomPoint[e]) return e;
            return this._buyinCustomPoint.length - 1
        }
        getCustomerSliderPosForStep(t) {
            return this._progressBarWidth / (this._buyinCustomPoint.length - 1) * t
        }
        updateCustomField(t, e) {
            cc_mtt.vv.ConsoleLog.log("updateCustomField: ", t, e), this._buyInCustomFrom = this._buyinCustomPoint[this.getCustomSilderClosestStep(t)], this._buyInCustomTo = this._buyinCustomPoint[this.getCustomSilderClosestStep(e)], this._buyInCustomFrom != this.buyInCustomFrom.string && (this._applyValueToEditBoxText(this.buyInCustomFrom, this._buyInCustomFrom), this.onclickBuyinCustomField()), this._buyInCustomTo != this.buyInCustomTo.string && (this._applyValueToEditBoxText(this.buyInCustomTo, this._buyInCustomTo, !0), this.onclickBuyinCustomField())
        }
        onCustomSilderEndDrag(t) {
            cc_mtt.vv.ConsoleLog.log("onCustomSilderEndDrag"), this.onclickBuyinCustomField()
        }
        resetSilder() {
            this.buyInCustomSilder.filledBar.width = this._progressBarWidth, this.buyInCustomSilder.endBtn.node.setPosition(new b(this._progressBarWidth, this.buyInCustomSilder.endBtn.node.position.y, 0)), this.buyInCustomSilder.filledBar.setPosition(new b(0, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.startBtn.node.setPosition(new b(0, this.buyInCustomSilder.startBtn.node.position.y, 0)), this._buyInCustomFrom = this._buyinCustomPoint[0], this._buyInCustomTo = this._buyinCustomPoint[this._buyinCustomPoint.length - 1], this._applyValueToEditBoxText(this.buyInCustomFrom, this._buyInCustomFrom), this._applyValueToEditBoxText(this.buyInCustomTo, this._buyInCustomTo, !0), this._isClickedCustomField = !1
        }
        setShowMTTBtnCount(t) {
            this._filterCount = t || 0;
            let e = String(this._filterCount);
            this.confirmBtnLabel.string = F("PKWMTT.GAMELIST.FILTER.BUTTON.SHOW") + ` (${e} MTT)`, this.noGameListTip.active = 0 == this._filterCount, this.setConfirmBtnInteractable(0 != this._filterCount)
        }
        setConfirmBtnInteractable(t) {
            C(this.confirmBtn) && (this.confirmBtn.interactable = t)
        }
        setResetBtnInteractable(t) {
            C(this.resetNode) && (this.resetNode.interactable = t)
        }
        _applyValueToEditBoxText(t, e, i = !1) {
            if (i) {
                const i = e === Number.MAX_VALUE;
                t.string = i ? "" : `${e}`, t.textLabel.string = i ? "" : `$${e}`
            } else t.string = `${e}`, t.textLabel.string = `$${t.string}`
        }
        _adjustFooterForWeb() {
            if (!I.appConfig.isWebApp || !this.footer) return;
            const t = this.footer.addOrGetComponent(g);
            t.isAlignBottom = !0, t.bottom = 120, t.updateAlignment()
        }
    }).prototype, "popup", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(ut.prototype, "searchField", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ut.prototype, "searchFieldSprite", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ut.prototype, "searchFieldClearBtn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ut.prototype, "showRunningBtn", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ut.prototype, "showRunningLabel", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ut.prototype, "hideSatellitesBtn", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ut.prototype, "hideSatellitesLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ut.prototype, "buyInTipBtn", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ut.prototype, "buyInTipNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ut.prototype, "buyInTipCloseBtn", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ut.prototype, "microUpperVal", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ut.prototype, "lowLowerVal", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(ut.prototype, "lowUpperVal", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ut.prototype, "midLowerVal", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ut.prototype, "midUpperVal", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(ut.prototype, "highLowerVal", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ut.prototype, "buyinOption", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ut.prototype, "buyInBtn", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Et = e(ut.prototype, "buyInCustomNode", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ut.prototype, "buyInCustomSilder", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(ut.prototype, "buyInCustomFrom", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ut.prototype, "buyInCustomFromSprite", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ut.prototype, "buyInCustomTo", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(ut.prototype, "buyInCustomToSprite", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(ut.prototype, "gameTypeOption", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ut.prototype, "gameBtn", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), At = e(ut.prototype, "resetNode", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(ut.prototype, "resetBtnLabel", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(ut.prototype, "confirmBtnLabel", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(ut.prototype, "confirmBtn", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(ut.prototype, "noGameListTip", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ut.prototype, "btnBg_normal", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(ut.prototype, "btnBg_selected", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(ut.prototype, "footer", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = ut)) || lt));
    n._RF.pop()
}
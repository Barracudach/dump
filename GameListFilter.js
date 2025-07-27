import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./cv.js";
import * as c from "./CurrencyValue.js";
import * as B from "./mttGameListFilterSilder.js";
import * as _ from "./MttPrefabPkw.js";
import * as I from "./Translator.js";

function main() {
    var f, T, S, w, F, L, E, v, N, V, H, z, k, P, A, M, U, W, D, O, R, X, $, G, x, K, Y, j, q, J, Q, Z, tt, it, et, nt, ot, st, rt, ut, lt, at, ht, mt, pt, bt, yt, dt, Ct, gt, ct, Bt, _t, It, ft, Tt, St, wt, Ft, Lt, Et, vt, Nt, Vt, Ht, zt, kt, Pt;
    n._RF.push({}, "310c2IYaX1ONIBixppjSVi5", "GameListFilter", void 0);
    const {
        ccclass: At,
        property: Mt
    } = p;
    t("GAME_OPTION", {
        NLH: "NLH",
        SD: "SHORT_DECK",
        Omaha: "OMAHA"
    });
    t("default", (f = Mt(o), T = Mt(o), S = Mt(s), w = Mt(o), F = Mt(o), L = Mt(o), E = Mt(r), v = Mt(u), N = Mt(r), V = Mt(u), H = Mt(l), z = Mt(o), k = Mt(o), P = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), A = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), M = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), U = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), W = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), D = Mt({
        group: {
            name: "buyInTipValue"
        },
        type: c
    }), O = Mt(o), R = Mt(r), X = Mt(o), $ = Mt(B), G = Mt(a), x = Mt(h), K = Mt(a), Y = Mt(h), j = Mt(o), q = Mt(r), J = Mt(r), Q = Mt(r), Z = Mt(m), tt = Mt(m), At((nt = i((et = class extends b {
        constructor(...t) {
            super(...t), e(this, "filterLayout", nt, this), e(this, "optionContainerNode", ot, this), e(this, "optionContainerLayout", st, this), e(this, "showHideContainer", rt, this), e(this, "buyinContainer", ut, this), e(this, "gameContainer", lt, this), e(this, "showRunningBtn", at, this), e(this, "showRunningLabel", ht, this), e(this, "hideSatellitesBtn", mt, this), e(this, "hideSatellitesLabel", pt, this), e(this, "buyInTipBtn", bt, this), e(this, "buyInTipNode", yt, this), e(this, "buyInTipCloseBtn", dt, this), e(this, "microUpperVal", Ct, this), e(this, "lowLowerVal", gt, this), e(this, "lowUpperVal", ct, this), e(this, "midLowerVal", Bt, this), e(this, "midUpperVal", _t, this), e(this, "highLowerVal", It, this), e(this, "buyinOption", ft, this), e(this, "buyInBtn", Tt, this), e(this, "buyInCustomNode", St, this), e(this, "buyInCustomSilder", wt, this), e(this, "buyInCustomFrom", Ft, this), e(this, "buyInCustomFromSprite", Lt, this), e(this, "buyInCustomTo", Et, this), e(this, "buyInCustomToSprite", vt, this), e(this, "gameTypeOption", Nt, this), e(this, "gameBtn", Vt, this), e(this, "resetBtn", Ht, this), e(this, "closeBtn", zt, this), e(this, "btnBg_normal", kt, this), e(this, "btnBg_selected", Pt, this), this._callback = null, this._buyinCustomPoint = [0, .05, .1, .2, .25, .5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3, 1e4, 2e4, 25e3, Number.MAX_VALUE], this._isShowRunning = !1, this._isHideSatellites = !1, this._isShowBuyInTip = !1, this._buyInBtnType = [0], this._buyInCustomFrom = 0, this._buyInCustomTo = 0, this._isClickedCustomField = !1, this._gameBtnType = [0], this._progressBarWidth = 0
        }
        setActive(t) {
            t ? this.onShow() : this.onHide()
        }
        setCallback(t) {
            this._callback = t
        }
        start() {
            this.resizeLayout(), this.setBuyInCustomSilder(), this.setFilterOption()
        }
        resizeLayout() {
            cc_mtt.vv.ConsoleLog.log("resizeLayout");
            const t = this.optionContainerLayout.spacingX,
                i = this.showHideContainer.getComponent(y).width,
                e = this.buyinContainer.getComponent(y).width,
                n = this.gameContainer.getComponent(y).width;
            let o = i + t + e + t + n;
            const s = this.optionContainerNode.getComponent(y).width;
            if (cc_mtt.vv.ConsoleLog.log("containerPadding: ", t), cc_mtt.vv.ConsoleLog.log("showHideContainerWidth: ", i), cc_mtt.vv.ConsoleLog.log("buyinContainerWidth: ", e), cc_mtt.vv.ConsoleLog.log("gameContainerWidth: ", n), cc_mtt.vv.ConsoleLog.log("containerWidth: ", o), cc_mtt.vv.ConsoleLog.log("optionContainerWidth: ", s), o > s) {
                cc_mtt.vv.ConsoleLog.log("if (containerWidth > optionContainerWidth)");
                const t = s / o;
                cc_mtt.vv.ConsoleLog.log("scale: ", t), this.optionContainerNode.setScale(new d(t, t, 1))
            }
        }
        setFilterOption() {
            let t = this.convertStringsToNumbers(_.instance._filterOption);
            this._isShowRunning = t.showRunning, this._isHideSatellites = t.hideSatellites, this._buyInBtnType = t.buyin, this._gameBtnType = t.gameType, this.setShowHideBtn(), this.setBuyinBtn(), this.setGametypeBtn(), this.resetSilder(), this.buyInTipNode && (this.buyInTipNode.active = !1)
        }
        convertStringsToNumbers(t) {
            return Object.keys(t).reduce(((i, e) => (Array.isArray(t[e]) ? i[e] = t[e].map((t => "string" != typeof t || isNaN(Number(t)) ? t : Number(t))) : "string" != typeof t[e] || isNaN(Number(t[e])) ? i[e] = t[e] : i[e] = Number(t[e]), i)), {})
        }
        updateDelemeter() {
            let t = g.appConfig.getFilterDelemeterConfig();
            this.microUpperVal.updateVal(t.ui.microUpper, g.appConfig.getWalletConfig().defaultCurrency.type), this.lowLowerVal.updateVal(t.ui.lowLower, g.appConfig.getWalletConfig().defaultCurrency.type), this.lowUpperVal.updateVal(t.ui.lowUpper, g.appConfig.getWalletConfig().defaultCurrency.type), this.midLowerVal.updateVal(t.ui.midLower, g.appConfig.getWalletConfig().defaultCurrency.type), this.midUpperVal.updateVal(t.ui.midUpper, g.appConfig.getWalletConfig().defaultCurrency.type), this.highLowerVal.updateVal(t.ui.highLower, g.appConfig.getWalletConfig().defaultCurrency.type)
        }
        onItemClicked() {
            g.AudioMgr.playButtonSound("tab.mp3");
            let t = this.createOption();
            g.appConfig.isLandscapeLayout && this._callback && this._callback(t)
        }
        onShow() {
            this.updateDelemeter(), this.resizeLayout()
        }
        onHide() {}
        onClickClose() {
            g.AudioMgr.playButtonSound("close.mp3"), this.onHide()
        }
        resetOptions() {
            this._isShowRunning = !1, this._isHideSatellites = !1, this._buyInBtnType = [0], this._gameBtnType = [0], this._isShowBuyInTip = !1, this.setShowHideBtn(), this.setBuyinBtn(), this.setGametypeBtn(), this.resetSilder(), this.buyInTipNode && (this.buyInTipNode.active = !1), this.onItemClicked()
        }
        closeFilter() {
            _.instance.playFilterAni(!1)
        }
        createOption() {
            return {
                showRunning: this._isShowRunning,
                hideSatellites: this._isHideSatellites,
                buyin: this._buyInBtnType,
                buyinFrom: this._buyInCustomFrom,
                buyinTo: this._buyInCustomTo,
                gameType: this._gameBtnType
            }
        }
        onClickShowHideBtn(t, i) {
            switch (i) {
                case "show":
                    this._isShowRunning = !this._isShowRunning;
                    break;
                case "hide":
                    this._isHideSatellites = !this._isHideSatellites
            }
            this.onItemClicked(), this.setShowHideBtn()
        }
        setShowHideBtn() {
            this.showRunningBtn.normalSprite = this._isShowRunning ? this.btnBg_selected : this.btnBg_normal, this.showRunningLabel.color = this._isShowRunning ? (new C).fromHEX("#5B9DFF") : (new C).fromHEX("#E1E5EA"), this.hideSatellitesBtn.normalSprite = this._isHideSatellites ? this.btnBg_selected : this.btnBg_normal, this.hideSatellitesLabel.color = this._isHideSatellites ? (new C).fromHEX("#5B9DFF") : (new C).fromHEX("#E1E5EA")
        }
        onClickBuyInTipBtn() {
            this.updateDelemeter(), this._isShowBuyInTip = !this._isShowBuyInTip, this.buyInTipNode.active = this._isShowBuyInTip, this.buyInTipBtn.isChecked = this._isShowBuyInTip, this.buyInTipCloseBtn.active = this._isShowBuyInTip
        }
        onClickBuyInBtn(t, i) {
            if (null == i) return;
            const e = Number(i);
            0 === e || 6 === e ? this._buyInBtnType = [e] : (this._buyInBtnType = this._buyInBtnType.filter((t => 0 !== t && 6 !== t)), this._buyInBtnType.includes(e) ? this._buyInBtnType = this._buyInBtnType.filter((t => t !== e)) : this._buyInBtnType.push(e)), 0 === this._buyInBtnType.length && (this._buyInBtnType = [0]), this.onItemClicked(), this.setBuyinBtn()
        }
        setBuyinBtn() {
            for (let t = 0; t < this.buyInBtn.length; t++) {
                const i = this._buyInBtnType.includes(t),
                    e = this.buyInBtn[t];
                e.normalSprite = i ? this.btnBg_selected : this.btnBg_normal, e.node.getChildByName("Label").getComponent(u).color = i ? (new C).fromHEX("#5B9DFF") : (new C).fromHEX("#E1E5EA")
            }
            this.buyInCustomNode.active = this._buyInBtnType.includes(6), this.resetSilder()
        }
        setBuyinCustomField() {
            this._isClickedCustomField || (this._isClickedCustomField || (this._buyInCustomTo = this._buyinCustomPoint[this._buyinCustomPoint.length - 1]), this._isClickedCustomField || (this._buyInCustomFrom = this._buyinCustomPoint[0]), setTimeout((() => {
                this.buyInCustomFrom.string = `$${this._buyInCustomFrom}`, this.buyInCustomTo.string = this._buyInCustomTo === Number.MAX_VALUE ? I("PKWMTT.GAMELIST.FILTER.BUYIN.MAX") : `$${this._buyInCustomTo}`
            }), 100), this._isClickedCustomField = !1)
        }
        onClickCustomFieldBeganFrom() {
            this.buyInCustomFrom.string = "", this.buyInCustomFromSprite.spriteFrame = this.btnBg_selected
        }
        onClickCustomFieldBeganTo() {
            this.buyInCustomTo.string = "", this.buyInCustomToSprite.spriteFrame = this.btnBg_selected
        }
        onclickBuyinCustomField() {
            const t = this.buyInCustomFrom.string,
                i = this.buyInCustomTo.string;
            this.isNumeric(t) && (this._buyInCustomFrom = Number(this.buyInCustomFrom.string)), this.isNumeric(i) && (this._buyInCustomTo = Number(this.buyInCustomTo.string)), this.buyInCustomFrom.string = `$${this._buyInCustomFrom}`, this.buyInCustomTo.string = this._buyInCustomTo === Number.MAX_VALUE ? I("PKWMTT.GAMELIST.FILTER.BUYIN.MAX") : `$${this._buyInCustomTo}`, this._isClickedCustomField = !0, this.buyInCustomFromSprite.spriteFrame = this.btnBg_normal, this.buyInCustomToSprite.spriteFrame = this.btnBg_normal, this.onItemClicked()
        }
        isNumeric(t) {
            return /^[0-9]+$/.test(t)
        }
        onClickGameBtn(t, i) {
            if (null == i) return;
            const e = Number(i);
            0 === e ? this._gameBtnType = [e] : (this._gameBtnType = this._gameBtnType.filter((t => 0 !== t)), this._gameBtnType.includes(e) ? this._gameBtnType = this._gameBtnType.filter((t => t !== e)) : this._gameBtnType.push(e)), 0 === this._gameBtnType.length && (this._gameBtnType = [0]), this.onItemClicked(), this.setGametypeBtn()
        }
        setGametypeBtn() {
            for (let t = 0; t < this.gameBtn.length; t++) {
                const i = this._gameBtnType.includes(t),
                    e = this.gameBtn[t];
                e.normalSprite = i ? this.btnBg_selected : this.btnBg_normal, e.node.getChildByName("Label").getComponent(u).color = i ? (new C).fromHEX("#5B9DFF") : (new C).fromHEX("#E1E5EA")
            }
        }
        setBuyInCustomSilder() {
            cc_mtt.vv.ConsoleLog.log("setBuyInCustomSilder"), this._progressBarWidth = this.buyInCustomSilder.progressBar.width, this.buyInCustomSilder.startBtn.node.on(o.EventType.TOUCH_MOVE, (t => {
                this.buyInCustomSilder.onDraggingStartButton(t, ((t, i) => {
                    cc_mtt.vv.ConsoleLog.log("onDraggingStartButton: ", t, i), this.checkCustomStartBtnPos(t) && this.updateFilledBar(t, i)
                }))
            }), this), this.buyInCustomSilder.startBtn.node.on(o.EventType.TOUCH_END, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.startBtn.node.on(o.EventType.TOUCH_CANCEL, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.endBtn.node.on(o.EventType.TOUCH_MOVE, (t => {
                this.buyInCustomSilder.onDraggingEndButton(t, ((t, i) => {
                    cc_mtt.vv.ConsoleLog.log("onDraggingStartButton: ", t, i), this.updateFilledBar(t, i)
                }))
            }), this), this.buyInCustomSilder.endBtn.node.on(o.EventType.TOUCH_END, this.onCustomSilderEndDrag, this), this.buyInCustomSilder.endBtn.node.on(o.EventType.TOUCH_CANCEL, this.onCustomSilderEndDrag, this), cc_mtt.vv.ConsoleLog.log("this.buyInCustomSilder: ", this.buyInCustomSilder)
        }
        getCustomSilderClosestPoint(t) {
            let i = this._buyinCustomPoint.length,
                e = this._progressBarWidth / (i - 1);
            return Math.round(t / e) * e
        }
        getCustomSilderClosestStep(t) {
            let i = this._buyinCustomPoint.length,
                e = this._progressBarWidth / (i - 1);
            return Math.round(t / e)
        }
        checkCustomStartBtnPos(t) {
            this.getCustomSilderClosestStep(t);
            let i = this._progressBarWidth / (this._buyinCustomPoint.length - 1);
            return Math.round(t / i) < 25
        }
        updateFilledBar(t, i) {
            cc_mtt.vv.ConsoleLog.log("updateFilledBar: ", t, i);
            let e = this.buyInCustomSilder.startBtn.node.position.x,
                n = this.buyInCustomSilder.endBtn.node.position.x;
            0 != t && (e = this.getCustomSilderClosestPoint(t)), 0 != i && (n = this.getCustomSilderClosestPoint(i));
            let o = this._progressBarWidth;
            0 != t && (o = this._progressBarWidth - e - (this._progressBarWidth - n)), 0 != i && (o = n - e), this.buyInCustomSilder.filledBar.width = o, this.buyInCustomSilder.filledBar.setPosition(new d(e, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.startBtn.node.setPosition(new d(e, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.endBtn.node.setPosition(new d(n, this.buyInCustomSilder.filledBar.position.y, 0)), this.updateCustomField(e, n)
        }
        updateCustomField(t, i) {
            cc_mtt.vv.ConsoleLog.log("updateCustomField: ", t, i), this._buyInCustomFrom = this._buyinCustomPoint[this.getCustomSilderClosestStep(t)], this._buyInCustomTo = this._buyinCustomPoint[this.getCustomSilderClosestStep(i)], this.buyInCustomFrom.string = `$${this._buyInCustomFrom}`, this.buyInCustomTo.string = this._buyInCustomTo === Number.MAX_VALUE ? I("PKWMTT.GAMELIST.FILTER.BUYIN.MAX") : `$${this._buyInCustomTo}`
        }
        onCustomSilderEndDrag(t) {
            cc_mtt.vv.ConsoleLog.log("onCustomSilderEndDrag"), this.onclickBuyinCustomField()
        }
        resetSilder() {
            this.buyInCustomSilder.filledBar.width = this._progressBarWidth, this.buyInCustomSilder.endBtn.node.setPosition(new d(this._progressBarWidth, this.buyInCustomSilder.endBtn.node.position.y, 0)), this.buyInCustomSilder.filledBar.setPosition(new d(0, this.buyInCustomSilder.filledBar.position.y, 0)), this.buyInCustomSilder.startBtn.node.setPosition(new d(0, this.buyInCustomSilder.startBtn.node.position.y, 0)), this._buyInCustomFrom = this._buyinCustomPoint[0], this._buyInCustomTo = this._buyinCustomPoint[this._buyinCustomPoint.length - 1], this.buyInCustomFrom.string = `$${this._buyInCustomFrom}`, this.buyInCustomTo.string = this._buyInCustomTo === Number.MAX_VALUE ? I("PKWMTT.GAMELIST.FILTER.BUYIN.MAX") : `$${this._buyInCustomTo}`, this._isClickedCustomField = !1
        }
    }).prototype, "filterLayout", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = i(et.prototype, "optionContainerNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = i(et.prototype, "optionContainerLayout", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = i(et.prototype, "showHideContainer", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = i(et.prototype, "buyinContainer", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = i(et.prototype, "gameContainer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = i(et.prototype, "showRunningBtn", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = i(et.prototype, "showRunningLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = i(et.prototype, "hideSatellitesBtn", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = i(et.prototype, "hideSatellitesLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = i(et.prototype, "buyInTipBtn", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = i(et.prototype, "buyInTipNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = i(et.prototype, "buyInTipCloseBtn", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = i(et.prototype, "microUpperVal", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = i(et.prototype, "lowLowerVal", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = i(et.prototype, "lowUpperVal", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = i(et.prototype, "midLowerVal", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = i(et.prototype, "midUpperVal", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = i(et.prototype, "highLowerVal", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = i(et.prototype, "buyinOption", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = i(et.prototype, "buyInBtn", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), St = i(et.prototype, "buyInCustomNode", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = i(et.prototype, "buyInCustomSilder", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = i(et.prototype, "buyInCustomFrom", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = i(et.prototype, "buyInCustomFromSprite", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = i(et.prototype, "buyInCustomTo", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = i(et.prototype, "buyInCustomToSprite", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = i(et.prototype, "gameTypeOption", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = i(et.prototype, "gameBtn", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ht = i(et.prototype, "resetBtn", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = i(et.prototype, "closeBtn", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = i(et.prototype, "btnBg_normal", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = i(et.prototype, "btnBg_selected", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = et)) || it));
    n._RF.pop()
}
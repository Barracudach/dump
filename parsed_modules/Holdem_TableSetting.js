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
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as B from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./Holdem_Basic_Item.js";
import * as T from "./mttconfig.js";
import * as b from "./mttconfig.js";
import * as _ from "./ToggleSwitch.js";
import * as M from "./MultipleGame.js";
import * as y from "./MultipleGame.js";
import * as P from "./MTTConnector.js";
import * as k from "./PotSettingBtn.js";
import * as E from "./ThemeSystem.js";
import * as O from "./cv.js";
import * as v from "./AppConfig.js";
import * as x from "./CardFrontItemHandler.js";
import * as D from "./Pb.js";
import * as R from "./Translator.js";
import * as L from "./ColorSystemType.js";
import * as I from "./ColorSystemTypeOther.js";
import * as F from "./AnalyticsHandler.js";
import * as w from "./Enum.js";
import * as N from "./Enum.js";
import * as A from "./TableBgItemHandlerMobile.js";

function main() {
    var H, G, V, z, W, U, J, Y, K, X, j, q, Z, Q, $, tt, et, it, nt, ot, at, rt, st, lt, ct, ht, ut, gt, dt, mt, pt, St, ft, Bt, Ct, Tt, bt, _t, yt, Mt, Pt, kt, Et, Ot, vt, xt;
    n._RF.push({}, "3e125ufy0hLCbPZfq30Wudd", "Holdem_TableSetting", void 0);
    const {
        ccclass: Dt,
        property: Rt
    } = u;
    let Lt = t("BetRange", Dt(H = class {
        constructor() {
            this.Min = void 0, this.Max = void 0, this.Step = void 0
        }
        BetRange() {
            this.Min = 0, this.Max = 0, this.Step = 0
        }
    }) || H);
    const It = t("potDefaultSetting", {
            numerator: [50, 67, 100, 34, 50, 67, 100, 120],
            denominator: [100, 100, 100, 100, 100, 100, 100, 100],
            isMax: !0
        }),
        Ft = t("potOMHDefaultSetting", {
            numerator: [34, 50, 100, 25, 50, 67, 75, 100],
            denominator: [100, 100, 100, 100, 100, 100, 100, 100],
            isMax: !0
        }),
        Nt = t("potSetRange", {
            min: [10, 67, 100, 10, 50, 67, 100, 120],
            max: [66, 99, 200, 49, 66, 99, 119, 200],
            min_omh: [10, 35, 68, 10, 30, 51, 68, 80],
            max_omh: [34, 67, 100, 29, 50, 67, 79, 100]
        });
    let wt = t("HOLDEM_DATA_POINT", function(t) {
        return t[t.CURRENCY = 0] = "CURRENCY", t[t.BB = 1] = "BB", t
    }({}));
    t("Holdem_TableSetting", (G = Rt(o), V = Rt(a), z = Rt(a), W = Rt(a), U = Rt(a), J = Rt(a), Y = Rt(a), K = Rt(a), X = Rt(r), j = Rt(s), q = Rt(a), Z = Rt([l]), Q = Rt(a), $ = Rt(c), tt = Rt(c), et = Rt(c), it = Rt(_), nt = Rt(a), ot = Rt(h), at = Rt(h), rt = Rt([a]), Dt((ct = e((lt = class extends C {
        constructor(...t) {
            super(...t), this.POKER_KING_TABLE_MTT_INDEX = 6, this.propagateTogglesEvents = !0, i(this, "autoFocusSwitchToggle", ct, this), i(this, "tabTittle", ht, this), i(this, "content", ut, this), i(this, "cardFace", gt, this), i(this, "cardBack", dt, this), i(this, "tableBack", mt, this), i(this, "potSet", pt, this), i(this, "potButtons", St, this), i(this, "potSlide", ft, this), i(this, "sliderHandle", Bt, this), i(this, "nd_slider_progress", Ct, this), i(this, "buttonOnOff", Tt, this), i(this, "nd_customize", bt, this), i(this, "minTxt", _t, this), i(this, "maxTxt", yt, this), i(this, "percentTxt", Mt, this), i(this, "soundEffect", Pt, this), i(this, "customBetSettingsTabButton", kt, this), i(this, "cardFrontItemPrefab", Et, this), i(this, "tableBgItemPrefab", Ot, this), i(this, "dataPointNodes", vt, this), this._currentDataPoint = 0, this.tempSetting = null, this._currentBg = 0, this._currentCardFace = 0, this._currentCardBack = 0, this.isWPT = !1, this.isOmaha = !1, this.isButton3 = !1, this.currBetBtn = void 0, this.index = 0, i(this, "LOADBARWIDTH", xt, this), this.onToggleSoundEffect = () => {
                const t = this.soundEffect.getValueFromLocalStorage(!0);
                y.instance.setBlockAllAudioPlayer(!t), O.tools.setGameplaySoundEffect(t)
            }
        }
        onload() {
            this.customBetSettingsTabButton.active = O.appConfig.getGameConfig().gameCustomBetSettingsEnabled
        }
        initTableBackground() {
            let t = v.Instance.getGameConfig().tableList.length;
            for (let e = 0; e < t; e++) {
                let t = g(this.tableBgItemPrefab);
                this.tableBack.addChild(t);
                const i = t.getComponent(A);
                i && i.initialize(this.node, e, "Holdem_TableSetting", "onClickTableBack")
            }
        }
        getBgIdx() {
            let t = T.getLocalStorageItem(T.key_mttBgColorSetting, 1);
            return (this.isWPT || v.Instance.isWPTO) && (t = T.getLocalStorageItem(T.key_wptBgColorSetting, 0)), t
        }
        onEnable() {
            this.loadStateFromCache()
        }
        initLocalSetting() {
            var t, e;
            (null == (t = this.holdemRoom) ? void 0 : t.specialTournamentType) !== N.None && (null == (e = this.tabTittle) || null == (e = e.children) ? void 0 : e.length) > 1 ? (this.tabTittle.children[0].active = !1, this.setTab(1)) : this.setTab(0), this.holdemRoom.isWPT && (this.isWPT = !0), this.initTableBackground(), this.initCardStyles(), this.isOmaha = this.holdemRoom._gameViewType == b.MTT_GAME_MODE.OMAHA;
            let i = this.isOmaha ? T.key_customOMHPotButtons1 : T.key_customPotButtons1,
                n = d.localStorage.getItem(i);
            n && "null" !== n && "undefined" != n ? this.tempSetting = JSON.parse(d.localStorage.getItem(i)) : this.isOmaha ? this.tempSetting = JSON.parse(JSON.stringify(Ft)) : this.tempSetting = JSON.parse(JSON.stringify(It));
            let o = this.getBgIdx();
            this.setBackground(o), this.setCardBack(+(d.localStorage.getItem(T.key_cardBackSetting) ?? O.appConfig.getGameConfig().defaultCardBackSetting)), this._currentCardFace = +d.localStorage.getItem(T.key_cardFaceSetting);
            let r = v.Instance.getGameConfig().cardFaceList;
            r && r.length && this._currentCardFace >= r.length && (this._currentCardFace = 0, this.saveCardFrontToLocalStorage(0)), this.setCardFace(this._currentCardFace), this.soundEffect.init(T.key_enableSoundEffect, !0, this.onToggleSoundEffect), this.potButtons.children.forEach((t => {
                t.children.forEach((t => {
                    t.on(a.EventType.TOUCH_END, this.onChangeBetHander.bind(this))
                }))
            }));
            let s = T.getLocalStorageItem(T.key_customPotSet, 0);
            this.onShowButtons(null, 0 == s ? 3 : 5), this._currentDataPoint = 0, this.holdemRoom && this.holdemRoom.store && (void 0 === cc_mtt.vv.DataManager.listCoinModeTableSetMtt[this.holdemRoom.store.tournamentId] || null === cc_mtt.vv.DataManager.listCoinModeTableSetMtt[this.holdemRoom.store.tournamentId] ? this._currentDataPoint = O.tools.isGameplayBBChoice() ? 1 : 0 : this._currentDataPoint = cc_mtt.vv.DataManager.getDataPointInTableMtt(this.holdemRoom.store.tournamentId));
            let l = this.dataPointNodes[0].getComponentsInChildren(c);
            const h = O.appConfig.getWalletConfig().getCurrencyDataPointMTT();
            l.forEach((t => t.string = h));
            let u = this.dataPointNodes[1].getComponentsInChildren(c);
            const g = O.appConfig.getWalletConfig().getConverterDataPointMTT(this.getGameMode() == D.commonProto.MTT_GAME_MODE.SHORT_DECK);
            u.forEach((t => t.string = g)), this.updateDataPoint(!1), this.sliderHandle.node.on(a.EventType.TOUCH_START, this.onTouchStart, this), this.sliderHandle.node.on(a.EventType.TOUCH_END, this.onTouchEnd, this), this.sliderHandle.node.on(a.EventType.TOUCH_CANCEL, this.onTouchEnd, this), O.appConfig.isLandscapeLayout || this.autoFocusSwitchToggle.node.on("toggle", this.onAutoFocusSwitchToggled, this)
        }
        loadStateFromCache() {
            this.propagateTogglesEvents = !1, O.appConfig.isLandscapeLayout || (this.autoFocusSwitchToggle.isChecked = O.tools.isAutoFocusOnMobile()), this.propagateTogglesEvents = !0
        }
        onAutoFocusSwitchToggled(t) {
            this.propagateTogglesEvents && (O.AudioMgr.playButtonSound("button_click.mp3"), O.tools.setAutofocusOnMobile(t.isChecked), t.isChecked || O.popUp.showMsgI18n({
                txt: "Setting_AutoFocus_Toggle_popup_text",
                msgType: O.Enum.ToastType.ToastTypeWarning,
                sureLabel: "OK"
            }))
        }
        setTab(t) {
            this.tabTittle.children.forEach(((e, i) => {
                cc_mtt.vv.ConsoleLog.log("TableSetting setTab", i, t);
                let n = i == t;
                e.getComponent(m) && (e.getComponent(m).color = n ? P.instance.selfSettingMenuON : P.instance.selfSettingMenuOFF), this.setCursorActive(e, n);
                this.content.children[i].active = n
            }))
        }
        initCardStyles() {
            let t = v.Instance.getGameConfig().cardFaceList;
            for (let e = 0; e < t.length; e++) {
                let i = t[e],
                    n = g(this.cardFrontItemPrefab);
                n.getComponent(x).initialize(this.node, i, "Holdem_TableSetting", "onClickCardFace"), this.cardFace.addChild(n)
            }
        }
        setCursorActive(t, e) {
            var i;
            p("hightlight", t).active = e, null == (i = p("cursor", t)) || i.getComponent(E).setColorScheme(L.Other, e ? I.WhiteCreamy_100 : I.CreamyText)
        }
        onClickTab(t) {
            let e = this.tabTittle.children.indexOf(t.target);
            this.setTab(e)
        }
        saveCardFrontToLocalStorage(t) {
            return !!this.checkDiffWithLocalStorage(T.key_cardFaceSetting, t.toString()) && (d.localStorage.setItem(T.key_cardFaceSetting, t.toString()), !0)
        }
        onClickCardFace(t) {
            let e = this.cardFace.children.indexOf(t.target);
            this._currentCardFace != e && (this._currentCardFace = e, this.setCardFace(e), this.saveCardFrontToLocalStorage(e) && y.instance.updateCard(!0))
        }
        setCardFace(t) {
            this.cardFace.children.forEach(((e, i) => {
                p("select", e).active = i == t
            }))
        }
        saveCardBackToLocalStorage(t) {
            return !!this.checkDiffWithLocalStorage(T.key_cardBackSetting, t.toString()) && (d.localStorage.setItem(T.key_cardBackSetting, t.toString()), !0)
        }
        onClickCardBack(t) {
            let e = this.cardBack.children.indexOf(t.target);
            this.setCardBack(e), this.saveCardBackToLocalStorage(e) && y.instance.updateCard(!1)
        }
        setCardBack(t) {
            this.cardBack.children.forEach(((e, i) => {
                p("select", e).active = i == t
            }))
        }
        saveTableBgToLocalStorage(t) {
            if (this.isWPT || v.Instance.isWPTO) {
                if (this.checkDiffWithLocalStorage(T.key_wptBgColorSetting, t.toString())) return d.localStorage.setItem(T.key_wptBgColorSetting, t.toString()), !0
            } else if (this.checkDiffWithLocalStorage(T.key_mttBgColorSetting, t.toString())) return d.localStorage.setItem(T.key_mttBgColorSetting, t.toString()), !0;
            return !1
        }
        onClickTableBack(t) {
            let e = this.tableBack.children.indexOf(t.target);
            cc_mtt.vv.ConsoleLog.log("onClickTableBack", e), this.setBackground(e), this.saveTableBgToLocalStorage(e) && y.instance.updateBackground(M.HOLDEM)
        }
        setBackground(t) {
            this.tableBack.children.forEach(((e, i) => {
                p("select", e).active = i == t
            }))
        }
        getCurBtnTypeNode() {
            return this.potButtons.children[this.isButton3 ? 0 : 1]
        }
        setSelectBetBtn(t) {
            this.getCurBtnTypeNode().children.forEach((e => {
                var i;
                let n = t == e.getComponent(k).getTag();
                n && (this.currBetBtn = e);
                let o = n ? 0 : 1;
                e.getComponent(S).spriteFrame = this.buttonOnOff[o], e.getChildByName("Activate_bg").active = n, null == (i = e.getChildByName("percent")) || null == (i = i.getComponent(E)) || i.setColorScheme(L.Other, n ? I.WhiteCreamy_100 : I.CreamyText)
            })), this.LoadCurrentBetValueBtnNum(), this.index = this.currBetBtn.getComponent(k).getTag(), cc_mtt.vv.ConsoleLog.log("setSelectBetBtn", this.index);
            let e = this.isButton3 ? this.index : this.index + 3;
            this.isOmaha ? (this.minTxt.string = Nt.min_omh[e] + "%", this.maxTxt.string = Nt.max_omh[e] + "%") : (this.minTxt.string = Nt.min[e] + "%", this.maxTxt.string = Nt.max[e] + "%")
        }
        onChangeBetHander(t) {
            let e = t.target.getComponent(k).getTag();
            cc_mtt.vv.ConsoleLog.log("onChangeBetHander", e), this.setSelectBetBtn(e)
        }
        SetCurrentBetValueBtnNum(t, e) {
            this.setLabelPercentOfBetBtn(this.GetCurrentBetValueBtn(), t)
        }
        setLabelPercentOfBetBtn(t, e) {
            if (null != t) {
                const i = p("percent", t).getComponent(c);
                i && (i.string = "number" == typeof e ? this.dealRaiseDataNumber(e).replace(".", O.config.getDecimalSeperatorChar()) : e)
            }
        }
        onDragBarHander(t, e) {
            let i = this.GetCurrentBetValueBtn().getComponent(k).getTag(),
                n = this.GetBetValueSliderRange(i),
                o = Math.ceil(n.Min + this.potSlide.progress * (n.Max - n.Min));
            this.percentTxt.string = o + "%";
            const a = this.isMaxPreBetActive(i) && 1 == this.potSlide.progress;
            this.isMaxPreBetSetting(i) && (this.tempSetting.isMax = a), this.percentTxt.node.active = !a, this.SetCurrentBetValueBtnNum(a ? R("PLAYER_SETTING.CUSTOM_POT_RATE_MAX") : o, a);
            let r = Math.round(100 * t.progress);
            this.setSliderProgress(r), this.updatePot()
        }
        setSliderProgress(t) {
            this.nd_slider_progress.getComponent(f).width = Number(this.LOADBARWIDTH) / 100 * t
        }
        onScrollEventHandle(t, e) {
            if (y.instance && y.instance.hasShowHeader) switch (e) {
                case w.SCROLL_BEGAN:
                    this.onTouchStart();
                    break;
                case w.SCROLL_ENDED:
                    this.pageViewRelease()
            }
        }
        onTouchStart() {
            y.instance && y.instance.hasShowHeader && (y.instance.pageView.enabled = !1)
        }
        pageViewRelease() {
            y.instance && y.instance.hasShowHeader && (y.instance.pageView.enabled = !0)
        }
        onTouchEnd() {
            this.pageViewRelease(), this.updateSetting()
        }
        updateSetting() {
            let t = this.GetCurrentBetValueBtn(),
                e = t.getComponent(k).getTag(),
                i = this.GetBetValueSliderRange(t.getComponent(k).getTag()),
                n = Math.ceil(i.Min + this.potSlide.progress * (i.Max - i.Min));
            3 == this.getWhichRaise() ? this.tempSetting.numerator[e] = n : this.tempSetting.numerator[e + 3] = n, this.isOmaha ? d.localStorage.setItem(T.key_customOMHPotButtons1, JSON.stringify(this.tempSetting)) : d.localStorage.setItem(T.key_customPotButtons1, JSON.stringify(this.tempSetting))
        }
        onDefaultSetting() {
            this.tempSetting = this.isOmaha ? JSON.parse(JSON.stringify(Ft)) : JSON.parse(JSON.stringify(It)), this.getCurBtnTypeNode().children.forEach((t => {
                let e = t.getComponent(k).getTag(),
                    i = this.isButton3 ? this.tempSetting.numerator[e] : this.isMaxPreBetActive(e) ? R("PLAYER_SETTING.CUSTOM_POT_RATE_MAX") : this.tempSetting.numerator[e + 3];
                this.setLabelPercentOfBetBtn(t, i)
            })), this.LoadCurrentBetValueBtnNum()
        }
        GetBetValueSliderRange(t) {
            let e = new Lt,
                i = this.isButton3 ? t : t + 3;
            return this.isOmaha ? (e.Min = Nt.min_omh[i], e.Max = Nt.max_omh[i]) : (e.Min = Nt.min[i], e.Max = Nt.max[i]), e.Step = e.Max - e.Min, e
        }
        onShowButtons(t, e) {
            this.isButton3 = !1;
            let i = this.isButton3 ? 0 : 1;
            d.localStorage.setItem(T.key_customPotSet, i.toString()), this.isButton3 ? this.setSelectBetBtn(1) : this.setSelectBetBtn(0), this.LoadCustomBetBtnValue()
        }
        onHandlerClickTabButton(t) {
            let e = this.potSet.children;
            p("radio", e[0]).getComponent(m).color = this.isButton3 ? B(255, 255, 255) : B(192, 192, 192), p("radio", e[1]).getComponent(m).color = this.isButton3 ? B(192, 192, 192) : B(255, 255, 255), p("radio/select", e[0]).active = this.isButton3, p("radio/select", e[1]).active = !this.isButton3;
            let i = this.potButtons.children;
            i[0].active = this.isButton3, i[1].active = !this.isButton3
        }
        getWhichRaise() {
            return this.isButton3 ? 3 : 5
        }
        GetCurrentBetValueBtnNum() {
            return p("percent", this.GetCurrentBetValueBtn()).getComponent(c).string.replace(O.config.getDecimalSeperatorChar(), ".")
        }
        GetCurrentBetValueBtn() {
            return this.currBetBtn
        }
        LoadCustomBetBtnValue() {
            this.getCurBtnTypeNode().children.forEach((t => {
                let e = t.getComponent(k).getTag(),
                    i = "";
                3 == this.getWhichRaise() ? i = this.tempSetting.numerator[e] : (i = this.tempSetting.numerator[e + 3], this.tempSetting.isMax && this.isMaxPreBetSetting(e) && (i = R("PLAYER_SETTING.CUSTOM_POT_RATE_MAX"))), this.setLabelPercentOfBetBtn(t, i)
            })), this.LoadCurrentBetValueBtnNum()
        }
        LoadCurrentBetValueBtnNum() {
            let t = this.GetCurrentBetValueBtn(),
                e = this.GetCurrentBetValueBtnNum();
            const i = t.getComponent(k).getTag();
            let n = this.GetBetValueSliderRange(i),
                o = 0,
                a = this.isMaxPreBetActive(i) && e == R("PLAYER_SETTING.CUSTOM_POT_RATE_MAX");
            o = a ? n.Max : this.checkIsFaction(e);
            let r = o - n.Min;
            this.percentTxt.string = o + "%", this.percentTxt.node.active = !a;
            let s = r / n.Step;
            this.potSlide.progress = s, !a && this.isMaxPreBetSetting(i) && o == n.Max && (this.potSlide.progress = .98);
            let l = Math.round(100 * this.potSlide.progress);
            this.setSliderProgress(l)
        }
        onClickClose() {
            this.node.active = !1, this.node.destroy()
        }
        checkDiffWithLocalStorage(t, e) {
            let i = t == T.key_cardBackSetting || t == T.key_cardFaceSetting ? 0 : 1;
            return T.getLocalStorageItem(t, i) !== e
        }
        dealRaiseDataNumber(t) {
            return (t / 100).toFixed(2)
        }
        checkIsFaction(t) {
            let e = 0;
            if (-1 != t.indexOf("/")) {
                let i = t.substr(0, t.indexOf("/")),
                    n = t.substr(t.lastIndexOf("/") + 1, t.length);
                e = parseFloat(i) / parseFloat(n)
            } else e = parseFloat(t);
            return "1/3" == t ? Math.round(100 * e) : Math.ceil(100 * e)
        }
        updateDataPoint(t = !0) {
            this.dataPointNodes.forEach(((t, e) => {
                t.getChildByName("checkmark").active = e == this._currentDataPoint
            })), this.holdemRoom && (this.holdemRoom.coinMode = this._currentDataPoint, t && this.holdemRoom.store && cc_mtt.vv.DataManager.setDataPointInTableMtt(this.holdemRoom.store.tournamentId, this._currentDataPoint), this.holdemRoom.updateCoinModeValue())
        }
        onClickDataPointCurrency() {
            this._currentDataPoint != wt.CURRENCY && (this._currentDataPoint = wt.CURRENCY, this.updateDataPoint(), this._trackDataPoint())
        }
        onClickDataPointBB() {
            this._currentDataPoint != wt.BB && (this._currentDataPoint = wt.BB, this.updateDataPoint(), this._trackDataPoint())
        }
        _trackDataPoint() {
            if (this.holdemRoom) {
                const t = {
                    currentStatus: this._currentDataPoint == wt.CURRENCY ? "off" : "on",
                    gameMode: this.getGameMode(),
                    value: this.getGameMode() == D.commonProto.MTT_GAME_MODE.SHORT_DECK ? this.anteValue : this.bbValue,
                    isMTT: !0
                };
                F.getInstance().sendEvent(O.Enum.CurrentScreen.room, O.Enum.segmentEvent.DataPointDisplayToggled, O.Enum.Functionality.poker, t)
            }
        }
        isMaxPreBetSetting(t) {
            return !1
        }
        isMaxPreBetActive(t) {
            return !1
        }
        updatePot() {
            var t;
            (this.updateSetting(), this.holdemRoom) && (null == (t = this.holdemRoom.playerControl) || t.updatePot(this.tempSetting))
        }
    }).prototype, "autoFocusSwitchToggle", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(lt.prototype, "tabTittle", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(lt.prototype, "content", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(lt.prototype, "cardFace", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(lt.prototype, "cardBack", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(lt.prototype, "tableBack", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(lt.prototype, "potSet", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(lt.prototype, "potButtons", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(lt.prototype, "potSlide", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(lt.prototype, "sliderHandle", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(lt.prototype, "nd_slider_progress", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(lt.prototype, "buttonOnOff", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), bt = e(lt.prototype, "nd_customize", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(lt.prototype, "minTxt", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(lt.prototype, "maxTxt", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(lt.prototype, "percentTxt", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(lt.prototype, "soundEffect", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(lt.prototype, "customBetSettingsTabButton", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(lt.prototype, "cardFrontItemPrefab", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(lt.prototype, "tableBgItemPrefab", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(lt.prototype, "dataPointNodes", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), xt = e(lt.prototype, "LOADBARWIDTH", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 678
        }
    }), st = lt)) || st));
    n._RF.pop()
}
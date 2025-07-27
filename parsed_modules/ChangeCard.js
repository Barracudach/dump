import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cv.js";
import * as b from "./Tag.js";
import * as p from "./ThemeSystem.js";
import * as B from "./SettingToggleSwitchHandler.js";
import * as C from "./AppConfig.js";
import * as S from "./CardFrontItemHandler.js";
import * as f from "./ColorSystemType.js";
import * as T from "./ColorSystemTypeOther.js";
import * as M from "./AnalyticsHandler.js";
import * as y from "./TableBgItemHandlerMobile.js";

function main() {
    var x, w, D, P, v, k, I, E, R, A, G, V, N, L, z, F, O, H, U, W, j, Y, K, J, X, q, Q, Z, $, tt, et, it, nt, at, st, ot, rt, lt, ht, ct, ut, gt;
    n._RF.push({}, "92e1b7jCdpLjJhkOoy/dIHn", "ChangeCard", void 0);
    const {
        ccclass: dt,
        property: _t
    } = h;
    let mt = t("BetRange", dt(x = class {
            constructor() {
                this.Min = void 0, this.Max = void 0, this.Step = void 0
            }
            BetRange() {
                this.Min = 0, this.Max = 0, this.Step = 0
            }
        }) || x),
        bt = t("CASH_DATA_POINT", function(t) {
            return t[t.CURRENCY = 0] = "CURRENCY", t[t.BB = 1] = "BB", t
        }({}));
    class pt {
        constructor() {
            this.Index = void 0, this.value = void 0, this.is3ButtonMode = void 0, this.isMaxMode = void 0
        }
        updateData(t, e, i, n) {
            this.Index = t, this.value = e, this.is3ButtonMode = i, this.isMaxMode = n
        }
    }
    t("BetButtonData", pt);
    t("ChangeCard", (w = _t(a), D = _t(a), P = _t(s), v = _t(a), k = _t(a), I = _t(a), E = _t(a), R = _t(a), A = _t(a), G = _t(o), V = _t(a), N = _t(a), L = _t(a), z = _t(a), F = _t(a), O = _t(r), H = _t(l), U = _t([a]), W = _t(l), dt((K = e((Y = class extends c {
        constructor(...t) {
            super(...t), this.POKER_KING_TABLE_INDEX = 5, this.propagateTogglesEvents = !0, this.dataArr = [
                [40, 10, 49],
                [24, 50, 74],
                [24, 75, 99],
                [20, 100, 120],
                [81, 120, 200]
            ], i(this, "LOADBARWIDTH", K, this), this.currBetBtn = void 0, this.index = 0, this.isButton3 = !1, this.gameMain = void 0, this.shortCutPercent_text = null, this.shortCutMin_text = null, this.shortCutMax_text = null, this.nd_slider_progress = null, i(this, "nd_tabs", J, this), i(this, "nd_contents", X, this), i(this, "autoFocusSwitchToggle", q, this), i(this, "nd_card_styles", Q, this), i(this, "nd_card_bgs", Z, this), i(this, "nd_table_bgs", $, this), i(this, "nd_tab_btn_types", tt, this), i(this, "nd_btn_types", et, this), i(this, "nd_customize", it, this), i(this, "slider_customize", nt, this), i(this, "nd_switch_effect", at, this), i(this, "nd_switch_vibrate", st, this), i(this, "nd_switch_voice", ot, this), i(this, "nd_switch_barrage", rt, this), i(this, "customBetSettingsTabButton", lt, this), i(this, "widgetEnableList", ht, this), i(this, "cardFrontItemPrefab", ct, this), i(this, "dataPointNodes", ut, this), i(this, "tableBgItemPrefab", gt, this), this._currentDataPoint = 0, this.isBetButtonInMaxMode = !1, this._betButtonData = new pt
        }
        onLoad() {
            this.initLanguage(), this.initCardStyles(), this.initTableBackground(), this.loadStateFromCache()
        }
        onEnable() {
            this.loadStateFromCache(), m.resMgr.adaptWidget(this.node, !0, !1), this.initialize(), this.customBetSettingsTabButton.active = m.appConfig.getGameConfig().gameCustomBetSettingsEnabled;
            let t = this.nd_tabs.children[1],
                e = this.nd_contents.children[1];
            this.gameMain.gameSceneInstance.room.getCurrentGameID() != m.Enum.GameId.Allin ? (t.active = !0, e.active = !0) : (t.active = !1, e.active = !1), this.chooseTab(0), this.chooseCardStyle(m.tools.GetCardFace()), this.chooseCardBg(m.tools.GetCardBack()), this.chooseTableBg(m.tools.GetTableBack());
            const i = this.gameMain.gameDataInstance;
            void 0 === m.GameDataManager.listCoinModeTableSet[i.tRoomData.pkRoomParam.game_name] || null === m.GameDataManager.listCoinModeTableSet[i.tRoomData.pkRoomParam.game_name] ? this._currentDataPoint = m.tools.isGameplayBBChoice() ? 1 : 0 : this._currentDataPoint = m.GameDataManager.getDataPointInTable(i.tRoomData.pkRoomParam.game_name);
            let n = this.dataPointNodes[0].getComponentsInChildren(u);
            const a = m.appConfig.getWalletConfig().getCurrencyDataPointCash(i.tRoomData.currency.type);
            n.forEach((t => t.string = a));
            let s = this.dataPointNodes[1].getComponentsInChildren(u);
            const o = m.appConfig.getWalletConfig().getConverterDataPointCash(i.tRoomData.pkRoomParam.game_mode == m.Enum.CreateGameMode.CreateGame_Mode_Short);
            s.forEach((t => t.string = o)), this.updateDataPoint(!1), this.initSwitches(), this.widgetEnableList.forEach((t => {
                t.enabled = !0
            }))
        }
        initTableBackground() {
            let t = C.Instance.getGameConfig().tableList.length;
            for (let e = 0; e < t; e++) {
                let t = g(this.tableBgItemPrefab);
                this.nd_table_bgs.addChild(t);
                const i = t.getComponent(y);
                i && i.initialize(this.node, e, "ChangeCard", "onClickTableBg")
            }
        }
        loadStateFromCache() {
            this.propagateTogglesEvents = !1, m.appConfig.isLandscapeLayout || (this.autoFocusSwitchToggle.isChecked = m.tools.isAutoFocusOnMobile()), this.propagateTogglesEvents = !0
        }
        onAutoFocusSwitchToggled(t) {
            this.propagateTogglesEvents && (m.AudioMgr.playButtonSound("button_click.mp3"), m.tools.setAutofocusOnMobile(t.isChecked), t.isChecked || m.popUp.showMsgI18n({
                txt: "Setting_AutoFocus_Toggle_popup_text",
                msgType: m.Enum.ToastType.ToastTypeWarning,
                sureLabel: "OK"
            }))
        }
        initCardStyles() {
            let t = C.Instance.getGameConfig().cardFaceList;
            for (let e = 0; e < t.length; e++) {
                let i = t[e],
                    n = g(this.cardFrontItemPrefab);
                n.getComponent(S).initialize(this.node, i, "ChangeCard", "onClickCardStyle"), this.nd_card_styles.addChild(n)
            }
        }
        setGameMain(t) {
            if (t && this.gameMain !== t && (this.gameMain = t, !this.gameMain.isInitializedBetButtons())) {
                const t = this.getCurBtnTypeNode().children.map((t => {
                    let e = t.getComponent(b).getTag(),
                        i = m.tools.GetStringByCCFile(this.getCustomBetValue(e));
                    return null != i && "" != i && m.StringTools.isNumber(i) || (i = this.getBetBtnValueByIndex(e)), i = i.replace(m.config.getDecimalSeperatorChar(), "."), {
                        index: e,
                        betPercentStr: i
                    }
                }));
                this.gameMain.initBetButtonsText(t, this.isButton3)
            }
        }
        setNdTabsText() {
            m.StringTools.setLabelString(this.nd_tabs, "tab_table", "jackfruit_setting_tab_table"), m.StringTools.setLabelString(this.nd_tabs, "tab_add", "GameScene_changeCard_panel_tab_add"), m.StringTools.setLabelString(this.nd_tabs, "tab_switch", "jackfruit_setting_tab_switch");
            let t = d("content_table", this.nd_contents);
            m.StringTools.setLabelString(t, "title_card_styles/title", "GameScene_changeCard_panel_changeCardTitle_txt"), m.StringTools.setLabelString(t, "title_card_bgs/title", "GameScene_changeCard_panel_changeBackTitle_txt"), m.StringTools.setLabelString(t, "title_table_bgs/title", "jackfruit_setting_0")
        }
        initLanguage() {
            this.setNdTabsText(), this.nd_btn_types.children.forEach((t => {
                t.children.forEach((t => {
                    m.StringTools.setLabelString(t, "unit", "GameScene_changeCard_panel_shortCut_bet_panel_button_0_word_text")
                }))
            })), this.setSettingsTitles()
        }
        setSettingsTitles() {
            m.StringTools.setLabelString(this.nd_customize, "title", "GameScene_changeCard_panel_shortCut_bet_panel_customPot_txt"), m.StringTools.setLabelString(this.nd_contents, "content_add/reset/title", "GameScene_changeCard_panel_shortCut_bet_panel_recoverShortCut_button"), m.StringTools.setLabelString(this.nd_tab_btn_types, "tab_type_3/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_3_label"), m.StringTools.setLabelString(this.nd_tab_btn_types, "tab_type_5/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_5_label"), m.StringTools.setLabelString(this.nd_switch_effect, "title", "jackfruit_setting_sound_effects_btn_label"), m.StringTools.setLabelString(this.nd_switch_vibrate, "title", "jackfruit_setting_vibrate_btn_label"), m.StringTools.setLabelString(this.nd_switch_voice, "title", "curentTime_curentTime_panel_voice_txt"), m.StringTools.setLabelString(this.nd_switch_barrage, "title", "Faceview_danmu_button_danmu")
        }
        initialize() {
            this.nd_btn_types.children.forEach((t => {
                t.children.forEach((t => {
                    t.on(a.EventType.TOUCH_END, this.onChangeBetHander.bind(this))
                }))
            })), m.appConfig.isLandscapeLayout || this.autoFocusSwitchToggle.node.on("toggle", this.onAutoFocusSwitchToggled, this), this.setshortCutPercentText(), this.shortCutMin_text = d("min", this.nd_customize).getComponent(u), this.shortCutMin_text.string = "10%", this.shortCutMax_text = d("max", this.nd_customize).getComponent(u), this.shortCutMax_text.string = "49%", this.nd_slider_progress = d("progress", this.slider_customize.node), this.nd_slider_progress.getComponent(_).width = 10;
            let t = m.Number(m.tools.GetStringByCCFile("show_button_num"));
            this.onShowButtons(null, 0 == t ? 3 : t), this.nd_switch_voice.active = m.appConfig.getGameConfig().enableVoiceMessage, this.nd_switch_barrage.active = m.appConfig.getGameConfig().enableSplitScreen
        }
        setshortCutPercentText() {
            this.shortCutPercent_text = d("slider_customize/handle/percent", this.nd_customize).getComponent(u)
        }
        setSelectBetBtn(t) {
            this.getCurBtnTypeNode().children.forEach((e => {
                var i;
                let n = t == e.getComponent(b).getTag();
                n && (this.currBetBtn = e), e.getChildByName("Activate_bg").active = n, null == (i = e.getChildByName("percent")) || null == (i = i.getComponent(p)) || i.setColorScheme(f.Other, n ? T.WhiteCreamy_100 : T.CreamyText)
            })), this.LoadCurrentBetValueBtnNum(), this.index = this.currBetBtn.getComponent(b).getTag();
            let e, i = "";
            this.isButton3 ? 1 == this.index ? (e = String(this.dataArr[0][1]) + "%", i = String(this.dataArr[1][2]) + "%") : 3 == this.index ? (e = String(this.dataArr[3][1]) + "%", i = String(this.dataArr[4][2]) + "%") : (e = String(this.dataArr[this.index][1]) + "%", i = String(this.dataArr[this.index][2]) + "%") : (e = String(this.dataArr[this.index][1]) + "%", i = String(this.dataArr[this.index][2]) + "%"), this.shortCutMin_text.string = e, this.shortCutMax_text.string = i
        }
        onChangeBetHander(t) {
            m.AudioMgr.playButtonSound("tab.mp3");
            let e = t.target.getComponent("Tag").getTag();
            this.setSelectBetBtn(e)
        }
        onDragBarHander(t, e) {
            let i = this.GetCurrentBetValueBtn();
            const n = i.getComponent(b).getTag();
            let a = this.GetBetValueSliderRange(n),
                s = Math.ceil(a.Min + this.slider_customize.progress * (a.Max - a.Min));
            this.shortCutPercent_text.string = m.StringTools.formatC("%d", s) + "%";
            const o = 1 == this.slider_customize.progress,
                r = this.isMaxPreBetActive(n) && o;
            this.isMaxPreBetActive(n) && (this.isBetButtonInMaxMode = o), this.shortCutPercent_text.node.active = !r, this.SetCurrentBetValueBtnNum(s, r);
            let l = this.GetCurrentBetValueBtnNum();
            this.SetBetBtnText(i.getComponent(b).getTag(), l, r);
            let h = Math.round(100 * t.progress);
            this.setSliderProgress(h)
        }
        recoverDefaultSetting() {
            m.AudioMgr.playButtonSound("button_click.mp3"), this.ResetBetBtnValue(), this.LoadCurrentBetValueBtnNum()
        }
        ResetBetBtnValue() {
            this.isBetButtonInMaxMode = !0, this.getCurBtnTypeNode().children.forEach((t => {
                let e = t.getComponent(b).getTag(),
                    i = this.isMaxPreBetActive(e),
                    n = m.config.getStringData("UITableSetBetBtnValue" + (i ? m.Enum.MaxString : e));
                d("percent", t).getComponent(u).string = n, m.tools.SaveStringByCCFile(this.getCustomBetValue(e), i ? m.Enum.MaxString : n), this.SetBetBtnText(e, n, i)
            }))
        }
        GetBetValueSliderRange(t) {
            let e = new mt;
            switch (t) {
                case 0:
                    e.Min = 10, e.Max = 49, e.Step = 39;
                    break;
                case 1:
                    this.isButton3 ? (e.Min = 10, e.Max = 66, e.Step = 56) : (e.Min = 50, e.Max = 74, e.Step = 24);
                    break;
                case 2:
                    e.Min = 75, e.Max = 99, e.Step = 24;
                    break;
                case 3:
                    this.isButton3 ? (e.Min = 100, e.Max = 200, e.Step = 100) : (e.Min = 100, e.Max = 120, e.Step = 20);
                    break;
                default:
                    e.Min = 10, e.Max = 49, e.Step = 39
            }
            return e
        }
        SetCurrentBetValueBtnNum(t, e) {
            let i = this.GetCurrentBetValueBtn();
            if (null != i) {
                let a = "";
                a = e ? m.config.getStringData("UITableSetBetBtnValueMax") : (t / 100).toFixed(2), d("percent", i).getComponent(u).string = a.replace(".", m.config.getDecimalSeperatorChar());
                var n = this.getCustomBetValue(i.getComponent(b).getTag());
                m.tools.SaveStringByCCFile(n, e ? m.Enum.MaxString : a), this.SetBetBtnText(i.getComponent(b).getTag(), a, e)
            }
        }
        GetCurrentBetValueBtnNum() {
            return d("percent", this.GetCurrentBetValueBtn()).getComponent(u).string.replace(m.config.getDecimalSeperatorChar(), ".")
        }
        GetCurrentBetValueBtn() {
            return this.currBetBtn
        }
        LoadCustomBetBtnValue() {
            this.getCurBtnTypeNode().children.forEach((t => {
                let e = t.getComponent(b).getTag(),
                    i = m.tools.GetStringByCCFile(this.getCustomBetValue(e)),
                    n = this.isMaxPreBetSetting(e),
                    a = !1;
                null != i && "" != i && m.StringTools.isNumber(i) ? (d("percent", t).getComponent(u).string = i.replace(".", m.config.getDecimalSeperatorChar()), n && (a = !1, this.isBetButtonInMaxMode = !1)) : (i = n ? m.config.getStringData("UITableSetBetBtnValueMax") : this.getBetBtnValueByIndex(e), d("percent", t).getComponent(u).string = i.replace(".", m.config.getDecimalSeperatorChar()), n && (a = !0, this.isBetButtonInMaxMode = !0)), this.SetBetBtnText(e, i, a)
            }))
        }
        SetBetBtnText(t, e, i) {
            this._betButtonData.updateData(t, e.replace(m.config.getDecimalSeperatorChar(), "."), this.isButton3, i), m.MessageCenter.send(m.Enum.MessageCenterAction.betValueSettingChanged, this._betButtonData)
        }
        UpdateBetBtnValue(t) {
            this.gameMain.updateBetBtnValue(t, this.isButton3)
        }
        LoadCurrentBetValueBtnNum() {
            let t = this.GetCurrentBetValueBtn(),
                e = this.GetCurrentBetValueBtnNum();
            const i = t.getComponent(b).getTag();
            let n = this.GetBetValueSliderRange(i),
                a = 0,
                s = this.isMaxPreBetSetting(i) && this.isBetButtonInMaxMode;
            a = s ? n.Max : -1 != m.tools.IsFaction(e) ? "1/3" == e ? Math.round(100 * m.tools.Fraction2Decimal(e)) : Math.ceil(100 * m.tools.Fraction2Decimal(e)) : Math.ceil(100 * parseFloat(e));
            let o = a - n.Min;
            this.shortCutPercent_text.string = m.StringTools.formatC("%d", o + n.Min) + "%", this.shortCutPercent_text.node.active = !s;
            let r = o / n.Step;
            !s && this.isMaxPreBetSetting(i) && a == n.Max && (r = .98), this.slider_customize.progress = r;
            let l = Math.round(100 * this.slider_customize.progress);
            this.setSliderProgress(l)
        }
        setSliderProgress(t) {
            this.nd_slider_progress.getComponent(_).width = Number(this.LOADBARWIDTH) / 100 * t
        }
        onClickSelf(t) {
            this.node.active = !1
        }
        onShowButtons(t, e) {
            t && m.AudioMgr.playButtonSound("button_click.mp3"), this.isButton3 = !1, this.isButton3 ? (this.gameMain.SetExtraBetBtnVisible(!1), this.setSelectBetBtn(1)) : (this.UpdateBetBtnValue(3), this.UpdateBetBtnValue(4), this.setSelectBetBtn(0)), m.tools.SaveStringByCCFile("show_button_num", String(e)), this.isBetButtonInMaxMode = !1, this.LoadCustomBetBtnValue(), this.LoadCurrentBetValueBtnNum()
        }
        getCustomBetValue(t) {
            return this.isButton3 ? "custom_bet_value_3_" + t : "custom_bet_value_" + t
        }
        onClickTab(t, e) {
            this.chooseTab(this.getTabIndex(t, e)), m.AudioMgr.playButtonSound("tab.mp3")
        }
        getTabIndex(t, e) {
            return this.nd_tabs.children.indexOf(t.target)
        }
        chooseTab(t) {
            for (let e = 0; e < this.nd_tabs.children.length; e++) {
                const i = this.nd_tabs.children[e];
                let n = e == t;
                this.setTabHighlight(i, n)
            }
            for (let e = 0; e < this.nd_contents.children.length; e++) {
                this.nd_contents.children[e].active = e == t
            }
        }
        setTabHighlight(t, e) {
            d("hightlight", t).active = e, d("cursor", t).getComponent(p).setColorScheme(f.Other, e ? T.WhiteCreamy_100 : T.CreamyText)
        }
        onClickCardStyle(t) {
            let e = this.nd_card_styles.children.indexOf(t.target);
            this.chooseCardStyle(e), m.AudioMgr.playButtonSound("tab.mp3"), m.tools.SetCardFace(e), this.gameMain.UpdateCardFace()
        }
        chooseCardStyle(t) {
            for (let e = 0; e < this.nd_card_styles.children.length; e++) {
                const i = this.nd_card_styles.children[e];
                this.selectToggleNode(i, e == t)
            }
        }
        onClickCardBg(t) {
            let e = this.nd_card_bgs.children.indexOf(t.target);
            this.chooseCardBg(e), m.AudioMgr.playButtonSound("tab.mp3"), m.tools.SetCardBack(e), this.gameMain.updateCardBack()
        }
        chooseCardBg(t) {
            for (let e = 0; e < this.nd_card_bgs.children.length; e++) {
                const i = this.nd_card_bgs.children[e];
                this.selectToggleNode(i, e == t)
            }
        }
        onClickTableBg(t) {
            let e = this.nd_table_bgs.children.indexOf(t.target);
            this.onChosenTableBg(e)
        }
        onChosenTableBg(t) {
            this.chooseTableBg(t), m.AudioMgr.playButtonSound("tab.mp3"), m.tools.SetTableBack(t), m.MessageCenter.send(m.Enum.MessageCenterAction.changeTableBackground)
        }
        chooseTableBg(t) {
            for (let e = 0; e < this.nd_table_bgs.children.length; e++) {
                const i = this.nd_table_bgs.children[e];
                this.selectToggleNode(i, e == t)
            }
        }
        selectToggleNode(t, e) {
            d("select", t).active = e
        }
        getCurBtnTypeNode() {
            return this.nd_btn_types.children[this.isButton3 ? 0 : 1]
        }
        initSwitches() {
            this.nd_switch_effect._isSelect = m.tools.isSoundEffectOpen(), this.nd_switch_vibrate._isSelect = m.tools.isVibrate(), this.nd_switch_voice._isSelect = m.tools.isPlayVoice(), this.nd_switch_barrage._isSelect = m.tools.isShowBarrage(), this.updateSwitch(this.nd_switch_effect), this.updateSwitch(this.nd_switch_vibrate), this.updateSwitch(this.nd_switch_voice), this.updateSwitch(this.nd_switch_barrage)
        }
        updateSwitch(t) {
            let e = t._isSelect;
            t.getChildByName("switch").getComponent(B).setStatus(e)
        }
        onClickSwitch(t, e) {
            let i = t.target.parent;
            i._isSelect = !i._isSelect, this.updateSwitch(i), m.AudioMgr.playButtonSound("button_click.mp3"), i == this.nd_switch_effect ? m.tools.setSoundEffect(i._isSelect) : i == this.nd_switch_vibrate ? m.tools.setVibrate(i._isSelect) : i == this.nd_switch_voice ? m.tools.setPlayVoice(i._isSelect) : i == this.nd_switch_barrage && (m.tools.setShowBarrage(i._isSelect), m.MessageCenter.send("onClickDanmuSwitch"))
        }
        updateDataPoint(t = !0) {
            const e = this.gameMain.gameDataInstance;
            t && m.GameDataManager.setDataPointInTable(e.tRoomData.pkRoomParam.game_name, this._currentDataPoint), this.dataPointNodes.forEach(((t, e) => {
                t.getChildByName("checkmark").active = e == this._currentDataPoint
            })), e.tRoomData.coinMode = this._currentDataPoint, this.gameMain.updateCoinModeValue()
        }
        onClickDataPointCurrency() {
            this._currentDataPoint != bt.CURRENCY && (this._currentDataPoint = bt.CURRENCY, this.updateDataPoint(), this._trackDataPoint())
        }
        onClickDataPointBB() {
            this._currentDataPoint != bt.BB && (this._currentDataPoint = bt.BB, this.updateDataPoint(), this._trackDataPoint())
        }
        _trackDataPoint() {
            const t = this.gameMain.gameDataInstance;
            if (t.tRoomData) {
                const e = t.tRoomData.u32BigBlind > 0 ? t.tRoomData.u32BigBlind : t.tRoomData.pkTableStates.bb_amount || t.tRoomData.pkRoomParam.BB,
                    i = {
                        currentStatus: this._currentDataPoint == bt.CURRENCY ? "off" : "on",
                        gameMode: t.tRoomData.pkRoomParam.game_mode,
                        value: m.StringTools.clientGoldByServer(t.tRoomData.pkRoomParam.game_mode == m.Enum.CreateGameMode.CreateGame_Mode_Short ? t.tRoomData.pkRoomParam.rule_ante_amount : e),
                        isMTT: !1
                    };
                M.getInstance().sendEvent(m.Enum.CurrentScreen.room, m.Enum.segmentEvent.DataPointDisplayToggled, m.Enum.Functionality.poker, i)
            }
        }
        isMaxPreBetSetting(t) {
            return !1
        }
        isMaxPreBetActive(t) {
            return !1
        }
        getBetBtnValueByIndex(t) {
            let e = "";
            switch (t) {
                case 0:
                    e = "0.33";
                    break;
                case 1:
                    e = "0.5";
                    break;
                case 2:
                    e = "0.75";
                    break;
                case 3:
                    e = "1";
                    break;
                case 4:
                    e = "1.2"
            }
            return e.replace(".", m.config.getDecimalSeperatorChar()), e
        }
    }).prototype, "LOADBARWIDTH", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 705
        }
    }), J = e(Y.prototype, "nd_tabs", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(Y.prototype, "nd_contents", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(Y.prototype, "autoFocusSwitchToggle", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(Y.prototype, "nd_card_styles", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(Y.prototype, "nd_card_bgs", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(Y.prototype, "nd_table_bgs", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Y.prototype, "nd_tab_btn_types", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "nd_btn_types", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "nd_customize", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "slider_customize", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "nd_switch_effect", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "nd_switch_vibrate", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "nd_switch_voice", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Y.prototype, "nd_switch_barrage", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Y.prototype, "customBetSettingsTabButton", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Y.prototype, "widgetEnableList", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ct = e(Y.prototype, "cardFrontItemPrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Y.prototype, "dataPointNodes", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), gt = e(Y.prototype, "tableBgItemPrefab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = Y)) || j));
    n._RF.pop()
}
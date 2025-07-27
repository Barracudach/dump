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
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./cv.js";
import * as p from "./USDTAndCoin.js";
import * as b from "./CurrencyValue.js";
import * as B from "./GameSceneInstance.js";
import * as T from "./Enum.js";

function main() {
    var k, C, x, f, v, D, M, I, R, P;
    n._RF.push({}, "e3158prj+NMB7TTgbu0xFQ5", "Buyin", void 0);
    const {
        ccclass: G,
        property: w
    } = a;
    t("default", (k = w(o), C = w(o), x = w(o), f = w(o), G((M = e((D = class extends r {
        constructor(...t) {
            super(...t), i(this, "coinBring", M, this), i(this, "usdtBring", I, this), i(this, "takeBackNode", R, this), i(this, "totalAmountNode", P, this), this.tackBackPanel = null, this.chouMa_slider = null, this.takebackTips_img = null, this._chouMa_txt = null, this._chouMa_txt_currencyValue = null, this._chouMa_slider_txt_currencyValue = null, this._convert_txt_currencyValue = null, this._rich_word_txt = null, this._rich_txt = null, this._rich_txt_currencyValue = null, this.tackBackAmount_text = null, this.tackBackAmount_text_currencyValue = null, this.addsign_text = null, this.addsign_text_currencyValue = null, this._sliderStepScore = 100, this._width = void 0, this._minSignScore = 200, this._minBuyin = 0, this._maxSignScore = 800, this._difBuy = !1, this._micro_clubId = 0, this._micro_u32OwnerId = 0, this._micro_clubName = "", this.progress = null, this.progressNodeUITransform = null, this.tabButton = [], this.tabNode = [], this.ratHolingMsg = null, this.select_index = -1, this.color_lab_select = s(208, 171, 110), this.color_lab_noSelect = s(148, 149, 149), this.viewStyle = 0, this.bringConfig = null, this._firstTimeBuyin = !0, this.shouldConvertCurrency = !1, this.currency = null, this.isPKWUSD = !1, this._currentSliderIndex = 0
        }
        onLoad() {
            this.node;
            l("background", this.node).on(o.EventType.TOUCH_START, this.onHide.bind(this)), this._firstTimeBuyin = !0, this._width = this.getProgressBarWidth(), this.setViewStyle(1), this.updateTitleBar(), y.MessageCenter.register("update_info", this.updateCoinAndUSDT.bind(this), this.node), y.MessageCenter.register("update_gold", this.updateCoinAndUSDT.bind(this), this.node), y.MessageCenter.register("on_snapshot_roominfo", this.UpdateBuyinInfo.bind(this), this.node), this.takeBackNode.forEach((t => {
                t.active = y.appConfig.getGameConfig().buyInTakeBackEnabled
            })), this.totalAmountNode.forEach((t => {
                t.active = y.appConfig.getGameConfig().buyInTotalAmountEnabled
            }))
        }
        start() {
            this.UpdateBuyinInfo(B.getInstanceGameData(null == this ? void 0 : this.node)), this.adaptWidget()
        }
        onDestroy() {
            y.MessageCenter.unregister("update_info", this.node), y.MessageCenter.unregister("update_gold", this.node), y.MessageCenter.unregister("on_snapshot_roominfo", this.node)
        }
        setViewStyle(t) {
            var e;
            if (1 != t && 2 != t || t == this.viewStyle) return;
            this.viewStyle = t, this.coinBring.active = 1 == t, this.usdtBring.active = 2 == t;
            let i = this.currentBringNode(),
                n = l("bring_node", i),
                o = l("exchange_node", i);
            this.tabButton[0] = l("tab_icon/btn_0", i), this.tabButton[1] = l("tab_icon/btn_1", i), this.tabNode[0] = n, this.tabNode[1] = o, this.tackBackPanel = l("tackBackPanel", n), this.chouMa_slider = l("Node/chouMa_slider", n), this.progress = l("Node/chouMa_slider/Progress", n).getComponent(u), this._chouMa_slider_txt_currencyValue = l("Node/chouMa_slider/Handle/slider_text", n).getComponent(b), this._convert_txt_currencyValue = null == (e = l("Node/convert_currency_group/convert_text", n)) ? void 0 : e.getComponent(b), this._chouMa_txt = l("layout_gold/layout/chouMa_text", n).getComponent(c), this._chouMa_txt_currencyValue = l("layout_gold", n).getComponent(b), this._rich_txt = l("layout/rich_text", n).getComponent(c), this._rich_txt_currencyValue = l("layout", n).getComponent(b), this._rich_word_txt = l("layout/rich_word_text", n).getComponent(c), this.tackBackAmount_text = l("layout/tackBackAmount_text", this.tackBackPanel).getComponent(c), this.tackBackAmount_text_currencyValue = this.tackBackPanel.getComponent(b), this.updateTakeBackTips(n), this.addsign_text = l("sureBuyInPanel_layout/addSign_text", n).getComponent(c), this.addsign_text_currencyValue = l("sureBuyInPanel_layout", n).getComponent(b), l("buttons/sureBuyInPanel_ok_button", n).on("click", this.onSureBuyIn, this), this.ratHolingMsg = l("ratHoling", n), this.updateTexts(t, n)
        }
        updateTakeBackTips(t) {
            this.takebackTips_img = l("tackBackPanel/takebackTips_img", t);
            let e = l("tackBackQuestion_button", this.tackBackPanel);
            e.on(o.EventType.TOUCH_START, (t => {
                this.takebackTips_img.active = !0
            }), this), e.on(o.EventType.TOUCH_END, (t => {
                this.takebackTips_img.active = !1
            }), this), e.on(o.EventType.TOUCH_CANCEL, (t => {
                this.takebackTips_img.active = !1
            }), this)
        }
        updateTexts(t, e) {
            1 == t && (this.tabButton[0].getChildByName("Label").getComponent(c).string = y.config.getStringData("GameScene_addSignPoker_panel_buyin_txt"), this.tabButton[1].getChildByName("Label").getComponent(c).string = y.config.getStringData("USDTView_exchange_coin_label"), y.StringTools.setLabelString(e, "layout/rich_word_text", "GameScene_addSignPoker_panel_rich_word_text"), y.StringTools.setLabelString(e, "buyinDetail_txt", "GameScene_addSignPoker_panel_buyinDetail_txt"), y.StringTools.setLabelString(e, "ratHoling/ratHoling_txt", "ServerErrorCode515_low_re_buyin"), y.StringTools.setLabelString(e, "buyin_txt_2", "GameScene_addSignPoker_panel_buyin_txt"), y.StringTools.setLabelString(e, "sureBuyInPanel_layout/totalBuyin_txt", "GameScene_addSignPoker_panel_sureBuyInPanel_totalBuyin_txt"), y.StringTools.setLabelString(e, "buttons/sureBuyInPanel_ok_button/Label", "GameScene_addSignPoker_panel_sureBuyInPanel_ok_button"), y.StringTools.setLabelString(this.tackBackPanel, "layout/tackbackTitle_txt", "GameScene_addSignPoker_panel_tackbackTitle_txt"), y.StringTools.setLabelString(this.takebackTips_img, "item_0/tackbackTip0_txt", "GameScene_addSignPoker_panel_tackbackTip0_txt"), y.StringTools.setLabelString(this.takebackTips_img, "item_1/tackbackTip1_txt", "GameScene_addSignPoker_panel_tackbackTip1_txt"), y.StringTools.setLabelString(this.takebackTips_img, "item_2/tackbackTip2_txt", "GameScene_addSignPoker_panel_tackbackTip2_txt"), l("item_0", this.takebackTips_img).getComponent(h).height = l("item_0/tackbackTip0_txt", this.takebackTips_img).getComponent(h).height, l("item_1", this.takebackTips_img).getComponent(h).height = l("item_1/tackbackTip1_txt", this.takebackTips_img).getComponent(h).height, l("item_2", this.takebackTips_img).getComponent(h).height = l("item_2/tackbackTip2_txt", this.takebackTips_img).getComponent(h).height)
        }
        updateTitleBar() {
            y.appConfig.getWalletConfig().haveUSDTCurrency ? this.tabButton[1].active = !0 : (this.tabButton[1].active = !1, this.setBtnState(0, !1))
        }
        currentBringNode() {
            return 2 == this.viewStyle ? this.usdtBring : this.coinBring
        }
        updateCoinAndUSDT() {
            if (this._rich_txt_currencyValue) {
                let t = y.StringTools.numberToString(y.StringTools.clientGoldByServer(this.bringChips()));
                this.isPKWUSD ? this._rich_txt_currencyValue.updateVal(t, T.USDT, !1, T.USDT) : this._rich_txt_currencyValue.value = t
            } else this._rich_txt.string = y.StringTools.numberToString(y.StringTools.clientGoldByServer(this.bringChips()))
        }
        adaptWidget() {
            y.resMgr.adaptWidget(this.node, !0)
        }
        onSureBuyIn() {
            y.AudioMgr.playButtonSound("button_click");
            let t = y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string),
                e = this.getDefaultBring(this.defaultBringKey());
            this._firstTimeBuyin && "number" == typeof t && e != t && (this.setDefaultBring(this.defaultBringKey(), t), this.saveDefaultBringConfig());
            const i = B.getInstanceGameData(null == this ? void 0 : this.node);
            this._firstTimeBuyin = !1;
            let n = y.StringTools.serverGoldByClient(t);
            i.tRoomData.u32Buyin, y.dataHandler.getUserData().m_totalBuyOut;
            var o = i.tRoomData.pkRoomParam.club_id;
            let a = this.bringChips(),
                r = this.exchangeChips(),
                s = y.StringTools.clientGoldByServer(a),
                l = y.StringTools.clientGoldByServer(r),
                u = 2 == this.viewStyle ? "UIBuyTips_USDT" : "UIBuyTips",
                c = 2 == this.viewStyle ? "UIBuyTipsUSDT_USDT" : "UIBuyTipsUSDT",
                h = this._convert_txt_currencyValue.getReverseAmount(a),
                g = y.StringTools.clientGoldByServer(h);
            if (i.tRoomData.curBuyInAmount = y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string), i.tRoomData.curConvertedBringChipsNum = h, y.MessageCenter.send("buyin_start", i), this.node.active = !1, h >= n) y.gameNet.RequestBuyin(i.tRoomData.u32RoomId, y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string), this._difBuy);
            else if (g > this._minSignScore) {
                this._micro_clubId = o;
                let t = "";
                if (1 == i.tRoomData.pkRoomParam.is_mirco) {
                    var _;
                    if (r > 0) t = y.StringTools.formatC(y.config.getStringData(c), y.StringTools.numberToShowNumber(s), l);
                    else {
                        let e = this._convert_txt_currencyValue.getCurrentCurrencySymbol() + y.StringTools.numberToShowNumber(s);
                        t = y.StringTools.formatC(y.config.getStringData(u), e)
                    }
                    let e = null == (_ = B.getInstance(this.node)) || null == (_ = _.room) ? void 0 : _.gameScene;
                    y.popUp.showMsg({
                        title: y.config.getStringData("Attention"),
                        txt: t,
                        isTwoBtn: !0,
                        sureCallback: this.microBuyin.bind(this),
                        cancelCallback: this.gotoShop.bind(this),
                        msgType: y.Enum.ToastType.ToastTypeWarning,
                        cancelLabel: y.config.getStringData("GameDomanShop_recharge_txt"),
                        sureLabel: y.config.getStringData("TipsPanel_sure_button"),
                        cashGameScene: e
                    })
                } else {
                    var d;
                    if (r > 0) t = y.StringTools.formatC(y.config.getStringData(c), parseInt(y.StringTools.numberToShowString(s)), l);
                    else {
                        let e = this._convert_txt_currencyValue.getCurrentCurrencySymbol() + parseInt(y.StringTools.numberToShowString(s));
                        t = y.StringTools.formatC(y.config.getStringData(u), e)
                    }
                    let e = null == (d = B.getInstance(this.node)) || null == (d = d.room) ? void 0 : d.gameScene;
                    y.popUp.showMsg({
                        title: y.config.getStringData("Attention"),
                        txt: t,
                        isTwoBtn: !0,
                        sureCallback: this.Buyin.bind(this),
                        cancelCallback: this.gotoShop.bind(this),
                        msgType: y.Enum.ToastType.ToastTypeWarning,
                        cancelLabel: y.config.getStringData("GameDomanShop_recharge_txt"),
                        sureLabel: y.config.getStringData("TipsPanel_sure_button"),
                        cashGameScene: e
                    })
                }
                y.MessageCenter.send("buyin_failed_by_local", {
                    msg: t,
                    gameData: i
                })
            } else y.gameNet.RequestBuyin(i.tRoomData.u32RoomId, y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string), this._difBuy)
        }
        Buyin() {
            let t = B.getInstanceRoomId(null == this ? void 0 : this.node),
                e = 0,
                i = this.bringChips(),
                n = this.exchangeChips(),
                o = g(this._convert_txt_currencyValue, !0) ? this._convert_txt_currencyValue.getReverseAmount(i) : 0;
            e = n > 0 ? y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string) : parseInt(y.StringTools.clientGoldByServer(o).toString()), y.gameNet.RequestBuyin(t, e, this._difBuy)
        }
        microBuyin() {
            let t = 0,
                e = this.bringChips(),
                i = this.exchangeChips(),
                n = g(this._convert_txt_currencyValue, !0) ? this._convert_txt_currencyValue.getReverseAmount(e) : 0;
            t = i > 0 ? y.StringTools.showStringToNumber(this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.value : this._chouMa_txt.string) : y.StringTools.clientGoldByServer(n), y.gameNet.RequestBuyin(B.getInstanceRoomId(null == this ? void 0 : this.node), t, this._difBuy)
        }
        gotoShop() {
            y.worldNet.requestGetUserData(), y.SHOP.RechargeClick()
        }
        UpdateBuyinInfo(t) {
            if (B.isInvalidRoomMultiWindow(t, null == this ? void 0 : this.node)) return;
            const e = B.getInstanceGameData(null == this ? void 0 : this.node);
            this.currency = e.tRoomData.currency, this.isPKWUSD = this.currency.type == T.USD && y.appConfig.isPKW, this.shouldConvertCurrency = !this.isPKWUSD && y.appConfig.getWalletConfig().shouldConvertCurrency(this.currency), this.setViewStyle(this.isPKWUSD ? 2 : 1), this.updateCoinAndUSDT(), y.resMgr.getLabelStringSize(this._rich_txt);
            const i = this._setSignNumUnit();
            this._minBuyin = this._setMinBuyinAmount(i), this._setMaxBuyinAmount(i), this._convert_txt_currencyValue && (this._convert_txt_currencyValue.node.active = this.shouldConvertCurrency), this.addsign_text_currencyValue ? this.addsign_text_currencyValue.value = y.StringTools.numberToString(y.StringTools.clientGoldByServer(e.tRoomData.u32Buyin)) : this.addsign_text.string = y.dataHandler.getUserData().getCurrencySymbol() + y.StringTools.numberToString(y.StringTools.clientGoldByServer(e.tRoomData.u32Buyin));
            const n = e.tRoomData.pkRoomParam.is_opened_drawback && y.appConfig.getGameConfig().buyInTakeBackEnabled;
            this.tackBackPanel.active = n, n && (this.tackBackAmount_text_currencyValue ? this.tackBackAmount_text_currencyValue.value = y.StringTools.numberToString(y.StringTools.clientGoldByServer(y.dataHandler.getUserData().m_totalBuyOut)) : this.tackBackAmount_text.string = y.StringTools.numberToString(y.StringTools.clientGoldByServer(y.dataHandler.getUserData().m_totalBuyOut))), this.updateSize(n), this.readDefaultBringConfig();
            const o = this.getDefaultBring(this.defaultBringKey()),
                a = this._maxSignScore - this._minBuyin;
            let r = this._minBuyin,
                s = 0;
            a > 0 && o > 0 && (r = o >= this._maxSignScore && this._minSignScore !== this._maxSignScore ? this._maxSignScore : this._minBuyin, s = (r - this._minBuyin) / a), this._chouMa_txt.string = y.StringTools.numberToShowString(r), this.updateBuyInAmount(r), this._setSlider(s), this.switchTab(0)
        }
        _setSignNumUnit() {
            let t = 0,
                e = 0;
            const i = B.getInstanceGameData(null == this ? void 0 : this.node);
            return 1 === i.tRoomData.pkRoomParam.game_mode ? (t = i.tRoomData.pkRoomParam.rule_blind_enum, e = y.config.GetBuyinScoreValue(t - 1)) : 3 === i.tRoomData.pkRoomParam.game_mode && (t = y.StringTools.clientGoldByServer(i.tRoomData.pkRoomParam.rule_ante_amount), e = 100 * t), e
        }
        _setMinBuyinAmount(t) {
            const e = B.getInstanceGameData(null == this ? void 0 : this.node),
                i = e.tRoomData.pkRoomParam.rule_buyin_min_enum;
            if (this._sliderStepScore = t / 2, this._minSignScore = t * i / 100, this.ratHolingMsg.active = !1, y.appConfig.getGameConfig().enableAntiRatHole) {
                const t = e.tRoomData.playerBuyoutMeta;
                if (t && t.time_end_ms > Date.now() && !y.roomManager.checkGameIsZoom(e.tRoomData.u32GameID)) {
                    const e = y.StringTools.clientGoldByServer(t.buyout);
                    e > this._minSignScore && (this._minSignScore = e, this._minSignScore > this._maxSignScore && (this._maxSignScore = this._minSignScore), this.ratHolingMsg.active = !0)
                }
            }
            let n = this._minSignScore;
            const o = e.tRoomData.u32Stake,
                a = y.StringTools.clientGoldByServer(o);
            return this._difBuy = !1, a < this._minSignScore && a > 0 && (n = Math.round(100 * (this._minSignScore - a)) / 100, this._difBuy = !0), n
        }
        _setMaxBuyinAmount(t) {
            const e = B.getInstanceGameData(null == this ? void 0 : this.node);
            let i = 0;
            i = e.tRoomData.isZoom() ? 2e6 === e.tRoomData.pkRoomParam.rule_buyin_fold ? 1e3 : e.tRoomData.pkRoomParam.rule_buyin_fold : 2e4 === e.tRoomData.pkRoomParam.rule_buyin_fold ? 1e3 : e.tRoomData.pkRoomParam.rule_buyin_fold, this._maxSignScore = t * i / 100
        }
        _setSlider(t) {
            const e = this.slider;
            if (!g(e)) return;
            const i = this.progress;
            null != i && (this._currentSliderIndex = 0, e.progress = t, i.node.getComponent(h).width = this._width * e.progress, this._maxSignScore <= this._minBuyin ? (e.handle.getComponent(_).interactable = !1, y.tools.setSpriteGray(e.handle.node, !0), e.enabled = !1) : (e.handle.getComponent(_).interactable = !0, y.tools.setSpriteGray(e.handle.node, !1), e.enabled = !0, e.node.on("slide", this.onSliderChange.bind(this))))
        }
        updateBuyInAmount(t) {
            let e = y.StringTools.numberToString(t);
            return this._chouMa_txt_currencyValue ? this._chouMa_txt_currencyValue.updateVal(e, this.currency.type) : this._chouMa_txt.string = e, this._convert_txt_currencyValue && this._convert_txt_currencyValue.updateVal(e, this.currency.type, !0), this._chouMa_slider_txt_currencyValue && this._chouMa_slider_txt_currencyValue.updateVal(e, this.currency.type), e
        }
        updateSize(t) {
            let e = t ? 1060 : 940;
            this.tabNode[0].getComponent(h).height = e, l("bg_body", this.tabNode[0]).getComponent(h).height = e - 60;
            let i = l("buttons/sureBuyInPanel_ok_button", this.tabNode[0]);
            i.setPosition(i.position.x, -e, i.position.z)
        }
        getProgressBarWidth() {
            return l("bring_node/Node/chouMa_slider/Progress", this.coinBring).getComponent(h).width
        }
        bringChips() {
            return 2 == this.viewStyle ? y.dataHandler.getUserData().usdt : y.dataHandler.getUserData().u32Chips
        }
        exchangeChips() {
            return 2 == this.viewStyle ? y.dataHandler.getUserData().u32Chips : y.dataHandler.getUserData().usdt
        }
        onTabOne() {
            y.AudioMgr.playButtonSound("button_click"), this.switchTab(0)
        }
        onTabTwo() {
            y.AudioMgr.playButtonSound("button_click"), this.switchTab(1)
        }
        switchTab(t) {
            0 != t && 1 != t || this.select_index == t || (this.select_index = t, this.setBtnState(0, 0 == t), this.setBtnState(1, 1 == t), this.tabNode[0].active = 0 == t, this.tabNode[1].active = 1 == t, 1 == t && this.node.getComponent(p).switchTab(2 == this.viewStyle ? 1 : 0))
        }
        setBtnState(t, e) {
            let i = this.tabButton[t];
            e ? (i.getChildByName("Label").getComponent(d).color = this.color_lab_select, i.getChildByName("Background").active = !0) : (i.getChildByName("Label").getComponent(d).color = this.color_lab_noSelect, i.getChildByName("Background").active = !1)
        }
        readDefaultBringConfig() {
            let t = y.dataHandler.getUserData().getUserIdByGameID(B.getInstanceGameId(null == this ? void 0 : this.node)),
                e = m.localStorage.getItem(t + "_bring");
            this.bringConfig = null;
            try {
                this.bringConfig = JSON.parse(e)
            } catch (t) {
                console.log(t)
            }
            this.bringConfig instanceof Object || (this.bringConfig = {})
        }
        saveDefaultBringConfig() {
            let t = y.dataHandler.getUserData().getUserIdByGameID(B.getInstanceGameId(null == this ? void 0 : this.node));
            if (this.bringConfig) {
                let e = JSON.stringify(this.bringConfig);
                e && m.localStorage.setItem(t + "_bring", e)
            }
        }
        defaultBringKey() {
            let t = "",
                e = 0;
            const i = B.getInstanceGameData(null == this ? void 0 : this.node);
            i.tRoomData.pkRoomParam.game_mode == y.Enum.CreateGameMode.CreateGame_Mode_Normal ? (e = i.tRoomData.pkRoomParam.rule_blind_enum ? i.tRoomData.pkRoomParam.rule_blind_enum : e, t = y.config.getblindString(e - 1)) : i.tRoomData.pkRoomParam.game_mode == y.Enum.CreateGameMode.CreateGame_Mode_Short && (e = i.tRoomData.pkRoomParam.rule_ante_amount ? i.tRoomData.pkRoomParam.rule_ante_amount : e, t = y.StringTools.numberToShowString(y.StringTools.clientGoldByServer(e)));
            const n = B.getInstanceGameId(null == this ? void 0 : this.node);
            return console.log(n + "_" + t + "_" + this.viewStyle), n + "_" + t + "_" + this.viewStyle
        }
        setDefaultBring(t, e) {
            this.bringConfig && (this.bringConfig[t] = e)
        }
        getDefaultBring(t) {
            return this.bringConfig && "number" == typeof this.bringConfig[t] ? this.bringConfig[t] : 0
        }
        onHide() {
            this.node.active = !1
        }
        get slider() {
            var t;
            return null == (t = this.chouMa_slider) ? void 0 : t.getComponent(S)
        }
        onSliderChange(t) {
            const e = this.slider;
            if (!g(e)) return;
            const i = this.progress,
                n = (this._maxSignScore - this._minSignScore) / this._sliderStepScore + 1,
                o = B.getInstanceGameData(null == this ? void 0 : this.node),
                a = parseInt((e.progress * n).toString(), 10);
            let r = 0;
            if (i.node.getComponent(h).width = e.progress * this._width, o.tRoomData.pkRoomParam.game_mode == y.Enum.CreateGameMode.CreateGame_Mode_Short) r = e.progress >= .5 ? this._maxSignScore : this._minBuyin;
            else {
                if (this._currentSliderIndex === a) return;
                r = a < 1 ? this._minBuyin : 1 === e.progress ? this._maxSignScore : this._minSignScore + (a - 1) * this._sliderStepScore
            }
            this._currentSliderIndex = a, this.updateBuyInAmount(r)
        }
        onMinBuyInBtnClick() {
            const t = this.slider;
            g(t) && (t.progress = 0, this.onSliderChange(null))
        }
        onMaxBuyInBtnClick() {
            const t = this.slider;
            g(t) && (t.progress = 1, this.onSliderChange(null))
        }
    }).prototype, "coinBring", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(D.prototype, "usdtBring", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(D.prototype, "takeBackNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = e(D.prototype, "totalAmountNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = D)) || v));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as D from "./CircleSprite.js";
import * as v from "./Enum.js";
import * as C from "./cv.js";
import * as L from "./DesignSystemRegularButton.js";
import * as I from "./DesignSystemButtonBase.js";
import * as N from "./DesignSystemButtonBase.js";
import * as V from "./FakeMultipleGame.js";
import * as B from "./TooltipsManager.js";
import * as A from "./DataViewItemVip.js";
import * as M from "./DataViewItemVip.js";
import * as P from "./MessageBroker.js";

function main() {
    var k, F, W, x, R, E, H, j, J, U, K, G, O, q, Z, z, $, Y, Q, X, tt, et, it, at, nt, st, ot, rt, ht, lt, _t, dt, gt, ct, ut, mt, pt, ft, Tt, bt, wt, St, yt, Dt, vt, Ct, Lt, It, Nt, Vt, Bt;
    a._RF.push({}, "7293cEoIkhDR6ZPYh9Bd+uN", "DataView", void 0);
    let Mt = t("DataViewGameType", function(t) {
            return t[t.DataView_DZPK = 0] = "DataView_DZPK", t[t.DataView_DZPK_SHORT = 1] = "DataView_DZPK_SHORT", t[t.DataView_AOF = 2] = "DataView_AOF", t[t.DataView_AOF_SHORT = 3] = "DataView_AOF_SHORT", t[t.DataView_BET = 4] = "DataView_BET", t[t.DataView_MTT = 6] = "DataView_MTT", t[t.DataView_JACKFRUIT = 7] = "DataView_JACKFRUIT", t[t.DataView_PLO = 8] = "DataView_PLO", t[t.DataView_DZPK_PACE = 9] = "DataView_DZPK_PACE", t
        }({})),
        At = t("DataViewCurrencyType", function(t) {
            return t[t.CNY = 2] = "CNY", t[t.USD = 101] = "USD", t
        }({}));
    var Pt = function(t) {
            return t[t.DataView_Data = 0] = "DataView_Data", t[t.DataView_Fight = 1] = "DataView_Fight", t
        }(Pt || {}),
        kt = function(t) {
            return t[t.Success = 0] = "Success", t[t.Loading = 1] = "Loading", t[t.Error = 2] = "Error", t
        }(kt || {});
    const {
        ccclass: Ft,
        property: Wt
    } = _;
    t("default", (k = Wt(I), F = Wt(I), W = Wt(n), x = Wt(n), R = Wt(n), E = Wt([n]), H = Wt(s), j = Wt(M), J = Wt(M), U = Wt(M), K = Wt(M), G = Wt(M), O = Wt(M), q = Wt(M), Z = Wt(M), z = Wt(M), $ = Wt(M), Y = Wt(o), Q = Wt(o), X = Wt(o), tt = Wt(r), et = Wt(h), it = Wt(h), at = Wt([l]), Ft(((Bt = class t extends d {
        constructor(...t) {
            super(...t), i(this, "btnCNY", ot, this), i(this, "btnUSD", rt, this), i(this, "bgNode", ht, this), i(this, "mainNode_panel", lt, this), i(this, "stateNode_panel", _t, this), i(this, "stateIcon_list", dt, this), i(this, "txtDesState", gt, this), i(this, "itemVPIP", ct, this), i(this, "itemPFR", ut, this), i(this, "itemETF", mt, this), i(this, "item3BET", pt, this), i(this, "itemCBET", ft, this), i(this, "itemAF", Tt, this), i(this, "itemWSF", bt, this), i(this, "itemWTSD", wt, this), i(this, "itemWSD", St, this), i(this, "itemPIP", yt, this), i(this, "btn_back", Dt, this), i(this, "dataBtn", vt, this), i(this, "fightBtn", Ct, this), i(this, "scrollView", Lt, this), i(this, "FightItem", It, this), i(this, "jackfruitReviewPrefab", Nt, this), this.jackfruitReviewPanel = null, i(this, "arrSprLobbyTabIcon", Vt, this), this.itemData = [], this.fightPos = void 0, this.gameType = Mt.DataView_DZPK, this.buttonType = Pt.DataView_Data, this.gameid = 0, this.mode = 0, this.vArray1 = [], this.vArray2 = [], this.vArray3 = [], this.vArray4 = [], this.vArray5 = [], this.vArray6 = [], this.detailNode = null, this.detailNode_MTT = null, this.detailNode_Jackfruit = null, this.curMttListCount = 0, this.MttRequestCount = 30, this.JackfruitListPageNum = 1, this.JackfruitRequestCount = 30, this.JackfruitListReq = !0, this.fightListLoading = !1, this.fightListReqNum = 0, this.isVip = !0, this._gamebuttonList = new Array, this._gamebuttonTextList = new Array, this.gameType_panel = null, this.PKW_LIST = [Mt.DataView_MTT, Mt.DataView_DZPK, Mt.DataView_DZPK_PACE, Mt.DataView_DZPK_SHORT, Mt.DataView_PLO, Mt.DataView_JACKFRUIT], this.PKC_LIST = [Mt.DataView_DZPK, Mt.DataView_DZPK_SHORT, Mt.DataView_BET], this.MTT_NUM = 6, this.MTT_ZJ_URL = "&page=1", this.mtt_web = null, this.web_viewPos = new g(0, 0, 0), this.openMttRecord = !1, this.jfWinrate = 0, this.jfWinrate_run = 0, this.jfWinallrate = 0, this.jfWinallrate_run = 0, this.jfHeadwinrate = 0, this.jfHeadwinrate_run = 0, this.jfMidwinrate = 0, this.jfMidwinrate_run = 0, this.jfTailwinrate = 0, this.jfTailwinrate_run = 0, this.fightListScript = null, this._percentTxtPath = "", this._infoBoxTextNormalColor = new c(31, 137, 192), this._BB100HandNodePath = "box/row2/item2/BB100Hand", this.currencyType = At.USD, this.delayShowLoadingFunc = null
        }
        static getSinglePrefabInst(e, i) {
            let a = i;
            return a || (a = u.getScene().getComponentInChildren(m).node), t._g_prefabInst || (t._g_prefabInst = p(e)), a.getChildByUuid(t._g_prefabInst.uuid) || f(t._g_prefabInst, !0) || (t._g_prefabInst = p(e)), t._g_prefabInst
        }
        _registerGameTypePanelSlideEndEvent() {
            this.gameType_panel.node.on("scroll-ended", (() => {
                const t = this.gameType_panel.content.getPosition().x > 0 ? 1 : -1;
                this.updateBtnsMove(-1, t)
            }), this)
        }
        onLoad() {
            this.showStateType(kt.Loading), this.registerCallbacks(), this.openMttRecord || (this.PKW_LIST.splice(0, 1), this.MTT_NUM = this.PKW_LIST.length), this.gameType_panel = T("gameType_panel", this.mainNode_panel).getComponent(r), this._registerGameTypePanelSlideEndEvent(), C.appConfig.getLobbyConfig().showJackfruit || (this.PKC_LIST = C.tools.removeItemsFromArray(this.PKC_LIST, [Mt.DataView_JACKFRUIT]), this.PKW_LIST = C.tools.removeItemsFromArray(this.PKW_LIST, [Mt.DataView_JACKFRUIT])), C.appConfig.getLobbyConfig().showPlo || (this.PKC_LIST = C.tools.removeItemsFromArray(this.PKC_LIST, [Mt.DataView_PLO]), this.PKW_LIST = C.tools.removeItemsFromArray(this.PKW_LIST, [Mt.DataView_PLO]));
            const t = C.config.isOverSeas() ? this.PKC_LIST : this.PKW_LIST,
                e = t.length,
                i = this.getStatisticsTabButtonPrefab();
            for (let a = 0; a < e; a++) {
                const e = p(i);
                this.gameType_panel.content.addChild(e), e.active = !0;
                const n = this.getStatisticsTabButtonLabel(e);
                e.attr({
                    _gameType: t[a]
                }), this._gamebuttonList.push(e), this._gamebuttonTextList.push(n), e.on("click", ((e, i) => {
                    this.hideToolTip(), C.AudioMgr.playButtonSound("tab.mp3");
                    const n = t[a];
                    this.gameType != n && (this.vArray1 = [], this.vArray2 = [], this.vArray3 = [], this.vArray4 = [], this.vArray5 = [], this.curMttListCount = 0, this.JackfruitListPageNum = 1, this.setViewGameType(n))
                }), this)
            }
            switch (this.gameid = C.Enum.GameId.Texas, this.mode = v.CreateGame_Mode_Normal, this.openMttRecord ? this.setViewGameType(Mt.DataView_MTT) : this.setViewGameType(Mt.DataView_DZPK), this.detailNode = T("dataInfo_panel/content/vip_panel", this.mainNode_panel), this.detailNode_MTT = T("dataInfo_panel/content/vip_panel_mtt", this.mainNode_panel), this.detailNode_Jackfruit = T("dataInfo_panel/content/vip_panel_jackfruit", this.mainNode_panel), this.gameType) {
                case Mt.DataView_MTT:
                    this.detailNode_MTT.active = !0, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !1;
                    break;
                case Mt.DataView_JACKFRUIT:
                    this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !0, this.detailNode.active = !1;
                    break;
                default:
                    this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !0
            }
            const a = this.node;
            this.fightListScript = this.scrollView.getComponent("ListView"), this.fightListScript.init(((t, e) => {
                let i = "common";
                i = void 0 !== e.mttId && null != e.mttId ? "mtt" : void 0 !== e.jfId && null != e.jfId ? "jackfruit" : "common", t.getComponent("FightItem").renderItem(e, i, a)
            }), ((t, e, i) => {
                const a = e > 0 ? i[e - 1] : null;
                let n = "common",
                    s = 0,
                    o = "",
                    r = "";
                return void 0 !== t.mttId && null != t.mttId ? (n = "mtt", s = t.startingTime, o = C.StringTools.formatTime(s, C.Enum.eTimeType.Month_Day), r = null !== a ? C.StringTools.formatTime(a.startingTime, C.Enum.eTimeType.Month_Day) : "") : void 0 !== t.jfId && null != t.jfId ? (n = "jackfruit", s = t.recordTime, o = C.StringTools.formatTime(s, C.Enum.eTimeType.Month_Day), r = null !== a ? C.StringTools.formatTime(a.recordTime, C.Enum.eTimeType.Month_Day) : "") : (n = "common", s = t.create_time, o = C.StringTools.formatTime(s, C.Enum.eTimeType.Month_Day), r = null !== a ? C.StringTools.formatTime(a.create_time, C.Enum.eTimeType.Month_Day) : ""), o === r && "jackfruit" === n ? 1 : 0
            })), C.appConfig.isWebApp && this.btn_back && (this.btn_back.node.active = !1, this.btn_back.node.parent.active = !1)
        }
        registerCallbacks() {
            this.btn_back && this.btn_back.node.on("click", this._onClickBtnBack, this)
        }
        _onClickBtnBack(t = !1) {
            let e;
            var i;
            (1 == t ? e = C.action.delay_type.INSTANT : (e = C.action.delay_type.NORMAL, t.node && "backBtn" == t.node._name && C.AudioMgr.playButtonSound("back_button.mp3")), this.showLogoBack(), C.action.showAction(this.node, C.action.eMoveActionDir.EMAD_TO_RIGHT, C.action.eMoveActionType.EMAT_FADE_OUT, e, ((t, e) => {}), ((t, e) => {
                C.MessageCenter.unregister("hall_bottom_lobby_button", this.node)
            })), C.appConfig.isLandscapeLayout) || (null == (i = V.instance) || i.moveHeaderToLeft())
        }
        showLogoBack() {
            C.appConfig.isWebApp ? P.getInstance().sendShowBackButton(!1) : C.MessageCenter.send(C.Enum.MessageCenterAction.EnableTopAppLogo)
        }
        start() {
            this.fightPos = T("fightInfo_panel", this.mainNode_panel).getPosition(), T("fightInfo_panel", this.mainNode_panel).setPosition(this.fightPos.x + C.config.WIDTH, this.fightPos.y), this.updateCurrencyType(At.USD), this.setupIcon(), this.initLanguage(), this.changeStatus(!1), this.initUser(), this.openMttRecord && C.worldNet.RequestMttUserInfoData(C.dataHandler.getUserData().getUserIdS())
        }
        registerMsg() {
            var t;
            (C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), C.MessageCenter.register("update_userPokerData", this.initData.bind(this), this.node), C.MessageCenter.register("updateUserJackfruitData", this.initJackfruitData.bind(this), this.node), C.MessageCenter.register("sendMttMatchListData", this.initMttFight.bind(this), this.node), C.MessageCenter.register("ResponseMTTUserInfoData", this.initMttUserInfo.bind(this), this.node), C.MessageCenter.register("sendDoRequestMttList", this.onDoRequestMttList.bind(this), this.node), C.MessageCenter.register("error_load_statistics", this.onErrorLoadStatistics.bind(this), this.node), this._registerBb100HelpIconEvent(), C.appConfig.isLandscapeLayout) || (null == (t = this.bgNode) || t.on(n.EventType.TOUCH_START, this.hideToolTip, this, !0), C.MessageCenter.register("dataview_tooltip_shown", this.onToolTipShown.bind(this), this.node))
        }
        onToolTipShown() {
            this.scrollView.node.active = !1
        }
        hideToolTip() {
            B.hideAllTooltips(), this.scrollView.node.active = !0
        }
        unregisterMsg() {
            var t;
            (C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node), C.MessageCenter.unregister("update_userPokerData", this.node), C.MessageCenter.unregister("updateUserJackfruitData", this.node), C.MessageCenter.unregister("sendMttMatchListData", this.node), C.MessageCenter.unregister("ResponseMTTUserInfoData", this.node), C.MessageCenter.unregister("sendDoRequestMttList", this.node), C.MessageCenter.unregister("error_load_statistics", this.node), this._unRegisterBb100HelpIconEvent(), C.appConfig.isLandscapeLayout) || (null == (t = this.bgNode) || t.off(n.EventType.TOUCH_START, this.hideToolTip, this, !0), C.MessageCenter.unregister("dataview_tooltip_shown", this.node))
        }
        _registerBb100HelpIconEvent() {}
        _unRegisterBb100HelpIconEvent() {}
        onEnable() {
            C.appConfig.isLandscapeLayout || (C.MessageCenter.register("hall_bottom_lobby_button", this._onClickBtnBack.bind(this, !0), this.node), C.MessageCenter.register("hall_bottom_profile_button", this._onClickBtnBack.bind(this, !1), this.node)), C.appConfig.isWebApp && C.MessageCenter.register(C.Enum.MessageCenterAction.onGoBack, this._onClickBtnBack.bind(this, !1), this.node), this.initLanguage(), this.registerMsg()
        }
        onDisable() {
            this.hideToolTip(), C.appConfig.isLandscapeLayout || C.MessageCenter.unregister("hall_bottom_profile_button", this.node), C.appConfig.isWebApp && C.MessageCenter.unregister(C.Enum.MessageCenterAction.onGoBack, this.node), this.unregisterMsg()
        }
        _setDataViewTabLabelString(t, e, i) {
            e.string = t.toUpperCase()
        }
        setupIcon() {
            let t = C.config.isOverSeas() ? this.PKC_LIST : this.PKW_LIST,
                e = t.length;
            for (let i = 0; i < e; i++) {
                let e = T("layout/icon_img", this._gamebuttonList[i]);
                if (e) {
                    let a = e.getComponent(b),
                        n = t[i];
                    this.arrSprLobbyTabIcon[n] ? (a.node.active = !0, a.spriteFrame = this.arrSprLobbyTabIcon[n]) : a.node.active = !1
                }
            }
        }
        initLanguage() {
            this._unRegisterBb100HelpIconEvent(), this._registerBb100HelpIconEvent();
            let t = C.config.isOverSeas() ? this.PKC_LIST : this.PKW_LIST,
                e = t.length;
            for (let i = 0; i < e; i++) {
                let e = this._gamebuttonTextList[i].getComponent(s),
                    a = t[i],
                    n = C.config.getStringData(C.StringTools.formatC("DataView_gameType_button_%d", a));
                this._setDataViewTabLabelString(n, e, a)
            }
            T("dataInfo_panel/content/baseInfo_panel", this.mainNode_panel);
            const i = T("dataInfo_panel/content/baseInfo_panel_jackfruit", this.mainNode_panel),
                a = T("dataInfo_panel/content/vip_panel_jackfruit", this.mainNode_panel);
            C.StringTools.setLabelString(i, "text", "DataView_data_panel_dataInfo_panel_baseData_title_txt"), C.StringTools.setLabelString(i, "content/total_item/total", "DataView_data_panel_dataInfo_panel_Jackfruit_total_txt"), C.StringTools.setLabelString(i, "content/maxScore_item/maxScore", "DataView_data_panel_dataInfo_panel_Jackfruit_maxScore_txt"), C.StringTools.setLabelString(i, "content/average_item/average", "DataView_data_panel_dataInfo_panel_Jackfruit_average_txt"), C.StringTools.setLabelString(i, "content/record_item/record", "DataView_data_panel_dataInfo_panel_Jackfruit_record_txt"), C.StringTools.setLabelString(a, "text", "DataView_data_panel_dataInfo_panel_detailData_title_txt"), C.StringTools.setLabelString(a, "content/row1/win_item/win_title", "DataView_data_panel_dataInfo_panel_Jackfruit_win_title"), C.StringTools.setLabelString(a, "content/row1/allWin_item/allWin_title", "DataView_data_panel_dataInfo_panel_Jackfruit_allWin_title"), C.StringTools.setLabelString(a, "content/row1/draw_item/draw_title", "DataView_data_panel_dataInfo_panel_Jackfruit_draw_title"), C.StringTools.setLabelString(a, "content/row2/best_item/best_title", "DataView_data_panel_dataInfo_panel_Jackfruit_best_title"), C.StringTools.setLabelString(a, "content/row2/total_item/total_title", "DataView_data_panel_dataInfo_panel_Jackfruit_total_title"), C.StringTools.setLabelString(a, "content/row2/allWin_rate_item/allWin_rate_title", "DataView_data_panel_dataInfo_panel_Jackfruit_allWin_rate_title"), C.StringTools.setLabelString(a, "content/row3/first_item/first_title", "DataView_data_panel_dataInfo_panel_Jackfruit_first_title"), C.StringTools.setLabelString(a, "content/row3/mid_item/mid_title", "DataView_data_panel_dataInfo_panel_Jackfruit_mid_title"), C.StringTools.setLabelString(a, "content/row3/last_item/last_title", "DataView_data_panel_dataInfo_panel_Jackfruit_last_title")
        }
        fightListScrollToBotton(t, e) {}
        update(t) {
            let e = this.detailNode;
            this.gameType != Mt.DataView_MTT && this.gameType != Mt.DataView_JACKFRUIT || (e = this.detailNode_MTT), this.node.active && this.buttonType === Pt.DataView_Data && this.gameType === Mt.DataView_JACKFRUIT && (e = this.detailNode_Jackfruit, T("content/row2/total_item/total_bar/ProgressBar", e).getComponent(w).progress = this.jfWinrate_run, T("content/row2/allWin_rate_item/allWin_rate_bar/ProgressBar", e).getComponent(w).progress = this.jfWinallrate_run, T("content/row3/first_item/first_bar/ProgressBar", e).getComponent(w).progress = this.jfHeadwinrate_run, T("content/row3/mid_item/mid_bar/ProgressBar", e).getComponent(w).progress = this.jfMidwinrate_run, T("content/row3/last_item/last_bar/ProgressBar", e).getComponent(w).progress = this.jfTailwinrate_run, this.jfWinrate_run < this.jfWinrate && (this.jfWinrate_run += .005), this.jfWinallrate_run < this.jfWinallrate && (this.jfWinallrate_run += .005), this.jfHeadwinrate_run < this.jfHeadwinrate && (this.jfHeadwinrate_run += .005), this.jfMidwinrate_run < this.jfMidwinrate && (this.jfMidwinrate_run += .005), this.jfTailwinrate_run < this.jfTailwinrate && (this.jfTailwinrate_run += .005))
        }
        initUser() {
            C.dataHandler.getUserData().setNickName(T("dataInfo_panel/content/name_text_0", this.mainNode_panel)), D.setCircleSprite(T("dataInfo_panel/content/Image_2_0/Image_4", this.mainNode_panel), C.dataHandler.getUserData().headUrl), C.dataHandler.getUserData().setNickName(T("fightInfo_panel/name_text", this.mainNode_panel)), D.setCircleSprite(T("fightInfo_panel/Image_2/Image_4", this.mainNode_panel), C.dataHandler.getUserData().headUrl)
        }
        resetUserBarInfo() {
            this.itemVPIP.reset(), this.itemPFR.reset(), this.itemETF.reset(), this.item3BET.reset(), this.itemCBET.reset(), this.itemAF.reset(), this.itemWSF.reset(), this.itemWTSD.reset(), this.itemWSD.reset(), this.itemPIP.reset(), this.jfWinrate = 0, this.jfWinallrate = 0, this.jfHeadwinrate = 0, this.jfMidwinrate = 0, this.jfTailwinrate = 0, this.jfWinrate_run = 0, this.jfWinallrate_run = 0, this.jfHeadwinrate_run = 0, this.jfMidwinrate_run = 0, this.jfTailwinrate_run = 0
        }
        initMttUserInfo(t) {}
        initJackfruitData() {
            this.delayShowLoadingFunc && (this.unschedule(this.delayShowLoadingFunc), this.delayShowLoadingFunc = null);
            const t = C.dataHandler.getUserData().pokerdata,
                e = T("dataInfo_panel/content/baseInfo_panel", this.mainNode_panel),
                i = T("dataInfo_panel/content/baseInfo_panel_mtt", this.mainNode_panel),
                a = T("dataInfo_panel/content/baseInfo_panel_jackfruit", this.mainNode_panel);
            let n = this.detailNode;
            if (this.gameType === Mt.DataView_MTT) return this.detailNode_MTT.active = !0, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !1, n = this.detailNode_MTT, e.active = !1, i.active = !0, void(a.active = !1);
            if (this.gameType !== Mt.DataView_JACKFRUIT) return this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !0, n = this.detailNode, e.active = !0, i.active = !1, void(a.active = !1);
            this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !0, this.detailNode.active = !1, n = this.detailNode_Jackfruit, e.active = !1, i.active = !1, a.active = !0, this.resetUserBarInfo();
            const o = "dataInfo_panel/content/baseInfo_panel_jackfruit/content";
            T(`${o}/total_item/total_txt`, this.mainNode_panel).getComponent(s).string = t.handcount, T(`${o}/maxScore_item/maxScore_txt`, this.mainNode_panel).getComponent(s).string = C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.maxwinscore), 2));
            let r = t.avescore > 0 ? "+" : "";
            this._updateInfoBoxColor(T(`${o}/average_item/average_txt`, this.mainNode_panel), t.avescore), T(`${o}/average_item/average_txt`, this.mainNode_panel).getComponent(s).string = r + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.avescore), 2)), r = t.hands100amount > 0 ? "+" : "", this._updateInfoBoxColor(T(`${o}/record_item/record_txt`, this.mainNode_panel), t.hands100amount), T(`${o}/record_item/record_txt`, this.mainNode_panel).getComponent(s).string = r + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.hands100amount), 2)), T("content/row1/win_item/win_bar/win_txt", n).getComponent(s).string = t.wincount, T("content/row1/allWin_item/allWin_bar/allWin_txt", n).getComponent(s).string = t.winallcount, T("content/row1/draw_item/draw_bar/draw_txt", n).getComponent(s).string = t.equalcount, T("content/row2/best_item/best_bar/best_txt", n).getComponent(s).string = C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.bestrecord), 2)), T("content/row2/total_item/total_bar/ProgressBar", n).getComponent(w).progress = this.jfWinrate, T("content/row2/total_item/total_bar/total_txt", n).getComponent(s).string = `${t.winrate}%`, T("content/row2/allWin_rate_item/allWin_rate_bar/ProgressBar", n).getComponent(w).progress = this.jfWinallrate, T("content/row2/allWin_rate_item/allWin_rate_bar/allWin_rate_txt", n).getComponent(s).string = `${t.winallrate}%`, T("content/row3/first_item/first_bar/ProgressBar", n).getComponent(w).progress = this.jfHeadwinrate, T("content/row3/first_item/first_bar/first_txt", n).getComponent(s).string = `${t.headwinrate}%`, T("content/row3/mid_item/mid_bar/ProgressBar", n).getComponent(w).progress = this.jfMidwinrate, T("content/row3/mid_item/mid_bar/mid_txt", n).getComponent(s).string = `${t.midwinrate}%`, T("content/row3/last_item/last_bar/ProgressBar", n).getComponent(w).progress = this.jfTailwinrate, T("content/row3/last_item/last_bar/last_txt", n).getComponent(s).string = `${t.tailwinrate}%`, this.jfWinrate = C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.winrate), 2), this.jfWinallrate = C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.winallrate), 2), this.jfHeadwinrate = C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.headwinrate), 2), this.jfMidwinrate = C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.midwinrate), 2), this.jfTailwinrate = C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(t.tailwinrate), 2)
        }
        _updateInfoBoxColor(t, e) {
            let i = t.getComponent(S);
            i.color = e > 0 ? C.tools.getWinColor() : e < 0 ? C.tools.getLoseColor() : this._infoBoxTextNormalColor
        }
        initData(t) {
            if (null != t && t.gameDataInstance) return;
            this.delayShowLoadingFunc && (this.unschedule(this.delayShowLoadingFunc), this.delayShowLoadingFunc = null), this.showStateType(kt.Success);
            let e = C.dataHandler.getUserData().pokerdata,
                i = 0,
                a = 0;
            Number(e.Total_end_room_count) > 0 && (i = Number(e.Total_win_money) / Number(e.Total_end_room_count), a = Number(e.Total_buyin) / Number(e.Total_end_room_count));
            const n = T("dataInfo_panel/content/baseInfo_panel", this.mainNode_panel),
                o = T("dataInfo_panel/content/baseInfo_panel_mtt", this.mainNode_panel),
                r = T("dataInfo_panel/content/baseInfo_panel_jackfruit", this.mainNode_panel);
            let h = this.detailNode;
            if (this.gameType === Mt.DataView_MTT) return this.detailNode_MTT.active = !0, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !1, h = this.detailNode_MTT, n.active = !1, o.active = !0, void(r.active = !1);
            if (this.gameType === Mt.DataView_JACKFRUIT) return this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !0, this.detailNode.active = !1, h = this.detailNode_Jackfruit, n.active = !1, o.active = !1, void(r.active = !0);
            this.detailNode_MTT.active = !1, this.detailNode_Jackfruit.active = !1, this.detailNode.active = !0, h = this.detailNode, n.active = !0, o.active = !1, r.active = !1;
            let l = 0;
            0 != Number(e.Total_hand_card_count) && 0 != Number(e.Total_win_money) && (l = Number(e.Total_win_money) / Number(e.Total_hand_card_count) * 100), this._setBaseInfoBoxData(n, e, a, i, l);
            let _ = C.StringTools.clientGoldByServer(Number(e.Total_win_money)),
                d = T("fightInfo_panel/totalWin_text", this.mainNode_panel),
                g = T("dataInfo_panel/content/totalWin_text_0", this.mainNode_panel),
                u = "";
            _ > 0 ? (u = "+", d.getComponent(S).color = C.tools.getWinColor(), g.getComponent(S).color = C.tools.getWinColor()) : 0 == _ ? (d.getComponent(S).color = new c(c.WHITE), g.getComponent(S).color = new c(c.WHITE)) : (d.getComponent(S).color = C.tools.getLoseColor(), g.getComponent(S).color = C.tools.getLoseColor()), d.getComponent(s).string = u + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(_, 0)), g.getComponent(s).string = u + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(_, 0)), this.itemVPIP.init(this.isVip, e.Vpip_rate, A.VPIP), this.itemPFR.init(this.isVip, e.Pfr_rate, A.PFR), this.itemETF.init(this.isVip, e.Etf_rate, A.ETF), this.item3BET.init(this.isVip, e.Rate_3bet, A.THREE_BET), this.itemCBET.init(this.isVip, e.Cbet_rate, A.C_BET), this.itemAF.init(this.isVip, e.Af_rate, A.AF), this.itemWSF.init(this.isVip, e.Wsf_rate, A.WSF), this.itemWTSD.init(this.isVip, e.Wtsd_rate, A.WTSD), this.itemWSD.init(this.isVip, e.Wsd_rate, A.WSD), this.itemPIP.init(this.isVip, e.Enter_rate, A.PIP)
        }
        _setBaseInfoBoxData(t, e, i, a, n) {
            T("box/row1/item1/totalPoker_txt", t).getComponent(s).string = e.Total_end_room_count.toString(), T("box/row1/item3/totalHand_txt", t).getComponent(s).string = e.Total_hand_card_count.toString(), T("box/row2/item1/averageBring_txt", t).getComponent(s).string = C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(i), 2));
            let o = a > 0 ? "+" : "";
            this._updateInfoBoxColor(T("box/row1/item2/averageFight_txt", t), a), T("box/row1/item2/averageFight_txt", t).getComponent(s).string = o + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(a), 2)), o = e.Bb100 > 0 ? "+" : "", this._updateInfoBoxColor(T("box/row2/item2/BB100Hand_txt", t), e.Bb100), T("box/row2/item2/BB100Hand_txt", t).getComponent(s).string = this.isVip ? o + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(Number(e.Bb100)), 2)) : "-", o = n > 0 ? "+" : "", this._updateInfoBoxColor(T("box/row2/item3/fight100Hand_txt", t), n), T("box/row2/item3/fight100Hand_txt", t).getComponent(s).string = this.isVip ? o + C.StringTools.numberToShowString(C.numFix.roundWithNaNHandling(C.StringTools.clientGoldByServer(n), 2)) : "-"
        }
        isHaveMttId(t) {
            for (let e = 0; e < this.vArray4.length; ++e)
                if (this.vArray4[e].mttId === t) return !0;
            return !1
        }
        initMttFight(t) {
            if (this.fightListLoading = !1, null == t) return;
            const e = t.replace(/\\/g, ""),
                i = JSON.parse(e).gameResults,
                a = C.StringTools.getArrayLength(i);
            if (a > 0) {
                for (let t = 0; t < a; t++) this.isHaveMttId(i[t].mttId) || this.vArray4.push(i[t]);
                this.vArray4.sort(((t, e) => e.startingTime - t.startingTime)), this.curMttListCount = this.vArray4.length, this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray4)
            } else 0 === this.vArray4.length && (this.vArray4 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([]))
        }
        initJackfruitFight(t) {
            if (null === t) return this.fightListLoading = !1, void(this.JackfruitListReq = !1);
            const e = t.jfRooms,
                i = C.StringTools.getArrayLength(e);
            if (i < this.JackfruitRequestCount && (this.JackfruitListReq = !1), i > 0)
                for (let t = 0; t < i; t++) this.vArray5.push(e[t]);
            this.vArray5.sort(((t, e) => e.recordTime - t.recordTime)), this.fightListLoading = !1, this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray5), i <= 0 ? 0 === this.vArray5.length && (this.vArray5 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([])) : this.JackfruitListPageNum = this.JackfruitListPageNum + 1
        }
        initFight(t) {
            this.fightListLoading = !1;
            if (C.StringTools.getArrayLength(t.rooms) > 0) {
                this.fightListReqNum = t.havecount;
                for (let e = 0; e < t.rooms.length; e++) {
                    const i = t.rooms[e];
                    switch (this.gameType) {
                        case Mt.DataView_DZPK:
                            this.vArray1.push(i);
                            break;
                        case Mt.DataView_DZPK_SHORT:
                            this.vArray2.push(i);
                            break;
                        case Mt.DataView_BET:
                            this.vArray3.push(i);
                            break;
                        case Mt.DataView_PLO:
                            this.vArray6.push(i)
                    }
                }
                switch (this.gameType) {
                    case Mt.DataView_DZPK:
                        this.vArray1.sort(((t, e) => e.create_time - t.create_time)), this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray1);
                        break;
                    case Mt.DataView_DZPK_SHORT:
                        this.vArray2.sort(((t, e) => e.create_time - t.create_time)), this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray2);
                        break;
                    case Mt.DataView_BET:
                        this.vArray3.sort(((t, e) => e.create_time - t.create_time)), this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray3);
                        break;
                    case Mt.DataView_PLO:
                        this.vArray6.sort(((t, e) => e.create_time - t.create_time)), this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray6)
                }
            } else switch (this.gameType) {
                case Mt.DataView_DZPK:
                    0 === this.vArray1.length && (this.vArray1 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([]));
                    break;
                case Mt.DataView_DZPK_SHORT:
                    0 === this.vArray2.length && (this.vArray2 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([]));
                    break;
                case Mt.DataView_BET:
                    0 === this.vArray3.length && (this.vArray3 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([]));
                    break;
                case Mt.DataView_PLO:
                    0 === this.vArray6.length && (this.vArray6 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([]))
            }
        }
        updateCurrencyType(t) {
            switch (this.currencyType = t, this.currencyType) {
                case At.CNY:
                    this.setFilterBtnState(this.btnCNY, !0), this.setFilterBtnState(this.btnUSD, !1);
                    break;
                case At.USD:
                    this.setFilterBtnState(this.btnCNY, !1), this.setFilterBtnState(this.btnUSD, !0)
            }
        }
        setFilterBtnState(t, e) {
            e ? (t.btnState = N.pressed, t.isChecked = !0) : (t.btnState = N.normal, t.isChecked = !1)
        }
        onBtnSwitchCurrency(t, e) {
            this.updateCurrencyType(parseInt(e)), this.getData(), this.hideToolTip()
        }
        onBtnFightClick(t) {
            C.AudioMgr.playButtonSound("tab.mp3"), this.changeStatus(!0);
            let e = T("fightInfo_panel", this.mainNode_panel);
            e.setPosition(this.fightPos), C.action.showActionBothLeft(e, T("dataInfo_panel", this.mainNode_panel), C.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {})), this.buttonType = Pt.DataView_Fight, this.getData()
        }
        onBtnDataClick(t) {
            C.AudioMgr.playButtonSound("tab.mp3"), this.changeStatus(!1), C.action.showActionBothRight(T("dataInfo_panel", this.mainNode_panel), T("fightInfo_panel", this.mainNode_panel), C.action.delay_type.NORMAL), this.buttonType = Pt.DataView_Data, this.getData()
        }
        onBtnBackClick() {
            C.AudioMgr.playButtonSound("back_button.mp3"), C.action.showAction(this.node, C.action.eMoveActionDir.EMAD_TO_RIGHT, C.action.eMoveActionType.EMAT_FADE_OUT), C.MessageCenter.send("show_mail_entrance"), this.vArray1 = [], this.vArray2 = [], this.vArray3 = [], this.vArray4 = [], this.vArray5 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged([])
        }
        changeStatus(t) {
            t ? (this.fightBtn.interactable = !1, this.dataBtn.interactable = !0, T("line", this.fightBtn.node).active = !0, T("line", this.dataBtn.node).active = !1, T("Label", this.fightBtn.node).getComponent(S).color = new c(229, 211, 141), T("Label", this.dataBtn.node).getComponent(S).color = new c(137, 138, 138)) : (this.fightBtn.interactable = !0, this.dataBtn.interactable = !1, T("line", this.fightBtn.node).active = !1, T("line", this.dataBtn.node).active = !0, T("Label", this.fightBtn.node).getComponent(S).color = new c(137, 138, 138), T("Label", this.dataBtn.node).getComponent(S).color = new c(229, 211, 141))
        }
        setViewGameType(t) {
            this.gameType = t, this.getData(), this.scheduleOnce(function() {
                this.updateGameType()
            }.bind(this), 0)
        }
        updateGameType() {
            const t = (C.config.isOverSeas() ? this.PKC_LIST : this.PKW_LIST).length;
            for (let e = 0; e < t; e++) {
                if (this._gamebuttonList[e]._gameType === Number(this.gameType)) {
                    let t = this._gamebuttonList[e].getComponent(L);
                    t.btnState = N.pressed, t.isChecked = !0, t.active = !0
                } else {
                    let t = this._gamebuttonList[e].getComponent(L);
                    t.btnState = N.normal, t.isChecked = !1, t.active = !1
                }
            }
        }
        onErrorLoadStatistics() {
            this.showStateType(kt.Error)
        }
        onDoRequestMttList() {
            this.gameType === Mt.DataView_MTT && (this.curMttListCount = 0, this.vArray4 = [], this.fightListScript && this.fightListScript.notifyDataSetChanged(this.vArray4)), this.getData()
        }
        showStateType(t) {
            switch (t) {
                case kt.Loading:
                case kt.Error:
                    this.mainNode_panel.active = !1, this.stateNode_panel.active = !0;
                    for (var e = 0; e < this.stateIcon_list.length; e++) f(this.stateIcon_list[e]) && (this.stateIcon_list[e].active = e == t);
                    this.txtDesState.string = C.config.getStringData("DataView_stateType_" + t);
                    break;
                default:
                    this.mainNode_panel.active = !0, this.stateNode_panel.active = !1, this.updateGameType()
            }
        }
        getData() {
            switch (this.delayShowLoadingFunc && (this.unschedule(this.delayShowLoadingFunc), this.delayShowLoadingFunc = null), this.delayShowLoadingFunc = function() {
                    this.showStateType(kt.Loading)
                }, this.scheduleOnce(this.delayShowLoadingFunc, 1), this.gameType) {
                case Mt.DataView_MTT:
                    break;
                case Mt.DataView_DZPK:
                    this.gameid = C.Enum.GameId.Texas, this.mode = v.CreateGame_Mode_Normal;
                    break;
                case Mt.DataView_DZPK_SHORT:
                    this.gameid = C.Enum.GameId.Texas, this.mode = v.CreateGame_Mode_Short;
                    break;
                case Mt.DataView_BET:
                    this.gameid = C.Enum.GameId.Bet, this.mode = v.CreateGame_Mode_Normal;
                    break;
                case Mt.DataView_JACKFRUIT:
                    this.gameid = C.Enum.GameId.Jackfruit, this.mode = v.CreateGame_Mode_Short;
                    break;
                case Mt.DataView_PLO:
                    this.gameid = C.Enum.GameId.Plo, this.mode = v.CreateGame_Mode_Normal;
                    break;
                case Mt.DataView_DZPK_PACE:
                    this.gameid = C.Enum.GameId.ZoomTexas, this.mode = v.CreateGame_Mode_Normal
            }
            if (this.buttonType === Pt.DataView_Data)
                if (this.fightListScript && this.fightListScript.notifyDataSetChanged([]), this.gameType === Mt.DataView_MTT) this.curMttListCount = 0, this.vArray4 = [], C.worldNet.RequestMttUserInfoData(C.dataHandler.getUserData().getUserIdS());
                else {
                    switch (this.gameType) {
                        case Mt.DataView_DZPK:
                            this.fightListReqNum = 0, this.vArray1 = [];
                            break;
                        case Mt.DataView_DZPK_SHORT:
                            this.fightListReqNum = 0, this.vArray2 = [];
                            break;
                        case Mt.DataView_BET:
                            this.fightListReqNum = 0, this.vArray3 = [];
                            break;
                        case Mt.DataView_JACKFRUIT:
                            this.JackfruitListReq = !0, this.JackfruitListPageNum = 1, this.vArray5 = [];
                            break;
                        case Mt.DataView_PLO:
                            this.fightListReqNum = 0, this.vArray6 = []
                    }
                    C.httpHandler.requestUserData(this.mode, this.gameid, 0, 0, 0, this.currencyType)
                }
            else this.gameType === Mt.DataView_MTT ? (this.fightListLoading = !0, C.worldNet.RequestMttListData(C.dataHandler.getUserData().getUserIdS(), this.curMttListCount, this.MttRequestCount)) : this.gameType === Mt.DataView_JACKFRUIT ? (this.fightListLoading = !0, this.JackfruitListReq = !0, this.JackfruitListPageNum = 1, this.vArray5 = [], C.httpHandler.requestJFRoomRecordList(this.JackfruitListPageNum, this.JackfruitRequestCount, this.initJackfruitFight.bind(this))) : (this.fightListLoading = !0, this.fightListReqNum = 0, C.httpHandler.requestRoomRecordList(0, this.mode, this.gameid, this.fightListReqNum, this.initFight.bind(this)));
            this.gameType === Mt.DataView_AOF || this.gameType === Mt.DataView_DZPK || this.gameType === Mt.DataView_BET || this.gameType === Mt.DataView_PLO || (this.gameType, Mt.DataView_JACKFRUIT)
        }
        initMTTWeb() {
            C.config.HAVE_MTT, 0
        }
        setMatchWebPos(t) {
            if (!this.mtt_web) return;
            let e = new g(4 * y.getVisibleSize().width, .5 * y.getVisibleSize().height, 0);
            this.mtt_web.node.setPosition(!1 === t ? e : this.web_viewPos);
            let i = T("bg", this.mainNode_panel);
            i && (i.active = !t)
        }
        updateBtnsMove(t, e) {}
        removeMtt() {
            this.mtt_web && (this.mtt_web.node.removeFromParent(), this.mtt_web.node.destroy(), this.mtt_web = null)
        }
        getStatisticsTabButtonPrefab() {
            return T("button_0", this.gameType_panel.node)
        }
        getStatisticsTabButtonLabel(t) {
            return T("layout/text", t)
        }
    })._g_prefabInst = null, ot = e((st = Bt).prototype, "btnCNY", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(st.prototype, "btnUSD", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(st.prototype, "bgNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(st.prototype, "mainNode_panel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(st.prototype, "stateNode_panel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(st.prototype, "stateIcon_list", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), gt = e(st.prototype, "txtDesState", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(st.prototype, "itemVPIP", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(st.prototype, "itemPFR", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(st.prototype, "itemETF", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(st.prototype, "item3BET", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(st.prototype, "itemCBET", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(st.prototype, "itemAF", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(st.prototype, "itemWSF", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(st.prototype, "itemWTSD", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(st.prototype, "itemWSD", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(st.prototype, "itemPIP", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(st.prototype, "btn_back", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(st.prototype, "dataBtn", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(st.prototype, "fightBtn", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(st.prototype, "scrollView", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(st.prototype, "FightItem", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(st.prototype, "jackfruitReviewPrefab", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(st.prototype, "arrSprLobbyTabIcon", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), nt = st)) || nt));
    a._RF.pop()
}
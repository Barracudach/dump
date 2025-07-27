import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as G from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as V from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as B from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as I from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as L from "./DesignSystemButtonBase.js";
import * as N from "./DesignSystemButtonBase.js";
import * as D from "./DesignSystemButtonBase.js";
import * as F from "./MTTConnector.js";
import * as x from "./ImpokerHallFeature.js";
import * as W from "./SlideView.js";
import * as H from "./HashMap.js";
import * as R from "./i18nText.js";
import * as U from "./ListView.js";
import * as O from "./cv.js";
import * as z from "./FastEnter_search.js";
import * as K from "./FindItem.js";
import * as q from "./FastEnterContent.js";
import * as Y from "./Enum.js";
import * as j from "./Enum.js";
import * as Z from "./Enum.js";
import * as J from "./Enum.js";
import * as Q from "./FakeMultipleGame.js";
import * as X from "./ThemeSystem.js";
import * as mod16 from "./ColorSystemType.js";
import * as ee from "./ColorSystemTypeOther.js";
import * as te from "./AnalyticsHandler.js";
import * as ie from "./RefreshTop.js";
import * as ae from "./LobbyFilterHelper.js";

function main() {
    var se, ne, oe, re, he, le, me, ge, de, ce, ue, _e, pe, be, fe, Te, ye, Ce, Se, Me, we, Ee, ve, Ge, Pe, Be, ke, Ie, Ve, Ae, Ne, Le, De, Fe, xe, We, He, Re, Ue, Oe, ze, Ke, qe, Ye, Je, je, Ze, Qe, Xe;
    a._RF.push({}, "8193befQu5Al5wIYBkTOj8B", "FindView", void 0);
    const $e = e("SPLASH_NUM", 4),
        et = e("MTT_NUM", 6),
        tt = e("JACKFRUIT_NUM", 7),
        it = e("PLO_NUM", 8),
        at = e("GLOBAL_SPIN_NUM", 9),
        st = [4, 3, 30, 1, 2, 5, tt, it],
        {
            ccclass: nt,
            property: ot
        } = m;
    e("default", (se = ot(s), ne = ot(n), oe = ot(n), re = ot(n), he = ot(s), le = ot(s), me = ot(o), ge = ot(o), de = ot(o), ce = ot(n), ue = ot(N), _e = ot(n), pe = ot(r), be = ot(s), fe = ot(n), Te = ot(n), ye = ot(n), Ce = ot(o), Se = ot(n), Me = ot([h]), we = ot(N), Ee = ot(W), ve = ot(l), nt(((Xe = class e extends g {
        constructor(...e) {
            super(...e), i(this, "scrollView", Be, this), i(this, "emptyMessage", ke, this), i(this, "loadingMessage", Ie, this), i(this, "refresh", Ve, this), i(this, "scrollView_mtt", Ae, this), i(this, "scrollView_GlobalSpin", Ne, this), i(this, "fastEnter_titile", Le, this), i(this, "fastEnter_content", De, this), i(this, "fastEnter_search", Fe, this), i(this, "ef_scroll", xe, this), i(this, "filterToggle", We, this), i(this, "myCashGameNumber", He, this), this.myCashGameData = [], this.itemData = [], this.microBucket = [], this.lowBucket = [], this.midBucket = [], this.highBucket = [], this.helpData = [], this.noSeeFull = !0, this.viewIndex = 0, this.isTopSend = !1, this.fastEnter_data = new H, this.fastEnter_dataLen = 8, this.fastEnter_saveData = [], this.fastEnter_chooseNode = new H, this.isHelpView = !1, this.sHelpName = "", this.mainNodeName = "discover_panel/", this.pokerPagePanelHeaderPath = "pokerPage_panel/scroller/layouter/", this.openSeatAssetPath = this.pokerPagePanelHeaderPath + "checkBoxButton/choose_img/openseat_text", this.checkBoxPath = this.pokerPagePanelHeaderPath + "checkBoxButton/CheckBox", this.quickPanelPos = new d(0, 0), this.topScrollSize = new c(0, 0), this.isStart = !1, this.isGetData = !1, this.ploIndex = 0, this.isFilterChanged = !0, this.currentTypeSavedItems = [], i(this, "img_PageView", Re, this), i(this, "gameType_scrollView", Ue, this), i(this, "discover_panel", Oe, this), i(this, "gameType_panel", ze, this), i(this, "pokerPage_panel", Ke, this), this._whiteCircleList = [], this._gamebuttonList = [], this._gameType = Y.DZPK, this.PKW_GAME_TYPE = [1, it, 2, $e, tt, at], this.PKC_GAME_TYPE = [1, 2, $e, at], this._jspkArr = [], this.SAVE_gameType = "last_gameType", this.SAVE_wxzd = "FindView_wxzd", this.SAVE_seeFull = "FindView_noSeeFull", this.SAVE_helpChoose = "FindView_helpChoose", this.SAVE_PLO_Type = "FindView_PLO", this.SPLASH_NUM = $e, this.MTT_NUM = et, this.JACKFRUIT_NUM = tt, this.PLO_NUM = it, this.GLOBAL_SPIN_NUM = at, this.matchWeb = null, this.matchWebNode = null, this.matchUrl = "", this.matchWeb_pos = new d(0, 0), this.webIsView = !0, this.mtt_img = null, this.isClickScreenbtn = !1, this.isClickSeatbtn = !1, this.gameModeBtnScreenNum = 0, this.mttUseWebView = !1, this.mtt = null, this.mttUrl = "", this.mttInitPos = new d(0, 0), this.mttResRetryCount = 0, this.mttMaxResRetryCount = 3, this.hasInitMTT = !1, this.mttSetTimeout = null, i(this, "mttPrefab", qe, this), this.scrollViewTop = 0, i(this, "mttContainer", Ye, this), this.filter_default_color = void 0, this.filter_selected_color = void 0, this.timeRefreshGameLobby = 60, this.intervalRefreshCashGameLobby = null, this.needRefreshCashGameLobby = !1, this.intervalRefreshMTTGameLobby = null, this.needRefreshMTTGameLobby = !1, this._isShowFullHeight = !0, i(this, "arrSprLobbyTabIcon", Je, this), this.spacingOffsetAlignTextTab = 30, i(this, "currencySwitcher", je, this), i(this, "quickPanelSlideView", Ze, this), this._originalSiblingIndex = void 0, this.searchComp = null, i(this, "refreshButton", Qe, this)
        }
        onLoad() {
            O.config.HAVE_MTT && O.appConfig.getLobbyConfig().mtt.showLobbyTab && this.PKW_GAME_TYPE.unshift(this.MTT_NUM), O.appConfig.getLobbyConfig().showJackfruit || (this.PKW_GAME_TYPE = O.tools.removeItemsFromArray(this.PKW_GAME_TYPE, [tt]), this.PKC_GAME_TYPE = O.tools.removeItemsFromArray(this.PKC_GAME_TYPE, [tt])), O.appConfig.getLobbyConfig().showSplash || (this.PKW_GAME_TYPE = O.tools.removeItemsFromArray(this.PKW_GAME_TYPE, [$e]), this.PKC_GAME_TYPE = O.tools.removeItemsFromArray(this.PKC_GAME_TYPE, [$e])), O.appConfig.getLobbyConfig().showPlo || (this.PKW_GAME_TYPE = O.tools.removeItemsFromArray(this.PKW_GAME_TYPE, [it]), this.PKC_GAME_TYPE = O.tools.removeItemsFromArray(this.PKC_GAME_TYPE, [it])), O.appConfig.getLobbyConfig().showGlobalSpin || (this.PKW_GAME_TYPE = O.tools.removeItemsFromArray(this.PKW_GAME_TYPE, [at]), this.PKC_GAME_TYPE = O.tools.removeItemsFromArray(this.PKC_GAME_TYPE, [at])), O.tools.SaveStringByCCFile("FINDVIEW_isFASTENTER", "0"), this.adaptWidget(), this.scrollViewTop = this.scrollView.node.getComponent(u).top, this.quickPanelPos = _("quick_seat_touch_panel", this.node).position, this.topScrollSize = new c(this.ef_scroll.parent.getComponent(p).width, this.ef_scroll.parent.getComponent(p).height), this.mtt_img = _("discover_panel/mttImg", this.node), this.registerMsg(), this.img_PageView.node.on("page-turning", this.touchImgPageview, this), this.initGames(), this.noSeeFull = "1" == O.tools.GetStringByCCFile(this.SAVE_seeFull), this.viewIndex = O.Number(O.tools.GetStringByCCFile(this.SAVE_wxzd) || "-1"), this.ploIndex = O.Number(O.tools.GetStringByCCFile(this.SAVE_PLO_Type)), this.initGameType();
            for (let t = 0; t < 5; t++) {
                var e;
                null == (e = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button" + t, this.node)) || e.on(n.EventType.TOUCH_END, this.onBtnCardListTypeClick, this)
            }
            this.changeNoSeeFull(this.noSeeFull), _("quick_seat_touch_panel/quick_seat_panel/backGroundBg", this.node).on(n.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0
            })), _("quick_seat_touch_panel", this.node).on(n.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0, this.hideQuickEnterView()
            }));
            let t = this.getActiveFilterBtnText(),
                i = {
                    selectedGameType: this._gameType,
                    selectedStakes: t
                };
            te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.ScreenOpened, O.Enum.Functionality.poker, i), this.initLanguage(), O.config.HAVE_MTT && O.appConfig.getLobbyConfig().mtt.showLobbyTab && this.initMTT(), O.appConfig.isLandscapeLayout || (this.node.getComponent(b).opacity = 0, this.scheduleOnce((() => {
                this.node.getComponent(b).opacity = 255
            })))
        }
        adaptWidget() {
            O.resMgr.adaptWidget(this.node, !0, !1)
        }
        initGames() {
            this._gamebuttonList = [];
            let e = this.gameType_panel.getChildByName("button_0");
            _("new_icon", e).active = !1;
            let t = O.config.isOverSeas() ? this.PKC_GAME_TYPE.length : this.PKW_GAME_TYPE.length,
                i = new c(this.gameType_panel.getComponent(p).width / t - 3, e.getComponent(p).height);
            e.getComponent(p).setContentSize(i), this.gameType_scrollView.content.getComponent(p).setContentSize(new c(i.width * t, this.gameType_scrollView.node.getComponent(p).height));
            for (let a = 0; a < t; a++) {
                let t, s = f(e);
                t = O.config.isOverSeas() ? this.PKC_GAME_TYPE[a] : this.PKW_GAME_TYPE[a], _("new_icon", s).active = t == tt, s.name = "btn_" + t, s.on("click", (e => {
                    var i;
                    this.setViewGametype(t, !0), O.AudioMgr.playButtonSound("tab.mp3"), t == this.MTT_NUM && O.config.HAVE_MTT ? (this.onShowMttTab(), this.updateGameBtn()) : t == this.GLOBAL_SPIN_NUM ? (this.initMTT(), this.updateGameBtn()) : (this.HandleCheckMTT(!1), this.updateGameTypeDataAndView(), this.updateFilterTogglesState(), this.updateMyCashGames()), this.scrollView.scrollToTop(.05), this.trackingGameTypeSelected(null == (i = _("layout/text", s)) || null == (i = i.getComponent(T)) ? void 0 : i.string)
                }), this), this._gamebuttonList.push(s), s.setPosition(i.width / 2 + i.width * a + 1.5 * this._gamebuttonList.length, i.height / 2), this.gameType_scrollView.content.addChild(s)
            }
            e.active = !1, this.setShowLoadingMessage(!0), this.gameType_scrollView.enabled = !1
        }
        trackingGameTypeSelected(e) {
            let t = {
                gameType: e
            };
            te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.LobbyGameTypeSelected, O.Enum.Functionality.poker, t)
        }
        start() {
            O.dataHandler.getUserData().isJP && (this.currencySwitcher.node.getComponent(y).isChecked = e.isJPcurrencySwitcherOn), O.worldNet.BannerRequest(), this.getFastEnterSaveRecord(), this.updateCurrentTypeSavedItems(), this.changeView(this.viewIndex, 0 == this.currentTypeSavedItems.length), this.isStart = !0, this.scrollView.getComponent(U).bindScrollEventTarget(this), this.scrollView.getComponent(U).init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), this.isGetData && (this.showViewForData(), this.initCustomFilters()), console.log(this._gameType, O.config.HAVE_MTT), this.isHoldemMTTGame() && O.config.HAVE_MTT ? (this.onShowMttTab(), this.updatePokerPagePanelActive()) : this.mtt_img.active = !1
        }
        onEnable() {
            this.checkIntervalRefresh()
        }
        onDisable() {
            this.stopIntervalRefreshCashGameLobby(), this.stopIntervalRefreshMTTGameLobby()
        }
        onDestroy() {
            O.dataHandler.clearBanner(), O.MessageCenter.unregister("noticeCurrentBoardList", this.node), O.MessageCenter.unregister("Join_room", this.node), O.MessageCenter.unregister(O.config.CHANGE_LANGUAGE, this.node), O.MessageCenter.unregister("update_bannerImg", this.node), O.MessageCenter.unregister("openMatchWebview", this.node), O.MessageCenter.unregister("update_mtt_state", this.node), O.MessageCenter.unregister("FindView_showMttError", this.node), O.MessageCenter.unregister("RequestAuthApi_ForMTT", this.node), O.MessageCenter.unregister("mttNotify", this.node), O.MessageCenter.unregister("onAuthMttSucc", this.node), O.MessageCenter.unregister("onAuthMttError", this.node), O.MessageCenter.unregister(O.Enum.MessageCenterAction.updateMyCashGames, this.node)
        }
        isHoldemMTTGame() {
            return this._gameType == this.MTT_NUM || this._gameType == this.GLOBAL_SPIN_NUM
        }
        setLanguage() {
            O.worldNet.BannerRequest(), this.initLanguage(), 1 == this.isStart && O.config.HAVE_MTT && F.instance.requestToken(), this.setStarTableDotPos()
        }
        updateFilterTogglesState(e = -1) {
            this.onBtnFastEnterClick(null), this.filterToggle.isChecked ? this.onFilterItemClicked(e) : this.setViewIndex(O.Number(O.tools.GetStringByCCFile(this.SAVE_wxzd) || "-1"));
            let t = O.String(this._gameType);
            O.tools.SaveStringByCCFile(this.SAVE_gameType, t), this.applyFilterItemClicked(!1), this.updateGameBtn()
        }
        _btnNormal(e) {
            e.getComponent(l).interactable = !0, e.getComponent(l).enabled = !0
        }
        _btnDisabled(e) {
            e.getComponent(l).interactable = !1, e.getComponent(l).enabled = !1
        }
        initLanguage() {
            O.StringTools.setLabelString(this.node, "quick_seat_touch_panel/quick_seat_panel/title_text", "MainScene_Scene_pokerPage_panel_seat_button_text"), O.StringTools.setLabelString(this.node, "quick_seat_touch_panel/quick_seat_panel/game_mode_panel/seat_button/Label", "MainScene_Scene_pokerPage_panel_seat_button_text");
            let e = this._gamebuttonList.length;
            for (let t = 0; t < e; t++) {
                let i, a = _("layout/text", this._gamebuttonList[t]).getComponent(T),
                    s = _("layout/icon", this._gamebuttonList[t]).getComponent(C);
                i = O.config.isOverSeas() ? this.PKC_GAME_TYPE[t] : this.PKW_GAME_TYPE[t], i == this.MTT_NUM && O.dataHandler.getUserData().isViewWPT ? a.string = "WPT" : (a.string = O.config.getStringData(O.StringTools.formatC("MainScene_Scene_gameType_panel_button%d_text", i)).toUpperCase(), O.appConfig.isLandscapeLayout || (a.string = a.string.replace(" ", "\n")), i == this.MTT_NUM && (a.string = "MTT"), e < 6 && (s.spriteFrame = this.arrSprLobbyTabIcon[i])), s.node.active = !!s.spriteFrame;
                a.node.getPosition();
                let n = O.resMgr.getLabelStringSize(a).width;
                e < 6 && (a.node.setPosition(this.spacingOffsetAlignTextTab, a.node.position.y), s.node.setPosition(-n / 2 - this.spacingOffsetAlignTextTab, s.node.position.y))
            }
        }
        registerMsg() {
            O.MessageCenter.register("noticeCurrentBoardList", this.noticeCurrentBoardList.bind(this), this.node), O.MessageCenter.register("Join_room", this.inputPsdForJoinRoom.bind(this), this.node), O.MessageCenter.register(O.config.CHANGE_LANGUAGE, this.setLanguage.bind(this), this.node), O.MessageCenter.register("update_bannerImg", this.initBanner.bind(this), this.node), O.MessageCenter.register("openMatchWebview", this.openMatchWebview.bind(this), this.node), O.MessageCenter.register("update_mtt_state", this.updateMTTState.bind(this), this.node), O.MessageCenter.register("FindView_showMttError", this.showMttError.bind(this), this.node), O.MessageCenter.register("RequestAuthApi_ForMTT", this.RequestAuthApi_ForMTT.bind(this), this.node), O.MessageCenter.register("mttNotify", this.mttNotify.bind(this), this.node), O.MessageCenter.register("onAuthMttSucc", this.onAuthMttSucc.bind(this), this.node), O.MessageCenter.register("onAuthMttError", this.onAuthMttError.bind(this), this.node), O.MessageCenter.register(O.Enum.MessageCenterAction.updateMyCashGames, this.updateMyCashGames.bind(this), this.node)
        }
        inputPsdForJoinRoom(e) {
            O.TP.showMsg("", !0, this.checkPwd.bind(this, e), null, !0, !1, O.config.getStringData("TipsPanel_Title1"))
        }
        checkPwd(e) {
            let t = O.TP.getEditBoxString(),
                i = t.search(" ");
            t.length <= 0 || -1 != i ? O.TT.showMsg(O.config.getStringData("ErrorCode2"), O.Enum.ToastType.ToastTypeWarning) : O.roomManager.RequestJoinRoom(O.Enum.GameId.Texas, e, !1, !0, t)
        }
        onSVEventBounceTop(e) {
            this.isTopSend || (this.isTopSend = !0, O.worldNet.requestCurrentBoardList(), this.resetIntervalRefreshCashGameLobby())
        }
        noticeCurrentBoardList() {
            this.setShowLoadingMessage(!1), S(this.refresh) && this.refresh.active && this.refresh.getComponent(ie).hideRefresh();
            var e = this.isTopSend;
            this.isTopSend = !1, this.itemData = O.clubDataMgr.getClubCurrentBoardList(), this.setShowLoadingMessage(!1), this.initJspkList(), this.updateGameTypeDataAndView(e)
        }
        setStarTableDotPos() {
            let e = this._gamebuttonList.length;
            for (let t = 0; t < e; t++) {
                let e = _("star_icon_dot", this._gamebuttonList[t]),
                    i = _("layout/text", this._gamebuttonList[t]),
                    a = e.getPosition();
                a.x = i.getPosition().x + O.resMgr.getLabelStringSize(i.getComponent(T)).width / 2 + 8, e.setPosition(a)
            }
            for (let e = 0; e < 4; e++) {
                let t = _(O.StringTools.formatC(this.mainNodeName + this.pokerPagePanelHeaderPath + "button%d/live_icon", e), this.node),
                    i = _(O.StringTools.formatC(this.mainNodeName + this.pokerPagePanelHeaderPath + "button%d/layout/text", e), this.node);
                t.setPosition(M(i.position.x + O.resMgr.getLabelStringSize(i.getComponent(T)).width / 2 + 5, t.position.y, t.position.z))
            }
        }
        setStarTableStatus() {
            if (!O.appConfig.getLobbyConfig().showStarSeats) return;
            let e = this.getHaveTexasStarTable(this.itemData, O.Enum.CreateGameMode.CreateGame_Mode_Normal),
                t = this.getHaveTexasStarTable(this.itemData, O.Enum.CreateGameMode.CreateGame_Mode_Short),
                i = this._gamebuttonList.length;
            for (let a = 0; a < i; a++) {
                let i = -1;
                i = O.config.isOverSeas() ? this.PKC_GAME_TYPE[a] : this.PKW_GAME_TYPE[a];
                let s = _("star_icon_live", this._gamebuttonList[a]),
                    n = _("star_icon_dot", this._gamebuttonList[a]);
                s.active = !1, n.active = !1;
                let o = 0;
                1 == i ? o = e : 2 == i && (o = t), 1 == o ? n.active = !0 : 2 == o && (s.active = !0)
            }
            let a = this.getHaveTexasStarTable(this.microBucket),
                s = this.getHaveTexasStarTable(this.lowBucket),
                n = this.getHaveTexasStarTable(this.midBucket),
                o = this.getHaveTexasStarTable(this.highBucket);
            _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button0/live_icon", this.node).active = 2 == a && 0 != this.viewIndex, _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button1/live_icon", this.node).active = 2 == s && 1 != this.viewIndex, _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button2/live_icon", this.node).active = 2 == n && 2 != this.viewIndex, _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button3/live_icon", this.node).active = 2 == o && 3 != this.viewIndex, this.setStarTableDotPos()
        }
        getHaveTexasStarTable(e, t = O.Enum.CreateGameMode.CreateGame_Mode_None) {
            let i = e.length,
                a = 0,
                s = [];
            for (let a = 0; a < i; a++) t == O.Enum.CreateGameMode.CreateGame_Mode_None ? e[a].game_id == O.Enum.GameId.StarSeat && s.push(e[a]) : e[a].game_id == O.Enum.GameId.StarSeat && t == e[a].game_mode && s.push(e[a]);
            s.length > 0 && (a = 1);
            for (let e = 0; e < s.length; e++) {
                let t = s[e].starData;
                for (let e = 0; e < t.length; e++)
                    if (2 != t[e].status) {
                        a = 2;
                        break
                    }
            }
            return a
        }
        updateGameTypeDataAndView(e = !0) {
            let t = this.screenByGame(),
                i = O.StringTools.getArrayLength(t);
            if (O.appConfig.getWalletConfig().checkAndSetGamesCurrency(t), O.appConfig.getWalletConfig().checkAndSetGamesCurrency(this._jspkArr), this.microBucket = [], this.lowBucket = [], this.midBucket = [], this.highBucket = [], this._gameType == Y.ALL || this._gameType == Y.BET)
                for (let e = 0; e < i; e++) {
                    let i = t[e];
                    if (i.game_id != O.Enum.GameId.Bet) continue;
                    if (this.hideRoomForProPlayer(i)) continue;
                    let a = i.ante;
                    1 == i.is_mirco ? this.microBucket.push(i) : a <= 500 ? this.lowBucket.push(i) : a >= 1e3 && a <= 1e4 ? this.midBucket.push(i) : a > 1e4 && this.highBucket.push(i)
                }
            if (this._gameType == Y.JACKFRUIT)
                for (let e = 0; e < i; e++) {
                    let i = t[e];
                    if (i.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                        let e = i.big_blind;
                        1 == i.is_mirco ? this.microBucket.push(i) : e <= 200 ? this.lowBucket.push(i) : e >= 500 && e <= 2e3 ? this.midBucket.push(i) : this.highBucket.push(i)
                    } else this.groupByAnte(i)
                } else if (this._gameType != Y.BET && this._gameType != Y.GLOBAL_SPIN)
                    for (let e = 0; e < i; e++) {
                        let i = t[e];
                        i.game_id != O.Enum.GameId.Bet && (this.hideRoomForProPlayer(i) || (i.currency == J.USD ? this.groupByBigBlindUSD(i) : i.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? this.groupByBigBlindNonUSD(i, i.big_blind) : this.groupByAnte(i)))
                    }
            let a = (e, t) => {
                e.length > 1 && this.sortListByTime(e)
            };
            if (a(this.microBucket), a(this.lowBucket), a(this.midBucket), a(this.highBucket), 3 != this._gameType && 4 != this._gameType && this._gameType != Y.JACKFRUIT && this._gameType != Y.PLO && this._gameType != Y.GLOBAL_SPIN) {
                for (let e = O.StringTools.getArrayLength(this._jspkArr) - 1; e >= 0; e--) {
                    let t = this._jspkArr[e];
                    if (!(1 == this._gameType && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short || 2 == this._gameType && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal))
                        if (1 == t.is_mirco) this.microBucket.unshift(t);
                        else if (t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal)
                        if (t.currency == J.USD) this.groupByBigBlindUSD(t);
                        else {
                            const e = t.straddle ? 2 * t.big_blind : t.big_blind;
                            this.groupByBigBlindNonUSD(t, e)
                        }
                    else this.groupByAnte(t)
                }
            }
            this.microBucket.sort(this.sortByStar.bind(this)), this.lowBucket.sort(this.sortByStar.bind(this)), this.midBucket.sort(this.sortByStar.bind(this)), this.highBucket.sort(this.sortByStar.bind(this)), this.showDaAction(t), this.setStarTableStatus(), this.isGetData = !0, this.isStart && (this.updateCurrentTypeSavedItems(), this.showViewForData(), this.initCustomFilters()), Q.instance && !Q.instance.isInitCash && Q.instance.preStartCashGame()
        }
        hideRoomForProPlayer(e) {
            return ae.hideRoomForProPlayer(e)
        }
        groupByBigBlindUSD(e) {
            const t = e.big_blind,
                i = O.roomManager.checkGameIsZoom(e.game_id);
            let a = this.highBucket;
            t <= 50 ? a = this.microBucket : t < 400 ? a = this.lowBucket : t <= 2e3 && (a = this.midBucket), i ? a.unshift(e) : a.push(e)
        }
        groupByBigBlindNonUSD(e, t) {
            1 == e.is_mirco ? this.microBucket.unshift(e) : t < 1e3 ? this.lowBucket.unshift(e) : t < 2e4 ? this.midBucket.unshift(e) : 2e4 == t ? e.straddle && !O.roomManager.checkGameIsZoom(e.game_id) ? this.highBucket.unshift(e) : this.midBucket.unshift(e) : this.highBucket.unshift(e)
        }
        groupByAnte(e) {
            const t = e.ante,
                i = O.roomManager.checkGameIsZoom(e.game_id);
            let a = this.highBucket;
            1 == e.is_mirco ? a = this.microBucket : t < 500 ? a = this.lowBucket : t <= 1e4 && (a = this.midBucket), i ? a.unshift(e) : a.push(e)
        }
        showDaAction(e) {
            if (2 != this.getHaveTexasStarTable(e))
                for (let e = 0; e < this.highBucket.length && !(this.highBucket[e].player_count > 0); e++);
        }
        showViewForData() {
            this.updateMyCashGameData(), this.updateMyCashGameNumber(), this.isHelpView ? this.updateHelpView(this.sHelpName, !1, !1) : this.showScrollView()
        }
        sortWeiArr() {
            this.microBucket.sort((function(e, t) {
                if (e.player_count == t.player_count) return t.player_count_max - e.player_count_max;
                if (0 == e.player_count) return -1;
                if (0 == t.player_count) return 1;
                {
                    let i = t.player_count_max - t.player_count - (e.player_count_max - e.player_count);
                    return 0 == i ? t.player_count_max - e.player_count_max : i
                }
            }))
        }
        initCustomFilters() {
            if (S(this.ef_scroll, !0) && S(this.scrollView, !0) && this.scrollView.node.activeInHierarchy) {
                0 == this.ef_scroll.getComponentsInChildren(N).length && this.updateFilterTogglesState()
            }
        }
        onBtnCardListTypeClick(e) {
            var t;
            this.scrollView.scrollToTop(.05);
            let i = e.target.name.charAt(6);
            if (this.viewIndex == i && !this.isHelpView) return this.resetFilters(), void(this.isMyCashGameListShowing() && this.hideMyCashGameNumber());
            O.AudioMgr.playButtonSound("tab.mp3"), this.setViewIndex(i), this.setStarTableStatus();
            let a = {
                stakeSize: null == (t = _("layout/text", e.target)) ? void 0 : t.getComponent(T).string
            };
            te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.LobbyStakeSelected, O.Enum.Functionality.poker, a), this.choseItemDefault()
        }
        choseItemDefault() {
            let e = this.scrollView.content.children[0];
            if (O.appConfig.isLandscapeLayout && e && this._gameType != this.MTT_NUM) {
                let t = e.getComponent(K);
                null == t || t.onBtnItemClick(null)
            }
        }
        setViewIndex(e) {
            e < 0 ? this._gameType !== this.MTT_NUM && this.resetFilters() : (this.changeView(this.viewIndex, !1), this.changeView(e, !0), this.viewIndex = O.Number(e), O.tools.SaveStringByCCFile(this.SAVE_wxzd, this.viewIndex.toString()), this.isHelpView && (this.isHelpView = !1), this.showScrollView(), this.updateMyCashGameNumber())
        }
        onBtnNoSeeFullClick(e) {
            this.noSeeFull = !this.noSeeFull, this.changeNoSeeFull(this.noSeeFull), this.showScrollView(), O.tools.SaveStringByCCFile(this.SAVE_seeFull, this.noSeeFull ? "1" : "0")
        }
        getContentName() {
            return [O.config.getStringData("MainScene_Scene_pokerPage_panel_button0_text_caps"), O.config.getStringData("MainScene_Scene_pokerPage_panel_button1_text_caps"), O.config.getStringData("MainScene_Scene_pokerPage_panel_button2_text_caps"), O.config.getStringData("MainScene_Scene_pokerPage_panel_button3_text_caps")]
        }
        onBtnPloAllClick() {
            this.updatePloSelectedType(0)
        }
        onBtnPlo4Click() {
            this.updatePloSelectedType(1)
        }
        onBtnPlo5Click() {
            this.updatePloSelectedType(2)
        }
        updatePloSelectedType(e) {
            e === this.ploIndex ? this.ploIndex = -1 : (this.ploIndex = e, O.tools.SaveStringByCCFile(this.SAVE_PLO_Type, this.ploIndex.toString())), O.AudioMgr.playButtonSound("tab.mp3"), this.updatePloTypeButtons(), this.updateGameTypeDataAndView()
        }
        updatePloTypeButtons() {
            let e = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "btn_plo_all", this.node),
                t = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "btn_plo_4", this.node),
                i = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "btn_plo_5", this.node),
                a = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "tab01_line1", this.node),
                s = O.appConfig.getLobbyConfig().showPlo5 && this._gameType == Y.PLO;
            e && e.active != s && (e.active = s), t && t.active != s && (t.active = s), i && i.active != s && (i.active = s), a && a.active != s && (a.active = s), s && (e && this.setFilterBtnState(e, 0 == this.ploIndex), t && this.setFilterBtnState(t, 1 == this.ploIndex), i && this.setFilterBtnState(i, 2 == this.ploIndex))
        }
        updateGameFilterViewStatus() {}
        onBtnFastEnterClick(e) {
            e && (this.updateGameFilterViewStatus(), O.AudioMgr.playButtonSound("button_click.mp3")), this.getFastEnterData(), this.fastEnter_chooseNode.clear(), this.gameModeBtnScreenNum = 0;
            let t = this.getContentName(),
                i = 0,
                a = null,
                n = st,
                o = 0;
            this.ef_scroll.removeAllChildren(), this.ef_scroll.parent.getComponent(s).scrollToTop(), this.getFastEnterSaveRecord(), this.updateFastEnterSavedDataIfNeed();
            for (let e = 0; e < this.fastEnter_dataLen; e++) {
                let s = this.fastEnter_data.get(e),
                    r = !1;
                if (s)
                    for (let h = 0; h < 5; h++) {
                        let l = s.get(h),
                            m = O.StringTools.getArrayLength(l);
                        if (m > 0) {
                            r || (r = !0, o = n[e], i = this.updateGameTitle(e, i), this.addSearchBar(e)), a = f(this.fastEnter_content), this.ef_scroll.addChild(a), a.getComponent(q).gameModeType.string = t[h];
                            let s = [],
                                g = _("Layout", a);
                            for (let e = 0; e < m; e++) {
                                let t = _("Layout/game_mode_button" + e, a);
                                t ? s.push(t) : (t = f(s[e % 3]), s.push(t), g.addChild(t))
                            }
                            if (m < 3)
                                for (let e = m; e < 3; e++) _("Layout/game_mode_button" + e, a).active = !1;
                            for (let e = 0; e < m; e++) {
                                let t = s[e];
                                this.getBtnTextNode(t).getComponent(T).string = l[e];
                                let i = o;
                                this.initRecordView(_("button_screen_image", t), l[e], i), this.wireBtnClickedEvent(t, i)
                            }
                        }
                    }
            }
            if (e) {
                this.updateUIBasedOnContent(i);
                let e = {
                    item: "showFiltersButton"
                };
                te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.Clicked, O.Enum.Functionality.poker, e)
            }
        }
        updateFastEnterSavedDataIfNeed() {
            let e = this.fastEnter_saveData.length,
                t = [];
            for (let i = 0; i < e; i++) {
                let e = this.fastEnter_saveData[i];
                this.checkFastEnterSaveRecordIsAvailable(e) || t.push(e)
            }
            if (t.length) {
                for (let e of t) {
                    let t = this.fastEnter_saveData.indexOf(e);
                    this.fastEnter_saveData.splice(t, 1), this.fastEnter_chooseNode && this.fastEnter_chooseNode.remove(e)
                }
                this.setFastEnterSaveRecord(), this.updateCurrentTypeSavedItems()
            }
        }
        checkFastEnterSaveRecordIsAvailable(e) {
            let t = e.indexOf("+"),
                i = e.slice(0, t),
                a = e.slice(t + 1),
                s = st;
            for (let e = 0; e < this.fastEnter_dataLen; e++)
                if (O.Number(a) == s[e]) {
                    let t = this.fastEnter_data.get(e);
                    if (!t || 0 == t.length) return !0;
                    for (let e = 0; e < 5; e++) {
                        let a = t.get(e),
                            s = O.StringTools.getArrayLength(a);
                        for (let e = 0; e < s; e++)
                            if (a[e] == i) return !0
                    }
                    return !1
                } return !1
        }
        getBtnTextNode(e) {
            return _("Label", e)
        }
        wireBtnClickedEvent(e, t) {
            _("button_text", e).getComponent(T).string = t.toString(), e.on("click", (() => {
                O.AudioMgr.playButtonSound("tab.mp3");
                let i = _("button_screen_image", e);
                i.active = !i.active, this.setChooseNodeData(i, i.active, t), i.active ? this.gameModeBtnScreenNum++ : this.gameModeBtnScreenNum--, this.onFilterItemClicked()
            }))
        }
        updateGameTitle(e, t) {
            let i = [O.config.getStringData("Filtrate_filtrate_panel_normal_game_button_2"), O.config.getStringData("DataView_gameType_panel_button_1_text"), O.config.getStringData("DataView_data_panel_dataInfo_panel_aofGameShort_button"), O.config.getStringData("DataView_data_panel_dataInfo_panel_bet_button"), O.config.getStringData("DataView_gameType_panel_button_1_text"), O.config.getStringData("DataView_data_panel_dataInfo_panel_zoomGame_button"), O.config.getStringData("MainScene_Scene_gameType_panel_button7_text")],
                a = f(this.fastEnter_titile);
            return this.ef_scroll.addChild(a), i[e] = O.tools.updateGameType(i[e]), _("game_mode_title_title", a).getComponent(T).string = i[e], t
        }
        addSearchBar(e) {
            if (6 == e) {
                let e = f(this.fastEnter_search);
                this.ef_scroll.addChild(e), this.searchComp = e.getComponent(z), this.searchComp.searchBox.string = "", this.searchComp.searchBox.placeholder = O.config.getStringData("jackfruit_find_view_search_label"), this.searchComp.editingReturnCb = this.searchBtnClickEvent.bind(this)
            }
        }
        searchBtnClickEvent() {
            let e = this.searchComp.searchBox.string;
            4 == e.length ? this.updateHelpView(e) : O.TT.showMsg(O.config.getStringData("jackfruit_find_view_search_tips"), O.Enum.ToastType.ToastTypeInfo)
        }
        updateUIBasedOnContent(e) {
            let t = _("quick_seat_touch_panel", this.node),
                i = _("bottomView", this.node.parent);
            if (w.stopAllByTarget(t), this.saveOriginalSiblingIndex(), this.node.setSiblingIndex(i.getSiblingIndex() + 1), this._isShowFullHeight = !0, this.quickPanelSlideView) this.quickPanelSlideView.show(!1, this.onCloseQuickPanelSlideView.bind(this)), this.quickPanelSlideView.node.getComponentsInChildren(N).forEach((e => {
                e.isChecked ? e.btnState = L.pressed : e.btnState = L.normal
            }));
            else {
                t.active = !0, t.setPosition(this.quickPanelPos);
                let e = t.getPosition();
                E(t).by(.2, {
                    position: M(e.x, t.getComponent(p).height, 0)
                }).start()
            }
        }
        saveOriginalSiblingIndex() {
            this._originalSiblingIndex = this.node.getSiblingIndex()
        }
        onCloseQuickPanelSlideView() {
            this.applyFilterItemClicked(!0), S(this) && S(this.node) && this.node.setSiblingIndex(this._originalSiblingIndex)
        }
        onClickTopBar() {
            O.AudioMgr.playButtonSound("button_click.mp3");
            let e = _("quick_seat_touch_panel", this.node),
                t = _("quick_seat_touch_panel/quick_seat_panel", this.node),
                i = e.getComponent(p).height / 2;
            this._isShowFullHeight && (i = -e.getComponent(p).height / 2), E(t).by(.2, {
                position: new d(0, i)
            }).start(), this._isShowFullHeight = !this._isShowFullHeight
        }
        onBtnFastSeatClick(e) {
            O.AudioMgr.playButtonSound("button_click.mp3"), e.propagationStopped = !0, this.setFastEnterSaveRecord(), this.fastEnter_chooseNode.length <= 0 ? O.TT.showMsg(O.config.getStringData("UIMainTips01"), O.Enum.ToastType.ToastTypeError) : (this.trackLobbyFilterApplied(!0), O.security.tryJoinPokerRoom(this.joinFastSeat.bind(this)))
        }
        trackLobbyFilterApplied(e) {
            let t = [];
            for (let e = 0; e < this.fastEnter_saveData.length; ++e) {
                let i = this.fastEnter_saveData[e].indexOf("+"),
                    a = this.fastEnter_saveData[e].slice(0, i);
                t.push(a)
            }
            t.sort();
            let i = {
                stakeSizes: t,
                skipLobby: e
            };
            te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.LobbyFilterApplied, O.Enum.Functionality.poker, i)
        }
        joinFastSeat() {
            let e = O.native.IsSimulator();
            e || O.dataHandler.getUserData().isallowsimulator || (e = O.native.localIsZero());
            let t = [],
                i = this.screenByGame(),
                a = O.StringTools.getArrayLength(i),
                s = this.fastEnter_saveData.length;
            for (let n = 0; n < a; n++) {
                let a = i[n],
                    o = this.getManZhuString(a);
                for (let i = 0; i < s; i++) {
                    let s = this.fastEnter_saveData[i].indexOf("+"),
                        n = O.Number(this.fastEnter_saveData[i].slice(s + 1));
                    if (o == this.fastEnter_saveData[i].slice(0, s) && this.compareType(a, n)) {
                        let i = (new Date).getTime() / 1e3;
                        if ((1 == a.is_mirco || 2 != a.has_buyin || a.IscalcIncomePerhand || a.game_id == O.Enum.GameId.Bet || a.game_id == O.Enum.GameId.Jackfruit || a.game_id == O.Enum.GameId.Plo) && a.join_password.length <= 0 && a.buyin_password.length <= 0 && (i - a.create_time) / 3600 < 24) {
                            let s = 0;
                            s = 0 == a.start_time ? 0 : (i - a.start_time) / 3600, (O.Number(O.config.getStringData(O.StringTools.formatC("UITime%d", a.rule_time_limit - 1))) - s + a.extra_time / 3600 >= 2 || 1 == a.is_mirco || a.game_id == O.Enum.GameId.Bet || a.IscalcIncomePerhand || a.game_id == O.Enum.GameId.Jackfruit || a.game_id == O.Enum.GameId.Plo) && (a.left_seatnum > 0 || a.game_id == O.Enum.GameId.Plo) && (e && !a.anti_simulator || t.push(a))
                        }
                    }
                }
            }
            if (t.length <= 0) return void O.TT.showMsg(O.config.getStringData("UIMainTips01"), O.Enum.ToastType.ToastTypeError);
            t.sort(this.sortByTimeAndPeople.bind(this));
            O.GameDataManager.getOrCreateDataInstance(t[0].game_id, t[0].room_id).tRoomData.entry_clubid = t[0].club_id, O.roomManager.RequestJoinRoom(t[0].game_id, t[0].room_id, !0);
            let n = t[0].anti_cheating;
            0 == t[0].has_buyin ? n && !O.native.HaveGps(!1) || O.tools.SaveStringByCCFile("FINDVIEW_isFASTENTER", "1") : 1 == t[0].has_buyin && O.tools.SaveStringByCCFile("FINDVIEW_isFASTENTER", "2")
        }
        onBtnHelpChooseClick(e) {
            O.AudioMgr.playButtonSound("button_click.mp3"), e.propagationStopped = !0, this.setFastEnterSaveRecord(), this.updateHelpView("", !0)
        }
        onFilterItemClicked(e = -1) {
            this.isFilterChanged = !0, O.appConfig.isLandscapeLayout && this.updateHelpView("", !1, !0), this.setFastEnterSaveRecord();
            let t = this.scrollView.getComponent(U).sv.content.children[0];
            e != this.MTT_NUM && O.appConfig.isLandscapeLayout && t && t.getComponent(K) && t.getComponent(K).onBtnItemClick(null)
        }
        applyFilterItemClicked(e) {
            this.isFilterChanged && (this.isFilterChanged = !1, this.updateHelpView("", !1, e))
        }
        hideMttGameFilterPopup() {}
        updateHelpData(e = !1) {
            let t = this.getDataForGameMode();
            if (e) this.helpData = t;
            else
                for (let e = 0; e < O.StringTools.getArrayLength(t); e++) {
                    let i = t[e],
                        a = this.getManZhuString(i);
                    for (let e = 0; e < this.currentTypeSavedItems.length; e++) {
                        let t = this.currentTypeSavedItems[e].indexOf("+");
                        if (a == this.currentTypeSavedItems[e].slice(0, t)) {
                            this.helpData.push(i);
                            break
                        }
                    }
                }
        }
        setHelpData() {
            this.currentTypeSavedItems.length > 0 ? this.updateHelpData(!1) : this.updateHelpData(!0)
        }
        updateCurrentTypeSavedItems() {
            this.currentTypeSavedItems = [];
            for (let e = 0; e < this.fastEnter_saveData.length; ++e) {
                let t = this.fastEnter_saveData[e].indexOf("+");
                O.Number(this.fastEnter_saveData[e].slice(t + 1)) == this._gameType && this.currentTypeSavedItems.push(this.fastEnter_saveData[e])
            }
            this.updateCustomFilterToggleBtn()
        }
        updateHelpView(e = "", t = !0, i = !0) {
            this.sHelpName = e, "" == e ? (this.updateCurrentTypeSavedItems(), this.helpData = [], this.setHelpData(), this.sortListByTime(this.helpData), this.changeView(this.viewIndex, !1), this.isHelpView = !0, this.showScrollView(), t && this.hideQuickEnterView(), i && this.trackLobbyFilterApplied(!1)) : this.setHelpViewByName(e)
        }
        setHelpViewByName(e) {
            this.sHelpName = e, this.helpData = [];
            let t = this.screenByGame(),
                i = O.StringTools.getArrayLength(t);
            for (let a = 0; a < i; a++) {
                let i = t[a]; - 1 != i.room_name.indexOf(e) && this.helpData.push(i)
            }
            0 != this.helpData.length ? (this.sortListByTime(this.helpData), this.changeView(this.viewIndex, !1), this.isHelpView = !0, this.showScrollView(), this.hideQuickEnterView()) : O.TT.showMsg(O.config.getStringData("UIMainTips01"), O.Enum.ToastType.ToastTypeError)
        }
        setChooseNodeData(e, t, i) {
            let a = this.getBtnTextNode(e.getParent()).getComponent(T).string + "+" + i;
            if (e.active = t, t) {
                if (this.fastEnter_saveData.length >= 5) {
                    let e = this.fastEnter_saveData[0];
                    this.fastEnter_chooseNode.forEach(((t, i, a) => {
                        if (t == e) return i.active = !1, this.setFilterBtnState(i.parent, !1), this.gameModeBtnScreenNum--, "break"
                    })), this.fastEnter_chooseNode.remove(e), this.fastEnter_saveData.splice(0, 1), console.log("-------------\x3e yyx:  len =" + this.fastEnter_saveData.length)
                }
                this.fastEnter_chooseNode.add(a, e), this.pushFastEnterData(a), console.log("-------------\x3e yyx: addSaveData ->" + a + ", len =" + this.fastEnter_saveData.length)
            } else {
                this.fastEnter_chooseNode.remove(a);
                let e = this.fastEnter_saveData.length;
                for (let t = 0; t < e; t++)
                    if (this.fastEnter_saveData[t] == a) {
                        this.fastEnter_saveData.splice(t, 1);
                        break
                    }
            }
        }
        initRecordView(e, t, i) {
            let a = this.fastEnter_saveData.length;
            for (let s = 0; s < a; s++) {
                let a = this.fastEnter_saveData[s].indexOf("+"),
                    n = this.fastEnter_saveData[s].slice(0, a),
                    o = this.fastEnter_saveData[s].slice(a + 1);
                if (t == n && O.Number(o) == i) return console.log("-------------\x3e yyx:  " + t), this.setFilterBtnState(e.parent, !0), e.active = !0, this.fastEnter_chooseNode.add(this.fastEnter_saveData[s], e), void this.gameModeBtnScreenNum++
            }
        }
        getActiveFilterBtnText() {
            let e = "none";
            for (let t = 0; t < 5; t++) {
                if (_(this.mainNodeName + this.pokerPagePanelHeaderPath + "button" + t, this.node).getComponent(N).isChecked) {
                    e = O.config.getStringData("MainScene_Scene_pokerPage_panel_button" + t + "_text");
                    break
                }
            }
            return e
        }
        setFilterBtnState(e, t) {
            if (!S(e, !0)) return;
            let i = e.getComponent(N);
            t ? (i.btnState = L.pressed, i.isChecked = !0) : (i.btnState = L.normal, i.isChecked = !1)
        }
        pushGameModeData(e, t) {
            let i = this.getManZhuString(t),
                a = this.fastEnter_data.get(e);
            a || (this.fastEnter_data.add(e, new H), a = this.fastEnter_data.get(e));
            let s = 0;
            if (t.game_id == O.Enum.GameId.Bet) {
                let e = t.ante;
                1 == t.is_mirco ? s = 0 : e <= 500 ? s = 1 : e >= 1e3 && e <= 1e4 ? s = 2 : e > 1e4 && (s = 3)
            } else if (t.game_id == O.Enum.GameId.Jackfruit) {
                let e = t.ante;
                1 == t.is_mirco ? s = 0 : e <= 200 ? s = 1 : e >= 500 && e <= 2e3 ? s = 2 : e > 2e3 && (s = 3)
            } else if (t.currency == J.USD) {
                let e = t.big_blind;
                s = e <= 50 ? 0 : e <= 200 ? 1 : e <= 2e3 ? 2 : 3
            } else {
                let e = t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short ? t.ante : t.small_blind;
                s = e < 100 ? 0 : e < 500 ? 1 : e <= 1e4 ? 2e4 == t.big_blind && t.straddle && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && !O.roomManager.checkGameIsZoom(t.game_id) ? 3 : 2 : 3
            }
            let n = a.get(s);
            n || (a.add(s, []), n = a.get(s)), this.isNoHaveString(n, i) && n.push(i)
        }
        generateIndexAndPushDataForGameMode(e) {
            let t = -1;
            e.game_id == O.Enum.GameId.Bet ? t = 0 : e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? e.game_id == O.Enum.GameId.Allin ? t = 1 : e.game_id == O.Enum.GameId.Texas || e.game_id == O.Enum.GameId.ZoomTexas ? t = 3 : e.game_id == O.Enum.GameId.Jackfruit ? t = 6 : e.game_id != O.Enum.GameId.Plo && e.game_id != O.Enum.GameId.Plo5 || (t = 7) : e.game_id == O.Enum.GameId.Allin ? t = 2 : e.game_id == O.Enum.GameId.Texas ? t = 4 : e.game_id == O.Enum.GameId.Jackfruit && (t = 6), -1 != t && this.pushGameModeData(t, e)
        }
        clearFastEnterData() {
            if (this.fastEnter_data.length > 0)
                for (let e = 0; e < this.fastEnter_dataLen; e++) {
                    let t = this.fastEnter_data.get(e);
                    t && t.length > 0 && t.clear()
                }
        }
        formatFastEnterData() {
            for (let e = 0; e < this.fastEnter_dataLen; e++) {
                let t = this.fastEnter_data.get(e);
                if (t)
                    for (let e = 0; e < 4; e++) {
                        let i = t.get(e);
                        O.StringTools.getArrayLength(i) > 1 && i.sort((function(e, t) {
                            let i = e.replace(/K/i, "000"),
                                a = t.replace(/K/i, "000"),
                                s = !1,
                                n = !1,
                                o = i.indexOf(" (HU)"),
                                r = a.indexOf(" (HU)"); - 1 != o && (i = i.slice(0, o), s = !0), -1 != r && (a = a.slice(0, r), n = !0);
                            let h = i.split("/"),
                                l = a.split("/");
                            return O.Number(h[0]) == O.Number(l[0]) ? h.length == l.length ? s == n ? -1 : s ? 1 : -1 : h.length - l.length : O.Number(h[0]) - O.Number(l[0])
                        }))
                    }
            }
        }
        getDataForGameMode() {
            return [...this.microBucket, ...this.lowBucket, ...this.midBucket, ...this.highBucket]
        }
        getCompactDataForGameMode() {
            const e = function(e, t) {
                    if (t.currency == J.USD && t.currency != e.currency) return 1;
                    if (t.currency == e.currency) {
                        if (e.big_blind > t.big_blind) return 1;
                        if (e.big_blind == t.big_blind) {
                            if (e.player_count_max < t.player_count_max) return 1;
                            if (e.straddle && !t.straddle) return 1
                        }
                    }
                    return -1
                },
                t = function(t) {
                    return t.map((e => ({
                        currency: e.currency,
                        big_blind: e.big_blind,
                        small_blind: e.small_blind,
                        player_count_max: e.player_count_max,
                        ante: e.ante,
                        is_mirco: e.is_mirco,
                        game_mode: e.game_mode,
                        game_id: e.game_id,
                        straddle: e.straddle
                    }))).sort(e)
                };
            return [...t(this.microBucket), ...t(this.lowBucket), ...t(this.midBucket), ...t(this.highBucket)]
        }
        generateGameModeData(e) {
            let t = O.StringTools.getArrayLength(e);
            for (let i = 0; i < t; i++) {
                let t = e[i];
                this.generateIndexAndPushDataForGameMode(t)
            }
        }
        getFastEnterData() {
            this.clearFastEnterData();
            let e = this.getCompactDataForGameMode();
            this.generateGameModeData(e)
        }
        isNoHaveString(e, t) {
            for (let i = 0; i < e.length; i++)
                if (e[i] == t) return !1;
            return !0
        }
        getManZhuString(e) {
            let t = "";
            if (e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short || e.game_id == O.Enum.GameId.Bet) {
                let i = O.StringTools.serverGoldToShowNumber(e.ante);
                t = O.StringTools.formatC("%s%s", (i >= 1e3 ? i / 1e3 : i).toString(), i >= 1e3 ? "K" : "")
            } else if (e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                let i = O.StringTools.serverGoldToShowNumber(e.big_blind),
                    a = O.StringTools.serverGoldToShowNumber(e.small_blind),
                    s = i >= 1e3 ? i / 1e3 : i,
                    n = a >= 1e3 ? a / 1e3 : a,
                    o = O.StringTools.formatC("%s%s", O.StringTools.toFixedAsString(O.Number(s), O.currencyManager.defaultRoundDecimal), i >= 1e3 ? "K" : ""),
                    r = O.StringTools.formatC("%s%s", O.StringTools.toFixedAsString(O.Number(n), O.currencyManager.defaultRoundDecimal), a >= 1e3 ? "K" : "");
                if (t = O.StringTools.formatC("%s/%s", r.toString(), o.toString()), e.straddle) {
                    let e = O.StringTools.times(i, 2),
                        a = O.StringTools.toFixedAsString(O.Number(e), O.currencyManager.defaultRoundDecimal),
                        s = O.StringTools.toFixedAsString(O.Number(O.StringTools.div(e, 1e3)), O.currencyManager.defaultRoundDecimal);
                    t = O.StringTools.formatC("%s/%s", t, e >= 1e3 ? s + "K" : a)
                }
            }
            if (e.currency == J.USD) {
                t = j[e.currency].symbol + t
            }
            return 2 == e.player_count_max && (t += " (HU)"), t
        }
        compareItem(e, t) {
            let i = e.small_blind,
                a = t.small_blind;
            return 0 == e.start_time && 0 != t.start_time || 0 != e.start_time && 0 == t.start_time ? t.start_time - e.start_time : (e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && (i = e.ante), t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && (a = t.ante), i == a ? e.start_time == t.start_time && 0 == e.start_time ? e.create_time - t.create_time : e.start_time - t.start_time : a - i)
        }
        compareManZhu(e, t) {
            let i = e.small_blind,
                a = t.small_blind;
            if (e.game_mode == t.game_mode && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                if (i == a) {
                    if (e.straddle != t.straddle) {
                        let i = e.straddle ? 1 : 0;
                        return (t.straddle ? 1 : 0) - i
                    }
                    return e.ante == t.ante ? e.start_time == t.start_time && 0 == e.start_time ? t.create_time - e.create_time : t.start_time - e.start_time : t.ante - e.ante
                }
                return a - i
            }
            return e.game_mode == t.game_mode && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short ? e.ante == t.ante ? e.start_time == t.start_time && 0 == e.start_time ? t.create_time - e.create_time : t.start_time - e.start_time : t.ante - e.ante : (t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && (a = t.ante), e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && (i = e.ante), i == a ? t.game_mode - e.game_mode : a - i)
        }
        changeView(e, t) {
            let i = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "button" + e, this.node);
            t && this.resetFilterPanel(), e >= 0 && (this.isMyCashGameListShowing() && !t && this.hideMyCashGameNumber(), this.setFilterBtnState(i, t))
        }
        updateCustomFilterToggleBtn() {
            let e = this.currentTypeSavedItems.length > 0;
            this.setFilterBtnState(this.filterToggle.node, e)
        }
        resetFilterPanel() {
            let e = this.ef_scroll.getComponentsInChildren(N),
                t = !1;
            for (let i = 0; i < e.length; ++i)
                if (e[i].btnStyle === D.filterBtn && e[i].btnState == L.pressed) {
                    e[i].isChecked = !1, e[i].btnState = L.normal;
                    let a = _("button_screen_image", e[i].node),
                        s = _("button_text", e[i].node).getComponent(T).string;
                    a.active = !1, this.setChooseNodeData(a, a.active, Number(s)), a.active ? this.gameModeBtnScreenNum++ : this.gameModeBtnScreenNum--, t = !0
                } this.fastEnter_saveData.length > 0 && (this.fastEnter_saveData.splice(0, this.fastEnter_saveData.length), t = !1), t && (this.setFastEnterSaveRecord(), this.updateCurrentTypeSavedItems()), this.setFilterBtnState(this.filterToggle.node, !1)
        }
        changeNoSeeFull(e) {
            let t = _(this.mainNodeName + this.pokerPagePanelHeaderPath + "checkBoxButton", this.node);
            this.setFilterBtnState(t, e)
        }
        showScrollView() {
            if (!this.isHelpView && this.isMyCashGameListShowing()) return void this.updateListviewData(this.myCashGameData);
            let e = [this.microBucket, this.lowBucket, this.midBucket, this.highBucket],
                t = this.isHelpView ? this.helpData : e[this.viewIndex];
            if (this.viewIndex < 0 && !this.isHelpView && (t = this.microBucket.concat(this.lowBucket, this.midBucket, this.highBucket)), this.noSeeFull) {
                let e = [],
                    i = t.length;
                for (let a = 0; a < i; a++)(t[a].player_count < t[a].player_count_max || O.roomManager.checkGameIsZoom(t[a].game_id)) && e.push(t[a]);
                this.updateListviewData(e)
            } else this.updateListviewData(t)
        }
        getFastEnterSaveRecord() {
            this.fastEnter_saveData = [];
            for (let e = 0; e < 7; e++) {
                let t = O.tools.GetStringByCCFile(this.SAVE_helpChoose + e);
                O.StringTools.getArrayLength(t) > 0 && this.pushFastEnterData(t)
            }
        }
        pushFastEnterData(e) {
            let t = this.fastEnter_saveData.length,
                i = !1;
            for (let a = 0; a < t; a++)
                if (e == this.fastEnter_saveData[a]) {
                    i = !0;
                    break
                } i || this.fastEnter_saveData.push(e)
        }
        setFastEnterSaveRecord() {
            for (let e = 0; e < 7; e++) O.tools.SaveStringByCCFile(this.SAVE_helpChoose + e, "");
            let e = this.fastEnter_saveData.length;
            for (let t = 0; t < e; t++) O.tools.SaveStringByCCFile(this.SAVE_helpChoose + t, this.fastEnter_saveData[t])
        }
        onClickCloseBtn() {
            this.updateCustomFilterToggleBtn(), this.hideQuickEnterView(), O.AudioMgr.playButtonSound("close.mp3");
            te.getInstance().sendEvent(O.Enum.CurrentScreen.lobby, O.Enum.segmentEvent.Clicked, O.Enum.Functionality.poker, {
                item: "closeFiltersButton"
            })
        }
        hideQuickEnterView() {
            if (this.quickPanelSlideView) this.quickPanelSlideView.hide();
            else {
                let e = _("quick_seat_touch_panel", this.node);
                if (!e || !e.active) return;
                w.stopAllByTarget(e), E(e).to(.15, {
                    position: new d(this.quickPanelPos.x, this.quickPanelPos.y)
                }).call((() => {
                    e.active = !1
                })).start()
            }
        }
        showMailBtn(e) {
            e ? O.MessageCenter.send("show_mail_entrance") : O.MessageCenter.send("hide_mail_entrance");
            let t = this.node.parent.getChildByName("switchServer");
            t && (t.active = e);
            let i = this.node.parent.getChildByName("kefu");
            i && (i.active = e);
            let a = this.node.parent.getChildByName("goldView_pref");
            a && (a.active = e);
            let s = this.node.parent.getChildByName("safe");
            s && !O.config.isOverSeas() && (s.active = e), O.MessageCenter.send(O.Enum.MessageCenterAction.RGButtonVisible, e)
        }
        initBanner() {
            if (!O.appConfig.getLobbyConfig().isEnableBanner) return;
            this.img_PageView.removeAllPages(), this.img_PageView.scrollToLeft();
            let e = this._whiteCircleList.length;
            for (let t = 0; t < e; t++) this._whiteCircleList[t].removeFromParent();
            this._whiteCircleList = [];
            let t = null,
                i = O.StringTools.getArrayLength(t);
            if (0 == i) {
                let e = (new n).addComponent(C);
                return O.resMgr.setSpriteFrame(e.node, this.getBackgroundBannerImgPath()), e.node.setPosition(.5 * this.img_PageView.node.getComponent(p).width, 0), this.img_PageView.addPage(e.node), e.node.getComponent(p).width = this.img_PageView.node.getComponent(p).width, e.node.getComponent(p).height = this.img_PageView.node.getComponent(p).height, this.setPageCircleimg(0), this.unschedule(this.PageViewAction), void this.img_PageView.scrollToPage(0, .1)
            }
            let a = (i + 1) / 2;
            for (let e = 0; e < i; e++) {
                if (i > 1) {
                    let t = O.resMgr.createSprite(this.discover_panel, "zh_CN/hall/ui/ui_0059_round_yes");
                    this._whiteCircleList.push(t), t.setPosition(this.discover_panel.getComponent(p).contentSize.width / 2 + 25 * (e + 1 - a), this.img_PageView.node.position.y - 128)
                }
                let s = t[e].imageUrl,
                    o = t[e].webViewUrl,
                    r = (new n).addComponent(C);
                this.setSpriteByDownload(r, s), r.node.setPosition((e + .5) * this.img_PageView.node.getComponent(p).width, 0), this.img_PageView.addPage(r.node), this.img_PageView.content.getComponent(p).setContentSize(this.img_PageView.content.getComponent(p).width * (e + 1), this.img_PageView.content.getComponent(p).height), o.length > 0 && r.node.on(n.EventType.TOUCH_END, (e => {
                    if (console.log("!!!!!!" + o), -1 != o.search("ggjs:")) {
                        let e = o.substr(5, o.length);
                        return e = e + "&uid=" + O.dataHandler.getUserData().u32Uid, void O.MessageCenter.send("jumpgto_notice", e)
                    }
                    if (v.isBrowser) {
                        if (O.config.isSiyuType()) {
                            let e = '{"cmd": "1006", "url":"%s", "op":1, "width":%d, "height":%d}',
                                t = 0;
                            v.os == v.OS.IOS && O.config.IS_IPHONEX_SCREEN && (t = 0);
                            let i = O.StringTools.formatC(e, o, O.config.WIDTH, O.config.HEIGHT - t);
                            O.native.SYwebjsToClient(i)
                        } else window.open(o);
                        return
                    }
                    let t = new n("banner_webview").addComponent(G);
                    t.node.getComponent(p).setContentSize(O.config.WIDTH, O.config.HEIGHT), t.node.setPosition(.5 * O.config.WIDTH, .5 * O.config.HEIGHT), P.getScene().addChild(t.node), t.url = o, t.setJavascriptInterfaceScheme("ccjs"), t.setOnJSCallback(((e, t) => {
                        if (-1 != t.search("ccjs://https") || -1 != t.search("ccjs://http")) {
                            let e = P.getScene().getComponentInChildren(B).node.getChildByName("banner_webview");
                            e && e.removeFromParent()
                        }
                    }))
                }))
            }
            this.setPageCircleimg(0), this.unschedule(this.PageViewAction), this.schedule(this.PageViewAction, 3), this.img_PageView.scrollToPage(0, .1)
        }
        getBackgroundBannerImgPath() {
            let e = "client_type/";
            O.config.isOverSeas() ? e += "pkc/" : O.config.isThai() ? e += "pkt/" : O.appConfig.isWPTO ? e += "wpto/" : e += "pkw/";
            let t = "banner_0";
            return O.native.isWideScreen() && (t = "banner_1"), e + t
        }
        setSpriteByDownload(e, t) {
            k.loadRemote(t, function(i, a) {
                if (e && S(e, !0)) {
                    if (i) return console.log(i.message || i), void O.resMgr.setSpriteFrame(e.node, this.getBackgroundBannerImgPath());
                    O.resMgr.addLoadRes(t, a), e.spriteFrame = new h, e.spriteFrame.texture = a
                }
            }.bind(this))
        }
        setPageCircleimg(e) {
            if (0 == this._whiteCircleList.length) return;
            let t = this._whiteCircleList.length;
            if (t <= 1) this._whiteCircleList[0].active = !1;
            else
                for (let i = 0; i < t; i++) this._whiteCircleList[i].active = !0, i == e ? O.resMgr.setSpriteFrame(this._whiteCircleList[i], "zh_CN/hall/ui/ui_0059_round_yes") : O.resMgr.setSpriteFrame(this._whiteCircleList[i], "zh_CN/hall/ui/ui_0060_round_no")
        }
        PageViewAction() {
            let e = this._whiteCircleList.length;
            if (e > 1) {
                let t = this.img_PageView.getCurrentPageIndex(),
                    i = t < e - 1 ? t + 1 : 0;
                this.img_PageView.scrollToPage(i, 1)
            }
        }
        touchImgPageview(e) {
            let t = this._whiteCircleList.length,
                i = this.img_PageView.getCurrentPageIndex(),
                a = i >= t ? t - 1 : i;
            this.setPageCircleimg(a)
        }
        setGameType(e, t = !0) {
            this._gameType = e, this.updatePokerPagePanelActive(), t && this.changeView(this.viewIndex, !0), this.checkIntervalRefresh(), this.updatePloTypeButtons()
        }
        updatePokerPagePanelActive() {
            let e = this._gameType != Y.MTT && this._gameType != Y.GLOBAL_SPIN;
            this.pokerPage_panel.active = e, e && (this.filterToggle.node.active = !0)
        }
        setViewGametype(e, t) {
            if (this.showContentView(e), this.isHelpView && (this.isHelpView = !1), e == this._gameType) return;
            this.setGameType(e, !1);
            let i = O.String(this._gameType);
            O.tools.SaveStringByCCFile(this.SAVE_gameType, i)
        }
        showContentView(e) {
            e == this.MTT_NUM ? (this.mtt_img && (this.mtt_img.active = !0), this.scrollView.node.active = !1, this.scrollView_GlobalSpin.node.active = !1) : e == this.GLOBAL_SPIN_NUM ? (this.mtt_img && (this.mtt_img.active = !1), this.scrollView.node.active = !1, this.scrollView_mtt.node.active = !1, this.scrollView_GlobalSpin.node.active = !0) : (this.mtt_img && (this.mtt_img.active = !1), this.scrollView.node.active = !0, this.scrollView_GlobalSpin.node.active = !1)
        }
        initPage() {
            let e = O.tools.GetStringByCCFile("last_pageview");
            O.StringTools.getArrayLength(e)
        }
        initGameType() {
            const e = O.dataHandler.getUserData().forceStartingGameTypeInHall;
            let t, i = e >= 0 ? e.toString() : O.tools.GetStringByCCFile(this.SAVE_gameType);
            O.dataHandler.getUserData().forceStartingGameTypeInHall = -1, O.StringTools.getArrayLength(i) > 0 ? this.setGameType(O.Number(i)) : this.setGameType(Y.DZPK);
            let a = !1;
            t = O.config.isOverSeas() ? this.PKC_GAME_TYPE : this.PKW_GAME_TYPE;
            for (let e = 0; e < t.length; e++)
                if (this._gameType == t[e]) {
                    a = !0;
                    break
                } if (!a && t.length > 0) {
                this.setGameType(t[0]);
                let e = O.String(this._gameType);
                O.tools.SaveStringByCCFile(this.SAVE_gameType, e)
            }
            this.updateGameBtn()
        }
        updateGameBtn() {
            let e = this._gamebuttonList.length;
            for (let t = 0; t < e; t++) {
                let e;
                e = O.config.isOverSeas() ? this.PKC_GAME_TYPE[t] : this.PKW_GAME_TYPE[t], e != this._gameType ? this.setFilterBtnState(this._gamebuttonList[t], !1) : this.setFilterBtnState(this._gamebuttonList[t], !0)
            }
            this.initBanner()
        }
        sortByBlindorAnte(e, t) {
            if (e.game_id > t.game_id) return -1;
            if (e.game_id < t.game_id) return 1;
            if (e.game_id == O.Enum.GameId.Allin && t.game_id == O.Enum.GameId.Allin) return e.big_blind < t.big_blind ? 1 : -1;
            {
                let i, a;
                if (i = e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? e.small_blind : e.ante, a = t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? t.small_blind : t.ante, e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && e.big_blind == t.big_blind) {
                    if (e.straddle && !t.straddle) return -1;
                    if (!e.straddle && t.straddle) return 1
                }
                if (i == a) {
                    if (e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                        if (e.ante != t.ante) return e.ante < t.ante ? 1 : -1
                    } else {
                        if (e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) return 1;
                        if (t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal) return -1
                    }
                    return e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short && (e.ante, t.ante), 0 != e.start_time && 0 != t.start_time ? e.start_time < t.start_time ? 1 : -1 : 0 != e.start_time ? -1 : 0 != t.start_time || e.create_time < t.create_time ? 1 : -1
                }
                return i < a ? 1 : -1
            }
        }
        sortByMixed(e, t) {
            let i, a;
            if (i = e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? e.small_blind : e.ante, a = t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? t.small_blind : t.ante, e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && t.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal && 2e4 == e.big_blind && e.big_blind == t.big_blind) {
                if (e.straddle && !t.straddle) return -1;
                if (!e.straddle && t.straddle) return 1
            }
            return i == a ? e.start_time < t.start_time ? -1 : 1 : i > a ? -1 : 1
        }
        sortByAof(e, t) {
            return e.game_id == O.Enum.GameId.Allin && t.game_id != O.Enum.GameId.Allin ? -1 : (e.game_id != O.Enum.GameId.Allin && (t.game_id, O.Enum.GameId.Allin), 1)
        }
        sortByCreatime(e, t) {
            return e.game_id > t.game_id ? -1 : e.game_id < t.game_id ? 1 : 1 == e.has_buyin && 1 != t.has_buyin ? -1 : 1 != e.has_buyin && 1 == t.has_buyin ? 1 : 1 == e.has_buyin && 1 == t.has_buyin ? e.create_time > t.create_time ? -1 : 1 : 2 == e.has_buyin && 2 != t.has_buyin ? -1 : 2 != e.has_buyin && 2 == t.has_buyin ? 1 : 2 == e.has_buyin && 2 == t.has_buyin ? e.create_time > t.create_time ? -1 : 1 : 0 == e.start_time && 0 != t.start_time ? -1 : 0 != e.start_time && 0 == t.start_time ? 1 : 0 == e.start_time && 0 == t.start_time ? e.create_time > t.create_time ? -1 : 1 : e.start_time > t.start_time ? -1 : 1
        }
        sortListByTime(e) {
            let t = (new Date).getHours();
            t >= 3 && t < 7 ? e.sort(this.sortByCreatime) : e.sort(this.sortByLevel.bind(this))
        }
        screenByGame() {
            let e = [],
                t = [],
                i = [],
                a = this.itemData.length;
            for (let t = 0; t < a; t++) {
                let i = this.itemData[t];
                i.game_id, O.Enum.GameId.StarSeat, e.push(i)
            }
            switch (this._gameType) {
                case Y.ALL:
                    return this.cleanJspkData(e);
                case Y.DZPK:
                    t.push(O.Enum.CreateGameMode.CreateGame_Mode_Normal), i.push(O.Enum.GameId.Texas), O.appConfig.getLobbyConfig().showStarSeats && i.push(O.Enum.GameId.StarSeat);
                    break;
                case Y.DZPK_SHORT:
                    t.push(O.Enum.CreateGameMode.CreateGame_Mode_Short), i.push(O.Enum.GameId.Texas), O.appConfig.getLobbyConfig().showStarSeats && i.push(O.Enum.GameId.StarSeat);
                    break;
                case Y.AOF:
                    i.push(O.Enum.GameId.Allin);
                    break;
                case Y.ZOOM_TEXAS:
                    for (let e = O.Enum.GameId.ZoomTexas; e <= O.Enum.GameId.ZoomTexasMax; e++) i.push(e);
                    break;
                case Y.BET:
                    t.push(O.Enum.CreateGameMode.CreateGame_Mode_Normal), i.push(O.Enum.GameId.Bet);
                    break;
                case Y.JACKFRUIT:
                    i.push(O.Enum.GameId.Jackfruit);
                    break;
                case Y.PLO:
                    O.appConfig.getLobbyConfig().showPlo5 ? 1 == this.ploIndex ? i.push(O.Enum.GameId.Plo) : (2 == this.ploIndex || i.push(O.Enum.GameId.Plo), i.push(O.Enum.GameId.Plo5)) : i.push(O.Enum.GameId.Plo)
            }
            let s = [],
                n = e.length,
                o = i.length,
                r = t.length;
            for (let a = 0; a < n; a++)
                if (0 == o)
                    if (0 == r) s.push(e[a]);
                    else
                        for (let i = 0; i < r; i++) e[a].game_mode == t[i] && s.push(e[a]);
            else
                for (let n = 0; n < o; n++)
                    if (e[a].game_id == i[n])
                        if (0 == r) s.push(e[a]);
                        else
                            for (let i = 0; i < r; i++) e[a].game_mode == t[i] && s.push(e[a]);
            return s
        }
        cleanJspkData(e) {
            for (let t = O.StringTools.getArrayLength(e) - 1; t >= 0; t--) O.roomManager.checkGameIsZoom(e[t].game_id) && e.splice(t, 1);
            return e
        }
        sortZoomByAnte(e, t) {
            return e.ante != t.ante ? e.ante < t.ante ? -1 : 1 : e.player_count_max != t.player_count_max ? e.player_count_max < t.player_count_max ? -1 : 1 : e.create_time > t.create_time ? -1 : 1
        }
        sortZoomByBlind(e, t) {
            return e.big_blind != t.big_blind ? e.big_blind < t.big_blind ? -1 : 1 : e.player_count_max != t.player_count_max ? e.player_count_max < t.player_count_max ? -1 : 1 : e.create_time > t.create_time ? -1 : 1
        }
        initJspkList() {
            let e = this._gameType;
            this.setGameType(Y.ZOOM_TEXAS, !1), this._jspkArr = this.screenByGame(), this.setGameType(e, !1), O.StringTools.getArrayLength(this._jspkArr) > 1 && this._jspkArr.sort(this.sortJspk.bind(this))
        }
        sortJspk(e, t) {
            return e.game_mode == t.game_mode ? e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal ? this.sortZoomByBlind(e, t) : this.sortZoomByAnte(e, t) : e.game_mode > t.game_mode ? 1 : -1
        }
        sortByVacancy(e, t) {
            if (e.game_id == O.Enum.GameId.Allin && t.game_id != O.Enum.GameId.Allin) return -1;
            if (e.game_id != O.Enum.GameId.Allin && t.game_id == O.Enum.GameId.Allin) return 1;
            {
                let i = e.left_seatnum == e.player_count_max,
                    a = t.left_seatnum == t.player_count_max;
                return i && !a ? -1 : !i && a ? 1 : e.left_seatnum == t.left_seatnum ? e.player_count_max < t.player_count_max ? 1 : -1 : e.left_seatnum < t.left_seatnum ? 1 : -1
            }
        }
        compareType(e, t) {
            return 1 == t ? (e.game_id == O.Enum.GameId.Texas || e.game_id == O.Enum.GameId.StarSeat) && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal : 2 == t ? (e.game_id == O.Enum.GameId.Texas || e.game_id == O.Enum.GameId.StarSeat) && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short : 3 == t ? e.game_id == O.Enum.GameId.Allin && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Normal : 4 == t ? e.game_id == O.Enum.GameId.Bet : 30 == t ? e.game_id == O.Enum.GameId.Allin && e.game_mode == O.Enum.CreateGameMode.CreateGame_Mode_Short : t == tt ? e.game_id == O.Enum.GameId.Jackfruit : t == it && e.game_id == O.Enum.GameId.Plo
        }
        sortByTimeAndPeople(e, t) {
            return e.game_id > t.game_id ? -1 : e.game_id < t.game_id || 0 == e.start_time && 0 != t.start_time ? 1 : 0 != e.start_time && 0 == t.start_time ? -1 : this.sortByMixed(e, t)
        }
        sortByStar(e, t) {
            return e.game_id == O.Enum.GameId.StarSeat && t.game_id == O.Enum.GameId.StarSeat ? 1 : e.game_id == O.Enum.GameId.StarSeat ? -1 : (t.game_id, O.Enum.GameId.StarSeat, 1)
        }
        sortByLevel(e, t) {
            if (e.game_id > t.game_id) return -1;
            if (e.game_id < t.game_id) return 1;
            if (e.game_mode > t.game_mode) return -1;
            if (e.game_mode < t.game_mode) return 1;
            {
                if (e.room_name.startsWith(Z) && !t.room_name.startsWith(Z)) return 0 == e.player_count && t.player_count > 0 ? 1 : -1;
                if (!e.room_name.startsWith(Z) && t.room_name.startsWith(Z)) return e.player_count > 0 && 0 == t.player_count ? -1 : 1;
                let i = this.getSortLevel(e),
                    a = this.getSortLevel(t);
                return i > a ? -1 : i < a ? 1 : 0 == e.player_count ? e.player_count_max == t.player_count_max ? this.getSortLevelByPro(e) > this.getSortLevelByPro(t) ? -1 : 1 : e.player_count_max < t.player_count_max ? -1 : 1 : e.player_count > t.player_count ? -1 : e.player_count < t.player_count ? 1 : e.player_count_max == t.player_count_max ? this.getSortLevelByPro(e) > this.getSortLevelByPro(t) ? -1 : 1 : e.player_count_max > t.player_count_max ? -1 : 1
            }
        }
        getSortLevel(e) {
            return e.hasEndTime ? e.player_count == e.player_count_max ? 0 : 0 == e.player_count ? 2 : 1 : e.player_count == e.player_count_max ? 0 : 0 == e.player_count ? 1 : 2
        }
        getSortLevelByPro(e) {
            return e.forProPlayer ? 1 : e.proPlayerNum > 0 ? 0 : 2
        }
        destroyMTTView() {
            this.mtt && S(this.mtt.node) && (this.mtt.node.targetOff(this), this.mtt.node.removeFromParent(), this.mtt.node.destroy()), cc_mtt.vv && cc_mtt.vv.AssetsManager && cc_mtt.vv.AssetsManager.hideAllDialog(), this.mtt = null
        }
        reInitMttView() {
            this.destroyMTTView(), this.initMTT()
        }
        openMttView(e) {
            O.config.HAVE_MTT && this.matchUrl != e && (this.matchUrl = e, this.mttUrl != e && (this.mttUrl = this.matchUrl, this.reInitMttView()), this.setMatchWebPos(this._gameType == this.MTT_NUM && this.node.active))
        }
        openMatchWebview(e) {
            this.mttUseWebView ? O.config.HAVE_MTT && this.matchUrl != e && (this.matchUrl = e + "&isFullscreen=false", this.matchWeb && (this.matchWeb.url != e && (this.matchWeb.url = this.matchUrl), this.setMatchWebPos(this._gameType == this.MTT_NUM && this.node.active))) : this.openMttView(e)
        }
        HandleCheckMTT(e) {
            console.log("HandleCheckMTT", e), e = 1 == e, this.node.active && e && this.isHoldemMTTGame() && (this.initMTT(), this.setViewGametype(this._gameType, !1)), S(this.mtt) && (e = e && this._gameType == this.MTT_NUM && this.node.active, this.setMatchWebPos(e))
        }
        HandleCheckWebView(e) {
            this.mttUseWebView ? (console.log("HandleCheckWebView"), e = 1 == e, this.node.active && e && this._gameType == this.MTT_NUM && this.initMTTWeb(), this.matchWeb && ("" != this.matchUrl && this.matchWeb.url != this.matchUrl && (this.matchWeb.url = this.matchUrl), O.dataHandler.getUserData().m_bIsLoginServerSucc && this.RequestAuthApi_ForMTT(), e = e && this._gameType == this.MTT_NUM && this.node.active, this.setMatchWebPos(e))) : this.HandleCheckMTT(e)
        }
        setMatchWebPos(e) {
            if (this.mttUseWebView) {
                if (this.webIsView = e, this.matchWeb) {
                    let t = new d(4 * I.getVisibleSize().width, .5 * I.getVisibleSize().height);
                    this.matchWeb.node.setPosition(0 == e ? t : this.matchWeb_pos), console.log("yyx setMatchWebPos -----\x3e", this.matchWeb.node.position.x)
                }
            } else this.setMttPos(e)
        }
        setMttPos(e) {
            this.webIsView = e, this.mtt && (this.mtt.widget.top = this.matchWeb_pos.x, this.mtt.widget.bottom = this.matchWeb_pos.y, this.mtt.show(e))
        }
        updateMTTState() {
            let e = O.config.HAVE_MTT,
                t = this.PKW_GAME_TYPE[0] == this.MTT_NUM;
            if (!e && !t || e && t) return;
            let i, a = this.gameType_panel.getChildByName("button_0");
            if (e) {
                this.PKW_GAME_TYPE.unshift(this.MTT_NUM);
                let e = this.PKW_GAME_TYPE.length;
                i = new c(this.gameType_panel.getComponent(p).width / e - 3, a.getComponent(p).height), this.gameType_scrollView.content.getComponent(p).setContentSize(i.width * e, this.gameType_scrollView.node.getComponent(p).height);
                for (let t = 0; t < e; t++) {
                    if (0 == t) {
                        let e, i = f(a);
                        e = O.config.isOverSeas() ? this.PKC_GAME_TYPE[t] : this.PKW_GAME_TYPE[t], i.active = !0, this.setFilterBtnState(i, !0), i.name = "btn_" + e, i.on("click", (t => {
                            this.setViewGametype(e, !0), O.AudioMgr.playButtonSound("tab.mp3"), e == this.MTT_NUM && O.config.HAVE_MTT ? this.onShowMttTab() : (this.HandleCheckMTT(!1), this.updateGameTypeDataAndView())
                        }), this), this._gamebuttonList.unshift(i), this.gameType_scrollView.content.addChild(i), i.setSiblingIndex(0)
                    } else {
                        this._gamebuttonList[t]
                    }
                    this._gamebuttonList[t].setPosition(i.width / 2 + i.width * t + 1.5 * this._gamebuttonList.length, i.height / 2)
                }
                this.updateGameBtn()
            } else {
                this.mttUseWebView ? this.matchWeb && (this.matchWeb.destroy(), this.matchWeb = null, this.matchWebNode.targetOff(this), this.matchWebNode.removeFromParent(), this.matchWebNode = null) : this.destroyMTTView(), this.scrollView.node.active = !0, this.pokerPage_panel.active = !0, this.mtt_img.active = !1, this.matchUrl = "", this._gamebuttonList[0].removeFromParent(), this._gamebuttonList[0].destroy(), this._gamebuttonList.shift(), this.PKW_GAME_TYPE.shift();
                let e = this._gamebuttonList.length;
                i = new c(this.gameType_panel.getComponent(p).width / e - 3, a.getComponent(p).height), this.gameType_scrollView.content.getComponent(p).setContentSize(new c(i.width * e, this.gameType_scrollView.node.getComponent(p).height));
                for (let t = 0; t < e; t++) this._gamebuttonList[t].setPosition(i.width / 2 + i.width * t + 1.5 * e, i.height / 2);
                this._gameType == this.MTT_NUM && (this.setViewGametype(1, !0), this.updateGameTypeDataAndView())
            }
            this.initLanguage()
        }
        getAllUrlParams(e) {
            var t = e ? e.split("?")[1] : window.location.search.slice(1),
                i = {};
            if (t)
                for (var a = (t = t.split("#")[0]).split("&"), s = 0; s < a.length; s++) {
                    var n = a[s].split("="),
                        o = n[0],
                        r = void 0 === n[1] || n[1];
                    if (o = o.toLowerCase(), "string" == typeof r && (r = r.toLowerCase()), o.match(/\[(\d+)?\]$/)) {
                        var h = o.replace(/\[(\d+)?\]/, "");
                        if (i[h] || (i[h] = []), o.match(/\[\d+\]$/)) {
                            var l = /\[(\d+)\]/.exec(o)[1];
                            i[h][l] = r
                        } else i[h].push(r)
                    } else i[o] ? i[o] && "string" == typeof i[o] ? (i[o] = [i[o]], i[o].push(r)) : i[o].push(r) : i[o] = r
                }
            return i
        }
        removeExpiredLogs() {
            try {
                v.os === v.OS.ANDROID ? V.reflection.callStaticMethod("com/cocos/game/AppActivity", "removeExpiredLogs", "(I)V", 1) : v.os === v.OS.IOS && V.reflection.callStaticMethod("AppController", "removeExpiredLogs:", 1)
            } catch (e) {}
        }
        initMTT() {
            O.config.HAVE_MTT && (S(this.mtt) || this.createMTT(), "" == cc_mtt.vv.DataManager.token && F.instance.requestToken())
        }
        createMTT() {
            F.instance.initCCVV(), O.config.HAVE_MTT && !S(this.mtt) && (this.mttPrefab && this.initMTTParam(this.mttPrefab), cc_mtt.vv.DataManager.worldNetwork && cc_mtt.vv.DataManager.token == cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken && cc_mtt.vv.DataManager.worldNetwork.isConnected() ? (S(this.mtt) && this.mtt.bindMessageHandler(), Q.instance && !Q.instance.isInitHoldem && S(this.mtt) && Q.instance.preStartMttGame(this.mtt)) : console.warn("*************** createMTT ************** : but still not init connection.... Keep old logic ......"))
        }
        initMTTParam(e) {
            F.instance.initMTTParams();
            let t = f(e);
            this.mtt = t.getComponent(x), this.mtt.onRefreshCallback = this.resetIntervalRefreshMTTGameLobby.bind(this), t.getComponent(p).setContentSize(this.scrollView.node.getComponent(p).width, this.scrollView.node.getComponent(p).height + this.pokerPage_panel.getComponent(p).height - 20), this.matchWeb_pos = this.mttInitPos, this.mtt.node.setPosition(0, this.mtt.node.position.y), this.setMatchWebPos(this.webIsView), t.parent = this.mttContainer, this.mtt.registerTokenEvents(), this.mtt.init(), this._gameType == this.MTT_NUM ? this.setMatchWebPos(this.node.active) : this.setMatchWebPos(!1), O.roomManager.isEnterMTT && this.enterMTTHall(O.roomManager.mtt_id)
        }
        onShowMttTab() {
            console.log("Findview test onShowMttTab"), this.HandleCheckMTT(!0)
        }
        onAuthMttSucc(e) {
            F.instance.onAuthMttSucc(e)
        }
        onAuthMttError(e) {
            F.instance.onAuthMttError(e)
        }
        updateListviewData(e) {
            let t = [];
            for (let i = 0; i < e.length; i++) {
                let a = O.appConfig.isPKW && e[i].currency == J.USD ? 1 : 0;
                t.push({
                    type: a,
                    data: e[i]
                })
            }
            this.setShowEmptyMessage(0 == t.length);
            const i = this.scrollView.getComponent(U);
            i.bindItemFunc && i.notifyDataSetChanged(t), this.scrollView.vertical = !0
        }
        bindcallfunc(e, t, i) {
            let a = !1;
            this.currencySwitcher && this.currencySwitcher.node.active && (a = this.currencySwitcher.btnState === L.pressed), e.getComponent(K).updateItemData(t.data, a, t.type)
        }
        getItemType(e, t) {
            return e.type
        }
        initMTTWeb() {
            if (this.mttUseWebView) {
                if (O.config.HAVE_MTT && !this.matchWeb && O.config.CAN_USE_WEBGL && 0 == O.config.getMTTWebIndex()) {
                    this.matchWebNode = new n, this.matchWeb = this.matchWebNode.addComponent(G);
                    let e = this.scrollView_mtt.node.parent.getComponent(p).convertToWorldSpaceAR(this.scrollView_mtt.node.getPosition());
                    this.matchWeb.node.getComponent(p).setContentSize(this.scrollView_mtt.node.getComponent(p).width, this.scrollView_mtt.node.getComponent(p).height + this.pokerPage_panel.getComponent(p).height - 20), this.matchWeb_pos = new d(e.x, e.y + .5 * this.pokerPage_panel.getComponent(p).height + 10), this.setMatchWebPos(this.webIsView), P.getScene().addChild(this.matchWeb.node), console.log("initMTTWeb", this.scrollView.node.getComponent(p).width, this.scrollView.node.getComponent(p).height + this.pokerPage_panel.getComponent(p).height - 20);
                    let t = this;
                    this.matchWeb.node.on("error", (() => {
                        console.log("yyx this.matchWeb error"), O.TP.showMsg(O.config.getStringData("MTT_Load_failed"), !0, (() => {
                            t.matchWeb && (t.matchWeb.url = ""), F.instance.requestToken()
                        }))
                    }), this), v.isNative && (this.matchWeb.setJavascriptInterfaceScheme("mttjs"), this.matchWeb.setOnJSCallback(((i, a) => {
                        -1 != a.search("mttjs://goto_game") ? (t.matchWeb && t.matchWeb.node.getComponent(p).setContentSize(I.getVisibleSize()), t.matchWeb_pos = new d(.5 * I.getVisibleSize().width, .5 * I.getVisibleSize().height), t.setMatchWebPos(t.webIsView)) : -1 != a.search("mttjs://goto_list") ? (t.matchWeb && t.matchWeb.node.getComponent(p).setContentSize(t.scrollView_mtt.node.getComponent(p).width, t.scrollView_mtt.node.getComponent(p).height + t.pokerPage_panel.getComponent(p).height - 20), t.matchWeb_pos = new d(e.x, e.y + .5 * t.pokerPage_panel.getComponent(p).height + 10), t.setMatchWebPos(t.webIsView)) : -1 != a.search("mttjs://back-normal") || -1 != a.search("mttjs://back-abnormal") ? (t.matchUrl = "", t.matchWeb && (t.matchWeb.url = ""), F.instance.requestToken()) : -1 != a.search("mttjs://WebGL") && (O.config.CAN_USE_WEBGL = !1, t.matchWeb && (t.matchWeb.destroy(), t.matchWeb = null, t.matchWebNode.targetOff(this), t.matchWebNode.removeFromParent(), t.matchWebNode.destroy(), t.matchWebNode = null), t.matchWeb = null, t.matchUrl = "", F.instance.requestToken())
                    }))), this._gameType == this.MTT_NUM && this.matchUrl.length > 0 ? (this.matchWeb.url = this.matchUrl, this.setMatchWebPos(this.node.active)) : this.setMatchWebPos(!1)
                }
            } else this.initMTT()
        }
        mttNotify(e) {
            console.log("mttNotify", e, e.search("mttjs://goto_game"), e.search("mttjs://goto_list"), I.getVisibleSize().width, I.getVisibleSize().height, this.scrollView.node.getComponent(p).height, this.pokerPage_panel.getComponent(p).height);
            this.scrollView.node.parent.getComponent(p).convertToWorldSpaceAR(this.scrollView.node.getPosition()); - 1 != e.search("mttjs://goto_game") ? (S(this.mtt) && this.mtt.node.getComponent(p).setContentSize(I.getVisibleSize()), this.matchWeb_pos = new d(0, 0), this.setMatchWebPos(this.webIsView), O.resMgr.adaptWidget(this.mtt.node, !0, !1)) : -1 != e.search("mttjs://goto_list") ? (S(this.mtt) && this.mtt.node.getComponent(p).setContentSize(this.scrollView.node.getComponent(p).width, this.scrollView.node.getComponent(p).height + this.pokerPage_panel.getComponent(p).height - 20), this.matchWeb_pos = this.mttInitPos, this.setMatchWebPos(this.webIsView), O.resMgr.adaptWidget(this.mtt.node, !0, !1)) : -1 != e.search("mttjs://back-normal") ? F.instance.sendMessageCenter(F.instance.config.BroadCast.MTT_TOKEN_ERROR, F.instance.config.tokenErrorMsg.BACK_NORMAL) : -1 != e.search("mttjs://back-abnormal") && F.instance.sendMessageCenter(F.instance.config.BroadCast.MTT_TOKEN_ERROR, F.instance.config.tokenErrorMsg.BACK_ABNORMAL)
        }
        enterMTTHall(e, t = !1) {
            e && this.mtt && S(this.mtt.node) && (O.roomManager.isEnterMTT = !1, this.mtt.callMTTHall(e, !1, t))
        }
        showMttError(e) {
            O.config.HAVE_MTT && this.node.active && this._gameType == this.MTT_NUM && O.TT.showMsg(e, O.Enum.ToastType.ToastTypeError)
        }
        RequestAuthApi_ForMTT() {}
        checkIntervalRefresh() {
            this._gameType == this.MTT_NUM ? this.mtt && (this.needRefreshMTTGameLobby && (this.mtt.refreshMTTLobby(), this.needRefreshMTTGameLobby = !1), this.intervalRefreshMTTGameLobby || this.startIntervalRefreshMTTGameLobby()) : (this.needRefreshCashGameLobby && (O.worldNet.requestCurrentBoardList(), this.needRefreshCashGameLobby = !1), this.intervalRefreshCashGameLobby || this.startIntervalRefreshCashGameLobby())
        }
        startIntervalRefreshCashGameLobby() {
            this.intervalRefreshCashGameLobby = setInterval((() => {
                this._gameType == this.MTT_NUM ? this.needRefreshCashGameLobby = !0 : O.worldNet.requestCurrentBoardList()
            }), 1e3 * this.timeRefreshGameLobby, this)
        }
        stopIntervalRefreshCashGameLobby() {
            this.intervalRefreshCashGameLobby && (clearInterval(this.intervalRefreshCashGameLobby), this.intervalRefreshCashGameLobby = null)
        }
        resetIntervalRefreshCashGameLobby() {
            this.stopIntervalRefreshCashGameLobby(), this.startIntervalRefreshCashGameLobby()
        }
        startIntervalRefreshMTTGameLobby() {
            this.intervalRefreshMTTGameLobby = setInterval((() => {
                this._gameType == this.MTT_NUM && null !== this.mtt && this.mtt.isShow() ? this.mtt.refreshMTTLobby() : this.needRefreshMTTGameLobby = !0
            }), 1e3 * this.timeRefreshGameLobby, this)
        }
        stopIntervalRefreshMTTGameLobby() {
            this.intervalRefreshMTTGameLobby && (clearInterval(this.intervalRefreshMTTGameLobby), this.intervalRefreshMTTGameLobby = null)
        }
        resetIntervalRefreshMTTGameLobby() {
            this.stopIntervalRefreshMTTGameLobby(), this.startIntervalRefreshMTTGameLobby()
        }
        switchCurrency(t) {
            e.isJPcurrencySwitcherOn = this.currencySwitcher.isChecked, this.showScrollView()
        }
        setShowEmptyMessage(e = !0) {
            var t, i;
            if (null != (t = this.loadingMessage) && t.active && e) return;
            this.emptyMessage && (this.emptyMessage.active = e);
            let a = null == (i = _("center/name", this.emptyMessage)) ? void 0 : i.getComponent(R);
            S(a) && (this.isMyCashGameListShowing() ? a.setKey("MainScene_Scene_discover_panel_ScrollViewWithSlider_no_playing_game") : a.setKey("MainScene_Scene_discover_panel_ScrollViewWithSlider_no_game"))
        }
        setShowLoadingMessage(e = !0) {
            this.loadingMessage && (this.loadingMessage.active = e)
        }
        resetFilters(e) {
            this.clearFastEnterData(), this.changeView(this.viewIndex, !0), O.tools.SaveStringByCCFile(this.SAVE_wxzd, "-1"), this.isFilterChanged = !0, this.applyFilterItemClicked(!!e)
        }
        updateMyCashGames() {
            this.updateMyCashGameData(), this.updateMyCashGameNumber(), this.isMyCashGameListShowing() && this.showScrollView()
        }
        updateMyCashGameData() {
            let e = this.getDataForGameMode(),
                t = [];
            for (let i of e) {
                let e = i.room_id,
                    a = i.game_id;
                O.roomManager.getMyRoomIdsByGame(a).includes(e) && t.push(i)
            }
            this.myCashGameData = t
        }
        updateMyCashGameNumber() {
            if (!S(this.myCashGameNumber)) return;
            this.myCashGameNumber.active = !0;
            let e = this.myCashGameNumber.getChildByName("circle_bg"),
                t = this.myCashGameNumber.getChildByName("cur_number");
            t.getComponent(T).string = `${this.myCashGameData.length}`;
            let i = t.getComponent(X);
            this.isMyCashGameListShowing() ? (e.active = !0, i.enabled = !0, i.setColorScheme($.Other, ee.LobbyGameTabsBackground)) : (e.active = !1, i.enabled = !1, t.getComponent(A).color = this.myCashGameNumber.parent.getChildByName("text").getComponent(A).color)
        }
        hideMyCashGameNumber() {
            this.myCashGameNumber.active = !0, this.myCashGameNumber.getChildByName("circle_bg").active = !1, this.myCashGameNumber.getChildByName("cur_number").getComponent(X).setColorScheme($.Other, ee.TypoGraphySecond)
        }
        isMyCashGameListShowing() {
            return 4 == this.viewIndex
        }
    }).isJPcurrencySwitcherOn = !0, Be = t((Pe = Xe).prototype, "scrollView", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(Pe.prototype, "emptyMessage", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(Pe.prototype, "loadingMessage", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = t(Pe.prototype, "refresh", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ae = t(Pe.prototype, "scrollView_mtt", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(Pe.prototype, "scrollView_GlobalSpin", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = t(Pe.prototype, "fastEnter_titile", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(Pe.prototype, "fastEnter_content", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(Pe.prototype, "fastEnter_search", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = t(Pe.prototype, "ef_scroll", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = t(Pe.prototype, "filterToggle", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = t(Pe.prototype, "myCashGameNumber", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(Pe.prototype, "img_PageView", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = t(Pe.prototype, "gameType_scrollView", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = t(Pe.prototype, "discover_panel", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(Pe.prototype, "gameType_panel", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ke = t(Pe.prototype, "pokerPage_panel", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qe = t(Pe.prototype, "mttPrefab", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ye = t(Pe.prototype, "mttContainer", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Je = t(Pe.prototype, "arrSprLobbyTabIcon", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), je = t(Pe.prototype, "currencySwitcher", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ze = t(Pe.prototype, "quickPanelSlideView", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qe = t(Pe.prototype, "refreshButton", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = Pe)) || Ge));
    a._RF.pop()
}
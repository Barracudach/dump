import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as f from "./ActivityView.js";
import * as P from "./FindView.js";
import * as b from "./FindView.js";
import * as S from "./cb.js";
import * as y from "./HumanboyDataMgr.js";
import * as M from "./GoldView.js";
import * as k from "./VideoCowboyManager.js";
import * as V from "./ecdhHandler.js";
import * as v from "./PokerMasterDataMgr.js";
import * as T from "./Safe.js";
import * as B from "./activityData.js";
import * as _ from "./profile_player_complaint.js";
import * as E from "./Enum.js";
import * as I from "./Enum.js";
import * as A from "./Enum.js";
import * as L from "./Enum.js";
import * as H from "./Enum.js";
import * as N from "./SelfView.js";
import * as D from "./SelfView.js";
import * as R from "./SliderVerify.js";
import * as G from "./MttHall.js";
import * as O from "./DesignSystemRegularButton.js";
import * as U from "./DesignSystemButtonBase.js";
import * as W from "./DesignSystemButtonBase.js";
import * as F from "./UserInfo.js";
import * as x from "./CasinoView.js";
import * as z from "./NativeEvent.js";
import * as K from "./DepositPromoPopup.js";
import * as j from "./FreshchatHandler.js";
import * as Y from "./PromotionView.js";
import * as q from "./DynamicPromoEnums.js";
import * as Z from "./DynamicPromoEnums.js";
import * as J from "./DynamicPromoEnums.js";
import * as X from "./MiniGamePopupManager.js";
import * as mod28 from "./ws_protocol.mjs_cjs=&original=.js";
import * as Q from "./MultiWindowFocusManager.js";
import * as ee from "./ResponsibleGamingLoader.js";
import * as te from "./HallPokerController.js";
import * as ie from "./CashierLobby.js";
import * as ne from "./AnalyticsHandler.js";
import * as oe from "./MessageBroker.js";
import * as se from "./KycRequiredPopup.js";
import * as re from "./TimeElapse.js";
import * as ae from "./TimeElapse.js";
import * as le from "./GeoComplyCheckPopup.js";
import * as he from "./CommonWebView.js";
import * as ue from "./FakeMultipleGame.js";
import * as pe from "./MttPrefab.js";
import * as ce from "./KYCFacade.js";
import * as ge from "./HomePokerTypeController.js";
import * as de from "./HomePokerTypeComp.js";
import * as me from "./i18nText.js";

function main() {
    var we, Ce, fe, be, Pe, Se, ye, Me, ke, Ve, ve, Te, Be, _e, Le, Ee, Ie, Ae, He, De, Ne, Re, Ge, Oe, Ue, We, Fe, xe, ze, Ke, je, Ye, qe, Je, Ze, Xe, $e, Qe, et, tt, it, nt, ot, st, at, rt, lt, ht, ut, pt, ct, gt, dt, mt, wt, Ct, ft, bt, Pt, St, yt, Mt, kt, Vt, vt, Tt, Bt, _t, Lt, Et, It, At, Ht, Dt, Nt, Rt, Gt, Ot, Ut, Wt, Ft, xt, zt, Kt, jt, Yt, qt, Jt, Zt, Xt, $t;
    n._RF.push({}, "8eb89er96tGpZ3gRX96R7my", "HallScene", void 0);
    const {
        ccclass: Qt,
        property: ei
    } = l;
    e("default", (we = ei(o), Ce = ei(o), fe = ei(o), be = ei(o), Pe = ei(o), Se = ei(o), ye = ei(o), Me = ei(o), ke = ei(o), Ve = ei(o), ve = ei(o), Te = ei(o), Be = ei(o), _e = ei(o), Le = ei(s), Ee = ei(s), Ie = ei(s), Ae = ei(s), He = ei(s), De = ei(s), Ne = ei(s), Re = ei(s), Ge = ei(s), Oe = ei(s), Ue = ei(s), We = ei(s), Fe = ei(s), xe = ei(s), ze = ei(s), Ke = ei(s), je = ei(s), Ye = ei(s), qe = ei({
        type: [a],
        tooltip: "Containers references to set bottom margin dinamically based on bottom menu height"
    }), Je = ei(s), Ze = ei(r), Xe = ei(s), $e = ei(s), Qe = ei(s), et = ei(s), tt = ei(s), it = ei(o), nt = ei(s), ot = ei(s), st = ei(s), Qt((($t = class extends h {
        constructor(...e) {
            super(...e), i(this, "hallPokerViewPref", lt, this), i(this, "homePokerTypeViewPref", ht, this), this.hallPokerViewController = null, this.hallPokerViewNode = null, this.homePokerTypeViewNode = null, this.homePokerTypeViewController = null, i(this, "selfviewPref", ut, this), i(this, "activityPref", pt, this), i(this, "goldViewPref", ct, this), i(this, "playerComplaintsPref", gt, this), i(this, "sliderVerify_prefab", dt, this), i(this, "userInfo_prefab", mt, this), i(this, "redEnvelopePrefab", wt, this), i(this, "casinoViewPref", Ct, this), i(this, "promotionViewPref", ft, this), i(this, "cashierLobbyView_Pref", bt, this), i(this, "sportsBookViewPref", Pt, this), i(this, "depositPromoPopupPrefab", St, this), this.safe = null, i(this, "bottomView", yt, this), this.earnView = null, i(this, "miniGames", Mt, this), this.casinoView = null, this.promotionView = null, this.wptgLiveEventView = null, this.sportsBookView = null, i(this, "noticeBtn", kt, this), i(this, "findBtn", Vt, this), i(this, "casinoBtn", vt, this), i(this, "dataBtn", Tt, this), i(this, "earnBtn", Bt, this), i(this, "selfBtn", _t, this), i(this, "inviteFriendsBtnLeft", Lt, this), i(this, "inviteFriendsBtnRight", Et, this), i(this, "promotionBtn", It, this), i(this, "pokerFlipsBtn", At, this), i(this, "sportsBookBtn", Ht, this), i(this, "pokerMasterBtn", Dt, this), i(this, "wptgLiveBtn", Nt, this), this.menuSideBarBtns = [], i(this, "safeBtn", Rt, this), i(this, "switchServerBtn", Gt, this), i(this, "gold_Panel", Ot, this), i(this, "containers", Ut, this), i(this, "notificationIcon", Wt, this), i(this, "backButton", Ft, this), i(this, "logoNode", xt, this), i(this, "balance_node", zt, this), i(this, "casino_coin_node", Kt, this), i(this, "login_Btn", jt, this), i(this, "register_Btn", Yt, this), i(this, "wptgLiveEventViewPref", qt, this), i(this, "promoPopupParent", Jt, this), i(this, "notificationParent", Zt, this), i(this, "loginPopupParent", Xt, this), this.updateAutoEnterTournament = void 0, this.silenceMusic = "zh_CN/game/dzpoker/audio/silence", this.goldView = null, this.selfView = null, this.upgradeView = null, this._isFindView = !1, this.userInfo_view = null, this.enterHallJumpToIndex = L.None, this.depositPromoPopup = null, this.redEnvelopePopup = null, this.notificationPref = null, this.notificationNode = null, this.mailCountInfo = me.pb.NotifyUserMailNum.create(), this._onUpdateMiniGameListCallback = null, this.keyNumberShowingIntroPopup = "key_minigame_numberShowingIntroPopup", this.casinoViewComp = null, this.earnViewWebComp = null, this.earnViewCompo = null, this.promoViewWebComp = null, this.skipPromoOnMiniGameClose = !1, this._checkSecuritySportsBookAction = null
        }
        onLoad() {
            se.getInstance().start("LongHallSceneOnLoad", "1"), C.tools.loadingStatus("[WEB LOAD MEASURE]", "[onLoad][HallScene]"), this.adaptScreen(), C.config.setCurrentScene(C.Enum.SCENE.HALL_SCENE), this.registerMsg(), this.initGoldView(), C.netWork.isConnect() && this.updateChipNum();
            const e = this.bottomView.parent;
            if (se.getInstance().end("LongHallSceneOnLoad", "1"), se.getInstance().start("LongHallSceneOnLoad", "2"), this.selfviewPref && (this.selfView = u(this.selfviewPref), this.selfView.getComponent(D).hallScene = this), se.getInstance().end("LongHallSceneOnLoad", "2"), se.getInstance().start("LongHallSceneOnLoad", "4"), this.casinoViewPref) {
                this.casinoViewPref.data.active = !1, this.casinoView = u(this.casinoViewPref), this.casinoView.setParent(e), this.casinoView.active = !1, this.casinoViewComp = this.casinoView.getComponent(x);
                const t = this.casinoViewComp;
                t && (t.isInit = !0, t.rootNode = this.node, this.scheduleOnce((() => {
                    this.casinoView.active || (this.casinoView.active = !0, t.setActive(!1, !0))
                }), .2))
            }
            if (se.getInstance().end("LongHallSceneOnLoad", "4"), se.getInstance().start("LongHallSceneOnLoad", "5"), this.sportsBookViewPref && (this.sportsBookViewPref.data.active = !1, this.sportsBookView = u(this.sportsBookViewPref), this.sportsBookView.setParent(e), this.sportsBookView.active = !1), se.getInstance().end("LongHallSceneOnLoad", "5"), se.getInstance().start("LongHallSceneOnLoad", "6"), this.promotionViewPref && (this.promotionViewPref.data.active = !1, this.promotionView = u(this.promotionViewPref), this.promotionView.setParent(e), this.promotionView.active = !1, this.promoViewWebComp = this.initCommonWebviewComponent(this.promotionView)), se.getInstance().end("LongHallSceneOnLoad", "6"), this.hallPokerViewPref && (se.getInstance().start("HallPoker", "instantiate"), this.hallPokerViewNode = u(this.hallPokerViewPref), se.getInstance().end("HallPoker", "instantiate", {}, 2e3), se.getInstance().start("HallPoker", "addChild"), e.addChild(this.hallPokerViewNode), se.getInstance().end("HallPoker", "addChild", {}, 2e3), se.getInstance().start("HallPoker", "createInstance"), this.hallPokerViewController = new ee(this.hallPokerViewNode, C.appConfig.isLandscapeLayout), se.getInstance().end("HallPoker", "createInstance"), se.getInstance().start("HallPoker", "init"), this.hallPokerViewController.init(), se.getInstance().end("HallPoker", "init", {}, 3e3)), this.homePokerTypeViewPref) {
                if (se.getInstance().start("PokerType", "instantiate"), this.homePokerTypeViewNode = u(this.homePokerTypeViewPref), se.getInstance().end("PokerType", "instantiate", {}, 2e3), se.getInstance().start("PokerType", "addChild"), e.addChild(this.homePokerTypeViewNode), this.hallPokerViewNode) {
                    const e = this.hallPokerViewNode.getSiblingIndex();
                    this.homePokerTypeViewNode.setSiblingIndex(e), this.hallPokerViewNode.active = !1
                }
                se.getInstance().end("PokerType", "addChild", {}, 2e3), se.getInstance().start("PokerType", "createInstance"), this.homePokerTypeViewController = new ce(this.homePokerTypeViewNode, this.hallPokerViewController), se.getInstance().end("PokerType", "createInstance"), se.getInstance().start("PokerType", "init"), this.homePokerTypeViewController.init(), se.getInstance().end("PokerType", "init", {}, 3e3)
            }
            se.getInstance().start("LongHallSceneOnLoad", "8"), this.menuSideBarBtns = [this.noticeBtn, this.findBtn, this.casinoBtn, this.dataBtn, this.earnBtn, this.selfBtn, this.pokerMasterBtn, this.inviteFriendsBtnLeft, this.inviteFriendsBtnRight, this.pokerFlipsBtn, this.promotionBtn, this.wptgLiveBtn, this.sportsBookBtn], this.bottomView && (this.bottomView.active = !0, this.selfView && (this.selfView.active = !1, this.bottomView.getParent().addChild(this.selfView)), this.bottomView.setSiblingIndex(C.Enum.ZORDER_TYPE.ZORDER_15), this.homePokerTypeViewController && this.homePokerTypeViewController.isViewShow() ? this.swithView(this.homePokerTypeViewNode || this.hallPokerViewNode, this.findBtn) : this.swithView(this.hallPokerViewNode, this.findBtn), this.selfView && this.selfView.setSiblingIndex(this.bottomView.getSiblingIndex() - 1)), se.getInstance().end("LongHallSceneOnLoad", "8"), se.getInstance().start("LongHallSceneOnLoad", "9"), C.SwitchLoadingView.resetLoadingNode(this.node, C.Enum.ZORDER_TYPE.ZORDER_LOADING), C.appConfig.getGeneralConfig().showLoadingOnUserDataFetch && C.SwitchLoadingView.show(C.config.getStringData("User_Data_Loading")), C.netWorkManager.SceneOnLoad(), C.appConfig.getGameConfig().enableMultipleCashGamesMobile || V.getInstance().ecdh_init(), C.KYCHandler.setHallRef(this), p.os == p.OS.IOS && (C.native.AuthLocation(), console.log("99333")), C.dataHandler.getUserData().isFirstLogin && C.tools.resetPopupTypeVisible(), C.dataHandler.getUserData().isFirstLogin && !C.dataHandler.getUserData().isTouristUser && this.checkStage2Registration(!0), C.MessageCenter.send("hallEnterMTT"), this.initAfterConfig(e), $.attach(this.node), z.changeWebviewBGColor(C.tools.getWebViewHexColor()), C.appConfig.isWebApp && C.security.locationMonitor.getLocationDetails((() => {
                C.dynamicPromoController.init()
            })), C.dataHandler.getUserData().showNDRPVerificationReviewPopup(), se.getInstance().end("LongHallSceneOnLoad", "9"), se.getInstance().start("LongHallSceneOnLoad", "10"), C.MessageCenter.register(C.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessCallback.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.initAfterConfig.bind(this), this.node), C.MessageCenter.register("RefreshPageBannerView", this.refreshPageBannerView.bind(this), this.node)
        }
        initAfterConfig(e) {
            if (se.getInstance().start("LongHallSceneOnLoad", "3"), null == this.earnView) {
                let t = this.cashierLobbyView_Pref;
                t && (t.data.active = !1, this.earnView = u(t), this.earnViewCompo = this.earnView.getComponent(te), this.earnViewCompo.hallScene = this, e.addChild(this.earnView), this.earnView.active = !1, this.earnViewWebComp = this.initCommonWebviewComponent(this.earnView))
            }
            se.getInstance().end("LongHallSceneOnLoad", "3"), se.getInstance().start("LongHallSceneOnLoad", "7"), null == this.wptgLiveEventView && C.appConfig.getLobbyConfig().showWPTGLiveEvent && this.wptgLiveEventViewPref && (this.wptgLiveEventViewPref.data.active = !1, this.wptgLiveEventView = u(this.wptgLiveEventViewPref), this.wptgLiveEventView.setParent(e), this.wptgLiveEventView.active = !1), se.getInstance().end("LongHallSceneOnLoad", "7"), this.switchServerBtn && (this.switchServerBtn.active = C.appConfig.getLobbyConfig().showSwitchServer && C.domainMgr.isHaveNextServer()), this.safeBtn && (this.safeBtn.active = 0 == C.config.isOverSeas() && 1 == C.appConfig.getLobbyConfig().showDepositBox), this.unschedule(this.requestPlayerLock), this.schedule(this.requestPlayerLock, C.appConfig.getLobbyConfig().playerLocksIntervalCheck), C.appConfig.isWebApp || (this.notificationIcon.active = !C.dataHandler.getUserData().isTouristUser && C.appConfig.getLobbyConfig().showNotificationIcon), this.updateCashierTitle()
        }
        onEnable() {
            C.tools.loadingStatus("[WEB LOAD MEASURE]", "[onEnable][HallScene]"), C.appConfig.isWebApp || (this.notificationIcon.active = C.appConfig.getGeneralConfig().showInAppMessages);
            const e = C.dataHandler.getUserData();
            if ((e.sngPromoMttBuyInValue >= 0 || e.autoShowBuyInSNGValue >= 0) && C.MessageCenter.send("jumpToSng"), C.firstLoad && C.appConfig.isWebApp) {
                const e = 0;
                C.firstLoad = !1, C.initObjectsLoadFromResourceOrBundle(), this.scheduleOnce((() => {
                    C.appConfig.getGeneralConfig().delayFetchUserData && C.httpHandler.fetchUserData(), C.appConfig.getGeneralConfig().delayFetchCurrencyData && C.MessageCenter.send(C.Enum.MessageCenterAction.onFetchCurrencyAPI), C.pushNotice.setPushNoticeType(E.PUSH_LOBBY), C.StatusView.updateSystemTimePos(!0), C.StatusView.getBatteryInfo()
                }), e)
            }
            C.SwitchLoadingView.resetLoadingNode(this.node, C.Enum.ZORDER_TYPE.ZORDER_LOADING)
        }
        onLoginSuccessCallback() {
            var e, t, i, n;
            (this._onUpdateMiniGameListCallback = null, C.netWork.isConnect() && this.updateChipNum(), C.netWorkManager.SceneOnLoad(), C.KYCHandler.setHallRef(this), p.os == p.OS.IOS && (C.native.AuthLocation(), console.log("99333")), C.dataHandler.getUserData().isFirstLogin && C.tools.resetPopupTypeVisible(), C.dataHandler.getUserData().isFirstLogin && !C.dataHandler.getUserData().isTouristUser && this.checkStage2Registration(!0), C.MessageCenter.send("hallEnterMTT"), $.attach(this.node), z.changeWebviewBGColor(C.tools.getWebViewHexColor()), C.appConfig.isWebApp && C.security.locationMonitor.getLocationDetails((() => {
                C.dynamicPromoController.init()
            })), C.dataHandler.getUserData().showNDRPVerificationReviewPopup(), C.appConfig.isWebApp || (this.login_Btn.active = C.dataHandler.getUserData().isTouristUser, this.register_Btn.active = C.dataHandler.getUserData().isTouristUser, this.balance_node.active = !C.dataHandler.getUserData().isTouristUser, this.notificationIcon.active = !C.dataHandler.getUserData().isTouristUser && C.appConfig.getLobbyConfig().showNotificationIcon), null == (e = he.instance) || e.moveUpHallSceneElements(!0), C.dataHandler.getUserData().isTouristUser) ? null == (i = this.hallPokerViewController) || i.refreshLobby(): cc_mtt.vv.DataManager.updateToolList((() => {
                var e, t;
                c(this.hallPokerViewController) ? null == (e = this.hallPokerViewController) || e.refreshLobby() : null == (t = ue.instance) || t.getLevelList()
            }));
            (this.adaptScreen(!0), C.appConfig.isLandscapeLayout && C.dataHandler.getUserData().isTouristUser && null != (t = this.selfView) && t.active) && (null == (n = this.selfView) || n.getComponent(D).performButtonAction(N.SVFFI_ACCOUNT_SETTINGS));
            this._unScheduleCheckSecuritySportsBook()
        }
        adaptScreen(e = !1) {
            this.containers.forEach((e => {
                e && (e.bottom = this.getBottomMenuHeight())
            })), C.config.adaptScreen(this.node), C.resMgr.adaptWidget(this.node, !0, !1), C.MessageCenter.send("onAdaptedScreen", e)
        }
        routeChange(e) {
            console.log("收到声道变换消息"), console.log(e), console.log(e.ret), console.log("收到声道变换消息----------end");
            let t = e.ret;
            "Speaker" == t ? (console.log("true"), C.TT.showMsg("Speaker", C.Enum.ToastType.ToastTypeSuccess)) : "Headphones" == t ? (C.TT.showMsg("Headphones", C.Enum.ToastType.ToastTypeSuccess), console.log("false")) : C.TT.showMsg(t, C.Enum.ToastType.ToastTypeSuccess)
        }
        start() {
            if (C.tools.loadingStatus("[WEB LOAD MEASURE]", "[start][HallScene]"), C.MessageCenter.register("routeChange", this.routeChange.bind(this), this.node), C.appConfig.isWebApp || (this.login_Btn.active = C.dataHandler.getUserData().isTouristUser, this.register_Btn.active = C.dataHandler.getUserData().isTouristUser, this.balance_node.active = !C.dataHandler.getUserData().isTouristUser, c(this.casino_coin_node) && this.casinoViewComp.isActive() && (this.casino_coin_node.active = !C.dataHandler.getUserData().isTouristUser), this.notificationIcon.active = !C.dataHandler.getUserData().isTouristUser && C.appConfig.getLobbyConfig().showNotificationIcon), p.isNative && C.httpHandler.sendNativeError(), this.initLanguage(), this.showLabaPanel(), this.activityPref) {
                C.action.addChildToScene(this, this.activityPref, [], C.Enum.ZORDER_TYPE.ZORDER_ACTIVITY, !0).name = "activityView", this.firstShowActivityPanel()
            }
            if (C.dataHandler.getUserData().is_goto_myredpacket && (C.dataHandler.getUserData().is_goto_myredpacket = !1, this._onMsgSwitchSceneToSelfView(), C.MessageCenter.send("open_myredpackets")), C.StringTools.getArrayLength(S.getCowboyRoom().backToMainTips) > 0) {
                let e = S.getCowboyRoom().backToMainTips;
                S.getCowboyRoom().backToMainTips = "", this.scheduleOnce((t => {
                    C.popUp.showMsg({
                        txt: e
                    })
                }), .3)
            } else if (C.StringTools.getArrayLength(y.getHumanboyRoom().sBackToMainTips) > 0) {
                let e = y.getHumanboyRoom().sBackToMainTips;
                y.getHumanboyRoom().sBackToMainTips = "", this.scheduleOnce((t => {
                    C.popUp.showMsg({
                        txt: e
                    })
                }), .3)
            } else if (C.StringTools.getArrayLength(k.getVideoCowboyRoom().backToMainTips) > 0) {
                let e = k.getVideoCowboyRoom().backToMainTips;
                k.getVideoCowboyRoom().backToMainTips = "", this.scheduleOnce((t => {
                    C.popUp.showMsg({
                        txt: e
                    })
                }), .3)
            } else if (C.StringTools.getArrayLength(v.getPokerMasterRoom().sBackToMainTips) > 0) {
                let e = v.getPokerMasterRoom().sBackToMainTips;
                v.getPokerMasterRoom().sBackToMainTips = "", this.scheduleOnce((t => {
                    C.popUp.showMsg({
                        txt: e
                    })
                }), .3)
            } else C.viewAdaptive.isselfchange && (C.SHOP.setExitCallFunc((() => {
                C.viewAdaptive.cowboyroomid > 0 ? C.roomManager.RequestJoinRoom(C.Enum.GameId.CowBoy, C.viewAdaptive.cowboyroomid, !1) : C.viewAdaptive.videoCowboyRoomId > 0 ? C.roomManager.RequestJoinRoom(C.Enum.GameId.VideoCowboy, C.viewAdaptive.videoCowboyRoomId, !1) : C.viewAdaptive.humanboyroomid > 0 ? C.roomManager.RequestJoinRoom(C.Enum.GameId.HumanBoy, C.viewAdaptive.humanboyroomid, !1) : C.viewAdaptive.pokerMasterRoomID > 0 && C.roomManager.RequestJoinRoom(C.Enum.GameId.PokerMaster, C.viewAdaptive.pokerMasterRoomID, !1)
            })), C.SHOP.RechargeClick());
            this.registerMttEvents(), this.checkAutoRedirect(), this.checkAndCallPromoPopups(), this.setHallSceneViewForMTTHall(), this.showKycStatusOnNotification(), z.notifyDeeplinkHandlerIsReady(), z.checkPendingDeeplinkFunction(), C.MessageCenter.send(I.HallSceneLoadCompleted), C.appConfig.isWebApp && ne.getInstance().sendPokerAppReady(), j.getInstance().shouldOpenChat() && j.getInstance().initFreshchat(), console.timeEnd("[WEB LOAD MEASURE]"), this.scheduleOnce((() => {
                C.appConfig.preloadJurisdBundles(C.Enum.SCENE.HALL_SCENE), C.resMgr.preloadSceneWidthRes(C.Enum.SCENE.GAME_SCENE)
            }), .5)
        }
        initLanguage() {}
        registerMsg() {
            C.MessageCenter.register("update_info", this.onGetPlayerInfoSuccess.bind(this), this.node), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), C.MessageCenter.register("showLabaPanel", this.showLabaPanel.bind(this), this.node), C.MessageCenter.register("switchSceneToMiniGame", this._onMsgSwitchSceneToMiniGame.bind(this), this.node), C.MessageCenter.register("switchSceneToPokerLobby", this._onMsgSwitchSceneToPokerLobby.bind(this), this.node), C.MessageCenter.register("switchSceneToCasinoLobby", this._onMsgSwitchSceneToCasinoLobby.bind(this), this.node), C.MessageCenter.register("switchSceneToEarnView", this._onMsgswitchSceneToEarnView.bind(this), this.node), C.MessageCenter.register("switchSceneToSelfView", this._onMsgSwitchSceneToSelfView.bind(this), this.node), C.MessageCenter.register("on_need_slider_verify", this._onMsgNeedSliderVerify.bind(this), this.node), C.MessageCenter.register("jumpgto_notice", this._onjumpgto_notice.bind(this), this.node), C.MessageCenter.register("jumpToMtt", this.jumpToMtt.bind(this), this.node), C.MessageCenter.register("jumpToSng", this.jumpToSng.bind(this), this.node), C.MessageCenter.register("jumpToSportsBook", this.jumpToSportsBook.bind(this), this.node), C.MessageCenter.register("jumpToInvite", this.jumpToInvite.bind(this), this.node), C.MessageCenter.register("hallEnterMTT", this.hallEnterMTT.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onCreateMttHallInstance, this.setHallSceneViewForMTTHall.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onRedEnvelopeButtonClick, this.onRedEnvelopeButtonClick.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.OnBackFromInviteFriend, this.onBackFromInviteFriend.bind(this), this.node), C.config.isSiyuType() && (C.MessageCenter.register("on_syOnEnterBackground", this.OnAppEnterBackground.bind(this), this.node), C.MessageCenter.register("on_syOnEnterForeground", this.OnAppEnterForeground.bind(this), this.node)), C.MessageCenter.register(C.Enum.MessageCenterAction.OnMiniGamesListResponse, this.ResponseRoomList.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.OpenListMiniGamePopup, this.openListMiniGamePopup.bind(this), this.node), C.MessageCenter.register("showMainTip", this.showMainTip.bind(this), this.node), C.MessageCenter.register(q.LoadPromotionView, this.loadPromotionView.bind(this), this.node), C.MessageCenter.register(q.ShowPromoPopup, this.showPromotionPopup.bind(this), this.node), C.MessageCenter.register("on_get_player_locks_success", this.onGetPlayerLocks.bind(this), this.node), C.MessageCenter.register("webApp_close_profile", this.webAppCloseProfile.bind(this), this.node), C.appConfig.isWebApp && C.MessageCenter.register("on_notify_mail_num", this.onReceiveMailIconCount.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.EnableTopAppLogo, this.enableTopAppLogo.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.DisableTopAppLogo, this.disableTopAppLogo.bind(this), this.node), C.MessageCenter.register("refreshLobby", this.refreshLobby.bind(this), this.node), C.MessageCenter.register("show_mtt_detail_in_hall", this.showMTTDetailByIdInHall.bind(this), this.node), C.MessageCenter.register(I.HideLobbyPopups, this.closeAllPopups.bind(this), this.node), C.MessageCenter.register("HabaGameLoginRequest", this.HabaGameLoginRequest.bind(this), this.node), C.MessageCenter.register("HabaGameLoginResponse", this.HabaGameLoginResponse.bind(this), this.node), C.MessageCenter.register("ShowPromoPopupAfterLogin", this.checkForLoginPromoPopups.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onHideAllWebview, this.hideAllWebView.bind(this), this.node), C.MessageCenter.register("onLogout", this.onLogoutSuccess.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onKYCNotificationStatus, this.showKycStatusOnNotification.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onGoToKYCPage, this.goToKycPage.bind(this), this.node), C.appConfig.isLandscapeLayout || C.MessageCenter.register(C.Enum.MessageCenterAction.NotificationShow, this.onNotificationShow.bind(this), this.node)
        }
        refreshLobby() {
            var e;
            null == (e = this.hallPokerViewController) || e.refreshLobby()
        }
        closeAllPopups() {
            var e;
            null == (e = this.hallPokerViewController) || e.closePopups();
            const t = this.node.getComponentInChildren(R);
            c(t) && t.autoHide(!1)
        }
        HabaGameLoginRequest(e) {
            this.hideAllWebView()
        }
        HabaGameLoginResponse(e) {
            C.appConfig.getGeneralConfig().multiWindowEnabled || 1 !== e && this.swithView(this.hallPokerViewNode, this.findBtn)
        }
        onDestroy() {
            C.config.isSiyuType() && (C.MessageCenter.unregister("on_syOnEnterBackground", this.node), C.MessageCenter.unregister("on_syOnEnterForeground", this.node)), C.MessageCenter.unregister("routeChange", this.routeChange.bind(this)), C.MessageCenter.unregister("update_info", this.node), C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node), C.MessageCenter.unregister("showLabaPanel", this.node), C.MessageCenter.unregister("HideWebview_ShowWindows", this.node), C.MessageCenter.unregister("switchSceneToPokerLobby", this.node), C.MessageCenter.unregister("switchSceneToMiniGame", this.node), C.MessageCenter.unregister("switchSceneToCasinoLobby", this.node), C.MessageCenter.unregister("switchSceneToEarnView", this.node), C.MessageCenter.unregister("switchSceneToSelfView", this.node), C.MessageCenter.unregister("on_need_slider_verify", this.node), C.MessageCenter.unregister("jumpgto_notice", this.node), C.MessageCenter.unregister("jumpToMtt", this.node), C.MessageCenter.unregister("jumpToSng", this.node), C.MessageCenter.unregister("jumpToSportsBook", this.node), C.MessageCenter.unregister("jumpToInvite", this.node), C.MessageCenter.unregister("hallEnterMTT", this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.onCreateMttHallInstance, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.onRedEnvelopeButtonClick, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnBackFromInviteFriend, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnMiniGamesListResponse, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnLoginSuccess, this.node), C.KYCHandler.removeHallRef(), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OpenListMiniGamePopup, this.node), C.MessageCenter.unregister("showMainTip", this.node), C.MessageCenter.unregister(q.LoadPromotionView, this.node), C.MessageCenter.unregister(q.ShowPromoPopup, this.node), this.unschedule(this.requestPlayerLock), this._unScheduleCheckSecuritySportsBook(), C.MessageCenter.unregister("on_get_player_locks_success", this.node), this.hallPokerViewController && this.hallPokerViewController.destroy(), this.homePokerTypeViewController && this.homePokerTypeViewController.destroy(), C.MessageCenter.unregister("webApp_close_profile", this), C.appConfig.isWebApp && C.MessageCenter.unregister("on_notify_mail_num", this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.EnableTopAppLogo, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.DisableTopAppLogo, this.node), C.MessageCenter.unregister("refreshLobby", this.node), C.MessageCenter.unregister("show_mtt_detail_in_hall", this.node), C.MessageCenter.unregister("show_earn_view_in_hall", this.node), C.MessageCenter.unregister(I.HideLobbyPopups, this.node), C.MessageCenter.unregister("HabaGameLoginRequest", this.node), C.MessageCenter.unregister("HabaGameLoginResponse", this.node), C.MessageCenter.unregister("ShowPromoPopupAfterLogin", this.node), C.MessageCenter.unregister("onLogout", this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.onKYCNotificationStatus, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.onGoToKYCPage, this.node), C.appConfig.isLandscapeLayout || C.MessageCenter.unregister(C.Enum.MessageCenterAction.NotificationShow, this.node), console.time("[WEB LOAD MEASURE]"), C.MessageCenter.unregister("RefreshPageBannerView", this.node)
        }
        onLogoutSuccess() {
            C.dataHandler.getUserData().isTouristUser || this.swithView(this.homePokerTypeViewNode || this.hallPokerViewNode, this.findBtn), C.authenticator.delayShowPromoPopup = !1, C.globalMsgDataMgr.kyc_status = "", C.MessageCenter.send("logout_webview")
        }
        initCommonWebviewComponent(e) {
            if (!c(e)) return;
            const t = e.getComponentInChildren(le);
            return t && (t.parentNode = e, this.scheduleOnce((() => {
                e.active || (e.active = !0, t.setActive(!1, !0))
            }), .4)), t
        }
        showMainTip(e) {
            this.scheduleOnce((t => {
                C.popUp.showMsg({
                    txt: e
                })
            }), .3)
        }
        ResponseRoomList(e, t) {
            var i;
            null == (i = this._onUpdateMiniGameListCallback) || i.call(this, e)
        }
        OnAppEnterBackground() {
            console.log("###################### OnAppEnterBackground: 后台"), p.isBrowser && (C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage || C.appConfig.isWebApp) && p.os == p.OS.IOS && C.AudioMgr.play(this.silenceMusic, !0, .1, !0)
        }
        OnAppEnterForeground() {
            console.log("###################### OnAppEnterForeground: 前台"), p.isBrowser && (C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage || C.appConfig.isWebApp) && p.os == p.OS.IOS && C.AudioMgr.stop(C.AudioMgr.getAudioID(this.silenceMusic))
        }
        onGetPlayerInfoSuccess() {
            if (0 == C.dataHandler.getUserData().HeadPath.length) {
                let e = Math.floor(C.StringTools.randomRange(C.config.HEAD_LENGTH / 2, C.config.HEAD_LENGTH) + 1).toString(),
                    t = C.dataHandler.getUserData().headUrl,
                    i = t.lastIndexOf("/") + 1;
                0 == t.substr(i).length && (C.dataHandler.getUserData().HeadPath = e, C.httpHandler.setDefaultHead(e))
            }
            this.updateChipNum()
        }
        onRedEnvelopeButtonClick() {
            C.AudioMgr.playButtonSound("button_click.mp3"), null == this.redEnvelopePopup && (this.redEnvelopePopup = u(this.redEnvelopePrefab), this.redEnvelopePopup.setPosition(0, 0), this.node.addChild(this.redEnvelopePopup)), this.redEnvelopePopup.active = !0
        }
        onBackFromInviteFriend() {
            this.setMenuSideBarBtnState(this.selfBtn)
        }
        setHallSceneViewForMTTHall() {
            c(G.instance) && G.instance.setHallScene(this)
        }
        initMultipleGame(e, t, i) {}
        onBtnFindClick(e) {
            var t;
            this.swithView(null != (t = this.hallPokerViewNode) && t.active ? this.hallPokerViewNode : this.homePokerTypeViewNode || this.hallPokerViewNode, e.target), C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.MessageCenter.send("hall_bottom_lobby_button")
        }
        onBtnMiniGamesClick(e) {
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.appConfig.getLobbyConfig().casino.enableRedirectWebMinigame ? (C.popUp.showMsgI18n({
                title: "MainScene_Scene_menu_games",
                txt: "MainScene_Scene_menu_games_popUp_txt",
                msgType: C.Enum.ToastType.ToastTypeInfo
            }), p.openURL("https://pk9.com/?utm_source=pkw-desktop-mini-games")) : this.miniGames && this.swithView(this.miniGames, e.target), this.noticeBtn && (this.noticeBtn.getComponent(U).btnState = W.normal, this.noticeBtn.getComponent(U).isChecked = !1), ie.getInstance().sendEvent(C.Enum.CurrentScreen.casinoGameSelection, C.Enum.segmentEvent.ScreenOpened, C.Enum.Functionality.casino)
        }
        onBtnEarnClick(e) {
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.isEarnViewShow() || (this.enterHallJumpToIndex = L.None, this.getDepositStatus(), C.MessageCenter.send("hall_bottom_lobby_button"))
        }
        onBtnCasinoClicked(e) {
            p.isNative && p.isMobile && (!C.roomManager.isLoadGameState || C.roomManager.getCurrentMiniGameID()) || (C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.openCasino())
        }
        openCasino() {
            C.httpHandler.requestPlayerLocks((() => {
                const e = C.dataHandler.getUserData().isCasinoLocked;
                if (!1 !== e) {
                    let t = !0 === e ? "WorldServerError_Block_Casino_Player_Locked" : e;
                    this.setMenuSideBarBtnState(this.casinoBtn), C.popUp.showMsg({
                        txt: C.config.getStringData(t),
                        title: C.config.getStringData("Attention"),
                        msgType: C.Enum.ToastType.ToastTypeWarning,
                        isTwoBtn: !1,
                        sureLabel: C.config.getStringData("OKAY"),
                        sureCallback: () => {
                            this.setMenuSideBarToCurrentPage()
                        },
                        cancelCallback: () => {
                            this.setMenuSideBarToCurrentPage()
                        },
                        onXCancelCallback: !0
                    })
                } else this.swithView(this.casinoView, this.casinoBtn)
            }))
        }
        requestPlayerLock() {
            const e = this.casinoViewComp;
            (null == e ? void 0 : e.isActive()) && C.httpHandler.requestPlayerLocks(null, !0)
        }
        onGetPlayerLocks() {
            var e;
            const t = null == (e = this.casinoViewComp) ? void 0 : e.isActive(),
                i = C.dataHandler.getUserData().isCasinoLocked;
            if (!1 !== i) {
                if (!t) return;
                let e = !0 === i ? "WorldServerError_Block_Casino_Player_Locked" : i;
                C.popUp.showMsg({
                    txt: C.config.getStringData(e),
                    title: C.config.getStringData("Attention"),
                    msgType: C.Enum.ToastType.ToastTypeWarning,
                    isTwoBtn: !1,
                    sureLabel: C.config.getStringData("OKAY"),
                    sureCallback: () => {
                        this.setMenuSideBarToCurrentPage()
                    },
                    cancelCallback: () => {
                        this.setMenuSideBarToCurrentPage()
                    },
                    onXCancelCallback: !0
                }), this.swithView(this.homePokerTypeViewNode || this.hallPokerViewNode, this.findBtn)
            }
            const n = C.dataHandler.getUserData().isSportsBookLocked;
            if (!1 !== n && c(this.sportsBookView) && this.sportsBookView.active && (!C.isDesktopBuild() || !C.appConfig.getGeneralConfig().multiWindowEnabled)) {
                let e = !0 === n ? "WorldServerError_Block_SportsBook_Player_Locked" : n;
                this.showSportsBookPlayerLockedPopup(C.config.getStringData(e), C.config.getStringData("Attention"), !1)
            }
        }
        onBtnPromotionClicked(e) {
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.swithView(this.promotionView, e.target), C.MessageCenter.send("hall_bottom_lobby_button")
        }
        onBtnPokerFlipsClicked() {
            var e;
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.MessageCenter.send(C.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                gameId: C.Enum.GameId.CowBoy
            });
            const t = null == (e = this.pokerFlipsBtn) ? void 0 : e.getComponent(U);
            t && (t.btnState = W.normal, t.isChecked = !1)
        }
        onBtnPokerMasterClicked() {
            var e;
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.MessageCenter.send(C.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                gameId: C.Enum.GameId.PokerMaster
            });
            const t = null == (e = this.pokerMasterBtn) ? void 0 : e.getComponent(U);
            t && (t.btnState = W.normal, t.isChecked = !1)
        }
        onLoginBtnClicked() {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.authenticator.showLoginPopup(this.loginPopupParent)
        }
        onRegisterBtnClicked() {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.authenticator.showRegistrationPopup(this.loginPopupParent)
        }
        onBtnSportsBookClicked(e, t) {
            t || C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.checkSecuritySportsBook(this.openSportsBook.bind(this, e), (() => {
                this.setMenuSideBarToCurrentPage(), this.swithView(this.homePokerTypeViewNode || this.hallPokerViewNode, this.findBtn)
            }), !0)
        }
        _unScheduleCheckSecuritySportsBook() {
            this._checkSecuritySportsBookAction && (this.unschedule(this._checkSecuritySportsBookAction), this._checkSecuritySportsBookAction = null)
        }
        openSportsBook(e) {
            C.httpHandler.requestPlayerLocks((() => {
                const e = C.dataHandler.getUserData().isSportsBookLocked;
                if (!1 === e || this.sportsBookView.active) this.swithView(this.sportsBookView, this.sportsBookBtn);
                else {
                    this.setMenuSideBarBtnState(this.sportsBookBtn);
                    let t = !0 === e ? "WorldServerError_Block_SportsBook_Player_Locked" : e;
                    this.showSportsBookPlayerLockedPopup(C.config.getStringData(t), C.config.getStringData("Attention"), !0)
                }
            }))
        }
        checkSecuritySportsBook(e, t, i = !1) {
            if (C.dataHandler.getUserData().showTouristLimited("sports_book_tourist_msg")) return C.authenticator.autoShowSportsBook = !0, void this.setMenuSideBarToCurrentPage();
            this._unScheduleCheckSecuritySportsBook(), C.security.tryJoinSportsBook((() => {
                var n, o, s, a, r, l, h, u, p;
                if (null != (n = C.geoComplyManager) && n.isGeoTokenRequired()) null == (p = C.geoComplyManager) || p.requestValidToken(((i = "") => {
                    i && this.checkSecuritySportsBook(e, t)
                }), (() => {
                    null == t || t()
                }));
                else if (null == (o = C.geoComplyManager) || !o.checkForLocationServices(e)) {
                    if ((null == (s = C.geoComplyManager) || !s.isGeoTokenRequired()) && null != (a = C.geoComplyManager) && a.bypassGeoComply && (null == (r = C.geoComplyManager) || !r.getGeoToken())) return i && ae.getInstance().showMsgI18n({
                        iconType: re.IN_PROGRESS,
                        enableAutoHide: !1,
                        closeCallback: null
                    }), this._unScheduleCheckSecuritySportsBook(), this._checkSecuritySportsBookAction = this.checkSecuritySportsBook.bind(this, e, t, !1), void this.scheduleOnce(this._checkSecuritySportsBookAction, 1);
                    null != (l = C.geoComplyManager) && l.isGeoTokenRequired() || null == (h = C.geoComplyManager) || !h.bypassGeoComply || null == (u = C.geoComplyManager) || !u.getGeoToken() || ae.getInstance().hideAllPopup(), e()
                }
            }))
        }
        getDepositStatus() {
            if (C.dataHandler.getUserData().showTouristLimited("ProfileInfo_Tourist_Account_Upgrade_Msg")) return C.authenticator.autoShowCashier = !0, void this.setMenuSideBarToCurrentPage();
            var e;
            C.appConfig.isLandscapeLayout ? c(G.instance) && G.instance.setStage2RegCheckingInProgressStatus(!1) : null == (e = this.hallPokerViewController) || null == (e = e.getHallMttDetailController()) || e.setStage2RegCheckingInProgressStatus(!1);
            this.isStage2RegistrationDone() || C.appConfig.getLobbyConfig().cashier.cashierLobbyViewEnabled ? this.showCashier() : (this.setMenuSideBarBtnState(this.earnBtn), this.checkStage2Registration())
        }
        checkStage2Registration(e = !1) {
            let t = C.config.getStringData("WEB_API_PAYMENTS_DEPOSIT_STATUS", !0),
                i = e ? null : C.popUp.showFirstServerError.bind(C.popUp, null, this.setMenuSideBarToCurrentPage.bind(this));
            C.http.sendRequestV2(t, null, (t => {
                this.onGetDepositStatus(t, e)
            }), i, C.http.HttpRequestType.GET, void 0, !0, !1, !0, null, !0)
        }
        isStage2RegistrationDone() {
            const e = C.dataHandler.getUserData().depositStatus;
            return !(null == e || null != e.DateOfBirthCompleted && !0 !== e.DateOfBirthCompleted || null != e.SSNCompleted && !0 !== e.SSNCompleted || null != e.KYCCheckPassed && !0 !== e.KYCCheckPassed)
        }
        onGetDepositStatus(e, t = !1) {
            C.dataHandler.getUserData().depositStatus = e, t ? ((C.dataHandler.getUserData().loginAfterRegister || C.dataHandler.getUserData().depositStatus.NDRPCheck) && Q.getInstance().load(), this.showFirstDepositPromoPopup()) : this.checkDepositStatus(), this.checkKycStatus()
        }
        showFirstDepositPromoPopup() {
            if (this.isStage2RegistrationDone()) 0 == C.authenticator.shouldDelayPromo() && this.checkForLoginPromoPopups();
            else if (this.depositPromoPopupPrefab && (this.depositPromoPopup = u(this.depositPromoPopupPrefab).getComponent(K)), this.depositPromoPopup) {
                C.tools.getRootCanvas(this.node).addChild(this.depositPromoPopup.node), this.depositPromoPopup.node.setSiblingIndex(C.Enum.ZORDER_TYPE.ZORDER_TT);
                const e = this.shouldSkipPromoPopupOnFirstDeposit() ? null : this.triggerLoginPromoPopup.bind(this);
                this.depositPromoPopup.showPopup(this.checkDepositStatus.bind(this), e), this.skipPromoOnMiniGameClose = this.shouldSkipPromoPopupOnMiniGameClose()
            }
        }
        shouldSkipPromoPopupOnFirstDeposit() {
            return C.authenticator.autoShowBuyInMTTById > 0 || null !== C.authenticator.autoShowBuyInSNG || null !== C.authenticator.autoShowCashier
        }
        shouldSkipPromoPopupOnMiniGameClose() {
            return C.authenticator.autoShowMiniGamePopup > 0
        }
        triggerLoginPromoPopup() {
            C.dynamicPromoController.incrementPopupTrigger(J.LobbyPopup, Z.UserLogin), C.dynamicPromoController.showPromoPopup(J.LobbyPopup, Z.UserLogin).then((() => {
                this.checkForBoInitiatedKyc()
            }))
        }
        checkForLoginPromoPopups() {
            this.skipPromoOnMiniGameClose ? this.skipPromoOnMiniGameClose = !1 : this.triggerLoginPromoPopup()
        }
        checkKycStatus() {
            pe.getInstance().checkAndShowKycStatusPopup(this.goToKycPage.bind(this), this.loginPopupParent)
        }
        showKycStatusOnNotification() {
            "" !== C.globalMsgDataMgr.kyc_status && (pe.getInstance().showKYCStatusPopup(C.globalMsgDataMgr.kyc_status, this.goToKycPage.bind(this), this.loginPopupParent), C.globalMsgDataMgr.kyc_status = "")
        }
        checkForBoInitiatedKyc() {
            C.dataHandler.getUserData().hasBoInitiatedKyc && (oe.getInstance().showMsg({
                confirmCallback: this.goToKycPage.bind(this),
                enableLaterButton: !0
            }), C.dataHandler.getUserData().hasBoInitiatedKyc = !1)
        }
        checkDepositStatus(e = {}) {
            const t = C.dataHandler.getUserData().depositStatus;
            if (!1 !== t.DateOfBirthCompleted && !1 !== t.SSNCompleted) {
                var i, n;
                if (C.appConfig.isLandscapeLayout) {
                    if (c(G.instance) && G.instance.getStage2RegCheckingInProgressStatus()) return void G.instance.OnStage2RegitrationComplete()
                } else if (null != (i = this.hallPokerViewController) && null != (i = i.getHallMttDetailController()) && i.getStage2RegCheckingInProgressStatus()) return void(null == (n = this.hallPokerViewController) || null == (n = n.getHallMttDetailController()) || n.OnStage2RegitrationComplete());
                this.showCashier()
            } else this.InitStage2Reg(e)
        }
        InitStage2Reg(e = {}) {
            if (C.dataHandler.getUserData().isTouristUser) return;
            let t = C.config.getStringData("WEB_API_GET_USER_INFO_CONFIG", !0),
                i = C.popUp.showFirstServerError.bind(C.popUp, null, this.setMenuSideBarToCurrentPage.bind(this));
            C.http.sendRequestV2(t, null, this.onUserInfoConfigSuccess.bind(this, e), i, C.http.HttpRequestType.GET)
        }
        onUserInfoConfigSuccess(e, t) {
            ie.getInstance().sendEvent(C.Enum.CurrentScreen.registrationStageTwo, C.Enum.segmentEvent.RegistrationStageTwoStarted, C.Enum.Functionality.registration, e), this.showUserInfoForm(t)
        }
        showUserInfoForm(e, t = null, i = null, n = null) {
            var o;
            C.dataHandler.getUserData().isLoggedIn() && !C.dataHandler.getUserData().isTouristUser && (null != this.userInfo_view && 1 == (null == (o = this.userInfo_view) || null == (o = o.node) ? void 0 : o.active) || (this.userInfo_view = u(this.userInfo_prefab).getComponent(F), this.userInfo_view.node.active = !1, C.tools.getRootCanvas(this.node).addChild(this.userInfo_view.node), this.userInfo_view.node.setSiblingIndex(C.Enum.ZORDER_TYPE.ZORDER_LOADING - 1), this.userInfo_view.setUserSchema(e, t, i), this.userInfo_view.node.active = !0, this.userInfo_view.setHallScene(this), this.userInfo_view.updateForm(n)))
        }
        OnStage2RegistrationFormClose() {
            var e;
            (this.setMenuSideBarToCurrentPage(), C.appConfig.isLandscapeLayout) ? c(G.instance) && G.instance.setStage2RegCheckingInProgressStatus(!1): null == (e = this.hallPokerViewController) || null == (e = e.getHallMttDetailController()) || e.setStage2RegCheckingInProgressStatus(!1)
        }
        OnStage2RegistrationComplete() {
            const e = C.dataHandler.getUserData().depositStatus;
            e && (e.DateOfBirthCompleted = !0, e.SSNCompleted = !0), this.checkDepositStatus()
        }
        showCashier() {
            C.dataHandler.getUserData().showNDRPVerificationReviewPopup(this.setMenuSideBarToCurrentPage.bind(this)) || (this.swithView(this.earnView, this.earnBtn), this.showNewCashier(), this.enterHallJumpToIndex == L.DepositScene && (this.enterHallJumpToIndex = L.None))
        }
        showNewCashier() {
            const e = this.earnView.getComponent(te);
            this.enterHallJumpToIndex == L.DepositScene ? e.initCashierPage(A.Deposit) : e.initCashierPage(A.None)
        }
        onBtnSelfClick(e) {
            var t, i;
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.appConfig.isLandscapeLayout || C.MessageCenter.send("hideMttHall");
            let n = !(null != (t = this.selfView) && t.active);
            const o = e ? e.target : this.selfBtn;
            this.swithView(this.selfView, o), null == (i = this.selfView) || i.getComponent(D).focusOnProfileMenu(n), C.config.getLog(), C.MessageCenter.send("hall_bottom_profile_button"), ie.getInstance().sendEvent(C.Enum.CurrentScreen.profileSettings, C.Enum.segmentEvent.ScreenOpened, C.Enum.Functionality.invite)
        }
        onBtnInviteFriendsClick(e) {
            if (C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.dataHandler.getUserData().showTouristLimited("selfview_InviteFriends_tourist_msg")) return this.setMenuSideBarToCurrentPage(), C.authenticator.autoShowInvite = !0, void C.popUp.injectCallbacks(null, (() => {
                this.setMenuSideBarToCurrentPage(), C.dataHandler.cancleUpgradeAccount()
            }));
            this.jumpToInvite()
        }
        jumpToInvite() {
            const e = this.getEnabledInviteBtn();
            if (!c(e)) return;
            let t = !this.selfView.active;
            this.swithView(this.selfView, e), this.selfView.getComponent(D).focusOnInviteFriends(t), this.disableTopAppLogo()
        }
        onBtnSettingsClick(e) {
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.jumpToProfileSettings()
        }
        jumpToProfileSettings() {
            let e = !this.selfView.active;
            this.swithView(this.selfView, this.selfBtn), this.selfView.getComponent(D).focusOnSettings(e)
        }
        onSelfViewPageChange(e) {
            e == N.SVFFI_INVITE_FRIENDS ? this.setMenuSideBarBtnState(this.getEnabledInviteBtn()) : this.setMenuSideBarBtnState(this.selfBtn)
        }
        showLabaPanel() {}
        swithView(e, t) {
            this._isFindView = e === this.hallPokerViewNode, this.setMenuSideBarBtnState(t);
            const i = this.casinoViewComp;
            !e || e.active && !this.isWebviewNode(e) || (e.active = !0, this.scheduleOnce((() => {
                null !== this.hallPokerViewNode && (this.hallPokerViewNode.active = e.uuid === this.hallPokerViewNode.uuid, this.hallPokerViewNode.active && null !== this.hallPokerViewController && this.hallPokerViewController.hallViewActivated()), null !== this.selfView && (this.selfView.active = e.uuid === this.selfView.uuid), null !== this.miniGames && (this.miniGames.active = e.uuid === this.miniGames.uuid), null !== this.earnView && this.setWebviewActive(this.earnView, e.uuid === this.earnView.uuid), i && i.setActive(e.uuid === this.casinoView.uuid, !1), null !== this.promotionView && this.setWebviewActive(this.promotionView, e.uuid === this.promotionView.uuid), null !== this.sportsBookView && (this.sportsBookView.active = e.uuid === this.sportsBookView.uuid), null !== this.wptgLiveEventView && (this.wptgLiveEventView.active = e.uuid === this.wptgLiveEventView.uuid), null !== this.homePokerTypeViewNode && (this.homePokerTypeViewNode.active = e.uuid === this.homePokerTypeViewNode.uuid, this.homePokerTypeViewNode.active && C.MessageCenter.send(C.Enum.MessageCenterAction.showHomePokerTypeView)), C.MessageCenter.send("openCasinoView", null == i ? void 0 : i.isActive())
            })), C.MessageCenter.send("hide_hallMttDetailView", null == i ? void 0 : i.isActive()), C.appConfig.isLandscapeLayout || (C.MessageCenter.send("hideMttHall"), this.enableTopAppLogo())), this.hallPokerViewNode && e == this.hallPokerViewNode && this.hallPokerViewController.reloadCurrentTabList(!0);
            const n = !C.appConfig.isWebApp;
            C.MessageCenter.send("close_globalMsgLayer", n)
        }
        isWebviewNode(e) {
            var t, i, n;
            return !!c(e, !0) && (e.uuid === (null == (t = this.casinoView) ? void 0 : t.uuid) && !this.casinoViewComp.isActive() || e.uuid === (null == (i = this.earnView) ? void 0 : i.uuid) && !this.isEarnViewShow() || e.uuid === (null == (n = this.promotionView) ? void 0 : n.uuid) && !this.isPromoViewShow())
        }
        setWebviewActive(e, t) {
            var i;
            C.appConfig.isLandscapeLayout || C.MessageCenter.send(C.Enum.MessageCenterAction.HideCashierCoinToolTips), null == (i = e.getComponentInChildren(le)) || i.setActive(t, !1)
        }
        updateChipNum() {
            var e;
            null == (e = this.goldView) || e.getComponent(M).UpdateUserInfo()
        }
        firstShowActivityPanel() {
            C.dataHandler.getActivityData().isShow ? (g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).init(), C.dataHandler.getActivityData().showType != B.NONE ? (g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).showActivity(C.dataHandler.getActivityData().showType), C.dataHandler.getActivityData().showType = B.NONE) : g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).showActivity()) : g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).removeWebview()
        }
        onBtnAddCoinClick() {
            C.SHOP.RechargeClick()
        }
        onBtnKeFuClick(e) {
            C.MessageCenter.send("HideWebview_ShowWindows", !1), this.setMenuSideBarBtnState(e.target), C.AudioMgr.playButtonSound("button_click.mp3");
            g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).init(), g.getScene().getComponentInChildren(d).node.getChildByName("activityView").getComponent(f).showActivity(1, (() => {
                const e = this.setMenuSideBarToCurrentPage.bind(this);
                _.show(this.playerComplaintsPref, null, (() => {
                    e(), C.MessageCenter.send("HideWebview_ShowWindows", !0)
                }))
            }))
        }
        onClickSwitchServer() {
            C.AudioMgr.playButtonSound("button_click.mp3"), console.log("onClickSwitchServer"), C.domainMgr.isHaveNextServer() && (C.MessageCenter.send("HideWebview_ShowWindows", !1), C.popUp.showMsgI18n({
                txt: "UIWitchServer2",
                isTwoBtn: !0,
                sureCallback: this.onGoReconnect.bind(this),
                cancelCallback: this.onNoReconnect.bind(this)
            }))
        }
        showSafe() {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.MessageCenter.send("HideWebview_ShowWindows", !1), C.dataHandler.getUserData().showTouristLimited("roleInfoSet_tips_useSafe_barntips_text") || C.worldNet.RequestGetStrongboxInfo()
        }
        onGoReconnect() {
            C.MessageCenter.send("HideWebview_ShowWindows", !0), C.netWorkManager.onGoReconnect()
        }
        onNoReconnect() {
            C.MessageCenter.send("HideWebview_ShowWindows", !0)
        }
        _onMsgSwitchSceneToMiniGame() {
            this.swithView(this.miniGames, this.noticeBtn)
        }
        _onMsgSwitchSceneToCasinoLobby() {
            this.openCasino()
        }
        _onMsgSwitchSceneToPokerLobby() {
            this.swithView(this.homePokerTypeViewNode || this.hallPokerViewNode, this.findBtn), C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), C.MessageCenter.send("hall_bottom_lobby_button")
        }
        _onMsgswitchSceneToEarnView(e = L.None) {
            C.appConfig.isWebApp || this.isEarnViewShow() || (this.enterHallJumpToIndex = e, this.getDepositStatus())
        }
        isEarnViewShow() {
            var e;
            return null == (e = this.earnViewWebComp) ? void 0 : e.isActive()
        }
        isPromoViewShow() {
            var e;
            return null == (e = this.promoViewWebComp) ? void 0 : e.isActive()
        }
        _onMsgSwitchSceneToSelfView() {
            this.swithView(this.selfView, this.selfBtn)
        }
        _onMsgNeedSliderVerify() {
            R.initSingleInst(this.sliderVerify_prefab, this.node, C.Enum.ZORDER_TYPE.ZORDER_TOP).autoShow((() => {}))
        }
        _onjumpgto_notice(e) {}
        initGoldView() {
            this.goldViewPref && this.gold_Panel && (this.goldView = u(this.goldViewPref), this.gold_Panel.addChild(this.goldView), this.goldView.name = "goldView_pref")
        }
        getBottomMenuHeight() {
            if (!this.bottomView) return 0;
            let e = 0;
            return this.bottomView.active ? e = this.bottomView.getComponent(m).height : e > 0 && C.appConfig.getGeneralConfig().helpLine.showProminent && (e += 100), e
        }
        jumpToMtt(e = null) {
            let t = b;
            this.jumpToTournamentType(t, e)
        }
        jumpToSng() {
            if (C.appConfig.isLandscapeLayout) this.scheduleOnce((() => {
                let e = P;
                this.jumpToTournamentType(e)
            }), .1);
            else {
                let e = P;
                this.jumpToTournamentType(e)
            }
        }
        jumpToTournamentType(e, t = null) {
            if (this.hallPokerViewController) {
                this.swithView(this.hallPokerViewNode, this.findBtn);
                let i = "mtt";
                return e == P && (i = "sng"), void(this.homePokerTypeViewController ? this.homePokerTypeViewController.view.emitEvent(ge.SHOW_HALL_TAB, i) : this.hallPokerViewController.changeTab(i, t))
            }
        }
        jumpToSportsBook() {
            this.onBtnSportsBookClicked(null, !0)
        }
        hallEnterMTT() {
            if (C.roomManager.isEnterMTT) {
                C.action.setAcMapHide();
                let e = g.getScene().getComponentInChildren(d).node.getChildByName("safe_pref");
                c(e, !0) && e.getComponent(T).closeView(), C.MessageCenter.send("jumpToMtt"), this.hallPokerViewController && this.hallPokerViewController.changeTab("mtt")
            }
        }
        registerMttEvents() {
            this.node.on("onShowMttDetailsPanel", (e => {
                c(this) && this.onShowMttDetailsPanel()
            })), this.node.on("onHideMttDetailsPanel", (e => {
                c(this) && this.onHideMttDetailsPanel()
            }))
        }
        onShowMttDetailsPanel() {
            this.deactivateBottomView(), this.disableTopAppLogo()
        }
        onHideMttDetailsPanel() {
            this.activeBottomView()
        }
        onBackButtonClicked() {
            var e;
            C.appConfig.isLandscapeLayout ? c(G.instance) && G.instance.onReturnClicked() : null == (e = this.hallPokerViewController) || null == (e = e.getHallMttDetailController()) || e.onReturnClicked()
        }
        deactivateBottomView() {
            this.bottomView && (this.bottomView.active = !1)
        }
        activeBottomView() {
            let e = C.config.isOverSeas() || C.config.isVietnam();
            this.bottomView && (this.bottomView.active = !e)
        }
        setMenuSideBarBtnState(e) {
            if (null != e)
                for (let t = 0; t < this.menuSideBarBtns.length; ++t) {
                    const i = this.menuSideBarBtns[t],
                        n = null == i ? void 0 : i.getComponent(O);
                    null !== i && null !== n && (i === e ? (n.btnState = W.pressed, n.isChecked = !0) : (n.btnState = W.normal, n.isChecked = !1))
                }
        }
        setMenuSideBarToCurrentPage() {
            this.setMenuSideBarBtnState(this.getCurrentPageBtn())
        }
        getCurrentPageBtn() {
            var e, t;
            const i = this.casinoViewComp;
            if (null != (e = this.hallPokerViewNode) && e.active || null != (t = this.homePokerTypeViewNode) && t.active) return this.findBtn;
            if (this.isEarnViewShow()) return this.earnBtn;
            if (this.selfView && this.selfView.active) {
                return this.selfView.getComponent(D).getCurrentActiveFlag() == N.SVFFI_INVITE_FRIENDS ? this.getEnabledInviteBtn() : this.selfBtn
            }
            return this.miniGames && this.miniGames.active ? this.noticeBtn : null != i && i.isActive() ? this.casinoBtn : this.isPromoViewShow() ? this.promotionBtn : this.wptgLiveEventView && this.wptgLiveEventView.active ? this.wptgLiveBtn : this.sportsBookView && this.sportsBookView.active ? this.sportsBookBtn : null
        }
        update(e) {
            var t;
            null == (t = this.updateAutoEnterTournament) || t.call(this, e)
        }
        checkAutoRedirect() {
            switch (C.viewAdaptive.enterHallJumpToIndex) {
                case L.DepositScene:
                    C.viewAdaptive.enterHallJumpToIndex = L.None, this._onMsgswitchSceneToEarnView(L.DepositScene)
            }
        }
        onBtnWptgLiveClicked(e) {
            C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), this.swithView(this.wptgLiveEventView, e.target), C.MessageCenter.send("hall_bottom_lobby_button")
        }
        checkAndCallPromoPopups() {
            let e = null;
            C.authenticator.delayShowPromoPopup ? C.authenticator.showDelayedPromo() : (C.dynamicPromoController.hasUntriggeredPopups(J.LobbyPopup, Z.CashGameSitIn) ? e = Z.CashGameSitIn : C.dynamicPromoController.hasUntriggeredPopups(J.LobbyPopup, Z.TournamentBuyIn) ? e = Z.TournamentBuyIn : C.dynamicPromoController.hasUntriggeredPopups(J.LobbyPopup, Z.CashGameClosed) && (e = Z.CashGameClosed), e && C.dynamicPromoController.showPromoPopup(J.LobbyPopup, e))
        }
        isMiniGameEnabled(e) {
            return !!{
                [C.Enum.GameId.CowBoy]: C.appConfig.getLobbyConfig().showPokerFlips,
                [C.Enum.GameId.PokerMaster]: C.appConfig.getLobbyConfig().showPokerMaster,
                [C.Enum.GameId.HumanBoy]: C.appConfig.getLobbyConfig().showCasinoLobby,
                [C.Enum.GameId.VideoCowboy]: C.appConfig.getLobbyConfig().showCasinoLobby
            } [e]
        }
        openListMiniGamePopup(e) {
            const {
                gameId: t,
                launchedFrom: i,
                skipIntro: n,
                redirectAfterLogin: o
            } = e;
            if (C.dataHandler.getUserData().showTouristLimited()) return void(C.authenticator.autoShowMiniGamePopup = t);
            if (!this.isMiniGameEnabled(t)) return;
            null != i && i.toString().length >= 0 && (C.cowboyPromotionManager.data.instanceData.launchFromScreen = i.toString());
            const s = () => {
                C.miniGamePopupManager.processClose(), C.worldNet.MiniGamesListRequest()
            };
            if (this._onUpdateMiniGameListCallback = e => {
                    this._onUpdateMiniGameListCallback = null, e.filter((e => e.sourceType == t)).length > 0 ? this.showMinigameLobby(t) : this.showMaintenancePopup(t)
                }, n) return void(null == s || s());
            const a = {
                [C.Enum.GameId.CowBoy]: X.WelcomePokerFlip,
                [C.Enum.GameId.PokerMaster]: X.WelcomePokerMaster,
                [C.Enum.GameId.HumanBoy]: X.WelcomePokerFlip,
                [C.Enum.GameId.VideoCowboy]: X.WelcomeVideoCowboy
            };
            let r = `${this.keyNumberShowingIntroPopup}_${t}`,
                l = p.localStorage.getItem(r) ?? 0;
            if (l < C.appConfig.getGameConfig().miniGameConfig.maxNumberTimeShowIntroPopup) {
                const e = this._onUpdateMiniGameListCallback;
                o && (this._onUpdateMiniGameListCallback = null), p.localStorage.setItem(r, ++l), C.miniGamePopupManager.showPopup({
                    popupId: a[t],
                    sureCallback: () => {
                        o && (this._onUpdateMiniGameListCallback = e), null == s || s()
                    }
                })
            } else null == s || s()
        }
        showMaintenancePopup(e) {
            const t = {
                [C.Enum.GameId.CowBoy]: "maintenance_content",
                [C.Enum.GameId.PokerMaster]: "minigame_pokermaster_maintenance_content",
                [C.Enum.GameId.HumanBoy]: "maintenance_content",
                [C.Enum.GameId.VideoCowboy]: "minigame_videocowboy_maintenance_content"
            };
            C.popUp.showMsgI18n({
                title: "maintenance_header",
                subtitle: "maintenance_title",
                txt: t[e],
                sureLabel: "BackBtnText",
                iconType: H.Maintenance
            })
        }
        showMinigameLobby(e) {
            C.miniGamePopupManager.showPopup({
                popupId: e,
                datas: C.dataHandler.getMiniGameList(),
                cbSelectedItem: () => {
                    this.hideAllWebView()
                },
                onUpdateContent: (e, t) => {
                    0 == e.length && (C.miniGamePopupManager.processClose(), this.showMaintenancePopup(t))
                }
            }), C.miniGamePopupManager.setSortFn(((e, t) => e.AmountLevel[0] < t.AmountLevel[0] ? -1 : 1))
        }
        hideAllWebView() {
            C.appConfig.getGeneralConfig().multiWindowEnabled || (this.casinoViewComp && this.casinoViewComp.setActive(!1, !0), this.wptgLiveEventView && (this.wptgLiveEventView.active = !1), this.miniGames && (this.miniGames.active = !1), this.promoViewWebComp && this.promoViewWebComp.setActive(!1, !0), this.earnViewWebComp && this.earnViewWebComp.setActive(!1, !0), this.sportsBookView && (this.sportsBookView.active = !1))
        }
        loadPromotionView(e) {
            if (!this.promotionView || !this.promotionBtn) return;
            const t = this.isPromoViewShow(),
                i = "string" == typeof e ? e : e.promoSlug,
                n = this.promotionView.getComponent(Y);
            n.setPromoSlug(i), this.swithView(this.promotionView, this.promotionBtn), "object" == typeof e && (t && e.reloadWebiew && n.reloadWebview(), C.appConfig.getGeneralConfig().multiWindowEnabled && e.focusHallWindow && C.focusWindow(1))
        }
        showPromotionPopup(e) {
            c(e) && c(this.promoPopupParent) && (this.closeAllPromotionPopups(), this.promoPopupParent.addChild(e), e.setPosition(0, 0))
        }
        closeAllPromotionPopups() {
            c(this.promoPopupParent) && this.promoPopupParent.removeAllChildren()
        }
        webAppCloseProfile() {
            this.hallPokerViewNode && (this.hallPokerViewNode.active = !0), this.selfView && this.selfView.active && (this.selfView.active = !1)
        }
        initSelfView() {
            if (this.selfviewPref) {
                this.selfView = u(this.selfviewPref), this.selfView.getComponent(D).hallScene = this;
                const e = this.bottomView.parent;
                C.appConfig.isWebApp && this.selfView && (e.addChild(this.selfView), this.selfView.active = !1, this.scheduleOnce((() => {
                    C.MessageCenter.send("ProfilePageLoaded")
                }), .5))
            }
        }
        initGloblaMsgLayerPrefab() {
            this.notificationPref && (this.notificationNode = u(this.notificationPref), this.notificationParent.addChild(this.notificationNode))
        }
        onReceiveMailIconCount(e) {
            this.mailCountInfo = e
        }
        goToKycPage() {
            this.closeAllPromotionPopups(), this.swithView(this.selfView, this.selfBtn), this.selfView.getComponent(D).performButtonAction(N.SVFFI_KYC_VERIFICATION)
        }
        showSportsBookPlayerLockedPopup(e, t, i) {
            C.popUp.showMsg({
                txt: e,
                title: t,
                msgType: C.Enum.ToastType.ToastTypeWarning,
                isTwoBtn: !1,
                sureLabel: C.config.getStringData("OKAY"),
                sureCallback: () => {
                    i && this.setMenuSideBarToCurrentPage()
                },
                cancelCallback: () => {
                    i && this.setMenuSideBarToCurrentPage()
                },
                onXCancelCallback: !0
            }), i && this.swithView(this.hallPokerViewNode, this.findBtn)
        }
        enableTopAppLogo() {
            null == this.logoNode || C.appConfig.isWebApp || (this.logoNode.active = !0)
        }
        disableTopAppLogo() {
            null == this.logoNode || C.appConfig.isWebApp || (this.logoNode.active = !1)
        }
        getEnabledInviteBtn() {
            return [this.inviteFriendsBtnLeft, this.inviteFriendsBtnRight].find((e => c(e, !0) && e.active))
        }
        showMTTDetailByIdInHall(e) {
            null != e && (this.swithView(this.hallPokerViewNode, this.findBtn), this.scheduleOnce((() => {
                var t;
                (this.jumpToMtt("All"), this.hallPokerViewController) ? (this.hallPokerViewController.showMttDetailLobbyV2FromDeepLink(e.tournamentId, e.simulateRegisterClick), null == e.callback || e.callback()) : null == (t = ue.instance) || t.switchToFullList((() => {
                    this.scheduleOnce((() => {
                        C.MessageCenter.send("show_tournament_detail", e), null == e.callback || e.callback()
                    }))
                }))
            })))
        }
        getTopMenuWidth() {
            const e = this.login_Btn.parent,
                t = e.children.filter((e => e.active));
            let i = 0;
            for (let e = 0; e < t.length; e++) {
                i += t[e].getComponent(m).width
            }
            const n = e.getComponent(w);
            return n && (i += n.spacingX * (t.length - 1)), i
        }
        onNotificationShow(e) {
            if (!C.appConfig.isLandscapeLayout)
                if (e) this.disableTopAppLogo();
                else {
                    const e = this.getCurrentPageBtn();
                    null != e && e != this.findBtn && e != this.selfBtn && this.enableTopAppLogo()
                }
        }
        refreshPageBannerView() {
            var e;
            null == (e = this.hallPokerViewController) || e.updateBannerIfNeeded()
        }
        updateCashierTitle() {
            if (this.earnBtn) {
                let e = this.earnBtn.getComponentInChildren(de);
                e && ("TH" == C.dataHandler.getUserData().countryISO2 ? e.textKey.includes("_TH") || e.setKey(e.textKey + "_TH", !0) : e.textKey.includes("_TH") && e.setKey(e.textKey.replace("_TH", ""), !0))
            }
        }
    }).depositStatusFirst = null, lt = t((rt = $t).prototype, "hallPokerViewPref", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = t(rt.prototype, "homePokerTypeViewPref", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = t(rt.prototype, "selfviewPref", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = t(rt.prototype, "activityPref", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = t(rt.prototype, "goldViewPref", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = t(rt.prototype, "playerComplaintsPref", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = t(rt.prototype, "sliderVerify_prefab", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = t(rt.prototype, "userInfo_prefab", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = t(rt.prototype, "redEnvelopePrefab", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = t(rt.prototype, "casinoViewPref", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = t(rt.prototype, "promotionViewPref", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = t(rt.prototype, "cashierLobbyView_Pref", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = t(rt.prototype, "sportsBookViewPref", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = t(rt.prototype, "depositPromoPopupPrefab", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = t(rt.prototype, "bottomView", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = t(rt.prototype, "miniGames", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = t(rt.prototype, "noticeBtn", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = t(rt.prototype, "findBtn", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = t(rt.prototype, "casinoBtn", [He], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = t(rt.prototype, "dataBtn", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = t(rt.prototype, "earnBtn", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = t(rt.prototype, "selfBtn", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = t(rt.prototype, "inviteFriendsBtnLeft", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = t(rt.prototype, "inviteFriendsBtnRight", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = t(rt.prototype, "promotionBtn", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = t(rt.prototype, "pokerFlipsBtn", [We], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = t(rt.prototype, "sportsBookBtn", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = t(rt.prototype, "pokerMasterBtn", [xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = t(rt.prototype, "wptgLiveBtn", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = t(rt.prototype, "safeBtn", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = t(rt.prototype, "switchServerBtn", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = t(rt.prototype, "gold_Panel", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = t(rt.prototype, "containers", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Wt = t(rt.prototype, "notificationIcon", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = t(rt.prototype, "backButton", [Ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = t(rt.prototype, "logoNode", [Xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = t(rt.prototype, "balance_node", [$e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = t(rt.prototype, "casino_coin_node", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = t(rt.prototype, "login_Btn", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = t(rt.prototype, "register_Btn", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = t(rt.prototype, "wptgLiveEventViewPref", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = t(rt.prototype, "promoPopupParent", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = t(rt.prototype, "notificationParent", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = t(rt.prototype, "loginPopupParent", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = rt)) || at));
    n._RF.pop()
}
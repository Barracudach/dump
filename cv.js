import * as g from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./WorldNetWork.js";
import * as d from "./NetWork.js";
import * as p from "./GameNetWork.js";
import * as f from "./GameNetWork.js";
import * as m from "./AofNetWork.js";
import * as C from "./Base64Util.js";
import * as M from "./DomainMgr.js";
import * as v from "./NetWorkManager.js";
import * as T from "./HTTP.js";
import * as I from "./Server.js";
import * as y from "./Config.js";
import * as S from "./ResConfig.js";
import * as E from "./Enum.js";
import * as w from "./Enum.js";
import * as b from "./Enum.js";
import * as k from "./MessageCenter.js";
import * as P from "./mdR5.js";
import * as N from "./DataHandler.js";
import * as G from "./Action.js";
import * as D from "./LoadingView.js";
import * as A from "./SwitchLoadingView.js";
import * as _ from "./bytebuffer.mjs_cjs=&original=.js";
import * as W from "./long.mjs_cjs=&original=.js";
import * as B from "./StatusView.js";
import * as R from "./TipsPanel.js";
import * as H from "./TipsArray.js";
import * as O from "./StringTools.js";
import * as x from "./ResourceManager.js";
import * as L from "./GameDataManager.js";
import * as U from "./JackfruitManager.js";
import * as V from "./ViewAdaptive.js";
import * as F from "./numberFix.js";
import * as J from "./Tools.js";
import * as j from "./CacheUtils.js";
import * as Y from "./NativeEvent.js";
import * as K from "./NativeEventCMD.js";
import * as z from "./AudioMgr.js";
import * as Q from "./ClubDataMgr.js";
import * as X from "./GlobalMsgDataManager.js";
import * as mod37 from "./Shop.js";
import * as q from "./CowboyNetWork.js";
import * as Z from "./PushNotice.js";
import * as tt from "./HumanboyBaseSocket.js";
import * as et from "./JackfruitNetWork.js";
import * as nt from "./RoomManager.js";
import * as it from "./VideoCowboyNetWork.js";
import * as ot from "./PokerMasterBaseSocket.js";
import * as st from "./DataNetWork.js";
import * as at from "./ResponsibleGaming.js";
import * as rt from "./ActivityMonitor.js";
import * as gt from "./PopUpMsg.js";
import * as ct from "./Security.js";
import * as ht from "./PermissionMgr.js";
import * as lt from "./AppConfig.js";
import * as ut from "./TooltipsManager.js";
import * as dt from "./SegmentTools.js";
import * as pt from "./xPointHandler.js";
import * as ft from "./CurrencyManager.js";
import * as mt from "./CrashTracing.js";
import * as Ct from "./CowboyPromotionManager.js";
import * as Mt from "./ConnectionTracing.js";
import * as vt from "./AppConfigServer.js";
import * as Tt from "./CasinoTracing.js";
import * as It from "./GeoComplyManager.js";
import * as yt from "./MultipleRoomManager.js";
import * as St from "./KYCHandler.js";
import * as bt from "./EmbedServer.js";
import * as wt from "./FreshchatHandler.js";
import * as Et from "./MockTool.js";
import * as kt from "./SngLoadingView.js";
import * as Pt from "./MiniGamePopupManager.js";
import * as Nt from "./DynamicPromoController.js";
import * as Gt from "./pokermaster.mjs_cjs=&original=.js";
import * as Dt from "./SoundMixer.js";
import * as At from "./LobbyService.js";
import * as _t from "./AnalyticsHandler.js";
import * as Wt from "./StringUtils.js";
import * as Bt from "./WebViewRoomManager.js";
import * as Rt from "./MessageBroker.js";
import * as Ht from "./CookiesController.js";
import * as Ot from "./SeasonalBackgrounds.js";
import * as xt from "./HabaNetwork.js";
import * as Lt from "./TimeElapse.js";
import * as Ut from "./Authenticator.js";
import * as Vt from "./AuthenticationPopup.js";
import * as Ft from "./WebAuthenticator.js";

function main() {
    e._RF.push({}, "b442apX8IZFt5p4xeKQde32", "cv", void 0);
    class Jt {
        constructor() {
            this.netWork = void 0, this.worldNet = void 0, this.gameNet = void 0, this.cowboyNet = void 0, this.videoCowboyNet = void 0, this.humanboyNet = void 0, this.pokerMasterNet = void 0, this.habaNetwork = void 0, this.aofNet = void 0, this.jackfruitNet = void 0, this.dataNet = void 0, this.httpHandler = void 0, this.http = void 0, this.server = void 0, this.dataHandler = void 0, this.action = void 0, this.config = void 0, this.resConfig = void 0, this.MessageCenter = void 0, this.md5 = void 0, this.worldPB = void 0, this.gamePB = void 0, this.cowboyPB = void 0, this.videoCowboyPB = void 0, this.humanboyPB = void 0, this.pokerMasterPB = void 0, this.aofPB = void 0, this.gatePB = void 0, this.dataPB = void 0, this.jackfruitPB = void 0, this.ByteBuffer = void 0, this.Long = void 0, this.configJson = void 0, this.serverJson = void 0, this.countryISO2NameMap = {}, this.countryISO3166 = [], this.Enum = b, this.native = void 0, this.nativeCMD = void 0, this.StatusView = void 0, this.logTools = void 0, this.TT = void 0, this.TP = void 0, this.SHOP = void 0, this.LoadingView = void 0, this.SwitchLoadingView = void 0, this.StringTools = void 0, this.resMgr = void 0, this.viewAdaptive = void 0, this.GameDataManager = void 0, this.JackfruitManager = void 0, this.numFix = void 0, this.tools = void 0, this.AudioMgr = void 0, this.clubDataMgr = void 0, this.netWorkManager = void 0, this.globalMsgDataMgr = void 0, this.roomManager = void 0, this.pushNotice = void 0, this.base64 = void 0, this.domainMgr = void 0, this.CacheUtils = void 0, this.rg = void 0, this.activityMonitor = void 0, this.popUp = void 0, this.miniGamePopupManager = void 0, this.tooltips = void 0, this.security = null, this.KYCHandler = void 0, this.permMgr = void 0, this.segmentTool = void 0, this.appConfig = void 0, this.xPoint = null, this.currencyManager = void 0, this.mttHallDetailsLandscape = null, this.cowboyPromotionManager = void 0, this.appConfigServer = void 0, this.casinoTracing = void 0, this.geoComplyManager = null, this.embeddedServer = null, this.freshChatHandler = null, this.dynamicPromoController = null, this.mockTool = null, this.soundMixer = null, this.lobbyService = null, this.webviewRoomManager = null, this.pocoManager = null, this.authenticator = null, this.authenticationPopup = null, this.loadingPrefab = null, this.firstLoad = !0
        }
        static getInstance() {
            return Jt.g_instance || (Jt.g_instance = new Jt), Jt.g_instance
        }
        initBaseClass() {
            this.md5 = P.getInstance(), this.appConfig = lt.Instance, this.appConfig.initVariantConfig(), this.http = T.getInstance(), this.config = y.getInstance(), this.resConfig = S.getInstance(), this.dataHandler = N.getInstance(), this.nativeCMD = K, this.native = Y.getInstance(), this.StringTools = O.getInstance(), this.resMgr = x.getInstance(), this.tools = J.getInstance(), this.base64 = C.getInstance(), this.domainMgr = M.getInstance(), this.server = I.getInstance(), this.MessageCenter = k.getInstance(), this.CacheUtils = j.getInstance(), this.appConfigServer = vt.getInstance(), this.soundMixer = Nt.getInstance(), Rt.getInstance(this.appConfig.getGameConfig().seasonBackgroundData)
        }
        init() {
            this.GameDataManager = L.getInstance(), this.JackfruitManager = U.getInstance(), this.netWork = d.getInstance(), this.worldNet = u.getInstance(), this.gameNet = p.getInstance(), this.aofNet = m.getInstance(), this.dataNet = st.getInstance(), this.cowboyNet = q.getInstance(), this.videoCowboyNet = it.getInstance(), this.habaNetwork = Ht.getInstance(), this.humanboyNet = tt.getInstance(), this.pokerMasterNet = ot.getInstance(), this.jackfruitNet = et.getInstance(), this.httpHandler = this.appConfig.httpHandler, this.KYCHandler = St.getInstance(), this.segmentTool = dt.getInstance(), this.ByteBuffer = _, this.Long = W, this.action = G.getInstance(), this.action.WIDTH = this.config.WIDTH, this.action.HEIGHT = this.config.HEIGHT, this.appConfig.isWebApp || this.initObjectsLoadFromResourceOrBundle(), this.SwitchLoadingView = A.getInstance(), this.LoadingView = D.getInstance(), this.miniGamePopupManager = kt.getInstance(), this.appConfig.isProd, this.viewAdaptive = V.getInstance(), this.numFix = F.getInstance(), this.AudioMgr = z.getInstance(), this.clubDataMgr = Q.getInstance(), this.globalMsgDataMgr = X.getInstance(), this.netWorkManager = v.getInstance(), this.roomManager = nt.getInstance(), this.dataHandler.getUserData().deviceInfo = this.native.GetDeviceUUID(!0), this.rg = at.getInstance(), this.activityMonitor = rt.getInstance(), null == this.security && (this.security = new ct), this.xPoint = pt.getInstance(), this.permMgr = ht.getInstance(), this.currencyManager = ft.getInstance(), this.cowboyPromotionManager = Ct.getInstance(), this.native.keepScreenOn(), mt.getInstance(), Mt.getInstance(), Dt.getInstance(), this.casinoTracing = Tt.getInstance(), this.geoComplyManager = It.getInstance(), this.embeddedServer = bt.getInstance(), this.freshChatHandler = wt.getInstance(), this.dynamicPromoController = Pt.getInstance(), this.lobbyService = new Gt, this.webviewRoomManager = _t.getInstance(), this.appConfig.isWebApp ? this.authenticator = Ut.getInstance() : (this.authenticator = xt.getInstance(), this.authenticationPopup = Lt.getInstance()), Vt.getInstance()
        }
        initObjectsLoadFromResourceOrBundle() {
            this.config.GET_CLIENT_TYPE() != this.Enum.ClientType.CowboyWeb && (this.SHOP = $.getInstance()), this.pushNotice = Z.getInstance(), this.StatusView = B.getInstance(), Et.getInstance(), this.TP = R.getInstance(), this.TT = H.getInstance(), this.popUp = gt.getInstance(), this.tooltips = ut.getInstance()
        }
        ToastGameError(t, e, n, i, o) {
            let s = "";
            if (!this.isGeoComplyError(e) || this.roomManager.checkIsMiniGame(t)) {
                switch (t) {
                    case w.GameId_Dummy:
                        break;
                    case w.CowBoy:
                    case w.VideoCowboy:
                        if (31001 == e) return void this.netWorkManager.OnNeedRelogin(2);
                        s = this.StringTools.formatC("Cowboy_ServerErrorCode%d", e);
                        break;
                    case w.HumanBoy:
                        if (41001 == e) return void this.netWorkManager.OnNeedRelogin(2);
                        s = this.StringTools.formatC("Humanboy_ServerErrorCode%d", e);
                        break;
                    case w.PokerMaster:
                        if (51001 == e) return void this.netWorkManager.OnNeedRelogin(2);
                        if (e === Ft.pokermaster_proto.ErrorCode.CAN_NOT_LEAVE_IN_BETTING) return;
                        s = this.StringTools.formatC("PokerMaster_ServerErrorCode%d", e)
                } [1218, 31024, 41030, 13043, 51025].includes(e) ? this.popUp.showMsgI18n({
                    txt: "ServerErrorCode1218",
                    title: "Attention",
                    msgType: this.Enum.ToastType.ToastTypeWarning,
                    cashGameScene: n
                }) : this.TT.showMsg(this.config.getStringData(s), E.ToastTypeError, !1, !1, null, this.roomManager.checkIsMiniGame(t))
            } else this.handleGeoComplyError(t, i, o)
        }
        callBackFnMoreGold(t) {
            L.isShowNeedShop = !0, this.MessageCenter.send("on_need_more_gold", t)
        }
        showOutOfFundsPopup(t, e, n, i = this.callBackFnMoreGold.bind(this, e), o) {
            let s = "";
            n && (s = this.config.getStringData("Attention")), !o && this.dataHandler.getUserData().minigame_coin > 0 ? this.showSuggestCloseMiniGamePopup(n) : this.webviewRoomManager.hasAnySportsBookRoom() ? this.showCloseJoinedGamePopup("ContentCloseSportsBook", this.Enum.GameId.SportsBook, n) : Bt.getInstance() && 1 != Bt.getInstance().get("isShowFundsMessage") ? Wt.getInstance().sendOutOfFund() : this.popUp.showMsg({
                txt: t,
                title: s,
                sureCallback: i,
                msgType: this.Enum.ToastType.ToastTypeError,
                cashGameScene: n,
                isTwoBtn: !0,
                sureLabel: this.config.getStringData("Deposit"),
                cancelLabel: this.config.getStringData("Cancel"),
                cancelCallback: () => {
                    this.authenticator.showDelayedPromo()
                }
            })
        }
        showSuggestCloseMiniGamePopup(t) {
            const e = this.roomManager.getCurrentMiniGameID();
            if (0 == e) return;
            const n = {
                [this.Enum.GameId.CowBoy]: "ContentCLosePokerFlip",
                [this.Enum.GameId.PokerMaster]: "ContentCLosePokerMaster",
                [this.Enum.GameId.VideoCowboy]: "ContentCloseVideoCowboy"
            } [e];
            if (n) {
                if (e === this.Enum.GameId.CowBoy) {
                    const t = {
                        failureReason: "balance in use by pokerflips",
                        miniGameCoin: this.dataHandler.getUserData().minigame_coin
                    };
                    this.MessageCenter.send("minigame_buy_in_failed", t)
                }
                this.showCloseJoinedGamePopup(n, e, t)
            } else console.error(`[showSuggestCloseMiniGamePopup] error, double check define content for gameID = ${e}`)
        }
        showCloseJoinedGamePopup(t, e, n) {
            let i = "";
            n && (i = this.config.getStringData("Attention")), this.popUp.showMsg({
                txt: this.config.getStringData(t),
                title: i,
                sureCallback: () => {
                    this.MessageCenter.send("minigame_table_notification_dismissed", {
                        game: "cash game",
                        context: `balance locked ${e}`,
                        buttonName: "okay"
                    })
                },
                msgType: this.Enum.ToastType.ToastTypeError,
                cashGameScene: n,
                isTwoBtn: !1,
                sureLabel: this.config.getStringData("OKAY")
            })
        }
        showServerError(t) {
            let e = "";
            t && (e = this.config.getStringData("Attention")), this.popUp.showMsg({
                txt: this.config.getStringData("ServerErrorCode100072"),
                title: e,
                msgType: this.Enum.ToastType.ToastTypeError,
                cashGameScene: t
            })
        }
        showAppExitPopup(t = !0) {
            if (this.appConfig.getGeneralConfig().multiWindowEnabled && this.focusWindow(1), n.getScene().getComponentInChildren(i).node.getChildByName("AppClosePopUp") || this.isTopLevelAppClosePopupPresent()) return;
            let e = (e, n) => {
                    e ? c(e.message || e) : n.load("prefabs/AppClosePopUp", h, ((e, n) => {
                        if (e) return void c(e.message || e);
                        this.popUp.showPrefab(n, {
                            subtitle: this.config.getStringData("App_Exit_Popup_Title_Text"),
                            txt: this.config.getStringData("App_Exit_Popup_Msg_Text"),
                            isTwoBtn: !0,
                            onXCancelCallback: !1,
                            cancelCallback: () => {
                                Ot.getInstance().start("ExitApp", "OnExitMainApp"), this.MessageCenter.send(this.Enum.MessageCenterAction.OnExitMainApp), Ot.getInstance().end("ExitApp", "OnExitMainApp"), Ot.getInstance().start("ExitApp", "GameEnd"), l.end(), Ot.getInstance().end("ExitApp", "GameEnd", {}, 4e3)
                            },
                            showAboveLoadingView: !0
                        }, t).setSiblingIndex(-1)
                    }))
                },
                s = o.getBundle(this.appConfig.layoutUse);
            s ? e(null, s) : o.loadBundle(this.appConfig.layoutUse, e.bind(this))
        }
        isTopLevelAppClosePopupPresent() {
            return n.getScene().children.some((t => "AppClosePopUp" === t.name))
        }
        ToastError(t, e = !1, n, i, o, a) {
            var r;
            if (1 === t || 0 === t) return;
            let g = a ?? (null == (r = this.roomManager.getRoomByIds(n, i)) ? void 0 : r.gameScene);
            1203 == t && (t = 1201);
            let c = "ServerErrorCode" + t,
                h = this.config.getStringData(c, !1, c);
            31003 == t && (h = this.config.getStringData("Cowboy_ServerErrorCode31003"));
            let l = this.GameDataManager.getLastDataInstance();
            if (n && i && (l = this.GameDataManager.getDataInstanceByGameAndRoomId(n, i)), 22 === t) this.MessageCenter.send("on_room_not_exist", l), this.TT.showMsg(h, this.Enum.ToastType.ToastTypeInfo, !1, e, g);
            else if (53 === t || 32 === t || 98 === t) this.showOutOfFundsPopup(h, l, g);
            else if (42 === t || 114 === t) {
                var u;
                null != (u = l) && u.tRoomData.haveEnoughMoneyForBuyIn() ? this.showServerError(g) : this.dataHandler.getUserData().isTouristUser || this.showOutOfFundsPopup(h, l, g)
            } else if (49 === t || 50 === t || 71 === t) l.tGameData.m_bIsOnSelfAction = !1, this.MessageCenter.send("on_action_error", {
                msg: t,
                gameData: l
            }), this.TT.showMsg(h, this.Enum.ToastType.ToastTypeError, !1, e, g);
            else if (52 === t || 1001 === t);
            else if (112 === t) l.tRoomData.isShowNeedClub = !0, this.MessageCenter.send("needClub", l);
            else if (93 === t) l.tGameData.m_bIsOnSelfAction = !0, this.TT.showMsg(this.StringTools.formatC(h), this.Enum.ToastType.ToastTypeError, !1, e, g);
            else if (51 === t || 48 === t || 92 === t) l.tGameData.m_bIsOnSelfAction = !1, this.TT.showMsg(this.StringTools.formatC(h), this.Enum.ToastType.ToastTypeError, !1, e, g);
            else if (105 === t) {
                this.TP.showMsg(h, !1, null, null, !1, !1, "", !1, s.HorizontalAlign.CENTER, !1, g);
                let t = this.TP.getMessageImage(),
                    e = this.TP.getMessageImageText(),
                    n = this.TP.getMessageText();
                t.node.active = !0, e.string = this.config.getStringData("TipsPanel_Image_duanxin_text_duanxin_2"), e.node.active = !0, this.resMgr.setSpriteFrame(t.node, "zh_CN/hall/ui/common_prompt"), n.node.setPosition(n.node.position.x, 0)
            } else 229 === t ? this.netWorkManager.OnNeedRelogin(229) : [1218, 31024, 41030, 13043, 51025].includes(t) ? this.popUp.showMsgI18n({
                txt: "ServerErrorCode1218",
                title: "Attention",
                msgType: this.Enum.ToastType.ToastTypeWarning,
                cashGameScene: g
            }) : this.isGeoComplyError(t) ? this.handleGeoComplyError(n, i, o) : this.popUp.showMsg({
                txt: h,
                title: this.config.getStringData("Attention"),
                msgType: this.Enum.ToastType.ToastTypeWarning,
                cashGameScene: g
            })
        }
        isGeoComplyError(t) {
            return t == f.GEOCOMPLY_INVAILD || t == f.GEOCOMPLY_SERVICE_ERROR
        }
        handleGeoComplyError(t, e, n) {
            var i;
            let o = (null == n ? void 0 : n.failedReasons) && this.tryParseJSON(n.failedReasons) || {},
                s = n.GCRequestType || null,
                a = this.roomManager.getRoomByIds(t, e);
            null == (i = this.geoComplyManager) || i.serverErrorHandler(o, null == a ? void 0 : a.gameScene, (() => {
                "JoinRoom" == s && a && this.roomManager.RequestJoinRoom(a.getCurrentGameID(), a.getCurrentRoomID(), a.getIsQuickRoom(), a.getIsNeedPassword(), a.getRoomPassWord())
            }), null, {
                ErrorType: `CashGame_${s}_CheckFailed`,
                ErrorCode: n && n.error ? n.error.toString() : "unknown",
                ErrorDetails: JSON.stringify(o)
            }, !0)
        }
        Number(t) {
            return At.toNumber(t)
        }
        tryParseJSON(t) {
            let e = null;
            try {
                e = JSON.parse(t)
            } catch (e) {
                a("Parse JSON Failed!\n\tJson String: " + t + "\n\tMessage: " + e.message + "\n\tStack: " + e.stack)
            }
            return e
        }
        String(t) {
            return At.toString(t)
        }
        createWindow(t, e, i, o = !1, s = !1) {
            try {
                n.createWindow(t, e, i, o, s)
            } catch (t) {
                mt.getInstance().traceJSException("CreateWindowFail", t.message + "-" + t.toString(), t.stack, !0)
            }
        }
        closeWindow(t) {
            this.appConfig.getGeneralConfig().multiWindowEnabled && n.closeWindow(t)
        }
        focusWindow(t) {
            this.appConfig.getGeneralConfig().multiWindowEnabled && (n.focusWindow(t), this.MessageCenter.send(this.Enum.MessageCenterAction.WindowFocusChanged, t))
        }
        getTotalOpeningGames() {
            return yt.instance.getMttRooms().length + this.roomManager.getTotalOpeningRooms() + this.webviewRoomManager.rooms.length
        }
        getEmptyGUID() {
            return "00000000-0000-0000-0000-000000000000"
        }
        isDesktopBuild() {
            return (r.os == r.OS.WINDOWS || r.os == r.OS.OSX) && !r.isBrowser
        }
        updateWinSize() {
            this.config && (this.config.WIDTH = g.getVisibleSize().width, this.config.HEIGHT = g.getVisibleSize().height), this.action && (this.action.WIDTH = g.getVisibleSize().width, this.action.HEIGHT = g.getVisibleSize().height)
        }
        setLoadingPrefab(t) {
            this.loadingPrefab = t
        }
        getLoadingPrefab() {
            return this.loadingPrefab
        }
        hideAndClearAllMsgInQueue() {
            this.popUp && this.popUp.hideAndClearAllMsgInQueue()
        }
    }
    Jt.g_instance = null;
    t("default", Jt.getInstance());
    e._RF.pop()
}
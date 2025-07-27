import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./HallSceneLandscape.js";
import * as r from "./cowboyScene.js";
import * as c from "./GameScene.js";
import * as p from "./GoldView.js";
import * as l from "./CasinoView.js";
import * as g from "./HumanboyMenu.js";
import * as C from "./cv.js";
import * as d from "./HallScene.js";
import * as m from "./SelfView.js";
import * as L from "./Enum.js";
import * as u from "./Enum.js";
import * as f from "./Enum.js";
import * as k from "./GeoComplyManager.js";
import * as E from "./PokerMasterScene.js";
import * as I from "./PromotionView.js";
import * as S from "./DynamicPromoEnums.js";
import * as h from "./NativeEvent.js";
import * as D from "./RuleDiscription.js";
import * as b from "./KYCFacade.js";
import * as w from "./MessageBroker.js";
import * as G from "./error-codes.js";

function main() {
    a._RF.push({}, "d1da9aTRZtJWZOObge3P/CA", "DeeplinksHandler", void 0);
    class P {
        static getInstance() {
            return P.instance || (P.instance = new P), P.instance
        }
        static DeeplinkParseInfo(e, n = !1) {
            if (n) {
                const n = e.split("||");
                1 === n.length ? P.sceneDeepLink = n[0] ?? "" : 2 === n.length ? (P.sceneDeepLink = n[0] ?? "", P.gameIdDeepLink = n[1] ?? "") : 3 === n.length ? (P.sceneDeepLink = n[0] ?? "", P.gameIdDeepLink = n[1] ?? "", P.roomIdDeepLink = n[2] ?? "") : 4 === n.length && (P.sceneDeepLink = n[0] ?? "", P.gameIdDeepLink = n[1] ?? "", P.roomIdDeepLink = n[2] ?? "", P.cashGroupIdDeepLink = n[4] ?? ""), P.sceneDeepLink && P.GotoScene()
            } else if (e && "" != e) {
                try {
                    let n = JSON.parse(C.base64.decode(e));
                    n && (P.sceneDeepLink = n[u.SceneOnWPTGApplication] ?? "", P.gameIdDeepLink = n[u.GameTypeForCashMttOrGameIdForCasino] ?? "", P.roomIdDeepLink = n[u.RoomOrTourForCashMttOrGameGroupForCasino] ?? "", P.slugDeepLink = n[u.SlugForPromotion] ?? "", P.pageDeepLink = n[u.PageForInviteOrCashier] ?? "", P.categoryDeepLink = n[u.CategoryForCasino] ?? "", P.cashGroupIdDeepLink = n[u.GroupIdForCashGame] ?? "")
                } catch (e) {
                    console.log("Parse Deeplink JSON fail")
                }
                P.sceneDeepLink && P.GotoScene()
            }
        }
        static CustomSchemaParseInfo(e) {
            if (e && "" != e) {
                const n = P.parseQueryString(e);
                n && (P.sceneDeepLink = n[u.SceneOnWPTGApplication] ?? "", P.gameIdDeepLink = n[u.GameTypeForCashMttOrGameIdForCasino] ?? "", P.roomIdDeepLink = n[u.RoomOrTourForCashMttOrGameGroupForCasino] ?? "", P.slugDeepLink = n[u.SlugForPromotion] ?? "", P.pageDeepLink = n[u.PageForInviteOrCashier] ?? "", P.categoryDeepLink = n[u.CategoryForCasino] ?? "", P.cashGroupIdDeepLink = n[u.GroupIdForCashGame] ?? ""), P.sceneDeepLink && P.GotoScene()
            }
        }
        static GotoScene() {
            if ("" != P.sceneDeepLink) {
                switch (P.sceneDeepLink.toLowerCase()) {
                    case L.Mtt:
                        C.MessageCenter.register(f.MTTListLoadCompleted, P.GoToMtt, P.getInstance());
                        break;
                    case L.Cash:
                        C.MessageCenter.register(f.CashGameListLoadCompleted, P.GoToCash, P.getInstance());
                        break;
                    case L.Casino:
                        C.MessageCenter.register(C.Enum.MessageCenterAction.onDissmissNewGeoTokenPopup, P.GoToCasino, P.getInstance());
                        break;
                    case L.Cashier:
                        C.MessageCenter.register(C.Enum.MessageCenterAction.onDissmissNewGeoTokenPopup, P.GoToCashier, P.getInstance())
                }
                C.config.getCurrentScene() != C.Enum.SCENE.LOGIN_SCENE && C.config.getCurrentScene() != C.Enum.SCENE.LOADING_SCENE && C.config.getCurrentScene() != C.Enum.SCENE.HOTUPDATE_SCENE ? P.HallSceneLoadCompleted() : C.MessageCenter.register(f.HallSceneLoadCompleted, P.HallSceneLoadCompleted, P.getInstance())
            }
        }
        static ResetDeeplinksInfo() {
            P.sceneDeepLink = "", P.roomIdDeepLink = "", P.gameIdDeepLink = "", h.resetPendingDeeplinkFunction()
        }
        static closePopup() {
            C.MessageCenter.send(f.DismissDocumentPopup), C.appConfig.isWebApp && (C.miniGamePopupManager.processClose(), C.MessageCenter.send("webApp_close_profile"), C.MessageCenter.send("webApp_close_notification"), C.MessageCenter.send(f.HideLobbyPopups))
        }
        static HallSceneLoadCompleted() {
            if ("" != P.sceneDeepLink) switch (P.sceneDeepLink.toLowerCase()) {
                case L.Cashier:
                    P.GoToCashier();
                    break;
                case L.Profile:
                    P.GoToProfile();
                    break;
                case L.PockerFlip:
                case L.PokerFlips:
                    P.GoToPokerFlips();
                    break;
                case L.Hall:
                    P.GoToHall();
                    break;
                case L.Mtt:
                    P.GoToMtt();
                    break;
                case L.Cash:
                    P.GoToCash();
                    break;
                case L.Casino:
                    P.GoToCasino();
                    break;
                case L.InviteFriend:
                    P.GoToInviteFriend();
                    break;
                case L.LiveWPTG:
                    P.GoToLiveWPTG();
                    break;
                case L.Promotions:
                    P.GoToPromotions();
                    break;
                case L.BonusCenter:
                    P.GoToBonusCenter();
                    break;
                case L.PokerMaster:
                    P.GoToPokerMaster();
                    break;
                case L.VideoCowboy:
                    P.GoToVideoCowboy();
                    break;
                case L.GlobalSpins:
                    P.GoToGlobalSpins();
                    break;
                case L.Kyc:
                    P.GoToKyc();
                    break;
                case L.Notification:
                    P.GoToNotification();
                    break;
                case L.CaribbeanStud:
                    P.GoToCaribBeanStud();
                    break;
                case L.CaribbeanHoldem:
                    P.GoToCaribBeanHoldem()
            }
        }
        static GoToGlobalSpins() {
            C.appConfig.getLobbyConfig().showGlobalSpin ? P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.GlobalSpins || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.MessageCenter.send("jumpToSng"), C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), P.ResetDeeplinksInfo()) : P.ResetDeeplinksInfo()
        }
        static GoToPromotions() {
            if (C.appConfig.getLobbyConfig().showPromotionLobby) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.Promotions) {
                    C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = null;
                    e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0) && e.scheduleOnce((() => {
                        let n = e.promotionBtn.getComponent(t).node;
                        C.AudioMgr.playButtonSound("hall_bottom_button.mp3");
                        const o = e.promotionView.getComponent(I);
                        "" != P.roomIdDeepLink ? o.setPromoSlug(P.roomIdDeepLink) : "" != P.slugDeepLink && o.setPromoSlug(P.slugDeepLink), e.swithView(e.promotionView, n)
                    })), i.isNative && C.appConfig.isLandscapeLayout && C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1), P.ResetDeeplinksInfo()
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToBonusCenter() {
            if (C.appConfig.getUserProfileConfig().showBonusHistory) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.BonusCenter) {
                    C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = null;
                    e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0) && (e.swithView(e.selfView, e.getEnabledInviteBtn()), e.selfView.getComponent("SelfView").performButtonAction(m.SVFFI_BONUS_HISTORY), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1)), P.ResetDeeplinksInfo()
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToProfile() {
            if (P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.Profile) return;
            C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
            var e = null;
            i.isNative && !C.appConfig.isLandscapeLayout || C.appConfig.isWebApp ? e = n.getScene().getComponentInChildren(d) : i.isNative && C.appConfig.isLandscapeLayout && (e = n.getScene().getComponentInChildren(s));
            const o = () => {
                C.SwitchLoadingView.hide(""), e.onBtnSelfClick(null), C.MessageCenter.unregister("ProfilePageLoaded", P.getInstance())
            };
            C.appConfig.isWebApp ? null != e && (C.SwitchLoadingView.show("", !1, !1, !1, !0), e.selfviewPref ? o() : C.MessageCenter.register("ProfilePageLoaded", (() => {
                o()
            }), P.getInstance())) : null != e && (i.isNative && !C.appConfig.isLandscapeLayout ? e.onBtnSelfClick(null) : e.onShowEditAvatar(), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1)), P.ResetDeeplinksInfo()
        }
        static GoToNotification() {
            if (!C.appConfig.isWebApp) return void P.ResetDeeplinksInfo();
            if (P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.Notification) return;
            C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.SwitchLoadingView.show("", !1, !1, !1, !0);
            var e = null;
            i.isNative && !C.appConfig.isLandscapeLayout || C.appConfig.isWebApp ? e = n.getScene().getComponentInChildren(d) : i.isNative && C.appConfig.isLandscapeLayout && (e = n.getScene().getComponentInChildren(s));
            const o = () => {
                C.SwitchLoadingView.hide(""), C.appConfig.isWebApp && C.MessageCenter.send("webApp_open_notification"), C.MessageCenter.unregister("NotificationLoaded", P.getInstance())
            };
            null != e && (e.notificationPref ? o() : C.MessageCenter.register("NotificationLoaded", (() => {
                o()
            }), P.getInstance())), P.ResetDeeplinksInfo()
        }
        static async GoToCasino() {
            if (C.appConfig.getLobbyConfig().showCasinoLobby) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.Casino) {
                    P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = "",
                        n = "";
                    if (null != k.getInstance().getGeoToken()) {
                        if ("" != P.roomIdDeepLink && (n = P.roomIdDeepLink), "" != P.categoryDeepLink && (n = P.categoryDeepLink), null != P.gameIdDeepLink && "" != P.gameIdDeepLink && "(null)" != P.gameIdDeepLink && "null" != P.gameIdDeepLink) {
                            if (C.embeddedServer.isEnableEmbeddedServer()) {
                                console.warn("START ######## EMBEDDED SERVER ....");
                                const e = parseInt(C.appConfig.casinoLocalhostGamePort);
                                C.embeddedServer.runEmbedGame(l.PATH_WEB_LOCALHOST, e, l.CACHE_AGE_LOCALHOST)
                            }
                            e = P.gameIdDeepLink, C.MessageCenter.send("switchSceneToCasinoLobby"), setTimeout((() => {
                                l.StartCasinoDeepLinkAction(e, n)
                            }), 300)
                        } else C.MessageCenter.send("switchSceneToCasinoLobby"), setTimeout((() => {
                            l.StartCasinoDeepLinkAction(e, n)
                        }), 300);
                        C.MessageCenter.unregister(C.Enum.MessageCenterAction.onDissmissNewGeoTokenPopup, P.getInstance()), C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), i.isNative && C.appConfig.isLandscapeLayout && C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1), P.ResetDeeplinksInfo()
                    } else C.MessageCenter.send("switchSceneToCasinoLobby"), C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance())
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToInviteFriend() {
            if (C.appConfig.getUserProfileConfig().showInviteFriends) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.InviteFriend) {
                    C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = null;
                    e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0) && (e.swithView(e.selfView, e.getEnabledInviteBtn()), e.selfView.getComponent("SelfView").focusOnInviteFriends(!e.selfView.active), "" != P.pageDeepLink && C.MessageCenter.send(S.LoadInviteInfo), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1)), P.ResetDeeplinksInfo()
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToLiveWPTG() {
            if (C.appConfig.getLobbyConfig().showWPTGLiveEvent) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.LiveWPTG) {
                    C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = null;
                    e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0) && e.scheduleOnce((() => {
                        let n = e.wptgLiveBtn.getComponent(t).node;
                        C.AudioMgr.playButtonSound("hall_bottom_button.mp3"), e.swithView(e.wptgLiveEventView, n)
                    })), i.isNative && C.appConfig.isLandscapeLayout && C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1), P.ResetDeeplinksInfo()
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToCashier() {
            if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.Cashier)
                if (null != k.getInstance().getGeoToken()) {
                    if (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), i.isNative && !C.appConfig.isLandscapeLayout) {
                        n.getScene().getComponentInChildren(d).getDepositStatus()
                    } else {
                        n.getScene().getComponentInChildren(p).onBtnAddClick(null), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1)
                    }
                    P.ResetDeeplinksInfo()
                } else C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance())
        }
        static OpenMinigameDirectly() {
            return !(!Number(P.gameIdDeepLink) || !Number(P.roomIdDeepLink)) && (C.SwitchLoadingView.show(C.config.getStringData("Loading")), C.roomManager.requestJoinMiniRoom(Number(P.gameIdDeepLink), Number(P.roomIdDeepLink)), P.ResetDeeplinksInfo(), !0)
        }
        static GoToPokerFlips() {
            C.appConfig.getLobbyConfig().showPokerFlips ? this.OpenMinigameDirectly() || P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.PockerFlip && P.sceneDeepLink.toLowerCase() != L.PokerFlips || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.roomManager.openMiniGame(), P.ResetDeeplinksInfo()) : P.ResetDeeplinksInfo()
        }
        static GoToPokerMaster() {
            C.appConfig.getLobbyConfig().showPokerMaster ? this.OpenMinigameDirectly() || P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.PokerMaster || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.roomManager.openMiniGame(C.Enum.GameId.PokerMaster), P.ResetDeeplinksInfo()) : P.ResetDeeplinksInfo()
        }
        static GoToVideoCowboy() {
            P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.VideoCowboy || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.roomManager.openMiniGame(C.Enum.GameId.VideoCowboy), P.ResetDeeplinksInfo())
        }
        static GoToCaribBeanStud() {
            C.dataHandler.getUserData().showTouristLimited() || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.roomManager.requestJoinHabaGame(C.Enum.GameId.CaribbeanStud), P.ResetDeeplinksInfo())
        }
        static GoToCaribBeanHoldem() {
            C.dataHandler.getUserData().showTouristLimited() || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.roomManager.requestJoinHabaGame(C.Enum.GameId.CaribbeanTexasHold), P.ResetDeeplinksInfo())
        }
        static GoToHall() {
            P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.Hall || (C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), P.ResetDeeplinksInfo())
        }
        static GoToCash() {
            if (P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.Cash) return;
            if (C.clubDataMgr.getClubBoardListWorldServer().length <= 0 || C.clubDataMgr.getClubBoardListWorldWPTOServer().length <= 0) return;
            let e;
            C.MessageCenter.unregister(f.CashGameListLoadCompleted, P.getInstance()), C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d);
            const t = Number(P.gameIdDeepLink),
                a = P.gameIdDeepLink && !isNaN(t),
                r = Number(P.roomIdDeepLink),
                c = P.roomIdDeepLink && !isNaN(r),
                p = Number(P.cashGroupIdDeepLink),
                l = P.cashGroupIdDeepLink && !isNaN(p);

            function g() {
                return l ? p : -1
            }
            if (o(e, !0))
                if (e.swithView(e.hallPokerViewNode, e.findBtn), "" != P.gameIdDeepLink && "" != P.roomIdDeepLink) {
                    if (a && c) {
                        const n = C.clubDataMgr.getClubCurrentBoardList().find((e => e.game_id == t && e.room_id == r));
                        if ((i.isNative || C.appConfig.isWebApp) && n && n.game_mode) switch (t) {
                            case C.Enum.GameId.Texas:
                                n.game_mode == C.Enum.CreateGameMode.CreateGame_Mode_Normal ? e.hallPokerViewController.changeTab("nlhe", null, g()) : n.game_mode == C.Enum.CreateGameMode.CreateGame_Mode_Short && e.hallPokerViewController.changeTab("short_deck", null, g()), C.MessageCenter.send("joinCashGameLobbyV2FromDeepLink", {
                                    gameId: P.gameIdDeepLink,
                                    roomId: P.roomIdDeepLink
                                });
                                break;
                            case C.Enum.GameId.ZoomTexas:
                            case C.Enum.GameId.ZoomTexas + 1:
                            case C.Enum.GameId.ZoomTexas + 2:
                            case C.Enum.GameId.ZoomTexas + 3:
                            case C.Enum.GameId.ZoomTexas + 4:
                            case C.Enum.GameId.ZoomTexas + 5:
                            case C.Enum.GameId.ZoomTexas + 6:
                            case C.Enum.GameId.ZoomTexas + 7:
                            case C.Enum.GameId.ZoomTexas + 8:
                            case C.Enum.GameId.ZoomTexasMax:
                                e.hallPokerViewController.changeTab("flash", null, -1), C.MessageCenter.send("joinCashGameLobbyV2FromDeepLink", {
                                    gameId: P.gameIdDeepLink,
                                    roomId: P.roomIdDeepLink
                                });
                                break;
                            case C.Enum.GameId.Plo:
                                C.appConfig.getLobbyConfig().showPlo && (e.hallPokerViewController.changeTab("plo", null, g()), C.MessageCenter.send("joinCashGameLobbyV2FromDeepLink", {
                                    gameId: P.gameIdDeepLink,
                                    roomId: P.roomIdDeepLink
                                }));
                                break;
                            case C.Enum.GameId.Plo5:
                                C.appConfig.getLobbyConfig().showPlo5 && (e.hallPokerViewController.changeTab("plo", null, g()), C.MessageCenter.send("joinCashGameLobbyV2FromDeepLink", {
                                    gameId: P.gameIdDeepLink,
                                    roomId: P.roomIdDeepLink
                                }))
                        }
                    }
                    P.ResetDeeplinksInfo()
                } else if ("" != P.gameIdDeepLink && (e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0))) {
                switch (t) {
                    case D.NLHE:
                        e.hallPokerViewController.changeTab("nlhe", null, g());
                        break;
                    case D.PLO:
                        (C.appConfig.getLobbyConfig().showPlo || C.appConfig.getLobbyConfig().showPlo5) && e.hallPokerViewController.changeTab("plo", null, g());
                        break;
                    case D.SHORT_DECK:
                        e.hallPokerViewController.changeTab("short_deck", null, g());
                        break;
                    case D.PACE:
                    case D.FLASH:
                        e.hallPokerViewController.changeTab("flash", null, -1)
                }
                P.ResetDeeplinksInfo()
            }
        }
        static GoToMtt() {
            if (C.appConfig.getLobbyConfig().mtt.showLobbyTab) {
                if (!P.checkInGamePortraitExit() && P.sceneDeepLink.toLowerCase() == L.Mtt) {
                    if (i.isNative && !C.appConfig.isLandscapeLayout || C.appConfig.isWebApp) {
                        if (C.appConfig.isWebApp && C.lobbyService.getMttItemsByFilter(null).length <= 0) {
                            if (P.mttRetryCount++, P.mttRetryCount >= P.MAX_MTT_RETRIES) {
                                P.mttRetryCount = 0, P.ResetDeeplinksInfo();
                                const e = G.MttListLoadFailed,
                                    n = C.tools.getTranslatedString(`ErrorCode${e}`);
                                return void w.getInstance().sendShowErrorPopup(e, "toaster", n)
                            }
                            return
                        }
                        if (C.lobbyService.getMttItemsByFilter(null).length <= 0) return
                    } else if (i.isNative && C.appConfig.isLandscapeLayout && cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments.length <= 0) return;
                    C.MessageCenter.unregister(f.MTTListLoadCompleted, P.getInstance()), C.MessageCenter.unregister(f.HallSceneLoadCompleted, P.getInstance()), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.MessageCenter.send("show_mtt_detail_in_hall", {
                        tournamentId: P.roomIdDeepLink,
                        callback: () => {
                            P.mttRetryCount = 0, P.ResetDeeplinksInfo()
                        }
                    }), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1)
                }
            } else P.ResetDeeplinksInfo()
        }
        static GoToKyc() {
            C.appConfig.getGeneralConfig().enableKycVerification ? b.getInstance().getCurrentKycStatus((() => {
                if (b.getInstance().isKycTriggered()) {
                    if (P.checkInGamePortraitExit() || P.sceneDeepLink.toLowerCase() != L.Kyc) return;
                    C.MessageCenter.unregister(f.HallSceneLoadCompleted, this), P.closePopup(), C.action.switchScene(C.Enum.SCENE.HALL_SCENE);
                    var e = null;
                    e = C.appConfig.isLandscapeLayout ? n.getScene().getComponentInChildren(s) : n.getScene().getComponentInChildren(d), o(e, !0) && (e.swithView(e.selfView, e.selfBtn), e.selfView.getComponent("SelfView").performButtonAction(m.SVFFI_KYC_VERIFICATION), C.appConfig.getGeneralConfig().multiWindowEnabled && C.focusWindow(1))
                }
                P.ResetDeeplinksInfo()
            }), (() => {
                P.ResetDeeplinksInfo()
            })) : P.ResetDeeplinksInfo()
        }
        static checkInGamePortraitExit() {
            if (i.isNative && !C.appConfig.isLandscapeLayout || C.appConfig.isWebApp) {
                if (C.config.getCurrentScene() == C.Enum.SCENE.LOGIN_SCENE || C.config.getCurrentScene() == C.Enum.SCENE.LOADING_SCENE || C.config.getCurrentScene() == C.Enum.SCENE.HOTUPDATE_SCENE) return !0;
                if (C.config.getCurrentScene() == C.Enum.SCENE.GAME_SCENE) {
                    var e = n.getScene().getComponentInChildren(c);
                    return null != e && e.manager.onBtnExitPoker(), !0
                }
                if (C.config.getCurrentScene() == C.Enum.SCENE.COWBOY_SCENE) {
                    var o = n.getScene().getComponentInChildren(r);
                    if (null != o) {
                        if (!o._humanboyMenu) {
                            o.node.getChildByName("btnMenu").getComponent(t).node.emit("click")
                        }
                        o._humanboyMenu.getComponent(g).getBtnExit().node.emit("click")
                    }
                    return !0
                }
                if (C.config.getCurrentScene() == C.Enum.SCENE.POKERMASTER_SCENE) {
                    var a = n.getScene().getComponentInChildren(E);
                    if (null != a) {
                        if (!a._humanboyMenu) {
                            a.node.getChildByName("btn_menu").getComponent(t).node.emit("click")
                        }
                        a._humanboyMenu.getComponent(g).getBtnExit().node.emit("click")
                    }
                    return !0
                }
                return !1
            }
            return !1
        }
        static parseQueryString(e) {
            let n = {};
            try {
                n = JSON.parse(e)
            } catch (o) {
                const t = e.split("?")[1];
                if (t) {
                    const e = t.split("&");
                    for (const o of e) {
                        const [e, t] = o.split("=");
                        e && void 0 !== t && (n[e] = decodeURIComponent(t))
                    }
                }
            }
            return n
        }
    }
    e("default", P), P.instance = null, P.sceneDeepLink = "", P.roomIdDeepLink = "", P.gameIdDeepLink = "", P.cashGroupIdDeepLink = "", P.slugDeepLink = "", P.pageDeepLink = "", P.categoryDeepLink = "", P.mttRetryCount = 0, P.MAX_MTT_RETRIES = 10, window.DeeplinksGotoScene = P.GotoScene, window.DeeplinkParseInfo = P.DeeplinkParseInfo, window.DeeplinkCustomSchemaParseInfo = P.CustomSchemaParseInfo, window.checkInGamePortraitExit = P.checkInGamePortraitExit, a._RF.pop()
}
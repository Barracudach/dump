import * as t from "./cc.js";
import * as a from "./cc.js";
import * as n from "./Enum.js";
import * as s from "./Enum.js";
import * as r from "./GetAuthDataRequestArgs.js";
import * as o from "./ShowDownloadPopupArgs.js";
import * as i from "./UpdateUserInfo.js";
import * as p from "./Helpers2.js";
import * as g from "./Helpers2.js";
import * as u from "./Helpers2.js";
import * as d from "./Helpers2.js";
import * as l from "./MessageSender.js";
import * as c from "./cv.js";
import * as h from "./GetPokerReadyArgs.js";
import * as A from "./UpdateLazyLoadProgressArg.js";
import * as C from "./WebviewHelperData.js";
import * as f from "./ShowErrorPopupArgs.js";
import * as m from "./ShowInfoPopupArgs.js";

function main() {
    a._RF.push({}, "2f8074RbedOZaUW6gWTTnFZ", "MessageBroker", void 0);
    class P {
        constructor() {
            this.currentLanguageBeforeChange = null, this.cachedPayload = void 0
        }
        static getInstance() {
            return P._instance || (P._instance = new P), P._instance
        }
        init() {
            this.registerEvents(), this.cachedPayload = new Map
        }
        registerEvents() {
            c.MessageCenter.register("update_info", this.onUpdateInfo.bind(this), this), c.MessageCenter.register("update_gold", this.onUpdateInfo.bind(this), this), c.MessageCenter.register("webApp_open_profile", this.webAppOpenProfile.bind(this), this), c.MessageCenter.register("switchSceneToEarnView", this.sendGoToCashier.bind(this), this), c.MessageCenter.register("click_btn_exit_room", this.registerShowDownloadPopupOnShowHallscene.bind(this), this), c.MessageCenter.register(c.config.BEFORE_CHANGE_LANGUAGE, this.getLanguageBeforeChange.bind(this), this), c.MessageCenter.register("Close_Language_Dialog", this.onCloseLanguageDialog.bind(this), this), c.MessageCenter.register(c.Enum.MessageCenterAction.OnMiniGamesListResponse, this.onMinigameListResponse.bind(this), this), c.MessageCenter.register(c.Enum.MessageCenterAction.downloadBannerInfo, this.handleDownloadBannerInfo.bind(this), this), c.MessageCenter.register("profile_page_loaded", this.onProfilePageLoaded.bind(this), this)
        }
        unregisterEvents() {
            c.MessageCenter.unregister("update_info", this), c.MessageCenter.unregister("update_gold", this), c.MessageCenter.unregister("webApp_open_profile", this), c.MessageCenter.unregister("switchSceneToEarnView", this), c.MessageCenter.unregister(c.config.BEFORE_CHANGE_LANGUAGE, this), c.MessageCenter.unregister("Close_Language_Dialog", this), c.MessageCenter.unregister(c.Enum.MessageCenterAction.OnMiniGamesListResponse, this), c.MessageCenter.unregister(c.Enum.MessageCenterAction.downloadBannerInfo, this), c.MessageCenter.unregister("profile_page_loaded", this), this.cachedPayload.clear(), this.cachedPayload = null
        }
        onUpdateInfo() {
            var e;
            if (c.dataHandler.getUserData().isTouristUser) return;
            const a = new i(p.Poker, d.UpdateUserInfo, {
                nick_name: c.dataHandler.getUserData().nick_name,
                u32Chips: c.dataHandler.getUserData().u32Chips,
                total_amount: c.dataHandler.getUserData().total_amount / 100,
                game_coin: c.dataHandler.getUserData().game_coin,
                user_points: c.dataHandler.getUserData().user_points,
                points_ratio: c.dataHandler.getUserData().points_ratio,
                headUrl: c.dataHandler.getUserData().headUrl,
                user_id: c.dataHandler.getUserData().getUserIdS(),
                u32Uid: c.dataHandler.getUserData().u32Uid,
                sharedPlayerId: c.dataHandler.getUserData().sharedPlayerId,
                mobile: c.dataHandler.getUserData().mobile,
                gender: c.dataHandler.getUserData().gender,
                user_marks: null == (e = c.dataHandler.getUserData().user_marks) ? void 0 : e.toString(),
                clubs_max: c.dataHandler.getUserData().clubs_max,
                current_clubs: c.dataHandler.getUserData().current_clubs,
                u32CardType: c.dataHandler.getUserData().u32CardType,
                u32Deposit_gold: c.dataHandler.getUserData().u32Deposit_gold,
                usdt: c.dataHandler.getUserData().usdt,
                deposit_usdt: c.dataHandler.getUserData().deposit_usdt,
                priorityareaCode: c.dataHandler.getUserData().priorityareaCode,
                prioritymobile: c.dataHandler.getUserData().prioritymobile,
                casino_coin: c.dataHandler.getUserData().casino_coin / 100,
                sessionId: c.dataHandler.getUserData().getUserToken(!1),
                exchangeRate: c.currencyManager.getRate(n.USD, n.MXN),
                club_id: 0,
                union_id: 0,
                areaCode: parseInt(C.getAreaCode(), 10),
                goldCoinAmount: c.dataHandler.getUserData().total_amount / 100
            });
            l.sendParent(a)
        }
        sendShowDownloadPopup() {
            const e = new o;
            l.sendParent(e)
        }
        registerShowDownloadPopupOnShowHallscene() {
            c.appConfig.isWebApp && c.MessageCenter.register(s.HallSceneLoadCompleted, this.sendShowDownloadPopupWithLimit.bind(this), P.getInstance())
        }
        sendShowDownloadPopupWithLimit() {
            if (c.MessageCenter.unregister(s.HallSceneLoadCompleted, P.getInstance()), 0 == c.appConfig.getGameConfig().maxWebAppplayedHands) return;
            c.roomManager.totalPlayedHands >= c.appConfig.getGameConfig().maxWebAppplayedHands && (this.sendShowDownloadPopup(), c.roomManager.reset())
        }
        webAppOpenProfile() {
            window.DeeplinkCustomSchemaParseInfo(JSON.stringify({
                link: "profile"
            }))
        }
        sendGetLoggedInUserData() {
            const e = new r;
            l.sendParent(e)
        }
        sendPokerAppReady() {
            const e = new h;
            l.sendParent(e), l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.ChangeSoundEffectPref,
                payload: {
                    shouldPlaySoundEffect: c.tools.isSoundEffectOpen()
                }
            })
        }
        sendLazyLoadProgress(e) {
            const a = new A({
                lazyLoadAsset: e
            });
            l.sendParent(a)
        }
        sendGetLocation() {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.GetLocation
            })
        }
        sendShowBackButton(e, a = "", t = !1, n = !0) {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.EnableBackButton,
                payload: {
                    enable: e,
                    text: a,
                    skipPopNavStack: t,
                    visible: n
                }
            })
        }
        sendGoToCashier() {
            t("[WebApp] send goToCashier"), l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.GoToCashier
            })
        }
        sendCloseDownloadBanner() {
            t("[WebApp] send CloseDownloadBanner"), l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: d.CloseDownloadBanner
            })
        }
        sendShowInstallPrompt() {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: d.ShowInstallPrompt
            })
        }
        sendGameOpening(e) {
            t(`[WebApp] send GameOpening ${e}`), l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.OpeningGame,
                payload: {
                    gameId: e,
                    orientation: c.roomManager.checkIsMiniGame(e) ? u.Landscape : u.Portrait
                }
            })
        }
        getLanguageBeforeChange(e) {
            this.currentLanguageBeforeChange || (this.currentLanguageBeforeChange = e)
        }
        onCloseLanguageDialog() {
            const e = c.config.getCurrentLanguage();
            e != this.currentLanguageBeforeChange && c.appConfig.isWebApp && l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.ChangeLanguageSetting,
                payload: {
                    language: e
                }
            })
        }
        sendShowErrorPopup(e, a = "bottomPopup", t) {
            l.sendParent(new f({
                code: e,
                errorType: a,
                msgText: t
            }))
        }
        sendShowInfoPopup(e) {
            l.sendParent(new m({
                title: e.title,
                description: e.description,
                button_text: e.button_text
            }))
        }
        onMinigameListResponse() {
            const e = c.dataHandler.getMiniGameList();
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.MinigameData,
                payload: {
                    maxNumberTimeShowIntroPopup: c.appConfig.getGameConfig().miniGameConfig.maxNumberTimeShowIntroPopup,
                    minigameExchangeRate: c.currencyManager.convert(n.USD, n.CNY, 1),
                    tables: e.map((e => ({
                        amountLevel: e.AmountLevel,
                        deskType: e.deskType,
                        giftBox: c.appConfig.getGameConfig().miniGameConfig.showRedEnvelop,
                        playerNum: e.playerNum,
                        roomId: e.roomid,
                        sourceType: e.sourceType
                    })))
                }
            })
        }
        sendAppDown() {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: d.AppDown
            })
        }
        handleDownloadBannerInfo(e) {
            this.cachedPayload.set(c.Enum.MessageCenterAction.downloadBannerInfo, e)
        }
        onProfilePageLoaded() {
            const e = this.cachedPayload.get(c.Enum.MessageCenterAction.downloadBannerInfo);
            e && (c.MessageCenter.send(c.Enum.MessageCenterAction.downloadBannerInfo, e), c.MessageCenter.unregister("profile_page_loaded", this))
        }
        sendOutOfFund() {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.ShowOutOfFundsPopup
            })
        }
        sendChangePassword(e) {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: g.UserChangePassword,
                payload: c.base64.encode(e)
            })
        }
        sendVibrate(e) {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: d.NavigatorVibrate,
                payload: e
            })
        }
        sendAddShortcut() {
            l.sendMessage({
                sourceApp: p.Poker,
                targetApp: p.WebApp,
                eventType: d.AddShortcut
            })
        }
    }
    e("WebAppMessageBroker", P), P._instance = null, a._RF.pop()
}
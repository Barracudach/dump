import * as a from "./cc.js";
import * as s from "./cc.js";
import * as n from "./IFrameWindowDataArgs.js";
import * as t from "./MessageListener.js";
import * as r from "./Helpers2.js";
import * as c from "./Helpers2.js";
import * as i from "./Helpers2.js";
import * as p from "./Helpers2.js";
import * as o from "./Helpers2.js";
import * as l from "./cv.js";
import * as g from "./MessageTypes.js";
import * as d from "./Enum.js";
import * as u from "./Enum.js";
import * as m from "./Enum.js";
import * as M from "./RuleDiscription.js";
import * as C from "./FullscreenController.js";
import * as b from "./GeneralConfig.js";
import * as f from "./MessageBroker.js";

function main() {
    a._RF.push({}, "2881eZuS8VGgqlYK5J86TRv", "WepAppMessageManager", void 0);
    let k = e("WebAppQueryParamsKeys", function(e) {
        return e.language = "language", e
    }({}));
    class F {
        static readQueryParams() {
            var e;
            if (l.appConfig.isWebApp && null != (e = location) && e.search && location.search.length > 0) {
                new URLSearchParams(location.search).forEach(((e, a) => {
                    if (a in k) {
                        const s = a;
                        F.params.has(s) || F.params.set(s, e)
                    }
                }))
            }
        }
        static getQueryByKey(e) {
            if (l.appConfig.isWebApp) return F.params.has(e) ? F.params.get(e) : void 0
        }
        static getLanguageFromQueryParams() {
            const e = F.getQueryByKey(k.language);
            if (e) {
                let a;
                if (e in u) a = e;
                else {
                    const s = Object.entries(b).find((a => a[1].code == e));
                    s && (a = s[0])
                }
                if (a && l.appConfig.getGeneralConfig().availableLanguages.includes(a)) return a
            }
        }
        static connectToWebApp(e) {
            l.appConfig.isWebApp && (F.WebStreamer = new t, F.WebStreamer.connectToWebApp(e, (e => {
                switch (e.appType || e.targetApp) {
                    case o.Poker:
                        this.handleMessage(e)
                }
            })), F.sendMessageToGetInitialData())
        }
        static sendMessageToGetInitialData() {
            F.sendMessage(new n(o.Poker)), f.getInstance().sendGetLocation()
        }
        static disconnectWebApp() {
            F.WebStreamer && F.WebStreamer.disconnectWebApp()
        }
        static sendMessage(e) {
            F.WebStreamer && F.WebStreamer.sendMessage(e)
        }
        static handleMessage(e) {
            switch (s("[WebAppMessageManager] handle message:", e), e.eventType) {
                case r.UserLoginSuccess:
                    F.isFirstLoginDataMessage = !0, l.MessageCenter.send(r.UserLoginSuccess, e);
                    break;
                case i.LocationInformation:
                    const {
                        latitude: a = 0, longitude: s = 0
                    } = e.payload || {}, n = l.native.GetLocation();
                    l.native.brower_showPosition({
                        coords: {
                            latitude: a,
                            longitude: s
                        }
                    }), (a && (null == n ? void 0 : n.latitude) != a || s && n.longitude != s) && l.MessageCenter.send(l.Enum.MessageCenterAction.OnGeoLocationChange);
                    break;
                case c.IFrameWindowData:
                    F.iFrameData = e;
                    break;
                case c.DeepLinkEvent:
                    window.DeeplinkCustomSchemaParseInfo(F.getDeeplinkQuery(e)), l.MessageCenter.send("refreshLobby");
                    break;
                case r.GetAuthDataResponse:
                    const t = e;
                    F.isFirstLoginDataMessage = !0, t.userData && l.MessageCenter.send(r.UserLoginSuccess, t.userData);
                    break;
                case c.CloseProfilePage:
                    l.MessageCenter.send("webApp_close_profile");
                    break;
                case c.OpenNotification:
                    l.MessageCenter.send("webApp_close_profile"), l.MessageCenter.send("webApp_open_notification");
                    break;
                case c.CloseNotification:
                    l.MessageCenter.send("webApp_close_notification");
                    break;
                case i.ClickNavbarBack:
                    l.MessageCenter.send(l.Enum.MessageCenterAction.onGoBack);
                    break;
                case i.FocusPokerTab:
                    const o = l.config.getCurrentScene();
                    l.roomManager.checkWebGameSceneToApplyFullscreen(o) ? C.getInstance().sendApplyFullScreenForWebApp(!0) : l.MessageCenter.send(l.Enum.MessageCenterAction.onShowHall), l.MessageCenter.send("refreshLobby");
                    break;
                case i.DownloadAppBanner:
                    g(e) && l.MessageCenter.send(l.Enum.MessageCenterAction.downloadBannerInfo, e.payload);
                    break;
                case i.InstallPromptStatus:
                    g(e) && l.MessageCenter.send(l.Enum.MessageCenterAction.InstallPromptStatus, e.payload);
                    break;
                case r.ExitRoom:
                    l.MessageCenter.send(l.Enum.MessageCenterAction.ExitRoomGame)
            }
        }
        static checkIfFullScreenApp() {
            return F.iFrameData && !!F.iFrameData.isFullScreen
        }
        static getDeeplinkQuery(e) {
            let a = `?${m.SceneOnWPTGApplication}=`;
            const s = e.gotoPage;

            function n(e) {
                return null != e && !isNaN(e)
            }
            switch (s) {
                case p.NLHE:
                case p.PLO:
                case p.ShortDeck:
                case p.Flash:
                    ! function(s) {
                        if (a += `${d.Cash}&${m.GameTypeForCashMttOrGameIdForCasino}=${function(a){var s;const n={[p.NLHE]:M.NLHE,[p.PLO]:M.PLO,[p.ShortDeck]:M.SHORT_DECK,[p.Flash]:M.FLASH},t={[p.NLHE]:l.Enum.GameId.Texas,[p.PLO]:l.Enum.GameId.Plo,[p.ShortDeck]:l.Enum.GameId.Texas,[p.Flash]:l.Enum.GameId.ZoomTexas};return(null==(s=e.data)?void 0:s.roomId)?t[a]:n[a]}(s)}`, e.data) {
                            const {
                                groupGame: s,
                                roomId: t
                            } = e.data;
                            n(s) && (a += `&${m.GroupIdForCashGame}=${s}`), n(t) && (a += `&${m.RoomOrTourForCashMttOrGameGroupForCasino}=${t}`)
                        }
                    }(s);
                    break;
                case p.MTT:
                case p.GlobalSpins:
                    const t = {
                        [p.MTT]: d.Mtt,
                        [p.GlobalSpins]: d.GlobalSpins
                    };
                    if (a += t[s], e.data) {
                        const {
                            roomId: s
                        } = e.data;
                        n(s) && (a += `&${m.RoomOrTourForCashMttOrGameGroupForCasino}=${s}`)
                    }
                    break;
                case p.Profile:
                    a += d.Profile;
                    break;
                case p.Notification:
                    a += d.Notification;
                    break;
                case p.PokerFlips:
                    if (a += d.PokerFlips, e.data) {
                        const {
                            roomId: s
                        } = e.data;
                        n(s) && (a += `&${m.GameTypeForCashMttOrGameIdForCasino}=${l.Enum.GameId.CowBoy}&${m.RoomOrTourForCashMttOrGameGroupForCasino}=${s}`)
                    }
                    break;
                case p.PokerMaster:
                    if (a += d.PokerMaster, e.data) {
                        const {
                            roomId: s
                        } = e.data;
                        n(s) && (a += `&${m.GameTypeForCashMttOrGameIdForCasino}=${l.Enum.GameId.PokerMaster}&${m.RoomOrTourForCashMttOrGameGroupForCasino}=${s}`)
                    }
                    break;
                case p.Hall:
                    a += d.Hall
            }
            return a
        }
    }
    e("WepAppMessageManager", F), F.params = new Map, F.WebStreamer = void 0, F.iFrameData = null, F.isFirstLoginDataMessage = !1, a._RF.pop()
}
import * as o from "./cc.js";
import * as n from "./Enum.js";
import * as t from "./cv.js";
import * as a from "./CasinoEnum.js";
import * as r from "./env.js";

function main() {
    o._RF.push({}, "fc452i8U1hKSrj6eTTCbUry", "CasinoData", void 0);
    let i = e("PlatformType", function(e) {
        return e.unknown = "unknown", e.iOS = "iOS", e.android = "Android", e.windows = "Windows", e.macOS = "macOS", e.web = "Web", e
    }({}));
    e("MENU_ITEM_POSITION", function(e) {
        return e.top = "top", e.left = "left", e.right = "right", e.bottom = "bottom", e
    }({})), e("ORIENTATION", function(e) {
        return e.auto = "auto", e.portrait = "portrait", e.landscape = "landscape", e
    }({}));
    class s {
        static getInitData() {
            var e, o;
            let a = {
                locale: t.config.getCurrentLanguage() ?? "en_US",
                country: (null == (e = t.dataHandler.getUserData()) ? void 0 : e.countryISO2) ?? "US",
                sessionId: t.dataHandler.getUserData().getUserToken(!1),
                userId: null == (o = t.dataHandler.getUserData()) ? void 0 : o.getUserIdS(),
                platform: t.appConfig.isLandscapeLayout ? "desktop" : "mobile",
                isIpad: !1,
                geoComplyToken: "",
                guestMode: !0,
                platformType: i.unknown,
                port: t.appConfig.casinoLocalhostGamePort,
                useFullScreenCasino: !0,
                appVersion: t.config.GET_BIG_VERSION(),
                miniGameCoin: t.dataHandler.getUserData().minigame_coin,
                miniGameId: t.dataHandler.getUserData().minigameId,
                userBalance: t.dataHandler.getUserData().total_amount / 100,
                casinoCoin: t.dataHandler.getUserData().casino_coin / 100,
                exchangeRate: t.appConfig.getLobbyConfig().casino.showMXNInfo ? t.currencyManager.getRate(n.USD, n.MXN) : 1,
                bundleID: t.appConfig.getGeneralConfig().bunderConfig.bunder_AppID,
                licenseType: t.appConfig.getGeneralConfig().bunderConfig.AppLicenseType,
                theme: t.appConfig.getDesignConfig().webViewThemeUse,
                ccPreviewMode: r
            };
            var s, g;
            t.appConfig.getSecurityConfig().useGeoComply && (a.geoComplyToken = null == (s = t.geoComplyManager) ? void 0 : s.getGeoToken(), null != a.geoComplyToken || null != (g = t.geoComplyManager) && g.bypassGeoComply || (a.geoComplyToken = t.getEmptyGUID()));
            return a
        }
    }
    e("CasinoMapData", s), s.METHOD_MAP = {
        [a.INITIAL_DATA]: {
            method: "setUserInfo"
        },
        [a.REQUEST_BACK_CASINO_LOBBY]: {
            method: "backToLobby"
        },
        [a.GEO_COMPLY_TOKEN]: {
            method: "setGeoComplyToken"
        },
        [a.SEND_FORWARD_MESSAGE]: {
            method: "forwardMsg"
        },
        [a.SYNC_RECENT_GAMES]: {
            method: "forwardMsg"
        },
        [a.ORIENTATION_LOCKED]: {
            method: "eventMsgFromCocos"
        },
        [a.LAUNCH_CASINO_GAME]: {
            method: "eventMsgFromCocos"
        },
        [a.SET_MINI_GAME_COIN]: {
            method: "eventMsgFromCocos"
        },
        [a.SET_USER_BALANCES]: {
            method: "eventMsgFromCocos"
        }
    }, o._RF.pop()
}
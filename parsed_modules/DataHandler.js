import * as t from "./cc.js";
import * as n from "./userData.js";
import * as a from "./activityData.js";
import * as i from "./HashMap.js";
import * as r from "./cv.js";
import * as s from "./UserActivityData.js";
import * as c from "./AnalyticsHandler.js";
import * as o from "./LoginController.js";

function main() {
    t._RF.push({}, "bc30agaU1lGipDCgDHGO3Q3", "DataHandler", void 0);
    e("BannerInfo", class {
        constructor() {
            this.imageUrl = "", this.webViewUrl = ""
        }
    });
    class g {
        constructor() {
            this.userData = null, this.bannerMapCache = new i, this.serverId = void 0, this.miniGameList = []
        }
        static getInstance() {
            return g.g_instance || (g.g_instance = new g, g.g_instance.init()), g.g_instance
        }
        init() {
            r.appConfig.isProd ? this.serverId = r.Enum.ServerButtonType.ServerButtonType_zhenshifu : this.serverId = r.Enum.ServerButtonType.ServerButtonType_ceshifu
        }
        getUserData() {
            return this.userData || (this.userData = n.getInstance()), this.userData
        }
        getMiniGameUserId() {
            return this.getUserData().getUserId(r.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool)
        }
        getMiniGameUserToken() {
            const e = r.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool;
            return this.getUserData().getUserToken(e)
        }
        getActivityData() {
            return a.getInstance()
        }
        getUserActivityData() {
            return s.getInstance()
        }
        addBannerUrl(e, t) {
            let n = this.bannerMapCache.get(e);
            n ? n.push(t) : this.bannerMapCache.add(e, [t])
        }
        getBannerUrlList(e) {
            return this.bannerMapCache.get(e)
        }
        getBannerMapSize() {
            return this.bannerMapCache.length
        }
        clearBanner() {
            this.bannerMapCache.clear()
        }
        clearData() {
            this.userData && (this.userData = n.clearData()), this.getUserActivityData().clearData(), this.init()
        }
        getServerId() {
            return this.serverId
        }
        setServerId(e) {
            this.serverId = e
        }
        upgradeAccount() {
            let e = !1;
            r.dataHandler.getUserData().isTouristUser && (c.getInstance().sendEvent(r.Enum.CurrentScreen.account, r.Enum.segmentEvent.Clicked, r.Enum.Functionality.guestRegistration, {
                buttonName: "registrationOrLogin"
            }), e = !0, r.appConfig.isWebApp ? o.getInstance().switchToLoginOrRegistrationScene() : r.netWorkManager.Logout(!0, null, r.Enum.LogOutReason.TouristUpgrade)), this.getUserData().isOpenUpdateUserMode = !0, e || (r.appConfig.isWebApp ? o.getInstance().switchToLoginOrRegistrationScene() : r.authenticator.logOutAndDoGuestLogin())
        }
        cancleUpgradeAccount(e) {
            console.log("cancle UpgradeAccount"), r.dataHandler.getUserData().isTouristUser && c.getInstance().sendEvent(r.Enum.CurrentScreen.account, r.Enum.segmentEvent.Clicked, r.Enum.Functionality.guestRegistration, {
                buttonName: "cancel"
            }), e && e(), r.viewAdaptive.isselfchange && r.SHOP.exitCallFunc && r.SHOP.exitCallFunc()
        }
        getMiniGameList() {
            return this.miniGameList
        }
        updateMiniGameList(e) {
            this.miniGameList = e
        }
        get helpLineData() {
            let e = r.appConfig.getGeneralConfig().helpLine,
                t = r.tools.checkNestedValue(e, "phone", "name");
            null != t && (e.phone.name = r.config.getStringData(t, !1, t).trim());
            let n = r.tools.checkNestedValue(e, "email", "name");
            null != n && (e.email.name = r.config.getStringData(n, !1, n).trim());
            let a = r.tools.checkNestedValue(e, "emailPaymentRelated", "name");
            null != a && (e.emailPaymentRelated.name = r.config.getStringData(a, !1, a).trim());
            let i = r.tools.checkNestedValue(e, "emailForKYCDocuments", "name");
            null != i && (e.emailForKYCDocuments.name = r.config.getStringData(i, !1, i.trim()));
            let s = r.tools.checkNestedValue(e, "emailForResponsibleGaming", "name");
            return null != s && (e.emailForResponsibleGaming.name = r.config.getStringData(s, !1, s).trim()), e
        }
    }
    e("DataHandler", g), g.g_instance = void 0, t._RF.pop()
}
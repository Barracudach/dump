import * as n from "./cc.js";
import * as t from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";
import * as i from "./DeeplinksDataHandler.js";

function main() {
    n._RF.push({}, "f4d74Da5dRJFpXTO+R9LrY/", "WebviewHelperData", void 0);
    e("COMMON_EVENT_NAMES", function(e) {
        return e.NAVIGATE = "navigate", e
    }({}));
    e("WebviewHelperData", class {
        static getCashierPkwDeviceInfo() {
            if (o.isNative) switch (o.os) {
                case o.OS.IOS:
                    return "ios";
                case o.OS.ANDROID:
                    return "android";
                default:
                    return "h5"
            }
            return "h5"
        }
        static getAreaCode() {
            let e = "86";
            return a.dataHandler.getUserData().areaCode && (e = "" + a.dataHandler.getUserData().areaCode, e = e.startsWith("+") ? e.substring(1) : e), e
        }
        static getCommonURLParams() {
            var e;
            let n = "?userId=" + encodeURIComponent(a.dataHandler.getUserData().getUserIdS());
            n += "&sessionId=" + encodeURIComponent(a.dataHandler.getUserData().getUserToken()), n += "&country=" + encodeURIComponent(a.dataHandler.getUserData().countryISO2 ?? "US"), n += "&locale=" + encodeURIComponent(a.config.getCurrentLanguage()), n += "&platform=" + encodeURIComponent(a.config.IS_PC() ? "desktop" : "mobile"), n += "&isBrowser=" + encodeURIComponent(o.isBrowser ? 1 : 0);
            let t = null == (e = a.geoComplyManager) ? void 0 : e.getGeoToken();
            return t && (n += "&geoComplyToken=" + encodeURIComponent(t)), n += "&clientVersion=" + encodeURIComponent(a.config.GET_CLIENT_VERSION()), n += "&isMX=" + encodeURIComponent(a.appConfig.isMX ? 1 : 0), n += "&bundleID=" + encodeURIComponent(a.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), n += "&licenseType=" + encodeURIComponent(a.appConfig.getGeneralConfig().bunderConfig.AppLicenseType), n += "&theme=" + encodeURIComponent(a.appConfig.getDesignConfig().webViewThemeUse), n += "&sharedPlayerId=" + encodeURIComponent(a.dataHandler.getUserData().getUserIdS(!0)), n += "&club_id=" + encodeURIComponent("0"), n += "&union_id=" + encodeURIComponent("0"), n += "&uuid=" + encodeURIComponent(a.native.GetDeviceUUID(!1, !0)), n += "&device=" + encodeURIComponent(this.getCashierPkwDeviceInfo()), n += "&areacode=" + encodeURIComponent(this.getAreaCode()), n += "&true_amount=" + encodeURIComponent(a.dataHandler.getUserData().total_amount / 100), n
        }
        static getSegmentParams() {
            let e = a.native.GetLocation(),
                n = t.windowSize,
                o = JSON.parse(a.native.GenerateDeviceInfo());
            var d = i.GetLastAttributedDataString();
            return {
                clientType: encodeURIComponent(a.config.GET_CLIENT_TYPE().toString()),
                clientWidth: encodeURIComponent(n.width.toString()),
                clientHeight: encodeURIComponent(n.height.toString()),
                advId: encodeURIComponent(a.native.getAdvertisingId(!1)),
                latitude: encodeURIComponent((null == e ? void 0 : e.latitude) || ""),
                longitude: encodeURIComponent((null == e ? void 0 : e.longitude) || ""),
                osName: encodeURIComponent(a.config.getPlatform()),
                osVersion: encodeURIComponent(o.dversion),
                deviceModel: encodeURIComponent(o.dmodel),
                deviceName: encodeURIComponent(o.dname),
                deviceUUID: encodeURIComponent(a.native.GetDeviceUUID(!1, !0)),
                networkWifi: encodeURIComponent(a.native.CheckNetWork() ? "1" : "0"),
                networkSpeed: encodeURIComponent(a.netWorkManager.connectionDelayMax.toString()),
                branchData: d ? encodeURIComponent(d) : null,
                tz: ""
            }
        }
        static getCMSConfigParams() {
            let e = "layoutType=" + encodeURIComponent(a.appConfig.layoutUse);
            return e += "&platform=" + encodeURIComponent(a.config.getPlatform() ?? "unknown"), e += "&isWebApp=" + encodeURIComponent(a.appConfig.isWebApp), e += "&licenseType=" + encodeURIComponent(a.appConfig.getGeneralConfig().bunderConfig.AppLicenseType), e += "&bundleId=" + encodeURIComponent(a.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), e += "&appVersion=" + encodeURIComponent(a.config.GET_CLIENT_VERSION()), e += "&country=" + encodeURIComponent(a.dataHandler.getUserData().countryISO2 ?? ""), e += "&language=" + encodeURIComponent(a.config.getCurrentLanguage()), e += "&userID=" + encodeURIComponent(a.dataHandler.getUserData().getUserId() ?? ""), e
        }
    }), n._RF.pop()
}
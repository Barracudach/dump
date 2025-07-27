import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cv.js";

function main() {
    var n, t;
    i._RF.push({}, "f10e0+ni8VK0YHW3TW+cSX9", "NDBSHandler", void 0);
    const {
        ccclass: l,
        property: c
    } = o;
    e("GC_REASON_CODE", function(e) {
        return e[e.LOGIN = 1] = "LOGIN", e[e.PREWAGER = 2] = "PREWAGER", e[e.INTERVAL = 3] = "INTERVAL", e[e.IPCHANGE = 4] = "IPCHANGE", e[e.USER_DRIVEN_RETRY = 5] = "USER_DRIVEN_RETRY", e[e.POST_INTERVAL_FOREGROUND = 6] = "POST_INTERVAL_FOREGROUND", e[e.GAME_LAUNCHER_SWITCH = 7] = "GAME_LAUNCHER_SWITCH", e[e.REGISTRATION = 8] = "REGISTRATION", e.ACCOUNT_CHANGES_NAME_ADD = "9a", e.ACCOUNT_CHANGES_NAME_CHANGE = "9b", e.ACCOUNT_CHANGES_NAME_REMOVE = "9c", e.ACCOUNT_CHANGES_PHONE_ADD = "9d", e.ACCOUNT_CHANGES_PHONE_CHANGE = "9e", e.ACCOUNT_CHANGES_PHONE_REMOVE = "9f", e.ACCOUNT_CHANGES_EMAIL_ADD = "9g", e.ACCOUNT_CHANGES_EMAIL_CHANGE = "9h", e.ACCOUNT_CHANGES_EMAIL_REMOVE = "9i", e.ACCOUNT_CHANGES_PASSWORD = "9j", e.ACCOUNT_CHANGES_SECURITY_ADD = "9k", e.ACCOUNT_CHANGES_SECURITY_REMOVE = "9l", e.ACCOUNT_CHANGES_PHYSICAL_ADDRESS_ADD = "9m", e.ACCOUNT_CHANGES_PHYSICAL_ADDRESS_CHANGE = "9n", e.ACCOUNT_CHANGES_PHYSICAL_ADDRESS_REMOVE = "9o", e.ACCOUNT_CHANGES_CONTACTS_ADD = "9p", e.ACCOUNT_CHANGES_CONTACTS_CHANGE = "9q", e.ACCOUNT_CHANGES_CONTACTS_REMOVE = "9r", e.PAYMENT_INFORMATION_FUNDING_METHOD_ADD = "10a", e.PAYMENT_INFORMATION_FUNDING_METHOD_CHANGE = "10b", e.PAYMENT_INFORMATION_FUNDING_METHOD_REMOVE = "10c", e.PAYMENT_INFORMATION_WITHDRAWAL_METHOD_ADD = "10d", e.PAYMENT_INFORMATION_WITHDRAWAL_METHOD_CHANGE = "10e", e.PAYMENT_INFORMATION_WITHDRAWAL_METHOD_REMOVE = "10f", e.TRANSACTION_DEPOSIT = "11a", e.TRANSACTION_WITHDRAWAL = "11b", e.TRANSACTION_PURCHASE_WAGER = "11c", e.TRANSACTION_SELL = "11d", e.TRANSACTION_TRANSFER_SAME_USER = "11e", e.TRANSACTION_TRANSFER_DIFFERENT_USER = "11f", e.TRANSACTION_NAVIGATION_BALANCE = "12a", e.TRANSACTION_NAVIGATION_TRANSACTION_HISTORY = "12b", e.TRANSACTION_NAVIGATION_TRANSACTION_DETAILS = "12c", e.TRANSACTION_NAVIGATION_PROFILE = "12d", e.TRANSACTION_NAVIGATION_HELP_CENTER = "12e", e.TRANSACTION_NAVIGATION_TERMS_OF_USE = "12f", e.TRANSACTION_NAVIGATION_CONTACTS = "12g", e
    }({}));
    let A = e("GC_NDBS_EVENTS", function(e) {
        return e.abort = "abort", e.before = "before", e.browserIncompatible = "browser.incompatible", e.initFailed = "init.failed", e.reviseFailed = "revise.failed", e.configFailed = "config.failed", e.browserFailed = "browser.failed", e.engineFailed = "engine.failed", e.initSuccess = "init.success", e.configSuccess = "config.success", e.browserSuccess = "browser.success", e.engineSuccess = "engine.success", e.success = "success", e.failed = "failed", e.hint = "hint", e.allFailed = "*.failed", e.all = "**", e
    }({}));
    e("default", l(((t = class e {
        get IsGeolocationInProgress() {
            return this.isGeolocationInProgress
        }
        constructor() {
            if (this.geoClient = null, this.URL_KEY = "WEB_GEOCOMPLY_NDBS", this.isIpListenerEnabled = !1, this.isGeolocationInProgress = !1, s.appConfig.isWebApp) {
                console.log("NDBS constructor");
                let i = window.document.createElement("script"),
                    o = this.getNDBSURL();
                i.src = o, i.type = "text/javascript", i.onload = () => {
                    console.log("NDBS Init"), e.getInstance().initSDK()
                }, window.document.getElementsByTagName("head")[0].appendChild(i)
            }
        }
        getNDBSURL() {
            return s.config.getStringData(this.URL_KEY, !0)
        }
        static getInstance() {
            return e.instance || (e.instance = new e), e.instance
        }
        setNDBSLicense(e = "") {
            return console.log("geocomplycocos setNDBSLicense"), console.log(this.geoClient), console.log(e), !!(s.appConfig.isWebApp && this.geoClient && e) && (this.geoClient.setLicense(e), !0)
        }
        initSDK(e = "") {
            if (!s.appConfig.isWebApp) return;
            if (!window.GcHtml5) return;
            let i = this.startGeoComply();
            i && (console.log("GeoComplyCocos GeoComplyHtml5 InitSDK"), this.addNativeListeners(i), this.setAllowHint(!0), e && i.setLicense(e))
        }
        startGeoComply() {
            var e;
            if (s.appConfig.isWebApp) return null == (e = window.GcHtml5) || null == e.createClient ? void 0 : e.createClient(null, (function(e, i, o) {}))
        }
        addNativeListeners(e) {
            s.appConfig.isWebApp && (this.geoClient && this.removeNativeListeners(), this.geoClient = e, this.geoClient.events.on(A.abort, (() => {
                console.log("NDBS abort"), this.onGeolocationCancelled()
            })), this.geoClient.events.on(A.initSuccess, (function() {
                console.log("NDBS init.success"), window.GeoComplyClientInitializedSuccessFully()
            })), this.geoClient.events.on(A.engineSuccess, ((e, i) => {
                console.log("NDBS engine.success"), console.log(e), console.log(i)
            })), this.geoClient.events.on(A.allFailed, (function(e, i) {
                console.log(this.event), console.log(e), console.log(i)
            })), this.geoClient.events.on(A.engineFailed, ((e, i) => {
                console.log("NDBS engine.failed")
            })), this.geoClient.events.on(A.success, ((e, i) => {
                console.log("NDBS success"), console.log(e), console.log(i), this.onGeolocationAvailable(e, i)
            })), this.geoClient.events.on(A.failed, ((e, i) => {
                let o = {
                    code: e,
                    message: i
                };
                console.log("NDBS failed: " + JSON.stringify(o)), this.onGeolocationFailed(e, i)
            })), this.geoClient.events.on(A.hint, ((e, i) => {
                console.log("NDBS hint: " + i), this.onLocationServicesDisabled(e, i)
            })), window.GcHtml5.onMyIpSuccess = e => {
                window.GcHtml5.ackMyIPSuccess(), this.onMyIpSuccess(e)
            }, window.GcHtml5.onMyIpFailure = e => {
                this.onMyIpFailure(e)
            }, this.geoClient.events.on(A.all, (function() {
                console.log("NDBS event: " + this.event), console.log(arguments)
            })))
        }
        removeNativeListeners() {
            s.appConfig.isWebApp && this.geoClient && this.geoClient.removeAllListeners([A.abort, A.engineSuccess, A.engineFailed, A.success, A.failed, A.hint, A.initSuccess, A.all])
        }
        onMyIpSuccess(e) {
            window.GeoComplyIPChanged(e)
        }
        onMyIpFailure(e) {
            this.isIpListenerEnabled = !1, window.GeoComplyIPFailed({
                code: e.errorCode,
                message: e.errorMessage
            })
        }
        onGeolocationAvailable(e, i) {
            window.GeoComplyLocationSuccess(e), this.isGeolocationInProgress = !1
        }
        onGeolocationFailed(e, i) {
            window.GeoComplyLocationFailure(e, i), this.isGeolocationInProgress = !1
        }
        onLocationServicesDisabled(e, i) {}
        onGeolocationCancelled() {
            window.GeoComplyRequestCanceled(!0), this.isGeolocationInProgress = !1
        }
        onClientException(e, i) {
            window.GeoComplyClientException({
                code: e,
                message: i
            })
        }
        startIpService(e, i) {
            s.appConfig.isWebApp && !this.isIpListenerEnabled && window.GcHtml5 && (this.isIpListenerEnabled = !0, window.GcHtml5.startMyIpService({
                license: e,
                resumable: i
            }))
        }
        stopIpService() {
            s.appConfig.isWebApp && window.GcHtml5 && (this.isIpListenerEnabled = !1, window.GcHtml5.stopMyIpService())
        }
        requestGeolocation(e) {
            s.appConfig.isWebApp && (this.setData(e), this.geoClient.requestGeolocation(), this.isGeolocationInProgress = !0)
        }
        cancelGeolocationRequest() {
            s.appConfig.isWebApp && this.geoClient.abort()
        }
        isActive() {
            var e;
            return null == (e = this.geoClient) ? void 0 : e.isActive()
        }
        setAllowHint(e) {
            s.appConfig.isWebApp && this.geoClient.allowHint(e)
        }
        setReasonCode(e) {
            s.appConfig.isWebApp && this.geoClient.setReasonCode(e)
        }
        requestWithTimeout(e, i) {
            s.appConfig.isWebApp && (this.setData(e), this.geoClient.requestWithTimeout(i), this.isGeolocationInProgress = !0)
        }
        setData(e) {
            s.appConfig.isWebApp && (this.geoClient.setLicense(e.licenseKey), this.geoClient.setUserId(e.userId), this.geoClient.setReason(e.geolocationReason), e.isIpChange ? this.geoClient.customFields.set("geo_ip_detect", "gc_ip_change_detect") : this.geoClient.customFields.remove("geo_ip_detect", "gc_ip_change_detect"), e.enableIpChangeService && !this.isIpListenerEnabled && this.startIpService(e.licenseKey, !0))
        }
        invalidateUserSession() {
            s.appConfig.isWebApp && this.geoClient.invalidateUserSession()
        }
    }).instance = null, n = t)) || n);
    i._RF.pop()
}
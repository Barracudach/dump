import * as n from "./cc.js";
import * as t from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cv.js";
import * as i from "./CrashTracing.js";
import * as r from "./CrashTracing.js";
import * as s from "./GeoComplyManager.js";
import * as c from "./NDBSHandler.js";

function main() {
    var C, E;
    o._RF.push({}, "ac948++a0pKGZWmn4p/d9a6", "GeoComplyHandler", void 0);
    const {
        ccclass: I
    } = n;
    let O = e("GeoComplyError", function(e) {
        return e[e.NONE = 0] = "NONE", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.UNEXPECTED = 600] = "UNEXPECTED", e[e.NETWORK_CONNECTION = 602] = "NETWORK_CONNECTION", e[e.SERVER_COMMUNICATION = 603] = "SERVER_COMMUNICATION", e[e.CLIENT_SUSPENDED = 604] = "CLIENT_SUSPENDED", e[e.DISABLED_SOLUTION = 605] = "DISABLED_SOLUTION", e[e.INVALID_LICENSE_FORMAT = 606] = "INVALID_LICENSE_FORMAT", e[e.CLIENT_LICENSE_UNAUTHORIZED = 607] = "CLIENT_LICENSE_UNAUTHORIZED", e[e.LICENSE_EXPIRED = 608] = "LICENSE_EXPIRED", e[e.INVALID_CUSTOM_FIELDS = 609] = "INVALID_CUSTOM_FIELDS", e[e.REQUEST_CANCELLED_BY_APP = 610] = "REQUEST_CANCELLED_BY_APP", e[e.REQUEST_CANCELED = 611] = "REQUEST_CANCELED", e[e.GEOLOCATION_IN_PROGRESS = 614] = "GEOLOCATION_IN_PROGRESS", e[e.PERMISSIONS_NOT_GRANTED = 615] = "PERMISSIONS_NOT_GRANTED", e[e.GOOGLE_PLAY_SERVICE_NOT_FOUND = 616] = "GOOGLE_PLAY_SERVICE_NOT_FOUND", e[e.DEVICE_CALLBACK_NOT_FOUND = 617] = "DEVICE_CALLBACK_NOT_FOUND", e[e.PLAY_INTEGRITY_API_NOT_FOUND = 618] = "PLAY_INTEGRITY_API_NOT_FOUND", e[e.IS_UPDATING_LOCATION = 630] = "IS_UPDATING_LOCATION", e[e.DISABLED_INDOOR_GEOLOCATION = 631] = "DISABLED_INDOOR_GEOLOCATION", e[e.DISABLED_BLUETOOTH = 632] = "DISABLED_BLUETOOTH", e[e.UNSUPPORTED_BLUETOOTH = 633] = "UNSUPPORTED_BLUETOOTH", e[e.INVALID_USER_INPUT = 635] = "INVALID_USER_INPUT", e[e.PRECISE_LOCATION_PERMISSION_NOT_GRANTED = 637] = "PRECISE_LOCATION_PERMISSION_NOT_GRANTED", e[e.BLUETOOTH_PERMISSIONS_NOT_GRANTED = 638] = "BLUETOOTH_PERMISSIONS_NOT_GRANTED", e[e.REASON_CODE_MISSING = 639] = "REASON_CODE_MISSING", e[e.INVALID_HMAC = 640] = "INVALID_HMAC", e[e.XML_OMITTED = 650] = "XML_OMITTED", e[e.BACKGROUND_MODE = 634] = "BACKGROUND_MODE", e[e.NOT_CONTAIN_ALL_PROTOCOLS = 636] = "NOT_CONTAIN_ALL_PROTOCOLS", e[e.NOT_CERTIFIED_BINARIES = 601] = "NOT_CERTIFIED_BINARIES", e[e.LOCAL_SERVICE_UNAVAILABLE = 612] = "LOCAL_SERVICE_UNAVAILABLE", e[e.LOCAL_SERVICE_COMMUNICATION = 613] = "LOCAL_SERVICE_COMMUNICATION", e[e.TRANSACTION_INTERRUPTED = 619] = "TRANSACTION_INTERRUPTED", e[e.TRANSACTION_TIMEOUT = 620] = "TRANSACTION_TIMEOUT", e[e.LOCATION_SERVICES_DISABLED = 621] = "LOCATION_SERVICES_DISABLED", e[e.NO_MEMORY = 689] = "NO_MEMORY", e[e.WRONG_INTEGRATION = 698] = "WRONG_INTEGRATION", e
    }({}));
    e("LocationError", function(e) {
        return e[e.GPS_LOCATION = 0] = "GPS_LOCATION", e[e.WIFI_AND_MOBILE_NETWORK_LOCATION = 1] = "WIFI_AND_MOBILE_NETWORK_LOCATION", e
    }({})), e("IpChangeError", function(e) {
        return e[e.NO_ERROR = 0] = "NO_ERROR", e[e.CONFIRM_SERVICE_STOPPED = 700] = "CONFIRM_SERVICE_STOPPED", e[e.LICENSE_NOT_SET = 701] = "LICENSE_NOT_SET", e[e.CONFIG_NOT_DEFINED = 702] = "CONFIG_NOT_DEFINED", e[e.SSL_ERROR = 703] = "SSL_ERROR", e[e.INVALID_IP_ADDRESS_FORMAT = 704] = "INVALID_IP_ADDRESS_FORMAT", e[e.NO_NETWORK_CONNECTION = 705] = "NO_NETWORK_CONNECTION", e[e.HTTP_ERROR = 706] = "HTTP_ERROR", e[e.MYIP_HOST_IS_UNREACHABLE = 707] = "MYIP_HOST_IS_UNREACHABLE", e[e.MYIP_SERVICE_IS_TIMEOUT = 710] = "MYIP_SERVICE_IS_TIMEOUT", e[e.UNKNOWN_ERROR = 720] = "UNKNOWN_ERROR", e
    }({}));
    var S = function(e) {
        return e.Requested = "Requested", e.Success = "Success", e.Failed = "Failed", e.Canceled = "Canceled", e
    }(S || {});
    let N = e("default", I(((E = class e {
        constructor() {
            this.onGeoLocationSuccess = null, this.onGeoLocationFailed = null, this.requestCancelCallback = null, this.clientException = null, this.logEvents = [], this.geoLocationError = null
        }
        static getInstance() {
            return e.instance || (e.instance = new e), e.instance
        }
        isClientInstatiate() {
            return null == this.clientException
        }
        getLastClientError() {
            return this.getErrorCode(this.clientException)
        }
        getLastNativeError() {
            return this.getLastClientError() || this.getErrorCode(this.geoLocationError)
        }
        isLastNativeErrorIsLocationServicesError() {
            if (t.os == t.OS.ANDROID || t.os == t.OS.IOS) {
                let e = this.getLastNativeError();
                return e == O.PRECISE_LOCATION_PERMISSION_NOT_GRANTED || e == O.REQUEST_CANCELED || e == O.PERMISSIONS_NOT_GRANTED
            }
            return !1
        }
        initSDK(e = "") {
            console.log("GeoComplyCocos InitSDK"), this.clientException = null, this.geoLocationError = null, a.appConfig.isWebApp ? c.getInstance().initSDK(e) : t.isNative && (t.os === t.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/GeoComplySDK", "startGeoComply", "(Ljava/lang/String;)V", e) : t.os === t.OS.IOS ? a.native.invokeSyncFunc(a.nativeCMD.KEY_START_GEO_COMPLY) : t.os === t.OS.WINDOWS ? l.cppbridge.sendMessage("GeoComplySDK", "startGeoComply") : t.os === t.OS.OSX && l.reflection.callStaticMethod("GeoComplyHandlerMac", "startGeoComply"))
        }
        initilizeClient() {
            console.log("GeoComplyCocos initilizeClient"), this.clientException = null, this.geoLocationError = null, a.appConfig.isWebApp || t.isNative && (t.os === t.OS.OSX ? l.reflection.callStaticMethod("GeoComplyHandlerMac", "initGeoComply") : t.os === t.OS.WINDOWS && l.cppbridge.sendMessage("GeoComplySDK", "initialize"))
        }
        uninitilizeClient() {
            console.log("GeoComplyCocos uninitilizeClient"), this.clientException = null, this.geoLocationError = null, a.appConfig.isWebApp || t.isNative && (t.os === t.OS.OSX ? l.reflection.callStaticMethod("GeoComplyHandlerMac", "uninitialize") : t.os === t.OS.WINDOWS && l.cppbridge.sendMessage("GeoComplySDK", "uninitialize"))
        }
        requestGeoLocation(e) {
            console.log("GeoComplyCocos triggerGeolocation##################"), this.geoLocationError = null, a.appConfig.isWebApp ? c.getInstance().requestGeolocation(e) : t.isNative && (this.logGeoLocationRequestGeneralEvent(!0, S.Requested, e), t.os === t.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/GeoComplySDK", "requestGeolocation", "(Ljava/lang/String;)Z", JSON.stringify(e)) : t.os === t.OS.IOS ? a.native.invokeSyncFunc(a.nativeCMD.KEY_TRIGGER_GEO_LOCATION, e) : t.os === t.OS.WINDOWS ? l.cppbridge.sendMessage("GeoComplySDK", "triggerGeolocation", JSON.stringify(e)) : t.os === t.OS.OSX && l.reflection.callStaticMethod("GeoComplyHandlerMac", "requestGeolocation:", JSON.stringify(e)))
        }
        cancelOnGoingRequest(e = "Manual", o) {
            if (console.log("GeoComplyCocos cancelOnGoingRequest ##################"), this.requestCancelCallback = null, this.isGeoRequestInProcess())
                if (this.requestCancelCallback = o, a.appConfig.isWebApp) c.getInstance().cancelGeolocationRequest();
                else if (t.isNative && (t.os === t.OS.WINDOWS || t.os === t.OS.OSX ? (this.uninitilizeClient(), this.initilizeClient()) : t.os === t.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/GeoComplySDK", "cancelGeolcationRequest", "(Ljava/lang/String;)V", e) : t.os === t.OS.IOS && l.reflection.callStaticMethod("GeoComplyHandler", "cancelGeolcationRequest:", e), this.logEvents.length > 0)) {
                this.logEvents[this.logEvents.length - 1].cancelReason = e
            }
        }
        isGeoRequestInProcess() {
            console.log("GeoComplyCocos isGeoRequestInProcess ##################");
            let e = !1;
            return a.appConfig.isWebApp ? e = c.getInstance().IsGeolocationInProgress : t.isNative && (t.os === t.OS.ANDROID ? e = l.reflection.callStaticMethod("com/cocos/game/GeoComplySDK", "isRequestInProgress", "()Z") : t.os === t.OS.IOS ? e = l.reflection.callStaticMethod("GeoComplyHandler", "isRequestInProgress") : t.os !== t.OS.WINDOWS && t.os !== t.OS.OSX || (e = this.logEvents.length > 0), console.log("GeoComplyCocos isGeoRequestInProcess result : ", e)), e
        }
        openLocationSettings() {
            console.log("GeoComplyCocos isGeoRequestInProcess ##################"), a.appConfig.isWebApp || t.isNative && (t.os === t.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/GeoComplySDK", "openLocationSettings", "()V") : t.os !== t.OS.IOS && t.os !== t.OS.OSX || a.permMgr.openAppSettings())
        }
        static onGeoComplyClientInitializedSuccessFully() {
            console.log("GeoComplyCocos onGeoComplyClientInitializedSuccessFully"), e.getInstance().clientException = null, e.getInstance().requestCancelCallback && e.onGeoComplyRequestCanceled(!0, "Geocomply client has been re-created")
        }
        static onGeoComplyRequestCanceled(o = !1, n = "") {
            var t, l;
            if (console.log(`GeoComplyCocos onGeoComplyRequestCanceled : ${!!o} : ${n}`), o) e.getInstance().logGeoLocationRequestGeneralEvent(!1, S.Canceled, {
                Description: n
            });
            else {
                var a;
                let o = {
                    ErrorType: "CanNotCancelRequest",
                    ErrorDetails: n.toString()
                };
                const t = e.getInstance().logEvents.length;
                if (t > 0) {
                    let n = e.getInstance().logEvents[t - 1];
                    n.cancelReason && (o.cancelReason = n.cancelReason)
                }
                null == (a = i.getInstance()) || a.trace(r.GeoComply, "GeoComply_Native_SDK_Errors", o)
            }
            null == (t = (l = e.getInstance()).requestCancelCallback) || t.call(l, !!o, n), e.getInstance().requestCancelCallback = null
        }
        static onGeoComplyClientException(o) {
            var n, t;
            console.log("GeoComplyCocos onGeoComplyClientException: ", o.toString()), e.getInstance().clientException = o, e.getInstance().handleSDKErrors(o, !0), null == (n = i.getInstance()) || n.trace(r.GeoComply, "GeoComply_Native_SDK_Errors", {
                ErrorType: "ClientException",
                ErrorCode: null == (t = e.getInstance()) ? void 0 : t.getErrorCode(o),
                ErrorDetails: o.toString()
            })
        }
        static onGeoComplyLocationSuccess(o) {
            var n, t;
            console.log("GeoComplyCocos onGeoComplyLocationSuccess: ", o), e.getInstance().logGeoLocationRequestGeneralEvent(!1, S.Success, "Success"), null == (n = (t = e.getInstance()).onGeoLocationSuccess) || n.call(t, o), e.getInstance().geoLocationError = null
        }
        static onGeoComplyLocationFailure(o, n) {
            var t, l, a, s;
            console.log("GeoComplyCocos onGeoComplyLocationFailure: ", n), console.log("GeoComplyCocos Error code: ", o), null == (t = i.getInstance()) || t.trace(r.GeoComply, "GeoComply_Native_SDK_Errors", {
                ErrorType: "LocationFailure",
                ErrorCode: null == (l = e.getInstance()) ? void 0 : l.getErrorCode(o),
                ErrorDetails: o.toString(),
                ErrorMessage: n.toString()
            }), e.getInstance().logGeoLocationRequestGeneralEvent(!1, S.Failed, e.getInstance().getErrorCode(o)), null == (a = (s = e.getInstance()).onGeoLocationFailed) || a.call(s, o), e.getInstance().handleSDKErrors(o, !0), e.getInstance().geoLocationError = o
        }
        handleSDKErrors(e, o = !1) {
            var n, l, i;
            let r = this.getErrorCode(e);
            switch (r) {
                case O.GEOLOCATION_IN_PROGRESS:
                    break;
                case O.INVALID_LICENSE_FORMAT:
                    var c, C, E;
                    if (o) a.geoComplyManager.tokenGenerationReason = s.LicenseExpiry, null == (c = a.geoComplyManager) || c.clearLicenseKey(), null == (C = a.geoComplyManager) || C.renewLicense();
                    else null == (E = a.geoComplyManager) || E.nativeErrorHandler(r);
                    break;
                case O.LICENSE_EXPIRED:
                    var I;
                    if (a.geoComplyManager.isSystemTimeIncorrect && !a.appConfig.isWebApp) null == (I = a.geoComplyManager) || I.showIncorrectSystemTimePopup();
                    else if (o) {
                        var S, N;
                        a.geoComplyManager.tokenGenerationReason = s.LicenseExpiry, null == (S = a.geoComplyManager) || S.clearLicenseKey(), null == (N = a.geoComplyManager) || N.renewLicense()
                    } else {
                        var _;
                        null == (_ = a.geoComplyManager) || _.nativeErrorHandler(r)
                    }
                    break;
                case O.PERMISSIONS_NOT_GRANTED:
                    var g, p, R;
                    if (t.os == t.OS.ANDROID) null == (g = a.geoComplyManager) || g.forceCloseCheckInProgressPopup(), null == (p = a.geoComplyManager) || p.showLocationPermissionPopup(r);
                    else null == (R = a.geoComplyManager) || R.nativeErrorHandler(r);
                    break;
                case O.UNEXPECTED:
                case O.NETWORK_CONNECTION:
                case O.SERVER_COMMUNICATION:
                    var T;
                    if (null != (n = a.geoComplyManager) && n.checkForEnablingBypass(r)) null == (T = a.geoComplyManager) || T.forceCloseCheckInProgressPopup();
                    break;
                case O.LOCAL_SERVICE_UNAVAILABLE:
                case O.LOCAL_SERVICE_COMMUNICATION:
                    null == (l = a.geoComplyManager) || l.nativeErrorHandler(r);
                    break;
                case O.PRECISE_LOCATION_PERMISSION_NOT_GRANTED:
                case O.REQUEST_CANCELED:
                    var G, u;
                    if (t.os == t.OS.IOS || t.os == t.OS.ANDROID) null == (G = a.geoComplyManager) || G.showEnableLocationServiceHelpPopup(r);
                    else null == (u = a.geoComplyManager) || u.nativeErrorHandler(r);
                    break;
                default:
                    null == (i = a.geoComplyManager) || i.nativeErrorHandler(r)
            }
        }
        getErrorCode(e) {
            if (a.StringTools.isNumber(e)) return a.Number(e);
            let o = a.tryParseJSON(e);
            return o && o.code ? a.Number(o.code) : null
        }
        static onGeoComplyIPChanged(e) {
            var o, n, t;
            (console.log("GeoComplyCocos onGeoComplyIPChanged: ", e), null != (o = a.appConfig) && null != (o = o.getSecurityConfig()) && o.enableGeoComplyGeneralNRLogging) && (null == (n = i.getInstance()) || n.trace(r.GeoComply, "GeoComplyGeneralLogs", {
                EventName: "IPChanged",
                NewIP: e
            }));
            a.appConfig.getSecurityConfig().enableGeoComplyIpChangeService && (a.geoComplyManager.tokenGenerationReason = s.IpChange, null == (t = a.geoComplyManager) || t.renewGeoTokenWithDelay(120, !0))
        }
        static onGeoComplyIPFailed(o) {
            var n, t;
            console.log("GeoComplyCocos onGeoComplyIPFailed: ", o), null == (n = i.getInstance()) || n.trace(r.GeoComply, "GeoComply_Native_SDK_Errors", {
                ErrorType: "IPChangeFailed",
                ErrorCode: null == (t = e.getInstance()) ? void 0 : t.getErrorCode(o),
                ErrorDetails: o.toString()
            })
        }
        static onGeoComplyLocationDisabled(e) {
            var o, n;
            null == (o = i.getInstance()) || o.trace(r.GeoComply, "GeoComply_Native_SDK_Errors", {
                ErrorType: "LocationServicesDisable",
                ErrorDetails: e.toString()
            }), null != (n = a.geoComplyManager) && n.isLocationServicesEnabled && (a.geoComplyManager.isLocationServicesEnabled = !1)
        }
        logGeoLocationRequestGeneralEvent(e, o, n) {
            var t, l;
            if (null == (t = a.appConfig) || null == (t = t.getSecurityConfig()) || !t.enableGeoComplyGeneralNRLogging) return;
            const s = Date.now();
            let c = {};
            if (e) this.logEvents.push({
                startTime: s
            }), c = {
                EventName: "GeoLocationRequestStart",
                Time: new Date(s).toUTCString(),
                Data: JSON.stringify(n),
                StackTrace: i.getTrace(0, 20),
                TokenGenerationReason: a.geoComplyManager.tokenGenerationReason
            };
            else if (c = {
                    EventName: "GeoLocationRequestEnd",
                    State: o,
                    Time: new Date(s).toUTCString(),
                    DurationInSecs: "0",
                    Data: JSON.stringify(n),
                    StackTrace: i.getTrace(0, 20),
                    TokenGenerationReason: a.geoComplyManager.tokenGenerationReason
                }, this.logEvents.length > 0) {
                let e = this.logEvents.pop(),
                    o = s - e.startTime;
                c.DurationInSecs = (o / 1e3).toString(), e.cancelReason && (c.cancelReason = e.cancelReason)
            }
            null == (l = i.getInstance()) || l.trace(r.GeoComply, "GeoComplyGeneralLogs", c)
        }
    }).instance = null, C = E)) || C);
    window.GeoComplyClientInitializedSuccessFully = N.onGeoComplyClientInitializedSuccessFully, window.GeoComplyRequestCanceled = N.onGeoComplyRequestCanceled, window.GeoComplyClientException = N.onGeoComplyClientException, window.GeoComplyLocationSuccess = N.onGeoComplyLocationSuccess, window.GeoComplyLocationFailure = N.onGeoComplyLocationFailure, window.GeoComplyIPChanged = N.onGeoComplyIPChanged, window.GeoComplyIPFailed = N.onGeoComplyIPFailed, window.GeoComplyLocationDisabled = N.onGeoComplyLocationDisabled, o._RF.pop()
}
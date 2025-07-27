import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./GeoComplyCheckPopup.js";
import * as l from "./GeoComplyCheckPopup.js";
import * as c from "./GeoComplyErrorPopup.js";
import * as a from "./cv.js";
import * as g from "./CrashTracing.js";
import * as h from "./CrashTracing.js";
import * as p from "./GeoComplyHandler.js";
import * as u from "./GeoComplyHandler.js";

function main() {
    var C, y;
    o._RF.push({}, "383f7RFEm5D24G3StZcml4w", "GeoComplyManager", void 0);
    const {
        ccclass: k,
        property: S
    } = t;
    let d = e("TokenGenerationReason", function(e) {
        return e.Login = "Login", e.LicenseExpiry = "LicenseExpriry", e.UserManualRetry = "UserManualRetry", e.TokenExpiry = "TokenExpiry", e.InvalidTokenRetry = "InvalidTokenRetry", e.IpChange = "IPChange", e.OnAppForgroundRetry = "OnAppForgroundRetry", e
    }({}));
    e("default", k(((y = class e {
        constructor() {
            this._currentRetryCount = {
                licenseKey: 0,
                geoToken: 0,
                geoPackage: 0
            }, this.getLicenseKeyTimeout = null, this.getTokenTimeout = null, this.packageTimeout = 120, this.getPackageTimeout = null, this.tokenReqTimeout = null, this.license = {
                key: "",
                expiry: 0
            }, this.geoPackage = null, this.geoToken = {
                token: "",
                expiry: 0,
                latitude: 0,
                longitude: 0,
                geolocationSource: ""
            }, this._tokenExpiryBuffer = 90, this._maxRetryCount = 3, this.isGeoComplyCheckPopupShownOnceAfterLogin = !1, this._isAccountVerificationInProgress = !1, this.getTokenSuccessCallback = [], this.getTokenErrorCallback = [], this.getTokenCancleCallback = [], this.locationServicesCache = !1, this._locationServicesEnabled = !0, this.isWhitelistConfigReponseReceived = !1, this._delayRenewLicense = 2e3, this._delayComplianceRetry = 2e3, this.disableGeoRestriction = !1, this.geocomplySDKRestriction = !1, this.geocomplyPollingInterval = 3e5, this.geocomplyInterval = null, this.gcBypassSDKErrors = [600, 602, 603], this._tokenGenerationReason = d.Login, (a.appConfig.isWebApp || n.isBrowser) && (console.log("Geocomplycocos useGeoComply false"), a.appConfig.getSecurityConfig().useGeoComply = !1, a.appConfig.getSecurityConfig().bypassGeoComply = !0), a.appConfig.getSecurityConfig().useGeoComply && (a.MessageCenter.register("onLogout", this.onLogoutSccess.bind(this), this), a.MessageCenter.register(a.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this), r.getInstance(), c.getInstance(), u.getInstance().initSDK(), u.getInstance().onGeoLocationSuccess = this.onGetGeoLocationPackageSuccess.bind(this), u.getInstance().onGeoLocationFailed = this.onGetGeoLocationPackageFailed.bind(this), this.locationServicesCache = !1)
        }
        static getInstance() {
            return e.instance || (e.instance = new e), e.instance
        }
        get bypassGeoComply() {
            return a.appConfig.getSecurityConfig().bypassGeoComply || this.disableGeoRestriction || a.dataHandler.getUserData().isPlayerWhitelistedForGeocomply
        }
        set setGeoRestriction(e) {
            if (console.log("geocomplycocos setGeoRestriction"), console.log("_disableGeoRestriction = " + e), this.disableGeoRestriction = e, e) {
                for (this.schedulePollingService(), this._maxRetryCount = 1; this.getTokenSuccessCallback.length > 0;) this.getTokenSuccessCallback.shift()(null);
                this.clearTokenCallback()
            } else this.clearPollingScheduler(), this._maxRetryCount = 3
        }
        schedulePollingService() {
            this.clearPollingScheduler(), this.geocomplyInterval = setInterval((() => {
                console.log("GeoComplyCocos geocomplyInterval"), this.renewLicense(!0)
            }), this.geocomplyPollingInterval)
        }
        clearPollingScheduler() {
            this.geocomplyInterval && (clearInterval(this.geocomplyInterval), this.geocomplyInterval = null)
        }
        get isSystemTimeIncorrect() {
            return a.dataHandler.getUserData().isSystemTimeIncorrect
        }
        get isAccountVerificationInProgress() {
            return this._isAccountVerificationInProgress
        }
        set isAccountVerificationInProgress(e) {
            this._isAccountVerificationInProgress = e
        }
        get isLocationServicesEnabled() {
            return this._locationServicesEnabled
        }
        set isLocationServicesEnabled(e) {
            this._locationServicesEnabled = e
        }
        set tokenGenerationReason(e) {
            this._tokenGenerationReason = e
        }
        get tokenGenerationReason() {
            return this._tokenGenerationReason
        }
        updateVerificationCheckStatusAndShowCheckPopup(e, o = !0, t = !1, n = !1) {
            a.config.getCurrentScene() != a.Enum.SCENE.HOTUPDATE_SCENE ? (this.isAccountVerificationInProgress != e && (this.isAccountVerificationInProgress = e, t && !this.bypassGeoComply && (!e || r.getInstance().isNodeActive() || this.isGeoComplyCheckPopupShownOnceAfterLogin ? !e && r.getInstance().isNodeActive() && r.getInstance().showMsgI18n({
                iconType: o ? l.VALID : l.INVALID,
                enableAutoHide: !0,
                closeCallback: () => {
                    a.MessageCenter.send(a.Enum.MessageCenterAction.onDissmissNewGeoTokenPopup)
                }
            }) : (this.isGeoComplyCheckPopupShownOnceAfterLogin = !0, r.getInstance().showMsgI18n({
                iconType: l.IN_PROGRESS,
                enableAutoHide: !1,
                closeCallback: null
            })))), n && r.getInstance().isNodeActive() && r.getInstance().hideAllPopup(!0)) : a.MessageCenter.register("switchSceneFinish", this.onSwitchSceneFinish.bind(this), this)
        }
        forceCloseCheckInProgressPopup() {
            console.log("Geocomplycocos forceCloseCheckInProgressPopup"), this.updateVerificationCheckStatusAndShowCheckPopup(!1, !1, !1, !0)
        }
        isUserLoggedIn() {
            return a.dataHandler.getUserData().isLoggedIn() && !a.dataHandler.getUserData().isTouristUser
        }
        onLoginSuccess() {
            console.log("geocomplycocos onLoginSuccess isTouristUser: " + a.dataHandler.getUserData().isTouristUser), a.dataHandler.getUserData().isTouristUser || a.httpHandler.requestWhitelistChecks(this.whitelistConfigResponse.bind(this))
        }
        onSwitchSceneFinish(e) {
            e == a.Enum.SCENE.HALL_SCENE && (a.MessageCenter.unregister("switchSceneFinish", this), u.getInstance().isGeoRequestInProcess() && this.updateVerificationCheckStatusAndShowCheckPopup(!0, !1, !0, !1))
        }
        whitelistConfigResponse() {
            this.isWhitelistConfigReponseReceived = !0, this.startVerification()
        }
        startVerification() {
            if (this.isUserLoggedIn()) {
                if (!u.getInstance().isClientInstatiate()) return void(null != u.getInstance().getLastNativeError() && u.getInstance().handleSDKErrors(u.getInstance().getLastNativeError().toString()));
                if (this.isAccountVerificationInProgress) return this.isGeoComplyCheckPopupShownOnceAfterLogin = !0, void r.getInstance().showMsgI18n({
                    iconType: l.IN_PROGRESS,
                    enableAutoHide: !1,
                    closeCallback: () => {
                        this.clearTokenCallback()
                    }
                });
                this.tokenGenerationReason = d.Login, this.geoPackage = null, this.renewLicense()
            }
        }
        onLogoutSccess() {
            this.geoPackage = null, this.clearTokenCallback(), this.clearGeoToken(), this.clearTokenRenewOnExpiryScheduler(), this.clearPackageScheduler(), u.getInstance().cancelOnGoingRequest("User Logged Out"), this.forceCloseCheckInProgressPopup(), c.getInstance().hideAllPopup(), this.setGeoRestriction = !1, this.geocomplySDKRestriction = !1, this.isWhitelistConfigReponseReceived = !1, this.isGeoComplyCheckPopupShownOnceAfterLogin = !1
        }
        renewLicense(e = !0, o = 0) {
            return u.getInstance().isClientInstatiate() || u.getInstance().initSDK(), !!this.isUserLoggedIn() && (console.log("GeoComplyCocos renewLicense"), this.isLicenseKeyValid() || this.clearLicenseKey(), e && (this._currentRetryCount.licenseKey = 0), this._currentRetryCount.licenseKey < this._maxRetryCount ? o ? (setTimeout((() => {
                this.renewLicense(e)
            }), o), !0) : (this.updateVerificationCheckStatusAndShowCheckPopup(!0, !1, !0, !1), this.requestLicenseKey(), !0) : (this.updateVerificationCheckStatusAndShowCheckPopup(!1, !1, !1, !0), !1))
        }
        isLicenseKeyValid() {
            let e = Math.floor(Date.now());
            return !!(this.license.key && e < this.license.expiry)
        }
        clearLicenseKey() {
            this.license = {
                key: "",
                expiry: 0
            }
        }
        requestLicenseKey() {
            if (console.log("GeoComplyCocos requestLicenseKey: " + this._currentRetryCount.licenseKey), this.clearGeoToken(), this.clearLicenseRenewOnExpiryscheduler(), this.isLicenseKeyValid()) this.onGetLicenseKeySuccess(this.license);
            else {
                this._currentRetryCount.licenseKey++;
                let e = a.config.getStringData("WEB_API_GET_GEO_COMPLY_LICENSE_KEY", !0);
                n.isBrowser && (e = a.config.getStringData("WEB_API_GET_GEO_COMPLY_LICENSE_KEY_NDBS", !0)), a.http.sendRequestV2(e, null, this.onGetLicenseKeySuccess.bind(this), this.onGetLicenseKeyFailed.bind(this), a.http.HttpRequestType.GET, a.http.HttpParseType.NONE, !1, !1, !1, null, !0)
            }
        }
        onGetLicenseKeyFailed(e) {
            var o;
            "string" != typeof e && (e = null == e || null == e ? "" : JSON.stringify(e)), console.log("GeoComplyCocos onGetLicenseKeyFailed : ", e), null == (o = g.getInstance()) || o.trace(h.GeoComply, "GeoComply_Client_Errors", {
                ErrorType: "GetLicenseFailed",
                ErrorDetails: e
            }), (e.includes("401") || e.includes("500") || !this.renewLicense(!1, this._delayComplianceRetry)) && this.checkForEnablingBypass(e, !0) && this.forceCloseCheckInProgressPopup()
        }
        onGetLicenseKeySuccess(e) {
            console.log("GeoComplyCocos onGetLicenseKeySuccess : ", JSON.stringify(e)), e && e.key && (this.license = e, this.isLicenseKeyValid() ? (this.disableGeoRestriction && !this.geocomplySDKRestriction && (this.setGeoRestriction = !1), this.scheduleLicenseRenewOnExpiry(), this.renewGeoToken()) : this.isSystemTimeIncorrect ? this.showIncorrectSystemTimePopup() : this.renewLicense(!1) || (this.serverErrorHandler(e, null, null, null, {
                ErrorType: "ExpiredOrInvalidLicense",
                ErrorDetails: JSON.stringify(e)
            }), this.fullFillPendingTokenRequest()))
        }
        clearLicenseRenewOnExpiryscheduler() {
            this.getLicenseKeyTimeout && (clearTimeout(this.getLicenseKeyTimeout), this.getLicenseKeyTimeout = null)
        }
        scheduleLicenseRenewOnExpiry() {
            this.clearLicenseRenewOnExpiryscheduler();
            let e = Date.now(),
                o = this.license.expiry - e + this._delayRenewLicense;
            o > 0 && (this.getLicenseKeyTimeout = setTimeout((() => {
                console.log("GeoComplyCocos onLicenseExpire"), this.isAccountVerificationInProgress || (this.tokenGenerationReason = d.LicenseExpiry, this.renewLicense())
            }), o))
        }
        renewGeoToken(e = !0, o = !1, t = 0) {
            return console.log("GeoComplyCocos renewGeoToken : ", e, o), !!this.isUserLoggedIn() && (this.isLicenseKeyValid() ? (e ? (this._currentRetryCount.geoToken = 0, this._currentRetryCount.geoPackage = 0) : this.tokenGenerationReason = d.InvalidTokenRetry, this._currentRetryCount.geoToken < this._maxRetryCount ? t ? (setTimeout((() => {
                this.renewGeoToken(e, o)
            }), t), !0) : (u.getInstance().isGeoRequestInProcess() ? u.getInstance().cancelOnGoingRequest("IPChange", ((e, t) => {
                e && this.requestGeoLocationPackage(o)
            })) : this.requestGeoLocationPackage(o), !0) : (this.updateVerificationCheckStatusAndShowCheckPopup(!1, !1, !1, !0), !1)) : void this.renewLicense())
        }
        getUserDataToTriggerGeoLocation(e = !1) {
            let o = a.dataHandler.getUserData().getUserId();
            return {
                licenseKey: this.license.key,
                userId: o ? o.toString() : "",
                geolocationReason: e ? "IPChange" : "Login",
                phoneNo: "",
                isIpChange: e,
                enableIpChangeService: a.appConfig.getSecurityConfig().enableGeoComplyIpChangeService,
                cancelRequestOnLocationDisabled: !1
            }
        }
        requestGeoLocationPackage(e = !1) {
            if (console.log("GeoComplyCocos requestGeoLocationPackage : ", e, this.geoPackage), e && (this.geoPackage = null, this.clearGeoToken()), this.isLocationServicesEnabled = !0, this.clearTokenRenewOnExpiryScheduler(), this.updateVerificationCheckStatusAndShowCheckPopup(!0, !1, !0, !1), null != this.geoPackage) this.requestGeoToken(this.geoPackage);
            else {
                var o;
                this.schedulePackageTimeout();
                const n = this.getUserDataToTriggerGeoLocation(e);
                var t;
                if (u.getInstance().requestGeoLocation(n), "" == n.licenseKey && null != (o = a.appConfig) && null != (o = o.getSecurityConfig()) && o.enableGeoComplyGeneralNRLogging) null == (t = g.getInstance()) || t.trace(h.GeoComply, "GeoComplyGeneralLogs", {
                    EventName: "EmptyLiencseKey",
                    LicenseData: JSON.stringify(this.license),
                    UserData: JSON.stringify(n),
                    StackTrace: g.getTrace(0, 20)
                })
            }
        }
        onGetGeoLocationPackageSuccess(e) {
            console.log("GeoComplyCocos onGetGeoLocationPackageSuccess : ", JSON.stringify(e)), this.isUserLoggedIn() ? (this.geoPackage = e, this.requestGeoToken(e)) : (this.geoPackage = null, this.forceCloseCheckInProgressPopup()), this.clearPackageScheduler()
        }
        onGetGeoLocationPackageFailed(e) {
            console.log("GeoComplyCocos onGetGeoLocationPackageFailed : ", JSON.stringify(e)), this.clearPackageScheduler()
        }
        requestGeoToken(e) {
            console.log("GeoComplyCocos requestGeoToken : ", e), this._currentRetryCount.geoToken++;
            let o = a.config.getStringData("WEB_API_SAVE_GEO_COMPLY_PACKET", !0),
                t = {
                    payload: e
                };
            a.http.sendRequestV2(o, t, this.onGetGeoTokenSuccess.bind(this), this.onGetGeoTokenFailed.bind(this), a.http.HttpRequestType.PUT, a.http.HttpParseType.NONE, !1, !1, !1, null, !0)
        }
        onGetGeoTokenFailed(e) {
            var o;
            "string" != typeof e && (e = null == e || null == e ? "" : JSON.stringify(e)), console.log("GeoComplyCocos onGetGeoTokenFailed : ", e), null == (o = g.getInstance()) || o.trace(h.GeoComply, "GeoComply_Client_Errors", {
                ErrorType: "GetGeoTokenFailed",
                ErrorDetails: e
            }), (e.includes("401") || e.includes("500") || !this.renewGeoToken(!1, !1, this._delayComplianceRetry)) && this.checkForEnablingBypass(e, !0) && this.forceCloseCheckInProgressPopup()
        }
        checkForEnablingBypass(e, o = !1) {
            return console.log("geocomplycocos checkForEnablingBypass"), console.log(JSON.stringify(e)), !!this.disableGeoRestriction || (o ? this.setGeoRestriction = !0 : !(!e || !this.gcBypassSDKErrors.includes(e)) && (this.geocomplySDKRestriction = !0, this.setGeoRestriction = !0))
        }
        onGetGeoTokenSuccess(e) {
            var o, t;
            (console.log("GeoComplyCocos onGetGeoTokenSuccess : " + JSON.stringify(e)), this.geoPackage = null, null != (o = a.appConfig) && null != (o = o.getSecurityConfig()) && o.enableGeoComplyGeneralNRLogging) && (null == (t = g.getInstance()) || t.trace(h.GeoComply, "GeoComplyGeneralLogs", {
                EventName: "GetTokenSuccessfully",
                TokenData: JSON.stringify(e)
            }));
            e && e.token && (this.geoToken = e, this.isGeoTokenValid() ? (this.disableGeoRestriction && (this.setGeoRestriction = !1), this.getTokenSuccessCallback && this.getTokenSuccessCallback.length > 0 ? this.updateVerificationCheckStatusAndShowCheckPopup(!1, !1, !1, !0) : this.updateVerificationCheckStatusAndShowCheckPopup(!1, !0, !0, !1), this.fullFillPendingTokenRequest(this.geoToken.token), this.scheduleTokenRenewOnExpiry(), a.MessageCenter.send(a.Enum.MessageCenterAction.onGetNewGeoToken, this.geoToken.token)) : this.isSystemTimeIncorrect ? this.showIncorrectSystemTimePopup() : this.renewGeoToken(!1) || (this.serverErrorHandler(e, null, null, null, {
                ErrorType: "ExpiredOrInvalidToken",
                ErrorDetails: JSON.stringify(e)
            }), this.fullFillPendingTokenRequest()))
        }
        isGeoTokenValid() {
            if (!this.isUserLoggedIn()) return !1;
            let e = Math.floor(Date.now() / 1e3);
            return !!(this.geoToken.token && this.geoToken.expiry - e > 0)
        }
        clearTokenRenewOnExpiryScheduler() {
            this.getTokenTimeout && (clearTimeout(this.getTokenTimeout), this.getTokenTimeout = null)
        }
        clearPackageScheduler() {
            this.getPackageTimeout && (clearTimeout(this.getPackageTimeout), this.getPackageTimeout = null)
        }
        scheduleTokenRenewOnExpiry() {
            this.clearTokenRenewOnExpiryScheduler();
            let e = Math.floor(Date.now() / 1e3),
                o = this.geoToken.expiry - e;
            o -= this._tokenExpiryBuffer, o > 0 && (this.getTokenTimeout = setTimeout((() => {
                console.log("GeoComplyCocos onTokenExpire"), this.isAccountVerificationInProgress || (this.tokenGenerationReason = d.TokenExpiry, this.renewGeoToken())
            }), 1e3 * o))
        }
        schedulePackageTimeout() {
            this.clearPackageScheduler(), this.getPackageTimeout = setTimeout((() => {
                console.log("GeoComplyCocos onPackageTimeout"), this.clearPackageRequest()
            }), 1e3 * this.packageTimeout)
        }
        renewGeoTokenWithDelay(e, o = !1) {
            n.os === n.OS.OSX || n.os === n.OS.WINDOWS ? (console.log("GeoComplyCocos renewGeoTokenWithDelay"), this.renewGeoToken(!0, o)) : (this.tokenReqTimeout && (clearTimeout(this.tokenReqTimeout), this.tokenReqTimeout = null), this.tokenReqTimeout = setTimeout((() => {
                console.log("GeoComplyCocos renewGeoTokenWithDelay"), this.renewGeoToken(!0, o)
            }), 1e3 * e))
        }
        clearPackageRequest() {
            console.log("GeoComplyCocos clearPackageRequest"), this._currentRetryCount.geoPackage++, this._currentRetryCount.geoPackage < this._maxRetryCount ? u.getInstance().isGeoRequestInProcess() && (console.log("_currentRetryCount geoPackage: ", this._currentRetryCount.geoPackage), u.getInstance().cancelOnGoingRequest("Request Timeout", ((e, o) => {
                e && (this.requestGeoLocationPackage(), r.getInstance().isNodeActive() && r.getInstance().showMsgI18n({
                    iconType: l.IN_PROGRESS,
                    enableAutoHide: !1,
                    text: "GeoComplyVerifyTimeOutPopupText",
                    closeCallback: () => {
                        this.clearTokenCallback()
                    }
                }))
            }))) : this.showTimeoutPopup()
        }
        showTimeoutPopup() {
            u.getInstance().isGeoRequestInProcess() && u.getInstance().cancelOnGoingRequest("Request Timeout", ((e, o) => {
                e && (this.isAccountVerificationInProgress = !1, this.forceCloseCheckInProgressPopup(), this.disableGeoRestriction || (this.geocomplySDKRestriction = !0, this.setGeoRestriction = !0))
            }))
        }
        clearGeoToken() {
            this.geoToken = {
                token: "",
                expiry: 0,
                latitude: 0,
                longitude: 0,
                geolocationSource: ""
            }
        }
        getGeoToken() {
            return a.appConfig.getSecurityConfig().useGeoComply ? this.isAccountVerificationInProgress ? null : this.isGeoTokenValid() ? this.geoToken.token : null : null
        }
        checkForLocationServices(e) {
            return !(!this.isUserLoggedIn() || !a.appConfig.getSecurityConfig().useGeoComply || this.bypassGeoComply || this.isLocationServicesEnabled || this.locationServicesCache || null == e || (this.locationServicesCache = !0, !n.isNative || n.os !== n.OS.ANDROID && n.os !== n.OS.IOS)) && (a.SwitchLoadingView.isShow() && a.SwitchLoadingView.hide(), this.showEnableLocationServiceHelpPopup(0, e), !0)
        }
        checkForNativeError() {
            var e;
            if (this.isUserLoggedIn() && a.appConfig.getSecurityConfig().useGeoComply && !this.bypassGeoComply && (null == this.getGeoToken() && null != u.getInstance().getLastNativeError())) return null == (e = g.getInstance()) || e.trace(h.GeoComply, "GeoComply_Client_Errors", {
                ErrorType: "NoValidTokenAvailable",
                ErrorDetails: JSON.stringify(this.geoToken)
            }), u.getInstance().handleSDKErrors(u.getInstance().getLastNativeError().toString()), console.log("Geocomplycocos checkForNative615Error true"), !0;
            return !1
        }
        getGeoTokenLocation() {
            return {
                latitude: this.geoToken.latitude,
                longitude: this.geoToken.longitude
            }
        }
        isIpLocationUsed() {
            return null == this.geoToken.geolocationSource || "" == this.geoToken.geolocationSource || "ip" == this.geoToken.geolocationSource
        }
        isGeoTokenRequired() {
            return this.isUserLoggedIn() && a.appConfig.getSecurityConfig().useGeoComply && !this.bypassGeoComply && null == this.getGeoToken()
        }
        requestValidToken(e, o, t, n = !0) {
            this.isUserLoggedIn() ? (e && this.getTokenSuccessCallback.push(e), o && this.getTokenErrorCallback.push(o), t && this.getTokenCancleCallback.push(t), this.isAccountVerificationInProgress || !this.isWhitelistConfigReponseReceived ? this.bypassGeoComply || r.getInstance().isNodeActive() || !n || (this.isGeoComplyCheckPopupShownOnceAfterLogin || this.isWhitelistConfigReponseReceived || (this.isGeoComplyCheckPopupShownOnceAfterLogin = !0), r.getInstance().showMsgI18n({
                iconType: l.IN_PROGRESS,
                enableAutoHide: !1,
                closeCallback: () => {
                    for (; this.getTokenCancleCallback.length > 0;) this.getTokenCancleCallback.shift()();
                    this.clearTokenCallback()
                }
            })) : this.isGeoTokenValid() ? this.fullFillPendingTokenRequest(this.geoToken.token) : (this.fullFillPendingTokenRequest(), this.isSystemTimeIncorrect ? this.showIncorrectSystemTimePopup() : this.checkForNativeError() || this.serverErrorHandler(1001, null, null, null, {
                ErrorType: "NoValidTokenAvailable",
                ErrorDetails: JSON.stringify(this.geoToken)
            }))) : this.clearTokenCallback()
        }
        clearTokenCallback() {
            this.getTokenSuccessCallback = [], this.getTokenErrorCallback = [], this.getTokenCancleCallback = []
        }
        fullFillPendingTokenRequest(e = null) {
            if (this.isUserLoggedIn())
                if (e)
                    for (; this.getTokenSuccessCallback.length > 0;) this.getTokenSuccessCallback.shift()(e);
                else
                    for (; this.getTokenErrorCallback.length > 0;) this.getTokenErrorCallback.shift()();
            this.clearTokenCallback()
        }
        getGeoComplyCheckErrorsCodes(e) {
            let o = {
                code: e.code,
                subRules: [],
                softwareNames: []
            };
            if (e.reason && e.reason.payload) {
                if (e.reason.payload.ruleViolations) {
                    e.reason.payload.ruleViolations.forEach((e => {
                        let t = a.config.getStringData("GeoComplyRuleError_" + e.toString());
                        t && t.length > 0 && o.subRules.push(e)
                    }))
                }
                if (e.reason.payload.software) {
                    e.reason.payload.software.forEach((e => {
                        o.softwareNames.push(e.name)
                    }))
                }
            }
            return o
        }
        getErrorCodeArray(e) {
            let o = [];
            if (a.StringTools.isNumber(e)) o.push({
                code: e.toString(),
                subRules: null,
                softwareNames: null
            });
            else if (a.StringTools.isNumberArray(e)) e.forEach((e => {
                o.push({
                    code: e.toString(),
                    subRules: null,
                    softwareNames: null
                })
            }));
            else if (Array.isArray(e) && e.length > 0) e.forEach((e => {
                let t = this.getGeoComplyCheckErrorsCodes(e);
                o.push(t)
            }));
            else if (e.hasOwnProperty("checks") && Array.isArray(e.checks) && e.checks.length > 0) {
                e.checks.forEach((e => {
                    let t = this.getGeoComplyCheckErrorsCodes(e);
                    o.push(t)
                }))
            }
            return o
        }
        serverErrorHandler(e, o = null, t, n, s = null, i = !0) {
            if (!this.isUserLoggedIn()) return;
            if (console.log("geocomplycocos serverErrorHandler"), console.log(JSON.stringify(e)), this.checkForNativeError()) return;
            var r;
            s && (null == (r = g.getInstance()) || r.trace(h.GeoComply, "GeoComply_Client_Errors", s));
            if (!this.isUserLoggedIn() || this.bypassGeoComply || this.checkForNativeError()) return;
            if (404 == (null == e ? void 0 : e.status)) return a.geoComplyManager.tokenGenerationReason = d.Login, this.setGeoRestriction = !1, this.renewLicense(!0), void(t && this.getTokenSuccessCallback.push(t));
            console.log("GeoComplyCocos serverErrorHandler ", e.toString());
            let l = this.getErrorCodeArray(e),
                c = [],
                u = [],
                p = "GeoComplyErrorGenaralSolutionStep";
            l.forEach((e => {
                if ("1001" == e.code && (this.clearGeoToken(), this.isSystemTimeIncorrect)) this.showIncorrectSystemTimePopup(o, null, n);
                else if (e.subRules && e.subRules.length > 0) e.subRules.forEach((o => {
                    u.push(o);
                    let t = a.config.getStringData("GeoComplyRuleError_" + o.toString());
                    "blocked_software" == o && e.softwareNames && e.softwareNames.length > 0 && (t += " ", t += a.StringTools.formatC(a.config.getStringData("GeoComplyRuleError_2001_software_names"), e.softwareNames.join(", "))), t && t.length > 0 && !c.includes(t) && c.push(t), "blocked_software" == o ? p = "GeoComplyErrorBlockedSoftwareSolutionStep" : ["proxy", "VPN_adapters_rule"].includes(o) && (p = "GeoComplyErrorProxySolutionStep")
                }));
                else {
                    u.push(e.code.toString());
                    let o = a.config.getStringData("GeoComplyRuleError_" + e.code.toString());
                    o && o.length > 0 && !c.includes(o) && c.push(o)
                }
            })), c.length <= 0 ? (c.push(a.config.getStringData("GeoComplyRuleError_2004")), u.push(e.toString())) : c.length > 1 && (p = "GeoComplyErrorGenaralSolutionStep"), i && (i = this.shouldEnableRetryButton(u)), this.showErrorPopup(c, p, o, null == s, t, n, i)
        }
        nativeErrorHandler(e, o = null, t) {
            if (!this.isUserLoggedIn() || this.bypassGeoComply) return;
            let n = [];
            switch (e) {
                case p.REQUEST_TIMEOUT:
                    n.push(a.config.getStringData("GeoComplyVerifyTimeoutRetryText"));
                    break;
                default:
                    n.push(a.config.getStringData("GeoComplyRuleError_2004"))
            }
            let s = this.shouldEnableRetryButton([e.toString()]);
            this.showErrorPopup(n, "GeoComplyErrorGenaralSolutionStep", o, !0, t, null, s)
        }
        showIncorrectSystemTimePopup(e = null, o, t) {
            if (this.forceCloseCheckInProgressPopup(), this.bypassGeoComply) return;
            c.getInstance().showMsg({
                title: a.config.getStringData("ValidationError"),
                texts: [a.config.getStringData("GeoComplyError_Incorrect_System_Time")],
                instructionSteps: [...a.config.getStringDataArray("GeoComplyErrorGenaralSolutionStep")],
                confirmButtonText: a.config.getStringData("selfView_SignOut"),
                confirmCallback: () => {
                    null == o || o(), a.netWorkManager.Logout(!0, null, a.Enum.LogOutReason.GeoComplyPopup)
                },
                enableConfirmButton: !0,
                observeCallback: t,
                callObserverCallbackOnCloseClick: !0,
                cashGameScene: e,
                hideOnClickOfObserve: !0
            })
        }
        showErrorPopup(e, o = null, t = null, n, s, i, r = !1) {
            if (this.forceCloseCheckInProgressPopup(), n && this.bypassGeoComply) return;
            let l = () => {
                    a.netWorkManager.Logout(!0, null, a.Enum.LogOutReason.GeoComplyPopup)
                },
                g = "selfView_SignOut";
            r && (g = "Hotupdate_retrybtn", l = () => {
                this.isAccountVerificationInProgress || (a.geoComplyManager.tokenGenerationReason = d.UserManualRetry, this.renewLicense()), null == s || s()
            });
            let h = [...a.config.getStringDataArray(o)];
            c.getInstance().showMsg({
                title: a.config.getStringData("ValidationError"),
                texts: e,
                instructionSteps: h,
                confirmButtonText: a.config.getStringData(g),
                confirmCallback: l,
                enableConfirmButton: !0,
                observeCallback: i,
                callObserverCallbackOnCloseClick: !0,
                cashGameScene: t,
                hideOnClickOfObserve: !0
            })
        }
        shouldEnableRetryButton(e) {
            for (console.log("GeoComplyCocos shouldEnableRetryButton ", a.appConfig.getSecurityConfig().enableGeoComplyRetryForErrorCodes.toString()); e.length > 0;)
                if (!a.appConfig.getSecurityConfig().enableGeoComplyRetryForErrorCodes.includes(e.shift())) return !1;
            return !0
        }
        showEnableLocationServiceHelpPopup(e, o) {
            if (this.forceCloseCheckInProgressPopup(), !this.isUserLoggedIn() || this.bypassGeoComply) return;
            let t = null;
            n.os == n.OS.ANDROID ? t = "GeoComplyErrorLocationErrorWithStep_Android" : n.os == n.OS.IOS && (t = "GeoComplyErrorLocationErrorWithStep_IOS");
            let s = [],
                i = [];
            if (t) {
                let e = [...a.config.getStringDataArray(t)];
                s.push(e.shift()), i = [...e]
            } else s.push(a.config.getStringData("GeoComplyRuleError_2004")), i = [...a.config.getStringDataArray("GeoComplyErrorGenaralSolutionStep")];
            c.getInstance().showMsg({
                title: a.config.getStringData("ValidationError"),
                texts: s,
                instructionSteps: i,
                confirmButtonText: a.config.getStringData("OpenSettings"),
                confirmCallback: () => {
                    var e;
                    if (n.os === n.OS.ANDROID || n.os === n.OS.IOS) {
                        let e = () => {
                                c.getInstance().hideAllPopup(), this.clearGeoToken()
                            },
                            t = () => {
                                this.tokenGenerationReason = d.OnAppForgroundRetry, this.renewLicense(), this.getTokenSuccessCallback.push(o)
                            };
                        this.registerAppFocusChangeCallbackOnce(e, t)
                    }
                    null == (e = u.getInstance()) || e.openLocationSettings()
                },
                enableConfirmButton: !0,
                observeButtonText: a.config.getStringData("Login_Scene_login_panel_tourist_continue_button"),
                observeCallback: () => {
                    this.isGeoTokenValid() && (null == o || o(this.getGeoToken()))
                },
                callObserverCallbackOnCloseClick: !0,
                cashGameScene: null,
                hideOnClickOfObserve: !0
            })
        }
        registerAppFocusChangeCallbackOnce(e, o) {
            let t = () => {
                    console.log("Geocomplycocos onAppForeground"), s.off(i.EVENT_SHOW, t, this), o()
                },
                r = () => {
                    console.log("Geocomplycocos onAppBackground"), s.off(i.EVENT_HIDE, r, this), e(), s.on(i.EVENT_SHOW, t, this)
                };
            n.isNative && s.on(i.EVENT_HIDE, r, this)
        }
        showLocationPermissionPopup(e) {
            var o;
            console.log("GeoComplyCocos showLocationPermissionPopup");
            let t = [],
                s = [],
                i = [...a.config.getStringDataArray("GeoComplyError_LocationPermission_615_android")];
            t.push(i.shift()), s = [...i];
            let r = "selfView_SignOut",
                l = () => {
                    a.netWorkManager.Logout(!0, null, a.Enum.LogOutReason.GeoComplyPopup)
                };
            this.shouldEnableRetryButton([e.toString()]) && (r = "Hotupdate_retrybtn", l = () => {
                this.checkPermissionAndRenewGeoToken()
            }), null == (o = c.getInstance()) || o.showMsg({
                title: a.config.getStringData("Error"),
                texts: t,
                instructionSteps: s,
                confirmButtonText: a.config.getStringData("OpenSettings"),
                confirmCallback: () => {
                    var e;
                    n.os !== n.OS.ANDROID && n.os !== n.OS.IOS || this.registerAppFocusChangeCallbackOnce((() => {}), (() => {
                        this.checkPermissionAndRenewGeoToken()
                    })), null == (e = u.getInstance()) || e.openLocationSettings()
                },
                enableConfirmButton: !0,
                observeButtonText: a.config.getStringData(r),
                observeCallback: l,
                cashGameScene: null
            })
        }
        checkPermissionAndRenewGeoToken() {
            var e;
            null == (e = c.getInstance()) || e.hideAllPopup(), u.getInstance().initSDK(), setTimeout((() => {
                u.getInstance().isClientInstatiate() && (this.isAccountVerificationInProgress || this.renewLicense())
            }), 500)
        }
    }).instance = null, C = y)) || C);
    o._RF.pop()
}
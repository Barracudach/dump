import * as t from "./cc.js";
import * as e from "./cc.js";
import * as i from "./cv.js";
import * as n from "./PermissionMgr.js";
import * as c from "./LocationMonitor.js";
import * as s from "./LocationMonitor.js";

function main() {
    e._RF.push({}, "6a930reoDpN4LIHTJJ6T5yc", "Security", void 0);
    let r = o("userActionType", function(o) {
            return o.JoinPokerRoom = "JoinPokerRoom", o.JoinCasinoRoom = "JoinCasinoRoom", o.LoginTourist = "LoginTourist", o.Login = "Login", o.JoinSportsBook = "JoinSportsBook", o
        }({})),
        a = o("securityCheckType", function(o) {
            return o[o.Captcha = 0] = "Captcha", o[o.GeoLocation = 1] = "GeoLocation", o[o.GeoLocation_RealMoney = 2] = "GeoLocation_RealMoney", o[o.GeoLocation_Registration = 3] = "GeoLocation_Registration", o[o.CumulativeDepositCheck = 4] = "CumulativeDepositCheck", o[o.ForceLocationPermission = 5] = "ForceLocationPermission", o[o.UserBan = 6] = "UserBan", o[o.DebugSuccess = 7] = "DebugSuccess", o[o.DebugFail = 8] = "DebugFail", o
        }({})),
        h = o("securityMonitorType", function(o) {
            return o[o.Location = 0] = "Location", o
        }({}));
    o("Security", class {
        constructor() {
            this.currentConfig = null, this.locationMonitor = null, this.checksMap = new Map([
                [a.GeoLocation, this.checkGeoLocation.bind(this, c.All)],
                [a.GeoLocation_RealMoney, this.checkGeoLocation.bind(this, c.RealMoneyGames)],
                [a.GeoLocation_Registration, this.checkGeoLocation.bind(this, c.Registration)],
                [a.CumulativeDepositCheck, this.checkCumulativeDepositCheck.bind(this)],
                [a.ForceLocationPermission, this.checkForceLocationPermission.bind(this)],
                [a.UserBan, this.checkUserBan.bind(this)],
                [a.DebugSuccess, this.checkDebug.bind(this, !0)],
                [a.DebugFail, this.checkDebug.bind(this, !1)]
            ]), this.monitorsMap = new Map, this.locationMonitor = new s, this.monitorsMap.set(h.Location, [this.locationMonitor.startLocationMonitoring.bind(this.locationMonitor), this.locationMonitor.stopLocationMonitoring.bind(this.locationMonitor)]), i.native.setScreenCaptureAllowed(i.appConfig.getSecurityConfig().screenCaptureAllowed), i.MessageCenter.register(i.Enum.MessageCenterAction.OnLoginSuccess, this.onLogin.bind(this), this), i.MessageCenter.register("onLogout", this.onLogout.bind(this), this)
        }
        onLogin() {
            i.appConfig.getSecurityConfig().monitor.forEach((o => {
                var e;
                return null == (e = this.monitorsMap.get(o)) ? void 0 : e[0]()
            }))
        }
        onLogout() {
            i.appConfig.getSecurityConfig().monitor.forEach((o => {
                var e;
                return null == (e = this.monitorsMap.get(o)) ? void 0 : e[1]()
            }))
        }
        check(o, e, t) {
            this.currentConfig = {
                currentStep: 0,
                successCallback: o,
                failCallback: e,
                toCheck: t
            }, this.processCurrentSecurityCheck()
        }
        checkFor(o, e, t) {
            this.check(o, e, i.appConfig.getSecurityConfig().getCheck(t))
        }
        TryLogin(o, e) {
            this.checkFor(o, e, r.Login)
        }
        TryLoginTourist(o, e) {
            this.checkFor(o, e, r.LoginTourist)
        }
        tryJoinPokerRoom(o, e) {
            this.checkFor(o, e, r.JoinPokerRoom)
        }
        tryJoinCasinoGameRoom(o, e) {
            this.checkFor(o, e, r.JoinCasinoRoom)
        }
        tryJoinSportsBook(o, e) {
            this.checkFor(o, e, r.JoinSportsBook)
        }
        processCurrentSecurityCheck() {
            var o, e;
            null == this.currentConfig && (null == (o = (e = this.currentConfig).successCallback) || o.call(e));
            if (this.currentConfig.currentStep >= this.currentConfig.toCheck.length) {
                var t, i;
                null == (t = (i = this.currentConfig).successCallback) || t.call(i)
            } else {
                let o = this.currentConfig.toCheck[this.currentConfig.currentStep];
                this.checksMap.get(o) ? this.checksMap.get(o)() : this.nextSecurityCheck()
            }
        }
        nextSecurityCheck() {
            this.currentConfig.currentStep++, this.processCurrentSecurityCheck()
        }
        onGeneralResponse(o) {
            var e, i;
            (t("[Security] => Step " + this.currentConfig.currentStep + " -> " + a[this.currentConfig.toCheck[this.currentConfig.currentStep]] + " = passed? " + o), o) ? this.nextSecurityCheck(): null == (e = (i = this.currentConfig).failCallback) || e.call(i, this.currentConfig.toCheck[this.currentConfig.currentStep])
        }
        checkGeoLocation(o) {
            this.locationMonitor.checkGeolocation(this.onGeneralResponse.bind(this), o)
        }
        checkCumulativeDepositCheck() {
            i.rg.checkCumulativeDeposit(this.onGeneralResponse.bind(this))
        }
        checkUserBan() {
            i.dataHandler.getUserData().isban ? (i.TT.showMsg(i.config.getStringData("ServerErrorCode501"), i.Enum.ToastType.ToastTypeInfo), this.onGeneralResponse(!1)) : this.onGeneralResponse(!0)
        }
        checkForceLocationPermission() {
            i.permMgr.forcePermission(n.Location, this.onGeneralResponse.bind(this))
        }
        checkDebug(o) {
            setTimeout((() => {
                this.onGeneralResponse(o)
            }), 2e3)
        }
    }), e._RF.pop()
}
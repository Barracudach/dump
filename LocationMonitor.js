import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cv.js";

function main() {
    o._RF.push({}, "07eacVFcJRPRKnnfDMZ7zgb", "LocationMonitor", void 0);
    let i = t("GeoLocationCheck", function(t) {
        return t[t.RealMoneyGames = 1] = "RealMoneyGames", t[t.Registration = 2] = "Registration", t[t.All = 3] = "All", t
    }({}));
    t("LocationMonitor", class {
        constructor() {
            this.checkIntervalID = null, this.checkIntervalSeconds = 60, this.callbackHandler = null, this.lastSentLocation = new n(n.ZERO), this.distanceTolerance = 10, this.retryInterval = 2e3
        }
        checkGeolocation(t, o = i.All) {
            t ? (this.callbackHandler = t, this.getLocationDetails(this.onGetLocationSuccess2.bind(this, o), null, !0)) : this.getLocationDetails(this.onGetLocationSuccess.bind(this, o), null, !0)
        }
        geolocationMonitor() {
            let t = a.native.GetLocation(),
                o = t.latitude,
                e = t.longitude;
            this._distanceInMeter(o, e, this.lastSentLocation.x, this.lastSentLocation.y) <= this.distanceTolerance || (this.lastSentLocation = new n(o, e), this.checkGeolocation())
        }
        _distanceInMeter(t, o, n, e) {
            let i = a.tools.degreesToRadians(t),
                s = a.tools.degreesToRadians(n),
                l = s - i,
                c = a.tools.degreesToRadians(e) - a.tools.degreesToRadians(o);
            var r = Math.sin(l / 2) * Math.sin(l / 2) + Math.sin(c / 2) * Math.sin(c / 2) * Math.cos(i) * Math.cos(s);
            return 1e3 * (6371 * (2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r))))
        }
        onGetLocationSuccess(t) {
            if ("locationStatus" in t && null != t.locationStatus) {
                let o = t.locationStatus;
                0 == o.registrationAllowed ? (this.performLogout(), a.popUp.showMsgI18n({
                    txt: "geolocation_check_login",
                    iconType: a.Enum.PopUpIconType.Location,
                    msgType: a.Enum.ToastType.ToastTypeWarning
                })) : 0 == o.realMoneyGamesAllowed && 0 == a.dataHandler.getUserData().isTouristUser && a.roomManager.getTotalRooms() > 0 && (a.roomManager.RequestLeaveAllRooms(), a.popUp.showMsgI18n({
                    txt: "geolocation_check_game",
                    iconType: a.Enum.PopUpIconType.Location,
                    msgType: a.Enum.ToastType.ToastTypeWarning
                }))
            }
        }
        onGetLocationSuccess2(t, o) {
            if ("locationStatus" in o && null != o.locationStatus) {
                let l = o.locationStatus;
                var n;
                if (t & i.Registration && 0 == l.registrationAllowed) a.popUp.showMsgI18n({
                    txt: "geolocation_check_login",
                    iconType: a.Enum.PopUpIconType.Location,
                    msgType: a.Enum.ToastType.ToastTypeWarning
                }), null == (n = this.callbackHandler) || n.call(this, !1);
                else if (t & i.RealMoneyGames && 0 == l.realMoneyGamesAllowed) {
                    var e;
                    a.popUp.showMsgI18n({
                        txt: "geolocation_check_game",
                        iconType: a.Enum.PopUpIconType.Location,
                        msgType: a.Enum.ToastType.ToastTypeWarning
                    }), null == (e = this.callbackHandler) || e.call(this, !1)
                } else {
                    var s;
                    null == (s = this.callbackHandler) || s.call(this, !0)
                }
            } else {
                var l;
                a.popUp.showMsgI18n({
                    txt: "ToastMessage8",
                    iconType: a.Enum.PopUpIconType.Location,
                    msgType: a.Enum.ToastType.ToastTypeError
                }), null == (l = this.callbackHandler) || l.call(this, !1)
            }
        }
        performLogout() {
            a.dataHandler.getUserData().isLoggedIn() && a.netWorkManager.Logout(!0, null, a.Enum.LogOutReason.LocationNotAllowed)
        }
        startLocationMonitoring() {
            this.stopLocationMonitoring(), this.geolocationMonitor(), this.checkIntervalID = setInterval(this.geolocationMonitor.bind(this), 1e3 * this.checkIntervalSeconds)
        }
        stopLocationMonitoring() {
            null != this.checkIntervalID && (clearInterval(this.checkIntervalID), this.checkIntervalID = null)
        }
        getLocationDetails(t, o = (() => {}), n = !1, i = 0) {
            let s = a.native.GetLocation(),
                l = "?Latitude=" + s.latitude + "&Longitude=" + s.longitude;
            if (this.isInvalidLocation(s) && i > 0) return i--, void setTimeout((() => {
                this.getLocationDetails(t, o, n, i)
            }), this.retryInterval);
            let c = a.config.getStringData("WEB_API_GET_LOCATION", !0) + l;
            a.http.sendRequestV2(c, {}, (o => {
                !0 === n ? null == t || t(o) : this.hasLocationInfo(o) && (null == t || t(this.getLocationInfo(o, this))), a.dataHandler.getUserData().countryISO2 || (a.dataHandler.getUserData().countryISO2 = this.getLocationInfo(o, this))
            }), (t => {
                o ? o(t) : e(t)
            }), a.http.HttpRequestType.GET, a.http.HttpParseType.NONE, !1)
        }
        getLocationInfo(t, o) {
            if (o.hasLocationInfo(t)) {
                return t.locationInformation.countryShortName ?? ""
            }
            return ""
        }
        hasLocationInfo(t) {
            if ("locationInformation" in t && null != t.locationInformation) {
                let o = t.locationInformation;
                if ("countryShortName" in o && null != o.countryShortName) return !0
            }
            return !1
        }
        isInvalidLocation(t) {
            return null == t || "" == t.latitude && "" == t.longitude || 1 == t.latitude && 1 == t.longitude
        }
    }), o._RF.pop()
}
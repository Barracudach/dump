import * as e from "./cc.js";
import * as s from "./cv.js";
import * as o from "./CrashTracing.js";
import * as r from "./CrashTracing.js";

function main() {
    e._RF.push({}, "bdab0ctdXhJ2o0tPvKoyrdN", "SportsBookApi", void 0);
    let a = t("SportsBookEnum", function(t) {
        return t.provider = "saba", t
    }({}));
    class n {
        constructor() {
            this._requests = {}
        }
        get startURL() {
            return s.config.getStringData("WEB_SPORTS_BOOK_START", !0)
        }
        get settleBalanceURL() {
            return s.config.getStringData("WEB_SPORTS_BOOK_SETTLE_BALANCE", !0)
        }
        fetchStart(t, e) {
            var i;
            this.stopStart(!0);
            let l = this.startURL;
            l += this.getSportsBookParams();
            let p = null == (i = s.geoComplyManager) ? void 0 : i.getGeoToken(),
                u = {
                    sportProvider: a.provider,
                    geoComplyToken: p ?? s.getEmptyGUID()
                };
            const c = s => {
                    s && s.sportsBookUrl ? t(s.sportsBookUrl) : e(s), this.stopStart(!0)
                },
                h = t => {
                    let a = this._requests[this.startURL];
                    if (a) {
                        var i;
                        if (a.retryCount >= n.MAX_RETRIES) return e(t), this.stopStart(!0), void(null == (i = r.getInstance()) || i.trace(o.WebView, "SportsBookApiFailure", {
                            url: l,
                            reason: t
                        }, !1, !0));
                        ++a.retryCount, this.stopStart(!1), a.request = s.http.sendRequestV2(l, u, c.bind(this), h.bind(this), s.http.HttpRequestType.POST, s.http.HttpParseType.NONE, !1, !1, !1, null, !0)
                    }
                },
                g = {
                    request: s.http.sendRequestV2(l, u, c.bind(this), h.bind(this), s.http.HttpRequestType.POST, s.http.HttpParseType.NONE, !1, !1, !1, null, !0),
                    retryCount: 0,
                    successCallback: t,
                    errorCallback: e
                };
            this._requests[this.startURL] = g
        }
        stopStart(t) {
            let e = this._requests[this.startURL];
            e && this.stopRequest(e.request), t && (this._requests[this.startURL] = null, delete this._requests[this.startURL])
        }
        postSettleBalance(t, e) {
            this.stopSettleBalance(!0);
            let a = this.settleBalanceURL;
            a += this.getSportsBookParams();
            let i = {};
            const l = e => {
                    null == t || t(), this.stopSettleBalance(!0)
                },
                p = t => {
                    let u = this._requests[this.settleBalanceURL];
                    if (u) {
                        var c;
                        if (u.retryCount >= n.MAX_RETRIES) return e(t), this.stopSettleBalance(!0), void(null == (c = r.getInstance()) || c.trace(o.WebView, "SportsBookApiFailure", {
                            url: a,
                            reason: t
                        }, !1, !0));
                        ++u.retryCount, this.stopSettleBalance(!1), u.request = s.http.sendRequestV2(a, i, l.bind(this), p.bind(this), s.http.HttpRequestType.POST, s.http.HttpParseType.NONE, !1, !1, !1, null, !0)
                    }
                },
                u = {
                    request: s.http.sendRequestV2(a, i, l.bind(this), p.bind(this), s.http.HttpRequestType.POST, s.http.HttpParseType.NONE, !1, !1, !1, null, !0),
                    retryCount: n.MAX_RETRIES,
                    successCallback: t,
                    errorCallback: e
                };
            this._requests[this.settleBalanceURL] = u
        }
        stopSettleBalance(t) {
            let e = this._requests[this.settleBalanceURL];
            e && this.stopRequest(e.request), t && (this._requests[this.settleBalanceURL] = null, delete this._requests[this.settleBalanceURL])
        }
        getSportsBookParams() {
            var t;
            let e;
            e = s.dataHandler.getUserData().isLoggedIn() && !s.dataHandler.getUserData().isTouristUser ? "?locale=" + s.config.getCurrentLanguageDetails().code + "&userId=" + s.dataHandler.getUserData().getUserId() + "&sessionId=" + s.dataHandler.getUserData().getUserToken() + "&platform=" + (s.appConfig.isLandscapeLayout ? "desktop" : "mobile") : "?locale=" + s.config.getCurrentLanguageDetails().code + "&platform=" + (s.appConfig.isLandscapeLayout ? "desktop" : "mobile");
            let r = null == (t = s.geoComplyManager) ? void 0 : t.getGeoToken();
            return r && (e += "&geoComplyToken=" + encodeURIComponent(r)), e += "&bundleID=" + encodeURIComponent(s.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), e += "&licenseType=" + encodeURIComponent(s.appConfig.getGeneralConfig().bunderConfig.AppLicenseType), e += "&theme=" + encodeURIComponent(s.appConfig.getDesignConfig().webViewThemeUse), e
        }
        stopRequest(t) {
            t && t instanceof XMLHttpRequest && 4 != t.readyState && "function" == typeof t.abort && t.abort()
        }
    }
    t("SportsBookApi", n), n.MAX_RETRIES = 1, e._RF.pop()
}
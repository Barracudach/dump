import * as t from "./cc.js";

function main() {
    t._RF.push({}, "2ae33smQ4ZAJoftg6UywBuW", "SecurityConfig", void 0);
    e("SecurityConfig", class {
        getCheck(e) {
            return this.check && this.check[e] ? this.check[e] : []
        }
        constructor(...e) {
            this.screenCaptureAllowed = !0, this.monitor = [], this.timeoutLogout = 15, this.useGeoComply = !1, this.bypassGeoComply = !0, this.enableGeoComplyGeneralNRLogging = !0, this.enableGeoComplyRetryForErrorCodes = [], this.enableGeoComplyIpChangeService = !0, this.cachePlayerLocks = !1, this.CFTurnstileCaptchaHidden = !1, this.addCaptchaFieldFromClient = !0, this.check = {}, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
    }), t._RF.pop()
}
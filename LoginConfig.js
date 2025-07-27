import * as i from "./cc.js";
import * as n from "./Enum.js";

function main() {
    i._RF.push({}, "ac31cBcjZVHv67b3aCHhaSH", "LoginConfig", void 0);
    t("LoginConfig", class {
        constructor(...t) {
            this.autoLogin = !0, this.guestAutoLogin = !1, this.isGuestLoginAllowed = !0, this.checkNDRPStatus = !1, this.isPhoneAndEmailLoginModeEnable = !1, this.defaultUserLoginMode = n.Email, this.phone = {
                country: [],
                countryIgnore: []
            }, this.set(...t)
        }
        set(...t) {
            Object.assign(this, ...t)
        }
    }), i._RF.pop()
}
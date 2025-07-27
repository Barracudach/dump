import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./EditBoxValidator.js";
import * as a from "./cv.js";

function main() {
    var c;
    o._RF.push({}, "e5959c/fmFLHrJupZA2MpF6", "LocationField", void 0);
    const {
        ccclass: r
    } = n;
    t("default", r(c = class extends s {
        constructor(...t) {
            super(...t), this.location = null
        }
        start() {
            this.getLocation(), this.node.active = !1, this.constraints.forEach((t => {
                t.isRequired = !1
            })), i.on(e.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        onDestroy() {
            i.off(e.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        clear() {
            this.value = "", this.getLocation()
        }
        onAppEnterForeground() {
            this.value || (a.popUp.hidePopupWithMsgTxt(a.config.getStringData("ToastMessage8")), a.security.locationMonitor.getLocationDetails(this.onGetLocationSuccess.bind(this), this.onGetLocationFailed.bind(this), !0, 2))
        }
        getLocation() {
            this.location = a.native.GetLocation(), a.security.locationMonitor.getLocationDetails(this.onGetLocationSuccess.bind(this), this.onGetLocationFailed.bind(this), !0)
        }
        onGetLocationSuccess(t) {
            if ("locationInformation" in t && null != t.locationInformation) {
                let o = t.locationInformation;
                return "fomattedAddress" in o && null != o.fomattedAddress ? void(this.value = (o.fomattedAddress ?? " ") + "") : void(this.value = (o.streetAddress ?? "") + ", " + (o.countrySubAreaLongName ?? "") + ", " + (o.countryLongName ?? ""))
            }
            a.popUp.showMsgI18n({
                txt: "ToastMessage8",
                sureCallback: this.goBackToLogin.bind(this),
                msgType: a.Enum.ToastType.ToastTypeError
            })
        }
        onGetLocationFailed(t) {
            a.popUp.showFirstServerError(t, this.goBackToLogin.bind(this))
        }
        goBackToLogin() {
            a.authenticator.logOutAndDoGuestLogin()
        }
        setValueFromObj(t) {
            this.schemaKey in t && (this.location = t[this.schemaKey])
        }
        addValueToObject(t) {
            t[this.schemaKey] = this.location
        }
    }) || c);
    o._RF.pop()
}
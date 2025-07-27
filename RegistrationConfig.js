import * as e from "./cc.js";
import * as i from "./Enum.js";

function main() {
    e._RF.push({}, "5d154Jxw7JH+L9Q68bK7J82", "RegistrationConfig", void 0);
    t("RegistrationConfig", class {
        constructor(...t) {
            this.legalDocumentContentType = i.HTML, this.useLocalSchema = !1, this.showGenderField = !0, this.canSelectAllAtOnce = !0, this.legalDocs = [], this.localSchema = void 0, this.verificationForm = {
                urlKey: "WEB_API_USERP_VERIFICATION_SUBMIT_PUBLIC"
            }, this.userInfoForm = {
                urlKey: "WEB_API_POST_REGISTRATION_USER_VERIFY"
            }, this.termsOfServiceForm = {
                urlKey: "WEB_API_POST_REGISTRATION_USER"
            }, this.legalDocsNamePrefix = "", this.set(...t)
        }
        set(...t) {
            Object.assign(this, ...t)
        }
    }), e._RF.pop()
}
import * as r from "./cc.js";
import * as s from "./FormValidator.js";

function main() {
    r._RF.push({}, "b2ec0lZAPJEhYUJWjB4XmKf", "FormsConfig", void 0);
    e("FormsConfig", class {
        constructor(...e) {
            this.phone = {
                useNestedSchema: !0,
                includePlusSign: !0,
                country: []
            }, this.password = {
                key: "password",
                modifier: null,
                min: 8,
                max: 20,
                strength: s.Full,
                showRepeatPassword: !1,
                validations: {
                    ExtraStrong: {
                        regExp: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\~\`\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\;\"\'\|\\\<\,\>\.\?\/]).*$/,
                        errorMessage: "ErrorValidPassword"
                    },
                    Strong: {
                        regExp: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                        errorMessage: "ErrorValidPassword_Strong"
                    },
                    Uppercase: {
                        regExp: /^(?=.*[A-Z])(?=.*[a-z]).*$/,
                        errorMessage: "ErrorValidPassword_Uppercase"
                    },
                    Number: {
                        regExp: /^(?=.*[a-z])(?=.*[0-9]).*$/,
                        errorMessage: "ErrorValidPassword_Number"
                    },
                    Symbol: {
                        regExp: /^(?=.*[a-z])(?=.*[\~\`\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\;\"\'\|\\\<\,\>\.\?\/]).*$/,
                        errorMessage: "ErrorValidPassword_Symbol"
                    }
                },
                regexpHints: {}
            }, this.loginUsername = {
                key: "login"
            }, this.code = {
                key: "code"
            }, this.verificationCode = {
                key: "verificationCode"
            }, this.invitationCode = {
                key: "invitationCode"
            }, this.userName = {
                key: "userName",
                regexp: /^[a-z]+[a-z0-9]*$/i,
                errorMessagei18Key: "ErrorValidOnlyLettersAndNumbers",
                regexpHints: {}
            }, this.forgotpassword = {
                popupMessagei18Key: "Reset_Password_verification_code_sent"
            }, this.dob = {
                minAge: 18,
                addZeroInDay: !0
            }, this.canUseAlternativeForgotPassword = !0, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
    }), r._RF.pop()
}
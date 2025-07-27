import * as n from "./cc.js";
import * as i from "./WPTG.js";
import * as o from "./WPTG.js";
import * as t from "./GeneralConfig.js";
import * as r from "./GeneralConfig.js";
import * as a from "./GeneralConfig.js";
import * as s from "./RegistrationConfig.js";
import * as g from "./LoginConfig.js";
import * as l from "./LobbyConfig.js";
import * as p from "./Enum.js";
import * as f from "./Enum.js";
import * as C from "./UserProfileConfig.js";
import * as u from "./FormsConfig.js";
import * as c from "./FormValidator.js";
import * as d from "./ModulesConfig.js";
import * as b from "./VariantConfigData.js";

function main() {
    n._RF.push({}, "c08a9G9yEFJ74ra5Ypy+4sS", "WPTGO", void 0);
    let m = a.KR,
        y = {
            bunder_AppID: "com.wptasia.wpt",
            AppId: "074647C7-A911-47BC-8093-DFFD6B626981",
            AppleBundleID: "com.wptasia.wpt",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "WPTGO",
            MyAppURL: "https://wptgo.com/",
            MyAppIcon: "wptgo",
            WebAppTitle: "WPTGO-Play"
        };
    y.AppLicenseType = m;
    let h = {
            branch_Enable: !0,
            branch_Schema: "wptg",
            branch_KeyDev: "key_test_gymzWGiHT1OPAUL0WF2pXjodFvb6whct",
            branch_KeyProd: "key_live_lFpx2IjJNWRTtJO60tYl6gcgszl6tial",
            branch_LinkDomain_Live: "applinks:wptgo.app.link",
            branch_LinkDomain_Alt_Live: "applinks:wptgo-alternate.app.link",
            branch_LinkDomain_Test: "applinks:wptgo.test-app.link",
            branch_LinkDomain_Alt_Test: "applinks:wptgo-alternate.test-app.link"
        },
        w = {
            appsflyer_Enable: !0,
            appsflyer_Schema: "wptg",
            appsflyer_KeyDev: "6V3kqx7ULwPdhuYMTeydAT",
            appsflyer_AndroidChannel: "WPT",
            appsflyer_OneLinkPath: "/uI4c",
            appsflyer_AppleAppID: "6477695977",
            appsflyer_LinkDomain: "wptgo.onelink.me"
        },
        E = new g(i.loginConfig, {
            guestAutoLogin: !0,
            isGuestLoginAllowed: !1,
            isPhoneAndEmailLoginModeEnable: !0,
            defaultUserLoginMode: f.Email
        }),
        A = new g(o.loginConfig, {
            guestAutoLogin: !0,
            isGuestLoginAllowed: !1,
            isPhoneAndEmailLoginModeEnable: !0,
            defaultUserLoginMode: f.Email
        }),
        P = {
            email: {
                name: "customercare@wptgo.com",
                value: "customercare@wptgo.com"
            },
            emailPaymentRelated: {
                name: "",
                value: ""
            },
            emailForKYCDocuments: {
                name: "",
                value: ""
            },
            emailForResponsibleGaming: {
                name: "",
                value: ""
            },
            useCustomWebPage: !1,
            showProminent: !1
        },
        _ = new r(i.generalConfig, {
            bunderConfig: y,
            userValidationMethod: t.Phone,
            enableFreshchat: !1,
            playerSupportLiveChat: !0,
            BrandName: "WPT",
            registeredTitle: "WPTGO",
            inviteCodePrefix: "WPTA_INVITE_CODE=",
            helpLine: P,
            enableKycVerification: !1,
            enableInviteFriend: !0
        }),
        T = new r(o.generalConfig, {
            bunderConfig: y,
            userValidationMethod: t.Phone,
            enableFreshchat: !1,
            playerSupportLiveChat: !0,
            BrandName: "WPT",
            registeredTitle: "WPTGO",
            inviteCodePrefix: "WPTA_INVITE_CODE=",
            helpLine: P,
            enableKycVerification: !1,
            enableInviteFriend: !0
        }),
        D = new s(i.registrationConfig, {
            legalDocs: []
        }),
        F = new s(o.registrationConfig, {
            legalDocs: []
        }),
        L = new l(i.lobbyConfig, {
            cashier: {
                ...i.lobbyConfig.cashier,
                tabsToBeEnabled: p.Transfer | p.Records
            },
            showNotificationIcon: !1
        }),
        k = new l(o.lobbyConfig, {
            cashier: {
                ...o.lobbyConfig.cashier,
                tabsToBeEnabled: p.Transfer | p.Records
            },
            showNotificationIcon: !1
        }),
        M = new u(i.formsConfig, {
            phone: {
                ...i.formsConfig.phone,
                country: ["KR", "VN", "TH"]
            },
            userName: {
                key: "userName",
                regexp: /^[A-Za-z0-9\uAC00-\uD7AF\u0E00-\u0E7FÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ]+$/,
                errorMessagei18Key: "ErrorValidUsername_KR",
                regexpHints: {
                    0: {
                        regExpString: "/^[a-z\\uAC00-\\uD7AF\\u4E00-\\u9FFF\\u0E00-\\u0E7FÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýÇçĂăĐđĨĩŨũƠơƯưẠ-ỹ].*$/i",
                        errorMessage: "ErrorValidStartWithLetter"
                    },
                    1: {
                        regExpString: "/^[a-z0-9\\uAC00-\\uD7AF\\u4E00-\\u9FFF\\u0E00-\\u0E7FÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýÇçĂăĐđĨĩŨũƠơƯưẠ-ỹ]+$/i",
                        errorMessage: "ErrorValidOnlyCharsAndNr_GO"
                    }
                }
            },
            password: {
                key: "password",
                modifier: null,
                min: 4,
                max: 20,
                strength: c.Strong,
                showRepeatPassword: !1,
                validations: {
                    ...i.formsConfig.password.validations,
                    Strong: {
                        regExp: /^(?=.*[A-Za-z\uAC00-\uD7AF\u0E00-\u0E7FÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ].*[A-Za-z\uAC00-\uD7AF\u0E00-\u0E7FÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ])(?=.*\d)(?=.*[\~\`\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\;\"\'\|\\\<\,\>\.\?\/]).+$/,
                        errorMessage: "ErrorValidPassword_KR"
                    }
                },
                regexpHints: {
                    0: {
                        regExpString: "/^(?=.*[A-Z\\uAC00-\\uD7AFÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĐĨŨƠƯẠ-ỹ])(?=.*[a-z\\uAC00-\\uD7AFàáâãèéêìíòóôõùúýăđĩũơưẠ-ỹ]).*$/",
                        errorMessage: "ErrorValidOneUppercaseOneLowercase"
                    },
                    1: {
                        regExpString: "/^(?=.*[0-9]).*$/",
                        errorMessage: "ErrorValidOneNumber"
                    },
                    2: {
                        regExpString: "/^(?=.*[\\~\\`\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\\\_\\+\\-\\=\\{\\}\\[\\]\\:\\;\\''\\'\\|\\\\\\<\\,\\>\\.\\?\\/]).*$/",
                        errorMessage: "ErrorValidOneSpecialChar"
                    }
                }
            },
            forgotpassword: {
                popupMessagei18Key: "Reset_Password_verification_code_sent"
            }
        }),
        v = new u(M),
        W = new C(i.userProfileConfig, {
            showMyStats: !0,
            tcEnabled: !1,
            ppEnabled: !1,
            kycEnabled: !1,
            feedbackEnabled: !1
        }),
        S = new C(o.userProfileConfig, {
            showMyStats: !0,
            tcEnabled: !1,
            ppEnabled: !1,
            kycEnabled: !1,
            feedbackEnabled: !1
        }),
        G = new d(i.modulesConfig, {
            appsflyerConfig: w,
            branchConfig: h
        }),
        I = new d(o.modulesConfig, {
            appsflyerConfig: w,
            branchConfig: h
        });
    e("WPTGOConfigMobile", {
        generalConfig: _,
        loginConfig: E,
        registrationConfig: D,
        lobbyConfig: L,
        userProfileConfig: W,
        gameConfig: i.gameConfig,
        modulesConfig: G,
        securityConfig: i.securityConfig,
        formsConfig: M,
        walletConfig: i.walletConfig,
        filterDelemeterConfig: i.filterDelemeterConfig,
        designConfig: i.designConfig,
        variableConfigData: b.getData(),
        honeyPotConfig: i.honeyPotConfig
    }), e("WPTGOConfigLandscape", {
        generalConfig: T,
        loginConfig: A,
        registrationConfig: F,
        lobbyConfig: k,
        userProfileConfig: S,
        gameConfig: o.gameConfig,
        modulesConfig: I,
        securityConfig: o.securityConfig,
        formsConfig: v,
        walletConfig: o.walletConfig,
        filterDelemeterConfig: o.filterDelemeterConfig,
        designConfig: o.designConfig,
        variableConfigData: b.getData(),
        honeyPotConfig: o.honeyPotConfig
    });
    n._RF.pop()
}
import * as e from "./cc.js";
import * as i from "./WPTG.js";
import * as o from "./GeneralConfig.js";
import * as a from "./GeneralConfig.js";
import * as t from "./LoginConfig.js";
import * as l from "./RegistrationConfig.js";
import * as g from "./ModulesConfig.js";
import * as p from "./VariantConfigData.js";
import * as f from "./LobbyConfig.js";
import * as r from "./GameConfig.js";

function main() {
    e._RF.push({}, "d02e2pCRK1Hib5MC1AYS/0U", "WPTGMXStore", void 0);
    let s = o.MX,
        C = {
            bunder_AppID: "com.wptglobal.wptgmx",
            AppId: "88AAC8FB-80D7-483B-B58B-508FD8076895",
            AppleTeamID: "T7U59Z9TAA",
            AppleIssuerID: "3d31dc0b-2bf4-47af-a618-e1e8f501d7a2",
            AppleKeyID: "BUR8MALQ77",
            MyAppPublisher: "WPT Global",
            MyAppURL: "https://wptglobal.mx/",
            MyAppIcon: "wptgmx",
            WebAppTitle: "WPT-Play"
        };
    C.AppLicenseType = s;
    let b = new t(i.loginConfig, {
            guestAutoLogin: !1,
            isGuestLoginAllowed: !1,
            isPhoneAndEmailLoginModeEnable: !1
        }),
        c = new a(i.generalConfig, {
            bunderConfig: C,
            FAQ_url: "https://wptglobal.mx/faq",
            enableKycVerification: !1,
            enableInviteFriend: !0
        }),
        u = new l(i.registrationConfig, {}),
        m = new g(i.modulesConfig, {
            appsflyerConfig: {
                appsflyer_Enable: !0,
                appsflyer_Schema: "wptg",
                appsflyer_KeyDev: "6V3kqx7ULwPdhuYMTeydAT",
                appsflyer_AndroidChannel: "",
                appsflyer_OneLinkPath: "/T30m",
                appsflyer_AppleAppID: "1642905126",
                appsflyer_LinkDomain: "wptglobal.onelink.me"
            },
            branchConfig: {
                branch_Enable: !0,
                branch_Schema: "wptg",
                branch_KeyDev: "key_test_biZQjuaRZUTyn1qb8ZcRphlfFBj0vBhu",
                branch_KeyProd: "key_live_oe2LjrhN9IHzl8rm6JRW0inbzAg3EBbd",
                branch_LinkDomain_Live: "applinks:wptglobal.app.link",
                branch_LinkDomain_Alt_Live: "applinks:wptglobal-alternate.app.link",
                branch_LinkDomain_Test: "applinks:wptglobal.test-app.link",
                branch_LinkDomain_Alt_Test: "applinks:wptglobal-alternate.test-app.link"
            }
        }),
        y = new f(i.lobbyConfig, {
            showSportsBook: !1
        }),
        _ = {
            ...i.gameConfig.miniGameConfig
        };
    Object.assign(_, {
        showRedEnvelop: !1,
        showMexicoDisclaimerAndCurrencyConversion: !0
    });
    let A = new r(i.gameConfig, {
        redEnvelopeEnabled: !1,
        miniGameConfig: _
    });
    n("WPTGMXStoreConfig", {
        generalConfig: c,
        loginConfig: b,
        registrationConfig: u,
        lobbyConfig: y,
        userProfileConfig: i.userProfileConfig,
        gameConfig: A,
        modulesConfig: m,
        securityConfig: i.securityConfig,
        formsConfig: i.formsConfig,
        walletConfig: i.walletConfig,
        filterDelemeterConfig: i.filterDelemeterConfig,
        designConfig: i.designConfig,
        variableConfigData: p.getData(),
        honeyPotConfig: i.honeyPotConfig
    });
    e._RF.pop()
}
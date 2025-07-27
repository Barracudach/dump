import * as e from "./cc.js";
import * as i from "./WPTG.js";
import * as o from "./GeneralConfig.js";
import * as a from "./GeneralConfig.js";
import * as t from "./LoginConfig.js";
import * as l from "./ModulesConfig.js";
import * as p from "./VariantConfigData.js";
import * as g from "./LobbyConfig.js";

function main() {
    e._RF.push({}, "1ad52fOoeNPsINu62u0bpUj", "WPTGBRStore", void 0);
    let f = o.ROW,
        r = {
            bunder_AppID: "com.wptglobal.wptgbr",
            AppId: "88AAC8FB-80D7-483B-B58B-508FD8076895",
            AppleTeamID: "T7U59Z9TAA",
            AppleIssuerID: "3d31dc0b-2bf4-47af-a618-e1e8f501d7a2",
            AppleKeyID: "BUR8MALQ77",
            MyAppPublisher: "WPT Global",
            MyAppURL: "https://wptglobal.com/",
            MyAppIcon: "wptgbr",
            WebAppTitle: "WPT-Play"
        };
    r.AppLicenseType = f;
    let s = new t(i.loginConfig, {
            guestAutoLogin: !1,
            isGuestLoginAllowed: !1
        }),
        C = new a(i.generalConfig, {
            bunderConfig: r,
            enableKycVerification: !1,
            enableStatusView: !1,
            enableInviteFriend: !0
        }),
        b = new l(i.modulesConfig, {
            appsflyerConfig: {
                appsflyer_Enable: !0,
                appsflyer_Schema: "wptg",
                appsflyer_KeyDev: "6V3kqx7ULwPdhuYMTeydAT",
                appsflyer_AndroidChannel: "WPT",
                appsflyer_OneLinkPath: "/pCnM",
                appsflyer_AppleAppID: "6444660523",
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
        c = new g(i.lobbyConfig, {
            showSportsBook: !1
        });
    n("WPTGBRStoreConfig", {
        generalConfig: C,
        loginConfig: s,
        registrationConfig: i.registrationConfig,
        lobbyConfig: c,
        userProfileConfig: i.userProfileConfig,
        gameConfig: i.gameConfig,
        modulesConfig: b,
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
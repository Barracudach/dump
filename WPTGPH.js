import * as e from "./cc.js";
import * as i from "./WPTG.js";
import * as o from "./WPTG.js";
import * as t from "./GeneralConfig.js";
import * as a from "./GeneralConfig.js";
import * as g from "./RegistrationConfig.js";
import * as l from "./LoginConfig.js";
import * as f from "./UserProfileConfig.js";
import * as s from "./FormsConfig.js";
import * as r from "./ModulesConfig.js";
import * as p from "./LobbyConfig.js";
import * as C from "./VariantConfigData.js";

function main() {
    e._RF.push({}, "a61536MrQFLpZhU/jzCXSZ6", "WPTGPH", void 0);
    let b = a.PH,
        c = {
            bunder_AppID: "com.wptglobal.wptgph",
            AppId: "53D9F154-4C28-4462-9EC5-0F37ADB41163",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "WPT Global",
            MyAppURL: "https://wptglobal.ph/",
            MyAppIcon: "wptgph",
            WebAppTitle: "WPT-Play"
        };
    c.AppLicenseType = b;
    let h = {
            branch_Enable: !0,
            branch_Schema: "wptg",
            branch_KeyDev: "key_test_biZQjuaRZUTyn1qb8ZcRphlfFBj0vBhu",
            branch_KeyProd: "key_live_oe2LjrhN9IHzl8rm6JRW0inbzAg3EBbd",
            branch_LinkDomain_Live: "applinks:wptglobal.app.link",
            branch_LinkDomain_Alt_Live: "applinks:wptglobal-alternate.app.link",
            branch_LinkDomain_Test: "applinks:wptglobal.test-app.link",
            branch_LinkDomain_Alt_Test: "applinks:wptglobal-alternate.test-app.link"
        },
        y = {
            appsflyer_Enable: !0,
            appsflyer_Schema: "wptg",
            appsflyer_KeyDev: "6V3kqx7ULwPdhuYMTeydAT",
            appsflyer_AndroidChannel: "WPT",
            appsflyer_OneLinkPath: "/UmbE",
            appsflyer_AppleAppID: "1608853062",
            appsflyer_LinkDomain: "wptglobal.onelink.me"
        },
        u = new l(o.loginConfig, {
            guestAutoLogin: !0,
            isGuestLoginAllowed: !1,
            checkNDRPStatus: !0
        }),
        w = new l(i.loginConfig, {
            guestAutoLogin: !0,
            isGuestLoginAllowed: !1,
            checkNDRPStatus: !0
        }),
        P = new t(o.generalConfig, {
            bunderConfig: c,
            enableFreshchat: !1,
            showPlayerSupportBottomLayout: !1,
            playerSupportLiveChat: !0,
            responsibleGamingBtnEnabled: !0,
            enableKycVerification: !0,
            enableInviteFriend: !0,
            allowUserInitiatedKYC: !0
        }),
        m = new t(i.generalConfig, {
            bunderConfig: c,
            enableFreshchat: !1,
            showPlayerSupportBottomLayout: !1,
            playerSupportLiveChat: !0,
            responsibleGamingBtnEnabled: !0,
            enableKycVerification: !0,
            enableInviteFriend: !0,
            allowUserInitiatedKYC: !0
        }),
        d = new g(o.registrationConfig, {}),
        L = new g(i.registrationConfig, {}),
        _ = new s(o.formsConfig, {
            phone: {
                ...o.formsConfig.phone
            },
            dob: {
                minAge: 21,
                addZeroInDay: !1
            }
        }),
        D = new s(i.formsConfig, {
            phone: {
                ...i.formsConfig.phone
            },
            dob: {
                minAge: 21,
                addZeroInDay: !1
            }
        }),
        k = new f(o.userProfileConfig, {
            showMyStats: !0,
            canSetSMSNotifications: !0
        }),
        A = new f(i.userProfileConfig, {
            showMyStats: !0,
            canSetSMSNotifications: !0
        }),
        S = new r(o.modulesConfig, {
            appsflyerConfig: y,
            branchConfig: h
        }),
        T = new r(i.modulesConfig, {
            appsflyerConfig: y,
            branchConfig: h
        }),
        F = new p(o.lobbyConfig, {
            showPokerFlips: !1,
            showPokerMaster: !1,
            showCasinoLobby: !1,
            showCasinoCoin: !1,
            showGlobalSpin: !1,
            enablePaceLongBtnStyle: !0,
            showSportsBook: !1
        }),
        G = new p(i.lobbyConfig, {
            showPokerFlips: !1,
            showPokerMaster: !1,
            showCasinoLobby: !1,
            showCasinoCoin: !1,
            showGlobalSpin: !1,
            enablePaceLongBtnStyle: !0,
            showSportsBook: !1
        });
    n("WPTGPHConfigMobile", {
        generalConfig: P,
        loginConfig: u,
        registrationConfig: d,
        lobbyConfig: F,
        userProfileConfig: k,
        gameConfig: o.gameConfig,
        modulesConfig: S,
        securityConfig: o.securityConfig,
        formsConfig: _,
        walletConfig: o.walletConfig,
        filterDelemeterConfig: o.filterDelemeterConfig,
        designConfig: o.designConfig,
        variableConfigData: C.getData(),
        honeyPotConfig: o.honeyPotConfig
    }), n("WPTGPHConfigLandscape", {
        generalConfig: m,
        loginConfig: w,
        registrationConfig: L,
        lobbyConfig: G,
        userProfileConfig: A,
        gameConfig: i.gameConfig,
        modulesConfig: T,
        securityConfig: i.securityConfig,
        formsConfig: D,
        walletConfig: i.walletConfig,
        filterDelemeterConfig: i.filterDelemeterConfig,
        designConfig: i.designConfig,
        variableConfigData: C.getData(),
        honeyPotConfig: i.honeyPotConfig
    });
    e._RF.pop()
}
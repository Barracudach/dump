import * as n from "./cc.js";
import * as i from "./WPTO.js";
import * as o from "./WPTO.js";
import * as a from "./SecurityConfig.js";
import * as t from "./GeneralConfig.js";
import * as l from "./GeneralConfig.js";
import * as g from "./LoginConfig.js";
import * as r from "./LobbyConfig.js";
import * as f from "./VariantConfigData.js";
import * as s from "./ModulesConfig.js";
import * as p from "./Enum.js";

function main() {
    n._RF.push({}, "2df43tp4oVCfov0bhHqOP7L", "WPTG", void 0);
    let c = l.ROW,
        C = {
            bunder_AppID: "com.wptglobal.wptg",
            AppId: "88AAC8FB-80D7-483B-B58B-508FD8076895",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "WPT Global",
            MyAppURL: "https://wptglobal.com/",
            MyAppIcon: "wptg",
            WebAppTitle: "WPTG-Play"
        };
    C.AppLicenseType = c;
    let b, m = {
            branch_Enable: !0,
            branch_Schema: "wptg",
            branch_KeyDev: "key_test_biZQjuaRZUTyn1qb8ZcRphlfFBj0vBhu",
            branch_KeyProd: "key_live_oe2LjrhN9IHzl8rm6JRW0inbzAg3EBbd",
            branch_LinkDomain_Live: "applinks:wptglobal.app.link",
            branch_LinkDomain_Alt_Live: "applinks:wptglobal-alternate.app.link",
            branch_LinkDomain_Test: "applinks:wptglobal.test-app.link",
            branch_LinkDomain_Alt_Test: "applinks:wptglobal-alternate.test-app.link"
        },
        d = {
            appsflyer_Enable: !0,
            appsflyer_Schema: "wptg",
            appsflyer_KeyDev: "6V3kqx7ULwPdhuYMTeydAT",
            appsflyer_AndroidChannel: "WPT",
            appsflyer_OneLinkPath: "/c4ia",
            appsflyer_AppleAppID: "6443560819",
            appsflyer_LinkDomain: "wptglobal.onelink.me"
        },
        u = {
            crashTracing_Enable: !0
        };
    const y = {
        enableCrowdinUsage: !0,
        enableCachingForCrowdin: !0,
        crowdinDistributionKey_stg: "c44ec4e946bc731e756efe9n010",
        crowdinDistributionKey_prod: "32d445f380c11cae042efa9n010"
    };
    let w = {
            phone: {
                name: "1-800-GAMBLER",
                value: "+18001337666"
            },
            email: {
                name: "customercare@wptglobal.com",
                value: "customercare@wptglobal.com"
            },
            emailPaymentRelated: {
                name: "customercare@wptglobal.com",
                value: "customercare@wptglobal.com"
            },
            emailForKYCDocuments: {
                name: "verification@wptglobal.com",
                value: "verification@wptglobal.com"
            },
            emailForResponsibleGaming: {
                name: "responsiblegaming@wptglobal.com",
                value: "responsiblegaming@wptglobal.com"
            },
            useCustomWebPage: !1,
            showProminent: !1
        },
        h = new t(o.generalConfig, {
            helpLine: w,
            bunderConfig: C,
            registeredTitle: "WPT® Global",
            enableKycVerification: !0,
            enableInviteFriend: !0,
            allowUserInitiatedKYC: !1
        }),
        T = new t(i.generalConfig, {
            helpLine: w,
            bunderConfig: C,
            registeredTitle: "WPT® Global",
            enableKycVerification: !0,
            enableInviteFriend: !0,
            allowUserInitiatedKYC: !1
        }),
        v = new g(o.loginConfig, {
            guestAutoLogin: !0,
            isPhoneAndEmailLoginModeEnable: !0,
            defaultUserLoginMode: p.Email
        }),
        D = new g(v),
        P = new s(o.modulesConfig, {
            analytics: {
                enabled: !0,
                segmentTool_KeyDev: "2dKt4Yb3fuVyM6HOdTCiQdZsky535wEI",
                segmentTool_KeyProd: "zNrzdZ91kGdWhheN1g1mGiUjgsSQkxKW",
                segmentTool_AppName: "wptg"
            },
            branchConfig: m,
            appsflyerConfig: d,
            customerioConfig: b,
            crashTracingConfig: u,
            crowdinConfig: y
        }),
        k = new s(i.modulesConfig, {
            analytics: {
                segmentTool_KeyDev: "6CvEm5Zi8yBye2R2yhF9BagHqzdemSs8",
                segmentTool_KeyProd: "iWqDQgpfxoWazHzFAaD0IUEPct8AyAif",
                segmentTool_AppName: "wptg"
            },
            branchConfig: m,
            appsflyerConfig: d,
            customerioConfig: b,
            crashTracingConfig: u,
            crowdinConfig: y
        }),
        A = new r(o.lobbyConfig, {
            showWPTGLiveEvent: !0,
            showSportsBook: !0,
            hideRunningTournaments: !0,
            useLobbyV2: !0,
            showAvgPotInLobbyV2: !1
        }),
        L = new r(A, {
            useLobbyV2: !0,
            showAvgPotInLobbyV2: !1
        }),
        I = new a(o.securityConfig, {
            enableGeoComplyRetryForErrorCodes: ["blocked_software", "proxy", "VPN_adapters_rule", "600", "602", "603", "606", "608", "615", "637", "408"]
        }),
        E = new a(i.securityConfig, {
            enableGeoComplyRetryForErrorCodes: ["blocked_software", "proxy", "VPN_adapters_rule", "600", "602", "603", "606", "608", "612", "613", "615", "408"]
        });
    e("WPTGConfig", {
        generalConfig: h,
        loginConfig: v,
        registrationConfig: o.registrationConfig,
        lobbyConfig: A,
        userProfileConfig: o.userProfileConfig,
        gameConfig: o.gameConfig,
        modulesConfig: P,
        securityConfig: I,
        formsConfig: o.formsConfig,
        walletConfig: o.walletConfig,
        filterDelemeterConfig: o.filterDelemeterConfig,
        designConfig: o.designConfig,
        variableConfigData: f.getData(),
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIB8vLyP+/oMgh+d7etS3A6tQaHgTuLyqBYhEJnf2rrlKsbUVVaS6605XUI9laSixS7KUrwSRp+5dQr3t8DglCVu7JPivQGkEFmpXeoufB62N8ZLFa0SfW00Wul1ypbAuvW5q4Q+JIvgntuDuivp3M9ObIk3hKWol2o6/PXXb/m/RLv825CeEDhbL2GuqW7ZVTRH6hRSFD+vDsie9WyNrsAzyAry6yr1WLaIhDV1wfwfUib0bRwrOa6KsDMdlXghCzen0N/S2an0bbbFBTlE1k3ajmDf4zmheix+TeYKzfhNZLx+0a4tZQ6coRYU8drFEQVUA0FRHdrz9nMde2uG9RN3J7TTuh0ut5P6H/RUzeS/ool/WVkdH4jkVeScqkpqI9yxTyTy4BvtXSywEC1y32qg=="
    }), e("WPTGConfigLandscape", {
        generalConfig: T,
        loginConfig: D,
        registrationConfig: i.registrationConfig,
        lobbyConfig: L,
        userProfileConfig: i.userProfileConfig,
        gameConfig: i.gameConfig,
        modulesConfig: k,
        securityConfig: E,
        formsConfig: i.formsConfig,
        walletConfig: i.walletConfig,
        filterDelemeterConfig: i.filterDelemeterConfig,
        designConfig: i.designConfig,
        variableConfigData: f.getData(),
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIcT5iPfLHykHQVr1pdFfRTxnldVoUxcBqwg/c5RK7RchbyzEHQCvvbSmR9nL41cVUwl0DCIJ6aMVvWmDa+APkSjjOgCX5jobo1r4+Jgys/FN3zXnpzGw0MdDl960o0BWkMf/Lfkx91TVEkT4t0FwaT7w173JwIFoIhlecdhwkTpDDpT6pQsv8sUUxPM40yGlKMilX3Hpmg67Dts0bj85Vm/yA7UYsQolMDOsl0jn2w+4mR1zCiJKuqJcCSk/dCSIp9CHdISzX9Gil7+Y4L6rkTYClHDqX88TQsPVpg1+y7UgcThFEuKjJc+uQazdnmCqPRpWf1NfmnvuPqI+YsJf3SzJw/bEclxj9vwiWRHaNfoLC+h/pUHTsRIs+/QZc5tiJ"
    });
    n._RF.pop()
}
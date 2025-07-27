import * as e from "./cc.js";
import * as i from "./WPTG.js";
import * as g from "./GeneralConfig.js";
import * as o from "./GeneralConfig.js";
import * as f from "./RegistrationConfig.js";
import * as t from "./VariantConfigData.js";
import * as a from "./LobbyConfig.js";
import * as C from "./GameConfig.js";
import * as l from "./LoginConfig.js";

function main() {
    e._RF.push({}, "a6858e4sC1D17F3blpbNrlP", "WPTGMX", void 0);
    let s = o.MX,
        r = {
            bunder_AppID: "com.wptglobal.wptgmexico",
            AppId: "1E5A5CDA-6830-4B12-805D-EA1DC62CC5F9",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "WPT Global",
            MyAppURL: "https://wptglobal.mx/",
            MyAppIcon: "wptg",
            WebAppTitle: "WPT-Play"
        };
    r.AppLicenseType = s;
    let p = new g(i.generalConfig, {
            bunderConfig: r,
            FAQ_url: "https://wptglobal.mx/faq",
            enableKycVerification: !1,
            enableInviteFriend: !0
        }),
        c = new f(i.registrationConfig, {}),
        b = new a(i.lobbyConfig, {
            showSportsBook: !1
        }),
        u = {
            ...i.gameConfig.miniGameConfig
        };
    Object.assign(u, {
        showRedEnvelop: !1,
        showMexicoDisclaimerAndCurrencyConversion: !0
    });
    let m = new C(i.gameConfig, {
        redEnvelopeEnabled: !1,
        miniGameConfig: u
    });
    new l(i.loginConfig, {
        isPhoneAndEmailLoginModeEnable: !1
    });
    n("WPTGMXConfigLandscape", {
        generalConfig: p,
        loginConfig: i.loginConfig,
        registrationConfig: c,
        lobbyConfig: b,
        userProfileConfig: i.userProfileConfig,
        gameConfig: m,
        modulesConfig: i.modulesConfig,
        securityConfig: i.securityConfig,
        formsConfig: i.formsConfig,
        walletConfig: i.walletConfig,
        filterDelemeterConfig: i.filterDelemeterConfig,
        designConfig: i.designConfig,
        variableConfigData: t.getData(),
        honeyPotConfig: i.honeyPotConfig
    });
    e._RF.pop()
}
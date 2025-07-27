import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./Enum.js";
import * as r from "./Enum.js";
import * as a from "./Enum.js";
import * as g from "./HttpHandler.js";
import * as s from "./HttpHandlerPKW.js";
import * as f from "./DefaultConfig.js";
import * as u from "./GeneralConfig.js";
import * as C from "./ConfigVariatorEnums.js";
import * as d from "./ConfigVariatorEnums.js";
import * as l from "./ConfigVariatorEnums.js";
import * as h from "./ConfigVariator.js";
import * as c from "./AppConfigServer.js";

function main() {
    var p, b;
    t._RF.push({}, "6d4e97QJqtHqYvaMMaFL0xO", "AppConfig", void 0);
    const {
        executionOrder: _
    } = n;
    e("AppConfig", _(-10)(((b = class e {
        constructor() {
            this._defaultConfig = f, this._configVariator = void 0
        }
        static get Instance() {
            return null == e._instance && (e._instance = new e), e._instance
        }
        get jurisdiction() {
            return this._defaultConfig.jurisdiction
        }
        get baseConfig() {
            return this._defaultConfig.baseConfig
        }
        set baseConfig(e) {
            this._defaultConfig.baseConfig = e
        }
        get buildVariant() {
            return this._defaultConfig.buildVariant
        }
        set buildVariant(e) {
            this._defaultConfig.buildVariant = e
        }
        get enablePocoSDK() {
            return 1 == this._defaultConfig.enablePocoSDK
        }
        get isProd() {
            return this.buildVariant == a.Production
        }
        get isDev() {
            return this.buildVariant == a.Debug
        }
        get isStg() {
            return this.buildVariant == a.Staging
        }
        get envName() {
            switch (this.buildVariant) {
                case a.Production:
                    return "prod";
                case a.Staging:
                    return "stg";
                case a.Debug:
                    return "dev";
                default:
                    return "unknown"
            }
        }
        get clientType() {
            return this._defaultConfig.clientType
        }
        set clientType(e) {
            this._defaultConfig.clientType = e
        }
        get layoutUse() {
            return this._defaultConfig.layoutUse
        }
        get themeUse() {
            return this.getDesignConfig().themeUse
        }
        get availableThemes() {
            return this.getDesignConfig().availableThemes
        }
        get mainFontUse() {
            return u[this.getGeneralConfig().defaultLanguage].fontType
        }
        get secondaryFontUse() {
            return u[this.getGeneralConfig().defaultLanguage].secondaryFontType
        }
        get isLandscapeLayout() {
            return "landscape" == this.layoutUse
        }
        get isPKW() {
            return this._defaultConfig.appBrand == r.PKW
        }
        get isWPTO() {
            return this._defaultConfig.appBrand == r.WPTO
        }
        get isWPTG() {
            return this._defaultConfig.appClone == o.WPTG
        }
        get isMX() {
            return this.getGeneralConfig().isMX
        }
        get isPH() {
            return this.getGeneralConfig().isPH
        }
        get isKR() {
            return this.getGeneralConfig().isKR
        }
        get listDeviceIgnoreTakeScreenShot() {
            return this.getGeneralConfig().listDeviceIgnoreTakeScreenShot
        }
        get httpHandler() {
            return this.isPKW ? s.getInstance() : g.getInstance()
        }
        get casinoLocalhostGamePort() {
            return this.getLobbyConfig().casino.casinoLocalhostGamePort
        }
        get isEnableEmbedLogic() {
            return this.getLobbyConfig().casino.isEnableEmbedLogic
        }
        get isWebApp() {
            return !!this._defaultConfig.isWebApp
        }
        preloadJurisdBundles(e) {
            this.getGeneralConfig().bundles.forEach((t => {
                t.preloadInScene == e && t.name && i.loadBundle(t.name)
            }))
        }
        getGeneralConfig() {
            return this._defaultConfig.baseConfig.generalConfig
        }
        getLoginConfig() {
            return this._defaultConfig.baseConfig.loginConfig
        }
        getRegistrationConfig() {
            return this._defaultConfig.baseConfig.registrationConfig
        }
        getLobbyConfig() {
            return this._defaultConfig.baseConfig.lobbyConfig
        }
        getUserProfileConfig() {
            return this._defaultConfig.baseConfig.userProfileConfig
        }
        getGameConfig() {
            return this._defaultConfig.baseConfig.gameConfig
        }
        getModulesConfig() {
            return this._defaultConfig.baseConfig.modulesConfig
        }
        getSecurityConfig() {
            return this._defaultConfig.baseConfig.securityConfig
        }
        getFormsConfig() {
            return this._defaultConfig.baseConfig.formsConfig
        }
        getWalletConfig() {
            return this._defaultConfig.baseConfig.walletConfig
        }
        getFilterDelemeterConfig() {
            return this._defaultConfig.baseConfig.filterDelemeterConfig
        }
        getDesignConfig() {
            return this._defaultConfig.baseConfig.designConfig
        }
        getHoneyPotConfig() {
            return this._defaultConfig.baseConfig.honeyPotConfig
        }
        setHoneyPotConfig(e) {
            this._defaultConfig.baseConfig.honeyPotConfig = e
        }
        getLayoutBundleString(e) {
            return e ? "common" : this.layoutUse
        }
        getBundleString() {
            return this.getGeneralConfig().bundles[0].name.split("_")[0]
        }
        getAppBrand() {
            return this._defaultConfig.appBrand
        }
        getAppClone() {
            return this._defaultConfig.appClone
        }
        getAppTitle() {
            return this._defaultConfig.appTitle
        }
        canRegisterMore(e = !1) {
            return !0
        }
        getMaxConcurrentCashGameTables() {
            return 3
        }
        getDefaultIntervalToOpenPokerFlipPopup() {
            return 28800
        }
        enableUserBalanceShortCoin() {
            return this.getGameConfig().miniGameConfig.enableUserBalanceShortCoin
        }
        initVariantConfig() {
            let e = this._defaultConfig.baseConfig.variableConfigData;
            e && (this._configVariator = new h(e, this.layoutUse, this._defaultConfig.baseConfig), this._configVariator.setConfigVariant(l.JURISDICTION, this.getGeneralConfig().bunderConfig.AppLicenseType), this._configVariator.setConfigVariant(l.IS_WEB_APP, this.isWebApp))
        }
        setConfigVariantByCountryCode(e) {
            var t;
            null == (t = this._configVariator) || t.setConfigVariant(l.COUNTRY, C[e]), c.getInstance().getConfigFromServer()
        }
        setConfigVariantByPlatform(e) {
            var t;
            null == (t = this._configVariator) || t.setConfigVariant(l.PLATFORM, d[e])
        }
        setConfigVariantByLanguage(e) {
            var t;
            null == (t = this._configVariator) || t.setConfigVariant(l.LANGUAGE, e), c.getInstance().getConfigFromServer()
        }
        revertConfigVariation() {
            var e;
            null == (e = this._configVariator) || e.disableConfigVariation(), c.getInstance().getConfigFromServer()
        }
        needAutoReleaseAssetsMiniGame() {
            let e = !1;
            return e = this.getGeneralConfig().needAutoReleaseAssetsMiniGame, e
        }
        getRegisteredTitle() {
            return this.getGeneralConfig().registeredTitle || this.getAppTitle()
        }
        filterAvailableLanguages() {
            const e = this.getGeneralConfig();
            e.availableLanguages = e.availableLanguages.filter((e => u[e]))
        }
    })._instance = null, p = b)) || p);
    t._RF.pop()
}
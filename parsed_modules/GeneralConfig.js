import * as n from "./cc.js";
import * as t from "./cc.js";
import * as a from "./cc.js";
import * as o from "./FontSystemModel.js";
import * as i from "./Enum.js";
import * as r from "./Enum.js";
import * as l from "./Enum.js";
import * as s from "./Enum.js";

function main() {
    n._RF.push({}, "ead1adAPodMF6AhZd8VxGIt", "GeneralConfig", void 0);
    let h = e("AppLicenseType", function(e) {
        return e.NONE = "", e.ROW = "Curacao", e.MX = "Mexico", e.KR = "SouthKorea", e.PH = "Philippines", e.GO = "WPTGO", e
    }({}));
    e("storeBundles", ["com.wptglobal.wptgmx", "com.wptglobal.wptgrow"]);
    e("helpLineMethodType", function(e) {
        return e.phone = "phone", e.CustomerService = "email", e.KycDocuments = "emailForKYCDocuments", e.PaymentRelatedQueries = "emailPaymentRelated", e.ResponsibleGaming = "emailForResponsibleGaming", e
    }({}));
    let m = e("UserValidationMethodType", function(e) {
        return e[e.None = 0] = "None", e[e.Email = 1] = "Email", e[e.Phone = 2] = "Phone", e[e.EmailAndPhone = 3] = "EmailAndPhone", e
    }({}));
    const p = o.IBMPlexSansCondensed,
        c = o.IBMPlexSansCondensed,
        d = {
            fontSizeScale: .02,
            landscapeOnly: !0,
            onlySmallerThan: 30
        };
    e("Languages", {
        [i.en_US]: {
            type: i.en_US,
            code: "en",
            flagPath: "textures/nationFlags/us",
            commentatorChannel: 2,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.zh_CN]: {
            type: i.zh_CN,
            code: "zh",
            flagPath: "textures/nationFlags/cn",
            commentatorChannel: 1,
            index: 0,
            numeralSymbolArrForLang: ["", "Wan", "Yi"],
            numeralBaseOfLang: 1e4,
            fontType: a.isNative && a.os == a.OS.IOS ? o.SystemDefault : o.PingFang,
            secondaryFontType: a.isNative && a.os == a.OS.IOS ? o.SystemDefault : o.PingFang,
            fontSizeScale: d
        },
        [i.vi_VN]: {
            type: i.vi_VN,
            code: "vi",
            flagPath: "textures/nationFlags/vn",
            commentatorChannel: 3,
            index: 2,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.pt_BR]: {
            type: i.pt_BR,
            code: "pt",
            flagPath: "textures/nationFlags/br",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.fr_CA]: {
            type: i.fr_CA,
            code: "fr",
            flagPath: "textures/nationFlags/fr",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.es_MX]: {
            type: i.es_MX,
            code: "es",
            flagPath: "textures/nationFlags/es",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.th_TH]: {
            type: i.th_TH,
            code: "th",
            flagPath: "textures/nationFlags/th",
            commentatorChannel: 4,
            index: 3,
            numeralSymbolArrForLang: ["", "พัน", "หมื่น", "แสน", "ล้าน"],
            numeralBaseOfLang: 1e3,
            fontType: o.NotoSansThai,
            secondaryFontType: o.NotoSansThai,
            fontSizeScale: d
        },
        [i.ja_JP]: {
            type: i.ja_JP,
            code: "ja",
            flagPath: "textures/nationFlags/jp",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "万", "億"],
            numeralBaseOfLang: 1e4,
            fontType: o.IBMPlexSansJP,
            secondaryFontType: o.IBMPlexSansJP,
            fontSizeScale: d
        },
        [i.ko_KR]: {
            type: i.ko_KR,
            code: "ko",
            flagPath: "textures/nationFlags/kr",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "만", "억"],
            numeralBaseOfLang: 1e4,
            fontType: o.IBMPlexSansKR,
            secondaryFontType: o.IBMPlexSansKR,
            fontSizeScale: d
        },
        [i.zh_TW]: {
            type: i.zh_TW,
            code: "tw",
            flagPath: "textures/nationFlags/tw",
            commentatorChannel: 1,
            index: 0,
            numeralSymbolArrForLang: ["", "萬", "億"],
            numeralBaseOfLang: 1e4,
            fontType: a.isNative && a.os == a.OS.IOS ? o.SystemDefault : o.PingFang,
            secondaryFontType: a.isNative && a.os == a.OS.IOS ? o.SystemDefault : o.PingFang,
            fontSizeScale: d
        },
        [i.pl_PL]: {
            type: i.pl_PL,
            code: "pl",
            flagPath: "textures/nationFlags/pl",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.no_NO]: {
            type: i.no_NO,
            code: "no",
            flagPath: "textures/nationFlags/no",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.fi_FI]: {
            type: i.fi_FI,
            code: "fi",
            flagPath: "textures/nationFlags/fi",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        },
        [i.id_ID]: {
            type: i.id_ID,
            code: "id",
            flagPath: "textures/nationFlags/id",
            commentatorChannel: 1,
            index: 1,
            numeralSymbolArrForLang: ["", "K", "M", "B"],
            numeralBaseOfLang: 1e3,
            fontType: p,
            secondaryFontType: c,
            fontSizeScale: d
        }
    }), e("Bundles", {
        [l.WPTO]: {
            common: {
                name: "default_common",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "WPTO"
            },
            mobile: {
                name: "default_mobile",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "WPTO"
            },
            landscape: {
                name: "default_landscape",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "WPTO"
            }
        },
        [l.Asia]: {
            common: {
                name: "default_common",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "default"
            },
            mobile: {
                name: "default_mobile",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "default"
            },
            landscape: {
                name: "default_landscape",
                preloadInScene: s.HOTUPDATE_SCENE,
                folder: "default"
            }
        }
    });
    e("GeneralConfig", class {
        setHelpLine(e, n, a) {
            return n && (a ? this.helpLine[e].name = a : this.helpLine[e].name == this.helpLine[e].value && (this.helpLine[e].name = n), this.helpLine[e].value = n), this
        }
        get userValidationMethodIsEmail() {
            return (this.userValidationMethod & m.Email) > 0
        }
        get userValidationMethodIsPhone() {
            return (this.userValidationMethod & m.Phone) > 0
        }
        get isMX() {
            return this.bunderConfig.AppLicenseType == h.MX
        }
        get isPH() {
            return this.bunderConfig.AppLicenseType == h.PH
        }
        get isKR() {
            return this.bunderConfig.AppLicenseType == h.KR
        }
        get isROW() {
            return this.bunderConfig.AppLicenseType == h.ROW
        }
        get mapNewLicenseType() {
            return this.bunderConfig.AppLicenseType == h.KR ? h.GO : this.bunderConfig.AppLicenseType
        }
        constructor(...e) {
            this.showInAppNotifications = !0, this.showPushNotice = !0, this.identifiesAsSimulator = !1, this.helpLine = {
                phone: {
                    name: "",
                    value: ""
                },
                email: {
                    name: "",
                    value: ""
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
            }, this.timeZone = {
                value: r.LOCAL,
                nameAbbrev: ""
            }, this.defaultLanguage = i.zh_CN, this.canChangeLanguage = !0, this.availableLanguages = [i.zh_CN, i.en_US], this.userValidationMethod = m.Email, this.showSessionTime = !1, this.showInAppMessages = !0, this.bundles = [], this.multiWindowEnabled = !1, this.listOfCashierContriesUnderWorking = null, this.useSeparateSceneCasinoLandscape = !1, this.assetsNeedPreloadBeforeLoadScene = new Map, this.resourceCommonConfig = [{
                path: "zh_CN/common",
                type: t
            }], this.bunderConfig = {
                bunder_AppID: "",
                AppId: "",
                MyAppPublisher: "",
                MyAppURL: "",
                MyAppIcon: ""
            }, this.FAQ_url = "https://wptglobal.com/faq", this.FeedbackBtn_Url = "https://wptglobal.com/feedback", this.Logo_99_Url = "https://99consortium.com/index.php", this.Logo_Security_Url = "https://imagedelivery.net/Te6DdQqXh49nz9pcywVnmw/3acabfcb-fdcf-4d5a-d275-38930af82000/public?d=wpt-global-game.com", this.Logo_Situs_Url = "https://imagedelivery.net/Te6DdQqXh49nz9pcywVnmw/7816faa6-14fc-44db-2f77-56cce8d23c00/1001", this.listDeviceIgnoreTakeScreenShot = [], this.enableFreshchat = !1, this.playerSupportLiveChat = !1, this.showPlayerSupportBottomLayout = !0, this.BrandName = "WPTG", this.inviteCodePrefix = "WPTG_INVITE_CODE=", this.responsibleGamingBtnEnabled = !1, this.needAutoReleaseAssetsMiniGame = !0, this.registeredTitle = "", this.enableKycVerification = !1, this.enableInviteFriend = !0, this.allowUserInitiatedKYC = !1, this.allowResubmitKycDocument = !1, this.showLoadingOnUserDataFetch = !1, this.isWebApp = !1, this.loadOnlyResourceHallScene = !0, this.preloadHallScene = !0, this.isEnableDownloadPromoBundle = !0, this.enableStatusView = !0, this.delayFetchUserData = !1, this.delayFetchCurrencyData = !1, this.enablePreloadHallScene = !0, this.enableCheckLoadAppServerConfig = !0, this.set(...e)
        }
        set(...e) {
            e.forEach((e => {
                e.helpLine = {
                    ...this.helpLine,
                    ...e.helpLine
                }, Object.assign(this, e)
            }), this)
        }
    }), n._RF.pop()
}
import * as n from "./cc.js";
import * as o from "./Security.js";
import * as t from "./Enum.js";
import * as r from "./Enum.js";
import * as s from "./Enum.js";
import * as i from "./Enum.js";
import * as a from "./Enum.js";
import * as l from "./Enum.js";
import * as u from "./Tools.js";
import * as c from "./FormValidator.js";
import * as m from "./cv.js";
import * as d from "./DesignSystemConfig.js";
import * as p from "./FilterDelemeterConfig.js";
import * as h from "./FormsConfig.js";
import * as b from "./GameConfig.js";
import * as g from "./GeneralConfig.js";
import * as f from "./GeneralConfig.js";
import * as w from "./GeneralConfig.js";
import * as C from "./GeneralConfig.js";
import * as y from "./LobbyConfig.js";
import * as E from "./LoginConfig.js";
import * as T from "./ModulesConfig.js";
import * as S from "./RegistrationConfig.js";
import * as P from "./SecurityConfig.js";
import * as A from "./UserProfileConfig.js";
import * as L from "./UserProfileConfig.js";
import * as k from "./UserProfileConfig.js";
import * as D from "./WalletConfig.js";

function main() {
    n._RF.push({}, "a118bScisBGeq1zj1nXWdZL", "Asia", void 0);
    let _ = g.NONE,
        v = {
            bunder_AppID: "co.a5labs.pkw",
            AppId: "ECA3346B-157A-4A4B-BE7B-45397E9528A4",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "Poker King",
            MyAppURL: "https://pk9.com/",
            MyAppScheme: "pkw",
            MyAppIcon: "game",
            WebAppTitle: "WPT-Play"
        };
    v.AppLicenseType = _;
    let I = {
            branch_Enable: !1,
            branch_Schema: "pkw",
            branch_KeyDev: "key_test_biZQjuaRZUTyn1qb8ZcRphlfFBj0vBhu",
            branch_KeyProd: "key_live_oe2LjrhN9IHzl8rm6JRW0inbzAg3EBbd",
            branch_LinkDomain_Live: "wptglobal.app.link",
            branch_LinkDomain_Alt_Live: "wptglobal-alternate.app.link",
            branch_LinkDomain_Test: "wptglobal.test-app.link",
            branch_LinkDomain_Alt_Test: "wptglobal-alternate.test-app.link"
        },
        B = {
            appsflyer_Enable: !0,
            appsflyer_Schema: "pkw",
            appsflyer_KeyDev: "6nj27phG4TFLe5SqPYL3JD",
            appsflyer_AppleAppID: "1642905128",
            appsflyer_AndroidChannel: "PKW",
            appsflyer_OneLinkPath: "/c4ia",
            appsflyer_LinkDomain: "wptg.onelink.me"
        },
        K = {
            crashTracing_Enable: !1
        },
        M = new f({
            showInAppNotifications: !0,
            showPushNotice: !1,
            identifiesAsSimulator: !1,
            helpLine: {
                useCustomWebPage: !0,
                showProminent: !1
            },
            timeZone: {
                value: a.LOCAL,
                nameAbbrev: ""
            },
            defaultLanguage: i.zh_CN,
            canChangeLanguage: !0,
            availableLanguages: [i.zh_CN, i.en_US, i.vi_VN],
            userValidationMethod: C.Phone,
            showSessionTime: !1,
            showInAppMessages: !0,
            bundles: [w.PKW.mobile, w.PKW.common],
            multiWindowEnabled: !1,
            useSeparateSceneCasinoLandscape: !1,
            assetsNeedPreloadBeforeLoadScene: new Map,
            bunderConfig: v
        }),
        F = new f(M, {
            showInAppNotifications: !1,
            bundles: [w.PKW.landscape, w.PKW.common],
            multiWindowEnabled: u.isDesktopMultiWindowSupported(),
            useSeparateSceneCasinoLandscape: !0,
            bunderConfig: v
        }),
        N = new T({
            rgStatus: {
                rgEnabled: !1,
                rgGameBtnEnabled: !1,
                selfExclusionPeriodOptions: []
            },
            analytics: {
                enabled: !0,
                segmentTool_KeyDev: "uNut3w5e699iteDFDPdrEqG3OcqgQQbl",
                segmentTool_KeyProd: "PxwIQ3GqrdCa5sOWYB7MLohp4G0B1mWd",
                segmentTool_AppName: "pkw"
            },
            branchConfig: I,
            appsflyerConfig: B,
            customerioConfig: undefined,
            crashTracingConfig: K,
            actionCenterEnabled: !1,
            xPointEnabled: !1,
            sharedPlayersPool: !1
        }),
        R = new T(N, {
            analytics: {
                segmentTool_KeyProd: "KcNoSO1tAe2a6GdES9XxOdEoZ1BKcDkc"
            },
            branchConfig: I,
            appsflyerConfig: B,
            crashTracingConfig: K
        }),
        x = [o.ForceLocationPermission],
        G = new P({
            screenCaptureAllowed: !0,
            monitor: [],
            check: {
                JoinPokerRoom: x,
                JoinCasinoRoom: x,
                JoinSportsBook: x
            },
            timeoutLogout: 15
        }),
        U = new P(G),
        H = new h({
            loginUsername: {
                key: "username"
            },
            password: {
                key: "passwd",
                modifier: e => m.md5.md5(e),
                min: 6,
                max: 14,
                strength: c.Space,
                showRepeatPassword: !1
            },
            phone: {
                useNestedSchema: !1,
                includePlusSign: !1
            },
            code: {
                key: "v_code"
            },
            verificationCode: {
                key: "v_code"
            },
            invitationCode: {
                key: "invitation_code"
            },
            userName: {
                key: "username"
            }
        }),
        W = new h(H),
        V = new D({
            defaultCurrency: l.GOLD,
            secondCurrency: l.USD,
            showCurrencySymbol: !1,
            haveUSDTCurrency: !0
        }),
        z = new D(V),
        O = new E({
            autoLogin: !0,
            isGuestLoginAllowed: !0
        }),
        j = new E(O),
        q = new S({
            legalDocumentContentType: t.HTMLImage,
            useLocalSchema: !0,
            showGenderField: !0,
            canSelectAllAtOnce: !0,
            legalDocs: [],
            localSchema: [{
                formName: "verification",
                urlKey: "WEB_API_CHECK_VCODE",
                titleKey: "",
                subTitleKey: "",
                fields: [{
                    type: "Phone",
                    name: "phone",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }, {
                    type: "VerificationCode",
                    name: "verificationCode",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: "WEB_API_VCODE"
                }, {
                    type: "InvitationCode",
                    name: "invitation_code",
                    meta: null,
                    required: !1,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }]
            }, {
                formName: "account",
                urlKey: "WEB_API_CHECK_USER_NAME",
                titleKey: "",
                subTitleKey: "",
                fields: [{
                    type: "UserName",
                    name: "userName",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }, {
                    type: "PassWord",
                    name: "password",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }, {
                    type: "Checkbox",
                    name: "acceptTerms",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }]
            }, {
                formName: "profile",
                urlKey: "WEB_API_REG",
                titleKey: "",
                subTitleKey: "",
                fields: [{
                    type: "NickName",
                    name: "nick_name",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }, {
                    type: "Gender",
                    name: "gender",
                    meta: null,
                    required: !0,
                    minLength: null,
                    maxLength: null,
                    urlKey: null
                }]
            }],
            verificationForm: {
                urlKey: ""
            },
            userInfoForm: {
                urlKey: ""
            },
            termsOfServiceForm: {
                urlKey: ""
            }
        }),
        J = new S(q),
        Q = new y({
            showDepositBox: !0,
            showNews: !0,
            showPokerFlips: !0,
            showPokerMaster: !0,
            showCasinoLobby: !0,
            showCasinoCoin: !0,
            showPromoCasino: !1,
            showInviteFriendMobile: !1,
            showInviteFriendDesktop: !1,
            showSwitchServer: !0,
            showJackfruit: !0,
            showSplash: !0,
            showStarSeats: !1,
            showPromotionLobby: !0,
            showPlo: !0,
            showPlo5: !0,
            showGlobalSpin: !0,
            casino: {
                showPrimary: !0,
                showSecondary: !1,
                enableRedirectWebMinigame: !0,
                autoSwitchToMiniGameView: !0,
                casinoLocalhostGamePort: "5678",
                isEnableEmbedLogic: !1,
                casinoCoinTooltip: !1,
                showMXNInfo: !1
            },
            mtt: {
                showLobbyTab: !0,
                useAPI: !1,
                platform: 1,
                disableTournamentEndedPopup: !0,
                enableSNGTournaments: !1,
                enablePrivateTournaments: !1
            },
            showPromoArea: !0,
            banner: {
                showPageViewBanners: !1,
                showCowboyBanner: !0,
                showPokerMasterBanner: !1
            },
            showSportsBook: !0
        }),
        Z = new y(Q, {
            showDepositBox: !1,
            showNews: !1,
            showSwitchServer: !1,
            showJackfruit: !1,
            showPromoArea: !1
        }),
        X = new A({
            showMyStats: !0,
            showLogOut: L.UserProfileMenu,
            showLoginHistory: !1,
            showDataReport: !1,
            showBonusHistory: !1,
            showHandHistory: !1,
            reportEnabled: !0,
            reportEnabledPlo5: !0,
            favoriteEnabled: !0,
            showGameTransactionHistory: !1,
            show2FactorAuthentification: !1,
            showPlayerComplaints: !1,
            canSetDarkMode: !1,
            canSetEmailNotifications: !1,
            canSetSMSNotifications: !1,
            canSetLoginNotifications: !1,
            canValidateEmail: !1,
            canSeeLegalDocument: !1,
            showBackpack: !1,
            showVIP: !1,
            showSavedHands: !0,
            showChangePassword: L.UserProfileSettings,
            userAvatarAccepted: k.All,
            showInviteFriends: !1,
            canSetChallengeQuestions: !1,
            feedbackEnabled: !1
        }),
        Y = new A(X, {
            canSetDarkMode: !1,
            showSavedHands: !1
        }),
        $ = new b({
            enableShowGuess: !0,
            enableHandStrenght: !0,
            depositButtonEnabled: !0,
            redEnvelopeEnabled: !1,
            enableMultipleCashGamesMobile: !1,
            audioChatEnabled: !1,
            labaEnabled: !1,
            cashierEnabled: !0,
            rulesMenuItemEnabled: !0,
            onTableCurrentBalanceEnabled: !1,
            gameSoundSettingsEnabled: !0,
            gameCustomBetSettingsEnabled: !0,
            chatTabEnabled: !0,
            emojiTabEnabled: !0,
            faceEmojiEnabled: !1,
            fullscreenEmojiEnabled: !0,
            opponentEmojiEnabled: !0,
            opponentEmojiMTTEnabled: !0,
            gameLogTabEnabled: !0,
            statsTabEnabled: !0,
            enableInGamePlayerStats: !0,
            bottomGameMenuEnabled: !0,
            settingMenuEnabled: !0,
            enableJackPot: !0,
            enableShakeSeatAfterGetChips: !1,
            enableAddTableExplanation: !1,
            enableMTTQuitConfirmPopup: !1,
            buyInTakeBackEnabled: !0,
            buyInTotalAmountEnabled: !0,
            enableShowOpponentCards: !0,
            enableShowBarrage: !0,
            showBuyInMessage: !0,
            enableShowHandRankMTT: !1,
            useNewSwitchTableMTT: !0,
            enableMultiTableBar: !1,
            replaceZoomTextToPaceText: !1,
            replaceCowboyPokerTextToPokerFlipsText: !1,
            enablePokerFlipsNotice: !1,
            enablePokerKingTable: !0,
            enableCasinoPoint: !0,
            cardFaceList: [s.CARD_FACE_0, s.CARD_FACE_1, s.CARD_FACE_2],
            miniGameConfig: {
                showPlayerListAndLeaderboard: !0,
                showRedEnvelop: !0,
                useOnlyEnglish: !1,
                useOnlyEnglishForGameRule: !1,
                useSharePlayerPool: !1,
                showChangePoints: !0,
                showLeftRightLeaderboard: !0,
                showMexicoDisclaimerAndCurrencyConversion: !1,
                useMoneyFromSharePoolServer: !0,
                enableUserBalanceShortCoin: !0,
                maxNumberTimeShowIntroPopup: 5,
                availableLangResForMiniGames: [i.ja_JP, i.ko_KR, i.vi_VN, i.id_ID]
            },
            gameTablesConcurrent: {
                maxConcurrent: 3,
                mtt: 3,
                sng: 3,
                cashGame: 3,
                zoom: 1,
                plo: 3,
                plo5: 3,
                pokerFlips: 1,
                sportsBook: 1
            },
            showGlobalSpinFloatingIcon: !1,
            enabledTableDataPoint: !1,
            isAutoCancelInsurrance: !0,
            isAllowSignUpInMinutes: !1
        }),
        ee = new b($, {
            chatTabEnabled: !1,
            rulesMenuItemEnabled: !1,
            gameLogTabEnabled: !1,
            statsTabEnabled: !1,
            buyInTotalAmountEnabled: !1,
            enableShowOpponentCards: !1,
            enableShowBarrage: !1,
            enableMultiTableBar: !1,
            tableList: [r.TABLE_BACK_CLASSIC_GREEN, r.TABLE_BACK_RHOMBIC_PURPLE, r.TABLE_BACK_OVAL_JADE, r.TABLE_BACK_ROUNDED_NEON, r.TABLE_BACK_ROUNDED_WPT],
            gameTablesConcurrent: {
                maxConcurrent: 7,
                mtt: 7,
                sng: 7,
                cashGame: 4,
                zoom: 1,
                plo: 4,
                plo5: 4,
                pokerFlips: 1,
                sportsBook: 1
            }
        }),
        ne = new p({
            ui: {
                microUpper: "~ 30",
                lowLower: "31",
                lowUpper: "200",
                midLower: "201",
                midUpper: "500",
                highLower: "501 +"
            },
            val: {
                microUpper: 30,
                lowUpper: 200,
                midUpper: 500
            }
        }),
        oe = new p(ne);
    e("AsiaConfig", {
        generalConfig: M,
        loginConfig: O,
        registrationConfig: q,
        lobbyConfig: Q,
        userProfileConfig: X,
        gameConfig: $,
        modulesConfig: N,
        securityConfig: G,
        formsConfig: H,
        walletConfig: V,
        filterDelemeterConfig: ne,
        designConfig: d,
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIB8vLyP+/oMgh+d7etS3A6tQaHgTuLyqBYhEJnf2rrlKsbUVVaS6605XUI9laSixS7KUrwSRp+5dQr3t8DglCVu7JPivQGkEFmpXeoufB62N8ZLFa0SfW00Wul1ypbAuvW5q4Q+JIvgntuDuivp3M9ObIk3hKWol2o6/PXXb/m/RLv825CeEDhbL2GuqW7ZVTRH6hRSFD+vDsie9WyNrsAzyAry6yr1WLaIhDV1wfwfUib0bRwrOa6KsDMdlXghCzen0N/S2an0bbbFBTlE1k3ajmDf4zmheix+TeYKzfhNZLx+0a4tZQ6coRYU8drFEQVUA0FRHdrz9nMde2uG9RN3J7TTuh0ut5P6H/RUzeS/ool/WVkdH4jkVeScqkpqI9yxTyTy4BvtXSywEC1y32qg=="
    }), e("AsiaConfigLandscape", {
        generalConfig: F,
        loginConfig: j,
        registrationConfig: J,
        lobbyConfig: Z,
        userProfileConfig: Y,
        gameConfig: ee,
        modulesConfig: R,
        securityConfig: U,
        formsConfig: W,
        walletConfig: z,
        filterDelemeterConfig: oe,
        designConfig: d,
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIcT5iPfLHykHQVr1pdFfRTxnldVoUxcBqwg/c5RK7RchbyzEHQCvvbSmR9nL41cVUwl0DCIJ6aMVvWmDa+APkSjjOgCX5jobo1r4+Jgys/FN3zXnpzGw0MdDl960o0BWkMf/Lfkx91TVEkT4t0FwaT7w173JwIFoIhlecdhwkTpDDpT6pQsv8sUUxPM40yGlKMilX3Hpmg67Dts0bj85Vm/yA7UYsQolMDOsl0jn2w+4mR1zCiJKuqJcCSk/dCSIp9CHdISzX9Gil7+Y4L6rkTYClHDqX88TQsPVpg1+y7UgcThFEuKjJc+uQazdnmCqPRpWf1NfmnvuPqI+YsJf3SzJw/bEclxj9vwiWRHaNfoLC+h/pUHTsRIs+/QZc5tiJ"
    });
    n._RF.pop()
}
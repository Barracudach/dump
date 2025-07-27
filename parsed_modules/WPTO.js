import * as a from "./cc.js";
import * as n from "./Security.js";
import * as t from "./Enum.js";
import * as r from "./Enum.js";
import * as c from "./Enum.js";
import * as s from "./Enum.js";
import * as i from "./Enum.js";
import * as p from "./Enum.js";
import * as o from "./Enum.js";
import * as l from "./Enum.js";
import * as m from "./Tools.js";
import * as b from "./FormValidator.js";
import * as d from "./DesignSystemConfig.js";
import * as u from "./DesignSystemConfig.js";
import * as g from "./FilterDelemeterConfig.js";
import * as C from "./FormsConfig.js";
import * as h from "./GameConfig.js";
import * as f from "./GeneralConfig.js";
import * as w from "./GeneralConfig.js";
import * as T from "./GeneralConfig.js";
import * as E from "./GeneralConfig.js";
import * as P from "./LobbyConfig.js";
import * as S from "./LoginConfig.js";
import * as A from "./ModulesConfig.js";
import * as y from "./RegistrationConfig.js";
import * as _ from "./SecurityConfig.js";
import * as B from "./UserProfileConfig.js";
import * as L from "./UserProfileConfig.js";
import * as k from "./UserProfileConfig.js";
import * as D from "./VariantConfigData.js";
import * as M from "./WalletConfig.js";

function main() {
    a._RF.push({}, "cfa5as4JEZOn7SYQ5CDh2AX", "WPTO", void 0);
    let I = E.ROW,
        v = {
            bunder_AppID: "com.wptglobal.wpto",
            AppId: "88AAC8FB-80D7-483B-B58B-508FD8076895",
            AppleTeamID: "A5Q7FS3797",
            AppleIssuerID: "2a0fdae2-f5b6-4f32-a383-9b43b45ce954",
            AppleKeyID: "N6U8FSWKJ6",
            MyAppPublisher: "WPT Online",
            MyAppURL: "https://wptglobal.com/",
            MyAppIcon: "wpto",
            WebAppTitle: "WPT-Play"
        };
    v.AppLicenseType = I;
    let R = {
            branch_Enable: !0,
            branch_Schema: "wpto",
            branch_KeyDev: "key_test_biZQjuaRZUTyn1qb8ZcRphlfFBj0vBhu",
            branch_KeyProd: "key_live_oe2LjrhN9IHzl8rm6JRW0inbzAg3EBbd",
            branch_LinkDomain_Live: "applinks:wptglobal.app.link",
            branch_LinkDomain_Alt_Live: "applinks:wptglobal-alternate.app.link",
            branch_LinkDomain_Test: "applinks:wptglobal.test-app.link",
            branch_LinkDomain_Alt_Test: "applinks:wptglobal-alternate.test-app.link"
        },
        N = {
            appsflyer_Enable: !0,
            appsflyer_Schema: "wpto",
            appsflyer_AndroidChannel: "WPTO",
            appsflyer_OneLinkPath: "/c4ia",
            appsflyer_KeyDev: "6nj27phG4TFLe5SqPYL3JD",
            appsflyer_AppleAppID: "1642905128",
            appsflyer_LinkDomain: "applinks:wptg.onelink.me"
        },
        O = {
            crashTracing_Enable: !1
        },
        W = new f({
            showInAppNotifications: !1,
            showPushNotice: !1,
            identifiesAsSimulator: !1,
            helpLine: {
                phone: {
                    name: "1-800-GAMBLER",
                    value: "+18001337666"
                },
                email: {
                    name: "customercare@wptonline.com",
                    value: "customercare@wptonline.com"
                },
                emailPaymentRelated: {
                    name: "customercare@wptonline.com",
                    value: "customercare@wptonline.com"
                },
                emailForKYCDocuments: {
                    name: "customercare@wptonline.com",
                    value: "customercare@wptonline.com"
                },
                emailForResponsibleGaming: {
                    name: "customercare@wptonline.com",
                    value: "customercare@wptonline.com"
                },
                useCustomWebPage: !1,
                showProminent: !1
            },
            timeZone: {
                value: o.LOCAL,
                nameAbbrev: ""
            },
            defaultLanguage: i.en_US,
            canChangeLanguage: !0,
            availableLanguages: [i.en_US, i.es_MX, i.fr_CA, i.pt_BR, i.vi_VN, i.ko_KR, i.th_TH, i.zh_TW, i.pl_PL, i.fi_FI, i.id_ID],
            listOfCashierContriesUnderWorking: [],
            userValidationMethod: T.Email,
            showSessionTime: !1,
            showInAppMessages: !0,
            bundles: [w.WPTO.mobile, w.WPTO.common, {
                name: "mobile",
                preloadInScene: r.HALL_SCENE,
                folder: ""
            }, {
                name: "common",
                preloadInScene: r.HALL_SCENE,
                folder: ""
            }],
            multiWindowEnabled: !1,
            useSeparateSceneCasinoLandscape: !1,
            assetsNeedPreloadBeforeLoadScene: new Map([
                [r.HALL_SCENE, [{
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/CowboyBanner"
                }, {
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/minigamePopup/PokerFlipsPopup"
                }, {
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/minigamePopup/MinigamePokerMasterPopup"
                }, {
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/minigamePopup/WelcomePokerFlipsPopup"
                }, {
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/minigamePopup/WelcomePokerMasterPopup"
                }, {
                    bundleName: w.WPTO.mobile.name,
                    filePath: "prefabs/myTickets/my_tickets_page"
                }]]
            ]),
            bunderConfig: v,
            listDeviceIgnoreTakeScreenShot: [],
            enableFreshchat: !0
        }),
        F = new f(W, {
            bundles: [w.WPTO.landscape, w.WPTO.common, {
                name: "landscape",
                preloadInScene: "HallScene",
                folder: ""
            }, {
                name: "common",
                preloadInScene: "HallScene",
                folder: ""
            }],
            multiWindowEnabled: m.isDesktopMultiWindowSupported(),
            useSeparateSceneCasinoLandscape: !1,
            assetsNeedPreloadBeforeLoadScene: new Map([
                [r.HALL_SCENE, [{
                    bundleName: w.WPTO.landscape.name,
                    filePath: "prefabs/CowboyBanner"
                }, {
                    bundleName: w.WPTO.landscape.name,
                    filePath: "prefabs/minigamePopup/MinigameComboPromoPopup"
                }, {
                    bundleName: w.WPTO.landscape.name,
                    filePath: "prefabs/minigamePopup/WelcomePokerFlipsPopup"
                }, {
                    bundleName: w.WPTO.landscape.name,
                    filePath: "prefabs/minigamePopup/WelcomePokerMasterPopup"
                }, {
                    bundleName: w.WPTO.landscape.name,
                    filePath: "prefabs/myTickets/my_tickets_page"
                }]]
            ]),
            bunderConfig: v
        }),
        U = new A({
            rgStatus: {
                rgEnabled: !1,
                rgGameBtnEnabled: !1,
                selfExclusionPeriodOptions: []
            },
            analytics: {
                enabled: !0,
                segmentTool_KeyDev: "8S7l8x0LvU3YnezwgvshLrUFcHYEcK9d",
                segmentTool_KeyProd: "8S7l8x0LvU3YnezwgvshLrUFcHYEcK9d",
                segmentTool_AppName: "wpto"
            },
            branchConfig: R,
            appsflyerConfig: N,
            crashTracingConfig: O,
            actionCenterEnabled: !0,
            xPointEnabled: !1,
            sharedPlayersPool: !0
        }),
        x = new A(U, {
            analytics: {
                segmentTool_KeyDev: "n52APCsaa3c9jszPCEPhJ7MzzWiZePRf",
                segmentTool_KeyProd: "n52APCsaa3c9jszPCEPhJ7MzzWiZePRf"
            },
            branchConfig: R,
            appsflyerConfig: N,
            customerioConfig: undefined,
            crashTracingConfig: O
        }),
        K = [n.UserBan, n.Captcha],
        H = new _({
            useGeoComply: !0,
            bypassGeoComply: !1,
            enableGeoComplyGeneralNRLogging: !0,
            screenCaptureAllowed: !0,
            monitor: [],
            check: {
                JoinPokerRoom: K,
                JoinCasinoRoom: K,
                JoinSportsBook: K
            },
            timeoutLogout: 1440,
            enableGeoComplyIpChangeService: !0
        }),
        G = new _(H, {
            enableGeoComplyIpChangeService: !0
        }),
        V = new C({
            loginUsername: {
                key: "login"
            },
            password: {
                key: "password",
                modifier: null,
                min: 8,
                max: 20,
                strength: b.Strong,
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
                regexpHints: {
                    0: {
                        regExpString: "/^(?=.*[A-Z])(?=.*[a-z]).*$/",
                        errorMessage: "ErrorValidOneUppercaseOneLowercase"
                    },
                    1: {
                        regExpString: "/^(?=.*[0-9]).*$/",
                        errorMessage: "ErrorValidOneNumber"
                    }
                }
            },
            phone: {
                useNestedSchema: !0,
                includePlusSign: !0,
                country: []
            },
            code: {
                key: "code"
            },
            verificationCode: {
                key: "verificationCode"
            },
            invitationCode: {
                key: "referralCode"
            },
            userName: {
                key: "userName",
                regexp: /^[a-z]+[a-z0-9]*$/i,
                errorMessagei18Key: "ErrorValidOnlyLettersAndNumbers",
                regexpHints: {
                    0: {
                        regExpString: "/^[a-z].*$/i",
                        errorMessage: "ErrorValidStartWithLetter"
                    },
                    1: {
                        regExpString: "/^[a-z0-9]+$/i",
                        errorMessage: "ErrorValidOnlyCharsAndNr"
                    }
                }
            }
        }),
        z = new C(V),
        j = new M({
            defaultCurrency: l.USD,
            secondCurrency: l.CNY,
            showCurrencySymbol: !0,
            haveUSDTCurrency: !1,
            showFreshChatWindow: !1,
            countriesCurrency: {
                PH: l.PHP
            }
        }),
        J = new M(j, {
            showFreshChatWindow: !1
        }),
        Z = new S({
            autoLogin: !0,
            isGuestLoginAllowed: !0
        }),
        Q = new S(Z),
        Y = new y({
            legalDocumentContentType: t.HTML,
            useLocalSchema: !1,
            showGenderField: !1,
            canSelectAllAtOnce: !0,
            legalDocs: ["TermsAndConditions", "PrivacyPolicy"],
            localSchema: [],
            verificationForm: {
                urlKey: "WEB_API_USERP_VERIFICATION_SUBMIT_REGISTRATION"
            },
            userInfoForm: {
                urlKey: "WEB_API_POST_REGISTRATION_USER"
            },
            termsOfServiceForm: {
                urlKey: ""
            },
            legalDocsNamePrefix: ""
        }),
        X = new y(Y, {
            legalDocumentContentType: t.RichText
        }),
        q = new P({
            showDepositBox: !1,
            showNews: !1,
            showPokerFlips: !0,
            showPokerMaster: !0,
            showCasinoLobby: !0,
            showCasinoCoin: !0,
            showPromoCasino: !1,
            showInviteFriendMobile: !0,
            showInviteFriendDesktop: !0,
            showSwitchServer: !1,
            showJackfruit: !1,
            showSplash: !1,
            showStarSeats: !1,
            showPromotionLobby: !0,
            showPlo: !0,
            showPlo5: !0,
            showGlobalSpin: !0,
            showTableCountPlo: !0,
            enablePaceLongBtnStyle: !1,
            casino: {
                showPrimary: !1,
                showSecondary: !1,
                enableRedirectWebMinigame: !1,
                autoSwitchToMiniGameView: !1,
                casinoLocalhostGamePort: "5678",
                isEnableEmbedLogic: !0,
                casinoCoinTooltip: !0,
                showMXNInfo: !1
            },
            cashier: {
                premierCashierEnabled: !0,
                paymentSupportPopupEnabled: !1,
                cashierLobbyViewEnabled: !0,
                tabsToBeEnabled: s.All,
                piqOnCashierWebEnabled: !0
            },
            mtt: {
                showLobbyTab: !0,
                useAPI: !0,
                platform: 4,
                disableTournamentEndedPopup: !0,
                enableSNGTournaments: !1,
                enablePrivateTournaments: !0
            },
            showPromoArea: !1,
            banner: {
                showPageViewBanners: !0,
                showCowboyBanner: !0,
                showPokerMasterBanner: !0
            },
            showSportsBook: !0,
            showNotificationIcon: !0
        }),
        $ = new P(q),
        ee = new L({
            showMyStats: !1,
            showLogOut: B.UserProfileMenu,
            showLoginHistory: !1,
            showDataReport: !1,
            showBonusHistory: !0,
            showHandHistory: !1,
            reportEnabled: !0,
            reportEnabledPlo5: !0,
            favoriteEnabled: !1,
            showGameTransactionHistory: !1,
            show2FactorAuthentification: !1,
            showPlayerComplaints: !1,
            canSetDarkMode: !1,
            canSetEmailNotifications: !0,
            canSetSMSNotifications: !1,
            canSetLoginNotifications: !0,
            canValidateEmail: !1,
            canSeeLegalDocument: !1,
            showBackpack: !1,
            showMyTickets: !0,
            showVIP: !1,
            showSavedHands: !1,
            showChangePassword: B.UserProfileSettings,
            userAvatarAccepted: k.All,
            showInviteFriends: !0,
            canSetChallengeQuestions: !1,
            nickNameChangeEnable: !1,
            feedbackEnabled: !0,
            ppEnabled: !0,
            tcEnabled: !0,
            kycEnabled: !0
        }),
        ae = new L(ee, {
            canSetDarkMode: !1
        }),
        ne = new h({
            enableShowGuess: !0,
            enableHandStrenght: !0,
            depositButtonEnabled: !1,
            redEnvelopeEnabled: !0,
            enableMultipleCashGamesMobile: !0,
            seatExtraScale: 1,
            audioChatEnabled: !1,
            labaEnabled: !1,
            cashierEnabled: !0,
            rulesMenuItemEnabled: !0,
            onTableCurrentBalanceEnabled: !1,
            gameSoundSettingsEnabled: !0,
            gameCustomBetSettingsEnabled: !0,
            chatTabEnabled: !1,
            emojiTabEnabled: !0,
            faceEmojiEnabled: !1,
            fullscreenEmojiEnabled: !1,
            opponentEmojiMTTEnabled: !1,
            emojiTabMTTEnabled: !1,
            opponentEmojiEnabled: !0,
            gameLogTabEnabled: !0,
            statsTabEnabled: !0,
            enableInGamePlayerStats: !0,
            bottomGameMenuEnabled: !0,
            settingMenuEnabled: !0,
            enableJackPot: !0,
            enableShakeSeatAfterGetChips: !1,
            enableAddTableExplanation: !1,
            enableMTTQuitConfirmPopup: !1,
            buyInTakeBackEnabled: !1,
            buyInTotalAmountEnabled: !1,
            enableShowOpponentCards: !0,
            enableShowBarrage: !1,
            showMttBriefPanel: !1,
            enableShowHandRankMTT: !1,
            useNewSwitchTableMTT: !0,
            enableMultiTableBar: !0,
            tableList: [p.TABLE_BACK_LUNAR, p.TABLE_BACK_COWBOY_SALOON, p.TABLE_BACK_ARENA, p.TABLE_BACK_WILD_WEST, p.TABLE_BACK_OVAL_JADE, p.TABLE_BACK_TROPIC_JUNGLE, p.TABLE_BACK_HOLDEM_DESERT, p.TABLE_BACK_WUKONG, p.TABLE_BACK_BROWN_TILT, p.TABLE_BACK_CHRISTMAS, p.TABLE_BACK_HALLOWEEN, p.TABLE_BACK_RHOMBIC_PURPLE],
            replaceZoomTextToPaceText: !0,
            replaceCowboyPokerTextToPokerFlipsText: !0,
            enablePokerFlipsNotice: !0,
            enablePokerKingTable: !1,
            enableCasinoPoint: !1,
            enableVoiceMessage: !1,
            enableSplitScreen: !1,
            cardFaceList: [c.CARD_FACE_0, c.CARD_FACE_1, c.CARD_FACE_2],
            miniGameConfig: {
                showPlayerListAndLeaderboard: !0,
                showRedEnvelop: !0,
                useOnlyEnglish: !0,
                useOnlyEnglishForGameRule: !1,
                useSharePlayerPool: !0,
                showChangePoints: !1,
                showLeftRightLeaderboard: !0,
                showMexicoDisclaimerAndCurrencyConversion: !1,
                useMoneyFromSharePoolServer: !0,
                enableUserBalanceShortCoin: !1,
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
            enableCasinoButton: !0,
            showGlobalSpinFloatingIcon: !1,
            enabledTableDataPoint: !0,
            isAutoCancelInsurrance: !1,
            applyNewUnderRaiseRule: !0,
            isAllowSignUpInMinutes: !1,
            enableSportsBookButton: !1,
            enableAntiRatHole: !0,
            useShortCurrencySymbolCashGame: !1,
            maxTournamentDetailWindows: 15,
            newReplayerFixedDefaultBackground: !1,
            enableReplayerExtraButtons: !0
        }),
        oe = new h(ne, {
            enableMultipleCashGamesMobile: !1,
            seatExtraScale: 1,
            enableShowGuess: !0,
            audioChatEnabled: !1,
            cashierEnabled: !0,
            rulesMenuItemEnabled: !0,
            chatTabEnabled: !1,
            emojiTabEnabled: !0,
            faceEmojiEnabled: !1,
            fullscreenEmojiEnabled: !1,
            opponentEmojiMTTEnabled: !1,
            emojiTabMTTEnabled: !1,
            opponentEmojiEnabled: !0,
            gameLogTabEnabled: !0,
            statsTabEnabled: !1,
            enableShowOpponentCards: !0,
            enableShowBarrage: !1,
            showMttBriefPanel: !0,
            enableMultiTableBar: !1,
            tableList: [p.TABLE_BACK_LUNAR, p.TABLE_BACK_COWBOY_SALOON, p.TABLE_BACK_ARENA, p.TABLE_BACK_WILD_WEST, p.TABLE_BACK_OVAL_JADE, p.TABLE_BACK_TROPIC_JUNGLE, p.TABLE_BACK_HOLDEM_DESERT, p.TABLE_BACK_WUKONG, p.TABLE_BACK_BROWN_TILT, p.TABLE_BACK_CHRISTMAS, p.TABLE_BACK_HALLOWEEN, p.TABLE_BACK_RHOMBIC_PURPLE],
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
            },
            enableSportsBookButton: !0,
            useShortCurrencySymbolCashGame: !0,
            maxTournamentDetailWindows: 15,
            newReplayerFixedDefaultBackground: !1,
            enableReplayerExtraButtons: !0
        }),
        ie = new g({
            ui: {
                microUpper: "< 5",
                lowLower: "5",
                lowUpper: "19.99",
                midLower: "20",
                midUpper: "99.99",
                highLower: "100 +"
            },
            val: {
                microUpper: 4.99,
                lowUpper: 19.99,
                midUpper: 99.99
            }
        }),
        re = new g(ie),
        le = new d(u);
    e("WPTOConfig", {
        generalConfig: W,
        loginConfig: Z,
        registrationConfig: Y,
        lobbyConfig: q,
        userProfileConfig: ee,
        gameConfig: ne,
        modulesConfig: U,
        securityConfig: H,
        formsConfig: V,
        walletConfig: j,
        filterDelemeterConfig: ie,
        designConfig: u,
        variableConfigData: D.getData(),
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIB8vLyP+/oMgh+d7etS3A6tQaHgTuLyqBYhEJnf2rrlKsbUVVaS6605XUI9laSixS7KUrwSRp+5dQr3t8DglCVu7JPivQGkEFmpXeoufB62N8ZLFa0SfW00Wul1ypbAuvW5q4Q+JIvgntuDuivp3M9ObIk3hKWol2o6/PXXb/m/RLv825CeEDhbL2GuqW7ZVTRH6hRSFD+vDsie9WyNrsAzyAry6yr1WLaIhDV1wfwfUib0bRwrOa6KsDMdlXghCzen0N/S2an0bbbFBTlE1k3ajmDf4zmheix+TeYKzfhNZLx+0a4tZQ6coRYU8drFEQVUA0FRHdrz9nMde2uG9RN3J7TTuh0ut5P6H/RUzeS/ool/WVkdH4jkVeScqkpqI9yxTyTy4BvtXSywEC1y32qg=="
    }), e("WPTOConfigLandscape", {
        generalConfig: F,
        loginConfig: Q,
        registrationConfig: X,
        lobbyConfig: $,
        userProfileConfig: ae,
        gameConfig: oe,
        modulesConfig: x,
        securityConfig: G,
        formsConfig: z,
        walletConfig: J,
        filterDelemeterConfig: re,
        designConfig: le,
        variableConfigData: D.getData(),
        honeyPotConfig: "zBSAbOl7vvYb1matH78F8j0n5T/XdTsCRkPsoXixPd/HmU857tYfT4yjADzLolF9Cz0nTSG32JuGEX/Udl3ivSmn3+bNKRcb5cvHIyji6iSNa2dFb/BDAIXEHVT+xfd+/iVtuy4cv/9EWxub/qjU6qzfRPxVM0KSiAUcpQfL++veJe/cTvsxLIahAav37lh0afEekZkmMEI63REF0AiIFbgkt2eVEDeYg4hTCwKrN/z0NOyIA3D12gOlpmdd7KuHK8LxFHBW+kwP9Q4HlxnCGkfDnEWjhM4ZDxlT7E9rtPa9VHa5OwFZbcfjd9zCUru3J4PhEAhJkIizPvYmMmq/tzx6ehrvZQ2GqVGbrkoIDQGljVHoQjzZUddZaIusEXcIcT5iPfLHykHQVr1pdFfRTxnldVoUxcBqwg/c5RK7RchbyzEHQCvvbSmR9nL41cVUwl0DCIJ6aMVvWmDa+APkSjjOgCX5jobo1r4+Jgys/FN3zXnpzGw0MdDl960o0BWkMf/Lfkx91TVEkT4t0FwaT7w173JwIFoIhlecdhwkTpDDpT6pQsv8sUUxPM40yGlKMilX3Hpmg67Dts0bj85Vm/yA7UYsQolMDOsl0jn2w+4mR1zCiJKuqJcCSk/dCSIp9CHdISzX9Gil7+Y4L6rkTYClHDqX88TQsPVpg1+y7UgcThFEuKjJc+uQazdnmCqPRpWf1NfmnvuPqI+YsJf3SzJw/bEclxj9vwiWRHaNfoLC+h/pUHTsRIs+/QZc5tiJ"
    });
    a._RF.pop()
}
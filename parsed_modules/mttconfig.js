import * as t from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as E from "./cc.js";
import * as i from "./Enum.js";
import * as o from "./BasicConfig.js";
import * as r from "./buildConfig.js";

function main() {
    t._RF.push({}, "de7ffNTaOBNr6TUFfADvOt5", "mttconfig", void 0);
    const R = e("buildConfig", new r),
        s = e("basicConfig", new o);
    e("customEventConfig", {
        addCardRecord: "AddCardRecord",
        removeCardRecord: "RemoveCardRecord",
        replayEvent: "ReplayEvent",
        replayAllEvent: "ReplayAllEvent",
        topBannerEvent: "TopBannerEvent",
        showGiftPlayerEvent: "ShowGiftPlayerEvent",
        selectGiftToolsEvent: "SelectGiftToolsEvent",
        clickJoinedGameEvent: "ClickJoinedGameEvent"
    }), e("localConfig", {
        key_muteList: "mute_list",
        key_emojiMuteList: "emoji_mute_list",
        key_cameraMuteList: "camera_mute_list",
        key_enableVoiceMessage: "voice_message_enabled",
        key_enableSoundEffect: "sound_effect_enabled",
        key_enableMaxBet: "max_bet_enabled",
        key_enableAutoCheck: "auto_check_enabled",
        key_enableGuessHand: "guess_hand_enabled",
        key_cardBackSetting: "card_back_setting",
        key_cardFaceSetting: "card_face_setting",
        key_first_guess_hand: "first_guess_hand",
        key_first_loop_guess: "first_loop_guess",
        key_guess_type: "first_loop_guess",
        key_mttBgColorSetting: "mtt_bg_color_setting",
        key_mttTableBgUrl: "mtt_table_bg_url",
        key_wptBgColorSetting: "wpt_bg_color_setting",
        key_sngBgColorSetting: "sng_bg_color_setting",
        key_customRaisePot1: "custom_raise_pot1",
        key_customRaisePot2: "custom_raise_pot2",
        key_customRaisePot3: "custom_raise_pot3",
        key_customPotButtons: "custom_pot_buttons",
        key_customPotButtons1: "custom_pot_buttons1",
        key_customOMHPotButtons1: "custom_omaha_pot_buttons1",
        key_customPotSet: "custom_pot_set",
        key_card_pineapple_BackSetting: "key_card_pineapple_BackSetting",
        key_card_pineapple_FaceSetting: "key_card_pineapple_FaceSetting",
        key_pineapple_mtt_BgColorSetting: "key_pineapple_mtt_BgColorSetting",
        key_pineapple_BgColorSetting: "key_pineapple_BgColorSetting",
        key_urlConfigVersion: "key_urlConfigVersion",
        key_urlConfig: "key_urlConfig",
        key_lastSetHideHallNoftificationOneDayTime: "key_lastSetHideHallNoftificationOneDayTime",
        key_enterBackground: "key_enterBackground",
        key_mttGameLevelList: "key_mttGameLevelListPb",
        key_loginData: "key_loginData",
        key_addTableExplanation: "key_addTableExplanation",
        CardBack: _({
            SET1: 0,
            SET2: 1,
            SET3: 2,
            SET4: 3
        }),
        CardFace: _({
            SET1: 0,
            SET2: 1,
            SET3: 2
        }),
        BgColor: _({
            BG0: 0,
            BG1: 1,
            BG2: 2,
            BG3: 3,
            BG4: 4,
            BG5: 5,
            BG6: 6,
            BG7: 7,
            BG8: 8,
            BG9: 9,
            BG10: 10,
            BG11: 11,
            BG12: 12,
            BG13: 13,
            BG14: 14
        }),
        getLocalStorageItem(e, t) {
            var _ = a.localStorage.getItem(e);
            return _ && "undefined" != _ ? JSON.parse(_) : (t && a.localStorage.setItem(e, JSON.stringify(t)), t)
        }
    });
    class n {
        constructor() {
            this.websocketPingInterval = 5e3, this.websocketConnectTimeoutLimit = 5e3, this.reConnectCountLimit = 10, this.POKER_MASK = {
                POKER_NUMBER_MASK: 15,
                POKER_SUIT_DIAMOND_MASK: 16,
                POKER_SUIT_CLUB_MASK: 32,
                POKER_SUIT_HEART_MASK: 64,
                POKER_SUIT_SPADE_MASK: 128,
                POKER_LITTLE_JOKER_MASK: 1,
                POKER_BIG_JOKER_MASK: 15
            }, this.smsChecksumSalt = "dk is so handsome", this.apiDataManagerSuffix = "/api/dataManager", this.apiSngSuffix = "/api/sng", this.SCENE_NAME = _({
                LOGIN: "login",
                HALL: "hall",
                PINEAPPLE: "pineappleGame",
                HOLDEM: "holdem",
                HOLDEM_REPLAY: "holdemReplay",
                HOLDEM_REPLAY_FEATURE: "holdemReplayFeature",
                PINEAPPLE_REPLAY: "pineappleReplay",
                REDIRECT_UPDATE: "redirectUpdate",
                HALL_FEATURE: "hallFeature",
                MINIGAME: "minigame",
                REDIRECT_WEB: "redirectWeb",
                MULTIPLE_GAME: "multipleGame",
                MULTIPLE_GAME_NEW: "Game"
            }), this.localLevelListNameReference = ["PpRooms", "PpLevels", "HoldemLevels", "MttTournaments", "SngTournaments", "AofTournaments"], this.mttPlayerTableEvent = "mttPlayerTableEvent", this.GAME_LEVEL_LIST_ID = _({
                HALL: 0,
                PINEAPPLE_NORMAL: 1,
                PINEAPPLE_ROLL: 2,
                SNG: 3,
                MTT: 4,
                AOF: 5,
                PINEAPPLE_COWBOY: 6,
                HOLDEM_NORMAL: 7
            }), this.GAME_ICON_ID = _({
                MTT: 0,
                PINE_NORMAL: 1,
                PINE_ROLL: 2,
                SNG: 3,
                AOF: 4,
                PINE_COWBOY: 5,
                MTT_HUNTER: 6,
                MTT_SUPER_HUNTER: 7
            }), this.messageState = _({
                unread: 0,
                read: 1,
                clear: 2
            }), this.GAME_TO_TOOL_ID = _({
                PINE_NORMAL: 0,
                MTT: 1,
                SNG: 2,
                PINE_ROLL: 3,
                AOF: 4,
                PINE_COWBOY: 5
            }), this.MTT_PRIZE_MODE = _({
                MTT_PRIZE_CONFIG_MODE_DEFAULT: 0,
                MTT_PRIZE_CONFIG_MODE_AVERAGE: 1,
                MTT_PRIZE_CONFIG_MODE_FIX: 2,
                MTT_PRIZE_CONFIG_MODE_DEFINE: 3,
                MTT_PRIZE_CONFIG_MODE_TOOL: 4
            }), this.GAME_TYPE = _({
                PINEAPPLE_NORMAL: 1,
                PINEAPPLE_LOOP: 2,
                MTT_PINEAPPLE: 3,
                SNG_HOLDEM: 4,
                MTT_HOLDEM: 5
            }), this.MTT_GAME_MODE = _({
                NONE: 0,
                PP: 1,
                NLH: 2,
                SHORT_DECK: 3,
                OMAHA: 4
            }), this.BLIND_RISE_TYPE = _({
                DURATION: 0,
                HANDS: 1
            }), this.GAME_COLOR = {
                PINE: "#0094FA",
                PINE_LOOP: "#009887",
                PINE_COWBOY: "#702DBD",
                SNG: "#AB00B6",
                AOF: "#FE0060",
                MTT: "#3844BE"
            }, this.SIGN_UP_OPTIONS = {
                tool: "tool",
                gold: "gold",
                all: "all",
                specific: "specific"
            }, this.FONT_COLOR = {
                GRAY: "#9B9B9B",
                WHITE: "#E9E1D1"
            }, this.BACKGROUND_COLOR = {
                DEEP: "#282936",
                MEDIUM: "#303241",
                SHALLOW: "#37394b"
            }, this.BUTTON_COLOR = {
                BLUE: "#0094FA"
            }, this.SIGN_COLOR = {
                POSITIVE: "#FF5A00",
                NEGATIVE: "#53FF6E",
                NEUTRAL: "#FE0060"
            }, this.HOLDEM_COLOR = {
                MENU_ENABLE: "#CCCCCC",
                MENU_DISABLE: "#505050"
            }, this.WEB_PAGE = _({
                MTT_LIST: 0,
                GAME_RESULT: 1,
                TOOL: 2
            }), this.BL_MINIGAME_KEYS = _({
                COWBOY: "cowboyHoldem"
            }), this.CURRENCY_SIGN = {
                GOLD: "",
                USD: "$"
            }, this.HOLDEM_DARK_TINT = new E(127.5, 127.5, 127.5), this.BROADCAST_MSG_STATUS = {
                NONE: "",
                READ: "1"
            }
        }
        get httpRequestURL() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get remoteLogURL() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API + "/clientLog"
        }
        get worldWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_WORLD + "/world"
        }
        get avatarHost() {
            return R.buildPlatform == i.PKW_PRO || R.buildPlatform == i.DEV ? s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API : s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_WEB
        }
        get avatarApi() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API + "/avatar"
        }
        get avatarDefault() {
            return s.SERVER_URL_HTTP_PREFIX + "://pic.pimg.tw/pdablue/490569ad70226.jpg"
        }
        get gameRecordApiHostUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get registerApiServerHostUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get mttTournamentDetailUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API + "/api/mtt"
        }
        get smsApiServerHostUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get roomVoiceServerHostUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get unifiedApiUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API
        }
        get paymentUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API + "/paymentProxyNew#"
        }
        get jackpotInfoUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_API + "/jackpotRecords"
        }
        get appDownloadUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_DOWNLOAD + (R.isPro ? "/" : "/appDownload.html")
        }
        get webUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_WEB
        }
        get imageUrl() {
            return s.SERVER_URL_HTTP_PREFIX + "://" + s.SERVER_URL_FILE
        }
        getHunterIconOpacity(e) {
            return Math.ceil(15 * (1 - 1 / Math.pow(100, e / 50))) / 15 * 255
        }
    }
    e("GlobalConfig", n);
    e("globalConfig", new n);
    class l {
        constructor() {
            this.pokersAtlas = "pineapple/cards", this.defaultOpacity = 255, this.cardMovingScale = 1.3, this.cardSelectingArea = 50, this.defaultCardScale = 1, this.fantasySecondLineStartIndex = 8, this.cardMovingOpacity = 160, this.cardMarkerOpacity = 40, this.maxDistance = 999999999999999, this.defaultTag = -1, this.discardedCardPadding = 4, this.buttonClickedDelay = 6, this.cardPlacedMessage = "cardPlacedMessage", this.defaultHandsHolderName = "hands_holder_", this.defaultPlayerName = "player_", this.FANTASY_MIN_CARDS = 14, this.SELECTED_CARD_DELTA = 30, this.CARDS_COMBINATION = _({
                NO_CARDS_COMBINATION: 0,
                HIGH_CARD: 1,
                PAIR: 2,
                TWO_PAIRS: 3,
                THREE_OF_A_KIND: 4,
                STRAIGHT: 5,
                FLUSH: 6,
                FULL_HOUSE: 7,
                FOUR_OF_A_KIND: 8,
                STRAIGHT_FLUSH: 9,
                ROYAL_FLUSH: 10
            }), this.HANDS_INDEX = _({
                BACK: 0,
                MIDDLE: 1,
                FRONT: 2
            }), this.cardFaceAtlasSetURL = ["poker_card/pineapple_card", "poker_card/cards2", "poker_card/cards3"], this.cardBackSpriteFrameURL = ["poker_card/card_back/poker_back_frame_1", "poker_card/card_back/poker_back_frame_2", "poker_card/card_back/poker_back_frame_3", "poker_card/card_back/poker_back_frame_4"], this.LoadingBlocker = "LoadingBlocker", this.PineappleGlobal = "PineappleGlobal", this.PineappleGame = "PineappleGame", this.PineappleReplayPrefab = "PineappleReplayPrefab", this.GameStartReminder = "GameStartReminder", this.TopUpWebView = "TopUpWebView", this.Emoticons = "Emoticons", this.AttackIcons = "AttackIcons", this.AttackList = "AttackList", this.GameEmoticons = "GameEmoticons", this.VoiceRecorder = "VoiceRecorder", this.Dummy = "Dummy", this.LanguageData = "LanguageManager", this.TwoPlayersGame = "TwoPlayersGame", this.ThreePlayersGame = "ThreePlayersGame", this.Player = "Player", this.Royalties = "Royalties", this.GameRecords = "GameRecords", this.GameRoundReview = "GameRoundReview", this.HostManagement = "HostManagement", this.TableStakesTopUp = "TableStakesTopUp", this.LeaveRoomAlert = "LeaveRoomAlert", this.SettlementRoom = "SettlementRoom", this.GameExplanation = "GameExplanation", this.GameMenu = "GameMenu", this.TournamentRecords = "TournamentRecords", this.TopUpBlockedDialog = "TopUpBlockedDialog", this.MessageBlockedDialog = "MessageBlockedDialog", this.SelfSetting = "SelfSetting", this.PlayerSetting = "PlayerSetting", this.MTTRanking = "MTTRanking", this.GameResult = "GameResult", this.HandsHolder = "HandsHolder", this.FantasyLandHand = "FantasyLandHand", this.DataManager = "DataManager", this.AssetsManager = "AssetsManager", this.CardHolderListener = "CardHolderListener", this.PokerInformation = "PokerInformation", this.PokerCard = "PokerCard", this.GameControls = "GameControls", this.CardMovementListener = "CardMovementListener", this.RealTimeRecord = "RealTimeRecord", this.RealTimeRecordPlayerRow = "RealTimeRecordPlayerRow", this.GameReviewPlayerHand = "GameReviewPlayerHand", this.GameLogic = "GameLogic", this.CardMarker = "CardMarker", this.GameRoomInformation = "GameRoomInformation", this.AnimationStartEndGame = "AnimationStartEndGame", this.JackpotHitCongregation = "JackpotHitCongregation", this.JackpotInfo = "JackpotInfo", this.JackpotRecordRow = "JackpotRecordRow", this.JackpotSetRow = "JackpotSetRow", this.RedPocketDialog = "RedPocketDialog", this.Marquee = "Marquee"
        }
        get wsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/pineapple"
        }
        get wsLoopUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/loop/pineapple"
        }
        get mttWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/mtt/pineapple"
        }
    }
    e("PPConfig", l);
    e("ppConfig", new l);
    class c {
        get mttWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/mtt/omaha"
        }
        get sngWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/sng/omaha"
        }
    }
    e("OMAHAConfig", c);
    e("omahaConfig", new c);
    class L {
        constructor() {
            this.EASE_RATE = 2, this.GAME_START_DELAY_TIME = .3, this.CARD_POP_TIME = .3, this.DEAL_PLAYER_CARDS_DELAY_TIME = .1, this.DEAL_PUBLIC_CARDS_DELAY_TIME = .1, this.COLLECT_STAKE_DELAY_TIME = .1, this.SEAT_ROTATE_TIME = .6, this.PLAYER_CARD_DELAY_TIME = .05, this.PLAYER_CARD_HIDE_TIME = .5, this.PLAYER_CARD_SHOW_TIME = .3, this.PLAYER_CARD_DISCARD_TIME = .3, this.PLAYER_CARD_ROTATE_TIME = .3, this.PLAYER_CARD_DEAL_TIME = .13, this.PUBLIC_CARD_HIDE_TIME = .2, this.PUBLIC_CARD_SHOW_TIME = .3, this.PUBLIC_CARD_ROTATE_TIME = .2, this.PLAYER_STAKE_MOVE_TIME = .2, this.PLAYER_STAKE_SHADOW_ATTENUATION = .2, this.PLAYER_STAKE_SHADOW_DELAY = .01, this.PUBLIC_STAKE_MOVE_TIME = .5, this.PUBLIC_STAKE_SHADOW_DELAY = .1, this.NO_OF_STAKE_BEHIND = 1, this.cardFaceAtlasSetURL = ["poker_card/cards", "poker_card/cards2", "poker_card/cards3"], this.cardBackSpriteFrameURL = ["poker_card/card_back/poker_back_frame_1", "poker_card/card_back/poker_back_frame_2", "poker_card/card_back/poker_back_frame_3", "poker_card/card_back/poker_back_frame_4"]
        }
        get mttWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/mtt/holdem"
        }
        get sngWsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/sng/holdem"
        }
        get WsUrl() {
            return s.SERVER_URL_WS_PREFIX + "://" + s.SERVER_URL_GAME + "/holdem"
        }
    }
    e("HOLDEMConfig", L);
    e("holdemConfig", new L);
    class T {
        constructor() {
            this.DIALOG = "dialog", this.OLD_BAG_ID = "oldBagIds"
        }
    }
    e("HallConfig", T);
    e("hallConfig", new T);
    t._RF.pop()
}
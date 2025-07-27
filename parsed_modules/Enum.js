import * as n from "./cc.js";

function main() {
    n._RF.push({}, "0f9cfMJMHRAuKprPAF2mV/V", "Enum", void 0);
    e("DeeplinksScene", function(e) {
        return e.Profile = "profile", e.Login = "login", e.Hall = "hall", e.Mtt = "mtt", e.Cash = "cash", e.Cashier = "cashier", e.PockerFlip = "pockerflip", e.PokerFlips = "pokerflips", e.Casino = "casino", e.LiveWPTG = "live", e.InviteFriend = "invite", e.Promotions = "promotions", e.BonusCenter = "bonuscenter", e.PokerMaster = "pokermaster", e.VideoCowboy = "video_cowboy", e.GlobalSpins = "spins", e.Kyc = "kycverification", e.SportsBook = "sportsbook", e.Notification = "notification", e.CaribbeanHoldem = "haba_holdem", e.CaribbeanStud = "haba_stud", e
    }({})), e("DeeplinksStatus", function(e) {
        return e.HallSceneLoadCompleted = "HallSceneLoadCompleted", e.MTTListLoadCompleted = "MTTListLoadCompleted", e.DismissDocumentPopup = "DismissDocumentPopup", e.CashGameListLoadCompleted = "CashGameListLoadCompleted", e.GetAttributionDataSuccess = "GetAttributionDataSuccess", e.HideLobbyPopups = "HideLobbyPopups", e
    }({})), e("DeeplinksParams", function(e) {
        return e.SceneOnWPTGApplication = "link", e.GameTypeForCashMttOrGameIdForCasino = "game", e.RoomOrTourForCashMttOrGameGroupForCasino = "room", e.SlugForPromotion = "slug", e.PageForInviteOrCashier = "page", e.CategoryForCasino = "category", e.GroupIdForCashGame = "groupGame", e
    }({})), e("DeeplinksAttributionParams", function(e) {
        return e.domain = "domain", e.url = "url", e.visitorSiteUserId = "visitorSiteUserId", e.firstVisitDate = "+click_timestamp", e.sourceVisitorSite = "sourceVisitorSite", e.utm_campaign = "utm_campaign", e.utm_source = "utm_source", e.utm_medium = "utm_medium", e.Utm = "Utm", e.incomeAccessBtag = "incomeAccessBtag", e.fbc = "fbc", e.fbp = "fbp", e.referralCode = "referralCode", e.invitingUserId = "invitingUserId", e
    }({})), e("DeeplinksDeviceInfoParams", function(e) {
        return e.deviceModel = "deviceModel", e.deviceAgent = "deviceAgent", e.deviceMacAddress = "deviceMacAddress", e
    }({})), e("DeeplinksAttributionRegisterParams", function(e) {
        return e.sourceVisitorSite = "sourceVisitorSite", e.Utm = "Utm", e.Affiliate = "Affiliate", e.advertiserTracking = "advertiserTracking", e
    }({})), e("DeeplinksURISchemaHost", function(e) {
        return e.open = "open", e
    }({})), e("native_cfg", function(e) {
        return e.PAGE_LOGIN = "login", e.PAGE_LOGIN_FIND_PASS = "login_find_pass", e.PAGE_LOGIN_REGISTER_0 = "login_register_0", e.PAGE_LOGIN_REGISTER_1 = "login_register_1", e.PAGE_LOGIN_REGISTER_2 = "login_register_2", e.EVENT_COUNT_CREATEROOM = "create_room", e.EVENT_COUNT_HANDMAP = "hand_map_count", e.EVENT_COUNT_EMOJI_TYPE = "face_type", e.EVENT_COUNT_MEMOJI_TYPE = "emoji_type", e.EVENT_COUNT_ACTION_DELAY_TIME = "action_delay_time", e.EVENT_COUNT_ROOM_DELAY_TIME = "room_delay_time", e.EVENT_COUNT_INSURANCE_DELAY_TIME = "insurance_delay_time", e.EVENT_COUNT_INSURANCE = "insurance_info", e.ANDROID_PACKAGE_NAME = "com/cocos/game/AppActivity", e.IOS_COCOAHELPER = "CocoaHelper", e
    }({})), e("SeatStatus", function(e) {
        return e[e.SeatStatus_empty = 0] = "SeatStatus_empty", e[e.SeatStatus_waiting = 1] = "SeatStatus_waiting", e[e.SeatStatus_leave_a_monment = 2] = "SeatStatus_leave_a_monment", e[e.SeatStatus_inGame_OnAction = 3] = "SeatStatus_inGame_OnAction", e[e.SeatStatus_inGame_actionType = 4] = "SeatStatus_inGame_actionType", e
    }({})), e("SeatHandsCardType", function(e) {
        return e[e.SHCT_NONE = 0] = "SHCT_NONE", e[e.SHCT_TEXAS = 1] = "SHCT_TEXAS", e[e.SHCT_PLO = 2] = "SHCT_PLO", e[e.SHCT_PLO5 = 3] = "SHCT_PLO5", e
    }({})), e("TipsType", function(e) {
        return e[e.Tips_call = 0] = "Tips_call", e[e.Tips_waitOrLeave = 1] = "Tips_waitOrLeave", e[e.Tips_check = 2] = "Tips_check", e[e.Tips_bet = 3] = "Tips_bet", e[e.Tips_mendAnte = 4] = "Tips_mendAnte", e[e.Tips_straddle = 5] = "Tips_straddle", e[e.Tips_mendStraddle = 6] = "Tips_mendStraddle", e[e.Tips_allIn = 7] = "Tips_allIn", e[e.Tips_fold = 8] = "Tips_fold", e[e.Tips_raise = 9] = "Tips_raise", e
    }({})), e("BType", function(e) {
        return e[e.BType_Call = 0] = "BType_Call", e[e.BType_Bet = 1] = "BType_Bet", e[e.BType_Raise = 2] = "BType_Raise", e[e.BType_SB = 3] = "BType_SB", e[e.BType_BB = 4] = "BType_BB", e
    }({})), e("SliderType", function(e) {
        return e[e.ShortPoker_Anti = 0] = "ShortPoker_Anti", e[e.Game_FreeFill = 1] = "Game_FreeFill", e
    }({})), e("NameTextType", function(e) {
        return e[e.SetNameType_setRole_Name = 0] = "SetNameType_setRole_Name", e[e.SetNameType_setWinNumber = 1] = "SetNameType_setWinNumber", e
    }({})), e("ActionButtonStatus", function(e) {
        return e[e.Control_Bet = 0] = "Control_Bet", e[e.Control_Raise = 1] = "Control_Raise", e[e.Control_AllIn = 2] = "Control_AllIn", e[e.Control_add_AllIn = 3] = "Control_add_AllIn", e[e.Control_Just_Call = 4] = "Control_Just_Call", e[e.Control_Default_fallOrCheck = 5] = "Control_Default_fallOrCheck", e[e.Control_Default_Call = 6] = "Control_Default_Call", e[e.Control_AllInOrFold = 7] = "Control_AllInOrFold", e[e.Control_Null = 8] = "Control_Null", e
    }({})), e("SeatType", function(e) {
        return e[e.SeatType_GameSeat = 0] = "SeatType_GameSeat", e[e.SeatType_ReplaySeat = 1] = "SeatType_ReplaySeat", e[e.SeatType_FavorReplaySeat = 2] = "SeatType_FavorReplaySeat", e
    }({})), e("SCENE", function(e) {
        return e.LOADING_SCENE = "LoadingScene", e.LOGIN_SCENE = "LoginScene", e.REGISTER_SCENE = "RegisterScene", e.HALL_SCENE = "HallScene", e.GAME_SCENE = "Game", e.GAME_SCENE_AOF = "GameAof", e.COWBOY_SCENE = "CowboyScene", e.VIDEOCOWBOY_SCENE = "VideoCowboyScene", e.HUMANBOY_SCENE = "HumanboyScene", e.POKERMASTER_SCENE = "PokerMasterScene", e.JACKFRUIT_SCENE = "JackfruitScene", e.HOTUPDATE_SCENE = "HotUpdate", e.ROOM_SCENE = "RoomScene", e.WEBVIEW_SCENE = "WebViewScene", e.HOLDEM_SCENE = "holdemScene", e.CARIBBEAN_POKER_SCENE = "CaribbeanPokerScene", e.MTT_DETAIL_SCENE = "MttDetailScene", e
    }({})), e("ToastType", function(e) {
        return e[e.ToastTypeDefault = 0] = "ToastTypeDefault", e[e.ToastTypeSuccess = 1] = "ToastTypeSuccess", e[e.ToastTypeError = 2] = "ToastTypeError", e[e.ToastTypeWarning = 3] = "ToastTypeWarning", e[e.ToastTypeInfo = 4] = "ToastTypeInfo", e[e.ToastTypeMalformedResponse = 5] = "ToastTypeMalformedResponse", e
    }({})), e("PopUpIconType", function(e) {
        return e[e.None = -1] = "None", e[e.Warning = 0] = "Warning", e[e.Location = 1] = "Location", e[e.Message = 2] = "Message", e[e.Email = 3] = "Email", e[e.Phone = 4] = "Phone", e[e.Money = 5] = "Money", e[e.ChangePassSuccess = 6] = "ChangePassSuccess", e[e.InvalidCode = 7] = "InvalidCode", e[e.Success = 8] = "Success", e[e.Contact = 9] = "Contact", e[e.Payment = 10] = "Payment", e[e.Unreachable = 11] = "Unreachable", e[e.Password = 12] = "Password", e[e.LoginAccount = 13] = "LoginAccount", e[e.Maintenance = 14] = "Maintenance", e[e.Loading = 15] = "Loading", e[e.Waiting = 16] = "Waiting", e[e.Kyc = 17] = "Kyc", e[e.PhoneWarning = 18] = "PhoneWarning", e
    }({})), e("ComponentType", function(e) {
        return e[e.Component_ccSprite = 0] = "Component_ccSprite", e[e.Component_ccMask = 1] = "Component_ccMask", e
    }({})), e("ZORDER_TYPE", function(e) {
        return e[e.ZORDER_verylow = -20] = "ZORDER_verylow", e[e.ZORDER_low = -10] = "ZORDER_low", e[e.ZORDER_0 = 0] = "ZORDER_0", e[e.ZORDER_1 = 1] = "ZORDER_1", e[e.ZORDER_2 = 2] = "ZORDER_2", e[e.ZORDER_3 = 3] = "ZORDER_3", e[e.ZORDER_4 = 4] = "ZORDER_4", e[e.ZORDER_5 = 5] = "ZORDER_5", e[e.ZORDER_6 = 6] = "ZORDER_6", e[e.ZORDER_7 = 7] = "ZORDER_7", e[e.ZORDER_15 = 15] = "ZORDER_15", e[e.ZORDER_SHADER = 9] = "ZORDER_SHADER", e[e.ZORDER_TOP = 10] = "ZORDER_TOP", e[e.ZORDER_TT = 11] = "ZORDER_TT", e[e.ZORDER_ACTIVITY = 12] = "ZORDER_ACTIVITY", e[e.ZORDER_LOADING = 13] = "ZORDER_LOADING", e[e.ZORDER_LOG = 14] = "ZORDER_LOG", e[e.RG_BUTTON = 7] = "RG_BUTTON", e[e.RG_VIEW = 7] = "RG_VIEW", e[e.SCREEN_PROTECTOR = 20] = "SCREEN_PROTECTOR", e
    }({})), e("ServerButtonType", function(e) {
        return e[e.ServerButtonType_none = 0] = "ServerButtonType_none", e[e.ServerButtonType_develop = 1] = "ServerButtonType_develop", e[e.ServerButtonType_chun = 2] = "ServerButtonType_chun", e[e.ServerButtonType_ya = 3] = "ServerButtonType_ya", e[e.ServerButtonType_bin = 4] = "ServerButtonType_bin", e[e.ServerButtonType_wei = 5] = "ServerButtonType_wei", e[e.ServerButtonType_fei = 6] = "ServerButtonType_fei", e[e.ServerButtonType_tao = 7] = "ServerButtonType_tao", e[e.ServerButtonType_jason = 8] = "ServerButtonType_jason", e[e.ServerButtonType_changxing = 9] = "ServerButtonType_changxing", e[e.ServerButtonType_max = 10] = "ServerButtonType_max", e[e.ServerButtonType_ceshifu = 11] = "ServerButtonType_ceshifu", e[e.ServerButtonType_zhenshifu = 12] = "ServerButtonType_zhenshifu", e[e.ServerButtonType_special = 2e5] = "ServerButtonType_special", e[e.ServerButtonType_invalid = 200001] = "ServerButtonType_invalid", e
    }({})), e("action_FuncType", function(e) {
        return e.to_left = "TO_LEFT", e.to_right = "TO_RIGHT", e.enter = "ENTER", e.out = "OUT", e.dt_FAST = "FAST", e.dt_NORMAL = "NORMAL", e.dt_SLOW = "SLOW", e
    }({})), e("CardNum", function(e) {
        return e[e.CARD_2 = 0] = "CARD_2", e[e.CARD_3 = 1] = "CARD_3", e[e.CARD_4 = 2] = "CARD_4", e[e.CARD_5 = 3] = "CARD_5", e[e.CARD_6 = 4] = "CARD_6", e[e.CARD_7 = 5] = "CARD_7", e[e.CARD_8 = 6] = "CARD_8", e[e.CARD_9 = 7] = "CARD_9", e[e.CARD_10 = 8] = "CARD_10", e[e.CARD_J = 9] = "CARD_J", e[e.CARD_Q = 10] = "CARD_Q", e[e.CARD_K = 11] = "CARD_K", e[e.CARD_A = 12] = "CARD_A", e[e.CARD_INVALID = 13] = "CARD_INVALID", e[e.CardNum_MAX = 14] = "CardNum_MAX", e
    }({})), e("CardSuit", function(e) {
        return e[e.CARD_DIAMOND = 0] = "CARD_DIAMOND", e[e.CARD_CLUB = 1] = "CARD_CLUB", e[e.CARD_HEART = 2] = "CARD_HEART", e[e.CARD_SPADE = 3] = "CARD_SPADE", e[e.CardSuit_MAX = 4] = "CardSuit_MAX", e
    }({})), e("CreateGameMode", function(e) {
        return e[e.CreateGame_Mode_None = 0] = "CreateGame_Mode_None", e[e.CreateGame_Mode_Normal = 1] = "CreateGame_Mode_Normal", e[e.CreateGame_Mode_MATCH = 2] = "CreateGame_Mode_MATCH", e[e.CreateGame_Mode_Short = 3] = "CreateGame_Mode_Short", e[e.CreateGame_Mode_Other = 4] = "CreateGame_Mode_Other", e[e.PLO_4 = 5] = "PLO_4", e[e.PLO_5 = 6] = "PLO_5", e
    }({})), e("GameReviewDataType", function(e) {
        return e[e.EDST_NONE = 0] = "EDST_NONE", e[e.EDST_RECORD = 1] = "EDST_RECORD", e[e.EDST_GAMEROOM = 2] = "EDST_GAMEROOM", e[e.EDST_COLLECTION = 3] = "EDST_COLLECTION", e
    }({})), e("Event", function(e) {
        return e[e.TURN_BACK = 0] = "TURN_BACK", e[e.TURN_FACE = 1] = "TURN_FACE", e[e.DEAL_OVER = 2] = "DEAL_OVER", e
    }({})), e("CardBack", function(e) {
        return e[e.CARD_BACK_0 = 0] = "CARD_BACK_0", e[e.CARD_BACK_1 = 1] = "CARD_BACK_1", e[e.CARD_BACK_2 = 2] = "CARD_BACK_2", e[e.CARD_BACK_3 = 3] = "CARD_BACK_3", e[e.CARD_BACK_MAX = 4] = "CARD_BACK_MAX", e
    }({})), e("CardBackDesktop", function(e) {
        return e[e.CARD_BACK_0 = 0] = "CARD_BACK_0", e[e.CARD_BACK_1 = 1] = "CARD_BACK_1", e[e.CARD_BACK_2 = 2] = "CARD_BACK_2", e[e.CARD_BACK_3 = 3] = "CARD_BACK_3", e[e.CARD_BACK_MAX = 4] = "CARD_BACK_MAX", e
    }({})), e("CardFace", function(e) {
        return e[e.CARD_FACE_0 = 0] = "CARD_FACE_0", e[e.CARD_FACE_1 = 1] = "CARD_FACE_1", e[e.CARD_FACE_2 = 2] = "CARD_FACE_2", e[e.CARD_FACE_MAX = 3] = "CARD_FACE_MAX", e
    }({})), e("CardFaceDesktop", function(e) {
        return e[e.CARD_FACE_0 = 0] = "CARD_FACE_0", e[e.CARD_FACE_1 = 1] = "CARD_FACE_1", e[e.CARD_FACE_2 = 2] = "CARD_FACE_2", e[e.CARD_FACE_MAX = 3] = "CARD_FACE_MAX", e
    }({})), e("TableBack", function(e) {
        return e[e.TABLE_BACK_STAR = -1] = "TABLE_BACK_STAR", e[e.TABLE_BACK_0 = 0] = "TABLE_BACK_0", e[e.TABLE_BACK_1 = 1] = "TABLE_BACK_1", e[e.TABLE_BACK_2 = 2] = "TABLE_BACK_2", e[e.TABLE_BACK_3 = 3] = "TABLE_BACK_3", e[e.TABLE_BACK_4 = 4] = "TABLE_BACK_4", e[e.TABLE_BACK_5 = 5] = "TABLE_BACK_5", e[e.TABLE_BACK_6 = 6] = "TABLE_BACK_6", e[e.TABLE_BACK_7 = 7] = "TABLE_BACK_7", e[e.TABLE_BACK_8 = 8] = "TABLE_BACK_8", e[e.TABLE_BACK_9 = 9] = "TABLE_BACK_9", e[e.TABLE_BACK_10 = 10] = "TABLE_BACK_10", e[e.TABLE_BACK_11 = 11] = "TABLE_BACK_11", e[e.TABLE_BACK_12 = 12] = "TABLE_BACK_12", e[e.TABLE_BACK_13 = 13] = "TABLE_BACK_13", e[e.TABLE_BACK_14 = 14] = "TABLE_BACK_14", e[e.TABLE_BACK_MAX = 15] = "TABLE_BACK_MAX", e
    }({})), e("TableBackDesktop", function(e) {
        return e[e.TABLE_BACK_LUNAR = 0] = "TABLE_BACK_LUNAR", e[e.TABLE_BACK_COWBOY_SALOON = 1] = "TABLE_BACK_COWBOY_SALOON", e[e.TABLE_BACK_ARENA = 2] = "TABLE_BACK_ARENA", e[e.TABLE_BACK_WILD_WEST = 3] = "TABLE_BACK_WILD_WEST", e[e.TABLE_BACK_OVAL_JADE = 4] = "TABLE_BACK_OVAL_JADE", e[e.TABLE_BACK_TROPIC_JUNGLE = 5] = "TABLE_BACK_TROPIC_JUNGLE", e[e.TABLE_BACK_HOLDEM_DESERT = 6] = "TABLE_BACK_HOLDEM_DESERT", e[e.TABLE_BACK_WUKONG = 7] = "TABLE_BACK_WUKONG", e[e.TABLE_BACK_BROWN_TILT = 8] = "TABLE_BACK_BROWN_TILT", e[e.TABLE_BACK_CHRISTMAS = 9] = "TABLE_BACK_CHRISTMAS", e[e.TABLE_BACK_HALLOWEEN = 10] = "TABLE_BACK_HALLOWEEN", e[e.TABLE_BACK_RHOMBIC_PURPLE = 11] = "TABLE_BACK_RHOMBIC_PURPLE", e
    }({})), e("SeatDriction", function(e) {
        return e[e.DRICTION_LEFT_MIDDLEDOWN = 0] = "DRICTION_LEFT_MIDDLEDOWN", e[e.DRICTION_LEFT_UP = 1] = "DRICTION_LEFT_UP", e[e.DRICTION_RIGHT_MIDDLEDOWN = 2] = "DRICTION_RIGHT_MIDDLEDOWN", e[e.DRICTION_RIGHT_UP = 3] = "DRICTION_RIGHT_UP", e[e.DRICTION_TOP_LEFT = 4] = "DRICTION_TOP_LEFT", e[e.DRICTION_TOP_RIGHT = 5] = "DRICTION_TOP_RIGHT", e[e.DRICTION_BOTTOM = 6] = "DRICTION_BOTTOM", e
    }({})), e("ActionType", function(e) {
        return e[e.Enum_Action_Null = 0] = "Enum_Action_Null", e[e.Enum_Action_Check = 1] = "Enum_Action_Check", e[e.Enum_Action_Fold = 2] = "Enum_Action_Fold", e[e.Enum_Action_Call = 3] = "Enum_Action_Call", e[e.Enum_Action_Bet = 4] = "Enum_Action_Bet", e[e.Enum_Action_Raise = 5] = "Enum_Action_Raise", e[e.Enum_Action_Allin = 6] = "Enum_Action_Allin", e[e.Enum_Action_CallMuck = 7] = "Enum_Action_CallMuck", e[e.Enum_Action_AddActionTime = 8] = "Enum_Action_AddActionTime", e[e.Enum_Action_SendCard_Common = 9] = "Enum_Action_SendCard_Common", e[e.Enum_Action_Send_HoleCards = 10] = "Enum_Action_Send_HoleCards", e[e.Enum_Action_Straddle = 11] = "Enum_Action_Straddle", e[e.Enum_Action_Post = 12] = "Enum_Action_Post", e
    }({})), e("ChatType", function(e) {
        return e[e.Enum_Emoji = 0] = "Enum_Emoji", e[e.Enum_Voice = 1] = "Enum_Voice", e
    }({})), e("DateTimeTypeByCountry", function(e) {
        return e[e.MM_DD_YYYY = 0] = "MM_DD_YYYY", e[e.YYYY_MM_DD = 1] = "YYYY_MM_DD", e[e.DD_MM_YYYY = 2] = "DD_MM_YYYY", e
    }({})), e("eTimeType", function(e) {
        return e[e.Year_Month_Day = 0] = "Year_Month_Day", e[e.Hour_Min_Sec = 1] = "Hour_Min_Sec", e[e.Hour_Minute = 2] = "Hour_Minute", e[e.Month_Day = 3] = "Month_Day", e[e.Month_Day_Hour_Min_Sec = 4] = "Month_Day_Hour_Min_Sec", e[e.Year_Month_Day_Hour_Min_Sec = 5] = "Year_Month_Day_Hour_Min_Sec", e[e.Month_Day_Hour_Min = 6] = "Month_Day_Hour_Min", e[e.Day_Hour_Min = 7] = "Day_Hour_Min", e[e.DD_MMM_YYYY_HH_MM = 8] = "DD_MMM_YYYY_HH_MM", e[e.DD_MMM_YYYY = 9] = "DD_MMM_YYYY", e[e.Hour_Minute_12 = 10] = "Hour_Minute_12", e[e.DD_MMMM = 11] = "DD_MMMM", e[e.Hh_Mm = 12] = "Hh_Mm", e[e.MM_DD_YY = 13] = "MM_DD_YY", e[e.WD_MMM_DDD = 14] = "WD_MMM_DDD", e[e.MM_DD_HH_MM = 15] = "MM_DD_HH_MM", e
    }({})), e("BettingRoundType", function(e) {
        return e[e.Enum_BettingRound_Preflop = 0] = "Enum_BettingRound_Preflop", e[e.Enum_BettingRound_Flop = 1] = "Enum_BettingRound_Flop", e[e.Enum_BettingRound_Turn = 2] = "Enum_BettingRound_Turn", e[e.Enum_BettingRound_River = 3] = "Enum_BettingRound_River", e
    }({})), e("ITEMType_Alliance", function(e) {
        return e[e.GROUP_ITEM = 0] = "GROUP_ITEM", e[e.POKERINFO_RESULT_ITEM = 1] = "POKERINFO_RESULT_ITEM", e
    }({})), e("ResultType_PokerInfo", function(e) {
        return e[e.Insurance_type = 0] = "Insurance_type", e[e.Integral_type = 1] = "Integral_type", e[e.Jackpot_type = 2] = "Jackpot_type", e[e.Award_type = 3] = "Award_type", e
    }({})), e("LANGUAGE_TYPE", function(e) {
        return e.zh_CN = "zh_CN", e.en_US = "en_US", e.vi_VN = "vi_VN", e.th_TH = "th_TH", e.ar_SA = "ar_SA", e.hi_IN = "hi_IN", e.pt_BR = "pt_BR", e.fr_CA = "fr_CA", e.es_MX = "es_MX", e.ja_JP = "ja_JP", e.ko_KR = "ko_KR", e.zh_TW = "zh_TW", e.pl_PL = "pl_PL", e.fi_FI = "fi_FI", e.no_NO = "no_NO", e.id_ID = "id_ID", e
    }({})), e("ReportType", function(e) {
        return e[e.REPORT_REGEGIST = 1] = "REPORT_REGEGIST", e[e.REPORT_PAYMENT = 2] = "REPORT_PAYMENT", e
    }({})), e("SeverType", function(e) {
        return e[e.SeverType_None = 0] = "SeverType_None", e[e.SeverType_World = 1] = "SeverType_World", e[e.SeverType_Game = 2] = "SeverType_Game", e[e.SeverType_Max = 3] = "SeverType_Max", e[e.SererType_World_WPTO = 4] = "SererType_World_WPTO", e[e.SeverType_RANK = 101] = "SeverType_RANK", e[e.SeverType_WebSocketType_None = 1e3] = "SeverType_WebSocketType_None", e[e.SeverType_WebSocketType_WORLD = 1001] = "SeverType_WebSocketType_WORLD", e[e.SeverType_WebSocketType_HOLDEM = 1002] = "SeverType_WebSocketType_HOLDEM", e[e.SeverType_WebSocketType_HOLDEM_SNG = 1003] = "SeverType_WebSocketType_HOLDEM_SNG", e[e.SeverType_WebSocketType_HOLDEM_MTT = 1004] = "SeverType_WebSocketType_HOLDEM_MTT", e[e.SeverType_WebSocketType_OMAHA_SNG = 1005] = "SeverType_WebSocketType_OMAHA_SNG", e[e.SeverType_WebSocketType_OMAHA_MTT = 1006] = "SeverType_WebSocketType_OMAHA_MTT", e[e.SeverType_WebSocketType_PINEAPPLE = 1007] = "SeverType_WebSocketType_PINEAPPLE", e[e.SeverType_WebSocketType_PINEAPPLE_LOOP = 1008] = "SeverType_WebSocketType_PINEAPPLE_LOOP", e[e.SeverType_WebSocketType_PINEAPPLE_MTT = 1009] = "SeverType_WebSocketType_PINEAPPLE_MTT", e
    }({}));
    let o = e("GameId", function(e) {
        return e[e.GameId_Dummy = 0] = "GameId_Dummy", e[e.World = 1] = "World", e[e.Texas = 2] = "Texas", e[e.StarSeat = 3] = "StarSeat", e[e.CowBoy = 10] = "CowBoy", e[e.Allin = 20] = "Allin", e[e.HumanBoy = 30] = "HumanBoy", e[e.ZoomTexas = 40] = "ZoomTexas", e[e.ZoomTexasMax = 49] = "ZoomTexasMax", e[e.VideoCowboy = 50] = "VideoCowboy", e[e.Bet = 60] = "Bet", e[e.PokerMaster = 70] = "PokerMaster", e[e.Jackfruit = 80] = "Jackfruit", e[e.Plo = 90] = "Plo", e[e.Plo5 = 91] = "Plo5", e[e.Mtt = 900] = "Mtt", e[e.World_WPTO = 1001] = "World_WPTO", e[e.Data = 10101] = "Data", e[e.Squid = 5001] = "Squid", e[e.SportsBook = 1e3] = "SportsBook", e[e.CaribbeanStud = 6001] = "CaribbeanStud", e[e.CaribbeanTexasHold = 6002] = "CaribbeanTexasHold", e
    }({}));
    e("GameNameMap", {
        [o.CowBoy]: "pokerFlip",
        [o.PokerMaster]: "pokerMaster"
    });
    e("FilterGameType", function(e) {
        return e.Texas = "Texas", e.ZoomTexas = "ZoomTexas", e.Bet = "BetServer", e.Jackfruit = "Jackfruit", e.Cowboy = "CowBoy", e.Humanboy = "HumanBoy", e.Pokermaster = "PokerMaster", e.Videoboy = "VideoCowboy", e
    }({})), e("ClientType", function(e) {
        return e[e.Dummy = 0] = "Dummy", e[e.Normal = 1] = "Normal", e[e.OverSeasNormal = 2] = "OverSeasNormal", e[e.H5 = 3] = "H5", e[e.OverSeas = 4] = "OverSeas", e[e.H5WebPage = 5] = "H5WebPage", e[e.OverSeasWebPage = 6] = "OverSeasWebPage", e[e.Vietnam = 7] = "Vietnam", e[e.VietnamWebPage = 8] = "VietnamWebPage", e[e.CowboyWeb = 9] = "CowboyWeb", e[e.Thai = 10] = "Thai", e[e.ThaiWebPage = 11] = "ThaiWebPage", e[e.WhisperEdition = 12] = "WhisperEdition", e[e.PKWDesktop = 15] = "PKWDesktop", e[e.WPTO = 16] = "WPTO", e
    }({})), e("BuildVariant", function(e) {
        return e[e.Production = 0] = "Production", e[e.Debug = 1] = "Debug", e[e.Staging = 2] = "Staging", e
    }({})), e("ECDH_SECRET_TYPE", function(e) {
        return e[e.UseX = 0] = "UseX", e[e.UseY = 1] = "UseY", e[e.UseXY = 2] = "UseXY", e
    }({})), e("MessageCenterAction", function(e) {
        return e.RGButtonVisible = "RGButtonVisible", e.RGButtonInFront = "RGButtonInFront", e.OnPaymentResponse = "onPaymentResponse", e.OpenSecurityQuestion = "OpenSecurityQuestion", e.OpenValidateEmail = "OpenValidateEmail", e.FilterHandsHistory = "FilterHandsHistory", e.FilterItemClick = "FilterItemClick", e.FilterSliderDoubleChanged = "FilterSliderDoubleChanged", e.HideWebviewShowWindows = "HideWebview_ShowWindows", e.OpenDatePicker = "OPEN_DATE_PICKER", e.OpenDatePickerCallback = "OPEN_DATE_PICKER_CALLBACK", e.OnLoginSuccessActionsReq = "onLoginSuccessActionsReq", e.OnLoginSuccess = "onLoginSuccess", e.OnUpdateServerConfigSuccess = "OnUpdateServerConfigSuccess", e.FinishUpdateServerConfig = "FinishUpdateServerConfig", e.OnSelectViewOptionSelected = "OnSelectViewOptionSelected", e.OnSelectViewShow = "OnSelectViewShow", e.OnSelectViewHide = "OnSelectViewHide", e.OnWorldServerLoginSuccess = "OnWorldServerLoginSuccess", e.OnUserAvatarChanged = "OnUserAvatarChanged", e.OnUserAvatarMaterialChanged = "OnUserAvatarMaterialChanged", e.onRedEnvelopeButtonClick = "onRedEnvelopeButtonClick", e.onDisablePopUpMsg = "onDisablePopUpMsg", e.onOpenPopUpMsg = "onOpenPopUpMsg", e.onRecordPageDisable = "onRecordPageDisable", e.OnBackFromInviteFriend = "OnBackFromInviteFriend", e.onCreateMttHallInstance = "onCreateMttHallInstance", e.OnTournamentFilterReset = "OnTournamentFilterReset", e.onCashierWebViewHide = "onCashierWebViewHide", e.changedBBGameplaySetting = "ChangedBBGameplaySetting", e.onGetNewGeoToken = "OnGetNewGeoToken", e.onDissmissNewGeoTokenPopup = "onDissmissNewGeoTokenPopup", e.onUpdateMttRecordList = "onUpdateMttRecordList", e.onSitInAllTable = "onSitInAllTable", e.onSitDownSucc = "onSitDownSucc", e.onStandUpSucc = "onStandUpSucc", e.updateMyCashGames = "updateMyCashGames", e.betValueSettingChanged = "betValueSettingChanged", e.changeTableBackground = "changeTableBackground", e.changedGSMultiplierBackgroundSetting = "changedGSMultiplierBackgroundSetting", e.OpenListMiniGamePopup = "OpenListMiniGamePopup", e.OnListviewItemSelected = "OnListviewItemSelected", e.OnMiniGamesListResponse = "MiniGamesListResponse", e.OnNotificationStatusChanged = "OnNotificationStatusChanged", e.WindowFocusChanged = "WindowFocusChanged", e.WindowRemoved = "WindowRemoved", e.MttListUpdated = "MttListUpdated", e.statusLatencyUpdated = "statusLatencyUpdated", e.OnMiniGameStart = "OnMiniGameStart", e.OnRoomWindowClosed = "room_window_closed", e.changedMuckHandsSetting = "changedMuckHandsSetting", e.soundStateChanged = "soundStateChanged", e.RefreshLobbyMyMtts = "refreshLobbyMyMtts", e.SwitchFromRegisterToLogin = "SwitchFromRegisterToLogin", e.OnWebViewWindowClosed = "webview_window_closed", e.onFetchCurrencyAPI = "onFetchCurrencyAPI", e.onRefreshJoinedTournaments = "onRefreshJoinedTournaments", e.onFontResLoaded = "onFontResLoaded", e.requestRefreshGamesList = "forceRefreshGamesList", e.onGoBack = "OnGoBack", e.onShowHall = "onWebAppShowHall", e.downloadBannerInfo = "downloadBannerInfo", e.InstallPromptStatus = "InstallPromptStatus", e.MttLevelListRefresh = "MttLevelListRefresh", e.RequestMttLobbyLevelList = "requestMttLobbyLevelList", e.OnExitMainApp = "OnExitMainApp", e.ExitRoomGame = "ExitRoomGame", e.webAppReceiveAuth = "OnWebAppReceivedAuth", e.DisableTopAppLogo = "disableTopAppLogo", e.EnableTopAppLogo = "enableTopAppLogo", e.OnGeoLocationChange = "OnGeoLocationChange", e.onCommonWebviewNodeAwayPos = "onCommonWebviewNodeAwayPos", e.onCommonWebviewNodeShowPos = "onCommonWebviewNodeShowPos", e.onHideAllWebview = "onHideAllWebview", e.onMttDetailUpdate = "onMttDetailUpdate", e.onRequestLeaveWebview = "onRequestLeaveWebview", e.onSportsBookLeaveSuccess = "onSportsBookLeaveSuccess", e.onMTTSearchBoxInput = "onMTTSearchBoxInput", e.showHomePokerTypeView = "showHomePokerType", e.NotificationShow = "NotificationShow", e.HideCashierCoinToolTips = "HideCashierCoinToolTips", e.onKYCNotificationStatus = "onKYCNotificationStatus", e.onGoToKYCPage = "onGoToKYCPage", e.OnUserDataChanged = "OnUserDataChanged", e.WindowScreenChanged = "WindowScreenChanged", e.onChangeCheckFormValid = "onChangeCheckFormValid", e.onUpdateRegisterNextButton = "onUpdateRegisterNextButton", e.IncreaseBlindLevel = "Increase_Blind_Level", e.onCaptchaverified = "onCaptchaverified", e.saveImageResult = "SaveImageResult", e.onCaptchaRefresh = "onCaptchaRefresh", e
    }({})), e("CustomEvent", function(e) {
        return e.ActionShowFinish = "ActionShowFinish", e.ActionHideStart = "ActionHideStart", e.ActionHideFinish = "ActionHideFinish", e.ActionShowStart = "ActionShowStart", e
    }({})), e("GlobalPageName", function(e) {
        return e[e.SelfExclusionTools = 0] = "SelfExclusionTools", e[e.ResponsibleGamingGuidance = 1] = "ResponsibleGamingGuidance", e[e.RiskIdentification = 2] = "RiskIdentification", e[e.PlayerVerification = 3] = "PlayerVerification", e[e.ResponsibleGamingInteractivePresentation = 4] = "ResponsibleGamingInteractivePresentation", e[e.ResponsibleGamingPolicy = 5] = "ResponsibleGamingPolicy", e[e.TermsAndConditions = 6] = "TermsAndConditions", e[e.PrivacyPolicy = 7] = "PrivacyPolicy", e[e.GamingEnforcementForm = 8] = "GamingEnforcementForm", e[e.ResponsibleGaming_Overview = 9] = "ResponsibleGaming_Overview", e[e.PlayerSupport = 10] = "PlayerSupport", e
    }({})), e("DocContentType", function(e) {
        return e[e.PlainText = 0] = "PlainText", e[e.RichText = 1] = "RichText", e[e.HTML = 2] = "HTML", e[e.URL = 3] = "URL", e[e.HTMLImage = 4] = "HTMLImage", e
    }({})), e("WORLD_ERROR", function(e) {
        return e[e.ZERO = 0] = "ZERO", e[e.OK = 1] = "OK", e[e.Block_Lobby_Locked = 501] = "Block_Lobby_Locked", e[e.Block_Stack_Limit = 502] = "Block_Stack_Limit", e[e.Block_Friend_Group = 503] = "Block_Friend_Group", e[e.Block_Game_Session_Time_limit = 504] = "Block_Game_Session_Time_limit", e
    }({})), e("ConnectServerFailedReason", function(e) {
        return e[e.Null = 0] = "Null", e[e.NotFound = 1] = "NotFound", e[e.DialFailed = 2] = "DialFailed", e
    }({})), e("SessionTerminationReason", function(e) {
        return e[e.USER_SESSION_TERMINATION_REASON_UNDEFINED = 0] = "USER_SESSION_TERMINATION_REASON_UNDEFINED", e[e.USER_SESSION_TERMINATION_REASON_LOCKED = 1] = "USER_SESSION_TERMINATION_REASON_LOCKED", e[e.USER_SESSION_TERMINATION_REASON_KICKED = 2] = "USER_SESSION_TERMINATION_REASON_KICKED", e[e.USER_SESSION_TERMINATION_REASON_BANNED = 3] = "USER_SESSION_TERMINATION_REASON_BANNED", e[e.USER_SESSION_TERMINATION_REASON_BLACKLISTED = 4] = "USER_SESSION_TERMINATION_REASON_BLACKLISTED", e[e.USER_SESSION_TERMINATION_REASON_LOCATION_BLOCKED = 5] = "USER_SESSION_TERMINATION_REASON_LOCATION_BLOCKED", e[e.USER_SESSION_TERMINATION_REASON_UNAVAILABLE_NETWORK = 6] = "USER_SESSION_TERMINATION_REASON_UNAVAILABLE_NETWORK", e
    }({})), e("LogOutReason", function(e) {
        return e.Unknown = "Unknown", e.Manual = "Manual", e.GeoComplyPopup = "GeoComply Error popup", e.TouristUpgrade = "Tourist upgrade account", e.RGSelfExclude = "Responsible Gaming self exclude", e.KYCDocsInProgress = "Account Locked while KYC is in progress (reviewing submitted document)", e.LegalDocsNotAccepted = "Legal Documents not accepted at login", e.BackgroundTimeout = "App in background for too much time (more than 15 min)", e.ConnectionFailed = "Server Connection failed", e.LocationNotAllowed = "Location not allowed", e.ServerDown = "Server Down", e.TouristSwitchUser = "Tourist switch user", e.NDRPServerError = "NDRP status verification api failed", e.CURPServerError = "CURP Kyc status verifivation api failed", e.NDRPCheckFailed = "User NDRP status is failed", e
    }({})), e("SpecialTournamentType", function(e) {
        return e[e.None = 0] = "None", e[e.WPTDailyAsia = 1] = "WPTDailyAsia", e[e.DailyPrime = 2] = "DailyPrime", e[e.WeeklyGoldenBounty = 3] = "WeeklyGoldenBounty", e[e.HyperDash = 4] = "HyperDash", e[e.WPTMysteryMillion = 5] = "WPTMysteryMillion", e[e.OneShot = 6] = "OneShot", e[e.BountyRumble = 7] = "BountyRumble", e[e.CrazyFreeroll = 8] = "CrazyFreeroll", e[e.WPTLive = 9] = "WPTLive", e
    }({})), e("GATE_MSGID", function(e) {
        return e[e.CONNECT_SERVER_FAILED_NOTIFY = 1003] = "CONNECT_SERVER_FAILED_NOTIFY", e[e.SERVER_CLOSE_NOTIFY = 1006] = "SERVER_CLOSE_NOTIFY", e
    }({})), e("ButtonType", function(e) {
        return e[e.ONE_BUTTTON = 0] = "ONE_BUTTTON", e[e.TWO_BUTTON = 1] = "TWO_BUTTON", e[e.TWO_BUTTON_AOF = 2] = "TWO_BUTTON_AOF", e[e.TWO_BUTTON_BUYAOF = 3] = "TWO_BUTTON_BUYAOF", e[e.ONE_BUTTON_LUCKTURNTABLE = 4] = "ONE_BUTTON_LUCKTURNTABLE", e[e.ONE_BUTTON_BOOMTIP = 5] = "ONE_BUTTON_BOOMTIP", e[e.TWO_BUTTON_FOLD_LOOK = 6] = "TWO_BUTTON_FOLD_LOOK", e[e.TWO_BUTTON_FOLD_LOOK_ZOOM = 7] = "TWO_BUTTON_FOLD_LOOK_ZOOM", e[e.TWO_BUTTON_FOLD = 8] = "TWO_BUTTON_FOLD", e[e.TWO_BUTTON_SILIAO_TIPS = 9] = "TWO_BUTTON_SILIAO_TIPS", e[e.TWO_BUTTON_BUYIN_TIPS = 10] = "TWO_BUTTON_BUYIN_TIPS", e[e.TWO_BUTTON_LIMIT_TIPS = 11] = "TWO_BUTTON_LIMIT_TIPS", e[e.TWO_BUTTON_PAUSE_GAME_TIPS = 12] = "TWO_BUTTON_PAUSE_GAME_TIPS", e[e.TWO_BUTTON_OPEN_Security_Box = 13] = "TWO_BUTTON_OPEN_Security_Box", e[e.TWO_BUTTON_MY_RED_PACKETS = 14] = "TWO_BUTTON_MY_RED_PACKETS", e[e.TWO_BUTTON_MTT_FRAME = 15] = "TWO_BUTTON_MTT_FRAME", e[e.TWO_BUTTON_NETWORK = 16] = "TWO_BUTTON_NETWORK", e[e.TWO_BUTTON_SWITCH_TABLE = 17] = "TWO_BUTTON_SWITCH_TABLE", e
    }({})), e("ButtonStyle", function(e) {
        return e[e.TWO_BUTTON = 0] = "TWO_BUTTON", e[e.GRAY_BUTTON = 1] = "GRAY_BUTTON", e[e.GOLD_BUTTON = 2] = "GOLD_BUTTON", e
    }({})), e("ListRecordType", function(e) {
        return e[e.ListRecordTypeType_Get = 0] = "ListRecordTypeType_Get", e[e.ListRecordTypeType_send = 1] = "ListRecordTypeType_send", e
    }({})), e("RedItemType", function(e) {
        return e[e.gold = 0] = "gold", e[e.integral = 1] = "integral", e[e.usdt = 2] = "usdt", e[e.goods = 3] = "goods", e
    }({})), e("UserActionType", function(e) {
        return e[e.Login = 0] = "Login", e
    }({})), e("UserLoginMode", function(e) {
        return e.Email = "Email", e.Phone = "Phone", e
    }({})), e("EnterHallJumpTo", function(e) {
        return e[e.None = 0] = "None", e[e.ClubScene = 1] = "ClubScene", e[e.DepositScene = 2] = "DepositScene", e
    }({})), e("TIME_ZONE", function(e) {
        return e[e.LOCAL = 10] = "LOCAL", e.INDIA = "Asia/Kolkata", e
    }({})), e("AppJurisdiction", function(e) {
        return e.Asia = "PKW", e.WPTO = "WPTO", e.WPTG = "WPTG", e.WPTGMX = "WPTG", e.WPTGBRStore = "WPTG", e.WPTGO = "WPTG", e.WPTGMXStore = "WPTG", e.WPTGPH = "WPTG", e.WPTGROWStore = "WPTG", e
    }({})), e("AppJurisdictionNumber", function(e) {
        return e[e.Asia = 1] = "Asia", e[e.WPTO = 4] = "WPTO", e[e.WPTG = 5] = "WPTG", e
    }({})), e("AppBrand", function(e) {
        return e[e.PKW = 0] = "PKW", e[e.WPTO = 1] = "WPTO", e
    }({})), e("AppClone", function(e) {
        return e[e.NONE = 0] = "NONE", e[e.WPTO = 1] = "WPTO", e[e.WPTG = 2] = "WPTG", e[e.WPTGO = 3] = "WPTGO", e[e.WPTGPH = 4] = "WPTGPH", e
    }({})), e("Layout", function(e) {
        return e[e.Both = 0] = "Both", e[e.Mobile = 1] = "Mobile", e[e.Landscape = 2] = "Landscape", e
    }({})), e("Functionality", function(e) {
        return e.login = "login", e.registration = "registration", e.payments = "payments", e.invite = "invite", e.casino = "casino", e.poker = "poker", e.P2P = "p2p", e.guestRegistration = "guestRegistration", e.crossell = "crossell", e
    }({})), e("CurrentScreen", function(e) {
        return e.ApplicationStarted = "none", e.promotionScreen = "promotionScreen", e.Login = "mainLoginScreen", e.register = "registerScreen", e.validation = "validation", e.sendCodePopup = "sendCodePopup", e.account = "account", e.profile = "profile", e.visitorPopup = "visitorPopup", e.deposit = "deposit", e.profileSettings = "profileSettings", e.inviteFriends = "inviteFriends", e.referralLink = "referralLink", e.casinoGameSelection = "casinoGameSelection", e.lobby = "lobby", e.room = "room", e.store = "store", e.invite = "invite", e.referAFriend = "referAFriend", e.referAFriendInvitation = "referAFriendInvitation", e.MTTGameRoom = "mttGameRoom", e.registrationStageOne = "registrationStageOne", e.registrationStageOneCreateAccount = "registrationStageOneCreateAccount", e.createPassword = "createPassword", e.forgotPassword = "forgotPassword", e.registrationStageTwo = "registrationStageTwo", e.registrationStageTwoOneLastStep = "registrationStageTwoOneLastStep", e.tipsForGuestLogin = "tipsForGuestLogin", e.registrationStageTwoAccountCompletion = "registrationStageTwoAccountCompletion", e.playerSupport = "playerSupport", e.termsOfService = "termsOfService", e.privacyPolicy = "privacyPolicy", e
    }({})), e("segmentEvent", function(e) {
        return e.ApplicationStarted = "ApplicationStarted", e.ScreenOpened = "ScreenOpened", e.PromotionShown = "PromotionShown", e.Clicked = "Clicked", e.LogInInitiated = "LogInInitiated", e.UserLoggedIn = "UserLoggedIn", e.UserLoggedInFailed = "UserLoggedInFailed", e.UserLoggedOut = "UserLoggedOut", e.GetCodeInitiated = "GetCodeInitiated", e.InputFieldValueEntered = "InputFieldValueEntered", e.UserRegistrationStarted = "UserRegistrationStarted", e.UserRegistered = "UserRegistered", e.InviteLinkCopied = "InviteLinkCopied", e.CasinoGameSelected = "CasinoGameSelected", e.LobbyGameTypeSelected = "LobbyGameTypeSelected", e.LobbyStakeSelected = "LobbyStakeSelected", e.LobbyFilterApplied = "LobbyFilterApplied", e.PokerRoomJoined = "PokerRoomJoined", e.PokerRoomJoiningDenied = "PokerRoomJoiningDenied", e.PokerTableBoughtIn = "PokerTableBoughtIn", e.PlayerBuyInFailed = "PlayerBuyInFailed", e.PokerRoomLeft = "PokerRoomLeft", e.PokerTableSatOut = "PokerTableSatOut", e.PokerTableSittingDenied = "PokerTableSittingDenied", e.DepositInitiated = "DepositInitiated", e.RegistrationStageOneCompleted = "RegistrationStageOneCompleted", e.RegistationStageOneFailed = "RegistrationStageOneFailed", e.RegistrationStageTwoStarted = "RegistrationStageTwoStarted", e.RegistrationStageTwoCompleted = "RegistrationStageTwoCompleted", e.RegistrationStageTwoFailed = "RegistrationStageTwoFailed", e.CasinoGameStarted = "CasinoGameStarted", e.PromotionCancelled = "PromotionCancelled", e.PokerFlipLaunched = "PokerFlipLaunched", e.DataPointDisplayToggled = "BBChipsDisplayToggled", e.CrossSellButtonClicked = "CrossSellButtonClicked", e.TableNotificationDismissed = "TableNotificationDismissed", e.VerificationMethodChosen = "VerificationMethodChosen", e.RegistrationStageOneCreateAccountClicked = "RegistrationStageOneCreateAccountClicked", e.PasswordResetInitiated = "PasswordResetInitiated", e.PasswordResetCompleted = "PasswordResetCompleted", e.PasswordResetFailed = "PasswordResetFailed", e.CodeVerification = "CodeVerification", e.ContinueAsGuestUser = "ContinueAsGuestUser", e
    }({})), e("DiscoverGameType", function(e) {
        return e[e.ALL = 0] = "ALL", e[e.DZPK = 1] = "DZPK", e[e.DZPK_SHORT = 2] = "DZPK_SHORT", e[e.AOF = 3] = "AOF", e[e.BET = 4] = "BET", e[e.ZOOM_TEXAS = 5] = "ZOOM_TEXAS", e[e.MTT = 6] = "MTT", e[e.JACKFRUIT = 7] = "JACKFRUIT", e[e.PLO = 8] = "PLO", e[e.GLOBAL_SPIN = 9] = "GLOBAL_SPIN", e
    }({})), e("JUNMPGAMETYPE", function(e) {
        return e[e.JUNMP_TO_MINI_GAME = 0] = "JUNMP_TO_MINI_GAME", e[e.JUNMP_TO_SPORT = 1] = "JUNMP_TO_SPORT", e[e.JUNMP_TO_ELECT_LIST = 2] = "JUNMP_TO_ELECT_LIST", e[e.JUNMP_TO_ELECT_GAME = 3] = "JUNMP_TO_ELECT_GAME", e[e.JUNMP_TO_WATCH_MACTCHS = 4] = "JUNMP_TO_WATCH_MACTCHS", e
    }({})), e("GameTypeIcon", function(e) {
        return e.NLHE = "NLHE", e.SPLASH = "Splash", e.SD = "SD", e.MTT = "MTT", e.PLO = "PLO", e
    }({})), e("popSilenceType", function(e) {
        return e[e.calmDownNotice = 0] = "calmDownNotice", e[e.countDownHall = 1] = "countDownHall", e[e.countDownGame = 2] = "countDownGame", e
    }({})), e("Server_Error_Codes", function(e) {
        return e[e.OK = 1] = "OK", e[e.Duplicate_Login = 4] = "Duplicate_Login", e[e.Unable_To_Query_Bonus_Code = 100000011] = "Unable_To_Query_Bonus_Code", e[e.Value_Not_Found_Bonus_Code = 10000027] = "Value_Not_Found_Bonus_Code", e[e.Duplicate_Entries_Bonus_Code = 10000029] = "Duplicate_Entries_Bonus_Code", e[e.Invalid_Bonus_Code = 10000065] = "Invalid_Bonus_Code", e[e.Invalid_Invite_Code = 10000066] = "Invalid_Invite_Code", e
    }({})), e("InputSchemaKey", function(e) {
        return e.BonusCode = "bonusCode", e
    }({})), e("ConfirmButtonStyle", function(e) {
        return e[e.Primary = 1] = "Primary", e[e.PopupConfirmBtn = 1] = "PopupConfirmBtn", e
    }({})), e("CancelButtonStyle", function(e) {
        return e[e.SecondaryBorderOnly = 25] = "SecondaryBorderOnly", e[e.Third = 3] = "Third", e
    }({})), e("SEAT_POSITION_TYPE", function(e) {
        return e[e.TOP = 0] = "TOP", e[e.TOP_LEFT = 1] = "TOP_LEFT", e[e.TOP_RIGHT = 2] = "TOP_RIGHT", e[e.LEFT = 3] = "LEFT", e[e.LEFT_TOP = 4] = "LEFT_TOP", e[e.RIGHT = 5] = "RIGHT", e[e.RIGHT_TOP = 6] = "RIGHT_TOP", e[e.BOTTOM = 7] = "BOTTOM", e
    }({})), e("EarnViewTabType", function(e) {
        return e[e.None = 99] = "None", e[e.Recharge = 0] = "Recharge", e[e.Earn = 1] = "Earn", e[e.Exchange = 2] = "Exchange", e[e.Rewards = 3] = "Rewards", e[e.Transfers = 4] = "Transfers", e[e.Query = 5] = "Query", e
    }({}));
    e("MaxString", "Max");
    e("CashierEvents", function(e) {
        return e.cashierInitLoad = "cashierInitLoad", e.fetchCashierConfig = "fetchCashierConfig", e.cashierPageInit = "cashierPageInit", e.connectingDevCode = "connectingDevCode", e.newProviderWindow = "newProviderWindow", e.navigateToCashier = "navigateToCashier", e.newWindowOpenedSuccess = "newWindowOpenedSuccess", e.cashierServerError = "cashierServerError", e.none = "none", e.cashierForceReload = "cashierForceReload", e.stopAllResponses = "stopAllResponses", e
    }({})), e("CashierTracerMetrics", function(e) {
        return e.pspError = "pspError", e.serverError = "serverError", e.forceReload = "forceReload", e.onDepositFn = "onDepositFn", e.onWithDrawalFn = "onWithDrawalFn", e.general = "general", e.error = "error", e.onClose = "onClose", e.none = "none", e.loadingTime = "loadingTime", e.CashierTransactionSuccessful = "CashierTransactionSuccessful", e.CashierDepositSuccessful = "DepositSuccessful", e.CashierTransactionFailed = "CashierTransactionFailed", e.CashierTransactionCancelled = "CashierTransactionCancelled", e.CashierTransactionPending = "CashierTransactionPending", e.CashierTransactionStatusChanged = "CashierTransactionStatusChanged", e.CashierStatusChanged = "CashierStatusChanged", e.CashierNavigated = "CashierNavigated", e.CashierStartedLoading = "CashierStartedLoading", e.CashierLoadingCompleted = "CashierLoadingCompleted", e.CashierLoadingStatus = "CashierLoadingStatus", e.CashierLoadingFailed = "CashierLoadingFailed", e.CashierProviderWindowOpened = "CashierProviderWindowOpened", e.CashierPaymentMethodSelected = "CashierPaymentMethodSelected", e.CashierPaymentMethodLoaded = "CashierPaymentMethodLoaded", e.CashierUserPermissionDenied = "CashierUserPermissionDenied", e.CashierLoadedAfterFailure = "CashierLoadedAfterFailure", e.cashierJsScheme = "cashier", e.p2pTabStatusFailure = "p2pTabStatusFailure", e.p2pStatus = "p2pStatus", e.p2pStatusTransferPageError = "p2pStatusTransferPageError", e.p2pStatusInit = "p2pStatusInit", e.recordsPageError = "recordsPageError", e.CashierParseWebDataFailed = "CashierParseWebDataFailed", e
    }({})), e("PopupsActiveStatusEvents", function(e) {
        return e.somePopupIsActive = "somePopupIsActive", e.noPopupsActive = "noPopupsActive", e.externalWindowsActive = "externalWindowsActive", e.none = "none", e
    }({})), e("UserInfoIconType", function(e) {
        return e[e.None = -1] = "None", e[e.KYC = 0] = "KYC", e
    }({})), e("PlayerLocks", function(e) {
        return e.CASINO = "casino", e.MTT = "mtt", e.POKERFLIPS = "pokerflips", e.SPORTS_BOOK = "sports", e
    }({})), e("PopupTypes", function(e) {
        return e.General = "general", e.Promotion = "promotion", e
    }({}));
    let t = e("CurrencyType", function(e) {
        return e.None = "None", e.USD = "USD", e.CNY = "CNY", e.USDT = "USDT", e.EUR = "EUR", e.GBP = "GBP", e.GOLDCOIN = "GOLD", e.MXN = "MXN", e.CASINO_COIN = "CASINO_COIN", e.PHP = "PHP", e
    }({}));
    e("Currencies", {
        [t.None]: {
            symbol: "",
            code: "",
            type: t.None,
            iconPath: ""
        },
        [t.USD]: {
            symbol: "$",
            code: "USD",
            type: t.USD,
            iconPath: "textures/currencies/USD"
        },
        [t.CNY]: {
            symbol: "CN¥",
            shortSymbol: "¥",
            code: "CNY",
            type: t.CNY,
            iconPath: "textures/currencies/CNY"
        },
        [t.USDT]: {
            symbol: "",
            code: "USDT",
            type: t.USDT,
            iconPath: "textures/currencies/USDT"
        },
        [t.EUR]: {
            symbol: "€",
            code: "EUR",
            type: t.EUR,
            iconPath: "textures/currencies/EUR"
        },
        [t.GBP]: {
            symbol: "£",
            code: "GBP",
            type: t.GBP,
            iconPath: "textures/currencies/GBP"
        },
        [t.GOLDCOIN]: {
            symbol: "",
            code: "CNY",
            type: t.GOLDCOIN,
            iconPath: "textures/currencies/GoldCoin"
        },
        [t.MXN]: {
            symbol: "MXN",
            code: "MXN",
            type: t.MXN,
            iconPath: ""
        },
        [t.CASINO_COIN]: {
            symbol: "",
            code: "USD",
            type: t.CASINO_COIN,
            iconPath: "textures/currencies/CasinoCoin"
        },
        [t.PHP]: {
            symbol: "PHP",
            code: "PHP",
            type: t.PHP,
            iconPath: ""
        }
    });
    e("ConnectionTracingAction", function(e) {
        return e.Start = "start", e.Open = "open", e.Close = "close", e.Error = "error", e.Timeout = "timeout", e
    }({})), e("HeartBeatTracingAction", function(e) {
        return e[e.Request = 0] = "Request", e[e.Response = 1] = "Response", e[e.TimeOut = 2] = "TimeOut", e
    }({})), e("HttpApisTracingAction", function(e) {
        return e[e.Request = 0] = "Request", e[e.Response = 1] = "Response", e[e.Error = 2] = "Error", e[e.TimeOut = 3] = "TimeOut", e[e.Abort = 4] = "Abort", e
    }({})), e("RGViewState", function(e) {
        return e[e.Menu = 0] = "Menu", e[e.Overview = 1] = "Overview", e[e.ExcludeMe = 2] = "ExcludeMe", e[e.DepositLimit = 3] = "DepositLimit", e[e.LossLimit = 4] = "LossLimit", e[e.WagerLimit = 5] = "WagerLimit", e[e.PlayTime = 6] = "PlayTime", e[e.RCI = 7] = "RCI", e[e.LimitHistory = 8] = "LimitHistory", e
    }({})), e("DocAgreeEventType", function(e) {
        return e.OnBack = "OnBack", e.OnFinish = "OnFinish", e.OnAccept = "OnAccept", e
    }({})), e("BuildPlatform", function(e) {
        return e[e.LOCAL_DEV = 0] = "LOCAL_DEV", e[e.DEV = 1] = "DEV", e[e.PRE_PRO = 2] = "PRE_PRO", e[e.PRO = 3] = "PRO", e[e.PKW_PRO = 4] = "PKW_PRO", e
    }({})), e("PushNoticeType", function(e) {
        return e[e.PUSH_ERROR = 0] = "PUSH_ERROR", e[e.PUSH_LOBBY = 1] = "PUSH_LOBBY", e[e.PUSH_WORLD = 2] = "PUSH_WORLD", e[e.PUSH_TEXAS = 3] = "PUSH_TEXAS", e[e.PUSH_COWBOY = 4] = "PUSH_COWBOY", e[e.PUSH_HUMANBOY = 5] = "PUSH_HUMANBOY", e[e.PUSH_ALLIN = 6] = "PUSH_ALLIN", e[e.PUSH_VIDEOCOWBOY = 7] = "PUSH_VIDEOCOWBOY", e[e.PUSH_ZOOM_TEXAS = 8] = "PUSH_ZOOM_TEXAS", e[e.PUSH_BET = 9] = "PUSH_BET", e[e.PUSH_POKERMASTER = 10] = "PUSH_POKERMASTER", e[e.PUSH_JACKFRUIT = 11] = "PUSH_JACKFRUIT", e[e.PUSH_PLO = 12] = "PUSH_PLO", e[e.PUSH_STAR_SEAT = 13] = "PUSH_STAR_SEAT", e
    }({})), e("PromoTypes", function(e) {
        return e[e.KingsOfCash = 0] = "KingsOfCash", e[e.LeaderboardPopup = 1] = "LeaderboardPopup", e[e.WorldChampionship = 2] = "WorldChampionship", e[e.PLO5PromoPopup = 3] = "PLO5PromoPopup", e[e.WPTGEventJP = 4] = "WPTGEventJP", e
    }({})), e("WhitelistType", function(e) {
        return e.GEOCOMPLY = "geocomply", e
    }({})), e("ThirdPartyErrorCode", function(e) {
        return e[e.MttErrorNotEnoughMoney = 10000062] = "MttErrorNotEnoughMoney", e[e.Mtt_Param_Error = 60080] = "Mtt_Param_Error", e[e.Sng_Max_Limit_Join = 60090] = "Sng_Max_Limit_Join", e[e.Sng_Room_End = 50072] = "Sng_Room_End", e
    }({})), e("WPTG_RoomEvent", function(e) {
        return e.AddRoom = "AddRoom", e.ExitRoom = "ExitRoom", e.LeaveToLobby = "LeaveToLobby", e
    }({}));
    e("LOOSE_GAME_NAME_PREFIX", "LSHL");
    e("CashierTabType", function(e) {
        return e[e.None = 0] = "None", e[e.Deposit = 1] = "Deposit", e[e.Withdraw = 2] = "Withdraw", e[e.Transfer = 4] = "Transfer", e[e.Records = 8] = "Records", e[e.Exchange = 16] = "Exchange", e[e.Rewards = 32] = "Rewards", e[e.All = 63] = "All", e
    }({})), e("ChatServiceLanguage", function(e) {
        return e.en_US = "en_US", e.ko_KR = "ko_KR", e.vi_VN = "vn_VN", e.ja_JP = "ja_JP", e
    }({})), e("MTT_PAYMENT_TYPE", function(e) {
        return e[e.Ticket = 0] = "Ticket", e[e.Cash = 1] = "Cash", e
    }({})), e("ScrollViewEventType", function(e) {
        return e[e.BOUNCE_BOTTOM = 6] = "BOUNCE_BOTTOM", e[e.BOUNCE_LEFT = 7] = "BOUNCE_LEFT", e[e.BOUNCE_RIGHT = 8] = "BOUNCE_RIGHT", e[e.BOUNCE_TOP = 5] = "BOUNCE_TOP", e[e.SCROLL_BEGAN = 12] = "SCROLL_BEGAN", e[e.SCROLL_ENDED = 9] = "SCROLL_ENDED", e[e.SCROLL_ENDED_WITH_THRESHOLD = 11] = "SCROLL_ENDED_WITH_THRESHOLD", e[e.SCROLL_TO_BOTTOM = 1] = "SCROLL_TO_BOTTOM", e[e.SCROLL_TO_LEFT = 2] = "SCROLL_TO_LEFT", e[e.SCROLL_TO_RIGHT = 3] = "SCROLL_TO_RIGHT", e[e.SCROLL_TO_TOP = 0] = "SCROLL_TO_TOP", e[e.SCROLLING = 4] = "SCROLLING", e[e.TOUCH_UP = 10] = "TOUCH_UP", e
    }({})), e("MTTGameViewCallEvent", function(e) {
        return e[e.None = 0] = "None", e[e.MultipleBarTabClicked = 1] = "MultipleBarTabClicked", e[e.LobbyMttHallDetailAutoLaunch = 2] = "LobbyMttHallDetailAutoLaunch", e
    }({})), e("VerificationType", function(e) {
        return e.EMAIL = "Email", e.SMS = "Sms", e
    }({}));
    n._RF.pop()
}
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as l from "./HashMap.js";
import * as g from "./Enum.js";
import * as u from "./Enum.js";
import * as h from "./Enum.js";
import * as d from "./AnalyticsHandler.js";
import * as _ from "./KYCHandler.js";
import * as c from "./MessageSender.js";
import * as p from "./RequestLoginArgs.js";
import * as f from "./PopupMsgHelper.js";
import * as m from "./PopupMsgHelper.js";

function main() {
    var y, C;
    e._RF.push({}, "971594f77ZNe5yxuzDyaNEP", "userData", void 0);
    class S {
        constructor() {
            this.nUid = 0, this.nType = 0, this.sRemark = "", this.nickname = "", this.avatar = "", this.plat = 0
        }
    }
    t("RemarkData", S);
    t("ServerInfo", class {
        constructor() {
            this.data = "", this.api = "", this.qiniu = "", this.h5 = "", this.invalid = void 0
        }
    });
    class k {
        constructor() {
            this.Total_win_money = 0, this.Total_hand_card_count = 0, this.Vpip_rate = 0, this.Win_rate = 0, this.level_hands = 0, this.Bb100 = 0, this.Pfr_rate = 0, this.Af_rate = 0, this.Sb_rate = 0, this.Etf_rate = 0, this.Wsf_rate = 0, this.Wtsd_rate = 0, this.Wsd_rate = 0, this.Rate_3bet = 0, this.Rate_fold_to_3bet = 0, this.Cbet_rate = 0, this.Total_enter_game_count = 0, this.Total_end_room_count = 0, this.Total_buyin = 0, this.Enter_rate = 0, this.Fight_100 = 0, this.Fight_average = 0, this.Buyin_average = 0, this.UID = 0, this.star_duration = 0, this.liked_count = 0, this.has_liked = !1, this.intimacy = 0, this.Bb100s = []
        }
    }
    t("Pokerdata", k);
    t("Bb100Info", class {
        constructor() {
            this.bb_value = 0, this.total_win_bb_count = 0, this.bb_100 = 0
        }
    });
    t("RankData", class {
        constructor() {
            this.uid = 0, this.name = "", this.head = "", this.updateAt = 0, this.rank = 0, this.profit = 0, this.coin = 0, this.frequency = 0, this.plat = 0
        }
    });
    const {
        ccclass: I,
        property: P
    } = i;
    t("userData", I(((C = class t extends s {
        constructor(...t) {
            super(...t), this.sharedPlayerId = null, this._user_id = null, this._u32Uid = null, this.sharedPlayerToken = null, this.originalSharedPlayerToken = null, this.originalUserToken = null, this._user_token = "", this.showLoadingScreenOnInitialFetch = !1, this.playerLocks = void 0, this.whitelist = [], this.playerFeatures = void 0, this.verificationType = h.EMAIL, this.secretKey = "", this.areaCode = null, this.user_ip = null, this.user_safe = null, this.mobile = null, this.isTouristUser = !1, this.isOpenUpdateUserMode = !1, this.avatar = null, this.avatar_thumb = null, this.nick_name = null, this.gender = 1, this.user_marks = null, this.user_area = null, this.diamond_num = 0, this.u32Chips = 0, this.u32Deposit_gold = 0, this.email = "", this.is_Total_amount_Update = !1, this._total_amount = 0, this.goldCoinAmount = 0, this._countryISO2 = "", this.loginAfterRegister = !1, this.usdt = 0, this.deposit_usdt = 0, this.priorityareaCode = "", this.prioritymobile = "", this.game_coin = 0, this.casino_coin = 0, this.user_points = 0, this.points_ratio = 1e3, this.games_max = null, this.clubs_max = null, this.current_games = null, this.current_clubs = null, this.reg_code = null, this.u32CardType = null, this.card_expire = null, this.login_server_index = 0, this.shopUrl = "", this.vipTool_url = "", this.pay_type = 0, this.button_1 = "", this.button_1_english = "", this.button_2 = "", this.button_2_english = "", this.button_3 = "", this.button_3_english = "", this.pkf_add_url = "", this.KYCVerificationStatus = "", this.hasBoInitiatedKyc = !1, this.file_upload_url = "", this.is_allow_update_name = !1, this.invitation_code = null, this.deviceInfo = "", this.m_bIsNewRegisted = !1, this.headUrl = "", this.HeadPath = "", this.doMain = [], this.server_index = 0, this.server_reconnect_num = void 0, this.firstClubId = null, this.firstAlliId = null, this.isEncrypt = [], this.CustomUrl = "", this.vRemarkData = new l, this.m_totalBuyOut = 0, this.login_server_list = [], this.m_bIsReconnect = !1, this.m_bIsLoginServerSucc = !1, this.isFirstLogin = !0, this.isfirst = null, this.isgoldenough = null, this.chargefee = null, this.freecounts = null, this.auditGameuuid = "", this.club_head = "", this.isvpn = !1, this.isban = !1, this.isallowsimulator = !1, this.download_url = "", this.m_rankInfos = [], this.m_rank = void 0, this.isShowLuckTurntables = !0, this.bk_img = "", this.emailValid = void 0, this.verityType = 1, this.sl_account = "", this.bindInputSLAccount = "", this.is_bind_sl = !1, this.sl_down_url = "", this.is_alert_sl = !1, this.mark_edit_state = 0, this.isSystemTimeIncorrect = !1, this.isUserRequestJoinMiniGame = !1, this.help_wrap_list = [], this.total_history_amount = 0, this.left_help_count = 0, this.is_goto_myredpacket = !1, this.userNDRPStatus = null, this.depositStatus = null, this.hand_num = 0, this.luckdrawslen = 0, this.playerHands = [], this.ReferralsList = [], this.ReferralsTotal = void 0, this.maxReferralsMember = void 0, this.ReferralsPageNum = void 0, this.summaryInfo = void 0, this.SafeDetailList = [], this.luckindex = 0, this.lucks = [], this.luck_redbags = [], this.luckTurntables = [], this.luckTurntablesEndTime = 0, this.luckTurntablesStartTime = 0, this.luckTurntablesInfo = null, this.lamp_list = [], this.record_list = [], this.RedBagOpen = !1, this.RedNew = !1, this.rdb_id = 0, this.listen_amount = 0, this.content = "", this.title = "", this.leiNum = 0, this.packetNum = 0, this.red_templets = [], this.redbags = [], this.history = [], this.jpAmounts = [], this.RedBagHistory = null, this.redPacketInfo = null, this.redPacketState = null, this.lastInfo = null, this.autoInfo = null, this.redPacketJp = null, this.boom2Creater = null, this.redPacketTj = null, this.redToCreateData = null, this.mtt_url = "", this.mtt_token = "", this.isViewWPT = !1, this.totalHands = 0, this.bGetTHands = !1, this.referralCode = "", this.referralInviteLink = "", this.forceStartingGameTypeInHall = -1, this.autoShowBuyInMttId = -1, this.autoShowBuyInSNGValue = -1, this.sngPromoMttBuyInValue = -1, this.loginData = null, this.registrationData = null, this.autoLoginAfterRegisterAccount = "", this.autoLoginAfterRegisterPasswd = "", this._minigame_coin = 0, this._minigameId = 0, this.STAY_SIGNEDIN_KEY = "staySignedIn", this.pokerdata = new k
        }
        static getInstance() {
            return t.instance || (t.instance = new t), t.instance
        }
        static clearData() {
            return t.instance = null, t.getInstance()
        }
        set user_id(t) {
            this._user_id = String(t)
        }
        get user_id() {
            return this.getUserIdS(!0)
        }
        getUserIdS(t = !1) {
            return null != this.sharedPlayerId && !0 === t && !0 === o.appConfig.getModulesConfig().sharedPlayersPool ? this.sharedPlayerId.toString() : this._user_id
        }
        set u32Uid(t) {
            this._u32Uid = t
        }
        get u32Uid() {
            return this.getUserId(!0)
        }
        getUserId(t = !1) {
            return null != this.sharedPlayerId && !0 === t && !0 === o.appConfig.getModulesConfig().sharedPlayersPool ? this.sharedPlayerId : this._u32Uid
        }
        getUserIdByGameID(t = null) {
            let e = t == o.Enum.GameId.Plo5;
            return this.getUserId(!e)
        }
        getUserTokenByGameID(t = null) {
            let e = t == o.Enum.GameId.Plo5;
            return this.getUserToken(!e)
        }
        isLoggedIn() {
            return null != this._user_id && null != this._u32Uid
        }
        set user_token(t) {
            this._user_token = t
        }
        get user_token() {
            return this.getUserToken(!0)
        }
        getUserToken(t = !1) {
            return this.sharedPlayerToken && t && o.appConfig.getModulesConfig().sharedPlayersPool ? this.sharedPlayerToken : this._user_token
        }
        set total_amount(t) {
            this._total_amount = t, this.is_Total_amount_Update = !0
        }
        get total_amount() {
            return o.appConfig.getLobbyConfig().casino.showPrimary ? this._total_amount : this.u32Chips
        }
        get countryISO2() {
            return this._countryISO2
        }
        set countryISO2(t) {
            this._countryISO2 = t, o.tools.SaveStringByCCFile("COUNTRY_SET", t), o.appConfig.setConfigVariantByCountryCode(this._countryISO2)
        }
        get autoLoginAfterRegisterObj() {
            if (null == this.autoLoginAfterRegisterAccount || 0 == this.autoLoginAfterRegisterAccount.length) return null;
            if (null == this.autoLoginAfterRegisterPasswd || 0 == this.autoLoginAfterRegisterPasswd.length) return null;
            let t = {
                login: this.autoLoginAfterRegisterAccount,
                password: this.autoLoginAfterRegisterPasswd
            };
            return this.autoLoginAfterRegisterAccount = "", this.autoLoginAfterRegisterPasswd = "", t
        }
        get areaCodeWithPlus() {
            return null != this.areaCode ? this.areaCode.toString().indexOf("+") < 0 ? "+" + this.areaCode.toString() : this.areaCode.toString() : ""
        }
        get areaCodeWithoutPlus() {
            if (null != this.areaCode) {
                let t = this.areaCode.toString().indexOf("+");
                return t >= 0 ? this.areaCode.toString().substring(t + 1) : this.areaCode.toString()
            }
            return ""
        }
        get isVN() {
            return "VN" == this.countryISO2
        }
        get isMX() {
            return "MX" == this.countryISO2
        }
        get isJP() {
            return "JP" == this.countryISO2
        }
        get isKR() {
            return "KR" == this.countryISO2
        }
        get isMY() {
            return "MY" == this.countryISO2
        }
        get isPH() {
            return "PH" == this.countryISO2
        }
        get isCasinoLocked() {
            var t;
            if (null != (t = this.playerLocks) && t.includes(o.Enum.PlayerLocks.CASINO)) return !0;
            {
                var e;
                const t = null == (e = this.playerFeatures) ? void 0 : e.find((t => t.feature == o.Enum.PlayerLocks.CASINO && 0 == t.success));
                if (t) return "PlayerFeatureBlock_" + o.Enum.PlayerLocks.CASINO + (t.failedRules[0] ? "_" + t.failedRules[0].ruleName : "")
            }
            return !1
        }
        get isSportsBookLocked() {
            var t;
            if (null != (t = this.playerLocks) && t.includes(o.Enum.PlayerLocks.SPORTS_BOOK)) return !0;
            {
                var e;
                const t = null == (e = this.playerFeatures) ? void 0 : e.find((t => t.feature == o.Enum.PlayerLocks.SPORTS_BOOK && 0 == t.success));
                if (t) return "PlayerFeatureBlock_" + o.Enum.PlayerLocks.SPORTS_BOOK + (t.failedRules[0] ? "_" + t.failedRules[0].ruleName : "")
            }
            return !1
        }
        get minigame_coin() {
            return this._minigame_coin
        }
        set minigame_coin(t) {
            this._minigame_coin != t && (this._minigame_coin = t, o.MessageCenter.send("UpdateMiniGameCoin"))
        }
        get minigameId() {
            return this._minigameId
        }
        set minigameId(t) {
            this._minigameId != t && (this._minigameId = t, o.MessageCenter.send("UpdateMiniGameId"))
        }
        get isPlayerWhitelistedForGeocomply() {
            return this.whitelist.includes(o.Enum.WhitelistType.GEOCOMPLY)
        }
        setAutoLoginState(t) {
            o.tools.SaveStringByCCFile(this.STAY_SIGNEDIN_KEY, t ? "1" : "0")
        }
        getAutoLoginState() {
            return "1" === o.tools.GetStringByCCFile(this.STAY_SIGNEDIN_KEY)
        }
        initAutoLoginState() {
            const t = o.tools.GetStringByCCFile(this.STAY_SIGNEDIN_KEY);
            "" != t && null != t || this.setAutoLoginState(!0)
        }
        updateRedPacketStatus(t, e) {
            for (let i = 0; i < this.redbags.length; i++) this.redbags[i].rdb_id == t && (this.redbags[i].status = e)
        }
        updateRedPacketIsdrawed(t, e) {
            for (let i = 0; i < this.redbags.length; i++) this.redbags[i].rdb_id == t && (this.redbags[i].is_drawed = e)
        }
        updateRedPacketJackPot(t, e) {
            for (let i = 0; i < this.jpAmounts.length; i++)
                if (this.jpAmounts[i].amount_level == t) {
                    this.jpAmounts[i].jackpot_amount = e;
                    break
                }
        }
        getRedPacket(t) {
            for (let e = 0; e < this.redbags.length; e++)
                if (this.redbags[e].rdb_id == t) return this.redbags[e];
            return null
        }
        getRedTemp(t) {
            for (let e = 0; e < this.red_templets.length; e++)
                if (this.red_templets[e].amount == t) return this.red_templets[e];
            return null
        }
        setNickName(t) {
            t.getComponent(n).string = this.nick_name
        }
        setHead(t) {
            o.resMgr.setSpriteFrame(t, "zh_CN/common/Head_01")
        }
        addRemark(t, e, i, s, n, a) {
            let r = new S;
            r.nType = e, r.nUid = t, r.sRemark = i, r.nickname = s, r.avatar = n, r.plat = a, this.vRemarkData.add(t, r)
        }
        getRemarkData(t) {
            let e = this.vRemarkData.get(t);
            return e || (e = new S, e.nUid = t, this.vRemarkData.add(t, e)), e
        }
        getUserRemark(t) {
            let e = this.getRemarkData(t);
            return e ? e.sRemark : ""
        }
        setStringContainRemark(t, e, i) {
            let s = this.getRemarkData(e);
            s && o.StringTools.getArrayLength(s.sRemark) > 0 ? t.getComponent(n).string = s.sRemark : t.getComponent(n).string = i
        }
        getImageUrlByPlat(t, e = 0) {
            return o.domainMgr.getImageURL(t, e)
        }
        getImageURL(t) {
            return t
        }
        getWpkImageURL(t) {
            return o.domainMgr.getWpkImageURL(t)
        }
        getNewImageURL(t) {
            return o.domainMgr.getImageURL(t)
        }
        getPktShopUrl() {
            let t = o.tools.GetStringByCCFile("user_account"),
                e = o.tools.GetStringByCCFile("user_password");
            return o.domainMgr.getServerInfo().pkt_shop + "autoLogin?n=" + t + "&p=" + o.md5.md5(e) + "&lan=" + o.config.getCurrentLanguage()
        }
        getPlayerHands() {
            let t = o.dataHandler.getUserData().playerHands,
                e = o.dataHandler.getUserData().hand_num,
                i = t[0],
                s = t.length;
            for (let n = 0; n < s; ++n)
                if (e <= t[n]) {
                    i = t[n];
                    break
                } return i
        }
        showTouristLimited(t, e, i) {
            if (this.isTouristUser) {
                if (d.getInstance().sendEvent(o.Enum.CurrentScreen.account, o.Enum.segmentEvent.ScreenOpened, o.Enum.Functionality.guestRegistration, {
                        screenName: "guestRegistrationLoginOverlay"
                    }), void 0 === i && (i = null), null == i && o.config.getCurrentScene() == o.Enum.SCENE.HALL_SCENE) {
                    const t = a.getScene().getComponentInChildren(o.Enum.SCENE.HALL_SCENE);
                    r(t, !0) && r(t.loginPopupParent) && (i = t.loginPopupParent)
                }
                return o.authenticator.showLoginPopup(i), !0
            }
            return !1
        }
        showWebAppTouristPopup() {
            return !(!o.appConfig.isWebApp || !this.isTouristUser) && (c.sendParent(new p), !0)
        }
        showNDRPVerificationReviewPopup(t) {
            return !(!this.userNDRPStatus || this.userNDRPStatus != _.Pending) && (m.showNDRPPopupMsgI18n(f.Verifcation_Review, t), !0)
        }
        isEmailValid(t) {
            void 0 === this.emailValid ? o.http.sendRequestV2(o.config.getStringData("WEB_API_USERP_VERIFICATION_GET", !0), {}, this.onEmailValidCheck.bind(this, t), null, o.http.HttpRequestType.GET, o.http.HttpParseType.NONE, !1) : t && t(this.emailValid)
        }
        onEmailValidCheck(t, e) {
            void 0 !== e.confirmed && (this.emailValid = e.confirmed, t && t(this.emailValid))
        }
        getCurrencySymbol(t = !0) {
            var e;
            return (0 == t || o.appConfig.getWalletConfig().showCurrencySymbol) && (null == (e = o.appConfig.getWalletConfig().defaultCurrency) ? void 0 : e.symbol) || ""
        }
        getCurrencyCode() {
            var t;
            return (null == (t = o.appConfig.getWalletConfig().defaultCurrency) ? void 0 : t.code) || ""
        }
        getCountryCurrency() {
            if (this.countryISO2)
                for (let t in o.appConfig.getWalletConfig().countriesCurrency)
                    if (t == this.countryISO2) return o.appConfig.getWalletConfig().countriesCurrency[t];
            return u.None
        }
        getCountryName() {
            return o.config.getStringData(`country_${this.countryISO2}`, !1, "")
        }
        setLoginData(t, e, i, s) {
            this.loginData = {
                loginMode: t,
                username: e,
                passwd: i
            }, !0 === s && this.saveLoginDataToFile()
        }
        saveLoginDataToFile() {
            this.isTouristUser || o.appConfig.getLoginConfig().autoLogin && (this.loginData ? (this.saveLoginMode(this.loginData.loginMode ?? o.appConfig.getLoginConfig().defaultUserLoginMode), o.tools.SaveStringByCCFile("user_account", null == this.loginData.username ? "" : this.loginData.username), o.tools.SaveStringByCCFile("user_password", null == this.loginData.passwd ? "" : this.loginData.passwd)) : (this.saveLoginMode(""), o.tools.SaveStringByCCFile("user_account", ""), o.tools.SaveStringByCCFile("user_password", "")))
        }
        saveLoginMode(t) {
            o.tools.SaveStringByCCFile("login_mode", t)
        }
        clearLoginData() {
            this.loginData = null, o.tools.SaveStringByCCFile("user_password", ""), o.tools.SaveStringByCCFile("is_tourist_login", "0")
        }
        loadLoginDataFromFile() {
            return o.appConfig.getLoginConfig().autoLogin ? (this.loginData = {
                loginMode: this.getLoginMode(),
                username: o.tools.GetStringByCCFile("user_account"),
                passwd: o.tools.GetStringByCCFile("user_password")
            }, !this.loginData.loginMode && this.loginData.username && (this.loginData.loginMode = g.Email), this.loginData) : null
        }
        getLoginMode() {
            return o.tools.GetStringByCCFile("login_mode") ?? ""
        }
        updateHelpWarpData(t) {
            for (let e = 0; e < this.help_wrap_list.length; e++)
                if (this.help_wrap_list[e].captcha_data.code == t.captcha_data.code) return this.help_wrap_list.splice(e, 1, t), void o.MessageCenter.send("update_help_Warp_list")
        }
        getHelpWarpList() {
            let t = Math.round((new Date).getTime() / 1e3),
                e = [];
            for (let i = 0; i < this.help_wrap_list.length; i++) {
                let s = this.help_wrap_list[i];
                (s.captcha_data.create_time + s.captcha_data.expire_time > t || s.captcha_data.is_available || s.captcha_data.help_count == s.helper_data.length) && e.push(s)
            }
            return e
        }
        deleteHelpWarpByCode(t) {
            for (let e = 0; e < this.help_wrap_list.length; e++) {
                if (this.help_wrap_list[e].captcha_data.code == t) {
                    this.help_wrap_list.splice(e, 1);
                    break
                }
            }
            o.MessageCenter.send("update_help_Warp_list")
        }
        getHelpWarpByID(t) {
            for (let e = 0; e < this.help_wrap_list.length; e++) {
                let i = this.help_wrap_list[e];
                if (i.captcha_data.code == t) return i
            }
            return null
        }
        removeLuckTurnById(t) {
            for (let e = 0; e < this.luckTurntables.length; e++)
                if (this.luckTurntables[e].record_id === t) {
                    this.luckTurntables.splice(e, 1);
                    break
                }
        }
    }).instance = void 0, y = C)) || y);
    e._RF.pop()
}
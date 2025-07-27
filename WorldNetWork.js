import * as t from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as o from "./ws_protocol.mjs_cjs=&original=.js";
import * as n from "./cv.js";
import * as i from "./cv.js";
import * as d from "./cv.js";
import * as l from "./RemindData.js";
import * as g from "./ClubData.js";
import * as c from "./NetWorkProxy.js";
import * as p from "./userData.js";
import * as u from "./userData.js";
import * as _ from "./PushNotice.js";
import * as h from "./DataHandler.js";
import * as M from "./MTTConnector.js";
import * as m from "./worldWebsocket.js";
import * as b from "./worldWebsocket.js";
import * as R from "./ConnectionTracing.js";
import * as S from "./ConnectionTracing.js";
import * as D from "./ConnectionTracing.js";
import * as I from "./ConnectionTracing.js";
import * as f from "./ConnectionTracing.js";
import * as T from "./ConnectionTracing.js";
import * as y from "./Enum.js";
import * as C from "./Enum.js";
import * as G from "./Enum.js";
import * as L from "./CrashTracing.js";
import * as E from "./FreshchatHandler.js";
import * as A from "./FakeMultipleGame.js";
import * as k from "./BranchSDKHandler.js";
import * as U from "./AppsflyerSDKHandler.js";
import * as N from "./GameDataManager.js";
import * as H from "./MessageSender.js";
import * as P from "./MessageSender.js";
import * as B from "./Helpers2.js";
import * as w from "./FullscreenController.js";
import * as q from "./TimeElapse.js";
import * as v from "./GlobalMsgDataManager.js";
import * as W from "./ecdhHandler.js";

function main() {
    t._RF.push({}, "9ef28AJeQREJLrW3SZgkvPZ", "WorldNetWork", void 0);
    class O extends g {
        constructor(...e) {
            super(...e), this.casinoMsgs = [W.pb.MSGID.MsgID_MiniGames_List_Request], this.plo5RetryConst = Object.freeze({
                WAITING_DURATION: 3e3,
                RETRY_LIMIT_COUNT: 5
            }), this.plo5RetryVariables = {
                retriesCount: -1,
                startTimeRequest: 0,
                retryTimeout: null
            }, this.notSPPmsgs = [W.pb.MSGID.MsgID_Logon_Request, W.pb.MSGID.MsgID_Logon_Response, W.pb.MSGID.MsgID_GetUserData_Request, W.pb.MSGID.MsgID_GetUserData_Response, W.pb.MSGID.MsgID_GetUserData_Notice, W.pb.MSGID.MsgID_HeartBeat_Request, W.pb.MSGID.MsgID_HeartBeat_Response, W.pb.MSGID.MsgID_DeviceInfo_Report_Request, W.pb.MSGID.MsgID_DeviceInfo_Report_Response, W.pb.MSGID.MsgID_NotifyUserGoldNum_Notice, W.pb.MSGID.MsgID_AuthApi_Request, W.pb.MSGID.MsgID_AuthApi_Response, W.pb.MSGID.MsgID_AuthApi_Notice, W.pb.MSGID.MsgID_GameMaintainStatus_Notice, W.pb.MSGID.MsgID_MttResult_Request, W.pb.MSGID.MsgID_MttResult_Response, W.pb.MSGID.MsgID_MttResult_Notice, W.pb.MSGID.MsgID_MttDetail_Request, W.pb.MSGID.MsgID_MttDetail_Response, W.pb.MSGID.MsgID_MttDetail_Notice, W.pb.MSGID.MsgID_MttGameSum_Request, W.pb.MSGID.MsgID_MttGameSum_Response, W.pb.MSGID.MsgID_MttGameSum_Notice, W.pb.MSGID.MsgId_JoinRoomAccessCheck_Request, W.pb.MSGID.MsgId_JoinRoomAccessCheck_Resonse, W.pb.MSGID.MsgID_Payment_Notice, W.pb.MSGID.MsgID_RequestAnounceList, W.pb.MSGID.MsgID_ResponseAnounceList, W.pb.MSGID.MsgID_NoticeAnounceList, W.pb.MSGID.MsgID_GetUserMailListInfo_Request, W.pb.MSGID.MsgID_GetUserMailListInfo_Response, W.pb.MSGID.MsgID_GetUserMailListInfo_Notice, W.pb.MSGID.MsgID_ReadAndFetchOneMail_Request, W.pb.MSGID.MsgID_ReadAndFetchOneMail_Response, W.pb.MSGID.MsgID_ReadAndFetchOneMail_Notice, W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Request, W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Response, W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Notice, W.pb.MSGID.MsgID_NotifyUserMailNum, W.pb.MSGID.MsgID_NoticeOneMail, W.pb.MSGID.MsgID_NoticeOneAnounce, W.pb.MSGID.MsgID_NoticeWithdrawMail, W.pb.MSGID.MsgID_NoticeWithdrawAnounce], this.maxTimeRelogin = 5, this.doLoginCount = 0, this._lastLoginRequestTime = 0, this.responseLoginS = null, this.noticeLoginS = null, this.responseLoginSPP = !1, this.joinRoomRequested = !1, this.passwordForAutologinOff = "", this.noticeLoginServerPKW = null, this.noticeLoginServerWPTO = null, this.noticeLoginMsgIdServerPKW = null, this.noticeLoginMsgIdServerWPTO = null, this._needSwitchToLobby = !1, this._timestampRequestBoardList = new Map, this._isRequestingBoardList = new Map, this.preRequest = !1, this.joinRoomAccessCheckCustomeSuccessCallback = null
        }
        init() {
            this.registerMsg(W.pb.MSGID.MsgID_DupLogin_Notice, this.NoticeDupLogin.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_HeartBeat_Response, this.responseHeartBeat.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUserData_Response, this.responseGetUserData.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUserData_Notice, this.noticeGetUserData.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NotifyUserGoldNum_Notice, this.NoticeCoinChanged.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AddRemarks_Response, this.HandResponseAddRemarks.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AddRemarks_Notice, this.HandNoticeAddRemarks.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JackpotAmout_Notice, this.NoticeJackpotAmout.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JackPotAwardInfo_Notice, this.NoticeJackPotAwardInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Logon_Response, this.responseLoginServer.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Login_Notice, this.NoticeLoginServer.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NotifyUserMailNum, this._noticeMailNum.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeOneMail, this._noticeOneMail.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeOneAnounce, this._noticeOneAnnounce.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeWithdrawMail, this._noticeWithdrawMail.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeWithdrawAnounce, this._noticeWithdrawAnnounce.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeCreateClub, this._noticeCreateClub.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinClub_Response_To_Member, this._responseJoinClubToMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinClub_Notice_To_Member, this._noticeJoinClubToMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinClub_Response_To_Admin, this._responseJoinClubToAdmin.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinClub_Notice, this._noticeJoinClubToAdmin.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_LeaveAlliance_Notice, this._noticeLeaveAlliance.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ModifyClubMember_Notice, this._noticeModifyClubMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SearchClubInfo_Response, this.responseCommon.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SearchClubInfo_Notice, this.NoticeSearchClubInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_CreateAlliance_Response, this.ResponseCreateAlliance.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SearchAlliance_Response, this._responseSearchAllianceInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SearchAlliance_Notice, this._noticeSearchAllianceInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinAlliance_Response_To_Admin, this._responseJoinAllianceToAdmin.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinAlliance_Notice_To_Admin, this._noticeJoinAlliance.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinAlliance_Response_To_Member, this._responseJoinAllianceToMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinAlliance_Notice_To_Member, this._noticeJoinAllianceToMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GameStatusV2_Response, this.HandleGameStatusMessage.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_CowBoy_List_Response, this.cowBoyResponseRoomList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_VideoCowboy_List_Response, this.videoResponseRoomList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_HumanBoy_List_Response, this.humanBoyResponseRoomList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_PokerMaster_List_Response, this.pokerMasterResponseRoomList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Draw_Notice, this._HandleNoticeLuckDraw.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Aof_Thouthand_response, this._HandleAofThouthand.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SetSecretKey_Response, this.ResponseSetSecretKey.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SetSecretKeyEx_Response, this.ResponseSetEcdhSecretKey.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Referrals_Response, this._HandleReferralsResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_InviteSummary_Response, this._HandleInviteSummaryResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_InviteIncomeRedeem_Response, this._HandleInviteIncomeRedeemResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Snaplist_Notice, this._HandleLuckTurntableSnaplistNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Countdown_Notice, this._HandleLuckTurntableCountdownNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Result_Notice, this._HandleLuckTurntableResultNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Snaplist_Response, this._HandleLuckTurntableSnaplistResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_EndTime_Notice, this._HandleLuckTurntableEndTimeNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_StartTime_Notice, this._HandleLuckTurntableStartTimeNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Over_Notice, this._HandleLuckTurntableOverNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Ready_Notice, this._HandleLuckTurntableReadyNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Result_Response, this._HandleLuckTurntableResultResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Luck_Turntable_Draw_Notice, this._HandleLuckTurntableDrawNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Create_RedBag_Response, this.ResponseCreateRedBag.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Notice, this.NoticeRedBag.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Info_Response, this.ResponseRedBagInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Set_Amount_Response, this.ResponseRedBagSetAmount.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Draw_Response, this.ResponseRedBagDraw.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Open_Notice, this.NoticeRedBagOpen.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_History_Response, this.ResponseRedBagHistory.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Boom2Creater_Notify, this.NotifyRedBagBoom.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Status_Response, this.ResponseRedBagStatus.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_AutoDraw_Response, this.ResponseAutoDraw.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_LastInfo_Response, this.ResponseLastInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_Drawed2Creator_Notice, this.NoticeDrawed2Creator.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_JackpotInfo_Response, this.ResponseRedPacketJP.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_StatisticsInfo_Response, this.ResponseRedPacketTj.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RedBag_JackpotUpdate_Notice, this.RedPacketJpNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GlobalMessage_Notice, this.HandleNoticeGlobalMessage.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Banner_Response, this._HandleBannerResponseNotic.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetRank_Response, this._HandleRankResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_DepositInStrongbox_Response, this.ResponseDeposit.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_TakeoutStrongbox_Response, this.ResponseTakeOut.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_StrongboxDetail_Response, this.ResponseDetail.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetStrongboxInfo_Response, this.ResponseStrongboxInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JoinAlliance_UserCancel_Response, this.ResponseJoinAllianceUserCancel.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AuthApi_Response, this.ResponseAuthApi.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AuthApi_Notice, this.NoticeAuthApi.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GameMaintainStatus_Notice, this.NoticeMTTStatus.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MiniGames_List_Response, this.MiniGamesListResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttResult_Notice, this.MttResultNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttResult_Response, this.MttResultResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttDetail_Notice, this.MttDetailNoticeResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttDetail_Response, this.MttDetailResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttGameSum_Notice, this.MttUserDataNoticeResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_MttGameSum_Response, this.MttUserDataResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Exchange_UserPoints_Response, this.ExchangeUserPointsResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Goods_List_Response, this.GoodsListResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Bank_Details_Query_Response, this.BankDetailsQueryResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_StarInfo_Response, this.StarInfoResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Get_Scaler_Quote_Response, this.GetScalerQuoteResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Exchange_Currency_Response, this.ExchangeCurrencyResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUsdtExchange_Config_Response, this.ExchangeGetUsdtConfigResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_UsdtExchange_Config_Notice, this.ExchangeGetUsdtConfigNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUserMarks_Response, this.GetUserMarks.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_UpdateUserMarks_Reponse, this.UpdateUserMarks.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_StarAllow_Response, this.CheckStarRoomResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_StarWillBegin_Notice, this.StarWillBeginNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_RG_Limit_Reached_Notice, this.onRGLimitReached.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Account_Locked_Notice, this.onAccountLocked.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_User_Kicked_Notice, this.onUserKicked.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Player_Session_Terminated, this.onSessionTerminated.bind(this)), this.registerMsg(W.pb.MSGID.MsgId_JoinRoomAccessCheck_Resonse, this.onJoinRoomAccessCheck_Resonse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_Payment_Notice, this.onPaymentNotice_Response.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NewFreshchatNotification, this.onFreshchatNotification.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUserHelpWarpList_Response, this.GetUserHelpWarpListResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AddHelper_Response, this.AddHelperResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetTotalHistoryAmount_Response, this.GetTotalHistoryAmountResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_UserReceiveHelpWarp_Response, this.UserReceiveHelpWarpResponse.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AddHelpWrap_Notice, this.AddHelpWrapNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_UserHelpWarpChange_Notice, this.UserHelpWarpChangeNotice.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_LeftHelpCountChange_Notice, this.LeftHelpCountChangeNotice.bind(this))
        }
        onConnectOpen() {
            o.netWorkManager.StartWorldHeartBeat(), this.doLoginCount = 0, this.requestLoginServer()
        }
        onConnectError() {
            o.netWorkManager.isAppEnterBackground() || (o.dataHandler.getUserData().isFirstLogin && o.domainMgr.isHaveNextServer() || o.TT.showMsg(o.config.getStringData("ErrorToast21"), o.Enum.ToastType.ToastTypeError), o.MessageCenter.send("updateNetWork", o.Enum.SeverType.SeverType_World), o.netWorkManager.UpdateNetwork(0))
        }
        registerMsg(e, t) {
            this.registerMessage(e, t, o.Enum.GameId.World)
        }
        isNotSPPmsg(e) {
            var t;
            return o.appConfig.getModulesConfig().sharedPlayersPool && (null == (t = this.notSPPmsgs) ? void 0 : t.includes(e))
        }
        isCasinoMsg(e) {
            return !(!this.casinoMsgs || o.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool) && this.casinoMsgs.includes(e)
        }
        getServerType(e, t = null) {
            return this.isNotSPPmsg(e) || this.isCasinoMsg(e) || t == o.Enum.GameId.Plo5 ? o.Enum.SeverType.SererType_World_WPTO : o.Enum.SeverType.SeverType_World
        }
        isExpectedServer(e, t) {
            return t == this.getServerType(e)
        }
        getServerId(e, t = null) {
            return this.isNotSPPmsg(e) || this.isCasinoMsg(e) || t == o.Enum.GameId.Plo5 ? o.Enum.GameId.World_WPTO : o.Enum.GameId.World
        }
        sendWorldMsg(e, t, s, a = !1, r = o.Enum.GameId.World, n) {
            let i = this.getServerType(t, r),
                d = this.getServerId(t, r),
                l = this.sendMsg(e, t, s, i, d);
            return a && l && this.addRequestTimeout(t, s, n), l
        }
        requestPlo5GameList(e, t) {
            if (e || (e = W.pb.RequestClubCurrentBoard.encode({}).finish()), e) {
                var s;
                if (!this.plo5RetryVariables.retryTimeout)
                    if (this.plo5RetryVariables.retriesCount < this.plo5RetryConst.RETRY_LIMIT_COUNT) this.plo5RetryVariables.retryTimeout = setTimeout((() => {
                        this.plo5RetryVariables.retryTimeout && (clearTimeout(this.plo5RetryVariables.retryTimeout), this.plo5RetryVariables.retryTimeout = null), this.requestPlo5GameList()
                    }), this.plo5RetryConst.WAITING_DURATION), this.plo5RetryVariables.retriesCount < 0 && (this.plo5RetryVariables.startTimeRequest = Date.now()), this.plo5RetryVariables.retriesCount++;
                    else null == (s = C.getInstance()) || s.trace(y.CashGameIssues, "PLO5GameListRetry", {
                        retriesCount: this.plo5RetryVariables.retriesCount,
                        loadingTime: Date.now() - this.plo5RetryVariables.startTimeRequest,
                        success: !1
                    });
                return this.sendMsg(e, t ?? W.pb.MSGID.MsgID_ClubCurrentBoard_Request, 0, o.Enum.SeverType.SererType_World_WPTO, o.Enum.GameId.World_WPTO)
            }
            return !1
        }
        NoticeCoinChanged(e) {
            let t = this.decodePB(W.pb.NoticeNotifyUserGoldNum, e);
            var s;
            t && (t.uid == o.dataHandler.getUserData().getUserId() && (o.dataHandler.getUserData().u32Chips = t.goldNum, o.dataHandler.getUserData().game_coin = t.game_coin, o.dataHandler.getUserData().total_amount = t.total_amount, o.dataHandler.getUserData().user_points = t.total_points, o.dataHandler.getUserData().usdt = t.usdt, o.dataHandler.getUserData().casino_coin = (null == (s = t.balances) ? void 0 : s.CoinAmount[W.pb.Currency.CASINO_COIN]) ?? o.dataHandler.getUserData().casino_coin, o.MessageCenter.send("update_gold")))
        }
        getLogonObject(e = !1) {
            let t = o.dataHandler.getUserData().deviceInfo;
            0 == o.StringTools.getArrayLength(t) && (t = o.native.GetDeviceUUID(!0));
            let r = new W.pb.RequestLogon;
            return r.version = o.config.GET_CLIENT_VERSION(), r.token = o.dataHandler.getUserData().getUserToken(e), r.device_info = t, r.invitation_code = o.dataHandler.getUserData().invitation_code || "", r.client_type = o.config.GET_CLIENT_TYPE(), r.CurrentLanguage = o.config.getCurrentLanguage(), r.os = s.os, r.os_version = o.native.getSystemVersion(), o.native.IsSimulator() && s.os === s.OS.ANDROID && (r.os = `${s.OS.ANDROID}-Simulator`), a("[WorldNetWork] => getLogonObject", JSON.stringify(r)), r
        }
        requestLoginServer() {
            let e = (new Date).getTime(),
                t = this._lastLoginRequestTime > 0;
            if (t) {
                t = e - this._lastLoginRequestTime < 1e3, this._lastLoginRequestTime = 0
            }
            var s;
            if (t) null == (s = C.getInstance()) || s.trace(y.ConnectionFlow, "DuplicateLoginRequest");
            else if (this.doLoginCount += 1, this.doLoginCount <= this.maxTimeRelogin) {
                let t = W.pb.RequestLogon;
                if (t) {
                    this.responseLoginS = null, this.noticeLoginS = null, this.joinRoomRequested = !1, this._lastLoginRequestTime = e;
                    let s = t.encode(this.getLogonObject()).finish();
                    if (this.sendWorldMsg(s, W.pb.MSGID.MsgID_Logon_Request, 0), o.appConfig.getModulesConfig().sharedPlayersPool) {
                        this.responseLoginSPP = !1;
                        let e = t.encode(this.getLogonObject(!0)).finish();
                        this.sendMsg(e, W.pb.MSGID.MsgID_Logon_Request, 0, o.Enum.SeverType.SeverType_World, o.Enum.GameId.World)
                    } else this.responseLoginSPP = !0
                }
            } else o.popUp.showMsg({
                title: o.config.getStringData("Mtt_Disconnect"),
                txt: o.config.getStringData("Join_game_did_not_have_response_from_server"),
                isTwoBtn: !0,
                isPopupDarkActive: !1,
                msgType: o.Enum.ToastType.ToastTypeWarning,
                sureLabel: o.config.getStringData("Hotupdate_retrybtn"),
                cancelLabel: o.config.getStringData("selfView_SignOut"),
                sureCallback: this.retryReqestLogin.bind(this),
                cancelCallback: this.doLogOut.bind(this),
                onXCancelCallback: this.doLogOut.bind(this)
            })
        }
        retryReqestLogin() {
            this.doLoginCount = 0, o.netWorkManager.reconnect()
        }
        doLogOut() {
            o.netWorkManager.Logout(!0, null, o.Enum.LogOutReason.Manual)
        }
        responseLoginServer(e, t, s) {
            let a = !this.isExpectedServer(t, s),
                r = this.decodePB(W.pb.ResponseLogon, e);
            if (r) {
                console.log("responseLoginServer", JSON.stringify(r));
                let e = r.error;
                if (a)
                    if (e == o.Enum.Server_Error_Codes.OK) {
                        if (this.responseLoginSPP = !0, null != this.responseLoginS) {
                            const e = this.responseLoginS.error;
                            this.handleLoginServer(this.responseLoginS, e, s)
                        }
                    } else if (e == o.Enum.Server_Error_Codes.Duplicate_Login && "" != this.passwordForAutologinOff) {
                    var n;
                    M.forceClose(), this.goToRetryLogin(this.passwordForAutologinOff), this.passwordForAutologinOff = "", null == (n = C.getInstance()) || n.trace(y.UserAuth, "World_Login", {
                        event: "World_Login_FAILED",
                        error_code: e,
                        retry_login: !0,
                        server_type_id: s,
                        msg_id: t,
                        original_shared_token: o.dataHandler.getUserData().originalSharedPlayerToken,
                        original_token: o.dataHandler.getUserData().originalUserToken,
                        sent_shared_token: o.dataHandler.getUserData().getUserToken(!0),
                        sent_token: o.dataHandler.getUserData().getUserToken(!1)
                    })
                } else {
                    var i;
                    this.responseLoginSPP = !1, this.handleLoginServerError(e), null == (i = C.getInstance()) || i.trace(y.UserAuth, "World_Login", {
                        event: "World_Login_FAILED",
                        error_code: e,
                        retry_login: !1,
                        server_type_id: s,
                        msg_id: t,
                        original_shared_token: o.dataHandler.getUserData().originalSharedPlayerToken,
                        original_token: o.dataHandler.getUserData().originalUserToken,
                        sent_shared_token: o.dataHandler.getUserData().getUserToken(!0),
                        sent_token: o.dataHandler.getUserData().getUserToken(!1)
                    })
                } else this.responseLoginS = r, this.responseLoginSPP && this.handleLoginServer(this.responseLoginS, e, s)
            }
        }
        SetpasswordForAutologinOff(e) {
            this.passwordForAutologinOff = e
        }
        goToRetryLogin(e) {
            let t = o.dataHandler.getUserData().loadLoginDataFromFile(),
                s = {
                    loginMode: t.loginMode,
                    userName: t.username,
                    password: e
                };
            o.httpHandler.requestLogin(s, this.onRetryLoginSuccess.bind(this), this.onRetryLoginError.bind(this))
        }
        onRetryLoginSuccess(e) {
            o.httpHandler.onLoginSuccess(e), this.requestLoginServer()
        }
        onRetryLoginError(e) {
            o.netWorkManager.Logout(!1, null, "Retry login after Duplicated Login encountered: " + JSON.stringify(e))
        }
        handleLoginServer(e, t, s) {
            if (o.dataHandler.getUserData().m_bIsLoginServerSucc = 1 == t, this._lastLoginRequestTime = 0, this.passwordForAutologinOff = "", h.instance.initCCVV(), e.bl_mtt_status) {
                let t = o.config.HAVE_MTT;
                2 == e.bl_mtt_status ? o.config.HAVE_MTT = !1 : 1 == e.bl_mtt_status && (o.config.setMTT(), e.mttData ? h.instance.onAuthMttSucc(e.mttData) : h.instance.onAuthMttError(h.instance.config.tokenErrorMsg.NO_TOKEN, !0)), t != o.config.HAVE_MTT && o.MessageCenter.send("update_mtt_state")
            } else e.mttData ? h.instance.onAuthMttSucc(e.mttData) : h.instance.onAuthMttError(h.instance.config.tokenErrorMsg.NO_TOKEN, !0);
            1 != t ? this.handleLoginServerError(t) : o.netWorkManager.OnWorldServerLogin(t, (() => {
                var t, a;
                (o.dataHandler.getUserData().firstClubId = e.firstClubId, o.dataHandler.getUserData().firstAlliId = e.firstAlliId, o.dataHandler.getUserData().isEncrypt = [], o.StringTools.deepCopy(e.swtichList, o.dataHandler.getUserData().isEncrypt), o.dataHandler.getUserData().showLoadingScreenOnInitialFetch && o.appConfig.getGeneralConfig().showLoadingOnUserDataFetch, this.requestGetUserData(), this.MiniGamesListRequest(), o.MessageCenter.send(o.Enum.MessageCenterAction.OnWorldServerLoginSuccess), o.config.GET_CLIENT_TYPE() == o.Enum.ClientType.CowboyWeb ? o.roomManager.RequestJoinRoom(10, 734547) : this.requestSnapshotList(), o.dataHandler.getUserData().m_bIsLoginServerSucc = !0, o.roomManager.getTotalRooms() > 0 && !this.joinRoomRequested) && (null != (t = o.geoComplyManager) && t.isGeoTokenRequired() ? (this.joinRoomRequested = !0, null == (a = o.geoComplyManager) || a.requestValidToken(((e = "") => {
                    e ? this.autoJoinRoom() : C.Trace("GeoToken", "GeoTokenErrorWhenLogin")
                }), (() => {}))) : this.autoJoinRoom());
                null != this.noticeLoginS && (o.roomManager.loadGameState(this.noticeLoginS, !0, s), this.handleNoticeLoginServer(), this.noticeLoginS = null)
            }))
        }
        autoJoinRoom() {
            this.joinRoomRequested = !0, o.roomManager.rejoinPlayingRooms()
        }
        handleLoginServerError(e) {
            2 != e && 3 != e && 4 != e && 5 != e && 6 != e && 7 != e && 8 != e && 197 != e && 229 != e ? o.popUp.showMsg({
                txt: o.config.getStringData(o.StringTools.formatC("ServerErrorCode%d", e)),
                msgType: o.Enum.ToastType.ToastTypeError
            }) : o.netWorkManager.OnNeedRelogin(e), o.dataHandler.getUserData().m_bIsLoginServerSucc = !1
        }
        NoticeLoginServer(e, t, s) {
            if (o.appConfig.getModulesConfig().sharedPlayersPool) {
                if (s == o.Enum.SeverType.SeverType_World ? (this.noticeLoginServerPKW = e, this.noticeLoginMsgIdServerPKW = t) : s == o.Enum.SeverType.SererType_World_WPTO && (this.noticeLoginServerWPTO = e, this.noticeLoginMsgIdServerWPTO = t), !this.noticeLoginServerPKW || !this.noticeLoginServerWPTO) return;
                const a = [{
                    puf: this.noticeLoginServerPKW,
                    msgid: this.noticeLoginMsgIdServerPKW,
                    serverType: o.Enum.SeverType.SeverType_World
                }, {
                    puf: this.noticeLoginServerWPTO,
                    msgid: this.noticeLoginMsgIdServerWPTO,
                    serverType: o.Enum.SeverType.SererType_World_WPTO
                }];
                this.processNoticeLogin(a)
            } else this.processNoticeLogin([{
                puf: e,
                msgid: t,
                serverType: s
            }]);
            this._needSwitchToLobby && !this.joinRoomRequested && this.switchToHallScene(), this._needSwitchToLobby = !1, this.noticeLoginServerPKW = null, this.noticeLoginServerWPTO = null
        }
        processNoticeLogin(e) {
            let t = !1;
            for (let s = 0; s < e.length; s++) {
                const r = e[s],
                    [n, i, d] = [r.puf, r.msgid, r.serverType];
                let l = this.decodePB(W.pb.NoticeLogin, n);
                if (a("NoticeLoginServer", i, d, l), l)
                    if (o.dataHandler.getUserData().m_bIsLoginServerSucc) {
                        const e = 0 === s;
                        o.roomManager.loadGameState(l, e, d), t = !0
                    } else this.noticeLoginS = l
            }
            t && this.handleNoticeLoginServer()
        }
        switchToHallScene() {
            o.roomManager.closeAllGames(o.Enum.SCENE.HALL_SCENE), o.roomManager.resetAllInstances(), o.netWorkManager.closeGameHeart(), o.netWorkManager.clearAllLoginGameServerSuccFlags()
        }
        handleNoticeLoginServer() {
            var e;
            null == (e = E.instance) || e.onLoginServer(), this.joinRoomRequested = !0, o.roomManager.checkAndTryAutoJoinRoomAfterLogin() || (this._needSwitchToLobby = !0)
        }
        requestDeviceInfoReport(e) {
            let t = null == o.dataHandler.getUserData().user_ip ? "127.0.0.1" : o.dataHandler.getUserData().user_ip,
                s = o.dataHandler.getUserData().deviceInfo;
            0 == o.StringTools.getArrayLength(s) && (s = o.native.GetDeviceUUID(!0));
            let a = {
                    device_info: s,
                    report_channel: e,
                    Ip: t
                },
                r = W.pb.RequestDeviceInfoReport.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_DeviceInfo_Report_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_DeviceInfo_Report_Response, this.responseDeviceInfoReport.bind(this))
        }
        responseDeviceInfoReport(e) {
            let t = this.decodePB(W.pb.ResponseDeviceInfoReport, e);
            if (t) {
                t.error
            }
        }
        requestGetAllRemarks() {
            let e = {
                    playerid: o.dataHandler.getUserData().u32Uid
                },
                t = W.pb.RequestGetAllRemarks.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_GetAllRemarks_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_GetAllRemarks_Response, this.responseCommon.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetAllRemarks_Notice, this.noticeGetAllRemarks.bind(this))
        }
        noticeGetAllRemarks(e) {
            console.log(e);
            let t = this.decodePB(W.pb.NoticeGetAllRemarks, e);
            if (t && t.start && o.dataHandler.getUserData().vRemarkData.clear(), t && "null" != t.remarks_data && "" != t.remarks_data) {
                let e = JSON.parse(t.remarks_data);
                for (let t = 0; t < e.length; t++) o.dataHandler.getUserData().addRemark(e[t].uid, e[t].type, e[t].remark, e[t].nickname, e[t].avatar, e[t].plat);
                o.MessageCenter.send("update_remarks")
            }
        }
        RequestAddRemarks(e, t, s) {
            let a = {
                    target_id: e,
                    remark_type: t,
                    taget_remark: s
                },
                r = W.pb.RequestAddRemarks.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_AddRemarks_Request, 0)
        }
        HandResponseAddRemarks(e) {
            let t = this.decodePB(W.pb.ResponseAddRemarks, e);
            if (t && 1 != t.error)
                if (199 == t.error) {
                    let e = "";
                    e = o.config.getCurrentScene() != o.Enum.SCENE.HALL_SCENE ? o.config.getStringData("Remarks_error_1") : o.config.getStringData("Remarks_error_0"), o.TT.showMsg(e, o.Enum.ToastType.ToastTypeWarning)
                } else o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeWarning)
        }
        HandNoticeAddRemarks(e) {
            let t = this.decodePB(W.pb.NoticeAddRemarks, e);
            if (t) {
                let e = JSON.parse(t.taget_remark);
                for (let t = 0; t < e.length; t++) {
                    let s = e[t].uid,
                        a = e[t].remark,
                        r = e[t].type,
                        n = e[t].nickname,
                        i = e[t].avatar,
                        d = e[t].plat;
                    o.dataHandler.getUserData().addRemark(s, r, a, n, i, d)
                }
                o.MessageCenter.send("update_remarks")
            }
        }
        isAbleToRequestBoardList(e) {
            return !o.clubDataMgr.getClubCurrentBoardList().length || !this._isRequestingBoardList.get(e) || !this._timestampRequestBoardList.get(e) || Date.now() - this._timestampRequestBoardList.get(e) > 3e3
        }
        prepareRequestBoardList(e) {
            this._timestampRequestBoardList.set(e, Date.now()), this._isRequestingBoardList.set(e, !0)
        }
        requestCurrentBoardList(e = 0) {
            let t = W.pb.RequestClubCurrentBoard.encode({}).finish();
            0 != e && e != o.Enum.SeverType.SeverType_World || this.isAbleToRequestBoardList(o.Enum.SeverType.SeverType_World) && (this.prepareRequestBoardList(o.Enum.SeverType.SeverType_World), this.sendWorldMsg(t, W.pb.MSGID.MsgID_ClubCurrentBoard_Request, 0)), 0 != e && e != o.Enum.SeverType.SererType_World_WPTO || this.isAbleToRequestBoardList(o.Enum.SeverType.SererType_World_WPTO) && (this.prepareRequestBoardList(o.Enum.SeverType.SererType_World_WPTO), this.requestPlo5GameList(t, W.pb.MSGID.MsgID_ClubCurrentBoard_Request)), this.registerMsg(W.pb.MSGID.MsgID_ClubCurrentBoard_Response, this.responseCommon.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ClubCurrentBoard_Notice, this.noticeCurrentBoardList.bind(this))
        }
        noticeCurrentBoardList(e, t, s, a) {
            w.getInstance().start("noticeCurrentBoardList", "decode");
            let r = this.decodePB(W.pb.NoticeClubCurrentBoard, e);
            if (w.getInstance().end("noticeCurrentBoardList", "decode"), !r) return;
            w.getInstance().start("noticeCurrentBoardList", "clear"), s == o.Enum.SeverType.SererType_World_WPTO && a == o.Enum.GameId.World_WPTO && (this.plo5RetryVariables.retriesCount = -1, this.plo5RetryVariables.startTimeRequest = 0, this.plo5RetryVariables.retryTimeout && (clearTimeout(this.plo5RetryVariables.retryTimeout), this.plo5RetryVariables.retryTimeout = null)), 1 === r.page && o.clubDataMgr.resetTempClubBoardList(s, a), w.getInstance().end("noticeCurrentBoardList", "clear"), w.getInstance().start("noticeCurrentBoardList", "loop");
            const n = o.clubDataMgr.getTempClubBoardList(s, a);
            for (let e = 0; e < r.list.length; ++e) {
                const t = r.list[e];
                t.pic_path.length > 0 && (t.pic_path = o.dataHandler.getUserData().getImageURL(t.pic_path)), n.push(W.pb.ClubGameSnapshot.create(t))
            }
            w.getInstance().end("noticeCurrentBoardList", "loop", {
                count: r.list.length
            }), n.length === r.total && (w.getInstance().start("noticeCurrentBoardList", "sendNotice"), o.clubDataMgr.setClubBoardListFromTempData(s, a), this._isRequestingBoardList.set(s, !1), o.MessageCenter.send("noticeCurrentBoardList", {
                ServerType: s,
                ServerId: a,
                vClubCurrentBoardList: n
            }), w.getInstance().end("noticeCurrentBoardList", "sendNotice"), w.getInstance().start("noticeCurrentBoardList", "deeplink"), o.MessageCenter.send(D.CashGameListLoadCompleted), w.getInstance().end("noticeCurrentBoardList", "deeplink"))
        }
        responseCommon(e) {
            let t = this.decodePB(W.pb.ResponseGetAllRemarks, e);
            if (t) {
                let e = t.error;
                console.log("error::.>" + e), 1 != e && (o.TT.showMsg(o.config.getStringData("ServerErrorCode" + e), o.Enum.ToastType.ToastTypeError), o.MessageCenter.send("noticeCurrentBoardListError", {
                    error: e
                }))
            }
        }
        requestHeartBeat() {
            let e = {
                    uid: o.dataHandler.getUserData().getUserId()
                },
                t = W.pb.RequestHeartBeat.encode(e).finish();
            b.hasInstance() && b.getInstance().traceHeartBeat(m.Request, o.netWork, R.SererType_World_WPTO, "world");
            let s = this.sendWorldMsg(t, W.pb.MSGID.MsgID_HeartBeat_Request, 0);
            if (o.appConfig.getModulesConfig().sharedPlayersPool) {
                let e = {
                        uid: o.dataHandler.getUserData().getUserId(!0)
                    },
                    t = W.pb.RequestHeartBeat.encode(e).finish();
                return b.hasInstance() && b.getInstance().traceHeartBeat(m.Request, o.netWork, R.SeverType_World, "world"), this.sendMsg(t, W.pb.MSGID.MsgID_HeartBeat_Request, 0, o.Enum.SeverType.SeverType_World, o.Enum.GameId.World)
            }
            return s
        }
        responseHeartBeat(e, t, s) {
            b.hasInstance() && b.getInstance().traceHeartBeat(m.Response, o.netWork, s, "world");
            let a = this.decodePB(W.pb.ResponseHeartBeat, e);
            if (a) {
                a.uid;
                o.netWorkManager.onWorldHeartBeat(s)
            }
        }
        NoticeDupLogin(e) {
            let t = this.decodePB(W.pb.DupLoginNotice, e);
            t && (224 == t.error ? o.netWorkManager.OnNeedRelogin(224) : o.netWorkManager.OnNeedRelogin(4))
        }
        requestGetUserData() {
            let e = {
                    user_id: o.dataHandler.getUserData().getUserId()
                },
                t = W.pb.RequestGetUserData.encode(e).finish();
            return this.sendWorldMsg(t, W.pb.MSGID.MsgID_GetUserData_Request, 0, !0, o.Enum.GameId.World, this.onGetRequestDataFailed.bind(this))
        }
        onGetRequestDataFailed() {
            o.SwitchLoadingView.hide(), o.popUp.showMsg({
                title: o.config.getStringData("Get_User_Data_Error_Title"),
                subtitle: o.config.getStringData("Get_User_Data_Error_Subtitle"),
                txt: o.config.getStringData("Get_User_Data_Error_Text"),
                isTwoBtn: !0,
                sureButtonType: S.Primary,
                msgType: o.Enum.ToastType.ToastTypeWarning,
                iconType: I.Location,
                sureLabel: o.config.getStringData("Hotupdate_retrybtn"),
                cancelLabel: o.config.getStringData("Close"),
                sureCallback: this.requestGetUserData.bind(this),
                cancelCallback: () => {
                    this.responseReceived(W.pb.MSGID.MsgID_GetUserData_Request), this.doLogOut()
                },
                onXCancelCallback: !0,
                shouldWaitForSureCallback: !0
            })
        }
        responseGetUserData(e) {
            o.dataHandler.getUserData().showLoadingScreenOnInitialFetch = !1, o.SwitchLoadingView.hide(), o.popUp.hidePopupWithMsgTxt(o.config.getStringData("Get_User_Data_Error_Text"));
            let t = this.decodePB(W.pb.ResponseGetUserData, e);
            if (t) {
                let e = t.error;
                console.log("error::.>" + e), this.responseReceived(W.pb.MSGID.MsgID_GetUserData_Request, e), 1 != e && this.onGetRequestDataFailed()
            }
        }
        noticeGetUserData(e) {
            let t = this.decodePB(W.pb.NoticeGetUserData, e);
            var s;
            t && (o.dataHandler.getUserData().nick_name = t.nick_name, o.dataHandler.getUserData().u32Chips = t.user_gold, o.dataHandler.getUserData().total_amount = t.total_amount, o.dataHandler.getUserData().game_coin = t.game_coin, o.dataHandler.getUserData().user_points = t.user_points, o.dataHandler.getUserData().points_ratio = t.ratio, o.dataHandler.getUserData().headUrl = o.dataHandler.getUserData().getImageURL(t.avatar), o.dataHandler.getUserData().user_id = o.String(t.user_id), o.dataHandler.getUserData().u32Uid = t.user_id, void 0 !== t.sharedPlayerId && (o.dataHandler.getUserData().sharedPlayerId = t.sharedPlayerId), o.dataHandler.getUserData().mobile = t.mobile, o.dataHandler.getUserData().gender = t.gender, o.dataHandler.getUserData().user_marks = t.user_marks, o.dataHandler.getUserData().clubs_max = t.clubs_max, o.dataHandler.getUserData().current_clubs = t.current_clubs, o.dataHandler.getUserData().u32CardType = t.card_type, o.dataHandler.getUserData().u32Deposit_gold = t.deposit_gold, o.dataHandler.getUserData().usdt = t.usdt, o.dataHandler.getUserData().deposit_usdt = t.deposit_usdt, o.dataHandler.getUserData().priorityareaCode = t.areaCode, o.dataHandler.getUserData().prioritymobile = t.mobile2, o.dataHandler.getUserData().casino_coin = (null == (s = t.balances) ? void 0 : s.CoinAmount[W.pb.Currency.CASINO_COIN]) ?? o.dataHandler.getUserData().casino_coin, o.MessageCenter.send("update_info"))
        }
        RequestCurrentRoomJackpot(e, t, s) {
            let a = {
                    club_id: e,
                    room_id: t,
                    blind_level: s
                },
                r = W.pb.RequestCurrentRoomJackpot.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_CurrentRoomJackpot_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_CurrentRoomJackpot_Response, this.ResponseCurrentRoomJackpot.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_CurrentRoomJackpot_Notice, this.NoticeCurrentRoomJackpot.bind(this))
        }
        ResponseCurrentRoomJackpot(e) {
            let t = this.decodePB(W.pb.ResponseCurrentRoomJackpot, e);
            if (t) {
                let e = t.error;
                console.log("error::.>" + e)
            }
        }
        NoticeCurrentRoomJackpot(e) {
            let t = this.decodePB(W.pb.NoticeCurrentRoomJackpot, e);
            if (t) {
                o.GameDataManager.tJackPot.currentRoomJackpot.profit_scale = t.profit_scale, o.GameDataManager.tJackPot.currentRoomJackpot.drawin_amout = t.drawin_amount, o.GameDataManager.tJackPot.currentRoomJackpot.CurrentRoomAwardTypes = [];
                for (let e = 0; e < t.awardTypes.length; e++) o.GameDataManager.tJackPot.currentRoomJackpot.pushCurrentRoomJackpot(t.awardTypes[e].award_percent, t.awardTypes[e].hand_level);
                o.MessageCenter.send("currentRoomJackpot", t)
            }
        }
        RequestGetJackpotData(e, t) {
            let s = {
                    club_id: e,
                    room_id: t
                },
                a = W.pb.RequestGetJackpotData.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_GetJackpotData_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_GetJackpotData_Response, this.ResponseGetJackpotData.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetJackpotData_Notice, this.NoticeGetJackpotData.bind(this))
        }
        ResponseGetJackpotData(e) {
            let t = this.decodePB(W.pb.ResponseGetJackpotData, e);
            if (t) {
                let e = t.error;
                console.log("error::.>" + e)
            }
        }
        NoticeGetJackpotData(e) {
            let t = this.decodePB(W.pb.NoticeGetJackpotData, e);
            if (t) {
                o.GameDataManager.tJackPot.club_id = t.club_id, o.GameDataManager.tJackPot.club_name = t.club_name, o.GameDataManager.tJackPot.eraseBaseJackpotInfosByClubId(t.club_id);
                for (let e = 0; e < t.jackpots.length; e++) o.GameDataManager.tJackPot.pushJackPot(t.jackpots[e].amount, t.jackpots[e].blind_level, t.club_id);
                o.MessageCenter.send("on_jackpot_data", t)
            }
        }
        RequestJackpotAwardRecord(e, t, s) {
            let a = {
                    club_id: e,
                    room_id: t,
                    blind_level: s
                },
                r = W.pb.RequestJackpotAwardRecord.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_JackpotAwardRecord_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_JackpotAwardRecord_Response, this.ResponseJackpotAwardRecord.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_JackpotAwardRecord_Notice, this.NoticeJackpotAwardRecord.bind(this))
        }
        ResponseJackpotAwardRecord(e) {
            let t = this.decodePB(W.pb.ResponseJackpotAwardRecord, e);
            if (t) {
                let e = t.error;
                console.log("error::.>" + e)
            }
        }
        NoticeJackpotAwardRecord(e) {
            let t = this.decodePB(W.pb.NoticeJackpotAwardRecord, e);
            if (t) {
                o.GameDataManager.tJackPot.award_players = [];
                for (let e = 0; e < t.awardInfos.length; e++) o.GameDataManager.tJackPot.pusHaward_players(t.awardInfos[e]);
                o.GameDataManager.tJackPot.lucky_Dog(t.luckDog), o.MessageCenter.send("jackpotAwardRecord", t)
            }
        }
        static getInstance() {
            return this.instence || (this.instence = new O, this.instence.init()), this.instence
        }
        NoticeJackpotAmout(e) {
            let t = this.decodePB(W.pb.NoticeJackpotAmout, e);
            o.GameDataManager.tJackPot.Push_blind_level = t.blind_level, o.GameDataManager.tJackPot.Push_club_id = t.club_id, o.GameDataManager.tJackPot.Push_current_amout = t.current_amout, o.GameDataManager.tJackPot.Push_prev_amount = t.prev_amount, o.GameDataManager.tJackPot.updateDateBaseInfoAmountData(t.blind_level, t.club_id, t.current_amout), o.GameDataManager.tJackPot.updateDateJackPotSetAmountData(t.blind_level, t.club_id, t.current_amout), o.MessageCenter.send("update_jackpotAmount")
        }
        NoticeJackPotAwardInfo(e) {
            let t = this.decodePB(W.pb.NoticeJackPotAwardInfo, e);
            this.noticeJackPotAwardMsg(t)
        }
        noticeJackPotAwardMsg(e) {
            if (1 == e.sys_msg_type) e.gameId == o.Enum.GameId.Jackfruit ? o.JackfruitManager.tRoomData.noticeJackPotAwardInfo = e : o.GameDataManager.tJackPot.noticeJackPotAwardInfo = e, o.MessageCenter.send("show_hit_jackPotCardType", e);
            else {
                let t = new p,
                    s = e.award_player_name,
                    a = o.config.getStringData(o.StringTools.formatC("UITitle%d", 112 + e.hand_level)),
                    r = e.award_amount,
                    n = o.StringTools.numberToString(o.StringTools.clientGoldByServer(r)),
                    i = "",
                    d = "";
                e.gameId == o.Enum.GameId.Jackfruit ? (i = o.StringTools.numToFloatString(e.blind_level), d = "UIJackpotHitJackfruitCardTypeNotice", a = o.config.getStringData(o.StringTools.formatC("M_UITitle%d", 112 + e.hand_level))) : (i = o.config.getblindString(e.blind_level - 1), d = "UIJackpotHitCardTypeNotice", a = o.config.getStringData(o.StringTools.formatC("UITitle%d", 112 + e.hand_level))), o.config.getCurrentLanguage() == o.Enum.LANGUAGE_TYPE.zh_CN || o.config.getCurrentLanguage() == o.Enum.LANGUAGE_TYPE.zh_TW ? t.str = o.StringTools.formatC(o.config.getStringData(d), s, i, a, n) : t.str = o.StringTools.formatC(o.config.getStringData(d), s, a, i, n);
                for (let s = 0; s < e.playGameIds.length; s++) {
                    let a = e.playGameIds[s];
                    a == o.Enum.GameId.Texas ? t.msgType.push(T.PUSH_TEXAS) : o.roomManager.checkGameIsZoom(a) ? t.msgType.push(T.PUSH_ZOOM_TEXAS) : a == o.Enum.GameId.Bet ? t.msgType.push(T.PUSH_BET) : a == o.Enum.GameId.Jackfruit ? t.msgType.push(T.PUSH_JACKFRUIT) : a != o.Enum.GameId.Plo && a != o.Enum.GameId.Plo5 || t.msgType.push(T.PUSH_PLO)
                }
                u.getInstance().addPushNotice(t)
            }
        }
        requestSnapshotList() {
            let e = {
                    uid: o.dataHandler.getUserData().u32Uid
                },
                t = W.pb.RequestClubSnapshotList.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_ClubSnapshotList_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_ClubSnapshotList_Response, this._responseSnapshotList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ClubSnapshotList_Notice, this._noticeSnapshotList.bind(this))
        }
        _responseSnapshotList(e) {
            let t = this.decodePB(W.pb.ResponseClubSnapshotList, e);
            t && (console.log("pb::MsgID_ClubSnapshotList_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeSnapshotList(e) {
            let t = this.decodePB(W.pb.NoticeClubSnapshotList, e);
            if (t) {
                console.log("pb::MsgID_ClubSnapshotList_Notice ==>>" + t), o.clubDataMgr.removeAllClubData();
                for (let e = 0; e < t.list.length; ++e) {
                    let s = W.pb.ClubSnapshotListParams.create(t.list[e]);
                    s.club_icon.length > 0 && (s.club_icon = o.dataHandler.getUserData().getImageURL(s.club_icon));
                    let a = new l;
                    a.club = s, o.clubDataMgr.addClubData(a, !1), s.club_id === o.clubDataMgr.getCurOpClubData().club.club_id && (o.clubDataMgr.getCurOpClubData().club.has_create_alliance = s.has_create_alliance)
                }
                o.MessageCenter.send("on_update_club_list")
            }
        }
        requestClubCreaterInfo(e) {
            let t = {
                    club_id: e
                },
                s = W.pb.RequestClubCreaterInfo.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_ClubCreaterInfo_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_ClubCreaterInfo_Response, this._responseClubCreaterInfo.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ClubCreaterInfo_Notice, this._noticeClubCreaterInfo.bind(this))
        }
        _responseClubCreaterInfo(e) {
            let t = this.decodePB(W.pb.ResponseClubCreaterInfo, e);
            t && (console.log("pb::MsgID_ClubCreaterInfo_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeClubCreaterInfo(e) {
            let t = this.decodePB(W.pb.NoticeClubCreaterInfo, e);
            if (!t) return;
            console.log("pb::MsgID_ClubCreaterInfo_Notice ==>>" + t);
            let s = o.clubDataMgr.getCurOpClubData();
            s.clubExtra.club_owner_name = o.String(t.create_player_name), s.clubExtra.club_owner_thumb = o.String(t.create_player_thumb), s.clubExtra.club_owner_thumb.length > 0 && (s.clubExtra.club_owner_thumb = o.dataHandler.getUserData().getImageURL(s.clubExtra.club_owner_thumb)), o.MessageCenter.send("update_roleInfo")
        }
        requestClubMemberSnapshotList(e, t) {
            let s = o.clubDataMgr.getClubDataByID(t);
            if (!s || s.club.club_id <= 0) return;
            let a = W.pb.ClubMemberSnapshotListParams.create();
            a.club_id = s.club.club_id, a.club_uid = o.dataHandler.getUserData().u32Uid, a.pull_count = e, s.clubExtra.club_member_list.length <= 0 ? a.pull_pos = 0 : (a.pull_pos = s.clubExtra.cur_maxIncreaseIndex, console.log(a.pull_pos), console.log(s.clubExtra.cur_maxIncreaseIndex));
            let r = {
                    param: a
                },
                n = W.pb.RequestClubMemberSnapshotList.encode(r).finish();
            this.sendWorldMsg(n, W.pb.MSGID.MsgID_ClubMemberSnapshotList_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_ClubMemberSnapshotList_Response, this._responseClubMemberSnapshotList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ClubMemberSnapshotList_Notice, this._noticeClubMemberSnapshotList.bind(this))
        }
        _responseClubMemberSnapshotList(e) {
            let t = this.decodePB(W.pb.ResponseClubMemberSnapshotList, e);
            t && (console.log("pb::MsgID_ClubMemberSnapshotList_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeClubMemberSnapshotList(e) {
            let t = this.decodePB(W.pb.NoticeClubMemberSnapshotList, e);
            if (!t) return;
            let s = o.clubDataMgr.getCurOpClubData();
            if (t.total_count !== s.clubExtra.club_member_list.length && !(0 != s.clubExtra.cur_maxIncreaseIndex && s.clubExtra.cur_maxIncreaseIndex <= t.last_inc_id)) {
                s.clubExtra.cur_maxIncreaseIndex = t.last_inc_id, console.log("noti.last_inc_id:: " + t.last_inc_id);
                for (let e = 0; e < t.snapshots.length; ++e) {
                    let a = W.pb.ClubMemberSnapshot.create(t.snapshots[e]);
                    a.member_icon = o.String(a.member_icon), console.log("param.member_name:: " + a.member_name), a.member_icon.length > 0 && (a.member_icon = o.dataHandler.getUserData().getImageURL(a.member_icon)), s.clubExtra.club_member_list.push(a)
                }
                s.club.club_member_count = t.total_count, o.MessageCenter.send("update_memberList")
            }
        }
        requestSearchClubMember(e, t, s) {
            let a = {
                    club_id: e,
                    find_str: t,
                    find_type: s
                },
                r = W.pb.RequestSearchClubMember.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_SearchClubMember_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_SearchClubMember_Response, this._responseSearchClubMember.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_SearchClubMember_Notice, this._noticeSearchClubMember.bind(this))
        }
        _responseSearchClubMember(e) {
            let t = this.decodePB(W.pb.ResponseSearchClubMember, e);
            t && (console.log("pb::MsgID_SearchClubMember_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeSearchClubMember(e) {
            let t = this.decodePB(W.pb.NoticeSearchClubMember, e);
            if (!t) return;
            let s = o.clubDataMgr.getCurOpClubData().clubExtra.club_member_search_list;
            o.StringTools.clearArray(s);
            for (let e = 0; e < t.snapshots.length; ++e) s.push(W.pb.ClubMemberSnapshot.create(t.snapshots[e]));
            switch (t.find_type) {
                case 1:
                    o.MessageCenter.send("updateSearchListM");
                    break;
                case 2:
                    o.MessageCenter.send("updateSearchListF")
            }
        }
        requestClubAutoAudit(e, t) {
            let s = {
                    club_id: e,
                    is_agree: t
                },
                a = W.pb.RequestAutoAgreeClub.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_AutoAgreeClubReply_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_AutoAgreeClubReply_Response, this._responseClubAutoAudit.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AutoAgreeClubReply_Notice, this._noticeClubAutoAudit.bind(this))
        }
        _responseClubAutoAudit(e) {
            let t = this.decodePB(W.pb.ResponseAutoAgreeClub, e);
            t && (console.log("pb::MsgID_AutoAgreeClubReply_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeClubAutoAudit(e) {
            let t = this.decodePB(W.pb.NoticeAutoAgreeClub, e);
            if (!t) return;
            let s = t.club_id,
                a = t.is_agree,
                r = o.clubDataMgr.getClubDataList();
            for (let e = 0; e < r.length; ++e) r[e].club.club_id === s && (r[e].club.is_agree = a)
        }
        requestModifyClubInfo(e) {
            let t = {
                    param: W.pb.ModifyClubInfoParams.create(e)
                },
                s = W.pb.RequestModifyClubInfo.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_ModifyClubInfo_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_ModifyClubInfo_Response, this._responseModifyClubInfo.bind(this))
        }
        _responseModifyClubInfo(e) {
            let t = this.decodePB(W.pb.ResponseModifyClubInfo, e);
            if (t) {
                let e = t.error;
                console.log("pb::MsgID_ModifyClubInfo_Response e_code ==>>" + e), 1 === e ? o.MessageCenter.send("ModiClubInfoSucc") : o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError)
            }
        }
        requestModifyClubMember(e, t) {
            let s = o.clubDataMgr.getCurOpClubData();
            if (!s || s.club.club_id <= 0) return;
            let a = W.pb.ModifyClubMemberParams.create();
            a.club_id = s.club.club_id, a.club_uid = o.dataHandler.getUserData().u32Uid, a.target_id = e, a.action_type = t;
            let r = {
                    param: a
                },
                n = W.pb.RequestModifyClubMember.encode(r).finish();
            this.sendWorldMsg(n, W.pb.MSGID.MsgID_ModifyClubMember_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_ModifyClubMember_Response, this._responseModifyClubMember.bind(this))
        }
        _responseModifyClubMember(e) {
            let t = this.decodePB(W.pb.ResponseModifyClubMember, e);
            t && (console.log("pb::MsgID_ModifyClubMember_Response error ==>>" + t.error), 1 != t.error && (o.clubDataMgr.setClickManger(!1), o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError)))
        }
        _noticeModifyClubMember(e) {
            let t = this.decodePB(W.pb.NoticeModifyClubMember, e);
            if (!t) return;
            console.log("MsgID_ModifyClubMember_Notice ==> ", t);
            let s = t.club_id;
            if (s == o.clubDataMgr.getCurOpClubData().club.club_id)
                for (let e = 0; e < o.clubDataMgr.getClubDataList().length; ++e) {
                    let t = o.clubDataMgr.getClubDataList()[e];
                    if (t.club.club_id === s) {
                        o.StringTools.clearArray(t.clubExtra.club_member_list), t.clubExtra.cur_maxIncreaseIndex = 0, this.requestClubMemberSnapshotList(20, s);
                        break
                    }
                }
            if (t.target_player_id === o.dataHandler.getUserData().u32Uid) {
                let e = o.config.getStringData(o.StringTools.formatC("tips_upto_manger_%d", t.action_type)),
                    s = o.StringTools.formatC("UINoticeUptoManger%d", t.action_type);
                o.TT.showMsg(o.StringTools.formatC(e, t.club_name), o.Enum.ToastType.ToastTypeInfo);
                let a = new n;
                a.msgNew = !0, a.msgType = i.RMSG_TYPE_CLUB, a.msgStatus = d.RMSG_STATUS_NONE, a.msgTime = t.op_time, a.msgContenMiddle.setData(s, t.club_name), o.globalMsgDataMgr.addRemindData(a), o.MessageCenter.send("updateListView")
            }
        }
        RequestFairPlayReport(e, t, s, a, r, o, n, i) {
            let d = {
                    roomid: e,
                    clubid: t,
                    room_uuid: s,
                    game_uuid: a,
                    suspect_uids: r,
                    contact: o,
                    detail: n
                },
                l = W.pb.RequestFairPlayReport.encode(d).finish();
            this.sendWorldMsg(l, W.pb.MSGID.MsgID_FairPlay_Report_Request, 0, !1, i), this.registerMsg(W.pb.MSGID.MsgID_FairPlay_Report_Response, this._HandResponseFairPlayReport.bind(this))
        }
        _HandResponseFairPlayReport(e) {
            let t = this.decodePB(W.pb.ResponseFairPlayReport, e);
            if (t)
                if (o.appConfig.isLandscapeLayout) o.MessageCenter.send("audit_report_response", t);
                else {
                    let e = t.error;
                    console.log("pb::MsgID_FairPlay_Report_Response==>>" + e), 1 == e && o.TP.showMsg(o.config.getStringData("AuditTips"), !1, null, null, !1, !1, o.config.getStringData("AuditReport_Success_title"), !1, 0, !0)
                }
        }
        checkValidGameData(e, t) {
            var s;
            const a = o.GameDataManager.getDataInstanceByGameAndRoomId(e, t);
            return (null == a || null == (s = a.tRoomData) ? void 0 : s.u32RoomId) == t || o.roomManager.checkGameIsZoom(e)
        }
        isShowLuckTurnTableAndValidRoom(e, t) {
            if (!this.isShowLuckTurntable()) return !1;
            const s = o.roomManager.getGameIdByRoomId(t) || e;
            r("_curGameID = ", s, "\troomId = ", t);
            const a = o.config.getCurrentScene();
            return a === o.Enum.SCENE.HALL_SCENE || a === o.Enum.SCENE.POKERMASTER_SCENE || o.config.getCurrentScene() === o.Enum.SCENE.COWBOY_SCENE || (!!this.checkValidGameData(s, t) || (r("invalid game data"), !1))
        }
        RequestQuerySendFairReport(e, t, s, a) {
            let r = {
                    club_id: e,
                    game_uuid_js: t,
                    room_uuid_js: s
                },
                o = W.pb.RequestQuerySendFairReport.encode(r).finish();
            this.sendWorldMsg(o, W.pb.MSGID.MsgID_QuerySendFairReport_Request, 0, !1, a), this.registerMsg(W.pb.MSGID.MsgID_QuerySendFairReport_Response, this._HandResponseQuerySendFairReport.bind(this))
        }
        _HandResponseQuerySendFairReport(e, t, s, a, r) {
            var n;
            let i = this.decodePB(W.pb.ResponseQuerySendFairReport, e),
                d = null == (n = o.roomManager.getRoomByIds(a, r)) ? void 0 : n.gameScene;
            if (i) {
                let e = i.error;
                console.log("pb::_HandResponseQuerySendFairReport==>>" + e), 1 == e ? (o.dataHandler.getUserData().isfirst = i.isfirst, o.dataHandler.getUserData().isgoldenough = i.isgoldenough, o.dataHandler.getUserData().chargefee = i.chargefee, o.dataHandler.getUserData().freecounts = i.freecounts, o.dataHandler.getUserData().auditGameuuid = i.game_uuid_js, o.MessageCenter.send("show_Audit", {
                    room_uuid_js: i.room_uuid_js,
                    value: !0,
                    game_uuid_js: i.game_uuid_js
                })) : 200 == e && (o.appConfig.isLandscapeLayout ? o.MessageCenter.send("show_Audit_fail", i) : o.TT.showMsg(o.config.getStringData("UIAllreviewReplayTips3"), o.Enum.ToastType.ToastTypeError, !1, !0, d))
            }
        }
        RequestLuckDrawDone(e) {
            let t = {
                    id: e
                },
                s = W.pb.LuckDrawDoneRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_Luck_Draw_Done_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_Luck_Draw_Done_Response, this._HandleNoticeLuckDrawDoneResponse.bind(this))
        }
        _HandleNoticeLuckDrawDoneResponse(e) {
            let t = this.decodePB(W.pb.LuckDrawDoneResponse, e);
            if (t) {
                1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError)
            }
        }
        _HandleNoticeLuckDraw(e) {
            let t = this.decodePB(W.pb.LuckDrawNotice, e);
            if (t) {
                o.dataHandler.getUserData().lucks = [], o.dataHandler.getUserData().luckindex = 0;
                for (let e = 0; e < t.lucks.length; e++) o.dataHandler.getUserData().lucks.push(t.lucks[e])
            }
            o.MessageCenter.send("showLabaPanel")
        }
        RequestAofThouthand(e) {
            let t = {
                    Playerid: e
                },
                s = W.pb.AofThouthandRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_Aof_Thouthand_Request, 0)
        }
        _HandleAofThouthand(e) {
            if (!this.isShowLuckTurntable()) return;
            let t = this.decodePB(W.pb.AofThouthandResponse, e);
            t && (1 == t.error && 1 == t.Hand_New && o.TT.showMsg(o.config.getStringData("LabaTips"), o.Enum.ToastType.ToastTypeInfo, !0), o.dataHandler.getUserData().hand_num = t.hand_num, o.dataHandler.getUserData().luckdrawslen = t.LuckDrawsLen, o.dataHandler.getUserData().playerHands = t.PlayerHands.slice(0), o.MessageCenter.send("get_aof_game_thouthand"))
        }
        requestModifyClubInvitePercent(e, t) {
            let s = {
                    club_id: e,
                    percent: t
                },
                a = W.pb.RequestSetClubInvitePercent.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_SetClubInvitePercent_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_SetClubInvitePercent_Response, this._responseModifyClubInvitePercent.bind(this))
        }
        _responseModifyClubInvitePercent(e) {
            let t = this.decodePB(W.pb.ResponseSetClubInvitePercent, e);
            if (t)
                if (console.log("pb::MsgID_SetClubInvitePercent_Response error ==>>" + t.error), 1 != t.error) o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError);
                else {
                    let e = t.club_id,
                        s = t.percent,
                        a = t.setInvitePercentMark,
                        r = o.clubDataMgr.getClubDataList();
                    for (let t = 0; t < r.length; ++t) r[t].club.club_id === e && (r[t].club.invitation_percent = s, r[t].club.setInvitePercentMark = a);
                    o.TT.showMsg(o.config.getStringData("UIClubSpreadSetSucess"), o.Enum.ToastType.ToastTypeSuccess), o.MessageCenter.send("update_modify_clubInvitePercent")
                }
        }
        requestAllianceSnapshotList(e) {
            let t = {
                    club_id: e
                },
                s = W.pb.RequestAllianceList.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_AllianceList_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_AllianceList_Response, this._responseAllianceSnapshotList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AllianceList_Notice, this._noticeAllianceSnapshotList.bind(this))
        }
        _responseAllianceSnapshotList(e) {
            let t = this.decodePB(W.pb.ResponseAllianceList, e);
            t && (console.log("pb::MsgID_AllianceList_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeAllianceSnapshotList(e) {
            let t = this.decodePB(W.pb.NoticeAllianceList, e);
            if (!t) return;
            let s = o.clubDataMgr.getCurOpClubData();
            o.StringTools.clearArray(s.clubExtra.allianceList);
            for (let e = 0; e < t.list.length; ++e) s.clubExtra.allianceList.push(W.pb.AllianceListParams.create(t.list[e]));
            o.MessageCenter.send("showAlliancelistView")
        }
        requestSearchAllianceInfo(e) {
            let t = {
                    alliance_id: e
                },
                s = W.pb.RequestSearchAllianceInfo.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_SearchAlliance_Request, 0)
        }
        _responseSearchAllianceInfo(e) {
            let t = this.decodePB(W.pb.ResponseSearchAllianceInfo, e);
            t && (console.log("pb::MsgID_SearchAlliance_Response error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeSearchAllianceInfo(e) {
            let t = this.decodePB(W.pb.NoticeSearchAlliance, e);
            t && (o.clubDataMgr.getCurSearchClubData().clubExtra.allianceInfo = W.pb.NoticeSearchAlliance.create(t))
        }
        requestCreateClub(e, t, s) {
            let a = W.pb.ClubParams.create();
            a.club_name = e, a.club_area = t, a.club_icon = s;
            let r = {
                    param: a
                },
                o = W.pb.RequestCreateClub.encode(r).finish();
            this.sendWorldMsg(o, W.pb.MSGID.MsgID_CreateClub_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_CreateClub_Response, this._responseCreateClub.bind(this))
        }
        _responseCreateClub(e) {
            let t = this.decodePB(W.pb.ResponseCreateClub, e);
            if (t) {
                let e = t.error;
                console.log("pb::MsgID_CreateClub_Response e_code ==>>" + e), 1 != e ? o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError) : (o.TT.showMsg(o.config.getStringData("tips_club_create_ok"), o.Enum.ToastType.ToastTypeSuccess), o.MessageCenter.send("on_create_club_succ"))
            }
        }
        _noticeCreateClub(e) {
            let t = this.decodePB(W.pb.NoticeCreateClub, e);
            if (!t) return;
            let s = new n;
            s.msgNew = !0, s.msgType = t.msg_type, s.msgTime = t.op_time, s.msgStatus = d.RMSG_STATUS_NONE, ((e, t) => {
                switch (e.op_type) {
                    case 1:
                        t.msgContenMiddle.setData("UINoticeClub_Create1", e.club_name);
                        break;
                    case 2:
                        e.club_create_uid === o.dataHandler.getUserData().u32Uid ? t.msgContenMiddle.setData("UINoticeClub_Dissolve1", e.club_name) : t.msgContenMiddle.setData("UINoticeClub_Dissolved", e.club_name);
                        break;
                    case 3:
                        e.club_create_uid === o.dataHandler.getUserData().u32Uid ? t.msgContenMiddle.setData("UINoticeClub_Leaved", e.u_name, e.club_name) : t.msgContenMiddle.setData("UINoticeClub_Leave1", e.club_name)
                }
            })(t, s), o.globalMsgDataMgr.addRemindData(s), o.MessageCenter.send("updateListView")
        }
        requestJoinClub(e, t) {
            let s = {
                    club_id: e,
                    club_uid: o.dataHandler.getUserData().u32Uid,
                    club_message: t,
                    invitation_code: ""
                },
                a = W.pb.RequestJoinClub.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_JoinClub_Request, 0)
        }
        _responseJoinClubToAdmin(e) {
            let t = this.decodePB(W.pb.ResponseJoinClubToAdmin, e);
            t && (console.log("pb::MsgID_JoinClub_Response_To_Admin error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeJoinClubToAdmin(e) {
            let t = this.decodePB(W.pb.NoticeJoinClub, e);
            if (!t) return;
            console.log("pb::MsgID_JoinClub_Notice==>>" + t);
            let s = (e, s) => {
                    1 === e ? this.requestJoinClubReply(1, t.club_id, t.club_uid, "") : (o.TP.showMsg("", !0, (e => {
                        e && this.requestJoinClubReply(2, t.club_id, t.club_uid, e.string)
                    }), null, !0), o.TP.getEditBox().placeholder = o.config.getStringData("NoticeLayer_tipspanel_Image_1_msgtext"))
                },
                a = new n;
            a.msgNew = !0, a.msgType = t.msg_type, a.msgTime = t.op_time, a.msgStatus = d.RMSG_STATUS_PENDING, a.msgContenUp.setData("UINoticeClubName", t.club_name), a.msgContenMiddle.setData("UINoticePlayerApplyJoin", o.StringTools.formatC("%s(ID:%d)", t.applicant_name, t.club_uid)), a.strTag = o.StringTools.formatC("%d-%d-%d-%s", t.msg_type, t.club_id, t.club_uid, t.applicant_name), a.msgEnsureFunc = (e, t, a) => {
                s(1)
            }, a.msgCancelFunc = (e, t, a) => {
                s(2)
            }, o.globalMsgDataMgr.addRemindData(a), o.MessageCenter.send("updateListView")
        }
        requestJoinClubReply(e, t, s, a) {
            let r = {
                    result: e,
                    club_id: t,
                    uid: s,
                    reason: a
                },
                o = W.pb.ReplyJoinClub.encode(r).finish();
            this.sendWorldMsg(o, W.pb.MSGID.MsgID_JoinClub_Reply, 0)
        }
        _responseJoinClubToMember(e) {
            let t = this.decodePB(W.pb.ResponseJoinClubToMember, e);
            t && (console.log("pb::MsgID_JoinClub_Response_To_Member error ==>>" + t.error), 1 != t.error && o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeJoinClubToMember(e) {
            let t = this.decodePB(W.pb.NoticeJoinClubToMember, e);
            if (!t) return;
            console.log("pb::MsgID_JoinClub_Notice_To_Member ==>>" + t), this.requestSnapshotList(), this.requestCurrentBoardList();
            let s = o.StringTools.formatC("%d-%d-%d-%s", t.msg_type, t.club_id, t.uid, t.apply_name),
                a = o.globalMsgDataMgr.getRemindInfoByStrTag(s);
            a ? a.strTag = "" : (a = new n, a.msgNew = !0), a.msgTime = t.op_time, a.msgType = t.msg_type, a.msgStatus = d.RMSG_STATUS_NONE, a.msgContenUp.setData("UINoticeClubName", t.club_name), t.admin_id === o.dataHandler.getUserData().u32Uid ? (a.msgContenMiddle.setData("UINoticePlayerApplyJoin", o.StringTools.formatC("%s(ID:%d)", t.apply_name, t.uid)), a.msgStatus = 1 === t.result ? d.RMSG_STATUS_RATIFIED : d.RMSG_STATUS_REFUSED, 1 === t.is_agree ? 1 === t.result && a.msgContenDown.setData("UINoticeAutoApplyJoin", t.apply_name, t.club_name) : 0 === t.is_agree && (1 === t.result ? a.msgContenDown.setData("tips_club_join_member_op", t.Operator_name) : 2 === t.result && (0 === t.operator_id ? a.msgContenDown.setData("UINoticeHasRefuseReasonMsg2") : a.msgContenDown.setData("tips_club_join_member_op", t.Operator_name)))) : 1 === t.result ? a.msgContenMiddle.setData("UINoticeHasRatifyClubMsg", t.club_name) : (a.msgContenMiddle.setData("UINoticeHasRefuseMsg", t.club_name), "[-1]" === t.reason ? a.msgContenDown.setData("UINoticeHasRefuseReasonMsg2") : a.msgContenDown.setData("UINoticeHasRefuseReasonMsg", t.reason)), o.globalMsgDataMgr.addRemindData(a), o.MessageCenter.send("updateListView")
        }
        requestLeaveClub(e, t) {
            let s = {
                    param: {
                        club_id: e,
                        club_did: t
                    }
                },
                a = W.pb.RequestLeaveClub.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_LeaveClub_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_LeaveClub_Response, this._responseLeaveClub.bind(this))
        }
        _responseLeaveClub(e) {
            let t = this.decodePB(W.pb.ResponseLeaveClub, e);
            t && (console.log("pb::MsgID_LeaveClub_Response error ==>>" + t.error), 1 != t.error ? o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError) : (o.TT.showMsg(o.config.getStringData("tips_club_exit_ok"), o.Enum.ToastType.ToastTypeSuccess), this.requestSnapshotList()), o.MessageCenter.send("leave_club", t.error))
        }
        requestJoinAlliance(e, t, s) {
            let a = {
                    alliance_id: e,
                    club_id: t,
                    message: s,
                    apply_time: 0
                },
                r = W.pb.RequestJoinAlliance.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_JoinAlliance_Request, 0)
        }
        _requestReplyJoinAllianceToWorld(e, t, s, a) {
            let r = {
                    result: e,
                    alliance_id: t,
                    club_id: s,
                    reason: a
                },
                o = W.pb.ReplyJoinAllianceToWorld.encode(r).finish();
            this.sendWorldMsg(o, W.pb.MSGID.MsgID_JoinAllianceReply_To_World, 0)
        }
        _responseJoinAllianceToAdmin(e) {
            let t = this.decodePB(W.pb.ResponseJoinAllianceToAdmin, e);
            t && 1 !== t.error && o.TT.showMsg(o.config.getStringData(o.StringTools.formatC("ServerErrorCode%d", t.error)), o.Enum.ToastType.ToastTypeError)
        }
        _noticeJoinAlliance(e) {
            let t = this.decodePB(W.pb.NoticeJoinAlliance, e);
            if (!t) return;
            let s = (e, s) => {
                    1 === e ? this._requestReplyJoinAllianceToWorld(e, t.alliance_id, t.club_id, "") : (o.TP.showMsg("", !0, (s => {
                        s && this._requestReplyJoinAllianceToWorld(e, t.alliance_id, t.club_id, s.string)
                    }), null, !0), o.TP.getEditBox().placeholder = o.config.getStringData("NoticeLayer_tipspanel_Image_1_msgtext"))
                },
                a = new n;
            a.msgNew = !0, a.msgType = t.msg_type, a.msgTime = t.apply_time, a.msgStatus = d.RMSG_STATUS_PENDING, a.msgContenUp.setData("UINoticeAllianceName", t.alliance_name), a.msgContenMiddle.setData("UINoticeApplyJoinAlliance", t.club_name), a.strTag = o.StringTools.formatC("%d-%d-%d-%s", t.msg_type, t.alliance_id, t.club_id, t.alliance_name), a.msgEnsureFunc = (e, t, a) => {
                s(1)
            }, a.msgCancelFunc = (e, t, a) => {
                s(2)
            }, o.globalMsgDataMgr.addRemindData(a), o.MessageCenter.send("updateListView")
        }
        _responseJoinAllianceToMember(e) {
            let t = this.decodePB(W.pb.ResponseJoinAllianceToMember, e);
            if (t)
                if (1 != t.error) o.TT.showMsg(o.config.getStringData(o.StringTools.formatC("ServerErrorCode%d", t.error)), o.Enum.ToastType.ToastTypeError);
                else {
                    o.TT.showMsg(o.config.getStringData("AllianceUI20"), o.Enum.ToastType.ToastTypeInfo);
                    let e = o.clubDataMgr.getCurSearchClubData().clubExtra.allianceInfo;
                    o.MessageCenter.send("showAllianceMainView", e.alliance_id)
                }
        }
        _noticeJoinAllianceToMember(e) {
            let t = this.decodePB(W.pb.NoticeJoinAllianceToMember, e);
            if (!t) return;
            console.log("pb::MsgID_JoinAlliance_Notice_To_Member ==>>" + t);
            let s = o.StringTools.formatC("%d-%d-%d-%s", t.msg_type, t.alliance_id, t.club_id, t.alliance_name),
                a = o.globalMsgDataMgr.getRemindInfoByStrTag(s);
            a ? a.strTag = "" : (a = new n, a.msgNew = !0), a.msgTime = t.op_time, a.msgType = t.msg_type, a.msgStatus = d.RMSG_STATUS_NONE, a.msgContenUp.setData("UINoticeAllianceName", t.alliance_name), t.curr_club_id === t.alli_club_id ? (1 === t.result ? a.msgStatus = d.RMSG_STATUS_RATIFIED : 2 === t.result ? a.msgStatus = d.RMSG_STATUS_REFUSED : a.msgStatus = d.RMSG_STATUS_CANCEL, "[-1]" === t.reason && (3 == t.result ? a.msgContenDown.setData("UINoticeHasCancelReasonMsg2") : a.msgContenDown.setData("UINoticeHasRefuseReasonMsg2"))) : (1 === t.result ? (a.msgContenMiddle.setData("UINoticeHasRatifyClubMsg", t.alliance_name), o.MessageCenter.send("showAllianceMainView", t.alliance_id)) : 2 === t.result ? (a.msgContenMiddle.setData("UINoticeHasRefuseMsg", t.alliance_name), "[-1]" === t.reason ? a.msgContenDown.setData("UINoticeHasRefuseReasonMsg2") : a.msgContenDown.setData("UINoticeHasRefuseReasonMsg", t.reason)) : (a.msgContenMiddle.setData("UINoticeHasCancelMsg", t.alliance_name), a.msgContenDown.setData("UINoticeHasCancelReasonMsg2")), this.requestAllianceSnapshotList(t.curr_club_id)), o.globalMsgDataMgr.addRemindData(a), o.MessageCenter.send("updateListView")
        }
        requestLeaveAlliance(e, t) {
            let s = {
                    alliance_id: e,
                    club_id: t
                },
                a = W.pb.RequestLeaveAlliance.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_LeaveAlliance_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_LeaveAlliance_Response, this._responseLeaveAlliance.bind(this))
        }
        _responseLeaveAlliance(e) {
            let t = this.decodePB(W.pb.ResponseLeaveAlliance, e);
            t && (console.log("pb::MsgID_LeaveAlliance_Response error ==>>" + t.error), 1 === t.error ? (0 === t.isDisband ? o.TT.showMsg(o.config.getStringData("tips_alliance_exit_ok"), o.Enum.ToastType.ToastTypeSuccess) : o.TT.showMsg(o.config.getStringData("tips_alliance_exit_ok_1"), o.Enum.ToastType.ToastTypeSuccess), this.requestSnapshotList()) : o.TT.showMsg(o.config.getStringData("ServerErrorCode" + t.error), o.Enum.ToastType.ToastTypeError))
        }
        _noticeLeaveAlliance(e) {
            let t = this.decodePB(W.pb.NoticeLeaveAlliance, e);
            if (!t) return;
            let s = new n;
            s.msgNew = !0, s.msgType = t.msg_type, s.msgTime = t.op_time, s.msgStatus = d.RMSG_STATUS_NONE, (e => {
                t.club_id === t.club_admin_id ? t.club_id === t.belong_club_id ? e.msgContenMiddle.setData("UINoticeAllianceDissolveOK", t.alliance_name) : e.msgContenMiddle.setData("UINoticeAllianceDissolved", t.alliance_name) : t.club_id === t.belong_club_id ? e.msgContenMiddle.setData("UINoticeAllianceExitOk", t.alliance_name) : e.msgContenMiddle.setData("UINoticeMemberLeaveAlliance", t.alliance_name)
            })(s), o.globalMsgDataMgr.addRemindData(s), o.MessageCenter.send("updateListView")
        }
        RequestAddCoinOrderPayRequest(e, t, s) {
            let a = {
                    type: e,
                    uid: o.dataHandler.getUserData().u32Uid,
                    productid: t,
                    amount: s
                },
                r = W.pb.RequestAddCoinOrder.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_AddCoinOrder_Pay_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_AddCoinOrder_Pay_Response, this.HandResponseAddCoinOrderPay.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_AddCoinResult_Pay_Notice, this.HandNoticeAddCoinResultPay.bind(this))
        }
        HandResponseAddCoinOrderPay(e) {
            let t = this.decodePB(W.pb.ResponseAddCoinOrder, e);
            if (t) {
                t.error;
                if (1 == o.dataHandler.getUserData().pay_type);
                else {
                    let e = t.token,
                        s = o.dataHandler.getUserData().u32Uid,
                        r = "";
                    if (0 == s) {
                        if (r = o.tools.GetStringByCCFile("user_id"), o.StringTools.getArrayLength(r) <= 0) return
                    } else r = s.toString();
                    let n = 2,
                        i = encodeURI(o.dataHandler.getUserData().nick_name),
                        d = o.dataHandler.getUserData().firstClubId,
                        l = o.dataHandler.getUserData().firstAlliId,
                        g = (o.dataHandler.getUserData().mobile, Math.floor((new Date).getTime() / 1e3)),
                        c = "294de072c3d679f3a6adc5ff2c50b448e9265ebe",
                        u = o.config.getCurrentLanguageDetails().code,
                        p = "",
                        _ = o.dataHandler.getUserData().isTouristUser ? 1 : 0,
                        h = o.StringTools.formatC("%d", n) + r + r + o.StringTools.formatC("%d", d) + o.StringTools.formatC("%d", l) + i + e + u + o.StringTools.formatC("%lld", g) + o.StringTools.formatC("%d", _) + o.StringTools.formatC("%s", c);
                    a("key::" + h);
                    let M = o.dataHandler.getUserData().priorityareaCode,
                        b = "product_id=" + o.StringTools.formatC("%d", n) + "&user_id=" + r + "&login_name=" + r + "&club_id=" + o.StringTools.formatC("%d", d) + "&union_id=" + o.StringTools.formatC("%d", l) + "&nickname=" + i + "&token=" + e + "&language_type=" + u + "&areacode=" + M + "&time=" + o.StringTools.formatC("%lld", g) + "&extra_param1=" + p + "&guest=" + _ + "&key_code=" + o.md5.md5(h) + "&is_pc=" + (o.config.IS_PC() ? 1 : 0),
                        m = o.dataHandler.getUserData().shopUrl + o.config.getStringData("WEB_API_SHOP", !0) + "?" + b;
                    a("url::" + m), o.SHOP.HandleUrlForNative(m)
                }
            }
        }
        HandNoticeAddCoinResultPay(e) {
            let t = this.decodePB(W.pb.NoticeAddCoinResult, e);
            t && 1 == t.error && (o.worldNet.requestGetUserData(), o.TT.showMsg(o.StringTools.formatC(o.config.getStringData("UIPaySuccess"), o.StringTools.serverGoldToShowNumber(t.add_coin)), o.Enum.ToastType.ToastTypeSuccess))
        }
        RequestDelCoinOrderRequest() {
            let e = {
                    type: 2,
                    uid: o.dataHandler.getUserData().u32Uid
                },
                t = W.pb.RequestDelCoinOrder.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_DelCoinOrder_Pay_Request, 0), this.registerMsg(W.pb.MSGID.MsgID_DelCoinOrder_Pay_Response, this.HandResponseDelCoinOrderPay.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_DelCoinResult_Pay_Notice, this.HandNoticeDelCoinResult.bind(this))
        }
        HandResponseDelCoinOrderPay(e) {
            let t = this.decodePB(W.pb.ResponseDelCoinOrder, e);
            if (t) {
                t.error;
                if (1 == o.dataHandler.getUserData().pay_type);
                else {
                    let e = t.srv_del_order,
                        s = t.token,
                        a = o.dataHandler.getUserData().u32Uid,
                        r = "";
                    if (0 == a) {
                        if (r = o.tools.GetStringByCCFile("user_id"), o.StringTools.getArrayLength(r) <= 0) return
                    } else r = a.toString();
                    let n = o.config.getCurrentLanguageDetails().code,
                        i = 2,
                        d = encodeURI(o.dataHandler.getUserData().nick_name),
                        l = o.dataHandler.getUserData().firstClubId,
                        g = o.dataHandler.getUserData().firstAlliId,
                        c = o.dataHandler.getUserData().u32Chips,
                        u = (o.dataHandler.getUserData().mobile, Math.floor((new Date).getTime() / 1e3)),
                        p = "294de072c3d679f3a6adc5ff2c50b448e9265ebe",
                        _ = o.dataHandler.getUserData().user_points,
                        h = o.native.GetDeviceUUID(),
                        M = o.httpHandler.getDeviceType(),
                        b = o.dataHandler.getUserData().priorityareaCode,
                        m = o.StringTools.numberToString(o.StringTools.clientGoldByServer(o.dataHandler.getUserData().usdt)),
                        D = o.StringTools.formatC("%d", i) + r + r + o.StringTools.formatC("%d", l) + o.StringTools.formatC("%d", g) + o.StringTools.numberToString(o.StringTools.clientGoldByServer(c)) + o.StringTools.formatC("%d", e) + d + s + _ + n + o.StringTools.formatC("%lld", u) + o.StringTools.formatC("%s", p);
                    console.log("key：" + D);
                    let R = "product_id=" + o.StringTools.formatC("%d", i) + "&user_id=" + r + "&login_name=" + r + "&club_id=" + o.StringTools.formatC("%d", l) + "&union_id=" + o.StringTools.formatC("%d", g) + "&true_amount=" + o.StringTools.numberToString(o.StringTools.clientGoldByServer(c)) + "&usdt_amount=" + m + "&billno=" + o.StringTools.formatC("%d", e) + "&nickname=" + d + "&token=" + s + "&points=" + _ + "&uuid=" + h + "&device=" + M + "&language_type=" + n + "&areacode=" + b + "&time=" + o.StringTools.formatC("%lld", u) + "&key_code=" + o.md5.md5(D) + "&is_pc=" + (o.config.IS_PC() ? 1 : 0),
                        S = o.dataHandler.getUserData().shopUrl + o.config.getStringData("WEB_API_EXCHANGE", !0) + "?" + R;
                    console.log("md5key：" + D), console.log("url" + S), o.SHOP.HandleUrlForNative(S)
                }
            }
        }
        HandNoticeDelCoinResult(e) {
            let t = this.decodePB(W.pb.NoticeDelCoinResult, e);
            t && 1 == t.error && o.worldNet.requestGetUserData()
        }
        requestAuthVerify(e, t = o.Enum.GameId.World) {
            let s = W.pb.AuthVerifyRequest.create();
            s.result = e;
            let a = W.pb.AuthVerifyRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_AuthVerify_Request, 0, !1, t), this.registerMsg(W.pb.MSGID.MsgID_AuthVerify_Response, this._responseAuthVerify.bind(this))
        }
        _responseAuthVerify(e) {
            let t = this.decodePB(W.pb.AuthVerifyResponse, e);
            t && o.MessageCenter.send("on_update_slider_verify_result", t)
        }
        requestMailList(e, t) {
            let s = {
                    uid: o.dataHandler.getUserData().getUserId(),
                    mail_begin_index: e,
                    mail_end_index: t
                },
                a = W.pb.RequestGetUserMailList.encode(s).finish();
            this.registerMsg(W.pb.MSGID.MsgID_GetUserMailListInfo_Response, this._responseMailList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_GetUserMailListInfo_Notice, this._noticeMailList.bind(this)), this.sendWorldMsg(a, W.pb.MSGID.MsgID_GetUserMailListInfo_Request, 0, !0)
        }
        _responseMailList(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.ResponseGetUserMailList, e);
            a && (console.log("pb::MsgID_GetUserMailListInfo_Response e_code ==>>" + a.error), 1 != a.error && (this.responseReceived(W.pb.MSGID.MsgID_GetUserMailListInfo_Request, a.error), o.TT.showMsg(o.config.getStringData("ServerErrorCode" + a.error), o.Enum.ToastType.ToastTypeError)))
        }
        _noticeMailList(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeGetUserMailList, e);
            if (a) {
                console.log("pb::MsgID_GetUserMailListInfo_Notice ==>>" + JSON.stringify(a)), this.responseReceived(W.pb.MSGID.MsgID_GetUserMailListInfo_Request);
                for (let e = 0; e < a.mail_list.length; ++e) o.globalMsgDataMgr.addMailData(W.pb.MailInfo.create(a.mail_list[e]));
                o.MessageCenter.send("updateListView", !0)
            }
        }
        requestAnnounceList() {
            let e = {
                    uid: o.dataHandler.getUserData().getUserId()
                },
                t = W.pb.RequestAnounceList.encode(e).finish();
            this.registerMsg(W.pb.MSGID.MsgID_ResponseAnounceList, this._responseAnnounceList.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_NoticeAnounceList, this._noticeAnnounceList.bind(this)), this.sendWorldMsg(t, W.pb.MSGID.MsgID_RequestAnounceList, 0, !0)
        }
        _responseAnnounceList(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.ResponseAnounceList, e);
            a && (console.log("pb::MsgID_ResponseAnounceList e_code ==>>" + a.error), 1 != a.error && (this.responseReceived(W.pb.MSGID.MsgID_RequestAnounceList, a.error), o.TT.showMsg(o.config.getStringData("ServerErrorCode" + a.error), o.Enum.ToastType.ToastTypeError)))
        }
        _noticeAnnounceList(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeAnounceList, e);
            if (a) {
                console.log("pb::MsgID_NoticeAnounceList ==>>" + JSON.stringify(a)), this.responseReceived(W.pb.MSGID.MsgID_RequestAnounceList);
                for (let e = 0; e < a.anounce_list.length; ++e) o.globalMsgDataMgr.addMailData(W.pb.MailInfo.create(a.anounce_list[e]));
                o.MessageCenter.send("updateListView", !0)
            }
        }
        requestFetchOneMail(e) {
            let t = {
                    uid: o.dataHandler.getUserData().getUserId(),
                    mail_id: e
                },
                s = W.pb.RequestFetchOneMail.encode(t).finish();
            this.registerMsg(W.pb.MSGID.MsgID_ReadAndFetchOneMail_Response, this._responseFetchOneMail.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ReadAndFetchOneMail_Notice, this._noticeFetchOneMail.bind(this)), this.sendWorldMsg(s, W.pb.MSGID.MsgID_ReadAndFetchOneMail_Request, 0, !0)
        }
        _responseFetchOneMail(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.ResponseFetchOneMail, e);
            a && (console.log("pb::MsgID_ReadAndFetchOneMail_Response e_code ==>>" + a.error), 1 != a.error && (this.responseReceived(W.pb.MSGID.MsgID_ReadAndFetchOneMail_Request, a.error), o.TT.showMsg(o.config.getStringData("ServerErrorCode" + a.error), o.Enum.ToastType.ToastTypeError)))
        }
        _noticeFetchOneMail(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeFetchOneMail, e);
            a && (console.log("pb::MsgID_ReadAndFetchOneMail_Notice ==>>" + JSON.stringify(a)), this.responseReceived(W.pb.MSGID.MsgID_ReadAndFetchOneMail_Request), o.MessageCenter.send("pb_noticefetchonemail", W.pb.MailInfo.create(a.onemail)))
        }
        requestFetchOneAnnounce(e) {
            let t = {
                    uid: o.dataHandler.getUserData().getUserId(),
                    mail_id: e
                },
                s = W.pb.RequestFetchOneAnounce.encode(t).finish();
            this.registerMsg(W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Response, this._responseFetchOneAnnounce.bind(this)), this.registerMsg(W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Notice, this._noticeFetchOneAnnounce.bind(this)), this.sendWorldMsg(s, W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Request, 0, !0)
        }
        _responseFetchOneAnnounce(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.ResponseFetchOneAnounce, e);
            a && (console.log("pb::MsgID_ReadAndFetchOneAnounce_Response e_code ==>>" + a.error), 1 != a.error && (this.responseReceived(W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Request, a.error), o.TT.showMsg(o.config.getStringData("ServerErrorCode" + a.error), o.Enum.ToastType.ToastTypeError)))
        }
        _noticeFetchOneAnnounce(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeFetchOneAnounce, e);
            a && (console.log("pb::MsgID_ReadAndFetchOneAnounce_Notice ==>>" + JSON.stringify(a)), this.responseReceived(W.pb.MSGID.MsgID_ReadAndFetchOneAnounce_Request), o.MessageCenter.send("pb_noticefetchonemail", W.pb.MailInfo.create(a.oneanounce)))
        }
        _noticeMailNum(e, t, s) {
            if (0 == o.appConfig.getGeneralConfig().showInAppMessages) return;
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NotifyUserMailNum, e);
            a && (console.log("pb::MsgID_NotifyUserMailNum ==>>" + JSON.stringify(a)), o.MessageCenter.send("on_notify_mail_num", a))
        }
        _noticeOneMail(e, t, s) {
            if (0 == o.appConfig.getGeneralConfig().showInAppMessages) return;
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeOneMail, e);
            if (a) {
                var r;
                if (console.log("pb::MsgID_NoticeOneMail ==>>" + JSON.stringify(a)), o.globalMsgDataMgr.addMailData(W.pb.MailInfo.create(a.onemail), !0))
                    if (o.AudioMgr.playButtonSound("notice.mp3"), a.onemail.mail_type === q.KYC_STATUS && o.appConfig.getGeneralConfig().enableKycVerification) o.globalMsgDataMgr.showKYCAnnouncementPopup(null == (r = a.onemail.kyc_status) ? void 0 : r.status);
                o.MessageCenter.send("updateListView")
            }
        }
        _noticeOneAnnounce(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeOneAnounce, e);
            if (!a) return;
            console.log("pb::MsgID_NoticeOneAnounce ==>>" + JSON.stringify(a));
            let r = W.pb.MailInfo.create(a.oneanounce);
            o.globalMsgDataMgr.addMailData(r, !0) && (o.MessageCenter.send("updateListView"), a.oneanounce.mail_type === q.ANNOUNCE_IMME && o.MessageCenter.send("on_pop_one_anounce", r))
        }
        _noticeWithdrawMail(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeWithdrawMail, e);
            a && (console.log("pb::MsgID_NoticeWithdrawMail ==>>" + JSON.stringify(a)), o.globalMsgDataMgr.removeMailInfoByID(a.mail_id) && o.MessageCenter.send("updateListView"))
        }
        _noticeWithdrawAnnounce(e, t, s) {
            if (!this.isExpectedServer(t, s)) return;
            let a = this.decodePB(W.pb.NoticeWithdrawAnounce, e);
            a && (console.log("pb::MsgID_NoticeWithdrawAnounce ==>>" + JSON.stringify(a)), o.globalMsgDataMgr.removeMailInfoByID(a.mail_id) && o.MessageCenter.send("updateListView"))
        }
        RequestSearchClubInfo(e) {
            let t = {
                    club_id: e
                },
                s = W.pb.RequestSearchClubInfo.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_SearchClubInfo_Request, 0)
        }
        NoticeSearchClubInfo(e) {
            let t = this.decodePB(W.pb.NoticeSearchClubInfo, e);
            if (!t) return;
            let s = new l;
            s.club = W.pb.ClubSnapshotListParams.create(t.snapshots), s.club.club_type = 3, o.clubDataMgr.setCurOpClubID(s.club.club_id), o.clubDataMgr.setCurSearchClubData(s), o.MessageCenter.send("update_search_club")
        }
        RequestCreateAlliance(e, t, s, a, r) {
            let o = {
                    alliance_name: e,
                    club_id: t,
                    area_code: s,
                    mobile: a,
                    email: r
                },
                n = W.pb.RequestCreateAlliance.encode(o).finish();
            this.sendWorldMsg(n, W.pb.MSGID.MsgID_CreateAlliance_Request, 0)
        }
        ResponseCreateAlliance(e) {
            let t = this.decodePB(W.pb.ResponseCreateAlliance, e);
            t && (1 == t.error ? (o.TT.showMsg(o.config.getStringData("tips_alliance_send_apply"), o.Enum.ToastType.ToastTypeDefault), o.MessageCenter.send("AllianceCreate_onBtnBackClick")) : o.TT.showMsg(o.config.getStringData(o.StringTools.formatC("ServerErrorCode%d", t.error)), o.Enum.ToastType.ToastTypeError))
        }
        GetMiniGameState(e) {
            let t = {
                    id: e
                },
                s = W.pb.GameStatusV2Request.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_GameStatusV2_Request, 0)
        }
        HandleGameStatusMessage(e) {
            let t = this.decodePB(W.pb.GameStatusV2Response, e);
            t && (1 == t.status ? o.worldNet.RequestRoomList(t.id) : 2 == t.status && (o.TT.showMsg(o.config.getStringData("ServerErrorCode104"), o.Enum.ToastType.ToastTypeWarning), o.MessageCenter.send("MiniGames_gameStateError", t.id)))
        }
        RequestRoomList(e) {
            let t = {},
                s = null,
                a = 0;
            switch (e) {
                case o.Enum.GameId.VideoCowboy:
                    a = W.pb.MSGID.MsgID_VideoCowboy_List_Request, s = W.pb.VideoCowboyGameListRequest.encode(t).finish();
                    break;
                case o.Enum.GameId.CowBoy:
                    a = W.pb.MSGID.MsgID_CowBoy_List_Request, s = W.pb.CowBoyGameListRequest.encode(t).finish();
                    break;
                case o.Enum.GameId.HumanBoy:
                    a = W.pb.MSGID.MsgID_HumanBoy_List_Request, s = W.pb.HumanBoyGameListRequest.encode(t).finish();
                    break;
                case o.Enum.GameId.PokerMaster:
                    a = W.pb.MSGID.MsgID_PokerMaster_List_Request, s = W.pb.PokerMasterGameListRequest.encode(t).finish()
            }
            0 != a && this.sendWorldMsg(s, a, 0)
        }
        cowBoyResponseRoomList(e) {
            let t = null;
            t = this.decodePB(W.pb.CowBoyGameListResponse, e), t.gameID = o.Enum.GameId.CowBoy, t && o.MessageCenter.send("RoomList_ResponseRoomList", t)
        }
        videoResponseRoomList(e) {
            let t = null;
            t = this.decodePB(W.pb.VideoCowboyGameListResponse, e), t.gameID = o.Enum.GameId.VideoCowboy, t && o.MessageCenter.send("RoomList_ResponseRoomList", t)
        }
        humanBoyResponseRoomList(e) {
            let t = null;
            t = this.decodePB(W.pb.HumanBoyGameListResponse, e), t.gameID = o.Enum.GameId.HumanBoy, t && o.MessageCenter.send("RoomList_ResponseRoomList", t)
        }
        pokerMasterResponseRoomList(e) {
            let t = null;
            t = this.decodePB(W.pb.PokerMasterGameListResponse, e), t.gameID = o.Enum.GameId.PokerMaster, t && o.MessageCenter.send("RoomList_ResponseRoomList", t)
        }
        BannerRequest() {
            if (!o.appConfig.getLobbyConfig().showPromoArea) return;
            let e = {
                    language: W.pb.LanguageType.Chinese,
                    languageStr: o.config.getCurrentLanguage()
                },
                t = W.pb.BannerRequest.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_Banner_Request, 0)
        }
        _HandleBannerResponseNotic(e) {
            if (!o.appConfig.getLobbyConfig().showPromoArea) return;
            o.dataHandler.clearBanner();
            let t = this.decodePB(W.pb.BannerResponse, e);
            if (!t || "" === t.banner_json) return void o.MessageCenter.send("update_bannerImg");
            let s = t.banner_json;
            console.log("banner json文件内容：" + s);
            let a = JSON.parse(s),
                r = o.domainMgr.getServerInfo(),
                n = a.length;
            for (let e = 0; e < n; e++) {
                let t = a[e].game_type,
                    s = a[e].image,
                    n = s.length;
                for (let e = 0; e < n; e++) {
                    let a = null;
                    a = o.native.isWideScreen() ? s[e].pad : s[e].file;
                    let n = s[e].link,
                        i = new _;
                    i.imageUrl = r.image_server + a, -1 != n.search("ggjs:") ? i.webViewUrl = n : i.webViewUrl = o.StringTools.getArrayLength(n) <= 0 ? "" : r.web_server + "/user/article/banner?url=" + n, o.dataHandler.addBannerUrl(t, i)
                }
            }
            o.MessageCenter.send("update_bannerImg")
        }
        RequestRank(e) {
            let t = {
                    rankId: e
                },
                s = W.pb.GetRankRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_GetRank_Request, 0)
        }
        _HandleRankResponse(e) {
            let t = this.decodePB(W.pb.GetRankResponse, e);
            if (t) {
                o.dataHandler.getUserData().m_rankInfos.splice(0, o.dataHandler.getUserData().m_rankInfos.length);
                for (let e = 0; e < t.list.length; e++) {
                    let s = JSON.parse(t.list[e]);
                    if (s) {
                        let e = new c;
                        e.uid = s.uid, e.name = s.name, e.head = s.head, e.updateAt = s.updateAt, e.rank = s.rank, e.profit = s.profit, e.coin = s.coin, e.frequency = s.frequency, e.plat = s.plat, o.dataHandler.getUserData().m_rankInfos.push(e)
                    }
                }
                if ("" != t.owner) {
                    let e = JSON.parse(t.owner);
                    if (e) {
                        let t = new c;
                        t.uid = e.uid, t.name = e.name, t.head = e.head, t.updateAt = e.updateAt, t.rank = e.rank, t.profit = e.profit, t.coin = e.coin, t.frequency = e.frequency, o.dataHandler.getUserData().m_rank = t
                    }
                }
                o.MessageCenter.send("update_rank_info")
            } else o.ToastError(t.error)
        }
        RequestSetSecretKey(e) {
            let t = {
                    Secret_key: e
                },
                s = W.pb.SetSecretKeyRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_SetSecretKey_Request, 0)
        }
        ResponseSetSecretKey(e, t, s, a, r) {
            let n = this.decodePB(W.pb.SetSecretKeyResponse, e);
            n && (1 == n.error ? o.roomManager.onSecretResponse(a, r) : o.netWorkManager.OnNeedRelogin(n.error))
        }
        PreRequestSetEcdhKey() {
            this.preRequest = !0;
            let e = v.getInstance().ecdh_getClientPubX(),
                t = v.getInstance().ecdh_getClientPubY();
            v.getInstance().ecdh_setNeedGenKeyState(!0), o.worldNet.RequestSetEcdhKey(0, e, t)
        }
        RequestSetEcdhKey(e, t, s) {
            let a = {
                    secret_type: e,
                    cli_public_key_x: t,
                    cli_public_key_y: s
                },
                r = W.pb.SetSecretKeyExRequest.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_SetSecretKeyEx_Request, 0)
        }
        ResponseSetEcdhSecretKey(e) {
            let t = this.decodePB(W.pb.SetSecretKeyExResponse, e);
            if (t)
                if (1 == t.error) {
                    let e = t.secret_type,
                        s = t.svr_public_key_x,
                        a = t.svr_public_key_y;
                    v.getInstance().ecdh_genClientKey(s, a);
                    let r = "";
                    if (e == o.Enum.ECDH_SECRET_TYPE.UseX) r = v.getInstance().ecdh_getClientSecretX();
                    else if (e == o.Enum.ECDH_SECRET_TYPE.UseY) r = v.getInstance().ecdh_getClientSecretY();
                    else {
                        if (e != o.Enum.ECDH_SECRET_TYPE.UseXY) return void console.log("onEcdhSecretResponse secretType error.");
                        r = v.getInstance().ecdh_getClientSecretXY()
                    }
                    o.dataHandler.getUserData().secretKey = o.md5.md5(r), o.roomManager.tracingJoinRoomAddEventToSpan("onEcdhSecretResponse", ""), this.preRequest ? (o.netWorkManager.OnWorldServerLoginContinue(), this.preRequest = !1) : o.roomManager.onEcdhSecretResponse()
                } else o.SwitchLoadingView.hide(), o.netWorkManager.OnNeedRelogin(t.error)
        }
        RequestReferrals(e) {
            let t = o.dataHandler.getUserData().ReferralsPageNum;
            e && o.dataHandler.getUserData().ReferralsList.length > 0 && (t = o.dataHandler.getUserData().ReferralsList[0].uid);
            let s = {
                    uid: t,
                    get_front: e,
                    page_size: 10
                },
                a = W.pb.ReferralsRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_Referrals_Request, 0)
        }
        _HandleReferralsResponse(e) {
            let t = this.decodePB(W.pb.ReferralsResponse, e);
            if (t) {
                if (t.get_front) {
                    let e = t.list.length;
                    for (let s = 0; s < e; s++) {
                        let a = t.list[e - s - 1];
                        a.head && (a.head = o.dataHandler.getUserData().getImageURL(a.head)), o.dataHandler.getUserData().ReferralsList.splice(0, 0, a)
                    }
                } else if (t.uid != o.dataHandler.getUserData().ReferralsPageNum) {
                    for (let e = 0; e < t.list.length; e++) {
                        let s = t.list[e];
                        s.head && (s.head = o.dataHandler.getUserData().getImageURL(s.head)), o.dataHandler.getUserData().ReferralsList.push(s)
                    }
                    o.dataHandler.getUserData().ReferralsPageNum = t.uid
                }
                o.dataHandler.getUserData().ReferralsTotal = t.total, o.dataHandler.getUserData().maxReferralsMember = t.max_club_member, o.MessageCenter.send("updateReferrals")
            }
        }
        RequestGetInviteSummary() {
            let e = {
                    uid: o.dataHandler.getUserData().u32Uid
                },
                t = W.pb.GetInviteSummaryRequest.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_InviteSummary_Request, 0)
        }
        _HandleInviteSummaryResponse(e) {
            let t = this.decodePB(W.pb.GetInviteSummaryResponse, e);
            t && (o.dataHandler.getUserData().summaryInfo = t, o.MessageCenter.send("updateSummary"))
        }
        RequestGetInviteIncomeRedeem() {
            let e = {
                    uid: o.dataHandler.getUserData().u32Uid
                },
                t = W.pb.RedeemInviteIncomeRequest.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_InviteIncomeRedeem_Request, 0)
        }
        _HandleInviteIncomeRedeemResponse(e) {
            let t = this.decodePB(W.pb.RedeemInviteIncomeResponse, e);
            t && 1 != t.error && o.TT.showMsg(o.config.getStringData("ErrorToast12"), o.Enum.ToastType.ToastTypeError)
        }
        isShowLuckTurntable() {
            return !o.config.isOverSeas()
        }
        RequestLuckTurntableResult(e, t = 0) {
            const s = o.roomManager.getGameIdByRoomId(t);
            if (r("RequestLuckTurntableResult :: ", "headerServerid = ", s, "\theaderRoomid = ", t), !this.isShowLuckTurnTableAndValidRoom(s, t)) return;
            let a = {
                    record_id: e
                },
                n = W.pb.LuckTurntableResultRequest.encode(a).finish();
            this.sendWorldMsg(n, W.pb.MSGID.MsgID_Luck_Turntable_Result_Request, t)
        }
        _HandleLuckTurntableResultResponse(e, t, s, a, n) {
            const i = o.roomManager.getGameIdByRoomId(n) || a;
            if (r("_HandleLuckTurntableResultResponse :: ", "headerServerid = ", a, "\theaderRoomid = ", n, "\t_curGameID = ", i), this.isShowLuckTurnTableAndValidRoom(i, n) && s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableResultResponse, e);
                if (t)
                    if (1 == t.error) {
                        const e = o.GameDataManager.getDataInstanceByGameAndRoomId(i, n);
                        o.MessageCenter.send("LuckTurntableResult", {
                            error: t.error,
                            gameData: e
                        })
                    } else o.ToastError(t.error)
            }
        }
        _HandleLuckTurntableDrawNotice(e, t, s, a, n) {
            const i = o.roomManager.getGameIdByRoomId(n) || a;
            if (r("_HandleLuckTurntableDrawNotice :: ", "headerServerid = ", a, "\theaderRoomid = ", n, "\t_curGameID = ", i), this.isShowLuckTurnTableAndValidRoom(i, n) && s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableDrawNotice, e);
                if (t) {
                    if (o.dataHandler.getUserData().luckTurntables = [], Math.floor((new Date).getTime() / 1e3) > o.dataHandler.getUserData().luckTurntablesEndTime) return void o.MessageCenter.send("updataLuckTurntablesButton");
                    for (let e = 0; e < t.draw_list.length; e++) o.dataHandler.getUserData().luckTurntables.push(t.draw_list[e]);
                    o.dataHandler.getUserData().luckTurntables.length > 0 ? o.MessageCenter.send("drawRedPackage") : o.MessageCenter.send("updataLuckTurntablesButton")
                }
            }
        }
        _HandleLuckTurntableReadyNotice(e, t, s, a, r) {
            if (!this.isShowLuckTurntable()) return !1;
            if (s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableReadyNotice, e);
                if (t) {
                    let e = Math.floor((new Date).getTime() / 1e3) + t.left_interval_time;
                    o.dataHandler.getUserData().luckTurntablesEndTime = e, o.dataHandler.getUserData().luckTurntablesStartTime = 0, o.dataHandler.getUserData().luck_redbags = [], o.MessageCenter.send("showCurrentTime"), o.MessageCenter.send("NoticeMRedBag")
                }
            }
        }
        _HandleLuckTurntableOverNotice(e, t, s, a, r) {
            if (!this.isShowLuckTurntable()) return !1;
            if (s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableOverNotice, e);
                t && (o.dataHandler.getUserData().luckTurntablesEndTime = 0, o.dataHandler.getUserData().luckTurntablesStartTime = 0, o.dataHandler.getUserData().luck_redbags = [], o.dataHandler.getUserData().luckTurntables = [], o.MessageCenter.send("luckTurntablesOver"), 1 != t.error && o.ToastError(t.error))
            }
        }
        _HandleLuckTurntableStartTimeNotice(e, t, s, a, r) {
            if (!this.isShowLuckTurntable()) return !1;
            if (s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                const t = U.getDataInstanceByGameAndRoomId(a, r);
                let s = this.decodePB(W.pb.LuckTurntableStartTimeNotice, e);
                s && (o.dataHandler.getUserData().isShowLuckTurntables = !0, o.dataHandler.getUserData().luckTurntablesInfo = s, o.MessageCenter.send("showLuckButton", {
                    gameData: t
                }))
            }
        }
        _HandleLuckTurntableEndTimeNotice(e, t, s, a, r) {
            if (!this.isShowLuckTurntable()) return !1;
            if (s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                const t = U.getDataInstanceByGameAndRoomId(a, r);
                let s = this.decodePB(W.pb.LuckTurntableEndTimeNotice, e);
                s && (o.dataHandler.getUserData().isShowLuckTurntables = !0, o.MessageCenter.send("showLuckButton", {
                    gameData: t
                }), 1 != s.error && o.ToastError(s.error))
            }
        }
        _HandleLuckTurntableCountdownNotice(e, t, s, a, r) {
            if (!this.isShowLuckTurntable()) return !1;
            if (s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableCountdownNotice, e);
                if (t) {
                    let e = Math.floor((new Date).getTime() / 1e3) + t.left_interval_time;
                    o.dataHandler.getUserData().luckTurntablesStartTime = e, o.MessageCenter.send("showReadyTime")
                }
            }
        }
        _HandleLuckTurntableResultNotice(e, t, s, a, n) {
            const i = o.roomManager.getGameIdByRoomId(n) || a;
            if (r("_HandleLuckTurntableResultNotice :: ", "headerServerid = ", a, "\theaderRoomid = ", n, "\t_curGameID = ", i), this.isShowLuckTurnTableAndValidRoom(i, n) && s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                const t = U.getDataInstanceByGameAndRoomId(a, n);
                let s = this.decodePB(W.pb.LuckTurntableResultNotice, e);
                s && s.uid != o.dataHandler.getUserData().u32Uid && o.MessageCenter.send("turntableResultNotice", {
                    msg: s,
                    gameData: t
                })
            }
        }
        RequestLuckTurntableSnaplistResult(e, t, s = 0) {
            let a = {
                    lamp_cnt: e,
                    record_cnt: t
                },
                r = W.pb.LuckTurntableSnaplistRequest.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_Luck_Turntable_Snaplist_Request, s)
        }
        _HandleLuckTurntableSnaplistResponse(e, t, s, a, n) {
            const i = o.roomManager.getGameIdByRoomId(n) || a;
            if (r("_HandleLuckTurntableSnaplistResponse :: ", "headerServerid = ", a, "\theaderRoomid = ", n, "\t_curGameID = ", i), !this.isShowLuckTurnTableAndValidRoom(i, n)) return;
            let d = this.decodePB(W.pb.LuckTurntableSnaplistResponse, e);
            d && (1 == d.error || o.ToastError(d.error))
        }
        _HandleLuckTurntableSnaplistNotice(e, t, s, a, n) {
            const i = o.roomManager.getGameIdByRoomId(n) || a;
            if (r("_HandleLuckTurntableSnaplistNotice :: ", "headerServerid = ", a, "\theaderRoomid = ", n, "\t_curGameID = ", i), this.isShowLuckTurnTableAndValidRoom(i, n) && s == o.Enum.SeverType.SeverType_World && a == o.Enum.GameId.World) {
                let t = this.decodePB(W.pb.LuckTurntableSnaplistNotice, e);
                if (t) {
                    o.dataHandler.getUserData().lamp_list = [], o.dataHandler.getUserData().record_list = [];
                    for (let e = 0; e < t.lamp_list.length; e++) o.dataHandler.getUserData().lamp_list.push(t.lamp_list[e]);
                    for (let e = 0; e < t.record_list.length; e++) o.dataHandler.getUserData().record_list.push(t.record_list[e]);
                    o.MessageCenter.send("showLuckTurnSnaplist")
                }
            }
        }
        RequestCreateRedBag(e, t) {
            let s = {
                    rdb_amount_level: e,
                    boom_number: t
                },
                a = W.pb.CreateRedBagRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_Create_RedBag_Request, 0)
        }
        ResponseCreateRedBag(e) {
            let t = this.decodePB(W.pb.CreateRedBagReponse, e);
            t && (1 == t.error ? (o.dataHandler.getUserData().rdb_id = t.rdb_id, o.MessageCenter.send("ResponseCreateRedBag")) : o.ToastError(t.error))
        }
        NoticeRedBag(e) {
            let t = this.decodePB(W.pb.RedBagNotice, e);
            if (t) {
                o.dataHandler.getUserData().RedNew = t.clear, o.dataHandler.getUserData().RedBagOpen = t.open, t.title.length > 0 && (o.dataHandler.getUserData().title = t.title), t.content.length > 0 && (o.dataHandler.getUserData().content = t.content);
                for (let e = 0; e < t.redbags.length; e++) o.dataHandler.getUserData().redbags.push(t.redbags[e]);
                if (t.templets.length > 0) {
                    o.dataHandler.getUserData().red_templets = [];
                    for (let e = 0; e < t.templets.length; e++) o.dataHandler.getUserData().red_templets.push(t.templets[e])
                }
                o.MessageCenter.send("NoticeRedBagOpen"), o.MessageCenter.send("NoticeRedBag")
            }
        }
        RequestRedBagInfo() {
            this.sendWorldMsg(null, W.pb.MSGID.MsgID_RedBag_Info_Request, 0)
        }
        ResponseRedBagInfo(e) {
            let t = this.decodePB(W.pb.RedBagInfoResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("ResponseRedBagInfo") : o.ToastError(t.error))
        }
        RequestRedBagSetAmount(e) {
            let t = {
                    amount: e
                },
                s = W.pb.RedBagSetAmountRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_RedBag_Set_Amount_Request, 0)
        }
        ResponseRedBagSetAmount(e) {
            let t = this.decodePB(W.pb.RedBagSetAmountResponse, e);
            t && (1 == t.error ? t.amount > 0 && (o.dataHandler.getUserData().redbags = [], o.dataHandler.getUserData().listen_amount = t.amount, o.MessageCenter.send("ResponseRedBagSetAmount")) : o.ToastError(t.error))
        }
        RequestRedBagDraw(e) {
            let t = {
                    rdb_id: e
                },
                s = W.pb.RedBagDrawRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_RedBag_Draw_Request, 0)
        }
        ResponseRedBagDraw(e) {
            let t = this.decodePB(W.pb.RedBagDrawResponse, e);
            t && (1 == t.error || 220 == t.error ? (o.dataHandler.getUserData().redPacketInfo = t, o.MessageCenter.send("RedBagDraw")) : o.ToastError(t.error))
        }
        NoticeRedBagOpen(e) {
            let t = this.decodePB(W.pb.RedBagOpenNotice, e);
            if (t) {
                o.dataHandler.getUserData().red_templets = [], o.dataHandler.getUserData().RedBagOpen = t.open, o.dataHandler.getUserData().title = t.title, o.dataHandler.getUserData().content = t.content;
                for (let e = 0; e < t.templets.length; e++) o.dataHandler.getUserData().red_templets.push(t.templets[e]);
                o.MessageCenter.send("NoticeRedBagOpen")
            }
        }
        RequestRedBagHistory(e) {
            let t = {
                    rdb_id: e
                },
                s = W.pb.RedBagHistoryRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_RedBag_History_Request, 0)
        }
        ResponseRedBagHistory(e) {
            let t = this.decodePB(W.pb.RedBagHistoryResponse, e);
            t && (o.dataHandler.getUserData().RedBagHistory = t, o.MessageCenter.send("ResponseRedBagHistory"))
        }
        NotifyRedBagBoom(e) {
            let t = this.decodePB(W.pb.NotifyRedBagBoom2Creater, e);
            t && (o.dataHandler.getUserData().boom2Creater = t, o.MessageCenter.send("NotifyRedBagBoom"))
        }
        RequestRedBagStatus(e) {
            let t = {
                    rdb_id: e
                },
                s = W.pb.RedBagStatusRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_RedBag_Status_Request, 0)
        }
        ResponseRedBagStatus(e) {
            let t = this.decodePB(W.pb.RedBagStatusResponse, e);
            t && (o.dataHandler.getUserData().redPacketState = t, o.dataHandler.getUserData().updateRedPacketStatus(t.rdb_id, t.status), o.dataHandler.getUserData().updateRedPacketIsdrawed(t.rdb_id, t.is_drawed), o.MessageCenter.send("ResponseRedBagHistory"))
        }
        NoticeDrawed2Creator(e) {
            let t = this.decodePB(W.pb.DrawedRedBag2CreatorNotice, e);
            t && (o.dataHandler.getUserData().redToCreateData = t, o.MessageCenter.send("NoticeDrawed2Creator"))
        }
        RequestLastInfo() {
            let e = W.pb.LastRedbagInfoRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_RedBag_LastInfo_Request, 0)
        }
        ResponseLastInfo(e) {
            let t = this.decodePB(W.pb.LastRedbagInfoResponse, e);
            t && (o.dataHandler.getUserData().lastInfo = t, o.MessageCenter.send("ResponseLastInfo"))
        }
        RequestAutoDraw(e) {
            let t = {
                    auto_count: e
                },
                s = W.pb.AutoRedBagDrawRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_RedBag_AutoDraw_Request, 0)
        }
        ResponseAutoDraw(e) {
            let t = this.decodePB(W.pb.AutoRedBagDrawResponse, e);
            if (t) {
                if (218 == t.error) return void o.ToastError(t.error);
                o.dataHandler.getUserData().autoInfo = t;
                for (let e = 0; e < t.historys.length; e++) o.dataHandler.getUserData().updateRedPacketIsdrawed(t.historys[e].rdb_id, !0);
                o.MessageCenter.send("ResponseAutoDraw")
            }
        }
        RequestRedPacketJP() {
            let e = W.pb.RedBagJackpotRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_RedBag_JackpotInfo_Request, 0)
        }
        ResponseRedPacketJP(e) {
            let t = this.decodePB(W.pb.RedBagJackpotInfoResponse, e);
            if (t) {
                if (o.dataHandler.getUserData().redPacketJp = t, t.jackpot_amount.length > 0) {
                    o.dataHandler.getUserData().jpAmounts = [];
                    for (let e = 0; e < t.jackpot_amount.length; e++) o.dataHandler.getUserData().jpAmounts.push(t.jackpot_amount[e])
                }
                o.MessageCenter.send("ResponseAutoDraw")
            }
        }
        RequestRedPacketTj() {
            let e = W.pb.RedbagStatisticsInfoRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_RedBag_StatisticsInfo_Request, 0)
        }
        ResponseRedPacketTj(e) {
            let t = this.decodePB(W.pb.RedbagStatisticsInfoResponse, e);
            t && (o.dataHandler.getUserData().redPacketTj = null, o.dataHandler.getUserData().redPacketTj = t, o.MessageCenter.send("ResponseRedPacketTj"))
        }
        RedPacketJpNotice(e) {
            let t = this.decodePB(W.pb.RedbagJackpotUpdateNotice, e);
            t && (o.dataHandler.getUserData().updateRedPacketJackPot(t.amount_level, t.jp_amount), o.MessageCenter.send("ResponseRedPacketJP"))
        }
        HandleNoticeGlobalMessage(e) {
            let t = this.decodePB(W.pb.NoticeGlobalMessage, e);
            this.onHandleNoticeGlobalMessage(t)
        }
        onHandleNoticeGlobalMessage(e) {
            let t = e.repeat_count,
                s = o.StringTools.getServerStrByLanguage(e.msg);
            if (e.msg_type == W.pb.MsgType.mtt_game_start) {
                if (o.roomManager.mtt_id = e.mtt_id, o.roomManager.mtt_name = e.mttGameName, o.roomManager.mtt_time = e.mttRemainTime, s = o.roomManager.mtt_time >= 60 ? o.StringTools.formatC(o.config.getStringData("MTT_frame_time_info_2"), o.roomManager.mtt_name, Math.round(o.roomManager.mtt_time / 60)) : o.StringTools.formatC(o.config.getStringData("MTT_frame_time_info"), o.roomManager.mtt_name, o.roomManager.mtt_time), o.roomManager.mtt_time > 10) return void(o.config.getCurrentScene() == o.Enum.SCENE.POKERMASTER_SCENE ? o.MessageCenter.send("NoticeMTT_MatchBegin", s) : o.popUp.showMsg({
                    txt: s,
                    sureCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0)
                    }
                }));
                let t = o.config.getCurrentScene();
                return void(t == o.Enum.SCENE.POKERMASTER_SCENE ? o.MessageCenter.send("NoticeMTT_MatchBegin", s) : t == o.Enum.SCENE.HALL_SCENE ? (o.popUp.showMsg({
                    txt: s,
                    sureLabel: o.config.getStringData("MTT_frame_enter"),
                    sureCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT(), o.roomManager.isEnterMTT = !0, o.MessageCenter.send("hallEnterMTT")
                    },
                    cancelLabel: o.config.getStringData("MTT_frame_know"),
                    cancelCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT()
                    }
                }), o.roomManager.startScheduleForMTT()) : t == o.Enum.SCENE.COWBOY_SCENE || t == o.Enum.SCENE.VIDEOCOWBOY_SCENE || t == o.Enum.SCENE.HUMANBOY_SCENE || t == o.Enum.SCENE.JACKFRUIT_SCENE ? (o.popUp.showMsg({
                    txt: s,
                    sureLabel: o.config.getStringData("MTT_frame_enter"),
                    sureCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT(), o.roomManager.isEnterMTT = !0;
                        let e = o.Enum.GameId.CowBoy;
                        t == o.Enum.SCENE.VIDEOCOWBOY_SCENE ? e = o.Enum.GameId.VideoCowboy : t == o.Enum.SCENE.HUMANBOY_SCENE ? e = o.Enum.GameId.HumanBoy : t == o.Enum.SCENE.JACKFRUIT_SCENE && (e = o.Enum.GameId.Jackfruit), o.roomManager.RequestLeaveRoom(e, o.roomManager.getMiniGameRoomIdTemplate(e))
                    },
                    cancelLabel: o.config.getStringData("MTT_frame_know"),
                    cancelCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT()
                    }
                }), o.roomManager.startScheduleForMTT()) : t == o.Enum.SCENE.GAME_SCENE && (o.popUp.showMsg({
                    txt: s,
                    sureLabel: o.config.getStringData("MTT_frame_enter"),
                    sureCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT(), o.roomManager.isEnterMTT = !0, o.MessageCenter.send("Exit_click")
                    },
                    cancelLabel: o.config.getStringData("MTT_frame_know"),
                    cancelCallback: () => {
                        o.MessageCenter.send("HideWebview_ShowWindows", !0), o.roomManager.closeScheduleForMTT()
                    }
                }), o.roomManager.startScheduleForMTT()))
            }
            let a = new p;
            a.str = s;
            let r = e.source_type.length;
            if (0 == r) a.msgType.push(T.PUSH_WORLD);
            else
                for (let t = 0; t < r; t++) switch (e.source_type[t]) {
                    case o.Enum.GameId.World:
                        a.msgType.push(T.PUSH_LOBBY);
                        break;
                    case o.Enum.GameId.Texas:
                        a.msgType.push(T.PUSH_TEXAS);
                        break;
                    case o.Enum.GameId.StarSeat:
                        a.msgType.push(T.PUSH_STAR_SEAT);
                        break;
                    case o.Enum.GameId.Plo:
                    case o.Enum.GameId.Plo5:
                        a.msgType.push(T.PUSH_PLO);
                        break;
                    case o.Enum.GameId.VideoCowboy:
                        a.msgType.push(T.PUSH_VIDEOCOWBOY);
                        break;
                    case o.Enum.GameId.CowBoy:
                        a.msgType.push(T.PUSH_COWBOY);
                        break;
                    case o.Enum.GameId.HumanBoy:
                        a.msgType.push(T.PUSH_HUMANBOY);
                        break;
                    case o.Enum.GameId.PokerMaster:
                        a.msgType.push(T.PUSH_POKERMASTER);
                        break;
                    case o.Enum.GameId.Allin:
                        a.msgType.push(T.PUSH_ALLIN);
                        break;
                    case o.Enum.GameId.Bet:
                        a.msgType.push(T.PUSH_BET);
                        break;
                    case o.Enum.GameId.Jackfruit:
                        a.msgType.push(T.PUSH_JACKFRUIT);
                        break;
                    default:
                        o.roomManager.checkGameIsZoom(e.source_type[t]) && a.msgType.push(T.PUSH_ZOOM_TEXAS)
                }
            for (let e = 0; e < t; e++) u.getInstance().addPushNotice(a)
        }
        RequestGetStrongboxInfo() {
            let e = W.pb.GetStrongboxInfoRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_GetStrongboxInfo_Request, 0)
        }
        ResponseStrongboxInfo(e) {
            let t = this.decodePB(W.pb.GetStrongboxInfoResponse, e);
            t && 1 == t.error && (o.dataHandler.getUserData().u32Chips = t.carry_gold, o.dataHandler.getUserData().u32Deposit_gold = t.deposit_gold, o.dataHandler.getUserData().usdt = t.carry_usdt, o.dataHandler.getUserData().deposit_usdt = t.deposit_usdt, o.MessageCenter.send("update_slider_state"))
        }
        RequestDeposit(e) {
            let t = {
                    amount: o.StringTools.serverGoldByClient(e)
                },
                s = W.pb.DepositInStrongboxRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_DepositInStrongbox_Request, 0)
        }
        ResponseDeposit(e) {
            let t = this.decodePB(W.pb.DepositInStrongboxResponse, e);
            if (t)
                if (1 == t.error) {
                    let e = 0 == t.deposit_type;
                    e ? (o.dataHandler.getUserData().u32Chips = t.carry_gold, o.dataHandler.getUserData().u32Deposit_gold = t.deposit_gold) : (o.dataHandler.getUserData().usdt = t.carry_gold, o.dataHandler.getUserData().deposit_usdt = t.deposit_gold);
                    let s = o.StringTools.clientGoldByServer(t.operating_gold);
                    o.TT.showMsg(o.StringTools.formatC(o.config.getStringData(e ? "Safe_deposit_succeed" : "Safe_deposit_succeed_usdt"), s), o.Enum.ToastType.ToastTypeSuccess), o.MessageCenter.send("update_deposit_and_gold"), o.MessageCenter.send("update_gold")
                } else o.ToastError(t.error)
        }
        RequestTakeOut(e, t) {
            let s = {
                    amount: o.StringTools.serverGoldByClient(e),
                    password: o.md5.md5(t)
                },
                a = W.pb.TakeoutStrongboxRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_TakeoutStrongbox_Request, 0)
        }
        ResponseTakeOut(e) {
            let t = this.decodePB(W.pb.TakeoutStrongboxResponse, e);
            if (t)
                if (1 == t.error) {
                    let e = 0 == t.deposit_type;
                    e ? (o.dataHandler.getUserData().u32Chips = t.carry_gold, o.dataHandler.getUserData().u32Deposit_gold = t.deposit_gold) : (o.dataHandler.getUserData().usdt = t.carry_gold, o.dataHandler.getUserData().deposit_usdt = t.deposit_gold);
                    let s = o.StringTools.serverGoldToShowNumber(t.operating_gold);
                    o.TT.showMsg(o.StringTools.formatC(o.config.getStringData(e ? "Safe_takeout_succeed" : "Safe_takeout_succeed_usdt"), s), o.Enum.ToastType.ToastTypeSuccess), o.MessageCenter.send("update_takeout_balance"), o.MessageCenter.send("update_gold")
                } else o.ToastError(t.error)
        }
        RequestStrongboxInfo() {
            let e = W.pb.StrongboxDetailRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_StrongboxDetail_Request, 0)
        }
        ResponseDetail(e) {
            let t = this.decodePB(W.pb.StrongboxDetailResponse, e);
            if (t)
                if (1 == t.error) {
                    o.dataHandler.getUserData().SafeDetailList = [];
                    let e = o.StringTools.getArrayLength(t.list);
                    for (let s = 0; s < e; s++) o.dataHandler.getUserData().SafeDetailList.push(t.list[s]);
                    o.MessageCenter.send("SafeDetailList")
                } else o.ToastError(t.error)
        }
        RequestJoinAllianceUserCancel(e, t) {
            let s = {
                    alliance_id: e,
                    club_id: t
                },
                a = W.pb.JoinAllianceUserCancelRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_JoinAlliance_UserCancel_Request, 0)
        }
        ResponseJoinAllianceUserCancel(e) {
            let t = this.decodePB(W.pb.JoinAllianceUserCancelResponse, e);
            t && (1 == t.error ? this.requestAllianceSnapshotList(t.club_id) : o.ToastError(t.error))
        }
        RequestAuthApi() {
            if (!1 === o.config.CAN_USE_WEBGL) return o.MessageCenter.send("FindView_showMttError", o.config.getStringData("MTT_No_webgl")), !1;
            let e = {
                    platform: o.appConfig.getLobbyConfig().mtt.platform,
                    language: o.config.getCurrentLanguage()
                },
                t = W.pb.RequestAuthApi.encode(e).finish();
            return this.sendWorldMsg(t, W.pb.MSGID.MsgID_AuthApi_Request, 0)
        }
        ResponseAuthApi(e) {
            let t = this.decodePB(W.pb.ResponseAuthApi, e);
            console.log("MTTTest ResponseAuthApi", t), t ? (231 == t.error && o.MessageCenter.send("FindView_showMttError", o.config.getStringData("ResponseAuthApi_231")), 1 != t.error && h.instance.onAuthMttError(t.error)) : h.instance.onAuthMttError(h.instance.config.tokenErrorMsg.EMPTY_RESPONSE)
        }
        NoticeAuthApi(e) {
            let t = this.decodePB(W.pb.NoticeAuthApi, e);
            if (a("MTTTest NoticeAuthApi", t), t) {
                let e = t.url;
                o.dataHandler.getUserData().mtt_url = e;
                let s = e.indexOf("token="),
                    a = e.substring(s),
                    r = a.indexOf("&"),
                    n = a.substr(6, r - 6);
                console.log("######################### token ====" + n), o.dataHandler.getUserData().mtt_token = n, console.log("match url = " + e), h.instance.onAuthMttSucc(t)
            } else h.instance.onAuthMttError(h.instance.config.tokenErrorMsg.EMPTY_RESPONSE)
        }
        NoticeMTTStatus(e) {
            let t = this.decodePB(W.pb.NoticeGameMaintainStatus, e);
            if (t && t.game_id == o.Enum.GameId.Mtt) {
                let e = o.config.HAVE_MTT;
                2 == t.status ? o.config.HAVE_MTT = !1 : 1 == t.status && o.config.setMTT(), e != o.config.HAVE_MTT && o.MessageCenter.send("update_mtt_state")
            }
        }
        isNeedEnableMiniGameRequest() {
            return o.appConfig.getLobbyConfig().casino.showPrimary || o.appConfig.getLobbyConfig().banner.showCowboyBanner || o.appConfig.getLobbyConfig().banner.showPokerMasterBanner || o.appConfig.getLobbyConfig().banner.showPageViewBanners
        }
        traceMiniGameListRequest() {
            if (!C.IsActive()) return;
            C.getInstance().startSpan(y.CowBoy), C.getInstance().addEventToSpan(y.CowBoy, "UserFunnel", {
                funnel: "request"
            });
            let e = new G;
            e.Type = "RequestMiniGameList", C.getInstance().endSpan(y.CowBoy, "EndRequestRequestMiniGameList", e)
        }
        traceMiniGameListResponse(e) {
            if (!C.IsActive()) return;
            C.getInstance().startSpan(y.CowBoy), C.getInstance().addEventToSpan(y.CowBoy, "UserFunnel", {
                funnel: "response"
            });
            let t = new G;
            t.Type = "ResponseMiniGameList", t.data = e, C.getInstance().endSpan(y.CowBoy, "EndResponseRequestMiniGameList", t)
        }
        MiniGamesListRequest() {
            if (!this.isNeedEnableMiniGameRequest()) return;
            let e = W.pb.MiniGamesListRequest.encode({}).finish();
            o.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool ? this.sendMsg(e, W.pb.MSGID.MsgID_MiniGames_List_Request, 0, o.Enum.SeverType.SeverType_World, o.Enum.GameId.World) : this.sendWorldMsg(e, W.pb.MSGID.MsgID_MiniGames_List_Request, 0), this.traceMiniGameListRequest()
        }
        MiniGamesListResponse(e) {
            let t = this.decodePB(W.pb.MiniGamesListResponse, e);
            this.traceMiniGameListResponse(JSON.stringify(t)), console.log("MiniGamesListResponse", t), t && 1 == t.error && (o.dataHandler.updateMiniGameList(t.games), o.MessageCenter.send(o.Enum.MessageCenterAction.OnMiniGamesListResponse, t.games))
        }
        RequestMttListData(e, t, s) {
            if (o.appConfig.getLobbyConfig().mtt.useAPI) return void o.httpHandler.requestMTTMatchListData(t, s);
            let a = {
                    foreign_id: Number(e),
                    offset: t,
                    limit: s
                },
                r = W.pb.RequestMttResult.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_MttResult_Request, 0)
        }
        MttResultResponse(e) {
            this.decodePB(W.pb.ResponseMttResult, e) && console.log("###############################MttResultResponse")
        }
        MttResultNotice(e) {
            let t = this.decodePB(W.pb.NoticeMttResult, e);
            if (t) {
                let e = t.data;
                o.MessageCenter.send("sendMttMatchListData", e), console.log("###############################MttResultNotice data=" + e)
            }
        }
        RequestMttDetail(e, t) {
            if (o.appConfig.getLobbyConfig().mtt.useAPI) return void o.httpHandler.requestMTTMatchDetailData(t);
            let s = {
                    foreign_id: Number(e),
                    mtt_id: t
                },
                a = W.pb.RequestMttDetail.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_MttDetail_Request, 0)
        }
        MttDetailResponse(e) {
            this.decodePB(W.pb.ResponseMttDetail, e)
        }
        MttDetailNoticeResponse(e) {
            let t = this.decodePB(W.pb.NoticeMttDetail, e);
            if (t) {
                let e = t.data;
                o.MessageCenter.send("responseMTTDataDetailSuccess", e)
            }
        }
        RequestMttUserInfoData(e) {
            if (o.appConfig.getLobbyConfig().mtt.useAPI) return void o.httpHandler.requestMTTUserData();
            let t = {
                    foreign_id: Number(e)
                },
                s = W.pb.RequestMttGameSum.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_MttGameSum_Request, 0)
        }
        MttUserDataResponse(e) {
            this.decodePB(W.pb.ResponseMttGameSum, e)
        }
        MttUserDataNoticeResponse(e) {
            let t = this.decodePB(W.pb.NoticeMttGameSum, e);
            if (t) {
                let e = t.data;
                o.MessageCenter.send("ResponseMTTUserInfoData", e)
            }
        }
        ExchangeUserPointsRequest(e) {
            let t = {
                    goods_id: e
                },
                s = W.pb.ExchangeUserPointsRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_Exchange_UserPoints_Request, 0)
        }
        ExchangeUserPointsResponse(e) {
            let t = this.decodePB(W.pb.ExchangeUserPointsResponse, e);
            t && o.MessageCenter.send("EarnView_ExchangeUserPoints", t)
        }
        GoodsListRequest() {
            let e = W.pb.GoodsListRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_Goods_List_Request, 0)
        }
        GoodsListResponse(e) {
            let t = this.decodePB(W.pb.GoodsListResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("EarnView_GoodsListResponse", t.goods_list) : o.ToastError(t.error))
        }
        BankDetailsQueryRequest(e) {
            let t = W.pb.BankDetailsQueryRequest.encode(e).finish();
            this.sendWorldMsg(t, W.pb.MSGID.MsgID_Bank_Details_Query_Request, 0)
        }
        BankDetailsQueryResponse(e) {
            let t = this.decodePB(W.pb.BankDetailsQueryResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("InquireView_QueryResponse", t) : o.ToastError(t.error))
        }
        StarDetailInfoRequest(e) {
            let t = {
                    starIds: e
                },
                s = W.pb.StarInfoRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_StarInfo_Request, 0)
        }
        StarInfoResponse(e) {
            let t = this.decodePB(W.pb.StarInfoResponse, e);
            t && o.MessageCenter.send("onStarDetailInfoResponse", t)
        }
        CheckStarRoomRequest(e) {
            let t = {
                roomId: e
            };
            console.log("CheckStarRoomRequest:send");
            let s = W.pb.StarAllowRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_StarAllow_Request, 0)
        }
        CheckStarRoomResponse(e) {
            let t = this.decodePB(W.pb.StarAllowResponse, e);
            t && (console.log("CheckStarRoomRequest:receve"), o.MessageCenter.send("onCheckStarRoomResponse", t))
        }
        GetScalerQuoteRequest(e) {
            let t = {
                    op_type: e
                },
                s = W.pb.GetScalerQuoteRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_Get_Scaler_Quote_Request, 0)
        }
        GetScalerQuoteResponse(e) {
            let t = this.decodePB(W.pb.GetScalerQuoteResponse, e);
            t && 1 == t.error && o.MessageCenter.send("onGetScalerQuoteResponse", t)
        }
        ExchangeCurrencyRequest(e, t, s = !1) {
            let a = {
                    op_type: e,
                    from_amt: t,
                    is_point_deduction: s
                },
                r = W.pb.ExchangeCurrencyRequest.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgID_Exchange_Currency_Request, 0)
        }
        ExchangeCurrencyResponse(e) {
            let t = this.decodePB(W.pb.ExchangeCurrencyResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("onExchangeCurrencyResponse", t) : 257 == t.error ? o.MessageCenter.send("onExchangeTimeLimitError", t) : o.ToastError(t.error))
        }
        ExchangeGetUsdtConfigRequest() {
            let e = W.pb.GetUsdtExchangeConfigRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_GetUsdtExchange_Config_Request, 0)
        }
        ExchangeGetUsdtConfigResponse(e) {
            let t = this.decodePB(W.pb.GetUsdtExchangeConfigResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("onExchangeGetConfigResponse", t) : o.ToastError(t.error))
        }
        ExchangeGetUsdtConfigNotice(e) {
            o.MessageCenter.send("onExchangeGetConfigNotice")
        }
        GetUserMarksRequest(e, t) {
            let s = {
                    targetId: e
                },
                a = W.pb.GetUserMarksRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_GetUserMarks_Request, 0, !1, t)
        }
        GetUserMarks(e) {
            let t = this.decodePB(W.pb.GetUserMarksResponse, e);
            t && (1 == t.error ? o.MessageCenter.send("get_usermarks", t) : o.ToastError(t.error), t.edit_state && (o.dataHandler.getUserData().mark_edit_state = t.edit_state))
        }
        UpdateUserMarksRequest(e, t = 0) {
            let s = {
                    marks: e,
                    op: t
                },
                a = W.pb.UpdateUserMarksRequest.encode(s).finish();
            this.sendWorldMsg(a, W.pb.MSGID.MsgID_UpdateUserMarks_Request, 0)
        }
        UpdateUserMarks(e) {
            let t = this.decodePB(W.pb.UpdateUserMarksResponse, e);
            t ? (1 == t.error && 1 != t.op && o.MessageCenter.send("modify_usermarks", t), t.edit_state && (o.dataHandler.getUserData().mark_edit_state = t.edit_state)) : o.ToastError(t.error)
        }
        StarWillBeginNotice(e) {
            let t = this.decodePB(W.pb.StarWillBeginNotice, e);
            if (t) {
                let e = new p;
                e.str = t.notifyText, e.msgType.push(T.PUSH_WORLD), u.getInstance().addPushNotice(e)
            }
        }
        onRGLimitReached(e) {
            let t = this.decodePB(W.pb.RGLimitCheckResult, e);
            t && (t.Code == W.pb.RGLimitCheckCode.LimitCheckCodeError ? o.popUp.showMsgI18n({
                txt: "ErrorRGVS",
                msgType: o.Enum.ToastType.ToastTypeError
            }) : t.Code == W.pb.RGLimitCheckCode.LimitCheckCodeOk && o.popUp.showMsg({
                txt: o.StringTools.formatC(o.config.getStringData("RGLimitReachedJoinTableMsg"), W.pb.RGLimitPeriodType[t.PeriodType], W.pb.RGLimitType[t.LimitType], o.numFix.divide(t.Limit, 100)),
                msgType: o.Enum.ToastType.ToastTypeWarning
            }))
        }
        onAccountLocked(e) {
            o.netWorkManager.Logout(!1, o.Enum.SessionTerminationReason.USER_SESSION_TERMINATION_REASON_LOCKED, "USER_SESSION_TERMINATION_REASON_LOCKED")
        }
        onUserKicked(e) {
            o.netWorkManager.Logout(!1, o.Enum.SessionTerminationReason.USER_SESSION_TERMINATION_REASON_KICKED, "USER_SESSION_TERMINATION_REASON_KICKED")
        }
        onSessionTerminated(e) {
            let t = this.decodePB(W.pb.UserSessionTerminated, e);
            t && o.netWorkManager.Logout(!1, t.reason, o.Enum.SessionTerminationReason[t.reason])
        }
        JoinRoomAccessCheck_Request(e, t, s) {
            if (!B.getInstance().isAbleToJoinRoom()) return;
            this.joinRoomAccessCheckCustomeSuccessCallback = s;
            let a = {
                    playerID: o.dataHandler.getUserData().getUserId(),
                    gameID: t,
                    roomID: e
                },
                r = W.pb.RequestJoinRoomAccessCheck.encode(a).finish();
            this.sendWorldMsg(r, W.pb.MSGID.MsgId_JoinRoomAccessCheck_Request, 0)
        }
        onJoinRoomAccessCheck_Resonse(e) {
            let t = this.decodePB(W.pb.ResponseJoinRoomAccessCheck, e);
            if (t)
                if (t.error == W.pb.Error.OK) this.joinRoomAccessCheckCustomeSuccessCallback && this.joinRoomAccessCheckCustomeSuccessCallback();
                else if (o.SwitchLoadingView.hide(), t.error == W.pb.Error.ZERO) o.popUp.showMsg({
                txt: o.config.getStringData("ErrorUnknown") + " (Join Room Error " + t.error + ")",
                msgType: o.Enum.ToastType.ToastTypeError
            });
            else {
                let e = "";
                e = t.error == W.pb.Error.Block_Lobby_Locked && o.appConfig.isKR ? "AsiaServerError_" + o.Enum.WORLD_ERROR[t.error] : "WorldServerError_" + o.Enum.WORLD_ERROR[t.error], o.popUp.showMsgI18n({
                    txt: e,
                    msgType: o.Enum.ToastType.ToastTypeWarning
                })
            }
            o.MessageCenter.send("join_room_access_check_response", t)
        }
        onPaymentNotice_Response(e) {
            let t = this.decodePB(W.pb.PaymentNotification, e),
                a = t.isFirstDeposit ?? !1;
            if (t && t.amount > 0) {
                if (s.isNative)
                    if (s.os === s.OS.IOS || s.os === s.OS.ANDROID) {
                        const e = {
                                af_revenue: t.amount,
                                af_isFirstDeposit: a
                            },
                            s = JSON.stringify(e);
                        k.getInstance().AppsflyerSDKTracking("af_purchase", s)
                    } else if (s.os === s.OS.OSX || s.os === s.OS.WINDOWS) {
                    const e = {
                            Branch_revenue: t.amount,
                            Branch_isFirstDeposit: a
                        },
                        s = JSON.stringify(e);
                    A.getInstance().BranchSDKTrackingCustomEventsWithEventName("Branch" + f.CashierDepositSuccessful, s, "")
                }
                o.appConfig.isWebApp && N.sendMessage({
                    sourceApp: H.Poker,
                    targetApp: H.WebApp,
                    eventType: P.PaymentNoticeResponse,
                    payload: {
                        af_revenue: t.amount || 0,
                        af_isFirstDeposit: a
                    }
                })
            }
        }
        onFreshchatNotification(e) {
            let t = this.decodePB(W.pb.NewFreshchatNotification, e);
            C.Trace(y.FreshChat, "OpenFreshChat", {
                response: t
            }), t && L.getInstance().initFreshchat(t.freshchat_tags)
        }
        GetUserHelpWarpListRequest() {
            const e = W.pb.GetUserHelpWarpListRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_GetUserHelpWarpList_Request, 0)
        }
        GetUserHelpWarpListResponse(e) {
            const t = this.decodePB(W.pb.GetUserHelpWarpListResponse, e);
            if (t)
                if (1 == t.error) {
                    o.dataHandler.getUserData().left_help_count = t.left_help_count, o.dataHandler.getUserData().help_wrap_list = [];
                    for (let e = 0; e < t.help_wrap_data.length; e++) o.dataHandler.getUserData().help_wrap_list.push(W.pb.HelpWrapInfo.create(t.help_wrap_data[e]));
                    o.MessageCenter.send("update_help_Warp_list"), o.MessageCenter.send("update_left_help_count"), o.MessageCenter.send("updata_my_redpackets_pos")
                } else o.ToastError(t.error)
        }
        AddHelperRequest(e) {
            const t = {
                    code: e
                },
                s = W.pb.AddHelperRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_AddHelper_Request, 0)
        }
        AddHelperResponse(e) {
            const t = this.decodePB(W.pb.AddHelperResponse, e);
            if (t)
                if (o.dataHandler.getUserData().left_help_count = t.left_help_count, o.MessageCenter.send("update_left_help_count"), 1 == t.error) o.dataHandler.getUserData().total_history_amount = t.total_history_amount, o.MessageCenter.send("updata_total_history_amount"), o.MessageCenter.send("showHelpFriendView", t);
                else if (292 == t.error) {
                const e = o.StringTools.formatC(o.config.getStringData("ServerErrorCode292"), t.check_register_days);
                o.TT.showMsg(e, o.Enum.ToastType.ToastTypeError)
            } else o.ToastError(t.error)
        }
        GetTotalHistoryAmountRequest() {
            const e = W.pb.GetTotalHistoryAmountRequest.encode({}).finish();
            this.sendWorldMsg(e, W.pb.MSGID.MsgID_GetTotalHistoryAmount_Request, 0)
        }
        GetTotalHistoryAmountResponse(e) {
            const t = this.decodePB(W.pb.GetTotalHistoryAmountResponse, e);
            t && (1 == t.error ? (o.dataHandler.getUserData().total_history_amount = t.total_history_amount, o.MessageCenter.send("updata_total_history_amount")) : o.ToastError(t.error))
        }
        UserReceiveHelpWarpRequest(e) {
            const t = {
                    code: e
                },
                s = W.pb.UserReceiveHelpWarpRequest.encode(t).finish();
            this.sendWorldMsg(s, W.pb.MSGID.MsgID_UserReceiveHelpWarp_Request, 0)
        }
        UserReceiveHelpWarpResponse(e) {
            const t = this.decodePB(W.pb.UserReceiveHelpWarpResponse, e);
            t && (1 == t.error ? (o.dataHandler.getUserData().deleteHelpWarpByCode(t.code), o.dataHandler.getUserData().total_history_amount = t.total_history_amount, o.MessageCenter.send("updata_total_history_amount"), o.MessageCenter.send("showOpenRedPackets", t.user_prizes_data), o.MessageCenter.send("updata_my_redpackets_pos")) : o.ToastError(t.error))
        }
        AddHelpWrapNotice(e) {
            this.GetUserHelpWarpListRequest()
        }
        UserHelpWarpChangeNotice(e) {
            const t = this.decodePB(W.pb.UserHelpWarpChangeNotice, e);
            t && o.dataHandler.getUserData().updateHelpWarpData(t.help_wrap_data)
        }
        LeftHelpCountChangeNotice(e) {
            const t = this.decodePB(W.pb.LeftHelpCountChangeNotice, e);
            t && (o.dataHandler.getUserData().left_help_count = t.LeftHelpCount, o.MessageCenter.send("update_left_help_count"))
        }
    }
    e("WorldNetWork", O), O.instence = void 0, t._RF.pop()
}
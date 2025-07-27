import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./gs_protocol.mjs_cjs=&original=.js";
import * as a from "./cv.js";
import * as i from "./NetWorkProxy.js";
import * as n from "./GameDataManager.js";
import * as d from "./RoomData.js";
import * as r from "./RoomData.js";
import * as c from "./PushNotice.js";
import * as l from "./Enum.js";

function main() {
    t._RF.push({}, "8a5dbEmQK5K9YmF8JOFS8DN", "AofNetWork", void 0);
    class g extends a {
        registerMsg(e, t) {
            this.registerMessage(e, t, s.Enum.GameId.Allin)
        }
        init() {
            this.registerMsg(l.protocol.MSGID.MsgID_Logon_Response, this.responseLoginServer.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_HeartBeat_Response, this.responseHeartBeat.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SitDown_Response, this.ResponseSitDown.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SitDown_Notice, this.NoticeSitDown.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyin_Response, this.ResponseBuyin.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyin_To_Owner_Notice, this.NoticeBuyinToOwner.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyin_To_Applicant_Notice, this.NoticeBuyinToApplication.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyin_Notice, this.NoticeBuyin.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ModifyBuyinLimit_Response, this.ResponseModifyBuyinLimit.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ModifyBuyinLimit_Notice, this.NoticeModifyBuyinLimit.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Room_Situation_Response, this.ResponseRoomSituation.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Room_Situation_Notice, this.NoticeRoomSituation.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_JoinRoom_Response, this.JoinRoomResponse.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_Snapshot_Notice, this.NoticeGameSnapShot.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_GameActionTurn_Response, this.ResponseGameActionTurn.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Standup_Response, this.ResponseStandup.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Standup_Notice, this.NoticeStandup.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_DestroyRoom_Response, this.ResponseDestroyRoom.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_DestroyRoom_Notice, this.NoticeDestroyRoom.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ResetGame_Notice, this.NoticeResetGame.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_ElectDealer_Notice, this.NoticeGameElectDealer.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_Blind_Notice, this.NoticeGameBlind.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_HoleCard_Notice, this.NoticeGameHoleCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PlayerActionTurn_Notice, this.NoticePlayerActionTurn.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_BackPosition_Response, this.ResponsePlayerBackPosition.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_BackPosition_Notice, this.NoticePlayerBackPosition.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PlayerAction_Notice, this.NoticePlayerAction.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_RoundEnd_Notice, this.NoticeGameRoundEnd.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_CommunityCards_Notice, this.NoticeGameCommunityCards.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_Settlement_Notice, this.NoticeGameSettleMent.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ShowCard_Notice, this.NoticePlayerShowCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_Ante_Notice, this.NoticeGameAnte.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_StayPosition_Response, this.ResponseStayPosition.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_StayPosition_Notice, this.NoticePlayerStayPosition.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Waiting_OtherPlayer_Notice, this.NoticeWaitingOtherPlayer.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PauseGame_Response, this.ResponsePauseGame.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PauseGame_Notice, this.NoticePauseGame.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddRoomTimeCount_response, this.Response_AddRoomTimeCount.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddRommExTimeLeft_Notice, this.NoticeAddRoomTimeCount.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_LeaveRoom_Response, this.Response_LeaveRoom.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_StartGame_Response, this.ResponseStartGame.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_StartGame_Notice, this.NoticeStartGame.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_RealStart_Notice, this.NoticeRealStart.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_DefaultFold_Response, this.ResponseDefaultFold.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyout_Response, this.ResponseBuyout.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Buyout_Notice, this.NoticeBuyout.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Action_Response, this.ResponseAction.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_ShowDown_Notice, this.NoticeGameShowDown.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_CheckAllianceRoomPriviledge_Response, this.responseCheckAllianceRoomPriviledge.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ForceStandup_Response, this.HandleForceStandupResponse.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ForceStandup_Notice, this.HandleForceStandupNotice.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ProhibitSitdown_Response, this.HandleProhibitSitdownResponse.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ProhibitSitdown_Notice, this.HandleProhibitSitdownNotice.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PhotoVerify_Response, this.HandlePhotoVerifyResponse.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PhotoVerify_Notice, this.HandlePhotoVerifyNotice.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_NotiPlayerHoleCard_Notice, this.HandleNotiPlayerHoleCardNotice.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_BuyInsurance_Response, this._ResponseBuyInsurance.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Game_Insurance_Notice, this._NoticeGameInsurance.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_BuyInsuranceResult_Notice, this._NoticeBuyInsurance.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InsuranceToomanyLeader_Notice, this._NoticeInsuranceToomanyLeader.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InsuranceHitOuts_Notice, this._NoticeInsuranceHitOuts.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InsuranceMissOuts_Notice, this._NoticeInsuranceMissOuts.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_NoNeedInsurance_Notice, this._NoticeNoNeedInsurace.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddInsuranceTime_Response, this._ResponseAddInsuranceTime.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddInsuranceTime_Notice, this._NoticeAddInsuranceTime.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_NotSupport_Insurance_Notice, this._NoticeNotSupportInsurance.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SendCard_Fun_Response, this.ResponsePlayerSendCardFun.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SendCard_Fun_Notice, this.NoticePlayerSendCardFun.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ForceShowCard_Response, this.ResponseForceShowCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ForceShowCard_Notice, this.NoticeForceShowCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InteractiveExpression_Response, this.HandleInteractiveExpressionResponse.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InteractiveExpression_Notice, this.HandleInteractiveExpressionNotice.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_CheckOutAndLeave_Response, this.ResponseCheckOutAndLeave.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_CheckOutAndLeave_Notice, this.NoticeCheckOutAndLeave.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_InitiativeDestroyRoom_Notice, this.RoomNoticeInitiativeDestroy.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddActionTime_Notice, this.NoticeAddActionTime.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ResponseCheckFirstTimeJoinRoomWithPassword, this.HandResponseJoinRoomWithFirst.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ResponseJoinRoomWithPassword, this.HandResponseJoinRoomWithPassword.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ResponseCheckFirstTimeBuyinWithPassword, this.HandResponseBuyinWithFirst.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_UpdateMoney_Notice, this.HandResponsePlayerStake.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ResponseCheckBuyinPassword, this.HandBuyinResponsePwd.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SendChat_Response, this.ResponseSendChat.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_SendChat_Notice, this.NoticeSendChat.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_MagicEmoji_Response, this.ResponseSendMagicEmoji.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_MagicEmoji_Notice, this.NoticeSendMagicEmoji.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_DynamicConfig_Notice, this.NoticeDynamicConfig.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddRoomTime_Response, this.ResponseAddRoomTime.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_AddRoomTime_Notice, this.NoticeAddRoomTime.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ShowCard_Response, this.ResponsePlayerShowCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_ShowCard_Response, this.NoticePlayerShowCard.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_Snapshot_Response, this.ResponseSnapshot.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_GlobalMessage_Notice, this.HandleNoticeGlobalMessage.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GetGameUUIdsJs_Response, this.ResponseGetGameUUIdsJsMessage.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GetGameUUIdsJs_Notice, this.NoticeGetGameUUIdsJsMessage.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PlayerBuyinsInfo_Response, this.ResponsePlayerBuyinsInfo.bind(this)), this.registerMsg(l.protocol.MSGID.MsgID_PlayerBuyinsInfo_Notice, this.NoticePlayerBuyinsInfo.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GuessHandCard_BeginBet_Notice, this.NoticeGuessHandCardBeginBet.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GuessHandCard_Bet_Response, this.ResponseGuessHandCardBet.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GuessHandCard_SetBetOpt_Response, this.ResponseGuessHandCardSetBetOpt.bind(this)), this.registerMsg(l.protocol.MSGID.MsgId_GuessHandCard_Settle_Notice, this.NoticeGuessHandCardSettle.bind(this))
        }
        sendGameMsg(e, t, o, s = 2, a = 20) {
            return this.sendMsg(e, t, o, s, a)
        }
        NoticeAddActionTime(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeAddActionTime, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("add_action_time", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RoomNoticeInitiativeDestroy(e, t, o, a, i) {
            var n;
            let r = this.decodePB(l.protocol.NoticeInitiativeDestroyRoom, e),
                d = null == (n = s.roomManager.getRoomByIds(a, i)) ? void 0 : n.gameScene;
            r && (this.checkValidGameData(a, i) ? s.TT.showMsg(s.config.getStringData("InitiativeDestroyRoom"), s.Enum.ToastType.ToastTypeInfo, !1, !1, d) : s.ToastError(r.error, !1, a, i))
        }
        NoticeGameShowDown(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameShowDown, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_showdown_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        ResponseAction(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseAction, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        RequestDefaultFold(e, t) {
            let o = {
                    roomid: e,
                    type: t
                },
                s = l.protocol.RequestDefaultFold.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_DefaultFold_Request, e)
        }
        ResponseDefaultFold(e) {
            this.decodePB(l.protocol.ResponseDefaultFold, e)
        }
        NoticeRealStart(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeRealStart, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                e.tRoomData.u32StartTime = n.starttime, e.tRoomData.pkRoomState.isBegin = !0, s.MessageCenter.send("StartGame", e)
            }
        }
        NoticeWaitingOtherPlayer(e, t, o, a, i) {
            this.decodePB(l.protocol.NoticeWaitingOtherPlayer, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                e.tGameData.game_settlement_uuid = "", s.MessageCenter.send("on_waiting_other_player", e)
            }
        }
        RequestShowCard(e, t, o) {
            let s = {
                    roomid: e,
                    cards: t,
                    is_show: o
                },
                a = l.protocol.RequestShowCard.encode(s).finish();
            this.sendGameMsg(a, l.protocol.MSGID.MsgID_ShowCard_Request, e)
        }
        ResponsePlayerShowCard(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseShowCard, e);
            const r = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
            n && r && n.roomid == r.tRoomData.u32RoomId && console.log(n.error)
        }
        NoticePlayerShowCard(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePlayerShow, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("player_show_cards", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameAnte(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameAnte, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_anti_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameSettleMent(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameSettlement, e);
            if (n && (console.log(n), this.checkValidGameData(a, i))) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                let t = !1;
                for (let o = 0; o < e.tRoomData.game_uuids_js.length; o++)
                    if (e.tRoomData.game_uuids_js[o] == n.gameuuid_js) {
                        t = !0;
                        break
                    } t || e.tRoomData.game_uuids_js.push(n.gameuuid_js), e.tGameData.game_settlement_uuid = n.gameuuid_js, s.MessageCenter.send("on_game_settlement_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameCommunityCards(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeCommunityCards, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_communitycard_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameRoundEnd(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameRoundEnd, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_endround_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticePlayerAction(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePlayerAction, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_action_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticePlayerBackPosition(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeBackPosition, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                e.tRoomData.updateTablePlayer(n.player.playerid, n.player), s.MessageCenter.send("on_back_seat", {
                    playerid: n.player.playerid,
                    gameData: e
                })
            }
        }
        ResponsePlayerBackPosition(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseBackPosition, e);
            if (n && 32 == n.error) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_need_buyin", e)
            }
        }
        NoticeStartGame(e, t, o, a, i) {
            this.decodePB(l.protocol.NoticeStartGame, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_startgame_noti", e)
            }
        }
        ResponseStartGame(e) {
            let t = this.decodePB(l.protocol.ResponseStartGame, e);
            t && 1 == t.error && s.MessageCenter.send("on_startgame_succ")
        }
        NoticeResetGame(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeResetGame, e);
            if (console.log(n), this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_resetgame_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameElectDealer(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameElectDealer, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_elect_dealer_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameBlind(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameBlind, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_blind_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticeGameHoleCard(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameHolecard, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_holecard_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        NoticePlayerActionTurn(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePlayerActionTurn, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_action_turn_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestAction(e, t, o) {
            let a = s.dataHandler.getUserData().user_token;
            o = s.StringTools.serverGoldByClient(o);
            const i = s.GameDataManager.getDataInstanceByGameAndRoomId(s.Enum.GameId.Allin, e);
            let n = {
                roomid: e,
                amount: o,
                action: t,
                ActionSeq: i.tGameData.m_u32ActionSeq,
                token: a
            };
            console.log(n);
            let r = l.protocol.RequestAction.encode(n).finish();
            this.sendGameMsg(r, l.protocol.MSGID.MsgID_Action_Request, e), i.tGameData.m_bIsOnSelfAction = !1
        }
        RequestBackPosition(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestBackPosition.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_BackPosition_Request, e)
        }
        RequestStartGame(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestStartGame.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_StartGame_Request, e)
        }
        requestLoginServer() {
            console.log("====> Game websocket was opened.");
            let e = s.dataHandler.getUserData().user_token,
                t = s.config.GET_CLIENT_VERSION(),
                o = s.dataHandler.getUserData().deviceInfo;
            0 == s.StringTools.getArrayLength(o) && (o = s.native.GetDeviceUUID(!0));
            let a = s.config.GET_CLIENT_TYPE(),
                i = {
                    token: e,
                    version: t,
                    position: this.getPositionInfo(),
                    device_info: o,
                    client_type: a
                },
                n = l.protocol.RequestLogon.encode(i).finish();
            console.log(n), this.sendGameMsg(n, l.protocol.MSGID.MsgID_Logon_Request, 0)
        }
        responseLoginServer(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseLogon, e);
            if (n) {
                let e = n.error;
                if (console.log(n), 1 == e) {
                    if (0 != n.roomid && !n.anti_simulator && s.native.IsSimulator()) {
                        var r;
                        let e = n.anti_simulator_ignore_cond,
                            t = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                        return e > 0 ? s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("UIEmulatorErrorText_1"), e), s.Enum.ToastType.ToastTypeWarning, !1, !1, t) : s.TT.showMsg(s.config.getStringData("UIEmulatorErrorText"), s.Enum.ToastType.ToastTypeWarning, !1, !1, t), s.netWorkManager.closeGameConnect(!1, a), void s.SwitchLoadingView.hide()
                    }
                    s.netWorkManager.OnGameServerLogin(e, s.Enum.GameId.Allin, n.roomid ? [n.roomid] : [])
                } else s.netWorkManager.clearLoginGameServerSuccFlag(s.Enum.GameId.Allin), s.SwitchLoadingView.hide(), s.ToastError(e, !1, a, i)
            }
        }
        RequestJoinRoom(e, t = !1) {
            let o = {
                    roomid: e,
                    is_quick_sit: t
                },
                a = l.protocol.RequestJoinRoom.encode(o).finish();
            s.netWorkManager.isLoginGameServerSucc(s.Enum.GameId.Allin) ? this.sendGameMsg(a, l.protocol.MSGID.MsgID_JoinRoom_Request, e) : this.requestLoginServer()
        }
        JoinRoomResponse(e) {
            let t = this.decodePB(l.protocol.ResponseJoinRoom, e);
            t && s.roomManager.onJoinRoomResponse(t, s.Enum.GameId.Allin)
        }
        RequestBuyInsurance(e, t, o, a, i) {
            o = s.StringTools.serverGoldByClient(o);
            let n = s.GameDataManager.getDataInstanceByGameAndRoomId(s.Enum.GameId.Allin, e).tGameData.m_u32InsuranceSeq,
                r = [];
            for (let e = 0; e < s.StringTools.getArrayLength(t); ++e) r.push(t[e]);
            let d = {
                    roomid: e,
                    amount: o,
                    outs_id: r,
                    action_seq: n,
                    is_buy: a,
                    option: i
                },
                c = l.protocol.RequestBuyInsurance.encode(d).finish();
            return this.sendGameMsg(c, l.protocol.MSGID.MsgID_BuyInsurance_Request, e)
        }
        _ResponseBuyInsurance(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseBuyInsurance, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        _NoticeGameInsurance(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGameInsurance, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_need_buy_insurance", {
                    msg: n,
                    gameData: e
                })
            }
        }
        _NoticeBuyInsurance(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeBuyInsuranceResult, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                n.result ? s.MessageCenter.send("player_do_buy_insurance", {
                    msg: n,
                    gameData: e
                }) : s.MessageCenter.send("player_not_buy_insurance", {
                    msg: n,
                    gameData: e
                })
            }
        }
        _NoticeInsuranceToomanyLeader(e, t, o, a, i) {
            if (this.decodePB(l.protocol.NoticeInsuranceToomanyLeader, e) && this.checkValidGameData(a, i)) {
                var n;
                let e = null == (n = s.roomManager.getRoomByIds(a, i)) ? void 0 : n.gameScene;
                s.TT.showMsg(s.config.getStringData("UIGameSceneTips5"), s.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        _NoticeInsuranceHitOuts(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeInsuranceHitOuts, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("player_hit_the_outs", {
                    msg: n,
                    gameData: e
                })
            }
        }
        _NoticeInsuranceMissOuts(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeInsuranceMissOuts, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("player_miss_the_outs", {
                    msg: n,
                    gameData: e
                })
            }
        }
        _NoticeNoNeedInsurace(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeNoNeedInsurance, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("no_need_insurace", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestAddInsuranceTime(e) {
            let t = {
                    roomid: e,
                    action_seq: s.GameDataManager.getDataInstanceByGameAndRoomId(s.Enum.GameId.Allin, e).tGameData.m_u32InsuranceSeq
                },
                o = l.protocol.RequestAddInsuranceTime.encode(t).finish();
            return this.sendGameMsg(o, l.protocol.MSGID.MsgID_AddInsuranceTime_Request, e)
        }
        _ResponseAddInsuranceTime(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseAddInsuranceTime, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        _NoticeAddInsuranceTime(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeAddInsuranceTime, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("add_insurance_time", {
                    msg: n,
                    gameData: e
                })
            }
        }
        _NoticeNotSupportInsurance(e, t, o, a, i) {
            if (this.decodePB(l.protocol.NoticeNotSupportInsurance, e) && this.checkValidGameData(a, i)) {
                var n;
                let e = null == (n = s.roomManager.getRoomByIds(a, i)) ? void 0 : n.gameScene;
                s.TT.showMsg(s.config.getStringData("UIGameSceneTips17"), s.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        NoticeGameSnapShot(e) {
            let t = this.decodePB(l.protocol.NoticeGameSnapshot, e);
            if (t) {
                let e = t.roomid,
                    a = t.gameid;
                const i = s.GameDataManager.getOrCreateDataInstance(a, e);
                if (i) {
                    i.tGameData.reset(), i.tRoomData.reset(), i.tRoomData.u32RoomId = t.roomid, i.tRoomData.u32GameID = t.gameid, i.tRoomData.u32OwnerId = t.room_owner_id, i.tRoomData.u32BuyinLimit = t.self_buyin_limit, i.tRoomData.u32Buyin = t.self_buyin, i.tRoomData.u32CreateTime = t.room_create_time, s.StringTools.deepCopy(t.params, i.tRoomData.pkRoomParam), s.StringTools.deepCopy(t.rstate, i.tRoomData.pkRoomState), s.StringTools.deepCopy(t.tstate, i.tRoomData.pkTableStates), i.tRoomData.u32StartTime = t.room_start_time, i.tRoomData.u32Stake = t.self_stake, i.tRoomData.last_buyin_clubid = t.last_buyin_clubid, i.tRoomData.last_buyin_ownerid = t.last_buyin_ownerid, i.tRoomData.last_buyin_allianceId = t.last_buyin_allianceid, s.StringTools.deepCopy(t.clubInfos, i.tRoomData.clubInfos), i.tRoomData.m_kStraddleList.push(i.tRoomData.pkTableStates.curr_straddle_seatid), i.tRoomData.game_uuids_js = [];
                    let e = t.game_uuids_js.length;
                    for (let o = 0; o < e; o++) i.tRoomData.game_uuids_js.push(t.game_uuids_js[o].game_uuid_js);
                    s.StringTools.deepCopy(t.allFeeItems, i.tRoomData.pkPayMoneyItem), i.tRoomData.kingBee = i.tRoomData.pkPayMoneyItem.emotionFee2.needCoin, i.tRoomData.is_quick_sit = t.is_quick_sit, i.tGameData.i32RoomId = t.roomid, i.tGameData.i32DealerSId = i.tRoomData.pkTableStates.curr_dealer_seatid, i.tGameData.i32SBSid = i.tRoomData.pkTableStates.curr_sb_seatid, i.tGameData.i32BBSid = i.tRoomData.pkTableStates.curr_bb_seatid, i.tRoomData.anyoneAllin = t.anyoneAllin, s.dataHandler.getUserData().m_totalBuyOut = t.total_buyout;
                    for (let e = 0; e < i.tRoomData.pkTableStates.players.length; e++) {
                        let t = i.tRoomData.pkTableStates.players[e];
                        t.headurl = s.dataHandler.getUserData().getImageURL(t.headurl), i.tRoomData.addTablePlayer(t), t.playerid === s.dataHandler.getUserData().u32Uid && (i.tGameData.m_u32RoundBet = t.round_bet)
                    }
                    s.StringTools.deepCopy(t.prohibit_sitdown_list, i.tRoomData.prohibit_sitdown_list), s.StringTools.deepCopy(t.buyin_infos, i.tRoomData.buyinInfos), s.StringTools.deepCopy(t.dynamicConfig, i.tRoomData.pkDynamicConfig), i.tGameData.m_u32AddTimeCount = t.actiontime_count, s.StringTools.deepCopy(t.club_createrids, i.tGameData.club_createrids)
                }
                if (t.autoaddactiontime_count > 0) {
                    var o;
                    let i = null == (o = s.roomManager.getRoomByIds(a, e)) ? void 0 : o.gameScene;
                    s.TT.showMsg(s.config.getStringData("AutoAddTimeTips" + t.autoaddactiontime_count), s.Enum.ToastType.ToastTypeSuccess, !1, !1, i)
                }
                s.MessageCenter.send("on_snapshot_roominfo", i), this.RequestGetGameUUIdsJs(e)
            }
        }
        RequestSitdown(e, t) {
            let o = s.native.GetLocation(),
                a = null == s.dataHandler.getUserData().user_ip ? "127.0.0.1" : s.dataHandler.getUserData().user_ip,
                i = {
                    roomid: e,
                    seatid: t,
                    position: {
                        latitude: o.latitude,
                        longtitude: o.longitude,
                        ip: a.toString()
                    }
                },
                n = l.protocol.RequestSitDown.encode(i).finish();
            this.sendGameMsg(n, l.protocol.MSGID.MsgID_SitDown_Request, e)
        }
        RequestSituation(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestRoomSituation.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_Room_Situation_Request, e)
        }
        ResponseSitDown(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseSitDown, e);
            if (n) {
                console.log(n);
                let e = n.error;
                if (32 == e) {
                    const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    s.MessageCenter.send("on_need_buyin", e)
                } else 97 == e ? s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("ServerErrorCode97"), n.playername.toString()), s.Enum.ToastType.ToastTypeError, !1, !1) : s.ToastError(n.error, !1, a, i)
            }
        }
        NoticeSitDown(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeSitDown, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                let t = n.player;
                e.tRoomData.addTablePlayer(t), s.MessageCenter.send("on_sitdown_succ", {
                    playerid: t.playerid,
                    gameData: e
                })
            }
        }
        requestHeartBeat() {
            let e = {
                    uid: s.dataHandler.getUserData().u32Uid,
                    position: this.getPositionInfo()
                },
                t = l.protocol.RequestHeartBeat.encode(e).finish();
            return this.sendGameMsg(t, l.protocol.MSGID.MsgID_HeartBeat_Request, 0)
        }
        responseHeartBeat(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseHeartBeat, e);
            if (null != n) {
                let e = n.uid;
                console.log("uid::->>" + e), s.netWorkManager.onGameHeartBeat(a)
            }
        }
        getPositionInfo() {
            if (l.protocol.PositionInfo) {
                let e = s.native.GetLocation(),
                    t = s.dataHandler.getUserData().user_ip;
                return {
                    longtitude: e.latitude,
                    latitude: e.longitude,
                    ip: null == t ? "127.0.0.1" : t
                }
            }
        }
        RequestBuyin(e, t, o, a, i) {
            let n = {
                    roomid: e,
                    amount: s.StringTools.serverGoldByClient(t),
                    ownerid: o,
                    clubid: a,
                    allianceid: i
                },
                r = l.protocol.RequestBuyin.encode(n).finish();
            return this.sendGameMsg(r, l.protocol.MSGID.MsgID_Buyin_Request, e)
        }
        RequestBuyout(e, t) {
            let o = {
                    roomid: e,
                    buyout_gold: s.StringTools.serverGoldByClient(t)
                },
                a = l.protocol.RequestBuyout.encode(o).finish();
            return this.sendGameMsg(a, l.protocol.MSGID.MsgID_Buyout_Request, e)
        }
        RequestModifyBuyinLimit(e, t, o, a, i) {
            let n = {
                    buyin_limit: s.StringTools.serverGoldByClient(t),
                    last_buyin_clubid: a,
                    last_buyin_ownerid: o,
                    last_buyin_clubname: i
                },
                r = l.protocol.RequestModifyBuyinLimit.encode(n).finish();
            return this.sendGameMsg(r, l.protocol.MSGID.MsgID_ModifyBuyinLimit_Request, e)
        }
        RequestGameActionTurn(e) {
            let t = s.dataHandler.getUserData().user_token;
            if ("" === t) return;
            let o = {
                    roomid: e,
                    token: t
                },
                a = l.protocol.RequestGameActionTurn.encode(o).finish();
            this.sendGameMsg(a, l.protocol.MSGID.MsgID_GameActionTurn_Request, e)
        }
        ResponseGameActionTurn(e) {
            let t = this.decodePB(l.protocol.ResponseGameActionTurn, e);
            if (t) {
                t.error;
                console.log(t)
            }
        }
        ResponseBuyin(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseBuyin, e);
            if (n) {
                let e = n.error,
                    t = n.playername;
                43 == e ? s.TT.showMsg(s.config.getStringData("ServerErrorCode" + e), s.Enum.ToastType.ToastTypeError, !1, !1) : 97 === e ? s.TT.showMsg(s.StringTools.formatC("%s", s.config.getStringData("ServerErrorCode" + e) + t), s.Enum.ToastType.ToastTypeError, !1, !1) : s.ToastError(e, !1, a, i)
            }
        }
        NoticeBuyin(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeBuyin, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                if (n.playerid == s.dataHandler.getUserData().u32Uid) {
                    e.tRoomData.u32BuyinLimit = n.self_buyin_limit, e.tRoomData.u32Buyin = n.self_buyin, e.tRoomData.buyinAmount = n.buyin_amount, s.worldNet.requestGetUserData(), s.dataHandler.getUserData().m_totalBuyOut = n.self_buyout, s.MessageCenter.send("on_update_self_buyin_stake", e);
                    let t = e.tRoomData.GetTablePlayer(s.dataHandler.getUserData().u32Uid);
                    null != t ? t.in_game && !t.inStay && t.last_action != s.Enum.ActionType.Enum_Action_Fold || (e.tRoomData.u32Stake = n.self_stake, t.stake = n.self_stake, s.MessageCenter.send("on_update_self_stake", {
                        seatid: t.seatid
                    }), t.inStay && s.aofNet.RequestBackPosition(e.tRoomData.u32RoomId)) : s.aofNet.RequestSitdown(e.tRoomData.u32RoomId, e.tRoomData.u32PrePickSeatId)
                } else {
                    let t = e.tRoomData.GetTablePlayer(n.playerid);
                    null != t && (t.stake = n.self_stake, s.MessageCenter.send("on_update_self_stake", {
                        seatid: t.seatid,
                        playerid: n.playerid
                    }))
                }
            }
        }
        ResponseModifyBuyinLimit(e, t, o, a, i) {
            var n;
            let r = null == (n = s.roomManager.getRoomByIds(a, i)) ? void 0 : n.gameScene,
                d = this.decodePB(l.protocol.ResponseModifyBuyinLimit, e);
            if (d) {
                let e = d.error,
                    t = d.playername;
                97 == e ? s.TT.showMsg(s.StringTools.formatC("%s", s.config.getStringData("ServerErrorCode" + e) + t), s.Enum.ToastType.ToastTypeError, !1, !1, r) : s.ToastError(e, !1, a, i)
            }
        }
        NoticeModifyBuyinLimit(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeModifyBuyinLimit, e);
            if (n) {
                n.error;
                let e = n.buyin_limit,
                    t = n.buyin_now;
                if (this.checkValidGameData(a, i)) {
                    const o = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    o.tRoomData.u32BuyinLimit = e, o.tRoomData.u32Buyin = t
                }
            }
        }
        ResponseRoomSituation(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseRoomSituation, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeRoomSituation(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeRoomStituation, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                let t = n.buyin_player_list;
                for (let o = 0; o < t.length; ++o) {
                    let s = t[o];
                    e.tRoomData.updateBuyinInfo(s)
                }
                s.MessageCenter.send("on_room_situation", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestStandup(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestStandup.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_Standup_Request, e)
        }
        ResponseStandup(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseStandup, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeStandup(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeStandup, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_standup_succ", {
                    target_uid: n.target_uid,
                    gameData: e
                })
            }
        }
        NoticeBuyinToOwner(e) {
            let t = this.decodePB(l.protocol.NoticeBuyinToOwner, e);
            if (t)
                for (let e = 0; e < t.buyins.length; ++e) {
                    t.buyins[e]
                }
            s.MessageCenter.send("updateListView")
        }
        NoticeBuyinToApplication(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeBuyinToApplicant, e);
            if (n)
                if (1 == n.result) {
                    if (this.checkValidGameData(a, i)) {
                        const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                        e.tRoomData.u32BuyinLimit = n.self_buyin_limit, e.tRoomData.u32Buyin = n.self_buyin, e.tRoomData.u32Stake = n.self_stake, e.tRoomData.last_buyin_allianceId = n.allianceid, null != e.tRoomData.GetTablePlayer(s.dataHandler.getUserData().u32Uid) ? s.MessageCenter.send("on_owner_apply_buyinlimit2", e.tRoomData.u32BuyinLimit - e.tRoomData.u32Buyin) : s.MessageCenter.send("on_owner_apply_buyinlimit", e.tRoomData.u32BuyinLimit - e.tRoomData.u32Buyin)
                    }
                } else {
                    var r;
                    let e = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                    s.TT.showMsg(s.config.getStringData("ToastMessage1"), s.Enum.ToastType.ToastTypeWarning, !1, !1, e)
                }
        }
        ResponseSnapshot(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseSnapshot, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        RequestSnapshot(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestSnapshot.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_Snapshot_Request, e)
        }
        RequestAddRoomTimeCount(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestAddRoomTimeCount.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_AddRoomTimeCount_Request, e)
        }
        Response_AddRoomTimeCount(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseAddRoomTimeCount, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeAddRoomTimeCount(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeAddRoomTimeLeft, e);
            const r = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
            n && this.checkValidGameData(a, i) && (r.tRoomData.u32DelayLeft = n.leftcount), s.MessageCenter.send("on_add_room_timecount", r)
        }
        RequestLeaveRoom(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestLeaveRoom.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_LeaveRoom_Request, e)
        }
        Response_LeaveRoom(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseLeaveRoom, e);
            n && s.roomManager.onResponse_LeaveRoom(n, a, i)
        }
        RequestPauseGame(e, t) {
            let o = {
                    roomid: e,
                    isPause: t
                },
                s = l.protocol.RequestPauseGame.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_PauseGame_Request, e)
        }
        ResponsePauseGame(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponsePauseGame, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticePauseGame(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePauseGame, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                if (this.checkValidGameData(a, i)) {
                    var r;
                    e.tRoomData.pkRoomState.isPause = n.isPause, e.tRoomData.pkRoomState.paused = n.paused;
                    let t = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                    n.isPause ? s.TT.showMsg(s.config.getStringData("PauseGame"), s.Enum.ToastType.ToastTypeWarning, !1, !1, t) : s.TT.showMsg(s.config.getStringData("PauseGame2"), s.Enum.ToastType.ToastTypeWarning, !1, !1, t)
                }
                s.MessageCenter.send("on_PauseGame_succ", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestStayPosition(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestStayPosition.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_StayPosition_Request, e)
        }
        ResponseStayPosition(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseStayPosition, e);
            if (n && 1 == n.error) {
                var r;
                let e = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                s.TT.showMsg(s.config.getStringData("ErrorToast34"), s.Enum.ToastType.ToastTypeWarning, !1, !1, e)
            }
        }
        NoticePlayerStayPosition(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePlayerStay, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                for (let t = 0; t < n.players.length; t++) {
                    let o = n.players[t];
                    e.tRoomData.updateTablePlayer(o.playerid, n.players[t]), s.MessageCenter.send("on_leave_seat", {
                        playerid: n.players[t].playerid,
                        gameData: e
                    })
                }
            }
        }
        ResponseBuyout(e, t, o, a, i) {
            var n;
            let r = null == (n = s.roomManager.getRoomByIds(a, i)) ? void 0 : n.gameScene,
                d = this.decodePB(l.protocol.ResponseBuyout, e);
            d && (s.ToastError(d.error, !1, a, i), 1 == d.error ? s.TT.showMsg(s.config.getStringData("UIGameSceneTips9"), s.Enum.ToastType.ToastTypeSuccess, !1, !1, r) : s.TT.showMsg(s.config.getStringData("UIGameSceneTips10"), s.Enum.ToastType.ToastTypeError, !1, !1, r))
        }
        NoticeBuyout(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeBuyout, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                if (this.checkValidGameData(a, i))
                    if (n.seat_no == e.tRoomData.i32SelfSeat) {
                        s.dataHandler.getUserData().m_totalBuyOut = n.total_buyout, e.tRoomData.u32Stake = e.tRoomData.u32Stake - n.buyout_gold;
                        let t = s.StringTools.serverGoldToShowNumber(n.buyout_gold);
                        s.StringTools.serverGoldToShowNumber(n.total_buyout);
                        s.dataHandler.getUserData().m_totalBuyOut = n.total_buyout, s.MessageCenter.send("update_player_buyout", {
                            buyoutGold: t,
                            gameData: e
                        })
                    } else {
                        let t = e.tRoomData.GetTablePlayerBySeatId(n.seat_no);
                        if (null == t) {
                            var r;
                            let e = s.StringTools.serverGoldToShowNumber(n.buyout_gold),
                                o = s.StringTools.serverGoldToShowNumber(n.total_buyout),
                                d = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                            s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("UIGameSceneTips14"), t.name, e, o), s.Enum.ToastType.ToastTypeInfo, !1, !1, d)
                        }
                    } for (let t = 0; t < e.tRoomData.kTablePlayerList.length; ++t) {
                    let o = e.tRoomData.kTablePlayerList[t];
                    if (o && o.seatid == n.seat_no) {
                        o.stake = n.remain_gold;
                        break
                    }
                }
                s.MessageCenter.send("update_player_stake", {
                    seat_id: n.seat_no,
                    stake: n.remain_gold,
                    gameData: e
                })
            }
        }
        RequestCheckAllianceRoomPriviledge(e, t) {
            let o = {
                    playerid: e
                },
                s = l.protocol.RequestCheckAllianceRoomPriviledge.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_CheckAllianceRoomPriviledge_Request, t)
        }
        responseCheckAllianceRoomPriviledge(e) {
            let t = this.decodePB(l.protocol.ResponseCheckAllianceRoomPriviledge, e);
            t && s.MessageCenter.send("isHavePriviledge", 1 == t.error)
        }
        RequestForceStandup(e, t) {
            let o = {
                    roomid: e,
                    targetid: t
                },
                s = l.protocol.RequestForceStandup.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_ForceStandup_Request, e)
        }
        HandleForceStandupResponse(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseForceStandup, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        HandleForceStandupNotice(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseForceStandup, e);
            if (n && this.checkValidGameData(a, i)) {
                var r;
                let e = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                n.playerid == s.dataHandler.getUserData().u32Uid ? s.TT.showMsg(s.config.getStringData("ForceStandup2"), s.Enum.ToastType.ToastTypeWarning, !1, !1, e) : s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("ForceStandup"), n.playername), s.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        RequestProhibitSitdown(e, t, o) {
            let s = {
                    roomid: e,
                    targetid: t,
                    isProhibitSitdown: o
                },
                a = l.protocol.RequestProhibitSitdown.encode(s).finish();
            this.sendGameMsg(a, l.protocol.MSGID.MsgID_ProhibitSitdown_Request, e)
        }
        HandleProhibitSitdownResponse(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseProhibitSitdown, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        HandleProhibitSitdownNotice(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeProhibitSitdown, e);
            if (n && this.checkValidGameData(a, i)) {
                var r;
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                let t = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                n.playerid == s.dataHandler.getUserData().u32Uid ? n.isprohibitsitdown ? s.TT.showMsg(s.config.getStringData("ProhibitSitdown2"), s.Enum.ToastType.ToastTypeWarning, !1, !1, t) : s.TT.showMsg(s.config.getStringData("ProhibitSitdown3"), s.Enum.ToastType.ToastTypeSuccess, !1, !1, t) : n.isprohibitsitdown ? s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("ProhibitSitdown"), n.playername), s.Enum.ToastType.ToastTypeInfo, !1, !1, t) : s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("ProhibitSitdown4"), n.playername), s.Enum.ToastType.ToastTypeInfo, !1, !1, t), e.tRoomData.prohibit_sitdown_list = n.prohibit_sitdown_list, s.MessageCenter.send("update_prohibit_button")
            }
        }
        RequestPhotoVerify(e, t) {
            let o = {
                    roomid: e,
                    targetid: t
                },
                s = l.protocol.RequestPhotoVerify.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_PhotoVerify_Request, e)
        }
        HandlePhotoVerifyResponse(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponsePhotoVerify, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        HandleNotiPlayerHoleCardNotice(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NotiPlayerHoleCard, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_notiplayer_holecard_noti", {
                    msg: n,
                    gameData: e
                })
            }
        }
        HandlePhotoVerifyNotice(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePhotoVerify, e);
            if (n) {
                var r;
                let e = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                this.checkValidGameData(a, i) && (n.ownerid == s.dataHandler.getUserData().u32Uid && s.TT.showMsg(s.config.getStringData("PhotoVerifyRequestSucc"), s.Enum.ToastType.ToastTypeWarning, !1, !1, e), n.targetid == s.dataHandler.getUserData().u32Uid && (s.TT.showMsg(s.config.getStringData("PhotoVerifyRequest"), s.Enum.ToastType.ToastTypeInfo, !1, !1, e), s.MessageCenter.send("on_photo_verify")))
            }
        }
        RequestSendCardFun(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestSendCardFun.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_SendCard_Fun_Request, e)
        }
        ResponsePlayerSendCardFun(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseSendCardFun, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticePlayerSendCardFun(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeRoomCardFun, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_game_send_card_fun", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestForceShowCard(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestForceShowCard.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_ForceShowCard_Request, e)
        }
        ResponseForceShowCard(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseForceShowCard, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeForceShowCard(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeForceShowCard, e);
            if (this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("on_force_showcard", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestDestroyRoom(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestForceShowCard.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_DestroyRoom_Request, e)
        }
        ResponseDestroyRoom(e) {
            let t = this.decodePB(l.protocol.ResponseDestroyRoom, e);
            t && 1 != t.error && s.MessageCenter.send("updataGameDissolveButton")
        }
        NoticeDestroyRoom(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeDestroyRoom, e);
            if (n)
                if (this.checkValidGameData(a, i)) s.MessageCenter.send("on_room_destroy_noti", {
                    ret: n,
                    gameData: s.GameDataManager.getDataInstanceByGameAndRoomId(a, i)
                });
                else {
                    let e = s.tools.displayChineseName(n.room_name);
                    s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("ToastMessage3"), e), s.Enum.ToastType.ToastTypeInfo, !1, !1)
                }
        }
        RequestCheckOutAndLeave(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestCheckOutAndLeave.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_CheckOutAndLeave_Request, e)
        }
        ResponseCheckOutAndLeave(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseCheckOutAndLeave, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeCheckOutAndLeave(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeCheckOutAndLeave, e);
            if (n && this.checkValidGameData(a, i)) {
                var r;
                let e = null == (r = s.roomManager.getRoomByIds(a, i)) ? void 0 : r.gameScene;
                n.targetid, s.dataHandler.getUserData().u32Uid, s.TT.showMsg(s.config.getStringData("CheckOutAndLeave"), s.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        RequestSendChat(e, t, o) {
            let a = o;
            t == s.Enum.ChatType.Enum_Voice && (a = "" != s.dataHandler.getUserData().nick_name.toString() ? "@" + s.dataHandler.getUserData().nick_name + "@" + a : "@noname@" + a);
            let i = {
                    roomid: e,
                    ctype: t,
                    content: a
                },
                n = l.protocol.RequestSendChat.encode(i).finish();
            this.sendGameMsg(n, l.protocol.MSGID.MsgID_SendChat_Request, e)
        }
        ResponseSendChat(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseSendChat, e);
            if (n && this.checkValidGameData(a, i)) {
                let e = n.next_fee;
                s.GameDataManager.getDataInstanceByGameAndRoomId(a, i).tRoomData.kingBee = e, s.ToastError(n.error, !1, a, i)
            }
        }
        NoticeSendChat(e, t, a, i, r) {
            console.log("#######################NoticeSendChat");
            let d = this.decodePB(l.protocol.NoticeSendChat, e);
            if (d && this.checkValidGameData(i, r)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(i, r);
                if (d.ctype == s.Enum.ChatType.Enum_Voice && s.appConfig.getGameConfig().audioChatEnabled) {
                    if (s.config.getCurrentScene() == s.Enum.SCENE.GAME_SCENE) {
                        let t = d.content;
                        if ("#" == t[0]) s.MessageCenter.send("on_fly_emoji", {
                            Content: t,
                            gameData: e
                        });
                        else {
                            let t = d.content.split("@");
                            if (t.length <= 0) return;
                            let a = t[1],
                                i = t[2];
                            if (o.os === o.OS.IOS && o.isNative) {
                                if (d.seatid != e.tRoomData.i32SelfSeat && s.tools.isPlayVoice()) {
                                    let t = new n;
                                    t.kUrl = i, t.kSender = a, t.u32SeatId = d.seatid, s.native.PlayRoomVoice(t);
                                    let o = e.tRoomData.GetTablePlayerBySeatId(d.seatid);
                                    o && (o.last_voice = i)
                                }
                            } else if ((o.os === o.OS.ANDROID || s.config.GET_CLIENT_TYPE() == s.Enum.ClientType.H5WebPage) && d.seatid != e.tRoomData.i32SelfSeat && s.tools.isPlayVoice()) {
                                let t = new n;
                                t.kUrl = i, t.kSender = a, t.u32SeatId = d.seatid;
                                let o = e.tRoomData.GetTablePlayerBySeatId(d.seatid);
                                o && (o.last_voice = i), s.httpHandler.DoDownloadVoice(t)
                            }
                        }
                    }
                } else d.ctype == s.Enum.ChatType.Enum_Emoji && s.appConfig.getGameConfig().emojiTabEnabled && s.MessageCenter.send("on_SendChat", {
                    seatID: d.seatid,
                    face: d.content,
                    gameData: e
                })
            }
        }
        RequestSendMagicEmoji(e, t) {
            let o = {
                    roomid: e,
                    type: t
                },
                s = l.protocol.MagicEmojiRequest.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgId_MagicEmoji_Request, e)
        }
        ResponseSendMagicEmoji(e, t, o, a, i) {
            let n = this.decodePB("MagicEmojiResponse", e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeSendMagicEmoji(e, t, o, a, n) {
            let r = this.decodePB("MagicEmojiNotice", e);
            if (console.log("#######################NoticeSendMagicEmoji :: " + r.type), r && this.checkValidGameData(a, n)) {
                const e = i.getDataInstanceByGameAndRoomId(a, n),
                    t = {
                        roomId: r.roomid,
                        playerId: r.playerid,
                        type: r.type
                    };
                s.MessageCenter.send("on_SendMagicEmoji", {
                    msg: t,
                    gameData: e
                })
            }
        }
        NoticeDynamicConfig(e, t, o, a, n) {
            let r = this.decodePB("DynamicConfig", e);
            if (console.log("#######################NoticeDynamicConfig :: " + r), r && this.checkValidGameData(a, n)) {
                const e = i.getDataInstanceByGameAndRoomId(a, n);
                s.MessageCenter.send("on_SendNoticeDynamicConfig", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestAddRoomTime(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestAddRoomTime.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_AddRoomTime_Request, e)
        }
        ResponseAddRoomTime(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseAddRoomTime, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        NoticeAddRoomTime(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeAddRoomTime, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                s.MessageCenter.send("add_room_time", {
                    msg: n,
                    gameData: e
                })
            }
        }
        RequestInteractiveExpression(e, t) {
            let o = {
                    roomid: e,
                    content: t
                },
                s = l.protocol.RequestInteractiveExpression.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_InteractiveExpression_Request, e)
        }
        HandleInteractiveExpressionResponse(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseInteractiveExpression, e);
            n && s.ToastError(n.error, !1, a, i)
        }
        HandleInteractiveExpressionNotice(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeInteractiveExpression, e);
            if (n && this.checkValidGameData(a, i)) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                "#" == n.content[0] && s.MessageCenter.send("on_fly_emoji", {
                    Content: n.content,
                    gameData: e
                })
            }
        }
        RequestCheckFirstJoinRoom(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestCheckFirstTimeJoinRoomWithPassword.encode(t).finish();
            s.netWorkManager.isLoginGameServerSucc(s.Enum.GameId.Allin) ? this.sendGameMsg(o, l.protocol.MSGID.MsgID_RequestCheckFirstTimeJoinRoomWithPassword, e) : this.requestLoginServer()
        }
        HandResponseJoinRoomWithFirst(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseCheckFirstTimeJoinRoomWithPassword, e);
            n && (1 == n.error ? n.isfirst ? s.MessageCenter.send("Join_room", n.roomid) : (s.roomManager.resetRoomCache(s.Enum.GameId.Allin, n.roomid), s.roomManager.RequestJoinRoom(s.Enum.GameId.Allin, n.roomid)) : s.ToastError(n.error, !1, a, i))
        }
        RequestCheckFirstBuyin(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestCheckFirstTimeBuyinWithPassword.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_RequestCheckFirstTimeBuyinWithPassword, e)
        }
        HandResponseBuyinWithFirst(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseCheckFirstTimeBuyinWithPassword, e);
            if (n)
                if (1 == n.error) {
                    const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    n.isfirst ? s.MessageCenter.send("buyin_room", {
                        room_id: n.room_id || n.roomid,
                        gameData: e
                    }) : this.checkValidGameData(a, i) && s.aofNet.RequestSitdown(e.tRoomData.u32RoomId, e.tRoomData.u32PrePickSeatId)
                } else s.ToastError(n.error, !1, a, i)
        }
        HandResponsePlayerStake(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeUpdateMoney, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                n.gameData = e, s.MessageCenter.send("update_player_stake", n)
            }
        }
        RequestBuyinWithPassword(e, t) {
            let o = {
                    roomid: e,
                    buyin_password: t
                },
                s = l.protocol.RequestCheckBuyinPassword.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgID_RequestCheckBuyinPassword, e)
        }
        HandBuyinResponsePwd(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseCheckBuyinPassword, e);
            if (n)
                if (1 == n.error) {
                    if (this.checkValidGameData(a, i)) {
                        const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                        s.MessageCenter.send("tipspanel_removed", e), this.RequestSitdown(e.tRoomData.u32RoomId, e.tRoomData.u32PrePickSeatId)
                    }
                } else s.ToastError(n.error, !1, a, i)
        }
        RequestJoinRoomWithPassword(e, t, o) {
            let a = s.md5.md5(o);
            console.log("====RequestJoinRoomWithPassword=> join_password = " + a);
            let i = {
                roomid: t,
                join_password: a
            };
            const n = s.GameDataManager.getDataInstanceByGameAndRoomId(e, t);
            n && (n.tRoomData.u32RoomId = t, n.tRoomData.roomPassword = a);
            let r = l.protocol.RequestJoinRoomWithPassword.encode(i).finish();
            s.netWorkManager.isLoginGameServerSucc(s.Enum.GameId.Allin) ? this.sendGameMsg(r, l.protocol.MSGID.MsgID_RequestJoinRoomWithPassword, t) : this.requestLoginServer()
        }
        HandResponseJoinRoomWithPassword(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.ResponseJoinRoomWithPassword, e);
            n && (1 == n.error ? (s.roomManager.resetRoomCache(s.Enum.GameId.Allin, n.roomid), s.roomManager.RequestJoinRoom(s.Enum.GameId.Allin, n.roomid)) : s.ToastError(n.error, !1, a, i))
        }
        static getInstance() {
            return g.g_instance || (g.g_instance = new g, g.g_instance.init()), g.g_instance
        }
        HandleNoticeGlobalMessage(e) {
            let t = this.decodePB(l.protocol.NoticeGlobalMessage, e);
            if (t) {
                let e = t.repeat_count,
                    o = t.msg;
                for (let t = 0; t < e; t++) {
                    let e = new d;
                    if (s.config.getCurrentLanguage() != s.Enum.LANGUAGE_TYPE.zh_CN) {
                        let e = o.indexOf("#", 0);
                        o = o.substr(0, e)
                    } else {
                        let e = o.indexOf("#", 0);
                        o = o.substr(e + 1, o.length)
                    }
                    e.str = o, e.msgType.push(c.PUSH_ALLIN), r.getInstance().addPushNotice(e)
                }
            }
        }
        RequestGetGameUUIdsJs(e) {
            let t = l.protocol.RequestGetGameUUIdsJs.encode({}).finish();
            this.sendGameMsg(t, l.protocol.MSGID.MsgId_GetGameUUIdsJs_Request, e)
        }
        ResponseGetGameUUIdsJsMessage(e) {
            this.decodePB(l.protocol.ResponseGetGameUUIdsJs, e)
        }
        NoticeGetGameUUIdsJsMessage(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGetGameUUIdsJs, e);
            if (n) {
                let e = s.StringTools.getArrayLength(n.list);
                if (this.checkValidGameData(a, i)) {
                    const t = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    t.tRoomData.game_uuids_js = [];
                    for (let o = 0; o < e; o++) t.tRoomData.game_uuids_js.push(n.list[o].game_uuid_js)
                }
            }
        }
        RequestPlayerBuyinsInfo(e) {
            let t = {
                    roomid: e
                },
                o = l.protocol.RequestPlayerBuyinsInfo.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_PlayerBuyinsInfo_Request, e)
        }
        ResponsePlayerBuyinsInfo(e) {
            this.decodePB(l.protocol.ResponsePlayerBuyinsInfo, e)
        }
        NoticePlayerBuyinsInfo(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticePlayerBuyinsInfo, e);
            if (n) {
                if (this.checkValidGameData(a, i)) {
                    const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    s.StringTools.deepCopy(n.buyin_infos, e.tRoomData.buyinInfos)
                }
                s.MessageCenter.send("update_buyinInfo")
            }
        }
        RequestGuessBet(e, t, o, a) {
            let i = {
                    option: t,
                    amonut: s.StringTools.serverGoldByClient(o),
                    bet_seqno: a
                },
                n = l.protocol.GuessBetReq.encode(i).finish();
            return this.sendGameMsg(n, l.protocol.MSGID.MsgId_GuessHandCard_Bet_Request, e)
        }
        RequestGuessSetBetOpt(e, t) {
            let o = {
                    repeat: t
                },
                s = l.protocol.GuessSetBetOptReq.encode(o).finish();
            this.sendGameMsg(s, l.protocol.MSGID.MsgId_GuessHandCard_SetBetOpt_Request, e)
        }
        NoticeGuessHandCardBeginBet(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.NoticeGuessBeginBet, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                if (this.checkValidGameData(a, i)) {
                    e.tRoomData.RemoveGuessOdds();
                    let t = s.StringTools.getArrayLength(n.list),
                        o = n.list;
                    for (let s = 0; s < t; s++) e.tRoomData.addGuessOdds(o[s])
                }
                s.MessageCenter.send("guess_begin_bet", {
                    msg: n,
                    gameData: e
                })
            }
        }
        ResponseGuessHandCardBet(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.GuessBetRsp, e);
            if (n)
                if (1 == n.Error) {
                    const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                    this.checkValidGameData(a, i) && (e.tRoomData.change_points = n.change_points), s.MessageCenter.send("guess_bet_rsp", {
                        msg: n,
                        gameData: e
                    })
                } else s.ToastError(n.Error, !1, a, i)
        }
        ResponseGuessHandCardSetBetOpt(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.GuessSetBetOptRsp, e);
            n && n && (1 == n.Error ? (console.log(n), s.MessageCenter.send("guess_set_bet_opt", n.repeat)) : s.ToastError(n.Error, !1, a, i))
        }
        NoticeGuessHandCardSettle(e, t, o, a, i) {
            let n = this.decodePB(l.protocol.GuessSettleNotice, e);
            if (n) {
                const e = s.GameDataManager.getDataInstanceByGameAndRoomId(a, i);
                n.is_return_back ? s.TT.showMsg(s.StringTools.formatC(s.config.getStringData("UIGuessReturn"), s.StringTools.numToFloatString(n.win_amount)), s.Enum.ToastType.ToastTypeInfo) : s.MessageCenter.send("guess_settle", {
                    msg: n.win_amount,
                    gameData: e
                })
            }
        }
        RequestUploadGuessState(e) {
            let t = {
                    room_id: e,
                    is_open_guess: !1
                },
                o = l.protocol.UploadGuessStateRequest.encode(t).finish();
            this.sendGameMsg(o, l.protocol.MSGID.MsgID_UploadGuessState_Request, e)
        }
    }
    e("AofNetWork", g), g.g_instance = void 0, t._RF.pop()
}
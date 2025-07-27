import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as a from "./gs_protocol.mjs_cjs=&original=.js";
import * as i from "./GameDataManager.js";
import * as n from "./RoomData.js";
import * as d from "./cv.js";
import * as r from "./cv.js";
import * as g from "./PushNotice.js";
import * as l from "./PushNotice.js";
import * as c from "./PushNotice.js";
import * as m from "./Enum.js";
import * as p from "./NetWorkProxy.js";
import * as u from "./NetWorkProxy.js";
import * as R from "./ConnectionTracing.js";
import * as h from "./ConnectionTracing.js";
import * as I from "./CrashTracing.js";
import * as D from "./CrashTracing.js";
import * as _ from "./DynamicPromoEnums.js";

function main() {
    o._RF.push({}, "ad8e9JyP6VFV5NidDS7pZeu", "GameNetWork", void 0);
    let M = e("GeoComplyCashGameError", function(e) {
        return e[e.GEOCOMPLY_INVAILD = 31119] = "GEOCOMPLY_INVAILD", e[e.GEOCOMPLY_SERVICE_ERROR = 31120] = "GEOCOMPLY_SERVICE_ERROR", e
    }({}));
    class S extends m {
        constructor(...e) {
            super(...e), this.replayForceShowCardGameUUID = null
        }
        registerMsg(e, o) {
            this.registerMessage(e, o, n.Enum.GameId.Texas)
        }
        init() {
            this.registerMsg(_.protocol.MSGID.MsgID_Logon_Response, this.responseLoginServer.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_HeartBeat_Response, this.responseHeartBeat.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SitDown_Response, this.ResponseSitDown.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SitDown_Notice, this.NoticeSitDown.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Buyin_Response, this.ResponseBuyin.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Buyin_Notice, this.NoticeBuyin.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Room_Situation_Response, this.ResponseRoomSituation.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Room_Situation_Notice, this.NoticeRoomSituation.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_JoinRoom_Response, this.JoinRoomResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_Snapshot_Notice, this.NoticeGameSnapShot.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_GameActionTurn_Response, this.ResponseGameActionTurn.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Standup_Response, this.ResponseStandup.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Standup_Notice, this.NoticeStandup.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_DestroyRoom_Response, this.ResponseDestroyRoom.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_DestroyRoom_Notice, this.NoticeDestroyRoom.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ResetGame_Notice, this.NoticeResetGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_ElectDealer_Notice, this.NoticeGameElectDealer.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_Blind_Notice, this.NoticeGameBlind.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_HoleCard_Notice, this.NoticeGameHoleCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PlayerActionTurn_Notice, this.NoticePlayerActionTurn.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_BackPosition_Response, this.ResponsePlayerBackPosition.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_BackPosition_Notice, this.NoticePlayerBackPosition.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PlayerAction_Notice, this.NoticePlayerAction.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_RoundEnd_Notice, this.NoticeGameRoundEnd.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_CommunityCards_Notice, this.NoticeGameCommunityCards.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_Settlement_Notice, this.NoticeGameSettleMent.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ShowCard_Notice, this.NoticePlayerShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_Ante_Notice, this.NoticeGameAnte.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_StayPosition_Response, this.ResponseStayPosition.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_StayPosition_Notice, this.NoticePlayerStayPosition.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Waiting_OtherPlayer_Notice, this.NoticeWaitingOtherPlayer.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PauseGame_Response, this.ResponsePauseGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PauseGame_Notice, this.NoticePauseGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddRoomTimeCount_response, this.Response_AddRoomTimeCount.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddRommExTimeLeft_Notice, this.NoticeAddRoomTimeCount.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_LeaveRoom_Response, this.Response_LeaveRoom.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_QuickLeave_Response, this.Response_QuickLeaveRoom.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_QuickLeave_Notice, this.Response_QuickLeaveNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_StartGame_Response, this.ResponseStartGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_StartGame_Notice, this.NoticeStartGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_RealStart_Notice, this.NoticeRealStart.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_DefaultFold_Response, this.ResponseDefaultFold.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_QuickFold_Response, this.ResponseQuickFold.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_LastRound_Win, this.ResponseLastRoundWin.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Buyout_Response, this.ResponseBuyout.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Buyout_Notice, this.NoticeBuyout.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Action_Response, this.ResponseAction.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_ShowDown_Notice, this.NoticeGameShowDown.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_CheckAllianceRoomPriviledge_Response, this.responseCheckAllianceRoomPriviledge.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ForceStandup_Response, this.HandleForceStandupResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ForceStandup_Notice, this.HandleForceStandupNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ProhibitSitdown_Response, this.HandleProhibitSitdownResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ProhibitSitdown_Notice, this.HandleProhibitSitdownNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PhotoVerify_Response, this.HandlePhotoVerifyResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PhotoVerify_Notice, this.HandlePhotoVerifyNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_NotiPlayerHoleCard_Notice, this.HandleNotiPlayerHoleCardNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_BuyInsurance_Response, this._ResponseBuyInsurance.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Game_Insurance_Notice, this._NoticeGameInsurance.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_BuyInsuranceResult_Notice, this._NoticeBuyInsurance.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_InsuranceHitOuts_Notice, this._NoticeInsuranceHitOuts.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_InsuranceMissOuts_Notice, this._NoticeInsuranceMissOuts.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_NoNeedInsurance_Notice, this._NoticeNoNeedInsurace.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddInsuranceTime_Response, this._ResponseAddInsuranceTime.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddInsuranceTime_Notice, this._NoticeAddInsuranceTime.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_InsuranceToomanyLeader_Notice, this._NoticeInsuranceToomanyLeader.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_NotSupport_Insurance_Notice, this._NoticeNotSupportInsurance.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SendCard_Fun_Response, this.ResponsePlayerSendCardFun.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SendCard_Fun_Notice, this.NoticePlayerSendCardFun.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ForceShowCard_Response, this.ResponseForceShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ForceShowCard_Notice, this.NoticeForceShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ReplayForceShowCard_Response, this._ResponseReplayForceShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ReplayForceShowCard_Notice, this._NoticeReplayForceShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ReplaySendCard_Response, this._ResponseReplaySendCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ReplaySendCard_Notice, this._NoticeReplaySendCard.bind(this)), n.appConfig.getGameConfig().emojiTabEnabled && (this.registerMsg(_.protocol.MSGID.MsgID_InteractiveExpression_Response, this.HandleInteractiveExpressionResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_InteractiveExpression_Notice, this.HandleInteractiveExpressionNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_IsEmojiFree_Response, this.responseIsEmojiFree.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_IsEmojiFree_Notice, this.IsEmojiFreeNotice.bind(this))), this.registerMsg(_.protocol.MSGID.MsgID_CheckOutAndLeave_Response, this.ResponseCheckOutAndLeave.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_CheckOutAndLeave_Notice, this.NoticeCheckOutAndLeave.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_InitiativeDestroyRoom_Notice, this.RoomNoticeInitiativeDestroy.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddActionTime_Notice, this.NoticeAddActionTime.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ResponseCheckFirstTimeJoinRoomWithPassword, this.HandResponseJoinRoomWithFirst.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ResponseJoinRoomWithPassword, this.HandResponseJoinRoomWithPassword.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ResponseCheckFirstTimeBuyinWithPassword, this.HandResponseBuyinWithFirst.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_UpdateMoney_Notice, this.HandResponsePlayerStake.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ResponseCheckBuyinPassword, this.HandBuyinResponsePwd.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SendChat_Response, this.ResponseSendChat.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_SendChat_Notice, this.NoticeSendChat.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_MagicEmoji_Response, this.ResponseSendMagicEmoji.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_MagicEmoji_Notice, this.NoticeSendMagicEmoji.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_DynamicConfig_Notice, this.NoticeDynamicConfig.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddRoomTime_Response, this.ResponseAddRoomTime.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_AddRoomTime_Notice, this.NoticeAddRoomTime.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ShowCard_Response, this.ResponsePlayerShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ShowCard_Response, this.NoticePlayerShowCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_Snapshot_Response, this.ResponseSnapshot.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_GlobalMessage_Notice, this.HandleNoticeGlobalMessage.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_FairGame_Notice, this.HandleNoticeFairGame.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GetGameUUIdsJs_Response, this.ResponseGetGameUUIdsJsMessage.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GetGameUUIdsJs_Notice, this.NoticeGetGameUUIdsJsMessage.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PlayerBuyinsInfo_Response, this.ResponsePlayerBuyinsInfo.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PlayerBuyinsInfo_Notice, this.NoticePlayerBuyinsInfo.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GetRoomLimit_ID_Response, this.ResponseGetRoomLimitID.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_CriticismStart_Notice, this.NoticeCritisicmStart.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_NotEnoughMoney2Crit_Notice, this.NoticeCritisicmNotEnoughMoney.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GuessHandCard_BeginBet_Notice, this.NoticeGuessHandCardBeginBet.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GuessHandCard_Bet_Response, this.ResponseGuessHandCardBet.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GuessHandCard_SetBetOpt_Response, this.ResponseGuessHandCardSetBetOpt.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_GuessHandCard_Settle_Notice, this.NoticeGuessHandCardSettle.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_AutoWithdraw_Response, this.ResponseAutoWithdraw.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ShowCritPrompt_Notice, this.onShowCritPromptNotice.bind(this)), n.appConfig.getGameConfig().enableShowBarrage && (this.registerMsg(_.protocol.MSGID.MsgId_SendBarrage_Response, this.onBarrageRespones.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_SendBarrage_Notice, this.onBarrageNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_BarrageCount_Response, this.onGetBarrageCountNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_SendBarrageForbidden_Response, this.onSendBarrageForbiddenResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_SendBarrageForbidden_Notice, this.onSendBarrageForbiddenNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_SendBarrageForbiddenConfChange_Notice, this.onSendBarrageForbiddenConfChangeNotice.bind(this))), this.registerMsg(_.protocol.MSGID.MsgID_NotiGameUpdateThumb_Response, this.ResponseNotiGameUpdateThumb.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_OpenLive_Response, this.onOpenLiveResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_OpenMike_Response, this.onOpenMikeResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_CloseStar_Notice, this.onCloseStarNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_ChangeTable_Response, this.ResponseChangeTable.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_NotDisturb_Response, this.onNotDisturbResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_Like_Response, this.onLikeResponse.bind(this)), this.registerMsg(_.protocol.MSGID.MsgId_Like_Notice, this.onLikeNotice.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PeekCard_Notice, this.NoticePeekCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PeekCard_Response, this.ResponsePeekCard.bind(this)), this.registerMsg(_.protocol.MSGID.MsgID_PeekCard_Finish_Notice, this.NoticePeekCardFinish.bind(this))
        }
        sendGameMsg(e, o, t, s = 2, a = 2) {
            let i = n.roomManager.getGameIdByRoomId(t) || a;
            return n.roomManager.checkGameIsZoom(i) || i === n.Enum.GameId.Allin || i === n.Enum.GameId.Bet || i == n.Enum.GameId.StarSeat || i == n.Enum.GameId.Plo ? this.sendMsg(e, o, t, s, i) : i === n.Enum.GameId.Plo5 ? (s = n.Enum.SeverType.SererType_World_WPTO, this.sendMsg(e, o, t, s, i)) : this.sendMsg(e, o, t, s, a)
        }
        NoticeAddActionTime(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeAddActionTime, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("add_action_time", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RoomNoticeInitiativeDestroy(e, o, t, s, a) {
            var i;
            let r = this.decodePB(_.protocol.NoticeInitiativeDestroyRoom, e),
                d = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene;
            r && (this.checkValidGameData(s, a) ? n.TT.showMsg(n.config.getStringData("InitiativeDestroyRoom"), n.Enum.ToastType.ToastTypeInfo, !1, !1, d) : n.ToastError(r.error, !1, s, a))
        }
        NoticeGameShowDown(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameShowDown, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_game_showdown_noti", {
                    msg: r,
                    gameData: e
                })
            }
        }
        ResponseAction(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseAction, e);
            if (n.config.logTime("ResponseAction"), this.responseReceived(_.protocol.MSGID.MsgID_Action_Request, r.error, i, 0), 0 != r.error) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                1205 == r.error ? n.MessageCenter.send("action_fold_error", {
                    msg: 1,
                    gameData: e
                }) : (n.ToastError(r.error, null, s, i), h.HasSpan(R.CashGameRequestAction) && h.EndSpan(R.CashGameRequestAction, "ResponseActionError", {
                    msgid: o,
                    msgError: r.error,
                    msgKeepEnd: r.keepEnd
                }))
            }
            h.HasSpan(R.CashGameRequestAction) && h.StopSpan(R.CashGameRequestAction)
        }
        RequestDefaultFold(e, o) {
            let t = {
                    roomid: e,
                    type: o
                },
                s = _.protocol.RequestDefaultFold.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_DefaultFold_Request, e)
        }
        ResponseDefaultFold(e) {
            this.decodePB(_.protocol.ResponseDefaultFold, e)
        }
        RequestQuickFold(e, o, t) {
            let s = {
                    RoomID: e,
                    CheckBet: o,
                    keepEnd: t
                },
                a = _.protocol.RequestQuickFold.encode(s).finish();
            this.sendGameMsg(a, _.protocol.MSGID.MsgID_QuickFold_Request, e)
        }
        ResponseQuickFold(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseQuickFold, e);
            if (r && 0 != r.Error) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                1202 == r.Error ? n.MessageCenter.send("zoom_quickfold_tips", e) : 1205 == r.Error ? n.MessageCenter.send("action_fold_error", {
                    msg: 1,
                    gameData: e
                }) : n.ToastError(r.Error, !1, s, i)
            }
        }
        ResponseLastRoundWin(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NotifyLastRoundWin, e);
            if (r) {
                var d;
                let e = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                n.TT.showMsg(n.config.getStringData("ZoomLastRoundWin"), n.Enum.ToastType.ToastTypeError, !1, !1, e);
                const o = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("showLastRoundWin", {
                    msg: n.StringTools.numToFloatString(r.amount),
                    gameData: o
                })
            }
        }
        NoticeRealStart(e, o, t, s, i) {
            this.decodePB(_.protocol.NoticeRealStart, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.pkRoomState.isBegin = !0, n.MessageCenter.send("StartGame", e)
            }
        }
        NoticeWaitingOtherPlayer(e, o, t, s, i) {
            this.decodePB(_.protocol.NoticeWaitingOtherPlayer, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tGameData.game_settlement_uuid = "", n.MessageCenter.send("on_waiting_other_player", e)
            }
        }
        RequestShowCard(e, o, t) {
            let s = _.protocol.RequestShowCard.create();
            s.roomid = e, s.is_show = t, Array.isArray(o) ? s.cardList = o.slice() : s.cards = o;
            let a = _.protocol.RequestShowCard.encode(s).finish();
            this.sendGameMsg(a, _.protocol.MSGID.MsgID_ShowCard_Request, e)
        }
        ResponsePlayerShowCard(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseShowCard, e);
            i && this.checkValidGameData(s, a) && console.log(`game_pb.MSGID.MsgID_ShowCard_Response: ${i.error}`)
        }
        NoticePlayerShowCard(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticePlayerShow, e);
            if (i && this.checkValidGameData(s, a)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("player_show_cards", {
                    msg: i,
                    gameData: e
                })
            }
        }
        NoticeGameAnte(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeGameAnte, e);
            if (i && this.checkValidGameData(s, a)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("on_game_anti_noti", {
                    msg: i,
                    gameData: e
                })
            }
        }
        NoticeGameSettleMent(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameSettlement, e);
            if (r && (console.log(r), this.checkValidGameData(s, i))) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                let o = !1;
                for (let t = 0; t < e.tRoomData.game_uuids_js.length; t++)
                    if (e.tRoomData.game_uuids_js[t] == r.gameuuid_js) {
                        o = !0;
                        break
                    } if (!o && 1 != r.noUseGameuuid) {
                    e.tRoomData.game_uuids_js.push(r.gameuuid_js);
                    let o = e.tRoomData.game_uuids_js.length;
                    r.hisHands > 0 && o > r.hisHands && e.tRoomData.game_uuids_js.shift()
                }
                e.tGameData.game_settlement_uuid = r.gameuuid_js, e.tRoomData.spectatorRevealEnabled = r.is_spectator_enabled, n.MessageCenter.send("on_game_settlement_noti", {
                    msg: r,
                    gameData: e
                })
            }
        }
        NoticeGameCommunityCards(e, o, t, s, a) {
            const i = this.decodePB(_.protocol.NoticeCommunityCards, e);
            if (this.checkValidGameData(s, a)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("on_game_communitycard_noti", {
                    msg: i,
                    gameData: e
                })
            }
        }
        NoticeGameRoundEnd(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeGameRoundEnd, e);
            if (this.checkValidGameData(s, a)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("on_game_endround_noti", {
                    msg: i,
                    gameData: e
                })
            }
        }
        NoticePlayerAction(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticePlayerAction, e);
            if (this.checkValidGameData(s, a)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("on_game_action_noti", {
                    msg: i,
                    gameData: e
                })
            }
        }
        NoticePlayerBackPosition(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeBackPosition, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.updateTablePlayer(r.player.playerid, r.player), n.MessageCenter.send("on_back_seat", {
                    playerid: r.player.playerid,
                    gameData: e
                })
            }
        }
        ResponsePlayerBackPosition(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseBackPosition, e);
            if (r)
                if (32 == r.error) {
                    const e = a.getDataInstanceByGameAndRoomId(s, i);
                    n.MessageCenter.send("on_need_buyin", e)
                } else if (r.error == M.GEOCOMPLY_INVAILD || r.error == M.GEOCOMPLY_SERVICE_ERROR) {
                var d, c;
                let e = n.tryParseJSON(r.failedReasons) || {},
                    o = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                null == (c = n.geoComplyManager) || c.serverErrorHandler(e, o, this.RequestBackPosition.bind(this, i), null, {
                    ErrorType: "CashGame_BackPosition_CheckFailed",
                    ErrorCode: r.error.toString(),
                    ErrorDetails: JSON.stringify(e)
                }, !0)
            }
        }
        NoticeStartGame(e, o, t, s, i) {
            this.decodePB(_.protocol.NoticeStartGame, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.hasRecvStartGame = !0, n.MessageCenter.send("on_startgame_noti", e)
            }
        }
        ResponseStartGame(e, o, t, s, a) {
            this.decodePB(_.protocol.ResponseStartGame, e)
        }
        NoticeResetGame(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeResetGame, e);
            if (console.log(r), this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_resetgame_noti", {
                    msg: r,
                    gameData: e
                })
            }
        }
        NoticeGameElectDealer(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameElectDealer, e);
            if (this.checkValidGameData(s, i)) {
                const o = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_game_elect_dealer_noti", {
                    msg: r,
                    gameData: o
                }), null == r && h.getInstance().trace(R.CashGameIssues, "NoticeGameElectDealer", e)
            }
        }
        NoticeGameBlind(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameBlind, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_game_blind_noti", {
                    msg: r,
                    gameData: e
                })
            }
        }
        NoticeGameHoleCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameHolecard, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_game_holecard_noti", {
                    msg: r,
                    gameData: e
                })
            }
        }
        NoticePlayerActionTurn(e, o, t, s, i) {
            let r = `${R.NoticePlayerActionTurn}_${s}_${i}`;
            h.StartSpan(r);
            let d = {
                msgid: o,
                headerServertype: t,
                gameId: s,
                roomId: i
            };
            h.SetAttributesToSpan(r, d, R.NoticePlayerActionTurn);
            let c = this.decodePB(_.protocol.NoticePlayerActionTurn, e);
            if (this.checkValidGameData(s, i)) {
                let e = {
                    msg: c,
                    gameData: a.getDataInstanceByGameAndRoomId(s, i),
                    consumeStatus: 0,
                    gameId: s,
                    roomId: i
                };
                h.AddEventToSpan(r, "on_game_action_turn_noti"), n.MessageCenter.send("on_game_action_turn_noti", e), 0 == e.consumeStatus ? h.EndSpan(r, "MsgNotConsume") : e.consumeStatus > 3 && h.EndSpan(r, "MsgConsumeMoreThanOnce", {
                    consumeStatus: e.consumeStatus
                })
            }
        }
        isPokerActions(e) {
            return e == n.Enum.ActionType.Enum_Action_Check || e == n.Enum.ActionType.Enum_Action_Fold || e == n.Enum.ActionType.Enum_Action_Call || e == n.Enum.ActionType.Enum_Action_Bet || e == n.Enum.ActionType.Enum_Action_Raise || e == n.Enum.ActionType.Enum_Action_Allin
        }
        RequestAction(e, o, t, s, i = !1, r = 0) {
            const d = this.isPokerActions(t);
            d && (h.StartSpan(R.CashGameRequestAction), h.AddEventToSpan(R.CashGameRequestAction, "ResponseActionData", {
                action: t,
                amount: s
            }));
            let c = n.dataHandler.getUserData().getUserTokenByGameID(e);
            s = n.StringTools.serverGoldByClient(s), n.config.logTime("RequestAction");
            let g = !1;
            const l = a.getDataInstanceByGameAndRoomId(e, o);
            if (l) {
                let e = {
                    roomid: o,
                    amount: s,
                    action: t,
                    ActionSeq: l.tGameData.m_u32ActionSeq,
                    token: c,
                    keepEnd: r,
                    checkBet: i
                };
                console.log(e);
                let a = _.protocol.RequestAction.encode(e).finish();
                g = this.sendGameMsg(a, _.protocol.MSGID.MsgID_Action_Request, o), g && d && (h.SetAttributesToSpan(R.CashGameRequestAction, e), this.addRequestTimeout(_.protocol.MSGID.MsgID_Action_Request, o, (() => {
                    h.EndSpan(R.CashGameRequestAction, "ResponseActionTimeOut")
                }))), l.tGameData.m_bIsOnSelfAction = !1;
                const n = h.GetTrackAttributesOfSpan(R.CashGameActions);
                null != n && n.userClick ? h.StopSpan(R.CashGameActions) : h.EndSpan(R.CashGameActions, "RequestActionWithoutUserClick", {
                    data: e
                })
            }
            return g
        }
        RequestBackPosition(e) {
            var o, t;
            if (null != (o = n.geoComplyManager) && o.isGeoTokenRequired()) return void(null == (t = n.geoComplyManager) || t.requestValidToken(((o = "") => {
                o && this.RequestBackPosition(e)
            }), (() => {})));
            let s = {
                roomid: e
            };
            var a;
            n.appConfig.getSecurityConfig().useGeoComply && (s.geoComplyToken = null == (a = n.geoComplyManager) ? void 0 : a.getGeoToken());
            let i = _.protocol.RequestBackPosition.encode(s).finish();
            this.sendGameMsg(i, _.protocol.MSGID.MsgID_BackPosition_Request, e)
        }
        RequestStartGame(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestStartGame.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_StartGame_Request, e)
        }
        requestLoginServer(e) {
            console.log("====> Game websocket was opened.");
            let o = n.dataHandler.getUserData().getUserTokenByGameID(e),
                t = n.config.GET_CLIENT_VERSION(),
                s = n.dataHandler.getUserData().deviceInfo;
            0 == n.StringTools.getArrayLength(s) && (s = n.native.GetDeviceUUID(!0));
            let a = n.config.GET_CLIENT_TYPE(),
                i = {
                    token: o,
                    version: t,
                    position: this.getPositionInfo(!0),
                    device_info: s,
                    client_type: a
                },
                r = _.protocol.RequestLogon.encode(i).finish();
            console.log(r), this.sendGameMsg(r, _.protocol.MSGID.MsgID_Logon_Request, 0, n.Enum.SeverType.SeverType_Game, e) && n.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: e
            }))
        }
        responseLoginServer(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseLogon, e);
            if (i) {
                let e = i.error;
                if (console.log(i), n.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(i)), 1 == e) {
                    const o = i.rooms;
                    o && o.forEach((e => {
                        if (0 != e.roomid && !e.anti_simulator && n.native.showSimulatorTips(i.anti_simulator_ignore_cond, !1)) return n.netWorkManager.closeGameConnect(!1, s), void n.SwitchLoadingView.hide()
                    }));
                    const t = (null == o ? void 0 : o.map((e => e.roomid))) || [];
                    "number" == typeof i.roomid && i.roomid > 0 && t.length <= 0 && !t.includes(i.roomid) && t.push(i.roomid), n.netWorkManager.OnGameServerLogin(e, s, t)
                } else {
                    var r;
                    n.netWorkManager.clearLoginGameServerSuccFlag(s), n.SwitchLoadingView.hide();
                    let o = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene;
                    510 == e ? n.TT.showMsg(n.config.getStringData("UIEmulatorErrorText"), c.ToastTypeInfo, !1, !1, o) : n.ToastError(e, !1, s, a)
                }
            }
        }
        RequestJoinRoom(e, o, t = !1) {
            var s, a;
            if (null != (s = n.geoComplyManager) && s.isGeoTokenRequired()) return void(null == (a = n.geoComplyManager) || a.requestValidToken(((s = "") => {
                s && this.RequestJoinRoom(e, o, t)
            }), (() => {})));
            let i = {
                roomid: o,
                is_quick_sit: t
            };
            var r;
            n.appConfig.getSecurityConfig().useGeoComply && (i.geoComplyToken = null == (r = n.geoComplyManager) ? void 0 : r.getGeoToken());
            let d = _.protocol.RequestJoinRoom.encode(i).finish();
            if (n.netWorkManager.isLoginGameServerSucc(e)) {
                this.sendGameMsg(d, _.protocol.MSGID.MsgID_JoinRoom_Request, o, n.Enum.SeverType.SeverType_Game, e) && n.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: e,
                    roomId: o
                }))
            } else this.requestLoginServer(e)
        }
        RequestJoinZoomRoom(e, o, t = !1) {
            var s, a;
            if (null != (s = n.geoComplyManager) && s.isGeoTokenRequired()) return void(null == (a = n.geoComplyManager) || a.requestValidToken(((s = "") => {
                s && this.RequestJoinZoomRoom(e, o, t)
            }), (() => {})));
            let i = {
                roomid: e,
                is_quick_sit: t
            };
            var r;
            n.appConfig.getSecurityConfig().useGeoComply && (i.geoComplyToken = null == (r = n.geoComplyManager) ? void 0 : r.getGeoToken());
            let d = _.protocol.RequestJoinRoom.encode(i).finish();
            if (n.netWorkManager.isLoginGameServerSucc(o)) {
                this.sendGameMsg(d, _.protocol.MSGID.MsgID_JoinRoom_Request, e, n.Enum.SeverType.SeverType_Game, o) && n.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: o,
                    roomId: e
                }))
            } else this.requestLoginServer(o)
        }
        JoinRoomResponse(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseJoinRoom, e);
            i ? n.roomManager.onJoinRoomResponse(i, s) : n.roomManager.tracingJoinRoomAddEventToSpan("JoinRoomResponseDecodeFailed", JSON.stringify({
                headerServerid: s,
                headerRoomid: a
            }))
        }
        RequestBuyInsurance(e, o, t, s, i, r) {
            const d = a.getDataInstanceByGameAndRoomId(e, o);
            if (d) {
                s = n.StringTools.serverGoldByClient(s);
                let e = d.tGameData.m_u32InsuranceSeq,
                    a = [];
                for (let e = 0; e < n.StringTools.getArrayLength(t); ++e) a.push(t[e]);
                let c = {
                        roomid: o,
                        amount: s,
                        outs_id: a,
                        action_seq: e,
                        is_buy: i,
                        option: r
                    },
                    g = _.protocol.RequestBuyInsurance.encode(c).finish();
                return console.log("MsgID_BuyInsurance_Request ====> " + JSON.stringify(c)), this.sendGameMsg(g, _.protocol.MSGID.MsgID_BuyInsurance_Request, o)
            }
            return !1
        }
        _ResponseBuyInsurance(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseBuyInsurance, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        _NoticeGameInsurance(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGameInsurance, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_need_buy_insurance", {
                    msg: r,
                    gameData: e
                })
            }
        }
        _NoticeBuyInsurance(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeBuyInsuranceResult, e);
            if (r && this.checkValidGameData(s, i)) {
                console.log("MsgID_BuyInsuranceResult_Notice ====> " + JSON.stringify(r));
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                r.result ? n.MessageCenter.send("player_do_buy_insurance", {
                    msg: r,
                    gameData: e
                }) : n.MessageCenter.send("player_not_buy_insurance", {
                    msg: r,
                    gameData: e
                })
            }
        }
        _NoticeInsuranceHitOuts(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeInsuranceHitOuts, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("player_hit_the_outs", {
                    msg: r,
                    gameData: e
                })
            }
        }
        _NoticeInsuranceMissOuts(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeInsuranceMissOuts, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("player_miss_the_outs", {
                    msg: r,
                    gameData: e
                })
            }
        }
        _NoticeNoNeedInsurace(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeNoNeedInsurance, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("no_need_insurace", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestAddInsuranceTime(e, o) {
            const t = a.getDataInstanceByGameAndRoomId(e, o);
            if (t) {
                let e = {
                        roomid: o,
                        action_seq: t.tGameData.m_u32InsuranceSeq
                    },
                    s = _.protocol.RequestAddInsuranceTime.encode(e).finish();
                return this.sendGameMsg(s, _.protocol.MSGID.MsgID_AddInsuranceTime_Request, o)
            }
            return !1
        }
        _ResponseAddInsuranceTime(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseAddInsuranceTime, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        _NoticeAddInsuranceTime(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeAddInsuranceTime, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("add_insurance_time", {
                    msg: r,
                    gameData: e
                })
            }
        }
        _NoticeInsuranceToomanyLeader(e, o, t, s, a) {
            if (this.decodePB(_.protocol.NoticeInsuranceToomanyLeader, e) && this.checkValidGameData(s, a)) {
                var i;
                let e = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene;
                n.TT.showMsg(n.config.getStringData("UIGameSceneTips5"), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        _NoticeNotSupportInsurance(e, o, t, s, a) {
            if (this.decodePB(_.protocol.NoticeNotSupportInsurance, e) && this.checkValidGameData(s, a)) {
                var i;
                let e = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene;
                n.TT.showMsg(n.config.getStringData("UIGameSceneTips17"), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        NoticeGameSnapShot(e) {
            var o;
            let t = this.decodePB(_.protocol.NoticeGameSnapshot, e),
                s = t.roomid,
                i = t.gameid;
            const r = a.getOrCreateDataInstance(i, s);
            let d = null == (o = n.roomManager.getRoomByIds(i, s)) ? void 0 : o.gameScene;
            if (r) {
                r.tGameData.reset(), r.tRoomData.reset(), r.tGiftData.reset(), r.tRoomData.u32RoomId = t.roomid, r.tRoomData.roomUuidJs = t.roomUuidJs, r.tRoomData.u32GameID = t.gameid, r.tRoomData.u32OwnerId = t.room_owner_id, r.tRoomData.u32Buyin = t.self_buyin, n.StringTools.deepCopy(t.params, r.tRoomData.pkRoomParam), n.StringTools.deepCopy(t.rstate, r.tRoomData.pkRoomState), n.StringTools.deepCopy(t.tstate, r.tRoomData.pkTableStates), r.tRoomData.u32Stake = t.self_stake, r.tRoomData.m_kStraddleList.push(r.tRoomData.pkTableStates.curr_straddle_seatid), n.StringTools.deepCopy(t.allFeeItems, r.tRoomData.pkPayMoneyItem), r.tRoomData.kingBee = r.tRoomData.pkPayMoneyItem.emotionFee2.needCoin, r.tRoomData.isvirtual = t.isvirtual, r.tRoomData.is_quick_sit = t.is_quick_sit, r.tRoomData.isNowCritTime = t.isNowCritTime, r.tGameData.i32RoomId = t.roomid, r.tGameData.i32DealerSId = r.tRoomData.pkTableStates.curr_dealer_seatid, r.tGameData.i32SBSid = r.tRoomData.pkTableStates.curr_sb_seatid, r.tGameData.i32BBSid = r.tRoomData.pkTableStates.curr_bb_seatid, r.tRoomData.anyoneAllin = t.anyoneAllin, r.tRoomData.allPlayersCount = t.allPlayersCount, n.dataHandler.getUserData().m_totalBuyOut = t.total_buyout;
                for (let e = 0; e < r.tRoomData.pkTableStates.players.length; e++) {
                    let o = r.tRoomData.pkTableStates.players[e];
                    o.headurl = n.dataHandler.getUserData().getImageURL(o.headurl), r.tRoomData.addTablePlayer(o), o.playerid === n.dataHandler.getUserData().getUserIdByGameID(i) && (r.tGameData.m_u32RoundBet = o.round_bet)
                }
                n.StringTools.deepCopy(t.prohibit_sitdown_list, r.tRoomData.prohibit_sitdown_list), n.StringTools.deepCopy(t.buyin_infos, r.tRoomData.buyinInfos), r.tRoomData.starSeats = t.starSeats, r.tRoomData.identity = t.identity, n.StringTools.deepCopy(t.voicePrivate, r.tRoomData.voicePrivate), n.StringTools.deepCopy(t.inviterSeats, r.tRoomData.inviterSeats), r.tRoomData.nextCustomBarrageFee = t.nextCustomBarrageFee, r.tRoomData.auth = t.auth, r.tRoomData.forbidden = t.forbidden, r.tRoomData.openCustomBarrage = t.openCustomBarrage, r.tRoomData.openTablePlayerCustomBarrage = t.openTablePlayerCustomBarrage, r.tRoomData.muteCustomBarrageSeconds = t.muteCustomBarrageSeconds, r.tRoomData.currency = n.appConfig.getWalletConfig().getTempCurrency(t.params), r.tRoomData.curConvertedBringChipsNum = -1, r.tGiftData.setGiftBanner(t.banner), r.tGiftData.setGiftAnnouncement(t.announcement), r.tGiftData.addGiftInfoList(t.tipFees), r.tGiftData.addGiftRankListTops(t.rankPlayers);
                for (let e = 0; e < n.StringTools.getArrayLength(t.news); ++e) {
                    let o = _.protocol.RoomNews.create(t.news[e]);
                    r.tGiftData.addGiftNewsInfo(o, !1)
                }
                r.tGameData.m_u32AddTimeCount = t.actiontime_count, n.StringTools.deepCopy(t.quickRaise, r.tRoomData.quickraise), n.tools.dealRaiseData(r.tRoomData.quickraise.raise3), n.tools.dealRaiseData(r.tRoomData.quickraise.raise5), n.StringTools.deepCopy(t.club_createrids, r.tGameData.club_createrids), n.StringTools.deepCopy(t.dynamicConfig, r.tRoomData.pkDynamicConfig)
            }
            t.autoaddactiontime_count > 0 && n.TT.showMsg(n.config.getStringData("AutoAddTimeTips" + t.autoaddactiontime_count), n.Enum.ToastType.ToastTypeSuccess, !1, !1, d), n.MessageCenter.send("on_snapshot_roominfo", r), n.MessageCenter.send("starData"), this.RequestGetGameUUIdsJs(s)
        }
        RequestSitdown(e, o) {
            var t, s;
            if (null != (t = n.geoComplyManager) && t.isGeoTokenRequired()) return void(null == (s = n.geoComplyManager) || s.requestValidToken(((t = "") => {
                t && this.RequestSitdown(e, o)
            }), (() => {})));
            let a = n.native.GetLocation(!0),
                i = null == n.dataHandler.getUserData().user_ip ? "127.0.0.1" : n.dataHandler.getUserData().user_ip,
                r = {
                    latitude: a.latitude,
                    longtitude: a.longitude,
                    ip: i
                },
                d = {
                    roomid: e,
                    seatid: o,
                    position: r
                };
            var c;
            n.appConfig.getSecurityConfig().useGeoComply && (d.geoComplyToken = null == (c = n.geoComplyManager) ? void 0 : c.getGeoToken());
            let g = _.protocol.RequestSitDown.encode(d).finish();
            this.sendGameMsg(g, _.protocol.MSGID.MsgID_SitDown_Request, e)
        }
        RequestSituation(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestRoomSituation.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_Room_Situation_Request, e)
        }
        ResponseSitDown(e, o, t, s, i) {
            var r;
            let d = this.decodePB(_.protocol.ResponseSitDown, e),
                c = null == (r = n.roomManager.getRoomByIds(s, i)) ? void 0 : r.gameScene;
            if (d) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                console.log(`GameNetWork - response: MsgID_SitDown_Response, resp = ${JSON.stringify(d)}`);
                let o = d.error,
                    t = null;
                if (32 == o) t = "on_need_buyin", n.MessageCenter.send(t, e);
                else if (97 == o) t = this.getFairGameMessagei18KeyByPlatform("ServerErrorCode97"), n.TT.showMsg(n.StringTools.formatC(n.config.getStringData(t), d.playername.toString()), n.Enum.ToastType.ToastTypeError, !1, !0, c);
                else if (511 == o) t = "ErrorToast30", n.TT.showMsg(n.StringTools.formatC(n.config.getStringData(t), d.playername.toString()), n.Enum.ToastType.ToastTypeError, !1, !0, c);
                else if (1260 == o) t = "on_need_slider_verify_cash_game", n.MessageCenter.send(t, {
                    msg: d,
                    gameData: e
                });
                else if (1261 == o) {
                    t = "slider_verify_toast_result_forbid_txt";
                    let e = n.config.getStringData(t);
                    n.TT.showMsg(n.StringTools.formatC(e, d.authVerifyCD), n.Enum.ToastType.ToastTypeError, !1, !0, c)
                } else if (1301 == o) {
                    t = "GameScene_sitDownLimit_panel_view_panel_des_2";
                    let o = n.StringTools.formatC(n.config.getStringData(t), d.limit.num, d.limit.max);
                    n.MessageCenter.send("sit_down_limit", {
                        msg: o,
                        gameData: e
                    })
                } else if (31121 === o) {
                    let e = n.config.getStringData("ServerErrorCode31121");
                    n.popUp.showMsgI18n({
                        title: "Attention",
                        txt: e,
                        msgType: n.Enum.ToastType.ToastTypeWarning,
                        cashGameScene: c
                    })
                } else if (515 === o) t = "ServerErrorCode515_low_re_buyin", n.TT.showMsg(n.config.getStringData(t), n.Enum.ToastType.ToastTypeError, !1, !0, c);
                else if (o == M.GEOCOMPLY_INVAILD || o == M.GEOCOMPLY_SERVICE_ERROR) {
                    var g, l;
                    t = o == M.GEOCOMPLY_INVAILD ? "GEOCOMPLY_INVAILD" : "GEOCOMPLY_SERVICE_ERROR";
                    let e = n.tryParseJSON(d.failedReasons) || {},
                        a = null == (g = n.roomManager.getRoomByIds(s, i)) ? void 0 : g.gameScene;
                    null == (l = n.geoComplyManager) || l.serverErrorHandler(e, a, this.RequestSitdown.bind(this, i, s), null, {
                        ErrorType: "CashGame_SitDown_CheckFailed",
                        ErrorCode: o.toString(),
                        ErrorDetails: JSON.stringify(e)
                    }, !0)
                } else t = d.error.toString(), n.ToastError(d.error, !0, s, i);
                var m;
                if (n.MessageCenter.send("resp_sit_down_failed", {
                        msg: d,
                        gameData: e
                    }), d.error > 1) null == (m = h.getInstance()) || m.traceChildEvent(R.SeatDown, "ResponseSitDown_FAILED", {
                    event: "ResponseSitDown_FAILED",
                    reason: JSON.stringify(d),
                    errorL10n: t
                }, !1, !0)
            } else {
                var p;
                null == (p = h.getInstance()) || p.traceChildEvent(R.SeatDown, "ResponseSitDown_FAILED", {
                    event: "ResponseSitDown_FAILED",
                    reason: "empty or invalid answer from server"
                }, !1, !0)
            }
        }
        NoticeSitDown(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeSitDown, e);
            const d = a.getDataInstanceByGameAndRoomId(s, i);
            if (r)
                if (this.checkValidGameData(s, i)) {
                    var c;
                    let e = r.player;
                    d.tRoomData.addTablePlayer(e), n.MessageCenter.send("on_sitdown_succ", {
                        playerid: e.playerid,
                        gameData: d
                    }), n.roomManager.isAutoJoinedRoom(i) || (n.dynamicPromoController.incrementPopupTrigger(D.LobbyPopup, I.CashGameSitIn), n.appConfig.getGeneralConfig().multiWindowEnabled && n.dynamicPromoController.showPromoPopup(D.LobbyPopup, I.CashGameSitIn)), null == (c = h.getInstance()) || c.traceChildEvent(R.SeatDown, "ResponseSitDown_SUCCESS", {
                        event: "ResponseSitDown_SUCCESS",
                        gameType: s,
                        currentRoom: r.roomid
                    })
                } else {
                    var g;
                    if (d && r.roomid != i) null == (g = h.getInstance()) || g.traceChildEvent(R.SeatDown, "ResponseSitDown_for_another_room", {
                        event: "ResponseSitDown_FAILED",
                        reason: "current room id does not match with answer room id from server",
                        gameType: s,
                        currentRoom: i,
                        responseRoom: r.roomid
                    })
                }
        }
        requestHeartBeat(e) {
            p.hasInstance() && p.getInstance().traceHeartBeat(u.Request, n.netWork, g.SeverType_Game, "game");
            let o = {
                    uid: n.dataHandler.getUserData().getUserIdByGameID(e),
                    position: this.getPositionInfo(!0)
                },
                t = _.protocol.RequestHeartBeat.encode(o).finish();
            return this.sendGameMsg(t, _.protocol.MSGID.MsgID_HeartBeat_Request, 0, g.SeverType_Game, e)
        }
        responseHeartBeat(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseHeartBeat, e);
            if (null != i) {
                let e = i.uid;
                console.log("uid::->>" + e), n.netWorkManager.onGameHeartBeat(s)
            }
            p.hasInstance() && p.getInstance().traceHeartBeat(u.Response, n.netWork, g.SeverType_Game, "game")
        }
        getPositionInfo(e = !1) {
            if (_.protocol.PositionInfo) {
                let o = n.native.GetLocation(e),
                    t = n.dataHandler.getUserData().user_ip;
                return {
                    longtitude: o.latitude,
                    latitude: o.longitude,
                    ip: null == t ? "127.0.0.1" : t
                }
            }
        }
        RequestBuyin(e, o, s) {
            var a, i, r;
            if (null != (a = n.geoComplyManager) && a.isGeoTokenRequired()) return void(null == (r = n.geoComplyManager) || r.requestValidToken(((t = "") => {
                t && this.RequestBuyin(e, o, s)
            }), (() => {})));
            if (null == (i = n.roomManager) ? void 0 : i.getGameIdByRoomId(e)) {
                let t = n.roomManager.getRoomByIds(n.roomManager.getGameIdByRoomId(e), e);
                t && (t.lastRequestedBuyInAmount = o), t && (t.diffBuy = s)
            }
            let d = n.StringTools.serverGoldByClient(o),
                c = {
                    roomid: e,
                    amount: d,
                    withLessChip: s
                };
            var g;
            n.appConfig.getSecurityConfig().useGeoComply && (c.geoComplyToken = null == (g = n.geoComplyManager) ? void 0 : g.getGeoToken());
            t("[GameNetWork] => RequestBuyin", c);
            let l = _.protocol.RequestBuyin.encode(c).finish();
            return this.sendGameMsg(l, _.protocol.MSGID.MsgID_Buyin_Request, e)
        }
        RequestBuyout(e, o) {
            let t = {
                    roomid: e,
                    buyout_gold: n.StringTools.serverGoldByClient(o)
                },
                s = _.protocol.RequestBuyout.encode(t).finish();
            return this.sendGameMsg(s, _.protocol.MSGID.MsgID_Buyout_Request, e)
        }
        RequestModifyBuyinLimit(e, o, t, s, a) {
            let i = {
                    buyin_limit: n.StringTools.serverGoldByClient(o),
                    last_buyin_clubid: s,
                    last_buyin_ownerid: t,
                    last_buyin_clubname: a
                },
                r = _.protocol.RequestModifyBuyinLimit.encode(i).finish();
            return this.sendGameMsg(r, _.protocol.MSGID.MsgID_ModifyBuyinLimit_Request, e)
        }
        RequestGameActionTurn(e) {
            let o = n.dataHandler.getUserData().getUserTokenByGameID();
            if ("" === o) return;
            let t = {
                    roomid: e,
                    token: o
                },
                s = _.protocol.RequestGameActionTurn.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_GameActionTurn_Request, e)
        }
        ResponseGameActionTurn(e) {
            let o = this.decodePB(_.protocol.ResponseGameActionTurn, e);
            if (o) {
                o.error;
                console.log(o)
            }
        }
        ResponseBuyin(e, o, s, i, r) {
            var d;
            t("[GameNetWork] ==> ResponseBuyin");
            let c = this.decodePB(_.protocol.ResponseBuyin, e),
                g = null == (d = n.roomManager.getRoomByIds(i, r)) ? void 0 : d.gameScene;
            if (c) {
                const e = a.getDataInstanceByGameAndRoomId(i, r);
                t("[GameNetWork] => ResponseBuyin", c);
                let o = c.error,
                    s = c.playername;
                if (n.MessageCenter.send("buyin_failed_by_server", {
                        msg: c,
                        gameData: e
                    }), 43 == o) n.TT.showMsg(n.config.getStringData("ServerErrorCode" + o), n.Enum.ToastType.ToastTypeError, !1, !0, g);
                else if (97 === o) {
                    let e = this.getFairGameMessagei18KeyByPlatform("ServerErrorCode97");
                    n.TT.showMsg(n.StringTools.formatC(n.config.getStringData(e), s), n.Enum.ToastType.ToastTypeError, !1, !0, g)
                } else if (1301 == o) {
                    let o = n.StringTools.formatC(n.config.getStringData("GameScene_sitDownLimit_panel_view_panel_des_2"), c.limit.num, c.limit.max);
                    n.MessageCenter.send("sit_down_limit", {
                        msg: o,
                        gameData: e
                    })
                } else if (114 == o) {
                    let t = i;
                    t == n.Enum.GameId.Bet || n.roomManager.checkGameIsZoom(t) || t == n.Enum.GameId.Allin || e.tRoomData.pkRoomParam.game_mode != n.Enum.CreateGameMode.CreateGame_Mode_Short ? t == n.Enum.GameId.Plo || t === n.Enum.GameId.Plo5 ? -1 != e.tRoomData.i32SelfSeat && n.TP.showTimeMsg(n.StringTools.formatC(n.config.getStringData("Plo_game_short_recharge_tips_text"), c.min_limit), this.showGameShop.bind(this), this.gameStandUp.bind(this, e), !1, !1, "", g) : t == n.Enum.GameId.Bet && -1 != e.tRoomData.i32SelfSeat && (e.tRoomData.haveEnoughMoneyForBuyIn() ? n.ToastError(o, !0, i, r) : n.TP.showTimeMsg(n.config.getStringData("ServerErrorCode42"), this.showGameShop.bind(this), this.gameStandUp.bind(this, e), !1, !1, "", g)) : -1 != e.tRoomData.i32SelfSeat && n.TP.showTimeMsg(n.StringTools.formatC(n.config.getStringData("Aof_game_short_recharge_tips_text"), c.min_limit), this.showGameShop.bind(this), this.gameStandUp.bind(this, e), !1, !1, "", g)
                } else if (o == M.GEOCOMPLY_INVAILD || o == M.GEOCOMPLY_SERVICE_ERROR) {
                    var l;
                    let e = n.tryParseJSON(c.failedReasons) || {},
                        t = n.roomManager.getRoomByIds(i, r),
                        s = () => {
                            t && this.RequestBuyin(r, null == t ? void 0 : t.lastRequestedBuyInAmount, null == t ? void 0 : t.diffBuy)
                        };
                    null == (l = n.geoComplyManager) || l.serverErrorHandler(e, g, s, null, {
                        ErrorType: "CashGame_BuyIn_CheckFailed",
                        ErrorCode: o.toString(),
                        ErrorDetails: JSON.stringify(e)
                    }, !0)
                } else n.ToastError(o, !0, i, r)
            }
        }
        showGameShop() {
            n.SHOP.RechargeClick()
        }
        gameStandUp(e) {
            var o;
            null != e.tRoomData.GetTablePlayer(n.dataHandler.getUserData().getUserIdByGameID(null == (o = e.tRoomData) ? void 0 : o.u32GameID)) && n.gameNet.RequestStandup(e.tRoomData.u32RoomId)
        }
        NoticeBuyin(e, o, s, i, r) {
            let d = _.protocol.NoticeBuyin,
                c = "";
            if (d || (c = "NoticeBuyInEmpty"), d) {
                let o = new Uint8Array(e),
                    s = d.decode(o);
                if (t("[GameNetWork] => NoticeBuyin", s), this.checkValidGameData(i, r)) {
                    const e = a.getDataInstanceByGameAndRoomId(i, r);
                    if (s.playerid == n.dataHandler.getUserData().getUserIdByGameID(i)) {
                        const o = n.roomManager.getRoomByIds(i, r);
                        e.tRoomData.isAntiRatHoleBuyIn = !o.checkGameIsZoom(o.gameId) && !o.lastRequestedBuyInAmount && !e.tRoomData.u32Buyin, e.tRoomData.hasRecvBuyinNotice = !0, e.tRoomData.recNeedBuyNoticeData = s, e.tRoomData.u32Buyin = s.self_buyin, e.tRoomData.buyinAmount = s.buyin_amount, e.tRoomData.playerBuyoutMeta = null, n.MessageCenter.send("on_NoticeBuyin", s), n.worldNet.requestGetUserData(), n.dataHandler.getUserData().m_totalBuyOut = s.self_buyout;
                        let t = e.tRoomData.GetTablePlayer(n.dataHandler.getUserData().getUserIdByGameID(i));
                        null != t ? t.in_game && !t.inStay && t.last_action != n.Enum.ActionType.Enum_Action_Fold || (e.tRoomData.u32Stake = s.self_stake, t.stake = s.self_stake, n.MessageCenter.send("on_update_self_stake", {
                            seatid: t.seatid
                        }), t.inStay && n.gameNet.RequestBackPosition(e.tRoomData.u32RoomId)) : s.is_auto ? c = "is_auto is true" : n.gameNet.RequestSitdown(e.tRoomData.u32RoomId, e.tRoomData.u32PrePickSeatId)
                    } else {
                        let o = e.tRoomData.GetTablePlayer(s.playerid);
                        null != o ? (o.stake = s.self_stake, n.MessageCenter.send("on_update_self_stake", {
                            seatid: o.seatid,
                            playerid: s.playerid
                        })) : s.playerid == n.dataHandler.getUserData().u32Uid && (c = "wrongPlayerID")
                    }
                }
            }
            if (c.length > 0) {
                var g;
                let e = {
                    reason: c,
                    u32Uid: n.dataHandler.getUserData().u32Uid
                };
                null == (g = h.getInstance()) || g.trace(R.BUYIN_RESPONSE_NOT_VALID, c, e, !1, !0)
            }
        }
        ResponseRoomSituation(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseRoomSituation, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticeRoomSituation(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeRoomStituation, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                let o = r.buyin_player_list;
                for (let t = 0; t < o.length; ++t) {
                    let s = o[t];
                    e.tRoomData.updateBuyinInfo(s)
                }
                n.MessageCenter.send("on_room_situation", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestStandup(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestStandup.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_Standup_Request, e)
        }
        ResponseStandup(e, o, t, s, a) {
            var i;
            let r = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene,
                d = this.decodePB(_.protocol.ResponseStandup, e);
            if (d)
                if (1255 == d.error) {
                    let e = n.config.getStringData("ServerErrorCode1255"),
                        o = n.tools.getStringByTime(d.starCD);
                    n.TT.showMsg(n.StringTools.formatC(e, o), n.Enum.ToastType.ToastTypeError, !1, !1, r)
                } else n.ToastError(d.error, !1, s, a)
        }
        NoticeStandup(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeStandup, e);
            if (r && a.getDataInstanceByGameAndRoomId(s, i)) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_standup_succ", {
                    target_uid: r.target_uid,
                    gameData: e
                })
            }
        }
        NoticeBuyinToApplication(e) {}
        ResponseSnapshot(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseSnapshot, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        RequestSnapshot(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestSnapshot.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_Snapshot_Request, e)
        }
        RequestAddRoomTimeCount(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestAddRoomTimeCount.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_AddRoomTimeCount_Request, e)
        }
        Response_AddRoomTimeCount(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseAddRoomTimeCount, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticeAddRoomTimeCount(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeAddRoomTimeLeft, e);
            const d = a.getDataInstanceByGameAndRoomId(s, i);
            r && this.checkValidGameData(s, i) && (d.tRoomData.u32DelayLeft = r.leftcount), n.MessageCenter.send("on_add_room_timecount", d)
        }
        RequestLeaveRoom(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestLeaveRoom.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_LeaveRoom_Request, e) && this.addRequestTimeout(_.protocol.MSGID.MsgID_LeaveRoom_Request, e)
        }
        Response_LeaveRoom(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseLeaveRoom, e);
            i && (this.responseReceived(_.protocol.MSGID.MsgID_LeaveRoom_Request, i.error ?? i.Error ?? i.code ?? 1, a), n.roomManager.onResponse_LeaveRoom(i, s, a))
        }
        RequestQuickLeave(e) {
            let o = {
                    RoomID: e
                },
                t = _.protocol.RequestQuickLeave.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_QuickLeave_Request, e)
        }
        Response_QuickLeaveRoom(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseQuickLeave, e);
            i && n.roomManager.onResponse_LeaveRoom(i, s, a)
        }
        Response_QuickLeaveNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NotiQuickLeave, e);
            if (r && r.PlayerID == n.dataHandler.getUserData().getUserIdByGameID(s)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("quick_leave_notice", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestPauseGame(e, o) {
            let t = {
                    roomid: e,
                    isPause: o
                },
                s = _.protocol.RequestPauseGame.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_PauseGame_Request, e)
        }
        ResponsePauseGame(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponsePauseGame, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticePauseGame(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticePauseGame, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                if (this.checkValidGameData(s, i)) {
                    var d;
                    e.tRoomData.pkRoomState.isPause = r.isPause, e.tRoomData.pkRoomState.paused = r.paused;
                    let o = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                    r.isPause ? n.TT.showMsg(n.config.getStringData("PauseGame"), n.Enum.ToastType.ToastTypeWarning, !1, !1, o) : n.TT.showMsg(n.config.getStringData("PauseGame2"), n.Enum.ToastType.ToastTypeWarning, !1, !1, o)
                }
                n.MessageCenter.send("on_PauseGame_succ", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestStayPosition(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestStayPosition.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_StayPosition_Request, e)
        }
        ResponseStayPosition(e, o, t, s, i) {
            var r;
            let d = null == (r = n.roomManager.getRoomByIds(s, i)) ? void 0 : r.gameScene,
                c = this.decodePB(_.protocol.ResponseStayPosition, e);
            if (c) {
                1 == c.error ? n.TT.showMsg(n.config.getStringData("ErrorToast34"), n.Enum.ToastType.ToastTypeWarning, !1, !1, d) : n.ToastError(c.error, !1, s, i);
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_response_stay_position", {
                    error: c.error,
                    gameData: e
                })
            }
        }
        NoticePlayerStayPosition(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticePlayerStay, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                for (let o = 0; o < r.players.length; o++) {
                    let t = r.players[o];
                    e.tRoomData.updateTablePlayer(t.playerid, r.players[o]), n.MessageCenter.send("on_leave_seat", {
                        playerid: r.players[o].playerid,
                        gameData: e
                    })
                }
            }
        }
        ResponseBuyout(e, o, t, s, a) {
            var i;
            let r = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene,
                d = this.decodePB(_.protocol.ResponseBuyout, e);
            d && (n.ToastError(d.error, !1, s, a), 1 == d.error ? n.TT.showMsg(n.config.getStringData("UIGameSceneTips9"), n.Enum.ToastType.ToastTypeSuccess, !1, !1, r) : n.TT.showMsg(n.config.getStringData("UIGameSceneTips10"), n.Enum.ToastType.ToastTypeError, !1, !1, r))
        }
        NoticeBuyout(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeBuyout, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                if (r.seat_no == e.tRoomData.i32SelfSeat) {
                    n.dataHandler.getUserData().m_totalBuyOut = r.total_buyout, e.tRoomData.u32Stake = e.tRoomData.u32Stake - r.buyout_gold;
                    let o = n.StringTools.serverGoldToShowNumber(r.buyout_gold),
                        t = n.StringTools.serverGoldToShowNumber(r.total_buyout);
                    n.dataHandler.getUserData().m_totalBuyOut = r.total_buyout;
                    let a = e.tRoomData.u32GameID;
                    if (r.is_auto && a != n.Enum.GameId.Bet && !n.roomManager.checkGameIsZoom(a) && a != n.Enum.GameId.Allin && e.tRoomData.pkRoomParam.game_mode == n.Enum.CreateGameMode.CreateGame_Mode_Short) n.MessageCenter.send("update_player_buyout", {
                        buyoutGold: o,
                        gameData: e
                    });
                    else {
                        var d;
                        let e = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                        n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("UIGameSceneTips11"), o, t), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
                    }
                }
                for (let o = 0; o < e.tRoomData.kTablePlayerList.length; ++o) {
                    let t = e.tRoomData.kTablePlayerList[o];
                    if (t && t.seatid == r.seat_no) {
                        t.stake = r.remain_gold;
                        break
                    }
                }
                n.MessageCenter.send("update_player_stake", {
                    seat_id: r.seat_no,
                    stake: r.remain_gold,
                    gameData: e
                })
            }
        }
        RequestCheckAllianceRoomPriviledge(e, o) {
            let t = {
                    playerid: e
                },
                s = _.protocol.RequestCheckAllianceRoomPriviledge.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_CheckAllianceRoomPriviledge_Request, o)
        }
        responseCheckAllianceRoomPriviledge(e) {
            let o = this.decodePB(_.protocol.ResponseCheckAllianceRoomPriviledge, e);
            o && n.MessageCenter.send("isHavePriviledge", 1 == o.error)
        }
        RequestForceStandup(e, o) {
            let t = {
                    roomid: e,
                    targetid: o
                },
                s = _.protocol.RequestForceStandup.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_ForceStandup_Request, e)
        }
        HandleForceStandupResponse(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseForceStandup, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        HandleForceStandupNotice(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeForceStandup, e);
            if (i && this.checkValidGameData(s, a)) {
                var r;
                let e = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene;
                i.playerid == n.dataHandler.getUserData().getUserIdByGameID(s) ? n.TT.showMsg(n.config.getStringData("ForceStandup2"), n.Enum.ToastType.ToastTypeWarning, !1, !1, e) : n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("ForceStandup"), i.playername), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        RequestProhibitSitdown(e, o, t) {
            let s = {
                    roomid: e,
                    targetid: o,
                    isProhibitSitdown: t
                },
                a = _.protocol.RequestProhibitSitdown.encode(s).finish();
            this.sendGameMsg(a, _.protocol.MSGID.MsgID_ProhibitSitdown_Request, e)
        }
        HandleProhibitSitdownResponse(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseProhibitSitdown, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        HandleProhibitSitdownNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeProhibitSitdown, e);
            if (r && this.checkValidGameData(s, i)) {
                var d;
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                let o = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                r.playerid == n.dataHandler.getUserData().getUserIdByGameID(s) ? r.isProhibitSitdown ? n.TT.showMsg(n.config.getStringData("ProhibitSitdown2"), n.Enum.ToastType.ToastTypeWarning, !1, !1, o) : n.TT.showMsg(n.config.getStringData("ProhibitSitdown3"), n.Enum.ToastType.ToastTypeSuccess, !1, !1, o) : r.isProhibitSitdown ? n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("ProhibitSitdown"), r.playername), n.Enum.ToastType.ToastTypeInfo, !1, !1, o) : n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("ProhibitSitdown4"), r.playername), n.Enum.ToastType.ToastTypeInfo, !1, !1, o), e.tRoomData.prohibit_sitdown_list = r.prohibit_sitdown_list, n.MessageCenter.send("update_prohibit_button")
            }
        }
        RequestPhotoVerify(e, o) {
            let t = {
                    roomid: e,
                    targetid: o
                },
                s = _.protocol.RequestPhotoVerify.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_PhotoVerify_Request, e)
        }
        HandlePhotoVerifyResponse(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponsePhotoVerify, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        HandleNotiPlayerHoleCardNotice(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NotiPlayerHoleCard, e);
            if (i) {
                const e = n.GameDataManager.getDataInstanceByGameAndRoomId(s, a);
                n.MessageCenter.send("on_game_notiplayer_holecard_noti", {
                    msg: i,
                    gameData: e
                })
            }
        }
        HandlePhotoVerifyNotice(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticePhotoVerify, e);
            if (i && this.checkValidGameData(s, a)) {
                var r;
                let e = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene;
                i.ownerid == n.dataHandler.getUserData().getUserIdByGameID(s) && n.TT.showMsg(n.config.getStringData("PhotoVerifyRequestSucc"), n.Enum.ToastType.ToastTypeWarning, !1, !1, e), i.targetid == n.dataHandler.getUserData().getUserIdByGameID(s) && (n.TT.showMsg(n.config.getStringData("PhotoVerifyRequest"), n.Enum.ToastType.ToastTypeInfo, !1, !1, e), n.MessageCenter.send("on_photo_verify"))
            }
        }
        RequestSendCardFun(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestSendCardFun.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_SendCard_Fun_Request, e)
        }
        ResponsePlayerSendCardFun(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseSendCardFun, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticePlayerSendCardFun(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeRoomCardFun, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_game_send_card_fun", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestForceShowCard(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestForceShowCard.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_ForceShowCard_Request, e)
        }
        ResponseForceShowCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseForceShowCard, e);
            if (r && (n.ToastError(r.error, !1, s, i), 2e3 === r.error)) {
                a.getDataInstanceByGameAndRoomId(s, i).tRoomData.spectatorRevealEnabled = !1
            }
        }
        NoticeForceShowCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeForceShowCard, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_force_showcard", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestReplayForceShowCard(e, o) {
            let t = _.protocol.RequestReplayForceShowCard.create();
            t.roomid = e, t.game_uuid = o, this.replayForceShowCardGameUUID = o;
            let s = _.protocol.RequestReplayForceShowCard.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_ReplayForceShowCard_Request, e)
        }
        _ResponseReplayForceShowCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseReplayForceShowCard, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_replay_forceshow_error", {
                    msg: r,
                    gameDataInstance: e,
                    gameUUID: this.replayForceShowCardGameUUID
                })
            }
        }
        _NoticeReplayForceShowCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeReplayForceShowCard, e);
            if (this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_replay_forceshow", {
                    msg: r,
                    gameDataInstance: e,
                    gameUUID: this.replayForceShowCardGameUUID
                }), this.replayForceShowCardGameUUID = null
            }
        }
        RequestReplaySendCard(e, o) {
            let t = _.protocol.RequestReplaySendCard.create();
            t.roomid = e, t.game_uuid = o;
            let s = _.protocol.RequestReplayForceShowCard.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_ReplaySendCard_Request, e)
        }
        _ResponseReplaySendCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseReplaySendCard, e);
            if (r && (n.ToastError(r.error, !1, s, i), 0 !== r.error && 1 !== r.error && this.checkValidGameData(s, i))) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("game_replay_hide_sendout_shieldlayer", e)
            }
        }
        _NoticeReplaySendCard(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeReplaySendCard, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_replay_sendout", {
                    noti: r,
                    gameDataInstance: e
                })
            }
        }
        RequestTip(e, o, t, s) {
            let a = _.protocol.TipInfo.create();
            a.tipId = t, a.tipCount = s;
            let i = _.protocol.RequestTip.create();
            i.playerId = o, i.tipInfo = a;
            let n = _.protocol.RequestTip.encode(i).finish();
            this.sendGameMsg(n, _.protocol.MSGID.MsgId_Tip_Request, e)
        }
        _ResponseTip(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseTip, e);
            i && 1 !== i.error && n.ToastError(i.error, !1, s, a)
        }
        _NoticeRoomNews(e, o, t, s, i) {
            let n = this.decodePB(_.protocol.RoomNews, e);
            if (n) {
                var r;
                let e = _.protocol.RoomNews.create(n);
                const o = a.getDataInstanceByGameAndRoomId(s, i);
                null == o || null == (r = o.tGiftData) || r.addGiftNewsInfo(e, !0)
            }
        }
        RequestTipRecord(e, o, t, s) {
            let a = _.protocol.RequestTipRecord.create();
            a.skipId = o, a.size = t, a.tType = s;
            let i = _.protocol.RequestTipRecord.encode(a).finish();
            this.sendGameMsg(i, _.protocol.MSGID.MsgId_TipRecord_Request, e)
        }
        _ResponseTipRecord(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseTipRecord, e);
            r && (1 === r.error ? a.getDataInstanceByGameAndRoomId(s, i).tGiftData.addGiftRecordsInfo(r) : n.ToastError(r.error, !1, s, i))
        }
        RequestTipRank(e) {
            let o = _.protocol.RequestTipRank.create(),
                t = _.protocol.RequestTipRank.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgId_TipRank_Request, e)
        }
        _ResponseTipRank(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseTipRank, e);
            r && (1 === r.error ? a.getDataInstanceByGameAndRoomId(s, i).tGiftData.addGiftRankList(r.players) : n.ToastError(r.error, !1, s, i))
        }
        RequestDestroyRoom(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestDestroyRoom.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_DestroyRoom_Request, e)
        }
        ResponseDestroyRoom(e) {
            let o = this.decodePB(_.protocol.ResponseDestroyRoom, e);
            o && 1 != o.error && n.MessageCenter.send("updataGameDissolveButton")
        }
        NoticeDestroyRoom(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeDestroyRoom, e);
            if (i)
                if (this.checkValidGameData(s, a)) n.MessageCenter.send("on_room_destroy_noti", {
                    ret: i,
                    gameData: n.GameDataManager.getDataInstanceByGameAndRoomId(s, a)
                });
                else {
                    var r;
                    let e = i.room_name.split("#"),
                        o = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene,
                        t = 2;
                    const d = n.config.getCurrentLanguage();
                    d == n.Enum.LANGUAGE_TYPE.zh_CN ? t = 0 : d == n.Enum.LANGUAGE_TYPE.en_US && (t = 1), n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("ToastMessage3"), e[t]), n.Enum.ToastType.ToastTypeInfo, !1, !1, o)
                }
        }
        RequestCheckOutAndLeave(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestCheckOutAndLeave.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_CheckOutAndLeave_Request, e)
        }
        ResponseCheckOutAndLeave(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseCheckOutAndLeave, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticeCheckOutAndLeave(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeCheckOutAndLeave, e);
            if (i && this.checkValidGameData(s, a)) {
                var r;
                let e = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene;
                i.targetid, n.dataHandler.getUserData().getUserIdByGameID(s), n.TT.showMsg(n.config.getStringData("CheckOutAndLeave"), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
            }
        }
        RequestSendChat(e, o, t) {
            if (o == n.Enum.ChatType.Enum_Voice && !n.appConfig.getGameConfig().audioChatEnabled || o == n.Enum.ChatType.Enum_Emoji && !n.appConfig.getGameConfig().emojiTabEnabled) return;
            let s = t;
            o == n.Enum.ChatType.Enum_Voice && (s = "" != n.dataHandler.getUserData().nick_name.toString() ? "@" + n.dataHandler.getUserData().nick_name + "@" + s : "@noname@" + s);
            let a = {
                    roomid: e,
                    ctype: o,
                    content: s
                },
                i = _.protocol.RequestSendChat.encode(a).finish();
            this.sendGameMsg(i, _.protocol.MSGID.MsgID_SendChat_Request, e)
        }
        ResponseSendChat(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseSendChat, e);
            if (i) {
                let e = i.next_fee;
                n.GameDataManager.getDataInstanceByGameAndRoomId(s, a).tRoomData.kingBee = e, n.ToastError(i.error, !1, s, a)
            }
        }
        NoticeSendChat(e, o, t, s, r) {
            let d = this.decodePB(_.protocol.NoticeSendChat, e);
            if (d && this.checkValidGameData(s, r)) {
                const e = a.getDataInstanceByGameAndRoomId(s, r);
                if (d.ctype == n.Enum.ChatType.Enum_Voice && n.appConfig.getGameConfig().audioChatEnabled) {
                    if (n.config.getCurrentScene() == n.Enum.SCENE.GAME_SCENE) {
                        let o = d.content;
                        if (console.log("#######################NoticeSendChat content:: " + o), "#" == o[0]) n.MessageCenter.send("on_fly_emoji", {
                            Content: o,
                            gameData: e
                        });
                        else {
                            let o = d.content.split("@");
                            if (o.length <= 0) return;
                            let t = o[1],
                                s = o[2];
                            if (console.log("#######################NoticeSendChat isPlayVoice:: " + n.tools.isPlayVoice()), d.seatid != e.tRoomData.i32SelfSeat && n.tools.isPlayVoice() || d.seatid == e.tRoomData.i32SelfSeat) {
                                let o = new i;
                                o.kUrl = s, o.kSender = t, o.u32SeatId = d.seatid;
                                let a = e.tRoomData.GetTablePlayerBySeatId(d.seatid);
                                o.uid = a.playerid, e.tRoomData.voiceArr.unshift(o)
                            }
                            this.playVoice(e)
                        }
                    }
                } else d.ctype == n.Enum.ChatType.Enum_Emoji && n.appConfig.getGameConfig().emojiTabEnabled && n.MessageCenter.send("on_SendChat", {
                    seatID: d.seatid,
                    face: d.content,
                    gameData: e
                })
            }
        }
        RequestSendMagicEmoji(e, o) {
            let t = {
                    roomid: e,
                    type: o
                },
                s = _.protocol.MagicEmojiRequest.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_MagicEmoji_Request, e)
        }
        ResponseSendMagicEmoji(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.MagicEmojiResponse, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticeSendMagicEmoji(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.MagicEmojiNotice, e);
            if (console.log("#######################NoticeSendMagicEmoji :: " + r.type), r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i),
                    o = {
                        roomId: r.roomid,
                        playerId: r.playerid,
                        type: r.type
                    };
                n.MessageCenter.send("on_SendMagicEmoji", {
                    msg: o,
                    gameData: e
                })
            }
        }
        NoticeDynamicConfig(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.DynamicConfig, e);
            if (console.log("#######################NoticeDynamicConfig :: " + r), r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("on_SendNoticeDynamicConfig", {
                    msg: r,
                    gameData: e
                })
            }
        }
        playVoice(e) {
            var o;
            if (console.log("#######################playVoice :: "), e.tRoomData.voicePlaying) return;
            if (e.tRoomData.voiceArr.length <= 0) return;
            let t = e.tRoomData.voiceArr.pop(),
                a = null == (o = e.tRoomData) ? void 0 : o.u32GameID;
            if (!n.tools.isPlayVoice() && t.uid != n.dataHandler.getUserData().getUserIdByGameID(a)) return void this.playVoice(e);
            let i = e.tRoomData.GetTablePlayer(t.uid);
            if (!i) return void this.playVoice(e);
            e.tRoomData.voicePlaying = !0, e.tRoomData.last_audioID = -1, t.u32SeatId = i.seatid;
            let r = e.tRoomData.GetTablePlayerBySeatId(t.u32SeatId);
            r && (r.last_voice = t.kUrl), s.os === s.OS.IOS && s.isNative ? n.native.PlayRoomVoice(t) : s.os !== s.OS.ANDROID && n.config.GET_CLIENT_TYPE() != n.Enum.ClientType.H5WebPage || n.httpHandler.DoDownloadVoice(t, this.playVoiceError.bind(this, e.tRoomData.u32GameID, e.tRoomData.u32RoomId))
        }
        playVoiceError(e, o) {
            const t = a.getDataInstanceByGameAndRoomId(e, o);
            t.tRoomData.voicePlaying = !1, this.playVoice(t)
        }
        stopVoice(e) {
            if (n.config.getCurrentScene() != n.Enum.SCENE.GAME_SCENE && n.config.getCurrentScene() != n.Enum.SCENE.JACKFRUIT_SCENE) return;
            e.tRoomData.voicePlaying = !1, e.tRoomData.voiceArr = [];
            let o = e.tRoomData.last_voice,
                t = e.tRoomData.last_audioID;
            s.os === s.OS.IOS && s.isNative ? n.native.StopPlay() : s.os !== s.OS.ANDROID && n.config.GET_CLIENT_TYPE() != n.Enum.ClientType.H5WebPage || (-1 != t && n.AudioMgr.stopEffect(t), null != o && (n.resMgr.releaseAsset(o), e.tRoomData.last_voice = null))
        }
        RequestAddRoomTime(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestAddRoomTime.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_AddRoomTime_Request, e)
        }
        ResponseAddRoomTime(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseAddRoomTime, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        NoticeAddRoomTime(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeAddRoomTime, e);
            if (r && a.getDataInstanceByGameAndRoomId(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("add_room_time", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestInteractiveExpression(e, o, t = _.protocol.EmojiType.InterActiveNormal) {
            let s = {
                    roomid: e,
                    content: o,
                    type: t
                },
                a = _.protocol.RequestInteractiveExpression.encode(s).finish();
            this.sendGameMsg(a, _.protocol.MSGID.MsgID_InteractiveExpression_Request, e)
        }
        HandleInteractiveExpressionResponse(e, o, t, s, a) {
            var i;
            const r = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene,
                d = this.decodePB(_.protocol.ResponseInteractiveExpression, e);
            if (d)
                if (1249 == d.error) {
                    const e = Math.floor(d.left_duration / 3600),
                        o = Math.floor(d.left_duration % 3600 / 60),
                        t = Math.floor(d.left_duration % 60);
                    n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("Star_emoji_tips"), e, o, t), n.Enum.ToastType.ToastTypeWarning, !1, !1, r)
                } else 42 === d.error ? n.showOutOfFundsPopup(n.config.getStringData("ServerErrorCode42"), n.GameDataManager.getLastDataInstance(), r, (() => {
                    n.SHOP.RechargeClick()
                }), !0) : n.ToastError(d.error, !1, s, a)
        }
        HandleInteractiveExpressionNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeInteractiveExpression, e);
            if (r && a.getDataInstanceByGameAndRoomId(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                "#" == r.content[0] && n.MessageCenter.send("on_fly_emoji", {
                    Content: r.content,
                    type: r.type,
                    gameData: e
                })
            }
        }
        RequestCheckFirstJoinRoom(e, o) {
            let t = {
                roomid: o
            };
            const s = a.getDataInstanceByGameAndRoomId(e, o) || a.getDataInstanceNotJoined(e);
            s.tRoomData.u32RoomId = o;
            let i = _.protocol.RequestCheckFirstTimeJoinRoomWithPassword.encode(t).finish();
            var r;
            n.netWorkManager.isLoginGameServerSucc(e) ? this.sendGameMsg(i, _.protocol.MSGID.MsgID_RequestCheckFirstTimeJoinRoomWithPassword, o) : this.requestLoginServer(null == s || null == (r = s.tRoomData) ? void 0 : r.u32GameID)
        }
        HandResponseJoinRoomWithFirst(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseCheckFirstTimeJoinRoomWithPassword, e);
            i && (1 == i.error ? i.isfirst ? n.MessageCenter.send("Join_room", i.roomid) : (n.roomManager.resetRoomCache(n.Enum.GameId.Texas, i.roomid), n.roomManager.RequestJoinRoom(n.Enum.GameId.Texas, i.roomid)) : n.ToastError(i.error, !1, s, a))
        }
        RequestCheckFirstBuyin(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestCheckFirstTimeBuyinWithPassword.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_RequestCheckFirstTimeBuyinWithPassword, e)
        }
        HandResponseBuyinWithFirst(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseCheckFirstTimeBuyinWithPassword, e);
            if (r)
                if (1 == r.error) {
                    const e = a.getDataInstanceByGameAndRoomId(s, i);
                    r.isfirst ? n.MessageCenter.send("buyin_room", {
                        room_id: r.room_id,
                        gameData: e
                    }) : n.gameNet.RequestSitdown(e.tRoomData.u32RoomId, e.tRoomData.u32PrePickSeatId)
                } else n.ToastError(r.error, !1, s, i)
        }
        HandResponsePlayerStake(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeUpdateMoney, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                r.gameData = e, n.MessageCenter.send("update_player_stake", r)
            }
        }
        RequestBuyinWithPassword(e, o) {
            let t = {
                    roomid: e,
                    buyin_password: o
                },
                s = _.protocol.RequestCheckBuyinPassword.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgID_RequestCheckBuyinPassword, e)
        }
        HandBuyinResponsePwd(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseCheckBuyinPassword, e);
            if (r)
                if (1 == r.error) {
                    const e = a.getDataInstanceByGameAndRoomId(s, i);
                    n.MessageCenter.send("tipspanel_removed", e), this.RequestSitdown(null == e ? void 0 : e.tRoomData.u32RoomId, null == e ? void 0 : e.tRoomData.u32PrePickSeatId)
                } else n.ToastError(r.error, !1, s, i)
        }
        RequestJoinRoomWithPassword(e, o, t) {
            let s = n.md5.md5(t);
            console.log("====RequestJoinRoomWithPassword=> join_password = " + s);
            let i = {
                roomid: o,
                join_password: s
            };
            const r = a.getDataInstanceByGameAndRoomId(e, o) || a.getDataInstanceNotJoined(e);
            r && (r.tRoomData.u32RoomId = o, r.tRoomData.roomPassword = s);
            let d = _.protocol.RequestJoinRoomWithPassword.encode(i).finish();
            var c;
            n.netWorkManager.isLoginGameServerSucc(e) ? this.sendGameMsg(d, _.protocol.MSGID.MsgID_RequestJoinRoomWithPassword, o) : this.requestLoginServer(null == r || null == (c = r.tRoomData) ? void 0 : c.u32GameID)
        }
        HandResponseJoinRoomWithPassword(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseJoinRoomWithPassword, e);
            i && (1 == i.error ? (n.roomManager.resetRoomCache(n.Enum.GameId.Texas, i.roomid), n.roomManager.RequestJoinRoom(n.Enum.GameId.Texas, i.roomid)) : (n.SwitchLoadingView.hide(), n.roomManager.resetRoomCache(n.Enum.GameId.Texas, i.roomid), n.ToastError(i.error, !1, s, a)))
        }
        static getInstance() {
            return S.g_instance || (S.g_instance = new S, S.g_instance.init()), S.g_instance
        }
        HandleNoticeGlobalMessage(e) {
            let o = this.decodePB(_.protocol.NoticeGlobalMessage, e);
            if (o) {
                let e = o.repeat_count,
                    t = o.msg;
                for (let o = 0; o < e; o++) {
                    let e = new d;
                    if (n.config.getCurrentLanguage() != n.Enum.LANGUAGE_TYPE.zh_CN) {
                        let e = t.indexOf("#", 0);
                        t = t.substr(0, e)
                    } else {
                        let e = t.indexOf("#", 0);
                        t = t.substr(e + 1, t.length)
                    }
                    e.str = t, e.msgType.push(l.PUSH_ALLIN), r.getInstance().addPushNotice(e)
                }
            }
        }
        RequestGetGameUUIdsJs(e) {
            let o = _.protocol.RequestGetGameUUIdsJs.encode({}).finish();
            this.sendGameMsg(o, _.protocol.MSGID.MsgId_GetGameUUIdsJs_Request, e)
        }
        ResponseGetGameUUIdsJsMessage(e) {
            this.decodePB(_.protocol.ResponseGetGameUUIdsJs, e)
        }
        NoticeGetGameUUIdsJsMessage(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGetGameUUIdsJs, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.game_uuids_js = [];
                let o = n.StringTools.getArrayLength(r.list);
                for (let t = 0; t < o; t++) e.tRoomData.game_uuids_js.push(r.list[t].game_uuid_js)
            }
        }
        RequestPlayerBuyinsInfo(e) {
            let o = {
                    roomid: e
                },
                t = _.protocol.RequestPlayerBuyinsInfo.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_PlayerBuyinsInfo_Request, e)
        }
        ResponsePlayerBuyinsInfo(e) {
            this.decodePB(_.protocol.ResponsePlayerBuyinsInfo, e)
        }
        NoticePlayerBuyinsInfo(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticePlayerBuyinsInfo, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.StringTools.deepCopy(r.buyin_infos, e.tRoomData.buyinInfos), n.MessageCenter.send("update_buyinInfo", r.buyin_infos)
            }
        }
        RequestGetRoomLimitID(e) {
            let o = {
                    roomid: e,
                    mo_player: n.native.IsSimulator()
                },
                t = _.protocol.RequestGetRoomLimitId.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgId_GetRoomLimit_ID_Request, e)
        }
        ResponseGetRoomLimitID(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.ResponseGetRoomLimitId, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                1 == r.Error ? (n.MessageCenter.send("change_tables", e), n.roomManager.RequestJoinRoom(s, r.roomid)) : 1302 == r.Error ? n.MessageCenter.send("sit_down_limit_error", {
                    msg: r.Error,
                    gameData: e
                }) : n.ToastError(r.Error, !1, s, i)
            }
        }
        NoticeCritisicmStart(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeCritisicmStart, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("notice_critisicm_start", {
                    msg: r,
                    gameData: e
                })
            }
        }
        NoticeCritisicmNotEnoughMoney(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeNotEnougnMoney2Crit, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("notice_critisicm_not_enough", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestGuessBet(e, o, t, s) {
            let a = {
                    option: o,
                    amonut: n.StringTools.serverGoldByClient(t),
                    bet_seqno: s
                },
                i = _.protocol.GuessBetReq.encode(a).finish();
            return this.sendGameMsg(i, _.protocol.MSGID.MsgId_GuessHandCard_Bet_Request, e)
        }
        RequestGuessSetBetOpt(e, o) {
            let t = {
                    repeat: o
                },
                s = _.protocol.GuessSetBetOptReq.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_GuessHandCard_SetBetOpt_Request, e)
        }
        NoticeGuessHandCardBeginBet(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeGuessBeginBet, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.RemoveGuessOdds();
                let o = n.StringTools.getArrayLength(r.list),
                    t = r.list;
                for (let s = 0; s < o; s++) e.tRoomData.addGuessOdds(t[s]);
                n.MessageCenter.send("guess_begin_bet", {
                    msg: r,
                    gameData: e
                })
            }
        }
        ResponseGuessHandCardBet(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.GuessBetRsp, e);
            if (r)
                if (1 == r.Error) {
                    if (this.checkValidGameData(s, i)) {
                        const e = a.getDataInstanceByGameAndRoomId(s, i);
                        e.tRoomData.change_points = r.change_points, n.MessageCenter.send("guess_bet_rsp", {
                            msg: r,
                            gameData: e
                        })
                    }
                } else n.ToastError(r.Error, !1, s, i)
        }
        ResponseGuessHandCardSetBetOpt(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.GuessSetBetOptRsp, e);
            i && (1 == i.Error ? (console.log(i), n.MessageCenter.send("guess_set_bet_opt", i.repeat)) : n.ToastError(i.Error, !1, s, a))
        }
        NoticeGuessHandCardSettle(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.GuessSettleNotice, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                if (r.is_return_back) {
                    var d;
                    let e = null == (d = n.roomManager.getRoomByIds(s, i)) ? void 0 : d.gameScene;
                    n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("UIGuessReturn"), n.StringTools.numToFloatString(r.win_amount)), n.Enum.ToastType.ToastTypeInfo, !1, !1, e)
                } else n.MessageCenter.send("guess_settle", {
                    msg: r.win_amount,
                    gameData: e
                });
                n.MessageCenter.send("debug_guess_settle", {
                    msg: r,
                    gameData: e
                })
            }
        }
        RequestAutoWithdraw(e, o) {
            let t = {
                    is_open: o
                },
                s = _.protocol.RequestAutoWithdraw.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_AutoWithdraw_Request, e)
        }
        ResponseAutoWithdraw(e) {
            let o = this.decodePB(_.protocol.ResponseAutoWithdraw, e);
            o && 1 == o.Error && n.MessageCenter.send("withdraw_open", o.is_open)
        }
        RequestUploadGuessState(e) {
            let o = {
                    room_id: e,
                    is_open_guess: !1
                },
                t = _.protocol.UploadGuessStateRequest.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_UploadGuessState_Request, e)
        }
        onShowCritPromptNotice(e, o, t, s, i) {
            if (this.decodePB(_.protocol.ShowCritPromptNotice, e) && this.checkValidGameData(s, i)) {
                a.getDataInstanceByGameAndRoomId(s, i).tRoomData.isShowCritPrompt = !0
            }
        }
        requestSendBarrage(e, o, t, s, a = 1, i = _.protocol.BarrageType.Enum_System) {
            if (!n.tools.isShowBarrage()) return;
            let r = {
                    roomid: e,
                    ctype: i,
                    content: o,
                    at_list: t,
                    thump_up_status: a,
                    at_uid_list: s
                },
                d = _.protocol.RequestSendBarrage.encode(r).finish();
            this.sendGameMsg(d, _.protocol.MSGID.MsgId_SendBarrage_Request, e)
        }
        onBarrageRespones(e, o, t, s, i) {
            if (!n.tools.isShowBarrage()) return;
            let r = this.decodePB(_.protocol.ResponseSendBarrage, e);
            if (r)
                if (1 == r.error) {
                    let e = new _.protocol.BarrageCount;
                    e.BarrageId = r.barrageId, e.UseCount = r.useCount, n.GameDataManager.updateBarrageCount(e), e = null
                } else if (n.ToastError(r.error, !1, s, i), 1274 == r.error && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.muteCustomBarrageSeconds = r.afterSecondsCanSend, n.MessageCenter.send("onBarrageMute", {
                    mute: !0,
                    time: r.afterSecondsCanSend,
                    gameData: e
                })
            }
        }
        onBarrageNotice(e, o, t, s, i) {
            if (!n.tools.isShowBarrage()) return;
            let r = this.decodePB(_.protocol.NoticeSendBarrage, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                let o = n.config.compareSignTime();
                if (console.log("onBarrageNotice::" + o), o < .6) return;
                if (n.tools.isShowBarrage() && n.GameDataManager.addDanmuMsg(r), r.ctype !== _.protocol.BarrageType.Enum_Tip) {
                    let o = _.protocol.NoticeSendBarrage.create(r);
                    e.tGiftData.addGiftNewsInfo(o, !0)
                }
            }
        }
        requestBarrageCount(e) {
            if (!n.tools.isShowBarrage()) return;
            let o = _.protocol.BarrageCountReq.encode({}).finish();
            this.sendGameMsg(o, _.protocol.MSGID.MsgId_BarrageCount_Request, e)
        }
        onGetBarrageCountNotice(e) {
            if (!n.tools.isShowBarrage()) return;
            let o = this.decodePB(_.protocol.BarrageCountRsp, e);
            if (o && 1 == o.error) {
                for (let e = 0; e < o.Infos.length; e++) n.GameDataManager.updateBarrageCount(o.Infos[e]);
                n.MessageCenter.send("getBarrageCountNotice")
            }
        }
        requestSendBarrageForbidden(e, o, t, s) {
            if (!n.tools.isShowBarrage()) return;
            let a = {
                    player: o,
                    time: t,
                    tType: s
                },
                i = _.protocol.RequestSendBarrageForbidden.encode(a).finish();
            this.sendGameMsg(i, _.protocol.MSGID.MsgId_SendBarrageForbidden_Request, e)
        }
        onSendBarrageForbiddenResponse(e, o, t, s, a) {
            var i;
            let r = null == (i = n.roomManager.getRoomByIds(s, a)) ? void 0 : i.gameScene;
            if (!n.tools.isShowBarrage()) return;
            let d = this.decodePB(_.protocol.ResponseSendBarrageForbidden, e);
            d && (1 == d.error ? n.TT.showMsg(n.config.getStringData("FaceBarrage_operate_ok"), n.Enum.ToastType.ToastTypeError, !1, !1, r) : n.ToastError(d.error, !1, s, a))
        }
        onSendBarrageForbiddenNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeSendBarrageForbidden, e);
            if (r) {
                let e = 0 == r.tType;
                if (this.checkValidGameData(s, i)) {
                    const o = a.getDataInstanceByGameAndRoomId(s, i);
                    o.tRoomData.muteCustomBarrageSeconds = e ? r.time : 0, n.MessageCenter.send("onBarrageMute", {
                        mute: e,
                        time: o.tRoomData.muteCustomBarrageSeconds,
                        gameData: o
                    })
                }
            }
        }
        onSendBarrageForbiddenConfChangeNotice(e, o, t, s, i) {
            if (!n.tools.isShowBarrage()) return;
            let r = this.decodePB(_.protocol.NoticeSendBarrageConf, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                e.tRoomData.openCustomBarrage = r.openCustomBarrage, e.tRoomData.openTablePlayerCustomBarrage = r.openTablePlayerCustomBarrage, e.tRoomData.nextCustomBarrageFee = r.nextCustomBarrageFee, n.MessageCenter.send("onBarrageConfChange", e)
            }
        }
        RequestNotiGameUpdateThumb(e) {
            let o = _.protocol.RequestNotiGameUpdateThumb.encode({}).finish();
            this.sendGameMsg(o, _.protocol.MSGID.MsgID_NotiGameUpdateThumb_Request, e)
        }
        ResponseNotiGameUpdateThumb(e) {
            let o = this.decodePB(_.protocol.ResponseNotiGameUpdateThumb, e);
            o && o.error
        }
        RequestChangeTable(e, o) {
            var t;
            const s = n.roomManager.getRoomByIds(e, o);
            if (s && s.isChangeTable) return;
            var a;
            if (null != (t = n.geoComplyManager) && t.isGeoTokenRequired()) return void(null == (a = n.geoComplyManager) || a.requestValidToken(((t = "") => {
                t && this.RequestChangeTable(e, o)
            }), (() => {})));
            n.roomManager.setIsChangingTable(e, o, !0);
            let i = {
                roomid: o
            };
            var r;
            n.appConfig.getSecurityConfig().useGeoComply && (i.geoComplyToken = null == (r = n.geoComplyManager) ? void 0 : r.getGeoToken());
            let d = _.protocol.RequestChangeTable.encode(i).finish();
            this.addRequestTimeout(_.protocol.MSGID.MsgID_ChangeTable_Request, o, (() => {
                n.roomManager.setIsChangingTable(e, o, !1)
            })), this.sendGameMsg(d, _.protocol.MSGID.MsgID_ChangeTable_Request, o)
        }
        ResponseChangeTable(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.ResponseChangeTable, e);
            this.responseReceived(_.protocol.MSGID.MsgID_ChangeTable_Request, i.error, a);
            let r = n.roomManager.getRoomByIds(s, a);
            if (i.error == M.GEOCOMPLY_INVAILD || i.error == M.GEOCOMPLY_SERVICE_ERROR) {
                var d;
                let e = n.tryParseJSON(i.failedReasons) || {},
                    o = () => {
                        r && this.RequestChangeTable(null == r ? void 0 : r.getCurrentGameID(), a)
                    };
                null == (d = n.geoComplyManager) || d.serverErrorHandler(e, null == r ? void 0 : r.gameScene, o, null, {
                    ErrorType: "CashGame_ChangeTable_CheckFailed",
                    ErrorCode: i.error.toString(),
                    ErrorDetails: JSON.stringify(e)
                }, !0)
            } else if (1 != i.error) n.ToastError(i.error, !1, s, a), n.roomManager.setIsChangingTable(s, a, !1);
            else {
                const e = null == i ? void 0 : i.newroomid;
                if (e > 0) {
                    const o = n.roomManager.getRoomByIds(s, e);
                    o && o != r && e != a && r && n.popUp.showMsgI18n({
                        txt: "ServerErrorCode26",
                        title: "Attention",
                        msgType: n.Enum.ToastType.ToastTypeWarning,
                        cashGameScene: r.gameScene,
                        sureCallback: () => {
                            r.closeCurrentGame()
                        },
                        cancelCallback: () => {
                            r.closeCurrentGame()
                        }
                    })
                }
                n.roomManager.removeMyRoomId(s, a)
            }
        }
        requestNotDisturb(e, o, t) {
            let s = {
                    operate: o,
                    whoId: t
                },
                a = _.protocol.NotDisturbReq.encode(s).finish();
            this.sendGameMsg(a, _.protocol.MSGID.MsgId_NotDisturb_Request, e)
        }
        onNotDisturbResponse(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NotDisturbRsp, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                1 == r.error ? n.MessageCenter.send("NotDisturb", {
                    msg: r,
                    gameData: e
                }) : n.ToastError(r.error, !1, s, i)
            }
        }
        requestOpenLiveReq(e, o) {
            let t = {
                    liveOp: o
                },
                s = _.protocol.OpenLiveReq.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_OpenLive_Request, e)
        }
        onOpenLiveResponse(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.OpenLiveRsp, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                1 == r.error ? n.MessageCenter.send("liveStatus", {
                    msg: r,
                    gameData: e
                }) : n.ToastError(r.error, !1, s, i)
            }
        }
        requestMikeModeReq(e, o) {
            let t = {
                    Mode: o
                },
                s = _.protocol.MikeModeReq.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_MikeMode_Request, e)
        }
        onMikeModeRsp(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.MikeModeRsp, e);
            if (r)
                if (1 == r.error) {
                    if (this.checkValidGameData(s, i)) {
                        const e = a.getDataInstanceByGameAndRoomId(s, i);
                        let o = e.tRoomData.GetTablePlayer(n.dataHandler.getUserData().getUserIdByGameID(s));
                        o && (o.mikeMode = r.Mode), n.MessageCenter.send("mikeMode", {
                            msg: r,
                            gameData: e
                        })
                    }
                } else n.ToastError(r.error, !1, s, i)
        }
        onVoicePrivateNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.VoicePrivateNotice, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                for (let o = 0; o < e.tRoomData.voicePrivate.length; ++o) {
                    let t = e.tRoomData.voicePrivate[o];
                    if (t.uid == r.uid) {
                        t.isVoicePublic = r.isVoicePublic;
                        break
                    }
                }
                n.MessageCenter.send("voicePrivateNotice", {
                    msg: r,
                    gameData: e
                })
            }
        }
        onCanSpeakNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.CanSpeakNotice, e);
            if (r && this.checkValidGameData(s, i)) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                let o = e.tRoomData.GetTablePlayer(r.uid);
                o && (o.canSpeak = r.CanSpeak), n.MessageCenter.send("canSpeakNotice", {
                    msg: r,
                    gameData: e
                })
            }
        }
        requestOpenMike(e, o) {
            let t = {
                    mikeOp: o
                },
                s = _.protocol.OpenMikeReq.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_OpenMike_Request, e)
        }
        onOpenMikeResponse(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.OpenMikeRsp, e);
            if (r)
                if (1 == r.error) {
                    if (this.checkValidGameData(s, i)) {
                        const e = a.getDataInstanceByGameAndRoomId(s, i);
                        let o = e.tRoomData.pkRoomParam.commentators;
                        for (let e = o.length - 1; e >= 0; --e)
                            if (o[e].uid == r.uid) {
                                o[e].mikeStatus = r.mikeStatus;
                                break
                            } n.MessageCenter.send("openMike", {
                            msg: r,
                            gameData: e
                        })
                    }
                } else n.ToastError(r.error, !1, s, i)
        }
        onCloseStarNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.CloseStarNotice, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                r.isClosedStar && this.checkValidGameData(s, i) && (e.tRoomData.pkRoomParam.reserveSeat = 0), n.MessageCenter.send("closeStarNotice", {
                    msg: r.isClosedStar,
                    gameData: e
                })
            }
        }
        requestLike(e, o) {
            let t = {
                    likeUid: o
                },
                s = _.protocol.LikeRequest.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_Like_Request, e)
        }
        onLikeResponse(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.LikeResponse, e);
            i && (1 == i.error ? (n.dataHandler.getUserData().pokerdata.liked_count = i.likedCount, n.MessageCenter.send("like", i)) : n.ToastError(i.error, !1, s, a))
        }
        onLikeNotice(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.LikeNotice, e);
            if (i) {
                var r;
                let e = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene;
                n.TT.showMsg(n.StringTools.formatC(n.config.getStringData("Star_like"), i.nickname), n.Enum.ToastType.ToastTypeSuccess, !1, !1, e)
            }
        }
        requestIsEmojiFree(e, o) {
            if (!n.appConfig.getGameConfig().emojiTabEnabled) return;
            let t = {
                    type: o
                },
                s = _.protocol.RequestIsEmojiFree.encode(t).finish();
            this.sendGameMsg(s, _.protocol.MSGID.MsgId_IsEmojiFree_Request, e)
        }
        responseIsEmojiFree(e, o, t, s, a) {
            if (!n.appConfig.getGameConfig().emojiTabEnabled) return;
            let i = this.decodePB(_.protocol.ResponseIsEmojiFree, e);
            i && n.ToastError(i.error, !1, s, a)
        }
        IsEmojiFreeNotice(e, o, t, s, i) {
            let r = this.decodePB(_.protocol.NoticeIsEmojiFree, e);
            if (r) {
                const e = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("IsEmojiFree", {
                    msg: r,
                    gameData: e
                })
            }
        }
        HandleNoticeFairGame(e, o, t, s, a) {
            let i = this.decodePB(_.protocol.NoticeFairGame, e);
            if (i) {
                var r;
                let e = null == (r = n.roomManager.getRoomByIds(s, a)) ? void 0 : r.gameScene,
                    o = this.getFairGameMessagei18KeyByPlatform("UIFairGameToast");
                n.TT.showMsg(n.StringTools.formatC(n.config.getStringData(o), i.playername2.toString()), n.Enum.ToastType.ToastTypeError, !1, !0, e)
            }
        }
        getFairGameMessagei18KeyByPlatform(e) {
            let o = e;
            return s.isNative && n.geoComplyManager.isIpLocationUsed() && (s.os == s.OS.ANDROID || s.os == s.OS.IOS ? o = "FairGameNotice_Ip_Location_Mobile" : s.os == s.OS.WINDOWS ? o = "FairGameNotice_Ip_Location_Windows" : s.os == s.OS.OSX && (o = "FairGameNotice_Ip_Location_Mac")), o
        }
        NoticePeekCard(e, o, t, s, i) {
            if (this.checkValidGameData(s, i)) {
                const o = this.decodePB(_.protocol.PeekCardNotice, e),
                    t = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("peek_card", {
                    msg: o,
                    gameData: t
                })
            }
        }
        requestPeekCard(e) {
            const o = {
                    roomid: e
                },
                t = _.protocol.PeekCardRequest.encode(o).finish();
            this.sendGameMsg(t, _.protocol.MSGID.MsgID_PeekCard_Request, e)
        }
        ResponsePeekCard(e) {
            const o = this.decodePB(_.protocol.PeekCardResponse, e);
            o && n.MessageCenter.send("peek_card_response", o)
        }
        NoticePeekCardFinish(e, o, t, s, i) {
            if (this.checkValidGameData(s, i)) {
                const o = this.decodePB(_.protocol.PeekCardFinishNotice, e),
                    t = a.getDataInstanceByGameAndRoomId(s, i);
                n.MessageCenter.send("peek_card_finish", {
                    msg: o,
                    gameData: t
                })
            }
        }
    }
    e("GameNetWork", S), S.g_instance = void 0, o._RF.pop()
}
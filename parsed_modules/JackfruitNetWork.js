import * as t from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./jackfruit.mjs_cjs=&original=.js";
import * as n from "./cv.js";
import * as i from "./cv.js";
import * as c from "./cv.js";
import * as s from "./cv.js";
import * as d from "./JackfruitData.js";
import * as u from "./NetWorkProxy.js";
import * as g from "./RoomData.js";
import * as f from "./GameDataManager.js";

function main() {
    var _, p;
    t._RF.push({}, "b235dnbe9tCQo2LJK2T69yf", "JackfruitNetWork", void 0);
    const {
        ccclass: h,
        property: l
    } = o;
    e("JackfruitNetWork", h(((p = class e extends d {
        static getInstance() {
            return e.g_instance || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        sendGameMsg(e, t, o = this.getCurrentRoomId(), r = a.Enum.SeverType.SeverType_Game, i = a.Enum.GameId.Jackfruit) {
            return this.sendMsg(e, t, o, r, i)
        }
        registerMsg(e, t) {
            this.registerMessage(e, t, a.Enum.GameId.Jackfruit)
        }
        init() {
            this.registerMsg(f.jackfruit_proto.CMD.HEART_BEAT_RESP, this.responseHeartBeat.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.LOGIN_GAME_RESP, this.responseLoginServer.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.JOIN_ROOM_RESP, this.responseJoinRoom.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.GAME_DATA_SYNC_RESP, this.responseGameDataSync.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SIT_DOWN_RESP, this.responseSitDown.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SIT_DOWN_NOTIFY, this.noticeSitDown.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.PLACE_CARD_RESP, this.responsePlaceCard.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.PLACE_CARD_OVER_RESP, this.responsePlaceCardOver.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.PLACE_CARD_OVER_NOTIFY, this.noticePlaceCardOver.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.STAND_UP_RESP, this.responseStandUp.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.STAND_UP_NOTIFY, this.noticeStandUp.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.READY_RESP, this.responseReady.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.READY_NOTIFY, this.noticeReady.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SEND_CHAT_RESP, this.responseSendChat.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SEND_CHAT_NOTIFY, this.noticeSendChat.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.MagicEmoji_Response, this.responseSendMagicEmoji.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.MagicEmoji_Notice, this.noticeSendMagicEmoji.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.DynamicConfig_Notice, this.noticeDynamicConfig.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.BUY_IN_RESP, this.responseBuyIn.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.BUY_IN_NOTIFY, this.noticeBuyIn.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.LEAVE_RESP, this.responseLeave.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.GAME_WILL_START_NOTIFY, this.noticeGameWillStart.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.DEAL_NOTIFY, this.noticeDeal.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SQUAT_CARDS_NOTIFY, this.noticeSquatCards.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.GAME_ROUND_END_NOTIFY, this.noticeGameRoundEnd.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.DESTROY_ROOM_NOTIFY, this.noticeDestroyRoomNotify.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.CONFIRM_TO_CONTINUE, this.confirmToContinue.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.COMMUNITY_CARDS_NOTIFY, this.noticeCommunityCards.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.START_PLACE_CARDS, this.startPlaceCards.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.Show_PLACE_CARDS_NOTIFY, this.noticeShowstartPlaceCards.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.ACTION_DELAY_RESP, this.resposeActionDelay.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.ACTION_DELAY_NOTIFY, this.notifyActionDelay.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SITUATION_RESP, this.resposeSituation.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SEND_BARRAGE_RESP, this.onBarrageRespones.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SEND_BARRAGE_NOTIFY, this.onBarrageNotice.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.WAITING_OTHER_PLAYER_NOTIFY, this.noticeWaitingOtherPlayer.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.MsgId_BarrageCount_RESP, this.onGetBarrageCountNotice.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.CHANGE_TABLE_RESP, this.resposeChangeTable.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.SETTLE_RESP, this.responseSettle.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.CAN_OPERATION_NOTIFY, this.notifyCanOperation.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.PLAYER_INFO_SYNC_NOTIFY, this.notifyPlayerInfoSync.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.START_MATCH_NOTIFY, this.notifyStartMatch.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.MATCH_RESULT_NOTIFY, this.notifyMatchResult.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.GetGameUUIds_RESP, this.responseGetGameUUIDS.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.JACKPOT_DATA_RESP, this.responseJackpotData.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.JACKPOT_AWARD_LIST_RESP, this.responseJackpotList.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.MODIFY_PLACE_CARDS_NOTIFY, this.notifyModifyPlaceCards.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.BRAND_BARRAGE_NOTIFY, this.notifyBrandBarrage.bind(this)), this.registerMsg(f.jackfruit_proto.CMD.NotDisturb_RESP, this.onNotDisturbResponse.bind(this))
        }
        getCurrentRoomId() {
            var e;
            return null == (e = a.roomManager.rooms.find((e => e.getCurrentGameID() == a.Enum.GameId.Jackfruit))) ? void 0 : e.getCurrentRoomID()
        }
        ToastError(e) {
            if (e == f.jackfruit_proto.ErrorCode.OK) return;
            let t = a.roomManager.getGameScene(a.Enum.GameId.Jackfruit, a.roomManager.getMiniGameRoomIdTemplate(a.Enum.GameId.Jackfruit));
            if (13023 == e) return void a.TP.showTimeMsg(a.config.getStringData("ServerErrorCode42"), this.showGameShop.bind(this), null, !1, !1, "", t);
            if (13006 == e) {
                a.MessageCenter.send("exit_the_room");
                let e = a.config.getStringData("ServerErrorCode22");
                return void a.TT.showMsg(e, a.Enum.ToastType.ToastTypeInfo)
            }
            if (13001 == e) a.netWorkManager.OnNeedRelogin(2);
            else {
                if (13036 == e) {
                    let e = a.config.getStringData("ServerErrorCode93");
                    return void a.TT.showMsg(e, a.Enum.ToastType.ToastTypeInfo)
                }
                if (13037 == e) {
                    let e = a.config.getStringData("ServerErrorCode111");
                    return void a.TT.showMsg(e, a.Enum.ToastType.ToastTypeInfo)
                }
                if (13042 == e) return
            }
            let o = a.config.getStringData("JackfruitServerErrorCode" + e);
            a.TT.showMsg(o, a.Enum.ToastType.ToastTypeInfo)
        }
        showGameShop() {
            a.SHOP.RechargeClick(!0)
        }
        requestLoginServer() {
            let e = {
                    token: a.dataHandler.getUserData().user_token,
                    version: a.config.GET_CLIENT_VERSION(),
                    client_type: a.config.GET_CLIENT_TYPE()
                },
                t = f.jackfruit_proto.LoginReq.encode(e).finish();
            this.sendGameMsg(t, f.jackfruit_proto.CMD.LOGIN_GAME_REQ, 0) && a.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: a.Enum.GameId.Jackfruit
            }))
        }
        responseLoginServer(e) {
            let t = this.decodePB(f.jackfruit_proto.LoginResp, e);
            t && (a.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(t)), t.code == f.jackfruit_proto.ErrorCode.OK ? (t.roomId, a.netWorkManager.OnGameServerLogin(t.code, a.Enum.GameId.Jackfruit, t.roomId ? [t.roomId] : [])) : (a.netWorkManager.clearLoginGameServerSuccFlag(a.Enum.GameId.Jackfruit), a.SwitchLoadingView.hide(), this.ToastError(t.code)))
        }
        requestHeartBeat() {
            console.log("Heartbeat sending");
            let e = {
                    uid: a.dataHandler.getUserData().u32Uid
                },
                t = f.jackfruit_proto.HeartBeatReq.encode(e).finish();
            return this.sendGameMsg(t, f.jackfruit_proto.CMD.HEART_BEAT_REQ, 0)
        }
        responseHeartBeat(e, t, o, r, i) {
            let s = a.jackfruitPB.lookupType("HeartBeatResp");
            if (s) {
                let t = new Uint8Array(e),
                    o = s.decode(t);
                if (null != o) {
                    let e = o.uid;
                    console.log("Heartbeat uid::->>" + e), a.netWorkManager.onGameHeartBeat(r)
                }
            }
        }
        requestJoinRoom(e) {
            let t = {
                roomId: e
            };
            if (a.netWorkManager.isLoginGameServerSucc(a.Enum.GameId.Jackfruit)) {
                let o = f.jackfruit_proto.JoinRoomReq.encode(t).finish();
                this.sendGameMsg(o, f.jackfruit_proto.CMD.JOIN_ROOM_REQ, e) && a.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: a.Enum.GameId.Jackfruit,
                    roomId: e
                }))
            } else this.requestLoginServer()
        }
        responseJoinRoom(e) {
            let t = this.decodePB(f.jackfruit_proto.JoinRoomResp, e);
            t && (a.roomManager.onJoinRoomResponse(t, a.Enum.GameId.Jackfruit), JackfruitMgr.tRoomData.nPrePickSeatID = -1, t.code != f.jackfruit_proto.ErrorCode.OK && this.ToastError(t.code))
        }
        requestGameDataSync(e) {
            let t = {
                    roomId: e
                },
                o = f.jackfruit_proto.GameDataSyncReq.encode(t);
            return this.sendGameMsg(o, f.jackfruit_proto.CMD.GAME_DATA_SYNC_REQ, e)
        }
        responseGameDataSync(e, t, o, r, i) {
            let s = this.decodePB(f.jackfruit_proto.GameDataSyncResp, e);
            if (s)
                if (s.code == f.jackfruit_proto.ErrorCode.OK) {
                    g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode = !1, JackfruitMgr.tRoomData.reset(), a.StringTools.deepCopy(s.param, JackfruitMgr.tRoomData.param), a.StringTools.deepCopy(s.cachedNotifyMsg, JackfruitMgr.tRoomData.cachedNotifyMsg), a.StringTools.deepCopy(s.fee, JackfruitMgr.tRoomData.fee), a.StringTools.deepCopy(s.dynamicConfig, JackfruitMgr.tRoomData.dynamicConfig), JackfruitMgr.tRoomData.barrageLeftSeconds = s.barrageLeftSeconds, JackfruitMgr.tRoomData.curState = s.curState, JackfruitMgr.tRoomData.actionDelayCountsFee = s.actionDelayCountsFee, JackfruitMgr.tRoomData.canChangeTable = s.canChangeTable, JackfruitMgr.tRoomData.startMatchTimeStamp = s.startMatchTimeStamp, JackfruitMgr.tRoomData.matchedSeconds = s.matchedSeconds, JackfruitMgr.tRoomData.jackpotLeftAmount = s.jackpotLeftAmount;
                    for (let e = 0; e < s.delayedOperationPlayIds.length; e++) a.JackfruitManager.tRoomData.delayedOperationPlayIds[e] = s.delayedOperationPlayIds[e];
                    let e = a.JackfruitManager.tRoomData.cachedNotifyMsg.playerSettle;
                    for (let t = 0; t < e.length; t++) {
                        let o = e[t].player;
                        a.JackfruitManager.tRoomData.addTablePlayer(o)
                    }
                    a.MessageCenter.send("on_game_data_sync"), this.requestGetGameUUIDS(), -1 != s.jackpotLeftAmount && this.requestJackpotData(s.param.ante)
                } else this.ToastError(s.code)
        }
        requestSitDown(e, t) {
            let o = {
                    roomId: e,
                    seatId: t
                },
                r = f.jackfruit_proto.SitDownReq.encode(o).finish();
            return this.sendGameMsg(r, f.jackfruit_proto.CMD.SIT_DOWN_REQ, e)
        }
        responseSitDown(e) {
            let t = this.decodePB(f.jackfruit_proto.SitDownResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || (t.code == f.jackfruit_proto.ErrorCode.NOT_ENOUGH_STAKE ? a.MessageCenter.send("need_buyin", {
                needAmount: t.needAmount,
                amount: t.amount,
                needScore: t.needScore,
                score: t.score
            }) : this.ToastError(t.code)))
        }
        noticeSitDown(e) {
            let t = this.decodePB(f.jackfruit_proto.SitDownNotify, e);
            if (t) {
                if (t.roomId != this.getCurrentRoomId()) return;
                let e = t.player;
                a.JackfruitManager.tRoomData.addTablePlayer(e), a.MessageCenter.send("on_sitdown_succ", e.playerId)
            }
        }
        requestPlaceCard(e, t, o, r) {
            let a = {
                    headCards: e,
                    middleCards: t,
                    tailCards: o,
                    holeCards: r
                },
                i = f.jackfruit_proto.PlaceCardReq.encode(a).finish();
            return this.sendGameMsg(i, f.jackfruit_proto.CMD.PLACE_CARD_REQ)
        }
        responsePlaceCard(e) {
            let t = this.decodePB(f.jackfruit_proto.PlaceCardResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || this.ToastError(t.code))
        }
        requestPlaceCardOver(e, t, o, r) {
            let a = {
                    headCards: e,
                    middleCards: t,
                    tailCards: o,
                    holeCards: r
                },
                i = f.jackfruit_proto.PlaceCardOverReq.encode(a).finish();
            return this.sendGameMsg(i, f.jackfruit_proto.CMD.PLACE_CARD_OVER_REQ)
        }
        responsePlaceCardOver(e) {
            let t = this.decodePB(f.jackfruit_proto.PlaceCardOverResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || this.ToastError(t.code))
        }
        noticePlaceCardOver(e, t, o, r, i) {
            if (g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode) return;
            let s = this.decodePB(f.jackfruit_proto.PlaceCardOverNotify, e);
            s && a.MessageCenter.send("place_card_over", s.seatId)
        }
        requestStandUp(e) {
            let t = {
                    roomId: e
                },
                o = f.jackfruit_proto.StandUpReq.encode(t).finish();
            return this.sendGameMsg(o, f.jackfruit_proto.CMD.STAND_UP_REQ)
        }
        responseStandUp(e) {
            let t = this.decodePB(f.jackfruit_proto.StandUpResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || this.ToastError(t.code))
        }
        noticeStandUp(e) {
            let t = this.decodePB(f.jackfruit_proto.StandUpNotify, e);
            if (t) {
                if (t.roomId != this.getCurrentRoomId()) return;
                a.MessageCenter.send("stand_up_succ", t.playerId)
            }
        }
        requestReady() {
            let e = f.jackfruit_proto.ReadyReq.encode({}).finish();
            return this.sendGameMsg(e, f.jackfruit_proto.CMD.READY_REQ)
        }
        responseReady(e) {
            let t = this.decodePB(f.jackfruit_proto.ReadyResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || this.ToastError(t.code))
        }
        noticeReady(e) {
            let t = this.decodePB(f.jackfruit_proto.ReadyNotify, e);
            if (t) {
                a.JackfruitManager.tRoomData.GetTablePlayer(t.playerId).state = i.SReady, a.MessageCenter.send("player_ready", t.playerId)
            }
        }
        requestSendChat(e, t, o) {
            let r = o;
            t == a.Enum.ChatType.Enum_Voice && (r = "" != a.dataHandler.getUserData().nick_name.toString() ? "@" + a.dataHandler.getUserData().nick_name + "@" + r : "@noname@" + r);
            let i = {
                    roomId: e,
                    cType: t,
                    content: r
                },
                s = f.jackfruit_proto.SendChatReq.encode(i).finish();
            return this.sendGameMsg(s, f.jackfruit_proto.CMD.SEND_CHAT_REQ)
        }
        responseSendChat(e) {
            let t = this.decodePB(f.jackfruit_proto.SendChatResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK ? (a.StringTools.deepCopy(t.nextFee, a.JackfruitManager.tRoomData.fee), a.JackfruitManager.tRoomData.barrageLeftSeconds = t.barrageLeftSeconds) : this.ToastError(t.code))
        }
        noticeSendChat(e) {
            console.log("jack noticeSendChat 000000:");
            let t = this.decodePB(f.jackfruit_proto.SendChatNotify, e);
            if (t) {
                let e = t.roomId;
                if (console.log("jack noticeSendChat 000000: msg.cType" + t.cType), e != this.getCurrentRoomId()) return;
                if (t.cType == s.Enum_Emoji) a.MessageCenter.send("on_SendChat", {
                    seatID: t.seatId,
                    face: t.content
                });
                else if (t.cType == s.Enum_Barrage) a.MessageCenter.send("send_chat_notify", {
                    seatID: t.seatId,
                    index: t.content,
                    playerId: t.playerId
                });
                else if (t.cType == s.Enum_Emoji_Interactive) a.MessageCenter.send("on_fly_emoji", t.content);
                else if (t.cType == s.Enum_Voice && a.appConfig.getGameConfig().audioChatEnabled && a.config.getCurrentScene() == a.Enum.SCENE.JACKFRUIT_SCENE) {
                    t.content[0];
                    let e = t.content.split("@");
                    if (e.length <= 0) return;
                    let o = e[1],
                        i = e[2];
                    if (r.os === r.OS.IOS && r.isNative) {
                        if (t.seatId != a.JackfruitManager.tRoomData.nSelfSeatID && a.tools.isPlayVoice()) {
                            let e = new u;
                            e.kUrl = i, e.kSender = o, e.u32SeatId = t.seatId, a.native.PlayRoomVoice(e);
                            let r = a.JackfruitManager.tRoomData.GetTablePlayerBySeatId(t.seatId);
                            r && (r.lastVoice = i)
                        }
                    } else if ((r.os === r.OS.ANDROID || a.config.GET_CLIENT_TYPE() == a.Enum.ClientType.H5WebPage) && t.seatId != a.JackfruitManager.tRoomData.nSelfSeatID && a.tools.isPlayVoice()) {
                        let e = new u;
                        e.kUrl = i, e.kSender = o, e.u32SeatId = t.seatId;
                        let r = a.JackfruitManager.tRoomData.GetTablePlayerBySeatId(t.seatId);
                        r && (r.lastVoice = i), a.httpHandler.DoDownloadVoice(e)
                    }
                }
            }
        }
        requestSendMagicEmoji(e, t) {
            let o = {
                    roomid: e,
                    type: t
                },
                r = this.encodePB("MagicEmojiRequest", o);
            return this.sendGameMsg(r, f.jackfruit_proto.CMD.MagicEmoji_Request)
        }
        responseSendMagicEmoji(e) {
            let t = this.decodePB("MagicEmojiResponse", e);
            t && t.code != jackfruit_proto.ErrorCode.OK && this.ToastError(t.code)
        }
        noticeSendMagicEmoji(e) {
            let t = this.decodePB("MagicEmojiNotice", e);
            if (t) {
                let e = t.roomid;
                if (console.log("jack noticeSendChat 000000: msg.type" + t.type), e != a.roomManager.getCurrentRoomID()) return;
                a.MessageCenter.send("on_SendMagicEmoji", {
                    type: t.type,
                    playerId: t.playerid
                })
            }
        }
        noticeDynamicConfig(e) {
            let t = this.decodePB("DynamicConfig", e);
            console.log("#######################NoticeDynamicConfig :: " + t), t && a.MessageCenter.send("on_SendNoticeDynamicConfig", t)
        }
        requestBuyIn(e) {
            let t = {
                    amount: a.StringTools.serverGoldByClient(e)
                },
                o = f.jackfruit_proto.BuyInReq.encode(t).finish();
            return this.sendGameMsg(o, f.jackfruit_proto.CMD.BUY_IN_REQ)
        }
        responseBuyIn(e) {
            let t = this.decodePB(f.jackfruit_proto.BuyInResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK ? -1 == f.jackfruit_proto.tRoomData.nSelfSeatID && -1 != JackfruitMgr.tRoomData.nPrePickSeatID && this.requestSitDown(this.getCurrentRoomId(), JackfruitMgr.tRoomData.nPrePickSeatID) : this.ToastError(t.code))
        }
        noticeBuyIn(e) {
            let t = this.decodePB(f.jackfruit_proto.BuyInNotify, e);
            if (t) {
                if (t.roomId != this.getCurrentRoomId()) return;
                a.MessageCenter.send("buy_in", t)
            }
        }
        requestLeave() {
            let e = {
                    roomId: this.getCurrentRoomId()
                },
                t = f.jackfruit_proto.LeaveReq.encode(e).finish();
            return this.sendGameMsg(t, f.jackfruit_proto.CMD.LEAVE_REQ)
        }
        responseLeave(e, t, o, r, i) {
            let s = this.decodePB(f.jackfruit_proto.LeaveResp, e);
            s && (s.code == f.jackfruit_proto.ErrorCode.OK ? (a.roomManager.onResponse_LeaveRoom(s, r, i), JackfruitMgr.tRoomData.reset(), a.MessageCenter.send("exit_the_room")) : this.ToastError(s.code))
        }
        noticeGameWillStart(e, t, o, r, s) {
            if (g.getDataInstanceByGameAndRoomId(r, s).tRoomData.m_bIsReconnectMode) return;
            let n = this.decodePB(f.jackfruit_proto.GameWillStartNotify, e);
            n && (a.JackfruitManager.tRoomData.setAllTablePlayerState(i.SWaitPlaceCards), a.MessageCenter.send("game_will_start", n))
        }
        noticeDeal(e, t, o, r, i) {
            if (g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode) return;
            let s = this.decodePB(f.jackfruit_proto.DealNotify, e);
            if (s) {
                if (s.roomId != this.getCurrentRoomId()) return;
                a.JackfruitManager.tRoomData.actionDelayCountsFee = s.actionDelayCountsFee, a.MessageCenter.send("notice_deal", s), a.MessageCenter.send("updata_delay")
            }
        }
        noticeSquatCards(e) {
            let t = this.decodePB("SquatCardsNotify", e);
            if (t) {
                if (t.roomId != this.getCurrentRoomId()) return
            }
        }
        noticeGameRoundEnd(e, t, o, r, i) {
            if (g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode) return;
            let s = this.decodePB(f.jackfruit_proto.GameRoundEndNotify, e);
            if (s) {
                a.StringTools.deepCopy(s, a.JackfruitManager.tRoomData.cachedNotifyMsg), a.JackfruitManager.tRoomData.jackpotLeftAmount = s.jackpotLeftAmount;
                let e = a.JackfruitManager.tRoomData.cachedNotifyMsg.playerSettle;
                for (let t = 0; t < e.length; t++) {
                    let o = e[t].player;
                    a.JackfruitManager.tRoomData.updateTablePlayer(o.playerId, o)
                }
                a.MessageCenter.send("game_round_end", s), a.JackfruitManager.tRoomData.gameUUIDs.push(s.game_uuid_js), a.MessageCenter.send("updata_record")
            }
        }
        noticeDestroyRoomNotify(e) {
            let t = this.decodePB(f.jackfruit_proto.DestroyRoomNotify, e);
            if (t) {
                if (t.roomId != this.getCurrentRoomId()) return;
                a.MessageCenter.send("destroy_room")
            }
        }
        confirmToContinue(e, t, o, r, s) {
            if (g.getDataInstanceByGameAndRoomId(r, s).tRoomData.m_bIsReconnectMode) return;
            let n = this.decodePB(f.jackfruit_proto.ConfirmToContinueNotify, e);
            n && (a.JackfruitManager.tRoomData.setAllTablePlayerState(i.SClickReady), a.MessageCenter.send("confirm_to_continue", n.leftSeconds))
        }
        requestActionDelay(e) {
            let t = {
                    actionDelayId: e
                },
                o = f.jackfruit_proto.ActionDelayReq.encode(t).finish();
            return this.sendGameMsg(o, f.jackfruit_proto.CMD.ACTION_DELAY_REQ)
        }
        resposeActionDelay(e) {
            let t = this.decodePB(f.jackfruit_proto.ActionDelayResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK ? (a.JackfruitManager.tRoomData.actionDelayCountsFee = t.actionDelayCountsFee, a.MessageCenter.send("updata_delay")) : this.ToastError(t.code))
        }
        notifyActionDelay(e) {
            let t = this.decodePB(f.jackfruit_proto.ActionDelayNotify, e);
            t && a.MessageCenter.send("action_delay", {
                playerID: t.playerId,
                leftSeconds: t.leftSeconds
            })
        }
        requestSituation(e) {
            let t = {
                    roomId: e
                },
                o = f.jackfruit_proto.SituationReq.encode(t).finish();
            return this.sendGameMsg(o, f.jackfruit_proto.CMD.SITUATION_REQ)
        }
        resposeSituation(e) {
            let t = this.decodePB(f.jackfruit_proto.SituationResp, e);
            if (t)
                if (t.code == f.jackfruit_proto.ErrorCode.OK) {
                    if (t.roomId == this.getCurrentRoomId()) {
                        let e = t.playerBuyInInfo;
                        for (let t = 0; t < e.length; ++t) {
                            let o = e[t];
                            a.JackfruitManager.tRoomData.updateBuyinInfo(o)
                        }
                        a.MessageCenter.send("on_jackfruit_situation", t)
                    }
                } else this.ToastError(t.code)
        }
        noticeCommunityCards(e, t, o, r, i) {
            if (g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode) return;
            let s = this.decodePB(f.jackfruit_proto.CommunityCardsNotify, e);
            if (s) {
                if (s.roomId != this.getCurrentRoomId()) return;
                a.MessageCenter.send("community_cards", {
                    publicCards: s.publicCards,
                    roundState: s.roundState
                })
            }
        }
        startPlaceCards(e, t, o, r, s) {
            if (g.getDataInstanceByGameAndRoomId(r, s).tRoomData.m_bIsReconnectMode) return;
            let n = this.decodePB(f.jackfruit_proto.StartPlaceCardsNotify, e);
            n && (a.JackfruitManager.tRoomData.setAllTablePlayerState(i.SPlaceCards), a.MessageCenter.send("start_place_card", n.leftSeconds))
        }
        noticeShowstartPlaceCards(e, t, o, r, i) {
            if (g.getDataInstanceByGameAndRoomId(r, i).tRoomData.m_bIsReconnectMode) return;
            let s = this.decodePB(f.jackfruit_proto.ShowPlaceCardsNotify, e);
            s && a.MessageCenter.send("show_place_card", s.player)
        }
        requestSendBarrage(e, t = n.Enum_System) {
            let o = {
                    roomid: this.getCurrentRoomId(),
                    ctype: t,
                    content: e
                },
                r = f.jackfruit_proto.RequestSendBarrage.encode(o).finish();
            this.sendGameMsg(r, f.jackfruit_proto.CMD.SEND_BARRAGE_REQ)
        }
        onBarrageRespones(e) {
            let t = this.decodePB(f.jackfruit_proto.ResponseSendBarrage, e);
            if (t)
                if (1 == t.error) {
                    let e = new f.jackfruit_proto.BarrageCount;
                    e.BarrageId = t.barrageId, e.UseCount = t.useCount, a.GameDataManager.updateBarrageCount(e), e = null
                } else a.ToastError(t.error)
        }
        onBarrageNotice(e) {
            let t = this.decodePB(f.jackfruit_proto.NoticeSendBarrage, e);
            this.getCurrentRoomId() == t.roomid && a.tools.isShowBarrage() && a.GameDataManager.addDanmuMsg(t)
        }
        requestBarrageCount() {
            let e = this.getCurrentRoomId(),
                t = f.jackfruit_proto.BarrageCountReq.encode({}).finish();
            this.sendGameMsg(t, f.jackfruit_proto.CMD.MsgId_BarrageCount_REQ, e)
        }
        onGetBarrageCountNotice(e) {
            let t = this.decodePB(f.jackfruit_proto.BarrageCountRsp, e);
            if (1 == t.error) {
                for (let e = 0; e < t.Infos.length; e++) a.GameDataManager.updateBarrageCount(t.Infos[e]);
                a.MessageCenter.send("getBarrageCountNotice")
            }
        }
        noticeWaitingOtherPlayer(e) {
            this.decodePB(f.jackfruit_proto.WaitingOtherPlayerNotify, e) && a.MessageCenter.send("waiting_other_player_notify")
        }
        requestChangeTable() {
            let e = this.getCurrentRoomId(),
                t = f.jackfruit_proto.ChangeTableReq.encode({}).finish();
            this.sendGameMsg(t, f.jackfruit_proto.CMD.CHANGE_TABLE_REQ, e)
        }
        resposeChangeTable(e) {
            let t = this.decodePB(f.jackfruit_proto.ChangeTableResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK || this.ToastError(t.code))
        }
        requestSettle() {
            let e = this.getCurrentRoomId(),
                t = f.jackfruit_proto.SettleReq.encode({}).finish();
            this.sendGameMsg(t, f.jackfruit_proto.CMD.CHANGE_TABLE_REQ, e)
        }
        responseSettle(e) {
            let t = this.decodePB(f.jackfruit_proto.SettleResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK ? a.MessageCenter.send("total_settle", t) : this.ToastError(t.code))
        }
        notifyCanOperation(e) {
            this.decodePB(f.jackfruit_proto.CanOperationNotify, e) && a.MessageCenter.send("can_operation")
        }
        notifyPlayerInfoSync(e) {
            let t = this.decodePB(f.jackfruit_proto.PlayerInfoSyncNotify, e);
            t && a.MessageCenter.send("player_info_sync", t)
        }
        notifyStartMatch(e) {
            this.decodePB(f.jackfruit_proto.StartMatchNotify, e) && a.MessageCenter.send("updata_start_match", !0)
        }
        notifyMatchResult(e) {
            this.decodePB(f.jackfruit_proto.MatchResultNotify, e) && a.MessageCenter.send("updata_start_match", !1)
        }
        requestGetGameUUIDS() {
            let e = this.getCurrentRoomId(),
                t = f.jackfruit_proto.GetGameUUIdsReq.encode({}).finish();
            this.sendGameMsg(t, f.jackfruit_proto.CMD.GetGameUUIds_REQ, e)
        }
        responseGetGameUUIDS(e) {
            let t = this.decodePB(f.jackfruit_proto.GetGameUUIdsResp, e);
            if (t)
                if (t.code == f.jackfruit_proto.ErrorCode.OK) {
                    a.JackfruitManager.tRoomData.gameUUIDs = [];
                    let e = a.StringTools.getArrayLength(t.list);
                    for (let o = 0; o < e; o++) a.JackfruitManager.tRoomData.gameUUIDs.push(t.list[o].game_uuid_js)
                } else this.ToastError(t.code)
        }
        requestJackpotData(e) {
            let t = this.getCurrentRoomId(),
                o = {
                    ante: e
                },
                r = f.jackfruit_proto.JackpotDataReq.encode(o).finish();
            this.sendGameMsg(r, f.jackfruit_proto.CMD.JACKPOT_DATA_REQ, t)
        }
        responseJackpotData(e) {
            let t = this.decodePB(f.jackfruit_proto.JackpotDataResp, e);
            t && (t.code == f.jackfruit_proto.ErrorCode.OK ? (a.StringTools.deepCopy(t.data, a.JackfruitManager.tRoomData.jackpotDataInfo), a.JackfruitManager.tRoomData.jackpotLeftAmount = t.data.leftAmount, a.MessageCenter.send("updata_jackpotdata")) : this.ToastError(t.code))
        }
        requestJackpotAwardList(e) {
            let t = this.getCurrentRoomId(),
                o = {
                    ante: e
                },
                r = f.jackfruit_proto.JackpotAwardListReq.encode(o).finish();
            this.sendGameMsg(r, f.jackfruit_proto.CMD.JACKPOT_AWARD_LIST_REQ, t)
        }
        responseJackpotList(e) {
            let t = this.decodePB(f.jackfruit_proto.JackpotAwardListResp, e);
            if (t)
                if (t.code == f.jackfruit_proto.ErrorCode.OK) {
                    a.JackfruitManager.tRoomData.luckyOne.reset(), a.JackfruitManager.tRoomData.JackpotRecords = [], a.StringTools.deepCopy(t.luckyOne, a.JackfruitManager.tRoomData.luckyOne);
                    for (let e = 0; e < t.lastData.length; e++) {
                        let o = t.lastData[e];
                        a.JackfruitManager.tRoomData.JackpotRecords.push(o)
                    }
                    a.MessageCenter.send("updata_jackpotReward")
                } else this.ToastError(t.code)
        }
        notifyModifyPlaceCards(e) {
            let t = this.decodePB(f.jackfruit_proto.ModifyPlaceCardsNotify, e);
            t && t.roomId == this.getCurrentRoomId() && a.MessageCenter.send("modify_place_card", t.seatId)
        }
        notifyBrandBarrage(e) {
            let t = this.decodePB(f.jackfruit_proto.BrandBarrageNotify, e);
            if (t && t.roomId == this.getCurrentRoomId()) {
                JackfruitMgr.tRoomData.BrandBarrageInfos = [];
                for (let e = 0; e < t.infos.length; e++) {
                    let o = new c;
                    a.StringTools.deepCopy(t.infos[e], o), a.JackfruitManager.tRoomData.BrandBarrageInfos.push(o)
                }
                a.MessageCenter.send("brand_barrage")
            }
        }
        requestNotDisturb(e, t, o) {
            let r = {
                    operate: t,
                    whoId: o
                },
                a = f.jackfruit_proto.NotDisturbReq.encode(r).finish();
            this.sendGameMsg(a, f.jackfruit_proto.CMD.NotDisturb_REQ, e)
        }
        onNotDisturbResponse(e) {
            let t = this.decodePB(f.jackfruit_proto.NotDisturbResp, e);
            t && (1 == t.code ? a.MessageCenter.send("NotDisturb", t) : a.ToastError(t.code))
        }
    }).g_instance = void 0, _ = p)) || _);
    t._RF.pop()
}
import * as t from "./cc.js";
import * as o from "./pokermaster.mjs_cjs=&original=.js";
import * as r from "./cv.js";
import * as s from "./PokerMasterDataMgr.js";
import * as a from "./NetWorkProxy.js";
import * as n from "./PokerMasterDef.js";
import * as i from "./PokerMasterRoomData.js";

function main() {
    t._RF.push({}, "4bd80DyI2RKer36Tlz4+GWA", "PokerMasterBaseSocket", void 0);
    class p extends s {
        constructor(...e) {
            super(...e), this._bInitMsg = !1
        }
        static getInstance() {
            return p._g_Instance || (p._g_Instance = new p), p._g_Instance
        }
        unregisterNetMsgs() {
            this._bInitMsg = !1, o.netWork.unregisterMsgForGame(o.Enum.GameId.PokerMaster)
        }
        _registerNetMsg(e, t) {
            this.registerMessage(e, t, o.Enum.GameId.PokerMaster)
        }
        _sendNetMsg(e, t, r) {
            return this.sendMsg(e, t, r, o.Enum.SeverType.SeverType_Game, o.Enum.GameId.PokerMaster)
        }
        _parseNetMsg(e, t, o) {
            let r = this.decodePB(e, t);
            return console.log(`pokermaster_proto-receive-${o} = ${r}`), r
        }
        _sendLocalMsg(e, t) {
            o.MessageCenter.send(`${a.LocalMsg().MsgPrefix}${e}`, t)
        }
        _toastError(e) {
            e !== i.pokermaster_proto.ErrorCode.OK && o.ToastGameError(o.Enum.GameId.PokerMaster, e)
        }
        _postError(e, t) {
            e !== i.pokermaster_proto.ErrorCode.OK && e !== i.pokermaster_proto.ErrorCode.IN_CALM_DOWN && this._sendLocalMsg(a.LocalMsg().ERROR, e)
        }
        _initNetMsg() {
            this._bInitMsg || (this._bInitMsg = !0, this._registerNetMsg(i.pokermaster_proto.CMD.LOGIN_GAME_RESP, this._handleLoginResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.HEART_BEAT_RESP, this._handleHeartBeatResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.JOIN_ROOM_RESP, this._handleJoinRoomResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.LEAVE_ROOM_RESP, this._handleLeaveRoomResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.LEAVE_ROOM_NOTIFY, this._handleLeaveRoomNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.KICK_NOTIFY, this._handleKickNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.ROOM_TREND_RSP, this._handleTrendResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.ROOM_TREND_NOTICE, this._handleTrendNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.PLAYER_LIST_RESP, this._handlePlayerListResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.GAME_DATA_SYN, this._handleGameDataSynNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.DEAL_NOTIFY, this._handleDealNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.SHOW_ODDS_NOTIFY, this._handleShowOddsNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.START_BET_NOTIFY, this._handleStartBetNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.STOP_BET_NOTIFY, this._handleStopBetNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.GAME_ROUND_END_NOTIFY, this._handleGameRoundEndNofity.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.READY_GAME_NOTIFY, this._handleReadyGameNofity.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.BET_RESP, this._handleBetResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.BET_NOTIFY, this._handleBetNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.START_SETTLEMENT_NOTIFY, this._handleEndBetNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.AUTO_BET_RESP, this._handleAutoBetResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.MERGE_AUTO_BET_NOTIFY, this._handleMergeAutoBetNotify.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.SET_GAME_OPTION_RSP, this._handleSetGameOptionResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_SET_RSP, this._handleAdvanceAutoBetSetResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_RSP, this._handleAdvanceAutoBetResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.CANCEL_ADVANCE_AUTO_BET_RSP, this._handleCancelAdvanceAutoBetResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.BET_REVIEW_RSP, this._handleBetReviewResponse.bind(this)), this._registerNetMsg(i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_ADD_RSP, this._handleAdvanceAutoBetAddResponse.bind(this)))
        }
        getCurrentRoomId() {
            var e;
            return null == (e = o.roomManager.rooms.find((e => e.getCurrentGameID() == o.Enum.GameId.PokerMaster))) ? void 0 : e.getCurrentRoomID()
        }
        requestVerifyLogin() {
            this._initNetMsg();
            let e = o.dataHandler.getMiniGameUserToken();
            if (o.StringTools.getArrayLength(e) <= 0 && (e = o.tools.GetStringByCCFile("user_token"), o.StringTools.getArrayLength(e) <= 0)) return;
            let t = i.pokermaster_proto.LoginReq.create({
                    version: o.config.GET_CLIENT_VERSION(),
                    token: e,
                    client_type: o.config.GET_CLIENT_TYPE()
                }),
                r = i.pokermaster_proto.LoginReq.encode(t).finish();
            this._sendNetMsg(r, i.pokermaster_proto.CMD.LOGIN_GAME_REQ, 0) && o.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: o.Enum.GameId.PokerMaster
            }))
        }
        _handleLoginResponse(e, t) {
            let r = this._parseNetMsg(i.pokermaster_proto.LoginResp, e, t);
            r && (o.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(r)), r.code === i.pokermaster_proto.ErrorCode.OK ? (r.roomid > 0 && o.roomManager.setMiniGameRoomIdTemplate(o.Enum.GameId.PokerMaster, r.roomid), o.netWorkManager.OnPokerMasterServerLogin(r.roomid)) : (o.SwitchLoadingView.hide(), this._toastError(r.code)))
        }
        requestHeartBeat() {
            let e = i.pokermaster_proto.HeartBeatReq.create({
                    uid: o.dataHandler.getMiniGameUserId()
                }),
                t = i.pokermaster_proto.HeartBeatReq.encode(e).finish();
            return this._sendNetMsg(t, i.pokermaster_proto.CMD.HEART_BEAT_REQ, this.getCurrentRoomId())
        }
        _handleHeartBeatResponse(e, t) {
            this._parseNetMsg(i.pokermaster_proto.HeartBeatResp, e, t) && o.netWorkManager.onGameHeartBeat(o.Enum.GameId.PokerMaster)
        }
        requestJoinRoom(e) {
            if (o.netWorkManager.isLoginGameServerSucc(o.Enum.GameId.PokerMaster)) {
                let t = i.pokermaster_proto.JoinRoomReq.create({
                        roomid: e
                    }),
                    r = i.pokermaster_proto.JoinRoomReq.encode(t).finish();
                this._sendNetMsg(r, i.pokermaster_proto.CMD.JOIN_ROOM_REQ, e) && o.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: o.Enum.GameId.PokerMaster,
                    roomId: e
                }))
            } else this.requestVerifyLogin()
        }
        _handleJoinRoomResponse(e, t) {
            let r = this._parseNetMsg(i.pokermaster_proto.JoinRoomResp, e, t);
            r && o.roomManager.onJoinRoomResponse(r, o.Enum.GameId.PokerMaster)
        }
        requestLeaveRoom(e = null) {
            let t = i.pokermaster_proto.LeaveRoomReq.create(),
                r = i.pokermaster_proto.LeaveRoomReq.encode(t).finish();
            const s = o.roomManager.getMiniGameRoomIdTemplate(o.Enum.GameId.PokerMaster);
            this._sendNetMsg(r, i.pokermaster_proto.CMD.LEAVE_ROOM_REQ, s) ? this.addRequestTimeout(i.pokermaster_proto.CMD.LEAVE_ROOM_REQ, s, e) : e && e()
        }
        _handleLeaveRoomResponse(e, t, r, s, a) {
            let n = this._parseNetMsg(i.pokermaster_proto.LeaveRoomResp, e, t);
            n && (this.responseReceived(i.pokermaster_proto.CMD.LEAVE_ROOM_REQ, n.code, a), n.code == i.pokermaster_proto.ErrorCode.OK ? (o.MessageCenter.send("on_leave_room_success"), o.roomManager.onResponse_LeaveRoom(n, s, a)) : (this._postError(n.code), n.code == i.pokermaster_proto.ErrorCode.CAN_NOT_LEAVE_IN_BETTING && this.reqCancelAdvanceAutoBet()))
        }
        _handleLeaveRoomNotify(e) {}
        _handleKickNotify(e, t) {
            let o = this._parseNetMsg(i.pokermaster_proto.KickNotify, e, t);
            o && this._sendLocalMsg(a.LocalMsg().ROOM_KICK, o)
        }
        requestTrend() {
            let e = i.pokermaster_proto.RoomTrendReq.create(),
                t = i.pokermaster_proto.RoomTrendReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.ROOM_TREND_REQ, this.getCurrentRoomId())
        }
        _handleTrendResponse(e) {}
        _handleTrendNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.RoomTrendNotice, e, t);
            if (s) {
                let e = r.getPokerMasterRoom();
                e.iLastRow = s.lastRow, e.iLastCol = s.lastCol;
                let t = s.road,
                    n = s.trend;
                o.StringTools.clearArray(e.vTrendRoad), o.StringTools.clearArray(e.vTrendData);
                for (let t = 0; t < o.StringTools.getArrayLength(n); ++t) {
                    let o = n[t];
                    e.vTrendData.push(o)
                }
                for (let r = 0; r < o.StringTools.getArrayLength(t); ++r) {
                    let o = t[r];
                    e.vTrendRoad.push(o)
                }
                e.tFortune = i.pokermaster_proto.PlayerFortune.create(s.fortune), this._sendLocalMsg(a.LocalMsg().UPDATE_TREND)
            }
        }
        requestPlayerList() {
            let e = i.pokermaster_proto.PlayerListReq.create(),
                t = i.pokermaster_proto.PlayerListReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.PLAYER_LIST_REQ, this.getCurrentRoomId())
        }
        _handlePlayerListResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.PlayerListResp, e, t);
            if (s) {
                let e = r.getPokerMasterRoom();
                o.StringTools.clearArray(e.gamePlayerList), e.brdzplayerNum = s.playerNum;
                let t = s.gamePlayers;
                for (let r = 0; r < o.StringTools.getArrayLength(t); ++r) {
                    let o = t[r];
                    e.gamePlayerList.push(o)
                }
                this._sendLocalMsg(a.LocalMsg().UPDATE_PLAYER_LIST)
            }
        }
        _parseGameRoundEndInfo(e, t) {
            r.getPokerMasterRoom().change_points = e.change_points, r.getPokerMasterRoom().fLeftFortune = e.fortune.fisherFortune, r.getPokerMasterRoom().fRightFortune = e.fortune.sharkFortune, r.getPokerMasterRoom().tRoundresult = i.pokermaster_proto.RoundResult.create(e.roundResult), console.log("boob =>"), o.StringTools.clearArray(r.getPokerMasterRoom().vPlayerSettles);
            for (let t = 0; t < e.playerSettle.length; ++t) {
                let o = i.pokermaster_proto.PlayerSettle.create(e.playerSettle[t]);
                r.getPokerMasterRoom().vPlayerSettles.push(o)
            }
            if (r.getPokerMasterRoom().updatePlayerSettleKeepWinCountAndCoin(), r.getPokerMasterRoom().tOtherPlayerSettle = i.pokermaster_proto.PlayerSettle.create(e.otherPlayers), t) {
                let t = r.getPokerMasterRoom().vLastResult,
                    s = r.getPokerMasterRoom().nMaxLastResultRetention;
                t.push(e.roundResult.winOp), o.StringTools.getArrayLength(t) > s && t.splice(0, 1)
            }
            for (let t = 0; t < e.optionResult.length; ++t) {
                let o = e.optionResult[t].option,
                    s = e.optionResult[t].result,
                    a = e.optionResult[t].loseHand,
                    i = r.getPokerMasterRoom().mapZoneData.get(o);
                i || (i = new n, r.getPokerMasterRoom().mapZoneData.add(o, i)), i.result = s, i.luckLoseHand = a;
                let p = i.vHistoryResults,
                    l = i.maxHistoryResultsRetention;
                p.unshift(s), p.length > l && p.splice(l, p.length - l)
            }
            r.getPokerMasterRoom().nStopWorld = e.stopWorld, r.getPokerMasterRoom().idle_roomid = e.idle_roomid
        }
        _parseGameOddsInfo(e) {
            for (let t = 0; t < e.length; ++t) {
                let o = e[t].option,
                    s = r.getPokerMasterRoom().mapZoneData.get(o);
                s || (s = new n, r.getPokerMasterRoom().mapZoneData.add(o, s)), s.odds = e[t].odds, s.limitBet = e[t].limitRed
            }
        }
        _handleGameDataSynNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.GameDataSynNotify, e, t);
            if (s) {
                if (r.getPokerMasterRoom().reset(), r.getPokerMasterRoom().tCurRoom = i.pokermaster_proto.RoomParam.create(s.param), r.getPokerMasterRoom().u32RoomId = s.param.roomid, r.getPokerMasterRoom().u32Uid = o.dataHandler.getMiniGameUserId(), r.getPokerMasterRoom().bCanAuto = s.canAuto, r.getPokerMasterRoom().bCanAdvanceAuto = s.canAdvanceAuto, r.getPokerMasterRoom().eCurState = s.curState, r.getPokerMasterRoom().llLeftSeconds = s.leftSeconds, r.getPokerMasterRoom().llNextRoundEndStamp = s.nextRoundEndStamp, r.getPokerMasterRoom().llCoinUICritical = o.StringTools.clientGoldByServer(s.BetButtonLimitAmount), r.getPokerMasterRoom().uWhoIsLeader = s.whoIsLeader, r.getPokerMasterRoom().reachLimitBet = s.reachLimitBet, s.squintMsg) {
                    r.getPokerMasterRoom().uWhoIsLeader = s.squintMsg.whoIsLeader, r.getPokerMasterRoom().bCanSquint = s.squintMsg.canSquint, r.getPokerMasterRoom().bSkipSquint = s.squintMsg.skipRound, r.getPokerMasterRoom().fisherLevel = s.squintMsg.fisherLevel, r.getPokerMasterRoom().sharkLevel = s.squintMsg.sharkLevel, o.StringTools.clearArray(r.getPokerMasterRoom().sharkOuts), o.StringTools.clearArray(r.getPokerMasterRoom().dashiOuts);
                    let e = s.squintMsg.fisherOuts.length,
                        t = s.squintMsg.sharkOuts.length;
                    for (let t = 0; t < e; ++t) r.getPokerMasterRoom().dashiOuts.push(i.pokermaster_proto.OutItem.create(s.squintMsg.fisherOuts[t]));
                    for (let e = 0; e < t; ++e) r.getPokerMasterRoom().sharkOuts.push(i.pokermaster_proto.OutItem.create(s.squintMsg.sharkOuts[e]))
                }
                r.getPokerMasterRoom().fLeftFortune = s.fortune.fisherFortune, r.getPokerMasterRoom().fRightFortune = s.fortune.sharkFortune;
                for (let e = 0; e < s.fisherHoleCards.length; ++e) {
                    let t = i.pokermaster_proto.CardItem.create(s.fisherHoleCards[e]);
                    r.getPokerMasterRoom().vLeftHandCards.push(t)
                }
                for (let e = 0; e < s.sharkHoleCards.length; ++e) {
                    let t = i.pokermaster_proto.CardItem.create(s.sharkHoleCards[e]);
                    r.getPokerMasterRoom().vRightHandCards.push(t)
                }
                for (let e = 0; e < s.publicCards.length; ++e) {
                    let t = i.pokermaster_proto.CardItem.create(s.publicCards[e]);
                    r.getPokerMasterRoom().vPublicHoleCards.push(t)
                }
                this._parseGameOddsInfo(s.oddsOp);
                {
                    o.StringTools.clearArray(r.getPokerMasterRoom().vBetCoinOption);
                    let e = o.StringTools.getArrayLength(s.betCoinOption);
                    if (e > 0)
                        for (let t = 0; t < e; ++t) r.getPokerMasterRoom().vBetCoinOption.push(s.betCoinOption[t]);
                    else {
                        let e = o.StringTools.getArrayLength(s.param.amountLevel);
                        for (let t = 0; t < e; ++t) r.getPokerMasterRoom().vBetCoinOption.push(s.param.amountLevel[t])
                    }
                    r.getPokerMasterRoom().eAutoLevel = s.autoLevel, r.getPokerMasterRoom().iUsedAutoBetCount = s.usedAutoBetCount, r.getPokerMasterRoom().iSelectAutoBetCount = s.selectAutoBetCount, o.StringTools.clearArray(r.getPokerMasterRoom().vAutoBetCountList);
                    let t = o.StringTools.getArrayLength(s.AutoBetCountList);
                    for (let e = 0; e < t; ++e) r.getPokerMasterRoom().vAutoBetCountList.push(s.AutoBetCountList[e])
                }
                for (let e = 0; e < s.optionInfo.length; ++e) {
                    let t = s.optionInfo[e];
                    if (t.option === i.pokermaster_proto.BetZoneOption.FISHER_WIN || t.option == i.pokermaster_proto.BetZoneOption.SHARK_WIN || t.option == i.pokermaster_proto.BetZoneOption.FIVE_NONE_1DUI || t.option == i.pokermaster_proto.BetZoneOption.FIVE_2DUI || t.option == i.pokermaster_proto.BetZoneOption.FIVE_SAN_SHUN_TONG || t.option == i.pokermaster_proto.BetZoneOption.FIVE_GOURD || t.option == i.pokermaster_proto.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4) {
                        let e = r.getPokerMasterRoom().mapZoneData.get(t.option);
                        e || (e = new n, r.getPokerMasterRoom().mapZoneData.add(t.option, e)), e.selfBet = t.selfBet, e.totalBet = t.totalBet, o.StringTools.clearArray(e.vTotalBetDetail);
                        for (let r = 0; r < o.StringTools.getArrayLength(t.amount); ++r) e.vTotalBetDetail.push(t.amount[r]);
                        t.selfBet > 0 && (r.getPokerMasterRoom().bHasBetInCurRound = !0)
                    }
                }
                o.StringTools.clearArray(r.getPokerMasterRoom().vOtherPlayer);
                for (let e = 0; e < o.StringTools.getArrayLength(s.players); ++e) {
                    let t = i.pokermaster_proto.GamePlayer.create(s.players[e]);
                    0 === e ? t.uid === o.dataHandler.getMiniGameUserId() ? r.getPokerMasterRoom().tSelfPlayer = t : console.error("PokerMasterSocket.CMD.GAME_DATA_SYN, data error!!!, players[0] must be self!!!") : r.getPokerMasterRoom().vOtherPlayer.push(t)
                } {
                    let e = r.getPokerMasterRoom().vLastResult,
                        t = r.getPokerMasterRoom().nMaxLastResultRetention;
                    o.StringTools.clearArray(e);
                    for (let r = 0; r < s.lastResult.length; ++r) e.push(s.lastResult[r]), o.StringTools.getArrayLength(e) > t && e.splice(0, 1)
                }
                for (let e = 0; e < o.StringTools.getArrayLength(s.optionResults); ++e) {
                    let t = s.optionResults[e].option,
                        a = s.optionResults[e].results,
                        i = s.optionResults[e].loseHand,
                        p = r.getPokerMasterRoom().mapZoneData.get(t);
                    p || (p = new n, r.getPokerMasterRoom().mapZoneData.add(t, p)), p.luckLoseHand = i;
                    let l = p.vHistoryResults,
                        d = p.maxHistoryResultsRetention;
                    o.StringTools.clearArray(l);
                    for (let e = 0; e < o.StringTools.getArrayLength(a); ++e) l.push(a[e]);
                    o.StringTools.getArrayLength(l) > d && l.splice(d, l.length - d)
                }
                s.curState === i.pokermaster_proto.RoundState.WAIT_NEXT_ROUND && this._parseGameRoundEndInfo(i.pokermaster_proto.GameRoundEndNotify.create(s.cachedNotifyMsg), !1), this._sendLocalMsg(a.LocalMsg().GAME_DATA_SYN, o.Enum.GameId.PokerMaster), o.MessageCenter.send("onCalmDownMsg", s)
            }
        }
        _handleDealNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.DealNotify, e, t);
            if (o.MessageCenter.send("onPokerMasterDealNoti"), s) {
                r.getPokerMasterRoom().resetRound(), r.getPokerMasterRoom().llNextRoundEndStamp = s.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = s.leftSeconds, r.getPokerMasterRoom().eCurState = i.pokermaster_proto.RoundState.NEW_ROUND, r.getPokerMasterRoom().bCanAuto = s.canAuto, r.getPokerMasterRoom().bCanUpdateWorldServerGold = !0;
                for (let e = 0; e < s.playerHoleCard.length; ++e) switch (s.playerHoleCard[e].name) {
                    case i.pokermaster_proto.RoleName.Fisher:
                        for (let t = 0; t < s.playerHoleCard[e].Cards.length; ++t) {
                            let o = i.pokermaster_proto.CardItem.create(s.playerHoleCard[e].Cards[t]);
                            r.getPokerMasterRoom().vLeftHandCards.push(o)
                        }
                        break;
                    case i.pokermaster_proto.RoleName.Shark:
                        for (let t = 0; t < s.playerHoleCard[e].Cards.length; ++t) {
                            let o = i.pokermaster_proto.CardItem.create(s.playerHoleCard[e].Cards[t]);
                            r.getPokerMasterRoom().vRightHandCards.push(o)
                        }
                }
                o.StringTools.clearArray(r.getPokerMasterRoom().vOtherPlayer);
                for (let e = 0; e < s.players.length; ++e) {
                    let t = i.pokermaster_proto.GamePlayer.create(s.players[e]);
                    0 == e ? t.uid === o.dataHandler.getMiniGameUserId() ? r.getPokerMasterRoom().tSelfPlayer = t : console.error("PokerMasterSocket.CMD.DEAL_NOTIFY, data error!, players[0] must be self!") : r.getPokerMasterRoom().vOtherPlayer.push(t)
                }
                s.changed && (r.getPokerMasterRoom().tCurRoom = i.pokermaster_proto.RoomParam.create(s.param), this._sendLocalMsg(a.LocalMsg().ROOM_PARAM_CHANGE)), this._sendLocalMsg(a.LocalMsg().STATUS_DEAL)
            }
        }
        _handleShowOddsNotify(e, t) {
            let o = this._parseNetMsg(i.pokermaster_proto.ShowOddsNotify, e, t);
            o && (r.getPokerMasterRoom().llNextRoundEndStamp = o.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = o.leftSeconds, r.getPokerMasterRoom().uWhoIsLeader = o.whoIsLeader, console.log("whoIsLeader = " + o.whoIsLeader), this._parseGameOddsInfo(o.option_odds), this._sendLocalMsg(a.LocalMsg().STATUS_SHOW_ODDS))
        }
        _handleStartBetNotify(e, t) {
            let o = this._parseNetMsg(i.pokermaster_proto.StartBetNotify, e, t);
            o && (r.getPokerMasterRoom().llNextRoundEndStamp = o.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = o.leftSeconds, r.getPokerMasterRoom().eCurState = i.pokermaster_proto.RoundState.BET, r.getPokerMasterRoom().bCanUpdateWorldServerGold = !0, this._sendLocalMsg(a.LocalMsg().STATUS_START_BET))
        }
        _handleStopBetNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.StopBetNotify, e, t);
            if (!s) return;
            r.getPokerMasterRoom().llNextRoundEndStamp = s.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = s.leftSeconds, r.getPokerMasterRoom().uWhoIsLeader = s.whoIsLeader, r.getPokerMasterRoom().eCurState = i.pokermaster_proto.RoundState.STOP_BET, r.getPokerMasterRoom().bCanSquint = s.canSquint, r.getPokerMasterRoom().bSkipSquint = s.skipRound, r.getPokerMasterRoom().fisherLevel = s.fisherLevel, r.getPokerMasterRoom().sharkLevel = s.sharkLevel, o.StringTools.clearArray(r.getPokerMasterRoom().sharkOuts), o.StringTools.clearArray(r.getPokerMasterRoom().dashiOuts);
            let n = s.fisherOuts.length,
                p = s.sharkOuts.length;
            for (let e = 0; e < n; ++e) r.getPokerMasterRoom().dashiOuts.push(i.pokermaster_proto.OutItem.create(s.fisherOuts[e]));
            for (let e = 0; e < p; ++e) r.getPokerMasterRoom().sharkOuts.push(i.pokermaster_proto.OutItem.create(s.sharkOuts[e]));
            o.StringTools.clearArray(r.getPokerMasterRoom().vPublicHoleCards);
            for (let e = 0; e < s.cards.length; ++e) r.getPokerMasterRoom().vPublicHoleCards.push(i.pokermaster_proto.CardItem.create(s.cards[e]));
            this._sendLocalMsg(a.LocalMsg().STATUS_STOP_BET)
        }
        _handleGameRoundEndNofity(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.GameRoundEndNotify, e, t);
            s && (r.getPokerMasterRoom().llNextRoundEndStamp = s.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = s.leftSeconds, r.getPokerMasterRoom().eCurState = i.pokermaster_proto.RoundState.WAIT_NEXT_ROUND, r.getPokerMasterRoom().bCanUpdateWorldServerGold = !1, this._parseGameRoundEndInfo(s, !0), this._sendLocalMsg(a.LocalMsg().STATUS_ROUND_END), o.MessageCenter.send("PokerStarGameRoundEnd"))
        }
        _handleReadyGameNofity(e, t) {
            let o = this._parseNetMsg(i.pokermaster_proto.ReadyGameNotify, e, t);
            o && (r.getPokerMasterRoom().llNextRoundEndStamp = o.nextRoundEndStamp, r.getPokerMasterRoom().llLeftSeconds = o.leftSeconds, r.getPokerMasterRoom().eCurState = i.pokermaster_proto.RoundState.READY_GAME, r.getPokerMasterRoom().bCanUpdateWorldServerGold = !0, r.getPokerMasterRoom().clearMapZoneData(!1), this._sendLocalMsg(a.LocalMsg().STATUS_READY))
        }
        requestBet(e, t) {
            let o = i.pokermaster_proto.BetReq.create();
            o.detail = i.pokermaster_proto.BetDetail.create(), o.detail.option = e, o.detail.betAmount = t;
            let r = i.pokermaster_proto.BetReq.encode(o).finish();
            this._sendNetMsg(r, i.pokermaster_proto.CMD.BET_REQ, this.getCurrentRoomId())
        }
        _handleBetResponse(e, t) {
            let r = this._parseNetMsg(i.pokermaster_proto.BetResp, e, t);
            r && (this._postError(r.code, r.bill), r.code == i.pokermaster_proto.ErrorCode.IN_CALM_DOWN && o.MessageCenter.send("onCalmDownMsg", r))
        }
        _handleBetNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.BetNotify, e, t);
            s && (r.getPokerMasterRoom().updatePlayerCoin(s.uid, s.curCoin), r.getPokerMasterRoom().updateAreaBet(s), s.uid === o.dataHandler.getMiniGameUserId() && (r.getPokerMasterRoom().bHasBetInCurRound = !0), this._sendLocalMsg(a.LocalMsg().BET, s))
        }
        _handleEndBetNotify(e, t) {
            this._parseNetMsg(i.pokermaster_proto.StartSettlementNotify, e, t) && (r.getPokerMasterRoom().bCanUpdateWorldServerGold = !1)
        }
        requestAutoBet() {
            let e = i.pokermaster_proto.AutoBetReq.create(),
                t = i.pokermaster_proto.AutoBetReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.AUTO_BET_REQ, this.getCurrentRoomId())
        }
        _handleAutoBetResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.AutoBetResp, e, t);
            s && (this._postError(s.code, s.bill), r.getPokerMasterRoom().bCanAuto = s.canAuto, this._sendLocalMsg(a.LocalMsg().AUTO_BET), s.code == i.pokermaster_proto.ErrorCode.IN_CALM_DOWN && o.MessageCenter.send("onCalmDownMsg", s))
        }
        _handleMergeAutoBetNotify(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.MergeAutoBetNotify, e, t);
            if (s) {
                for (let e = 0; e < s.notify.length; ++e) {
                    let t = new i.pokermaster_proto.BetNotify(s.notify[e]);
                    r.getPokerMasterRoom().updatePlayerCoin(t.uid, t.curCoin), r.getPokerMasterRoom().updateAreaBet(t), t.uid === o.dataHandler.getMiniGameUserId() && (r.getPokerMasterRoom().bHasBetInCurRound = !0)
                }
                this._sendLocalMsg(a.LocalMsg().AUTO_BET_MERGE, s)
            }
        }
        reqSetGameOption(e, t) {
            let o = i.pokermaster_proto.SetGameOptionReq.create();
            o.autoLevel = t, o.betCoinOption = e;
            let r = i.pokermaster_proto.SetGameOptionReq.encode(o).finish();
            this._sendNetMsg(r, i.pokermaster_proto.CMD.SET_GAME_OPTION_REQ, this.getCurrentRoomId())
        }
        _handleSetGameOptionResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.SetGameOptionResp, e, t);
            if (s && (this._postError(s.code), s.code === i.pokermaster_proto.ErrorCode.OK)) {
                r.getPokerMasterRoom().eAutoLevel = s.autoLevel, o.StringTools.clearArray(r.getPokerMasterRoom().vBetCoinOption);
                for (let e = 0; e < s.betCoinOption.length; ++e) r.getPokerMasterRoom().vBetCoinOption.push(s.betCoinOption[e]);
                this._sendLocalMsg(a.LocalMsg().ADVANCE_BET_LEVEL_CHANGE)
            }
        }
        reqAdvanceAutoBetSet(e) {
            let t = i.pokermaster_proto.AdvanceAutoBetSetReq.create();
            t.count = e;
            let o = i.pokermaster_proto.AdvanceAutoBetSetReq.encode(t).finish();
            this._sendNetMsg(o, i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_SET_REQ, this.getCurrentRoomId())
        }
        _handleAdvanceAutoBetSetResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.AdvanceAutoBetSetRsp, e, t);
            s && (this._postError(s.code), s.code === i.pokermaster_proto.ErrorCode.OK ? (r.getPokerMasterRoom().iUsedAutoBetCount = 0, r.getPokerMasterRoom().iSelectAutoBetCount = s.count, this._sendLocalMsg(a.LocalMsg().ADVANCE_AUTOBET_SET), o.MessageCenter.send("on_advance_autobet_add")) : s.code == i.pokermaster_proto.ErrorCode.IN_CALM_DOWN && o.MessageCenter.send("onCalmDownMsg", s))
        }
        reqAdvanceAutoBet() {
            let e = i.pokermaster_proto.AdvanceAutoBetReq.create(),
                t = i.pokermaster_proto.AdvanceAutoBetReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_REQ, this.getCurrentRoomId())
        }
        _handleAdvanceAutoBetResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.AdvanceAutoBetRsp, e, t);
            s && (s.code === i.pokermaster_proto.ErrorCode.OK && (r.getPokerMasterRoom().iUsedAutoBetCount = s.usedAutoBetCount), s.code == i.pokermaster_proto.ErrorCode.IN_CALM_DOWN ? o.MessageCenter.send("onCalmDownMsg", s) : o.MessageCenter.send(a.LocalMsg().ADVANCE_AUTOBET, s.code))
        }
        reqCancelAdvanceAutoBet() {
            let e = i.pokermaster_proto.CancelAdvanceAutoBetReq.create(),
                t = i.pokermaster_proto.CancelAdvanceAutoBetReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.CANCEL_ADVANCE_AUTO_BET_REQ, this.getCurrentRoomId())
        }
        _handleCancelAdvanceAutoBetResponse(e, t) {
            let o = this._parseNetMsg(i.pokermaster_proto.CancelAdvanceAutoBetRsp, e, t);
            o && (this._postError(o.code), o.code === i.pokermaster_proto.ErrorCode.OK && (r.getPokerMasterRoom().iUsedAutoBetCount = 0, r.getPokerMasterRoom().iSelectAutoBetCount = 0, r.getPokerMasterRoom().reachLimitBet = !1, this._sendLocalMsg(a.LocalMsg().ADVANCE_AUTOBET_CANCEL, o.is_manual)))
        }
        reqBetReview() {
            let e = i.pokermaster_proto.BetReviewReq.create(),
                t = i.pokermaster_proto.BetReviewReq.encode(e).finish();
            this._sendNetMsg(t, i.pokermaster_proto.CMD.BET_REVIEW_REQ, this.getCurrentRoomId())
        }
        _handleBetReviewResponse(e, t) {
            let s = this._parseNetMsg(i.pokermaster_proto.BetReviewRsp, e, t);
            if (s && (this._postError(s.code), s.code === i.pokermaster_proto.ErrorCode.OK)) {
                let e = s.reviewed,
                    t = r.getPokerMasterRoom();
                o.StringTools.clearArray(t.vBetReview);
                for (let r = 0; r < o.StringTools.getArrayLength(e); ++r) {
                    let o = e[r];
                    t.vBetReview.push(o)
                }
                this._sendLocalMsg(a.LocalMsg().UPDATE_REVIEW)
            }
        }
        reqAdvanceAutoBetAdd(e) {
            let t = i.pokermaster_proto.AdvanceAutoBetSetReq.create();
            t.count = e;
            let o = i.pokermaster_proto.AdvanceAutoBetSetReq.encode(t).finish();
            console.log("pokermaster_proto.ADVANCE_AUTO_BET_ADD_REQ==>>" + t), this._sendNetMsg(o, i.pokermaster_proto.CMD.ADVANCE_AUTO_BET_ADD_REQ, this.getCurrentRoomId())
        }
        _handleAdvanceAutoBetAddResponse(e) {
            let t = this.decodePB(i.pokermaster_proto.AdvanceAutoBetAddRsp, e);
            if (t) switch (console.log("pokermaster_proto.ADVANCE_AUTO_BET_ADD_RSP==>>" + t), t.code) {
                case i.pokermaster_proto.ErrorCode.OK:
                    r.getPokerMasterRoom().iUsedAutoBetCount = t.usedAutoBetCount, r.getPokerMasterRoom().iSelectAutoBetCount = t.autoBetCount, o.MessageCenter.send("on_advance_autobet_add");
                    break;
                case i.pokermaster_proto.ErrorCode.REACH_LIMIT_BET:
                    r.getPokerMasterRoom().iSelectAutoBetCount = t.autoBetCount, r.getPokerMasterRoom().reachLimitBet = !0, o.MessageCenter.send("on_advance_autobet_add"), this._sendLocalMsg(a.LocalMsg().REACH_LIMIT_BET, t.numberHandAdded);
                    break;
                case i.pokermaster_proto.ErrorCode.IN_CALM_DOWN:
                    o.MessageCenter.send("onCalmDownMsg", t);
                    break;
                default:
                    this._postError(t.code)
            }
        }
    }
    e("PokerMasterBaseSocket", p), p._g_Instance = null, t._RF.pop()
}
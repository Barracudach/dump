import * as e from "./cc.js";
import * as t from "./humanboy.mjs_cjs=&original=.js";
import * as n from "./cv.js";
import * as a from "./HumanboyDataMgr.js";
import * as r from "./NetWorkProxy.js";
import * as s from "./HumanboyRoomData.js";
import * as _ from "./GameSceneInstance.js";

function main() {
    e._RF.push({}, "d81e74KUZBO45hbpudn95Fv", "HumanboyBaseSocket", void 0);
    class i extends a {
        static getInstance() {
            return i._g_Instance || (i._g_Instance = new i), i._g_Instance
        }
        constructor() {
            super(), this._init()
        }
        _registerMsg(o, e) {
            this.registerMessage(o, e, t.Enum.GameId.HumanBoy)
        }
        _sendMsg(o, e, n) {
            return this.sendMsg(o, e, n, t.Enum.SeverType.SeverType_Game, t.Enum.GameId.HumanBoy)
        }
        _toastError(o) {
            var e;
            if (o === _.humanboy_proto.ErrorCode.OK) return;
            let n = null == (e = s.getInstance(this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            t.ToastGameError(t.Enum.GameId.HumanBoy, o, n)
        }
        _postError(o) {
            o !== _.humanboy_proto.ErrorCode.OK && o !== _.humanboy_proto.ErrorCode.IN_CALM_DOWN && t.MessageCenter.send("on_humanboy_server_error", o)
        }
        _init() {
            this._registerMsg(_.humanboy_proto.CMD.LOGIN_GAME_RESP, this._handleLoginResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.HEART_BEAT_RESP, this._handleHeartBeatResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.JOIN_ROOM_RESP, this._handleJoinRoomResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.LEAVE_ROOM_RESP, this._handleLeaveRoomResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.LEAVE_ROOM_NOTIFY, this._handleLeaveRoomNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.KICK_NOTIFY, this._handleKickNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.ROOM_TREND_RSP, this._handleTrendResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.ROOM_TREND_NOTICE, this._handleTrendNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.PLAYER_LIST_RESP, this._handlePlayerListResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.GAME_DATA_SYN, this._handleGameDataSynNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.DEAL_NOTIFY, this._handleDealNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.START_BET_NOTIFY, this._handleStartBetNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.GAME_ROUND_END_NOTIFY, this._handleGameRoundEndNofity.bind(this)), this._registerMsg(_.humanboy_proto.CMD.GAME_WILL_START_NOTIFY, this._handleGameWillStartNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.BET_RESP, this._handleBetResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.BET_NOTIFY, this._handleBetNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.START_SETTLEMENT_NOTIFY, this._handleEndBetNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.AUTO_BET_RESP, this._handleAutoBetResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.MERGE_AUTO_BET_NOTIFY, this._handleMergeAutoBetNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.DEALER_LIST_RSP, this._handleDealerList.bind(this)), this._registerMsg(_.humanboy_proto.CMD.UPDATE_DEALER_LIST_RSP, this._handleDealerList.bind(this)), this._registerMsg(_.humanboy_proto.CMD.GET_BUY_STOCK_NUM_RSP, this._handleBuyStockNum.bind(this)), this._registerMsg(_.humanboy_proto.CMD.UP_DEALER_RSP, this._handleUpDealer.bind(this)), this._registerMsg(_.humanboy_proto.CMD.UP_DEALER_NOTIFY, this._handleUpDealerNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.KICK_DEALER_APPLY_NOTIFY, this._handleKickDealerApplyNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.DOWN_DEALER_RSP, this._handleDownDealer.bind(this)), this._registerMsg(_.humanboy_proto.CMD.DOWN_DEALER_NOTIFY, this._handleDownDealerNotify.bind(this)), this._registerMsg(_.humanboy_proto.CMD.CANCEL_WAIT_RSP, this._handleCancelWait.bind(this)), this._registerMsg(_.humanboy_proto.CMD.JACKPOT_DATA_RSP, this._handleJackpotData.bind(this)), this._registerMsg(_.humanboy_proto.CMD.JACKPOT_AWARD_LIST_RSP, this._handleRecordData.bind(this)), this._registerMsg(_.humanboy_proto.CMD.SET_GAME_OPTION_RSP, this._handleSetGameOptionResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.ADVANCE_AUTO_BET_SET_RSP, this._handleAdvanceAutoBetSetResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.ADVANCE_AUTO_BET_RSP, this._handleAdvanceAutoBetResponse.bind(this)), this._registerMsg(_.humanboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_RSP, this._handleCancelAdvanceAutoBetResponse.bind(this))
        }
        requestVerifyLogin() {
            let o = t.dataHandler.getUserData().user_token;
            if (t.StringTools.getArrayLength(o) <= 0 && (o = t.tools.GetStringByCCFile("user_token"), t.StringTools.getArrayLength(o) <= 0)) return;
            let e = t.config.GET_CLIENT_VERSION(),
                n = _.humanboy_proto.LoginReq.create({
                    token: o,
                    version: e,
                    client_type: t.config.GET_CLIENT_TYPE()
                }),
                a = _.humanboy_proto.LoginReq.encode(n).finish();
            console.log("humanboy_proto.LOGIN_GAME_REQ==>>" + a);
            this._sendMsg(a, _.humanboy_proto.CMD.LOGIN_GAME_REQ, 0) && t.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: t.Enum.GameId.HumanBoy
            }))
        }
        _handleLoginResponse(o) {
            let e = this.decodePB(_.humanboy_proto.LoginResp, o);
            e && (console.log("humanboy_proto.LOGIN_GAME_RESP==>>" + e), t.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(e)), e.code === _.humanboy_proto.ErrorCode.OK ? (e.roomid > 0 && t.roomManager.setMiniGameRoomIdTemplate(t.Enum.GameId.HumanBoy, e.roomid), t.netWorkManager.OnHumanboyServerLogin(e.roomid)) : (t.SwitchLoadingView.hide(), this._toastError(e.code)))
        }
        requestHeartBeat() {
            let o = _.humanboy_proto.HeartBeatReq.create({
                    uid: t.dataHandler.getUserData().u32Uid
                }),
                e = _.humanboy_proto.HeartBeatReq.encode(o).finish();
            return console.log("humanboy_proto.HEART_BEAT_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.HEART_BEAT_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleHeartBeatResponse(o) {
            let e = this.decodePB(_.humanboy_proto.HeartBeatResp, o);
            e && (console.log("humanboy_proto.HEART_BEAT_RESP==>>" + e), t.netWorkManager.onGameHeartBeat(t.Enum.GameId.HumanBoy))
        }
        requestJoinRoom(o) {
            let e = _.humanboy_proto.JoinRoomReq.create({
                    roomid: o
                }),
                n = _.humanboy_proto.JoinRoomReq.encode(e).finish();
            if (console.log("pb_humanboy.humanboy_proto.JOIN_ROOM_REQ==>>" + n), t.netWorkManager.isLoginGameServerSucc(t.Enum.GameId.HumanBoy)) {
                this._sendMsg(n, _.humanboy_proto.CMD.JOIN_ROOM_REQ, o) && t.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: t.Enum.GameId.HumanBoy,
                    roomId: o
                }))
            } else this.requestVerifyLogin()
        }
        _handleJoinRoomResponse(o) {
            let e = this.decodePB(_.humanboy_proto.JoinRoomResp, o);
            e && (console.log("humanboy_proto.JOIN_ROOM_RESP==>>" + e), t.roomManager.onJoinRoomResponse(e, t.Enum.GameId.HumanBoy))
        }
        requestLeaveRoom() {
            let o = _.humanboy_proto.LeaveRoomReq.create(),
                e = _.humanboy_proto.LeaveRoomReq.encode(o).finish();
            console.log("humanboy_proto.LEAVE_ROOM_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.LEAVE_ROOM_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleLeaveRoomResponse(o, e, n, a, r) {
            let s = this.decodePB(_.humanboy_proto.LeaveRoomResp, o);
            s && (console.log("humanboy_proto.LEAVE_ROOM_RESP==>>" + s), t.roomManager.onResponse_LeaveRoom(s, a, r))
        }
        _handleLeaveRoomNotify(o) {}
        _handleKickNotify(o) {
            let e = this.decodePB(_.humanboy_proto.KickNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.KICK_NOTIFY==>>" + e), t.MessageCenter.send("on_humanboy_kick_notify", e))
        }
        _handleGameDataSynNotify(o) {
            let e = this.decodePB(_.humanboy_proto.GameDataSynNotify, o);
            if (e) {
                console.log("pb_humanboy.humanboy_proto.GAME_DATA_SYN==>>" + e), n.getHumanboyRoom().reset(), n.getHumanboyRoom().tCurRoom = _.humanboy_proto.RoomParam.create(e.param), n.getHumanboyRoom().u32RoomId = e.param.roomid, n.getHumanboyRoom().u32Uid = t.dataHandler.getUserData().u32Uid, n.getHumanboyRoom().llJackpotLeftMoney = e.jackpotLeftMoney, n.getHumanboyRoom().bCanAuto = e.canAuto, n.getHumanboyRoom().bCanAdvanceAuto = e.canAdvanceAuto, n.getHumanboyRoom().eCurState = e.curState, n.getHumanboyRoom().llLeftSeconds = e.leftSeconds, n.getHumanboyRoom().llNextRoundEndStamp = e.nextRoundEndStamp, n.getHumanboyRoom().bShowDealerInvitation = e.showMiddleUpDealerBtn, n.getHumanboyRoom().uTotalStockNum = e.totalStockNum, n.getHumanboyRoom().llCoinUICritical = t.StringTools.clientGoldByServer(e.BetButtonLimitAmount);
                {
                    t.StringTools.clearArray(n.getHumanboyRoom().vBetCoinOption);
                    let o = t.StringTools.getArrayLength(e.betCoinOption);
                    if (o > 0)
                        for (let t = 0; t < o; ++t) n.getHumanboyRoom().vBetCoinOption.push(e.betCoinOption[t]);
                    else {
                        let o = t.StringTools.getArrayLength(e.param.amountLevel);
                        for (let t = 0; t < o; ++t) n.getHumanboyRoom().vBetCoinOption.push(e.param.amountLevel[t])
                    }
                    n.getHumanboyRoom().eAutoLevel = e.autoLevel, n.getHumanboyRoom().iUsedAutoBetCount = e.usedAutoBetCount, n.getHumanboyRoom().iSelectAutoBetCount = e.selectAutoBetCount, t.StringTools.clearArray(n.getHumanboyRoom().vAutoBetCountList);
                    let a = t.StringTools.getArrayLength(e.AutoBetCountList);
                    for (let o = 0; o < a; ++o) n.getHumanboyRoom().vAutoBetCountList.push(e.AutoBetCountList[o])
                } {
                    let o = e.optionInfo;
                    for (let e = 0; e < o.length; ++e) {
                        let a = o[e];
                        if (a.option === _.humanboy_proto.BetZoneOption.POS1 || a.option == _.humanboy_proto.BetZoneOption.POS2 || a.option == _.humanboy_proto.BetZoneOption.POS3 || a.option == _.humanboy_proto.BetZoneOption.POS4 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_1 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_2 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_3 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_4 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_5 || a.option == _.humanboy_proto.BetZoneOption.POS_LUCK_6) {
                            n.getHumanboyRoom().mapZoneData.has(a.option) || n.getHumanboyRoom().mapZoneData.add(a.option, new r);
                            let o = n.getHumanboyRoom().mapZoneData.get(a.option);
                            o.selfBet = a.selfBet, o.totalBet = a.totalBet, t.StringTools.clearArray(o.vTotalBetDetail);
                            for (let e = 0; e < t.StringTools.getArrayLength(a.amount); ++e) o.vTotalBetDetail.push(a.amount[e]);
                            a.selfBet > 0 && (n.getHumanboyRoom().bHasBetInCurRound = !0)
                        }
                    }
                }
                n.getHumanboyRoom().bOnDealerList = 1 == e.onDealerList, t.StringTools.clearArray(n.getHumanboyRoom().vDealerInfo);
                for (let o = 0; o < t.StringTools.getArrayLength(e.dealer); ++o) {
                    let t = _.humanboy_proto.DealerPlayerInfo.create(e.dealer[o]);
                    n.getHumanboyRoom().vDealerInfo.push(t)
                } {
                    t.StringTools.clearArray(n.getHumanboyRoom().vOtherPlayer);
                    let o = e.players;
                    for (let e = 0; e < t.StringTools.getArrayLength(o); ++e) {
                        let a = o[e];
                        0 == e ? a.uid === t.dataHandler.getUserData().u32Uid ? n.getHumanboyRoom().tSelfPlayer = a : console.error("HumanboySocket._HandleGameDataSynNotify, data error!!!, players[0] must be self!!!") : n.getHumanboyRoom().vOtherPlayer.push(a)
                    }
                }
                for (let o = 0; o < t.StringTools.getArrayLength(e.optionResults); ++o) {
                    let a = e.optionResults[o].option,
                        s = e.optionResults[o].results,
                        _ = e.optionResults[o].loseHand;
                    n.getHumanboyRoom().mapZoneData.has(a) || n.getHumanboyRoom().mapZoneData.add(a, new r);
                    let i = n.getHumanboyRoom().mapZoneData.get(a);
                    i.luckLoseHand = _;
                    let u = i.vHistoryResults,
                        m = i.maxHistoryResultsRetention;
                    t.StringTools.clearArray(u);
                    for (let o = 0; o < t.StringTools.getArrayLength(s); ++o) u.push(s[o]);
                    t.StringTools.getArrayLength(u) > m && u.splice(m, u.length - m)
                }
                e.curState === _.humanboy_proto.RoundState.WAIT_NEXT_ROUND && this._parseGameRoundEndNotify(_.humanboy_proto.GameRoundEndNotify.create(e.cachedNotifyMsg)), t.MessageCenter.send("on_humanboy_gamedata_syn_notify"), t.MessageCenter.send("onCalmDownMsg", e)
            }
        }
        _parseGameRoundEndNotify(o, e) {
            n.getHumanboyRoom().change_points = o.change_points, t.StringTools.clearArray(n.getHumanboyRoom().vPlayerHoleCard);
            for (let e = 0; e < o.playerHoleCard.length; ++e) {
                let t = _.humanboy_proto.PlayerHoleCard.create(o.playerHoleCard[e]);
                n.getHumanboyRoom().vPlayerHoleCard.push(t)
            }
            t.StringTools.clearArray(n.getHumanboyRoom().vPlayerSettles);
            for (let e = 0; e < o.playerSettle.length; ++e) {
                let t = _.humanboy_proto.PlayerSettle.create(o.playerSettle[e]);
                n.getHumanboyRoom().vPlayerSettles.push(t)
            }
            n.getHumanboyRoom().updatePlayerSettleKeepWinCountAndCoin(), n.getHumanboyRoom().tOtherPlayerSettle = _.humanboy_proto.PlayerSettle.create(o.otherPlayers);
            for (let e = 0; e < o.optionResult.length; ++e) {
                let t = o.optionResult[e].option,
                    a = o.optionResult[e].result,
                    s = o.optionResult[e].loseHand;
                n.getHumanboyRoom().mapZoneData.has(t) || n.getHumanboyRoom().mapZoneData.add(t, new r);
                let _ = n.getHumanboyRoom().mapZoneData.get(t);
                _.result = a, _.luckLoseHand = s;
                let i = _.vHistoryResults,
                    u = _.maxHistoryResultsRetention;
                i.unshift(a), i.length > u && i.splice(u, i.length - u)
            }
            t.StringTools.clearArray(n.getHumanboyRoom().vHitJackpotAward);
            for (let e = 0; e < o.hitJackpotAward.length; ++e) {
                let t = _.humanboy_proto.HitJackpotAward.create(o.hitJackpotAward[e]);
                n.getHumanboyRoom().vHitJackpotAward.push(t)
            }
            t.StringTools.clearArray(n.getHumanboyRoom().vDealerInfo);
            for (let e = 0; e < o.dealer.length; ++e) {
                let t = _.humanboy_proto.DealerPlayerInfo.create(o.dealer[e]);
                n.getHumanboyRoom().vDealerInfo.push(t)
            }
            n.getHumanboyRoom().uDealerWinAll = o.dealerWinAll, n.getHumanboyRoom().eMaxLevel = o.maxLevel, n.getHumanboyRoom().eMaxLevelOption = o.maxLevelOption, n.getHumanboyRoom().nStopWorld = o.stopWorld, n.getHumanboyRoom().idle_roomid = o.idle_roomid, n.getHumanboyRoom().llJackpotLeftMoney = o.jackpotLeftMoney
        }
        _handleDealNotify(o) {
            let e = this.decodePB(_.humanboy_proto.DealNotify, o);
            if (e) {
                console.log("pb_humanboy.humanboy_proto.DEAL_NOTIFY==>>" + e), n.getHumanboyRoom().resetRound(), n.getHumanboyRoom().llNextRoundEndStamp = e.nextRoundEndStamp, n.getHumanboyRoom().llLeftSeconds = e.leftSeconds, n.getHumanboyRoom().eCurState = _.humanboy_proto.RoundState.NEW_ROUND, n.getHumanboyRoom().bCanAuto = e.canAuto, n.getHumanboyRoom().uTotalStockNum = e.totalStockNum, n.getHumanboyRoom().bCanUpdateWorldServerGold = !0, t.StringTools.clearArray(n.getHumanboyRoom().vDealerInfo);
                for (let o = 0; o < e.dealerInfo.length; ++o) {
                    let t = _.humanboy_proto.DealerPlayerInfo.create(e.dealerInfo[o]);
                    n.getHumanboyRoom().vDealerInfo.push(t)
                }
                t.StringTools.clearArray(n.getHumanboyRoom().vOtherPlayer);
                for (let o = 0; o < e.players.length; ++o) {
                    let a = _.humanboy_proto.GamePlayer.create(e.players[o]);
                    0 == o ? a.uid === t.dataHandler.getUserData().u32Uid ? n.getHumanboyRoom().tSelfPlayer = a : console.error("HumanboySocket.CMD.DEAL_NOTIFY, data error!, players[0] must be self!") : n.getHumanboyRoom().vOtherPlayer.push(a)
                }
                e.changed && (n.getHumanboyRoom().tCurRoom = _.humanboy_proto.RoomParam.create(e.param), t.MessageCenter.send("on_humanboy_room_param_change_notify")), t.MessageCenter.send("on_humanboy_deal_notify")
            }
        }
        _handleStartBetNotify(o) {
            let e = this.decodePB(_.humanboy_proto.StartBetNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.START_BET_NOTIFY==>>" + e), n.getHumanboyRoom().llNextRoundEndStamp = e.nextRoundEndStamp, n.getHumanboyRoom().llLeftSeconds = e.leftSeconds, n.getHumanboyRoom().eCurState = _.humanboy_proto.RoundState.BET, n.getHumanboyRoom().bCanUpdateWorldServerGold = !0, t.MessageCenter.send("on_humanboy_start_bet_notify"))
        }
        _handleGameRoundEndNofity(o) {
            let e = this.decodePB(_.humanboy_proto.GameRoundEndNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.GAME_ROUND_END_NOTIFY ==>>" + e), this._parseGameRoundEndNotify(e, !0), n.getHumanboyRoom().llNextRoundEndStamp = e.nextRoundEndStamp, n.getHumanboyRoom().llLeftSeconds = e.leftSeconds, n.getHumanboyRoom().eCurState = _.humanboy_proto.RoundState.WAIT_NEXT_ROUND, n.getHumanboyRoom().bCanUpdateWorldServerGold = !1, t.MessageCenter.send("on_humanboy_game_round_end_notify"))
        }
        _handleGameWillStartNotify(o) {
            let e = this.decodePB(_.humanboy_proto.GameWillStartNotify, o);
            if (e) {
                console.log("pb_humanboy.humanboy_proto.GAME_WILL_START_NOTIFY ==>>" + e), n.getHumanboyRoom().llNextRoundEndStamp = e.nextRoundEndStamp, n.getHumanboyRoom().llLeftSeconds = e.leftSeconds, n.getHumanboyRoom().eCurState = e.roundState, n.getHumanboyRoom().bShowDealerInvitation = e.showMiddleUpDealerBtn, n.getHumanboyRoom().clearMapZoneData(!1), n.getHumanboyRoom().bCanUpdateWorldServerGold = !0, t.StringTools.clearArray(n.getHumanboyRoom().vDealerInfo);
                for (let o = 0; o < e.dealer.length; ++o) {
                    let t = _.humanboy_proto.DealerPlayerInfo.create(e.dealer[o]);
                    n.getHumanboyRoom().vDealerInfo.push(t)
                }
                t.MessageCenter.send("on_humanboy_willstart_notify", e.surplusStockNum)
            }
        }
        requestBet(o, e) {
            let t = _.humanboy_proto.BetDetail.create();
            t.option = o, t.betAmount = e;
            let n = _.humanboy_proto.BetReq.create({
                    detail: t
                }),
                a = _.humanboy_proto.BetReq.encode(n).finish();
            console.log("humanboy_proto.BET_REQ ==>>" + a), this._sendMsg(a, _.humanboy_proto.CMD.BET_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleBetResponse(o) {
            let e = this.decodePB(_.humanboy_proto.BetResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.BET_RESP==>>" + e), this._postError(e.code), e.code == _.humanboy_proto.ErrorCode.IN_CALM_DOWN && t.MessageCenter.send("onCalmDownMsg", e))
        }
        _handleBetNotify(o) {
            let e = this.decodePB(_.humanboy_proto.BetNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.BET_NOTIFY==>>" + e), n.getHumanboyRoom().updatePlayerCoin(e.uid, e.curCoin), n.getHumanboyRoom().updateAreaBet(e), n.getHumanboyRoom().setCurOneBet(e.uid, _.humanboy_proto.BetDetail.create(e.detail)), e.uid === t.dataHandler.getUserData().u32Uid && (n.getHumanboyRoom().bHasBetInCurRound = !0), t.MessageCenter.send("on_humanboy_bet_notify"))
        }
        _handleEndBetNotify(o) {
            let e = this.decodePB(_.humanboy_proto.StartSettlementNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.START_SETTLEMENT_NOTIFY==>>" + e), n.getHumanboyRoom().bCanUpdateWorldServerGold = !1)
        }
        requestTrend() {
            let o = _.humanboy_proto.TrendReq.create(),
                e = _.humanboy_proto.TrendReq.encode(o).finish();
            console.log("humanboy_proto.ROOM_TREND_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.ROOM_TREND_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleTrendResponse(o) {
            let e = this.decodePB(_.humanboy_proto.TrendResp, o);
            if (e)
                if (console.log("pb_humanboy.humanboy_proto.ROOM_TREND_RSP==>>" + e), e.code === _.humanboy_proto.ErrorCode.OK) {
                    let o = n.getHumanboyRoom();
                    t.StringTools.clearArray(o.TrendOption), o.handLevelStatistics = _.humanboy_proto.RoomTrendLevelStatistics.create(e.handLevelStatistics);
                    let a = e.trendOption;
                    for (let e = 0; e < t.StringTools.getArrayLength(a); ++e) {
                        let t = a[e];
                        o.TrendOption.push(t)
                    }
                    t.MessageCenter.send("on_humanboy_trend_notify")
                } else this._toastError(e.code)
        }
        _handleTrendNotify(o) {}
        requestPlayerList() {
            let o = _.humanboy_proto.PlayerListReq.create(),
                e = _.humanboy_proto.PlayerListReq.encode(o).finish();
            console.log("humanboy_proto.PLAYER_LIST_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.PLAYER_LIST_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handlePlayerListResponse(o) {
            let e = this.decodePB(_.humanboy_proto.PlayerListResp, o);
            if (e) {
                let o = n.getHumanboyRoom();
                t.StringTools.clearArray(o.gamePlayerList), o.brdzplayerNum = e.playerNum;
                let a = e.gamePlayers;
                for (let e = 0; e < t.StringTools.getArrayLength(a); ++e) {
                    let t = a[e];
                    o.gamePlayerList.push(t)
                }
                t.MessageCenter.send("on_update_humanboy_playerlist_notify")
            }
        }
        requestDealerList() {
            let o = _.humanboy_proto.DealerListReq.create(),
                e = _.humanboy_proto.DealerListReq.encode(o).finish();
            console.log("humanboy_proto.DEALER_LIST_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.DEALER_LIST_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        requestUpdateDealerList() {
            let o = _.humanboy_proto.DealerListReq.create(),
                e = _.humanboy_proto.DealerListReq.encode(o).finish();
            console.log("humanboy_proto.UPDATE_DEALER_LIST_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.UPDATE_DEALER_LIST_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleDealerList(o) {
            let e = this.decodePB(_.humanboy_proto.DealerListResp, o);
            if (e && (console.log("pb_humanboy.humanboy_proto.DEALER_LIST_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK)) {
                t.StringTools.clearArray(n.getHumanboyRoom().vDealerWatingList);
                for (let o = 0; o < e.waitList.length; ++o) {
                    let t = _.humanboy_proto.DealerPlayerInfo.create(e.waitList[o]);
                    n.getHumanboyRoom().vDealerWatingList.push(t)
                }
                t.StringTools.clearArray(n.getHumanboyRoom().vDealerCandidateList);
                for (let o = 0; o < e.dealerList.length; ++o) {
                    let t = _.humanboy_proto.DealerPlayerInfo.create(e.dealerList[o]);
                    n.getHumanboyRoom().vDealerCandidateList.push(t)
                }
                t.MessageCenter.send("on_humanboy_dealer_list")
            }
        }
        requestBuyStockNum() {
            let o = _.humanboy_proto.GetBuyStockNumReq.create(),
                e = _.humanboy_proto.GetBuyStockNumReq.encode(o).finish();
            console.log("humanboy_proto.GET_BUY_STOCK_NUM_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.GET_BUY_STOCK_NUM_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleBuyStockNum(o) {
            let e = this.decodePB(_.humanboy_proto.GetBuyStockNumResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.GET_BUY_STOCK_NUM_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK && (n.getHumanboyRoom().uCanBuyStockNum = e.stockNum))
        }
        requestUpDealer(o) {
            let e = _.humanboy_proto.UpDealerReq.create({
                    buyStockNum: o
                }),
                t = _.humanboy_proto.UpDealerReq.encode(e).finish();
            console.log("humanboy_proto.UP_DEALER_REQ==>>" + t), this._sendMsg(t, _.humanboy_proto.CMD.UP_DEALER_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleUpDealer(o) {
            let e = this.decodePB(_.humanboy_proto.UpDealerResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.UP_DEALER_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK && t.MessageCenter.send("on_humanboy_dealer_up", e.buyStockNum))
        }
        _handleUpDealerNotify(o) {
            let e = this.decodePB(_.humanboy_proto.UpDealerNotify, o);
            e && (e.uid === t.dataHandler.getUserData().u32Uid && (n.getHumanboyRoom().tSelfPlayer.curCoin = e.curCoin, n.getHumanboyRoom().bOnDealerList = !0), t.MessageCenter.send("on_humanboy_dealer_up_notify", e.uid))
        }
        _handleKickDealerApplyNotify(o) {
            let e = this.decodePB(_.humanboy_proto.KickDealerApplyNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.KICK_DEALER_APPLY_NOTIFY==>>" + e), t.MessageCenter.send("on_humanboy_kickdealerapply_notify", e.reason))
        }
        requestCancelWait() {
            let o = _.humanboy_proto.CancelWaitReq.create(),
                e = _.humanboy_proto.CancelWaitReq.encode(o).finish();
            console.log("humanboy_proto.CANCEL_WAIT_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.CANCEL_WAIT_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleCancelWait(o) {
            let e = this.decodePB(_.humanboy_proto.CancelWaitResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.CANCEL_WAIT_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK && t.MessageCenter.send("on_humanboy_dealer_cancel_wait"))
        }
        requestDownDealer() {
            let o = _.humanboy_proto.DownDealerReq.create(),
                e = _.humanboy_proto.DownDealerReq.encode(o).finish();
            console.log("humanboy_proto.DOWN_DEALER_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.DOWN_DEALER_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleDownDealer(o) {
            let e = this.decodePB(_.humanboy_proto.DownDealerResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.DOWN_DEALER_RSP==>>" + e), this._postError(e.code), n.getHumanboyRoom().tDownDealerResp = e, e.code === _.humanboy_proto.ErrorCode.OK && t.MessageCenter.send("on_humanboy_dealer_down", e.doNow))
        }
        _handleDownDealerNotify(o) {
            let e = this.decodePB(_.humanboy_proto.DownDealerNotify, o);
            e && (console.log("pb_humanboy.humanboy_proto.DOWN_DEALER_NOTIFY==>>" + e), n.getHumanboyRoom().tDownDealerNotify = e, e.uid === t.dataHandler.getUserData().u32Uid && (n.getHumanboyRoom().tSelfPlayer.curCoin = e.curCoin, n.getHumanboyRoom().bOnDealerList = !1), t.MessageCenter.send("on_humanboy_dealer_down_notify"))
        }
        requestJackpotData(o) {
            let e = _.humanboy_proto.JackpotDataReq.create({
                    roomType: o
                }),
                t = _.humanboy_proto.JackpotDataReq.encode(e).finish();
            this._sendMsg(t, _.humanboy_proto.CMD.JACKPOT_DATA_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleJackpotData(o) {
            let e = this.decodePB(_.humanboy_proto.JackpotDataResp, o);
            e.code == _.humanboy_proto.ErrorCode.OK ? (n.getHumanboyRoom().jackpotData = _.humanboy_proto.JackpotDataInfo.create(e.data), t.MessageCenter.send("on_humanboy_jackpot_notify")) : this._toastError(e.code)
        }
        requestRecordData(o) {
            let e = _.humanboy_proto.JackpotAwardListReq.create({
                    roomType: o
                }),
                t = _.humanboy_proto.JackpotAwardListReq.encode(e).finish();
            this._sendMsg(t, _.humanboy_proto.CMD.JACKPOT_AWARD_LIST_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleRecordData(o) {
            let e = this.decodePB(_.humanboy_proto.JackpotAwardListResp, o);
            if (e && (n.getHumanboyRoom().lastAwardData = [], e.code == _.humanboy_proto.ErrorCode.OK)) {
                n.getHumanboyRoom().luckyOne = _.humanboy_proto.AwardData.create(e.luckyOne), e.luckyOne.amount > 0 && n.getHumanboyRoom().lastAwardData.push(_.humanboy_proto.AwardData.create(e.luckyOne));
                let o = e.lastData;
                for (let e = 0; e < o.length; e++) {
                    let t = _.humanboy_proto.AwardData.create(o[e]);
                    n.getHumanboyRoom().lastAwardData.push(t)
                }
                t.MessageCenter.send("on_humanboy_record_notify")
            }
        }
        requestAutoBet() {
            let o = _.humanboy_proto.AutoBetReq.create(),
                e = _.humanboy_proto.AutoBetReq.encode(o).finish();
            console.log("humanboy_proto.AUTO_BET_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.AUTO_BET_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleAutoBetResponse(o) {
            let e = this.decodePB(_.humanboy_proto.AutoBetResp, o);
            e && (console.log("pb_humanboy.humanboy_proto.AUTO_BET_RESP==>>" + e), this._postError(e.code), n.getHumanboyRoom().bCanAuto = e.canAuto, t.MessageCenter.send("on_humanboy_auto_bet"), e.code == _.humanboy_proto.ErrorCode.IN_CALM_DOWN && t.MessageCenter.send("onCalmDownMsg", e))
        }
        _handleMergeAutoBetNotify(o) {
            let e = this.decodePB(_.humanboy_proto.MergeAutoBetNotify, o);
            if (e) {
                console.log("pb_humanboy.humanboy_proto.MERGE_AUTO_BET_NOTIFY==>>" + e);
                for (let o = 0; o < e.notify.length; ++o) {
                    let a = new _.humanboy_proto.BetNotify(e.notify[o]);
                    n.getHumanboyRoom().updatePlayerCoin(a.uid, a.curCoin), n.getHumanboyRoom().updateAreaBet(a), n.getHumanboyRoom().setCurOneBet(a.uid, new _.humanboy_proto.BetDetail(a.detail)), a.uid === t.dataHandler.getUserData().u32Uid && (n.getHumanboyRoom().bHasBetInCurRound = !0), t.MessageCenter.send("on_humanboy_merge_auto_bet_act", e.notify.length)
                }
                t.MessageCenter.send("on_humanboy_merge_auto_bet_end", e.notify.length)
            }
        }
        reqSetGameOption(o, e) {
            let n = [];
            t.StringTools.deepCopy(o, n);
            let a = _.humanboy_proto.SetGameOptionReq.create({
                    autoLevel: e,
                    betCoinOption: n
                }),
                r = _.humanboy_proto.SetGameOptionReq.encode(a).finish();
            console.log("humanboy_proto.SET_GAME_OPTION_REQ==>>" + r), this._sendMsg(r, _.humanboy_proto.CMD.SET_GAME_OPTION_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleSetGameOptionResponse(o) {
            let e = this.decodePB(_.humanboy_proto.SetGameOptionResp, o);
            if (e && (console.log("pb_humanboy.humanboy_proto.SET_GAME_OPTION_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK)) {
                n.getHumanboyRoom().eAutoLevel = e.autoLevel, t.StringTools.clearArray(n.getHumanboyRoom().vBetCoinOption);
                for (let o = 0; o < e.betCoinOption.length; ++o) n.getHumanboyRoom().vBetCoinOption.push(e.betCoinOption[o]);
                t.MessageCenter.send("on_humanboy_bet_amount_level_change")
            }
        }
        reqAdvanceAutoBetSet(o) {
            let e = _.humanboy_proto.AdvanceAutoBetSetReq.create({
                    count: o
                }),
                t = _.humanboy_proto.AdvanceAutoBetSetReq.encode(e).finish();
            console.log("humanboy_proto.ADVANCE_AUTO_BET_SET_REQ==>>" + t), this._sendMsg(t, _.humanboy_proto.CMD.ADVANCE_AUTO_BET_SET_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleAdvanceAutoBetSetResponse(o) {
            let e = this.decodePB(_.humanboy_proto.AdvanceAutoBetSetRsp, o);
            e && (console.log("pb_humanboy.humanboy_proto.ADVANCE_AUTO_BET_SET_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK && (n.getHumanboyRoom().iUsedAutoBetCount = 0, n.getHumanboyRoom().iSelectAutoBetCount = e.count, t.MessageCenter.send("on_humanboy_advance_autobet_set")), e.code == _.humanboy_proto.ErrorCode.IN_CALM_DOWN && t.MessageCenter.send("onCalmDownMsg", e))
        }
        reqAdvanceAutoBet() {
            let o = _.humanboy_proto.AdvanceAutoBetReq.create(),
                e = _.humanboy_proto.AdvanceAutoBetReq.encode(o).finish();
            console.log("humanboy_proto.ADVANCE_AUTO_BET_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.ADVANCE_AUTO_BET_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleAdvanceAutoBetResponse(o) {
            let e = this.decodePB(_.humanboy_proto.AdvanceAutoBetRsp, o);
            e && (console.log("pb_humanboy.humanboy_proto.ADVANCE_AUTO_BET_RSP==>>" + e), e.code === _.humanboy_proto.ErrorCode.OK && (n.getHumanboyRoom().iUsedAutoBetCount = e.usedAutoBetCount), e.code == _.humanboy_proto.ErrorCode.IN_CALM_DOWN ? t.MessageCenter.send("onCalmDownMsg", e) : t.MessageCenter.send("on_humanboy_advance_autobet", e.code))
        }
        reqCancelAdvanceAutoBet() {
            let o = _.humanboy_proto.CancelAdvanceAutoBetReq.create(),
                e = _.humanboy_proto.CancelAdvanceAutoBetReq.encode(o).finish();
            console.log("humanboy_proto.CANCEL_ADVANCE_AUTO_BET_REQ==>>" + e), this._sendMsg(e, _.humanboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_REQ, s.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        _handleCancelAdvanceAutoBetResponse(o) {
            let e = this.decodePB(_.humanboy_proto.CancelAdvanceAutoBetRsp, o);
            e && (console.log("pb_humanboy.humanboy_proto.CANCEL_ADVANCE_AUTO_BET_RSP==>>" + e), this._postError(e.code), e.code === _.humanboy_proto.ErrorCode.OK && (n.getHumanboyRoom().iUsedAutoBetCount = 0, n.getHumanboyRoom().iSelectAutoBetCount = 0, t.MessageCenter.send("on_humanboy_advance_autobet_cancel", e.is_manual)))
        }
    }
    o("HumanboyBaseSocket", i), i._g_Instance = null, e._RF.pop()
}
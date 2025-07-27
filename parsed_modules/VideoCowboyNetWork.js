import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as i from "./video_cowboy.mjs_cjs=&original=.js";
import * as d from "./cv.js";
import * as r from "./cv.js";
import * as _ from "./cv.js";
import * as s from "./cv.js";
import * as a from "./cv.js";
import * as y from "./cv.js";
import * as l from "./cv.js";
import * as m from "./CowboyRoomData.js";
import * as u from "./RoomData.js";
import * as g from "./NetWorkProxy.js";
import * as R from "./VideoCowboyManager.js";
import * as c from "./GameDataManager.js";

function main() {
    var C, p;
    e._RF.push({}, "08199ngE8JITYS2cct5+E6i", "VideoCowboyNetWork", void 0);
    const {
        ccclass: b,
        property: w
    } = t;
    o("VideoCowboyNetWork", b(((p = class o extends u {
        static getInstance() {
            return o.g_instance || (o.g_instance = new o, o.g_instance.init()), o.g_instance
        }
        getServerType() {
            return i.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool ? i.Enum.SeverType.SeverType_Game : i.Enum.SeverType.SererType_World_WPTO
        }
        getUserID() {
            return i.dataHandler.getMiniGameUserId()
        }
        sendGameMsg(o, e, t, n = i.Enum.SeverType.SeverType_Game, d = i.Enum.GameId.VideoCowboy) {
            return n = this.getServerType(), this.sendMsg(o, e, t, n, d)
        }
        registerMsg(o, e) {
            this.registerMessage(o, e, i.Enum.GameId.VideoCowboy)
        }
        init() {
            this.registerMsg(g.Enum.MSGID.HEART_BEAT_RESP, this.responseHeartBeat.bind(this)), this.registerMsg(g.Enum.MSGID.LOGIN_GAME_RESP, this.responseLoginServer.bind(this)), this.registerMsg(g.Enum.MSGID.JOIN_ROOM_RESP, this.JoinRoomResponse.bind(this)), this.registerMsg(g.Enum.MSGID.PLAYER_LIST_RESP, this.HandlePlayerListResponse.bind(this)), this.registerMsg(g.Enum.MSGID.BET_RESP, this.HandleBetResponse.bind(this)), this.registerMsg(g.Enum.MSGID.BET_NOTIFY, this.HandleBetNotify.bind(this)), this.registerMsg(g.Enum.MSGID.AUTO_BET_RESP, this.HandleAutoBetResponse.bind(this)), this.registerMsg(g.Enum.MSGID.MERGE_AUTO_BET_NOTIFY, this.HandleMergeAutoBetNotify.bind(this)), this.registerMsg(g.Enum.MSGID.ROOM_TREND_RSP, this.HandleTrendResponse.bind(this)), this.registerMsg(g.Enum.MSGID.ROOM_TREND_NOTICE, this.HandleTrendNotify.bind(this)), this.registerMsg(g.Enum.MSGID.DEAL_NOTIFY, this.HandleDealNotify.bind(this)), this.registerMsg(g.Enum.MSGID.START_BET_NOTIFY, this.HandleStartBetNotify.bind(this)), this.registerMsg(g.Enum.MSGID.GAME_ROUND_END_NOTIFY, this.HandleGameRoundEndNofity.bind(this)), this.registerMsg(g.Enum.MSGID.KICK_NOTIFY, this.HandleKickNotify.bind(this)), this.registerMsg(g.Enum.MSGID.GAME_DATA_SYN, this.HandleGameDataSynNotify.bind(this)), this.registerMsg(g.Enum.MSGID.LEAVE_ROOM_RESP, this.HandleLeaveRoomResp.bind(this)), this.registerMsg(g.Enum.MSGID.START_SETTLEMENT_NOTIFY, this._HandleEndBetNotify.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.SET_GAME_OPTION_RSP, this._handleSetGameOptionResponse.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_SET_RSP, this._handleAdvanceAutoBetSetResponse.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_RSP, this._handleAdvanceAutoBetResponse.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_RSP, this._handleCancelAdvanceAutoBetResponse.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_ADD_RSP, this._handleAdvanceAutoBetAddResponse.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.STOP_BET_NOTIFY, this._HandleStopBetNotify.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.SHOW_CARD_NOTIFY, this._HandleShowCardNotify.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.SKIP_ROUND_NOTIFY, this._HandleSkipRoundNotify.bind(this)), this.registerMsg(c.video_cowboy_proto.CMD.CANCEL_ROUND_NOTIFY, this._HandleCancelRoundNotify.bind(this))
        }
        getCurrentRoomId() {
            return i.roomManager.getCurrentRoomID()
        }
        PostCowboyError(o) {
            o != g.Enum.ErrorCode.OK && i.MessageCenter.send("on_cowboy_server_error", o)
        }
        requestLoginServer() {
            console.log("====> cowboy websocket was opened.");
            let o = {
                    token: i.dataHandler.getMiniGameUserToken(),
                    version: i.config.GET_CLIENT_VERSION(),
                    client_type: i.config.GET_CLIENT_TYPE()
                },
                e = c.video_cowboy_proto.LoginReq.encode(o).finish();
            console.log(e);
            this.sendGameMsg(e, g.Enum.MSGID.LOGIN_GAME_REQ, 0) && i.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: i.Enum.GameId.VideoCowboy
            }))
        }
        responseLoginServer(o, e, t, d, s) {
            var r;
            let a = null == (r = i.roomManager.getRoomByIds(d, s)) ? void 0 : r.gameScene,
                l = this.decodePB(c.video_cowboy_proto.LoginResp, o);
            if (l) {
                let o = l.code;
                if (i.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(l)), o == c.video_cowboy_proto.ErrorCode.OK) {
                    l.roomid > 0 && i.roomManager.setMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy, l.roomid), g.getVideoCowboyRoom().xianluList = [];
                    let o = n.isBrowser ? l.WebvideoSource : l.videoSource;
                    for (let e = 0; e < o.length; ++e) g.getVideoCowboyRoom().xianluList.push(o[e]);
                    i.netWorkManager.OnVideoCowboyServerLogin(l.roomid)
                } else i.SwitchLoadingView.hide(), i.ToastGameError(i.Enum.GameId.VideoCowboy, o, a)
            }
        }
        requestHeartBeat() {
            let o = {
                    uid: this.getUserID()
                },
                e = c.video_cowboy_proto.HeartBeatReq.encode(o).finish();
            return this.sendGameMsg(e, g.Enum.MSGID.HEART_BEAT_REQ, 0)
        }
        responseHeartBeat(o, e, t, n, d) {
            let s = this.decodePB(c.video_cowboy_proto.HeartBeatResp, o);
            if (null != s) {
                let o = s.uid;
                console.log("uid::.>" + o), i.netWorkManager.onGameHeartBeat(n)
            }
        }
        RequestJoinRoom(o) {
            let e = {
                roomid: o
            };
            if (i.netWorkManager.isLoginGameServerSucc(i.Enum.GameId.VideoCowboy)) {
                let t = c.video_cowboy_proto.JoinRoomReq.encode(e).finish();
                this.sendGameMsg(t, g.Enum.MSGID.JOIN_ROOM_REQ, o) && i.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: i.Enum.GameId.VideoCowboy,
                    roomId: o
                }))
            } else this.requestLoginServer()
        }
        JoinRoomResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.JoinRoomResp, o);
            e && i.roomManager.onJoinRoomResponse(e, i.Enum.GameId.VideoCowboy)
        }
        RequestPlayerList() {
            let o = c.video_cowboy_proto.PlayerListReq.encode({}).finish();
            this.sendGameMsg(o, g.Enum.MSGID.PLAYER_LIST_REQ, this.getCurrentRoomId())
        }
        HandlePlayerListResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.PlayerListResp, o);
            if (e) {
                i.StringTools.deepCopy(e.self, g.getVideoCowboyRoom().playerself), g.getVideoCowboyRoom().gamePlayerList = [], g.getVideoCowboyRoom().dzplayerNum = e.playerNum;
                let o = e.gamePlayers,
                    t = o.length;
                for (let e = 0; e < t; e++) {
                    let t = o[e],
                        n = new a;
                    i.StringTools.deepCopy(t, n), g.getVideoCowboyRoom().gamePlayerList.push(n)
                }
                i.MessageCenter.send("on_update_playerlist_notify")
            }
        }
        RequestBet(o, e) {
            let t = new l;
            t.option = o, t.betAmount = e;
            let n = {
                    detail: t
                },
                i = c.video_cowboy_proto.BetReq.encode(n).finish();
            this.sendGameMsg(i, g.Enum.MSGID.BET_REQ, this.getCurrentRoomId())
        }
        HandleBetResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.BetResp, o);
            e && this.PostCowboyError(e.code)
        }
        HandleBetNotify(o) {
            const e = R.getDataInstanceByGameAndRoomId(i.Enum.GameId.VideoCowboy, i.roomManager.getMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(c.video_cowboy_proto.BetNotify, o);
            t && (g.getVideoCowboyRoom().updatePlayerCoin(t.uid, t.curCoin), g.getVideoCowboyRoom().updateZoneBet(t.uid, t.detail.option, t.selfBet, t.totalBet), g.getVideoCowboyRoom().updateCurOneBet(t.uid, t.detail), t.uid === this.getUserID() && (g.getVideoCowboyRoom().hasBetInCurRound = !0), i.MessageCenter.send("on_cowboy_bet_notify"))
        }
        RequestAutoBet() {
            let o = c.video_cowboy_proto.AutoBetReq.encode({}).finish();
            this.sendGameMsg(o, g.Enum.MSGID.AUTO_BET_REQ, this.getCurrentRoomId())
        }
        HandleAutoBetResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.AutoBetResp, o);
            e && (this.PostCowboyError(e.code), g.getVideoCowboyRoom().canAuto = e.canAuto, i.MessageCenter.send("on_cowboy_auto_bet_succ"))
        }
        HandleMergeAutoBetNotify(o) {
            let e = this.decodePB(c.video_cowboy_proto.MergeAutoBetNotify, o);
            if (e) {
                let o = e.notify,
                    t = o.length;
                for (let e = 0; e < t; e++) {
                    let t = o[e];
                    g.getVideoCowboyRoom().updatePlayerCoin(t.uid, t.curCoin), g.getVideoCowboyRoom().updateZoneBet(t.uid, t.detail.option, t.selfBet, t.totalBet), g.getVideoCowboyRoom().updateCurOneBet(t.uid, t.detail), t.uid === this.getUserID() && (g.getVideoCowboyRoom().hasBetInCurRound = !0), i.MessageCenter.send("on_cowboy_auto_bet_notify")
                }
                i.MessageCenter.send("on_cowboy_auto_bet_notify_handle_over", t)
            }
        }
        RequestLeaveRoom(o = null) {
            let e = c.video_cowboy_proto.LeaveRoomReq.encode({
                roomuuid: 0
            }).finish();
            this.sendGameMsg(e, g.Enum.MSGID.LEAVE_ROOM_REQ, this.getCurrentRoomId()) ? this.addRequestTimeout(g.Enum.MSGID.LEAVE_ROOM_REQ, this.getCurrentRoomId(), o) : o && o()
        }
        HandleLeaveRoomResp(o, e, t, n, d) {
            let s = this.decodePB(c.video_cowboy_proto.LeaveRoomResp, o);
            s && (this.responseReceived(g.Enum.MSGID.LEAVE_ROOM_REQ, s.code, d), s.code == c.video_cowboy_proto.ErrorCode.OK ? i.MessageCenter.send("on_cowboy_leave_room_succ", {
                data: s,
                gameId: n,
                roomId: d
            }) : (this.PostCowboyError(s.code), s.code == c.video_cowboy_proto.ErrorCode.CAN_NOT_LEAVE_IN_BETTING && this.ReqCancelAdvanceAutoBet()))
        }
        RequestTrend() {
            let o = c.video_cowboy_proto.RoomTrendReq.encode({
                roomuuid: 0
            }).finish();
            this.sendGameMsg(o, g.Enum.MSGID.ROOM_TREND_REQ, this.getCurrentRoomId())
        }
        HandleTrendResponse(o) {
            this.decodePB(c.video_cowboy_proto.RoomTrendRsp, o)
        }
        HandleTrendNotify(o) {
            let e = this.decodePB(c.video_cowboy_proto.RoomTrendNotice, o);
            if (e) {
                g.getVideoCowboyRoom().trendData = [], g.getVideoCowboyRoom().dailyStat = [], g.getVideoCowboyRoom().trendRoad = [], g.getVideoCowboyRoom().lastRow = e.lastRow, g.getVideoCowboyRoom().lastCol = e.lastCol;
                let o = e.trend,
                    t = e.stats,
                    n = e.road,
                    r = o.length;
                for (let e = 0; e < r; e++) {
                    let t = o[e],
                        n = new d;
                    i.StringTools.deepCopy(t, n), g.getVideoCowboyRoom().trendData.push(n)
                }
                let a = t.length;
                for (let o = 0; o < a; o++) {
                    let e = t[o],
                        n = new s;
                    i.StringTools.deepCopy(e, n), g.getVideoCowboyRoom().dailyStat.push(n)
                }
                let l = n.length;
                for (let o = 0; o < l; o++) {
                    let e = n[o],
                        t = new _;
                    i.StringTools.deepCopy(e, t), g.getVideoCowboyRoom().trendRoad.push(t)
                }
                i.MessageCenter.send("on_update_trend_notify")
            }
        }
        HandleDealNotify(o) {
            const e = R.getDataInstanceByGameAndRoomId(i.Enum.GameId.VideoCowboy, i.roomManager.getMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(c.video_cowboy_proto.DealNotify, o);
            if (t) {
                g.getVideoCowboyRoom().ResetRound(), g.getVideoCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, g.getVideoCowboyRoom().leftSeconds = t.leftSeconds, g.getVideoCowboyRoom().curState = g.Enum.RoundState.NEW_ROUND, g.getVideoCowboyRoom().canAuto = t.canAuto, g.getVideoCowboyRoom().bCanUpdateWorldServerGold = !0;
                let o = new m;
                i.StringTools.deepCopy(t.card, o), g.getVideoCowboyRoom().publicCards.push(o);
                let e = t.players,
                    n = e.length;
                for (let o = 0; o < n; o++) {
                    let t = e[o];
                    0 == o ? t.uid == this.getUserID() ? g.getVideoCowboyRoom().updateSelfPlayer(t) : console.log("SocketHandler3::_HandleGameDataSynNotify, data error!!!, players[0] must be self!!!") : g.getVideoCowboyRoom().addPlayer(t)
                }
                let d = t.lastResult,
                    s = d.length;
                for (let o = 0; o < s; o++) g.getVideoCowboyRoom().historyResults.push(d[o]);
                t.changed && (i.StringTools.deepCopy(t.param, g.getVideoCowboyRoom().pkRoomParam), i.MessageCenter.send("on_cowboy_room_param_change_notify")), i.MessageCenter.send("on_cowboy_deal_notify")
            }
        }
        HandleStartBetNotify(o) {
            const e = R.getDataInstanceByGameAndRoomId(i.Enum.GameId.VideoCowboy, i.roomManager.getMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(c.video_cowboy_proto.StartBetNotify, o);
            t && (g.getVideoCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, g.getVideoCowboyRoom().leftSeconds = t.leftSeconds, g.getVideoCowboyRoom().curState = g.Enum.RoundState.BET, g.getVideoCowboyRoom().bCanUpdateWorldServerGold = !0, i.MessageCenter.send("on_cowboy_start_bet_notify"))
        }
        HandleGameRoundEndNofity(o) {
            const e = R.getDataInstanceByGameAndRoomId(i.Enum.GameId.VideoCowboy, i.roomManager.getMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(c.video_cowboy_proto.GameRoundEndNotify, o);
            t && (this.ParseGameRoundEndNotify(t, !0), g.getVideoCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, g.getVideoCowboyRoom().leftSeconds = t.leftSeconds, g.getVideoCowboyRoom().curState = g.Enum.RoundState.WAIT_NEXT_ROUND, g.getVideoCowboyRoom().isOpen = t.openRoads, g.getVideoCowboyRoom().bCanUpdateWorldServerGold = !1, i.MessageCenter.send("on_cowboy_game_round_end_notify"))
        }
        ParseGameRoundEndNotify(o, e) {
            g.getVideoCowboyRoom().change_points = o.change_points, e = 1 == e, g.getVideoCowboyRoom().redHandCards = [], g.getVideoCowboyRoom().blueHandCards = [];
            let t = o.playerHoleCard,
                n = t.length;
            for (let o = 0; o < n; o++) {
                let e = t[o],
                    n = e.Cards,
                    d = n.length;
                for (let o = 0; o < d; o++) {
                    let t = new m;
                    i.StringTools.deepCopy(n[o], t), e.name == g.Enum.RoleName.Red ? g.getVideoCowboyRoom().redHandCards.push(t) : e.name == g.Enum.RoleName.Blue && g.getVideoCowboyRoom().blueHandCards.push(t)
                }
            }
            g.getVideoCowboyRoom().publicCards = [];
            let d = o.publicCards,
                s = d.length;
            for (let o = 0; o < s; o++) {
                let e = d[o],
                    t = new m;
                i.StringTools.deepCopy(e, t), g.getVideoCowboyRoom().publicCards.push(t)
            }
            g.getVideoCowboyRoom().playerSettles.clear();
            let a = o.playerSettle;
            s = a.length;
            for (let o = 0; o < s; o++) {
                let e = a[o],
                    t = new y;
                i.StringTools.deepCopy(e, t), g.getVideoCowboyRoom().playerSettles.add(e.uid, t), g.getVideoCowboyRoom().updatePlayerKeepWinCount(e.uid, e.keepWinCount)
            }
            g.getVideoCowboyRoom().otherPlayersSettle.reset(), i.StringTools.deepCopy(o.otherPlayers, g.getVideoCowboyRoom().otherPlayersSettle), g.getVideoCowboyRoom().matchOption = [];
            let l = o.matchOption;
            s = l.length;
            for (let o = 0; o < s; o++) g.getVideoCowboyRoom().matchOption.push(l[o]);
            let _ = c.video_cowboy_proto.RoundResult.create(o.roundResult);
            if (g.getVideoCowboyRoom().result = _.result, g.getVideoCowboyRoom().redLevel = _.redLevel, g.getVideoCowboyRoom().blueLevel = _.blueLevel, e) {
                0 == g.getVideoCowboyRoom().result ? g.getVideoCowboyRoom().historyResults.push(g.Enum.BetZoneOption.EQUAL) : 1 == g.getVideoCowboyRoom().result ? g.getVideoCowboyRoom().historyResults.push(g.Enum.BetZoneOption.RED_WIN) : -1 == g.getVideoCowboyRoom().result ? g.getVideoCowboyRoom().historyResults.push(g.Enum.BetZoneOption.BLUE_WIN) : console.log("SocketHandler3::ParseGameRoundEndNotify, error result: %d", g.getVideoCowboyRoom().result);
                let e = g.getVideoCowboyRoom().mapZoneData,
                    t = o.optionResult.length;
                for (let n = 0; n < t; ++n) {
                    let t = o.optionResult[n].option,
                        i = o.optionResult[n].result,
                        d = o.optionResult[n].loseHand,
                        s = e.get(t);
                    s || (e.add(t, new r), s = e.get(t)), s.result = i, s.luckLoseHand = d;
                    let a = s.vHistoryResults,
                        l = s.maxHistoryResultsRetention;
                    a.unshift(i), a.length > l && a.splice(l, a.length - l)
                }
            }
            g.getVideoCowboyRoom().winCards = [];
            let u = _.Cards;
            s = u.length;
            for (let o = 0; o < s; o++) {
                let e = c.video_cowboy_proto.CardItem.create(u[o]),
                    t = new m;
                i.StringTools.deepCopy(e, t), g.getVideoCowboyRoom().winCards.push(t)
            }
            g.getVideoCowboyRoom().stopWorld = o.stopWorld
        }
        HandleKickNotify(o) {
            let e = this.decodePB(c.video_cowboy_proto.KickNotify, o);
            e && i.MessageCenter.send("on_cowboy_kick_notify", e.kickType)
        }
        HandleGameDataSynNotify(o) {
            var e;
            let t = this.decodePB(c.video_cowboy_proto.GameDataSynNotify, o);
            const n = R.getDataInstanceByGameAndRoomId(i.Enum.GameId.VideoCowboy, (null == t || null == (e = t.param) ? void 0 : e.roomid) ?? i.roomManager.getMiniGameRoomIdTemplate(i.Enum.GameId.VideoCowboy));
            if (n && (n.tRoomData.m_bIsReconnectMode = !1), t) {
                g.getVideoCowboyRoom().Reset(), g.getVideoCowboyRoom().pkRoomParam = c.video_cowboy_proto.RoomParam.create(t.param), g.getVideoCowboyRoom().u32RoomId = t.param.roomid, g.getVideoCowboyRoom().u32Uid = this.getUserID(), g.getVideoCowboyRoom().isOpen = t.openRoads, g.getVideoCowboyRoom().llCoinUICritical = i.StringTools.clientGoldByServer(t.BetButtonLimitAmount), g.getVideoCowboyRoom().reachLimitBet = t.reachLimitBet;
                {
                    i.StringTools.clearArray(g.getVideoCowboyRoom().vBetCoinOption);
                    let o = i.StringTools.getArrayLength(t.betCoinOption);
                    if (o > 0)
                        for (let e = 0; e < o; ++e) g.getVideoCowboyRoom().vBetCoinOption.push(t.betCoinOption[e]);
                    else
                        for (let o = 0; o < i.StringTools.getArrayLength(t.param.amountLevel); ++o) g.getVideoCowboyRoom().vBetCoinOption.push(t.param.amountLevel[o]);
                    g.getVideoCowboyRoom().eAutoLevel = t.autoLevel, g.getVideoCowboyRoom().iUsedAutoBetCount = t.usedAutoBetCount, g.getVideoCowboyRoom().iSelectAutoBetCount = t.selectAutoBetCount, g.getVideoCowboyRoom().canAdvanceAuto = t.canAdvanceAuto, i.StringTools.clearArray(g.getVideoCowboyRoom().vAutoBetCountList);
                    for (let o = 0; o < i.StringTools.getArrayLength(t.AutoBetCountList); ++o) g.getVideoCowboyRoom().vAutoBetCountList.push(t.AutoBetCountList[o])
                }
                let o = t.optionInfo,
                    e = o.length;
                for (let t = 0; t < e; t++) {
                    let e = o[t];
                    if (e.option == g.Enum.BetZoneOption.BetZoneOption_DUMMY || e.option == g.Enum.BetZoneOption.WIN_BEGIN || e.option == g.Enum.BetZoneOption.WIN_END || e.option == g.Enum.BetZoneOption.HOLE_BEGIN || e.option == g.Enum.BetZoneOption.HOLE_END || e.option == g.Enum.BetZoneOption.FIVE_BEGIN || e.option == g.Enum.BetZoneOption.FIVE_END) continue;
                    g.getVideoCowboyRoom().selfZoneBet.add(e.option, e.selfBet), g.getVideoCowboyRoom().totalZoneBet.add(e.option, e.totalBet);
                    let n = e.amount,
                        i = [],
                        d = n.length;
                    for (let o = 0; o < d; o++) i.push(n[o]);
                    g.getVideoCowboyRoom().allZoneBet.add(e.option, i), e.selfBet > 0 && (g.getVideoCowboyRoom().hasBetInCurRound = !0)
                }
                g.getVideoCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, g.getVideoCowboyRoom().leftSeconds = t.leftSeconds, g.getVideoCowboyRoom().curState = t.curState, g.getVideoCowboyRoom().canAuto = t.canAuto;
                let n = t.players;
                e = n.length;
                for (let o = 0; o < e; o++) {
                    let e = n[o];
                    0 == o ? e.uid == this.getUserID() ? g.getVideoCowboyRoom().updateSelfPlayer(e) : console.log("SocketHandler3::_HandleGameDataSynNotify, data error!!!, players[0] must be self!!!") : g.getVideoCowboyRoom().addPlayer(e)
                }
                g.getVideoCowboyRoom().historyResults = [];
                let d = t.lastResult;
                e = d.length;
                for (let o = 0; o < e; o++) g.getVideoCowboyRoom().historyResults.push(d[o]);
                let s = g.getVideoCowboyRoom().mapZoneData,
                    a = t.optionResults.length;
                for (let o = 0; o < a; ++o) {
                    let e = t.optionResults[o].option,
                        n = t.optionResults[o].results,
                        d = t.optionResults[o].loseHand,
                        a = s.get(e);
                    a || (s.add(e, new r), a = s.get(e)), a.luckLoseHand = d;
                    let l = a.vHistoryResults,
                        _ = a.maxHistoryResultsRetention;
                    l.splice(0, i.StringTools.getArrayLength(l)), i.StringTools.deepCopy(n, l), l.length > _ && l.splice(_, l.length - _)
                }
                let l = t.publicCards;
                e = l.length;
                for (let o = 0; o < e; o++) {
                    let e = l[o],
                        t = new m;
                    i.StringTools.deepCopy(e, t), g.getVideoCowboyRoom().publicCards.push(t)
                }
                t.curState == g.Enum.RoundState.WAIT_NEXT_ROUND && this.ParseGameRoundEndNotify(t.cachedNotifyMsg);
                let _ = t.cards.length;
                for (let o = 0; o < _; o++) g.getVideoCowboyRoom().updateOpenCardData(t.cards[o]);
                i.MessageCenter.send("on_cowboy_gamedata_syn_notify", i.Enum.GameId.VideoCowboy)
            }
        }
        _HandleEndBetNotify(o) {
            this.decodePB(c.video_cowboy_proto.StartSettlementNotify, o);
            g.getVideoCowboyRoom().bCanUpdateWorldServerGold = !1
        }
        reqSetGameOption(o, e) {
            let t = [];
            i.StringTools.deepCopy(o, t);
            let n = c.video_cowboy_proto.SetGameOptionReq.create({
                    autoLevel: e,
                    betCoinOption: t
                }),
                d = c.video_cowboy_proto.SetGameOptionReq.encode(n).finish();
            console.log("videoCowboy_proto.SET_GAME_OPTION_REQ==>>" + d), this.sendGameMsg(d, c.video_cowboy_proto.CMD.SET_GAME_OPTION_REQ, this.getCurrentRoomId())
        }
        _handleSetGameOptionResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.SetGameOptionResp, o);
            if (e && (console.log("video_cowboy.video_cowboy_proto.SET_GAME_OPTION_RSP==>>" + e), this.PostCowboyError(e.code), e.code === c.video_cowboy_proto.ErrorCode.OK)) {
                g.getVideoCowboyRoom().eAutoLevel = e.autoLevel, i.StringTools.clearArray(g.getVideoCowboyRoom().vBetCoinOption);
                for (let o = 0; o < e.betCoinOption.length; ++o) g.getVideoCowboyRoom().vBetCoinOption.push(e.betCoinOption[o]);
                i.MessageCenter.send("on_cowboy_bet_amount_level_change")
            }
        }
        reqAdvanceAutoBetSet(o) {
            let e = {
                    count: o
                },
                t = c.video_cowboy_proto.AdvanceAutoBetSetReq.encode(e).finish();
            console.log("videoCowboy_proto.ADVANCE_AUTO_BET_SET_REQ==>>" + t), this.sendGameMsg(t, c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_SET_REQ, this.getCurrentRoomId())
        }
        _handleAdvanceAutoBetSetResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.AdvanceAutoBetSetRsp, o);
            e && (console.log("video_cowboy.video_cowboy_proto.ADVANCE_AUTO_BET_SET_RSP==>>" + e), this.PostCowboyError(e.code), e.code === c.video_cowboy_proto.ErrorCode.OK && (g.getVideoCowboyRoom().iUsedAutoBetCount = 0, g.getVideoCowboyRoom().iSelectAutoBetCount = e.count, i.MessageCenter.send("on_cowboy_advance_autobet_set")))
        }
        reqAdvanceAutoBet() {
            let o = c.video_cowboy_proto.AdvanceAutoBetReq.encode({}).finish();
            console.log("videoCowboy_proto.ADVANCE_AUTO_BET_REQ==>>" + o), this.sendGameMsg(o, c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_REQ, this.getCurrentRoomId())
        }
        _handleAdvanceAutoBetResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.AdvanceAutoBetRsp, o);
            e && (console.log("video_cowboy.video_cowboy_proto.ADVANCE_AUTO_BET_RSP==>>" + e), e.code === c.video_cowboy_proto.ErrorCode.OK && (g.getVideoCowboyRoom().iUsedAutoBetCount = e.usedAutoBetCount), i.MessageCenter.send("on_cowboy_advance_autobet", e.code))
        }
        ReqCancelAdvanceAutoBet() {
            let o = c.video_cowboy_proto.CancelAdvanceAutoBetReq.encode({}).finish();
            console.log("videoCowboy_proto.CANCEL_ADVANCE_AUTO_BET_REQ==>>" + o), this.sendGameMsg(o, c.video_cowboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_REQ, this.getCurrentRoomId())
        }
        _handleCancelAdvanceAutoBetResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.CancelAdvanceAutoBetRsp, o);
            e && (console.log("video_cowboy.video_cowboy_proto.CANCEL_ADVANCE_AUTO_BET_RSP==>>" + e), this.PostCowboyError(e.code), e.code === c.video_cowboy_proto.ErrorCode.OK && (g.getVideoCowboyRoom().iUsedAutoBetCount = 0, g.getVideoCowboyRoom().iSelectAutoBetCount = 0, g.getVideoCowboyRoom().reachLimitBet = !1, i.MessageCenter.send("on_cowboy_advance_autobet_cancel", e.is_manual)))
        }
        _HandleStopBetNotify(o) {
            this.decodePB(c.video_cowboy_proto.StopBetNotify, o) && i.MessageCenter.send("on_videoCowboy_HandleStopBetNotify")
        }
        _HandleShowCardNotify(o) {
            let e = this.decodePB(c.video_cowboy_proto.ShowCardNotify, o);
            if (e) {
                let o = e.cards.length;
                for (let t = 0; t < o; t++) g.getVideoCowboyRoom().updateOpenCardData(c.video_cowboy_proto.WrapCard.create(e.cards[t]));
                g.getVideoCowboyRoom().updateOpenCardData(c.video_cowboy_proto.WrapCard.create(e.newCard)), i.MessageCenter.send("videoCowboy_ShowCardNotify", "1")
            }
        }
        _HandleSkipRoundNotify(o) {
            i.MessageCenter.send("on_videoCowboy_HandleSkipRoundNotify")
        }
        _HandleCancelRoundNotify(o) {
            g.getVideoCowboyRoom().openCardData.clear(), i.MessageCenter.send("on_videoCowboy_HandleCancelRoundNotify")
        }
        reqAdvanceAutoBetAdd(o) {
            let e = {
                    count: o
                },
                t = c.video_cowboy_proto.AdvanceAutoBetSetReq.encode(e).finish();
            console.log("cowboy_proto.ADVANCE_AUTO_BET_SET_REQ==>>" + t), this.sendGameMsg(t, c.video_cowboy_proto.CMD.ADVANCE_AUTO_BET_REQ, i.roomManager.getCurrentRoomID())
        }
        _handleAdvanceAutoBetAddResponse(o) {
            let e = this.decodePB(c.video_cowboy_proto.AdvanceAutoBetAddRsp, o);
            if (e) switch (console.log("cowboy_proto.ADVANCE_AUTO_BET_ADD_RSP==>>" + e), e.code) {
                case c.video_cowboy_proto.ErrorCode.OK:
                    g.getVideoCowboyRoom().iUsedAutoBetCount = e.usedAutoBetCount, g.getVideoCowboyRoom().iSelectAutoBetCount = e.autoBetCount, i.MessageCenter.send("on_advance_autobet_add");
                    break;
                case c.video_cowboy_proto.ErrorCode.REACH_LIMIT_BET:
                    g.getVideoCowboyRoom().iSelectAutoBetCount = e.autoBetCount, g.getVideoCowboyRoom().reachLimitBet = !0, i.MessageCenter.send("on_advance_autobet_add"), i.MessageCenter.send("on_cowboy_advance_autobet_limit_reached", e.numberHandAdded);
                    break;
                default:
                    this.PostCowboyError(e.code)
            }
        }
    }).g_instance = void 0, C = p)) || C);
    e._RF.pop()
}
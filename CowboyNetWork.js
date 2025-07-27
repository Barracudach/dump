import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cowboy.mjs_cjs=&original=.js";
import * as a from "./cv.js";
import * as d from "./cb.js";
import * as g from "./cb.js";
import * as r from "./cb.js";
import * as i from "./cb.js";
import * as m from "./cb.js";
import * as y from "./cb.js";
import * as l from "./cb.js";
import * as u from "./CowboyRoomData.js";
import * as c from "./RoomData.js";
import * as R from "./NetWorkProxy.js";
import * as _ from "./NetWorkProxy.js";
import * as C from "./ConnectionTracing.js";
import * as p from "./GameDataManager.js";

function main() {
    var b, w;
    e._RF.push({}, "042c0yUqUZH85Eu5tB4r0cS", "CowboyNetWork", void 0);
    const {
        ccclass: E,
        property: h
    } = t;
    o("CowboyNetWork", E(((w = class o extends c {
        static getInstance() {
            return o.g_instance || (o.g_instance = new o, o.g_instance.init()), o.g_instance
        }
        getServerTypeCowboy() {
            return s.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool ? s.Enum.SeverType.SeverType_Game : s.Enum.SeverType.SererType_World_WPTO
        }
        getUserID() {
            return s.dataHandler.getMiniGameUserId()
        }
        sendGameMsg(o, e, t, a = s.Enum.SeverType.SeverType_Game, r = s.Enum.GameId.CowBoy) {
            return a = this.getServerTypeCowboy(), n(`**** sendGameMsg : id = ${e}, roomId : ${t}, serverType : ${a}`), this.sendMsg(o, e, t, a, r)
        }
        registerMsg(o, e) {
            this.registerMessage(o, e, s.Enum.GameId.CowBoy)
        }
        init() {
            this.registerMsg(a.Enum.MSGID.HEART_BEAT_RESP, this.responseHeartBeat.bind(this)), this.registerMsg(a.Enum.MSGID.LOGIN_GAME_RESP, this.responseLoginServer.bind(this)), this.registerMsg(a.Enum.MSGID.JOIN_ROOM_RESP, this.JoinRoomResponse.bind(this)), this.registerMsg(a.Enum.MSGID.PLAYER_LIST_RESP, this.HandlePlayerListResponse.bind(this)), this.registerMsg(a.Enum.MSGID.BET_RESP, this.HandleBetResponse.bind(this)), this.registerMsg(a.Enum.MSGID.BET_NOTIFY, this.HandleBetNotify.bind(this)), this.registerMsg(a.Enum.MSGID.AUTO_BET_RESP, this.HandleAutoBetResponse.bind(this)), this.registerMsg(a.Enum.MSGID.MERGE_AUTO_BET_NOTIFY, this.HandleMergeAutoBetNotify.bind(this)), this.registerMsg(a.Enum.MSGID.ROOM_TREND_RSP, this.HandleTrendResponse.bind(this)), this.registerMsg(a.Enum.MSGID.ROOM_TREND_NOTICE, this.HandleTrendNotify.bind(this)), this.registerMsg(a.Enum.MSGID.DEAL_NOTIFY, this.HandleDealNotify.bind(this)), this.registerMsg(a.Enum.MSGID.START_BET_NOTIFY, this.HandleStartBetNotify.bind(this)), this.registerMsg(a.Enum.MSGID.GAME_ROUND_END_NOTIFY, this.HandleGameRoundEndNofity.bind(this)), this.registerMsg(a.Enum.MSGID.KICK_NOTIFY, this.HandleKickNotify.bind(this)), this.registerMsg(a.Enum.MSGID.GAME_DATA_SYN, this.HandleGameDataSynNotify.bind(this)), this.registerMsg(a.Enum.MSGID.LEAVE_ROOM_RESP, this.HandleLeaveRoomResp.bind(this)), this.registerMsg(a.Enum.MSGID.START_SETTLEMENT_NOTIFY, this._HandleEndBetNotify.bind(this)), this.registerMsg(p.cowboy_proto.CMD.SET_GAME_OPTION_RSP, this._handleSetGameOptionResponse.bind(this)), this.registerMsg(p.cowboy_proto.CMD.ADVANCE_AUTO_BET_SET_RSP, this._handleAdvanceAutoBetSetResponse.bind(this)), this.registerMsg(p.cowboy_proto.CMD.ADVANCE_AUTO_BET_RSP, this._handleAdvanceAutoBetResponse.bind(this)), this.registerMsg(p.cowboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_RSP, this._handleCancelAdvanceAutoBetResponse.bind(this)), this.registerMsg(p.cowboy_proto.CMD.ADVANCE_AUTO_BET_ADD_RSP, this._handleAdvanceAutoBetAddResponse.bind(this))
        }
        PostCowboyError(o) {
            o != a.Enum.ErrorCode.OK && o != p.cowboy_proto.ErrorCode.IN_CALM_DOWN && s.MessageCenter.send("on_cowboy_server_error", o)
        }
        requestLoginServer() {
            console.log("====> cowboy websocket was opened.");
            let o = {
                    token: s.dataHandler.getMiniGameUserToken(),
                    version: s.config.GET_CLIENT_VERSION(),
                    client_type: s.config.GET_CLIENT_TYPE()
                },
                e = p.cowboy_proto.LoginReq.encode(o).finish();
            console.log(e), this.sendGameMsg(e, a.Enum.MSGID.LOGIN_GAME_REQ, 0) && s.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestLoginServer", JSON.stringify({
                gameId: s.Enum.GameId.CowBoy
            }))
        }
        responseLoginServer(o, e, t, n, r) {
            var i;
            let d = null == (i = s.roomManager.getRoomByIds(n, r)) ? void 0 : i.gameScene,
                l = this.decodePB(p.cowboy_proto.LoginResp, o);
            if (l) {
                let o = l.code;
                s.roomManager.tracingJoinRoomAddEventToSpan("LoginServerResponse", JSON.stringify(l)), o == a.Enum.ErrorCode.OK ? (l.roomid > 0 && s.roomManager.setMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy, l.roomid), s.netWorkManager.OnCowboyServerLogin(l.roomid)) : (s.SwitchLoadingView.hide(), s.ToastGameError(s.Enum.GameId.CowBoy, o, d))
            }
        }
        requestHeartBeat() {
            R.hasInstance() && R.getInstance().traceHeartBeat(_.Request, s.netWork, this.getServerTypeCowboy(), "PokerFlip");
            let o = {
                    uid: this.getUserID()
                },
                e = p.cowboy_proto.HeartBeatReq.encode(o).finish();
            return this.sendGameMsg(e, a.Enum.MSGID.HEART_BEAT_REQ, 0)
        }
        responseHeartBeat(o, e, t, n, a) {
            let r = this.decodePB(p.cowboy_proto.HeartBeatResp, o);
            if (r) {
                let o = r.uid;
                console.log("uid::.>" + o), s.netWorkManager.onGameHeartBeat(n), R.hasInstance() && R.getInstance().traceHeartBeat(_.Response, s.netWork, this.getServerTypeCowboy(), "PokerFlip")
            }
        }
        RequestJoinRoom(o) {
            if (s.netWorkManager.isLoginGameServerSucc(s.Enum.GameId.CowBoy)) {
                const e = p.cowboy_proto.JoinRoomReq.create({
                    roomid: o
                });
                let t = p.cowboy_proto.JoinRoomReq.encode(e).finish();
                this.sendGameMsg(t, a.Enum.MSGID.JOIN_ROOM_REQ, o) && s.roomManager.tracingJoinRoomAddEventToSpan("SendMsgRequestJoinRoom", JSON.stringify({
                    gameId: s.Enum.GameId.CowBoy,
                    roomId: o
                }))
            } else this.requestLoginServer()
        }
        JoinRoomResponse(o) {
            let e = this.decodePB(p.cowboy_proto.JoinRoomResp, o);
            e && s.roomManager.onJoinRoomResponse(e, s.Enum.GameId.CowBoy)
        }
        RequestPlayerList() {
            let o = p.cowboy_proto.PlayerListReq.create(),
                e = p.cowboy_proto.PlayerListReq.encode(o).finish();
            this.sendGameMsg(e, a.Enum.MSGID.PLAYER_LIST_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        HandlePlayerListResponse(o) {
            let e = this.decodePB(p.cowboy_proto.PlayerListResp, o);
            if (e) {
                s.StringTools.deepCopy(e.self, a.getCowboyRoom().playerself), a.getCowboyRoom().gamePlayerList = [], a.getCowboyRoom().dzplayerNum = e.playerNum;
                let o = e.gamePlayers,
                    t = o.length;
                for (let e = 0; e < t; e++) {
                    let t = o[e],
                        n = new l;
                    s.StringTools.deepCopy(t, n), a.getCowboyRoom().gamePlayerList.push(n)
                }
                s.MessageCenter.send("on_update_playerlist_notify")
            }
        }
        RequestBet(o, e) {
            let t = new m;
            t.option = o, t.betAmount = e;
            let n = p.cowboy_proto.BetReq.create({
                    detail: t
                }),
                r = p.cowboy_proto.BetReq.encode(n).finish();
            this.sendGameMsg(r, a.Enum.MSGID.BET_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        HandleBetResponse(o) {
            let e = this.decodePB(p.cowboy_proto.BetResp, o);
            e && (this.PostCowboyError(e.code), e.code == p.cowboy_proto.ErrorCode.IN_CALM_DOWN && s.MessageCenter.send("onCalmDownMsg", e))
        }
        HandleBetNotify(o) {
            const e = C.getDataInstanceByGameAndRoomId(s.Enum.GameId.CowBoy, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(p.cowboy_proto.BetNotify, o);
            t && (a.getCowboyRoom().updatePlayerCoin(t.uid, t.curCoin), a.getCowboyRoom().updateZoneBet(t.uid, t.detail.option, t.selfBet, t.totalBet), a.getCowboyRoom().updateCurOneBet(t.uid, t.detail), t.uid === this.getUserID() && (a.getCowboyRoom().hasBetInCurRound = !0), s.MessageCenter.send("on_cowboy_bet_notify"))
        }
        RequestAutoBet() {
            let o = p.cowboy_proto.AutoBetReq.create(),
                e = p.cowboy_proto.AutoBetReq.encode(o).finish();
            this.sendGameMsg(e, a.Enum.MSGID.AUTO_BET_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        HandleAutoBetResponse(o) {
            let e = this.decodePB(p.cowboy_proto.AutoBetResp, o);
            e && (this.PostCowboyError(e.code), a.getCowboyRoom().canAuto = e.canAuto, s.MessageCenter.send("on_cowboy_auto_bet_succ"), e.code == p.cowboy_proto.ErrorCode.IN_CALM_DOWN && s.MessageCenter.send("onCalmDownMsg", e))
        }
        HandleMergeAutoBetNotify(o) {
            let e = this.decodePB(p.cowboy_proto.MergeAutoBetNotify, o);
            if (e) {
                let o = e.notify,
                    t = o.length;
                for (let e = 0; e < t; e++) {
                    let t = o[e];
                    a.getCowboyRoom().updatePlayerCoin(t.uid, t.curCoin), a.getCowboyRoom().updateZoneBet(t.uid, t.detail.option, t.selfBet, t.totalBet), a.getCowboyRoom().updateCurOneBet(t.uid, t.detail), t.uid === this.getUserID() && (a.getCowboyRoom().hasBetInCurRound = !0), s.MessageCenter.send("on_cowboy_auto_bet_notify")
                }
                s.MessageCenter.send("on_cowboy_auto_bet_notify_handle_over", t)
            }
        }
        RequestLeaveRoom(o = null) {
            let e = p.cowboy_proto.LeaveRoomReq.create({
                    roomuuid: 0
                }),
                t = p.cowboy_proto.LeaveRoomReq.encode(e).finish(),
                n = s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy);
            this.sendGameMsg(t, a.Enum.MSGID.LEAVE_ROOM_REQ, n) ? this.addRequestTimeout(a.Enum.MSGID.LEAVE_ROOM_REQ, n, o) : o && o()
        }
        HandleLeaveRoomResp(o, e, t, n, r) {
            let i = this.decodePB(p.cowboy_proto.LeaveRoomResp, o);
            i && (this.responseReceived(a.Enum.MSGID.LEAVE_ROOM_REQ, i.code, r), i.code == p.cowboy_proto.ErrorCode.OK ? (s.MessageCenter.send("on_leave_room_success"), s.roomManager.onResponse_LeaveRoom(i, n, r)) : (this.PostCowboyError(i.code), i.code == p.cowboy_proto.ErrorCode.CAN_NOT_LEAVE_IN_BETTING && this.ReqCancelAdvanceAutoBet()))
        }
        RequestTrend() {
            let o = p.cowboy_proto.RoomTrendReq.encode({
                roomuuid: 0
            }).finish();
            this.sendGameMsg(o, a.Enum.MSGID.ROOM_TREND_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        HandleTrendResponse(o) {
            this.decodePB(p.cowboy_proto.RoomTrendRsp, o)
        }
        HandleTrendNotify(o) {
            let e = this.decodePB(p.cowboy_proto.RoomTrendNotice, o);
            if (e) {
                a.getCowboyRoom().trendData = [], a.getCowboyRoom().dailyStat = [], a.getCowboyRoom().trendRoad = [], a.getCowboyRoom().lastRow = e.lastRow, a.getCowboyRoom().lastCol = e.lastCol;
                let o = e.trend,
                    t = e.stats,
                    n = e.road,
                    d = o.length;
                for (let e = 0; e < d; e++) {
                    let t = o[e],
                        n = new r;
                    s.StringTools.deepCopy(t, n), a.getCowboyRoom().trendData.push(n)
                }
                let l = t.length;
                for (let o = 0; o < l; o++) {
                    let e = t[o],
                        n = new i;
                    s.StringTools.deepCopy(e, n), a.getCowboyRoom().dailyStat.push(n)
                }
                let m = n.length;
                for (let o = 0; o < m; o++) {
                    let e = n[o],
                        t = new y;
                    s.StringTools.deepCopy(e, t), a.getCowboyRoom().trendRoad.push(t)
                }
                s.MessageCenter.send("on_update_trend_notify")
            }
        }
        HandleDealNotify(o) {
            const e = C.getDataInstanceByGameAndRoomId(s.Enum.GameId.CowBoy, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(p.cowboy_proto.DealNotify, o);
            if (t) {
                a.getCowboyRoom().ResetRound(), a.getCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, a.getCowboyRoom().leftSeconds = t.leftSeconds, a.getCowboyRoom().curState = a.Enum.RoundState.NEW_ROUND, a.getCowboyRoom().canAuto = t.canAuto, a.getCowboyRoom().bCanUpdateWorldServerGold = !0;
                let o = new u;
                s.StringTools.deepCopy(t.card, o), a.getCowboyRoom().publicCards.push(o);
                let e = t.players,
                    n = e.length;
                for (let o = 0; o < n; o++) {
                    let t = e[o];
                    0 == o ? t.uid == this.getUserID() ? a.getCowboyRoom().updateSelfPlayer(t) : console.log("SocketHandler3::_HandleGameDataSynNotify, data error!!!, players[0] must be self!!!") : a.getCowboyRoom().addPlayer(t)
                }
                let r = t.lastResult,
                    i = r.length;
                for (let o = 0; o < i; o++) a.getCowboyRoom().historyResults.push(r[o]);
                t.changed && (s.StringTools.deepCopy(t.param, a.getCowboyRoom().pkRoomParam), s.MessageCenter.send("on_cowboy_room_param_change_notify")), s.MessageCenter.send("on_cowboy_deal_notify")
            }
        }
        HandleStartBetNotify(o) {
            const e = C.getDataInstanceByGameAndRoomId(s.Enum.GameId.CowBoy, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(p.cowboy_proto.StartBetNotify, o);
            t && (a.getCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, a.getCowboyRoom().leftSeconds = t.leftSeconds, a.getCowboyRoom().curState = a.Enum.RoundState.BET, a.getCowboyRoom().bCanUpdateWorldServerGold = !0, s.MessageCenter.send("on_cowboy_start_bet_notify"))
        }
        HandleGameRoundEndNofity(o) {
            const e = C.getDataInstanceByGameAndRoomId(s.Enum.GameId.CowBoy, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy));
            if (null != e && e.tRoomData.m_bIsReconnectMode) return;
            let t = this.decodePB(p.cowboy_proto.GameRoundEndNotify, o);
            t && (this.ParseGameRoundEndNotify(t, !0), a.getCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, a.getCowboyRoom().leftSeconds = t.leftSeconds, a.getCowboyRoom().curState = a.Enum.RoundState.WAIT_NEXT_ROUND, a.getCowboyRoom().isOpen = t.openRoads, a.getCowboyRoom().bCanUpdateWorldServerGold = !1, s.MessageCenter.send("on_cowboy_game_round_end_notify"))
        }
        ParseGameRoundEndNotify(o, e) {
            e = 1 == e, a.getCowboyRoom().change_points = o.change_points, a.getCowboyRoom().redHandCards = [], a.getCowboyRoom().blueHandCards = [];
            let t = o.playerHoleCard,
                n = t.length;
            for (let o = 0; o < n; o++) {
                let e = t[o],
                    n = e.Cards,
                    r = n.length;
                for (let o = 0; o < r; o++) {
                    let t = new u;
                    s.StringTools.deepCopy(n[o], t), e.name == a.Enum.RoleName.Red ? a.getCowboyRoom().redHandCards.push(t) : e.name == a.Enum.RoleName.Blue && a.getCowboyRoom().blueHandCards.push(t)
                }
            }
            a.getCowboyRoom().publicCards = [];
            let r = o.publicCards,
                i = r.length;
            for (let o = 0; o < i; o++) {
                let e = r[o],
                    t = new u;
                s.StringTools.deepCopy(e, t), a.getCowboyRoom().publicCards.push(t)
            }
            a.getCowboyRoom().playerSettles.clear();
            let l = o.playerSettle;
            i = l.length;
            for (let o = 0; o < i; o++) {
                let e = l[o],
                    t = new g;
                s.StringTools.deepCopy(e, t), a.getCowboyRoom().playerSettles.add(e.uid, t), a.getCowboyRoom().updatePlayerKeepWinCount(e.uid, e.keepWinCount)
            }
            a.getCowboyRoom().otherPlayersSettle.reset(), s.StringTools.deepCopy(o.otherPlayers, a.getCowboyRoom().otherPlayersSettle), a.getCowboyRoom().matchOption = [];
            let m = o.matchOption;
            i = m.length;
            for (let o = 0; o < i; o++) a.getCowboyRoom().matchOption.push(m[o]);
            let y = o.roundResult;
            if (a.getCowboyRoom().result = y.result, a.getCowboyRoom().redLevel = y.redLevel, a.getCowboyRoom().blueLevel = y.blueLevel, e) {
                0 == a.getCowboyRoom().result ? a.getCowboyRoom().historyResults.push(a.Enum.BetZoneOption.EQUAL) : 1 == a.getCowboyRoom().result ? a.getCowboyRoom().historyResults.push(a.Enum.BetZoneOption.RED_WIN) : -1 == a.getCowboyRoom().result ? a.getCowboyRoom().historyResults.push(a.Enum.BetZoneOption.BLUE_WIN) : console.log("SocketHandler3::ParseGameRoundEndNotify, error result: %d", a.getCowboyRoom().result);
                let e = a.getCowboyRoom().mapZoneData,
                    t = o.optionResult.length;
                for (let n = 0; n < t; ++n) {
                    let t = o.optionResult[n].option,
                        s = o.optionResult[n].result,
                        a = o.optionResult[n].loseHand,
                        r = e.get(t);
                    r || (e.add(t, new d), r = e.get(t)), r.result = s, r.luckLoseHand = a;
                    let i = r.vHistoryResults,
                        l = r.maxHistoryResultsRetention;
                    i.unshift(s), i.length > l && i.splice(l, i.length - l)
                }
            }
            a.getCowboyRoom().winCards = [];
            let c = y.Cards;
            i = c.length;
            for (let o = 0; o < i; o++) {
                let e = c[o],
                    t = new u;
                s.StringTools.deepCopy(e, t), a.getCowboyRoom().winCards.push(t)
            }
            a.getCowboyRoom().stopWorld = o.stopWorld, a.getCowboyRoom().idle_roomid = o.idle_roomid
        }
        HandleKickNotify(o) {
            let e = this.decodePB(p.cowboy_proto.KickNotify, o);
            e && s.MessageCenter.send("on_cowboy_kick_notify", e)
        }
        HandleGameDataSynNotify(o) {
            var e;
            let t = this.decodePB(p.cowboy_proto.GameDataSynNotify, o);
            const n = C.getDataInstanceByGameAndRoomId(s.Enum.GameId.CowBoy, (null == t || null == (e = t.param) ? void 0 : e.roomid) ?? s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy));
            if (n && (n.tRoomData.m_bIsReconnectMode = !1), t) {
                a.getCowboyRoom().Reset(), a.getCowboyRoom().pkRoomParam = p.cowboy_proto.RoomParam.create(t.param), a.getCowboyRoom().u32RoomId = t.param.roomid, a.getCowboyRoom().u32Uid = this.getUserID(), a.getCowboyRoom().isOpen = t.openRoads, a.getCowboyRoom().llCoinUICritical = s.StringTools.clientGoldByServer(t.BetButtonLimitAmount), a.getCowboyRoom().reachLimitBet = t.reachLimitBet;
                {
                    s.StringTools.clearArray(a.getCowboyRoom().vBetCoinOption);
                    let o = s.StringTools.getArrayLength(t.betCoinOption);
                    if (o > 0)
                        for (let e = 0; e < o; ++e) a.getCowboyRoom().vBetCoinOption.push(t.betCoinOption[e]);
                    else
                        for (let o = 0; o < s.StringTools.getArrayLength(t.param.amountLevel); ++o) a.getCowboyRoom().vBetCoinOption.push(t.param.amountLevel[o]);
                    a.getCowboyRoom().eAutoLevel = t.autoLevel, a.getCowboyRoom().iUsedAutoBetCount = t.usedAutoBetCount, a.getCowboyRoom().iSelectAutoBetCount = t.selectAutoBetCount, a.getCowboyRoom().canAdvanceAuto = t.canAdvanceAuto, s.StringTools.clearArray(a.getCowboyRoom().vAutoBetCountList);
                    for (let o = 0; o < s.StringTools.getArrayLength(t.AutoBetCountList); ++o) a.getCowboyRoom().vAutoBetCountList.push(t.AutoBetCountList[o])
                }
                let o = t.optionInfo,
                    e = o.length;
                for (let t = 0; t < e; t++) {
                    let e = o[t];
                    if (e.option == a.Enum.BetZoneOption.BetZoneOption_DUMMY || e.option == a.Enum.BetZoneOption.WIN_BEGIN || e.option == a.Enum.BetZoneOption.WIN_END || e.option == a.Enum.BetZoneOption.HOLE_BEGIN || e.option == a.Enum.BetZoneOption.HOLE_END || e.option == a.Enum.BetZoneOption.FIVE_BEGIN || e.option == a.Enum.BetZoneOption.FIVE_END) continue;
                    a.getCowboyRoom().selfZoneBet.add(e.option, e.selfBet), a.getCowboyRoom().totalZoneBet.add(e.option, e.totalBet);
                    let n = e.amount,
                        s = [],
                        r = n.length;
                    for (let o = 0; o < r; o++) s.push(n[o]);
                    a.getCowboyRoom().allZoneBet.add(e.option, s), e.selfBet > 0 && (a.getCowboyRoom().hasBetInCurRound = !0)
                }
                a.getCowboyRoom().nextRoundEndStamp = t.nextRoundEndStamp, a.getCowboyRoom().leftSeconds = t.leftSeconds, a.getCowboyRoom().curState = t.curState, a.getCowboyRoom().canAuto = t.canAuto;
                let n = t.players;
                e = n.length;
                for (let o = 0; o < e; o++) {
                    let e = n[o];
                    0 == o ? e.uid == this.getUserID() ? a.getCowboyRoom().updateSelfPlayer(e) : console.log("SocketHandler3::_HandleGameDataSynNotify, data error!!!, players[0] must be self!!!") : a.getCowboyRoom().addPlayer(e)
                }
                a.getCowboyRoom().historyResults = [];
                let r = t.lastResult;
                e = r.length;
                for (let o = 0; o < e; o++) a.getCowboyRoom().historyResults.push(r[o]);
                let i = a.getCowboyRoom().mapZoneData,
                    l = t.optionResults.length;
                for (let o = 0; o < l; ++o) {
                    let e = t.optionResults[o].option,
                        n = t.optionResults[o].results,
                        a = t.optionResults[o].loseHand,
                        r = i.get(e);
                    r || (i.add(e, new d), r = i.get(e)), r.luckLoseHand = a;
                    let l = r.vHistoryResults,
                        m = r.maxHistoryResultsRetention;
                    l.splice(0, s.StringTools.getArrayLength(l)), s.StringTools.deepCopy(n, l), l.length > m && l.splice(m, l.length - m)
                }
                let m = t.publicCards;
                e = m.length;
                for (let o = 0; o < e; o++) {
                    let e = m[o],
                        t = new u;
                    s.StringTools.deepCopy(e, t), a.getCowboyRoom().publicCards.push(t)
                }
                t.curState == a.Enum.RoundState.WAIT_NEXT_ROUND && this.ParseGameRoundEndNotify(t.cachedNotifyMsg), s.MessageCenter.send("on_cowboy_gamedata_syn_notify", s.Enum.GameId.CowBoy), s.MessageCenter.send("onCalmDownMsg", t)
            }
        }
        _HandleEndBetNotify(o) {
            this.decodePB(p.cowboy_proto.StartSettlementNotify, o);
            a.getCowboyRoom().bCanUpdateWorldServerGold = !1
        }
        reqSetGameOption(o, e) {
            let t = [];
            s.StringTools.deepCopy(o, t);
            let n = p.cowboy_proto.SetGameOptionReq.create({
                    autoLevel: e,
                    betCoinOption: t
                }),
                a = p.cowboy_proto.SetGameOptionReq.encode(n).finish();
            console.log("cowboy_proto.SET_GAME_OPTION_REQ==>>" + a), this.sendGameMsg(a, p.cowboy_proto.CMD.SET_GAME_OPTION_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        _handleSetGameOptionResponse(o) {
            let e = this.decodePB(p.cowboy_proto.SetGameOptionResp, o);
            if (e && (console.log("pb_cowboy.cowboy_proto.SET_GAME_OPTION_RSP==>>" + e), this.PostCowboyError(e.code), e.code === p.cowboy_proto.ErrorCode.OK)) {
                a.getCowboyRoom().eAutoLevel = e.autoLevel, s.StringTools.clearArray(a.getCowboyRoom().vBetCoinOption);
                for (let o = 0; o < e.betCoinOption.length; ++o) a.getCowboyRoom().vBetCoinOption.push(e.betCoinOption[o]);
                s.MessageCenter.send("on_cowboy_bet_amount_level_change")
            }
        }
        reqAdvanceAutoBetSet(o) {
            let e = p.cowboy_proto.AdvanceAutoBetSetReq.create({
                    count: o
                }),
                t = p.cowboy_proto.AdvanceAutoBetSetReq.encode(e).finish();
            console.log("cowboy_proto.ADVANCE_AUTO_BET_SET_REQ==>>" + t), this.sendGameMsg(t, p.cowboy_proto.CMD.ADVANCE_AUTO_BET_SET_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        _handleAdvanceAutoBetSetResponse(o) {
            let e = this.decodePB(p.cowboy_proto.AdvanceAutoBetSetRsp, o);
            e && (console.log("pb_cowboy.cowboy_proto.ADVANCE_AUTO_BET_SET_RSP==>>" + e), this.PostCowboyError(e.code), e.code === p.cowboy_proto.ErrorCode.OK ? (a.getCowboyRoom().iUsedAutoBetCount = 0, a.getCowboyRoom().iSelectAutoBetCount = e.count, s.MessageCenter.send("on_cowboy_advance_autobet_set"), s.MessageCenter.send("on_advance_autobet_add")) : e.code === p.cowboy_proto.ErrorCode.IN_CALM_DOWN && s.MessageCenter.send("onCalmDownMsg", e))
        }
        reqAdvanceAutoBet() {
            let o = p.cowboy_proto.AdvanceAutoBetReq.create(),
                e = p.cowboy_proto.AdvanceAutoBetReq.encode(o).finish();
            console.log("cowboy_proto.ADVANCE_AUTO_BET_REQ==>>" + e), this.sendGameMsg(e, p.cowboy_proto.CMD.ADVANCE_AUTO_BET_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        _handleAdvanceAutoBetResponse(o) {
            let e = this.decodePB(p.cowboy_proto.AdvanceAutoBetRsp, o);
            e && (console.log("pb_cowboy.cowboy_proto.ADVANCE_AUTO_BET_RSP==>>" + e), e.code === p.cowboy_proto.ErrorCode.OK && (a.getCowboyRoom().iUsedAutoBetCount = e.usedAutoBetCount), e.code == p.cowboy_proto.ErrorCode.IN_CALM_DOWN ? s.MessageCenter.send("onCalmDownMsg", e) : s.MessageCenter.send("on_advance_autobet", e.code))
        }
        ReqCancelAdvanceAutoBet() {
            let o = p.cowboy_proto.CancelAdvanceAutoBetReq.create(),
                e = p.cowboy_proto.CancelAdvanceAutoBetReq.encode(o).finish();
            console.log("cowboy_proto.CANCEL_ADVANCE_AUTO_BET_REQ==>>" + e), this.sendGameMsg(e, p.cowboy_proto.CMD.CANCEL_ADVANCE_AUTO_BET_REQ, s.roomManager.getMiniGameRoomIdTemplate(s.Enum.GameId.CowBoy))
        }
        _handleCancelAdvanceAutoBetResponse(o) {
            let e = this.decodePB(p.cowboy_proto.CancelAdvanceAutoBetRsp, o);
            e && (console.log("pb_cowboy.cowboy_proto.CANCEL_ADVANCE_AUTO_BET_RSP==>>" + e), this.PostCowboyError(e.code), e.code === p.cowboy_proto.ErrorCode.OK && (a.getCowboyRoom().iUsedAutoBetCount = 0, a.getCowboyRoom().iSelectAutoBetCount = 0, a.getCowboyRoom().reachLimitBet = !1, s.MessageCenter.send("on_cowboy_advance_autobet_cancel", e.is_manual)))
        }
        onConnectOpen() {
            this.requestLoginServer()
        }
        reqAdvanceAutoBetAdd(o) {
            let e = {
                    count: o
                },
                t = p.cowboy_proto.AdvanceAutoBetSetReq.encode(e).finish();
            console.log("cowboy_proto.ADVANCE_AUTO_BET_SET_REQ==>>" + t), this.sendGameMsg(t, p.cowboy_proto.CMD.ADVANCE_AUTO_BET_ADD_REQ, s.roomManager.getCurrentRoomID())
        }
        _handleAdvanceAutoBetAddResponse(o) {
            let e = this.decodePB(p.cowboy_proto.AdvanceAutoBetAddRsp, o);
            if (e) switch (console.log("cowboy_proto.ADVANCE_AUTO_BET_ADD_RSP==>>" + e), e.code) {
                case p.cowboy_proto.ErrorCode.OK:
                    a.getCowboyRoom().iUsedAutoBetCount = e.usedAutoBetCount, a.getCowboyRoom().iSelectAutoBetCount = e.autoBetCount, s.MessageCenter.send("on_advance_autobet_add");
                    break;
                case p.cowboy_proto.ErrorCode.REACH_LIMIT_BET:
                    a.getCowboyRoom().iSelectAutoBetCount = e.autoBetCount, a.getCowboyRoom().reachLimitBet = !0, s.MessageCenter.send("on_advance_autobet_add"), s.MessageCenter.send("on_cowboy_advance_autobet_limit_reached", e.numberHandAdded);
                    break;
                case p.cowboy_proto.ErrorCode.IN_CALM_DOWN:
                    s.MessageCenter.send("onCalmDownMsg", e);
                    break;
                default:
                    this.PostCowboyError(e.code)
            }
        }
    }).g_instance = void 0, b = w)) || b);
    e._RF.pop()
}
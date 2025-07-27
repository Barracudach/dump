import * as n from "./cjs-loader.mjs.js";
import * as r from "./minimal.js";

function main() {
    let o;
    e("default", void 0);
    const i = e("__cjsMetaURL", t.meta.url);
    n.define(i, (function(t, n, r, i, u) {
        var a, s, l, c = n("protobufjs/minimal.js"),
            d = c.Reader,
            p = c.Writer,
            y = c.util,
            f = c.roots.default || (c.roots.default = {});
        f.mttPro = ((l = {}).Code = (a = {}, (s = Object.create(a))[a[0] = "OK"] = 0, s[a[60010] = "NOT_ALLOW_STANDUP"] = 60010, s[a[60074] = "NOT_FIND_USER_EX_DATA"] = 60074, s[a[60075] = "NOT_ALLOW_SIT"] = 60075, s[a[60076] = "NO_MTT_ROOM"] = 60076, s[a[60077] = "NOT_ALLOW_REJOING"] = 60077, s[a[60078] = "NOT_ALLOW_ENTER"] = 60078, s[a[60079] = "NOT_ALLOW_BUYTIME"] = 60079, s[a[60080] = "Mtt_Param_Error"] = 60080, s[a[60081] = "Mtt_Room_End"] = 60081, s[a[60082] = "Mtt_End"] = 60082, s[a[60083] = "Not_Allow_Bet"] = 60083, s[a[60084] = "Not_Allow_Operate_Bullet"] = 60084, s[a[60085] = "Not_Bullet_Zero"] = 60085, s[a[60086] = "Enter_Room_Need_Wait"] = 60086, s[a[60087] = "MTT_Prepare"] = 60087, s[a[60088] = "Sng_Room_Not_Exists"] = 60088, s[a[60089] = "Sng_Room_Exit_Fail"] = 60089, s[a[60090] = "Sng_Max_Limit_Join"] = 60090, s[a[60100] = "Sng_Not_Takein"] = 60100, s[a[60101] = "Sng_Room_Dissolve"] = 60101, s[a[60102] = "Sng_Room_Pause"] = 60102, s[a[60103] = "Sng_Buy_Part_Fail"] = 60103, s[a[60104] = "Sng_User_Match_Success"] = 60104, s[a[60105] = "Mtt_Stop_Signup"] = 60105, s[a[60106] = "Sng_User_Not_In_Room"] = 60106, s), l.MessageId = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Null"] = 0, t[e[60001] = "MttEnterGameReq"] = 60001, t[e[60002] = "MttEnterGameRes"] = 60002, t[e[60502] = "TimeBankMsg"] = 60502, t[e[60503] = "ReJoinReq"] = 60503, t[e[60504] = "ReJoinRes"] = 60504, t[e[60507] = "EnterRewardMsg"] = 60507, t[e[60508] = "RewardMsg"] = 60508, t[e[60509] = "RiseBlindNotifyMsg"] = 60509, t[e[60510] = "MttNotifyMsg"] = 60510, t[e[60511] = "RiseCoinPerPointNotifyMsg"] = 60511, t[e[60512] = "BuyTimeReq"] = 60512, t[e[60513] = "BuyTimeRes"] = 60513, t[e[60514] = "SngRoomSnapShotMsg"] = 60514, t[e[60515] = "SngRoomRankNotifyMsg"] = 60515, t[e[60516] = "MttRoomRankNotifyMsg"] = 60516, t[e[60517] = "SngStartNotifyMsg"] = 60517, t[e[60518] = "MttRestTimeNotifyMsg"] = 60518, t[e[60519] = "MttRoomSnapshotReq"] = 60519, t[e[60520] = "MttRoomSnapshotRes"] = 60520, t[e[60521] = "MttRealTimeRecordReq"] = 60521, t[e[60522] = "MttRealTimeRecordRes"] = 60522, t[e[60523] = "SngReliveReq"] = 60523, t[e[60524] = "SngReliveRes"] = 60524, t[e[60525] = "MttCancelFantasyNotifyMsg"] = 60525, t[e[60526] = "SngRealTimeRecordReq"] = 60526, t[e[60527] = "SngRealTimeRecordRes"] = 60527, t[e[60528] = "MttRoomEndNotifyMsg"] = 60528, t[e[60529] = "MttStopReJoinNotifyMsg"] = 60529, t[e[60530] = "MttUserRankMsg"] = 60530, t[e[60531] = "MttUserOutMsg"] = 60531, t[e[60532] = "SngRoomSnapShotReq"] = 60532, t[e[60533] = "MttRoomChangeMsg"] = 60533, t[e[60534] = "MttHoldemStadiumReq"] = 60534, t[e[60535] = "MttHoldemStadiumRes"] = 60535, t[e[60536] = "MttPineAppleStadiumReq"] = 60536, t[e[60537] = "MttPineAppleStadiumRes"] = 60537, t[e[60538] = "MttUserInfoReq"] = 60538, t[e[60539] = "MttUserInfoRes"] = 60539, t[e[60540] = "SngRewardInfoReq"] = 60540, t[e[60541] = "SngRewardInfoRes"] = 60541, t[e[60542] = "MttStateNotifyMsg"] = 60542, t[e[60543] = "MttLastRoomNotifyMsg"] = 60543, t[e[60544] = "GuessHandlePorkReq"] = 60544, t[e[60545] = "GuessHandlePorkRes"] = 60545, t[e[60546] = "GuessHandlePorkMsg"] = 60546, t[e[60550] = "BulletExchangeReq"] = 60550, t[e[60551] = "BulletExchangeRes"] = 60551, t[e[60552] = "BulletExchangeMsg"] = 60552, t[e[60553] = "MttExDataMsg"] = 60553, t[e[60554] = "HunterCelebrityMsg"] = 60554, t[e[60555] = "TimeBankFlagSetReq"] = 60555, t[e[60556] = "TimeBankFlagSetRes"] = 60556, t[e[60557] = "TimeBankDurationMsg"] = 60557, t[e[60560] = "RewardMsgReq"] = 60560, t[e[60561] = "RewardMsgRes"] = 60561, t[e[60562] = "MttUserGameSumInfoReq"] = 60562, t[e[60563] = "MttUserGameSumInfoRes"] = 60563, t[e[60564] = "MttRebuyMsg"] = 60564, t[e[60565] = "MttMorebuyMsg"] = 60565, t[e[60566] = "MttCancelBuyReq"] = 60566, t[e[60567] = "MttCancelBuyRes"] = 60567, t[e[60568] = "MysteryPrizeMsg"] = 60568, t[e[60569] = "MysteryPrizeTableReq"] = 60569, t[e[60570] = "MysteryPrizeTableRes"] = 60570, t[e[60571] = "MysteryPrizeTableMsg"] = 60571, t[e[60572] = "MttRoomStatusChangeMsg"] = 60572, t[e[60573] = "MttLastRoomAnimationMsg"] = 60573, t[e[60604] = "ExitSngRoomLevelReq"] = 60604, t[e[60605] = "ExitSngRoomLevelRes"] = 60605, t[e[60606] = "SngRoomExDataMsg"] = 60606, t[e[60607] = "User_ForbidMsg"] = 60607, t
        }(), l.Join_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Join_Type_Null"] = 0, t[e[1] = "Join_Type_ReBuy"] = 1, t[e[2] = "Join_Type_ReJoin"] = 2, t[e[3] = "Join_Type_Join"] = 3, t[e[4] = "Join_Type_MoreBuy"] = 4, t
        }(), l.Tips_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "T_Null"] = 0, t[e[3] = "Game_Pause"] = 3, t[e[4] = "Room_End"] = 4, t[e[5] = "Game_Release"] = 5, t[e[6] = "Game_ReStrart"] = 6, t[e[7] = "Game_Final_Pause"] = 7, t[e[8] = "Game_Sync_Poker_Enter"] = 8, t[e[9] = "Game_Sync_Pokering"] = 9, t[e[10] = "Game_Sync_Poker_Out"] = 10, t[e[11] = "Game_Will_Playing"] = 11, t[e[12] = "Game_Wait_Rebuy"] = 12, t[e[13] = "Game_Wait_Morebuy"] = 13, t[e[14] = "Game_Enter_Mystery"] = 14, t[e[15] = "RiseBlind_Begin"] = 15, t[e[16] = "RiseBlind_Pause"] = 16, t
        }(), l.Rank_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Rank_Type_Not_Determined"] = 0, t[e[1] = "Rank_Type_No_Reward"] = 1, t[e[2] = "Rank_Type_Reward"] = 2, t[e[3] = "Rank_Type_Final"] = 3, t
        }(), l.RestTime_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RestTime_Type_Null"] = 0, t[e[1] = "RestTime_Type_MIDFIELD"] = 1, t[e[2] = "RestTime_Type_FINALS"] = 2, t[e[3] = "RestTime_Type_WILL_REST"] = 3, t
        }(), l.Sng_Status = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Sng_Status_Not_Start"] = 0, t[e[1] = "Sng_Status_Playing"] = 1, t[e[3] = "Sng_Status_Release"] = 3, t[e[4] = "Sng_Status_Dissolveing"] = 4, t[e[101] = "Sng_Status_Pause"] = 101, t
        }(), l.Mtt_Status = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Mtt_Status_prepare"] = 0, t[e[1] = "Mtt_Status_Playing"] = 1, t[e[3] = "Mtt_Status_will_rest"] = 3, t[e[4] = "Mtt_Status_rest"] = 4, t[e[5] = "Mtt_Status_pause"] = 5, t[e[6] = "Mtt_Status_end"] = 6, t[e[7] = "Mtt_Status_final_pause"] = 7, t[e[8] = "Mtt_Status_Will_Reuby"] = 8, t[e[9] = "Mtt_Status_Reuby"] = 9, t
        }(), l.Mtt_Room_Status = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Mtt_Room_Status_NULL"] = 0, t[e[3] = "ROOM_STATE_WAIT_MORE"] = 3, t[e[4] = "ROOM_STATE_BET_PRE_ROUND"] = 4, t[e[5] = "ROOM_STATE_PRE_FLOP"] = 5, t[e[6] = "ROOM_STATE_FLOP"] = 6, t[e[7] = "ROOM_STATE_TURN"] = 7, t[e[8] = "ROOM_STATE_RIVER"] = 8, t[e[30] = "ROOM_STATE_SETTLE"] = 30, t[e[31] = "ROOM_STATE_NEXT_ROUND"] = 31, t[e[32] = "ROOM_STATE_PREPARE"] = 32, t[e[1002] = "ROOM_STATE_SNG_PAUSE_GAME"] = 1002, t[e[1004] = "Mtt_ROOM_STATE_REST"] = 1004, t[e[1005] = "MttROOM_STATE_PAUSE"] = 1005, t[e[1006] = "ROOM_STATE_END"] = 1006, t[e[1007] = "ROOM_STATE_FINALE_PAUSE"] = 1007, t[e[1008] = "ROOM_STATE_Sync_Poker"] = 1008, t[e[1010] = "ROOM_STATE_Rebuy"] = 1010, t[e[1011] = "ROOM_STATE_Mystery"] = 1011, t
        }(), l.Sng_Relive_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Sng_Relive_Null"] = 0, t[e[1] = "Sng_Relive_Type_Rejoin"] = 1, t[e[2] = "Sng_Relive_Type_Cancel"] = 2, t
        }(), l.BetType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Bet_Null"] = 0, t[e[1] = "Bet_Pair_A"] = 1, t[e[2] = "Bet_Has_A"] = 2, t[e[3] = "Bet_Has_A_K"] = 3, t[e[4] = "Bet_Is_Pair"] = 4, t[e[5] = "Bet_No_A_K_Pair"] = 5, t
        }(), l.Gold_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Gold"] = 0, t[e[1] = "Usdt"] = 1, t
        }(), l.MTT_CancelBuy_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Rebuy"] = 0, t[e[1] = "Morebuy"] = 1, t
        }(), l.MysterStatus_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "MysterStatus_NULL"] = 0, t[e[1] = "MysterStatus_SynPoker"] = 1, t[e[2] = "MysterStatus_Animation"] = 2, t[e[3] = "MysterStatus_Draw"] = 3, t
        }(), l.MttEnterGameReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttEnterGameReq", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttEnterGameReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttEnterGameRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttEnterGameRes", e.prototype.code = 0, e.prototype.mttId = 0, e.prototype.leftPrepareTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), null != e.leftPrepareTime && e.hasOwnProperty("leftPrepareTime") && t.uint32(24).int32(e.leftPrepareTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttEnterGameRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        case 3:
                            r.leftPrepareTime = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.TimeBankMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TimeBankMsg", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.timeBank = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.timeBank && e.hasOwnProperty("timeBank") && t.uint32(24).int32(e.timeBank), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.TimeBankMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.seatNum = e.int32();
                            break;
                        case 3:
                            r.timeBank = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.ReJoinReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ReJoinReq", e.prototype.mttId = 0, e.prototype.joinType = 0, e.prototype.TicketId = y.Long ? y.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.joinType && e.hasOwnProperty("joinType") && t.uint32(16).int32(e.joinType), null != e.TicketId && e.hasOwnProperty("TicketId") && t.uint32(24).uint64(e.TicketId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.ReJoinReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.joinType = e.int32();
                            break;
                        case 3:
                            r.TicketId = e.uint64();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.ReJoinRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ReJoinRes", e.prototype.code = 0, e.prototype.mttId = 0, e.prototype.userId = 0, e.prototype.joinType = 0, e.prototype.coin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), null != e.joinType && e.hasOwnProperty("joinType") && t.uint32(32).int32(e.joinType), null != e.coin && e.hasOwnProperty("coin") && t.uint32(41).double(e.coin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.ReJoinRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        case 4:
                            r.joinType = e.int32();
                            break;
                        case 5:
                            r.coin = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.tipsType = 0, e.prototype.message = "", e.prototype.messageI18N = "", e.prototype.nextPeriodStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.willPlayStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.tipsType && e.hasOwnProperty("tipsType") && t.uint32(24).int32(e.tipsType), null != e.message && e.hasOwnProperty("message") && t.uint32(34).string(e.message), null != e.messageI18N && e.hasOwnProperty("messageI18N") && t.uint32(42).string(e.messageI18N), null != e.nextPeriodStartTime && e.hasOwnProperty("nextPeriodStartTime") && t.uint32(48).int64(e.nextPeriodStartTime), null != e.willPlayStartTime && e.hasOwnProperty("willPlayStartTime") && t.uint32(56).int64(e.willPlayStartTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.tipsType = e.int32();
                            break;
                        case 4:
                            r.message = e.string();
                            break;
                        case 5:
                            r.messageI18N = e.string();
                            break;
                        case 6:
                            r.nextPeriodStartTime = e.int64();
                            break;
                        case 7:
                            r.willPlayStartTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.EnterRewardMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EnterRewardMsg", e.prototype.mttId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.EnterRewardMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.RewardMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RewardMsg", e.prototype.mttId = 0, e.prototype.mttName = "", e.prototype.userId = 0, e.prototype.rewardType = 0, e.prototype.rank = 0, e.prototype.reward = 0, e.prototype.leftRejoinCount = 0, e.prototype.toolName = "", e.prototype.toolValue = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.toolNameI18n = "", e.prototype.mttNameI18N = "", e.prototype.toolCurrency = "", e.prototype.RegGoldType = 0, e.prototype.mttFinalName = "", e.prototype.mttFinalNameI18N = "", e.prototype.mttFinalStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.DisplayCurrency = "", e.prototype.duration = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.holeCards = y.newBuffer([]), e.prototype.coinLeft = 0, e.prototype.numPlayer = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.mttName && e.hasOwnProperty("mttName") && t.uint32(18).string(e.mttName), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), null != e.rewardType && e.hasOwnProperty("rewardType") && t.uint32(32).int32(e.rewardType), null != e.rank && e.hasOwnProperty("rank") && t.uint32(40).uint32(e.rank), null != e.reward && e.hasOwnProperty("reward") && t.uint32(49).double(e.reward), null != e.leftRejoinCount && e.hasOwnProperty("leftRejoinCount") && t.uint32(56).int32(e.leftRejoinCount), null != e.toolName && e.hasOwnProperty("toolName") && t.uint32(66).string(e.toolName), null != e.toolValue && e.hasOwnProperty("toolValue") && t.uint32(73).double(e.toolValue), null != e.wins && e.hasOwnProperty("wins") && t.uint32(81).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(89).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(97).double(e.value), null != e.toolNameI18n && e.hasOwnProperty("toolNameI18n") && t.uint32(106).string(e.toolNameI18n), null != e.mttNameI18N && e.hasOwnProperty("mttNameI18N") && t.uint32(114).string(e.mttNameI18N), null != e.toolCurrency && e.hasOwnProperty("toolCurrency") && t.uint32(122).string(e.toolCurrency), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(128).int32(e.RegGoldType), null != e.mttFinalName && e.hasOwnProperty("mttFinalName") && t.uint32(138).string(e.mttFinalName), null != e.mttFinalNameI18N && e.hasOwnProperty("mttFinalNameI18N") && t.uint32(146).string(e.mttFinalNameI18N), null != e.mttFinalStartTime && e.hasOwnProperty("mttFinalStartTime") && t.uint32(152).int64(e.mttFinalStartTime), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(162).string(e.DisplayCurrency), null != e.duration && e.hasOwnProperty("duration") && t.uint32(168).int64(e.duration), null != e.holeCards && e.hasOwnProperty("holeCards") && t.uint32(178).bytes(e.holeCards), null != e.coinLeft && e.hasOwnProperty("coinLeft") && t.uint32(185).double(e.coinLeft), null != e.numPlayer && e.hasOwnProperty("numPlayer") && t.uint32(192).int32(e.numPlayer), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.RewardMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.mttName = e.string();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        case 4:
                            r.rewardType = e.int32();
                            break;
                        case 5:
                            r.rank = e.uint32();
                            break;
                        case 6:
                            r.reward = e.double();
                            break;
                        case 7:
                            r.leftRejoinCount = e.int32();
                            break;
                        case 8:
                            r.toolName = e.string();
                            break;
                        case 9:
                            r.toolValue = e.double();
                            break;
                        case 10:
                            r.wins = e.double();
                            break;
                        case 11:
                            r.bounty = e.double();
                            break;
                        case 12:
                            r.value = e.double();
                            break;
                        case 13:
                            r.toolNameI18n = e.string();
                            break;
                        case 14:
                            r.mttNameI18N = e.string();
                            break;
                        case 15:
                            r.toolCurrency = e.string();
                            break;
                        case 16:
                            r.RegGoldType = e.int32();
                            break;
                        case 17:
                            r.mttFinalName = e.string();
                            break;
                        case 18:
                            r.mttFinalNameI18N = e.string();
                            break;
                        case 19:
                            r.mttFinalStartTime = e.int64();
                            break;
                        case 20:
                            r.DisplayCurrency = e.string();
                            break;
                        case 21:
                            r.duration = e.int64();
                            break;
                        case 22:
                            r.holeCards = e.bytes();
                            break;
                        case 23:
                            r.coinLeft = e.double();
                            break;
                        case 24:
                            r.numPlayer = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.RewardMsgReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RewardMsgReq", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.RewardMsgReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.RewardMsgRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RewardMsgRes", e.prototype.code = 0, e.prototype.Info = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.Info && e.hasOwnProperty("Info") && f.mttPro.RewardMsg.encode(e.Info, t.uint32(18).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.RewardMsgRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.Info = f.mttPro.RewardMsg.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.RiseBlindNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RiseBlindNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.riseIndex = 0, e.prototype.riseLeftTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.riseIndex && e.hasOwnProperty("riseIndex") && t.uint32(24).uint32(e.riseIndex), null != e.riseLeftTime && e.hasOwnProperty("riseLeftTime") && t.uint32(32).uint32(e.riseLeftTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.RiseBlindNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.riseIndex = e.uint32();
                            break;
                        case 4:
                            r.riseLeftTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.RiseCoinPerPointNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RiseCoinPerPointNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.CoinPerPoint = 0, e.prototype.riseLeftTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.CoinPerPoint && e.hasOwnProperty("CoinPerPoint") && t.uint32(29).float(e.CoinPerPoint), null != e.riseLeftTime && e.hasOwnProperty("riseLeftTime") && t.uint32(32).uint32(e.riseLeftTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.RiseCoinPerPointNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.CoinPerPoint = e.float();
                            break;
                        case 4:
                            r.riseLeftTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.BuyTimeReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BuyTimeReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.BuyTimeReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.BuyTimeRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BuyTimeRes", e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.duration = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), null != e.duration && e.hasOwnProperty("duration") && t.uint32(32).int32(e.duration), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.BuyTimeRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        case 4:
                            r.duration = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRoomSnapShotMsg = function() {
            function e(e) {
                if (this.rbc = [], this.reward = [], this.players = [], this.AllMultiplier = [], this.CurrencyRate = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomSnapShotMsg", e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.riselefttime = 0, e.prototype.rbc = y.emptyArray, e.prototype.reward = y.emptyArray, e.prototype.riseIndex = 0, e.prototype.sngStatus = 0, e.prototype.roomStatus = 0, e.prototype.LeftRejoinCount = 0, e.prototype.players = y.emptyArray, e.prototype.roomName = "", e.prototype.regFee = 0, e.prototype.srvFee = 0, e.prototype.riseBlindTime = 0, e.prototype.reliveCount = 0, e.prototype.buyTimeCount = 0, e.prototype.reliveLeftTime = 0, e.prototype.curPlayerReward = 0, e.prototype.betType = 0, e.prototype.betAmount = 0, e.prototype.anmiTimes = 0, e.prototype.thinkTime = 0, e.prototype.bullet = 0, e.prototype.roomNameI18N = "", e.prototype.pauseMessage = "", e.prototype.pauseMessageI18N = "", e.prototype.Multiplier = 0, e.prototype.Jackpot = 0, e.prototype.AllMultiplier = y.emptyArray, e.prototype.timeBankFlag = !1, e.prototype.timeBankDuration = 0, e.prototype.BlindHands = 0, e.prototype.LeftBlindHands = 0, e.prototype.Uuid = "", e.prototype.CurrencyRate = y.emptyArray, e.prototype.willPlayStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.riseBlinding = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.riselefttime && e.hasOwnProperty("riselefttime") && t.uint32(24).uint32(e.riselefttime), null != e.rbc && e.rbc.length)
                    for (var n = 0; n < e.rbc.length; ++n) f.mttPro.SngRoomSnapShotMsg.riseBlindConfig.encode(e.rbc[n], t.uint32(34).fork()).ldelim();
                if (null != e.reward && e.reward.length) {
                    for (t.uint32(42).fork(), n = 0; n < e.reward.length; ++n) t.double(e.reward[n]);
                    t.ldelim()
                }
                if (null != e.riseIndex && e.hasOwnProperty("riseIndex") && t.uint32(48).uint32(e.riseIndex), null != e.sngStatus && e.hasOwnProperty("sngStatus") && t.uint32(56).int32(e.sngStatus), null != e.roomStatus && e.hasOwnProperty("roomStatus") && t.uint32(64).uint32(e.roomStatus), null != e.LeftRejoinCount && e.hasOwnProperty("LeftRejoinCount") && t.uint32(72).uint32(e.LeftRejoinCount), null != e.players && e.players.length)
                    for (n = 0; n < e.players.length; ++n) f.mttPro.SngRoomSnapShotMsg.Player.encode(e.players[n], t.uint32(82).fork()).ldelim();
                if (null != e.roomName && e.hasOwnProperty("roomName") && t.uint32(90).string(e.roomName), null != e.regFee && e.hasOwnProperty("regFee") && t.uint32(97).double(e.regFee), null != e.srvFee && e.hasOwnProperty("srvFee") && t.uint32(105).double(e.srvFee), null != e.riseBlindTime && e.hasOwnProperty("riseBlindTime") && t.uint32(112).int32(e.riseBlindTime), null != e.reliveCount && e.hasOwnProperty("reliveCount") && t.uint32(120).int32(e.reliveCount), null != e.buyTimeCount && e.hasOwnProperty("buyTimeCount") && t.uint32(128).int32(e.buyTimeCount), null != e.reliveLeftTime && e.hasOwnProperty("reliveLeftTime") && t.uint32(136).int32(e.reliveLeftTime), null != e.curPlayerReward && e.hasOwnProperty("curPlayerReward") && t.uint32(145).double(e.curPlayerReward), null != e.betType && e.hasOwnProperty("betType") && t.uint32(152).int32(e.betType), null != e.betAmount && e.hasOwnProperty("betAmount") && t.uint32(161).double(e.betAmount), null != e.anmiTimes && e.hasOwnProperty("anmiTimes") && t.uint32(168).int32(e.anmiTimes), null != e.thinkTime && e.hasOwnProperty("thinkTime") && t.uint32(176).int32(e.thinkTime), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(184).int32(e.bullet), null != e.roomNameI18N && e.hasOwnProperty("roomNameI18N") && t.uint32(194).string(e.roomNameI18N), null != e.pauseMessage && e.hasOwnProperty("pauseMessage") && t.uint32(202).string(e.pauseMessage), null != e.pauseMessageI18N && e.hasOwnProperty("pauseMessageI18N") && t.uint32(210).string(e.pauseMessageI18N), null != e.Multiplier && e.hasOwnProperty("Multiplier") && t.uint32(217).double(e.Multiplier), null != e.Jackpot && e.hasOwnProperty("Jackpot") && t.uint32(225).double(e.Jackpot), null != e.AllMultiplier && e.AllMultiplier.length) {
                    for (t.uint32(234).fork(), n = 0; n < e.AllMultiplier.length; ++n) t.double(e.AllMultiplier[n]);
                    t.ldelim()
                }
                if (null != e.timeBankFlag && e.hasOwnProperty("timeBankFlag") && t.uint32(240).bool(e.timeBankFlag), null != e.timeBankDuration && e.hasOwnProperty("timeBankDuration") && t.uint32(248).int32(e.timeBankDuration), null != e.BlindHands && e.hasOwnProperty("BlindHands") && t.uint32(256).int32(e.BlindHands), null != e.LeftBlindHands && e.hasOwnProperty("LeftBlindHands") && t.uint32(264).int32(e.LeftBlindHands), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(274).string(e.Uuid), null != e.CurrencyRate && e.CurrencyRate.length)
                    for (n = 0; n < e.CurrencyRate.length; ++n) f.mttPro.CurrencyRate.encode(e.CurrencyRate[n], t.uint32(282).fork()).ldelim();
                return null != e.willPlayStartTime && e.hasOwnProperty("willPlayStartTime") && t.uint32(288).int64(e.willPlayStartTime), null != e.riseBlinding && e.hasOwnProperty("riseBlinding") && t.uint32(296).bool(e.riseBlinding), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomSnapShotMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.riselefttime = e.uint32();
                            break;
                        case 4:
                            r.rbc && r.rbc.length || (r.rbc = []), r.rbc.push(f.mttPro.SngRoomSnapShotMsg.riseBlindConfig.decode(e, e.uint32()));
                            break;
                        case 5:
                            if (r.reward && r.reward.length || (r.reward = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.reward.push(e.double());
                            else r.reward.push(e.double());
                            break;
                        case 6:
                            r.riseIndex = e.uint32();
                            break;
                        case 7:
                            r.sngStatus = e.int32();
                            break;
                        case 8:
                            r.roomStatus = e.uint32();
                            break;
                        case 9:
                            r.LeftRejoinCount = e.uint32();
                            break;
                        case 10:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.SngRoomSnapShotMsg.Player.decode(e, e.uint32()));
                            break;
                        case 11:
                            r.roomName = e.string();
                            break;
                        case 12:
                            r.regFee = e.double();
                            break;
                        case 13:
                            r.srvFee = e.double();
                            break;
                        case 14:
                            r.riseBlindTime = e.int32();
                            break;
                        case 15:
                            r.reliveCount = e.int32();
                            break;
                        case 16:
                            r.buyTimeCount = e.int32();
                            break;
                        case 17:
                            r.reliveLeftTime = e.int32();
                            break;
                        case 18:
                            r.curPlayerReward = e.double();
                            break;
                        case 19:
                            r.betType = e.int32();
                            break;
                        case 20:
                            r.betAmount = e.double();
                            break;
                        case 21:
                            r.anmiTimes = e.int32();
                            break;
                        case 22:
                            r.thinkTime = e.int32();
                            break;
                        case 23:
                            r.bullet = e.int32();
                            break;
                        case 24:
                            r.roomNameI18N = e.string();
                            break;
                        case 25:
                            r.pauseMessage = e.string();
                            break;
                        case 26:
                            r.pauseMessageI18N = e.string();
                            break;
                        case 27:
                            r.Multiplier = e.double();
                            break;
                        case 28:
                            r.Jackpot = e.double();
                            break;
                        case 29:
                            if (r.AllMultiplier && r.AllMultiplier.length || (r.AllMultiplier = []), 2 == (7 & o))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.AllMultiplier.push(e.double());
                            else r.AllMultiplier.push(e.double());
                            break;
                        case 30:
                            r.timeBankFlag = e.bool();
                            break;
                        case 31:
                            r.timeBankDuration = e.int32();
                            break;
                        case 32:
                            r.BlindHands = e.int32();
                            break;
                        case 33:
                            r.LeftBlindHands = e.int32();
                            break;
                        case 34:
                            r.Uuid = e.string();
                            break;
                        case 35:
                            r.CurrencyRate && r.CurrencyRate.length || (r.CurrencyRate = []), r.CurrencyRate.push(f.mttPro.CurrencyRate.decode(e, e.uint32()));
                            break;
                        case 36:
                            r.willPlayStartTime = e.int64();
                            break;
                        case 37:
                            r.riseBlinding = e.bool();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.riseBlindConfig = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "riseBlindConfig", e.prototype.SmallBlind = 0, e.prototype.BigBlind = 0, e.prototype.Ante = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.SmallBlind && e.hasOwnProperty("SmallBlind") && t.uint32(9).double(e.SmallBlind), null != e.BigBlind && e.hasOwnProperty("BigBlind") && t.uint32(17).double(e.BigBlind), null != e.Ante && e.hasOwnProperty("Ante") && t.uint32(25).double(e.Ante), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomSnapShotMsg.riseBlindConfig; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.SmallBlind = e.double();
                                break;
                            case 2:
                                r.BigBlind = e.double();
                                break;
                            case 3:
                                r.Ante = e.double();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.rank = 0, e.prototype.bullet = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.rank && e.hasOwnProperty("rank") && t.uint32(16).int32(e.rank), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(24).int32(e.bullet), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomSnapShotMsg.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.rank = e.int32();
                                break;
                            case 3:
                                r.bullet = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.SngRoomRankNotifyMsg = function() {
            function e(e) {
                if (this.players = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomRankNotifyMsg", e.prototype.roomId = 0, e.prototype.roomName = "", e.prototype.GameDuration = 0, e.prototype.BlindLevel = 0, e.prototype.PrizePool = 0, e.prototype.PrizeSize = 0, e.prototype.players = y.emptyArray, e.prototype.roomNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roomName && e.hasOwnProperty("roomName") && t.uint32(18).string(e.roomName), null != e.GameDuration && e.hasOwnProperty("GameDuration") && t.uint32(24).int32(e.GameDuration), null != e.BlindLevel && e.hasOwnProperty("BlindLevel") && t.uint32(32).int32(e.BlindLevel), null != e.PrizePool && e.hasOwnProperty("PrizePool") && t.uint32(41).double(e.PrizePool), null != e.PrizeSize && e.hasOwnProperty("PrizeSize") && t.uint32(48).int32(e.PrizeSize), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.SngRoomRankNotifyMsg.Player.encode(e.players[n], t.uint32(58).fork()).ldelim();
                return null != e.roomNameI18N && e.hasOwnProperty("roomNameI18N") && t.uint32(66).string(e.roomNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomRankNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.roomName = e.string();
                            break;
                        case 3:
                            r.GameDuration = e.int32();
                            break;
                        case 4:
                            r.BlindLevel = e.int32();
                            break;
                        case 5:
                            r.PrizePool = e.double();
                            break;
                        case 6:
                            r.PrizeSize = e.int32();
                            break;
                        case 7:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.SngRoomRankNotifyMsg.Player.decode(e, e.uint32()));
                            break;
                        case 8:
                            r.roomNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.rank = 0, e.prototype.reward = 0, e.prototype.avatar = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.rank && e.hasOwnProperty("rank") && t.uint32(24).int32(e.rank), null != e.reward && e.hasOwnProperty("reward") && t.uint32(33).double(e.reward), null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(42).string(e.avatar), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomRankNotifyMsg.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 3:
                                r.rank = e.int32();
                                break;
                            case 4:
                                r.reward = e.double();
                                break;
                            case 5:
                                r.avatar = e.string();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.SngStartNotifyMsg = function() {
            function e(e) {
                if (this.AllMultiplier = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngStartNotifyMsg", e.prototype.roomId = 0, e.prototype.LeftTime = 0, e.prototype.Multiplier = 0, e.prototype.Jackpot = 0, e.prototype.AllMultiplier = y.emptyArray, e.prototype.Uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.LeftTime && e.hasOwnProperty("LeftTime") && t.uint32(16).uint32(e.LeftTime), null != e.Multiplier && e.hasOwnProperty("Multiplier") && t.uint32(25).double(e.Multiplier), null != e.Jackpot && e.hasOwnProperty("Jackpot") && t.uint32(33).double(e.Jackpot), null != e.AllMultiplier && e.AllMultiplier.length) {
                    t.uint32(42).fork();
                    for (var n = 0; n < e.AllMultiplier.length; ++n) t.double(e.AllMultiplier[n]);
                    t.ldelim()
                }
                return null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(50).string(e.Uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngStartNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.LeftTime = e.uint32();
                            break;
                        case 3:
                            r.Multiplier = e.double();
                            break;
                        case 4:
                            r.Jackpot = e.double();
                            break;
                        case 5:
                            if (r.AllMultiplier && r.AllMultiplier.length || (r.AllMultiplier = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.AllMultiplier.push(e.double());
                            else r.AllMultiplier.push(e.double());
                            break;
                        case 6:
                            r.Uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRoomRankNotifyMsg = function() {
            function e(e) {
                if (this.players = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomRankNotifyMsg", e.prototype.mttId = 0, e.prototype.mttName = "", e.prototype.GameDuration = 0, e.prototype.BlindLevel = 0, e.prototype.PrizePool = 0, e.prototype.PrizeSize = 0, e.prototype.allPlayerCount = 0, e.prototype.curPlayer = null, e.prototype.players = y.emptyArray, e.prototype.mttNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.mttName && e.hasOwnProperty("mttName") && t.uint32(18).string(e.mttName), null != e.GameDuration && e.hasOwnProperty("GameDuration") && t.uint32(24).int32(e.GameDuration), null != e.BlindLevel && e.hasOwnProperty("BlindLevel") && t.uint32(32).int32(e.BlindLevel), null != e.PrizePool && e.hasOwnProperty("PrizePool") && t.uint32(41).double(e.PrizePool), null != e.PrizeSize && e.hasOwnProperty("PrizeSize") && t.uint32(48).int32(e.PrizeSize), null != e.allPlayerCount && e.hasOwnProperty("allPlayerCount") && t.uint32(56).int32(e.allPlayerCount), null != e.curPlayer && e.hasOwnProperty("curPlayer") && f.mttPro.MttRoomRankNotifyMsg.Player.encode(e.curPlayer, t.uint32(66).fork()).ldelim(), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.MttRoomRankNotifyMsg.Player.encode(e.players[n], t.uint32(74).fork()).ldelim();
                return null != e.mttNameI18N && e.hasOwnProperty("mttNameI18N") && t.uint32(82).string(e.mttNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomRankNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.mttName = e.string();
                            break;
                        case 3:
                            r.GameDuration = e.int32();
                            break;
                        case 4:
                            r.BlindLevel = e.int32();
                            break;
                        case 5:
                            r.PrizePool = e.double();
                            break;
                        case 6:
                            r.PrizeSize = e.int32();
                            break;
                        case 7:
                            r.allPlayerCount = e.int32();
                            break;
                        case 8:
                            r.curPlayer = f.mttPro.MttRoomRankNotifyMsg.Player.decode(e, e.uint32());
                            break;
                        case 9:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.MttRoomRankNotifyMsg.Player.decode(e, e.uint32()));
                            break;
                        case 10:
                            r.mttNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.rank = 0, e.prototype.reward = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.joinStatus = 0, e.prototype.toolName = "", e.prototype.toolValue = 0, e.prototype.AvatarId = "", e.prototype.toolNameI18n = "", e.prototype.toolCurrency = "", e.prototype.RegGoldType = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.rank && e.hasOwnProperty("rank") && t.uint32(24).int32(e.rank), null != e.reward && e.hasOwnProperty("reward") && t.uint32(33).double(e.reward), null != e.wins && e.hasOwnProperty("wins") && t.uint32(41).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(49).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(57).double(e.value), null != e.joinStatus && e.hasOwnProperty("joinStatus") && t.uint32(64).int32(e.joinStatus), null != e.toolName && e.hasOwnProperty("toolName") && t.uint32(74).string(e.toolName), null != e.toolValue && e.hasOwnProperty("toolValue") && t.uint32(81).double(e.toolValue), null != e.AvatarId && e.hasOwnProperty("AvatarId") && t.uint32(90).string(e.AvatarId), null != e.toolNameI18n && e.hasOwnProperty("toolNameI18n") && t.uint32(98).string(e.toolNameI18n), null != e.toolCurrency && e.hasOwnProperty("toolCurrency") && t.uint32(106).string(e.toolCurrency), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(112).int32(e.RegGoldType), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomRankNotifyMsg.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 3:
                                r.rank = e.int32();
                                break;
                            case 4:
                                r.reward = e.double();
                                break;
                            case 5:
                                r.wins = e.double();
                                break;
                            case 6:
                                r.bounty = e.double();
                                break;
                            case 7:
                                r.value = e.double();
                                break;
                            case 8:
                                r.joinStatus = e.int32();
                                break;
                            case 9:
                                r.toolName = e.string();
                                break;
                            case 10:
                                r.toolValue = e.double();
                                break;
                            case 11:
                                r.AvatarId = e.string();
                                break;
                            case 12:
                                r.toolNameI18n = e.string();
                                break;
                            case 13:
                                r.toolCurrency = e.string();
                                break;
                            case 14:
                                r.RegGoldType = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.MttRestTimeNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRestTimeNotifyMsg", e.prototype.mttId = 0, e.prototype.RestType = 0, e.prototype.RestTimeDuration = 0, e.prototype.RoomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.RestType && e.hasOwnProperty("RestType") && t.uint32(16).int32(e.RestType), null != e.RestTimeDuration && e.hasOwnProperty("RestTimeDuration") && t.uint32(24).uint32(e.RestTimeDuration), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRestTimeNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.RestType = e.int32();
                            break;
                        case 3:
                            r.RestTimeDuration = e.uint32();
                            break;
                        case 4:
                            r.RoomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRoomSnapshotReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomSnapshotReq", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomSnapshotReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRoomSnapshotRes = function() {
            function e(e) {
                if (this.players = [], this.CurrencyRate = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomSnapshotRes", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.RiseLeftTime = 0, e.prototype.RestType = 0, e.prototype.RestLeftTime = 0, e.prototype.leftRejoinCount = 0, e.prototype.blindIndex = 0, e.prototype.mttStatus = 0, e.prototype.roomStatus = 0, e.prototype.players = y.emptyArray, e.prototype.VoiceInFinal = !1, e.prototype.betType = 0, e.prototype.betAmount = 0, e.prototype.anmiTimes = 0, e.prototype.thinkTime = 0, e.prototype.lastRoom = !1, e.prototype.bullet = 0, e.prototype.NeedWaitEnterRoom = !1, e.prototype.nextPeriodStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.BlindHands = 0, e.prototype.LeftBlindHands = 0, e.prototype.message = "", e.prototype.messageI18N = "", e.prototype.DisplayCurrency = "", e.prototype.CurrencyRate = y.emptyArray, e.prototype.timeBankFlag = !1, e.prototype.timeBankDuration = 0, e.prototype.willPlayStartTime = y.Long ? y.Long.fromBits(0, 0, !1) : 0, e.prototype.allowRebuy = !1, e.prototype.rebuyLeftTime = 0, e.prototype.allowMorebuy = !1, e.prototype.moreBuyLeftTime = 0, e.prototype.riseBlinding = !1, e.prototype.mysterStatus = 0, e.prototype.roomBlindIndex = 0, e.prototype.joinStatus = 0, e.prototype.emojiTimes = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.RiseLeftTime && e.hasOwnProperty("RiseLeftTime") && t.uint32(24).uint32(e.RiseLeftTime), null != e.RestType && e.hasOwnProperty("RestType") && t.uint32(32).int32(e.RestType), null != e.RestLeftTime && e.hasOwnProperty("RestLeftTime") && t.uint32(40).uint32(e.RestLeftTime), null != e.leftRejoinCount && e.hasOwnProperty("leftRejoinCount") && t.uint32(48).int32(e.leftRejoinCount), null != e.blindIndex && e.hasOwnProperty("blindIndex") && t.uint32(56).uint32(e.blindIndex), null != e.mttStatus && e.hasOwnProperty("mttStatus") && t.uint32(64).int32(e.mttStatus), null != e.roomStatus && e.hasOwnProperty("roomStatus") && t.uint32(72).int32(e.roomStatus), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.MttRoomSnapshotRes.Player.encode(e.players[n], t.uint32(82).fork()).ldelim();
                if (null != e.VoiceInFinal && e.hasOwnProperty("VoiceInFinal") && t.uint32(88).bool(e.VoiceInFinal), null != e.betType && e.hasOwnProperty("betType") && t.uint32(96).int32(e.betType), null != e.betAmount && e.hasOwnProperty("betAmount") && t.uint32(105).double(e.betAmount), null != e.anmiTimes && e.hasOwnProperty("anmiTimes") && t.uint32(112).int32(e.anmiTimes), null != e.thinkTime && e.hasOwnProperty("thinkTime") && t.uint32(120).int32(e.thinkTime), null != e.lastRoom && e.hasOwnProperty("lastRoom") && t.uint32(128).bool(e.lastRoom), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(136).int32(e.bullet), null != e.NeedWaitEnterRoom && e.hasOwnProperty("NeedWaitEnterRoom") && t.uint32(144).bool(e.NeedWaitEnterRoom), null != e.nextPeriodStartTime && e.hasOwnProperty("nextPeriodStartTime") && t.uint32(152).int64(e.nextPeriodStartTime), null != e.BlindHands && e.hasOwnProperty("BlindHands") && t.uint32(160).int32(e.BlindHands), null != e.LeftBlindHands && e.hasOwnProperty("LeftBlindHands") && t.uint32(168).int32(e.LeftBlindHands), null != e.message && e.hasOwnProperty("message") && t.uint32(178).string(e.message), null != e.messageI18N && e.hasOwnProperty("messageI18N") && t.uint32(186).string(e.messageI18N), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(194).string(e.DisplayCurrency), null != e.CurrencyRate && e.CurrencyRate.length)
                    for (n = 0; n < e.CurrencyRate.length; ++n) f.mttPro.CurrencyRate.encode(e.CurrencyRate[n], t.uint32(202).fork()).ldelim();
                return null != e.timeBankFlag && e.hasOwnProperty("timeBankFlag") && t.uint32(208).bool(e.timeBankFlag), null != e.timeBankDuration && e.hasOwnProperty("timeBankDuration") && t.uint32(216).int32(e.timeBankDuration), null != e.willPlayStartTime && e.hasOwnProperty("willPlayStartTime") && t.uint32(224).int64(e.willPlayStartTime), null != e.allowRebuy && e.hasOwnProperty("allowRebuy") && t.uint32(232).bool(e.allowRebuy), null != e.rebuyLeftTime && e.hasOwnProperty("rebuyLeftTime") && t.uint32(240).int32(e.rebuyLeftTime), null != e.allowMorebuy && e.hasOwnProperty("allowMorebuy") && t.uint32(248).bool(e.allowMorebuy), null != e.moreBuyLeftTime && e.hasOwnProperty("moreBuyLeftTime") && t.uint32(256).int32(e.moreBuyLeftTime), null != e.riseBlinding && e.hasOwnProperty("riseBlinding") && t.uint32(264).bool(e.riseBlinding), null != e.mysterStatus && e.hasOwnProperty("mysterStatus") && t.uint32(272).int32(e.mysterStatus), null != e.roomBlindIndex && e.hasOwnProperty("roomBlindIndex") && t.uint32(280).uint32(e.roomBlindIndex), null != e.joinStatus && e.hasOwnProperty("joinStatus") && t.uint32(288).int32(e.joinStatus), null != e.emojiTimes && e.hasOwnProperty("emojiTimes") && t.uint32(296).int32(e.emojiTimes), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomSnapshotRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.RiseLeftTime = e.uint32();
                            break;
                        case 4:
                            r.RestType = e.int32();
                            break;
                        case 5:
                            r.RestLeftTime = e.uint32();
                            break;
                        case 6:
                            r.leftRejoinCount = e.int32();
                            break;
                        case 7:
                            r.blindIndex = e.uint32();
                            break;
                        case 8:
                            r.mttStatus = e.int32();
                            break;
                        case 9:
                            r.roomStatus = e.int32();
                            break;
                        case 10:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.MttRoomSnapshotRes.Player.decode(e, e.uint32()));
                            break;
                        case 11:
                            r.VoiceInFinal = e.bool();
                            break;
                        case 12:
                            r.betType = e.int32();
                            break;
                        case 13:
                            r.betAmount = e.double();
                            break;
                        case 14:
                            r.anmiTimes = e.int32();
                            break;
                        case 15:
                            r.thinkTime = e.int32();
                            break;
                        case 16:
                            r.lastRoom = e.bool();
                            break;
                        case 17:
                            r.bullet = e.int32();
                            break;
                        case 18:
                            r.NeedWaitEnterRoom = e.bool();
                            break;
                        case 19:
                            r.nextPeriodStartTime = e.int64();
                            break;
                        case 20:
                            r.BlindHands = e.int32();
                            break;
                        case 21:
                            r.LeftBlindHands = e.int32();
                            break;
                        case 22:
                            r.message = e.string();
                            break;
                        case 23:
                            r.messageI18N = e.string();
                            break;
                        case 24:
                            r.DisplayCurrency = e.string();
                            break;
                        case 25:
                            r.CurrencyRate && r.CurrencyRate.length || (r.CurrencyRate = []), r.CurrencyRate.push(f.mttPro.CurrencyRate.decode(e, e.uint32()));
                            break;
                        case 26:
                            r.timeBankFlag = e.bool();
                            break;
                        case 27:
                            r.timeBankDuration = e.int32();
                            break;
                        case 28:
                            r.willPlayStartTime = e.int64();
                            break;
                        case 29:
                            r.allowRebuy = e.bool();
                            break;
                        case 30:
                            r.rebuyLeftTime = e.int32();
                            break;
                        case 31:
                            r.allowMorebuy = e.bool();
                            break;
                        case 32:
                            r.moreBuyLeftTime = e.int32();
                            break;
                        case 33:
                            r.riseBlinding = e.bool();
                            break;
                        case 34:
                            r.mysterStatus = e.int32();
                            break;
                        case 35:
                            r.roomBlindIndex = e.uint32();
                            break;
                        case 36:
                            r.joinStatus = e.int32();
                            break;
                        case 37:
                            r.emojiTimes = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.rank = 0, e.prototype.buyTimeCount = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.bullet = 0, e.prototype.areaCode = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.rank && e.hasOwnProperty("rank") && t.uint32(16).int32(e.rank), null != e.buyTimeCount && e.hasOwnProperty("buyTimeCount") && t.uint32(24).int32(e.buyTimeCount), null != e.wins && e.hasOwnProperty("wins") && t.uint32(33).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(41).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(49).double(e.value), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(56).int32(e.bullet), null != e.areaCode && e.hasOwnProperty("areaCode") && t.uint32(66).string(e.areaCode), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomSnapshotRes.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.rank = e.int32();
                                break;
                            case 3:
                                r.buyTimeCount = e.int32();
                                break;
                            case 4:
                                r.wins = e.double();
                                break;
                            case 5:
                                r.bounty = e.double();
                                break;
                            case 6:
                                r.value = e.double();
                                break;
                            case 7:
                                r.bullet = e.int32();
                                break;
                            case 8:
                                r.areaCode = e.string();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.CurrencyRate = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CurrencyRate", e.prototype.Currency = "", e.prototype.Rate = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.Currency && e.hasOwnProperty("Currency") && t.uint32(10).string(e.Currency), null != e.Rate && e.hasOwnProperty("Rate") && t.uint32(17).double(e.Rate), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.CurrencyRate; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.Currency = e.string();
                            break;
                        case 2:
                            r.Rate = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.TimeBankDurationMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TimeBankDurationMsg", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.timeBankDuration = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.timeBankDuration && e.hasOwnProperty("timeBankDuration") && t.uint32(24).int32(e.timeBankDuration), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.TimeBankDurationMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.seatNum = e.int32();
                            break;
                        case 3:
                            r.timeBankDuration = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRealTimeRecordReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRealTimeRecordReq", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.fullData = !1, e.prototype.searchKeyword = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.fullData && e.hasOwnProperty("fullData") && t.uint32(24).bool(e.fullData), null != e.searchKeyword && e.hasOwnProperty("searchKeyword") && t.uint32(34).string(e.searchKeyword), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRealTimeRecordReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.fullData = e.bool();
                            break;
                        case 4:
                            r.searchKeyword = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRealTimeRecordRes = function() {
            function e(e) {
                if (this.players = [], this.visitorplayers = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRealTimeRecordRes", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.mttName = "", e.prototype.Duration = 0, e.prototype.AvgScore = 0, e.prototype.Pre100Score = 0, e.prototype.AllScore = 0, e.prototype.PlayerCount = 0, e.prototype.AllPlayerCount = 0, e.prototype.AllPlayerJoinCount = 0, e.prototype.players = y.emptyArray, e.prototype.VisitorCount = 0, e.prototype.visitorplayers = y.emptyArray, e.prototype.curPlayer = null, e.prototype.AvgBullet = 0, e.prototype.Pre100Bullet = 0, e.prototype.AllBullet = 0, e.prototype.mttNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.mttName && e.hasOwnProperty("mttName") && t.uint32(26).string(e.mttName), null != e.Duration && e.hasOwnProperty("Duration") && t.uint32(32).uint32(e.Duration), null != e.AvgScore && e.hasOwnProperty("AvgScore") && t.uint32(41).double(e.AvgScore), null != e.Pre100Score && e.hasOwnProperty("Pre100Score") && t.uint32(49).double(e.Pre100Score), null != e.AllScore && e.hasOwnProperty("AllScore") && t.uint32(57).double(e.AllScore), null != e.PlayerCount && e.hasOwnProperty("PlayerCount") && t.uint32(64).uint32(e.PlayerCount), null != e.AllPlayerCount && e.hasOwnProperty("AllPlayerCount") && t.uint32(72).uint32(e.AllPlayerCount), null != e.AllPlayerJoinCount && e.hasOwnProperty("AllPlayerJoinCount") && t.uint32(80).uint32(e.AllPlayerJoinCount), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.MttRealTimeRecordRes.Player.encode(e.players[n], t.uint32(90).fork()).ldelim();
                if (null != e.VisitorCount && e.hasOwnProperty("VisitorCount") && t.uint32(96).int32(e.VisitorCount), null != e.visitorplayers && e.visitorplayers.length)
                    for (n = 0; n < e.visitorplayers.length; ++n) f.mttPro.MttRealTimeRecordRes.VisitorPlayer.encode(e.visitorplayers[n], t.uint32(106).fork()).ldelim();
                return null != e.curPlayer && e.hasOwnProperty("curPlayer") && f.mttPro.MttRealTimeRecordRes.Player.encode(e.curPlayer, t.uint32(114).fork()).ldelim(), null != e.AvgBullet && e.hasOwnProperty("AvgBullet") && t.uint32(120).int32(e.AvgBullet), null != e.Pre100Bullet && e.hasOwnProperty("Pre100Bullet") && t.uint32(128).int32(e.Pre100Bullet), null != e.AllBullet && e.hasOwnProperty("AllBullet") && t.uint32(136).int32(e.AllBullet), null != e.mttNameI18N && e.hasOwnProperty("mttNameI18N") && t.uint32(146).string(e.mttNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRealTimeRecordRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.mttName = e.string();
                            break;
                        case 4:
                            r.Duration = e.uint32();
                            break;
                        case 5:
                            r.AvgScore = e.double();
                            break;
                        case 6:
                            r.Pre100Score = e.double();
                            break;
                        case 7:
                            r.AllScore = e.double();
                            break;
                        case 8:
                            r.PlayerCount = e.uint32();
                            break;
                        case 9:
                            r.AllPlayerCount = e.uint32();
                            break;
                        case 10:
                            r.AllPlayerJoinCount = e.uint32();
                            break;
                        case 11:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.MttRealTimeRecordRes.Player.decode(e, e.uint32()));
                            break;
                        case 12:
                            r.VisitorCount = e.int32();
                            break;
                        case 13:
                            r.visitorplayers && r.visitorplayers.length || (r.visitorplayers = []), r.visitorplayers.push(f.mttPro.MttRealTimeRecordRes.VisitorPlayer.decode(e, e.uint32()));
                            break;
                        case 14:
                            r.curPlayer = f.mttPro.MttRealTimeRecordRes.Player.decode(e, e.uint32());
                            break;
                        case 15:
                            r.AvgBullet = e.int32();
                            break;
                        case 16:
                            r.Pre100Bullet = e.int32();
                            break;
                        case 17:
                            r.AllBullet = e.int32();
                            break;
                        case 18:
                            r.mttNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.leftcoin = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.rank = 0, e.prototype.roomId = 0, e.prototype.joinStatus = 0, e.prototype.AvatarId = "", e.prototype.bullet = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.leftcoin && e.hasOwnProperty("leftcoin") && t.uint32(25).double(e.leftcoin), null != e.wins && e.hasOwnProperty("wins") && t.uint32(33).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(41).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(49).double(e.value), null != e.rank && e.hasOwnProperty("rank") && t.uint32(56).uint32(e.rank), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(64).uint32(e.roomId), null != e.joinStatus && e.hasOwnProperty("joinStatus") && t.uint32(72).int32(e.joinStatus), null != e.AvatarId && e.hasOwnProperty("AvatarId") && t.uint32(82).string(e.AvatarId), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(88).int32(e.bullet), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRealTimeRecordRes.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 3:
                                r.leftcoin = e.double();
                                break;
                            case 4:
                                r.wins = e.double();
                                break;
                            case 5:
                                r.bounty = e.double();
                                break;
                            case 6:
                                r.value = e.double();
                                break;
                            case 7:
                                r.rank = e.uint32();
                                break;
                            case 8:
                                r.roomId = e.uint32();
                                break;
                            case 9:
                                r.joinStatus = e.int32();
                                break;
                            case 10:
                                r.AvatarId = e.string();
                                break;
                            case 11:
                                r.bullet = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e.VisitorPlayer = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "VisitorPlayer", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.roomId = 0, e.prototype.AvatarId = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(64).uint32(e.roomId), null != e.AvatarId && e.hasOwnProperty("AvatarId") && t.uint32(74).string(e.AvatarId), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRealTimeRecordRes.VisitorPlayer; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 8:
                                r.roomId = e.uint32();
                                break;
                            case 9:
                                r.AvatarId = e.string();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.SngReliveReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngReliveReq", e.prototype.roomId = 0, e.prototype.reliveType = 0, e.prototype.Coin = 0, e.prototype.ItemId = y.Long ? y.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.reliveType && e.hasOwnProperty("reliveType") && t.uint32(16).int32(e.reliveType), null != e.Coin && e.hasOwnProperty("Coin") && t.uint32(25).double(e.Coin), null != e.ItemId && e.hasOwnProperty("ItemId") && t.uint32(32).uint64(e.ItemId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngReliveReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.reliveType = e.int32();
                            break;
                        case 3:
                            r.Coin = e.double();
                            break;
                        case 4:
                            r.ItemId = e.uint64();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngReliveRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngReliveRes", e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.coin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(24).int32(e.seatNum), null != e.coin && e.hasOwnProperty("coin") && t.uint32(33).double(e.coin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngReliveRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.seatNum = e.int32();
                            break;
                        case 4:
                            r.coin = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttCancelFantasyNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttCancelFantasyNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttCancelFantasyNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRealTimeRecordReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRealTimeRecordReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRealTimeRecordReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRealTimeRecordRes = function() {
            function e(e) {
                if (this.players = [], this.visitorplayers = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRealTimeRecordRes", e.prototype.roomId = 0, e.prototype.roomName = "", e.prototype.Duration = 0, e.prototype.AvgScore = 0, e.prototype.CurPlayerCount = 0, e.prototype.AllPlayerCount = 0, e.prototype.players = y.emptyArray, e.prototype.VisitorCount = 0, e.prototype.visitorplayers = y.emptyArray, e.prototype.AvgBullet = 0, e.prototype.roomNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roomName && e.hasOwnProperty("roomName") && t.uint32(18).string(e.roomName), null != e.Duration && e.hasOwnProperty("Duration") && t.uint32(24).uint32(e.Duration), null != e.AvgScore && e.hasOwnProperty("AvgScore") && t.uint32(33).double(e.AvgScore), null != e.CurPlayerCount && e.hasOwnProperty("CurPlayerCount") && t.uint32(40).uint32(e.CurPlayerCount), null != e.AllPlayerCount && e.hasOwnProperty("AllPlayerCount") && t.uint32(48).uint32(e.AllPlayerCount), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.SngRealTimeRecordRes.Player.encode(e.players[n], t.uint32(58).fork()).ldelim();
                if (null != e.VisitorCount && e.hasOwnProperty("VisitorCount") && t.uint32(64).int32(e.VisitorCount), null != e.visitorplayers && e.visitorplayers.length)
                    for (n = 0; n < e.visitorplayers.length; ++n) f.mttPro.SngRealTimeRecordRes.VisitorPlayer.encode(e.visitorplayers[n], t.uint32(74).fork()).ldelim();
                return null != e.AvgBullet && e.hasOwnProperty("AvgBullet") && t.uint32(80).int32(e.AvgBullet), null != e.roomNameI18N && e.hasOwnProperty("roomNameI18N") && t.uint32(90).string(e.roomNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRealTimeRecordRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.roomName = e.string();
                            break;
                        case 3:
                            r.Duration = e.uint32();
                            break;
                        case 4:
                            r.AvgScore = e.double();
                            break;
                        case 5:
                            r.CurPlayerCount = e.uint32();
                            break;
                        case 6:
                            r.AllPlayerCount = e.uint32();
                            break;
                        case 7:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.SngRealTimeRecordRes.Player.decode(e, e.uint32()));
                            break;
                        case 8:
                            r.VisitorCount = e.int32();
                            break;
                        case 9:
                            r.visitorplayers && r.visitorplayers.length || (r.visitorplayers = []), r.visitorplayers.push(f.mttPro.SngRealTimeRecordRes.VisitorPlayer.decode(e, e.uint32()));
                            break;
                        case 10:
                            r.AvgBullet = e.int32();
                            break;
                        case 11:
                            r.roomNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.leftcoin = 0, e.prototype.rank = 0, e.prototype.rebuyCount = 0, e.prototype.AvatarId = "", e.prototype.bullet = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.leftcoin && e.hasOwnProperty("leftcoin") && t.uint32(25).double(e.leftcoin), null != e.rank && e.hasOwnProperty("rank") && t.uint32(32).int32(e.rank), null != e.rebuyCount && e.hasOwnProperty("rebuyCount") && t.uint32(40).int32(e.rebuyCount), null != e.AvatarId && e.hasOwnProperty("AvatarId") && t.uint32(50).string(e.AvatarId), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(56).int32(e.bullet), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRealTimeRecordRes.Player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 3:
                                r.leftcoin = e.double();
                                break;
                            case 4:
                                r.rank = e.int32();
                                break;
                            case 5:
                                r.rebuyCount = e.int32();
                                break;
                            case 6:
                                r.AvatarId = e.string();
                                break;
                            case 7:
                                r.bullet = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e.VisitorPlayer = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "VisitorPlayer", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.AvatarId = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.AvatarId && e.hasOwnProperty("AvatarId") && t.uint32(26).string(e.AvatarId), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRealTimeRecordRes.VisitorPlayer; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.nickName = e.string();
                                break;
                            case 3:
                                r.AvatarId = e.string();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.MttRoomEndNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomEndNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomEndNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttStopReJoinNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttStopReJoinNotifyMsg", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttStopReJoinNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserRankMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserRankMsg", e.prototype.mttId = 0, e.prototype.userId = 0, e.prototype.rank = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.rank && e.hasOwnProperty("rank") && t.uint32(24).int32(e.rank), null != e.wins && e.hasOwnProperty("wins") && t.uint32(33).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(41).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(49).double(e.value), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserRankMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        case 3:
                            r.rank = e.int32();
                            break;
                        case 4:
                            r.wins = e.double();
                            break;
                        case 5:
                            r.bounty = e.double();
                            break;
                        case 6:
                            r.value = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserOutMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserOutMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserOutMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRoomSnapShotReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomSnapShotReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomSnapShotReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRoomChangeMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomChangeMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomChangeMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttHoldemStadiumReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttHoldemStadiumReq", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttHoldemStadiumReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttHoldemStadiumRes = function() {
            function e(e) {
                if (this.rbc = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttHoldemStadiumRes", e.prototype.mttId = 0, e.prototype.rbc = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.rbc && e.rbc.length)
                    for (var n = 0; n < e.rbc.length; ++n) f.mttPro.MttHoldemStadiumRes.riseBlindConfig.encode(e.rbc[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttHoldemStadiumRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.rbc && r.rbc.length || (r.rbc = []), r.rbc.push(f.mttPro.MttHoldemStadiumRes.riseBlindConfig.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.riseBlindConfig = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "riseBlindConfig", e.prototype.SmallBlind = 0, e.prototype.BigBlind = 0, e.prototype.Ante = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.SmallBlind && e.hasOwnProperty("SmallBlind") && t.uint32(9).double(e.SmallBlind), null != e.BigBlind && e.hasOwnProperty("BigBlind") && t.uint32(17).double(e.BigBlind), null != e.Ante && e.hasOwnProperty("Ante") && t.uint32(25).double(e.Ante), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttHoldemStadiumRes.riseBlindConfig; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.SmallBlind = e.double();
                                break;
                            case 2:
                                r.BigBlind = e.double();
                                break;
                            case 3:
                                r.Ante = e.double();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.MttPineAppleStadiumReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPineAppleStadiumReq", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttPineAppleStadiumReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttPineAppleStadiumRes = function() {
            function e(e) {
                if (this.CoinPerPoint = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPineAppleStadiumRes", e.prototype.mttId = 0, e.prototype.CoinPerPoint = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.CoinPerPoint && e.CoinPerPoint.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.CoinPerPoint.length; ++n) t.double(e.CoinPerPoint[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttPineAppleStadiumRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            if (r.CoinPerPoint && r.CoinPerPoint.length || (r.CoinPerPoint = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.CoinPerPoint.push(e.double());
                            else r.CoinPerPoint.push(e.double());
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserInfoReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserInfoReq", e.prototype.mttId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserInfoReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserInfoRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserInfoRes", e.prototype.mttId = 0, e.prototype.userId = 0, e.prototype.rank = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.areaCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.rank && e.hasOwnProperty("rank") && t.uint32(24).int32(e.rank), null != e.wins && e.hasOwnProperty("wins") && t.uint32(33).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(41).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(49).double(e.value), null != e.areaCode && e.hasOwnProperty("areaCode") && t.uint32(58).string(e.areaCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserInfoRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        case 3:
                            r.rank = e.int32();
                            break;
                        case 4:
                            r.wins = e.double();
                            break;
                        case 5:
                            r.bounty = e.double();
                            break;
                        case 6:
                            r.value = e.double();
                            break;
                        case 7:
                            r.areaCode = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRewardInfoReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRewardInfoReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRewardInfoReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRewardInfoRes = function() {
            function e(e) {
                if (this.rewardTable = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRewardInfoRes", e.prototype.roomId = 0, e.prototype.rewardTable = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.rewardTable && e.rewardTable.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.rewardTable.length; ++n) t.double(e.rewardTable[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRewardInfoRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            if (r.rewardTable && r.rewardTable.length || (r.rewardTable = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.rewardTable.push(e.double());
                            else r.rewardTable.push(e.double());
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttStateNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttStateNotifyMsg", e.prototype.mttId = 0, e.prototype.status = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.status && e.hasOwnProperty("status") && t.uint32(16).int32(e.status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttStateNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.status = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttLastRoomNotifyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttLastRoomNotifyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttLastRoomNotifyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttLastRoomAnimationMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttLastRoomAnimationMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttLastRoomAnimationMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.GuessHandlePorkReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GuessHandlePorkReq", e.prototype.stdId = 0, e.prototype.betType = 0, e.prototype.betAmount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(8).uint32(e.stdId), null != e.betType && e.hasOwnProperty("betType") && t.uint32(16).int32(e.betType), null != e.betAmount && e.hasOwnProperty("betAmount") && t.uint32(25).double(e.betAmount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.GuessHandlePorkReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.stdId = e.uint32();
                            break;
                        case 2:
                            r.betType = e.int32();
                            break;
                        case 3:
                            r.betAmount = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.GuessHandlePorkRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GuessHandlePorkRes", e.prototype.stdId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(8).uint32(e.stdId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.GuessHandlePorkRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.stdId = e.uint32();
                            break;
                        case 2:
                            r.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.GuessHandlePorkMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GuessHandlePorkMsg", e.prototype.stdId = 0, e.prototype.reward = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(8).uint32(e.stdId), null != e.reward && e.hasOwnProperty("reward") && t.uint32(17).double(e.reward), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.GuessHandlePorkMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.stdId = e.uint32();
                            break;
                        case 2:
                            r.reward = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttLastRoomRequest = function() {
            function e(e) {
                if (this.userId = [], this.RewardUserId = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttLastRoomRequest", e.prototype.mttId = 0, e.prototype.userId = y.emptyArray, e.prototype.RewardUserId = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.userId.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.userId.length; ++n) t.uint32(e.userId[n]);
                    t.ldelim()
                }
                if (null != e.RewardUserId && e.RewardUserId.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.RewardUserId.length; ++n) t.uint32(e.RewardUserId[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttLastRoomRequest; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            if (r.userId && r.userId.length || (r.userId = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.userId.push(e.uint32());
                            else r.userId.push(e.uint32());
                            break;
                        case 3:
                            if (r.RewardUserId && r.RewardUserId.length || (r.RewardUserId = []), 2 == (7 & o))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.RewardUserId.push(e.uint32());
                            else r.RewardUserId.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SpinsRoomUserRequest = function() {
            function e(e) {
                if (this.userId = [], this.RewardUserId = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SpinsRoomUserRequest", e.prototype.sngId = 0, e.prototype.userId = y.emptyArray, e.prototype.RewardUserId = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.sngId && e.hasOwnProperty("sngId") && t.uint32(8).uint32(e.sngId), null != e.userId && e.userId.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.userId.length; ++n) t.uint32(e.userId[n]);
                    t.ldelim()
                }
                if (null != e.RewardUserId && e.RewardUserId.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.RewardUserId.length; ++n) t.uint32(e.RewardUserId[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SpinsRoomUserRequest; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.sngId = e.uint32();
                            break;
                        case 2:
                            if (r.userId && r.userId.length || (r.userId = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.userId.push(e.uint32());
                            else r.userId.push(e.uint32());
                            break;
                        case 3:
                            if (r.RewardUserId && r.RewardUserId.length || (r.RewardUserId = []), 2 == (7 & o))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.RewardUserId.push(e.uint32());
                            else r.RewardUserId.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.BulletExchangeReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BulletExchangeReq", e.prototype.stdId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(8).uint32(e.stdId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.BulletExchangeReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.stdId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.BulletExchangeRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BulletExchangeRes", e.prototype.code = 0, e.prototype.stdId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(16).uint32(e.stdId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.BulletExchangeRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.stdId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.BulletExchangeMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BulletExchangeMsg", e.prototype.stdId = 0, e.prototype.userId = 0, e.prototype.bullet = 0, e.prototype.coinLeft = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.stdId && e.hasOwnProperty("stdId") && t.uint32(8).uint32(e.stdId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.bullet && e.hasOwnProperty("bullet") && t.uint32(24).int32(e.bullet), null != e.coinLeft && e.hasOwnProperty("coinLeft") && t.uint32(33).double(e.coinLeft), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.BulletExchangeMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.stdId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        case 3:
                            r.bullet = e.int32();
                            break;
                        case 4:
                            r.coinLeft = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttExDataMsg = function() {
            function e(e) {
                if (this.players = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttExDataMsg", e.prototype.roomId = 0, e.prototype.players = y.emptyArray, e.prototype.LeftBlindHand = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) f.mttPro.MttExDataMsg.player.encode(e.players[n], t.uint32(18).fork()).ldelim();
                return null != e.LeftBlindHand && e.hasOwnProperty("LeftBlindHand") && t.uint32(24).int32(e.LeftBlindHand), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttExDataMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.players && r.players.length || (r.players = []), r.players.push(f.mttPro.MttExDataMsg.player.decode(e, e.uint32()));
                            break;
                        case 3:
                            r.LeftBlindHand = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "player", e.prototype.userId = 0, e.prototype.value = 0, e.prototype.coinLeft = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.value && e.hasOwnProperty("value") && t.uint32(17).double(e.value), null != e.coinLeft && e.hasOwnProperty("coinLeft") && t.uint32(25).double(e.coinLeft), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttExDataMsg.player; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.value = e.double();
                                break;
                            case 3:
                                r.coinLeft = e.double();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.HunterCelebrityMsg = function() {
            function e(e) {
                if (this.HunterUserId = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "HunterCelebrityMsg", e.prototype.CelebrityUserId = 0, e.prototype.HunterUserId = y.emptyArray, e.prototype.amount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.CelebrityUserId && e.hasOwnProperty("CelebrityUserId") && t.uint32(8).uint32(e.CelebrityUserId), null != e.HunterUserId && e.HunterUserId.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.HunterUserId.length; ++n) t.uint32(e.HunterUserId[n]);
                    t.ldelim()
                }
                return null != e.amount && e.hasOwnProperty("amount") && t.uint32(25).double(e.amount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.HunterCelebrityMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.CelebrityUserId = e.uint32();
                            break;
                        case 2:
                            if (r.HunterUserId && r.HunterUserId.length || (r.HunterUserId = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.HunterUserId.push(e.uint32());
                            else r.HunterUserId.push(e.uint32());
                            break;
                        case 3:
                            r.amount = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.TimeBankFlagSetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TimeBankFlagSetReq", e.prototype.flag = !1, e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.flag && e.hasOwnProperty("flag") && t.uint32(8).bool(e.flag), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.TimeBankFlagSetReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.flag = e.bool();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.TimeBankFlagSetRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TimeBankFlagSetRes", e.prototype.code = 0, e.prototype.flag = !1, e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.flag && e.hasOwnProperty("flag") && t.uint32(16).bool(e.flag), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(24).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.TimeBankFlagSetRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.flag = e.bool();
                            break;
                        case 3:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserGameSumInfoReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserGameSumInfoReq", e.prototype.mttId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserGameSumInfoReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttUserGameSumInfoRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttUserGameSumInfoRes", e.prototype.code = 0, e.prototype.mttId = 0, e.prototype.userId = 0, e.prototype.hands = 0, e.prototype.vpip = 0, e.prototype.pfr = 0, e.prototype.af = 0, e.prototype.etf = 0, e.prototype.cBet = 0, e.prototype.threeBet = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), null != e.hands && e.hasOwnProperty("hands") && t.uint32(32).int32(e.hands), null != e.vpip && e.hasOwnProperty("vpip") && t.uint32(41).double(e.vpip), null != e.pfr && e.hasOwnProperty("pfr") && t.uint32(49).double(e.pfr), null != e.af && e.hasOwnProperty("af") && t.uint32(57).double(e.af), null != e.etf && e.hasOwnProperty("etf") && t.uint32(65).double(e.etf), null != e.cBet && e.hasOwnProperty("cBet") && t.uint32(73).double(e.cBet), null != e.threeBet && e.hasOwnProperty("threeBet") && t.uint32(81).double(e.threeBet), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttUserGameSumInfoRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        case 3:
                            r.userId = e.uint32();
                            break;
                        case 4:
                            r.hands = e.int32();
                            break;
                        case 5:
                            r.vpip = e.double();
                            break;
                        case 6:
                            r.pfr = e.double();
                            break;
                        case 7:
                            r.af = e.double();
                            break;
                        case 8:
                            r.etf = e.double();
                            break;
                        case 9:
                            r.cBet = e.double();
                            break;
                        case 10:
                            r.threeBet = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.EnterSngRoomLevelReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EnterSngRoomLevelReq", e.prototype.levelId = 0, e.prototype.count = 0, e.prototype.lat = 0, e.prototype.lng = 0, e.prototype.geoComplianceToken = "", e.prototype.IsDesktop = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(8).uint32(e.levelId), null != e.count && e.hasOwnProperty("count") && t.uint32(16).int32(e.count), null != e.lat && e.hasOwnProperty("lat") && t.uint32(29).float(e.lat), null != e.lng && e.hasOwnProperty("lng") && t.uint32(37).float(e.lng), null != e.geoComplianceToken && e.hasOwnProperty("geoComplianceToken") && t.uint32(42).string(e.geoComplianceToken), null != e.IsDesktop && e.hasOwnProperty("IsDesktop") && t.uint32(48).bool(e.IsDesktop), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.EnterSngRoomLevelReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.levelId = e.uint32();
                            break;
                        case 2:
                            r.count = e.int32();
                            break;
                        case 3:
                            r.lat = e.float();
                            break;
                        case 4:
                            r.lng = e.float();
                            break;
                        case 5:
                            r.geoComplianceToken = e.string();
                            break;
                        case 6:
                            r.IsDesktop = e.bool();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.EnterSngRoomLevelRes = function() {
            function e(e) {
                if (this.roomId = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EnterSngRoomLevelRes", e.prototype.code = 0, e.prototype.levelId = 0, e.prototype.roomId = y.emptyArray, e.prototype.geoComplianceResult = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(16).uint32(e.levelId), null != e.roomId && e.roomId.length) {
                    t.uint32(26).fork();
                    for (var n = 0; n < e.roomId.length; ++n) t.uint32(e.roomId[n]);
                    t.ldelim()
                }
                return null != e.geoComplianceResult && e.hasOwnProperty("geoComplianceResult") && t.uint32(34).string(e.geoComplianceResult), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.EnterSngRoomLevelRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.levelId = e.uint32();
                            break;
                        case 3:
                            if (r.roomId && r.roomId.length || (r.roomId = []), 2 == (7 & o))
                                for (var i = e.uint32() + e.pos; e.pos < i;) r.roomId.push(e.uint32());
                            else r.roomId.push(e.uint32());
                            break;
                        case 4:
                            r.geoComplianceResult = e.string();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRoomLevelInfoReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomLevelInfoReq", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomLevelInfoReq; e.pos < n;) {
                    var o = e.uint32();
                    e.skipType(7 & o)
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRoomLevelInfoRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomLevelInfoRes", e.prototype.code = 0, e.prototype.takeinCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.takeinCount && e.hasOwnProperty("takeinCount") && t.uint32(16).int32(e.takeinCount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomLevelInfoRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.takeinCount = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.ExitSngRoomLevelReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ExitSngRoomLevelReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.ExitSngRoomLevelReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.ExitSngRoomLevelRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ExitSngRoomLevelRes", e.prototype.code = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.ExitSngRoomLevelRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.SngRoomExDataMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngRoomExDataMsg", e.prototype.roomId = 0, e.prototype.LeftBlindHand = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.LeftBlindHand && e.hasOwnProperty("LeftBlindHand") && t.uint32(16).int32(e.LeftBlindHand), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.SngRoomExDataMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.LeftBlindHand = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.User_ForbidMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_ForbidMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.User_ForbidMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRebuyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRebuyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.allow = !1, e.prototype.leftTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.allow && e.hasOwnProperty("allow") && t.uint32(24).bool(e.allow), null != e.leftTime && e.hasOwnProperty("leftTime") && t.uint32(32).int32(e.leftTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRebuyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.allow = e.bool();
                            break;
                        case 4:
                            r.leftTime = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttMorebuyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMorebuyMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.allow = !1, e.prototype.leftTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.allow && e.hasOwnProperty("allow") && t.uint32(24).bool(e.allow), null != e.leftTime && e.hasOwnProperty("leftTime") && t.uint32(32).int32(e.leftTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttMorebuyMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 3:
                            r.allow = e.bool();
                            break;
                        case 4:
                            r.leftTime = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttCancelBuyReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttCancelBuyReq", e.prototype.typeId = 0, e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.typeId && e.hasOwnProperty("typeId") && t.uint32(8).int32(e.typeId), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttCancelBuyReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.typeId = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttCancelBuyRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttCancelBuyRes", e.prototype.code = 0, e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttCancelBuyRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MysteryPrize_Tier = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Tier_Null"] = 0, t[e[1] = "Tier_Gold"] = 1, t[e[2] = "Tier_Red"] = 2, t[e[3] = "Tier_Purple"] = 3, t
        }(), l.MysteryPrizeMsg = function() {
            function e(e) {
                if (this.eliminatUserInfo = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MysteryPrizeMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.eliminatUserInfo = y.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.eliminatUserInfo && e.eliminatUserInfo.length)
                    for (var n = 0; n < e.eliminatUserInfo.length; ++n) f.mttPro.MysteryPrizeMsg.eliminatInfo.encode(e.eliminatUserInfo[n], t.uint32(34).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.roomId = e.uint32();
                            break;
                        case 4:
                            r.eliminatUserInfo && r.eliminatUserInfo.length || (r.eliminatUserInfo = []), r.eliminatUserInfo.push(f.mttPro.MysteryPrizeMsg.eliminatInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.eliminatInfo = function() {
                function e(e) {
                    if (this.winnerInfoList = [], e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "eliminatInfo", e.prototype.userId = 0, e.prototype.winnerInfoList = y.emptyArray, e.prototype.hitJackpot = !1, e.prototype.Tier = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    if (t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.winnerInfoList && e.winnerInfoList.length)
                        for (var n = 0; n < e.winnerInfoList.length; ++n) f.mttPro.MysteryPrizeMsg.winnerInfo.encode(e.winnerInfoList[n], t.uint32(18).fork()).ldelim();
                    return null != e.hitJackpot && e.hasOwnProperty("hitJackpot") && t.uint32(24).bool(e.hitJackpot), null != e.Tier && e.hasOwnProperty("Tier") && t.uint32(32).int32(e.Tier), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeMsg.eliminatInfo; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.winnerInfoList && r.winnerInfoList.length || (r.winnerInfoList = []), r.winnerInfoList.push(f.mttPro.MysteryPrizeMsg.winnerInfo.decode(e, e.uint32()));
                                break;
                            case 3:
                                r.hitJackpot = e.bool();
                                break;
                            case 4:
                                r.Tier = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e.winnerInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "winnerInfo", e.prototype.userId = 0, e.prototype.prize = 0, e.prototype.nick = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.prize && e.hasOwnProperty("prize") && t.uint32(17).double(e.prize), null != e.nick && e.hasOwnProperty("nick") && t.uint32(26).string(e.nick), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeMsg.winnerInfo; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.userId = e.uint32();
                                break;
                            case 2:
                                r.prize = e.double();
                                break;
                            case 3:
                                r.nick = e.string();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.MysteryPrizeTableReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MysteryPrizeTableReq", e.prototype.mttId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeTableReq; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MysteryPrizeTable = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MysteryPrizeTable", e.prototype.jackpot = !1, e.prototype.prize = 0, e.prototype.hit = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.jackpot && e.hasOwnProperty("jackpot") && t.uint32(8).bool(e.jackpot), null != e.prize && e.hasOwnProperty("prize") && t.uint32(17).double(e.prize), null != e.hit && e.hasOwnProperty("hit") && t.uint32(24).bool(e.hit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeTable; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.jackpot = e.bool();
                            break;
                        case 2:
                            r.prize = e.double();
                            break;
                        case 3:
                            r.hit = e.bool();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MysteryPrizeTableRes = function() {
            function e(e) {
                if (this.prizeList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MysteryPrizeTableRes", e.prototype.code = 0, e.prototype.mttId = 0, e.prototype.prizeList = y.emptyArray, e.prototype.enterMysteryParam = null, e.prototype.totalBounty = 0, e.prototype.curBlindLevel = 0, e.prototype.curPlayer = 0, e.prototype.allPlayer = 0, e.prototype.discrepancy = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(16).uint32(e.mttId), null != e.prizeList && e.prizeList.length)
                    for (var n = 0; n < e.prizeList.length; ++n) f.mttPro.MysteryPrizeTable.encode(e.prizeList[n], t.uint32(26).fork()).ldelim();
                return null != e.enterMysteryParam && e.hasOwnProperty("enterMysteryParam") && f.mttPro.MysteryPrizeTableRes.EnterMysteryParam.encode(e.enterMysteryParam, t.uint32(34).fork()).ldelim(), null != e.totalBounty && e.hasOwnProperty("totalBounty") && t.uint32(57).double(e.totalBounty), null != e.curBlindLevel && e.hasOwnProperty("curBlindLevel") && t.uint32(64).int32(e.curBlindLevel), null != e.curPlayer && e.hasOwnProperty("curPlayer") && t.uint32(72).int32(e.curPlayer), null != e.allPlayer && e.hasOwnProperty("allPlayer") && t.uint32(80).int32(e.allPlayer), null != e.discrepancy && e.hasOwnProperty("discrepancy") && t.uint32(89).double(e.discrepancy), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeTableRes; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.code = e.int32();
                            break;
                        case 2:
                            r.mttId = e.uint32();
                            break;
                        case 3:
                            r.prizeList && r.prizeList.length || (r.prizeList = []), r.prizeList.push(f.mttPro.MysteryPrizeTable.decode(e, e.uint32()));
                            break;
                        case 4:
                            r.enterMysteryParam = f.mttPro.MysteryPrizeTableRes.EnterMysteryParam.decode(e, e.uint32());
                            break;
                        case 7:
                            r.totalBounty = e.double();
                            break;
                        case 8:
                            r.curBlindLevel = e.int32();
                            break;
                        case 9:
                            r.curPlayer = e.int32();
                            break;
                        case 10:
                            r.allPlayer = e.int32();
                            break;
                        case 11:
                            r.discrepancy = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.EnterMysteryParam = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "EnterMysteryParam", e.prototype.leftPlayerCount = 0, e.prototype.blindLevel = 0, e.prototype.day2 = !1, e.prototype.circlePlayerCount = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.leftPlayerCount && e.hasOwnProperty("leftPlayerCount") && t.uint32(8).int32(e.leftPlayerCount), null != e.blindLevel && e.hasOwnProperty("blindLevel") && t.uint32(16).int32(e.blindLevel), null != e.day2 && e.hasOwnProperty("day2") && t.uint32(24).bool(e.day2), null != e.circlePlayerCount && e.hasOwnProperty("circlePlayerCount") && t.uint32(32).int32(e.circlePlayerCount), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof d || (e = d.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeTableRes.EnterMysteryParam; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.leftPlayerCount = e.int32();
                                break;
                            case 2:
                                r.blindLevel = e.int32();
                                break;
                            case 3:
                                r.day2 = e.bool();
                                break;
                            case 4:
                                r.circlePlayerCount = e.int32();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), l.MysteryPrizeTableMsg = function() {
            function e(e) {
                if (this.prizeList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MysteryPrizeTableMsg", e.prototype.mttId = 0, e.prototype.prizeList = y.emptyArray, e.prototype.totalBounty = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.prizeList && e.prizeList.length)
                    for (var n = 0; n < e.prizeList.length; ++n) f.mttPro.MysteryPrizeTable.encode(e.prizeList[n], t.uint32(18).fork()).ldelim();
                return null != e.totalBounty && e.hasOwnProperty("totalBounty") && t.uint32(25).double(e.totalBounty), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MysteryPrizeTableMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.mttId = e.uint32();
                            break;
                        case 2:
                            r.prizeList && r.prizeList.length || (r.prizeList = []), r.prizeList.push(f.mttPro.MysteryPrizeTable.decode(e, e.uint32()));
                            break;
                        case 3:
                            r.totalBounty = e.double();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l.MttRoomStatusChangeMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomStatusChangeMsg", e.prototype.roomId = 0, e.prototype.roomStatus = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roomStatus && e.hasOwnProperty("roomStatus") && t.uint32(16).int32(e.roomStatus), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, r = new f.mttPro.MttRoomStatusChangeMsg; e.pos < n;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.roomStatus = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e
        }(), l), r.exports = f, o = e("default", r.exports)
    }), (() => ({
        "protobufjs/minimal.js": r
    })))
}
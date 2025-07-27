import * as n from "./cc.js";
import * as e from "./cc.js";
import * as a from "./StringTools.js";
import * as o from "./Tools.js";
import * as r from "./cv.js";
import * as i from "./GameListTuplePkw.js";
import * as l from "./ResourcesLoader.js";
import * as u from "./Translator.js";
import * as s from "./Pb.js";
import * as T from "./commonProto.mjs_cjs=&original=.js";
import * as g from "./FormatParser.js";
import * as S from "./FormatParser.js";
import * as m from "./FormatParser.js";
import * as c from "./FormatParser.js";
import * as M from "./MttGameItemColorIndentifier.js";
import * as d from "./SignUpBoxProperty.js";
import * as y from "./mttconfig.js";
import * as D from "./mttconfig.js";
import * as _ from "./Enum.js";
import * as P from "./LobbyFilterHelper.js";
import * as p from "./httpApiJoinedTournament.js";
import * as E from "./NodePage.js";
import * as R from "./CommonTools.js";
import * as I from "./LobbyTools.js";
import * as A from "./MttItemRenderHelper.js";
import * as v from "./MttLobbyListHelper.js";

function main() {
    var f;
    n._RF.push({}, "1fc8b8eHhBOz49BIzUW0oGA", "MttItemHelper", void 0);
    class N {
        static getColorIndentifier(t) {
            const e = Object.values(m).filter((t => !isNaN(Number(t)))).map((t => Number(t))).sort(((t, e) => t - e));
            let n = m.Other;
            for (let a of e) {
                const e = N.colorIndentifierRules.get(a);
                if (e && e(t)) {
                    n = a;
                    break
                }
            }
            return n
        }
        static isSeries(t) {
            return t.Detail.MultiFlightId > 0
        }
        static isLive(t) {
            return t.Detail.LiveTour
        }
        static isSatellite(t) {
            return t.Detail.IsSatelliteMode
        }
        static isSpecial(t) {
            return t.Detail.Special
        }
        static isShortDeck(t) {
            return t.Detail.MttMode == s.commonProto.MTT_GAME_MODE.SHORT_DECK
        }
        static isPKO(t) {
            return t.Detail.TournamentMode == s.commonProto.TOURNAMENT_MODE.SUPER_HUNTER
        }
        static isKO(t) {
            return t.Detail.TournamentMode == s.commonProto.TOURNAMENT_MODE.HUNTER
        }
        static isDetailShortDeck(t) {
            return t.GameMode == s.commonProto.MTT_GAME_MODE.SHORT_DECK
        }
        static isOverTenThousand(t) {
            return N.getGtd(t) > 1e4
        }
        static isOther(t) {
            return !0
        }
        static getIconTypeByText(t, e) {
            return e.forEach(((e, n) => {
                if (e.some((e => t.includes(e)))) return n
            })), -1
        }
        static getIndentifierIconType(t, e) {
            let n = 0;
            return null != e && null !== e.Detail && void 0 !== e.Detail && null !== e.Detail.Icons && void 0 !== e.Detail.Icons && e.Detail.Icons.length > 0 && (n = e.Detail.Icons[0]), n
        }
        static getBuyIn(t) {
            var e, n;
            return T.RoundToDecimal((null == (e = t.Detail) ? void 0 : e.RegFee) + (null == (n = t.Detail) ? void 0 : n.SrvFee), 2)
        }
        static getRegFee(t) {
            var e;
            return null == (e = t.Detail) ? void 0 : e.RegFee
        }
        static getSrvFee(t) {
            var e;
            return null == (e = t.Detail) ? void 0 : e.SrvFee
        }
        static getEntrantsCount(t) {
            return t.Detail.MultiFlightLevel > 0 ? t.RegisteredCount : t.JoinedCount
        }
        static getCurrentBlindLevel(t, e) {
            const {
                SmallBlind: n,
                BigBlind: a,
                Ante: o
            } = t;
            return e ? `${p.getCoinsLabelV2(o)}` : `${p.getCoinsLabelV2(n)} / ${p.getCoinsLabelV2(a)} (${p.getCoinsLabelV2(o)})`
        }
        static getNextBreakTime(t = -1) {
            if (t < 0) return "-";
            const {
                min: e,
                sec: n
            } = E.instance.splitSecond(t, {
                hasDay: !1,
                hasHour: !1
            }), [a, o] = T.addStartPadding([e, n], 2, "0");
            return `${a}:${o}`
        }
        static getEntrantsCountDetail(t, e) {
            return cc_mtt.vv.DataManager.getNow().getTime() < e.getTime() ? t.MultiFlightLevel > 0 ? t.PlayersCount : t.SignupCount : t.PlayingPlayersCount
        }
        static getStartingTime(t) {
            return N.getStartingTimeFromDetail(t.Detail)
        }
        static getStartingTimeFromDetail(t) {
            return (null == t ? void 0 : t.PlayOnJoint) > 0 && (null == t ? void 0 : t.Status) <= s.commonProto.MTT_GAME_STATUS.NOT_STARTED ? new Date(2100, 1, 1) : null == t ? void 0 : t.StartingTime
        }
        static getGameDuration(t) {
            return t.TotalPauseTime
        }
        static getLateRegLevelString(t) {
            return (null == t ? void 0 : t.LevelStopSignup) > 1 && (null == t ? void 0 : t.MultiFlightLevel) <= 0 ? e.formatStr(u("FORMAT.UNIT.LEVELS"), (null == t ? void 0 : t.LevelStopSignup) - 1) : "-"
        }
        static getCurBlind(t, e) {
            let n = e.CurrentLevel;
            if (t.length > 0 && n >= 1) {
                const e = t[n - 1];
                return a.ScientificNotationWithFormat(e.SmallBlind) + "/" + a.ScientificNotationWithFormat(e.BigBlind)
            }
            return "-/-"
        }
        static getCurBlindIndex(t) {
            const e = t.HoldemBlindsConfig[Math.min(t.CurrentLevel - 1, t.HoldemBlindsConfig.length - 1)];
            return this.isDetailShortDeck(t) ? (null == e ? void 0 : e.Ante) || 0 : (null == e ? void 0 : e.BigBlind) || 0
        }
        static getNextTimeLevelDetail(t, n, a) {
            let o = cc_mtt.vv.DataManager.getNow();
            if (t.RestDuration > 0 && t.CurrentLevel < a) {
                if (o.getTime() < n.getTime()) {
                    let n = u("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES");
                    if (t.RestDuration <= 1) {
                        let t = 0;
                        n = n.replace(/Mins/g, (e => 2 == ++t ? "Min" : e))
                    }
                    return n.indexOf("undefined") >= 0 && (n = u("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES")), e.formatStr(n, t.RestDuration)
                } {
                    let e = t.LeftEnterRestTime > 0 ? Math.floor(t.LeftEnterRestTime / 60) : 0;
                    return t.TimerStop ? "-" : e + u("TIME.MINUTE")
                }
            }
            return u("MTT_HALL.ABSTRACT.INTERMISSION_NONE")
        }
        static getBreakTimeInfo(t, n, a) {
            let o = cc_mtt.vv.DataManager.getNow();
            if (t.RestDuration > 0 && t.CurrentLevel < a) {
                if (o.getTime() < n.getTime()) {
                    let n = u("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES");
                    if (t.RestDuration <= 1) {
                        let t = 0;
                        n = n.replace(/Mins/g, (e => 2 == ++t ? "Min" : e))
                    }
                    return n.indexOf("undefined") >= 0 && (n = u("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES")), e.formatStr(n, t.RestDuration)
                } {
                    let e = t.LeftEnterRestTime > 0 ? Math.floor(t.LeftEnterRestTime / 60) : 0;
                    return t.TimerStop ? "-" : e + u("TIME.MINUTE")
                }
            }
            return u("MTT_HALL.ABSTRACT.INTERMISSION_NONE")
        }
        static getMaxPlayers(t) {
            return t.Detail.Seats
        }
        static getGameSpeed(t) {
            return t.Detail.MttMode
        }
        static getPlayOnJoinDetail(t, e) {
            return cc_mtt.vv.DataManager.getNow().getTime() < e.getTime() ? t.PlayOnJoint > 0 ? t.PlayOnJoint : t.SignupCount : t.JoinedCount
        }
        static getPayoutList(t) {
            return t.PrizeCircleInfo
        }
        static getUserTickets(t) {
            return cc_mtt.vv.DataManager.getSignUpToolsByRegFee(t).length
        }
        static getGameMode(t) {
            let e = null;
            switch (t.Detail.GameMode) {
                case s.commonProto.MTT_GAME_MODE.NLH:
                    e = u("MTT_GAME_MODE.NLH");
                    break;
                case s.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    e = u("MTT_GAME_MODE.SHORT_DECK");
                    break;
                case s.commonProto.MTT_GAME_MODE.OMAHA:
                    e = u("MTT_GAME_MODE.OMAHA")
            }
            return e
        }
        static getGameModeNumber(t) {
            return t.Detail.GameMode
        }
        static getTourName(t) {
            return [t.Detail.TournamentName, t.Detail.TournamentNameI18N]
        }
        static getTournamentLocalizeName(t) {
            var e, n;
            const a = null == t || null == (e = t.Detail) ? void 0 : e.TournamentName,
                o = null == t || null == (n = t.Detail) ? void 0 : n.TournamentNameI18N;
            return a && o ? cc_mtt.vv.DataManager.i18DataFromServer(a, o) : a
        }
        static hasTicket(t) {
            const e = N.getToolsByMtt("", t).tools;
            return null != e && e.length > 0
        }
        static getPrizePool(t) {
            return T.DisplayGold(t.GamePool)
        }
        static getGtd(t) {
            return t.GamePool
        }
        static isBounty(t) {
            const e = t.Detail.TournamentMode;
            return e == s.commonProto.TOURNAMENT_MODE.SUPER_HUNTER || e == s.commonProto.TOURNAMENT_MODE.HUNTER || e == s.commonProto.TOURNAMENT_MODE.Mystery
        }
        static getJoinedTournamentById(t) {
            return cc_mtt.vv.DataManager.JoinedTournaments.find((e => e.TournamentId == t))
        }
        static getMyTournamentStack(t) {
            var e;
            return (null == (e = N.getJoinedTournamentById(t)) ? void 0 : e.CoinLeft) || 0
        }
        static getMyJoinStatus(t) {
            let e = cc_mtt.vv.DataManager.JoinedTournaments,
                n = 0;
            t instanceof v.commonProto.MttTournamentDetail ? n = t.TournamentId : t instanceof v.commonProto.MttTournamentInfoDetail && (n = t.Id);
            let a = e.findIndex((t => (null == t ? void 0 : t.TournamentId) == n));
            return a >= 0 ? cc_mtt.vv.DataManager.JoinedTournaments[a].JoinStatus : 0
        }
        static showTicketStringOnBuyIn(t) {
            const e = N.getToolsByMtt("", t);
            return e && e.toolOption && !e.goldOption && e.tools.length < 1
        }
        static getToolsByMttDetail(t = "", e, n) {
            let a = e,
                [o, r, i] = M.getSignUpOptions(a.SignUpOptions);
            if (!r) return null;
            let l = new M(t, T.DisplayGold(a.RegFee + a.SrvFee), s.commonProto.GAME_CATEGORY.MTT, a.SignUpOptions, a.currency, a.GameInvitationCode, a.Tag, a.DisplayCurrency, n.CurrencyRate, 0, 0, 0, a.StartingTime, a.TournamentName, N.getMyJoinStatus(e), a.PlayOnJoint);
            return l.tools.length > 0 ? l.tools : null
        }
        static isRegistered(t) {
            let e, n;
            t instanceof v.commonProto.MttTournamentDetail ? (e = t.Status, n = t.TournamentId) : (e = t.Detail.Status, n = t.Detail.Id);
            let a = e == s.commonProto.MTT_GAME_STATUS.ENDED,
                o = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId === n && !a));
            return o >= 0 && 0 != cc_mtt.vv.DataManager.JoinedTournaments[o].JoinStatus
        }
        static getToolsByMtt(t, e) {
            if (e) {
                const n = e.Detail;
                let a = n.RegFee + n.SrvFee,
                    o = n.SignUpOptions,
                    r = n.Tag;
                return new M(t, T.DisplayGold(a), s.commonProto.GAME_CATEGORY.MTT, o, e.currency, n.GameInvitationCode, r, n.DisplayCurrency, e.CurrencyRate)
            }
            return null
        }
        static getSignUpPropertyByDetail(t, e, n = !1, a = null) {
            if (!e) return null;
            let o = e.RegFee + e.SrvFee,
                r = e.SignUpOptions,
                i = e.Tag;
            if (n && a) {
                var l, u, m, c;
                if (r = "", a.rebuyParam) o = (null == (m = a.rebuyParam) ? void 0 : m.regFee) + (null == (c = a.rebuyParam) ? void 0 : c.srvFee);
                if (null != (l = a.rebuyParam) && l.AllowGold && (r += "gold"), null != (u = a.rebuyParam) && u.AllowTool) {
                    var S, g, d;
                    if (null != (S = a.rebuyParam) && S.AllowGold ? r += ",tool" : r += "tool", null != (g = a.rebuyParam) && g.signupToolParamList) {
                        var y;
                        let t = null == (y = a.rebuyParam) ? void 0 : y.signupToolParamList.length;
                        if (t > 0) {
                            r += ",specific:mtt:";
                            for (let e = 0; e < t; e++) {
                                var D, _;
                                let n = null == (D = a.rebuyParam) ? void 0 : D.signupToolParamList[e].toolId.toString();
                                e !== t - 1 && (n += ","), r += (3 == (null == (_ = a.rebuyParam) ? void 0 : _.signupToolParamList[e].platform) ? "a93:" : "a92:") + n
                            }
                        }
                    }
                    null != (d = a.rebuyParam) && d.Tag && (i = a.rebuyParam.Tag)
                }
            }
            return new M(t, T.DisplayGold(o), s.commonProto.GAME_CATEGORY.MTT, r, e.currency, e.GameInvitationCode, i, e.DisplayCurrency, e.Rate)
        }
        static getIsBounty(t) {
            return t == s.commonProto.TOURNAMENT_MODE.HUNTER || t == s.commonProto.TOURNAMENT_MODE.SUPER_HUNTER || t == s.commonProto.TOURNAMENT_MODE.Mystery
        }
        static getFullDescriptionMttDetail(t, e) {
            let n = cc_mtt.vv.DataManager.i18DataFromServer(t, e),
                a = o.detectURLs(n);
            return a && a.length > 0 && a.forEach((t => {
                let e = '<color=#2B63F3><u><on click="openURL" param="' + t + '">' + t + "</on></u></color>";
                n = n.replace(t, e)
            })), n
        }
        static getMttRoomStatus(t, e = !1) {
            let n = "",
                [a, o, r] = N.getMttRoomStatusI18n(t, e);
            return a && (n = u(a)), [n, o, r]
        }
        static getMttRoomStatusI18n(t, e = !1) {
            let n, a = i.DATE,
                o = null;
            if (!t) return [o, n, a];
            let r = t instanceof v.commonProto.MttTournamentDetail ? t : t.Detail,
                l = r.StartingTime,
                u = r.Status;
            t.WillPlayStartTime && t.WillPlayStartTime > 0 && u < 100 && (u += 100);
            let T = (v.commonProto.MttTournamentDetail, t.RebuyStatus);
            if (T > 0) switch (T) {
                case s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Rebuy:
                    a = i.LATE, o = "GAME_LIST.TOURNAMENT_STATUS_REBUY", n = !0;
                    break;
                case s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Add_ons:
                    a = i.END, o = "PKWMTT.GAMELIST.WATCH", n = !1
            } else switch (u) {
                case s.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    if (r.PlayOnJoint > 0) a = i.DATE, o = "PKWMTT.GAMELIST.SIGNING_UP_INTEGRATE", n = !1;
                    else {
                        let t = cc_mtt.vv.DataManager.getNow(),
                            e = new Date(t);
                        e.setDate(t.getDate() + 1);
                        let u = new Date(l),
                            s = t.getFullYear() === u.getFullYear() && t.getMonth() === u.getMonth() && t.getDate() === u.getDate(),
                            T = (e.getFullYear() === u.getFullYear() && e.getMonth() === u.getMonth() && (e.getDate(), u.getDate()), N.checkCanReg(r));
                        a = s ? i.TIME : i.DATE, o = T ? "PKWMTT.GAMELIST.SIGNING_UP_INTEGRATE" : "PKWMTT.GAMELIST.ANNOUNCED", n = !1
                    }
                    break;
                case s.commonProto.MTT_GAME_STATUS.STARTED:
                case s.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    a = i.LATE, o = u == s.commonProto.MTT_GAME_STATUS.STARTED + 100 ? "GAME_LIST.TOURNAMENT_STATUS_PAUSE_INTEGRATE" : "GAME_LIST.TOURNAMENT_STATUS_DELAY", n = !0;
                    break;
                case s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    a = i.END, o = u == s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100 ? "GAME_LIST.TOURNAMENT_STATUS_PAUSE_INTEGRATE" : "PKWMTT.GAMELIST.WATCH", n = !1;
                    break;
                case s.commonProto.MTT_GAME_STATUS.ENDED:
                    a = i.END, o = "PKWMTT.GAMELIST.GAME_ENDED", n = !1
            }
            return [o, n, a]
        }
        static checkCanReg(t) {
            let e = cc_mtt.vv.DataManager.getNow(),
                n = t.StartingTime,
                a = new Date(n),
                o = new Date(a).setMinutes(a.getMinutes() - t.AllowSignupHours);
            return t.MultiFlightLevel <= 0 && (t.AllowSignupHours <= 0 || e.getTime() >= o)
        }
        static getAllowSignupDate(t) {
            if (0 == t.Detail.PlayOnJoint && t.Detail.AllowSignupHours > 0) {
                let e = new Date(t.Detail.StartingTime),
                    n = new Date(e).setMinutes(e.getMinutes() - t.Detail.AllowSignupHours);
                return new Date(n)
            }
            return null
        }
        static getAllowSignupDateFromTournamentDetail(t) {
            if (0 == t.PlayOnJoint && t.AllowSignupHours > 0) {
                let e = new Date(t.StartingTime),
                    n = new Date(e).setMinutes(e.getMinutes() - t.AllowSignupHours);
                return new Date(n)
            }
            return null
        }
        static getSignUpBoxPath() {
            return r.appConfig.isLandscapeLayout ? l.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX_LANDSCAPE : l.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX
        }
        static getIsAutoFeed(t) {
            let e = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == t.TournamentId));
            return e >= 0 && cc_mtt.vv.DataManager.JoinedTournaments[e].AutoFeed
        }
        static checkIsSignUpNotStart(t, e) {
            return t && e.Status == s.commonProto.MTT_GAME_STATUS.NOT_STARTED && 0 == e.PlayOnJoint && e.AllowSignupHours > 0 && cc_mtt.vv.DataManager.getNow().getTime() < t.getTime() - 60 * e.AllowSignupHours * 1e3
        }
        static splitSecond(t) {
            return t < 0 && (t = 0), {
                hr: Math.floor(t / 3600),
                min: Math.floor(t % 3600 / 60),
                sec: Math.floor(t % 3600 % 60)
            }
        }
        static handleTimeLabel(t, e = !0) {
            t < 0 && (t = 0);
            let n = "",
                a = "",
                o = "",
                r = Math.floor(t / 3600),
                i = Math.floor(t % 3600 / 60),
                l = Math.floor(t % 3600 % 60);
            return n = r < 10 && e ? "0" + r : r.toString(), a = i < 10 && e ? "0" + i : i.toString(), o = l < 10 && e ? "0" + l : l.toString(), 0 == r ? [a, o] : [n, a, o]
        }
        static removeJoinedTournaments(t) {
            let e = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == t));
            cc_mtt.vv.DataManager.JoinedTournaments.splice(e, 1), cc_mtt.vv.DataManager.updateStoredJoinedTournaments(), N.needReloadAutoJoinTours = !0
        }
        static addJoinedTournaments(t, {
            joinStatus: e = 1,
            autoFeed: n = !1,
            rebuyFlag: a = 0
        }) {
            cc_mtt.vv.ConsoleLog.log("addJoinedTournaments", t);
            let o = new s.commonProto.User_Mtt_Join_Info;
            o.TournamentId = t, o.JoinStatus = e, o.AutoFeed = n, o.UserRebuyFlag = a, cc_mtt.vv.DataManager.JoinedTournaments.unshift(o), cc_mtt.vv.DataManager.updateStoredJoinedTournaments(), N.needReloadAutoJoinTours = !0
        }
        static checkIsEnd(t) {
            return t.Status == s.commonProto.MTT_GAME_STATUS.ENDED
        }
        static checkForSignUpStop(t) {
            return t.Status == s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || t.Status == s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100 || t.RebuyStatus > 0
        }
        static checkForSignUpStopMtt(t) {
            const e = t.Detail;
            return e.Status == s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || e.Status == s.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100 || t.RebuyStatus > 0
        }
        static isMttRebuyState(t) {
            return t.RebuyStatus == s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Rebuy
        }
        static isMttMoreBuyState(t) {
            return t.RebuyStatus == s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Add_ons
        }
        static isDetailRebuyState(t) {
            return t.RebuyStatus == s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Rebuy
        }
        static isDetailMoreBuyState(t) {
            return t.RebuyStatus == s.commonProto.Rebuy_Status_STATE.Rebuy_Status_Add_ons
        }
        static checkForOverOutLimit(t, e) {
            return Math.abs(t) > e.ReentryLimit || e.JoinedCount >= e.SignupLimit
        }
        static checkStartGameRequirementIsOk(t) {
            return null != t && N.isStartGameRequirementIsOk(t.SignupCount, t.LowerLimitPlayers, t.MultiFlightLevel)
        }
        static isStartGameRequirementIsOk(t, e, n) {
            return t >= e || n > 0
        }
        static getTools(t, e) {
            if (t && t.length > 0) {
                let n = [];
                for (const e of t) n.push(e.ToolId);
                let a = {
                    ToolIds: n
                };
                cc_mtt.vv.DataManager.worldNetwork.getToolsInfo(a, (n => {
                    let a = [];
                    for (const e of t) {
                        let t = n.ToolInfos.find((t => t.Id === e.ToolId));
                        if (t) {
                            let n = e;
                            n.Currency = t.Currency, n.Value = t.Value, n.Name = cc_mtt.vv.DataManager.i18DataFromServer(t.Name, t.NameI18N), a.push(n)
                        }
                    }
                    e && e(a)
                }))
            } else e && e([])
        }
        static tidyUpTableList(t, e, n) {
            let a, o = [];
            return e.forEach((e => {
                var i, l, u, s, m;
                const c = {
                        rank: e.Rank,
                        money: e.Money,
                        proportion: e.Proportion
                    },
                    S = n.find((t => t.Rank == e.Rank));
                if (S) {
                    let n = S.Value;
                    if (S.Currency != t.DisplayCurrency) {
                        var g;
                        let e = (null == (g = t.Rate.find((e => "GOLD" == S.Currency ? e.Currency == t.DisplayCurrency : e.Currency == S.Currency))) ? void 0 : g.ExchangeRate) || 1;
                        n = T.ExchangeCurrency(n, e, r.appConfig.getWalletConfig().convertStringToCurrencyType(t.DisplayCurrency))
                    }
                    switch (t.PrizeMode) {
                        case d.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_FIX:
                            c.tool = S;
                            break;
                        case d.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_TOOL:
                            c.money = 0, c.tool = S;
                            break;
                        default:
                            n > e.Money ? (t.BaseToolPrize || t.TicketBase && n - e.Money < t.RegFee) && (c.money = 0, c.tool = S) : (c.tool = S, c.money = e.Money - n)
                    }
                }
                let M = c.money == (null == (i = a) ? void 0 : i.money),
                    y = !c.tool && !(null != (l = a) && l.tool) || (null == (u = c.tool) ? void 0 : u.ToolId) == (null == (s = a) || null == (s = s.tool) ? void 0 : s.ToolId),
                    D = c.proportion == (null == (m = a) ? void 0 : m.proportion);
                M && y && D ? a.rankTail = e.Rank : (o.push(c), a = c)
            })), o
        }
        static isGamePlaying(t) {
            return t !== s.commonProto.MTT_GAME_STATUS.NOT_STARTED && t !== s.commonProto.MTT_GAME_STATUS.ENDED
        }
        static getRemainTimeString(t, e, n, a) {
            return N.showRemainTime(n, t, a)
        }
        static getRemainTimeInHoursString(t) {
            let e = Math.floor(t / 3600);
            return e >= 1 ? `${e} ${u("PKWMTT.GAMELIST.HOURS")}` : N.showRemainTime(!0, t, !0)
        }
        static getRemainTimeInHoursStringLandscape(t) {
            return N.showRemainTime(!0, t, !0)
        }
        static timeStampToTimeLeftSec(t) {
            return Math.floor((t - N.getServerNow().getTime()) / 1e3)
        }
        static timeLeftSecToTimeStamp(t) {
            return N.getServerNow().getTime() + 1e3 * t
        }
        static getStopSignUpTimestampFromDetail(t) {
            var e;
            return (null == (e = t.StopSignupTime) ? void 0 : e.getTime()) || N.timeLeftSecToTimeStamp(t.TimeLeftSec)
        }
        static getStopSignUpTimestampFromMtt(t) {
            return t.LateRegTime ? 1e3 * t.LateRegTime : t.timeStampLateReg ? t.timeStampLateReg : 0
        }
        static getEstimatedDuration(t) {
            let e = "";
            if (t > 0) {
                const {
                    hour: n,
                    min: a
                } = E.instance.splitSecond(t, {
                    hasDay: !1,
                    hasHour: !0
                });
                n > 0 && (e += n + u("TIME.HOURS")), e += a + u("TIME.MINUTES")
            } else e += "-";
            return e
        }
        static showDateOrTime(t, e, n = !0) {
            const a = `${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`,
                o = (t.getMonth() + 1).toString(),
                i = t.getDate().toString().padStart(2, "0");
            let l = "";
            return n && (l += `${r.config.getStringData("MonthAbbrev"+o)} ${i}`), n && e && (l += ", "), e && (l += a), l
        }
        static showRemainTime(t, e, n) {
            t && (e *= 1e3);
            let a = 6e4,
                o = 60 * a,
                r = Math.floor(e / o),
                i = Math.floor(e % o / a),
                l = Math.floor(e % o % a / 1e3);
            return this.formatTime(n, r, t, i, l)
        }
        static formatTime(t, e, n, a, o) {
            const r = e.toString().padStart(2, "0"),
                i = o.toString().padStart(2, "0");
            let l;
            return t && e > 0 && (a += 60 * e), l = a.toString().padStart(2, "0"), t ? n ? `${l}:${i}` : `${l}` : `${r}:${l}:${i}`
        }
        static checkHasTournamentStartTime(t) {
            const e = t.StartingTime;
            return N.checkStartingTime(e)
        }
        static checkStartingTime(t) {
            return t && t.getTime() > new Date(2e3, 2).getTime()
        }
        static checkTableToUpdateJoinStatus(t = null, e = 0) {
            const n = Date.now();
            e > 0 && n - N.lastJoinedTournamentRequestTime < e ? t && t() : (N.lastJoinedTournamentRequestTime = n, P.requestPlayerJoinedTournaments((t => {
                if (!1 === Boolean(t.ErrorCode)) {
                    const e = cc_mtt.vv.DataManager.JoinedTournaments;
                    cc_mtt.vv.DataManager.JoinedTournaments = t.MttList, N.hasChanged(e, cc_mtt.vv.DataManager.JoinedTournaments) && r.MessageCenter.send(r.Enum.MessageCenterAction.RefreshLobbyMyMtts)
                }
            }), t, null))
        }
        static hasChanged(t, e) {
            if (t.length !== e.length) return !0;
            let n = !1;
            return t.forEach((t => {
                e.findIndex((e => e.TournamentId === t.TournamentId && e.JoinStatus === t.JoinStatus)) < 0 && (n = !0)
            })), n
        }
        static getTournamentType(t) {
            return t.PlayOnJoint > 0 ? "SNG" : t.IsAiptMode ? "SAT" : t.MultiFlightId ? r.config.getStringData("Multi_Day_Hall_Details") + ", MTT" : "MTT"
        }
        static getGameType(t) {
            switch (t.GameMode) {
                case s.commonProto.MTT_GAME_MODE.NLH:
                    return "NLH";
                case s.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    return "ShortDeck";
                case s.commonProto.MTT_GAME_MODE.OMAHA:
                    return "Omaha";
                default:
                    return ""
            }
        }
        static getRebuyFlag(t) {
            const e = cc_mtt.vv.DataManager.JoinedTournaments.find((e => e.TournamentId == t.TournamentId));
            return e ? e.UserRebuyFlag : s.commonProto.RebuyFlag.NULL
        }
        static getCurrencySymbol(t) {
            return t && y[t] ? y[t].symbol : ""
        }
        static applyCurrencyToMttItem(t) {
            let e = 0,
                n = t.length;
            for (; e < n; e++) {
                const n = t[e];
                null != n && (r.appConfig.getWalletConfig().checkAndSetGameTableCurrency(n.Detail), A.getInstance().updateTournament(n))
            }
        }
        static updateTimeLeftSec(t, e = 1) {
            t instanceof v.commonProto.MttTournamentDetail ? t.TimeLeftSec = N.timeStampToTimeLeftSec(N.getStopSignUpTimestampFromDetail(t)) : t instanceof v.commonProto.MttTournamentInfo && (t.TimeLeftSec = N.timeStampToTimeLeftSec(N.getStopSignUpTimestampFromMtt(t)))
        }
        static isTournamentStarted(t) {
            return t instanceof s.commonProto.Broadcast_Message_Out_Game && t.JoinedStatus > 0
        }
        static getMttTournamentDetailGameDuration(t) {
            return null == t ? void 0 : t.TotalPauseTime
        }
        static getServerNow() {
            return cc_mtt.vv.DataManager.getNow()
        }
        static handleColorStatusMttDetail(t, e, n) {
            let a = t;
            if (t == s.commonProto.MTT_GAME_STATUS.NOT_STARTED) {
                let t = e;
                const n = Math.floor(N.timeStampToTimeLeftSec(t.getTime()));
                Math.floor(n / 3600) > 0 && (a = I.NotStartedAndOver1Hour)
            }
            return a
        }
        static convertMttTournamentInfoToMttLobbyItem(t) {
            if (!t) return null;
            let e = t;
            return e.canUseMyTicket = N.hasTicket(t), e.isMyMTT = _.isMyMTT(e), e
        }
        static getMTTDetailInfoData(t, n) {
            var a;
            let o = {
                mttId: 0,
                pageType: 0,
                roomStatus: "",
                currency: "",
                name: "",
                gameType: 0,
                tournamentMode: 0,
                status: 0,
                statusStr: "",
                regStatus: 0,
                startingTime: new Date,
                regFee: 0,
                srvFee: 0,
                rebuyCount: 0,
                prizePool: 0,
                prizeCircle: 0,
                bounty: "",
                guarantee: 0,
                overlay: 0,
                startingChip: 0,
                stopSignUpLevel: 0,
                currentLevel: 0,
                lateRegEndTimestamp: 0,
                gameDuration: 0,
                estimatedDuration: 0,
                blindInterval: 0,
                blindHand: 0,
                seats: 0,
                minPlayers: 0,
                maxPlayers: 0,
                breakDuration: 0,
                smallestStack: 0,
                avgStack: 0,
                largestStack: 0,
                myRank: 0,
                description: "",
                currentBlindConfig: null,
                nextBlindConfig: null,
                playingPlayers: 0,
                registeredPlayers: 0,
                entries: 0,
                firstPlacePrize: 0,
                nextPlacePrize: 0,
                rebuyParam: null,
                moreBuyParam: null,
                targetId: 0,
                targetEventName: "",
                targetEvents: [],
                additionalPrizePool: 0,
                timerStop: !1,
                buyIn: 0,
                curBlind: "",
                nextBreakTime: "",
                displayCurrency: "",
                currencyRate: {},
                convertCurrency: !0,
                myChips: 0,
                isStarted: !1,
                myJoinStatus: 0,
                isAutoFeed: !1,
                rebuyFlag: 0,
                colorIndentifierSubType: 0,
                colorIndentifier: 0,
                willPlayStartTime: -1,
                iconType: 0,
                bannerType: 0,
                isShow: !0
            };
            if (null == n || null == t) return o;
            const r = cc_mtt.vv.DataManager.getNow();
            let i = n.Status != s.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            switch (o.willPlayStartTime = t.WillPlayStartTime ? 1e3 * t.WillPlayStartTime : -1, o.mttId = n.TournamentId, o.currency = t.Detail.currency, o.currencySign = o.currency == y[D.USD].code ? y[D.USD].symbol : o.currency == y[D.CNY].code ? y[D.CNY].shortSymbol : "", o.name = cc_mtt.vv.DataManager.i18DataFromServer(n.TournamentName, n.TournamentNameI18N), o.gameType = n.GameMode, o.tournamentMode = n.TournamentMode, o.tournamentMode) {
                case s.commonProto.TOURNAMENT_MODE.HUNTER:
                    o.bounty = e.formatStr(u("PKWMTT.OVERVIEW.FIXED_BOUNTY"), o.currencySign + T.DisplayGold(n.RegFee * n.HunterModeBountyProportion));
                    break;
                case s.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    o.bounty = e.formatStr(u("PKWMTT.OVERVIEW.PROGRESSIVE_BOUNTY"), `${o.currencySign+T.DisplayGold(n.RegFee*n.HunterModeBountyProportion*(1-n.HunterModeBountyIncreasingRate))}`);
                    break;
                case s.commonProto.TOURNAMENT_MODE.Mystery:
                    o.bounty = n.MysteryType == s.commonProto.Mystery_Type.MysteryBlindLevel ? e.formatStr(u("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_BLIND_LEVEL"), n.MysteryBlindLevel) : n.MysteryType == s.commonProto.Mystery_Type.MysteryPrizeCirlce ? u("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_ITM") : n.MysteryType == s.commonProto.Mystery_Type.MysteryDay2 ? u("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_DAY2") : n.MysteryType == s.commonProto.Mystery_Type.MysteryLeftPercent ? e.formatStr(u("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_PLAYER_REMAIN"), T.RoundToDecimal(n.MysteryLeftPercent, 2)) : ""
            }
            o.startingTime = N.getStartingTimeFromDetail(n), o.status = n.Status;
            const [l, m, c] = N.getMttRoomStatus(n), [S, g, M] = N.getMttRoomStatusI18n(n);
            o.roomStatusNumber = n.Status, o.roomStatusI18nKey = S, o.statusStr = l, o.regStatus = c, o.description = N.getFullDescriptionMttDetail(n.Desc, n.DescI18N), o.lateRegEndTimestamp = (null == (a = n.StopSignupTime) ? void 0 : a.getTime()) || N.timeLeftSecToTimeStamp(n.TimeLeftSec), o.stopSignUpLevel = n.LevelStopSignup, o.blindConfig = n.HoldemBlindsConfig, i ? (o.currentLevel = n.CurrentLevel, o.currentBlindConfig = n.HoldemBlindsConfig[o.currentLevel - 1], o.nextBlindConfig = n.HoldemBlindsConfig[o.currentLevel], o.smallestStack = n.MinCoins, o.avgStack = n.AvgCoins, o.largestStack = n.MaxCoins) : (o.currentLevel = 0, o.currentBlindConfig = null, o.nextBlindConfig = null, o.smallestStack = 0, o.avgStack = 0, o.largestStack = 0), o.pageType = N.getPageType(n), o.multiFlightLevel = n.MultiFlightLevel, o.startingChip = n.StartingCoins, o.blindInterval = n.LevelTime, o.blindHand = n.BlindHands, o.breakDuration = n.RestDuration, o.gameDuration = N.getGameDuration(n), o.estimatedDuration = n.EstimatedDuration, o.regFee = N.getRegFee(t), o.bountyFee = n.BountyFee, o.srvFee = N.getSrvFee(t), o.rebuyCount = n.ReentryLimit, o.iconType = N.getMttIconType(t.Detail), o.bannerType = N.getMttBannerType(t.Detail), n.RebuyParam && (o.rebuyParam = JSON.parse(n.RebuyParam)), n.MorebuyParam && (o.moreBuyParam = JSON.parse(n.MorebuyParam)), o.seats = n.Seats, o.playingPlayers = n.PlayingPlayersCount, o.registeredPlayers = n.PlayersCount, o.entries = n.MultiFlightLevel > 0 ? n.MFJoinedCount : N.getPlayOnJoinDetail(n, N.getStartingTimeFromDetail(n)), o.prizeCircle = Math.min(n.InTheMoney, o.entries), o.minPlayers = n.PlayOnJoint > 0 ? n.PlayOnJoint : n.LowerLimitPlayers, o.maxPlayers = n.PlayOnJoint > 0 ? n.PlayOnJoint : n.SignupLimit, o.prizePool = T.DisplayGold(n.AllGamePot + n.BountyPot), o.firstPlacePrize = n.FirstPrize, o.nextPlacePrize = n.NextPrize, o.inTheMoney = n.InTheMoney, o.myRank = N.getMyRank(n.TournamentId), o.guarantee = n.Guaranteed, o.overlay = n.Overlay, o.targetId = n.TargetID, o.targetEventName = cc_mtt.vv.DataManager.i18DataFromServer(n.Day2TournamentName, n.Day2TournamentNameI18N), o.additionalPrizePool = n.AdditionalPrizePool;
            let d = N.getAllowSignupDateFromTournamentDetail(n);
            return o.allowSignupDate = r.getTime() < (null == d ? void 0 : d.getTime()) ? d : null, o.timerStop = n.TimerStop, 0 == o.entries ? o.payoutDistribution = 100 : o.payoutDistribution = T.RoundToDecimal(o.prizeCircle / o.entries * 100, 2), o.buyIn = N.getBuyIn(t), null != o.currentBlindConfig ? o.curBlind = N.getCurrentBlindLevel(o.currentBlindConfig, N.isDetailShortDeck(n)) : o.curBlind = "-/-/-", o.timeStampNextBreak = N.timeLeftSecToTimeStamp(n.LeftEnterRestTime), o.nextBreakTime = N.getNextBreakTime(o.status < 100 ? o.timeStampNextBreak : -1), o.currencyRate = t.CurrencyRate, o.displayCurrency = n.DisplayCurrency, o.currency = t.Detail.currency, o.myChips = N.getMyTournamentStack(t.Detail.Id), o.isStarted = i, o.myJoinStatus = N.getMyJoinStatus(n), o.isAutoFeed = N.getIsAutoFeed(n), o.rebuyFlag = N.getRebuyFlag(n), o.colorIndentifier = N.getColorIndentifier(t), o.colorIndentifierSubType = N.getIndentifierIconType(o.colorIndentifier, t), o.isRegistered = N.isRegistered(n), o.isPaused = N.isPaused(n), o.isTimerStop = n.TimerStop, o.isTimerStopFirstTime = !0, o.isShow = !0, o.timeStampLateReg = N.getStopSignUpTimestampFromDetail(n), o.convertCurrency = R.isMTTJPcurrencySwitcherOn, o.inMiddlePause = !N.isPaused(n) && n.PauseStatus, o.isShortDeck = N.isDetailShortDeck(n), o
        }
        static getMttBannerType(t) {
            return t.Banners && t.Banners.length > 0 ? t.Banners[0] : v.commonProto.MttBanner.Banner_None
        }
        static getMttIconType(t) {
            return t.Icons && t.Icons.length > 0 ? t.Icons[0] : v.commonProto.MttIcon.Icon_None
        }
        static getMyRank(t) {
            let e = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => (null == e ? void 0 : e.TournamentId) == t));
            return e >= 0 ? cc_mtt.vv.DataManager.JoinedTournaments[e].MyRank : 0
        }
        static isPaused(t) {
            return t.Status > 100 || t.WillPlayStartTime && t.WillPlayStartTime > 0
        }
        static isLate(t) {
            return t == s.commonProto.MTT_GAME_STATUS.STARTED || t == s.commonProto.MTT_GAME_STATUS.STARTED + 100
        }
        static getOverriddenI18nStatusKey(t, e, n) {
            let a = t;
            return e ? a = "GAME_LIST.TOURNAMENT_STATUS_PAUSE" : n && (a = "PKWMTT.GAMELIST.SIGNED_UP"), a
        }
        static getPageType(t) {
            return t.BannerIconOffDisplay ? c.None : t.WPTDailyAsia ? c.WPTDailyAsia : t.DailyPrime ? c.DailyPrime : t.BountyRumble ? c.BountyRumble : t.OneShot ? c.OneShot : t.HyperDash ? c.HyperDash : t.WeeklyGoldenBounty ? c.WeeklyGoldenBounty : t.WPTMysteryMillion ? c.WPTMysteryMillion : t.CrazyFreeroll ? c.CrazyFreeroll : c.None
        }
        static getStartingCoinsMultiday(t, e) {
            return 0 == t ? e : 0
        }
        static filterEventsByStartingTime(t) {
            return t.sort(((t, e) => {
                var n, a, o, r;
                return (null != (n = t.Detail) && n.StartingTime ? (null == (a = t.Detail) ? void 0 : a.StartingTime).getTime() : 1 / 0) - (null != (o = e.Detail) && o.StartingTime ? (null == (r = e.Detail) ? void 0 : r.StartingTime).getTime() : 1 / 0)
            }))
        }
        static isMultiFlightDay1(t) {
            return t.MultiFlightId && 0 == t.MultiFlightLevel
        }
        static isShowPrizePoolTabMttDetail(t) {
            return !t.MultiFlightId || t.MultiFlightLevel > 0
        }
    }
    t("default", N), f = N, N.needReloadAutoJoinTours = !0, N.colorIndentifierRules = new Map([
        [m.Series, f.isSeries],
        [m.Live, f.isLive],
        [m.Satellite, f.isSatellite],
        [m.Special, f.isSpecial],
        [m.ShortDeck, f.isShortDeck],
        [m.PKO, f.isPKO],
        [m.Bounty, f.isKO],
        [m.OverTenThousand, f.isOverTenThousand],
        [m.Other, f.isOther]
    ]), N.liveTextIconMap = new Map([
        [S.Korea, []],
        [S.Passport, []],
        [S.Prime, []]
    ]), N.specialTextIconMap = new Map([
        [g.KingOfCash, []],
        [g.RakeBack, []],
        [g.BumpUp, []]
    ]), N.lastJoinedTournamentRequestTime = 0, n._RF.pop()
}
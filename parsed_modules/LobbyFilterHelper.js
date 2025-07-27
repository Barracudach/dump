import * as t from "./cc.js";
import * as o from "./Pb.js";
import * as r from "./cv.js";
import * as i from "./LobbyTools.js";
import * as a from "./mttController.js";
import * as l from "./LobbyHelper.js";
import * as n from "./LobbyTypes.js";
import * as s from "./Enum.js";

function main() {
    t._RF.push({}, "f130dmScJ9K5p/v2R/Tc9u9", "LobbyFilterHelper", void 0);
    const c = e("CashGameSizeType", ["Low", "Mid", "High"]);
    class m {
        static removeObjectsWithUnused(e) {
            return null !== e && "object" == typeof e && Object.keys(e).forEach((t => {
                null !== e[t] && "object" == typeof e[t] && (!0 === e[t].unused ? delete e[t] : this.removeObjectsWithUnused(e[t]))
            })), e
        }
        static parseConfigFilter(e) {
            let t = [];
            for (let o in e) {
                let r = e[o];
                null != r.index && (r = 0 == r.provider ? m.parseMttFilter(r) : m.parseCashFilter(r), t.push(r))
            }
            return t
        }
        static parseCashFilter(e) {
            let t = {
                    name: e.name,
                    provider: e.provider,
                    groups: e.groups,
                    showMyGameFilter: e.showMyGameFilter,
                    showStakeFilter: e.showStakeFilter
                },
                o = e.filter ? Object.values(e.filter).map((e => ({
                    game_mode: e.gameMode,
                    game_id: e.gameId
                }))) : [],
                r = e.subfilter ? Object.values(e.subfilter).filter((e => e.filter && Object.keys(e.filter).length > 0)).map((e => {
                    let t = Object.values(e.filter).map((e => ({
                        game_mode: e.gameMode,
                        game_id: e.gameId
                    })));
                    return {
                        name: e.name,
                        filter: t,
                        showAmount: e.showAmount,
                        isLeft: e.isLeft,
                        siblingIndex: e.siblingIndex
                    }
                })) : [];
            return t.filter = o ?? [], t.subfilters = r ?? [], t.isDisableGroup = e.isDisableGroup, t
        }
        static parseMttFilter(e) {
            let t = {
                    name: e.name,
                    provider: e.provider
                },
                o = e.filter ? Object.values(e.filter).map((e => ({
                    gameListId: e.gameListId,
                    platform: e.platform
                }))) : [],
                r = e.subfilter ? Object.values(e.subfilter).filter((e => e.filter && Object.keys(e.filter).length > 0)).map((e => {
                    let t = Object.values(e.filter).map((e => ({
                        field: e.field,
                        value: e.value,
                        condition: e.condition,
                        filter: e.filter,
                        icon: e.icon
                    })));
                    return {
                        name: e.name,
                        filter: t,
                        showAmount: e.showAmount,
                        isLeft: e.isLeft,
                        siblingIndex: e.siblingIndex,
                        hasIcon: e.hasIcon,
                        icon: e.icon
                    }
                })) : [];
            return t.filter = o ?? [], t.subfilters = r ?? [], t
        }
        static filterCashGameList(e, t) {
            if (!t || 0 == t.length) return e = e.filter((e => !this.hideRoomForProPlayer(e)));
            let o = [];
            for (let r of e)
                if (!this.hideRoomForProPlayer(r))
                    for (let e of t)
                        if (!(-1 != e.game_mode && r.game_mode != e.game_mode || -1 != e.game_id && r.game_id != e.game_id)) {
                            o.push(r);
                            break
                        } return o
        }
        static hideRoomForProPlayer(e) {
            if (e && r.appConfig.getLobbyConfig().hideLowTablesForPro) {
                var t;
                let o = null == (t = e.proDatas) ? void 0 : t[e.proLevel - 1];
                const r = e.player_count >= e.player_count_max;
                if ((null == o ? void 0 : o.levelLimit) >= 0 && (0 == (null == o ? void 0 : o.levelLimit) || (null == o ? void 0 : o.levelLimit) <= (null == o ? void 0 : o.nowNum) && !r)) return !0
            }
            return !1
        }
        static filterMttGameList(e, t) {
            if (console.log("filterMttGameList:" + JSON.stringify(t)), !t || 0 == t.length) return e;

            function o(e, t) {
                return "boolean" == typeof e || "boolean" == typeof t || void 0 === e || void 0 === t ? Boolean(e) === Boolean(t) : e === t
            }
            let r = [];
            for (let i of e) {
                let e = !1;
                for (const r of t) {
                    if (void 0 !== r.filter) {
                        const t = r,
                            a = t.condition && "and" === t.condition.toLowerCase(),
                            l = Object.values(t.filter);
                        let n = !1;
                        for (const e of l)
                            if (!0 === Boolean(Object.prototype.hasOwnProperty.call(e, "condition")) && !0 === Boolean(Object.prototype.hasOwnProperty.call(e, "field")) && !0 === Boolean(Object.prototype.hasOwnProperty.call(e, "value"))) {
                                const t = Boolean(e.condition) && "and" === e.condition.toLowerCase();
                                if (o(i[e.field], e.value) || Boolean(i.Detail) && o(i.Detail[e.field], e.value)) n = !0;
                                else if (t) {
                                    n = !1;
                                    break
                                }
                            } if (!n && a) {
                            e = !1;
                            break
                        }
                        e = !0
                    } else {
                        const t = r,
                            a = t.condition && "and" === t.condition.toLowerCase();
                        if (!1 === Boolean(t.value) && o(i[t.field], t.value) && (!1 === Boolean(i.Detail) || o(i.Detail[t.field], t.value)) || !1 !== Boolean(t.value) && (o(i[t.field], t.value) || Boolean(i.Detail) && o(i.Detail[t.field], t.value))) e = !0;
                        else if (a) {
                            e = !1;
                            break
                        }
                    }
                }
                e && r.push(i)
            }
            return r
        }
        static filterCashGroupList(e, t) {
            if (!t || 0 == t.length) return e;
            let o = [];
            for (let r of e)
                if (r.gameIds && r.gameIds.length) {
                    for (let e of t)
                        if (!e.game_id || -1 == e.game_id || r.gameIds.includes(e.game_id)) {
                            o.push(r);
                            break
                        }
                } else o.push(r);
            return o
        }
        static checkVisibleTabConfig(e) {
            return r.config.HAVE_MTT && r.appConfig.getLobbyConfig().mtt.showLobbyTab || (e = r.tools.removeItemsFromArray(e, ["mtt"])), r.appConfig.getLobbyConfig().showPlo || (e = r.tools.removeItemsFromArray(e, ["plo"])), r.appConfig.getLobbyConfig().showGlobalSpin || (e = r.tools.removeItemsFromArray(e, ["sng"])), r.appConfig.getLobbyConfig().showShortDeckLobby || (e = r.tools.removeItemsFromArray(e, ["short_deck"])), r.appConfig.getLobbyConfig().showFlashLobby || (e = r.tools.removeItemsFromArray(e, ["flash"])), r.appConfig.getLobbyConfig().showNLHELobby || (e = r.tools.removeItemsFromArray(e, ["nlhe"])), e
        }
        static filterMttGameListExtra(e, t, i, a) {
            cc_mtt.vv.ConsoleLog.log("filterMttGameListExtra: ", e, t, i), i && (e = this.filterMttGameList(e, i), a && a(e));
            let l = [],
                n = r.appConfig.getFilterDelemeterConfig();
            for (let i of e) {
                i.Detail.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(i.Detail.TournamentName, i.Detail.TournamentNameI18N), i.Detail.Desc = cc_mtt.vv.DataManager.i18DataFromServer(i.Detail.Desc, i.Detail.DescI18N), r.appConfig.getWalletConfig().checkAndSetGameTableCurrency(i.Detail);
                let e = !1;
                if (Array.isArray(t.buyin)) {
                    let o = i.Detail.RegFee + i.Detail.SrvFee;
                    r.appConfig.getWalletConfig().convertStringToCurrencyType(i.Detail.currency) === s.CNY && (o /= this.filterCurrencyRateCNY);
                    for (const r of t.buyin) {
                        switch (r) {
                            case 0:
                                e = !0;
                                break;
                            case 1:
                                e = 0 === o;
                                break;
                            case 2:
                                e = 0 < o && o <= n.val.microUpper;
                                break;
                            case 3:
                                e = n.val.microUpper < o && o <= n.val.lowUpper;
                                break;
                            case 4:
                                e = n.val.lowUpper < o && o <= n.val.midUpper;
                                break;
                            case 5:
                                e = n.val.midUpper < o;
                                break;
                            case 6:
                                let r = t.buyinFrom ?? 0,
                                    i = t.buyinTo ?? Number.MAX_VALUE;
                                cc_mtt.vv.ConsoleLog.log("fee min max", o, r, i), e = r <= o && o <= i
                        }
                        if (e) break
                    }
                }
                let a = !1;
                if (Array.isArray(t.gameType))
                    if (t.gameType.includes(0)) a = !0;
                    else
                        for (const e of t.gameType) switch (e) {
                            case 1:
                                i.Detail.GameMode == o.commonProto.MTT_GAME_MODE.NLH && (a = !0);
                                break;
                            case 2:
                                i.Detail.GameMode == o.commonProto.MTT_GAME_MODE.OMAHA && (a = !0);
                                break;
                            case 3:
                                i.Detail.GameMode == o.commonProto.MTT_GAME_MODE.SHORT_DECK && (a = !0)
                        }
                let c = !0;
                if (!i.isMyMTT) {
                    let e = !1;
                    switch (i.Detail.Status) {
                        case o.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                        case o.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                            e = !0
                    }
                    c = !!Boolean(t.showRunning) || !e
                }
                let m = !1;
                m = !t.hideSatellites || !i.Detail.IsSatelliteMode;
                let f = !1,
                    u = "";
                if (Array.isArray(t.searchName) ? u = (t.searchName[0] || "").trim().toLowerCase() : "string" == typeof t.searchName && (u = t.searchName.trim().toLowerCase()), "" !== u) {
                    f = i.Detail.TournamentName.toLowerCase().includes(u)
                } else f = !0;
                c && m && e && a && f && l.push(i)
            }
            return cc_mtt.vv.ConsoleLog.log("lobbyfilterhelper filteredList result: ", l), l
        }
        static isMyMTT(e) {
            var t;
            const o = a.selfTours.getTournamentById(null == (t = e.Detail) ? void 0 : t.Id),
                r = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => {
                    var o;
                    return t.TournamentId === (null == (o = e.Detail) ? void 0 : o.Id)
                }));
            return null != o || r >= 0
        }
        static isMyCashGame(e) {
            return r.roomManager.getMyRoomIdsByGame(e.game_id).includes(e.room_id)
        }
        static getMyMttCount() {
            var e;
            return (null == (e = a.selfTours.getAllRegisteredMttTournaments()) ? void 0 : e.length) || 0
        }
        static isCashGameSizeFilter(e) {
            return !!e && -1 != c.findIndex((t => t.toLowerCase() === e.toLowerCase()))
        }
        static filterFlashGameBySize(e, t) {
            if (!t || !this.isCashGameSizeFilter(t)) return e;
            const o = [];
            for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r],
                    s = i.clientCurrencyFromServerCurrency(a.currencyType),
                    c = i.clientGoldByServer(a.buyin_min),
                    m = l.getBuyInLevel(c, s);
                switch (t) {
                    case "Low":
                        m == n.small && o.push(a);
                        break;
                    case "Mid":
                        m == n.medium && o.push(a);
                        break;
                    case "High":
                        m == n.big && o.push(a)
                }
            }
            return o
        }
        static filterMyTicketItems(e) {
            return e.filter((e => e.canUseMyTicket))
        }
    }
    e("LobbyFilterHelper", m), m.filterCurrencyRateCNY = 7, t._RF.pop()
}
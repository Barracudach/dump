import * as t from "./cc.js";
import * as r from "./cc.js";
import * as a from "./Pb.js";

function main() {
    t._RF.push({}, "c0254Efci1JJbX7qTUzADn+", "LobbyOrderHelper", void 0);
    e("OrderGameType", function(e) {
        return e[e.CASH = 0] = "CASH", e[e.MTT = 1] = "MTT", e
    }({}));
    let o = e("OrderSortType", function(e) {
        return e[e.ASC = 0] = "ASC", e[e.DECS = 1] = "DECS", e
    }({}));
    window.global_functions = {}, String.prototype.parseFunction = function() {
        var e = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gim.exec(this.replace(/\n/g, " ").replace(/\r/g, " "));
        if (e) try {
            return new Function(...e[1].split(","), e[2])
        } catch (e) {
            r(`parseFunction: ${this} - `, e)
        }
        return null
    };
    class n {
        constructor(e = null) {
            this.type = void 0, this.propertyName = void 0, this.sortType = void 0, this.valueMapping = null, this.valueCalculator = null, this.enable = void 0, this.type = null == e ? void 0 : e.type, this.propertyName = null == e ? void 0 : e.propertyName, this.sortType = null == e ? void 0 : e.sortType, this.valueMapping = null == e ? void 0 : e.valueMapping, this.enable = null == e ? void 0 : e.enable, null != e && e.valueCalculator && ("string" == typeof e.valueCalculator ? this.valueCalculator = e.valueCalculator.parseFunction() : e.valueCalculator instanceof Function && (this.valueCalculator = null == e ? void 0 : e.valueCalculator))
        }
    }
    e("OrderCondition", n);
    class l {
        static sortListItems(e, t) {
            const r = l.parseConditionsFromString(t);
            return l.sortByConditions(e, r)
        }
        static compare(e, t, r = null) {
            for (let a of r) {
                let r = 0;
                if (r = a instanceof Function ? a(e, t) : l.compareProperty(e, t, a), 0 != r) return r
            }
            return 0
        }
        static compareProperty(e, t, r) {
            let a = e[r.propertyName],
                n = t[r.propertyName];
            const l = r.sortType;
            return r.valueMapping && r.valueMapping.has(a) && (a = r.valueMapping.get(a)), r.valueMapping && r.valueMapping.has(n) && (n = r.valueMapping.get(n)), r.valueCalculator && (a = r.valueCalculator(e), n = r.valueCalculator(t)), a > n ? l == o.ASC ? 1 : -1 : a < n ? l == o.ASC ? -1 : 1 : 0
        }
        static parseConditionsFromString(e) {
            let t = [];
            try {
                let r = JSON.parse(e);
                for (let e of r) switch (e.conditionType) {
                    case 0: {
                        let r = new n(e.data);
                        t.push(r)
                    }
                    break;
                    case 1: {
                        let r = e.data.parseFunction();
                        t.push(r)
                    }
                    break;
                    case 2: {
                        let r = e.data.name,
                            a = window.global_functions[r];
                        a || (a = new n(e.data.content), window.global_functions[r] = a), t.push(a)
                    }
                }
            } catch (t) {
                t(`paseConditionsFromString: ${e} -- `, t)
            }
            return t
        }
        static sortByConditions(e, t) {
            return e.sort(((e, r) => i.compare(e, r, t))), e
        }
        static generateJSONstringFromOrderConditions(e) {
            let t = [];
            for (let r of e)
                if (r instanceof Function) {
                    let e = r.toString().replace(/\n/g, " ").replace(/\r/g, " ").replace(/\s\s+/g, " ").replace(/[\""]/g, '\\"');
                    t.push({
                        conditionType: 1,
                        data: e
                    })
                } else if (2 == r.type) {
                let e = r.func.toString().replace(/\n/g, " ").replace(/\r/g, " ").replace(/\s\s+/g, " ").replace(/[\""]/g, '\\"');
                t.push({
                    conditionType: 2,
                    data: {
                        name: r.name,
                        content: e
                    }
                })
            } else {
                if (r.valueCalculator) {
                    let e = r.valueCalculator.toString().replace(/\n/g, " ").replace(/\r/g, " ").replace(/\s\s+/g, " ").replace(/[\""]/g, '\\"');
                    r.valueCalculator = e
                }
                t.push({
                    conditionType: 0,
                    data: r
                })
            }
            return JSON.stringify(t)
        }
    }
    e("LobbyOrderHelper", l);
    class i extends l {
        static defaultConditionsForSortByLevel() {
            let e = [];
            return e.push({
                type: 0,
                propertyName: "game_id",
                sortType: o.DECS
            }), e.push({
                type: 0,
                propertyName: "game_mode",
                sortType: o.DECS
            }), e.push({
                type: 0,
                propertyName: "player_count",
                sortType: o.DECS,
                valueCalculator: e => e.hasEndTime ? e.player_count == e.player_count_max ? 0 : 0 == e.player_count ? 2 : 1 : e.player_count == e.player_count_max ? 0 : 0 == e.player_count ? 1 : 2
            }), e.push({
                type: 2,
                name: "playerCountAndProComperator",
                func: i.playerCountAndProComperator
            }), e.push({
                type: 0,
                propertyName: "isCriticismField",
                sortType: o.DECS
            }), e.push({
                type: 2,
                name: "roomNameComperator",
                func: i.roomNameComperator
            }), e
        }
        static defaultConditionsForSortByCreateTime() {
            let e = [];
            e.push({
                type: 0,
                propertyName: "game_id",
                sortType: o.DECS
            }), e.push({
                type: 0,
                propertyName: "has_buyin",
                sortType: o.ASC,
                valueCalculator: e => 0 == e.has_buyin ? 1e3 : e.has_buyin
            });
            return e.push({
                type: 2,
                name: "timeComperator",
                func: (e, t) => (0 != e.has_buyin || 0 != e.start_time || t.start_time, e.create_time > t.create_time ? -1 : 1)
            }), e
        }
        static sortCashGameList(e) {
            let t = (new Date).getHours();
            return t >= 3 && t < 7 ? i.sortByCreatime(e) : i.sortByLevel(e)
        }
        static sortByLevel(e, t = null) {
            return t || (t = '[{"conditionType":0,"data":{"type":0,"propertyName":"game_id","sortType":1}},{"conditionType":0,"data":{"type":0,"propertyName":"game_mode","sortType":1}},{"conditionType":0,"data":{"type":0,"propertyName":"player_count","sortType":1,"valueCalculator":"function (data) { if (!data.hasEndTime) { if (data.player_count == data.player_count_max) { return 0; } else if (data.player_count == 0) { return 1; } else { return 2; } } else { if (data.player_count == data.player_count_max) { return 0; } else if (data.player_count == 0) { return 2; } else { return 1; } } }"}},{"conditionType":2,"data":{"name":"playerCountAndProComperator","content":"function (a, b) { var getSortLevelByPro = function (data) { if (data.forProPlayer) { return 1; } else { if (data.proPlayerNum > 0) { return 0; } else { return 2; } } }; var sortLevelByProA = getSortLevelByPro(a); var sortLevelByProB = getSortLevelByPro(b); if (a.player_count == 0) { if (a.player_count_max == b.player_count_max) { if (sortLevelByProA == sortLevelByProB) return 0; return sortLevelByProA > sortLevelByProB ? -1 : 1; } else { return a.player_count_max < b.player_count_max ? -1 : 1; } } if (a.player_count > b.player_count) { return -1; } else if (a.player_count < b.player_count) { return 1; } else { if (a.player_count_max == b.player_count_max) { if (sortLevelByProA == sortLevelByProB) return 0; return sortLevelByProB > sortLevelByProB ? -1 : 1; } else { return a.player_count_max > b.player_count_max ? -1 : 1; } } }"}},{"conditionType":0,"data":{"type":0,"propertyName":"isCriticismField","sortType":1}},{"conditionType":2,"data":{"name":"roomNameComperator","content":"function (a, b, prefix) { if (prefix === void 0) { prefix = \\"LSHL\\"; } if (a.room_name.startsWith(prefix) && !b.room_name.startsWith(prefix)) { if (a.player_count == 0 && b.player_count > 0) return 1; return -1; } else if (!a.room_name.startsWith(prefix) && b.room_name.startsWith(prefix)) { if (a.player_count > 0 && b.player_count == 0) return -1; return 1; } return 0; }"}}]'), i.sortListItems(e, t), e
        }
        static sortByCreatime(e, t = null) {
            return t || (t = '[{"conditionType":0,"data":{"type":0,"propertyName":"game_id","sortType":1}},{"conditionType":0,"data":{"type":0,"propertyName":"has_buyin","sortType":0,"valueCalculator":"function (data) { if (data.has_buyin == 0) return 1000; return data.has_buyin; }"}},{"conditionType":2,"data":{"name":"timeComperator","content":"function (a, b) { if (a.has_buyin != 0) { return (a.create_time > b.create_time) ? -1 : 1; } else if (a.start_time != 0 || b.start_time != 0) { return (a.create_time > b.create_time) ? -1 : 1; } else { return (a.create_time > b.create_time) ? -1 : 1; } }"}}]'), i.sortListItems(e, t), e
        }
        static roomNameComperator(e, t, r = "LSHL") {
            return e.room_name.startsWith(r) && !t.room_name.startsWith(r) ? 0 == e.player_count && t.player_count > 0 ? 1 : -1 : !e.room_name.startsWith(r) && t.room_name.startsWith(r) ? e.player_count > 0 && 0 == t.player_count ? -1 : 1 : 0
        }
        static playerCountAndProComperator(e, t) {
            const r = e => e.forProPlayer ? 1 : e.proPlayerNum > 0 ? 0 : 2,
                a = r(e),
                o = r(t);
            return 0 == e.player_count ? e.player_count_max == t.player_count_max ? a == o ? 0 : a > o ? -1 : 1 : e.player_count_max < t.player_count_max ? -1 : 1 : e.player_count > t.player_count ? -1 : e.player_count < t.player_count ? 1 : e.player_count_max == t.player_count_max ? a == o ? 0 : o > o ? -1 : 1 : e.player_count_max > t.player_count_max ? -1 : 1
        }
        static sortCashGameGroupList(e) {
            e.sort(((e, t) => {
                var r, a;
                let o = (null == (r = e.items) ? void 0 : r.reduce(((e, t) => e + t.player_count), 0)) ?? 0;
                return ((null == (a = t.items) ? void 0 : a.reduce(((e, t) => e + t.player_count), 0)) ?? 0) - o
            }));
            let {
                nonZeroPlayerCount: t,
                zeroPlayerCount: r
            } = e.reduce(((e, t) => {
                var r;
                return ((null == (r = t.items) ? void 0 : r.reduce(((e, t) => e + t.player_count), 0)) ?? 0) > 0 ? e.nonZeroPlayerCount.push(t) : e.zeroPlayerCount.push(t), e
            }), {
                nonZeroPlayerCount: [],
                zeroPlayerCount: []
            });
            const a = (e, t) => {
                let r = e.usdStake.stake,
                    a = t.usdStake.stake;
                for (let e = 0; e < Math.min(r.length, a.length); e++) {
                    let t = r[e] - a[e];
                    if (0 !== t) return t
                }
                return r.length - a.length
            };
            return t.sort(a), r.sort(a), e = t.concat(r)
        }
    }
    e("CashLobbyOrderHelper", i);
    e("MttLobbyOrderHelper", class extends l {
        static sortList(e) {
            let [t, r, o] = [
                [],
                [],
                []
            ], n = e.filter((e => e.Detail.ShowingPosition > 0)), l = e.filter((e => e.Detail.ShowingPosition <= 0));
            return n.sort(((e, t) => e.Detail.ShowingPosition - t.Detail.ShowingPosition)), l.forEach((e => {
                e.Detail.PlayOnJoint > 0 ? e.Detail.Status <= a.commonProto.MTT_GAME_STATUS.NOT_STARTED ? t.push(e) : o.push(e) : r.push(e)
            })), r.sort(((e, t) => e.Detail.StartingTime.getTime() - t.Detail.StartingTime.getTime())), t.sort(((e, t) => e.Detail.Id - t.Detail.Id)), o.sort(((e, t) => e.Detail.Id - t.Detail.Id)), n.concat(t).concat(r).concat(o)
        }
        static isTournamentRunning(e) {
            var t;
            const r = null == e || null == (t = e.Detail) ? void 0 : t.Status;
            return r === a.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || r === a.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100
        }
    }), t._RF.pop()
}
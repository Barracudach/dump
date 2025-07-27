import * as t from "./cc.js";
import * as i from "./cv.js";

function main() {
    t._RF.push({}, "a50c5+Nc/5LGY0HMpjaWCv/", "FiltersDataModel", void 0);
    let a = e("HandFilterType", function(e) {
        return e[e.Toggle = 0] = "Toggle", e[e.SliderDouble = 1] = "SliderDouble", e[e.TimeInterval = 2] = "TimeInterval", e
    }({}));
    class l {
        static getInstance() {
            return l.g_instance || (l.g_instance = new l), l.g_instance
        }
        getInitalFilterViewData() {
            let e = {
                titleName: "Game Types",
                filterList: []
            };
            for (let t in i.Enum.FilterGameType) 0 == i.appConfig.getLobbyConfig().casino.showPrimary && [i.Enum.FilterGameType.Cowboy, i.Enum.FilterGameType.Humanboy, i.Enum.FilterGameType.Pokermaster, i.Enum.FilterGameType.Videoboy].includes(i.Enum.FilterGameType[t]) || e.filterList.push({
                filterName: i.config.getStringData("Name_" + i.Enum.FilterGameType[t], !1, t),
                filterType: a.Toggle,
                isSelected: !1,
                hasSubFilters: !1,
                value: t,
                schemaKey: "filter.game_type"
            });
            let t = {
                titleName: "All Actions",
                filterList: []
            };
            for (let e in i.Enum.ActionType) {
                let i = Number(e);
                if (!isNaN(i) && i >= 1 && i <= 5) {
                    let i = this.getActionTypeName(e);
                    t.filterList.push({
                        filterName: i,
                        filterType: a.Toggle,
                        isSelected: !1,
                        hasSubFilters: !1,
                        value: this.getActionTypeValue(e),
                        schemaKey: "filter.player_action"
                    })
                }
            }
            let l = i.config.getTimeWithTimeZone(),
                n = l.getTime() - l.setMonth(l.getMonth() - 6),
                r = Math.round(n / 1e3 / 60 / 60 / 24) - 1;
            return {
                version: 5,
                titleName: "Filters",
                filterList: [{
                    filterName: "Game Types",
                    filterType: a.Toggle,
                    isSelected: !1,
                    hasSubFilters: !0,
                    subfilter: e
                }, {
                    filterName: "All Actions",
                    filterType: a.Toggle,
                    isSelected: !1,
                    hasSubFilters: !0,
                    subfilter: t
                }, {
                    filterName: "Time Interval",
                    filterType: a.TimeInterval,
                    valueMinBase: 0,
                    valueMin: 0,
                    schemaKeyValueMin: "filter.started_at.to.seconds",
                    valueMaxBase: r,
                    valueMax: 6,
                    schemaKeyValueMax: "filter.started_at.from.seconds",
                    decimals: 0,
                    isCurrency: !1
                }, {
                    filterName: "Pot Size",
                    filterType: a.SliderDouble,
                    valueMinBase: 0,
                    valueMin: 0,
                    schemaKeyValueMin: "filter.pot_size.min",
                    valueMaxBase: 100,
                    valueMax: 100,
                    schemaKeyValueMax: "filter.pot_size.max",
                    decimals: 0,
                    isCurrency: !0
                }, {
                    filterName: "Limit Size",
                    filterType: a.SliderDouble,
                    valueMinBase: 0,
                    valueMin: 0,
                    schemaKeyValueMin: "filter.limit_size.min",
                    valueMaxBase: 200,
                    valueMax: 200,
                    schemaKeyValueMax: "filter.limit_size.max",
                    decimals: 0,
                    isCurrency: !0
                }, {
                    filterName: "Big Blind Size",
                    filterType: a.SliderDouble,
                    valueMinBase: 0,
                    valueMin: 0,
                    schemaKeyValueMin: "filter.big_blind_size.min",
                    valueMaxBase: 500,
                    valueMax: 500,
                    schemaKeyValueMax: "filter.big_blind_size.max",
                    decimals: 0,
                    isCurrency: !0
                }]
            }
        }
        getFilterListData(e) {
            let t = l.getInstance().getInitalFilterViewData(),
                i = localStorage.getItem(e);
            if (i) {
                let e = JSON.parse(i);
                if (e.version && e.version == t.version) return e
            }
            return localStorage.setItem(e, JSON.stringify(t)), t
        }
        updateFilterViewData(e, t) {
            localStorage.setItem(e, JSON.stringify(t))
        }
        getActionTypeName(e) {
            return e == i.Enum.ActionType.Enum_Action_Null ? i.config.getStringData("Null") : i.config.getStringData(i.Enum.ActionType[e])
        }
        getActionTypeValue(e) {
            return e == i.Enum.ActionType.Enum_Action_Check ? "CHECK" : e == i.Enum.ActionType.Enum_Action_Fold ? "FOLD" : e == i.Enum.ActionType.Enum_Action_Call ? "CALL" : e == i.Enum.ActionType.Enum_Action_Bet ? "BET" : e == i.Enum.ActionType.Enum_Action_Raise ? "RAISE" : "NULL"
        }
        getQueryString(e) {
            if (e.filterType == a.SliderDouble) {
                let t = "";
                return e.valueMin != e.valueMinBase && (t += "&" + e.schemaKeyValueMin + "=", t += e.valueMin.toString()), e.valueMax != e.valueMaxBase && (t += "&" + e.schemaKeyValueMax + "=", t += e.valueMax.toString()), t
            }
            if (e.filterType == a.Toggle) {
                if (e.hasSubFilters) {
                    let t = "";
                    for (let i = 0, a = e.subfilter.filterList.length; i < a; i++) t += this.getQueryString(e.subfilter.filterList[i]);
                    return t
                }
                if (e.isSelected) return "&" + e.schemaKey + "=" + e.value
            } else if (e.filterType == a.TimeInterval) {
                let t = "&" + e.schemaKeyValueMax + "=",
                    a = i.config.getTimeWithTimeZone();
                if (a = i.config.getUTCWithTimeZone(a.setHours(0, 0, 0, 0)), t += (a.setDate(a.getDate() - e.valueMax) / 1e3).toString(), e.valueMin != e.valueMinBase) {
                    t += "&" + e.schemaKeyValueMin + "=";
                    let a = i.config.getTimeWithTimeZone();
                    a = i.config.getUTCWithTimeZone(a.setHours(0, 0, 0, 0)), t += (a.setDate(a.getDate() - e.valueMin + 1) / 1e3).toString()
                }
                return t
            }
            return ""
        }
        getLast30DaysValue() {
            let e = i.config.getTimeWithTimeZone();
            return e.setDate(e.getDate() - 29), e.setHours(0, 0, 0, 0), Math.round(e.getTime() / 1e3)
        }
    }
    e("FiltersDataModel", l), l.g_instance = void 0, t._RF.pop()
}
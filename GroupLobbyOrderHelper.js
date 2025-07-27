import * as t from "./cc.js";
import * as r from "./LobbyOrderHelper.js";
import * as a from "./LobbyOrderHelper.js";

function main() {
    t._RF.push({}, "1add1VOlpdAtYzHIspbitpa", "GroupLobbyOrderHelper", void 0);
    class o extends r {
        static sortListItems(e, t, a = null) {
            const n = r.parseConditionsFromString(t);
            return o.sortByConditions(e, n, a)
        }
        static sortByConditions(e, t, r = null) {
            return e.sort(((e, a) => o.compare(e, a, t, r))), e
        }
        static compare(e, t, r = null, a = null) {
            for (let n of r) {
                if (0 === n.enable) continue;
                let r = 0;
                if (r = n instanceof Function ? n(e, t) : o.compareProperty(e, t, n, a), 0 != r) return r
            }
            return 0
        }
        static compareProperty(e, t, o, n = null) {
            if ("buyinMin" === o.propertyName) {
                const r = n,
                    u = o.sortType;
                if (o.valueCalculator) {
                    let n = o.valueCalculator(e, r),
                        s = o.valueCalculator(t, r);
                    if (n > s) return u == a.ASC ? 1 : -1;
                    if (n < s) return u == a.ASC ? -1 : 1
                }
                return 0
            }
            return r.compareProperty(e, t, o)
        }
    }
    e("GroupLobbyOrderHelper", o);
    class n extends o {
        static defaultConditionsForSortGroup() {
            let e = [];
            return e.push({
                type: 0,
                propertyName: "buyinMin",
                sortType: a.DECS,
                enable: 1,
                valueCalculator: (e, t) => e.usdStake.minBuyIn <= t ? 1 : -1
            }), e.push({
                type: 0,
                propertyName: "stake",
                sortType: a.ASC,
                enable: 1,
                valueCalculator: e => e.usdStake.stake.length ? e.usdStake.stake[e.usdStake.stake.length - 1] : 0
            }), e
        }
        static sortNlheGroup(e, t, r = null) {
            return r || (r = '[{"conditionType":0,"data":{"type":0,"propertyName":"buyinMin","sortType":1,"enable":1,"valueCalculator":"function (data, threshold) { return data.usdStake.minBuyIn <= threshold ? 1 : -1; }"}},{"conditionType":0,"data":{"type":0,"propertyName":"stake","sortType":0,"enable":1,"valueCalculator":"function (data) { return data.usdStake.stake[data.usdStake.stake.length - 1]; }"}}]'), n.sortListItems(e, r, t), e
        }
    }
    e("CashGroupLobbyOrderHelper", n), t._RF.pop()
}
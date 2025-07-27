import * as t from "./cc.js";

function main() {
    let e, s, m;
    t._RF.push({}, "17355MxPFBPPok0ANybWeDu", "ResponsibleGamingData", void 0);
    let n = i("LimitType", function(i) {
        return i.GameTime = "GameTime", i.Deposit = "Deposit", i.Wager = "Wager", i.Loss = "Loss", i
    }({}));
    i("LimitFieldKey", function(i) {
        return i.GameTime = "maxSessionDurationMinutes", i.DayLimit = "dayLimit", i.WeekLimit = "weekLimit", i.MonthLimit = "monthLimit", i
    }({}));
    class o {
        constructor(i) {
            this.type = n.Deposit, this.dayLimit = 0, this.weekLimit = 0, this.monthLimit = 0, this.type = i
        }
        get limitsSetCount() {
            let i = 0;
            return this.dayLimit > 0 && i++, this.weekLimit > 0 && i++, this.monthLimit > 0 && i++, i
        }
        updateLimits(i) {
            this.dayLimit = i.dayLimit, this.weekLimit = i.weekLimit, this.monthLimit = i.monthLimit
        }
    }
    i("ResponsibleGamingPeriodLimit", o), e = n.Deposit, s = n.Wager, m = n.Loss;
    class a {
        constructor() {
            this[e] = void 0, this[s] = void 0, this[m] = void 0, this.Deposit = new o(n.Deposit), this.Wager = new o(n.Wager), this.Loss = new o(n.Loss)
        }
        get limitsSetCount() {
            return this.Deposit.limitsSetCount + this.Wager.limitsSetCount + this.Loss.limitsSetCount
        }
    }
    i("ResponsibleGamingLimits", a);
    i("parseRGL", (function(i) {
        let t = new a;
        for (let e in n) n[e] != n.GameTime && i[n[e]] && t[n[e]].updateLimits(i[n[e]]);
        return t
    }));
    t._RF.pop()
}
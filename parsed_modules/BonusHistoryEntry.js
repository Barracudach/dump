import * as e from "./cc.js";

function main() {
    e._RF.push({}, "6fe77YuFHBNyaNQpJnQ7frO", "BonusHistoryEntry", void 0);
    let n = t("StatusType", function(t) {
        return t.None = "-", t.Active = "Active", t.Expired = "Expired", t.ActiveKey = "BonusStatusActive", t.ExpiredKey = "BonusStatusExpired", t.Pending = "Pending", t.PendingKey = "BonusStatusPending", t.Completed = "Completed", t.CompletedKey = "BonusStatusCompleted", t
    }({}));
    t("BonusHistoryEntry", class {
        constructor(t) {
            this.bonusHistoryData = void 0;
            let e = this.getStatusType(t.status);
            this.bonusHistoryData = {
                bonusName: t.bonusName,
                bonusDescription: t.description,
                bonusPtsType: t.bonusPtsType,
                bonusPtsVal: t.bonusPtsVal,
                bonusPtsCoin: t.bonusPtsCoin,
                bonusInstantCoin: t.bonusInstantCoin,
                startDate: t.startDate,
                expDate: t.expDate,
                maxBonusCoin: t.maxBonusCoin,
                releasedBonusCoin: t.releasedBonusCoin,
                bonusPoints: t.bonusPoints,
                currency: t.currency,
                bonusCode: t.bonusCode,
                status: e[0],
                statusKey: e[1].toString()
            }
        }
        getStatusType(t) {
            return "Complete" == t ? [n.Completed, n.CompletedKey] : "Active" == t ? [n.Active, n.ActiveKey] : "Pending" == t ? [n.Pending, n.PendingKey] : "Expired" == t ? [n.Expired, n.ExpiredKey] : [n.None, n.None]
        }
        get bhData() {
            return this.bonusHistoryData
        }
    }), e._RF.pop()
}
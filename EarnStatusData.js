import * as t from "./cc.js";

function main() {
    t._RF.push({}, "04379IIw89Ozow/T72Po7ym", "EarnStatusData", void 0);
    e("TransactionReturnStatus", function(e) {
        return e.Success = "Success", e.Pending = "Pending", e.Failure = "Failure", e.Back = "Back", e
    }({})), e("TransactionErrorCode", function(e) {
        return e.MinMax = "10000018", e.Other = "10000042", e.RGLimits = "10000043", e.WithdrawLimits = "10000045", e.Other2 = "10000047", e
    }({})), e("CashierFailErrorCode", function(e) {
        return e.AccountNotVerified = "10000041", e.Stage2NotComplete = "10000096", e.GeoComplyTokenMissing = "10000097", e.GeoComplyTokenNotFound = "10000098", e.PaymentKYCCheckRequired = "10000100", e.PaymentKYCCheckInProgress = "10000101", e.DepositLockedByAdmin = "10000102", e.DepositLockedByUser = "10000103", e.DepositLimitExceeded = "10000104", e.WithdrawalLockedByAdmin = "10000105", e
    }({}));
    t._RF.pop()
}
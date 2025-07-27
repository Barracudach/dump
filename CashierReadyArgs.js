import * as s from "./cc.js";
import * as t from "./Helpers2.js";
import * as r from "./Helpers2.js";
import * as a from "./UpdateUserInfo.js";

function main() {
    s._RF.push({}, "2b11aWktilNEIbermVWlmca", "CashierReadyArgs", void 0);
    e("CashierReadyArgs", class extends a {
        constructor(e) {
            super(r.Cashier, t.cashierReady, e)
        }
    }), s._RF.pop()
}
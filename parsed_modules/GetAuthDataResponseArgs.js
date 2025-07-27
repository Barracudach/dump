import * as s from "./cc.js";
import * as t from "./Helpers2.js";
import * as n from "./BasePokerArgs.js";

function main() {
    s._RF.push({}, "20ea0FEIYFKYLXYJQ6pVN+M", "GetAuthDataResponseArgs", void 0);
    e("GetAuthDataResponseArgs", class extends n {
        constructor(e) {
            super(t.GetAuthDataResponse), this.userData = null, Object.assign(this, {
                userData: e
            })
        }
    }), s._RF.pop()
}
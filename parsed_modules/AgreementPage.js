import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as r from "./Login_ts.js";

function main() {
    var s;
    t._RF.push({}, "90630ZWpD9GBIZ17E5vney6", "AgreementPage", void 0);
    const {
        ccclass: g,
        property: i
    } = o;
    e("AgreementPage", g(s = class extends n {
        onBackClicked() {
            c.getScene().getComponentInChildren("Login_ts").moveFromCenter(r.AGREEMENT, r.PHONE)
        }
    }) || s);
    t._RF.pop()
}
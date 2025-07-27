import * as o from "./cc.js";
import * as s from "./cc.js";
import * as e from "./TooltipsManager.js";
import * as r from "./cv.js";
import * as n from "./ForgotPasswordQuestionField.js";
import * as a from "./ForgotPasswordVerifyForm.js";

function main() {
    var i;
    o._RF.push({}, "57060orz7FKFJyAtzJtWJbA", "ForgotPasswordVerifyFormLandscape", void 0);
    const {
        ccclass: c,
        property: u
    } = s;
    t("default", c(i = class extends a {
        init(t) {
            super.init(t)
        }
        showMsg(t, o) {
            null != o ? o instanceof n && e.showToolTipsForFieldValidator(o, r.config.getStringData("Attention"), t.txt) : super.showMsg(t, o)
        }
    }) || i);
    o._RF.pop()
}
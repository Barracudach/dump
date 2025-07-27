import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var a;
    e._RF.push({}, "ed9e7jHpaJNVZYXZHcLNeN8", "EventCustom", void 0);
    const {
        ccclass: u,
        property: c
    } = r;
    t("EventCustom", u("EventCustom")(a = class extends s {
        constructor(t, e, s) {
            super(t, e), this.userData = null, this.userData = s
        }
        setUserData(t) {
            this.userData = t
        }
        getUserData() {
            return this.userData
        }
    }) || a);
    e._RF.pop()
}
import * as e from "./cc.js";
import * as t from "./Helpers2.js";
import * as r from "./BasePokerArgs.js";

function main() {
    e._RF.push({}, "02bcceTyMFPMYhPIcH8nF3K", "UserLogoutArgs", void 0);
    s("UserLogoutArgs", class extends r {
        constructor(s) {
            super(t.UserLogout), this.payload = void 0, Object.assign(this, s)
        }
    }), e._RF.pop()
}
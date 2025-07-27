import * as e from "./cc.js";
import * as t from "./holdemRoom.js";

function main() {
    e._RF.push({}, "2f4c6NsaJZLDJVpimIqdKI4", "holdemRoomStoreLandscape", void 0);
    o("holdemRoomStoreLandscape", class extends t {
        constructor(...o) {
            super(...o), this.moneyList = void 0
        }
        setMoneyList(o) {
            this.moneyList = o
        }
    }), e._RF.pop()
}
import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./RecordData.js";
import * as s from "./cv.js";

function main() {
    var r;
    t._RF.push({}, "2293eQvONZHw4tBeNNjSGcz", "Logintest", void 0);
    const {
        ccclass: i,
        property: a
    } = n;
    e("Logintest", i(r = class extends o {
        constructor(...e) {
            super(...e), this.rece = void 0, this.se = void 0
        }
        onLoad() {
            s.init(), this.rece = new c;
            let e = {
                nRoomUUID: 2,
                nCreateTime: 56,
                nSelfWinbet: 78,
                tRoomParam: {
                    nOwnerType: 100,
                    nGameMode: 200,
                    nPlayerCountMax: 600,
                    vAllianceID: [85, 65, 541]
                }
            };
            s.StringTools.deepCopy(e, this.rece), e.nCreateTime = 1e3, console.log(this.rece), console.log(e)
        }
    }) || r);
    t._RF.pop()
}
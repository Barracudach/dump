import * as e from "./cc.js";
import * as t from "./holdemRoom.js";
import * as s from "./httpApis.js";
import * as r from "./mttconfig.js";

function main() {
    e._RF.push({}, "b0b61MlbK5Eka6ne++2lF7G", "holdemNewReplayer", void 0);
    o("holdemNewReplayer", class {
        constructor() {
            this.holdemRoom = void 0, this.lastRoundRecordRequestTimestamp = -1
        }
        setHoldemRoom(o) {
            this.holdemRoom = o
        }
        requestLastNewReplayer(o, e) {
            let m = {
                userId: this.holdemRoom.store.tournamentMode == t.MTT && this.holdemRoom.store.checkIsPlayerSeated(this.holdemRoom.store.playerUserId) ? this.holdemRoom.store.playerUserId : 0,
                roomId: this.holdemRoom.store.roomId,
                uuid: this.holdemRoom.store.uuid
            };
            this.holdemRoom.store.node._gameMode == r.GAME_LEVEL_LIST_ID.MTT && (m = {
                userId: 0,
                roomId: this.holdemRoom.store.roomId,
                mttId: this.holdemRoom.store.tournamentId
            }), s.requestGameRecordHoldemList(m, (e => {
                null != o && o(e)
            }), (t => {
                cc_mtt.vv.ConsoleLog.log("onError - requestHoldemRecordList", t), this.requestLastNewReplayer(o, e)
            }), e)
        }
    }), e._RF.pop()
}
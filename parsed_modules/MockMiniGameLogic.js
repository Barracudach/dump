import * as o from "./cc.js";
import * as e from "./cc.js";
import * as n from "./NetWork.js";
import * as c from "./cowboy.mjs_cjs=&original=.js";
import * as i from "./Enum.js";
import * as s from "./CowboyNetWork.js";
import * as a from "./CowboyEnum.js";
import * as u from "./FakeMultipleGame.js";

function main() {
    o._RF.push({}, "64fa3Usqh5GHpBM4wb0j4M9", "MockMiniGameLogic", void 0);
    class r {
        static getInstance() {
            return this._instance || (this._instance = new r), this._instance
        }
        mockKickPlayer(t) {
            null == t && (t = s.IDLE_LONG_TIME);
            let e = {
                    kickType: t
                },
                o = i.getInstance().encodePB("KickNotify", e);
            this._execFunc(u.cowboy_proto.CMD.KICK_NOTIFY, c.CowBoy, o)
        }
        mockLeaveRoom(t) {
            null == t && (t = u.cowboy_proto.ErrorCode.CAN_NOT_LEAVE_IN_BETTING);
            let e = {
                    code: t
                },
                o = i.getInstance().encodePB("LeaveRoomResp", e);
            this._execFunc(u.cowboy_proto.CMD.LEAVE_ROOM_RESP, c.CowBoy, o)
        }
        mockStartMtt() {
            a.instance.startMttGame()
        }
        _execFunc(t, o, c) {
            let i = n.getInstance().handlers.get(o);
            if (i) {
                let o = i.get(t);
                "function" == typeof o ? o(c, t) : e("未注册消息id = " + t)
            } else e("未注册游戏id = " + o)
        }
    }
    t("default", r), r._instance = void 0, o._RF.pop()
}
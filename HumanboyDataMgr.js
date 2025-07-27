import * as n from "./cc.js";
import * as a from "./HumanboyRoomData.js";

function main() {
    n._RF.push({}, "0edf3g5rLhLLpXX13LGw1uS", "HumanboyDataMgr", void 0);
    class o {
        static getInstance() {
            return o._g_Instance || (o._g_Instance = new o), o._g_Instance
        }
        constructor() {
            this._humanboyRoomData = null, this._init()
        }
        _init() {
            this._humanboyRoomData || (this._humanboyRoomData = new a)
        }
        getHumanboyRoom() {
            return this._humanboyRoomData
        }
    }
    o._g_Instance = null;
    t("default", o.getInstance());
    n._RF.pop()
}
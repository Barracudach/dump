import * as e from "./cc.js";
import * as a from "./PokerMasterRoomData.js";

function main() {
    e._RF.push({}, "39593DavnZHOb6fOej/ckOn", "PokerMasterDataMgr", void 0);
    class n {
        static getInstance() {
            return n._g_Instance || (n._g_Instance = new n), n._g_Instance
        }
        constructor() {
            this._pokerMasterRoomData = null, this._init()
        }
        _init() {
            this._pokerMasterRoomData || (this._pokerMasterRoomData = new a)
        }
        getPokerMasterRoom() {
            return this._pokerMasterRoomData
        }
    }
    n._g_Instance = null;
    t("default", n.getInstance());
    e._RF.pop()
}
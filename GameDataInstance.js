import * as a from "./cc.js";
import * as e from "./RoomData.js";
import * as i from "./RecordData.js";
import * as o from "./RecordData.js";
import * as n from "./GameData.js";
import * as s from "./GiftData.js";

function main() {
    a._RF.push({}, "b3ebe/xS6hJSYad2tSFDtt/", "GameDataInstance", void 0);
    t("BarrageCountData", class {
        constructor() {
            this.count = void 0, this.BarrageId = void 0, this.content = void 0
        }
    });
    t("GameDataInstance", class {
        constructor(t, a) {
            this.tRoomData = null, this.tGameRecords = null, this.tGameData = null, this.tGiftData = null, this.tCollectPokerMapData = null, this.joinedGame = !1, this._init(), this.tRoomData.u32GameID = t, this.tRoomData.u32RoomId = this.tGameData.i32RoomId = a
        }
        _init() {
            this.tRoomData = new e, this.tGameRecords = new o, this.tGameData = new n, this.tGiftData = new s, this.tCollectPokerMapData = new i
        }
    }), a._RF.pop()
}
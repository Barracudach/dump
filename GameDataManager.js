import * as a from "./cc.js";
import * as e from "./RecordData.js";
import * as s from "./JackpotData.js";
import * as n from "./GameDataInstance.js";
import * as o from "./DataHandler.js";
import * as i from "./StringTools.js";
import * as r from "./cv.js";

function main() {
    a._RF.push({}, "9274a/lAyxPSqPSWfKVRV6t", "GameDataManager", void 0);
    t("BarrageCountData", class {
        constructor() {
            this.count = void 0, this.BarrageId = void 0, this.content = void 0
        }
    });
    class u {
        get listData() {
            return this._listData
        }
        constructor() {
            this.danmuMsgs = [], this.mydanmuMsgs = [], this.danmuCounts = [], this._listData = [], this._lastDataInstance = null, this.tCollectPokerMapDataHallScene = null, this.tJackPot = null, this.bIsAuthMicphone = !1, this.bIsAuthLocation = !1, this._listCoinModeTableSet = {}, this.isShowNeedShop = !1, this._init()
        }
        static getInstance() {
            return u.g_instance || (u.g_instance = new u), u.g_instance
        }
        clearData() {
            u.g_instance = null, u.g_instance = u.getInstance()
        }
        getDanmuMsg() {
            return this.mydanmuMsgs.length > 0 ? this.mydanmuMsgs.shift() : this.danmuMsgs.shift()
        }
        addDanmuMsg(t) {
            t.playerid == Number(o.getInstance().getUserData().user_id) ? this.mydanmuMsgs.push(t) : this.danmuMsgs.push(t)
        }
        updateBarrageCount(t) {
            for (let a = 0; a < this.danmuCounts.length; a++) t.BarrageId == this.danmuCounts[a].BarrageId && (this.danmuCounts[a].count = t.UseCount);
            this.sortBarrageData()
        }
        clearBarrageData() {
            this.danmuCounts = []
        }
        addBarrageData(t) {
            this.danmuCounts.push(t)
        }
        sortBarrageData() {
            this.danmuCounts.sort(this.sortByUserCount.bind(this));
            for (let t = 0; t < this.danmuCounts.length; t++) console.log(i.getInstance().formatC("index:%d baId:%d  usecount:%d content:%s", t, this.danmuCounts[t].BarrageId, this.danmuCounts[t].count, this.danmuCounts[t].content))
        }
        getBarrageData() {
            return this.danmuCounts
        }
        sortByUserCount(t, a) {
            return t.count > a.count ? -1 : t.count < a.count ? 1 : t.count == a.count ? t.BarrageId < a.BarrageId ? -1 : t.BarrageId > a.BarrageId ? 1 : 0 : void 0
        }
        clearDanmuMsg() {
            this.danmuMsgs = [], this.mydanmuMsgs = []
        }
        get listCoinModeTableSet() {
            return this._listCoinModeTableSet
        }
        getDataPointInTable(t) {
            return this._listCoinModeTableSet[t] || 0
        }
        setDataPointInTable(t, a) {
            this._listCoinModeTableSet[t] = a
        }
        hasDataPoint(t) {
            return void 0 !== this._listCoinModeTableSet[t] && null !== this._listCoinModeTableSet[t]
        }
        getDataPointInTableIfExist(t, a) {
            return this.hasDataPoint(t) && this.getDataPointInTable(t), a
        }
        _init() {
            this.tJackPot = s.getInstance(), this.tCollectPokerMapDataHallScene = new e, this._listCoinModeTableSet = {}
        }
        getOrCreateDataInstance(t, a) {
            let e = this.getDataInstanceByGameAndRoomId(t, a);
            return e || (e = new n(t, a), this._listData.push(e)), this._lastDataInstance = e, e
        }
        getDataInstanceNotJoined(t) {
            return this._listData.find((a => {
                var e;
                return !a.joinedGame && (null == (e = a.tRoomData) ? void 0 : e.u32GameID) == t
            }))
        }
        getDataInstanceByGameAndRoomId(t, a) {
            const e = this._listData.find((e => !(!r.roomManager.checkGameIsZoom(t) || !e.tRoomData.isZoom()) || e.tRoomData.u32GameID == t && e.tRoomData.u32RoomId == a));
            return e && (this._lastDataInstance = e), e
        }
        getDataInstanceByGameAndRoomUuidJs(t, a) {
            return this._listData.find((e => !(!r.roomManager.checkGameIsZoom(t) || !e.tRoomData.isZoom()) || e.tRoomData.u32GameID == t && a.length && e.tRoomData.roomUuidJs == a))
        }
        removeAllInstances() {
            this._listData.forEach((t => {
                t.tGameData.reset(), t.tGiftData.reset(), t.tGameRecords.reset(), t.tCollectPokerMapData.reset()
            })), this.tCollectPokerMapDataHallScene.reset(), this._listData = [], this._lastDataInstance = null, this.isShowNeedShop = !1
        }
        removeInstance(t, a) {
            const e = this.getDataInstanceByGameAndRoomId(t, a);
            e && (e.tGameData.reset(), e.tGiftData.reset(), e.tGameRecords.reset(), this._listData.splice(this._listData.findIndex((t => t == e)), 1))
        }
        getLastDataInstance() {
            return this._lastDataInstance
        }
    }
    t("GameDataManager", u), u.g_instance = null;
    t("default", u.getInstance());
    a._RF.pop()
}
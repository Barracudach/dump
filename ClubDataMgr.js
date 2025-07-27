import * as e from "./cc.js";
import * as r from "./ClubData.js";
import * as l from "./cv.js";

function main() {
    e._RF.push({}, "608c8Gd/AhDL7jLnVOu2DZd", "ClubDataMgr", void 0);
    class i {
        constructor() {
            this._club_list = [], this._curOpClubID = 0, this._curSearchClubData = new r, this._isClickManger = !1, this._clubBoardListWorldServer = [], this._clubBoardListWorldWPTOServer = [], this._tempClubBoardListWorldServers = new Map, this._init()
        }
        static getInstance() {
            return i.g_instance || (i.g_instance = new i), i.g_instance
        }
        _init() {}
        setClickManger(t) {
            this._isClickManger = t
        }
        isClickManger() {
            return this._isClickManger
        }
        setCurOpClubID(t) {
            this._curOpClubID = t
        }
        setCurSearchClubData(t) {
            null == t && (t = new r), this._curSearchClubData.copyFrom(t)
        }
        getCurSearchClubData() {
            return this._curSearchClubData
        }
        getCurOpClubData() {
            let t = null;
            for (let e = 0; e < this._club_list.length; ++e) {
                let r = this._club_list[e];
                if (this._curOpClubID === r.club.club_id) {
                    t = r;
                    break
                }
            }
            return t || (t = this.getCurSearchClubData()), t
        }
        clearCurOpClubTmp() {
            this.setCurOpClubID(0), this.setCurSearchClubData(null)
        }
        getClubDataList() {
            return this._club_list
        }
        addClubData(t, e) {
            if (!t) return;
            for (let e = 0; e < this._club_list.length; ++e)
                if (this._club_list[e].club.club_id === t.club.club_id) return void this._club_list[e].copyFrom(t);
            let l = t;
            e && (l = new r, l.copyFrom(t)), this._club_list.push(l)
        }
        getClubDataByID(t) {
            let e = null;
            for (let r = 0; r < this._club_list.length; ++r)
                if (this._club_list[r].club.club_id === t) {
                    e = this._club_list[r];
                    break
                } return e
        }
        removeClubDataByID(t) {
            for (let e = 0; e < this._club_list.length; ++e)
                if (this._club_list[e].club.club_id === t) return void this._club_list.splice(e, 1)
        }
        removeAllClubData() {
            this._club_list.length <= 0 || (this._club_list.splice(0, this._club_list.length), this._club_list.length = 0, this._club_list = [])
        }
        getClubCurrentBoardList() {
            return [...this.getClubBoardListWorldServer(), ...this.getClubBoardListWorldWPTOServer()]
        }
        getClubBoardListWorldServer() {
            return this._clubBoardListWorldServer.length ? this._clubBoardListWorldServer : this.getTempClubBoardList(l.Enum.SeverType.SeverType_World, l.Enum.GameId.World)
        }
        getClubBoardListWorldWPTOServer() {
            return this._clubBoardListWorldWPTOServer.length ? this._clubBoardListWorldWPTOServer : this.getTempClubBoardList(l.Enum.SeverType.SererType_World_WPTO, l.Enum.GameId.World_WPTO)
        }
        getKeyTempClubBoardList(t, e) {
            return null != e ? `${t}-${e}` : `${t}`
        }
        getTempClubBoardList(t, e) {
            const r = this.getKeyTempClubBoardList(t, e);
            return this._tempClubBoardListWorldServers.has(r) || this._tempClubBoardListWorldServers.set(r, []), this._tempClubBoardListWorldServers.get(r)
        }
        resetTempClubBoardList(t, e) {
            const r = this.getKeyTempClubBoardList(t, e);
            this._tempClubBoardListWorldServers.set(r, [])
        }
        setClubBoardListFromTempData(t, e) {
            const r = this.getTempClubBoardList(t, e);
            t === l.Enum.SeverType.SererType_World_WPTO.valueOf() && e === l.Enum.GameId.World_WPTO.valueOf() ? this._clubBoardListWorldWPTOServer = r : this._clubBoardListWorldServer = r
        }
        isIncludedOwnClubs(t) {
            let e = !1;
            for (let r = 0; r < this._club_list.length; ++r)
                if (t === this._club_list[r].club.club_id) {
                    e = !0;
                    break
                } return e
        }
        getMyCreatedClubID() {
            let t = 0,
                e = l.dataHandler.getUserData().u32Uid;
            for (let r = 0; r < this._club_list.length; ++r)
                if (e === this._club_list[r].club.club_owner) {
                    t = this._club_list[r].club.club_id;
                    break
                } return t
        }
        getClubData(t, e) {
            return this.getClubCurrentBoardList().find((r => r.game_id == t && r.room_id == e))
        }
        getClubDataByName(t, e) {
            return this.getClubCurrentBoardList().find((r => r.game_id == t && r.room_name == e))
        }
        clearAllOnLogout() {
            this.removeAllClubData(), this._clubBoardListWorldServer = [], this._clubBoardListWorldWPTOServer = [], this._tempClubBoardListWorldServers.clear()
        }
    }
    t("ClubDataManager", i), i.g_instance = null, e._RF.pop()
}
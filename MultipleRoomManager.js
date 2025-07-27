import * as o from "./cc.js";
import * as e from "./MultipleGame.js";
import * as n from "./Pb.js";
import * as i from "./RoomInstance.js";
import * as s from "./cv.js";
import * as m from "./Enum.js";
import * as a from "./Enum.js";

function main() {
    o._RF.push({}, "a595dZI6RJEP4XMHh6jsBg5", "MultipleRoomManager", void 0);
    let r = t("ExceedLimitType", function(t) {
        return t[t.None = 0] = "None", t[t.Total = 1] = "Total", t[t.Mtt = 2] = "Mtt", t[t.Sng = 3] = "Sng", t
    }({}));
    class l {
        static get instance() {
            return null == l._instance && (l._instance = new l), this._instance
        }
        get maxOpenRooms() {
            return s.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent
        }
        constructor() {
            this._listRoom = void 0, this.selectedRoomInfo = void 0, this._listRoom = []
        }
        get listRoom() {
            return this._listRoom
        }
        getRoomsCount() {
            return this._listRoom.length
        }
        isMttRoom(t) {
            const o = this._listRoom[t];
            return !!o && o.type == e.HOLDEM
        }
        getMttRoomIndex(t) {
            for (let o = 0; o < this._listRoom.length; o++) {
                const i = this._listRoom[o];
                if (i && i.type == e.HOLDEM) {
                    const e = i;
                    if (e.data)
                        if (e.data instanceof n.commonProto.PP_Level) {
                            if (e.data.RoomId == t) return o
                        } else if (e.data instanceof n.commonProto.SngTournament) {
                        if (e.data.Detail.Id == t) return o
                    } else if (e.data instanceof n.commonProto.MttTournament && e.data.Detail.Id == t) return o
                }
            }
            return -1
        }
        getMttRoom(t) {
            for (let o = 0; o < this._listRoom.length; o++) {
                const i = this._listRoom[o];
                if (i && i.type == e.HOLDEM) {
                    const o = i;
                    if (o.data)
                        if (o.data instanceof n.commonProto.PP_Level) {
                            if (o.data.RoomId == t) return o
                        } else if (o.data instanceof n.commonProto.SngTournament) {
                        if (o.data.Detail.Id == t) return o
                    } else if (o.data instanceof n.commonProto.MttTournament && o.data.Detail.Id == t) return o
                }
            }
            return null
        }
        getMttRoomId(t) {
            if (t) {
                if (t instanceof n.commonProto.PP_Level) return t.RoomId;
                if (t instanceof n.commonProto.SngTournament) return t.Detail.Id;
                if (t instanceof n.commonProto.MttTournament) return t.Detail.Id
            }
            return 0
        }
        getMttRooms() {
            return this.listRoom.filter((t => t.type == e.HOLDEM)).map((t => t))
        }
        getMttNonSngRooms() {
            return this.listRoom.filter((t => t.type == e.HOLDEM && t.data instanceof n.commonProto.MttTournament)).map((t => t))
        }
        getSngRooms() {
            return this.listRoom.filter((t => t.type == e.HOLDEM && t.data instanceof n.commonProto.SngTournament)).map((t => t))
        }
        removeMttRoom(t) {
            let o = this.getMttRoom(t);
            if (o) {
                const t = this._listRoom.indexOf(o);
                this.removeRoomByCustomSlice(t)
            }
        }
        removeAllMttRooms() {
            this._listRoom = this._listRoom.filter((t => !(t.type == e.HOLDEM && t.data instanceof n.commonProto.MttTournament && !t.isWatching)))
        }
        removeAllSngRooms() {
            this._listRoom = this._listRoom.filter((t => !(t.type == e.HOLDEM && t.data instanceof n.commonProto.SngTournament && !t.isWatching)))
        }
        addMttRoom(t, o, i) {
            if (!i) return -1;
            for (let t = 0; t < this._listRoom.length; t++)
                if (this._listRoom[t].type === e.HOLDEM) {
                    const o = this._listRoom[t].data;
                    if (i instanceof n.commonProto.PP_Level && o instanceof n.commonProto.PP_Level && i.RoomId == o.RoomId) return t;
                    if ((i instanceof n.commonProto.SngTournament && o instanceof n.commonProto.SngTournament || i instanceof n.commonProto.MttTournament && o instanceof n.commonProto.MttTournament) && i.Detail.Id == o.Detail.Id) return t
                } if (this._listRoom.length < this.maxOpenRooms) {
                const n = {
                    type: e.HOLDEM,
                    gameMode: t,
                    gameListId: o,
                    data: i,
                    index: this._listRoom.length
                };
                return this._listRoom.push(n), s.appConfig.getGeneralConfig().multiWindowEnabled && s.MessageCenter.send(m.AddRoom), this._listRoom.indexOf(n)
            }
            return -1
        }
        getCashRoomById(t, o) {
            for (let n = 0; n < this._listRoom.length; n++) {
                const i = this._listRoom[n];
                if (i && i.type == e.CASH) {
                    const e = i;
                    if (e.data && e.data.getCurrentRoomID() == o && e.data.getCurrentGameID() == t) return e
                }
            }
            return null
        }
        getCashRoomIndex(t, o) {
            for (let n = 0; n < this._listRoom.length; n++) {
                const i = this._listRoom[n];
                if (i && i.type == e.CASH) {
                    const e = i;
                    if (e.data && e.data.getCurrentRoomID() == o && e.data.getCurrentGameID() == t) return n
                }
            }
            return -1
        }
        getPaceRoomIndex() {
            for (let t = 0; t < this._listRoom.length; t++) {
                const o = this._listRoom[t];
                if (o && o.type == e.CASH) {
                    const e = o;
                    if (e.data && e.data.getCurrentGameID() === a.ZoomTexas) return t
                }
            }
            return -1
        }
        getCashRoom(t) {
            return t ? this.getCashRoomById(t.getCurrentGameID(), t.getCurrentRoomID()) : null
        }
        getAmountMTTRooms() {
            return this.listRoom.filter((t => t.type == e.HOLDEM)).length
        }
        getAmountCashRooms() {
            return this.listRoom.filter((t => t.type == e.CASH)).length
        }
        getCashRooms() {
            return this.listRoom.filter((t => t.type == e.CASH)).map((t => t))
        }
        removeCashRoomById(t, o) {
            let e = this.getCashRoomById(t, o);
            if (e) {
                const t = this._listRoom.indexOf(e);
                this.removeRoomByCustomSlice(t)
            }
        }
        removeCashRoom(t) {
            let o = this.getCashRoom(t);
            if (o) {
                const t = this._listRoom.indexOf(o);
                this.removeRoomByCustomSlice(t)
            }
        }
        removeAllCashRooms() {
            this._listRoom = this._listRoom.filter((t => t.type != e.CASH))
        }
        addCashRoom(t) {
            if (this.canAddCashGame(t)) {
                const o = {
                    type: e.CASH,
                    data: t,
                    index: this._listRoom.length
                };
                return this._listRoom.push(o), s.appConfig.getGeneralConfig().multiWindowEnabled && s.MessageCenter.send(m.AddRoom), this._listRoom.indexOf(o)
            }
            return -1
        }
        canAddCashGame(t) {
            return t && this._listRoom.length < this.maxOpenRooms && null == this.getCashRoom(t)
        }
        canAddMttGame(t) {
            return this._listRoom.length < this.maxOpenRooms && null == this.getMttRoom(t)
        }
        static isMatchedGameDataMultiWindow(t, o) {
            return !t || !o || (t.tRoomData.u32GameID != o.tRoomData.u32GameID || t.tRoomData.pkRoomParam.game_name != o.tRoomData.pkRoomParam.game_name)
        }
        getRoomIndex(t) {
            const o = l.instance.listRoom;
            if (o && o.length && t)
                for (let s = 0; s < o.length; s++) {
                    const m = o[s];
                    if (m)
                        if (m.type == e.HOLDEM) {
                            const o = m;
                            if (typeof t == typeof o.data) {
                                const e = o.data;
                                if (e instanceof n.commonProto.SngTournament && t instanceof n.commonProto.SngTournament) {
                                    if (t.Detail.Id == e.Detail.Id) return s
                                } else if (e instanceof n.commonProto.MttTournament && t instanceof n.commonProto.MttTournament) {
                                    if (t.Detail.Id == e.Detail.Id) return s
                                } else if (e instanceof n.commonProto.PP_Level && t.RoomId == e.RoomId) return s
                            }
                        } else if (m.type == e.CASH) {
                        const o = m;
                        if (t instanceof i) {
                            const e = o.data;
                            if (e.getCurrentGameID() == t.getCurrentGameID()) {
                                if (e.checkGameIsZoom(e.getCurrentGameID())) return s;
                                if (e.getCurrentRoomID() == t.getCurrentRoomID()) return s
                            }
                        }
                    }
                }
            return -1
        }
        removeRoom(t) {
            switch (t.type) {
                case e.CASH:
                    this.removeCashRoom(t.data);
                    break;
                case e.HOLDEM:
                    this.removeMttRoom(this.getMttRoomId(t.data))
            }
            s.appConfig.getGeneralConfig().multiWindowEnabled && s.MessageCenter.send(m.ExitRoom)
        }
        removeRoomByIndex(t) {
            t < this.maxOpenRooms && this.removeRoomByCustomSlice(t)
        }
        removeAllRooms() {
            this._listRoom = []
        }
        removeRoomByCustomSlice(t) {
            this._listRoom.splice(t, 1), s.appConfig.getGeneralConfig().multiWindowEnabled && s.MessageCenter.send(m.ExitRoom)
        }
        getGameInfoByTabIndex(t) {
            return this._listRoom.find((o => o && o.index == t))
        }
        getSortedRooms() {
            let t = [];
            return s.StringTools.deepCopy(this.listRoom, t), t
        }
        getExceedLimitType(t) {
            if (s.getTotalOpeningGames() >= s.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent) return r.Total;
            switch (t) {
                case r.Mtt:
                    const t = s.appConfig.getGameConfig().gameTablesConcurrent.mtt;
                    if (l.instance.getMttNonSngRooms().length >= t) return r.Mtt;
                    break;
                case r.Sng:
                    if (l.instance.getSngRooms().length >= s.appConfig.getGameConfig().gameTablesConcurrent.sng) return r.Sng
            }
            return r.None
        }
    }
    t("MultipleRoomManager", l), l._instance = null, o._RF.pop()
}
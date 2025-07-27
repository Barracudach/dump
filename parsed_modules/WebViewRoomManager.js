import * as s from "./cc.js";
import * as e from "./WebViewInstance.js";
import * as t from "./cv.js";

function main() {
    s._RF.push({}, "f5121I5DyFD0LvCT4BqX/XY", "WebViewRoomManager", void 0);
    class n {
        constructor() {
            this._rooms = [], t.MessageCenter.register(t.Enum.MessageCenterAction.OnWebViewWindowClosed, this.onWebViewWindowClosed.bind(this), this), t.MessageCenter.register(t.Enum.MessageCenterAction.onSportsBookLeaveSuccess, this.onSportsBookLeaveSuccess.bind(this), this)
        }
        get rooms() {
            return this._rooms
        }
        get maxOpenRooms() {
            return t.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent
        }
        get maxSportsBookRooms() {
            return t.appConfig.getGameConfig().gameTablesConcurrent.sportsBook
        }
        get sportsBookRooms() {
            return this._rooms.filter((o => o.gameId === t.Enum.GameId.SportsBook))
        }
        static getInstance() {
            return n.instance || (n.instance = new n), n.instance
        }
        closeAllRooms(o = !0) {
            this._rooms.forEach((o => {
                o.closeWindow()
            })), o && (this._rooms = [])
        }
        hasAnySportsBookRoom() {
            return this.sportsBookRooms.length > 0
        }
        openSportsBook() {
            const o = this.sportsBookRooms;
            if (o.length > this.maxSportsBookRooms) {
                let s = 0;
                for (let e = o.length - 1; e >= 0; e--) s++ >= this.maxSportsBookRooms && o[e].closeWindow()
            } else o.length < this.maxSportsBookRooms && this.addRoom(t.Enum.GameId.SportsBook);
            this.hasAnySportsBookRoom() && this.sportsBookRooms.forEach((o => {
                o.openWindow()
            }))
        }
        closeSportsBook() {
            this.sportsBookRooms.forEach((o => {
                o.closeWindow()
            }))
        }
        addRoom(o) {
            let s = "";
            if (t.getTotalOpeningGames() >= this.maxOpenRooms ? s = t.StringTools.formatC(t.config.getStringData("Max_concurrent_game_tables"), this.maxOpenRooms) : o === t.Enum.GameId.SportsBook && this.sportsBookRooms.length >= this.maxSportsBookRooms && (s = t.StringTools.formatC(t.config.getStringData("Max_concurrent_sports_book_tables"), this.maxSportsBookRooms)), s.length) return t.popUp.showMsgI18n({
                txt: s
            }), !1;
            const n = new e(o);
            return n.gameId === t.Enum.GameId.SportsBook && (n.allowCloseByCloseBtn = !1), this._rooms.push(n), !0
        }
        removeRoom(o) {
            const s = this._rooms.findIndex((s => s.gameId === o));
            s >= 0 && this._rooms.splice(s, 1)
        }
        onWebViewWindowClosed(o = null) {
            o && this.removeRoom(o.gameId)
        }
        onSportsBookLeaveSuccess(o) {
            this.closeSportsBook(), o || t.worldNet.requestGetUserData()
        }
    }
    o("WebViewRoomManager", n), n.instance = void 0, s._RF.pop()
}
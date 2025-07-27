import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as i from "./GameDataManager.js";
import * as r from "./CrashTracing.js";
import * as c from "./CrashTracing.js";

function main() {
    t("autoInject", (function(t) {
        return function(e, n) {
            const o = "__" + n,
                s = {
                    get: function() {
                        if (!this) return null;
                        if (!a(this, !0)) return this[o];
                        var e;
                        if (!this[o])
                            if ("GameDataInstance" === t) this[o] = null == (e = u.getInstance(null == this ? void 0 : this.node)) ? void 0 : e.gameData;
                            else if ("RoomInstance" === t) {
                            var n;
                            this[o] = null == (n = u.getInstance(null == this ? void 0 : this.node)) ? void 0 : n.room
                        } else this[o] = u.getInstance(null == this ? void 0 : this.node);
                        return this[o]
                    },
                    set: function(t) {
                        if (!this) return null;
                        this[o] = t
                    }
                };
            return Object.defineProperty(e, n, s), s
        }
    })), o._RF.push({}, "ddec5YN9VFJgqx26x411E7k", "GameSceneInstance", void 0);
    class u {
        constructor() {
            this._roomInstance = null, this._gameDataInstance = null, this._gameNode = null
        }
        get room() {
            return this._roomInstance
        }
        get gameData() {
            var t, e;
            this._gameDataInstance || (this._gameDataInstance = i.getOrCreateDataInstance(null == (t = this._roomInstance) ? void 0 : t.getCurrentGameID(), null == (e = this._roomInstance) ? void 0 : e.getCurrentRoomID()));
            return this._gameDataInstance
        }
        get gameNode() {
            let t = this._gameNode;
            return this._gameNode instanceof e && (t = s.config.getRootNodeOfScene(this._gameNode)), t
        }
        static addInstance(t, e) {
            if (t) {
                const a = new u;
                a._roomInstance = e, a._gameNode = t, t[u.GAME_INSTANCE_KEY] = a
            }
        }
        static getInstance(t, e = !1) {
            let o = null;
            const s = t;
            for (; t && !o;) o = t[u.GAME_INSTANCE_KEY], t = t.parent;
            if (!o && !e) {
                var i;
                null == (i = r.getInstance()) || i.trace(c.CashGameIssues, "MultipleCashGame", {
                    name: "getInstance",
                    issue: "Not found GameSceneInstance",
                    node: a(t, !0) ? `name: ${t.name} - active: ${t.active}` : "null"
                }, !1, !1);
                var m = function() {
                    var t = {};
                    return Error.captureStackTrace(t, m), t.stack
                };
                n("Every call should have instance", m()), console.trace("TRACE")
            }
            return s && (s[u.GAME_INSTANCE_KEY] = o), o
        }
        static getInstanceGameId(t, e = !1) {
            var a;
            return null == (a = this.getInstance(t, e)) || null == (a = a.room) ? void 0 : a.getCurrentGameID()
        }
        static getInstanceRoomId(t, e = !1) {
            var a;
            return null == (a = this.getInstance(t, e)) || null == (a = a.room) ? void 0 : a.getCurrentRoomID()
        }
        static getInstanceGameData(t, e = !1) {
            var a;
            return null == (a = this.getInstance(t, e)) ? void 0 : a.gameData
        }
        static isInvalidRoomMultiWindow(t, e) {
            var n, o, s;
            if (!t || !a(e, !0)) return !0;
            const i = u.getInstance(e);
            if (u.getInstanceGameId(e) != (null == (n = t.tRoomData) ? void 0 : n.u32GameID)) return !0;
            const r = null == (o = i.gameData) || null == (o = o.tRoomData) || null == (o = o.pkRoomParam) ? void 0 : o.game_name;
            return (null == (s = t.tRoomData) || null == (s = s.pkRoomParam) ? void 0 : s.game_name) != r
        }
        static isInvalidRoomUuidMultiWindow(t, e, a) {
            return !e || (e.tRoomData.roomUuidJs != t || !(!a || e.tRoomData.game_uuids_js.includes(a)))
        }
        static isInvalidGameDataMultiWindow(t, e) {
            return !t || !e || (t.tRoomData.u32GameID != e.tRoomData.u32GameID || t.tRoomData.pkRoomParam.game_name != e.tRoomData.pkRoomParam.game_name)
        }
    }
    t("default", u), u.GAME_INSTANCE_KEY = "_gameInstance", o._RF.pop()
}
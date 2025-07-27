import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./gate.mjs_cjs=&original=.js";
import * as i from "./cv.js";
import * as s from "./cv.js";
import * as u from "./CrashTracing.js";

function main() {
    var c;
    r._RF.push({}, "3f5e6nrXtlJB4igVIryCVoJ", "NetWorkProxy", void 0);
    const {
        ccclass: m,
        property: l
    } = n;
    e("NetWorkProxy", m(c = class extends t {
        constructor(...e) {
            super(...e), this.serverPB = void 0, this.TIME_MS_TIMEOUT = 8e3, this.requestTimeout = {}, this.defValOptions = {
                enums: Number,
                longs: Number,
                bytes: String,
                defaults: !0,
                arrays: !0,
                objects: !0,
                oneofs: !0
            }
        }
        clearRequestJoinGameRoom() {}
        initCommon(e) {
            this.initPb(e), this.registerCommonMessage(e)
        }
        registerCommonMessage(e) {
            a.netWork.registerMsg(e, a.Enum.GATE_MSGID.CONNECT_SERVER_FAILED_NOTIFY, this.ConnectServerFailedNotify.bind(this)), a.netWork.registerMsg(e, a.Enum.GATE_MSGID.SERVER_CLOSE_NOTIFY, this.NotifyServerClose.bind(this))
        }
        shouldReconnectNetwork(e) {
            let r = !a.appConfig.getGeneralConfig().multiWindowEnabled,
                t = e != a.Enum.GameId.World,
                o = a.roomManager.hasOpeningRoomOnGameServer(e),
                n = a.config.getCurrentScene() != a.Enum.SCENE.HALL_SCENE,
                s = !1;
            return r ? (t && n && o || !t && !n) && (s = !0) : (!t || t && o) && (s = !0), s
        }
        ConnectServerFailedNotify(e) {
            o("Connection failure Connection failure Connection failure Connection failure Connection failure");
            let r = this.decodePB(u.gate_proto.ConnectServerFailedNotify, e);
            r && this.shouldReconnectNetwork(r.ServerId) && a.netWorkManager.reconnectByServerFailed(r.ServerId != a.Enum.GameId.World)
        }
        NotifyServerClose(e, r, t, o, n) {
            let s = 0;
            try {
                let r = this.decodePB(u.gate_proto.ServerCloseNotify, e);
                r && (s = null == r ? void 0 : r.ServerId, 0 == s && (s = o))
            } catch (e) {
                s = o
            }
            if (s > 0) {
                let e = a.appConfig.getGeneralConfig().multiWindowEnabled,
                    r = s != a.Enum.GameId.World;
                if (this.shouldReconnectNetwork(s))
                    if (e && r && a.roomManager.rooms.length > 1) {
                        let e = a.roomManager.rooms.filter((e => e.getCurrentGameID() == s));
                        e.length > 0 && a.netWorkManager.clearLoginGameServerSuccFlag(s), e.forEach((e => {
                            a.roomManager.RequestJoinRoom(e.getCurrentGameID(), e.getCurrentRoomID())
                        }))
                    } else a.netWorkManager.serverFailCounts = 0, a.netWorkManager.reconnectByServerFailed(s != a.Enum.GameId.World);
                else if (e && r && a.roomManager.rooms.length > 0) {
                    let e = a.roomManager.rooms.filter((e => e.getCurrentGameID() == s));
                    e.length > 0 && (a.netWorkManager.clearLoginGameServerSuccFlag(s), e.forEach((e => {
                        a.roomManager.RequestJoinRoom(e.getCurrentGameID(), e.getCurrentRoomID())
                    })))
                }
            }
        }
        initPb(e) {
            switch (e) {
                case a.Enum.GameId.World:
                    this.serverPB = a.worldPB;
                    break;
                case a.Enum.GameId.Allin:
                    this.serverPB = a.aofPB;
                    break;
                case a.Enum.GameId.Texas:
                case a.Enum.GameId.StarSeat:
                case a.Enum.GameId.Plo:
                case a.Enum.GameId.Plo5:
                    this.serverPB = a.gamePB;
                    break;
                case a.Enum.GameId.CowBoy:
                    this.serverPB = a.cowboyPB;
                    break;
                case a.Enum.GameId.VideoCowboy:
                    this.serverPB = a.videoCowboyPB;
                    break;
                case a.Enum.GameId.HumanBoy:
                    this.serverPB = a.humanboyPB;
                    break;
                case a.Enum.GameId.PokerMaster:
                    this.serverPB = a.pokerMasterPB;
                    break;
                case a.Enum.GameId.Data:
                    this.serverPB = a.dataPB;
                    break;
                case a.Enum.GameId.Jackfruit:
                    this.serverPB = a.jackfruitPB
            }
        }
        registerMessage(e, r, t) {
            a.netWork.registerMsg(t, e, r)
        }
        sendMsg(e, r, t, o, n) {
            return a.netWork.sendMsg(e, r, t, o, n)
        }
        decodePB(e, r) {
            try {
                let t = new Uint8Array(r),
                    o = e.decode(t);
                return e.toObject(o, this.defValOptions)
            } catch (e) {
                return console.log("decodePB:Error: PB did not find this message ==>> " + e), null
            }
        }
        checkValidGameData(e, r) {
            var t;
            const o = a.GameDataManager.getDataInstanceByGameAndRoomId(e, r);
            return (null == o || null == (t = o.tRoomData) ? void 0 : t.u32RoomId) == r
        }
        addRequestTimeout(e, r = 0, t) {
            var o;
            null == r && (r = 0), null != (o = this.requestTimeout[e]) && o[r] && (clearInterval(this.requestTimeout[e][r]), delete this.requestTimeout[e][r]), this.requestTimeout[e] || (this.requestTimeout[e] = {}), this.requestTimeout[e][r] = setTimeout((() => {
                var o;
                null == (o = s.getInstance()) || o.trace(i.WebSocketReqError, i.WebSocketReqTimeout, {
                    Reason: "Websocket Request Timeout",
                    Request: e,
                    Room: r ?? ""
                }), t && t()
            }), this.TIME_MS_TIMEOUT)
        }
        responseReceived(e, r = 1, t, o = 1) {
            var n, a;
            if (null == t && (t = 0), null == (n = this.requestTimeout[e]) || !n[t]) {
                var u;
                let o = "0";
                return this.requestTimeout[e] && (o = JSON.stringify(this.requestTimeout[e])), void(null == (u = s.getInstance()) || u.trace(i.WebSocketReqError, i.WebSocketRespNoMatch, {
                    Reason: "Websocket Response doesn't match any Request!",
                    Request: e,
                    Room: t ?? "",
                    ErrorCode: r,
                    RequestExist: o
                }))
            }(clearInterval(this.requestTimeout[e][t]), r != o) && (null == (a = s.getInstance()) || a.trace(i.WebSocketReqError, i.WebSocketReqError, {
                Reason: "Websocket Request Error",
                Request: e,
                Room: t ?? "",
                ErrorCode: r
            }))
        }
    }) || c);
    r._RF.pop()
}
import * as t from "./cc.js";
import * as _ from "./cc.js";
import * as e from "./NetWorkProxy.js";
import * as d from "./data.mjs_cjs=&original=.js";
import * as s from "./cv.js";
import * as E from "./HashMap.js";
import * as r from "./gate.mjs_cjs=&original=.js";

function main() {
    var D, i;
    t._RF.push({}, "9b832JAY4JDgr12QNvB7dIT", "DataNetWork", void 0);
    const {
        ccclass: R,
        property: M
    } = _;
    a("DataNetWork", R(((i = class a extends e {
        constructor(...a) {
            super(...a), this.arr = new s, this.callbacks = {}
        }
        static getInstance() {
            return a.g_instance || (a.g_instance = new a, a.g_instance.init()), a.g_instance
        }
        sendGameMsg(a, t, _, e = d.Enum.SeverType.SeverType_RANK, s = d.Enum.GameId.Data) {
            return this.sendMsg(a, t, _, e, s)
        }
        registerMsg(a, t) {
            this.registerMessage(a, t, d.Enum.GameId.Data)
        }
        init() {
            this.arr.add(E.data.CMD.GET_DATA_REQ, E.data.CMD.GET_DATA_RESP), this.arr.add(E.data.CMD.GET_PUBLIC_DATA_REQ, E.data.CMD.GET_PUBLIC_DATA_RESP), this.arr.add(E.data.CMD.HOME_REQ, E.data.CMD.HOME_RESP), this.arr.add(E.data.CMD.ROOM_RECORDS_LIST_REQ, E.data.CMD.ROOM_RECORDS_LIST_RESP), this.arr.add(E.data.CMD.ROOM_RECORD_REQ, E.data.CMD.ROOM_RECORD_RESP), this.arr.add(E.data.CMD.GAME_UUIDS_REQ, E.data.CMD.GAME_UUIDS_RESP), this.arr.add(E.data.CMD.GAME_HAND_REQ, E.data.CMD.GAME_HAND_RESP), this.arr.add(E.data.CMD.GAME_HAND_TEST_REQ, E.data.CMD.GAME_HAND_TEST_RESP), this.arr.add(E.data.CMD.DO_FAVORITE_REQ, E.data.CMD.DO_FAVORITE_RESP), this.arr.add(E.data.CMD.FAVORITE_HAND_REQ, E.data.CMD.FAVORITE_HAND_RESP), this.arr.add(E.data.CMD.FAVORITE_LIST_NEW_REQ, E.data.CMD.FAVORITE_LIST_NEW_RESP), this.arr.add(E.data.CMD.GAME_REVIEW_LIST_REQ, E.data.CMD.GAME_REVIEW_LIST_RESP), this.arr.add(E.data.CMD.DELETE_FAVORITE_LIST_REQ, E.data.CMD.DELETE_FAVORITE_LIST_RESP), this.arr.add(E.data.CMD.FORCE_SHOW_CARD_REQ, E.data.CMD.FORCE_SHOW_CARD_RSP), this.arr.add(E.data.CMD.SEND_CARD_FUN_REQ, E.data.CMD.SEND_CARD_FUN_RSP), this.arr.add(E.data.CMD.GAME_BIG_POT_LIST_REQ, E.data.CMD.GAME_BIG_POT_LIST_RSP), this.arr.add(E.data.CMD.GET_BIG_BLIND_REQ, E.data.CMD.GET_BIG_BLIND_RESP), this.arr.add(E.data.CMD.GET_HAS_BUYIN_REQ, E.data.CMD.GET_HAS_BUYIN_RESP), this.arr.add(E.data.CMD.GET_ROUND_INFO_REQ, E.data.CMD.GET_ROUND_INFO_RESP), this.arr.add(E.data.CMD.GET_UID_HAND_COUNT_REQ, E.data.CMD.GET_UID_HAND_COUNT_RESP), this.arr.add(E.data.CMD.GET_HAND_COUNT_REQ, E.data.CMD.GET_HAND_COUNT_RESP), this.arr.add(E.data.CMD.GET_PLAYER_LATEST_REQ, E.data.CMD.GET_PLAYER_LATEST_RESP), this.arr.add(E.data.CMD.JF_GAME_HAND_REQ, E.data.CMD.JF_GAME_HAND_RESP), this.arr.add(E.data.CMD.JF_ROOM_LIST_REQ, E.data.CMD.JF_ROOM_LIST_RESP), this.arr.add(E.data.CMD.JF_GAME_UUIDS_REQ, E.data.CMD.JF_GAME_UUIDS_RESP), this.arr.add(E.data.CMD.JF_DATA_REQ, E.data.CMD.JF_DATA_RESP), this.registerMsg(r.gate_proto.CMD.SERVER_EXCEPT_NOTIFY, this.NoticeError.bind(this))
        }
        RequestGetData(a, t, _, e = !1) {
            let s = this.arr.get(a),
                r = JSON.stringify(t),
                D = E.data.DataMessage.create({
                    message: r
                }),
                i = E.data.DataMessage.encode(D).finish(),
                R = d.Enum.SeverType.SeverType_RANK,
                M = t.gameid;
            M && M === d.Enum.GameId.Plo5 && (R = d.Enum.SeverType.SererType_World_WPTO), this.sendGameMsg(i, a, 0, R);
            let n = function(a) {
                let t = this.decodePB(E.data.DataMessage, a);
                if (t) {
                    let a;
                    e ? (a = d.http.unzip(t.message), a = JSON.parse(a)) : a = JSON.parse(t.message), _(a)
                }
            }.bind(this);
            this.registerMsg(s, n)
        }
        RequestHandRecord(a, t, _, e, s) {
            const r = E.data.CMD.GAME_HAND_REQ,
                D = {
                    uid: a,
                    game_uuid_js: t,
                    gameid: _,
                    token: e
                };
            this.callbacks[t] = s;
            let i = this.arr.get(r),
                R = JSON.stringify(D),
                M = E.data.DataMessage.create({
                    message: R
                }),
                n = E.data.DataMessage.encode(M).finish(),
                T = d.Enum.SeverType.SeverType_RANK;
            _ && _ === Number(d.Enum.GameId.Plo5) && (T = d.Enum.SeverType.SererType_World_WPTO), this.sendGameMsg(n, r, 0, T), this.registerMsg(i, this.ResponseHandRecord.bind(this))
        }
        ResponseHandRecord(a) {
            let t = this.decodePB(E.data.DataMessage, a);
            if (t) {
                let a;
                a = d.http.unzip(t.message), a = JSON.parse(a);
                const _ = a.game_uuid_js,
                    e = this.callbacks[_];
                e && (e(a), delete this.callbacks[_])
            }
        }
        NoticeError(a) {
            0 == d.appConfig.isProd && d.TT.showMsg("获取data服数据失败", d.Enum.ToastType.ToastTypeError)
        }
    }).g_instance = void 0, D = i)) || D);
    t._RF.pop()
}
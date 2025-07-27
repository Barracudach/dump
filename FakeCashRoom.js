import * as t from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as n from "./FakeMultipleGame.js";
import * as o from "./cv.js";
import * as m from "./RoomData.js";
import * as r from "./RoomData.js";
import * as h from "./FakeRoomBase.js";
import * as d from "./MultipleGameTabButton.js";
import * as l from "./GameDataManager.js";

function main() {
    var u;
    t._RF.push({}, "a84a1xh2vxKNJe7ehxiGsB6", "FakeCashRoom", void 0);
    const {
        ccclass: g,
        property: _
    } = i;
    e("default", g(u = class extends h {
        constructor(...e) {
            super(...e), this.gameId = 0, this.roomId = 0, this._gameName = "", this.leaveTime = 0, this.leaveTimeMoment = 0, this._needRequestSnapShot = !1, this.GAME_DELAY_ACTION_TURN_TAG = 80007
        }
        isPlayerId(e) {
            return o.dataHandler.getUserData().getUserIdByGameID(this.gameId) == e
        }
        get isLoadedStatus() {
            let e = o.roomManager.getRoomByIds(this.gameId, this.roomId);
            return !!e && e.joinedGame
        }
        init(e, t, a) {
            return this.gameId = e, this.roomId = t, this.tabIndex = a, this._needRequestSnapShot = !0, this.registerEvents(), this
        }
        start() {
            this.setRoomName(), o.config.getCurrentScene() == o.Enum.SCENE.HALL_SCENE && this._needRequestSnapShot && o.gameNet.RequestSnapshot(this.roomId)
        }
        setRoomName() {
            let e = o.clubDataMgr.getClubData(this.gameId, this.roomId);
            if (e) this.setTabButtonName(e.room_name);
            else {
                let e = l.getDataInstanceByGameAndRoomId(this.gameId, this.roomId);
                if (e) {
                    const t = e.tRoomData.pkRoomParam.game_name;
                    this.setTabButtonName(t)
                } else this.setTabButtonName("")
            }
        }
        registerEvents() {
            o.MessageCenter.register("on_snapshot_roominfo", this.OnSnapShotRoomInfo.bind(this), this.node), o.MessageCenter.register("on_game_action_turn_noti", this.OnActionTurn.bind(this), this.node), o.MessageCenter.register("on_leave_room_succ", this.OnLeaveRoomSucc.bind(this), this.node), o.MessageCenter.register("on_leave_room_succ_non_zoom", this.OnLeaveRoomSucc.bind(this), this.node), o.MessageCenter.register("on_room_destroy_noti", this.OnDestroyRoom.bind(this), this.node), o.MessageCenter.register("on_game_action_noti", this.OnPlayerAction.bind(this), this.node), o.MessageCenter.register("on_game_holecard_noti", this.OnSendHoleCard.bind(this), this.node), o.MessageCenter.register("on_game_settlement_noti", this.OnSettlement.bind(this), this.node), o.MessageCenter.register("on_leave_seat", this.OnLeaveSeat.bind(this), this.node), o.MessageCenter.register("on_back_seat", this.OnBackSeat.bind(this), this.node), o.MessageCenter.register("on_cash_error", this.OnErrorRoom.bind(this), this.node), o.MessageCenter.register("sync_room_id", this.SyncRoomId.bind(this), this.node), o.MessageCenter.register("add_action_time", this.OnAddActionTime.bind(this), this.node)
        }
        unregisterEvents() {
            o.MessageCenter.unregister("on_snapshot_roominfo", this.node), o.MessageCenter.unregister("on_game_action_turn_noti", this.node), o.MessageCenter.unregister("on_game_action_noti", this.node), o.MessageCenter.unregister("on_leave_room_succ", this.node), o.MessageCenter.unregister("on_leave_room_succ_non_zoom", this.node), o.MessageCenter.unregister("on_room_destroy_noti", this.node), o.MessageCenter.unregister("on_game_action_noti", this.node), o.MessageCenter.unregister("on_game_holecard_noti", this.node), o.MessageCenter.unregister("on_game_settlement_noti", this.node), o.MessageCenter.unregister("on_leave_seat", this.node), o.MessageCenter.unregister("on_back_seat", this.node), o.MessageCenter.unregister("on_cash_error", this.node), o.MessageCenter.unregister("sync_room_id", this.node), o.MessageCenter.unregister("add_action_time", this.node)
        }
        isValidGameData(e) {
            return e && e.tRoomData.u32GameID == this.gameId && e.tRoomData.u32RoomId == this.roomId
        }
        leaveUpdate() {
            var e, t;
            let a = (cc_mtt.vv.DataManager.getNow().getTime() - this.leaveTimeMoment) / 1e3,
                s = this.leaveTime - a;
            if (s <= 0 && (s = 0, this.leaveTime = 0), this.leaveTime <= 0) return this.unschedule(this.leaveUpdate), void this.setTabButtonName();
            (null == (e = this.tabButton) ? void 0 : e.getStatus()) == d.CARDS && this.setTabButtonCards([]), null == (t = this.tabButton) || t.setText(o.config.getStringData("Mtt_Sitting_Out") + " " + Math.floor(Math.abs(s)))
        }
        OnSnapShotRoomInfo(e) {
            if (!this.isValidGameData(e)) return;
            this._needRequestSnapShot = !1, this._gameName = e.tRoomData.pkRoomParam.game_name, -1 == e.tRoomData.i32SelfSeat && (this.removeTimers(), this.setTabButtonName());
            let t = !0,
                a = e.tRoomData.kTablePlayerList.find((e => this.isPlayerId(e.playerid)));
            a && (a.in_game && o.config.getCurrentScene() == o.Enum.SCENE.HALL_SCENE && o.gameNet.RequestGameActionTurn(this.roomId), a.in_game && a.cards.length > 0 && a.last_action != o.Enum.ActionType.Enum_Action_Fold ? (this.setTabButtonCards(a.cards), t = !1) : a.inStay && (this.setTabButtonLeaveCountdown(a.left_stay_time), t = !1)), t && (a ? this.setTabButtonName(this.formatPlayerStake(a.stake, e.tRoomData)) : this.setTabButtonName())
        }
        formatPlayerStake(e, t) {
            let a = o.StringTools.clientGoldByServer(e),
                s = o.StringTools.numberToShowNumber(a);
            return t.getDataPointValue(s)
        }
        OnPlayerAction(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            a.stopAllByTag(this.GAME_DELAY_ACTION_TURN_TAG, this.node);
            const t = e.msg;
            let s = e.gameData.tRoomData.GetTablePlayerBySeatId(t.last_action_seat_id);
            if (s && (s.last_action = t.action_type, this.isPlayerId(s.playerid))) switch (t.action_type) {
                case o.Enum.ActionType.Enum_Action_Check:
                case o.Enum.ActionType.Enum_Action_Call:
                case o.Enum.ActionType.Enum_Action_Bet:
                case o.Enum.ActionType.Enum_Action_Raise:
                case o.Enum.ActionType.Enum_Action_Allin:
                    this.removeTimers();
                    break;
                case o.Enum.ActionType.Enum_Action_Fold:
                    this.removeTimers(), this.setTabButtonCards([]), this.setTabButtonName(this.formatPlayerStake(s.stake, e.gameData.tRoomData))
            }
        }
        setTabButtonName(e) {
            var t;
            e && (this._gameName = e), this._gameName || (this._gameName = ""), null == (t = this.tabButton) || t.setText(this._gameName)
        }
        OnActionTurn(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = e.msg;
            if (this.isPlayerId(t.curr_action_uid))
                if (0 == e.gameData.tGameData.m_u32DelayTime) this.RealActionTurn(this.node, e.msg);
                else {
                    const t = s().call(this.RealActionTurn.bind(this, this.node, e.msg)),
                        a = s().delay(e.gameData.tGameData.m_u32DelayTime / 1e3),
                        i = s().sequence(a, t);
                    i.tag(this.GAME_DELAY_ACTION_TURN_TAG), s(this.node).sequence(i).start()
                }
        }
        RealActionTurn(e, t) {
            if (this.isPlayerId(t.curr_action_uid) && !t.default_fold) {
                let e = [];
                for (let a = 0; a < t.holdcards.length; a++) {
                    let s = new r;
                    s.number = t.holdcards[a].number, s.suit = t.holdcards[a].suit, e.push(s)
                }
                this.setTabButtonCards(e);
                let a = t.action_time;
                a > 0 && this.startTimer(a, a, !1, o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE)
            }
        }
        setTabButtonCards(e) {
            let t = r.getCardIds(e);
            var a, s;
            t ? (null == (a = this.tabButton) || a.setStatus(d.CARDS), null == (s = this.tabButton) || s.setCards(t)) : this.setTabButtonName()
        }
        OnDestroyRoom(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = new m(this.gameId, this.roomId);
            n.instance.onCashGameLeaveRoom(this.tabIndex, t)
        }
        OnLeaveRoomSucc(e) {
            if (!this.isValidGameData(e)) return;
            let t = new m(this.gameId, this.roomId);
            n.instance.onCashGameLeaveRoom(this.tabIndex, t)
        }
        OnErrorRoom(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = new m(this.gameId, this.roomId);
            switch (e.error) {
                case 1250:
                    n.instance.onCashGameLeaveRoom(this.tabIndex, t, !0)
            }
        }
        SyncRoomId(e) {
            this.gameId == e.gameId && this.roomId == e.oldRoomId && (this.roomId = e.newRoomId)
        }
        OnSendHoleCard(e) {
            e && this.isValidGameData(e.gameData) && e.msg.holdcards.length > 0 && this.setTabButtonCards(e.msg.holdcards)
        }
        OnSettlement(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = this.leaveTime > 0;
            if (-1 != e.gameData.tRoomData.i32SelfSeat && !t) {
                this.removeTimers(), this.setTabButtonCards([]);
                let t = e.gameData.tRoomData.GetTablePlayerBySeatId(e.gameData.tRoomData.i32SelfSeat);
                t ? this.setTabButtonName(this.formatPlayerStake(t.stake, e.gameData.tRoomData)) : this.setRoomName(), a.stopAllByTag(this.GAME_DELAY_ACTION_TURN_TAG, this.node)
            }
        }
        OnLeaveSeat(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = e.gameData.tRoomData.GetTablePlayer(e.playerid);
            t && this.isPlayerId(t.playerid) && this.setTabButtonLeaveCountdown(t.left_stay_time)
        }
        OnBackSeat(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = e.gameData.tRoomData.GetTablePlayer(e.playerid);
            t && this.isPlayerId(t.playerid) && (this.leaveTime = -1, this.unschedule(this.leaveUpdate), this.setTabButtonName(this.formatPlayerStake(t.stake, e.gameData.tRoomData)))
        }
        OnAddActionTime(e) {
            if (!e || !this.isValidGameData(e.gameData)) return;
            let t = e.gameData.tRoomData.GetTablePlayerBySeatId(e.msg.action_seatid);
            t && this.isPlayerId(t.playerid) && this.startTimer(e.msg.rest_action_time, e.msg.rest_action_time, !0, o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE)
        }
        onDestroy() {
            this.saveState(), super.onDestroy(), this.unregisterEvents(), this.unschedule(this.leaveUpdate)
        }
        saveState() {
            let e = l.getDataInstanceByGameAndRoomId(this.gameId, this.roomId);
            if (e) {
                let t = e.tRoomData.kTablePlayerList.find((e => this.isPlayerId(e.playerid)));
                t && t.inStay && this.leaveTime > 0 && (t.left_stay_time = this.leaveTime)
            }
        }
        leaveRoom() {
            o.roomManager.forceLeaveRoom(this.gameId, this.roomId), this.node.destroy()
        }
        setTabButtonLeaveCountdown(e) {
            this.leaveTime = e, this.leaveTimeMoment = cc_mtt.vv.DataManager.getNow().getTime(), this.schedule(this.leaveUpdate, 1)
        }
        removeTimers() {
            this.stopTimer(), this.unschedule(this.leaveUpdate)
        }
    }) || u);
    t._RF.pop()
}
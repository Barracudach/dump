import * as t from "./cc.js";
import * as n from "./cc.js";
import * as s from "./cv.js";
import * as i from "./HoneyPot.js";
import * as a from "./HoneyPotHelper.js";

function main() {
    var o;
    t._RF.push({}, "d04274L5ntD+a1gevWKTxQA", "HoneyPotCashGame", void 0);
    const {
        ccclass: r,
        property: g
    } = n;
    let h = e("HoneyPotAction", function(e) {
        return e.TimeOut = "TimeOut", e.Fold = "Fold", e.Check = "Check", e.Call = "Call", e.Raise = "Raise", e.AllIn = "AllIn", e.Other = "Other", e
    }({}));
    e("default", r(o = class extends i {
        constructor(...e) {
            super(...e), this._gameMain = void 0
        }
        initCashGame(e) {
            this._gameMain = e, s.MessageCenter.register("Honeypot_register", this.onNewNodeLoaded.bind(this), this), s.MessageCenter.register("Honeypot_action", this.onActionBtnClick.bind(this), this), s.MessageCenter.register("PlayerActionRequest", this.onRequestAction.bind(this), this), s.MessageCenter.register("cashgame_on_snapshot_roominfo", this.onSnapShotRoomInfo.bind(this), this), s.MessageCenter.register("cashgame_on_startgame_noti", this.onStartGame.bind(this), this), s.MessageCenter.register("cashgame_on_game_action_turn_noti", this.onActionTurn.bind(this), this), s.MessageCenter.register("cashgame_on_game_endround_noti", this.OnEndRound.bind(this), this), s.MessageCenter.register("cashgame_on_game_settlement_noti", this.onSettlement.bind(this), this), s.MessageCenter.register("cashgame_on_destroyroom_noti", this.onDestroyRoom.bind(this), this)
        }
        onNewNodeLoaded(e) {
            e && e.key === this._gameMain && this._isModifyingUI && this.isSelfPlaying() && e.honeyPotItem.forceModifyUI()
        }
        onActionBtnClick(e) {
            e && e.key === this._gameMain && this.stopTurnTracking(e.action)
        }
        onRequestAction(e) {
            if (e && e.table === this._gameMain && s.Enum.ActionType[e.actionType]) switch (e.actionType) {
                case s.Enum.ActionType.Enum_Action_Bet:
                case s.Enum.ActionType.Enum_Action_Raise:
                    this.stopTurnTracking(h.Raise);
                    break;
                case s.Enum.ActionType.Enum_Action_Allin:
                    this.stopTurnTracking(h.AllIn);
                    break;
                case s.Enum.ActionType.Enum_Action_Fold:
                    this.stopTurnTracking(h.Fold);
                    break;
                case s.Enum.ActionType.Enum_Action_Call:
                    this.stopTurnTracking(h.Call)
            }
        }
        onStartGame(e) {
            this._gameMain == e && (a.config.enableChangeHoleCardSize && a.addSelfHoleCardChangeScaleComponent(this._gameMain.getSelfHoleCards().map((e => e.node.parent))), this.startHandTracking())
        }
        onSnapShotRoomInfo(e) {
            this._gameMain == e && this.clearTrackingCurrentTurn()
        }
        OnEndRound(e) {
            this._gameMain == e && null != this._turnStartTime && this.stopTurnTracking(h.TimeOut)
        }
        onActionTurn(e) {
            e && this._gameMain == e.key && (e.isSelfPlayer ? this.startTurnTracking() : null != this._turnStartTime && this.stopTurnTracking(h.TimeOut))
        }
        onSettlement(e) {
            e && this._gameMain == e.key && (this.handId = e.handId, this.stopHandTracking())
        }
        onDestroyRoom(e) {
            this._gameMain == e && this.stopHandTracking()
        }
        isSelfPlaying() {
            return this._gameMain.isSelfPlaying()
        }
        modifyUI() {
            s.MessageCenter.send("Honeypot_modify_UI", {
                key: this._gameMain
            })
        }
        restoreUI() {
            s.MessageCenter.send("Honeypot_restore_UI", {
                key: this._gameMain
            })
        }
        getTableName() {
            var e;
            return null == (e = this._gameMain) ? void 0 : e.getTableName()
        }
        getGameType() {
            return "CashGame"
        }
        onDestroy() {
            this._gameMain && (s.MessageCenter.unregister("Honeypot_register", this), s.MessageCenter.unregister("Honeypot_action", this), s.MessageCenter.unregister("PlayerActionRequest", this), s.MessageCenter.unregister("cashgame_on_snapshot_roominfo", this), s.MessageCenter.unregister("cashgame_on_startgame_noti", this), s.MessageCenter.unregister("cashgame_on_game_action_turn_noti", this), s.MessageCenter.unregister("cashgame_on_game_endround_noti", this), s.MessageCenter.unregister("cashgame_on_game_settlement_noti", this), s.MessageCenter.unregister("cashgame_on_destroyroom_noti", this))
        }
    }) || o);
    t._RF.pop()
}
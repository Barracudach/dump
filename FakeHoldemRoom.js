import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./GameViewLoader.js";
import * as n from "./Pb.js";
import * as r from "./websocket.js";
import * as a from "./websocket.js";
import * as h from "./worldWebsocket.js";
import * as m from "./holdemRoom.js";
import * as l from "./holdemRoom.js";
import * as d from "./FakeMultipleGame.js";
import * as u from "./MultipleGame.js";
import * as g from "./MultipleGameTabButton.js";
import * as c from "./mttController.js";
import * as M from "./UtilsPkw.js";
import * as S from "./MultipleGameJsng.js";
import * as R from "./HttpApiTournamentDetail.js";
import * as T from "./cv.js";

function main() {
    var v;
    e._RF.push({}, "78c9100/K9J6LEy09G73UIN", "FakeHoldemRoom", void 0);
    const {
        ccclass: I,
        property: p
    } = o;
    t("default", I(v = class extends s {
        constructor(...t) {
            super(...t), this.ws = void 0, this.roomMode = void 0, this.tournamentMode = void 0, this.url = void 0, this.tabIndex = void 0, this.tournamentId = void 0, this.roomId = 0, this.playerUserId = void 0, this.playerSeatNum = void 0, this.isExtraTime = !1, this._timeUpAt = 0, this._time = 10, this._isSittingOut = !1, this.startTimerFunction = null, this.isLoadedStatus = !1, this.gameViewLoader = null, this.restTime = 0, this.totalFee = void 0, this.tournamentRoomName = "", this.needSetTableBarNameSngSnapshot = !1, this.currencyKey = null, this._isSngGameReleased = !1, this.onUserTokenRes = t => {
                d.DB("onUserTokenRes :: index : " + this.tabIndex + " " + JSON.stringify(t)), 0 === t.code && (cc_mtt.vv.ConsoleLog.log("token cb"), this.ws && this.ws.verifyTokenEnd(), this.EnterRoom())
            }, this.onRoomSnapshotMsg = (t, e = []) => {
                cc_mtt.vv.ConsoleLog.log("onRoomSnapshotMsg Room id msg:", t.roomId, "this Room id:", this.roomId), this.roomId == t.roomId && t.players.forEach((e => {
                    if (e.userId == this.playerUserId) {
                        this.playerSeatNum = e.seatNum, d.DB("onRoomSnapshotMsg have card .... " + t.holeCards + " SeatNum :: " + this.playerSeatNum), this.isLoadedStatus = !0, this._isSittingOut = !1;
                        const h = e.state == n.holdem.Action.FOLD,
                            l = this.OnNewCards(t.holeCards);
                        if (!h && l && l.length) this._isSittingOut = !1, this.SetCardStatus(t.holeCards);
                        else {
                            var s, o;
                            if (this.tournamentMode == m.MTT) {
                                const t = c.getTournamentDetailById(this.tournamentId, this.tournamentMode);
                                var i, a;
                                if (t) this.currencyKey = null == t ? void 0 : t.Detail.currency, this.totalFee && 0 !== this.totalFee || (this.totalFee = ((null == t || null == (i = t.Detail) ? void 0 : i.RegFee) || 0) + ((null == t || null == (a = t.Detail) ? void 0 : a.SrvFee) || 0))
                            }
                            const t = null !== this.totalFee && void 0 !== this.totalFee ? M.getMttRoomName(this.currencyKey, this.totalFee, this.tournamentMode) : "";
                            this.needSetTableBarNameSngSnapshot = !0, null == (s = this.tabButton) || s.setCards([]), null == (o = this.tabButton) || o.setText(t), this.totalFee && 0 !== this.totalFee || this.updateTotalFee()
                        }
                        var r;
                        if (1 & e.flags) this._isSittingOut = !0, null == (r = this.tabButton) || r.setStatus(g.SITTING_OUT);
                        else if (t.currAct && t.currAct.seatNum == this.playerSeatNum) {
                            let e = !!t.currAct.extendTime,
                                s = t.currAct.countdownTotal,
                                o = t.currAct.countdownLeft;
                            this.startTimer(s, o, e)
                        }
                    }
                }))
            }, this.onAutoPlayMsg = t => {
                var e;
                this.roomId == t.roomId && (cc_mtt.vv.ConsoleLog.log("onAutoPlay", JSON.stringify(t)), t.autoPlay && t.userId == this.playerUserId && (this._isSittingOut = !0, null == (e = this.tabButton) || e.setStatus(g.SITTING_OUT)))
            }, this.onEnterRoomRes = t => {
                d.DB("onEnterRoomRes :: index : " + this.tabIndex + " " + JSON.stringify(t)), 0 === t.code && (this.tournamentId == t.mttId ? this.roomId = t.roomId : d.DB("FakeHoldemRom onEnterRoomRes @@@@@@@@@@@@@@ .... init join Tournament : " + this.tournamentId + " ---\x3e  but enter room msg: " + t.mttId))
            }, this.onNeedActionMsg = t => {
                this.roomId == t.roomId && (cc_mtt.vv.ConsoleLog.log("onNeedActionMsg", JSON.stringify(t)), t.minBetCoin && t.seatNum == this.playerSeatNum && this.startTimer(t.countDown, t.countDown, !1, !0))
            }, this.onHoleCardsMsg = t => {
                t.roomId == this.roomId && (d.DB("onHoleCardsMsg ::: roomIndex :  " + this.tabIndex + JSON.stringify(t)), this.SetCardStatus(t.cards))
            }, this.onMttRestTimeNotifyMsg = t => {
                var e, s;
                t.mttId != this.tournamentId || t.RoomId && t.RoomId != this.roomId || (t.RestType == n.mttPro.RestTime_Type.RestTime_Type_MIDFIELD || t.RestType == n.mttPro.RestTime_Type.RestTime_Type_FINALS ? (this.restTime = cc_mtt.vv.DataManager.getNow().getTime() + 1e3 * t.RestTimeDuration, null == (e = this.tabButton) || e.setBreakingTime(this.restTime)) : null == (s = this.tabButton) || s.stopBreakTime())
            }, this.onMttRoomSnapShot = t => {
                var e;
                t.roomId == this.roomId && (cc_mtt.vv.ConsoleLog.log("onMttRoomSnapshot", JSON.stringify(t)), t.RestLeftTime > 0 && (this.restTime = cc_mtt.vv.DataManager.getNow().getTime() + 1e3 * t.RestLeftTime, null == (e = this.tabButton) || e.setBreakingTime(this.restTime)))
            }, this.onSngRoomSnapShotMsg = t => {
                if (t.roomId == this.roomId) {
                    var e, s;
                    if (this._isSittingOut) return void(null == (e = this.tabButton) || e.setStatus(g.SITTING_OUT));
                    if (this.totalFee = t.regFee, t.srvFee && (this.totalFee += t.srvFee), this.tournamentRoomName = t.roomName, t.sngStatus == n.mttPro.Sng_Status.Sng_Status_Not_Start || t.sngStatus == n.mttPro.Sng_Status.Sng_Status_Pause || this.needSetTableBarNameSngSnapshot) null == (s = this.tabButton) || s.setText(M.getMttRoomName(null, this.totalFee, this.tournamentMode)), this.needSetTableBarNameSngSnapshot = !1
                }
            }, this.onRewardMsg = t => {
                if (t.mttId == this.roomId && this.tournamentMode == m.SNG) {
                    var e;
                    if (this.totalFee) null == (e = this.tabButton) || e.setText(M.getMttRoomName(null, this.totalFee, this.tournamentMode));
                    S.cacheSngRankInfo(t.mttId, this._isSngGameReleased, t)
                }
            }, this.onSngRoomRankNotifyMsg = t => {
                t.roomId == this.roomId && (this._isSngGameReleased = !0, S.setSngCacheRankGameReleased(t.roomId, !0), S.setSngCacheGameModelWatchingRoom(t.roomId, !1))
            }, this.onSeatOccupiedMsg = t => {
                t.roomId == this.roomId && (cc_mtt.vv.ConsoleLog.log("FakeMultipleGame onSeatOccupiedMsg", JSON.stringify(t)), t.userId == this.playerUserId && (this.playerSeatNum = t.seatNum))
            }, this.onSeatEmptyMsg = t => {
                t.roomId == this.roomId && (cc_mtt.vv.ConsoleLog.log("FakeMultipleGame onSeatEmptyMsg", JSON.stringify(t)), t.seatNum == this.playerSeatNum && (this.playerSeatNum = null))
            }
        }
        get tabButton() {
            var t;
            return null == (t = d.instance) ? void 0 : t._multipleGameTabButtons[this.tabIndex]
        }
        initHoldemRoom(t, e, s, o) {
            this.roomMode = t, this.tournamentMode = e, this.tabIndex = o, this.tournamentId = s, this.playerUserId = cc_mtt.vv.DataManager.userId, this.isLoadedStatus = !1, this.gameViewLoader = new i
        }
        EnterRoom() {
            if (T.config.getCurrentScene() == T.Enum.SCENE.HALL_SCENE)
                if (this.tournamentMode == m.MTT) {
                    let t = {
                        mttId: this.tournamentId
                    };
                    this.ws.Send(n.mttPro.MttEnterGameReq.create(t))
                } else if (this.tournamentMode == m.SNG) {
                let t = {
                    roomId: this.tournamentId
                };
                this.ws.Send(n.holdem.EnterRoomReq.create(t))
            }
        }
        connectWebSocket() {
            const {
                holdem: t,
                mttPro: e,
                commonProto: s
            } = n, o = {
                ...t.MessageId,
                ...e.MessageId
            };
            this.roomMode == s.MTT_GAME_MODE.NLH || this.roomMode == s.MTT_GAME_MODE.SHORT_DECK ? this.tournamentMode == m.MTT ? this.url = a.HOLDEM_MTT : this.tournamentMode == m.NORMAL ? this.url = a.HOLDEM : this.tournamentMode != m.SNG && this.tournamentMode != m.AOF || (this.url = a.HOLDEM_SNG) : this.tournamentMode == m.MTT ? this.url = a.HOLDEM_MTT : this.tournamentMode == m.SNG ? this.url = a.HOLDEM_SNG : this.url = a.OMAHA_SNG, this.ws && this.RemoveMessageHandler();
            let i = this.ws = l[this.url];
            if (this.setConnectAndCallBack(), d.instance) {
                let t = d.currentMultipleGameIndex;
                d.instance.connectGame(u.HOLDEM, t, this.url)
            } else h.GameSocketNotConnect(this.url) ? (i = this.ws = l[this.url] = new r(this.url, {
                ...e,
                ...t,
                MessageId: o
            }), this.url == a.HOLDEM_SNG ? h.gameSNGSocket = this.ws : h.gameSocket = this.ws) : i = this.url == a.HOLDEM_SNG ? this.ws = l[this.url] = h.gameSNGSocket : this.ws = l[this.url] = h.gameSocket, this.ws.setReConnect();
            this.RemoveMessageHandler(), this.AddMessageHandler()
        }
        AddMessageHandler() {
            const {
                holdem: t,
                mttPro: e,
                commonProto: s
            } = n, o = {
                ...t.MessageId,
                ...e.MessageId
            };
            this.ws && (this.ws.AddMessageHandler(o.UserTokenRes, this.onUserTokenRes), this.ws.AddMessageHandler(o.EnterRoomRes, this.onEnterRoomRes), this.ws.AddMessageHandler(o.NeedActionMsg, this.onNeedActionMsg), this.ws.AddMessageHandler(o.RoomSnapshotMsg, this.onRoomSnapshotMsg), this.ws.AddMessageHandler(o.HoleCardsMsg, this.onHoleCardsMsg), this.ws.AddMessageHandler(o.AutoPlayMsg, this.onAutoPlayMsg), this.ws.AddMessageHandler(o.MttRestTimeNotifyMsg, this.onMttRestTimeNotifyMsg), this.ws.AddMessageHandler(o.MttRoomSnapshotRes, this.onMttRoomSnapShot), this.ws.AddMessageHandler(o.RewardMsg, this.onRewardMsg), this.ws.AddMessageHandler(o.SngRoomSnapShotMsg, this.onSngRoomSnapShotMsg), this.ws.AddMessageHandler(o.SngRoomRankNotifyMsg, this.onSngRoomRankNotifyMsg), this.ws.AddMessageHandler(o.SeatOccupiedMsg, this.onSeatOccupiedMsg), this.ws.AddMessageHandler(o.SeatEmptyMsg, this.onSeatEmptyMsg)), this.gameViewLoader.bindMessageHandler()
        }
        RemoveMessageHandler() {
            const {
                holdem: t,
                mttPro: e,
                commonProto: s
            } = n, o = {
                ...t.MessageId,
                ...e.MessageId
            };
            this.ws && (this.ws.RemoveMessageHandler(o.UserTokenRes, this.onUserTokenRes), this.ws.RemoveMessageHandler(o.EnterRoomRes, this.onEnterRoomRes), this.ws.RemoveMessageHandler(o.NeedActionMsg, this.onNeedActionMsg), this.ws.RemoveMessageHandler(o.RoomSnapshotMsg, this.onRoomSnapshotMsg), this.ws.RemoveMessageHandler(o.HoleCardsMsg, this.onHoleCardsMsg), this.ws.RemoveMessageHandler(o.AutoPlayMsg, this.onAutoPlayMsg), this.ws.RemoveMessageHandler(o.MttRestTimeNotifyMsg, this.onMttRestTimeNotifyMsg), this.ws.RemoveMessageHandler(o.MttRoomSnapshotRes, this.onMttRoomSnapShot), this.ws.RemoveMessageHandler(o.RewardMsg, this.onRewardMsg), this.ws.RemoveMessageHandler(o.SngRoomSnapShotMsg, this.onSngRoomSnapShotMsg), this.ws.RemoveMessageHandler(o.SngRoomRankNotifyMsg, this.onSngRoomRankNotifyMsg), this.ws.RemoveMessageHandler(o.SeatOccupiedMsg, this.onSeatOccupiedMsg), this.ws.RemoveMessageHandler(o.SeatEmptyMsg, this.onSeatEmptyMsg)), this.gameViewLoader.unbindMessageHandler()
        }
        update() {
            if (!d.instance || this._isSittingOut) return;
            let t = this._timeUpAt - Date.now();
            if (t >= 0) {
                var e;
                let s = t / this._time / 1e3;
                s = Math.max(s, 0), null == (e = this.tabButton) || e.setTimeProgress(s, t, this.isExtraTime)
            } else {
                var s;
                null == (s = this.tabButton) || s.hideTimeBar()
            }
        }
        onDestroy() {
            this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), this.Destroy()
        }
        Destroy() {
            this.LeaveGame(), this.RemoveMessageHandler(), this.unscheduleAllCallbacks()
        }
        LeaveGame() {
            cc_mtt.vv.ConsoleLog.log("leave game"), this.roomId && this.ws && this.ws.isConnected() && this.ws.Send(n.holdem.LeaveRoomReq.create({
                roomId: this.roomId
            })), cc_mtt.vv.DataManager.currentRoomID = 0
        }
        startTimer(t, e, s = !1, o = !1) {
            var i, n;
            d.instance && (this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), this.startTimerFunction = setTimeout((() => {
                var o;
                void 0 === e && (e = t), this._time = t, this._timeUpAt = Date.now() + 1e3 * e, this.isExtraTime = s, null == (o = this.tabButton) || o.setTimeType(s)
            }), 5), null == (i = this.tabButton) || i.showTimeBar(), null == (n = this.tabButton) || n.setTriggerStartTime(o))
        }
        StopTimer() {
            var t;
            d.instance && (this._timeUpAt = 0, this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), null == (t = this.tabButton) || t.hideTimeBar())
        }
        SetCardStatus(t) {
            if (this._isSittingOut) return;
            let e = this.OnNewCards(t);
            d.instance.setTableBarCardStatus(this.tabIndex, e)
        }
        OnNewCards(t) {
            const e = [];
            return t && t.length && t.forEach((t => (e.push(t), null))), e
        }
        setConnectAndCallBack() {
            const t = cc_mtt.vv.DataManager.worldNetwork;
            !t || t.isConnected() || t.isReconnecting || (t.setReConnect(), t.connect("fakeHR_set_cb")), !this.ws || this.ws.isConnected() || this.ws.isReconnecting || (this.ws.setReConnect(), this.ws.reConnect())
        }
        updateTotalFee() {
            this.tournamentId && R.requestMttTournamentDetail(this.tournamentId, (t => {
                if (!t.ErrorCode) {
                    var e;
                    this.totalFee = (t.TournamentDetail.RegFee || 0) + (t.TournamentDetail.SrvFee || 0);
                    const s = null !== this.totalFee && void 0 !== this.totalFee ? M.getMttRoomName(this.currencyKey, this.totalFee, this.tournamentMode) : "";
                    null == (e = this.tabButton) || e.setText(s)
                }
            }), (t => {
                cc_mtt.vv.ConsoleLog.log("updateTotalFee requestMttTournamentDetail error", this.tournamentId, t)
            }))
        }
    }) || v);
    e._RF.pop()
}
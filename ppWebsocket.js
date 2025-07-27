import * as t from "./cc.js";
import * as r from "./websocket.js";
import * as s from "./mttconfig.js";
import * as n from "./Pb.js";
import * as a from "./cv.js";

function main() {
    t._RF.push({}, "0bb6egxq89GtpzKMc05sH1c", "ppWebsocket", void 0);
    e("PpWebSocket", class extends r {
        constructor(e) {
            super(e, {
                ...n.pineapple,
                ...n.mttPro,
                MessageId: {
                    ...n.pineapple.MessageId,
                    ...n.mttPro.MessageId
                }
            }), this.reConnected = 0, this.cb = void 0
        }
        init() {
            return this.cb = {
                on: (e, t, r) => {
                    this.RemoveMessageHandler(e), this.AddMessageHandler(e, r ? t.bind(r) : t)
                },
                off: (e, t, r) => {
                    this.RemoveMessageHandler(e, r ? t.bind(r) : t)
                }
            }, this
        }
        send(e, t) {
            const r = this.pbMessages[e];
            if (require(s.PineappleGlobal).printGameFlow("PpWebSocket send", " to server with", [this.pbMessages[e], e, t], !1), r) {
                const s = r.create(t);
                return this.Send(s, e)
            }
            cc_mtt.vv.ConsoleLog.warn("error pb", e, this.pbIds, this.pbMessages, t)
        }
        requestUserToken() {
            let e = {
                token: cc_mtt.vv.DataManager.token,
                userId: cc_mtt.vv.DataManager.userId,
                hideHole: a.tools.isGameplayMuckLosingHands()
            };
            this.send(n.pineapple.MessageId.UserTokenReq, e)
        }
        requestRoomConfReq() {
            let e = {
                id: require(s.PineappleGame)._id
            };
            this.send(n.pineapple.MessageId.RoomConfReq, e)
        }
        requestEnterLevel() {
            let e = {
                levelId: require(s.PineappleGame)._currentLevelID
            };
            this.send(n.pineapple.MessageId.EnterLevelReq, e)
        }
        requestEnterRoom() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID
            };
            this.send(n.pineapple.MessageId.EnterRoomReq, e)
        }
        requestEnterMTT() {
            let e = {
                mttId: require(s.PineappleGame)._currentMTTID,
                roomId: require(s.PineappleGame)._mttReviewTableId,
                userId: require(s.PineappleGame)._mttReviewPlayerId
            };
            this.send(n.mttPro.MessageId.MttEnterGameReq, e)
        }
        requestReJoinReq(e) {
            this.send(n.mttPro.MessageId.ReJoinReq, e)
        }
        requestEmoji(e) {
            this.checkRoomIdLevelIdBeforeSend((() => {
                this.send(n.pineapple.MessageId.Emoji, e)
            }))
        }
        requestAnimReq(e) {
            this.checkRoomIdLevelIdBeforeSend((() => {
                this.send(n.pineapple.MessageId.AnimReq, e)
            }))
        }
        requestPlayerReady() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID
            };
            this.send(n.pineapple.MessageId.ReadyReq, e)
        }
        requestPlayerPlacedCards(e) {
            e.roomId = require(s.PineappleGame)._currentRoomID, require(s.PineappleGlobal).printGameFlow(this.requestPlayerPlacedCards.name, "start sending cards = ", [e], !1), this.send(n.pineapple.MessageId.PlaceCardsReq, e), require(s.PineappleGlobal).printGameFlow(this.requestPlayerPlacedCards.name, "after sending cards = ", [e], !1)
        }
        requestSettlementRoom(e) {
            let t = {
                levelId: require(s.PineappleGame)._currentLevelID,
                noCheckItem: e
            };
            this.send(n.pineapple.MessageId.SettleNextReq, t)
        }
        requestPlayerLeaveRoom() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID
            };
            this.send(n.pineapple.MessageId.PlayerLeaveRoomReq, e)
        }
        requestPlayerLeaveSeat(e) {
            let t = {
                roomId: e
            };
            this.send(n.pineapple.MessageId.PlayerLeaveSeatReq, t)
        }
        checkRoomIdLevelIdBeforeSend(e) {
            0 != require(s.PineappleGame)._currentRoomID || 0 != require(s.PineappleGame)._currentLevelID ? e ? e() : require(s.PineappleGlobal).printGameFlow(this.checkRoomIdLevelIdBeforeSend.name, " sending request's is null or undefined ", [e], !1) : require(s.PineappleGlobal).printGameFlow(this.checkRoomIdLevelIdBeforeSend.name, "no send request because room Id is 0 and level id is 0", [require(s.PineappleGame)._currentRoomID, require(s.PineappleGame)._currentLevelID], !1)
        }
        requestCancelAutoPlay() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID,
                levelId: require(s.PineappleGame)._currentLevelID
            };
            this.checkRoomIdLevelIdBeforeSend((() => {
                this.send(n.pineapple.MessageId.CancelAutoPlayReq, e)
            }))
        }
        requestTakeInCoin(e) {
            this.send(n.pineapple.MessageId.TakeInCoinReq, e)
        }
        requestPlayerSitDown(e) {
            this.send(n.pineapple.MessageId.PlayerSitDownReq, e)
        }
        requestRoomSnapshot() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID,
                levelId: require(s.PineappleGame)._currentLevelID
            };
            this.send(n.pineapple.MessageId.RoomSnapshotReq, e)
        }
        requestTournamentSnapshot() {
            let e = {
                MttId: require(s.PineappleGame)._currentMTTID
            };
            this.send(n.mttPro.MessageId.MttRoomSnapshotReq, e)
        }
        requestCancelTakeIn() {
            let e = {
                roomId: require(s.PineappleGame)._currentRoomID,
                levelId: require(s.PineappleGame)._currentLevelID
            };
            this.send(n.pineapple.MessageId.CancelTakeInReq, e)
        }
        requestRoomBill() {
            this.checkRoomIdLevelIdBeforeSend((() => {
                let e = {
                    roomId: require(s.PineappleGame)._currentRoomID,
                    levelId: require(s.PineappleGame)._currentLevelID
                };
                this.send(n.pineapple.MessageId.RoomBillReq, e)
            }))
        }
        requestMttRealTimeRecord(e) {
            let t = {
                roomId: require(s.PineappleGame)._currentRoomID,
                mttId: require(s.PineappleGame)._currentMTTID,
                fullData: e
            };
            this.send(n.mttPro.MessageId.MttRealTimeRecordReq, t)
        }
        requestJackpotInfo() {
            this.send(n.pineapple.MessageId.JackpotInfoReq, {})
        }
        requestMttPineAppleStadium() {
            let e = {
                mttId: require(s.PineappleGame)._currentMTTID
            };
            this.send(n.mttPro.MessageId.MttPineAppleStadiumReq, e)
        }
        requestMttUserInfo(e, t) {
            this.send(n.mttPro.MessageId.MttUserInfoReq, {
                mttId: e,
                userId: t
            })
        }
    }), t._RF.pop()
}
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as g from "./cc.js";
import * as c from "./cc.js";
import * as R from "./cc.js";
import * as M from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./Holdem_Room_ts.js";
import * as D from "./Pb.js";
import * as _ from "./mttconfig.js";
import * as y from "./CommonTools.js";
import * as I from "./worldWebsocket.js";
import * as T from "./MultipleGame.js";
import * as f from "./holdem_game_records.js";
import * as P from "./MTTConnector.js";
import * as A from "./LoadingBlocker.js";
import * as b from "./NodeTools.js";

function main() {
    var C, G, S, k, v, N, L, E, w, O, H, B, q, x, U, V, J, F, z, j, K, W, Y, Z, Q, X, $, ee, ae, se, te, oe, ie, de, ne, le;
    t._RF.push({}, "9d18cMKiwROG796yWKZddch", "HoldemReplayPrefab", void 0);
    const {
        ccclass: me,
        property: re
    } = c;
    e("HoldemReplayPrefab", (C = re(o), G = re(i), S = re(i), k = re(d), v = re(n), N = re(l), L = re(l), E = re(m), w = re(i), O = re(i), H = re([i]), B = re(o), q = re(o), x = re(n), U = re(i), V = re(i), J = re(r), me((j = a((z = class e extends h {
        constructor(...e) {
            super(...e), s(this, "backButton", j, this), s(this, "gameViewParent", K, this), s(this, "replayUI", W, this), s(this, "slider", Y, this), s(this, "gameViewPrefab", Z, this), s(this, "labelCurrent", Q, this), s(this, "labelEnd", X, this), s(this, "playPauseButtonSprite", $, this), s(this, "iconPlay", ee, this), s(this, "iconPause", ae, this), s(this, "timeScalesSpriteNode", se, this), s(this, "sliderButton", te, this), s(this, "blockGameViewButton", oe, this), s(this, "loadingPrefab", ie, this), s(this, "loadingLayer", de, this), s(this, "blockLayer", ne, this), this.loading = null, s(this, "timeline", le, this), this._holdemRoom = null, this._timeScaleList = [1, 2], this._gameRoundData = [], this._onBackAction = null, this._gameRecordNode = null, this._gameRecord = null, this._selfPlayerId = 0, this._startTime = -1, this._pauseTime = -1, this._isPause = !0, this._currentTime = 0, this._timeLineLength = 0, this._indexI = 0, this._indexJ = 0, this._timeScale = 1, this._lastUpdateTime = -1, this._basicTimeStep = 3e3, this._lastBasicTimeStep = 4e3, this._lastBasicTimeOffset = 2e3, this._isSliderButtonTouch = !1, this._targetProgress = -1, this._timeLineChangeTimeout = null, this._changePageTimeout = null, this._hasInitHoldemRoom = !1, this._lastClickControlButtonTime = -5e3, this._clickControlButtonInterval = 1e3
        }
        onLoad() {
            this.loading = u(this.loadingPrefab), this.loading.parent = this.loadingLayer, cc_mtt.vv.DataManager.isWebReplay && (this.backButton.node.active = !1)
        }
        onDestroy() {
            this.unscheduleAllCallbacks(), this.resetPage(), this._timeLineChangeTimeout && clearTimeout(this._timeLineChangeTimeout), this._changePageTimeout && clearTimeout(this._changePageTimeout), T.instance || (I.getInstance().close(!0), I.dropInstance())
        }
        start() {
            this.sliderButton.node.on(i.EventType.TOUCH_START, (e => {
                this.onSliderButtonTouchStart()
            })), this.sliderButton.node.on(i.EventType.TOUCH_END, (e => {
                this.onSliderButtonTouchEnd()
            })), this.sliderButton.node.on(i.EventType.TOUCH_CANCEL, (e => {
                this.onSliderButtonTouchEnd()
            })), this.sliderButton.node.on(i.EventType.TOUCH_MOVE, (e => {
                this.onSliderButtonTouchMove()
            })), this._setScalePanel()
        }
        update() {
            if (!this._isPause) {
                let e = (new Date).getTime();
                this._currentTime += this.getDeltaTime(e), this.labelCurrent.string = this.formatTime(Math.min(this._currentTime, this._timeLineLength)), this._indexI < this._gameRoundData.length && this._indexJ < this._gameRoundData[this._indexI].GameRoundData.DecodedActions.length && this._gameRoundData[this._indexI].GameRoundData.DecodedActions[this._indexJ].ReplayStartTime <= this._currentTime && (0 == this._indexJ && this.setPlayer(this._indexI), this.applyMsg(this._gameRoundData[this._indexI].GameRoundData.DecodedActions[this._indexJ]), this._indexJ++, this._indexJ >= this._gameRoundData[this._indexI].GameRoundData.DecodedActions.length && (this._indexJ = 0, this._indexI++, this.changeStoreInfo(this._indexI, 4)));
                let a = Math.min(this._currentTime / this._timeLineLength, 1);
                this.setProgress(a), a >= 1 && this.resetVideoPlayer()
            }
        }
        changeStoreInfo(e, a = 0) {
            e < this._gameRoundData.length && (this.setEnterRoomRes(e), this._holdemRoom.store.setAnimate(a))
        }
        getDeltaTime(e) {
            let a = (e - this._lastUpdateTime) * this._timeScale;
            return this._lastUpdateTime = e, a
        }
        setTimeScale(e) {
            this._timeScale = e, g.getScheduler().setTimeScale(this._timeScale)
        }
        setTimeScaleIndex(e) {
            this._timeScale = this._timeScaleList[e], this.hideAllTimeScaleSpriteNode(), this.timeScalesSpriteNode[e].active = !0, this.setTimeScale(this._timeScale)
        }
        setProgress(e) {
            this.slider.progress = e, this.timeline.progress = e
        }
        convertMttGameModeToGameLevelListID(e, a) {
            switch (e) {
                case D.commonProto.GAME_CATEGORY.GEN_PP:
                    switch (a) {
                        case D.commonProto.MTT_GAME_MODE.PP:
                        case D.commonProto.MTT_GAME_MODE.NLH:
                        case D.commonProto.MTT_GAME_MODE.SHORT_DECK:
                        case D.commonProto.MTT_GAME_MODE.OMAHA:
                            return 0
                    }
                case D.commonProto.GAME_CATEGORY.MTT:
                    switch (a) {
                        case D.commonProto.MTT_GAME_MODE.PP:
                            return 0;
                        case D.commonProto.MTT_GAME_MODE.NLH:
                        case D.commonProto.MTT_GAME_MODE.SHORT_DECK:
                        case D.commonProto.MTT_GAME_MODE.OMAHA:
                            return _.GAME_LEVEL_LIST_ID.MTT
                    }
                case D.commonProto.GAME_CATEGORY.SNG:
                    switch (a) {
                        case D.commonProto.MTT_GAME_MODE.PP:
                            return 0;
                        case D.commonProto.MTT_GAME_MODE.NLH:
                            return _.GAME_LEVEL_LIST_ID.SNG;
                        case D.commonProto.MTT_GAME_MODE.SHORT_DECK:
                            return 0;
                        case D.commonProto.MTT_GAME_MODE.OMAHA:
                            return _.GAME_LEVEL_LIST_ID.SNG
                    }
                case D.commonProto.GAME_CATEGORY.SNG_AOF:
                    switch (a) {
                        case D.commonProto.MTT_GAME_MODE.PP:
                            return 0;
                        case D.commonProto.MTT_GAME_MODE.NLH:
                            return _.GAME_LEVEL_LIST_ID.AOF;
                        case D.commonProto.MTT_GAME_MODE.SHORT_DECK:
                            return 0;
                        case D.commonProto.MTT_GAME_MODE.OMAHA:
                            return _.GAME_LEVEL_LIST_ID.AOF
                    }
                case D.commonProto.GAME_CATEGORY.LOOP_PP:
                    switch (a) {
                        case D.commonProto.MTT_GAME_MODE.PP:
                        case D.commonProto.MTT_GAME_MODE.NLH:
                        case D.commonProto.MTT_GAME_MODE.SHORT_DECK:
                        case D.commonProto.MTT_GAME_MODE.OMAHA:
                            return 0
                    }
            }
            return 0
        }
        canControl() {
            let e = cc_mtt.vv.DataManager.getNow().getTime(),
                a = e - this._lastClickControlButtonTime > this._clickControlButtonInterval;
            return a && (this._lastClickControlButtonTime = e), a
        }
        previousHand() {
            this.canControl() && (this._gameRecord.previousButton(), this._processPreNextHand())
        }
        nextHand() {
            this.canControl() && (this._gameRecord.nextButton(), this._processPreNextHand())
        }
        _processPreNextHand() {
            this.backToZero(), this._changePageTimeout && (clearInterval(this._changePageTimeout), this._changePageTimeout = null), this._changePageTimeout = setInterval((() => {
                var e;
                let a = this._gameRecord.getDataFromRealTimeReplay();
                null != (e = a[0]) && e.GameRoundData && (this.setPage(a), clearInterval(this._changePageTimeout), this._changePageTimeout = null)
            }), 300)
        }
        setPage(a, s = null, t = null) {
            var o;
            this._gameRoundData = a, null !== s && (this._onBackAction = s), R(t) && (this._gameRecordNode = t, this._gameRecord = this._gameRecordNode.getComponent(f));
            let i = this._gameRoundData[0],
                d = {
                    Detail: {
                        GameMode: i && i.GameRoundData ? i.GameRoundData.gameId : D.commonProto.MTT_GAME_MODE.NLH,
                        Id: cc_mtt.vv.DataManager.replayGameResultDetail.Id,
                        Seats: cc_mtt.vv.DataManager.replayGameResultDetail.PlayerCount,
                        TournamentName: cc_mtt.vv.DataManager.replayGameResultDetail.Name,
                        PlayOnJoint: cc_mtt.vv.DataManager.replayGameResultDetail.PlayOnJoint
                    }
                };
            if (cc_mtt.vv.DataManager.gameMode = cc_mtt.vv.DataManager.replayGameResultDetail.ActualGameMode ? cc_mtt.vv.DataManager.replayGameResultDetail.ActualGameMode : this.convertMttGameModeToGameLevelListID(cc_mtt.vv.DataManager.replayGameResultDetail.TypeId, cc_mtt.vv.DataManager.replayGameResultDetail.GameMode), cc_mtt.vv.DataManager.currentGameInfo = d, cc_mtt.vv.DataManager.gameViewType = null == (o = this._gameRoundData[0].GameRoundData) ? void 0 : o.gameId, !T.instance && cc_mtt.vv.DataManager && (cc_mtt.vv.DataManager.isReplay = !0), this._selfPlayerId = cc_mtt.vv.DataManager.userId, !this._holdemRoom) {
                var n;
                if (u(this.gameViewPrefab).parent = this.gameViewParent, this._holdemRoom = this.gameViewParent.getComponentInChildren(p), this._holdemRoom) this._holdemRoom.isReplay = !0, this._holdemRoom.store && (this._holdemRoom.store.playerUserId = this._selfPlayerId, this._holdemRoom.store.isReplay = !0), this._holdemRoom._replayRoomId = null == (n = this._gameRoundData[0]) || null == (n = n.GameRoundData) ? void 0 : n.roomId, this._holdemRoom.hideReplayUI()
            }
            e.decodeAllActions(this._gameRoundData), cc_mtt.vv.ConsoleLog.log("gameRoundData before", JSON.stringify(this._gameRoundData)), this.processAction(), this.calculateTime(), this.setReplayInfo(), this._holdemRoom && this.backToZero(), cc_mtt.vv.ConsoleLog.log("gameRoundData after", JSON.stringify(this._gameRoundData)), cc_mtt.vv.ConsoleLog.log("gameRoundData after", this._gameRoundData), this.setEnterRoomRes(0), this.setPlayer(0), this.resetTimeScale(), this._startTime = (new Date).getTime(), this._lastUpdateTime = this._startTime, this.changeStoreInfo(0), this.customPlay(!0), A.hide("HoldemReplayPrefab"), this.scheduleOnce((() => {
                this._hasInitHoldemRoom = !0
            }), 1)
        }
        setReplayInfo() {}
        customPlay(e) {
            this.play()
        }
        resetTimeScale() {
            this.setTimeScaleIndex(0)
        }
        stopAllSchedule() {
            for (const e in this._holdemRoom._players) this._holdemRoom._players[e].unscheduleAllCallbacks();
            this._holdemRoom.unscheduleAllCallbacks()
        }
        Clone(e, a) {
            let s = null;
            switch (a) {
                case D.holdem.MessageId.RoomSnapshotMsg:
                    s = new D.holdem.RoomSnapshotMsg, s.roomId = e.roomId, s.pots = e.pots.slice(), s.players = [];
                    for (let a in e.players) {
                        let t = {
                            userId: e.players[a].userId,
                            avatar: e.players[a].avatar,
                            avatarFrame: e.players[a].avatarFrame,
                            nickName: e.players[a].nickName,
                            seatNum: e.players[a].seatNum,
                            deskCoin: e.players[a].deskCoin,
                            leftCoin: e.players[a].leftCoin,
                            state: e.players[a].state,
                            flags: e.players[a].flags,
                            holeCards: e.players[a].holeCards.slice(),
                            gender: e.players[a].gender
                        };
                        s.players.push(t)
                    }
                    s.dealerPos = e.dealerPos, s.straddlePos = e.straddlePos, s.boardCards = e.boardCards.slice(), s.holeCards = e.holeCards.slice(), e.seatNum && (s.currAct = {
                        seatNum: e.seatNum,
                        optAction: e.optAction,
                        optCoin: e.optCoin,
                        minBetCoin: e.minBetCoin,
                        countdownTotal: e.countdownTotal,
                        countdownLeft: e.countdownLeft
                    }), s.visitors = e.visitors.slice(), s.state = e.state, s.bbPos = e.bbPos, s.sbPos = e.sbPos, s.code = e.code, s.mttId = e.mttId, s.outPlayerSeatNum = e.outPlayerSeatNum.slice(), s.ReplayMessageType = D.holdem.MessageId.RoomSnapshotMsg
            }
            return s
        }
        buttonClickEvent(e, a) {
            this.canControl() && (this._isPause = !0, this._isSliderButtonTouch = !1, this.setIJTimeLine(a), this.customPlay(!1))
        }
        setIJTimeLine(e) {
            this.stopAllSchedule();
            let a = this.timeline.progress * this._timeLineLength;
            "+" == e && (a + 5e3 <= this._timeLineLength ? (this._currentTime = a + 5e3, this.timeline.progress = this._currentTime / this._timeLineLength) : this._currentTime = a), "-" == e && (a - 5e3 >= 0 ? (this._currentTime = a - 5e3, this.timeline.progress = this._currentTime / this._timeLineLength) : this._currentTime = a), this._indexI = 0, this._indexJ = 0;
            let s = !1;
            for (let e = 0; e < this._gameRoundData.length; e++)
                for (let a = 0; a < this._gameRoundData[e].GameRoundData.DecodedActions.length && !(this._currentTime < this._gameRoundData[e].GameRoundData.DecodedActions[a].ReplayStartTime); a++) this._indexI = e, this._indexJ = a, s = !0;
            cc_mtt.vv.ConsoleLog.log("gameRoundData this._currentTime", this._currentTime, this._indexI, this._indexJ, this._timeLineLength);
            let t = this._indexI,
                o = this.Clone(this._gameRoundData[t].GameRoundData.ReplaySnapShot, D.holdem.MessageId.RoomSnapshotMsg);
            cc_mtt.vv.ConsoleLog.log("gameRoundData onRoomSnapshot", o, " object-> ", JSON.stringify(o), cc_mtt.vv.DataManager.getNow(), s);
            let i = null,
                d = null;
            if (s) {
                this.changeStoreInfo(t);
                for (let e = 0; e <= this._indexJ; e++) {
                    let a = this._gameRoundData[t].GameRoundData.DecodedActions[e];
                    if (a && a.ReplayMessageType) {
                        let s = -1;
                        switch (a.ReplayMessageType) {
                            case D.holdem.MessageId.UserTokenReq:
                            case D.holdem.MessageId.UserTokenRes:
                            case D.holdem.MessageId.EnterRoomReq:
                                break;
                            case D.holdem.MessageId.EnterRoomRes:
                                o.roomId == a.roomId && (o.mttId = this._gameRoundData[t].GameRoundData.levelId);
                                break;
                            case D.holdem.MessageId.RoomSnapshotReq:
                                break;
                            case D.holdem.MessageId.RoomSnapshotMsg:
                                o.roomId == a.roomId && (o = this.Clone(a, a.messageId));
                                break;
                            case D.holdem.MessageId.SitDownReq:
                            case D.holdem.MessageId.SitDownRes:
                            case D.holdem.MessageId.NeedMoreCoinMsg:
                            case D.holdem.MessageId.LeaveRoomReq:
                            case D.holdem.MessageId.LeaveRoomRes:
                                break;
                            case D.holdem.MessageId.SeatOccupiedMsg:
                                if (o.roomId == a.roomId) {
                                    let e = !1;
                                    for (const s in o.players) {
                                        parseInt(s) == a.seatNum && (e = !0, o.players[s].userId = a.userId, o.players[s].avatar = a.avatar, o.players[s].avatarFrame = a.avatarFrame, o.players[s].nickName = a.nickName, o.players[s].coin = a.coin, o.players[s].gender = a.gender, o.players[s].roomId = a.roomId)
                                    }
                                    if (!e) {
                                        let e = {
                                            userId: a.userId,
                                            avatar: a.avatar,
                                            avatarFrame: a.avatarFrame,
                                            nickName: a.nickName,
                                            coin: a.coin,
                                            gender: a.gender,
                                            roomId: a.roomId,
                                            seatNum: a.seatNum
                                        };
                                        o.players[a.seatNum] = e
                                    }
                                }
                                break;
                            case D.holdem.MessageId.SeatEmptyMsg:
                                if (o.roomId == a.roomId)
                                    for (const e in o.players) o.players[e].seatNum == a.seatNum && (s = o.players.indexOf(o.players[e], 0), o.players.splice(s, 1));
                                break;
                            case D.holdem.MessageId.PlayerActionMsg:
                                if (o.roomId == a.roomId)
                                    for (const e in o.players) o.players[e].seatNum == a.seatNum && (o.players[e].state = a.action, o.players[e].deskCoin = a.deskCoin, o.players[e].leftCoin = a.leftCoin, o.players[e].stateTurn = o.state, o.currAct = null);
                                break;
                            case D.holdem.MessageId.HoleCardListMsg:
                                if (o.roomId == a.roomId)
                                    for (const e in o.players) a.playerList.indexOf(o.players[e].seatNum) > -1 && (o.players[e].flags = 2);
                                break;
                            case D.holdem.MessageId.PlayerLeaveMsg:
                            case D.holdem.MessageId.OtherRoomMsg:
                            case D.holdem.MessageId.HideHoleCardReq:
                            case D.holdem.MessageId.HideHoleCardRes:
                            case D.holdem.MessageId.RoomConfReq:
                            case D.holdem.MessageId.RoomConfRes:
                            case D.holdem.MessageId.Emoji:
                            case D.holdem.MessageId.AnimReq:
                            case D.holdem.MessageId.AnimRes:
                            case D.holdem.MessageId.AnimMsg:
                            case D.holdem.MessageId.VoiceReq:
                            case D.holdem.MessageId.VoiceRes:
                            case D.holdem.MessageId.VoiceMsg:
                                break;
                            case D.holdem.MessageId.DealerPosMsg:
                                if (o.roomId == a.roomId) {
                                    o.pots = [a.pot], o.dealerPos = a.dealerPos, o.straddlePos = a.straddlePos, o.bbPos = a.bbPos, o.sbPos = a.sbPos, o.state = 5;
                                    for (const e in a.seats)
                                        if (a.seats[e])
                                            for (const s in o.players) a.seats[e].seatNum == o.players[s].seatNum && (o.players[s].deskCoin = a.seats[e].deskCoin, o.players[s].leftCoin = a.seats[e].leftCoin, o.players[s].stateTurn = o.state)
                                }
                                break;
                            case D.holdem.MessageId.HoleCardsMsg:
                                if (o.roomId == a.roomId)
                                    for (const e in o.players) o.players[e].userId == a.userId && (o.players[e].userId == this._selfPlayerId ? (o.holeCards = a.cards.slice(), o.players[e].holeCards = a.cards.slice()) : o.players[e].holeCards = a.cards.slice());
                                break;
                            case D.holdem.MessageId.BoardCardsMsg:
                                if (o.roomId == a.roomId) {
                                    o.state = a.roomState;
                                    let e = [];
                                    o.boardCards.forEach((a => {
                                        e.push(a)
                                    }));
                                    for (const s in a.cards) - 1 == e.indexOf(a.cards[s]) && e.push(a.cards[s]);
                                    o.boardCards = new Uint8Array(e)
                                }
                                break;
                            case D.holdem.MessageId.ActionReq:
                            case D.holdem.MessageId.ActionRes:
                                break;
                            case D.holdem.MessageId.NeedActionMsg:
                                if (o.roomId == a.roomId)
                                    for (const s in o.players)
                                        if (o.players[s].seatNum == a.seatNum) {
                                            cc_mtt.vv.ConsoleLog.log("GameRoundData snapShotMsg.players", o.players[s]), o.players[s].state = a.optAction, a.seatNum ? o.currAct = {
                                                seatNum: a.seatNum,
                                                optAction: a.optAction,
                                                optCoin: a.optCoin,
                                                minBetCoin: a.minBetCoin,
                                                countdownTotal: a.countDown,
                                                countdownLeft: a.countDown - (this._currentTime - this._gameRoundData[t].GameRoundData.DecodedActions[e].ReplayStartTime) / 1e3
                                            } : o.currAct = null;
                                            break
                                        } break;
                            case D.holdem.MessageId.ShowdownMsg:
                                if (o.roomId == a.roomId) {
                                    i = a;
                                    for (const e in o.players) o.players[e].deskCoin = 0
                                }
                                break;
                            case D.holdem.MessageId.RoundResultMsg:
                                if (o.roomId == a.roomId) {
                                    d = a;
                                    for (const e in d.players) {
                                        0 == d.players[e].leftCoins && o.outPlayerSeatNum.push(d.players[e].seatNum);
                                        for (const a in o.players) d.players[e].seatNum == o.players[a].seatNum && (o.players[a].leftCoin = d.players[e].leftCoins)
                                    }
                                }
                                break;
                            case D.holdem.MessageId.PotsMsg:
                                if (o.roomId == a.roomId) {
                                    o.pots = a.pots.slice();
                                    for (const e in o.players) o.players[e].deskCoin = 0
                                }
                                break;
                            case D.holdem.MessageId.PlayerStateMsg:
                                if (o.roomId == a.roomId)
                                    for (const e in o.players) o.players[e].seatNum == a.seatNum && (o.players[e].state = a.state, o.players[e].stateTurn = o.state);
                                break;
                            case D.holdem.MessageId.PauseGameReq:
                            case D.holdem.MessageId.PauseGameRes:
                            case D.holdem.MessageId.StandbyReq:
                            case D.holdem.MessageId.StandbyRes:
                            case D.holdem.MessageId.ResumeGameReq:
                            case D.holdem.MessageId.ResumeGameRes:
                            case D.holdem.MessageId.RoomBillReq:
                            case D.holdem.MessageId.RoomBillRes:
                            case D.holdem.MessageId.AutoPlayMsg:
                            case D.holdem.MessageId.CancelAutoPlayReq:
                            case D.holdem.MessageId.CancelAutoPlayRes:
                            case D.holdem.MessageId.PlayerNickNameChangeMsg:
                        }
                    }
                }
                if (this._currentTime >= this._gameRoundData[t].GameRoundData.DecodedActions[this._gameRoundData[t].GameRoundData.DecodedActions.length - 1].ReplayStartTime && (i = null, d = null), this._currentTime >= this._gameRoundData[t].GameRoundData.DecodedActions[this._gameRoundData[t].GameRoundData.DecodedActions.length - 1].ReplayStartTime + this._lastBasicTimeOffset) {
                    this._indexJ++, o.boardCards = new Uint8Array, o.holeCards = new Uint8Array, o.pots = 0;
                    for (const e in o.players) o.players[e].flags = 0, o.players[e].state = 0, o.players[e].holeCards = new Uint8Array;
                    i = null, d = null
                }
            }
            this.setEnterRoomRes(this._indexI), this.setPlayer(this._indexI), this.applyMsg(o), i && this.applyMsg(i, !1), d && this.applyMsg(d, !1, this._currentTime - d.ReplayStartTime), this._lastUpdateTime = (new Date).getTime()
        }
        setTimeLine(e) {
            this.stopAllSchedule(), this._currentTime = e * this._timeLineLength, this._indexI = 0, this._indexJ = 0;
            let a = !1;
            for (let e = 0; e < this._gameRoundData.length; e++)
                for (let s = 0; s < this._gameRoundData[e].GameRoundData.DecodedActions.length && !(this._currentTime < this._gameRoundData[e].GameRoundData.DecodedActions[s].ReplayStartTime); s++) this._indexI = e, this._indexJ = s, a = !0;
            cc_mtt.vv.ConsoleLog.log("gameRoundData this._currentTime", this._currentTime, this._indexI, this._indexJ, this._timeLineLength);
            let s = this._indexI,
                t = this.Clone(this._gameRoundData[s].GameRoundData.ReplaySnapShot, D.holdem.MessageId.RoomSnapshotMsg);
            cc_mtt.vv.ConsoleLog.log("gameRoundData onRoomSnapshot", t, " object-> ", JSON.stringify(t), cc_mtt.vv.DataManager.getNow(), a);
            let o = null,
                i = null;
            if (a) {
                this.changeStoreInfo(s);
                for (let e = 0; e <= this._indexJ; e++) {
                    let a = this._gameRoundData[s].GameRoundData.DecodedActions[e];
                    if (a && a.ReplayMessageType) {
                        let d = -1;
                        switch (a.ReplayMessageType) {
                            case D.holdem.MessageId.UserTokenReq:
                            case D.holdem.MessageId.UserTokenRes:
                            case D.holdem.MessageId.EnterRoomReq:
                                break;
                            case D.holdem.MessageId.EnterRoomRes:
                                t.roomId == a.roomId && (t.mttId = this._gameRoundData[s].GameRoundData.levelId);
                                break;
                            case D.holdem.MessageId.RoomSnapshotReq:
                                break;
                            case D.holdem.MessageId.RoomSnapshotMsg:
                                t.roomId == a.roomId && (t = this.Clone(a, a.messageId));
                                break;
                            case D.holdem.MessageId.SitDownReq:
                            case D.holdem.MessageId.SitDownRes:
                            case D.holdem.MessageId.NeedMoreCoinMsg:
                            case D.holdem.MessageId.LeaveRoomReq:
                            case D.holdem.MessageId.LeaveRoomRes:
                                break;
                            case D.holdem.MessageId.SeatOccupiedMsg:
                                if (t.roomId == a.roomId) {
                                    let e = !1;
                                    for (const s in t.players) {
                                        parseInt(s) == a.seatNum && (e = !0, t.players[s].userId = a.userId, t.players[s].avatar = a.avatar, t.players[s].avatarFrame = a.avatarFrame, t.players[s].nickName = a.nickName, t.players[s].coin = a.coin, t.players[s].gender = a.gender, t.players[s].roomId = a.roomId)
                                    }
                                    if (!e) {
                                        let e = {
                                            userId: a.userId,
                                            avatar: a.avatar,
                                            avatarFrame: a.avatarFrame,
                                            nickName: a.nickName,
                                            coin: a.coin,
                                            gender: a.gender,
                                            roomId: a.roomId,
                                            seatNum: a.seatNum
                                        };
                                        t.players[a.seatNum] = e
                                    }
                                }
                                break;
                            case D.holdem.MessageId.SeatEmptyMsg:
                                if (t.roomId == a.roomId)
                                    for (const e in t.players) t.players[e].seatNum == a.seatNum && (d = t.players.indexOf(t.players[e], 0), t.players.splice(d, 1));
                                break;
                            case D.holdem.MessageId.PlayerActionMsg:
                                if (t.roomId == a.roomId)
                                    for (const e in t.players) t.players[e].seatNum == a.seatNum && (t.players[e].state = a.action, t.players[e].deskCoin = a.deskCoin, t.players[e].leftCoin = a.leftCoin, t.players[e].stateTurn = t.state, t.currAct = null);
                                break;
                            case D.holdem.MessageId.HoleCardListMsg:
                                if (t.roomId == a.roomId)
                                    for (const e in t.players) a.playerList.indexOf(t.players[e].seatNum) > -1 && (t.players[e].flags = 2);
                                break;
                            case D.holdem.MessageId.PlayerLeaveMsg:
                            case D.holdem.MessageId.OtherRoomMsg:
                            case D.holdem.MessageId.HideHoleCardReq:
                            case D.holdem.MessageId.HideHoleCardRes:
                            case D.holdem.MessageId.RoomConfReq:
                            case D.holdem.MessageId.RoomConfRes:
                            case D.holdem.MessageId.Emoji:
                            case D.holdem.MessageId.AnimReq:
                            case D.holdem.MessageId.AnimRes:
                            case D.holdem.MessageId.AnimMsg:
                            case D.holdem.MessageId.VoiceReq:
                            case D.holdem.MessageId.VoiceRes:
                            case D.holdem.MessageId.VoiceMsg:
                                break;
                            case D.holdem.MessageId.DealerPosMsg:
                                if (t.roomId == a.roomId) {
                                    t.pots = [a.pot], t.dealerPos = a.dealerPos, t.straddlePos = a.straddlePos, t.bbPos = a.bbPos, t.sbPos = a.sbPos, t.state = 5;
                                    for (const e in a.seats)
                                        if (a.seats[e])
                                            for (const s in t.players) a.seats[e].seatNum == t.players[s].seatNum && (t.players[s].deskCoin = a.seats[e].deskCoin, t.players[s].leftCoin = a.seats[e].leftCoin, t.players[s].stateTurn = t.state)
                                }
                                break;
                            case D.holdem.MessageId.HoleCardsMsg:
                                if (t.roomId == a.roomId)
                                    for (const e in t.players) t.players[e].userId == a.userId && (t.players[e].userId == this._selfPlayerId ? (t.holeCards = a.cards.slice(), t.players[e].holeCards = a.cards.slice()) : t.players[e].holeCards = a.cards.slice());
                                break;
                            case D.holdem.MessageId.BoardCardsMsg:
                                if (t.roomId == a.roomId) {
                                    t.state = a.roomState;
                                    let e = [];
                                    t.boardCards.forEach((a => {
                                        e.push(a)
                                    }));
                                    for (const s in a.cards) - 1 == e.indexOf(a.cards[s]) && e.push(a.cards[s]);
                                    t.boardCards = new Uint8Array(e)
                                }
                                break;
                            case D.holdem.MessageId.ActionReq:
                            case D.holdem.MessageId.ActionRes:
                                break;
                            case D.holdem.MessageId.NeedActionMsg:
                                if (t.roomId == a.roomId)
                                    for (const o in t.players)
                                        if (t.players[o].seatNum == a.seatNum) {
                                            cc_mtt.vv.ConsoleLog.log("GameRoundData snapShotMsg.players", t.players[o]), t.players[o].state = a.optAction, a.seatNum ? t.currAct = {
                                                seatNum: a.seatNum,
                                                optAction: a.optAction,
                                                optCoin: a.optCoin,
                                                minBetCoin: a.minBetCoin,
                                                countdownTotal: a.countDown,
                                                countdownLeft: a.countDown - (this._currentTime - this._gameRoundData[s].GameRoundData.DecodedActions[e].ReplayStartTime) / 1e3
                                            } : t.currAct = null;
                                            break
                                        } break;
                            case D.holdem.MessageId.ShowdownMsg:
                                if (t.roomId == a.roomId) {
                                    o = a;
                                    for (const e in t.players) t.players[e].deskCoin = 0
                                }
                                break;
                            case D.holdem.MessageId.RoundResultMsg:
                                if (t.roomId == a.roomId) {
                                    i = a;
                                    for (const e in i.players) {
                                        0 == i.players[e].leftCoins && t.outPlayerSeatNum.push(i.players[e].seatNum);
                                        for (const a in t.players) i.players[e].seatNum == t.players[a].seatNum && (t.players[a].leftCoin = i.players[e].leftCoins)
                                    }
                                }
                                break;
                            case D.holdem.MessageId.PotsMsg:
                                if (t.roomId == a.roomId) {
                                    t.pots = a.pots.slice();
                                    for (const e in t.players) t.players[e].deskCoin = 0
                                }
                                break;
                            case D.holdem.MessageId.PlayerStateMsg:
                                if (t.roomId == a.roomId)
                                    for (const e in t.players) t.players[e].seatNum == a.seatNum && (t.players[e].state = a.state, t.players[e].stateTurn = t.state);
                                break;
                            case D.holdem.MessageId.PauseGameReq:
                            case D.holdem.MessageId.PauseGameRes:
                            case D.holdem.MessageId.StandbyReq:
                            case D.holdem.MessageId.StandbyRes:
                            case D.holdem.MessageId.ResumeGameReq:
                            case D.holdem.MessageId.ResumeGameRes:
                            case D.holdem.MessageId.RoomBillReq:
                            case D.holdem.MessageId.RoomBillRes:
                            case D.holdem.MessageId.AutoPlayMsg:
                            case D.holdem.MessageId.CancelAutoPlayReq:
                            case D.holdem.MessageId.CancelAutoPlayRes:
                            case D.holdem.MessageId.PlayerNickNameChangeMsg:
                        }
                    }
                }
                if (this._currentTime >= this._gameRoundData[s].GameRoundData.DecodedActions[this._gameRoundData[s].GameRoundData.DecodedActions.length - 1].ReplayStartTime && (o = null, i = null), this._currentTime >= this._gameRoundData[s].GameRoundData.DecodedActions[this._gameRoundData[s].GameRoundData.DecodedActions.length - 1].ReplayStartTime + this._lastBasicTimeOffset) {
                    this._indexJ++, t.boardCards = new Uint8Array, t.holeCards = new Uint8Array, t.pots = 0;
                    for (const e in t.players) t.players[e].flags = 0, t.players[e].state = 0, t.players[e].holeCards = new Uint8Array;
                    o = null, i = null
                }
            }
            this.setEnterRoomRes(this._indexI), this.setPlayer(this._indexI), this.applyMsg(t), o && this.applyMsg(o, !1), i && this.applyMsg(i, !1, this._currentTime - i.ReplayStartTime), this._lastUpdateTime = (new Date).getTime()
        }
        getSeatNum(e, a) {
            for (let s in this._gameRoundData[e].GameRoundData.Players)
                if (this._gameRoundData[e].GameRoundData.Players[s].userId == a) return parseInt(s);
            return -1
        }
        getSeatNumDiff(e, a, s) {
            let t = 0;
            for (let o in this._gameRoundData[e].GameRoundData.Players) {
                let e = parseInt(o);
                e >= a && e != s && t++
            }
            for (let o in this._gameRoundData[e].GameRoundData.Players) {
                let e = parseInt(o);
                e < a && e != s && t++
            }
            return cc_mtt.vv.ConsoleLog.log("gameRoundData getSeatNumDiff", a, s, t), t
        }
        setPlayer(e) {
            for (let e in this._holdemRoom._players) b.setNodeOpacity(this._holdemRoom._players[e].node, 0);
            for (let a in this._gameRoundData[e].GameRoundData.Players) {
                let s = new D.holdem.SeatEmptyMsg;
                s.roomId = this._gameRoundData[e].GameRoundData.roomId, s.seatNum = parseInt(a), this._holdemRoom.store.onSeatEmptyMsg(s, !1)
            }
            let a = null;
            for (let s = 0; s < this._gameRoundData[e].GameRoundData.DecodedActions.length; s++)
                if (this._gameRoundData[e].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.DealerPosMsg) {
                    a = this._gameRoundData[e].GameRoundData.DecodedActions[s];
                    break
                } for (let s in this._gameRoundData[e].GameRoundData.Players) {
                let t = parseInt(s),
                    o = new D.holdem.SeatOccupiedMsg,
                    i = 0;
                if (0 == this._gameRoundData[e].GameRoundData.Players[s].startCoin) {
                    if (a)
                        for (let e in a.seats) a.seats[e].seatNum == t && (i = a.seats[e].deskCoin + a.seats[e].leftCoin)
                } else i = this._gameRoundData[e].GameRoundData.Players[s].startCoin;
                o.coin = i, o.nickName = this._gameRoundData[e].GameRoundData.Players[s].nickname, o.userId = this._gameRoundData[e].GameRoundData.Players[s].userId, o.avatar = this._gameRoundData[e].GameRoundData.Players[s].avatar, o.avatarFrame = this._gameRoundData[e].GameRoundData.Players[s].avatarFrame, o.seatNum = t, o.roomId = this._gameRoundData[e].GameRoundData.roomId, o.avatar = this._gameRoundData[e].GameRoundData.Players[s].avatar, this._gameRoundData[e].GameRoundData.Players[s].seatNum = o.seatNum, this._holdemRoom.store.onSeatOccupiedMsg(o, !1)
            }
        }
        setRoundRoomSnapshotMsg(e) {
            let a = new D.holdem.RoomSnapshotMsg;
            a.roomId = this._gameRoundData[e].GameRoundData.roomId, a.pots = [], a.players = [];
            let s = null;
            for (let a = 0; a < this._gameRoundData[e].GameRoundData.DecodedActions.length; a++)
                if (this._gameRoundData[e].GameRoundData.DecodedActions[a].ReplayMessageType == D.holdem.MessageId.DealerPosMsg) {
                    s = this._gameRoundData[e].GameRoundData.DecodedActions[a];
                    break
                } for (let t in this._gameRoundData[e].GameRoundData.Players) {
                let o = parseInt(t),
                    i = 0;
                if (0 == this._gameRoundData[e].GameRoundData.Players[t].startCoin) {
                    if (s)
                        for (let e in s.seats) s.seats[e].seatNum == o && (i = s.seats[e].deskCoin + s.seats[e].leftCoin)
                } else i = this._gameRoundData[e].GameRoundData.Players[t].startCoin;
                let d = {
                    userId: this._gameRoundData[e].GameRoundData.Players[t].userId,
                    avatar: this._gameRoundData[e].GameRoundData.Players[t].avatar,
                    avatarFrame: this._gameRoundData[e].GameRoundData.Players[t].avatarFrame,
                    nickName: this._gameRoundData[e].GameRoundData.Players[t].nickname,
                    seatNum: o,
                    deskCoin: 0,
                    leftCoin: i,
                    state: 0,
                    flags: 0,
                    holeCards: new Uint8Array,
                    gender: 0
                };
                a.players.push(d)
            }
            a.dealerPos = 0, a.straddlePos = 0, a.boardCards = new Uint8Array, a.holeCards = new Uint8Array, a.currAct = null, a.visitors = [], a.state = 0, a.bbPos = 0, a.sbPos = 0, a.code = 0, a.mttId = this._gameRoundData[e].GameRoundData.levelId, a.outPlayerSeatNum = [], a.ReplayMessageType = D.holdem.MessageId.RoomSnapshotMsg, this._gameRoundData[e].GameRoundData.ReplaySnapShot = a
        }
        setEnterRoomRes(e) {
            let a = new D.holdem.EnterRoomRes;
            a.bb = this._gameRoundData[e].GameRoundData.bigBlind, a.sb = this._gameRoundData[e].GameRoundData.smallBlind, a.ante = this._gameRoundData[e].GameRoundData.ante, a.maxTakein = 200, a.minTakein = 200, a.mode = this._gameRoundData[e].GameRoundData.gameId, a.mttId = this._gameRoundData[e].GameRoundData.levelId, a.roomId = this._gameRoundData[e].GameRoundData.roomId, a.seatCount = this._gameRoundData[e].GameRoundData.seatnum, this._holdemRoom.store.onEnterRoomRes(a)
        }
        play() {
            this.showReplayUI(), this._isPause = !1;
            let e = (new Date).getTime(); - 1 != this._pauseTime ? this._pauseTime : this._startTime = e, this._startTime = e, this._lastUpdateTime = e, this.iconPlay.active = !1, this.iconPause.active = !0, g.resume()
        }
        pause() {
            this.unschedule(this.hideReplayUI), this._isPause = !0, this._pauseTime = (new Date).getTime(), this.iconPlay.active = !0, this.iconPause.active = !1, g.pause()
        }
        setPlayPauseIcon() {
            this.iconPlay.active = !0, this.iconPause.active = !1
        }
        backToZero() {
            this.setPlayPauseIcon(), this.setProgress(0), this.setTimeLine(0), this.unschedule(this.hideReplayUI), this.showReplayUI()
        }
        onRewindBtnClick() {
            this._isPause ? this.resetVideoPlayer() : this.restartVideoPlayer()
        }
        restartVideoPlayer() {
            this.setProgress(0), this.setTimeLine(0), this.unschedule(this.hideReplayUI), this.showReplayUI()
        }
        resetVideoPlayer() {
            this.setProgress(0), this.setTimeLine(0)
        }
        applyMsg(e, a = !0, s = 0) {
            if (e && e.ReplayMessageType) switch (e.ReplayMessageType) {
                case D.holdem.MessageId.UserTokenReq:
                case D.holdem.MessageId.UserTokenRes:
                case D.holdem.MessageId.EnterRoomReq:
                    break;
                case D.holdem.MessageId.EnterRoomRes:
                    this._holdemRoom.store.onEnterRoomRes(e);
                    break;
                case D.holdem.MessageId.RoomSnapshotReq:
                    break;
                case D.holdem.MessageId.RoomSnapshotMsg:
                    this._holdemRoom.store.onRoomSnapshotMsg(e, e.outPlayerSeatNum);
                    break;
                case D.holdem.MessageId.SitDownReq:
                case D.holdem.MessageId.SitDownRes:
                case D.holdem.MessageId.NeedMoreCoinMsg:
                case D.holdem.MessageId.LeaveRoomReq:
                case D.holdem.MessageId.LeaveRoomRes:
                    break;
                case D.holdem.MessageId.SeatOccupiedMsg:
                    this._holdemRoom.store.onSeatOccupiedMsg(e, a);
                    break;
                case D.holdem.MessageId.SeatEmptyMsg:
                    this._holdemRoom.store.onSeatEmptyMsg(e, a);
                    break;
                case D.holdem.MessageId.PlayerActionMsg:
                    this._holdemRoom.store.onPlayerActionMsg(e);
                    break;
                case D.holdem.MessageId.HoleCardListMsg:
                    this._holdemRoom.store.onHoleCardList(e);
                    break;
                case D.holdem.MessageId.PlayerLeaveMsg:
                case D.holdem.MessageId.OtherRoomMsg:
                case D.holdem.MessageId.HideHoleCardReq:
                case D.holdem.MessageId.HideHoleCardRes:
                case D.holdem.MessageId.RoomConfReq:
                case D.holdem.MessageId.RoomConfRes:
                    break;
                case D.holdem.MessageId.Emoji:
                    this._holdemRoom.store.onEmojiMsg(e);
                    break;
                case D.holdem.MessageId.AnimReq:
                case D.holdem.MessageId.AnimRes:
                    break;
                case D.holdem.MessageId.AnimMsg:
                    this._holdemRoom.store.onAnimMsg(e);
                    break;
                case D.holdem.MessageId.VoiceReq:
                case D.holdem.MessageId.VoiceRes:
                case D.holdem.MessageId.VoiceMsg:
                    break;
                case D.holdem.MessageId.DealerPosMsg:
                    this._holdemRoom.store.onDealerPosMsgNewGame(e);
                    break;
                case D.holdem.MessageId.HoleCardsMsg:
                    this._holdemRoom.store.onHoleCardsMsg(e);
                    break;
                case D.holdem.MessageId.BoardCardsMsg:
                    this._holdemRoom.store.onBoardCardsMsg(e);
                    break;
                case D.holdem.MessageId.ActionReq:
                case D.holdem.MessageId.ActionRes:
                    break;
                case D.holdem.MessageId.NeedActionMsg:
                    this._holdemRoom.store.onNeedActionMsg(e);
                    break;
                case D.holdem.MessageId.ShowdownMsg:
                    this._holdemRoom.store.onShowdownMsg(e, a);
                    break;
                case D.holdem.MessageId.RoundResultMsg:
                    this._holdemRoom.store.onRoundResultMsg(e, a, s);
                    break;
                case D.holdem.MessageId.PotsMsg:
                    this._holdemRoom.store.onPotsMsg(e);
                    break;
                case D.holdem.MessageId.PlayerStateMsg:
                    this._holdemRoom.store.onPlayerStateMsg(e);
                    break;
                case D.holdem.MessageId.PauseGameReq:
                case D.holdem.MessageId.PauseGameRes:
                case D.holdem.MessageId.StandbyReq:
                case D.holdem.MessageId.StandbyRes:
                case D.holdem.MessageId.ResumeGameReq:
                case D.holdem.MessageId.ResumeGameRes:
                case D.holdem.MessageId.RoomBillReq:
                case D.holdem.MessageId.RoomBillRes:
                case D.holdem.MessageId.AutoPlayMsg:
                case D.holdem.MessageId.CancelAutoPlayReq:
                case D.holdem.MessageId.CancelAutoPlayRes:
                case D.holdem.MessageId.PlayerNickNameChangeMsg:
            }
        }
        static decodeAllActions(e) {
            for (let a = 0; a < e.length; a++) {
                e[a].GameRoundData.DecodedActions = [], e[a].GameRoundData.OriginalDecodedActions = [];
                for (let s = 0; s < e[a].GameRoundData.Actions.length; s++) {
                    let t = this.decodeAction(e[a].GameRoundData.Actions[s]);
                    t && e[a].GameRoundData.DecodedActions.push(t), t = this.decodeAction(e[a].GameRoundData.Actions[s]), t && e[a].GameRoundData.OriginalDecodedActions.push(t), e[a].GameRoundData.DecodedActions[s].ReplayActionTime = e[a].GameRoundData.ActionTimes[s]
                }
            }
        }
        calculateTime() {
            let e = this._basicTimeStep;
            for (let a = 0; a < this._gameRoundData.length; a++) {
                let s = 0;
                for (; s < this._gameRoundData[a].GameRoundData.DecodedActions.length;) {
                    if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.DealerPosMsg)
                        for (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++; s < this._gameRoundData[a].GameRoundData.DecodedActions.length && this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.PlayerStateMsg && this._gameRoundData[a].GameRoundData.DecodedActions[s].sameStartTime;) this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                    if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.HoleCardsMsg || this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.HoleCardListMsg)
                        for (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++; s < this._gameRoundData[a].GameRoundData.DecodedActions.length && (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.HoleCardsMsg || this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.HoleCardListMsg);) this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                    else if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.NeedActionMsg)
                        for (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, e += 1e3 * this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayActionTime.usedTime, s++; s < this._gameRoundData[a].GameRoundData.DecodedActions.length;) {
                            if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.PlayerActionMsg) {
                                this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                                break
                            }
                            break
                        } else if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.ShowdownMsg)
                            for (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++; s < this._gameRoundData[a].GameRoundData.DecodedActions.length && this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.RoundResultMsg;) this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                        else if (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.PlayerActionMsg && this._gameRoundData[a].GameRoundData.DecodedActions[s].sameStartTime)
                        for (this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++; s < this._gameRoundData[a].GameRoundData.DecodedActions.length && this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayMessageType == D.holdem.MessageId.PlayerActionMsg && this._gameRoundData[a].GameRoundData.DecodedActions[s].sameStartTime;) this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                    else this._gameRoundData[a].GameRoundData.DecodedActions[s].ReplayStartTime = e, s++;
                    e += this._basicTimeStep
                }
                e += this._lastBasicTimeStep
            }
            this._timeLineLength = e, this.labelEnd.string = this.formatTime(this._timeLineLength)
        }
        formatTime(e) {
            return this.pad(Math.floor(e / 1e3 / 60 / 60), 2) + ":" + this.pad(Math.floor(e / 1e3 / 60) % 60, 2) + ":" + this.pad(Math.floor(e / 1e3 % 60), 2)
        }
        pad(e, a) {
            let s = e + "";
            for (; s.length < a;) s = "0" + s;
            return s
        }
        getNextSeatNum(e, a) {
            let s = [];
            for (let a in this._gameRoundData[e].GameRoundData.Players) {
                let e = parseInt(a);
                s.push(e)
            }
            let t = s.indexOf(a);
            return -1 != t ? (t++, t >= s.length && (t = 0), s[t]) : -1
        }
        processAction() {
            for (let e = 0; e < this._gameRoundData.length; e++) {
                let a = [];
                for (let s in this._gameRoundData[e].GameRoundData.Players) {
                    let t = {
                        seatNum: parseInt(s),
                        deskCoin: 0,
                        leftCoin: 0,
                        pots: 0,
                        state: this._gameRoundData[e].GameRoundData.Players[s].state
                    };
                    a.push(t)
                }
                this.setRoundRoomSnapshotMsg(e);
                let s = [],
                    t = 0;
                for (; t < this._gameRoundData[e].GameRoundData.DecodedActions.length;)
                    if (this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayMessageType == D.holdem.MessageId.DealerPosMsg) {
                        s.push(this._gameRoundData[e].GameRoundData.DecodedActions[t]);
                        for (let o in a)
                            for (let i in this._gameRoundData[e].GameRoundData.DecodedActions[t].seats)
                                if (a[o].seatNum == this._gameRoundData[e].GameRoundData.DecodedActions[t].seats[i].seatNum && (a[o].deskCoin = this._gameRoundData[e].GameRoundData.DecodedActions[t].seats[i].deskCoin, a[o].leftCoin = this._gameRoundData[e].GameRoundData.DecodedActions[t].seats[i].leftCoin, a[o].deskCoin > 0 || !a[o].leftCoin)) {
                                    let i = new D.holdem.PlayerStateMsg;
                                    i.roomId = this._gameRoundData[e].GameRoundData.roomId, i.seatNum = a[o].seatNum, i.state = a[o].state, i.sameStartTime = !0, i.ReplayMessageType = D.holdem.MessageId.PlayerStateMsg, i.ReplayActionTime = this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime, s.push(i)
                                } t++
                    } else if (this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayMessageType == D.holdem.MessageId.HoleCardsMsg)
                    if (this._gameRoundData[e].GameRoundData.DecodedActions[t].userId == this._selfPlayerId) s.push(this._gameRoundData[e].GameRoundData.DecodedActions[t]), t++;
                    else {
                        let a = [],
                            o = new D.holdem.HoleCardListMsg;
                        o.roomId = this._gameRoundData[e].GameRoundData.DecodedActions[t].roomId, o.ReplayMessageType = D.holdem.MessageId.HoleCardListMsg, o.ReplayActionTime = this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime;
                        let i = t;
                        for (; i < this._gameRoundData[e].GameRoundData.DecodedActions.length && this._gameRoundData[e].GameRoundData.DecodedActions[i].ReplayMessageType == D.holdem.MessageId.HoleCardsMsg;) this._gameRoundData[e].GameRoundData.DecodedActions[i].userId != this._selfPlayerId ? (a.push(this.getSeatNum(e, this._gameRoundData[e].GameRoundData.DecodedActions[i].userId)), this._gameRoundData[e].GameRoundData.DecodedActions.splice(i, 1)) : i++;
                        o.playerList = a, s.push(o)
                    }
                else if (this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayMessageType == D.holdem.MessageId.PlayerActionMsg) {
                    for (let s in a) a[s].seatNum == this._gameRoundData[e].GameRoundData.DecodedActions[t].seatNum && (a[s].deskCoin = this._gameRoundData[e].GameRoundData.DecodedActions[t].deskCoin, a[s].leftCoin = this._gameRoundData[e].GameRoundData.DecodedActions[t].leftCoin);
                    if (this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime && this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime.usedTime > 0) {
                        let a = new D.holdem.NeedActionMsg;
                        a.roomId = this._gameRoundData[e].GameRoundData.DecodedActions[t].roomId, a.seatNum = this._gameRoundData[e].GameRoundData.DecodedActions[t].seatNum, a.countDown = this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime.ttlTime, a.minBetCoin = 100, a.ReplayMessageType = D.holdem.MessageId.NeedActionMsg, a.ReplayActionTime = this._gameRoundData[e].GameRoundData.DecodedActions[t].ReplayActionTime, s.push(a)
                    }
                    s.push(this._gameRoundData[e].GameRoundData.DecodedActions[t]), t++
                } else s.push(this._gameRoundData[e].GameRoundData.DecodedActions[t]), t++;
                this._gameRoundData[e].GameRoundData.DecodedActions = s
            }
        }
        static decodeAction(e) {
            let a = y.instance.intFromBytes(e.slice(4, 6)),
                s = null;
            switch (a) {
                case D.holdem.MessageId.UserTokenReq:
                    s = D.holdem.PlayerActionMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.UserTokenRes:
                    s = D.holdem.UserTokenRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.EnterRoomReq:
                    s = D.holdem.EnterRoomReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.EnterRoomRes:
                    s = D.holdem.EnterRoomRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomSnapshotReq:
                    s = D.holdem.RoomSnapshotReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomSnapshotMsg:
                    s = D.holdem.RoomSnapshotMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.SitDownReq:
                    s = D.holdem.SitDownReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.SitDownRes:
                    s = D.holdem.SitDownRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.NeedMoreCoinMsg:
                    s = D.holdem.NeedMoreCoinMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.LeaveRoomReq:
                    s = D.holdem.LeaveRoomReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.LeaveRoomRes:
                    s = D.holdem.LeaveRoomRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.SeatOccupiedMsg:
                    s = D.holdem.SeatOccupiedMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.SeatEmptyMsg:
                    s = D.holdem.SeatEmptyMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PlayerActionMsg:
                    s = D.holdem.PlayerActionMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.HoleCardListMsg:
                    s = D.holdem.HoleCardListMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PlayerLeaveMsg:
                    s = D.holdem.PlayerLeaveMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.OtherRoomMsg:
                    s = D.holdem.OtherRoomMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.HideHoleCardReq:
                    s = D.holdem.HideHoleCardReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.HideHoleCardRes:
                    s = D.holdem.HideHoleCardRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomConfReq:
                    s = D.holdem.RoomConfReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomConfRes:
                    s = D.holdem.RoomConfRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.Emoji:
                    s = D.holdem.Emoji.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.AnimReq:
                    s = D.holdem.AnimReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.AnimRes:
                    s = D.holdem.AnimRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.AnimMsg:
                    s = D.holdem.AnimMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.VoiceReq:
                    s = D.holdem.VoiceReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.VoiceRes:
                    s = D.holdem.VoiceRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.VoiceMsg:
                    s = D.holdem.VoiceMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.DealerPosMsg:
                    s = D.holdem.DealerPosMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.HoleCardsMsg:
                    s = D.holdem.HoleCardsMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.BoardCardsMsg:
                    s = D.holdem.BoardCardsMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.ActionReq:
                    s = D.holdem.ActionReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.ActionRes:
                    s = D.holdem.ActionRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.NeedActionMsg:
                    s = D.holdem.NeedActionMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.ShowdownMsg:
                    s = D.holdem.ShowdownMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoundResultMsg:
                    s = D.holdem.RoundResultMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PotsMsg:
                    s = D.holdem.PotsMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PlayerStateMsg:
                    s = D.holdem.PlayerStateMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PauseGameReq:
                    s = D.holdem.PauseGameReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PauseGameRes:
                    s = D.holdem.PauseGameRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.StandbyReq:
                    s = D.holdem.StandbyReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.StandbyRes:
                    s = D.holdem.StandbyRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.ResumeGameReq:
                    s = D.holdem.ResumeGameReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.ResumeGameRes:
                    s = D.holdem.ResumeGameRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomBillReq:
                    s = D.holdem.RoomBillReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.RoomBillRes:
                    s = D.holdem.PlayerActionMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.AutoPlayMsg:
                    s = D.holdem.AutoPlayMsg.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.CancelAutoPlayReq:
                    s = D.holdem.CancelAutoPlayReq.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.CancelAutoPlayRes:
                    s = D.holdem.CancelAutoPlayRes.decode(e.slice(6));
                    break;
                case D.holdem.MessageId.PlayerNickNameChangeMsg:
                    s = D.holdem.PlayerNickNameChangeMsg.decode(e.slice(6))
            }
            return s && (s.ReplayMessageType = a), s
        }
        resetPage() {
            cc_mtt.vv.DataManager.isReplay = !1, this.setTimeScale(1), g.resume()
        }
        handlePPReplay() {}
        handleHoldemReplay() {}
        controlTimeline() {}
        controlPlaySpeed() {}
        controlPlayOrPause() {}
        onPlayButtonClick() {
            this._isPause ? this.play() : this.pause()
        }
        hideAllTimeScaleSpriteNode() {
            for (const e of this.timeScalesSpriteNode) e.active = !1
        }
        showReplayUI() {
            this.replayUI.active = !0
        }
        hideReplayUI() {
            this.replayUI.active = !1
        }
        _setScalePanel() {
            let e = P.instance.cv,
                a = y.instance.getWinSize(this.node),
                s = b.getNodeWidth(this.replayUI),
                t = b.getNodeHeight(this.replayUI),
                o = new M;
            this.replayUI.getScale(o);
            let i = e.Number(e.StringTools.div(a.width, s).toFixed(2)),
                d = e.Number(e.StringTools.div(a.height, t).toFixed(2)),
                n = Math.min(i, d);
            t * o.y * n >= a.height - 200 && (n *= .7), this.replayUI.setScale(n, n), this.gameViewParent.setScale(n, n)
        }
        showLoading(e, a = 60) {
            this.loading || (this.loading = u(this.loadingPrefab)), this.blockLayer.active = !0, e instanceof Function || (e = () => {
                this.hidLoading(), !0 === this.blockLayer.active && (this.blockLayer.active = !1)
            }), this.loading.parent = this.loadingLayer, this.loading.setPosition(0, 0), this.loading.getComponent(A).setLoading(e, a), this.loading.active || (this.loading.active = !0)
        }
        hidLoading(e) {
            this.scheduleOnce((() => {
                this.loading && (this.loading.active = !1), e && e()
            }), .3)
        }
        onSpeedButtonClicked() {
            this.showReplayUI();
            let e = this._timeScaleList.indexOf(this._timeScale) + 1;
            e >= this._timeScaleList.length && (e %= this._timeScaleList.length), this.setTimeScaleIndex(e)
        }
        onBackButtonClicked() {
            this._hasInitHoldemRoom && (this.play(), this._isPause = !0, this.iconPlay.active = !0, this.iconPause.active = !1, cc_mtt.vv.ConsoleLog.log("startHandReplay close", R(this._gameRecordNode)), R(this._gameRecordNode) && (this._gameRecord._hasClickReplay = !1), this._onBackAction && (this.showLoading(), this._onBackAction(this.node, (() => {
                cc_mtt.vv.DataManager.currentReplayBackScene = _.SCENE_NAME.HALL, this.resetPage(), this.hidLoading()
            }))))
        }
        onTimeLineChanged() {
            this._isSliderButtonTouch || (this.pause(), this._targetProgress = this.slider.progress, this._timeLineChangeTimeout && clearTimeout(this._timeLineChangeTimeout), this._timeLineChangeTimeout = setTimeout((() => {
                this.slider.progress = this._targetProgress, this.setTimeLine(this._targetProgress), this.play()
            }), 500))
        }
        onSliderButtonTouchStart() {
            this._isSliderButtonTouch = !0, this.pause()
        }
        onSliderButtonTouchEnd() {
            this._isPause = !0, this._isSliderButtonTouch = !1, this.setTimeLine(this.slider.progress), this.play()
        }
        onSliderButtonTouchMove() {
            this.labelCurrent.string = this.formatTime(this.slider.progress * this._timeLineLength)
        }
        onBlockLayerClick() {
            this.showReplayUI()
        }
    }).prototype, "backButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = a(z.prototype, "gameViewParent", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = a(z.prototype, "replayUI", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = a(z.prototype, "slider", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = a(z.prototype, "gameViewPrefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = a(z.prototype, "labelCurrent", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = a(z.prototype, "labelEnd", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = a(z.prototype, "playPauseButtonSprite", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = a(z.prototype, "iconPlay", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = a(z.prototype, "iconPause", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = a(z.prototype, "timeScalesSpriteNode", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), te = a(z.prototype, "sliderButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = a(z.prototype, "blockGameViewButton", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = a(z.prototype, "loadingPrefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = a(z.prototype, "loadingLayer", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = a(z.prototype, "blockLayer", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = a(z.prototype, "timeline", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = z)) || F));
    t._RF.pop()
}
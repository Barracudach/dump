import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as g from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as v from "./mttconfig.js";
import * as f from "./Holdem_Game_Review_Hand.js";
import * as P from "./httpApis.js";
import * as b from "./AndroidBackButton.js";
import * as L from "./RoundRecordDecoder.js";
import * as y from "./Holdem_Basic_Item.js";
import * as _ from "./worldWebsocket.js";
import * as C from "./MultipleGame.js";
import * as w from "./LoadingBlocker.js";
import * as I from "./SlideView.js";
import * as H from "./MTTConnector.js";
import * as D from "./CustomProgressBar.js";

function main() {
    var B, G, S, T, E, q, x, N, A, M, O, k, z, U, V, F, W, X, J, $, j, Y, K, Q, Z, ee, te, oe, ne, ie, ae, se;
    n._RF.push({}, "86baa1MkllFl6jTWP1yES/p", "holdem_game_records", void 0);
    const {
        ccclass: re,
        property: le
    } = u;
    e("RoundPlayerRecord", class {
        constructor() {
            this.userId = 0, this.holeCards = null, this.boardCards = [], this.profit = 0, this.cardRank = 0
        }
    });
    e("holdem_game_records", (B = le(i), G = le(a), S = le(s), T = le(s), E = le(r), q = le(r), x = le(r), N = le(r), A = le(s), M = le(l), O = le(r), k = le(i), z = le(D), U = le(d), V = le(d), re((X = t((W = class extends y {
        constructor(...e) {
            super(...e), o(this, "gameRoundReview", X, this), o(this, "gameReviewPage", J, this), o(this, "roundValue", $, this), o(this, "pageIndexLabel", j, this), o(this, "firstPageButton", Y, this), o(this, "previousPageButton", K, this), o(this, "nextPageButton", Q, this), o(this, "lastPageButton", Z, this), this._totalRound = 0, o(this, "gameRoomTitle", ee, this), o(this, "timeLine", te, this), this._hasClickReplay = !1, o(this, "replayBtn", oe, this), o(this, "controlButtons", ne, this), o(this, "progressBar", ie, this), o(this, "roundReviewScrollViewPrefab", ae, this), o(this, "roundReviewHandPrefab", se, this), this.roomId = 0, this.isXDevice = !1, this.isRequestingGameRecord = !1, this.lastRoundRecordRequestTimestamp = 0, this._lastRoundRecordRequestUserId = 0, this.pbLogPath = {}, this.holdemRoundRecords = {}, this.holdemRecords = {}, this.currentHoldemRecordPath = void 0, this.currentHandIndex = 0, this.playedDuration = 0, this.isSliding = !1, this._tempRecordListRequestInput = null
        }
        set totalRound(e) {
            this.showReplayBtn(e > 0), this._totalRound = e
        }
        get totalRound() {
            return this._totalRound
        }
        get lastRoundRecordRequestUserId() {
            return this._lastRoundRecordRequestUserId
        }
        set lastRoundRecordRequestUserId(e) {
            this._lastRoundRecordRequestUserId != e && this.resetTimestamp(), this._lastRoundRecordRequestUserId = e
        }
        get currentReviewHandPage() {
            var e;
            if (0 == (null == (e = this.gameReviewPage.content.children) ? void 0 : e.length)) {
                let e = h(this.roundReviewScrollViewPrefab);
                e.parent = this.gameReviewPage.content, e.setContentSize(this.gameReviewPage.content.parent.getContentSize().width, e.getContentSize().height)
            }
            return this.gameReviewPage.content.children[0]
        }
        onLoad() {
            this.roundValue.string = (this.totalRound + 1).toString(), this.node.on(i.EventType.TOUCH_END, (() => {
                this.onCloseButton()
            }), this), this.initEvents()
        }
        initEvents() {
            if (this.timeLine) {
                var e;
                const t = this.timeLine.handle.node;
                t.on(i.EventType.TOUCH_END, (() => {
                    this.onSliderTouchEnd()
                }), this), t.on(i.EventType.TOUCH_CANCEL, (() => {
                    this.onSliderTouchEnd()
                }), this), null == (e = this.timeLine) || e.node.on(i.EventType.TOUCH_END, (() => {
                    this.onSliderTouchEnd()
                }), this);
                let o = new c;
                o.target = this.node, o.component = "holdem_game_records", o.handler = "onSliderEvent", this.timeLine.slideEvents.push(o)
            }
        }
        onSliderTouchEnd() {
            if (this.isSliding = !1, this.timeLine) {
                let e = this.totalRound > 1 ? Math.round(this.timeLine.progress * (this.totalRound - 1)) : 0;
                e != this.currentHandIndex && (this.currentHandIndex = e, this.updateGameRoundReviewCurrentPage())
            }
        }
        checkToSetTimeLineProgress(e) {
            null !== this.timeLine && void 0 !== this.timeLine && (this.timeLine.progress = e, null !== this.progressBar && void 0 !== this.progressBar && (this.progressBar.progress = e))
        }
        onSliderEvent(e) {
            if (this.totalRound > 0) {
                let e = this.totalRound - 1,
                    t = Math.round(this.timeLine.progress * e);
                this.checkToSetTimeLineProgress(this.totalRound > 1 ? t / e : 1), this.pageIndexLabel.string = `${t+1}/${this.totalRound}`
            } else this.checkToSetTimeLineProgress(1), this.pageIndexLabel.string = "1/1";
            this.isSliding = !0
        }
        start() {}
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        setGameTitle(e) {
            this.gameRoomTitle.string = e
        }
        updateGameRoundReviewPlayerName(e) {
            let t = this,
                o = [],
                n = Array.from(e.children[0].children, (e => e.name));
            o = o.concat(n.filter((e => o.indexOf(e) < 0))), o.length > 0 && this.holdemRoom.store.requestPlayerName(o, (e => {
                e && t.gameReviewPage.content.children.forEach((o => {
                    o.children[0].children.forEach((o => {
                        let n = e[+o.name];
                        n && t.setPlayerName(o, n)
                    }))
                }))
            }))
        }
        setPlayerName(e, t) {
            e.children[1].children[2].getComponent(s).string = t.length >= 10 ? t.substring(0, 5) + "..." : t
        }
        loadGameReviewPageRecord(e, t, o) {
            this.pbLogPath[this.currentHandIndex] == o && this.initGameReviewPageRecord(e, t, o)
        }
        initGameReviewPageRecord(e, t, o) {
            if (m(e)) {
                cc_mtt.vv.ConsoleLog.log("loadGameReviewPageRecord", t);
                const n = e.getComponent(R).content;
                n.destroyAllChildren();
                for (let e of t) {
                    let t = h(this.roundReviewHandPrefab);
                    t.parent = n, t.getComponent(f).loadGameRecord(e, this.holdemRoom.store.maxHoleCard), t.name = e.userId.toString()
                }
                this.currentHoldemRecordPath = o, this.updateGameRoundReviewPlayerName(e), this.appendBottomPanel(e), this.currentHoldemRecordPath = o, this.updateGameRoundReviewPlayerName(e), this.appendBottomPanel(e)
            }
        }
        appendBottomPanel(e) {}
        tracePbLog(e) {}
        resetTimestamp() {
            this.lastRoundRecordRequestTimestamp = 0, this.pbLogPath = []
        }
        requestHoldemRecordList(e, t) {
            this.isRequestingGameRecord = !0, this.lastRoundRecordRequestUserId = e.userId, P.requestGameRecordHoldemList(e, (o => {
                var n;
                if (!m(this.node)) return void cc_mtt.vv.ConsoleLog.log("requestHoldemRecordList - Game Record is destroyed");
                if (this.isRequestingGameRecord = !1, e.userId != this.lastRoundRecordRequestUserId) return void cc_mtt.vv.ConsoleLog.log("requestHoldemRecordList - userId not match", e.userId, this.lastRoundRecordRequestUserId);
                this._tempRecordListRequestInput = e, null != t && t.after && (this.totalRound = o.total, this.roundValue.string = (this.totalRound + 1).toString(), o.lastRoundStartTime && (this.lastRoundRecordRequestTimestamp = o.lastRoundStartTime.getTime()), this.currentHandIndex = this.totalRound - 1);
                const i = null == (n = o.rounds[0]) || null == (n = n.recordPath) ? void 0 : n.slice();
                if ((null == i ? void 0 : i.length) > 0) {
                    i.reverse();
                    let e = (null == t ? void 0 : t.offset) >= 0 ? t.offset : this.totalRound - i.length;
                    i.forEach(((t, o) => this.pbLogPath[e + o] = t))
                }
                this.node.active ? this.updateGameRoundReviewCurrentPage() : cc_mtt.vv.ConsoleLog.log("requestHoldemRecordList - Game Record is closed")
            }), (o => {
                cc_mtt.vv.ConsoleLog.log("onError - requestHoldemRecordList", o), this.retryRequestHoldemRecordList(e, t)
            }), t)
        }
        retryRequestHoldemRecordList(e, t) {
            m(this.node) && this.node.active ? (cc_mtt.vv.ConsoleLog.log("Retry requestHoldemRecordList"), setTimeout((() => {
                m(this.node) && this.requestHoldemRecordList(e, t)
            }), 1e3)) : (cc_mtt.vv.ConsoleLog.log("Abort retry retryRequestHoldemRecordList. Game Record is closed."), this.isRequestingGameRecord = !1)
        }
        requestOneRoundData(e, t) {
            P.requestHoldemOneRoundData(t, (o => {
                if (m(this.node) && this.node.active) {
                    let n = L.decodeHoldem(o);
                    this.holdemRoundRecords[t] = n, this.holdemRecords[t] = o, this.loadGameReviewPageRecord(e, n, t)
                }
            }), (o => {
                cc_mtt.vv.ConsoleLog.log("onError - requestOneRoundData", o), this.retryOneRoundData(e, t)
            }))
        }
        retryOneRoundData(e, t) {
            m(this.node) && this.node.active ? (cc_mtt.vv.ConsoleLog.log("Retry requestOneRoundData"), this.scheduleOnce((() => {
                this.requestOneRoundData(e, t)
            }), .5)) : cc_mtt.vv.ConsoleLog.log("Abort retry requestOneRoundData. Game Record is closed.")
        }
        loadGameReviewPage(e) {
            let t = this.pbLogPath[e];
            if (cc_mtt.vv.ConsoleLog.log("loadGameReviewPage", e, t), t) {
                let e = this.holdemRoundRecords[t];
                e ? this.loadGameReviewPageRecord(this.currentReviewHandPage, e, t) : this.requestOneRoundData(this.currentReviewHandPage, t)
            } else this.requestHoldemRecordList(this._tempRecordListRequestInput, {
                offset: e,
                limit: 1
            })
        }
        updateGameRoundReview() {}
        onCloseButton() {
            g.isNative && g.os === g.OS.ANDROID && b.getInstance().removeBackFunction("holdem_game_records"), cc_mtt.vv.ConsoleLog.log("Holdem Game Records on close");
            let e = this.node.getComponent(I);
            e ? e.hide() : this.node.active = !1, this.unscheduleAllCallbacks()
        }
        show() {
            H.instance.sendMessageCenter(H.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL), g.isNative && g.os === g.OS.ANDROID && b.getInstance().addBackFunction("holdem_game_records", this.onCloseButton.bind(this)), cc_mtt.vv.ConsoleLog.log("Holdem Game Records open"), this.node.active = !0, this.replayBtn.node.active = !1;
            let e = this.node.getComponent(I);
            e && e.show(!1, (() => {
                var e;
                null == (e = this.currentReviewHandPage) || null == (e = e.getComponent(R)) || e.content.destroyAllChildren(), H.instance.sendMessageCenter(H.instance.config.BroadCast.HIDE_FULL_SCREEN_PANEL)
            }))
        }
        updateGameRoundReviewCurrentPage() {
            this.totalRound > 0 ? (this.loadGameReviewPage(this.currentHandIndex), this.pageIndexLabel.string = `${this.currentHandIndex+1}/${this.totalRound}`, this.isSliding || this.checkToSetTimeLineProgress(this.totalRound > 1 ? this.currentHandIndex / (this.totalRound - 1) : 1)) : (this.pageIndexLabel.string = "1/1", this.isSliding || this.checkToSetTimeLineProgress(0)), this.firstPageButton.interactable = this.currentHandIndex > 0, this.previousPageButton.interactable = this.currentHandIndex > 0, this.nextPageButton.interactable = this.currentHandIndex < this.totalRound - 1, this.lastPageButton.interactable = this.currentHandIndex < this.totalRound - 1
        }
        getDataFromRealTimeReplay() {
            if (this.currentHoldemRecordPath && this.holdemRecords[this.currentHoldemRecordPath]) {
                let e = this.pbLogPath[this.pbLogPath.length - 1 - this.gameReviewPage.getCurrentPageIndex()],
                    t = [{
                        GameRoundData: this.holdemRecords[e],
                        RecordPath: e
                    }].reverse();
                return cc_mtt.vv.DataManager.replayRecord = t, cc_mtt.vv.DataManager.lastGameInfo = this.holdemRoom.multipleGameInfo.data, cc_mtt.vv.DataManager.replayGameResultDetail = {
                    Id: t[0].GameRoundData ? t[0].GameRoundData.levelId : null,
                    PlayerCount: t[0].GameRoundData ? t[0].GameRoundData.seatnum : null,
                    Name: this.holdemRoom.roomInfo.roomName.string,
                    ActualGameMode: this.holdemRoom.multipleGameInfo.gameListId,
                    PlayOnJoint: this.holdemRoom.multipleGameInfo.data.Detail.PlayOnJoint
                }, cc_mtt.vv.DataManager.currentReplayBackScene = v.SCENE_NAME.HOLDEM, t
            }
        }
        startHandReplay() {
            this._hasClickReplay || (this._hasClickReplay = !0, w.show("HoldemReplayPrefab"), this.scheduleOnce((() => {
                cc_mtt.vv.ConsoleLog.log("startHandReplay", this.currentHoldemRecordPath);
                let e = this.pbLogPath[this.currentHandIndex];
                this.currentHoldemRecordPath && this.holdemRecords[e] ? this.handleReplaySetPage([{
                    GameRoundData: this.holdemRecords[e],
                    RecordPath: e
                }]) : this._hasClickReplay = !1
            }), .01))
        }
        handleReplaySetPage(e) {
            let t = e.reverse();
            cc_mtt.vv.DataManager.replayRecord = t, cc_mtt.vv.DataManager.lastGameInfo = this.holdemRoom.multipleGameInfo.data, cc_mtt.vv.DataManager.replayGameResultDetail = {
                Id: t[0].GameRoundData.levelId,
                PlayerCount: t[0].GameRoundData.seatnum,
                Name: this.holdemRoom.roomInfo.roomName.string,
                ActualGameMode: this.holdemRoom.multipleGameInfo.gameListId,
                PlayOnJoint: this.holdemRoom.multipleGameInfo.data.Detail.PlayOnJoint
            }, cc_mtt.vv.ConsoleLog.log("replayGameResultDetail", cc_mtt.vv.DataManager.replayGameResultDetail, cc_mtt.vv.DataManager.currentGameInfo), cc_mtt.vv.DataManager.currentReplayBackScene = v.SCENE_NAME.HOLDEM, C.instance ? C.instance.actualLoadReplayPrefab(this.node, this.holdemRoom.multipleGameIndex) : (this.holdemRoom && this.holdemRoom.store && this.holdemRoom.store.ws && this.holdemRoom.store.ws.close(!0, !0), _.gameSocket = null, cc_mtt.vv.AssetsManager.loadScene(v.SCENE_NAME.HOLDEM_REPLAY))
        }
        scrollTo(e) {
            this.currentHandIndex = e, this.updateGameRoundReviewCurrentPage()
        }
        firstButton() {
            this.scrollTo(0)
        }
        previousButton(e, t) {
            const o = t ? +t : 1;
            this.scrollPreviousPages(o)
        }
        scrollPreviousPages(e = 1) {
            this.currentHandIndex > 0 && this.scrollTo(Math.max(this.currentHandIndex - e, 0))
        }
        nextButton(e, t) {
            const o = t ? +t : 1;
            this.scrollNextPages(o)
        }
        scrollNextPages(e = 1) {
            this.currentHandIndex < this.totalRound - 1 && this.scrollTo(Math.min(this.currentHandIndex + e, this.totalRound - 1))
        }
        lastButton() {
            this.scrollTo(this.totalRound - 1)
        }
        reloadRecord() {
            this.gameReviewPage.removeAllPages()
        }
        updateXDeviceLayout(e) {
            cc_mtt.vv.ConsoleLog.log("updateXDeviceLayout"), this.isXDevice = e && C.instance && !C.instance.hasShowHeader, this.isXDevice && (this.controlButtons && (this.controlButtons.getComponent(p).bottom = 102, this.controlButtons.getComponent(p).updateAlignment()), this.timeLine && (this.timeLine.node.parent.getComponent(p).bottom = 217, this.timeLine.node.parent.getComponent(p).updateAlignment()), this.gameRoomTitle.node.getComponent(p).top = 52, this.gameRoomTitle.node.getComponent(p).updateAlignment(), this.roundValue.node.parent.getComponent(p).top = 133, this.roundValue.node.parent.getComponent(p).updateAlignment(), this.replayBtn.node.getComponent(p).bottom = 280, this.replayBtn.node.getComponent(p).updateAlignment())
        }
        showReplayBtn(e) {
            this.replayBtn && (this.replayBtn.node.active = e)
        }
    }).prototype, "gameRoundReview", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(W.prototype, "gameReviewPage", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(W.prototype, "roundValue", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(W.prototype, "pageIndexLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(W.prototype, "firstPageButton", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(W.prototype, "previousPageButton", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(W.prototype, "nextPageButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(W.prototype, "lastPageButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(W.prototype, "gameRoomTitle", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(W.prototype, "timeLine", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(W.prototype, "replayBtn", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(W.prototype, "controlButtons", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(W.prototype, "progressBar", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(W.prototype, "roundReviewScrollViewPrefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(W.prototype, "roundReviewHandPrefab", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = W)) || F));
    n._RF.pop()
}
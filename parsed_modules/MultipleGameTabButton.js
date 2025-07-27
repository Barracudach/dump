import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./i18nText.js";
import * as u from "./cv.js";
import * as m from "./Holdem_Card_ts.js";
import * as d from "./MTTConnector.js";
import * as T from "./Translator.js";
import * as p from "./mttconfig.js";
import * as g from "./Pb.js";
import * as _ from "./CustomProgressBarMTT.js";
import * as b from "./FakeMultipleGame.js";
import * as S from "./MultipleGame.js";
import * as C from "./MultipleGame.js";
import * as I from "./MultipleRoomManager.js";

function main() {
    var f, G, A, y, E, v, x, M, P, k, N, R, B, w, O, D, F, L, H, V, Y, z, K, U, j, W, J, q, Q, X, Z, $, tt, et, it, at, nt;
    a._RF.push({}, "95d1dgTe+5BeLDUj19bYY8u", "MultipleGameTabButton", void 0);
    const {
        ccclass: st,
        property: ot
    } = r;
    let lt = t("MultipleGameTabStatus", function(t) {
            return t[t.EMPTY = 0] = "EMPTY", t[t.CARDS = 1] = "CARDS", t[t.GAME_TYPE = 2] = "GAME_TYPE", t[t.SITTING_OUT = 3] = "SITTING_OUT", t[t.RE_ENTER = 4] = "RE_ENTER", t[t.IN_BREAK = 5] = "IN_BREAK", t[t.INFO = 6] = "INFO", t
        }({})),
        rt = t("MultipleGameTabType", function(t) {
            return t[t.NLHE = 0] = "NLHE", t[t.SHORT_DECK = 1] = "SHORT_DECK", t[t.SNG = 2] = "SNG", t[t.OMAHA = 3] = "OMAHA", t
        }({}));
    t("default", (f = ot(n), G = ot(n), A = ot(n), y = ot(n), E = ot(_), v = ot(_), x = ot(n), M = ot(n), P = ot([m]), k = ot(s), N = ot(s), R = ot([o]), B = ot([o]), w = ot(n), O = ot(l), D = ot(n), F = ot(n), st(((nt = class t extends h {
        constructor(...t) {
            super(...t), this.enableGameTypeDisplay = !1, i(this, "background", V, this), i(this, "addTableContainer", Y, this), i(this, "actionContainer", z, this), i(this, "gameTypeContainer", K, this), i(this, "timebarSlider", U, this), i(this, "timebarAddTimeSlider", j, this), i(this, "timebarContainer", W, this), i(this, "cards4Container", J, this), i(this, "cards4", q, this), i(this, "cards4GameType", Q, this), i(this, "gameType", X, this), i(this, "gameTypeSpriteFrame", Z, this), i(this, "gameTypeVeticalSpriteFrame", $, this), i(this, "potIcon", tt, this), i(this, "textInfo", et, this), i(this, "textInfoContainer", it, this), i(this, "closeTableContainer", at, this), this._onClickAction = null, this._onClickCloseTable = null, this._status = void 0, this._prevStatus = lt.CARDS, this._multipleGameType = 0, this._multipleGameIndex = -1, this._isSelected = !1, this._cardIds = [], this._isAutoPlay = !1, this._gameTypeIndex = -1, this.hasTimeVirbate = !1, this.hasAutoPlayVirbate = !1, this.needFeatureChangePage = !1, this.multipleGameInfo = null, this._backgroundSelected = null, this._backgroundUnselected = null, this.timeExcalmation = 0, this.isShowExcalamationIcon = !1, this.isTriggerStartShowTime = !1, this.restTime = 0, this.gameId = 0, this.gameMode = 0
        }
        onLoad() {
            this.setStatus(lt.EMPTY), this.loadBackgroundColor(), this.setActiveExcalmationIcon(!1), this.setActiveCloseTable(!1)
        }
        init(t, e) {
            this.setOnClickAction(t), this.setMultipleGameIndex(e), this.node.active = !1
        }
        show() {
            this.node.active = !0
        }
        hide() {
            this.node.active = !1
        }
        isActive() {
            return this.node.active
        }
        setText(t) {
            this.setStatus(lt.INFO);
            const e = this.textInfo.getComponent(c);
            e && e.setText(t)
        }
        initMultipleGame(t, e) {
            this._multipleGameType = t, this.setMultipleGameIndex(e), this.multipleGameInfo = I.instance.listRoom[this._multipleGameIndex], this.setStatus(lt.GAME_TYPE)
        }
        setMultipleGameIndex(t) {
            this._multipleGameIndex = t, this.multipleGameInfo = I.instance.listRoom[this._multipleGameIndex]
        }
        reset() {
            this._cardIds = [], this.needFeatureChangePage = !1, this._isAutoPlay = !1, this._isSelected = !1, this._multipleGameType = C.NONE, this.multipleGameInfo = null, this.hasTimeVirbate = !1, this.hasAutoPlayVirbate = !1, this.needFeatureChangePage = !1, this.setStatus(lt.EMPTY), this.setActiveExcalmationIcon(!1), this.restTime = 0, this.unschedule(this.countDownRest)
        }
        setStatus(t) {
            if (this._status = t, this.multipleGameInfo) switch (this.multipleGameInfo.type) {
                case C.CASH:
                    break;
                case C.HOLDEM:
                    const t = this.multipleGameInfo;
                    this.setGameType(t.gameMode, t.data.Detail.PlayOnJoint)
            }
            this.updateContainerByStatus(), this.isSngGame() && (this.checkSngStatus(), -1 != this._multipleGameIndex && S.instance && S.instance.progressShowCloseTableButton(this._multipleGameIndex)), this.restTime > 0 && (t == lt.SITTING_OUT || t == lt.GAME_TYPE) || this.restTime > 0 && t != lt.IN_BREAK && (this.unschedule(this.countDownRest), this.restTime = 0)
        }
        setPreStatus() {
            this._prevStatus = this._status
        }
        getPreStatus() {
            return this._prevStatus
        }
        getStatus() {
            return this._status
        }
        setIsAutoPlay(t) {
            this._isAutoPlay = t, this._isAutoPlay ? this.hasAutoPlayVirbate || (this.hasAutoPlayVirbate = !0, this.appVirbate()) : this.hasAutoPlayVirbate = !1
        }
        updateContainerByStatus() {
            switch (this._status) {
                case lt.EMPTY:
                    this.addTableContainer.active = !0, this.actionContainer.active = !1, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!1);
                    break;
                case lt.CARDS:
                    this.addTableContainer.active = !1, this.actionContainer.active = !0, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!1);
                    break;
                case lt.GAME_TYPE:
                    this.addTableContainer.active = !1, this.actionContainer.active = !1, this.gameTypeContainer.active = this.enableGameTypeDisplay, this.setActiveTextInfoContainer(!1);
                    break;
                case lt.SITTING_OUT:
                    this.addTableContainer.active = !1, this.actionContainer.active = !1, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!0), this.setTxtInfoByKey("Mtt_Sitting_Out");
                    break;
                case lt.RE_ENTER:
                    this.addTableContainer.active = !1, this.actionContainer.active = !1, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!0), this.setTxtInfoByKey("Mtt_Re_enter");
                    break;
                case lt.IN_BREAK:
                case lt.INFO:
                    this.addTableContainer.active = !1, this.actionContainer.active = !1, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!0)
            }
        }
        setSelected(t) {
            this._isSelected = t, this.setBackgroundColor(t), this._status != lt.SITTING_OUT && this.updateStatus()
        }
        setCards(t) {
            this.cards4Container.active = t.length > 0, this._cardIds = t;
            for (let e = 0; e < this.cards4.length; e++) {
                const i = this.cards4[e];
                e >= t.length ? i.node.active = !1 : (i.node.active = !0, i.setId(t[e]))
            }
            this.updateStatus()
        }
        setCardsSelected(t) {
            for (let e = 0; e < this._cardIds.length && e < this.cards4.length; e++) {
                let i = this.cards4[e];
                i && i.setStatusCardSelect(t)
            }
        }
        appVirbate() {
            this.hasAutoPlayVirbate || this.hasTimeVirbate || (cc_mtt.vv.ConsoleLog.log("MultipleGame appVirbate", this._multipleGameIndex), d.instance.cv.native.Vibrate())
        }
        updateStatus() {
            this.setCardsSelected(this._isSelected), this._multipleGameType == C.NONE ? this.setStatus(lt.EMPTY) : (!this._isSelected || !this.enableGameTypeDisplay) && this._cardIds && this._cardIds.length > 0 ? this.setStatus(lt.CARDS) : this._status != lt.RE_ENTER && this._status != lt.INFO && this._status != lt.IN_BREAK && this.setStatus(lt.GAME_TYPE)
        }
        setTimeType(t) {
            t ? (this.timebarSlider.node.active = !1, this.timebarAddTimeSlider.node.active = !0) : (this.timebarSlider.node.active = !0, this.timebarAddTimeSlider.node.active = !1)
        }
        showTimeBar() {
            this.timebarContainer.active = !0
        }
        setTriggerStartTime(t) {
            this.isTriggerStartShowTime = t
        }
        hideTimeBar() {
            this.needFeatureChangePage && (this.ResetChangeTable(), this.needFeatureChangePage = !1, this.isTriggerStartShowTime = !1, cc_mtt.vv.db(this._multipleGameIndex + " : hide time and set needFeatureChangePage -> FALSE")), this.isShowingTimeBar() && (this.timebarContainer.active = !1, this.isShowExcalamationIcon = !1, this.hasTimeVirbate = !1, this.setActiveExcalmationIcon(!1))
        }
        isShowingTimeBar() {
            return this.timebarContainer.active
        }
        setTimeProgress(t, e = -1, i = !1) {
            t <= 0 ? this.hideTimeBar() : (this.showTimeBar(), this.updateExclamationPoint(e), this.timebarSlider.progress = t, this.timebarAddTimeSlider.progress = t, this.needFeatureChangePage || i || (cc_mtt.vv.db("table add feature change needFeatureChangePage : index : " + this._multipleGameIndex), this.ApplyChangeTable(e)), !this.hasTimeVirbate && (e <= 5e3 || i) && (this.hasTimeVirbate = !0, this.appVirbate()))
        }
        updateExclamationPoint(t) {
            this.isTriggerStartShowTime && (this.isShowExcalamationIcon || (this.setActiveExcalmationIcon(!0), this.timeExcalmation = t, this.isShowExcalamationIcon = !0), this.timeExcalmation - t >= 3e3 && this.setActiveExcalmationIcon(!1))
        }
        ApplyChangeTable(t) {
            var e, i;
            let a = u.tools.isAutoFocusOnMobile(),
                n = null == (e = S.instance) || null == (e = e._holdemRoom) ? void 0 : e[this._multipleGameIndex],
                s = (null == n || null == (i = n.playerControl) ? void 0 : i._preselectedAction) ?? !1;
            a && !s && (S.instance && (this.needFeatureChangePage = !0, S.instance.featureChangePage(this._multipleGameIndex)), b.instance && b.isEnableAutoSwitchTableHallScene && (this.needFeatureChangePage = !0, b.DB("Do load into table..." + this._multipleGameIndex), b.instance.featureChangePage(this._multipleGameIndex)))
        }
        ResetChangeTable() {
            if (S.instance && S.instance.resetFeatureChangePageIndex(this._multipleGameIndex), b.instance) {
                b.instance.CheckAndChangePage(this._multipleGameIndex) && this.onClick()
            }
        }
        setGameType(t, e) {
            let i = rt.NLHE;
            e ? i = rt.SNG : t == g.commonProto.MTT_GAME_MODE.SHORT_DECK ? i = rt.SHORT_DECK : t == g.commonProto.MTT_GAME_MODE.OMAHA && (i = rt.OMAHA), this._gameTypeIndex != i && this.updateGameType(i), cc_mtt.vv.ConsoleLog.log("MultipleGame setGameType", this._multipleGameIndex, t, e, i)
        }
        setCashGameType(t, e) {
            let i = rt.NLHE;
            this.gameMode == u.Enum.CreateGameMode.CreateGame_Mode_Short ? i = rt.SHORT_DECK : t != u.Enum.GameId.Plo && t != u.Enum.GameId.Plo5 || (i = rt.OMAHA), this._gameTypeIndex != i && this.updateGameType(i)
        }
        updateGameType(t) {
            this._gameTypeIndex = t, this.cards4GameType.spriteFrame = this.gameTypeVeticalSpriteFrame[t], this.gameType.spriteFrame = this.gameTypeSpriteFrame[t]
        }
        setOnClickAction(t) {
            this._onClickAction = t
        }
        onClick() {
            cc_mtt.vv.ConsoleLog.log("MultipleGameTabButton", this._multipleGameIndex, this._onClickAction), -1 != this._multipleGameIndex && this._onClickAction && this._onClickAction instanceof Function && this._onClickAction(this._multipleGameIndex, this.multipleGameInfo)
        }
        setOnClickCloseTable(t) {
            this._onClickCloseTable = t
        }
        setActiveExcalmationIcon(t) {
            null != this.potIcon && (this.potIcon.active = t)
        }
        loadBackgroundColor() {
            if (null == this.background) return;
            let t = this.background.children;
            null == t && t.length < 2 || (this._backgroundSelected = t[0], this._backgroundUnselected = t[1], this.setBackgroundColor(!1))
        }
        setBackgroundColor(t) {
            null != this._backgroundSelected && null != this._backgroundUnselected && null != this.background && (this._backgroundSelected.active = t, this._backgroundUnselected.active = !t)
        }
        setActiveTextInfoContainer(t) {
            null != this.textInfoContainer && (this.textInfoContainer.active = t)
        }
        setTxtInfoByKey(t) {
            const e = this.textInfo.getComponent(c);
            e ? e.setKey(t, !0) : this.textInfo.string = u.config.getStringData(t)
        }
        setActiveCloseTable(t) {
            null != this.closeTableContainer && (this.closeTableContainer.active = t)
        }
        getActiveCloseTable() {
            return null != this.closeTableContainer && this.closeTableContainer.active
        }
        onClickCloseTable() {
            -1 != this._multipleGameIndex && this._onClickCloseTable && this._onClickCloseTable instanceof Function && this._onClickCloseTable(this._multipleGameIndex), this.setActiveCloseTable(!1)
        }
        setBreakingTime(t) {
            this.restTime = t, this.getStatus() != lt.IN_BREAK && (this.setPreStatus(), this.setStatus(lt.IN_BREAK)), this.unschedule(this.countDownRest), this.schedule(this.countDownRest, 1)
        }
        stopBreakTime() {
            this.unschedule(this.countDownRest), this.restTime = 0, !this.isSngGame() && -1 != this._multipleGameIndex && S.instance ? this.setText(S.instance._holdemRoom[this._multipleGameIndex].store.getMttRoomName()) : (this.setActiveTextInfoContainer(!1), this._prevStatus = lt.GAME_TYPE, this.setStatus(this._prevStatus))
        }
        countDownRest() {
            let t = Math.floor((this.restTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
            if (0 === this.restTime || t <= 0) return void this.stopBreakTime();
            const e = Math.floor(t / 60),
                i = t % 60;
            let a = (Array(2).join("0") + e).slice(-2) + ":" + (Array(2).join("0") + i).slice(-2),
                n = T("MTT_PINEAPPLE.MIDDLE_ROUND_REST_NOTIFICATION") + "\n" + a;
            const s = this.textInfo.getComponent(c);
            s ? s.setText(n) : this.textInfo.string = n
        }
        isSngGame() {
            const t = this.multipleGameInfo;
            return this.multipleGameInfo && this.multipleGameInfo.type == C.HOLDEM && t.gameMode == g.commonProto.MTT_GAME_MODE.NLH && t.gameListId == p.GAME_LEVEL_LIST_ID.SNG
        }
        checkSngStatus() {
            var e;
            if (u.config.getCurrentScene() == u.Enum.SCENE.HALL_SCENE && null != (e = this.multipleGameInfo) && e.isWatching) switch (this._status) {
                case t.SNG_LOBBY_WATCH_GAME_STATUS:
                case t.SNG_LOBBY_GAME_OVER_STATUS:
                    this.addTableContainer.active = !1, this.actionContainer.active = !1, this.gameTypeContainer.active = !1, this.setActiveTextInfoContainer(!0), this.setTxtInfoByKey("GS_watchGame")
            }
        }
    }).SNG_LOBBY_WATCH_GAME_STATUS = 2, nt.SNG_LOBBY_GAME_OVER_STATUS = 6, V = e((H = nt).prototype, "background", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(H.prototype, "addTableContainer", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(H.prototype, "actionContainer", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(H.prototype, "gameTypeContainer", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(H.prototype, "timebarSlider", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(H.prototype, "timebarAddTimeSlider", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(H.prototype, "timebarContainer", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(H.prototype, "cards4Container", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(H.prototype, "cards4", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Q = e(H.prototype, "cards4GameType", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(H.prototype, "gameType", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(H.prototype, "gameTypeSpriteFrame", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = e(H.prototype, "gameTypeVeticalSpriteFrame", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), tt = e(H.prototype, "potIcon", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(H.prototype, "textInfo", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(H.prototype, "textInfoContainer", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(H.prototype, "closeTableContainer", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = H)) || L));
    a._RF.pop()
}
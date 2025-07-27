import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./AutoResizeLabel.js";
import * as m from "./ThemeSystem.js";
import * as d from "./ThemeSystemForGradient.js";
import * as p from "./AutoWrapAndLimitLengthLabel.js";
import * as g from "./CurrencyValue.js";
import * as b from "./cv.js";
import * as f from "./Translator.js";
import * as y from "./Pb.js";
import * as S from "./FormatParser.js";
import * as T from "./LobbyTools.js";
import * as M from "./MttItemHelper.js";
import * as R from "./PlayerCount.js";
import * as I from "./MttItemRenderHelper.js";

function main() {
    var P, L, N, C, z, D, G, A, w, v, _, B, E, k, x, F, U, H, O, V, K, J, W, j, q, X, Y, Q, Z, $, ee, te, ie, re, ae, oe, ne, se, le, ue, ce, he, me, de, pe, ge, be, fe, ye, Se;
    r._RF.push({}, "6df10kmynJHbqXcOMJkApyL", "MttGameItemRender", void 0);
    const {
        ccclass: Te,
        property: Me
    } = s;
    e("default", (P = Me(h), L = Me(p), N = Me(a), C = Me(a), z = Me(g), D = Me(g), G = Me(g), A = Me(d), w = Me(m), v = Me(m), _ = Me(m), B = Me(m), E = Me(m), k = Me(m), x = Me(m), F = Me(M), U = Me(o), H = Me(o), O = Me(o), V = Me(n), K = Me(d), J = Me(m), W = Me(n), j = Me(a), Te((Y = t((X = class extends l {
        constructor(...e) {
            super(...e), this.mvcView = null, i(this, "labelName", Y, this), i(this, "labelRoomStatus", Q, this), i(this, "labelDateInfo", Z, this), i(this, "labelGameMode", $, this), i(this, "currencyBuyIn", ee, this), i(this, "currencyPrizePool", te, this), i(this, "registeredPlayers", ie, this), i(this, "gameSpeedBg", re, this), i(this, "gameModeBg", ae, this), i(this, "gameModeText", oe, this), i(this, "statusBg", ne, this), i(this, "statusText", se, this), i(this, "statusTimeText", le, this), i(this, "statusIcon", ue, this), i(this, "statusBgText", ce, this), i(this, "playerCount", he, this), i(this, "bountyNode", me, this), i(this, "ticketNode", de, this), i(this, "gameSpeedIconNodes", pe, this), i(this, "gameStatusIcon", ge, this), i(this, "titleBgGradient", be, this), i(this, "titleLabelNode", fe, this), i(this, "titleIconNode", ye, this), i(this, "forceUpdateLabel", Se, this), this.status = 0, this.startingTime = void 0, this.timeStampLateReg = -1, this.timerStop = !1, this.duration = 0, this.updatedAt = 0, this.roomStatusI18nKey = null, this.roomName = void 0, this.roomNameI18n = void 0, this.gameMode = void 0, this.gameSpeed = void 0, this.abbreviationFormat = !0, this._onClickHandler = void 0, this._onDoubleClickHandler = void 0, this.isTimerStopFirstTime = !0, this.prizePoolThreshold = new Map([
                [I.USD, 1e8],
                [I.CNY, 1e4]
            ])
        }
        get timeDiffFromLastUpdate() {
            return Math.floor((cc_mtt.vv.DataManager.getNow().getTime() - this.updatedAt) / 1e3)
        }
        get gameDuration() {
            return Math.max(0, this.timerStop ? this.duration : this.duration + this.timeDiffFromLastUpdate)
        }
        onLoad() {
            b.MessageCenter.register(b.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node)
        }
        onDestroy() {
            b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this.node)
        }
        onLanguageChanged() {
            this.setRoomName(this.roomName, this.roomNameI18n), this.setRoomStatusLabel(this.roomStatusI18nKey), this.setGameMode(this.gameMode)
        }
        registerHandlers(e) {
            this._onClickHandler = e
        }
        onClicked() {
            var e;
            null == (e = this._onClickHandler) || e.call(this)
        }
        setRoomName(e, t, i) {
            this.roomName = e, this.roomNameI18n = t, R.setRoomName(this.labelName, e, t, i)
        }
        setRoomStatusLabel(e) {
            var t;
            this.roomStatusI18nKey = e, null == (t = this.labelRoomStatus) || t.setString(b.StringTools.convertText(f(e), 4))
        }
        setColorStatus(e, t, i) {
            const r = [this.statusBg, this.statusText, this.statusTimeText, this.statusIcon, this.statusBgText],
                a = R.getRenderRoomStatus(e, t, i);
            R.applyGameStatusColorLstMtt(a, r);
            const o = R.gameStatusColorMap;
            R.setSprite(this.gameStatusIcon, a, o)
        }
        setDateStatus(e, t, i, r, a, o, n) {
            this.unschedule(this.updateLateReg), this.unschedule(this.updateStartedScheduler);
            let s = "";
            switch (this.status = e, this.startingTime = t, this.timeStampLateReg = i, this.timerStop = r, this.duration = o, e) {
                case y.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    a > 0 ? s = "" : T.checkStartingTime(t) && (s = T.showDateOrTime(this.startingTime, !1)), this.setDateInfo(s);
                    break;
                case y.commonProto.MTT_GAME_STATUS.STARTED:
                case y.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    s = T.getRemainTimeString(Math.max(this.getTimeLeftSec(), 0), "PKWMTT.GAMELIST.LATE_REG", !0, !1), this.updateLateReg(), this.schedule(this.updateLateReg, 1, u.REPEAT_FOREVER);
                    break;
                case y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.updateStarted(), this.timerStop || this.schedule(this.updateStartedScheduler, 1, u.REPEAT_FOREVER);
                    break;
                case y.commonProto.MTT_GAME_STATUS.ENDED:
                    s = "", this.setDateInfo(s)
            }
        }
        static getRoomStatusTranslation(e) {
            return f(e)
        }
        getTimeLeftSec() {
            return T.timeStampToTimeLeftSec(this.timeStampLateReg)
        }
        updateLateReg() {
            const e = this.getTimeLeftSec();
            let t = this.timerStop;
            !R.setTimeLeftSecLabel(this.labelDateInfo, e, t, this.isTimerStopFirstTime) && e <= -10 && this.unschedule(this.updateLateReg), t && (this.isTimerStopFirstTime = !1)
        }
        updateStarted() {
            let e = this.gameDuration;
            if (e > 0) {
                const t = T.showRemainTime(!0, e);
                this.setDateInfo(t)
            }
        }
        updateStartedScheduler() {
            this.updateStarted()
        }
        setRoomStatus(e, t, i) {
            this.setRoomStatusLabel(e), c(i) || (i = ""), this.setDateInfo(i)
        }
        setDateInfo(e) {
            this.labelDateInfo.string = e
        }
        setGameMode(e) {
            this.gameMode = e, this.labelGameMode.string = R.getGameMode(e), R.applyGameModeColor(e, this.gameModeBg, this.gameModeText)
        }
        setRegisteredPlayers(e) {
            this.registeredPlayers.value = S.ThousandPointFormat(e)
        }
        setMaxPlayers(e) {
            this.playerCount.setData(e)
        }
        setBounty(e) {
            this.bountyNode.active = e
        }
        setTicket(e) {
            this.ticketNode.active = e
        }
        setGameSpeed(e) {
            if (this.gameSpeed = e, R.applyGameSpeedColor(e, this.gameSpeedBg), R.speedColorMap && R.speedColorMap.data.has(e))
                for (let t = 0; t < this.gameSpeedIconNodes.length; t++) {
                    const i = t <= e;
                    this.gameSpeedIconNodes[t].active = i
                }
        }
        setPrizePool(e, t, i, r, a) {
            R.setPrizePool(this.currencyPrizePool, e, t, i, r, a, this.abbreviationFormat)
        }
        setBuyIn(e, t, i, r, a, o, n = 0) {
            R.setBuyIn(this.currencyBuyIn, S.DisplayGold(e), t, i, a, r, o, n, 6)
        }
        setColorIndentifier(e, t = 0) {
            const i = [this.titleBgGradient, this.titleLabelNode];
            R.applyTitleColor(e, i);
            const r = R.titleColorMap;
            R.setSprite(this.titleIconNode, t, r, !0)
        }
        render(e) {
            this.isTimerStopFirstTime = !0, this.updatedAt = e.updatedAt, this.duration = e.duration, this.setRoomName(e.roomName, e.roomNameI18n, e.cachedShorterMttName), this.setRoomStatusLabel(e.roomStatusI18nKey), this.setColorStatus(e.roomStatusNumber, e.isPaused, e.isRegistered), this.setDateStatus(e.roomStatusNumber, e.startingTime, e.timeStampLateReg, e.timerStop, e.playerOnJoint, e.duration, e.allowSignupDate), this.setGameMode(e.gameMode), this.setBuyIn(e.buyIn, e.showTicketStringOnBuyIn, e.currency, e.convertCurrency, e.displayCurrency, e.currencyRate, e.multiFlightLevel), this.setTicket(e.hasTicket), this.setRegisteredPlayers(e.registeredPlayer), this.setMaxPlayers(e.maxPlayers), this.setBounty(e.isBounty), this.setGameSpeed(e.gameSpeed), this.setPrizePool(e.prizePool, e.currency, e.convertCurrency, e.displayCurrency, e.currencyRate), this.setColorIndentifier(e.colorIndentifier, e.colorIndentifierSubType), this.forceUpdateRenderData()
        }
        updateCurrency(e) {
            this.setBuyIn(e.buyIn, e.showTicketStringOnBuyIn, e.currency, e.convertCurrency, e.displayCurrency, e.currencyRate, e.multiFlightLevel), this.setPrizePool(e.prizePool, e.currency, e.convertCurrency, e.displayCurrency, e.currencyRate)
        }
        forceUpdateRenderData() {
            try {
                this.forceUpdateLabel.forEach((e => {
                    e.updateRenderData()
                }))
            } catch (e) {
                console.error(e)
            }
        }
        updateSelected(e) {}
        setDoubleClickHandler(e) {
            this._onDoubleClickHandler = e
        }
    }).prototype, "labelName", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(X.prototype, "labelRoomStatus", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(X.prototype, "labelDateInfo", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(X.prototype, "labelGameMode", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(X.prototype, "currencyBuyIn", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(X.prototype, "currencyPrizePool", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(X.prototype, "registeredPlayers", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(X.prototype, "gameSpeedBg", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(X.prototype, "gameModeBg", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(X.prototype, "gameModeText", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(X.prototype, "statusBg", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(X.prototype, "statusText", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(X.prototype, "statusTimeText", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(X.prototype, "statusIcon", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(X.prototype, "statusBgText", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(X.prototype, "playerCount", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(X.prototype, "bountyNode", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(X.prototype, "ticketNode", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(X.prototype, "gameSpeedIconNodes", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ge = t(X.prototype, "gameStatusIcon", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(X.prototype, "titleBgGradient", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(X.prototype, "titleLabelNode", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(X.prototype, "titleIconNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(X.prototype, "forceUpdateLabel", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), q = X)) || q));
    r._RF.pop()
}
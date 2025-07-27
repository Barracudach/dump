import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as v from "./soundEffect.js";
import * as g from "./Holdem_Basic_Item.js";
import * as f from "./ThemeSystemForGradient.js";
import * as y from "./ThemeSystem.js";
import * as P from "./cv.js";
import * as O from "./MultipleGame.js";
import * as S from "./ColorSystemType.js";
import * as C from "./ColorSystemTypeOther.js";
import * as k from "./CrashTracing.js";
import * as _ from "./CrashTracing.js";
import * as G from "./EventCustom.js";
import * as E from "./TweenControl.js";

function main() {
    var w, A, R, b, x, M, F, N, B, I;
    r._RF.push({}, "8ddccwaVR1O9JO73XUavhZe", "Holdem_PlayerTimer_ts", void 0);
    const {
        ccclass: D,
        property: H
    } = n;
    e("Holdem_PlayerTimer", (w = H(o), A = H(s), R = H(l), b = H(s), D((F = t((M = class extends g {
        constructor(...e) {
            super(...e), i(this, "progressBar", F, this), i(this, "spark", N, this), i(this, "timeText", B, this), i(this, "overTimeNode", I, this), this.player = null, this._time = 10, this._timeUpAt = 0, this.bank = 0, this.inActiveTimeout = void 0, this._alertTime = 10, this._alertTimeOriginal = 10, this.isExtraTime = !1, this.startTimerFunction = null, this._selfTimer = !1, this.isTimeCounting = !1, this.progressType = -1
        }
        get isSelfTimer() {
            return this._selfTimer
        }
        set isSelfTimer(e) {
            this._selfTimer = e
        }
        onLoad() {
            this.node.active = !1, this._alertTimeOriginal = this._alertTime
        }
        update() {
            let e = this.remainTime;
            if (e >= 0) {
                let i = Math.round(e / 1e3);
                this.timeText.string = 0 != i ? i + "" : "", (this.player && this.player.room && !this.player.room.isReplay || !this.player) && (0 != i ? this.isSelfTimer && this.isExtraTime && this.holdemRoom && this.holdemRoom.setTimeBankRemainTime(i) : this.isSelfTimer && (this.node.children[0].active = !1), this._time - e / 1e3 > this._alertTime && this.node.dispatchEvent(new G("TimeOverAlert", !1)));
                let r = e / this._time / 1e3;
                var t;
                if (r = Math.max(r, 0), this.updateProgress(r), !P.appConfig.getGeneralConfig().multiWindowEnabled && O.getFakeMultipleGame() && this.holdemRoom && this.holdemRoom.multipleGameIndex >= 0 && !this.player) null == (t = O.getFakeMultipleGame()._multipleGameTabButtons[this.holdemRoom.multipleGameIndex]) || t.setTimeProgress(r, e, this.isExtraTime)
            } else if (null === this.inActiveTimeout) this.inActiveTimeout = setTimeout((() => {
                null != this && m(this.node, !0) && (this.inActiveTimeout = null, this.node.active = !1)
            }), 1e3 * this.bank);
            else {
                var i;
                if (!P.appConfig.getGeneralConfig().multiWindowEnabled && O.getFakeMultipleGame() && this.holdemRoom && this.holdemRoom.multipleGameIndex >= 0 && !this.player) null == (i = O.getFakeMultipleGame().getRoomByIndex(this.holdemRoom.multipleGameIndex)) || i.StopTimer()
            }
        }
        setProgressBarExtra(e) {
            !P.appConfig.getGeneralConfig().multiWindowEnabled && O.getFakeMultipleGame() && this.holdemRoom && this.holdemRoom.multipleGameIndex >= 0 && !this.player && O.getFakeMultipleGame()._multipleGameTabButtons[this.holdemRoom.multipleGameIndex].setTimeType(e)
        }
        startTimer(e, t, i = 0, r = !1) {
            this.showPlayerName(!1), this.isTimeCounting = !0, this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), r ? this.runOverTimeEffect() : this.stopOverTimeEffect(), this.startTimerFunction = setTimeout((() => {
                var o, s;
                if (null == this || !m(this.node, !0)) return;
                this.inActiveTimeout && (clearTimeout(this.inActiveTimeout), this.inActiveTimeout = null), this._time = e, void 0 === t && (t = e), this._timeUpAt = Date.now() + 1e3 * t, (null != (o = this.holdemRoom) && null != (o = o.store) && o.isSngGame() || null != (s = this.player) && null != (s = s.room) && null != (s = s.store) && s.isSngGame()) && (this._alertTimeOriginal && (this._alertTime = this._alertTimeOriginal), this._time <= this._alertTime && (this._alertTime = .5 * this._time)), this.isExtraTime = r, this.bank = i, this.timeText.string = "", this.setProgressBarExtra(r), this.isSelfTimer && (this.node.children[0].active = !0), this.node.on("TimeOverAlert", this.timeOverAlert, this);
                let l = 0;
                for (; !this.node.active && l < 100;) this.node.active = !0, l++;
                var n, a, h;
                l >= 100 && (null == (n = k.getInstance()) || n.trace(_.MttIssues, "GameFreeze", {
                    issue: "Loop Active Timer",
                    nodeName: this.node.name,
                    nodeActive: this.node.active,
                    parentName: null == (a = this.node.parent) ? void 0 : a.name,
                    parentActive: null == (h = this.node.parent) ? void 0 : h.active,
                    iteration: l
                }, !1, !0))
            }), 5), !P.appConfig.getGeneralConfig().multiWindowEnabled && O.getFakeMultipleGame() && this.holdemRoom && this.holdemRoom.multipleGameIndex >= 0 && !this.player && O.getFakeMultipleGame()._multipleGameTabButtons[this.holdemRoom.multipleGameIndex].showTimeBar()
        }
        stopTimer() {
            var e;
            (this.isTimeCounting = !1, this.showPlayerName(!0), this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), this.stopOverTimeEffect(), this.isSelfTimer && (this.node.children[0].active = !1), this.stopCardShake(), this.node.active = !1, !P.appConfig.getGeneralConfig().multiWindowEnabled && O.getFakeMultipleGame() && this.holdemRoom && this.holdemRoom.multipleGameIndex >= 0 && !this.player) && (null == (e = O.getFakeMultipleGame().getRoomByIndex(this.holdemRoom.multipleGameIndex)) || e.StopTimer())
        }
        updateProgress(e) {
            this.updateProgressBar(e), this.updateProgressBarParticleEffect(e)
        }
        updateProgressBarParticleEffect(e) {
            let t = this.spark.getComponent(a).contentSize.width,
                i = -t / 2,
                r = this.spark.getComponentInChildren(h);
            r && (r.node.position = new d(i + e * t, -3))
        }
        updateProgressBar(e) {
            this.progressBar.progress = e;
            let t = this.progressBar.node.getComponent(f),
                i = null;
            this.timeText && (i = this.timeText.node.getComponent(y)), t && (e > .75 ? 0 != this.progressType && (t.setColorScheme(S.Other, C.PokerTimerOver75PercentStart), t.setMiddleColorScheme(S.Other, C.PokerTimerOver75PercentMiddle), t.setEndColorScheme(S.Other, C.PokerTimerOver75PercentEnd), i && i.setColorScheme(S.Other, C.PokerTimerOver75PercentMiddle), this.progressType = 0) : e > .5 ? 1 != this.progressType && (t.setColorScheme(S.Other, C.PokerTimerOver50PercentStart), t.setMiddleColorScheme(S.Other, C.PokerTimerOver50PercentMidle), t.setEndColorScheme(S.Other, C.PokerTimerOver50PercentEnd), i && i.setColorScheme(S.Other, C.PokerTimerOver50PercentMidle), this.progressType = 1) : e > .25 ? 2 != this.progressType && (t.setColorScheme(S.Other, C.PokerTimerOver25PercentStart), t.setMiddleColorScheme(S.Other, C.PokerTimerOver25PercentMiddle), t.setEndColorScheme(S.Other, C.PokerTimerOver25PercentEnd), i && i.setColorScheme(S.Other, C.PokerTimerOver25PercentMiddle), this.progressType = 2) : 3 != this.progressType && (t.setColorScheme(S.Other, C.PokerTimerOver0PercentStart), t.setMiddleColorScheme(S.Other, C.PokerTimerOver0PercentMiddle), t.setEndColorScheme(S.Other, C.PokerTimerOver0PercentEnd), i && i.setColorScheme(S.Other, C.PokerTimerOver0PercentMiddle), this.progressType = 3))
        }
        timeOverAlert() {
            m(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect(v.TimeOverTip, this.holdemRoom.store), this.startCardShake(), this.node.off("TimeOverAlert", this.timeOverAlert, this)
        }
        startCardShake() {
            this.player && this.player.cardsHandlerAnchor.getComponent(u).play()
        }
        stopCardShake() {
            this.player && (this.player.cardsHandlerAnchor.angle = 0, this.player.cardsHandlerAnchor.getComponent(u).stop())
        }
        onDestroy() {
            this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), this.inActiveTimeout && (clearTimeout(this.inActiveTimeout), this.inActiveTimeout = null)
        }
        showPlayerName(e) {
            this.player && this.player.info.showNameIfAllowed(e)
        }
        get remainTime() {
            return this._timeUpAt - Date.now()
        }
        runOverTimeEffect() {
            this.player && this.player.isSelf() ? this.overTimeNode.setPosition(new d(85, -8, 0)) : this.overTimeNode.setPosition(new d(0, -8, 0)), this.overTimeNode && (this.overTimeNode.active = !0, this.overTimeNode.setScale(c(0, 0, 0)), p(this.overTimeNode).sequence(p().to(.4, {
                scale: new d(1.2, 1.2, 1)
            }), p().to(.4, {
                scale: new d(1, 1, 1)
            }, {
                easing: E.easeInOut(.5)
            }), p().delay(1), p().call((() => {
                this.overTimeNode.active = !1, this.overTimeNode.setScale(c(0, 0, 0))
            }))).start())
        }
        stopOverTimeEffect() {
            this.overTimeNode && this.overTimeNode.active && (T.stopAllByTarget(this.overTimeNode), this.overTimeNode.active = !1, this.overTimeNode.setScale(new d(0, 0, 0)))
        }
        setAutoPlayStatus(e, t = !1) {}
    }).prototype, "progressBar", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(M.prototype, "spark", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(M.prototype, "timeText", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(M.prototype, "overTimeNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), t(M.prototype, "isSelfTimer", [H], Object.getOwnPropertyDescriptor(M.prototype, "isSelfTimer"), M.prototype), x = M)) || x));
    r._RF.pop()
}
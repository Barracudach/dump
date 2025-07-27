import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./FormatParser.js";
import * as u from "./PageThreeFinalPlayerTuplePkw.js";
import * as p from "./MttHallPkw.js";
import * as f from "./CardRecordMTTHallPrefab.js";
import * as P from "./ImpokerHall.js";

function main() {
    var y, m, g, b, T, _, S, R, C, w;
    a._RF.push({}, "1b31daY2AhBp5LBJPb276/U", "PageThreeFinalPlayerPagePkw", void 0);
    const {
        ccclass: I,
        property: k
    } = s;
    e("default", (y = k(r), m = k(n), g = k(l), b = k(l), I((S = t((_ = class extends o {
        constructor(...e) {
            super(...e), i(this, "countdownTxt", S, this), i(this, "finalPlayerTable", R, this), i(this, "finalPlayerTuple", C, this), i(this, "cardRecordPrefab", w, this), this.leftSec = 0, this.cardRecordScript = void 0, this._tournamentId = 0, this._gameName = "", this._gameEndTime = null, this._userId = 0, this._playerCount = 0, this._category = void 0, this._playOnJoint = 0
        }
        start() {}
        setDisplayCardCountDown(e) {
            this.leftSec = e, this.countdownTxt.string = d.changeSecToTime(this.leftSec), this.unscheduleAllCallbacks(), this.schedule(this.countDownSchedule, 1)
        }
        countDownSchedule() {
            this.leftSec = Math.max(0, this.leftSec - 1), this.countdownTxt.string = d.changeSecToTime(this.leftSec), this.leftSec <= 0 && (this.unscheduleAllCallbacks(), p.instance.callReturnPopUp("MTT_HALL.GAME_TIMER.GAME_OVER"))
        }
        setFinalPlayers(e) {
            e.forEach((e => {
                let t = this.finalPlayerTable.getChildByName(e.UserId.toString());
                c(t) || (t = h(this.finalPlayerTuple), t.name = e.UserId.toString(), t.parent = this.finalPlayerTable), t.setSiblingIndex(e.Rank), t.getComponent(u).setInfo(e, this)
            })), this.finalPlayerTable.children.forEach((t => {
                e.find((e => t.name === e.UserId.toString())) || t.destroy()
            }))
        }
        setPage(e, t, i, a, r, n, l, s = 0) {
            this._tournamentId = i, this._gameName = a, this._gameEndTime = r, this._playerCount = n, this._category = l, this._playOnJoint = s, this.setDisplayCardCountDown(t), this.setFinalPlayers(e)
        }
        clickTupleByUserId(e, t) {
            this.finalPlayerTable.children.forEach((i => {
                let a = i.getComponent(u);
                a.playerData.UserId == e && a.onClick(t)
            }))
        }
        createCardRecordPrefab(e, t) {
            if (e && c(this.cardRecordPrefab)) {
                if (!this.cardRecordScript || !c(this.cardRecordScript.node)) {
                    let e = h(this.cardRecordPrefab);
                    e.parent = P.instance.layers[1], e.setPosition(P.instance.position[2].position), e && (this.cardRecordScript = e.getComponent(f))
                }
                this.cardRecordScript && c(this.cardRecordScript.node) && P.instance.movePageFromRight(this.cardRecordScript.node, P.instance.hallLayer, !1, !1, (() => {
                    this.cardRecordScript._parentNode = this.node, this.cardRecordScript.setData(this._tournamentId, this._gameName, this._gameEndTime, e.UserId, e.Nickname, this._playerCount, this._category, this._playOnJoint), t && t instanceof Function && t()
                }))
            }
        }
    }).prototype, "countdownTxt", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(_.prototype, "finalPlayerTable", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(_.prototype, "finalPlayerTuple", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(_.prototype, "cardRecordPrefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = _)) || T));
    a._RF.pop()
}
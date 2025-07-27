import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./NodePage.js";
import * as h from "./FormatParser.js";
import * as p from "./Translator.js";
import * as b from "./TweenControl.js";

function main() {
    var d, g, m, f, D, T, w, P, y, S, A, I, E, L, N, v, z, k, M, R, C, B;
    i._RF.push({}, "9dfafS86FtHW5TQ7QWC3ATU", "AgentPlayerDetailTuple", void 0);
    const {
        ccclass: F,
        property: H
    } = a;
    t("AgentPlayerDetailTuple", (d = H(o), g = H(o), m = H(o), f = H(o), D = H(o), T = H(o), w = H(o), P = H(r), y = H(r), S = H(r), F((E = e((I = class extends s {
        constructor(...t) {
            super(...t), n(this, "gameName", E, this), n(this, "buyIn", L, this), n(this, "benefit", N, this), n(this, "startDate", v, this), n(this, "endDate", z, this), n(this, "rank", k, this), n(this, "hands", M, this), n(this, "dropDownBtn", R, this), n(this, "dropDownBtnIcon", C, this), n(this, "bottomPart", B, this), this.tupleData = null, this.actionSpeedInSecond = .15
        }
        onLoad() {
            this.bottomPart.scale = new l(this.bottomPart.scale.x, 0, this.bottomPart.scale.z), this.bottomPart.active = !1
        }
        start() {}
        setInfo(t) {
            this.gameName.string = t.name, this.buyIn.string = c.roundCoins(t.buyCoins), this.benefit.string = h.DisplayGold(t.prizeMoney).toString(), this.hands.string = p("AGENT.PLAYER.DETAIL.TUPLE.HANDS") + t.roundCount.toString(), this.showRank(t.rank > 0, t), this.endDate.string = p("AGENT.PLAYER.DETAIL.TUPLE.END") + this.showDate(t.endTime), this.startDate.string = p("AGENT.PLAYER.DETAIL.TUPLE.START") + this.showDate(t.startTime)
        }
        showRank(t, e) {
            this.rank.node.active = t, t && (this.rank.string = p("AGENT.PLAYER.DETAIL.TUPLE.RANK") + e.rank.toString())
        }
        showValue(t) {
            let e = cc_mtt.vv.DataManager.roundCoins(t);
            return t > 0 ? "+" + e : e
        }
        showDate(t) {
            if (t) {
                let [e, n, i, o, r, a] = this.handleTimeLabel(t);
                return `${o}-${r}-${a} ${e}:${n}`
            }
            return ""
        }
        handleTimeLabel(t) {
            let e = t.getFullYear(),
                n = t.getMonth() + 1,
                i = t.getDate();
            return [t.getHours() < 10 ? "0" + t.getHours() : t.getHours(), t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(), t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(), e, n, i]
        }
        onTupleClicked() {
            this.checkToShow() ? this.showMoreDetail() : this.hideMoreDetail()
        }
        checkToShow() {
            return !this.bottomPart.active
        }
        showMoreDetail() {
            this.bottomPart.active = !0, b.scaleTo(this.bottomPart, this.actionSpeedInSecond, u(l.ONE)), b.rotateTo(this.dropDownBtnIcon, this.actionSpeedInSecond, 90)
        }
        hideMoreDetail() {
            b.scaleTo(this.bottomPart, this.actionSpeedInSecond, u(1, 0, 1)), b.rotateTo(this.dropDownBtnIcon, this.actionSpeedInSecond, 270), setTimeout((() => {
                this.bottomPart.active = !1
            }), 1e3 * this.actionSpeedInSecond)
        }
        resetTuple() {
            this.bottomPart.active = !1, this.dropDownBtnIcon.angle = 270
        }
    }).prototype, "gameName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(I.prototype, "buyIn", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(I.prototype, "benefit", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(I.prototype, "startDate", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(I.prototype, "endDate", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(I.prototype, "rank", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(I.prototype, "hands", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(I.prototype, "dropDownBtn", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(I.prototype, "dropDownBtnIcon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(I.prototype, "bottomPart", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = I)) || A));
    i._RF.pop()
}
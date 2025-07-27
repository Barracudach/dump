import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./ImpokerHall.js";
import * as w from "./SignUpWithToolTuple.js";
import * as v from "./mttconfig.js";
import * as _ from "./CommonTools.js";
import * as mod6 from "./SignUpBoxProperty.js";
import * as k from "./cv.js";
import * as P from "./Translator.js";
import * as I from "./TweenControl.js";

function main() {
    var V, S, U, O, B, E, z, M, x, D, R, L, N, F, G, A, H, W, Z, Y, j, q, K, $, J, Q, X, tt, et, it, ot, nt, lt, st, rt, at, ht, ct;
    o._RF.push({}, "1a8e2FqPf5GKq9WjDplZnhK", "SignUpWithToolPopUp", void 0);
    const {
        ccclass: pt,
        property: ut
    } = a;
    t("SignUpWithToolPopUp", (V = ut(n), S = ut(n), U = ut(l), O = ut(l), B = ut(l), E = ut(l), z = ut(n), M = ut(s), x = ut(s), D = ut(r), R = ut(n), L = ut(n), N = ut(n), F = ut(l), G = ut(n), A = ut(l), H = ut(n), W = ut(l), pt((j = e((Y = class extends h {
        constructor(...t) {
            super(...t), i(this, "blockLayer", j, this), i(this, "popUp", q, this), i(this, "title", K, this), i(this, "regFee", $, this), i(this, "balance", J, this), i(this, "notice", Q, this), i(this, "toggleGroup", X, this), i(this, "okButton", tt, this), i(this, "cancelButton", et, this), i(this, "scrollView", it, this), i(this, "ticketTuple", ot, this), i(this, "toggleGold", nt, this), i(this, "timer", lt, this), i(this, "timerValue", st, this), i(this, "timerEnd", rt, this), i(this, "timerEndValue", at, this), i(this, "rebuyBalance", ht, this), i(this, "rebuyBalanceValue", ct, this), this._hallScript = null, this._actionSpeed = .15, this.toolSelected = null, this.signUpBoxProperty = null, this.tupleHeight = 0, this.spawnNum = 9, this.spacing = 30, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.tools = [], this.aofReliveTime = 0, this.timerEndTime = 0, this.okCallback = void 0, this.cancelCallback = void 0
        }
        onLoad() {
            this.node.getComponent(c).opacity = 0, this.popUp.scale = new p(1e-4, 1e-4, 1e-4), this._hallScript = _.instance.getParentScene(u, this.node).getComponentInChildren(C), this.toggleGold.on("toggle", (() => {
                this.toolSelected = null
            })), this.tupleHeight = this.ticketTuple.getComponent(g).height
        }
        update(t) {
            this.tools.length < 4 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.tools, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, o) {
            let n = i.content.position.y < o,
                l = (this.tupleHeight + this.spacing) * e.length;
            for (let o = 0; o < e.length; o++) {
                let s = this.getPositionInView(e[o]);
                if (n) {
                    if (s.y < -this.bufferZone && e[o].position.y + l < 0) {
                        e[o].position = new p(e[o].position.x, e[o].position.y + l, e[o].position.z);
                        let i = e[o].getComponent(w)._tupleId - e.length;
                        this.updateTuples(e[o], t[i], i)
                    }
                } else if (s.y > this.bufferZone && e[o].position.y - l > -i.content.getComponent(g).height) {
                    e[o].position = new p(e[o].position.x, e[o].position.y - l, e[o].position.z);
                    let i = e[o].getComponent(w)._tupleId + e.length;
                    this.updateTuples(e[o], t[i], i)
                }
            }
            return i.content.position.y
        }
        getPositionInView(t) {
            let e = t.parent.getComponent(g).convertToWorldSpaceAR(t.position);
            return this.scrollView.node.getComponent(g).convertToNodeSpaceAR(e)
        }
        callPopUp(t, e, i) {
            if (m(this.node)) {
                if (this.signUpBoxProperty = t, this.setInfo(), cc_mtt.vv.ConsoleLog.log("relive debug", t.showTimer, t.gameId, v.GAME_TO_TOOL_ID.AOF), this.signUpBoxProperty.gameId == v.GAME_TO_TOOL_ID.MTT && t.startingScore > 0 && 1 === t.regType && (this.setupRebuyBalance(), this.setupEndTimeTimer(t.showTimer)), t.gameId == v.GAME_TO_TOOL_ID.AOF && t.showTimer) {
                    this.timer.active = !0;
                    let e = t.showTimer - Math.floor(cc_mtt.vv.DataManager.getNow().getTime() / 1e3);
                    this.aofReliveTime = e > 0 ? e : 0, this.timerValue.string = this.aofReliveTime.toString(), this.schedule((() => {
                        this.updateTimerValue()
                    }), 1)
                }
                return this.okCallback = e, this.cancelCallback = i, this.scheduleOnce((() => {
                    this.zoomIn()
                }), 0), this
            }
        }
        setInfo() {
            this.title.isBold = !0, this.title.string = this.signUpBoxProperty.popUpName, this.regFee.string = this.signUpBoxProperty.regFee.toString();
            let t = cc_mtt.vv.DataManager && cc_mtt.vv.DataManager.userData ? cc_mtt.vv.DataManager.userData.Gold : 0;
            cc_mtt.vv.DataManager.needGoldCheck ? this.balance.string = t.toFixed(2) : this.balance.node.parent.active = !1, this.createTickets()
        }
        updateTimerValue() {
            this.aofReliveTime > 0 ? (this.aofReliveTime--, this.timerValue.string = this.aofReliveTime.toString()) : (this.onCancelClicked(), this.unschedule(this.updateTimerValue))
        }
        setupRebuyBalance() {
            this.rebuyBalanceValue.string = "$" + k.StringTools.numToFloatString(k.dataHandler.getUserData().total_amount), this.rebuyBalance.active = !0
        }
        setupEndTimeTimer(t = 0) {
            if (t > 0) {
                this.timerEnd.active = !0, this.timerEndTime = t;
                const e = Math.floor((this.timerEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
                this.timerEndValue.string = d.formatStr(P("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), e), this.schedule(this.updateEndTimeTimer)
            }
        }
        updateEndTimeTimer() {
            const t = Math.floor((this.timerEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
            if (t <= -1) return this.onCancelClicked(), this.unschedule(this.updateEndTimeTimer), void(this.timerEndTime = 0);
            this.timerEndValue.string = d.formatStr(P("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), t)
        }
        createTickets() {
            this.toggleGold.active = this.signUpBoxProperty.goldOption, this.scrollView.node.active = this.signUpBoxProperty.toolOption, this.signUpBoxProperty.toolOption && (this.tools = this.signUpBoxProperty.tools, cc_mtt.vv.ConsoleLog.log("createTickets", this.tools.length, this.tools), this.addTuples(this.tools), this.scrollView.scrollToTop(0), this.scrollView.node.getComponent(g).height = this.ticketTuple.getComponent(g).height * Math.min(this.tools.length, 3) + this.spacing * Math.max(0, Math.min(this.tools.length, 3) - 1), this.scrollView.content.parent.getComponent(b).updateAlignment())
        }
        addTuples(t) {
            this.scrollView.content.getComponent(g).height = Math.max(0, (this.tupleHeight + this.spacing) * this.tools.length - this.spacing), this.scrollView.content.position = new p(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(g).height / 2, this.scrollView.content.position.z), this.bufferZone = this.scrollView.node.getComponent(g).height;
            for (let e = 0; e < t.length; e++) {
                let i = f(this.ticketTuple);
                i.parent = this.scrollView.content, i.setPosition(i.position.x, -this.tupleHeight * (.5 + e) - this.spacing * e), i.getComponentInChildren(l).string = t[e].Name, i.getComponent(w)._tupleId = e, i.getComponent(w).tupleData = t[e], i.active = !0, i.on("toggle", (() => {
                    let t = i.getComponent(w).tupleData;
                    this.toolSelected = t
                })), 0 === e && (i.getComponent(T).isChecked = !0), this.tuples.push(i)
            }
        }
        updateTuples(t, e, i) {
            let o = t.getComponent(w);
            t.getComponentInChildren(l).string = e.Name, o._tupleId = i, o.tupleData = e, o.tupleData.Id, this.toolSelected.Id, t.getComponent(T).isChecked = !0
        }
        zoomIn() {
            I.fadeIn(this.blockLayer, this._actionSpeed), I.scaleTo(this.popUp, this._actionSpeed, new p(p.ONE), y.backOut, (() => {}))
        }
        zoomOut() {
            I.fadeOut(this.blockLayer, this._actionSpeed), I.scaleTo(this.popUp, this._actionSpeed, new p(p.ZERO), y.backIn, (() => {
                this.node.destroy()
            }))
        }
        onOkClicked() {
            cc_mtt.vv.ConsoleLog.log("sign pop clicked"), this.cancelCallback = null, this.unschedule(this.updateTimerValue), this.okCallback instanceof Function && (cc_mtt.vv.ConsoleLog.log("sign pop option:", this.toolSelected), this.okCallback(this.toolSelected)), this.zoomOut()
        }
        onCancelClicked() {
            cc_mtt.vv.ConsoleLog.log("signupBox:cancel", !!this.cancelCallback), this.cancelCallback instanceof Function && this.cancelCallback(), this.zoomOut()
        }
    }).prototype, "blockLayer", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(Y.prototype, "popUp", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(Y.prototype, "title", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(Y.prototype, "regFee", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(Y.prototype, "balance", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(Y.prototype, "notice", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(Y.prototype, "toggleGroup", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Y.prototype, "okButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "cancelButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "scrollView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "ticketTuple", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "toggleGold", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Y.prototype, "timer", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "timerValue", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Y.prototype, "timerEnd", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "timerEndValue", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Y.prototype, "rebuyBalance", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Y.prototype, "rebuyBalanceValue", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = Y)) || Z));
    o._RF.pop()
}
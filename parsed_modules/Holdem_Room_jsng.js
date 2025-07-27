import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./observer.js";
import * as s from "./observer.js";
import * as h from "./Holdem_Room_ts.js";
import * as p from "./MTTConnector.js";
import * as g from "./PlayAnim_New.js";
import * as u from "./Particle_3D.js";

function main() {
    var m, d, k, j, b, y, A, _, f, w, L, B, v, C;
    o._RF.push({}, "606ccQ8BxNMvpnYm8uxBvZh", "Holdem_Room_jsng", void 0);
    const {
        ccclass: D,
        property: V
    } = r;
    t("Holdem_Room_jsng", (m = V([n]), d = V([n]), k = V(a), j = V(a), b = V(n), y = V(n), D(A = s((f = e((_ = class extends h {
        constructor(...t) {
            super(...t), i(this, "game_matching_loading", f, this), i(this, "jackpotDraw", w, this), i(this, "jackpotValue", L, this), i(this, "jackpotValueFx", B, this), i(this, "jackpotNode", v, this), i(this, "jackpotRollLabelNode", C, this), this.rollArr = [], this._gameMatchingAnim = void 0, this._sngBgIndex = 1
        }
        jackpotValueShowAnim() {
            l(this.jackpotNode) && (this.jackpotNode.active || (this.jackpotNode.active = !0, this.jackpotNode.getComponent(g).playAnimation()))
        }
        exitLevel() {
            this.store.ExitSngRoomLevel()
        }
        handlerJackpotDraw(t, e, i) {
            0 != i ? (this.rollArr = t, this.setJackpotValueLabel(i.toString()), this.setRollLabel(e, this.store.regFee), this.potDrawAnim()) : (this.rollArr = t, this.setJackpotValueLabel((e * this.store.regFee).toString()), this.setRollLabel(e, this.store.regFee), this.jackpotDrawAnim())
        }
        setRollLabel(t, e) {
            this.handleDrawList(t, e), this.jackpotRollLabelNode.children.forEach(((t, e) => {
                t.children[0].getComponent(a).string = this.rollArr[e % this.rollArr.length].toString(), 7 == e && (t.children[0].children[0].getComponent(a).string = this.rollArr[e % this.rollArr.length].toString())
            }))
        }
        handleDrawList(t, e) {
            let i = this.rollArr.indexOf(t);
            if (7 !== i) {
                let t = [];
                i++, this.rollArr = t.concat(this.rollArr.slice(i), this.rollArr)
            }
            return this.rollArr.forEach(((t, i) => {
                this.rollArr[i] = t * e
            })), this.rollArr
        }
        setJackpotValueLabel(t) {
            const e = this.jackpotValue.node.getComponent("CurrencyValue"),
                i = this.jackpotValueFx.node.getComponent("CurrencyValue");
            e ? e.updateVal(t, this.store.getCurrencyType(), !1, this.store.getDisplayCurrencyType()) : this.jackpotValue.string = t, i ? i.updateVal(t, this.store.getCurrencyType(), !1, this.store.getDisplayCurrencyType()) : this.jackpotValueFx.string = t
        }
        jackpotValueHide() {
            this.jackpotNode.active = !1
        }
        matchingGameAnim() {
            this._gameMatchingAnim = !0, this.jackpotValueHide(), this.game_matching_loading[0].getComponent(g).playAnimation(), this.game_matching_loading[1].getComponent(g).playAnimation()
        }
        stopMatchGameAnim() {
            this._gameMatchingAnim && (this._gameMatchingAnim = !1, this.game_matching_loading[2].getComponent(g).playAnimation())
        }
        potDrawAnim() {
            this.jackpotDraw[0].getComponent(g).playAnimation(), this.jackpotDraw[0].getComponent(u).playParticles3D(), this.jackpotDraw[2].getComponent(g).playAnimation(), this.scheduleOnce((() => {
                this.jackpotValueShowAnim()
            }), 5)
        }
        jackpotDrawAnim() {
            this.jackpotDraw[1].getComponent(g).playAnimation(), this.jackpotDraw[0].getComponent(u).playParticles3D(), this.jackpotDraw[2].getComponent(g).playAnimation(), this.scheduleOnce((() => {
                this.jackpotValueShowAnim()
            }), 6)
        }
        TournamentBlindList() {
            if (this.store) {
                const {
                    rbcList: t,
                    currentBlindLevel: e
                } = this.store;
                p.instance.isBL || e > 0 && this.tournamentRecord.updateCurrentLevel(e), t.length > 0 && cc_mtt.vv.ConsoleLog.log("Tournament Record Update Blind List", t.length)
            }
        }
        onClickMenu() {
            this.menu.cancelApplyButton.active = !1, this.menu.settingsButton.active = !1, this.menu.reliveButton.active = !1, this.menu.show()
        }
        setSNGBg(t, e, i) {
            let o = t.indexOf(e);
            if (i && (o = t.length - 1), 10 == t.length) switch (o) {
                case 7:
                case 8:
                    o = 6;
                    break;
                case 9:
                    o = 7
            }(o < 0 || o > 7) && (o = 0), this._sngBgIndex = o + 1, this.setBackground()
        }
        setBackground() {
            cc_mtt.vv.ConsoleLog.log("setBackground", this._sngBgIndex), this.loadBackgroundImage("jsng/holdem/bg/BG_FLOOR" + this._sngBgIndex), this.bgTable.node.active = !0, this.loadBgTableImage("jsng/holdem/bg/BG_TABLE" + this._sngBgIndex)
        }
    }).prototype, "game_matching_loading", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), w = e(_.prototype, "jackpotDraw", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), L = e(_.prototype, "jackpotValue", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(_.prototype, "jackpotValueFx", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(_.prototype, "jackpotNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(_.prototype, "jackpotRollLabelNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(_.prototype, "TournamentBlindList", [c], Object.getOwnPropertyDescriptor(_.prototype, "TournamentBlindList"), _.prototype), A = _)) || A) || A));
    o._RF.pop()
}
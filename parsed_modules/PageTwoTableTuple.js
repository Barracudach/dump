import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./mttconfig.js";
import * as r from "./NodePage.js";
import * as c from "./FormatParser.js";
import * as p from "./Translator.js";
import * as h from "./DoubleClickHandler.js";
import * as d from "./cv.js";
import * as g from "./EventCustom.js";

function main() {
    var b, f, T, y, v, C, I, m;
    i._RF.push({}, "ee5beL1HSFP2KpwN19yF1H6", "PageTwoTableTuple", void 0);
    const {
        ccclass: L,
        property: P
    } = a;
    t("PageTwoTableTuple", (b = P([o]), f = P([s]), T = P(s), L((C = e((v = class extends l {
        constructor(...t) {
            super(...t), n(this, "tupleLabels", C, this), n(this, "cupIcon", I, this), n(this, "outs", m, this), this.tupleId = 0, this.playerId = 0, this.joinStatus = 0
        }
        start() {
            if (d.appConfig.isLandscapeLayout) {
                let t = this.node.addComponent(h),
                    e = new l.EventHandler;
                e.target = this.node, e.component = "PageTwoTableTuple", e.handler = "onTouch", t.doubleClickEvents.push(e)
            } else this.node.on(s.EventType.TOUCH_END, this.onTouch, this)
        }
        onTouch() {
            if (cc_mtt.vv.ConsoleLog.log("mtt player table clicked"), this.joinStatus > 0) {
                let t = new g(u.mttPlayerTableEvent, !0);
                t.setUserData(this.playerId), this.node.dispatchEvent(t)
            }
        }
        showCup(t, e) {
            if (this.cupIcon[0].parent.active = t, t)
                if (e > 0 && e <= 3)
                    for (let t = 0; t < this.cupIcon.length; t++) this.cupIcon[t].active = t === e;
                else {
                    this.cupIcon[0].active = !0, this.cupIcon[0].getComponent(o).string = e.toString();
                    for (let t = 1; t < this.cupIcon.length; t++) this.cupIcon[t].active = !1
                }
        }
        updateResurrectionCount(t) {
            this.outs.active = t > 0, this.outs.active && (this.outs.getComponentInChildren(o).string = t.toString())
        }
        setInfo(t, e, n, i = 0, o = !1) {
            switch (this.tupleId = e, this.playerId = t.UserId, this.joinStatus = t.JoinStatus, this.showCup(n > 0, t.JoinStatus < 0 ? t.Rank : t.Index), this.tupleLabels[0].string = t.PlayerName.toString(), this.tupleLabels[2].string = t.JoinStatus < 0 ? p("MTT_SIGN_UP.OUT") : r.getFeeLabel(t.Coins), i) {
                case 1:
                    this.tupleLabels[1].string = `${r.roundValue(t.Wins)}/${c.DisplayGold(t.Bounty)}`;
                    break;
                case 2:
                    this.tupleLabels[1].string = `${r.roundValue(t.Value)}/${c.DisplayGold(t.Bounty)}`;
                    break;
                default:
                    this.tupleLabels[1].string = ""
            }
            let s = t.JoinStatus;
            this.updateResurrectionCount(Math.abs(s) - 1)
        }
    }).prototype, "tupleLabels", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), I = e(v.prototype, "cupIcon", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), m = e(v.prototype, "outs", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = v)) || y));
    i._RF.pop()
}
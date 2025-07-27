import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./NodeTools.js";

function main() {
    var d, g, m, N;
    n._RF.push({}, "d6697x6kjNEzI9pNPJWEueh", "GameStartReminder", void 0);
    const {
        ccclass: f,
        property: A
    } = s;
    t("StartGameReminder", (d = A(i), f((N = e((m = class t extends r {
        constructor(...t) {
            super(...t), o(this, "gameName", N, this), this.startPosition = null, this.stopPosition = null, this.upAction = null, this.downAction = null, this._goUp = null, this.msgEnterGame = null, this.onEnterAction = null
        }
        onLoad() {
            this.upAction = () => {
                a(this.node).to(.2, {
                    position: l(this.startPosition)
                }, {
                    easing: c.sineInOut
                }).call((() => {
                    this.node.destroy()
                })).start()
            }, this.downAction = () => {
                a(this.node).to(.3, {
                    position: l(this.startPosition.x, this.stopPosition.y)
                }, {
                    easing: c.quartInOut
                }).start()
            }
        }
        reachTimeAlarm(e, o, n, s, r) {
            if (!e) {
                if (n.children.length > 0) {
                    for (let e of n.children) e.getComponent(t)._goUp && this.unschedule(e.getComponent(t)._goUp);
                    n.destroyAllChildren()
                }
                let e = h(this.node),
                    a = e.getComponent(t);
                a.msgEnterGame = o, a.onEnterAction = r, e.parent = n, e.setPosition(0, (s + u.getNodeHeight(e)) / 2), a.startPosition = e.position, a.stopPosition = new p(e.position.x, e.position.y - u.getNodeHeight(e)), a.gameName.string = o.Name, o.Name.length > 16 && (a.gameName.overflow = i.Overflow.RESIZE_HEIGHT, u.setNodeWidth(a.gameName.node, u.getNodeWidth(a.gameName.node.parent))), a.downAction(), a._goUp = () => {
                    a.upAction()
                }, a.scheduleOnce(a._goUp, 5.3)
            }
        }
        onLaterClicked() {
            this.unschedule(this._goUp), this.upAction()
        }
        onEnterClicked() {
            cc_mtt.vv.ConsoleLog.log("onEnterClicked", this.node.parent.children.length, this._goUp), this.unschedule(this._goUp), this.upAction(), this.onEnterAction && this.onEnterAction(this.msgEnterGame)
        }
    }).prototype, "gameName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = m)) || g));
    n._RF.pop()
}
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";

function main() {
    var D, g, f, v, y, b, N, m, E, S;
    i._RF.push({}, "fa5bd3q8URM65xECCucPUy9", "SportsBookButtonHandler", void 0);
    const {
        ccclass: C,
        property: w
    } = a;
    t("default", (D = w(s), g = w(s), f = w([s]), v = w(n), C((N = e((b = class extends r {
        constructor(...t) {
            super(...t), o(this, "DetailNode", N, this), o(this, "Dot", m, this), o(this, "nodeHovers", E, this), o(this, "isShowDetail", S, this), this._disableDot = !1
        }
        start() {
            let t = u.appConfig.getLobbyConfig().showSportsBook;
            this.node.active = t && u.appConfig.getGameConfig().enableSportsBookButton, this.DetailNode.active = !1, this.node.on(s.EventType.MOUSE_ENTER, this.handleMouseEnter, this), this.node.on(s.EventType.MOUSE_LEAVE, this.handleMouseLeave, this), this._disableDot = "true" === l.localStorage.getItem("canHideRedDotSportsBookGames"), this.Dot.active = !this._disableDot, this.nodeHovers.forEach((t => {
                t.active = !1
            }))
        }
        handleMouseEnter() {
            this.DetailNode.active = this.isShowDetail, p.stopAllByTarget(this.DetailNode), c(this.DetailNode).set({
                position: new d(-45, this.DetailNode.position.y, this.DetailNode.position.z)
            }).to(.3, {
                position: new d(-20, this.DetailNode.position.y, this.DetailNode.position.z)
            }).start(), c(this.DetailNode.getComponent(h)).set({
                opacity: 100
            }).to(.3, {
                opacity: 255
            }).start(), this.nodeHovers[0].active = !0, this.nodeHovers[1].active = !this._disableDot
        }
        handleMouseLeave() {
            p.stopAllByTarget(this.DetailNode), c(this.DetailNode).to(.3, {
                position: new d(-80, this.DetailNode.position.y, this.DetailNode.position.z)
            }).set({
                active: !1
            }).start(), c(this.DetailNode.getComponent(h)).to(.3, {
                opacity: 50
            }).set({
                opacity: 0
            }).start(), this.nodeHovers.forEach((t => {
                t.active = !1
            }))
        }
        onClick() {
            l.localStorage.setItem("canHideRedDotSportsBookGames", "true"), u.appConfig.getGeneralConfig().multiWindowEnabled ? (u.miniGamePopupManager.reloadPopup(), u.MessageCenter.send("jumpToSportsBook")) : u.action.switchScene(u.Enum.SCENE.HALL_SCENE, (t => {
                u.MessageCenter.send("jumpToSportsBook")
            }))
        }
    }).prototype, "DetailNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(b.prototype, "Dot", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(b.prototype, "nodeHovers", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = e(b.prototype, "isShowDetail", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), y = b)) || y));
    i._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./AnalyticsHandler.js";
import * as g from "./cv.js";

function main() {
    var D, C, b, f, E, N, v, M, B, w, S, L;
    o._RF.push({}, "d68e2pmDN5GH56F333Fs0/O", "CasinoGamesButtonHandler", void 0);
    const {
        ccclass: T,
        property: H
    } = r;
    t("default", (D = H(n), C = H(n), b = H(a), f = H(s), E = H(s), T((M = e((v = class extends l {
        constructor(...t) {
            super(...t), i(this, "DetailNode", M, this), i(this, "Dot", B, this), i(this, "spriteMainButton", w, this), i(this, "spriteNormal", S, this), i(this, "spriteExpand", L, this)
        }
        start() {
            let t = g.appConfig.getLobbyConfig().showCasinoLobby;
            this.node.active = t && g.appConfig.getGameConfig().enableCasinoButton, this.DetailNode.active = !1, this.node.on(n.EventType.MOUSE_ENTER, (t => {
                this.handleMouseEnter()
            })), this.node.on(n.EventType.MOUSE_LEAVE, (t => {
                this.handleMouseLeave()
            }));
            let e = "true" === p.localStorage.getItem("canHideRedDotCasinoGames");
            this.Dot.active = !e
        }
        handleMouseEnter() {
            this.DetailNode.active = !0, c.stopAllByTarget(this.DetailNode), this.DetailNode.getComponent(u).opacity = 100, d(this.DetailNode).set({
                position: h(-45, this.DetailNode.position.y, 1)
            }).to(.3, {
                position: h(-20, this.DetailNode.position.y, 1)
            }).start(), d(this.DetailNode.getComponent(u)).to(.3, {
                opacity: 255
            }).start(), c.stopAllByTarget(this.Dot), d(this.Dot.getComponent(u)).delay(.2).to(.2, {
                opacity: 0
            }).start(), m(this.spriteExpand) && m(this.spriteMainButton) && (this.spriteMainButton.spriteFrame = this.spriteExpand)
        }
        handleMouseLeave() {
            c.stopAllByTarget(this.DetailNode), d(this.DetailNode).to(.3, {
                position: h(-80, this.DetailNode.position.y, 1)
            }).start(), d(this.DetailNode.getComponent(u)).to(.3, {
                opacity: 50
            }).call((() => {
                this.DetailNode.getComponent(u).opacity = 0, this.DetailNode.active = !1
            })).start(), c.stopAllByTarget(this.Dot), d(this.Dot.getComponent(u)).delay(.2).to(.2, {
                opacity: 255
            }).start(), m(this.spriteNormal) && m(this.spriteMainButton) && (this.spriteMainButton.spriteFrame = this.spriteNormal)
        }
        onClick() {
            y.getInstance().sendEvent(g.Enum.CurrentScreen.room, g.Enum.segmentEvent.Clicked, g.Enum.Functionality.casino), p.localStorage.setItem("canHideRedDotCasinoGames", "true"), g.appConfig.getGeneralConfig().multiWindowEnabled ? (g.miniGamePopupManager.reloadPopup(), g.focusWindow(1), g.MessageCenter.send("switchSceneToCasinoLobby")) : g.action.switchScene(g.Enum.SCENE.HALL_SCENE, (t => {
                g.MessageCenter.send("switchSceneToCasinoLobby")
            }))
        }
    }).prototype, "DetailNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(v.prototype, "Dot", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(v.prototype, "spriteMainButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(v.prototype, "spriteNormal", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(v.prototype, "spriteExpand", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = v)) || N));
    o._RF.pop()
}
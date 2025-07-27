import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./BasicScene.js";
import * as l from "./cv.js";

function main() {
    var m, h, p, d, f;
    o._RF.push({}, "582fe9bBk9GVJkA1Y9q+iOH", "MultipleCashGames", void 0);
    const {
        ccclass: g,
        property: y
    } = r;
    e("default", (m = y(i), g(((f = class e extends u {
        constructor(...e) {
            super(...e), n(this, "commonContainer", d, this), this._roomNodes = [], this.roomScript = [], this.isSelfPlay = !1, this.gamesToLoad = []
        }
        static get instance() {
            return this._instance
        }
        onLoad() {
            e._instance = this, s.on(a.EventType.KEY_DOWN, this.onKeyDown, this), this.initGames()
        }
        onKeyDown(e) {
            this.node.activeInHierarchy && e.keyCode == c.KEY.space && this.initGame(l.roomManager.rooms[0].getCurrentGameID(), l.roomManager.rooms[0].getCurrentRoomID())
        }
        initGames() {
            l.roomManager.rooms.forEach((e => {
                this.initGame(e.getCurrentGameID(), e.getCurrentRoomID())
            }))
        }
        initGame(e, t) {
            let n = this.roomScript.length;
            this.gamesToLoad.push(n)
        }
    }).currentMultipleGameIndex = 0, f._instance = null, d = t((p = f).prototype, "commonContainer", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = p)) || h));
    o._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./LobbyTabComp.js";

function main() {
    var l, c, m, h, u, p, d;
    i._RF.push({}, "8dccaVUM2pGg7lbZig2oIf7", "FlashGameTabComp", void 0);
    const {
        ccclass: G,
        property: b
    } = o;
    e("FlashGameTabComp", (l = G("FlashGameTabComp"), c = b(s), m = b(s), l((p = a((u = class extends n {
        constructor(...e) {
            super(...e), this.mvcViews = [], t(this, "cashGameRightPanelNode", p, this), t(this, "myGamesNode", d, this)
        }
        setShowMyGame(e) {
            this.myGamesNode && (this.myGamesNode.active = e)
        }
        getMyGameNode() {
            return this.myGamesNode
        }
        getCashGameRightPanelNode() {
            return this.cashGameRightPanelNode
        }
        start() {}
        onDisable() {
            r(this.cashGameRightPanelNode, !0) && (this.cashGameRightPanelNode.active = !1)
        }
    }).prototype, "cashGameRightPanelNode", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = a(u.prototype, "myGamesNode", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = u)) || h));
    i._RF.pop()
}
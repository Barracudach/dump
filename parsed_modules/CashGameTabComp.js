import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./LobbyTabComp.js";

function main() {
    var c, l, u, h, m, d;
    i._RF.push({}, "a2cb1QuXmJE4rKWyM88T5jq", "CashGameTabComp", void 0);
    const {
        ccclass: p,
        property: y
    } = s;
    e("default", (c = y(o), l = y(o), p((m = t((h = class extends n {
        constructor(...e) {
            super(...e), this.mvcViews = [], a(this, "cashGameRightPanelNode", m, this), a(this, "myGamesNode", d, this)
        }
        setShowMyGame(e) {
            this.myGamesNode.active = e
        }
        getMyGameNode() {
            return this.myGamesNode
        }
        getCashGameRightPanelNode() {
            return this.cashGameRightPanelNode
        }
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
    }), d = t(h.prototype, "myGamesNode", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = h)) || u));
    i._RF.pop()
}
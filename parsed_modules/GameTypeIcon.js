import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./Gradient.js";

function main() {
    var u, b, p, h, d, f, m, g, C, E, I, y, G, T;
    n._RF.push({}, "70dfa26mLlB6aIv0WF7rpFF", "GameTypeIcon", void 0);
    let B = e("SubGameType", function(e) {
        return e[e.BOMB_POT = 0] = "BOMB_POT", e[e.BIG_ANTE = 1] = "BIG_ANTE", e[e.SQUID = 2] = "SQUID", e[e.PACE = 3] = "PACE", e[e.STAND_UP = 4] = "STAND_UP", e
    }({}));
    const {
        ccclass: w,
        property: A
    } = a;
    e("default", (u = A(l), b = A(r), p = A(r), h = A(r), d = A(r), f = A({
        type: o(B)
    }), w((C = t((g = class extends c {
        constructor(...e) {
            super(...e), i(this, "bgGradient", C, this), i(this, "bombIcon", E, this), i(this, "bigAnteIcon", I, this), i(this, "squidIcon", y, this), i(this, "paceIcon", G, this), i(this, "gameType", T, this)
        }
        setIcon(e, t) {
            if (this.node.active = !0, this.node.setSiblingIndex(t), this.gameType != e) switch (this.gameType = e, this.bombIcon.active = e == B.BOMB_POT, this.bigAnteIcon.active = e == B.BIG_ANTE, this.squidIcon.active = e == B.SQUID, this.paceIcon.active = e == B.PACE, e) {
                case B.BOMB_POT:
                    this.bgGradient.startColor = (new s).fromHEX("#EC6439FF"), this.bgGradient.endColor = (new s).fromHEX("#EC6439CC");
                    break;
                case B.BIG_ANTE:
                    this.bgGradient.startColor = (new s).fromHEX("#39A1ECFF"), this.bgGradient.endColor = (new s).fromHEX("#39A1ECB2");
                    break;
                case B.SQUID:
                    this.bgGradient.startColor = (new s).fromHEX("#EC394EFF"), this.bgGradient.endColor = (new s).fromHEX("#EC394ECC");
                    break;
                case B.PACE:
                    this.bgGradient.startColor = (new s).fromHEX("#8839ECFF"), this.bgGradient.endColor = (new s).fromHEX("#8839EC8C")
            }
        }
        hide() {
            this.node.active = !1
        }
    }).prototype, "bgGradient", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(g.prototype, "bombIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(g.prototype, "bigAnteIcon", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(g.prototype, "squidIcon", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(g.prototype, "paceIcon", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(g.prototype, "gameType", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return B.BOMB_POT
        }
    }), m = g)) || m));
    n._RF.pop()
}
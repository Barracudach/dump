import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./observer.js";

function main() {
    var d, m, h, f, _, E, C, L, N, g, I, y, B, R, v, D, V, w, z, T, S, M, O, A, H, x;
    i._RF.push({}, "2c6bbRNYcZC9JBgqOeQ6YuV", "Holdem_Room_Info_ts", void 0);
    const {
        ccclass: J,
        property: U
    } = l;
    let F = e("HoldemRoomInfoField", function(e) {
        return e[e.DESK_NUM = 0] = "DESK_NUM", e[e.BLIND_LEVEL = 1] = "BLIND_LEVEL", e[e.STOP_JOIN_LEVEL = 2] = "STOP_JOIN_LEVEL", e[e.ROOM_NAME = 3] = "ROOM_NAME", e[e.ANTE = 4] = "ANTE", e[e.CURRENT_BLIND_LEVEL = 5] = "CURRENT_BLIND_LEVEL", e[e.NEXT_BLIND_LEVEL = 6] = "NEXT_BLIND_LEVEL", e[e.RISE_BLIND_TIME = 7] = "RISE_BLIND_TIME", e[e.RISE_HAND = 8] = "RISE_HAND", e
    }({}));
    e("Holdem_Room_Info", (d = U(r), m = U(r), h = U(r), f = U(r), _ = U(r), E = U(o), C = U(o), L = U(o), N = U(o), g = U(o), I = U(o), y = U(o), J(B = b((v = n((R = class extends a {
        constructor(...e) {
            super(...e), t(this, "currentBlindValue", v, this), t(this, "anteValue", D, this), t(this, "stopJoinBlindLevel", V, this), t(this, "roomNumber", w, this), t(this, "roomName", z, this), t(this, "deskNumberContainer", T, this), t(this, "blindLevelContainer", S, this), t(this, "endJoinLevelContainer", M, this), t(this, "anteContainer", O, this), t(this, "currentBlindContainer", A, this), t(this, "nextBlindContainer", H, this), t(this, "nextTimeContainer", x, this)
        }
        updateTextColor(e, n) {
            let t = this.node.getComponentsInChildren(r),
                i = this.node.getComponentsInChildren(u),
                o = (new c).fromHEX(e),
                l = 255 * n;
            t.forEach((e => {
                e.node.getComponent(s).color = o, e.node.getComponent(p).opacity = l
            })), i.forEach((e => {
                e.node.getComponent(s).color = o, e.node.getComponent(p).opacity = l
            }))
        }
        setFieldValue(e, n) {
            const t = this.node.children[e];
            let i = t.getComponent(r);
            e == F.DESK_NUM && (i = t.children[0].children[2].getComponent(r)), i || (i = t.getComponentsInChildren(r)[1]), i.string = n
        }
        setFieldActive(e, n) {
            this.node.children[e].active = n
        }
        isFieldActive(e) {
            return this.node.children[e].active
        }
    }).prototype, "currentBlindValue", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = n(R.prototype, "anteValue", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = n(R.prototype, "stopJoinBlindLevel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = n(R.prototype, "roomNumber", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = n(R.prototype, "roomName", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = n(R.prototype, "deskNumberContainer", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = n(R.prototype, "blindLevelContainer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = n(R.prototype, "endJoinLevelContainer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = n(R.prototype, "anteContainer", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = n(R.prototype, "currentBlindContainer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = n(R.prototype, "nextBlindContainer", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = n(R.prototype, "nextTimeContainer", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = R)) || B) || B));
    i._RF.pop()
}
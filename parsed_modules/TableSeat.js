import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./CircleSprite.js";
import * as d from "./cv.js";
import * as h from "./AppConfig.js";

function main() {
    var f, g, y, b, _, v, S, C, I, m, N, k;
    o._RF.push({}, "1de77/OC6hCI4jGcI0ZWYB2", "TableSeat", void 0);
    let P = e("TableSeatType", function(e) {
        return e[e.playerSeat = 0] = "playerSeat", e[e.emptySeat = 1] = "emptySeat", e
    }({}));
    const T = e("EMPTY_SEAT_CLICK_EVENT", "onEmptySeatClicked"),
        {
            ccclass: A,
            property: w,
            executeInEditMode: z,
            playOnFocus: E
        } = l;
    e("default", (f = w(a), g = w(r), y = w(r), b = w(r), _ = w(r), A(v = z(v = E((C = t((S = class extends n {
        constructor(...e) {
            super(...e), i(this, "defaultPlayerIcon", C, this), i(this, "defaultPlayer", I, this), i(this, "outlineNode", m, this), i(this, "crossIconNode", N, this), i(this, "playerAvatorNode", k, this), this._seatId = null, this._toggle = null
        }
        onLoad() {
            if (!this._toggle) return;
            let e = h.Instance.themeUse;
            e = d.appConfig.themeUse
        }
        _onClick() {
            s.emit(T, this._seatId, this._toggle.isChecked)
        }
        getSeatId() {
            return this._seatId
        }
        setSeat(e, t, i) {
            switch (this._toggle = this.node.getComponent(c), e) {
                case P.playerSeat:
                    this.playerAvatorNode.active = !0, this.crossIconNode.active = !1, this._seatId = -1, this._toggle.enabled = !1, i ? (p.setCircleSprite(this.playerAvatorNode, i), this.defaultPlayer.active = !1, this.outlineNode.active = !1) : (this.defaultPlayer.active = !0, this.outlineNode.active = !0);
                    break;
                case P.emptySeat:
                    this.playerAvatorNode.active = !1, this.crossIconNode.active = !0, this._seatId = t, this._toggle.enabled = !0, this._toggle.interactable = !0, this._toggle.isChecked = !1, this.node.on("click", this._onClick, this), this.outlineNode.active = !0;
                    break;
                default:
                    u("invalid tableSeatType!")
            }
        }
    }).prototype, "defaultPlayerIcon", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(S.prototype, "defaultPlayer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(S.prototype, "outlineNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(S.prototype, "crossIconNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(S.prototype, "playerAvatorNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = S)) || v) || v) || v));
    o._RF.pop()
}
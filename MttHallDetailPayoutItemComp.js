import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, c, u, p, b, h, f, m, L;
    r._RF.push({}, "08d82211MVHJ7aqrffiWmQ1", "MttHallDetailPayoutItemComp", void 0);
    const {
        ccclass: y,
        property: g
    } = a;
    e("MttHallDetailPayoutItemComp", (s = y("MttHallDetailPayoutItemComp"), c = g(l), u = g(l), p = g(n), s((f = t((h = class extends o {
        constructor(...e) {
            super(...e), i(this, "entriesLabel", f, this), i(this, "prizeCircleLabel", m, this), i(this, "line", L, this)
        }
        setInfo(e) {
            this.setEntriesLabel(e.Begin, e.End), this.setPrizeCircleLabel(e.Circle)
        }
        setEntriesLabel(e, t) {
            this.entriesLabel.string = e != t && t > 0 ? `${e} ~ ${t}` : e.toString()
        }
        setPrizeCircleLabel(e) {
            this.prizeCircleLabel.string = e.toString()
        }
        showSeparateLine(e) {
            this.line && (this.line.active = e)
        }
    }).prototype, "entriesLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(h.prototype, "prizeCircleLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(h.prototype, "line", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = h)) || b));
    r._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cv.js";

function main() {
    var s, c, p, b, m, g, f, h, y, d, v, w;
    n._RF.push({}, "e18b1Ead6dJ946UeN/cm36m", "RedEnvelopeWinnerStripe", void 0);
    const {
        ccclass: S,
        property: _
    } = l;
    e("default", (s = _(r), c = _(o), p = _(o), b = _(o), m = _(o), S((h = t((f = class extends u {
        constructor(...e) {
            super(...e), i(this, "bg", h, this), i(this, "rank", y, this), i(this, "userName", d, this), i(this, "win", v, this), i(this, "date", w, this)
        }
        start() {}
        init(e, t) {
            this.bg.active = t % 2 != 0, this.rank.string = t + 1 + ".", this.userName.string = e.nick_name, this.win.string = a.StringTools.getCurrencySymbol(e.currency_type) + a.StringTools.numToFloatString(e.amount), this.date.string = a.StringTools.formatTime(e.lottery_time, a.Enum.eTimeType.Hour_Minute)
        }
    }).prototype, "bg", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(f.prototype, "rank", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(f.prototype, "userName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(f.prototype, "win", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(f.prototype, "date", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = f)) || g));
    n._RF.pop()
}
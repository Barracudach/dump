import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, c, u, h, p, g, f, d, m, y, b, N, v;
    i._RF.push({}, "3dd07nxYtpGmb2D92wpSxUH", "RealTimeRecordRow", void 0);
    const {
        ccclass: w,
        property: R
    } = a;
    e("default", (s = R(n), c = R(o), u = R(n), h = R(o), p = R(o), w(((v = class e extends l {
        constructor(...e) {
            super(...e), r(this, "ranking", d, this), r(this, "playerName", m, this), r(this, "resurrectNode", y, this), r(this, "otherValue", b, this), r(this, "score", N, this)
        }
        refreshPlayerName(t) {
            t.length >= e.playerNameLength ? this.playerName.overflow = o.Overflow.SHRINK : this.playerName.overflow = o.Overflow.NONE, this.playerName.string = t
        }
        setRank(e) {
            for (let e of this.ranking.children) e.active = !1;
            if (e <= 3) this.ranking.children[e - 1].active = !0;
            else {
                let t = this.ranking.children[3].getComponent(o);
                t.string = e.toString(), t.node.active = !0
            }
        }
        setRowData(e, t, r, i, n) {
            this.setRank(e), this.refreshPlayerName(t), i > 0 && (this.resurrectNode.children[1].getComponent(o).string = i.toString(), this.resurrectNode.active = !0), n && (this.otherValue.string = n, this.otherValue.node.active = !0), this.score.string = r.toString()
        }
    }).playerNameLength = 6, d = t((f = v).prototype, "ranking", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(f.prototype, "playerName", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(f.prototype, "resurrectNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(f.prototype, "otherValue", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(f.prototype, "score", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = f)) || g));
    i._RF.pop()
}
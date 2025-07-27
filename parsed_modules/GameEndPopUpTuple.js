import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./AutoResizeLabel.js";

function main() {
    var p, c, h, b, g, m, f, d, v, y, z, P, L, R, w, C;
    r._RF.push({}, "0f265pqOGRFYLqmPa+YL8Ph", "GameEndPopUpTuple", void 0);
    const {
        ccclass: V,
        property: D
    } = l;
    e("GameEndPopUpTuple", (p = D([n]), c = D(a), h = D(u), b = D([n]), g = D(u), m = D(u), f = D(n), V((y = t((v = class extends o {
        constructor(...e) {
            super(...e), i(this, "cups", y, this), i(this, "avatar", z, this), i(this, "playerName", P, this), i(this, "outs", L, this), i(this, "hunterValue", R, this), i(this, "prize", w, this), i(this, "baseline", C, this)
        }
        start() {}
        updateCup(e) {
            for (let t = 0; t < this.cups.length; t++) this.cups[t].active = e === t + 1
        }
        updateResurrectionCount(e) {
            for (let t = 0; t < this.outs.length; t++) this.outs[t].active = e === t
        }
        updateInfo(e, t) {
            const {
                AssetsManager: i,
                DataManager: r
            } = cc_mtt.vv;
            cc_mtt.vv.ConsoleLog.log("Pat0422 gameEndT55", e, t);
            let n = i.getAvatarUrl(r.getAvatarId(t, e.ID), {
                isThumbnails: !0,
                timestamp: e.ID === r.userId ? Date.now() : null
            });
            i.loadWebImage(this.avatar, n), this.updateCup(e.Ranking), this.playerName.string = e.PlayerName, s.resizeLabel(this.playerName, 6), this.updateResurrectionCount(e.ResurrectionCount), null != e.HunterValue && (cc_mtt.vv.ConsoleLog.log("Hunter value = ", e.HunterValue), this.hunterValue.string = e.HunterValue ? e.HunterValue.toString() : "0", this.hunterValue.node.active = !0), this.prize.string = e.Prize
        }
    }).prototype, "cups", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = t(v.prototype, "avatar", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(v.prototype, "playerName", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(v.prototype, "outs", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), R = t(v.prototype, "hunterValue", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(v.prototype, "prize", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(v.prototype, "baseline", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = v)) || d));
    r._RF.pop()
}
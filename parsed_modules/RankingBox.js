import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./LanguageManager.js";

function main() {
    var g, u, h, p, f, d;
    i._RF.push({}, "69c7c/SeWBHf6ytBAq7Q48+", "RankingBox", void 0);
    const {
        ccclass: k,
        property: b
    } = o;
    e("RankingBox", (g = b(r), u = b(a), k((f = n((p = class extends s {
        constructor(...e) {
            super(...e), t(this, "rankingNodes", f, this), t(this, "rankingLabelOther", d, this)
        }
        setRanking(e) {
            if (this.hideAll(), e > 0) {
                let n = Math.min(e - 1, 3);
                this.rankingNodes[n].active = !0, this.rankingLabelOther[n].string = c.formatStr(l.t("HOLDEM.RANKING"), e.toString())
            }
        }
        hideAll() {
            this.rankingNodes.forEach((e => {
                e.active = !1
            }))
        }
    }).prototype, "rankingNodes", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), d = n(p.prototype, "rankingLabelOther", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), h = p)) || h));
    i._RF.pop()
}
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./Pb.js";
import * as l from "./FormatParser.js";

function main() {
    var s, c, h, p, y, d, g, b;
    o._RF.push({}, "b5230wOqm5Hy7xqgdyBTCuZ", "HunterValueBlock", void 0);
    const {
        property: f,
        ccclass: m
    } = u;
    t("HunterValueBlock", (s = f(r), c = f(r), h = f(r), m((d = e((y = class extends i {
        constructor(...t) {
            super(...t), n(this, "hunValue", d, this), n(this, "hunHead", g, this), n(this, "hunBounty", b, this)
        }
        setHunterBlockLayout(t) {
            switch (t) {
                case a.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.hunHead.node.parent.active = !0, this.hunBounty.node.parent.active = !0;
                    break;
                case a.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.hunValue.node.parent.active = !0, this.hunBounty.node.parent.active = !0
            }
        }
        updateHunterValue(t) {
            cc_mtt.vv.ConsoleLog.log("Update Hunter Val", JSON.stringify(t)), this.hunValue.string = l.DisplayGold(t.value, 2).toString(), this.hunHead.string = l.RoundToDecimal(t.wins, 1).toString(), this.hunBounty.string = l.DisplayGold(t.bounty, 2).toString()
        }
    }).prototype, "hunValue", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(y.prototype, "hunHead", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(y.prototype, "hunBounty", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = y)) || p));
    o._RF.pop()
}
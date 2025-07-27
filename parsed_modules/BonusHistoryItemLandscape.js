import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./BonusHistoryItem.js";
import * as a from "./cv.js";
import * as u from "./HelpIconHandler.js";

function main() {
    var c, l, p, f;
    n._RF.push({}, "a9e8fOTfppJRrRk5SjhaYMH", "BonusHistoryItemLandscape", void 0);
    const {
        ccclass: d,
        property: g
    } = r;
    e("default", (c = g(s), d((f = t((p = class extends i {
        constructor(...e) {
            super(...e), o(this, "toolTipPosRefNode", f, this)
        }
        getStartDatePrefix() {
            return a.config.getStringData("BonusStartDate") + ": "
        }
        setBonusNameTooltip(e) {
            this.bonusName.node.getComponent(u).setText("", e), this.bonusName.node.getComponent(u).setPosRefNode(this.toolTipPosRefNode)
        }
    }).prototype, "toolTipPosRefNode", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    n._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./HandsRecordsManager.js";

function main() {
    var l, u, p, h, d;
    n._RF.push({}, "20291G5uFVF7aepPmV/ViWK", "NewReplayerTableStake", void 0);
    const {
        ccclass: v,
        property: y
    } = o;
    e("NewReplayerTableStake", (l = v("NewReplayerTitleStake"), u = y(i), l((d = t((h = class extends s {
        constructor(...e) {
            super(...e), a(this, "stakeLabel", d, this), this.coinConvertData = null, this.amount = 0
        }
        isActive() {
            return this.node.active && this.coinConvertData && this.amount > 0
        }
        setCoinMode(e) {
            this.coinConvertData.coinMode = e, this.setBetValue(this.amount, this.coinConvertData)
        }
        setBetValue(e, t) {
            null == e || e < 0 ? this.node.active = !1 : (this.coinConvertData = t, this.amount = e, this.node.active = !0, this.stakeLabel.string = c.getInstance().formatMoneyTextWithData(this.coinConvertData, e), this.stakeLabel.updateRenderData(!0), this.node.parent && this.node.parent.getComponent(r) && this.node.parent.getComponent(r).updateLayout(!0))
        }
    }).prototype, "stakeLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = h)) || p));
    n._RF.pop()
}
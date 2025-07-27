import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as u from "./FormatParser.js";

function main() {
    var l, a, c, p, g, d;
    i._RF.push({}, "408felF5LpIRpxEcL+e8wVz", "AgentWithdrawRecordTuple", void 0);
    const {
        ccclass: h,
        property: f
    } = o;
    t("AgentWithdrawRecordTuple", (l = f(n), a = f(n), h((g = e((p = class extends s {
        constructor(...t) {
            super(...t), r(this, "coins", g, this), r(this, "time", d, this), this._tupleId = 0
        }
        setInfo(t, e) {
            this._tupleId = e, this.coins.string = u.DisplayGold(Math.abs(t.amount)).toString();
            let r = t.date,
                i = Number(r.getHours()) < 10 ? "0" + r.getHours() : r.getHours(),
                n = Number(r.getMinutes()) < 10 ? "0" + r.getMinutes() : r.getMinutes();
            this.time.string = `${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()} ${i}:${n}`
        }
    }).prototype, "coins", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(p.prototype, "time", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = p)) || c));
    i._RF.pop()
}
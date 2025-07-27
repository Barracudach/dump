import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as u from "./Translator.js";

function main() {
    var l, o, c, f, p, h, R, g, b, m;
    n._RF.push({}, "f6d5cQz+H5A0JuuyYFCP+IL", "TranHisTuplePrefab", void 0);
    const {
        ccclass: T,
        property: D
    } = a;
    t("TranHisTuplePrefab", (l = D(i), o = D(i), c = D(i), f = D(i), T((R = e((h = class extends s {
        constructor(...t) {
            super(...t), r(this, "transferPhoneNum", R, this), r(this, "transferStatus", g, this), r(this, "transferDate", b, this), r(this, "transferValue", m, this), this._tupleId = 0
        }
        getPhoneNum(t) {
            let e = t.length > 0 ? `+${t.replace("-"," ")}` : "",
                r = e.indexOf("#");
            return r >= 0 && (e = e.slice(0, r).trim()), e
        }
        setInfo(t, e) {
            this._tupleId = e, this.transferPhoneNum.string = this.getPhoneNum(t.remark);
            let r = u(t.amount >= 0 ? "TRANSFER.RECORD.TRANSFER_FROM" : "TRANSFER.RECORD.TRANSFER_TO").toLowerCase();
            this.transferStatus.string = r + u(1 == t.status ? "TRANSFER.RECORD.SUCCEEDED" : "TRANSFER.RECORD.FAILED");
            let n = t.created;
            this.transferDate.string = `${n.getDate()}/${n.getMonth()+1}/${n.getFullYear().toString().slice(2)}`, this.transferValue.string = Math.abs(t.amount).toString()
        }
    }).prototype, "transferPhoneNum", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(h.prototype, "transferStatus", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(h.prototype, "transferDate", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(h.prototype, "transferValue", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = h)) || p));
    n._RF.pop()
}
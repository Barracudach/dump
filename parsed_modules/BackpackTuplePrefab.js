import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as o from "./Translator.js";
import * as n from "./BagTuplePrefab.js";
import * as s from "./cv.js";

function main() {
    var l, p, u, f;
    i._RF.push({}, "8b787hmlFZD1b+9++7hT8b1", "BackpackTuplePrefab", void 0);
    const {
        ccclass: d,
        property: h
    } = c;
    e("default", (l = h(r), d((f = t((u = class extends n {
        constructor(...e) {
            super(...e), a(this, "expDate", f, this)
        }
        onLoad() {
            super.onLoad(), this.toolSpecific.node.active = !1
        }
        showExpiredDate(e, t) {
            e ? (this.expiredDate.string = o("BAG.EXPIRED_DATE").replace("expired_date", ""), this.expDate.string = t ? s.config.getDateWithFormat(t, "ll") : "", this.toolSpecific.node.parent.active = !0) : this.toolSpecific.node.parent.active = !1
        }
    }).prototype, "expDate", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = u)) || p));
    i._RF.pop()
}
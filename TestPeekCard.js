import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as i from "./PeekCardPopup.js";

function main() {
    var n, c, p, u, l;
    a._RF.push({}, "2faa6gsBLVBLZetSLzbCN6O", "TestPeekCard", void 0);
    const {
        ccclass: d,
        property: C
    } = o;
    e("TestPeekCard", (n = d("TestPeekCard"), c = C(i), n((l = t((u = class extends s {
        constructor(...e) {
            super(...e), r(this, "peekCard", l, this)
        }
        start() {
            this.peekCard.init(1, 0, Date.now() + 15e3)
        }
    }).prototype, "peekCard", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), p = u)) || p));
    a._RF.pop()
}
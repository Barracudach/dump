import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./MVCListComp.js";

function main() {
    var c, u, a, p, m, y;
    r._RF.push({}, "156a2LcujxMNLVsuFWfZQrq", "CashMyGameComp", void 0);
    const {
        ccclass: f,
        property: h
    } = n;
    t("default", (c = h(l), u = h(s), f((m = e((p = class extends o {
        constructor(...t) {
            super(...t), this.mvcView = void 0, i(this, "listView", m, this), i(this, "listEmpty", y, this)
        }
        setActiveListEmpty(t) {
            this.listEmpty && (this.listEmpty.active = t)
        }
    }).prototype, "listView", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(p.prototype, "listEmpty", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = p)) || a));
    r._RF.pop()
}
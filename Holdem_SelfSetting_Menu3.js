import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, u, s, d, p, f, b, S, g, h;
    r._RF.push({}, "8af1398dElPmZGT7OUKK/sm", "Holdem_SelfSetting_Menu3", void 0);
    const {
        ccclass: v,
        property: k
    } = l;
    e("default", (a = k(i), u = k(n), s = k(i), d = k(n), v((b = t((f = class extends c {
        constructor(...e) {
            super(...e), o(this, "pokerfaceSelected", b, this), o(this, "pokerfaceUnSelected", S, this), o(this, "bgColorSelected", g, this), o(this, "bgColorUnSelected", h, this)
        }
        onPokerfaceBtn() {
            this.pokerfaceSelected.active = !0, this.pokerfaceUnSelected.node.active = !1, this.bgColorSelected.active = !1, this.bgColorUnSelected.node.active = !0
        }
        onBgColorBtn() {
            this.pokerfaceSelected.active = !1, this.pokerfaceUnSelected.node.active = !0, this.bgColorSelected.active = !0, this.bgColorUnSelected.node.active = !1
        }
        start() {}
    }).prototype, "pokerfaceSelected", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(f.prototype, "pokerfaceUnSelected", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(f.prototype, "bgColorSelected", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(f.prototype, "bgColorUnSelected", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = f)) || p));
    r._RF.pop()
}
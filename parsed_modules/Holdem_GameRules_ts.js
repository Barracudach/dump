import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./observer.js";

function main() {
    var a, u, b, h, p, d, k, f;
    o._RF.push({}, "f1621zCbAhPPoODPiuqrlpz", "Holdem_GameRules_ts", void 0);
    const {
        ccclass: m,
        property: v
    } = n;
    e("Holdem_GameRules", (a = v(r), u = v(r), b = v(r), m(h = l((d = t((p = class extends c {
        constructor(...e) {
            super(...e), i(this, "mask", d, this), i(this, "blocker", k, this), i(this, "backButton", f, this)
        }
        onLoad() {
            this.blocker.active = !1, this.backButton.on(s.EventType.CLICK, this.onClickBack.bind(this))
        }
        show() {
            this.node.active = !0, this.blocker.active = !1
        }
        hide() {
            this.node.active = !1, this.blocker.active = !0
        }
        onClickBack() {
            this.hide()
        }
    }).prototype, "mask", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(p.prototype, "blocker", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(p.prototype, "backButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = p)) || h) || h));
    o._RF.pop()
}
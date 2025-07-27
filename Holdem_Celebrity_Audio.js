import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";

function main() {
    var l, u, s, a, f, p;
    i._RF.push({}, "482835cnCtNm4dPkKby3KK4", "Holdem_Celebrity_Audio", void 0);
    const {
        ccclass: d,
        property: b
    } = c;
    e("default", (l = b(n), u = b(n), d((f = o((a = class extends r {
        constructor(...e) {
            super(...e), t(this, "onIcon", f, this), t(this, "offIcon", p, this)
        }
        setActiveAudioIcon(e) {
            this.offIcon.active = !e, this.onIcon.active = e
        }
        onAudioVolumeIndication(e) {
            this.offIcon.active || (this.onIcon.active = e)
        }
    }).prototype, "onIcon", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = o(a.prototype, "offIcon", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = a)) || s));
    i._RF.pop()
}
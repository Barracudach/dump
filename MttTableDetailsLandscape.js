import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./PageThreeTableTuplePkw.js";
import * as o from "./FormatParser.js";

function main() {
    var l, u, c, p;
    a._RF.push({}, "93601yBJC5J2p7S/ZEbHogs", "MttTableDetailsLandscape", void 0);
    const {
        ccclass: b,
        property: d
    } = r;
    e("default", (l = d(i), b((p = t((c = class extends n {
        constructor(...e) {
            super(...e), s(this, "bg", p, this)
        }
        setChipsLabel(e) {
            this.tupleLabels[2].string = o.ThousandPointFormat(o.DisplayGold(e.MinCoins)), this.tupleLabels[3].string = o.ThousandPointFormat(o.DisplayGold(e.MaxCoins))
        }
        update(e) {}
        showBg() {
            this.bg && (this.bg.enabled = this.tupleId % 2 != 0)
        }
    }).prototype, "bg", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u));
    a._RF.pop()
}
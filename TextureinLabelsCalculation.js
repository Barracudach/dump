import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var u, c, b, p, h, d, f, m, L, g, z, x, y;
    n._RF.push({}, "33b48jsHdhD+KZrZcrxf//A", "TextureinLabelsCalculation", void 0);
    const {
        ccclass: w,
        property: C
    } = a;
    e("TextureinLabelsCalculation", (u = w("TextureinLabelsCalculation"), c = C(l), b = C(l), p = C(l), h = C(r), d = C(r), u((L = t((m = class extends o {
        constructor(...e) {
            super(...e), i(this, "leftLabel", L, this), i(this, "rightLabel", g, this), i(this, "tempLabel", z, this), i(this, "middleIcon", x, this), i(this, "maxNodeSize", y, this)
        }
        updateText(e, t) {
            this.tempLabel.string = e + t;
            const i = this.maxNodeSize.getComponent(s).width,
                n = this.tempLabel.getComponent(s);
            if (n.width = i, this.middleIcon.active) {
                const e = this.middleIcon.getComponent(s).width;
                n.width -= e
            }
            this.tempLabel.updateRenderData(!0);
            const l = this.tempLabel.actualFontSize;
            this.leftLabel.fontSize = l, this.rightLabel.fontSize = l, this.leftLabel.string = e, this.rightLabel.string = t
        }
    }).prototype, "leftLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(m.prototype, "rightLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(m.prototype, "tempLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(m.prototype, "middleIcon", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(m.prototype, "maxNodeSize", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = m)) || f));
    n._RF.pop()
}
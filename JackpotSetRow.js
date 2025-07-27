import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";

function main() {
    var l, a, p, u, h, f;
    r._RF.push({}, "a100fDoRotPzLNAZqEPZGID", "JackpotSetRow", void 0);
    const {
        ccclass: d,
        property: g
    } = n;
    t("JackpotSetRow", (l = g(i), a = g(i), d((h = o((u = class extends c {
        constructor(...t) {
            super(...t), e(this, "point", h, this), e(this, "ratio", f, this), this.colorHex1 = "#303241", this.colorHex2 = "#353747"
        }
        updateRowColor(t) {
            this.node.getComponent(s).color = this.node.getComponent(s).color.fromHEX(t % 2 == 0 ? this.colorHex1 : this.colorHex2)
        }
        updateRow(t, o) {
            this.point.string = t, this.ratio.string = o
        }
    }).prototype, "point", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = o(u.prototype, "ratio", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = u)) || p));
    r._RF.pop()
}
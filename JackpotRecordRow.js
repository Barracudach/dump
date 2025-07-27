import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as l from "./FormatParser.js";
import * as s from "./Translator.js";

function main() {
    var p, u, h, d, f, g, m, b, R, k;
    r._RF.push({}, "e87085iqjhNxpz5oPsdwERN", "JackpotRecordRow", void 0);
    const {
        ccclass: w,
        property: y
    } = n;
    t("JackpotRecordRow", (p = y(i), u = y(i), h = y(i), d = y(i), w((m = e((g = class extends a {
        constructor(...t) {
            super(...t), o(this, "nickName", m, this), o(this, "point", b, this), o(this, "jackpot", R, this), o(this, "date", k, this), this.colorHex1 = "#303241", this.colorHex2 = "#353747"
        }
        updateRowColor(t) {
            this.node.getComponent(c).color = this.node.getComponent(c).color.fromHEX(t % 2 == 0 ? this.colorHex1 : this.colorHex2)
        }
        updateRow(t) {
            this.nickName.string = t.nickName, this.point.string = t.point + s("GAME.JACKPOT_RECORD.POINT"), this.jackpot.string = l.DisplayGold(t.taken, 2).toString();
            let e = new Date(t.created);
            this.date.string = `${e.getMonth()+1}-${e.getDate()}`
        }
    }).prototype, "nickName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(g.prototype, "point", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(g.prototype, "jackpot", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(g.prototype, "date", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = g)) || f));
    r._RF.pop()
}
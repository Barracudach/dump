import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";

function main() {
    var a, c, p, m, f, _, d, g;
    n._RF.push({}, "df5a1qAFnNP1Zw5qethUIXt", "MailGoods", void 0);
    const {
        ccclass: h,
        property: b
    } = s;
    t("MailGoods", (a = b(r), c = b(o), p = b(o), h((_ = e((f = class extends l {
        constructor(...t) {
            super(...t), i(this, "img_icon", _, this), i(this, "txt_num", d, this), i(this, "txt_desc", g, this)
        }
        onLoad() {}
        start() {}
        setData(t) {
            t && (this.img_icon = null, this.txt_num.string = u.StringTools.formatC("%u", t.item_num), this.txt_desc.string = t.item_name)
        }
    }).prototype, "img_icon", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(f.prototype, "txt_num", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(f.prototype, "txt_desc", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = f)) || m));
    n._RF.pop()
}
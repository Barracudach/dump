import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cv.js";
import * as l from "./CustomToggleHandler.js";

function main() {
    var o, s, u, d;
    i._RF.push({}, "926b3ZJyINE+4S3SKTQlrZU", "CardBackItemHandler", void 0);
    const {
        ccclass: p,
        property: f
    } = c;
    e("default", (o = f(a), p((d = t((u = class extends l {
        constructor(...e) {
            super(...e), r(this, "cardbackSprite", d, this)
        }
        initialize(e, t, r, i) {
            this.initializeBase(e, r, i), n.resMgr.loadCardback(t, [this.cardbackSprite])
        }
    }).prototype, "cardbackSprite", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = u)) || s));
    i._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./CustomToggleHandler.js";

function main() {
    var o, c, p, u;
    r._RF.push({}, "3bf60J2lvVI3YpTATScrpxM", "TableBgItemHandlerMobile", void 0);
    const {
        ccclass: g,
        property: b
    } = l;
    e("default", (o = b(a), g((u = t((p = class extends s {
        constructor(...e) {
            super(...e), i(this, "tableBgSprite", u, this), this.tableIndex = null
        }
        initialize(e, t, i, r) {
            this.initializeBase(e, i, r);
            const a = "mtt/BG/gameBg_preview/bg_" + t;
            cc_mtt.vv.AssetsManager.loadImage(this.tableBgSprite, a, null, this.onBgLoaded.bind(this), (() => {})), this.tableIndex = t
        }
        onBgLoaded(e) {
            this.tableBgSprite.spriteFrame = new n, this.tableBgSprite.spriteFrame.texture = e
        }
    }).prototype, "tableBgSprite", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = p)) || c));
    r._RF.pop()
}
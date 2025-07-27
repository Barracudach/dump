import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as c from "./GiftData.js";

function main() {
    var u, m, d, f, p, _;
    s._RF.push({}, "4a6d4+ify5KKqgaTiQ4i0wu", "GiftPanelDetailItemMsg", void 0);
    t("GiftPanelDetailItemMsgData", class {
        constructor() {
            this.text = "", this.width = 0, this.typeIdx = 0, this.isGiftMsg = !1
        }
    });
    const {
        ccclass: x,
        property: b
    } = r;
    t("GiftPanelDetailItemMsg", (u = b(n), m = b(o), x((p = i((f = class extends a {
        constructor(...t) {
            super(...t), e(this, "img", p, this), e(this, "txt", _, this), this._bg_offset_width = 0
        }
        onLoad() {
            l.resMgr.adaptWidget(this.node, !0), this.txt.maxWidth = this.txt.node.getComponent(g).width;
            let t = this.txt.getComponent(h);
            this._bg_offset_width = t.left + t.right
        }
        reuse() {}
        unuse() {
            this.txt.string = "", this.img && (this.img.node.getComponent(g).width = 0, this.img.node.active = !1)
        }
        updateSVReuseData(t, i) {
            if (this.txt.string = i.text, this.img) {
                this.img.node.active = !0, this.img.node.getComponent(g).width = Math.min(i.width + this._bg_offset_width, this.node.getComponent(g).width);
                let t = i.isGiftMsg ? "img_msg_bg_1" : "img_msg_bg_2",
                    e = c.GIFT_PLIST_PATH;
                this.img.spriteFrame = l.resMgr.getSpriteAtlasFrame(e, t)
            }
        }
    }).prototype, "img", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = i(f.prototype, "txt", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = f)) || d));
    s._RF.pop()
}
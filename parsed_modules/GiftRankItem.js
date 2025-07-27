import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cv.js";
import * as _ from "./CircleSprite.js";
import * as c from "./GiftData.js";

function main() {
    var p, g, b, h, d, f, k, x, y, v, S, z, D, F;
    i._RF.push({}, "84839DRzjtG9JgA3n7ux/vC", "GiftRankItem", void 0);
    const {
        ccclass: R,
        property: G
    } = o;
    t("GiftRankItem", (p = G(n), g = G(n), b = G(n), h = G(a), d = G(a), f = G(a), R((y = e((x = class extends l {
        constructor(...t) {
            super(...t), r(this, "img_head_mask", y, this), r(this, "img_head_box", v, this), r(this, "img_rank_number", S, this), r(this, "txt_rank_number", z, this), r(this, "txt_name", D, this), r(this, "txt_gold", F, this)
        }
        onLoad() {
            m.resMgr.adaptWidget(this.node, !0)
        }
        reuse() {}
        unuse() {}
        updateSVReuseData(t, e) {
            let r = t + 1,
                i = c.GIFT_PLIST_PATH,
                n = `avatar_frame_${Math.min(r,4)}`;
            this.img_head_box.spriteFrame = m.resMgr.getSpriteAtlasFrame(i, n), r <= 3 ? (this.txt_rank_number.node.active = !1, this.img_rank_number.node.active = !0, this.img_rank_number.spriteFrame = m.resMgr.getSpriteAtlasFrame(i, `img_rank_${r}`)) : (this.img_rank_number.node.active = !1, this.txt_rank_number.node.active = !0, this.txt_rank_number.string = `${r}`);
            let a = u(230, 231, 251);
            e.player.playerid === m.dataHandler.getUserData().u32Uid && (a.r = 254, a.g = 199, a.b = 40), this.txt_name.node.getComponent(s).color = a, this.txt_name.string = e.player.nickname, this.txt_gold.string = m.StringTools.numToFloatString(e.contr), _.setCircleSprite(this.img_head_mask.node, e.player.avatar, e.player.plat)
        }
    }).prototype, "img_head_mask", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(x.prototype, "img_head_box", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(x.prototype, "img_rank_number", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(x.prototype, "txt_rank_number", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(x.prototype, "txt_name", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(x.prototype, "txt_gold", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = x)) || k));
    i._RF.pop()
}
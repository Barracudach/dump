import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as c from "./Enum.js";
import * as m from "./GiftData.js";

function main() {
    var p, u, h, f, b, d, x, S, y, v, w, z;
    n._RF.push({}, "a9667ptEA9Mpauq6YOt4u+b", "GiftSmallBoxItem", void 0);
    const {
        ccclass: G,
        property: D
    } = s;
    t("GiftSmallBoxItem", (p = D(r), u = D(a), h = D(a), f = D(a), b = D(o), G((S = e((x = class extends l {
        constructor(...t) {
            super(...t), i(this, "img_sender_bg", S, this), i(this, "txt_tmp_cache", y, this), i(this, "txt_tmp_name1", v, this), i(this, "txt_tmp_name2", w, this), i(this, "txt_content", z, this)
        }
        onLoad() {
            this.img_sender_bg.node.active = !1, this.txt_tmp_cache.node.active = !1, this.txt_tmp_name1.node.active = !1, this.txt_tmp_name2.node.active = !1
        }
        start() {}
        updateSVReuseData(t, e) {
            let i = e.gift.tip.tipId,
                n = e.gift.tip.tipCount,
                r = e.gift.player.nickname,
                a = e.gift.toPlayer.nickname,
                o = g.config.getCurrentLanguage() === c.zh_CN || g.config.getCurrentLanguage() === c.zh_TW ? g.config.getStringData("Gift_sent") : "Sent",
                s = g.config.getStringData(`Gift_category_${i}`),
                l = ` x ${n}`,
                p = m.GIFT_PLIST_PATH;
            if (i > 1e3) {
                let t = 60,
                    e = g.resMgr.getSpriteAtlasFrame(p, `gift_icon_${i}`).originalSize,
                    n = t / e.width,
                    r = this.txt_tmp_cache.node.getComponent(_).height / e.height,
                    a = r;
                n < r && (a = n), l = ` <img src="gift_icon_${i}" width=${a*e.width} height=${a*e.height}/>`
            }
            let u = s + l;
            g.StringTools.setShrinkString(this.txt_tmp_name1.node, r), r = this.txt_tmp_name1.string, g.StringTools.setShrinkString(this.txt_tmp_name2.node, a), a = `<color=#FFCD7E>${this.txt_tmp_name2.string}</color>`, this.txt_tmp_cache.string = r;
            let h = g.resMgr.getLabelStringSize(this.txt_tmp_cache);
            this.img_sender_bg.node.getComponent(_).width = h.width + 6, this.img_sender_bg.node.active = !0;
            let f = "img_smallbox_name_bg1";
            i > 1e3 && (f = "img_smallbox_name_bg2"), 1 === e.gift.player.identity && (f = "img_smallbox_name_bg3"), this.img_sender_bg.spriteFrame = g.resMgr.getSpriteAtlasFrame(p, f);
            let b = "";
            b += r + " " + o, b += "\n", b += a, b += "\n", b += u, this.txt_content.string = b
        }
    }).prototype, "img_sender_bg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(x.prototype, "txt_tmp_cache", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(x.prototype, "txt_tmp_name1", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(x.prototype, "txt_tmp_name2", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(x.prototype, "txt_content", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = x)) || d));
    n._RF.pop()
}
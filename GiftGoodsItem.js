import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as _ from "./Enum.js";
import * as g from "./GiftData.js";
import * as l from "./CustomToggle.js";

function main() {
    var m, h, d, u, f;
    s._RF.push({}, "8bd65FafP1Bj5uUM1S7MDBH", "GiftGoodsItem", void 0);
    t("GiftGoodsItemInfo", class {
        constructor() {
            this.isCheck = !1, this.info = null
        }
    });
    t("GiftGoodsItemData", class {
        constructor() {
            this.items = []
        }
    });
    const {
        ccclass: p,
        property: C
    } = n;
    t("GiftGoodsItem", (m = C({
        type: [l]
    }), p(((f = class t extends o {
        constructor(...t) {
            super(...t), i(this, "node_items", u, this), this._dataRef = null, this._txt_name = [], this._txt_price = [], this._img_icon = [], this._img_coin = []
        }
        onLoad() {
            c.resMgr.adaptWidget(this.node, !0);
            for (let t = 0; t < this.node_items.length; ++t) {
                let e = this.node_items[t].node.getChildByName("txt_name").getComponent(a),
                    i = this.node_items[t].node.getChildByName("img_icon").getComponent(r),
                    s = this.node_items[t].node.getChildByName("img_coin").getComponent(r),
                    n = s.node.getChildByName("txt").getComponent(a);
                this._txt_name.push(e), this._img_icon.push(i), this._img_coin.push(s), this._txt_price.push(n), this.node_items[t].node.on("toggle", (e => {
                    this._onToggleClick(t, e)
                }), this)
            }
        }
        start() {}
        _onToggleClick(e, i) {
            if (c.AudioMgr.playButtonSound("button_click"), !this._dataRef) return;
            if (e < 0 || e >= this._dataRef.items.length) return;
            let s = this._dataRef.items[e];
            s.isCheck = i.isChecked, c.MessageCenter.send(`${t.g_class_name}_click`, s)
        }
        updateSVReuseData(t, e, i) {
            this._dataRef = e;
            for (let t = 0; t < this.node_items.length; ++t) {
                let i = this.node_items[t];
                if (i.node.active = t < e.items.length, !i.node.active) continue;
                let s = e.items[t];
                i.isChecked = s.isCheck;
                let n = s.info.tipId;
                this._img_icon[t].spriteFrame = null, this._img_coin[t].spriteFrame = null;
                let o = `gift_icon_${n}`,
                    a = "gift_coin_bg_" + (s.info.tipId < 1e3 ? 1 : 2),
                    r = c.config.getLanguagePath(g.GIFT_PLIST_PATH, _.zh_CN);
                this._img_icon[t].spriteFrame = c.resMgr.getSpriteAtlasFrame(r, o), this._img_coin[t].spriteFrame = c.resMgr.getSpriteAtlasFrame(r, a), this._txt_name[t].string = c.config.getStringData(`Gift_category_${n}`), this._txt_price[t].string = c.StringTools.numToFloatString(s.info.fee)
            }
        }
    }).g_class_name = "GiftGoodsItem", u = e((d = f).prototype, "node_items", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), h = d)) || h));
    s._RF.pop()
}
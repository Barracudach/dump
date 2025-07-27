import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cv.js";

function main() {
    var a, h, x, p, f, g, m, R, b;
    i._RF.push({}, "abc3epVEv5Jfpqxck9igyPP", "GiftGoodsCountItem", void 0);
    const {
        ccclass: C,
        property: y
    } = c;
    t("GiftGoodsCountItem", (a = y(n), h = y(s), x = y(s), C(((b = class t extends r {
        constructor(...t) {
            super(...t), o(this, "img_select", g, this), o(this, "txt_count", m, this), o(this, "txt_desc", R, this), this._dataRef = null, this._txt_color_normal = new _(_.WHITE), this._txt_color_selected = l(255, 171, 0), this.txt_count_node_uiRenderer = null, this.txt_desc_node_uiRendere = null
        }
        onLoad() {
            this.txt_count_node_uiRenderer = this.txt_count.node.getComponent(u), this.txt_desc_node_uiRendere = this.txt_desc.node.getComponent(u), d.resMgr.adaptWidget(this.node, !0), this.node.on("click", this._onClick, this)
        }
        start() {}
        _onClick() {
            this.txt_count_node_uiRenderer.color = this._txt_color_selected, this.txt_desc && (this.txt_desc_node_uiRendere.color = this._txt_color_selected), d.MessageCenter.send(`${t.g_class_name}_click`, this._dataRef)
        }
        updateSVReuseData(t, e) {
            this._dataRef = e, this.img_select.active = e.isSelect;
            let o = this._txt_color_normal;
            e.isSelect && (o = this._txt_color_selected), this.txt_count.string = d.String(e.count), this.txt_count_node_uiRenderer.color = o, this.txt_desc && (this.txt_desc.string = e.desc, this.txt_desc_node_uiRendere.color = o)
        }
    }).g_class_name = "GiftGoodsCountItem", g = e((f = b).prototype, "img_select", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(f.prototype, "txt_count", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(f.prototype, "txt_desc", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = f)) || p));
    i._RF.pop()
}
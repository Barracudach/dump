import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./i18nText.js";
import * as h from "./cv.js";
import * as a from "./MiniGameSoundManager.js";

function main() {
    var b, _, p, f, g, d, y, m, x, C, v, k;
    i._RF.push({}, "ff20bRtAaNKrby+VlH90oE0", "HumanboyDialog", void 0);
    const {
        ccclass: B,
        property: w
    } = r;
    t("HumanboyDialog", (b = w(o), _ = w(l), p = w(l), f = w(l), g = w(s), B((m = n((y = class extends c {
        constructor(...t) {
            super(...t), e(this, "txt_content", m, this), e(this, "btn_left", x, this), e(this, "btn_right", C, this), e(this, "btn_close", v, this), e(this, "title", k, this), this._cb_left = null, this._cb_right = null
        }
        onLoad() {
            this.btn_left.node.on("click", (t => {
                a.playButtonSound("button_click"), this._cb_left && (this._cb_left(this), this.close())
            })), this.btn_right.node.on("click", (t => {
                a.playButtonSound("button_click"), this._cb_right && (this._cb_right(this), this.close())
            })), this.btn_close.node.on("click", (t => {
                a.playButtonSound("button_click"), this.close()
            })), this.btn_close.node.active = !1
        }
        initTexts() {
            const t = [],
                n = this.btn_left.getComponentInChildren(o),
                e = this.btn_right.getComponentInChildren(o);
            this.title && t.push(this.title), n && t.push(n.node), e && t.push(e.node);
            for (const n of t)
                if (n) {
                    const t = n.getComponent(u);
                    t && t.setOptionUseEngTextOnly(!0)
                }
        }
        start() {}
        show(t, n, e, i, l) {
            this.txt_content.string = t, this._cb_left = i, this._cb_right = l, this.node.active = !0, this.btn_left.node.getChildByName("txt").getComponent(o).string = n, this.btn_right.node.getChildByName("txt").getComponent(o).string = e
        }
        close() {
            this.node.removeFromParent(), h.tools.destroyNode(this.node)
        }
    }).prototype, "txt_content", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = n(y.prototype, "btn_left", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = n(y.prototype, "btn_right", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = n(y.prototype, "btn_close", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = n(y.prototype, "title", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = y)) || d));
    i._RF.pop()
}
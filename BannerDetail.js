import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./mttconfig.js";
import * as d from "./Translator.js";
import * as b from "./NodeTools.js";

function main() {
    var p, g, f, m, _, B, k, v, T, w;
    i._RF.push({}, "b6d432bqTJD46xX7Ta2BM35", "BannerDetail", void 0);
    const {
        ccclass: y,
        property: L
    } = c;
    e("BannerDetail", (p = L(o), g = L(r), f = L(a), m = L(l), y((k = t((B = class extends s {
        constructor(...e) {
            super(...e), n(this, "content", k, this), n(this, "backButton", v, this), n(this, "headerLabel", T, this), n(this, "scrollView", w, this), this._onBackClickAction = null, this._headerText = ""
        }
        onLoad() {
            this.node.active = !1
        }
        start() {}
        setPage(e, t, n) {
            this._headerText = e, this._onBackClickAction = n, this.headerLabel.string = d("EVENT.LOADING_BANNER");
            let i = h.avatarHost + t + "?" + (new Date).getTime();
            ((e, t) => {
                cc_mtt.vv.AssetsManager.loadWebImage(e, t, null, (n => {
                    try {
                        e.spriteFrame = new u, e.spriteFrame.texture = n, this.headerLabel.string = this._headerText, b.setNodeWidth(this.content.node, b.getNodeWidth(this.scrollView.node))
                    } catch (e) {
                        cc_mtt.vv.ConsoleLog.log("AssetsManager.loadWebImage error!\nurl: " + t + "\nerror: "), cc_mtt.vv.ConsoleLog.log(e)
                    }
                }))
            })(this.content, i)
        }
        onBackClicked() {
            this._onBackClickAction && this._onBackClickAction(this.node)
        }
    }).prototype, "content", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(B.prototype, "backButton", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(B.prototype, "headerLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(B.prototype, "scrollView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = B)) || _));
    i._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as r from "./EmojiView.js";
import * as n from "./SlideView.js";
import * as c from "./EmojiLoader.js";
import * as u from "./cv.js";

function main() {
    var l, a, d, p;
    s._RF.push({}, "29c6bCJpQ9LG45/3DRSgK+i", "EmojiViewPortrait", void 0);
    const {
        ccclass: f,
        property: h
    } = o;
    i("default", (l = h(n), f((p = e((d = class extends r {
        constructor(...i) {
            super(...i), t(this, "slideView", p, this)
        }
        updateConfig() {
            super.updateConfig(), this.slideView.isActive && !c.config.Enable && this.hideUi()
        }
        showUi() {
            super.showUi(), u.resMgr.adaptWidget(this.node, !0, !1), this.slideView.show(!1)
        }
        hideUi() {
            this.slideView.hide()
        }
    }).prototype, "slideView", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = d)) || a));
    s._RF.pop()
}
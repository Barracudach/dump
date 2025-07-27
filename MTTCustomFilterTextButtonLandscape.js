import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./SizeContentSync.js";
import * as h from "./cv.js";

function main() {
    var d, u, l, p, T;
    i._RF.push({}, "91e84ANDPRLn4+uc9VNUk44", "MTTCustomFilterTextButtonLandscape", void 0);
    const {
        ccclass: x,
        property: C
    } = o;
    t("MTTCustomFilterTextButtonLandscape", (d = x("MTTCustomFilterTextButtonLandscape"), u = C(s), d((T = e((p = class extends a {
        constructor(...t) {
            super(...t), n(this, "text", T, this), this._PADDING_WIDTH = 48
        }
        onEnable() {
            this.text.off(s.EventType.SIZE_CHANGED, this.onTextSizeChanged, this), this.text.on(s.EventType.SIZE_CHANGED, this.onTextSizeChanged, this)
        }
        onDisable() {
            r(this.text) && this.text.off(s.EventType.SIZE_CHANGED, this.onTextSizeChanged, this)
        }
        start() {
            this.onTextSizeChanged()
        }
        onTextSizeChanged() {
            const t = this.text.getContentSize(),
                e = this.node.getComponent(c);
            t.width < 80 - this._PADDING_WIDTH ? e.paddingWidth = 80 - t.width : e.paddingWidth = this._PADDING_WIDTH, this.scheduleOnce((() => {
                r(this.node) && h.resMgr.adaptWidget(this.node, !0, !1)
            }))
        }
    }).prototype, "text", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l));
    i._RF.pop()
}
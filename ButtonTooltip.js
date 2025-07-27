import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as h from "./TooltipsHandler.js";
import * as c from "./TooltipsHandler.js";
import * as T from "./TooltipsManager.js";
import * as f from "./cv.js";

function main() {
    var d, y, b, g, m, C, M, S, v, w, z, x, B, E;
    e._RF.push({}, "c7998ezDY9K1p2iSioYc0bK", "ButtonTooltip", void 0);
    const {
        ccclass: k,
        property: O
    } = p;
    t("ButtonTooltip", (d = k("ButtonTooltip"), y = O(n), b = O({
        type: l(h)
    }), g = O(Number), m = O(Number), C = O({
        type: l(c)
    }), d((v = o((S = class extends r {
        constructor(...t) {
            super(...t), i(this, "tooltipBtn", v, this), i(this, "tooltipSkinType", w, this), i(this, "fontSizeContent", z, this), i(this, "lineHeightContent", x, this), this.tooltipText = "", i(this, "tooltipType", B, this), i(this, "tooltipMaxWidth", E, this)
        }
        start() {
            this.tooltipBtn && f.appConfig.isLandscapeLayout && (this.tooltipBtn.on(n.EventType.MOUSE_ENTER, this.onMouseOverToolTipLandscape, this), this.tooltipBtn.on(n.EventType.MOUSE_LEAVE, this.hideToolTip, this))
        }
        setInfoDialogText(t) {
            this.tooltipText = t
        }
        onMouseOverToolTipLandscape(t) {
            this.onMouseOverToolTip(t, this.tooltipText)
        }
        onMouseOverToolTip(t, o) {
            let i = t.target;
            this.showToolTip(i, this.tooltipText, this.tooltipType)
        }
        showToolTip(t, o, i) {
            if (this.hideToolTip(), null == o || "" == o) return;
            let e = t.getComponent(s);
            e && (e.isChecked = !0);
            let n = t.getComponent(a),
                l = n.contentSize,
                p = n.anchorPoint,
                r = new u(l.width * (.5 - p.x), l.height * (0 - p.y)),
                h = n.convertToWorldSpaceAR(r);
            T.showToolTips(h, "", o, new u(u.ZERO), i, this.tooltipMaxWidth, this.tooltipSkinType, t, this.fontSizeContent, this.lineHeightContent)
        }
        hideToolTip() {
            let t = this.tooltipBtn.getComponent(s);
            t && (t.isChecked = !1), T.hideAllTooltips()
        }
    }).prototype, "tooltipBtn", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = o(S.prototype, "tooltipSkinType", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return h.MttDetailInfo
        }
    }), z = o(S.prototype, "fontSizeContent", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 24
        }
    }), x = o(S.prototype, "lineHeightContent", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 32
        }
    }), B = o(S.prototype, "tooltipType", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return c.PointerUpMiddle
        }
    }), E = o(S.prototype, "tooltipMaxWidth", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 500
        }
    }), M = S)) || M));
    e._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./holdem_game_records.js";
import * as u from "./Holdem_Game_Review_Hand.js";

function main() {
    var g, m, v, f, _, y;
    o._RF.push({}, "2ce13UB9sZJDbi0saCT0msc", "mttGameReviewLandscape", void 0);
    const {
        ccclass: C,
        property: P
    } = a;
    e("default", (g = P(i), m = P(i), C((_ = t((f = class extends h {
        constructor(...e) {
            super(...e), n(this, "panelBottom", _, this), n(this, "paddingNode", y, this)
        }
        updateXDeviceLayout(e) {}
        initEvents() {}
        onLoad() {
            super.onLoad(), this.gameReviewPage.node.on(i.EventType.SIZE_CHANGED, this._setPaddingNodeHeight, this)
        }
        _setPaddingNodeHeight() {
            let e = this.currentReviewHandPage;
            if (!e) return;
            let t = e.getComponent(r).content;
            if (!t) return;
            let n = t.getComponent(l).spacingY,
                o = t.children.length - 2,
                i = t.children.length > 0 ? t.children[0].getComponent(s).height : 0,
                a = this.gameReviewPage.node.getComponent(s).height - o * (i + n);
            a = a - this.panelBottom.getComponent(s).height - 2 * n;
            let p = c("paddingNode", t);
            p && (p.getComponent(s).height = Math.max(0, a));
            const h = e.getComponent(r);
            h && (h.stopAutoScroll(), this.scheduleOnce((() => {
                d(h, !0) && h.scrollToTop(0)
            })))
        }
        appendBottomPanel(e) {
            let t = p(this.panelBottom),
                n = p(this.paddingNode),
                o = e.getComponent(r).content;
            const i = t.children.some((e => e.activeInHierarchy));
            n.parent = o, n.active = i, t.parent = o, t.active = i, i && this._setPaddingNodeHeight()
        }
        onDisable() {
            var e;
            null == (e = this.currentReviewHandPage) || null == (e = e.getComponent(r)) || e.content.destroyAllChildren(), this.unscheduleAllCallbacks()
        }
        setPlayerName(e, t) {
            e.getComponent(u).setPlayerName(t)
        }
    }).prototype, "panelBottom", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(f.prototype, "paddingNode", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = f)) || v));
    o._RF.pop()
}
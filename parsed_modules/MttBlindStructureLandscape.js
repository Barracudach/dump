import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./MttBlindPotTablePkw.js";
import * as c from "./MttBlindPotTuplePkw.js";
import * as u from "./ScrollItem.js";
import * as d from "./SlideView.js";
import * as h from "./ScrollViewWithSlider.js";
import * as p from "./borderGraphic.js";
import * as b from "./cv.js";

function main() {
    var g, f, m, w, L, y, I, S, B, v, P, M, V, k, z, W, T, _;
    n._RF.push({}, "2ab5bIOTatHaqvKh5/pohMR", "MttBlindStructureLandscape", void 0);
    const {
        ccclass: C,
        property: D
    } = r;
    t("default", (g = D(u), f = D(l), m = D(l), w = D(s), L = D(o), y = D(h), I = D(d), S = D(l), C((P = e((v = class extends a {
        constructor(...t) {
            super(...t), i(this, "scrollItem", P, this), i(this, "swipeIndicator", M, this), i(this, "headerLine", V, this), i(this, "closeButton", k, this), i(this, "bodyWidget", z, this), i(this, "scrollBar", W, this), i(this, "slideView", T, this), i(this, "bg", _, this), this.isLandscape = !0
        }
        onLoad() {
            if (super.onLoad(), this.isLandscape = b.appConfig.isLandscapeLayout, this.swipeIndicator.active = !this.isLandscape, this.headerLine.active = this.isLandscape, this.closeButton.node.active = this.isLandscape, this.isLandscape) {
                this.slideView.enabled = !1;
                let t = this.scrollItem.getComponent(o);
                this.scrollItem.spacing.top = 32, this.scrollItem.spacing.bottom = 46, t && (t.top = 0, t.bottom = 0)
            } else {
                this.scrollBar.disable();
                let t = this.bg.getComponent(p);
                t && (t.borderRoundRadius = 40);
                let e = this.bg.getComponent(o);
                e && (e.bottom = -40), this.setupWidgetForMobile(this.bodyWidget)
            }
            b.resMgr.adaptWidget(this.node, !0, !1), this.initScrollView()
        }
        update(t) {}
        initScrollView() {
            this.scrollItem && this.scrollItem.setItemFunc(0, ((t, e) => {
                t.getComponent(c).setInfo(e, Number(t.name), this.currentLevel, this.levelStopSignUp, this._isShortDesk, this._blindHand, this.levelDuration)
            }))
        }
        setupWidgetForMobile(t) {
            t.isAlignLeft = !0, t.left = 0, t.isAlignRight = !0, t.right = 0, t.isAlignBottom = !1, t.isAlignTop = !1
        }
        hide() {
            this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name), this.isLandscape ? this.node.active = !1 : this.slideView.hide()
        }
        updateList() {
            this.scrollItem ? this.scrollItem.changeItemData(this.blindPotList, !0) : super.updateList()
        }
        updateTuplesPosition() {}
        setupScrollView() {}
        backGroundOnClick() {
            this.isLandscape || this.hide()
        }
    }).prototype, "scrollItem", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(v.prototype, "swipeIndicator", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(v.prototype, "headerLine", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(v.prototype, "closeButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(v.prototype, "bodyWidget", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(v.prototype, "scrollBar", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(v.prototype, "slideView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(v.prototype, "bg", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = v)) || B));
    n._RF.pop()
}
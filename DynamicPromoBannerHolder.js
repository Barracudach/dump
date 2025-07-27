import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cv.js";
import * as g from "./DynamicPromoEnums.js";
import * as P from "./DynamicPromoEnums.js";
import * as b from "./DynamicPromoEnums.js";
import * as w from "./DynamicPromoBanner.js";
import * as v from "./ConfigEnablerNode.js";

function main() {
    var N, C, D, V, y, E, R, S, k, z, A, T, L, B, M, F, H, I;
    i._RF.push({}, "e0b94RcqfhGjJ3NS1g9+QyO", "DynamicPromoBannerHolder", void 0);
    const {
        ccclass: O,
        property: U
    } = s;
    e("default", (N = U({
        type: n(P),
        tooltip: "The type of promotion which will be loaded"
    }), C = U({
        type: r,
        tooltip: "The prefab of the spinner which will be shown during banner load"
    }), D = U({
        type: a,
        tooltip: "The node with reference to which the banners are adjusted"
    }), V = U({
        type: a,
        tooltip: "The node where all the promo banners are loaded"
    }), y = U({
        type: a,
        tooltip: "The node of a banner which will be used as a fallback"
    }), E = U({
        tooltip: "Whether the fallback banner should be hidden once new banners are loaded"
    }), R = U({
        tooltip: "Disables the node if no suitable promotions are present and default also can't be used"
    }), S = U({
        tooltip: "Whether the fallback banner should shown at the end, if there are multiple banners present",
        visible: function() {
            return this.keepDefaultPromo
        }
    }), O((A = t((z = class extends l {
        constructor(...e) {
            super(...e), o(this, "promoPlacement", A, this), o(this, "spinnerPrefab", T, this), o(this, "sizeReferenceNode", L, this), o(this, "promoParentNode", B, this), o(this, "defaultPromo", M, this), o(this, "keepDefaultPromo", F, this), o(this, "disablePromoHolder", H, this), o(this, "showDefaultPromoAtEnd", I, this), this.mappedPlacementValue = void 0, this.spinnerReferenceNode = void 0, this.pageView = void 0, this.bannerLoadedEventFired = void 0, this.originalSize = void 0, this.defaultPromoConfigEnabler = void 0
        }
        onLoad() {
            this.pageView = this.node.getComponent(h), this.mappedPlacementValue = g[P[this.promoPlacement]], null == this.sizeReferenceNode && (this.sizeReferenceNode = this.node), this.originalSize = this.sizeReferenceNode.getContentSize(), this.onRefreshBannerCallback(), m.MessageCenter.register(b.RefreshPromoBanner, this.onRefreshBannerCallback.bind(this), this.node), d(this.defaultPromo) && (this.defaultPromoConfigEnabler = this.defaultPromo.getComponent(v), this.defaultPromoConfigEnabler && m.MessageCenter.register(m.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.checkAndToggleDefaultPromo.bind(this), this, !1))
        }
        onEnable() {
            this.promoParentNode.children.forEach((e => {
                e.getComponent(p).setContentSize(this.originalSize)
            }))
        }
        fetchPromos() {
            d(this.promoParentNode) && d(this.node) && (this.keepDefaultPromo || this.hideDefaultPromo(), this.bannerLoadedEventFired = !1, m.dynamicPromoController.fetchPromoBanners(this.mappedPlacementValue, this.loadPromoInNode.bind(this)).then((() => {
                this.checkAndToggleDefaultPromo(), this.isSpinnerActive() && this.hideSpinner(), this.bannerLoadedEventFired || (this.bannerLoadedEventFired = !0, m.MessageCenter.send(b.PromoLoaded, this.mappedPlacementValue)), this.checkAndDisableHolder()
            })))
        }
        loadPromoInNode(e, t) {
            if (d(e) && d(this.promoParentNode) && d(this.node)) {
                var o;
                if (this.pageView ? this.pageView.insertPage(e, t) : this.promoParentNode.addChild(e), e.getComponent(p).setContentSize(this.sizeReferenceNode.getContentSize()), e.setPosition(new u(u.ZERO)), this.keepDefaultPromo && this.showDefaultPromoAtEnd && this.shiftDefaultPromoToTheEnd(), this.pageView) this.updateBannerPosInPageView(t), null == (o = this.pageView.content.getComponent(c)) || o.updateLayout();
                this.isSpinnerActive() && this.hideSpinner(), this.bannerLoadedEventFired || (this.bannerLoadedEventFired = !0, m.MessageCenter.send(b.PromoLoaded, this.mappedPlacementValue))
            }
        }
        checkAndDisableHolder() {
            if (!d(this.node) || !d(this.promoParentNode) || !d(this.defaultPromo)) return;
            if (!this.disablePromoHolder) return;
            const e = this.pageView ? this.pageView.getPages().length : this.promoParentNode.children.length;
            this.node.active = e > 1 || this.defaultPromo.active
        }
        hideDefaultPromo() {
            this.defaultPromo.active = !1
        }
        checkAndToggleDefaultPromo() {
            var e;
            if (!d(this.node) || !d(this.promoParentNode) || !d(this.defaultPromo)) return;
            const t = this.pageView ? this.pageView.getPages().length : this.promoParentNode.children.length,
                o = this.keepDefaultPromo || !this.keepDefaultPromo && t <= 1,
                i = (null == (e = this.defaultPromoConfigEnabler) ? void 0 : e.shouldEnable()) ?? o;
            this.defaultPromo.active = o && i
        }
        shiftDefaultPromoToTheEnd() {
            this.pageView ? (this.pageView.removePage(this.defaultPromo), this.pageView.addPage(this.defaultPromo), this.defaultPromo.getComponent(w).rank = this.pageView.getPages().length) : (this.defaultPromo.setParent(null), this.defaultPromo.setParent(this.promoParentNode))
        }
        clearAllPromos() {
            this.defaultPromo.setParent(null), this.pageView ? (this.pageView.removeAllPages(), this.pageView.addPage(this.defaultPromo)) : (this.promoParentNode.removeAllChildren(), this.defaultPromo.setParent(this.promoParentNode))
        }
        initSpinner() {
            !d(this.spinnerReferenceNode) && d(this.spinnerPrefab) && d(this.node) && (this.spinnerReferenceNode = f(this.spinnerPrefab), this.spinnerReferenceNode.setPosition(new u(u.ZERO)), this.spinnerReferenceNode.active = !1, this.spinnerReferenceNode.setParent(this.node))
        }
        showSpinner() {
            d(this.spinnerReferenceNode) && d(this.node) && (this.keepDefaultPromo && !this.showDefaultPromoAtEnd && this.defaultPromo.active || (this.spinnerReferenceNode.active = !0))
        }
        hideSpinner() {
            if (!d(this.spinnerReferenceNode) || !d(this.node)) return;
            let e = !1;
            for (let t of this.promoParentNode.children)
                if (e = e || t.active, e) break;
            e && (this.spinnerReferenceNode.active = !1)
        }
        isSpinnerActive() {
            var e;
            return d(this.spinnerReferenceNode) && (null == (e = this.spinnerReferenceNode) ? void 0 : e.active)
        }
        updateBannerPosInPageView(e) {
            if (!d(this.pageView) || !d(this.promoParentNode)) return;
            const t = [...this.pageView.getPages()];
            for (let e of t) {
                if (!d(e)) continue;
                if (e == this.defaultPromo && !this.keepDefaultPromo) continue;
                const t = e.getComponent(w);
                null == t || t.updatePositionUsingRank()
            }
            const o = this.pageView.getPages().length;
            if ((e >= o ? o - 1 : e) < o - 1) {
                this.pageView.stopAutoScroll();
                const e = (this.pageView.getCurrentPageIndex() - 1) % o;
                this.pageView.scrollToPage(e, .5)
            }
        }
        onRefreshBannerCallback() {
            this.initSpinner(), this.clearAllPromos(), this.showSpinner(), this.fetchPromos()
        }
        onDestroy() {
            m.MessageCenter.unregister(b.RefreshPromoBanner, this.node), this.defaultPromoConfigEnabler && m.MessageCenter.unregister(m.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this)
        }
    }).prototype, "promoPlacement", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return P.LobbySlider
        }
    }), T = t(z.prototype, "spinnerPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(z.prototype, "sizeReferenceNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(z.prototype, "promoParentNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(z.prototype, "defaultPromo", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(z.prototype, "keepDefaultPromo", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), H = t(z.prototype, "disablePromoHolder", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), I = t(z.prototype, "showDefaultPromoAtEnd", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), k = z)) || k));
    i._RF.pop()
}
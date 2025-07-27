import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./DesignSystemButtonBase.js";
import * as g from "./DesignSystemButtonBase.js";
import * as C from "./Enum.js";
import * as d from "./ListView.js";
import * as y from "./cv.js";
import * as b from "./CommonTools.js";
import * as L from "./MttLobbyRepository.js";
import * as T from "./LobbyResourcesHelper.js";
import * as v from "./LobbyTabComp.js";
import * as F from "./MttGameListInformer.js";
import * as P from "./MttGameListSubfilter.js";
import * as S from "./MttGroupFilterPopupComp.js";

function main() {
    var w, A, E, I, M, _, z, O, B, G, N, D, R, V, k, W, H, U, x, j, Z, J, q, K;
    n._RF.push({}, "36cc8bOljpGA6J8WNr5pi/D", "MTTGameTabComp", void 0);
    const {
        ccclass: Q,
        property: X
    } = s;
    t("default", (w = X(d), A = X(o), E = X(o), I = X(r), M = X(f), _ = X(r), z = X(o), O = X(r), B = X(r), G = X(r), N = X(r), Q((V = e((R = class extends v {
        constructor(...t) {
            super(...t), this.mvcViews = [], i(this, "listScrollItem", V, this), this.groupFilterPopup = null, i(this, "gamelistFilterPrefab", k, this), i(this, "gamelistFilterPopup", W, this), i(this, "filterContainer", H, this), i(this, "groupFilterBtn", U, this), i(this, "listContainer", x, this), i(this, "informerPrefab", j, this), this.informerComp = null, i(this, "informerParent", Z, this), this.isActiveInformer = !1, this.informerTween = null, this.INFORMER_TWEEN_DURATION = .5, this._filterOpenAni = void 0, this._filterCloseAni = void 0, i(this, "filterPopupParent", J, this), i(this, "listMyMTTEmpty", q, this), i(this, "filterListEmpty", K, this)
        }
        onLoad() {
            super.onLoad(), T.initAssets(), l(this.listContainer) && this.listContainer.parent.on(r.EventType.SIZE_CHANGED, this.updateListContainerSize, this)
        }
        onDestroy() {
            T.releaseAssets(), this.stopFilterTween()
        }
        setShowMyMTTEmptyList(t) {
            l(this.listMyMTTEmpty) && (this.listMyMTTEmpty.active = t, b.instance.updateAlignments(this.listMyMTTEmpty, !0, !1))
        }
        setShowFilterEmptyList(t) {
            l(this.filterListEmpty) && (this.filterListEmpty.active = t, b.instance.updateAlignments(this.filterListEmpty, !0, !1))
        }
        setShowEmptyList(t) {
            super.setShowEmptyList(t), l(this.listEmpty) && b.instance.updateAlignments(this.listEmpty, !0, !1)
        }
        setShowLoadingList(t) {
            super.setShowLoadingList(t), l(this.listLoading) && b.instance.updateAlignments(this.listLoading, !0, !1)
        }
        updateNoticeWidget() {
            l(this.listMyMTTEmpty) && b.instance.updateAlignments(this.listMyMTTEmpty, !0, !1), l(this.filterListEmpty) && b.instance.updateAlignments(this.filterListEmpty, !0, !1), l(this.listEmpty) && b.instance.updateAlignments(this.listEmpty, !0, !1), l(this.listLoading) && b.instance.updateAlignments(this.listLoading, !0, !1)
        }
        getGroupFilterPopup() {
            return this.groupFilterPopup || (this.groupFilterPopup = p(this.gamelistFilterPopup), this.groupFilterPopup.parent = b.instance.getParentScene(a, null).getComponentInChildren(h).node), this.groupFilterPopup
        }
        onFilterPopupSizeChanged() {
            this.updateListContainerSize()
        }
        onGroupFilterBtnClicked() {
            this.mvcViews.forEach((t => t.onGroupFilterClicked()))
        }
        onGroupFilterPopupBgClicked() {
            l(this.filterPopupParent) && (this.filterPopupParent.active = !1)
        }
        changeFilterToggleState(t) {
            l(this.groupFilterBtn, !0) && (this.groupFilterBtn.btnState = t ? g.pressed : g.normal)
        }
        onScrollEvent(t, e) {
            switch (e) {
                case C.SCROLL_BEGAN:
                    y.lobbyService.getMttListDisplayMode() != L.Full && t.getScrollOffset().y > 0 && y.lobbyService.switchMttListDisplayModeToFullList()
            }
        }
        updateListContainerSize() {
            l(this.listContainer) && (this.listContainer.setContentSize(this.listContainer.getContentSize().width, this.listContainer.parent.getContentSize().height), this.listContainer.setPosition(0, 0, 0), this.updateNoticeWidget(), this.updateScrollViewContentSize())
        }
        activeInformer() {
            if (cc_mtt.vv.ConsoleLog.log("MTTGameListComp activeInformer", l(this.informerParent), this.isActiveInformer), this.isActiveInformer = !0, l(this.informerParent) && this.node.activeInHierarchy && this.isActiveInformer && (!l(this.informerComp) || !this.informerComp.node.active)) {
                if (cc_mtt.vv.ConsoleLog.log("MTTGameListComp activeInformer show"), !l(this.informerComp)) {
                    let t = p(this.informerPrefab);
                    t.setParent(this.informerParent), this.scheduleOnce((() => b.instance.updateAlignments(t, !0))), this.informerComp = t.getComponent(F), this.informerComp.setCloseCallback(this.onInformerClose.bind(this))
                }
                const t = y.appConfig.isLandscapeLayout ? 24 : 0;
                this.informerComp.node.setPosition(0, t, 0), this.informerComp.show(), this.tweenInformer(!0)
            }
        }
        hideInformer() {
            this.isActiveInformer = !1, this.node.activeInHierarchy && l(this.informerComp) && this.tweenInformer(!1)
        }
        onInformerClose() {
            this.mvcViews.forEach((t => t.onInformerClosed())), this.hideInformer()
        }
        tweenInformer(t) {
            if (this.informerTween && this.informerTween.stop(), t) {
                const t = y.appConfig.isLandscapeLayout ? 24 : 0;
                this.informerTween = u(this.informerParent.getComponent(m)).to(this.INFORMER_TWEEN_DURATION, {
                    height: this.informerComp.node.getContentSize().height + t
                }).call((() => {
                    cc_mtt.vv.ConsoleLog.log("MTTGameListComp tweenInformer show end"), this.informerTween = null
                })).start()
            } else this.informerTween = u(this.informerParent.getComponent(m)).to(this.INFORMER_TWEEN_DURATION, {
                height: 0
            }).call((() => {
                cc_mtt.vv.ConsoleLog.log("MTTGameListComp tweenInformer hide end"), this.informerComp.hide(), this.informerTween = null
            })).start()
        }
        onEnable() {
            this.updateListContainerSize(), this.scheduleOnce((() => {
                this.isActiveInformer ? this.activeInformer() : this.hideInformer()
            }))
        }
        onDisable() {}
        getSubfilterPanel() {
            let t = super.getSubfilterPanel();
            if (l(t)) {
                let e = t.getComponent(P);
                l(e) && l(this.groupFilterBtn) && (this.groupFilterBtn.node.setParent(e.filterBtnLocation), this.groupFilterBtn.node.setPosition(c.ZERO), this.groupFilterBtn.node.setScale(c.ONE), this.groupFilterBtn.node.active = !0)
            }
            return t
        }
        playFilterAni(t, e = null) {
            if (!y.appConfig.isLandscapeLayout) return;
            (this._filterOpenAni || this._filterCloseAni) && this.stopFilterTween();
            const i = this.groupFilterPopup.getComponent(m).contentSize.height;
            !0 === t ? (this.groupFilterPopup.active = !0, this.filterContainer.getComponent(m).height = 0, this._filterOpenAni = u(this.filterContainer.getComponent(m)).to(.2, {
                height: i + 24
            }).call((() => {
                b.instance.updateAlignments(this.node), cc_mtt.vv.ConsoleLog.log("filter open anim end"), this._filterOpenAni = null, this.groupFilterPopup.getComponent(S).getSavedFilterOption(), this.groupFilterPopup.getComponent(S).onItemClicked(!0), e && e()
            })).start()) : this._filterCloseAni = u(this.filterContainer.getComponent(m)).to(.2, {
                height: 0
            }).call((() => {
                this.groupFilterPopup.active = !1, b.instance.updateAlignments(this.node), cc_mtt.vv.ConsoleLog.log("filter close anim end"), this._filterCloseAni = null;
                let t = this.groupFilterPopup.getComponent(S).createOption();
                this.groupFilterPopup.getComponent(S).saveFilterOption(t), this.groupFilterPopup.getComponent(S).onItemClicked(!0), e && e()
            })).start()
        }
        playExpanAnim(t, e = null) {
            (this._filterOpenAni || this._filterCloseAni) && this.stopFilterTween();
            const i = this.filterContainer.getContentSize().height + t;
            this._filterOpenAni = u(this.filterContainer.getComponent(m)).to(.2, {
                height: i < 0 ? 0 : i
            }).call((() => {
                b.instance.updateAlignments(this.node), this._filterOpenAni = null, e && e()
            })).start()
        }
        updateFilterCount(t) {
            var e;
            null == (e = this.groupFilterPopup) || e.getComponent(S).setShowMTTBtnCount(t)
        }
        updateFilterSize() {
            const t = this.groupFilterPopup.getComponent(m).height;
            this.filterContainer.getComponent(m).height = t
        }
        stopFilterTween() {
            this._filterOpenAni && (this._filterOpenAni.stop(), this._filterOpenAni = null), this._filterCloseAni && (this._filterCloseAni.stop(), this._filterCloseAni = null)
        }
        updateScrollViewContentSize() {
            this.listScrollItem.sv.content.getComponent(m).height < this.listScrollItem.sv.content.parent.getComponent(m).height && (this.listScrollItem.sv.content.getComponent(m).height = this.listScrollItem.sv.content.parent.getComponent(m).height, this.listScrollItem.updateDisplay())
        }
    }).prototype, "listScrollItem", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(R.prototype, "gamelistFilterPrefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(R.prototype, "gamelistFilterPopup", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(R.prototype, "filterContainer", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(R.prototype, "groupFilterBtn", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(R.prototype, "listContainer", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(R.prototype, "informerPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(R.prototype, "informerParent", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(R.prototype, "filterPopupParent", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(R.prototype, "listMyMTTEmpty", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(R.prototype, "filterListEmpty", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = R)) || D));
    n._RF.pop()
}
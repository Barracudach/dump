import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as o from "./ListView.js";
import * as a from "./RefreshTop.js";

function main() {
    var l, h, u, c, p, f;
    s._RF.push({}, "96467QLl+RKY6JfGrXzBFP4", "MVCListComp", void 0);
    const {
        ccclass: m,
        property: L
    } = n;
    i("default", (l = L(o), h = L(a), m((p = e((c = class extends r {
        constructor(...i) {
            super(...i), this.mvcViews = [], t(this, "mainListView", p, this), t(this, "refreshTop", f, this), this.isTopRefreshing = !1
        }
        onLoad() {
            this.setupMainListView(), this.setupRefreshTop()
        }
        setupMainListView() {
            var i, e;
            null == (i = this.mainListView) || i.bindScrollEventTarget(this), null == (e = this.mainListView) || e.init(this.bindCallFuncMainListView.bind(this))
        }
        setupRefreshTop() {
            var i;
            null == (i = this.refreshTop) || i.setRefreshListener((() => {
                this.isTopRefreshing || (this.isTopRefreshing = !0, this.mvcViews.forEach((i => null == i || null == i.onTopRefresh ? void 0 : i.onTopRefresh())))
            }))
        }
        bindCallFuncMainListView(i, e, t) {
            this.mvcViews.forEach((s => null == s || null == s.onUpdateItemDataWhenScrolling ? void 0 : s.onUpdateItemDataWhenScrolling(i, e, t)))
        }
        setDataForMainListView(i) {
            var e;
            this.isTopRefreshing = !1, null == (e = this.refreshTop) || e.hideRefresh(), this.setDataForTargetListView(this.mainListView, i)
        }
        setDataForTargetListView(i, e) {
            null != i && i.bindItemFunc && i.notifyDataSetChanged(e)
        }
        scrollToTop() {
            this.mainListView && (this.mainListView.node.active = !1, this.mainListView.node.active = !0)
        }
        scrollToItem(i) {
            this.mainListView && this.mainListView.scrollToItem(i)
        }
    }).prototype, "mainListView", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(c.prototype, "refreshTop", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u));
    s._RF.pop()
}
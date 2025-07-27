import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as m from "./ScrollViewReuse.js";
import * as b from "./FilterView.js";
import * as y from "./FiltersDataModel.js";

function main() {
    var w, D, S, A, F, M, T, V, v, H, L, I, C, P, R, _, E, z, U, B, K;
    n._RF.push({}, "33b7biWDjVPj4NGu3dAcuIg", "HandsHistory", void 0);
    const {
        ccclass: O,
        property: Q,
        executionOrder: G
    } = h;
    t("HandsHistory", (w = G(1), D = Q(r), S = Q(r), A = Q(r), F = Q(m), M = Q(a), T = Q(o), V = Q(o), v = Q(s), H = Q(l), O(L = w((C = e((I = class extends c {
        constructor(...t) {
            super(...t), i(this, "pageTitle", C, this), i(this, "selectedDate", P, this), i(this, "filterCounter", R, this), i(this, "accountHandScrollView", _, this), i(this, "noRecordAvailableIcon", E, this), i(this, "itemPrefab", z, this), i(this, "filterView", U, this), i(this, "filterViewDataKey", B, this), i(this, "loadingAnim", K, this), this.data = [], this.page = 0, this.limit = 20, this.canLoadMore = !1, this.loadingMore = !1, this.filterList = [], this.filterQuery = "", this.loadingAnimUITransform = null
        }
        onLoad() {
            this.loadingAnimUITransform = this.loadingAnim.getComponent(u), this.noRecordAvailableIcon.node.active = !0, this.registerPrefab()
        }
        onEnable() {
            p.MessageCenter.register(p.Enum.MessageCenterAction.FilterHandsHistory, this.applyFilter.bind(this), this.node), this.applyFilter(y.getInstance().getFilterListData(this.filterViewDataKey))
        }
        onDisable() {
            p.MessageCenter.unregister(p.Enum.MessageCenterAction.FilterHandsHistory, this.node)
        }
        start() {
            let t = p.config.getTimeWithTimeZone();
            this.selectedDate.string = p.config.getStringData("Today") + " " + p.config.getStringData("Month" + (t.getMonth() + 1)) + " " + t.getDate() + ", " + t.getFullYear()
        }
        onSVEventScrollToTop(t) {
            this.refreshFetchData(!1)
        }
        onSVEventScrollToBottom(t) {
            this.canLoadMore && (this.page++, this.loadingMore = !0, this.fetchDataFromRemote(!0))
        }
        registerPrefab() {
            this.accountHandScrollView.bindPrefab(this.itemPrefab, this.itemPrefab.name, []), this.accountHandScrollView.generateItemPool(), this.accountHandScrollView.bindScrollEventTarget(this)
        }
        applyFilter(t) {
            this.filterList = t.filterList, this.filterQuery = "";
            let e = 0;
            for (let t = 0; t < this.filterList.length; t++) {
                if (this.filterList[t].isSelected && e++, this.filterList[t].hasSubFilters) {
                    let i = this.filterList[t].subfilter.filterList;
                    for (let t = 0; t < i.length; t++) i[t].isSelected && e++
                }
                this.filterQuery += y.getInstance().getQueryString(this.filterList[t])
            }
            e > 0 ? (this.filterCounter.node.parent.active = !0, this.filterCounter.string = JSON.stringify(e)) : this.filterCounter.node.parent.active = !1, this.refreshFetchData(!0)
        }
        refreshFetchData(t) {
            this.data = [], this.page = 0, this.canLoadMore = !1, this.loadingMore = !1, this.fetchDataFromRemote(t)
        }
        fetchDataFromRemote(t) {
            t && this.showLoading();
            let e = p.config.getStringData("WEB_API_USERP_PBI_GAME_HISTORY", !0);
            e += "?start=" + this.page * this.limit + "&end=" + (this.page + 1) * this.limit + this.filterQuery, p.http.sendRequestV2(e, {}, this.onFetchDataSuccess.bind(this), this.onFetchDataError.bind(this), p.http.HttpRequestType.GET)
        }
        onFetchDataSuccess(t) {
            this.hideLoading(), "items" in t && t.items.length > 0 && this.data.push(...t.items), this.accountHandScrollView.reloadView(this.data, !this.loadingMore), this.noRecordAvailableIcon.node.active = this.data.length <= 0, this.canLoadMore = t.items.length >= this.limit, this.loadingMore = !1
        }
        onFetchDataError(t) {
            this.hideLoading(), p.popUp.showFirstServerError(t)
        }
        showLoading() {
            this.loadingAnim.active = !0;
            let t = (1 - this.loadingAnimUITransform.anchorY) * this.loadingAnimUITransform.height,
                e = 0,
                i = this.accountHandScrollView.Items,
                n = 0;
            for (let t = 0, r = i.length; t < r; t++)
                if (i[t].active) {
                    let r = i[t].getComponent(u);
                    n = i[t].position.y - r.anchorY * r.height, n < e && (e = n)
                } this.loadingAnim.setPosition(0, e - t);
            let r = this.accountHandScrollView.scrollView.content.getComponent(u);
            r.height < Math.abs(e - this.loadingAnimUITransform.height) && (r.height += this.loadingAnimUITransform.height)
        }
        hideLoading() {
            this.loadingAnim.active = !1
        }
        onBtnBack() {
            p.AudioMgr.playButtonSound("back_button.mp3"), p.action.showAction(this.node, p.action.eMoveActionDir.EMAD_TO_RIGHT, p.action.eMoveActionType.EMAT_FADE_OUT, p.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                p.MessageCenter.send("show_mail_entrance", !0)
            }))
        }
        onBtnFilter() {
            let t = g(this.filterView),
                e = t.getComponent(b);
            e.filterViewDataKey = this.filterViewDataKey, e.pageTitle.string = this.pageTitle.string, t.setPosition(d(0, 0, 0)), f.getScene().addChild(t)
        }
    }).prototype, "pageTitle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(I.prototype, "selectedDate", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(I.prototype, "filterCounter", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(I.prototype, "accountHandScrollView", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(I.prototype, "noRecordAvailableIcon", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(I.prototype, "itemPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(I.prototype, "filterView", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(I.prototype, "filterViewDataKey", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "fDataKeyAccountHands"
        }
    }), K = e(I.prototype, "loadingAnim", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = I)) || L) || L));
    n._RF.pop()
}
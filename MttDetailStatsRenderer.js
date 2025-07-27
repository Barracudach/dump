import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemButtonBase.js";
import * as u from "./cv.js";
import * as d from "./NestableScrollView_Outer_ts.js";
import * as b from "./NodePage.js";
import * as g from "./LobbyHelper.js";
import * as p from "./LobbyTools.js";
import * as w from "./MttDetailStatsPlayer.js";
import * as y from "./MttDetailStatsTable.js";
import * as P from "./Enum.js";

function main() {
    var f, C, B, k, V, L, v, S, _, m, T, D, E, H;
    a._RF.push({}, "a2f20hKblZEPbcE9iLCs4hS", "MttDetailStatsRenderer", void 0);
    const {
        ccclass: N,
        property: R
    } = s;
    e("default", (f = R(n), C = R(o), B = R(d), k = R(w), V = R(y), L = R(c), N((_ = t((S = class extends l {
        constructor(...e) {
            super(...e), this.mvcView = void 0, i(this, "topPanel", _, this), i(this, "tabLayout", m, this), i(this, "bodyPageView", T, this), i(this, "playerView", D, this), i(this, "tableView", E, this), i(this, "tabs", H, this), this._clickBackBtnHandler = void 0, this.onHideCallBack = null, this.onPageChangedCallBack = null
        }
        onClickBackBtn() {
            var e;
            p.playSoundBack(), null == (e = this._clickBackBtnHandler) || e.call(this)
        }
        registerHandlers(e) {
            this._clickBackBtnHandler = e
        }
        registerPageHideCallback(e) {
            this.onHideCallBack = e
        }
        registerPageChangedCallback(e) {
            this.onPageChangedCallBack = e
        }
        onLoad() {
            u.appConfig.isWebApp && (this.topPanel.active = !1)
        }
        onEnable() {
            this.tabLayout._resized(), this.tabLayout._doLayout(), this.showTab(0), this.showPage(0, !0)
        }
        start() {
            this.bodyPageView.node.on(r.EventType.PAGE_TURNING, (() => {
                this.showPage(this.bodyPageView.getCurrentPageIndex())
            })), this.bodyPageView.node.on(r.EventType.SCROLL_ENDED, (() => {
                this.showTab(this.bodyPageView.getCurrentPageIndex())
            }))
        }
        renderPlayerView(e, t, i, a) {
            this.playerView.render(e, t, i, a)
        }
        renderTableView(e, t) {
            this.tableView.render(e, t)
        }
        show() {
            u.appConfig.isLandscapeLayout ? 0 == this.node.active && (this.node.active = !0) : g.showPanelFromRight(this.node, !0, u.appConfig.isLandscapeLayout, this.showBackBtn.bind(this, !0))
        }
        hide() {
            var e;
            u.appConfig.isLandscapeLayout ? this.node.active = !1 : g.showPanelFromRight(this.node, !1, !1, this.showBackBtn.bind(this, !1), !1), null == (e = this.onHideCallBack) || e.call(this)
        }
        showBackBtn(e) {
            u.appConfig.isWebApp || this.scheduleOnce((() => {
                this.topPanel.active = e, u.resMgr.adaptWidget(this.node, !0)
            }), 0)
        }
        showTab(e) {
            for (let t = 0; t < this.tabs.length; t++) {
                const i = this.tabs[t];
                t == e ? (i.btnState = h.pressed, i.isChecked = !0) : (i.btnState = h.normal, i.isChecked = !1)
            }
        }
        showPage(e, t = !1) {
            this.bodyPageView.getCurrentPageIndex() !== e && this.bodyPageView.scrollToPage(e, t ? 0 : .3), b.updateContentWidget(this.bodyPageView.content, e)
        }
        onClickTab(e, t) {
            p.playSoundTab();
            const i = Number.parseInt(t);
            this.showTab(i), this.showPage(i)
        }
        onPageChanged(e, t) {
            var i;
            switch (t) {
                case P.SCROLL_ENDED:
                    null == (i = this.onPageChangedCallBack) || i.call(this, this.bodyPageView.getCurrentPageIndex())
            }
        }
    }).prototype, "topPanel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(S.prototype, "tabLayout", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(S.prototype, "bodyPageView", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(S.prototype, "playerView", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(S.prototype, "tableView", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(S.prototype, "tabs", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = S)) || v));
    a._RF.pop()
}
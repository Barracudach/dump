import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";

function main() {
    var u, h, l, p, d;
    a._RF.push({}, "833abdMB6ZK+qfSqR7HTJv0", "BannerPageView", void 0);
    const {
        ccclass: P,
        property: f
    } = r;
    e("default", (u = f(i), P((p = t((l = class extends s {
        constructor(...e) {
            super(...e), n(this, "pageView", p, this), n(this, "autoChangePageInterval", d, this)
        }
        onLoad() {
            this.scheduleAutoChangePage(), c.MessageCenter.register(c.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.refreshPageView.bind(this), this, !1)
        }
        start() {
            c.appConfig.isLandscapeLayout && c.resMgr.adaptWidget(this.node, !0, !0), this.checkAndTrackingCurPage()
        }
        scheduleAutoChangePage() {
            this.schedule((() => {
                if (!this.pageView.isAutoScrolling() && !this.pageView.isScrolling()) {
                    const e = this.pageView.getPages().length;
                    let t = this.pageView.getCurrentPageIndex() + 1;
                    t = t >= e ? 0 : t, this.pageView.scrollToPage(t, .5)
                }
            }), this.autoChangePageInterval, g.REPEAT_FOREVER, 0)
        }
        onPageChanged() {
            this.checkAndTrackingCurPage()
        }
        checkAndTrackingCurPage() {
            const e = this.pageView.getPages()[this.pageView.getCurrentPageIndex()];
            o(e, !0) && e.emit("banner-shown")
        }
        refreshPageView() {
            c.MessageCenter.send("RefreshPageBannerView")
        }
        onDestroy() {
            c.MessageCenter.unregister(c.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.node)
        }
    }).prototype, "pageView", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(l.prototype, "autoChangePageInterval", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 10
        }
    }), h = l)) || h));
    a._RF.pop()
}
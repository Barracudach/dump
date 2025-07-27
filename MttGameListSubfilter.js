import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./SubfilterComp.js";
import * as u from "./LobbyTools.js";
import * as a from "./cv.js";
import * as S from "./SubfilterController.js";
import * as h from "./SubfilterController.js";
import * as f from "./MTTSubfilterController.js";
import * as g from "./LobbyHelper.js";

function main() {
    var p, b, d, y, C, T, B, w, v;
    i._RF.push({}, "f85fdOvhDFFUYvXsCAGqgto", "MttGameListSubfilter", void 0);
    const {
        ccclass: O,
        property: E
    } = n;
    t("MttGameListSubfilter", (p = O("MttGameListSubfilter"), b = E(o), d = E(r), y = E(o), p((B = e((T = class extends c {
        constructor(...t) {
            super(...t), l(this, "filterBtnLocation", B, this), l(this, "rightScrollView", w, this), l(this, "fadeOutOverlay", v, this), this.scrollBeganX = Number.MAX_SAFE_INTEGER, this.scrollThreshold = 20, this.cancelTouch = !1
        }
        onLoad() {
            super.onLoad(), s(this.rightScrollView) && !a.appConfig.isLandscapeLayout && (this.rightScrollView.node.on(r.EventType.SCROLL_BEGAN, this.onScrollViewBegan, this), this.rightScrollView.node.on(r.EventType.SCROLLING, this.updateFadeOutOverlay, this))
        }
        getFilterBtn() {
            return this.filterButton
        }
        updateFadeOutOverlay() {
            s(this.fadeOutOverlay) && (Math.abs(this.rightScrollView.getScrollOffset().x) >= this.rightScrollView.getMaxScrollOffset().x - 1 ? this.fadeOutOverlay.active = !1 : this.fadeOutOverlay.active = !0), !this.cancelTouch && this.isScroll(this.rightScrollView.getScrollOffset().x) && (this.cancelTouch = !0, this.btnsSubFilter.forEach(((t, e) => {
                t.emit(o.EventType.TOUCH_CANCEL)
            })))
        }
        onFilterToggleClick() {
            var t;
            u.playSoundClick(), null == (t = this.mvcView) || null == t.onFilterButtonClick || t.onFilterButtonClick()
        }
        setShowCanUseMyTicketButton(t) {
            super.setShowCanUseMyTicketButton(!1)
        }
        setShowMyGameButton(t) {
            super.setShowMyGameButton(!1)
        }
        setShowSwitchCurrencyButton(t) {
            super.setShowSwitchCurrencyButton(t)
        }
        setSelectedSubFilterButton(t) {
            let e = t.split(f);
            this.btnsSubFilter.forEach(((t, l) => {
                l.toUpperCase() == h || l.toUpperCase() == S || g.setDesignBtnState(t, e.findIndex((t => t == l)) > -1)
            }))
        }
        isScroll(t) {
            return this.scrollBeganX != Number.MAX_SAFE_INTEGER && Math.abs(this.scrollBeganX - t) > this.scrollThreshold
        }
        onSubFilterClick(t) {
            cc_mtt.vv.ConsoleLog.log("onScrollViewBegan onSubFilterClick scrolled", this.scrollBeganX, this.rightScrollView.getScrollOffset().x, this.cancelTouch), super.onSubFilterClick(t), this.scrollBeganX = Number.MAX_SAFE_INTEGER, this.cancelTouch = !1
        }
        onScrollViewBegan(t) {
            cc_mtt.vv.ConsoleLog.log("onScrollViewBegan", t.getScrollOffset()), this.scrollBeganX = t.getScrollOffset().x, this.cancelTouch = !1
        }
    }).prototype, "filterBtnLocation", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(T.prototype, "rightScrollView", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(T.prototype, "fadeOutOverlay", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = T)) || C));
    i._RF.pop()
}
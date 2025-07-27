import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./NodeTools.js";
import * as m from "./NestableScrollView_Inner_ts.js";

function main() {
    var S, p, f, I, P, b, v, T, w, x, M, V, C, D, N, y;
    n._RF.push({}, "1e97eQxbAtNf7uXOzGUC2+Y", "NestableScrollView_Outer_ts", void 0);
    const {
        ccclass: z,
        property: E
    } = l;
    t("NestableScrollView_Outer_ts", (S = E(o), p = E({
        type: s,
        slide: !0,
        range: [0, 1, .01]
    }), f = E(s), I = E(s), P = E(m), b = E(o), v = E(o), z((x = e((w = class extends r {
        constructor(...t) {
            super(...t), i(this, "autoDisablePages", x, this), this.m_PlanDir = null, this.m_ScrollingInnerSv = null, this.m_isMoving = !1, this.m_curPageIdx = 0, this.m_pages = [], i(this, "scrollThreshold", M, this), i(this, "autoPageTurningThreshold", V, this), i(this, "pageTurningSpeed", C, this), i(this, "m_InnerScrollViews", D, this), i(this, "enableFreezeSolver", N, this), i(this, "disableNestableScroll", y, this), this._limitScrollToPageIdxHorizontal = -1, this._limitTouchMoveContentX = 0, this._touchBeganPosition = void 0, this._touchEndPosition = void 0, this._totalIdleSecond = 0, this._prevFramePosition = h(a.ZERO)
        }
        set limitScrollToPageIdxHorizontal(t) {
            this._limitScrollToPageIdxHorizontal = t, this._limitTouchMoveContentX = d.getNodeAnchorX(this.content) * d.getNodeWidth(this.content) - d.getNodeWidth(this.content.parent) / 2, this.content.children.forEach(((e, i) => {
                i < t && (this._limitTouchMoveContentX -= d.getNodeWidth(e))
            }))
        }
        get limitScrollToPageIdxHorizontal() {
            return this._limitScrollToPageIdxHorizontal
        }
        onLoad() {
            this.m_PlanDir = null, this._initPages(), this.m_InnerScrollViews.forEach((t => {
                t.setOuterScrollView(this)
            }))
        }
        _initPages() {
            if (!this.content) return;
            let t = this.content.children;
            for (let e = 0; e < t.length; ++e) {
                let i = t[e];
                this.m_pages.indexOf(i) >= 0 || this.m_pages.push(i)
            }
            if (this.m_InnerScrollViews.length < 1)
                for (let e = 0; e < t.length; ++e) t[e].getComponentsInChildren(m).forEach((t => this.m_InnerScrollViews.push(t)))
        }
        _isHisChild(t, e) {
            return t == e || null != t.parent && (t.parent == e || this._isHisChild(t.parent, e))
        }
        _findScrollingInnerSv(t) {
            for (let e = 0; e < this.m_InnerScrollViews.length; e++) {
                if (this._isHisChild(t, this.m_InnerScrollViews[e].node)) return this.m_InnerScrollViews[e]
            }
            return null
        }
        isDifferentBetweenSettingAndPlan(t) {
            return 0 != this.m_PlanDir && ((1 != this.m_PlanDir || !t.horizontal) && (-1 != this.m_PlanDir || !t.vertical))
        }
        _hasNestedViewGroup(t, e) {
            if (t.eventPhase === Event.CAPTURING_PHASE) {
                if (this.disableNestableScroll && e)
                    for (let i = 0; i < e.length; ++i) {
                        let n = e[i];
                        if (this.node === n) return !!t.target.getComponent(c);
                        if (n.getComponent(c)) return !0
                    }
                return !1
            }
        }
        enablePageWhenScroll(t) {
            let e = this.m_curPageIdx;
            this.horizontal && (e = t.x > 0 ? Math.max(0, this.m_curPageIdx - 1) : Math.min(this.content.children.length - 1, this.m_curPageIdx + 1)), this.vertical && (e = t.y > 0 ? Math.max(0, this.m_curPageIdx - 1) : Math.min(this.content.children.length - 1, this.m_curPageIdx + 1));
            for (let t = 0; t < this.m_InnerScrollViews.length; t++) this.m_InnerScrollViews[t].node.children.forEach((i => {
                t == e && (i.active = !0)
            }))
        }
        disablePagesWhenIdle() {
            for (let t = 0; t < this.m_InnerScrollViews.length; t++) this.m_InnerScrollViews[t].node.children.forEach((e => {
                e.active = this.m_curPageIdx == t
            }))
        }
        getCurrentPageIndex() {
            return this.m_curPageIdx
        }
        _moveOffsetValue(t) {
            var e = new u(0, 0);
            return e.x = t * this.view.width, e
        }
        scrollToPage(t, e) {
            t < 0 || t >= this.m_pages.length || (e = void 0 !== e ? e : .3, this.m_curPageIdx = t, this.node.emit("page-turning", this), this.scrollToOffset(this._moveOffsetValue(t), e, !0), this.autoDisablePages && this.disablePagesWhenIdle())
        }
        _getDragDirection(t) {
            return 0 === t.x ? 0 : t.x > 0 ? 1 : -1
        }
        _isScrollable(t, e, i) {
            return Math.abs(t.x) >= this.view.width * this.scrollThreshold
        }
        _isQuicklyScrollable(t) {
            return Math.abs(t.x) > this.autoPageTurningThreshold
        }
        _autoScrollToPage() {
            var t = this._startBounceBackIfNeeded(),
                e = this._touchBeganPosition.subtract(this._touchEndPosition);
            if (t) {
                var i = this._getDragDirection(e);
                if (0 === i) return;
                this.m_curPageIdx = i > 0 ? this.m_pages.length - 1 : 0
            } else {
                var n = this.m_curPageIdx,
                    o = n + this._getDragDirection(e),
                    s = this.pageTurningSpeed * Math.abs(n - o);
                if (o >= 0 && o < this.m_pages.length && (!this.horizontal || this._limitScrollToPageIdxHorizontal < 0 || o <= this._limitScrollToPageIdxHorizontal)) {
                    if (this._isScrollable(e, n, o)) return void this.scrollToPage(o, s);
                    {
                        let t = this._calculateTouchMoveVelocity();
                        if (this._isQuicklyScrollable(t)) return void this.scrollToPage(o, s)
                    }
                }
                this.scrollToPage(n, s)
            }
        }
        _handleReleaseLogic(t) {
            this.m_isMoving && this._autoScrollToPage(), this._scrolling && (this._scrolling = !1, this._autoScrolling || this._dispatchEvent("scroll-ended"))
        }
        update(t) {
            if (super.update(t), this.enableFreezeSolver) {
                const e = this.content.position;
                e.equals(this._prevFramePosition) ? this._totalIdleSecond += t : this._totalIdleSecond = 0;
                const i = .1,
                    n = 1;
                if (this._totalIdleSecond <= n && this._totalIdleSecond >= i && !this.isScrolling()) {
                    let t = d.getNodeWidth(this.content.parent) / 2;
                    this.content.children.forEach(((e, i) => {
                        i < this.getCurrentPageIndex() && (t += d.getNodeWidth(e))
                    })), t *= -1, t && Math.abs(t - e.x) > 5 && (this._totalIdleSecond += n, this.scrollToPage(this.getCurrentPageIndex(), 0))
                }
                this._prevFramePosition = e
            }
        }
        _onMouseWheel(t, e) {}
        _onTouchBegan(t, e) {
            this.enabledInHierarchy && this._content && (this._hasNestedViewGroup(t, e) || (this.m_PlanDir = this.isAutoScrolling() ? this.m_PlanDir || 1 : null, this.m_ScrollingInnerSv = this.isAutoScrolling() ? this.m_ScrollingInnerSv || this.m_InnerScrollViews[0] : null, this._touchBeganPosition = t.touch.getUILocation(), this._handlePressLogic(), this._touchMoved = !1, this._stopPropagationIfTargetIsMe(t)))
        }
        _onTouchMoved(t, e) {
            if (!this.enabledInHierarchy || !this._content) return;
            if (this._hasNestedViewGroup(t, e)) return;
            const i = t.touch,
                n = new u,
                o = new u,
                s = i.getUILocation(n);
            if (s.subtract(i.getUIStartLocation(o)), null == this.m_PlanDir && s.length() > 7)
                if (this.m_ScrollingInnerSv = this._findScrollingInnerSv(t.target), null != this.m_ScrollingInnerSv) {
                    this.m_ScrollingInnerSv.content.getContentSize(), this.m_ScrollingInnerSv.node.getContentSize();
                    this.m_PlanDir = Math.abs(s.x) > Math.abs(s.y) ? 1 : -1
                } else this.m_PlanDir = 0;
            const l = this._limitScrollToPageIdxHorizontal >= 0 && this._limitTouchMoveContentX > this.content.position.x + i.getDelta().x;
            if (this.isDifferentBetweenSettingAndPlan(this) || l ? (l && this.content.setPosition(this._limitTouchMoveContentX, this.content.position.y), this.m_isMoving = !1) : (this.m_isMoving = !0, this._handleMoveLogic(i)), this.autoDisablePages && s.length() > 7 && this.enablePageWhenScroll(s), this.cancelInnerEvents && null == this.m_ScrollingInnerSv) {
                if (s.length() > 7 && !this._touchMoved && t.target !== this.node) {
                    const e = new g(t.getTouches(), t.bubbles, _.EventType.TOUCH_CANCEL);
                    e.touch = t.touch, e.simulate = !0, t.target.dispatchEvent(e), this._touchMoved = !0
                }
                this._stopPropagationIfTargetIsMe(t)
            }
        }
        _onTouchEnded(t, e) {
            if (!this.enabledInHierarchy || !this._content || !t) return;
            if (this._hasNestedViewGroup(t, e)) return;
            this._touchEndPosition = t.touch.getUILocation(), this._dispatchEvent(r.EventType.TOUCH_UP);
            const i = t.touch;
            this._handleReleaseLogic(i), this._touchMoved ? t.propagationStopped = !0 : this._stopPropagationIfTargetIsMe(t)
        }
        _onTouchCancelled(t, e) {
            if (this.enabledInHierarchy && this._content && !this._hasNestedViewGroup(t, e)) {
                if (this._touchEndPosition = t.touch.getUILocation(), t && !t.simulate) {
                    const e = t.touch;
                    this._handleReleaseLogic(e)
                }
                this._stopPropagationIfTargetIsMe(t)
            }
        }
    }).prototype, "autoDisablePages", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), M = e(w.prototype, "scrollThreshold", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .5
        }
    }), V = e(w.prototype, "autoPageTurningThreshold", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 100
        }
    }), C = e(w.prototype, "pageTurningSpeed", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .3
        }
    }), D = e(w.prototype, "m_InnerScrollViews", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), N = e(w.prototype, "enableFreezeSolver", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), y = e(w.prototype, "disableNestableScroll", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), T = w)) || T));
    n._RF.pop()
}
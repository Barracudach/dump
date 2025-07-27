import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as V from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as T from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as O from "./HashMap.js";
import * as b from "./NodeTools.js";

function main() {
    var I, m, L, R, B, M, P, x, A, N, H, z, U, k, Z, D, G;
    n._RF.push({}, "cf76cst4Z5LloorjdFHWA+Q", "TableView", void 0);
    let F = t("TableViewScrollToDir", function(t) {
        return t[t.TOP = 0] = "TOP", t[t.BOTTOM = 1] = "BOTTOM", t[t.LEFT = 2] = "LEFT", t[t.RIGHT = 3] = "RIGHT", t[t.TOP_LEFT = 4] = "TOP_LEFT", t[t.TOP_RIGHT = 5] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 6] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 7] = "BOTTOM_RIGHT", t
    }({}));
    var W = function(t) {
        return t[t.HORIZONTAL = 0] = "HORIZONTAL", t[t.VERTICAL = 1] = "VERTICAL", t
    }(W || {});
    class X {
        constructor() {
            this.uuid = 0, this.type = 0, this.component = null, this.data = null, this.boundStart = 0, this.boundEnded = 0, this.boundPosition = r(c.ZERO)
        }
    }
    class Y {
        constructor() {
            this.type = 0, this.node = null
        }
    }
    const {
        ccclass: K,
        property: j
    } = s;
    t("TableView", (I = j({
        type: l,
        tooltip: '绑定的滚动视图(最好绑定在对应的"scrollview"节点上,每个"scrollview"互不干扰)'
    }), m = j({
        tooltip: "每项之间的间距(内部有智能检测, 可选填)"
    }), L = j({
        tooltip: '是否自动计算最佳间距:        若滚动视图中只存在一种子项类型建议开启(手动设置的"spacing"将无效);        若滚动视图中存在多种类型子项建议关闭(采取手动设置"spacing"效果更佳)'
    }), R = j({
        tooltip: "设置子项缩放大小"
    }), B = j({
        tooltip: "起始填充距离"
    }), M = j({
        tooltip: "结束填充距离"
    }), P = j({
        type: [i],
        tooltip: "子项预制件类型数组(支持多类型子项排列)"
    }), K(((G = class t extends h {
        constructor(...t) {
            super(...t), o(this, "scrollView", N, this), this.scrollViewNodeUITransform = null, o(this, "spacing", H, this), o(this, "autoSpacing", z, this), o(this, "_cellScale", U, this), o(this, "paddingStart", k, this), o(this, "paddingEnd", Z, this), this.align = W.VERTICAL, o(this, "prefabTypes", D, this), this._content = null, this._contentUITransform = null, this._shieldLayer = null, this._calibrateOnce = !1, this._pregenerateInstOnce = !1, this._contentSrcPos = r(c.ZERO), this._contentSrcSize = new a(a.ZERO), this._contentBoundStartPos = r(c.ZERO), this._scrollEventTarget = null, this._cellsInfo = [], this._showCellsMap = new O, this._cellsPoolMap = new O
        }
        get cellScale() {
            return this._cellScale
        }
        set cellScale(t) {
            t !== this._cellScale && (this._cellScale = t, this._reseteKernelBuffer())
        }
        onLoad() {
            this.scrollView && (this._content = this.scrollView.content, this.scrollViewNodeUITransform = this.scrollView.node.getComponent(_), this._contentUITransform = this._content.getComponent(_), this.scrollView.vertical ? this.align = W.VERTICAL : this.scrollView.horizontal && (this.align = W.HORIZONTAL))
        }
        start() {}
        onEnable() {
            this._registerTableViewEvent()
        }
        onDisable() {
            this._unregisterTableViewEvent();
            let t = this.getScrollOffset(),
                e = this.getMaxScrollOffset();
            switch (this.align) {
                case W.HORIZONTAL:
                    t.x > 0 ? this.scrollView.scrollToLeft() : t.x < -e.x && this.scrollView.scrollToRight();
                    break;
                case W.VERTICAL:
                    t.y > e.y ? this.scrollView.scrollToBottom() : t.y < 0 && this.scrollView.scrollToTop()
            }
            this.scrollView.stopAutoScroll()
        }
        onDestroy() {
            this._clearShowList(), this._clearNodePool(), this._cellsInfo.splice(0, this._cellsInfo.length)
        }
        _registerTableViewEvent() {
            this.scrollView.node.on(l.EventType.SCROLLING, this._onSVEventScrolling, this), this.scrollView.node.on(l.EventType.SCROLL_BEGAN, this._onSVEventScrollingBegan, this), this.scrollView.node.on(l.EventType.SCROLL_ENDED, this._onSVEventScrollEnded, this), this.scrollView.node.on(l.EventType.TOUCH_UP, this._onSVEventScrollTouchUp, this), this.scrollView.node.on(l.EventType.SCROLL_ENG_WITH_THRESHOLD, this._onSVEventScrollEndedWithThreshold, this), this.scrollView.vertical && (this.scrollView.node.on(l.EventType.SCROLL_TO_TOP, this._onSVEventScrollToTop, this), this.scrollView.node.on(l.EventType.SCROLL_TO_BOTTOM, this._onSVEventScrollToBottom, this), this.scrollView.node.on(l.EventType.BOUNCE_TOP, this._onSVEventBounceTop, this), this.scrollView.node.on(l.EventType.BOUNCE_BOTTOM, this._onSVEventBounceBottom, this)), this.scrollView.horizontal && (this.scrollView.node.on(l.EventType.SCROLL_TO_LEFT, this._onSVEventScrollToLeft, this), this.scrollView.node.on(l.EventType.SCROLL_TO_RIGHT, this._onSVEventScrollToRight, this), this.scrollView.node.on(l.EventType.BOUNCE_LEFT, this._onSVEventBounceLeft, this), this.scrollView.node.on(l.EventType.BOUNCE_RIGHT, this._onSVEventBounceRight, this))
        }
        _unregisterTableViewEvent() {
            this.scrollView.node.off(l.EventType.SCROLLING, this._onSVEventScrolling, this), this.scrollView.node.off(l.EventType.SCROLL_BEGAN, this._onSVEventScrollingBegan, this), this.scrollView.node.off(l.EventType.SCROLL_ENDED, this._onSVEventScrollEnded, this), this.scrollView.node.off(l.EventType.TOUCH_UP, this._onSVEventScrollTouchUp, this), this.scrollView.node.off(l.EventType.SCROLL_ENG_WITH_THRESHOLD, this._onSVEventScrollEndedWithThreshold, this), this.scrollView.node.off(l.EventType.SCROLL_TO_TOP, this._onSVEventScrollToTop, this), this.scrollView.node.off(l.EventType.SCROLL_TO_BOTTOM, this._onSVEventScrollToBottom, this), this.scrollView.node.off(l.EventType.SCROLL_TO_LEFT, this._onSVEventScrollToLeft, this), this.scrollView.node.off(l.EventType.SCROLL_TO_RIGHT, this._onSVEventScrollToRight, this), this.scrollView.node.off(l.EventType.BOUNCE_TOP, this._onSVEventBounceTop, this), this.scrollView.node.off(l.EventType.BOUNCE_BOTTOM, this._onSVEventBounceBottom, this), this.scrollView.node.off(l.EventType.BOUNCE_LEFT, this._onSVEventBounceLeft, this), this.scrollView.node.off(l.EventType.BOUNCE_RIGHT, this._onSVEventBounceRight, this)
        }
        _onSVEventScrolling(t) {
            this._updateView(), this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrolling && this._scrollEventTarget.onSVEventScrolling(t, this)
        }
        _onSVEventScrollingBegan(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollingBegan && this._scrollEventTarget.onSVEventScrollingBegan(t, this)
        }
        _onSVEventScrollEnded(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollEnded && this._scrollEventTarget.onSVEventScrollEnded(t, this)
        }
        _onSVEventScrollEndedWithThreshold(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollEndedWithThreshold && this._scrollEventTarget.onSVEventScrollEndedWithThreshold(t, this)
        }
        _onSVEventScrollTouchUp(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollTouchUp && this._scrollEventTarget.onSVEventScrollTouchUp(t, this)
        }
        _onSVEventScrollToTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToTop && this._scrollEventTarget.onSVEventScrollToTop(t, this)
        }
        _onSVEventScrollToBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToBottom(t, this)
        }
        _onSVEventScrollToLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToLeft && this._scrollEventTarget.onSVEventScrollToLeft(t, this)
        }
        _onSVEventScrollToRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToRight && this._scrollEventTarget.onSVEventScrollToRight(t, this)
        }
        _onSVEventBounceTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceTop && this._scrollEventTarget.onSVEventBounceTop(t, this)
        }
        _onSVEventBounceBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceBottom && this._scrollEventTarget.onSVEventBounceBottom(t, this)
        }
        _onSVEventBounceLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceLeft && this._scrollEventTarget.onSVEventBounceLeft(t, this)
        }
        _onSVEventBounceRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceRight && this._scrollEventTarget.onSVEventBounceRight(t, this)
        }
        _adaptWidget(t, e = !1) {
            if (!t) return;
            let o = t.getComponent(g);
            if (o && p(o, !0) && (o.enabled = !0, o.updateAlignment(), o.enabled = !1), e)
                for (let o = 0; o < t.children.length; ++o) this._adaptWidget(t.children[o], e)
        }
        _setTouchEventEnable(t) {
            if (!this._shieldLayer) {
                this._shieldLayer = new d;
                let t = new f(.5, .5),
                    e = T.getScene().getComponentInChildren(S).node;
                e.addChild(this._shieldLayer), this._shieldLayer.setSiblingIndex(e.children.length + 1), this._shieldLayer.getComponent(_).setAnchorPoint(t), this._shieldLayer.getComponent(_).setContentSize(u.getVisibleSize()), this._shieldLayer.setPosition(u.getVisibleSize().width * t.x, u.getVisibleSize().height * t.y)
            }
            let e = this._shieldLayer.getComponent(E);
            e || (e = this._shieldLayer.addComponent(E)), this._shieldLayer.active = !t, e.enabled = !t
        }
        _calibrateContent() {
            if (this.scrollView instanceof l) {
                let t = this._content.getComponent(g);
                if (t) switch (this.align) {
                    case W.HORIZONTAL:
                        t.isAlignLeft = !1, t.isAlignRight = !1, t.isAlignHorizontalCenter = !1;
                        break;
                    case W.VERTICAL:
                        t.isAlignTop = !1, t.isAlignBottom = !1, t.isAlignVerticalCenter = !1
                }
                let e = this.scrollView.node.getComponent(_).width * (this._content.getComponent(_).anchorX - this.scrollView.node.getComponent(_).anchorX),
                    o = this.scrollView.node.getComponent(_).height * (this._content.getComponent(_).anchorY - this.scrollView.node.getComponent(_).anchorY);
                this._content.getComponent(_).setContentSize(this.scrollView.node.getComponent(_).contentSize), this._content.setPosition(e, o), this._contentSrcPos.x = this._content.position.x, this._contentSrcPos.y = this._content.position.y, this._contentSrcSize.width = this._content.getComponent(_).width, this._contentSrcSize.height = this._content.getComponent(_).height
            } else console.error(`${t.g_class_name} - Error : this._conten.parent property is not ScrollView Instance!`)
        }
        _calculteAutoSpacing() {
            let t = 0,
                e = 0,
                o = 0,
                n = !1,
                l = null;
            for (let i = 0; i < this._cellsInfo.length; ++i) {
                let s = this._getPrefabByType(this._cellsInfo[i].type);
                if (!s) continue;
                l || (l = s);
                let h = t + s.data.width * s.data.scaleX * this.cellScale,
                    r = e + s.data.height * s.data.scaleY * this.cellScale;
                switch (this.align) {
                    case W.HORIZONTAL:
                        h > this.scrollView.node.getComponent(_).width && (n = !0);
                        break;
                    case W.VERTICAL:
                        r > this.scrollView.node.getComponent(_).height && (n = !0)
                }
                if (n) break;
                t = h, e = r, ++o
            }
            let i = 0,
                s = 0,
                h = 0,
                r = Math.max(1, o - 1),
                c = this.paddingStart + this.paddingEnd,
                g = new a(this.scrollView.node.getComponent(_).width - c, this.scrollView.node.getComponent(_).height - c);
            switch (this.align) {
                case W.HORIZONTAL:
                    if (l)
                        if (n) h = (this.scrollView.node.getComponent(_).width - t - c) / r;
                        else {
                            let t = l.data.width * l.data.scaleX * this.cellScale;
                            0 !== t && (r = Math.floor(g.width / t), r > 1 && (h = (g.width - r * t) / (r - 1)))
                        } i = this._content.getComponent(_).width * (0 - this._content.getComponent(_).anchorX), s = this._content.getComponent(_).height * (.5 - this._content.getComponent(_).anchorY);
                    break;
                case W.VERTICAL:
                    if (l)
                        if (n) h = (this.scrollView.node.getComponent(_).height - e - c) / r;
                        else {
                            let t = l.data.height * l.data.scaleY * this.cellScale;
                            0 !== t && (r = Math.floor(g.height / t), r > 1 && (h = (g.height - r * t) / (r - 1)))
                        } i = this._content.getComponent(_).width * (.5 - this._content.getComponent(_).anchorX), s = this._content.getComponent(_).height * (1 - this._content.getComponent(_).anchorY)
            }
            this.autoSpacing && o > 1 && (this.spacing = Math.max(0, h)), this._contentBoundStartPos.x = i, this._contentBoundStartPos.y = s
        }
        _calculteContentSize() {
            let t = this.paddingStart,
                e = this.paddingStart,
                o = this._contentBoundStartPos.x + this.paddingStart,
                n = this._contentBoundStartPos.y - this.paddingStart;
            for (let l = 0; l < this._cellsInfo.length; ++l) {
                let i = this._getPrefabByType(this._cellsInfo[l].type);
                if (!i) continue;
                let s = i.data;
                switch (this.align) {
                    case W.HORIZONTAL:
                        this._cellsInfo[l].boundStart = t, this._cellsInfo[l].boundEnded = t + s.getComponent(_).width * s.scale.x * this.cellScale, t = this._cellsInfo[l].boundEnded, t += this.spacing, this._cellsInfo[l].boundPosition.x = o + s.getComponent(_).width * s.getComponent(_).anchorX * s.scale.x * this.cellScale, this._cellsInfo[l].boundPosition.y = this._contentBoundStartPos.y, o = this._cellsInfo[l].boundPosition.x, o += s.getComponent(_).width * (1 - s.getComponent(_).anchorX) * s.scale.x * this.cellScale, o += this.spacing;
                        break;
                    case W.VERTICAL:
                        this._cellsInfo[l].boundStart = e, this._cellsInfo[l].boundEnded = e + s.getComponent(_).height * s.scale.y * this.cellScale, e = this._cellsInfo[l].boundEnded, e += this.spacing, this._cellsInfo[l].boundPosition.x = this._contentBoundStartPos.x, this._cellsInfo[l].boundPosition.y = n - s.getComponent(_).height * (1 - s.getComponent(_).anchorY) * s.scale.y * this.cellScale, n = this._cellsInfo[l].boundPosition.y, n -= s.getComponent(_).height * s.getComponent(_).anchorY * s.scale.y * this.cellScale, n -= this.spacing
                }
            }
            let l = 0,
                i = 0;
            switch (this.align) {
                case W.HORIZONTAL:
                    l = t - this.spacing + this.paddingEnd;
                    break;
                case W.VERTICAL:
                    i = e - this.spacing + this.paddingEnd
            }
            l = Math.max(l, this._contentSrcSize.width), i = Math.max(i, this._contentSrcSize.height), this._content.getComponent(_).setContentSize(l, i)
        }
        _reseteKernelBuffer() {
            this._calculteAutoSpacing(), this._calculteContentSize(), this._clearShowList()
        }
        _getPrefabByType(t) {
            let e = null;
            return t >= 0 && t < this.prefabTypes.length && (e = this.prefabTypes[t]), e
        }
        _generateCellInstance(t) {
            let e = null,
                o = this._cellsPoolMap.get(t);
            if (o && o.size() > 0) e = o.get();
            else {
                let o = this._getPrefabByType(t);
                o && (e = V(o))
            }
            if (e) {
                e.setScale(new c(this.cellScale, this.cellScale, this.cellScale)), e.getComponent(w).opacity = 255, e.active = !0;
                let t = e.getComponent(g);
                if (t) switch (this.align) {
                    case W.HORIZONTAL:
                        t.isAlignLeft = !1, t.isAlignRight = !1, t.isAlignHorizontalCenter = !1;
                        break;
                    case W.VERTICAL:
                        t.isAlignTop = !1, t.isAlignBottom = !1, t.isAlignVerticalCenter = !1
                }
            }
            return e
        }
        _clearShowList() {
            this._recycleOutRangeNodes(0, 0, !0), this._showCellsMap.clear()
        }
        _clearNodePool() {
            this._cellsPoolMap.forEach(((t, e, o) => {
                e.clear()
            })), this._cellsPoolMap.clear()
        }
        _recycleOutRangeNodes(t, e, o = !1) {
            if (this._showCellsMap.length <= 0) return;
            let n = [];
            this._showCellsMap.forEach(((l, i) => {
                (o || l < t || l > e) && n.push(l)
            }));
            for (let t = 0; t < n.length; ++t) {
                let e = n[t],
                    o = this._showCellsMap.remove(e);
                this._recycleNodeToPool(o.node, o.type)
            }
        }
        _recycleNodeToPool(t, e) {
            if (!p(t, !0)) return;
            if (e < 0 || e >= this.prefabTypes.length) return;
            let o = this._cellsPoolMap.get(e);
            o || (o = new v, this._cellsPoolMap.add(e, o)), o.put(t)
        }
        _refreshCellData(t) {
            let e = this._showCellsMap.get(t);
            if (!e) return;
            let o = this._cellsInfo[t],
                n = e.node.getComponent(o.component);
            n && "function" == typeof n.updateSVReuseData && n.updateSVReuseData(t, o.data, this)
        }
        _updateView() {
            if (this._cellsInfo.length <= 0) return;
            let t = this.getScrollOffset(),
                e = this.getMaxScrollOffset(),
                o = -1,
                n = -1,
                l = t.x,
                i = t.y;
            switch (this.align) {
                case W.HORIZONTAL:
                    l = Math.min(l, 0), l = Math.max(l, -e.x), l = Math.abs(l);
                    for (let t = 0; t < this._cellsInfo.length; ++t) {
                        let e = this._cellsInfo[t];
                        if (o < 0 && e.boundEnded > l ? o = t : n < 0 && e.boundEnded >= l + this._contentSrcSize.width && (n = t), o >= 0 && n >= 0) break
                    }
                    break;
                case W.VERTICAL:
                    i = Math.min(i, e.y), i = Math.max(i, 0);
                    for (let t = 0; t < this._cellsInfo.length; ++t) {
                        let e = this._cellsInfo[t];
                        if (o < 0 && e.boundEnded > i ? o = t : n < 0 && e.boundEnded >= i + this._contentSrcSize.height && (n = t), o >= 0 && n >= 0) break
                    }
            }
            o < 0 && (o = 0), n < 0 && (n = this._cellsInfo.length - 1), this._recycleOutRangeNodes(o, n);
            for (let t = o; t <= n; ++t) {
                let e = this._showCellsMap.get(t);
                if (e) continue;
                let o = this._cellsInfo[t];
                if (e = new Y, e.type = o.type, e.node = this._generateCellInstance(o.type), e.node) {
                    if (e.node.getComponent(g)) switch (this.align) {
                        case W.HORIZONTAL:
                            e.node.position = new c(o.boundPosition.x, e.node.position.y, e.node.position.z);
                            break;
                        case W.VERTICAL:
                            e.node.position = new c(e.node.position.x, o.boundPosition.y, e.node.position.z)
                    } else e.node.setPosition(o.boundPosition);
                    this._content.addChild(e.node), this._showCellsMap.add(t, e), this._refreshCellData(t)
                }
            }
        }
        bindData(t) {
            if (null != t) {
                let e = [];
                this._cellsInfo.splice(0, this._cellsInfo.length), Array.isArray(t) ? e = t : e.push(t);
                for (let t = 0, o = 0; t < e.length; ++t) {
                    let n = e[t].prefab_type,
                        l = e[t].prefab_component,
                        i = e[t].prefab_datas;
                    if (Array.isArray(i))
                        for (let t = 0; t < i.length; ++t) {
                            let e = new X;
                            e.uuid = ++o, e.type = n, e.component = l, e.data = i[t], this._cellsInfo.push(e)
                        } else {
                            let t = new X;
                            t.uuid = ++o, t.type = n, t.component = l, t.data = i, this._cellsInfo.push(t)
                        }
                }
            } else this._cellsInfo.splice(0, this._cellsInfo.length), this.scrollView.stopAutoScroll(), this.scrollView.scrollToOffset(f.ZERO);
            this._calibrateOnce || (this._calibrateOnce = !0, this._calibrateContent()), this._reseteKernelBuffer()
        }
        bindScrollEventTarget(t) {
            null != t && (t instanceof d && !p(t, !0) || (this._scrollEventTarget = t))
        }
        reloadView(t = !0) {
            t && (this.scrollView.stopAutoScroll(), this.scrollView.scrollToOffset(f.ZERO)), this._updateView()
        }
        refreshView() {
            this._updateView(), this._showCellsMap.forEach(((t, e) => {
                this._refreshCellData(t)
            }))
        }
        clearView(t = !1) {
            this._cellsInfo.splice(0, this._cellsInfo.length), this.scrollView.stopAutoScroll(), this.scrollView.scrollToOffset(f.ZERO), this._reseteKernelBuffer(), t && this._clearNodePool()
        }
        getCellViewIndex(t) {
            let e = 0;
            if (this._showCellsMap.length > 0) {
                let o = [];
                this._showCellsMap.forEach(((t, e) => {
                    o.push(t)
                })), o.sort(((t, e) => t - e));
                for (let n = 0; n < o.length; ++n)
                    if (t === o[n]) {
                        e = n;
                        break
                    }
            }
            return e
        }
        getCellViewCount() {
            return this._showCellsMap.length
        }
        getCellTotalCount() {
            return this._cellsInfo.length
        }
        getCellType(t) {
            let e = 0;
            return t >= 0 && t < this._cellsInfo.length && (e = this._cellsInfo[t].type), e
        }
        removeCells(e, o = !1) {
            if (this._cellsInfo.length <= 0) return;
            if (null == e) return;
            let n = [];
            if (Array.isArray(e) ? n = e.slice() : n.push(e), n.length <= 0 || this._showCellsMap.length <= 0) return;
            this.scrollView.stopAutoScroll(), this._setTouchEventEnable(!1);
            let l = [];
            this._showCellsMap.forEach(((t, e) => {
                l.push(t)
            })), l.sort(((t, e) => t - e)), n.sort(((t, e) => t - e));
            let i = [],
                s = [],
                h = l[0],
                _ = l[l.length - 1];
            for (let t = 0; t < n.length; ++t) {
                let e = n[t];
                e >= 0 && e < h ? s.push(e) : e >= h && e <= _ && i.push(e)
            }
            let g = this.getScrollOffset(),
                p = this.getMaxScrollOffset(),
                d = new a(g.x, g.y),
                T = 0;
            if (o && i.length > 0) {
                let t = !1;
                for (let e = 0; e < i.length; ++e) {
                    let o = i[e],
                        n = this._showCellsMap.get(o);
                    if (n) {
                        t = !0;
                        var S = n.node.getComponent(w);
                        S && y(S.opacity).to(.2, 0).call((() => {
                            n.node.active = !1, S.opacity = 255
                        })).start()
                    }
                }
                t && (T += .2)
            }
            let u = new O;
            for (let t = 0; t < this._cellsInfo.length; ++t) u.add(this._cellsInfo[t].uuid, new f(this._cellsInfo[t].boundPosition.x, this._cellsInfo[t].boundPosition.y));
            let E = o && i.length > 0;
            y(this.node).delay(T).call((() => {
                {
                    let t = !1,
                        e = () => {
                            let t = new a(a.ZERO);
                            for (let e = 0; e < s.length; ++e) {
                                let o = this._cellsInfo[s[e]],
                                    n = this._getPrefabByType(o.type);
                                n && (t.width += n.data.width * n.data.scaleX * this.cellScale, t.height += n.data.height * n.data.scaleY * this.cellScale)
                            }
                            let e = s.length * this.spacing;
                            return t.width += e, t.height += e, g.x = Math.abs(g.x) - t.width, g.y = Math.abs(g.y) - t.height, g.x = Math.max(g.x, 0), g.x = Math.min(g.x, p.x), g.y = Math.max(g.y, 0), g.y = Math.min(g.y, p.y), !0
                        },
                        o = () => {
                            let t = !1;
                            for (let e = 0; e < i.length; ++e)
                                if (i[e] === h) {
                                    let e = this._cellsInfo[h].boundStart - Math.abs(g.x),
                                        o = this._cellsInfo[h].boundStart - Math.abs(g.y);
                                    g.x = Math.abs(g.x) - Math.abs(e), g.y = Math.abs(g.y) - Math.abs(o), g.x = Math.max(g.x, 0), g.x = Math.min(g.x, p.x), g.y = Math.max(g.y, 0), g.y = Math.min(g.y, p.y), t = !0;
                                    break
                                } return t
                        };
                    s.length > 0 && i.length <= 0 ? t = e() : s.length > 0 && i.length > 0 ? (t = t || e(), t = t || o()) : s.length <= 0 && i.length > 0 && (t = o()), t && this.scrollView.scrollToOffset(g), d.width = Math.abs(d.width - g.x), d.height = Math.abs(d.height - g.y)
                }
                u.forEach(((t, e) => {
                    var o = new c;
                    this._contentUITransform.convertToWorldSpaceAR(r(e.x, e.y, 0), o), this.scrollViewNodeUITransform.convertToNodeSpaceAR(o, o), u.add(t, C(o.x, o.y))
                }));
                for (let t = 0; t < this._cellsInfo.length; ++t)
                    for (let e = 0; e < n.length; ++e)
                        if (t === n[e]) {
                            this._cellsInfo[t] = null;
                            break
                        } for (let t = 0; t < this._cellsInfo.length; ++t) null === this._cellsInfo[t] && (this._cellsInfo.splice(t, 1), --t);
                this._calculteContentSize(), this._clearShowList(), this._updateView(), E && this._showCellsMap.forEach(((e, o) => {
                    let n = this._cellsInfo[e],
                        l = u.get(n.uuid);
                    if (l) {
                        l.x += d.width, l.y += d.height;
                        let t = new c;
                        this.scrollViewNodeUITransform.convertToWorldSpaceAR(r(l.x, l.y, 0), t), this._contentUITransform.convertToNodeSpaceAR(t, t), o.node.setPosition(t), y(o.node).to(.2, {
                            position: n.boundPosition
                        }, {
                            easing: b.easeOutWithFactor(3)
                        }).start()
                    } else console.error(`${t.g_class_name} - Error : remove uuid = [${n.uuid}] faild`)
                }))
            })).start(), E ? (T += .2, y(this.node).delay(T).call((() => {
                this._setTouchEventEnable(!0)
            })).start()) : this._setTouchEventEnable(!0)
        }
        resetScrollVewSize(t, e = !1) {
            return !(!e && this.scrollView.node.getComponent(_).contentSize.equals(t)) && (this.scrollView.node.getComponent(_).setContentSize(t), this._calibrateContent(), this._reseteKernelBuffer(), !0)
        }
        getScrollOffset() {
            return this.scrollView.getScrollOffset()
        }
        getMaxScrollOffset() {
            return this.scrollView.getMaxScrollOffset()
        }
        scrollToOffsetEx(t, e) {
            this.scrollView.scrollToOffset(t, e), (!e || e <= 0) && this._updateView()
        }
        scrollToDir(t, e, o) {
            switch (t) {
                case F.TOP:
                    this.scrollView.scrollToTop(e, o);
                    break;
                case F.BOTTOM:
                    this.scrollView.scrollToBottom(e, o);
                    break;
                case F.LEFT:
                    this.scrollView.scrollToLeft(e, o);
                    break;
                case F.RIGHT:
                    this.scrollView.scrollToRight(e, o);
                    break;
                case F.TOP_LEFT:
                    this.scrollView.scrollToTopLeft(e, o);
                    break;
                case F.TOP_RIGHT:
                    this.scrollView.scrollToTopRight(e, o);
                    break;
                case F.BOTTOM_LEFT:
                    this.scrollView.scrollToBottomLeft(e, o);
                    break;
                case F.BOTTOM_RIGHT:
                    this.scrollView.scrollToBottomRight(e, o)
            }(!e || e <= 0) && this._updateView()
        }
        generatePoolInst(t = 1) {
            this._pregenerateInstOnce = !0;
            for (let e = 0; e < this.prefabTypes.length; ++e) {
                if (this.prefabTypes[e])
                    for (let o = 0; o < t; ++o) {
                        let t = this._generateCellInstance(e);
                        this._recycleNodeToPool(t, e)
                    }
            }
        }
        isGeneratePoolInst() {
            return this._pregenerateInstOnce
        }
    }).g_class_name = "TableView", N = e((A = G).prototype, "scrollView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(A.prototype, "spacing", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), z = e(A.prototype, "autoSpacing", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), U = e(A.prototype, "_cellScale", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), e(A.prototype, "cellScale", [j], Object.getOwnPropertyDescriptor(A.prototype, "cellScale"), A.prototype), k = e(A.prototype, "paddingStart", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Z = e(A.prototype, "paddingEnd", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), D = e(A.prototype, "prefabTypes", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = A)) || x));
    n._RF.pop()
}
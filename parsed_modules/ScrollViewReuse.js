import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as S from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var C, w, V, v, E, T, b, I, y, O, z, x, R, B, P, L, D;
    n._RF.push({}, "c05eex8EzlJU4pyMnWnTCOV", "ScrollViewReuse", void 0);
    var A = function(t) {
        return t[t.HORIZONTAL = 0] = "HORIZONTAL", t[t.VERTICAL = 1] = "VERTICAL", t
    }(A || {});
    const {
        ccclass: N,
        property: M,
        executionOrder: Z
    } = h;
    t("ScrollViewReuse", (C = Z(-1), w = M({
        type: o,
        tooltip: "Bound scroll view (preferably on the corresponding scroll view, each scroll view does not interfere with each other)"
    }), V = M({
        tooltip: "The distance between each item (with intelligent detection inside, optional)"
    }), v = M({
        tooltip: "The real number to be instantiated, this is a fixed value, once it is set, it will not change dynamically (there is smart detection inside, optional)"
    }), E = M({
        tooltip: 'Automatically calculate the optimal spacing (if it is: true, the manually set "spacing" will be invalid; the default is: false)'
    }), T = M({
        tooltip: "Automatically calculate whether the offset of the optimal spacing is increased or decreased, and it takes effect only when 'autoCalculateSpacing' is true (default false: decrease)"
    }), b = M({
        type: s(A),
        tooltip: "View arrangement direction (currently only supports one-dimensional unidirectional layout, the default is portrait)"
    }), I = M(l), N(y = C((z = e((O = class extends a {
        constructor(...t) {
            super(...t), i(this, "scrollView", z, this), i(this, "spacing", x, this), i(this, "spawnCount", R, this), i(this, "autoCalculateSpacing", B, this), i(this, "autoSpacingOffsetIdcOrDec", P, this), i(this, "align", L, this), i(this, "noResultNode", D, this), this._content = null, this._contentSrcSize = new r(0, 0), this._contentSrcPos = c(0, 0, 0), this._items = [], this._itemsData = [], this._prefab = null, this._prefabSize = new r(0, 0), this._prefab_com_name = null, this._totalCount = 0, this._updateTimer = 0, this._updateInterval = .2, this._lastContentPos = c(0, 0, 0), this._bufferZone = 0, this._bufferMaxCount = 0, this._scrollEventTarget = null, this._bindOnce = !1, this._generateItemPoolOnce = !1
        }
        onLoad() {
            this.scrollView && (this._content = this.scrollView.content, this.scrollView.node.on(o.EventType.SCROLLING, this._onSVEventScrolling, this), this.scrollView.node.on(o.EventType.SCROLL_ENDED, this._onSVEventScrollEnded, this), this.scrollView.vertical && (this.scrollView.node.on(o.EventType.SCROLL_TO_TOP, this._onSVEventScrollToTop, this), this.scrollView.node.on(o.EventType.SCROLL_TO_BOTTOM, this._onSVEventScrollToBottom, this), this.scrollView.node.on(o.EventType.BOUNCE_TOP, this._onSVEventBounceTop, this), this.scrollView.node.on(o.EventType.BOUNCE_BOTTOM, this._onSVEventBounceBottom, this)), this.scrollView.horizontal && (this.scrollView.node.on(o.EventType.SCROLL_TO_LEFT, this._onSVEventScrollToLeft, this), this.scrollView.node.on(o.EventType.SCROLL_TO_RIGHT, this._onSVEventScrollToRight, this), this.scrollView.node.on(o.EventType.BOUNCE_LEFT, this._onSVEventBounceLeft, this), this.scrollView.node.on(o.EventType.BOUNCE_RIGHT, this._onSVEventBounceRight, this)), this.scrollView.node.on(l.EventType.SIZE_CHANGED, this.onScrollSizeChanged, this))
        }
        onDestroy() {
            _(this.scrollView.node, !0) && this.scrollView.node.off(l.EventType.SIZE_CHANGED, this.onScrollSizeChanged, this)
        }
        update(t) {
            for (let t = 0; t < this._items.length; ++t) {
                let e = this._getPositionInView(this._items[t]);
                switch (this.align) {
                    case A.HORIZONTAL:
                        this._updateHorizontal(e, t);
                        break;
                    case A.VERTICAL:
                        this._updateVertical(e, t)
                }
            }
            this._lastContentPos = c(this._content.position.x, this._content.position.y, this._lastContentPos.z)
        }
        _updateHorizontal(t, e) {
            let i = 0,
                n = this._content.position.x < this._lastContentPos.x,
                o = 0;
            o = this.autoSpacingOffsetIdcOrDec ? this._prefabSize.width * this._items.length + this.spacing * (this._items.length + 1) : this._prefabSize.width * this._items.length + this.spacing * (this._items.length - 1), n ? (i = this._items[e].position.x + o, t.x < -this._bufferZone && i < this._content.getComponent(p).width && (this._items[e].setPosition(i + this.spacing, this._items[e].getPosition().y), this._updateCellInfoByIndex(e, -1, this._items.length))) : (i = this._items[e].position.x - o, t.x > this._bufferZone && i > 0 && (this._items[e].setPosition(i - this.spacing, this._items[e].getPosition().y), this._updateCellInfoByIndex(e, -1, -this._items.length)))
        }
        _updateVertical(t, e) {
            let i = 0,
                n = this._content.position.y < this._lastContentPos.y,
                o = 0;
            o = this.autoSpacingOffsetIdcOrDec ? this._prefabSize.height * this._items.length + this.spacing * (this._items.length + 1) : this._prefabSize.height * this._items.length + this.spacing * (this._items.length - 1), n ? (i = this._items[e].position.y + o, t.y < -this._bufferZone && i < 0 && (this._items[e].setPosition(this._items[e].getPosition().x, i + this.spacing), this._updateCellInfoByIndex(e, -1, -this._items.length))) : (i = this._items[e].position.y - o, t.y > this._bufferZone && i > -this._content.getComponent(p).height && (this._items[e].setPosition(this._items[e].getPosition().x, i - this.spacing), this._updateCellInfoByIndex(e, -1, this._items.length)))
        }
        _onSVEventScrolling(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrolling && this._scrollEventTarget.onSVEventScrolling(t)
        }
        _onSVEventScrollEnded(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollEnded && this._scrollEventTarget.onSVEventScrollEnded(t)
        }
        _onSVEventScrollToTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToTop && this._scrollEventTarget.onSVEventScrollToTop(t)
        }
        _onSVEventScrollToBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToBottom(t)
        }
        _onSVEventScrollToLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToLeft(t)
        }
        _onSVEventScrollToRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToRight(t)
        }
        _onSVEventBounceTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceTop && this._scrollEventTarget.onSVEventBounceTop(t)
        }
        _onSVEventBounceBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceBottom && this._scrollEventTarget.onSVEventBounceBottom(t)
        }
        _onSVEventBounceLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceLeft && this._scrollEventTarget.onSVEventBounceLeft(t)
        }
        _onSVEventBounceRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceRight && this._scrollEventTarget.onSVEventBounceRight(t)
        }
        _getPositionInView(t) {
            let e = c(0, 0);
            return t.getParent().getComponent(p).convertToWorldSpaceAR(t.position, e), this.scrollView.node.getComponent(p).convertToNodeSpaceAR(e, e), e.x = e.x + (this.scrollView.node.getComponent(p).anchorX - .5) * this.scrollView.node.getComponent(p).width, e.y = e.y + (this.scrollView.node.getComponent(p).anchorY - .5) * this.scrollView.node.getComponent(p).height, e
        }
        _updateContentSize() {
            if (!this._content) {
                if (!this.scrollView) return;
                this._content = this.scrollView.content
            }
            let t = this._content.getComponent(p).width,
                e = this._content.getComponent(p).height;
            switch (this.align) {
                case A.HORIZONTAL:
                    t = this.autoSpacingOffsetIdcOrDec ? this._totalCount * this._prefabSize.width + (this._totalCount + 1) * this.spacing : this._totalCount * this._prefabSize.width + (this._totalCount - 1) * this.spacing;
                    break;
                case A.VERTICAL:
                    e = this.autoSpacingOffsetIdcOrDec ? this._totalCount * this._prefabSize.height + (this._totalCount + 1) * this.spacing : this._totalCount * this._prefabSize.height + (this._totalCount - 1) * this.spacing
            }
            t = Math.max(0, t), e = Math.max(0, e), this._content.getComponent(p).setContentSize(t, e)
        }
        _adaptWidget(t, e) {
            if (!t) return;
            let i = t.getComponent(g);
            if (i) {
                let t = i.enabled;
                i.enabled = !0, i.updateAlignment(), i.enabled = t
            }
            if (e)
                for (let i = 0; i < t.children.length; ++i) this._adaptWidget(t.children[i], e)
        }
        _adaptItemWidgetByIndex(t, e) {
            if (t < 0 || t >= this._items.length) return;
            let i = this._items[t];
            this._adaptWidget(i, e)
        }
        _calibrateContent(t) {
            if (this._content.parent.getComponent(o)) {
                t && this._adaptWidget(this._content.parent);
                let e = this._content.parent.getComponent(p).width * (this._content.getComponent(p).anchorX - this._content.parent.getComponent(p).anchorX),
                    i = this._content.parent.getComponent(p).height * (this._content.getComponent(p).anchorY - this._content.parent.getComponent(p).anchorY);
                this._content.getComponent(p).setContentSize(this._content.parent.getComponent(p).contentSize), this._content.setPosition(e, i), this._contentSrcPos = c(this._content.position.x, this._content.position.y, this._contentSrcPos.z), this._contentSrcSize = new r(this._content.getComponent(p).width, this._content.getComponent(p).height)
            } else console.error("ScrollViewReuse - Error : this._conten.parent property is not ScrollView Instance!")
        }
        _calculteKernelBuffer() {
            switch (this._calculateBufferZone(), this.align) {
                case A.HORIZONTAL:
                    if (this._bufferMaxCount = Math.ceil(this.scrollView.node.getComponent(p).width / this._prefabSize.width), this.autoCalculateSpacing) {
                        let t = Math.floor(this.scrollView.node.getComponent(p).width / this._prefabSize.width),
                            e = this.scrollView.node.getComponent(p).width - t * this._prefabSize.width;
                        t = this.autoSpacingOffsetIdcOrDec ? t + 1 : t - 1, 0 === t && (t = 1), this.spacing = e / t
                    }
                    break;
                case A.VERTICAL:
                    if (this._bufferMaxCount = Math.ceil(this.scrollView.node.getComponent(p).height / this._prefabSize.height), this.autoCalculateSpacing) {
                        let t = Math.floor(this.scrollView.node.getComponent(p).height / this._prefabSize.height),
                            e = this.scrollView.node.getComponent(p).height - t * this._prefabSize.height;
                        t = this.autoSpacingOffsetIdcOrDec ? t + 1 : t - 1, 0 === t && (t = 1), this.spacing = e / t
                    }
            }
            this.spawnCount = Math.max(this.spawnCount, this._bufferMaxCount + 2)
        }
        onScrollSizeChanged() {
            this._calculateBufferZone()
        }
        _calculateBufferZone() {
            switch (this.align) {
                case A.HORIZONTAL:
                    this._bufferZone = this.scrollView.node.getComponent(p).width / 2 + this._prefabSize.width / 2;
                    break;
                case A.VERTICAL:
                    this._bufferZone = this.scrollView.node.getComponent(p).height / 2 + this._prefabSize.height / 2
            }
        }
        _resetItemPos(t) {
            if (t < 0 || t >= this._items.length) return;
            let e = 0,
                i = 0,
                n = this._items[t];
            switch (this.align) {
                case A.HORIZONTAL:
                    e = this.autoSpacingOffsetIdcOrDec ? (t + 1) * this.spacing + this._prefabSize.width * (.5 + t) : t * this.spacing + this._prefabSize.width * (.5 + t);
                    break;
                case A.VERTICAL:
                    i = this.autoSpacingOffsetIdcOrDec ? -(t + 1) * this.spacing - this._prefabSize.height * (.5 + t) : -t * this.spacing - this._prefabSize.height * (.5 + t);
                    break;
                default:
                    console.error("ScrollViewReuse - Error : unknow align type!")
            }
            n.setPosition(e, i)
        }
        _resetAllItemPos() {
            for (let t = 0; t < this._items.length; ++t) this._resetItemPos(t);
            this._content.setPosition(this._contentSrcPos)
        }
        _addItem(t) {
            let e = !1 !== t;
            if (this._items.length < this.spawnCount) {
                let t = f(this._prefab);
                this._content.addChild(t), this._items.push(t);
                let i = this._items.length - 1;
                t.active = e, this._adaptItemWidgetByIndex(i), this._resetItemPos(i), this._updateCellInfoByIndex(i, i)
            } else
                for (let t = 0; t < this._items.length; ++t) {
                    let e = this._items[t];
                    if (!e.active) {
                        e.active = !0, this._adaptItemWidgetByIndex(t), this._resetItemPos(t), this._updateCellInfoByIndex(t, t);
                        break
                    }
                }
            e && ++this._totalCount, this._updateContentSize()
        }
        _updateCellInfoByIndex(t, e, i) {
            if (t < 0 || t >= this._items.length) return;
            let n = this._items[t].getComponent(this._prefab_com_name);
            n && ("number" == typeof e && e >= 0 && (n.svIndex = e), "number" == typeof i && (n.svIndex += i), "function" == typeof n.updateSVReuseData && n.updateSVReuseData(n.svIndex, this._itemsData, this, t))
        }
        _refreshData(t) {
            for (let e = 0; e < this._items.length; ++e)(t || this._items[e].active) && this._updateCellInfoByIndex(e)
        }
        bindPrefab(t, e, i) {
            this._prefab && this._prefab != t && (this._bindOnce = !1, this._generateItemPoolOnce = !1, this.removeAll(!0)), !this._bindOnce && t instanceof u && (this._calibrateContent(!0), this._bindOnce = !0, this._prefab = t, this._prefab_com_name = e, this._prefabSize.width = t.data.getContentSize().width * t.data.scale.x, this._prefabSize.height = t.data.getContentSize().height * t.data.scale.y, this._itemsData = i instanceof Array ? i : [], this._calculteKernelBuffer())
        }
        rebindDataRef(t) {
            t && void 0 !== t && (this._itemsData = t)
        }
        bindScrollEventTarget(t) {
            t && (this._scrollEventTarget = t)
        }
        setItemScale(t) {
            if (!this._prefab) return;
            const e = this._prefab.data;
            e.setScale(new d(t, t, 1)), this._prefabSize.width = e.getContentSize().width * e.scale.x, this._prefabSize.height = e.getContentSize().height * e.scale.y;
            for (let e = 0; e < this._items.length; ++e) this._items[e].setScale(new d(t, t, 1));
            this._calculteKernelBuffer(), this._updateContentSize(), this._resetAllItemPos()
        }
        reloadView(t, e) {
            this.rebindDataRef(t);
            for (let t = 0; t < this._items.length; ++t) this._items[t].active = t < this._itemsData.length;
            if (this.toggleNoResultNode(), this._totalCount = this._itemsData.length, this._updateContentSize(), e = !1 !== e) {
                this.scrollView.isAutoScrolling && this.scrollView.stopAutoScroll(), this._lastContentPos = c(0, 0, this._lastContentPos.z), this._resetAllItemPos();
                for (let t = 0; t < this._items.length; ++t) {
                    let e = this._items[t].getComponent(this._prefab_com_name);
                    e && (e.svIndex = t)
                }
            }
            this._refreshData()
        }
        generateItemPool() {
            if (!(this._generateItemPoolOnce || (this._generateItemPoolOnce = !0, this._items.length > 0)))
                for (let t = 0; t < this.spawnCount; ++t) this._addItem(!1)
        }
        isGenerateItemPool() {
            return this._generateItemPoolOnce
        }
        addItem() {
            this._addItem(!0)
        }
        removeItem() {
            let t = this._totalCount - 1;
            if (!(t < 0)) {
                if (t < this.spawnCount) {
                    for (let e = 0; e < this._items.length; ++e) this._items[e].active = e < t;
                    this.scrollView.stopAutoScroll()
                }
                this._totalCount = t, this._updateContentSize()
            }
        }
        removeAll(t) {
            let e = !0 === t;
            for (let t = 0; t < this._items.length; ++t) {
                this._items[t].active = !1;
                let i = this._items[t].getComponent(this._prefab_com_name);
                i && (i.svIndex = t), e && this._content.removeChild(this._items[t])
            }
            this._resetAllItemPos(), e && (this._items = []), this._totalCount = 0, this._lastContentPos.x = 0, this._lastContentPos.y = 0, this._updateContentSize(), this.rebindDataRef([]), this.toggleNoResultNode()
        }
        scrollToFixedPosition(t, e) {
            t instanceof m && (console.log("=====x:" + t.x), console.log("=====max x:" + this.scrollView.getMaxScrollOffset().x), this.scrollView.scrollToOffset(t, e), e || this.reloadView())
        }
        getScrollFixedPosition() {
            return this.scrollView.getScrollOffset()
        }
        resetScrollVewSize(t) {
            if (this.scrollView.node.getComponent(p).contentSize.equals(t)) return;
            this.scrollView.node.getComponent(p).setContentSize(t), this._calibrateContent(!1), this._updateContentSize(), this._calculteKernelBuffer(), this._resetAllItemPos();
            let e = Math.abs(this.spawnCount) - Math.abs(this._items.length);
            if (e > 0 && this._generateItemPoolOnce)
                for (let t = 0; t < e; ++t) this._addItem(!1)
        }
        updateCellAtIndex(t) {
            for (let e = 0; e < this._items.length; ++e) {
                let i = this._items[e].getComponent(this._prefab_com_name);
                i && i.svIndex === t && "function" == typeof i.updateSVReuseData && i.updateSVReuseData(i.svIndex, this._itemsData, this, e)
            }
        }
        toggleNoResultNode() {
            if (this.noResultNode) {
                const t = this._itemsData.length > 0;
                this.noResultNode.active = !t
            }
        }
        onDisable() {
            if (this.scrollView && this.scrollView.vertical && !this.scrollView.horizontal && this.scrollView.isAutoScrolling()) {
                let t = this.scrollView.getScrollOffset().y,
                    e = this.scrollView.getMaxScrollOffset().y;
                t < 0 ? this.scrollView.scrollToOffset(S(0, .5 * this.scrollView.node.getComponent(p).height)) : t > e && this.scrollView.scrollToOffset(S(0, this.scrollView.content.getComponent(p).height - .5 * this.scrollView.node.getComponent(p).height))
            }
        }
        get Items() {
            return this._items
        }
    }).prototype, "scrollView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(O.prototype, "spacing", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), R = e(O.prototype, "spawnCount", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), B = e(O.prototype, "autoCalculateSpacing", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), P = e(O.prototype, "autoSpacingOffsetIdcOrDec", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), L = e(O.prototype, "align", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return A.VERTICAL
        }
    }), D = e(O.prototype, "noResultNode", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = O)) || y) || y));
    n._RF.pop()
}
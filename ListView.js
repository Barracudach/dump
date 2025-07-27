import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as v from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as u from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as l from "./cc.js";

function main() {
    var y, E, _, m, f, S, I, C;
    n._RF.push({}, "3b1d7iISspJj5xGoDT4PloX", "ListView", void 0);
    const {
        ccclass: V,
        property: B
    } = s;
    class O {
        constructor() {
            this.data = void 0, this.type = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0
        }
    }
    class P {
        constructor() {
            this.height = void 0, this.pool = new T, this.poolNodeList = []
        }
    }
    t("default", (y = B([i]), E = B({
        tooltip: "When turning on this, it sets the recycler node opacity to ZERO and DO NOT put it into NodePool, it will increase performance beacause we skip these heavy process: removeFromparent/AddChild/Active nodes "
    }), V((f = e((m = class extends l {
        constructor(...t) {
            super(...t), this._sv = void 0, o(this, "pfb_types", f, this), this.np_types = [], o(this, "usePoolOpacity", S, this), this.bindItemFunc = void 0, this.getItemTypeFunc = void 0, o(this, "contentPaddingTop", I, this), o(this, "contentPaddingBottom", C, this), this.datas = void 0, this.itemInfos = void 0, this._scrollEventTarget = null, this.itemsTotalHeight = 0
        }
        get sv() {
            return null == this._sv && (this._sv = this.node.getComponent(h)), this._sv
        }
        onDestroy() {
            this.clear(), this.node.off(c.EventType.SIZE_CHANGED, this.updateDisplay, this)
        }
        onLoad() {
            var t;
            for (let t = 0; t < this.pfb_types.length; t++) {
                let e = new P;
                this.np_types[t] = e;
                let o = this.createItemNodeFromPool(t);
                e.height = o.getComponent(r).height, this.recycleItemNodeToPool(t, o)
            }
            this.node.on(h.EventType.SCROLLING, (t => this.updateDisplay()), this), this.node.on(c.EventType.TOUCH_CANCEL, this._onSVEventTouchCancel, this), this.node.on(c.EventType.SIZE_CHANGED, this.updateDisplay, this), this.sv.vertical && (this.sv.node.on(h.EventType.SCROLL_TO_TOP, this._onSVEventScrollToTop, this), this.sv.node.on(h.EventType.SCROLL_TO_BOTTOM, this._onSVEventScrollToBottom, this), this.sv.node.on(h.EventType.BOUNCE_TOP, this._onSVEventBounceTop, this), this.sv.node.on(h.EventType.BOUNCE_BOTTOM, this._onSVEventBounceBottom, this)), this.sv.horizontal && (this.sv.node.on(h.EventType.SCROLL_TO_LEFT, this._onSVEventScrollToLeft, this), this.sv.node.on(h.EventType.SCROLL_TO_RIGHT, this._onSVEventScrollToRight, this), this.sv.node.on(h.EventType.BOUNCE_LEFT, this._onSVEventBounceLeft, this), this.sv.node.on(h.EventType.BOUNCE_RIGHT, this._onSVEventBounceRight, this)), (null == (t = this.datas) ? void 0 : t.length) > 0 && this.notifyDataSetChanged(this.datas)
        }
        bindScrollEventTarget(t) {
            t && (this._scrollEventTarget = t)
        }
        _onSVEventTouchCancel(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventTouchCancel && this._scrollEventTarget.onSVEventTouchCancel(t)
        }
        _onSVEventScrollToTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToTop && this._scrollEventTarget.onSVEventScrollToTop(t)
        }
        _onSVEventScrollToBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToBottom(t)
        }
        _onSVEventBounceTop(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceTop && this._scrollEventTarget.onSVEventBounceTop(t)
        }
        _onSVEventBounceBottom(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceBottom && this._scrollEventTarget.onSVEventBounceBottom(t)
        }
        _onSVEventScrollToLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToLeft(t)
        }
        _onSVEventScrollToRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventScrollToBottom && this._scrollEventTarget.onSVEventScrollToRight(t)
        }
        _onSVEventBounceLeft(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceLeft && this._scrollEventTarget.onSVEventBounceLeft(t)
        }
        _onSVEventBounceRight(t) {
            this._scrollEventTarget && "function" == typeof this._scrollEventTarget.onSVEventBounceRight && this._scrollEventTarget.onSVEventBounceRight(t)
        }
        _adaptWidget(t, e) {
            if (!t) return;
            let o = t.getComponent(a);
            if (o) {
                let t = o.enabled;
                o.enabled = !0, o.updateAlignment(), o.enabled = t
            }
            if (e)
                for (let o = 0; o < t.children.length; ++o) this._adaptWidget(t.children[o], e)
        }
        createItemNodeFromPool(t) {
            let e = null;
            if (this.usePoolOpacity) {
                let o = this.np_types[t].poolNodeList;
                o.length > 0 && (e = o.pop(), e.addOrGetComponent(p).opacity = 255)
            } else {
                let o = this.np_types[t].pool;
                o.size() > 0 && (e = o.get())
            }
            return v(e, !0) || (e = d(this.pfb_types[t]), e.getComponent(r).setAnchorPoint(new g(0, 1)), e.setPosition(new u(0, e.position.y, e.position.z)), e.__prefabType = t, this.usePoolOpacity && this.sv.content.addChild(e, 1, "")), e
        }
        recycleItemNodeToPool(t, e) {
            this.usePoolOpacity ? this.np_types[t].poolNodeList.includes(e) || (this.np_types[t].poolNodeList.push(e), e.name = "", e.addOrGetComponent(p).opacity = 0, e.setPosition(new u(e.position.x, 5e6, e.position.z))) : this.np_types[t].pool.put(e)
        }
        updateDisplay() {
            if (!this.itemInfos || 0 == this.itemInfos.length) return;
            const t = this.sv.getMaxScrollOffset().y;
            var e = this.sv.getScrollOffset().y;
            e < 0 ? e = 0 : e > t && (e = t), this._scrollEventTarget && this._scrollEventTarget.onSVEventScrolling && "function" == typeof this._scrollEventTarget.onSVEventScrolling && this._scrollEventTarget.onSVEventScrolling(this.sv);
            let o = null,
                n = null;
            for (let t = 0; t < this.itemInfos.length; t++) {
                const i = this.itemInfos[t];
                if (null == o && i.bottom >= e ? o = t : null == n && i.bottom >= e + this.node.getComponent(r).height && (n = t), null != o && null != n) break
            }
            null == o && (o = 0), null == n && (n = this.itemInfos.length - 1), this.recycleContentItemNodes(!1, o, n);
            for (let t = o; t <= n; t++) {
                const e = t.toString();
                if (this.sv.content.getChildByName(e)) continue;
                const o = this.itemInfos[t],
                    n = this.createItemNodeFromPool(o.type);
                let i = n.getPosition();
                i.y = -o.top, n.setPosition(i), n.name = e;
                let s = n.active;
                this.usePoolOpacity || (n.active = !1), n.name = e, n.parent || this.sv.content.addChild(n, 1, e), this.bindItemFunc(n, o.data, t, this.itemInfos), this.usePoolOpacity || n.active == s || (n.active = s)
            }
        }
        recycleContentItemNodes(t, e, o) {
            let n = this.sv.content.children;
            for (let i = n.length - 1; i >= 0; i--) {
                const s = n[i],
                    l = this.getIndexByItemNode(s);
                "listLoding" != s.name && (isNaN(l) ? this.usePoolOpacity && this.recycleItemNodeToPool(s.__prefabType || 0, s) : (t || l < e || l > o) && this.itemInfos[l] && this.recycleItemNodeToPool(this.itemInfos[l].type, s))
            }
        }
        init(t, e) {
            this.bindItemFunc = t, this.getItemTypeFunc = e
        }
        setContentPadding(t, e) {
            this.contentPaddingTop = t, this.contentPaddingBottom = e
        }
        notifyDataSetChanged(t) {
            this.recycleContentItemNodes(!0), this.datas = t, this.itemInfos = [], this.computeContentHeight(), this.updateDisplay()
        }
        computeContentHeight() {
            if (0 != this.np_types.length) {
                var t = this.contentPaddingTop;
                for (let e = 0; e < this.datas.length; e++) {
                    const o = new O;
                    o.data = this.datas[e], o.type = this.getItemTypeByData(o.data, e, this.datas), o.height = this.np_types[o.type].height, o.top = t, o.bottom = o.top + o.height, this.itemInfos[e] = o, t = o.bottom
                }
                t += this.contentPaddingBottom, this.itemsTotalHeight = t, t < this.sv.content.parent.getComponent(r).height && (t = this.sv.content.parent.getComponent(r).height), this.sv.content.getComponent(r).height = t
            }
        }
        getItemTypeByData(t, e, o) {
            return this.getItemTypeFunc ? this.getItemTypeFunc(t, e, o) : 0
        }
        clear() {
            this.itemInfos = null, this.datas = null, this.itemsTotalHeight = 0, v(this.sv, !0) && v(this.sv.content, !0) && (this.sv.content.destroyAllChildren(), this.sv.content.removeAllChildren(), this.sv.content.getComponent(r).height = 0), this.np_types.forEach((t => t.pool.clear()))
        }
        getIndexByItemNode(t) {
            return parseInt(t.name)
        }
        scrollToItem(t, e = .5, o = null) {
            const n = this.datas.findIndex((e => t(e)));
            if (n >= 0) {
                const t = new g(0, 0);
                this.sv.vertical ? t.y = n / this.datas.length * this.sv.content.getComponent(r).height : this.sv.horizontal && (t.x = n / this.datas.length * this.sv.content.getComponent(r).width), this.sv.scrollToOffset(t, e), o && this.scheduleOnce(o, e)
            }
        }
    }).prototype, "pfb_types", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = e(m.prototype, "usePoolOpacity", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), I = e(m.prototype, "contentPaddingTop", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), C = e(m.prototype, "contentPaddingBottom", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), _ = m)) || _));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./CommonTools.js";

function main() {
    var b, I, V, N, T, v, z, L, O, P, _, R, S, A, E, H, x, D, M, B, F, k, Z, j, U, Y, G, J, K, W;
    o._RF.push({}, "90c59HJR2ZNW5oglnKERTAR", "ScrollItem", void 0);
    const {
        ccclass: X,
        property: $
    } = a;
    let q = (b = X("Spacing"), I = $(s), V = $(s), N = $(s), T = $(s), v = $(s), z = $(s), b((P = e((O = class {
            constructor() {
                i(this, "top", P, this), i(this, "vertical", _, this), i(this, "bottom", R, this), i(this, "left", S, this), i(this, "horizontal", A, this), i(this, "right", E, this)
            }
        }).prototype, "top", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), _ = e(O.prototype, "vertical", [V], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), R = e(O.prototype, "bottom", [N], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), S = e(O.prototype, "left", [T], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), A = e(O.prototype, "horizontal", [v], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), E = e(O.prototype, "right", [z], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return 0
            }
        }), L = O)) || L),
        Q = (H = X("LayoutFLow"), x = $({
            type: n
        }), D = $({
            type: n
        }), H((e((B = class {
            get horizontal() {
                return this._horizontal
            }
            set horizontal(t) {
                this._horizontal = t, this._vertical = !t
            }
            get vertical() {
                return this._vertical
            }
            set vertical(t) {
                this._vertical = t, this._horizontal = !t
            }
            constructor() {
                this._horizontal = void 0, this._vertical = void 0, this._horizontal = !0, this._vertical = !1
            }
        }).prototype, "horizontal", [x], Object.getOwnPropertyDescriptor(B.prototype, "horizontal"), B.prototype), e(B.prototype, "vertical", [D], Object.getOwnPropertyDescriptor(B.prototype, "vertical"), B.prototype), M = B)) || M);
    class tt {
        constructor() {
            this.height = void 0, this.width = void 0, this.pool = void 0
        }
    }
    class et {
        constructor() {
            this.type = void 0, this.data = void 0, this.height = void 0, this.width = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0
        }
    }
    const it = h({
        NO_SCROLL: 0,
        VERTICAL: 1,
        HORIZONTAL: 2,
        ALL_DIRECTION: 3
    });
    t("default", (F = $([l]), k = $(q), Z = $({
        type: Q,
        tooltip: "primary layout arrangement when scroll view can scroll in all direction"
    }), j = $(r), X((G = e((Y = class extends c {
        constructor(...t) {
            super(...t), i(this, "itemPrefab", G, this), i(this, "spacing", J, this), i(this, "flow", K, this), i(this, "empty", W, this), this.direction = it.NO_SCROLL, this.scrollView = null, this.itemPools = [], this.datas = [], this.infos = [], this.datasCache = [], this.setItem = [], this.presetItem = [], this.presetItemNodes = [], this.lastTouchNode = null, this.lastTouchNodeContainer = null
        }
        get isVertical() {
            return this.direction === it.ALL_DIRECTION || this.direction === it.VERTICAL
        }
        get isHorizontal() {
            return this.direction === it.ALL_DIRECTION || this.direction === it.HORIZONTAL
        }
        onLoad() {
            this.scrollView = this.node.getComponent(p), this.scrollView.vertical && this.scrollView.horizontal ? this.direction = it.ALL_DIRECTION : this.scrollView.vertical ? this.direction = it.VERTICAL : this.scrollView.horizontal ? this.direction = it.HORIZONTAL : this.direction = it.NO_SCROLL, this.lastTouchNodeContainer = new r("last_touch");
            const t = this.lastTouchNodeContainer.addComponent(d);
            this.lastTouchNodeContainer.addComponent(u), this.lastTouchNodeContainer.parent = this.scrollView.node, this.lastTouchNodeContainer.setScale(0, 0), t.width = 0, t.height = 0, this.scrollView.content.getComponent(d).setAnchorPoint(this.isHorizontal ? 0 : .5, this.isVertical ? 1 : .5);
            for (let t = 0; t < this.itemPrefab.length; t++) {
                const e = new tt;
                e.height = this.itemPrefab[t].data.getComponent(d).height, e.width = this.itemPrefab[t].data.getComponent(d).width, e.pool = new m, this.itemPools.push(e)
            }
            this.node.on(p.EventType.SCROLLING, (t => this.updateItems()), this), this.node.on(p.EventType.SCROLL_ENDED, (t => this.removeLastTouchNode()), this)
        }
        start() {
            this.datasCache.length > 0 && (this.changeItemData(this.datasCache, !0), this.datasCache = [])
        }
        updateItems() {
            if (this.empty && (this.empty.active = !this.infos || 0 === this.infos.length), !this.infos || 0 === this.infos.length) return;
            const t = Math.min(Math.max(0, this.scrollView.getScrollOffset().x), this.scrollView.getMaxScrollOffset().x),
                e = Math.min(Math.max(0, this.scrollView.getScrollOffset().y), this.scrollView.getMaxScrollOffset().y);
            let i = null,
                o = null;
            if (this.isVertical === this.isHorizontal) {
                for (let s = 0; s < this.infos.length; s++) {
                    const n = this.infos[s];
                    if (null === i && n.bottom >= e && n.right >= t ? i = s : null === o && n.bottom >= e + this.node.getComponent(d).height && n.right >= t + this.node.getComponent(d).width && (o = s), null !== i && null !== o) break
                }
                null === i && (i = 0), null === o && (o = this.infos.length - 1)
            } else if (this.isVertical) {
                for (let t = 0; t < this.infos.length; t++) {
                    const s = this.infos[t];
                    if (null === i && s.bottom >= e ? i = t : null === o && s.bottom >= e + this.node.getComponent(d).height && (o = t), null !== i && null !== o) break
                }
                null === i && (i = 0), null === o && (o = this.infos.length - 1)
            } else if (this.isHorizontal) {
                for (let e = 0; e < this.infos.length; e++) {
                    const s = this.infos[e];
                    if (null === i && s.right >= t ? i = e : null === o && s.right >= t + this.node.getComponent(d).width && (o = e), null !== i && null !== o) break
                }
                null === i && (i = 0), null === o && (o = this.infos.length - 1)
            }
            this.recycleItemNode(!1, i, o);
            for (let t = i; t <= o; t++) {
                const e = `${t}`;
                if (this.scrollView.content.getChildByName(e)) continue;
                const o = this.infos[t],
                    s = this.getItemNode(o.type);
                s.name = e, s.getComponent(d).setAnchorPoint(this.scrollView.content.getComponent(d).anchorX, this.scrollView.content.getComponent(d).anchorY), s.setPosition(this.isHorizontal ? o.left : 0, -(this.isVertical ? o.top : 0)), this.setItem[o.type] && this.setItem[o.type](s, o.data), this.scrollView.content.insertChild(s, t - i), C.instance.updateLayouts(s, !0)
            }
        }
        recycleItemNode(t, e = 0, i = 0) {
            const o = this.scrollView.content.children;
            for (let s = o.length - 1; s >= 0; s--) {
                const n = o[s],
                    h = parseInt(n.name);
                (t || h < e || h > i) && this.putItemNode(this.infos[h].type, n)
            }
        }
        putItemNode(t, e) {
            this.itemPools[t].pool.put(e)
        }
        getItemNode(t) {
            let e = null;
            for (; this.itemPools[t].pool.size() > 0 && !g(e, !0);) e = this.itemPools[t].pool.get();
            return g(e, !0) || (e = f(this.itemPrefab[t]), e.on(r.EventType.TOUCH_START, (() => this.storeLastTouchNode(e)), this)), e
        }
        calculateContentSize(t, e = !0) {
            (e || t) && this.scrollView.stopAutoScroll(), t && (this.scrollView.content.position = new w(this.scrollView.content.position.x, 0, this.scrollView.content.position.z));
            let i = this.spacing.top,
                o = this.spacing.left;
            for (let t = 0; t < this.datas.length; t++) {
                const e = new et;
                if (e.type = this.datas[t].prefabType || 0, e.data = this.datas[t], this.presetItem[e.type]) {
                    let i = null;
                    g(this.presetItemNodes[e.type]) || (this.presetItemNodes[e.type] = f(this.itemPrefab[e.type])), i = this.presetItemNodes[e.type], this.presetItem[e.type](i, e.data, t), e.height = i.height, e.width = i.width
                } else e.height = this.itemPrefab[e.type].data.height, e.width = this.itemPrefab[e.type].data.width;
                e.top = i, e.bottom = e.top + (this.isVertical ? e.height : this.node.getComponent(d).height), e.left = o, e.right = e.left + (this.isHorizontal ? e.width : this.node.getComponent(d).width), this.infos[t] = e, i = this.isVertical ? e.bottom + (t !== this.datas.length - 1 ? this.spacing.vertical : 0) : i, o = this.isHorizontal ? e.right + (t !== this.datas.length - 1 ? this.spacing.horizontal : 0) : o
            }
            if (i += this.spacing.bottom, o += this.spacing.right, this.scrollView.content.getComponent(d).height = Math.max(i, this.node.getComponent(d).height), this.scrollView.content.getComponent(d).width = Math.max(o, this.node.getComponent(d).width), this.presetItem.length > 0) {
                for (let t = 0; t < this.presetItemNodes.length; t++) g(this.presetItemNodes[t]) && this.presetItemNodes[t].destroy();
                this.presetItemNodes = []
            }
        }
        setItemFunc(t, e, i = null) {
            this.setItem[t] = e, i && (this.presetItem[t] = i)
        }
        changeItemData(t, e, i = !0) {
            0 !== this.itemPrefab.length ? this.itemPrefab.length > 1 && t.length > 0 && (null == t[0].prefabType || null == t[0].prefabType) ? console.error("item data no prefab type, please add 'prefabType' for each data") : this.scrollView ? (this.recycleItemNode(!0), this.datas = t, this.infos = [], this.datasCache = [], this.calculateContentSize(e, i), this.updateItems()) : this.datasCache = t : console.error("no item prefab")
        }
        scrollToItem(t, e = .5, i = null) {
            const o = this.datas.findIndex((e => t(e)));
            if (o >= 0) {
                const t = y(0, 0);
                this.isVertical ? t.y = o / this.datas.length * this.scrollView.content.getComponent(d).height : this.isHorizontal && (t.x = o / this.datas.length * this.scrollView.content.getComponent(d).width), this.scrollView.scrollToOffset(t, e), i && this.scheduleOnce(i, e)
            }
        }
        scrollToBottom() {
            this.scrollView.scrollToBottom(.1)
        }
        isBottom(t = 0) {
            if (this.scrollView.content.getComponent(d).height < this.scrollView.node.getComponent(d).height) return !0;
            {
                let e = this.scrollView.node.getComponent(d).height * this.scrollView.node.getComponent(d).anchorY + (this.scrollView.content.getComponent(d).height - this.scrollView.node.getComponent(d).height) * this.scrollView.content.getComponent(d).anchorY;
                return console.log("isBottom", e, t), e -= t, Math.floor(this.scrollView.content.position.y) >= Math.floor(e)
            }
        }
        dataCount() {
            return this.datas.length
        }
        removeLastTouchNode() {
            g(this.lastTouchNode) && this.lastTouchNode.parent == this.lastTouchNodeContainer && this.lastTouchNode.destroy()
        }
        storeLastTouchNode(t) {
            this.removeLastTouchNode(), this.lastTouchNode = t
        }
    }).prototype, "itemPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), J = e(Y.prototype, "spacing", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new q
        }
    }), K = e(Y.prototype, "flow", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Q
        }
    }), W = e(Y.prototype, "empty", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = Y)) || U));
    o._RF.pop()
}
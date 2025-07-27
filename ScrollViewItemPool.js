import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var p, d, y, _, f, w;
    i._RF.push({}, "54ccdkSA6lEa4y7g5LknWpy", "ScrollViewItemPool", void 0);
    const {
        ccclass: P,
        property: V
    } = r;
    t("default", (p = V(n), d = V(l), P((f = e((_ = class extends s {
        constructor(...t) {
            super(...t), o(this, "scrollView", f, this), o(this, "itemPrefab", w, this), this._itemPool = new c, this._lastItemCount = 0, this._scrollViewContentLayout = null
        }
        init(t) {
            const {
                itemCount: e,
                anchorX: o,
                anchorY: i,
                initialX: n
            } = t;
            if (this._lastItemCount !== e) {
                this.clear(), this._lastItemCount = e;
                for (let t = 0; t < e; t++) {
                    const t = this._createItemNodeFromPool(o, i, n);
                    this.scrollView.content.addChild(t)
                }
                if (this._scrollViewContentLayout || (this._scrollViewContentLayout = this.scrollView.content.getComponent(a)), this._scrollViewContentLayout) {
                    const t = this._scrollViewContentLayout.node;
                    t.active = !1, this._scrollViewContentLayout.updateLayout(), t.active = !0
                }
            }
        }
        getItems() {
            return this.scrollView.content.children.filter((t => t.active))
        }
        clear() {
            if (!this.scrollView) return;
            this._lastItemCount = 0;
            const t = this.scrollView.content.children;
            t.length && (t.forEach(this._recycleItemNodeToPool.bind(this)), this.scrollView.content.destroyAllChildren(), this.scrollView.content.getComponent(h).height = 0)
        }
        onDestroy() {
            this._itemPool.clear()
        }
        _createItemNodeFromPool(t = 0, e = 1, o = 0) {
            const i = this._itemPool;
            let n = i.size() > 0 ? i.get() : u(this.itemPrefab);
            return n.getComponent(h).setAnchorPoint(t, e), n.setPosition(m(o, n.position.y, n.position.z)), n
        }
        _recycleItemNodeToPool(t) {
            this._itemPool.put(t)
        }
    }).prototype, "scrollView", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(_.prototype, "itemPrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = _)) || y));
    i._RF.pop()
}
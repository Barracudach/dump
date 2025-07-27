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
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./Enum.js";
import * as f from "./CustomScrollViewItem.js";

function main() {
    var C, y, w, P, v, b, _;
    n._RF.push({}, "f40463+EgJLSoUegk8FiKr7", "CustomScrollView", void 0);
    const {
        ccclass: T,
        property: D
    } = r;
    t("default", (C = D(o), y = D(s), T((v = e((P = class extends l {
        constructor(...t) {
            super(...t), i(this, "displayBuffer", v, this), i(this, "viewMask", b, this), i(this, "loadPrefab", _, this), this.initPos = void 0, this._dataList = []
        }
        get itemToBeDisplay() {
            return h(this.loadPrefab) && h(this.viewMask) ? this.vertical ? Math.ceil(this.viewMask.node.getComponent(a).height / this.loadPrefab.data.height) : this.horizontal ? Math.ceil(this.viewMask.node.getComponent(a).width / this.loadPrefab.data.width) : 0 : 0
        }
        get maxChildrenCount() {
            return this.itemToBeDisplay + 2 * this.displayBuffer
        }
        onLoad() {
            if (this.inertia = !1, !this.scrollEvents.find((t => "onScrollEvent" == t.handler))) {
                let t = new c.EventHandler;
                t.target = this.node, t.component = "CustomScrollView", t.handler = "onScrollEvent", this.scrollEvents.push(t)
            }
            this.initPos = this.content.position
        }
        updateList(t) {
            this._dataList = t, this.content.children.forEach((t => {
                let e = this._dataList[t.getComponent(a).priority];
                t.getComponent(f).setData(e)
            }))
        }
        loadItem(t, e) {
            this._dataList = t;
            let i = t.length;
            if (i < this.content.children.length) {
                let t = this.content.children.length - i;
                this.content.children.slice(0, t).forEach((t => {
                    t.removeFromParent(), t.destroy()
                }))
            }
            for (let n = 0; n < i && n < this.maxChildrenCount; n++) {
                let i = n < this.content.children.length ? this.content.children[n] : p(this.loadPrefab);
                n >= this.content.children.length && e && e(i, n), i.parent = this.content, i.setSiblingIndex(n), i.getComponent(f).setData(t[n])
            }
            this.resetContentPosition()
        }
        onScrollEvent(t, e, i) {
            switch (e) {
                case m.SCROLLING:
                    let e, i = null,
                        n = 0,
                        o = t.content.children[0],
                        s = t.content.children[this.content.children.length - 1];
                    if (!o || !s) break;
                    let r = t.content.getComponent(d);
                    this.vertical ? r.verticalDirection == d.VerticalDirection.TOP_TO_BOTTOM ? t.content.position.y > this.initPos.y + o.getComponent(a).height * this.displayBuffer ? (i = o, n = s.getComponent(a).priority + 1, e = new g(0, -o.getComponent(a).height)) : t.content.position.y < this.initPos.y && (i = s, n = o.getComponent(a).priority - 1, e = new g(0, s.getComponent(a).height)) : r.verticalDirection == d.VerticalDirection.BOTTOM_TO_TOP && (t.content.position.y > this.initPos.y + o.getComponent(a).height * this.displayBuffer ? (i = s, n = o.getComponent(a).priority - 1, e = new g(0, -s.getComponent(a).height)) : t.content.position.y < this.initPos.y && (i = o, n = s.getComponent(a).priority + 1, e = new g(0, o.getComponent(a).height))) : this.horizontal && (r.horizontalDirection == d.HorizontalDirection.LEFT_TO_RIGHT ? t.content.position.x < this.initPos.x - o.getComponent(a).width * this.displayBuffer ? (i = o, n = s.getComponent(a).priority + 1, e = new g(o.getComponent(a).width, 0)) : t.content.position.x > this.initPos.x && (i = s, n = o.getComponent(a).priority - 1, e = new g(-s.getComponent(a).width, 0)) : r.horizontalDirection == d.HorizontalDirection.RIGHT_TO_LEFT && (t.content.position.x < this.initPos.x - o.getComponent(a).width * this.displayBuffer ? (i = s, n = o.getComponent(a).priority - 1, e = new g(s.getComponent(a).width, 0)) : t.content.position.x > this.initPos.x && (i = o, n = s.getComponent(a).priority + 1, e = new g(-o.getComponent(a).width, 0)))), h(i) && n >= 0 && n < this._dataList.length && (i.getComponent(f).setData(this._dataList[n]), i.setSiblingIndex(n), t.setContentPosition(t.content.position.add(new u(e.x, e.y))))
            }
        }
        resetScrollView() {
            this.content.destroyAllChildren(), this._dataList = []
        }
        resetContentPosition() {
            h(this.initPos) && this.content.setPosition(this.initPos)
        }
    }).prototype, "displayBuffer", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), b = e(P.prototype, "viewMask", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(P.prototype, "loadPrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = P)) || w));
    n._RF.pop()
}
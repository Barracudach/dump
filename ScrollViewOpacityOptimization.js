import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./Enum.js";

function main() {
    var p;
    e._RF.push({}, "0017bbXs7pHypE6pJcs0YIc", "ScrollViewOpacityOptimization", void 0);
    const {
        ccclass: w,
        property: _,
        requireComponent: d
    } = h;
    t("ScrollViewOpacityOptimization", w("ScrollViewOpacityOptimization")(p = d(i)(p = class extends o {
        constructor(...t) {
            super(...t), this._scrollView = null, this._viewSize = null
        }
        onLoad() {
            if (this._scrollView = this.getComponent(i), this._viewSize = this._scrollView.getComponent(i).node.getContentSize(), !this._scrollView.scrollEvents.find((t => "onScrollEvent" == t.handler))) {
                let t = new o.EventHandler;
                t.target = this.node, t.component = "ScrollViewOpacityOptimization", t.handler = "onScrollEvent", this._scrollView.scrollEvents.push(t)
            }
            this._scrollView.content.on(n.SIZE_CHANGED, this.reloadItemsOpacity, this)
        }
        onDestroy() {
            s(this._scrollView) && s(this._scrollView.content) && this._scrollView.content.off(n.SIZE_CHANGED, this.reloadItemsOpacity, this)
        }
        reloadItemsOpacity() {
            var t = c(-this._viewSize.width / 2, -this._scrollView.content.position.y - this._viewSize.height, this._viewSize.width, this._viewSize.height);
            for (let e = 0; e < this._scrollView.content.children.length; e++) {
                const i = this._scrollView.content.children[e],
                    o = i.getComponent(l) ?? i.addComponent(l);
                t.intersects(i.getComponent(r).getBoundingBox()) ? o.opacity = 255 : o.opacity = 0
            }
        }
        onScrollEvent(t, e, i) {
            switch (e) {
                case a.SCROLLING:
                    this.reloadItemsOpacity()
            }
        }
    }) || p) || p);
    e._RF.pop()
}
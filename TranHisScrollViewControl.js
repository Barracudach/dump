import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./TranHisTuplePrefab.js";
import * as p from "./NestableScrollView_Inner_ts.js";
import * as u from "./NodePage.js";
import * as c from "./NodeTools.js";

function main() {
    var g, d, f, b, y, P, w, m;
    s._RF.push({}, "c2620ryhCBLiqxZGpqg1qXa", "TranHisScrollViewControl", void 0);
    const {
        ccclass: H,
        property: _
    } = l;
    t("TranHisScrollViewControl1", (g = _(n), d = _(p), f = _(o), H((P = e((y = class extends r {
        constructor(...t) {
            super(...t), i(this, "tuplePrefab", P, this), i(this, "scrollView", w, this), i(this, "emptyMessage", m, this), this._tupleHeight = 0, this.spawnNum = 12, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.dataList = []
        }
        start() {
            this._tupleHeight = this.tuplePrefab.data.height
        }
        update(t) {
            this.dataList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, s) {
            let n = i.content.position.y < s,
                o = (this._tupleHeight + this.spacing) * e.length;
            for (let s = 0; s < e.length; s++) {
                let l = u.getPositionInView(e[s], i.node);
                if (n) {
                    if (l.y < -this.bufferZone && e[s].position.y + o < 0) {
                        e[s].setPosition(e[s].position.x, e[s].position.y + o);
                        let i = e[s].getComponent(h),
                            n = i._tupleId - e.length;
                        i.setInfo(t[n], n)
                    }
                } else if (l.y > this.bufferZone && e[s].position.y - o > -c.getNodeHeight(i.content)) {
                    e[s].setPosition(e[s].position.x, e[s].position.y - o);
                    let i = e[s].getComponent(h),
                        n = i._tupleId + e.length;
                    i.setInfo(t[n], n)
                }
            }
            return i.content.position.y
        }
        addList(t) {
            if (this._tupleHeight <= 0 && (this._tupleHeight = this.tuplePrefab.data.height), this.dataList = t, c.setNodeHeight(this.scrollView.content, Math.max(0, (this._tupleHeight + this.spacing) * this.dataList.length - this.spacing)), this.scrollView.content.setPosition(this.scrollView.content.position.x, c.getNodeHeight(this.scrollView.content.parent) / 2), this.bufferZone = .7 * c.getNodeHeight(this.scrollView.node), t.length < 1) return void(this.emptyMessage.active = !0);
            let e;
            this.emptyMessage.active = !1;
            for (let t = 0; t < this.spawnNum && t < this.dataList.length; t++) e = a(this.tuplePrefab), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + t) - this.spacing * t), e.getComponent(h).setInfo(this.dataList[t], t), this.tuples.push(e)
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
    }).prototype, "tuplePrefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(y.prototype, "scrollView", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(y.prototype, "emptyMessage", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = y)) || b));
    s._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
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
import * as g from "./NodePage.js";

function main() {
    var d, m, f, w, I, P, y, T;
    s._RF.push({}, "c3302h6XuVEf7Q/ZSv9hSVK", "ItemScrollHelper", void 0);
    const {
        ccclass: V,
        property: b
    } = l;
    t("ItemScrollHelper", (d = b(n), m = b(o), f = b(h), V((P = e((I = class extends p {
        constructor(...t) {
            super(...t), i(this, "scrollView", P, this), i(this, "itemPrefab", y, this), i(this, "emptyMessage", T, this), this.updateTimer = 0, this.updateInterval = .2, this.lastContentPosY = 0, this.bufferZone = 0, this._tupleHeight = 0, this.spacing = 0, this.spawnNum = 10, this.dataList = [], this.tuples = [], this.tuplePool = new a, this.setItemInfoFunc = void 0, this.itemScriptName = "", this._enableUpdate = !0, this.padSum = 0, this.padList = []
        }
        onDestroy() {
            this.tuplePool.clear()
        }
        onLoad() {}
        initParams() {
            this._tupleHeight = this.itemPrefab.data.height, this.bufferZone = .5 * this.scrollView.node.getComponent(r).height + 1.5 * this._tupleHeight, this.spawnNum = Math.ceil(this.scrollView.node.getComponent(r).height / (this._tupleHeight + this.spacing)) + 3
        }
        start() {
            this.scrollView.node.on(h.EventType.SIZE_CHANGED, (() => {
                this.bufferZone = .5 * this.scrollView.node.getComponent(r).height + 1.5 * this._tupleHeight, this.spawnNum = Math.ceil(this.scrollView.node.getComponent(r).height / (this._tupleHeight + this.spacing)) + 3
            }))
        }
        update(t) {
            this.dataList.length < 1 || !this._enableUpdate || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, s) {
            let n = i.content.position.y < s,
                o = (this._tupleHeight + this.spacing) * e.length;
            const h = this.bufferZone;
            for (let s = 0; s < e.length; s++) {
                let l = g.getPositionInView(e[s], i.node);
                if (n) {
                    if (l.y < -h && e[s].position.y + o < 0) {
                        let i = e[s].getComponent(this.itemScriptName),
                            n = this.getTupleId(i) - e.length;
                        n >= 0 && (this.setItemInfoFunc(i, t[n], n), e[s].position = new u(e[s].position.x, -this._tupleHeight * (.5 + n) - this.spacing * n - this.getTuplePadding(n), e[s].position.z))
                    }
                } else if (l.y > h && e[s].position.y - o > -i.content.getComponent(r).height) {
                    let i = e[s].getComponent(this.itemScriptName),
                        n = this.getTupleId(i) + e.length;
                    n < t.length && (this.setItemInfoFunc(i, t[n], n), e[s].position = new u(e[s].position.x, -this._tupleHeight * (.5 + n) - this.spacing * n - this.getTuplePadding(n), e[s].position.z))
                }
            }
            return i.content.position.y
        }
        enableListUpdate(t = !0) {
            this._enableUpdate = t
        }
        addList(t, e) {
            let i;
            this.scrollView.content.getComponent(r).height = Math.max(e ? this.scrollView.node.getComponent(r).height : 0, (this._tupleHeight + this.spacing) * t.length - this.spacing + Math.max(0, this.padSum)), this.emptyMessage && (this.emptyMessage.active = t.length <= 0);
            const s = this.spawnNum;
            for (let e = 0; e < t.length && e < s; e++) {
                i = this.tuplePool.size() <= 0 ? c(this.itemPrefab) : this.tuplePool.get(), i.parent = this.scrollView.content;
                let s = this.getCorrectIdx(e, i, this.scrollView.content, t);
                i.setPosition(0, -this._tupleHeight * (.5 + s) - this.spacing * s - this.getTuplePadding(s)), this.setItemInfoFunc(i.getComponent(this.itemScriptName), t[s], s), this.tuples.push(i)
            }
        }
        updateListData(t) {
            this.dataList = t
        }
        updateList(t, e = !0, i = !1) {
            this.updateListData(t), this.recycleTuples(), e && (this.scrollView.content.position = new u(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(r).height * (1 - this.scrollView.content.parent.getComponent(r).anchorY), this.scrollView.content.position.z), this.scrollView.scrollToTop(.01)), this.addList(t, i)
        }
        refreshList(t) {
            this.updateListData(t), this.tuples.forEach((e => {
                let i = e.getComponent(this.itemScriptName),
                    s = this.getTupleId(i);
                this.setItemInfoFunc(i, t[s], s)
            }))
        }
        recycleTuples() {
            for (; this.tuples.length > 0;) this.tuplePool.put(this.tuples.pop())
        }
        removeTuples() {
            this.tuples = [], this.scrollView.content.destroyAllChildren(), this.tuplePool.clear()
        }
        removeList() {
            this.dataList = [], this.removeTuples()
        }
        setUpTupleHeight(t) {
            this._tupleHeight = t
        }
        setUpItem(t, e, i) {
            this.initParams(), this.itemScriptName = e, this.setItemInfoFunc = i
        }
        setSpacing(t = 0) {
            this.spacing = t
        }
        setTuplePadding(t, e = []) {
            this.padSum = t, this.padList = e
        }
        getTuplePadding(t) {
            return t >= 0 && t < this.padList.length ? this.padList[t] : 0
        }
        getCorrectIdx(t, e, i, s) {
            const n = this.spawnNum;
            if (s.length > n) {
                let o = Math.floor((i.position.y - i.parent.getComponent(r).height / 2) / (e.getComponent(r).height + this.spacing));
                if (t < o) {
                    let e = Math.floor((s.length - t - 1) / n),
                        i = Math.ceil((o - t - 1) / n);
                    i = Math.min(e, i), t += i * this.spawnNum
                }
            }
            return t
        }
        getTupleId(t) {
            return null != t._tupleId ? t._tupleId : null != t.tupleId ? t.tupleId : 0
        }
    }).prototype, "scrollView", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(I.prototype, "itemPrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(I.prototype, "emptyMessage", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = I)) || w));
    s._RF.pop()
}
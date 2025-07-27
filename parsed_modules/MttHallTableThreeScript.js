import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./PageThreeTableTuple.js";
import * as c from "./NodePage.js";
import * as g from "./PageThreeTableTuplePkw.js";
import * as f from "./ScrollItem.js";

function main() {
    var b, T, m, d, w, I, P, L;
    i._RF.push({}, "56085wN/7JOJbGrMesk95CA", "MttHallTableThreeScript", void 0);
    const {
        ccclass: V,
        property: y
    } = n;
    t("MttHallTableThreeScript", (b = y(l), T = y(f), m = y(o), V((I = e((w = class extends h {
        constructor(...t) {
            super(...t), s(this, "scrollView", I, this), s(this, "scrollItem", P, this), s(this, "tuplePrefab", L, this), this.spawnNum = 15, this.spacing = 0, this.tupleHeight = 0, this.tuples = [], this.tableList = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.pageActive = !1
        }
        onLoad() {
            this.tupleHeight = this.tuplePrefab.data.height, this.initScrollView()
        }
        initScrollView() {
            this.scrollItem && this.scrollItem.setItemFunc(0, ((t, e) => {
                this.getTupleComponent(t).setInfo(e, Number(t.name))
            }))
        }
        update(t) {
            if (!1 !== this.pageActive && !this.scrollItem && (this.updateTimer += t, 0 == this.bufferZone && (this.bufferZone = .5 * this.scrollView.node.getComponent(r).height + 1.5 * this.tupleHeight), this.updateTimer > this.updateInterval)) {
                this.updateTimer = 0;
                let t = this.scrollView.content.position.y < this.lastContentPosY,
                    e = (this.tupleHeight + this.spacing) * this.tuples.length;
                for (let s = 0; s < this.tuples.length; s++) {
                    let i, l = c.getPositionInView(this.tuples[s], this.scrollView.node);
                    if (t) {
                        if (l.y < -this.bufferZone && this.tuples[s].position.y + e < 0) {
                            let t = this.getTupleComponent(this.tuples[s]);
                            for (i = t.tupleId; l.y < -this.bufferZone && this.tuples[s].position.y + e < 0;) this.tuples[s].position = new p(this.tuples[s].position.x, this.tuples[s].position.y + e, this.tuples[s].position.z), i -= this.tuples.length, l = c.getPositionInView(this.tuples[s], this.scrollView.node);
                            t.setInfo(this.tableList[i], i)
                        }
                    } else if (l.y > this.bufferZone && this.tuples[s].position.y - e > -this.scrollView.content.getComponent(r).height) {
                        let t = this.getTupleComponent(this.tuples[s]);
                        for (i = t.tupleId; l.y > this.bufferZone && this.tuples[s].position.y - e > -this.scrollView.content.getComponent(r).height;) this.tuples[s].position = new p(this.tuples[s].position.x, this.tuples[s].position.y - e, this.tuples[s].position.z), i += this.tuples.length, l = c.getPositionInView(this.tuples[s], this.scrollView.node);
                        t.setInfo(this.tableList[i], i)
                    }
                }
                this.lastContentPosY = this.scrollView.content.position.y
            }
        }
        sortList(t) {
            return t.sort(((t, e) => t.TableId - e.TableId))
        }
        addTuples(t, e = !1) {
            this.tupleHeight = null != this.tuplePrefab ? this.tuplePrefab.data.height : 0;
            let s, i = this.scrollView.getScrollOffset();
            this.tableList = t, this.setNoTableContent(this.tableList.length <= 0), this.tableList || (this.tableList = []), this.scrollView.content.getComponent(r).height = (this.tupleHeight + this.spacing) * this.tableList.length - this.spacing, this.bufferZone = 0;
            for (let t = 0; t < this.tableList.length && t < this.spawnNum; t++) s = u(this.tuplePrefab), s.parent = this.scrollView.content, this.setItemPosition(s, t), this.getTupleComponent(s).setInfo(this.tableList[t], t), this.tuples.push(s);
            e ? this.scrollView.scrollToTop() : this.scrollView.scrollToOffset(i)
        }
        removeTuples() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        updateTuples(t) {
            if (t.length != this.tableList.length) this.removeTuples(), this.tableList = this.sortList(t), this.addTuples(this.tableList);
            else {
                this.tableList = this.sortList(t);
                for (let t of this.tuples) {
                    let e = this.getTupleComponent(t);
                    e.setInfo(this.tableList[e.tupleId], e.tupleId)
                }
            }
        }
        setPage(t) {
            this.scrollItem ? (this.scrollItem.changeItemData(this.sortList(t), !1), this.setNoTableContent(t.length <= 0)) : this.scrollView.content.children.length < 1 ? (this.tableList = this.sortList(t), this.addTuples(this.tableList, !0)) : this.updateTuples(t)
        }
        resetPage() {
            this.removeTuples()
        }
        getTupleComponent(t) {
            return t.getComponent(a) || t.getComponent(g)
        }
        setItemPosition(t, e) {
            t.setPosition(0, -this.tupleHeight * (.5 + e) - this.spacing * e)
        }
        setNoTableContent(t) {}
    }).prototype, "scrollView", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(w.prototype, "scrollItem", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(w.prototype, "tuplePrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = w)) || d));
    i._RF.pop()
}
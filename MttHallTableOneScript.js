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
import * as c from "./PageOneTableTuple.js";
import * as a from "./NodePage.js";
import * as g from "./PageOneTableTuplePkw.js";
import * as f from "./ScrollItem.js";
import * as m from "./MttItemHelper.js";

function main() {
    var y, b, d, T, C, w, I, P;
    i._RF.push({}, "95fc34tLsRKQ5n/LYbf4wK5", "MttHallTableOneScript", void 0);
    const {
        ccclass: V,
        property: v
    } = o;
    t("MttHallTableOneScript", (y = v(l), b = v(f), d = v(n), V((w = e((C = class extends h {
        constructor(...t) {
            super(...t), s(this, "scrollView", w, this), s(this, "scrollItem", I, this), s(this, "tuplePrefab", P, this), this.spawnNum = 15, this.spacing = 0, this.tupleHeight = 0, this.tuples = [], this.tableList = [], this.prizeList = [], this.prizeMode = 0, this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this._baseToolPrize = !0, this.pageActive = !1, this.convertCurrency = !1, this.currency = null, this.DisplayCurrency = null, this.tournamentID = -1, this.customExchangeRate = null
        }
        onLoad() {
            this.tupleHeight = this.tuplePrefab.data.height, this.initScrollView()
        }
        initScrollView() {
            this.scrollItem && this.scrollItem.setItemFunc(0, ((t, e) => {
                let s = this.getTupleComponent(t);
                s.setInfo(e, Number(t.name), this.currency, this.DisplayCurrency, this.customExchangeRate), s.setConvertCurrency(this.convertCurrency)
            }))
        }
        update(t) {
            if (!1 !== this.pageActive && !this.scrollItem && (this.updateTimer += t, 0 == this.bufferZone && (this.bufferZone = .5 * this.scrollView.node.getComponent(r).height + 1.5 * this.tupleHeight), this.updateTimer > this.updateInterval)) {
                this.updateTimer = 0;
                let t = this.scrollView.content.position.y < this.lastContentPosY,
                    e = (this.tupleHeight + this.spacing) * this.tuples.length;
                for (let s = 0; s < this.tuples.length; s++) {
                    let i, l = a.getPositionInView(this.tuples[s], this.scrollView.node);
                    if (t) {
                        if (l.y < -this.bufferZone && this.tuples[s].position.y + e < 0) {
                            let t = this.getTupleComponent(this.tuples[s]);
                            for (i = t.tupleId; l.y < -this.bufferZone && this.tuples[s].position.y + e < 0;) this.tuples[s].position = new u(this.tuples[s].position.x, this.tuples[s].position.y + e, this.tuples[s].position.z), i -= this.tuples.length, l = a.getPositionInView(this.tuples[s], this.scrollView.node);
                            t.setInfo(this.tableList[i], i, this.currency, this.DisplayCurrency, this.customExchangeRate)
                        }
                    } else if (l.y > this.bufferZone && this.tuples[s].position.y - e > -this.scrollView.content.getComponent(r).height) {
                        let t = this.getTupleComponent(this.tuples[s]);
                        for (i = t.tupleId; l.y > this.bufferZone && this.tuples[s].position.y - e > -this.scrollView.content.getComponent(r).height;) this.tuples[s].position = new u(this.tuples[s].position.x, this.tuples[s].position.y - e, this.tuples[s].position.z), i += this.tuples.length, l = a.getPositionInView(this.tuples[s], this.scrollView.node);
                        t.setInfo(this.tableList[i], i, this.currency, this.DisplayCurrency, this.customExchangeRate)
                    }
                }
                this.lastContentPosY = this.scrollView.content.position.y
            }
        }
        setPage(t, e, s, i, l) {
            let n = this.tournamentID == e.TournamentId;
            this.tournamentID = e.TournamentId, this._baseToolPrize = e.BaseToolPrize, this.prizeMode = e.PrizeMode, this.currency = s, this.DisplayCurrency = i, this.customExchangeRate = l, m.getTools(e.PrizeTools, (o => {
                this.tableList = m.tidyUpTableList(e, t, o);
                let h = !this.tuples || this.tuples.length < 1;
                this.scrollItem ? this.scrollItem.changeItemData(this.tableList, !n) : this.tableList && t && this.tableList.length !== t.length || h ? (this.removeTuples(), this.addTuples(t, h, s, i, l)) : this.updateTuples(t, s, i, l)
            }))
        }
        resetPage() {
            this.removeTuples(), this.tournamentID = -1
        }
        updateTuples(t, e, s, i) {
            this.tableList = t, this.currency = e, this.DisplayCurrency = s, this.customExchangeRate = i;
            for (let t = 0; t < this.tuples.length; t++) {
                let l = this.getTupleComponent(this.tuples[t]);
                l.setInfo(this.tableList[l.tupleId], l.tupleId, e, s, i), l.setConvertCurrency(this.convertCurrency)
            }
        }
        addTuples(t, e = !1, s, i, l) {
            this.tupleHeight = null != this.tuplePrefab ? this.tuplePrefab.data.height : 0;
            let n, o = this.scrollView.getScrollOffset();
            this.tableList = t, this.currency = s, this.DisplayCurrency = i, this.customExchangeRate = l, this.tableList || (this.tableList = []), this.scrollView.content.getComponent(r).height = (this.tupleHeight + this.spacing) * this.tableList.length - this.spacing, this.bufferZone = 0;
            for (let t = 0; t < this.tableList.length && t < this.spawnNum; t++) {
                n = p(this.tuplePrefab), n.parent = this.scrollView.content, this.setItemPosition(n, t);
                let e = this.getTupleComponent(n);
                e.setInfo(this.tableList[t], t, s, i, l), e.setConvertCurrency(this.convertCurrency), this.tuples.push(n)
            }
            e ? this.scrollView.scrollToTop() : this.scrollView.scrollToOffset(o)
        }
        setItemPosition(t, e) {
            t.setPosition(0, -this.tupleHeight * (.5 + e) - this.spacing * e)
        }
        removeTuples() {
            var t;
            this.tuples = [], null == (t = this.scrollView) || t.content.destroyAllChildren()
        }
        getTupleComponent(t) {
            return t.getComponent(c) || t.getComponent(g)
        }
        setConvertCurrency(t) {
            this.convertCurrency = t;
            let e = this.scrollView.content.children,
                s = this.scrollView.content.children.length;
            for (let i = 0; i < s; i++) this.getTupleComponent(e[i]).setConvertCurrency(t)
        }
    }).prototype, "scrollView", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(C.prototype, "scrollItem", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(C.prototype, "tuplePrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = C)) || T));
    i._RF.pop()
}
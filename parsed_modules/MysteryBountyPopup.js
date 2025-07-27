import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./MysteryBountyIntroItem.js";
import * as f from "./MysteryBountyPopupItem.js";

function main() {
    var P, B, b, C, d, z, M, w, v, A, T, V;
    s._RF.push({}, "19ed1hEbyBPlaE0fb0vKnzz", "MysteryBountyPopup", void 0);
    const {
        ccclass: D,
        property: L
    } = a;
    t("default", (P = L(n), B = L(o), b = L(r), C = L(l), d = L(u), D((w = e((M = class extends y {
        constructor(...t) {
            super(...t), i(this, "scrollView", w, this), i(this, "tuplePrefab", v, this), i(this, "closeBtn", A, this), i(this, "Animator", T, this), i(this, "totalBounty", V, this), this.tuplePool = new p, this.dataList = [], this.tuples = [], this.mysteryBountyMain = null, this.isShowing = !1
        }
        start() {
            console.log(this.dataList)
        }
        show(t) {
            if (this.mysteryBountyMain = t, this.tuples && this.tuples.length > 0) {
                let t = 0;
                for (var e = 0; e < this.tuples.length; e++) {
                    var i;
                    e % 2 == 0 && (t += .2), null == (i = this.mysteryBountyMain) || i.playAnimationWithDelay(this.tuples[e], t)
                }
            }
        }
        clear() {
            this.tuples.forEach((t => {
                this.recycleTuple(t)
            })), this.tuples = []
        }
        onDestroy() {
            this.tuplePool.clear()
        }
        setTotalPrize(t) {
            console.log("this.isIntro setTotalPrize:" + t), this.totalBounty.string = t
        }
        setIntroPrizeList(t, e) {
            this.mysteryBountyMain = e, console.log("MysteryBountyPopup setIntroPrizeList", t);
            let i = t.tierArr,
                s = t.chestTypeArr,
                n = t.qtyArr;
            for (var o = 0; o < i.length; o++) {
                let e = this.getTuple();
                if (t.chestTypeArr[o] && e.getComponent(m).setChest(s[o]), e.getComponent(m).setQty(n[o]), i[o]) {
                    let t = this.mysteryBountyMain.GetDisplayCurrency(i[o]);
                    e.getComponent(m).setPrizeValue(t)
                } else {
                    var r;
                    let t = this.mysteryBountyMain.GetDisplayCurrency(0);
                    null == (r = e.getComponent(m)) || r.setPrizeValue(t)
                }
                this.tuples.push(e), this.scrollView.content.addChild(e)
            }
        }
        setPrizeList(t, e) {
            this.isShowing = !0, this.mysteryBountyMain = e, console.log("MysteryBountyPopup setPrizeList", t);
            let i = t.tierArr,
                s = t.chestTypeArr,
                n = t.qtyArr,
                o = t.hitArr;
            for (var r = 0; r < i.length; r++) {
                let t = this.getTuple();
                if (s[r] && t.getComponent(f).setChest(s[r]), n[r]) {
                    let e = `${n[r]-o[r]}/${n[r]}`;
                    t.getComponent(f).setQty(e), o[r] == n[r] && t.getComponent(f).setChest("grey")
                }
                if (i[r]) {
                    let e = this.mysteryBountyMain.GetDisplayCurrency(i[r]);
                    t.getComponent(f).setPrizeValue(e)
                } else {
                    var l;
                    let e = this.mysteryBountyMain.GetDisplayCurrency(0);
                    null == (l = t.getComponent(f)) || l.setPrizeValue(e)
                }
                this.tuples.push(t), this.scrollView.content.addChild(t)
            }
        }
        onClickClose() {
            var t = h().call((() => {
                    this.Animator.play("MysteryBounty_PopUpUI_Close")
                })),
                e = h().delay(.5),
                i = h().call((() => {
                    this.Animator.stop(), this.clear(), this.isShowing = !1, this.node.active = !1
                }));
            h(this.node).sequence(t, e, i).start()
        }
        getTuple() {
            let t = this.tuplePool.get();
            return c(t) || (t = g(this.tuplePrefab)), t.active = !0, t
        }
        recycleTuple(t) {
            t.getComponent(f).reset(), t.active = !1, this.tuplePool.put(t)
        }
    }).prototype, "scrollView", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(M.prototype, "tuplePrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(M.prototype, "closeBtn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(M.prototype, "Animator", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(M.prototype, "totalBounty", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = M)) || z));
    s._RF.pop()
}
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";

function main() {
    var p;
    t._RF.push({}, "733b388qLVOa6uEkVlx7nFu", "TablePositionContainerHandler", void 0);
    const g = 160;
    class u {
        constructor() {
            this.seatNodes = void 0, this.dealIconsNodes = void 0, this.chipsNodes = void 0, this.seatNodes = new Map, this.dealIconsNodes = new Map, this.chipsNodes = new Map
        }
        setSeatNode(e, t) {
            return this.seatNodes[e] = t
        }
        setDealIconNode(e, t) {
            return this.dealIconsNodes[e] = t
        }
        setChipsNode(e, t) {
            return this.chipsNodes[e] = t
        }
        getSeatNode(e) {
            return this.seatNodes[e]
        }
        getDealIconNode(e) {
            return this.dealIconsNodes[e]
        }
        getChipsNode(e) {
            return this.chipsNodes[e]
        }
    }
    const {
        ccclass: N
    } = d;
    e("default", N(p = class extends n {
        constructor(...e) {
            super(...e), this.tables = void 0, this.distanceAtSeat0 = void 0
        }
        onLoad() {
            this.init()
        }
        init() {
            var e;
            if (this.tables) return;
            let t = null == (e = o.scenes) ? void 0 : e.get(this.node.scene.windowID),
                n = t ? t.visibleRect.width : i.getVisibleSize().width;
            this.tables = new Map, this.distanceAtSeat0 = new Map;
            let l = this.node.children.length;
            for (let e = 0; e < l; e++) {
                const t = this.node.children[e];
                let o = new u,
                    i = t.children[0].children,
                    l = [];
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    if (h.appConfig.isLandscapeLayout) {
                        let o = t.getComponent(s).convertToWorldSpaceAR(new r(r.ZERO));
                        o.x - g < 0 ? l[e] = g - o.x : o.x + g > n ? l[e] = n - g - o.x : l[e] = 0, this.translateNode(t, l[e])
                    }
                    o.setSeatNode(e, t)
                }
                let c = t.children[1].children;
                for (let e = 0; e < c.length; e++) {
                    let t = c[e];
                    h.appConfig.isLandscapeLayout && this.translateNode(t, l[e]), o.setDealIconNode(e, t)
                }
                let d = t.children[2].children;
                for (let t = 0; t < d.length; t++) {
                    let n = d[t];
                    h.appConfig.isLandscapeLayout && this.translateNode(n, l[t]), o.setChipsNode(t, n);
                    let i = o.getSeatNode(t);
                    if (0 == t) {
                        let t = n.convertToWorldSpaceAR(a(0, 0, 0)),
                            o = i.convertToWorldSpaceAR(a(0, 0, 0)),
                            s = t.subtract(o);
                        this.distanceAtSeat0[e + 2] = s
                    }
                }
                this.tables[e + 2] = o
            }
        }
        translateNode(e, t, n = 0) {
            let o = e.getComponent(l);
            o && o.enabled ? (o.isAlignLeft ? o.left += t : o.isAlignRight ? o.right -= t : o.isAlignHorizontalCenter && (o.horizontalCenter += t), o.isAlignTop ? o.top -= n : o.isAlignBottom ? o.bottom += n : o.isAlignHorizontalCenter && (o.verticalCenter += n), o.updateAlignment()) : e.setPosition(e.position.x + t, e.position.y + n)
        }
        getLocalPosition(e, t) {
            let n = e.getComponent(s).convertToWorldSpaceAR(new r(r.ZERO));
            return t.getComponent(s).convertToNodeSpaceAR(n)
        }
        getSeatPosition(e, t, n = !0) {
            this.init();
            let o = this.tables[e];
            if (o) {
                let e = o.getSeatNode(t);
                if (e) return n ? e.getComponent(s).convertToWorldSpaceAR(new r(r.ZERO)) : new r(e.position.x, e.position.y)
            }
            return new r(r.ZERO)
        }
        getDealIconPosition(e, t, n = !0) {
            this.init();
            let o = this.tables[e];
            if (o) {
                let e = o.getDealIconNode(t);
                if (e) return n ? e.getComponent(s).convertToWorldSpaceAR(new r(r.ZERO)) : new r(e.position.x, e.position.y)
            }
            return new r(r.ZERO)
        }
        getChipsPosition(e, t, n = !0) {
            this.init();
            let o = this.tables[e];
            if (o) {
                let e = o.getChipsNode(t);
                if (e) return n ? e.getComponent(s).convertToWorldSpaceAR(new r(r.ZERO)) : new r(e.position.x, e.position.y)
            }
            return new r(r.ZERO)
        }
        getChipsAnchorPoint(e, t) {
            this.init();
            let n = this.tables[e];
            if (n) {
                let e = n.getChipsNode(t);
                if (e) return e.getComponent(s).anchorPoint
            }
            return new c(c.ZERO)
        }
        getDistanceAtSeat0(e) {
            this.init();
            let t = this.distanceAtSeat0[e];
            return t || c.ZERO
        }
    }) || p);
    t._RF.pop()
}
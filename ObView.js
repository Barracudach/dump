import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as h from "./ObItem.js";
import * as g from "./CircleSprite.js";

function main() {
    var u, C, b, I;
    o._RF.push({}, "d5ad53ds4xD373udVvXAf39", "ObView", void 0);
    const {
        ccclass: f,
        property: P
    } = r;
    e("ObView", (u = P(i), f((I = t((b = class extends a {
        constructor(...e) {
            super(...e), this.obplayers = [], this.m_PkObplayers = [], this.itemList = [], n(this, "ObItemPrefab", I, this)
        }
        onLoad() {}
        createItem(e) {
            if (e < this.itemList.length) return this.itemList[e].active = !0, this.itemList[e];
            let t = l(this.ObItemPrefab);
            return this.node.addChild(t), this.itemList.push(t), t
        }
        hideInvaliedItem(e) {
            for (let t = 0; t < this.itemList.length; t++) t >= e && (this.itemList[t].active = !1)
        }
        setData(e) {
            this.m_PkObplayers = e;
            var t = e.length,
                n = (this.node.getComponent(s).height, Math.ceil(t / 4));
            for (let o = 1; o < t + 1; o++) {
                let t = this.createItem(o - 1),
                    i = (o - 1) % 4 * t.getComponent(s).width,
                    r = (n - Math.ceil(o / 4)) * t.getComponent(s).height;
                t.setPosition(i, r);
                let a = e[o - 1];
                t.getComponent(h).playerId = a.playerid, t.getComponent(h).obPlayerData = a, console.log(t.getComponent(h).roleName);
                let l = c.dataHandler.getUserData().getRemarkData(e[o - 1].playerid),
                    u = null != l.sRemark && 0 != l.sRemark.length ? l.sRemark : e[o - 1].name;
                c.StringTools.setShrinkString(t.getComponent(h).roleName.node, u, !0), a.playerid == c.dataHandler.getUserData().u32Uid ? 0 == a.headPath.length ? g.setCircleSprite(t.getComponent(h).roleImg.node, c.dataHandler.getUserData().HeadPath) : g.setCircleSprite(t.getComponent(h).roleImg.node, a.headPath, a.plat) : "" == a.headPath ? g.setCircleSprite(t.getComponent(h).roleImg.node) : g.setCircleSprite(t.getComponent(h).roleImg.node, a.headPath, a.plat), a.isInroom ? (t.getComponent(h).roleName.node.getComponent(m).color = new d(d.WHITE), t.getComponent(h).black_img.node.active = !1) : (t.getComponent(h).black_img.node.active = !0, t.getComponent(h).black_img.node.setSiblingIndex(100), t.getComponent(h).roleName.node.getComponent(m).color = p(80, 80, 80))
            }
            this.hideInvaliedItem(t)
        }
    }).prototype, "ObItemPrefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = b)) || C));
    o._RF.pop()
}
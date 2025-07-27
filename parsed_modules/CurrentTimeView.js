import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as u from "./CurrentTimeItem.js";
import * as g from "./GameSceneInstance.js";

function main() {
    var p, C, h, T, y, _;
    o._RF.push({}, "b2e3d+tXIZB74wo/JC0jo8B", "CurrentTimeView", void 0);
    const {
        ccclass: I,
        property: S
    } = a;
    e("CurrentTimeView", (p = S(r), C = g("GameDataInstance"), I((y = t((T = class extends i {
        constructor(...e) {
            super(...e), this._datas = [], n(this, "CurrentTimeItem", y, this), n(this, "gameDataInstance", _, this)
        }
        setData(e, t, n) {
            this.gameDataInstance.tRoomData.isZoom();
            this.node.destroyAllChildren(), this.node.removeAllChildren(), this._datas = e;
            var o = this._datas.length,
                r = this.node.getComponent(s).height;
            for (let e = 0; e < o; ++e) {
                let n = l(this.CurrentTimeItem);
                n.setPosition(n.position.x, r - 60 - 75 * e);
                let o = c.dataHandler.getUserData().getRemarkData(this._datas[e].playerid),
                    a = null != o.sRemark && 0 != o.sRemark.length ? o.sRemark : this._datas[e].playername;
                n.getComponent(u).dairu.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(this._datas[e].total_buyin)), n.getComponent(u).dairu.node.setPosition(t, n.getComponent(u).dairu.node.getPosition().y);
                let i = this._datas[e].HandCount || 0;
                n.getComponent(u).handCount.string = i.toString(), c.StringTools.setShrinkString(n.getComponent(u).yourname.node, a), this._datas[e].curr_record > 0 ? n.getComponent(u).score.string = "+" + c.StringTools.numberToString(c.StringTools.clientGoldByServer(this._datas[e].curr_record)) : n.getComponent(u).score.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(this._datas[e].curr_record)), null == this.gameDataInstance.tRoomData.GetTablePlayer(this._datas[e].playerid) ? (n.getComponent(u).yourname.node.getComponent(d).color = new m(110, 110, 110), n.getComponent(u).dairu.node.getComponent(d).color = new m(110, 110, 110), n.getComponent(u).score.node.getComponent(d).color = new m(110, 110, 110)) : (n.getComponent(u).yourname.node.getComponent(d).color = new m(m.WHITE), n.getComponent(u).dairu.node.getComponent(d).color = new m(m.WHITE), n.getComponent(u).score.node.getComponent(d).color = new m(m.WHITE)), this._datas[e].playerid, c.dataHandler.getUserData().u32Uid, this.node.addChild(n)
            }
        }
    }).prototype, "CurrentTimeItem", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(T.prototype, "gameDataInstance", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = T)) || h));
    o._RF.pop()
}
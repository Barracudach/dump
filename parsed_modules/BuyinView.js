import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as g from "./GameSceneInstance.js";
import * as p from "./CurrentTimeItem.js";

function main() {
    var C, h, y, I;
    o._RF.push({}, "18b30cChv9AhaVDY4GOv9Fc", "BuyinView", void 0);
    const {
        ccclass: T,
        property: f
    } = i;
    e("BuyinView", (C = f(r), T((I = t((y = class extends a {
        constructor(...e) {
            super(...e), this._datas = [], n(this, "CurrentTimeItem", I, this)
        }
        setData() {
            this.node.removeAllChildren();
            const e = g.getInstanceGameData(null == this ? void 0 : this.node);
            this._datas = e.tRoomData.buyinInfos;
            var t = this._datas.length;
            this.node.getComponent(s).height;
            for (let n = 0; n < t; ++n) {
                let t = l(this.CurrentTimeItem);
                t.setPosition(t.position.x - 70, -120 - 75 * n);
                let o = c.dataHandler.getUserData().getRemarkData(this._datas[n].playerid);
                "" == o.sRemark ? t.getComponent(p).yourname.getComponent(m).string = this._datas[n].playername : t.getComponent(p).yourname.getComponent(m).string = o.sRemark, t.getComponent(p).handCount.string = this._datas[n].HandCount.toString(), t.getComponent(p).dairu.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(this._datas[n].buyin_limit)), t.getComponent(p).score.string = c.StringTools.numberToString(c.StringTools.clientGoldByServer(this._datas[n].total_buyin)), g.getInstanceGameId(null == this ? void 0 : this.node), c.Enum.GameId.Allin, null == e.tRoomData.GetTablePlayer(this._datas[n].playerid) ? (t.getComponent(p).yourname.node.getComponent(d).color = new u(110, 110, 110), t.getComponent(p).dairu.node.getComponent(d).color = new u(110, 110, 110), t.getComponent(p).score.node.getComponent(d).color = new u(110, 110, 110), t.getComponent(p).handCount.node.getComponent(d).color = new u(110, 110, 110)) : (t.getComponent(p).yourname.node.getComponent(d).color = new u(u.WHITE), t.getComponent(p).dairu.node.getComponent(d).color = new u(u.WHITE), t.getComponent(p).score.node.getComponent(d).color = new u(u.WHITE), t.getComponent(p).handCount.node.getComponent(d).color = new u(u.WHITE)), this.node.addChild(t)
            }
        }
    }).prototype, "CurrentTimeItem", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = y)) || h));
    o._RF.pop()
}
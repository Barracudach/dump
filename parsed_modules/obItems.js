import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./cv.js";
import * as c from "./CircleSprite.js";
import * as g from "./GameSceneInstance.js";

function main() {
    var p, m, u, y;
    i._RF.push({}, "ac0f3izDEdNurfxZmP4trng", "obItems", void 0);
    const {
        ccclass: C,
        property: f
    } = r;
    e("ObItems", (p = f(s), C((y = t((u = class extends n {
        constructor(...e) {
            super(...e), a(this, "headList", y, this), this.playerId = null, this.obPlayerData = null, this.playerData = null
        }
        onBtnHeadClick(e, t) {
            h.AudioMgr.playButtonSound("button_click.mp3"), e.propagationStopped = !0;
            const a = g.getInstanceGameData(null == this ? void 0 : this.node);
            a.tRoomData.obPlayer = this.playerData[h.Number(t)], h.MessageCenter.send("showObRoleInfo", a)
        }
        setdata(e) {
            this.playerData = e;
            for (let t = 0; t < e.length; t++) this.setheaddata(e[t], t);
            let t = e.length;
            for (let e = 0; e < this.headList.length; e++) this.headList[e].active = e < t;
            this.scheduleOnce(function() {
                let e = this.node.getComponent(l);
                e && e.updateAlignment()
            }.bind(this), 0)
        }
        setheaddata(e, t) {
            let a = h.dataHandler.getUserData().getRemarkData(e.playerid);
            this.headList[t].getChildByName("roleName").getComponent(o).string = e.name, a.sRemark.length <= 0 ? h.StringTools.setShrinkString(this.headList[t].getChildByName("roleName"), e.name, !0) : h.StringTools.setShrinkString(this.headList[t].getChildByName("roleName"), a.sRemark, !0), e.playerid == h.dataHandler.getUserData().u32Uid ? e.headPath.length <= 0 ? c.setCircleSprite(this.headList[t].getChildByName("roleImg"), h.dataHandler.getUserData().HeadPath) : h.dataHandler.getUserData().HeadPath.length <= 0 ? c.setCircleSprite(this.headList[t].getChildByName("roleImg"), e.headPath, e.plat) : c.setCircleSprite(this.headList[t].getChildByName("roleImg"), h.dataHandler.getUserData().HeadPath) : c.setCircleSprite(this.headList[t].getChildByName("roleImg"), e.headPath, e.plat), this.headList[t].getComponent(d).opacity = e.isInroom ? 255 : 114.75
        }
    }).prototype, "headList", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), m = u)) || m));
    i._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as s from "./cv.js";
import * as l from "./CircleSprite.js";
import * as r from "./GameSceneInstance.js";

function main() {
    var h, n, o, d;
    i._RF.push({}, "b052f+iwVNA5plFcr0P3c7G", "JackfruitObItem", void 0);
    const {
        ccclass: c,
        property: g
    } = cc._decorator;
    e("JackfruitObItem", (h = g(cc.Node), c((o = class extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "headList", d, this), this.playerId = null, this.obPlayerData = null, this.isInAudit = !1, this.playerData = null
        }
        onBtnHeadClick(e, t) {
            s.AudioMgr.playButtonSound("button_click.mp3"), e.stopPropagation();
            const a = r.getInstanceGameData(null == this ? void 0 : this.node);
            a.tRoomData.obPlayer = this.playerData[s.Number(t)], s.MessageCenter.send("showObRoleInfo", a)
        }
        setdata(e) {
            this.playerData = e;
            for (let t = 0; t < e.length; t++) this.setheaddata(e[t], t);
            let t = e.length;
            for (let e = 0; e < this.headList.length; e++) this.headList[e].active = e < t
        }
        setheaddata(e, t) {
            e.playerid || console.log("sss");
            let a = s.dataHandler.getUserData().getRemarkData(e.playerid);
            this.headList[t].getChildByName("roleName").getComponent(cc.Label).string = e.name, a.sRemark.length <= 0 ? s.StringTools.setShrinkString(this.headList[t].getChildByName("roleName"), e.name, !0) : s.StringTools.setShrinkString(this.headList[t].getChildByName("roleName"), a.sRemark, !0), e.playerid == s.dataHandler.getUserData().u32Uid ? e.headPath.length <= 0 ? l.setCircleSprite(this.headList[t].getChildByName("roleImg"), s.dataHandler.getUserData().HeadPath) : s.dataHandler.getUserData().HeadPath.length <= 0 ? l.setCircleSprite(this.headList[t].getChildByName("roleImg"), e.headPath, e.plat) : l.setCircleSprite(this.headList[t].getChildByName("roleImg"), s.dataHandler.getUserData().HeadPath) : l.setCircleSprite(this.headList[t].getChildByName("roleImg"), e.headPath, e.plat), this.headList[t].getChildByName("check_img").zIndex = 100, e.isInroom ? (this.headList[t].getChildByName("roleName").color = cc.Color.WHITE, this.headList[t].getChildByName("black_img").active = !1) : (this.headList[t].getChildByName("black_img").active = !0, this.headList[t].getChildByName("black_img").zIndex = 100, this.headList[t].getChildByName("roleName").color = cc.color(80, 80, 80))
        }
    }, d = a(o.prototype, "headList", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), n = o)) || n));
    i._RF.pop()
}
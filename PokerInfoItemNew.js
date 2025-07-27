import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as g from "./cv.js";
import * as a from "./CircleSprite.js";

function main() {
    var l;
    e._RF.push({}, "90a7at26mhN76u8rdJpr2FF", "PokerInfoItemNew", void 0);
    const {
        ccclass: d,
        property: h
    } = r;
    t("default", d(l = class extends n {
        constructor(...t) {
            super(...t), this.msg = null, this.posX = 0
        }
        onLoad() {
            g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), this.posX = this.node.getChildByName("handNum_title_text").position.x
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node)
        }
        initLanguage() {
            o("bring_title_text", this.node).getComponent(i).string = g.config.getStringData("PokerInfoItem_roleImg_bring_title_text") + ":", o("handNum_title_text", this.node).getComponent(i).string = g.config.getStringData("PokerInfoItem_roleImg_handNum_title_text") + ":", this.updatePos()
        }
        updatePos() {
            let t = o("handNum_text", this.node),
                e = o("handNum_title_text", this.node),
                n = o("bring_title_text", this.node),
                s = o("bring_title_text/bring_text", this.node);
            this.posX = e.position.x;
            let r = 5;
            g.config.getCurrentLanguage() != g.Enum.LANGUAGE_TYPE.zh_CN && g.config.getCurrentLanguage() != g.Enum.LANGUAGE_TYPE.zh_TW && (r = 20), s.setPosition(s.position.x + r, s.position.y);
            let a = n.position.x + g.resMgr.getLabelStringSize(n.getComponent(i)).width + 5 + g.resMgr.getLabelStringSize(s.getComponent(i)).width + 30;
            a > this.posX ? e.setPosition(a, e.position.y) : e.setPosition(this.posX, e.position.y), t.setPosition(e.position.x + g.resMgr.getLabelStringSize(e.getComponent(i)).width + 5, t.position.y)
        }
        setData(t, e) {
            this.initLanguage(), this.msg = t;
            let n = this.msg.buyins[e],
                r = o("winBet_text", this.node),
                l = g.dataHandler.getUserData().getUserRemark(n.UID);
            {
                let t = 0 == g.StringTools.getArrayLength(this.msg.room_param.alliance_ids);
                t = t && this.msg.room_param.CreaterId == g.dataHandler.getUserData().u32Uid, t = t || this.isCanSeeAllianceResult(g.dataHandler.getUserData().u32Uid);
                let e = "";
                if (t) {
                    let t = "" == l ? "" : " ";
                    e = g.StringTools.formatC("(%s%sID:%d)", l, t, n.UID)
                } else "" != l && (e = g.StringTools.formatC("(%s)", l));
                o("roleName_text", this.node).getComponent(i).string = n.Playername + e
            }
            o("bring_title_text/bring_text", this.node).getComponent(i).string = g.StringTools.serverGoldToShowString(n.TotalBuyin), this.updatePos(), r.getComponent(i).string = g.StringTools.serverGoldToShowString(n.WinBet), n.WinBet > 0 ? (r.getComponent(i).string = "+" + r.getComponent(i).string, r.getComponent(i).color = g.tools.getWinColor()) : 0 == n.WinBet ? r.getComponent(i).color = new s(s.WHITE) : r.getComponent(i).color = g.tools.getLoseColor(), o("handNum_text", this.node).getComponent(i).string = n.HandCount.toString(), a.setCircleSprite(o("headNode/roleImg", this.node), n.PlayerHead, n.plat), n.Playername, g.dataHandler.getUserData().nick_name
        }
        isCanSeeAllianceResult(t) {
            if (g.StringTools.getArrayLength(this.msg.clubInfos) <= 0) return !1;
            for (let e = 0; e < g.StringTools.getArrayLength(this.msg.club_adminids); e++)
                if (t == this.msg.club_adminids[e]) return !0;
            return !1
        }
    }) || l);
    e._RF.pop()
}
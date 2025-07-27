import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";
import * as c from "./CircleSprite.js";

function main() {
    var l;
    t._RF.push({}, "28f0cK9SY1GTIfjb8jPND1G", "MttDetailInfoItem", void 0);
    const {
        ccclass: g,
        property: d
    } = s;
    e("default", g(l = class extends n {
        constructor(...e) {
            super(...e), this.data = null, this.posX = 0
        }
        onLoad() {
            a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        onDestroy() {
            a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this.node)
        }
        initLanguage() {}
        setData(e, t) {
            this.initLanguage(), this.data = e, o("roleName_text", this.node).getComponent(r).string = e.nickName, c.setCircleSprite(o("headNode/roleImg", this.node), e.avatar), o("txtRank", this.node).getComponent(r).string = e.rank;
            let n = o("imgRank", this.node),
                s = "zh_CN/hall/recordView/cupFirst";
            n.active = !0, 1 == e.rank ? s = "zh_CN/hall/recordView/cupFirst" : 2 == e.rank ? s = "zh_CN/hall/recordView/cupSecond" : 3 == e.rank ? s = "zh_CN/hall/recordView/cupThird" : n.active = !1, a.resMgr.setSpriteFrame(o("imgRank", this.node), s);
            let l = o("score", this.node);
            l.getComponent(r).string = a.StringTools.numberToString(a.StringTools.clientGoldByServer(e.resultMoney)), e.resultMoney > 0 ? (l.getComponent(r).string = "+" + l.getComponent(r).string, l.getComponent(r).color = a.tools.getWinColor()) : 0 == e.resultMoney ? l.getComponent(r).color = new i(i.WHITE) : l.getComponent(r).color = a.tools.getLoseColor()
        }
    }) || l);
    t._RF.pop()
}
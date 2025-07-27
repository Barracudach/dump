import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cv.js";
import * as _ from "./CircleSprite.js";
import * as m from "./MttDetailInfoItem.js";

function main() {
    var p, T, u, f;
    i._RF.push({}, "463ff7kY+JDlLjScE7gpdLy", "MttDetailInfo", void 0);
    const {
        ccclass: S,
        property: D
    } = o;
    t("default", (p = D(a), S((f = e((u = class extends s {
        constructor(...t) {
            super(...t), n(this, "pokerInfoItem", f, this), this.msg = null, this.backBtnClickFunc = null, this.itemList = [], this.scrolllHeigt = 958
        }
        onLoad() {
            let t = l("scorellview/content", this.node);
            this.scrolllHeigt = t.getComponent(r).contentSize.height, this.registerMsg(), this.initLanguage()
        }
        start() {
            d.config.adaptSize([l("scorellview", this.node)])
        }
        onDestroy() {
            d.MessageCenter.unregister("responseMTTDataDetailSuccess", this.node), d.MessageCenter.unregister(d.config.CHANGE_LANGUAGE, this.node)
        }
        registerMsg() {
            d.MessageCenter.register("responseMTTDataDetailSuccess", this.responseMTTDataSuccess.bind(this), this.node), d.MessageCenter.register(d.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        initLanguage() {
            d.StringTools.setLabelString(this.node, "matchTime/title", "DataView_data_panel_dataInfo_panel_MTT_matchTime_txt"), d.StringTools.setLabelString(this.node, "matchPerson/title", "DataView_data_panel_dataInfo_panel_MTT_matchTotal_txt"), d.StringTools.setLabelString(this.node, "matchChip/title", "DataView_data_panel_dataInfo_panel_MTT_matchBeginChip_txt"), d.StringTools.setLabelString(this.node, "matchAddTime/title", "DataView_data_panel_dataInfo_panel_MTT_matchAddBB_txt"), d.StringTools.setLabelString(this.node, "titleRank", "DataView_data_panel_dataInfo_panel_MTT_matchRank_txt"), d.StringTools.setLabelString(this.node, "titleNickname", "DataView_data_panel_dataInfo_panel_MTT_nickName_txt"), d.StringTools.setLabelString(this.node, "titleReward", "DataView_data_panel_dataInfo_panel_MTT_matchReward_txt"), d.StringTools.setLabelString(this.node, "title_text", "DataView_data_panel_dataInfo_panel_MTT_matchDetail_txt")
        }
        responseMTTDataSuccess(t) {
            this.initData(t)
        }
        onBtnBackClick() {
            d.AudioMgr.playButtonSound("back_button"), d.MessageCenter.send("show_mail_entrance"), this.backBtnClickFunc ? this.backBtnClickFunc() : (console.log("====> back: " + this.node.getComponent(r).anchorPoint + ", " + this.node.getPosition()), d.action.moveToAction(this.node, "TO_RIGHT", "OUT", "FAST", new c(.5 * d.config.WIDTH, .5 * d.config.HEIGHT), new c(1.5 * d.config.WIDTH, .5 * d.config.HEIGHT)))
        }
        initData(t) {
            if (this.node.activeInHierarchy) return void console.log("current MttDetaiINfo is activeInHierarchy");
            this.node.setSiblingIndex(d.Enum.ZORDER_TYPE.ZORDER_2), d.action.moveToAction(this.node, "TO_LEFT", "ENTER", d.Enum.action_FuncType.dt_NORMAL, new c(1.5 * d.config.WIDTH, .5 * d.config.HEIGHT), new c(.5 * d.config.WIDTH, .5 * d.config.HEIGHT)), this.msg = JSON.parse(t);
            l("scorellview/content/Panel_1", this.node);
            let e = l("scorellview/content", this.node),
                n = this.msg.gameResultDetail;
            d.StringTools.cleanNodeArray(this.itemList), l("myName", this.node).getComponent(g).string = d.dataHandler.getUserData().nick_name;
            let i = l("headIcon", this.node);
            _.setCircleSprite(i, d.dataHandler.getUserData().headUrl);
            let a = d.StringTools.formatC(d.config.getStringData("DataView_data_panel_dataInfo_panel_MTT_Rank_txt"), n.myRank);
            l("rankbg/rank", this.node).getComponent(g).string = a;
            let o = n.gameTimeSec / 3600,
                s = "";
            s = o >= 1 ? o.toFixed(2) + "h" : Math.floor(n.gameTimeSec / 60) + "min", l("matchTime/content", this.node).getComponent(g).string = s, l("matchPerson/content", this.node).getComponent(g).string = n.numPlayers, l("matchChip/content", this.node).getComponent(g).string = n.startingCoins, l("matchAddTime/content", this.node).getComponent(g).string = n.levelTime / 60 + "min";
            let p = n.playerResults;
            if (this.itemList = [], p) {
                p.length > 1 && p.sort(((t, e) => t.rank - e.rank));
                for (let t = 0; t < p.length; t++) {
                    let i = h(this.pokerInfoItem);
                    i.getComponent(m).setData(n.playerResults[t], t), i.setPosition(i.position.x, 175 * -(t + 1)), e.addChild(i), this.itemList.push(i)
                }
            }
            let T = 0;
            T = 175 * d.StringTools.getArrayLength(p), T >= e.getComponent(r).contentSize.height ? e.getComponent(r).setContentSize(e.getComponent(r).contentSize.width, T) : e.getComponent(r).setContentSize(e.getComponent(r).contentSize.width, this.scrolllHeigt)
        }
    }).prototype, "pokerInfoItem", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = u)) || T));
    i._RF.pop()
}
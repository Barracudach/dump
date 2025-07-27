import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cv.js";
import * as C from "./cb.js";
import * as b from "./HumanboyDataMgr.js";
import * as y from "./TagCom.js";
import * as S from "./VideoCowboyManager.js";
import * as A from "./PokerMasterDataMgr.js";
import * as v from "./GameSceneInstance.js";
import * as k from "./MiniGameSoundManager.js";

function main() {
    var B;
    e._RF.push({}, "aa99feYYaBFwLjkbywz9q3O", "HumanboyAdvancedAuto", void 0);
    const {
        ccclass: w,
        property: f
    } = g;
    t("HumanboyAdvancedAuto", w(B = class extends o {
        constructor(...t) {
            super(...t), this._panel_select = null, this._panel_msgtip = null, this._ps_layout_once = !1, this._ps_img_shield = null, this._ps_block_panel = null, this._ps_btn_cancel = null, this._ps_cell_size = new n(n.ZERO), this._ps_btns = [], this._pm_auto_count = null, this._pm_auto_tips = null
        }
        onLoad() {
            this._initUI()
        }
        start() {}
        _initUI() {
            this._panel_select = this.node.getChildByName("panel_select"), this._panel_select.on(s.EventType.TOUCH_END, (t => {
                this.hideSelectPanel(!0)
            })), this._panel_select.active = !1, this._ps_img_shield = this._panel_select.getChildByName("img_shield"), this._ps_img_shield.getComponent(i).enabled = !1, this._ps_block_panel = this._panel_select.getChildByName("panel_block"), this._ps_cell_size = a(this._ps_block_panel.getComponent(_).contentSize), this._ps_btn_cancel = this._ps_block_panel.getChildByName("btn_cancel").getComponent(l), this._ps_btn_cancel.node.on("click", (t => {
                this.hideSelectPanel(!0)
            })), this._panel_msgtip = this.node.getChildByName("panel_msgtip"), this._pm_auto_count = this._panel_msgtip.getChildByName("txt_count").getComponent(c), this._pm_auto_count.node.active = !1, this._pm_auto_tips = this._panel_msgtip.getChildByName("img_tips").getComponent(p), this._pm_auto_tips.node.active = !1, r.resMgr.adaptWidget(this.node)
        }
        onChangeLanguage() {
            this._layoutSelectPanelOnce(!0, !0)
        }
        _layoutSelectPanelOnce(t, e = !1) {
            if (t && (this._ps_layout_once = !1), this._ps_layout_once) return;
            this._ps_layout_once = !0;
            let o = [];
            o.push(this._ps_btn_cancel), this._ps_btn_cancel.node.getChildByName("txt").getComponent(c).string = r.config.getStringDataCasino("CowBoy_btn_desc_auto_cancel");
            let s = [];
            switch (v.getInstanceGameId(null == this ? void 0 : this.node)) {
                case r.Enum.GameId.CowBoy: {
                    let t = C.getCowboyRoom().vAutoBetCountList;
                    r.StringTools.deepCopy(t, s)
                }
                break;
                case r.Enum.GameId.HumanBoy: {
                    let t = b.getHumanboyRoom().vAutoBetCountList;
                    r.StringTools.deepCopy(t, s)
                }
                break;
                case r.Enum.GameId.VideoCowboy: {
                    let t = S.getVideoCowboyRoom().vAutoBetCountList;
                    r.StringTools.deepCopy(t, s)
                }
                break;
                case r.Enum.GameId.PokerMaster: {
                    let t = A.getPokerMasterRoom().vAutoBetCountList;
                    r.StringTools.deepCopy(t, s)
                }
            }
            for (let t = 0; t < this._ps_btns.length; ++t) this._ps_btns[t].node.removeFromParent(), r.tools.destroyNode(this._ps_btns[t].node);
            r.StringTools.clearArray(this._ps_btns);
            for (let t = 0; t < s.length; ++t) {
                let e = r.StringTools.formatC("btn_auto_%d", t),
                    n = this._ps_block_panel.getChildByName(e);
                n || (n = u(this._ps_btn_cancel.node), n.name = e, n.on("click", this._onClickAutoSelect, this), this._ps_block_panel.addChild(n), this._ps_btns.push(n.getComponent(l)));
                let i = n.getComponent(y);
                i || (i = n.addComponent(y)), i.nTag = s[t], n.getChildByName("txt").getComponent(c).string = r.StringTools.formatC(r.config.getStringDataCasino("CowBoy_btn_desc_auto_count"), s[t]), o.push(n.getComponent(l))
            }
            let i = new n(this._ps_cell_size.width, this._ps_cell_size.height * o.length);
            this._ps_block_panel.getComponent(_).setContentSize(i);
            for (let t = 0; t < o.length; ++t) {
                let n = i.width / 2,
                    s = i.height / o.length / 2 + t * this._ps_cell_size.height;
                o[t].node.setPosition(e ? 0 : n, s)
            }
        }
        _autoSelectAnimFunc(t, e) {
            this._panel_select.active = !0;
            let o;
            if (t) {
                this._ps_block_panel.setScale(h(d.ZERO));
                let t = () => {
                    this._ps_block_panel.setScale(h(d.ONE)), this._ps_img_shield.getComponent(i).enabled = !1
                };
                o = e ? m().to(.5, {
                    scale: h(d.ONE)
                }, {
                    easing: "backOut"
                }).call(t) : m().call(t)
            } else {
                this._ps_block_panel.setScale(h(d.ONE));
                let t = () => {
                    this._ps_block_panel.setScale(h(d.ZERO)), this._ps_img_shield.getComponent(i).enabled = !1, this._panel_select.active = !1
                };
                o = e ? m().to(.5, {
                    scale: h(d.ZERO)
                }, {
                    easing: "backIn"
                }).call(t) : m().call(t)
            }
            o && (o.target(this._ps_block_panel).start(), this._ps_img_shield.getComponent(i).enabled = !0)
        }
        _onClickAutoSelect(t) {
            let e = 0,
                o = t.getComponent(y);
            switch (o && (e = o.nTag), k.playButtonSound("tab"), v.getInstanceGameId(null == this ? void 0 : this.node)) {
                case r.Enum.GameId.CowBoy:
                    r.cowboyNet.reqAdvanceAutoBetSet(e);
                    break;
                case r.Enum.GameId.HumanBoy:
                    r.humanboyNet.reqAdvanceAutoBetSet(e);
                    break;
                case r.Enum.GameId.VideoCowboy:
                    r.videoCowboyNet.reqAdvanceAutoBetSet(e);
                    break;
                case r.Enum.GameId.PokerMaster:
                    r.pokerMasterNet.reqAdvanceAutoBetSet(e)
            }
            this.hideSelectPanel(!1)
        }
        showSelectPanel(t, e) {
            this._panel_select.active || (this._panel_select.active = !0, this._layoutSelectPanelOnce(e), this._autoSelectAnimFunc(!0, t))
        }
        hideSelectPanel(t) {
            this._panel_select.active && this._autoSelectAnimFunc(!1, t)
        }
        adaptSelectPanelPos(t) {
            let e = new n(t.getComponent(_).contentSize),
                o = h(d.ZERO);
            t.parent.getComponent(_).convertToWorldSpaceAR(t.position, o), o.y += e.height / 2 + 40;
            let s = h(d.ZERO);
            this._ps_block_panel.parent.getComponent(_).convertToNodeSpaceAR(o, s), this._ps_block_panel.setPosition(s)
        }
        showAdvanceAutoTips(t) {
            let e = this._pm_auto_tips.node.getChildByName("txt").getComponent(c);
            e.string = t;
            let o = r.resMgr.getLabelStringSize(e).width + 80,
                s = this._pm_auto_tips.node.getComponent(_).height;
            this._pm_auto_tips.node.getComponent(_).setContentSize(new n(o, s)), e.node.setPosition(h(d.ZERO));
            let i = this._pm_auto_tips.node.getChildByName("img_triangle");
            i.setPosition(0, i.position.y), this._pm_auto_tips.node.active = !0
        }
        updateAdvanceAutoTipsText(t) {
            this._pm_auto_tips.node.active && this.showAdvanceAutoTips(r.config.getStringDataCasino(t))
        }
        hideAdvanceAutoTips() {
            this._pm_auto_tips.node.active = !1
        }
        adaptAdvanceAutoTipsPos(t) {
            if (!t) return;
            let e = h(d.ZERO);
            t.parent.getComponent(_).convertToWorldSpaceAR(t.position, e), e.x -= t.getComponent(_).width * t.getComponent(_).anchorX, e.y += t.getComponent(_).height * t.getComponent(_).anchorY + 40;
            let o = h(d.ZERO);
            this._pm_auto_tips.node.parent.getComponent(_).convertToNodeSpaceAR(e, o), this._pm_auto_tips.node.setPosition(o)
        }
        showAdvanceAutoCount() {
            let t = 0,
                e = 0;
            switch (v.getInstanceGameId(null == this ? void 0 : this.node)) {
                case r.Enum.GameId.CowBoy:
                    t = C.getCowboyRoom().iUsedAutoBetCount, e = C.getCowboyRoom().iSelectAutoBetCount;
                    break;
                case r.Enum.GameId.HumanBoy:
                    t = b.getHumanboyRoom().iUsedAutoBetCount, e = b.getHumanboyRoom().iSelectAutoBetCount;
                    break;
                case r.Enum.GameId.VideoCowboy:
                    t = S.getVideoCowboyRoom().iUsedAutoBetCount, e = S.getVideoCowboyRoom().iSelectAutoBetCount;
                    break;
                case r.Enum.GameId.PokerMaster:
                    t = A.getPokerMasterRoom().iUsedAutoBetCount, e = A.getPokerMasterRoom().iSelectAutoBetCount
            }
            this._pm_auto_count.string = r.StringTools.formatC(r.config.getStringDataCasino("CowBoy_btn_desc_auto_using_count"), e - t, e), this._pm_auto_count.node.active = !0
        }
        hideAdvanceAutoCount() {
            this._pm_auto_count.node.active = !1
        }
        adaptAdvanceAutoCountPos(t) {
            if (!t) return;
            let e = h(d.ZERO);
            t.parent.getComponent(_).convertToWorldSpaceAR(t.position, e), e.y += t.getComponent(_).height / 2 + 20;
            let o = h(d.ZERO);
            this._pm_auto_count.node.parent.getComponent(_).convertToNodeSpaceAR(e, o), this._pm_auto_count.node.setPosition(o)
        }
    }) || B);
    e._RF.pop()
}
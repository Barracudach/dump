import * as t from "./cc.js";
import * as d from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as A from "./cb.js";
import * as _ from "./HumanboyDataMgr.js";
import * as h from "./VideoCowboyManager.js";
import * as g from "./PokerMasterDataMgr.js";
import * as p from "./TagCom.js";
import * as r from "./GameSceneInstance.js";
import * as v from "./MiniGameSoundManager.js";

function main() {
    var y;
    t._RF.push({}, "15798lOsMhK1LbG9SpKTUxc", "MiniGameAdvancedAuto", void 0);
    const {
        ccclass: C,
        property: m
    } = i;
    e("MiniGameAdvancedAuto", C(y = class extends o {
        constructor(...e) {
            super(...e), this.legacyAdvancedAuto = void 0, this._panel_select = null, this._ps_block_panel = null, this._ps_btn_cancel = null, this._onBetCountUpdate = void 0
        }
        onLoad() {
            this.legacyAdvancedAuto = this.node.getComponent("HumanboyAdvancedAuto"), this._panel_select = this.node.getChildByName("panel_select"), this._panel_select.targetOff(this), this._panel_select.on(n.EventType.TOUCH_END, (e => {
                this.hideSelectPanel(!0)
            })), this._ps_block_panel = this._panel_select.getChildByName("panel_block"), this._ps_btn_cancel = this._ps_block_panel.getChildByName("btn_cancel").getComponent(a), this._ps_btn_cancel.node.targetOff(this), this._ps_btn_cancel.node.on(a.EventType.CLICK, (e => {
                this.hideSelectPanel(!0)
            }))
        }
        betCountUpdateCallback(e) {
            this._onBetCountUpdate = e
        }
        showSelectPanel(e, t = !0) {
            var o, n;
            null != (o = this.legacyAdvancedAuto) && o._panel_select.active || (this.legacyAdvancedAuto._panel_select.active = !0, this._layoutSelectPanelOnce(t), null == (n = this.legacyAdvancedAuto) || n._autoSelectAnimFunc(!0, e), u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node))
        }
        hideSelectPanel(e) {
            var t;
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node), null == (t = this.legacyAdvancedAuto) || t.hideSelectPanel(e), this._onBetCountUpdate && this._onBetCountUpdate()
        }
        adaptSelectPanelPos(e) {
            var t;
            null == (t = this.legacyAdvancedAuto) || t.adaptSelectPanelPos(e)
        }
        showAdvanceAutoTips(e) {
            var t;
            null == (t = this.legacyAdvancedAuto) || t.showAdvanceAutoTips(e)
        }
        hideAdvanceAutoTips() {
            var e;
            null == (e = this.legacyAdvancedAuto) || e.hideAdvanceAutoTips()
        }
        adaptAdvanceAutoTipsPos(e) {
            var t;
            null == (t = this.legacyAdvancedAuto) || t.adaptAdvanceAutoTipsPos(e)
        }
        showAdvanceAutoCount() {
            var e;
            null == (e = this.legacyAdvancedAuto) || e.showAdvanceAutoCount()
        }
        hideAdvanceAutoCount() {
            var e;
            null == (e = this.legacyAdvancedAuto) || e.hideAdvanceAutoCount()
        }
        adaptAdvanceAutoCountPos(e) {
            var t;
            null == (t = this.legacyAdvancedAuto) || t.adaptAdvanceAutoCountPos(e)
        }
        onChangeLanguage() {
            this._layoutSelectPanelOnce(!0, !0)
        }
        _layoutSelectPanelOnce(e, t = !1) {
            if (e && (this.legacyAdvancedAuto._ps_layout_once = !1), this.legacyAdvancedAuto._ps_layout_once) return;
            this.legacyAdvancedAuto._ps_layout_once = !0;
            let o = [];
            o.push(this._ps_btn_cancel);
            let n = [];
            switch (this._ps_btn_cancel.node.getChildByName("txt").getComponent(s).string = u.config.getStringDataCasino("CowBoy_btn_desc_auto_cancel"), r.getInstanceGameId(null == this ? void 0 : this.node)) {
                case u.Enum.GameId.CowBoy: {
                    let e = A.getCowboyRoom().vAutoBetCountList;
                    u.StringTools.deepCopy(e, n)
                }
                break;
                case u.Enum.GameId.HumanBoy: {
                    let e = _.getHumanboyRoom().vAutoBetCountList;
                    u.StringTools.deepCopy(e, n)
                }
                break;
                case u.Enum.GameId.VideoCowboy: {
                    let e = h.getVideoCowboyRoom().vAutoBetCountList;
                    u.StringTools.deepCopy(e, n)
                }
                break;
                case u.Enum.GameId.PokerMaster: {
                    let e = g.getPokerMasterRoom().vAutoBetCountList;
                    u.StringTools.deepCopy(e, n)
                }
            }
            for (let e = 0; e < this.legacyAdvancedAuto._ps_btns.length; ++e) this.legacyAdvancedAuto._ps_btns[e].node.removeFromParent(), u.tools.destroyNode(this.legacyAdvancedAuto._ps_btns[e].node);
            u.StringTools.clearArray(this.legacyAdvancedAuto._ps_btns);
            for (let e = 0; e < n.length; ++e) {
                let t = u.StringTools.formatC("btn_auto_%d", e),
                    l = this.legacyAdvancedAuto._ps_block_panel.getChildByName(t);
                l || (l = c(this.legacyAdvancedAuto._ps_btn_cancel.node), l.name = t, l.on(a.EventType.CLICK, this._onClickAutoSelect, this), this.legacyAdvancedAuto._ps_block_panel.addChild(l), this.legacyAdvancedAuto._ps_btns.push(l.getComponent(a)));
                let d = l.getComponent(p);
                d || (d = l.addComponent(p)), d.nTag = n[e], l.getChildByName("txt").getComponent(s).string = u.StringTools.formatC(u.config.getStringDataCasino("CowBoy_btn_desc_auto_count"), n[e]), o.push(l.getComponent(a))
            }
            let i = new l(this.legacyAdvancedAuto._ps_cell_size.width, this.legacyAdvancedAuto._ps_cell_size.height * o.length);
            this.legacyAdvancedAuto._ps_block_panel.getComponent(d).setContentSize(i);
            for (let e = 0; e < o.length; ++e) {
                let n = i.width / 2,
                    a = i.height / o.length / 2 + e * this.legacyAdvancedAuto._ps_cell_size.height;
                o[e].node.setPosition(t ? 0 : n, a)
            }
        }
        _onClickAutoSelect(e) {
            let t = 0,
                o = e.getComponent(p);
            switch (o && (t = o.nTag), v.playButtonSound("tab"), r.getInstanceGameId(null == this ? void 0 : this.node)) {
                case u.Enum.GameId.CowBoy:
                    console.log(`####################### select add cowboy ${t}`), A.getCowboyRoom().iSelectAutoBetCount > 0 ? u.cowboyNet.reqAdvanceAutoBetAdd(t) : u.cowboyNet.reqAdvanceAutoBetSet(t);
                    break;
                case u.Enum.GameId.HumanBoy:
                    console.log(`####################### select add HumanBoy ${t}`);
                    break;
                case u.Enum.GameId.VideoCowboy:
                    console.log(`####################### select add VideoCowBoy ${t}`), u.videoCowboyNet.reqAdvanceAutoBetAdd(t);
                    break;
                case u.Enum.GameId.PokerMaster:
                    console.log(`####################### select add PokerMaster ${t}`), g.getPokerMasterRoom().iSelectAutoBetCount > 0 ? u.pokerMasterNet.reqAdvanceAutoBetAdd(t) : u.pokerMasterNet.reqAdvanceAutoBetSet(t)
            }
            this.hideSelectPanel(!1)
        }
    }) || y);
    t._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as k from "./humanboy.mjs_cjs=&original=.js";
import * as D from "./cv.js";
import * as H from "./HumanboyDataMgr.js";
import * as E from "./ScrollViewReuse.js";
import * as x from "./TagCom.js";
import * as N from "./HumanboyGameScene.js";
import * as B from "./TweenControl.js";
import * as A from "./CommonTools.js";

function main() {
    var f, R, P, v, L, I, V, W, O, z, G, U, M, Y, F, Z;
    n._RF.push({}, "828fbgvldVD55quVDphH83l", "HumanboyDealerList", void 0);
    let j = t("eHumanboyDealerListViewType", function(t) {
            return t[t.HDLV_TYPE_NONE = 0] = "HDLV_TYPE_NONE", t[t.HDLV_TYPE_WATTING = 1] = "HDLV_TYPE_WATTING", t[t.HDLV_TYPE_CANDIDATE = 2] = "HDLV_TYPE_CANDIDATE", t
        }({})),
        q = t("eHumanboyDealerBtnStatus", function(t) {
            return t[t.HDB_STATUS_NONE = 0] = "HDB_STATUS_NONE", t[t.HDB_STATUS_RECHARGE = 1] = "HDB_STATUS_RECHARGE", t[t.HDB_STATUS_DEALER_APPLY_WAIT = 2] = "HDB_STATUS_DEALER_APPLY_WAIT", t[t.HDB_STATUS_DEALER_CANCEL_WAIT = 3] = "HDB_STATUS_DEALER_CANCEL_WAIT", t
        }({}));
    const {
        ccclass: X,
        property: J
    } = l;
    t("HumanboyDealerList", (f = J(_), R = J(s), P = J(s), v = J(o), L = J(a), I = J(a), V = J(a), X((z = e((O = class extends r {
        constructor(...t) {
            super(...t), i(this, "prefab_dealerListItem", z, this), i(this, "img_shield", G, this), i(this, "img_bg", U, this), i(this, "rtxt_prompt", M, this), i(this, "panel_opt", Y, this), i(this, "panel_waitting", F, this), i(this, "panel_candidate", Z, this), this._opt_img_bg = null, this._opt_btn_apply = null, this._opt_btn_list = null, this._pw_list = null, this._pw_list_sv = null, this._pw_list_scr_pos = p(g.ZERO), this._pw_list_scr_size = new h(h.ZERO), this._pw_txt_desc = null, this._pw_txt_desc_scr_pos = p(g.ZERO), this._pw_txt_waitting = null, this._pw_panel_take = null, this._pw_btn_dealer = null, this._pw_take_rtxt_take_in = null, this._pw_take_rtxt_have_in = null, this._pw_take_rtxt_take_min = null, this._pw_take_rtxt_take_max = null, this._pw_take_btn_minus = null, this._pw_take_btn_plus = null, this._pw_take_slider = null, this._pw_take_slider_bg = null, this._pw_take_slider_sp = null, this._pw_take_slider_min_percent = 0, this._pc_list = null, this._pc_list_sv = null, this._pc_txt_desc = null, this._atlas_hb_language = null, this._viewType = j.HDLV_TYPE_NONE, this._btnStatus = q.HDB_STATUS_NONE
        }
        show(t, e) {
            this._autoAnimFunc(!0, t), this.setViewType(e)
        }
        hide(t) {
            this._autoAnimFunc(!1, t)
        }
        setViewType(t) {
            if (this._viewType === t) return;
            this._viewType = t;
            let e = !1;
            switch (this._viewType) {
                case j.HDLV_TYPE_NONE:
                    break;
                case j.HDLV_TYPE_WATTING:
                    e = !1;
                    break;
                case j.HDLV_TYPE_CANDIDATE:
                    e = !0
            }
            e ? (this._opt_btn_apply.node.getChildByName("txt").getComponent(d).color = new m(m.WHITE), this._opt_btn_list.node.getChildByName("txt").getComponent(d).color = u(45, 43, 63, 255), this._opt_img_bg.node.angle = 0) : (this._opt_btn_apply.node.getChildByName("txt").getComponent(d).color = u(45, 43, 63, 255), this._opt_btn_list.node.getChildByName("txt").getComponent(d).color = new m(m.WHITE), this._opt_img_bg.node.angle = 180), this.updateView()
        }
        getWinSize() {
            return B.instance.getWinSize(this.node)
        }
        getViewType() {
            return this._viewType
        }
        updateView() {
            switch (this._viewType) {
                case j.HDLV_TYPE_NONE:
                    break;
                case j.HDLV_TYPE_WATTING: {
                    let t = k.dataHandler.getUserData().u32Uid;
                    D.getHumanboyRoom().isInDealerWatingList(t) ? k.resMgr.setSpriteFrame(this.img_bg.node, "zh_CN/game/humanboy/humanboy_list_bg_1") : k.resMgr.setSpriteFrame(this.img_bg.node, "zh_CN/game/humanboy/humanboy_list_bg_2"), this.panel_waitting.active = !0, this.panel_candidate.active = !1, this._updateWaittingView()
                }
                break;
                case j.HDLV_TYPE_CANDIDATE:
                    k.resMgr.setSpriteFrame(this.img_bg.node, "zh_CN/game/humanboy/humanboy_list_bg_1"), this.panel_waitting.active = !1, this.panel_candidate.active = !0, this._updateCandidateView()
            }
            this._updateDealerDesc()
        }
        setBtnDealerEnable(t) {
            let e = this._pw_btn_dealer.node.getChildByName("txt").getComponent(d);
            e.node.getComponent(d).color = t ? m.WHITE : u(127, 127, 127, 255), this._pw_btn_dealer.interactable = t
        }
        checkBtnDealerEnable() {
            let t = D.getHumanboyRoom().uCanBuyStockNum;
            this.setBtnDealerEnable(t > 0 || this._btnStatus === q.HDB_STATUS_RECHARGE)
        }
        onLoad() {
            k.resMgr.adaptWidget(this.img_bg.node, !0), this._init()
        }
        start() {}
        _init() {
            this._initAtlasList(), this._initLanguageUI(), this._initPanelOpt(), this._initPanelWaitting(), this._initPanelCandidate(), this.node.on(a.EventType.TOUCH_END, (t => {
                this.hide(!0)
            }))
        }
        _initAtlasList() {
            this._atlas_hb_language = k.resMgr.getSpriteAtlas(k.config.getLanguagePath("game/humanboyPlist/language"))
        }
        _initLanguageUI() {
            this.img_bg.node.getChildByName("img_title").getComponent(s).spriteFrame = this._atlas_hb_language.getSpriteFrame("humanboy_icon_dealer")
        }
        _initPanelOpt() {
            this._opt_img_bg = this.panel_opt.getChildByName("img_bg").getComponent(s), this._opt_btn_apply = this.panel_opt.getChildByName("btn_apply").getComponent(c), this._opt_btn_apply.node.on("click", (t => {
                k.AudioMgr.playButtonSound("tab"), this.setViewType(j.HDLV_TYPE_WATTING)
            })), this._opt_btn_list = this.panel_opt.getChildByName("btn_list").getComponent(c), this._opt_btn_list.node.on("click", (t => {
                k.AudioMgr.playButtonSound("tab"), this.setViewType(j.HDLV_TYPE_CANDIDATE)
            })), this._opt_btn_apply.node.getChildByName("txt").getComponent(d).string = k.config.getStringData("Humanboy_game_dealer_apply_txt"), this._opt_btn_list.node.getChildByName("txt").getComponent(d).string = k.config.getStringData("Humanboy_game_dealer_list_txt")
        }
        _initPanelWaitting() {
            this._pw_list = this.panel_waitting.getChildByName("list"), this._pw_list_scr_pos = p(this._pw_list.position), this._pw_list_scr_size = b(this._pw_list.getContentSize()), this._pw_txt_desc = this.panel_waitting.getChildByName("txt_desc").getComponent(d), this._pw_txt_desc_scr_pos = p(this._pw_txt_desc.node.position), this._pw_txt_waitting = this.panel_waitting.getChildByName("txt_waitting").getComponent(d), this._pw_txt_waitting.string = k.config.getStringData("Humanboy_game_dealer_queuing"), this._pw_btn_dealer = this.panel_waitting.getChildByName("btn_dealer").getComponent(c), this._pw_btn_dealer.node.on("click", (t => {
                k.AudioMgr.playButtonSound("button_click"), this._onClickBtnDealer()
            })), this._pw_panel_take = this.panel_waitting.getChildByName("panel_take"), this._pw_take_rtxt_take_in = this._pw_panel_take.getChildByName("rtxt_take_in").getComponent(o), this._pw_take_rtxt_have_in = this._pw_panel_take.getChildByName("rtxt_have_in").getComponent(o), this._pw_take_rtxt_take_min = this._pw_panel_take.getChildByName("rtxt_take_min").getComponent(o), this._pw_take_rtxt_take_max = this._pw_panel_take.getChildByName("rtxt_take_max").getComponent(o), this._pw_take_btn_minus = this._pw_panel_take.getChildByName("btn_minus").getComponent(c), this._pw_take_btn_minus.node.on("click", (t => {
                k.AudioMgr.playButtonSound("button_click"), this._addSliderProgress(!1)
            })), this._pw_take_btn_plus = this._pw_panel_take.getChildByName("btn_plus").getComponent(c), this._pw_take_btn_plus.node.on("click", (t => {
                k.AudioMgr.playButtonSound("button_click"), this._addSliderProgress(!0)
            })), this._pw_take_slider = this._pw_panel_take.getChildByName("slider").getComponent(w), this._pw_take_slider_bg = this._pw_take_slider.node.getChildByName("img_bg").getComponent(s), this._pw_take_slider_sp = this._pw_take_slider.node.getChildByName("img_sp").getComponent(s), this._pw_take_slider.node.on("slide", this._onSliderEvent, this)
        }
        _initPanelCandidate() {
            this._pc_list = this.panel_candidate.getChildByName("list"), this._pc_txt_desc = this.panel_candidate.getChildByName("txt_desc").getComponent(d)
        }
        _autoAnimFunc(t, e) {
            this.node.active = !0, this.img_bg.node.active = !0, N.stopAll(this.img_bg.node);
            let i = null,
                n = x.g_fullScreenOffset.x;
            if (t) {
                let t = p(this.getWinSize().width / 2 + this.img_bg.node.addOrGetComponent(S).width / 2, 0, 0),
                    _ = p(this.getWinSize().width / 2 - this.img_bg.node.addOrGetComponent(S).width / 2 - n, 0);
                this.img_bg.node.setPosition(t);
                let s = () => {
                    this.img_bg.node.setPosition(_), this.img_shield.getComponent(C).enabled = !1
                };
                i = e ? T().to(.3, {
                    position: _
                }, {
                    easing: y.backOut
                }).call(s) : T().call(s)
            } else {
                let t = p(this.getWinSize().width / 2 - this.img_bg.node.addOrGetComponent(S).width / 2 - n, 0),
                    _ = p(this.getWinSize().width / 2 + this.img_bg.node.addOrGetComponent(S).width / 2, 0);
                this.img_bg.node.setPosition(t);
                let s = () => {
                    this.img_bg.node.setPosition(_), this.img_shield.getComponent(C).enabled = !1, this.node.active = !1
                };
                i = e ? T().to(.3, {
                    position: _
                }, {
                    easing: y.backIn
                }).call(s) : T().call(s)
            }
            i && (i.target(this.img_bg.node).start(), this.img_shield.getComponent(C).enabled = !0)
        }
        _updateWaittingView() {
            this._checkDealerBtnStatus();
            {
                if (!this._pw_list_sv) {
                    this._pw_list_sv = this._pw_list.getComponent(H), this._pw_list_sv.bindPrefab(this.prefab_dealerListItem, "HumanboyDealerListItem"), this._pw_list_sv.generateItemPool(), this._pw_list_sv.addComponent(E).nTag = this.getViewType()
                }
                let t = D.getHumanboyRoom().vDealerWatingList;
                this._pw_list_sv.reloadView(t);
                let e = k.StringTools.formatC(k.config.getStringData("Humanboy_game_dealer_line_up"), t.length);
                k.StringTools.setRichTextString(this.rtxt_prompt.node, e)
            } {
                let t = k.dataHandler.getUserData().u32Uid;
                if (D.getHumanboyRoom().isInDealerWatingList(t)) {
                    this._pw_txt_waitting.node.active = !0, this._pw_panel_take.active = !1;
                    let t = this._pw_txt_waitting.node.position.y - this._pw_btn_dealer.node.position.y;
                    this._pw_txt_desc.node.setPosition(this._pw_txt_desc.node.position.x, this._pw_txt_waitting.node.position.y + t, this._pw_txt_desc.node.position.z);
                    let e = k.resMgr.getLabelStringSize(this._pw_txt_desc),
                        i = this._pw_txt_desc.node.position.y + (1 - this._pw_txt_desc.node.getComponent(S).anchorY) * e.height;
                    i += 20;
                    let n = this._pw_list_scr_size.width,
                        _ = this.panel_waitting.getComponent(S).height - i;
                    this._pw_list_sv.resetScrollVewSize(b(n, _));
                    let s = p(g.ZERO);
                    s.x = this._pw_list_scr_pos.x, s.y = this.panel_waitting.getComponent(S).height + (this._pw_list_sv.node.getComponent(S).anchorY - 1) * this._pw_list_sv.node.getComponent(S).height, this._pw_list_sv.node.setPosition(s)
                } else this._pw_txt_waitting.node.active = !1, this._pw_panel_take.active = !0, this._pw_txt_desc.node.setPosition(this._pw_txt_desc_scr_pos), this._pw_list_sv.resetScrollVewSize(this._pw_list_scr_size), this._pw_list_sv.node.setPosition(this._pw_list_scr_pos), this._resetSliderPercent()
            }
        }
        _updateCandidateView() {
            if (!this._pc_list_sv) {
                this._pc_list_sv = this._pc_list.getComponent(H), this._pc_list_sv.bindPrefab(this.prefab_dealerListItem, "HumanboyDealerListItem"), this._pc_list_sv.generateItemPool(), this._pc_list_sv.addComponent(E).nTag = this.getViewType()
            }
            let t = D.getHumanboyRoom().vDealerCandidateList;
            this._pc_list_sv.reloadView(t);
            let e = k.StringTools.formatC(k.config.getStringData("Humanboy_game_dealer_candidate"), t.length);
            k.StringTools.setRichTextString(this.rtxt_prompt.node, e)
        }
        _updateDealerDesc() {
            let t = D.getHumanboyRoom().uTotalStockNum,
                e = D.getHumanboyRoom().tCurRoom.moneyPerStock,
                i = D.getHumanboyRoom().tCurRoom.singleMaxStock,
                n = D.getHumanboyRoom().transGoldShortString(e),
                _ = D.getHumanboyRoom().transGoldShortString(t * e),
                s = k.StringTools.formatC(k.config.getStringData("Humanboy_game_dealer_desc"), _, n, t, i);
            this._pw_txt_desc.string = k.StringTools.calculateAutoWrapString(this._pw_txt_desc.node, s), this._pc_txt_desc.string = k.StringTools.calculateAutoWrapString(this._pc_txt_desc.node, s)
        }
        _setBtnMinusEnable(t) {
            this._pw_take_btn_minus.node.getComponent(s).color = t ? m.WHITE : u(127, 127, 127, 255), this._pw_take_btn_minus.interactable = t
        }
        _setBtnPlusEnable(t) {
            this._pw_take_btn_plus.node.getComponent(s).color = t ? m.WHITE : u(127, 127, 127, 255), this._pw_take_btn_plus.interactable = t
        }
        _setSliderEnable(t) {
            this._pw_take_slider.handle.node.getComponent(s).color = t ? m.WHITE : u(127, 127, 127, 255), this._pw_take_slider.handle.getComponent(c).interactable = t, this._pw_take_slider.enabled = t
        }
        _addSliderProgress(t) {
            let e = D.getHumanboyRoom().uTotalStockNum,
                i = D.getHumanboyRoom().uCanBuyStockNum,
                n = k.StringTools.div(1, e);
            if (t) {
                let t = k.StringTools.plus(this._pw_take_slider.progress, n);
                t <= k.StringTools.times(i, n) ? (this._pw_take_slider.progress = t, this._setBtnMinusEnable(!0), this._updateSliderPercent()) : this._setBtnPlusEnable(!1)
            } else {
                let t = k.StringTools.minus(this._pw_take_slider.progress, n);
                t >= k.StringTools.times(this._pw_take_slider_min_percent, n) ? (this._pw_take_slider.progress = t, this._setBtnPlusEnable(!0), this._updateSliderPercent()) : this._setBtnMinusEnable(!1)
            }
        }
        _onSliderEvent(t) {
            let e = D.getHumanboyRoom().uTotalStockNum,
                i = D.getHumanboyRoom().uCanBuyStockNum,
                n = k.StringTools.div(1, e),
                _ = Math.ceil(k.StringTools.div(this._pw_take_slider.progress, n));
            _ = Math.max(_, this._pw_take_slider_min_percent), _ = Math.min(_, i), _ = k.StringTools.times(_, n), this._pw_take_slider.progress = _, this._updateSliderPercent()
        }
        _resetSliderPercent() {
            let t = D.getHumanboyRoom().uTotalStockNum,
                e = k.StringTools.div(1, t);
            this._pw_take_slider_min_percent = 1, this._pw_take_slider.progress = k.StringTools.times(this._pw_take_slider_min_percent, e), this._updateSliderPercent()
        }
        _updateSliderPercent() {
            if (!this.panel_waitting.active) return;
            this._pw_take_slider_sp.node.addOrGetComponent(S).width = k.StringTools.times(this._pw_take_slider.progress, this._pw_take_slider.node.addOrGetComponent(S).width);
            let t = D.getHumanboyRoom().tCurRoom.moneyPerStock,
                e = D.getHumanboyRoom().uTotalStockNum,
                i = D.getHumanboyRoom().uCanBuyStockNum,
                n = k.StringTools.div(1, e);
            this._setSliderEnable(i > 0), this._setBtnPlusEnable(this._pw_take_slider.progress <= k.StringTools.times(i - 1, n)), this._setBtnMinusEnable(this._pw_take_slider.progress >= k.StringTools.times(this._pw_take_slider_min_percent + 1, n));
            let _ = D.getHumanboyRoom().transGoldShortString(t),
                s = D.getHumanboyRoom().transGoldShortString(t * e);
            k.StringTools.setRichTextString(this._pw_take_rtxt_take_min.node, k.StringTools.formatC("Min:%s", _)), k.StringTools.setRichTextString(this._pw_take_rtxt_take_max.node, k.StringTools.formatC("Max:%s", s));
            let o = k.StringTools.div(this._pw_take_slider.progress, n);
            o = k.StringTools.times(o, t);
            let a = k.StringTools.formatC(k.config.getStringData("Humanboy_game_dealer_take_in"), D.getHumanboyRoom().transGoldShortString(o));
            k.StringTools.setRichTextString(this._pw_take_rtxt_take_in.node, a);
            let l = D.getHumanboyRoom().getPlayerBeforeSettlementGold(k.dataHandler.getUserData().u32Uid),
                r = k.StringTools.formatC(k.config.getStringData("Humanboy_game_dealer_have_in"), D.getHumanboyRoom().transGoldShortString(l));
            k.StringTools.setRichTextString(this._pw_take_rtxt_have_in.node, r)
        }
        _onClickBtnDealer() {
            switch (this._btnStatus) {
                case q.HDB_STATUS_NONE:
                    break;
                case q.HDB_STATUS_RECHARGE:
                    k.MessageCenter.send("on_recharge_notify");
                    break;
                case q.HDB_STATUS_DEALER_APPLY_WAIT: {
                    this.setBtnDealerEnable(!1);
                    let t = D.getHumanboyRoom().uTotalStockNum,
                        e = k.StringTools.div(1, t),
                        i = k.StringTools.div(this._pw_take_slider.progress, e);
                    k.humanboyNet.requestUpDealer(i)
                }
                break;
                case q.HDB_STATUS_DEALER_CANCEL_WAIT:
                    k.humanboyNet.requestCancelWait()
            }
        }
        _checkDealerBtnStatus() {
            this._setSliderEnable(!0), this.setBtnDealerEnable(!0);
            let t = k.dataHandler.getUserData().u32Uid,
                e = this._pw_btn_dealer.node.getChildByName("img").getComponent(s);
            e.node.active = !1;
            let i = this._pw_btn_dealer.node.getChildByName("txt").getComponent(d);
            i.string = "", D.getHumanboyRoom().tSelfPlayer.curCoin < D.getHumanboyRoom().tCurRoom.moneyPerStock ? (this._btnStatus = q.HDB_STATUS_RECHARGE, e.node.active = !0, i.string = k.config.getStringData("Humanboy_game_dealer_btn_txt_recharge"), i.node.addOrGetComponent(S).setContentSize(120, i.node.addOrGetComponent(S).height), i.node.setPosition(27, 0)) : D.getHumanboyRoom().isInDealerWatingList(t) ? (this._btnStatus = q.HDB_STATUS_DEALER_CANCEL_WAIT, i.string = k.config.getStringData("Humanboy_game_dealer_btn_txt_cancle"), i.node.addOrGetComponent(S).setContentSize(180, i.node.addOrGetComponent(S).height), i.node.setPosition(p(g.ZERO)), k.resMgr.setSpriteFrame(this.img_bg.node, "zh_CN/game/humanboy/humanboy_list_bg_1")) : (this._btnStatus = q.HDB_STATUS_DEALER_APPLY_WAIT, i.string = k.config.getStringData("Humanboy_game_dealer_btn_txt_up"), i.node.addOrGetComponent(S).setContentSize(180, i.node.addOrGetComponent(S).height), i.node.setPosition(p(g.ZERO)), this.checkBtnDealerEnable()), 2 === D.getHumanboyRoom().tDownDealerResp.doNow && (this._setSliderEnable(!1), this.setBtnDealerEnable(!1)), D.getHumanboyRoom().eCurState === A.humanboy_proto.RoundState.WAIT_NEXT_ROUND2 && (this._setSliderEnable(!0), this.setBtnDealerEnable(!0))
        }
    }).prototype, "prefab_dealerListItem", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(O.prototype, "img_shield", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(O.prototype, "img_bg", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(O.prototype, "rtxt_prompt", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(O.prototype, "panel_opt", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(O.prototype, "panel_waitting", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(O.prototype, "panel_candidate", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = O)) || W));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./cv.js";
import * as C from "./ScrollViewReuse.js";

function main() {
    var T, w, y, x, D, k, E, B, v, z, M, U, H, P, F, A, L, N, I, O, R, V, Y, G, W, $, q, K, X, j, J, Q, Z, tt, et, it, nt, ot, rt, st, at, lt, gt, ut, pt, dt, ct, ht, _t, bt, ft, mt, St, Ct, Tt, wt, yt, xt, Dt, kt, Et, Bt, vt, zt, Mt, Ut, Ht, Pt, Ft, At, Lt, Nt, It, Ot, Rt, Vt, Yt, Gt, Wt, $t, qt, Kt, Xt, jt, Jt, Qt, Zt, te, ee, ie, ne, oe, re, se, ae, le, ge, ue, pe, de, ce, he, _e, be, fe, me, Se, Ce, Te, we, ye, xe, De, ke, Ee, Be, ve, ze, Me, Ue, He, Pe, Fe, Ae, Le, Ne, Ie, Oe;
    n._RF.push({}, "2892fJvvthBgKzTx0SPaygo", "Safe", void 0);
    var Re = function(t) {
        return t[t.SAFE_TYPE_NONE = 0] = "SAFE_TYPE_NONE", t[t.SAFE_TYPE_DEPOSIT = 1] = "SAFE_TYPE_DEPOSIT", t[t.SAFE_TYPE_TAKEOUT = 2] = "SAFE_TYPE_TAKEOUT", t[t.SAFE_TYPE_DETAIL = 3] = "SAFE_TYPE_DETAIL", t
    }(Re || {});
    const {
        ccclass: Ve,
        property: Ye
    } = d;
    t("Safe", (T = Ye(o), w = Ye(o), y = Ye(o), x = Ye(o), D = Ye(r), k = Ye(r), E = Ye(r), B = Ye(r), v = Ye(r), z = Ye(s), M = Ye(r), U = Ye(r), H = Ye(r), P = Ye(r), F = Ye(o), A = Ye(o), L = Ye(o), N = Ye(r), I = Ye(r), O = Ye(r), R = Ye(r), V = Ye(r), Y = Ye(r), G = Ye(o), W = Ye(r), $ = Ye(s), q = Ye(a), K = Ye(l), X = Ye(r), j = Ye(r), J = Ye(r), Q = Ye(r), Z = Ye(r), tt = Ye(o), et = Ye(r), it = Ye(s), nt = Ye(a), ot = Ye(l), rt = Ye(a), st = Ye(r), at = Ye(r), lt = Ye(r), gt = Ye(r), ut = Ye(o), pt = Ye(g), dt = Ye(u), ct = Ye(p), ht = Ye(p), _t = Ye(p), bt = Ye(p), ft = Ye(p), mt = Ye(p), St = Ye(p), Ct = Ye(p), Tt = Ye(p), wt = Ye(p), yt = Ye(p), xt = Ye(p), Dt = Ye(p), kt = Ye(p), Et = Ye(p), Bt = Ye(p), vt = Ye(s), Ve((Ut = e((Mt = class extends c {
        constructor(...t) {
            super(...t), i(this, "safe_instruct_btn", Ut, this), i(this, "deposit_btn", Ht, this), i(this, "takeout_btn", Pt, this), i(this, "detail_btn", Ft, this), i(this, "deposit_panel", At, this), i(this, "takeout_panel", Lt, this), i(this, "detail_panel", Nt, this), i(this, "takeout", It, this), i(this, "instruct", Ot, this), i(this, "page_img", Rt, this), i(this, "depositbg", Vt, this), i(this, "detailbg", Yt, this), i(this, "takeoutbg", Gt, this), i(this, "threebg", Wt, this), i(this, "threeCloseBtn", $t, this), i(this, "instructCloseBtn", qt, this), i(this, "takeoutCloseBtn", Kt, this), i(this, "accountgold_txt", Xt, this), i(this, "accountgold_text", jt, this), i(this, "safebalance_txt", Jt, this), i(this, "safebalance_text", Qt, this), i(this, "deposit_txt", Zt, this), i(this, "deposit_text", te, this), i(this, "ok_btn1", ee, this), i(this, "deposit_slider", ie, this), i(this, "deposit_progress", ne, this), i(this, "deposit_editbox", oe, this), i(this, "deposit_toggle", re, this), i(this, "accountgold2_txt", se, this), i(this, "accountgold2_text", ae, this), i(this, "safebalance2_txt", le, this), i(this, "safebalance2_text", ge, this), i(this, "takeout2_txt", ue, this), i(this, "ok2_btn", pe, this), i(this, "deposit2_slider", de, this), i(this, "deposit2_progress", ce, this), i(this, "deposit2_editbox", he, this), i(this, "deposit2_toggle", _e, this), i(this, "pwd_editbox", be, this), i(this, "des_txt", fe, this), i(this, "hyperlink_text", me, this), i(this, "takeoutgold_txt", Se, this), i(this, "takeout2gold_txt", Ce, this), i(this, "ok3_btn", Te, this), i(this, "item_prefab", we, this), i(this, "scrollView", ye, this), i(this, "title1_txt", xe, this), i(this, "title2_txt", De, this), i(this, "title_instruct", ke, this), i(this, "title_1", Ee, this), i(this, "title_2", Be, this), i(this, "title_3", ve, this), i(this, "title_time", ze, this), i(this, "title_type", Me, this), i(this, "title_account", Ue, this), i(this, "title_balance", He, this), i(this, "safe_title_1", Pe, this), i(this, "safe_title_2", Fe, this), i(this, "safe_title_3", Ae, this), i(this, "safe_content_1", Le, this), i(this, "safe_content_2", Ne, this), i(this, "safe_content_3", Ie, this), this._closeCallback = null, this.once = !0, this._OptSelected = -1, this._viewType = Re.SAFE_TYPE_DEPOSIT, i(this, "selectedButtonBase", Oe, this), this.unselectedColor = new h(129, 141, 152)
        }
        onLoad() {
            this.safe_instruct_btn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("button_click.mp3"), this.threebg.active = !1, this.instruct.active = !0, this.takeout.active = !1
            }), this).bind(this), this.deposit_btn.node.on("click", (function() {
                this.onClickSelected(1)
            }), this), this.takeout_btn.node.on("click", (function() {
                this.onClickSelected(2)
            }), this), this.detail_btn.node.on("click", (function() {
                this.onClickSelected(3), S.worldNet.RequestStrongboxInfo();
                let t = this.scrollView.getComponent(C);
                this.once && (this.once = !1, t.bindPrefab(this.item_prefab, "SafeDetailItem", []), t.generateItemPool(), t.bindScrollEventTarget(this))
            }), this), this.threeCloseBtn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("close.mp3"), this._closeCallback && this._closeCallback(), S.MessageCenter.send("HideWebview_ShowWindows", !0), this.removeRegister(), this.node.removeFromParent()
            }), this).bind(this), this.instructCloseBtn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("close.mp3"), this.threebg.active = !0, this.instruct.active = !1, this.takeout.active = !1, setTimeout((() => {
                    this.updateView()
                }), 10)
            }), this).bind(this), this.takeoutCloseBtn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("close.mp3"), this.pwd_editbox.getComponent(a).string = "", this.threebg.active = !0, this.instruct.active = !1, this.takeout.active = !1
            }), this).bind(this), this.ok_btn1.node.on("click", (function() {
                if (S.AudioMgr.playButtonSound("button_click.mp3"), "" == this.deposit_editbox.getComponent(a).string) return void S.TT.showMsg(S.config.getStringData("Safe_input_account"), S.Enum.ToastType.ToastTypeError);
                let t = S.StringTools.showStringToNumber(this.deposit_editbox.getComponent(a).string);
                /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.deposit_editbox.getComponent(a).string) ? t <= S.StringTools.clientGoldByServer(S.dataHandler.getUserData().u32Chips) ? t > 0 ? S.worldNet.RequestDeposit(t) : S.TT.showMsg(S.config.getStringData("Safe_input_account"), S.Enum.ToastType.ToastTypeError) : S.TT.showMsg(S.config.getStringData("Safe_account_not_enough_money"), S.Enum.ToastType.ToastTypeError) : S.TT.showMsg(S.config.getStringData("Safe_correct_number"), S.Enum.ToastType.ToastTypeError)
            }), this).bind(this), this.ok2_btn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("button_click.mp3");
                let t = S.StringTools.showStringToNumber(this.deposit2_editbox.getComponent(a).string);
                if ("" != this.deposit2_editbox.getComponent(a).string)
                    if (t > S.StringTools.clientGoldByServer(S.dataHandler.getUserData().u32Deposit_gold)) S.TT.showMsg(S.config.getStringData("Safe_box_not_enough_money"), S.Enum.ToastType.ToastTypeError);
                    else {
                        /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(t.toString()) ? 0 != t ? S.appConfig.isPKW ? (this.threebg.active = !1, this.instruct.active = !1, this.takeout.active = !0, this.takeoutgold_txt.getComponent(p).string = S.StringTools.formatC(S.config.getStringData("Safe_takeoutgold_much"), this.deposit2_editbox.getComponent(a).string)) : (this.takeoutgold_txt.getComponent(p).string = S.StringTools.formatC(S.config.getStringData("Safe_takeoutgold_much"), this.deposit2_editbox.getComponent(a).string), S.worldNet.RequestTakeOut(S.StringTools.showStringToNumber(this.deposit2_editbox.getComponent(a).string), "")) : S.TT.showMsg(S.config.getStringData("Safe_output_account"), S.Enum.ToastType.ToastTypeError) : S.TT.showMsg(S.config.getStringData("Safe_correct_number"), S.Enum.ToastType.ToastTypeError)
                    }
                else S.TT.showMsg(S.config.getStringData("Safe_output_account"), S.Enum.ToastType.ToastTypeError)
            }), this).bind(this), this.ok3_btn.node.on("click", (function() {
                S.AudioMgr.playButtonSound("button_click.mp3");
                let t = this.pwd_editbox.getComponent(a).string;
                0 != t.length ? S.worldNet.RequestTakeOut(S.StringTools.showStringToNumber(this.deposit2_editbox.getComponent(a).string), t) : S.TT.showMsg(S.config.getStringData("ErrorCode2"), S.Enum.ToastType.ToastTypeWarning)
            }), this).bind(this), this.accountgold_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.safebalance_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold), this.accountgold2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.safebalance2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold), this.deposit_toggle.isChecked = !1, this.safebalance_text.getComponent(p).string = "********", _("Background", this.deposit_toggle.node).active = !0, this.deposit_toggle.node.on("toggle", (function() {
                this.accountgold_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit_toggle.isChecked ? (this.safebalance_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold), _("Background", this.deposit_toggle.node).active = !1) : (this.safebalance_text.getComponent(p).string = "********", _("Background", this.deposit_toggle.node).active = !0)
            }), this), this.deposit2_toggle.isChecked = !1, this.safebalance2_text.getComponent(p).string = "********", this.deposit2_toggle.node.on("toggle", (function() {
                this.accountgold2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit2_toggle.isChecked ? (this.safebalance2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold), _("Background", this.deposit2_toggle.node).active = !1) : (this.safebalance2_text.getComponent(p).string = "********", _("Background", this.deposit2_toggle.node).active = !0)
            }), this), this.onChangeLanguage(), this.updateSlider(), this.addRegister(), this.onClickSelected(1, !1)
        }
        onEnable() {
            S.MessageCenter.send(S.Enum.MessageCenterAction.RGButtonInFront, !0)
        }
        onDisable() {
            S.MessageCenter.send(S.Enum.MessageCenterAction.RGButtonInFront, !1)
        }
        chk(t) {
            var e = !0;
            if (!/^\d+(\.\d{0,2})?$/.exec(t)) {
                if (0 == t.length) return;
                S.TT.showMsg(S.config.getStringData("Safe_correct_number"), S.Enum.ToastType.ToastTypeError), e = !1
            }
            return e
        }
        limitDepositXiaoshu() {
            if (isNaN(Number(this.deposit_editbox.getComponent(a).string))) return void S.TT.showMsg(S.config.getStringData("Safe_correct_number"), S.Enum.ToastType.ToastTypeError);
            let t = Number(this.deposit_editbox.getComponent(a).string),
                e = t.toString().split(".");
            if (e.length > 1) return 1 == e[1].length ? void(this.deposit_editbox.getComponent(a).string = t.toString()) : void(this.deposit_editbox.getComponent(a).string = t.toFixed(3).slice(0, -1));
            this.chk(t.toString())
        }
        limitTakeOutXiaoshu() {
            if (isNaN(Number(this.deposit_editbox.getComponent(a).string))) return void S.TT.showMsg(S.config.getStringData("Safe_correct_number"), S.Enum.ToastType.ToastTypeError);
            let t = Number(this.deposit2_editbox.getComponent(a).string),
                e = t.toString().split(".");
            if (e.length > 1) return 1 == e[1].length ? void(this.deposit2_editbox.getComponent(a).string = t.toString()) : void(this.deposit2_editbox.getComponent(a).string = t.toFixed(3).slice(0, -1));
            this.chk(t.toString())
        }
        onChangeLanguage() {
            this.accountgold_txt.getComponent(p).string = S.config.getStringData("Safe_accountgold"), this.safebalance_txt.getComponent(p).string = S.config.getStringData("Safe_deposit_balance"), this.deposit_txt.getComponent(p).string = S.config.getStringData("Safe_depositgold"), this.accountgold2_txt.getComponent(p).string = S.config.getStringData("Safe_accountgold"), this.safebalance2_txt.getComponent(p).string = S.config.getStringData("Safe_deposit_balance"), this.takeout2gold_txt.getComponent(p).string = S.config.getStringData("Safe_takeoutgold"), this.des_txt.getComponent(p).string = S.config.getStringData("SecondaryPassword_des_text"), this.hyperlink_text.getComponent(p).string = S.config.getStringData("SecondaryPassword_hyperlink_text"), this.deposit_editbox.getComponent(a).placeholderLabel.string = S.config.getStringData("Safe_input_account"), this.deposit2_editbox.getComponent(a).placeholderLabel.string = S.config.getStringData("Safe_output_account"), this.pwd_editbox.getComponent(a).placeholderLabel.string = S.config.getStringData("SecondaryPassword_editBox_bg_editBox_text"), this.ok_btn1.getComponentInChildren(p).string = S.config.getStringData("Safe_ok"), this.ok2_btn.getComponentInChildren(p).string = S.config.getStringData("Safe_ok"), this.ok3_btn.getComponentInChildren(p).string = S.config.getStringData("Safe_ok"), this.title1_txt.getComponent(p).string = S.config.getStringData("Safe_strongbox"), this.title2_txt.getComponent(p).string = S.config.getStringData("Safe_strongbox"), this.title_instruct.getComponent(p).string = S.config.getStringData("Safe_instruct"), this.title_1.getComponent(p).string = S.config.getStringData("Safe_deposit"), this.title_2.getComponent(p).string = S.config.getStringData("Safe_takeout"), this.title_3.getComponent(p).string = S.config.getStringData("Safe_detail"), this.title_time.getComponent(p).string = S.config.getStringData("Safe_time"), this.title_type.getComponent(p).string = S.config.getStringData("Safe_type"), this.title_account.getComponent(p).string = S.config.getStringData("Safe_account"), this.title_balance.getComponent(p).string = S.config.getStringData("Safe_balance"), this.safe_title_1.getComponent(p).string = S.config.getStringData("Safe_title_1"), this.safe_title_2.getComponent(p).string = S.config.getStringData("Safe_title_2"), this.safe_title_3.getComponent(p).string = S.config.getStringData("Safe_title_3"), this.safe_content_1.getComponent(p).string = S.config.getStringData("Safe_content_1"), this.safe_content_2.getComponent(p).string = S.config.getStringData("Safe_content_2"), this.safe_content_3.getComponent(p).string = S.config.getStringData("Safe_content_3")
        }
        updateSlider() {
            let t = this,
                e = this.deposit_slider.getComponent(b);
            if (null == e || null == this.deposit_progress) return;
            e.progress = 0, this.deposit_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Chips ? e.enabled = !1 : e.enabled = !0, e.node.on("slide", (function(i) {
                t.deposit_progress.node.getComponent(f).width = 723 * e.progress;
                let n = S.dataHandler.getUserData().u32Chips * e.progress,
                    o = Math.floor(S.StringTools.clientGoldByServer(n));
                1 == e.progress && (o = S.StringTools.clientGoldByServer(S.dataHandler.getUserData().u32Chips)), 0 == e.progress ? t.deposit_editbox.getComponent(a).string = "" : t.deposit_editbox.getComponent(a).string = S.StringTools.numberToShowString(o)
            }));
            let i = this.deposit2_slider.getComponent(b);
            null != i && null != this.deposit2_progress && (i.progress = 0, this.deposit2_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Deposit_gold ? i.enabled = !1 : i.enabled = !0, i.node.on("slide", (function(e) {
                t.deposit2_progress.node.getComponent(f).width = 723 * i.progress;
                let n = S.dataHandler.getUserData().u32Deposit_gold * i.progress,
                    o = Math.floor(S.StringTools.serverGoldToShowNumber(n));
                1 == i.progress && (o = S.StringTools.serverGoldToShowNumber(S.dataHandler.getUserData().u32Deposit_gold)), 0 != i.progress ? t.deposit2_editbox.getComponent(a).string = o.toString() : t.deposit2_editbox.getComponent(a).string = ""
            })))
        }
        onSafeDetailList() {
            this.scrollView.getComponent(C).reloadView(S.dataHandler.getUserData().SafeDetailList)
        }
        onUpdateDepositAndGold() {
            this.accountgold_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit_toggle.isChecked && (this.safebalance_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold)), this.accountgold2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit2_toggle.isChecked && (this.safebalance2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold)), this.deposit_editbox.getComponent(a).string = "";
            let t = this.deposit_slider.getComponent(b);
            t.progress = 0, this.deposit_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Chips ? t.enabled = !1 : t.enabled = !0;
            let e = this.deposit2_slider.getComponent(b);
            e.progress = 0, this.deposit2_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Deposit_gold ? e.enabled = !1 : e.enabled = !0, this.onClickSelected(3), S.worldNet.RequestStrongboxInfo();
            let i = this.scrollView.getComponent(C);
            this.once && (this.once = !1, i.bindPrefab(this.item_prefab, "SafeDetailItem", []), i.generateItemPool(), i.bindScrollEventTarget(this))
        }
        onUpdateTakeOutBalance() {
            this.accountgold_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit_toggle.isChecked && (this.safebalance_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold)), this.accountgold2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Chips), this.deposit2_toggle.isChecked && (this.safebalance2_text.getComponent(p).string = S.StringTools.numToFloatString(S.dataHandler.getUserData().u32Deposit_gold)), this.deposit2_editbox.getComponent(a).string = "", this.pwd_editbox.getComponent(a).string = "", this.threebg.active = !0, this.instruct.active = !1, this.takeout.active = !1;
            let t = this.deposit_slider.getComponent(b);
            t.progress = 0, this.deposit_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Chips ? t.enabled = !1 : t.enabled = !0;
            let e = this.deposit2_slider.getComponent(b);
            e.progress = 0, this.deposit2_progress.node.getComponent(f).width = 0, 0 == S.dataHandler.getUserData().u32Deposit_gold ? e.enabled = !1 : e.enabled = !0, this.onClickSelected(3), S.worldNet.RequestStrongboxInfo();
            let i = this.scrollView.getComponent(C);
            this.once && (this.once = !1, i.bindPrefab(this.item_prefab, "SafeDetailItem", []), i.generateItemPool(), i.bindScrollEventTarget(this))
        }
        addRegister() {
            S.MessageCenter.register("SafeDetailList", this.onSafeDetailList.bind(this), this.node), S.MessageCenter.register("update_deposit_and_gold", this.onUpdateDepositAndGold.bind(this), this.node), S.MessageCenter.register("update_takeout_balance", this.onUpdateTakeOutBalance.bind(this), this.node), S.MessageCenter.register("update_slider_state", this.updateSlider.bind(this), this.node)
        }
        removeRegister() {
            S.MessageCenter.unregister("SafeDetailList", this.node), S.MessageCenter.unregister("update_deposit_and_gold", this.node), S.MessageCenter.unregister("update_takeout_balance", this.node), S.MessageCenter.unregister("update_slider_state", this.node), S.MessageCenter.send("closeOpenSafeBox")
        }
        onDestroy() {
            this.removeRegister()
        }
        onClickSelected(t, e = !0) {
            if (e && S.AudioMgr.playButtonSound("tab.mp3"), t == this._OptSelected) return;
            this._OptSelected = t;
            let i = this._OptSelected;
            this.setViewType(i)
        }
        setViewType(t) {
            this._viewType = t, this.updateView()
        }
        getViewType() {
            return this._viewType
        }
        updateView() {
            switch (this._viewType) {
                case Re.SAFE_TYPE_DEPOSIT:
                    this.deposit_panel.active = !0, this.takeout_panel.active = !1, this.detail_panel.active = !1, this.selectedButtonBase.node.setPosition(-227, this.selectedButtonBase.node.position.y), this.selectedButtonBase.node.getChildByName("label").getComponent(p).string = S.config.getStringData("Safe_deposit"), this.deposit_editbox.node.getChildByName("PLACEHOLDER_LABEL").getComponent(p).string = S.config.getStringData("Safe_input_account"), this.deposit_txt.getComponent(p).string = S.config.getStringData("Safe_depositgold"), _("Label", this.depositbg).getComponent(p).node.getComponent(m).color = new h(h.WHITE), _("Label", this.takeoutbg).getComponent(p).node.getComponent(m).color = this.unselectedColor, _("Label", this.detailbg).getComponent(p).node.getComponent(m).color = this.unselectedColor;
                    break;
                case Re.SAFE_TYPE_TAKEOUT:
                    this.deposit_panel.active = !1, this.takeout_panel.active = !0, this.detail_panel.active = !1, this.selectedButtonBase.node.setPosition(0, this.selectedButtonBase.node.position.y), this.selectedButtonBase.node.getChildByName("label").getComponent(p).string = S.config.getStringData("Safe_takeout"), this.deposit_txt.getComponent(p).string = S.config.getStringData("Safe_takeoutgold"), this.deposit_editbox.node.getChildByName("PLACEHOLDER_LABEL").getComponent(p).string = S.config.getStringData("Safe_output_account"), _("Label", this.depositbg).getComponent(p).node.getComponent(m).color = this.unselectedColor, _("Label", this.detailbg).getComponent(p).node.getComponent(m).color = this.unselectedColor, _("Label", this.takeoutbg).getComponent(p).node.getComponent(m).color = new h(h.WHITE);
                    break;
                case Re.SAFE_TYPE_DETAIL:
                    this.deposit_panel.active = !1, this.takeout_panel.active = !1, this.detail_panel.active = !0, this.selectedButtonBase.node.setPosition(227, this.selectedButtonBase.node.position.y), this.selectedButtonBase.node.getChildByName("label").getComponent(p).string = S.config.getStringData("Safe_detail"), _("Label", this.depositbg).getComponent(p).node.getComponent(m).color = this.unselectedColor, _("Label", this.detailbg).getComponent(p).node.getComponent(m).color = new h(h.WHITE), _("Label", this.takeoutbg).getComponent(p).node.getComponent(m).color = this.unselectedColor
            }
        }
        start() {}
        setCloseCallBack(t) {
            this._closeCallback = t
        }
        closeView() {
            this._closeCallback && this._closeCallback(), S.MessageCenter.send("HideWebview_ShowWindows", !0), this.removeRegister(), this.node.removeFromParent(), this.node.destroy()
        }
    }).prototype, "safe_instruct_btn", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(Mt.prototype, "deposit_btn", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(Mt.prototype, "takeout_btn", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(Mt.prototype, "detail_btn", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(Mt.prototype, "deposit_panel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(Mt.prototype, "takeout_panel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(Mt.prototype, "detail_panel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(Mt.prototype, "takeout", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(Mt.prototype, "instruct", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(Mt.prototype, "page_img", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(Mt.prototype, "depositbg", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(Mt.prototype, "detailbg", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(Mt.prototype, "takeoutbg", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(Mt.prototype, "threebg", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(Mt.prototype, "threeCloseBtn", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(Mt.prototype, "instructCloseBtn", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(Mt.prototype, "takeoutCloseBtn", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(Mt.prototype, "accountgold_txt", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(Mt.prototype, "accountgold_text", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(Mt.prototype, "safebalance_txt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(Mt.prototype, "safebalance_text", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(Mt.prototype, "deposit_txt", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(Mt.prototype, "deposit_text", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(Mt.prototype, "ok_btn1", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(Mt.prototype, "deposit_slider", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(Mt.prototype, "deposit_progress", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(Mt.prototype, "deposit_editbox", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(Mt.prototype, "deposit_toggle", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(Mt.prototype, "accountgold2_txt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(Mt.prototype, "accountgold2_text", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(Mt.prototype, "safebalance2_txt", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = e(Mt.prototype, "safebalance2_text", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(Mt.prototype, "takeout2_txt", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(Mt.prototype, "ok2_btn", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = e(Mt.prototype, "deposit2_slider", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(Mt.prototype, "deposit2_progress", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(Mt.prototype, "deposit2_editbox", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = e(Mt.prototype, "deposit2_toggle", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = e(Mt.prototype, "pwd_editbox", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = e(Mt.prototype, "des_txt", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = e(Mt.prototype, "hyperlink_text", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = e(Mt.prototype, "takeoutgold_txt", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = e(Mt.prototype, "takeout2gold_txt", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = e(Mt.prototype, "ok3_btn", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = e(Mt.prototype, "item_prefab", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = e(Mt.prototype, "scrollView", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = e(Mt.prototype, "title1_txt", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = e(Mt.prototype, "title2_txt", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = e(Mt.prototype, "title_instruct", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = e(Mt.prototype, "title_1", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = e(Mt.prototype, "title_2", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = e(Mt.prototype, "title_3", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = e(Mt.prototype, "title_time", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = e(Mt.prototype, "title_type", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = e(Mt.prototype, "title_account", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = e(Mt.prototype, "title_balance", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = e(Mt.prototype, "safe_title_1", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = e(Mt.prototype, "safe_title_2", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ae = e(Mt.prototype, "safe_title_3", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = e(Mt.prototype, "safe_content_1", [kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = e(Mt.prototype, "safe_content_2", [Et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = e(Mt.prototype, "safe_content_3", [Bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = e(Mt.prototype, "selectedButtonBase", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = Mt)) || zt));
    n._RF.pop()
}
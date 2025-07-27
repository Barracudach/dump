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
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./mttconfig.js";
import * as C from "./Pb.js";
import * as O from "./FormatParser.js";
import * as T from "./cv.js";
import * as _ from "./CrashTracing.js";
import * as P from "./CrashTracing.js";
import * as S from "./Translator.js";
import * as x from "./CurrencyValue.js";
import * as I from "./Enum.js";
import * as M from "./TweenControl.js";

function main() {
    var B, v, E, N, A, w, k, G, U, F, z, L, R, D, V, Y, Q, H, j, W, q, J, K, Z, $, X, tt, et, it, ot, nt, rt, lt, st, at, ut, ct, ht, dt, pt, yt, gt, mt, ft, bt, Ct, Ot, Tt, _t, Pt, St, xt, It, Mt, Bt, vt, Et, Nt, At, wt, kt, Gt, Ut, Ft, zt, Lt, Rt, Dt, Vt, Yt, Qt, Ht;
    o._RF.push({}, "e996fb4bjxKEokaZ08Ks26S", "MttAddOnBoxPkw", void 0);
    const {
        ccclass: jt,
        property: Wt
    } = a;
    t("AddOnBoxProperty", class {
        constructor(t, e, i, o = b.SIGN_UP_OPTIONS.all, n = null, r = null, l = [], s = "GOLD", a, u = 0, c = 0, h = 1, d = [], ...p) {
            if (this.popUpName = "", this.regFee = 0, this.gameId = 0, this.goldOption = !0, this.toolOption = !0, this.targetToolIds = [], this._tools = [], this.showTimer = 0, this.eventName = "", this.startDate = null, this.joinStatus = 0, this.playOnJoint = 0, this.currency = I.GOLDCOIN, this.displayCurrency = I.GOLDCOIN, this.exchangeRate = null, this.startingScore = 0, this.quantityMax = 1, this.toolMap = null, this.popUpName = t, this.regFee = O.DisplayGold(e), this.gameId = i, this.currency = T.appConfig.getWalletConfig().convertStringToCurrencyType(n), this.currency == I.None && (this.currency = I.CNY), this.displayCurrency = T.appConfig.getWalletConfig().convertStringToCurrencyType(s), this.displayCurrency == I.None && (this.displayCurrency = T.appConfig.getWalletConfig().defaultCurrency.type), this.exchangeRate = a, [this.goldOption, this.toolOption, this.targetToolIds] = this.getSignUpOptions(o), _.hasInstance() && (_.getInstance().startSpan(P.BuyIn), _.getInstance().addEventToSpan(P.BuyIn, "start popup", {
                    gameId: i,
                    regFee: e,
                    signUpOption: o,
                    convertCurrency: this.currency,
                    currency: n,
                    invitationCode: r,
                    exchangeRate: a
                })), this.toolOption) {
                this._tools = this.getToolsByGameId(i, e, this.toolOption && this.goldOption, this.targetToolIds, r, l);
                let t = "";
                this.tools.forEach((e => {
                    t += JSON.stringify(e) + ";"
                })), _.hasInstance() && _.getInstance().addEventToSpan(P.BuyIn, "tickets", {
                    filterTicket: t
                }), this._tools = this._tools.sort(((t, e) => {
                    let i = 864e13,
                        o = 864e13;
                    return t.Expiry && (i = t.Expiry.getTime()), e.Expiry && (o = e.Expiry.getTime()), i - o
                })), this._tools = this._tools.sort(((t, e) => {
                    let i = t.Config.ForId.indexOf(r),
                        o = e.Config.ForId.indexOf(r);
                    return i < o ? 1 : i > o ? -1 : 0
                })), l.length > 0 && (this._tools = this._tools.sort(((t, e) => {
                    let i = -1,
                        o = -1;
                    return t.Config.Tag && (i = l.indexOf(t.Config.Tag)), e.Config.Tag && (o = l.indexOf(e.Config.Tag)), o - i
                }))), this.gameId !== C.commonProto.GAME_CATEGORY.MTT && this.gameId !== C.commonProto.GAME_CATEGORY.COW_BOY && (this._tools = this._tools.slice(0, 3)), this.tools.forEach((t => {
                    t.platform = 1, d.forEach((e => {
                        e.id === t.ToolId && (t.platform = e.platform)
                    }))
                }))
            } else this._tools = [];
            this.showTimer = u, this.startingScore = c, this.quantityMax = h, this.toolMap = d, this.startDate = p.length > 0 ? p[0] : null, this.eventName = p.length > 1 ? p[1] : "", this.joinStatus = p.length > 2 ? p[2] : 0, this.playOnJoint = p.length > 3 ? p[3] : 0
        }
        get tools() {
            return this._tools
        }
        getSignUpOptions(t) {
            let e, i, o = [];
            if ((t = t.toLowerCase()).search(b.SIGN_UP_OPTIONS.all) >= 0) e = i = !0;
            else if (e = t.search(b.SIGN_UP_OPTIONS.gold) >= 0, t.search(b.SIGN_UP_OPTIONS.specific) >= 0) {
                var n;
                i = !0;
                let e = t.indexOf(b.SIGN_UP_OPTIONS.specific + ":"),
                    r = null == (n = t.slice(e + 1).match(/mtt:((a92|a93):\d+,*)+/g)) || null == (n = n.toString()) ? void 0 : n.slice(4);
                if (r)
                    for (let t of r.split(",")) {
                        let e = "";
                        t.indexOf(":") >= 0 && (e = t.split(":")[1]);
                        let i = parseFloat(e);
                        isNaN(i) || o.push(i)
                    }
                cc_mtt.vv.ConsoleLog.log("getSignUpOptions::specificTools:", o)
            } else i = t.search(b.SIGN_UP_OPTIONS.tool) >= 0, i || e || (e = !0);
            return [e, i, o]
        }
        checkHasSameToolId(t, e) {
            for (let i of t)
                if (i == e) return !0;
            return !1
        }
        checkHasSameCurrency(t) {
            return t == this.displayCurrency || t == I.GOLDCOIN && this.displayCurrency == I.CNY || this.displayCurrency == I.GOLDCOIN && null == t
        }
        getToolsByGameId(t, e, i, o, n, r) {
            let l = [],
                s = [],
                a = cc_mtt.vv.DataManager.backPackTool;
            0 == o.length && (s = r.length > 0 ? a.filter((t => null == t.Config.Tag || r.indexOf(t.Config.Tag) >= 0)) : a.filter((t => null == t.Config.Tag)));
            let u = O.DisplayGold(e);
            if (t == C.commonProto.GAME_CATEGORY.COW_BOY) return a.filter((e => e.Config.ForCategory.indexOf(t) >= 0 && e.Type !== C.commonProto.TOOL_TYPE.coupon));
            if (o.length > 0) {
                if (t == b.GAME_TO_TOOL_ID.AOF) l = a.filter((t => t.Config.Aof && this.checkHasSameToolId(o, t.ToolId)));
                else {
                    const e = cc_mtt.vv.DataManager.getNow();
                    l = a.filter((i => {
                        let n = O.DisplayGold(i.Value) == u,
                            r = i.Config.ForCategory.indexOf(t) >= 0,
                            l = this.checkHasSameCurrency(i.Currency),
                            s = this.checkHasSameToolId(o, i.ToolId),
                            a = !i.Expiry || i.Expiry && i.Expiry > e;
                        return n && r && l && s && a
                    }).bind(this))
                }
                return l
            }
            return l = t == b.GAME_TO_TOOL_ID.AOF ? a.filter((t => t.Config.Aof && t.Value == e || i && t.Type == C.commonProto.TOOL_TYPE.coupon)) : s.filter((e => {
                let o = O.DisplayGold(e.Value) == u,
                    r = e.Config.ForCategory.indexOf(t) >= 0,
                    l = !e.Config.ForId || 0 == e.Config.ForId.length || e.Config.ForId.length > 0 && e.Config.ForId.indexOf(n) >= 0,
                    s = this.checkHasSameCurrency(e.Currency) || i && e.Type == C.commonProto.TOOL_TYPE.coupon;
                return o && r && s && l
            }).bind(this)), l
        }
    });
    t("MttAddOnBoxPkw", (B = Wt(n), v = Wt(n), E = Wt(r), N = Wt(r), A = Wt(r), w = Wt(r), k = Wt(l), G = Wt(r), U = Wt(l), F = Wt(l), z = Wt(l), L = Wt(r), R = Wt(l), D = Wt(r), V = Wt([n]), Y = Wt(l), Q = Wt(l), H = Wt(l), j = Wt(x), W = Wt(x), q = Wt(x), J = Wt(s), K = Wt(r), Z = Wt(r), $ = Wt(r), X = Wt(r), tt = Wt(l), et = Wt(l), it = Wt(r), ot = Wt(r), nt = Wt(l), rt = Wt(l), lt = Wt(l), st = Wt(l), at = Wt(l), jt((ht = e((ct = class extends u {
        constructor(...t) {
            super(...t), i(this, "toggleGold", ht, this), i(this, "toggleTool", dt, this), i(this, "layoutGold", pt, this), i(this, "layoutTool", yt, this), this._actionSpeed = .15, this.toolSelected = null, this.AddOnBoxProperty = null, this.tools = [], this.aofReliveTime = 0, this.timerEndTime = 0, this.okCallback = void 0, this.cancelCallback = void 0, i(this, "blockLayer", gt, this), i(this, "popUp", mt, this), i(this, "title", ft, this), i(this, "balanceContainer", bt, this), i(this, "balanceValue", Ct, this), i(this, "messageTop", Ot, this), i(this, "messageBottom", Tt, this), i(this, "timer", _t, this), i(this, "timerValue", Pt, this), i(this, "layouts", St, this), i(this, "layout_1_Toggles", xt, this), i(this, "layout_1_Scores", It, this), i(this, "layout_2_Score", Mt, this), i(this, "layout_3_Score", Bt, this), i(this, "layout_1_PriceCurrency", vt, this), i(this, "layout_2_PriceCurrency", Et, this), i(this, "layout_3_PriceCurrency", Nt, this), i(this, "slider", At, this), i(this, "sliderFill", wt, this), i(this, "sliderStepGroup", kt, this), i(this, "sliderStepTemplate", Gt, this), i(this, "space", Ut, this), i(this, "cancelButtonText", Ft, this), i(this, "okButtonText", zt, this), this.morebuyQuantityMax = 1, this.morebuyCount = 1, this.morebuyCountCache = 1, this.morebuyScore = 0, this.progressPercent = 0, this.lastMaxNum = 0, i(this, "layoutAddOn", Lt, this), i(this, "layoutCancelConfirm", Rt, this), i(this, "cancelTitle", Dt, this), i(this, "cancelMessage", Vt, this), i(this, "cancelTimerValue", Yt, this), i(this, "retryButtonText", Qt, this), i(this, "dismissButtonText", Ht, this)
        }
        onLoad() {
            this.node.getComponent(c).opacity = 0, this.popUp.scale = new h(1e-4, 1e-4, 1), this.toggleGold.node.on("toggle", (() => {
                this.toolSelected = null, this.morebuyCount = this.morebuyCountCache, this.switchRegFeeLayout(0)
            })), this.toggleTool.node.on("toggle", (() => {
                this.toolSelected = this.tools[0], this.morebuyCount = 1, this.switchRegFeeLayout(1)
            }))
        }
        callPopUp(t, e, i) {
            if (d(this.node)) return this.AddOnBoxProperty = t, this.morebuyQuantityMax = this.AddOnBoxProperty.quantityMax, this.morebuyScore = this.AddOnBoxProperty.startingScore, this.setInfo(), this.setupEndTimeTimer(t.showTimer), this.okCallback = e, this.cancelCallback = i, this.scheduleOnce((() => {
                this.zoomIn()
            }), 0), this
        }
        setInfo() {
            cc_mtt.vv.ConsoleLog.log("MttAddOnBoxPkw setInfo", this.AddOnBoxProperty), this.title.string = this.AddOnBoxProperty.popUpName, this.AddOnBoxProperty.goldOption ? (this.switchGoldLayout(), this.toolSelected = null, this.toggleGold.isChecked = !0) : this.toggleGold.interactable = !1, this.AddOnBoxProperty.toolOption && this.AddOnBoxProperty.tools.length > 0 ? (this.createTickets(), this.toolSelected = this.tools[0], this.toggleTool.isChecked = !0) : this.toggleTool.interactable = !1, this.balanceValue.string = "$" + O.ThousandPointFormat(T.StringTools.serverGoldToShowNumber(T.dataHandler.getUserData().total_amount)), this.balanceContainer.active = this.toggleGold.isChecked, this.cancelButtonText.string = S("POP_UP_OPTION.MOREBUY.BUTTON_CANCEL"), this.okButtonText.string = S("POP_UP_OPTION.MOREBUY.BUTTON_CONFIRM"), this.messageTop.string = S("POP_UP_OPTION.MOREBUY.MESSAGE_TOP"), this.messageBottom.string = S("POP_UP_OPTION.MOREBUY.MESSAGE_BOTTOM"), this.messageBottom.node.active = this.toggleGold.isChecked && this.morebuyQuantityMax <= 3 || this.toggleTool.isChecked, this.cancelTitle.string = S("POP_UP_OPTION.MOREBUY.CANCEL_CONFIRM_TITLE"), this.cancelMessage.string = S("POP_UP_OPTION.MOREBUY.CANCEL_CONFIRM_MESSAGE"), this.dismissButtonText.string = S("POP_UP_OPTION.MOREBUY.CANCEL_CONFIRM_BUTTON_DISMISS"), this.retryButtonText.string = S("POP_UP_OPTION.MOREBUY.CANCEL_CONFIRM_BUTTON_RETRY")
        }
        setupEndTimeTimer(t = 0) {
            if (t > 0) {
                this.timer.active = !0, this.timerEndTime = t;
                const e = Math.floor((this.timerEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
                this.timerValue.string = p.formatStr(S("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), e), this.cancelTimerValue.string = p.formatStr(S("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), e), this.schedule(this.updateEndTimeTimer)
            }
        }
        updateEndTimeTimer() {
            const t = Math.floor((this.timerEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
            if (t <= -1) return this.onDismissClicked(), this.unschedule(this.updateEndTimeTimer), void(this.timerEndTime = 0);
            this.timerValue.string = p.formatStr(S("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), t), this.cancelTimerValue.string = p.formatStr(S("POP_UP_OPTION.MOREBUY.TIME_REMAIN"), t)
        }
        createTickets() {
            this.tools = this.AddOnBoxProperty.tools, cc_mtt.vv.ConsoleLog.log("createTickets", this.tools.length, this.tools), this.layout_2_Score.string = O.ThousandPointFormat(this.morebuyScore), this.tools[0].Value ? this.layout_2_PriceCurrency.forEach((t => t.updateVal(O.DisplayGold(this.tools[0].Value).toString(), this.AddOnBoxProperty.currency, !1, this.AddOnBoxProperty.displayCurrency, this.AddOnBoxProperty.exchangeRate))) : this.layout_2_PriceCurrency.forEach((t => t.updateVal(O.DisplayGold(this.AddOnBoxProperty.regFee).toString(), this.AddOnBoxProperty.currency, !1, this.AddOnBoxProperty.displayCurrency, this.AddOnBoxProperty.exchangeRate)))
        }
        zoomIn() {
            cc_mtt.vv.ConsoleLog.log("MttAddOnBoxPkw zoomIn");
            let t = 1;
            T.appConfig.isLandscapeLayout || (t = 1.5), M.fade(this.blockLayer, this._actionSpeed, 102), M.scaleTo(this.popUp, this._actionSpeed, y(t, t, t), g.backOut, (() => {
                M.fade(this.node, this._actionSpeed, 255)
            }))
        }
        zoomOut() {
            M.fadeOut(this.blockLayer, this._actionSpeed), M.scaleTo(this.popUp, this._actionSpeed, y(1e-4, 1e-4, 1e-4), g.backIn, (() => {
                this.node.destroy()
            }))
        }
        showCancelConfirm() {
            this.layoutAddOn.active = !1, this.layoutCancelConfirm.active = !0
        }
        hideCancelConfirm() {
            this.layoutAddOn.active = !0, this.layoutCancelConfirm.active = !1
        }
        onOkClicked() {
            cc_mtt.vv.ConsoleLog.log("addon pop ok clicked"), this.cancelCallback = null, this.unschedule(this.updateEndTimeTimer), this.okCallback instanceof Function && (cc_mtt.vv.ConsoleLog.log("sign pop option:", this.toolSelected), this.okCallback(this.toolSelected)), this.zoomOut()
        }
        onCancelClicked() {
            cc_mtt.vv.ConsoleLog.log("addon pop cancel btn clicked"), this.showCancelConfirm()
        }
        onRetryClicked() {
            cc_mtt.vv.ConsoleLog.log("addon pop retry btn clicked"), this.hideCancelConfirm()
        }
        onDismissClicked() {
            cc_mtt.vv.ConsoleLog.log("addon pop dismiss btn clicked"), cc_mtt.vv.ConsoleLog.log("signupBox:cancel", !!this.cancelCallback), this.cancelCallback instanceof Function && this.cancelCallback(), this.zoomOut()
        }
        switchRegFeeLayout(t) {
            switch (t) {
                case 0:
                    this.layoutGold.active = !0, this.layoutTool.active = !1, this.balanceContainer.active = !0, this.morebuyQuantityMax >= 4 && (this.messageBottom.node.active = !1);
                    break;
                case 1:
                    this.layoutGold.active = !1, this.layoutTool.active = !0, this.balanceContainer.active = !1, this.messageBottom.node.active = !0
            }
        }
        switchGoldLayout() {
            for (let t = 0; t < this.layout_1_Toggles.length; t++) this.layout_1_Toggles[t].node.active = !1;
            if (this.layouts[0].active = this.morebuyQuantityMax < 4, this.layouts[2].active = !this.layouts[0].active, this.layouts[0].active)
                for (let t = 0; t < this.morebuyQuantityMax && t < this.layout_1_Scores.length; t++) this.layout_1_Scores[t].string = (this.morebuyScore * (t + 1)).toString(), this.layout_1_PriceCurrency[t].updateVal(O.DisplayGold(this.AddOnBoxProperty.regFee * (t + 1)).toString(), this.AddOnBoxProperty.currency, !1, this.AddOnBoxProperty.displayCurrency, this.AddOnBoxProperty.exchangeRate), this.layout_1_Toggles[t].node.on("toggle", (() => {
                    this.toolSelected = null, this.morebuyCount = t + 1, this.morebuyCountCache = this.morebuyCount
                })), this.layout_1_Toggles[t].node.active = !0;
            else this.slider.progress = 0, this.slider.node.on("slide", this.onSliderMove, this), this.slider.handle.node.getComponentInChildren(l).string = this.morebuyCount.toString(), this.layout_3_PriceCurrency.forEach((t => t.updateVal(O.DisplayGold(this.AddOnBoxProperty.regFee * this.morebuyCount).toString(), this.AddOnBoxProperty.currency, !1, this.AddOnBoxProperty.displayCurrency, this.AddOnBoxProperty.exchangeRate))), this.layout_3_Score.string = O.ThousandPointFormat(this.morebuyScore * this.morebuyCount), this.setupSliderStep()
        }
        setupSliderStep() {
            if (this.morebuyQuantityMax < 4) return;
            let t = Math.abs(this.slider.handle.node.position.x / (this.morebuyQuantityMax - 1) * 2);
            for (let e = 0; e < this.morebuyQuantityMax; e++) {
                let i = m(this.sliderStepTemplate);
                i.parent = this.sliderStepGroup, i.setPosition(new h(this.slider.handle.node.position.x + t * e, 0, i.position.z)), i.active = !0
            }
        }
        onSliderMove(t) {
            let e = [0, 100],
                i = e[1] / (this.morebuyQuantityMax - 1),
                o = Math.round(100 * t.progress),
                n = Math.floor(e[1] / i);
            for (let e = 0; e < n; e++) {
                let n = (e + 1) * i;
                if (o > e * i && o <= n) {
                    t.progress = n / 100, this.progressPercent = n, this.lastMaxNum !== n && (this.lastMaxNum = n, this.morebuyCount = e + 2, this.morebuyCountCache = this.morebuyCount);
                    break
                }
                t.progress = 0, this.progressPercent = 0, this.lastMaxNum !== n && (this.lastMaxNum = 0)
            }
            this.progressPercent <= 0 ? (this.morebuyCount = 1, this.morebuyCountCache = this.morebuyCount) : this.progressPercent >= 100 && (this.morebuyCount = this.morebuyQuantityMax, this.morebuyCountCache = this.morebuyCount), this.updateSliderFill(), this.updateMorebuyInfo()
        }
        updateSliderFill() {
            if (d(this.sliderFill)) {
                const t = Math.abs(this.slider.handle.node.position.x - -1 * Math.abs(this.slider.node.getComponent(f).width / 2));
                this.sliderFill.getComponent(f).height = t, this.sliderFill.setPosition(new h(this.slider.handle.node.position.x - t / 2, 0))
            }
        }
        updateMorebuyInfo() {
            this.slider.handle.node.getComponentInChildren(l).string = this.morebuyCount.toString(), this.layout_3_PriceCurrency.forEach((t => t.updateVal(O.ThousandPointFormat(O.DisplayGold(this.AddOnBoxProperty.regFee * this.morebuyCount)), this.AddOnBoxProperty.currency, !1, this.AddOnBoxProperty.displayCurrency, this.AddOnBoxProperty.exchangeRate))), this.layout_3_Score.string = O.ThousandPointFormat(this.morebuyScore * this.morebuyCount)
        }
    }).prototype, "toggleGold", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ct.prototype, "toggleTool", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ct.prototype, "layoutGold", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ct.prototype, "layoutTool", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ct.prototype, "blockLayer", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ct.prototype, "popUp", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ct.prototype, "title", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ct.prototype, "balanceContainer", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ct.prototype, "balanceValue", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(ct.prototype, "messageTop", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ct.prototype, "messageBottom", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ct.prototype, "timer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ct.prototype, "timerValue", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ct.prototype, "layouts", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), xt = e(ct.prototype, "layout_1_Toggles", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), It = e(ct.prototype, "layout_1_Scores", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Mt = e(ct.prototype, "layout_2_Score", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ct.prototype, "layout_3_Score", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ct.prototype, "layout_1_PriceCurrency", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Et = e(ct.prototype, "layout_2_PriceCurrency", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Nt = e(ct.prototype, "layout_3_PriceCurrency", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), At = e(ct.prototype, "slider", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ct.prototype, "sliderFill", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ct.prototype, "sliderStepGroup", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ct.prototype, "sliderStepTemplate", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(ct.prototype, "space", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(ct.prototype, "cancelButtonText", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(ct.prototype, "okButtonText", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ct.prototype, "layoutAddOn", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(ct.prototype, "layoutCancelConfirm", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ct.prototype, "cancelTitle", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(ct.prototype, "cancelMessage", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(ct.prototype, "cancelTimerValue", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(ct.prototype, "retryButtonText", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(ct.prototype, "dismissButtonText", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = ct)) || ut));
    o._RF.pop()
}
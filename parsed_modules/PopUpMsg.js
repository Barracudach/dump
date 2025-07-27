import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as x from "./cc.js";
import * as S from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as D from "./cv.js";
import * as U from "./Enum.js";
import * as L from "./Enum.js";
import * as _ from "./Enum.js";
import * as E from "./Enum.js";
import * as A from "./i18nText.js";
import * as M from "./APAspectRatioFitter.js";
import * as N from "./SlideView.js";
import * as B from "./DesignSystemButtonBase.js";
import * as z from "./DesignSystemRegularButton.js";
import * as F from "./TooltipsManager.js";
import * as G from "./profile_player_complaint.js";

function main() {
    var I, O, K, R, W, Z, V, H, Q, j, X, Y, q, J, $, tt, et, it, nt, ot, rt, st, at, lt, ht, pt, ut, ct, bt, gt, dt, mt, Ct, ft, Tt, St, xt, wt, yt, Pt, kt, vt, Dt, _t, Et, Ut, Lt, At, Mt, Nt, Bt, zt, Ft, Gt, It, Ot, Kt, Rt, Wt, Zt, Vt, Ht, Qt, jt, Xt, Yt, qt, Jt, $t, te, ee, ie, ne, oe, re, se, ae, le, he, pe, ue, ce, be;
    n._RF.push({}, "1d0b564nv9KfZzj5xahdRDn", "PopUpMsg", void 0);
    const {
        ccclass: ge,
        property: de
    } = u;
    t("PopUpMsg", (I = de(o), O = de(o), K = de(o), R = de(o), W = de(r), Z = de(r), V = de(s), H = de(o), Q = de(a), j = de(o), X = de(a), Y = de(o), q = de(r), J = de(s), $ = de(r), tt = de(o), et = de(A), it = de(o), nt = de(A), ot = de(o), rt = de(A), st = de(o), at = de(o), lt = de(o), ht = de(A), pt = de(o), ut = de(A), ct = de({
        tooltip: "Update title bg and label color based on popup type"
    }), bt = de({
        visible: function() {
            return this.updateTitleColor
        }
    }), gt = de({
        visible: function() {
            return this.updateTitleColor
        }
    }), dt = de({
        visible: function() {
            return this.updateTitleColor
        }
    }), mt = de({
        visible: function() {
            return this.updateTitleColor
        }
    }), Ct = de(o), ft = de(o), Tt = de(l), St = de([h]), xt = de(o), wt = de(o), yt = de(o), Pt = de(p), ge(((be = class t extends c {
        constructor(...t) {
            super(...t), i(this, "boxParent", Dt, this), i(this, "boxContent", _t, this), i(this, "btnClose", Et, this), i(this, "title", Ut, this), i(this, "titleLabel", Lt, this), i(this, "subtitleLabel", At, this), i(this, "text", Mt, this), i(this, "input", Nt, this), i(this, "inputField", Bt, this), i(this, "password", zt, this), i(this, "passwordField", Ft, this), i(this, "boxParentDark", Gt, this), i(this, "titleLabelDark", It, this), i(this, "textDark", Ot, this), i(this, "textLabelDark", Kt, this), i(this, "btnCancelDark", Rt, this), i(this, "btnCancelTextDark", Wt, this), i(this, "btnConfirmDark", Zt, this), i(this, "btnConfirmTextDark", Vt, this), i(this, "btnConfirmSingleDark", Ht, this), i(this, "btnConfirmSingleTextDark", Qt, this), i(this, "titleDark", jt, this), i(this, "btnContainerDark", Xt, this), i(this, "btnCancel", Yt, this), i(this, "btnCancelText", qt, this), i(this, "btnConfirm", Jt, this), i(this, "btnConfirmText", $t, this), i(this, "updateTitleColor", te, this), i(this, "colorNormal", ee, this), i(this, "colorWarning", ie, this), i(this, "colorError", ne, this), i(this, "colorSuccess", oe, this), i(this, "iconLoading", re, this), i(this, "iconParent", se, this), i(this, "iconSprite", ae, this), i(this, "icons", le, this), i(this, "gameLogoGroup", he, this), i(this, "topMarginSpacer", pe, this), i(this, "toggleContainer", ue, this), i(this, "doNotShowAgainToggle", ce, this), this.currentParams = null, this.currentParamsFromshowMsgi18n = null, this.popUpPrefab = null, this.popUpNode = null, this.popUp = null, this.sureCallback = null, this.cancelCallback = null, this.lastScreenWidth = 0, this.msgQueue = [], this.isCustomPrefab = !1, this.doNotShowAgainCallback = null, this.posDarkPopup = 0, this.delay1frame = !1, this.slideView = null
        }
        static getInstance() {
            return t.g_instance && t.g_instance.popUpPrefab || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
        static isGameMsgI18n(e) {
            return t.gameI18nKeys.includes(e)
        }
        static isGameMsg(e) {
            for (let i = 0; i < t.gameI18nKeys.length; i++)
                if (D.config.getStringData(t.gameI18nKeys[i]) == e) return !0;
            return !1
        }
        init() {
            let t = b.getBundle(D.appConfig.layoutUse);
            t ? this.onBundleLoaded(null, t) : b.loadBundle(D.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(t, e) {
            t ? g(t.message || t) : e.load("prefabs/PopUpMsg", d, function(t, e) {
                t ? g(t.message || t) : (this.popUpPrefab = e, this.createPopUp())
            }.bind(this))
        }
        onLoad() {
            this.slideView = this.getComponent(N)
        }
        onEnable() {
            m(this.boxContent, !0) && (this.updateBoxSize(), this.boxContent.on(o.EventType.SIZE_CHANGED, this.updateBoxSize, this)), this.node.on(D.Enum.CustomEvent.ActionHideStart, this.onActionHideStart, this), F.hideAllTooltips(), D.MessageCenter.register(D.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this), D.MessageCenter.register("switchSceneFinish", this.OnSceneChanged.bind(this), this)
        }
        onDisable() {
            var t, e;
            m(this.boxContent, !0) && this.boxContent.off(o.EventType.SIZE_CHANGED, this.updateBoxSize, this), this.node.off(D.Enum.CustomEvent.ActionHideStart, this.onActionHideStart, this), null != (t = this.password) && t.active && this.passwordField.node.off("text-changed", this.onTextChanged, this), null != (null == this || null == (e = this.currentParams) ? void 0 : e.cashGameScene) || this.node.active || D.tools.triggerPopupHideEvent(), D.MessageCenter.unregister(D.config.CHANGE_LANGUAGE, this), D.MessageCenter.unregister("switchSceneFinish", this)
        }
        showMsg(e) {
            if (this == t.g_instance) {
                if (t.isGameMsg(e.txt) || e.cashGameScene) {
                    var i, n;
                    let o = D.roomManager.getGameScene(null == (i = D.roomManager.rooms[0]) ? void 0 : i.getCurrentGameID(), null == (n = D.roomManager.rooms[0]) ? void 0 : n.getCurrentRoomID());
                    if (e.cashGameScene && (o = e.cashGameScene), o) {
                        let i = o.getComponentInChildren(C).getComponentInChildren(t);
                        if (i) return e.isPopupDarkActive = !0, void i.showMsg(e)
                    }
                }
                D.appConfig.getGeneralConfig().multiWindowEnabled && D.focusWindow(1)
            }
            if (null == this.node) this.popUp && m(this.popUpNode, !0) ? this.scheduleOnce(this.popUp.showMsg.bind(this.popUp, e)) : (this.msgQueue.push(e), this.createPopUp());
            else {
                if (0 == this.isCustomPrefab && D.StringTools.getStrLen(e.txt) <= 0) return;
                let t = !0;
                if (this.isNodeActive(!1)) {
                    const i = this.getTranslatedDataForPopup(e);
                    i && i.txt != this.text.string && (this.msgQueue.push(e), t = !1)
                }
                e.msgType === _.ToastTypeMalformedResponse && this.hide(), t && (e.willNotShow || (D.tools.showPopupOnTop(this.node, e.showAboveLoadingView), this.updatePopUp(e)))
            }
        }
        updatePopUp(e) {
            var i;
            if (this.node.active && !this.isCustomPrefab || null != (null == (i = e) ? void 0 : i.cashGameScene) || D.tools.triggerPopupShowEvent(), D.MessageCenter.send("hide_bombInfoTips"), D.native.SYwebCloseChildWebview(), e) {
                var n;
                if (e.isParamInKeyFormatMsgI18n && (this.currentParamsFromshowMsgi18n = e, e.isParamInKeyFormatMsgI18n = !1, e = this.getTranslatedDataForPopup(e)), this.currentParams = e, e.title && D.StringTools.getStrLen(e.title) > 0 ? (this.title.active = !0, this.titleLabel.string = e.title, this.topMarginSpacer && (this.topMarginSpacer.active = !0)) : 0 == this.isCustomPrefab && (this.title.active = !1, this.btnConfirm.active = !0, this.topMarginSpacer && (this.topMarginSpacer.active = !1)), this.subtitleLabel && (e.subtitle && D.StringTools.getStrLen(e.subtitle) > 0 ? (this.subtitleLabel.node.active = !0, this.subtitleLabel.string = e.subtitle) : 0 == this.isCustomPrefab && (this.subtitleLabel.node.active = !1)), e.txt && (this.text.string = e.txt, this.text.horizontalAlign = null == e.textAlignment ? r.HorizontalAlign.CENTER : e.textAlignment), this.input && (this.input.active = e.needEditBox || !1, this.inputField.string = ""), this.password) this.password.active = e.needPasswordField || !1, this.passwordField.string = "", null != (n = this.password) && n.active ? (this.passwordField.node.on("text-changed", this.onTextChanged, this), this.btnConfirm.getComponent(f).interactable = !1) : this.btnConfirm.getComponent(f).interactable = !0;
                let i = !0 === e.isTwoBtn;
                if (0 == this.isCustomPrefab) {
                    this.btnCancel.active = i;
                    let n = e.sureButtonType ?? (i ? E.Primary : E.PopupConfirmBtn);
                    if (t.isGameMsg(e.txt) || e.cashGameScene ? this.btnConfirm.getComponent(z).btnStyle = B.whiteCreamBtn : this.btnConfirm.getComponent(z).btnStyle = B[B[n]], i) {
                        let t = e.cancelButtonType ?? U.Third;
                        this.btnCancel.getComponent(z).btnStyle = B[B[t]]
                    }
                }(0 == this.isCustomPrefab || e.sureLabel || e.cancelLabel) && this.setButtonText(D.Enum.ButtonType.TWO_BUTTON, e.sureLabel, e.cancelLabel, i), this.sureCallback = e.sureCallback || null, this.cancelCallback = e.cancelCallback || null, this.setTitleAppearance(e.msgType || _.ToastTypeDefault), e.iconType == L.Loading ? (this.iconSprite.node.active = !1, this.iconLoading.active = !0) : this.updateIconSprite(e), m(this.gameLogoGroup, !0) && (!0 === e.isShowGameLogoGroup ? this.gameLogoGroup.active = !0 : this.gameLogoGroup.active = !1), !0 === e.isPopupDarkActive || e.cashGameScene && !1 !== e.isPopupDarkActive ? (this.boxParentDark && (this.boxParentDark.active = !0), this.boxParent && (this.boxParent.active = !1), e.title && D.StringTools.getStrLen(e.title) > 0 ? (this.titleDark && (this.titleDark.active = !0), this.titleLabelDark.string = e.title) : this.titleDark && (this.titleDark.active = !1), null != i && (this.btnCancelDark.active = i, this.btnConfirmDark.active = i, this.btnConfirmSingleDark.active = !i), e.txt && (m(this.textLabelDark) && e.useLabelForDarkText ? (this.textLabelDark.string = e.txt, this.textLabelDark.node.active = !0, m(this.textDark) && (this.textDark.node.active = !1)) : (m(this.textDark) && (this.textDark.string = e.txt, this.textDark.node.active = !0), m(this.textLabelDark) && (this.textLabelDark.node.active = !1)))) : (this.boxParentDark && (this.boxParentDark.active = !1), this.boxParent && (this.boxParent.active = !0)), this.btnConfirm && !0 === e.hideOkayBtn && (this.btnConfirm.active = !1), this.btnContainerDark && (this.btnContainerDark.active = !e.hideAllBtnsDarkPopup), this.toggleContainer && this.doNotShowAgainToggle && (this.doNotShowAgainToggle.node.active = !0 === e.doNotShowAgain, this.doNotShowAgainToggle.isChecked = !1, this.toggleContainer.active = !0 === e.doNotShowAgain), this.doNotShowAgainCallback = e.doNotShowAgainCallback || null
            }
            this.adaptWidgets(), this.updateDarkPopupPosition(e), this.slideView ? this.slideView.show(this.isCustomPrefab) : 0 == this.isCustomPrefab && (this.node.active = !0), this.showLoadingOnBtn(this.btnConfirm, !1)
        }
        updateDarkPopupPosition(t) {
            if (!D.appConfig.isLandscapeLayout && (!0 === t.isPopupDarkActive || t.cashGameScene && !1 !== t.isPopupDarkActive)) {
                0 == this.posDarkPopup && (this.posDarkPopup = this.boxParentDark.position.y);
                let t = D.config.getCurrentScene();
                if (D.config.IS_SCENE_LANDSCAPE(t)) {
                    var e;
                    const t = (null == (e = this.boxParentDark.parent) ? void 0 : e.getComponent(T).height) / 2;
                    this.boxParent.position = new S(this.boxParent.position.x, t, this.boxParent.position.z)
                } else this.boxParentDark.position = new S(this.boxParentDark.position.x, this.posDarkPopup, this.boxParentDark.position.z)
            }
        }
        updateIconSprite(t) {
            let e = null;
            this.iconSprite && (t.iconType ? t.iconType != L.None && (e = this.icons[t.iconType]) : t.msgType && (t.msgType == _.ToastTypeSuccess ? e = this.icons[L.Success] : t.msgType != _.ToastTypeWarning && t.msgType != _.ToastTypeError && t.msgType != _.ToastTypeMalformedResponse || (e = this.icons[L.Warning])), e ? (this.iconParent.active = !0, this.iconSprite.spriteFrame = e, this.iconSprite.node.emit(M), this.iconSprite.node.active = !0, this.iconLoading.active = !1) : 0 != this.isCustomPrefab && t.iconType != D.Enum.PopUpIconType.None || (this.iconParent.active = !1))
        }
        isNodeActive(t = !0) {
            var e;
            return null == this.node ? (null == (e = this.popUp) ? void 0 : e.isNodeActive(t)) ?? !1 : 0 == t && null != this.slideView ? this.slideView.isActive : this.node.active
        }
        getGeneralPopup() {
            return this.popUp
        }
        showPrefab(e, i, n = !0) {
            if (!e) return;
            let o = x(e);
            n ? w.getScene().getComponentInChildren(C).node.addChild(o) : (w.addPersistRootNode(o), o.addComponent(y)), o.setSiblingIndex(D.Enum.ZORDER_TYPE.ZORDER_TT);
            let r = o.getComponent(t);
            return null == r && (r = o.getComponentInChildren(t)), r && (r.popUpNode = o, r.isCustomPrefab = !0, r.updatePopUp(i)), o
        }
        setButtonText(t, e, i, n) {
            if (null == this.node) this.popUp && (this.delay1frame ? this.scheduleOnce(this.popUp.setButtonText.bind(this.popUp, t, e, i, n)) : this.popUp.setButtonText(t, e, i, n));
            else switch (t) {
                case D.Enum.ButtonType.TWO_BUTTON_FOLD:
                    this.btnCancelText.setKey("Zoom_button_text_1", !0), this.btnCancelTextDark.setKey("Zoom_button_text_1", !0), this.btnConfirmText.setKey("Zoom_button_text_2", !0), this.btnConfirmTextDark.setKey("Zoom_button_text_2", !0);
                    break;
                case D.Enum.ButtonType.TWO_BUTTON_FOLD_LOOK:
                    this.btnCancelText.setKey("Zoom_button_text_3", !0), this.btnCancelTextDark.setKey("Zoom_button_text_3", !0), this.btnConfirmText.setKey("Zoom_button_text_2", !0), this.btnConfirmTextDark.setKey("Zoom_button_text_2", !0);
                    break;
                case D.Enum.ButtonType.TWO_BUTTON_FOLD_LOOK_ZOOM:
                    this.btnCancelText.setKey("Zoom_button_text_3", !0), this.btnCancelTextDark.setKey("Zoom_button_text_3", !0), this.btnConfirmText.setKey("Zoom_button_text_new_hand", !0), this.btnConfirmTextDark.setKey("Zoom_button_text_new_hand", !0);
                    break;
                case D.Enum.ButtonType.ONE_BUTTON_BOOMTIP:
                    this.btnConfirmText.setText(D.config.getStringData("Got_It")), this.btnConfirmSingleTextDark.setText(D.config.getStringData("Got_It"));
                    break;
                default:
                    n && (i ? (this.btnCancelText.setText(D.StringTools.convertText(i, 2)), this.btnCancelTextDark.setText(D.StringTools.convertText(i, 2))) : (this.btnCancelText.setKey("Cancel", !0), this.btnCancelTextDark.setKey("Cancel", !0))), e ? (this.btnConfirmText.setText(D.StringTools.convertText(e, 2)), this.btnConfirmTextDark.setText(D.StringTools.convertText(e, 2)), this.btnConfirmSingleTextDark.setText(D.StringTools.convertText(e, 2))) : (n ? this.btnConfirmText.setKey("Confirm", !0) : this.btnConfirmText.setKey("Close", !0), this.btnConfirmSingleTextDark.setKey("OKAY", !0), this.btnConfirmTextDark.setKey("Confirm", !0))
            }
        }
        recharge() {
            null == this.node ? this.popUp && (this.delay1frame ? this.scheduleOnce(this.popUp.recharge.bind(this.popUp)) : this.popUp.recharge()) : this.btnCancelText.setKey("GameDomanShop_recharge_txt", !0)
        }
        setTitleAppearance(t) {
            if (!1 !== this.updateTitleColor) switch (t) {
                case _.ToastTypeSuccess:
                    this.title.getComponent(P).color = this.colorSuccess, this.titleLabel.node.getComponent(P).color = new k(k.BLACK);
                    break;
                case _.ToastTypeWarning:
                    this.title.getComponent(P).color = this.colorWarning, this.titleLabel.node.getComponent(P).color = new k(k.BLACK);
                    break;
                case _.ToastTypeError:
                case _.ToastTypeMalformedResponse:
                    this.title.getComponent(P).color = this.colorError, this.titleLabel.node.getComponent(P).color = new k(k.WHITE);
                    break;
                default:
                    this.title.getComponent(P).color = this.colorNormal, this.titleLabel.node.getComponent(P).color = new k(k.WHITE)
            }
        }
        onLanguageChange() {
            if (!this.currentParamsFromshowMsgi18n) return;
            let t = this.getTranslatedDataForPopup(this.currentParamsFromshowMsgi18n);
            this.updatePopUp(t)
        }
        OnSceneChanged() {
            if (D.tools.showPopupOnTop(this.node), D.isTopLevelAppClosePopupPresent) {
                const t = w.getScene(),
                    e = t.children.find((t => "AppClosePopUp" === t.name));
                e && m(e) && t.getComponentInChildren(C).node.addChild(e)
            }
        }
        getTranslatedDataForPopup(t) {
            let e = Object.assign({}, t);
            return e.txt = D.config.getStringData(e.txt, !1, e.txt), e.title && (e.title = D.config.getStringData(e.title)), e.subtitle && (e.subtitle = D.config.getStringData(e.subtitle)), e.sureLabel && (e.sureLabel = D.config.getStringData(e.sureLabel)), e.cancelLabel && (e.cancelLabel = D.config.getStringData(e.cancelLabel)), e
        }
        showMsgI18n(t) {
            t && (t.isParamInKeyFormatMsgI18n = !0, this.showMsg(t))
        }
        showFirstServerError(t, e) {
            D.SwitchLoadingView.hide();
            let i = null,
                n = "";
            if (null != t && (null != t.code && (n = t.code, i = D.config.getStringData("serverErrorCode" + t.code, !1, t.description || "Unknown error occured")), null != t.payload && "object" == typeof t.payload)) {
                let e = Object.keys(t.payload)[0],
                    n = t.payload[e][0];
                null != n && null != n.code && (i = D.config.getStringData("serverErrorCode" + n.code, !1, n.description || "Unknown error occured"), i = D.config.getStringData(e, !1, e) + ": " + i)
            }
            let o = L.Warning;
            "10000010" == n && (o = L.Location), null == i ? (i = D.config.getStringData("ErrorUnknown", !1, "Unknown error occured"), this.showMsg({
                txt: i,
                title: D.config.getStringData("Error"),
                sureCallback: e,
                iconType: o,
                msgType: _.ToastTypeError
            })) : this.showMsg({
                txt: i,
                title: D.config.getStringData("Attention"),
                sureCallback: e,
                iconType: o,
                msgType: _.ToastTypeWarning
            })
        }
        onBtnCancelClick() {
            D.AudioMgr.playButtonSound("button_click.mp3"), this.hide(), null != this.cancelCallback && this.cancelCallback(this.inputField)
        }
        injectCallbacks(t, e) {
            null == this.node ? this.popUp && (this.delay1frame ? this.scheduleOnce(this.popUp.injectCallbacks.bind(this.popUp, t, e)) : this.popUp.injectCallbacks(t, e)) : (t && (this.sureCallback = t), e && (this.cancelCallback = e))
        }
        onBtnSureClick() {
            var t;
            (D.AudioMgr.playButtonSound("button_click.mp3"), null != this.sureCallback) && (null != (t = this.password) && t.active ? this.sureCallback(this.passwordField) : this.sureCallback(this.inputField));
            null != this.doNotShowAgainCallback && this.doNotShowAgainToggle && this.doNotShowAgainCallback(this.doNotShowAgainToggle.isChecked), this.currentParams.shouldWaitForSureCallback ? (this.btnConfirm.getComponent(f).interactable = !1, this.showLoadingOnBtn(this.btnConfirm, !0)) : this.hide()
        }
        showLoadingOnBtn(t, e) {
            var i;
            t && (null == (i = t.getComponent(z)) || i.showLoadingAnim(e))
        }
        onActionHideStart(t = !1) {
            t && this.currentParams && !1 !== this.currentParams.onXCancelCallback && null != this.cancelCallback && (!0 === this.currentParams.onXCancelBySureCallback ? this.sureCallback(this.inputField) : this.cancelCallback(this.inputField))
        }
        onBtnXClick() {
            D.AudioMgr.playButtonSound("close.mp3"), this.currentParams && !1 !== this.currentParams.onXCancelCallback && null != this.cancelCallback && (!0 === this.currentParams.onXCancelBySureCallback ? this.sureCallback(this.inputField) : this.cancelCallback(this.inputField)), this.hide()
        }
        hide() {
            this.currentParamsFromshowMsgi18n = null, null != this.msgQueue && this.msgQueue.length > 0 ? this.updatePopUp(this.msgQueue.shift()) : this.slideView ? this.slideView.hide() : this.isCustomPrefab ? this.popUpNode.destroy() : this.node.active = !1
        }
        hidePopupWithMsgParams(e) {
            if (e)
                if (null == this.node) {
                    e.willNotShow = !0;
                    let o = this.popUp;
                    if (t.isGameMsg(e.txt) || e.cashGameScene) {
                        var i, n;
                        let r = D.roomManager.getGameScene(null == (i = D.roomManager.rooms[0]) ? void 0 : i.getCurrentGameID(), null == (n = D.roomManager.rooms[0]) ? void 0 : n.getCurrentRoomID());
                        e.cashGameScene && (r = e.cashGameScene), r && (o = r.getComponentInChildren(t))
                    }
                    o && m(o.node, !0) && o.hidePopupWithMsgParams(e)
                } else this.currentParams == e && this.hide()
        }
        hidePopupWithMsgTxt(t) {
            let e = this.popUp;
            e && m(e.node, !0) && e.currentParams && e.currentParams.txt == t && e.hide()
        }
        hideAndClearAllMsgInQueue() {
            null == this.node ? this.popUp && m(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.msgQueue = [], this.popUp.hideAndClearAllMsgInQueue()) : (this.msgQueue = [], this.hide())
        }
        adaptWidgets() {
            this.lastScreenWidth != v.getVisibleSize().width && (D.resMgr.adaptWidget(this.node, !0, !1), this.text.maxWidth = this.text.node.getComponent(T).width, this.lastScreenWidth = v.getVisibleSize().width)
        }
        updateBoxSize() {
            this.boxContent && (this.boxParent.getComponent(T).height = this.boxContent.getComponent(T).height, this.slideView && (this.slideView.defSize = this.boxContent.getComponent(T).height), this.btnClose && D.resMgr.adaptWidget(this.btnClose))
        }
        createPopUp() {
            this.popUpPrefab && m(this.popUpPrefab, !0) ? (this.popUpNode = x(this.popUpPrefab), w.addPersistRootNode(this.popUpNode), this.popUpNode.addComponent(y), this.popUpNode.setSiblingIndex(D.Enum.ZORDER_TYPE.ZORDER_TT), this.popUp = this.popUpNode.getComponent(t), this.popUp.adaptWidgets(), this.popUp.hide(), this.msgQueue.length > 0 && this.popUp.showMsg(this.msgQueue.shift())) : this.init()
        }
        onTextChanged() {
            this.checkPasswordField()
        }
        checkPasswordField() {
            this.passwordField.string.length > 0 ? (this.btnConfirm.getComponent(z).btnStyle = B[B[E.Primary]], this.btnConfirm.getComponent(f).interactable = !0) : (this.btnConfirm.getComponent(z).btnStyle = B[B[E.PopupConfirmBtn]], this.btnConfirm.getComponent(f).interactable = !1)
        }
        createGamePopup(e) {
            if (this.popUpPrefab && m(this.popUpPrefab, !0) && m(e)) {
                var i;
                this.popUpPrefab.data.active = !1;
                let n = x(this.popUpPrefab);
                n._persistNode = !0, null == e || null == (i = e.getComponentInChildren(C).node) || i.addChild(n), n.setSiblingIndex(D.Enum.ZORDER_TYPE.ZORDER_TT);
                let o = n.getComponent(t);
                o.popUpPrefab = this.popUpPrefab, o.popUpNode = n, o.popUp = o, o.adaptWidgets(), o.hide(), o.msgQueue.length > 0 && o.popUp.showMsg(o.msgQueue.shift())
            }
        }
        hidePopup() {
            null == this.node ? this.popUp.hide() : this.hide()
        }
        openPage(t) {
            let e = D.Enum.GlobalPageName[t];
            if (void 0 !== e) switch (e) {
                case D.Enum.GlobalPageName.PlayerSupport:
                    G.openSupport()
            }
        }
        onToggleClick() {
            D.AudioMgr.playButtonSound("button_click.mp3")
        }
    }).g_instance = void 0, be.gameI18nKeys = ["UIGameSceneTips3", "ServerErrorCode1201", "ServerErrorCode506", "ZoomQuickFold_tips", "ZoomQuickFold_tips2", "UIGameSceneTips28", "ServerErrorCode27", "ServerErrorCode28", "ServerErrorCode29", "ServerErrorCode30", "ServerErrorCode31", "ServerErrorCode32", "ServerErrorCode33", "ServerErrorCode34", "ServerErrorCode35", "ServerErrorCode36", "ServerErrorCode37", "ServerErrorCode38", "ServerErrorCode39", "ServerErrorCode40", "ServerErrorCode41", "ServerErrorCode42", "ServerErrorCode43", "ServerErrorCode44", "ServerErrorCode45", "ServerErrorCode89", "ServerErrorCode90", "ServerErrorCode91", "ServerErrorCode97", "ServerErrorCode503", "ServerErrorCode514", "ServerErrorCode1002", "ServerErrorCode1206", "SitDownErrorToast1", "ProhibitSitdown", "ProhibitSitdown2", "ProhibitSitdown3", "ProhibitSitdown4", "GameSeat_tourist_msg", "Restrict_tourist_msg", "ErrorToast30", "AuditMustTwoPersons", "SitOutNextHand"], Dt = e((vt = be).prototype, "boxParent", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(vt.prototype, "boxContent", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(vt.prototype, "btnClose", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(vt.prototype, "title", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(vt.prototype, "titleLabel", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(vt.prototype, "subtitleLabel", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(vt.prototype, "text", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(vt.prototype, "input", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(vt.prototype, "inputField", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(vt.prototype, "password", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(vt.prototype, "passwordField", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(vt.prototype, "boxParentDark", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(vt.prototype, "titleLabelDark", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(vt.prototype, "textDark", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(vt.prototype, "textLabelDark", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(vt.prototype, "btnCancelDark", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(vt.prototype, "btnCancelTextDark", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(vt.prototype, "btnConfirmDark", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(vt.prototype, "btnConfirmTextDark", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(vt.prototype, "btnConfirmSingleDark", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(vt.prototype, "btnConfirmSingleTextDark", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(vt.prototype, "titleDark", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(vt.prototype, "btnContainerDark", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(vt.prototype, "btnCancel", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(vt.prototype, "btnCancelText", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(vt.prototype, "btnConfirm", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(vt.prototype, "btnConfirmText", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(vt.prototype, "updateTitleColor", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), ee = e(vt.prototype, "colorNormal", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(50, 141, 234, 255)
        }
    }), ie = e(vt.prototype, "colorWarning", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(229, 234, 50, 255)
        }
    }), ne = e(vt.prototype, "colorError", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(234, 50, 50, 255)
        }
    }), oe = e(vt.prototype, "colorSuccess", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(177, 234, 50, 255)
        }
    }), re = e(vt.prototype, "iconLoading", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(vt.prototype, "iconParent", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(vt.prototype, "iconSprite", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(vt.prototype, "icons", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), he = e(vt.prototype, "gameLogoGroup", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(vt.prototype, "topMarginSpacer", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(vt.prototype, "toggleContainer", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(vt.prototype, "doNotShowAgainToggle", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = vt)) || kt));
    n._RF.pop()
}
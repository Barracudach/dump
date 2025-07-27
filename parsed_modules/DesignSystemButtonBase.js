import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as B from "./cc.js";
import * as S from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as N from "./AppConfig.js";
import * as P from "./Gradient.js";
import * as F from "./ResourcesLoader.js";
import * as M from "./ThemeSystemModel.js";
import * as v from "./ThemeSystemType.js";
import * as _ from "./ThemeSystemType.js";
import * as V from "./ColorSystemType.js";
import * as D from "./ColorSystemMainBtnState.js";
import * as E from "./ColorSystemWeight.js";
import * as O from "./ColorSystemTypeOther.js";
import * as R from "./cv.js";

function main() {
    var L, G, A, x, I, U, z, W, H, j, q, K, Q, J, X, Y, Z, $, ee, te, oe, ne, re, ie, le, se, ae, he, de, pe, be, ce, ue, ge, Ce, me, ye, Se, fe, Be, Te, we, ke, Ne, Pe, Fe, Me, _e, ve, Ve;
    n._RF.push({}, "e723eE5AKREQ6on1NTfjOzw", "DesignSystemButtonBase", void 0);
    const {
        ccclass: De,
        property: Ee,
        executeInEditMode: Oe,
        playOnFocus: Re,
        requireComponent: Le,
        executionOrder: Ge,
        menu: Ae
    } = h;
    let xe = e("BtnCate", function(e) {
            return e[e.none = 0] = "none", e[e.primary = 1] = "primary", e[e.primaryPink = 2] = "primaryPink", e[e.secondary = 3] = "secondary", e[e.outline = 4] = "outline", e[e.pokerPagePanelToggle = 5] = "pokerPagePanelToggle", e[e.pokerPagePanelInvertToggle = 6] = "pokerPagePanelInvertToggle", e[e.pokerPagePanelSatellite = 7] = "pokerPagePanelSatellite", e[e.openSeatsToggle = 8] = "openSeatsToggle", e[e.menuSideBar = 9] = "menuSideBar", e[e.pokerPagePanelBounceBtn = 10] = "pokerPagePanelBounceBtn", e[e.gameTypePanelTab = 11] = "gameTypePanelTab", e[e.lobbyAddGold = 12] = "lobbyAddGold", e[e.lobbyOnlyText = 13] = "lobbyOnlyText", e[e.GameDetailRightPartSeat = 14] = "GameDetailRightPartSeat", e[e.lobbyBell = 15] = "lobbyBell", e[e.menuSideBarMobile = 16] = "menuSideBarMobile", e[e.filterBtn = 17] = "filterBtn", e[e.controlSwitch = 18] = "controlSwitch", e[e.checkbox = 20] = "checkbox", e[e.whiteCreamBtn = 21] = "whiteCreamBtn", e[e.secondaryBorderOnly = 25] = "secondaryBorderOnly", e[e.outlineBorderOnly = 26] = "outlineBorderOnly", e[e.text = 30] = "text", e[e.getCode = 35] = "getCode", e[e.selfViewSideBarTab = 40] = "selfViewSideBarTab", e[e.genderMaleButtonText = 41] = "genderMaleButtonText", e[e.genderFemaleButtonText = 42] = "genderFemaleButtonText", e[e.pokerPagePanelFilterBtn = 51] = "pokerPagePanelFilterBtn", e[e.walletBtn = 70] = "walletBtn", e[e.walletAmountBtn = 71] = "walletAmountBtn", e[e.cashierTabBtn = 72] = "cashierTabBtn", e[e.cashierPaymentSupportBtn = 73] = "cashierPaymentSupportBtn", e[e.cashierPaymentSupportMobileBtn = 74] = "cashierPaymentSupportMobileBtn", e[e.lobbyV2GameTypePanelTab = 75] = "lobbyV2GameTypePanelTab", e[e.lobbyV2SubfilterTab = 76] = "lobbyV2SubfilterTab", e[e.lobbyV2SubfilterCurrency = 77] = "lobbyV2SubfilterCurrency", e[e.lobbyV2SubfilterOpenSeat = 78] = "lobbyV2SubfilterOpenSeat", e[e.lobbyV2CashRoomBack = 79] = "lobbyV2CashRoomBack", e[e.inviteLearnMoreBtn = 80] = "inviteLearnMoreBtn", e[e.languageToggle = 85] = "languageToggle", e[e.darkBtn = 86] = "darkBtn", e[e.topBarFeedbackBtn = 87] = "topBarFeedbackBtn", e[e.minMaxBuyIn = 88] = "minMaxBuyIn", e[e.third = 90] = "third", e[e.popupConfirmBtn = 91] = "popupConfirmBtn", e[e.popupCloseBtn = 92] = "popupCloseBtn", e[e.scrollBar = 95] = "scrollBar", e[e.hamburgerBar = 96] = "hamburgerBar", e[e.btnSwitchCurrencyStats = 97] = "btnSwitchCurrencyStats", e[e.controlSwitchInPopUp = 100] = "controlSwitchInPopUp", e[e.cowboyPromotionPlayNowBtn = 200] = "cowboyPromotionPlayNowBtn", e[e.cowboyPromotionRemindLaterBtn = 201] = "cowboyPromotionRemindLaterBtn", e[e.videoCowboyPromotionPlayNowBtn = 202] = "videoCowboyPromotionPlayNowBtn", e[e.pokerPopupMainButton = 300] = "pokerPopupMainButton", e[e.pokerGroupFilterBtnV2 = 311] = "pokerGroupFilterBtnV2", e[e.pokerGroupFilterBuyInBtnV2 = 312] = "pokerGroupFilterBuyInBtnV2", e[e.pokerGroupFilterControlSwitchV2 = 313] = "pokerGroupFilterControlSwitchV2", e[e.pokerGroupFilterResetBtnV2 = 314] = "pokerGroupFilterResetBtnV2", e[e.pokerPagePanelFilterBtnV2 = 315] = "pokerPagePanelFilterBtnV2", e[e.lobbyV2MttTabBtn = 316] = "lobbyV2MttTabBtn", e[e.helpBtn = 400] = "helpBtn", e[e.globalSpinBuyInBtn = 401] = "globalSpinBuyInBtn", e[e.lobbyV2BuyInPopupButton = 500] = "lobbyV2BuyInPopupButton", e[e.lobbyV2BuyInPopupButton2 = 501] = "lobbyV2BuyInPopupButton2", e[e.lobbyV2TabBtnCollapse = 502] = "lobbyV2TabBtnCollapse", e[e.lobbyV2TabBtnCollapseDesktop = 503] = "lobbyV2TabBtnCollapseDesktop", e[e.lobbyV2CashHoverItem = 600] = "lobbyV2CashHoverItem", e[e.integrateMttFilterButton = 1600] = "integrateMttFilterButton", e[e.integrateMttSubFilterButton = 1601] = "integrateMttSubFilterButton", e[e.integrateMttOverviewRegButton = 1602] = "integrateMttOverviewRegButton", e[e.integrateMttOverviewRegButton2 = 1603] = "integrateMttOverviewRegButton2", e[e.integrateMttFilterConfirmButton = 1604] = "integrateMttFilterConfirmButton", e[e.integrateMttFilterResetButton = 1605] = "integrateMttFilterResetButton", e[e.lobbyV2SubfilterTab_Desktop = 700] = "lobbyV2SubfilterTab_Desktop", e[e.lobbyV2PokerGroupFilterBtnV2_Desktop = 701] = "lobbyV2PokerGroupFilterBtnV2_Desktop", e[e.lobbyV2SubfilterRefresh_Desktop = 802] = "lobbyV2SubfilterRefresh_Desktop", e[e.lobbyV2SubfilterCustomFilter_Desktop = 803] = "lobbyV2SubfilterCustomFilter_Desktop", e[e.lobbyV2SubfilterTextButton_Desktop = 804] = "lobbyV2SubfilterTextButton_Desktop", e[e.lobbyV2SubfilterArrowButton_Desktop = 805] = "lobbyV2SubfilterArrowButton_Desktop", e[e.lobbyV2CustomFilterTextButton_Desktop = 806] = "lobbyV2CustomFilterTextButton_Desktop", e[e.lobbyV2CustomFilterCloseIconButton_Desktop = 807] = "lobbyV2CustomFilterCloseIconButton_Desktop", e[e.lobbyV2CustomFilterResetButton_Desktop = 808] = "lobbyV2CustomFilterResetButton_Desktop", e[e.lobbyV2CustomFilterShowHideToggle_Desktop = 809] = "lobbyV2CustomFilterShowHideToggle_Desktop", e[e.newReplayerExtraButtons_Normal = 900] = "newReplayerExtraButtons_Normal", e[e.newReplayerExtraButtons_Toggle = 901] = "newReplayerExtraButtons_Toggle", e[e.newReplayerExtraButtons_Normal_Mobile = 902] = "newReplayerExtraButtons_Normal_Mobile", e[e.newReplayerRevealHand_Button = 905] = "newReplayerRevealHand_Button", e[e.sendCodeAgain = 610] = "sendCodeAgain", e[e.tabWindowMttDetail = 611] = "tabWindowMttDetail", e[e.openTableButton = 650] = "openTableButton", e[e.MTTUnregisterPopupButton = 850] = "MTTUnregisterPopupButton", e[e.MTTUnregisterPopupCancelButton = 851] = "MTTUnregisterPopupCancelButton", e
        }({})),
        Ie = e("BtnState", function(e) {
            return e[e.normal = 0] = "normal", e[e.hover = 1] = "hover", e[e.pressed = 2] = "pressed", e[e.disabled = 3] = "disabled", e[e.mouseDown = 4] = "mouseDown", e
        }({})),
        Ue = e("ThemeColorNodeCate", function(e) {
            return e[e.sprite1 = 0] = "sprite1", e[e.sprite2 = 1] = "sprite2", e[e.sprite3 = 2] = "sprite3", e[e.label1 = 3] = "label1", e[e.label2 = 4] = "label2", e[e.label3 = 5] = "label3", e[e.border1 = 6] = "border1", e[e.border1Fill = 7] = "border1Fill", e[e.border2Fill = 8] = "border2Fill", e[e.border3Fill = 9] = "border3Fill", e
        }({})),
        ze = e("GradientDirection", function(e) {
            return e[e.leftToRight = 0] = "leftToRight", e[e.rightToLeft = 1] = "rightToLeft", e[e.topToDown = 2] = "topToDown", e[e.downToTop = 3] = "downToTop", e
        }({})),
        We = e("InputType", function(e) {
            return e[e.tabBtn = 0] = "tabBtn", e[e.toggle = 1] = "toggle", e[e.bounceBtn = 2] = "bounceBtn", e[e.pokerPagePanelFilterBtn = 3] = "pokerPagePanelFilterBtn", e[e.collapseBtn = 4] = "collapseBtn", e
        }({})),
        He = De("ThemeColorComp")(L = class {
            constructor() {
                this.useGradient = !1, this.gradientStartColor = new M, this.gradientEndColor = new M, this.nodeColor = new M, this.opacity = null, this.disabled = !1
            }
            updateColor() {
                this.gradientStartColor && this.gradientStartColor.getColor(), this.gradientEndColor && this.gradientEndColor.getColor(), this.nodeColor && this.nodeColor.getColor()
            }
            formData(e) {
                e.gradientColor ? (this.useGradient = !0, this.gradientStartColor.colorScheme = e.gradientColor.start.colorScheme, this.gradientStartColor.colorWeight = e.gradientColor.start.colorWeight, this.gradientStartColor.colorMainBtn = e.gradientColor.start.colorMainBtn, this.gradientStartColor.colorSchemeOther = e.gradientColor.start.colorSchemeOther, this.gradientStartColor.colorSchemeLobbyV2 = e.gradientColor.start.colorSchemaLobbyV2, this.gradientEndColor.colorScheme = e.gradientColor.end.colorScheme, this.gradientEndColor.colorWeight = e.gradientColor.end.colorWeight, this.gradientEndColor.colorMainBtn = e.gradientColor.end.colorMainBtn, this.gradientEndColor.colorSchemeOther = e.gradientColor.end.colorSchemeOther, this.gradientEndColor.colorSchemeLobbyV2 = e.gradientColor.end.colorSchemaLobbyV2) : (this.useGradient = !1, this.nodeColor.colorScheme = e.nodeColor.colorScheme, this.nodeColor.colorWeight = e.nodeColor.colorWeight, this.nodeColor.colorMainBtn = e.nodeColor.colorMainBtn, this.nodeColor.colorSchemeOther = e.nodeColor.colorSchemeOther, this.nodeColor.colorSchemeLobbyV2 = e.nodeColor.colorSchemaLobbyV2), this.opacity = e.opacity, this.disabled = !1
            }
        }) || L,
        je = e("ThemeNodeColor", (G = De("ThemeNodeColor"), A = Ee(r), G((U = t((I = class {
            constructor() {
                o(this, "renderedNode", U, this), this.normalColor = new He, this.hoverColor = new He, this.pressedColor = new He, this.disableColor = new He, this.mouseDownColor = new He, this.gradientDir = ze.topToDown, this.ThemeColors = [this.normalColor, this.hoverColor, this.pressedColor, this.disableColor, this.mouseDownColor]
            }
        }).prototype, "renderedNode", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), x = I)) || x));
    e("default", (z = Ge(-1), W = Ae("Design System/Design System Button Base"), H = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.sprite1)
        },
        tooltip: "the 1st sprite node of the btn node structure in editor\n [for menuSideBar btn is Gradient Highlight node]"
    }), j = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.sprite2)
        },
        tooltip: "the 2nd sprite node of the btn node structure in editor\n [for menuSideBar btn is leftRectBar node]"
    }), q = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.sprite3)
        },
        tooltip: "the 3rd sprite node of the btn node structure in editor\n [for menuSideBar btn is icon node]"
    }), K = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.label1)
        },
        tooltip: "the 1st label node of the btn node structure in editor"
    }), Q = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.label2)
        },
        tooltip: "the 2nd label node of the btn node structure in editor"
    }), J = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.label3)
        },
        tooltip: "the 3rd label node of the btn node structure in editor"
    }), X = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.border1)
        },
        tooltip: "the border graphic node (using borderStroke) of the btn node structure in editor"
    }), Y = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.border1Fill)
        },
        tooltip: "the border graphic node (using borderFill) of the btn node structure in editor"
    }), Z = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.border2Fill)
        },
        tooltip: "the border graphic node (using borderFill) of the btn node structure in editor"
    }), $ = Ee({
        visible: function() {
            return this.getThemeNodeColorVis(Ue.border3Fill)
        },
        tooltip: "the border graphic node (using borderFill) of the btn node structure in editor"
    }), ee = Ee({
        tooltip: "True: For Toggle, auto detect check/unCheck status to change btn state.\n False:  these will be handled outside from other scripts"
    }), te = Ee({
        tooltip: "click this check box to trigger refresh",
        type: i
    }), oe = Ee({
        visible: function() {
            return -1 != this.node.components.findIndex((e => e instanceof l))
        },
        tooltip: "preview toggle's check/unChecked states",
        type: i
    }), ne = Ee({
        type: s(xe)
    }), re = Ee({
        type: s(Ie)
    }), ie = Ee({
        type: s(_)
    }), le = Ee({
        tooltip: "click this check box to add loading animation\nduring waiting response after onClicked"
    }), se = Ee({
        visible: function() {
            return this.haveLoadingAnim
        },
        tooltip: "the loadingSprite node of the btn node structure in editor\n [show loading animation during waiting response after onClicked]",
        type: r
    }), ae = Ee({
        visible: function() {
            return this.haveLoadingAnim && !a(this.loadingNode)
        },
        tooltip: "the loading node position of the btn node structure in editor\nIn case loadingNode do not exist in the button, this component will\nadd loadingNode then use this property to set postion"
    }), he = Ee({
        visible: function() {
            return this.haveLoadingAnim && !a(this.loadingNode)
        },
        tooltip: "the loading node scale of the btn node structure in editor\nIn case loadingNode do not exist in the button, this component will\nadd loadingNode then use this property to set scale"
    }), De(de = Oe(de = Re(de = z(de = W((be = t((pe = class extends d {
        constructor(...e) {
            super(...e), o(this, "sprite1", be, this), o(this, "sprite2", ce, this), o(this, "sprite3", ue, this), o(this, "label1", ge, this), o(this, "label2", Ce, this), o(this, "label3", me, this), o(this, "border1", ye, this), o(this, "border1Fill", Se, this), o(this, "border2Fill", fe, this), o(this, "border3Fill", Be, this), o(this, "autoDectectBtnState", Te, this), o(this, "_refresh", we, this), o(this, "_isChecked", ke, this), o(this, "_btnStyle", Ne, this), o(this, "_btnState", Pe, this), o(this, "_themeUse", Fe, this), this.colorConfig = new Map, this.themeColorNodeMap = new Map, this.inputType = We.tabBtn, this.isHovered = !1, this.editorFocus = !1, this.isMouseDowned = !1, this.btnComp = null, this.btnCompLastInteractable = !0, o(this, "haveLoadingAnim", Me, this), o(this, "loadingNode", _e, this), o(this, "loadingNodePosition", ve, this), o(this, "loadingNodeScale", Ve, this), this.loadingAnimShowing = !1
        }
        set refresh(e) {
            this.resetAndProcess(!0), this._refresh = !1
        }
        get refresh() {
            return this._refresh
        }
        set isChecked(e) {
            if (this._isChecked = e, this.editorFocus) {
                let t = this.node.getComponent(l);
                t.isChecked = e, this.onCCToggleEvent(t)
            }
        }
        get isChecked() {
            return this._isChecked
        }
        set btnStyle(e) {
            this._btnStyle !== e && (this._btnStyle = e, this.resetAndProcess())
        }
        get btnStyle() {
            return this._btnStyle
        }
        set btnState(e) {
            this._btnState !== e && (this._btnState = e, this.applyThemeNodeColors())
        }
        get btnState() {
            return this._btnState
        }
        set themeUse(e) {
            this._themeUse = e, this.updateThemeNodeColors(), this.applyThemeNodeColors()
        }
        get themeUse() {
            return this._themeUse
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        onLoad() {
            this.node.on(r.EventType.TOUCH_START, this._onMouseDown, this), this.node.on(r.EventType.MOUSE_ENTER, this._onMouseOver, this), this.node.on(r.EventType.MOUSE_LEAVE, this._onMouseLeave, this), this.node.on(r.EventType.TOUCH_END, this._onMouseUp, this), this.node.on(r.EventType.TOUCH_CANCEL, this._onTouchCancel, this), this._themeUse = N.Instance.themeUse, this.initThemeColorNodeMap(), this.resetAndProcess(), p.on("themechange", this.onThemeChanged, this)
        }
        onDestroy() {
            this.node.off(r.EventType.TOUCH_START, this._onMouseDown, this), this.node.off(r.EventType.MOUSE_ENTER, this._onMouseOver, this), this.node.off(r.EventType.MOUSE_LEAVE, this._onMouseLeave, this), this.node.off(r.EventType.TOUCH_END, this._onMouseUp, this), this.node.off(r.EventType.TOUCH_CANCEL, this._onTouchCancel, this)
        }
        onThemeChanged() {
            null != this.node && (this.themeUse = N.Instance.themeUse)
        }
        update() {
            if (this.btnComp && this.btnComp.interactable != this.btnCompLastInteractable && (this.btnCompLastInteractable = this.btnComp.interactable, this.btnState = this.btnComp.interactable ? Ie.normal : Ie.disabled), this.btnComp && this.autoDectectBtnState) {
                let e = this.node.getComponent(l);
                e && this.isChecked != e.isChecked && (this.isChecked = e.isChecked, this.btnState != Ie.disabled && (this.btnState = this.isChecked ? Ie.pressed : Ie.normal))
            }
        }
        _onMouseDown() {
            this.inputType !== We.pokerPagePanelFilterBtn && this.btnState != Ie.disabled && (this.isMouseDowned = !0, this.btnState = Ie.mouseDown)
        }
        _checkClickComplete(e) {
            let t = b.isNative && (b.os == b.OS.ANDROID || b.os == b.OS.IOS);
            if (e = e && (this.isHovered || t || R.appConfig.isWebApp)) switch (this.inputType) {
                case We.toggle:
                    this.isChecked ? (this.btnState = t ? Ie.normal : Ie.hover, this.isChecked = !1) : (this.btnState = Ie.pressed, this.isChecked = !0);
                    break;
                case We.tabBtn:
                    this.isChecked = !0, this.btnState = Ie.pressed;
                    break;
                case We.bounceBtn:
                    this.isChecked = !1, this.btnState = t ? Ie.normal : Ie.hover;
                    break;
                case We.collapseBtn:
                    this.isChecked = !1, this.btnState = Ie.normal
            } else this.isChecked ? this.btnState = Ie.pressed : this.btnState = Ie.normal
        }
        _onTouchCancel(e, t) {
            this.inputType !== We.pokerPagePanelFilterBtn && this.btnState != Ie.disabled && (this._checkClickComplete(!1), this.isMouseDowned = !1)
        }
        _onMouseUp() {
            this.inputType !== We.pokerPagePanelFilterBtn && this.btnState != Ie.disabled && (this.isMouseDowned ? this._checkClickComplete(!0) : this._checkClickComplete(!1), this.isMouseDowned = !1)
        }
        _onMouseOver() {
            this.btnState != Ie.disabled && (this.isHovered = !0, this.btnState === Ie.normal && (this.btnState = Ie.hover))
        }
        _onMouseLeave() {
            this.btnState != Ie.disabled && (this.isHovered = !1, this.btnState === Ie.hover && (this.btnState = Ie.normal))
        }
        onCCToggleEvent(e) {
            this.inputType !== We.pokerPagePanelFilterBtn && e && this.isChecked != e.isChecked && (this.isChecked = e.isChecked, this.btnState != Ie.disabled && (this.btnState = this.isChecked ? Ie.pressed : Ie.normal))
        }
        initThemeColorNodeMap() {
            this.themeColorNodeMap.clear(), this.themeColorNodeMap.set(Ue.sprite1, this.sprite1), this.themeColorNodeMap.set(Ue.sprite2, this.sprite2), this.themeColorNodeMap.set(Ue.sprite3, this.sprite3), this.themeColorNodeMap.set(Ue.label1, this.label1), this.themeColorNodeMap.set(Ue.label2, this.label2), this.themeColorNodeMap.set(Ue.label3, this.label3), this.themeColorNodeMap.set(Ue.border1, this.border1), this.themeColorNodeMap.set(Ue.border1Fill, this.border1Fill), this.themeColorNodeMap.set(Ue.border2Fill, this.border2Fill), this.themeColorNodeMap.set(Ue.border3Fill, this.border3Fill), this.themeColorNodeMap.forEach(((e, t) => {
                e.gradientDir = ze.topToDown
            }))
        }
        resetAndProcess(e = !1) {
            if (this.btnComp = this.node.getComponent(c), this.btnComp && (this.btnComp.transition != c.Transition.NONE && (this.btnComp.transition = c.Transition.NONE), this.btnCompLastInteractable = this.btnComp.interactable, this._btnState = this.btnComp.interactable ? Ie.normal : Ie.disabled, this.autoDectectBtnState)) {
                let e = this.node.getComponent(l);
                e && (this.isChecked != e.isChecked && (this.isChecked = e.isChecked, this.isChecked && this.btnState == Ie.normal && (this._btnState = Ie.pressed)), this.node.off(l.EventType.TOGGLE, this.onCCToggleEvent, this), this.node.on(l.EventType.TOGGLE, this.onCCToggleEvent, this))
            }
            this.setColorConfig(), this.updateRenderedNodesProperty(), this.updateThemeNodeColors(), this.applyThemeNodeColors()
        }
        updateRenderedNodesProperty() {
            this.themeColorNodeMap.forEach(((e, t) => {
                let o = e.renderedNode;
                if (a(o, !0) && this.colorConfig.get(t))
                    if (o.active = !0, o.getComponent("ThemeSystem") && o.getComponent("ThemeSystem").destroy(), o.getComponent("ThemeSystemForGradient") && o.getComponent("ThemeSystemForGradient").destroy(), t == Ue.border1 || t == Ue.border1Fill || t == Ue.border2Fill || t == Ue.border3Fill) {
                        o.getComponent(u) && o.getComponent(u).destroy();
                        let e = o.getComponent("borderGraphic");
                        e || (e = o.addComponent("borderGraphic")), e.enabledStrokeColor = e.enabledFillColor = !1
                    } else o.getComponent("borderGraphic") && o.getComponent("borderGraphic").destroy(), o.getComponent(g) && o.getComponent(g).destroy()
            }))
        }
        setColorConfig() {}
        getThemeNodeColorVis(e) {
            return !0
        }
        applyThemeNodeColors() {
            this.themeColorNodeMap.forEach(((e, t) => {
                if (!a(e.renderedNode, !0)) return;
                let o = e.ThemeColors[this.btnState],
                    n = e.renderedNode.getComponent("borderGraphic");
                if (e.renderedNode.getComponent(C).opacity = 255, o.useGradient) {
                    e.renderedNode.getComponent(P) || e.renderedNode.addComponent(P), e.renderedNode.getComponent(P).enabled = !0;
                    let t = e.renderedNode.getComponent(P);
                    switch (t.startPos.x = t.startPos.y = t.endPos.x = t.endPos.y = .5, e.gradientDir) {
                        case ze.leftToRight:
                            t.startPos.x = 0, t.endPos.x = 1;
                            break;
                        case ze.rightToLeft:
                            t.startPos.x = 1, t.endPos.x = 0;
                            break;
                        case ze.topToDown:
                            t.startPos.y = 1, t.endPos.y = 0;
                            break;
                        case ze.downToTop:
                            t.startPos.y = 0, t.endPos.y = 1
                    }
                    t.startColor = o.gradientStartColor.getColor(), t.endColor = o.gradientEndColor.getColor(), this.setColor(e.renderedNode, new m(m.WHITE))
                } else switch (t) {
                    case Ue.border1:
                        n ? o.disabled ? n.enabledStrokeColor = !1 : (n.enabledStrokeColor = !0, n.setStrokesColor(o.nodeColor)) : y("`border1` does not have `borderGraphic` component attached on node: ", this.node.name);
                        break;
                    case Ue.border1Fill:
                    case Ue.border2Fill:
                    case Ue.border3Fill:
                        n ? o.disabled ? n.enabledFillColor = !1 : (n.enabledFillColor = !0, n.setFillsColor(o.nodeColor)) : y("`border1Fill` or `border2Fill` or `border3Fill` does not have `borderGraphic` component attached on node: ", this.node.name);
                        break;
                    default:
                        e.renderedNode.getComponent(P) && (e.renderedNode.getComponent(P).enabled = !1), this.setColor(e.renderedNode, o.nodeColor.getColor())
                }
                o.opacity && (e.renderedNode.getComponent(C).opacity = o.opacity)
            }))
        }
        setColor(e, t) {
            e.getComponent(S) && (e.getComponent(S).color = new m(t.r, t.g, t.b, 255), 255 > t.a && (e.getComponent(C).opacity = t.a))
        }
        updateThemeNodeColors() {
            this.themeColorNodeMap.forEach(((e, t) => {
                if (!a(e.renderedNode, !0)) return;
                let o = e.ThemeColors,
                    n = null;
                this.colorConfig && this.colorConfig.get(t) && (n = this.colorConfig.get(t));
                for (let e = 0; e < o.length; ++e) o[e].gradientStartColor.setTheme(this.themeUse), o[e].gradientEndColor.setTheme(this.themeUse), o[e].nodeColor.setTheme(this.themeUse), n && n[e] ? o[e].formData(n[e]) : o[e].disabled = !0, o[e].updateColor()
            }))
        }
        getColorProperty(e, t) {
            let o = null;
            switch (e) {
                case V.Other:
                    o = {
                        colorScheme: e,
                        colorWeight: E.W400,
                        colorMainBtn: D.NormalBg,
                        colorSchemeOther: t
                    };
                    break;
                case V.MainBtn:
                    o = {
                        colorScheme: e,
                        colorWeight: E.W400,
                        colorMainBtn: t,
                        colorSchemeOther: O.White
                    };
                    break;
                case V.LobbyV2:
                    o = {
                        colorScheme: e,
                        colorWeight: E.W400,
                        colorMainBtn: D.NormalBg,
                        colorSchemeOther: O.White,
                        colorSchemaLobbyV2: t
                    };
                    break;
                case V.Nero:
                case V.Gold:
                case V.Vulcano:
                case V.Background:
                default:
                    o = {
                        colorScheme: e,
                        colorWeight: t,
                        colorMainBtn: D.NormalBg,
                        colorSchemeOther: O.White
                    }
            }
            return o
        }
        getColorComp(e, t, o = null, n = null, r = null) {
            let i = null;
            return i = null != o && null != n ? {
                gradientColor: {
                    start: this.getColorProperty(e, t),
                    end: this.getColorProperty(o, n)
                },
                nodeColor: null,
                opacity: r
            } : {
                gradientColor: null,
                nodeColor: this.getColorProperty(e, t),
                opacity: r
            }, i
        }
        showLoadingAnim(e = !1) {
            this.haveLoadingAnim && this.loadingAnimShowing != e && (this.loadingAnimShowing = e, a(this.loadingNode, !0) ? this.rotateLoadingNode() : this.createLoadingNode().then(this.rotateLoadingNode.bind(this)))
        }
        rotateLoadingNode() {
            this.loadingNode.active = this.loadingAnimShowing, f.stopAllByTarget(this.loadingNode), this.loadingAnimShowing && B(this.loadingNode).by(2, {
                angle: -360
            }).repeatForever().start()
        }
        createLoadingNode() {
            return new Promise(((e, t) => {
                F.instance.loadRes(F.RES_PATH.PREFAB.COMMON.LOADING, T, null, ((o, n) => {
                    o && t instanceof Function && t(o), this.loadingNode = w(n), this.loadingNode.parent = this.node, this.loadingNode.setPosition(this.loadingNodePosition), this.loadingNode.setScale(this.loadingNodeScale), e instanceof Function && e()
                }))
            }))
        }
    }).prototype, "sprite1", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), ce = t(pe.prototype, "sprite2", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), ue = t(pe.prototype, "sprite3", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), ge = t(pe.prototype, "label1", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), Ce = t(pe.prototype, "label2", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), me = t(pe.prototype, "label3", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), ye = t(pe.prototype, "border1", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), Se = t(pe.prototype, "border1Fill", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), fe = t(pe.prototype, "border2Fill", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), Be = t(pe.prototype, "border3Fill", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new je
        }
    }), Te = t(pe.prototype, "autoDectectBtnState", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), we = t(pe.prototype, "_refresh", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), t(pe.prototype, "refresh", [te], Object.getOwnPropertyDescriptor(pe.prototype, "refresh"), pe.prototype), ke = t(pe.prototype, "_isChecked", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), t(pe.prototype, "isChecked", [oe], Object.getOwnPropertyDescriptor(pe.prototype, "isChecked"), pe.prototype), Ne = t(pe.prototype, "_btnStyle", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return xe.primary
        }
    }), t(pe.prototype, "btnStyle", [ne], Object.getOwnPropertyDescriptor(pe.prototype, "btnStyle"), pe.prototype), Pe = t(pe.prototype, "_btnState", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Ie.normal
        }
    }), t(pe.prototype, "btnState", [re], Object.getOwnPropertyDescriptor(pe.prototype, "btnState"), pe.prototype), Fe = t(pe.prototype, "_themeUse", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return v
        }
    }), t(pe.prototype, "themeUse", [ie], Object.getOwnPropertyDescriptor(pe.prototype, "themeUse"), pe.prototype), Me = t(pe.prototype, "haveLoadingAnim", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), _e = t(pe.prototype, "loadingNode", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(pe.prototype, "loadingNodePosition", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(0, 0, 1)
        }
    }), Ve = t(pe.prototype, "loadingNodeScale", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new k(1, 1, 1)
        }
    }), de = pe)) || de) || de) || de) || de) || de));
    n._RF.pop()
}
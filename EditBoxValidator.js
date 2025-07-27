import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
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
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as B from "./CommonTools.js";
import * as E from "./cv.js";
import * as v from "./TooltipsManager.js";
import * as x from "./borderGraphic.js";
import * as _ from "./FieldValidator.js";
import * as w from "./FontSystem.js";
import * as b from "./ThemeSystem.js";
import * as F from "./ColorSystemType.js";
import * as m from "./ColorSystemTypeOther.js";

function main() {
    var S, N, y, C, L, O, T, A, M, H, I, V, P, z, G, D, R;
    o._RF.push({}, "c7c35OO/5FCKKSHJf+JViQM", "EditBoxValidator", void 0);
    const {
        ccclass: k,
        property: U,
        menu: X
    } = r;
    e("EditBoxValidator", (S = X("Custom UI/Validator/EditBoxValidator"), N = U({
        type: s,
        tooltip: "Node showed/hidden when field is invalid/valid after text is changed"
    }), y = U({
        type: s,
        tooltip: "Node shows when field is focused or not"
    }), C = U({
        type: s,
        tooltip: "Node hides when field is focused or not"
    }), L = U({
        type: s,
        tooltip: "Node shows when field is mouse over"
    }), O = U({
        type: s,
        tooltip: "Node to check mouse event"
    }), T = U(n), A = U(h), k(M = S((I = t((H = class extends _ {
        constructor(...e) {
            super(...e), i(this, "invalidShowNodes", I, this), i(this, "onFocusShow", V, this), i(this, "onFocusHide", P, this), i(this, "onMouseOverShow", z, this), i(this, "onMouseEventNode", G, this), i(this, "editBox", D, this), i(this, "isApplyBorder", R, this), this.isFocus = !1, this._isEditing = !1, this._isShowValid = !1, this._onStartEditingChangeEffect = !1, this._eventsNode = null, this._normalBorder = null, this._hoverBorder = null, this._focusBorder = null, this.actualEditBoxHeight = void 0, this.previousToolTipsMsg = void 0, this._originalPlaceholderFontSize = void 0, this.PLACEHOLDER_FONT_SCALE = .8, this.placeHolderTextTS = void 0, this.isFirstOpen = !0, this.originPosX = 0, this.posOriginPlaceHolder = null, this._formFieldIndex = void 0, this._form = void 0
        }
        set inputFlag(e) {
            null != this.editBox && (this.editBox.inputFlag = e, this.editBox.placeholderLabel.node.active || this.scheduleOnce(function() {
                this.drawBorderEditBox(this.isFocus)
            }.bind(this), 0))
        }
        get placeholderLabel() {
            return null != this.editBox ? this.editBox.placeholderLabel : null
        }
        get textLabel() {
            return null != this.editBox ? this.editBox.textLabel : null
        }
        get string() {
            return null != this.editBox ? this.editBox.string : ""
        }
        set string(e) {
            null != this.editBox && (this.editBox.string = null != e ? e : "", this.scheduleOnce(function() {
                this.editBox.placeholderLabel.node.active = !0, this.drawBorderEditBox("" != this.editBox.string)
            }.bind(this), 0))
        }
        get value() {
            var e, t;
            return this.asString ? this.string : (null == (e = this.editBox) ? void 0 : e.inputMode) === n.InputMode.NUMERIC ? parseInt(this.string) : (null == (t = this.editBox) ? void 0 : t.inputMode) === n.InputMode.DECIMAL ? parseFloat(this.string) : this.string
        }
        set value(e) {
            this.string = e
        }
        set interactable(e) {
            this.editBox && (this.editBox.enabled = e), this.enabled = e, this.node.emit("setInteractable", e)
        }
        clear() {
            this.value = ""
        }
        getEditBox() {
            if (this.editBox) return this.editBox;
            {
                const e = this.node.getComponent(n);
                if (e) return e
            }
            return null
        }
        getInvalidFieldNode() {
            return this.onMouseEventNode && this.onMouseEventNode.getComponent(d).height < this.node.getComponent(d).height ? this.onMouseEventNode : this.node
        }
        getBorderGraphicByList(e) {
            for (let t = 0; t < e.length; t++) {
                const i = e[t].getComponent(x);
                if (l(i)) return i
            }
            return null
        }
        onActiveChangePlaceHolder() {
            this.isApplyBorder && 0 == this.placeholderLabel.node.active && (this.placeholderLabel.node.active = !0)
        }
        onLoad() {
            var e, t, i;
            super.onLoad(), this._normalBorder = this.getBorderGraphicByList(this.onFocusHide), this._hoverBorder = this.getBorderGraphicByList(this.onMouseOverShow), this._focusBorder = this.getBorderGraphicByList(this.onFocusShow), this.placeHolderTextTS = null == (e = this.placeholderLabel) ? void 0 : e.getComponent(b), null == this.editBox && (this.editBox = this.node.getComponent(n));
            for (let e = 0, t = this.constraints.length; e < t; e++) {
                const t = this.constraints[e].maxNr;
                t > 0 && this.editBox && (this.editBox.maxLength = t)
            }
            this._eventsNode = this.onMouseEventNode || this.node, null == (t = this.editBox) || t.node.on("editing-did-began", this.onStartEditing, this), null == (i = this.editBox) || i.node.on("editing-did-ended", this.onEndEditing, this), (this.onFocusShow && this.onFocusShow.length > 0 || this.onFocusHide && this.onFocusHide.length > 0) && (this._onStartEditingChangeEffect = !0, this.showAllFocusEffectNodes(!1)), this.showAllMouseOverEffectNodes(!1), this.showNodesIfInvalid(!1), a.isMobile || a.isBrowser || window.addEventListener("resize", this.resizeEvent.bind(this))
        }
        initFirstOpenBorder() {
            if (this._hoverBorder.node.active = !0, this._focusBorder.node.active = !0, this._normalBorder.node.active = !1, this.scheduleOnce(function() {
                    this._hoverBorder.node.active = !1, this._focusBorder.node.active = !1, this._normalBorder.node.active = !0
                }.bind(this), 0), l(this.placeholderLabel.node.getComponent(c)) && this.placeholderLabel.node.getComponent(c).destroy(), this.posOriginPlaceHolder || (this.posOriginPlaceHolder = new u(this.placeholderLabel.node.position.x, this.placeholderLabel.node.position.y, 0)), this.placeholderLabel && this.placeholderLabel.fontSize) {
                const e = this.placeholderLabel.getComponent(w);
                e && e.setIgnoreUpdateFontSize(!0), this._originalPlaceholderFontSize || (this._originalPlaceholderFontSize = this.placeholderLabel.fontSize)
            }
            var e;
            (this.textLabel.node.getComponent(d).anchorX = 0, this.placeholderLabel.node.getComponent(d).anchorX = 0, this.isFirstOpen = !1, this.actualEditBoxHeight) || (this.actualEditBoxHeight = null == (e = this.getEditBox()) ? void 0 : e.getComponent(d).height, this.checkForEditBoxHeightChange())
        }
        drawBorderEditBox(e = !1) {
            var t;
            this.editBox.node.activeInHierarchy && this.isApplyBorder && l(this._normalBorder) && l(this._hoverBorder) && l(this._focusBorder) && (null != (t = this.placeholderLabel._assemblerData) && t.context ? (this.placeholderLabel.node.active = !0, this.isFocus = e, this.isFirstOpen && this.initFirstOpenBorder(), this.scheduleOnce((() => {
                var t;
                const i = B.instance.convertToWorldSpace(this.editBox.node, new u(0, 0)),
                    o = B.instance.convertToWorldSpace(this.node, new u(0, 0));
                this.originPosX = Math.abs(i.x - o.x), this.changeLabelPropertyOnFocus(e);
                let s = p(null == (t = this.placeholderLabel._assemblerData) ? void 0 : t.context, this.placeholderLabel.string);
                this.placeholderLabel.node.scene.designResolutionScaleX > 1 && (s /= this.placeholderLabel.node.scene.designResolutionScaleX), s += 30;
                const n = E.appConfig.isLandscapeLayout ? 5 : 0;
                e || (s = "" != this.editBox.string ? s : 0), this._normalBorder.widthEmptyBorder = s, this._hoverBorder.widthEmptyBorder = s, this._focusBorder.widthEmptyBorder = s;
                const h = new u(this.posOriginPlaceHolder.x, this.posOriginPlaceHolder.y);
                if (e = "" != this.editBox.string || e) {
                    const e = Math.min(this._normalBorder.borderRoundRadius, .5 * Math.abs(this._normalBorder.node.getComponent(d).width + this._normalBorder.graphic.lineWidth)) * Math.sign(this._normalBorder.boderWidth + this._normalBorder.graphic.lineWidth);
                    h.x -= this.originPosX - e - 15 + n, h.y += this.editBox.node.parent.getComponent(d).height / 2
                }
                this._normalBorder.drawBorderByFocus(e), this._hoverBorder.drawBorderByFocus(e), this._focusBorder.drawBorderByFocus(e);
                this.placeholderLabel.node.position.equals(h) || (this.placeholderLabel.node.position = new u(h.x, h.y, 0))
            }), 0)) : this.scheduleOnce((function() {
                this.drawBorderEditBox(e)
            }), 0))
        }
        changeLanguage() {
            this.checkForEditBoxHeightChange(), this.scheduleOnce((() => {
                this.drawBorderEditBox(this.isFocus)
            }), 0)
        }
        checkForEditBoxHeightChange() {
            if (this.actualEditBoxHeight && this.actualEditBoxHeight > 0) {
                const e = this.editBox.textLabel.getComponent(w);
                this.editBox.getComponent(d).height = e ? this.actualEditBoxHeight * e.fontScaleFactor() : this.actualEditBoxHeight
            }
        }
        resizeEvent() {
            if (!this.editBox) return;
            this.editBox.isFocused() ? (this.editBox.blur(), this.onEndEditing()) : this.drawBorderEditBox(!1)
        }
        onEnable() {
            var e;
            l(this.editBox, !0) && (this.editBox.node.on(n.EventType.TEXT_CHANGED, this.onTextChanged, this), l(this.editBox.placeholderLabel, !0) && (null == (e = this.editBox.placeholderLabel) || e.node.on(s.EventType.ACTIVE_IN_HIERARCHY_CHANGED, this.onActiveChangePlaceHolder, this)));
            super.onEnable(), this.registerEditBoxEvents(), this.checkForEditBoxHeightChange(), E.MessageCenter.register(E.config.CHANGE_LANGUAGE, this.changeLanguage.bind(this), this), this.scheduleOnce((() => {
                this.drawBorderEditBox(this.isFocus)
            }), 0)
        }
        onDisable() {
            var e;
            (super.onDisable(), l(this.editBox, !0)) && (this.editBox.node.off(n.EventType.TEXT_CHANGED, this.onTextChanged, this), l(this.editBox.placeholderLabel, !0) && (null == (e = this.editBox.placeholderLabel) || e.node.off(s.EventType.ACTIVE_IN_HIERARCHY_CHANGED, this.onActiveChangePlaceHolder, this)));
            this.unregisterEditBoxEvents(), E.MessageCenter.unregister(E.config.CHANGE_LANGUAGE, this)
        }
        registerEditBoxEvents() {
            this._eventsNode.on(s.EventType.MOUSE_ENTER, this.onMouseOver, this), this._eventsNode.on(s.EventType.MOUSE_LEAVE, this.onMouseLeave, this), this._eventsNode.on("click", this.onNodeClick, this), a.isNative && a.os === a.OS.IOS && g.on(f.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        unregisterEditBoxEvents() {
            l(this._eventsNode) ? (this._eventsNode.off(s.EventType.MOUSE_ENTER, this.onMouseOver, this), this._eventsNode.off(s.EventType.MOUSE_LEAVE, this.onMouseLeave, this), this._eventsNode.off("click", this.onNodeClick, this), a.isNative && a.os === a.OS.IOS && g.off(f.EVENT_SHOW, this.OnAppEnterForeground, this)) : console.warn("_eventsNode is no longer valid")
        }
        OnAppEnterForeground() {
            if (!this.editBox) return;
            this.editBox.isFocused() && this.editBox.focus()
        }
        onTextChanged() {
            const e = this.doValidate();
            this.checkAndShowTooltips(e)
        }
        showNodesIfInvalid(e) {
            if (this.invalidShowNodes && this.invalidShowNodes.length > 0) {
                const t = this.invalidShowNodes.length;
                for (let i = 0; i < t; i++) {
                    const t = this.invalidShowNodes[i];
                    null != t && (t.active = e)
                }
            }
        }
        showInvalidEffects() {
            this._isShowValid && v.isAnyTooltipsShowed() && this._form && (v.hideAllTooltips(), this.scheduleOnce((() => {
                this._form.onFieldInvalid(this._formFieldIndex)
            }).bind(this))), this._isShowValid = !1, super.showInvalidEffects(), this.showNodesIfInvalid(!0)
        }
        hideInvalidEffects() {
            this.isBindedToTooltips && (this._form && this._form.isSubmitted && this.scheduleOnce((() => {
                this._form.onFieldValid(this._formFieldIndex)
            }).bind(this)), this.isBindedToTooltips = !1), this._isShowValid = !0, super.hideInvalidEffects(), this.showNodesIfInvalid(!1), this.previousToolTipsMsg = ""
        }
        onMouseOver() {
            this.showAllMouseOverEffectNodes(!0)
        }
        onMouseLeave() {
            this.showAllMouseOverEffectNodes(!1)
        }
        onNodeClick() {
            this.editBox && this.editBox.enabled && !this._isEditing && this.editBox.focus()
        }
        showAllMouseOverEffectNodes(e) {
            this.setAllMouseOverEffectNodes(e), e ? this.setAllFocusEffectNodes(!1) : this.showAllFocusEffectNodes(this._isEditing)
        }
        setAllMouseOverEffectNodes(e) {
            if (this.onMouseOverShow) {
                const t = this.onMouseOverShow.length;
                for (let i = 0; i < t; i++) {
                    const t = this.onMouseOverShow[i];
                    null != t && (t.active = e)
                }
            }
        }
        setForm(e, t) {
            this._formFieldIndex = e, this._form = t
        }
        onStartEditing() {
            this._isEditing = !0, this._onStartEditingChangeEffect && (this.showAllFocusEffectNodes(!0), this.setAllMouseOverEffectNodes(!1)), this.previousToolTipsMsg = "", v.hideAllTooltips();
            if (v.isAnyTooltipsShowed() && !1 === this._valid) {
                const e = this.doBaseValidate();
                this.checkAndShowTooltips(e)
            }
            E.tools.adjustLayoutPosition(this.node), this._form && (this._form.currentFocusField = this._formFieldIndex), this.scheduleOnce((() => {
                this.drawBorderEditBox(!0)
            }), 0)
        }
        checkAndShowTooltips(e) {
            !0 !== e && "string" == typeof e && this.previousToolTipsMsg !== e && (this.previousToolTipsMsg = e, v.hideAllTooltips(), v.showToolTipsForFieldValidator(this, E.config.getStringData("Attention"), e)), E.MessageCenter.send(E.Enum.MessageCenterAction.onChangeCheckFormValid)
        }
        onEndEditing() {
            this._isEditing = !1, this._onStartEditingChangeEffect && this.showAllFocusEffectNodes(!1), this.scheduleOnce((() => {
                this.drawBorderEditBox(!1)
            }), 0)
        }
        setAllFocusEffectNodes(e) {
            if (this.onFocusShow) {
                const t = this.onFocusShow.length;
                for (let i = 0; i < t; i++) {
                    const t = this.onFocusShow[i];
                    null != t && (t.active = e)
                }
            }
            if (this.onFocusHide) {
                const t = this.onFocusHide.length;
                for (let i = 0; i < t; i++) {
                    const t = this.onFocusHide[i];
                    null != t && (t.active = e)
                }
            }
        }
        showAllFocusEffectNodes(e) {
            if (this.onFocusShow) {
                const t = this.onFocusShow.length;
                for (let i = 0; i < t; i++) {
                    const t = this.onFocusShow[i];
                    null != t && (t.active = e)
                }
            }
            if (this.onFocusHide) {
                const t = this.onFocusHide.length;
                for (let i = 0; i < t; i++) {
                    const t = this.onFocusHide[i];
                    null != t && (t.active = !e)
                }
            }
        }
        showInvalidEffectsOnServerError() {
            super.showInvalidEffectsOnServerError(), this.showNodesIfInvalid(!0)
        }
        setValueFromObj(e) {
            if (null == this.schemaKey || 0 == this.schemaKey.length) return;
            const t = E.tools.traverseObjGet(e, this.schemaKey);
            void 0 !== t && "object" != typeof t && (this.value = t), this.drawBorderEditBox(!1)
        }
        changeLabelPropertyOnFocus(e) {
            const t = "" !== this.editBox.string,
                i = e && this._isEditing,
                o = i ? m.MainBlue : m.TypoGraphySecond;
            this.placeHolderTextTS.setColorScheme(F.Other, o);
            const s = t || i ? this._originalPlaceholderFontSize * this.PLACEHOLDER_FONT_SCALE : this._originalPlaceholderFontSize;
            this.placeholderLabel.fontSize !== s && (this.placeholderLabel.fontSize = s, this.placeholderLabel.updateRenderData(!0))
        }
    }).prototype, "invalidShowNodes", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), V = t(H.prototype, "onFocusShow", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = t(H.prototype, "onFocusHide", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = t(H.prototype, "onMouseOverShow", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), G = t(H.prototype, "onMouseEventNode", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(H.prototype, "editBox", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(H.prototype, "isApplyBorder", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), M = H)) || M) || M));
    o._RF.pop()
}
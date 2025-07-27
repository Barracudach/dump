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
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as D from "./DropDownItem.js";
import * as C from "./DropDownOptionData.js";
import * as I from "./i18nText.js";
import * as v from "./cv.js";

function main() {
    var y, T, x, S, O, P, z, _, N, L, k, H, E, U, V, A, F, M, R, W, j, B, G, J, K, q, Q, X, Y, Z, $, ee, te, ie, oe, ne, se, ae;
    o._RF.push({}, "18e87DyDCJI3aNSiU0WGp0C", "DropDown", void 0);
    const {
        ccclass: le,
        property: re,
        menu: he,
        executeInEditMode: pe
    } = p;
    e("DropDown", (y = he("Custom UI/DropDown"), T = re({
        serializable: !0,
        visible: !1
    }), x = re({
        type: n
    }), S = re({
        serializable: !0,
        visible: !1
    }), O = re({
        type: s,
        range: [0, 255],
        slide: !0,
        step: 1
    }), P = re(a), z = re(a), _ = re(l), N = re(l), L = re(I), k = re(r), H = re(l), E = re(r), U = re({
        type: [h.EventHandler],
        tooltip: "These events are fired only if value is changed by the user from UI"
    }), V = re([h.EventHandler]), A = re([h.EventHandler]), F = re(n), M = re([C]), R = re({
        serializable: !0,
        visible: !1
    }), W = re({
        type: s
    }), le(j = y(j = pe((G = t((B = class extends h {
        constructor(...e) {
            super(...e), i(this, "_interactable", G, this), i(this, "_disabledOpacity", J, this), i(this, "rootNode", K, this), i(this, "template", q, this), i(this, "labelCaption", Q, this), i(this, "labelPlaceholder", X, this), i(this, "labelCaptionI18n", Y, this), i(this, "spriteCaption", Z, this), i(this, "labelItem", $, this), i(this, "spriteItem", ee, this), i(this, "onChangeEvents", te, this), i(this, "onShow", ie, this), i(this, "onHide", oe, this), i(this, "valueIsNumeric", ne, this), i(this, "optionsData", se, this), this.toggleContainer = null, this.dropDown = null, this.isShow = !1, this.validTemplate = !1, this.maxTemplateHeight = 200, this.extraTemplateHeight = 0, this.items = [], i(this, "_selectedIndex", ae, this)
        }
        get interactable() {
            return this._interactable
        }
        set interactable(e) {
            this._interactable = e, this.node.getComponent(d).opacity = this._interactable ? 255 : this.disabledOpacity
        }
        get disabledOpacity() {
            return this._disabledOpacity
        }
        set disabledOpacity(e) {
            this._disabledOpacity = e, this._interactable || (this.node.getComponent(d).opacity = this._disabledOpacity)
        }
        get IsShow() {
            return this.isShow
        }
        get selectedIndex() {
            return this._selectedIndex
        }
        set selectedIndex(e) {
            this._selectedIndex != e && (this._selectedIndex = e, this.refreshShownValue())
        }
        get value() {
            return this.optionsData.length <= 0 || this.selectedIndex < 0 ? null : this.valueIsNumeric ? v.Number(this.optionsData[this.selectedIndex].optionValue) : this.optionsData[this.selectedIndex].optionValue
        }
        set value(e) {
            "number" == typeof e && (e = v.String(e));
            for (let t = 0, i = this.optionsData.length; t < i; t++)
                if (this.optionsData[t].optionValue == e) {
                    this.selectedIndex = t;
                    break
                }
        }
        start() {
            this.maxTemplateHeight = this.template.getComponent(c).height, this.extraTemplateHeight = this.template.getComponent(c).height - this.template.getComponentInChildren(u).node.getComponent(c).height, this.template.active = !1, this.refreshSelected()
        }
        onEnable() {
            this.hide(), this.node.on("touchend", this.onClick, this)
        }
        onDisable() {
            this.node.off("touchend", this.onClick, this)
        }
        onClick() {
            this.interactable && (this.isShow ? this.hide() : this.show())
        }
        onOptionSelected(e) {
            this.items[e].toggle.isChecked && this.selectedIndex != e && (this.selectedIndex = e, this.hide(), this.onChangeEvents.forEach((e => {
                e.emit([this.value])
            })))
        }
        forceUpdateSelectedOption() {
            for (let e = 0, t = this.items.length; e < t; e++)
                if (this.items[e].toggle.isChecked) {
                    this.onOptionSelected(e);
                    break
                }
        }
        show() {
            if (!this.isShow && (this.validTemplate || (this.setUpTemplate(), this.validTemplate)) && !(this.optionsData.length <= 0)) {
                if (this.isShow = !0, this.dropDown) this.dropDown.active = !0;
                else {
                    this.dropDown = m(this.template), this.dropDown.name = "DropDown List", this.dropDown.active = !0, this.dropDown.setParent(this.template.parent), this.dropDown.setPosition(this.template.getPosition()), this.toggleContainer = this.dropDown.getComponentInChildren(b), null == this.rootNode && (this.rootNode = v.tools.getRoot(this.dropDown));
                    let e = this.dropDown.getComponentInChildren(D);
                    e.node.active = !0;
                    for (let t = 0, i = this.optionsData.length; t < i; t++) this.items.push(this.addOptionItem(this.optionsData[t], t, e));
                    e.node.active = !1, this.dropDown.getComponent(c).height = Math.min(this.maxTemplateHeight, e.node.getComponent(c).height * this.optionsData.length + this.extraTemplateHeight), this.adaptDropDownWidgets()
                }
                if (this.dropDown.parent.uuid != this.rootNode.uuid) {
                    this.dropDown.setParent(this.rootNode);
                    let e = this.template.parent.getComponent(c).convertToWorldSpaceAR(this.template.getPosition());
                    this.dropDown.setPosition(this.rootNode.getComponent(c).convertToNodeSpaceAR(e))
                }
                this.refreshShownValue(), this.onShow.forEach((e => {
                    e.emit([this.value])
                }))
            }
        }
        adaptDropDownWidgets() {
            if (null == this.dropDown) return;
            let e = this.dropDown.getComponentsInChildren(g);
            for (let t = 0, i = e.length; t < i; t++) e[t].updateAlignment()
        }
        hide() {
            this.isShow && (this.isShow = !1, this.dropDown && (this.dropDown.active = !1, this.dropDown.parent.uuid != this.template.parent.uuid && (this.dropDown.setParent(this.template.parent), this.dropDown.setPosition(this.template.getPosition()))), this.onHide.forEach((e => {
                e.emit([this.value])
            })))
        }
        setUpTemplate() {
            if (this.validTemplate = !1, !this.template) return void f("The dropdown template is not assigned. The template needs to be assigned and must have a child Node with a Toggle component serving as the item.");
            this.template.active = !0;
            let e = this.template.getComponentInChildren(w);
            if (!e || e.node == this.template) return this.template.active = !1, void f("The dropdown template is not valid. The template must have a child Node with a Toggle component serving as the item.");
            if (this.labelItem && !this.labelItem.node.isChildOf(e.node)) return this.template.active = !1, void f("The dropdown template is not valid. The Label Item must be a child of the Toggle Node.");
            if (this.spriteItem && !this.spriteItem.node.isChildOf(e.node)) return this.template.active = !1, void f("The dropdown template is not valid. The Label Sprite must be a child of the Toggle Node.");
            let t = e.node.getComponent(D);
            if (t || (t = e.node.addComponent(D), t.label = this.labelItem, t.sprite = this.spriteItem, t.toggle = e, t.node = e.node, t.dropDownNode = this.node), t.label) {
                let e = t.label.node.getComponent(I);
                e || (e = t.label.node.addComponent(I)), t.labelI18n = e
            }
            this.template.active = !1, this.validTemplate = !0
        }
        addOptionItem(e, t, i) {
            let o = m(i.node).getComponent(D);
            return o.node.setParent(i.node.parent), o.node.active = !0, o.node.name = "option-" + t, o.toggle.isChecked = t == this.selectedIndex, o.setData(e), o.index = t, o
        }
        refreshSelected() {
            this.selectedIndex = Math.clamp(this.selectedIndex, -1, this.optionsData.length - 1)
        }
        refreshShownValue() {
            if (this.uncheckAllToggles(), this.selectedIndex < 0) return null != this.labelPlaceholder && (this.labelPlaceholder.node.active = !0), void(null != this.labelCaption && (this.labelCaption.node.active = !1));
            if (null != this.labelPlaceholder && (this.labelPlaceholder.node.active = !1), null != this.labelCaption && (this.labelCaption.node.active = !0), this.optionsData.length <= 0) return;
            let e = this.optionsData[this.selectedIndex];
            this.labelCaption && this.updateLabelCaption(e), this.spriteCaption && this.updateSpriteCaption(e), this.selectedIndex in this.items && (this.items[this.selectedIndex].toggle.isChecked = !0)
        }
        uncheckAllToggles() {
            null != this.toggleContainer && (this.toggleContainer.allowSwitchOff = !0);
            for (let e = 0, t = this.items.length; e < t; e++) this.items[e].toggle.isChecked = !1;
            null != this.toggleContainer && (this.toggleContainer.allowSwitchOff = !1)
        }
        updateLabelCaption(e) {
            e && e.optionLabel ? (e.optionLabelUseI18n ? this.labelCaptionI18n.setKey(e.optionLabel, !1) : this.labelCaption.string = e.optionLabel, this.labelCaptionI18n.enabled = e.optionLabelUseI18n) : (this.labelCaptionI18n.enabled = !1, this.labelCaption.string = "")
        }
        updateSpriteCaption(e) {
            e && e.optionSprite ? this.spriteCaption.spriteFrame = e.optionSprite : this.spriteCaption.spriteFrame = null, this.spriteCaption.enabled = null != this.spriteCaption.spriteFrame
        }
        clearOptionsDate() {
            this.optionsData.length = 0, this.items.length = 0, this.destroyDropDownList(), this.refreshSelected()
        }
        addOptionsData(e) {
            e && e.forEach((e => {
                this.optionsData.push(e)
            })), this.destroyDropDownList(), this.refreshSelected()
        }
        destroyDropDownList() {
            this.dropDown && (this.dropDown.destroy(), this.dropDown = null)
        }
    }).prototype, "_interactable", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), t(B.prototype, "interactable", [x], Object.getOwnPropertyDescriptor(B.prototype, "interactable"), B.prototype), J = t(B.prototype, "_disabledOpacity", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 100
        }
    }), t(B.prototype, "disabledOpacity", [O], Object.getOwnPropertyDescriptor(B.prototype, "disabledOpacity"), B.prototype), K = t(B.prototype, "rootNode", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(B.prototype, "template", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(B.prototype, "labelCaption", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(B.prototype, "labelPlaceholder", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(B.prototype, "labelCaptionI18n", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(B.prototype, "spriteCaption", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(B.prototype, "labelItem", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(B.prototype, "spriteItem", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(B.prototype, "onChangeEvents", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ie = t(B.prototype, "onShow", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), oe = t(B.prototype, "onHide", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ne = t(B.prototype, "valueIsNumeric", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), se = t(B.prototype, "optionsData", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ae = t(B.prototype, "_selectedIndex", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), t(B.prototype, "selectedIndex", [W], Object.getOwnPropertyDescriptor(B.prototype, "selectedIndex"), B.prototype), j = B)) || j) || j) || j));
    o._RF.pop()
}
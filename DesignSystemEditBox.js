import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as B from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as x from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as g from "./AutoConfigNodes.js";
import * as y from "./borderGraphic.js";
import * as S from "./EditBoxValidator.js";
import * as _ from "./AppConfig.js";
import * as E from "./ThemeSystem.js";
import * as C from "./DesignSystemConfigs.js";
import * as w from "./DesignSystemConfigs.js";
import * as v from "./DesignSystemConfigs.js";
import * as V from "./DesignSystemConfigs.js";

function main() {
    var D, I, M, N, O, T, A, U, P, k, z, R, L, j, F, G, H, q, K, Q;
    i._RF.push({}, "88890o1ujpNUK7z1DarZuQY", "DesignSystemEditBox", void 0);
    const {
        ccclass: W,
        property: Y,
        menu: Z,
        playOnFocus: J,
        executeInEditMode: X
    } = a;
    t("DesignSystemEditBox", (D = Z("Design System/Edit Box"), I = Y({
        type: S,
        tooltip: "Reference to EditBoxValidator. EditBoxValidator will be used for UI transitions if exist."
    }), M = Y({
        type: r,
        tooltip: "Reference to Edit Box."
    }), N = Y({
        type: n,
        tooltip: "normal state node reference"
    }), O = Y({
        type: d(V),
        tooltip: "Change button state to preview in editor. Works only if there is no EditBoxValidator used.",
        visible: function() {
            return null == this.fieldValidator
        }
    }), T = Y(s), A = Y({
        tooltip: "Should properties of this input field be revised and updated in runtime?\nThis is good to be used when same prefab is used for both mobile and landscape and is instantiated in runtime!"
    }), U = Y({
        tooltip: "Should properties of this input field be revised and updated in editor?"
    }), W(P = X(P = J(P = D((z = e((k = class extends l {
        constructor(...t) {
            super(...t), o(this, "_fieldValidator", z, this), o(this, "_editBox", R, this), o(this, "statesParentNode", L, this), o(this, "setEditBoxDefaults", j, this), o(this, "_normalStateBorder", F, this), o(this, "setStatesDefaults", G, this), o(this, "_editBoxState", H, this), o(this, "_forMobile", q, this), o(this, "resetInRuntime", K, this), o(this, "_shouldAutoUpdateInEditor", Q, this), this._hovered = !1, this._focused = !1, this._normalBorder = null
        }
        get fieldValidator() {
            return this._fieldValidator
        }
        set fieldValidator(t) {
            this._fieldValidator = t
        }
        get editBox() {
            return this._editBox
        }
        set editBox(t) {
            this._editBox = t, this.configureEditBox()
        }
        get normalStateBorder() {
            return this._normalStateBorder
        }
        set normalStateBorder(t) {
            this._normalStateBorder = t, this.configureStates()
        }
        get editBoxState() {
            return this._editBoxState
        }
        set editBoxState(t) {
            this._editBoxState = t, this._normalBorder && g.configure(this._normalBorder, v[t])
        }
        get forMobile() {
            return this._forMobile
        }
        set forMobile(t) {
            this._forMobile = t, this.reset()
        }
        get shouldAutoUpdateInEditor() {
            return this._shouldAutoUpdateInEditor
        }
        set shouldAutoUpdateInEditor(t) {
            this._shouldAutoUpdateInEditor = t, t && (this.doRestore(), h("Input field properties and nodes are updated!")), this._shouldAutoUpdateInEditor = !1
        }
        onLoad() {
            this.fieldValidator ? this.updateText(this.fieldValidator.enabled) : (this.node.on(n.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.on(n.EventType.MOUSE_LEAVE, this.onMouseLeave, this), this.editBox && (this.editBox.node.on(r.EventType.EDITING_DID_BEGAN, this.onStartEditing, this), this.editBox.node.on(r.EventType.EDITING_DID_ENDED, this.onEndEditing, this)), this.updateText(this.editBox.enabled)), this.node.on("setInteractable", this.updateText, this), this.init()
        }
        start() {
            this.resetInRuntime && this.reset()
        }
        doRestore() {
            this.fieldValidator || (this.fieldValidator = g.findComponent(this.node, S)), this.editBox || (this.fieldValidator && (this.editBox = this.fieldValidator.editBox), this.editBox || (this.editBox = g.findComponent(this.node, r))), this.normalStateBorder || (this.normalStateBorder = this.createExtraBorderNode(V.normal, !1)), this.reset()
        }
        reset() {
            this.configureEditBox(), this.configureStates()
        }
        updateText(t) {
            let e = this.editBox.textLabel.getComponent(E);
            0 == t ? (e.enabled = !1, this.editBox.textLabel.node.getComponent(u).color = new p(this.editBox.placeholderLabel.color)) : (e.enabled = !0, e.applyTheme())
        }
        configureEditBox() {
            if (f(this.editBox, !0) && this.setEditBoxDefaults) {
                if (!(f(this.editBox._background, !0) && this.editBox._background.uuid || this.forMobile)) {
                    let t = this.editBox.getComponentInChildren(c);
                    if (t) this.editBox._background = t;
                    else {
                        h(this.name + " edit box does not have background set, background is required for windows platform!");
                        let t = new n("Background");
                        t.addComponent(B), t.addComponent(b), this.editBox.node.insertChild(t, 0), this.editBox._background = t.addComponent(c)
                    }
                }
                g.configure(this.editBox, w(this.forMobile))
            }
        }
        configureStates() {
            f(this.normalStateBorder, !0) && this.setStatesDefaults && (g.configure(this.normalStateBorder, C(this.forMobile, this.node.getComponent(B).height, V.normal)), this._normalBorder = this.normalStateBorder.getComponent(y), this.fieldValidator ? (this.fieldValidator.invalidAffect = this.normalStateBorder, this.createExtraBorderNode(V.hover).active = !1, this.createExtraBorderNode(V.focused).active = !1, this.updateText(this.fieldValidator.enabled)) : this.updateText(this.editBox.enabled))
        }
        createExtraBorderNode(t, e = !0) {
            let o = null,
                i = 0,
                r = "bg",
                n = [];
            switch (t) {
                case V.normal:
                    this.fieldValidator && (n = this.fieldValidator.onFocusHide.filter((t => f(t, !0))), this.fieldValidator.onFocusHide = n);
                    break;
                case V.hover:
                    i = 1, r = "bg_hover", this.fieldValidator && (n = this.fieldValidator.onMouseOverShow.filter((t => f(t, !0))), this.fieldValidator.onMouseOverShow = n);
                    break;
                case V.focused:
                    i = 2, r = "bg_focus", this.fieldValidator && (n = this.fieldValidator.onFocusShow.filter((t => f(t, !0))), this.fieldValidator.onFocusShow = n);
                    break;
                default:
                    o = this.normalStateBorder
            }
            if (0 == n.length) {
                let t = x(r, this.node);
                t || (t = this.createBorderNode(o, i, r)), n.unshift(t)
            }
            return e && g.configure(n[0], C(this.forMobile, this.node.getComponent(B).height, t)), n[0]
        }
        createBorderNode(t = null, e = 0, o = "bg") {
            let i = t ? m(t) : new n(o);
            return i.getComponent(B) || i.addComponent(B), this.statesParentNode.insertChild(i, e), i
        }
        init() {
            var t;
            this.normalStateBorder && (this._normalBorder = this.normalStateBorder.getComponent(y)), f(this.statesParentNode) || (this.statesParentNode = (null == (t = this.normalStateBorder) ? void 0 : t.parent) ?? this.node), this.editBoxState = V.normal
        }
        onMouseOver() {
            this._hovered = !0, this.editBoxState = V.hover
        }
        onMouseLeave() {
            this._hovered = !1, this.editBoxState = this._focused ? V.focused : V.normal
        }
        onStartEditing() {
            this._focused = !0, this.editBoxState = V.focused
        }
        onEndEditing() {
            this._focused = !1, this.editBoxState = this._hovered ? V.hover : V.normal
        }
    }).prototype, "_fieldValidator", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(k.prototype, "fieldValidator", [I], Object.getOwnPropertyDescriptor(k.prototype, "fieldValidator"), k.prototype), R = e(k.prototype, "_editBox", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(k.prototype, "editBox", [M], Object.getOwnPropertyDescriptor(k.prototype, "editBox"), k.prototype), L = e(k.prototype, "statesParentNode", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(k.prototype, "setEditBoxDefaults", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), F = e(k.prototype, "_normalStateBorder", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(k.prototype, "normalStateBorder", [N], Object.getOwnPropertyDescriptor(k.prototype, "normalStateBorder"), k.prototype), G = e(k.prototype, "setStatesDefaults", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), H = e(k.prototype, "_editBoxState", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return V.normal
        }
    }), e(k.prototype, "editBoxState", [O], Object.getOwnPropertyDescriptor(k.prototype, "editBoxState"), k.prototype), q = e(k.prototype, "_forMobile", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !_.Instance.isLandscapeLayout
        }
    }), e(k.prototype, "forMobile", [T], Object.getOwnPropertyDescriptor(k.prototype, "forMobile"), k.prototype), K = e(k.prototype, "resetInRuntime", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Q = e(k.prototype, "_shouldAutoUpdateInEditor", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(k.prototype, "shouldAutoUpdateInEditor", [U], Object.getOwnPropertyDescriptor(k.prototype, "shouldAutoUpdateInEditor"), k.prototype), P = k)) || P) || P) || P) || P));
    i._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ControlSwitch.js";
import * as b from "./borderGraphic.js";
import * as m from "./AppConfig.js";
import * as B from "./Gradient.js";
import * as S from "./ThemeSystemModel.js";
import * as y from "./DesignSystemButtonBase.js";
import * as T from "./ColorSystemType.js";
import * as f from "./ColorSystemMainBtnState.js";
import * as _ from "./ColorSystemTypeOther.js";

function main() {
    var w, v, x, U, M, I, L, z, E, D, k, G, O, N, P, F, A, H, R, j, q, V, W, Q, Z, J, K, X, Y, $, ee, te, oe, re, ie, ne, se, le, ae, he, de, ce, ue, Ce, ge, pe, be, me, Be, Se, ye, Te, fe, _e, we, ve, xe, Ue, Me;
    r._RF.push({}, "74915mAZp1L3q2o3WjddebQ", "MttDesignSystemButton", void 0);
    const {
        ccclass: Ie,
        property: Le,
        executeInEditMode: ze,
        playOnFocus: Ee,
        requireComponent: De,
        executionOrder: ke,
        menu: Ge
    } = h;
    var Oe = function(e) {
        return e[e.mobile = 0] = "mobile", e[e.landscape = 1] = "landscape", e
    }(Oe || {});
    let Ne = (w = Ie("ThemeColorButton"), v = Le(i), x = Le({
        visible: function() {
            return this.useGradient
        },
        type: S
    }), U = Le({
        visible: function() {
            return this.useGradient
        },
        type: S
    }), M = Le({
        visible: function() {
            return !this.useGradient
        },
        type: S
    }), w((z = t((L = class {
        constructor() {
            o(this, "useGradient", z, this), o(this, "gradientStartColor", E, this), o(this, "gradientEndColor", D, this), o(this, "nodeColor", k, this)
        }
        updateColor() {
            this.gradientStartColor && this.gradientStartColor.getColor(), this.gradientEndColor && this.gradientEndColor.getColor(), this.nodeColor && this.nodeColor.getColor()
        }
    }).prototype, "useGradient", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), E = t(L.prototype, "gradientStartColor", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), D = t(L.prototype, "gradientEndColor", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), k = t(L.prototype, "nodeColor", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), I = L)) || I);
    e("default", (G = De(n), O = ke(-1), N = Ge("Design System/Mtt Design System Button"), P = Le({
        visible: function() {
            return this.isSwitchToggle
        },
        type: p
    }), F = Le({
        tooltip: "true: click this button twice, then it can be unselected"
    }), A = Le({
        tooltip: "checked: apply default color or gradient (locked) to btn"
    }), H = Le({
        visible: function() {
            return this.useDefaultBtnStyle
        },
        tooltip: "choose default design style (Mobile/Desktop )",
        type: s(Oe)
    }), R = Le({
        visible: function() {
            return !this.isSwitchToggle && (this.bg || this.border)
        },
        tooltip: "set default btn state, change this can also preview this state btn style"
    }), j = Le({
        visible: function() {
            return !this.isSwitchToggle
        },
        type: l
    }), q = Le({
        visible: function() {
            return !this.isSwitchToggle && this.bg
        },
        type: Ne
    }), V = Le({
        visible: function() {
            return !this.isSwitchToggle && this.bg
        },
        type: Ne
    }), W = Le({
        visible: function() {
            return !this.isSwitchToggle && this.bg
        },
        type: Ne
    }), Q = Le({
        visible: function() {
            return this.hasDisabledState && !this.isSwitchToggle && this.bg
        },
        type: Ne
    }), Z = Le({
        visible: function() {
            return !this.isSwitchToggle
        },
        type: b
    }), J = Le({
        visible: function() {
            return !this.isSwitchToggle && this.border
        },
        type: Ne
    }), K = Le({
        visible: function() {
            return !this.isSwitchToggle && this.border
        },
        type: Ne
    }), X = Le({
        visible: function() {
            return !this.isSwitchToggle && this.border
        },
        type: Ne
    }), Y = Le({
        visible: function() {
            return this.hasDisabledState && !this.isSwitchToggle && this.border
        },
        type: Ne
    }), $ = Le(a), ee = Le({
        visible: function() {
            return this.textLabel
        },
        type: S
    }), te = Le({
        visible: function() {
            return this.textLabel
        },
        type: S
    }), oe = Le({
        visible: function() {
            return this.textLabel
        },
        type: S
    }), re = Le({
        visible: function() {
            return this.hasDisabledState && this.textLabel
        },
        type: S
    }), Ie(ie = ze(ie = Ee(ie = G(ie = O(ie = N((se = t((ne = class extends d {
        constructor(...e) {
            super(...e), o(this, "shouldAutoUpdateInEditor", se, this), o(this, "isSwitchToggle", le, this), o(this, "controlSwitch", ae, this), o(this, "hasDisabledState", he, this), o(this, "isToggleButton", de, this), o(this, "useDefaultBtnStyle", ce, this), o(this, "designLayout", ue, this), o(this, "btnState", Ce, this), o(this, "bg", ge, this), o(this, "normalBgColor", pe, this), o(this, "hoverBgColor", be, this), o(this, "pressedBgColor", me, this), o(this, "disabledBgColor", Be, this), o(this, "border", Se, this), o(this, "normalBorderColor", ye, this), o(this, "hoverBorderColor", Te, this), o(this, "pressedBorderColor", fe, this), o(this, "disabledBorderColor", _e, this), o(this, "textLabel", we, this), o(this, "normalTextColor", ve, this), o(this, "hoverTextColor", xe, this), o(this, "pressedTextColor", Ue, this), o(this, "disabledTextColor", Me, this), this._toggleSwitchedCb = null, this._clickedCb = null, this._editorFocus = !1
        }
        onFocusInEditor() {
            this._editorFocus = !0
        }
        onLostFocusInEditor() {
            this._editorFocus = !1
        }
        onLoad() {
            this._updateStyle(), this.isSwitchToggle ? this.controlSwitch.node.on(p.g_event_name_switch, this._onToggleSwitched, this) : (this.node.on(l.EventType.MOUSE_ENTER, this._onMouseOver, this), this.node.on(l.EventType.MOUSE_LEAVE, this._onMouseLeave, this)), c.on("themechange", this.onThemeChanged, this)
        }
        start() {
            this.isSwitchToggle || this.setBtnState(this.btnState)
        }
        onThemeChanged() {
            this._updateStyle()
        }
        _applyDefaultSetting() {
            this.border && (this.normalBorderColor.useGradient = !1, this.normalBorderColor.nodeColor.themeType = m.Instance.themeUse, this.normalBorderColor.nodeColor.colorScheme = T.MainBtn, this.normalBorderColor.nodeColor.colorMainBtn = f.NormalBorder, this.hoverBorderColor.useGradient = !1, this.hoverBorderColor.nodeColor.themeType = m.Instance.themeUse, this.hoverBorderColor.nodeColor.colorScheme = T.MainBtn, this.hoverBorderColor.nodeColor.colorMainBtn = f.HoverBorder, this.pressedBorderColor.useGradient = !1, this.pressedBorderColor.nodeColor.themeType = m.Instance.themeUse, this.pressedBorderColor.nodeColor.colorScheme = T.MainBtn, this.pressedBorderColor.nodeColor.colorMainBtn = f.PressedBorder, this.disabledBorderColor.useGradient = !1, this.disabledBorderColor.nodeColor.themeType = m.Instance.themeUse, this.disabledBorderColor.nodeColor.colorScheme = T.MainBtn, this.disabledBorderColor.nodeColor.colorMainBtn = f.NormalBorder), this.bg && (this.normalBgColor.useGradient = !1, this.normalBgColor.nodeColor.themeType = m.Instance.themeUse, this.designLayout == Oe.landscape ? (this.normalBgColor.nodeColor.colorScheme = T.MainBtn, this.normalBgColor.nodeColor.colorMainBtn = f.NormalBg) : (this.normalBgColor.nodeColor.colorScheme = T.Other, this.normalBgColor.nodeColor.colorSchemeOther = _.MainPanel), this.hoverBgColor.useGradient = !1, this.hoverBgColor.nodeColor.themeType = m.Instance.themeUse, this.hoverBgColor.nodeColor.colorScheme = T.MainBtn, this.hoverBgColor.nodeColor.colorMainBtn = f.HoverBg, this.pressedBgColor.useGradient = !0, this.pressedBgColor.gradientStartColor.themeType = m.Instance.themeUse, this.pressedBgColor.gradientStartColor.colorScheme = T.MainBtn, this.pressedBgColor.gradientStartColor.colorMainBtn = f.PressedStartBg, this.pressedBgColor.gradientEndColor.themeType = m.Instance.themeUse, this.pressedBgColor.gradientEndColor.colorScheme = T.MainBtn, this.pressedBgColor.gradientEndColor.colorMainBtn = f.PressedEndBg, this.disabledBgColor.useGradient = !1, this.disabledBgColor.nodeColor.themeType = m.Instance.themeUse, this.disabledBgColor.nodeColor.colorScheme = T.MainBtn, this.disabledBgColor.nodeColor.colorMainBtn = f.NormalBg), this.textLabel && (this.normalTextColor.themeType = m.Instance.themeUse, this.normalTextColor.colorScheme = T.MainBtn, this.normalTextColor.colorMainBtn = f.NormalText, this.hoverTextColor.themeType = m.Instance.themeUse, this.hoverTextColor.colorScheme = T.MainBtn, this.hoverTextColor.colorMainBtn = f.HoverText, this.pressedTextColor.themeType = m.Instance.themeUse, this.pressedTextColor.colorScheme = T.MainBtn, this.pressedTextColor.colorMainBtn = f.PressedText, this.disabledTextColor.themeType = m.Instance.themeUse, this.disabledTextColor.colorScheme = T.MainBtn, this.disabledTextColor.colorMainBtn = f.NormalText)
        }
        _updateThemeType() {
            this.border && (this.normalBorderColor.nodeColor.themeType = m.Instance.themeUse, this.hoverBorderColor.nodeColor.themeType = m.Instance.themeUse, this.pressedBorderColor.nodeColor.themeType = m.Instance.themeUse, this.disabledBorderColor.nodeColor.themeType = m.Instance.themeUse), this.bg && (this.normalBgColor.nodeColor.themeType = m.Instance.themeUse, this.normalBgColor.gradientStartColor.themeType = m.Instance.themeUse, this.normalBgColor.gradientEndColor.themeType = m.Instance.themeUse, this.hoverBgColor.nodeColor.themeType = m.Instance.themeUse, this.hoverBgColor.gradientStartColor.themeType = m.Instance.themeUse, this.hoverBgColor.gradientEndColor.themeType = m.Instance.themeUse, this.pressedBgColor.nodeColor.themeType = m.Instance.themeUse, this.pressedBgColor.gradientStartColor.themeType = m.Instance.themeUse, this.pressedBgColor.gradientEndColor.themeType = m.Instance.themeUse, this.disabledBgColor.nodeColor.themeType = m.Instance.themeUse), this.textLabel && (this.normalTextColor.themeType = m.Instance.themeUse, this.hoverTextColor.themeType = m.Instance.themeUse, this.pressedTextColor.themeType = m.Instance.themeUse, this.disabledTextColor.themeType = m.Instance.themeUse)
        }
        _updateStyle() {
            this.useDefaultBtnStyle ? this._applyDefaultSetting() : this._updateThemeType(), this._updateUsingColor(this.normalBorderColor), this._updateUsingColor(this.pressedBorderColor), this._updateUsingColor(this.hoverBorderColor), this._updateUsingColor(this.disabledBorderColor), this._updateUsingColor(this.normalBgColor), this._updateUsingColor(this.pressedBgColor), this._updateUsingColor(this.hoverBgColor), this._updateUsingColor(this.disabledBgColor), this._updateUsingColor(this.normalTextColor), this._updateUsingColor(this.pressedTextColor), this._updateUsingColor(this.hoverTextColor), this._updateUsingColor(this.disabledTextColor), this.setBtnState(this.btnState)
        }
        update(e) {
            this._editorFocus && this.shouldAutoUpdateInEditor && this._updateStyle()
        }
        onClicked() {
            var e;
            if (this.btnState != y.disabled)
                if (this.isSwitchToggle) this.controlSwitch.setOn(!this.controlSwitch.isOn()), this._onToggleSwitched();
                else switch (this.btnState) {
                    case y.normal:
                    case y.hover:
                        this._onPressedState(), null == (e = this._clickedCb) || e.call(this);
                        break;
                    case y.pressed:
                        var t;
                        if (this.isToggleButton) this.designLayout === Oe.landscape ? this._onhoverState() : this._onNormalState(), null == (t = this._clickedCb) || t.call(this)
                }
        }
        checkSelected() {
            return this.isSwitchToggle ? this.controlSwitch.isOn() : this.btnState === y.pressed
        }
        setBtnState(e) {
            switch (e) {
                case y.normal:
                    this._onNormalState();
                    break;
                case y.hover:
                    this._onhoverState();
                    break;
                case y.pressed:
                    this._onPressedState();
                    break;
                case y.disabled:
                    this._onDisabledState();
                    break;
                default:
                    this._onNormalState()
            }
        }
        setSwitchToggledCb(e) {
            this._toggleSwitchedCb = e
        }
        setBtnClickedCb(e) {
            this._clickedCb = e
        }
        _updateUsingColor(e) {
            e && (e instanceof Ne ? e.updateColor() : e instanceof S && e.getColor())
        }
        _onToggleSwitched() {
            var e;
            this.controlSwitch.isOn() ? this.textLabel.node.getComponent(u).color = this.pressedTextColor.getColor() : this.textLabel.node.getComponent(u).color = this.normalTextColor.getColor(), null == (e = this._toggleSwitchedCb) || e.call(this)
        }
        _updateBorderColor(e) {
            this.border.setStrokesColor(e.nodeColor)
        }
        _updateBtnColorByState(e, t) {
            t && C(t, !0) && t.activeInHierarchy && (e.useGradient ? (t.getComponent(B).enabled = !0, t.getComponent(B).startColor = e.gradientStartColor.getColor(), t.getComponent(B).endColor = e.gradientEndColor.getColor(), t.getComponent(u).color = new g(g.WHITE), t.getComponent(u).color._set_a_unsafe(255)) : (t.getComponent(B) && (t.getComponent(B).enabled = !1), t.getComponent(u).color = e.nodeColor.getColor(), t.getComponent(u).color._set_a_unsafe(e.nodeColor.getColor().a)))
        }
        _onNormalState() {
            this.btnState = y.normal, this._updateBtnColorByState(this.normalBgColor, this.bg), this.border && this._updateBorderColor(this.normalBorderColor), this.textLabel && (this.textLabel.node.getComponent(u).color = this.normalTextColor.getColor(), this.textLabel.node.getComponent(u).color._set_a_unsafe(this.normalTextColor.getColor().a))
        }
        _onhoverState() {
            this.btnState = y.hover, this._updateBtnColorByState(this.hoverBgColor, this.bg), this.border && this._updateBorderColor(this.hoverBorderColor), this.textLabel && (this.textLabel.node.getComponent(u).color = this.hoverTextColor.getColor(), this.textLabel.node.getComponent(u).color._set_a_unsafe(this.hoverTextColor.getColor().a))
        }
        _onPressedState() {
            this.btnState = y.pressed, this._updateBtnColorByState(this.pressedBgColor, this.bg), this.border && this._updateBorderColor(this.pressedBorderColor), this.textLabel && (this.textLabel.node.getComponent(u).color = this.pressedTextColor.getColor(), this.textLabel.node.getComponent(u).color._set_a_unsafe(this.pressedTextColor.getColor().a))
        }
        _onDisabledState() {
            this.btnState = y.disabled, this._updateBtnColorByState(this.disabledBgColor, this.bg), this.border && this._updateBorderColor(this.disabledBorderColor), this.textLabel && (this.textLabel.node.getComponent(u).color = this.disabledTextColor.getColor(), this.textLabel.node.getComponent(u).color._set_a_unsafe(this.disabledTextColor.getColor().a))
        }
        _onMouseOver() {
            this.btnState === y.normal && !0 === this.node.getComponent(n).interactable && this._onhoverState()
        }
        _onMouseLeave() {
            this.btnState === y.hover && this._onNormalState()
        }
    }).prototype, "shouldAutoUpdateInEditor", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), le = t(ne.prototype, "isSwitchToggle", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ae = t(ne.prototype, "controlSwitch", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(ne.prototype, "hasDisabledState", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), de = t(ne.prototype, "isToggleButton", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), ce = t(ne.prototype, "useDefaultBtnStyle", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), ue = t(ne.prototype, "designLayout", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Oe.landscape
        }
    }), Ce = t(ne.prototype, "btnState", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.normal
        }
    }), ge = t(ne.prototype, "bg", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(ne.prototype, "normalBgColor", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), be = t(ne.prototype, "hoverBgColor", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), me = t(ne.prototype, "pressedBgColor", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), Be = t(ne.prototype, "disabledBgColor", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), Se = t(ne.prototype, "border", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(ne.prototype, "normalBorderColor", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), Te = t(ne.prototype, "hoverBorderColor", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), fe = t(ne.prototype, "pressedBorderColor", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), _e = t(ne.prototype, "disabledBorderColor", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Ne
        }
    }), we = t(ne.prototype, "textLabel", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(ne.prototype, "normalTextColor", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), xe = t(ne.prototype, "hoverTextColor", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), Ue = t(ne.prototype, "pressedTextColor", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), Me = t(ne.prototype, "disabledTextColor", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new S
        }
    }), ie = ne)) || ie) || ie) || ie) || ie) || ie) || ie));
    r._RF.pop()
}
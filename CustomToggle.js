import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./CustomToggleGroup.js";
import * as g from "./cv.js";

function main() {
    var u, d, p, k, b, C, _, T, y, E, M, v, f, m;
    o._RF.push({}, "c5107vE+e1HYoEP8MniMWBI", "CustomToggle", void 0);
    const {
        ccclass: G,
        property: w
    } = r;
    e("CustomToggle", (u = w({
        tooltip: "如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态"
    }), d = w({
        tooltip: "设置是否激活组件"
    }), p = w({
        type: s,
        tooltip: "Toggle 背景图片"
    }), k = w({
        type: s,
        tooltip: "Toggle 处于禁用状态时显示的图片"
    }), b = w({
        type: s,
        tooltip: "Toggle 处于选中状态时显示的图片"
    }), C = w({
        type: a,
        tooltip: "Toggle 所属的 ToggleGroup，这个属性是可选的。如果这个属性为 null，则 Toggle 是一个 CheckBox，否则，Toggle 是一个 RadioButton"
    }), G((y = t((T = class extends l {
        constructor(...e) {
            super(...e), i(this, "_isChecked", y, this), i(this, "_touchEnabled", E, this), i(this, "bgMark", M, this), i(this, "disabledMark", v, this), i(this, "checkMark", f, this), i(this, "toggleGroup", m, this)
        }
        get isChecked() {
            return this._isChecked
        }
        set isChecked(e) {
            e !== this._isChecked && (this.toggleGroup && this.toggleGroup.enabled && this._isChecked && !this.toggleGroup.allowSwitchOff || (this._isChecked = e, this._updateCheckMark(), this.toggleGroup && this.toggleGroup.enabled && this.toggleGroup.updateToggles(this)))
        }
        get touchEnabled() {
            return this._touchEnabled
        }
        set touchEnabled(e) {
            e !== this._touchEnabled && (this._touchEnabled = e, this._updateTouchEnabled())
        }
        check() {
            this.isChecked || (this.isChecked = !0, this._emitToggleEvents())
        }
        uncheck() {
            this.isChecked && (this.isChecked = !1, this._emitToggleEvents())
        }
        hideCheckMark() {
            this._isChecked = !1, this._updateCheckMark()
        }
        setTouchEnable(e, t = !0) {
            if (e !== this._touchEnabled && (this._touchEnabled = e, this._updateTouchEnabled(), t)) {
                let t = this.getComponent(n);
                t && (t.enabled = e, t.interactable = e)
            }
        }
        onLoad() {}
        start() {}
        onEnable() {
            this._registerToggleEvent(), this.toggleGroup && this.toggleGroup.enabledInHierarchy && this.toggleGroup.addToggle(this)
        }
        onDisable() {
            this._unregisterToggleEvent(), this.toggleGroup && this.toggleGroup.enabledInHierarchy && this.toggleGroup.removeToggle(this)
        }
        _updateCheckMark() {
            this.checkMark && (this.checkMark.node.active = this.isChecked)
        }
        _registerToggleEvent() {
            this.node.on(n.EventType.CLICK, this._onClickToggle, this)
        }
        _unregisterToggleEvent() {
            this.node.off(n.EventType.CLICK, this._onClickToggle, this)
        }
        _emitToggleEvents() {
            this.node.emit(h.EventType.TOGGLE, this)
        }
        _onClickToggle(e) {
            g.AudioMgr.playButtonSound("button_click.mp3"), this.isChecked = !this.isChecked, this._emitToggleEvents()
        }
        _updateTouchEnabled() {
            let e = this._touchEnabled;
            var t, i;
            (this.enabled = e, this.disabledMark) ? (this.disabledMark.node.active = !e, this.bgMark && (this.bgMark.node.active = e), this.checkMark && (e ? this.isChecked && (this.checkMark.node.active = e) : this.checkMark.node.active = e)) : (c(null == (t = this.bgMark) ? void 0 : t.node) && g.tools.setSpriteGray(this.bgMark.node, !e), c(null == (i = this.checkMark) ? void 0 : i.node) && g.tools.setSpriteGray(this.checkMark.node, !e))
        }
    }).prototype, "_isChecked", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), t(T.prototype, "isChecked", [w], Object.getOwnPropertyDescriptor(T.prototype, "isChecked"), T.prototype), E = t(T.prototype, "_touchEnabled", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), t(T.prototype, "touchEnabled", [w], Object.getOwnPropertyDescriptor(T.prototype, "touchEnabled"), T.prototype), M = t(T.prototype, "bgMark", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(T.prototype, "disabledMark", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(T.prototype, "checkMark", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(T.prototype, "toggleGroup", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = T)) || _));
    o._RF.pop()
}
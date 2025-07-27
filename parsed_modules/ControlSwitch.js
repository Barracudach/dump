import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ThemeSystemModel.js";
import * as f from "./cv.js";
import * as m from "./AppConfig.js";
import * as w from "./TweenControl.js";

function main() {
    var C, b, y, d, O, T, v, I, E, A, S, k, M, x, P, z, H, U, D, L, R, N, V, F, W, Z, j, B, X, G;
    e._RF.push({}, "2b95bEboxpOP6aGMnsHzX2/", "ControlSwitch", void 0);
    const {
        ccclass: q,
        property: J,
        executeInEditMode: K,
        playOnFocus: Q,
        menu: Y
    } = h;
    t("ControlSwitch", (C = J(n), b = J(n), y = J(n), d = J(s), O = J({
        tooltip: "开关接收事件后是否自动打开或关闭(true - 点击/滑动时会自动开或关; false - 点击/滑动时只回调事件, 不会自动开或关)"
    }), T = J({
        tooltip: "是否开启 action(在滚动视图中, 建议关闭该功能, 貌似'在滚动视图中任何带滚动事件的控件同时触动滚动事件会冲突', 期待creator在后续升级中修正该bug)"
    }), v = J({
        tooltip: "开关状态(true: 开启, false: 关闭; 默认为: true, 直接修改该值不会触发状态改变事件, 若要触发事件请使用'setOn')"
    }), I = J({
        tooltip: "show/hide img_off when switch to off"
    }), E = J({
        tooltip: "use custom Img_switch color or not"
    }), A = J({
        tooltip: "color for Img_switch Off",
        visible: function() {
            return this.useCustomImg_switchColor
        }
    }), S = J({
        tooltip: "color for Img_switch On",
        visible: function() {
            return this.useCustomImg_switchColor
        }
    }), k = J({
        tooltip: "color for Img_switch Off",
        type: p,
        visible: function() {
            return this.useCustomImg_switchColor && this.useColorType
        }
    }), M = J({
        tooltip: "color for Img_switch On",
        type: p,
        visible: function() {
            return this.useCustomImg_switchColor && this.useColorType
        }
    }), q(x = K(x = Q(((G = class t extends r {
        constructor(...t) {
            super(...t), o(this, "img_off", z, this), o(this, "img_on", H, this), o(this, "img_switch", U, this), o(this, "layout", D, this), o(this, "enabledAuto", L, this), o(this, "enabledAction", R, this), o(this, "_switchOn", N, this), o(this, "showImg_off", V, this), o(this, "useCustomImg_switchColor", F, this), o(this, "Img_switchOffColor", W, this), o(this, "Img_switchOnColor", Z, this), o(this, "useColorType", j, this), o(this, "Img_switchOffColorType", B, this), o(this, "Img_switchOnColorType", X, this), this._muteClickedSound = !1, this._onPosition = c(l.ZERO), this._offPosition = c(l.ZERO), this._switch_src_color = new _(_.WHITE), this._bActioning = !1, this._bMoving = !1, this._lastMoveOffset = new u(u.ZERO)
        }
        get switchOn() {
            return this._switchOn
        }
        set switchOn(t) {
            t !== this._switchOn && (this._bActioning || this._bMoving || (this._switchOn = t, this._checkImgStatus()))
        }
        onLoad() {
            this._init()
        }
        start() {}
        onEnable() {
            this._registerToggleEvent()
        }
        onDisable() {
            this._unregisterToggleEvent()
        }
        _init() {
            this._switch_src_color = this.img_switch.node.getComponent(a).color.clone(), this._onPosition = new l(this.img_on.node.position), this._offPosition = new l(-Math.abs(2 * this.img_switch.node.position.x), this._onPosition.y)
        }
        _registerToggleEvent() {
            this.node.on(s.EventType.TOUCH_START, this._onClickStart, this), this.node.on(s.EventType.TOUCH_CANCEL, this._onClickCancel, this), this.node.on(s.EventType.TOUCH_MOVE, this._onClickMove, this), this.node.on(s.EventType.TOUCH_END, this._onClickEnd, this)
        }
        _unregisterToggleEvent() {
            this.node.off(s.EventType.TOUCH_START, this._onClickStart, this), this.node.off(s.EventType.TOUCH_CANCEL, this._onClickCancel, this), this.node.off(s.EventType.TOUCH_MOVE, this._onClickMove, this), this.node.off(s.EventType.TOUCH_END, this._onClickEnd, this)
        }
        _onClickStart(t) {
            t.propagationStopped = !0, this._bActioning || this.useCustomImg_switchColor || (this.img_switch.node.getComponent(a).color = new _(211, 211, 211, 255))
        }
        _onClickCancel(t) {
            if (t.propagationStopped = !0, !this._bActioning && (this.useCustomImg_switchColor || (this.img_switch.node.getComponent(a).color = this._switch_src_color), this.enabledAuto && this._bMoving)) {
                this._bMoving = !1;
                let t = !1,
                    i = Math.abs(this._lastMoveOffset.x) + this.img_switch.node.getComponent(g).width / 2 >= this.node.getComponent(g).width / 2;
                t = this._switchOn ? this._lastMoveOffset.x <= 0 && i : this._lastMoveOffset.x >= 0 && i, t ? this._action(!this._switchOn) : this._action(this._switchOn)
            }
        }
        _onClickMove(t) {
            if (t.propagationStopped = !0, !this._bActioning && this.enabledAction && this.enabledAuto) {
                this._bMoving = !0, this._lastMoveOffset = new u(t.getLocation().x - t.getStartLocation().x, t.getLocation().y - t.getStartLocation().y);
                let i = new l(this.layout.position.x + t.getDeltaX(), this.layout.position.y);
                i.x <= this._offPosition.x ? i.x = this._offPosition.x : i.x >= this._onPosition.x && (i.x = this._onPosition.x), this.layout.setPosition(i)
            }
        }
        muteClickSound(t) {
            this._muteClickedSound = t
        }
        _onClickEnd(i) {
            !this._muteClickedSound && f.AudioMgr && f.AudioMgr.playButtonSound("button_click.mp3"), i.propagationStopped = !0, this._bActioning || (this._bMoving = !1, this.enabledAuto && this._action(!this._switchOn), this.node.emit(t.g_event_name_click, this))
        }
        _checkImgStatus() {
            this.img_on.node.active = !0, this.showImg_off ? this.img_off.node.active = !0 : this.img_off.node.active = this._switchOn, this.layout.setPosition(this._switchOn ? this._onPosition : this._offPosition), this.useCustomImg_switchColor ? this.useColorType ? (this.Img_switchOffColorType.themeType = m.Instance.themeUse, this.Img_switchOnColorType.themeType = m.Instance.themeUse, this.img_switch.node.getComponent(a).color = this._switchOn ? this.Img_switchOnColorType.getColor() : this.Img_switchOffColorType.getColor()) : this.img_switch.node.getComponent(a).color = this._switchOn ? this.Img_switchOnColor : this.Img_switchOffColor : this.img_switch.node.getComponent(a).color = this._switch_src_color
        }
        _action(i, o = !0) {
            if (this._bActioning) return;
            let e = i ? this._onPosition.x : this._offPosition.x,
                n = i ? this._onPosition.y : this._offPosition.y;
            if (e === this.layout.position.x && n === this.layout.position.y) return;
            this._switchOn = i;
            let s = () => {
                this._bActioning = !1, this._checkImgStatus(), o && this.node.emit(t.g_event_name_switch, this._switchOn, this)
            };
            this.enabledAction ? (this._bActioning = !0, w.moveTo(this.layout, .1, c(e, this.layout.position.y, this.layout.position.z), null, 0, s)) : s()
        }
        setOn(i, o = !1, e = !1) {
            o && this.enabledAction ? this._action(i, e) : (this.switchOn = i, e && this.node.emit(t.g_event_name_switch, this._switchOn, this))
        }
        isOn() {
            return this._switchOn
        }
    }).g_class_name = "ControlSwitch", G.g_event_name_click = "control-switch-click", G.g_event_name_switch = "control-switch-switch", z = i((P = G).prototype, "img_off", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = i(P.prototype, "img_on", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = i(P.prototype, "img_switch", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = i(P.prototype, "layout", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(P.prototype, "enabledAuto", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), R = i(P.prototype, "enabledAction", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), N = i(P.prototype, "_switchOn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), i(P.prototype, "switchOn", [J], Object.getOwnPropertyDescriptor(P.prototype, "switchOn"), P.prototype), V = i(P.prototype, "showImg_off", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), F = i(P.prototype, "useCustomImg_switchColor", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), W = i(P.prototype, "Img_switchOffColor", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new _(_.WHITE)
        }
    }), Z = i(P.prototype, "Img_switchOnColor", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new _(_.WHITE)
        }
    }), j = i(P.prototype, "useColorType", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), B = i(P.prototype, "Img_switchOffColorType", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new p
        }
    }), X = i(P.prototype, "Img_switchOnColorType", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new p
        }
    }), x = P)) || x) || x) || x));
    e._RF.pop()
}
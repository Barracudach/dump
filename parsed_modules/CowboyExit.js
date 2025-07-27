import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./i18nText.js";
import * as u from "./cv.js";
import * as h from "./MiniGameSoundManager.js";

function main() {
    var g, b, p, C, _, d, f, m, x, y, E, k;
    i._RF.push({}, "6ffe2YJ2RBHd7iz9wpn8iEx", "CowboyExit", void 0);
    const {
        ccclass: w,
        property: I
    } = a;
    t("CowboyExit", (g = I(o), b = I(o), p = I(o), C = I(s), _ = I(s), w((m = e((f = class extends l {
        constructor(...t) {
            super(...t), n(this, "btn_cancel", m, this), n(this, "btn_ok", x, this), n(this, "btn_close", y, this), n(this, "exit_text", E, this), n(this, "title", k, this), this._exitCallback = null, this._gameId = void 0, this._roomId = void 0
        }
        onLoad() {
            this.exit_text.getComponent(r).string = u.config.getStringDataCasino("CowboyExit_bg_exit_text"), this.btn_cancel.node.on(o.EventType.CLICK, (t => {
                this.onCancel()
            }), this), this.btn_ok.node.on(o.EventType.CLICK, (t => {
                this.onOk()
            }), this), this.btn_close.node.on(o.EventType.CLICK, (t => {
                this.onClose()
            }), this), this._gameId = u.Enum.GameId.CowBoy, this._roomId = u.roomManager.getMiniGameRoomIdTemplate(u.Enum.GameId.CowBoy)
        }
        onEnable() {
            u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), u.appConfig.isLandscapeLayout && u.appConfig.getGeneralConfig().multiWindowEnabled && this.onChangeLanguage()
        }
        onDisable() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node)
        }
        initTexts() {
            const t = [],
                e = this.btn_ok.getComponentInChildren(r),
                n = this.btn_cancel.getComponentInChildren(r);
            this.title && t.push(this.title), e && t.push(e.node), n && t.push(n.node);
            for (const e of t)
                if (e) {
                    const t = e.getComponent(c);
                    t && t.setOptionUseEngTextOnly(!0)
                }
        }
        onOk() {
            h.playButtonSound("button_click"), this._exitCallback ? this._exitCallback() : u.roomManager.RequestLeaveRoom(this._gameId, this._roomId), this.close()
        }
        onCancel() {
            h.playButtonSound("button_click"), this.close()
        }
        onClose() {
            h.playButtonSound("button_click"), this.close()
        }
        show(t = null) {
            this.node.active = !0, this._exitCallback = t
        }
        close() {
            this.node.active = !1
        }
        onDestroy() {
            this._exitCallback = null
        }
        onChangeLanguage() {
            this.exit_text.getComponent(r).string = u.config.getStringDataCasino("CowboyExit_bg_exit_text")
        }
    }).prototype, "btn_cancel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(f.prototype, "btn_ok", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(f.prototype, "btn_close", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(f.prototype, "exit_text", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(f.prototype, "title", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = f)) || d));
    i._RF.pop()
}
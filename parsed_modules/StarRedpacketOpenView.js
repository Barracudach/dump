import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as g from "./GameSceneInstance.js";

function main() {
    var h, b, p, _, d, f, m, w, y, S, v, z, k, E, L, O, T, C, D, A, R, V;
    n._RF.push({}, "95d5e9gs51Jf4haJPOOqUxX", "StarRedpacketOpenView", void 0);
    const {
        ccclass: B,
        property: G
    } = a;
    e("default", (h = G(l), b = G(l), p = G(l), _ = G(r), d = G(r), f = G(r), m = G(r), w = G(r), y = G(r), S = G(l), B((k = t((z = class extends o {
        constructor(...e) {
            super(...e), i(this, "large_bg", k, this), i(this, "small_bg", E, this), i(this, "view", L, this), i(this, "title", O, this), i(this, "des", T, this), i(this, "des_en", C, this), i(this, "number", D, this), i(this, "ok_btn_label", A, this), i(this, "help_btn_label", R, this), i(this, "help_btn", V, this)
        }
        onLoad() {
            this._initLanguage()
        }
        _initLanguage() {
            let e = c.config.getCurrentLanguage() == c.Enum.LANGUAGE_TYPE.zh_CN || c.config.getCurrentLanguage() == c.Enum.LANGUAGE_TYPE.zh_TW;
            this.des.node.active = e, this.des_en.node.active = !e, this.title.fontSize = e ? 42 : 36, (e ? this.des : this.des_en).string = c.config.getStringData("StarRedpacketOpenView_des"), this.title.string = c.config.getStringData("StarRedpacketOpenView_title"), this.ok_btn_label.string = c.config.getStringData("Confirm"), this.help_btn_label.string = c.config.getStringData("StarRedpacketOpenView_help_btn_label")
        }
        showView(e) {
            this.number.string = c.StringTools.serverGoldToShowString(e.amount), this.large_bg.active = e.is_help_wrap, this.small_bg.active = !e.is_help_wrap;
            let t = e.is_help_wrap ? this.large_bg : this.small_bg;
            this.help_btn.active = e.is_help_wrap, this.node.active = !0;
            let i = this.node.getComponent(s);
            i.hasEventListener("finished") || i.on("finished", (function() {
                u("action_bg_node_02", t).getComponent(s).play("hongbao1")
            }), this), i.play("hongbao")
        }
        hideView() {
            this.node.active = !1
        }
        onOkBtn() {
            c.AudioMgr.playButtonSound("back_button"), this.hideView()
        }
        onHelpBtn() {
            var e;
            c.AudioMgr.playButtonSound("button_click");
            let t = null == (e = g.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            c.TP.showMsg(c.config.getStringData("Exit_confirmation"), c.Enum.ButtonStyle.TWO_BUTTON, (() => {
                c.dataHandler.getUserData().is_goto_myredpacket = !0, c.MessageCenter.send("Exit_click")
            }), null, !1, !1, "", !1, r.HorizontalAlign.CENTER, !1, t)
        }
    }).prototype, "large_bg", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(z.prototype, "small_bg", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(z.prototype, "view", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(z.prototype, "title", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(z.prototype, "des", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(z.prototype, "des_en", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(z.prototype, "number", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(z.prototype, "ok_btn_label", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(z.prototype, "help_btn_label", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(z.prototype, "help_btn", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = z)) || v));
    n._RF.pop()
}
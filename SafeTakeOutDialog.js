import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";
import * as _ from "./Enum.js";

function main() {
    var p, b, d, C, m, S, y, k, L, x, A, z;
    i._RF.push({}, "fc3cb4eUrlGY5Rz7tha1/ky", "SafeTakeOutDialog", void 0);
    const {
        ccclass: B,
        property: D
    } = s;
    t("default", (p = D(o), b = D(o), d = D(r), C = D(r), m = D(a), B((k = e((y = class extends c {
        constructor(...t) {
            super(...t), n(this, "sure_btn", k, this), n(this, "cancel_btn", L, this), n(this, "title_txt", x, this), n(this, "content_txt", A, this), n(this, "safePref", z, this), this.safe_pref = null
        }
        onLoad() {
            this.sure_btn.node.on("click", (t => {
                this.onClickSureBtn()
            }), this), this.cancel_btn.node.on("click", (t => {
                this.onClickCancelBtn()
            }), this), this.onChangeLanguage(), h.MessageCenter.register(h.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        onDestroy() {
            h.MessageCenter.unregister(h.config.CHANGE_LANGUAGE, this.node)
        }
        onChangeLanguage() {
            this.title_txt.string = h.config.getStringData("Safe_tips"), h.config.getCurrentLanguage() == _.zh_CN || h.config.getCurrentLanguage() == _.zh_TW ? (this.content_txt.fontSize = 42, this.content_txt.lineHeight = 63) : (this.content_txt.fontSize = 36, this.content_txt.lineHeight = 54), this.content_txt.string = h.config.getStringData("Safe_tips_content"), l("Label", this.sure_btn.node).getComponent(r).string = h.config.getStringData("Safe_deposit_immediately"), l("Label", this.cancel_btn.node).getComponent(r).string = h.config.getStringData("Safe_continue_takeout")
        }
        onEnable() {
            h.MessageCenter.send(h.Enum.MessageCenterAction.RGButtonInFront, !0)
        }
        onDisable() {
            h.MessageCenter.send(h.Enum.MessageCenterAction.RGButtonInFront, !1)
        }
        onClickSureBtn() {
            h.AudioMgr.playButtonSound("button_click.mp3"), this.node.removeFromParent(), this.safe_pref = u.getScene().getComponentInChildren(g).node.getChildByName("safe_pref"), this.safe_pref || (this.safe_pref = f(this.safePref), u.getScene().addChild(this.safe_pref), this.safe_pref.name = "safe_pref")
        }
        onClickCancelBtn() {
            h.AudioMgr.playButtonSound("button_click.mp3"), this.node.removeFromParent(), h.MessageCenter.send("earn_open")
        }
    }).prototype, "sure_btn", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(y.prototype, "cancel_btn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(y.prototype, "title_txt", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(y.prototype, "content_txt", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(y.prototype, "safePref", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = y)) || S));
    i._RF.pop()
}
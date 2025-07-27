import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cv.js";

function main() {
    var u, g, p, b, f, _;
    n._RF.push({}, "47856gxb/5Bo4uo2x3m+gv8", "Protocol", void 0);
    const {
        ccclass: h,
        property: d
    } = c;
    e("Protocol", (u = d(r), g = d(o), h((f = t((b = class extends l {
        constructor(...e) {
            super(...e), i(this, "title", f, this), i(this, "web", _, this), this.PROTOTAL_RULE = "user/article/getAgreement?unique=register&clientType=%s&language=%s"
        }
        start() {
            this.title.string = a.config.getStringData("Login_Scene_register_panel_Text_4_0_0"), this.showWebview(), s("back_button", this.node).on("click", (e => {
                a.AudioMgr.playButtonSound("back_button.mp3"), this.node.active = !1
            }))
        }
        showWebview() {
            let e = a.domainMgr.getServerHead()[0];
            this.web.url = a.config.getStringData(e, !0) + a.StringTools.formatC(this.PROTOTAL_RULE, a.config.GET_CLIENT_TYPE(), a.config.getCurrentLanguage())
        }
    }).prototype, "title", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(b.prototype, "web", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = b)) || p));
    n._RF.pop()
}
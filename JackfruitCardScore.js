import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cv.js";

function main() {
    var o, n, a, l, u, s;
    r._RF.push({}, "f6c26gyZDdBv6al2ggrWZHm", "JackfruitCardScore", void 0);
    const {
        ccclass: g,
        property: d
    } = cc._decorator;
    e("JackfruitCardScore", (o = d(cc.Node), n = d(cc.Node), g((l = class extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "title_text", u, this), t(this, "rule_img", s, this)
        }
        onLoad() {
            if (c.resMgr.setSpriteFrame(this.title_text, c.config.getLanguagePath("game/jackfruit/gamerule/card_score_title")), c.resMgr.setSpriteFrame(this.rule_img, c.config.getLanguagePath("game/jackfruit/gamerule/card_score")), c.config.IS_IPHONEX_SCREEN) {
                var e, t;
                let i = null == (e = cc.find("view_panel", this.node)) ? void 0 : e.getComponent(cc.Widget);
                i && (i.top = c.config.FULLSCREEN_OFFSETY);
                let r = null == (t = cc.find("title_panel", this.node)) ? void 0 : t.getComponent(cc.Widget);
                r && (r.getComponent(cc.Widget).top = c.config.FULLSCREEN_OFFSETY)
            }
        }
        onBtnClose(e, t) {
            "btn" == t && c.AudioMgr.playButtonSound("close.mp3"), this.node.active = !1
        }
        show() {
            this.node.active = !0
        }
    }, u = i(l.prototype, "title_text", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = i(l.prototype, "rule_img", [n], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = l)) || a));
    r._RF.pop()
}
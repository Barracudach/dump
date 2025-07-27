import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cv.js";

function main() {
    var m, _, p, C, f, y, S, x, P;
    n._RF.push({}, "22b67GAIFdFmpMblQgMYmEj", "CriticismTips", void 0);
    const {
        ccclass: I,
        property: M
    } = o;
    t("default", (m = M(r), _ = M(s), p = M(a), I(((P = class t extends l {
        constructor(...t) {
            super(...t), i(this, "title_text", y, this), i(this, "msg_Richtext", S, this), i(this, "btn_Sure", x, this), this.sureCallback = null, this.itemDataInfo = null, this.minCritProb = 10, this.maxCritProb = 20, this.critNeedMoney = 10, this.gameTypeStr = "BB"
        }
        static getSinglePrefabInst(e, i) {
            let n = i;
            return n || (n = c.getScene()), t._g_prefabInst || (t._g_prefabInst = g(e)), n.getChildByUuid(t._g_prefabInst.uuid) || u(t._g_prefabInst, !0) || (t._g_prefabInst = g(e)), t._g_prefabInst
        }
        autoShow(t, e, i) {
            this.node.active = !0, this.itemDataInfo = e, 0 != e.minCritProb && (this.minCritProb = e.minCritProb), 0 != e.maxCritProb && (this.maxCritProb = e.maxCritProb), 0 != e.critNeedMoney && (this.critNeedMoney = e.critNeedMoney), this.gameTypeStr = "BB", e.game_mode == b.Enum.CreateGameMode.CreateGame_Mode_Short && (this.gameTypeStr = "Ante"), t.getComponent(h).anchorPoint.equals(d.ZERO) && (t = c.getScene()), t.getChildByUuid(this.node.uuid) || t.addChild(this.node)
        }
        onLoad() {
            this.btn_Sure.node.on("click", (t => {
                this.sureCallback && (this.sureCallback(), this.node.active = !1)
            }), this), this.onChangeLanguage(), b.MessageCenter.register(b.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        start() {}
        onDestroy() {
            b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this.node)
        }
        onChangeLanguage() {
            this.btn_Sure.node.getChildByName("Label").getComponent(r).string = b.config.getStringData("Confirm"), this.title_text.string = b.config.getStringData("Criticsim_guide_title");
            let t = b.StringTools.formatC(b.config.getStringData("Criticsim_guide_tips"), this.maxCritProb, this.critNeedMoney, this.gameTypeStr);
            b.StringTools.setRichTextString(this.msg_Richtext.node, t)
        }
        setSureFunc(t) {
            this.sureCallback = t
        }
    })._g_prefabInst = null, y = e((f = P).prototype, "title_text", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(f.prototype, "msg_Richtext", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(f.prototype, "btn_Sure", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = f)) || C));
    n._RF.pop()
}
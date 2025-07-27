import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as p from "./LanguageItem.js";
import * as f from "./TooltipsManager.js";

function main() {
    var d, b, h, _, y, L, I;
    a._RF.push({}, "cbd8eLhOTZLX6ZNXEGaJ2T9", "LanguageSet", void 0);
    const {
        ccclass: A,
        property: C
    } = r;
    t("LanguageSet", (d = C(i), b = C(o), A(((I = class t extends s {
        constructor(...t) {
            super(...t), n(this, "togglePrefab", y, this), n(this, "togglesParent", L, this), this.buttons = []
        }
        static getSinglePrefabInst(e, n) {
            let a = n;
            return a || (a = u.getScene()), t._g_prefabInst || (t._g_prefabInst = g(e)), a.getChildByUuid(t._g_prefabInst.uuid) || l(t._g_prefabInst, !0) || (t._g_prefabInst = g(e)), t._g_prefabInst
        }
        onEnable() {
            f.hideAllTooltips()
        }
        onLoad() {
            c.appConfig.getGeneralConfig().availableLanguages.forEach((t => {
                let e = g(this.togglePrefab);
                this.togglesParent.addChild(e);
                let n = e.getComponent(p);
                n.init(t), this.buttons.push(n), e.on("click", (e => {
                    c.AudioMgr.playButtonSound("button_click.mp3"), this._OnChangeLanguage(t)
                }), this)
            }), this)
        }
        updateView() {
            let t = 0,
                e = this.buttons.length;
            for (; t < e; ++t) this.buttons[t].updateState()
        }
        _OnChangeLanguage(t) {
            c.config.setCurrentLanguage(t), this.updateView()
        }
        onClickBack(t) {
            c.AudioMgr.playButtonSound("back_button.mp3"), c.action.showAction(this.node, c.action.eMoveActionDir.EMAD_TO_RIGHT, c.action.eMoveActionType.EMAT_FADE_OUT, c.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                this.node.destroy()
            }))
        }
    })._g_prefabInst = null, y = e((_ = I).prototype, "togglePrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(_.prototype, "togglesParent", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = _)) || h));
    a._RF.pop()
}
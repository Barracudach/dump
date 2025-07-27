import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemRegularButton.js";
import * as f from "./i18nText.js";
import * as h from "./GeneralConfig.js";
import * as d from "./cv.js";

function main() {
    var p, b, L, y, m, B, S, _, v, w;
    i._RF.push({}, "0b2a1CX0QpODJrybjnXlBSi", "LanguageItem", void 0);
    const {
        ccclass: x,
        property: C
    } = s;
    t("LanguageItem", (p = C(c), b = C(f), L = C(f), y = C(a), x((S = e((B = class extends l {
        constructor(...t) {
            super(...t), n(this, "designBtn", S, this), n(this, "langLabel", _, this), n(this, "flagLabel", v, this), n(this, "flag", w, this), this.lang = void 0
        }
        init(t) {
            this.lang = h[t], this.updateView(), this.updateState()
        }
        updateView() {
            this.langLabel && this.langLabel.setKey("LanguageView_" + this.lang.code + "_button_text", !0), this.flagLabel && this.flagLabel.setKey("LanguageView_" + this.lang.code + "_flag_text", !0), this.flag && r.load(this.lang.flagPath, o, this.onFlagLoaded.bind(this))
        }
        onFlagLoaded(t, e) {
            if (t) return u(t), void(this.flag.node.active = !1);
            this.flag.node.active = !0, this.flag.spriteFrame = e
        }
        updateState() {
            if (!this.designBtn) return;
            let t = d.config.getCurrentLanguage();
            this.lang.type == t ? (this.designBtn.btnState = g.pressed, this.designBtn.isChecked = !0) : (this.designBtn.btnState = g.normal, this.designBtn.isChecked = !1)
        }
    }).prototype, "designBtn", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(B.prototype, "langLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(B.prototype, "flagLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(B.prototype, "flag", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = B)) || m));
    i._RF.pop()
}
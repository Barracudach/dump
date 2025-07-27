import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./CommonScriptsDependencies.js";
import * as u from "./LocalizationController.js";
import * as p from "./CustomLocalizedLabelSet.js";

function main() {
    var d, f, z, b, L, S, h;
    o._RF.push({}, "b5a65VcL5BIL6tfJfmyleTI", "CustomLocalizedFontSize", void 0);
    const {
        ccclass: m,
        property: g,
        menu: C
    } = l;
    e("CustomLocalizedFontSize", (d = C("Custom UI/CustomLocalizedFontSize"), f = g([p]), z = g(n), m(b = d((S = t((L = class extends a {
        constructor(...e) {
            super(...e), i(this, "fontSizeSet", S, this), i(this, "label", h, this)
        }
        onLoad() {
            this.fetchRender()
        }
        onEnable() {
            this.updateLabel()
        }
        fetchRender() {
            this.label || (this.label = this.getComponent(n)), this.label && this.updateLabel()
        }
        updateLabel() {
            if (r(this.label))
                if (c.isInit()) try {
                    let e = this.getStrByLang(this.fontSizeSet, u.getInstance().convertLangCodeToMTTCode(c.getDeps().getUserLanguage()));
                    !e && this.fontSizeSet[0] && (e = this.fontSizeSet[0].str), this.label.fontSize = parseInt(e)
                } catch (e) {
                    console.error(e)
                } else s("CommonScriptsDependencies not initialized CustomLocalizedFontSize::updateLabel");
                else s("Failed to update localized label fontsize, label component is invalid!")
        }
        getStrByLang(e, t) {
            for (let i = 0; i < e.length; ++i)
                if (e[i].language === t) return e[i].str;
            return ""
        }
    }).prototype, "fontSizeSet", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), h = t(L.prototype, "label", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = L)) || b) || b));
    o._RF.pop()
}
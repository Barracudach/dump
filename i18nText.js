import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./CommonScriptsDependencies.js";
import * as f from "./StringUtils.js";
import * as m from "./StringUtils.js";
import * as y from "./LocalizationController.js";
import * as x from "./LocalizationEvents.js";

function main() {
    var b, d, C, _, T, L, K, D, U, E, S, z, v, B, F, I, w, A;
    n._RF.push({}, "08e1e8nYqFCd7dX6KiiPt2N", "i18nText", void 0);
    const {
        ccclass: R,
        property: G,
        disallowMultiple: N,
        menu: O
    } = o;
    let H = t("i18nConcatItem", (b = R("i18nConcatItem"), d = G({
        tooltip: "used to glue text parts translations"
    }), C = G(s), b((L = e((T = class {
        constructor() {
            i(this, "glue", L, this), i(this, "textKey", K, this)
        }
    }).prototype, "glue", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), K = e(T.prototype, "textKey", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), _ = T)) || _));
    t("i18nText", (D = O("Custom UI/i18n"), U = G({
        tooltip: "i18n key used for translation\n-use $ for currency"
    }), E = G(r), S = G({
        type: l(m)
    }), z = G({
        type: H
    }), R(v = N(v = D((F = e((B = class extends a {
        constructor(...t) {
            super(...t), i(this, "textKey", F, this), i(this, "isCurrency", I, this), i(this, "flag", w, this), i(this, "concat", A, this), this.m_label = null, this.m_editBox = null, this.m_richText = null, this.m_lastTextKey = "", this.m_lastLanguage = "", this.optionUseEngText = !1, this.forceRefresh = !1
        }
        onLoad() {
            this.initComponents()
        }
        onEnable() {
            this.refresh(), y.getObserver().subscribe(x.CHANGE_LANGUAGE, this.initLanguage, this)
        }
        onDisable() {
            y.getObserver().unsubscribe(x.CHANGE_LANGUAGE, this.initLanguage, this)
        }
        setOptionUseEngTextOnly(t) {
            this.optionUseEngText = t, this.refresh()
        }
        setKey(t, e = !1) {
            this.enabled = !0, this.textKey != t ? (this.textKey = t, this.refresh()) : e && (this.forceRefresh = !0, this.refresh())
        }
        setText(t) {
            this.enabled = !1, this.textKey = "", this.m_lastTextKey = "", this.setTextInternal(t)
        }
        refresh() {
            this.initLanguage(this.forceRefresh), this.initCurrency()
        }
        updateWidget() {
            const t = this.node.getComponent(h);
            null != t && t.updateAlignment()
        }
        initLanguage(t = !1) {
            if (0 == this.textKey.length || this.isCurrency || !p.getDeps().getUserLanguage()) return;
            if (!t && this.m_lastTextKey == this.textKey && this.m_lastLanguage == p.getDeps().getUserLanguage()) return;
            this.forceRefresh = !1, this.m_lastTextKey = this.textKey, this.m_lastLanguage = p.getDeps().getUserLanguage();
            let e = this.applyFlag(this.getTermStringData(this.textKey));
            if (0 != e.length) {
                for (let t = 0; t < this.concat.length; t++)
                    if (this.concat[t].textKey.length > 0) {
                        let i = this.applyFlag(this.getTermStringData(this.concat[t].textKey));
                        i.length > 0 && (e = e + this.concat[t].glue + i)
                    } else e += this.concat[t].glue;
                this.setTextInternal(e)
            }
        }
        getTermStringData(t) {
            const e = p.getDeps();
            return y.getInstance().getTranslatedString(t, this.optionUseEngText ? e.englishLanguageCode : e.getUserLanguage())
        }
        applyFlag(t) {
            return f.formatString(t, this.flag)
        }
        initCurrency() {
            this.isCurrency && this.setTextInternal(p.getDeps().getUserCurrency())
        }
        setTextInternal(t) {
            null == this.m_label && null == this.m_editBox && null == this.m_richText && this.initComponents(), null != this.m_label ? this.m_label.string = t : null != this.m_editBox ? this.m_editBox.placeholder = t : null != this.m_richText && (this.m_richText.string = t), this.node.emit("label_string_updated")
        }
        initComponents() {
            this.m_label = this.node.getComponent(u), this.m_editBox = this.node.getComponent(g), this.m_richText = this.node.getComponent(c), "$" === this.textKey && (this.isCurrency = !0)
        }
    }).prototype, "textKey", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), I = e(B.prototype, "isCurrency", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), w = e(B.prototype, "flag", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.Default
        }
    }), A = e(B.prototype, "concat", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = B)) || v) || v) || v));
    n._RF.pop()
}
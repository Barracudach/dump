import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./ThemeSystem.js";
import * as a from "./ColorSystemTypeOther.js";
import * as c from "./cv.js";
import * as g from "./i18nText.js";
import * as m from "./ColorSystemType.js";

function main() {
    var d, p, u, f, S, x, T, C, v, L;
    n._RF.push({}, "cbdfaD+DftMEJZINei4QMeb", "HintValidator", void 0);
    const {
        ccclass: y,
        property: I
    } = s;
    t("HintValidator", (d = y("HintValidator"), p = I({
        type: o
    }), u = I({
        type: o
    }), f = I({
        type: h,
        visible: function() {
            return !this.validateLength
        }
    }), d((T = i((x = class {
        constructor() {
            e(this, "hintText", T, this), e(this, "hintIcon", C, this), e(this, "validateLength", v, this), e(this, "configRegexIndex", L, this), this.defaultColorScheme = a.TypoGraphySecond, this.invalidColorScheme = a.ErrorColor, this.validColorScheme = a.ValidColor, this.hintTextTS = void 0, this.hintIconTS = void 0, this.hintTextLoc = void 0, this.hintIconSprite = void 0, this.iconInvalid = void 0, this.iconValid = void 0, this.minLength = null, this.maxLength = null, this.formsConfigName = ""
        }
        init(t, i, e, n, o) {
            if (this.iconInvalid = n, this.iconValid = o, this.minLength = t, this.maxLength = i, this.formsConfigName = e, this.hintTextTS = this.hintText.getComponent(l), this.hintIconTS = this.hintIcon.getComponent(l), this.hintTextLoc = this.hintText.getComponent(g), this.hintIconSprite = this.hintIcon.getComponent(r), this.reset(), this.validateLength) this.setHintLocText();
            else {
                var h;
                const t = null == (h = c.appConfig.getFormsConfig()[this.formsConfigName]) || null == (h = h.regexpHints) ? void 0 : h[this.configRegexIndex];
                t ? this.hintTextLoc.setKey(t.errorMessage, !0) : this.hintText.active = !1
            }
        }
        reset(t) {
            this.validateLength && this.setHintLocText(), t && (this.hintTextTS.setColorScheme(m.Other, this.defaultColorScheme), this.hintIconTS.setColorScheme(m.Other, this.defaultColorScheme), this.hintIconSprite.spriteFrame = this.iconInvalid)
        }
        setHintLocText() {
            this.minLength == this.maxLength ? this.hintTextLoc.setText(c.StringTools.formatC(c.config.getStringData("ErrorValidStringExactLength", !1), this.minLength)) : this.hintTextLoc.setText(c.StringTools.formatC(c.config.getStringData("ErrorValidStringLength", !1), this.minLength, this.maxLength))
        }
        validate(t, i = !0) {
            let e = !0;
            if (this.validateLength) {
                if (null != this.minLength && null != this.maxLength && this.minLength <= this.maxLength) {
                    const i = c.StringTools.getStrLen(t);
                    e = i >= this.minLength && i <= this.maxLength
                }
            } else {
                var n;
                const i = null == (n = c.appConfig.getFormsConfig()[this.formsConfigName]) || null == (n = n.regexpHints) ? void 0 : n[this.configRegexIndex];
                if (null != i) {
                    let n = c.StringTools.getPatternRegexp(i.regExpString);
                    null == n && (n = i.regExp), n && (e = n.test(t))
                }
            }
            return i && (e ? (this.hintTextTS.setColorScheme(m.Other, this.validColorScheme), this.hintIconTS.setColorScheme(m.Other, this.validColorScheme), this.hintIconSprite.spriteFrame = this.iconValid) : (this.hintTextTS.setColorScheme(m.Other, this.invalidColorScheme), this.hintIconTS.setColorScheme(m.Other, this.invalidColorScheme), this.hintIconSprite.spriteFrame = this.iconInvalid)), e
        }
    }).prototype, "hintText", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), C = i(x.prototype, "hintIcon", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), v = i(x.prototype, "validateLength", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), L = i(x.prototype, "configRegexIndex", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), S = x)) || S));
    n._RF.pop()
}
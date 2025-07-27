import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ColorSystemTypeOther.js";
import * as g from "./ThemeSystem.js";
import * as d from "./ColorSystemType.js";
import * as u from "./cv.js";

function main() {
    var m, b, S, y, T, f, v, C, I, x, B, w, z, O, F, L, R;
    r._RF.push({}, "07de8WJmYNEY7gho6yixweH", "NotifyMsgBase", void 0);
    const {
        property: V
    } = h;
    t("NotifyMsgBase", (m = V({
        type: o
    }), b = V({
        type: o
    }), S = V({
        type: n
    }), y = V({
        type: n
    }), T = V({
        type: s
    }), f = V({
        type: s
    }), v = V({
        type: s
    }), C = V({
        type: s
    }), x = i((I = class extends l {
        constructor(...t) {
            super(...t), e(this, "hintText", x, this), e(this, "hintIcon", B, this), e(this, "bgSprite", w, this), e(this, "progressBar", z, this), this.prefabPath = "prefabs/notifyMsg", this.prefab = null, this.notifyNode = null, this.notifyComp = null, this.prefabLoadedCallback = null, e(this, "iconInvalid", O, this), e(this, "iconValid", F, this), e(this, "bgInvalid", L, this), e(this, "bgValid", R, this), this.invalidColorScheme = c.ErrorColor, this.validColorScheme = c.ValidColor, this.hintTextTS = void 0, this.hintIconTS = void 0, this.progressBarTS = void 0, this.hintTextLabel = void 0, this.hintIconSprite = void 0, this.progressAnim = void 0
        }
        show(t, i) {
            null != t && "" != t && (this.node.active = !0, this.hintTextLabel.string = t, i ? (this.hintTextTS.setColorScheme(d.Other, this.invalidColorScheme), this.hintIconTS.setColorScheme(d.Other, this.invalidColorScheme), this.progressBarTS.setColorScheme(d.Other, this.invalidColorScheme), this.hintIconSprite.spriteFrame = this.iconInvalid, this.bgSprite.spriteFrame = this.bgInvalid) : (this.hintTextTS.setColorScheme(d.Other, this.validColorScheme), this.hintIconTS.setColorScheme(d.Other, this.validColorScheme), this.progressBarTS.setColorScheme(d.Other, this.validColorScheme), this.hintIconSprite.spriteFrame = this.iconValid, this.bgSprite.spriteFrame = this.bgValid), this.startProgressBar())
        }
        showi18n(t, i) {
            null != t && "" != t && this.show(u.config.getStringData(t, !1), i)
        }
        hide() {
            this.node.active = !1
        }
        onLoad() {
            this.hintTextTS = this.hintText.getComponent(g), this.hintIconTS = this.hintIcon.getComponent(g), this.progressBarTS = this.progressBar.getComponent(g), this.hintTextLabel = this.hintText.getComponent(a), this.hintIconSprite = this.hintIcon.getComponent(n)
        }
        onEnable() {
            var t;
            const i = (null == (t = this.node.parent) || null == (t = t.children) ? void 0 : t.length) ?? -1;
            i > 0 && this.node.setSiblingIndex(i - 1)
        }
        getReadingTime() {
            return 2 * u.StringTools.readingTime(this.hintTextLabel.string)
        }
        startProgressBar() {
            this.progressAnim && this.progressAnim.stop(), this.progressBar.fillRange = 1;
            const t = this.getReadingTime();
            this.progressAnim = p(this.progressBar).to(t, {
                fillRange: 0
            }).call(this.hide, this).start()
        }
    }).prototype, "hintText", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), B = i(I.prototype, "hintIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), w = i(I.prototype, "bgSprite", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), z = i(I.prototype, "progressBar", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), O = i(I.prototype, "iconInvalid", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), F = i(I.prototype, "iconValid", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), L = i(I.prototype, "bgInvalid", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), R = i(I.prototype, "bgValid", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), I));
    r._RF.pop()
}
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as p from "./AppConfig.js";
import * as b from "./Gradient.js";
import * as C from "./ThemeSystem.js";
import * as y from "./ThemeSystemModel.js";
import * as S from "./ColorSystemType.js";
import * as k from "./ColorSystemMainBtnState.js";
import * as f from "./ColorSystemWeight.js";
import * as B from "./ColorSystemTypeOther.js";

function main() {
    var z, F, O, w, I, T, W, P, v, M, U, G, x, L, N, D, A, E, _, H, R;
    n._RF.push({}, "b4de3ync91HNJ46bxc/MPBD", "DesignSystemButton", void 0);
    const {
        ccclass: V,
        property: j,
        executeInEditMode: q,
        playOnFocus: J,
        requireComponent: K,
        executionOrder: Q
    } = l;
    let X = t("ButtonStyle", function(t) {
            return t[t.Primary = 0] = "Primary", t[t.Secondary = 1] = "Secondary", t[t.Outline = 2] = "Outline", t[t.OverlayOutline = 3] = "OverlayOutline", t[t.UsePreset = 4] = "UsePreset", t[t.UsePresetGradient = 5] = "UsePresetGradient", t[t.GreyColor = 6] = "GreyColor", t[t.Text = 7] = "Text", t
        }({})),
        Y = t("ButtonSize", function(t) {
            return t[t.Large = 0] = "Large", t[t.Medium = 1] = "Medium", t[t.Small = 2] = "Small", t[t.Custom = 3] = "Custom", t[t.CustomNode = 4] = "CustomNode", t
        }({}));
    t("default", (z = K(i), F = Q(-1), O = j({
        type: r
    }), w = j({
        type: s
    }), I = j({
        type: u
    }), T = j({
        type: u
    }), W = j({
        type: a(X)
    }), P = j({
        type: a(Y)
    }), v = j({
        visible: function() {
            return this.buttonSize != Y.CustomNode
        }
    }), M = j({
        visible: function() {
            return this.buttonSize == Y.Custom
        }
    }), V(U = q(U = J(U = z(U = F((x = e((G = class extends c {
        constructor(...t) {
            super(...t), o(this, "background", x, this), o(this, "title", L, this), o(this, "backgroundSF", N, this), o(this, "outlineSF", D, this), o(this, "buttonStyle", A, this), o(this, "buttonSize", E, this), o(this, "width", _, this), o(this, "height", H, this), o(this, "shouldAutoUpdateButtonColors", R, this), this.editorFocus = !1
        }
        onLoad() {
            this.setButtonSize(this.buttonSize)
        }
        start() {
            this.onThemeChanged(), h.on("themechange", this.onThemeChanged, this)
        }
        onThemeChanged() {
            this.setButtonStyle(this.buttonStyle)
        }
        updateInteractionColors() {
            if (!this.shouldAutoUpdateButtonColors) return;
            let t = this.getComponent(i),
                e = t.normalColor.a;
            t.hoverColor = new g(this.background.getComponent(d).color.r, this.background.getComponent(d).color.g, this.background.getComponent(d).color.b, .9 * e), t.pressedColor = new g(this.background.getComponent(d).color.r, this.background.getComponent(d).color.g, this.background.getComponent(d).color.b, .8 * e), t.disabledColor = new g(this.background.getComponent(d).color.r, this.background.getComponent(d).color.g, this.background.getComponent(d).color.b, .5 * e)
        }
        setButtonSize(t) {
            if (null != this.background) switch (t) {
                case Y.Small:
                    this.node.getComponent(m).setContentSize(this.width, 72);
                    break;
                case Y.Medium:
                    this.node.getComponent(m).setContentSize(this.width, 80);
                    break;
                case Y.Large:
                    this.node.getComponent(m).setContentSize(this.width, 92);
                    break;
                case Y.Custom:
                    this.node.getComponent(m).setContentSize(this.width, this.height)
            }
        }
        setButtonStyle(t) {
            switch (t) {
                case X.GreyColor:
                    this.background.getComponent(d).spriteFrame = this.backgroundSF, this.background.getComponent(b).enabled = !1, this.title.getComponent(C).setColorSystemWeight(S.Vulcano, f.W600), this.background.getComponent(C).setColorSystemWeight(S.Nero, f.W400), this.updateInteractionColors();
                    break;
                case X.Primary:
                    this.background.getComponent(b).enabled = !0, this.background.getComponent(d).spriteFrame = this.backgroundSF, this.title.getComponent(C).setColorSystemWeight(S.Nero, f.W800), this.background.getComponent(C).setColorScheme(S.Other, B.ButtonStylePrimary), this.updateInteractionColors();
                    break;
                case X.Secondary:
                    this.background.getComponent(d).spriteFrame = this.outlineSF, this.background.getComponent(b).enabled = !1, this.title.getComponent(C).setColorSystemWeight(S.Gold, f.W400), this.background.getComponent(C).setColorSystemWeight(S.Gold, f.W400), this.updateInteractionColors();
                    break;
                case X.Outline:
                    this.background.getComponent(d).spriteFrame = this.outlineSF, this.background.getComponent(b).enabled = !1, this.title.getComponent(C).setColorScheme(S.Other, B.ButtonStyleOutline), this.background.getComponent(C).setColorSystemWeight(S.Vulcano, f.W600), this.updateInteractionColors();
                    break;
                case X.OverlayOutline:
                    this.background.getComponent(d).spriteFrame = this.backgroundSF, this.background.getComponent(b).enabled = !1, this.title.getComponent(C).setColorScheme(S.Other, B.ButtonStyleOverlayOutline), this.background.getComponent(C).customColor = this.getBackgroundSecondColor(), this.background.getComponent(C).setColorScheme(S.Other, B.Custom), this.updateInteractionColors();
                    break;
                case X.UsePreset:
                    this.background.getComponent(b).enabled = !1, this.updateInteractionColors();
                    break;
                case X.UsePresetGradient:
                    this.background.getComponent(b).enabled = !0, this.updateInteractionColors();
                    break;
                case X.Text:
                    this.background.getComponent(b).enabled = !1, this.background.getComponent(d).enabled = !1, this.title.getComponent(C).setColorScheme(S.Other, B.ButtonStyleText), this.updateInteractionColors()
            }
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            this.editorFocus && (this.setButtonSize(this.buttonSize), this.setButtonStyle(this.buttonStyle))
        }
        getBackgroundSecondColor() {
            return y.getInstance().getColor(p.Instance.themeUse, S.MainBtn, f.W400, k.OutlineNormalBorder)
        }
    }).prototype, "background", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(G.prototype, "title", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(G.prototype, "backgroundSF", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(G.prototype, "outlineSF", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(G.prototype, "buttonStyle", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return X.Primary
        }
    }), E = e(G.prototype, "buttonSize", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Y.Large
        }
    }), _ = e(G.prototype, "width", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 200
        }
    }), H = e(G.prototype, "height", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 200
        }
    }), R = e(G.prototype, "shouldAutoUpdateButtonColors", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), U = G)) || U) || U) || U) || U) || U));
    n._RF.pop()
}
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ThemeSystem.js";
import * as w from "./CommonTools.js";
import * as f from "./cv.js";
import * as u from "./TooltipsManager.js";
import * as m from "./TooltipsChangeColorHelper.js";
import * as b from "./TooltipsChangeColorHelper.js";
import * as D from "./FontSystem.js";

function main() {
    var T, y, P, L, S, C, M, A, B, z, R, k, v, N, H, x, I, U, Y, V, _, X, F, G, W, O, E, J, j, q, K, Q, Z, $, tt, et, it, ot, nt, st, rt;
    o._RF.push({}, "fd455JWVBNACoXycG+xyNDH", "TooltipsHandler", void 0);
    const {
        ccclass: ht,
        property: lt
    } = r;
    let at = t("TooltipType", function(t) {
            return t[t.PointerLeft = 0] = "PointerLeft", t[t.PointerDown = 1] = "PointerDown", t[t.PointerUpRight = 2] = "PointerUpRight", t[t.PointerUpLeft = 3] = "PointerUpLeft", t[t.PointerUpMiddle = 4] = "PointerUpMiddle", t[t.PointerDownRight = 5] = "PointerDownRight", t[t.PointerUpMiddleLowest = 6] = "PointerUpMiddleLowest", t
        }({})),
        pt = t("AnchorPointPos", function(t) {
            return t[t.Middle = .5] = "Middle", t[t.Right = .9] = "Right", t[t.Left = .1] = "Left", t
        }({})),
        gt = t("TooltipSkinType", function(t) {
            return t.Default = "DefaultSkin", t.Help = "HelpSkin", t.MttDetailInfo = "MttDetailInfoSkin", t.NewReplayerInfo = "NewReplayerInfoSkin", t
        }({})),
        dt = t("default", (T = lt(c), y = lt(c), P = lt(c), L = lt(c), S = lt(c), C = lt(c), M = lt(c), A = lt(c), B = lt({
            type: n,
            tooltip: "Tooltip title for pointer left"
        }), z = lt({
            type: n,
            tooltip: "Tooltip content for pointer left"
        }), R = lt({
            type: n,
            tooltip: "Tooltip title for pointer down"
        }), k = lt({
            type: n,
            tooltip: "Tooltip content for pointer down"
        }), v = lt({
            type: s,
            tooltip: "Tooltip point to left container"
        }), N = lt({
            type: s,
            tooltip: "Tooltip point to down container"
        }), H = lt({
            type: n
        }), x = lt({
            type: s
        }), I = lt({
            type: s
        }), U = lt({
            type: s
        }), Y = lt({
            type: s
        }), ht(((rt = class t extends h {
            constructor(...t) {
                super(...t), i(this, "arrowThemeSystemDown", X, this), i(this, "bgThemeSystemDown", F, this), i(this, "titleThemeSystemDown", G, this), i(this, "contentThemeSystemDown", W, this), i(this, "arrowThemeSystemLeft", O, this), i(this, "bgThemeSystemLeft", E, this), i(this, "titleThemeSystemLeft", J, this), i(this, "contentThemeSystemLeft", j, this), i(this, "titlePointerLeft", q, this), i(this, "contentPointerLeft", K, this), i(this, "titlePointerDown", Q, this), i(this, "contentPointerDown", Z, this), i(this, "pointerLeftContainer", $, this), i(this, "pointerDownContainer", tt, this), i(this, "refContent", et, this), i(this, "pointerDownMessageBg", it, this), i(this, "pointerLeftMessageBg", ot, this), i(this, "pointerDownArrow", nt, this), i(this, "pointerLeftArrow", st, this), this.onDisableCallback = null, this.bindedFieldValidator = null, this.baseBgY = void 0, this.baseArrowY = void 0, this.baseBgYLeft = void 0, this.baseArrowYLeft = void 0, this.TITLE_RIGHT_MARGIN = 50, this.baseBgAnchorXLeft = .5, this.localPosition = void 0, this.paddingX = void 0, this.dfPaddingLeft = 50, this.dfPaddingRight = 50
            }
            onLoad() {
                this.node.on(s.EventType.MOUSE_DOWN, this.onNodeClick.bind(this)), this.baseBgY = this.pointerDownMessageBg.position.y, this.baseArrowY = this.pointerDownArrow.position.y + 4, this.baseBgYLeft = this.pointerLeftMessageBg ? this.pointerLeftMessageBg.position.y : 0, this.baseArrowYLeft = this.pointerLeftArrow ? this.pointerLeftArrow.position.y : 0
            }
            static onScreenScrollUp(e) {
                e && (e = decodeURIComponent(e), e = JSON.parse(e), t.keyboardHeight = e.keyboardHeight)
            }
            onNodeClick() {
                this.hideNode()
            }
            hideNode() {
                this.node.active = !1, this.onDisableCallback(this.node), this.bindedFieldValidator && (this.bindedFieldValidator.clearBindTooltips(), this.bindedFieldValidator = null)
            }
            fitWidth(t, e, i, o) {
                let s = 0;
                t.active && (s = t.getComponent(l).width + t.getComponent(a).left + this.TITLE_RIGHT_MARGIN), this.refContent.node.active = !0;
                let r = e.getComponent(n);
                this.refContent.fontSize = r.fontSize, this.refContent.lineHeight = r.lineHeight, this.refContent.font = r.font;
                let h = f.resMgr.getLabelStringSize(this.refContent, r.string).width;
                const p = e.getComponent(a);
                this.paddingX || 0 === this.paddingX ? (p.left = this.paddingX, p.right = this.paddingX) : (p.left = this.dfPaddingLeft, p.right = this.dfPaddingRight);
                const g = h + p.left + p.right;
                let d = i.getComponent(l).width;
                o > 0 && (d = s > o ? s : Math.min(o, Math.max(g, s))), i.getComponent(l).width = d + .01, this.refContent.node.active = !1
            }
            showToolTips(e) {
                var i, o;
                let n = e.gap;
                const s = e.position,
                    r = e.title,
                    h = e.content,
                    c = e.skinType,
                    m = e.maxTooltipWidth,
                    b = e.type,
                    T = e.fieldValidator,
                    y = e.lineHeightContent;
                this.paddingX = e.paddingX;
                const P = e.anchorPosRight ? e.anchorPosRight : pt.Right,
                    L = e.anchorPosLeft ? e.anchorPosLeft : pt.Left,
                    S = e.anchorPosMiddle ? e.anchorPosMiddle : pt.Middle;
                switch (null == (i = this.contentPointerLeft.getComponent(D)) || i.setFontSize(e.fontSizeContent), null == (o = this.contentPointerDown.getComponent(D)) || o.setFontSize(e.fontSizeContent), this.contentPointerLeft.lineHeight = e.lineHeightContent, this.contentPointerDown.lineHeight = e.lineHeightContent, null != T && (this.bindedFieldValidator = T, this.bindedFieldValidator.setBindTooltips(this.onNodeClick.bind(this), this.onNodeClick.bind(this))), f.appConfig.isLandscapeLayout || (n = new p(0, 0)), this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(s.add(n)), b) {
                    case at.PointerUpRight:
                    case at.PointerDownRight:
                        this.setToolTipTitleAndContentPointerDown(s, n, r, h, m, P, b), this.setColorSkin(c, [this.bgThemeSystemDown, this.arrowThemeSystemDown, this.titleThemeSystemDown, this.contentThemeSystemDown]);
                        break;
                    case at.PointerUpLeft:
                        this.setToolTipTitleAndContentPointerDown(s, n, r, h, m, L, b), this.setColorSkin(c, [this.bgThemeSystemDown, this.arrowThemeSystemDown, this.titleThemeSystemDown, this.contentThemeSystemDown]);
                        break;
                    case at.PointerUpMiddle:
                        this.setToolTipTitleAndContentPointerDown(s, n, r, h, m, S, b), this.setColorSkin(c, [this.bgThemeSystemDown, this.arrowThemeSystemDown, this.titleThemeSystemDown, this.contentThemeSystemDown]);
                        break;
                    case at.PointerUpMiddleLowest:
                        this.setToolTipTitleAndContentPointerDownLowest(s, n, r, h, m, S, b, y), this.setColorSkin(c, [this.bgThemeSystemDown, this.arrowThemeSystemDown, this.titleThemeSystemDown, this.contentThemeSystemDown]);
                        break;
                    case at.PointerDown:
                        this.setToolTipTitleAndContentPointerDown(s, n, r, h, m, S, b), this.setColorSkin(c, [this.bgThemeSystemDown, this.arrowThemeSystemDown, this.titleThemeSystemDown, this.contentThemeSystemDown]);
                        break;
                    default:
                        this.setColorSkin(c, [this.bgThemeSystemLeft, this.arrowThemeSystemLeft, this.titleThemeSystemLeft, this.contentThemeSystemLeft]), this.titlePointerLeft.node.active = !1, this.titlePointerLeft.string = r, this.titlePointerLeft.node.active = r && r.length > 0, this.contentPointerLeft.string = h, this.fitWidth(this.titlePointerLeft.node, this.contentPointerLeft.node, this.pointerLeftMessageBg, m);
                        let e = this.contentPointerLeft.getComponent(a);
                        if (this.contentPointerLeft.node.getComponent(l).width = this.pointerLeftMessageBg.getComponent(l).width - e.left - e.right, w.instance.updateRenderData(this.contentPointerLeft, !0), this.pointerLeftContainer.active = !0, this.pointerDownContainer.active = !1, !f.appConfig.isLandscapeLayout) {
                            this.baseBgAnchorXLeft = this.calculateArrowHorizontalAnchor(s, this.pointerLeftMessageBg, L, P);
                            let e = this.contentPointerLeft.node.parent.getComponent(g);
                            e.updateLayout(), (s.y - Math.abs(this.pointerLeftMessageBg.position.y) - e.node.getComponent(l).height) / d.getVisibleSize().height * 100 < t.keyboardHeight && u.targetNodeSize ? (this.flipTooltip(!0), this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(s.add(new p(0, u.targetNodeSize.height, 0)))) : this.flipTooltip(!1)
                        }
                }
                this.node.setPosition(new p(5e3, 5e3)), this.scheduleOnce((() => {
                    this.node.position = this.localPosition
                }), .02)
            }
            calculateArrowHorizontalAnchor(t, e, i, o) {
                let n = t.x - .5 * e.getComponent(l).width;
                if (n < 0) return Math.max(i, .5 - (Math.abs(n) + this.TITLE_RIGHT_MARGIN) / e.getComponent(l).width);
                let s = t.x + .5 * e.getComponent(l).width - d.getVisibleSize().width;
                return s > 0 ? Math.min(o, .5 + (s + this.TITLE_RIGHT_MARGIN) / e.getComponent(l).width) : pt.Middle
            }
            flipTooltip(t) {
                t ? (this.pointerLeftMessageBg.getComponent(l).setAnchorPoint(this.baseBgAnchorXLeft, 0), this.pointerLeftMessageBg.setPosition(this.pointerLeftMessageBg.position.x, -this.baseBgYLeft), this.pointerLeftArrow.setScale(1, -1), this.pointerLeftArrow.setPosition(this.pointerLeftArrow.position.x, -this.baseArrowYLeft)) : (this.pointerLeftMessageBg.getComponent(l).setAnchorPoint(this.baseBgAnchorXLeft, 1), this.pointerLeftMessageBg.setPosition(this.pointerLeftMessageBg.position.x, this.baseBgYLeft), this.pointerLeftArrow.setScale(1, 1), this.pointerLeftArrow.setPosition(this.pointerLeftArrow.position.x, this.baseArrowYLeft))
            }
            setToolTipTitleAndContentPointerDown(t, e, i, o, n = 500, s, r) {
                this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(t.add(e)), this.titlePointerDown.node.active = !1, this.titlePointerDown.string = i, this.titlePointerDown.node.active = i && i.length > 0, this.contentPointerDown.string = o, this.fitWidth(this.titlePointerDown.node, this.contentPointerDown.node, this.pointerDownMessageBg, n), this.pointerDownContainer.active = !0, this.pointerLeftContainer.active = !1;
                let h = t.y + this.pointerDownMessageBg.position.y + this.pointerDownMessageBg.getComponent(l).contentSize.height;
                this.isToolTipRenderedOutSide(h, r) ? (this.pointerDownMessageBg.getComponent(l).setAnchorPoint(s, 1), this.pointerDownMessageBg.setPosition(this.pointerDownMessageBg.position.x, -this.baseBgY), this.pointerDownArrow.setScale(1, -1), this.pointerDownArrow.setPosition(this.pointerDownArrow.position.x, -this.baseArrowY), this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(t.add(new p(e.x, -e.y, e.z)))) : (this.pointerDownMessageBg.getComponent(l).setAnchorPoint(s, 0), this.pointerDownMessageBg.setPosition(this.pointerDownMessageBg.position.x, this.baseBgY), this.pointerDownArrow.setScale(1, 1), this.pointerDownArrow.setPosition(this.pointerDownArrow.position.x, this.baseArrowY))
            }
            setToolTipTitleAndContentPointerDownLowest(t, e, i, o, n = 500, s, r, h = 0) {
                this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(t.add(e)), this.titlePointerDown.node.active = !1, this.titlePointerDown.string = i, this.titlePointerDown.node.active = i && i.length > 0, this.contentPointerDown.string = o, this.fitWidth(this.titlePointerDown.node, this.contentPointerDown.node, this.pointerDownMessageBg, n), this.pointerDownContainer.active = !0, this.pointerLeftContainer.active = !1;
                let a = t.y - this.pointerDownMessageBg.position.y - this.pointerDownMessageBg.getComponent(l).contentSize.height;
                this.isToolTipRenderedOutSide(a, r) ? (this.pointerDownMessageBg.getComponent(l).setAnchorPoint(s, 0), this.pointerDownMessageBg.setPosition(this.pointerDownMessageBg.position.x, this.baseBgY), this.pointerDownArrow.setScale(1, 1), this.pointerDownArrow.setPosition(this.pointerDownArrow.position.x, this.baseArrowY), this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(t.add(new p(e.x, -e.y + h, e.z)))) : (this.pointerDownMessageBg.getComponent(l).setAnchorPoint(s, 1), this.pointerDownMessageBg.setPosition(this.pointerDownMessageBg.position.x, -this.baseBgY), this.pointerDownArrow.setScale(1, -1), this.pointerDownArrow.setPosition(this.pointerDownArrow.position.x, -this.baseArrowY), this.localPosition = this.node.parent.getComponent(l).convertToNodeSpaceAR(t.add(new p(e.x, -e.y, e.z))))
            }
            setColorSkin(t, e) {
                switch (t) {
                    case gt.Default:
                        m.applySkinColorMap(b.Default, e);
                        break;
                    case gt.Help:
                        m.applySkinColorMap(b.Help, e);
                        break;
                    case gt.MttDetailInfo:
                        m.applySkinColorMap(b.MttDetailInfo, e);
                        break;
                    case gt.NewReplayerInfo:
                        m.applySkinColorMap(b.NewReplayerInfo, e);
                        break;
                    default:
                        m.applySkinColorMap(b.Default, e)
                }
            }
            isToolTipRenderedOutSide(t, e) {
                switch (e) {
                    case at.PointerDown:
                    case at.PointerDownRight:
                        return t > d.getVisibleSize().height;
                    case at.PointerUpRight:
                    case at.PointerUpMiddle:
                    case at.PointerUpLeft:
                        return t < d.getVisibleSize().height;
                    case at.PointerUpMiddleLowest:
                        return t < 0;
                    default:
                        return t > d.getVisibleSize().height
                }
            }
        }).keyboardHeight = 0, X = e((_ = rt).prototype, "arrowThemeSystemDown", [T], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), F = e(_.prototype, "bgThemeSystemDown", [y], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), G = e(_.prototype, "titleThemeSystemDown", [P], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), W = e(_.prototype, "contentThemeSystemDown", [L], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), O = e(_.prototype, "arrowThemeSystemLeft", [S], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), E = e(_.prototype, "bgThemeSystemLeft", [C], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), J = e(_.prototype, "titleThemeSystemLeft", [M], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), j = e(_.prototype, "contentThemeSystemLeft", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), q = e(_.prototype, "titlePointerLeft", [B], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), K = e(_.prototype, "contentPointerLeft", [z], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), Q = e(_.prototype, "titlePointerDown", [R], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), Z = e(_.prototype, "contentPointerDown", [k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), $ = e(_.prototype, "pointerLeftContainer", [v], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), tt = e(_.prototype, "pointerDownContainer", [N], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), et = e(_.prototype, "refContent", [H], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), it = e(_.prototype, "pointerDownMessageBg", [x], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), ot = e(_.prototype, "pointerLeftMessageBg", [I], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), nt = e(_.prototype, "pointerDownArrow", [U], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), st = e(_.prototype, "pointerLeftArrow", [Y], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), V = _)) || V));
    window.onScreenScrollUpCallback = dt.onScreenScrollUp, o._RF.pop()
}
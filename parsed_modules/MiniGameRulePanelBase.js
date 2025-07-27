import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./ThemeSystem.js";
import * as g from "./Enum.js";
import * as f from "./Enum.js";
import * as T from "./TooltipsHandler.js";
import * as C from "./TooltipsHandler.js";
import * as m from "./TooltipsManager.js";
import * as y from "./cv.js";
import * as w from "./ColorSystemType.js";
import * as H from "./ColorSystemTypeOther.js";
import * as S from "./i18nText.js";

function main() {
    var v, O, P, R, z, E, V, k, G, I, L, _, x, A, F, U, W, B, N, M;
    i._RF.push({}, "ad9e19OtYZHrIiFGOu4iaHc", "MiniGameRulePanelBase", void 0);
    const {
        ccclass: D,
        property: Y
    } = a;
    e("default", (v = Y(o), O = Y([l]), P = Y([l]), R = Y(l), z = Y(l), E = Y(l), V = Y(r), k = Y(r), G = Y(l), D((_ = t((L = class extends s {
        constructor(...e) {
            super(...e), n(this, "srollViewContents", _, this), n(this, "tabsHeader", x, this), n(this, "tabsContent", A, this), n(this, "bgHeaderSelectedTab", F, this), n(this, "winningHandHoleCardsContent", U, this), n(this, "winningHandRankingContent", W, this), n(this, "handItemTemplatePrefab", B, this), n(this, "tooltipPrefab", N, this), n(this, "blockTouchTooltipFullScreen", M, this)
        }
        onLoad() {
            this.winningHandHoleCardsContent.children.length <= 0 && this.initWinningHandItems(), this.setAllLabelUseEngOnly()
        }
        setAllLabelUseEngOnly() {
            const e = y.config.getCurrentLanguage();
            if (!y.appConfig.getGameConfig().miniGameConfig.useOnlyEnglishForGameRule || e == g.zh_CN) return;
            ["bg/header/title", "bg/content/TabsHeader/Bg/Rule/label", "bg/content/TabsHeader/Bg/HandRanking/label", "bg/content/TabsContents/view/content/Rules", "bg/content/TabsContents/view/content/WinningHands/label_holecards", "bg/content/TabsContents/view/content/WinningHands/label_handRanking"].forEach((e => {
                var t;
                let n = null == (t = c(e, this.node)) ? void 0 : t.getComponent(S);
                if (n) n.setOptionUseEngTextOnly(!0);
                else {
                    let t = c(e, this.node),
                        n = null == t ? void 0 : t.children.length;
                    for (let e = 0; e < n; e++) {
                        var i;
                        let n = null == t ? void 0 : t.children[e];
                        null == n || null == (i = n.getComponent(S)) || i.setOptionUseEngTextOnly(!0)
                    }
                }
            }))
        }
        start() {
            this.openView()
        }
        openView() {
            this.node.active = !0, this.onChangedTabClicked(null, "0")
        }
        closeView() {
            this.hideToolTip(), this.node.active = !1
        }
        onChangedTabClicked(e, t) {
            this.srollViewContents.stopAutoScroll(), this.srollViewContents.scrollToTop(0), this.hideToolTip(), this.tabsContent.forEach(((e, n) => {
                const i = n.toString() == t;
                e.active = i;
                const o = this.tabsHeader[n].getComponentInChildren(u).getComponent(b);
                i ? (o.setColorScheme(w.Other, H.WhiteCreamy_100), this.bgHeaderSelectedTab.position = this.tabsHeader[n].position) : o.setColorScheme(w.Other, H.TextColorSecondary_1)
            }))
        }
        initWinningHandItems() {}
        onScrollContents(e, t, n) {
            t == f.SCROLLING && this.hideToolTip()
        }
        showTooltip(e, t) {
            this.hideToolTip(), this.srollViewContents.stopAutoScroll();
            let n = e.addOrGetComponent(h),
                i = n.contentSize,
                o = n.anchorPoint,
                l = new p(i.width * (1 - o.x), i.height * (.5 - o.y)),
                r = n.convertToWorldSpaceAR(l);
            m.getInstance().forceTooltipPrefabForNextInstantiate = this.tooltipPrefab, m.showToolTips(r.add(d(57, 0)), "", t, p.ZERO, T.PointerLeft, 338, C.Help, e)
        }
        hideToolTip() {
            m.hideAllTooltips()
        }
    }).prototype, "srollViewContents", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(L.prototype, "tabsHeader", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = t(L.prototype, "tabsContent", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = t(L.prototype, "bgHeaderSelectedTab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(L.prototype, "winningHandHoleCardsContent", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(L.prototype, "winningHandRankingContent", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(L.prototype, "handItemTemplatePrefab", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(L.prototype, "tooltipPrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(L.prototype, "blockTouchTooltipFullScreen", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = L)) || I));
    i._RF.pop()
}
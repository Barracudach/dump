import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./RuleDiscription.js";
import * as g from "./cv.js";
import * as m from "./APAspectRatioFitter.js";
import * as b from "./Enum.js";

function main() {
    var S, _, B, f, v, L, w, P, R, T;
    i._RF.push({}, "1287a/lThxDyIIdnzepcJYS", "RuleDescriptionLandscape", void 0);
    const {
        ccclass: y,
        property: x
    } = a;
    e("default", (S = x(o), _ = x(m), B = x(r), f = x(l), y((w = t((L = class e extends h {
        constructor(...e) {
            super(...e), n(this, "ruleSprite", w, this), n(this, "ruleSpriteRatioFitter", P, this), n(this, "ruleScrollView", R, this), n(this, "helpBtnNode", T, this), this.imageUrl = void 0, this.errorString = void 0
        }
        start() {
            if (g.appConfig.jurisdiction != b.Asia)
                for (let e = 0; e < this.helpBtnNode.length; e++) this.helpBtnNode[e].getComponent(s).interactable = !1, this.helpBtnNode[e].on(l.EventType.MOUSE_ENTER, this.onMouseOver, this), this.helpBtnNode[e].on(l.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseOver(e) {
            let t = e.target,
                n = t.getComponent(s).clickEvents[0].customEventData;
            const i = g.config.getStringData("Rule_Hand_Ranking_ToolTip_Suit" + n);
            this.showToolTip(t, i, new u(44, 23))
        }
        onMouseLeave() {
            this.hideToolTip()
        }
        adaptWidget() {
            g.resMgr.adaptWidget(this.node, !0, !1)
        }
        setupLabelStrings() {
            g.StringTools.setLabelString(this.node, "mainPanel/ruleDiscription_medel_panel/title_text", "How_to_play"), g.StringTools.setLabelString(this.node, "mainPanel/menuList/dzpkBtn/Label", "WordPanel_button_panel_dezhou_button"), g.StringTools.setLabelString(this.node, "mainPanel/menuList/dpBtn/Label", "WordPanel_button_panel_short_button"), g.StringTools.setLabelString(this.node, "mainPanel/menuList/bxBtn/Label", "WordPanel_button_panel_insurance_button")
        }
        getButtonReferences() {
            return {
                dzpkBtn: p("mainPanel/menuList/dzpkBtn", this.node),
                dpBtn: p("mainPanel/menuList/dpBtn", this.node),
                bxBtn: p("mainPanel/menuList/bxBtn", this.node)
            }
        }
        getCommonButtonBlueReferences() {
            return {
                bxBtn: p("mainPanel/menuList/bxBtn/common_button_blue_on", this.node),
                dpBtn: p("mainPanel/menuList/dpBtn/common_button_blue_on", this.node),
                dzpkBtn: p("mainPanel/menuList/dzpkBtn/common_button_blue_on", this.node)
            }
        }
        showRule(t) {
            this.ruleSprite.node.active = !1, this.ruleScrollView.stopAutoScroll(), e.extractImageUrlInWebpage(t, this).then((e => {
                e.node.active && c.load(e.imageUrl, ((t, n) => {
                    e.node.active && null == t && (e.ruleScrollView.scrollToTop(), e.ruleSprite.spriteFrame = new d, e.ruleSprite.spriteFrame.texture = n, e.ruleSprite.node.active = !0, e.ruleSpriteRatioFitter.onSizeChanged())
                }))
            })).catch((e => {
                e.node.active && (e.ruleSprite.node.active = !1)
            }))
        }
        static extractImageUrlInWebpage(e, t) {
            return new Promise(((n, i) => {
                let o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (4 == o.readyState) {
                        if (o.status >= 200 && o.status < 400) {
                            let e = o.responseText,
                                r = (new DOMParser).parseFromString(e, "text/html").getElementsByTagName("img");
                            (null == r || r.length <= 0) && i("Webpage does not contain img tags.");
                            let l = r[0];
                            if (null != l) {
                                let e = l.getAttribute("src");
                                if (null != e && "" != e) return e.startsWith("http") ? (t.imageUrl = e, void n(t)) : (t.imageUrl = g.config.getServerHead() + e.replace(/^\//, ""), void n(t))
                            }
                            return t.errorString = "Webpage does not contain a Image.", void i(t)
                        }
                        t.errorString = "Fail to load webpage with status code: " + o.status, i(t)
                    }
                }, o.open("GET", e, !0), o.send()
            }))
        }
        activeButton(e) {
            let {
                bxBtn: t,
                dpBtn: n,
                dzpkBtn: i
            } = this.getCommonButtonBlueReferences();
            null != t && (t.active = !1), null != n && (n.active = !1), null != i && (i.active = !1), e.getChildByName("common_button_blue_on").active = !0
        }
        resetButtons() {}
        disableViews() {}
        setActiveWebview() {}
        resetRuleView() {
            this.ruleSprite.node.active = !1
        }
    }).prototype, "ruleSprite", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(L.prototype, "ruleSpriteRatioFitter", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(L.prototype, "ruleScrollView", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(L.prototype, "helpBtnNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = L)) || v));
    i._RF.pop()
}
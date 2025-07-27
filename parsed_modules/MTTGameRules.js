import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as p from "./TooltipsManager.js";
import * as d from "./TooltipsHandler.js";
import * as T from "./TooltipsHandler.js";
import * as g from "./mttconfig.js";
import * as C from "./MTTConnector.js";

function main() {
    var m, v, f, R, w, E, _, b, S, y, M, k, N, B, D, O, A, H, L, V;
    i._RF.push({}, "6ce59gbOvpBFIu34bd19hP9", "MTTGameRules", void 0);
    const {
        ccclass: z,
        property: G
    } = l;
    t("default", (m = G(o), v = G(o), f = G(o), R = G(o), w = G(o), E = G(a), _ = G(o), b = G(o), S = G(o), z((k = e((M = class extends s {
        constructor(...t) {
            super(...t), n(this, "handRankingContent", k, this), n(this, "ruleViewContent", N, this), n(this, "mttTexasHoldemRuleContent", B, this), n(this, "mttOmahaRuleContent", D, this), n(this, "mttShortDeckRuleContent", O, this), n(this, "mttGameScrollView", A, this), n(this, "helpBtnNode", H, this), n(this, "ruleToggle", L, this), n(this, "swipeIndicator", V, this)
        }
        onLoad() {
            this.node.active = !1;
            const {
                gameViewType: t
            } = cc_mtt.vv.DataManager;
            if (this.displayRules(t), u.appConfig.isLandscapeLayout)
                for (let t = 0; t < this.helpBtnNode.length; t++) this.helpBtnNode[t].on(o.EventType.MOUSE_ENTER, this.onMouseOver, this), this.helpBtnNode[t].on(o.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        registerSwipeEvent() {
            this.swipeIndicator && this.swipeIndicator.on(o.EventType.TOUCH_START, this.hideToolTip, this)
        }
        unresgisterSwipeEvent() {
            this.swipeIndicator && this.swipeIndicator.off(o.EventType.TOUCH_START, this.hideToolTip, this)
        }
        onEnable() {
            this.registerSwipeEvent(), this.ruleViewContent.active = !0, this.handRankingContent.active = !1, this.ruleToggle.getComponent(r).isChecked = !0, this.mttGameScrollView.scrollToTop(), C.instance.sendMessageCenter(C.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL)
        }
        onDisable() {
            this.unresgisterSwipeEvent(), C.instance.sendMessageCenter(C.instance.config.BroadCast.HIDE_FULL_SCREEN_PANEL)
        }
        onMouseOver(t) {
            let e = t.target,
                n = e.getComponent(c).clickEvents[0].customEventData;
            const i = u.config.getStringData("Rule_Hand_Ranking_ToolTip_Suit" + n);
            this.showToolTip(e, i, new h(44, 23))
        }
        onMouseLeave() {
            this.hideToolTip()
        }
        onClickHelpBtn(t, e) {
            let n = t.target;
            const i = u.config.getStringData("Rule_Hand_Ranking_ToolTip_Suit" + e);
            this.showToolTip(n, i)
        }
        showRulePopup() {
            C.instance.sendMessageCenter(C.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL), this.node.active = !0
        }
        showToolTip(t, e, n) {
            this.hideToolTip();
            let i = t.getContentSize(),
                o = t.getAnchorPoint(),
                a = new h(i.width * (.5 - o.x), i.height * (0 - o.y)),
                l = t.convertToWorldSpaceAR(a);
            p.showToolTips(l, "", e, n, d.PointerLeft, 338, T.Help, t)
        }
        hideToolTip() {
            p.hideAllTooltips()
        }
        onBtnClickClose() {
            this.node.active = !1, this.hideToolTip()
        }
        displayRules(t) {
            switch (this.hideToolTip(), this.ruleViewContent.active = !0, this.handRankingContent.active = !1, this.mttTexasHoldemRuleContent.active = !1, this.mttOmahaRuleContent.active = !1, this.mttShortDeckRuleContent.active = !1, t) {
                case g.MTT_GAME_MODE.NONE:
                case g.MTT_GAME_MODE.PP:
                case g.MTT_GAME_MODE.NLH:
                    this.mttTexasHoldemRuleContent.active = !0;
                    break;
                case g.MTT_GAME_MODE.SHORT_DECK:
                    this.mttShortDeckRuleContent.active = !0, this.handRankingSortDeck();
                    break;
                case g.MTT_GAME_MODE.OMAHA:
                    this.mttOmahaRuleContent.active = !0
            }
            u.AudioMgr.playButtonSound("tab")
        }
        onClickRuleTab(t, e) {
            "0" !== e || this.ruleViewContent.active ? "1" !== e || this.handRankingContent.active || (this.handRankingContent.active = !0, this.ruleViewContent.active = !1) : (this.ruleViewContent.active = !0, this.handRankingContent.active = !1, this.mttGameScrollView.scrollToTop()), u.AudioMgr.playButtonSound("tab"), this.hideToolTip()
        }
        handRankingSortDeck() {
            let t = this.handRankingContent.getChildByName("content").getChildByName("item4"),
                e = this.handRankingContent.getChildByName("content").getChildByName("item5"),
                n = this.handRankingContent.getChildByName("content").getChildByName("item4_SD"),
                i = this.handRankingContent.getChildByName("content").getChildByName("item5_SD");
            t.active = !1, e.active = !1, n.active = !0, i.active = !0
        }
    }).prototype, "handRankingContent", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(M.prototype, "ruleViewContent", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(M.prototype, "mttTexasHoldemRuleContent", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(M.prototype, "mttOmahaRuleContent", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(M.prototype, "mttShortDeckRuleContent", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(M.prototype, "mttGameScrollView", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(M.prototype, "helpBtnNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), L = e(M.prototype, "ruleToggle", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(M.prototype, "swipeIndicator", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = M)) || y));
    i._RF.pop()
}
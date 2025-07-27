import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as R from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./Enum.js";
import * as B from "./TooltipsHandler.js";
import * as f from "./TooltipsHandler.js";
import * as v from "./TooltipsManager.js";
import * as S from "./GameSceneInstance.js";
import * as E from "./cv.js";

function main() {
    var T, D, y, L, P, W, V, k, G, I, N, z, A, x, O, M, H, U, Z, F, X, j, K, Y, q, J, Q, $, ee, te, ie, ne, oe, ae, le, se, re, ue;
    n._RF.push({}, "c5ea7NVo6hKbbhqs7fT0woY", "RuleDiscription", void 0);
    const {
        ccclass: he,
        property: ge
    } = r;
    let ce = e("GAME_RULE_TYPE", function(e) {
        return e[e.PACE = 0] = "PACE", e[e.NLHE = 1] = "NLHE", e[e.SHORT_DECK = 2] = "SHORT_DECK", e[e.PLO = 3] = "PLO", e[e.PLO5 = 4] = "PLO5", e[e.FLASH = 5] = "FLASH", e
    }({}));
    e("default", (T = ge(o), D = ge(o), y = ge(o), L = ge(o), P = ge(o), W = ge(o), V = ge(o), k = ge(o), G = ge(o), I = ge(o), N = ge(o), z = ge(o), A = ge(a), x = ge(o), O = ge(o), M = ge(o), H = ge(l), U = ge(s), he((X = t((F = class extends u {
        constructor(...e) {
            super(...e), i(this, "dzpkBtn", X, this), i(this, "dpBtn", j, this), i(this, "bxBtn", K, this), i(this, "bxRuleView", Y, this), i(this, "dzpkRuleView", q, this), i(this, "dpRuleView", J, this), this.dexhouPosX = 0, this.shortPosX = 0, this.bxPosX = 0, i(this, "pkwRuleView", Q, this), i(this, "wptRuleView", $, this), i(this, "cashGameRuleView", ee, this), i(this, "handRankingContent", te, this), i(this, "ruleViewContent", ie, this), i(this, "swipeIndicator", ne, this), i(this, "ruleDetailItem", oe, this), i(this, "insureRuleContainer", ae, this), i(this, "ruleToggle", le, this), i(this, "handRankToggle", se, this), i(this, "cashRuleScrollView", re, this), this.gameRuleType = ce.NLHE, this.currentOpenTooltip = 0, this.insureRuleText = [], i(this, "ruleWebview", ue, this), this.gameDataInstance = null
        }
        onLoad() {
            E.MessageCenter.register("HideWebview_ShowWindows", this.hide.bind(this), this.node), this.setupLabelStrings(), this.dexhouPosX = this.dzpkBtn.getPosition().x, this.shortPosX = this.dpBtn.getPosition().x, this.bxPosX = this.bxBtn.getPosition().x, this.adaptWidget();
            let e = E.config.getStringData("Rules_Cash_Game_Common_P4_Desc");
            this.insureRuleText = e.split("\n"), E.MessageCenter.register(E.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node)
        }
        registerSwipeEvent() {
            this.swipeIndicator && this.swipeIndicator.on(o.EventType.TOUCH_START, this.hideToolTip, this)
        }
        unresgisterSwipeEvent() {
            this.swipeIndicator && this.swipeIndicator.off(o.EventType.TOUCH_START, this.hideToolTip, this)
        }
        setupLabelStrings() {
            E.StringTools.setLabelString(this.node, "mainPanel/ruleDiscription_medel_panel/title_text", "WordPanel_Text_1"), E.StringTools.setLabelString(this.node, "mainPanel/menuList/dzpkBtn/Label", "WordPanel_button_panel_dezhou_button"), E.StringTools.setLabelString(this.node, "mainPanel/menuList/dpBtn/Label", "WordPanel_button_panel_short_button"), E.StringTools.setLabelString(this.node, "mainPanel/menuList/bxBtn/Label", "WordPanel_button_panel_insurance_button")
        }
        adaptWidget() {
            E.resMgr.adaptWidget(this.node, !0)
        }
        onDestroy() {
            E.MessageCenter.unregister("HideWebview_ShowWindows", this.node), E.MessageCenter.unregister(E.config.CHANGE_LANGUAGE, this.node)
        }
        hide() {
            this.node.active = !1, this.setActiveWebview(!1)
        }
        setActiveWebview(e = !1) {
            this.ruleWebview && (this.ruleWebview.node.active = e)
        }
        onEnable() {
            if (this.registerSwipeEvent(), E.appConfig.jurisdiction != C.Asia) {
                if (this.gameRuleType = this.getGameRuleType(), null != this.gameRuleType && 0 == this.insureRuleContainer[this.gameRuleType].children.length)
                    for (let e = 0; e < this.insureRuleText.length; e++) {
                        let t = h(this.ruleDetailItem);
                        t.name = "Rule" + (e + 1), this.insureRuleContainer[this.gameRuleType].addChild(t);
                        let i = t.getChildByName("text");
                        this.updateLabelText(i, this.insureRuleText[e])
                    }
                this.cashRuleScrollView.scrollToTop()
            }
        }
        onDisable() {
            this.unresgisterSwipeEvent(), E.appConfig.jurisdiction, C.Asia
        }
        updateLabelText(e, t) {
            let i = null == e ? void 0 : e.getComponent(g);
            i && (i.string = t)
        }
        onLanguageChange() {
            if (!this.insureRuleContainer[this.gameRuleType]) return;
            let e = E.config.getStringData("Rules_Cash_Game_Common_P4_Desc");
            this.insureRuleText = e.split("\n");
            for (let e = 0; e < (null == (t = this.insureRuleContainer[this.gameRuleType]) ? void 0 : t.children.length); e++) {
                var t, i;
                let n = null == (i = this.insureRuleContainer[this.gameRuleType]) ? void 0 : i.getChildByName("Rule" + (e + 1));
                if (n) {
                    let t = n.getChildByName("text");
                    this.updateLabelText(t, this.insureRuleText[e])
                }
            }
        }
        btnCloseClick(e) {
            this.show(!1);
            let t = E.appConfig.jurisdiction;
            switch (E.AudioMgr.playButtonSound("close.mp3"), t) {
                case C.Asia:
                    this.resetRuleView(), this.dzpkBtn.getChildByName("common_button_blue_on").active = !0, this.dpBtn.getChildByName("common_button_blue_on").active = !1, this.bxBtn.getChildByName("common_button_blue_on").active = !1, this.activeButton(this.dzpkBtn)
            }
        }
        resetRuleView() {
            this.ruleWebview.url = "about:blank"
        }
        onBtnDzpkClick(e) {
            E.AudioMgr.playButtonSound("tab.mp3");
            let t = S.getInstanceGameId(null == this ? void 0 : this.node);
            t == E.Enum.GameId.Allin ? this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? this.switchWebView(E.config.getStringData("WEB_AOF_SHORT_RULE", !0)) : this.switchWebView(E.config.getStringData("WEB_AOF_RULE", !0)) : t == E.Enum.GameId.Plo ? this.switchWebView(E.config.getStringData("WEB_PLO_RULE", !0)) : this.switchWebView(E.config.getStringData("WEB_DEZHOU_RULE", !0)), this.swithMemu(e)
        }
        onBtnDpClick(e) {
            E.AudioMgr.playButtonSound("tab.mp3");
            let t = S.getInstanceGameId(null == this ? void 0 : this.node);
            t == E.Enum.GameId.Allin ? this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? this.switchWebView(E.config.getStringData("WEB_AOF_SHORT_RULE_2", !0)) : this.switchWebView(E.config.getStringData("WEB_AOF_RULE_2", !0)) : t == E.Enum.GameId.Plo ? this.switchWebView(E.config.getStringData("WEB_INSURANCE_RULE", !0)) : this.switchWebView(E.config.getStringData("WEB_DEZHOU_SHORT_RULE", !0)), this.swithMemu(e)
        }
        onBtnBxClick(e) {
            E.AudioMgr.playButtonSound("tab.mp3"), this.switchWebView(E.config.getStringData("WEB_INSURANCE_RULE", !0)), this.swithMemu(e)
        }
        swithMemu(e) {
            let {
                bxBtn: t,
                dpBtn: i,
                dzpkBtn: n
            } = this.getCommonButtonBlueReferences();
            n.active = !1, i.active = !1, t.active = !1, e.target.getChildByName("common_button_blue_on").active = !0, this.activeButton(e.target)
        }
        getCommonButtonBlueReferences() {
            return {
                bxBtn: c("mainPanel/menuList/bxBtn/common_button_blue_on", this.node),
                dpBtn: c("mainPanel/menuList/dpBtn/common_button_blue_on", this.node),
                dzpkBtn: c("mainPanel/menuList/dzpkBtn/common_button_blue_on", this.node)
            }
        }
        activeButton(e) {
            let t = m(39, 130, 219);
            c("mainPanel/menuList/bxBtn/Label", this.node).getComponent(d).color = t, c("mainPanel/menuList/dpBtn/Label", this.node).getComponent(d).color = t, c("mainPanel/menuList/dzpkBtn/Label", this.node).getComponent(d).color = t, e.getChildByName("Label").getComponent(d).color = m(255, 255, 255)
        }
        swithView(e, t) {
            this.disableViews(), e.getParent().active = !0, e.active = !0
        }
        disableViews() {
            this.bxRuleView.active = !1, this.dzpkRuleView.active = !1, this.dpRuleView.active = !1
        }
        switchWebView(e) {
            this.showRule(this.generateResourceUrl(e))
        }
        generateResourceUrl(e) {
            let t = "";
            return t = -1 === e.search("http") ? E.config.getServerHead() + e : e, t + "&clientType=" + E.config.GET_CLIENT_TYPE() + "&language=" + E.config.getCurrentLanguage()
        }
        showRule(e) {
            this.ruleWebview.url = e
        }
        showImg(e, t) {
            var i = e.getChildByName("img");
            i && (i.active = t)
        }
        show(e, t = this.gameDataInstance) {
            this.gameDataInstance = t;
            let i = E.appConfig.jurisdiction;
            switch (this.node.active = e, i) {
                case C.Asia:
                    this.setActiveWebview(e), this.pkwRuleView.active = e, this.showMailBtn(!e), e && this.showDetailRuleByGameID(), E.StatusView.show(!e);
                    break;
                default:
                    this.wptRuleView.active = e, this.ruleViewContent.active = !0, this.handRankingContent.active = !1, this.ruleToggle.getComponent(_).isChecked = !0, e && (this.cashGameRuleView.forEach((e => {
                        e.active = !1
                    })), this.cashGameRuleView[this.gameRuleType].active = !0)
            }
        }
        showDetailRuleByGameID() {
            if (E.config.getCurrentScene() != E.Enum.SCENE.GAME_SCENE) return;
            let {
                dzpkBtn: e,
                dpBtn: t,
                bxBtn: i
            } = this.getButtonReferences(), n = t.getChildByName("Label").getComponent(g);
            n.string = E.config.getStringData("WordPanel_button_panel_short_button"), e.active = !1, t.active = !0, i.active = !1, t.getComponent(b).enabled = !1;
            let o = S.getInstanceGameId(null == this ? void 0 : this.node);
            if (o == E.Enum.GameId.Bet) this.switchWebView(E.config.getStringData("WEB_ZOOM_DEZHOU_BET", !0)), t.getChildByName("common_button_blue_on").active = !0, n.string = E.config.getStringData("WordPanel_button_panel_dezhou_betbutton"), this.activeButton(t);
            else if (E.roomManager.checkGameIsZoom(o)) this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? (this.switchWebView(E.config.getStringData("WEB_ZOOM_DEZHOU_SHORT_RULE", !0)), n.string = E.config.getStringData("WordPanel_button_panel_dezhou_zoomShortbutton")) : (n.string = E.config.getStringData("WordPanel_button_panel_dezhou_zoombutton"), this.switchWebView(E.config.getStringData("WEB_ZOOM_DEZHOU_RULE", !0))), t.getChildByName("common_button_blue_on").active = !0, this.activeButton(t);
            else if (o == E.Enum.GameId.Allin) {
                e.active = !0, t.getComponent(b).enabled = !0;
                let i = e.getChildByName("Label").getComponent(g),
                    o = p.getVisibleSize().width / 3;
                e.setPosition(o, e.getPosition().y), t.setPosition(2 * o, t.getPosition().y), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? (this.switchWebView(E.config.getStringData("WEB_AOF_SHORT_RULE", !0)), t.getChildByName("common_button_blue_on").active = !1, e.getChildByName("common_button_blue_on").active = !0, n.string = E.config.getStringData("WordPanel_button_panel_Aofshort_button"), i.string = E.config.getStringData("WordPanel_button_panel_dezhou_aofShortbutton")) : (this.switchWebView(E.config.getStringData("WEB_AOF_RULE", !0)), t.getChildByName("common_button_blue_on").active = !1, e.getChildByName("common_button_blue_on").active = !0, n.string = E.config.getStringData("WordPanel_button_panel_Aofshort_button"), i.string = E.config.getStringData("WordPanel_button_panel_dezhou_aofbutton")), this.activeButton(e)
            } else if (o == E.Enum.GameId.Plo) {
                e.active = !0, t.getComponent(b).enabled = !0;
                let i = e.getChildByName("Label").getComponent(g),
                    o = p.getVisibleSize().width / 3;
                e.setPosition(o, e.getPosition().y), t.setPosition(2 * o, t.getPosition().y), this.switchWebView(E.config.getStringData("WEB_PLO_RULE", !0)), t.getChildByName("common_button_blue_on").active = !1, e.getChildByName("common_button_blue_on").active = !0, n.string = E.config.getStringData("WordPanel_button_panel_insurance_button"), i.string = E.config.getStringData("WordPanel_button_panel_plo_button")
            } else e.active = !0, i.active = !0, t.getComponent(b).enabled = !0, this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? (this.switchWebView(E.config.getStringData("WEB_DEZHOU_SHORT_RULE", !0)), e.getChildByName("common_button_blue_on").active = !1, t.getChildByName("common_button_blue_on").active = !0, i.getChildByName("common_button_blue_on").active = !1, this.activeButton(t)) : (this.switchWebView(E.config.getStringData("WEB_DEZHOU_RULE", !0)), this.activeButton(e))
        }
        getButtonReferences() {
            return {
                dzpkBtn: c("menuList/dzpkBtn", this.node),
                dpBtn: c("menuList/dpBtn", this.node),
                bxBtn: c("menuList/bxBtn", this.node)
            }
        }
        showMailBtn(e) {
            e ? E.MessageCenter.send("show_mail_entrance") : E.MessageCenter.send("hide_mail_entrance")
        }
        onClickRuleTab(e, t) {
            "1" !== t || this.handRankingContent.active ? "0" !== t || this.ruleViewContent.active || (this.handRankingContent.active = !1, this.ruleViewContent.active = !0, this.cashGameRuleView[this.gameRuleType].active = !0, this.cashRuleScrollView.scrollToTop()) : (this.handRankingContent.active = !0, this.ruleViewContent.active = !1), this.hideToolTip(), E.AudioMgr.playButtonSound("tab")
        }
        handRankingSortDeck() {
            let e = this.handRankingContent.getChildByName("content").getChildByName("item4"),
                t = this.handRankingContent.getChildByName("content").getChildByName("item5"),
                i = this.handRankingContent.getChildByName("content").getChildByName("item4_SD"),
                n = this.handRankingContent.getChildByName("content").getChildByName("item5_SD");
            e.active = !1, t.active = !1, i.active = !0, n.active = !0
        }
        resetRuleContainer() {
            for (let e = 0; e < this.cashGameRuleView.length; e++) this.cashGameRuleView[e].active = !1;
            this.cashGameRuleView[this.gameRuleType].active = !0
        }
        getGameRuleType() {
            if (!this.gameDataInstance) return ce.NLHE;
            let e;
            return this.gameDataInstance.tRoomData.pkRoomParam.game_mode == E.Enum.CreateGameMode.CreateGame_Mode_Short ? (e = (this.gameDataInstance.tRoomData.isZoom(), ce.SHORT_DECK), this.handRankingSortDeck()) : e = this.gameDataInstance.tRoomData.isZoom() ? ce.PACE : this.gameDataInstance.tRoomData.u32GameID == E.Enum.GameId.Plo ? ce.PLO : this.gameDataInstance.tRoomData.u32GameID == E.Enum.GameId.Plo5 ? ce.PLO5 : ce.NLHE, e
        }
        onClickHelpBtn(e, t) {
            const i = E.config.getStringData("Rule_Hand_Ranking_ToolTip_Suit" + t);
            let n = e.target;
            this.showToolTip(n, i)
        }
        showToolTip(e, t, i) {
            this.hideToolTip();
            let n = e.getComponent(w),
                o = n.contentSize,
                a = n.anchorPoint,
                l = new R(o.width * (.5 - a.x), o.height * (0 - a.y)),
                s = n.convertToWorldSpaceAR(l);
            v.showToolTips(s, "", t, i, f.PointerLeft, 338, B.Help, e)
        }
        hideToolTip() {
            v.hideAllTooltips()
        }
    }).prototype, "dzpkBtn", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(F.prototype, "dpBtn", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(F.prototype, "bxBtn", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(F.prototype, "bxRuleView", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(F.prototype, "dzpkRuleView", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(F.prototype, "dpRuleView", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(F.prototype, "pkwRuleView", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(F.prototype, "wptRuleView", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(F.prototype, "cashGameRuleView", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), te = t(F.prototype, "handRankingContent", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(F.prototype, "ruleViewContent", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(F.prototype, "swipeIndicator", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(F.prototype, "ruleDetailItem", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(F.prototype, "insureRuleContainer", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), le = t(F.prototype, "ruleToggle", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(F.prototype, "handRankToggle", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(F.prototype, "cashRuleScrollView", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(F.prototype, "ruleWebview", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = F)) || Z));
    n._RF.pop()
}
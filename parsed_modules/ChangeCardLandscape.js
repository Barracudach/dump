import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Enum.js";
import * as h from "./Enum.js";
import * as d from "./ResourceManager.js";
import * as _ from "./ChangeCard.js";
import * as b from "./cv.js";
import * as m from "./ActivateSettingsHandler.js";
import * as C from "./CardBackItemHandler.js";
import * as p from "./CardFrontItemHandler.js";
import * as f from "./CustomToggleHandler.js";
import * as S from "./TableBgItemHandler.js";
import * as B from "./SettingToggleSwitchHandler.js";
import * as T from "./AppConfig.js";
import * as x from "./ToggleSwitch.js";

function main() {
    var z, v, I, L, A, M, w, y, k, G, N, P, E, V, H, D, W, F;
    n._RF.push({}, "3d9d9hinVlHY75feEkhMZec", "ChangeCardLandscape", void 0);
    const {
        ccclass: R,
        property: O
    } = g;
    t("default", (z = O(a), v = O(s), I = O(o), L = O(r), A = O(l), M = O(l), w = O(l), y = O(x), R((N = e((G = class extends _ {
        constructor(...t) {
            super(...t), i(this, "cardbackItemPrefab", N, this), i(this, "panelContainerWidget", P, this), i(this, "deckScrollView", E, this), i(this, "changeSizeButton", V, this), i(this, "maximizeImg", H, this), i(this, "minimizeImg", D, this), i(this, "soundSettingsTabButton", W, this), i(this, "maxBetToggle", F, this), this.onToggleMaxBet = () => {
                let t = this.GetCurrentBetValueBtn().getComponent("Tag").getTag(),
                    e = this.GetBetValueSliderRange(t),
                    i = Math.ceil(e.Min + this.slider_customize.progress * (e.Max - e.Min));
                this.shortCutPercent_text.string = i + "%";
                let n = this.maxBetToggle.getValueFromLocalStorage(!0);
                this.isBetButtonInMaxMode = n, n ? (this.shortCutPercent_text.node.active = !1, this.slider_customize.progress = 1, this.setSliderProgress(100), this.SetCurrentBetValueBtnNum(i, !0)) : (this.shortCutPercent_text.node.active = !0, this.SetCurrentBetValueBtnNum(i, !1))
            }
        }
        onLoad() {
            for (let t = 0; t < u.CARD_BACK_MAX; t++) {
                let e = c(this.cardbackItemPrefab);
                this.nd_card_bgs.addChild(e), e.getComponent(C).initialize(this.node, t, "ChangeCardLandscape", "onClickCardBg")
            }
            super.onLoad(), b.MessageCenter.register(b.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDestroy() {
            b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            this.LoadCustomBetBtnValue()
        }
        initTableBackground() {
            let t = T.Instance.getGameConfig().tableList.length;
            for (let e = 0; e < t; e++) {
                let t = c(this.tableBgItemPrefab);
                this.nd_table_bgs.addChild(t), t.getComponent(S).initialize(this.node, e, "ChangeCardLandscape", "onClickTableBg")
            }
        }
        initCardStyles() {
            for (let t = 0; t < h.CARD_FACE_MAX; t++) {
                let e = c(this.cardFrontItemPrefab);
                this.nd_card_styles.addChild(e), e.getComponent(p).initialize(this.node, t, "ChangeCardLandscape", "onClickCardStyle")
            }
        }
        onEnable() {
            super.onEnable(), this.soundSettingsTabButton.active = b.appConfig.getGameConfig().gameSoundSettingsEnabled, this.maxBetToggle.init(b.tools.getMaxBetKey(), !0, this.onToggleMaxBet), b.MessageCenter.register(b.config.CHANGE_LANGUAGE, this.setSettingsTitles.bind(this), this.node)
        }
        onDisable() {
            b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this.node)
        }
        setNdTabsText() {}
        onClickMaximizeButton() {
            this.minimizeImg.active ? (this.panelContainerWidget.top = 548, this.changeSizeButton.target = this.maximizeImg, this.minimizeImg.active = !1, this.maximizeImg.active = !0) : (this.panelContainerWidget.top = this.panelContainerWidget.bottom, this.changeSizeButton.target = this.minimizeImg, this.minimizeImg.active = !0, this.maximizeImg.active = !1), d.updateWidget(this.panelContainerWidget.node, !0, s.AlignMode.ON_WINDOW_RESIZE), this.deckScrollView.scrollToOffset(this.deckScrollView.getScrollOffset())
        }
        updateSwitch(t) {
            let e = null == t ? void 0 : t.getComponentInChildren(B);
            e && e.setStatus(t._isSelect)
        }
        setSettingsTitles() {
            b.StringTools.setLabelString(this.nd_switch_effect, "title", "jackfruit_setting_sound_effects_btn_label", 4), b.StringTools.setLabelString(this.nd_switch_vibrate, "title", "jackfruit_setting_vibrate_btn_label", 4), b.StringTools.setLabelString(this.nd_switch_voice, "title", "curentTime_curentTime_panel_voice_txt", 4), b.StringTools.setLabelString(this.nd_switch_barrage, "title", "Faceview_danmu_button_danmu", 4), b.StringTools.setLabelString(this.nd_customize, "title", "GameScene_changeCard_panel_shortCut_bet_panel_customPot_txt", 4), b.StringTools.setLabelString(this.nd_contents, "content_add/reset/title", "GameScene_changeCard_panel_shortCut_bet_panel_recoverShortCut_button", 2), b.StringTools.setLabelString(this.nd_tab_btn_types, "tab_type_3/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_3_label", 2), b.StringTools.setLabelString(this.nd_tab_btn_types, "tab_type_5/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_5_label", 2), this.LoadCustomBetBtnValue()
        }
        onHandlerClickTabButton(t) {
            t = 3 == t ? 0 : 1, this.nd_tab_btn_types.getComponent(m).setActive(t);
            let e = this.nd_btn_types.children;
            e[0].active = this.isButton3, e[1].active = !this.isButton3
        }
        selectToggleNode(t, e) {
            let i = t.getComponent(f);
            i && i.setActive(e)
        }
        onChosenTableBg(t) {
            t < 0 || super.onChosenTableBg(t)
        }
        getTabIndex(t, e) {
            return parseInt(e)
        }
        isMaxPreBetSetting(t) {
            return 3 == t
        }
        isMaxPreBetActive(t) {
            return this.maxBetToggle.getChecked() && this.isMaxPreBetSetting(t)
        }
        setSelectBetBtn(t) {
            super.setSelectBetBtn(t), this.maxBetToggle.node.active = this.isMaxPreBetSetting(t)
        }
        SetCurrentBetValueBtnNum(t, e) {
            super.SetCurrentBetValueBtnNum(t, e), e || this.maxBetToggle.setChecked(!1)
        }
    }).prototype, "cardbackItemPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(G.prototype, "panelContainerWidget", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(G.prototype, "deckScrollView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(G.prototype, "changeSizeButton", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(G.prototype, "maximizeImg", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(G.prototype, "minimizeImg", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(G.prototype, "soundSettingsTabButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(G.prototype, "maxBetToggle", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = G)) || k));
    n._RF.pop()
}
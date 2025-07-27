import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./Holdem_TableSetting.js";
import * as f from "./Enum.js";
import * as _ from "./Enum.js";
import * as S from "./ResourceManager.js";
import * as C from "./cv.js";
import * as B from "./AppConfig.js";
import * as T from "./ActivateSettingsHandler.js";
import * as k from "./CardBackItemHandler.js";
import * as x from "./CardFrontItemHandler.js";
import * as z from "./CustomToggleHandler.js";
import * as M from "./TableBgItemHandler.js";
import * as I from "./ToggleSwitch.js";
import * as A from "./mttconfig.js";
import * as v from "./Translator.js";
import * as L from "./PotSettingBtn.js";

function main() {
    var w, P, y, E, N, G, H, R, V, F, W, D, O, U, X, Y, j, Z, J, K;
    n._RF.push({}, "641060OM8RLJ4NRZ7ETwbvk", "Holdem_TableSetting_Landscape", void 0);
    const {
        ccclass: q,
        property: Q
    } = c;
    t("default", (w = Q(a), P = Q(a), y = Q(o), E = Q(l), N = Q(r), G = Q(s), H = Q(s), R = Q(s), V = Q(I), q((D = e((W = class extends b {
        constructor(...t) {
            super(...t), i(this, "tableBgItemPrefab", D, this), i(this, "cardbackItemPrefab", O, this), i(this, "panelContainerWidget", U, this), i(this, "deckScrollView", X, this), i(this, "changeSizeButton", Y, this), i(this, "maximizeImg", j, this), i(this, "minimizeImg", Z, this), i(this, "nd_switch_effect", J, this), i(this, "maxBetToggle", K, this), this.onToggleMaxBet = () => {
                if (this.maxBetToggle.getValueFromLocalStorage(!0)) this.percentTxt.node.active = !1, this.potSlide.progress = 1, this.setSliderProgress(100), this.SetCurrentBetValueBtnNum(v("PLAYER_SETTING.CUSTOM_POT_RATE_MAX"), !0), this.tempSetting.isMax = !0;
                else {
                    let t = this.GetCurrentBetValueBtn().getComponent(L).getTag(),
                        e = this.GetBetValueSliderRange(t),
                        i = Math.ceil(e.Min + this.potSlide.progress * (e.Max - e.Min));
                    this.percentTxt.string = i + "%", this.percentTxt.node.active = !0, this.SetCurrentBetValueBtnNum(i, !1), this.tempSetting.isMax = !1
                }
                this.updatePot()
            }
        }
        onLoad() {
            this.setSoundSettingsTitles(), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.setSoundSettingsTitles.bind(this), this.node)
        }
        initLocalSetting() {
            for (let t = 0; t < f.CARD_BACK_MAX; t++) {
                let e = g(this.cardbackItemPrefab);
                this.cardBack.addChild(e), e.getComponent(k).initialize(this.node, t, "Holdem_TableSetting_Landscape", "onClickCardBack")
            }
            this.maxBetToggle.init(A.key_enableMaxBet, !0, this.onToggleMaxBet), h("lbl", this.maxBetToggle.node).getComponent(u).string = v("PLAYER_SETTING.CUSTOM_POT_RATE_MAX").toLocaleUpperCase(), super.initLocalSetting(), this.maxBetToggle.getChecked() || (this.tempSetting.isMax = !1)
        }
        initTableBackground() {
            let t = B.Instance.getGameConfig().tableList.length;
            for (let e = 0; e < t; e++) {
                let t = g(this.tableBgItemPrefab);
                this.tableBack.addChild(t), t.getComponent(M).initialize(this.node, e, "Holdem_TableSetting_Landscape", "onClickTableBack")
            }
            const e = this.tableBack.getComponent(d);
            if (e) {
                const i = e.cellSize;
                let n = this.tableBack.getComponent(m);
                n.height = (i.height + e.spacingY) * Math.ceil(t / Math.floor(n.width / i.width))
            }
        }
        initCardStyles() {
            for (let t = 0; t < _.CARD_FACE_MAX; t++) {
                let e = g(this.cardFrontItemPrefab);
                this.cardFace.addChild(e), e.getComponent(x).initialize(this.node, t, "Holdem_TableSetting_Landscape", "onClickCardFace")
            }
        }
        setTabHighlight(t, e) {
            t.getComponentInChildren(p).node.active = e
        }
        onClickMaximizeButton() {
            this.minimizeImg.active ? (this.panelContainerWidget.top = 548, this.changeSizeButton.target = this.maximizeImg, this.minimizeImg.active = !1, this.maximizeImg.active = !0) : (this.panelContainerWidget.top = this.panelContainerWidget.bottom, this.changeSizeButton.target = this.minimizeImg, this.minimizeImg.active = !0, this.maximizeImg.active = !1), S.updateWidget(this.panelContainerWidget.node, !0, o.AlignMode.ON_WINDOW_RESIZE), this.deckScrollView.scrollToOffset(this.deckScrollView.getScrollOffset())
        }
        selectToggleNode(t, e) {
            let i = t.getComponent(z);
            i && i.setActive(e)
        }
        setCursorActive(t, e) {
            h("hightlight", t).active = e
        }
        setTabContentActive(t, e) {}
        setBackground(t) {
            this.tableBack.children.forEach(((e, i) => {
                this.selectToggleNode(e, i == t)
            }))
        }
        setCardBack(t) {
            this.cardBack.children.forEach(((e, i) => {
                this.selectToggleNode(e, i == t)
            }))
        }
        setCardFace(t) {
            this.cardFace.children.forEach(((e, i) => {
                this.selectToggleNode(e, i == t)
            }))
        }
        saveTableBgToLocalStorage(t) {
            return C.tools.GetTableBack() != t && (C.tools.SetTableBack(t), !0)
        }
        getBgIdx() {
            return C.tools.GetTableBack()
        }
        setSoundSettingsTitles() {
            C.StringTools.setLabelString(this.nd_switch_effect, "title", "jackfruit_setting_sound_effects_btn_label", 4), C.StringTools.setLabelString(this.nd_customize, "title", "GameScene_changeCard_panel_shortCut_bet_panel_customPot_txt", 4), C.StringTools.setLabelString(this.content, "content_add/reset/title", "GameScene_changeCard_panel_shortCut_bet_panel_recoverShortCut_button", 2), C.StringTools.setLabelString(this.potSet, "tab_type_3/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_3_label", 2), C.StringTools.setLabelString(this.potSet, "tab_type_5/label", "GameScene_changeCard_panel_shortCut_bet_panel_show_button_5_label", 2)
        }
        onHandlerClickTabButton(t) {
            t = 3 == t ? 0 : 1, this.potSet.getComponent(T).setActive(t);
            let e = this.potButtons.children;
            e[0].active = this.isButton3, e[1].active = !this.isButton3
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
        onDestroy() {
            C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node)
        }
    }).prototype, "tableBgItemPrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(W.prototype, "cardbackItemPrefab", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(W.prototype, "panelContainerWidget", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(W.prototype, "deckScrollView", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(W.prototype, "changeSizeButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(W.prototype, "maximizeImg", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(W.prototype, "minimizeImg", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(W.prototype, "nd_switch_effect", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(W.prototype, "maxBetToggle", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = W)) || F));
    n._RF.pop()
}
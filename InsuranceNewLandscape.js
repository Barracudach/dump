import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./ThemeSystem.js";
import * as u from "./InsuranceNew.js";
import * as c from "./cv.js";
import * as _ from "./TextButton.js";

function main() {
    var h, g, d, f, p, m, x, C, T;
    r._RF.push({}, "340d4hhpzBJFYVPiRZ9DG6c", "InsuranceNewLandscape", void 0);
    const {
        ccclass: b,
        property: S
    } = o;
    t("default", (h = S(i), g = S(l), d = S(l), b(((T = class extends u {
        constructor(...t) {
            super(...t), n(this, "btn_width_label", m, this), n(this, "winColor", x, this), n(this, "loseColor", C, this)
        }
        setTitleWrap(t, e) {
            t.string = e
        }
        activePanelDetail(t) {
            this.panel_detail.active = t, this.btn_width_label.string = this.txt_btn_detail.string
        }
        getChipInsuranceText() {
            return ""
        }
        getChipPotText() {
            return ""
        }
        getChipInvestText() {
            return ""
        }
        setBtnsText() {}
        setBtnDetailTextColor(t) {}
        loadButtonFrames() {}
        resetShowHideDetail() {
            super.resetShowHideDetail(), this.btn_detail.getComponent(_).turnOn(!1)
        }
        getLabelHitProfitV(t) {
            return s("hit_profit_layout/txt_hit_profit_v", t).getComponent(i)
        }
        getLabelHitProfitK(t) {
            return s("hit_profit_layout/txt_hit_profit_k", t).getComponent(i)
        }
        getLabelNotHitProfitV(t) {
            return s("not_hit_profit_layout/txt_not_hit_profit_v", t).getComponent(i)
        }
        getLabelNotHitProfitK(t) {
            return s("not_hit_profit_layout/txt_not_hit_profit_k", t).getComponent(i)
        }
        revertButtonFrames() {}
        getWinColor() {
            return this.winColor.getThemeColor()
        }
        getLoseColor() {
            return this.loseColor.getThemeColor()
        }
        getPublicCardsCellScale() {
            return 1
        }
        setThemeSystemRichText(t, e) {
            t.getComponent(a).string = e
        }
        setCommunityText() {}
        setTxtOtherCards(t) {
            let e = c.StringTools.formatC(c.config.getStringData("Insurance_bg_other_cards_text_reskin"), c.String(t));
            this.setThemeSystemRichText(this.rtxt_other_cards.node, e)
        }
        setTxtSelectOuts(t) {
            let e = c.StringTools.formatC(c.config.getStringData("Insurance_bg_select_outs_text_reskinned"), c.String(t)) + ", ";
            this.setThemeSystemRichText(this.rtxt_select_outs.node, e)
        }
        setTxtLeftCards(t) {
            let e = c.StringTools.formatC(c.config.getStringData("Insurance_bg_left_cards_text_reskinned"), c.String(t));
            this.setThemeSystemRichText(this.rtxt_left_cards.node, e)
        }
        setTxtOddsRate(t) {
            let e = c.StringTools.formatC(c.config.getStringData("Insurance_bg_odds_rate_text_reskinned"), c.String(t));
            this.setThemeSystemRichText(this.rtxt_odds_rate.node, e)
        }
    }).gClassName = "InsuranceNewLandscape", m = e((p = T).prototype, "btn_width_label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(p.prototype, "winColor", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(p.prototype, "loseColor", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = p)) || f));
    r._RF.pop()
}
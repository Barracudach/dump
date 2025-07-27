import * as t from "./cc.js";
import * as n from "./cc.js";
import * as a from "./SlideView.js";
import * as s from "./menu.js";
import * as i from "./RuleDiscription.js";
import * as o from "./cv.js";

function main() {
    var u;
    t._RF.push({}, "84d2cN/J7FF9KNoVB42gtla", "menuLandscape", void 0);
    const {
        ccclass: c,
        property: r
    } = n;
    e("default", c(u = class extends s {
        constructor(...e) {
            super(...e), this.H_CURRENCY_ITEM = 64, this.PADDING_CURRENCY_BOTTOM = 28, this.PADDING_CURRENCY_TOP = 28
        }
        adaptWidgetOnload() {
            o.resMgr.adaptWidget(this.node, !0, !1)
        }
        getMenuItemGap() {
            return 92
        }
        onDisable() {}
        updateInGameMenu() {
            let e = this.game;
            e && e.changeCard_panel && (e.changeCard_panel.active = !0, e.changeCard_panel.getComponent(a) && e.changeCard_panel.getComponent(a).show(!1))
        }
        showRuleDiscription() {
            let e = this.game;
            e && e.changeCard_panel && e.ruleDiscription_panel.getComponent(i).show(!0, this.game.gameDataInstance)
        }
        getMenuBgTopPadding() {
            return this.PADDING_CURRENCY_TOP + this.H_CURRENCY_ITEM + this.getOffsetItemY() + this.PADDING_CURRENCY_BOTTOM
        }
        setMenuItemPosition(e, t, n, a) {
            let s = this.getOffsetItemY();
            super.setMenuItemPosition(e, t, n, a - s)
        }
        initLanguage(e = 2) {
            super.initLanguage(e)
        }
        getOffsetItemY() {
            let e = 0;
            return o.appConfig.getWalletConfig().haveUSDTCurrency && (e = this.H_CURRENCY_ITEM), e
        }
    }) || u);
    t._RF.pop()
}
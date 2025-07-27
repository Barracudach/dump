import * as e from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./Buyin.js";
import * as u from "./cv.js";
import * as l from "./ThemeSystem.js";
import * as c from "./ColorSystemType.js";
import * as d from "./ColorSystemTypeOther.js";

function main() {
    var p;
    e._RF.push({}, "18f43nIXvBMfYurXvhmhgOR", "BuyinMobile", void 0);
    const {
        ccclass: g,
        property: h
    } = r;
    t("default", g(p = class extends s {
        adaptWidget() {
            u.resMgr.adaptWidget(this.node, !0, !1)
        }
        start() {
            super.start(), u.tools.toggleComponents(this.node, n, !0, !0)
        }
        updateTakeBackTips(t) {}
        updateTexts(t) {}
        updateSize(t) {}
        updateBuyInAmount(t) {
            let e = super.updateBuyInAmount(t),
                n = this.chouMa_slider.getComponent(o);
            if (n) {
                let t = n.handle.getComponentInChildren(a);
                t && (t.string = e)
            }
            return e
        }
        updateTitleBar() {
            let t = this.currentBringNode(),
                e = u.appConfig.getWalletConfig().haveUSDTCurrency;
            i("tab_icon", t).active = e, i("title", t).active = !e
        }
        setBtnState(t, e) {
            let n = this.tabButton[t];
            e ? (n.getChildByName("Label").getComponent(l).setColorSystemWeight(c.Gold), n.getChildByName("Background").active = !0) : (n.getChildByName("Label").getComponent(l).setColorScheme(c.Other, d.WhiteCreamy_100), n.getChildByName("Background").active = !1)
        }
    }) || p);
    e._RF.pop()
}
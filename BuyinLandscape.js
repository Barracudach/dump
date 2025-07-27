import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./ThemeSystem.js";
import * as r from "./Buyin.js";
import * as c from "./cv.js";
import * as u from "./ColorSystemType.js";
import * as d from "./ColorSystemTypeOther.js";

function main() {
    var l;
    t._RF.push({}, "df5e9cZAgVKCqOZNi6v/NRF", "BuyinLandscape", void 0);
    const {
        ccclass: p,
        property: y
    } = o;
    e("BuyinLandscape", p(l = class extends r {
        adaptWidget() {
            c.resMgr.adaptWidget(this.node, !0, !1)
        }
        updateTakeBackTips(e) {}
        updateTexts(e) {}
        updateSize(e) {}
        updateBuyInAmount(e) {
            let t = super.updateBuyInAmount(e),
                i = this.chouMa_slider.getComponent(n);
            if (i) {
                let e = i.handle.getComponentInChildren(a);
                e && (e.string = t)
            }
            return t
        }
        updateTitleBar() {
            let e = this.currentBringNode(),
                t = c.appConfig.getWalletConfig().haveUSDTCurrency;
            i("tab_icon", e).active = t, i("title", e).active = !t
        }
        setBtnState(e, t) {
            let n = this.tabButton[e];
            t ? (n.getChildByName("Label").getComponent(s).setColorSystemWeight(u.Gold), n.getChildByName("Background").active = !0) : (n.getChildByName("Label").getComponent(s).setColorScheme(u.Other, d.WhiteCreamy_100), n.getChildByName("Background").active = !1)
        }
    }) || l);
    t._RF.pop()
}
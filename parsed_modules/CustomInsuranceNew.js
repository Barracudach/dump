import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as r from "./InsuranceNewLandscape.js";

function main() {
    var i;
    e._RF.push({}, "dca4214AN9EeajuS1zY4F4S", "CustomInsuranceNew", void 0);
    const {
        ccclass: a,
        property: c
    } = o;
    t("default", a(i = class extends r {
        getLabelHitProfitV(t) {
            return t.getChildByName("txt_hit_profit_v").getComponent(n)
        }
        getLabelHitProfitK(t) {
            return t.getChildByName("txt_hit_profit_k").getComponent(n)
        }
        getLabelNotHitProfitV(t) {
            return t.getChildByName("txt_not_hit_profit_v").getComponent(n)
        }
        getLabelNotHitProfitK(t) {
            return t.getChildByName("txt_not_hit_profit_k").getComponent(n)
        }
    }) || i);
    e._RF.pop()
}
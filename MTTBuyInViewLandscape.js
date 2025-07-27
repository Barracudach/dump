import * as n from "./cc.js";
import * as t from "./MTTBuyInView.js";
import * as s from "./MTTBuyInCompLandscape.js";

function main() {
    n._RF.push({}, "90173wsOiFHyqWo1bpbsaQq", "MTTBuyInViewLandscape", void 0);
    e("MTTBuyInViewLandscape", class extends t {
        constructor(...e) {
            super(...e), this.compLandscape = null
        }
        onAttachedEngineView(e) {
            this.compLandscape = e.getComponent(s), this.compLandscape.mvcView = this
        }
        getRenderer() {
            return this.compLandscape
        }
        isInsufficientBalanceShowing() {
            var e;
            return null == (e = this.getRenderer()) ? void 0 : e.isInsufficientBalanceShowing()
        }
        getUserBalance() {
            var e;
            return (null == (e = this.getRenderer()) ? void 0 : e.userBalance) || 0
        }
        getBuyInValue() {
            var e;
            return (null == (e = this.getRenderer()) ? void 0 : e.buyInDefaultCurrency) || 0
        }
    }), n._RF.pop()
}
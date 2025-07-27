import * as i from "./cc.js";
import * as e from "./MVCModel.js";

function main() {
    i._RF.push({}, "e442clOdcNICKktLnGSLVp6", "HallMttPrizepoolModel", void 0);
    t("HallMttPrizepoolData", class {
        constructor() {
            this.prizeList = void 0, this.isAutoRefresh = void 0, this.currency = void 0, this.displayCurrency = void 0, this.currencyRate = void 0, this.convertCurrency = void 0, this.prizePool = void 0
        }
    });
    t("default", class extends e {
        constructor(...t) {
            super(...t), this.detail = void 0, this.tournament = void 0, this.data = void 0, this.hall = void 0
        }
        setData(t, i, e) {
            this.data = t, this.detail = i, this.tournament = e
        }
    }), i._RF.pop()
}
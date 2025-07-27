import * as a from "./cc.js";
import * as s from "./cc.js";
import * as e from "./MVCModel.js";

function main() {
    var i;
    s._RF.push({}, "4fd31msFWVMcIsTnLgP28tf", "CashGameRightPanelModel", void 0);
    const {
        ccclass: o,
        property: h
    } = a;
    t("CashGameRightPanelData", class {
        constructor() {
            this.tabName = void 0, this.totalTables = void 0, this.totalPlayers = void 0, this.currencyTypes = void 0, this.tableMaxes = void 0, this.minStake = void 0, this.maxStake = void 0, this.hasBombPot = void 0, this.hasSquid = void 0, this.hasBigAnte = void 0, this.hasPace = void 0
        }
    });
    t("CashGameRightPanelModel", o("CashGameRightPanelModel")(i = class extends e {
        constructor(...t) {
            super(...t), this.data = void 0
        }
    }) || i);
    s._RF.pop()
}
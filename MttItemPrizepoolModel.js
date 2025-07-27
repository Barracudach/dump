import * as o from "./cc.js";
import * as i from "./MVCModel.js";

function main() {
    o._RF.push({}, "8b32d6bBiVMwYECUl0KLvma", "MttItemPrizepoolModel", void 0);
    t("MttItemPrizepoolData", class {
        constructor() {
            this.rank = void 0, this.rankTail = void 0, this.money = void 0, this.proportion = void 0, this.tool = void 0
        }
    });
    t("default", class extends i {
        constructor(...t) {
            super(...t), this.id = void 0, this.data = void 0, this.modelHall = void 0
        }
        setData(t, o, i) {
            this.id = t, this.data = o, this.modelHall = i
        }
    }), o._RF.pop()
}
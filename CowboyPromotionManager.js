import * as t from "./cc.js";

function main() {
    t._RF.push({}, "86173+HoLFHSaBobYVqTLOI", "CowboyPromotionManager", void 0);
    o("CowboyPromotionContext", function(o) {
        return o.menuBarPopUp = "menuBarPopUp", o.cashGameExitPopUp = "cashGameExitPopUp", o.mttGameFloatingIcon = "cashGamePopup", o
    }({}));
    class n {
        constructor() {
            this.instanceData = {
                launchFromScreen: "",
                showCowboyPromoteFromExistCashGame: !1,
                showCowboyPromoteIconFromMTT: !1
            }
        }
    }
    o("CowboyPromotionData", n);
    class a {
        static getInstance() {
            return a.g_instance || (a.g_instance = new a, a.g_instance.init()), a.g_instance
        }
        constructor() {
            this._cowboyData = void 0, this._cowboyData = new n
        }
        get data() {
            return this._cowboyData
        }
        init() {}
    }
    o("default", a), a.g_instance = void 0, t._RF.pop()
}
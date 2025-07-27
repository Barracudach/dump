import * as o from "./cc.js";
import * as s from "./Helpers2.js";
import * as e from "./BasePokerArgs.js";

function main() {
    o._RF.push({}, "b5ecfmivGZJqJjvbxI1RPW2", "ShowInfoPopupArgs", void 0);
    t("ShowInfoPopupArgs", class extends e {
        constructor(t) {
            super(s.ShowInfoPopup), this.title = void 0, this.description = void 0, this.button_text = void 0, Object.assign(this, t)
        }
    }), o._RF.pop()
}
import * as n from "./cc.js";
import * as e from "./LocalizationController.js";

function main() {
    t("Translate", a), n._RF.push({}, "f7e79yn5lJDvZQw8DXZmCTE", "Translator", void 0);
    let r = "en_US";

    function a(t) {
        return e.getInstance().getTranslatedString(t, r, !1) || t
    }
    a.SetLanguage = t => {
        r = t
    }, n._RF.pop()
}
import * as n from "./cc.js";
import * as e from "./cc.js";

function main() {
    n._RF.push({}, "052c1A3VPxOuo5ciwAae4BH", "DialogStyleModel", void 0);
    let o = t("ThemeSystemType", function(t) {
        return t[t.Default = 0] = "Default", t[t.TwoButton_NoMoney_Style = 1] = "TwoButton_NoMoney_Style", t
    }({}));
    class c {
        static getInstance() {
            return c.g_instance || (c.g_instance = new c), c.g_instance
        }
        constructor() {
            this.themeData = {};
            const t = {
                spacing: 72,
                leftBtnSize: new e(300, 92),
                rightBtnSize: new e(300, 92),
                fontSize: 48
            };
            this.themeData = {
                [o.TwoButton_NoMoney_Style]: t
            }
        }
        getTheme(t) {
            return this.themeData[t]
        }
    }
    t("default", c), c.g_instance = void 0, n._RF.pop()
}
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cv.js";
import * as s from "./CheckboxValidator.js";

function main() {
    var c, l, u, g;
    n._RF.push({}, "fd9a5lFBK5IeKnaLouaa0ub", "AcceptMinAgeField", void 0);
    const {
        ccclass: p,
        property: d
    } = r;
    e("default", (c = d(o), p((g = t((u = class extends s {
        constructor(...e) {
            super(...e), i(this, "ageText", g, this), this.minAge = void 0
        }
        onLoad() {
            super.onLoad(), this.minAge = this.schemaFull.meta || a.appConfig.getFormsConfig().dob.minAge, this.nameI18nKey = this.minAge.toString(), this.setText()
        }
        setText() {
            this.ageText.string = a.StringTools.formatC(a.config.getStringData("ValidMinAgeText"), this.minAge)
        }
    }).prototype, "ageText", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = u)) || l));
    n._RF.pop()
}
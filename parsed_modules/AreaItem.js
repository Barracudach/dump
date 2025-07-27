import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cv.js";

function main() {
    var s;
    e._RF.push({}, "70c92RuzrhPEap25JctjMd3", "AreaItem", void 0);
    const {
        ccclass: c,
        property: a
    } = i;
    t("default", c(s = class extends n {
        constructor(...t) {
            super(...t), this.countryCode = void 0, this.nodeUIOpacity = null, this._index = 0, this._canTouch = !0
        }
        updateSVReuseData(t, e) {
            let n = r.StringTools.getArrayLength(e);
            if (n < 1 || n - 1 < t) return;
            this._index = t;
            let i = e[t];
            var s = i.indexOf(",");
            let c = this.getCountryNode(),
                a = this.getAreaCodeNode(),
                d = i.substring(0, s);
            c.getComponent(o).string = d;
            var u = i.indexOf("*");
            this.countryCode = i.substring(s + 1, u);
            let h = i.substring(u + 1, i.length);
            a.getComponent(o).string = "+" + h, this._canTouch ? this.nodeUIOpacity.opacity = 255 : this.nodeUIOpacity.opacity = 128
        }
        getCountryNode() {
            return this.node.getChildByName("country_text")
        }
        getAreaCodeNode() {
            return this.node.getChildByName("areaCode_text")
        }
        onBtnItemClick() {
            this._canTouch && r.MessageCenter.send("AreaView_onBtnCodeItemClick", this._index)
        }
    }) || s);
    e._RF.pop()
}
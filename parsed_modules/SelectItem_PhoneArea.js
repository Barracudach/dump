import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./ThemeSystem.js";
import * as c from "./CountryFlagSpriteFrame.js";
import * as u from "./cv.js";
import * as d from "./SelectItem.js";
import * as h from "./ColorSystemType.js";
import * as p from "./ColorSystemTypeOther.js";

function main() {
    var y, f, m, S, C, g;
    o._RF.push({}, "0a41bjsB6RLU7ARb+SQbuUY", "SelectItem_PhoneArea", void 0);
    const {
        ccclass: b,
        property: _
    } = s;
    e("SelectItem_PhoneArea", (y = _(i), f = _(n), b((C = t((S = class extends d {
        constructor(...e) {
            super(...e), r(this, "label_areaCode", C, this), r(this, "flag", g, this), this.countryCode = ""
        }
        updateSelectedUI() {
            super.updateSelectedUI(), this._isSelected ? this.label_areaCode.getComponent(a).setColorScheme(h.Other, p.MainBlue) : this.label_areaCode.getComponent(a).setColorScheme(h.Other, p.TypoGraphySecond)
        }
        updateView(e) {
            let t = e.text.indexOf(","),
                r = e.text.indexOf("*"),
                o = e.text.substring(r + 1);
            this.label.string = e.text.substring(0, t), this.label_areaCode.string = "(+" + o + ")", this.countryCode = e.text.substring(t + 1, r), c.loadFlag(this.countryCode, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this)), this.countryCode = this.countryCode + "+" + o, this.isSelected = e.selected == this.countryCode
        }
        onSpriteFrameLoaded(e) {
            l(this.flag, !0) && (this.flag.spriteFrame = e)
        }
        onLoadFlagError(e) {
            this.flag.spriteFrame = null
        }
        onBtnItemClick() {
            u.MessageCenter.send(u.Enum.MessageCenterAction.OnSelectViewOptionSelected, [this.index, this.countryCode])
        }
    }).prototype, "label_areaCode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(S.prototype, "flag", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = S)) || m));
    o._RF.pop()
}
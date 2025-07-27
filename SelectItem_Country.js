import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./CountryFlagSpriteFrame.js";
import * as c from "./cv.js";
import * as d from "./SelectItem.js";

function main() {
    var u, h, p, g, f, m;
    r._RF.push({}, "23e97d8EFNDy6SDvOullM9z", "SelectItem_Country", void 0);
    const {
        ccclass: y,
        property: S
    } = s;
    e("SelectItem_Country", (u = S(n), h = S(o), y((f = t((g = class extends d {
        constructor(...e) {
            super(...e), i(this, "flag", f, this), i(this, "checkedMark", m, this), this.countryCode = ""
        }
        updateView(e) {
            this.label.string = e.text, this.countryCode = e.id, e.imgPath ? l.loadFlag(e.imgPath, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this), !0) : l.loadFlag(this.countryCode, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this)), this.isSelected = e.selected == this.countryCode, this.checkedMark && (this.checkedMark.active = !!this.isSelected)
        }
        onSpriteFrameLoaded(e) {
            a(this.flag, !0) && (this.flag.spriteFrame = e)
        }
        onLoadFlagError(e) {
            this.flag.spriteFrame = null
        }
        onBtnItemClick() {
            c.MessageCenter.send(c.Enum.MessageCenterAction.OnSelectViewOptionSelected, [this.index, this.countryCode])
        }
    }).prototype, "flag", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(g.prototype, "checkedMark", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = g)) || p));
    r._RF.pop()
}
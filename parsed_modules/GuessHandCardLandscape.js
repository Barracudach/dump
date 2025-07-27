import * as n from "./cc.js";
import * as s from "./cc.js";
import * as t from "./GuessHandCard.js";
import * as a from "./cv.js";

function main() {
    var r;
    s._RF.push({}, "5183e42vSFBaLIjhdmjGtY7", "GuessHandCardLandscape", void 0);
    const {
        ccclass: c,
        property: o
    } = n;
    e("default", c(r = class extends t {
        onLoad() {
            super.onLoad(), a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this._onChangeLanguage.bind(this), this)
        }
        onDestroy() {
            super.onDestroy(), a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this)
        }
        _onChangeLanguage() {
            this.updatePanelsTexts()
        }
    }) || r);
    s._RF.pop()
}
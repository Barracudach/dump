import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as r from "./RGView.js";
import * as u from "./cv.js";

function main() {
    var s, a, d, p;
    c._RF.push({}, "b63bbri9x1ObZeLlPKPzSNm", "RGWiew_SelfExclude", void 0);
    const {
        ccclass: w,
        property: f
    } = o;
    e("RGView_SelfExclude", (s = f(n), w((p = t((d = class extends r {
        constructor(...e) {
            super(...e), i(this, "childView", p, this)
        }
        onNext() {
            u.AudioMgr.playButtonSound("button_click.mp3"), null != this.childView ? u.action.showAction(this.childView, u.action.eMoveActionDir.EMAD_TO_LEFT, u.action.eMoveActionType.EMAT_FADE_IN) : l("A new Self Exclude view with state can not be created")
        }
    }).prototype, "childView", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = d)) || a));
    c._RF.pop()
}
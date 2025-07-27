import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";
import * as r from "./FormView.js";
import * as u from "./DropDown.js";
import * as c from "./ResponsibleGamingData.js";
import * as a from "./ResponsibleGamingData.js";
import * as l from "./RGView.js";

function main() {
    var p, m, g, f, b, h;
    n._RF.push({}, "3f4f0WUy7VMbJzZ/GoJv1m7", "RGForm_playingTime", void 0);
    const {
        ccclass: d,
        property: w
    } = s;
    i("RGForm_playingTime", (p = w(l), m = w(u), d((b = e((f = class extends r {
        constructor(...i) {
            super(...i), t(this, "rgView", b, this), t(this, "dropDown", h, this)
        }
        onEnable() {
            this.init()
        }
        init() {
            this.populate({
                [a.GameTime]: o.rg.maxSessionDurationMinutes
            })
        }
        onSubmitSuccess(i) {
            o.popUp.showMsgI18n({
                txt: "ResponsibleGaming_time_limit_save_success",
                msgType: o.Enum.ToastType.ToastTypeSuccess
            }), o.rg.maxSessionDurationMinutes = this.objValues[a.GameTime], o.MessageCenter.send("rg_limits_updated"), this.rgView.goBack(!1)
        }
        onBtnConfirmClick() {
            o.AudioMgr.playButtonSound("button_click.mp3"), this.submit(this.onSubmitSuccess.bind(this), this.rgView.showServerError.bind(this.rgView, c.GameTime, this.fields))
        }
    }).prototype, "rgView", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(f.prototype, "dropDown", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = f)) || g));
    n._RF.pop()
}
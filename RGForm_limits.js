import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as u from "./cv.js";
import * as o from "./FormView.js";
import * as r from "./FieldValidator.js";
import * as a from "./RGView.js";

function main() {
    var c, p, h, g, m, b, d, f, y, S;
    s._RF.push({}, "c124e4vJaJFSJ4KS64BfbVB", "RGForm_limits", void 0);
    const {
        ccclass: w,
        property: V
    } = l;
    t("RGForm_limits", (c = V(a), p = V([r]), h = V(n), g = V({
        tooltip: "Shoulde be one of the options [Deposit, Wager, Loss]"
    }), w((d = e((b = class extends o {
        constructor(...t) {
            super(...t), i(this, "rgView", d, this), i(this, "newValuesInputs", f, this), i(this, "onSuccessMsgKey", y, this), i(this, "limitType", S, this), this.onSubmitSuccessHandler = null
        }
        onEnable() {
            this.init()
        }
        init() {
            this.populate(u.StringTools.deepCopy(u.rg.limits[this.limitType], {}))
        }
        submit(t, e) {
            let i = [];
            for (let t = 0, e = this.newValuesInputs.length; t < e; t++) isNaN(this.newValuesInputs[t].value) && (this.newValuesInputs[t].setValueFromObj(u.rg.limits[this.limitType]), i.push(this.newValuesInputs[t]));
            let s = !1;
            return i.length < this.newValuesInputs.length && (this.onSubmitSuccessHandler = t, s = 1 == super.submit(this.onSubmitSuccess.bind(this), this.rgView.showServerError.bind(this.rgView, this.limitType, this.fields))), this.clearInputs(i), s
        }
        onSubmitSuccess(t) {
            if (this.onSubmitSuccessHandler && this.onSubmitSuccessHandler(t), t.update) u.rg.parseNewPendingLimit(t), u.popUp.showMsg({
                txt: u.rg.getPendingMsg(t, "new"),
                msgType: u.Enum.ToastType.ToastTypeSuccess
            });
            else {
                let t = u.config.getStringData(this.onSuccessMsgKey);
                null != t && 0 != t.length || (t = u.config.getStringData("ResponsibleGaming_limit_save_success")), u.popUp.showMsg({
                    txt: t,
                    msgType: u.Enum.ToastType.ToastTypeSuccess
                }), u.rg.limits[this.limitType].updateLimits(this.objValues), u.MessageCenter.send("rg_limits_updated")
            }
            this.rgView.goBack(!1)
        }
        populate(t) {
            super.populate(t, !0);
            for (let t = 0, e = this.fields.length; t < e; t++) 0 == this.fields[t].value && this.fields[t].clear();
            this.clearInputs(this.newValuesInputs)
        }
        clearInputs(t) {
            for (let e = 0, i = t.length; e < i; e++) t[e].clear()
        }
        onBtnPolicyClick() {
            u.AudioMgr.playButtonSound("button_click.mp3")
        }
        onBtnConfirmClick() {
            u.AudioMgr.playButtonSound("button_click.mp3"), this.submit()
        }
    }).prototype, "rgView", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(b.prototype, "newValuesInputs", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = e(b.prototype, "onSuccessMsgKey", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), S = e(b.prototype, "limitType", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "Deposit"
        }
    }), m = b)) || m));
    s._RF.pop()
}
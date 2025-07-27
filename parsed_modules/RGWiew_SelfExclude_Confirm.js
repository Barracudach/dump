import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as g from "./DropDown.js";

function main() {
    var h, d, f, m, D, b, E, w, x, S, _, y, C, T;
    i._RF.push({}, "78986I1eohNOrubhuHY7ZXR", "RGWiew_SelfExclude_Confirm", void 0);
    const {
        ccclass: M,
        property: R
    } = l;
    e("RGWiew_SelfExclude_Confirm", (h = R(g), d = R(o), f = R(o), m = R(r), D = R(s), b = R(s), M((x = t((w = class extends a {
        constructor(...e) {
            super(...e), n(this, "periodDropDown", x, this), n(this, "toggle", S, this), n(this, "parmanentExclusion", _, this), n(this, "confirmButton", y, this), n(this, "onSuccessMsgKey", C, this), n(this, "onErrorMsgKey", T, this), this._isPermanentExclusion = !1
        }
        onLoad() {
            this.initPeriodDropOptions(), this.node.getComponentsInChildren(c).forEach((e => {
                e.maxWidth = e.node.getComponent(u).width
            }))
        }
        initPeriodDropOptions() {
            const e = p.appConfig.getModulesConfig().rgStatus.selfExclusionPeriodOptions.map((e => ({
                optionLabel: e.label,
                optionLabelUseI18n: e.isUseL18N,
                optionValue: e.value.toString(),
                optionSprite: null
            })));
            this.periodDropDown.addOptionsData(e)
        }
        onConfirm() {
            if (p.AudioMgr.playButtonSound("button_click.mp3"), 0 == this.parmanentExclusion.isChecked && (0 == this.toggle.isChecked || this.periodDropDown.selectedIndex < 0)) return;
            let e = 0;
            e = this._isPermanentExclusion ? 0 : Number(this.periodDropDown.optionsData[this.periodDropDown.selectedIndex].optionValue);
            let t = {
                periodSeconds: e,
                isPermanent: this._isPermanentExclusion
            };
            p.SwitchLoadingView.show(p.config.getStringData("Loading") + " "), p.http.sendRequestV2(p.config.getStringData("WEB_API_RG_SELFEXCLUSION", !0), t, this.onGetExcludeSuccess.bind(this), this.onGetExcludeFailed.bind(this), p.http.HttpRequestType.POST)
        }
        onGetExcludeSuccess(e) {
            p.SwitchLoadingView.hide();
            let t = p.config.getStringData(this.onSuccessMsgKey);
            null != t && 0 != t.length || (t = p.config.getStringData("ResponsibleGaming_self_exclude_success")), p.popUp.showMsg({
                txt: t,
                sureCallback: () => {
                    p.netWorkManager.Logout(!0, null, p.Enum.LogOutReason.RGSelfExclude)
                },
                msgType: p.Enum.ToastType.ToastTypeSuccess
            })
        }
        onGetExcludeFailed(e) {
            p.SwitchLoadingView.hide();
            let t = p.config.getStringData(this.onErrorMsgKey);
            null != t && 0 != t.length || (t = p.config.getStringData("ResponsibleGaming_self_exclude_error")), p.popUp.showMsg({
                txt: t,
                msgType: p.Enum.ToastType.ToastTypeWarning
            })
        }
        onBack() {
            p.AudioMgr.playButtonSound("back_button.mp3"), p.action.showAction(this.node, p.action.eMoveActionDir.EMAD_TO_RIGHT, p.action.eMoveActionType.EMAT_FADE_OUT)
        }
        checkBoxCb() {
            this._isPermanentExclusion = this.parmanentExclusion.isChecked, this.periodDropDown.interactable = this.toggle.isChecked, this.confirmButton.interactable = this.toggle.isChecked && this.periodDropDown.selectedIndex > -1 || this._isPermanentExclusion
        }
    }).prototype, "periodDropDown", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(w.prototype, "toggle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(w.prototype, "parmanentExclusion", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(w.prototype, "confirmButton", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(w.prototype, "onSuccessMsgKey", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), T = t(w.prototype, "onErrorMsgKey", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), E = w)) || E));
    i._RF.pop()
}
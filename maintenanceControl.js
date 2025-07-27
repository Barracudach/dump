import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./Translator.js";
import * as u from "./httpApis.js";
import * as c from "./maintenanceDialog.js";

function main() {
    var p, C, d, S;
    r._RF.push({}, "f4d57VXW3pKp67MldFRCKs8", "maintenanceControl", void 0);
    const {
        ccclass: _,
        property: v
    } = i;
    t("default", (p = v(o), _((S = e((d = class extends l {
        constructor(...t) {
            super(...t), s(this, "popup", S, this), this._currentPopup = null, this._onAllowCallback = null, this.secretCode = ["LT", "LT", "LB", "LB", "RB", "RB", "RT", "RT", "LB", "LB"], this._inputCode = [], this._lastServerStatus = -1, this._retryServerStatus = 0
        }
        start() {}
        onDestroy() {
            this.StopClearCode()
        }
        resetData() {
            this._inputCode = [], this._lastServerStatus = -1, this._retryServerStatus = 0, this._onAllowCallback = null
        }
        isMaintenance(t) {
            this.resetData(), this._onAllowCallback = t, this.sendRequest()
        }
        allowStartGame() {
            this.ClearSecretCode(), this.StopClearCode(), this._currentPopup && this._currentPopup.getComponent(c).hide(), this._onAllowCallback && this._onAllowCallback()
        }
        sendRequest() {
            u.requestServerStatus((t => {
                cc_mtt.vv.ConsoleLog.log("ServerStatus", t), this._lastServerStatus = t, 1 == this._lastServerStatus || 3 == this._lastServerStatus ? this.showPopup() : this.allowStartGame()
            }), this.onRequestError.bind(this))
        }
        onRequestError() {
            this._retryServerStatus > 3 ? this.allowStartGame() : (this._retryServerStatus++, this.scheduleOnce(this.sendRequest, 1))
        }
        showPopup() {
            this._currentPopup = n(this.popup), this._currentPopup.parent = this.node;
            let t = this._currentPopup.getComponent(c);
            h("UPDATE.DIALOG_EXIT");
            t.controller = this, t.show(h("ERROR_CODE_PKW.TITLE"), h("UPDATE.MAINTENANCE"), !1, [{
                type: 0,
                text: h("UPDATE.DIALOG_EXIT"),
                callback: () => {
                    a.end()
                }
            }])
        }
        onPopupClickCode(t) {
            this._inputCode.push(t), this.isSecretCode() ? this.allowStartGame() : this.secretCode.length == this._inputCode.length ? (this.ClearSecretCode(), this.StopClearCode()) : this.startClearCode()
        }
        isSecretCode() {
            let t = !0;
            if (this._inputCode.length != this.secretCode.length) t = !1;
            else
                for (let e = 0; e < this.secretCode.length; e++)
                    if (this._inputCode[e] != this.secretCode[e]) {
                        t = !1;
                        break
                    } return t
        }
        ClearSecretCode() {
            cc_mtt.vv.ConsoleLog.log("ClearSecretCode", this._inputCode), this._inputCode = []
        }
        startClearCode() {
            this.unschedule(this.ClearSecretCode), this.scheduleOnce(this.ClearSecretCode, 3)
        }
        StopClearCode() {
            this.unschedule(this.ClearSecretCode)
        }
    }).prototype, "popup", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = d)) || C));
    r._RF.pop()
}
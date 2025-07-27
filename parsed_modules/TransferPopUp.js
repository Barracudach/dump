import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./ImpokerHall.js";
import * as _ from "./Translator.js";
import * as m from "./TransferPrefab.js";
import * as f from "./httpApis.js";
import * as g from "./CommonTools.js";
import * as C from "./TweenControl.js";

function main() {
    var S, v, T, k, L, R, y, D, O, B, E, I, U, A, N, P, w, z, F, M;
    n._RF.push({}, "86017MLYRFBOYTZbfJTutL7", "TransferPopUp", void 0);
    const {
        ccclass: x,
        property: H
    } = s;
    t("TransferPopUp", (S = H(o), v = H(o), T = H(a), k = H(a), L = H(o), R = H(r), y = H(o), D = H(l), O = H(l), x((I = e((E = class extends c {
        constructor(...t) {
            super(...t), i(this, "coins", I, this), i(this, "balance", U, this), i(this, "blockLayer", A, this), i(this, "popUp", N, this), i(this, "tips", P, this), i(this, "validCodeInput", w, this), i(this, "codeLabel", z, this), i(this, "okButton", F, this), i(this, "cancelButton", M, this), this._hallScript = null, this._actionSpeed = .2, this._amount = 0, this._areaCode = "", this._mobile = ""
        }
        onLoad() {
            this.popUp.setScale(1e-4, 1e-4), this._hallScript = g.instance.getParentScene(u, this.node).getComponentInChildren(b), this.okButton.interactable = !1, this.node.active = !1
        }
        start() {}
        setInfo(t, e, i, n) {
            this._amount = Number(t), this._areaCode = i, this._mobile = n, this._amount > 0 ? this._amount = this._amount > e.balance ? e.balance : this._amount : cc_mtt.vv.DataManager && cc_mtt.vv.DataManager.userData && (this._amount = Math.abs(this._amount) > cc_mtt.vv.DataManager.userData.Gold ? -Math.floor(100 * cc_mtt.vv.DataManager.userData.Gold) / 100 : this._amount), this.coins.string = Math.abs(this._amount).toString(), this.balance.string = `${_(`TRANSFER.ACCOUNT_BALANCE${e.balance}`)}`
        }
        updateTips(t) {
            this.tips.string = _(t ? "TRANSFER.VALID_CODE.TRANSFER_FROM" : "TRANSFER.VALID_CODE.TRANSFER_TO")
        }
        resetPopUp() {
            this.validCodeInput.string = "", this.codeLabel.string = "", this.okButton.interactable = !1
        }
        editChangedCall() {
            this.codeLabel.string = this.validCodeInput.string, this.okButton.interactable = this.validCodeInput.string.length >= 6
        }
        zoomIn() {
            this.node.active = !0, C.fade(this.blockLayer, this._actionSpeed, 128), C.scaleTo(this.popUp, this._actionSpeed, h(p.ONE), d.backOut, (() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }))
        }
        zoomOut() {
            C.fadeOut(this.blockLayer, this._actionSpeed), C.scaleTo(this.popUp, this._actionSpeed, h(p.ZERO), d.backIn, (() => {
                this.resetPopUp(), this.node.active = !1, this._hallScript.controlHallBlockLayer(!1, this.name)
            }))
        }
        onOkClick() {
            this._hallScript.showLoading();
            let t = this.validCodeInput.string,
                e = this._areaCode + "/" + this._mobile + "/" + t,
                i = {
                    amount: this._amount,
                    smsCode: t
                };
            f.requestSMSCheck(e, (t => {
                "1" === t ? cc_mtt.vv.DataManager.worldNetwork.requestTransferFromImpoker(i, (t => {
                    this._hallScript.hidLoading((() => {
                        if (t && !t.errorCode) {
                            this.node.parent.getComponent(m).updateCurrentGold(), this.zoomOut();
                            let t = "TRANSFER.TRANSFER_SUCCESS";
                            this._hallScript.callPopUpBox(t, void 0)
                        } else {
                            let e = "ERROR_CODE_PKW." + t.errorCode;
                            this._hallScript.callPopUpBox(e, void 0)
                        }
                    }))
                })) : "0" === t && this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("VALID_CODE_INPUT.WRONG_CODE", void 0)
                }))
            }))
        }
        onCancelClick() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this.zoomOut()
        }
    }).prototype, "coins", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(E.prototype, "balance", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(E.prototype, "blockLayer", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(E.prototype, "popUp", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(E.prototype, "tips", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(E.prototype, "validCodeInput", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(E.prototype, "codeLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(E.prototype, "okButton", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(E.prototype, "cancelButton", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = E)) || B));
    n._RF.pop()
}
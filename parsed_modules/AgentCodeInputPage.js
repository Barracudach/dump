import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ImpokerHall.js";
import * as d from "./Pb.js";
import * as g from "./AndroidBackButton.js";
import * as p from "./CommonTools.js";

function main() {
    var C, k, b, _, f, m, B, I, A, S;
    i._RF.push({}, "f57d60dWeRMnJrcxkHNg1g1", "AgentCodeInputPage", void 0);
    const {
        ccclass: P,
        property: L
    } = l;
    t("AgentCodeInputPage", (C = L(o), k = L(a), b = L(r), _ = L(r), P((B = e((m = class extends s {
        constructor(...t) {
            super(...t), n(this, "agentCodeInput", B, this), n(this, "codeLabel", I, this), n(this, "okButton", A, this), n(this, "backButton", S, this), this._hallScript = null, this._parentPage = null, this.codeRegex = /^[a-z0-9]+$/i
        }
        onLoad() {
            this._hallScript = p.instance.getParentScene(c, this.node).getComponentInChildren(h), this.okButton.interactable = !1
        }
        setFocus() {
            u.isNative && u.os === u.OS.ANDROID && g.getInstance().addBackFunction("AgentCodeInputPage", this.onBackClicked.bind(this)), u.isNative && this.agentCodeInput.setFocus()
        }
        resetPage() {
            this.agentCodeInput.string = "", this.codeLabel.string = "", this.okButton.interactable = !1
        }
        checkForLetterAndNumber() {
            for (let t = 0; t < this.agentCodeInput.string.length; t++) {
                let e = this.agentCodeInput.string[t];
                if (!this.codeRegex.test(e)) return !1
            }
            return !0
        }
        editChangedCall() {
            this.checkForLetterAndNumber() ? this.codeLabel.string = this.agentCodeInput.string : this.agentCodeInput.string = this.codeLabel.string, this.okButton.interactable = this.agentCodeInput.string.length >= 6
        }
        onOkClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name);
            let t = this.agentCodeInput.string,
                e = {
                    AgentCode: t
                };
            this._hallScript.showLoading(), cc_mtt.vv.DataManager.worldNetwork.requestAssociationApply(e, (e => {
                if (e.ErrorCode) {
                    this._hallScript.controlHallBlockLayer(!1, this.name);
                    let t = e.ErrorCode === d.commonProto.ErrorCode.Not_Found ? "ASSOCIATION.AGENT_CODE_NOT_EXIST" : "ERROR_CODE_PKW." + e.ErrorCode;
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, void 0)
                    }))
                } else cc_mtt.vv.DataManager.defaultAgentCode = t, cc_mtt.vv.DataManager.loginData.DefaultAgentCode = t, this._hallScript.hidLoading((() => {
                    this.onBackClicked()
                }))
            }))
        }
        onBackClicked() {
            u.isNative && u.os === u.OS.ANDROID && g.getInstance().removeBackFunction("AgentCodeInputPage"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this._parentPage), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "agentCodeInput", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(m.prototype, "codeLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(m.prototype, "okButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(m.prototype, "backButton", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = m)) || f));
    i._RF.pop()
}
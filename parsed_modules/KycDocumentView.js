import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./ColorSystemTypeOther.js";
import * as d from "./KYCFacade.js";
import * as p from "./KYCFacade.js";
import * as m from "./cv.js";
import * as y from "./KycStatusView.js";

function main() {
    var b, f, h, g, C, w, B, _, x, S, T, V, v, D, K, R, k, P;
    n._RF.push({}, "a629dkTYxZErJN8LAzkp3ns", "KycDocumentView", void 0);
    const {
        ccclass: I,
        property: Y
    } = c, L = {
        Id: {
            name: "KYC_Id_Verification",
            description: "KYC_Id_Documents",
            iconIndex: 0
        },
        PymntPoA: {
            name: "KYC_Address_Verification",
            description: "KYC_Address_Documents",
            iconIndex: 1
        },
        PymntPoP: {
            name: "KYC_Payment_Verification",
            description: "KYC_Payments_Documents",
            iconIndex: 2
        }
    }, z = t("DocumentStatusMap", {
        Approved: {
            textColor: l.kycVerifiedText,
            bgColor: l.kycVerifiedBase,
            statusText: "KYC_Status_Approved",
            showVerifyBtn: !1,
            showResubmitButton: !1
        },
        Pending: {
            textColor: l.kycPendingText,
            bgColor: l.kycPendingBase,
            statusText: "KYC_Status_Pending",
            showVerifyBtn: !0,
            showResubmitButton: !1
        },
        Failed: {
            textColor: l.kycRejectedText,
            bgColor: l.kycRejectedBase,
            statusText: "KYC_Status_Rejected",
            showVerifyBtn: !1,
            showResubmitButton: !0
        },
        Uploaded: {
            textColor: l.kycPendingText,
            bgColor: l.kycPendingBase,
            statusText: "KYC_Doc_Status_Approved",
            showVerifyBtn: !1,
            showResubmitButton: !1
        },
        Rejected: {
            textColor: l.kycRejectedText,
            bgColor: l.kycRejectedBase,
            statusText: "KYC_Status_Rejected",
            showVerifyBtn: !1,
            showResubmitButton: !0
        }
    });
    t("default", (b = Y(o), f = Y(o), h = Y(o), g = Y(r), C = Y(r), w = Y(s), B = Y(u), _ = Y(y), I((T = e((S = class extends a {
        constructor(...t) {
            super(...t), i(this, "documentNameLabel", T, this), i(this, "statusLabel", V, this), i(this, "descriptionLabel", v, this), i(this, "verifyButton", D, this), i(this, "reSubmitButton", K, this), i(this, "documentIcon", R, this), i(this, "iconSprites", k, this), i(this, "statusView", P, this), this.documentType = d.ID
        }
        setCurrentStatus(t) {
            this.documentType = t.type, this.documentNameLabel.string = m.config.getStringData(L[this.documentType].name), this.descriptionLabel.string = m.config.getStringData(L[this.documentType].description), this.documentIcon.spriteFrame = this.iconSprites[L[this.documentType].iconIndex];
            const e = z[t.status];
            this.verifyButton.node.active = e.showVerifyBtn, this.reSubmitButton.node.active = e.showResubmitButton && m.appConfig.getGeneralConfig().allowResubmitKycDocument, this.statusView.setStatusView(e.statusText, e.textColor, e.bgColor), this.statusView.node.active = !this.verifyButton.node.active
        }
        onVerifyBtnClick() {
            p.getInstance().verifyDocument(this.documentType)
        }
        onResubmitBtnClick() {
            p.getInstance().reInitiateDocumentUpload(this.documentType)
        }
    }).prototype, "documentNameLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(S.prototype, "statusLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(S.prototype, "descriptionLabel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(S.prototype, "verifyButton", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(S.prototype, "reSubmitButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(S.prototype, "documentIcon", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(S.prototype, "iconSprites", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = e(S.prototype, "statusView", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = S)) || x));
    n._RF.pop()
}
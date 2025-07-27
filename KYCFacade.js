import * as e from "./cc.js";
import * as n from "./cv.js";
import * as u from "./JumioSDK.js";
import * as c from "./KycStatusPopup.js";
import * as s from "./KycStatusPopup.js";

function main() {
    e._RF.push({}, "4a126rncOJL+64A+jOqCf/g", "KYCFacade", void 0);
    let i = t("DocumentType", function(t) {
            return t.ID = "Id", t.PROOF_OF_ADDRESS = "PymntPoA", t.PROOF_OF_PAYMENT = "PymntPoP", t
        }({})),
        o = t("KycDocumentStatus", function(t) {
            return t.Approved = "Approved", t.Pending = "Pending", t.Failed = "Failed", t.Uploaded = "Uploaded", t.Rejected = "Rejected", t
        }({})),
        a = t("KycStatusEnum", function(t) {
            return t.Succeed = "Succeed", t.Pending = "Pending", t.Failed = "Failed", t.PaymentPending = "PaymentPending", t.PaymentApproved = "PaymentApproved", t.PaymentRejected = "PaymentRejected", t.PaymentOnHold = "PaymentOnHold", t.Unverified = "Unverified", t.NotTriggered = "NotTriggered", t
        }({}));
    const r = {
        kycCheckType: "PaymentKycVerification",
        status: a.NotTriggered,
        documents: []
    };
    class p {
        static getInstance() {
            return p.instance || (p.instance = new p(new u)), p.instance
        }
        constructor(t) {
            this.kycSDK = void 0, this.currentKYCStatus = r, this.kycStatusPoupMaxShowCount = {
                REQESTED: -1,
                APPROVED: 1,
                REJECTED: 3
            }, this.kycSDK = t, this.kycSDK.initialize(), s.getInstance(), n.MessageCenter.register(n.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this)
        }
        onLoginSuccess() {
            this.currentKYCStatus = r
        }
        setWebviewParent(t) {
            this.kycSDK.webViewParent = t
        }
        isKycTriggered() {
            return this.currentKYCStatus.status != a.NotTriggered
        }
        getCurrentKycStatus(t, e, u = !1) {
            if (!n.appConfig.getGeneralConfig().enableKycVerification) return;
            let s = n.config.getStringData("WEB_API_GET_KYC_STATUS", !0);
            s += `?autoCreate=${u}`, n.http.sendRequestV2(s, null, (e => {
                e && 0 != Object.keys(e).length || (e = r), this.currentKYCStatus = e, t(e)
            }), e, n.http.HttpRequestType.POST)
        }
        checkAndShowKycStatusPopup(t, e = null) {
            this.getCurrentKycStatus((n => {
                if (this.isKycTriggered() && this.canShowKycStatusPopup(n)) {
                    const u = this.getKycPopupStatusType(n.status);
                    s.getInstance().showPopup({
                        popupType: u,
                        confirmCallback: u == c.REQESTED ? t : null,
                        parentNode: e
                    })
                }
            }))
        }
        getKycPopupStatusType(t) {
            let e = c.APPROVED;
            switch (t) {
                case a.Pending:
                case a.PaymentPending:
                case a.PaymentOnHold:
                case a.Unverified:
                case a.NotTriggered:
                    e = c.REQESTED;
                    break;
                case a.Succeed:
                case a.PaymentApproved:
                    e = c.APPROVED;
                    break;
                case a.Failed:
                case a.PaymentRejected:
                    e = c.REJECTED
            }
            return e
        }
        showKYCStatusPopup(t, e, n = null) {
            const u = this.getKycPopupStatusType(t);
            s.getInstance().showPopup({
                popupType: u,
                confirmCallback: u == c.REQESTED ? e : null,
                parentNode: n
            })
        }
        canShowKycStatusPopup(t) {
            const e = this.getKycPopupStatusType(t.status),
                u = c[e],
                s = this.kycStatusPoupMaxShowCount[u];
            let i = !1;
            e == c.REQESTED && this.resetKycStatusPopupCountData();
            let o = n.Number(n.tools.GetStringByCCFile("KycStatusPopupCount_" + u));
            return (-1 == s || o < s) && (i = !0, o++, n.tools.SaveStringByCCFile("KycStatusPopupCount_" + u, o.toString())), i = i && this.isAnyDocumentPending(t.documents), i
        }
        isAnyDocumentPending(t) {
            if (t && t.length > 0)
                for (let e = 0; e < t.length; e++)
                    if (t[e].status == o.Pending) return !0;
            return !1
        }
        resetKycStatusPopupCountData() {
            n.tools.SaveStringByCCFile("KycStatusPopupCount_" + c[c.REQESTED], "0"), n.tools.SaveStringByCCFile("KycStatusPopupCount_" + c[c.REJECTED], "0"), n.tools.SaveStringByCCFile("KycStatusPopupCount_" + c[c.APPROVED], "0")
        }
        verifyDocument(t) {
            if (Object.values(i).includes(t)) {
                let e = this.currentKYCStatus.documents.find((e => e.type === t));
                e && this.kycSDK.verifyDocument(e)
            } else this.kycSDK.verifyDocument(t)
        }
        reInitiateDocumentUpload(t) {
            let e = this.currentKYCStatus.documents.find((e => e.type == t));
            n.http.sendRequestV2(n.config.getStringData("WEB_API_KYC_DOCUMENT_REINITIATE", !0), {
                documentId: e.id,
                userId: n.dataHandler.getUserData().getUserIdS()
            }, this.onDocumentReuploadSuccess.bind(this, e), this.onDocumentReuploadFailure.bind(this), n.http.HttpRequestType.POST)
        }
        onDocumentReuploadSuccess(t, e) {
            e && e.url && (t.url = e.url, this.verifyDocument(t))
        }
        onDocumentReuploadFailure() {
            console.error("Document reupload request failed")
        }
    }
    t("KYCFacade", p), p.instance = null, e._RF.pop()
}
import * as t from "./cc.js";
import * as n from "./cc.js";
import * as s from "./cv.js";
import * as i from "./CrashTracing.js";
import * as a from "./CrashTracing.js";
import * as r from "./Enum.js";
import * as o from "./Enum.js";
import * as c from "./Enum.js";

function main() {
    var u, l;
    t._RF.push({}, "8598cFXraNHTrbZ+DVMikcr", "KYCHandler", void 0);
    const {
        ccclass: g,
        property: d
    } = n;
    let h = e("eKycType", function(e) {
            return e[e.Curp = 0] = "Curp", e[e.Ndrp = 1] = "Ndrp", e
        }({})),
        S = e("eKycValue", function(e) {
            return e[e.None = 0] = "None", e[e.Defined = 1] = "Defined", e
        }({})),
        p = e("eKycState", function(e) {
            return e[e.Succeed = 0] = "Succeed", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e
        }({})),
        C = e("eKycUrlActionValue", function(e) {
            return e.D24PaymentOption = "D24PaymentOption", e.PostWithdrawal = "PostWithdrawal", e.Login = "Login", e.Registration = "Registration", e
        }({})),
        y = e("eKycResult", function(e) {
            return e.Approved = "Approved", e.Pending = "Pending", e.Rejected = "Rejected", e
        }({}));
    e("default", g(((l = class e {
        constructor() {
            this.casesType = [], this.hallScene = null, this.isRegistrationCase = !1, s.MessageCenter.register(s.Enum.MessageCenterAction.OnLoginSuccess, this.clearAllKycCases.bind(this), this)
        }
        static getInstance() {
            return e.instance || (e.instance = new e), e.instance
        }
        setHallRef(e) {
            this.hallScene = e
        }
        removeHallRef() {
            this.hallScene = null
        }
        clearAllKycCases() {
            this.casesType = []
        }
        createCaseType(e) {
            let t = e;
            if (null == t.state && (t.state = p.Pending), null == t.value && (t.value = S.None), null == t.isProcessing && (t.isProcessing = !1), null == t.isRunInBackground && (t.isRunInBackground = !0), null == t.isShowingLoading && (t.isShowingLoading = !1), !t.urlActionValue) switch (e.type) {
                case h.Curp:
                    t.urlActionValue = C.D24PaymentOption;
                    break;
                case h.Ndrp:
                    t.urlActionValue = this.isRegistrationCase ? C.Registration : C.Login;
                    break;
                default:
                    t.urlActionValue = C.D24PaymentOption
            }
            return t
        }
        checkStatus(e, t = !1) {
            this.isRegistrationCase = t, e.type == h.Ndrp && this.clearAllKycCases();
            let n = this.casesType.find((t => t.type == e.type));
            if (n || (n = this.createCaseType(e), this.casesType.push(n)), n.value == S.Defined) return null == n.onCBCheckStatusSuccess || n.onCBCheckStatusSuccess(), n.isShowingLoading && s.hideAndClearAllMsgInQueue(), void(n.isShowingLoading = !1);
            if (1 == n.isProcessing) return n.isShowingLoading = !0, void s.popUp.showMsgI18n({
                title: "Loading",
                txt: "CURP_Fetching",
                iconType: c.Loading,
                hideOkayBtn: !0
            });
            0 == n.isRunInBackground && (n.isShowingLoading = !0, s.popUp.showMsgI18n({
                title: "Loading",
                txt: "CURP_Fetching",
                iconType: c.Loading,
                hideOkayBtn: !0
            })), n.isProcessing = !0;
            let i = s.config.getStringData("WEB_API_PAYMENTS_REQUIREMENTS", !0);
            i += `?action=${n.urlActionValue}`;
            let a = null,
                o = null;
            switch (n.type) {
                case h.Curp:
                    a = this.onCheckCurpStatusSuccess.bind(this), o = this.onCheckCurpStatusFail.bind(this);
                    break;
                case h.Ndrp:
                    a = this.onCheckNDRPStatusSuccess.bind(this), o = this.onCheckNDRPStatusFail.bind(this)
            }
            s.http.sendRequestV2(i, null, a, o, s.http.HttpRequestType.GET, s.http.HttpParseType.NONE, !1, !1, !1, null, !0)
        }
        onCheckStatusSuccess(e) {
            let t = this.casesType.find((t => t.type == e));
            t.isProcessing = !1, t.value = S.Defined, null == t.onCBCheckStatusSuccess || t.onCBCheckStatusSuccess(), t.isShowingLoading && s.hideAndClearAllMsgInQueue(), t.isShowingLoading = !1
        }
        onCheckCurpStatusSuccess(e) {
            this.onCheckStatusSuccess(h.Curp)
        }
        onCheckNDRPStatusSuccess(e) {
            this.onCheckStatusSuccess(h.Ndrp)
        }
        onChecStatusFail(e, t) {
            if (!e) return null;
            let n = this.casesType.find((e => e.type == t));
            if (n.isProcessing = !1, !e.failedKycCases) {
                if (t == h.Ndrp || n.isShowingLoading || 0 == n.isRunInBackground) {
                    var c;
                    let r = "KYC_Verification_Pending",
                        u = s.config.getStringData(r);
                    "timeout" == e && (r = "100158", u = s.config.getStringData("serverErrorCode" + r)), null != e.code && (r = e.code, u = s.config.getStringData("serverErrorCode" + e.code, !1, e.description || "Unknown error occured")), u || (u = s.config.getStringData("Something_Went_Wrong"));
                    let l = t == h.Curp ? o.CURPServerError : o.NDRPServerError;
                    s.popUp.showMsg({
                        txt: u,
                        isTwoBtn: !0,
                        sureCallback: () => this.checkStatus(n),
                        sureLabel: s.config.getStringData("Hotupdate_retrybtn"),
                        cancelLabel: s.config.getStringData("BackBtnText"),
                        cancelCallback: this._onSignOut.bind(this, l),
                        msgType: s.Enum.ToastType.ToastTypeError
                    });
                    let g = t == h.Curp ? "Check_CURP_Status_Failed" : "Check_NDRP_Status_Failed";
                    null == (c = i.getInstance()) || c.trace(a.KYC, g, {
                        ErrorType: "KycServerError",
                        ErrorCode: r
                    }), n.isShowingLoading = !1
                }
                return null
            }
            return n
        }
        onCheckNDRPStatusFail(e) {
            const t = this.onChecStatusFail(e, h.Ndrp);
            let n = !1;
            if (t) {
                let i = e.failedKycCases;
                for (let e = 0; e < i.length; e++)
                    if ("NdrpVerification" == i[e].caseType) {
                        n = !0, t.isShowingLoading && s.hideAndClearAllMsgInQueue(), t.isShowingLoading = !1;
                        const a = i[e].kycStatus;
                        if ("Approved" == a) null == t.onCBKycStatus || t.onCBKycStatus(y.Approved);
                        else if ("Pending" == a) null == t.onCBKycStatus || t.onCBKycStatus(y.Pending);
                        else if ("Failed" == a) return void(null == t.onCBKycStatus || t.onCBKycStatus(y.Rejected));
                        break
                    } n || null == t.onCBCheckStatusSuccess || t.onCBCheckStatusSuccess();
                let a = i.find((({
                    caseType: e
                }) => "PaymentKycVerification" == e));
                s.dataHandler.getUserData().hasBoInitiatedKyc = !!a
            }
        }
        onCheckCurpStatusFail(e) {
            const t = this.onChecStatusFail(e, h.Curp);
            if (t) {
                let o = e.failedKycCases;
                for (let e = 0; e < o.length; e++) {
                    var n, c;
                    if ("CurpVerification" == o[e].caseType)
                        if ("Pending" == o[e].kycStatus) null == (n = this.hallScene) || n.showUserInfoForm(o[e].formData, "WEB_API_FORMS_KYC", "post", {
                            title: "CURP_Deposit",
                            subtitle: "CURP_Provide",
                            sureLabel: "Confirm",
                            iconType: r.KYC,
                            callbackSubmitSuccess: () => this.submitFormSuccess(t),
                            callbackCloseForm: () => null == t.onCBCancelForm ? void 0 : t.onCBCancelForm()
                        }), t.isShowingLoading && s.hideAndClearAllMsgInQueue(), t.isShowingLoading = !1, null == t.onCBKycStatus || t.onCBKycStatus(y.Pending);
                        else null == (c = i.getInstance()) || c.trace(a.KYC, "Check_CURP_Status_Failed", {
                            ErrorType: "KycStatus",
                            ErrorCode: o[e].kycStatus
                        })
                }
            }
        }
        submitFormSuccess(e) {
            e.state = p.Succeed, e.isProcessing = !1, e.value = S.Defined, s.popUp.showMsgI18n({
                txt: s.config.getStringData("CURP_Saved"),
                cancelLabel: s.config.getStringData("close"),
                msgType: s.Enum.ToastType.ToastTypeSuccess
            })
        }
        _onSignOut(e) {
            s.netWorkManager.Logout(!0, null, e)
        }
    }).instance = null, u = l)) || u);
    t._RF.pop()
}
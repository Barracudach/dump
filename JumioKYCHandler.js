import * as t from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./JumioWebview.js";
import * as h from "./cv.js";

function main() {
    t._RF.push({}, "a81beXlE51BoIJ980DyrHdf", "JumioKYCHandler", void 0);
    let I = e("JUMIO_CHECK_TYPE", function(e) {
            return e.ID = "Id", e.FACIAL = "Selfie", e
        }({})),
        d = e("JUMIO_IDENTITY_FAILED_TYPE", function(e) {
            return e[e.FAILED_ON_JUMIO_INITIALLY = 0] = "FAILED_ON_JUMIO_INITIALLY", e[e.FAILED_ON_IDENTIFICATION = 1] = "FAILED_ON_IDENTIFICATION", e
        }({})),
        _ = e("NVWatchlistScreening", function(e) {
            return e[e.DEFAULT = 0] = "DEFAULT", e[e.ENABLED = 1] = "ENABLED", e[e.DISABLED = 2] = "DISABLED", e
        }({})),
        p = e("KYCRequestType", function(e) {
            return e.None = "", e.Deposit = "Deposit", e.Withdrawal = "Withdrawal", e.Login = "Login", e
        }({})),
        T = e("KYCWorkFlowType", function(e) {
            return e[e.ID_ONLY_CAMERA_UPLOAD = 100] = "ID_ONLY_CAMERA_UPLOAD", e[e.ID_ONLY_CAMERA = 101] = "ID_ONLY_CAMERA", e[e.ID_ONLY_UPLOAD = 102] = "ID_ONLY_UPLOAD", e[e.ID_IDENTITY_CAMERA_UPLOAD = 200] = "ID_IDENTITY_CAMERA_UPLOAD", e[e.ID_IDENTITY_CAMERA = 201] = "ID_IDENTITY_CAMERA", e[e.ID_IDENTITY_UPLOAD = 202] = "ID_IDENTITY_UPLOAD", e
        }({}));
    class g {
        constructor() {
            this.scanReference = null, this.scanType = I.FACIAL, this.requestType = p.None, this.successHandler = null, this.failHandler = null, this.successCustomMsgKey = null, this.requestScreening = _.DEFAULT, this.screeningSearchProfile = "", this.userReference = "", this.jumioWebview = null, this.jumioWebview_prefab = null, this.JUMIO_PREFAB_PATH = "prefabs/JumioWebview", this.JUMIO_CALLBACK_SUCCESS = "https://netverify.com/success", this.JUMIO_CALLBACK_ERROR = "https://netverify.com/error"
        }
        static getInstance() {
            return g.instance || (g.instance = new g, g.instance.init()), g.instance
        }
        init() {
            if (!h.appConfig.isLandscapeLayout) return;
            let e = i.getBundle(h.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : i.loadBundle(h.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        startLoginKYC(e, t) {
            this.startJumioProcess(!0, p.Login, e, t, null, !1)
        }
        startDepositKYC(e, t) {
            this.startJumioProcess(!1, p.Deposit, e, t, "Deposit_After_Jumio_Success", !0)
        }
        startWithdrawKYC(e, t) {
            this.startJumioProcess(!0, p.Withdrawal, e, t, null, !1)
        }
        startJumioProcess(e, t, i, s, n, o) {
            this.scanType = e ? I.FACIAL : I.ID, this.requestType = t, this.successHandler = i, this.failHandler = s, this.successCustomMsgKey = n, this.userReference = h.appConfig.jurisdiction.toString() + "_" + h.dataHandler.getUserData().getUserIdS(), this.requestScreening = !0 === o ? _.ENABLED : !1 === o ? _.DISABLED : _.DEFAULT;
            let a = h.config.getStringData("WEB_API_GET_JUMIO_CREDENTIAL", !0);
            a += "?CredentialsType=JumioSecurityToken", h.http.sendRequestV2(a, null, this.onFetchingJumioCredentialSuccess.bind(this, e), this.onFetchingJumioCredentialFailure.bind(this), h.http.HttpRequestType.GET)
        }
        restartJumioKYCProcess() {
            s.isNative && (s.os === s.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/JumioKYCHandler", "restartNetverify", "()V") : s.os === s.OS.IOS && n.reflection.callStaticMethod("NetverifyStartViewController", "restartNetverify"))
        }
        onFetchingJumioCredentialSuccess(e, t) {
            let i = t.token,
                o = t.secret;
            s.isNative && s.os === s.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/JumioKYCHandler", "startNetverify", "(Ljava/lang/String;Ljava/lang/String;ZILjava/lang/String;Ljava/lang/String;)V", i, o, e, this.requestScreening, this.screeningSearchProfile, this.userReference) : s.isNative && s.os === s.OS.IOS ? n.reflection.callStaticMethod("NetverifyStartViewController", "startNetverify:apiSecret:andFacialRequired:requestScreening:screeningSearchProfile:userReference:", i, o, e, this.requestScreening, this.screeningSearchProfile, this.userReference) : !s.isNative || s.os !== s.OS.OSX && s.os !== s.OS.WINDOWS ? this.startWebViewJumio(i, o, !0) : this.startWebViewJumio(i, o, !1)
        }
        startWebViewJumio(e, t, i) {
            let s = o.getScene();
            if (null != this.jumioWebview_prefab && (this.jumioWebview = a(this.jumioWebview_prefab)), c(this.jumioWebview, !0)) {
                s.addChild(this.jumioWebview), this.jumioWebview.active = !1;
                let n = this.jumioWebview.getComponent(l).webView;
                i || n.setJavascriptInterfaceScheme("https"), n.setOnJSCallback(((e, t) => {
                    this.jumioPageCallbacks(t)
                }));
                let o = e + ":" + t,
                    a = h.base64.encode(o),
                    c = h.config.getStringData("WEB_API_GET_JUMIO_INITIATE", !0),
                    r = {
                        workflowId: (this.scanType, I.FACIAL, T.ID_ONLY_CAMERA_UPLOAD),
                        locale: "en-GB",
                        userReference: this.userReference,
                        customerInternalReference: this.userReference,
                        successUrl: this.JUMIO_CALLBACK_SUCCESS,
                        errorUrl: this.JUMIO_CALLBACK_ERROR
                    },
                    u = {
                        Authorization: "Basic " + a,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "User-Agent": h.appConfig.jurisdiction + " /v" + h.config.GET_CLIENT_VERSION()
                    };
                h.http.sendRequestV2(c, r, this.onInitiateJumioSuccess.bind(this), this.onInitiateJumioFail.bind(this), h.http.HttpRequestType.POST, null, null, null, null, u)
            }
        }
        jumioPageCallbacks(e) {
            if (e.includes(this.JUMIO_CALLBACK_SUCCESS)) {
                this.jumioWebview.active = !1;
                var t = e.split("&");
                for (let e = 0; e < t.length; e++)
                    if (t[e].includes("transactionReference")) {
                        var i = t[e].split("=");
                        g.onNativeJumioKYCCallback(i[1])
                    }
            } else e.includes(this.JUMIO_CALLBACK_ERROR) && (this.jumioWebview.active = !1, g.onNativeJumioKYCCallback(null))
        }
        onInitiateJumioSuccess(e) {
            if (c(this.jumioWebview, !0)) {
                this.jumioWebview.active = !0, this.jumioWebview.getComponent(l).webView.url = e.redirectUrl
            }
        }
        onInitiateJumioFail(e) {
            this.jumioWebview.active = !1, h.popUp.showMsgI18n({
                txt: "Jumio_Failed_Response",
                msgType: h.Enum.ToastType.ToastTypeError
            })
        }
        onBundleLoaded(e, t) {
            e ? r(e.message || e) : t.load(this.JUMIO_PREFAB_PATH, u, function(e, t) {
                e ? r(e.message || e) : this.jumioWebview_prefab = t
            }.bind(this))
        }
        onFetchingJumioCredentialFailure(e) {
            let t = "Unknown error occured";
            null != e ? (null != e.code && (t = "Error code: " + e.code), null != e.description && (t = e.description), h.TT.showMsg(t, h.Enum.ToastType.ToastTypeError)) : h.TT.showMsg(h.config.getStringData("ErrorUnknown"), h.Enum.ToastType.ToastTypeError)
        }
        postJumioScanReference() {
            let e = h.config.getStringData("WEB_API_POST_JUMIO_SCAN_REFERENCE", !0),
                t = {
                    location: h.native.GetLocation(),
                    deviceUuid: h.native.GetDeviceUUID(),
                    kycRequestType: this.requestType,
                    checkType: this.scanType,
                    scanReference: this.scanReference
                };
            h.http.sendRequestV2(e, t, this.onScanRefSubmittedSuccess.bind(this), this.onScanRefSubmittedSuccess.bind(this), h.http.HttpRequestType.POST)
        }
        onScanRefSubmittedSuccess(e) {
            h.SwitchLoadingView.hide(), null != e ? "Succeed" == e.status ? (this.scanReference = null, this.onJumioIdentificationSuccess()) : "Pending" == e.status ? this.onJumioIdentificationPending() : (this.scanReference = null, this.onJumioIdentificationFailure(d.FAILED_ON_IDENTIFICATION)) : (this.scanReference = null, this.onJumioIdentificationFailure(d.FAILED_ON_IDENTIFICATION))
        }
        getJumioDocumentUpdationStatus() {
            h.SwitchLoadingView.show(h.config.getStringData("Document_Verification_InProgress")), setTimeout(this.fetchJumioStatus.bind(this), 8e3)
        }
        fetchJumioStatus() {
            let e = "?CheckType=" + this.scanType + "&ScanReference=" + this.scanReference,
                t = h.config.getStringData("WEB_API_GET_JUMIO_STATUS", !0) + e;
            h.http.sendRequestV2(t, {}, this.onScanRefSubmittedSuccess.bind(this), this.onScanRefSubmittedSuccess.bind(this), h.http.HttpRequestType.GET)
        }
        onJumioIdentificationFailure(e) {
            e == d.FAILED_ON_JUMIO_INITIALLY ? h.popUp.showMsgI18n({
                txt: "Jumio_Failed_Response",
                sureCallback: this.failHandler,
                msgType: h.Enum.ToastType.ToastTypeError
            }) : e == d.FAILED_ON_IDENTIFICATION && h.popUp.showMsgI18n({
                txt: "KYC_Verification_Failed",
                sureCallback: this.failHandler,
                msgType: h.Enum.ToastType.ToastTypeError
            })
        }
        onJumioIdentificationSuccess() {
            h.popUp.showMsgI18n({
                txt: this.successCustomMsgKey || "KYC_Verification_Success",
                sureCallback: this.successHandler,
                msgType: h.Enum.ToastType.ToastTypeSuccess
            })
        }
        onJumioIdentificationPending() {
            h.popUp.showMsgI18n({
                txt: "KYC_Verification_Pending",
                isTwoBtn: !0,
                sureCallback: this.getJumioDocumentUpdationStatus.bind(this),
                cancelCallback: this.failHandler,
                msgType: h.Enum.ToastType.ToastTypeWarning
            })
        }
        static onNativeJumioKYCCallback(e) {
            g.getInstance().scanReference = e, e && e.length > 0 ? h.popUp.showMsgI18n({
                txt: "Jumio_Identity_Success",
                sureCallback: g.getInstance().pushScanIdToDB.bind(g.getInstance()),
                msgType: h.Enum.ToastType.ToastTypeSuccess
            }) : (g.getInstance().scanReference = null, g.getInstance().onJumioIdentificationFailure(d.FAILED_ON_JUMIO_INITIALLY))
        }
        pushScanIdToDB() {
            h.SwitchLoadingView.show(h.config.getStringData("Document_Verification_InProgress")), setTimeout(this.postJumioScanReference.bind(this), 8e3)
        }
    }
    e("JumioKYCHandler", g), g.instance = null, window.NativeJumioKYCCallback = g.onNativeJumioKYCCallback, t._RF.pop()
}
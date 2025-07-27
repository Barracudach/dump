import * as t from "./cc.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as c from "./CommonWebView.js";

function main() {
    i._RF.push({}, "ed5bbVo4K5N8pF4O/PG7lKL", "JumioSDK", void 0);
    e("JumioSDK", class {
        constructor() {
            this.webViewParent = void 0, this.jumioWebview = null, this.webViewComponent = null, this.jumioWebview_prefab = null, this.WEBVIEW_PREFAB_PATH = "prefabs/KycWebview", this.currentKycCase = void 0
        }
        initialize() {
            let e = t.getBundle(l.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : t.loadBundle(l.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, i) {
            e || i.load(this.WEBVIEW_PREFAB_PATH, s, function(e, i) {
                e || (this.jumioWebview_prefab = i)
            }.bind(this))
        }
        verifyDocument(e) {
            if (this.currentKycCase = e, this.jumioWebview && (l.MessageCenter.unregister("on_webCcjsCallback", this.jumioWebview), this.jumioWebview.destroy()), null != this.jumioWebview_prefab && (this.jumioWebview = o(this.jumioWebview_prefab), l.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.jumioWebview)), n(this.jumioWebview, !0)) {
                this.webViewParent.addChild(this.jumioWebview, l.Enum.ZORDER_TYPE.ZORDER_0), this.jumioWebview.active = !1, this.webViewComponent = this.jumioWebview.getComponent(c);
                let e = this.webViewComponent.webView;
                e.url = "about:blank", this.webViewComponent.setSchemeName("https"), a.isNative && e.setOnJSCallback(((e, i) => {
                    this.documentUploadCallback(i)
                })), this.jumioWebview.active = !0, this.webViewComponent.reset(this.currentKycCase.url), this.webViewComponent.setShouldShowWebview(!0)
            }
        }
        documentUploadCallback(e = "") {
            e.includes(this.currentKycCase.successUrl) ? (this.jumioWebview.active = !1, l.MessageCenter.send("kyc_document_uploaded", this.currentKycCase)) : e.includes(this.currentKycCase.failUrl) ? this.jumioWebview.active = !1 : this.webViewComponent.eventFromWebView(e)
        }
        on_webCcjsCallback(e) {
            var i, t;
            if (!e || "string" != typeof e) return void u(`data send from webview should be string, event is: ${e}`);
            let s;
            try {
                s = JSON.parse(e)
            } catch (e) {
                return void u(`Failed to parse data from webview: ${e.message}`)
            }
            "success" == (null == (i = s.payload) ? void 0 : i.value) && this.documentUploadCallback(this.currentKycCase.successUrl), "error" == (null == (t = s.payload) ? void 0 : t.value) && this.documentUploadCallback(this.currentKycCase.failUrl)
        }
    }), i._RF.pop()
}
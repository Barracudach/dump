import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./md5.mjs_cjs=&original=.js";
import * as m from "./ImpokerHall.js";
import * as V from "./mttconfig.js";
import * as C from "./Translator.js";
import * as N from "./AndroidBackButton.js";
import * as f from "./WebViewPrefabControl.js";
import * as v from "./CommonTools.js";

function main() {
    var x, S, W, D, I, T, y, k, L, E;
    o._RF.push({}, "677cean/G1OMJHZ2CPjwcT2", "TopUpPage", void 0);
    const {
        ccclass: O,
        property: P
    } = r;
    e("TopUpPage", (x = P(n), S = P(a), W = P(s), D = P(l), O((y = t((T = class e extends c {
        constructor(...e) {
            super(...e), i(this, "pageTitle", y, this), i(this, "backButton", k, this), i(this, "webViewDefault", L, this), i(this, "webViewPrefab", E, this), this._webViewNode = null, this._hallScript = null, this._title = "", this._returnNode = null, this._scheme = "ccjs", this._webViewHeight = 0
        }
        onLoad() {
            this._hallScript = f.instance.getParentScene(h, this.node).getComponentInChildren(_), this._hallScript && this.init(this._hallScript)
        }
        start() {}
        init(e) {
            cc_mtt.vv.ConsoleLog.log("newHallScript"), this._hallScript = e, this._returnNode = this._hallScript.hallLayer, w.isNative ? this.webViewDefault.active = !1 : this._webViewNode = this.webViewDefault
        }
        setWebViewRect(t, i) {
            var o = h.getScene().getComponentInChildren(e);
            o._webViewNode.getComponent(p).height = o._webViewHeight - i * o._webViewHeight / t
        }
        addWebView(e = 0) {
            w.isNative && w.os === w.OS.ANDROID && C.getInstance().addBackFunction("TopUpPage", this.onBackClicked.bind(this));
            let t = [V("WEBVIEW.TOP_UP"), V("WEBVIEW.WITHDRAW"), V("WEBVIEW.CUSTOMER_SERVICE")];
            this._title = t[e], w.isNative && (this._webViewNode = b(this.webViewPrefab), this._webViewNode.scale = new d(d.ONE), this._webViewNode.parent = this.node, w.os === w.OS.ANDROID && (this._webViewNode.getComponent(g).alignMode = g.AlignMode.ON_WINDOW_RESIZE, setTimeout((() => {
                this._webViewHeight = this._webViewNode.getComponent(p).height, window.setWebViewRect = this.setWebViewRect
            }), 1e3))), [this.callTopUpWebview.bind(this), this.callWithdrawWebview.bind(this), this.callCustomService.bind(this)][e]()
        }
        removeWebView() {
            w.isNative ? (this._webViewNode.getComponent(u).url = "", this._webViewNode.destroy()) : this.webViewDefault.getComponent(u).url = ""
        }
        callTopUpWebview() {
            let e = cc_mtt.vv.DataManager.userData,
                t = e.Id.toString(),
                i = e.Id.toString(),
                o = 6..toString(),
                n = (0).toString(),
                a = (0).toString(),
                s = encodeURIComponent(e.Nickname),
                l = Math.floor((new Date).getTime() / 1e3).toString(),
                r = v(o + t + i + n + a + s + "" + l + "3a7d6a100c22c9506b2d0617aceca0bab3272c75"),
                c = m.paymentUrl + `/?product_id=${o}&user_id=${t}&login_name=${t}&club_id=${n}&union_id=${a}&nickname=${s}&time=${l}&key_code=${r}`,
                h = this._webViewNode.getComponent(u);
            h.setJavascriptInterfaceScheme(this._scheme), h.setOnJSCallback(this.jsCallback), this._webViewNode.getComponent(u).url = c, w.isNative && this._webViewNode.getComponent("WebView").getComponent(N).setWebFinishLoadAction(this.onWebFinishLoad.bind(this))
        }
        generateUUID() {
            var e = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var i = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" === t ? i : 3 & i | 8).toString(16)
            }))
        }
        callWithdrawWebview() {
            let e = cc_mtt.vv.DataManager.userData,
                t = 6..toString(),
                i = e.Id.toString(),
                o = e.Id.toString(),
                n = e.Gold.toString(),
                a = this.generateUUID(),
                s = Math.floor((new Date).getTime() / 1e3).toString(),
                l = v(t + i + o + n + a + s + "3a7d6a100c22c9506b2d0617aceca0bab3272c75"),
                r = m.paymentUrl + `/withdrawal_showInfo?product_id=${t}&user_id=${i}&login_name=${i}&true_amount=${n}&billno=${a}&&time=${s}&key_code=${l}`;
            this._webViewNode.getComponent(u).url = r, w.isNative && this._webViewNode.getComponent("WebView").getComponent(N).setWebFinishLoadAction(this.onWebFinishLoad.bind(this))
        }
        callCustomService() {
            this._webViewNode.getComponent(u).url = "https://800.aspk88.com/chat/chatClient/chatbox.jsp?companyID=9074&configID=141&codeType=custom", w.isNative && this._webViewNode.getComponent(u).getComponent(N).setWebFinishLoadAction(this.onWebFinishLoad.bind(this))
        }
        onWebFinishLoad(e, t) {
            t === u.EventType.LOADED ? this.pageTitle.string = this._title : t === u.EventType.LOADING ? this.pageTitle.string = V("WEBVIEW.LOADING_TITLE") : t === u.EventType.ERROR && (this.pageTitle.string = this._title)
        }
        onBackClicked() {
            w.isNative && w.os === w.OS.ANDROID && C.getInstance().removeBackFunction("TopUpPage"), cc_mtt.vv.ConsoleLog.log("onBackClicked"), this._hallScript.blockLayer && (this._hallScript.blockLayer.active = !0), this._hallScript.movePageToRight(this.node, this._returnNode, (() => {
                setTimeout((() => {
                    this.removeWebView(), this._returnNode = this._hallScript.hallLayer, this._hallScript.blockLayer.active = !1
                }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))
        }
        jsCallback() {
            cc_mtt.vv.ConsoleLog.log("jsCallback", this._webViewNode.getComponent(u).url), this._webViewNode.getComponent(u).url.indexOf("ccjs://") >= 0 && (this._webViewNode.getComponent(u).url = this._webViewNode.getComponent(u).url.replace("ccjs://", ""), this._webViewNode.getComponent(u).url = this._webViewNode.getComponent(u).url.replace("http//", "http://"), this._webViewNode.getComponent(u).url = this._webViewNode.getComponent(u).url.replace("https//", "https://"), this._webViewNode.getComponent(u).url = this._webViewNode.getComponent(u).url.replace("alipays//", "alipays://"), this._webViewNode.getComponent(u).url = this._webViewNode.getComponent(u).url.replace("weixin//", "weixin://"), cc_mtt.vv.ConsoleLog.log("jsCallback coverted url", this._webViewNode.getComponent(u).url), w.openURL(this._webViewNode.getComponent(u).url))
        }
    }).prototype, "pageTitle", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "backButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(T.prototype, "webViewDefault", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(T.prototype, "webViewPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = T)) || I));
    o._RF.pop()
}
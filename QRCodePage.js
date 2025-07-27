import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as u from "./NodePage.js";
import * as h from "./ImpokerHall.js";
import * as m from "./mttconfig.js";
import * as p from "./Translator.js";
import * as C from "./AndroidBackButton.js";

function main() {
    var v, f, w, _, b, D, y, I;
    n._RF.push({}, "baf0d0/wttBLIJtH7LYVXEI", "QRCodePage", void 0);
    const {
        ccclass: A,
        property: B
    } = i;
    t("QRCodePage", (v = B(a), f = B(l), w = B(r), A((D = e((b = class extends s {
        constructor(...t) {
            super(...t), o(this, "agentCode", D, this), o(this, "qrCode", y, this), o(this, "downloadButton", I, this), this._qrCodeUrl = "", this._returnPage = null
        }
        onDestroy() {
            u.releaseImage(this._qrCodeUrl)
        }
        onLoad() {
            let t = cc_mtt.vv.DataManager.loginData.DefaultAgentCode;
            this.agentCode.string = t, this._qrCodeUrl = m.httpRequestURL + "/assoRegister?assoCode=" + t
        }
        start() {
            cc_mtt.vv.AssetsManager.loadWebImage(this.qrCode, {
                url: this._qrCodeUrl,
                type: "png"
            })
        }
        saveToLocal(t) {
            if (c.isNative) try {
                c.os === c.OS.ANDROID ? (cc_mtt.vv.ConsoleLog.log("download Img on android"), d.reflection.callStaticMethod("com/cocos/game/AppActivity", "saveImage", "(Ljava/lang/String;)V", t)) : c.os === c.OS.IOS && (cc_mtt.vv.ConsoleLog.log("download Img on iphone/ipad"), d.reflection.callStaticMethod("AppController", "saveImageToAblum:", t))
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            } else cc_mtt.vv.ConsoleLog.log("download Img on browser"), this.handleBrowserDownload(t)
        }
        handleBrowserDownload(t) {
            let e = new Image;
            e.setAttribute("crossOrigin", "anonymous"), e.onload = function() {
                let t = document.createElement("canvas");
                t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0);
                let o = t.toDataURL(),
                    n = document.createElement("a");
                n.setAttribute("href", o), n.setAttribute("download", `${p("ASSOCIATION.QR_CODE")}.png`), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
            }, e.src = t
        }
        onDownloadClicked() {
            u.coolDownButton(this.downloadButton, this), cc_mtt.vv.ConsoleLog.log("QR download clicked", cc_mtt.vv.DataManager.loginData.DefaultAgentCode), this._qrCodeUrl.length > 0 && this.saveToLocal(this._qrCodeUrl)
        }
        setPage(t) {
            this._returnPage = t
        }
        onBackClicked() {
            c.isNative && c.os === c.OS.ANDROID && C.getInstance().removeBackFunction("QRCodePage");
            let t = g.getScene().getComponentInChildren(h);
            t.controlHallBlockLayer(!0, this.name), t.movePageToRight(this.node, this._returnPage, (() => {
                setTimeout((() => {
                    t.controlHallBlockLayer(!1, this.name)
                }), 100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))
        }
    }).prototype, "agentCode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "qrCode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(b.prototype, "downloadButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = b)) || _));
    n._RF.pop()
}
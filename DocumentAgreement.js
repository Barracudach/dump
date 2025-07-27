import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./DocViewer.js";
import * as l from "./SlideView.js";
import * as d from "./Enum.js";
import * as u from "./Enum.js";
import * as g from "./MessageCenter.js";
import * as p from "./TooltipsManager.js";
import * as w from "./LayoutChildAutoSize.js";
import * as D from "./cv.js";

function main() {
    var m, b, f, B, y, C, L, v, S, M, A, x;
    n._RF.push({}, "9f976eitrZJM5yM64TSVSuh", "DocumentAgreement", void 0);
    const {
        ccclass: k,
        property: V
    } = r;
    e("DocumentAgreement", (m = V(h), b = V(s), f = V(o), B = V(s), y = V(l), k((v = t((L = class extends c {
        constructor(...e) {
            super(...e), i(this, "docViewer", v, this), i(this, "skipBtn", S, this), i(this, "acceptBtn", M, this), i(this, "bottomBar", A, this), i(this, "slideView", x, this), this.eventMgr = new g, this.newLegalDocs = null, this.newLegalDocsKeys = [], this.docIndex = 0
        }
        onEnable() {
            D.MessageCenter.register("onLogout", this.hide.bind(this), this.node), D.MessageCenter.register(u.DismissDocumentPopup, this.hide.bind(this), this.node), p.hideAllTooltips(), D.tools.triggerPopupShowEvent()
        }
        onDisable() {
            D.MessageCenter.unregister("onLogout", this.node), D.MessageCenter.unregister(u.DismissDocumentPopup, this.node), D.tools.triggerPopupHideEvent()
        }
        start() {
            D.resMgr.adaptWidget(this.node, !0, !1), this.node.getComponentsInChildren(a).forEach((e => e.enabled = !0))
        }
        init(e, t) {
            this.newLegalDocs = e, this.newLegalDocsKeys = Object.keys(this.newLegalDocs), this.docIndex = 0, this.show(), this.showBottomBar(t), this.showCurrDoc()
        }
        showCurrDoc() {
            this.skipBtn && (this.skipBtn.active = !1), this.acceptBtn && (this.acceptBtn.interactable = !1);
            const e = D.appConfig.getRegistrationConfig().legalDocumentContentType;
            this.docViewer && this.docViewer.loadDoc(this.newLegalDocsKeys[this.docIndex], this.newLegalDocs[this.newLegalDocsKeys[this.docIndex]], e, this.onDocLoaded.bind(this))
        }
        onDocLoaded(e) {
            this.skipBtn && (this.skipBtn.active = e && 0 == e.required), this.acceptBtn && (this.acceptBtn.interactable = !0)
        }
        goNext() {
            this.docIndex++, this.docIndex < this.newLegalDocsKeys.length ? this.showCurrDoc() : (this.hide(), this.eventMgr.send(d.OnFinish))
        }
        onBtnBack() {
            D.AudioMgr.playButtonSound("back_button.mp3"), this.hide(), this.eventMgr.send(d.OnBack)
        }
        show() {
            this.slideView.show(!1)
        }
        hide() {
            this.slideView.hide()
        }
        onBtnSkip() {
            D.AudioMgr.playButtonSound("button_click.mp3"), this.goNext()
        }
        onBtnAccept() {
            var e;
            if (D.AudioMgr.playButtonSound("button_click.mp3"), null != (e = this.newLegalDocsKeys) && e.length)
                if (this.eventMgr.send(d.OnAccept, this.newLegalDocsKeys[this.docIndex]), D.dataHandler.getUserData() && D.dataHandler.getUserData().getUserIdS()) {
                    let e = D.config.getStringData("WEB_API_USER_ACCEPT_LEGAL_DOC", !0);
                    const t = D.appConfig.getRegistrationConfig().legalDocsNamePrefix;
                    let i = {
                        documentName: this.newLegalDocsKeys[this.docIndex],
                        version: this.newLegalDocs[this.newLegalDocsKeys[this.docIndex]]
                    };
                    t && !i.documentName.startsWith(t) && (i.documentName = t + i.documentName), D.http.sendRequestV2(e, i, this.onAcceptSuccess.bind(this), D.popUp.showFirstServerError.bind(D.popUp))
                } else this.goNext()
        }
        onAcceptSuccess(e) {
            this.goNext()
        }
        showBottomBar(e) {
            var t;
            this.bottomBar && (this.bottomBar.active = e);
            let i = null == (t = this.docViewer) ? void 0 : t.getComponent(w);
            i && i.updateSize()
        }
    }).prototype, "docViewer", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(L.prototype, "skipBtn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(L.prototype, "acceptBtn", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(L.prototype, "bottomBar", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(L.prototype, "slideView", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = L)) || C));
    n._RF.pop()
}
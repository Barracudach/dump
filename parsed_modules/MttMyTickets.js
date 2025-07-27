import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./cv.js";
import * as _ from "./BagPrefab.js";
import * as u from "./MTTConnector.js";
import * as b from "./FakeMultipleGame.js";
import * as y from "./Enum.js";

function main() {
    var f, k, p, w, M, B;
    s._RF.push({}, "66994suEMNDpbScO/nqg//v", "MttMyTickets", void 0);
    const {
        ccclass: C,
        property: v
    } = a;
    e("MttMyTickets", (f = v(n), k = v(o), C((M = t((w = class extends c {
        constructor(...e) {
            super(...e), i(this, "txt_title", M, this), i(this, "btn_back", B, this), this._myTickets_web = null, this._myTickets_url = "&page=2", this.mttUseWebView = !1, this.mttBag = null, this.myTicketsPrefab = null, this.AVERAGE_BACK_WIDTH = 300
        }
        onLoad() {
            this.btn_back.node.on("click", this.onClickBtnBack, this), T.MessageCenter.register(T.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), T.MessageCenter.register("HideWebview_ShowWindows", this.hideMTTWeb.bind(this), this.node), T.MessageCenter.register("show_my_tickets", this.onShowMyTickets.bind(this), this.node), T.MessageCenter.register("hide_my_tickets", this.onHideMyTickets.bind(this), this.node), T.MessageCenter.register(y.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node);
            let e = "";
            e = T.appConfig.isWebApp ? "prefabs/myTickets/my_tickets_pageH5" : "prefabs/myTickets/my_tickets_page", T.resMgr.loadPrefabFromBundle(e, this.onPagePrefabLoaded.bind(this))
        }
        onDestroy() {
            T.MessageCenter.unregister(T.config.CHANGE_LANGUAGE, this.node), T.MessageCenter.unregister("HideWebview_ShowWindows", this.node), T.MessageCenter.unregister("show_my_tickets", this.node), T.MessageCenter.unregister("hide_my_tickets", this.node), T.MessageCenter.unregister(y.OnLoginSuccess, this.node)
        }
        start() {
            this.initLanguage()
        }
        onEnable() {
            this.node.on(T.Enum.CustomEvent.ActionShowFinish, this.show, this), this.mttBag && (this.mttBag.node.active = !0)
        }
        onDisable() {
            this.node.off(T.Enum.CustomEvent.ActionShowFinish, this.show, this)
        }
        onPagePrefabLoaded(e) {
            this.myTicketsPrefab = e, this.show()
        }
        initLanguage() {
            this.txt_title.string = T.config.getStringData("selfView_ScrollView_Button_my_tickets")
        }
        initTickets() {
            this.node.children.forEach((e => {
                e.active = !1
            })), this.node.getComponent(h).enabled = !1
        }
        show() {
            if (this.mttUseWebView) {
                if (!this._myTickets_web) {
                    let e = this.node.getChildByName("web");
                    if (this._myTickets_web = e.addComponent(r), this._myTickets_web.url = T.dataHandler.getUserData().mtt_url + this._myTickets_url, g.isNative) {
                        this._myTickets_web.setJavascriptInterfaceScheme("mttjs");
                        let e = this;
                        this._myTickets_web.setOnJSCallback(((t, i) => {
                            -1 != i.search("mttjs://back-normal") || -1 != i.search("mttjs://back-abnormal") ? (e._myTickets_web && (e._myTickets_web.node.removeComponent(r), e._myTickets_web = null), e.show()) : -1 != i.search("mttjs://WebGL") && (T.config.CAN_USE_WEBGL = !1, e.hide(), T.TT.showMsg(T.config.getStringData("MTT_No_webgl"), T.Enum.ToastType.ToastTypeError))
                        }))
                    }
                }
            } else this.setupMyTicketsView(0)
        }
        onLoginSuccess() {
            this.hideMTTBag()
        }
        setupMyTicketsView(e) {
            if (!T.config.HAVE_MTT || this.mttBag && d(this.mttBag.node)) this.mttBag && d(this.mttBag.node) && (this.node.active = !0, this.mttBag.node.active = !0, this.mttBag.resetBagPage());
            else if (d(this.myTicketsPrefab)) {
                u.instance.initMTTBag();
                let t = l(this.myTicketsPrefab);
                this.mttBag = t.getComponent(_), t.parent = this.node, t.getComponent(m).top = e, this.mttBag.setPage()
            } else console.warn("My Tickets prefab not found")
        }
        destroyMTTBagView() {
            this.mttBag && d(this.mttBag.node) && (this.mttBag.node.targetOff(this), this.mttBag.node.removeFromParent(), this.mttBag.node.destroy()), this.mttBag = null
        }
        hideMTTBag() {
            this.mttUseWebView ? this._myTickets_web && (this._myTickets_web.node.removeComponent(r), this._myTickets_web = null) : this.destroyMTTBagView()
        }
        hide() {
            T.config.setMTTWebIndex(0), this.node.active = !1, this.hideMTTBag()
        }
        onClickBtnBack(e) {
            T.AudioMgr.playButtonSound("back_button"), T.action.showAction(this.node, T.action.eMoveActionDir.EMAD_TO_RIGHT, T.action.eMoveActionType.EMAT_FADE_OUT, T.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                T.config.setMTTWebIndex(0), this.hideMTTBag()
            })), this.onHideMyTickets()
        }
        hideMTTWeb(e) {
            this.mttUseWebView && (this._myTickets_web && (this._myTickets_web.node.active = 1 == e), T.config.isSiyuType() && T.native.SYwebCloseChildWebview())
        }
        onShowMyTickets(e) {
            var t;
            T.appConfig.isLandscapeLayout || (null == (t = b.instance) || t.moveHeaderToRight(this.AVERAGE_BACK_WIDTH))
        }
        onHideMyTickets(e) {
            var t;
            T.appConfig.isLandscapeLayout || (null == (t = b.instance) || t.moveHeaderToLeft())
        }
    }).prototype, "txt_title", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(w.prototype, "btn_back", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = w)) || p));
    s._RF.pop()
}
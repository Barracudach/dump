import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as k from "./cv.js";
import * as _ from "./ResourcesLoader.js";
import * as u from "./BagPrefab.js";
import * as B from "./MTTConnector.js";
import * as m from "./BagRecord.js";
import * as f from "./FakeMultipleGame.js";

function main() {
    var w, T, R, M, C, v, y, A, E, V, L, P;
    a._RF.push({}, "66eccinzB9DjovCMB2/Llt6", "MttBackpack", void 0);
    const {
        ccclass: W,
        property: S
    } = c;
    t("MttBackpack", (w = S(n), T = S(o), R = S(o), M = S(o), C = S(s), W((A = e((y = class extends r {
        constructor(...t) {
            super(...t), i(this, "txt_title", A, this), i(this, "btn_back", E, this), i(this, "btn_record", V, this), i(this, "bag_page_landscape", L, this), i(this, "bag_page", P, this), this._backpack_web = null, this._backpack_url = "&page=2", this.mttUseWebView = !1, this.mttBag = null, this.mttBagRecord = null, this.backpackPrefab = null, this.AVERAGE_BACK_WIDTH = 300
        }
        onLoad() {
            this.btn_back.node.on("click", this.onClickBtnBack, this), this.btn_record.node.on("click", this.onClickBtnRecord, this), k.MessageCenter.register(k.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), k.MessageCenter.register("HideWebview_ShowWindows", this.hideMTTWeb.bind(this), this.node), k.MessageCenter.register("show_back_pack", this.onShowBackPack.bind(this), this.node), k.MessageCenter.register("hide_back_pack", this.onHideBackPack.bind(this), this.node), k.resMgr.adaptWidget(this.node), k.appConfig.isLandscapeLayout ? this.backpackPrefab = this.bag_page_landscape : this.backpackPrefab = this.bag_page
        }
        onDestroy() {
            k.MessageCenter.unregister(k.config.CHANGE_LANGUAGE, this.node), k.MessageCenter.unregister("HideWebview_ShowWindows", this.node), k.MessageCenter.unregister("show_back_pack", this.node), k.MessageCenter.unregister("hide_back_pack", this.node)
        }
        start() {
            this.initLanguage()
        }
        onEnable() {
            this.node.on(k.Enum.CustomEvent.ActionShowFinish, this.show, this)
        }
        onDisable() {
            this.node.off(k.Enum.CustomEvent.ActionShowFinish, this.show, this)
        }
        initLanguage() {
            this.mttBagRecord && h(this.mttBagRecord.node) && this.mttBagRecord.node.active ? this.txt_title.string = k.config.getStringData("selfView_ScrollView_Button_backpack_record") : this.txt_title.string = k.config.getStringData("selfView_ScrollView_Button_backpack")
        }
        initBackpack() {
            this.node.children.forEach((t => {
                t.active = !1
            })), this.node.getComponent(d).enabled = !1
        }
        show() {
            if (this.mttUseWebView) {
                if (!this._backpack_web) {
                    let t = this.node.getChildByName("web");
                    if (this._backpack_web = t.addComponent(g), this._backpack_web.url = k.dataHandler.getUserData().mtt_url + this._backpack_url, l.isNative) {
                        this._backpack_web.setJavascriptInterfaceScheme("mttjs");
                        let t = this;
                        this._backpack_web.setOnJSCallback(((e, i) => {
                            -1 != i.search("mttjs://back-normal") || -1 != i.search("mttjs://back-abnormal") ? (t._backpack_web && (t._backpack_web.node.getComponent(g).destroy(), t._backpack_web = null), t.show()) : -1 != this._backpack_web.url.search("mttjs://WebGL") && (k.config.CAN_USE_WEBGL = !1, t.hide(), k.TT.showMsg(k.config.getStringData("MTT_No_webgl"), k.Enum.ToastType.ToastTypeError))
                        }))
                    }
                }
            } else this.setupBackpackView(0)
        }
        setupBackpackView(t) {
            if (!k.config.HAVE_MTT || this.mttBag && h(this.mttBag.node)) this.mttBag && h(this.mttBag.node) && (this.node.active = !0, this.mttBag.node.active = !0, this.mttBag.resetBagPage());
            else if (h(this.backpackPrefab)) {
                B.instance.initMTTBag();
                let e = b(this.backpackPrefab);
                this.mttBag = e.getComponent(u), e.parent = this.node, e.getComponent(p).top = t, this.mttBag.setPage()
            } else console.warn("Backpack prefab not found")
        }
        destroyMTTBagView() {
            console.log("destroyMTTBagView", this.mttBag), this.mttBag && h(this.mttBag.node) && (this.mttBag.node.targetOff(this), this.mttBag.node.removeFromParent(), this.mttBag.node.destroy()), this.mttBag = null
        }
        destroyMTTBagRecordView() {
            console.log("destroyMTTBagRecordView", this.mttBag), this.mttBagRecord && h(this.mttBagRecord.node) && (this.mttBagRecord.node.targetOff(this), this.mttBagRecord.node.removeFromParent(), this.mttBagRecord.node.destroy()), this.mttBagRecord = null
        }
        hideMTTBag() {
            this.mttUseWebView ? this._backpack_web && (this._backpack_web.node.removeComponent(g), this._backpack_web = null) : (this.destroyMTTBagView(), this.destroyMTTBagRecordView())
        }
        hide() {
            k.config.setMTTWebIndex(0), this.node.active = !1, this.hideMTTBag()
        }
        showRecord(t) {
            this.btn_record.node.active = !t, this.mttBag.node.active = !t, this.mttBagRecord.node.active = t, this.initLanguage()
        }
        onClickBtnBack(t) {
            if (this.mttBagRecord && h(this.mttBagRecord.node) && this.mttBagRecord.node.active) return this.showRecord(!1), void this.mttBag.resetBagPage(!1);
            k.AudioMgr.playButtonSound("back_button"), k.action.showAction(this.node, k.action.eMoveActionDir.EMAD_TO_RIGHT, k.action.eMoveActionType.EMAT_FADE_OUT, k.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                k.config.setMTTWebIndex(0), this.hideMTTBag()
            })), this.onHideBackPack()
        }
        onClickBtnRecord(t) {
            !k.config.HAVE_MTT || this.mttBagRecord && h(this.mttBagRecord.node) ? this.mttBagRecord && h(this.mttBagRecord.node) && (this.showRecord(!0), this.mttBagRecord.resetBagRecordPage()) : _.instance.loadRes("mtt/hall/bag_record_page", s, null, ((t, e) => {
                if (k.config.HAVE_MTT && (!this.mttBagRecord || !h(this.mttBagRecord.node)))
                    if (!t && h(e)) {
                        let t = b(e);
                        this.mttBagRecord = t.getComponent(m), t.parent = this.node, t.getComponent(p).top = 190, this.showRecord(!0), this.mttBagRecord.setPage()
                    } else console.log(t)
            }))
        }
        hideMTTWeb(t) {
            this.mttUseWebView && (this._backpack_web && (this._backpack_web.node.active = 1 == t), k.config.isSiyuType() && k.native.SYwebCloseChildWebview())
        }
        onShowBackPack(t) {
            var e;
            k.appConfig.isLandscapeLayout || (null == (e = f.instance) || e.moveHeaderToRight(this.AVERAGE_BACK_WIDTH))
        }
        onHideBackPack(t) {
            var e;
            k.appConfig.isLandscapeLayout || (null == (e = f.instance) || e.moveHeaderToLeft())
        }
    }).prototype, "txt_title", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(y.prototype, "btn_back", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(y.prototype, "btn_record", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(y.prototype, "bag_page_landscape", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(y.prototype, "bag_page", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = y)) || v));
    a._RF.pop()
}
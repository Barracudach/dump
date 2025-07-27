import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as I from "./cv.js";
import * as _ from "./MiniGamePopup.js";
import * as w from "./AppConfig.js";
import * as M from "./TagCom.js";

function main() {
    var U, y, S, v, G, k, T, L, E, R, B, O, F, D, N, W, A, H;
    o._RF.push({}, "d919cvgfnRCo7b91lDGyT6L", "MiniGamePopupManager", void 0);
    const {
        ccclass: z,
        property: V
    } = r;
    let x = e("MiniGamePopupId", function(e) {
            return e[e.CowBoy = 10] = "CowBoy", e[e.HumanBoy = 30] = "HumanBoy", e[e.VideoCowboy = 50] = "VideoCowboy", e[e.PokerMaster = 70] = "PokerMaster", e[e.WelcomePokerFlip = 1001] = "WelcomePokerFlip", e[e.WelcomePokerMaster = 1002] = "WelcomePokerMaster", e[e.IntroPokerFlip = 1003] = "IntroPokerFlip", e[e.IntroPokerMaster = 1004] = "IntroPokerMaster", e[e.WelcomeVideoCowboy = 1005] = "WelcomeVideoCowboy", e[e.InFoVideoCowboy = 1006] = "InFoVideoCowboy", e
        }({})),
        Z = (U = z("MiniGamePopupType"), y = V({
            type: i(x)
        }), S = V(s), v = V(p), U((T = t((k = class {
            constructor() {
                n(this, "popupType", T, this), n(this, "prefab", L, this), n(this, "useSwipe", E, this)
            }
        }).prototype, "popupType", [y], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return x.CowBoy
            }
        }), L = t(k.prototype, "prefab", [S], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), E = t(k.prototype, "useSwipe", [v], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !0
            }
        }), G = k)) || G);
    e("default", (R = V(a), B = V(a), O = V(Z), z(((H = class e extends l {
        constructor(...e) {
            super(...e), n(this, "contentParent", N, this), n(this, "swipeIndicator", W, this), n(this, "prefabPopupList", A, this), this.popUpPrefab = null, this.popUpNode = null, this.popUp = null, this.showPromoOnPopUpClose = !1, this.subPopup = null, this.curGameId = 0, this._onHide = null, this._onUpdateContent = null, this._onSelectItem = null, this._compareFn = null, this._datas = null, this._sureCallback = null, this._cbSelectedItem = null, this._curSceneName = null, this._activeParams = null
        }
        static getInstance() {
            return e.g_instance && e.g_instance.popUpPrefab || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        onLoad() {}
        onEnable() {
            I.MessageCenter.register(I.Enum.MessageCenterAction.OnMiniGamesListResponse, this.updateSubpopup.bind(this), this.node), I.MessageCenter.register(I.Enum.MessageCenterAction.OnListviewItemSelected, this.onSelectItem.bind(this), this.node), I.MessageCenter.register("onPopupClose", this.hide.bind(this), this.node), I.MessageCenter.register("onSureCallback", this.onSureCallback.bind(this), this.node), I.MessageCenter.register("onRefeshLayout", this.onRefeshLayout.bind(this), this.node), I.MessageCenter.register("onTabChanged", this.onTabChange.bind(this), this.node), I.appConfig.getGeneralConfig().multiWindowEnabled && I.roomManager.checkIsSceneMiniGame(this._curSceneName) || I.tools.triggerPopupShowEvent()
        }
        onDisable() {
            var e;
            I.MessageCenter.unregister(I.Enum.MessageCenterAction.OnMiniGamesListResponse, this.node), I.MessageCenter.unregister(I.Enum.MessageCenterAction.OnListviewItemSelected, this.node), I.MessageCenter.unregister("onPopupClose", this.node), I.MessageCenter.unregister("onSureCallback", this.node), I.MessageCenter.unregister("onRefeshLayout", this.node), I.MessageCenter.unregister("onTabChanged", this.node), I.appConfig.getGeneralConfig().multiWindowEnabled && I.roomManager.checkIsSceneMiniGame(this._curSceneName) || I.tools.triggerPopupHideEvent(), null == (e = this._onHide) || e.call(this)
        }
        init() {
            let e = u.getBundle(I.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : u.loadBundle(I.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        reset() {
            this._activeParams = null
        }
        onBundleLoaded(e, t) {
            if (e) return void h(e.message || e);
            const n = this;
            t.load("prefabs/MiniGamePopupManager", s, function(e, t) {
                e ? h(e.message || e) : (n.popUpPrefab = t, n.createPopUp())
            }.bind(this))
        }
        showPopup(t) {
            var n;
            this._activeParams = t, this.curGameId = t.popupId, this.showPromoOnPopUpClose = !0;
            const o = t.gameScene;
            if (this._curSceneName = (null == o ? void 0 : o.name) || null, this == e.g_instance) {
                if (o) {
                    let n = o.getComponentInChildren(e);
                    if (n) {
                        let e = I.isDesktopBuild() && I.appConfig.getGeneralConfig().multiWindowEnabled ? o.getComponentInChildren(d).node : c.getScene().getComponentInChildren(d).node;
                        return n.node.parent.getComponent(d) || n.node.setParent(e), void n.showPopup(t)
                    }
                }
                I.appConfig.getGeneralConfig().multiWindowEnabled && I.focusWindow(1)
            }
            if (null == this.node) {
                if (this.popUp && m(this.popUpNode, !0)) {
                    if (null != o && !this.popUp.node.parent.getComponent(d)) {
                        let e = I.isDesktopBuild() && I.appConfig.getGeneralConfig().multiWindowEnabled ? o.getComponentInChildren(d).node : c.getScene().getComponentInChildren(d).node;
                        this.popUp.node.setParent(e)
                    }
                    this.popUp.showPopup(t)
                } else this.createPopUp(t);
                return
            }
            const {
                popupId: i,
                datas: s,
                cbSelectedItem: p,
                onHide: a,
                onUpdateContent: r,
                sureCallback: l
            } = t;
            let u = this.getPopupTypeByGameId(i);
            if (u) {
                if (this.node.parent && this.node.parent.getComponent(d) || this.node.setParent(c.getScene().getComponentInChildren(d).node), this.node.active = !0, this.swipeIndicator && (this.swipeIndicator.active = !1, u.useSwipe || (this.contentParent.getComponent(g).anchorY = .5)), this._onHide = a, this._onUpdateContent = r, this._cbSelectedItem = p, this._datas = s, this._sureCallback = l, this.setCBSelectItem(i), this.subPopup && m(this.subPopup, !0) && (null == (n = this.subPopup.getComponent(M)) ? void 0 : n.nTag) != i && this.contentParent.removeAllChildren(), this.subPopup && m(this.subPopup, !0) && 0 != this.contentParent.children.length || (this.subPopup = C(u.prefab), this.contentParent.addChild(this.subPopup), this.subPopup.addComponent(M).nTag = i), this.onConcretePopup(this.subPopup, s), !w.Instance.isLandscapeLayout) {
                    const e = this.subPopup.getComponent(P);
                    e && (e.enabled = !0), I.roomManager.checkIsSceneMiniGame(this._curSceneName) && (this.subPopup.setScale(b(1, 1, 1)), this.subPopup.parent.parent.worldScale = b(1, 1, 1))
                }
            } else console.error(`The popup prefab for gameId : ${i} was not defined`)
        }
        clearPopupContent(t) {
            if (this == e.g_instance) {
                var n;
                const o = null == t ? void 0 : t.getComponentInChildren(e);
                return o ? void o.contentParent.removeAllChildren() : void(null == (n = this.popUp) || null == (n = n.contentParent) || n.removeAllChildren())
            }
            this.contentParent && this.contentParent.removeAllChildren()
        }
        reloadPopup() {
            return this._activeParams ? (this.popUp.clearPopupContent(), this.showPopup(this._activeParams), this.popUp) : null
        }
        onConcretePopup(e, t) {
            if (e && e.children && e.children.length > 0) {
                if (t) {
                    var n;
                    const o = this.getFilterGames(t, this.curGameId, this._compareFn);
                    null == (n = e.children[0].getComponent(_)) || n.applyLayoutStyle(this.curGameId).setData(o).setOnHide(this.hide.bind(this))
                }
            } else this.scheduleOnce((() => {
                this.onConcretePopup(e, t)
            }), .1)
        }
        createPopUp(t) {
            this.popUpPrefab && m(this.popUpPrefab, !0) ? (this.popUpNode = C(this.popUpPrefab), c.addPersistRootNode(this.popUpNode), this.popUpNode.addComponent(f), this.popUpNode.setSiblingIndex(I.Enum.ZORDER_TYPE.ZORDER_TT), this.popUp = this.popUpNode.getComponent(e), this.popUpNode.active = !1, t && this.popUp.showPopup(t)) : this.init()
        }
        createGamePopup(e) {
            if (this.popUpPrefab && m(this.popUpPrefab, !0) && m(e)) {
                let t = C(this.popUpPrefab);
                e.addChild(t), t.setSiblingIndex(I.Enum.ZORDER_TYPE.ZORDER_TT), t.active = !1
            }
        }
        hide() {
            I.miniGamePopupManager.reset(), m(this.node) && (this.node.active = !1), this.showPromoOnPopUpClose && I.authenticator.showDelayedPromo(), this.showPromoOnPopUpClose = !1
        }
        processClose(t) {
            if (this == e.g_instance && t) {
                let n = t.getComponentInChildren(e);
                if (n) return this.showPromoOnPopUpClose = !1, void n.hide()
            }
            this.popUp && this.popUp.hide()
        }
        getPopupTypeByGameId(e) {
            return this.prefabPopupList.find((t => t.popupType == e))
        }
        updateSubpopup(e) {
            if (this.subPopup && this.subPopup.children && this.subPopup.children.length > 0) {
                var t, n;
                this._datas = e;
                const o = this.getFilterGames(e, this.curGameId, this._compareFn);
                null == (t = this.subPopup.children[0].getComponent(_)) || t.updateData(o), null == (n = this._onUpdateContent) || n.call(this, o, this.curGameId)
            }
        }
        onRefeshLayout() {
            this.swipeIndicator && this.scheduleOnce((() => {
                this.swipeIndicator.setPosition(b(this.swipeIndicator.getPosition().x, this.subPopup.getComponent(g).height)), this.contentParent.getComponent(g).height = this.subPopup.getComponent(g).height, this.swipeIndicator.active = !0
            }), .1)
        }
        setCBSelectItem(e) {
            this._onSelectItem = t => {
                console.log(`[MiniGamePopupMananager.ts] tabId ... ${e} & roomId : ${t.roomid}`), I.appConfig.isLandscapeLayout || (this.showPromoOnPopUpClose = !1), I.roomManager.requestJoinMiniRoom(e, t.roomid), I.miniGamePopupManager.processClose(), this._cbSelectedItem && this._cbSelectedItem()
            }
        }
        onTabChange(e) {
            this.curGameId = e, this.setCBSelectItem(e), this.updateSubpopup(this._datas)
        }
        onSelectItem(e) {
            var t;
            null == (t = this._onSelectItem) || t.call(this, e)
        }
        setSortFn(e, t) {
            if (this.popUp) {
                const n = this.popUp;
                n._compareFn = e, n._datas && t && n.updateSubpopup(n._datas)
            }
        }
        onSureCallback() {
            var e;
            null == (e = this._sureCallback) || e.call(this)
        }
        getFilterGames(e, t, n) {
            const o = e.filter((e => e.sourceType == t));
            return n && o.sort(n), o
        }
        getCurGamePopupId() {
            return this.curGameId
        }
    }).g_instance = void 0, N = t((D = H).prototype, "contentParent", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(D.prototype, "swipeIndicator", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(D.prototype, "prefabPopupList", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = D)) || F));
    o._RF.pop()
}
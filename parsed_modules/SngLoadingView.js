import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as u from "./SngEvent.js";
import * as p from "./PlayAnim_New.js";

function main() {
    var m, b, f, _, w, C, P, S, A;
    n._RF.push({}, "92dc3dVNK1Fp6e9DTu1+xTE", "SngLoadingView", void 0);
    const {
        ccclass: y,
        property: N
    } = s;
    e("default", (m = N(p), b = N(p), f = N([p]), y(((A = class e extends a {
        constructor(...e) {
            super(...e), this.prefabPath = "prefabs/GlobalSpins/LoadingView", this.cachedPrefab = null, this.mainNode = null, this.mainComponent = null, this.bundle = null, this.usePrefabPath = void 0, t(this, "showAnim", C, this), t(this, "hideAnim", P, this), t(this, "loopAnims", S, this), this._label_list = [], this._label_des = void 0
        }
        static getInstance() {
            return g.appConfig.isLandscapeLayout ? null : (e.g_instance && e.g_instance.mainNode && o(e.g_instance.mainNode, !0) || (e.g_instance = new e, e.g_instance.init()), e.g_instance)
        }
        show() {
            if (g.appConfig.isWebApp) g.SwitchLoadingView.show(g.config.getStringData("SwitchLoadingView_des_0"));
            else {
                var e;
                if (!o(this.mainNode)) return;
                if (this.mainNode.active) return;
                this.mainNode.active = !0, null == (e = this.mainComponent) || e.playAnimation()
            }
            this.scheduleOnce((() => {
                this.hide()
            }), 60), g.appConfig.isWebApp && this.initDesWeb(g.config.getStringData("SwitchLoadingView_des_0"))
        }
        hide() {
            g.appConfig.isWebApp ? g.SwitchLoadingView.hide(g.config.getStringData("SwitchLoadingView_des_0")) : (o(this.mainNode) && this.mainNode.active && (this.mainComponent ? this.mainComponent.hideAnim.playAnimation() : this.mainNode.active = !1), this.unscheduleAllCallbacks())
        }
        init() {
            return g.MessageCenter.register(u.ShowLoading, this.show.bind(this), this), g.MessageCenter.register(u.GameStart, this.hide.bind(this), this), g.MessageCenter.register(u.GameStartError, this.hide.bind(this), this), g.MessageCenter.register(u.BackToGame, this.show.bind(this), this), g.MessageCenter.register(u.BuyInStart, this.show.bind(this), this), g.MessageCenter.register(u.BuyInError, this.hide.bind(this), this), this.usePrefabPath = this.prefabPath, new Promise(((e, i) => {
                if (this.cachedPrefab && o(this.cachedPrefab, !0)) {
                    const i = this.instantiate();
                    e(i)
                } else g.appConfig.isWebApp || g.tools.loadAssetFromBundle(this.usePrefabPath).then((i => {
                    this.cachedPrefab = i;
                    const t = this.instantiate();
                    e(t)
                })).catch((e => {
                    i instanceof Function && i(e)
                }))
            }))
        }
        instantiate() {
            var i;
            return this.mainNode = r(this.cachedPrefab), g.appConfig.getGeneralConfig().multiWindowEnabled || (h.addPersistRootNode(this.mainNode), this.mainNode.addComponent(l)), this.mainNode.setSiblingIndex(g.Enum.ZORDER_TYPE.ZORDER_LOADING), this.mainNode.active = !1, this.mainComponent = this.mainNode.getComponent(e), null == (i = this.mainComponent) || i.hideAnim.SetCallback((() => {
                this.mainNode.active = !1
            })), this.mainComponent
        }
        playAnimation() {
            this.showAnim.playAnimation(), this.loopAnims.forEach((e => {
                e.playAnimation()
            }))
        }
        onDestroy() {
            var e;
            this.unscheduleAllCallbacks(), null == (e = this.bundle) || e.release(this.usePrefabPath, d), g.MessageCenter.unregister(u.GameStart, this), g.MessageCenter.unregister(u.GameStartError, this), g.MessageCenter.unregister(u.BackToGame, this), g.MessageCenter.unregister(u.BuyInStart, this), g.MessageCenter.unregister(u.BuyInError, this), g.MessageCenter.unregister(u.ShowLoading, this)
        }
        initDesWeb(e) {
            if (g.appConfig.isWebApp && this._label_des) {
                this._label_des.string = e;
                let i = this._label_des.node.getPosition().y,
                    t = g.resMgr.getLabelStringSize(this._label_des).width,
                    n = this._label_list[0].node.getContentSize().width,
                    s = 3 * n;
                this._label_des.node.setPosition(new c(-s / 2, i)), this._label_list[0].node.setPosition(new c(-s / 2 + (t + n) / 2 + n, i)), this._label_list[1].node.setPosition(new c(this._label_list[0].node.getPosition().x + n, i)), this._label_list[2].node.setPosition(new c(this._label_list[1].node.getPosition().x + n, i))
            }
        }
    }).g_instance = void 0, C = i((w = A).prototype, "showAnim", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = i(w.prototype, "hideAnim", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(w.prototype, "loopAnims", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _ = w)) || _));
    n._RF.pop()
}
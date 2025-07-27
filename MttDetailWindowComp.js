import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var d, y, w, P, g, m, _, W, z, C, B, T, D, I, v, M, A, S, L, R, k, O, V, N, x, E, F, j;
    r._RF.push({}, "894acVAfphMDoyYt+cI+Lpr", "MttDetailWindowComp", void 0);
    const {
        ccclass: G,
        property: H
    } = l;
    t("default", (d = H(n), y = H(n), w = H(n), P = H(n), g = H(n), m = H(n), _ = H(o), W = H(o), z = H(o), C = H(o), B = H(o), T = H(o), D = H(a), G((M = e((v = class extends s {
        constructor(...t) {
            super(...t), i(this, "mttPopupParent", M, this), i(this, "detailInfoTop", A, this), i(this, "bottomLeftContainer", S, this), i(this, "bottomCenterContainer", L, this), i(this, "bottomRightContainer", R, this), i(this, "browserBackButton", k, this), i(this, "dialogPrefab", O, this), i(this, "prefabPlayersAndTables", V, this), this._playersAndTables = null, i(this, "prefabLeftWindow", N, this), this._leftWindow = null, i(this, "prefabTopWindow", x, this), this._topWindow = null, i(this, "prefabBuyInPopup", E, this), this._buyInPopup = null, this.mvcView = null, i(this, "prefabStructurePayoutsPrizepool", F, this), this._structurePayoutsPrizepoolNode = null, i(this, "loadingSpriteOpacity", j, this)
        }
        get playersAndTables() {
            return this._playersAndTables
        }
        get leftWindow() {
            return this._leftWindow
        }
        get topWindow() {
            return this._topWindow
        }
        get buyInPopup() {
            return this._buyInPopup
        }
        get structurePayoutsPrizepool() {
            return this._structurePayoutsPrizepoolNode
        }
        onLoad() {
            this.prefabPlayersAndTables && (this._playersAndTables = u(this.prefabPlayersAndTables), this._playersAndTables.parent = this.bottomRightContainer), this.prefabStructurePayoutsPrizepool && (this._structurePayoutsPrizepoolNode = u(this.prefabStructurePayoutsPrizepool), this._structurePayoutsPrizepoolNode.parent = this.bottomCenterContainer), this.prefabLeftWindow && (this._leftWindow = u(this.prefabLeftWindow), this._leftWindow.parent = this.bottomLeftContainer), this.prefabTopWindow && (this._topWindow = u(this.prefabTopWindow), this._topWindow.parent = this.detailInfoTop), this.prefabBuyInPopup && (this._buyInPopup = u(this.prefabBuyInPopup), this._buyInPopup.parent = this.mttPopupParent), this.setupBrowser()
        }
        onEnable() {
            c.MessageCenter.register("Refresh_Windows_MttDetail", this.onRefreshWindowsMttDetail.bind(this), this)
        }
        onDisable() {
            c.MessageCenter.unregister("Refresh_Windows_MttDetail", this)
        }
        onDestroy() {
            var t;
            null == (t = this.mvcView) || t.onViewDestroyed()
        }
        fade(t, e = .5) {
            p(this.loadingSpriteOpacity) && (h.stopAllByTarget(this.loadingSpriteOpacity), e <= 0 ? this.loadingSpriteOpacity.opacity = t ? 0 : 255 : b(this.loadingSpriteOpacity).to(e, {
                opacity: t ? 0 : 255
            }, {
                easing: f.linear
            }).start())
        }
        show() {
            this.node.active = !0, this.fade(!1, 0)
        }
        hide() {
            this.node.active = !1, this.fade(!1, 0)
        }
        onRefreshWindowsMttDetail(t) {
            var e, i;
            null == (e = (i = this.mvcView).onRefreshWindowsMttDetail) || e.call(i, t)
        }
        getMttPopupsParent() {
            return this.mttPopupParent
        }
        getDialogPrefab() {
            return this.dialogPrefab
        }
        setupBrowser() {
            c.appConfig.getGeneralConfig().multiWindowEnabled || p(this.browserBackButton) && (this.browserBackButton.active = !0)
        }
        onBrowserBackButtonClicked() {
            this.hide(), this.node.destroy()
        }
    }).prototype, "mttPopupParent", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(v.prototype, "detailInfoTop", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(v.prototype, "bottomLeftContainer", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(v.prototype, "bottomCenterContainer", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(v.prototype, "bottomRightContainer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(v.prototype, "browserBackButton", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(v.prototype, "dialogPrefab", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(v.prototype, "prefabPlayersAndTables", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(v.prototype, "prefabLeftWindow", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(v.prototype, "prefabTopWindow", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(v.prototype, "prefabBuyInPopup", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(v.prototype, "prefabStructurePayoutsPrizepool", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(v.prototype, "loadingSpriteOpacity", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = v)) || I));
    r._RF.pop()
}
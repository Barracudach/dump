import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./PlayAnim_New.js";
import * as d from "./cv.js";

function main() {
    var b, m, g, L, _, A, f, y, w, T, v, x, S, z, R, C, N, P, W, F, q, M, I, k, B, H, V, D, G, J, j, K, O, U, Z, E, Q, X, Y, $, ii, ni, ti, ei, ai, oi, ri, si, li, pi, ci;
    e._RF.push({}, "3c0d7r1J4ZFGaIsLMsJ3GKh", "LoadingAnimationManager", void 0);
    const {
        ccclass: hi,
        property: ui
    } = s;
    i("LoadingAnimationManager", (b = hi("LoadingAnimationManager"), m = ui(a), g = ui(a), L = ui(a), _ = ui(a), A = ui(u), f = ui(u), y = ui(o), w = ui(o), T = ui(o), v = ui(r), x = ui(u), S = ui(u), z = ui(u), R = ui(o), C = ui(o), N = ui(u), P = ui(u), W = ui(u), F = ui(o), q = ui(o), M = ui(u), I = ui(a), k = ui(o), B = ui(a), b((D = n((V = class extends l {
        constructor(...i) {
            super(...i), t(this, "appLoading", D, this), t(this, "tableLoading", G, this), t(this, "centerLoading", J, this), t(this, "landscapeSwitchTableLoading", j, this), t(this, "app_loadingLaunchAnimation", K, this), t(this, "app_bottomProgressbarHideAnimation", O, this), t(this, "app_loadingInfo", U, this), t(this, "percentLabel", Z, this), t(this, "app_version", E, this), t(this, "byteProgress", Q, this), t(this, "table_loadingLaunchAnimation", X, this), t(this, "table_spinnerAnimation", Y, this), t(this, "table_bottomSpinnerAnimation", $, this), t(this, "table_descriptionText", ii, this), t(this, "table_version", ni, this), t(this, "switchLandscape_loadingLaunchAnimation", ti, this), t(this, "switchLandscape_spinnerAnimation", ei, this), t(this, "switchLandscape_bottomSpinnerAnimation", ai, this), t(this, "switchLandscape_descriptionText", oi, this), t(this, "switchLandscape_version", ri, this), t(this, "table_centerSpinnerAnimation", si, this), t(this, "retry_panel", li, this), t(this, "retry_text", pi, this), t(this, "appTextContent", ci, this)
        }
        set appLoadingInfo(i) {
            this.app_loadingInfo && (this.app_loadingInfo.string = i)
        }
        set byteProgressbar(i) {
            this.byteProgress && (this.byteProgress.progress = i)
        }
        set percent(i) {
            this.percentLabel && (this.percentLabel.string = i)
        }
        set appVersionText(i) {
            this.app_version && (this.app_version.string = i)
        }
        set retryText(i) {
            this.retry_text && (this.retry_text.string = i)
        }
        startAppLoadingAnimation() {
            this.app_loadingLaunchAnimation ? this.app_loadingLaunchAnimation.playAnimation() : p("[WARN] Required components for app loading animation are not assigned.")
        }
        hideAppLoadingAnimation(i) {
            c(this.appLoading) && (this.appLoading.getComponent(h).opacity = 0, this.appLoading.active = !1), i && (i.active = !1)
        }
        startWebAppLoadingAnimation() {
            this.app_loadingLaunchAnimation ? (this.appLoading.active = !0, this.app_loadingLaunchAnimation.moveToLastFrame()) : p("[WARN] Required components for app loading animation are not assigned.")
        }
        showRetryPanel(i) {
            this.appTextContent && this.retry_panel && this.retry_text ? this.retry_panel.active || (this.appTextContent.active = !1, this.retryText = i, this.retry_panel.active = !0) : p("[WARN] Required components for retry panel are not assigned.")
        }
        RetryButtonClicked() {
            d.MessageCenter.send("retryButtonClicked"), d.AudioMgr.playButtonSound("button_click.mp3")
        }
        startTableLoadingAnimation(i) {
            this.table_descriptionText && this.table_loadingLaunchAnimation && this.table_spinnerAnimation ? (this.table_descriptionText.string = i, this.table_loadingLaunchAnimation.playAnimation(), this.table_spinnerAnimation.playAnimation()) : p("[WARN] Required components for table loading animation are not assigned.")
        }
        hideTableLoadingAnimation(i) {
            c(this.tableLoading) && (this.tableLoading.getComponent(h).opacity = 0, this.tableLoading.active = !1), i && (i.active = !1)
        }
        hideCenterSuitLoadingAnimation(i) {
            this.table_loadingLaunchAnimation ? (this.table_centerSpinnerAnimation.SetCallback((() => {
                i && (i.active = !1), c(this.centerLoading) && (this.centerLoading.active = !1)
            })), this.table_centerSpinnerAnimation.playAnimationStopAtFirstFrame()) : p("[WARN] table_loadingLaunchAnimation is not assigned.")
        }
        activateBottomSpinnerAnimation(i) {
            this.table_descriptionText && this.tableLoading && this.table_bottomSpinnerAnimation && this.table_spinnerAnimation ? (this.table_descriptionText.string = i, this.app_bottomProgressbarHideAnimation.playAnimation(), this.tableLoading.active = !0, this.table_bottomSpinnerAnimation.playAnimation(), this.table_spinnerAnimation.playAnimation()) : p("[WARN] Required components for bottom spinner animation are not assigned.")
        }
        activateCenterSpinnerAnimation(i) {
            this.table_centerSpinnerAnimation ? (this.centerLoading.active = !0, this.table_centerSpinnerAnimation.playAnimation()) : p("[WARN] Required components for bottom spinner animation are not assigned.")
        }
        startSwitchLandscapeTableLoadingAnimation(i) {
            this.switchLandscape_descriptionText && this.switchLandscape_loadingLaunchAnimation && this.switchLandscape_spinnerAnimation ? (this.switchLandscape_descriptionText.string = i, this.switchLandscape_loadingLaunchAnimation.playAnimation(), this.switchLandscape_spinnerAnimation.playAnimation()) : p("[WARN] Required components for table loading animation are not assigned.")
        }
        hideswitchLandscapeTableLoadingAnimation(i) {
            this.switchLandscape_loadingLaunchAnimation ? (this.switchLandscape_loadingLaunchAnimation.SetCallback((() => {
                i && (i.active = !1)
            })), this.switchLandscape_loadingLaunchAnimation.playAnimationStopAtFirstFrame()) : p("[WARN] switchLandscape_loadingLaunchAnimation is not assigned.")
        }
        forceShowSwitchLandscapeTableLoadingAnimation() {
            null != this.switchLandscape_descriptionText && null != this.switchLandscape_loadingLaunchAnimation && null != this.switchLandscape_spinnerAnimation ? (this.landscapeSwitchTableLoading.active = !0, this.switchLandscape_loadingLaunchAnimation.moveToLastFrame(), this.switchLandscape_spinnerAnimation.playAnimation()) : p("[WARN] Required components for table loading animation are not assigned.")
        }
        forceShowTableLoadingAnimation(i) {
            null != this.table_descriptionText && null != this.table_loadingLaunchAnimation && null != this.table_spinnerAnimation ? (this.tableLoading.active = !0, this.table_descriptionText.string = i, this.table_loadingLaunchAnimation.moveToLastFrame(), this.table_spinnerAnimation.playAnimation()) : p("[WARN] Required components for table loading animation are not assigned.")
        }
        set description(i) {
            this.table_descriptionText && (this.table_descriptionText.string = i)
        }
        set tableVersionText(i) {
            this.table_version && (this.table_version.string = i)
        }
        set descriptionSwitchLandscape(i) {
            this.switchLandscape_descriptionText && (this.switchLandscape_descriptionText.string = i)
        }
        set tableVersionTextSwitchLandscape(i) {
            this.switchLandscape_version && (this.switchLandscape_version.string = i)
        }
    }).prototype, "appLoading", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = n(V.prototype, "tableLoading", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = n(V.prototype, "centerLoading", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = n(V.prototype, "landscapeSwitchTableLoading", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = n(V.prototype, "app_loadingLaunchAnimation", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = n(V.prototype, "app_bottomProgressbarHideAnimation", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = n(V.prototype, "app_loadingInfo", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = n(V.prototype, "percentLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = n(V.prototype, "app_version", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = n(V.prototype, "byteProgress", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = n(V.prototype, "table_loadingLaunchAnimation", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = n(V.prototype, "table_spinnerAnimation", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = n(V.prototype, "table_bottomSpinnerAnimation", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ii = n(V.prototype, "table_descriptionText", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ni = n(V.prototype, "table_version", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ti = n(V.prototype, "switchLandscape_loadingLaunchAnimation", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ei = n(V.prototype, "switchLandscape_spinnerAnimation", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ai = n(V.prototype, "switchLandscape_bottomSpinnerAnimation", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oi = n(V.prototype, "switchLandscape_descriptionText", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ri = n(V.prototype, "switchLandscape_version", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), si = n(V.prototype, "table_centerSpinnerAnimation", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), li = n(V.prototype, "retry_panel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pi = n(V.prototype, "retry_text", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ci = n(V.prototype, "appTextContent", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = V)) || H));
    e._RF.pop()
}
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";

function main() {
    var p, g, d, m, N, _, R, b, f, C, S, A, T;
    i._RF.push({}, "99c9fY6pBRGI4t0tR1VmMvt", "StatusPopup", void 0);
    const {
        ccclass: E,
        property: P
    } = a;
    let y = t("eStatusPopupType", function(t) {
        return t[t.DISCONNECT = 0] = "DISCONNECT", t[t.RECONNECTING = 1] = "RECONNECTING", t[t.NA = 2] = "NA", t
    }({}));
    t("default", (p = P(c), g = P(c), d = P(c), m = P(r), N = P(c), E((b = e((R = class extends o {
        constructor(...t) {
            super(...t), n(this, "reconnectingAttemptMax", b, this), n(this, "rootPanel", f, this), n(this, "disconnectPanel", C, this), n(this, "reconnectingPanel", S, this), n(this, "reconnectingAttemptLabel", A, this), n(this, "reconnectingIndicator", T, this), this._currentStatus = y.NA, this._isShown = !1, this._currentReconnectingAttempt = 3, this._elapsedTime = 0, this._intervalTime = 1
        }
        onEnable() {
            this._currentStatus == y.RECONNECTING && this.updateReconnectingAttemptLabel()
        }
        resetAll() {
            this._currentStatus = y.NA
        }
        resetReconnecting() {
            this._currentReconnectingAttempt = this.reconnectingAttemptMax
        }
        tryReconnect() {
            h.netWorkManager.tryReconnect()
        }
        animatePopup() {
            this.rootPanel.setScale(new s(.01, .01, 1)), u(this.rootPanel).delay(.05).show().to(.15, {
                scale: l(s.ONE)
            }).start()
        }
        show(t) {
            this.node.active = !0, this.updateStatus(t), this._isShown || this.animatePopup(), this._isShown = !0
        }
        update(t) {
            this._currentStatus == y.RECONNECTING && this._elapsedTime < this._intervalTime && (this._elapsedTime += t)
        }
        hide() {
            this.node.active = !1, this.resetAll(), this._isShown = !1
        }
        updateStatus(t) {
            if (this._currentStatus != y.RECONNECTING || t != y.DISCONNECT) {
                if (this._currentStatus != t) switch (this._currentStatus = t, this._currentStatus) {
                    case y.DISCONNECT:
                        this.disconnectPanel.active = !0, this.reconnectingPanel.active = !1;
                        break;
                    case y.RECONNECTING:
                        this.disconnectPanel.active = !1, this.reconnectingPanel.active = !0, this.updateReconnectingAttemptLabel()
                }
            } else this._elapsedTime >= this._intervalTime && (this._elapsedTime = 0, this.updateReconnectingAttempt())
        }
        updateReconnectingAttempt() {
            this._currentReconnectingAttempt--, this._currentReconnectingAttempt < 0 && (this._currentReconnectingAttempt = 0), this.updateReconnectingAttemptLabel()
        }
        updateReconnectingAttemptLabel() {
            this.reconnectingAttemptLabel.string = h.StringTools.formatC(h.config.getStringData("Notification_Reconnecting_ContentAttempt"), this._currentReconnectingAttempt), this.reconnectingIndicator && h.resMgr.adaptWidget(this.reconnectingIndicator, !1, !1)
        }
        onDisconnectConfirm() {
            this.resetReconnecting(), h.netWorkManager.isNetworkConnected() ? this.hide() : (this.updateStatus(y.RECONNECTING), h.netWorkManager.tryReconnect())
        }
        onReconnectingCancel() {
            this.hide(), h.netWorkManager.tryReconnect()
        }
    }).prototype, "reconnectingAttemptMax", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), f = e(R.prototype, "rootPanel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(R.prototype, "disconnectPanel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(R.prototype, "reconnectingPanel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(R.prototype, "reconnectingAttemptLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(R.prototype, "reconnectingIndicator", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = R)) || _));
    i._RF.pop()
}
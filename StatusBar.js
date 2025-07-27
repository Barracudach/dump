import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as I from "./cc.js";
import * as f from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./NodeTools.js";

function main() {
    var m, d, S, w, v, _, F, B, C, R, k, z, A, N, O, L, W, T, D, M, P, E, H, V;
    n._RF.push({}, "d07cfK78ohB/a1cm8VA6Ewl", "StatusBar", void 0);
    const {
        ccclass: Z,
        property: j
    } = r;
    t("StatusBar", (m = j(a), d = j(a), S = j(o), w = j(a), v = j(a), _ = j(a), F = j(s), B = j(a), C = j(a), R = j(s), k = j(o), Z((N = e((A = class extends l {
        constructor(...t) {
            super(...t), i(this, "leftIcon", N, this), i(this, "rightIcon", O, this), i(this, "timeLabel", L, this), i(this, "gpsResIcon", W, this), i(this, "ipResIcon", T, this), i(this, "wifiIcon", D, this), i(this, "signalIcon", M, this), i(this, "batteryIcon", P, this), i(this, "battery", E, this), i(this, "batteryCharging", H, this), i(this, "batteryLabel", V, this), this._wifi = null, this._getInterval = 3, this._getTime = 0, this.green = (new c).fromHEX("53FF6E"), this.red = (new c).fromHEX("FF5A00"), this.redValue = 15, this.isBlink = !1
        }
        onLoad() {
            h.isNative ? (this.node.active = !0, this._wifi = this.wifiIcon.getComponent(s), h.os === h.OS.IOS && (this.redValue = 20)) : this.node.active = !1
        }
        start() {
            this.toggleGPSRes(!1), this.toggleIPRes(!1), this.updateStatusBar(this._getInterval)
        }
        update(t) {
            this.updateStatusBar(t)
        }
        updateStatusBar(t) {
            if (this._getTime += t, this._getTime >= this._getInterval) {
                this.updateTime();
                try {
                    if (h.os === h.OS.ANDROID) {
                        let t = JSON.parse(g.reflection.callStaticMethod("com/cocos/game/AppActivity", "getWiFi", "()Ljava/lang/String;"));
                        t ? (this.toggleWiFiIcon(t.enable), this.setWiFiIcon(t.strength)) : this.toggleWiFiIcon(!1), this.setSignalIcon(g.reflection.callStaticMethod("com/cocos/game/AppActivity", "getSignal", "()I")), this.setBattery(g.reflection.callStaticMethod("com/cocos/game/AppActivity", "getBattery", "()I"))
                    } else if (h.os === h.OS.IOS) {
                        let t = JSON.parse(g.reflection.callStaticMethod("AppController", "getSystemInfo", ""));
                        "WIFI" == t.NetworkType ? (this.toggleWiFiIcon(!0), this.setWiFiIcon(Number(t.WifiStrength))) : this.toggleWiFiIcon(!1), this.setSignalIcon(Number(t.Strength)), this.setBattery(t.Battery)
                    }
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
                }
                this._getTime = 0
            }
        }
        setSize(t) {
            this.leftIcon.setScale(t, t), this.rightIcon.setScale(t, t)
        }
        padZero(t) {
            return ("0" + t).slice(-2)
        }
        updateTime() {
            let t = new Date;
            this.timeLabel.string = this.padZero(t.getHours()) + ":" + this.padZero(t.getMinutes())
        }
        toggleGPSRes(t) {
            this.gpsResIcon.active = t
        }
        toggleIPRes(t) {
            this.ipResIcon.active = t
        }
        toggleWiFiIcon(t) {
            this.wifiIcon.active = t
        }
        loadIcon(t, e) {
            cc_mtt.vv.AssetsManager.loadRes("common/status_bar/" + e, u, ((e, i) => {
                e ? cc_mtt.vv.ConsoleLog.log("load icon fail", e) : t.spriteFrame = i
            }))
        }
        setWiFiIcon(t) {
            if (this.wifiIcon.active) {
                this._wifi || (this._wifi = this.wifiIcon.getComponent(s));
                let e = "icon_wifi_";
                switch (t) {
                    case 3:
                        e += "100";
                        break;
                    case 2:
                        e += "066";
                        break;
                    case 1:
                        e += "033";
                        break;
                    case 0:
                        e += "000"
                }
                this.loadIcon(this._wifi, e)
            }
        }
        setSignalIcon(t) {
            let e = "icon_signal_";
            if (h.os === h.OS.ANDROID) e += t < -117 ? "000" : t < -110 ? "025" : t < -100 ? "050" : t < -90 ? "075" : "100";
            else if (h.os === h.OS.IOS) switch (t) {
                case 4:
                    e += "100";
                    break;
                case 3:
                    e += "075";
                    break;
                case 2:
                    e += "050";
                    break;
                case 1:
                    e += "025";
                    break;
                case 0:
                    e += "000"
            }
            this.loadIcon(this.signalIcon, e)
        }
        setBattery(t) {
            this.batteryCharging.enabled = t < 0, t = Math.abs(t), y.changeNodeColor(this.battery, this.batteryCharging.enabled || t > this.redValue ? this.green : this.red), y.setNodeWidth(this.battery, .55 * t), this.batteryLabel.string = t + "%", !this.batteryCharging.enabled && t <= 5 && !this.isBlink ? (this.isBlink = !0, p(this.batteryIcon.getComponent(b)).sequence(p().to(.5, {
                opacity: 0
            }, {
                easing: f.fade
            }), p().to(.5, {
                opacity: 255
            }, {
                easing: f.fade
            })).repeatForever().start()) : (I.stopAllByTarget(this.batteryIcon.getComponent(b)), this.batteryIcon.getComponent(b).opacity = 0, p(this.batteryIcon.getComponent(b)).to(1, {
                opacity: 255
            }, {
                easing: f.fade
            }).start(), this.isBlink = !1)
        }
    }).prototype, "leftIcon", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(A.prototype, "rightIcon", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(A.prototype, "timeLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(A.prototype, "gpsResIcon", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(A.prototype, "ipResIcon", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(A.prototype, "wifiIcon", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(A.prototype, "signalIcon", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(A.prototype, "batteryIcon", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(A.prototype, "battery", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(A.prototype, "batteryCharging", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(A.prototype, "batteryLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = A)) || z));
    n._RF.pop()
}
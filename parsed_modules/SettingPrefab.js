import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ImpokerHall.js";
import * as u from "./worldWebsocket.js";
import * as p from "./mttconfig.js";
import * as g from "./LogUploader.js";
import * as h from "./ToggleSwitch.js";
import * as d from "./AndroidBackButton.js";

function main() {
    var m, b, f, v, k, _, S, y;
    i._RF.push({}, "b7f0bKUCwtGAK1N0c2D9FZy", "SettingPrefab", void 0);
    const {
        ccclass: B,
        property: w
    } = r;
    e("SettingPrefab", (m = w(h), b = w(h), f = w(n), B((_ = t((k = class extends l {
        constructor(...e) {
            super(...e), o(this, "volume", _, this), o(this, "vibrate", S, this), o(this, "version", y, this), this._impokerHall = void 0, this._logUploader = void 0
        }
        onLoad() {
            this._impokerHall = s.getScene().getComponentInChildren(c), this.volume.init("isVolume", !0), this.vibrate.init("isVibrate", !0), this._logUploader = new g
        }
        onDestroy() {
            this._logUploader && this._logUploader.onDestroy()
        }
        start() {
            null != a.localStorage.getItem("appVersion") ? this.version.string = "v" + JSON.parse(a.localStorage.getItem("appVersion")).version + (a.os === a.OS.ANDROID ? ".a" : ".i") : a.isBrowser ? this.version.string = "v" + p.webVersion + ".w" : this.version.string = "v1.0.0"
        }
        onBackClicked() {
            a.isNative && a.os === a.OS.ANDROID && d.getInstance().removeBackFunction("SettingPrefab"), this._impokerHall.controlHallBlockLayer(!0, this.name), this._impokerHall.movePageToRight(this.node), setTimeout((() => {
                this._impokerHall.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._impokerHall.pageActionSpeed)
        }
        onLogoutClicked() {
            u.logout()
        }
        onVersionButtonClicked() {
            this._logUploader && this._logUploader.onVersionButtonClicked()
        }
    }).prototype, "volume", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(k.prototype, "vibrate", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(k.prototype, "version", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = k)) || v));
    i._RF.pop()
}
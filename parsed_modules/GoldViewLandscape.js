import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./GoldView.js";
import * as l from "./cv.js";
import * as u from "./HallSceneLandscape.js";

function main() {
    var d, p, h, f, w, g, C, b;
    n._RF.push({}, "bc505b6GZFGo5KDPP1OdUM7", "GoldViewLandscape", void 0);
    const {
        ccclass: V,
        property: m
    } = r;
    e("default", (d = m(a), p = m(u), h = m(s), V((g = i((w = class extends c {
        constructor(...e) {
            super(...e), t(this, "userName", g, this), t(this, "hallSceneLandscape", C, this), t(this, "casinoCoinView", b, this)
        }
        onLoad() {
            null == this.hallSceneLandscape && (this.hallSceneLandscape = o.getScene().getComponentInChildren(u)), this.userName.node.parent.active = !l.dataHandler.getUserData().isTouristUser, this.casinoCoinView && (this.casinoCoinView.active = !1), l.MessageCenter.register("openCasinoView", this.updateCasinoCoinView.bind(this), this.node), super.onLoad()
        }
        onDestroy() {
            l.MessageCenter.unregister("openCasinoView", this.node), super.onDestroy()
        }
        updateNickName() {
            this.userName.node.parent.active = !l.dataHandler.getUserData().isTouristUser, this.userName.string = l.dataHandler.getUserData().nick_name || ""
        }
        onClickAvatar() {
            this.hallSceneLandscape.onShowEditAvatar()
        }
        updateCasinoCoinView(e) {
            this.casinoCoinView && (this.casinoCoinView.active = e)
        }
        UpdateUserInfo() {
            super.UpdateUserInfo(), this.userName.node.parent.active = !l.dataHandler.getUserData().isTouristUser
        }
    }).prototype, "userName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(w.prototype, "hallSceneLandscape", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = i(w.prototype, "casinoCoinView", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = w)) || f));
    n._RF.pop()
}
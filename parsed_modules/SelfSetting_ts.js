import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./mttconfig.js";
import * as h from "./ToggleSwitch.js";
import * as g from "./Holdem_Basic_Item.js";
import * as p from "./MultipleGame.js";

function main() {
    var d, y, S, m, P, _, B, v, w, z, A, E, C, M, k, D, F, L, N, T, H;
    n._RF.push({}, "fbe5eX8yEtMHaQ8WVuyRfY2", "SelfSetting_ts", void 0);
    const {
        ccclass: R,
        property: U
    } = c;
    e("SelfSetting", (d = R("SelfSetting"), y = U(l), S = U(o), m = U(r), P = U(u), _ = U(a), B = U(s), v = U(l), w = U(h), z = U(h), d((C = t((E = class extends g {
        constructor(...e) {
            super(...e), i(this, "playerNickName", C, this), i(this, "gender", M, this), i(this, "profilePicture", k, this), i(this, "defaultProfilePic", D, this), i(this, "hunterBubblePosition", F, this), i(this, "hunterBubblePrefab", L, this), this.hunterBubble = null, i(this, "accountBalance", N, this), i(this, "soundEffect", T, this), i(this, "voiceMessage", H, this), this._onCloseAction = null, this._selfData = null, this.profilePicUrl = "", this.onToggleSoundEffect = () => {
                this.soundEffect.getValueFromLocalStorage(!0) ? p.instance.setBlockAllAudioPlayer(!1) : p.instance.setBlockAllAudioPlayer(!0)
            }
        }
        onLoad() {
            this.node.active = !1, this.hunterBubble = f(this.hunterBubblePrefab), this.hunterBubble.parent = this.hunterBubblePosition, this.initSetting()
        }
        onEnable() {
            this.node.emit("enable")
        }
        initSetting() {
            this.soundEffect.init(b.key_enableSoundEffect, !0, this.onToggleSoundEffect), this.voiceMessage.init(b.key_enableVoiceMessage, !0)
        }
        updateSelfSetting(e, t = null) {
            cc_mtt.vv.ConsoleLog.log("Self Setting Data", e), this._selfData = e, this._onCloseAction = t
        }
        onClose() {
            this.node.active = !1, this._onCloseAction && this._onCloseAction instanceof Function && this._onCloseAction(), this.node.destroy()
        }
        onDestroy() {
            this.profilePicUrl && cc_mtt.vv.AssetsManager.releaseWebImage(this.profilePicUrl)
        }
    }).prototype, "playerNickName", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(E.prototype, "gender", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(E.prototype, "profilePicture", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(E.prototype, "defaultProfilePic", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(E.prototype, "hunterBubblePosition", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(E.prototype, "hunterBubblePrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(E.prototype, "accountBalance", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(E.prototype, "soundEffect", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(E.prototype, "voiceMessage", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = E)) || A));
    n._RF.pop()
}
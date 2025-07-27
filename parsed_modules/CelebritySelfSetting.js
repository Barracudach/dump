import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./SelfSetting_ts.js";

function main() {
    var n, g, h, d, u, v;
    l._RF.push({}, "12d19F8J6dDD6L/l2qdsVAd", "CelebritySelfSetting", void 0);
    const {
        ccclass: m,
        property: C
    } = o;
    e("CelebritySelfSetting", (n = C(s), g = C(s), m((u = i((d = class extends c {
        constructor(...e) {
            super(...e), t(this, "liveMicToggle", u, this), t(this, "liveCameraToggle", v, this)
        }
        onLoad() {
            super.onLoad()
        }
        initSetting() {
            this.liveCameraToggle.isChecked = this.holdemRoom.liveHandler.isSelfVideoStreaming(), this.liveMicToggle.isChecked = this.holdemRoom.liveHandler.isSelfAudioStreaming(), this.liveCameraToggle.node.on(s.EventType.TOGGLE, this.onToggleLiveCamera, this), this.liveMicToggle.node.on(s.EventType.TOGGLE, this.onToggleLiveMic, this)
        }
        updateSelfSetting(e, i = null) {
            cc_mtt.vv.ConsoleLog.log("Celebrity Self Setting Data", e), this._selfData = e, this.playerNickName.string = e.nickName, 0 == e.gender ? this.gender.node.active = !1 : 1 == e.gender ? this.gender.isChecked = !0 : 2 == e.gender && (this.gender.isChecked = !1);
            let t = {
                isThumbnails: !0,
                system: !1,
                total: !1,
                timestamp: Date.now()
            };
            this.profilePicUrl = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(e.avatar, e.userId), t), this.profilePicture.spriteFrame = this.defaultProfilePic, cc_mtt.vv.AssetsManager.loadWebImage(this.profilePicture, this.profilePicUrl, this.defaultProfilePic, (function(e) {
                try {
                    r(this) && r(this.profilePicture) && (this.profilePicture.spriteFrame = new a, this.profilePicture.spriteFrame.texture = e)
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.error(e)
                }
            })), this._onCloseAction = i
        }
        onToggleLiveMic() {
            this.holdemRoom.liveHandler.enableLocalAudio(this.liveMicToggle.isChecked), this.sendCelebrityAudioRequest(this.liveCameraToggle.isChecked, this.liveMicToggle.isChecked)
        }
        onToggleLiveCamera() {
            this.holdemRoom.liveHandler.enableLocalVideo(this.liveCameraToggle.isChecked), this.sendCelebrityBroadcastRequest(this.liveCameraToggle.isChecked, this.liveMicToggle.isChecked)
        }
        sendCelebrityAudioRequest(e, i) {
            this.liveMicToggle.interactable = !1, this.holdemRoom.store.sendCelebrityBroadcastRequest(e, i, (e => {
                r(this) && (this.liveMicToggle.isChecked != e.audioSuccess && (this.liveMicToggle.isChecked = e.audioSuccess), this.liveMicToggle.interactable = !0)
            }))
        }
        sendCelebrityBroadcastRequest(e, i) {
            this.liveCameraToggle.interactable = !1, this.holdemRoom.store.sendCelebrityBroadcastRequest(e, i, (e => {
                r(this) && (this.liveCameraToggle.isChecked != e.success && (this.liveCameraToggle.isChecked = e.success), this.liveCameraToggle.interactable = !0)
            }))
        }
    }).prototype, "liveMicToggle", [n], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(d.prototype, "liveCameraToggle", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = d)) || h));
    l._RF.pop()
}
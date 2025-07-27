import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./Holdem_Basic_Item.js";
import * as y from "./ResourcesLoader.js";
import * as g from "./AttackList_ts.js";
import * as f from "./AutoResizeLabel.js";
import * as B from "./Holdem_Player_ts.js";

function main() {
    var P, v, _, C, R, L, k, w, I, M, z, S, A, E, N, V, j, F, x, D, T, U, H, O, q, K, W, Z, J, Q, X, G;
    o._RF.push({}, "c81dc8Dd3ZElKSJXBUbQdZm", "PlayerSetting_ts", void 0);
    const {
        ccclass: Y,
        property: $
    } = d;
    t("default", (P = $(n), v = $(n), _ = $(r), C = $(s), R = $(l), L = $(a), k = $(n), w = $(u), I = $(h), M = $(f), z = $(c), S = $(c), A = $(c), E = $(c), N = $(c), Y((F = e((j = class extends b {
        constructor(...t) {
            super(...t), i(this, "attackListPosition", F, this), this.attackList = null, i(this, "starIcon", x, this), i(this, "playerNickName", D, this), i(this, "gender", T, this), i(this, "profilePicture", U, this), this._profilePic = "", i(this, "defaultProfilePic", H, this), i(this, "hunterBubblePosition", O, this), i(this, "hunterBubblePrefab", q, this), this.hunterBubble = null, i(this, "noteEditBox", K, this), i(this, "noteResizeLabel", W, this), i(this, "muteButton", Z, this), i(this, "cameraButton", J, this), i(this, "changeViewButton", Q, this), i(this, "emojiButton", X, this), i(this, "replayButton", G, this), this._onCloseAction = null, this._player = null
        }
        get isCelebrityPlayer() {
            return this.holdemRoom.isCelebrity(this._player.userId)
        }
        get isCelebrityPanelLayout() {
            return this.isCelebrityPlayer && this.holdemRoom.isBroadcastAvailable
        }
        init() {
            m(this.attackList) || y.instance.loadRes(y.RES_PATH.PREFAB.COMMON.ATTACK_ICON_LIST, u, null, ((t, e) => {
                t || (this.attackList = p(e), this.attackList.parent = this.attackListPosition, this.attackList.getComponent(g)._playerSetting = this.node, this.attackList.getComponent(g).setHoldemRoom(this.holdemRoom), this.attackList.getComponent(g).init())
            })), this.hunterBubble = p(this.hunterBubblePrefab), this.hunterBubble.parent = this.hunterBubblePosition, this.node.active = !1
        }
        onEnable() {
            this.node.emit("enable")
        }
        updatePlayerSetting(t, e = null) {
            cc_mtt.vv.ConsoleLog.log("Player Setting data", t), this._player = t, this.node.active = !0, this.playerNickName.string = t.nickName, 0 == t.gender ? this.gender.node.active = !1 : 1 == t.gender ? this.gender.isChecked = !0 : 2 == t.gender && (this.gender.isChecked = !1);
            let i = {
                isThumbnails: !0,
                system: !1,
                total: !1,
                timestamp: t.userId == this.holdemRoom.store.playerUserId ? Date.now() : 0
            };
            if (this._profilePic = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(t.avatar, t.userId), i), cc_mtt.vv.AssetsManager.loadWebImage(this.profilePicture, this._profilePic, this.defaultProfilePic, (t => {
                    try {
                        m(this) && m(this.profilePicture) && (this.profilePicture.spriteFrame = new a, this.profilePicture.spriteFrame.texture = t)
                    } catch (t) {
                        cc_mtt.vv.ConsoleLog.error(t)
                    }
                })) || (this.profilePicture.spriteFrame = this.defaultProfilePic), this.starIcon.active = this.isCelebrityPlayer, this.holdemRoom.store.sendUserNoteRequest(t.userId, (t => {
                    m(this) && this.updatePlayerNote(t)
                })), this.muteButton.node.active = !0, this.setMuteButton(this.holdemRoom.store.checkMuteList(t.userId)), this.isCelebrityPanelLayout ? (this.cameraButton.node.active = !0, this.setCameraButton(this.holdemRoom.store.checkCameraMuteList(t.userId))) : this.cameraButton.node.active = !1, this.holdemRoom.store.getSelfPlayer()) this.changeViewButton.node.active = !1, this.emojiButton.node.active = !0, this.setEmojiButton(this.holdemRoom.store.checkEmojiMuteList(t.userId));
            else if (this.emojiButton.node.active = !1, this.isCelebrityPanelLayout) {
                this.changeViewButton.node.active = !0;
                let e = this.holdemRoom.findPlayerByUserId(t.userId);
                cc_mtt.vv.ConsoleLog.log("Player Setting check player layout", e ? e.layout : null);
                let i = e && e.layout == B.Bottom;
                this.setViewButton(i)
            } else this.changeViewButton.node.active = !1;
            this._onCloseAction = e
        }
        onDestroy() {
            this._profilePic && cc_mtt.vv.AssetsManager.releaseWebImage(this._profilePic)
        }
        onClose() {
            this.node.active = !1, this._onCloseAction && this._onCloseAction instanceof Function && this._onCloseAction(), this.node.destroy()
        }
        updatePlayerNote(t) {
            this.noteEditBox.string = t, this.noteResizeLabel.setString(t)
        }
        setMuteButton(t) {
            this.muteButton.node.children[0].active = !t, this.muteButton.node.children[1].active = t
        }
        setCameraButton(t) {
            this.cameraButton.node.children[0].active = !t, this.cameraButton.node.children[1].active = t
        }
        setViewButton(t) {
            this.changeViewButton.node.children[0].active = !t, this.changeViewButton.node.children[1].active = t
        }
        setEmojiButton(t) {
            this.emojiButton.node.children[0].active = !t, this.emojiButton.node.children[1].active = t
        }
        onPlayerSettingMuteClicked() {
            let t = this._player.userId;
            this.holdemRoom.store.updateMuteList(t);
            let e = this.holdemRoom.store.checkMuteList(t);
            this.setMuteButton(e), this.isCelebrityPlayer ? this.holdemRoom.liveHandler.muteRemoteAudio(t, e) : this.holdemRoom.stopVoiceMessage(t)
        }
        onPlayerSettingEmojiClicked() {
            let t = this._player.userId;
            this.holdemRoom.store.updateEmojiMuteList(t);
            let e = this.holdemRoom.store.checkEmojiMuteList(t);
            this.setEmojiButton(e)
        }
        onPlayerSettingCameraClicked() {
            let t = this._player.userId;
            this.holdemRoom.store.updateCameraMuteList(t);
            let e = this.holdemRoom.store.checkCameraMuteList(t);
            this.setCameraButton(e), this.holdemRoom.onMuteCelebrity(t, e)
        }
        onPlayerSettingChangeViewClicked() {
            let t = this._player.userId,
                e = this.changeViewButton.node.children[1].active;
            this.setViewButton(!e), this.holdemRoom.rotateCheck(t, e)
        }
        onPlayerSettingReplayClicked() {
            this.holdemRoom.playVoiceMessage(this._player.userId)
        }
        onPlayerSettingNoteEdited(t) {
            cc_mtt.vv.ConsoleLog.log("On Player Setting Note Edit Finished.", t.string), this.noteResizeLabel.setString(t.string), this.holdemRoom.store.sendUpdateUserNoteRequest(this._player.userId, t.string)
        }
    }).prototype, "attackListPosition", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(j.prototype, "starIcon", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(j.prototype, "playerNickName", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(j.prototype, "gender", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(j.prototype, "profilePicture", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(j.prototype, "defaultProfilePic", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(j.prototype, "hunterBubblePosition", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(j.prototype, "hunterBubblePrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(j.prototype, "noteEditBox", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(j.prototype, "noteResizeLabel", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(j.prototype, "muteButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(j.prototype, "cameraButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(j.prototype, "changeViewButton", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(j.prototype, "emojiButton", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(j.prototype, "replayButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = j)) || V));
    o._RF.pop()
}
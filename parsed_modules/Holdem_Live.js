import * as t from "./cc.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./AgoraSdk.js";

function main() {
    var m, L, u;
    i._RF.push({}, "a10acGmUtxEr5O0QqVpLzzR", "Holdem_Live", void 0);
    const {
        ccclass: v,
        property: I
    } = o;
    let g = e("Holdem_Live_Icon_Map", v("Holdem_Live_Icon_Map")(m = class {
        constructor() {
            this.uid = 0, this.playerIcon = null, this.sprRenderIcon = null
        }
    }) || m);
    e("default", v(((u = class e extends n {
        constructor(...e) {
            super(...e), this._runningOnDevice = 0, this._playerIconMap = {}, this._channelName = "testChannel", this._uid = 0, this._role = 0, this._joinedChannel = !1, this.onInitCallback = null, this._isBroadcastValid = !1, this.activeLive = !1, this.holdemRoom = null, this._lastEnableLocalVideo = !1, this._enableLocalVideo = !1, this._muteLocalVideo = !1, this._isInitLocalVideo = !1, this._lastEnableLocalAudio = !1, this._enableLocalAudio = !1, this._muteLocalAudio = !1, this._isInitLocalAudio = !1, this.onCleanPlayerCallback = null, this._isInit = !1
        }
        get isBroadcastValid() {
            return this._isBroadcastValid
        }
        set isBroadcastValid(e) {
            cc_mtt.vv.ConsoleLog.log("holdemLive BroadcastValid", e), this._isBroadcastValid = e, this.updateLocalVideoActivation()
        }
        get currentRole() {
            return this._role
        }
        checkPermissions() {
            return p.checkPermissions()
        }
        getAllPlayerAvatarKey() {
            return Object.keys(this._playerIconMap)
        }
        getPlayerAvatarCount() {
            return Object.keys(this._playerIconMap).length
        }
        addPlayerAvatar(e, i) {
            this._playerIconMap[i] || (this._playerIconMap[i] = new g), this._playerIconMap[i].playerIcon = e, this._playerIconMap[i].uid = i, cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive addPlayerAvatar", i)
        }
        removeAllPlayerAvatar() {
            Object.values(this._playerIconMap).forEach((e => {
                a(e.sprRenderIcon) && e.sprRenderIcon.node.destroy()
            })), this._playerIconMap = {}
        }
        removePlayerAvatar(e) {
            this._playerIconMap[e] && (a(this._playerIconMap[e].sprRenderIcon) && this._playerIconMap[e].sprRenderIcon.node.destroy(), delete this._playerIconMap[e], cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive removePlayerAvatar", e))
        }
        setRoomData(e, i, t) {
            this._channelName = e, this._uid = i, this.activeLive = t.isSelfLiveAvailable() && t.isLiveValid(), this._role = t.getSelfRole(), this.holdemRoom = t, cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive setRoomData", this._uid, this.activeLive, this._role)
        }
        init(e, i, t) {
            if (!this._isInit && (this._isInit = !0, this.onInitCallback = i, this.onCleanPlayerCallback = t, cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive init"), l.isNative && l.os == l.OS.ANDROID)) {
                let e = s.reflection.callStaticMethod("com.cocos.game.AppActivity", "emulatorCheck", "()I");
                this._runningOnDevice = 1 == e ? 1 : 0
            }
            this.activeLive = e.isSelfLiveAvailable() && e.isLiveValid(), this.createVideoEngine()
        }
        onDestroy() {}
        playLive() {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive playLive"), this.activeLive = !0, Object.values(this._playerIconMap).forEach((e => {
                a(e.sprRenderIcon) && (e.sprRenderIcon.node.active = this.activeLive)
            })), e.clearSdkListener(), this.leaveVideoChannel(), this.updateLocalVideoActivation(), this.setSdkListener(), this.joinVideoChannel()
        }
        stopLive() {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive stopLive"), Object.values(this._playerIconMap).forEach((e => {
                a(e.sprRenderIcon) && (e.sprRenderIcon.node.active = !1)
            })), this.activeLive = !1
        }
        refreshLivePlayerAvatar(e, i) {
            this.addPlayerAvatar(e, i), a(this._playerIconMap[i].sprRenderIcon) && a(this._playerIconMap[i].playerIcon) && this.reparentSprRenderIcon(this._playerIconMap[i].sprRenderIcon, this._playerIconMap[i].playerIcon)
        }
        setVideoClientRole(i, t = !1) {
            if (cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive setVideoClientRole", i), this._role = i, e.isEngineValid()) {
                switch (i) {
                    case e.ROLE.CELEBRITY:
                    case e.ROLE.ANNOUNCER:
                        p.setClientRole(p.CLIENT_ROLE_BROADCASTER);
                        break;
                    case e.ROLE.NORMAL:
                    case e.ROLE.ADMIN:
                    default:
                        p.setClientRole(p.CLIENT_ROLE_AUDIENCE)
                }
                this.updateLocalVideoActivation(t), p.enableAudioVolumeIndication(500)
            }
        }
        updateLocalVideoActivation(i = !1) {
            if (cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive updateLocalVideoActivation", this.holdemRoom && this.holdemRoom.isSelected(), this._lastEnableLocalAudio, this._lastEnableLocalVideo, this.activeLive, i), e.isEngineValid() && this.holdemRoom && this.holdemRoom.isSelected()) switch (this._role) {
                case e.ROLE.CELEBRITY:
                    this.enableSdkLocalAudio(this.activeLive && this._lastEnableLocalAudio, i), this.enableSdkLocalVideo(this.activeLive && this._lastEnableLocalVideo);
                    break;
                case e.ROLE.ANNOUNCER:
                    this.enableSdkLocalAudio(this.activeLive && this._lastEnableLocalAudio, i), this.enableSdkLocalVideo(!1);
                    break;
                case e.ROLE.NORMAL:
                case e.ROLE.ADMIN:
                default:
                    this.enableSdkLocalAudio(!1), this.enableSdkLocalVideo(!1)
            }
        }
        setSdkListener() {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive setSdkListener", this.activeLive), this.activeLive && (p.setRenderListener(this.renderVideoImage.bind(this), this.cleanVideoImage.bind(this)), p.setEngineStateListener(this.onVideoEngineStateChanged.bind(this)), p.setAudioVolumeListener(this.onAudioVolumeIndication.bind(this)))
        }
        static clearSdkListener() {
            p.setRenderListener(null, null), p.setEngineStateListener(null), p.setAudioVolumeListener(null)
        }
        onVideoSdkInit() {
            this.onInitCallback && this.onInitCallback();
            try {
                this.holdemRoom.getSelfRole() == e.ROLE.CELEBRITY && p.setBeautyEffectOptions(!0)
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(this._channelName, "onVideoSdkInit Beauty err", e)
            }
            try {
                this.setVideoClientRole(this.holdemRoom.getSelfRole(), !0), this._joinedChannel && this.leaveVideoChannel(), this.joinVideoChannel()
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(this._channelName, "onVideoSdkInit join err", e)
            }
        }
        static isEngineValid() {
            return 1 == p.getEngineStatus()
        }
        createVideoEngine() {
            if (this.setSdkListener(), e.isEngineValid()) return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive Engine already init"), void this.onVideoSdkInit();
            e._needCreateVideoEngine && (e._needCreateVideoEngine = !1, p.createEngine(p.CHANNEL_PROFILE_LIVE_BROADCASTING, {
                width: 720,
                height: 720
            }, p.VIDEO_FRAME_RATE_FPS_15, p.VIDEO_ORIENTATION_MODE_ADAPTIVE))
        }
        removeVideoEngine() {
            e.destroyVideoEngine(), e._needCreateVideoEngine = !0
        }
        renderVideoImage(e, i, t, o, n, l, r) {
            if (!this._playerIconMap || !this._playerIconMap[r]) return;
            if (!this.activeLive || !a(this._playerIconMap[r].playerIcon)) return;
            let d = new Uint8Array(s.fileUtils.getDataFromFile(e));
            if (null == d) return;
            let h = 1,
                _ = 1,
                p = Math.abs(n);
            90 == p || 270 == p ? _ = 1 == this._runningOnDevice ? 1 : -1 : h = 1 == this._runningOnDevice ? 1 : -1, this.setIconTexture(d, c.PixelFormat.RGBA8888, t, o, n, h, _, r)
        }
        cleanVideoImage(e, i) {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive cleanImage reason=" + i + ", uid=" + e), this._playerIconMap[e] && (a(this._playerIconMap[e].sprRenderIcon) && (this._playerIconMap[e].sprRenderIcon.node.active = !1), this.onCleanPlayerCallback && this.onCleanPlayerCallback(e))
        }
        onVideoEngineStateChanged(e) {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive VideoEngineStateChanged", e), 1 == e && this.onVideoSdkInit()
        }
        joinVideoChannel() {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive joinVideoChannel", this.activeLive, this._joinedChannel), this.activeLive && !this._joinedChannel && e.isEngineValid() && (p.joinChannel(this._channelName, this._uid), this._joinedChannel = !0)
        }
        leaveVideoChannel() {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive leaveVideoChannel", this.activeLive), this.activeLive && (p.leaveChannel(), this._joinedChannel = !1)
        }
        setIconTexture(e, i, t, o, n = 0, l = 1, s = 1, _) {
            try {
                if (!a(this._playerIconMap[_].playerIcon)) return void cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive _playerIcon is not valid");
                if (a(this._playerIconMap[_].sprRenderIcon)) this._playerIconMap[_].sprRenderIcon.node.active = !0;
                else {
                    cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive create _sprRenderIcon", _);
                    let e = new r;
                    e.name = "videoRenderIcon", this._playerIconMap[_].sprRenderIcon = e.addComponent(d), cc_mtt.vv.ConsoleLog.log("holdemLive videoRender parent to:", this.getNodeHierarchy(this._playerIconMap[_].playerIcon.node, 6)), this.reparentSprRenderIcon(this._playerIconMap[_].sprRenderIcon, this._playerIconMap[_].playerIcon), this._playerIconMap[_].sprRenderIcon.spriteFrame = new h;
                    let i = new c;
                    this._playerIconMap[_].sprRenderIcon.spriteFrame.texture = i, this._playerIconMap[_].sprRenderIcon.type = d.Type.SIMPLE, this._playerIconMap[_].sprRenderIcon.sizeMode = d.SizeMode.CUSTOM
                }
                this._playerIconMap[_].sprRenderIcon.node.setScale(l, s), this._playerIconMap[_].sprRenderIcon.node.angle = -n;
                let p = cc_mtt.vv.AssetsManager.texture_InitWithData(e, i, t, o, !1);
                this._playerIconMap[_].sprRenderIcon.spriteFrame.texture = p
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive err", e)
            }
        }
        reparentSprRenderIcon(e, i) {
            let t = e.node;
            t.parent != i.sprite.node.getParent() && (t.setParent(i.sprite.node.getParent()), t.setPosition(i.sprite.node.position), t.setScale(i.sprite.node.scale), t.getComponent(_).setAnchorPoint(i.sprite.node.getComponent(_).anchorPoint), t.setRotation(i.sprite.node.rotation), t.getComponent(_).setContentSize(i.sprite.node.getComponent(_).contentSize.width, i.sprite.node.getComponent(_).contentSize.height), t.setSiblingIndex(i.sprite.node.getSiblingIndex() + 1))
        }
        onAudioVolumeIndication(i, t) {
            let o = JSON.parse(i);
            null != o && o instanceof Array && 1 == o.length && 0 == o[0].uid && (this.currentRole == e.ROLE.CELEBRITY ? this._playerIconMap[this._uid] && a(this._playerIconMap[this._uid].playerIcon) && (this._enableLocalAudio || (cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive onAudioVolumeIndication check CELEBRITY enableLocalAudio false"), this.enableSdkLocalAudio(!1, !0))) : this._enableLocalAudio || (cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive onAudioVolumeIndication check OTHER enableLocalAudio false"), this.enableSdkLocalAudio(!1, !0)))
        }
        isSelfVideoStreaming() {
            return this.isPlayerVideoStreaming(this._uid)
        }
        isPlayerVideoStreaming(i) {
            return !!this._playerIconMap[i] && (this._uid == i ? e.isEngineValid() && this._joinedChannel && this._enableLocalVideo && !this._muteLocalVideo : this._playerIconMap[i].sprRenderIcon && this._playerIconMap[i].sprRenderIcon.node.active)
        }
        isSelfAudioStreaming() {
            return this.isPlayerAudioStreaming(this._uid)
        }
        isPlayerAudioStreaming(i) {
            return !(!this.holdemRoom || !this.holdemRoom.isCelebrity(i)) && (this._uid == i ? e.isEngineValid() && this._joinedChannel && this._enableLocalAudio && !this._muteLocalAudio : this.holdemRoom.store && this.holdemRoom.store.checkMuteList(i))
        }
        isSelfStreaming() {
            return this.isPlayerStreaming(this._uid)
        }
        isPlayerStreaming(e) {
            return this.isPlayerAudioStreaming(e) || this.isPlayerVideoStreaming(e)
        }
        enableLocalVideo(e) {
            return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive manualLocalVideo", e), this._lastEnableLocalVideo = e, this.enableSdkLocalVideo(this._lastEnableLocalVideo)
        }
        enableSdkLocalVideo(e) {
            cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive sdkLocalVideo", this._enableLocalVideo, e, this.isBroadcastValid, this._isInitLocalVideo);
            let i = e && this.isBroadcastValid;
            if (!this._isInitLocalVideo || this._enableLocalVideo != i) return this._isInitLocalVideo = !0, this._enableLocalVideo = i, this._playerIconMap[this._uid] && a(this._playerIconMap[this._uid].sprRenderIcon) && (this._playerIconMap[this._uid].sprRenderIcon.node.active = this._enableLocalVideo), p.enableLocalVideo(this._enableLocalVideo)
        }
        muteLocalVideo(e) {
            return this._muteLocalVideo = e, p.muteLocalVideo(e)
        }
        muteRemoteVideo(e, i) {
            return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive muteRemoteVideo", e, i), this._playerIconMap[e] && a(this._playerIconMap[e].sprRenderIcon) && (this._playerIconMap[e].sprRenderIcon.node.active = !i), p.muteRemoteVideo(e, i)
        }
        muteAllRemoteVideo(e) {
            return p.muteAllRemoteVideo(e)
        }
        enableLocalAudio(e) {
            return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive manualLocalAudio", e), this._lastEnableLocalAudio = e, this.enableSdkLocalAudio(this._lastEnableLocalAudio)
        }
        enableSdkLocalAudio(e, i = !1) {
            return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive enableSdkLocalAudio", this._enableLocalAudio, e, this._isInitLocalAudio, i), this._isInitLocalAudio = !0, this._enableLocalAudio = e, this._playerIconMap[this._uid] && a(this._playerIconMap[this._uid].playerIcon) && this._playerIconMap[this._uid].playerIcon.activeCelebrityAudioIcon(this._enableLocalAudio), this.muteLocalAudio(!this._enableLocalAudio), p.enableLocalAudio(this._enableLocalAudio)
        }
        muteLocalAudio(e) {
            return this._muteLocalAudio = e, p.muteLocalAudio(e)
        }
        muteRemoteAudio(e, i) {
            return cc_mtt.vv.ConsoleLog.log(this._channelName, "holdemLive muteRemoteAudio", e, i), p.muteRemoteAudio(e, i)
        }
        muteAllRemoteAudio(e) {
            return p.muteAllRemoteVideo(e)
        }
        static getSdkStatus() {
            return p.getEngineStatus()
        }
        static destroyVideoEngine() {
            l.isNative && (e.clearSdkListener(), e.isEngineValid() && (p.destroyEngine(), e._needCreateVideoEngine = !0))
        }
        getNodeHierarchy(e, i = 10) {
            let t = e,
                o = e.name;
            for (; t.parent && i > 0;) {
                o = t.parent.name.concat("/", o), t = t.parent, i--
            }
            return o
        }
    }).ROLE = t({
        NORMAL: 0,
        CELEBRITY: 1,
        ANNOUNCER: 2,
        ADMIN: 3
    }), u._needCreateVideoEngine = !0, L = u)) || L);
    i._RF.pop()
}
import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cv.js";

function main() {
    var s, l;
    t._RF.push({}, "80d38TB2LhDRZo7nU8e0nII", "AgoraSdk", void 0);
    const {
        ccclass: c,
        property: r
    } = o;
    let S = e("default", c(((l = class e {
        static currentChannelProfile() {
            return e.channelProfile
        }
        static getVideoDimension(e) {
            return {
                width: e,
                height: 0
            }
        }
        static createEngine(t, o, s = 15, l = 0) {
            n.appConfig.getLobbyConfig().showStarSeats && (e.engineStatus = 0, e.channelProfile = t, i.isNative && i.os == i.OS.ANDROID ? a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "createEngine", "(Ljava/lang/String;Ljava/lang/String;IIIII)V", "e3e16446c0d44bb6a04597f0668b9b6a", "", t, o.width, o.height, s, l) : i.isNative && i.os == i.OS.IOS ? a.reflection.callStaticMethod("AgoraSdk", "createEngine:token:profile:vdWidth:vdHeight:fps:orientation:", "e3e16446c0d44bb6a04597f0668b9b6a", "", t, o.width, o.height, s, l) : i.isNative && i.os == i.OS.WINDOWS ? a.cppbridge.sendMessage("AgoraSdk", "createEngine", "e3e16446c0d44bb6a04597f0668b9b6a", "", t, o.width, o.height, s, l) : i.isNative && i.os == i.OS.OSX ? a.reflection.callStaticMethod("AgoraSdk", "createEngine:token:profile:vdWidth:vdHeight:fps:orientation:", "e3e16446c0d44bb6a04597f0668b9b6a", "", t, o.width, o.height, s, l) : console.log("createEngine: invalid platform"))
        }
        static destroyEngine() {
            n.appConfig.getLobbyConfig().showStarSeats && (e.isWorking = !1, i.isNative && i.os == i.OS.ANDROID ? a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "destroyEngine", "()V") : i.isNative && i.os == i.OS.IOS ? a.reflection.callStaticMethod("AgoraSdk", "destroyEngine") : i.isNative && i.os == i.OS.WINDOWS ? a.cppbridge.sendMessage("AgoraSdk", "destroyEngine") : i.isNative && i.os == i.OS.OSX ? a.reflection.callStaticMethod("AgoraSdk", "destroyEngine") : console.log("destroyEngine: invalid platform"), e.engineStatus = 2)
        }
        static getEngineStatus() {
            return e.engineStatus
        }
        static setEngineStateListener(t) {
            n.appConfig.getLobbyConfig().showStarSeats && (e.engineStateListener = t)
        }
        static onEngineStateChanged(t) {
            n.appConfig.getLobbyConfig().showStarSeats && (console.log("Engine state=" + t), e.engineStatus = t, e.engineStateListener && e.engineStateListener(t))
        }
        static joinChannel(t, o) {
            n.appConfig.getLobbyConfig().showStarSeats && (e.channelName = t, e.uid = o, e.isWorking = !0, i.isNative && i.os == i.OS.ANDROID ? a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "joinChannel", "(Ljava/lang/String;I)V", t, o) : i.isNative && i.os == i.OS.IOS ? a.reflection.callStaticMethod("AgoraSdk", "joinChannel:uid:", t, o) : i.isNative && i.os == i.OS.WINDOWS ? a.cppbridge.sendMessage("AgoraSdk", "joinChannel", t, o) : i.isNative && i.os == i.OS.OSX ? a.reflection.callStaticMethod("AgoraSdk", "joinChannel:uid:", t, o) : console.log("joinChannel: invalid platform"))
        }
        static leaveChannel() {
            n.appConfig.getLobbyConfig().showStarSeats && (e.isWorking = !1, i.isNative && i.os == i.OS.ANDROID ? a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "leaveChannel", "()V") : i.isNative && i.os == i.OS.IOS ? a.reflection.callStaticMethod("AgoraSdk", "leaveChannel") : i.isNative && i.os == i.OS.WINDOWS ? a.cppbridge.sendMessage("AgoraSdk", "leaveChannel") : i.isNative && i.os == i.OS.OSX ? a.reflection.callStaticMethod("AgoraSdk", "leaveChannel") : console.log("destroyEngine: invalid platform"))
        }
        static checkPermissions() {
            let e = !1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? e = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "checkPermissions", "()Z") : i.isNative && i.os == i.OS.IOS || i.isNative && i.os == i.OS.WINDOWS || i.isNative && i.os == i.OS.OSX ? e = !0 : console.log("checkPermissions: invalid platform"), e) : e
        }
        static setRenderListener(t, o) {
            n.appConfig.getLobbyConfig().showStarSeats && (e.renderFrameListener = t, e.cleanFrameListener = o)
        }
        static renderFrame(t, o, i, a, s, l, c) {
            n.appConfig.getLobbyConfig().showStarSeats && e.renderFrameListener && e.renderFrameListener(t, o, i, a, s, l, c)
        }
        static cleanFrame(t, o) {
            n.appConfig.getLobbyConfig().showStarSeats && e.cleanFrameListener && e.cleanFrameListener(t, o)
        }
        static getConnectionState() {
            let e = 0;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? e = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "getConnectionState", "()I") : i.isNative && i.os == i.OS.IOS ? e = a.reflection.callStaticMethod("AgoraSdk", "getConnectionState") : i.isNative && i.os == i.OS.WINDOWS ? e = a.cppbridge.sendMessage("AgoraSdk", "getConnectionState") : i.isNative && i.os == i.OS.OSX ? e = a.reflection.callStaticMethod("AgoraSdk", "getConnectionState") : console.log("getConnectionState: invalid platform"), e) : e
        }
        static connectionStateChanged(t, o) {
            n.appConfig.getLobbyConfig().showStarSeats && (console.log("state=" + t + ", reason=" + o), t == e.CONNECTION_STATE_FAILED && 1 == e.isWorking && (e.leaveChannel(), e.joinChannel(e.channelName, e.uid)))
        }
        static error(e) {
            console.log("err=" + e)
        }
        static isFrontCamera() {
            return e.cameraType == e.CAMERA_TYPE_FRONT
        }
        static currentCameraType() {
            return e.cameraType
        }
        static switchCamera() {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "switchCamera", "()I") : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "switchCamera") : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "switchCamera") : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "switchCamera") : console.log("checkPermissions: invalid platform"), 0 == t && (e.cameraType = e.isFrontCamera() ? e.CAMERA_TYPE_REAR : e.CAMERA_TYPE_FRONT), t) : t
        }
        static setClientRole(t) {
            let o = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? o = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "setClientRole", "(I)I", t) : i.isNative && i.os == i.OS.IOS ? o = a.reflection.callStaticMethod("AgoraSdk", "setClientRole:", t.toString()) : i.isNative && i.os == i.OS.WINDOWS ? o = a.cppbridge.sendMessage("AgoraSdk", "setClientRole", t) : i.isNative && i.os == i.OS.OSX ? o = a.reflection.callStaticMethod("AgoraSdk", "setClientRole:", t.toString()) : console.log("setClientRole: invalid platform"), 0 == o && (e.clientRole = t), o) : o
        }
        static currentClientRole() {
            return e.clientRole
        }
        static clientRoleChanged(e, t) {
            console.log("clientRoleChanged oldRole=" + e + ", newRole=" + t)
        }
        static setEncryptionSecret(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "setEncryptionSecret", "(Ljava/lang/String;)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "setEncryptionSecret:", e) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "setEncryptionSecret", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "setEncryptionSecret:", e) : console.log("setEncryptionSecret: invalid platform"), t) : t
        }
        static enableLocalVideo(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "enableLocalVideo", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "enableLocalVideo:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "enableLocalVideo", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "enableLocalVideo:", e.toString()) : console.log("enableLocalVideo: invalid platform"), t) : t
        }
        static muteLocalVideo(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteLocalVideo", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "muteLocalVideo:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "muteLocalVideo", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "muteLocalVideo:", e.toString()) : console.log("muteLocalVideo: invalid platform"), t) : t
        }
        static muteRemoteVideo(e, t) {
            let o = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? o = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteRemoteVideo", "(IZ)I", e, t) : i.isNative && i.os == i.OS.IOS ? o = a.reflection.callStaticMethod("AgoraSdk", "muteRemoteVideo:muted:", e, t) : i.isNative && i.os == i.OS.WINDOWS ? o = a.cppbridge.sendMessage("AgoraSdk", "muteRemoteVideo", e, t) : i.isNative && i.os == i.OS.OSX ? o = a.reflection.callStaticMethod("AgoraSdk", "muteRemoteVideo:muted:", e, t) : console.log("muteRemoteVideo: invalid platform"), o) : o
        }
        static muteAllRemoteVideo(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteAllRemoteVideo", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "muteAllRemoteVideo:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "muteAllRemoteVideo", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "muteAllRemoteVideo:", e.toString()) : console.log("muteAllRemoteVideo: invalid platform"), t) : t
        }
        static enableLocalAudio(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "enableLocalAudio", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "enableLocalAudio:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "enableLocalAudio", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "enableLocalAudio:", e.toString()) : console.log("enableLocalAudio: invalid platform"), t) : t
        }
        static muteLocalAudio(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteLocalAudio", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "muteLocalAudio:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "muteLocalAudio", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "muteLocalAudio:", e.toString()) : console.log("muteLocalAudio: invalid platform"), t) : t
        }
        static muteRemoteAudio(e, t) {
            let o = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? o = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteRemoteAudio", "(IZ)I", e, t) : i.isNative && i.os == i.OS.IOS ? o = a.reflection.callStaticMethod("AgoraSdk", "muteRemoteAudio:muted:", e, t) : i.isNative && i.os == i.OS.WINDOWS ? o = a.cppbridge.sendMessage("AgoraSdk", "muteRemoteAudio", e, t) : i.isNative && i.os == i.OS.OSX ? o = a.reflection.callStaticMethod("AgoraSdk", "muteRemoteAudio:muted:", e, t) : console.log("muteRemoteAudio: invalid platform"), o) : o
        }
        static muteAllRemoteAudio(e) {
            let t = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? t = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "muteAllRemoteAudio", "(Z)I", e) : i.isNative && i.os == i.OS.IOS ? t = a.reflection.callStaticMethod("AgoraSdk", "muteAllRemoteAudio:", e.toString()) : i.isNative && i.os == i.OS.WINDOWS ? t = a.cppbridge.sendMessage("AgoraSdk", "muteAllRemoteAudio", e) : i.isNative && i.os == i.OS.OSX ? t = a.reflection.callStaticMethod("AgoraSdk", "muteAllRemoteAudio:", e.toString()) : console.log("muteAllRemoteAudio: invalid platform"), t) : t
        }
        static setAudioVolumeListener(t) {
            n.appConfig.getLobbyConfig().showStarSeats && (e.audioVolumeListener = t)
        }
        static audioVolumeIndication(t, o) {
            n.appConfig.getLobbyConfig().showStarSeats && e.audioVolumeListener && e.audioVolumeListener(t, o)
        }
        static enableAudioVolumeIndication(e, t = 3, o = !1) {
            let s = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? s = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "enableAudioVolumeIndication", "(IIZ)I", e, t, o) : i.isNative && i.os == i.OS.IOS ? s = a.reflection.callStaticMethod("AgoraSdk", "enableAudioVolumeIndication:smooth:report_vad:", e, t, o) : i.isNative && i.os == i.OS.WINDOWS ? s = a.cppbridge.sendMessage("AgoraSdk", "enableAudioVolumeIndication", e, t, o) : i.isNative && i.os == i.OS.OSX ? s = a.reflection.callStaticMethod("AgoraSdk", "enableAudioVolumeIndication:smooth:report_vad:", e, t, o) : console.log("enableAudioVolumeIndication: invalid platform"), s) : s
        }
        static setBeautyEffectOptions(e, t = 1, o = .7, s = .5, l = .1) {
            let c = -1;
            return n.appConfig.getLobbyConfig().showStarSeats ? (i.isNative && i.os == i.OS.ANDROID ? c = a.reflection.callStaticMethod("com.cocos.game.AgoraSdk", "setBeautyEffectOptions", "(ZIFFF)I", e, t, o, s, l) : i.isNative && i.os == i.OS.IOS ? c = a.reflection.callStaticMethod("AgoraSdk", "setBeautyEffectOptions:contrastLevel:lightening:smoothness:redness:", e, t, o, s, l) : i.isNative && i.os == i.OS.WINDOWS ? c = a.cppbridge.sendMessage("AgoraSdk", "setBeautyEffectOptions", e, t, o, s, l) : i.isNative && i.os == i.OS.OSX ? c = a.reflection.callStaticMethod("AgoraSdk", "setBeautyEffectOptions:contrastLevel:lightening:smoothness:redness:", e, t, o, s, l) : console.log("setBeautyEffectOptions: invalid platform"), c) : c
        }
    }).channelProfile = 0, l.CHANNEL_PROFILE_COMMUNICATION = 0, l.CHANNEL_PROFILE_LIVE_BROADCASTING = 1, l.CHANNEL_PROFILE_GAME = 2, l.VIDEO_VD_120x120 = 0, l.VIDEO_VD_160x120 = 1, l.VIDEO_VD_180x180 = 2, l.VIDEO_VD_240x180 = 3, l.VIDEO_VD_320x180 = 4, l.VIDEO_VD_240x240 = 5, l.VIDEO_VD_320x240 = 6, l.VIDEO_VD_424x240 = 7, l.VIDEO_VD_360x360 = 8, l.VIDEO_VD_480x360 = 9, l.VIDEO_VD_640x360 = 10, l.VIDEO_VD_480x480 = 11, l.VIDEO_VD_640x480 = 12, l.VIDEO_VD_840x480 = 13, l.VIDEO_VD_960x720 = 14, l.VIDEO_VD_1280x720 = 15, l.VIDEO_FRAME_RATE_FPS_1 = 1, l.VIDEO_FRAME_RATE_FPS_7 = 7, l.VIDEO_FRAME_RATE_FPS_10 = 10, l.VIDEO_FRAME_RATE_FPS_15 = 15, l.VIDEO_FRAME_RATE_FPS_24 = 24, l.VIDEO_FRAME_RATE_FPS_30 = 30, l.VIDEO_ORIENTATION_MODE_ADAPTIVE = 0, l.VIDEO_ORIENTATION_MODE_FIXED_LANDSCAPE = 1, l.VIDEO_ORIENTATION_MODE_FIXED_PORTRAIT = 2, l.engineStatus = 0, l.engineStateListener = null, l.channelName = "SimpleVideo", l.uid = 0, l.isWorking = !1, l.renderFrameListener = null, l.cleanFrameListener = null, l.CONNECTION_STATE_DISCONNECTED = 1, l.CONNECTION_STATE_CONNECTING = 2, l.CONNECTION_STATE_CONNECTED = 3, l.CONNECTION_STATE_RECONNECTING = 4, l.CONNECTION_STATE_FAILED = 5, l.CONNECTION_STATE_DEFAULT = 0, l.cameraType = 1, l.CAMERA_TYPE_FRONT = 1, l.CAMERA_TYPE_REAR = 0, l.clientRole = 2, l.CLIENT_ROLE_BROADCASTER = 1, l.CLIENT_ROLE_AUDIENCE = 2, l.audioVolumeListener = null, s = l)) || s);
    S = e("default", S), t._RF.pop()
}
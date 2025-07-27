import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./httpApis.js";
import * as c from "./mttconfig.js";
import * as r from "./Pb.js";
import * as n from "./MTTConnector.js";
import * as a from "./cv.js";

function main() {
    t._RF.push({}, "0a993eo7uZHzoVV8Vr574uc", "VoiceRecorder", void 0);
    e("VoiceRecorder", class {
        get isReady() {
            return !this.isRecording && !this.isConverting
        }
        get filePath() {
            return (i.fileUtils ? i.fileUtils.getWritablePath() : "/") + "lvRecord.mp3"
        }
        constructor(e) {
            this.isConverting = !1, this.isRecording = !1, this._recorder = null, this._recordStartTime = 0, this._websocket = null, this.type = 0, this.id = 0, cc_mtt.vv.ConsoleLog.log("instantiate VoiceRecorder"), this._websocket = e
        }
        initMediaRecorder() {
            window.navigator.mediaDevices ? window.navigator.mediaDevices.getUserMedia({
                audio: !0
            }).then((e => {
                this._recorder = new MediaRecorder(e), this._recorder.ondataavailable = e => {
                    this.isConverting && this.upload(e.data, ".mp3", this.type, this.id), this.reset()
                }
            })).catch((e => {
                cc_mtt.vv.ConsoleLog.log("init MediaRecorder failed", e)
            })) : cc_mtt.vv.ConsoleLog.log("Browser not support mediaDevices")
        }
        start(e) {
            this.isRecording && (cc_mtt.vv.ConsoleLog.log("Start recording audio..."), this._recordStartTime = Date.now(), e && e())
        }
        startRecorder(e) {
            if (a.appConfig.getGameConfig().audioChatEnabled)
                if (o.isNative) try {
                    o.os === o.OS.ANDROID ? this.isRecording = i.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoRecord", "(I)Z", 0) : o.os === o.OS.IOS && (n.instance.cv.native.AuthMicphone(), this.isRecording = n.instance.cv.native.DoStartRecord()), this.start(e)
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                } else this._recorder ? (this.isRecording = !0, this._recorder.start(), this.start(e)) : this.initMediaRecorder()
        }
        upload(e, t, i, o) {
            s.sendPlayerAudioRecord(e, t, i, o, (e => {
                let t = c.roomVoiceServerHostUrl + "/" + e,
                    s = {
                        roomId: o,
                        voiceUrl: t
                    };
                cc_mtt.vv.ConsoleLog.log("send voice message request: ", JSON.stringify(s)), this._websocket && (i == c.GAME_TYPE.PINEAPPLE_NORMAL || i == c.GAME_TYPE.PINEAPPLE_LOOP || i == c.GAME_TYPE.MTT_PINEAPPLE ? this._websocket.Send(r.pineapple.VoiceReq.create(s)) : i != c.GAME_TYPE.SNG_HOLDEM && i != c.GAME_TYPE.MTT_HOLDEM || this._websocket.Send(r.holdem.VoiceReq.create(s))), this.type = 0, this.id = 0
            }))
        }
        reset() {
            this._recordStartTime = 0, this.isRecording = !1, this.isConverting = !1
        }
        stopRecorderAndUpload(e, t) {
            if (a.appConfig.getGameConfig().audioChatEnabled)
                if (this.type = e, this.id = t, o.isNative) try {
                    o.os === o.OS.ANDROID ? i.reflection.callStaticMethod("com/cocos/game/AppActivity", "StopRecord", "(I)V", 0) : o.os === o.OS.IOS && n.instance.cv.native.DoStopRecord(), this.isConverting = !0
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                } else this._recorder && (this._recorder.stop(), this.isConverting = !0)
        }
        cancelRecorder() {
            if (a.appConfig.getGameConfig().audioChatEnabled) {
                if (o.isNative) try {
                    o.os === o.OS.ANDROID ? i.reflection.callStaticMethod("com/cocos/game/AppActivity", "StopRecord", "(I)V", 0) : o.os === o.OS.IOS && n.instance.cv.native.DoStopRecord()
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                } else this._recorder && (this._recorder.stop(), this.isConverting = !1);
                cc_mtt.vv.ConsoleLog.log("Audio record cancelled...")
            }
        }
        registerVoiceRecordFinishCallback(e) {
            o.isNative && n.instance.cv.MessageCenter.register("on_voice_record_finish", this.onVoiceRecordFinish.bind(this), e)
        }
        unregisterVoiceRecordFinishCallback(e) {
            o.isNative && n.instance.cv.MessageCenter.unregister("on_voice_record_finish", e)
        }
        onVoiceRecordFinish() {
            if (this.isConverting) {
                let e = this.filePath,
                    t = e.substr(e.lastIndexOf("."));
                cc_mtt.vv.ConsoleLog.log(e);
                let o = new Uint8Array(i.fileUtils.getDataFromFile(e));
                this.upload(o, t, this.type, this.id)
            }
            this.reset()
        }
    }), t._RF.pop()
}
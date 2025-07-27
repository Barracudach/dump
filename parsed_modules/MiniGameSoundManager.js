import * as u from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cv.js";

function main() {
    var a;
    e._RF.push({}, "9a104ODQY9LRI1YPDaz9Rhf", "MiniGameSoundManager", void 0);
    const {
        ccclass: o,
        property: c
    } = u;
    t("default", o(a = class extends i {
        static play(t, e = !1, i = .5, u = !1) {
            s.tools.IsMiniGameMusicOn() && s.AudioMgr.playMusic(t, e, i, u)
        }
        static playMusic(t, e = !1, i = .5, u = !0) {
            s.tools.IsMiniGameMusicOn() && s.AudioMgr.playMusic(t, e, i, u)
        }
        static playSoundEffect(t, e = !1, i = .5, u = !0) {
            s.tools.IsMiniGameSoundEffectOn() && s.AudioMgr.playEffect(t, e, i, u)
        }
        static playEffect(t, e, i = .5) {
            if (s.tools.IsMiniGameSoundEffectOn()) return s.AudioMgr.executePlayEffect(t, e, i)
        }
        static playButtonSound(t, e = !1, i = .5, u = !0) {
            s.tools.IsMiniGameSoundEffectOn() && s.AudioMgr.playButtonSound(t, e, i, u)
        }
        static executePlayEffect(t, e, i = .5) {
            return s.AudioMgr.executePlayEffect(t, e, i)
        }
        static getAudioID(t) {
            return s.AudioMgr.getAudioID(t)
        }
        static pause(t) {
            s.AudioMgr.pause(t)
        }
        static pauseAll() {
            s.AudioMgr.pauseAll()
        }
        static resume(t) {
            s.AudioMgr.resume(t)
        }
        static resumeAll() {
            s.AudioMgr.resumeAll()
        }
        static stop(t) {
            s.AudioMgr.stop(t)
        }
        static stopMusic() {
            s.AudioMgr.stopMusic()
        }
    }) || a);
    e._RF.pop()
}
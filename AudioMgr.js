import * as t from "./cc.js";
import * as u from "./cc.js";
import * as o from "./cc.js";
import * as n from "./HashMap.js";
import * as s from "./cv.js";
import * as l from "./AudioEngine.js";
import * as r from "./MultipleGame.js";
import * as a from "./AudioComp.js";
import * as i from "./soundEffect.js";

function main() {
    t._RF.push({}, "56f9dWYEBRC5pTHPnimJ6Gc", "AudioMgr", void 0);
    e("SoundType", function(e) {
        return e[e.Normal = 0] = "Normal", e[e.Effect = 1] = "Effect", e[e.Music = 2] = "Music", e
    }({}));
    class c {
        constructor() {
            this._vAudioIDMap = new n, this._vAudioInstance = new n, this._vAudioInstanceType = new n, this._buttonSoundUrl = "zh_CN/game/dzpoker/audio/buttonSound/"
        }
        static getInstance() {
            return c._g_instance || (c._g_instance = new c, l.init()), c._g_instance
        }
        play(e, t = !1, n = .5, l = !1, r = -1) {
            if (!s.tools.isPlayMusic() && !l) return;
            if (s.tools.getEnterbackState()) return;
            let a = e => {
                this.executePlay(e, t, n)
            };
            e.includes(".mp3") && (e = e.substr(0, e.length - 4));
            let i = u.get(e, o);
            !i || i && !i.loaded ? u.load(e, ((e, t) => {
                if (e) return console.error(e), null;
                a(t)
            })) : a(i)
        }
        playByAudioComp(e) {
            this.play(e.url, e.isLoop, e.volume, e.bIgnore, e.roomId)
        }
        playMusic(e, t = !1, n = .5, l = !1, r = -1) {
            if (!s.tools.isPlayMusic() && !l) return;
            if (s.tools.getEnterbackState()) return;
            let a = e => {
                this.executePlayMusic(e, t, n)
            };
            e.includes(".mp3") && (e = e.substr(0, e.length - 4));
            let i = u.get(e, o);
            !i || i && !i.loaded ? u.load(e, o, ((e, t) => {
                if (e) return console.error(e), null;
                a(t)
            })) : a(i)
        }
        playMusicByAudioComp(e) {
            this.playMusic(e.url, e.isLoop, e.volume, e.bIgnore, e.roomId)
        }
        checkCanPlaySoundCashGame(e, t = -1) {
            var u;
            let o = !0;
            return o = !!(-1 !== t && null != (u = r.instance) && u.isCurrentRoom(t) || e === i.PlayerTurn || s.appConfig.getGeneralConfig().multiWindowEnabled), o
        }
        playEffect(e, t = !1, n = .5, l = !1, r = -1) {
            if (!s.tools.isSoundEffectOpen() && !l) return;
            if (s.tools.getEnterbackState()) return;
            let a = e => {
                this.executePlayEffect(e, t, n)
            };
            e.includes(".mp3") && (e = e.substring(0, e.length - 4));
            let i = u.get(e, o);
            !i || i && !i.loaded ? u.load(e, o, ((e, t) => {
                if (e) return console.error(e), null;
                a(t)
            })) : a(i)
        }
        playSoundMiniGame(e) {
            s.roomManager.checkIsMiniGame(e.gameId) ? s.AudioMgr.playEffect(e.url) : s.AudioMgr.playEffectByAudioCompInGameCash(a.Instance().setUrl(e.url).setRoomId(e.roomId))
        }
        playSoundButtonInMiniAndCashGame(e) {
            s.roomManager.checkIsMiniGame(e.gameId) ? this.playEffect(this._buttonSoundUrl + e.url, e.isLoop, e.volume, e.bIgnore) : this.playEffectInCashGame(this._buttonSoundUrl + e.url, e.isLoop, e.volume, e.bIgnore, e.roomId)
        }
        playEffectInCashGame(e, t = !1, n = .5, l = !1, r = -1) {
            if (!s.tools.isSoundEffectOpen() && !l) return;
            if (s.tools.getEnterbackState()) return;
            if (!this.checkCanPlaySoundCashGame(e, r)) return;
            let a = e => {
                this.executePlayEffect(e, t, n)
            };
            e.endsWith(".mp3") && (e = e.substring(0, e.length - 4));
            let i = u.get(e, o);
            !i || i && !i.loaded ? u.load(e, o, ((e, t) => {
                if (e) return console.error(e), null;
                a(t)
            })) : a(i)
        }
        playEffectByAudioCompInGameCash(e) {
            this.playEffectInCashGame(e.url, e.isLoop, e.volume, e.bIgnore, e.roomId)
        }
        executePlay(e, t, u = .5) {
            return l.play(e, t, u)
        }
        executePlayMusic(e, t, u = .5) {
            return l.setMusicVolume(u), l.playMusic(e, t)
        }
        executePlayEffect(e, t, u = .5) {
            return l.setEffectsVolume(u), l.playEffect(e, t)
        }
        setFinishCallback(e, t) {
            l.setFinishCallback(e, t)
        }
        setCurrentTime(e, t) {
            return l.setCurrentTime(e, t)
        }
        playButtonSound(e, t = !1, u = .5, o = !1) {
            console.log("playButtonSound:::" + this._buttonSoundUrl + e), this.playEffect(this._buttonSoundUrl + e, t, u, o)
        }
        getState(e) {
            return l.getState(e)
        }
        getDuration(e) {
            return l.getDuration(e)
        }
        getAudioID(e) {
            let t = -1,
                u = e.substr(e.lastIndexOf("/") + 1),
                o = u.lastIndexOf(".");
            return -1 != o && (u = u.substr(0, o)), this._vAudioIDMap.forEach(((e, o) => {
                if (e === u) return t = o, "break"
            })), t
        }
        stop(e) {
            l.stop(e)
        }
        stopMusic() {
            l.stopMusic()
        }
        stopAll() {
            l.stopAll()
        }
        stopEffect(e) {
            l.stopEffect(e)
        }
        stopAllEffects() {
            l.stopAllEffects()
        }
        preload(e) {}
        uncache(e) {
            l.uncache(e)
        }
        uncacheAll() {
            l.uncacheAll()
        }
        pause(e) {
            l.pause(e)
        }
        pauseMusic() {
            l.pauseMusic()
        }
        pauseAll() {
            l.pauseAll()
        }
        resume(e) {
            l.resume(e)
        }
        resumeAll() {
            l.resumeAll()
        }
        resumeMusic() {
            l.resumeMusic()
        }
        resumeEffect(e) {
            l.resumeEffect(e)
        }
        pauseEffect(e) {
            l.pauseEffect(e)
        }
        releaseAudio(e) {
            this._vAudioIDMap.remove(e)
        }
    }
    e("AudioMgr", c), c._g_instance = null, t._RF.pop()
}
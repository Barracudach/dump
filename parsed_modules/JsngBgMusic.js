import * as t from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as u from "./SoundMixer.js";
import * as e from "./cv.js";

function main() {
    var d, l;
    s._RF.push({}, "2d1bacEL1FNzphjrx0SLOQM", "JsngBgMusic", void 0);
    const {
        ccclass: n,
        property: h
    } = i;
    o("default", n(((l = class o extends t {
        constructor(...o) {
            super(...o), this.bgAudioId = void 0, this._holdemRoom = null
        }
        set holdemRoom(o) {
            this._holdemRoom = o
        }
        static checkAndInitAudioClips(s) {
            this.audioClips.length == this.audioPaths.length && this.audioClips.every((o => o)) ? null == s || s() : (this.releaseAudioClips(), e.resMgr.loadAudioClip(this.audioPaths, (i => {
                i && i.length >= 2 && (o.audioClips = i, null == s || s())
            }), null, !0))
        }
        static releaseAudioClips() {
            this.audioClips.forEach((o => {
                e.resMgr.releaseAsset(o)
            }))
        }
        playBgSound(s) {
            !o.audioClips || o.audioClips.length < 1 || (this.bgAudioId = u.getInstance().playSound(o.audioClips[0], s, !0, 1, !0))
        }
        playOrbitronSound(s = -1) {
            !o.audioClips || o.audioClips.length < 2 || u.getInstance().playSound(o.audioClips[1], s, !1, 1, !1)
        }
        SoundStop() {
            this.bgSoundVolume = 0, void 0 !== this.bgAudioId && e.AudioMgr.stop(this.bgAudioId)
        }
        set bgSoundVolume(o) {
            var s;
            if (void 0 === this.bgAudioId) return;
            const i = null == (s = this._holdemRoom) ? void 0 : s.getWindowIndex();
            u.getInstance().setSoundVolume(i, this.bgAudioId, o)
        }
        get bgSoundVolume() {
            var o;
            if (void 0 === this.bgAudioId) return 0;
            const s = null == (o = this._holdemRoom) ? void 0 : o.getWindowIndex();
            return u.getInstance().getSoundVolume(s, this.bgAudioId)
        }
        Sound_FadeOut_Half(o = 0) {
            this.schedule((() => {
                this.bgSoundVolume -= .05, this.bgSoundVolume <= .5 && (console.log(".....................At 0.05"), this.unscheduleAllCallbacks())
            }), 5e-4, 99, o)
        }
        Sound_FadeOut(o = 0) {
            const s = () => {
                this.bgSoundVolume -= .001, this.bgSoundVolume <= 0 && (this.SoundStop(), this.unscheduleAllCallbacks())
            };
            this.schedule((() => {
                this.bgSoundVolume -= .05, this.bgSoundVolume <= .05 && (this.unscheduleAllCallbacks(), this.schedule(s, 1e-5, 99, o))
            }), 5e-4, 99, o)
        }
        checkToTurnOffSound(o = !0, s = !1) {
            this.unscheduleAllCallbacks(), s ? this.SoundStop() : o ? this.Sound_FadeOut(0) : this.SoundStop()
        }
    }).audioPaths = ["Sounds/GlobalSpins/BGMusic_Loop", "Sounds/GlobalSpins/Orbitron"], l.audioClips = [], d = l)) || d);
    s._RF.pop()
}
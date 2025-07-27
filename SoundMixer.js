import * as n from "./cc.js";
import * as o from "./cv.js";
import * as t from "./CrashTracing.js";
import * as s from "./CrashTracing.js";
import * as i from "./AudioEngine.js";

function main() {
    n._RF.push({}, "1b82dTB96ZGGqi6ZLKVb0gb", "SoundMixer", void 0);
    class u {
        constructor() {
            this.soundMap = new Map, this.masterVolume = 1
        }
    }
    class d {
        constructor() {
            this.soundId = void 0, this.volume = 1
        }
    }
    class a {
        constructor() {
            this.windowSounds = new Map, this.focusWindowIndex = void 0
        }
        get appMasterVolume() {
            return o.tools.isGameplaySoundEffectOpen() ? 1 : 0
        }
        static getInstance() {
            return a._instance || (a._instance = new a, a.getInstance().registerEvents()), a._instance
        }
        registerEvents() {
            o.MessageCenter.register(o.Enum.MessageCenterAction.soundStateChanged, this.onSoundStateChanged.bind(this), this), o.MessageCenter.register(o.Enum.MessageCenterAction.WindowFocusChanged, this.onWindowFocusChanged.bind(this), this), o.MessageCenter.register(o.Enum.MessageCenterAction.WindowRemoved, this.onWindowClosed.bind(this), this)
        }
        onSoundStateChanged(e) {
            this.windowSounds.forEach(((e, n) => {
                e.soundMap.forEach(((e, o) => {
                    this.updateAudioEngineVolume(n, o)
                }))
            }))
        }
        setWindowSoundVolume(e, n) {
            const o = this.windowSounds.get(e);
            o.masterVolume = n, o.soundMap.forEach(((n, o) => {
                this.updateAudioEngineVolume(e, o)
            }))
        }
        stopWindowSounds(e) {
            var n;
            const o = this.windowSounds.get(e);
            null == o || null == (n = o.soundMap) || n.forEach((e => {
                i.stop(e.soundId)
            }))
        }
        setSoundVolume(e, n, o) {
            var t;
            let s = null == (t = this.windowSounds.get(e)) ? void 0 : t.soundMap.get(n);
            s && (s.volume = o)
        }
        getSoundVolume(e, n) {
            var o;
            let t = null == (o = this.windowSounds.get(e)) ? void 0 : o.soundMap.get(n);
            return t ? t.volume : 0
        }
        updateAudioEngineVolume(e, n) {
            const o = this.windowSounds.get(e);
            if (!o) return;
            const t = o.soundMap.get(n);
            if (!t) return;
            const s = o.masterVolume,
                u = t.volume * s * this.appMasterVolume;
            i.setVolume(n, u)
        }
        playSound(e, n, o = !1, a = 1, r = !1) {
            if (!e || n < 0) return -1;
            let l = this.windowSounds.get(n);
            l || (l = new u, this.windowSounds.set(n, l));
            let w = l.soundMap;
            w || (w = new Map, l.soundMap = w);
            const h = this.windowSounds.get(n).masterVolume,
                c = a * h * this.appMasterVolume,
                g = i.play(e, o, c, r);
            let m = new d;
            if (m.soundId = g, m.volume = a, w.set(g, m), this.windowSounds.set(n, l), 0 == c && i.getVolume(g) > 0) {
                var S;
                let e = {
                    volume: a,
                    windowVolume: h,
                    appMasterVolume: this.appMasterVolume,
                    audioEngineVolume: i.getVolume(g)
                };
                null == (S = t.getInstance()) || S.trace(s.SetSoundVolumeError, "SetSoundVolumeError", e)
            }
            return g
        }
        onWindowClosed(e) {
            if (e < 0) return;
            this.stopWindowSounds(e);
            let n = new Map;
            this.windowSounds.forEach(((o, t) => {
                if (t >= e) {
                    let e = this.windowSounds.has(t + 1);
                    n.set(t, e ? this.windowSounds.get(t + 1) : null)
                }
            })), n.forEach(((e, n) => {
                e ? this.windowSounds.set(n, e) : this.windowSounds.delete(n)
            }))
        }
        onWindowFocusChanged(e) {
            if (e < 0) this.windowSounds.forEach(((e, n) => {
                this.setWindowSoundVolume(n, 0)
            }));
            else {
                if (this.focusWindowIndex = e, !this.windowSounds.has(e)) {
                    let n = new Map,
                        o = new u;
                    o.soundMap = n, o.masterVolume = 1, this.windowSounds.set(e, o)
                }
                this.windowSounds.forEach(((n, o) => {
                    const t = o == e ? 1 : 0;
                    this.setWindowSoundVolume(o, t)
                }))
            }
        }
    }
    e("SoundMixer", a), a._instance = void 0, n._RF.pop()
}
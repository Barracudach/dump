import * as t from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./AudioSourceExtra.js";

function main() {
    t._RF.push({}, "d446afTRbZNXbckuHPd4O3o", "AudioEngine", void 0);
    let d = 0,
        h = new Map,
        f = {},
        p = [],
        _ = function(e) {
            var t = d++,
                i = f[e];
            if (i || (i = f[e] = []), 24 <= i.length) {
                let e, t, s = 0;
                const o = i.length;
                for (s = 0; s < o; s++)
                    if (e = i[s], t = v(e), t && !t.isBGM) {
                        t.stop(), t.loop = !1, t.node.emit(c.EventType.ENDED), delete h[e], l.array.fastRemoveAt(i, s);
                        break
                    }
            }
            var s = p.pop() || m(S.getAudioSourceParent(), "__music__" + t + "__"),
                o = function() {
                    if (v(this.id)) {
                        delete h[this.id];
                        const e = i.indexOf(this.id); - 1 !== e && l.array.fastRemoveAt(i, e)
                    }! function(e) {
                        e.shouldRecycleOnEnded && (e.finishCallback = null, e.node.off(c.EventType.ENDED), e.clip = null, p.includes(e) || (p.length < 32 ? p.push(e) : e.node.destroy()), e.shouldRecycleOnEnded = !1)
                    }(this)
                };
            return s.node.on(c.EventType.ENDED, (function() {
                this._finishCallback && this._finishCallback(), this.loop || o.call(this)
            }), s), s.id = t, h[t] = s, i.push(t), s
        },
        m = function(e, t) {
            let i = new o;
            return i.name = t, e.addChild(i), i.addComponent(c)
        },
        v = function(e) {
            return h[e]
        },
        E = function(e) {
            return void 0 === e ? e = 1 : "string" == typeof e && (e = parseFloat(e)), e
        };
    class g {
        constructor() {
            this.id = -1, this.loop = !1, this.volume = 1
        }
    }
    class A {
        constructor() {
            this.volume = 1, this.pauseCache = []
        }
    }
    class y {
        constructor() {
            this._pauseIDCache = [], this._audioSourceParent = null, this._initilized = !1, this._music = new g, this._effect = new A
        }
        static getInstance() {
            return y._g_instance || (y._g_instance = new y), y._g_instance
        }
        init() {
            this._initilized || (this._audioSourceParent = i("__audioSource__"), this._audioSourceParent && s(this._audioSourceParent) && this._audioSourceParent.destroy(), this._audioSourceParent = new o, this._audioSourceParent.name = "__audioSource__", u.addPersistRootNode(this._audioSourceParent))
        }
        getAudioSourceParent() {
            return this._audioSourceParent
        }
        play(e, t, i, s = !1) {
            if (!(e instanceof r)) return console.error("Wrong type of AudioClip."), -1;
            let o = e.nativeUrl,
                u = _(o);
            return u.clip = e, u.isBGM = s, u.shouldRecycleOnEnded = !0, u.loop = t || !1, i = E(i), u.volume = i, u.play(), u.id
        }
        setLoop(e, t) {
            var i = v(e);
            i && i.loop && (i.loop = t)
        }
        isLoop(e) {
            var t = v(e);
            return !(!t || !t.loop) && t.loop
        }
        setVolume(e, t) {
            var i = v(e);
            i && (i.volume = t)
        }
        getVolume(e) {
            var t = v(e);
            return t ? t.volume : 1
        }
        setCurrentTime(e, t) {
            var i = v(e);
            return !!i && (i.currentTime = t, !0)
        }
        getCurrentTime(e) {
            var t = v(e);
            return t ? t.currentTime : 0
        }
        getDuration(e) {
            var t = v(e);
            return t ? t.duration : 0
        }
        getState(e) {
            var t = v(e);
            return t ? t.state : n.AudioState.INTERRUPTED
        }
        setFinishCallback(e, t) {
            var i = v(e);
            i && (i.finishCallback = t)
        }
        pause(e) {
            var t = v(e);
            return !!t && (t.pause(), !0)
        }
        pauseAll() {
            for (let [e, t] of h) {
                t.state === n.AudioState.PLAYING && (this._pauseIDCache.push(e), t.pause())
            }
        }
        resume(e) {
            var t = v(e);
            t && t.play()
        }
        resumeAll() {
            for (var e = 0; e < this._pauseIDCache.length; ++e) {
                var t = this._pauseIDCache[e],
                    i = v(t);
                i && i.play()
            }
            this._pauseIDCache.length = 0
        }
        stop(e) {
            var t = v(e);
            return !!t && (t.stop(), t.loop = !1, t.node.emit(c.EventType.ENDED), !0)
        }
        stopAll() {
            for (var [e, t] of h) t && (t.stop(), t.loop = !1, t.node.emit(c.EventType.ENDED))
        }
        getMaxAudioInstance() {
            return 24
        }
        uncache(e) {
            var t = "string" == typeof e ? e : e.nativeUrl,
                i = f[t];
            if (i)
                for (; i.length > 0;) {
                    var s = i.pop(),
                        o = v(s);
                    o && (o.node.destroy(), delete h[s])
                }
        }
        uncacheAll() {
            let e;
            this.stopAll();
            for (let [e, t] of h) t && t.node.destroy();
            for (; e = p.pop();) e.node.destroy();
            h.clear(), f = {}
        }
        getProfile() {
            var e = 0,
                t = 0;
            for (let [i, s] of h) s && (e++, s.state === n.AudioState.PLAYING && t++);
            return {
                count: e,
                playing: t
            }
        }
        dump(e) {
            var t = v(e);
            t && console.log(t)
        }
        addLoadCallback(e) {
            u.once(a.EVENT_AFTER_SCENE_LAUNCH, (function() {
                e()
            }))
        }
        playMusic(e, t) {
            var i = this._music;
            return this.stop(i.id), i.id = this.play(e, t, i.volume, !0), i.loop = t, i.id
        }
        stopMusic() {
            this.stop(this._music.id)
        }
        pauseMusic() {
            return this.pause(this._music.id), this._music.id
        }
        resumeMusic() {
            return this.resume(this._music.id), this._music.id
        }
        getMusicVolume() {
            return this._music.volume
        }
        setMusicVolume(e) {
            e = E(e);
            var t = this._music;
            return t.volume = e, this.setVolume(t.id, t.volume), t.volume
        }
        isMusicPlaying() {
            return this.getState(this._music.id) === n.AudioState.PLAYING
        }
        playEffect(e, t) {
            return this.play(e, t || !1, this._effect.volume, !1)
        }
        setEffectsVolume(e) {
            e = E(e);
            var t = this._music.id;
            this._effect.volume = e;
            for (let [i, s] of h) s && s.id !== t && S.setVolume(i, e)
        }
        getEffectsVolume() {
            return this._effect.volume
        }
        pauseEffect(e) {
            return this.pause(e)
        }
        pauseAllEffects() {
            var e = this._music.id,
                t = this._effect;
            t.pauseCache.length = 0;
            for (let [i, s] of h) {
                if (s && s.id !== e) s.state === n.AudioState.PLAYING && (t.pauseCache.push(i), s.pause())
            }
        }
        resumeEffect(e) {
            this.resume(e)
        }
        resumeAllEffects() {
            for (var e = this._effect.pauseCache, t = 0; t < e.length; ++t) {
                var i = e[t],
                    s = v(i);
                s && s.play()
            }
        }
        stopEffect(e) {
            return this.stop(e)
        }
        stopAllEffects() {
            var e = this._music.id;
            for (let [t, i] of h) {
                if (i && i.id !== e) i.state === n.AudioState.PLAYING && i.stop()
            }
        }
    }
    y._g_instance = null;
    const S = e("default", y.getInstance());
    t._RF.pop()
}
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as d from "./cv.js";
import * as u from "./MultipleGame.js";
import * as r from "./mttconfig.js";
import * as l from "./ResourcesLoader.js";
import * as n from "./soundEffect.js";
import * as a from "./AudioEngine.js";

function main() {
    e._RF.push({}, "a8789PEAQlDGISMCj0aFJmP", "MTTAudioPlayer", void 0);
    let h = t("MTTAudioType", function(t) {
        return t[t.Audio = 0] = "Audio", t[t.Effect = 1] = "Effect", t[t.Music = 2] = "Music", t[t.Count = 3] = "Count", t
    }({}));
    class f {
        constructor(t, e, o, i) {
            this.audioId = void 0, this.url = void 0, this.audioType = void 0, this.isLoop = void 0, this.audioId = t, this.url = e, this.audioType = o, this.isLoop = i
        }
    }
    t("MTTAudioRecord", f);
    class A extends f {
        constructor(t, e, o, i, s) {
            super(t, e, o, i), this.state = void 0, this.state = s
        }
    }
    t("MTTAudioListRecord", A);
    t("MTTAudioPlayer", class {
        constructor(t) {
            this._mttAudioRecords = [], this.basicScene = void 0, this._isBlocked = void 0, this.playFunc = (t, e, i = !1, s = 1, c) => {
                if (!o(this.basicScene)) return void cc_mtt.vv.ConsoleLog.error("MTTAudioPlayer basicScene is not valid");
                if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Audio]) return;
                this.removeStoppedAudioRecords();
                let u = d.AudioMgr.executePlay(e, i, s);
                this._mttAudioRecords.push(new f(u, t, h.Audio, i)), c && a.setFinishCallback(u, c)
            }, this.playMusicFunc = (t, e, i = !1, s = 1, c) => {
                if (!o(this.basicScene)) return void cc_mtt.vv.ConsoleLog.error("MTTAudioPlayer basicScene is not valid");
                if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Music]) return;
                this.removeStoppedAudioRecords();
                let u = d.AudioMgr.executePlayMusic(e, i, s);
                this._mttAudioRecords.push(new f(u, t, h.Music, i)), c && a.setFinishCallback(u, c)
            }, this.playEffectFunc = (t, e, i = !1, s = 1, c) => {
                if (!o(this.basicScene)) return void cc_mtt.vv.ConsoleLog.error("MTTAudioPlayer basicScene is not valid");
                if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Effect]) return;
                this.removeStoppedAudioRecords();
                let u = d.AudioMgr.executePlayEffect(e, i, s);
                this._mttAudioRecords.push(new f(u, t, h.Effect, i)), c && a.setFinishCallback(u, c)
            }, this.basicScene = t, this._isBlocked = [];
            for (let t = 0; t < h.Count; t++) this._isBlocked.push(!1);
            1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) && this.setBlock(!0)
        }
        setBlock(t, e = []) {
            if (e && e.length > 0)
                for (let o = 0; o < e.length; o++) this._isBlocked[e[o]] = t;
            else
                for (let e = 0; e < h.Count; e++) this._isBlocked[e] = t;
            t && this.stopAll(e)
        }
        getAudioRecordIndex(t) {
            for (let e = 0; e < this._mttAudioRecords.length; e++)
                if (this._mttAudioRecords[e].audioId == t) return e;
            return -1
        }
        getAudioRecordIndexByUrl(t) {
            for (let e = 0; e < this._mttAudioRecords.length; e++)
                if (this._mttAudioRecords[e].url == t) return e;
            return -1
        }
        getAudioPlayingList() {
            this.removeStoppedAudioRecords();
            let t = [];
            for (let e = 0; e < this._mttAudioRecords.length; e++) {
                let o = a.getState(this._mttAudioRecords[e].audioId);
                o != i.AudioState.PLAYING && o != i.AudioState.PAUSED && o != i.AudioState.INIT || t.push(new A(this._mttAudioRecords[e].audioId, this._mttAudioRecords[e].url, this._mttAudioRecords[e].audioType, this._mttAudioRecords[e].isLoop, o))
            }
            return t
        }
        getAudioRecordLength() {
            return this._mttAudioRecords.length
        }
        removeStoppedAudioRecords() {
            let t = 0;
            for (; t < this._mttAudioRecords.length;)
                if (this._mttAudioRecords[t]) {
                    let e = a.getState(this._mttAudioRecords[t].audioId);
                    e == i.AudioState.STOPPED || e == i.AudioState.INTERRUPTED ? this._mttAudioRecords.splice(t, 1) : t++
                } else this._mttAudioRecords.splice(t, 1)
        }
        play(t, e = !1, i = 1, d) {
            if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Audio]) return;
            let u = s.getRes(t);
            o(u) ? this.playFunc(t, u, e, i, d) : l.instance.loadRes(t, c, null, ((o, s) => {
                o ? cc_mtt.vv.ConsoleLog.error(o) : this.playFunc(t, s, e, i, d)
            }))
        }
        playMusic(t, e = !1, o = 1, i) {
            if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Music]) return;
            let d = s.getRes(t);
            d ? this.playMusicFunc(t, d, e, o, i) : l.instance.loadRes(t, c, null, ((s, c) => {
                s ? cc_mtt.vv.ConsoleLog.error(s) : this.playMusicFunc(t, c, e, o, i)
            }))
        }
        playEffect(t, e = null, o = !1, i = 1, d) {
            let u = this.checkCanPlaySnd(t, e);
            if (1 != r.getLocalStorageItem(r.key_enableSoundEffect, 1) || this._isBlocked[h.Effect] || !u) return;
            let n = s.getRes(t);
            n ? this.playEffectFunc(t, n, o, i, d) : l.instance.loadRes(t, c, null, ((e, s) => {
                e ? cc_mtt.vv.ConsoleLog.error(e) : this.playEffectFunc(t, s, o, i, d)
            }))
        }
        getDuration(t) {
            return a.getDuration(t)
        }
        getAudioID(t) {
            return this.getAudioRecordIndexByUrl(t)
        }
        stopAll(t = []) {
            let e = 0;
            for (; e < this._mttAudioRecords.length;) {
                let o = !1;
                for (let i = 0; i < t.length; i++)
                    if (this._mttAudioRecords[e].audioType == t[e]) {
                        o = !0;
                        break
                    } if (!t || t.length <= 0 || o) {
                    switch (this._mttAudioRecords[e].audioType) {
                        case h.Audio:
                            this.stop(this._mttAudioRecords[e].audioId);
                            break;
                        case h.Effect:
                            this.stopEffect(this._mttAudioRecords[e].audioId);
                            break;
                        case h.Music:
                            this.stopMusic()
                    }
                    this._mttAudioRecords.splice(e, 1)
                } else e++
            }
        }
        stop(t) {
            a.stop(t)
        }
        stopMusic() {
            this.removeStoppedAudioRecords(), this.stopAll([h.Music])
        }
        stopAllAudios() {
            this.removeStoppedAudioRecords(), this.stopAll([h.Audio])
        }
        stopEffect(t) {
            a.stopEffect(t)
        }
        stopAllEffects() {
            this.removeStoppedAudioRecords(), this.stopAll([h.Effect])
        }
        checkCanPlaySnd(t, e) {
            let o = !0;
            return o = !!(e && u.instance && u.instance.isCurrentRoom(e.roomId) || null == e || t === n.PlayerTurn && !e.isSittingOut || d.appConfig.getGeneralConfig().multiWindowEnabled), o
        }
    }), e._RF.pop()
}
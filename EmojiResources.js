import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./EmojiConfig.js";

function main() {
    l._RF.push({}, "a5886yEVJVEgZYA8ntN0G4z", "EmojiResources", void 0);
    class h {
        constructor() {
            this.iconSpriteFrames = new Map, this.avatarPrefabs = new Map, this.fullscreenPrefabs = new Map
        }
        static get instance() {
            return null === h._instance && (h._instance = new h), h._instance
        }
        get listEmoji() {
            return Object.keys(c.instance.EmojiList).map((e => ({
                name: e,
                value: c.instance.EmojiList[e]
            })))
        }
        getIconPath(e) {
            return `${c.instance.PrefixPath}texture/Icon/Emoji_${e}`
        }
        getAvatarPath(e) {
            return `${c.instance.PrefixPath}prefab/${e}/${e}_Avatar`
        }
        getFullscreenPath(e) {
            return `${c.instance.PrefixPath}prefab/${e}/${e}_FullScreen`
        }
        getBundleName() {
            return `${c.instance.BundleName}`
        }
        loadAssetFromBundle(e, t, a, r) {
            const n = function(s, n) {
                    if (s) return o(s.message || s), void(r && r(s));
                    n.load(e, t, ((e, s) => {
                        if (e) return o(e.message || e), void(r && r(e));
                        a && a(s)
                    }))
                },
                i = s.getBundle(this.getBundleName());
            i ? n(null, i) : s.loadBundle(this.getBundleName(), n.bind(this))
        }
        loadAll() {
            return Promise.all(Array.prototype.concat.apply([], this.listEmoji.map((e => [this.loadIcon(e.name), this.loadAvatar(e.name), this.loadFullscreen(e.name)]))))
        }
        loadIcon(e) {
            return this.iconSpriteFrames.has(e) ? r(this.iconSpriteFrames.get(e)) ? Promise.resolve(this.iconSpriteFrames.get(e)) : (this.iconSpriteFrames.delete(e), this.loadIcon(e)) : new Promise(((s, i) => {
                const l = this.getIconPath(e);
                c.instance.IsBundle ? this.loadAssetFromBundle(l + "/spriteFrame", t, (t => {
                    a.setAutoRelease(l, !0);
                    const n = t;
                    r(n) ? (this.iconSpriteFrames.set(e, n), s(n)) : i()
                }), (e => {
                    i(e.message || e.stack || e)
                })) : n.load(l + "/spriteFrame", t, null, ((t, a) => {
                    t ? i(t) : (this.iconSpriteFrames.set(e, a), s(a))
                }))
            }))
        }
        loadAvatar(e) {
            return this.avatarPrefabs.has(e) ? r(this.avatarPrefabs.get(e)) ? Promise.resolve(this.avatarPrefabs.get(e)) : (this.avatarPrefabs.delete(e), this.loadAvatar(e)) : new Promise(((s, t) => {
                const l = this.getAvatarPath(e);
                c.instance.IsBundle ? this.loadAssetFromBundle(l, i, (n => {
                    a.setAutoRelease(l, !0);
                    const i = n;
                    r(i) ? (this.avatarPrefabs.set(e, i), s(i)) : t()
                }), (e => {
                    t(e.message || e.stack || e)
                })) : n.load(l, i, null, ((r, n) => {
                    a.setAutoRelease(l, !0), r ? t(r) : (this.avatarPrefabs.set(e, n), s(n))
                }))
            }))
        }
        loadFullscreen(e) {
            return this.fullscreenPrefabs.has(e) ? r(this.fullscreenPrefabs.get(e)) ? Promise.resolve(this.fullscreenPrefabs.get(e)) : (this.fullscreenPrefabs.delete(e), this.loadFullscreen(e)) : new Promise(((s, t) => {
                const l = this.getFullscreenPath(e);
                c.instance.IsBundle ? this.loadAssetFromBundle(l, i, (n => {
                    a.setAutoRelease(l, !0);
                    const i = n;
                    r(i) ? (this.fullscreenPrefabs.set(e, i), s(i)) : t()
                }), (e => {
                    t(e.message || e.stack || e)
                })) : n.load(l, i, null, ((r, n) => {
                    a.setAutoRelease(l, !0), r ? t(r) : (this.fullscreenPrefabs.set(e, n), s(n))
                }))
            }))
        }
        removeAll() {
            this.removeIcons(), this.removeAvatars(), this.removeFullscreens()
        }
        removeIcon(e) {
            this.iconSpriteFrames.has(e) && (c.instance.IsBundle && s.releaseAsset(this.iconSpriteFrames.get(e)), this.iconSpriteFrames.delete(e))
        }
        removeIcons() {
            const e = h.instance.listEmoji;
            for (let s = 0; s < e.length; s++) this.removeIcon(e[s].name);
            this.iconSpriteFrames.clear()
        }
        removeAvatar(e) {
            if (this.avatarPrefabs.has(e)) {
                const t = this.getAvatarPath(e);
                c.instance.IsBundle ? s.releaseAsset(this.avatarPrefabs.get(e)) : n.release(t), this.avatarPrefabs.delete(e)
            }
        }
        removeAvatars() {
            const e = h.instance.listEmoji;
            for (let s = 0; s < e.length; s++) this.removeAvatar(e[s].name);
            this.avatarPrefabs.clear()
        }
        removeFullscreen(e) {
            if (this.fullscreenPrefabs.has(e)) {
                const t = this.getFullscreenPath(e);
                c.instance.IsBundle ? s.releaseAsset(this.fullscreenPrefabs.get(e)) : n.release(t), this.fullscreenPrefabs.delete(e)
            }
        }
        removeFullscreens() {
            const e = h.instance.listEmoji;
            for (let s = 0; s < e.length; s++) this.removeFullscreen(e[s].name);
            this.fullscreenPrefabs.clear()
        }
    }
    e("default", h), h._instance = null, l._RF.pop()
}
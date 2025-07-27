import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";

function main() {
    s._RF.push({}, "3a827Zx5epOZJUDEoXrDEc5", "LobbyResourcesHelper", void 0);
    class a {
        static getSpriteFrame(e, s = null, i = null) {
            if (a.cacheSpriteAssetMap.has(e) && t(a.cacheSpriteAssetMap.get(e))) {
                const t = a.cacheSpriteAssetMap.get(e);
                s && s(t)
            } else this.loadSpriteFrames([e], (t => {
                if (1 == t.length) {
                    const t = a.cacheSpriteAssetMap.get(e);
                    s && s(t)
                }
            }), (e => {
                i && i(e)
            }))
        }
        static initAssets() {
            a.cacheSpriteAssetMap && a.cacheSpriteAssetMap.size > 0 || this.loadSpriteFrames(this.spritePaths)
        }
        static loadSpriteFrames(e, t = null, s = null) {
            const c = e.map((e => this.basePath + "/" + e + "/spriteFrame"));
            i.resMgr.loadSpriteFrames(c, (s => {
                if (e.length == s.length) {
                    for (let t = 0; t < s.length; t++) a.cacheSpriteAssetMap.set(e[t], s[t]);
                    t && t(s)
                }
            }), s, !0)
        }
        static releaseAssets() {
            this.cacheSpriteAssetMap.forEach((e => {
                t(e) && i.resMgr.releaseAsset(e)
            })), this.cacheSpriteAssetMap.clear()
        }
    }
    e("default", a), a.cacheSpriteAssetMap = new Map, a.basePath = "Textures/lobbyV2", a.spritePaths = ["Calendare", "Clock", "Running", "registered", "paused", "title_icon_series", "title_icon_live_korea", "title_icon_live_passport", "title_icon_live_prime", "title_icon_special_bump_up", "title_icon_special_kingofcash", "title_icon_special_rakeback", "title_icon_pko", "title_icon_ko", "title_icon_mystery", "icon_series", "live_korea", "live_passport", "live_prime", "pko", "ko", "mystery", "special_kingofcash", "special_rakeback", "special_bump_up"], s._RF.pop()
}
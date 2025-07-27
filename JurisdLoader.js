import * as t from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as l from "./AppConfig.js";
import * as n from "./JurisdSpriteLoader.js";

function main() {
    t._RF.push({}, "45d1dAvTqtKerUBL97FP9Gc", "JurisdLoader", void 0);
    class s {
        static getBundleName() {
            return l.Instance.getBundleString()
        }
        static loadJurisdSprite(e, t, r, i = null) {
            s.loadSprite(this.getBundleName(), e, t, r, i)
        }
        static loadJurisdSpriteToSprite(e, t, r = !1, i = null, a = null) {
            s.loadSprite(this.getBundleName(), r, t, (t => {
                t && (e.spriteFrame && (t.insetLeft = e.spriteFrame.insetLeft, t.insetTop = e.spriteFrame.insetTop, t.insetRight = e.spriteFrame.insetRight, t.insetBottom = e.spriteFrame.insetBottom), e.spriteFrame = t, null == i || i(e))
            }), a)
        }
        static loadJurisdPrefab(e, t, r, i = null) {
            s.loadPrefab(this.getBundleName(), e, t, r, i)
        }
        static getJurisdSpriteLoader() {
            let e = null;
            return e = new n, e
        }
        static loadSprite(e, t, r, i, a) {
            this.getJurisdSpriteLoader().loadSpriteFromAssetBundle(e, t, r, i, a)
        }
        static async getJurisdSpriteRelativePath(e, t, r) {
            return await s.getSpriteRelativePath(this.getBundleName(), t, e, r)
        }
        static async getSpriteRelativePath(e, t, r, i) {
            if (null !== i && "" !== i) return i;
            e = this.getJurisdSpriteLoader().getBundleNameSprite(e, t, i);
            let a = r.texture.nativeUrl;
            a.substring(a.lastIndexOf("/") + 1, a.lastIndexOf("."));
            return ""
        }
        static async loadPrefab(e, t, i, a, l) {
            e = this.getJurisdSpriteLoader().getBundleNameSprite(e, t, i);
            {
                let t = r.getBundle(e);
                t ? s.getPrefabFromBundle(null, t, i, a, l) : r.loadBundle(e, ((e, t) => s.getPrefabFromBundle(e, t, i, a, l)))
            }
        }
        static getPrefabFromBundle(e, t, r, l, n) {
            if (e) return i(e.message || e), void(null == n || n(e));
            let s = t.get(r, a);
            s ? null == l || l(s, t) : t.load(r, a, (function(e, r) {
                if (e) return i(e.message || e), void(null == n || n(e));
                null == l || l(r, t)
            }))
        }
        static preloadAssetsFromBundle(e, t, a) {
            const l = e => {
                if (!e) {
                    const e = "bundle not found";
                    return i(e), void(null == a || a(e, null))
                }
                e.load(t.filter((t => !e.get(t))), (function(t, r) {
                    t && i(t.message || t), null == a || a(t, e)
                }))
            };
            let n = r.getBundle(e);
            n ? l(n) : r.loadBundle(e, ((e, t) => l(t)))
        }
        static loadTableSpriteWithFallback(e, t, r = "zh_CN/game/dzpoker/gameBg/bg_0", i) {
            s.loadJurisdSpriteToSprite(e, t, !1, i, (() => {
                s.loadJurisdSpriteToSprite(e, r, !1, i, (e => {
                    console.log("Failed and load default BackgroundImage: ", r)
                }))
            }))
        }
    }
    e("JurisdLoader", s), t._RF.pop()
}
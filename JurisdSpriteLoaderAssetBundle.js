import * as t from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as i from "./AppConfig.js";

function main() {
    t._RF.push({}, "08aa36DkGBJCItnDVVO73Pe", "JurisdSpriteLoaderAssetBundle", void 0);
    class a {
        loadSpriteFromAssetBundle(e, t, n, u, i) {
            let a = this.getBundleNameSprite(e, t, n);
            r(" ...... loadSpriteFromAssetBundle ....... bundleName : " + a + " .... filePath : " + n);
            let d = l.getBundle(a);
            d ? (r("@@@ FOUND BUNDLE ... LOADED"), this.LoadSpriteFromBundleOrDefault(null, d, e, n, u, i)) : (r("@@@ !FOUND BUNDLE ... -> DO LOAD BUNDLE ... "), l.loadBundle(a, ((t, r) => {
                this.LoadSpriteFromBundleOrDefault(t, r, e, n, u, i)
            })))
        }
        getBundleNameSprite(e, t, r) {
            return a.getBundleName(e, t)
        }
        static getBundleName(e, t) {
            return (e ? e + "_" : "") + i.Instance.getLayoutBundleString(t)
        }
        LoadSpriteFromBundleOrDefault(e, t, l, n, u, i) {
            null != t && (r("@@@ LoadSpriteFromBundleOrDefault ... filePath : " + n), this.getSpriteFromBundle(null, t, n, u, i))
        }
        getSpriteFromBundle(e, t, r, l, i) {
            if (e) return n(e.message || e), void(null == i || i(e));
            if (!t) return void(null == i || i(e));
            let a = t.get(r + "/spriteFrame", u);
            a ? null == l || l(a, t) : t.load(r + "/spriteFrame", u, (function(e, r) {
                if (e) return n(e.message || e), void(null == i || i(e));
                null == l || l(r, t)
            }))
        }
    }
    e("JurisdSpriteLoaderAssetBundle", a), t._RF.pop()
}
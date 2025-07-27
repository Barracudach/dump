import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as h from "./CrashTracing.js";
import * as c from "./CrashTracing.js";

function main() {
    t._RF.push({}, "51b73BOv35KsKVYL9l7VvfW", "DynamicPromoCacheHandler", void 0);
    const r = "DPBundleCacheTimes",
        l = "DPPopupShownTimes";
    class u {
        constructor() {
            this.bundleCacheInfo = void 0, this.popupLastShownTime = void 0, this.bundleCacheInfo = JSON.parse(o.tools.GetStringByCCFile(r) ?? "[]"), this.popupLastShownTime = JSON.parse(o.tools.GetStringByCCFile(l) ?? "{}")
        }
        getPopupLastShownTime(e) {
            const t = o.dataHandler.getUserData().user_id + "_" + e;
            return this.popupLastShownTime[t] || (this.popupLastShownTime[t] = 0), this.popupLastShownTime[t]
        }
        updatePopupLastShownTime(e) {
            const t = o.dataHandler.getUserData().user_id + "_" + e;
            this.popupLastShownTime[t] = Date.now(), o.tools.SaveStringByCCFile(l, JSON.stringify(this.popupLastShownTime))
        }
        addToBundleCache(e) {
            a.isNative && -1 == this.bundleCacheInfo.indexOf(e) && (this.bundleCacheInfo.push(e), o.tools.SaveStringByCCFile(r, JSON.stringify(this.bundleCacheInfo)))
        }
        clearUnusedBundles() {
            if (!a.isNative) return;
            let e = !1;
            try {
                for (let t = this.bundleCacheInfo.length - 1; t >= 0; --t) {
                    const a = [];
                    let s = 0;
                    if (i.cacheManager.cachedFiles.forEach(((e, i) => {
                            e.bundle == this.bundleCacheInfo[t] && n.fileUtils.isFileExist(e.url) && (a.push(i), s = s < e.lastTime ? e.lastTime : s)
                        })), Date.now() - s > u.BUNDLE_CACHE_CLEAR_DURATION) {
                        for (let e of a) i.cacheManager.getCache(e) && i.cacheManager.cachedFiles.remove(e);
                        this.bundleCacheInfo.splice(this.bundleCacheInfo.indexOf(this.bundleCacheInfo[t]), 1), e = !0
                    }
                }
            } catch (e) {
                s("Failed to clear cached bundles Error: ", e), h.Trace(c.DynamicPromotions, "bundle_clear_cache_failure", {
                    error: e
                }, !1, !0)
            }
            e && o.tools.SaveStringByCCFile(r, JSON.stringify(this.bundleCacheInfo))
        }
        clearPopupInfoCache() {
            let e = !1,
                t = Object.keys(this.popupLastShownTime);
            for (let a = t.length; a >= 0; --a) Date.now() - this.popupLastShownTime[t[a]] > u.POPUP_CACHE_CLEAR_DURATION && (e = !0, delete this.popupLastShownTime[t[a]], t.splice(t.indexOf(t[a]), 1));
            e && o.tools.SaveStringByCCFile(l, JSON.stringify(this.popupLastShownTime))
        }
    }
    e("DynamicPromoCacheHandler", u), u.BUNDLE_CACHE_CLEAR_DURATION = 6048e5, u.POPUP_CACHE_CLEAR_DURATION = 1296e6, t._RF.pop()
}
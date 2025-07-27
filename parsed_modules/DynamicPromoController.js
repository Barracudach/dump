import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as p from "./DynamicPromoEnums.js";
import * as c from "./DynamicPromoApiHandler.js";
import * as u from "./DynamicPromoCacheHandler.js";
import * as h from "./DynamicPromoBanner.js";
import * as m from "./Enum.js";
import * as d from "./CrashTracing.js";
import * as f from "./CrashTracing.js";
import * as g from "./LocalizationController.js";
import * as P from "./DynamicPromoBaseComponent.js";

function main() {
    a._RF.push({}, "f85ecB/4AZCxIcSnpSjf6xF", "DynamicPromoController", void 0);
    class C {
        static getInstance() {
            return C.instance || (C.instance = new C), C.instance
        }
        constructor() {
            this.isInit = void 0, this.cachedCountry = void 0, this.cacheHandler = void 0, this.apiHandler = void 0, this.initInterrupted = void 0, this.serverCallInProgress = void 0, this.promosFetchInProgress = void 0, this.promoPlacementInfo = void 0, this.bundleReferences = void 0, this.popupSessionCount = void 0, this.popupTriggersCounter = void 0, this.popupLoadingFlag = void 0, this.loadedBanners = {}, this.isInit = !1, this.cacheHandler = new u, this.apiHandler = new c, this.initInterrupted = !1, this.flushAllData(), this.setupListeners()
        }
        init() {
            if (this.isInit) return;
            this.isInit = !0, this.cachedCountry = l.tools.GetStringByCCFile("COUNTRY_SET");
            const e = l.appConfig.isMX ? "MX" : "US";
            this.cachedCountry = null == this.cachedCountry || "" === this.cachedCountry ? e : this.cachedCountry, this.fetchPromoInfoFromServer(!1), this.onInitComplete()
        }
        reinit() {
            this.isInit ? (this.flushSessionData(), this.cachedCountry != l.dataHandler.getUserData().countryISO2 && (this.cachedCountry = l.dataHandler.getUserData().countryISO2, this.interruptInit(), this.flushAllData(), this.fetchPromoInfoFromServer(!0))) : this.init()
        }
        async fetchPromoBanners(e, t = null, s = !0) {
            if (await l.tools.waitForPredicate((() => 0 == this.serverCallInProgress)), !this.promoPlacementInfo[e]) return Promise.resolve();
            const i = this.promoPlacementInfo[e].sort(((e, o) => e.rank - o.rank));
            s && (this.loadedBanners[e] = new Set);
            const a = [];
            for (let l in i) {
                var p;
                const c = i[l];
                if (!c.promoKey) continue;
                const [u, m] = c.promoKey.split("."), g = this.bundleReferences[u];
                if (!g) continue;
                if (!s && this.loadedBanners[e].has(c.promoKey)) continue;
                const P = g.paths[m],
                    C = c.prefabName,
                    b = null == (p = c.redirectUrl) ? void 0 : p.trim(),
                    I = parseInt(l) + 1;
                a.push((() => new Promise((s => {
                    try {
                        g.bundle.load(P, o, ((o, i) => {
                            if (o) return n("Banner load failed for bundle in campaign " + u + " Error: ", o), d.Trace(f.DynamicPromotions, "banner_load_failure", {
                                campaignName: u,
                                bundleName: g.bundle.name,
                                error: o
                            }, !1, !0), s();
                            const a = r(i);
                            a.name = C;
                            const l = a.getComponent(h);
                            l && (l.rank = I, null != b && b.length > 0 && l.setRedirectUrl(b)), null == t || t(a, I), this.loadedBanners[e].add(c.promoKey), s()
                        }))
                    } catch (e) {
                        n("Unexpected error during banner task setup for campaign " + u + ": ", e), d.Trace(f.DynamicPromotions, "banner_task_exception", {
                            campaignName: u,
                            bundleName: g.bundle.name,
                            error: e
                        }, !1, !0), s()
                    }
                }))))
            }
            await Promise.all(a.map((e => e())));
            const c = this.promosFetchInProgress[e] ?? 0;
            return 0 === c ? Promise.resolve() : (await l.tools.waitForPredicate((() => (this.promosFetchInProgress[e] ?? 0) < c)), this.fetchPromoBanners(e, t, !1))
        }
        incrementPopupTrigger(e, o) {
            const n = e + "." + o;
            this.popupTriggersCounter[n] || (this.popupTriggersCounter[n] = 0), ++this.popupTriggersCounter[n]
        }
        hasUntriggeredPopups(e, o) {
            return !(this.serverCallInProgress || !this.promoPlacementInfo || !this.promoPlacementInfo[e] || !this.promosFetchInProgress || this.promosFetchInProgress[e] > 0) && this.getUntriggeredPopups(e, o).length > 0
        }
        async showPromoPopup(e, t) {
            if (await l.tools.waitForPredicate((() => 0 == this.serverCallInProgress)), !this.promoPlacementInfo[e]) return;
            await l.tools.waitForPredicate((() => 0 == (this.promosFetchInProgress[e] ?? 0)));
            const s = this.getUntriggeredPopups(e, t);
            if (!(s.length <= 0 || l.tools.isAnyPopupVisibleOfType(m.Promotion) || this.popupLoadingFlag[e])) {
                s.sort(((e, o) => e.rank - o.rank));
                for (let t of s) {
                    if (!t.promoKey) continue;
                    const [s, i] = t.promoKey.split("."), a = s + "." + t.prefabName, c = this.bundleReferences[s];
                    this.popupLoadingFlag[e] = !0;
                    try {
                        c.bundle.load(c.paths[i], o, ((o, i) => {
                            var u;
                            if (this.popupLoadingFlag[e] = !1, o) return n("Popup load failed for bundle in campaign " + s + " Error: ", o), void d.Trace(f.DynamicPromotions, "popup_load_failure", {
                                campaignName: s,
                                bundleName: c.bundle.name,
                                error: o
                            }, !1, !0);
                            const h = r(i);
                            h.name = t.prefabName;
                            const m = null == (u = t.redirectUrl) ? void 0 : u.trim();
                            var g;
                            null != m && m.length > 0 && (null == (g = h.getComponent(P)) || g.setRedirectUrl(m));
                            ++this.popupSessionCount[a], this.cacheHandler.updatePopupLastShownTime(a), l.MessageCenter.send(p.ShowPromoPopup, h)
                        }));
                        break
                    } catch (e) {
                        n("Popup load failed for bundle in campaign " + s + " Error: ", e), d.Trace(f.DynamicPromotions, "popup_load_failure", {
                            campaignName: s,
                            bundleName: c.bundle.name,
                            error: e
                        }, !1, !0)
                    }
                }
                this.popupTriggersCounter[t] && --this.popupTriggersCounter[t]
            }
        }
        setupListeners() {
            l.MessageCenter.register(l.Enum.MessageCenterAction.OnLoginSuccess, this.reinit.bind(this), this), l.MessageCenter.register(l.config.BEFORE_CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this), l.appConfig.isWebApp && l.MessageCenter.register(l.Enum.MessageCenterAction.OnGeoLocationChange, this.onGeoLocationChange.bind(this), this)
        }
        onInitComplete() {
            this.cacheHandler.clearUnusedBundles(), this.cacheHandler.clearPopupInfoCache()
        }
        fetchPromoInfoFromServer(e) {
            if (t.isBrowser && !l.appConfig.getGeneralConfig().isEnableDownloadPromoBundle) return;
            const o = l.config.IS_PC() ? "desktop" : "mobile",
                n = l.appConfig.getGeneralConfig().bunderConfig.AppLicenseType,
                r = l.config.GET_CLIENT_VERSION();
            this.serverCallInProgress = !0, this.apiHandler.fetchPromos(this.cachedCountry, o, n, r, (o => {
                if (e || !this.initInterrupted) {
                    for (let e of o)
                        for (let o in e.prefabsToSchedule) this.promoPlacementInfo[e.prefabsToSchedule[o].placement] || (this.promoPlacementInfo[e.prefabsToSchedule[o].placement] = []), this.promoPlacementInfo[e.prefabsToSchedule[o].placement].push({
                            promoKey: e.campaignName + "." + o,
                            prefabName: e.prefabsToSchedule[o].prefabName,
                            rank: e.prefabsToSchedule[o].rank,
                            popupMeta: e.prefabsToSchedule[o].popupMeta,
                            redirectUrl: e.redirectUrl
                        });
                    this.fetchBundlesFromStorage(e, o), this.serverCallInProgress = !1, l.MessageCenter.send("RefreshPromoBanner")
                }
            }))
        }
        fetchBundlesFromStorage(e, o) {
            o.forEach((o => {
                for (let e of o.prefabsToSchedule) this.promosFetchInProgress[e.placement] || (this.promosFetchInProgress[e.placement] = 0), this.promosFetchInProgress[e.placement] += 1;
                try {
                    s.loadBundle(o.promoBundle.pathURL.trim(), {
                        version: o.promoBundle.version.trim()
                    }, ((r, t) => {
                        if (!e && this.initInterrupted) return;
                        if (r) {
                            n("Asset Bundle Load Failed: " + o.promoBundle.bundleName + " Error: ", r), d.Trace(f.DynamicPromotions, "bundle_download_failure", {
                                error: r
                            }, !1, !0);
                            for (let e of o.prefabsToSchedule) this.promosFetchInProgress[e.placement] -= 1;
                            return
                        }
                        const s = [];
                        for (let e of o.prefabsToSchedule) s.push(e.prefabPath);
                        this.bundleReferences[o.campaignName] = {
                            bundle: t,
                            paths: s
                        }, this.cacheHandler.addToBundleCache(t.name), this.fetchLocsFromBundle(o.campaignName, t, (e => {
                            for (let e of o.prefabsToSchedule) this.promosFetchInProgress[e.placement] -= 1;
                            if (!e) {
                                this.bundleReferences[o.campaignName] = null;
                                for (let e of o.prefabsToSchedule) this.promosFetchInProgress[e.placement] && (this.promosFetchInProgress[e.placement] -= 1)
                            }
                        }))
                    }))
                } catch (e) {
                    n("Asset Bundle Load Failed: " + o.promoBundle.bundleName + " Error: ", e), d.Trace(f.DynamicPromotions, "bundle_download_failure", {
                        error: e
                    }, !1, !0);
                    for (let e of o.prefabsToSchedule) this.promosFetchInProgress[e.placement] -= 1
                }
            }))
        }
        fetchLocsFromBundle(e, o, r) {
            try {
                o.load("localization", i, ((t, s) => {
                    if (t) return n("Locs load failed for bundle in campaign " + e + " Error: ", t), d.Trace(f.DynamicPromotions, "localization_load_failure", {
                        campaignName: e,
                        bundleName: o.name,
                        error: t
                    }, !1, !0), void(null == r || r(!1));
                    const i = s.json;
                    g.getInstance().updateStringTableFromExternalSource(i), null == r || r(!0)
                }))
            } catch (t) {
                n("Locs load failed for bundle in campaign " + e + " Error: ", t), d.Trace(f.DynamicPromotions, "localization_load_failure", {
                    campaignName: e,
                    bundleName: o.name,
                    error: t
                }, !1, !0), null == r || r(!1)
            }
        }
        onLanguageChange(e) {
            l.MessageCenter.unregister(l.config.BEFORE_CHANGE_LANGUAGE, this);
            for (let e of Object.keys(this.bundleReferences)) this.bundleReferences[e] && this.fetchLocsFromBundle(e, this.bundleReferences[e].bundle)
        }
        flushAllData() {
            this.serverCallInProgress = !1, this.promosFetchInProgress = {}, this.promoPlacementInfo = {}, this.bundleReferences = {}, this.flushSessionData()
        }
        flushSessionData() {
            this.popupSessionCount = {}, this.popupTriggersCounter = {}, this.popupLoadingFlag = {}
        }
        interruptInit() {
            if (this.serverCallInProgress) this.initInterrupted = !0;
            else
                for (let e of Object.values(this.promosFetchInProgress))
                    if (e > 0) return void(this.initInterrupted = !0)
        }
        getUntriggeredPopups(e, o) {
            const r = e + "." + o;
            if (!this.popupTriggersCounter || !this.popupTriggersCounter[r] || this.popupTriggersCounter[r] <= 0) return [];
            let t = this.promoPlacementInfo[e].filter((e => {
                var n;
                return -1 != (null == (n = e.popupMeta) ? void 0 : n.triggerPoint.indexOf(o))
            }));
            if (t.length <= 0) return [];
            let s = [];
            for (let e of t) {
                var i, a;
                const [o, r] = e.promoKey.split("."), t = o + "." + e.prefabName;
                if (null == e.popupMeta) {
                    n("Popup with no meta info encountered for " + t), d.Trace(f.DynamicPromotions, "popup_meta_missing", {
                        popupName: t
                    }, !1, !0);
                    continue
                }
                this.popupSessionCount[t] || (this.popupSessionCount[t] = 0);
                const l = this.cacheHandler.getPopupLastShownTime(t);
                this.popupSessionCount[t] >= (null == (i = e.popupMeta) ? void 0 : i.countPerSession) || Date.now() < l + 1e3 * (null == (a = e.popupMeta) ? void 0 : a.promoDisplayIntervalSeconds) || null != this.bundleReferences[o] && s.push(e)
            }
            return s
        }
        onGeoLocationChange() {
            l.appConfig.isWebApp && this.isInit && l.security.locationMonitor.getLocationDetails((() => {
                l.dynamicPromoController.reinit()
            }))
        }
    }
    e("default", C), C.instance = void 0, a._RF.pop()
}
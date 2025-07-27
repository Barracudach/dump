import * as e from "./cc.js";
import * as a from "./cc.js";
import * as n from "./CrowdinOtaClient.js";
import * as o from "./CloudLocalizationCacheHandler.js";
import * as i from "./CommonScriptsDependencies.js";

function main() {
    e._RF.push({}, "ad1c4/5mqBPYbJQJEeDgtVT", "CloudLocalizationController", void 0);
    t("CloudLocalizationController", class {
        constructor() {
            this.crowdinOtaClient = void 0, this.cloudLocCacheHandler = void 0, this.cloudLocCacheHandler = new o, this.crowdinOtaClient = new n(i.getDeps().getCrowdinDistributionKey())
        }
        isCacheAvailable() {
            return this.cloudLocCacheHandler.isCacheAvailable()
        }
        async getLocalizationData() {
            if (await this.isManifestUpdated()) {
                return {
                    data: await this.getLocalizationContent(),
                    isLiveData: !0
                }
            } {
                const t = this.getCachedLocalizationData();
                if (null != t && !a.isEmptyObject(t)) return {
                    data: t,
                    isLiveData: !1
                };
                return {
                    data: await this.getLocalizationContent(),
                    isLiveData: !0
                }
            }
        }
        getCachedLocalizationData(t) {
            const e = this.cloudLocCacheHandler.getSavedLocalizationStringTable(t);
            return null != e ? e : null
        }
        isLanguageCached(t) {
            const e = this.cloudLocCacheHandler.localLocsManifestObject;
            if (!e) return !1;
            for (let a of Object.values(e.language_mapping))
                if (a.name == t) return !0;
            return !1
        }
        async isManifestUpdated() {
            try {
                var t;
                const e = await this.crowdinOtaClient.manifest,
                    a = (null == e ? void 0 : e.timestamp) ?? 0;
                return a > ((null == (t = this.cloudLocCacheHandler.localLocsManifestObject) ? void 0 : t.timestamp) ?? 0) && (this.cloudLocCacheHandler.localLocsManifestObject = e, !0)
            } catch (t) {
                throw i.getDeps().logError("load_crowdin_manifest_failed", {
                    error: t
                }), t
            }
        }
        async getLocalizationContent() {
            try {
                let t = await this.crowdinOtaClient.getStrings();
                return this.updateLangCodeForLocContent(t) ? (this.cloudLocCacheHandler.saveLocalizationStrings(t), t) : null
            } catch (t) {
                throw i.getDeps().logError("load_crowdin_loc_failed", {
                    error: t
                }), t
            }
        }
        updateLangCodeForLocContent(t) {
            const e = [...Object.keys(t)];
            let a = [];
            for (let n of e) {
                const e = this.cloudLocCacheHandler.localLocsManifestObject.language_mapping;
                if (!e.hasOwnProperty(n)) {
                    a.push(n);
                    continue
                }
                const o = e[n].name;
                delete Object.assign(t, {
                    [o]: t[n]
                })[n]
            }
            return !(a.length > 0) || (i.getDeps().logError("crowdin_mapping_failed", {
                langCodes: JSON.stringify(a)
            }), !1)
        }
    }), e._RF.pop()
}
import * as e from "./cc.js";
import * as i from "./CrowdinAssetFetcher.js";
import * as s from "./CommonScriptsDependencies.js";
import * as n from "./StringUtils.js";

function main() {
    e._RF.push({}, "d9b63S+W7tO35/W4JmDd/dS", "CrowdinOtaClient", void 0);
    class a {
        constructor(t, e) {
            this.httpClient = void 0, this.distributionURL = void 0, this.crowdinManifestHolder = void 0, this.disableManifestCache = !1, this.stringsCache = {}, this.disableStringsCache = !1, this.disableJsonDeepMerge = !1, this.locale = void 0, this.distributionHash = t, this.httpClient = (null == e ? void 0 : e.httpClient) || new i, this.distributionURL = this.getCrowdinDistributionURL(!1), this.disableManifestCache = !(null == e || !e.disableManifestCache), this.locale = null == e ? void 0 : e.languageCode, this.disableStringsCache = !(null == e || !e.disableStringsCache), this.disableJsonDeepMerge = !(null == e || !e.disableJsonDeepMerge)
        }
        getCrowdinDistributionURL(t) {
            if (!s.isInit()) return a.BASE_URL;
            const e = s.getDeps().getCrowdinDistributionUrl(t);
            return e || a.BASE_URL
        }
        getHash() {
            return this.distributionHash
        }
        setCurrentLocale(t) {
            this.locale = t
        }
        getCurrentLocale() {
            return this.locale
        }
        async getManifestTimestamp() {
            const t = await this.manifest;
            return null == t ? void 0 : t.timestamp
        }
        async getContent() {
            const t = await this.manifest;
            return null == t ? void 0 : t.content
        }
        async getLanguageContent(t) {
            const e = this.getLanguageCode(t);
            return (await this.getContent())[e]
        }
        async listLanguages() {
            return Object.keys(await this.getContent())
        }
        async getTranslations() {
            const t = await this.listLanguages(),
                e = {};
            return await Promise.all(t.map((async t => {
                e[t] = await this.getLanguageTranslations(t)
            }))), e
        }
        async getLanguageTranslations(t) {
            const e = this.getLanguageCode(t),
                i = (await this.getContent())[e] || [];
            return Promise.all(i.map((async t => ({
                content: await this.getFileTranslations(t),
                file: t
            }))))
        }
        async getFileTranslations(t) {
            const e = await this.getContent();
            if (!Object.values(e).some((e => e.includes(t)))) throw new Error(`File ${t} does not exists in manifest content`);
            const i = await this.getManifestTimestamp(),
                s = `${this.distributionURL}/${this.distributionHash}${t}?timestamp=${i}`;
            return this.httpClient.get(s).catch((t => {
                this.tryNextProxy()
            }))
        }
        async getStrings() {
            const t = await this.getJsonFiles(),
                e = {};
            return await Promise.all(Object.entries(t).map((async ([t, i]) => {
                e[t] = await this.getStringsByFilesAndLocale(i)
            }))), e
        }
        async getStringsByLocale(t) {
            const e = this.getLanguageCode(t),
                i = await this.getJsonFiles();
            return this.getStringsByFilesAndLocale(i[e] || [])
        }
        async getStringByKey(t, e) {
            const i = await this.getStringsByLocale(e),
                s = Array.isArray(t) ? t : [t],
                n = s.shift();
            if (!n) return;
            let a = i[n];
            for (const t of s) {
                var r;
                a = null == (r = a) ? void 0 : r[t]
            }
            return a
        }
        clearStringsCache() {
            this.stringsCache = {}
        }
        async getStringsByFilesAndLocale(t) {
            let e = {};
            for (const i of t) {
                let t;
                this.stringsCache[i] || this.disableStringsCache || (this.stringsCache[i] = this.getFileTranslations(i)), t = await this.stringsCache[i], this.disableJsonDeepMerge ? e = {
                    ...e,
                    ...t
                } : n.mergeDeep(e, t)
            }
            return e
        }
        get manifest() {
            return this.crowdinManifestHolder && !this.disableManifestCache || (this.crowdinManifestHolder = this.httpClient.get(`${this.distributionURL}/${this.distributionHash}/manifest.json`), this.crowdinManifestHolder.catch((t => {
                this.tryNextProxy()
            }))), this.crowdinManifestHolder
        }
        tryNextProxy() {
            this.distributionURL = this.getCrowdinDistributionURL(!0), this.crowdinManifestHolder = void 0
        }
        getLanguageCode(t) {
            const e = t || this.getCurrentLocale();
            if (e) return e;
            throw new Error('Language code should be either provided through input arguments or by "setCurrentLocale" method')
        }
        async getJsonFiles() {
            const t = await this.getContent(),
                e = {};
            return Object.entries(t).forEach((([t, i]) => e[t] = i.filter(n.isJsonFile))), e
        }
    }
    t("default", a), a.BASE_URL = "https://tms.wptglobal.com", e._RF.pop()
}
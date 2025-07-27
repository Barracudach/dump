import * as e from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./CommonScriptsDependencies.js";
import * as l from "./LocalizationObserver.js";
import * as c from "./StringUtils.js";
import * as g from "./CloudLocalizationController.js";
import * as u from "./LocalizationEvents.js";

function main() {
    e._RF.push({}, "66882AnGgxFNIqTZtCQbHUv", "LocalizationController", void 0);
    class d {
        static getObserver() {
            return d.observer || (d.observer = new l), d.observer
        }
        static getInstance() {
            return d.instance || (d.instance = new d), d.instance
        }
        constructor() {
            this.languagesLoaded = void 0, this.stringsTable = void 0, this.cloudLocalizationController = void 0, this.retryLimit = 5, this.cloudLocLangMap = {
                th_TH: "th_PH"
            }, this.mttLangMap = {
                en_US: "en",
                zh_CN: "sc",
                vi_VN: "vn",
                th_TH: "th",
                th_PH: "th",
                es_MX: "es",
                fr_CA: "fr",
                pt_BR: "pt",
                ja_JP: "ja",
                ko_KR: "ko",
                zh_TW: "tc",
                pl_PL: "pl",
                no_NO: "no",
                fi_FI: "fi",
                id_ID: "id"
            }, this.languagesLoaded = [], this.stringsTable = {}, s.isInit() && s.getDeps().canFetchLocsFromCrowdin() ? this.cloudLocalizationController = new g : o("Couldn't initialize Crowdin! Falling back to local")
        }
        isKeyNotFound(t) {
            return t.startsWith(d.KEY_NOT_FOUND)
        }
        getTranslatedString(t, e, o = !1) {
            if (null == t || t.trim().length <= 0) return "";
            if (!s.isInit()) return n("CommonScriptsDependencies not initialized LocalizationController::getTranslatedString " + t), d.KEY_NOT_FOUND + t;
            e = this.convertLangCodeToCloudLocCode(e);
            const r = this.stringsTable[e];
            let i, a;
            const l = s.getDeps().englishLanguageCode,
                g = null == r || null == r[t] || r[t].length <= 0;
            let u = !1;
            if (e != l && g && (a = this.getTranslatedString(t, l, !0), u = g && null != a && a.length > 0), !r || null == r[t] || u) {
                if (e == l) return d.KEY_NOT_FOUND + t;
                i = a
            } else try {
                const e = r[t];
                i = Array.isArray(e) ? e.join("") : c.toString(e)
            } catch (e) {
                return n("LocalizationController::getTranslatedString Error: " + e), d.KEY_NOT_FOUND + t
            }
            return o || (i = s.getDeps().updateStringReplacers(i)), i
        }
        getTranslatedStringArray(t, e, o = !1) {
            if (null == t || t.trim().length <= 0) return [];
            if (!s.isInit()) return n("CommonScriptsDependencies not initialized LocalizationController::getTranslatedStringArray " + t), [t];
            e = this.convertLangCodeToCloudLocCode(e);
            const r = this.stringsTable[e];
            let i = [];
            if (r) try {
                const e = r[t];
                Array.isArray(e) ? i = e : i.push(c.toString(e))
            } catch (e) {
                return n("LocalizationController::getTranslatedStringArray Error: " + e), [t]
            } else {
                const o = s.getDeps().englishLanguageCode;
                if (e == o) return [t];
                i = this.getTranslatedStringArray(t, o, !0)
            }
            return o || i.forEach(((t, e) => {
                i[e] = s.getDeps().updateStringReplacers(t)
            })), i
        }
        updateStringTableFromExternalSource(t) {
            if (t)
                for (let e of Object.keys(t)) this.processLocDataObject(e, t[e], !1)
        }
        loadLocStrings(t, e, o, l = !1) {
            if (t = this.convertLangCodeToCloudLocCode(t), !l && this.cloudLocalizationController && this.cloudLocalizationController.isCacheAvailable()) {
                const n = this.cloudLocalizationController.getCachedLocalizationData(t);
                if (!n || r.isEmptyObject(n) || !n[t]) return void this.loadLocStrings(t, e, o, !0);
                this.languagesLoaded.push(t), this.processLocDataObject(t, n[t], !0), this.languagesLoaded.length <= 1 && s.getDeps().languagesSupportedLocally.length > 1 && this.loadLocStringsForOtherLanguages(), null == e || e()
            } else i.load(s.getDeps().languageResDataPath + t, a, ((r, i) => {
                if (r) return n(r.message || r), s.getDeps().logError("load_loc_resources_failed", {
                    language: t,
                    error: r
                }), void(null == o || o());
                this.languagesLoaded.push(t), this.processLocDataObject(t, i.json, !0), this.languagesLoaded.length <= 1 && s.getDeps().languagesSupportedLocally.length > 1 && this.loadLocStringsForOtherLanguages(), null == e || e()
            }))
        }
        convertLangCodeToMTTCode(t) {
            if (null == t || "string" != typeof t) return "en";
            const e = this.mttLangMap[t];
            return null == e ? "en" : e
        }
        convertLangCodeToCloudLocCode(t) {
            return null == t || "string" != typeof t ? "en_US" : (t in this.cloudLocLangMap && (t = this.cloudLocLangMap[t]), t)
        }
        processLocDataObject(t, e, o) {
            if (null != e && !r.isEmptyObject(e)) {
                if (t = this.convertLangCodeToCloudLocCode(t), !this.stringsTable[t]) {
                    if (!o) return;
                    this.stringsTable[t] = {}
                }
                for (let o of Object.keys(e)) "string" == typeof e[o] || Array.isArray(e[o]) ? this.stringsTable[t][o] = e[o] : this.stringsTable[t][o] = e[o]["-value"]
            }
        }
        loadLocStringsForOtherLanguages() {
            for (let t of s.getDeps().languagesSupportedLocally) {
                if (t = this.convertLangCodeToCloudLocCode(t), t == s.getDeps().getUserLanguage() || -1 != this.languagesLoaded.indexOf(t)) continue;
                let e = !1;
                this.cloudLocalizationController && this.cloudLocalizationController.isCacheAvailable() && (this.cloudLocalizationController.isLanguageCached(t) || (e = !0)), this.loadLocStrings(t, null, null, e)
            }
            this.fetchLocStringsFromCloud()
        }
        fetchLocStringsFromCloud() {
            this.cloudLocalizationController && this.cloudLocalizationController.getLocalizationData().then((t => {
                if (t && t.isLiveData && t.data)
                    for (const e of Object.keys(t.data)) this.processLocDataObject(e, t.data[e], !0), e == s.getDeps().getUserLanguage() && d.getObserver().notify(u.CHANGE_LANGUAGE, !0)
            }), (t => {
                this.retryFetchLocStringsFromCloud()
            })).catch((t => {
                this.retryFetchLocStringsFromCloud()
            }))
        }
        retryFetchLocStringsFromCloud() {
            this.retryLimit > 0 && (this.retryLimit--, this.fetchLocStringsFromCloud())
        }
    }
    t("LocalizationController", d), d.KEY_NOT_FOUND = "KOF_", d.instance = void 0, d.observer = void 0, e._RF.pop()
}
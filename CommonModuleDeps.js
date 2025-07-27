import * as e from "./cc.js";
import * as o from "./CommonScriptsDependencies.js";
import * as i from "./Enum.js";
import * as t from "./GeneralConfig.js";
import * as r from "./cv.js";
import * as a from "./CrashTracing.js";
import * as s from "./CrashTracing.js";

function main() {
    e._RF.push({}, "5782dO8jWhDwKW4wlL0USxo", "CommonModuleDeps", void 0);
    class c {
        static init() {
            o.setDeps(this.deps)
        }
    }
    n("CommonModuleDeps", c), c.deps = {
        englishLanguageCode: i.en_US,
        languagesSupportedLocally: Object.keys(t),
        languageResDataPath: "crowdinLocs/",
        getUserLanguage: () => r.config.getCurrentLanguage(),
        getUserCurrency: () => r.dataHandler.getUserData().getCurrencyCode(),
        updateStringReplacers: n => r.config.updateStringReplacers(n),
        canFetchLocsFromCrowdin: () => !r.appConfig.isDev && r.appConfig.getModulesConfig().crowdinConfig.enableCrowdinUsage,
        canCacheCrowdinLangFiles: () => r.appConfig.getModulesConfig().crowdinConfig.enableCachingForCrowdin,
        getCrowdinDistributionKey() {
            const n = r.appConfig.getModulesConfig().crowdinConfig;
            return r.appConfig.isProd ? n.crowdinDistributionKey_prod : n.crowdinDistributionKey_stg
        },
        getCrowdinDistributionUrl(n) {
            const e = "TMS_API_HEAD";
            !0 === n && r.server.nextProxy("TMS_API_HEAD");
            const o = r.config.getStringData(e, !0);
            return o || s.Trace(a.CommonModule, "tms_endpoint_fetch_fail", {
                urlKey: e,
                jurisdiction: r.appConfig.jurisdiction
            }, !1, !0), o
        },
        logError(n, e) {
            null == n || n.length <= 0 || s.Trace(a.CommonModule, n, e, !1, !0)
        }
    }, e._RF.pop()
}
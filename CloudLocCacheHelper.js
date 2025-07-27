import * as t from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as a from "./CommonScriptsDependencies.js";
import * as s from "./CloudLocalizationInterfaces.js";

function main() {
    i._RF.push({}, "eced0xbREVOi4tzfOWG9x/Y", "CloudLocCacheHelper", void 0);
    e("CloudLocCacheHelper", class {
        constructor() {
            this.cacheDir = void 0
        }
        initCache() {
            t.isNative && (this.cacheDir = c.fileUtils.getWritablePath() + s.CachedDirName, c.fileUtils.isDirectoryExist(this.cacheDir) || c.fileUtils.createDirectory(this.cacheDir))
        }
        getLocalManifestObject() {
            return this.getDataFromCacheFile(s.CacheManifestValuesKey + ".json")
        }
        updateLocalManifestObject(e) {
            this.writeDataToCacheFile(s.CacheManifestValuesKey + ".json", e)
        }
        deleteLocalManifestObject() {
            this.deleteFileFromCache(s.CacheManifestValuesKey + ".json")
        }
        deleteFileFromCache(e) {
            try {
                if (a.isInit() && !a.getDeps().canCacheCrowdinLangFiles()) return;
                if (t.isNative) {
                    const i = this.cacheDir + "/" + e;
                    return void(c.fileUtils.isFileExist(i) && c.fileUtils.removeFile(i))
                }
                t.localStorage.removeItem(e)
            } catch (e) {
                r("CloudLocCacheHelper::deleteFileFromCache Error while deleting files from cache: " + JSON.stringify(e))
            }
        }
        writeDataToCacheFile(e, i) {
            try {
                if (a.isInit() && !a.getDeps().canCacheCrowdinLangFiles()) return;
                const r = JSON.stringify(i);
                if (t.isNative) {
                    const i = this.cacheDir + "/" + e;
                    c.fileUtils.writeStringToFile(r, i)
                } else t.localStorage.setItem(e, r)
            } catch (e) {
                r("CloudLocCacheHelper::writeDataToCacheFile Error while writing files to cache: " + JSON.stringify(e))
            }
        }
        getDataFromCacheFile(e) {
            try {
                if (a.isInit() && !a.getDeps().canCacheCrowdinLangFiles()) return null;
                if (t.isNative) {
                    const i = this.cacheDir + "/" + e;
                    return c.fileUtils.isFileExist(i) ? JSON.parse(c.fileUtils.getStringFromFile(i)) : null
                }
                return JSON.parse(t.localStorage.getItem(e))
            } catch (e) {
                return r("CloudLocCacheHelper::getDataFromCacheFile Error while reading files from cache: " + JSON.stringify(e)), null
            }
        }
    }), i._RF.pop()
}
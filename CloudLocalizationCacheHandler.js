import * as t from "./cc.js";
import * as c from "./cc.js";
import * as a from "./cc.js";
import * as i from "./CommonScriptsDependencies.js";
import * as l from "./CloudLocCacheHelper.js";

function main() {
    t._RF.push({}, "7f46aA2QHRAqKu14lfnZvXN", "CloudLocalizationCacheHandler", void 0);
    e("CloudLocalizationCacheHandler", class {
        constructor() {
            this.localizationStrings = {}, this.cacheHelper = void 0, this._localLocsManifestObject = null, this.cacheHelper = new l, this.cacheHelper.initCache(), this._localLocsManifestObject = this.cacheHelper.getLocalManifestObject(), this._localLocsManifestObject = a.isEmptyObject(this._localLocsManifestObject) ? null : this._localLocsManifestObject
        }
        isCacheAvailable() {
            return null != this.localLocsManifestObject
        }
        get localLocsManifestObject() {
            return this._localLocsManifestObject
        }
        set localLocsManifestObject(e) {
            this._localLocsManifestObject = e, this.cacheHelper.updateLocalManifestObject(e)
        }
        getSavedLocalizationStringTable(e) {
            return a.isEmptyObject(this.localizationStrings) ? this.readLocalCachedData(i.getDeps().getUserLanguage()) : null == e || this.localizationStrings.hasOwnProperty(e) || this.readLocalCachedData(e), this.localizationStrings
        }
        saveLocalizationStrings(e) {
            for (let t of Object.keys(e)) this.localizationStrings[t] = e[t], this.cacheHelper.writeDataToCacheFile(t + ".json", e[t])
        }
        readLocalCachedData(e) {
            const t = e + ".json";
            let i = this.cacheHelper.getDataFromCacheFile(t);
            i && !a.isEmptyObject(i) ? this.localizationStrings[e] = i : c(`CloudLocalizationCacheHandler::readLocalCachedData Error while reading cache file ${t}`)
        }
    }), t._RF.pop()
}
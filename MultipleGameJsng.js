import * as a from "./cc.js";
import * as c from "./cv.js";
import * as n from "./MultipleRoomManager.js";

function main() {
    a._RF.push({}, "39c07Tfv4tPEoxp85W815HZ", "MultipleGameJsng", void 0);
    class t {
        constructor(e, a) {
            this.isWatching = void 0, this.rewardMsg = void 0, this.isWatching = e.isWatching, this.rewardMsg = a
        }
        updateValue(e, a) {
            this.isWatching = e.isWatching, a && (this.rewardMsg = a)
        }
    }
    e("SngCacheMultipleRoomModel", t);
    class o {
        constructor(e, a) {
            this.isGameReleased = void 0, this.rankInfo = void 0, this.isGameReleased = e, this.rankInfo = a
        }
        updateValue(e, a) {
            this.isGameReleased = e, a && (this.rankInfo = a)
        }
    }
    e("SngCacheRankModel", o);
    class s {
        static GetCacheSngRoomModel() {
            return this._cacheSngRoomModel
        }
        static ClearAllCache() {
            this._cacheSngRoomModel.clear()
        }
        static cacheSngGameModel(e, a) {
            if (!c.appConfig.isLandscapeLayout) {
                const c = n.instance.getMttRoomId(e.data);
                c && (s._cacheSngRoomModel.has(c) ? s._cacheSngRoomModel[c] ? s._cacheSngRoomModel[c].updateValue(e, a) : s._cacheSngRoomModel[c] = new t(e, a) : s._cacheSngRoomModel.set(c, new t(e, a)))
            }
        }
        static removeCacheSngGameModel(e) {
            s._cacheSngRoomModel.has(e) && s._cacheSngRoomModel.delete(e)
        }
        static setSngCacheGameModelWatchingRoom(e, a) {
            s._cacheSngRoomModel.has(e) && (s._cacheSngRoomModel.get(e).isWatching = a)
        }
        static isSngCacheGameModelWatchingRoom(e) {
            return !!s._cacheSngRoomModel.has(e) && s._cacheSngRoomModel.get(e).isWatching
        }
        static getSngCacheGameModelRewardMsg(e) {
            return s._cacheSngRoomModel.has(e) ? s._cacheSngRoomModel.get(e).rewardMsg : null
        }
        static cacheSngRankInfo(e, a, n) {
            c.appConfig.isLandscapeLayout || (s._cacheSngRank.has(e) ? s._cacheSngRank[e] ? s._cacheSngRank[e].updateValue(a, n) : s._cacheSngRank[e] = new o(a, n) : s._cacheSngRank.set(e, new o(a, n)))
        }
        static removeCacheSngRank(e) {
            s._cacheSngRank.has(e) && s._cacheSngRank.delete(e)
        }
        static getSngCacheRankInfo(e) {
            return s._cacheSngRank.has(e) ? s._cacheSngRank.get(e).rankInfo : null
        }
        static setSngCacheRankGameReleased(e, a) {
            s._cacheSngRank.has(e) ? s._cacheSngRank.get(e).isGameReleased = a : s._cacheSngRank.set(e, new o(a, null))
        }
        static isSngCacheRankGameReleased(e) {
            return !!s._cacheSngRank.has(e) && s._cacheSngRank.get(e).isGameReleased
        }
    }
    e("MultipleGameJsng", s), s._cacheSngRoomModel = new Map, s._cacheSngRank = new Map, a._RF.pop()
}
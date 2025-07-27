import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as n from "./ResLoader.js";

function main() {
    t._RF.push({}, "04376caQUBFWIFIg+vnsQ3O", "PrefabPool", void 0);
    class a {
        constructor(e, t) {
            this._createCount = 0, this._warterMark = 10, this._url = void 0, this._res = null, this._nodes = new Array, this._url = e, this._res = t
        }
        getUrl() {
            return this._url
        }
        getPrefab() {
            return this._nodes.length > 0 ? this._nodes.pop() : (this._createCount++, s(this._res))
        }
        freePrefab(e) {
            if (!e || !o(e)) return r("[ERROR] PrefabPool: freePrefab: isValid node"), void this._createCount--;
            this._warterMark < this._nodes.length ? (this._createCount--, e.destroy()) : this._nodes.push(e)
        }
        setWaterMark(e) {
            this._warterMark = e
        }
        isUnuse() {
            return this._nodes.length > this._createCount && r("PrefabPool: _nodes.length > _createCount"), this._nodes.length == this._createCount
        }
        destory() {
            for (let e of this._nodes) e.destroy();
            this._createCount -= this._nodes.length, this._nodes.length = 0, n.releaseRes(this._url, n.makeUseKey("PrefabPool"))
        }
    }
    e("PrefabPool", a);
    class i {
        static getInstance() {
            return this._prefabPoolMgr || (this._prefabPoolMgr = new i), this._prefabPoolMgr
        }
        static destroy() {
            this._prefabPoolMgr && (this._prefabPoolMgr = null)
        }
        constructor() {
            this._pools = new Map
        }
        initPrefabPool(e, t = null, s = 32) {
            this._pools.has(e) ? t && t(null, this._pools.get(e)) : n.loadRes(e, l, ((o, r) => {
                let l = null;
                o || (l = new a(e, r), l.setWaterMark(s), this._pools.set(e, l)), t && t(o, l)
            }), n.makeUseKey("PrefabPool"))
        }
        getPool(e) {
            return this._pools.get(e)
        }
        hasPool(e) {
            return this._pools.has(e)
        }
        destroyPool(e) {
            this._pools.has(e) && (this._pools.get(e).destory(), this._pools.delete(e))
        }
        initPrefabPoolAsync(e, t = 32) {
            return new Promise(((s, o) => {
                this._pools.has(e) ? s(this._pools.get(e)) : n.loadRes(e, l, ((r, l) => {
                    let n = null;
                    r ? o(r) : (n = new a(e, l), n.setWaterMark(t), this._pools.set(e, n), s(n))
                }), n.makeUseKey("PrefabPool"))
            }))
        }
    }
    i._prefabPoolMgr = null;
    e("PrefabPoolMgr", i.getInstance());
    t._RF.pop()
}
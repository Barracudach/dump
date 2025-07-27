import * as i from "./cc.js";
import * as r from "./cc.js";
import * as t from "./HashMap.js";

function main() {
    r._RF.push({}, "5ff8eUqQxhLSakd9XjT3rRe", "ServerBase", void 0);
    e("ServerBase", class {
        constructor() {
            this._dynamicProxies = {}, this.serverMap = new t
        }
        set dynamicProxies(e) {
            this._dynamicProxies = {
                ...this._dynamicProxies,
                ...e
            };
            for (let r in e) this.reset(r)
        }
        setDynamicProxiesKey(e, r) {
            null != e && "" != e && null != r && 0 != r.length ? (this._dynamicProxies[e] = r, this.reset(e)) : i("ServerBase.setDynamicProxiesKey: key or value is null or empty")
        }
        getDynamicProxiesByKey(e) {
            return null == e || "" == e || null == this._dynamicProxies ? (i("ServerBase.getDynamicProxiesByKey: key or _dynamicProxies is null or empty"), []) : this._dynamicProxies[e] || []
        }
        init() {
            for (var e in this) {
                if ("string" != typeof this[e]) continue;
                const r = this[e].toString();
                null != r && "" != r && this.serverMap.add(e, r)
            }
        }
        ishaveKey(e) {
            return this.serverMap.has(e)
        }
        getString(e) {
            return this.serverMap.get(e)
        }
        getCurrentProxyIndex(e) {
            if (null == e || "" == e || null == this._dynamicProxies) return -1;
            let r = this._dynamicProxies[e];
            if (null != r && r.length > 0) {
                let i = this.getString(e);
                if (null != i) return r.indexOf(i)
            }
            return -1
        }
        nextProxy(e, r = !0) {
            if (null == e || "" == e || null == this._dynamicProxies) return [!1, !1];
            let i = this._dynamicProxies[e],
                t = !1,
                n = !1;
            if (null != i && i.length > 1) {
                t = !0;
                let s = 0,
                    l = this.getCurrentProxyIndex(e);
                l >= 0 && (s = l + 1, s >= i.length && (n = !0, r ? (s = 0, t = !0) : (s--, t = !1)));
                let u = i[s];
                null != u && "" != u && this.serverMap.add(e, u)
            }
            return [t, n]
        }
        nextProxyExist(e) {
            if (null == e || "" == e || null == this._dynamicProxies) return !1;
            let r = this._dynamicProxies[e];
            if (null != r && r.length > 1) {
                if (this.getCurrentProxyIndex(e) < r.length - 1) return !0
            }
            return !1
        }
        reset(e) {
            if (null == e || "" == e || null == this._dynamicProxies) return void i("ServerBase.reset: keyP is null or empty or dynamicProxies is null");
            let r = this._dynamicProxies[e];
            null != r && r.length > 0 && null != r[0] && "" != r[0] && this.serverMap.add(e, r[0])
        }
    }), r._RF.pop()
}
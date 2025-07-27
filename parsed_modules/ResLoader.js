import * as t from "./cc.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    n._RF.push({}, "cf1c1I3QmlHYrGQPhcnzyLl", "ResLoader", void 0);
    let u = o.isChildClassOf;
    u || (u = cc.isChildClassOf);
    class h {
        constructor() {
            this._resMap = new Map
        }
        _getResItem(e, s) {
            let r = d,
                t = r._cache[e];
            if (!t) {
                let l = r._getResUuid(e, s, !1);
                if (l) {
                    let e = r._getReferenceKey(l);
                    t = r._cache[e]
                }
            }
            return t
        }
        _makeLoadResArgs() {
            if (arguments.length < 1) return console.error(`_makeLoadResArgs error ${arguments}`), null;
            let e = {};
            if ("string" == typeof arguments[0]) e.url = arguments[0];
            else {
                if (!(arguments[0] instanceof Array)) return console.error(`_makeLoadResArgs error ${arguments}`), null;
                e.urls = arguments[0]
            }
            for (let r = 1; r < arguments.length; ++r) 1 == r && u(arguments[r], s) ? e.type = arguments[r] : r == arguments.length - 1 && "string" == typeof arguments[r] ? e.use = arguments[r] : "function" == typeof arguments[r] && (arguments.length > r + 1 && "function" == typeof arguments[r + 1] ? e.onProgess = arguments[r] : e.onCompleted = arguments[r]);
            return e
        }
        _makeReleaseResArgs() {
            if (arguments.length < 1) return console.error(`_makeReleaseResArgs error ${arguments}`), null;
            let e = {};
            if ("string" == typeof arguments[0]) e.url = arguments[0];
            else {
                if (!(arguments[0] instanceof Array)) return console.error(`_makeReleaseResArgs error ${arguments}`), null;
                e.urls = arguments[0]
            }
            for (let s = 1; s < arguments.length; ++s) "string" == typeof arguments[s] ? e.use = arguments[s] : e.type = arguments[s];
            return e
        }
        makeUseKey(e, s = "none", r = "") {
            return `use_${e}_by_${s}_for_${r}`
        }
        getCacheInfo(e) {
            return this._resMap.has(e) || this._resMap.set(e, {
                refs: new Set,
                uses: new Set,
                useId: 0
            }), this._resMap.get(e)
        }
        _buildDepend(e, s) {
            if (e && e.dependKeys && Array.isArray(e.dependKeys))
                for (let t of e.dependKeys) {
                    this.getCacheInfo(t).refs.add(s), r(`${t} ref by ${s}`);
                    let e = d._cache[t];
                    this._buildDepend(e, s)
                }
        }
        _finishItem(e, s, r) {
            let l = this._getResItem(e, s);
            if (l && l.id ? this._buildDepend(l, l.id) : t(`addDependKey item error! for ${e}`), l) {
                let e = this.getCacheInfo(l.id);
                e.refs.add(l.id), r && e.uses.add(r)
            }
        }
        loadRes() {
            let e = this._makeLoadResArgs.apply(this, arguments);
            console.time("loadRes|" + e.url);
            let s = (s, r) => {
                    s || this._finishItem(e.url, e.type, e.use), e.onCompleted && e.onCompleted(s, r), console.timeEnd("loadRes|" + e.url)
                },
                r = l.get(e.url, e.type);
            if (r && r.loaded) s(null, r);
            else {
                d._getResUuid(e.url, e.type, !1) ? l.load(e.url, e.type, e.onProgess, s) : i.loadRemote(e.url, e.onProgess, s)
            }
        }
        loadArray() {
            let e = this._makeLoadResArgs.apply(this, arguments);
            l.load(e.urls, e.type, e.onProgess, ((s, r, t) => {
                if (!s)
                    for (let s = 0; s < e.urls.length; ++s) this._finishItem(e.urls[s], e.type, e.use);
                e.onCompleted && e.onCompleted(s, r)
            }))
        }
        loadResDir() {
            let e = this._makeLoadResArgs.apply(this, arguments);
            l.loadDir(e.url, e.type, e.onProgess, ((s, r, t) => {
                if (!s && t)
                    for (let s = 0; s < t.length; ++s) this._finishItem(t[s], e.type, e.use);
                e.onCompleted && e.onCompleted(s, r)
            }))
        }
        releaseArray() {
            let e = this._makeReleaseResArgs.apply(this, arguments);
            for (let s = 0; s < e.urls.length; ++s) this.releaseRes(e.urls[s], e.type, e.use)
        }
        releaseResDir() {
            let e = this._makeReleaseResArgs.apply(this, arguments),
                s = [];
            d._assetTables.assets.getUuidArray(e.url, e.type, s);
            for (let r = 0; r < s.length; ++r) this.releaseRes(s[r], e.type, e.use)
        }
        releaseRes() {
            let e = this._makeReleaseResArgs.apply(this, arguments),
                s = this._getResItem(e.url, e.type);
            if (!s) return void console.warn(`releaseRes item is null ${e.url} ${e.type}`);
            r("resloader release item");
            let t = this.getCacheInfo(s.id);
            e.use && t.uses.delete(e.use), 0 == t.uses.size && this._release(s, s.id)
        }
        _release(e, s) {
            if (!e) return;
            let t = this.getCacheInfo(e.id);
            t.refs.delete(s);
            ((e, s) => {
                if (e && e.dependKeys && Array.isArray(e.dependKeys))
                    for (let r of e.dependKeys) {
                        let e = d._cache[r];
                        this._release(e, s)
                    }
            })(e, s), 0 == t.uses.size && 0 == t.refs.size && (this._isSceneDepend(e.url) ? r("resloader skip release scene depend assets :" + e.url) : e.uuid ? (i.releaseAsset(e), r("resloader release item by uuid :" + e.id)) : (i.releaseAsset(e), r("resloader release item by url:" + e.id)), this._resMap.delete(e.id))
        }
        _isSceneDepend(e) {
            let s = a.getScene(),
                r = s.dependAssets.length;
            for (let t = 0; t < r; ++t)
                if (s.dependAssets[t] == e) return !0;
            return !1
        }
        checkReleaseUse() {
            let e = this._makeReleaseResArgs.apply(this, arguments),
                s = this._getResItem(e.url, e.type);
            if (!s) return console.log(`cant release,item is null ${e.url} ${e.type}`), !0;
            let r = this.getCacheInfo(s.id),
                t = !1,
                l = !1;
            return t = !(e.use && r.uses.size > 0) || !(1 != r.uses.size || !r.uses.has(e.use)), l = !!(1 == r.refs.size && r.refs.has(s.id) || 0 == r.refs.size), t && l
        }
    }
    e("default", h);
    e("resLoader", new h);
    n._RF.pop()
}
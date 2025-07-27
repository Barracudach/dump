import * as e from "./cc.js";

function main() {
    e._RF.push({}, "dd080z1K9FHi5Tzih+7q1eH", "HashMap", void 0);
    t("HashMap", class {
        constructor() {
            this._list = [], this.clear()
        }
        _getIndexByKey(t) {
            let e = this._list.length;
            for (let s = 0; s < e; ++s) {
                if (this._list[s].key === t) return s
            }
            return -1
        }
        add(t, e, s = !0) {
            let i = {
                    key: t,
                    value: e
                },
                l = this._getIndexByKey(t); - 1 !== l && s ? this._list[l] = i : this._list.push(i)
        }
        remove(t) {
            let e = this._getIndexByKey(t);
            if (-1 !== e) {
                let t = this._list[e];
                return this._list.splice(e, 1), t
            }
            return null
        }
        has(t) {
            return -1 !== this._getIndexByKey(t)
        }
        get(t) {
            let e = this._getIndexByKey(t);
            if (-1 !== e) {
                return this._list[e].value
            }
            return null
        }
        get length() {
            return this._list.length
        }
        forEachKeyValue(t) {
            let e = this._list.length;
            for (let s = 0; s < e; ++s) {
                let e = t(this._list[s], s);
                if ("continue" !== e && "break" === e) break
            }
        }
        forEach(t) {
            let e = this._list.length;
            for (let s = 0; s < e; ++s) {
                const e = this._list[s];
                let i = t(e.key, e.value, s);
                if ("continue" !== i && "break" === i) break
            }
        }
        clear() {
            this._list = []
        }
    }), e._RF.pop()
}